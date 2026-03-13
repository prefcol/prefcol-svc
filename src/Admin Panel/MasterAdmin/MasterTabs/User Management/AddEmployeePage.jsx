import React, { useState } from "react";
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  useToast,
  VStack,
  Container,
  Select,
  useColorModeValue,
} from "@chakra-ui/react";
import { createEmployee } from "../../../api/adminApi";

export default function AddEmployeePage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    department: "",
    status: "active",
  });
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const cardBg = useColorModeValue("white", "gray.900");
  const labelColor = useColorModeValue("gray.700", "gray.100");
  const inputTextColor = useColorModeValue("gray.800", "gray.100");
  const placeholderColor = useColorModeValue("gray.400", "gray.500");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name?.trim() || !form.email?.trim()) {
      toast({ title: "Name and email are required", status: "warning" });
      return;
    }
    setLoading(true);
    try {
      // Create employee record (Master Admin portal only)
      await createEmployee(form);
      toast({ title: "Employee added successfully", status: "success" });
      setForm({ name: "", email: "", phone: "", role: "", department: "", status: "active" });
    } catch (err) {
      toast({ title: "Failed to add employee", description: err.message, status: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxW="md" py={8}>
      <Heading size="lg" mb={6} color={useColorModeValue("gray.100", "gray.50")}>
        Add Employee
      </Heading>
      <Box
        as="form"
        onSubmit={handleSubmit}
        bg={cardBg}
        p={6}
        borderRadius="lg"
        boxShadow="xl"
        color={inputTextColor}
      >
        <VStack spacing={4} align="stretch">
          <FormControl isRequired>
            <FormLabel color={labelColor}>Full Name</FormLabel>
            <Input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Employee name"
              color={inputTextColor}
              _placeholder={{ color: placeholderColor }}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel color={labelColor}>Email</FormLabel>
            <Input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="email@example.com"
              color={inputTextColor}
              _placeholder={{ color: placeholderColor }}
            />
          </FormControl>
          <FormControl>
            <FormLabel color={labelColor}>Phone</FormLabel>
            <Input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone number"
              color={inputTextColor}
              _placeholder={{ color: placeholderColor }}
            />
          </FormControl>
          <FormControl>
            <FormLabel color={labelColor}>Role</FormLabel>
            <Input
              name="role"
              value={form.role}
              onChange={handleChange}
              placeholder="e.g. HR, Admin"
              color={inputTextColor}
              _placeholder={{ color: placeholderColor }}
            />
          </FormControl>
          <FormControl>
            <FormLabel color={labelColor}>Department</FormLabel>
            <Input
              name="department"
              value={form.department}
              onChange={handleChange}
              placeholder="Department"
              color={inputTextColor}
              _placeholder={{ color: placeholderColor }}
            />
          </FormControl>
          <FormControl>
            <FormLabel color={labelColor}>Status</FormLabel>
            <Select
              name="status"
              value={form.status}
              onChange={handleChange}
              color={inputTextColor}
              _placeholder={{ color: placeholderColor }}
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </Select>
          </FormControl>
          <Button type="submit" colorScheme="teal" isLoading={loading} width="full">
            Add Employee
          </Button>
        </VStack>
      </Box>
    </Container>
  );
}
