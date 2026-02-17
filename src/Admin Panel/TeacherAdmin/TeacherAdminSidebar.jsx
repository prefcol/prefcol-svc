// // import React from 'react';
// // import { Box, VStack, Heading, Text, Link, Icon } from '@chakra-ui/react';
// // import { FaChalkboardTeacher, FaCalendarAlt, FaVideo, FaUserGraduate, FaSync, FaBell } from 'react-icons/fa';
// // import { NavLink } from 'react-router-dom';

// // const TeacherSidebar = () => {
// //     return (
// //         <Box
// //             w="300px"
// //             bg="gray.100"
// //             p={6}
// //             boxShadow="lg"
// //             minH="100vh"
// //             color="gray.800"
// //         >
// //             <Heading size="lg" mb={6}>Teacher Portal</Heading>

// //             <VStack align="start" spacing={4}>
// //                 {/* Teacher Login & Dashboard */}
// //                 <Text fontWeight="bold">Teacher Login & Dashboard</Text>
// //                 <NavLink to="/teacher/dashboard">
// //                     <Link><Icon as={FaChalkboardTeacher} mr={2} />View Schedule & Availability</Link>
// //                 </NavLink>

// //                 {/* Attendance Management */}
// //                 <Text fontWeight="bold" mt={4}>Attendance Management</Text>
// //                 <NavLink to="/teacher/attendance">
// //                     <Link><Icon as={FaCalendarAlt} mr={2} />Mark Attendance</Link>
// //                 </NavLink>
// //                 <NavLink to="/teacher/attendance-reports">
// //                     <Link><Icon as={FaCalendarAlt} mr={2} />Generate Attendance Reports</Link>
// //                 </NavLink>

// //                 {/* Video Management */}
// //                 <Text fontWeight="bold" mt={4}>Video Management</Text>
// //                 <NavLink to="/teacher/video/upload">
// //                     <Link><Icon as={FaVideo} mr={2} />Upload Course Videos</Link>
// //                 </NavLink>
// //                 <NavLink to="/teacher/video/manage">
// //                     <Link><Icon as={FaVideo} mr={2} />Manage Videos</Link>
// //                 </NavLink>

// //                 {/* Student Portal */}
// //                 <Text fontWeight="bold" mt={4}>Student Portal</Text>
// //                 <NavLink to="/student/dashboard">
// //                     <Link><Icon as={FaUserGraduate} mr={2} />View Enrolled Courses</Link>
// //                 </NavLink>

// //                 {/* Integration of Student and Admin Portal */}
// //                 <Text fontWeight="bold" mt={4}>Integration & Sync</Text>
// //                 <NavLink to="/integration/sync-data">
// //                     <Link><Icon as={FaSync} mr={2} />Real-time Data Sync</Link>
// //                 </NavLink>

// //                 {/* Additional Features */}
// //                 <Text fontWeight="bold" mt={4}>Additional Features</Text>
// //                 <NavLink to="/features/notifications">
// //                     <Link><Icon as={FaBell} mr={2} />Notifications & Alerts</Link>
// //                 </NavLink>
// //             </VStack>
// //         </Box>
// //     );
// // };

// // export default TeacherSidebar;


// import { useState } from "react";
// import { Link } from "react-router-dom"; // Assuming you switched to React Router
// import { ChevronRightIcon } from "@chakra-ui/icons";
// import {
//   Box,
//   Flex,
//   Icon,
//   Text,
//   Tooltip,
//   Collapse,
//   useDisclosure,
// } from "@chakra-ui/react";
// import {
//   FaCalendarAlt,
//   FaVideo,
//   FaBell,
//   FaSync,
//   FaGraduationCap
// } from "react-icons/fa";

// export default function TeacherSidebar() {
//   const [isExpanded, setIsExpanded] = useState(false);

//   return (
//     <Box
//       h="100vh"
//       w={isExpanded ? "280px" : "90px"}
//       bgGradient="linear(to-b, blue.100, blue.200)"
//       p={4}
//       roundedRight="3xl"
//       shadow="2xl"
//       onMouseEnter={() => setIsExpanded(true)}
//       onMouseLeave={() => setIsExpanded(false)}
//       transition="width 0.4s ease-in-out"
//     >
//       {isExpanded && (
//         <Text textAlign="center" fontSize="3xl" fontWeight="bold" color="blue.800">
//           Teacher Portal
//         </Text>
//       )}

//       <SidebarLink
//         icon={FaCalendarAlt}
//         label="Dashboard"
//         href="/teacher/dashboard"
//         isExpanded={isExpanded}
//       />

//       <SidebarSection title="Attendance" isExpanded={isExpanded}>
//         <SidebarLink
//           icon={FaCalendarAlt}
//           label="Mark Attendance"
//           href="/teacher/attendance"
//           isExpanded={isExpanded}
//         />
//         <SidebarLink
//           icon={FaCalendarAlt}
//           label="Attendance Reports"
//           href="/teacher/attendance-reports"
//           isExpanded={isExpanded}
//         />
//       </SidebarSection>

//       <SidebarSection title="Videos" isExpanded={isExpanded}>
//         <SidebarLink
//           icon={FaVideo}
//           label="Upload Videos"
//           href="/teacher/video/upload"
//           isExpanded={isExpanded}
//         />
//         <SidebarLink
//           icon={FaVideo}
//           label="Manage Videos"
//           href="/teacher/video/manage"
//           isExpanded={isExpanded}
//         />
//       </SidebarSection>

//       <SidebarSection title="Students" isExpanded={isExpanded}>
//         <SidebarLink
//           icon={FaGraduationCap}
//           label="Student Courses"
//           href="/student/dashboard"
//           isExpanded={isExpanded}
//         />
//       </SidebarSection>
//     </Box>
//   );
// }

// function SidebarLink({ icon, label, href, isExpanded }) {
//   return (
//     <Tooltip label={!isExpanded && label} placement="right">
//       <Flex
//         as={Link}
//         to={href}
//         align="center"
//         p={3}
//         borderRadius="xl"
//         bg="blue.200"
//         _hover={{ bg: "blue.300", transform: "scale(1.08)" }}
//         cursor="pointer"
//         transition="all 0.3s ease-in-out"
//       >
//         <Icon as={icon} boxSize={6} mr={isExpanded ? 3 : 0} />
//         {isExpanded && <Text>{label}</Text>}
//       </Flex>
//     </Tooltip>
//   );
// }

// function SidebarSection({ title, children, isExpanded }) {
//   const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: true });

//   return (
//     <Box py={3}>
//       {isExpanded && (
//         <Flex align="center" cursor="pointer" onClick={onToggle} py={2}>
//           <Text fontSize="sm" fontWeight="bold" textTransform="uppercase">
//             {title}
//           </Text>
//           <ChevronRightIcon
//             boxSize={5}
//             ml="auto"
//             transform={isOpen ? "rotate(90deg)" : "rotate(0)"}
//             transition="transform 0.3s"
//           />
//         </Flex>
//       )}
//       <Collapse in={isOpen || !isExpanded}>{children}</Collapse>
//     </Box>
//   );
// }




// import { useState, useEffect } from "react"
// import {
//   Box,
//   Flex,
//   Icon,
//   Text,
//   Avatar,
//   Badge,
//   Tooltip,
//   Collapse,
//   Divider,
//   useDisclosure,
//   useColorModeValue,
//   IconButton,
//   VStack,
//   HStack,
//   Progress,
// } from "@chakra-ui/react"
// import { ChevronRightIcon, ChevronLeftIcon, BellIcon, SettingsIcon } from "@chakra-ui/icons"
// import {
//   FaCalendarAlt,
//   FaVideo,
//   FaGraduationCap,
//   FaChalkboardTeacher,
//   FaBook,
//   FaClipboardList,
//   FaChartBar,
//   FaUserGraduate,
//   FaSignOutAlt,
// } from "react-icons/fa"
// import { Link as NextLink } from "react-router-dom"

// export default function TeacherSidebar() {
//   const [isExpanded, setIsExpanded] = useState(true)
//   const [isMobile, setIsMobile] = useState(false)

//   // Check if we're on mobile
//   useEffect(() => {
//     const checkIfMobile = () => {
//       setIsMobile(window.innerWidth < 768)
//       if (window.innerWidth < 768) {
//         setIsExpanded(false)
//       }
//     }

//     checkIfMobile()
//     window.addEventListener("resize", checkIfMobile)

//     return () => {
//       window.removeEventListener("resize", checkIfMobile)
//     }
//   }, [])

//   // Colors
//   const bgGradient = useColorModeValue("linear(to-b, blue.50, blue.100)", "linear(to-b, blue.900, blue.800)")
//   const sidebarBg = useColorModeValue("white", "gray.800")
//   const textColor = useColorModeValue("gray.800", "white")
//   const accentColor = useColorModeValue("blue.500", "blue.300")
//   const hoverBg = useColorModeValue("blue.50", "blue.700")
//   const borderColor = useColorModeValue("gray.200", "gray.700")

// return (
//     <Box
//         h="100vh"
//         w={isExpanded ? "280px" : "80px"}
//         bg={sidebarBg}
//         bgGradient={bgGradient}
//         boxShadow="lg"
//         borderRight="1px"
//         borderColor={borderColor}
//         position="relative"
//         transition="width 0.3s ease"
//         overflow="scroll"
//         css={{
//             "&::-webkit-scrollbar": {
//                 width: "4px",
//             },
//             "&::-webkit-scrollbar-track": {
//                 width: "6px",
//             },
//             "&::-webkit-scrollbar-thumb": {
//                 background: useColorModeValue("blue.200", "blue.700"),
//                 borderRadius: "24px",
//             },
//         }}
//     >
//         {/* Toggle button */}
//         <IconButton
//             aria-label="Toggle sidebar"
//             icon={isExpanded ? <ChevronLeftIcon /> : <ChevronRightIcon />}
//             position="absolute"
//             right="-12px"
//             top="20px"
//             size="sm"
//             borderRadius="full"
//             bg={accentColor}
//             color="white"
//             zIndex={2}
//             onClick={() => setIsExpanded(!isExpanded)}
//             _hover={{ bg: "blue.600" }}
//             display={{ base: "none", md: "flex" }}
//         />

//         {/* Header with logo/title */}
//         <Flex align="center" justify={isExpanded ? "flex-start" : "center"} p={4} h="80px">
//             {isExpanded ? (
//                 <Text fontSize="xl" fontWeight="bold" color={accentColor} letterSpacing="tight">
//                     Teacher Portal
//                 </Text>
//             ) : (
//                 <Avatar size="sm" bg={accentColor} color="white" name="TP" fontWeight="bold" />
//             )}
//         </Flex>

//         {/* User profile section */}
//         <Flex
//             direction={isExpanded ? "row" : "column"}
//             align="center"
//             justify={isExpanded ? "flex-start" : "center"}
//             p={isExpanded ? 4 : 2}
//             mb={4}
//             borderBottom="1px"
//             borderColor={borderColor}
//         >
//             <Avatar
//                 size={isExpanded ? "md" : "sm"}
//                 src="/placeholder.svg?height=80&width=80"
//                 name="John Doe"
//                 mb={isExpanded ? 0 : 2}
//             />

//             {isExpanded && (
//                 <Box ml={3}>
//                     <Text fontWeight="bold" fontSize="sm" color={textColor}>
//                         John Doe
//                     </Text>
//                     <Text fontSize="xs" color="gray.500">
//                         Mathematics Teacher
//                     </Text>
//                     <HStack mt={1} spacing={1}>
//                         <Badge colorScheme="green" fontSize="xs" borderRadius="full" px={2}>
//                             Online
//                         </Badge>
//                     </HStack>
//                 </Box>
//             )}
//         </Flex>

//         {/* Navigation */}
//         <VStack spacing={1} align="stretch" px={2}>
//             <SidebarLink
//                 icon={FaChalkboardTeacher}
//                 label="Dashboard"
//                 href="/teacher/dashboard"
//                 isExpanded={isExpanded}
//                 isActive={true}
//             />

//             <SidebarSection title="Teaching" isExpanded={isExpanded}>
//                 <SidebarLink
//                     icon={FaCalendarAlt}
//                     label="Class Schedule"
//                     href="/teacher/schedule"
//                     isExpanded={isExpanded}
//                     notification={3}
//                 />
//                 <SidebarLink icon={FaClipboardList} label="Attendance" href="/teacher/attendance" isExpanded={isExpanded} />
//                 <SidebarLink icon={FaBook} label="Lesson Plans" href="/teacher/lessons" isExpanded={isExpanded} />
//             </SidebarSection>

//             <SidebarSection title="Content" isExpanded={isExpanded}>
//                 <SidebarLink icon={FaVideo} label="Video Lessons" href="/teacher/videos" isExpanded={isExpanded} />
//                 <SidebarLink
//                     icon={FaClipboardList}
//                     label="Assignments"
//                     href="/teacher/assignments"
//                     isExpanded={isExpanded}
//                     notification={5}
//                 />
//                 <SidebarLink icon={FaChartBar} label="Assessments" href="/teacher/assessments" isExpanded={isExpanded} />
//             </SidebarSection>

//             <SidebarSection title="Students" isExpanded={isExpanded}>
//                 <SidebarLink icon={FaUserGraduate} label="Student List" href="/teacher/students" isExpanded={isExpanded} />
//                 <SidebarLink icon={FaGraduationCap} label="Performance" href="/teacher/performance" isExpanded={isExpanded} />
//             </SidebarSection>

//             {/* {isExpanded && (
//                 <Box mt={6} px={2}>
//                     <Text fontSize="xs" color="gray.500" mb={2}>
//                         COMPLETION STATS
//                     </Text>
//                     <VStack spacing={3} align="stretch">
//                         <Box>
//                             <Flex justify="space-between" mb={1}>
//                                 <Text fontSize="xs">Grading</Text>
//                                 <Text fontSize="xs" fontWeight="bold">
//                                     78%
//                                 </Text>
//                             </Flex>
//                             <Progress value={78} size="xs" colorScheme="green" borderRadius="full" />
//                         </Box>
//                         <Box>
//                             <Flex justify="space-between" mb={1}>
//                                 <Text fontSize="xs">Lesson Planning</Text>
//                                 <Text fontSize="xs" fontWeight="bold">
//                                     45%
//                                 </Text>
//                             </Flex>
//                             <Progress value={45} size="xs" colorScheme="blue" borderRadius="full" />
//                         </Box>
//                     </VStack>
//                 </Box>
//             )} */}
//         </VStack>

//         {/* Footer actions */}
//         <VStack
//             position="relative"
//             bottom="0"
//             left="0"
//             right="0"
//             p={3}
//             borderTop="1px"
//             borderColor={borderColor}
//             bg={sidebarBg}
//             spacing={2}
//             align={isExpanded ? "stretch" : "center"}
//         >
//             <SidebarLink
//                 icon={BellIcon}
//                 label="Notifications"
//                 href="/teacher/notifications"
//                 isExpanded={isExpanded}
//                 notification={9}
//             />
//             <SidebarLink icon={SettingsIcon} label="Settings" href="/teacher/settings" isExpanded={isExpanded} />
//             <SidebarLink icon={FaSignOutAlt} label="Sign Out" href="/logout" isExpanded={isExpanded} />
//         </VStack>
//     </Box>
// )
// }

// function SidebarLink({ icon, label, href, isExpanded, isActive = false, notification = null }) {
//   const activeBg = useColorModeValue("blue.100", "blue.700")
//   const activeColor = useColorModeValue("blue.700", "white")
//   const hoverBg = useColorModeValue("blue.50", "blue.800")
//   const textColor = useColorModeValue("gray.700", "gray.200")

//   return (
//     <Tooltip
//       label={!isExpanded ? label : ""}
//       placement="right"
//       hasArrow
//       openDelay={500}
//       display={isExpanded ? "none" : "block"}
//     >
//       <Flex
//         as={NextLink}
//         href={href}
//         align="center"
//         p={3}
//         mb={1}
//         borderRadius="lg"
//         role="group"
//         cursor="pointer"
//         bg={isActive ? activeBg : "transparent"}
//         color={isActive ? activeColor : textColor}
//         _hover={{
//           bg: hoverBg,
//           color: activeColor,
//           transform: "translateX(3px)",
//         }}
//         transition="all 0.2s"
//         position="relative"
//       >
//         <Icon as={icon} boxSize={5} mr={isExpanded ? 3 : 0} _groupHover={{ color: activeColor }} />

//         {isExpanded && (
//           <Text fontSize="sm" fontWeight={isActive ? "semibold" : "medium"}>
//             {label}
//           </Text>
//         )}

