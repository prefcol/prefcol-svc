// // // // // // // // // // // // // // import React, { useState, useRef } from "react";
// // // // // // // // // // // // // // import { NavLink, useLocation } from "react-router-dom";
// // // // // // // // // // // // // // import {
// // // // // // // // // // // // // //   Box,
// // // // // // // // // // // // // //   VStack,
// // // // // // // // // // // // // //   Heading,
// // // // // // // // // // // // // //   Text,
// // // // // // // // // // // // // //   Collapse,
// // // // // // // // // // // // // //   IconButton,
// // // // // // // // // // // // // //   Input,
// // // // // // // // // // // // // //   Badge,
// // // // // // // // // // // // // //   Avatar,
// // // // // // // // // // // // // //   Button,
// // // // // // // // // // // // // //   Flex,
// // // // // // // // // // // // // //   Drawer,
// // // // // // // // // // // // // //   DrawerBody,
// // // // // // // // // // // // // //   DrawerHeader,
// // // // // // // // // // // // // //   DrawerOverlay,
// // // // // // // // // // // // // //   DrawerContent,
// // // // // // // // // // // // // //   DrawerCloseButton,
// // // // // // // // // // // // // //   useDisclosure,
// // // // // // // // // // // // // //   InputGroup,
// // // // // // // // // // // // // //   InputLeftElement,
// // // // // // // // // // // // // //   Divider,
// // // // // // // // // // // // // //   useColorModeValue,
// // // // // // // // // // // // // //   Tooltip,
// // // // // // // // // // // // // //   useBreakpointValue,
// // // // // // // // // // // // // //   HStack,
// // // // // // // // // // // // // //   Menu,
// // // // // // // // // // // // // //   MenuButton,
// // // // // // // // // // // // // //   MenuList,
// // // // // // // // // // // // // //   MenuItem,
// // // // // // // // // // // // // //   Portal
// // // // // // // // // // // // // // } from "@chakra-ui/react";
// // // // // // // // // // // // // // import {
// // // // // // // // // // // // // //   ChevronDownIcon,
// // // // // // // // // // // // // //   ChevronUpIcon,
// // // // // // // // // // // // // //   HamburgerIcon,
// // // // // // // // // // // // // //   BellIcon,
// // // // // // // // // // // // // //   SearchIcon,
// // // // // // // // // // // // // //   SettingsIcon,
// // // // // // // // // // // // // //   QuestionIcon,
// // // // // // // // // // // // // //   ChevronRightIcon
// // // // // // // // // // // // // // } from "@chakra-ui/icons";
// // // // // // // // // // // // // // import {
// // // // // // // // // // // // // //   FaUsers,
// // // // // // // // // // // // // //   FaBook,
// // // // // // // // // // // // // //   FaChartBar,
// // // // // // // // // // // // // //   FaCog,
// // // // // // // // // // // // // //   FaClipboardList,
// // // // // // // // // // // // // //   FaHeadset,
// // // // // // // // // // // // // //   FaSignOutAlt,
// // // // // // // // // // // // // //   FaUserPlus,
// // // // // // // // // // // // // //   FaUserEdit,
// // // // // // // // // // // // // //   FaUserMinus,
// // // // // // // // // // // // // //   FaUserShield,
// // // // // // // // // // // // // //   FaUserCheck,
// // // // // // // // // // // // // //   FaBookOpen,
// // // // // // // // // // // // // //   FaVideo,
// // // // // // // // // // // // // //   FaLock,
// // // // // // // // // // // // // //   FaFolderOpen,
// // // // // // // // // // // // // //   FaChartLine,
// // // // // // // // // // // // // //   FaChalkboardTeacher,
// // // // // // // // // // // // // //   FaDesktop,
// // // // // // // // // // // // // //   FaCreditCard,
// // // // // // // // // // // // // //   FaBell,
// // // // // // // // // // // // // //   FaPalette,
// // // // // // // // // // // // // //   FaHistory,
// // // // // // // // // // // // // //   FaShieldAlt,
// // // // // // // // // // // // // //   FaTicketAlt
// // // // // // // // // // // // // // } from "react-icons/fa";

// // // // // // // // // // // // // // // Map of section titles to their respective icons
// // // // // // // // // // // // // // const sectionIcons = {
// // // // // // // // // // // // // //   "User Management": FaUsers,
// // // // // // // // // // // // // //   "Course and Content Control": FaBook,
// // // // // // // // // // // // // //   "Analytics and Reports": FaChartBar,
// // // // // // // // // // // // // //   "System Settings": FaCog,
// // // // // // // // // // // // // //   "Audit and Logs": FaClipboardList,
// // // // // // // // // // // // // //   "Support Management": FaHeadset
// // // // // // // // // // // // // // };

// // // // // // // // // // // // // // // Map of link paths to their respective icons
// // // // // // // // // // // // // // const linkIcons = {
// // // // // // // // // // // // // //   "/admin/user-management/create": FaUserPlus,
// // // // // // // // // // // // // //   "/admin/user-management/update": FaUserEdit,
// // // // // // // // // // // // // //   "/admin/user-management/delete": FaUserMinus,
// // // // // // // // // // // // // //   "/admin/user-management/roles": FaUserShield,
// // // // // // // // // // // // // //   "/admin/user-management/teacher-approvals": FaUserCheck,
// // // // // // // // // // // // // //   "/admin/course-control/add-update-remove": FaBookOpen,
// // // // // // // // // // // // // //   "/master-admin/videos/upload": FaVideo,
// // // // // // // // // // // // // //   "/admin/course-control/restrict-access": FaLock,
// // // // // // // // // // // // // //   "/admin/course-control/video-organization": FaFolderOpen,
// // // // // // // // // // // // // //   "/admin/analytics/student-performance": FaChartLine,
// // // // // // // // // // // // // //   "/admin/analytics/teacher-effectiveness": FaChalkboardTeacher,
// // // // // // // // // // // // // //   "/admin/analytics/platform-usage": FaDesktop,
// // // // // // // // // // // // // //   "/admin/settings/payment-gateway": FaCreditCard,
// // // // // // // // // // // // // //   "/admin/settings/notification-templates": FaBell,
// // // // // // // // // // // // // //   "/admin/settings/platform-preferences": FaPalette,
// // // // // // // // // // // // // //   "/admin/audit-logs/view-logs": FaHistory,
// // // // // // // // // // // // // //   "/admin/audit-logs/accountability": FaShieldAlt,
// // // // // // // // // // // // // //   "/admin/support/manage-requests": FaTicketAlt
// // // // // // // // // // // // // // };

// // // // // // // // // // // // // // const SidebarSection = ({ title, links, defaultOpen = false }) => {
// // // // // // // // // // // // // //   const [isOpen, setIsOpen] = useState(defaultOpen);
// // // // // // // // // // // // // //   const location = useLocation();
// // // // // // // // // // // // // //   const SectionIcon = sectionIcons[title] || FaBook;
// // // // // // // // // // // // // //   const bg = useColorModeValue("gray.50", "gray.800");
// // // // // // // // // // // // // //   const hoverBg = useColorModeValue("gray.100", "gray.700");
// // // // // // // // // // // // // //   const activeBg = useColorModeValue("teal.50", "teal.900");
// // // // // // // // // // // // // //   const activeColor = useColorModeValue("teal.700", "teal.200");
// // // // // // // // // // // // // //   const borderColor = useColorModeValue("gray.200", "gray.700");
  
// // // // // // // // // // // // // //   // Check if any link in this section is active
// // // // // // // // // // // // // //   const hasActiveLink = links.some(link => location.pathname === link.path);
  
// // // // // // // // // // // // // //   // If a link in this section is active, open the section
// // // // // // // // // // // // // //   React.useEffect(() => {
// // // // // // // // // // // // // //     if (hasActiveLink && !isOpen) {
// // // // // // // // // // // // // //       setIsOpen(true);
// // // // // // // // // // // // // //     }
// // // // // // // // // // // // // //   }, [hasActiveLink, isOpen]);

// // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // //     <Box width="100%" mb={4} borderBottom="1px" borderColor={borderColor} pb={2}>
// // // // // // // // // // // // // //       <Flex
// // // // // // // // // // // // // //         justify="space-between"
// // // // // // // // // // // // // //         align="center"
// // // // // // // // // // // // // //         p={3}
// // // // // // // // // // // // // //         borderRadius="md"
// // // // // // // // // // // // // //         bg={hasActiveLink ? activeBg : bg}
// // // // // // // // // // // // // //         cursor="pointer"
// // // // // // // // // // // // // //         onClick={() => setIsOpen(!isOpen)}
// // // // // // // // // // // // // //         _hover={{ bg: hoverBg }}
// // // // // // // // // // // // // //         transition="all 0.2s"
// // // // // // // // // // // // // //       >
// // // // // // // // // // // // // //         <HStack spacing={3}>
// // // // // // // // // // // // // //           <Box color={hasActiveLink ? activeColor : "gray.500"}>
// // // // // // // // // // // // // //             <SectionIcon />
// // // // // // // // // // // // // //           </Box>
// // // // // // // // // // // // // //           <Heading size="sm" fontWeight="medium" color={hasActiveLink ? activeColor : "inherit"}>
// // // // // // // // // // // // // //             {title}
// // // // // // // // // // // // // //           </Heading>
// // // // // // // // // // // // // //         </HStack>
// // // // // // // // // // // // // //         <IconButton
// // // // // // // // // // // // // //           icon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
// // // // // // // // // // // // // //           variant="ghost"
// // // // // // // // // // // // // //           size="sm"
// // // // // // // // // // // // // //           aria-label={`Toggle ${title}`}
// // // // // // // // // // // // // //           color={hasActiveLink ? activeColor : "gray.500"}
// // // // // // // // // // // // // //         />
// // // // // // // // // // // // // //       </Flex>

// // // // // // // // // // // // // //       <Collapse in={isOpen} animateOpacity>
// // // // // // // // // // // // // //         <VStack align="stretch" spacing={1} mt={2} pl={2}>
// // // // // // // // // // // // // //           {links.map(({ path, label, badge }) => {
// // // // // // // // // // // // // //             const isActive = location.pathname === path;
// // // // // // // // // // // // // //             const LinkIcon = linkIcons[path] || ChevronRightIcon;
            
// // // // // // // // // // // // // //             return (
// // // // // // // // // // // // // //               <NavLink
// // // // // // // // // // // // // //                 key={path}
// // // // // // // // // // // // // //                 to={path}
// // // // // // // // // // // // // //                 style={{ textDecoration: 'none', width: '100%' }}
// // // // // // // // // // // // // //               >
// // // // // // // // // // // // // //                 <Flex
// // // // // // // // // // // // // //                   p={2}
// // // // // // // // // // // // // //                   pl={4}
// // // // // // // // // // // // // //                   borderRadius="md"
// // // // // // // // // // // // // //                   align="center"
// // // // // // // // // // // // // //                   bg={isActive ? activeBg : "transparent"}
// // // // // // // // // // // // // //                   color={isActive ? activeColor : "inherit"}
// // // // // // // // // // // // // //                   fontWeight={isActive ? "semibold" : "normal"}
// // // // // // // // // // // // // //                   _hover={{ bg: hoverBg }}
// // // // // // // // // // // // // //                   transition="all 0.2s"
// // // // // // // // // // // // // //                 >
// // // // // // // // // // // // // //                   <Box mr={3} fontSize="sm" color={isActive ? activeColor : "gray.500"}>
// // // // // // // // // // // // // //                     <LinkIcon />
// // // // // // // // // // // // // //                   </Box>
// // // // // // // // // // // // // //                   <Text fontSize="sm" noOfLines={1}>{label}</Text>
// // // // // // // // // // // // // //                   {badge && (
// // // // // // // // // // // // // //                     <Badge 
// // // // // // // // // // // // // //                       ml="auto" 
// // // // // // // // // // // // // //                       colorScheme="red" 
// // // // // // // // // // // // // //                       borderRadius="full" 
// // // // // // // // // // // // // //                       px={2}
// // // // // // // // // // // // // //                     >
// // // // // // // // // // // // // //                       {badge}
// // // // // // // // // // // // // //                     </Badge>
// // // // // // // // // // // // // //                   )}
// // // // // // // // // // // // // //                 </Flex>
// // // // // // // // // // // // // //               </NavLink>
// // // // // // // // // // // // // //             );
// // // // // // // // // // // // // //           })}
// // // // // // // // // // // // // //         </VStack>
// // // // // // // // // // // // // //       </Collapse>
// // // // // // // // // // // // // //     </Box>
// // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // };

// // // // // // // // // // // // // // const MasterAdminSidebar = () => {
// // // // // // // // // // // // // //   const { isOpen, onOpen, onClose } = useDisclosure();
// // // // // // // // // // // // // //   const [searchTerm, setSearchTerm] = useState("");
// // // // // // // // // // // // // //   const btnRef = useRef();
// // // // // // // // // // // // // //   const location = useLocation();
  
// // // // // // // // // // // // // //   // Responsive values
// // // // // // // // // // // // // //   const sidebarWidth = useBreakpointValue({ base: "full", md: "300px" });
// // // // // // // // // // // // // //   const isMobile = useBreakpointValue({ base: true, md: false });
// // // // // // // // // // // // // //   const displayMode = useBreakpointValue({ base: "drawer", md: "sidebar" });
  
// // // // // // // // // // // // // //   // Color mode values
// // // // // // // // // // // // // //   const bg = useColorModeValue("white", "gray.900");
// // // // // // // // // // // // // //   const borderColor = useColorModeValue("gray.200", "gray.700");
// // // // // // // // // // // // // //   const inputBg = useColorModeValue("gray.100", "gray.700");
// // // // // // // // // // // // // //   const headerBg = useColorModeValue("teal.500", "teal.600");
// // // // // // // // // // // // // //   const headerColor = useColorModeValue("white", "white");

// // // // // // // // // // // // // //   const sections = [
// // // // // // // // // // // // // //     {
// // // // // // // // // // // // // //       title: "User Management",
// // // // // // // // // // // // // //       links: [
// // // // // // // // // // // // // //         { path: "/admin/user-management/create", label: "Create Users" },
// // // // // // // // // // // // // //         { path: "/admin/user-management/update", label: "Update User Information" },
// // // // // // // // // // // // // //         { path: "/admin/user-management/delete", label: "Delete Users" },
// // // // // // // // // // // // // //         { path: "/admin/user-management/roles", label: "Manage Roles & Permissions" },
// // // // // // // // // // // // // //         {
// // // // // // // // // // // // // //           path: "/admin/user-management/teacher-approvals",
// // // // // // // // // // // // // //           label: "Teacher Applications",
// // // // // // // // // // // // // //           badge: "5"
// // // // // // // // // // // // // //         },
// // // // // // // // // // // // // //       ],
// // // // // // // // // // // // // //     },
// // // // // // // // // // // // // //     {
// // // // // // // // // // // // // //       title: "Course and Content Control",
// // // // // // // // // // // // // //       links: [
// // // // // // // // // // // // // //         { path: "/admin/course-control/add-update-remove", label: "Manage Courses" },
// // // // // // // // // // // // // //         { path: "/master-admin/videos/upload", label: "Video & Materials" },
// // // // // // // // // // // // // //         { path: "/admin/course-control/restrict-access", label: "Content Access" },
// // // // // // // // // // // // // //         { path: "/admin/course-control/video-organization", label: "Video Organization" },
// // // // // // // // // // // // // //       ],
// // // // // // // // // // // // // //     },
// // // // // // // // // // // // // //     {
// // // // // // // // // // // // // //       title: "Analytics and Reports",
// // // // // // // // // // // // // //       links: [
// // // // // // // // // // // // // //         { path: "/admin/analytics/student-performance", label: "Student Performance" },
// // // // // // // // // // // // // //         { path: "/admin/analytics/teacher-effectiveness", label: "Teacher Effectiveness" },
// // // // // // // // // // // // // //         { path: "/admin/analytics/platform-usage", label: "Platform Usage Reports" },
// // // // // // // // // // // // // //       ],
// // // // // // // // // // // // // //     },
// // // // // // // // // // // // // //     {
// // // // // // // // // // // // // //       title: "System Settings",
// // // // // // // // // // // // // //       links: [
// // // // // // // // // // // // // //         { path: "/admin/settings/payment-gateway", label: "Payment Gateway" },
// // // // // // // // // // // // // //         { path: "/admin/settings/notification-templates", label: "Notification Templates" },
// // // // // // // // // // // // // //         { path: "/admin/settings/platform-preferences", label: "Platform Preferences" },
// // // // // // // // // // // // // //       ],
// // // // // // // // // // // // // //     },
// // // // // // // // // // // // // //     {
// // // // // // // // // // // // // //       title: "Audit and Logs",
// // // // // // // // // // // // // //       links: [
// // // // // // // // // // // // // //         { path: "/admin/audit-logs/view-logs", label: "System Logs" },
// // // // // // // // // // // // // //         { path: "/admin/audit-logs/accountability", label: "Accountability" },
// // // // // // // // // // // // // //       ],
// // // // // // // // // // // // // //     },
// // // // // // // // // // // // // //     {
// // // // // // // // // // // // // //       title: "Support Management",
// // // // // // // // // // // // // //       links: [
// // // // // // // // // // // // // //         { path: "/admin/support/manage-requests", label: "Support Requests", badge: "12" }
// // // // // // // // // // // // // //       ],
// // // // // // // // // // // // // //     },
// // // // // // // // // // // // // //   ];

// // // // // // // // // // // // // //   // Filter sections based on search term
// // // // // // // // // // // // // //   const filteredSections = sections.map((section) => ({
// // // // // // // // // // // // // //     ...section,
// // // // // // // // // // // // // //     links: section.links.filter((link) =>
// // // // // // // // // // // // // //       link.label.toLowerCase().includes(searchTerm.toLowerCase())
// // // // // // // // // // // // // //     ),
// // // // // // // // // // // // // //   })).filter(section => section.links.length > 0);

// // // // // // // // // // // // // //   // Find which section is active based on current path
// // // // // // // // // // // // // //   const activeSection = sections.findIndex(section => 
// // // // // // // // // // // // // //     section.links.some(link => link.path === location.pathname)
// // // // // // // // // // // // // //   );

// // // // // // // // // // // // // //   const SidebarContent = () => (
// // // // // // // // // // // // // //     <Box height="100%" display="flex" flexDirection="column">
// // // // // // // // // // // // // //       {/* Admin Profile Section */}
// // // // // // // // // // // // // //       <Flex
// // // // // // // // // // // // // //         bg={headerBg}
// // // // // // // // // // // // // //         color={headerColor}
// // // // // // // // // // // // // //         p={4}
// // // // // // // // // // // // // //         alignItems="center"
// // // // // // // // // // // // // //         justifyContent="space-between"
// // // // // // // // // // // // // //         borderBottomWidth="1px"
// // // // // // // // // // // // // //         borderColor={borderColor}
// // // // // // // // // // // // // //       >
// // // // // // // // // // // // // //         <HStack spacing={3}>
// // // // // // // // // // // // // //           <Avatar 
// // // // // // // // // // // // // //             name="Admin User" 
// // // // // // // // // // // // // //             src="/path-to-admin-image.jpg" 
// // // // // // // // // // // // // //             size="sm"
// // // // // // // // // // // // // //             bg="teal.300"
// // // // // // // // // // // // // //           />
// // // // // // // // // // // // // //           <Box>
// // // // // // // // // // // // // //             <Text fontWeight="bold" fontSize="sm">Admin User</Text>
// // // // // // // // // // // // // //             <Text fontSize="xs" opacity={0.8}>Master Administrator</Text>
// // // // // // // // // // // // // //           </Box>
// // // // // // // // // // // // // //         </HStack>
        
// // // // // // // // // // // // // //         <HStack spacing={2}>
// // // // // // // // // // // // // //           <Tooltip label="Notifications" placement="bottom">
// // // // // // // // // // // // // //             <IconButton
// // // // // // // // // // // // // //               aria-label="Notifications"
// // // // // // // // // // // // // //               icon={<BellIcon />}
// // // // // // // // // // // // // //               size="sm"
// // // // // // // // // // // // // //               variant="ghost"
// // // // // // // // // // // // // //               color="white"
// // // // // // // // // // // // // //               _hover={{ bg: "teal.400" }}
// // // // // // // // // // // // // //             />
// // // // // // // // // // // // // //           </Tooltip>
// // // // // // // // // // // // // //           <Tooltip label="Settings" placement="bottom">
// // // // // // // // // // // // // //             <IconButton
// // // // // // // // // // // // // //               aria-label="Settings"
// // // // // // // // // // // // // //               icon={<SettingsIcon />}
// // // // // // // // // // // // // //               size="sm"
// // // // // // // // // // // // // //               variant="ghost"
// // // // // // // // // // // // // //               color="white"
// // // // // // // // // // // // // //               _hover={{ bg: "teal.400" }}
// // // // // // // // // // // // // //             />
// // // // // // // // // // // // // //           </Tooltip>
// // // // // // // // // // // // // //           <Tooltip label="Help" placement="bottom">
// // // // // // // // // // // // // //             <IconButton
// // // // // // // // // // // // // //               aria-label="Help"
// // // // // // // // // // // // // //               icon={<QuestionIcon />}
// // // // // // // // // // // // // //               size="sm"
// // // // // // // // // // // // // //               variant="ghost"
// // // // // // // // // // // // // //               color="white"
// // // // // // // // // // // // // //               _hover={{ bg: "teal.400" }}
// // // // // // // // // // // // // //             />
// // // // // // // // // // // // // //           </Tooltip>
// // // // // // // // // // // // // //         </HStack>
// // // // // // // // // // // // // //       </Flex>

// // // // // // // // // // // // // //       {/* Search Bar */}
// // // // // // // // // // // // // //       <Box p={4} borderBottomWidth="1px" borderColor={borderColor}>
// // // // // // // // // // // // // //         <InputGroup size="sm">
// // // // // // // // // // // // // //           <InputLeftElement pointerEvents="none">
// // // // // // // // // // // // // //             <SearchIcon color="gray.400" />
// // // // // // // // // // // // // //           </InputLeftElement>
// // // // // // // // // // // // // //           <Input
// // // // // // // // // // // // // //             placeholder="Search menu..."
// // // // // // // // // // // // // //             value={searchTerm}
// // // // // // // // // // // // // //             onChange={(e) => setSearchTerm(e.target.value)}
// // // // // // // // // // // // // //             bg={inputBg}
// // // // // // // // // // // // // //             borderRadius="md"
// // // // // // // // // // // // // //             _placeholder={{ color: "gray.400" }}
// // // // // // // // // // // // // //           />
// // // // // // // // // // // // // //         </InputGroup>
// // // // // // // // // // // // // //       </Box>

// // // // // // // // // // // // // //       {/* Main Navigation Sections */}
// // // // // // // // // // // // // //       <Box 
// // // // // // // // // // // // // //         flex="1" 
// // // // // // // // // // // // // //         overflowY="auto" 
// // // // // // // // // // // // // //         className="custom-scrollbar" 
// // // // // // // // // // // // // //         px={3} 
// // // // // // // // // // // // // //         py={4}
// // // // // // // // // // // // // //         css={{
// // // // // // // // // // // // // //           '&::-webkit-scrollbar': {
// // // // // // // // // // // // // //             width: '4px',
// // // // // // // // // // // // // //           },
// // // // // // // // // // // // // //           '&::-webkit-scrollbar-track': {
// // // // // // // // // // // // // //             width: '6px',
// // // // // // // // // // // // // //           },
// // // // // // // // // // // // // //           '&::-webkit-scrollbar-thumb': {
// // // // // // // // // // // // // //             background: 'gray',
// // // // // // // // // // // // // //             borderRadius: '24px',
// // // // // // // // // // // // // //           },
// // // // // // // // // // // // // //         }}
// // // // // // // // // // // // // //       >
// // // // // // // // // // // // // //         <VStack align="stretch" spacing={1}>
// // // // // // // // // // // // // //           {filteredSections.map((section, index) => (
// // // // // // // // // // // // // //             <SidebarSection 
// // // // // // // // // // // // // //               key={section.title} 
// // // // // // // // // // // // // //               title={section.title} 
// // // // // // // // // // // // // //               links={section.links} 
// // // // // // // // // // // // // //               defaultOpen={index === activeSection}
// // // // // // // // // // // // // //             />
// // // // // // // // // // // // // //           ))}
// // // // // // // // // // // // // //         </VStack>
// // // // // // // // // // // // // //       </Box>

// // // // // // // // // // // // // //       {/* Footer with Logout */}
// // // // // // // // // // // // // //       <Box p={4} borderTopWidth="1px" borderColor={borderColor}>
// // // // // // // // // // // // // //         <Button
// // // // // // // // // // // // // //           leftIcon={<FaSignOutAlt />}
// // // // // // // // // // // // // //           colorScheme="red"
// // // // // // // // // // // // // //           variant="outline"
// // // // // // // // // // // // // //           size="sm"
// // // // // // // // // // // // // //           width="full"
// // // // // // // // // // // // // //           onClick={() => alert("Logging Out...")}
// // // // // // // // // // // // // //         >
// // // // // // // // // // // // // //           Logout
// // // // // // // // // // // // // //         </Button>
// // // // // // // // // // // // // //       </Box>
// // // // // // // // // // // // // //     </Box>
// // // // // // // // // // // // // //   );

// // // // // // // // // // // // // //   // For mobile: render a drawer
// // // // // // // // // // // // // //   if (displayMode === "drawer") {
// // // // // // // // // // // // // //     return (
// // // // // // // // // // // // // //       <>
// // // // // // // // // // // // // //         <IconButton
// // // // // // // // // // // // // //           ref={btnRef}
// // // // // // // // // // // // // //           icon={<HamburgerIcon />}
// // // // // // // // // // // // // //           onClick={onOpen}
// // // // // // // // // // // // // //           position="fixed"
// // // // // // // // // // // // // //           top={4}
// // // // // // // // // // // // // //           left={4}
// // // // // // // // // // // // // //           zIndex={20}
// // // // // // // // // // // // // //           colorScheme="teal"
// // // // // // // // // // // // // //           aria-label="Open Menu"
// // // // // // // // // // // // // //           size="md"
// // // // // // // // // // // // // //         />
        
// // // // // // // // // // // // // //         <Drawer
// // // // // // // // // // // // // //           isOpen={isOpen}
// // // // // // // // // // // // // //           placement="left"
// // // // // // // // // // // // // //           onClose={onClose}
// // // // // // // // // // // // // //           finalFocusRef={btnRef}
// // // // // // // // // // // // // //           size={sidebarWidth}
// // // // // // // // // // // // // //         >
// // // // // // // // // // // // // //           <DrawerOverlay />
// // // // // // // // // // // // // //           <DrawerContent>
// // // // // // // // // // // // // //             <DrawerCloseButton color="white" />
// // // // // // // // // // // // // //             <DrawerBody p={0}>
// // // // // // // // // // // // // //               <SidebarContent />
// // // // // // // // // // // // // //             </DrawerBody>
// // // // // // // // // // // // // //           </DrawerContent>
// // // // // // // // // // // // // //         </Drawer>
// // // // // // // // // // // // // //       </>
// // // // // // // // // // // // // //     );
// // // // // // // // // // // // // //   }

// // // // // // // // // // // // // //   // For desktop: render a fixed sidebar
// // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // //     <Box
// // // // // // // // // // // // // //       as="aside"
// // // // // // // // // // // // // //       position="fixed"
// // // // // // // // // // // // // //       left={0}
// // // // // // // // // // // // // //       top={0}
// // // // // // // // // // // // // //       width={sidebarWidth}
// // // // // // // // // // // // // //       height="100vh"
// // // // // // // // // // // // // //       bg={bg}
// // // // // // // // // // // // // //       borderRightWidth="1px"
// // // // // // // // // // // // // //       borderColor={borderColor}
// // // // // // // // // // // // // //       boxShadow="sm"
// // // // // // // // // // // // // //       zIndex={10}
// // // // // // // // // // // // // //     >
// // // // // // // // // // // // // //       <SidebarContent />
// // // // // // // // // // // // // //     </Box>
// // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // };

// // // // // // // // // // // // // // export default MasterAdminSidebar;





// // // // // // // // // // // // // // // import * as React from "react"
// // // // // // // // // // // // // // // import Link from "next/link"
// // // // // // // // // // // // // // // import { usePathname } from "next/navigation"
// // // // // // // // // // // // // // // import {
// // // // // // // // // // // // // // //   Activity,
// // // // // // // // // // // // // // //   Bell,
// // // // // // // // // // // // // // //   BookOpen,
// // // // // // // // // // // // // // //   ChevronDown,
// // // // // // // // // // // // // // //   ChevronUp,
// // // // // // // // // // // // // // //   Cog,
// // // // // // // // // // // // // // //   FileText,
// // // // // // // // // // // // // // //   HelpCircle,
// // // // // // // // // // // // // // //   LifeBuoy,
// // // // // // // // // // // // // // //   LogOut,
// // // // // // // // // // // // // // //   Menu,
// // // // // // // // // // // // // // //   Search,
// // // // // // // // // // // // // // //   Users,
// // // // // // // // // // // // // // //   X,
// // // // // // // // // // // // // // // } from "lucide-react"

// // // // // // // // // // // // // // // import { cn } from "@/lib/utils"
// // // // // // // // // // // // // // // import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// // // // // // // // // // // // // // // import { Badge } from "@/components/ui/badge"
// // // // // // // // // // // // // // // import { Button } from "@/components/ui/button"
// // // // // // // // // // // // // // // import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
// // // // // // // // // // // // // // // import { Input } from "@/components/ui/input"
// // // // // // // // // // // // // // // import { ScrollArea } from "@/components/ui/scroll-area"
// // // // // // // // // // // // // // // import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

// // // // // // // // // // // // // // // type SidebarSectionProps = {
// // // // // // // // // // // // // // //   title: string
// // // // // // // // // // // // // // //   icon: React.ElementType
// // // // // // // // // // // // // // //   links: {
// // // // // // // // // // // // // // //     path: string
// // // // // // // // // // // // // // //     label: string
// // // // // // // // // // // // // // //     badge?: string
// // // // // // // // // // // // // // //   }[]
// // // // // // // // // // // // // // // }

// // // // // // // // // // // // // // // const SidebarSection = ({ title, icon: Icon, links }: SidebarSectionProps) => {
// // // // // // // // // // // // // // //   const [isOpen, setIsOpen] = React.useState(false)
// // // // // // // // // // // // // // //   const pathname = usePathname()

// // // // // // // // // // // // // // //   // Check if any link in this section is active
// // // // // // // // // // // // // // //   const isAnyLinkActive = links.some((link) => pathname === link.path)

// // // // // // // // // // // // // // //   // Open the section by default if any link is active
// // // // // // // // // // // // // // //   React.useEffect(() => {
// // // // // // // // // // // // // // //     if (isAnyLinkActive) {
// // // // // // // // // // // // // // //       setIsOpen(true)
// // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // //   }, [isAnyLinkActive])

// // // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // // //     <div className="border-b border-border/40 pb-2 mb-2 last:border-b-0">
// // // // // // // // // // // // // // //       <Collapsible open={isOpen} onOpenChange={setIsOpen}>
// // // // // // // // // // // // // // //         <CollapsibleTrigger className="flex w-full justify-between items-center p-3 rounded-lg hover:bg-accent/50 transition-colors">
// // // // // // // // // // // // // // //           <div className="flex items-center gap-2">
// // // // // // // // // // // // // // //             <Icon className="h-5 w-5 text-muted-foreground" />
// // // // // // // // // // // // // // //             <h3 className="text-sm font-medium">{title}</h3>
// // // // // // // // // // // // // // //           </div>
// // // // // // // // // // // // // // //           <div className="text-muted-foreground">
// // // // // // // // // // // // // // //             {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
// // // // // // // // // // // // // // //           </div>
// // // // // // // // // // // // // // //         </CollapsibleTrigger>
// // // // // // // // // // // // // // //         <CollapsibleContent className="animate-in slide-in-from-top-2">
// // // // // // // // // // // // // // //           <div className="mt-1 ml-2 space-y-1">
// // // // // // // // // // // // // // //             {links.map(({ path, label, badge }) => (
// // // // // // // // // // // // // // //               <Link
// // // // // // // // // // // // // // //                 key={path}
// // // // // // // // // // // // // // //                 href={path}
// // // // // // // // // // // // // // //                 className={cn(
// // // // // // // // // // // // // // //                   "flex items-center justify-between rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent/50",
// // // // // // // // // // // // // // //                   pathname === path ? "bg-primary text-primary-foreground font-medium" : "text-muted-foreground",
// // // // // // // // // // // // // // //                 )}
// // // // // // // // // // // // // // //               >
// // // // // // // // // // // // // // //                 <span>{label}</span>
// // // // // // // // // // // // // // //                 {badge && (
// // // // // // // // // // // // // // //                   <Badge variant="destructive" className="ml-auto text-xs">
// // // // // // // // // // // // // // //                     {badge}
// // // // // // // // // // // // // // //                   </Badge>
// // // // // // // // // // // // // // //                 )}
// // // // // // // // // // // // // // //               </Link>
// // // // // // // // // // // // // // //             ))}
// // // // // // // // // // // // // // //           </div>
// // // // // // // // // // // // // // //         </CollapsibleContent>
// // // // // // // // // // // // // // //       </Collapsible>
// // // // // // // // // // // // // // //     </div>
// // // // // // // // // // // // // // //   )
// // // // // // // // // // // // // // // }

// // // // // // // // // // // // // // // export default function MasterAdminSidebar() {
// // // // // // // // // // // // // // //   const [searchTerm, setSearchTerm] = React.useState("")

// // // // // // // // // // // // // // //   const sections: SidebarSectionProps[] = [
// // // // // // // // // // // // // // //     {
// // // // // // // // // // // // // // //       title: "User Management",
// // // // // // // // // // // // // // //       icon: Users,
// // // // // // // // // // // // // // //       links: [
// // // // // // // // // // // // // // //         { path: "/admin/user-management/create", label: "Create Users" },
// // // // // // // // // // // // // // //         { path: "/admin/user-management/update", label: "Update User Information" },
// // // // // // // // // // // // // // //         { path: "/admin/user-management/delete", label: "Delete Users" },
// // // // // // // // // // // // // // //         { path: "/admin/user-management/roles", label: "Manage Roles & Permissions" },
// // // // // // // // // // // // // // //         {
// // // // // // // // // // // // // // //           path: "/admin/user-management/teacher-approvals",
// // // // // // // // // // // // // // //           label: "Teacher Applications",
// // // // // // // // // // // // // // //           badge: "5",
// // // // // // // // // // // // // // //         },
// // // // // // // // // // // // // // //       ],
// // // // // // // // // // // // // // //     },
// // // // // // // // // // // // // // //     {
// // // // // // // // // // // // // // //       title: "Course and Content",
// // // // // // // // // // // // // // //       icon: BookOpen,
// // // // // // // // // // // // // // //       links: [
// // // // // // // // // // // // // // //         { path: "/admin/course-control/add-update-remove", label: "Manage Courses" },
// // // // // // // // // // // // // // //         { path: "/master-admin/videos/upload", label: "Video Materials" },
// // // // // // // // // // // // // // //         { path: "/admin/course-control/restrict-access", label: "Content Access" },
// // // // // // // // // // // // // // //         { path: "/admin/course-control/video-organization", label: "Video Organization" },
// // // // // // // // // // // // // // //       ],
// // // // // // // // // // // // // // //     },
// // // // // // // // // // // // // // //     {
// // // // // // // // // // // // // // //       title: "Analytics and Reports",
// // // // // // // // // // // // // // //       icon: Activity,
// // // // // // // // // // // // // // //       links: [
// // // // // // // // // // // // // // //         { path: "/admin/analytics/student-performance", label: "Student Performance" },
// // // // // // // // // // // // // // //         { path: "/admin/analytics/teacher-effectiveness", label: "Teacher Effectiveness" },
// // // // // // // // // // // // // // //         { path: "/admin/analytics/platform-usage", label: "Platform Usage Reports" },
// // // // // // // // // // // // // // //       ],
// // // // // // // // // // // // // // //     },
// // // // // // // // // // // // // // //     {
// // // // // // // // // // // // // // //       title: "System Settings",
// // // // // // // // // // // // // // //       icon: Cog,
// // // // // // // // // // // // // // //       links: [
// // // // // // // // // // // // // // //         { path: "/admin/settings/payment-gateway", label: "Payment Gateway" },
// // // // // // // // // // // // // // //         { path: "/admin/settings/notification-templates", label: "Notification Templates" },
// // // // // // // // // // // // // // //         { path: "/admin/settings/platform-preferences", label: "Platform Preferences" },
// // // // // // // // // // // // // // //       ],
// // // // // // // // // // // // // // //     },
// // // // // // // // // // // // // // //     {
// // // // // // // // // // // // // // //       title: "Audit and Logs",
// // // // // // // // // // // // // // //       icon: FileText,
// // // // // // // // // // // // // // //       links: [
// // // // // // // // // // // // // // //         { path: "/admin/audit-logs/view-logs", label: "View System Logs" },
// // // // // // // // // // // // // // //         { path: "/admin/audit-logs/accountability", label: "Accountability & Transparency" },
// // // // // // // // // // // // // // //       ],
// // // // // // // // // // // // // // //     },
// // // // // // // // // // // // // // //     {
// // // // // // // // // // // // // // //       title: "Support Management",
// // // // // // // // // // // // // // //       icon: LifeBuoy,
// // // // // // // // // // // // // // //       links: [
// // // // // // // // // // // // // // //         { path: "/admin/support/manage-requests", label: "Manage Support Requests", badge: "12" },
// // // // // // // // // // // // // // //         { path: "/admin/support/knowledge-base", label: "Knowledge Base" },
// // // // // // // // // // // // // // //         { path: "/admin/support/faq", label: "FAQ Management" },
// // // // // // // // // // // // // // //       ],
// // // // // // // // // // // // // // //     },
// // // // // // // // // // // // // // //   ]

// // // // // // // // // // // // // // //   // Filter sections based on search term
// // // // // // // // // // // // // // //   const filteredSections = sections
// // // // // // // // // // // // // // //     .map((section) => ({
// // // // // // // // // // // // // // //       ...section,
// // // // // // // // // // // // // // //       links: section.links.filter((link) => link.label.toLowerCase().includes(searchTerm.toLowerCase())),
// // // // // // // // // // // // // // //     }))
// // // // // // // // // // // // // // //     .filter((section) => section.links.length > 0)

// // // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // // //     <>
// // // // // // // // // // // // // // //       {/* Mobile Sidebar Trigger */}
// // // // // // // // // // // // // // //       <div className="fixed top-4 left-4 z-40 md:hidden">
// // // // // // // // // // // // // // //         <Sheet>
// // // // // // // // // // // // // // //           <SheetTrigger asChild>
// // // // // // // // // // // // // // //             <Button variant="outline" size="icon" className="bg-background">
// // // // // // // // // // // // // // //               <Menu className="h-5 w-5" />
// // // // // // // // // // // // // // //               <span className="sr-only">Toggle Menu</span>
// // // // // // // // // // // // // // //             </Button>
// // // // // // // // // // // // // // //           </SheetTrigger>
// // // // // // // // // // // // // // //           <SheetContent side="left" className="p-0 w-[300px]">
// // // // // // // // // // // // // // //             <MobileSidebar sections={filteredSections} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
// // // // // // // // // // // // // // //           </SheetContent>
// // // // // // // // // // // // // // //         </Sheet>
// // // // // // // // // // // // // // //       </div>

// // // // // // // // // // // // // // //       {/* Desktop Sidebar */}
// // // // // // // // // // // // // // //       <div className="hidden md:flex h-screen w-[300px] flex-col fixed top-0 left-0 border-r bg-card text-card-foreground shadow-sm">
// // // // // // // // // // // // // // //         <DesktopSidebar sections={filteredSections} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
// // // // // // // // // // // // // // //       </div>
// // // // // // // // // // // // // // //     </>
// // // // // // // // // // // // // // //   )
// // // // // // // // // // // // // // // }

// // // // // // // // // // // // // // // interface SidebarContentProps {
// // // // // // // // // // // // // // //   sections: SidebarSectionProps[]
// // // // // // // // // // // // // // //   searchTerm: string
// // // // // // // // // // // // // // //   setSearchTerm: React.Dispatch<React.SetStateAction<string>>
// // // // // // // // // // // // // // // }

// // // // // // // // // // // // // // // function MobileSidebar({ sections, searchTerm, setSearchTerm }: SidebarContentProps) {
// // // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // // //     <div className="flex h-full flex-col">
// // // // // // // // // // // // // // //       {/* Admin Profile Section */}
// // // // // // // // // // // // // // //       <div className="flex items-center gap-3 p-4 border-b">
// // // // // // // // // // // // // // //         <Avatar>
// // // // // // // // // // // // // // //           <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Admin" />
// // // // // // // // // // // // // // //           <AvatarFallback>AD</AvatarFallback>
// // // // // // // // // // // // // // //         </Avatar>
// // // // // // // // // // // // // // //         <div>
// // // // // // // // // // // // // // //           <p className="font-medium text-sm">Admin Name</p>
// // // // // // // // // // // // // // //           <p className="text-xs text-muted-foreground">Master Admin</p>
// // // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // // //         <div className="ml-auto flex items-center gap-2">
// // // // // // // // // // // // // // //           <Button variant="ghost" size="icon" className="relative">
// // // // // // // // // // // // // // //             <Bell className="h-5 w-5" />
// // // // // // // // // // // // // // //             <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-destructive text-[10px] text-destructive-foreground">
// // // // // // // // // // // // // // //               3
// // // // // // // // // // // // // // //             </span>
// // // // // // // // // // // // // // //           </Button>
// // // // // // // // // // // // // // //           <Sheet>
// // // // // // // // // // // // // // //             <SheetTrigger asChild>
// // // // // // // // // // // // // // //               <Button variant="ghost" size="icon">
// // // // // // // // // // // // // // //                 <X className="h-5 w-5" />
// // // // // // // // // // // // // // //               </Button>
// // // // // // // // // // // // // // //             </SheetTrigger>
// // // // // // // // // // // // // // //           </Sheet>
// // // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // // //       </div>

// // // // // // // // // // // // // // //       {/* Search Bar */}
// // // // // // // // // // // // // // //       <div className="p-4 border-b">
// // // // // // // // // // // // // // //         <div className="relative">
// // // // // // // // // // // // // // //           <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
// // // // // // // // // // // // // // //           <Input
// // // // // // // // // // // // // // //             type="search"
// // // // // // // // // // // // // // //             placeholder="Search..."
// // // // // // // // // // // // // // //             className="pl-8 bg-muted/50"
// // // // // // // // // // // // // // //             value={searchTerm}
// // // // // // // // // // // // // // //             onChange={(e) => setSearchTerm(e.target.value)}
// // // // // // // // // // // // // // //           />
// // // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // // //       </div>

// // // // // // // // // // // // // // //       {/* Main Sections */}
// // // // // // // // // // // // // // //       <ScrollArea className="flex-1 px-4 py-2">
// // // // // // // // // // // // // // //         {sections.map((section) => (
// // // // // // // // // // // // // // //           <SidebarSection key={section.title} title={section.title} icon={section.icon} links={section.links} />
// // // // // // // // // // // // // // //         ))}
// // // // // // // // // // // // // // //       </ScrollArea>

// // // // // // // // // // // // // // //       {/* Logout Button */}
// // // // // // // // // // // // // // //       <div className="p-4 border-t mt-auto">
// // // // // // // // // // // // // // //         <Button variant="destructive" className="w-full" onClick={() => alert("Logging Out...")}>
// // // // // // // // // // // // // // //           <LogOut className="mr-2 h-4 w-4" />
// // // // // // // // // // // // // // //           Logout
// // // // // // // // // // // // // // //         </Button>
// // // // // // // // // // // // // // //       </div>
// // // // // // // // // // // // // // //     </div>
// // // // // // // // // // // // // // //   )
// // // // // // // // // // // // // // // }

// // // // // // // // // // // // // // // function DesktopSidebar({ sections, searchTerm, setSearchTerm }: SidebarContentProps) {
// // // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // // //     <>
// // // // // // // // // // // // // // //       {/* Admin Profile Section */}
// // // // // // // // // // // // // // //       <div className="flex items-center gap-3 p-4 border-b">
// // // // // // // // // // // // // // //         <Avatar>
// // // // // // // // // // // // // // //           <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Admin" />
// // // // // // // // // // // // // // //           <AvatarFallback>AD</AvatarFallback>
// // // // // // // // // // // // // // //         </Avatar>
// // // // // // // // // // // // // // //         <div>
// // // // // // // // // // // // // // //           <p className="font-medium text-sm">Admin Name</p>
// // // // // // // // // // // // // // //           <p className="text-xs text-muted-foreground">Master Admin</p>
// // // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // // //         <Button variant="ghost" size="icon" className="ml-auto relative">
// // // // // // // // // // // // // // //           <Bell className="h-5 w-5" />
// // // // // // // // // // // // // // //           <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-destructive text-[10px] text-destructive-foreground">
// // // // // // // // // // // // // // //             3
// // // // // // // // // // // // // // //           </span>
// // // // // // // // // // // // // // //         </Button>
// // // // // // // // // // // // // // //       </div>

// // // // // // // // // // // // // // //       {/* Search Bar */}
// // // // // // // // // // // // // // //       <div className="p-4 border-b">
// // // // // // // // // // // // // // //         <div className="relative">
// // // // // // // // // // // // // // //           <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
// // // // // // // // // // // // // // //           <Input
// // // // // // // // // // // // // // //             type="search"
// // // // // // // // // // // // // // //             placeholder="Search..."
// // // // // // // // // // // // // // //             className="pl-8 bg-muted/50"
// // // // // // // // // // // // // // //             value={searchTerm}
// // // // // // // // // // // // // // //             onChange={(e) => setSearchTerm(e.target.value)}
// // // // // // // // // // // // // // //           />
// // // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // // //       </div>

// // // // // // // // // // // // // // //       {/* Main Sections */}
// // // // // // // // // // // // // // //       <ScrollArea className="flex-1 px-4 py-2">
// // // // // // // // // // // // // // //         {sections.map((section) => (
// // // // // // // // // // // // // // //           <SidebarSection key={section.title} title={section.title} icon={section.icon} links={section.links} />
// // // // // // // // // // // // // // //         ))}
// // // // // // // // // // // // // // //       </ScrollArea>

// // // // // // // // // // // // // // //       {/* Help & Logout */}
// // // // // // // // // // // // // // //       <div className="p-4 border-t mt-auto">
// // // // // // // // // // // // // // //         <div className="flex items-center gap-2 mb-4 p-2 rounded-md hover:bg-accent/50 cursor-pointer">
// // // // // // // // // // // // // // //           <HelpCircle className="h-5 w-5 text-muted-foreground" />
// // // // // // // // // // // // // // //           <span className="text-sm">Help & Documentation</span>
// // // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // // //         <Button variant="destructive" className="w-full" onClick={() => alert("Logging Out...")}>
// // // // // // // // // // // // // // //           <LogOut className="mr-2 h-4 w-4" />
// // // // // // // // // // // // // // //           Logout
// // // // // // // // // // // // // // //         </Button>
// // // // // // // // // // // // // // //       </div>
// // // // // // // // // // // // // // //     </>
// // // // // // // // // // // // // // //   )
// // // // // // // // // // // // // // // }




// // // // // // // // // // // // // import React, { useState, useRef, useEffect } from "react";
// // // // // // // // // // // // // import { NavLink, useLocation } from "react-router-dom";
// // // // // // // // // // // // // import {
// // // // // // // // // // // // //   Box,
// // // // // // // // // // // // //   VStack,
// // // // // // // // // // // // //   Heading,
// // // // // // // // // // // // //   Text,
// // // // // // // // // // // // //   Collapse,
// // // // // // // // // // // // //   IconButton,
// // // // // // // // // // // // //   Input,
// // // // // // // // // // // // //   Badge,
// // // // // // // // // // // // //   Avatar,
// // // // // // // // // // // // //   Button,
// // // // // // // // // // // // //   Flex,
// // // // // // // // // // // // //   Drawer,
// // // // // // // // // // // // //   DrawerBody,
// // // // // // // // // // // // //   DrawerHeader,
// // // // // // // // // // // // //   DrawerOverlay,
// // // // // // // // // // // // //   DrawerContent,
// // // // // // // // // // // // //   DrawerCloseButton,
// // // // // // // // // // // // //   useDisclosure,
// // // // // // // // // // // // //   InputGroup,
// // // // // // // // // // // // //   InputLeftElement,
// // // // // // // // // // // // //   Divider,
// // // // // // // // // // // // //   useColorModeValue,
// // // // // // // // // // // // //   Tooltip,
// // // // // // // // // // // // //   useBreakpointValue,
// // // // // // // // // // // // //   HStack,
// // // // // // // // // // // // //   Menu,
// // // // // // // // // // // // //   MenuButton,
// // // // // // // // // // // // //   MenuList,
// // // // // // // // // // // // //   MenuItem
// // // // // // // // // // // // // } from "@chakra-ui/react";
// // // // // // // // // // // // // import {
// // // // // // // // // // // // //   ChevronDownIcon,
// // // // // // // // // // // // //   ChevronUpIcon,
// // // // // // // // // // // // //   HamburgerIcon,
// // // // // // // // // // // // //   BellIcon,
// // // // // // // // // // // // //   SearchIcon,
// // // // // // // // // // // // //   SettingsIcon,
// // // // // // // // // // // // //   QuestionIcon,
// // // // // // // // // // // // //   ChevronRightIcon
// // // // // // // // // // // // // } from "@chakra-ui/icons";
// // // // // // // // // // // // // import {
// // // // // // // // // // // // //   FaUsers,
// // // // // // // // // // // // //   FaBook,
// // // // // // // // // // // // //   FaChartBar,
// // // // // // // // // // // // //   FaCog,
// // // // // // // // // // // // //   FaClipboardList,
// // // // // // // // // // // // //   FaHeadset,
// // // // // // // // // // // // //   FaSignOutAlt,
// // // // // // // // // // // // //   FaUserPlus,
// // // // // // // // // // // // //   FaUserEdit,
// // // // // // // // // // // // //   FaUserMinus,
// // // // // // // // // // // // //   FaUserShield,
// // // // // // // // // // // // //   FaUserCheck,
// // // // // // // // // // // // //   FaBookOpen,
// // // // // // // // // // // // //   FaVideo,
// // // // // // // // // // // // //   FaLock,
// // // // // // // // // // // // //   FaFolderOpen,
// // // // // // // // // // // // //   FaChartLine,
// // // // // // // // // // // // //   FaChalkboardTeacher,
// // // // // // // // // // // // //   FaDesktop,
// // // // // // // // // // // // //   FaCreditCard,
// // // // // // // // // // // // //   FaBell,
// // // // // // // // // // // // //   FaPalette,
// // // // // // // // // // // // //   FaHistory,
// // // // // // // // // // // // //   FaShieldAlt,
// // // // // // // // // // // // //   FaTicketAlt
// // // // // // // // // // // // // } from "react-icons/fa";

// // // // // // // // // // // // // // Map of section titles to their respective icons
// // // // // // // // // // // // // const sectionIcons = {
// // // // // // // // // // // // //   "User Management": FaUsers,
// // // // // // // // // // // // //   "Course and Content Control": FaBook,
// // // // // // // // // // // // //   "Analytics and Reports": FaChartBar,
// // // // // // // // // // // // //   "System Settings": FaCog,
// // // // // // // // // // // // //   "Audit and Logs": FaClipboardList,
// // // // // // // // // // // // //   "Support Management": FaHeadset
// // // // // // // // // // // // // };

// // // // // // // // // // // // // // Map of link paths to their respective icons
// // // // // // // // // // // // // const linkIcons = {
// // // // // // // // // // // // //   "/admin/user-management/create": FaUserPlus,
// // // // // // // // // // // // //   "/admin/user-management/update": FaUserEdit,
// // // // // // // // // // // // //   "/admin/user-management/delete": FaUserMinus,
// // // // // // // // // // // // //   "/admin/user-management/roles": FaUserShield,
// // // // // // // // // // // // //   "/admin/user-management/teacher-approvals": FaUserCheck,
// // // // // // // // // // // // //   "/admin/course-control/add-update-remove": FaBookOpen,
// // // // // // // // // // // // //   "/master-admin/videos/upload": FaVideo,
// // // // // // // // // // // // //   "/admin/course-control/restrict-access": FaLock,
// // // // // // // // // // // // //   "/admin/course-control/video-organization": FaFolderOpen,
// // // // // // // // // // // // //   "/admin/analytics/student-performance": FaChartLine,
// // // // // // // // // // // // //   "/admin/analytics/teacher-effectiveness": FaChalkboardTeacher,
// // // // // // // // // // // // //   "/admin/analytics/platform-usage": FaDesktop,
// // // // // // // // // // // // //   "/admin/settings/payment-gateway": FaCreditCard,
// // // // // // // // // // // // //   "/admin/settings/notification-templates": FaBell,
// // // // // // // // // // // // //   "/admin/settings/platform-preferences": FaPalette,
// // // // // // // // // // // // //   "/admin/audit-logs/view-logs": FaHistory,
// // // // // // // // // // // // //   "/admin/audit-logs/accountability": FaShieldAlt,
// // // // // // // // // // // // //   "/admin/support/manage-requests": FaTicketAlt
// // // // // // // // // // // // // };

// // // // // // // // // // // // // const SidebarSection = ({ title, links, defaultOpen = false }) => {
// // // // // // // // // // // // //   const [isOpen, setIsOpen] = useState(defaultOpen);
// // // // // // // // // // // // //   const location = useLocation();
// // // // // // // // // // // // //   const SectionIcon = sectionIcons[title] || FaBook;
// // // // // // // // // // // // //   const bg = useColorModeValue("gray.50", "gray.800");
// // // // // // // // // // // // //   const hoverBg = useColorModeValue("gray.100", "gray.700");
// // // // // // // // // // // // //   const activeBg = useColorModeValue("teal.50", "teal.900");
// // // // // // // // // // // // //   const activeColor = useColorModeValue("teal.700", "teal.200");
// // // // // // // // // // // // //   const borderColor = useColorModeValue("gray.200", "gray.700");
  
// // // // // // // // // // // // //   // Check if any link in this section is active
// // // // // // // // // // // // //   const hasActiveLink = links.some(link => location.pathname === link.path);
  
// // // // // // // // // // // // //   // If a link in this section is active, open the section
// // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // //     if (hasActiveLink && !isOpen) {
// // // // // // // // // // // // //       setIsOpen(true);
// // // // // // // // // // // // //     }
// // // // // // // // // // // // //   }, [hasActiveLink, isOpen]);

// // // // // // // // // // // // //   return (
// // // // // // // // // // // // //     <Box width="100%" mb={4} borderBottom="1px" borderColor={borderColor} pb={2}>
// // // // // // // // // // // // //       <Flex
// // // // // // // // // // // // //         justify="space-between"
// // // // // // // // // // // // //         align="center"
// // // // // // // // // // // // //         p={3}
// // // // // // // // // // // // //         borderRadius="md"
// // // // // // // // // // // // //         bg={hasActiveLink ? activeBg : bg}
// // // // // // // // // // // // //         cursor="pointer"
// // // // // // // // // // // // //         onClick={() => setIsOpen(!isOpen)}
// // // // // // // // // // // // //         _hover={{ bg: hoverBg }}
// // // // // // // // // // // // //         transition="all 0.2s"
// // // // // // // // // // // // //       >
// // // // // // // // // // // // //         <HStack spacing={3}>
// // // // // // // // // // // // //           <Box color={hasActiveLink ? activeColor : "gray.500"}>
// // // // // // // // // // // // //             <SectionIcon />
// // // // // // // // // // // // //           </Box>
// // // // // // // // // // // // //           <Heading size="sm" fontWeight="medium" color={hasActiveLink ? activeColor : "inherit"}>
// // // // // // // // // // // // //             {title}
// // // // // // // // // // // // //           </Heading>
// // // // // // // // // // // // //         </HStack>
// // // // // // // // // // // // //         <IconButton
// // // // // // // // // // // // //           icon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
// // // // // // // // // // // // //           variant="ghost"
// // // // // // // // // // // // //           size="sm"
// // // // // // // // // // // // //           aria-label={`Toggle ${title}`}
// // // // // // // // // // // // //           color={hasActiveLink ? activeColor : "gray.500"}
// // // // // // // // // // // // //         />
// // // // // // // // // // // // //       </Flex>

// // // // // // // // // // // // //       <Collapse in={isOpen} animateOpacity>
// // // // // // // // // // // // //         <VStack align="stretch" spacing={1} mt={2} pl={2}>
// // // // // // // // // // // // //           {links.map(({ path, label, badge }) => {
// // // // // // // // // // // // //             const isActive = location.pathname === path;
// // // // // // // // // // // // //             const LinkIcon = linkIcons[path] || ChevronRightIcon;
            
// // // // // // // // // // // // //             return (
// // // // // // // // // // // // //               <NavLink
// // // // // // // // // // // // //                 key={path}
// // // // // // // // // // // // //                 to={path}
// // // // // // // // // // // // //                 style={{ textDecoration: 'none', width: '100%' }}
// // // // // // // // // // // // //               >
// // // // // // // // // // // // //                 <Flex
// // // // // // // // // // // // //                   p={2}
// // // // // // // // // // // // //                   pl={4}
// // // // // // // // // // // // //                   borderRadius="md"
// // // // // // // // // // // // //                   align="center"
// // // // // // // // // // // // //                   bg={isActive ? activeBg : "transparent"}
// // // // // // // // // // // // //                   color={isActive ? activeColor : "inherit"}
// // // // // // // // // // // // //                   fontWeight={isActive ? "semibold" : "normal"}
// // // // // // // // // // // // //                   _hover={{ bg: hoverBg }}
// // // // // // // // // // // // //                   transition="all 0.2s"
// // // // // // // // // // // // //                 >
// // // // // // // // // // // // //                   <Box mr={3} fontSize="sm" color={isActive ? activeColor : "gray.500"}>
// // // // // // // // // // // // //                     <LinkIcon />
// // // // // // // // // // // // //                   </Box>
// // // // // // // // // // // // //                   <Text fontSize="sm" noOfLines={1}>{label}</Text>
// // // // // // // // // // // // //                   {badge && (
// // // // // // // // // // // // //                     <Badge 
// // // // // // // // // // // // //                       ml="auto" 
// // // // // // // // // // // // //                       colorScheme="red" 
// // // // // // // // // // // // //                       borderRadius="full" 
// // // // // // // // // // // // //                       px={2}
// // // // // // // // // // // // //                     >
// // // // // // // // // // // // //                       {badge}
// // // // // // // // // // // // //                     </Badge>
// // // // // // // // // // // // //                   )}
// // // // // // // // // // // // //                 </Flex>
// // // // // // // // // // // // //               </NavLink>
// // // // // // // // // // // // //             );
// // // // // // // // // // // // //           })}
// // // // // // // // // // // // //         </VStack>
// // // // // // // // // // // // //       </Collapse>
// // // // // // // // // // // // //     </Box>
// // // // // // // // // // // // //   );
// // // // // // // // // // // // // };

// // // // // // // // // // // // // const MasterAdminSidebar = () => {
// // // // // // // // // // // // //   const { isOpen, onOpen, onClose } = useDisclosure();
// // // // // // // // // // // // //   const [searchTerm, setSearchTerm] = useState("");
// // // // // // // // // // // // //   const btnRef = useRef();
// // // // // // // // // // // // //   const location = useLocation();
  
// // // // // // // // // // // // //   // Responsive values
// // // // // // // // // // // // //   const sidebarWidth = useBreakpointValue({ base: "full", md: "300px" });
// // // // // // // // // // // // //   const isMobile = useBreakpointValue({ base: true, md: false });
// // // // // // // // // // // // //   const displayMode = useBreakpointValue({ base: "drawer", md: "sidebar" });
  
// // // // // // // // // // // // //   // Color mode values
// // // // // // // // // // // // //   const bg = useColorModeValue("white", "gray.900");
// // // // // // // // // // // // //   const borderColor = useColorModeValue("gray.200", "gray.700");
// // // // // // // // // // // // //   const inputBg = useColorModeValue("gray.100", "gray.700");
// // // // // // // // // // // // //   const headerBg = useColorModeValue("teal.500", "teal.600");
// // // // // // // // // // // // //   const headerColor = useColorModeValue("white", "white");

// // // // // // // // // // // // //   const sections = [
// // // // // // // // // // // // //     {
// // // // // // // // // // // // //       title: "User Management",
// // // // // // // // // // // // //       links: [
// // // // // // // // // // // // //         { path: "/master-admin/create/user", label: "Teacher Management" },
// // // // // // // // // // // // //         { path: "/admin/user-management/roles", label: "Manage Roles & Permissions" },
// // // // // // // // // // // // //         {
// // // // // // // // // // // // //           path: "/admin/user-management/teacher-approvals",
// // // // // // // // // // // // //           label: "Teacher Applications",
// // // // // // // // // // // // //           // badge: "5"
// // // // // // // // // // // // //         },
// // // // // // // // // // // // //       ],
// // // // // // // // // // // // //     },
// // // // // // // // // // // // //     {
// // // // // // // // // // // // //       title: "Course and Content Control",
// // // // // // // // // // // // //       links: [
// // // // // // // // // // // // //         { path: "/admin/course-control/add-update-remove", label: "Manage Courses" },
// // // // // // // // // // // // //         { path: "/master-admin/videos/upload", label: "Video & Materials" },
// // // // // // // // // // // // //         { path: "/admin/course-control/restrict-access", label: "Content Access" },
// // // // // // // // // // // // //         { path: "/admin/course-control/video-organization", label: "Video Organization" },
// // // // // // // // // // // // //       ],
// // // // // // // // // // // // //     },
// // // // // // // // // // // // //     {
// // // // // // // // // // // // //       title: "Analytics and Reports",
// // // // // // // // // // // // //       links: [
// // // // // // // // // // // // //         { path: "/admin/analytics/student-performance", label: "Student Performance" },
// // // // // // // // // // // // //         { path: "/admin/analytics/teacher-effectiveness", label: "Teacher Effectiveness" },
// // // // // // // // // // // // //         { path: "/admin/analytics/platform-usage", label: "Platform Usage Reports" },
// // // // // // // // // // // // //       ],
// // // // // // // // // // // // //     },
// // // // // // // // // // // // //     {
// // // // // // // // // // // // //       title: "System Settings",
// // // // // // // // // // // // //       links: [
// // // // // // // // // // // // //         { path: "/admin/settings/payment-gateway", label: "Payment Gateway" },
// // // // // // // // // // // // //         { path: "/admin/settings/notification-templates", label: "Notification Templates" },
// // // // // // // // // // // // //         { path: "/admin/settings/platform-preferences", label: "Platform Preferences" },
// // // // // // // // // // // // //       ],
// // // // // // // // // // // // //     },
// // // // // // // // // // // // //     {
// // // // // // // // // // // // //       title: "Audit and Logs",
// // // // // // // // // // // // //       links: [
// // // // // // // // // // // // //         { path: "/admin/audit-logs/view-logs", label: "System Logs" },
// // // // // // // // // // // // //         { path: "/admin/audit-logs/accountability", label: "Accountability" },
// // // // // // // // // // // // //       ],
// // // // // // // // // // // // //     },
// // // // // // // // // // // // //     {
// // // // // // // // // // // // //       title: "Support Management",
// // // // // // // // // // // // //       links: [
// // // // // // // // // // // // //         { path: "/admin/support/manage-requests", label: "Support Requests", badge: "12" }
// // // // // // // // // // // // //       ],
// // // // // // // // // // // // //     },
// // // // // // // // // // // // //   ];

// // // // // // // // // // // // //   // Filter sections based on search term
// // // // // // // // // // // // //   const filteredSections = sections.map((section) => ({
// // // // // // // // // // // // //     ...section,
// // // // // // // // // // // // //     links: section.links.filter((link) =>
// // // // // // // // // // // // //       link.label.toLowerCase().includes(searchTerm.toLowerCase())
// // // // // // // // // // // // //     ),
// // // // // // // // // // // // //   })).filter(section => section.links.length > 0);

// // // // // // // // // // // // //   // Find which section is active based on current path
// // // // // // // // // // // // //   const activeSection = sections.findIndex(section => 
// // // // // // // // // // // // //     section.links.some(link => link.path === location.pathname)
// // // // // // // // // // // // //   );

// // // // // // // // // // // // //   const SidebarContent = () => (
// // // // // // // // // // // // //     <Flex height="100%" direction="column">
// // // // // // // // // // // // //       {/* Admin Profile Section */}
// // // // // // // // // // // // //       <Flex
// // // // // // // // // // // // //         bg={headerBg}
// // // // // // // // // // // // //         color={headerColor}
// // // // // // // // // // // // //         p={4}
// // // // // // // // // // // // //         alignItems="center"
// // // // // // // // // // // // //         justifyContent="space-between"
// // // // // // // // // // // // //         borderBottomWidth="1px"
// // // // // // // // // // // // //         borderColor={borderColor}
// // // // // // // // // // // // //         flexShrink={0}
// // // // // // // // // // // // //       >
// // // // // // // // // // // // //         <HStack spacing={3}>
// // // // // // // // // // // // //           <Avatar 
// // // // // // // // // // // // //             name="Admin User" 
// // // // // // // // // // // // //             src="/path-to-admin-image.jpg" 
// // // // // // // // // // // // //             size="sm"
// // // // // // // // // // // // //             bg="teal.300"
// // // // // // // // // // // // //           />
// // // // // // // // // // // // //           <Box>
// // // // // // // // // // // // //             <Text fontWeight="bold" fontSize="sm">Admin User</Text>
// // // // // // // // // // // // //             <Text fontSize="xs" opacity={0.8}>Master Administrator</Text>
// // // // // // // // // // // // //           </Box>
// // // // // // // // // // // // //         </HStack>
        
// // // // // // // // // // // // //         <HStack spacing={2}>
// // // // // // // // // // // // //           <Tooltip label="Notifications" placement="bottom">
// // // // // // // // // // // // //             <IconButton
// // // // // // // // // // // // //               aria-label="Notifications"
// // // // // // // // // // // // //               icon={<BellIcon />}
// // // // // // // // // // // // //               size="sm"
// // // // // // // // // // // // //               variant="ghost"
// // // // // // // // // // // // //               color="white"
// // // // // // // // // // // // //               _hover={{ bg: "teal.400" }}
// // // // // // // // // // // // //             />
// // // // // // // // // // // // //           </Tooltip>
// // // // // // // // // // // // //           <Tooltip label="Settings" placement="bottom">
// // // // // // // // // // // // //             <IconButton
// // // // // // // // // // // // //               aria-label="Settings"
// // // // // // // // // // // // //               icon={<SettingsIcon />}
// // // // // // // // // // // // //               size="sm"
// // // // // // // // // // // // //               variant="ghost"
// // // // // // // // // // // // //               color="white"
// // // // // // // // // // // // //               _hover={{ bg: "teal.400" }}
// // // // // // // // // // // // //             />
// // // // // // // // // // // // //           </Tooltip>
// // // // // // // // // // // // //           <Tooltip label="Help" placement="bottom">
// // // // // // // // // // // // //             <IconButton
// // // // // // // // // // // // //               aria-label="Help"
// // // // // // // // // // // // //               icon={<QuestionIcon />}
// // // // // // // // // // // // //               size="sm"
// // // // // // // // // // // // //               variant="ghost"
// // // // // // // // // // // // //               color="white"
// // // // // // // // // // // // //               _hover={{ bg: "teal.400" }}
// // // // // // // // // // // // //             />
// // // // // // // // // // // // //           </Tooltip>
// // // // // // // // // // // // //         </HStack>
// // // // // // // // // // // // //       </Flex>

// // // // // // // // // // // // //       {/* Search Bar */}
// // // // // // // // // // // // //       <Box p={4} borderBottomWidth="1px" borderColor={borderColor} flexShrink={0}>
// // // // // // // // // // // // //         <InputGroup size="sm">
// // // // // // // // // // // // //           <InputLeftElement pointerEvents="none">
// // // // // // // // // // // // //             <SearchIcon color="gray.400" />
// // // // // // // // // // // // //           </InputLeftElement>
// // // // // // // // // // // // //           <Input
// // // // // // // // // // // // //             placeholder="Search menu..."
// // // // // // // // // // // // //             value={searchTerm}
// // // // // // // // // // // // //             onChange={(e) => setSearchTerm(e.target.value)}
// // // // // // // // // // // // //             bg={inputBg}
// // // // // // // // // // // // //             borderRadius="md"
// // // // // // // // // // // // //             _placeholder={{ color: "gray.400" }}
// // // // // // // // // // // // //           />
// // // // // // // // // // // // //         </InputGroup>
// // // // // // // // // // // // //       </Box>

// // // // // // // // // // // // //       {/* Main Navigation Sections - Scrollable Area */}
// // // // // // // // // // // // //       <Box 
// // // // // // // // // // // // //         flex="1" 
// // // // // // // // // // // // //         overflowY="auto" 
// // // // // // // // // // // // //         px={3} 
// // // // // // // // // // // // //         py={4}
// // // // // // // // // // // // //         css={{
// // // // // // // // // // // // //           '&::-webkit-scrollbar': {
// // // // // // // // // // // // //             width: '6px',
// // // // // // // // // // // // //           },
// // // // // // // // // // // // //           '&::-webkit-scrollbar-track': {
// // // // // // // // // // // // //             width: '8px',
// // // // // // // // // // // // //             backgroundColor: 'transparent',
// // // // // // // // // // // // //           },
// // // // // // // // // // // // //           '&::-webkit-scrollbar-thumb': {
// // // // // // // // // // // // //             backgroundColor: 'rgba(0, 0, 0, 0.2)',
// // // // // // // // // // // // //             borderRadius: '24px',
// // // // // // // // // // // // //           },
// // // // // // // // // // // // //           '&::-webkit-scrollbar-thumb:hover': {
// // // // // // // // // // // // //             backgroundColor: 'rgba(0, 0, 0, 0.3)',
// // // // // // // // // // // // //           },
// // // // // // // // // // // // //           // Firefox scrollbar styling
// // // // // // // // // // // // //           scrollbarWidth: 'thin',
// // // // // // // // // // // // //           scrollbarColor: 'rgba(0, 0, 0, 0.2) transparent',
// // // // // // // // // // // // //         }}
// // // // // // // // // // // // //       >
// // // // // // // // // // // // //         <VStack align="stretch" spacing={1}>
// // // // // // // // // // // // //           {filteredSections.map((section, index) => (
// // // // // // // // // // // // //             <SidebarSection 
// // // // // // // // // // // // //               key={section.title} 
// // // // // // // // // // // // //               title={section.title} 
// // // // // // // // // // // // //               links={section.links} 
// // // // // // // // // // // // //               defaultOpen={index === activeSection}
// // // // // // // // // // // // //             />
// // // // // // // // // // // // //           ))}
// // // // // // // // // // // // //         </VStack>
// // // // // // // // // // // // //       </Box>

// // // // // // // // // // // // //       {/* Footer with Logout */}
// // // // // // // // // // // // //       <Box p={4} borderTopWidth="1px" borderColor={borderColor} flexShrink={0}>
// // // // // // // // // // // // //         <Button
// // // // // // // // // // // // //           leftIcon={<FaSignOutAlt />}
// // // // // // // // // // // // //           colorScheme="red"
// // // // // // // // // // // // //           variant="outline"
// // // // // // // // // // // // //           size="sm"
// // // // // // // // // // // // //           width="full"
// // // // // // // // // // // // //           onClick={() => alert("Logging Out...")}
// // // // // // // // // // // // //         >
// // // // // // // // // // // // //           Logout
// // // // // // // // // // // // //         </Button>
// // // // // // // // // // // // //       </Box>
// // // // // // // // // // // // //     </Flex>
// // // // // // // // // // // // //   );

// // // // // // // // // // // // //   // For mobile: render a drawer
// // // // // // // // // // // // //   if (displayMode === "drawer") {
// // // // // // // // // // // // //     return (
// // // // // // // // // // // // //       <>
// // // // // // // // // // // // //         <IconButton
// // // // // // // // // // // // //           ref={btnRef}
// // // // // // // // // // // // //           icon={<HamburgerIcon />}
// // // // // // // // // // // // //           onClick={onOpen}
// // // // // // // // // // // // //           position="fixed"
// // // // // // // // // // // // //           top={4}
// // // // // // // // // // // // //           left={4}
// // // // // // // // // // // // //           zIndex={20}
// // // // // // // // // // // // //           colorScheme="teal"
// // // // // // // // // // // // //           aria-label="Open Menu"
// // // // // // // // // // // // //           size="md"
// // // // // // // // // // // // //         />
        
// // // // // // // // // // // // //         <Drawer
// // // // // // // // // // // // //           isOpen={isOpen}
// // // // // // // // // // // // //           placement="left"
// // // // // // // // // // // // //           onClose={onClose}
// // // // // // // // // // // // //           finalFocusRef={btnRef}
// // // // // // // // // // // // //           size={sidebarWidth}
// // // // // // // // // // // // //         >
// // // // // // // // // // // // //           <DrawerOverlay />
// // // // // // // // // // // // //           <DrawerContent>
// // // // // // // // // // // // //             <DrawerCloseButton color="white" />
// // // // // // // // // // // // //             <DrawerBody p={0}>
// // // // // // // // // // // // //               <SidebarContent />
// // // // // // // // // // // // //             </DrawerBody>
// // // // // // // // // // // // //           </DrawerContent>
// // // // // // // // // // // // //         </Drawer>
// // // // // // // // // // // // //       </>
// // // // // // // // // // // // //     );
// // // // // // // // // // // // //   }

// // // // // // // // // // // // //   // For desktop: render a fixed sidebar
// // // // // // // // // // // // //   return (
// // // // // // // // // // // // //     <Box
// // // // // // // // // // // // //       as="aside"
// // // // // // // // // // // // //       position="fixed"
// // // // // // // // // // // // //       left={0}
// // // // // // // // // // // // //       top={0}
// // // // // // // // // // // // //       width={sidebarWidth}
// // // // // // // // // // // // //       height="100vh"
// // // // // // // // // // // // //       bg={bg}
// // // // // // // // // // // // //       borderRightWidth="1px"
// // // // // // // // // // // // //       borderColor={borderColor}
// // // // // // // // // // // // //       boxShadow="sm"
// // // // // // // // // // // // //       zIndex={10}
// // // // // // // // // // // // //     >
// // // // // // // // // // // // //       <SidebarContent />
// // // // // // // // // // // // //     </Box>
// // // // // // // // // // // // //   );
// // // // // // // // // // // // // };

// // // // // // // // // // // // // export default MasterAdminSidebar;




// // // // // // // // // // // // // import React, { useState, useEffect } from "react";
// // // // // // // // // // // // // import {
// // // // // // // // // // // // //   Box,
// // // // // // // // // // // // //   Flex,
// // // // // // // // // // // // //   IconButton,
// // // // // // // // // // // // //   Text,
// // // // // // // // // // // // //   VStack,
// // // // // // // // // // // // //   useColorModeValue,
// // // // // // // // // // // // //   Collapse,
// // // // // // // // // // // // //   Divider,
// // // // // // // // // // // // //   Button,
// // // // // // // // // // // // //   useDisclosure,
// // // // // // // // // // // // //   Drawer,
// // // // // // // // // // // // //   DrawerOverlay,
// // // // // // // // // // // // //   DrawerContent,
// // // // // // // // // // // // //   DrawerCloseButton,
// // // // // // // // // // // // //   DrawerBody,
// // // // // // // // // // // // //   Tooltip,
// // // // // // // // // // // // //   Icon,
// // // // // // // // // // // // //   Avatar,
// // // // // // // // // // // // //   Badge,
// // // // // // // // // // // // //   Menu,
// // // // // // // // // // // // //   MenuButton,
// // // // // // // // // // // // //   MenuList,
// // // // // // // // // // // // //   MenuItem,
// // // // // // // // // // // // //   Heading,
// // // // // // // // // // // // //   Progress,
// // // // // // // // // // // // //   HStack,
// // // // // // // // // // // // //   Image
// // // // // // // // // // // // // } from "@chakra-ui/react";
// // // // // // // // // // // // // import {
// // // // // // // // // // // // //   FaBars,
// // // // // // // // // // // // //   FaChevronDown,
// // // // // // // // // // // // //   FaTachometerAlt,
// // // // // // // // // // // // //   FaFileAlt,
// // // // // // // // // // // // //   FaLightbulb,
// // // // // // // // // // // // //   FaCertificate,
// // // // // // // // // // // // //   FaBook,
// // // // // // // // // // // // //   FaGlobe,
// // // // // // // // // // // // //   FaDesktop,
// // // // // // // // // // // // //   FaCreditCard,
// // // // // // // // // // // // //   FaFileInvoice,
// // // // // // // // // // // // //   FaUser,
// // // // // // // // // // // // //   FaSignOutAlt,
// // // // // // // // // // // // //   FaBell,
// // // // // // // // // // // // //   FaCog,
// // // // // // // // // // // // //   FaQuestionCircle,
// // // // // // // // // // // // //   FaMedal,
// // // // // // // // // // // // //   FaCalendarAlt,
// // // // // // // // // // // // //   FaGraduationCap
// // // // // // // // // // // // // } from "react-icons/fa";
// // // // // // // // // // // // // import { Link, useNavigate, useLocation } from "react-router-dom";
// // // // // // // // // // // // // import { useAuth } from "../../Contexts/AuthContext";

// // // // // // // // // // // // // const menuItems = [
// // // // // // // // // // // // //   { icon: FaTachometerAlt, text: "Dashboard", link: "/Student-portal/home", badge: "New" },
// // // // // // // // // // // // //   { icon: FaFileAlt, text: "Lessons", link: "/Student-portal/student-it-course" },
// // // // // // // // // // // // //   { icon: FaLightbulb, text: "Quiz", link: "/Student-portal/quiz" },
// // // // // // // // // // // // //   { icon: FaCertificate, text: "Certificate", link: "/Student-portal/certificate" },
// // // // // // // // // // // // //   {
// // // // // // // // // // // // //     icon: FaBook,
// // // // // // // // // // // // //     text: "Courses Catalog",
// // // // // // // // // // // // //     subMenu: [
// // // // // // // // // // // // //       { icon: FaGlobe, text: "IT Courses", link: "/Student-portal/student-it-course", hot: true },
// // // // // // // // // // // // //       { icon: FaDesktop, text: "Non-IT Courses", link: "/Student-portal/student-non-it-course" },
// // // // // // // // // // // // //       { icon: FaGraduationCap, text: "New Releases", link: "/Student-portal/new-courses", badge: "New" }
// // // // // // // // // // // // //     ],
// // // // // // // // // // // // //   },
// // // // // // // // // // // // //   {
// // // // // // // // // // // // //     icon: FaCreditCard,
// // // // // // // // // // // // //     text: "My Payment",
// // // // // // // // // // // // //     subMenu: [
// // // // // // // // // // // // //       { icon: FaFileInvoice, text: "Invoices", link: "/Student-portal/invoice" },
// // // // // // // // // // // // //       { icon: FaCreditCard, text: "Payment Methods", link: "/Student-portal/payment-methods" }
// // // // // // // // // // // // //     ],
// // // // // // // // // // // // //   },
// // // // // // // // // // // // //   { icon: FaCalendarAlt, text: "Schedule", link: "/Student-portal/schedule" },
// // // // // // // // // // // // //   { icon: FaMedal, text: "Achievements", link: "/Student-portal/achievements" },
// // // // // // // // // // // // //   { icon: FaUser, text: "Profile", link: "/Student-portal/profile" },
// // // // // // // // // // // // // ];

// // // // // // // // // // // // // const Sidebar = () => {
// // // // // // // // // // // // //   const [isOpen, setIsOpen] = useState(window.innerWidth > 1024);
// // // // // // // // // // // // //   const [subMenuOpen, setSubMenuOpen] = useState({});
// // // // // // // // // // // // //   const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);
// // // // // // // // // // // // //   const { user, logout } = useAuth();
// // // // // // // // // // // // //   const navigate = useNavigate();
// // // // // // // // // // // // //   const location = useLocation();
// // // // // // // // // // // // //   const { isOpen: mobileDrawerOpen, onOpen: openMobileDrawer, onClose: closeMobileDrawer } = useDisclosure();
  
// // // // // // // // // // // // //   // Colors
// // // // // // // // // // // // //   const bgColor = useColorModeValue("white", "gray.900");
// // // // // // // // // // // // //   const borderColor = useColorModeValue("gray.100", "gray.700");
// // // // // // // // // // // // //   const textColor = useColorModeValue("gray.800", "gray.100");
// // // // // // // // // // // // //   const brandColor = "teal.500";
// // // // // // // // // // // // //   const brandHoverColor = "teal.600";
// // // // // // // // // // // // //   const menuActiveColor = useColorModeValue("teal.50", "teal.900");
// // // // // // // // // // // // //   const menuHoverColor = useColorModeValue("gray.100", "gray.700");
// // // // // // // // // // // // //   const subMenuBgColor = useColorModeValue("gray.50", "gray.800");

// // // // // // // // // // // // //   const sampleUser = {
// // // // // // // // // // // // //     name: "Alex Johnson",
// // // // // // // // // // // // //     role: "Student",
// // // // // // // // // // // // //     avatar: "/api/placeholder/32/32",
// // // // // // // // // // // // //     progress: 68,
// // // // // // // // // // // // //     coursesCompleted: 7,
// // // // // // // // // // // // //     notifications: 3
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   const handleLogout = () => {
// // // // // // // // // // // // //     logout();
// // // // // // // // // // // // //     navigate("/");
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // //     const handleResize = () => {
// // // // // // // // // // // // //       const newIsMobile = window.innerWidth <= 640;
// // // // // // // // // // // // //       setIsMobile(newIsMobile);
// // // // // // // // // // // // //       if (!newIsMobile) {
// // // // // // // // // // // // //         closeMobileDrawer();
// // // // // // // // // // // // //       }
// // // // // // // // // // // // //       setIsOpen(window.innerWidth > 1024);
// // // // // // // // // // // // //     };

// // // // // // // // // // // // //     window.addEventListener("resize", handleResize);
// // // // // // // // // // // // //     return () => window.removeEventListener("resize", handleResize);
// // // // // // // // // // // // //   }, [closeMobileDrawer]);

// // // // // // // // // // // // //   const toggleSubMenu = (index) => {
// // // // // // // // // // // // //     setSubMenuOpen((prev) => ({ ...prev, [index]: !prev[index] }));
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   const isActive = (path) => {
// // // // // // // // // // // // //     return location.pathname === path;
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   const Logo = () => (
// // // // // // // // // // // // //     <Flex align="center" justify={isOpen ? "flex-start" : "center"} px={isOpen ? 6 : 0} py={6}>
// // // // // // // // // // // // //       {isOpen ? (
// // // // // // // // // // // // //         <HStack spacing={2}>
// // // // // // // // // // // // //           <Box bg="teal.500" w="32px" h="32px" borderRadius="md" display="flex" alignItems="center" justifyContent="center">
// // // // // // // // // // // // //             <Icon as={FaGraduationCap} color="white" boxSize={5} />
// // // // // // // // // // // // //           </Box>
// // // // // // // // // // // // //           <Box>
// // // // // // // // // // // // //             <Heading size="sm" fontWeight="bold" color={textColor}>EduPortal</Heading>
// // // // // // // // // // // // //             <Text fontSize="xs" color="gray.500">Student Dashboard</Text>
// // // // // // // // // // // // //           </Box>
// // // // // // // // // // // // //         </HStack>
// // // // // // // // // // // // //       ) : (
// // // // // // // // // // // // //         <Box bg="teal.500" w="32px" h="32px" borderRadius="md" display="flex" alignItems="center" justifyContent="center">
// // // // // // // // // // // // //           <Icon as={FaGraduationCap} color="white" boxSize={5} />
// // // // // // // // // // // // //         </Box>
// // // // // // // // // // // // //       )}
// // // // // // // // // // // // //     </Flex>
// // // // // // // // // // // // //   );

// // // // // // // // // // // // //   const UserProfile = () => (
// // // // // // // // // // // // //     <Flex
// // // // // // // // // // // // //       direction="column"
// // // // // // // // // // // // //       align={isOpen ? "flex-start" : "center"}
// // // // // // // // // // // // //       px={isOpen ? 6 : 3}
// // // // // // // // // // // // //       py={4}
// // // // // // // // // // // // //       borderBottom="1px"
// // // // // // // // // // // // //       borderColor={borderColor}
// // // // // // // // // // // // //     >
// // // // // // // // // // // // //       <Flex w="full" mb={isOpen ? 3 : 0} justify={isOpen ? "space-between" : "center"}>
// // // // // // // // // // // // //         <Avatar size="sm" src={sampleUser.avatar} name={sampleUser.name}>
// // // // // // // // // // // // //           <Badge position="absolute" bottom="-1" right="-1" colorScheme="teal" rounded="full" boxSize="14px" p={0} display="flex" alignItems="center" justifyContent="center">
// // // // // // // // // // // // //             {sampleUser.notifications}
// // // // // // // // // // // // //           </Badge>
// // // // // // // // // // // // //         </Avatar>
        
// // // // // // // // // // // // //         {isOpen && (
// // // // // // // // // // // // //           <Menu>
// // // // // // // // // // // // //             <MenuButton
// // // // // // // // // // // // //               as={IconButton}
// // // // // // // // // // // // //               icon={<FaCog />}
// // // // // // // // // // // // //               variant="ghost"
// // // // // // // // // // // // //               size="sm"
// // // // // // // // // // // // //               colorScheme="gray"
// // // // // // // // // // // // //               aria-label="Settings"
// // // // // // // // // // // // //             />
// // // // // // // // // // // // //             <MenuList shadow="lg" fontSize="sm">
// // // // // // // // // // // // //               <MenuItem icon={<Icon as={FaUser} />}>Edit Profile</MenuItem>
// // // // // // // // // // // // //               <MenuItem icon={<Icon as={FaBell} />}>Notifications</MenuItem>
// // // // // // // // // // // // //               <MenuItem icon={<Icon as={FaQuestionCircle} />}>Help Center</MenuItem>
// // // // // // // // // // // // //               <MenuItem icon={<Icon as={FaSignOutAlt} color="red.500" />} color="red.500" onClick={handleLogout}>
// // // // // // // // // // // // //                 Logout
// // // // // // // // // // // // //               </MenuItem>
// // // // // // // // // // // // //             </MenuList>
// // // // // // // // // // // // //           </Menu>
// // // // // // // // // // // // //         )}
// // // // // // // // // // // // //       </Flex>

// // // // // // // // // // // // //       {isOpen && (
// // // // // // // // // // // // //         <>
// // // // // // // // // // // // //           <Text fontWeight="semibold" fontSize="sm" mb={0.5}>{sampleUser.name}</Text>
// // // // // // // // // // // // //           <Text fontSize="xs" color="gray.500" mb={2}>{sampleUser.role}</Text>
          
// // // // // // // // // // // // //           <Box w="full" mb={1}>
// // // // // // // // // // // // //             <Flex justify="space-between" mb={1}>
// // // // // // // // // // // // //               <Text fontSize="xs">Course Progress</Text>
// // // // // // // // // // // // //               <Text fontSize="xs" fontWeight="bold">{sampleUser.progress}%</Text>
// // // // // // // // // // // // //             </Flex>
// // // // // // // // // // // // //             <Progress value={sampleUser.progress} size="xs" colorScheme="teal" borderRadius="full" />
// // // // // // // // // // // // //           </Box>
          
// // // // // // // // // // // // //           <HStack fontSize="xs" color="gray.500" spacing={1}>
// // // // // // // // // // // // //             <Icon as={FaCertificate} color="yellow.500" />
// // // // // // // // // // // // //             <Text>{sampleUser.coursesCompleted} courses completed</Text>
// // // // // // // // // // // // //           </HStack>
// // // // // // // // // // // // //         </>
// // // // // // // // // // // // //       )}
// // // // // // // // // // // // //     </Flex>
// // // // // // // // // // // // //   );

// // // // // // // // // // // // //   const MenuItem = ({ item, index }) => {
// // // // // // // // // // // // //     const isMenuActive = isActive(item.link) || (item.subMenu && item.subMenu.some(subItem => isActive(subItem.link)));
    
// // // // // // // // // // // // //     return (
// // // // // // // // // // // // //       <Box>
// // // // // // // // // // // // //         <Tooltip
// // // // // // // // // // // // //           label={!isOpen ? item.text : ""}
// // // // // // // // // // // // //           placement="right"
// // // // // // // // // // // // //           hasArrow
// // // // // // // // // // // // //           isDisabled={isOpen}
// // // // // // // // // // // // //         >
// // // // // // // // // // // // //           <Flex
// // // // // // // // // // // // //             px={isOpen ? 6 : 3}
// // // // // // // // // // // // //             py={3}
// // // // // // // // // // // // //             borderRadius="md"
// // // // // // // // // // // // //             role="group"
// // // // // // // // // // // // //             cursor="pointer"
// // // // // // // // // // // // //             bg={isMenuActive ? menuActiveColor : "transparent"}
// // // // // // // // // // // // //             _hover={{ bg: menuHoverColor }}
// // // // // // // // // // // // //             justify="space-between"
// // // // // // // // // // // // //             align="center"
// // // // // // // // // // // // //             onClick={() => item.subMenu ? toggleSubMenu(index) : null}
// // // // // // // // // // // // //             transition="all 0.2s"
// // // // // // // // // // // // //             position="relative"
// // // // // // // // // // // // //           >
// // // // // // // // // // // // //             {item.badge && !isOpen && (
// // // // // // // // // // // // //               <Badge
// // // // // // // // // // // // //                 position="absolute" 
// // // // // // // // // // // // //                 top="-1px" 
// // // // // // // // // // // // //                 right="-1px" 
// // // // // // // // // // // // //                 size="xs" 
// // // // // // // // // // // // //                 colorScheme="red" 
// // // // // // // // // // // // //                 borderRadius="full"
// // // // // // // // // // // // //                 px={1}
// // // // // // // // // // // // //                 fontSize="8px"
// // // // // // // // // // // // //               >
// // // // // // // // // // // // //                 {item.badge}
// // // // // // // // // // // // //               </Badge>
// // // // // // // // // // // // //             )}
            
// // // // // // // // // // // // //             <Flex as={item.link ? Link : Box} to={item.link} align="center" w="full">
// // // // // // // // // // // // //               <Icon 
// // // // // // // // // // // // //                 as={item.icon} 
// // // // // // // // // // // // //                 boxSize={5} 
// // // // // // // // // // // // //                 color={isMenuActive ? brandColor : "gray.500"}
// // // // // // // // // // // // //                 _groupHover={{ color: brandColor }}
// // // // // // // // // // // // //                 mr={isOpen ? 3 : 0}
// // // // // // // // // // // // //               />
              
// // // // // // // // // // // // //               {isOpen && (
// // // // // // // // // // // // //                 <Flex justify="space-between" w="full" align="center">
// // // // // // // // // // // // //                   <Text 
// // // // // // // // // // // // //                     color={isMenuActive ? brandColor : textColor} 
// // // // // // // // // // // // //                     fontWeight={isMenuActive ? "semibold" : "medium"}
// // // // // // // // // // // // //                     fontSize="sm"
// // // // // // // // // // // // //                     _groupHover={{ color: brandColor }}
// // // // // // // // // // // // //                   >
// // // // // // // // // // // // //                     {item.text}
// // // // // // // // // // // // //                   </Text>
                  
// // // // // // // // // // // // //                   {item.badge && (
// // // // // // // // // // // // //                     <Badge colorScheme="red" ml={2} borderRadius="full" fontSize="10px">
// // // // // // // // // // // // //                       {item.badge}
// // // // // // // // // // // // //                     </Badge>
// // // // // // // // // // // // //                   )}
// // // // // // // // // // // // //                 </Flex>
// // // // // // // // // // // // //               )}
// // // // // // // // // // // // //             </Flex>

// // // // // // // // // // // // //             {item.subMenu && isOpen && (
// // // // // // // // // // // // //               <Icon 
// // // // // // // // // // // // //                 as={FaChevronDown} 
// // // // // // // // // // // // //                 boxSize={3}
// // // // // // // // // // // // //                 transition="transform 0.3s"
// // // // // // // // // // // // //                 transform={subMenuOpen[index] ? "rotate(180deg)" : "rotate(0)"}
// // // // // // // // // // // // //                 color="gray.400"
// // // // // // // // // // // // //                 ml={2}
// // // // // // // // // // // // //               />
// // // // // // // // // // // // //             )}
// // // // // // // // // // // // //           </Flex>
// // // // // // // // // // // // //         </Tooltip>

// // // // // // // // // // // // //         {item.subMenu && (
// // // // // // // // // // // // //           <Collapse in={isOpen && subMenuOpen[index]} animateOpacity>
// // // // // // // // // // // // //             <VStack 
// // // // // // // // // // // // //               spacing={0.5} 
// // // // // // // // // // // // //               pl={isOpen ? 6 : 0} 
// // // // // // // // // // // // //               mt={1} 
// // // // // // // // // // // // //               mb={1}
// // // // // // // // // // // // //               align="stretch"
// // // // // // // // // // // // //               bg={subMenuBgColor}
// // // // // // // // // // // // //               borderRadius="md"
// // // // // // // // // // // // //               mx={isOpen ? 4 : 0}
// // // // // // // // // // // // //               overflow="hidden"
// // // // // // // // // // // // //             >
// // // // // // // // // // // // //               {item.subMenu.map((subItem, subIndex) => (
// // // // // // // // // // // // //                 <Tooltip
// // // // // // // // // // // // //                   key={subIndex}
// // // // // // // // // // // // //                   label={!isOpen ? subItem.text : ""}
// // // // // // // // // // // // //                   placement="right"
// // // // // // // // // // // // //                   hasArrow
// // // // // // // // // // // // //                   isDisabled={isOpen}
// // // // // // // // // // // // //                 >
// // // // // // // // // // // // //                   <Flex
// // // // // // // // // // // // //                     as={Link}
// // // // // // // // // // // // //                     to={subItem.link}
// // // // // // // // // // // // //                     px={isOpen ? 4 : 3}
// // // // // // // // // // // // //                     py={2}
// // // // // // // // // // // // //                     borderRadius="md"
// // // // // // // // // // // // //                     _hover={{ bg: menuHoverColor }}
// // // // // // // // // // // // //                     align="center"
// // // // // // // // // // // // //                     role="group"
// // // // // // // // // // // // //                     position="relative"
// // // // // // // // // // // // //                     bg={isActive(subItem.link) ? menuActiveColor : "transparent"}
// // // // // // // // // // // // //                   >
// // // // // // // // // // // // //                     {subItem.badge && !isOpen && (
// // // // // // // // // // // // //                       <Badge
// // // // // // // // // // // // //                         position="absolute" 
// // // // // // // // // // // // //                         top="-1px" 
// // // // // // // // // // // // //                         right="-1px" 
// // // // // // // // // // // // //                         size="xs" 
// // // // // // // // // // // // //                         colorScheme="red" 
// // // // // // // // // // // // //                         borderRadius="full"
// // // // // // // // // // // // //                         px={1}
// // // // // // // // // // // // //                         fontSize="8px"
// // // // // // // // // // // // //                       >
// // // // // // // // // // // // //                         {subItem.badge}
// // // // // // // // // // // // //                       </Badge>
// // // // // // // // // // // // //                     )}
                    
// // // // // // // // // // // // //                     <Icon 
// // // // // // // // // // // // //                       as={subItem.icon} 
// // // // // // // // // // // // //                       boxSize={4} 
// // // // // // // // // // // // //                       color={isActive(subItem.link) ? brandColor : "gray.500"}
// // // // // // // // // // // // //                       _groupHover={{ color: brandColor }}
// // // // // // // // // // // // //                       mr={isOpen ? 3 : 0}
// // // // // // // // // // // // //                     />
                    
// // // // // // // // // // // // //                     {isOpen && (
// // // // // // // // // // // // //                       <Flex justify="space-between" w="full" align="center">
// // // // // // // // // // // // //                         <Text 
// // // // // // // // // // // // //                           fontSize="xs" 
// // // // // // // // // // // // //                           color={isActive(subItem.link) ? brandColor : textColor}
// // // // // // // // // // // // //                           fontWeight={isActive(subItem.link) ? "semibold" : "normal"}
// // // // // // // // // // // // //                           _groupHover={{ color: brandColor }}
// // // // // // // // // // // // //                         >
// // // // // // // // // // // // //                           {subItem.text}
// // // // // // // // // // // // //                         </Text>
                        
// // // // // // // // // // // // //                         {subItem.badge && (
// // // // // // // // // // // // //                           <Badge colorScheme="red" ml={2} fontSize="10px" borderRadius="full">
// // // // // // // // // // // // //                             {subItem.badge}
// // // // // // // // // // // // //                           </Badge>
// // // // // // // // // // // // //                         )}
                        
// // // // // // // // // // // // //                         {subItem.hot && (
// // // // // // // // // // // // //                           <Badge colorScheme="orange" ml={2} fontSize="10px" variant="solid" borderRadius="full">
// // // // // // // // // // // // //                             HOT
// // // // // // // // // // // // //                           </Badge>
// // // // // // // // // // // // //                         )}
// // // // // // // // // // // // //                       </Flex>
// // // // // // // // // // // // //                     )}
// // // // // // // // // // // // //                   </Flex>
// // // // // // // // // // // // //                 </Tooltip>
// // // // // // // // // // // // //               ))}
// // // // // // // // // // // // //             </VStack>
// // // // // // // // // // // // //           </Collapse>
// // // // // // // // // // // // //         )}
// // // // // // // // // // // // //       </Box>
// // // // // // // // // // // // //     );
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   const SidebarFooter = () => (
// // // // // // // // // // // // //     <VStack
// // // // // // // // // // // // //       mt="auto"
// // // // // // // // // // // // //       w="full"
// // // // // // // // // // // // //       p={isOpen ? 4 : 2}
// // // // // // // // // // // // //       spacing={2}
// // // // // // // // // // // // //       align={isOpen ? "flex-start" : "center"}
// // // // // // // // // // // // //       borderTop="1px"
// // // // // // // // // // // // //       borderColor={borderColor}
// // // // // // // // // // // // //     >
// // // // // // // // // // // // //       {isOpen ? (
// // // // // // // // // // // // //         <>
// // // // // // // // // // // // //           <HStack spacing={3} w="full">
// // // // // // // // // // // // //             <IconButton
// // // // // // // // // // // // //               aria-label="Help"
// // // // // // // // // // // // //               icon={<FaQuestionCircle />}
// // // // // // // // // // // // //               size="sm"
// // // // // // // // // // // // //               colorScheme="gray"
// // // // // // // // // // // // //               variant="ghost"
// // // // // // // // // // // // //             />
// // // // // // // // // // // // //             <IconButton
// // // // // // // // // // // // //               aria-label="Settings"
// // // // // // // // // // // // //               icon={<FaCog />}
// // // // // // // // // // // // //               size="sm"
// // // // // // // // // // // // //               colorScheme="gray"
// // // // // // // // // // // // //               variant="ghost"
// // // // // // // // // // // // //             />
// // // // // // // // // // // // //             <IconButton
// // // // // // // // // // // // //               aria-label="Notifications"
// // // // // // // // // // // // //               icon={<FaBell />}
// // // // // // // // // // // // //               size="sm"
// // // // // // // // // // // // //               colorScheme="gray"
// // // // // // // // // // // // //               variant="ghost"
// // // // // // // // // // // // //               position="relative"
// // // // // // // // // // // // //             >
// // // // // // // // // // // // //               <Badge
// // // // // // // // // // // // //                 position="absolute"
// // // // // // // // // // // // //                 top="-1px"
// // // // // // // // // // // // //                 right="-1px"
// // // // // // // // // // // // //                 colorScheme="red"
// // // // // // // // // // // // //                 borderRadius="full"
// // // // // // // // // // // // //                 boxSize="14px"
// // // // // // // // // // // // //                 p={0}
// // // // // // // // // // // // //                 display="flex"
// // // // // // // // // // // // //                 alignItems="center"
// // // // // // // // // // // // //                 justifyContent="center"
// // // // // // // // // // // // //               >
// // // // // // // // // // // // //                 {sampleUser.notifications}
// // // // // // // // // // // // //               </Badge>
// // // // // // // // // // // // //             </IconButton>
// // // // // // // // // // // // //           </HStack>
          
// // // // // // // // // // // // //           <Button
// // // // // // // // // // // // //             w="full"
// // // // // // // // // // // // //             colorScheme="red"
// // // // // // // // // // // // //             variant="outline"
// // // // // // // // // // // // //             size="sm"
// // // // // // // // // // // // //             leftIcon={<Icon as={FaSignOutAlt} />}
// // // // // // // // // // // // //             onClick={handleLogout}
// // // // // // // // // // // // //           >
// // // // // // // // // // // // //             Logout
// // // // // // // // // // // // //           </Button>
// // // // // // // // // // // // //         </>
// // // // // // // // // // // // //       ) : (
// // // // // // // // // // // // //         <Tooltip label="Logout" placement="right" hasArrow>
// // // // // // // // // // // // //           <IconButton
// // // // // // // // // // // // //             aria-label="Logout"
// // // // // // // // // // // // //             icon={<FaSignOutAlt />}
// // // // // // // // // // // // //             size="sm"
// // // // // // // // // // // // //             colorScheme="red"
// // // // // // // // // // // // //             variant="ghost"
// // // // // // // // // // // // //             onClick={handleLogout}
// // // // // // // // // // // // //           />
// // // // // // // // // // // // //         </Tooltip>
// // // // // // // // // // // // //       )}
// // // // // // // // // // // // //     </VStack>
// // // // // // // // // // // // //   );

// // // // // // // // // // // // //   const SidebarContent = () => (
// // // // // // // // // // // // //     <Flex 
// // // // // // // // // // // // //       direction="column"
// // // // // // // // // // // // //       bg={bgColor} 
// // // // // // // // // // // // //       w={isOpen ? "260px" : "70px"} 
// // // // // // // // // // // // //       h="100vh" 
// // // // // // // // // // // // //       boxShadow="xl"
// // // // // // // // // // // // //       borderRight="1px"
// // // // // // // // // // // // //       borderColor={borderColor}
// // // // // // // // // // // // //       transition="width 0.3s ease"
// // // // // // // // // // // // //       overflow="hidden"
// // // // // // // // // // // // //     >
// // // // // // // // // // // // //       <Logo />
// // // // // // // // // // // // //       <UserProfile />
      
// // // // // // // // // // // // //       <VStack spacing={1} align="stretch" flex="1" py={2} overflow="auto" className="hide-scrollbar">
// // // // // // // // // // // // //         {menuItems.map((item, index) => (
// // // // // // // // // // // // //           <MenuItem key={index} item={item} index={index} />
// // // // // // // // // // // // //         ))}
// // // // // // // // // // // // //       </VStack>
      
// // // // // // // // // // // // //       <SidebarFooter />
// // // // // // // // // // // // //     </Flex>
// // // // // // // // // // // // //   );

// // // // // // // // // // // // //   return (
// // // // // // // // // // // // //     <>
// // // // // // // // // // // // //       {/* Mobile toggle button */}
// // // // // // // // // // // // //       {isMobile && (
// // // // // // // // // // // // //         <IconButton
// // // // // // // // // // // // //           icon={<FaBars />}
// // // // // // // // // // // // //           aria-label="Open Menu"
// // // // // // // // // // // // //           position="fixed"
// // // // // // // // // // // // //           top={4}
// // // // // // // // // // // // //           right={4}
// // // // // // // // // // // // //           zIndex={20}
// // // // // // // // // // // // //           onClick={openMobileDrawer}
// // // // // // // // // // // // //           colorScheme="teal"
// // // // // // // // // // // // //           size="md"
// // // // // // // // // // // // //           shadow="md"
// // // // // // // // // // // // //         />
// // // // // // // // // // // // //       )}

// // // // // // // // // // // // //       {/* Desktop sidebar */}
// // // // // // // // // // // // //       {!isMobile && (
// // // // // // // // // // // // //         <Box
// // // // // // // // // // // // //           position="relative"
// // // // // // // // // // // // //           onMouseEnter={() => !isMobile && setIsOpen(true)}
// // // // // // // // // // // // //           onMouseLeave={() => !isMobile && setIsOpen(false)}
// // // // // // // // // // // // //           h="100vh"
// // // // // // // // // // // // //         >
// // // // // // // // // // // // //           <style>
// // // // // // // // // // // // //             {`
// // // // // // // // // // // // //               .hide-scrollbar::-webkit-scrollbar {
// // // // // // // // // // // // //                 width: 0px;
// // // // // // // // // // // // //               }
// // // // // // // // // // // // //               .hide-scrollbar {
// // // // // // // // // // // // //                 -ms-overflow-style: none;
// // // // // // // // // // // // //                 scrollbar-width: none;
// // // // // // // // // // // // //               }
// // // // // // // // // // // // //             `}
// // // // // // // // // // // // //           </style>
// // // // // // // // // // // // //           <SidebarContent />
// // // // // // // // // // // // //         </Box>
// // // // // // // // // // // // //       )}

// // // // // // // // // // // // //       {/* Mobile drawer */}
// // // // // // // // // // // // //       {isMobile && (
// // // // // // // // // // // // //         <Drawer
// // // // // // // // // // // // //           isOpen={mobileDrawerOpen}
// // // // // // // // // // // // //           placement="left"
// // // // // // // // // // // // //           onClose={closeMobileDrawer}
// // // // // // // // // // // // //           size="xs"
// // // // // // // // // // // // //         >
// // // // // // // // // // // // //           <DrawerOverlay backdropFilter="blur(2px)" />
// // // // // // // // // // // // //           <DrawerContent maxW="260px">
// // // // // // // // // // // // //             <DrawerCloseButton color={textColor} />
// // // // // // // // // // // // //             <DrawerBody p={0}>
// // // // // // // // // // // // //               <Box height="100%">
// // // // // // // // // // // // //                 <SidebarContent />
// // // // // // // // // // // // //               </Box>
// // // // // // // // // // // // //             </DrawerBody>
// // // // // // // // // // // // //           </DrawerContent>
// // // // // // // // // // // // //         </Drawer>
// // // // // // // // // // // // //       )}
// // // // // // // // // // // // //     </>
// // // // // // // // // // // // //   );
// // // // // // // // // // // // // };

// // // // // // // // // // // // // export default Sidebar;







// // // // // // // // // // // // // import React, { useState, useEffect } from "react";
// // // // // // // // // // // // // import {
// // // // // // // // // // // // //   Box,
// // // // // // // // // // // // //   Flex,
// // // // // // // // // // // // //   IconButton,
// // // // // // // // // // // // //   Text,
// // // // // // // // // // // // //   VStack,
// // // // // // // // // // // // //   useColorModeValue,
// // // // // // // // // // // // //   Collapse,
// // // // // // // // // // // // //   Divider,
// // // // // // // // // // // // //   Avatar,
// // // // // // // // // // // // //   Badge,
// // // // // // // // // // // // //   Progress,
// // // // // // // // // // // // //   HStack,
// // // // // // // // // // // // //   Tooltip,
// // // // // // // // // // // // //   Spinner,
// // // // // // // // // // // // //   useDisclosure,
// // // // // // // // // // // // //   Drawer,
// // // // // // // // // // // // //   DrawerOverlay,
// // // // // // // // // // // // //   DrawerContent,
// // // // // // // // // // // // //   DrawerCloseButton,
// // // // // // // // // // // // //   DrawerBody,
// // // // // // // // // // // // //   Menu,
// // // // // // // // // // // // //   MenuButton,
// // // // // // // // // // // // //   MenuList,
// // // // // // // // // // // // //   MenuItem,
// // // // // // // // // // // // //   Icon,
// // // // // // // // // // // // //   useBreakpointValue
// // // // // // // // // // // // // } from "@chakra-ui/react";
// // // // // // // // // // // // // import { FaBars, FaChevronDown, FaSignOutAlt, FaCog, FaGraduationCap } from "react-icons/fa";
// // // // // // // // // // // // // import { Link, useLocation, useNavigate } from "react-router-dom";
// // // // // // // // // // // // // import { useAuth } from "../../Contexts/AuthContext";

// // // // // // // // // // // // // const Sidebar = () => {
// // // // // // // // // // // // //   const [isExpanded, setIsExpanded] = useState(false);
// // // // // // // // // // // // //   const [menuItems, setMenuItems] = useState([]);
// // // // // // // // // // // // //   const [userData, setUserData] = useState(null);
// // // // // // // // // // // // //   const [expandedItems, setExpandedItems] = useState({});
// // // // // // // // // // // // //   const [isLoading, setIsLoading] = useState(true);
// // // // // // // // // // // // //   const [error, setError] = useState(null);
  
// // // // // // // // // // // // //   const location = useLocation();
// // // // // // // // // // // // //   const navigate = useNavigate();
// // // // // // // // // // // // //   const { logout } = useAuth();
// // // // // // // // // // // // //   const { isOpen, onOpen, onClose } = useDisclosure();
  
// // // // // // // // // // // // //   const isMobile = useBreakpointValue({ base: true, lg: false });
  
// // // // // // // // // // // // //   // Theme colors
// // // // // // // // // // // // //   const bgColor = useColorModeValue("white", "gray.900");
// // // // // // // // // // // // //   const borderColor = useColorModeValue("gray.200", "gray.700");
// // // // // // // // // // // // //   const textColor = useColorModeValue("gray.800", "gray.200");
// // // // // // // // // // // // //   const activeItemBg = useColorModeValue("teal.50", "teal.900");
// // // // // // // // // // // // //   const itemHoverBg = useColorModeValue("gray.100", "gray.800");
  
// // // // // // // // // // // // //   // Fetch menu and user data from API
// // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // //     const fetchData = async () => {
// // // // // // // // // // // // //       setIsLoading(true);
// // // // // // // // // // // // //       try {
// // // // // // // // // // // // //         // Replace with your actual API endpoints
// // // // // // // // // // // // //         const [menuResponse, userResponse] = await Promise.all([
// // // // // // // // // // // // //           fetch('/api/navigation'),
// // // // // // // // // // // // //           fetch('/api/user/profile')
// // // // // // // // // // // // //         ]);
        
// // // // // // // // // // // // //         if (!menuResponse.ok || !userResponse.ok) {
// // // // // // // // // // // // //           throw new Error('Failed to fetch data');
// // // // // // // // // // // // //         }
        
// // // // // // // // // // // // //         const menuData = await menuResponse.json();
// // // // // // // // // // // // //         const userData = await userResponse.json();
        
// // // // // // // // // // // // //         setMenuItems(menuData);
// // // // // // // // // // // // //         setUserData(userData);
// // // // // // // // // // // // //         setError(null);
// // // // // // // // // // // // //       } catch (err) {
// // // // // // // // // // // // //         setError('Failed to load data. Please try again later.');
// // // // // // // // // // // // //         console.error('Error fetching data:', err);
        
// // // // // // // // // // // // //         // Fallback data for development/demo purposes
// // // // // // // // // // // // //         setMenuItems([
// // // // // // // // // // // // //           { id: 1, icon: "FaTachometerAlt", label: "Dashboard", path: "/Student-portal/home", badge: "New" },
// // // // // // // // // // // // //           { id: 2, icon: "FaFileAlt", label: "Lessons", path: "/Student-portal/student-it-course" },
// // // // // // // // // // // // //           { id: 3, icon: "FaLightbulb", label: "Quiz", path: "/Student-portal/quiz" },
// // // // // // // // // // // // //           { id: 4, icon: "FaCertificate", label: "Certificate", path: "/Student-portal/certificate" },
// // // // // // // // // // // // //           { 
// // // // // // // // // // // // //             id: 5, 
// // // // // // // // // // // // //             icon: "FaBook", 
// // // // // // // // // // // // //             label: "Courses", 
// // // // // // // // // // // // //             path: "/Student-portal/courses",
// // // // // // // // // // // // //             children: [
// // // // // // // // // // // // //               { id: 51, icon: "FaGlobe", label: "IT Courses", path: "/Student-portal/student-it-course", highlight: "hot" },
// // // // // // // // // // // // //               { id: 52, icon: "FaDesktop", label: "Non-IT Courses", path: "/Student-portal/student-non-it-course" },
// // // // // // // // // // // // //               { id: 53, icon: "FaGraduationCap", label: "New Releases", path: "/Student-portal/new-courses", badge: "New" }
// // // // // // // // // // // // //             ]
// // // // // // // // // // // // //           },
// // // // // // // // // // // // //           {
// // // // // // // // // // // // //             id: 6,
// // // // // // // // // // // // //             icon: "FaCreditCard",
// // // // // // // // // // // // //             label: "Payments",
// // // // // // // // // // // // //             path: "/Student-portal/payments",
// // // // // // // // // // // // //             children: [
// // // // // // // // // // // // //               { id: 61, icon: "FaFileInvoice", label: "Invoices", path: "/Student-portal/invoice" },
// // // // // // // // // // // // //               { id: 62, icon: "FaCreditCard", label: "Payment Methods", path: "/Student-portal/payment-methods" }
// // // // // // // // // // // // //             ]
// // // // // // // // // // // // //           }
// // // // // // // // // // // // //         ]);
        
// // // // // // // // // // // // //         setUserData({
// // // // // // // // // // // // //           name: "Alex Johnson",
// // // // // // // // // // // // //           role: "Student",
// // // // // // // // // // // // //           avatar: "/api/placeholder/40/40",
// // // // // // // // // // // // //           progress: 68,
// // // // // // // // // // // // //           coursesCompleted: 7,
// // // // // // // // // // // // //           notifications: 3
// // // // // // // // // // // // //         });
// // // // // // // // // // // // //       } finally {
// // // // // // // // // // // // //         setIsLoading(false);
// // // // // // // // // // // // //       }
// // // // // // // // // // // // //     };
    
// // // // // // // // // // // // //     fetchData();
// // // // // // // // // // // // //   }, []);
  
// // // // // // // // // // // // //   // Handle window resize
// // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // //     const handleResize = () => {
// // // // // // // // // // // // //       if (window.innerWidth > 1024 && !isMobile) {
// // // // // // // // // // // // //         onClose();
// // // // // // // // // // // // //       }
// // // // // // // // // // // // //     };
    
// // // // // // // // // // // // //     window.addEventListener('resize', handleResize);
// // // // // // // // // // // // //     return () => window.removeEventListener('resize', handleResize);
// // // // // // // // // // // // //   }, [isMobile, onClose]);
  
// // // // // // // // // // // // //   // Get icon component from string name
// // // // // // // // // // // // //   const getIconComponent = (iconName) => {
// // // // // // // // // // // // //     // You would import all potential icons at the top of the file
// // // // // // // // // // // // //     // This is a simple example - in production you might use a more robust solution
// // // // // // // // // // // // //     const iconMap = {
// // // // // // // // // // // // //       FaTachometerAlt: FaGraduationCap,
// // // // // // // // // // // // //       FaFileAlt: FaGraduationCap,
// // // // // // // // // // // // //       FaLightbulb: FaGraduationCap,
// // // // // // // // // // // // //       FaCertificate: FaGraduationCap,
// // // // // // // // // // // // //       FaBook: FaGraduationCap,
// // // // // // // // // // // // //       FaCreditCard: FaGraduationCap,
// // // // // // // // // // // // //       FaGlobe: FaGraduationCap,
// // // // // // // // // // // // //       FaDesktop: FaGraduationCap,
// // // // // // // // // // // // //       FaGraduationCap: FaGraduationCap,
// // // // // // // // // // // // //       FaFileInvoice: FaGraduationCap
// // // // // // // // // // // // //     };
    
// // // // // // // // // // // // //     return iconMap[iconName] || FaGraduationCap;
// // // // // // // // // // // // //   };
  
// // // // // // // // // // // // //   const toggleSubmenu = (id) => {
// // // // // // // // // // // // //     setExpandedItems(prev => ({
// // // // // // // // // // // // //       ...prev,
// // // // // // // // // // // // //       [id]: !prev[id]
// // // // // // // // // // // // //     }));
// // // // // // // // // // // // //   };
  
// // // // // // // // // // // // //   const isActive = (path) => {
// // // // // // // // // // // // //     return location.pathname === path;
// // // // // // // // // // // // //   };
  
// // // // // // // // // // // // //   // Check if any child item is active
// // // // // // // // // // // // //   const hasActiveChild = (item) => {
// // // // // // // // // // // // //     if (!item.children) return false;
// // // // // // // // // // // // //     return item.children.some(child => isActive(child.path));
// // // // // // // // // // // // //   };
  
// // // // // // // // // // // // //   const handleLogout = () => {
// // // // // // // // // // // // //     logout();
// // // // // // // // // // // // //     navigate('/');
// // // // // // // // // // // // //   };
  
// // // // // // // // // // // // //   // Logo component
// // // // // // // // // // // // //   const Logo = () => (
// // // // // // // // // // // // //     <Flex
// // // // // // // // // // // // //       align="center"
// // // // // // // // // // // // //       justify={isExpanded ? "flex-start" : "center"}
// // // // // // // // // // // // //       px={isExpanded ? 4 : 0}
// // // // // // // // // // // // //       py={4}
// // // // // // // // // // // // //       borderBottom="1px"
// // // // // // // // // // // // //       borderColor={borderColor}
// // // // // // // // // // // // //     >
// // // // // // // // // // // // //       <Flex 
// // // // // // // // // // // // //         w="40px" 
// // // // // // // // // // // // //         h="40px" 
// // // // // // // // // // // // //         bg="teal.500" 
// // // // // // // // // // // // //         borderRadius="md" 
// // // // // // // // // // // // //         align="center" 
// // // // // // // // // // // // //         justify="center"
// // // // // // // // // // // // //         boxShadow="0 2px 5px rgba(0,179,159,0.3)"
// // // // // // // // // // // // //       >
// // // // // // // // // // // // //         <Icon as={FaGraduationCap} color="white" boxSize={5} />
// // // // // // // // // // // // //       </Flex>
      
// // // // // // // // // // // // //       {isExpanded && (
// // // // // // // // // // // // //         <Text ml={3} fontWeight="bold" fontSize="lg" color={textColor}>
// // // // // // // // // // // // //           EduPortal
// // // // // // // // // // // // //         </Text>
// // // // // // // // // // // // //       )}
// // // // // // // // // // // // //     </Flex>
// // // // // // // // // // // // //   );
  
// // // // // // // // // // // // //   // User profile component
// // // // // // // // // // // // //   const UserProfile = () => {
// // // // // // // // // // // // //     if (!userData) return null;
    
// // // // // // // // // // // // //     return (
// // // // // // // // // // // // //       <Flex
// // // // // // // // // // // // //         direction="column"
// // // // // // // // // // // // //         align={isExpanded ? "flex-start" : "center"}
// // // // // // // // // // // // //         p={4}
// // // // // // // // // // // // //         borderBottom="1px"
// // // // // // // // // // // // //         borderColor={borderColor}
// // // // // // // // // // // // //       >
// // // // // // // // // // // // //         <HStack spacing={3} w="full" mb={isExpanded ? 3 : 0}>
// // // // // // // // // // // // //           <Avatar
// // // // // // // // // // // // //             size="md"
// // // // // // // // // // // // //             name={userData.name}
// // // // // // // // // // // // //             src={userData.avatar}
// // // // // // // // // // // // //             borderWidth="2px"
// // // // // // // // // // // // //             borderColor="teal.500"
// // // // // // // // // // // // //           >
// // // // // // // // // // // // //             {userData.notifications > 0 && (
// // // // // // // // // // // // //               <Badge
// // // // // // // // // // // // //                 position="absolute"
// // // // // // // // // // // // //                 bottom="-2px"
// // // // // // // // // // // // //                 right="-2px"
// // // // // // // // // // // // //                 colorScheme="red"
// // // // // // // // // // // // //                 borderRadius="full"
// // // // // // // // // // // // //                 fontSize="xs"
// // // // // // // // // // // // //                 boxSize="18px"
// // // // // // // // // // // // //                 display="flex"
// // // // // // // // // // // // //                 alignItems="center"
// // // // // // // // // // // // //                 justifyContent="center"
// // // // // // // // // // // // //                 borderWidth="2px"
// // // // // // // // // // // // //                 borderColor={bgColor}
// // // // // // // // // // // // //               >
// // // // // // // // // // // // //                 {userData.notifications}
// // // // // // // // // // // // //               </Badge>
// // // // // // // // // // // // //             )}
// // // // // // // // // // // // //           </Avatar>
          
// // // // // // // // // // // // //           {isExpanded && (
// // // // // // // // // // // // //             <Box flex={1}>
// // // // // // // // // // // // //               <Text fontWeight="semibold" fontSize="sm">{userData.name}</Text>
// // // // // // // // // // // // //               <Badge colorScheme="teal" mt={1}>
// // // // // // // // // // // // //                 {userData.role}
// // // // // // // // // // // // //               </Badge>
// // // // // // // // // // // // //             </Box>
// // // // // // // // // // // // //           )}
// // // // // // // // // // // // //         </HStack>
        
// // // // // // // // // // // // //         {isExpanded && (
// // // // // // // // // // // // //           <Box w="full" mt={2}>
// // // // // // // // // // // // //             <Flex justify="space-between" mb={1}>
// // // // // // // // // // // // //               <Text fontSize="xs">Course Progress</Text>
// // // // // // // // // // // // //               <Text fontSize="xs" fontWeight="bold">{userData.progress}%</Text>
// // // // // // // // // // // // //             </Flex>
// // // // // // // // // // // // //             <Progress
// // // // // // // // // // // // //               value={userData.progress}
// // // // // // // // // // // // //               size="xs"
// // // // // // // // // // // // //               colorScheme="teal"
// // // // // // // // // // // // //               borderRadius="full"
// // // // // // // // // // // // //               mb={2}
// // // // // // // // // // // // //             />
// // // // // // // // // // // // //             <Text fontSize="xs" color="gray.500">
// // // // // // // // // // // // //               {userData.coursesCompleted} courses completed
// // // // // // // // // // // // //             </Text>
// // // // // // // // // // // // //           </Box>
// // // // // // // // // // // // //         )}
// // // // // // // // // // // // //       </Flex>
// // // // // // // // // // // // //     );
// // // // // // // // // // // // //   };
  
// // // // // // // // // // // // //   // Navigation item component
// // // // // // // // // // // // //   const NavItem = ({ item }) => {
// // // // // // // // // // // // //     const isItemActive = isActive(item.path) || hasActiveChild(item);
// // // // // // // // // // // // //     const hasChildren = item.children && item.children.length > 0;
// // // // // // // // // // // // //     const isSubmenuOpen = expandedItems[item.id];
    
// // // // // // // // // // // // //     const handleItemClick = (e) => {
// // // // // // // // // // // // //       if (hasChildren) {
// // // // // // // // // // // // //         e.preventDefault();
// // // // // // // // // // // // //         toggleSubmenu(item.id);
// // // // // // // // // // // // //       }
// // // // // // // // // // // // //     };
    
// // // // // // // // // // // // //     return (
// // // // // // // // // // // // //       <Box mb={1}>
// // // // // // // // // // // // //         <Tooltip
// // // // // // // // // // // // //           label={!isExpanded ? item.label : ""}
// // // // // // // // // // // // //           placement="right"
// // // // // // // // // // // // //           isDisabled={isExpanded}
// // // // // // // // // // // // //         >
// // // // // // // // // // // // //           <Flex
// // // // // // // // // // // // //             as={Link}
// // // // // // // // // // // // //             to={item.path}
// // // // // // // // // // // // //             onClick={handleItemClick}
// // // // // // // // // // // // //             align="center"
// // // // // // // // // // // // //             px={4}
// // // // // // // // // // // // //             py={3}
// // // // // // // // // // // // //             borderRadius="md"
// // // // // // // // // // // // //             mx={2}
// // // // // // // // // // // // //             bg={isItemActive ? activeItemBg : "transparent"}
// // // // // // // // // // // // //             color={isItemActive ? "teal.500" : textColor}
// // // // // // // // // // // // //             _hover={{ bg: itemHoverBg }}
// // // // // // // // // // // // //             position="relative"
// // // // // // // // // // // // //             transition="all 0.2s"
// // // // // // // // // // // // //           >
// // // // // // // // // // // // //             {isItemActive && (
// // // // // // // // // // // // //               <Box
// // // // // // // // // // // // //                 position="absolute"
// // // // // // // // // // // // //                 left={0}
// // // // // // // // // // // // //                 top="50%"
// // // // // // // // // // // // //                 transform="translateY(-50%)"
// // // // // // // // // // // // //                 w="3px"
// // // // // // // // // // // // //                 h="70%"
// // // // // // // // // // // // //                 bg="teal.500"
// // // // // // // // // // // // //                 borderRightRadius="sm"
// // // // // // // // // // // // //               />
// // // // // // // // // // // // //             )}
            
// // // // // // // // // // // // //             <Icon 
// // // // // // // // // // // // //               as={getIconComponent(item.icon)} 
// // // // // // // // // // // // //               boxSize={5} 
// // // // // // // // // // // // //               color={isItemActive ? "teal.500" : "gray.500"} 
// // // // // // // // // // // // //               mr={isExpanded ? 3 : 0}
// // // // // // // // // // // // //             />
            
// // // // // // // // // // // // //             {isExpanded && (
// // // // // // // // // // // // //               <Flex justify="space-between" align="center" w="full">
// // // // // // // // // // // // //                 <Text fontSize="sm" fontWeight={isItemActive ? "semibold" : "medium"}>
// // // // // // // // // // // // //                   {item.label}
// // // // // // // // // // // // //                 </Text>
                
// // // // // // // // // // // // //                 <Flex align="center">
// // // // // // // // // // // // //                   {item.badge && (
// // // // // // // // // // // // //                     <Badge size="sm" colorScheme="red" ml={2} borderRadius="full">
// // // // // // // // // // // // //                       {item.badge}
// // // // // // // // // // // // //                     </Badge>
// // // // // // // // // // // // //                   )}
                  
// // // // // // // // // // // // //                   {item.highlight === "hot" && (
// // // // // // // // // // // // //                     <Badge size="sm" colorScheme="orange" ml={2} borderRadius="full">
// // // // // // // // // // // // //                       HOT
// // // // // // // // // // // // //                     </Badge>
// // // // // // // // // // // // //                   )}
                  
// // // // // // // // // // // // //                   {hasChildren && (
// // // // // // // // // // // // //                     <Icon
// // // // // // // // // // // // //                       as={FaChevronDown}
// // // // // // // // // // // // //                       boxSize={3}
// // // // // // // // // // // // //                       ml={2}
// // // // // // // // // // // // //                       transform={isSubmenuOpen ? "rotate(180deg)" : "rotate(0)"}
// // // // // // // // // // // // //                       transition="transform 0.3s"
// // // // // // // // // // // // //                       color="gray.400"
// // // // // // // // // // // // //                     />
// // // // // // // // // // // // //                   )}
// // // // // // // // // // // // //                 </Flex>
// // // // // // // // // // // // //               </Flex>
// // // // // // // // // // // // //             )}
// // // // // // // // // // // // //           </Flex>
// // // // // // // // // // // // //         </Tooltip>
        
// // // // // // // // // // // // //         {hasChildren && isExpanded && (
// // // // // // // // // // // // //           <Collapse in={isSubmenuOpen} animateOpacity>
// // // // // // // // // // // // //             <VStack
// // // // // // // // // // // // //               spacing={0}
// // // // // // // // // // // // //               pl={6}
// // // // // // // // // // // // //               mt={1}
// // // // // // // // // // // // //               mb={2}
// // // // // // // // // // // // //               align="stretch"
// // // // // // // // // // // // //             >
// // // // // // // // // // // // //               {item.children.map(child => (
// // // // // // // // // // // // //                 <Flex
// // // // // // // // // // // // //                   key={child.id}
// // // // // // // // // // // // //                   as={Link}
// // // // // // // // // // // // //                   to={child.path}
// // // // // // // // // // // // //                   px={3}
// // // // // // // // // // // // //                   py={2}
// // // // // // // // // // // // //                   borderRadius="md"
// // // // // // // // // // // // //                   color={isActive(child.path) ? "teal.500" : textColor}
// // // // // // // // // // // // //                   bg={isActive(child.path) ? activeItemBg : "transparent"}
// // // // // // // // // // // // //                   _hover={{ bg: itemHoverBg }}
// // // // // // // // // // // // //                   fontSize="sm"
// // // // // // // // // // // // //                   position="relative"
// // // // // // // // // // // // //                 >
// // // // // // // // // // // // //                   {isActive(child.path) && (
// // // // // // // // // // // // //                     <Box
// // // // // // // // // // // // //                       position="absolute"
// // // // // // // // // // // // //                       left={0}
// // // // // // // // // // // // //                       top="50%"
// // // // // // // // // // // // //                       transform="translateY(-50%)"
// // // // // // // // // // // // //                       w="2px"
// // // // // // // // // // // // //                       h="50%"
// // // // // // // // // // // // //                       bg="teal.500"
// // // // // // // // // // // // //                       borderRightRadius="sm"
// // // // // // // // // // // // //                     />
// // // // // // // // // // // // //                   )}
                  
// // // // // // // // // // // // //                   <Icon 
// // // // // // // // // // // // //                     as={getIconComponent(child.icon)} 
// // // // // // // // // // // // //                     boxSize={4} 
// // // // // // // // // // // // //                     color={isActive(child.path) ? "teal.500" : "gray.500"} 
// // // // // // // // // // // // //                     mr={3}
// // // // // // // // // // // // //                   />
                  
// // // // // // // // // // // // //                   <Text flex={1} fontSize="xs" fontWeight={isActive(child.path) ? "semibold" : "normal"}>
// // // // // // // // // // // // //                     {child.label}
// // // // // // // // // // // // //                   </Text>
                  
// // // // // // // // // // // // //                   {child.badge && (
// // // // // // // // // // // // //                     <Badge size="sm" colorScheme="red" fontSize="10px" ml={2}>
// // // // // // // // // // // // //                       {child.badge}
// // // // // // // // // // // // //                     </Badge>
// // // // // // // // // // // // //                   )}
                  
// // // // // // // // // // // // //                   {child.highlight === "hot" && (
// // // // // // // // // // // // //                     <Badge size="sm" colorScheme="orange" fontSize="10px" ml={2}>
// // // // // // // // // // // // //                       HOT
// // // // // // // // // // // // //                     </Badge>
// // // // // // // // // // // // //                   )}
// // // // // // // // // // // // //                 </Flex>
// // // // // // // // // // // // //               ))}
// // // // // // // // // // // // //             </VStack>
// // // // // // // // // // // // //           </Collapse>
// // // // // // // // // // // // //         )}
// // // // // // // // // // // // //       </Box>
// // // // // // // // // // // // //     );
// // // // // // // // // // // // //   };
  
// // // // // // // // // // // // //   // Footer with logout button
// // // // // // // // // // // // //   const SidebarFooter = () => (
// // // // // // // // // // // // //     <VStack
// // // // // // // // // // // // //       w="full"
// // // // // // // // // // // // //       p={4}
// // // // // // // // // // // // //       mt="auto"
// // // // // // // // // // // // //       borderTop="1px"
// // // // // // // // // // // // //       borderColor={borderColor}
// // // // // // // // // // // // //       spacing={2}
// // // // // // // // // // // // //       align={isExpanded ? "flex-start" : "center"}
// // // // // // // // // // // // //     >
// // // // // // // // // // // // //       {isExpanded ? (
// // // // // // // // // // // // //         <Flex w="full" justify="space-between" mb={2}>
// // // // // // // // // // // // //           <Menu>
// // // // // // // // // // // // //             <MenuButton
// // // // // // // // // // // // //               as={IconButton}
// // // // // // // // // // // // //               icon={<FaCog />}
// // // // // // // // // // // // //               variant="ghost"
// // // // // // // // // // // // //               colorScheme="gray"
// // // // // // // // // // // // //               aria-label="Settings"
// // // // // // // // // // // // //               size="sm"
// // // // // // // // // // // // //               borderRadius="full"
// // // // // // // // // // // // //             />
// // // // // // // // // // // // //             <MenuList fontSize="sm" shadow="lg">
// // // // // // // // // // // // //               <MenuItem>Settings</MenuItem>
// // // // // // // // // // // // //               <MenuItem>Help Center</MenuItem>
// // // // // // // // // // // // //               <Divider />
// // // // // // // // // // // // //               <MenuItem icon={<FaSignOutAlt />} color="red.500" onClick={handleLogout}>
// // // // // // // // // // // // //                 Logout
// // // // // // // // // // // // //               </MenuItem>
// // // // // // // // // // // // //             </MenuList>
// // // // // // // // // // // // //           </Menu>
          
// // // // // // // // // // // // //           <IconButton
// // // // // // // // // // // // //             icon={<FaSignOutAlt />}
// // // // // // // // // // // // //             colorScheme="red"
// // // // // // // // // // // // //             variant="ghost"
// // // // // // // // // // // // //             size="sm"
// // // // // // // // // // // // //             borderRadius="full"
// // // // // // // // // // // // //             onClick={handleLogout}
// // // // // // // // // // // // //           />
// // // // // // // // // // // // //         </Flex>
// // // // // // // // // // // // //       ) : (
// // // // // // // // // // // // //         <Tooltip label="Logout" placement="right">
// // // // // // // // // // // // //           <IconButton
// // // // // // // // // // // // //             icon={<FaSignOutAlt />}
// // // // // // // // // // // // //             colorScheme="red"
// // // // // // // // // // // // //             variant="ghost"
// // // // // // // // // // // // //             size="sm"
// // // // // // // // // // // // //             borderRadius="full"
// // // // // // // // // // // // //             onClick={handleLogout}
// // // // // // // // // // // // //           />
// // // // // // // // // // // // //         </Tooltip>
// // // // // // // // // // // // //       )}
// // // // // // // // // // // // //     </VStack>
// // // // // // // // // // // // //   );
  
// // // // // // // // // // // // //   // Main sidebar content
// // // // // // // // // // // // //   const SidebarContent = () => (
// // // // // // // // // // // // //     <Flex
// // // // // // // // // // // // //       direction="column"
// // // // // // // // // // // // //       bg={bgColor}
// // // // // // // // // // // // //       h="100vh"
// // // // // // // // // // // // //       w={isExpanded ? "260px" : "72px"}
// // // // // // // // // // // // //       transition="width 0.3s ease"
// // // // // // // // // // // // //       boxShadow="lg"
// // // // // // // // // // // // //       borderRight="1px"
// // // // // // // // // // // // //       borderColor={borderColor}
// // // // // // // // // // // // //       position="fixed"
// // // // // // // // // // // // //       overflowX="hidden"
// // // // // // // // // // // // //     >
// // // // // // // // // // // // //       <Logo />
// // // // // // // // // // // // //       <UserProfile />
      
// // // // // // // // // // // // //       {isLoading ? (
// // // // // // // // // // // // //         <Flex justify="center" align="center" flex={1}>
// // // // // // // // // // // // //           <Spinner color="teal.500" />
// // // // // // // // // // // // //         </Flex>
// // // // // // // // // // // // //       ) : error ? (
// // // // // // // // // // // // //         <Flex justify="center" align="center" p={4} color="red.500">
// // // // // // // // // // // // //           <Text fontSize="sm">{error}</Text>
// // // // // // // // // // // // //         </Flex>
// // // // // // // // // // // // //       ) : (
// // // // // // // // // // // // //         <VStack
// // // // // // // // // // // // //           spacing={0}
// // // // // // // // // // // // //           align="stretch"
// // // // // // // // // // // // //           flex={1}
// // // // // // // // // // // // //           overflowY="auto"
// // // // // // // // // // // // //           py={4}
// // // // // // // // // // // // //           css={{
// // // // // // // // // // // // //             '&::-webkit-scrollbar': {
// // // // // // // // // // // // //               width: '4px',
// // // // // // // // // // // // //             },
// // // // // // // // // // // // //             '&::-webkit-scrollbar-track': {
// // // // // // // // // // // // //               width: '4px',
// // // // // // // // // // // // //               background: 'transparent',
// // // // // // // // // // // // //             },
// // // // // // // // // // // // //             '&::-webkit-scrollbar-thumb': {
// // // // // // // // // // // // //               background: useColorModeValue('gray.200', 'gray.700'),
// // // // // // // // // // // // //               borderRadius: '24px',
// // // // // // // // // // // // //             },
// // // // // // // // // // // // //           }}
// // // // // // // // // // // // //         >
// // // // // // // // // // // // //           {menuItems.map(item => (
// // // // // // // // // // // // //             <NavItem key={item.id} item={item} />
// // // // // // // // // // // // //           ))}
// // // // // // // // // // // // //         </VStack>
// // // // // // // // // // // // //       )}
      
// // // // // // // // // // // // //       <SidebarFooter />
// // // // // // // // // // // // //     </Flex>
// // // // // // // // // // // // //   );
  
// // // // // // // // // // // // //   // Toggle sidebar expand/collapse button
// // // // // // // // // // // // //   const ToggleButton = () => (
// // // // // // // // // // // // //     <IconButton
// // // // // // // // // // // // //       icon={<FaBars />}
// // // // // // // // // // // // //       aria-label={isExpanded ? "Collapse sidebar" : "Expand sidebar"}
// // // // // // // // // // // // //       position="absolute"
// // // // // // // // // // // // //       top={4}
// // // // // // // // // // // // //       right={-12}
// // // // // // // // // // // // //       borderRadius="full"
// // // // // // // // // // // // //       size="sm"
// // // // // // // // // // // // //       boxShadow="md"
// // // // // // // // // // // // //       colorScheme="teal"
// // // // // // // // // // // // //       onClick={() => setIsExpanded(!isExpanded)}
// // // // // // // // // // // // //       display={{ base: 'none', lg: 'flex' }}
// // // // // // // // // // // // //     />
// // // // // // // // // // // // //   );
  
// // // // // // // // // // // // //   return (
// // // // // // // // // // // // //     <>
// // // // // // // // // // // // //       {/* Mobile toggle button */}
// // // // // // // // // // // // //       {isMobile && (
// // // // // // // // // // // // //         <IconButton
// // // // // // // // // // // // //           icon={<FaBars />}
// // // // // // // // // // // // //           aria-label="Open Menu"
// // // // // // // // // // // // //           position="fixed"
// // // // // // // // // // // // //           top={4}
// // // // // // // // // // // // //           right={4}
// // // // // // // // // // // // //           zIndex={20}
// // // // // // // // // // // // //           onClick={onOpen}
// // // // // // // // // // // // //           colorScheme="teal"
// // // // // // // // // // // // //           size="md"
// // // // // // // // // // // // //           borderRadius="full"
// // // // // // // // // // // // //           boxShadow="md"
// // // // // // // // // // // // //         />
// // // // // // // // // // // // //       )}
      
// // // // // // // // // // // // //       {/* Desktop sidebar */}
// // // // // // // // // // // // //       {!isMobile && (
// // // // // // // // // // // // //         <Box position="relative">
// // // // // // // // // // // // //           <SidebarContent />
// // // // // // // // // // // // //           <ToggleButton />
// // // // // // // // // // // // //           <Box ml={isExpanded ? "260px" : "72px"} transition="margin-left 0.3s ease">
// // // // // // // // // // // // //             {/* Main content would go here */}
// // // // // // // // // // // // //           </Box>
// // // // // // // // // // // // //         </Box>
// // // // // // // // // // // // //       )}
      
// // // // // // // // // // // // //       {/* Mobile drawer */}
// // // // // // // // // // // // //       {isMobile && (
// // // // // // // // // // // // //         <Drawer isOpen={isOpen} placement="left" onClose={onClose} size="xs">
// // // // // // // // // // // // //           <DrawerOverlay />
// // // // // // // // // // // // //           <DrawerContent maxW="260px">
// // // // // // // // // // // // //             <DrawerCloseButton />
// // // // // // // // // // // // //             <DrawerBody p={0}>
// // // // // // // // // // // // //               <Flex direction="column" h="full">
// // // // // // // // // // // // //                 <SidebarContent />
// // // // // // // // // // // // //               </Flex>
// // // // // // // // // // // // //             </DrawerBody>
// // // // // // // // // // // // //           </DrawerContent>
// // // // // // // // // // // // //         </Drawer>
// // // // // // // // // // // // //       )}
// // // // // // // // // // // // //     </>
// // // // // // // // // // // // //   );
// // // // // // // // // // // // // };

// // // // // // // // // // // // // export default Sidebar;

// // // // // // // // // // // // // src/components/MasterAdminSidebar.js
// // // // // // // // // // // // import React, { useState, useEffect } from "react";
// // // // // // // // // // // // import {
// // // // // // // // // // // //   Box,
// // // // // // // // // // // //   Flex,
// // // // // // // // // // // //   IconButton,
// // // // // // // // // // // //   Text,
// // // // // // // // // // // //   VStack,
// // // // // // // // // // // //   useColorModeValue,
// // // // // // // // // // // //   Collapse,
// // // // // // // // // // // //   Divider,
// // // // // // // // // // // //   Avatar,
// // // // // // // // // // // //   Badge,
// // // // // // // // // // // //   Progress,
// // // // // // // // // // // //   HStack,
// // // // // // // // // // // //   Tooltip,
// // // // // // // // // // // //   Spinner,
// // // // // // // // // // // //   Drawer,
// // // // // // // // // // // //   DrawerOverlay,
// // // // // // // // // // // //   DrawerContent,
// // // // // // // // // // // //   DrawerBody,
// // // // // // // // // // // //   Menu,
// // // // // // // // // // // //   MenuButton,
// // // // // // // // // // // //   MenuList,
// // // // // // // // // // // //   MenuItem,
// // // // // // // // // // // //   Icon
// // // // // // // // // // // // } from "@chakra-ui/react";
// // // // // // // // // // // // // Add these imports at the top
// // // // // // // // // // // // import {
// // // // // // // // // // // //   FaHome,
// // // // // // // // // // // //   FaUsers,
// // // // // // // // // // // //   FaUserPlus,
// // // // // // // // // // // //   FaUserEdit,
// // // // // // // // // // // //   FaUserTimes,
// // // // // // // // // // // //   FaShieldAlt,
// // // // // // // // // // // //   FaChalkboardTeacher,
// // // // // // // // // // // //   FaVideo,
// // // // // // // // // // // //   FaUpload,
// // // // // // // // // // // //   FaBook,
// // // // // // // // // // // //   FaLock,
// // // // // // // // // // // //   FaFolder,
// // // // // // // // // // // //   FaChartBar,
// // // // // // // // // // // //   FaUserGraduate,
// // // // // // // // // // // //   FaChartLine,
// // // // // // // // // // // //   FaCogs,
// // // // // // // // // // // //   FaCreditCard,
// // // // // // // // // // // //   FaBell,
// // // // // // // // // // // //   FaPalette,
// // // // // // // // // // // //   FaHistory,
// // // // // // // // // // // //   FaList,
// // // // // // // // // // // //   FaUserCheck,
// // // // // // // // // // // //   FaHeadset,
// // // // // // // // // // // //   FaTicketAlt,
// // // // // // // // // // // //   FaGraduationCap,FaSignOutAlt, FaChevronDown, 
// // // // // // // // // // // // } from "react-icons/fa";
// // // // // // // // // // // // import { Link, useLocation, useNavigate } from "react-router-dom";
// // // // // // // // // // // // import { useAuth } from "../../Contexts/AuthContext"; // ✅ Adjust path if needed

// // // // // // // // // // // // const MasterAdminSidebar = ({ isMobile = false, isOpen, onClose }) => {
// // // // // // // // // // // //   const [menuItems, setMenuItems] = useState([]);
// // // // // // // // // // // //   const [userData, setUserData] = useState(null);
// // // // // // // // // // // //   const [expandedItems, setExpandedItems] = useState({});
// // // // // // // // // // // //   const [isLoading, setIsLoading] = useState(true);
// // // // // // // // // // // //   const [error, setError] = useState(null);

// // // // // // // // // // // //   const location = useLocation();
// // // // // // // // // // // //   const navigate = useNavigate();
// // // // // // // // // // // //   const { logout } = useAuth();

// // // // // // // // // // // //   // Theme colors
// // // // // // // // // // // //   const bgColor = useColorModeValue("white", "gray.900");
// // // // // // // // // // // //   const borderColor = useColorModeValue("gray.200", "gray.700");
// // // // // // // // // // // //   const textColor = useColorModeValue("gray.800", "gray.200");
// // // // // // // // // // // //   const activeItemBg = useColorModeValue("teal.50", "teal.900");
// // // // // // // // // // // //   const itemHoverBg = useColorModeValue("gray.100", "gray.800");

// // // // // // // // // // // //   // Fetch data
// // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // //     const fetchData = async () => {
// // // // // // // // // // // //       setIsLoading(true);
// // // // // // // // // // // //       try {
// // // // // // // // // // // //         // In real app, replace with your API calls
// // // // // // // // // // // //        const menuData = [
// // // // // // // // // // // //   { id: 1, icon: "FaHome", label: "Dashboard", path: "/master-admin/home" },
  
// // // // // // // // // // // //   {
// // // // // // // // // // // //     id: 2,
// // // // // // // // // // // //     icon: "FaUsers",
// // // // // // // // // // // //     label: "User Management",
// // // // // // // // // // // //     children: [
// // // // // // // // // // // //       { id: 21, icon: "FaUserPlus", label: "Create User", path: "/master-admin/create/user" },
// // // // // // // // // // // //       { id: 22, icon: "FaUserEdit", label: "Update User", path: "/master-admin/user-management/update" },
// // // // // // // // // // // //       { id: 23, icon: "FaUserTimes", label: "Delete Users", path: "/master-admin/user-management/delete" },
// // // // // // // // // // // //       { id: 24, icon: "FaShieldAlt", label: "Roles & Permissions", path: "/master-admin/user-management/roles" },
// // // // // // // // // // // //       { id: 25, icon: "FaChalkboardTeacher", label: "Teacher Approvals", path: "/master-admin/user-management/teacher-approvals" }
// // // // // // // // // // // //     ]
// // // // // // // // // // // //   },

// // // // // // // // // // // //   {
// // // // // // // // // // // //     id: 3,
// // // // // // // // // // // //     icon: "FaVideo",
// // // // // // // // // // // //     label: "Course & Content",
// // // // // // // // // // // //     children: [
// // // // // // // // // // // //       { id: 31, icon: "FaUpload", label: "Upload Videos", path: "/master-admin/videos/upload" },
// // // // // // // // // // // //       { id: 32, icon: "FaBook", label: "Manage Courses", path: "/master-admin/course-control/add-update-remove" },
// // // // // // // // // // // //       { id: 33, icon: "FaLock", label: "Restrict Access", path: "/master-admin/course-control/restrict-access" },
// // // // // // // // // // // //       { id: 34, icon: "FaFolder", label: "Video Organization", path: "/master-admin/course-control/video-organization" }
// // // // // // // // // // // //     ]
// // // // // // // // // // // //   },

// // // // // // // // // // // //   {
// // // // // // // // // // // //     id: 4,
// // // // // // // // // // // //     icon: "FaChartBar",
// // // // // // // // // // // //     label: "Analytics",
// // // // // // // // // // // //     children: [
// // // // // // // // // // // //       { id: 41, icon: "FaUserGraduate", label: "Student Performance", path: "/master-admin/analytics/student-performance" },
// // // // // // // // // // // //       { id: 42, icon: "FaChalkboardTeacher", label: "Teacher Effectiveness", path: "/master-admin/analytics/teacher-effectiveness" },
// // // // // // // // // // // //       { id: 43, icon: "FaChartLine", label: "Platform Usage", path: "/master-admin/analytics/platform-usage" }
// // // // // // // // // // // //     ]
// // // // // // // // // // // //   },

// // // // // // // // // // // //   {
// // // // // // // // // // // //     id: 5,
// // // // // // // // // // // //     icon: "FaCogs",
// // // // // // // // // // // //     label: "System Settings",
// // // // // // // // // // // //     children: [
// // // // // // // // // // // //       { id: 51, icon: "FaCreditCard", label: "Payment Gateway", path: "/master-admin/settings/payment-gateway" },
// // // // // // // // // // // //       { id: 52, icon: "FaBell", label: "Notifications", path: "/master-admin/settings/notification-templates" },
// // // // // // // // // // // //       { id: 53, icon: "FaPalette", label: "Platform Preferences", path: "/master-admin/settings/platform-preferences" }
// // // // // // // // // // // //     ]
// // // // // // // // // // // //   },

// // // // // // // // // // // //   {
// // // // // // // // // // // //     id: 6,
// // // // // // // // // // // //     icon: "FaHistory",
// // // // // // // // // // // //     label: "Audit Logs",
// // // // // // // // // // // //     children: [
// // // // // // // // // // // //       { id: 61, icon: "FaList", label: "View Logs", path: "/master-admin/audit-logs/view-logs" },
// // // // // // // // // // // //       { id: 62, icon: "FaUserCheck", label: "Accountability", path: "/master-admin/audit-logs/accountability" }
// // // // // // // // // // // //     ]
// // // // // // // // // // // //   },

// // // // // // // // // // // //   {
// // // // // // // // // // // //     id: 7,
// // // // // // // // // // // //     icon: "FaHeadset",
// // // // // // // // // // // //     label: "Support",
// // // // // // // // // // // //     children: [
// // // // // // // // // // // //       { id: 71, icon: "FaTicketAlt", label: "Manage Requests", path: "/master-admin/support/manage-requests" }
// // // // // // // // // // // //     ]
// // // // // // // // // // // //   }
// // // // // // // // // // // // ];
// // // // // // // // // // // //         const userData = {
// // // // // // // // // // // //           name: "Admin User",
// // // // // // // // // // // //           role: "Master Admin",
// // // // // // // // // // // //           avatar: "/api/placeholder/40/40",
// // // // // // // // // // // //           progress: 92,
// // // // // // // // // // // //           coursesCompleted: 12,
// // // // // // // // // // // //           notifications: 2
// // // // // // // // // // // //         };

// // // // // // // // // // // //         setMenuItems(menuData);
// // // // // // // // // // // //         setUserData(userData);
// // // // // // // // // // // //         setError(null);
// // // // // // // // // // // //       } catch (err) {
// // // // // // // // // // // //         setError('Failed to load sidebar data.');
// // // // // // // // // // // //         console.error(err);
// // // // // // // // // // // //         // Fallback already set above
// // // // // // // // // // // //       } finally {
// // // // // // // // // // // //         setIsLoading(false);
// // // // // // // // // // // //       }
// // // // // // // // // // // //     };

// // // // // // // // // // // //     fetchData();
// // // // // // // // // // // //   }, []);

// // // // // // // // // // // //   // Icon mapping (simplified)
// // // // // // // // // // // //   const getIconComponent = (iconName) => {
// // // // // // // // // // // //   const iconMap = {
// // // // // // // // // // // //     FaHome,
// // // // // // // // // // // //     FaUsers,
// // // // // // // // // // // //     FaUserPlus,
// // // // // // // // // // // //     FaUserEdit,
// // // // // // // // // // // //     FaUserTimes,
// // // // // // // // // // // //     FaShieldAlt,
// // // // // // // // // // // //     FaChalkboardTeacher,
// // // // // // // // // // // //     FaVideo,
// // // // // // // // // // // //     FaUpload,
// // // // // // // // // // // //     FaBook,
// // // // // // // // // // // //     FaLock,
// // // // // // // // // // // //     FaFolder,
// // // // // // // // // // // //     FaChartBar,
// // // // // // // // // // // //     FaUserGraduate,
// // // // // // // // // // // //     FaChartLine,
// // // // // // // // // // // //     FaCogs,
// // // // // // // // // // // //     FaCreditCard,
// // // // // // // // // // // //     FaBell,
// // // // // // // // // // // //     FaPalette,
// // // // // // // // // // // //     FaHistory,
// // // // // // // // // // // //     FaList,
// // // // // // // // // // // //     FaUserCheck,
// // // // // // // // // // // //     FaHeadset,
// // // // // // // // // // // //     FaTicketAlt, FaGraduationCap, 
// // // // // // // // // // // //   };
// // // // // // // // // // // //   return iconMap[iconName] || FaGraduationCap;
// // // // // // // // // // // // };

// // // // // // // // // // // //   const toggleSubmenu = (id) => {
// // // // // // // // // // // //     setExpandedItems(prev => ({ ...prev, [id]: !prev[id] }));
// // // // // // // // // // // //   };

// // // // // // // // // // // //   const isActive = (path) => location.pathname === path;

// // // // // // // // // // // //   const hasActiveChild = (item) => {
// // // // // // // // // // // //     if (!item.children) return false;
// // // // // // // // // // // //     return item.children.some(child => isActive(child.path));
// // // // // // // // // // // //   };

// // // // // // // // // // // //   const handleLogout = () => {
// // // // // // // // // // // //     logout();
// // // // // // // // // // // //     navigate('/');
// // // // // // // // // // // //   };

// // // // // // // // // // // //   // === Components ===

// // // // // // // // // // // //   const Logo = () => (
// // // // // // // // // // // //     <Flex align="center" px={4} py={4} borderBottom="1px" borderColor={borderColor}>
// // // // // // // // // // // //       <Flex w="40px" h="40px" bg="teal.500" borderRadius="md" align="center" justify="center">
// // // // // // // // // // // //         <Icon as={FaGraduationCap} color="white" boxSize={5} />
// // // // // // // // // // // //       </Flex>
// // // // // // // // // // // //       <Text ml={3} fontWeight="bold" fontSize="lg" color={textColor}>
// // // // // // // // // // // //         AdminPortal
// // // // // // // // // // // //       </Text>
// // // // // // // // // // // //     </Flex>
// // // // // // // // // // // //   );

// // // // // // // // // // // //   const UserProfile = () => (
// // // // // // // // // // // //     <Flex direction="column" p={4} borderBottom="1px" borderColor={borderColor}>
// // // // // // // // // // // //       <HStack spacing={3} mb={3}>
// // // // // // // // // // // //         <Avatar
// // // // // // // // // // // //           size="md"
// // // // // // // // // // // //           name={userData?.name}
// // // // // // // // // // // //           src={userData?.avatar}
// // // // // // // // // // // //           borderWidth="2px"
// // // // // // // // // // // //           borderColor="teal.500"
// // // // // // // // // // // //         >
// // // // // // // // // // // //           {userData?.notifications > 0 && (
// // // // // // // // // // // //             <Badge
// // // // // // // // // // // //               position="absolute"
// // // // // // // // // // // //               bottom="-2px"
// // // // // // // // // // // //               right="-2px"
// // // // // // // // // // // //               colorScheme="red"
// // // // // // // // // // // //               borderRadius="full"
// // // // // // // // // // // //               fontSize="xs"
// // // // // // // // // // // //               boxSize="18px"
// // // // // // // // // // // //               display="flex"
// // // // // // // // // // // //               alignItems="center"
// // // // // // // // // // // //               justifyContent="center"
// // // // // // // // // // // //               borderWidth="2px"
// // // // // // // // // // // //               borderColor={bgColor}
// // // // // // // // // // // //             >
// // // // // // // // // // // //               {userData.notifications}
// // // // // // // // // // // //             </Badge>
// // // // // // // // // // // //           )}
// // // // // // // // // // // //         </Avatar>
// // // // // // // // // // // //         <Box>
// // // // // // // // // // // //           <Text fontWeight="semibold" fontSize="sm">{userData?.name}</Text>
// // // // // // // // // // // //           <Badge colorScheme="purple" mt={1}>
// // // // // // // // // // // //             {userData?.role}
// // // // // // // // // // // //           </Badge>
// // // // // // // // // // // //         </Box>
// // // // // // // // // // // //       </HStack>

// // // // // // // // // // // //       <Box w="full">
// // // // // // // // // // // //         <Flex justify="space-between" mb={1}>
// // // // // // // // // // // //           <Text fontSize="xs">Progress</Text>
// // // // // // // // // // // //           <Text fontSize="xs" fontWeight="bold">{userData?.progress || 0}%</Text>
// // // // // // // // // // // //         </Flex>
// // // // // // // // // // // //         <Progress value={userData?.progress || 0} size="xs" colorScheme="teal" borderRadius="full" mb={2} />
// // // // // // // // // // // //         <Text fontSize="xs" color="gray.500">
// // // // // // // // // // // //           {userData?.coursesCompleted || 0} courses
// // // // // // // // // // // //         </Text>
// // // // // // // // // // // //       </Box>
// // // // // // // // // // // //     </Flex>
// // // // // // // // // // // //   );

// // // // // // // // // // // //   const NavItem = ({ item }) => {
// // // // // // // // // // // //     const isItemActive = isActive(item.path) || hasActiveChild(item);
// // // // // // // // // // // //     const hasChildren = item.children?.length > 0;
// // // // // // // // // // // //     const isSubmenuOpen = expandedItems[item.id];

// // // // // // // // // // // //     const handleItemClick = (e) => {
// // // // // // // // // // // //       if (hasChildren) {
// // // // // // // // // // // //         e.preventDefault();
// // // // // // // // // // // //         toggleSubmenu(item.id);
// // // // // // // // // // // //       }
// // // // // // // // // // // //     };

// // // // // // // // // // // //     return (
// // // // // // // // // // // //       <Box mb={1}>
// // // // // // // // // // // //         <Tooltip label={item.label} placement="right" isDisabled={true}>
// // // // // // // // // // // //           <Flex
// // // // // // // // // // // //             as={Link}
// // // // // // // // // // // //             to={item.path}
// // // // // // // // // // // //             onClick={handleItemClick}
// // // // // // // // // // // //             align="center"
// // // // // // // // // // // //             px={4}
// // // // // // // // // // // //             py={3}
// // // // // // // // // // // //             borderRadius="md"
// // // // // // // // // // // //             mx={2}
// // // // // // // // // // // //             bg={isItemActive ? activeItemBg : "transparent"}
// // // // // // // // // // // //             color={isItemActive ? "teal.500" : textColor}
// // // // // // // // // // // //             _hover={{ bg: itemHoverBg }}
// // // // // // // // // // // //             position="relative"
// // // // // // // // // // // //             transition="all 0.2s"
// // // // // // // // // // // //           >
// // // // // // // // // // // //             {isItemActive && (
// // // // // // // // // // // //               <Box
// // // // // // // // // // // //                 position="absolute"
// // // // // // // // // // // //                 left={0}
// // // // // // // // // // // //                 top="50%"
// // // // // // // // // // // //                 transform="translateY(-50%)"
// // // // // // // // // // // //                 w="3px"
// // // // // // // // // // // //                 h="70%"
// // // // // // // // // // // //                 bg="teal.500"
// // // // // // // // // // // //                 borderRightRadius="sm"
// // // // // // // // // // // //               />
// // // // // // // // // // // //             )}
// // // // // // // // // // // //             <Icon
// // // // // // // // // // // //               as={getIconComponent(item.icon)}
// // // // // // // // // // // //               boxSize={5}
// // // // // // // // // // // //               color={isItemActive ? "teal.500" : "gray.500"}
// // // // // // // // // // // //               mr={3}
// // // // // // // // // // // //             />
// // // // // // // // // // // //             <Flex justify="space-between" align="center" w="full">
// // // // // // // // // // // //               <Text fontSize="sm" fontWeight={isItemActive ? "semibold" : "medium"}>
// // // // // // // // // // // //                 {item.label}
// // // // // // // // // // // //               </Text>
// // // // // // // // // // // //               {hasChildren && (
// // // // // // // // // // // //                 <Icon
// // // // // // // // // // // //                   as={FaChevronDown}
// // // // // // // // // // // //                   boxSize={3}
// // // // // // // // // // // //                   transform={isSubmenuOpen ? "rotate(180deg)" : "rotate(0)"}
// // // // // // // // // // // //                   transition="transform 0.3s"
// // // // // // // // // // // //                   color="gray.400"
// // // // // // // // // // // //                 />
// // // // // // // // // // // //               )}
// // // // // // // // // // // //             </Flex>
// // // // // // // // // // // //           </Flex>
// // // // // // // // // // // //         </Tooltip>

// // // // // // // // // // // //         {hasChildren && (
// // // // // // // // // // // //           <Collapse in={isSubmenuOpen} animateOpacity>
// // // // // // // // // // // //             <VStack spacing={0} pl={6} mt={1} mb={2} align="stretch">
// // // // // // // // // // // //               {item.children.map(child => (
// // // // // // // // // // // //                 <Flex
// // // // // // // // // // // //                   key={child.id}
// // // // // // // // // // // //                   as={Link}
// // // // // // // // // // // //                   to={child.path}
// // // // // // // // // // // //                   px={3}
// // // // // // // // // // // //                   py={2}
// // // // // // // // // // // //                   borderRadius="md"
// // // // // // // // // // // //                   color={isActive(child.path) ? "teal.500" : textColor}
// // // // // // // // // // // //                   bg={isActive(child.path) ? activeItemBg : "transparent"}
// // // // // // // // // // // //                   _hover={{ bg: itemHoverBg }}
// // // // // // // // // // // //                   fontSize="sm"
// // // // // // // // // // // //                   position="relative"
// // // // // // // // // // // //                 >
// // // // // // // // // // // //                   {isActive(child.path) && (
// // // // // // // // // // // //                     <Box
// // // // // // // // // // // //                       position="absolute"
// // // // // // // // // // // //                       left={0}
// // // // // // // // // // // //                       top="50%"
// // // // // // // // // // // //                       transform="translateY(-50%)"
// // // // // // // // // // // //                       w="2px"
// // // // // // // // // // // //                       h="50%"
// // // // // // // // // // // //                       bg="teal.500"
// // // // // // // // // // // //                       borderRightRadius="sm"
// // // // // // // // // // // //                     />
// // // // // // // // // // // //                   )}
// // // // // // // // // // // //                   <Icon
// // // // // // // // // // // //                     as={getIconComponent(child.icon)}
// // // // // // // // // // // //                     boxSize={4}
// // // // // // // // // // // //                     color={isActive(child.path) ? "teal.500" : "gray.500"}
// // // // // // // // // // // //                     mr={3}
// // // // // // // // // // // //                   />
// // // // // // // // // // // //                   <Text flex={1} fontSize="sm">
// // // // // // // // // // // //                     {child.label}
// // // // // // // // // // // //                   </Text>
// // // // // // // // // // // //                 </Flex>
// // // // // // // // // // // //               ))}
// // // // // // // // // // // //             </VStack>
// // // // // // // // // // // //           </Collapse>
// // // // // // // // // // // //         )}
// // // // // // // // // // // //       </Box>
// // // // // // // // // // // //     );
// // // // // // // // // // // //   };

// // // // // // // // // // // //   const SidebarFooter = () => (
// // // // // // // // // // // //     <VStack
// // // // // // // // // // // //       w="full"
// // // // // // // // // // // //       p={4}
// // // // // // // // // // // //       mt="auto"
// // // // // // // // // // // //       borderTop="1px"
// // // // // // // // // // // //       borderColor={borderColor}
// // // // // // // // // // // //       spacing={2}
// // // // // // // // // // // //     >
// // // // // // // // // // // //       <Menu>
// // // // // // // // // // // //         <MenuButton
// // // // // // // // // // // //           as={IconButton}
// // // // // // // // // // // //           icon={<FaCogs />}
// // // // // // // // // // // //           variant="ghost"
// // // // // // // // // // // //           colorScheme="gray"
// // // // // // // // // // // //           aria-label="Settings"
// // // // // // // // // // // //           size="sm"
// // // // // // // // // // // //           borderRadius="full"
// // // // // // // // // // // //         />
// // // // // // // // // // // //         <MenuList fontSize="sm" shadow="lg">
// // // // // // // // // // // //           <MenuItem>Profile Settings</MenuItem>
// // // // // // // // // // // //           <MenuItem>Help Center</MenuItem>
// // // // // // // // // // // //           <Divider />
// // // // // // // // // // // //           <MenuItem icon={<FaSignOutAlt />} color="red.500" onClick={handleLogout}>
// // // // // // // // // // // //             Logout
// // // // // // // // // // // //           </MenuItem>
// // // // // // // // // // // //         </MenuList>
// // // // // // // // // // // //       </Menu>
// // // // // // // // // // // //     </VStack>
// // // // // // // // // // // //   );

// // // // // // // // // // // //   const SidebarContent = () => (
// // // // // // // // // // // //     <Flex
// // // // // // // // // // // //       direction="column"
// // // // // // // // // // // //       bg={bgColor}
// // // // // // // // // // // //       h="100vh"
// // // // // // // // // // // //       w="300px"
// // // // // // // // // // // //       boxShadow="lg"
// // // // // // // // // // // //       borderRight="1px"
// // // // // // // // // // // //       borderColor={borderColor}
// // // // // // // // // // // //     >
// // // // // // // // // // // //       <Logo />
// // // // // // // // // // // //       {userData && <UserProfile />}
      
// // // // // // // // // // // //       {isLoading ? (
// // // // // // // // // // // //         <Flex justify="center" align="center" flex={1}>
// // // // // // // // // // // //           <Spinner color="teal.500" />
// // // // // // // // // // // //         </Flex>
// // // // // // // // // // // //       ) : error ? (
// // // // // // // // // // // //         <Flex justify="center" align="center" p={4} color="red.500">
// // // // // // // // // // // //           <Text fontSize="sm">{error}</Text>
// // // // // // // // // // // //         </Flex>
// // // // // // // // // // // //       ) : (
// // // // // // // // // // // //         <VStack spacing={0} align="stretch" flex={1} overflowY="auto" py={4}>
// // // // // // // // // // // //           {menuItems.map(item => (
// // // // // // // // // // // //             <NavItem key={item.id} item={item} />
// // // // // // // // // // // //           ))}
// // // // // // // // // // // //         </VStack>
// // // // // // // // // // // //       )}
      
// // // // // // // // // // // //       <SidebarFooter />
// // // // // // // // // // // //     </Flex>
// // // // // // // // // // // //   );

// // // // // // // // // // // //   // === Render Logic ===
// // // // // // // // // // // //   if (isMobile) {
// // // // // // // // // // // //     return (
// // // // // // // // // // // //       <Drawer isOpen={isOpen} placement="left" onClose={onClose} size="full">
// // // // // // // // // // // //         <DrawerOverlay />
// // // // // // // // // // // //         <DrawerContent maxW="300px">
// // // // // // // // // // // //           <DrawerBody p={0}>
// // // // // // // // // // // //             <SidebarContent />
// // // // // // // // // // // //           </DrawerBody>
// // // // // // // // // // // //         </DrawerContent>
// // // // // // // // // // // //       </Drawer>
// // // // // // // // // // // //     );
// // // // // // // // // // // //   }

// // // // // // // // // // // //   return <SidebarContent />;
// // // // // // // // // // // // };

// // // // // // // // // // // // export default MasterAdminSidebar;

// // // // // // // // // // // import React, { useState, useEffect } from "react";
// // // // // // // // // // // import {
// // // // // // // // // // //   Layout,
// // // // // // // // // // //   Menu,
// // // // // // // // // // //   Avatar,
// // // // // // // // // // //   Badge,
// // // // // // // // // // //   Progress,
// // // // // // // // // // //   Dropdown,
// // // // // // // // // // //   Space,
// // // // // // // // // // //   Typography,
// // // // // // // // // // //   Divider,
// // // // // // // // // // //   Spin,
// // // // // // // // // // //   Drawer,
// // // // // // // // // // //   ConfigProvider
// // // // // // // // // // // } from "antd";
// // // // // // // // // // // import {
// // // // // // // // // // //   HomeOutlined,
// // // // // // // // // // //   UsergroupAddOutlined,
// // // // // // // // // // //   VideoCameraOutlined,
// // // // // // // // // // //   BarChartOutlined,
// // // // // // // // // // //   SettingOutlined,
// // // // // // // // // // //   HistoryOutlined,
// // // // // // // // // // //   CustomerServiceOutlined,
// // // // // // // // // // //   LogoutOutlined,
// // // // // // // // // // //   DownOutlined,
// // // // // // // // // // //   UploadOutlined,
// // // // // // // // // // //   BookOutlined,
// // // // // // // // // // //   LockOutlined,
// // // // // // // // // // //   FolderOutlined,
// // // // // // // // // // //   CreditCardOutlined,
// // // // // // // // // // //   BellOutlined,
// // // // // // // // // // //   FileTextOutlined,
// // // // // // // // // // //   CheckCircleOutlined,
// // // // // // // // // // //   UserAddOutlined,
// // // // // // // // // // //   EditOutlined,
// // // // // // // // // // //   DeleteOutlined,
// // // // // // // // // // //   TeamOutlined,
// // // // // // // // // // //   UserOutlined,
// // // // // // // // // // //   ProfileOutlined,
// // // // // // // // // // //   BgColorsOutlined,        // ✅ Correct icon for "palette/theme"
// // // // // // // // // // //   SwapOutlined,
// // // // // // // // // // //   UserSwitchOutlined,            // ✅ Use this instead of UserSwitchOutlined
// // // // // // // // // // //   AppstoreOutlined         // Optional fallback if needed
// // // // // // // // // // // } from "@ant-design/icons";
// // // // // // // // // // // import { Link, useLocation, useNavigate } from "react-router-dom";
// // // // // // // // // // // import { useAuth } from "../../Contexts/AuthContext";

// // // // // // // // // // // const { Sider } = Layout;
// // // // // // // // // // // const { Text, Title } = Typography;

// // // // // // // // // // // // Custom theme for Ant Design
// // // // // // // // // // // const themeConfig = {
// // // // // // // // // // //   token: {
// // // // // // // // // // //     colorPrimary: "#FF7A00",
// // // // // // // // // // //     colorBgContainer: "#ffffff",
// // // // // // // // // // //     colorText: "#333333",
// // // // // // // // // // //     colorTextSecondary: "#666666",
// // // // // // // // // // //     colorBorder: "#e0e0e0",
// // // // // // // // // // //     borderRadius: 8,
// // // // // // // // // // //   },
// // // // // // // // // // //   components: {
// // // // // // // // // // //     Menu: {
// // // // // // // // // // //       itemBg: "#ffffff",
// // // // // // // // // // //       itemSelectedBg: "#FFF2E8",
// // // // // // // // // // //       itemHoverBg: "#FFF2E8",
// // // // // // // // // // //       itemSelectedColor: "#FF7A00",
// // // // // // // // // // //       iconSize: 18,
// // // // // // // // // // //     },
// // // // // // // // // // //     Layout: {
// // // // // // // // // // //       siderBg: "#ffffff",
// // // // // // // // // // //     }
// // // // // // // // // // //   }
// // // // // // // // // // // };

// // // // // // // // // // // const MasterAdminSidebar = ({ isMobile = false, isOpen, onClose }) => {
// // // // // // // // // // //   const [menuItems, setMenuItems] = useState([]);
// // // // // // // // // // //   const [userData, setUserData] = useState(null);
// // // // // // // // // // //   const [openKeys, setOpenKeys] = useState([]);
// // // // // // // // // // //   const [isLoading, setIsLoading] = useState(true);
// // // // // // // // // // //   const [error, setError] = useState(null);

// // // // // // // // // // //   const location = useLocation();
// // // // // // // // // // //   const navigate = useNavigate();
// // // // // // // // // // //   const { logout } = useAuth();

// // // // // // // // // // //   // Map routes to Ant Design menu items
// // // // // // // // // // //   const getMenuItems = () => [
// // // // // // // // // // //     {
// // // // // // // // // // //       key: "/master-admin/home",
// // // // // // // // // // //       icon: <HomeOutlined />,
// // // // // // // // // // //       label: "Dashboard"
// // // // // // // // // // //     },
// // // // // // // // // // //     {
// // // // // // // // // // //       key: "user-management",
// // // // // // // // // // //       icon: <UsergroupAddOutlined />,
// // // // // // // // // // //       label: "User Management",
// // // // // // // // // // //       children: [
// // // // // // // // // // //         { key: "/master-admin/create/user", icon: <UserAddOutlined />, label: "Create User" },
// // // // // // // // // // //         { key: "/master-admin/user-management/update", icon: <EditOutlined />, label: "Update User" },
// // // // // // // // // // //         { key: "/master-admin/user-management/delete", icon: <DeleteOutlined />, label: "Delete Users" },
// // // // // // // // // // //         { key: "/master-admin/user-management/roles", icon: <UserSwitchOutlined />, label: "Roles & Permissions" },
// // // // // // // // // // //         { key: "/master-admin/user-management/teacher-approvals", icon: <TeamOutlined />, label: "Teacher Approvals" }
// // // // // // // // // // //       ]
// // // // // // // // // // //     },
// // // // // // // // // // //     {
// // // // // // // // // // //       key: "course-content",
// // // // // // // // // // //       icon: <VideoCameraOutlined />,
// // // // // // // // // // //       label: "Course & Content",
// // // // // // // // // // //       children: [
// // // // // // // // // // //         { key: "/master-admin/videos/upload", icon: <UploadOutlined />, label: "Upload Videos" },
// // // // // // // // // // //         { key: "/master-admin/course-control/add-update-remove", icon: <BookOutlined />, label: "Manage Courses" },
// // // // // // // // // // //         { key: "/master-admin/course-control/restrict-access", icon: <LockOutlined />, label: "Restrict Access" },
// // // // // // // // // // //         { key: "/master-admin/course-control/video-organization", icon: <FolderOutlined />, label: "Video Organization" }
// // // // // // // // // // //       ]
// // // // // // // // // // //     },
// // // // // // // // // // //     {
// // // // // // // // // // //       key: "analytics",
// // // // // // // // // // //       icon: <BarChartOutlined />,
// // // // // // // // // // //       label: "Analytics",
// // // // // // // // // // //       children: [
// // // // // // // // // // //         { key: "/master-admin/analytics/student-performance", icon: <UserOutlined />, label: "Student Performance" },
// // // // // // // // // // //         { key: "/master-admin/analytics/teacher-effectiveness", icon: <TeamOutlined />, label: "Teacher Effectiveness" },
// // // // // // // // // // //         { key: "/master-admin/analytics/platform-usage", icon: <BarChartOutlined />, label: "Platform Usage" }
// // // // // // // // // // //       ]
// // // // // // // // // // //     },
// // // // // // // // // // //     {
// // // // // // // // // // //       key: "system-settings",
// // // // // // // // // // //       icon: <SettingOutlined />,
// // // // // // // // // // //       label: "System Settings",
// // // // // // // // // // //       children: [
// // // // // // // // // // //         { key: "/master-admin/settings/payment-gateway", icon: <CreditCardOutlined />, label: "Payment Gateway" },
// // // // // // // // // // //         { key: "/master-admin/settings/notification-templates", icon: <BellOutlined />, label: "Notifications" },
// // // // // // // // // // //         { key: "/master-admin/settings/platform-preferences", icon: <BgColorsOutlined />, label: "Platform Preferences" }
// // // // // // // // // // //       ]
// // // // // // // // // // //     },
// // // // // // // // // // //     {
// // // // // // // // // // //       key: "audit-logs",
// // // // // // // // // // //       icon: <HistoryOutlined />,
// // // // // // // // // // //       label: "Audit Logs",
// // // // // // // // // // //       children: [
// // // // // // // // // // //         { key: "/master-admin/audit-logs/view-logs", icon: <FileTextOutlined />, label: "View Logs" },
// // // // // // // // // // //         { key: "/master-admin/audit-logs/accountability", icon: <CheckCircleOutlined />, label: "Accountability" }
// // // // // // // // // // //       ]
// // // // // // // // // // //     },
// // // // // // // // // // //     {
// // // // // // // // // // //       key: "support",
// // // // // // // // // // //       icon: <CustomerServiceOutlined />,
// // // // // // // // // // //       label: "Support",
// // // // // // // // // // //       children: [
// // // // // // // // // // //         { key: "/master-admin/support/manage-requests", icon: <ProfileOutlined />, label: "Manage Requests" }
// // // // // // // // // // //       ]
// // // // // // // // // // //     }
// // // // // // // // // // //   ];

// // // // // // // // // // //   const handleLogout = () => {
// // // // // // // // // // //     logout();
// // // // // // // // // // //     navigate('/');
// // // // // // // // // // //   };

// // // // // // // // // // //   const handleOpenChange = (keys) => {
// // // // // // // // // // //     setOpenKeys(keys);
// // // // // // // // // // //   };

// // // // // // // // // // //   const getCurrentOpenKeys = () => {
// // // // // // // // // // //     const allItems = getMenuItems();
// // // // // // // // // // //     return allItems
// // // // // // // // // // //       .filter(item => item.children)
// // // // // // // // // // //       .map(item => {
// // // // // // // // // // //         const hasActiveChild = item.children.some(child => 
// // // // // // // // // // //           location.pathname === child.key
// // // // // // // // // // //         );
// // // // // // // // // // //         return hasActiveChild ? item.key : null;
// // // // // // // // // // //       })
// // // // // // // // // // //       .filter(Boolean);
// // // // // // // // // // //   };

// // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // //     setOpenKeys(getCurrentOpenKeys());
// // // // // // // // // // //   }, [location.pathname]);

// // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // //     const fetchData = async () => {
// // // // // // // // // // //       setIsLoading(true);
// // // // // // // // // // //       try {
// // // // // // // // // // //         const userData = {
// // // // // // // // // // //           name: "Admin User",
// // // // // // // // // // //           role: "Master Admin",
// // // // // // // // // // //           avatar: "/api/placeholder/40/40",
// // // // // // // // // // //           progress: 92,
// // // // // // // // // // //           coursesCompleted: 12,
// // // // // // // // // // //           notifications: 2
// // // // // // // // // // //         };
// // // // // // // // // // //         setUserData(userData);
// // // // // // // // // // //         setError(null);
// // // // // // // // // // //       } catch (err) {
// // // // // // // // // // //         setError('Failed to load sidebar data.');
// // // // // // // // // // //         console.error(err);
// // // // // // // // // // //       } finally {
// // // // // // // // // // //         setIsLoading(false);
// // // // // // // // // // //       }
// // // // // // // // // // //     };
// // // // // // // // // // //     fetchData();
// // // // // // // // // // //   }, []);

// // // // // // // // // // //   // User profile dropdown
// // // // // // // // // // //   const profileMenu = (
// // // // // // // // // // //     <Menu>
// // // // // // // // // // //       <Menu.Item key="profile">Profile Settings</Menu.Item>
// // // // // // // // // // //       <Menu.Item key="help">Help Center</Menu.Item>
// // // // // // // // // // //       <Menu.Divider />
// // // // // // // // // // //       <Menu.Item 
// // // // // // // // // // //         key="logout" 
// // // // // // // // // // //         icon={<LogoutOutlined />} 
// // // // // // // // // // //         danger
// // // // // // // // // // //         onClick={handleLogout}
// // // // // // // // // // //       >
// // // // // // // // // // //         Logout
// // // // // // // // // // //       </Menu.Item>
// // // // // // // // // // //     </Menu>
// // // // // // // // // // //   );

// // // // // // // // // // //   const renderSidebarContent = () => (
// // // // // // // // // // //     <ConfigProvider theme={themeConfig}>
// // // // // // // // // // //       <Sider
// // // // // // // // // // //         width={280}
// // // // // // // // // // //         style={{
// // // // // // // // // // //           height: "100vh",
// // // // // // // // // // //           position: "fixed",
// // // // // // // // // // //           left: 0,
// // // // // // // // // // //           top: 0,
// // // // // // // // // // //           bottom: 0,
// // // // // // // // // // //           overflow: "auto",
// // // // // // // // // // //           boxShadow: "2px 0 8px rgba(0,0,0,0.1)",
// // // // // // // // // // //           zIndex: 10
// // // // // // // // // // //         }}
// // // // // // // // // // //         className="custom-scrollbar"
// // // // // // // // // // //       >
// // // // // // // // // // //         {/* Logo */}
// // // // // // // // // // //         <div style={{ 
// // // // // // // // // // //           padding: "20px 24px", 
// // // // // // // // // // //           display: "flex", 
// // // // // // // // // // //           alignItems: "center",
// // // // // // // // // // //           borderBottom: "1px solid #f0f0f0"
// // // // // // // // // // //         }}>
// // // // // // // // // // //           <div style={{
// // // // // // // // // // //             width: 40,
// // // // // // // // // // //             height: 40,
// // // // // // // // // // //             backgroundColor: "#FF7A00",
// // // // // // // // // // //             borderRadius: 8,
// // // // // // // // // // //             display: "flex",
// // // // // // // // // // //             alignItems: "center",
// // // // // // // // // // //             justifyContent: "center"
// // // // // // // // // // //           }}>
// // // // // // // // // // //             <HomeOutlined style={{ color: "white", fontSize: 20 }} />
// // // // // // // // // // //           </div>
// // // // // // // // // // //           <Title level={4} style={{ 
// // // // // // // // // // //             color: "#333", 
// // // // // // // // // // //             margin: "0 0 0 12px",
// // // // // // // // // // //             fontWeight: 700
// // // // // // // // // // //           }}>
// // // // // // // // // // //             AdminPortal
// // // // // // // // // // //           </Title>
// // // // // // // // // // //         </div>

// // // // // // // // // // //         {/* User Profile */}
// // // // // // // // // // //         {userData && (
// // // // // // // // // // //           <div style={{ padding: "16px 24px", borderBottom: "1px solid #f0f0f0" }}>
// // // // // // // // // // //             <Space>
// // // // // // // // // // //               <Badge count={userData.notifications} offset={[0, -5]}>
// // // // // // // // // // //                 <Avatar 
// // // // // // // // // // //                   src={userData.avatar} 
// // // // // // // // // // //                   size="large" 
// // // // // // // // // // //                   style={{ border: "2px solid #FF7A00" }}
// // // // // // // // // // //                 />
// // // // // // // // // // //               </Badge>
// // // // // // // // // // //               <div>
// // // // // // // // // // //                 <Text strong>{userData.name}</Text>
// // // // // // // // // // //                 <Text type="secondary" style={{ fontSize: 12 }}>{userData.role}</Text>
// // // // // // // // // // //               </div>
// // // // // // // // // // //             </Space>
            
// // // // // // // // // // //             <div style={{ marginTop: 12 }}>
// // // // // // // // // // //               <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
// // // // // // // // // // //                 <Text type="secondary" style={{ fontSize: 12 }}>Progress</Text>
// // // // // // // // // // //                 <Text style={{ fontSize: 12, fontWeight: 600 }}>{userData.progress}%</Text>
// // // // // // // // // // //               </div>
// // // // // // // // // // //               <Progress 
// // // // // // // // // // //                 percent={userData.progress} 
// // // // // // // // // // //                 showInfo={false} 
// // // // // // // // // // //                 strokeColor="#FF7A00"
// // // // // // // // // // //                 size="small"
// // // // // // // // // // //               />
// // // // // // // // // // //               <Text type="secondary" style={{ fontSize: 12, marginTop: 4 }}>
// // // // // // // // // // //                 {userData.coursesCompleted} courses
// // // // // // // // // // //               </Text>
// // // // // // // // // // //             </div>
// // // // // // // // // // //           </div>
// // // // // // // // // // //         )}

// // // // // // // // // // //         {/* Menu */}
// // // // // // // // // // //         <div style={{ padding: "16px 0" }}>
// // // // // // // // // // //           {isLoading ? (
// // // // // // // // // // //             <div style={{ textAlign: "center", padding: "40px 0" }}>
// // // // // // // // // // //               <Spin size="large" />
// // // // // // // // // // //             </div>
// // // // // // // // // // //           ) : error ? (
// // // // // // // // // // //             <div style={{ textAlign: "center", padding: "20px", color: "red" }}>
// // // // // // // // // // //               {error}
// // // // // // // // // // //             </div>
// // // // // // // // // // //           ) : (
// // // // // // // // // // //             <Menu
// // // // // // // // // // //               mode="inline"
// // // // // // // // // // //               selectedKeys={[location.pathname]}
// // // // // // // // // // //               openKeys={openKeys}
// // // // // // // // // // //               onOpenChange={handleOpenChange}
// // // // // // // // // // //               items={getMenuItems()}
// // // // // // // // // // //               style={{ borderRight: 0 }}
// // // // // // // // // // //             />
// // // // // // // // // // //           )}
// // // // // // // // // // //         </div>

// // // // // // // // // // //         {/* Profile Dropdown */}
// // // // // // // // // // //         <div style={{ 
// // // // // // // // // // //           position: "absolute", 
// // // // // // // // // // //           bottom: 24, 
// // // // // // // // // // //           width: "100%", 
// // // // // // // // // // //           padding: "0 24px" 
// // // // // // // // // // //         }}>
// // // // // // // // // // //           <Dropdown overlay={profileMenu} placement="topLeft" arrow>
// // // // // // // // // // //             <div style={{ 
// // // // // // // // // // //               cursor: "pointer", 
// // // // // // // // // // //               padding: "8px 12px", 
// // // // // // // // // // //               borderRadius: 8,
// // // // // // // // // // //               display: "flex",
// // // // // // // // // // //               alignItems: "center"
// // // // // // // // // // //             }}>
// // // // // // // // // // //               <SettingOutlined style={{ color: "#FF7A00", marginRight: 12 }} />
// // // // // // // // // // //               <Text>Account Settings</Text>
// // // // // // // // // // //               <DownOutlined style={{ fontSize: 10, marginLeft: 8 }} />
// // // // // // // // // // //             </div>
// // // // // // // // // // //           </Dropdown>
// // // // // // // // // // //         </div>
// // // // // // // // // // //       </Sider>
// // // // // // // // // // //     </ConfigProvider>
// // // // // // // // // // //   );

// // // // // // // // // // //   if (isMobile) {
// // // // // // // // // // //     return (
// // // // // // // // // // //       <Drawer
// // // // // // // // // // //         open={isOpen}
// // // // // // // // // // //         onClose={onClose}
// // // // // // // // // // //         placement="left"
// // // // // // // // // // //         closable={false}
// // // // // // // // // // //         width={280}
// // // // // // // // // // //         styles={{ body: { padding: 0 } }}
// // // // // // // // // // //       >
// // // // // // // // // // //         {renderSidebarContent()}
// // // // // // // // // // //       </Drawer>
// // // // // // // // // // //     );
// // // // // // // // // // //   }

// // // // // // // // // // //   return renderSidebarContent();
// // // // // // // // // // // };

// // // // // // // // // // // export default MasterAdminSidebar;

// // // // // // // // // // import React, { useState, useEffect } from "react";
// // // // // // // // // // import {
// // // // // // // // // //   Layout,
// // // // // // // // // //   Menu,
// // // // // // // // // //   Avatar,
// // // // // // // // // //   Badge,
// // // // // // // // // //   Progress,
// // // // // // // // // //   Dropdown,
// // // // // // // // // //   Space,
// // // // // // // // // //   Typography,
// // // // // // // // // //   Divider,
// // // // // // // // // //   Spin,
// // // // // // // // // //   Drawer,
// // // // // // // // // //   ConfigProvider
// // // // // // // // // // } from "antd";
// // // // // // // // // // import {
// // // // // // // // // //   HomeOutlined,
// // // // // // // // // //   UsergroupAddOutlined,
// // // // // // // // // //   VideoCameraOutlined,
// // // // // // // // // //   BarChartOutlined,
// // // // // // // // // //   SettingOutlined,
// // // // // // // // // //   HistoryOutlined,
// // // // // // // // // //   CustomerServiceOutlined,
// // // // // // // // // //   LogoutOutlined,
// // // // // // // // // //   UploadOutlined,
// // // // // // // // // //   BookOutlined,
// // // // // // // // // //   LockOutlined,
// // // // // // // // // //   FolderOutlined,
// // // // // // // // // //   CreditCardOutlined,
// // // // // // // // // //   BellOutlined,
// // // // // // // // // //   BgColorsOutlined,
// // // // // // // // // //   FileTextOutlined,
// // // // // // // // // //   CheckCircleOutlined,
// // // // // // // // // //   UserAddOutlined,
// // // // // // // // // //   EditOutlined,
// // // // // // // // // //   DeleteOutlined,
// // // // // // // // // //   TeamOutlined,
// // // // // // // // // //   UserOutlined,
// // // // // // // // // //   ProfileOutlined,
// // // // // // // // // //   SwapOutlined
// // // // // // // // // // } from "@ant-design/icons";
// // // // // // // // // // import { Link, useLocation, useNavigate } from "react-router-dom";
// // // // // // // // // // import { useAuth } from "../../Contexts/AuthContext";

// // // // // // // // // // const { Sider } = Layout;
// // // // // // // // // // const { Text, Title } = Typography;

// // // // // // // // // // const themeConfig = {
// // // // // // // // // //   token: {
// // // // // // // // // //     colorPrimary: "#FF7A00",
// // // // // // // // // //     colorBgContainer: "#ffffff",
// // // // // // // // // //     colorText: "#333333",
// // // // // // // // // //     colorTextSecondary: "#666666",
// // // // // // // // // //     colorBorder: "#e0e0e0",
// // // // // // // // // //     borderRadius: 8,
// // // // // // // // // //   },
// // // // // // // // // //   components: {
// // // // // // // // // //     Menu: {
// // // // // // // // // //       itemBg: "#ffffff",
// // // // // // // // // //       itemSelectedBg: "#FFF2E8",
// // // // // // // // // //       itemHoverBg: "#FFF2E8",
// // // // // // // // // //       itemSelectedColor: "#FF7A00",
// // // // // // // // // //       iconSize: 18,
// // // // // // // // // //     },
// // // // // // // // // //   }
// // // // // // // // // // };

// // // // // // // // // // const MasterAdminSidebar = ({ isMobile = false, isOpen, onClose }) => {
// // // // // // // // // //   const [userData, setUserData] = useState(null);
// // // // // // // // // //   const [openKeys, setOpenKeys] = useState([]);
// // // // // // // // // //   const [isLoading, setIsLoading] = useState(true);

// // // // // // // // // //   const location = useLocation();
// // // // // // // // // //   const navigate = useNavigate();
// // // // // // // // // //   const { logout } = useAuth();

// // // // // // // // // //   const getMenuItems = () => [
// // // // // // // // // //     { key: "/master-admin/home", icon: <HomeOutlined />, label: "Dashboard" },
// // // // // // // // // //     {
// // // // // // // // // //       key: "user-management",
// // // // // // // // // //       icon: <UsergroupAddOutlined />,
// // // // // // // // // //       label: "User Management",
// // // // // // // // // //       children: [
// // // // // // // // // //         { key: "/master-admin/create/user", icon: <UserAddOutlined />, label: "Create User" },
// // // // // // // // // //         { key: "/master-admin/user-management/update", icon: <EditOutlined />, label: "Update User" },
// // // // // // // // // //         { key: "/master-admin/user-management/delete", icon: <DeleteOutlined />, label: "Delete Users" },
// // // // // // // // // //         { key: "/master-admin/user-management/roles", icon: <SwapOutlined />, label: "Roles & Permissions" },
// // // // // // // // // //         { key: "/master-admin/user-management/teacher-approvals", icon: <TeamOutlined />, label: "Teacher Approvals" }
// // // // // // // // // //       ]
// // // // // // // // // //     },
// // // // // // // // // //     {
// // // // // // // // // //       key: "course-content",
// // // // // // // // // //       icon: <VideoCameraOutlined />,
// // // // // // // // // //       label: "Course & Content",
// // // // // // // // // //       children: [
// // // // // // // // // //         { key: "/master-admin/videos/upload", icon: <UploadOutlined />, label: "Upload Videos" },
// // // // // // // // // //         { key: "/master-admin/course-control/add-update-remove", icon: <BookOutlined />, label: "Manage Courses" },
// // // // // // // // // //         { key: "/master-admin/course-control/restrict-access", icon: <LockOutlined />, label: "Restrict Access" },
// // // // // // // // // //         { key: "/master-admin/course-control/video-organization", icon: <FolderOutlined />, label: "Video Organization" }
// // // // // // // // // //       ]
// // // // // // // // // //     },
// // // // // // // // // //     {
// // // // // // // // // //       key: "analytics",
// // // // // // // // // //       icon: <BarChartOutlined />,
// // // // // // // // // //       label: "Analytics",
// // // // // // // // // //       children: [
// // // // // // // // // //         { key: "/master-admin/analytics/student-performance", icon: <UserOutlined />, label: "Student Performance" },
// // // // // // // // // //         { key: "/master-admin/analytics/teacher-effectiveness", icon: <TeamOutlined />, label: "Teacher Effectiveness" },
// // // // // // // // // //         { key: "/master-admin/analytics/platform-usage", icon: <BarChartOutlined />, label: "Platform Usage" }
// // // // // // // // // //       ]
// // // // // // // // // //     },
// // // // // // // // // //     {
// // // // // // // // // //       key: "system-settings",
// // // // // // // // // //       icon: <SettingOutlined />,
// // // // // // // // // //       label: "System Settings",
// // // // // // // // // //       children: [
// // // // // // // // // //         { key: "/master-admin/settings/payment-gateway", icon: <CreditCardOutlined />, label: "Payment Gateway" },
// // // // // // // // // //         { key: "/master-admin/settings/notification-templates", icon: <BellOutlined />, label: "Notifications" },
// // // // // // // // // //         { key: "/master-admin/settings/platform-preferences", icon: <BgColorsOutlined />, label: "Platform Preferences" }
// // // // // // // // // //       ]
// // // // // // // // // //     },
// // // // // // // // // //     {
// // // // // // // // // //       key: "audit-logs",
// // // // // // // // // //       icon: <HistoryOutlined />,
// // // // // // // // // //       label: "Audit Logs",
// // // // // // // // // //       children: [
// // // // // // // // // //         { key: "/master-admin/audit-logs/view-logs", icon: <FileTextOutlined />, label: "View Logs" },
// // // // // // // // // //         { key: "/master-admin/audit-logs/accountability", icon: <CheckCircleOutlined />, label: "Accountability" }
// // // // // // // // // //       ]
// // // // // // // // // //     },
// // // // // // // // // //     {
// // // // // // // // // //       key: "support",
// // // // // // // // // //       icon: <CustomerServiceOutlined />,
// // // // // // // // // //       label: "Support",
// // // // // // // // // //       children: [
// // // // // // // // // //         { key: "/master-admin/support/manage-requests", icon: <ProfileOutlined />, label: "Manage Requests" }
// // // // // // // // // //       ]
// // // // // // // // // //     }
// // // // // // // // // //   ];

// // // // // // // // // //   const handleLogout = () => {
// // // // // // // // // //     logout();
// // // // // // // // // //     navigate('/');
// // // // // // // // // //   };

// // // // // // // // // //   const handleOpenChange = (keys) => {
// // // // // // // // // //     setOpenKeys(keys);
// // // // // // // // // //   };

// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     const allItems = getMenuItems();
// // // // // // // // // //     const activeParent = allItems
// // // // // // // // // //       .filter(item => item.children)
// // // // // // // // // //       .find(item => 
// // // // // // // // // //         item.children.some(child => location.pathname === child.key)
// // // // // // // // // //       );
// // // // // // // // // //     setOpenKeys(activeParent ? [activeParent.key] : []);
// // // // // // // // // //   }, [location.pathname]);

// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     const fetchData = async () => {
// // // // // // // // // //       setIsLoading(true);
// // // // // // // // // //       try {
// // // // // // // // // //         const userData = {
// // // // // // // // // //           name: "Admin User",
// // // // // // // // // //           role: "Master Admin",
// // // // // // // // // //           avatar: "/api/placeholder/40/40",
// // // // // // // // // //           progress: 92,
// // // // // // // // // //           coursesCompleted: 12,
// // // // // // // // // //           notifications: 2
// // // // // // // // // //         };
// // // // // // // // // //         setUserData(userData);
// // // // // // // // // //       } catch (err) {
// // // // // // // // // //         console.error(err);
// // // // // // // // // //       } finally {
// // // // // // // // // //         setIsLoading(false);
// // // // // // // // // //       }
// // // // // // // // // //     };
// // // // // // // // // //     fetchData();
// // // // // // // // // //   }, []);

// // // // // // // // // //   const profileMenu = (
// // // // // // // // // //     <Menu>
// // // // // // // // // //       <Menu.Item key="profile">Profile Settings</Menu.Item>
// // // // // // // // // //       <Menu.Item key="help">Help Center</Menu.Item>
// // // // // // // // // //       <Menu.Divider />
// // // // // // // // // //       <Menu.Item 
// // // // // // // // // //         key="logout" 
// // // // // // // // // //         icon={<LogoutOutlined />} 
// // // // // // // // // //         danger
// // // // // // // // // //         onClick={handleLogout}
// // // // // // // // // //       >
// // // // // // // // // //         Logout
// // // // // // // // // //       </Menu.Item>
// // // // // // // // // //     </Menu>
// // // // // // // // // //   );

// // // // // // // // // //   // ✅ Main sidebar content with flex layout
// // // // // // // // // //   const SidebarContent = () => (
// // // // // // // // // //     <ConfigProvider theme={themeConfig}>
// // // // // // // // // //       <Sider
// // // // // // // // // //         width={280}
// // // // // // // // // //         style={{
// // // // // // // // // //           height: "100vh",
// // // // // // // // // //           position: "fixed",
// // // // // // // // // //           left: 0,
// // // // // // // // // //           top: 0,
// // // // // // // // // //           overflow: "hidden", // Prevent outer scroll
// // // // // // // // // //           boxShadow: "2px 0 8px rgba(0,0,0,0.1)",
// // // // // // // // // //           display: "flex",
// // // // // // // // // //           flexDirection: "column"
// // // // // // // // // //         }}
// // // // // // // // // //       >
// // // // // // // // // //         {/* Logo */}
// // // // // // // // // //         <div style={{ 
// // // // // // // // // //           padding: "20px 24px", 
// // // // // // // // // //           display: "flex", 
// // // // // // // // // //           alignItems: "center",
// // // // // // // // // //           borderBottom: "1px solid #f0f0f0"
// // // // // // // // // //         }}>
// // // // // // // // // //           <div style={{
// // // // // // // // // //             width: 40,
// // // // // // // // // //             height: 40,
// // // // // // // // // //             backgroundColor: "#FF7A00",
// // // // // // // // // //             borderRadius: 8,
// // // // // // // // // //             display: "flex",
// // // // // // // // // //             alignItems: "center",
// // // // // // // // // //             justifyContent: "center"
// // // // // // // // // //           }}>
// // // // // // // // // //             <HomeOutlined style={{ color: "white", fontSize: 20 }} />
// // // // // // // // // //           </div>
// // // // // // // // // //           <Title level={4} style={{ 
// // // // // // // // // //             color: "#333", 
// // // // // // // // // //             margin: "0 0 0 12px",
// // // // // // // // // //             fontWeight: 700
// // // // // // // // // //           }}>
// // // // // // // // // //             AdminPortal
// // // // // // // // // //           </Title>
// // // // // // // // // //         </div>

// // // // // // // // // //         {/* User Profile */}
// // // // // // // // // //         {userData && (
// // // // // // // // // //           <div style={{ 
// // // // // // // // // //             padding: "16px 24px", 
// // // // // // // // // //             borderBottom: "1px solid #f0f0f0",
// // // // // // // // // //             marginBottom: 16
// // // // // // // // // //           }}>
// // // // // // // // // //             <Space>
// // // // // // // // // //               <Badge count={userData.notifications} offset={[0, -5]}>
// // // // // // // // // //                 <Avatar 
// // // // // // // // // //                   src={userData.avatar} 
// // // // // // // // // //                   size="large" 
// // // // // // // // // //                   style={{ border: "2px solid #FF7A00" }}
// // // // // // // // // //                 />
// // // // // // // // // //               </Badge>
// // // // // // // // // //               <div>
// // // // // // // // // //                 <Text strong>{userData.name}</Text>
// // // // // // // // // //                 <Text type="secondary" style={{ fontSize: 12 }}>{userData.role}</Text>
// // // // // // // // // //               </div>
// // // // // // // // // //             </Space>
            
// // // // // // // // // //             <div style={{ marginTop: 12 }}>
// // // // // // // // // //               <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
// // // // // // // // // //                 <Text type="secondary" style={{ fontSize: 12 }}>Progress</Text>
// // // // // // // // // //                 <Text style={{ fontSize: 12, fontWeight: 600 }}>{userData.progress}%</Text>
// // // // // // // // // //               </div>
// // // // // // // // // //               <Progress 
// // // // // // // // // //                 percent={userData.progress} 
// // // // // // // // // //                 showInfo={false} 
// // // // // // // // // //                 strokeColor="#FF7A00"
// // // // // // // // // //                 size="small"
// // // // // // // // // //               />
// // // // // // // // // //               <Text type="secondary" style={{ fontSize: 12, marginTop: 4 }}>
// // // // // // // // // //                 {userData.coursesCompleted} courses
// // // // // // // // // //               </Text>
// // // // // // // // // //             </div>
// // // // // // // // // //           </div>
// // // // // // // // // //         )}

// // // // // // // // // //         {/* Scrollable Menu Area ✅ */}
// // // // // // // // // //         <div style={{ 
// // // // // // // // // //           flex: 1, 
// // // // // // // // // //           overflowY: "auto", 
// // // // // // // // // //           paddingRight: 8 
// // // // // // // // // //         }}>
// // // // // // // // // //           {isLoading ? (
// // // // // // // // // //             <div style={{ textAlign: "center", padding: "40px 0" }}>
// // // // // // // // // //               <Spin size="large" />
// // // // // // // // // //             </div>
// // // // // // // // // //           ) : (
// // // // // // // // // //             <Menu
// // // // // // // // // //               mode="inline"
// // // // // // // // // //               selectedKeys={[location.pathname]}
// // // // // // // // // //               openKeys={openKeys}
// // // // // // // // // //               onOpenChange={handleOpenChange}
// // // // // // // // // //               items={getMenuItems()}
// // // // // // // // // //               style={{ borderRight: 0, height: "100%" }}
// // // // // // // // // //             />
// // // // // // // // // //           )}
// // // // // // // // // //         </div>

// // // // // // // // // //         {/* Footer - Stays at bottom without overlap ✅ */}
// // // // // // // // // //         <div style={{ 
// // // // // // // // // //           padding: "12px 24px 24px", 
// // // // // // // // // //           borderTop: "1px solid #f0f0f0"
// // // // // // // // // //         }}>
// // // // // // // // // //           <Dropdown overlay={profileMenu} placement="topLeft" arrow>
// // // // // // // // // //             <div style={{ 
// // // // // // // // // //               cursor: "pointer", 
// // // // // // // // // //               padding: "10px 12px", 
// // // // // // // // // //               borderRadius: 8,
// // // // // // // // // //               display: "flex",
// // // // // // // // // //               alignItems: "center",
// // // // // // // // // //               backgroundColor: "transparent",
// // // // // // // // // //               transition: "background 0.2s"
// // // // // // // // // //             }}
// // // // // // // // // //             onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#fafafa"}
// // // // // // // // // //             onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "transparent"}
// // // // // // // // // //             >
// // // // // // // // // //               <SettingOutlined style={{ color: "#FF7A00", marginRight: 12, fontSize: 16 }} />
// // // // // // // // // //               <Text style={{ color: "#333", fontWeight: 500 }}>Account Settings</Text>
// // // // // // // // // //             </div>
// // // // // // // // // //           </Dropdown>
// // // // // // // // // //         </div>
// // // // // // // // // //       </Sider>
// // // // // // // // // //     </ConfigProvider>
// // // // // // // // // //   );

// // // // // // // // // //   if (isMobile) {
// // // // // // // // // //     return (
// // // // // // // // // //       <Drawer
// // // // // // // // // //         open={isOpen}
// // // // // // // // // //         onClose={onClose}
// // // // // // // // // //         placement="left"
// // // // // // // // // //         closable={false}
// // // // // // // // // //         width={280}
// // // // // // // // // //         styles={{ body: { padding: 0 } }}
// // // // // // // // // //       >
// // // // // // // // // //         <SidebarContent />
// // // // // // // // // //       </Drawer>
// // // // // // // // // //     );
// // // // // // // // // //   }

// // // // // // // // // //   return <SidebarContent />;
// // // // // // // // // // };

// // // // // // // // // // export default MasterAdminSidebar;
// // // // // // // // // import React, { useState, useEffect, useMemo } from "react";
// // // // // // // // // import {
// // // // // // // // //   Layout,
// // // // // // // // //   Menu,
// // // // // // // // //   Avatar,
// // // // // // // // //   Badge,
// // // // // // // // //   Progress,
// // // // // // // // //   Dropdown,
// // // // // // // // //   Space,
// // // // // // // // //   Typography,
// // // // // // // // //   Spin,
// // // // // // // // //   Drawer,
// // // // // // // // //   ConfigProvider
// // // // // // // // // } from "antd";
// // // // // // // // // import {
// // // // // // // // //   HomeOutlined,
// // // // // // // // //   UsergroupAddOutlined,
// // // // // // // // //   VideoCameraOutlined,
// // // // // // // // //   BarChartOutlined,
// // // // // // // // //   SettingOutlined,
// // // // // // // // //   HistoryOutlined,
// // // // // // // // //   CustomerServiceOutlined,
// // // // // // // // //   LogoutOutlined,
// // // // // // // // //   UploadOutlined,
// // // // // // // // //   BookOutlined,
// // // // // // // // //   LockOutlined,
// // // // // // // // //   FolderOutlined,
// // // // // // // // //   CreditCardOutlined,
// // // // // // // // //   BellOutlined,
// // // // // // // // //   BgColorsOutlined,
// // // // // // // // //   FileTextOutlined,
// // // // // // // // //   CheckCircleOutlined,
// // // // // // // // //   UserAddOutlined,
// // // // // // // // //   EditOutlined,
// // // // // // // // //   DeleteOutlined,
// // // // // // // // //   TeamOutlined,
// // // // // // // // //   UserOutlined,
// // // // // // // // //   ProfileOutlined,
// // // // // // // // //   SwapOutlined
// // // // // // // // // } from "@ant-design/icons";
// // // // // // // // // import { Link, useLocation, useNavigate } from "react-router-dom";
// // // // // // // // // import { useAuth } from "../../Contexts/AuthContext";

// // // // // // // // // const { Sider } = Layout;
// // // // // // // // // const { Text, Title } = Typography;

// // // // // // // // // const themeConfig = {
// // // // // // // // //   token: {
// // // // // // // // //     colorPrimary: "#FF7A00",
// // // // // // // // //     colorBgContainer: "#ffffff",
// // // // // // // // //     colorText: "#333333",
// // // // // // // // //     colorTextSecondary: "#666666",
// // // // // // // // //     colorBorder: "#e0e0e0",
// // // // // // // // //     borderRadius: 8,
// // // // // // // // //   },
// // // // // // // // //   components: {
// // // // // // // // //     Menu: {
// // // // // // // // //       itemSelectedBg: "#FFF2E8",
// // // // // // // // //       itemHoverBg: "#FFF2E8",
// // // // // // // // //       itemSelectedColor: "#FF7A00",
// // // // // // // // //     },
// // // // // // // // //   }
// // // // // // // // // };

// // // // // // // // // const MasterAdminSidebar = ({ isMobile = false, isOpen, onClose }) => {
// // // // // // // // //   const [userData, setUserData] = useState(null);
// // // // // // // // //   const [openKeys, setOpenKeys] = useState([]);
// // // // // // // // //   const [isLoading, setIsLoading] = useState(true);

// // // // // // // // //   const location = useLocation();
// // // // // // // // //   const navigate = useNavigate();
// // // // // // // // //   const { logout } = useAuth();

// // // // // // // // //   // Compute active parent keys
// // // // // // // // //   useEffect(() => {
// // // // // // // // //     const parentKeys = [];
// // // // // // // // //     if (location.pathname.startsWith("/master-admin/user-management")) {
// // // // // // // // //       parentKeys.push("user-management");
// // // // // // // // //     } else if (location.pathname.startsWith("/master-admin/course-control") || 
// // // // // // // // //                location.pathname.startsWith("/master-admin/videos")) {
// // // // // // // // //       parentKeys.push("course-content");
// // // // // // // // //     } else if (location.pathname.startsWith("/master-admin/analytics")) {
// // // // // // // // //       parentKeys.push("analytics");
// // // // // // // // //     } else if (location.pathname.startsWith("/master-admin/settings")) {
// // // // // // // // //       parentKeys.push("system-settings");
// // // // // // // // //     } else if (location.pathname.startsWith("/master-admin/audit-logs")) {
// // // // // // // // //       parentKeys.push("audit-logs");
// // // // // // // // //     } else if (location.pathname.startsWith("/master-admin/support")) {
// // // // // // // // //       parentKeys.push("support");
// // // // // // // // //     }
// // // // // // // // //     setOpenKeys(parentKeys);
// // // // // // // // //   }, [location.pathname]);

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     const fetchData = async () => {
// // // // // // // // //       setIsLoading(true);
// // // // // // // // //       try {
// // // // // // // // //         const userData = {
// // // // // // // // //           name: "Admin User",
// // // // // // // // //           role: "Master Admin",
// // // // // // // // //           avatar: "/api/placeholder/40/40",
// // // // // // // // //           progress: 92,
// // // // // // // // //           coursesCompleted: 12,
// // // // // // // // //           notifications: 2
// // // // // // // // //         };
// // // // // // // // //         setUserData(userData);
// // // // // // // // //       } catch (err) {
// // // // // // // // //         console.error(err);
// // // // // // // // //       } finally {
// // // // // // // // //         setIsLoading(false);
// // // // // // // // //       }
// // // // // // // // //     };
// // // // // // // // //     fetchData();
// // // // // // // // //   }, []);

// // // // // // // // //   const handleLogout = () => {
// // // // // // // // //     logout();
// // // // // // // // //     navigate('/');
// // // // // // // // //   };

// // // // // // // // //   const profileMenu = (
// // // // // // // // //     <Menu>
// // // // // // // // //       <Menu.Item key="profile">Profile Settings</Menu.Item>
// // // // // // // // //       <Menu.Item key="help">Help Center</Menu.Item>
// // // // // // // // //       <Menu.Divider />
// // // // // // // // //       <Menu.Item 
// // // // // // // // //         key="logout" 
// // // // // // // // //         icon={<LogoutOutlined />} 
// // // // // // // // //         danger
// // // // // // // // //         onClick={handleLogout}
// // // // // // // // //       >
// // // // // // // // //         Logout
// // // // // // // // //       </Menu.Item>
// // // // // // // // //     </Menu>
// // // // // // // // //   );

// // // // // // // // //   // ✅ Render menu with Link for proper SPA navigation
// // // // // // // // //   const renderMenu = () => (
// // // // // // // // //     <>
// // // // // // // // //       <Menu.Item key="/master-admin/home" icon={<HomeOutlined />}>
// // // // // // // // //         <Link to="/master-admin/home">Dashboard</Link>
// // // // // // // // //       </Menu.Item>

// // // // // // // // //       <Menu.SubMenu
// // // // // // // // //         key="user-management"
// // // // // // // // //         icon={<UsergroupAddOutlined />}
// // // // // // // // //         title="User Management"
// // // // // // // // //       >
// // // // // // // // //         <Menu.Item key="/master-admin/create/user" icon={<UserAddOutlined />}>
// // // // // // // // //           <Link to="/master-admin/create/user">Create User</Link>
// // // // // // // // //         </Menu.Item>
// // // // // // // // //         <Menu.Item key="/master-admin/user-management/update" icon={<EditOutlined />}>
// // // // // // // // //           <Link to="/master-admin/user-management/update">Update User</Link>
// // // // // // // // //         </Menu.Item>
// // // // // // // // //         <Menu.Item key="/master-admin/user-management/delete" icon={<DeleteOutlined />}>
// // // // // // // // //           <Link to="/master-admin/user-management/delete">Delete Users</Link>
// // // // // // // // //         </Menu.Item>
// // // // // // // // //         <Menu.Item key="/master-admin/user-management/roles" icon={<SwapOutlined />}>
// // // // // // // // //           <Link to="/master-admin/user-management/roles">Roles & Permissions</Link>
// // // // // // // // //         </Menu.Item>
// // // // // // // // //         <Menu.Item key="/master-admin/user-management/teacher-approvals" icon={<TeamOutlined />}>
// // // // // // // // //           <Link to="/master-admin/user-management/teacher-approvals">Teacher Approvals</Link>
// // // // // // // // //         </Menu.Item>
// // // // // // // // //       </Menu.SubMenu>

// // // // // // // // //       <Menu.SubMenu
// // // // // // // // //         key="course-content"
// // // // // // // // //         icon={<VideoCameraOutlined />}
// // // // // // // // //         title="Course & Content"
// // // // // // // // //       >
// // // // // // // // //         <Menu.Item key="/master-admin/videos/upload" icon={<UploadOutlined />}>
// // // // // // // // //           <Link to="/master-admin/videos/upload">Upload Videos</Link>
// // // // // // // // //         </Menu.Item>
// // // // // // // // //         <Menu.Item key="/master-admin/course-control/add-update-remove" icon={<BookOutlined />}>
// // // // // // // // //           <Link to="/master-admin/course-control/add-update-remove">Manage Courses</Link>
// // // // // // // // //         </Menu.Item>
// // // // // // // // //         <Menu.Item key="/master-admin/course-control/restrict-access" icon={<LockOutlined />}>
// // // // // // // // //           <Link to="/master-admin/course-control/restrict-access">Restrict Access</Link>
// // // // // // // // //         </Menu.Item>
// // // // // // // // //         <Menu.Item key="/master-admin/course-control/video-organization" icon={<FolderOutlined />}>
// // // // // // // // //           <Link to="/master-admin/course-control/video-organization">Video Organization</Link>
// // // // // // // // //         </Menu.Item>
// // // // // // // // //       </Menu.SubMenu>

// // // // // // // // //       <Menu.SubMenu
// // // // // // // // //         key="analytics"
// // // // // // // // //         icon={<BarChartOutlined />}
// // // // // // // // //         title="Analytics"
// // // // // // // // //       >
// // // // // // // // //         <Menu.Item key="/master-admin/analytics/student-performance" icon={<UserOutlined />}>
// // // // // // // // //           <Link to="/master-admin/analytics/student-performance">Student Performance</Link>
// // // // // // // // //         </Menu.Item>
// // // // // // // // //         <Menu.Item key="/master-admin/analytics/teacher-effectiveness" icon={<TeamOutlined />}>
// // // // // // // // //           <Link to="/master-admin/analytics/teacher-effectiveness">Teacher Effectiveness</Link>
// // // // // // // // //         </Menu.Item>
// // // // // // // // //         <Menu.Item key="/master-admin/analytics/platform-usage" icon={<BarChartOutlined />}>
// // // // // // // // //           <Link to="/master-admin/analytics/platform-usage">Platform Usage</Link>
// // // // // // // // //         </Menu.Item>
// // // // // // // // //       </Menu.SubMenu>

// // // // // // // // //       <Menu.SubMenu
// // // // // // // // //         key="system-settings"
// // // // // // // // //         icon={<SettingOutlined />}
// // // // // // // // //         title="System Settings"
// // // // // // // // //       >
// // // // // // // // //         <Menu.Item key="/master-admin/settings/payment-gateway" icon={<CreditCardOutlined />}>
// // // // // // // // //           <Link to="/master-admin/settings/payment-gateway">Payment Gateway</Link>
// // // // // // // // //         </Menu.Item>
// // // // // // // // //         <Menu.Item key="/master-admin/settings/notification-templates" icon={<BellOutlined />}>
// // // // // // // // //           <Link to="/master-admin/settings/notification-templates">Notifications</Link>
// // // // // // // // //         </Menu.Item>
// // // // // // // // //         <Menu.Item key="/master-admin/settings/platform-preferences" icon={<BgColorsOutlined />}>
// // // // // // // // //           <Link to="/master-admin/settings/platform-preferences">Platform Preferences</Link>
// // // // // // // // //         </Menu.Item>
// // // // // // // // //       </Menu.SubMenu>

// // // // // // // // //       <Menu.SubMenu
// // // // // // // // //         key="audit-logs"
// // // // // // // // //         icon={<HistoryOutlined />}
// // // // // // // // //         title="Audit Logs"
// // // // // // // // //       >
// // // // // // // // //         <Menu.Item key="/master-admin/audit-logs/view-logs" icon={<FileTextOutlined />}>
// // // // // // // // //           <Link to="/master-admin/audit-logs/view-logs">View Logs</Link>
// // // // // // // // //         </Menu.Item>
// // // // // // // // //         <Menu.Item key="/master-admin/audit-logs/accountability" icon={<CheckCircleOutlined />}>
// // // // // // // // //           <Link to="/master-admin/audit-logs/accountability">Accountability</Link>
// // // // // // // // //         </Menu.Item>
// // // // // // // // //       </Menu.SubMenu>

// // // // // // // // //       <Menu.SubMenu
// // // // // // // // //         key="support"
// // // // // // // // //         icon={<CustomerServiceOutlined />}
// // // // // // // // //         title="Support"
// // // // // // // // //       >
// // // // // // // // //         <Menu.Item key="/master-admin/support/manage-requests" icon={<ProfileOutlined />}>
// // // // // // // // //           <Link to="/master-admin/support/manage-requests">Manage Requests</Link>
// // // // // // // // //         </Menu.Item>
// // // // // // // // //       </Menu.SubMenu>
// // // // // // // // //     </>
// // // // // // // // //   );

// // // // // // // // //   const SidebarContent = () => (
// // // // // // // // //     <ConfigProvider theme={themeConfig}>
// // // // // // // // //       <Sider
// // // // // // // // //         width={280}
// // // // // // // // //         style={{
// // // // // // // // //           height: "100vh",
// // // // // // // // //           position: "fixed",
// // // // // // // // //           left: 0,
// // // // // // // // //           top: 0,
// // // // // // // // //           overflow: "hidden",
// // // // // // // // //           boxShadow: "2px 0 8px rgba(0,0,0,0.1)",
// // // // // // // // //           display: "flex",
// // // // // // // // //           flexDirection: "column"
// // // // // // // // //         }}
// // // // // // // // //       >
// // // // // // // // //         {/* Logo */}
// // // // // // // // //         <div style={{ 
// // // // // // // // //           padding: "20px 24px", 
// // // // // // // // //           display: "flex", 
// // // // // // // // //           alignItems: "center",
// // // // // // // // //           borderBottom: "1px solid #f0f0f0"
// // // // // // // // //         }}>
// // // // // // // // //           <div style={{
// // // // // // // // //             width: 40,
// // // // // // // // //             height: 40,
// // // // // // // // //             backgroundColor: "#FF7A00",
// // // // // // // // //             borderRadius: 8,
// // // // // // // // //             display: "flex",
// // // // // // // // //             alignItems: "center",
// // // // // // // // //             justifyContent: "center"
// // // // // // // // //           }}>
// // // // // // // // //             <HomeOutlined style={{ color: "white", fontSize: 20 }} />
// // // // // // // // //           </div>
// // // // // // // // //           <Title level={4} style={{ 
// // // // // // // // //             color: "#333", 
// // // // // // // // //             margin: "0 0 0 12px",
// // // // // // // // //             fontWeight: 700
// // // // // // // // //           }}>
// // // // // // // // //             AdminPortal
// // // // // // // // //           </Title>
// // // // // // // // //         </div>

// // // // // // // // //         {userData && (
// // // // // // // // //           <div style={{ 
// // // // // // // // //             padding: "16px 24px", 
// // // // // // // // //             borderBottom: "1px solid #f0f0f0",
// // // // // // // // //             marginBottom: 16
// // // // // // // // //           }}>
// // // // // // // // //             <Space>
// // // // // // // // //               <Badge count={userData.notifications} offset={[0, -5]}>
// // // // // // // // //                 <Avatar 
// // // // // // // // //                   src={userData.avatar} 
// // // // // // // // //                   size="large" 
// // // // // // // // //                   style={{ border: "2px solid #FF7A00" }}
// // // // // // // // //                 />
// // // // // // // // //               </Badge>
// // // // // // // // //               <div>
// // // // // // // // //                 <Text strong>{userData.name}</Text>
// // // // // // // // //                 <Text type="secondary" style={{ fontSize: 12 }}>{userData.role}</Text>
// // // // // // // // //               </div>
// // // // // // // // //             </Space>
// // // // // // // // //             <div style={{ marginTop: 12 }}>
// // // // // // // // //               <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
// // // // // // // // //                 <Text type="secondary" style={{ fontSize: 12 }}>Progress</Text>
// // // // // // // // //                 <Text style={{ fontSize: 12, fontWeight: 600 }}>{userData.progress}%</Text>
// // // // // // // // //               </div>
// // // // // // // // //               <Progress 
// // // // // // // // //                 percent={userData.progress} 
// // // // // // // // //                 showInfo={false} 
// // // // // // // // //                 strokeColor="#FF7A00"
// // // // // // // // //                 size="small"
// // // // // // // // //               />
// // // // // // // // //               <Text type="secondary" style={{ fontSize: 12, marginTop: 4 }}>
// // // // // // // // //                 {userData.coursesCompleted} courses
// // // // // // // // //               </Text>
// // // // // // // // //             </div>
// // // // // // // // //           </div>
// // // // // // // // //         )}

// // // // // // // // //         {/* Scrollable Menu */}
// // // // // // // // //         <div style={{ flex: 1, overflowY: "auto", paddingRight: 8 }}>
// // // // // // // // //           {isLoading ? (
// // // // // // // // //             <div style={{ textAlign: "center", padding: "40px 0" }}>
// // // // // // // // //               <Spin size="large" />
// // // // // // // // //             </div>
// // // // // // // // //           ) : (
// // // // // // // // //             <Menu
// // // // // // // // //               mode="inline"
// // // // // // // // //               selectedKeys={[location.pathname]}
// // // // // // // // //               openKeys={openKeys}
// // // // // // // // //               onOpenChange={setOpenKeys}
// // // // // // // // //               style={{ borderRight: 0 }}
// // // // // // // // //             >
// // // // // // // // //               {renderMenu()}
// // // // // // // // //             </Menu>
// // // // // // // // //           )}
// // // // // // // // //         </div>

// // // // // // // // //         {/* Footer */}
// // // // // // // // //         <div style={{ 
// // // // // // // // //           padding: "12px 24px 24px", 
// // // // // // // // //           borderTop: "1px solid #f0f0f0"
// // // // // // // // //         }}>
// // // // // // // // //           <Dropdown overlay={profileMenu} placement="topLeft" arrow>
// // // // // // // // //             <div style={{ 
// // // // // // // // //               cursor: "pointer", 
// // // // // // // // //               padding: "10px 12px", 
// // // // // // // // //               borderRadius: 8,
// // // // // // // // //               display: "flex",
// // // // // // // // //               alignItems: "center"
// // // // // // // // //             }}>
// // // // // // // // //               <SettingOutlined style={{ color: "#FF7A00", marginRight: 12, fontSize: 16 }} />
// // // // // // // // //               <Text style={{ color: "#333", fontWeight: 500 }}>Account Settings</Text>
// // // // // // // // //             </div>
// // // // // // // // //           </Dropdown>
// // // // // // // // //         </div>
// // // // // // // // //       </Sider>
// // // // // // // // //     </ConfigProvider>
// // // // // // // // //   );

// // // // // // // // //   if (isMobile) {
// // // // // // // // //     return (
// // // // // // // // //       <Drawer
// // // // // // // // //         open={isOpen}
// // // // // // // // //         onClose={onClose}
// // // // // // // // //         placement="left"
// // // // // // // // //         closable={false}
// // // // // // // // //         width={280}
// // // // // // // // //         styles={{ body: { padding: 0 } }}
// // // // // // // // //       >
// // // // // // // // //         <SidebarContent />
// // // // // // // // //       </Drawer>
// // // // // // // // //     );
// // // // // // // // //   }

// // // // // // // // //   return <SidebarContent />;
// // // // // // // // // };

// // // // // // // // // export default MasterAdminSidebar;

// // // // // // // // import React, { useState, useEffect } from "react";
// // // // // // // // import {
// // // // // // // //   Layout,
// // // // // // // //   Menu,
// // // // // // // //   Avatar,
// // // // // // // //   Badge,
// // // // // // // //   Progress,
// // // // // // // //   Dropdown,
// // // // // // // //   Space,
// // // // // // // //   Typography,
// // // // // // // //   Spin,
// // // // // // // //   Drawer,
// // // // // // // //   ConfigProvider
// // // // // // // // } from "antd";
// // // // // // // // import {
// // // // // // // //   HomeOutlined,
// // // // // // // //   UsergroupAddOutlined,
// // // // // // // //   VideoCameraOutlined,
// // // // // // // //   BarChartOutlined,
// // // // // // // //   SettingOutlined,
// // // // // // // //   HistoryOutlined,
// // // // // // // //   CustomerServiceOutlined,
// // // // // // // //   LogoutOutlined,
// // // // // // // //   UploadOutlined,
// // // // // // // //   BookOutlined,
// // // // // // // //   LockOutlined,
// // // // // // // //   FolderOutlined,
// // // // // // // //   CreditCardOutlined,
// // // // // // // //   BellOutlined,
// // // // // // // //   BgColorsOutlined,
// // // // // // // //   FileTextOutlined,
// // // // // // // //   CheckCircleOutlined,
// // // // // // // //   UserAddOutlined,
// // // // // // // //   EditOutlined,
// // // // // // // //   DeleteOutlined,
// // // // // // // //   TeamOutlined,
// // // // // // // //   UserOutlined,
// // // // // // // //   ProfileOutlined,
// // // // // // // //   SwapOutlined
// // // // // // // // } from "@ant-design/icons";
// // // // // // // // import { Link, useLocation, useNavigate } from "react-router-dom";
// // // // // // // // import { useAuth } from "../../Contexts/AuthContext";

// // // // // // // // const { Sider } = Layout;
// // // // // // // // const { Text } = Typography;

// // // // // // // // const themeConfig = {
// // // // // // // //   token: {
// // // // // // // //     colorPrimary: "#FF7A00",
// // // // // // // //     colorBgContainer: "#ffffff",
// // // // // // // //     colorText: "#333333",
// // // // // // // //     colorTextSecondary: "#666666",
// // // // // // // //     colorBorder: "#e0e0e0",
// // // // // // // //     borderRadius: 8,
// // // // // // // //   },
// // // // // // // //   components: {
// // // // // // // //     Menu: {
// // // // // // // //       itemSelectedBg: "#FFF2E8",
// // // // // // // //       itemHoverBg: "#FFF2E8",
// // // // // // // //       itemSelectedColor: "#FF7A00",
// // // // // // // //       iconSize: 16,
// // // // // // // //     },
// // // // // // // //   }
// // // // // // // // };

// // // // // // // // const MasterAdminSidebar = ({ isMobile = false, isOpen, onClose }) => {
// // // // // // // //   const [userData, setUserData] = useState(null);
// // // // // // // //   const [openKeys, setOpenKeys] = useState([]);
// // // // // // // //   const [isLoading, setIsLoading] = useState(true);

// // // // // // // //   const location = useLocation();
// // // // // // // //   const navigate = useNavigate();
// // // // // // // //   const { logout } = useAuth();

// // // // // // // //   // Auto-expand parent menu
// // // // // // // //   useEffect(() => {
// // // // // // // //     const path = location.pathname;
// // // // // // // //     const parents = [];
// // // // // // // //     if (path.includes('/user-management') || path === '/master-admin/create/user') parents.push('user-management');
// // // // // // // //     if (path.includes('/course-control') || path.includes('/videos/upload')) parents.push('course-content');
// // // // // // // //     if (path.includes('/analytics')) parents.push('analytics');
// // // // // // // //     if (path.includes('/settings')) parents.push('system-settings');
// // // // // // // //     if (path.includes('/audit-logs')) parents.push('audit-logs');
// // // // // // // //     if (path.includes('/support')) parents.push('support');
// // // // // // // //     setOpenKeys(parents);
// // // // // // // //   }, [location.pathname]);

// // // // // // // //   useEffect(() => {
// // // // // // // //     // Simulate API fetch
// // // // // // // //     const timer = setTimeout(() => {
// // // // // // // //       setUserData({
// // // // // // // //         name: "Admin User",
// // // // // // // //         role: "Master Admin",
// // // // // // // //         avatar: "/api/placeholder/40/40",
// // // // // // // //         progress: 92,
// // // // // // // //         coursesCompleted: 12,
// // // // // // // //         notifications: 2
// // // // // // // //       });
// // // // // // // //       setIsLoading(false);
// // // // // // // //     }, 300);
// // // // // // // //     return () => clearTimeout(timer);
// // // // // // // //   }, []);

// // // // // // // //   const handleLogout = () => {
// // // // // // // //     logout();
// // // // // // // //     navigate('/');
// // // // // // // //   };

// // // // // // // //   const profileMenu = (
// // // // // // // //     <Menu>
// // // // // // // //       <Menu.Item key="profile">Profile Settings</Menu.Item>
// // // // // // // //       <Menu.Item key="help">Help Center</Menu.Item>
// // // // // // // //       <Menu.Divider />
// // // // // // // //       <Menu.Item key="logout" icon={<LogoutOutlined />} danger onClick={handleLogout}>
// // // // // // // //         Logout
// // // // // // // //       </Menu.Item>
// // // // // // // //     </Menu>
// // // // // // // //   );

// // // // // // // //   const renderMenu = () => (
// // // // // // // //     <>
// // // // // // // //       <Menu.Item key="/master-admin/home" icon={<HomeOutlined />}>
// // // // // // // //         <Link to="/master-admin/home">Dashboard</Link>
// // // // // // // //       </Menu.Item>

// // // // // // // //       <Menu.SubMenu key="user-management" icon={<UsergroupAddOutlined />} title="User Management">
// // // // // // // //         <Menu.Item key="/master-admin/create/user" icon={<UserAddOutlined />}>
// // // // // // // //           <Link to="/master-admin/create/user">Create User</Link>
// // // // // // // //         </Menu.Item>
// // // // // // // //         <Menu.Item key="/master-admin/user-management/update" icon={<EditOutlined />}>
// // // // // // // //           <Link to="/master-admin/user-management/update">Update User</Link>
// // // // // // // //         </Menu.Item>
// // // // // // // //         <Menu.Item key="/master-admin/user-management/delete" icon={<DeleteOutlined />}>
// // // // // // // //           <Link to="/master-admin/user-management/delete">Delete Users</Link>
// // // // // // // //         </Menu.Item>
// // // // // // // //         <Menu.Item key="/master-admin/user-management/roles" icon={<SwapOutlined />}>
// // // // // // // //           <Link to="/master-admin/user-management/roles">Roles & Permissions</Link>
// // // // // // // //         </Menu.Item>
// // // // // // // //         <Menu.Item key="/master-admin/user-management/teacher-approvals" icon={<TeamOutlined />}>
// // // // // // // //           <Link to="/master-admin/user-management/teacher-approvals">Teacher Approvals</Link>
// // // // // // // //         </Menu.Item>
// // // // // // // //       </Menu.SubMenu>

// // // // // // // //       <Menu.SubMenu key="course-content" icon={<VideoCameraOutlined />} title="Course & Content">
// // // // // // // //         <Menu.Item key="/master-admin/videos/upload" icon={<UploadOutlined />}>
// // // // // // // //           <Link to="/master-admin/videos/upload">Upload Videos</Link>
// // // // // // // //         </Menu.Item>
// // // // // // // //         <Menu.Item key="/master-admin/course-control/add-update-remove" icon={<BookOutlined />}>
// // // // // // // //           <Link to="/master-admin/course-control/add-update-remove">Manage Courses</Link>
// // // // // // // //         </Menu.Item>
// // // // // // // //         <Menu.Item key="/master-admin/course-control/restrict-access" icon={<LockOutlined />}>
// // // // // // // //           <Link to="/master-admin/course-control/restrict-access">Restrict Access</Link>
// // // // // // // //         </Menu.Item>
// // // // // // // //         <Menu.Item key="/master-admin/course-control/video-organization" icon={<FolderOutlined />}>
// // // // // // // //           <Link to="/master-admin/course-control/video-organization">Video Organization</Link>
// // // // // // // //         </Menu.Item>
// // // // // // // //       </Menu.SubMenu>

// // // // // // // //       <Menu.SubMenu key="analytics" icon={<BarChartOutlined />} title="Analytics">
// // // // // // // //         <Menu.Item key="/master-admin/analytics/student-performance" icon={<UserOutlined />}>
// // // // // // // //           <Link to="/master-admin/analytics/student-performance">Student Performance</Link>
// // // // // // // //         </Menu.Item>
// // // // // // // //         <Menu.Item key="/master-admin/analytics/teacher-effectiveness" icon={<TeamOutlined />}>
// // // // // // // //           <Link to="/master-admin/analytics/teacher-effectiveness">Teacher Effectiveness</Link>
// // // // // // // //         </Menu.Item>
// // // // // // // //         <Menu.Item key="/master-admin/analytics/platform-usage" icon={<BarChartOutlined />}>
// // // // // // // //           <Link to="/master-admin/analytics/platform-usage">Platform Usage</Link>
// // // // // // // //         </Menu.Item>
// // // // // // // //       </Menu.SubMenu>

// // // // // // // //       <Menu.SubMenu key="system-settings" icon={<SettingOutlined />} title="System Settings">
// // // // // // // //         <Menu.Item key="/master-admin/settings/payment-gateway" icon={<CreditCardOutlined />}>
// // // // // // // //           <Link to="/master-admin/settings/payment-gateway">Payment Gateway</Link>
// // // // // // // //         </Menu.Item>
// // // // // // // //         <Menu.Item key="/master-admin/settings/notification-templates" icon={<BellOutlined />}>
// // // // // // // //           <Link to="/master-admin/settings/notification-templates">Notifications</Link>
// // // // // // // //         </Menu.Item>
// // // // // // // //         <Menu.Item key="/master-admin/settings/platform-preferences" icon={<BgColorsOutlined />}>
// // // // // // // //           <Link to="/master-admin/settings/platform-preferences">Platform Preferences</Link>
// // // // // // // //         </Menu.Item>
// // // // // // // //       </Menu.SubMenu>

// // // // // // // //       <Menu.SubMenu key="audit-logs" icon={<HistoryOutlined />} title="Audit Logs">
// // // // // // // //         <Menu.Item key="/master-admin/audit-logs/view-logs" icon={<FileTextOutlined />}>
// // // // // // // //           <Link to="/master-admin/audit-logs/view-logs">View Logs</Link>
// // // // // // // //         </Menu.Item>
// // // // // // // //         <Menu.Item key="/master-admin/audit-logs/accountability" icon={<CheckCircleOutlined />}>
// // // // // // // //           <Link to="/master-admin/audit-logs/accountability">Accountability</Link>
// // // // // // // //         </Menu.Item>
// // // // // // // //       </Menu.SubMenu>

// // // // // // // //       <Menu.SubMenu key="support" icon={<CustomerServiceOutlined />} title="Support">
// // // // // // // //         <Menu.Item key="/master-admin/support/manage-requests" icon={<ProfileOutlined />}>
// // // // // // // //           <Link to="/master-admin/support/manage-requests">Manage Requests</Link>
// // // // // // // //         </Menu.Item>
// // // // // // // //       </Menu.SubMenu>
// // // // // // // //     </>
// // // // // // // //   );

// // // // // // // //   const SidebarContent = () => (
// // // // // // // //     <ConfigProvider theme={themeConfig}>
// // // // // // // //       <Sider
// // // // // // // //         width={260} // Slightly narrower
// // // // // // // //         style={{
// // // // // // // //           height: "100vh",
// // // // // // // //           position: "fixed",
// // // // // // // //           left: 0,
// // // // // // // //           top: 0,
// // // // // // // //           overflow: "hidden",
// // // // // // // //           boxShadow: "2px 0 8px rgba(0,0,0,0.1)",
// // // // // // // //           display: "flex",
// // // // // // // //           flexDirection: "column"
// // // // // // // //         }}
// // // // // // // //       >
// // // // // // // //         {/* Logo - Reduced padding */}
// // // // // // // //         <div style={{ 
// // // // // // // //           padding: "16px 20px", 
// // // // // // // //           display: "flex", 
// // // // // // // //           alignItems: "center",
// // // // // // // //           borderBottom: "1px solid #f0f0f0"
// // // // // // // //         }}>
// // // // // // // //           <div style={{
// // // // // // // //             width: 36,
// // // // // // // //             height: 36,
// // // // // // // //             backgroundColor: "#FF7A00",
// // // // // // // //             borderRadius: 6,
// // // // // // // //             display: "flex",
// // // // // // // //             alignItems: "center",
// // // // // // // //             justifyContent: "center"
// // // // // // // //           }}>
// // // // // // // //             <HomeOutlined style={{ color: "white", fontSize: 18 }} />
// // // // // // // //           </div>
// // // // // // // //           <Text strong style={{ 
// // // // // // // //             color: "#333", 
// // // // // // // //             margin: "0 0 0 12px",
// // // // // // // //             fontSize: 18
// // // // // // // //           }}>
// // // // // // // //             AdminPortal
// // // // // // // //           </Text>
// // // // // // // //         </div>

// // // // // // // //         {/* COMPACT USER PROFILE ✅ */}
// // // // // // // //         {userData && (
// // // // // // // //           <div style={{ 
// // // // // // // //             padding: "12px 20px", 
// // // // // // // //             borderBottom: "1px solid #f0f0f0",
// // // // // // // //             marginBottom: 12
// // // // // // // //           }}>
// // // // // // // //             <Space size={10}>
// // // // // // // //               <Badge count={userData.notifications} offset={[0, -3]}>
// // // // // // // //                 <Avatar 
// // // // // // // //                   src={userData.avatar} 
// // // // // // // //                   size="small" 
// // // // // // // //                   style={{ border: "2px solid #FF7A00" }}
// // // // // // // //                 />
// // // // // // // //               </Badge>
// // // // // // // //               <div>
// // // // // // // //                 <Text strong style={{ fontSize: 13, lineHeight: 1.3 }}>{userData.name}</Text>
// // // // // // // //                 <Text type="secondary" style={{ fontSize: 11, lineHeight: 1.2 }}>{userData.role}</Text>
// // // // // // // //               </div>
// // // // // // // //             </Space>
            
// // // // // // // //             {/* Compact progress */}
// // // // // // // //             <div style={{ marginTop: 8, display: "flex", alignItems: "center" }}>
// // // // // // // //               <Progress 
// // // // // // // //                 percent={userData.progress} 
// // // // // // // //                 showInfo={false} 
// // // // // // // //                 strokeColor="#FF7A00"
// // // // // // // //                 size="small"
// // // // // // // //                 style={{ flex: 1, marginRight: 8 }}
// // // // // // // //               />
// // // // // // // //               <Text type="secondary" style={{ fontSize: 11, minWidth: 30, textAlign: "right" }}>
// // // // // // // //                 {userData.progress}%
// // // // // // // //               </Text>
// // // // // // // //             </div>
// // // // // // // //             <Text type="secondary" style={{ fontSize: 11, marginTop: 4 }}>
// // // // // // // //               {userData.coursesCompleted} courses
// // // // // // // //             </Text>
// // // // // // // //           </div>
// // // // // // // //         )}

// // // // // // // //         {/* Scrollable Menu - Critical Fix for Submenus ✅ */}
// // // // // // // //         <div style={{ 
// // // // // // // //           flex: 1, 
// // // // // // // //           overflowY: "auto",
// // // // // // // //           paddingRight: 4, // Less padding
// // // // // // // //           paddingBottom: 20 // Prevent bottom cutoff
// // // // // // // //         }}>
// // // // // // // //           {isLoading ? (
// // // // // // // //             <div style={{ textAlign: "center", padding: "30px 0" }}>
// // // // // // // //               <Spin size="small" />
// // // // // // // //             </div>
// // // // // // // //           ) : (
// // // // // // // //             <Menu
// // // // // // // //               mode="inline"
// // // // // // // //               selectedKeys={[location.pathname]}
// // // // // // // //               openKeys={openKeys}
// // // // // // // //               onOpenChange={setOpenKeys}
// // // // // // // //               style={{ borderRight: 0 }}
// // // // // // // //               // Ensure submenus render above footer
// // // // // // // //               getPopupContainer={triggerNode => triggerNode.parentNode}
// // // // // // // //             >
// // // // // // // //               {renderMenu()}
// // // // // // // //             </Menu>
// // // // // // // //           )}
// // // // // // // //         </div>

// // // // // // // //         {/* Compact Footer */}
// // // // // // // //         <div style={{ 
// // // // // // // //           padding: "10px 20px 16px", 
// // // // // // // //           borderTop: "1px solid #f0f0f0"
// // // // // // // //         }}>
// // // // // // // //           <Dropdown overlay={profileMenu} placement="topLeft" arrow>
// // // // // // // //             <div style={{ 
// // // // // // // //               cursor: "pointer", 
// // // // // // // //               padding: "8px 10px", 
// // // // // // // //               borderRadius: 6,
// // // // // // // //               display: "flex",
// // // // // // // //               alignItems: "center"
// // // // // // // //             }}>
// // // // // // // //               <SettingOutlined style={{ color: "#FF7A00", marginRight: 10, fontSize: 14 }} />
// // // // // // // //               <Text style={{ color: "#333", fontSize: 13, fontWeight: 500 }}>Account Settings</Text>
// // // // // // // //             </div>
// // // // // // // //           </Dropdown>
// // // // // // // //         </div>
// // // // // // // //       </Sider>
// // // // // // // //     </ConfigProvider>
// // // // // // // //   );

// // // // // // // //   if (isMobile) {
// // // // // // // //     return (
// // // // // // // //       <Drawer
// // // // // // // //         open={isOpen}
// // // // // // // //         onClose={onClose}
// // // // // // // //         placement="left"
// // // // // // // //         closable={false}
// // // // // // // //         width={260}
// // // // // // // //         styles={{ body: { padding: 0 } }}
// // // // // // // //       >
// // // // // // // //         <SidebarContent />
// // // // // // // //       </Drawer>
// // // // // // // //     );
// // // // // // // //   }

// // // // // // // //   return <SidebarContent />;
// // // // // // // // };

// // // // // // // // export default MasterAdminSidebar;

// // // // // // // import React, { useState, useEffect, useRef } from "react";
// // // // // // // import {
// // // // // // //   Layout,
// // // // // // //   Menu,
// // // // // // //   Avatar,
// // // // // // //   Badge,
// // // // // // //   Progress,
// // // // // // //   Dropdown,
// // // // // // //   Space,
// // // // // // //   Typography,
// // // // // // //   Spin,
// // // // // // //   Drawer,
// // // // // // //   ConfigProvider,
// // // // // // //   Button
// // // // // // // } from "antd";
// // // // // // // import {
// // // // // // //   HomeOutlined,
// // // // // // //   UsergroupAddOutlined,
// // // // // // //   VideoCameraOutlined,
// // // // // // //   BarChartOutlined,
// // // // // // //   SettingOutlined,
// // // // // // //   HistoryOutlined,
// // // // // // //   CustomerServiceOutlined,
// // // // // // //   LogoutOutlined,
// // // // // // //   UploadOutlined,
// // // // // // //   BookOutlined,
// // // // // // //   LockOutlined,
// // // // // // //   FolderOutlined,
// // // // // // //   CreditCardOutlined,
// // // // // // //   BellOutlined,
// // // // // // //   BgColorsOutlined,
// // // // // // //   FileTextOutlined,
// // // // // // //   CheckCircleOutlined,
// // // // // // //   UserAddOutlined,
// // // // // // //   EditOutlined,
// // // // // // //   DeleteOutlined,
// // // // // // //   TeamOutlined,
// // // // // // //   UserOutlined,
// // // // // // //   ProfileOutlined,
// // // // // // //   SwapOutlined,
// // // // // // //   LeftOutlined,
// // // // // // //   RightOutlined
// // // // // // // } from "@ant-design/icons";
// // // // // // // import { Link, useLocation, useNavigate } from "react-router-dom";
// // // // // // // import { useAuth } from "../../Contexts/AuthContext";

// // // // // // // const { Sider } = Layout;
// // // // // // // const { Text } = Typography;

// // // // // // // const themeConfig = {
// // // // // // //   token: {
// // // // // // //     colorPrimary: "#FF7A00",
// // // // // // //     colorBgContainer: "#ffffff",
// // // // // // //     colorText: "#333333",
// // // // // // //     colorTextSecondary: "#666666",
// // // // // // //     colorBorder: "#e0e0e0",
// // // // // // //     borderRadius: 8,
// // // // // // //   },
// // // // // // //   components: {
// // // // // // //     Menu: {
// // // // // // //       itemSelectedBg: "#FFF2E8",
// // // // // // //       itemHoverBg: "#FFF2E8",
// // // // // // //       itemSelectedColor: "#FF7A00",
// // // // // // //       iconSize: 16,
// // // // // // //     },
// // // // // // //   }
// // // // // // // };

// // // // // // // const MasterAdminSidebar = ({ isMobile = false, isOpen, onClose }) => {
// // // // // // //   const [userData, setUserData] = useState(null);
// // // // // // //   const [openKeys, setOpenKeys] = useState([]);
// // // // // // //   const [isLoading, setIsLoading] = useState(true);
// // // // // // //   const [collapsed, setCollapsed] = useState(false); // ✅ Collapsed state
// // // // // // //   const location = useLocation();
// // // // // // //   const navigate = useNavigate();
// // // // // // //   const { logout } = useAuth();
// // // // // // //   const menuRef = useRef(null);

// // // // // // //   // Auto-expand parent menu
// // // // // // //   useEffect(() => {
// // // // // // //     const path = location.pathname;
// // // // // // //     const parents = [];
// // // // // // //     if (path.includes('/user-management') || path === '/master-admin/create/user') parents.push('user-management');
// // // // // // //     if (path.includes('/course-control') || path.includes('/videos/upload')) parents.push('course-content');
// // // // // // //     if (path.includes('/analytics')) parents.push('analytics');
// // // // // // //     if (path.includes('/settings')) parents.push('system-settings');
// // // // // // //     if (path.includes('/audit-logs')) parents.push('audit-logs');
// // // // // // //     if (path.includes('/support')) parents.push('support');
// // // // // // //     setOpenKeys(parents);
// // // // // // //   }, [location.pathname]);

// // // // // // //   useEffect(() => {
// // // // // // //     const timer = setTimeout(() => {
// // // // // // //       setUserData({
// // // // // // //         name: "Admin User",
// // // // // // //         role: "Master Admin",
// // // // // // //         avatar: "/api/placeholder/40/40",
// // // // // // //         progress: 92,
// // // // // // //         coursesCompleted: 12,
// // // // // // //         notifications: 2
// // // // // // //       });
// // // // // // //       setIsLoading(false);
// // // // // // //     }, 300);
// // // // // // //     return () => clearTimeout(timer);
// // // // // // //   }, []);

// // // // // // //   const handleLogout = () => {
// // // // // // //     logout();
// // // // // // //     navigate('/');
// // // // // // //   };

// // // // // // //   const profileMenu = (
// // // // // // //     <Menu>
// // // // // // //       <Menu.Item key="profile">Profile Settings</Menu.Item>
// // // // // // //       <Menu.Item key="help">Help Center</Menu.Item>
// // // // // // //       <Menu.Divider />
// // // // // // //       <Menu.Item key="logout" icon={<LogoutOutlined />} danger onClick={handleLogout}>
// // // // // // //         Logout
// // // // // // //       </Menu.Item>
// // // // // // //     </Menu>
// // // // // // //   );

// // // // // // //   const renderMenu = () => (
// // // // // // //     <>
// // // // // // //       <Menu.Item key="/master-admin/home" icon={<HomeOutlined />}>
// // // // // // //         {!collapsed && <Link to="/master-admin/home">Dashboard</Link>}
// // // // // // //       </Menu.Item>

// // // // // // //       <Menu.SubMenu 
// // // // // // //         key="user-management" 
// // // // // // //         icon={<UsergroupAddOutlined />} 
// // // // // // //         title={!collapsed ? "User Management" : undefined}
// // // // // // //       >
// // // // // // //         <Menu.Item key="/master-admin/create/user" icon={<UserAddOutlined />}>
// // // // // // //           {!collapsed && <Link to="/master-admin/create/user">Create User</Link>}
// // // // // // //         </Menu.Item>
// // // // // // //         <Menu.Item key="/master-admin/user-management/update" icon={<EditOutlined />}>
// // // // // // //           {!collapsed && <Link to="/master-admin/user-management/update">Update User</Link>}
// // // // // // //         </Menu.Item>
// // // // // // //         <Menu.Item key="/master-admin/user-management/delete" icon={<DeleteOutlined />}>
// // // // // // //           {!collapsed && <Link to="/master-admin/user-management/delete">Delete Users</Link>}
// // // // // // //         </Menu.Item>
// // // // // // //         <Menu.Item key="/master-admin/user-management/roles" icon={<SwapOutlined />}>
// // // // // // //           {!collapsed && <Link to="/master-admin/user-management/roles">Roles & Permissions</Link>}
// // // // // // //         </Menu.Item>
// // // // // // //         <Menu.Item key="/master-admin/user-management/teacher-approvals" icon={<TeamOutlined />}>
// // // // // // //           {!collapsed && <Link to="/master-admin/user-management/teacher-approvals">Teacher Approvals</Link>}
// // // // // // //         </Menu.Item>
// // // // // // //       </Menu.SubMenu>

// // // // // // //       <Menu.SubMenu 
// // // // // // //         key="course-content" 
// // // // // // //         icon={<VideoCameraOutlined />} 
// // // // // // //         title={!collapsed ? "Course & Content" : undefined}
// // // // // // //       >
// // // // // // //         <Menu.Item key="/master-admin/videos/upload" icon={<UploadOutlined />}>
// // // // // // //           {!collapsed && <Link to="/master-admin/videos/upload">Upload Videos</Link>}
// // // // // // //         </Menu.Item>
// // // // // // //         <Menu.Item key="/master-admin/course-control/add-update-remove" icon={<BookOutlined />}>
// // // // // // //           {!collapsed && <Link to="/master-admin/course-control/add-update-remove">Manage Courses</Link>}
// // // // // // //         </Menu.Item>
// // // // // // //         <Menu.Item key="/master-admin/course-control/restrict-access" icon={<LockOutlined />}>
// // // // // // //           {!collapsed && <Link to="/master-admin/course-control/restrict-access">Restrict Access</Link>}
// // // // // // //         </Menu.Item>
// // // // // // //         <Menu.Item key="/master-admin/course-control/video-organization" icon={<FolderOutlined />}>
// // // // // // //           {!collapsed && <Link to="/master-admin/course-control/video-organization">Video Organization</Link>}
// // // // // // //         </Menu.Item>
// // // // // // //       </Menu.SubMenu>

// // // // // // //       <Menu.SubMenu 
// // // // // // //         key="analytics" 
// // // // // // //         icon={<BarChartOutlined />} 
// // // // // // //         title={!collapsed ? "Analytics" : undefined}
// // // // // // //       >
// // // // // // //         <Menu.Item key="/master-admin/analytics/student-performance" icon={<UserOutlined />}>
// // // // // // //           {!collapsed && <Link to="/master-admin/analytics/student-performance">Student Performance</Link>}
// // // // // // //         </Menu.Item>
// // // // // // //         <Menu.Item key="/master-admin/analytics/teacher-effectiveness" icon={<TeamOutlined />}>
// // // // // // //           {!collapsed && <Link to="/master-admin/analytics/teacher-effectiveness">Teacher Effectiveness</Link>}
// // // // // // //         </Menu.Item>
// // // // // // //         <Menu.Item key="/master-admin/analytics/platform-usage" icon={<BarChartOutlined />}>
// // // // // // //           {!collapsed && <Link to="/master-admin/analytics/platform-usage">Platform Usage</Link>}
// // // // // // //         </Menu.Item>
// // // // // // //       </Menu.SubMenu>

// // // // // // //       <Menu.SubMenu 
// // // // // // //         key="system-settings" 
// // // // // // //         icon={<SettingOutlined />} 
// // // // // // //         title={!collapsed ? "System Settings" : undefined}
// // // // // // //       >
// // // // // // //         <Menu.Item key="/master-admin/settings/payment-gateway" icon={<CreditCardOutlined />}>
// // // // // // //           {!collapsed && <Link to="/master-admin/settings/payment-gateway">Payment Gateway</Link>}
// // // // // // //         </Menu.Item>
// // // // // // //         <Menu.Item key="/master-admin/settings/notification-templates" icon={<BellOutlined />}>
// // // // // // //           {!collapsed && <Link to="/master-admin/settings/notification-templates">Notifications</Link>}
// // // // // // //         </Menu.Item>
// // // // // // //         <Menu.Item key="/master-admin/settings/platform-preferences" icon={<BgColorsOutlined />}>
// // // // // // //           {!collapsed && <Link to="/master-admin/settings/platform-preferences">Platform Preferences</Link>}
// // // // // // //         </Menu.Item>
// // // // // // //       </Menu.SubMenu>

// // // // // // //       <Menu.SubMenu 
// // // // // // //         key="audit-logs" 
// // // // // // //         icon={<HistoryOutlined />} 
// // // // // // //         title={!collapsed ? "Audit Logs" : undefined}
// // // // // // //       >
// // // // // // //         <Menu.Item key="/master-admin/audit-logs/view-logs" icon={<FileTextOutlined />}>
// // // // // // //           {!collapsed && <Link to="/master-admin/audit-logs/view-logs">View Logs</Link>}
// // // // // // //         </Menu.Item>
// // // // // // //         <Menu.Item key="/master-admin/audit-logs/accountability" icon={<CheckCircleOutlined />}>
// // // // // // //           {!collapsed && <Link to="/master-admin/audit-logs/accountability">Accountability</Link>}
// // // // // // //         </Menu.Item>
// // // // // // //       </Menu.SubMenu>

// // // // // // //       <Menu.SubMenu 
// // // // // // //         key="support" 
// // // // // // //         icon={<CustomerServiceOutlined />} 
// // // // // // //         title={!collapsed ? "Support" : undefined}
// // // // // // //       >
// // // // // // //         <Menu.Item key="/master-admin/support/manage-requests" icon={<ProfileOutlined />}>
// // // // // // //           {!collapsed && <Link to="/master-admin/support/manage-requests">Manage Requests</Link>}
// // // // // // //         </Menu.Item>
// // // // // // //       </Menu.SubMenu>
// // // // // // //     </>
// // // // // // //   );

// // // // // // //   const SidebarContent = () => (
// // // // // // //     <ConfigProvider theme={themeConfig}>
// // // // // // //       <Sider
// // // // // // //         width={collapsed ? 64 : 260}
// // // // // // //         collapsedWidth={64}
// // // // // // //         collapsible
// // // // // // //         collapsed={collapsed}
// // // // // // //         onCollapse={setCollapsed}
// // // // // // //         style={{
// // // // // // //           height: "100vh",
// // // // // // //           position: "fixed",
// // // // // // //           left: 0,
// // // // // // //           top: 0,
// // // // // // //           overflow: "hidden",
// // // // // // //           boxShadow: "2px 0 8px rgba(0,0,0,0.1)",
// // // // // // //           display: "flex",
// // // // // // //           flexDirection: "column"
// // // // // // //         }}
// // // // // // //         className="custom-sider"
// // // // // // //       >
// // // // // // //         {/* Logo & Toggle */}
// // // // // // //         <div style={{ 
// // // // // // //           padding: "12px 16px", 
// // // // // // //           display: "flex", 
// // // // // // //           alignItems: "center",
// // // // // // //           justifyContent: collapsed ? "center" : "space-between",
// // // // // // //           borderBottom: "1px solid #f0f0f0"
// // // // // // //         }}>
// // // // // // //           {!collapsed && (
// // // // // // //             <>
// // // // // // //               <div style={{ display: "flex", alignItems: "center" }}>
// // // // // // //                 <div style={{
// // // // // // //                   width: 32,
// // // // // // //                   height: 32,
// // // // // // //                   backgroundColor: "#FF7A00",
// // // // // // //                   borderRadius: 4,
// // // // // // //                   display: "flex",
// // // // // // //                   alignItems: "center",
// // // // // // //                   justifyContent: "center"
// // // // // // //                 }}>
// // // // // // //                   <HomeOutlined style={{ color: "white", fontSize: 16 }} />
// // // // // // //                 </div>
// // // // // // //                 <Text strong style={{ marginLeft: 12, fontSize: 16 }}>AdminPortal</Text>
// // // // // // //               </div>
// // // // // // //             </>
// // // // // // //           )}
          
// // // // // // //           {/* Toggle Button */}
// // // // // // //           <Button
// // // // // // //             type="text"
// // // // // // //             icon={collapsed ? <RightOutlined /> : <LeftOutlined />}
// // // // // // //             onClick={() => setCollapsed(!collapsed)}
// // // // // // //             style={{
// // // // // // //               width: 32,
// // // // // // //               height: 32,
// // // // // // //               padding: 0,
// // // // // // //               color: "#FF7A00"
// // // // // // //             }}
// // // // // // //           />
// // // // // // //         </div>

// // // // // // //         {/* Compact User Profile (only shown when expanded) */}
// // // // // // //         {!collapsed && userData && (
// // // // // // //           <div style={{ 
// // // // // // //             padding: "10px 16px", 
// // // // // // //             borderBottom: "1px solid #f0f0f0",
// // // // // // //             marginBottom: 8
// // // // // // //           }}>
// // // // // // //             <Space size={10}>
// // // // // // //               <Badge count={userData.notifications} offset={[0, -3]}>
// // // // // // //                 <Avatar src={userData.avatar} size="small" style={{ border: "2px solid #FF7A00" }} />
// // // // // // //               </Badge>
// // // // // // //               <div>
// // // // // // //                 <Text strong style={{ fontSize: 12, lineHeight: 1.3 }}>{userData.name}</Text>
// // // // // // //                 <Text type="secondary" style={{ fontSize: 10 }}>{userData.role}</Text>
// // // // // // //               </div>
// // // // // // //             </Space>
// // // // // // //             <div style={{ marginTop: 6, display: "flex", alignItems: "center" }}>
// // // // // // //               <Progress percent={userData.progress} showInfo={false} strokeColor="#FF7A00" size="small" style={{ flex: 1, marginRight: 6 }} />
// // // // // // //               <Text type="secondary" style={{ fontSize: 10, minWidth: 28, textAlign: "right" }}>{userData.progress}%</Text>
// // // // // // //             </div>
// // // // // // //             <Text type="secondary" style={{ fontSize: 10, marginTop: 4 }}>{userData.coursesCompleted} courses</Text>
// // // // // // //           </div>
// // // // // // //         )}

// // // // // // //         {/* Scrollable Menu */}
// // // // // // //         <div 
// // // // // // //           ref={menuRef}
// // // // // // //           style={{ 
// // // // // // //             flex: 1, 
// // // // // // //             overflowY: "auto",
// // // // // // //             paddingRight: 4,
// // // // // // //             paddingBottom: 20
// // // // // // //           }}
// // // // // // //         >
// // // // // // //           {isLoading ? (
// // // // // // //             <div style={{ textAlign: "center", padding: "30px 0" }}>
// // // // // // //               <Spin size="small" />
// // // // // // //             </div>
// // // // // // //           ) : (
// // // // // // //             <Menu
// // // // // // //               mode="inline"
// // // // // // //               selectedKeys={[location.pathname]}
// // // // // // //               openKeys={openKeys}
// // // // // // //               onOpenChange={setOpenKeys}
// // // // // // //               inlineCollapsed={collapsed}
// // // // // // //               style={{ borderRight: 0 }}
// // // // // // //               getPopupContainer={triggerNode => triggerNode.parentNode}
// // // // // // //             >
// // // // // // //               {renderMenu()}
// // // // // // //             </Menu>
// // // // // // //           )}
// // // // // // //         </div>

// // // // // // //         {/* Footer (only shown when expanded) */}
// // // // // // //         {!collapsed && (
// // // // // // //           <div style={{ 
// // // // // // //             padding: "8px 16px 14px", 
// // // // // // //             borderTop: "1px solid #f0f0f0"
// // // // // // //           }}>
// // // // // // //             <Dropdown overlay={profileMenu} placement="topLeft" arrow>
// // // // // // //               <div style={{ 
// // // // // // //                 cursor: "pointer", 
// // // // // // //                 padding: "6px 8px", 
// // // // // // //                 borderRadius: 6,
// // // // // // //                 display: "flex",
// // // // // // //                 alignItems: "center"
// // // // // // //               }}>
// // // // // // //                 <SettingOutlined style={{ color: "#FF7A00", marginRight: 10, fontSize: 14 }} />
// // // // // // //                 <Text style={{ color: "#333", fontSize: 13 }}>Account Settings</Text>
// // // // // // //               </div>
// // // // // // //             </Dropdown>
// // // // // // //           </div>
// // // // // // //         )}
// // // // // // //       </Sider>
// // // // // // //     </ConfigProvider>
// // // // // // //   );

// // // // // // //   if (isMobile) {
// // // // // // //     return (
// // // // // // //       <Drawer
// // // // // // //         open={isOpen}
// // // // // // //         onClose={onClose}
// // // // // // //         placement="left"
// // // // // // //         closable={false}
// // // // // // //         width={260}
// // // // // // //         styles={{ body: { padding: 0 } }}
// // // // // // //       >
// // // // // // //         <SidebarContent />
// // // // // // //       </Drawer>
// // // // // // //     );
// // // // // // //   }

// // // // // // //   return <SidebarContent />;
// // // // // // // };

// // // // // // // export default MasterAdminSidebar;

// // // // // // import React, { useState, useEffect, useRef } from "react";
// // // // // // import {
// // // // // //   Layout,
// // // // // //   Menu,
// // // // // //   Avatar,
// // // // // //   Badge,
// // // // // //   Progress,
// // // // // //   Dropdown,
// // // // // //   Space,
// // // // // //   Typography,
// // // // // //   Spin,
// // // // // //   Drawer,
// // // // // //   ConfigProvider,
// // // // // //   Button
// // // // // // } from "antd";
// // // // // // import {
// // // // // //   HomeOutlined,
// // // // // //   UsergroupAddOutlined,
// // // // // //   VideoCameraOutlined,
// // // // // //   BarChartOutlined,
// // // // // //   SettingOutlined,
// // // // // //   HistoryOutlined,
// // // // // //   CustomerServiceOutlined,
// // // // // //   LogoutOutlined,
// // // // // //   UploadOutlined,
// // // // // //   BookOutlined,
// // // // // //   LockOutlined,
// // // // // //   FolderOutlined,
// // // // // //   CreditCardOutlined,
// // // // // //   BellOutlined,
// // // // // //   BgColorsOutlined,
// // // // // //   FileTextOutlined,
// // // // // //   CheckCircleOutlined,
// // // // // //   UserAddOutlined,
// // // // // //   EditOutlined,
// // // // // //   DeleteOutlined,
// // // // // //   TeamOutlined,
// // // // // //   UserOutlined,
// // // // // //   ProfileOutlined,
// // // // // //   SwapOutlined,
// // // // // //   LeftOutlined,
// // // // // //   RightOutlined
// // // // // // } from "@ant-design/icons";
// // // // // // import { Link, useLocation, useNavigate } from "react-router-dom";
// // // // // // import { useAuth } from "../../Contexts/AuthContext";

// // // // // // const { Sider } = Layout;
// // // // // // const { Text } = Typography;

// // // // // // const themeConfig = {
// // // // // //   token: {
// // // // // //     colorPrimary: "#FF7A00",
// // // // // //     colorBgContainer: "#ffffff",
// // // // // //     colorText: "#333333",
// // // // // //     colorTextSecondary: "#666666",
// // // // // //     colorBorder: "#e0e0e0",
// // // // // //     borderRadius: 8,
// // // // // //   },
// // // // // //   components: {
// // // // // //     Menu: {
// // // // // //       itemSelectedBg: "#FFF2E8",
// // // // // //       itemHoverBg: "#FFF2E8",
// // // // // //       itemSelectedColor: "#FF7A00",
// // // // // //       iconSize: 16,
// // // // // //     },
// // // // // //   }
// // // // // // };

// // // // // // const MasterAdminSidebar = ({ isMobile = false, isOpen, onClose }) => {
// // // // // //   const [userData, setUserData] = useState(null);
// // // // // //   const [openKeys, setOpenKeys] = useState([]);
// // // // // //   const [isLoading, setIsLoading] = useState(true);
// // // // // //   const [collapsed, setCollapsed] = useState(false);
// // // // // //   const location = useLocation();
// // // // // //   const navigate = useNavigate();
// // // // // //   const { logout } = useAuth();

// // // // // //   // Auto-expand parent menu
// // // // // //   useEffect(() => {
// // // // // //     const path = location.pathname;
// // // // // //     const parents = [];
// // // // // //     if (path.includes('/user-management') || path === '/master-admin/create/user') parents.push('user-management');
// // // // // //     if (path.includes('/course-control') || path.includes('/videos/upload')) parents.push('course-content');
// // // // // //     if (path.includes('/analytics')) parents.push('analytics');
// // // // // //     if (path.includes('/settings')) parents.push('system-settings');
// // // // // //     if (path.includes('/audit-logs')) parents.push('audit-logs');
// // // // // //     if (path.includes('/support')) parents.push('support');
// // // // // //     setOpenKeys(parents);
// // // // // //   }, [location.pathname]);

// // // // // //   useEffect(() => {
// // // // // //     const timer = setTimeout(() => {
// // // // // //       setUserData({
// // // // // //         name: "Admin User",
// // // // // //         role: "Master Admin",
// // // // // //         avatar: "/api/placeholder/40/40",
// // // // // //         progress: 92,
// // // // // //         coursesCompleted: 12,
// // // // // //         notifications: 2
// // // // // //       });
// // // // // //       setIsLoading(false);
// // // // // //     }, 300);
// // // // // //     return () => clearTimeout(timer);
// // // // // //   }, []);

// // // // // //   const handleLogout = () => {
// // // // // //     logout();
// // // // // //     navigate('/');
// // // // // //   };

// // // // // //   const profileMenu = (
// // // // // //     <Menu>
// // // // // //       <Menu.Item key="profile">Profile Settings</Menu.Item>
// // // // // //       <Menu.Item key="help">Help Center</Menu.Item>
// // // // // //       <Menu.Divider />
// // // // // //       <Menu.Item key="logout" icon={<LogoutOutlined />} danger onClick={handleLogout}>
// // // // // //         Logout
// // // // // //       </Menu.Item>
// // // // // //     </Menu>
// // // // // //   );

// // // // // //   const renderMenu = () => (
// // // // // //     <>
// // // // // //       <Menu.Item key="/master-admin/home" icon={<HomeOutlined />}>
// // // // // //         {!collapsed && <Link to="/master-admin/home">Dashboard</Link>}
// // // // // //       </Menu.Item>

// // // // // //       <Menu.SubMenu 
// // // // // //         key="user-management" 
// // // // // //         icon={<UsergroupAddOutlined />} 
// // // // // //         title={!collapsed ? "User Management" : undefined}
// // // // // //       >
// // // // // //         <Menu.Item key="/master-admin/create/user" icon={<UserAddOutlined />}>
// // // // // //           {!collapsed && <Link to="/master-admin/create/user">Create User</Link>}
// // // // // //         </Menu.Item>
// // // // // //         <Menu.Item key="/master-admin/user-management/update" icon={<EditOutlined />}>
// // // // // //           {!collapsed && <Link to="/master-admin/user-management/update">Update User</Link>}
// // // // // //         </Menu.Item>
// // // // // //         <Menu.Item key="/master-admin/user-management/delete" icon={<DeleteOutlined />}>
// // // // // //           {!collapsed && <Link to="/master-admin/user-management/delete">Delete Users</Link>}
// // // // // //         </Menu.Item>
// // // // // //         <Menu.Item key="/master-admin/user-management/roles" icon={<SwapOutlined />}>
// // // // // //           {!collapsed && <Link to="/master-admin/user-management/roles">Roles & Permissions</Link>}
// // // // // //         </Menu.Item>
// // // // // //         <Menu.Item key="/master-admin/user-management/teacher-approvals" icon={<TeamOutlined />}>
// // // // // //           {!collapsed && <Link to="/master-admin/user-management/teacher-approvals">Teacher Approvals</Link>}
// // // // // //         </Menu.Item>
// // // // // //       </Menu.SubMenu>

// // // // // //       <Menu.SubMenu 
// // // // // //         key="course-content" 
// // // // // //         icon={<VideoCameraOutlined />} 
// // // // // //         title={!collapsed ? "Course & Content" : undefined}
// // // // // //       >
// // // // // //         <Menu.Item key="/master-admin/videos/upload" icon={<UploadOutlined />}>
// // // // // //           {!collapsed && <Link to="/master-admin/videos/upload">Upload Videos</Link>}
// // // // // //         </Menu.Item>
// // // // // //         <Menu.Item key="/master-admin/course-control/add-update-remove" icon={<BookOutlined />}>
// // // // // //           {!collapsed && <Link to="/master-admin/course-control/add-update-remove">Manage Courses</Link>}
// // // // // //         </Menu.Item>
// // // // // //         <Menu.Item key="/master-admin/course-control/restrict-access" icon={<LockOutlined />}>
// // // // // //           {!collapsed && <Link to="/master-admin/course-control/restrict-access">Restrict Access</Link>}
// // // // // //         </Menu.Item>
// // // // // //         <Menu.Item key="/master-admin/course-control/video-organization" icon={<FolderOutlined />}>
// // // // // //           {!collapsed && <Link to="/master-admin/course-control/video-organization">Video Organization</Link>}
// // // // // //         </Menu.Item>
// // // // // //       </Menu.SubMenu>

// // // // // //       <Menu.SubMenu 
// // // // // //         key="analytics" 
// // // // // //         icon={<BarChartOutlined />} 
// // // // // //         title={!collapsed ? "Analytics" : undefined}
// // // // // //       >
// // // // // //         <Menu.Item key="/master-admin/analytics/student-performance" icon={<UserOutlined />}>
// // // // // //           {!collapsed && <Link to="/master-admin/analytics/student-performance">Student Performance</Link>}
// // // // // //         </Menu.Item>
// // // // // //         <Menu.Item key="/master-admin/analytics/teacher-effectiveness" icon={<TeamOutlined />}>
// // // // // //           {!collapsed && <Link to="/master-admin/analytics/teacher-effectiveness">Teacher Effectiveness</Link>}
// // // // // //         </Menu.Item>
// // // // // //         <Menu.Item key="/master-admin/analytics/platform-usage" icon={<BarChartOutlined />}>
// // // // // //           {!collapsed && <Link to="/master-admin/analytics/platform-usage">Platform Usage</Link>}
// // // // // //         </Menu.Item>
// // // // // //       </Menu.SubMenu>

// // // // // //       <Menu.SubMenu 
// // // // // //         key="system-settings" 
// // // // // //         icon={<SettingOutlined />} 
// // // // // //         title={!collapsed ? "System Settings" : undefined}
// // // // // //       >
// // // // // //         <Menu.Item key="/master-admin/settings/payment-gateway" icon={<CreditCardOutlined />}>
// // // // // //           {!collapsed && <Link to="/master-admin/settings/payment-gateway">Payment Gateway</Link>}
// // // // // //         </Menu.Item>
// // // // // //         <Menu.Item key="/master-admin/settings/notification-templates" icon={<BellOutlined />}>
// // // // // //           {!collapsed && <Link to="/master-admin/settings/notification-templates">Notifications</Link>}
// // // // // //         </Menu.Item>
// // // // // //         <Menu.Item key="/master-admin/settings/platform-preferences" icon={<BgColorsOutlined />}>
// // // // // //           {!collapsed && <Link to="/master-admin/settings/platform-preferences">Platform Preferences</Link>}
// // // // // //         </Menu.Item>
// // // // // //       </Menu.SubMenu>

// // // // // //       <Menu.SubMenu 
// // // // // //         key="audit-logs" 
// // // // // //         icon={<HistoryOutlined />} 
// // // // // //         title={!collapsed ? "Audit Logs" : undefined}
// // // // // //       >
// // // // // //         <Menu.Item key="/master-admin/audit-logs/view-logs" icon={<FileTextOutlined />}>
// // // // // //           {!collapsed && <Link to="/master-admin/audit-logs/view-logs">View Logs</Link>}
// // // // // //         </Menu.Item>
// // // // // //         <Menu.Item key="/master-admin/audit-logs/accountability" icon={<CheckCircleOutlined />}>
// // // // // //           {!collapsed && <Link to="/master-admin/audit-logs/accountability">Accountability</Link>}
// // // // // //         </Menu.Item>
// // // // // //       </Menu.SubMenu>

// // // // // //       <Menu.SubMenu 
// // // // // //         key="support" 
// // // // // //         icon={<CustomerServiceOutlined />} 
// // // // // //         title={!collapsed ? "Support" : undefined}
// // // // // //       >
// // // // // //         <Menu.Item key="/master-admin/support/manage-requests" icon={<ProfileOutlined />}>
// // // // // //           {!collapsed && <Link to="/master-admin/support/manage-requests">Manage Requests</Link>}
// // // // // //         </Menu.Item>
// // // // // //       </Menu.SubMenu>
// // // // // //     </>
// // // // // //   );

// // // // // //   // ✅ Critical: Calculate max height for scrollable menu
// // // // // //   const getMenuMaxHeight = () => {
// // // // // //     // Account for: logo (50) + user (80) + footer (60) + padding (20)
// // // // // //     const reservedHeight = collapsed ? 60 : 160; // less when collapsed
// // // // // //     return `calc(100vh - ${reservedHeight}px)`;
// // // // // //   };

// // // // // //   const SidebarContent = () => (
// // // // // //     <ConfigProvider theme={themeConfig}>
// // // // // //       <Sider
// // // // // //         width={collapsed ? 64 : 260}
// // // // // //         collapsedWidth={64}
// // // // // //         collapsible
// // // // // //         collapsed={collapsed}
// // // // // //         onCollapse={setCollapsed}
// // // // // //         style={{
// // // // // //           height: "100vh",
// // // // // //           position: "fixed",
// // // // // //           left: 0,
// // // // // //           top: 0,
// // // // // //           overflow: "hidden",
// // // // // //           boxShadow: "2px 0 8px rgba(0,0,0,0.1)",
// // // // // //           display: "flex",
// // // // // //           flexDirection: "column"
// // // // // //         }}
// // // // // //       >
// // // // // //         {/* Logo & Toggle */}
// // // // // //         <div style={{ 
// // // // // //           height: 50,
// // // // // //           padding: "0 12px",
// // // // // //           display: "flex",
// // // // // //           alignItems: "center",
// // // // // //           justifyContent: collapsed ? "center" : "space-between",
// // // // // //           borderBottom: "1px solid #f0f0f0"
// // // // // //         }}>
// // // // // //           {!collapsed && (
// // // // // //             <div style={{ display: "flex", alignItems: "center" }}>
// // // // // //               <div style={{
// // // // // //                 width: 32,
// // // // // //                 height: 32,
// // // // // //                 backgroundColor: "#FF7A00",
// // // // // //                 borderRadius: 4,
// // // // // //                 display: "flex",
// // // // // //                 alignItems: "center",
// // // // // //                 justifyContent: "center"
// // // // // //               }}>
// // // // // //                 <HomeOutlined style={{ color: "white", fontSize: 16 }} />
// // // // // //               </div>
// // // // // //               <Text strong style={{ marginLeft: 12, fontSize: 16 }}>AdminPortal</Text>
// // // // // //             </div>
// // // // // //           )}
          
// // // // // //           <Button
// // // // // //             type="text"
// // // // // //             icon={collapsed ? <RightOutlined /> : <LeftOutlined />}
// // // // // //             onClick={() => setCollapsed(!collapsed)}
// // // // // //             style={{
// // // // // //               width: 32,
// // // // // //               height: 32,
// // // // // //               padding: 0,
// // // // // //               color: "#FF7A00"
// // // // // //             }}
// // // // // //           />
// // // // // //         </div>

// // // // // //         {/* User Profile */}
// // // // // //         {!collapsed && userData && (
// // // // // //           <div style={{ 
// // // // // //             height: 80,
// // // // // //             padding: "8px 16px",
// // // // // //             borderBottom: "1px solid #f0f0f0"
// // // // // //           }}>
// // // // // //             <Space size={10}>
// // // // // //               <Badge count={userData.notifications} offset={[0, -3]}>
// // // // // //                 <Avatar src={userData.avatar} size="small" style={{ border: "2px solid #FF7A00" }} />
// // // // // //               </Badge>
// // // // // //               <div>
// // // // // //                 <Text strong style={{ fontSize: 12 }}>{userData.name}</Text>
// // // // // //                 <Text type="secondary" style={{ fontSize: 10 }}>{userData.role}</Text>
// // // // // //               </div>
// // // // // //             </Space>
// // // // // //             <div style={{ marginTop: 6, display: "flex", alignItems: "center" }}>
// // // // // //               <Progress percent={userData.progress} showInfo={false} strokeColor="#FF7A00" size="small" style={{ flex: 1, marginRight: 6 }} />
// // // // // //               <Text type="secondary" style={{ fontSize: 10, minWidth: 28 }}>{userData.progress}%</Text>
// // // // // //             </div>
// // // // // //             <Text type="secondary" style={{ fontSize: 10, marginTop: 2 }}>{userData.coursesCompleted} courses</Text>
// // // // // //           </div>
// // // // // //         )}

// // // // // //         {/* ✅ SCROLLABLE MENU - Key Fix */}
// // // // // //         <div 
// // // // // //           style={{ 
// // // // // //             maxHeight: getMenuMaxHeight(),
// // // // // //             overflowY: "auto",
// // // // // //             overflowX: "hidden",
// // // // // //             paddingRight: 4
// // // // // //           }}
// // // // // //         >
// // // // // //           {isLoading ? (
// // // // // //             <div style={{ textAlign: "center", padding: "30px 0" }}>
// // // // // //               <Spin size="small" />
// // // // // //             </div>
// // // // // //           ) : (
// // // // // //             <Menu
// // // // // //               mode="inline"
// // // // // //               selectedKeys={[location.pathname]}
// // // // // //               openKeys={openKeys}
// // // // // //               onOpenChange={setOpenKeys}
// // // // // //               inlineCollapsed={collapsed}
// // // // // //               style={{ borderRight: 0 }}
// // // // // //               // ✅ Ensure submenus render inside scrollable area
// // // // // //               getPopupContainer={triggerNode => triggerNode?.parentElement || document.body}
// // // // // //             >
// // // // // //               {renderMenu()}
// // // // // //             </Menu>
// // // // // //           )}
// // // // // //         </div>

// // // // // //         {/* Footer */}
// // // // // //         {!collapsed && (
// // // // // //           <div style={{ 
// // // // // //             height: 60,
// // // // // //             padding: "8px 16px",
// // // // // //             borderTop: "1px solid #f0f0f0",
// // // // // //             display: "flex",
// // // // // //             alignItems: "center"
// // // // // //           }}>
// // // // // //             <Dropdown overlay={profileMenu} placement="topLeft" arrow>
// // // // // //               <div style={{ 
// // // // // //                 cursor: "pointer", 
// // // // // //                 padding: "6px 8px", 
// // // // // //                 borderRadius: 6,
// // // // // //                 display: "flex",
// // // // // //                 alignItems: "center"
// // // // // //               }}>
// // // // // //                 <SettingOutlined style={{ color: "#FF7A00", marginRight: 10, fontSize: 14 }} />
// // // // // //                 <Text style={{ color: "#333", fontSize: 13 }}>Account Settings</Text>
// // // // // //               </div>
// // // // // //             </Dropdown>
// // // // // //           </div>
// // // // // //         )}
// // // // // //       </Sider>
// // // // // //     </ConfigProvider>
// // // // // //   );

// // // // // //   if (isMobile) {
// // // // // //     return (
// // // // // //       <Drawer
// // // // // //         open={isOpen}
// // // // // //         onClose={onClose}
// // // // // //         placement="left"
// // // // // //         closable={false}
// // // // // //         width={260}
// // // // // //         styles={{ body: { padding: 0 } }}
// // // // // //       >
// // // // // //         <SidebarContent />
// // // // // //       </Drawer>
// // // // // //     );
// // // // // //   }

// // // // // //   return <SidebarContent />;
// // // // // // };

// // // // // // export default MasterAdminSidebar;

// // // // // import React, { useState, useEffect } from "react";
// // // // // import {
// // // // //   Layout,
// // // // //   Menu,
// // // // //   Avatar,
// // // // //   Badge,
// // // // //   Progress,
// // // // //   Dropdown,
// // // // //   Space,
// // // // //   Typography,
// // // // //   Spin,
// // // // //   Drawer,
// // // // //   ConfigProvider,
// // // // //   Button
// // // // // } from "antd";
// // // // // import {
// // // // //   HomeOutlined,
// // // // //   UsergroupAddOutlined,
// // // // //   VideoCameraOutlined,
// // // // //   BarChartOutlined,
// // // // //   SettingOutlined,
// // // // //   HistoryOutlined,
// // // // //   CustomerServiceOutlined,
// // // // //   LogoutOutlined,
// // // // //   UploadOutlined,
// // // // //   BookOutlined,
// // // // //   LockOutlined,
// // // // //   FolderOutlined,
// // // // //   CreditCardOutlined,
// // // // //   BellOutlined,
// // // // //   BgColorsOutlined,
// // // // //   FileTextOutlined,
// // // // //   CheckCircleOutlined,
// // // // //   UserAddOutlined,
// // // // //   EditOutlined,
// // // // //   DeleteOutlined,
// // // // //   TeamOutlined,
// // // // //   UserOutlined,
// // // // //   ProfileOutlined,
// // // // //   SwapOutlined,
// // // // //   LeftOutlined,
// // // // //   RightOutlined
// // // // // } from "@ant-design/icons";
// // // // // import { Link, useLocation, useNavigate } from "react-router-dom";
// // // // // import { useAuth } from "../../Contexts/AuthContext";

// // // // // const { Sider } = Layout;
// // // // // const { Text } = Typography;

// // // // // const themeConfig = {
// // // // //   token: {
// // // // //     colorPrimary: "#FF7A00",
// // // // //     colorBgContainer: "#ffffff",
// // // // //     colorText: "#333333",
// // // // //     colorTextSecondary: "#666666",
// // // // //     colorBorder: "#e0e0e0",
// // // // //     borderRadius: 8,
// // // // //   },
// // // // //   components: {
// // // // //     Menu: {
// // // // //       itemSelectedBg: "#FFF2E8",
// // // // //       itemHoverBg: "#FFF2E8",
// // // // //       itemSelectedColor: "#FF7A00",
// // // // //       iconSize: 16,
// // // // //     },
// // // // //   }
// // // // // };

// // // // // const MasterAdminSidebar = ({ isMobile = false, isOpen, onClose }) => {
// // // // //   const [userData, setUserData] = useState(null);
// // // // //   const [openKeys, setOpenKeys] = useState([]);
// // // // //   const [isLoading, setIsLoading] = useState(true);
// // // // //   const [collapsed, setCollapsed] = useState(false);

// // // // //   const location = useLocation();
// // // // //   const navigate = useNavigate();
// // // // //   const { logout } = useAuth();

// // // // //   // Auto-expand parent menu
// // // // //   useEffect(() => {
// // // // //     const path = location.pathname;
// // // // //     const parents = [];
// // // // //     if (path.includes('/user-management') || path === '/master-admin/create/user') parents.push('user-management');
// // // // //     if (path.includes('/course-control') || path.includes('/videos/upload')) parents.push('course-content');
// // // // //     if (path.includes('/analytics')) parents.push('analytics');
// // // // //     if (path.includes('/settings')) parents.push('system-settings');
// // // // //     if (path.includes('/audit-logs')) parents.push('audit-logs');
// // // // //     if (path.includes('/support')) parents.push('support');
// // // // //     setOpenKeys(parents);
// // // // //   }, [location.pathname]);

// // // // //   useEffect(() => {
// // // // //     const timer = setTimeout(() => {
// // // // //       setUserData({
// // // // //         name: "Admin User",
// // // // //         role: "Master Admin",
// // // // //         avatar: "/api/placeholder/40/40",
// // // // //         progress: 92,
// // // // //         coursesCompleted: 12,
// // // // //         notifications: 2
// // // // //       });
// // // // //       setIsLoading(false);
// // // // //     }, 300);
// // // // //     return () => clearTimeout(timer);
// // // // //   }, []);

// // // // //   const handleLogout = () => {
// // // // //     logout();
// // // // //     navigate('/');
// // // // //   };

// // // // //   const profileMenu = (
// // // // //     <Menu>
// // // // //       <Menu.Item key="profile">Profile Settings</Menu.Item>
// // // // //       <Menu.Item key="help">Help Center</Menu.Item>
// // // // //       <Menu.Divider />
// // // // //       <Menu.Item key="logout" icon={<LogoutOutlined />} danger onClick={handleLogout}>
// // // // //         Logout
// // // // //       </Menu.Item>
// // // // //     </Menu>
// // // // //   );

// // // // //   // ✅ MENU ITEMS WITH TOOLTIPS IN COLLAPSED MODE
// // // // //   const menuItems = [
// // // // //     {
// // // // //       key: "/master-admin/home",
// // // // //       icon: <HomeOutlined />,
// // // // //       label: "Dashboard"
// // // // //     },
// // // // //     {
// // // // //       key: "user-management",
// // // // //       icon: <UsergroupAddOutlined />,
// // // // //       label: "User Management",
// // // // //       children: [
// // // // //         { key: "/master-admin/create/user", icon: <UserAddOutlined />, label: "Create User" },
// // // // //         { key: "/master-admin/user-management/update", icon: <EditOutlined />, label: "Update User" },
// // // // //         { key: "/master-admin/user-management/delete", icon: <DeleteOutlined />, label: "Delete Users" },
// // // // //         { key: "/master-admin/user-management/roles", icon: <SwapOutlined />, label: "Roles & Permissions" },
// // // // //         { key: "/master-admin/user-management/teacher-approvals", icon: <TeamOutlined />, label: "Teacher Approvals" }
// // // // //       ]
// // // // //     },
// // // // //     {
// // // // //       key: "course-content",
// // // // //       icon: <VideoCameraOutlined />,
// // // // //       label: "Course & Content",
// // // // //       children: [
// // // // //         { key: "/master-admin/videos/upload", icon: <UploadOutlined />, label: "Upload Videos" },
// // // // //         { key: "/master-admin/course-control/add-update-remove", icon: <BookOutlined />, label: "Manage Courses" },
// // // // //         { key: "/master-admin/course-control/restrict-access", icon: <LockOutlined />, label: "Restrict Access" },
// // // // //         { key: "/master-admin/course-control/video-organization", icon: <FolderOutlined />, label: "Video Organization" }
// // // // //       ]
// // // // //     },
// // // // //     {
// // // // //       key: "analytics",
// // // // //       icon: <BarChartOutlined />,
// // // // //       label: "Analytics",
// // // // //       children: [
// // // // //         { key: "/master-admin/analytics/student-performance", icon: <UserOutlined />, label: "Student Performance" },
// // // // //         { key: "/master-admin/analytics/teacher-effectiveness", icon: <TeamOutlined />, label: "Teacher Effectiveness" },
// // // // //         { key: "/master-admin/analytics/platform-usage", icon: <BarChartOutlined />, label: "Platform Usage" }
// // // // //       ]
// // // // //     },
// // // // //     {
// // // // //       key: "system-settings",
// // // // //       icon: <SettingOutlined />,
// // // // //       label: "System Settings",
// // // // //       children: [
// // // // //         { key: "/master-admin/settings/payment-gateway", icon: <CreditCardOutlined />, label: "Payment Gateway" },
// // // // //         { key: "/master-admin/settings/notification-templates", icon: <BellOutlined />, label: "Notifications" },
// // // // //         { key: "/master-admin/settings/platform-preferences", icon: <BgColorsOutlined />, label: "Platform Preferences" }
// // // // //       ]
// // // // //     },
// // // // //     {
// // // // //       key: "audit-logs",
// // // // //       icon: <HistoryOutlined />,
// // // // //       label: "Audit Logs",
// // // // //       children: [
// // // // //         { key: "/master-admin/audit-logs/view-logs", icon: <FileTextOutlined />, label: "View Logs" },
// // // // //         { key: "/master-admin/audit-logs/accountability", icon: <CheckCircleOutlined />, label: "Accountability" }
// // // // //       ]
// // // // //     },
// // // // //     {
// // // // //       key: "support",
// // // // //       icon: <CustomerServiceOutlined />,
// // // // //       label: "Support",
// // // // //       children: [
// // // // //         { key: "/master-admin/support/manage-requests", icon: <ProfileOutlined />, label: "Manage Requests" }
// // // // //       ]
// // // // //     }
// // // // //   ];

// // // // //   // ✅ Render menu items with Link and tooltip support
// // // // //   const renderMenuItem = (item) => {
// // // // //     if (item.children) {
// // // // //       return {
// // // // //         key: item.key,
// // // // //         icon: item.icon,
// // // // //         label: item.label,
// // // // //         children: item.children.map(renderMenuItem)
// // // // //       };
// // // // //     }
// // // // //     return {
// // // // //       key: item.key,
// // // // //       icon: item.icon,
// // // // //       label: <Link to={item.key}>{item.label}</Link>
// // // // //     };
// // // // //   };

// // // // //   const SidebarContent = () => (
// // // // //     <ConfigProvider theme={themeConfig}>
// // // // //       <Sider
// // // // //         width={260}
// // // // //         collapsedWidth={64}
// // // // //         collapsible
// // // // //         collapsed={collapsed}
// // // // //         onCollapse={setCollapsed}
// // // // //         // ✅ REMOVE overflow: hidden from Sider
// // // // //         style={{
// // // // //           height: "100vh",
// // // // //           position: "fixed",
// // // // //           left: 0,
// // // // //           top: 0,
// // // // //           // overflow: "hidden", ← ❌ REMOVED
// // // // //           boxShadow: "2px 0 8px rgba(0,0,0,0.1)",
// // // // //           display: "flex",
// // // // //           flexDirection: "column"
// // // // //         }}
// // // // //       >
// // // // //         {/* Logo & Toggle */}
// // // // //         <div style={{ 
// // // // //           height: 50,
// // // // //           padding: "0 12px",
// // // // //           display: "flex",
// // // // //           alignItems: "center",
// // // // //           justifyContent: collapsed ? "center" : "space-between",
// // // // //           borderBottom: "1px solid #f0f0f0"
// // // // //         }}>
// // // // //           {!collapsed && (
// // // // //             <div style={{ display: "flex", alignItems: "center" }}>
// // // // //               <div style={{
// // // // //                 width: 32,
// // // // //                 height: 32,
// // // // //                 backgroundColor: "#FF7A00",
// // // // //                 borderRadius: 4,
// // // // //                 display: "flex",
// // // // //                 alignItems: "center",
// // // // //                 justifyContent: "center"
// // // // //               }}>
// // // // //                 <HomeOutlined style={{ color: "white", fontSize: 16 }} />
// // // // //               </div>
// // // // //               <Text strong style={{ marginLeft: 12, fontSize: 16 }}>AdminPortal</Text>
// // // // //             </div>
// // // // //           )}
          
// // // // //           <Button
// // // // //             type="text"
// // // // //             icon={collapsed ? <RightOutlined /> : <LeftOutlined />}
// // // // //             onClick={() => setCollapsed(!collapsed)}
// // // // //             style={{
// // // // //               width: 32,
// // // // //               height: 32,
// // // // //               padding: 0,
// // // // //               color: "#FF7A00"
// // // // //             }}
// // // // //           />
// // // // //         </div>

// // // // //         {/* User Profile */}
// // // // //         {!collapsed && userData && (
// // // // //           <div style={{ 
// // // // //             height: 80,
// // // // //             padding: "8px 16px",
// // // // //             borderBottom: "1px solid #f0f0f0"
// // // // //           }}>
// // // // //             <Space size={10}>
// // // // //               <Badge count={userData.notifications} offset={[0, -3]}>
// // // // //                 <Avatar src={userData.avatar} size="small" style={{ border: "2px solid #FF7A00" }} />
// // // // //               </Badge>
// // // // //               <div>
// // // // //                 <Text strong style={{ fontSize: 12 }}>{userData.name}</Text>
// // // // //                 <Text type="secondary" style={{ fontSize: 10 }}>{userData.role}</Text>
// // // // //               </div>
// // // // //             </Space>
// // // // //             <div style={{ marginTop: 6, display: "flex", alignItems: "center" }}>
// // // // //               <Progress percent={userData.progress} showInfo={false} strokeColor="#FF7A00" size="small" style={{ flex: 1, marginRight: 6 }} />
// // // // //               <Text type="secondary" style={{ fontSize: 10, minWidth: 28 }}>{userData.progress}%</Text>
// // // // //             </div>
// // // // //             <Text type="secondary" style={{ fontSize: 10, marginTop: 2 }}>{userData.coursesCompleted} courses</Text>
// // // // //           </div>
// // // // //         )}

// // // // //         {/* ✅ SCROLLABLE MENU - Now with proper scroll & tooltips */}
// // // // //         <div 
// // // // //           style={{ 
// // // // //             flex: 1,
// // // // //             overflowY: "auto", // ✅ Enables mouse scroll
// // // // //             overflowX: "hidden",
// // // // //             paddingRight: 4
// // // // //           }}
// // // // //           // Optional: Add custom scrollbar styling
// // // // //           className="sidebar-menu-scroll"
// // // // //         >
// // // // //           {isLoading ? (
// // // // //             <div style={{ textAlign: "center", padding: "30px 0" }}>
// // // // //               <Spin size="small" />
// // // // //             </div>
// // // // //           ) : (
// // // // //             <Menu
// // // // //               mode="inline"
// // // // //               selectedKeys={[location.pathname]}
// // // // //               openKeys={openKeys}
// // // // //               onOpenChange={setOpenKeys}
// // // // //               inlineCollapsed={collapsed}
// // // // //               style={{ borderRight: 0 }}
// // // // //               // ✅ TOOLTIPS IN COLLAPSED MODE
// // // // //               tooltip={collapsed ? { placement: "right" } : false}
// // // // //             >
// // // // //               {menuItems.map(renderMenuItem)}
// // // // //             </Menu>
// // // // //           )}
// // // // //         </div>

// // // // //         {/* Footer */}
// // // // //         {!collapsed && (
// // // // //           <div style={{ 
// // // // //             height: 60,
// // // // //             padding: "8px 16px",
// // // // //             borderTop: "1px solid #f0f0f0",
// // // // //             display: "flex",
// // // // //             alignItems: "center"
// // // // //           }}>
// // // // //             <Dropdown overlay={profileMenu} placement="topLeft" arrow>
// // // // //               <div style={{ 
// // // // //                 cursor: "pointer", 
// // // // //                 padding: "6px 8px", 
// // // // //                 borderRadius: 6,
// // // // //                 display: "flex",
// // // // //                 alignItems: "center"
// // // // //               }}>
// // // // //                 <SettingOutlined style={{ color: "#FF7A00", marginRight: 10, fontSize: 14 }} />
// // // // //                 <Text style={{ color: "#333", fontSize: 13 }}>Account Settings</Text>
// // // // //               </div>
// // // // //             </Dropdown>
// // // // //           </div>
// // // // //         )}
// // // // //       </Sider>
// // // // //     </ConfigProvider>
// // // // //   );

// // // // //   if (isMobile) {
// // // // //     return (
// // // // //       <Drawer
// // // // //         open={isOpen}
// // // // //         onClose={onClose}
// // // // //         placement="left"
// // // // //         closable={false}
// // // // //         width={260}
// // // // //         styles={{ body: { padding: 0 } }}
// // // // //       >
// // // // //         <SidebarContent />
// // // // //       </Drawer>
// // // // //     );
// // // // //   }

// // // // //   return <SidebarContent />;
// // // // // };

// // // // // export default MasterAdminSidebar;

// // // // import React, { useState, useEffect } from "react";
// // // // import {
// // // //   Layout,
// // // //   Menu,
// // // //   Avatar,
// // // //   Badge,
// // // //   Progress,
// // // //   Dropdown,
// // // //   Space,
// // // //   Typography,
// // // //   Spin,
// // // //   Drawer,
// // // //   ConfigProvider,
// // // //   Button
// // // // } from "antd";
// // // // import {
// // // //   HomeOutlined,
// // // //   UsergroupAddOutlined,
// // // //   VideoCameraOutlined,
// // // //   BarChartOutlined,
// // // //   SettingOutlined,
// // // //   HistoryOutlined,
// // // //   CustomerServiceOutlined,
// // // //   LogoutOutlined,
// // // //   UploadOutlined,
// // // //   BookOutlined,
// // // //   LockOutlined,
// // // //   FolderOutlined,
// // // //   CreditCardOutlined,
// // // //   BellOutlined,
// // // //   BgColorsOutlined,
// // // //   FileTextOutlined,
// // // //   CheckCircleOutlined,
// // // //   UserAddOutlined,
// // // //   EditOutlined,
// // // //   DeleteOutlined,
// // // //   TeamOutlined,
// // // //   UserOutlined,
// // // //   ProfileOutlined,
// // // //   SwapOutlined,
// // // //   LeftOutlined,
// // // //   RightOutlined
// // // // } from "@ant-design/icons";
// // // // import { useLocation, useNavigate } from "react-router-dom";
// // // // import { useAuth } from "../../Contexts/AuthContext";

// // // // const { Sider } = Layout;
// // // // const { Text } = Typography;

// // // // const themeConfig = {
// // // //   token: {
// // // //     colorPrimary: "#FF7A00",
// // // //     colorBgContainer: "#ffffff",
// // // //     colorText: "#333333",
// // // //     colorTextSecondary: "#666666",
// // // //     colorBorder: "#e0e0e0",
// // // //     borderRadius: 8,
// // // //   },
// // // //   components: {
// // // //     Menu: {
// // // //       itemSelectedBg: "#FFF2E8",
// // // //       itemHoverBg: "#FFF2E8",
// // // //       itemSelectedColor: "#FF7A00",
// // // //     },
// // // //   }
// // // // };

// // // // const MasterAdminSidebar = ({ isMobile = false, isOpen, onClose }) => {
// // // //   const [userData, setUserData] = useState(null);
// // // //   const [openKeys, setOpenKeys] = useState([]);
// // // //   const [isLoading, setIsLoading] = useState(true);
// // // //   const [collapsed, setCollapsed] = useState(false);

// // // //   const location = useLocation();
// // // //   const navigate = useNavigate();
// // // //   const { logout } = useAuth();

// // // //   useEffect(() => {
// // // //     const path = location.pathname;
// // // //     const parents = [];
// // // //     if (path.includes('/user-management') || path === '/master-admin/create/user') parents.push('user-management');
// // // //     if (path.includes('/course-control') || path.includes('/videos/upload')) parents.push('course-content');
// // // //     if (path.includes('/analytics')) parents.push('analytics');
// // // //     if (path.includes('/settings')) parents.push('system-settings');
// // // //     if (path.includes('/audit-logs')) parents.push('audit-logs');
// // // //     if (path.includes('/support')) parents.push('support');
// // // //     setOpenKeys(parents);
// // // //   }, [location.pathname]);

// // // //   useEffect(() => {
// // // //     const timer = setTimeout(() => {
// // // //       setUserData({
// // // //         name: "Admin User",
// // // //         role: "Master Admin",
// // // //         avatar: "/api/placeholder/40/40",
// // // //         progress: 92,
// // // //         coursesCompleted: 12,
// // // //         notifications: 2
// // // //       });
// // // //       setIsLoading(false);
// // // //     }, 300);
// // // //     return () => clearTimeout(timer);
// // // //   }, []);

// // // //   const handleLogout = () => {
// // // //     logout();
// // // //     navigate('/');
// // // //   };

// // // //   const handleMenuClick = (e) => {
// // // //     // Only navigate if it's a leaf item (not a submenu key)
// // // //     if (!e.key.includes('-')) {
// // // //       navigate(e.key);
// // // //     }
// // // //   };

// // // //   const profileMenu = {
// // // //     items: [
// // // //       { key: "profile", label: "Profile Settings" },
// // // //       { key: "help", label: "Help Center" },
// // // //       { type: "divider" },
// // // //       {
// // // //         key: "logout",
// // // //         label: "Logout",
// // // //         icon: <LogoutOutlined />,
// // // //         danger: true,
// // // //         onClick: handleLogout
// // // //       }
// // // //     ]
// // // //   };

// // // //   // ✅ Menu items WITHOUT <Link> — use onClick instead
// // // //   const menuItems = [
// // // //     {
// // // //       key: "/master-admin/home",
// // // //       icon: <HomeOutlined />,
// // // //       label: "Dashboard"
// // // //     },
// // // //     {
// // // //       key: "user-management",
// // // //       icon: <UsergroupAddOutlined />,
// // // //       label: "User Management",
// // // //       children: [
// // // //         { key: "/master-admin/create/user", icon: <UserAddOutlined />, label: "Create User" },
// // // //         { key: "/master-admin/user-management/update", icon: <EditOutlined />, label: "Update User" },
// // // //         { key: "/master-admin/user-management/delete", icon: <DeleteOutlined />, label: "Delete Users" },
// // // //         { key: "/master-admin/user-management/roles", icon: <SwapOutlined />, label: "Roles & Permissions" },
// // // //         { key: "/master-admin/user-management/teacher-approvals", icon: <TeamOutlined />, label: "Teacher Approvals" }
// // // //       ]
// // // //     },
// // // //     {
// // // //       key: "course-content",
// // // //       icon: <VideoCameraOutlined />,
// // // //       label: "Course & Content",
// // // //       children: [
// // // //         { key: "/master-admin/videos/upload", icon: <UploadOutlined />, label: "Upload Videos" },
// // // //         { key: "/master-admin/course-control/add-update-remove", icon: <BookOutlined />, label: "Manage Courses" },
// // // //         { key: "/master-admin/course-control/restrict-access", icon: <LockOutlined />, label: "Restrict Access" },
// // // //         { key: "/master-admin/course-control/video-organization", icon: <FolderOutlined />, label: "Video Organization" }
// // // //       ]
// // // //     },
// // // //     {
// // // //       key: "analytics",
// // // //       icon: <BarChartOutlined />,
// // // //       label: "Analytics",
// // // //       children: [
// // // //         { key: "/master-admin/analytics/student-performance", icon: <UserOutlined />, label: "Student Performance" },
// // // //         { key: "/master-admin/analytics/teacher-effectiveness", icon: <TeamOutlined />, label: "Teacher Effectiveness" },
// // // //         { key: "/master-admin/analytics/platform-usage", icon: <BarChartOutlined />, label: "Platform Usage" }
// // // //       ]
// // // //     },
// // // //     {
// // // //       key: "system-settings",
// // // //       icon: <SettingOutlined />,
// // // //       label: "System Settings",
// // // //       children: [
// // // //         { key: "/master-admin/settings/payment-gateway", icon: <CreditCardOutlined />, label: "Payment Gateway" },
// // // //         { key: "/master-admin/settings/notification-templates", icon: <BellOutlined />, label: "Notifications" },
// // // //         { key: "/master-admin/settings/platform-preferences", icon: <BgColorsOutlined />, label: "Platform Preferences" }
// // // //       ]
// // // //     },
// // // //     {
// // // //       key: "audit-logs",
// // // //       icon: <HistoryOutlined />,
// // // //       label: "Audit Logs",
// // // //       children: [
// // // //         { key: "/master-admin/audit-logs/view-logs", icon: <FileTextOutlined />, label: "View Logs" },
// // // //         { key: "/master-admin/audit-logs/accountability", icon: <CheckCircleOutlined />, label: "Accountability" }
// // // //       ]
// // // //     },
// // // //     {
// // // //       key: "support",
// // // //       icon: <CustomerServiceOutlined />,
// // // //       label: "Support",
// // // //       children: [
// // // //         { key: "/master-admin/support/manage-requests", icon: <ProfileOutlined />, label: "Manage Requests" }
// // // //       ]
// // // //     }
// // // //   ];

// // // //   const SidebarContent = () => (
// // // //     <ConfigProvider theme={themeConfig}>
// // // //       <Sider
// // // //         width={260}
// // // //         collapsedWidth={64}
// // // //         collapsible
// // // //         collapsed={collapsed}
// // // //         onCollapse={setCollapsed}
// // // //         style={{
// // // //           height: "100vh",
// // // //           position: "fixed",
// // // //           left: 0,
// // // //           top: 0,
// // // //           boxShadow: "2px 0 8px rgba(0,0,0,0.1)",
// // // //           display: "flex",
// // // //           flexDirection: "column"
// // // //         }}
// // // //       >
// // // //         {/* Logo & Toggle */}
// // // //         <div style={{ 
// // // //           height: 50,
// // // //           padding: "0 12px",
// // // //           display: "flex",
// // // //           alignItems: "center",
// // // //           justifyContent: collapsed ? "center" : "space-between",
// // // //           borderBottom: "1px solid #f0f0f0"
// // // //         }}>
// // // //           {!collapsed && (
// // // //             <div style={{ display: "flex", alignItems: "center" }}>
// // // //               <div style={{
// // // //                 width: 32,
// // // //                 height: 32,
// // // //                 backgroundColor: "#FF7A00",
// // // //                 borderRadius: 4,
// // // //                 display: "flex",
// // // //                 alignItems: "center",
// // // //                 justifyContent: "center"
// // // //               }}>
// // // //                 <HomeOutlined style={{ color: "white", fontSize: 16 }} />
// // // //               </div>
// // // //               <Text strong style={{ marginLeft: 12, fontSize: 16 }}>AdminPortal</Text>
// // // //             </div>
// // // //           )}
          
// // // //           <Button
// // // //             type="text"
// // // //             icon={collapsed ? <RightOutlined /> : <LeftOutlined />}
// // // //             onClick={() => setCollapsed(!collapsed)}
// // // //             style={{
// // // //               width: 32,
// // // //               height: 32,
// // // //               padding: 0,
// // // //               color: "#FF7A00"
// // // //             }}
// // // //           />
// // // //         </div>

// // // //         {!collapsed && userData && (
// // // //           <div style={{ 
// // // //             height: 80,
// // // //             padding: "8px 16px",
// // // //             borderBottom: "1px solid #f0f0f0"
// // // //           }}>
// // // //             <Space size={10}>
// // // //               <Badge count={userData.notifications} offset={[0, -3]}>
// // // //                 <Avatar src={userData.avatar} size="small" style={{ border: "2px solid #FF7A00" }} />
// // // //               </Badge>
// // // //               <div>
// // // //                 <Text strong style={{ fontSize: 12 }}>{userData.name}</Text>
// // // //                 <Text type="secondary" style={{ fontSize: 10 }}>{userData.role}</Text>
// // // //               </div>
// // // //             </Space>
// // // //             <div style={{ marginTop: 6, display: "flex", alignItems: "center" }}>
// // // //               <Progress percent={userData.progress} showInfo={false} strokeColor="#FF7A00" size="small" style={{ flex: 1, marginRight: 6 }} />
// // // //               <Text type="secondary" style={{ fontSize: 10, minWidth: 28 }}>{userData.progress}%</Text>
// // // //             </div>
// // // //             <Text type="secondary" style={{ fontSize: 10, marginTop: 2 }}>{userData.coursesCompleted} courses</Text>
// // // //           </div>
// // // //         )}

// // // //         <div 
// // // //           style={{ 
// // // //             flex: 1,
// // // //             overflowY: "auto",
// // // //             overflowX: "hidden",
// // // //             paddingRight: 4
// // // //           }}
// // // //         >
// // // //           {isLoading ? (
// // // //             <div style={{ textAlign: "center", padding: "30px 0" }}>
// // // //               <Spin size="small" />
// // // //             </div>
// // // //           ) : (
// // // //             <Menu
// // // //               mode="inline"
// // // //               selectedKeys={[location.pathname]}
// // // //               openKeys={openKeys}
// // // //               onOpenChange={setOpenKeys}
// // // //               inlineCollapsed={collapsed}
// // // //               items={menuItems}
// // // //               onClick={handleMenuClick} // ✅ Handle navigation here
// // // //               tooltip={collapsed ? { placement: "right" } : undefined}
// // // //             />
// // // //           )}
// // // //         </div>

// // // //         {!collapsed && (
// // // //           <div style={{ 
// // // //             height: 60,
// // // //             padding: "8px 16px",
// // // //             borderTop: "1px solid #f0f0f0",
// // // //             display: "flex",
// // // //             alignItems: "center"
// // // //           }}>
// // // //             <Dropdown menu={profileMenu} placement="topLeft" arrow>
// // // //               <div style={{ 
// // // //                 cursor: "pointer", 
// // // //                 padding: "6px 8px", 
// // // //                 borderRadius: 6,
// // // //                 display: "flex",
// // // //                 alignItems: "center"
// // // //               }}>
// // // //                 <SettingOutlined style={{ color: "#FF7A00", marginRight: 10, fontSize: 14 }} />
// // // //                 <Text style={{ color: "#333", fontSize: 13 }}>Account Settings</Text>
// // // //               </div>
// // // //             </Dropdown>
// // // //           </div>
// // // //         )}
// // // //       </Sider>
// // // //     </ConfigProvider>
// // // //   );

// // // //   if (isMobile) {
// // // //     return (
// // // //       <Drawer
// // // //         open={isOpen}
// // // //         onClose={onClose}
// // // //         placement="left"
// // // //         closable={false}
// // // //         width={260}
// // // //         styles={{ body: { padding: 0 } }}
// // // //       >
// // // //         <SidebarContent />
// // // //       </Drawer>
// // // //     );
// // // //   }

// // // //   return <SidebarContent />;
// // // // };

// // // // export default MasterAdminSidebar;

// // // import React, { useState, useEffect, useRef } from "react";
// // // import {
// // //   Layout,
// // //   Menu,
// // //   Avatar,
// // //   Badge,
// // //   Progress,
// // //   Dropdown,
// // //   Space,
// // //   Typography,
// // //   Spin,
// // //   Drawer,
// // //   ConfigProvider,
// // //   Button
// // // } from "antd";
// // // import {
// // //   HomeOutlined,
// // //   UsergroupAddOutlined,
// // //   VideoCameraOutlined,
// // //   BarChartOutlined,
// // //   SettingOutlined,
// // //   HistoryOutlined,
// // //   CustomerServiceOutlined,
// // //   LogoutOutlined,
// // //   UploadOutlined,
// // //   BookOutlined,
// // //   LockOutlined,
// // //   FolderOutlined,
// // //   CreditCardOutlined,
// // //   BellOutlined,
// // //   BgColorsOutlined,
// // //   FileTextOutlined,
// // //   CheckCircleOutlined,
// // //   UserAddOutlined,
// // //   EditOutlined,
// // //   DeleteOutlined,
// // //   TeamOutlined,
// // //   UserOutlined,
// // //   ProfileOutlined,
// // //   SwapOutlined,
// // //   LeftOutlined,
// // //   RightOutlined
// // // } from "@ant-design/icons";
// // // import { useLocation, useNavigate } from "react-router-dom";
// // // import { useAuth } from "../../Contexts/AuthContext";

// // // const { Sider } = Layout;
// // // const { Text } = Typography;

// // // const themeConfig = {
// // //   token: {
// // //     colorPrimary: "#FF7A00",
// // //     colorBgContainer: "#ffffff",
// // //     colorText: "#333333",
// // //     colorTextSecondary: "#666666",
// // //     colorBorder: "#e0e0e0",
// // //     borderRadius: 8,
// // //   },
// // //   components: {
// // //     Menu: {
// // //       itemSelectedBg: "#FFF2E8",
// // //       itemHoverBg: "#FFF2E8",
// // //       itemSelectedColor: "#FF7A00",
// // //     },
// // //   }
// // // };

// // // const MasterAdminSidebar = ({ isMobile = false, isOpen, onClose }) => {
// // //   const [userData, setUserData] = useState(null);
// // //   const [openKeys, setOpenKeys] = useState([]);
// // //   const [isLoading, setIsLoading] = useState(true);
// // //   const [collapsed, setCollapsed] = useState(false);
// // //   const menuContainerRef = useRef(null); // ✅ Ref for scroll container

// // //   const location = useLocation();
// // //   const navigate = useNavigate();
// // //   const { logout } = useAuth();

// // //   useEffect(() => {
// // //     const path = location.pathname;
// // //     const parents = [];
// // //     if (path.includes('/user-management') || path === '/master-admin/create/user') parents.push('user-management');
// // //     if (path.includes('/course-control') || path.includes('/videos/upload')) parents.push('course-content');
// // //     if (path.includes('/analytics')) parents.push('analytics');
// // //     if (path.includes('/settings')) parents.push('system-settings');
// // //     if (path.includes('/audit-logs')) parents.push('audit-logs');
// // //     if (path.includes('/support')) parents.push('support');
// // //     setOpenKeys(parents);
// // //   }, [location.pathname]);

// // //   useEffect(() => {
// // //     const timer = setTimeout(() => {
// // //       setUserData({
// // //         name: "Admin User",
// // //         role: "Master Admin",
// // //         avatar: "/api/placeholder/40/40",
// // //         progress: 92,
// // //         coursesCompleted: 12,
// // //         notifications: 2
// // //       });
// // //       setIsLoading(false);
// // //     }, 300);
// // //     return () => clearTimeout(timer);
// // //   }, []);

// // //   const handleLogout = () => {
// // //     logout();
// // //     navigate('/');
// // //   };

// // //   const handleMenuClick = (e) => {
// // //     if (!e.key.includes('-')) {
// // //       navigate(e.key);
// // //     }
// // //   };

// // //   const profileMenu = {
// // //     items: [
// // //       { key: "profile", label: "Profile Settings" },
// // //       { key: "help", label: "Help Center" },
// // //       { type: "divider" },
// // //       {
// // //         key: "logout",
// // //         label: "Logout",
// // //         icon: <LogoutOutlined />,
// // //         danger: true,
// // //         onClick: handleLogout
// // //       }
// // //     ]
// // //   };

// // //   const menuItems = [
// // //     {
// // //       key: "/master-admin/home",
// // //       icon: <HomeOutlined />,
// // //       label: "Dashboard"
// // //     },
// // //     {
// // //       key: "user-management",
// // //       icon: <UsergroupAddOutlined />,
// // //       label: "User Management",
// // //       children: [
// // //         { key: "/master-admin/create/user", icon: <UserAddOutlined />, label: "Create User" },
// // //         { key: "/master-admin/user-management/update", icon: <EditOutlined />, label: "Update User" },
// // //         { key: "/master-admin/user-management/delete", icon: <DeleteOutlined />, label: "Delete Users" },
// // //         { key: "/master-admin/user-management/roles", icon: <SwapOutlined />, label: "Roles & Permissions" },
// // //         { key: "/master-admin/user-management/teacher-approvals", icon: <TeamOutlined />, label: "Teacher Approvals" }
// // //       ]
// // //     },
// // //     {
// // //       key: "course-content",
// // //       icon: <VideoCameraOutlined />,
// // //       label: "Course & Content",
// // //       children: [
// // //         { key: "/master-admin/videos/upload", icon: <UploadOutlined />, label: "Upload Videos" },
// // //         { key: "/master-admin/course-control/add-update-remove", icon: <BookOutlined />, label: "Manage Courses" },
// // //         { key: "/master-admin/course-control/restrict-access", icon: <LockOutlined />, label: "Restrict Access" },
// // //         { key: "/master-admin/course-control/video-organization", icon: <FolderOutlined />, label: "Video Organization" }
// // //       ]
// // //     },
// // //     {
// // //       key: "analytics",
// // //       icon: <BarChartOutlined />,
// // //       label: "Analytics",
// // //       children: [
// // //         { key: "/master-admin/analytics/student-performance", icon: <UserOutlined />, label: "Student Performance" },
// // //         { key: "/master-admin/analytics/teacher-effectiveness", icon: <TeamOutlined />, label: "Teacher Effectiveness" },
// // //         { key: "/master-admin/analytics/platform-usage", icon: <BarChartOutlined />, label: "Platform Usage" }
// // //       ]
// // //     },
// // //     {
// // //       key: "system-settings",
// // //       icon: <SettingOutlined />,
// // //       label: "System Settings",
// // //       children: [
// // //         { key: "/master-admin/settings/payment-gateway", icon: <CreditCardOutlined />, label: "Payment Gateway" },
// // //         { key: "/master-admin/settings/notification-templates", icon: <BellOutlined />, label: "Notifications" },
// // //         { key: "/master-admin/settings/platform-preferences", icon: <BgColorsOutlined />, label: "Platform Preferences" }
// // //       ]
// // //     },
// // //     {
// // //       key: "audit-logs",
// // //       icon: <HistoryOutlined />,
// // //       label: "Audit Logs",
// // //       children: [
// // //         { key: "/master-admin/audit-logs/view-logs", icon: <FileTextOutlined />, label: "View Logs" },
// // //         { key: "/master-admin/audit-logs/accountability", icon: <CheckCircleOutlined />, label: "Accountability" }
// // //       ]
// // //     },
// // //     {
// // //       key: "support",
// // //       icon: <CustomerServiceOutlined />,
// // //       label: "Support",
// // //       children: [
// // //         { key: "/master-admin/support/manage-requests", icon: <ProfileOutlined />, label: "Manage Requests" }
// // //       ]
// // //     }
// // //   ];

// // //   // ✅ Ensure scroll works on mouse wheel
// // //   const handleWheel = (e) => {
// // //     if (menuContainerRef.current) {
// // //       e.stopPropagation();
// // //       menuContainerRef.current.scrollBy({
// // //         top: e.deltaY,
// // //         behavior: 'auto'
// // //       });
// // //     }
// // //   };

// // //   const SidebarContent = () => (
// // //     <ConfigProvider theme={themeConfig}>
// // //       <Sider
// // //         width={260}
// // //         collapsedWidth={64}
// // //         collapsible
// // //         collapsed={collapsed}
// // //         onCollapse={setCollapsed}
// // //         style={{
// // //           height: "100vh",
// // //           position: "fixed",
// // //           left: 0,
// // //           top: 0,
// // //           boxShadow: "2px 0 8px rgba(0,0,0,0.1)",
// // //           display: "flex",
// // //           flexDirection: "column"
// // //         }}
// // //       >
// // //         {/* Logo & Toggle */}
// // //         <div style={{ 
// // //           height: 50,
// // //           padding: "0 12px",
// // //           display: "flex",
// // //           alignItems: "center",
// // //           justifyContent: collapsed ? "center" : "space-between",
// // //           borderBottom: "1px solid #f0f0f0"
// // //         }}>
// // //           {!collapsed && (
// // //             <div style={{ display: "flex", alignItems: "center" }}>
// // //               <div style={{
// // //                 width: 32,
// // //                 height: 32,
// // //                 backgroundColor: "#FF7A00",
// // //                 borderRadius: 4,
// // //                 display: "flex",
// // //                 alignItems: "center",
// // //                 justifyContent: "center"
// // //               }}>
// // //                 <HomeOutlined style={{ color: "white", fontSize: 16 }} />
// // //               </div>
// // //               <Text strong style={{ marginLeft: 12, fontSize: 16 }}>AdminPortal</Text>
// // //             </div>
// // //           )}
          
// // //           <Button
// // //             type="text"
// // //             icon={collapsed ? <RightOutlined /> : <LeftOutlined />}
// // //             onClick={() => setCollapsed(!collapsed)}
// // //             style={{
// // //               width: 32,
// // //               height: 32,
// // //               padding: 0,
// // //               color: "#FF7A00"
// // //             }}
// // //           />
// // //         </div>

// // //         {!collapsed && userData && (
// // //           <div style={{ 
// // //             height: 80,
// // //             padding: "8px 16px",
// // //             borderBottom: "1px solid #f0f0f0"
// // //           }}>
// // //             <Space size={10}>
// // //               <Badge count={userData.notifications} offset={[0, -3]}>
// // //                 <Avatar src={userData.avatar} size="small" style={{ border: "2px solid #FF7A00" }} />
// // //               </Badge>
// // //               <div>
// // //                 <Text strong style={{ fontSize: 12 }}>{userData.name}</Text>
// // //                 <Text type="secondary" style={{ fontSize: 10 }}>{userData.role}</Text>
// // //               </div>
// // //             </Space>
// // //             <div style={{ marginTop: 6, display: "flex", alignItems: "center" }}>
// // //               <Progress percent={userData.progress} showInfo={false} strokeColor="#FF7A00" size="small" style={{ flex: 1, marginRight: 6 }} />
// // //               <Text type="secondary" style={{ fontSize: 10, minWidth: 28 }}>{userData.progress}%</Text>
// // //             </div>
// // //             <Text type="secondary" style={{ fontSize: 10, marginTop: 2 }}>{userData.coursesCompleted} courses</Text>
// // //           </div>
// // //         )}

// // //         {/* ✅ SCROLLABLE MENU CONTAINER - KEY FIX */}
// // //         <div 
// // //           ref={menuContainerRef}
// // //           onWheel={handleWheel} // ✅ Capture mouse wheel
// // //           style={{ 
// // //             flex: 1,
// // //             overflowY: "auto",
// // //             overflowX: "hidden",
// // //             paddingRight: 4,
// // //             WebkitOverflowScrolling: "touch" // Smooth scroll on iOS
// // //           }}
// // //           className="admin-sidebar-menu"
// // //         >
// // //           {isLoading ? (
// // //             <div style={{ textAlign: "center", padding: "30px 0" }}>
// // //               <Spin size="small" />
// // //             </div>
// // //           ) : (
// // //             <Menu
// // //               mode="inline"
// // //               selectedKeys={[location.pathname]}
// // //               openKeys={openKeys}
// // //               onOpenChange={setOpenKeys}
// // //               inlineCollapsed={collapsed}
// // //               items={menuItems}
// // //               onClick={handleMenuClick}
// // //               tooltip={collapsed ? { placement: "right" } : undefined}
// // //             />
// // //           )}
// // //         </div>

// // //         {!collapsed && (
// // //           <div style={{ 
// // //             height: 60,
// // //             padding: "8px 16px",
// // //             borderTop: "1px solid #f0f0f0",
// // //             display: "flex",
// // //             alignItems: "center"
// // //           }}>
// // //             <Dropdown menu={profileMenu} placement="topLeft" arrow>
// // //               <div style={{ 
// // //                 cursor: "pointer", 
// // //                 padding: "6px 8px", 
// // //                 borderRadius: 6,
// // //                 display: "flex",
// // //                 alignItems: "center"
// // //               }}>
// // //                 <SettingOutlined style={{ color: "#FF7A00", marginRight: 10, fontSize: 14 }} />
// // //                 <Text style={{ color: "#333", fontSize: 13 }}>Account Settings</Text>
// // //               </div>
// // //             </Dropdown>
// // //           </div>
// // //         )}
// // //       </Sider>
// // //     </ConfigProvider>
// // //   );

// // //   if (isMobile) {
// // //     return (
// // //       <Drawer
// // //         open={isOpen}
// // //         onClose={onClose}
// // //         placement="left"
// // //         closable={false}
// // //         width={260}
// // //         styles={{ body: { padding: 0 } }}
// // //       >
// // //         <SidebarContent />
// // //       </Drawer>
// // //     );
// // //   }

// // //   return <SidebarContent />;
// // // };

// // // export default MasterAdminSidebar;

// // import React, { useState, useEffect } from "react";
// // import {
// //   Layout,
// //   Menu,
// //   Avatar,
// //   Badge,
// //   Progress,
// //   Dropdown,
// //   Space,
// //   Typography,
// //   Spin,
// //   Drawer,
// //   ConfigProvider,
// //   Button
// // } from "antd";
// // import {
// //   HomeOutlined,
// //   UsergroupAddOutlined,
// //   VideoCameraOutlined,
// //   BarChartOutlined,
// //   SettingOutlined,
// //   HistoryOutlined,
// //   CustomerServiceOutlined,
// //   LogoutOutlined,
// //   UploadOutlined,
// //   BookOutlined,
// //   LockOutlined,
// //   FolderOutlined,
// //   CreditCardOutlined,
// //   BellOutlined,
// //   BgColorsOutlined,
// //   FileTextOutlined,
// //   CheckCircleOutlined,
// //   UserAddOutlined,
// //   EditOutlined,
// //   DeleteOutlined,
// //   TeamOutlined,
// //   UserOutlined,
// //   ProfileOutlined,
// //   SwapOutlined,
// //   LeftOutlined,
// //   RightOutlined
// // } from "@ant-design/icons";
// // import { useLocation, useNavigate } from "react-router-dom";
// // import { useAuth } from "../../Contexts/AuthContext";

// // const { Sider } = Layout;
// // const { Text } = Typography;

// // const themeConfig = {
// //   token: {
// //     colorPrimary: "#FF7A00",
// //     colorBgContainer: "#ffffff",
// //     colorText: "#333333",
// //     colorTextSecondary: "#666666",
// //     colorBorder: "#e0e0e0",
// //     borderRadius: 8,
// //   },
// //   components: {
// //     Menu: {
// //       itemSelectedBg: "#FFF2E8",
// //       itemHoverBg: "#FFF2E8",
// //       itemSelectedColor: "#FF7A00",
// //     },
// //   }
// // };

// // const MasterAdminSidebar = ({ isMobile = false, isOpen, onClose }) => {
// //   const [userData, setUserData] = useState(null);
// //   const [openKeys, setOpenKeys] = useState([]);
// //   const [isLoading, setIsLoading] = useState(true);
// //   const [collapsed, setCollapsed] = useState(false);

// //   const location = useLocation();
// //   const navigate = useNavigate();
// //   const { logout } = useAuth();

// //   useEffect(() => {
// //     const path = location.pathname;
// //     const parents = [];
// //     if (path.includes('/user-management') || path === '/master-admin/create/user') parents.push('user-management');
// //     if (path.includes('/course-control') || path.includes('/videos/upload')) parents.push('course-content');
// //     if (path.includes('/analytics')) parents.push('analytics');
// //     if (path.includes('/settings')) parents.push('system-settings');
// //     if (path.includes('/audit-logs')) parents.push('audit-logs');
// //     if (path.includes('/support')) parents.push('support');
// //     setOpenKeys(parents);
// //   }, [location.pathname]);

// //   useEffect(() => {
// //     const timer = setTimeout(() => {
// //       setUserData({
// //         name: "Admin User",
// //         role: "Master Admin",
// //         avatar: "/api/placeholder/40/40",
// //         progress: 92,
// //         coursesCompleted: 12,
// //         notifications: 2
// //       });
// //       setIsLoading(false);
// //     }, 300);
// //     return () => clearTimeout(timer);
// //   }, []);

// //   const handleLogout = () => {
// //     logout();
// //     navigate('/');
// //   };

// //   const handleMenuClick = (e) => {
// //     if (!e.key.includes('-')) {
// //       navigate(e.key);
// //     }
// //   };

// //   const profileMenu = {
// //     items: [
// //       { key: "profile", label: "Profile Settings" },
// //       { key: "help", label: "Help Center" },
// //       { type: "divider" },
// //       {
// //         key: "logout",
// //         label: "Logout",
// //         icon: <LogoutOutlined />,
// //         danger: true,
// //         onClick: handleLogout
// //       }
// //     ]
// //   };

// //   const menuItems = [
// //     {
// //       key: "/master-admin/home",
// //       icon: <HomeOutlined />,
// //       label: "Dashboard"
// //     },
// //     {
// //       key: "user-management",
// //       icon: <UsergroupAddOutlined />,
// //       label: "User Management",
// //       children: [
// //         { key: "/master-admin/create/user", icon: <UserAddOutlined />, label: "Create User" },
// //         { key: "/master-admin/user-management/update", icon: <EditOutlined />, label: "Update User" },
// //         { key: "/master-admin/user-management/delete", icon: <DeleteOutlined />, label: "Delete Users" },
// //         { key: "/master-admin/user-management/roles", icon: <SwapOutlined />, label: "Roles & Permissions" },
// //         { key: "/master-admin/user-management/teacher-approvals", icon: <TeamOutlined />, label: "Teacher Approvals" }
// //       ]
// //     },
// //     {
// //       key: "course-content",
// //       icon: <VideoCameraOutlined />,
// //       label: "Course & Content",
// //       children: [
// //         { key: "/master-admin/videos/upload", icon: <UploadOutlined />, label: "Upload Videos" },
// //         { key: "/master-admin/course-control/add-update-remove", icon: <BookOutlined />, label: "Manage Courses" },
// //         { key: "/master-admin/course-control/restrict-access", icon: <LockOutlined />, label: "Restrict Access" },
// //         { key: "/master-admin/course-control/video-organization", icon: <FolderOutlined />, label: "Video Organization" }
// //       ]
// //     },
// //     {
// //       key: "analytics",
// //       icon: <BarChartOutlined />,
// //       label: "Analytics",
// //       children: [
// //         { key: "/master-admin/analytics/student-performance", icon: <UserOutlined />, label: "Student Performance" },
// //         { key: "/master-admin/analytics/teacher-effectiveness", icon: <TeamOutlined />, label: "Teacher Effectiveness" },
// //         { key: "/master-admin/analytics/platform-usage", icon: <BarChartOutlined />, label: "Platform Usage" }
// //       ]
// //     },
// //     {
// //       key: "system-settings",
// //       icon: <SettingOutlined />,
// //       label: "System Settings",
// //       children: [
// //         { key: "/master-admin/settings/payment-gateway", icon: <CreditCardOutlined />, label: "Payment Gateway" },
// //         { key: "/master-admin/settings/notification-templates", icon: <BellOutlined />, label: "Notifications" },
// //         { key: "/master-admin/settings/platform-preferences", icon: <BgColorsOutlined />, label: "Platform Preferences" }
// //       ]
// //     },
// //     {
// //       key: "audit-logs",
// //       icon: <HistoryOutlined />,
// //       label: "Audit Logs",
// //       children: [
// //         { key: "/master-admin/audit-logs/view-logs", icon: <FileTextOutlined />, label: "View Logs" },
// //         { key: "/master-admin/audit-logs/accountability", icon: <CheckCircleOutlined />, label: "Accountability" }
// //       ]
// //     },
// //     {
// //       key: "support",
// //       icon: <CustomerServiceOutlined />,
// //       label: "Support",
// //       children: [
// //         { key: "/master-admin/support/manage-requests", icon: <ProfileOutlined />, label: "Manage Requests" }
// //       ]
// //     }
// //   ];

// //   const SidebarContent = () => (
// //     <ConfigProvider theme={themeConfig}>
// //       <Sider
// //         width={260}
// //         collapsedWidth={64}
// //         collapsible
// //         collapsed={collapsed}
// //         onCollapse={setCollapsed}
// //         style={{
// //           height: "100vh",
// //           position: "fixed",
// //           left: 0,
// //           top: 0,
// //           boxShadow: "2px 0 8px rgba(0,0,0,0.1)",
// //           display: "flex",
// //           flexDirection: "column"
// //         }}
// //         // ✅ Prevent Sider from blocking scroll
// //         className="admin-sider"
// //       >
// //         {/* Logo & Toggle */}
// //         <div style={{ 
// //           height: 50,
// //           padding: "0 12px",
// //           display: "flex",
// //           alignItems: "center",
// //           justifyContent: collapsed ? "center" : "space-between",
// //           borderBottom: "1px solid #f0f0f0"
// //         }}>
// //           {!collapsed && (
// //             <div style={{ display: "flex", alignItems: "center" }}>
// //               <div style={{
// //                 width: 32,
// //                 height: 32,
// //                 backgroundColor: "#FF7A00",
// //                 borderRadius: 4,
// //                 display: "flex",
// //                 alignItems: "center",
// //                 justifyContent: "center"
// //               }}>
// //                 <HomeOutlined style={{ color: "white", fontSize: 16 }} />
// //               </div>
// //               <Text strong style={{ marginLeft: 12, fontSize: 16 }}>AdminPortal</Text>
// //             </div>
// //           )}
          
// //           <Button
// //             type="text"
// //             icon={collapsed ? <RightOutlined /> : <LeftOutlined />}
// //             onClick={() => setCollapsed(!collapsed)}
// //             style={{
// //               width: 32,
// //               height: 32,
// //               padding: 0,
// //               color: "#FF7A00"
// //             }}
// //           />
// //         </div>

// //         {!collapsed && userData && (
// //           <div style={{ 
// //             height: 80,
// //             padding: "8px 16px",
// //             borderBottom: "1px solid #f0f0f0"
// //           }}>
// //             <Space size={10}>
// //               <Badge count={userData.notifications} offset={[0, -3]}>
// //                 <Avatar src={userData.avatar} size="small" style={{ border: "2px solid #FF7A00" }} />
// //               </Badge>
// //               <div>
// //                 <Text strong style={{ fontSize: 12 }}>{userData.name}</Text>
// //                 <Text type="secondary" style={{ fontSize: 10 }}>{userData.role}</Text>
// //               </div>
// //             </Space>
// //             <div style={{ marginTop: 6, display: "flex", alignItems: "center" }}>
// //               <Progress percent={userData.progress} showInfo={false} strokeColor="#FF7A00" size="small" style={{ flex: 1, marginRight: 6 }} />
// //               <Text type="secondary" style={{ fontSize: 10, minWidth: 28 }}>{userData.progress}%</Text>
// //             </div>
// //             <Text type="secondary" style={{ fontSize: 10, marginTop: 2 }}>{userData.coursesCompleted} courses</Text>
// //           </div>
// //         )}

// //         {/* ✅ SCROLLABLE MENU AREA - KEY FIX */}
// //         <div className="admin-sider-menu-container">
// //           {isLoading ? (
// //             <div style={{ textAlign: "center", padding: "30px 0" }}>
// //               <Spin size="small" />
// //             </div>
// //           ) : (
// //             <Menu
// //               mode="inline"
// //               selectedKeys={[location.pathname]}
// //               openKeys={openKeys}
// //               onOpenChange={setOpenKeys}
// //               inlineCollapsed={collapsed}
// //               items={menuItems}
// //               onClick={handleMenuClick}
// //               tooltip={collapsed ? { placement: "right" } : undefined}
// //             />
// //           )}
// //         </div>

// //         {!collapsed && (
// //           <div style={{ 
// //             height: 60,
// //             padding: "8px 16px",
// //             borderTop: "1px solid #f0f0f0",
// //             display: "flex",
// //             alignItems: "center"
// //           }}>
// //             <Dropdown menu={profileMenu} placement="topLeft" arrow>
// //               <div style={{ 
// //                 cursor: "pointer", 
// //                 padding: "6px 8px", 
// //                 borderRadius: 6,
// //                 display: "flex",
// //                 alignItems: "center"
// //               }}>
// //                 <SettingOutlined style={{ color: "#FF7A00", marginRight: 10, fontSize: 14 }} />
// //                 <Text style={{ color: "#333", fontSize: 13 }}>Account Settings</Text>
// //               </div>
// //             </Dropdown>
// //           </div>
// //         )}
// //       </Sider>
// //     </ConfigProvider>
// //   );

// //   if (isMobile) {
// //     return (
// //       <Drawer
// //         open={isOpen}
// //         onClose={onClose}
// //         placement="left"
// //         closable={false}
// //         width={260}
// //         styles={{ body: { padding: 0 } }}
// //       >
// //         <SidebarContent />
// //       </Drawer>
// //     );
// //   }

// //   return <SidebarContent />;
// // };

// // export default MasterAdminSidebar;

// import React, { useState, useEffect } from "react";
// import {
//   Layout,
//   Menu,
//   Avatar,
//   Badge,
//   Progress,
//   Dropdown,
//   Space,
//   Typography,
//   Spin,
//   Drawer,
//   ConfigProvider,
//   Button
// } from "antd";
// import {
//   HomeOutlined,
//   UsergroupAddOutlined,
//   VideoCameraOutlined,
//   BarChartOutlined,
//   SettingOutlined,
//   HistoryOutlined,
//   CustomerServiceOutlined,
//   LogoutOutlined,
//   UploadOutlined,
//   BookOutlined,
//   LockOutlined,
//   FolderOutlined,
//   CreditCardOutlined,
//   BellOutlined,
//   BgColorsOutlined,
//   FileTextOutlined,
//   CheckCircleOutlined,
//   UserAddOutlined,
//   EditOutlined,
//   DeleteOutlined,
//   TeamOutlined,
//   UserOutlined,
//   ProfileOutlined,
//   SwapOutlined,
//   LeftOutlined,
//   RightOutlined
// } from "@ant-design/icons";
// import { useLocation, useNavigate } from "react-router-dom";
// import { useAuth } from "../../Contexts/AuthContext";

// const { Sider } = Layout;
// const { Text } = Typography;

// // Define all routes (for navigation)
// const routes = {
//   "/master-admin/home": true,
//   "/master-admin/create/user": true,
//   "/master-admin/user-management/update": true,
//   "/master-admin/user-management/delete": true,
//   "/master-admin/user-management/roles": true,
//   "/master-admin/user-management/teacher-approvals": true,
//   "/master-admin/videos/upload": true,
//   "/master-admin/course-control/add-update-remove": true,
//   "/master-admin/course-control/restrict-access": true,
//   "/master-admin/course-control/video-organization": true,
//   "/master-admin/analytics/student-performance": true,
//   "/master-admin/analytics/teacher-effectiveness": true,
//   "/master-admin/analytics/platform-usage": true,
//   "/master-admin/settings/payment-gateway": true,
//   "/master-admin/settings/notification-templates": true,
//   "/master-admin/settings/platform-preferences": true,
//   "/master-admin/audit-logs/view-logs": true,
//   "/master-admin/audit-logs/accountability": true,
//   "/master-admin/support/manage-requests": true,
// };

// const MasterAdminSidebar = ({ isMobile = false, isOpen, onClose }) => {
//   const [userData, setUserData] = useState(null);
//   const [openKeys, setOpenKeys] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [collapsed, setCollapsed] = useState(false);

//   const location = useLocation();
//   const navigate = useNavigate();
//   const { logout } = useAuth();

//   // Auto-expand parent
//   useEffect(() => {
//     const path = location.pathname;
//     const parents = [];
//     if (path.includes('/user-management') || path === '/master-admin/create/user') parents.push('user-management');
//     if (path.includes('/course-control') || path.includes('/videos/upload')) parents.push('course-content');
//     if (path.includes('/analytics')) parents.push('analytics');
//     if (path.includes('/settings')) parents.push('system-settings');
//     if (path.includes('/audit-logs')) parents.push('audit-logs');
//     if (path.includes('/support')) parents.push('support');
//     setOpenKeys(parents);
//   }, [location.pathname]);

//   useEffect(() => {
//     setTimeout(() => {
//       setUserData({
//         name: "Admin User",
//         role: "Master Admin",
//         avatar: "/api/placeholder/40/40",
//         progress: 92,
//         coursesCompleted: 12,
//         notifications: 2
//       });
//       setIsLoading(false);
//     }, 300);
//   }, []);

//   const handleLogout = () => {
//     logout();
//     navigate('/');
//   };

//  // Inside your component
// const handleMenuClick = (e) => {
//   const { key } = e;
//   // Navigate only if it's a real route (not a parent key like "user-management")
//   if (routes[key]) {
//     navigate(key);
//   }
// };
// // ✅ ACCORDION MODE: Only one submenu open at a time
// const handleOpenChange = (keys) => {
//   const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
  
//   // If clicking on an already open menu, close it
//   if (openKeys.includes(latestOpenKey)) {
//     setOpenKeys([]);
//   } else {
//     // Close others, open only this one
//     setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
//   }
// };
//   const profileMenu = {
//     items: [
//       { key: "profile", label: "Profile Settings" },
//       { key: "help", label: "Help Center" },
//       { type: "divider" },
//       {
//         key: "logout",
//         label: "Logout",
//         icon: <LogoutOutlined />,
//         danger: true,
//         onClick: handleLogout
//       }
//     ]
//   };

//   // ✅ Menu items as plain objects (no JSX in label)
//   const menuItems = [
//     { key: "/master-admin/home", icon: <HomeOutlined />, label: "Dashboard" },
//     {
//       key: "user-management",
//       icon: <UsergroupAddOutlined />,
//       label: "User Management",
//       children: [
//         { key: "/master-admin/create/user", icon: <UserAddOutlined />, label: "Create User" },
//         { key: "/master-admin/user-management/update", icon: <EditOutlined />, label: "Update User" },
//         { key: "/master-admin/user-management/delete", icon: <DeleteOutlined />, label: "Delete Users" },
//         { key: "/master-admin/user-management/roles", icon: <SwapOutlined />, label: "Roles & Permissions" },
//         { key: "/master-admin/user-management/teacher-approvals", icon: <TeamOutlined />, label: "Teacher Approvals" }
//       ]
//     },
//     {
//       key: "course-content",
//       icon: <VideoCameraOutlined />,
//       label: "Course & Content",
//       children: [
//         { key: "/master-admin/videos/upload", icon: <UploadOutlined />, label: "Upload Videos" },
//         { key: "/master-admin/course-control/add-update-remove", icon: <BookOutlined />, label: "Manage Courses" },
//         { key: "/master-admin/course-control/restrict-access", icon: <LockOutlined />, label: "Restrict Access" },
//         { key: "/master-admin/course-control/video-organization", icon: <FolderOutlined />, label: "Video Organization" }
//       ]
//     },
//     {
//       key: "analytics",
//       icon: <BarChartOutlined />,
//       label: "Analytics",
//       children: [
//         { key: "/master-admin/analytics/student-performance", icon: <UserOutlined />, label: "Student Performance" },
//         { key: "/master-admin/analytics/teacher-effectiveness", icon: <TeamOutlined />, label: "Teacher Effectiveness" },
//         { key: "/master-admin/analytics/platform-usage", icon: <BarChartOutlined />, label: "Platform Usage" }
//       ]
//     },
//     {
//       key: "system-settings",
//       icon: <SettingOutlined />,
//       label: "System Settings",
//       children: [
//         { key: "/master-admin/settings/payment-gateway", icon: <CreditCardOutlined />, label: "Payment Gateway" },
//         { key: "/master-admin/settings/notification-templates", icon: <BellOutlined />, label: "Notifications" },
//         { key: "/master-admin/settings/platform-preferences", icon: <BgColorsOutlined />, label: "Platform Preferences" }
//       ]
//     },
//     {
//       key: "audit-logs",
//       icon: <HistoryOutlined />,
//       label: "Audit Logs",
//       children: [
//         { key: "/master-admin/audit-logs/view-logs", icon: <FileTextOutlined />, label: "View Logs" },
//         { key: "/master-admin/audit-logs/accountability", icon: <CheckCircleOutlined />, label: "Accountability" }
//       ]
//     },
//     {
//       key: "support",
//       icon: <CustomerServiceOutlined />,
//       label: "Support",
//       children: [
//         { key: "/master-admin/support/manage-requests", icon: <ProfileOutlined />, label: "Manage Requests" }
//       ]
//     }
//   ];

//   const SidebarContent = () => (
//     <ConfigProvider
//       theme={{
//         token: { colorPrimary: "#FF7A00" },
//         components: {
//           Menu: {
//             itemSelectedBg: "#FFF2E8",
//             itemHoverBg: "#FFF2E8",
//             itemSelectedColor: "#FF7A00",
//           },
//         },
//       }}
//     >
//       <Sider
//         width={260}
//         collapsedWidth={64}
//         collapsible
//         collapsed={collapsed}
//         onCollapse={setCollapsed}
//         style={{
//           height: "100vh",
//           position: "fixed",
//           left: 0,
//           top: 0,
//           boxShadow: "2px 0 8px rgba(0,0,0,0.1)",
//         }}
//         // ✅ Remove overflow hidden
//         className="fixed-sider"
//       >
//         {/* Logo */}
//         <div style={{ 
//           height: 50,
//           display: "flex",
//           alignItems: "center",
//           justifyContent: collapsed ? "center" : "space-between",
//           padding: "0 16px",
//           borderBottom: "1px solid #f0f0f0"
//         }}>
//           {!collapsed && (
//             <>
//               <div style={{ display: "flex", alignItems: "center" }}>
//                 <div style={{
//                   width: 32,
//                   height: 32,
//                   backgroundColor: "#FF7A00",
//                   borderRadius: 4,
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center"
//                 }}>
//                   <HomeOutlined style={{ color: "white", fontSize: 16 }} />
//                 </div>
//                 <Text strong style={{ marginLeft: 12, fontSize: 16 }}>AdminPortal</Text>
//               </div>
//             </>
//           )}
//           <Button
//             type="text"
//             icon={collapsed ? <RightOutlined /> : <LeftOutlined />}
//             onClick={() => setCollapsed(!collapsed)}
//             style={{ color: "#FF7A00" }}
//           />
//         </div>

//         {/* User (only when expanded) */}
//         {!collapsed && userData && (
//           <div style={{ 
//             padding: "12px 16px",
//             borderBottom: "1px solid #f0f0f0"
//           }}>
//             <Space size={10}>
//               <Badge count={userData.notifications}>
//                 <Avatar src={userData.avatar} size="small" style={{ border: "2px solid #FF7A00" }} />
//               </Badge>
//               <div>
//                 <Text strong>{userData.name}</Text>
//                 <Text type="secondary" style={{ fontSize: 12 }}>{userData.role}</Text>
//               </div>
//             </Space>
//           </div>
//         )}

//         {/* ✅ SCROLLABLE MENU - THE FIX */}
//         <div 
//           style={{ 
//             flex: 1,
//             overflowY: "auto",   // ✅ Enables scroll
//             overflowX: "hidden",
//             paddingRight: 4
//           }}
//           className="sider-menu-scroll"
//         >
//           {isLoading ? (
//             <div style={{ padding: "20px", textAlign: "center" }}>
//               <Spin size="small" />
//             </div>
//           ) : (
//            <Menu
//   mode="inline"
//   selectedKeys={[location.pathname]}
//   openKeys={openKeys}
//   onOpenChange={handleOpenChange} // ✅ Use this
//   inlineCollapsed={collapsed}
//   items={menuItems}
//   onClick={handleMenuClick}
//   tooltip={collapsed ? { placement: "right" } : null}
// />
//           )}
//         </div>

//         {/* Footer */}
//         {!collapsed && (
//           <div style={{ padding: "12px 16px", borderTop: "1px solid #f0f0f0" }}>
//             <Dropdown menu={profileMenu}>
//               <div style={{ cursor: "pointer", display: "flex", alignItems: "center" }}>
//                 <SettingOutlined style={{ color: "#FF7A00", marginRight: 12 }} />
//                 <Text>Account Settings</Text>
//               </div>
//             </Dropdown>
//           </div>
//         )}
//       </Sider>
//     </ConfigProvider>
//   );

//   if (isMobile) {
//     return (
//       <Drawer
//         open={isOpen}
//         onClose={onClose}
//         placement="left"
//         width={260}
//         styles={{ body: { padding: 0 } }}
//       >
//         <SidebarContent />
//       </Drawer>
//     );
//   }

//   return <SidebarContent />;
// };

// export default MasterAdminSidebar;


// src/components/MasterAdmin/MasterAdminSidebar.jsx (adjust path as needed)
import React, { useState, useEffect } from "react";
import {
  Layout,
  Menu,
  Avatar,
  Badge,
  Dropdown,
  Space,
  Typography,
  Spin,
  Drawer,
  ConfigProvider,
  Button,
} from "antd";
import {
  HomeOutlined,
  UsergroupAddOutlined,
  VideoCameraOutlined,
  BarChartOutlined,
  SettingOutlined,
  HistoryOutlined,
  CustomerServiceOutlined,
  LogoutOutlined,
  UploadOutlined,
  BookOutlined,
  LockOutlined,
  FolderOutlined,
  CreditCardOutlined,
  BellOutlined,
  BgColorsOutlined,
  FileTextOutlined,
  CheckCircleOutlined,
  UserAddOutlined,
  EditOutlined,
  DeleteOutlined,
  TeamOutlined,
  UserOutlined,
  ProfileOutlined,
  SwapOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthContext";
import { adminTheme, antdThemeConfig } from "./adminTheme";
import { theme as antdTheme } from "antd";

const { Sider } = Layout;
const { Text } = Typography;

// Define all valid routes
const routes = {
  "/master-admin/home": true,
  "/master-admin/enquiries": true,
  "/master-admin/add-student": true,
  "/master-admin/add-teacher": true,
  "/master-admin/add-employee": true,
  "/master-admin/create/user": true,
  "/master-admin/user-management/update": true,
  "/master-admin/user-management/delete": true,
  "/master-admin/user-management/roles": true,
  "/master-admin/user-management/teacher-approvals": true,
  "/master-admin/videos/upload": true,
  "/master-admin/course-control/add-update-remove": true,
  "/master-admin/course-control/restrict-access": true,
  "/master-admin/course-control/video-organization": true,
  "/master-admin/analytics/student-performance": true,
  "/master-admin/analytics/teacher-effectiveness": true,
  "/master-admin/analytics/platform-usage": true,
  "/master-admin/settings/payment-gateway": true,
  "/master-admin/settings/notification-templates": true,
  "/master-admin/settings/platform-preferences": true,
  "/master-admin/audit-logs/view-logs": true,
  "/master-admin/audit-logs/accountability": true,
  "/master-admin/support/manage-requests": true,
};

const MasterAdminSidebar = ({
  isMobile = false,
  isOpen,
  onClose,
  collapsed: externalCollapsed,
  onCollapse: onExternalCollapse,
}) => {
  const [userData, setUserData] = useState(null);
  const [openKeys, setOpenKeys] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Handle collapsed state: controlled (desktop) vs uncontrolled (mobile)
  const isControlled = !isMobile && onExternalCollapse;
  const [internalCollapsed, setInternalCollapsed] = useState(false);

  const collapsed = isControlled ? externalCollapsed : internalCollapsed;
  const setCollapsed = isControlled
    ? (value) => {
        setInternalCollapsed(value);
        onExternalCollapse(value);
      }
    : setInternalCollapsed;

  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useAuth();

  // Auto-expand parent menu based on current route
  useEffect(() => {
    const path = location.pathname;
    const parents = [];
    if (path.includes("/user-management") || path === "/master-admin/create/user" ||
        path === "/master-admin/add-student" || path === "/master-admin/add-teacher" || path === "/master-admin/add-employee")
      parents.push("user-management");
    if (path.includes("/course-control") || path.includes("/videos/upload"))
      parents.push("course-content");
    if (path.includes("/analytics")) parents.push("analytics");
    if (path.includes("/settings")) parents.push("system-settings");
    if (path.includes("/audit-logs")) parents.push("audit-logs");
    if (path.includes("/support")) parents.push("support");
    setOpenKeys(parents);
  }, [location.pathname]);

  // Simulate user data load
  useEffect(() => {
    const timer = setTimeout(() => {
      setUserData({
        name: "Admin User",
        role: "Master Admin",
        avatar: "/api/placeholder/40/40",
        notifications: 2,
      });
      setIsLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleMenuClick = (e) => {
    const { key } = e;
    if (routes[key]) {
      navigate(key);
    }
  };

  const handleOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => !openKeys.includes(key));
    if (openKeys.includes(latestOpenKey)) {
      setOpenKeys([]);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  const profileMenu = {
    items: [
      { key: "profile", label: "Profile Settings" },
      { key: "help", label: "Help Center" },
      { type: "divider" },
      {
        key: "logout",
        label: "Logout",
        icon: <LogoutOutlined />,
        danger: true,
        onClick: handleLogout,
      },
    ],
  };

  const menuItems = [
    { key: "/master-admin/home", icon: <HomeOutlined />, label: "Dashboard" },
    { key: "/master-admin/enquiries", icon: <ProfileOutlined />, label: "Student Enquiries" },
    {
      key: "user-management",
      icon: <UsergroupAddOutlined />,
      label: "User Management",
      children: [
        { key: "/master-admin/create/user", icon: <UserAddOutlined />, label: "Create User" },
        { key: "/master-admin/add-student", icon: <UserOutlined />, label: "Add Student" },
        { key: "/master-admin/add-teacher", icon: <TeamOutlined />, label: "Add Teacher" },
        { key: "/master-admin/add-employee", icon: <UsergroupAddOutlined />, label: "Add Employee" },
        { key: "/master-admin/user-management/update", icon: <EditOutlined />, label: "Update User" },
        { key: "/master-admin/user-management/delete", icon: <DeleteOutlined />, label: "Delete Users" },
        { key: "/master-admin/user-management/roles", icon: <SwapOutlined />, label: "Roles & Permissions" },
        { key: "/master-admin/user-management/teacher-approvals", icon: <TeamOutlined />, label: "Teacher Approvals" },
      ],
    },
    {
      key: "course-content",
      icon: <VideoCameraOutlined />,
      label: "Course & Content",
      children: [
        { key: "/master-admin/videos/upload", icon: <UploadOutlined />, label: "Upload Videos" },
        { key: "/master-admin/course-control/add-update-remove", icon: <BookOutlined />, label: "Manage Courses" },
        { key: "/master-admin/course-control/restrict-access", icon: <LockOutlined />, label: "Restrict Access" },
        { key: "/master-admin/course-control/video-organization", icon: <FolderOutlined />, label: "Video Organization" },
      ],
    },
    {
      key: "analytics",
      icon: <BarChartOutlined />,
      label: "Analytics",
      children: [
        { key: "/master-admin/analytics/student-performance", icon: <UserOutlined />, label: "Student Performance" },
        { key: "/master-admin/analytics/teacher-effectiveness", icon: <TeamOutlined />, label: "Teacher Effectiveness" },
        { key: "/master-admin/analytics/platform-usage", icon: <BarChartOutlined />, label: "Platform Usage" },
      ],
    },
    {
      key: "system-settings",
      icon: <SettingOutlined />,
      label: "System Settings",
      children: [
        { key: "/master-admin/settings/payment-gateway", icon: <CreditCardOutlined />, label: "Payment Gateway" },
        { key: "/master-admin/settings/notification-templates", icon: <BellOutlined />, label: "Notifications" },
        { key: "/master-admin/settings/platform-preferences", icon: <BgColorsOutlined />, label: "Platform Preferences" },
      ],
    },
    {
      key: "audit-logs",
      icon: <HistoryOutlined />,
      label: "Audit Logs",
      children: [
        { key: "/master-admin/audit-logs/view-logs", icon: <FileTextOutlined />, label: "View Logs" },
        { key: "/master-admin/audit-logs/accountability", icon: <CheckCircleOutlined />, label: "Accountability" },
      ],
    },
    {
      key: "support",
      icon: <CustomerServiceOutlined />,
      label: "Support",
      children: [
        { key: "/master-admin/support/manage-requests", icon: <ProfileOutlined />, label: "Manage Requests" },
      ],
    },
  ];

  const sidebarTheme = {
    ...antdThemeConfig,
    algorithm: antdTheme.darkAlgorithm,
    token: {
      ...antdThemeConfig.token,
      colorPrimary: adminTheme.accent,
      colorBgContainer: adminTheme.bgSidebar,
      colorBgElevated: adminTheme.bgCard,
    },
    components: {
      Menu: {
        ...antdThemeConfig.components?.Menu,
        darkItemBg: adminTheme.bgSidebar,
        darkItemSelectedBg: adminTheme.accentDim,
        darkItemHoverBg: adminTheme.greenDark,
        darkItemSelectedColor: adminTheme.accent,
        itemSelectedBg: adminTheme.accentDim,
        itemHoverBg: adminTheme.greenDark,
        itemSelectedColor: adminTheme.accent,
      },
    },
  };

  const SidebarContent = () => (
    <ConfigProvider theme={sidebarTheme}>
      <Sider
        width={260}
        collapsedWidth={64}
        collapsible
        collapsed={collapsed}
        onCollapse={setCollapsed}
        theme="dark"
        style={{
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          background: adminTheme.bgSidebar,
          boxShadow: "2px 0 16px rgba(0,0,0,0.4)",
          zIndex: isMobile ? 1100 : "auto",
        }}
        className="fixed-sider"
      >
        {/* Logo – PREFCOL branding */}
        <div
          style={{
            height: 50,
            display: "flex",
            alignItems: "center",
            justifyContent: collapsed ? "center" : "space-between",
            padding: "0 16px",
            borderBottom: `1px solid ${adminTheme.border}`,
          }}
        >
          {!collapsed && (
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  width: 32,
                  height: 32,
                  background: `linear-gradient(135deg, ${adminTheme.greenMid}, ${adminTheme.accent})`,
                  borderRadius: 6,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: `0 0 12px ${adminTheme.accentGlow}`,
                }}
              >
                <HomeOutlined style={{ color: adminTheme.bgDark, fontSize: 16 }} />
              </div>
              <Text strong style={{ marginLeft: 12, fontSize: 16, color: adminTheme.brand }}>
                PREFCOL
              </Text>
            </div>
          )}
          <Button
            type="text"
            icon={collapsed ? <RightOutlined /> : <LeftOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{ color: adminTheme.accent }}
          />
        </div>

        {/* User Info (only when expanded) */}
        {!collapsed && userData && (
          <div style={{ padding: "12px 16px", borderBottom: `1px solid ${adminTheme.border}` }}>
            <Space size={10}>
              <Badge count={userData.notifications} color={adminTheme.accent}>
                <Avatar src={userData.avatar} size="small" style={{ border: `2px solid ${adminTheme.accent}` }} />
              </Badge>
              <div>
                <Text strong style={{ color: adminTheme.textPrimary }}>{userData.name}</Text>
                <Text style={{ fontSize: 12, color: adminTheme.textSecondary }}>{userData.role}</Text>
              </div>
            </Space>
          </div>
        )}

        {/* Scrollable Menu */}
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            overflowX: "hidden",
            paddingRight: 4,
          }}
          className="sider-menu-scroll"
        >
          {isLoading ? (
            <div style={{ padding: "20px", textAlign: "center" }}>
              <Spin size="small" style={{ color: adminTheme.accent }} />
            </div>
          ) : (
            <Menu
              mode="inline"
              theme="dark"
              selectedKeys={[location.pathname]}
              openKeys={openKeys}
              onOpenChange={handleOpenChange}
              inlineCollapsed={collapsed}
              items={menuItems}
              onClick={handleMenuClick}
              tooltip={collapsed ? { placement: "right" } : null}
              style={{
                background: "transparent",
                color: adminTheme.textSecondary,
              }}
            />
          )}
        </div>

        {/* Footer (only when expanded) */}
        {!collapsed && (
          <div style={{ padding: "12px 16px", borderTop: `1px solid ${adminTheme.border}` }}>
            <Dropdown menu={profileMenu}>
              <div style={{ cursor: "pointer", display: "flex", alignItems: "center" }}>
                <SettingOutlined style={{ color: adminTheme.accent, marginRight: 12 }} />
                <Text style={{ color: adminTheme.textSecondary }}>Account Settings</Text>
              </div>
            </Dropdown>
          </div>
        )}
      </Sider>
    </ConfigProvider>
  );

  if (isMobile) {
    return (
      <Drawer
        open={isOpen}
        onClose={onClose}
        placement="left"
        width={260}
        styles={{ body: { padding: 0 } }}
        zIndex={1200}
      >
        <SidebarContent />
      </Drawer>
    );
  }

  return <SidebarContent />;
};

export default MasterAdminSidebar;