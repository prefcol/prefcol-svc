import React from "react";
import { Box, Heading, Text, Card, CardHeader, CardBody, List, ListItem, ListIcon, Button, useColorModeValue } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaCheckCircle, FaArrowLeft } from "react-icons/fa";

export default function TestAssignmentSystem() {
  const cardBg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.600");

  const features = [
    "Create mock tests & quizzes",
    "Auto grading",
    "Rank generation",
    "Performance comparison reports",
  ];

  return (
    <Box>
      <Button as={RouterLink} to="/teacher-admin/institute" leftIcon={<FaArrowLeft />} variant="ghost" size="sm" mb={4}>
        Back to Smart Institute
      </Button>
      <Heading size="lg" mb={2}>Test & Assignment System</Heading>
      <Text color="gray.600" mb={6}>
        Create tests, quizzes, and assignments with auto grading and reports.
      </Text>
      <Card bg={cardBg} borderWidth="1px" borderColor={borderColor}>
        <CardHeader>
          <Heading size="md">Features</Heading>
        </CardHeader>
        <CardBody>
          <List spacing={2}>
            {features.map((f, i) => (
              <ListItem key={i} display="flex" alignItems="center" gap={2}>
                <ListIcon as={FaCheckCircle} color="green.500" />
                {f}
              </ListItem>
            ))}
          </List>
          <Text mt={4} fontSize="sm" color="gray.500">
            Test builder and assignment CRUD can be integrated here with your backend.
          </Text>
        </CardBody>
      </Card>
    </Box>
  );
}