//         {notification && (
//           <Badge
//             position="absolute"
//             right={isExpanded ? 3 : 0}
//             top={isExpanded ? 3 : 0}
//             colorScheme="red"
//             borderRadius="full"
//             fontSize="xs"
//             transform={isExpanded ? "none" : "translate(50%, -50%)"}
//             px={2}
//             py={isExpanded ? 0.5 : 1}
//             minW={isExpanded ? "auto" : "18px"}
//             textAlign="center"
//           >
//             {notification}
//           </Badge>
//         )}
//       </Flex>
//     </Tooltip>
//   )
// }

// function SidebarSection({ title, children, isExpanded }) {
//   const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: true })
//   const textColor = useColorModeValue("gray.500", "gray.400")
//   const borderColor = useColorModeValue("gray.200", "gray.700")

//   return (
//     <Box mb={4}>
//       {isExpanded && (
//         <Flex align="center" px={2} py={2} cursor="pointer" onClick={onToggle} userSelect="none">
//           <Text fontSize="xs" fontWeight="bold" color={textColor} letterSpacing="wider" textTransform="uppercase">
//             {title}
//           </Text>
//           <ChevronRightIcon
//             ml="auto"
//             boxSize={4}
//             transition="transform 0.2s"
//             transform={isOpen ? "rotate(90deg)" : "rotate(0)"}
//           />
//         </Flex>
//       )}

//       <Collapse in={isOpen || !isExpanded}>
//         <VStack spacing={1} align="stretch" mt={isExpanded ? 1 : 0} pl={isExpanded ? 0 : 0}>
//           {children}
//         </VStack>
//       </Collapse>

//       {isExpanded && <Divider mt={2} borderColor={borderColor} opacity={0.5} />}
//     </Box>
//   )
// }

// import { useState, useEffect } from "react";
// import {
//   Box,
//   Flex,
//   Icon,
//   Text,
//   Avatar,
//   Badge,
//   Tooltip,
//   Collapse,
//   Divider,
//   useDisclosure,
//   useColorModeValue,
//   IconButton,
//   VStack,
//   HStack,
//   Progress,
// } from "@chakra-ui/react";
// import { ChevronRightIcon, ChevronLeftIcon, BellIcon, SettingsIcon } from "@chakra-ui/icons";
// import {
//   FaCalendarAlt,
//   FaVideo,
//   FaGraduationCap,
//   FaChalkboardTeacher,
//   FaBook,
//   FaClipboardList,
//   FaChartBar,
//   FaUserGraduate,
//   FaSignOutAlt,
// } from "react-icons/fa";
// import { Link as NextLink } from "react-router-dom";

// export default function TeacherSidebar() {
//   const [isExpanded, setIsExpanded] = useState(true);
//   const [isMobile, setIsMobile] = useState(false);

//   // Check if we're on mobile
//   useEffect(() => {
//     const checkIfMobile = () => {
//       setIsMobile(window.innerWidth < 768);
//       if (window.innerWidth < 768) {
//         setIsExpanded(false);
//       }
//     };
//     checkIfMobile();
//     window.addEventListener("resize", checkIfMobile);
//     return () => {
//       window.removeEventListener("resize", checkIfMobile);
//     };
//   }, []);

//   // Colors
//   const bgGradient = useColorModeValue("linear(to-b, blue.50, blue.100)", "linear(to-b, blue.900, blue.800)");
//   const sidebarBg = useColorModeValue("white", "gray.800");
//   const textColor = useColorModeValue("gray.800", "white");
//   const accentColor = useColorModeValue("blue.500", "blue.300");
//   const hoverBg = useColorModeValue("blue.50", "blue.700");
//   const borderColor = useColorModeValue("gray.200", "gray.700");

//   return (
//     <Box
//       h="100vh"
//       w={isExpanded ? "280px" : "80px"}
//       bg={sidebarBg}
//       bgGradient={bgGradient}
//       boxShadow="lg"
//       borderRight="1px"
//       borderColor={borderColor}
//       position="relative"
//       transition="width 0.3s ease"
//       overflow="scroll"
//       css={{
//         "&::-webkit-scrollbar": {
//           width: "4px",
//         },
//         "&::-webkit-scrollbar-track": {
//           width: "6px",
//         },
//         "&::-webkit-scrollbar-thumb": {
//           background: useColorModeValue("blue.200", "blue.700"),
//           borderRadius: "24px",
//         },
//       }}
//     >
//       {/* Toggle button */}
//       <IconButton
//         aria-label="Toggle sidebar"
//         icon={isExpanded ? <ChevronLeftIcon /> : <ChevronRightIcon />}
//         position="absolute"
//         right="-12px"
//         top="20px"
//         size="sm"
//         borderRadius="full"
//         bg={accentColor}
//         color="white"
//         zIndex={2}
//         onClick={() => setIsExpanded(!isExpanded)}
//         _hover={{ bg: "blue.600" }}
//         display={{ base: "none", md: "flex" }}
//       />

//       {/* Header with logo/title */}
//       <Flex align="center" justify={isExpanded ? "flex-start" : "center"} p={4} h="80px">
//         {isExpanded ? (
//           <Text fontSize="xl" fontWeight="bold" color={accentColor} letterSpacing="tight">
//             Teacher Portal
//           </Text>
//         ) : (
//           <Avatar size="sm" bg={accentColor} color="white" name="TP" fontWeight="bold" />
//         )}
//       </Flex>

//       {/* User profile section */}
//       <Flex
//         direction={isExpanded ? "row" : "column"}
//         align="center"
//         justify={isExpanded ? "flex-start" : "center"}
//         p={isExpanded ? 4 : 2}
//         mb={4}
//         borderBottom="1px"
//         borderColor={borderColor}
//       >
//         <Avatar
//           size={isExpanded ? "md" : "sm"}
//           src="/placeholder.svg?height=80&width=80"
//           name="John Doe"
//           mb={isExpanded ? 0 : 2}
//         />
//         {isExpanded && (
//           <Box ml={3}>
//             <Text fontWeight="bold" fontSize="sm" color={textColor}>
//               John Doe
//             </Text>
//             <Text fontSize="xs" color="gray.500">
//               Mathematics Teacher
//             </Text>
//             <HStack mt={1} spacing={1}>
//               <Badge colorScheme="green" fontSize="xs" borderRadius="full" px={2}>
//                 Online
//               </Badge>
//             </HStack>
//           </Box>
//         )}
//       </Flex>

//       {/* Navigation */}
//       <VStack spacing={1} align="stretch" px={2}>
//         <SidebarLink
//           icon={FaChalkboardTeacher}
//           label="Dashboard"
//           href="/teacher/dashboard"
//           isExpanded={isExpanded}
//           isActive={true}
//         />
//         <SidebarSection title="Teaching" isExpanded={isExpanded}>
//           <SidebarLink
//             icon={FaCalendarAlt}
//             label="Class Schedule"
//             href="/teacher/schedule"
//             isExpanded={isExpanded}
//             notification={3}
//           />
//           <SidebarLink
//             icon={FaClipboardList}
//             label="Attendance"
//             href="/teacher/attendance"
//             isExpanded={isExpanded}
//           />
//           <SidebarLink icon={FaBook} label="Lesson Plans" href="/teacher/lessons" isExpanded={isExpanded} />
//         </SidebarSection>
//         <SidebarSection title="Content" isExpanded={isExpanded}>
//           <SidebarLink icon={FaVideo} label="Video Lessons" href="/teacher/videos" isExpanded={isExpanded} />
//           <SidebarLink
//             icon={FaClipboardList}
//             label="Assignments"
//             href="/teacher/assignments"
//             isExpanded={isExpanded}
//             notification={5}
//           />
//           <SidebarLink icon={FaChartBar} label="Assessments" href="/teacher/assessments" isExpanded={isExpanded} />
//         </SidebarSection>
//         <SidebarSection title="Students" isExpanded={isExpanded}>
//           <SidebarLink
//             icon={FaUserGraduate}
//             label="Student List"
//             href="/teacher/students"
//             isExpanded={isExpanded}
//           />
//           <SidebarLink
//             icon={FaGraduationCap}
//             label="Performance"
//             href="/teacher/performance"
//             isExpanded={isExpanded}
//           />
//         </SidebarSection>
//         {isExpanded && (
//           <Box mt={6} px={2}>
//             <Text fontSize="xs" color="gray.500" mb={2}>
//               COMPLETION STATS
//             </Text>
//             <VStack spacing={3} align="stretch">
//               <Box>
//                 <Flex justify="space-between" mb={1}>
//                   <Text fontSize="xs">Grading</Text>
//                   <Text fontSize="xs" fontWeight="bold">
//                     78%
//                   </Text>
//                 </Flex>
//                 <Progress value={78} size="xs" colorScheme="green" borderRadius="full" />
//               </Box>
//               <Box>
//                 <Flex justify="space-between" mb={1}>
//                   <Text fontSize="xs">Lesson Planning</Text>
//                   <Text fontSize="xs" fontWeight="bold">
//                     45%
//                   </Text>
//                 </Flex>
//                 <Progress value={45} size="xs" colorScheme="blue" borderRadius="full" />
//               </Box>
//             </VStack>
//           </Box>
//         )}
//       </VStack>

//       {/* Footer actions */}
//       <VStack
//         position="relative"
//         bottom="0"
//         left="0"
//         right="0"
//         p={3}
//         borderTop="1px"
//         borderColor={borderColor}
//         bg={sidebarBg}
//         spacing={2}
//         align={isExpanded ? "stretch" : "center"}
//       >
//         <SidebarLink
//           icon={BellIcon}
//           label="Notifications"
//           href="/teacher/notifications"
//           isExpanded={isExpanded}
//           notification={9}
//         />
//         <SidebarLink icon={SettingsIcon} label="Settings" href="/teacher/settings" isExpanded={isExpanded} />
//         <SidebarLink icon={FaSignOutAlt} label="Sign Out" href="/logout" isExpanded={isExpanded} />
//       </VStack>
//     </Box>
//   );
// }

// function SidebarLink({ icon, label, href, isExpanded, isActive = false, notification = null }) {
//   const activeBg = useColorModeValue("blue.100", "blue.700");
//   const activeColor = useColorModeValue("blue.700", "white");
//   const hoverBg = useColorModeValue("blue.50", "blue.800");
//   const textColor = useColorModeValue("gray.700", "gray.200");

//   return (
//     <Tooltip
//       label={!isExpanded ? label : ""}
//       placement="right"
//       hasArrow
//       openDelay={500}
//       display={isExpanded ? "none" : "block"}
//     >
//       <Flex
//         as={NextLink}
//         href={href}
//         align="center"
//         p={3}
//         mb={1}
//         borderRadius="lg"
//         role="group"
//         cursor="pointer"
//         bg={isActive ? activeBg : "transparent"}
//         color={isActive ? activeColor : textColor}
//         _hover={{
//           bg: hoverBg,
//           color: activeColor,
//           transform: "translateX(3px)",
//         }}
//         transition="all 0.2s"
//         position="relative"
//       >
//         <Icon as={icon} boxSize={5} mr={isExpanded ? 3 : 0} _groupHover={{ color: activeColor }} />
//         {isExpanded && (
//           <Text fontSize="sm" fontWeight={isActive ? "semibold" : "medium"}>
//             {label}
//           </Text>
//         )}
//         {notification && (
//           <Badge
//             position="absolute"
//             right={isExpanded ? 3 : 0}
//             top={isExpanded ? 3 : 0}
//             colorScheme="red"
//             borderRadius="full"
//             fontSize="xs"
//             transform={isExpanded ? "none" : "translate(50%, -50%)"}
//             px={2}
//             py={isExpanded ? 0.5 : 1}
//             minW={isExpanded ? "auto" : "18px"}
//             textAlign="center"
//           >
//             {notification}
//           </Badge>
//         )}
//       </Flex>
//     </Tooltip>
//   );
// }

// function SidebarSection({ title, children, isExpanded }) {
//   const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: true });
//   const textColor = useColorModeValue("gray.500", "gray.400");
//   const borderColor = useColorModeValue("gray.200", "gray.700");

//   return (
//     <Box mb={4}>
//       {isExpanded && (
//         <Flex align="center" px={2} py={2} cursor="pointer" onClick={onToggle} userSelect="none">
//           <Text fontSize="xs" fontWeight="bold" color={textColor} letterSpacing="wider" textTransform="uppercase">
//             {title}
//           </Text>
//           <ChevronRightIcon
//             ml="auto"
//             boxSize={4}
//             transition="transform 0.2s"
//             transform={isOpen ? "rotate(90deg)" : "rotate(0)"}
//           />
//         </Flex>
//       )}
//       <Collapse in={isOpen || !isExpanded}>
//         <VStack spacing={1} align="stretch" mt={isExpanded ? 1 : 0} pl={isExpanded ? 0 : 0}>
//           {children}
//         </VStack>
//       </Collapse>
//       {isExpanded && <Divider mt={2} borderColor={borderColor} opacity={0.5} />}
//     </Box>
//   );
// }



// import { useState, useEffect, useRef } from "react";
// import {
//   Box,
//   Flex,
//   Icon,
//   Text,
//   Avatar,
//   Badge,
//   Tooltip,
//   Collapse,
//   Divider,
//   useDisclosure,
//   useColorModeValue,
//   IconButton,
//   VStack,
//   HStack,
//   Progress,
// } from "@chakra-ui/react";
// import { ChevronRightIcon, ChevronLeftIcon, BellIcon, SettingsIcon } from "@chakra-ui/icons";
// import {
//   FaCalendarAlt,
//   FaVideo,
//   FaGraduationCap,
//   FaChalkboardTeacher,
//   FaBook,
//   FaClipboardList,
//   FaChartBar,
//   FaUserGraduate,
//   FaSignOutAlt,
//   FaUsersCog,
//   FaRegClock,
//   FaTachometerAlt,
//   FaUserLock,
//   FaSchool,
//   FaBookReader,
//   FaSyncAlt,
//   FaUnlock,
//   FaDatabase,
//   FaShieldAlt,
// } from "react-icons/fa";
// import { Link, useLocation } from "react-router-dom";

// export default function TeacherSidebar() {
//   const [isExpanded, setIsExpanded] = useState(true);
//   const [isMobile, setIsMobile] = useState(false);
//   const location = useLocation();

//   // Check if we're on mobile
//   useEffect(() => {
//     const checkIfMobile = () => {
//       setIsMobile(window.innerWidth < 768);
//       if (window.innerWidth < 768) {
//         setIsExpanded(false);
//       }
//     };
//     checkIfMobile();
//     window.addEventListener("resize", checkIfMobile);
//     return () => {
//       window.removeEventListener("resize", checkIfMobile);
//     };
//   }, []);

//   // Colors
//   const bgGradient = useColorModeValue(
//     "linear(to-b, blue.50, blue.100)", 
//     "linear(to-b, blue.900, blue.800)"
//   );
//   const sidebarBg = useColorModeValue("white", "gray.800");
//   const textColor = useColorModeValue("gray.800", "white");
//   const accentColor = useColorModeValue("blue.500", "blue.300");
//   const borderColor = useColorModeValue("gray.200", "gray.700");

//   return (
//     <Box
//       h="100vh"
//       w={isExpanded ? "280px" : "80px"}
//       bg={sidebarBg}
//       position="relative"
//       transition="width 0.3s ease"
//       display="flex"
//       flexDirection="column"
//     >
//       {/* Fixed Header */}
//       <Box
//         bgGradient={bgGradient}
//         borderRight="1px"
//         borderColor={borderColor}
//         boxShadow="sm"
//       >
//         {/* Toggle button */}
//         <IconButton
//           aria-label="Toggle sidebar"
//           icon={isExpanded ? <ChevronLeftIcon /> : <ChevronRightIcon />}
//           position="absolute"
//           right="-12px"
//           top="20px"
//           size="sm"
//           borderRadius="full"
//           bg={accentColor}
//           color="white"
//           zIndex={2}
//           onClick={() => setIsExpanded(!isExpanded)}
//           _hover={{ bg: "blue.600" }}
//           display={{ base: "none", md: "flex" }}
//         />

//         {/* Header with logo/title */}
//         <Flex align="center" justify={isExpanded ? "flex-start" : "center"} p={4} h="80px">
//           {isExpanded ? (
//             <Text fontSize="xl" fontWeight="bold" color={accentColor} letterSpacing="tight">
//               Teacher Portal
//             </Text>
//           ) : (
//             <Avatar size="sm" bg={accentColor} color="white" name="TP" fontWeight="bold" />
//           )}
//         </Flex>

