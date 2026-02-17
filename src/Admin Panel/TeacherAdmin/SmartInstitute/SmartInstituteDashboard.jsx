import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  Button,
  List,
  ListItem,
  ListIcon,
  useColorModeValue,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import {
  FaChartLine,
  FaLayerGroup,
  FaEdit,
  FaMoneyBillWave,
  FaUserGraduate,
  FaVideo,
  FaCheckCircle,
} from "react-icons/fa";

const FeatureCard = ({ title, description, items, linkTo, icon: Icon, colorScheme = "teal" }) => {
  const navigate = useNavigate();
  const cardBg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.600");

  const handleOpen = () => {
    if (linkTo) navigate(linkTo);
  };

  return (
    <Card bg={cardBg} borderWidth="1px" borderColor={borderColor} shadow="sm">
      <CardHeader pb={2}>
        <Flex align="center" gap={3}>
          <Box p={2} borderRadius="lg" bg={`${colorScheme}.50`} color={`${colorScheme}.600`}>
            <Icon size={20} />
          </Box>
          <Heading size="sm">{title}</Heading>
        </Flex>
      </CardHeader>
      <CardBody pt={0}>
        {description && (
          <Text fontSize="sm" color="gray.600" mb={3}>
            {description}
          </Text>
        )}
        {items && items.length > 0 && (
          <List spacing={1} mb={4}>
            {items.map((item, i) => (
              <ListItem key={i} fontSize="sm" display="flex" alignItems="center" gap={2}>
                <ListIcon as={FaCheckCircle} color="green.500" />
                {item}
              </ListItem>
            ))}
          </List>
        )}
        {linkTo && (
          <Button
            size="sm"
            colorScheme={colorScheme}
            variant="outline"
            w="100%"
            onClick={handleOpen}
          >
            Open
          </Button>
        )}
      </CardBody>
    </Card>
  );
};

export default function SmartInstituteDashboard() {
  const headingColor = useColorModeValue("teal.700", "teal.300");

  return (
    <Box>
      <Heading size="lg" mb={2} color={headingColor}>
        Smart Institute Dashboard
      </Heading>
      <Text color="gray.600" mb={6}>
        Overview of batch performance, enrollment, revenue, attendance, and test analytics.
      </Text>

      {/* Quick stats / overview cards */}
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4} mb={8}>
        <FeatureCard
          title="Batch-wise performance"
          description="View performance by batch and compare across batches."
          items={["Batch-wise performance overview", "Student enrollment stats", "Revenue tracking", "Attendance reports", "Test results analytics"]}
          linkTo="/teacher-admin/institute/batches"
          icon={FaChartLine}
          colorScheme="teal"
        />
        <FeatureCard
          title="Batch & Class Management"
          description="Manage batches and class schedules."
          items={["Create unlimited batches", "Schedule offline & online classes", "Auto attendance system", "Classroom timetable management"]}
          linkTo="/teacher-admin/institute/batches"
          icon={FaLayerGroup}
          colorScheme="blue"
        />
        <FeatureCard
          title="Test & Assignment System"
          description="Create and grade tests and assignments."
          items={["Create mock tests & quizzes", "Auto grading", "Rank generation", "Performance comparison reports"]}
          linkTo="/teacher-admin/institute/tests"
          icon={FaEdit}
          colorScheme="purple"
        />
        <FeatureCard
          title="Fees & Payment Tracking"
          description="Track payments and revenue."
          items={["Track pending & completed payments", "Automated reminders", "Revenue reports", "Commission tracking (if multi-faculty)"]}
          linkTo="/teacher-admin/institute/fees"
          icon={FaMoneyBillWave}
          colorScheme="green"
        />
        <FeatureCard
          title="Student Performance Analytics"
          description="Individual and subject-wise analytics."
          items={["Individual progress tracking", "Subject-wise reports", "Weakness detection", "Parent performance reports"]}
          linkTo="/teacher-admin/institute/analytics"
          icon={FaUserGraduate}
          colorScheme="orange"
        />
        <FeatureCard
          title="Live & Recorded Classes"
          description="Conduct live classes and share recordings."
          items={["Conduct live classes", "Upload recorded sessions", "Provide study materials & PDFs"]}
          linkTo="/teacher-admin/videos/upload"
          icon={FaVideo}
          colorScheme="cyan"
        />
      </SimpleGrid>
    </Box>
  );
}
