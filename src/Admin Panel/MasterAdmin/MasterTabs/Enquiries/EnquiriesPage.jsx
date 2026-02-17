import React, { useState, useEffect } from "react";
import {
  Box,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  useToast,
  Select,
  Spinner,
  Text,
  Container,
} from "@chakra-ui/react";
import { getEnquiries, updateEnquiryStatus } from "../../../api/adminApi";

export default function EnquiriesPage() {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(null);
  const toast = useToast();

  const fetchEnquiries = async () => {
    setLoading(true);
    try {
      const data = await getEnquiries();
      setEnquiries(Array.isArray(data) ? data : []);
    } catch (e) {
      toast({ title: "Failed to load enquiries", description: e.message, status: "error" });
      setEnquiries([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const handleStatusChange = async (id, status) => {
    setUpdating(id);
    try {
      await updateEnquiryStatus(id, status);
      setEnquiries((prev) =>
        prev.map((e) => (e.id === id ? { ...e, status } : e))
      );
      toast({ title: "Status updated", status: "success" });
    } catch (e) {
      toast({ title: "Update failed", description: e.message, status: "error" });
    } finally {
      setUpdating(null);
    }
  };

  const formatDate = (iso) => {
    if (!iso) return "-";
    try {
      return new Date(iso).toLocaleString();
    } catch {
      return iso;
    }
  };

  if (loading) {
    return (
      <Container maxW="container.xl" py={8} centerContent>
        <Spinner size="xl" />
        <Text mt={4}>Loading enquiries...</Text>
      </Container>
    );
  }

  return (
    <Container maxW="container.xl" py={6}>
      <Heading size="lg" mb={6}>
        Student Enquiries
      </Heading>
      <Text mb={4} color="gray.600">
        When students apply or enquire via the site, their details appear here.
      </Text>
      <Box overflowX="auto" bg="white" borderRadius="lg" boxShadow="md" p={2}>
        <Table size="sm">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Mobile</Th>
              <Th>Courses</Th>
              <Th>Profession</Th>
              <Th>Status</Th>
              <Th>Received</Th>
            </Tr>
          </Thead>
          <Tbody>
            {enquiries.length === 0 ? (
              <Tr>
                <Td colSpan={7} textAlign="center" py={8}>
                  No enquiries yet. Student applications will appear here.
                </Td>
              </Tr>
            ) : (
              enquiries.map((e) => (
                <Tr key={e.id}>
                  <Td fontWeight="medium">{`${e.firstName || ""} ${e.lastName || ""}`.trim() || "-"}</Td>
                  <Td>{e.email || "-"}</Td>
                  <Td>{e.mobileNumber || "-"}</Td>
                  <Td maxW="200px" isTruncated title={e.courses || ""}>
                    {e.courses || "-"}
                  </Td>
                  <Td>{e.profession || "-"}</Td>
                  <Td>
                    <Select
                      size="sm"
                      value={e.status || "NEW"}
                      width="130px"
                      isDisabled={updating === e.id}
                      onChange={(ev) => handleStatusChange(e.id, ev.target.value)}
                    >
                      <option value="NEW">New</option>
                      <option value="CONTACTED">Contacted</option>
                      <option value="CONVERTED">Converted</option>
                      <option value="CLOSED">Closed</option>
                    </Select>
                  </Td>
                  <Td whiteSpace="nowrap">{formatDate(e.createdAt)}</Td>
                </Tr>
              ))
            )}
          </Tbody>
        </Table>
      </Box>
    </Container>
  );
}