//         {/* User profile section */}
//         <Flex
//           direction={isExpanded ? "row" : "column"}
//           align="center"
//           justify={isExpanded ? "flex-start" : "center"}
//           p={isExpanded ? 4 : 2}
//           mb={4}
//           borderBottom="1px"
//           borderColor={borderColor}
//         >
//           <Avatar
//             size={isExpanded ? "md" : "sm"}
//             src="/placeholder.svg?height=80&width=80"
//             name="John Doe"
//             mb={isExpanded ? 0 : 2}
//           />
//           {isExpanded && (
//             <Box ml={3}>
//               <Text fontWeight="bold" fontSize="sm" color={textColor}>
//                 John Doe
//               </Text>
//               <Text fontSize="xs" color="gray.500">
//                 Mathematics Teacher
//               </Text>
//               <HStack mt={1} spacing={1}>
//                 <Badge colorScheme="green" fontSize="xs" borderRadius="full" px={2}>
//                   Online
//                 </Badge>
//               </HStack>
//             </Box>
//           )}
//         </Flex>
//       </Box>

//       {/* Scrollable Navigation */}
//       <Box 
//         flex="1"
//         overflowY="auto"
//         overflowX="hidden"
//         bgGradient={bgGradient}
//         borderRight="1px"
//         borderColor={borderColor}
//         css={{
//           "&::-webkit-scrollbar": {
//             width: "4px",
//           },
//           "&::-webkit-scrollbar-track": {
//             width: "6px",
//           },
//           "&::-webkit-scrollbar-thumb": {
//             background: useColorModeValue("blue.200", "blue.700"),
//             borderRadius: "24px",
//           },
//         }}
//       >
//         {/* Navigation */}
//         <VStack spacing={1} align="stretch" px={2} pb={6}>
//           {/* 1. Dashboard */}
//           <SidebarLink
//             icon={FaTachometerAlt}
//             label="Dashboard"
//             href="/dashboard"
//             isExpanded={isExpanded}
//             isActive={location.pathname === '/dashboard'}
//           />

//           {/* 2. Teacher Portal */}
//           <SidebarSection title="Teacher Portal" isExpanded={isExpanded}>
//             <SidebarLink
//               icon={FaUserLock}
//               label="Teacher Login"
//               href="/teacher/login"
//               isExpanded={isExpanded}
//               isActive={location.pathname === '/teacher/login'}
//             />
//             <SidebarLink
//               icon={FaCalendarAlt}
//               label="Personal Schedule"
//               href="/teacher/schedule"
//               isExpanded={isExpanded}
//               isActive={location.pathname === '/teacher/schedule'}
//             />
//             <SidebarLink 
//               icon={FaRegClock} 
//               label="Availability" 
//               href="/teacher/availability" 
//               isExpanded={isExpanded}
//               isActive={location.pathname === '/teacher/availability'}
//             />
//           </SidebarSection>

//           {/* 3. Attendance Management */}
//           <SidebarSection title="Attendance Management" isExpanded={isExpanded}>
//             <SidebarLink
//               icon={FaClipboardList}
//               label="Mark Attendance"
//               href="/attendance/mark"
//               isExpanded={isExpanded}
//               isActive={location.pathname === '/attendance/mark'}
//             />
//             <SidebarLink
//               icon={FaChartBar}
//               label="Attendance Reports"
//               href="/attendance/reports"
//               isExpanded={isExpanded}
//               isActive={location.pathname === '/attendance/reports'}
//             />
//           </SidebarSection>

//           {/* 4. Video Management */}
//           <SidebarSection title="Video Management" isExpanded={isExpanded}>
//             <SidebarLink
//               icon={FaVideo}
//               label="Upload Videos"
//               href="/videos/upload"
//               isExpanded={isExpanded}
//               isActive={location.pathname === '/videos/upload'}
//             />
//             <SidebarLink
//               icon={FaBook}
//               label="Edit/Delete Videos"
//               href="/videos/manage"
//               isExpanded={isExpanded}
//               isActive={location.pathname === '/videos/manage'}
//             />
//             <SidebarLink
//               icon={FaBookReader}
//               label="Course Material Organization"
//               href="/videos/organization"
//               isExpanded={isExpanded}
//               isActive={location.pathname === '/videos/organization'}
//             />
//           </SidebarSection>

//           {/* 5. Student Portal */}
//           <SidebarSection title="Student Portal" isExpanded={isExpanded}>
//             <SidebarLink
//               icon={FaUserLock}
//               label="Student Login"
//               href="/student/login"
//               isExpanded={isExpanded}
//               isActive={location.pathname === '/student/login'}
//             />
//             <SidebarLink
//               icon={FaSchool}
//               label="Enrolled Courses"
//               href="/student/courses"
//               isExpanded={isExpanded}
//               isActive={location.pathname === '/student/courses'}
//             />
//             <SidebarLink
//               icon={FaCalendarAlt}
//               label="Schedule"
//               href="/student/schedule"
//               isExpanded={isExpanded}
//               isActive={location.pathname === '/student/schedule'}
//             />
//           </SidebarSection>

//           {/* 6. Course Access */}
//           <SidebarSection title="Course Access" isExpanded={isExpanded}>
//             <SidebarLink
//               icon={FaBookReader}
//               label="Access Materials"
//               href="/course/materials"
//               isExpanded={isExpanded}
//               isActive={location.pathname === '/course/materials'}
//             />
//             <SidebarLink
//               icon={FaVideo}
//               label="Watch Assigned Content"
//               href="/course/videos"
//               isExpanded={isExpanded}
//               isActive={location.pathname === '/course/videos'}
//             />
//           </SidebarSection>

//           {/* 7. Performance Tracking */}
//           <SidebarSection title="Performance Tracking" isExpanded={isExpanded}>
//             <SidebarLink
//               icon={FaClipboardList}
//               label="Attendance Records"
//               href="/performance/attendance"
//               isExpanded={isExpanded}
//               isActive={location.pathname === '/performance/attendance'}
//             />
//             <SidebarLink
//               icon={FaGraduationCap}
//               label="Grades & Progress Reports"
//               href="/performance/grades"
//               isExpanded={isExpanded}
//               isActive={location.pathname === '/performance/grades'}
//               notification={3}
//             />
//             <SidebarLink
//               icon={FaChalkboardTeacher}
//               label="Feedback"
//               href="/performance/feedback"
//               isExpanded={isExpanded}
//               isActive={location.pathname === '/performance/feedback'}
//             />
//           </SidebarSection>

//           {/* 8. Admin Integration */}
//           <SidebarSection title="Admin Integration" isExpanded={isExpanded}>
//             <SidebarLink
//               icon={FaUsersCog}
//               label="User Management"
//               href="/admin/users"
//               isExpanded={isExpanded}
//               isActive={location.pathname === '/admin/users'}
//             />
//             <SidebarLink
//               icon={FaSyncAlt}
//               label="Data Synchronization"
//               href="/admin/sync"
//               isExpanded={isExpanded}
//               isActive={location.pathname === '/admin/sync'}
//             />
//             <SidebarLink
//               icon={FaUnlock}
//               label="Access Control"
//               href="/admin/access"
//               isExpanded={isExpanded}
//               isActive={location.pathname === '/admin/access'}
//             />
//           </SidebarSection>

//           {/* 9. Notifications */}
//           <SidebarLink
//             icon={BellIcon}
//             label="Notifications"
//             href="/notifications"
//             isExpanded={isExpanded}
//             isActive={location.pathname === '/notifications'}
//             notification={9}
//           />

//           {/* 10. Settings */}
//           <SidebarSection title="Settings" isExpanded={isExpanded}>
//             <SidebarLink
//               icon={FaDatabase}
//               label="Backup & Security"
//               href="/settings/backup"
//               isExpanded={isExpanded}
//               isActive={location.pathname === '/settings/backup'}
//             />
//             <SidebarLink
//               icon={FaShieldAlt}
//               label="Account Management"
//               href="/settings/account"
//               isExpanded={isExpanded}
//               isActive={location.pathname === '/settings/account'}
//             />
//           </SidebarSection>

//           {isExpanded && (
//             <Box mt={6} px={2}>
//               <Text fontSize="xs" color="gray.500" mb={2}>
//                 COMPLETION STATS
//               </Text>
//               <VStack spacing={3} align="stretch">
//                 <Box>
//                   <Flex justify="space-between" mb={1}>
//                     <Text fontSize="xs">Grading</Text>
//                     <Text fontSize="xs" fontWeight="bold">
//                       78%
//                     </Text>
//                   </Flex>
//                   <Progress value={78} size="xs" colorScheme="green" borderRadius="full" />
//                 </Box>
//                 <Box>
//                   <Flex justify="space-between" mb={1}>
//                     <Text fontSize="xs">Lesson Planning</Text>
//                     <Text fontSize="xs" fontWeight="bold">
//                       45%
//                     </Text>
//                   </Flex>
//                   <Progress value={45} size="xs" colorScheme="blue" borderRadius="full" />
//                 </Box>
//               </VStack>
//             </Box>
//           )}
//         </VStack>
//       </Box>

//       {/* Footer actions */}
//       <Box
//         p={3}
//         borderTop="1px"
//         borderColor={borderColor}
//         bg={sidebarBg}
//         borderRight="1px"
//         borderRightColor={borderColor}
//       >
//         <SidebarLink
//           icon={FaSignOutAlt}
//           label="Sign Out"
//           href="/logout"
//           isExpanded={isExpanded}
//           isActive={location.pathname === '/logout'}
//         />
//       </Box>
//     </Box>
//   );
// }

// function SidebarLink({ icon, label, href, isExpanded, isActive = false, notification = null }) {
//   const activeBg = useColorModeValue("blue.100", "blue.700");
//   const activeColor = useColorModeValue("blue.700", "white");
//   const hoverBg = useColorModeValue("blue.50", "blue.800");
//   const textColor = useColorModeValue("gray.700", "gray.200");

//   return (
//     <Tooltip
//       label={!isExpanded ? label : ""}
//       placement="right"
//       hasArrow
//       openDelay={500}
//       display={isExpanded ? "none" : "block"}
//     >
//       <Flex
//         as={Link}
//         to={href}
//         align="center"
//         p={3}
//         mb={1}
//         borderRadius="lg"
//         role="group"
//         cursor="pointer"
//         bg={isActive ? activeBg : "transparent"}
//         color={isActive ? activeColor : textColor}
//         _hover={{
//           bg: hoverBg,
//           color: activeColor,
//           transform: "translateX(3px)",
//         }}
//         transition="all 0.2s"
//         position="relative"
//       >
//         <Icon as={icon} boxSize={5} mr={isExpanded ? 3 : 0} _groupHover={{ color: activeColor }} />
//         {isExpanded && (
//           <Text fontSize="sm" fontWeight={isActive ? "semibold" : "medium"} noOfLines={1}>
//             {label}
//           </Text>
//         )}
//         {notification && (
//           <Badge
//             position="absolute"
//             right={isExpanded ? 3 : 0}
//             top={isExpanded ? 3 : 0}
//             colorScheme="red"
//             borderRadius="full"
//             fontSize="xs"
//             transform={isExpanded ? "none" : "translate(50%, -50%)"}
//             px={2}
//             py={isExpanded ? 0.5 : 1}
//             minW={isExpanded ? "auto" : "18px"}
//             textAlign="center"
//           >
//             {notification}
//           </Badge>
//         )}
//       </Flex>
//     </Tooltip>
//   );
// }

// function SidebarSection({ title, children, isExpanded }) {
//   const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: true });
//   const textColor = useColorModeValue("gray.500", "gray.400");
//   const borderColor = useColorModeValue("gray.200", "gray.700");

//   return (
//     <Box mb={2}>
//       {isExpanded && (
//         <Flex 
//           align="center" 
//           px={2} 
//           py={2} 
//           cursor="pointer" 
//           onClick={onToggle} 
//           userSelect="none"
//           _hover={{ color: useColorModeValue("blue.500", "blue.300") }}
//           transition="color 0.2s"
//         >
//           <Text 
//             fontSize="xs" 
//             fontWeight="bold" 
//             color={textColor} 
//             letterSpacing="wider" 
//             textTransform="uppercase"
//           >
//             {title}
//           </Text>
//           <ChevronRightIcon
//             ml="auto"
//             boxSize={4}
//             transition="transform 0.2s"
//             transform={isOpen ? "rotate(90deg)" : "rotate(0)"}
//           />
//         </Flex>
//       )}
//       <Collapse in={isOpen || !isExpanded}>
//         <VStack spacing={1} align="stretch" mt={isExpanded ? 1 : 0} pl={isExpanded ? 0 : 0}>
//           {children}
//         </VStack>
//       </Collapse>
//       {isExpanded && <Divider mt={2} borderColor={borderColor} opacity={0.5} />}
//     </Box>
//   );
// }



// import { useState, useEffect, useRef } from "react";
// import {
//   Box,
//   Flex,
//   Icon,
//   Text,
//   Avatar,
//   Badge,
//   Tooltip,
//   Collapse,
//   Divider,
//   useDisclosure,
//   useColorModeValue,
//   IconButton,
//   VStack,
//   HStack,
//   Progress,
//   Drawer,
//   DrawerOverlay,
//   DrawerContent,
//   DrawerCloseButton,
//   DrawerBody,
//   useBreakpointValue,
// } from "@chakra-ui/react";
// import { ChevronRightIcon, ChevronLeftIcon, BellIcon, SettingsIcon, HamburgerIcon } from "@chakra-ui/icons";
// import {
//   FaCalendarAlt,
//   FaVideo,
//   FaGraduationCap,
//   FaChalkboardTeacher,
//   FaBook,
//   FaClipboardList,
//   FaChartBar,
//   FaUserGraduate,
//   FaSignOutAlt,
//   FaUsersCog,
//   FaRegClock,
//   FaTachometerAlt,
//   FaUserLock,
//   FaSchool,
//   FaBookReader,
//   FaSyncAlt,
//   FaUnlock,
//   FaDatabase,
//   FaShieldAlt,
// } from "react-icons/fa";
// import { Link, useLocation } from "react-router-dom";

// export default function TeacherSidebar() {
//   const [isExpanded, setIsExpanded] = useState(true);
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const location = useLocation();
  
//   // Responsive behavior
//   const isMobile = useBreakpointValue({ base: true, md: false });
//   const isTablet = useBreakpointValue({ base: false, sm: true, lg: false });
//   const defaultExpanded = useBreakpointValue({ base: false, lg: true });
  
//   // Set initial expanded state based on screen size
//   useEffect(() => {
//     setIsExpanded(defaultExpanded);
//   }, [defaultExpanded]);

//   // Colors
//   const bgGradient = useColorModeValue(
//     "linear(to-b, blue.50, blue.100)", 
//     "linear(to-b, blue.900, blue.800)"
//   );
//   const sidebarBg = useColorModeValue("white", "gray.800");
//   const textColor = useColorModeValue("gray.800", "white");
//   const accentColor = useColorModeValue("blue.500", "blue.300");
//   const borderColor = useColorModeValue("gray.200", "gray.700");

//   // Sidebar content component to avoid duplication
//   const SidebarContent = ({ onItemClick = null }) => (
//     <>
//       {/* Fixed Header */}
//       <Box
//         bgGradient={bgGradient}
//         borderRight="1px"
//         borderColor={borderColor}
//         boxShadow="sm"
//         position="relative"
//       >
//         {/* Toggle button */}
//         {!isMobile && (
//           <IconButton
//             aria-label="Toggle sidebar"
//             icon={isExpanded ? <ChevronLeftIcon /> : <ChevronRightIcon />}
//             position="absolute"
//             right="-12px"
//             top="20px"
//             size="sm"
//             borderRadius="full"
//             bg={accentColor}
//             color="white"
//             zIndex={2}
//             onClick={() => setIsExpanded(!isExpanded)}
//             _hover={{ bg: "blue.600" }}
//           />
//         )}

//         {/* Header with logo/title */}
//         <Flex align="center" justify={isExpanded ? "flex-start" : "center"} p={4} h="80px">
//           {isExpanded ? (
//             <Text fontSize="xl" fontWeight="bold" color={accentColor} letterSpacing="tight">
//               Teacher Portal
//             </Text>
//           ) : (
//             <Avatar size="sm" bg={accentColor} color="white" name="TP" fontWeight="bold" />
//           )}
//         </Flex>

//         {/* User profile section */}
//         <Flex
//           direction={isExpanded ? "row" : "column"}
//           align="center"
//           justify={isExpanded ? "flex-start" : "center"}
//           p={isExpanded ? 4 : 2}
//           mb={4}
//           borderBottom="1px"
//           borderColor={borderColor}
//         >
//           <Avatar
//             size={isExpanded ? "md" : "sm"}
//             src="/placeholder.svg?height=80&width=80"
//             name="John Doe"
//             mb={isExpanded ? 0 : 2}
//           />
//           {isExpanded && (
//             <Box ml={3}>
//               <Text fontWeight="bold" fontSize="sm" color={textColor}>
//                 John Doe
//               </Text>
//               <Text fontSize="xs" color="gray.500">
//                 Mathematics Teacher
//               </Text>
//               <HStack mt={1} spacing={1}>
//                 <Badge colorScheme="green" fontSize="xs" borderRadius="full" px={2}>
//                   Online
//                 </Badge>
//               </HStack>
//             </Box>
//           )}
//         </Flex>
//       </Box>

