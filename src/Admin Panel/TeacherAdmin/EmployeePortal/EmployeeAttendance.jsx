import React, { useState, useEffect } from "react";
import {
  Box,
  Heading,
  Text,
  Card,
  CardHeader,
  CardBody,
  Button,
  SimpleGrid,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Badge,
  useToast,
  useColorModeValue,
  Spinner,
  Flex,
} from "@chakra-ui/react";
import { FaClock, FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import {
  MOCK_ATTENDANCE_TODAY,
  MOCK_ATTENDANCE_RECORDS,
} from "./api/mockEmployeeData";
import {
  punchIn,
  punchOut,
  getMyAttendanceRecords,
} from "./api/employeePortalApi";

function formatTime(date) {
  if (!date) return "--:--";
  const d = typeof date === "string" ? new Date(date) : date;
  return d.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" });
}

export default function EmployeeAttendance() {
  const [today, setToday] = useState(MOCK_ATTENDANCE_TODAY);
  const [records, setRecords] = useState(MOCK_ATTENDANCE_RECORDS);
  const [loading, setLoading] = useState(true);
  const [punching, setPunching] = useState(false);
  const toast = useToast();
  const cardBg = useColorModeValue("white", "gray.800");

  // Map backend Attendance to UI shape (date, punchInTime, punchOutTime, totalMinutes, status)
  const mapRecord = (r) => ({
    ...r,
    inTime: r.punchInTime,
    outTime: r.punchOutTime,
    totalHours: r.totalMinutes != null ? Number((r.totalMinutes / 60).toFixed(2)) : null,
  });

  useEffect(() => {
    const load = async () => {
      try {
        const todayStr = new Date().toISOString().split("T")[0];
        const apiRecords = await getMyAttendanceRecords({
          month: new Date().getMonth() + 1,
          year: new Date().getFullYear(),
        });
        if (Array.isArray(apiRecords) && apiRecords.length) {
          const mapped = apiRecords.map(mapRecord);
          setRecords(mapped);
          const todayRec = mapped.find((r) => r.date === todayStr);
          if (todayRec) {
            setToday({
              ...todayRec,
              totalHours: todayRec.totalHours ?? (todayRec.totalMinutes != null ? Number((todayRec.totalMinutes / 60).toFixed(2)) : null),
            });
          }
        }
      } catch {
        // fall back to mock
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const handlePunchIn = async () => {
    setPunching(true);
    try {
      const res = await punchIn({});
      const dateStr = new Date().toISOString().split("T")[0];
      const updated = {
        ...today,
        date: res?.date ?? dateStr,
        punchInTime: res?.punchInTime ?? new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false }),
        punchOutTime: res?.punchOutTime ?? null,
        totalMinutes: res?.totalMinutes ?? null,
        totalHours: res?.totalMinutes != null ? Number((res.totalMinutes / 60).toFixed(2)) : null,
        status: res?.status ?? "Present",
      };
      setToday(updated);
      setRecords((prev) => {
        const rest = prev.filter((r) => r.date !== dateStr);
        return [mapRecord({ ...res, date: dateStr }), ...rest];
      });
      toast({ status: "success", title: "Punched in successfully" });
    } catch (e) {
      console.error(e);
      toast({ status: "error", title: "Failed to punch in" });
    } finally {
      setPunching(false);
    }
  };

  const handlePunchOut = async () => {
    setPunching(true);
    try {
      const res = await punchOut({});
      const dateStr = new Date().toISOString().split("T")[0];
      const totalHours = res?.totalMinutes != null ? Number((res.totalMinutes / 60).toFixed(2)) : null;
      const updated = {
        ...today,
        punchOutTime: res?.punchOutTime ?? today.punchOutTime,
        totalMinutes: res?.totalMinutes ?? null,
        totalHours: totalHours ?? today.totalHours,
        status: res?.status ?? "Present",
      };
      setToday(updated);
      setRecords((prev) => {
        const rest = prev.filter((r) => r.date !== dateStr);
        return [mapRecord({ ...res, date: dateStr }), ...rest];
      });
      toast({ status: "success", title: "Punched out successfully" });
    } catch (e) {
      console.error(e);
      toast({ status: "error", title: "Failed to punch out" });
    } finally {
      setPunching(false);
    }
  };

  const disabledIn = !!today.punchInTime;
  const disabledOut = !today.punchInTime || !!today.punchOutTime;

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
        Attendance
      </Heading>
      <Text color="gray.600" mb={6}>
        Punch in / out and review your attendance history.
      </Text>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} mb={6}>
        <Card bg={cardBg} shadow="sm">
          <CardHeader pb={2}>
            <Heading size="md">Today&apos;s Status</Heading>
          </CardHeader>
          <CardBody>
            <Text fontSize="sm" color="gray.500" mb={2}>
              {today.date || new Date().toISOString().split("T")[0]}
            </Text>
            <SimpleGrid columns={2} spacing={3} mb={4}>
              <Box>
                <Text fontSize="xs" color="gray.500">
                  Punch In
                </Text>
                <Text fontWeight="semibold">
                  {formatTime(today.punchInTime)}
                </Text>
              </Box>
              <Box>
                <Text fontSize="xs" color="gray.500">
                  Punch Out
                </Text>
                <Text fontWeight="semibold">
                  {formatTime(today.punchOutTime)}
                </Text>
              </Box>
            </SimpleGrid>
            <Text fontSize="sm" mb={4}>
              Today&apos;s hours:{" "}
              <strong>
                {today.totalHours != null
                  ? `${today.totalHours} hrs`
                  : "—"}
              </strong>
            </Text>
            <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={3}>
              <Button
                leftIcon={<FaSignInAlt />}
                colorScheme="green"
                onClick={handlePunchIn}
                isDisabled={disabledIn}
                isLoading={punching && !disabledIn}
              >
                Punch In
              </Button>
              <Button
                leftIcon={<FaSignOutAlt />}
                colorScheme="red"
                variant="outline"
                onClick={handlePunchOut}
                isDisabled={disabledOut}
                isLoading={punching && !disabledOut}
              >
                Punch Out
              </Button>
            </SimpleGrid>
          </CardBody>
        </Card>

        <Card bg={cardBg} shadow="sm">
          <CardHeader pb={2}>
            <Heading size="md">Summary (This Month)</Heading>
          </CardHeader>
          <CardBody>
            <SimpleGrid columns={3} spacing={4} mb={4}>
              <Box textAlign="center">
                <Text fontSize="xs" color="gray.500">
                  Present
                </Text>
                <Text fontSize="xl" fontWeight="bold" color="green.600">
                  {records.filter((r) => r.status === "Present").length}
                </Text>
              </Box>
              <Box textAlign="center">
                <Text fontSize="xs" color="gray.500">
                  Absent
                </Text>
                <Text fontSize="xl" fontWeight="bold" color="red.500">
                  {records.filter((r) => r.status === "Absent").length}
                </Text>
              </Box>
              <Box textAlign="center">
                <Text fontSize="xs" color="gray.500">
                  Leave
                </Text>
                <Text fontSize="xl" fontWeight="bold" color="orange.500">
                  {records.filter((r) => r.status === "Leave").length}
                </Text>
              </Box>
            </SimpleGrid>
            <Flex align="center" gap={2} color="gray.600">
              <FaClock />
              <Text fontSize="sm">
                Last 2 days:{" "}
                {records
                  .slice(0, 2)
                  .map((r) => `${r.date} (${r.totalHours ?? "-"}h)`)
                  .join(" · ")}
              </Text>
            </Flex>
          </CardBody>
        </Card>
      </SimpleGrid>

      <Card bg={cardBg} shadow="sm">
        <CardHeader pb={2}>
          <Heading size="sm">Recent Attendance</Heading>
        </CardHeader>
        <CardBody>
          <Table size="sm">
            <Thead>
              <Tr>
                <Th>Date</Th>
                <Th>In</Th>
                <Th>Out</Th>
                <Th isNumeric>Hours</Th>
                <Th>Status</Th>
              </Tr>
            </Thead>
            <Tbody>
              {records.map((r) => (
                <Tr key={r.id || r.date}>
                  <Td>{r.date}</Td>
                  <Td>{formatTime(r.inTime || r.punchInTime)}</Td>
                  <Td>{formatTime(r.outTime || r.punchOutTime)}</Td>
                  <Td isNumeric>{r.totalHours ?? "-"}</Td>
                  <Td>
                    <Badge
                      colorScheme={
                        r.status === "Present"
                          ? "green"
                          : r.status === "Absent"
                          ? "red"
                          : "orange"
                      }
                    >
                      {r.status}
                    </Badge>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </CardBody>
      </Card>
    </Box>
  );
}

