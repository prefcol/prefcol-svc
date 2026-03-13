import React, { useMemo, useState } from "react";
import {
  Box,
  Heading,
  Text,
  Card,
  CardHeader,
  CardBody,
  HStack,
  VStack,
  Input,
  Select,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Badge,
  Button,
  useToast,
} from "@chakra-ui/react";

const MOCK_HISTORY = [
  {
    id: 1,
    employee: "Kowsalya P",
    code: "PREFCOLCHY0001",
    month: "November",
    year: 2025,
    net: 12000,
    status: "Issued",
  },
  {
    id: 2,
    employee: "Arun K",
    code: "PREFCOLCHY0002",
    month: "October",
    year: 2025,
    net: 15000,
    status: "Issued",
  },
];

const statuses = ["Issued", "Revised", "Cancelled"];

export default function PayslipHistory() {
  const toast = useToast();
  const [search, setSearch] = useState("");
  const [month, setMonth] = useState("all");
  const [year, setYear] = useState("all");
  const [rows, setRows] = useState(MOCK_HISTORY);

  const filtered = useMemo(
    () =>
      rows.filter(
        (r) =>
          (month === "all" || r.month === month) &&
          (year === "all" || String(r.year) === String(year)) &&
          (search === "" ||
            r.employee.toLowerCase().includes(search.toLowerCase()) ||
            r.code.toLowerCase().includes(search.toLowerCase()))
      ),
    [rows, month, year, search]
  );

  const handleStatusChange = (id, newStatus) => {
    setRows((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status: newStatus } : r))
    );
    toast({
      status: "info",
      title: `Payslip marked as ${newStatus}`,
    });
  };

  const handleDownload = (row, as = "pdf") => {
    // Placeholder – integrate with backend later
    toast({
      status: "success",
      title: `Downloading ${as.toUpperCase()} for ${row.employee}`,
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <Box>
      <Heading size="lg" mb={2} color="teal.300">
        Payslip History
      </Heading>
      <Text color="gray.300" mb={6}>
        Review generated payslips, download copies, or update their status.
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
            Filters
          </Heading>
        </CardHeader>
        <CardBody>
          <HStack spacing={4} flexWrap="wrap">
            <VStack align="start" spacing={1}>
              <Text fontSize="sm" color="gray.100">
                Employee / Code
              </Text>
              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by name or code"
                bg="gray.900"
                borderColor="whiteAlpha.300"
              />
            </VStack>

            <VStack align="start" spacing={1}>
              <Text fontSize="sm" color="gray.100">
                Month
              </Text>
              <Select
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                bg="gray.900"
                borderColor="whiteAlpha.300"
              >
                <option value="all">All</option>
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
              </Select>
            </VStack>

            <VStack align="start" spacing={1}>
              <Text fontSize="sm" color="gray.100">
                Year
              </Text>
              <Select
                value={year}
                onChange={(e) => setYear(e.target.value)}
                bg="gray.900"
                borderColor="whiteAlpha.300"
              >
                <option value="all">All</option>
                <option value={currentYear}>{currentYear}</option>
                <option value={currentYear - 1}>{currentYear - 1}</option>
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
              Generated Payslips
            </Heading>
            <Badge colorScheme="teal" variant="subtle">
              {filtered.length} records
            </Badge>
          </HStack>
        </CardHeader>
        <CardBody>
          {filtered.length === 0 ? (
            <Text color="gray.200">No payslips match the current filters.</Text>
          ) : (
            <Box overflowX="auto">
              <Table size="sm" variant="simple" color="gray.100">
                <Thead>
                  <Tr>
                    <Th color="teal.100">Employee</Th>
                    <Th color="teal.100">Code</Th>
                    <Th color="teal.100">Period</Th>
                    <Th isNumeric color="teal.100">
                      Net
                    </Th>
                    <Th color="teal.100">Status</Th>
                    <Th color="teal.100">Actions</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {filtered.map((row) => (
                    <Tr key={row.id}>
                      <Td>{row.employee}</Td>
                      <Td>{row.code}</Td>
                      <Td>
                        {row.month} {row.year}
                      </Td>
                      <Td isNumeric>
                        <Badge colorScheme="green">₹{row.net.toLocaleString("en-IN")}</Badge>
                      </Td>
                      <Td>
                        <Select
                          size="sm"
                          value={row.status}
                          onChange={(e) => handleStatusChange(row.id, e.target.value)}
                          bg="gray.900"
                          borderColor="whiteAlpha.300"
                        >
                          {statuses.map((s) => (
                            <option key={s} value={s}>
                              {s}
                            </option>
                          ))}
                        </Select>
                      </Td>
                      <Td>
                        <HStack spacing={2}>
                          <Button
                            size="xs"
                            variant="outline"
                            colorScheme="teal"
                            onClick={() => handleDownload(row, "pdf")}
                          >
                            PDF
                          </Button>
                          <Button
                            size="xs"
                            variant="outline"
                            onClick={() => handleDownload(row, "txt")}
                          >
                            TXT
                          </Button>
                        </HStack>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </Box>
          )}
        </CardBody>
      </Card>
    </Box>
  );
}