//       {/* Scrollable Navigation */}
//       <Box 
//         flex="1"
//         overflowY="auto"
//         overflowX="hidden"
//         bgGradient={bgGradient}
//         borderRight="1px"
//         borderColor={borderColor}
//         css={{
//           "&::-webkit-scrollbar": {
//             width: "4px",
//           },
//           "&::-webkit-scrollbar-track": {
//             width: "6px",
//           },
//           "&::-webkit-scrollbar-thumb": {
//             background: useColorModeValue("blue.200", "blue.700"),
//             borderRadius: "24px",
//           },
//         }}
//       >
//         {/* Navigation */}
//         <VStack spacing={1} align="stretch" px={2} pb={6}>
//           {/* 1. Dashboard */}
//           <SidebarLink
//             icon={FaTachometerAlt}
//             label="Dashboard"
//             href="/dashboard"
//             isExpanded={isExpanded}
//             isActive={location.pathname === '/dashboard'}
//             onClick={onItemClick}
//           />

//           {/* 2. Teacher Portal */}
//           <SidebarSection title="Teacher Portal" isExpanded={isExpanded}>
//             <SidebarLink
//               icon={FaUserLock}
//               label="Teacher Login"
//               href="/teacher/login"
//               isExpanded={isExpanded}
//               isActive={location.pathname === '/teacher/login'}
//               onClick={onItemClick}
//             />
//             <SidebarLink
//               icon={FaCalendarAlt}
//               label="Personal Schedule"
//               href="/teacher/schedule"
//               isExpanded={isExpanded}
//               isActive={location.pathname === '/teacher/schedule'}
//               onClick={onItemClick}
//             />
//             <SidebarLink 
//               icon={FaRegClock} 
//               label="Availability" 
//               href="/teacher/availability" 
//               isExpanded={isExpanded}
//               isActive={location.pathname === '/teacher/availability'}
//               onClick={onItemClick}
//             />
//           </SidebarSection>

//           {/* 3. Attendance Management */}
//           <SidebarSection title="Attendance Management" isExpanded={isExpanded}>
//             <SidebarLink
//               icon={FaClipboardList}
//               label="Mark Attendance"
//               href="/attendance/mark"
//               isExpanded={isExpanded}
//               isActive={location.pathname === '/attendance/mark'}
//               onClick={onItemClick}
//             />
//             <SidebarLink
//               icon={FaChartBar}
//               label="Attendance Reports"
//               href="/attendance/reports"
//               isExpanded={isExpanded}
//               isActive={location.pathname === '/attendance/reports'}
//               onClick={onItemClick}
//             />
//           </SidebarSection>

//           {/* 4. Video Management */}
//           <SidebarSection title="Video Management" isExpanded={isExpanded}>
//             <SidebarLink
//               icon={FaVideo}
//               label="Upload Videos"
//               href="/videos/upload"
//               isExpanded={isExpanded}
//               isActive={location.pathname === '/videos/upload'}
//               onClick={onItemClick}
//             />
//             <SidebarLink
//               icon={FaBook}
//               label="Edit/Delete Videos"
//               href="/videos/manage"
//               isExpanded={isExpanded}
//               isActive={location.pathname === '/videos/manage'}
//               onClick={onItemClick}
//             />
//             <SidebarLink
//               icon={FaBookReader}
//               label="Course Material Organization"
//               href="/videos/organization"
//               isExpanded={isExpanded}
//               isActive={location.pathname === '/videos/organization'}
//               onClick={onItemClick}
//             />
//           </SidebarSection>

//           {/* 5. Student Portal */}
//           <SidebarSection title="Student Portal" isExpanded={isExpanded}>
//             <SidebarLink
//               icon={FaUserLock}
//               label="Student Login"
//               href="/student/login"
//               isExpanded={isExpanded}
//               isActive={location.pathname === '/student/login'}
//               onClick={onItemClick}
//             />
//             <SidebarLink
//               icon={FaSchool}
//               label="Enrolled Courses"
//               href="/student/courses"
//               isExpanded={isExpanded}
//               isActive={location.pathname === '/student/courses'}
//               onClick={onItemClick}
//             />
//             <SidebarLink
//               icon={FaCalendarAlt}
//               label="Schedule"
//               href="/student/schedule"
//               isExpanded={isExpanded}
//               isActive={location.pathname === '/student/schedule'}
//               onClick={onItemClick}
//             />
//           </SidebarSection>

//           {/* 6. Course Access */}
//           <SidebarSection title="Course Access" isExpanded={isExpanded}>
//             <SidebarLink
//               icon={FaBookReader}
//               label="Access Materials"
//               href="/course/materials"
//               isExpanded={isExpanded}
//               isActive={location.pathname === '/course/materials'}
//               onClick={onItemClick}
//             />
//             <SidebarLink
//               icon={FaVideo}
//               label="Watch Assigned Content"
//               href="/course/videos"
//               isExpanded={isExpanded}
//               isActive={location.pathname === '/course/videos'}
//               onClick={onItemClick}
//             />
//           </SidebarSection>

//           {/* 7. Performance Tracking */}
//           <SidebarSection title="Performance Tracking" isExpanded={isExpanded}>
//             <SidebarLink
//               icon={FaClipboardList}
//               label="Attendance Records"
//               href="/performance/attendance"
//               isExpanded={isExpanded}
//               isActive={location.pathname === '/performance/attendance'}
//               onClick={onItemClick}
//             />
//             <SidebarLink
//               icon={FaGraduationCap}
//               label="Grades & Progress Reports"
//               href="/performance/grades"
//               isExpanded={isExpanded}
//               isActive={location.pathname === '/performance/grades'}
//               notification={3}
//               onClick={onItemClick}
//             />
//             <SidebarLink
//               icon={FaChalkboardTeacher}
//               label="Feedback"
//               href="/performance/feedback"
//               isExpanded={isExpanded}
//               isActive={location.pathname === '/performance/feedback'}
//               onClick={onItemClick}
//             />
//           </SidebarSection>

//           {/* 8. Admin Integration */}
//           <SidebarSection title="Admin Integration" isExpanded={isExpanded}>
//             <SidebarLink
//               icon={FaUsersCog}
//               label="User Management"
//               href="/admin/users"
//               isExpanded={isExpanded}
//               isActive={location.pathname === '/admin/users'}
//               onClick={onItemClick}
//             />
//             <SidebarLink
//               icon={FaSyncAlt}
//               label="Data Synchronization"
//               href="/admin/sync"
//               isExpanded={isExpanded}
//               isActive={location.pathname === '/admin/sync'}
//               onClick={onItemClick}
//             />
//             <SidebarLink
//               icon={FaUnlock}
//               label="Access Control"
//               href="/admin/access"
//               isExpanded={isExpanded}
//               isActive={location.pathname === '/admin/access'}
//               onClick={onItemClick}
//             />
//           </SidebarSection>

//           {/* 9. Notifications */}
//           <SidebarLink
//             icon={BellIcon}
//             label="Notifications"
//             href="/notifications"
//             isExpanded={isExpanded}
//             isActive={location.pathname === '/notifications'}
//             notification={9}
//             onClick={onItemClick}
//           />

//           {/* 10. Settings */}
//           <SidebarSection title="Settings" isExpanded={isExpanded}>
//             <SidebarLink
//               icon={FaDatabase}
//               label="Backup & Security"
//               href="/settings/backup"
//               isExpanded={isExpanded}
//               isActive={location.pathname === '/settings/backup'}
//               onClick={onItemClick}
//             />
//             <SidebarLink
//               icon={FaShieldAlt}
//               label="Account Management"
//               href="/settings/account"
//               isExpanded={isExpanded}
//               isActive={location.pathname === '/settings/account'}
//               onClick={onItemClick}
//             />
//           </SidebarSection>

//           {isExpanded && (
//             <Box mt={6} px={2}>
//               <Text fontSize="xs" color="gray.500" mb={2}>
//                 COMPLETION STATS
//               </Text>
//               <VStack spacing={3} align="stretch">
//                 <Box>
//                   <Flex justify="space-between" mb={1}>
//                     <Text fontSize="xs">Grading</Text>
//                     <Text fontSize="xs" fontWeight="bold">
//                       78%
//                     </Text>
//                   </Flex>
//                   <Progress value={78} size="xs" colorScheme="green" borderRadius="full" />
//                 </Box>
//                 <Box>
//                   <Flex justify="space-between" mb={1}>
//                     <Text fontSize="xs">Lesson Planning</Text>
//                     <Text fontSize="xs" fontWeight="bold">
//                       45%
//                     </Text>
//                   </Flex>
//                   <Progress value={45} size="xs" colorScheme="blue" borderRadius="full" />
//                 </Box>
//               </VStack>
//             </Box>
//           )}
//         </VStack>
//       </Box>

//       {/* Footer actions */}
//       <Box
//         p={3}
//         borderTop="1px"
//         borderColor={borderColor}
//         bg={sidebarBg}
//         borderRight="1px"
//         borderRightColor={borderColor}
//       >
//         <SidebarLink
//           icon={FaSignOutAlt}
//           label="Sign Out"
//           href="/logout"
//           isExpanded={isExpanded}
//           isActive={location.pathname === '/logout'}
//           onClick={onItemClick}
//         />
//       </Box>
//     </>
//   );

//   // Render mobile drawer or desktop sidebar based on screen size
//   if (isMobile) {
//     return (
//       <>
//         {/* Mobile hamburger menu */}
//         <IconButton
//           aria-label="Open menu"
//           icon={<HamburgerIcon />}
//           onClick={onOpen}
//           position="fixed"
//           top={4}
//           left={4}
//           zIndex={20}
//           size="md"
//           colorScheme="blue"
//           boxShadow="md"
//           borderRadius="md"
//         />

//         {/* Mobile drawer */}
//         <Drawer isOpen={isOpen} placement="left" onClose={onClose} size="full">
//           <DrawerOverlay />
//           <DrawerContent>
//             <DrawerCloseButton />
//             <DrawerBody p={0}>
//               <Box h="100vh" display="flex" flexDirection="column">
//                 <SidebarContent onItemClick={onClose} />
//               </Box>
//             </DrawerBody>
//           </DrawerContent>
//         </Drawer>
//       </>
//     );
//   }

//   // Tablet & Desktop view
//   return (
//     <Box
//       h="100vh"
//       w={isExpanded ? "280px" : "80px"}
//       bg={sidebarBg}
//       position="relative"
//       transition="width 0.3s ease"
//       display={{ base: "none", md: "flex" }}
//       flexDirection="column"
//       flexShrink={0}
//     >
//       <SidebarContent />
//     </Box>
//   );
// }

// function SidebarLink({ icon, label, href, isExpanded, isActive = false, notification = null, onClick }) {
//   const activeBg = useColorModeValue("blue.100", "blue.700");
//   const activeColor = useColorModeValue("blue.700", "white");
//   const hoverBg = useColorModeValue("blue.50", "blue.800");
//   const textColor = useColorModeValue("gray.700", "gray.200");

//   return (
//     <Tooltip
//       label={!isExpanded ? label : ""}
//       placement="right"
//       hasArrow
//       openDelay={500}
//       display={isExpanded ? "none" : "block"}
//     >
//       <Flex
//         as={Link}
//         to={href}
//         align="center"
//         p={3}
//         mb={1}
//         borderRadius="lg"
//         role="group"
//         cursor="pointer"
//         bg={isActive ? activeBg : "transparent"}
//         color={isActive ? activeColor : textColor}
//         _hover={{
//           bg: hoverBg,
//           color: activeColor,
//           transform: "translateX(3px)",
//         }}
//         transition="all 0.2s"
//         position="relative"
//         onClick={onClick}
//       >
//         <Icon as={icon} boxSize={5} mr={isExpanded ? 3 : 0} _groupHover={{ color: activeColor }} />
//         {isExpanded && (
//           <Text fontSize="sm" fontWeight={isActive ? "semibold" : "medium"} noOfLines={1}>
//             {label}
//           </Text>
//         )}
//         {notification && (
//           <Badge
//             position="absolute"
//             right={isExpanded ? 3 : 0}
//             top={isExpanded ? 3 : 0}
//             colorScheme="red"
//             borderRadius="full"
//             fontSize="xs"
//             transform={isExpanded ? "none" : "translate(50%, -50%)"}
//             px={2}
//             py={isExpanded ? 0.5 : 1}
//             minW={isExpanded ? "auto" : "18px"}
//             textAlign="center"
//           >
//             {notification}
//           </Badge>
//         )}
//       </Flex>
//     </Tooltip>
//   );
// }

// function SidebarSection({ title, children, isExpanded }) {
//   const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: true });
//   const textColor = useColorModeValue("gray.500", "gray.400");
//   const borderColor = useColorModeValue("gray.200", "gray.700");

//   return (
//     <Box mb={2}>
//       {isExpanded && (
//         <Flex 
//           align="center" 
//           px={2} 
//           py={2} 
//           cursor="pointer" 
//           onClick={onToggle} 
//           userSelect="none"
//           _hover={{ color: useColorModeValue("blue.500", "blue.300") }}
//           transition="color 0.2s"
//         >
//           <Text 
//             fontSize="xs" 
//             fontWeight="bold" 
//             color={textColor} 
//             letterSpacing="wider" 
//             textTransform="uppercase"
//           >
//             {title}
//           </Text>
//           <ChevronRightIcon
//             ml="auto"
//             boxSize={4}
//             transition="transform 0.2s"
//             transform={isOpen ? "rotate(90deg)" : "rotate(0)"}
//           />
//         </Flex>
//       )}
//       <Collapse in={isOpen || !isExpanded}>
//         <VStack spacing={1} align="stretch" mt={isExpanded ? 1 : 0} pl={isExpanded ? 0 : 0}>
//           {children}
//         </VStack>
//       </Collapse>
//       {isExpanded && <Divider mt={2} borderColor={borderColor} opacity={0.5} />}
//     </Box>
//   );
// }


// import { useState, useEffect } from "react";
// import {
//   Box,
//   Flex,
//   Icon,
//   Text,
//   Avatar,
//   Badge,
//   Tooltip,
//   Collapse,
//   Divider,
//   useDisclosure,
//   useColorModeValue,
//   IconButton,
//   VStack,
//   HStack,
//   Progress,
//   Drawer,
//   DrawerOverlay,
//   DrawerContent,
//   DrawerCloseButton,
//   DrawerBody,
//   useBreakpointValue,
// } from "@chakra-ui/react";
// import { ChevronRightIcon, ChevronLeftIcon, BellIcon, HamburgerIcon } from "@chakra-ui/icons";
// import {
//   FaCalendarAlt,
//   FaVideo,
//   FaGraduationCap,
//   FaChalkboardTeacher,
//   FaBook,
//   FaClipboardList,
//   FaChartBar,
//   FaSignOutAlt,
//   FaUsersCog,
//   FaRegClock,
//   FaTachometerAlt,
//   FaUserLock,
//   FaSchool,
//   FaBookReader,
//   FaSyncAlt,
//   FaUnlock,
//   FaDatabase,
//   FaShieldAlt,
// } from "react-icons/fa";
// import { Link, useLocation } from "react-router-dom";

// export default function TeacherSidebar() {
//   const [isExpanded, setIsExpanded] = useState(true);
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const location = useLocation();
  
//   // Responsive behavior
//   const isMobile = useBreakpointValue({ base: true, md: false });
//   const defaultExpanded = useBreakpointValue({ base: false, lg: true });
  
//   // Set initial expanded state based on screen size
//   useEffect(() => {
//     setIsExpanded(defaultExpanded);
//   }, [defaultExpanded]);

//   // Colors
//   const bgGradient = useColorModeValue(
//     "linear(to-b, blue.50, blue.100)", 
//     "linear(to-b, blue.900, blue.800)"
//   );
//   const sidebarBg = useColorModeValue("white", "gray.800");
//   const textColor = useColorModeValue("gray.800", "white");
//   const accentColor = useColorModeValue("blue.500", "blue.300");
//   const borderColor = useColorModeValue("gray.200", "gray.700");

//   // Sidebar content component to avoid duplication
//   const SidebarContent = ({ onItemClick = null, inDrawer = false }) => (
//     <Flex direction="column" h="100%" maxH="100vh" overflow="hidden">
//       {/* Fixed Header */}
//       <Box
//         bgGradient={bgGradient}
//         borderRight="1px"
//         borderColor={borderColor}
//         boxShadow="sm"
//         position="relative"
//         flexShrink={0}
//       >
//         {/* Toggle button */}
//         {!isMobile && !inDrawer && (
//           <IconButton
//             aria-label="Toggle sidebar"
//             icon={isExpanded ? <ChevronLeftIcon /> : <ChevronRightIcon />}
//             position="absolute"
//             right="-12px"
//             top="20px"
//             size="sm"
//             borderRadius="full"
//             bg={accentColor}
//             color="white"
//             zIndex={2}
//             onClick={() => setIsExpanded(!isExpanded)}
//             _hover={{ bg: "blue.600" }}
//           />
//         )}

