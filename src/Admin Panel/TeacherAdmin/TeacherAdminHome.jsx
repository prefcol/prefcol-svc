// import React from 'react';
// import { Box, Flex, Heading, Text, Button, VStack, HStack, Divider } from '@chakra-ui/react';
// import { 
//     FaChalkboardTeacher, 
//     FaPlus, 
//     FaCog, 
//     FaBook, 
//     FaClipboardList, 
//     FaUserGraduate 
// } from 'react-icons/fa';
// import TeacherAdminSidebar from './TeacherAdminSidebar';

// const TeacherAdminHome = () => {
//     return (
//         <Flex minH="100vh">
//             {/* Sidebar Section */}
//             <TeacherAdminSidebar />

//             {/* Main Content Section */}
//             <Box
//                 p={8}
//                 bg="gray.50"
//                 color="gray.700"
//                 flex="1"
//                 display="flex"
//                 flexDirection="column"
//                 alignItems="center"
//                 justifyContent="center"
//             >
//                 <Heading size="2xl" mb={4} color="teal.600">
//                     Welcome to the Teacher Admin Panel
//                 </Heading>

//                 <Text fontSize="lg" mb={8} textAlign="center">
//                     Manage teacher-related tasks and information efficiently.
//                 </Text>

//                 <VStack spacing={6} w="100%" maxW="600px">
//                     <HStack spacing={4} w="100%">
//                         <Button
//                             leftIcon={<FaChalkboardTeacher />}
//                             colorScheme="blue"
//                             variant="outline"
//                             size="lg"
//                             w="100%"
//                         >
//                             View Teachers
//                         </Button>

//                         <Button
//                             leftIcon={<FaPlus />}
//                             colorScheme="green"
//                             size="lg"
//                             w="100%"
//                         >
//                             Add Teacher
//                         </Button>
//                     </HStack>

//                     <HStack spacing={4} w="100%">
//                         <Button
//                             leftIcon={<FaClipboardList />}
//                             colorScheme="purple"
//                             variant="outline"
//                             size="lg"
//                             w="100%"
//                         >
//                             Attendance Records
//                         </Button>

//                         <Button
//                             leftIcon={<FaBook />}
//                             colorScheme="orange"
//                             size="lg"
//                             w="100%"
//                         >
//                             Manage Course Materials
//                         </Button>
//                     </HStack>

//                     <HStack spacing={4} w="100%">
//                         <Button
//                             leftIcon={<FaUserGraduate />}
//                             colorScheme="pink"
//                             variant="outline"
//                             size="lg"
//                             w="100%"
//                         >
//                             Student Management
//                         </Button>

//                         <Button
//                             leftIcon={<FaCog />}
//                             colorScheme="teal"
//                             size="lg"
//                             w="100%"
//                         >
//                             Settings
//                         </Button>
//                     </HStack>
//                 </VStack>

//                 <Divider my={8} borderColor="gray.300" />

//                 <Text textAlign="center" fontSize="sm" color="gray.500">
//                     Need help? Visit our{' '}
//                     <Text as="span" color="teal.500" cursor="pointer">
//                         Support Center
//                     </Text>{' '}
//                     for guidance.
//                 </Text>
//             </Box>
//         </Flex>
//     );
// };

// export default TeacherAdminHome;


// import React, { useState } from 'react';
// import { 
//   Box, Flex, Heading, Text, Button, VStack, HStack, Divider, 
//   Grid, GridItem, Badge, SimpleGrid, useMediaQuery, IconButton, 
//   Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, 
//   DrawerCloseButton, useDisclosure, Stat, StatLabel, StatNumber, StatHelpText
// } from '@chakra-ui/react';
// import { 
//   FaChalkboardTeacher, FaPlus, FaCog, FaBook, FaClipboardList, 
//   FaUserGraduate, FaBars, FaCalendarAlt, FaBell, FaChartLine,
//   FaQuestionCircle, FaSearch
// } from 'react-icons/fa';
// import TeacherAdminSidebar from './TeacherAdminSidebar';

// const TeacherAdminHome = () => {
//   const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
//   const { isOpen, onOpen, onClose } = useDisclosure();
  
//   // Sample data for quick stats
//   const quickStats = [
//     { label: "Active Teachers", value: 24, change: "+2 this month" },
//     { label: "Courses", value: 36, change: "98% completion rate" },
//     { label: "Students", value: 450, change: "85% attendance" },
//     { label: "Upcoming Events", value: 8, change: "Next: Friday" }
//   ];

