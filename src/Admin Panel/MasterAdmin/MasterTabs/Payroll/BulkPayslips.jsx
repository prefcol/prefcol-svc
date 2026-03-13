import React, { useEffect, useMemo, useState } from "react";
import {
  Box,
  Heading,
  Text,
  Card,
  CardHeader,
  CardBody,
  HStack,
  VStack,
  Select,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Input,
  Badge,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import brandLogo from "../../../../assets/Brand Logo.jpg";

// Simple mock employee list – used only as fallback when backend/local store are empty
const MOCK_EMPLOYEES = [
  {
    id: 1,
    name: "Kowsalya P",
    code: "PREFCOLCHY0001",
    role: "Academic Coordinator",
    dept: "Academics",
    location: "Chennai",
    ctc: 120000,
    dateOfJoining: "2025-10-06",
    pan: "HJMPM3654J",
    bankAccountNo: "809401502557",
  },
  {
    id: 2,
    name: "Aarthi B",
    code: "PREFCOLCHY0002",
    role: "Trainer - Java",
    dept: "IT Training",
    location: "Chennai",
    ctc: 120000,
    dateOfJoining: "2025-10-07",
    pan: "ETXPA6836C",
    bankAccountNo: "123456789012",
  },
  // {
  //   id: 3,
  //   name: "Priya S",
  //   code: "PREFCOLCHY0003",
  //   role: "Counsellor",
  //   dept: "Sales",
  //   location: "Chennai",
  //   ctc: 150000,
  //   dateOfJoining: "2025-09-01",
  //   pan: "PRIYA5678Q",
  //   bankAccountNo: "987654321001",
  // },
  {
    id: 4,
    name: "Shahina Banu",
    code: "PREFCOLCHY0016",
    role: "Software Developer",
    dept: "Information Technology",
    location: "Chennai",
    ctc: 240000,
    dateOfJoining: "2026-01-16",
    pan: "SHAHI1234R",
    bankAccountNo: "556677889900",
  },
];

import { getEmployees, sendPayslipEmail } from "../../../api/adminApi";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function BulkPayslips() {
  const toast = useToast();
  const currentYear = new Date().getFullYear();
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(currentYear);
  const [dept, setDept] = useState("all");
  const [location, setLocation] = useState("all");
  const [rows, setRows] = useState([]);
  const [generating, setGenerating] = useState(false);
  const [previewRow, setPreviewRow] = useState(null);
  const [sendingEmail, setSendingEmail] = useState(false);

  // Load employees from Admin API / localStorage so newly added employees show up here
  useEffect(() => {
    const load = async () => {
      try {
        const data = await getEmployees();
        const list = Array.isArray(data) && data.length ? data : MOCK_EMPLOYEES;

        setRows(
          list.map((e, index) => {
            const ctc =
              e.ctc ??
              e.annualCtc ??
              (typeof e.monthlyCtc === "number" ? e.monthlyCtc * 12 : 0);
            const baseCode =
              e.code || e.employeeCode || `EMP-${String(index + 1).padStart(4, "0")}`;

            return {
              employeeId: e.id ?? baseCode,
              name: e.name || "Employee",
              code: baseCode,
              role: e.role || "Employee",
              dept: e.department || e.dept || "General",
              location: e.location || "Chennai",
              basic: ctc ? Math.round((ctc * 0.4) / 12) : 0,
              hra: ctc ? Math.round((ctc * 0.2) / 12) : 0,
              allowances: ctc ? Math.round((ctc * 0.2) / 12) : 0,
              deductions: ctc ? Math.round((ctc * 0.1) / 12) : 0,
              dateOfJoining: e.dateOfJoining || e.joiningDate || "",
              pan: e.pan || e.panNumber || "",
              bankAccountNo: e.bankAccountNo || e.bankAccount || "",
            };
          })
        );
      } catch (err) {
        console.error("Failed to load employees for payroll:", err);
        setRows(
          MOCK_EMPLOYEES.map((e) => ({
            employeeId: e.id,
            name: e.name,
            code: e.code,
            role: e.role,
            dept: e.dept,
            location: e.location,
            basic: Math.round((e.ctc * 0.4) / 12),
            hra: Math.round((e.ctc * 0.2) / 12),
            allowances: Math.round((e.ctc * 0.2) / 12),
            deductions: Math.round((e.ctc * 0.1) / 12),
            dateOfJoining: e.dateOfJoining || "",
            pan: e.pan || "",
            bankAccountNo: e.bankAccountNo || "",
          }))
        );
      }
    };

    load();
  }, []);

  const filteredRows = useMemo(
    () =>
      rows.filter(
        (r) =>
          (dept === "all" || r.dept === dept) &&
          (location === "all" || r.location === location)
      ),
    [rows, dept, location]
  );

  const handleChange = (index, field, value) => {
    setRows((prev) =>
      prev.map((row, i) =>
        i === index ? { ...row, [field]: Number(value) || 0 } : row
      )
    );
  };

  const handleDownloadPayslip = (row) => {
    const period = `${months[month]} ${year}`;
    const net =
      (row.basic || 0) + (row.hra || 0) + (row.allowances || 0) - (row.deductions || 0);
    const gross = (row.basic || 0) + (row.hra || 0) + (row.allowances || 0);
    const ctc = gross * 12;
    const monthDays = 30;
    const paidDays = monthDays;
    const lopDays = 0;

    const joiningDate = row.joiningDate || row.dateOfJoining || "";
    const pan = row.pan || row.panNumber || "";
    const bankAccount = row.bankAccountNo || row.bankAccount || "";

    const html = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>PREFCOL Payslip - ${row.name} - ${period}</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        font-size: 12px;
        color: #222;
        margin: 0;
        padding: 24px 32px;
      }
      .header-brand {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        border-bottom: 2px solid #0f7f3b;
        padding-bottom: 2px;
      }
      .brand-logo img {
        height: 88px;
      }
      .brand-sub {
        margin-top: 6px;
        font-size: 12px;
        color: #555;
      }
      .contact {
        text-align: right;
        font-size: 11px;
        color: #555;
      }
      .section-title {
        text-align: center;
        margin: 16px 0 8px;
        font-size: 18px;
        font-weight: 600;
        color: #0f7f3b;
      }
      .section-subtitle {
        text-align: center;
        margin-bottom: 16px;
        font-size: 12px;
      }
      .summary-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 4px 48px;
        margin-bottom: 16px;
      }
      .summary-label {
        font-weight: 600;
        min-width: 120px;
        display: inline-block;
      }
      table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 8px;
      }
      th, td {
        border: 1px solid #ccc;
        padding: 6px 8px;
      }
      th {
        background-color: #f3f3f3;
        text-align: left;
        font-weight: 600;
      }
      tfoot td {
        font-weight: 600;
      }
      .net-row td {
        border-top: 2px solid #0f7f3b;
      }
      .note {
        margin-top: 24px;
        font-size: 11px;
        color: #555;
      }
    </style>
  </head>
  <body>
    <div class="header-brand">
      <div>
        <div class="brand-logo">
          <img src="${brandLogo}" alt="PREFCOL Edutech Solutions (OPC) Pvt Ltd" />
        </div>
        <div class="brand-sub">
          Olympia Technology Park Address: Level 5, Fortius Tower, Olympia Tech Park, Plot No.1 SIDCO
          Industrial Estate, Guindy, Chennai, Tamil Nadu, 600032, India
        </div>
      </div>
      <div class="contact">
        info@prefcol.com<br/>
        9445918818<br/>
        www.prefcol.com
      </div>
    </div>

    <div class="section-title">Employee Payslip</div>
    <div class="section-subtitle">Payslip for the month of ${period}</div>

    <h4>Pay Summary</h4>
    <div class="summary-grid">
      <div><span class="summary-label">Name</span> ${row.name}</div>
      <div><span class="summary-label">EMP Code</span> ${row.code || row.employeeId}</div>
      <div><span class="summary-label">Designation</span> ${row.role}</div>
      <div><span class="summary-label">Department</span> ${row.dept}</div>
      <div><span class="summary-label">Date of Joining</span> ${joiningDate || "-"}</div>
      <div><span class="summary-label">PAN</span> ${pan || "-"}</div>
      <div><span class="summary-label">Bank Account No</span> ${bankAccount || "-"}</div>
      <div><span class="summary-label">Work Location</span> ${row.location}</div>
      <div><span class="summary-label">Pay Period</span> ${period}</div>
      <div><span class="summary-label">CTC</span> ${ctc.toFixed(2)}</div>
    </div>

    <div style="margin: 8px 0 4px; font-size: 11px;">
      Month Days: ${monthDays} &nbsp;&nbsp;&nbsp;
      Paid Days: ${paidDays} &nbsp;&nbsp;&nbsp;
      LOP Days: ${lopDays} &nbsp;&nbsp;&nbsp;
      CTC: ${ctc.toFixed(2)}
    </div>

    <table>
      <thead>
        <tr>
          <th>Earnings</th>
          <th style="text-align:right;">Amount (₹)</th>
          <th>Deductions</th>
          <th style="text-align:right;">Amount (₹)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Basic</td>
          <td style="text-align:right;">${row.basic || 0}</td>
          <td>PF Amount</td>
          <td style="text-align:right;">0.00</td>
        </tr>
        <tr>
          <td>HRA</td>
          <td style="text-align:right;">${row.hra || 0}</td>
          <td>ESIC</td>
          <td style="text-align:right;">0.00</td>
        </tr>
        <tr>
          <td>Allowances</td>
          <td style="text-align:right;">${row.allowances || 0}</td>
          <td>TDS</td>
          <td style="text-align:right;">0.00</td>
        </tr>
        <tr>
          <td>Other</td>
          <td style="text-align:right;">0.00</td>
          <td>Other Deductions</td>
          <td style="text-align:right;">${row.deductions || 0}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td style="text-align:right;">${net}</td>
          <td>Total</td>
          <td style="text-align:right;">${row.deductions || 0}</td>
        </tr>
        <tr class="net-row">
          <td colspan="3">Net Pay</td>
          <td style="text-align:right;">${net}</td>
        </tr>
      </tfoot>
    </table>

    <div class="note">
      Note: This is a computer generated payslip and does not require a physical signature.
    </div>

    <script>
      window.onload = function() {
        window.print();
      };
    </script>
  </body>
