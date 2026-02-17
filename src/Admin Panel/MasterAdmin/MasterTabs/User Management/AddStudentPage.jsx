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
import { createStudent } from "../../../api/adminApi";

export default function AddStudentPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
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
      await createStudent(form);
      toast({ title: "Student added successfully", status: "success" });
      setForm({ name: "", email: "", phone: "", course: "", status: "active" });
    } catch (err) {
      toast({ title: "Failed to add student", description: err.message, status: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxW="md" py={8}>
      <Heading size="lg" mb={6}>
        Add Student
      </Heading>
      <Box as="form" onSubmit={handleSubmit} bg="white" p={6} borderRadius="lg" boxShadow="md">
        <VStack spacing={4} align="stretch">
          <FormControl isRequired>
            <FormLabel>Full Name</FormLabel>
            <Input name="name" value={form.name} onChange={handleChange} placeholder="Student name" />
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
            <FormLabel>Course</FormLabel>
            <Input name="course" value={form.course} onChange={handleChange} placeholder="e.g. DevOps & Cloud" />
          </FormControl>
          <FormControl>
            <FormLabel>Status</FormLabel>
            <Select name="status" value={form.status} onChange={handleChange}>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </Select>
          </FormControl>
          <Button type="submit" colorScheme="teal" isLoading={loading} width="full">
            Add Student
          </Button>
        </VStack>
      </Box>
    </Container>
  );
}