//   // Sample data for recent notifications
//   const notifications = [
//     "New curriculum guidelines available",
//     "Staff meeting scheduled for tomorrow at 2pm",
//     "5 teachers submitted lesson plans"
//   ];

//   return (
//     <Flex minH="100vh" direction="row">
//     {/* Sidebar for larger screens */}

//         <TeacherAdminSidebar />
  
       


//     {/* Hamburger menu for smaller screens */}
//     {!isLargerThan768 && (
//         <IconButton
//             icon={<FaBars />}
//             aria-label="Open Menu"
//             position="fixed"
//             top={4}
//             left={4}
//             zIndex={10}
//             onClick={onOpen}
//         />
//     )}
//       <Box
//         p={{ base: 4, md: 8 }}
//         pt={{ base: 16, md: 8 }}
//         bg="gray.50"
//         color="gray.700"
//         w="100%"
//       >
//         {/* Welcome Section */}
//         <Box mb={8} textAlign={{ base: "center", md: "left" }}>
//           <Heading size={{ base: "xl", md: "2xl" }} mb={2} color="teal.600">
//             Welcome to the Teacher Admin Panel
//           </Heading>
//           <Text fontSize={{ base: "md", md: "lg" }}>
//             Manage teacher-related tasks and information efficiently.
//           </Text>
//         </Box>

//         {/* Quick Stats Section */}
//         <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={4} mb={8}>
//           {quickStats.map((stat, index) => (
//             <Stat 
//               key={index} 
//               bg="white" 
//               p={4} 
//               borderRadius="md" 
//               boxShadow="sm" 
//               border="1px"
//               borderColor="gray.200"
//             >
//               <StatLabel color="gray.500">{stat.label}</StatLabel>
//               <StatNumber fontSize="2xl" color="teal.600">{stat.value}</StatNumber>
//               <StatHelpText>{stat.change}</StatHelpText>
//             </Stat>
//           ))}
//         </SimpleGrid>

//         {/* Main Action Buttons - More responsive grid */}
//         <Grid 
//           templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
//           gap={4}
//           mb={8}
//         >
//           <GridItem colSpan={1}>
//             <Button
//               leftIcon={<FaChalkboardTeacher />}
//               colorScheme="blue"
//               variant="outline"
//               size="lg"
//               w="100%"
//               justifyContent="flex-start"
//               px={5}
//             >
//               View Teachers
//             </Button>
//           </GridItem>
          
//           <GridItem colSpan={1}>
//             <Button
//               leftIcon={<FaPlus />}
//               colorScheme="green"
//               size="lg"
//               w="100%"
//               justifyContent="flex-start"
//               px={5}
//             >
//               Add Teacher
//             </Button>
//           </GridItem>
          
//           <GridItem colSpan={1}>
//             <Button
//               leftIcon={<FaClipboardList />}
//               colorScheme="purple"
//               variant="outline"
//               size="lg"
//               w="100%"
//               justifyContent="flex-start"
//               px={5}
//             >
//               Attendance Records
//             </Button>
//           </GridItem>
          
//           <GridItem colSpan={1}>
//             <Button
//               leftIcon={<FaBook />}
//               colorScheme="orange"
//               size="lg"
//               w="100%"
//               justifyContent="flex-start"
//               px={5}
//             >
//               Manage Course Materials
//             </Button>
//           </GridItem>
          
//           <GridItem colSpan={1}>
//             <Button
//               leftIcon={<FaUserGraduate />}
//               colorScheme="pink"
//               variant="outline"
//               size="lg"
//               w="100%"
//               justifyContent="flex-start"
//               px={5}
//             >
//               Student Management
//             </Button>
//           </GridItem>
          
//           <GridItem colSpan={1}>
//             <Button
//               leftIcon={<FaCog />}
//               colorScheme="teal"
//               size="lg"
//               w="100%"
//               justifyContent="flex-start"
//               px={5}
//             >
//               Settings
//             </Button>
//           </GridItem>
//         </Grid>

//         {/* New Features Section */}
//         <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} mb={8}>
//           {/* Recent Notifications */}
//           <Box bg="white" p={5} borderRadius="md" boxShadow="sm" border="1px" borderColor="gray.200">
//             <Flex justify="space-between" align="center" mb={4}>
//               <Heading size="md" color="teal.600">
//                 <Flex align="center">
//                   <FaBell mr={2} />
//                   Recent Notifications
//                 </Flex>
//               </Heading>
//               <Badge colorScheme="red" borderRadius="full" px={2}>
//                 New
//               </Badge>
//             </Flex>
//             <VStack align="stretch" spacing={3}>
//               {notifications.map((notification, index) => (
//                 <Text key={index} p={2} bg="gray.50" borderRadius="md">
//                   {notification}
//                 </Text>
//               ))}
//             </VStack>
//             <Button mt={4} size="sm" colorScheme="teal" variant="outline" w="100%">
//               View All Notifications
//             </Button>
//           </Box>

