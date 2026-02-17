import React from "react";
import { Box, Heading, Text, Card, CardHeader, CardBody, List, ListItem, ListIcon, Button, useColorModeValue } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaCheckCircle, FaArrowLeft } from "react-icons/fa";

export default function StudentPerformanceAnalytics() {
  const cardBg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.600");

  const features = [
    "Individual progress tracking",
    "Subject-wise reports",
    "Weakness detection",
    "Parent performance reports",
  ];

  return (
    <Box>
      <Button as={RouterLink} to="/teacher-admin/institute" leftIcon={<FaArrowLeft />} variant="ghost" size="sm" mb={4}>
        Back to Smart Institute
      </Button>
      <Heading size="lg" mb={2}>Student Performance Analytics</Heading>
      <Text color="gray.600" mb={6}>
        Track student progress, strengths, and areas to improve.
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
            Analytics and reports can be connected to your student and assignment data.
          </Text>
        </CardBody>
      </Card>
    </Box>
  );
}