//         {/* Header with logo/title */}
//         <Flex align="center" justify={isExpanded || inDrawer ? "flex-start" : "center"} p={4} h="80px">
//           {isExpanded || inDrawer ? (
//             <Text fontSize="xl" fontWeight="bold" color={accentColor} letterSpacing="tight">
//               Teacher Portal
//             </Text>
//           ) : (
//             <Avatar size="sm" bg={accentColor} color="white" name="TP" fontWeight="bold" />
//           )}
//         </Flex>

//         {/* User profile section */}
//         <Flex
//           direction={(isExpanded || inDrawer) ? "row" : "column"}
//           align="center"
//           justify={(isExpanded || inDrawer) ? "flex-start" : "center"}
//           p={(isExpanded || inDrawer) ? 4 : 2}
//           mb={4}
//           borderBottom="1px"
//           borderColor={borderColor}
//         >
//           <Avatar
//             size={(isExpanded || inDrawer) ? "md" : "sm"}
//             src="/placeholder.svg?height=80&width=80"
//             name="John Doe"
//             mb={(isExpanded || inDrawer) ? 0 : 2}
//           />
//           {(isExpanded || inDrawer) && (
//             <Box ml={3}>
//               <Text fontWeight="bold" fontSize="sm" color={textColor}>
//                 John Doe
//               </Text>
//               <Text fontSize="xs" color="gray.500">
//                 Mathematics Teacher
//               </Text>
//               <HStack mt={1} spacing={1}>
//                 <Badge colorScheme="green" fontSize="xs" borderRadius="full" px={2}>
//                   Online
//                 </Badge>
//               </HStack>
//             </Box>
//           )}
//         </Flex>
//       </Box>

//       {/* Scrollable Navigation */}
//       <Box 
//         flex="1"
//         overflowY="auto"
//         bgGradient={bgGradient}
//         borderRight="1px"
//         borderColor={borderColor}
//         css={{
//           "&::-webkit-scrollbar": {
//             width: "4px",
//           },
//           "&::-webkit-scrollbar-track": {
//             width: "6px",
//           },
//           "&::-webkit-scrollbar-thumb": {
//             background: useColorModeValue("blue.200", "blue.700"),
//             borderRadius: "24px",
//           },
//           // Ensures scrollbar appears in Firefox
//           "scrollbarWidth": "thin",
//           "scrollbarColor": `${useColorModeValue("blue.200", "blue.700")} transparent`,
//         }}
//       >
//         {/* Navigation */}
//         <VStack spacing={1} align="stretch" px={2} pb={6}>
//           {/* 1. Dashboard */}
//           <SidebarLink
//             icon={FaTachometerAlt}
//             label="Dashboard"
//             href="/dashboard"
//             isExpanded={isExpanded || inDrawer}
//             isActive={location.pathname === '/dashboard'}
//             onClick={onItemClick}
//           />

//           {/* 2. Teacher Portal */}
//           <SidebarSection title="Teacher Portal" isExpanded={isExpanded || inDrawer}>
//             <SidebarLink
//               icon={FaUserLock}
//               label="Teacher Login"
//               href="/teacher/login"
//               isExpanded={isExpanded || inDrawer}
//               isActive={location.pathname === '/teacher/login'}
//               onClick={onItemClick}
//             />
//             <SidebarLink
//               icon={FaCalendarAlt}
//               label="Personal Schedule"
//               href="/teacher/schedule"
//               isExpanded={isExpanded || inDrawer}
//               isActive={location.pathname === '/teacher/schedule'}
//               onClick={onItemClick}
//             />
//             <SidebarLink 
//               icon={FaRegClock} 
//               label="Availability" 
//               href="/teacher/availability" 
//               isExpanded={isExpanded || inDrawer}
//               isActive={location.pathname === '/teacher/availability'}
//               onClick={onItemClick}
//             />
//           </SidebarSection>

//           {/* 3. Attendance Management */}
//           <SidebarSection title="Attendance Management" isExpanded={isExpanded || inDrawer}>
//             <SidebarLink
//               icon={FaClipboardList}
//               label="Mark Attendance"
//               href="/attendance/mark"
//               isExpanded={isExpanded || inDrawer}
//               isActive={location.pathname === '/attendance/mark'}
//               onClick={onItemClick}
//             />
//             <SidebarLink
//               icon={FaChartBar}
//               label="Attendance Reports"
//               href="/attendance/reports"
//               isExpanded={isExpanded || inDrawer}
//               isActive={location.pathname === '/attendance/reports'}
//               onClick={onItemClick}
//             />
//           </SidebarSection>

//           {/* 4. Video Management */}
//           <SidebarSection title="Video Management" isExpanded={isExpanded || inDrawer}>
//             <SidebarLink
//               icon={FaVideo}
//               label="Upload Videos"
//               href="/videos/upload"
//               isExpanded={isExpanded || inDrawer}
//               isActive={location.pathname === '/videos/upload'}
//               onClick={onItemClick}
//             />
//             <SidebarLink
//               icon={FaBook}
//               label="Edit/Delete Videos"
//               href="/videos/manage"
//               isExpanded={isExpanded || inDrawer}
//               isActive={location.pathname === '/videos/manage'}
//               onClick={onItemClick}
//             />
//             <SidebarLink
//               icon={FaBookReader}
//               label="Course Material Organization"
//               href="/videos/organization"
//               isExpanded={isExpanded || inDrawer}
//               isActive={location.pathname === '/videos/organization'}
//               onClick={onItemClick}
//             />
//           </SidebarSection>

//           {/* 5. Student Portal */}
//           <SidebarSection title="Student Portal" isExpanded={isExpanded || inDrawer}>
//             <SidebarLink
//               icon={FaUserLock}
//               label="Student Login"
//               href="/student/login"
//               isExpanded={isExpanded || inDrawer}
//               isActive={location.pathname === '/student/login'}
//               onClick={onItemClick}
//             />
//             <SidebarLink
//               icon={FaSchool}
//               label="Enrolled Courses"
//               href="/student/courses"
//               isExpanded={isExpanded || inDrawer}
//               isActive={location.pathname === '/student/courses'}
//               onClick={onItemClick}
//             />
//             <SidebarLink
//               icon={FaCalendarAlt}
//               label="Schedule"
//               href="/student/schedule"
//               isExpanded={isExpanded || inDrawer}
//               isActive={location.pathname === '/student/schedule'}
//               onClick={onItemClick}
//             />
//           </SidebarSection>

//           {/* 6. Course Access */}
//           <SidebarSection title="Course Access" isExpanded={isExpanded || inDrawer}>
//             <SidebarLink
//               icon={FaBookReader}
//               label="Access Materials"
//               href="/course/materials"
//               isExpanded={isExpanded || inDrawer}
//               isActive={location.pathname === '/course/materials'}
//               onClick={onItemClick}
//             />
//             <SidebarLink
//               icon={FaVideo}
//               label="Watch Assigned Content"
//               href="/course/videos"
//               isExpanded={isExpanded || inDrawer}
//               isActive={location.pathname === '/course/videos'}
//               onClick={onItemClick}
//             />
//           </SidebarSection>

//           {/* 7. Performance Tracking */}
//           <SidebarSection title="Performance Tracking" isExpanded={isExpanded || inDrawer}>
//             <SidebarLink
//               icon={FaClipboardList}
//               label="Attendance Records"
//               href="/performance/attendance"
//               isExpanded={isExpanded || inDrawer}
//               isActive={location.pathname === '/performance/attendance'}
//               onClick={onItemClick}
//             />
//             <SidebarLink
//               icon={FaGraduationCap}
//               label="Grades & Progress Reports"
//               href="/performance/grades"
//               isExpanded={isExpanded || inDrawer}
//               isActive={location.pathname === '/performance/grades'}
//               notification={3}
//               onClick={onItemClick}
//             />
//             <SidebarLink
//               icon={FaChalkboardTeacher}
//               label="Feedback"
//               href="/performance/feedback"
//               isExpanded={isExpanded || inDrawer}
//               isActive={location.pathname === '/performance/feedback'}
//               onClick={onItemClick}
//             />
//           </SidebarSection>

//           {/* 8. Admin Integration */}
//           <SidebarSection title="Admin Integration" isExpanded={isExpanded || inDrawer}>
//             <SidebarLink
//               icon={FaUsersCog}
//               label="User Management"
//               href="/admin/users"
//               isExpanded={isExpanded || inDrawer}
//               isActive={location.pathname === '/admin/users'}
//               onClick={onItemClick}
//             />
//             <SidebarLink
//               icon={FaSyncAlt}
//               label="Data Synchronization"
//               href="/admin/sync"
//               isExpanded={isExpanded || inDrawer}
//               isActive={location.pathname === '/admin/sync'}
//               onClick={onItemClick}
//             />
//             <SidebarLink
//               icon={FaUnlock}
//               label="Access Control"
//               href="/admin/access"
//               isExpanded={isExpanded || inDrawer}
//               isActive={location.pathname === '/admin/access'}
//               onClick={onItemClick}
//             />
//           </SidebarSection>

//           {/* 9. Notifications */}
//           <SidebarLink
//             icon={BellIcon}
//             label="Notifications"
//             href="/notifications"
//             isExpanded={isExpanded || inDrawer}
//             isActive={location.pathname === '/notifications'}
//             notification={9}
//             onClick={onItemClick}
//           />

//           {/* 10. Settings */}
//           <SidebarSection title="Settings" isExpanded={isExpanded || inDrawer}>
//             <SidebarLink
//               icon={FaDatabase}
//               label="Backup & Security"
//               href="/settings/backup"
//               isExpanded={isExpanded || inDrawer}
//               isActive={location.pathname === '/settings/backup'}
//               onClick={onItemClick}
//             />
//             <SidebarLink
//               icon={FaShieldAlt}
//               label="Account Management"
//               href="/settings/account"
//               isExpanded={isExpanded || inDrawer}
//               isActive={location.pathname === '/settings/account'}
//               onClick={onItemClick}
//             />
//           </SidebarSection>

//           {(isExpanded || inDrawer) && (
//             <Box mt={6} px={2}>
//               <Text fontSize="xs" color="gray.500" mb={2}>
//                 COMPLETION STATS
//               </Text>
//               <VStack spacing={3} align="stretch">
//                 <Box>
//                   <Flex justify="space-between" mb={1}>
//                     <Text fontSize="xs">Grading</Text>
//                     <Text fontSize="xs" fontWeight="bold">
//                       78%
//                     </Text>
//                   </Flex>
//                   <Progress value={78} size="xs" colorScheme="green" borderRadius="full" />
//                 </Box>
//                 <Box>
//                   <Flex justify="space-between" mb={1}>
//                     <Text fontSize="xs">Lesson Planning</Text>
//                     <Text fontSize="xs" fontWeight="bold">
//                       45%
//                     </Text>
//                   </Flex>
//                   <Progress value={45} size="xs" colorScheme="blue" borderRadius="full" />
//                 </Box>
//               </VStack>
//             </Box>
//           )}
//         </VStack>
//       </Box>

//       {/* Footer actions */}
//       <Box
//         p={3}
//         borderTop="1px"
//         borderColor={borderColor}
//         bg={sidebarBg}
//         borderRight="1px"
//         borderRightColor={borderColor}
//         flexShrink={0}
//       >
//         <SidebarLink
//           icon={FaSignOutAlt}
//           label="Sign Out"
//           href="/logout"
//           isExpanded={isExpanded || inDrawer}
//           isActive={location.pathname === '/logout'}
//           onClick={onItemClick}
//         />
//       </Box>
//     </Flex>
//   );

//   // Render mobile view
//   if (isMobile) {
//     return (
//       <>
//         {/* Mobile hamburger menu */}
//         <IconButton
//           aria-label="Open menu"
//           icon={<HamburgerIcon />}
//           onClick={onOpen}
//           position="fixed"
//           top={4}
//           left={4}
//           zIndex={20}
//           size="md"
//           colorScheme="blue"
//           boxShadow="md"
//           borderRadius="md"
//         />

//         {/* Mobile drawer */}
//         <Drawer isOpen={isOpen} placement="left" onClose={onClose} size="full">
//           <DrawerOverlay />
//           <DrawerContent>
//             <DrawerCloseButton zIndex={30} />
//             <DrawerBody p={0} overflow="hidden">
//               <SidebarContent onItemClick={onClose} inDrawer={true} />
//             </DrawerBody>
//           </DrawerContent>
//         </Drawer>
//       </>
//     );
//   }

//   // Tablet & Desktop view
//   return (
//     <Box
//       h="100vh"
//       w={isExpanded ? "280px" : "80px"}
//       bg={sidebarBg}
//       position="fixed"
//       top={0}
//       left={0}
//       zIndex={10}
//       transition="width 0.3s ease"
//       display={{ base: "none", md: "block" }}
//       overflow="hidden"
//     >
//       <SidebarContent />
//     </Box>
//   );
// }

// function SidebarLink({ icon, label, href, isExpanded, isActive = false, notification = null, onClick }) {
//   const activeBg = useColorModeValue("blue.100", "blue.700");
//   const activeColor = useColorModeValue("blue.700", "white");
//   const hoverBg = useColorModeValue("blue.50", "blue.800");
//   const textColor = useColorModeValue("gray.700", "gray.200");

//   return (
//     <Tooltip
//       label={!isExpanded ? label : ""}
//       placement="right"
//       hasArrow
//       openDelay={500}
//       display={isExpanded ? "none" : "block"}
//     >
//       <Flex
//         as={Link}
//         to={href}
//         align="center"
//         p={3}
//         mb={1}
//         borderRadius="lg"
//         role="group"
//         cursor="pointer"
//         bg={isActive ? activeBg : "transparent"}
//         color={isActive ? activeColor : textColor}
//         _hover={{
//           bg: hoverBg,
//           color: activeColor,
//           transform: "translateX(3px)",
//         }}
//         transition="all 0.2s"
//         position="relative"
//         onClick={onClick}
//       >
//         <Icon as={icon} boxSize={5} mr={isExpanded ? 3 : 0} _groupHover={{ color: activeColor }} />
//         {isExpanded && (
//           <Text fontSize="sm" fontWeight={isActive ? "semibold" : "medium"} noOfLines={1}>
//             {label}
//           </Text>
//         )}
//         {notification && (
//           <Badge
//             position="absolute"
//             right={isExpanded ? 3 : 0}
//             top={isExpanded ? 3 : 0}
//             colorScheme="red"
//             borderRadius="full"
//             fontSize="xs"
//             transform={isExpanded ? "none" : "translate(50%, -50%)"}
//             px={2}
//             py={isExpanded ? 0.5 : 1}
//             minW={isExpanded ? "auto" : "18px"}
//             textAlign="center"
//           >
//             {notification}
//           </Badge>
//         )}
//       </Flex>
//     </Tooltip>
//   );
// }

// function SidebarSection({ title, children, isExpanded }) {
//   const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: true });
//   const textColor = useColorModeValue("gray.500", "gray.400");
//   const borderColor = useColorModeValue("gray.200", "gray.700");

//   return (
//     <Box mb={2}>
//       {isExpanded && (
//         <Flex 
//           align="center" 
//           px={2} 
//           py={2} 
//           cursor="pointer" 
//           onClick={onToggle} 
//           userSelect="none"
//           _hover={{ color: useColorModeValue("blue.500", "blue.300") }}
//           transition="color 0.2s"
//         >
//           <Text 
//             fontSize="xs" 
//             fontWeight="bold" 
//             color={textColor} 
//             letterSpacing="wider" 
//             textTransform="uppercase"
//           >
//             {title}
//           </Text>
//           <ChevronRightIcon
//             ml="auto"
//             boxSize={4}
//             transition="transform 0.2s"
//             transform={isOpen ? "rotate(90deg)" : "rotate(0)"}
//           />
//         </Flex>
//       )}
//       <Collapse in={isOpen || !isExpanded}>
//         <VStack spacing={1} align="stretch" mt={isExpanded ? 1 : 0} pl={isExpanded ? 0 : 0}>
//           {children}
//         </VStack>
//       </Collapse>
//       {isExpanded && <Divider mt={2} borderColor={borderColor} opacity={0.5} />}
//     </Box>
//   );
// }