//           {/* Quick Access */}
//           <Box bg="white" p={5} borderRadius="md" boxShadow="sm" border="1px" borderColor="gray.200">
//             <Heading size="md" mb={4} color="teal.600">
//               <Flex align="center">
//                 <FaSearch mr={2} />
//                 Quick Access
//               </Flex>
//             </Heading>
//             <SimpleGrid columns={2} spacing={3}>
//               <Button leftIcon={<FaCalendarAlt />} colorScheme="blue" variant="ghost" justifyContent="flex-start">
//                 Calendar
//               </Button>
//               <Button leftIcon={<FaChartLine />} colorScheme="purple" variant="ghost" justifyContent="flex-start">
//                 Reports
//               </Button>
//               <Button leftIcon={<FaBook />} colorScheme="orange" variant="ghost" justifyContent="flex-start">
//                 Curriculum
//               </Button>
//               <Button leftIcon={<FaQuestionCircle />} colorScheme="green" variant="ghost" justifyContent="flex-start">
//                 Help Center
//               </Button>
//             </SimpleGrid>
//           </Box>
//         </SimpleGrid>

//         <Divider mb={6} borderColor="gray.300" />

//         {/* Footer Section */}
//         <Flex 
//           direction={{ base: "column", md: "row" }} 
//           justify="space-between" 
//           align={{ base: "center", md: "flex-start" }}
//           textAlign={{ base: "center", md: "left" }}
//           fontSize="sm" 
//           color="gray.500"
//           gap={2}
//         >
//           <Text>
//             © 2025 Teacher Management System. All rights reserved.
//           </Text>
//           <HStack spacing={4}>
//             <Text as="span" color="teal.500" cursor="pointer">Support Center</Text>
//             <Text as="span" color="teal.500" cursor="pointer">Privacy Policy</Text>
//             <Text as="span" color="teal.500" cursor="pointer">Terms of Use</Text>
//           </HStack>
//         </Flex>
//       </Box>
//     </Flex>
//   );
// };

// export default TeacherAdminHome;





