import React, { useState, useEffect } from "react";
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Badge,
  useColorModeValue,
  Spinner,
  Flex,
} from "@chakra-ui/react";
import { FaUser, FaCalendarDay, FaClock, FaMoneyBillWave, FaChartBar } from "react-icons/fa";
import { Icon } from "@chakra-ui/react";
import {
  MOCK_EMPLOYEE,
  MOCK_ATTENDANCE_TODAY,
  MOCK_ATTENDANCE_SUMMARY,
  MOCK_LEAVE_BALANCE,
  MOCK_PAYSLIPS,
} from "./api/mockEmployeeData";
import { getEmployeeProfile, getMyAttendanceRecords, getLeaveBalance, getMyPayslips } from "./api/employeePortalApi";

export default function EmployeeDashboard() {
  const [employee, setEmployee] = useState(MOCK_EMPLOYEE);
  const [todayAttendance, setTodayAttendance] = useState(MOCK_ATTENDANCE_TODAY);
  const [attendanceSummary, setAttendanceSummary] = useState(MOCK_ATTENDANCE_SUMMARY);
  const [leaveBalance, setLeaveBalance] = useState(MOCK_LEAVE_BALANCE);
  const [latestPayslip, setLatestPayslip] = useState(MOCK_PAYSLIPS[0] || null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const [emp, records, balance, payslips] = await Promise.allSettled([
          getEmployeeProfile(),
          getMyAttendanceRecords({ month: new Date().getMonth() + 1, year: new Date().getFullYear() }),
          getLeaveBalance(),
          getMyPayslips({ limit: 1 }),
        ]);
        if (emp.status === "fulfilled" && emp.value) setEmployee(emp.value);
        if (records.status === "fulfilled" && records.value?.length) {
          const today = new Date().toISOString().split("T")[0];
          const todayRec = records.value.find((r) => r.date === today);
          if (todayRec) setTodayAttendance(todayRec);
          if (records.value.summary) setAttendanceSummary(records.value.summary);
        }
        if (balance.status === "fulfilled" && balance.value) setLeaveBalance(balance.value);
        if (payslips.status === "fulfilled" && payslips.value?.[0]) setLatestPayslip(payslips.value[0]);
      } catch (_) {}
      setLoading(false);
    };
    load();
  }, []);

  const cardBg = useColorModeValue("white", "gray.800");
  const todayStr = new Date().toLocaleDateString("en-IN", { weekday: "long", year: "numeric", month: "long", day: "numeric" });

  if (loading) {
    return (
      <Flex justify="center" align="center" minH="50vh">
        <Spinner size="xl" color="teal.500" />
      </Flex>
    );
  }

  return (
    <Box>
      <Heading size="lg" mb={2} color="teal.600">
        Employee Dashboard
      </Heading>
      <Text color="gray.600" mb={6}>
        Welcome back, {employee.name}. Here’s your overview for today.
      </Text>

      {/* Employee details + today */}
      <Card bg={cardBg} mb={6} shadow="sm">
        <CardBody>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
            <Box>
              <Flex align="center" gap={3} mb={2}>
                <Icon as={FaUser} color="teal.500" boxSize={5} />
                <Text fontWeight="bold">{employee.name}</Text>
                <Badge colorScheme="teal">{employee.role}</Badge>
              </Flex>
              <Text fontSize="sm" color="gray.600">
                Emp ID: {employee.empId} · {employee.department}
              </Text>
            </Box>
            <Box>
              <Text fontSize="sm" color="gray.500">Today’s date</Text>
              <Text fontWeight="semibold">{todayStr}</Text>
              <Badge colorScheme={todayAttendance.punchInTime ? "green" : "gray"} mt={1}>
                {todayAttendance.punchInTime ? "Working" : "Not punched in"}
              </Badge>
            </Box>
          </SimpleGrid>
        </CardBody>
      </Card>

      {/* Quick cards */}
      <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing={4} mb={6}>
        <Card bg={cardBg} shadow="sm">
          <CardHeader pb={0}>
            <Stat>
              <StatLabel>Punch In / Out</StatLabel>
              <StatNumber fontSize="md">
                {todayAttendance.punchInTime || "—"} / {todayAttendance.punchOutTime || "—"}
              </StatNumber>
              <StatHelpText>
                {todayAttendance.totalHours != null ? `${todayAttendance.totalHours} hrs today` : "Today’s hours"}
              </StatHelpText>
            </Stat>
          </CardHeader>
          <CardBody pt={2}>
            <Icon as={FaClock} color="blue.500" boxSize={6} />
          </CardBody>
        </Card>

        <Card bg={cardBg} shadow="sm">
          <CardHeader pb={0}>
            <Stat>
              <StatLabel>Leaves remaining</StatLabel>
              <StatNumber>{leaveBalance.total ?? 0}</StatNumber>
              <StatHelpText>Casual: {leaveBalance.casual ?? 0} · Sick: {leaveBalance.sick ?? 0}</StatHelpText>
            </Stat>
          </CardHeader>
          <CardBody pt={2}>
            <Icon as={FaCalendarDay} color="green.500" boxSize={6} />
          </CardBody>
        </Card>

        <Card bg={cardBg} shadow="sm">
          <CardHeader pb={0}>
            <Stat>
              <StatLabel>Latest payslip</StatLabel>
              <StatNumber fontSize="md">
                {latestPayslip ? `₹${(latestPayslip.netSalary || 0).toLocaleString("en-IN")}` : "—"}
              </StatNumber>
              <StatHelpText>
                {latestPayslip ? `${latestPayslip.month} ${latestPayslip.year}` : "No payslip"}
              </StatHelpText>
            </Stat>
          </CardHeader>
          <CardBody pt={2}>
            <Icon as={FaMoneyBillWave} color="purple.500" boxSize={6} />
          </CardBody>
        </Card>

        <Card bg={cardBg} shadow="sm">
          <CardHeader pb={0}>
            <Stat>
              <StatLabel>Monthly attendance</StatLabel>
              <StatNumber fontSize="md">
                P {attendanceSummary.present ?? 0} / A {attendanceSummary.absent ?? 0} / L {attendanceSummary.leave ?? 0}
              </StatNumber>
              <StatHelpText>
                {attendanceSummary.month} {attendanceSummary.year}
              </StatHelpText>
            </Stat>
          </CardHeader>
          <CardBody pt={2}>
            <Icon as={FaChartBar} color="orange.500" boxSize={6} />
          </CardBody>
        </Card>
      </SimpleGrid>
    </Box>
  );
}
