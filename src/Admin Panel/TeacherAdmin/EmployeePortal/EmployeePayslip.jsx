import React, { useState, useEffect } from "react";
import {
  Box,
  Heading,
  Text,
  Card,
  CardHeader,
  CardBody,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Badge,
  useColorModeValue,
  useToast,
  Flex,
  Spinner,
} from "@chakra-ui/react";
import { FaDownload, FaFileInvoiceDollar } from "react-icons/fa";
import { MOCK_PAYSLIPS } from "./api/mockEmployeeData";
import { getMyPayslips, downloadPayslipPdf } from "./api/employeePortalApi";

export default function EmployeePayslip() {
  const [payslips, setPayslips] = useState(MOCK_PAYSLIPS);
  const [loading, setLoading] = useState(true);
  const [downloadingId, setDownloadingId] = useState(null);
  const toast = useToast();
  const cardBg = useColorModeValue("white", "gray.800");

  useEffect(() => {
    const load = async () => {
      try {
        const apiPayslips = await getMyPayslips();
        if (Array.isArray(apiPayslips) && apiPayslips.length) {
          setPayslips(apiPayslips);
        }
      } catch {
        // fallback to mock
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const monthName = (m) => {
    if (typeof m === "string") return m;
    const names = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return names[m] ?? m;
  };
  const allowances = (p) => (p.hra ?? 0) + (p.specialAllowance ?? 0) + (p.allowances ?? 0);
  const deductions = (p) => (p.professionalTax ?? 0) + (p.pfDeduction ?? 0) + (p.otherDeductions ?? 0) + (p.deductions ?? 0);

  const buildPayslipText = (p) =>
    `Payslip\nMonth: ${monthName(p.month)} ${p.year}\nBasic: ${p.basicSalary ?? 0}\nHRA: ${p.hra ?? 0}\nSpecial Allowance: ${p.specialAllowance ?? 0}\nGross: ${p.grossSalary ?? 0}\nDeductions: ${deductions(p)}\nNet: ${p.netSalary ?? 0}`;

  const handleDownload = async (payslip) => {
    setDownloadingId(payslip.id);
    try {
      const result = await downloadPayslipPdf(payslip.id);
      const text = result?.type === "json" && result?.data
        ? buildPayslipText(result.data)
        : buildPayslipText(payslip);
      const blob = result?.type === "json" || !(result instanceof Blob)
        ? new Blob([text], { type: "text/plain" })
        : result;
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = result instanceof Blob && result.type?.includes("pdf")
        ? `Payslip-${monthName(payslip.month)}-${payslip.year}.pdf`
        : `Payslip-${monthName(payslip.month)}-${payslip.year}.txt`;
      a.click();
      URL.revokeObjectURL(url);
      toast({ status: "success", title: "Payslip downloaded" });
    } catch (e) {
      console.error(e);
      const text = buildPayslipText(payslip);
      const blob = new Blob([text], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `Payslip-${monthName(payslip.month)}-${payslip.year}.txt`;
      a.click();
      URL.revokeObjectURL(url);
      toast({ status: "info", title: "Payslip saved as text" });
    } finally {
      setDownloadingId(null);
    }
  };

  if (loading) {
    return (
      <Flex minH="50vh" align="center" justify="center">
        <Spinner size="xl" color="teal.500" />
      </Flex>
    );
  }

  return (
    <Box>
      <Heading size="lg" mb={2} color="teal.600">
        Payslips
      </Heading>
      <Text color="gray.600" mb={6}>
        View your monthly salary details and download payslips as PDF.
      </Text>

      <Card bg={cardBg} shadow="sm">
        <CardHeader>
          <Heading size="md" display="flex" alignItems="center" gap={2}>
            <FaFileInvoiceDollar /> My Payslips
          </Heading>
        </CardHeader>
        <CardBody>
          {payslips.length === 0 ? (
            <Text color="gray.500">No payslips available.</Text>
          ) : (
            <Table size="sm">
              <Thead>
                <Tr>
                  <Th>Month</Th>
                  <Th isNumeric>Basic</Th>
                  <Th isNumeric>Allowances</Th>
                  <Th isNumeric>Deductions</Th>
                  <Th isNumeric>Net</Th>
                  <Th>Paid On</Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                {payslips.map((p) => (
                  <Tr key={p.id}>
                    <Td>
                      {monthName(p.month)} {p.year}
                    </Td>
                    <Td isNumeric>₹{(p.basicSalary ?? 0).toLocaleString("en-IN")}</Td>
                    <Td isNumeric>₹{allowances(p).toLocaleString("en-IN")}</Td>
                    <Td isNumeric>₹{deductions(p).toLocaleString("en-IN")}</Td>
                    <Td isNumeric>
                      <Badge colorScheme="green">
                        ₹{(p.netSalary ?? 0).toLocaleString("en-IN")}
                      </Badge>
                    </Td>
                    <Td>{p.paidOn ?? "-"}</Td>
                    <Td>
                      <Button
                        size="sm"
                        leftIcon={<FaDownload />}
                        onClick={() => handleDownload(p)}
                        isLoading={downloadingId === p.id}
                        variant="outline"
                        colorScheme="teal"
                      >
                        Download
                      </Button>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          )}
        </CardBody>
      </Card>
    </Box>
  );
}