import React, { useState, useEffect } from 'react';
import { 
  Box, Flex, Heading, Text, Button, VStack, HStack, Divider, 
  Grid, GridItem, Badge, SimpleGrid, useMediaQuery, IconButton, 
  Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, 
  DrawerCloseButton, useDisclosure, Stat, StatLabel, StatNumber, StatHelpText,
  Spinner,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';
import { 
  FaChalkboardTeacher, FaPlus, FaCog, FaBook, FaClipboardList, 
  FaUserGraduate, FaBars, FaCalendarAlt, FaBell, FaChartLine,
  FaQuestionCircle, FaSearch
} from 'react-icons/fa';
import TeacherAdminSidebar from './TeacherAdminSidebar';
import { getTeacherDashboard } from './api/teacherApi';
import { useAuth } from '../../Contexts/AuthContext';

const TeacherAdminHome = () => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [sidebarWidth, setSidebarWidth] = useState(280);
  const [dashboard, setDashboard] = useState(null);
  const [dashboardLoading, setDashboardLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    let cancelled = false;
    getTeacherDashboard()
      .then((data) => {
        if (!cancelled) setDashboard(data);
      })
      .catch(() => { /* use fallback stats */ })
      .finally(() => {
        if (!cancelled) setDashboardLoading(false);
      });
    return () => { cancelled = true; };
  }, []);

  const displayName = user?.firstName || user?.name || (user?.email || "").split("@")[0] || "Teacher";
  const contentBg = useColorModeValue("gray.50", "gray.900");
  const statBg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  
  // Dashboard-driven or fallback quick stats
  const quickStats = dashboard
    ? [
        { label: "Total Students", value: dashboard.totalStudents ?? 0, change: "Assigned to you" },
        { label: "Online", value: dashboard.studentsOnline ?? 0, change: "Active now" },
        { label: "Offline", value: dashboard.studentsOffline ?? 0, change: "Not online" },
        { label: "Today's Classes", value: dashboard.todaysClassesCount ?? 0, change: dashboard.pendingAssignmentsCount != null ? `${dashboard.pendingAssignmentsCount} pending assignments` : "Upcoming" },
      ]
    : [
        { label: "Active Teachers", value: 24, change: "+2 this month" },
        { label: "Courses", value: 36, change: "98% completion rate" },
        { label: "Students", value: 450, change: "85% attendance" },
        { label: "Upcoming Events", value: 8, change: "Next: Friday" },
      ];

  // Sample data for recent notifications
  const notifications = [
    "New curriculum guidelines available",
    "Staff meeting scheduled for tomorrow at 2pm",
    "5 teachers submitted lesson plans"
  ];

  // Get sidebar width from TeacherAdminSidebar component
  useEffect(() => {
    // Listen for sidebar width changes
    const handleSidebarResize = (e) => {
      if (e.detail && typeof e.detail.width === 'number') {
        setSidebarWidth(e.detail.width);
      }
    };

    window.addEventListener('sidebarResize', handleSidebarResize);
    return () => {
      window.removeEventListener('sidebarResize', handleSidebarResize);
    };
  }, []);

  return (
    <Flex minH="100vh" direction="row">
      {/* Sidebar for larger screens - Fixed position */}
      {isLargerThan768 && (
        <Box 
          position="fixed" 
          top="0" 
          left="0" 
          height="100vh" 
          zIndex="100"
          width={`${sidebarWidth}px`}
        >
          <TeacherAdminSidebar />
        </Box>
      )}

      {/* Hamburger menu for mobile */}
      {!isLargerThan768 && (
        <>
          <IconButton
            icon={<FaBars />}
            aria-label="Open Menu"
            position="fixed"
            top={4}
            left={4}
            zIndex={100}
            onClick={onOpen}
            colorScheme="teal"
          />
          
          <Drawer isOpen={isOpen} placement="left" onClose={onClose} size="full">
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
              <DrawerBody p={0} overflow="hidden">
                <Box height="100%" overflow="hidden">
                  <TeacherAdminSidebar isMobile={true} />
                </Box>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </>
      )}

      {/* Main Content Section - Adjusted margin to account for sidebar */}
      <Box
        p={{ base: 4, md: 8 }}
        pt={{ base: 16, md: 8 }}
        bg={contentBg}
        width="100%"
        ml={{ base: 0, md: `${sidebarWidth}px` }}
        transition="margin-left 0.3s ease"
      >
        {/* Welcome Section */}
        <Box mb={8} textAlign={{ base: "center", md: "left" }}>
          <Heading size={{ base: "xl", md: "2xl" }} mb={2} color="teal.600">
            Welcome back, {displayName}!
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }}>
            {dashboard?.teacherName ? `${dashboard.teacherName} · ` : ""}
            Manage your classes, students, and tasks.
          </Text>
        </Box>

        {/* Quick Stats Section */}
        {dashboardLoading ? (
          <Flex justify="center" py={8}>
            <Spinner size="lg" color="teal.500" />
          </Flex>
        ) : (
          <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={4} mb={8}>
            {quickStats.map((stat, index) => (
              <Stat 
                key={index} 
                bg={statBg} 
                p={4} 
                borderRadius="md" 
                boxShadow="sm" 
                border="1px"
                borderColor={borderColor}
              >
                <StatLabel color="gray.500">{stat.label}</StatLabel>
                <StatNumber fontSize="2xl" color="teal.600">{stat.value}</StatNumber>
                <StatHelpText>{stat.change}</StatHelpText>
              </Stat>
            ))}
          </SimpleGrid>
        )}

        {/* Today's Classes from API */}
        {dashboard?.todaysClasses?.length > 0 && (
          <Box bg={statBg} p={5} borderRadius="md" boxShadow="sm" border="1px" borderColor={borderColor} mb={8}>
            <Heading size="md" color="teal.600" mb={4}>
              <Flex align="center">
                <FaCalendarAlt mr={2} />
                Today&apos;s Classes
              </Flex>
            </Heading>
            <VStack align="stretch" spacing={3}>
              {dashboard.todaysClasses.map((c) => (
                <Flex key={c.id} justify="space-between" align="center" p={3} bg="gray.50" borderRadius="md">
                  <Box>
                    <Text fontWeight="medium">{c.title}</Text>
                    <Text fontSize="sm" color="gray.500">
                      {c.batchType} · {c.startTime} – {c.endTime}
                    </Text>
                  </Box>
                  {c.meetingLink && (
                    <Link href={c.meetingLink} isExternal colorScheme="teal" fontSize="sm">
                      Join
                    </Link>
                  )}
                </Flex>
              ))}
            </VStack>
          </Box>
        )}

        {/* Main Action Buttons - More responsive grid */}
        <Grid 
          templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
          gap={4}
          mb={8}
        >
          <GridItem colSpan={1}>
            <Button
              leftIcon={<FaChalkboardTeacher />}
              colorScheme="blue"
              variant="outline"
              size="lg"
              w="100%"
              justifyContent="flex-start"
              px={5}
            >
              View Teachers
            </Button>
          </GridItem>
          
          <GridItem colSpan={1}>
            <Button
              leftIcon={<FaPlus />}
              colorScheme="green"
              size="lg"
              w="100%"
              justifyContent="flex-start"
              px={5}
            >
              Add Teacher
            </Button>
          </GridItem>
          
          <GridItem colSpan={1}>
            <Button
              leftIcon={<FaClipboardList />}
              colorScheme="purple"
              variant="outline"
              size="lg"
              w="100%"
              justifyContent="flex-start"
              px={5}
            >
              Attendance Records
            </Button>
          </GridItem>
          
          <GridItem colSpan={1}>
            <Button
              leftIcon={<FaBook />}
              colorScheme="orange"
              size="lg"
              w="100%"
              justifyContent="flex-start"
              px={5}
            >
              Manage Course Materials
            </Button>
          </GridItem>
          
          <GridItem colSpan={1}>
            <Button
              leftIcon={<FaUserGraduate />}
              colorScheme="pink"
              variant="outline"
              size="lg"
              w="100%"
              justifyContent="flex-start"
              px={5}
            >
              Student Management
            </Button>
          </GridItem>
          
          <GridItem colSpan={1}>
            <Button
              leftIcon={<FaCog />}
              colorScheme="teal"
              size="lg"
              w="100%"
              justifyContent="flex-start"
              px={5}
            >
              Settings
            </Button>
          </GridItem>
        </Grid>

        {/* New Features Section */}
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} mb={8}>
          {/* Recent Notifications */}
          <Box bg={statBg} p={5} borderRadius="md" boxShadow="sm" border="1px" borderColor={borderColor}>
            <Flex justify="space-between" align="center" mb={4}>
              <Heading size="md" color="teal.600">
                <Flex align="center">
                  <FaBell mr={2} />
                  Recent Notifications
                </Flex>
              </Heading>
              <Badge colorScheme="red" borderRadius="full" px={2}>
                New
              </Badge>
            </Flex>
            <VStack align="stretch" spacing={3}>
              {notifications.map((notification, index) => (
                <Text key={index} p={2} bg="gray.50" borderRadius="md">
                  {notification}
                </Text>
              ))}
            </VStack>
            <Button mt={4} size="sm" colorScheme="teal" variant="outline" w="100%">
              View All Notifications
            </Button>
          </Box>

          {/* Quick Access */}
          <Box bg={statBg} p={5} borderRadius="md" boxShadow="sm" border="1px" borderColor={borderColor}>
            <Heading size="md" mb={4} color="teal.600">
              <Flex align="center">
                <FaSearch mr={2} />
                Quick Access
              </Flex>
            </Heading>
            <SimpleGrid columns={2} spacing={3}>
              <Button leftIcon={<FaCalendarAlt />} colorScheme="blue" variant="ghost" justifyContent="flex-start">
                Calendar
              </Button>
              <Button leftIcon={<FaChartLine />} colorScheme="purple" variant="ghost" justifyContent="flex-start">
                Reports
              </Button>
              <Button leftIcon={<FaBook />} colorScheme="orange" variant="ghost" justifyContent="flex-start">
                Curriculum
              </Button>
              <Button leftIcon={<FaQuestionCircle />} colorScheme="green" variant="ghost" justifyContent="flex-start">
                Help Center
              </Button>
            </SimpleGrid>
          </Box>
        </SimpleGrid>

        <Divider mb={6} borderColor="gray.300" />

        {/* Footer Section */}
        <Flex 
          direction={{ base: "column", md: "row" }} 
          justify="space-between" 
          align={{ base: "center", md: "flex-start" }}
          textAlign={{ base: "center", md: "left" }}
          fontSize="sm" 
          color="gray.500"
          gap={2}
        >
          <Text>
            © 2025 Teacher Management System. All rights reserved.
          </Text>
          <HStack spacing={4}>
            <Text as="span" color="teal.500" cursor="pointer">Support Center</Text>
            <Text as="span" color="teal.500" cursor="pointer">Privacy Policy</Text>
            <Text as="span" color="teal.500" cursor="pointer">Terms of Use</Text>
          </HStack>
        </Flex>
      </Box>
    </Flex>
  );
};

export default TeacherAdminHome;