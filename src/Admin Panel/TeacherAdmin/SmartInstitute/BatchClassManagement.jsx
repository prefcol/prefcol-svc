import React from "react";
import { Box, Heading, Text, Card, CardHeader, CardBody, List, ListItem, ListIcon, VStack, Button, useColorModeValue } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaCheckCircle, FaArrowLeft } from "react-icons/fa";

export default function BatchClassManagement() {
  const cardBg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.600");

  const features = [
    "Create unlimited batches",
    "Schedule offline & online classes",
    "Auto attendance system",
    "Classroom timetable management",
  ];

  return (
    <Box>
      <Button as={RouterLink} to="/teacher-admin/institute" leftIcon={<FaArrowLeft />} variant="ghost" size="sm" mb={4}>
        Back to Smart Institute
      </Button>
      <Heading size="lg" mb={2}>Batch & Class Management</Heading>
      <Text color="gray.600" mb={6}>
        Manage batches, schedule classes, and handle timetables.
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
            Full batch creation and timetable UI will be wired here. Use the dashboard API for today&apos;s classes in the meantime.
          </Text>
        </CardBody>
      </Card>
    </Box>
  );
}
