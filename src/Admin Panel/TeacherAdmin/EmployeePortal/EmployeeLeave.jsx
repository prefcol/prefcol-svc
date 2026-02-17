import React, { useState, useEffect } from "react";
import {
  Box,
  Heading,
  Text,
  Card,
  CardHeader,
  CardBody,
  SimpleGrid,
  FormControl,
  FormLabel,
  Select,
  Input,
  Textarea,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Badge,
  useToast,
  useColorModeValue,
  Flex,
  Spinner,
} from "@chakra-ui/react";
import { MOCK_LEAVE_BALANCE, MOCK_LEAVES } from "./api/mockEmployeeData";
import { applyLeave, getMyLeaves, getLeaveBalance } from "./api/employeePortalApi";

export default function EmployeeLeave() {
  const [leaveType, setLeaveType] = useState("Casual");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [reason, setReason] = useState("");
  const [leaves, setLeaves] = useState(MOCK_LEAVES);
  const [balance, setBalance] = useState(MOCK_LEAVE_BALANCE);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const toast = useToast();
  const cardBg = useColorModeValue("white", "gray.800");

  useEffect(() => {
    const load = async () => {
      try {
        const [apiLeaves, apiBalance] = await Promise.allSettled([
          getMyLeaves(),
          getLeaveBalance(),
        ]);
        if (apiLeaves.status === "fulfilled" && Array.isArray(apiLeaves.value)) {
          setLeaves(apiLeaves.value);
        }
        if (apiBalance.status === "fulfilled" && apiBalance.value) {
          setBalance(apiBalance.value);
        }
      } catch {
        // fallback to mock
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const resetForm = () => {
    setLeaveType("Casual");
    setFromDate("");
    setToDate("");
    setReason("");
  };

  const handleApply = async () => {
    if (!fromDate || !toDate || !reason.trim()) {
      toast({ status: "warning", title: "Please fill all required fields" });
      return;
    }
    setSubmitting(true);
    const body = {
      leaveType: leaveType.toUpperCase(),
      startDate: fromDate,
      endDate: toDate,
      reason: reason.trim(),
    };
    try {
      const res = await applyLeave(body);
      if (res && res.id) {
        setLeaves((prev) => [res, ...prev]);
      } else {
        const fake = {
          id: `local-${Date.now()}`,
          leaveType,
          startDate: fromDate,
          endDate: toDate,
          reason,
          status: "PENDING",
          createdAt: new Date().toISOString(),
        };
        setLeaves((prev) => [fake, ...prev]);
      }
      toast({ status: "success", title: "Leave applied successfully" });
      resetForm();
    } catch (e) {
      console.error(e);
      toast({ status: "error", title: "Failed to apply leave" });
    } finally {
      setSubmitting(false);
    }
  };

  const statusColor = (status) => {
    const s = (status || "").toUpperCase();
    if (s === "APPROVED") return "green";
    if (s === "REJECTED") return "red";
    return "orange";
  };
  const displayDate = (d) => (d ? (d.split && d.split("T")[0]) : "-");

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
        Leave Management
      </Heading>
      <Text color="gray.600" mb={6}>
        Apply for leave and track your leave status and balance.
      </Text>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4} mb={6}>
        <Card bg={cardBg} shadow="sm">
          <CardHeader pb={2}>
            <Heading size="sm">Total Balance</Heading>
          </CardHeader>
          <CardBody>
            <Text fontSize="2xl" fontWeight="bold" color="teal.600">
              {(balance.total ?? (balance.casualBalance ?? balance.casual ?? 0) + (balance.sickBalance ?? balance.sick ?? 0) + (balance.emergencyBalance ?? balance.paid ?? 0))}
            </Text>
            <Text fontSize="xs" color="gray.500">
              Casual: {balance.casualBalance ?? balance.casual ?? 0} · Sick: {balance.sickBalance ?? balance.sick ?? 0} · Emergency: {balance.emergencyBalance ?? balance.paid ?? 0}
            </Text>
          </CardBody>
        </Card>
      </SimpleGrid>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
        {/* Apply Leave Form */}
        <Card bg={cardBg} shadow="sm">
          <CardHeader>
            <Heading size="md">Apply for Leave</Heading>
          </CardHeader>
          <CardBody>
            <SimpleGrid columns={1} spacing={4}>
              <FormControl isRequired>
                <FormLabel>Leave Type</FormLabel>
                <Select value={leaveType} onChange={(e) => setLeaveType(e.target.value)}>
                  <option value="Casual">Casual</option>
                  <option value="Sick">Sick</option>
                  <option value="Emergency">Emergency</option>
                </Select>
              </FormControl>

              <FormControl isRequired>
                <FormLabel>From Date</FormLabel>
                <Input type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>To Date</FormLabel>
                <Input type="date" value={toDate} onChange={(e) => setToDate(e.target.value)} />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Reason</FormLabel>
                <Textarea
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  rows={3}
                  placeholder="Provide a short reason for your leave"
                />
              </FormControl>

              <Button
                colorScheme="teal"
                onClick={handleApply}
                isLoading={submitting}
                alignSelf="flex-start"
              >
                Apply Leave
              </Button>
            </SimpleGrid>
          </CardBody>
        </Card>

        {/* Leave History */}
        <Card bg={cardBg} shadow="sm">
          <CardHeader>
            <Heading size="md">My Leaves</Heading>
          </CardHeader>
          <CardBody>
            {leaves.length === 0 ? (
              <Text color="gray.500">No leave applications yet.</Text>
            ) : (
              <Table size="sm">
                <Thead>
                  <Tr>
                    <Th>Type</Th>
                    <Th>From</Th>
                    <Th>To</Th>
                    <Th>Status</Th>
                    <Th>Applied On</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {leaves.map((l) => (
                    <Tr key={l.id}>
                      <Td>{l.leaveType}</Td>
                      <Td>{l.startDate ?? l.fromDate}</Td>
                      <Td>{l.endDate ?? l.toDate}</Td>
                      <Td>
                        <Badge colorScheme={statusColor(l.status)}>{l.status}</Badge>
                      </Td>
                      <Td>{displayDate(l.createdAt) || l.appliedOn || "-"}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            )}
          </CardBody>
        </Card>
      </SimpleGrid>
    </Box>
  );
}