// import { useState, useEffect, useRef } from "react";
// import {
//   Box,
//   Flex,
//   Icon,
//   Text,
//   Avatar,
//   Badge,
//   Tooltip,
//   Collapse,
//   Divider,
//   useDisclosure,
//   useColorModeValue,
//   IconButton,
//   VStack,
//   HStack,
//   Progress,
//   useBreakpointValue,
// } from "@chakra-ui/react";
// import { ChevronRightIcon, ChevronLeftIcon, BellIcon } from "@chakra-ui/icons";
// import {
//   FaCalendarAlt,
//   FaVideo,
//   FaGraduationCap,
//   FaChalkboardTeacher,
//   FaBook,
//   FaClipboardList,
//   FaChartBar,
//   FaSignOutAlt,
//   FaUsersCog,
//   FaRegClock,
//   FaTachometerAlt,
//   FaUserLock,
//   FaSchool,
//   FaBookReader,
//   FaSyncAlt,
//   FaUnlock,
//   FaDatabase,
//   FaShieldAlt,
// } from "react-icons/fa";
// import { Link, useLocation } from "react-router-dom";

// export default function TeacherAdminSidebar({ isMobile = false }) {
//   const [isExpanded, setIsExpanded] = useState(true);
//   const location = useLocation || { pathname: '/' }; // Fallback if useLocation is not available
//   const scrollContainerRef = useRef(null);
  
//   // Custom event to notify parent component about sidebar width changes
//   const notifySidebarWidthChange = (width) => {
//     window.dispatchEvent(new CustomEvent('sidebarResize', { 
//       detail: { width } 
//     }));
//   };
  
//   // Responsive behavior
//   const defaultExpanded = useBreakpointValue({ base: false, lg: true });
  
//   // Update sidebar expanded state and notify about width change
//   useEffect(() => {
//     setIsExpanded(isMobile ? true : defaultExpanded);
//     notifySidebarWidthChange(isMobile ? 0 : (defaultExpanded ? 280 : 80));
//   }, [defaultExpanded, isMobile]);

//   // Notify about width changes when expanded state changes
//   useEffect(() => {
//     notifySidebarWidthChange(isExpanded ? 280 : 80);
//   }, [isExpanded]);

//   // Colors
//   const bgGradient = useColorModeValue(
//     "linear(to-b, blue.50, blue.100)", 
//     "linear(to-b, blue.900, blue.800)"
//   );
//   const sidebarBg = useColorModeValue("white", "gray.800");
//   const textColor = useColorModeValue("gray.800", "white");
//   const accentColor = useColorModeValue("blue.500", "blue.300");
//   const borderColor = useColorModeValue("gray.200", "gray.700");

//   return (
//     <Flex 
//       direction="column" 
//       h="100%" 
//       maxH="100vh" 
//       w={isExpanded ? "280px" : "80px"}
//       transition="width 0.3s ease"
//       bg={sidebarBg}
//       overflow="hidden"
//       position={isMobile ? "static" : "fixed"}
//       top="0"
//       left="0"
//       borderRight="1px"
//       borderColor={borderColor}
//       zIndex="10"
//     >
//       {/* Fixed Header */}
//       <Box
//         bgGradient={bgGradient}
//         boxShadow="sm"
//         position="relative"
//         flexShrink={0}
//       >
//         {/* Toggle button */}
//         {!isMobile && (
//           <IconButton
//             aria-label="Toggle sidebar"
//             icon={isExpanded ? <ChevronLeftIcon /> : <ChevronRightIcon />}
//             position="absolute"
//             right="-12px"
//             top="20px"
//             size="sm"
//             borderRadius="full"
//             bg={accentColor}
//             color="white"
//             zIndex={20}
//             onClick={() => {
//               const newExpandedState = !isExpanded;
//               setIsExpanded(newExpandedState);
//               notifySidebarWidthChange(newExpandedState ? 280 : 80);
//             }}
//             _hover={{ bg: "blue.600" }}
//           />
//         )}

//         {/* Header with logo/title */}
//         <Flex align="center" justify={isExpanded ? "flex-start" : "center"} p={4} h="80px">
//           {isExpanded ? (
//             <Text fontSize="xl" fontWeight="bold" color={accentColor} letterSpacing="tight">
//               Teacher Portal
//             </Text>
//           ) : (
//             <Avatar size="sm" bg={accentColor} color="white" name="TP" fontWeight="bold" />
//           )}
//         </Flex>

//         {/* User profile section */}
//         <Flex
//           direction={isExpanded ? "row" : "column"}
//           align="center"
//           justify={isExpanded ? "flex-start" : "center"}
//           p={isExpanded ? 4 : 2}
//           mb={4}
//           borderBottom="1px"
//           borderColor={borderColor}
//         >
//           <Avatar
//             size={isExpanded ? "md" : "sm"}
//             src="/placeholder.svg?height=80&width=80"
//             name="John Doe"
//             mb={isExpanded ? 0 : 2}
//           />
//           {isExpanded && (
//             <Box ml={3}>
//               <Text fontWeight="bold" fontSize="sm" color={textColor}>
//                 John Doe
//               </Text>
//               <Text fontSize="xs" color="gray.500">
//                 Mathematics Teacher
//               </Text>
//               <HStack mt={1} spacing={1}>
//                 <Badge colorScheme="green" fontSize="xs" borderRadius="full" px={2}>
//                   Online
//                 </Badge>
//               </HStack>
//             </Box>
//           )}
//         </Flex>
//       </Box>

//       {/* Scrollable Navigation */}
//       <Box 
//         ref={scrollContainerRef}
//         flex="1"
//         overflowY="auto"
//         bgGradient={bgGradient}
//         css={{
//           "&::-webkit-scrollbar": {
//             width: "4px",
//           },
//           "&::-webkit-scrollbar-track": {
//             width: "6px",
//           },
//           "&::-webkit-scrollbar-thumb": {
//             background: useColorModeValue("blue.200", "blue.700"),
//             borderRadius: "24px",
//           },
//           // Ensures scrollbar appears in Firefox
//           "scrollbarWidth": "thin",
//           "scrollbarColor": `${useColorModeValue("blue.200", "blue.700")} transparent`,
//         }}
//       >
//         {/* Navigation */}
//         <VStack spacing={1} align="stretch" px={2} pb={6}>
//           {/* 1. Dashboard */}
//           <SidebarLink
//             icon={FaTachometerAlt}
//             label="Dashboard"
//             href="/dashboard"
//             isExpanded={isExpanded}
//             isActive={location.pathname === '/dashboard'}
//           />

//           {/* 2. Teacher Portal */}
//           <SidebarSection title="Teacher Portal" isExpanded={isExpanded}>
//             <SidebarLink
//               icon={FaUserLock}
//               label="Teacher Login"
//               href="/teacher/login"
//               isExpanded={isExpanded}
//               isActive={location.pathname === '/teacher/login'}
//             />
//             <SidebarLink
//               icon={FaCalendarAlt}
//               label="Personal Schedule"
//               href="/teacher/schedule"
//               isExpanded={isExpanded}
//               isActive={location.pathname === '/teacher/schedule'}
//             />
//             <SidebarLink 
//               icon={FaRegClock} 
//               label="Availability" 
//               href="/teacher/availability" 
//               isExpanded={isExpanded}
//               isActive={location.pathname === '/teacher/availability'}
//             />
//           </SidebarSection>

//           {/* 3. Attendance Management */}
//           <SidebarSection title="Attendance Management" isExpanded={isExpanded}>
//             <SidebarLink
//               icon={FaClipboardList}
//               label="Mark Attendance"
//               href="/attendance/mark"
//               isExpanded={isExpanded}
//               isActive={location.pathname === '/attendance/mark'}
//             />
//             <SidebarLink
//               icon={FaChartBar}
//               label="Attendance Reports"
//               href="/attendance/reports"
//               isExpanded={isExpanded}
//               isActive={location.pathname === '/attendance/reports'}
//             />
//           </SidebarSection>

//           {/* 4. Video Management */}
//           <SidebarSection title="Video Management" isExpanded={isExpanded}>
//             <SidebarLink
//               icon={FaVideo}
//               label="Upload Videos"
//               href="/videos/upload"
//               isExpanded={isExpanded}
//               isActive={location.pathname === '/videos/upload'}
//             />
//             <SidebarLink
//               icon={FaBook}
//               label="Edit/Delete Videos"
//               href="/videos/manage"
//               isExpanded={isExpanded}
//               isActive={location.pathname === '/videos/manage'}
//             />
//             <SidebarLink
//               icon={FaBookReader}
//               label="Course Material Organization"
//               href="/videos/organization"
//               isExpanded={isExpanded}
//               isActive={location.pathname === '/videos/organization'}
//             />
//           </SidebarSection>

//           {/* 5. Student Portal */}
//           <SidebarSection title="Student Portal" isExpanded={isExpanded}>
//             <SidebarLink
//               icon={FaUserLock}
//               label="Student Login"
//               href="/student/login"
//               isExpanded={isExpanded}
//               isActive={location.pathname === '/student/login'}
//             />
//             <SidebarLink
//               icon={FaSchool}
//               label="Enrolled Courses"
//               href="/student/courses"
//               isExpanded={isExpanded}
//               isActive={location.pathname === '/student/courses'}
//             />
//             <SidebarLink
//               icon={FaCalendarAlt}
//               label="Schedule"
//               href="/student/schedule"
//               isExpanded={isExpanded}
//               isActive={location.pathname === '/student/schedule'}
//             />
//           </SidebarSection>

//           {/* Performance Tracking */}
//           <SidebarSection title="Performance Tracking" isExpanded={isExpanded}>
//             <SidebarLink
//               icon={FaClipboardList}
//               label="Attendance Records"
//               href="/performance/attendance"
//               isExpanded={isExpanded}
//               isActive={location.pathname === '/performance/attendance'}
//             />
//             <SidebarLink
//               icon={FaGraduationCap}
//               label="Grades & Progress Reports"
//               href="/performance/grades"
//               isExpanded={isExpanded}
//               isActive={location.pathname === '/performance/grades'}
//               notification={3}
//             />
//             <SidebarLink
//               icon={FaChalkboardTeacher}
//               label="Feedback"
//               href="/performance/feedback"
//               isExpanded={isExpanded}
//               isActive={location.pathname === '/performance/feedback'}
//             />
//           </SidebarSection>

//           {isExpanded && (
//             <Box mt={6} px={2}>
//               <Text fontSize="xs" color="gray.500" mb={2}>
//                 COMPLETION STATS
//               </Text>
//               <VStack spacing={3} align="stretch">
//                 <Box>
//                   <Flex justify="space-between" mb={1}>
//                     <Text fontSize="xs">Grading</Text>
//                     <Text fontSize="xs" fontWeight="bold">
//                       78%
//                     </Text>
//                   </Flex>
//                   <Progress value={78} size="xs" colorScheme="green" borderRadius="full" />
//                 </Box>
//                 <Box>
//                   <Flex justify="space-between" mb={1}>
//                     <Text fontSize="xs">Lesson Planning</Text>
//                     <Text fontSize="xs" fontWeight="bold">
//                       45%
//                     </Text>
//                   </Flex>
//                   <Progress value={45} size="xs" colorScheme="blue" borderRadius="full" />
//                 </Box>
//               </VStack>
//             </Box>
//           )}
//         </VStack>
//       </Box>

//       {/* Footer actions */}
//       <Box
//         p={3}
//         borderTop="1px"
//         borderColor={borderColor}
//         bg={sidebarBg}
//         flexShrink={0}
//       >
//         <SidebarLink
//           icon={FaSignOutAlt}
//           label="Sign Out"
//           href="/logout"
//           isExpanded={isExpanded}
//           isActive={location.pathname === '/logout'}
//         />
//       </Box>
//     </Flex>
//   );
// }

// function SidebarLink({ icon, label, href, isExpanded, isActive = false, notification = null }) {
//   const activeBg = useColorModeValue("blue.100", "blue.700");
//   const activeColor = useColorModeValue("blue.700", "white");
//   const hoverBg = useColorModeValue("blue.50", "blue.800");
//   const textColor = useColorModeValue("gray.700", "gray.200");

//   return (
//     <Tooltip
//       label={!isExpanded ? label : ""}
//       placement="right"
//       hasArrow
//       openDelay={500}
//       display={isExpanded ? "none" : "block"}
//     >
//       <Flex
//         as={Link}
//         to={href}
//         align="center"
//         p={3}
//         mb={1}
//         borderRadius="lg"
//         role="group"
//         cursor="pointer"
//         bg={isActive ? activeBg : "transparent"}
//         color={isActive ? activeColor : textColor}
//         _hover={{
//           bg: hoverBg,
//           color: activeColor,
//           transform: "translateX(3px)",
//         }}
//         transition="all 0.2s"
//         position="relative"
//       >
//         <Icon as={icon} boxSize={5} mr={isExpanded ? 3 : 0} _groupHover={{ color: activeColor }} />
//         {isExpanded && (
//           <Text fontSize="sm" fontWeight={isActive ? "semibold" : "medium"} noOfLines={1}>
//             {label}
//           </Text>
//         )}
//         {notification && (
//           <Badge
//             position="absolute"
//             right={isExpanded ? 3 : 0}
//             top={isExpanded ? 3 : 0}
//             colorScheme="red"
//             borderRadius="full"
//             fontSize="xs"
//             transform={isExpanded ? "none" : "translate(50%, -50%)"}
//             px={2}
//             py={isExpanded ? 0.5 : 1}
//             minW={isExpanded ? "auto" : "18px"}
//             textAlign="center"
//           >
//             {notification}
//           </Badge>
//         )}
//       </Flex>
//     </Tooltip>
//   );
// }

// function SidebarSection({ title, children, isExpanded }) {
//   const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: true });
//   const textColor = useColorModeValue("gray.500", "gray.400");
//   const borderColor = useColorModeValue("gray.200", "gray.700");

//   return (
//     <Box mb={2}>
//       {isExpanded && (
//         <Flex 
//           align="center" 
//           px={2} 
//           py={2} 
//           cursor="pointer" 
//           onClick={onToggle} 
//           userSelect="none"
//           _hover={{ color: useColorModeValue("blue.500", "blue.300") }}
//           transition="color 0.2s"
//         >
//           <Text 
//             fontSize="xs" 
//             fontWeight="bold" 
//             color={textColor} 
//             letterSpacing="wider" 
//             textTransform="uppercase"
//           >
//             {title}
//           </Text>
//           <ChevronRightIcon
//             ml="auto"
//             boxSize={4}
//             transition="transform 0.2s"
//             transform={isOpen ? "rotate(90deg)" : "rotate(0)"}
//           />
//         </Flex>
//       )}
//       <Collapse in={isOpen || !isExpanded}>
//         <VStack spacing={1} align="stretch" mt={isExpanded ? 1 : 0} pl={isExpanded ? 0 : 0}>
//           {children}
//         </VStack>
//       </Collapse>
//       {isExpanded && <Divider mt={2} borderColor={borderColor} opacity={0.5} />}
//     </Box>
//   );
// }


// import { useState, useEffect, useRef } from "react";
// import {
//   Box,
//   Flex,
//   Icon,
//   Text,
//   Avatar,
//   Badge,
//   Tooltip,
//   Collapse,
//   Divider,
//   useDisclosure,
//   useColorModeValue,
//   IconButton,
//   VStack,
//   HStack,
//   Progress,
//   useBreakpointValue,
// } from "@chakra-ui/react";
// import { ChevronRightIcon, ChevronLeftIcon, BellIcon } from "@chakra-ui/icons";
// import {
//   FaCalendarAlt,
//   FaVideo,
//   FaGraduationCap,
//   FaChalkboardTeacher,
//   FaBook,
//   FaClipboardList,
//   FaChartBar,
//   FaSignOutAlt,
//   FaUsersCog,
//   FaRegClock,
//   FaTachometerAlt,
//   FaUserLock,
//   FaSchool,
//   FaBookReader,
//   FaSyncAlt,
//   FaUnlock,
//   FaDatabase,
//   FaShieldAlt,
// } from "react-icons/fa";
// import { Link, useLocation } from "react-router-dom";

// export default function TeacherAdminSidebar({ isMobile = false }) {
//   const [isExpanded, setIsExpanded] = useState(true);
//   const [isHovering, setIsHovering] = useState(false);
//   const location = useLocation || { pathname: '/' }; // Fallback if useLocation is not available
//   const scrollContainerRef = useRef(null);
//   const hoverTimerRef = useRef(null);
//   const sidebarRef = useRef(null);
  
//   // Custom event to notify parent component about sidebar width changes
//   const notifySidebarWidthChange = (width) => {
//     window.dispatchEvent(new CustomEvent('sidebarResize', { 
//       detail: { width } 
//     }));
//   };
  
//   // Responsive behavior
//   const defaultExpanded = useBreakpointValue({ base: false, lg: true });
  
//   // Update sidebar expanded state and notify about width change
//   useEffect(() => {
//     setIsExpanded(isMobile ? true : defaultExpanded);
//     notifySidebarWidthChange(isMobile ? 0 : (defaultExpanded ? 280 : 80));
//   }, [defaultExpanded, isMobile]);