</html>
    `;

    const win = window.open("", "_blank");
    if (win) {
      win.document.open();
      win.document.write(html);
      win.document.close();
    } else {
      toast({
        status: "error",
        title: "Popup blocked",
        description: "Allow popups for this site to print/download the payslip.",
      });
    }
  };

  const handleSendEmail = async (row) => {
    if (!row || !row.code) {
      toast({
        status: "warning",
        title: "Missing employee code",
        description: "Cannot send payslip email without an employee code.",
      });
      return;
    }
    setSendingEmail(true);
    try {
      await sendPayslipEmail({
        employeeCode: row.code,
        month: months[month],
        year,
      });
      toast({
        status: "success",
        title: "Payslip email sent",
        description: `Payslip emailed to ${row.name}'s registered address.`,
      });
    } catch (err) {
      toast({
        status: "error",
        title: "Failed to send email",
        description: err.message || "Please check the backend email service.",
      });
    } finally {
      setSendingEmail(false);
    }
  };

  const handleGenerate = () => {
    setGenerating(true);
    // In a real app, POST to backend here.
    setTimeout(() => {
      setGenerating(false);
      toast({
        status: "success",
        title: "Payslips generated",
        description: `Generated ${filteredRows.length} payslips for ${months[month]} ${year}.`,
      });
    }, 1000);
  };

  return (
    <Box>
      <Heading size="lg" mb={2} color="teal.300">
        Generate Monthly Payslips
      </Heading>
      <Text color="gray.300" mb={6}>
        Choose the payroll period and optionally filter by department/location.
        You can fine‑tune salary components before generating payslips.
      </Text>

      <Card
        mb={6}
        bg="rgba(15,23,42,0.75)"
        borderColor="whiteAlpha.200"
        borderWidth="1px"
        color="gray.100"
      >
        <CardHeader>
          <Heading size="md" color="teal.200">
            Payroll Period
          </Heading>
        </CardHeader>
        <CardBody>
          <HStack spacing={4} flexWrap="wrap">
            <VStack align="start" spacing={1}>
              <Text fontSize="sm" color="gray.100">
                Month
              </Text>
              <Select
                value={month}
                onChange={(e) => setMonth(Number(e.target.value))}
                bg="gray.900"
                borderColor="whiteAlpha.300"
              >
                {months.map((m, idx) => (
                  <option key={m} value={idx}>
                    {m}
                  </option>
                ))}
              </Select>
            </VStack>

            <VStack align="start" spacing={1}>
              <Text fontSize="sm" color="gray.100">
                Year
              </Text>
              <Input
                type="number"
                value={year}
                onChange={(e) => setYear(Number(e.target.value) || currentYear)}
                bg="gray.900"
                borderColor="whiteAlpha.300"
                width="100px"
              />
            </VStack>

            <VStack align="start" spacing={1}>
              <Text fontSize="sm" color="gray.100">
                Department
              </Text>
              <Select
                value={dept}
                onChange={(e) => setDept(e.target.value)}
                bg="gray.900"
                borderColor="whiteAlpha.300"
              >
                <option value="all">All</option>
                <option value="Academics">Academics</option>
                <option value="IT Training">IT Training</option>
                <option value="Sales">Sales</option>
              </Select>
            </VStack>

            <VStack align="start" spacing={1}>
              <Text fontSize="sm" color="gray.100">
                Location
              </Text>
              <Select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                bg="gray.900"
                borderColor="whiteAlpha.300"
              >
                <option value="all">All</option>
                <option value="Chennai">Chennai</option>
              </Select>
            </VStack>
          </HStack>
        </CardBody>
      </Card>

      <Card
        bg="rgba(15,23,42,0.9)"
        borderColor="whiteAlpha.200"
        borderWidth="1px"
        color="gray.100"
      >
        <CardHeader>
          <HStack justify="space-between">
            <Heading size="md" color="teal.200">
              Employee Salary Breakdown
            </Heading>
            <Badge colorScheme="teal" variant="subtle">
              {filteredRows.length} employees
            </Badge>
          </HStack>
        </CardHeader>
        <CardBody>
          {filteredRows.length === 0 ? (
            <Text color="gray.200">No employees match the current filters.</Text>
          ) : (
            <Box overflowX="auto">
              <Table size="sm" variant="simple" color="gray.100">
                <Thead>
                  <Tr>
                    <Th color="teal.100">Employee</Th>
                    <Th color="teal.100">Code</Th>
                    <Th color="teal.100">Role</Th>
                    <Th isNumeric color="teal.100">
                      Basic
                    </Th>
                    <Th isNumeric color="teal.100">
                      HRA
                    </Th>
                    <Th isNumeric color="teal.100">
                      Allowances
                    </Th>
                    <Th isNumeric color="teal.100">
                      Deductions
                    </Th>
                    <Th isNumeric color="teal.100">
                      Net / Month
                    </Th>
                    <Th color="teal.100">Payslip</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {filteredRows.map((row, index) => {
                    const net =
                      (row.basic || 0) + (row.hra || 0) + (row.allowances || 0) - (row.deductions || 0);
                    return (
                      <Tr key={row.employeeId}>
                        <Td>{row.name}</Td>
                        <Td>{row.code}</Td>
                        <Td>{row.role}</Td>
                        <Td isNumeric>
                          <Input
                            type="number"
                            value={row.basic}
                            onChange={(e) => handleChange(index, "basic", e.target.value)}
                            size="sm"
                            bg="gray.900"
                            color="teal.100"
                            borderColor="whiteAlpha.300"
                            _hover={{ borderColor: "teal.400" }}
                            _focus={{
                              borderColor: "teal.300",
                              boxShadow: "0 0 0 1px rgba(56, 178, 172, 0.6)",
                            }}
                          />
                        </Td>
                        <Td isNumeric>
                          <Input
                            type="number"
                            value={row.hra}
                            onChange={(e) => handleChange(index, "hra", e.target.value)}
                            size="sm"
                            bg="gray.900"
                            color="teal.100"
                            borderColor="whiteAlpha.300"
                            _hover={{ borderColor: "teal.400" }}
                            _focus={{
                              borderColor: "teal.300",
                              boxShadow: "0 0 0 1px rgba(56, 178, 172, 0.6)",
                            }}
                          />
                        </Td>
                        <Td isNumeric>
                          <Input
                            type="number"
                            value={row.allowances}
                            onChange={(e) => handleChange(index, "allowances", e.target.value)}
                            size="sm"
                            bg="gray.900"
                            color="teal.100"
                            borderColor="whiteAlpha.300"
                            _hover={{ borderColor: "teal.400" }}
                            _focus={{
                              borderColor: "teal.300",
                              boxShadow: "0 0 0 1px rgba(56, 178, 172, 0.6)",
                            }}
                          />
                        </Td>
                        <Td isNumeric>
                          <Input
                            type="number"
                            value={row.deductions}
                            onChange={(e) => handleChange(index, "deductions", e.target.value)}
                            size="sm"
                            bg="gray.900"
                            color="teal.100"
                            borderColor="whiteAlpha.300"
                            _hover={{ borderColor: "teal.400" }}
                            _focus={{
                              borderColor: "teal.300",
                              boxShadow: "0 0 0 1px rgba(56, 178, 172, 0.6)",
                            }}
                          />
                        </Td>
                        <Td isNumeric>
                          <Badge colorScheme="green">₹{net.toLocaleString("en-IN")}</Badge>
                        </Td>
                        <Td>
                          <HStack spacing={2}>
                            <Button
                              size="xs"
                              variant="outline"
                              colorScheme="teal"
                              onClick={() => handleDownloadPayslip(row)}
                            >
                              PDF
                            </Button>
                            <Button
                              size="xs"
                              variant="outline"
                              colorScheme="purple"
                              onClick={() => setPreviewRow(row)}
                            >
                              Preview
                            </Button>
                          </HStack>
                        </Td>
                      </Tr>
                    );
                  })}
                </Tbody>
              </Table>
            </Box>
          )}

          <HStack justify="flex-end" mt={6}>
            <Button
              colorScheme="teal"
              size="md"
              onClick={handleGenerate}
              isLoading={generating}
              loadingText="Generating"
            >
              Generate Payslips
            </Button>
          </HStack>
        </CardBody>
      </Card>
      <Modal isOpen={!!previewRow} onClose={() => setPreviewRow(null)} size="lg" isCentered>
        <ModalOverlay />
        <ModalContent bg="gray.900" color="gray.100">
          <ModalHeader>Preview Payslip</ModalHeader>
          <ModalCloseButton />
          {previewRow && (
            <ModalBody>
              <Text mb={2}>
                <strong>Employee:</strong> {previewRow.name} ({previewRow.code})
              </Text>
              <Text mb={1}>
                <strong>Role:</strong> {previewRow.role}
              </Text>
              <Text mb={1}>
                <strong>Department:</strong> {previewRow.dept}
              </Text>
              <Text mb={1}>
                <strong>Location:</strong> {previewRow.location}
              </Text>
              <Text mb={1}>
                <strong>Pay Period:</strong> {months[month]} {year}
              </Text>
              <Text mt={3} fontSize="sm" color="gray.300">
                Choose an action for this employee’s payslip.
              </Text>
            </ModalBody>
          )}
          <ModalFooter>
            <HStack spacing={3}>
              <Button
                colorScheme="teal"
                size="sm"
                onClick={() => previewRow && handleDownloadPayslip(previewRow)}
              >
                Download PDF
              </Button>
              <Button
                colorScheme="purple"
                size="sm"
                isLoading={sendingEmail}
                onClick={() => previewRow && handleSendEmail(previewRow)}
              >
                Send Email
              </Button>
              <Button variant="ghost" size="sm" onClick={() => setPreviewRow(null)}>
                Close
              </Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

