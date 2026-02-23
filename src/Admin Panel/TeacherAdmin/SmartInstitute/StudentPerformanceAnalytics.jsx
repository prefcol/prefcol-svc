import React from "react";
import {
  Box,
  Heading,
  Text,
  Card,
  CardHeader,
  CardBody,
  List,
  ListItem,
  ListIcon,
  Button,
  useColorModeValue,
  SimpleGrid,
  VStack,
  HStack,
  Icon,
  Badge,
  Divider,
  Container,
  Flex,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import {
  FaCheckCircle,
  FaArrowLeft,
  FaChartLine,
  FaLightbulb,
  FaSearch,
  FaUsers,
  FaDownload,
  FaRobot,
  FaEnvelope,
  FaClock,
  FaSyncAlt,
  FaMobileAlt,
  FaLink,
  FaImage,
  FaFileAlt,
} from "react-icons/fa";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

// Mock data for charts (replace with real API data)
const trafficData = [
  { month: "Jan", visitors: 4200, sessions: 5100 },
  { month: "Feb", visitors: 4800, sessions: 5900 },
  { month: "Mar", visitors: 5200, sessions: 6400 },
  { month: "Apr", visitors: 6100, sessions: 7500 },
  { month: "May", visitors: 7200, sessions: 8900 },
  { month: "Jun", visitors: 7800, sessions: 9600 },
];

const performanceData = [
  { name: "Excellent", value: 35, color: "#38A169" },
  { name: "Good", value: 40, color: "#3182CE" },
  { name: "Average", value: 18, color: "#D69E2E" },
  { name: "Needs work", value: 7, color: "#E53E3E" },
];

const engagementHeatmapData = [
  [72, 85, 90, 78, 65, 58],
  [68, 82, 88, 80, 70, 62],
  [75, 88, 92, 85, 72, 68],
  [70, 80, 86, 82, 75, 70],
];

const COLORS = ["#38A169", "#3182CE", "#D69E2E", "#E53E3E"];

export default function StudentPerformanceAnalytics() {
  const cardBg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const mutedColor = useColorModeValue("gray.600", "gray.400");
  const highlightBg = useColorModeValue("teal.50", "teal.900/20");

  const lastUpdated = "Feb 20, 2025";

  return (
    <Box as="main" pb={10}>
      <Container maxW="container.xl" px={{ base: 4, md: 6 }}>
        {/* Back */}
        <Button
          as={RouterLink}
          to="/teacher-admin/institute"
          leftIcon={<FaArrowLeft />}
          variant="ghost"
          size="sm"
          mb={4}
        >
          Back to Smart Institute
        </Button>

        {/* 1. Value proposition & why it matters */}
        <Box mb={{ base: 8, md: 10 }}>
          <Heading
            size="sm"
            textTransform="uppercase"
            letterSpacing="wider"
            color={mutedColor}
            mb={2}
          >
            Overview
          </Heading>
          <Heading
            size={{ base: "lg", md: "xl" }}
            mb={3}
            fontWeight="bold"
            lineHeight="tight"
          >
            Performance Analytics
          </Heading>
          <Text
            fontSize={{ base: "md", md: "lg" }}
            color={mutedColor}
            maxW="3xl"
            mb={4}
            lineHeight="tall"
          >
            This page helps you understand how your platform and courses are
            performing — with <strong>real data</strong>,{" "}
            <strong>actionable insights</strong>, and{" "}
            <strong>optimization recommendations</strong>.
          </Text>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} maxW="3xl">
            <Box>
              <Text fontWeight="semibold" mb={1} fontSize="sm" color={mutedColor}>
                What problem does this solve?
              </Text>
              <Text fontSize={{ base: "sm", md: "md" }}>
                You get clarity on where students engage, where they drop off, and
                how to improve completion and satisfaction — without guessing.
              </Text>
            </Box>
            <Box>
              <Text fontWeight="semibold" mb={1} fontSize="sm" color={mutedColor}>
                What value will you get?
              </Text>
              <Text fontSize={{ base: "sm", md: "md" }}>
                Data-driven decisions, better course design, higher engagement,
                and measurable improvements over time.
              </Text>
            </Box>
          </SimpleGrid>
        </Box>

        {/* 2. Visual summary: graphs + charts */}
        <Heading size="md" mb={4} display="flex" alignItems="center" gap={2}>
          <Icon as={FaChartLine} />
          Performance metrics
        </Heading>
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={6} mb={10}>
          <Card bg={cardBg} borderWidth="1px" borderColor={borderColor}>
            <CardHeader>
              <Heading size="sm">Traffic & sessions trend</Heading>
              <Text fontSize="xs" color={mutedColor}>
                Last 6 months
              </Text>
            </CardHeader>
            <CardBody pt={0}>
              <Box w="100%" h={{ base: 240, md: 280 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={trafficData}>
                    <CartesianGrid strokeDasharray="3 3" stroke={borderColor} />
                    <XAxis dataKey="month" fontSize={12} />
                    <YAxis fontSize={12} />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="visitors"
                      stroke="#3182CE"
                      strokeWidth={2}
                      name="Visitors"
                      dot={{ r: 4 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="sessions"
                      stroke="#38A169"
                      strokeWidth={2}
                      name="Sessions"
                      dot={{ r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </Box>
            </CardBody>
          </Card>

          <Card bg={cardBg} borderWidth="1px" borderColor={borderColor}>
            <CardHeader>
              <Heading size="sm">Performance distribution</Heading>
              <Text fontSize="xs" color={mutedColor}>
                Pages / courses by performance tier
              </Text>
            </CardHeader>
            <CardBody pt={0}>
              <Box w="100%" h={{ base: 240, md: 280 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={performanceData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={90}
                      paddingAngle={2}
                      dataKey="value"
                      nameKey="name"
                      label={({ name, value }) => `${name}: ${value}%`}
                    >
                      {performanceData.map((entry, index) => (
                        <Cell key={entry.name} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => `${value}%`} />
                  </PieChart>
                </ResponsiveContainer>
              </Box>
            </CardBody>
          </Card>
        </SimpleGrid>

        {/* Engagement heatmap */}
        <Card bg={cardBg} borderWidth="1px" borderColor={borderColor} mb={10}>
          <CardHeader>
            <Heading size="sm">Engagement heatmap (by section)</Heading>
            <Text fontSize="xs" color={mutedColor}>
              Darker = higher engagement. Rows: page sections, Columns: days.
            </Text>
          </CardHeader>
          <CardBody pt={0}>
            <Grid
              templateColumns="repeat(6, 1fr)"
              gap={1}
              maxW="320px"
              mx="auto"
            >
              {engagementHeatmapData.flatMap((row, ri) =>
                row.map((val, ci) => {
                  const intensity = Math.min(100, val);
                  const opacity = 0.3 + (intensity / 100) * 0.7;
                  return (
                    <GridItem key={`${ri}-${ci}`}>
                      <Box
                        h={{ base: 8, md: 10 }}
                        bg={`rgba(45, 155, 129, ${opacity})`}
                        borderRadius="md"
                        title={`Section ${ri + 1}, Day ${ci + 1}: ${val}%`}
                      />
                    </GridItem>
                  );
                })
              )}
            </Grid>
          </CardBody>
        </Card>

        {/* 3. Data-driven insight highlights */}
        <Heading size="md" mb={4} display="flex" alignItems="center" gap={2}>
          <Icon as={FaLightbulb} />
          Key insights
        </Heading>
        <Card bg={cardBg} borderWidth="1px" borderColor={borderColor} mb={10}>
          <CardBody>
            <VStack align="stretch" spacing={4}>
              <Box>
                <List spacing={2}>
                  <ListItem display="flex" alignItems="flex-start" gap={2}>
                    <ListIcon as={FaCheckCircle} color="green.500" mt={0.5} />
                    <Box>
                      <Text fontWeight="medium">
                        Page load time has improved <strong>20%</strong> compared
                        to last month.
                      </Text>
                      <Text fontSize="sm" color={mutedColor} mt={1}>
                        Why it matters: Faster pages keep users engaged. What to
                        do: Keep optimizing images and lazy-loading below the
                        fold.
                      </Text>
                    </Box>
                  </ListItem>
                  <ListItem display="flex" alignItems="flex-start" gap={2}>
                    <ListIcon as={FaCheckCircle} color="green.500" mt={0.5} />
                    <Box>
                      <Text fontWeight="medium">
                        Users drop off most frequently after viewing the first
                        section.
                      </Text>
                      <Text fontSize="sm" color={mutedColor} mt={1}>
                        Why it matters: First section isn’t holding attention.
                        What to do: Add a clear CTA, shorten intro, or add
                        interactive elements in section 1.
                      </Text>
                    </Box>
                  </ListItem>
                  <ListItem display="flex" alignItems="flex-start" gap={2}>
                    <ListIcon as={FaCheckCircle} color="green.500" mt={0.5} />
                    <Box>
                      <Text fontWeight="medium">
                        Mobile traffic is up <strong>35%</strong> — now 58% of
                        total.
                      </Text>
                      <Text fontSize="sm" color={mutedColor} mt={1}>
                        Why it matters: Mobile experience is critical. What to
                        do: Test key flows on mobile and fix layout or tap
                        targets.
                      </Text>
                    </Box>
                  </ListItem>
                </List>
              </Box>
            </VStack>
          </CardBody>
        </Card>

        {/* 4. SEO & Technical tips */}
        <Heading size="md" mb={4} display="flex" alignItems="center" gap={2}>
          <Icon as={FaSearch} />
          SEO & technical tips
        </Heading>
        <Card bg={cardBg} borderWidth="1px" borderColor={borderColor} mb={10}>
          <CardBody>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
              <Box>
                <HStack mb={2}>
                  <Icon as={FaFileAlt} color="teal.500" />
                  <Text fontWeight="semibold">Page titles & meta</Text>
                </HStack>
                <Text fontSize="sm" color={mutedColor}>
                  Use unique, descriptive page titles and meta descriptions.
                  Structure content with clear H1 → H2 → H3 so both users and
                  search engines understand hierarchy.
                </Text>
              </Box>
              <Box>
                <HStack mb={2}>
                  <Icon as={FaLink} color="teal.500" />
                  <Text fontWeight="semibold">Internal links</Text>
                </HStack>
                <Text fontSize="sm" color={mutedColor}>
                  Link related courses and modules. Quality internal links
                  improve crawlability and keep users exploring.
                </Text>
              </Box>
              <Box>
                <HStack mb={2}>
                  <Icon as={FaMobileAlt} color="teal.500" />
                  <Text fontWeight="semibold">Mobile responsiveness</Text>
                </HStack>
                <Text fontSize="sm" color={mutedColor}>
                  Ensure layouts and fonts resize properly on phones. Most
                  visitors use mobile — a poor experience hurts engagement and
                  SEO.
                </Text>
              </Box>
              <Box>
                <HStack mb={2}>
                  <Icon as={FaImage} color="teal.500" />
                  <Text fontWeight="semibold">Images & alt tags</Text>
                </HStack>
                <Text fontSize="sm" color={mutedColor}>
                  Add descriptive alt text to images. Optimize file size and
                  format (e.g. WebP) to improve load time and accessibility.
                </Text>
              </Box>
            </SimpleGrid>
          </CardBody>
        </Card>

        {/* 5. User engagement metrics explained */}
        <Heading size="md" mb={4} display="flex" alignItems="center" gap={2}>
          <Icon as={FaUsers} />
          Engagement metrics explained
        </Heading>
        <Card bg={cardBg} borderWidth="1px" borderColor={borderColor} mb={10}>
          <CardBody>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
              <Box p={3} bg={highlightBg} borderRadius="md">
                <Text fontWeight="bold" mb={1}>
                  📌 Bounce rate
                </Text>
                <Text fontSize="sm" color={mutedColor} mb={2}>
                  % of visitors who leave from this page without another action.
                </Text>
                <Text fontSize="xs" color={mutedColor}>
                  High = many leave quickly; Low = people navigate further.
                </Text>
              </Box>
              <Box p={3} bg={highlightBg} borderRadius="md">
                <Text fontWeight="bold" mb={1}>
                  📌 Avg. time on page
                </Text>
                <Text fontSize="sm" color={mutedColor} mb={2}>
                  How long users stay on the page on average.
                </Text>
                <Text fontSize="xs" color={mutedColor}>
                  Higher usually means more engagement; context matters (e.g.
                  video vs text).
                </Text>
              </Box>
              <Box p={3} bg={highlightBg} borderRadius="md">
                <Text fontWeight="bold" mb={1}>
                  📌 Scroll depth
                </Text>
                <Text fontSize="sm" color={mutedColor} mb={2}>
                  How much of the content (top to bottom) is actually seen.
                </Text>
                <Text fontSize="xs" color={mutedColor}>
                  Low depth = content may be too long or not compelling enough to
                  scroll.
                </Text>
              </Box>
            </SimpleGrid>
          </CardBody>
        </Card>

        {/* 6. Story-driven interpretation */}
        <Heading size="md" mb={4}>
          Recommendations
        </Heading>
        <Card bg={cardBg} borderWidth="1px" borderColor={borderColor} mb={10}>
          <CardBody>
            <VStack align="stretch" spacing={4} textAlign="left">
              <Text>
                <strong>Trend:</strong> Traffic grew about{" "}
                <strong>50% this quarter</strong>, with sessions growing even
                faster than unique visitors — people are coming back and viewing
                more.
              </Text>
              <Text>
                <strong>Reason:</strong> Improved mobile performance and clearer
                course navigation led to better engagement and repeat visits.
              </Text>
              <Text>
                <strong>Recommendation:</strong> Double down on mobile
                optimization, add more internal links between related courses,
                and test shorter intros on high-traffic pages to reduce
                drop-off after the first section.
              </Text>
            </VStack>
          </CardBody>
        </Card>

        {/* 7. CTAs & next steps */}
        <Heading size="md" mb={4}>
          Next steps
        </Heading>
        <SimpleGrid columns={{ base: 1, sm: 3 }} spacing={4} mb={10}>
          <Button
            leftIcon={<FaDownload />}
            colorScheme="teal"
            size="md"
            as="a"
            href="#"
            variant="solid"
          >
            Download full report
          </Button>
          <Button
            leftIcon={<FaRobot />}
            colorScheme="teal"
            variant="outline"
            size="md"
            as="a"
            href="#"
          >
            Improve with AI suggestions
          </Button>
          <Button
            leftIcon={<FaEnvelope />}
            variant="outline"
            size="md"
            as="a"
            href="#"
          >
            Contact for personalized SEO
          </Button>
        </SimpleGrid>

        {/* 8. Real-world examples / case studies */}
        <Heading size="md" mb={4}>
          Results in practice
        </Heading>
        <Card bg={cardBg} borderWidth="1px" borderColor={borderColor} mb={10}>
          <CardBody>
            <VStack align="stretch" spacing={4}>
              <Box p={4} borderWidth="1px" borderRadius="lg" borderColor={borderColor}>
                <Text fontWeight="semibold" mb={2}>
                  Page A: Load time improvement
                </Text>
                <Text fontSize="sm" color={mutedColor}>
                  After optimizing images and deferring non-critical scripts,
                  load time improved by <strong>1.5s</strong>. Bounce rate dropped
                  12% in the following month.
                </Text>
              </Box>
              <Box p={4} borderWidth="1px" borderRadius="lg" borderColor={borderColor}>
                <Text fontWeight="semibold" mb={2}>
                  Course B: Engagement after restructure
                </Text>
                <Text fontSize="sm" color={mutedColor}>
                  Restructuring the first section and adding a clear CTA
                  increased average time on page by <strong>40%</strong> and
                  completion rate by <strong>18%</strong>.
                </Text>
              </Box>
            </VStack>
          </CardBody>
        </Card>

        {/* 9. Regular updates & fresh insights */}
        <Flex
          align="center"
          justify="space-between"
          flexWrap="wrap"
          gap={3}
          p={4}
          bg={highlightBg}
          borderRadius="lg"
          borderWidth="1px"
          borderColor={borderColor}
        >
          <HStack>
            <Icon as={FaSyncAlt} />
            <Box>
              <Text fontWeight="semibold" fontSize="sm">
                Last updated: {lastUpdated}
              </Text>
              <Text fontSize="xs" color={mutedColor}>
                Data refreshes weekly. Highlights reflect latest trends.
              </Text>
            </Box>
          </HStack>
          <Badge colorScheme="teal" fontSize="sm">
            Fresh insights
          </Badge>
        </Flex>
      </Container>
    </Box>
  );
}