//   // Notify about width changes when expanded state changes
//   useEffect(() => {
//     notifySidebarWidthChange(isExpanded || isHovering ? 280 : 80);
//   }, [isExpanded, isHovering]);

//   // Setup mouse wheel event listener for scrolling
//   useEffect(() => {
//     const handleWheel = (e) => {
//       if (scrollContainerRef.current) {
//         // Adjust scroll based on wheel delta
//         scrollContainerRef.current.scrollTop += e.deltaY;
//         // Prevent default scrolling behavior
//         e.preventDefault();
//       }
//     };

//     const scrollContainer = scrollContainerRef.current;
//     if (scrollContainer) {
//       scrollContainer.addEventListener('wheel', handleWheel, { passive: false });
//     }
    
//     return () => {
//       if (scrollContainer) {
//         scrollContainer.removeEventListener('wheel', handleWheel);
//       }
//     };
//   }, []);

//   // Handle hover effects for auto-expand
//   const handleMouseEnter = () => {
//     if (!isExpanded && !isMobile) {
//       // Clear any existing timer
//       if (hoverTimerRef.current) {
//         clearTimeout(hoverTimerRef.current);
//       }
//       // Set a small delay before expanding
//       hoverTimerRef.current = setTimeout(() => {
//         setIsHovering(true);
//       }, 300);
//     }
//   };

//   const handleMouseLeave = () => {
//     // Clear any existing timer
//     if (hoverTimerRef.current) {
//       clearTimeout(hoverTimerRef.current);
//       hoverTimerRef.current = null;
//     }
    
//     // Set a small delay before collapsing
//     hoverTimerRef.current = setTimeout(() => {
//       setIsHovering(false);
//     }, 300);
//   };

//   // Cleanup hover timer on unmount
//   useEffect(() => {
//     return () => {
//       if (hoverTimerRef.current) {
//         clearTimeout(hoverTimerRef.current);
//       }
//     };
//   }, []);

//   // Handle scroll to active item
//   useEffect(() => {
//     if (scrollContainerRef.current) {
//       const activeItem = scrollContainerRef.current.querySelector('[data-active="true"]');
//       if (activeItem) {
//         // Scroll the active item into view with smooth behavior
//         activeItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
//       }
//     }
//   }, [location.pathname]);

//   // Colors
//   const bgGradient = useColorModeValue(
//     "linear(to-b, blue.50, blue.100)", 
//     "linear(to-b, blue.900, blue.800)"
//   );
//   const sidebarBg = useColorModeValue("white", "gray.800");
//   const textColor = useColorModeValue("gray.800", "white");
//   const accentColor = useColorModeValue("blue.500", "blue.300");
//   const borderColor = useColorModeValue("gray.200", "gray.700");

//   // Determine if sidebar should be visually expanded
//   const showExpanded = isExpanded || isHovering;

//   return (
//     <Flex 
//       ref={sidebarRef}
//       direction="column" 
//       h="100%" 
//       maxH="100vh" 
//       w={showExpanded ? "280px" : "80px"}
//       transition="width 0.3s ease"
//       bg={sidebarBg}
//       overflow="hidden"
//       position={isMobile ? "static" : "fixed"}
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//       top="0"
//       left="0"
//       borderRight="1px"
//       borderColor={borderColor}
//       zIndex="10"
//     >
//       {/* Fixed Header */}
//       <Box
//         bgGradient={bgGradient}
//         boxShadow="sm"
//         position="relative"
//         flexShrink={0}
//       >
//         {/* Toggle button */}
//         {!isMobile && (
//           <IconButton
//             aria-label="Toggle sidebar"
//             icon={showExpanded ? <ChevronLeftIcon /> : <ChevronRightIcon />}
//             position="absolute"
//             right="-12px"
//             top="20px"
//             size="sm"
//             borderRadius="full"
//             bg={accentColor}
//             color="white"
//             zIndex={20}
//             onClick={() => {
//               const newExpandedState = !isExpanded;
//               setIsExpanded(newExpandedState);
//               notifySidebarWidthChange(newExpandedState ? 280 : 80);
//             }}
//             _hover={{ bg: "blue.600" }}
//           />
//         )}

//         {/* Header with logo/title */}
//         <Flex align="center" justify={showExpanded ? "flex-start" : "center"} p={4} h="80px">
//           {showExpanded ? (
//             <Text fontSize="xl" fontWeight="bold" color={accentColor} letterSpacing="tight">
//               Teacher Portal
//             </Text>
//           ) : (
//             <Avatar size="sm" bg={accentColor} color="white" name="TP" fontWeight="bold" />
//           )}
//         </Flex>

//         {/* User profile section */}
//         <Flex
//           direction={showExpanded ? "row" : "column"}
//           align="center"
//           justify={showExpanded ? "flex-start" : "center"}
//           p={showExpanded ? 4 : 2}
//           mb={4}
//           borderBottom="1px"
//           borderColor={borderColor}
//         >
//           <Avatar
//             size={showExpanded ? "md" : "sm"}
//             src="/placeholder.svg?height=80&width=80"
//             name="John Doe"
//             mb={showExpanded ? 0 : 2}
//           />
//           {showExpanded && (
//             <Box ml={3}>
//               <Text fontWeight="bold" fontSize="sm" color={textColor}>
//                 John Doe
//               </Text>
//               <Text fontSize="xs" color="gray.500">
//                 Mathematics Teacher
//               </Text>
//               <HStack mt={1} spacing={1}>
//                 <Badge colorScheme="green" fontSize="xs" borderRadius="full" px={2}>
//                   Online
//                 </Badge>
//               </HStack>
//             </Box>
//           )}
//         </Flex>
//       </Box>

//       {/* Scrollable Navigation */}
//       <Box 
//         ref={scrollContainerRef}
//         flex="1"
//         overflowY="auto"
//         overflowX="hidden"
//         bgGradient={bgGradient}
//         className="custom-scrollbar"
//         css={{
//           "&::-webkit-scrollbar": {
//             width: "6px",
//           },
//           "&::-webkit-scrollbar-track": {
//             width: "8px",
//             background: "transparent",
//           },
//           "&::-webkit-scrollbar-thumb": {
//             background: useColorModeValue("blue.200", "blue.700"),
//             borderRadius: "24px",
//           },
//           "&:hover::-webkit-scrollbar-thumb": {
//             background: useColorModeValue("blue.300", "blue.600"),
//           },
//           // Ensures scrollbar appears in Firefox
//           "scrollbarWidth": "thin",
//           "scrollbarColor": `${useColorModeValue("blue.200", "blue.700")} transparent`,
//         }}
//       >
//         {/* Navigation */}
//         <VStack spacing={1} align="stretch" px={2} pb={6}>
//           {/* 1. Dashboard */}
//           <SidebarLink
//             icon={FaTachometerAlt}
//             label="Dashboard"
//             href="/dashboard"
//             isExpanded={showExpanded}
//             isActive={location.pathname === '/dashboard'}
//           />

//           {/* 2. Teacher Portal */}
//           <SidebarSection title="Teacher Portal" isExpanded={showExpanded}>
//             <SidebarLink
//               icon={FaUserLock}
//               label="Teacher Login"
//               href="/teacher/login"
//               isExpanded={showExpanded}
//               isActive={location.pathname === '/teacher/login'}
//             />
//             <SidebarLink
//               icon={FaCalendarAlt}
//               label="Personal Schedule"
//               href="/teacher/schedule"
//               isExpanded={showExpanded}
//               isActive={location.pathname === '/teacher/schedule'}
//             />
//             <SidebarLink 
//               icon={FaRegClock} 
//               label="Availability" 
//               href="/teacher/availability" 
//               isExpanded={showExpanded}
//               isActive={location.pathname === '/teacher/availability'}
//             />
//           </SidebarSection>

//           {/* 3. Attendance Management */}
//           <SidebarSection title="Attendance Management" isExpanded={showExpanded}>
//             <SidebarLink
//               icon={FaClipboardList}
//               label="Mark Attendance"
//               href="/attendance/mark"
//               isExpanded={showExpanded}
//               isActive={location.pathname === '/attendance/mark'}
//             />
//             <SidebarLink
//               icon={FaChartBar}
//               label="Attendance Reports"
//               href="/attendance/reports"
//               isExpanded={showExpanded}
//               isActive={location.pathname === '/attendance/reports'}
//             />
//           </SidebarSection>

//           {/* 4. Video Management */}
//           <SidebarSection title="Video Management" isExpanded={showExpanded}>
//             <SidebarLink
//               icon={FaVideo}
//               label="Upload Videos"
//               href="/teacher-admin/videos/upload"
//               isExpanded={showExpanded}
//               isActive={location.pathname === '/Videos/upload'}
//             />
//             <SidebarLink
//               icon={FaBook}
//               label="Edit/Delete Videos"
//               href="/videos/manage"
//               isExpanded={showExpanded}
//               isActive={location.pathname === '/videos/manage'}
//             />
//             <SidebarLink
//               icon={FaBookReader}
//               label="Course Material Organization"
//               href="/videos/organization"
//               isExpanded={showExpanded}
//               isActive={location.pathname === '/videos/organization'}
//             />
//           </SidebarSection>

//           {/* 5. Student Portal */}
//           <SidebarSection title="Student Portal" isExpanded={showExpanded}>
//             <SidebarLink
//               icon={FaUserLock}
//               label="Student Login"
//               href="/student/login"
//               isExpanded={showExpanded}
//               isActive={location.pathname === '/student/login'}
//             />
//             <SidebarLink
//               icon={FaSchool}
//               label="Enrolled Courses"
//               href="/student/courses"
//               isExpanded={showExpanded}
//               isActive={location.pathname === '/student/courses'}
//             />
//             <SidebarLink
//               icon={FaCalendarAlt}
//               label="Schedule"
//               href="/student/schedule"
//               isExpanded={showExpanded}
//               isActive={location.pathname === '/student/schedule'}
//             />
//           </SidebarSection>

//           {/* Performance Tracking */}
//           <SidebarSection title="Performance Tracking" isExpanded={showExpanded}>
//             <SidebarLink
//               icon={FaClipboardList}
//               label="Attendance Records"
//               href="/performance/attendance"
//               isExpanded={showExpanded}
//               isActive={location.pathname === '/performance/attendance'}
//             />
//             <SidebarLink
//               icon={FaGraduationCap}
//               label="Grades & Progress Reports"
//               href="/performance/grades"
//               isExpanded={showExpanded}
//               isActive={location.pathname === '/performance/grades'}
//               notification={3}
//             />
//             <SidebarLink
//               icon={FaChalkboardTeacher}
//               label="Feedback"
//               href="/performance/feedback"
//               isExpanded={showExpanded}
//               isActive={location.pathname === '/performance/feedback'}
//             />
//           </SidebarSection>

//           {showExpanded && (
//             <Box mt={6} px={2}>
//               <Text fontSize="xs" color="gray.500" mb={2}>
//                 COMPLETION STATS
//               </Text>
//               <VStack spacing={3} align="stretch">
//                 <Box>
//                   <Flex justify="space-between" mb={1}>
//                     <Text fontSize="xs">Grading</Text>
//                     <Text fontSize="xs" fontWeight="bold">
//                       78%
//                     </Text>
//                   </Flex>
//                   <Progress value={78} size="xs" colorScheme="green" borderRadius="full" />
//                 </Box>
//                 <Box>
//                   <Flex justify="space-between" mb={1}>
//                     <Text fontSize="xs">Lesson Planning</Text>
//                     <Text fontSize="xs" fontWeight="bold">
//                       45%
//                     </Text>
//                   </Flex>
//                   <Progress value={45} size="xs" colorScheme="blue" borderRadius="full" />
//                 </Box>
//               </VStack>
//             </Box>
//           )}
//         </VStack>
//       </Box>

//       {/* Footer actions */}
//       <Box
//         p={3}
//         borderTop="1px"
//         borderColor={borderColor}
//         bg={sidebarBg}
//         flexShrink={0}
//       >
//         <SidebarLink
//           icon={FaSignOutAlt}
//           label="Sign Out"
//           href="/logout"
//           isExpanded={showExpanded}
//           isActive={location.pathname === '/logout'}
//         />
//       </Box>
//     </Flex>
//   );
// }

// function SidebarLink({ icon, label, href, isExpanded, isActive = false, notification = null }) {
//   const activeBg = useColorModeValue("blue.100", "blue.700");
//   const activeColor = useColorModeValue("blue.700", "white");
//   const hoverBg = useColorModeValue("blue.50", "blue.800");
//   const textColor = useColorModeValue("gray.700", "gray.200");

//   return (
//     <Tooltip
//       label={!isExpanded ? label : ""}
//       placement="right"
//       hasArrow
//       openDelay={500}
//       display={isExpanded ? "none" : "block"}
//     >
//       <Flex
//         as={Link}
//         to={href}
//         align="center"
//         p={3}
//         mb={1}
//         borderRadius="lg"
//         role="group"
//         cursor="pointer"
//         bg={isActive ? activeBg : "transparent"}
//         color={isActive ? activeColor : textColor}
//         _hover={{
//           bg: hoverBg,
//           color: activeColor,
//           transform: "translateX(3px)",
//         }}
//         transition="all 0.2s"
//         position="relative"
//         data-active={isActive}
//       >
//         <Icon as={icon} boxSize={5} mr={isExpanded ? 3 : 0} _groupHover={{ color: activeColor }} />
//         {isExpanded && (
//           <Text fontSize="sm" fontWeight={isActive ? "semibold" : "medium"} noOfLines={1}>
//             {label}
//           </Text>
//         )}
//         {notification && (
//           <Badge
//             position="absolute"
//             right={isExpanded ? 3 : 0}
//             top={isExpanded ? 3 : 0}
//             colorScheme="red"
//             borderRadius="full"
//             fontSize="xs"
//             transform={isExpanded ? "none" : "translate(50%, -50%)"}
//             px={2}
//             py={isExpanded ? 0.5 : 1}
//             minW={isExpanded ? "auto" : "18px"}
//             textAlign="center"
//           >
//             {notification}
//           </Badge>
//         )}
//       </Flex>
//     </Tooltip>
//   );
// }

// function SidebarSection({ title, children, isExpanded }) {
//   const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: true });
//   const textColor = useColorModeValue("gray.500", "gray.400");
//   const borderColor = useColorModeValue("gray.200", "gray.700");

//   return (
//     <Box mb={2}>
//       {isExpanded && (
//         <Flex 
//           align="center" 
//           px={2} 
//           py={2} 
//           cursor="pointer" 
//           onClick={onToggle} 
//           userSelect="none"
//           _hover={{ color: useColorModeValue("blue.500", "blue.300") }}
//           transition="color 0.2s"
//         >
//           <Text 
//             fontSize="xs" 
//             fontWeight="bold" 
//             color={textColor} 
//             letterSpacing="wider" 
//             textTransform="uppercase"
//           >
//             {title}
//           </Text>
//           <ChevronRightIcon
//             ml="auto"
//             boxSize={4}
//             transition="transform 0.2s"
//             transform={isOpen ? "rotate(90deg)" : "rotate(0)"}
//           />
//         </Flex>
//       )}
//       <Collapse in={isOpen || !isExpanded}>
//         <VStack spacing={1} align="stretch" mt={isExpanded ? 1 : 0} pl={isExpanded ? 0 : 0}>
//           {children}
//         </VStack>
//       </Collapse>
//       {isExpanded && <Divider mt={2} borderColor={borderColor} opacity={0.5} />}
//     </Box>
//   );
// }

