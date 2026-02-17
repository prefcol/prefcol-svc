import React from "react";
import { Box, Heading, Text, Button, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

/**
 * Placeholder page for teacher portal routes not yet implemented.
 * Keeps user inside teacher admin with sidebar; offers link back to home.
 */
export default function ComingSoonPage({ title = "Coming Soon" }) {
  const navigate = useNavigate();
  return (
    <Box py={8}>
      <VStack spacing={4} align="stretch" maxW="md">
        <Heading size="lg" color="gray.700">
          {title}
        </Heading>
        <Text color="gray.600">
          This section is under development. You can continue using the dashboard and other available features.
        </Text>
        <Button colorScheme="blue" onClick={() => navigate("/teacher-admin/home")}>
          Back to Dashboard
        </Button>
      </VStack>
    </Box>
  );
}
