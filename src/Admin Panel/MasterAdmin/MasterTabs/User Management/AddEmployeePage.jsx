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
      <Heading size="lg" mb={6}>
        Add Employee
      </Heading>
      <Box as="form" onSubmit={handleSubmit} bg="white" p={6} borderRadius="lg" boxShadow="md">
        <VStack spacing={4} align="stretch">
          <FormControl isRequired>
            <FormLabel>Full Name</FormLabel>
            <Input name="name" value={form.name} onChange={handleChange} placeholder="Employee name" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input name="email" type="email" value={form.email} onChange={handleChange} placeholder="email@example.com" />
          </FormControl>
          <FormControl>
            <FormLabel>Phone</FormLabel>
            <Input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone number" />
          </FormControl>
          <FormControl>
            <FormLabel>Role</FormLabel>
            <Input name="role" value={form.role} onChange={handleChange} placeholder="e.g. HR, Admin" />
          </FormControl>
          <FormControl>
            <FormLabel>Department</FormLabel>
            <Input name="department" value={form.department} onChange={handleChange} placeholder="Department" />
          </FormControl>
          <FormControl>
            <FormLabel>Status</FormLabel>
            <Select name="status" value={form.status} onChange={handleChange}>
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