import { useState, useEffect, useRef } from "react";
import {
  Box,
  Flex,
  Icon,
  Text,
  Avatar,
  Badge,
  Tooltip,
  Collapse,
  Divider,
  useDisclosure,
  useColorModeValue,
  IconButton,
  VStack,
  HStack,
  Progress,
} from "@chakra-ui/react";
import { ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";
import {
  FaCalendarAlt,
  FaVideo,
  FaGraduationCap,
  FaChalkboardTeacher,
  FaBook,
  FaClipboardList,
  FaChartBar,
  FaSignOutAlt,
  FaRegClock,
  FaTachometerAlt,
  FaUserLock,
  FaSchool,
  FaBookReader,
  FaUsersCog,
  FaSyncAlt,
  FaUnlock,
  FaDatabase,
  FaShieldAlt,
  FaLayerGroup,
  FaEdit,
  FaMoneyBillWave,
  FaChartLine,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthContext";

/** Get display name and first name from auth user (for profile and welcome) */
function getTeacherDisplayInfo(user) {
  if (!user) return { displayName: "Teacher", firstName: "Teacher" };
  const cap = (s) => (s ? s.charAt(0).toUpperCase() + s.slice(1).toLowerCase() : "Teacher");
  const fromName = user.firstName || (user.name && user.name.split(/\s+/)[0]);
  if (fromName) return { displayName: cap(fromName), firstName: cap(fromName) };
  const emailPrefix = (user.mailId || user.email || "").split("@")[0] || "";
  const firstPart = emailPrefix.split(".")[0] || emailPrefix || "Teacher";
  const name = cap(firstPart);
  return { displayName: name, firstName: name };
}

export default function TeacherAdminSidebar({ isMobile = false }) {
  // ✅ START: Inverted initial state - Start Expanded
  const [isExpanded, setIsExpanded] = useState(!isMobile); // Expanded by default on desktop
  // ✅ END

  const location = useLocation?.() || { pathname: "/" };
  const { user } = useAuth();
  const { displayName, firstName } = getTeacherDisplayInfo(user);
  const scrollContainerRef = useRef(null);
  const sidebarRef = useRef(null);

  const notifySidebarWidthChange = (width) => {
    window.dispatchEvent(new CustomEvent("sidebarResize", { detail: { width } }));
  };

  useEffect(() => {
    notifySidebarWidthChange(isExpanded ? 280 : 80);
  }, [isExpanded]);

  // Scroll active item into view
  useEffect(() => {
    if (scrollContainerRef.current) {
      const activeItem = scrollContainerRef.current.querySelector('[data-active="true"]');
      if (activeItem) {
        activeItem.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  }, [location.pathname]);

  // Royal green + glassy
  const glassBg = useColorModeValue(
    "rgba(240, 253, 244, 0.78)",
    "rgba(6, 44, 22, 0.82)"
  );
  const bgGradient = useColorModeValue(
    "linear(to-b, rgba(187, 247, 208, 0.6), rgba(134, 239, 172, 0.5))",
    "linear(to-b, rgba(20, 83, 45, 0.7), rgba(6, 44, 22, 0.75))"
  );
  const sidebarBg = glassBg;
  const textColor = useColorModeValue("gray.800", "white");
  const accentColor = useColorModeValue("green.600", "green.400");
  const borderColor = useColorModeValue("rgba(34, 197, 94, 0.25)", "rgba(74, 222, 128, 0.2)");
  const glassShadow = useColorModeValue("0 8px 32px rgba(6, 44, 22, 0.12)", "0 8px 32px rgba(0,0,0,0.3)");

  // ✅ Use isExpanded directly — no hover logic
  const showExpanded = isExpanded;

  const glassStyle = {
    backdropFilter: "blur(14px)",
    WebkitBackdropFilter: "blur(14px)",
  };

  return (
    <Flex
      ref={sidebarRef}
      direction="column"
      h="100%"
      maxH="100vh"
      w={showExpanded ? "280px" : "80px"}
      transition="width 0.3s ease"
      bg={sidebarBg}
      overflow="hidden"
      position={isMobile ? "static" : "fixed"}
      top="0"
      left="0"
      borderRight="1px"
      borderColor={borderColor}
      boxShadow={glassShadow}
      css={glassStyle}
      zIndex="10"
    >
      {/* Fixed Header — glassy + royal green gradient */}
      <Box
        bgGradient={bgGradient}
        bg={sidebarBg}
        css={glassStyle}
        borderBottom="1px"
        borderColor={borderColor}
        boxShadow="0 4px 24px rgba(6, 44, 22, 0.08)"
        position="relative"
        flexShrink={0}
      >
        {/* Toggle button */}
        {!isMobile && (
          <IconButton
            aria-label="Toggle sidebar"
            icon={showExpanded ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            position="absolute"
            right="-12px"
            top="20px"
            size="sm"
            borderRadius="full"
            bg={accentColor}
            color="white"
            zIndex={20}
            onClick={() => {
              const newExpandedState = !isExpanded;
              setIsExpanded(newExpandedState);
              notifySidebarWidthChange(newExpandedState ? 280 : 80);
            }}
            _hover={{ bg: "green.600" }}
          />
        )}

        {/* Logo / Title */}
        <Flex align="center" justify={showExpanded ? "flex-start" : "center"} p={4} h="80px">
          {showExpanded ? (
            <Text fontSize="xl" fontWeight="bold" color={accentColor} letterSpacing="tight">
              Teacher Portal
            </Text>
          ) : (
            <Avatar size="sm" bg={accentColor} color="white" name="TP" fontWeight="bold" />
          )}
        </Flex>

        {/* User Profile */}
        <Flex
          direction={showExpanded ? "row" : "column"}
          align="center"
          justify={showExpanded ? "flex-start" : "center"}
          p={showExpanded ? 4 : 2}
          mb={4}
          borderBottom="1px"
          borderColor={borderColor}
        >
          <Avatar
            size={showExpanded ? "md" : "sm"}
            src={user?.avatar || user?.profileImage}
            name={displayName}
            mb={showExpanded ? 0 : 2}
          />
          {showExpanded && (
            <Box ml={3}>
              <Text fontWeight="bold" fontSize="sm" color={textColor}>
                {displayName}
              </Text>
              <Text fontSize="xs" color="gray.500">
                Teacher
              </Text>
              <HStack mt={1} spacing={1}>
                <Badge bg="green.500" color="white" fontSize="xs" borderRadius="full" px={2}>
                  Online
                </Badge>
              </HStack>
            </Box>
          )}
        </Flex>
      </Box>

      {/* Scrollable Navigation — glass */}
      <Box
        ref={scrollContainerRef}
        flex="1"
        overflowY="auto"
        overflowX="hidden"
        bg={sidebarBg}
        css={{
          ...glassStyle,
          "&::-webkit-scrollbar": { width: "6px" },
          "&::-webkit-scrollbar-track": { background: "transparent" },
          "&::-webkit-scrollbar-thumb": {
            background: useColorModeValue("rgba(34, 197, 94, 0.4)", "rgba(74, 222, 128, 0.35)"),
            borderRadius: "24px",
          },
          "&:hover::-webkit-scrollbar-thumb": {
            background: useColorModeValue("green.300", "green.600"),
          },
          scrollbarWidth: "thin",
          scrollbarColor: `${useColorModeValue("green.300", "green.700")} transparent`,
        }}
      >
        <VStack spacing={1} align="stretch" px={2} pb={6}>
          <SidebarLink
            icon={FaTachometerAlt}
            label="Dashboard"
            href="/teacher-admin/home"
            isExpanded={showExpanded}
            isActive={location.pathname === "/teacher-admin/home"}
          />
          <SidebarLink
            icon={FaUsersCog}
            label="Employee Portal"
            href="/teacher-admin/employee-portal/dashboard"
            isExpanded={showExpanded}
            isActive={location.pathname.startsWith("/teacher-admin/employee-portal")}
          />

          <SidebarSection title="Smart Institute" isExpanded={showExpanded}>
            <SidebarLink
              icon={FaSchool}
              label="Smart Institute Dashboard"
              href="/teacher-admin/institute"
              isExpanded={showExpanded}
              isActive={location.pathname === "/teacher-admin/institute"}
            />
            <SidebarLink
              icon={FaLayerGroup}
              label="Batch & Class Management"
              href="/teacher-admin/institute/batches"
              isExpanded={showExpanded}
              isActive={location.pathname.startsWith("/teacher-admin/institute/batches")}
            />
            <SidebarLink
              icon={FaEdit}
              label="Test & Assignment System"
              href="/teacher-admin/institute/tests"
              isExpanded={showExpanded}
              isActive={location.pathname.startsWith("/teacher-admin/institute/tests")}
            />
            <SidebarLink
              icon={FaMoneyBillWave}
              label="Fees & Payment Tracking"
              href="/teacher-admin/institute/fees"
              isExpanded={showExpanded}
              isActive={location.pathname.startsWith("/teacher-admin/institute/fees")}
            />
            <SidebarLink
              icon={FaChartLine}
              label="Student Performance Analytics"
              href="/teacher-admin/institute/analytics"
              isExpanded={showExpanded}
              isActive={location.pathname.startsWith("/teacher-admin/institute/analytics")}
            />
            <SidebarLink
              icon={FaVideo}
              label="Live & Recorded Classes"
              href="/teacher-admin/videos/upload"
              isExpanded={showExpanded}
              isActive={location.pathname.startsWith("/teacher-admin/videos")}
            />
          </SidebarSection>

          <SidebarSection title="Teacher Portal" isExpanded={showExpanded}>
            <SidebarLink
              icon={FaUserLock}
              label="Teacher Login"
              href="/teacher-admin/login"
              isExpanded={showExpanded}
              isActive={location.pathname === "/teacher-admin/login"}
            />
            <SidebarLink
              icon={FaCalendarAlt}
              label="Personal Schedule"
              href="/teacher-admin/schedule"
              isExpanded={showExpanded}
              isActive={location.pathname === "/teacher-admin/schedule"}
            />
            <SidebarLink
              icon={FaRegClock}
              label="Availability"
              href="/teacher-admin/availability"
              isExpanded={showExpanded}
              isActive={location.pathname === "/teacher-admin/availability"}
            />
          </SidebarSection>

          <SidebarSection title="Attendance Management" isExpanded={showExpanded}>
            <SidebarLink
              icon={FaClipboardList}
              label="Mark Attendance"
              href="/teacher-admin/attendance/mark"
              isExpanded={showExpanded}
              isActive={location.pathname === "/teacher-admin/attendance/mark"}
            />
            <SidebarLink
              icon={FaChartBar}
              label="Attendance Reports"
              href="/teacher-admin/attendance/reports"
              isExpanded={showExpanded}
              isActive={location.pathname === "/teacher-admin/attendance/reports"}
            />
          </SidebarSection>

          <SidebarSection title="Employee Portal" isExpanded={showExpanded}>
            <SidebarLink
              icon={FaTachometerAlt}
              label="Employee Dashboard"
              href="/teacher-admin/employee-portal/dashboard"
              isExpanded={showExpanded}
              isActive={location.pathname.startsWith("/teacher-admin/employee-portal/dashboard")}
            />
            <SidebarLink
              icon={FaClipboardList}
              label="Attendance"
              href="/teacher-admin/employee-portal/attendance"
              isExpanded={showExpanded}
              isActive={location.pathname.startsWith("/teacher-admin/employee-portal/attendance")}
            />
            <SidebarLink
              icon={FaBook}
              label="Payslip"
              href="/teacher-admin/employee-portal/payslip"
              isExpanded={showExpanded}
              isActive={location.pathname.startsWith("/teacher-admin/employee-portal/payslip")}
            />
            <SidebarLink
              icon={FaUsersCog}
              label="Leave"
              href="/teacher-admin/employee-portal/leave"
              isExpanded={showExpanded}
              isActive={location.pathname.startsWith("/teacher-admin/employee-portal/leave")}
            />
          </SidebarSection>

          <SidebarSection title="Video Management" isExpanded={showExpanded}>
            <SidebarLink
              icon={FaVideo}
              label="Upload Videos"
              href="/teacher-admin/videos/upload"
              isExpanded={showExpanded}
              isActive={location.pathname === "/teacher-admin/videos/upload"}
            />
            <SidebarLink
              icon={FaBook}
              label="Edit/Delete Videos"
              href="/teacher-admin/videos/manage"
              isExpanded={showExpanded}
              isActive={location.pathname === "/teacher-admin/videos/manage"}
            />
            <SidebarLink
              icon={FaBookReader}
              label="Course Material Organization"
              href="/teacher-admin/videos/organization"
              isExpanded={showExpanded}
              isActive={location.pathname === "/teacher-admin/videos/organization"}
            />
          </SidebarSection>

          <SidebarSection title="Performance Tracking" isExpanded={showExpanded}>
            <SidebarLink
              icon={FaClipboardList}
              label="Attendance Records"
              href="/teacher-admin/performance/attendance"
              isExpanded={showExpanded}
              isActive={location.pathname === "/teacher-admin/performance/attendance"}
            />
            <SidebarLink
              icon={FaGraduationCap}
              label="Grades & Progress Reports"
              href="/teacher-admin/performance/grades"
              isExpanded={showExpanded}
              isActive={location.pathname === "/teacher-admin/performance/grades"}
              notification={3}
            />
            <SidebarLink
              icon={FaChalkboardTeacher}
              label="Feedback"
              href="/teacher-admin/performance/feedback"
              isExpanded={showExpanded}
              isActive={location.pathname === "/teacher-admin/performance/feedback"}
            />
          </SidebarSection>

          {showExpanded && (
            <Box mt={6} px={2}>
              <Text fontSize="xs" color="gray.500" mb={2}>
                COMPLETION STATS
              </Text>
              <VStack spacing={3} align="stretch">
                <Box>
                  <Flex justify="space-between" mb={1}>
                    <Text fontSize="xs">Grading</Text>
                    <Text fontSize="xs" fontWeight="bold">
                      78%
                    </Text>
                  </Flex>
                  <Progress value={78} size="xs" colorScheme="green" borderRadius="full" />
                </Box>
                <Box>
                  <Flex justify="space-between" mb={1}>
                    <Text fontSize="xs">Lesson Planning</Text>
                    <Text fontSize="xs" fontWeight="bold">
                      45%
                    </Text>
                  </Flex>
                  <Progress value={45} size="xs" colorScheme="blue" borderRadius="full" />
                </Box>
              </VStack>
            </Box>
          )}
        </VStack>
      </Box>

      {/* Footer — glass */}
      <Box
        p={3}
        borderTop="1px"
        borderColor={borderColor}
        bg={sidebarBg}
        css={glassStyle}
        flexShrink={0}
      >
        <SidebarLink
          icon={FaSignOutAlt}
          label="Sign Out"
          href="/teacher-admin/logout"
          isExpanded={showExpanded}
          isActive={location.pathname === "/teacher-admin/logout"}
        />
      </Box>
    </Flex>
  );
}

// SidebarLink and SidebarSection components remain unchanged
function SidebarLink({ icon, label, href, isExpanded, isActive = false, notification = null }) {
  const activeBg = useColorModeValue("rgba(34, 197, 94, 0.25)", "rgba(74, 222, 128, 0.2)");
  const activeColor = useColorModeValue("green.700", "green.200");
  const hoverBg = useColorModeValue("rgba(34, 197, 94, 0.12)", "rgba(74, 222, 128, 0.15)");
  const textColor = useColorModeValue("gray.700", "gray.200");

  return (
    <Tooltip
      label={!isExpanded ? label : ""}
      placement="right"
      hasArrow
      openDelay={500}
      display={isExpanded ? "none" : "block"}
    >
      <Flex
        as={Link}
        to={href}
        align="center"
        p={3}
        mb={1}
        borderRadius="lg"
        role="group"
        cursor="pointer"
        bg={isActive ? activeBg : "transparent"}
        color={isActive ? activeColor : textColor}
        _hover={{
          bg: hoverBg,
          color: activeColor,
          transform: "translateX(3px)",
        }}
        transition="all 0.2s"
        position="relative"
        data-active={isActive}
      >
        <Icon as={icon} boxSize={5} mr={isExpanded ? 3 : 0} _groupHover={{ color: activeColor }} />
        {isExpanded && (
          <Text fontSize="sm" fontWeight={isActive ? "semibold" : "medium"} noOfLines={1}>
            {label}
          </Text>
        )}
        {notification && (
          <Badge
            position="absolute"
            right={isExpanded ? 3 : 0}
            top={isExpanded ? 3 : 0}
            colorScheme="red"
            borderRadius="full"
            fontSize="xs"
            transform={isExpanded ? "none" : "translate(50%, -50%)"}
            px={2}
            py={isExpanded ? 0.5 : 1}
            minW={isExpanded ? "auto" : "18px"}
            textAlign="center"
          >
            {notification}
          </Badge>
        )}
      </Flex>
    </Tooltip>
  );
}

function SidebarSection({ title, children, isExpanded }) {
  const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: true });
  const textColor = useColorModeValue("gray.600", "gray.400");
  const borderColor = useColorModeValue("gray.200", "gray.700");

  return (
    <Box mb={2}>
      {isExpanded && (
        <Flex
          align="center"
          px={2}
          py={2}
          cursor="pointer"
          onClick={onToggle}
          userSelect="none"
          _hover={{ color: useColorModeValue("green.600", "green.300") }}
          transition="color 0.2s"
        >
          <Text
            fontSize="xs"
            fontWeight="bold"
            color={textColor}
            letterSpacing="wider"
            textTransform="uppercase"
          >
            {title}
          </Text>
          <ChevronRightIcon
            ml="auto"
            boxSize={4}
            transition="transform 0.2s"
            transform={isOpen ? "rotate(90deg)" : "rotate(0)"}
          />
        </Flex>
      )}
      <Collapse in={isOpen || !isExpanded}>
        <VStack spacing={1} align="stretch" mt={isExpanded ? 1 : 0}>
          {children}
        </VStack>
      </Collapse>
      {isExpanded && <Divider mt={2} borderColor={borderColor} opacity={0.5} />}
    </Box>
  );
}