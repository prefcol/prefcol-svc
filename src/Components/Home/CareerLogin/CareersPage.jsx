// import { useState } from "react"
// import { motion } from "framer-motion"
// import {
//   Box,
//   Button,
//   Container,
//   Flex,
//   Heading,
//   Text,
//   VStack,
//   HStack,
//   useToast,
//   Icon,
//   SimpleGrid,
//   useColorModeValue,
//   Badge,
//   Avatar,
//   Tooltip,
//   Tabs,
//   TabList,
//   TabPanels,
//   Tab,
//   TabPanel,
//   useDisclosure,
//   Stat,
// } from "@chakra-ui/react"
// import {
//   FiBriefcase,
//   FiAward,
//   FiDollarSign,
//   FiClock,
//   FiCalendar,
//   FiStar,
//   FiTrendingUp,
//   FiCoffee,
//   FiHeart,
//   FiUsers,
//   FiBook,
//   FiGlobe,
//   FiShield,
//   FiArrowRight,
// } from "react-icons/fi"
// // import JoinOurTeam from "../../../assets/join-our-team.jpg"
// import ApplicationForm from "./ApplicationForm"
// import MultiStepForm from "./ApplicationForm"



// const JobListing = ({ title, department, location, type, onApply }) => (
//   <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
//     <Box
//       borderWidth={1}
//       borderRadius="lg"
//       p={{ base: 4, md: 6 }}
//       mb={4}
//       bg={useColorModeValue("white", "gray.800")}
//       boxShadow="md"
//       _hover={{ boxShadow: "lg", borderColor: "teal.900" }}
//       transition="all 0.3s"
//     >
//       <Heading size={{ base: "sm", md: "md" }} mb={2}>
//         {title}
//       </Heading>
//       <Text fontSize={{ base: "xs", md: "sm" }} color="gray.600" mb={3}>
//         {department} • {location}
//       </Text>
//       <Flex alignItems="center" justifyContent="space-between" flexWrap="wrap" gap={2}>
//         <HStack spacing={2} mb={{ base: 2, md: 0 }}>
//           <Badge colorScheme="orange">{type}</Badge>
//           <Tooltip label="Apply before the deadline" aria-label="Application deadline">
//             <HStack>
//               <Icon as={FiCalendar} color="gray.500" />
//               <Text fontSize={{ base: "2xs", md: "xs" }}>2 weeks left</Text>
//             </HStack>
//           </Tooltip>
//         </HStack>
//         <Button
//           size={{ base: "xs", md: "sm" }}
//           color={"white"}
//           bg={"teal.900"}
//           onClick={onApply}
//           rightIcon={<FiArrowRight />}
//           _hover={{ transform: "translateY(-2px)", boxShadow: "md" }}
//           transition="all 0.3s"
//         >
//           View & Apply
//         </Button>
//       </Flex>
//     </Box>
//   </motion.div>
// )

// const EmployeeTestimonial = ({ name, role, testimonial, avatar }) => (
//   <motion.div
//     initial={{ opacity: 0, scale: 0.9 }}
//     animate={{ opacity: 1, scale: 1 }}
//     transition={{ duration: 0.5 }}
//     whileHover={{ scale: 1.02 }}
//   >
//     <Box
//       borderWidth={1}
//       borderRadius="lg"
//       p={{ base: 4, md: 6 }}
//       bg={useColorModeValue("white", "gray.800")}
//       boxShadow="md"
//       _hover={{ boxShadow: "lg" }}
//       transition="all 0.3s"
//       height="100%"
//       maxWidth="100%"
//       overflow="hidden"
//     >
//       <Flex direction="column" align="center" textAlign="center" height="100%">
//         <Avatar size={{ base: "lg", md: "xl" }} name={name} src={avatar} mb={4} />
//         <Text fontWeight="bold" fontSize={{ base: "md", md: "lg" }}>
//           {name}
//         </Text>
//         <Text fontSize={{ base: "xs", md: "sm" }} color="gray.500" mb={4}>
//           {role}
//         </Text>
//         <Text fontSize={{ base: "xs", md: "sm" }} fontStyle="italic" flex={1}>
//           "{testimonial}"
//         </Text>
//       </Flex>
//     </Box>
//   </motion.div>
// )

// const CompanyStats = () => (
//   <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={{ base: 6, md: 8 }} mb={10}>
//     <Stat
//       bg={useColorModeValue("white", "gray.800")}
//       p={{ base: 6, md: 8 }}
//       borderRadius="xl"
//       boxShadow="lg"
//       _hover={{
//         transform: "scale(1.05)",
//         boxShadow: "2xl",
//         transition: "all 0.3s ease-in-out",
//       }}
//       transition="all 0.3s ease-in-out"
//     >
//       <Text fontSize={{ base: "md", md: "lg" }} fontWeight="bold" color={useColorModeValue("gray.800", "white")}>
//         Employees
//       </Text>
//       <Text
//         fontSize={{ base: "3xl", md: "4xl" }}
//         fontWeight="extrabold"
//         color={useColorModeValue("teal.600", "teal.300")}
//       >
//         50+
//       </Text>
//       <HStack fontSize={{ base: "sm", md: "md" }} color={useColorModeValue("gray.500", "gray.400")}>
//         <Icon as={FiTrendingUp} color="teal.500" />
//         <Text>20% growth</Text>
//       </HStack>
//     </Stat>

//     <Stat
//       bg={useColorModeValue("white", "gray.800")}
//       p={{ base: 6, md: 8 }}
//       borderRadius="xl"
//       boxShadow="lg"
//       _hover={{
//         transform: "scale(1.05)",
//         boxShadow: "2xl",
//         transition: "all 0.3s ease-in-out",
//       }}
//       transition="all 0.3s ease-in-out"
//     >
//       <Text fontSize={{ base: "md", md: "lg" }} fontWeight="bold" color={useColorModeValue("gray.800", "white")}>
//         Projects Completed
//       </Text>
//       <Text
//         fontSize={{ base: "3xl", md: "4xl" }}
//         fontWeight="extrabold"
//         color={useColorModeValue("teal.600", "teal.300")}
//       >
//         100+
//       </Text>
//       <Text fontSize={{ base: "sm", md: "md" }} color={useColorModeValue("gray.500", "gray.400")}>
//         Last year
//       </Text>
//     </Stat>

//     <Stat
//       bg={useColorModeValue("white", "gray.800")}
//       p={{ base: 6, md: 8 }}
//       borderRadius="xl"
//       boxShadow="lg"
//       _hover={{
//         transform: "scale(1.05)",
//         boxShadow: "2xl",
//         transition: "all 0.3s ease-in-out",
//       }}
//       transition="all 0.3s ease-in-out"
//     >
//       <Text fontSize={{ base: "md", md: "lg" }} fontWeight="bold" color={useColorModeValue("gray.800", "white")}>
//         Client Satisfaction
//       </Text>
//       <Text
//         fontSize={{ base: "3xl", md: "4xl" }}
//         fontWeight="extrabold"
//         color={useColorModeValue("teal.600", "teal.300")}
//       >
//         98%
//       </Text>
//       <HStack fontSize={{ base: "sm", md: "md" }} color={useColorModeValue("gray.500", "gray.400")}>
//         <Icon as={FiStar} color="yellow.500" />
//         <Text>Top rated</Text>
//       </HStack>
//     </Stat>

//     <Stat
//       bg={useColorModeValue("white", "gray.800")}
//       p={{ base: 6, md: 8 }}
//       borderRadius="xl"
//       boxShadow="lg"
//       _hover={{
//         transform: "scale(1.05)",
//         boxShadow: "2xl",
//         transition: "all 0.3s ease-in-out",
//       }}
//       transition="all 0.3s ease-in-out"
//     >
//       <Text fontSize={{ base: "md", md: "lg" }} fontWeight="bold" color={useColorModeValue("gray.800", "white")}>
//         Global Presence
//       </Text>
//       <Text
//         fontSize={{ base: "3xl", md: "4xl" }}
//         fontWeight="extrabold"
//         color={useColorModeValue("teal.600", "teal.300")}
//       >
//         10+
//       </Text>
//       <Text fontSize={{ base: "sm", md: "md" }} color={useColorModeValue("gray.500", "gray.400")}>
//         Countries
//       </Text>
//     </Stat>
//   </SimpleGrid>
// )

// const CareersPage = () => {
//   const [selectedJob, setSelectedJob] = useState(null)
//   const toast = useToast()
//   const { isOpen, onOpen, onClose } = useDisclosure()
//   const bgColor = useColorModeValue("gray.50", "gray.900")

//   const jobListings = [
//     {
//       title: "Senior Software Engineer",
//       department: "Engineering",
//       location: "Chennai",
//       type: "Full-time",
//     },
//     // {
//     //   title: "Product Manager",
//     //   department: "Product",
//     //   location: "Chennai",
//     //   type: "Full-time",
//     // },
//     // {
//     //   title: "UX Designer",
//     //   department: "Design",
//     //   location: "Chennai",
//     //   type: "Contract",
//     // },
//   ]

//   const testimonials = [
//     {
//       name: "Lokesh",
//       role: "Senior Developer",
//       testimonial:
//         "Working here has been an incredible journey of growth and innovation. The challenges we tackle daily keep me motivated and excited about my work.",
//       avatar: "/placeholder.svg?height=100&width=100",
//     },
//     {
//       name: "Kishore",
//       role: "Product Manager",
//       testimonial:
//         "The collaborative environment here is unparalleled. I love coming to work every day and being part of a team that's truly making a difference in our industry.",
//       avatar: "/placeholder.svg?height=100&width=100",
//     },
//     {
//       name: "Chandru",
//       role: "UX Designer",
//       testimonial:
//         "I've never felt more valued and supported in my career than I do here. The emphasis on work-life balance and professional development is refreshing.",
//       avatar: "/placeholder.svg?height=100&width=100",
//     },
//   ]

//   const handleApply = (job) => {
//     setSelectedJob(job)
//     onOpen()
//   }

//   const handleFormSubmit = (formData) => {
   
//     console.log("Form submitted:", formData)
//     onClose()
//     toast({
//       title: "Application submitted successfully!",
//       status: "success",
//       duration: 5000,
//       isClosable: true,
//     })
//   }

//   return (
//     <Box bg={bgColor} minHeight="100vh">
//       {/* Hero Section */}
//       <Box
//         // bgImage={JoinOurTeam}
//         bgPosition="center"
//         bgRepeat="no-repeat"
//         bgSize="cover"
//         height={{ base: "350px", sm: "450px", md: "550px" }}
//         position="relative"
//       >
//         <Box
//           position="absolute"
//           top="0"
//           left="0"
//           width="100%"
//           height="100%"
//           bg="rgba(0, 0, 0, 0.14)"
//           display="flex"
//           alignItems="center"
//           justifyContent="center"
//           px={{ base: 4, md: 0 }}
//         >
//           <VStack
//             spacing={{ base: 3, md: 6 }}
//             maxWidth="800px"
//             textAlign="center"
//             className="relative bg-white/10 backdrop-blur-md p-4 rounded-lg"
//           >
//             <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
//               <Heading
//                 as="h1"
//                 size={{ base: "xl", sm: "2xl", md: "3xl" }}
//                 color="orange.700"
//                 textAlign="center"
//                 marginTop={16}
//               >
//                 Join Our Team
//               </Heading>
//             </motion.div>
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//             >
//               <Text fontSize={{ base: "md", sm: "lg", md: "xl" }} color="orange.700" textAlign="center" maxWidth="600px">
//                 Be part of something extraordinary. Shape the future with us and make a lasting impact in the world of
//                 technology.
//               </Text>
//             </motion.div>
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.4 }}
//             >
              
//             </motion.div>
//           </VStack>
//         </Box>
//       </Box>

//       {/* Main Content */}
//       <Container maxW="container.xl" py={{ base: 10, md: 20 }} px={{ base: 4, md: 6 }}>
//         <VStack spacing={{ base: 10, md: 16 }}>
//           <CompanyStats />
//           <Tabs isFitted variant="enclosed" width="100%">
//   <TabList
//     mb="1em"
//     flexWrap="wrap"
//     css={{
//       scrollbarWidth: "none",
//       "&::-webkit-scrollbar": { display: "none" },
//       "-ms-overflow-style": "none",
//     }}
//   >
//     {["Open Positions", "Why Join Us", "Employee Stories"].map((label, index) => (
//       <Tab
//         key={index}
//         py={{ base: 1, md: 3 }}
//         px={{ base: 3, md: 6 }}
//         fontSize={{ base: "sm", md: "lg" }}
//         fontWeight="semibold"
//         borderRadius="full"
//         _selected={{ color: "white", bg: "teal.900", boxShadow: "md" }}
//         _hover={{ bg: "gray.200", color: "black" }}
//         height="8"
//         transition="all 0.3s ease"
//         whiteSpace="nowrap"
//       >
//         {label}
//       </Tab>
//     ))}
//   </TabList>

//   <TabPanels>
//     {/* Open Positions Panel */}
//     <TabPanel>
//       <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={{ base: 4, md: 8 }}>
//         {jobListings.map((job, index) => (
//           <JobListing key={index} {...job} onApply={() => handleApply(job)} />
//         ))}
//       </SimpleGrid>
//     </TabPanel>

//     {/* Why Join Us Panel */}
//     <TabPanel>
//       <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={{ base: 4, md: 8 }}>
//         <Box>
//           <Heading as="h3" size={{ base: "md", md: "lg" }} mb={4}>
//             Our Culture
//           </Heading>
//           <VStack align="start" spacing={3}>
//             {[
//               { icon: FiHeart, text: "Passionate about innovation", color: "red.500" },
//               { icon: FiUsers, text: "Collaborative and inclusive environment", color: "blue.500" },
//               { icon: FiTrendingUp, text: "Continuous learning and growth", color: "green.500" },
//               { icon: FiCoffee, text: "Work-life balance", color: "orange.500" },
//             ].map(({ icon, text, color }, index) => (
//               <HStack key={index}>
//                 <Icon as={icon} color={color} />
//                 <Text fontSize={{ base: "sm", md: "md" }}>{text}</Text>
//               </HStack>
//             ))}
//           </VStack>
//         </Box>
//         <Box>
//           <Heading as="h3" size={{ base: "md", md: "lg" }} mb={4}>
//             Benefits
//           </Heading>
//           <SimpleGrid columns={2} spacing={4}>
//             {[
//               { icon: FiDollarSign, text: "Competitive salary", color: "green.500" },
//               { icon: FiAward, text: "Performance bonuses", color: "purple.500" },
//               { icon: FiClock, text: "Flexible hours", color: "blue.500" },
//               { icon: FiBriefcase, text: "Remote work options", color: "red.500" },
//               { icon: FiHeart, text: "Health insurance", color: "pink.500" },
//               { icon: FiCalendar, text: "Paid time off", color: "orange.500" },
//             ].map(({ icon, text, color }, index) => (
//               <VStack key={index} align="start">
//                 <HStack>
//                   <Icon as={icon} color={color} />
//                   <Text fontSize={{ base: "sm", md: "md" }}>{text}</Text>
//                 </HStack>
//               </VStack>
//             ))}
//           </SimpleGrid>
//         </Box>
//       </SimpleGrid>
//     </TabPanel>

//     {/* Employee Stories Panel */}
//     <TabPanel>
//       <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={{ base: 4, md: 8 }}>
//         {testimonials.map((testimonial, index) => (
//           <EmployeeTestimonial key={index} {...testimonial} />
//         ))}
//       </SimpleGrid>
//     </TabPanel>
//   </TabPanels>
// </Tabs>


//           <Box width="100%">
//             <Heading as="h2" size="xl" mb={6} textAlign="center">
//               Learning & Development
//             </Heading>
//             <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={{ base: 6, md: 10 }}>
//               <Box
//                 borderWidth={1}
//                 borderRadius="lg"
//                 p={{ base: 4, md: 6 }}
//                 bg={useColorModeValue("white", "gray.800")}
//                 boxShadow="md"
//                 _hover={{ boxShadow: "lg" }}
//                 transition="all 0.3s"
//               >
//                 <Icon as={FiBook} boxSize={{ base: 8, md: 10 }} color="teal.900" mb={4} />
//                 <Heading size={{ base: "sm", md: "md" }} mb={2}>
//                   Training Programs
//                 </Heading>
//                 <Text fontSize={{ base: "sm", md: "md" }}>
//                   Access to a wide range of internal and external training programs to enhance your skills.
//                 </Text>
//               </Box>
//               <Box
//                 borderWidth={1}
//                 borderRadius="lg"
//                 p={{ base: 4, md: 6 }}
//                 bg={useColorModeValue("white", "gray.800")}
//                 boxShadow="md"
//                 _hover={{ boxShadow: "lg" }}
//                 transition="all 0.3s"
//               >
//                 <Icon as={FiGlobe} boxSize={{ base: 8, md: 10 }} color="teal.900" mb={4} />
//                 <Heading size={{ base: "sm", md: "md" }} mb={2}>
//                   Conference Attendance
//                 </Heading>
//                 <Text fontSize={{ base: "sm", md: "md" }}>
//                   Opportunities to attend industry-leading conferences and networking events.
//                 </Text>
//               </Box>
//               <Box
//                 borderWidth={1}
//                 borderRadius="lg"
//                 p={{ base: 4, md: 6 }}
//                 bg={useColorModeValue("white", "gray.800")}
//                 boxShadow="md"
//                 _hover={{ boxShadow: "lg" }}
//                 transition="all 0.3s"
//               >
//                 <Icon as={FiShield} boxSize={{ base: 8, md: 10 }} color="teal.900" mb={4} />
//                 <Heading size={{ base: "sm", md: "md" }} mb={2}>
//                   Mentorship
//                 </Heading>
//                 <Text fontSize={{ base: "sm", md: "md" }}>
//                   One-on-one mentorship programs to guide your career growth and development.
//                 </Text>
//               </Box>
//             </SimpleGrid>
//           </Box>
//         </VStack>
//       </Container>

//       {/* Application Form Modal */}
//       {isOpen && (
//         <MultiStepForm
          
//           isOpen={isOpen}
//           onClose={onClose}
//           selectedJob={selectedJob}
//           onSubmit={handleFormSubmit}
//         />
//       )}
         
//           </Box>
//   )
// }

// export default CareersPage
  
// import { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   Box,
//   Button,
//   Container,
//   Flex,
//   Heading,
//   Text,
//   VStack,
//   HStack,
//   useToast,
//   Icon,
//   SimpleGrid,
//   useColorModeValue,
//   Badge,
//   Avatar,
//   Tooltip,
//   Tabs,
//   TabList,
//   TabPanels,
//   Tab,
//   TabPanel,
//   useDisclosure,
//   Stat,
// } from "@chakra-ui/react";
// import {
//   FiBriefcase,
//   FiAward,
//   FiDollarSign,
//   FiClock,
//   FiCalendar,
//   FiStar,
//   FiTrendingUp,
//   FiCoffee,
//   FiHeart,
//   FiUsers,
//   FiBook,
//   FiGlobe,
//   FiShield,
//   FiArrowRight,
// } from "react-icons/fi";

// // Import only once
// import ApplicationForm from "./ApplicationForm";

// // ===========================
// // Memoized JobListing
// // ===========================
// const JobListing = ({ title, department, location, type, onApply }) => {
//   const hoverBg = useColorModeValue("teal.900", "teal.700");
//   const borderColor = useColorModeValue("gray.200", "gray.600");

//   return (
//     <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
//       <Box
//         borderWidth={1}
//         borderRadius="lg"
//         p={{ base: 4, md: 6 }}
//         mb={4}
//         bg={useColorModeValue("white", "gray.800")}
//         boxShadow="md"
//         _hover={{ boxShadow: "lg", borderColor: hoverBg }}
//         transition="all 0.3s"
//         borderColor={borderColor}
//       >
//         <Heading size={{ base: "sm", md: "md" }} mb={2}>
//           {title}
//         </Heading>
//         <Text fontSize={{ base: "xs", md: "sm" }} color="gray.600" mb={3}>
//           {department} • {location}
//         </Text>
//         <Flex alignItems="center" justifyContent="space-between" flexWrap="wrap" gap={2}>
//           <HStack spacing={2} mb={{ base: 2, md: 0 }}>
//             <Badge colorScheme="orange">{type}</Badge>
//             <Tooltip label="Apply before the deadline" aria-label="Application deadline">
//               <HStack>
//                 <Icon as={FiCalendar} color="gray.500" />
//                 <Text fontSize={{ base: "2xs", md: "xs" }}>2 weeks left</Text>
//               </HStack>
//             </Tooltip>
//           </HStack>
//           <Button
//             size={{ base: "xs", md: "sm" }}
//             color="white"
//             bg="teal.900"
//             onClick={onApply}
//             rightIcon={<FiArrowRight />}
//             _hover={{ transform: "translateY(-2px)", boxShadow: "md" }}
//             transition="all 0.3s"
//           >
//             View & Apply
//           </Button>
//         </Flex>
//       </Box>
//     </motion.div>
//   );
// };

// // ===========================
// // Memoized EmployeeTestimonial
// // ===========================
// const EmployeeTestimonial = ({ name, role, testimonial, avatar }) => {
//   const bg = useColorModeValue("white", "gray.800");
//   const borderColor = useColorModeValue("gray.200", "gray.600");

//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.9 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 0.5 }}
//       whileHover={{ scale: 1.02 }}
//     >
//       <Box
//         borderWidth={1}
//         borderRadius="lg"
//         p={{ base: 4, md: 6 }}
//         bg={bg}
//         boxShadow="md"
//         _hover={{ boxShadow: "lg" }}
//         transition="all 0.3s"
//         height="100%"
//         borderColor={borderColor}
//       >
//         <Flex direction="column" align="center" textAlign="center" height="100%">
//           <Avatar size={{ base: "lg", md: "xl" }} name={name} src={avatar} mb={4} />
//           <Text fontWeight="bold" fontSize={{ base: "md", md: "lg" }}>
//             {name}
//           </Text>
//           <Text fontSize={{ base: "xs", md: "sm" }} color="gray.500" mb={4}>
//             {role}
//           </Text>
//           <Text fontSize={{ base: "xs", md: "sm" }} fontStyle="italic" flex={1}>
//             "{testimonial}"
//           </Text>
//         </Flex>
//       </Box>
//     </motion.div>
//   );
// };

// // ===========================
// // Memoized CompanyStats
// // ===========================
// const CompanyStats = () => {
//   const bg = useColorModeValue("white", "gray.800");
//   const borderColor = useColorModeValue("gray.200", "gray.600");

//   return (
//     <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={{ base: 6, md: 8 }} mb={10}>
//       <Stat
//         bg={bg}
//         p={{ base: 6, md: 8 }}
//         borderRadius="xl"
//         boxShadow="lg"
//         _hover={{ transform: "scale(1.05)", boxShadow: "2xl" }}
//         transition="all 0.3s ease-in-out"
//         borderWidth={1}
//         borderColor={borderColor}
//       >
//         <Text fontSize={{ base: "md", md: "lg" }} fontWeight="bold" color={useColorModeValue("gray.800", "white")}>
//           Employees
//         </Text>
//         <Text
//           fontSize={{ base: "3xl", md: "4xl" }}
//           fontWeight="extrabold"
//           color={useColorModeValue("teal.600", "teal.300")}
//         >
//           50+
//         </Text>
//         <HStack fontSize={{ base: "sm", md: "md" }} color={useColorModeValue("gray.500", "gray.400")}>
//           <Icon as={FiTrendingUp} color="teal.500" />
//           <Text>20% growth</Text>
//         </HStack>
//       </Stat>

//       <Stat
//         bg={bg}
//         p={{ base: 6, md: 8 }}
//         borderRadius="xl"
//         boxShadow="lg"
//         _hover={{ transform: "scale(1.05)", boxShadow: "2xl" }}
//         transition="all 0.3s ease-in-out"
//         borderWidth={1}
//         borderColor={borderColor}
//       >
//         <Text fontSize={{ base: "md", md: "lg" }} fontWeight="bold" color={useColorModeValue("gray.800", "white")}>
//           Projects Completed
//         </Text>
//         <Text
//           fontSize={{ base: "3xl", md: "4xl" }}
//           fontWeight="extrabold"
//           color={useColorModeValue("teal.600", "teal.300")}
//         >
//           100+
//         </Text>
//         <Text fontSize={{ base: "sm", md: "md" }} color={useColorModeValue("gray.500", "gray.400")}>
//           Last year
//         </Text>
//       </Stat>

//       <Stat
//         bg={bg}
//         p={{ base: 6, md: 8 }}
//         borderRadius="xl"
//         boxShadow="lg"
//         _hover={{ transform: "scale(1.05)", boxShadow: "2xl" }}
//         transition="all 0.3s ease-in-out"
//         borderWidth={1}
//         borderColor={borderColor}
//       >
//         <Text fontSize={{ base: "md", md: "lg" }} fontWeight="bold" color={useColorModeValue("gray.800", "white")}>
//           Client Satisfaction
//         </Text>
//         <Text
//           fontSize={{ base: "3xl", md: "4xl" }}
//           fontWeight="extrabold"
//           color={useColorModeValue("teal.600", "teal.300")}
//         >
//           98%
//         </Text>
//         <HStack fontSize={{ base: "sm", md: "md" }} color={useColorModeValue("gray.500", "gray.400")}>
//           <Icon as={FiStar} color="yellow.500" />
//           <Text>Top rated</Text>
//         </HStack>
//       </Stat>

//       <Stat
//         bg={bg}
//         p={{ base: 6, md: 8 }}
//         borderRadius="xl"
//         boxShadow="lg"
//         _hover={{ transform: "scale(1.05)", boxShadow: "2xl" }}
//         transition="all 0.3s ease-in-out"
//         borderWidth={1}
//         borderColor={borderColor}
//       >
//         <Text fontSize={{ base: "md", md: "lg" }} fontWeight="bold" color={useColorModeValue("gray.800", "white")}>
//           Global Presence
//         </Text>
//         <Text
//           fontSize={{ base: "3xl", md: "4xl" }}
//           fontWeight="extrabold"
//           color={useColorModeValue("teal.600", "teal.300")}
//         >
//           10+
//         </Text>
//         <Text fontSize={{ base: "sm", md: "md" }} color={useColorModeValue("gray.500", "gray.400")}>
//           Countries
//         </Text>
//       </Stat>
//     </SimpleGrid>
//   );
// };

// // ===========================
// // Main CareersPage Component
// // ===========================
// const CareersPage = () => {
//   const [selectedJob, setSelectedJob] = useState(null);
//   const toast = useToast();
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const bgColor = useColorModeValue("gray.50", "gray.900");

//   // Job listings
//   const jobListings = [
//     {
//       title: "Senior Software Engineer",
//       department: "Engineering",
//       location: "Chennai",
//       type: "Full-time",
//     },
//     // Add more jobs as needed
//   ];

//   // Employee testimonials
//   const testimonials = [
//     {
//       name: "Lokesh",
//       role: "Senior Developer",
//       testimonial:
//         "Working here has been an incredible journey of growth and innovation. The challenges we tackle daily keep me motivated and excited about my work.",
//       avatar: "/placeholder.svg?height=100&width=100",
//     },
//     {
//       name: "Kishore",
//       role: "Product Manager",
//       testimonial:
//         "The collaborative environment here is unparalleled. I love coming to work every day and being part of a team that's truly making a difference in our industry.",
//       avatar: "/placeholder.svg?height=100&width=100",
//     },
//     {
//       name: "Chandru",
//       role: "UX Designer",
//       testimonial:
//         "I've never felt more valued and supported in my career than I do here. The emphasis on work-life balance and professional development is refreshing.",
//       avatar: "/placeholder.svg?height=100&width=100",
//     },
//   ];

//   // Handle job apply click
//   const handleApply = (job) => {
//     setSelectedJob(job);
//     onOpen();
//   };

//   // Handle form submission
//   const handleFormSubmit = (formData) => {
//     console.log("Form submitted:", formData);
//     onClose();
//     toast({
//       title: "Application submitted successfully!",
//       status: "success",
//       duration: 5000,
//       isClosable: true,
//     });
//   };

//   return (
//     <Box bg={bgColor} minHeight="100vh">
//       {/* Hero Section */}
//       <Box
//         bgPosition="center"
//         bgRepeat="no-repeat"
//         bgSize="cover"
//         height={{ base: "350px", sm: "450px", md: "550px" }}
//         position="relative"
//       >
//         <Box
//           position="absolute"
//           top="0"
//           left="0"
//           width="100%"
//           height="100%"
//           bg="rgba(0, 0, 0, 0.14)"
//           display="flex"
//           alignItems="center"
//           justifyContent="center"
//           px={{ base: 4, md: 0 }}
//         >
//           <VStack
//             spacing={{ base: 3, md: 6 }}
//             maxWidth="800px"
//             textAlign="center"
//             className="relative bg-white/10 backdrop-blur-md p-4 rounded-lg"
//           >
//             <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
//               <Heading
//                 as="h1"
//                 size={{ base: "xl", sm: "2xl", md: "3xl" }}
//                 color="orange.700"
//                 textAlign="center"
//                 marginTop={16}
//               >
//                 Join Our Team
//               </Heading>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//             >
//               <Text
//                 fontSize={{ base: "md", sm: "lg", md: "xl" }}
//                 color="orange.700"
//                 textAlign="center"
//                 maxWidth="600px"
//               >
//                 Be part of something extraordinary. Shape the future with us and make a lasting impact in the world of
//                 technology.
//               </Text>
//             </motion.div>

//             {/* Optional CTA Button */}
//             {/* <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.4 }}
//             >
//               <Button
//                 colorScheme="orange"
//                 size="lg"
//                 onClick={() => document.getElementById("open-positions").scrollIntoView({ behavior: 'smooth' })}
//               >
//                 View Openings
//               </Button>
//             </motion.div> */}
//           </VStack>
//         </Box>
//       </Box>

//       {/* Main Content */}
//       <Container maxW="container.xl" py={{ base: 10, md: 20 }} px={{ base: 4, md: 6 }}>
//         <VStack spacing={{ base: 10, md: 16 }} id="open-positions">
//           <CompanyStats />

//           <Tabs isFitted variant="enclosed" width="100%">
//             <TabList
//               mb="1em"
//               flexWrap="wrap"
//               css={{
//                 scrollbarWidth: "none",
//                 "&::-webkit-scrollbar": { display: "none" },
//                 "-ms-overflow-style": "none",
//               }}
//             >
//               {["Open Positions", "Why Join Us", "Employee Stories"].map((label, index) => (
//                 <Tab
//                   key={index}
//                   py={{ base: 1, md: 3 }}
//                   px={{ base: 3, md: 6 }}
//                   fontSize={{ base: "sm", md: "lg" }}
//                   fontWeight="semibold"
//                   borderRadius="full"
//                   _selected={{ color: "white", bg: "teal.900", boxShadow: "md" }}
//                   _hover={{ bg: "gray.200", color: "black" }}
//                   height="8"
//                   transition="all 0.3s ease"
//                   whiteSpace="nowrap"
//                 >
//                   {label}
//                 </Tab>
//               ))}
//             </TabList>

//             <TabPanels>
//               {/* Open Positions Panel */}
//               <TabPanel>
//                 <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={{ base: 4, md: 8 }}>
//                   {jobListings.map((job, index) => (
//                     <JobListing key={index} {...job} onApply={() => handleApply(job)} />
//                   ))}
//                 </SimpleGrid>
//               </TabPanel>

//               {/* Why Join Us Panel */}
//               <TabPanel>
//                 <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={{ base: 4, md: 8 }}>
//                   <Box>
//                     <Heading as="h3" size={{ base: "md", md: "lg" }} mb={4}>
//                       Our Culture
//                     </Heading>
//                     <VStack align="start" spacing={3}>
//                       {[
//                         { icon: FiHeart, text: "Passionate about innovation", color: "red.500" },
//                         { icon: FiUsers, text: "Collaborative and inclusive environment", color: "blue.500" },
//                         { icon: FiTrendingUp, text: "Continuous learning and growth", color: "green.500" },
//                         { icon: FiCoffee, text: "Work-life balance", color: "orange.500" },
//                       ].map((item, idx) => (
//                         <HStack key={idx}>
//                           <Icon as={item.icon} color={item.color} />
//                           <Text fontSize={{ base: "sm", md: "md" }}>{item.text}</Text>
//                         </HStack>
//                       ))}
//                     </VStack>
//                   </Box>

//                   <Box>
//                     <Heading as="h3" size={{ base: "md", md: "lg" }} mb={4}>
//                       Benefits
//                     </Heading>
//                     <SimpleGrid columns={2} spacing={4}>
//                       {[
//                         { icon: FiDollarSign, text: "Competitive salary", color: "green.500" },
//                         { icon: FiAward, text: "Performance bonuses", color: "purple.500" },
//                         { icon: FiClock, text: "Flexible hours", color: "blue.500" },
//                         { icon: FiBriefcase, text: "Remote work options", color: "red.500" },
//                         { icon: FiHeart, text: "Health insurance", color: "pink.500" },
//                         { icon: FiCalendar, text: "Paid time off", color: "orange.500" },
//                       ].map((item, idx) => (
//                         <VStack key={idx} align="start">
//                           <HStack>
//                             <Icon as={item.icon} color={item.color} />
//                             <Text fontSize={{ base: "sm", md: "md" }}>{item.text}</Text>
//                           </HStack>
//                         </VStack>
//                       ))}
//                     </SimpleGrid>
//                   </Box>
//                 </SimpleGrid>
//               </TabPanel>

//               {/* Employee Stories Panel */}
//               <TabPanel>
//                 <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={{ base: 4, md: 8 }}>
//                   {testimonials.map((testimonial, index) => (
//                     <EmployeeTestimonial key={index} {...testimonial} />
//                   ))}
//                 </SimpleGrid>
//               </TabPanel>
//             </TabPanels>
//           </Tabs>

//           {/* Learning & Development Section */}
//           <Box width="100%">
//             <Heading as="h2" size="xl" mb={6} textAlign="center">
//               Learning & Development
//             </Heading>
//             <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={{ base: 6, md: 10 }}>
//               <Box
//                 borderWidth={1}
//                 borderRadius="lg"
//                 p={{ base: 4, md: 6 }}
//                 bg={useColorModeValue("white", "gray.800")}
//                 boxShadow="md"
//                 _hover={{ boxShadow: "lg" }}
//                 transition="all 0.3s"
//                 borderColor={useColorModeValue("gray.200", "gray.600")}
//               >
//                 <Icon as={FiBook} boxSize={{ base: 8, md: 10 }} color="teal.900" mb={4} />
//                 <Heading size={{ base: "sm", md: "md" }} mb={2}>
//                   Training Programs
//                 </Heading>
//                 <Text fontSize={{ base: "sm", md: "md" }}>
//                   Access to a wide range of internal and external training programs to enhance your skills.
//                 </Text>
//               </Box>

//               <Box
//                 borderWidth={1}
//                 borderRadius="lg"
//                 p={{ base: 4, md: 6 }}
//                 bg={useColorModeValue("white", "gray.800")}
//                 boxShadow="md"
//                 _hover={{ boxShadow: "lg" }}
//                 transition="all 0.3s"
//                 borderColor={useColorModeValue("gray.200", "gray.600")}
//               >
//                 <Icon as={FiGlobe} boxSize={{ base: 8, md: 10 }} color="teal.900" mb={4} />
//                 <Heading size={{ base: "sm", md: "md" }} mb={2}>
//                   Conference Attendance
//                 </Heading>
//                 <Text fontSize={{ base: "sm", md: "md" }}>
//                   Opportunities to attend industry-leading conferences and networking events.
//                 </Text>
//               </Box>

//               <Box
//                 borderWidth={1}
//                 borderRadius="lg"
//                 p={{ base: 4, md: 6 }}
//                 bg={useColorModeValue("white", "gray.800")}
//                 boxShadow="md"
//                 _hover={{ boxShadow: "lg" }}
//                 transition="all 0.3s"
//                 borderColor={useColorModeValue("gray.200", "gray.600")}
//               >
//                 <Icon as={FiShield} boxSize={{ base: 8, md: 10 }} color="teal.900" mb={4} />
//                 <Heading size={{ base: "sm", md: "md" }} mb={2}>
//                   Mentorship
//                 </Heading>
//                 <Text fontSize={{ base: "sm", md: "md" }}>
//                   One-on-one mentorship programs to guide your career growth and development.
//                 </Text>
//               </Box>
//             </SimpleGrid>
//           </Box>
//         </VStack>
//       </Container>

//       {/* Application Form Modal */}
//       {isOpen && (
//         <ApplicationForm
//           isOpen={isOpen}
//           onClose={onClose}
//           selectedJob={selectedJob}
//           onSubmit={handleFormSubmit}
//         />
//       )}
//     </Box>
//   );
// };

// export default CareersPage;

// src/pages/CareersPage.js

// import { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   Box,
//   Button,
//   Container,
//   Flex,
//   Heading,
//   Text,
//   VStack,
//   HStack,
//   useToast,
//   Icon,
//   SimpleGrid,
//   useColorModeValue,
//   Badge,
//   Avatar,
//   Tooltip,
//   Tabs,
//   TabList,
//   TabPanels,
//   Tab,
//   TabPanel,
//   useDisclosure,
//   Stat,
// } from "@chakra-ui/react";
// import {
//   FiBriefcase,
//   FiAward,
//   FiDollarSign,
//   FiClock,
//   FiCalendar,
//   FiStar,
//   FiTrendingUp,
//   FiCoffee,
//   FiHeart,
//   FiUsers,
//   FiBook,
//   FiGlobe,
//   FiShield,
//   FiArrowRight,
// } from "react-icons/fi";

// // ✅ Import only once
// import ApplicationForm from "./ApplicationForm";

// const JobListing = ({ title, department, location, type, onApply }) => (
//   <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
//     <Box
//       borderWidth={1}
//       borderRadius="lg"
//       p={{ base: 4, md: 6 }}
//       mb={4}
//       bg={useColorModeValue("white", "gray.800")}
//       boxShadow="md"
//       _hover={{ boxShadow: "lg", borderColor: "teal.900" }}
//       transition="all 0.3s"
//     >
//       <Heading size={{ base: "sm", md: "md" }} mb={2}>
//         {title}
//       </Heading>
//       <Text fontSize={{ base: "xs", md: "sm" }} color="gray.600" mb={3}>
//         {department} • {location}
//       </Text>
//       <Flex alignItems="center" justifyContent="space-between" flexWrap="wrap" gap={2}>
//         <HStack spacing={2} mb={{ base: 2, md: 0 }}>
//           <Badge colorScheme="orange">{type}</Badge>
//           <Tooltip label="Apply before the deadline" aria-label="Application deadline">
//             <HStack>
//               <Icon as={FiCalendar} color="gray.500" />
//               <Text fontSize={{ base: "2xs", md: "xs" }}>2 weeks left</Text>
//             </HStack>
//           </Tooltip>
//         </HStack>
//         <Button
//           size={{ base: "xs", md: "sm" }}
//           color="white"
//           bg="teal.900"
//           onClick={onApply}
//           rightIcon={<FiArrowRight />}
//           _hover={{ transform: "translateY(-2px)", boxShadow: "md" }}
//           transition="all 0.3s"
//         >
//           View & Apply
//         </Button>
//       </Flex>
//     </Box>
//   </motion.div>
// );

// const EmployeeTestimonial = ({ name, role, testimonial, avatar }) => (
//   <motion.div
//     initial={{ opacity: 0, scale: 0.9 }}
//     animate={{ opacity: 1, scale: 1 }}
//     transition={{ duration: 0.5 }}
//     whileHover={{ scale: 1.02 }}
//   >
//     <Box
//       borderWidth={1}
//       borderRadius="lg"
//       p={{ base: 4, md: 6 }}
//       bg={useColorModeValue("white", "gray.800")}
//       boxShadow="md"
//       _hover={{ boxShadow: "lg" }}
//       transition="all 0.3s"
//       height="100%"
//     >
//       <Flex direction="column" align="center" textAlign="center" height="100%">
//         <Avatar size={{ base: "lg", md: "xl" }} name={name} src={avatar} mb={4} />
//         <Text fontWeight="bold" fontSize={{ base: "md", md: "lg" }}>
//           {name}
//         </Text>
//         <Text fontSize={{ base: "xs", md: "sm" }} color="gray.500" mb={4}>
//           {role}
//         </Text>
//         <Text fontSize={{ base: "xs", md: "sm" }} fontStyle="italic" flex={1}>
//           "{testimonial}"
//         </Text>
//       </Flex>
//     </Box>
//   </motion.div>
// );

// const CompanyStats = () => (
//   <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={{ base: 6, md: 8 }} mb={10}>
//     <Stat
//       bg={useColorModeValue("white", "gray.800")}
//       p={{ base: 6, md: 8 }}
//       borderRadius="xl"
//       boxShadow="lg"
//       _hover={{ transform: "scale(1.05)", boxShadow: "2xl" }}
//       transition="all 0.3s ease-in-out"
//     >
//       <Text fontSize={{ base: "md", md: "lg" }} fontWeight="bold" color={useColorModeValue("gray.800", "white")}>
//         Employees
//       </Text>
//       <Text
//         fontSize={{ base: "3xl", md: "4xl" }}
//         fontWeight="extrabold"
//         color={useColorModeValue("teal.600", "teal.300")}
//       >
//         50+
//       </Text>
//       <HStack fontSize={{ base: "sm", md: "md" }} color={useColorModeValue("gray.500", "gray.400")}>
//         <Icon as={FiTrendingUp} color="teal.500" />
//         <Text>20% growth</Text>
//       </HStack>
//     </Stat>
//     <Stat
//       bg={useColorModeValue("white", "gray.800")}
//       p={{ base: 6, md: 8 }}
//       borderRadius="xl"
//       boxShadow="lg"
//       _hover={{ transform: "scale(1.05)", boxShadow: "2xl" }}
//       transition="all 0.3s ease-in-out"
//     >
//       <Text fontSize={{ base: "md", md: "lg" }} fontWeight="bold" color={useColorModeValue("gray.800", "white")}>
//         Projects Completed
//       </Text>
//       <Text
//         fontSize={{ base: "3xl", md: "4xl" }}
//         fontWeight="extrabold"
//         color={useColorModeValue("teal.600", "teal.300")}
//       >
//         100+
//       </Text>
//       <Text fontSize={{ base: "sm", md: "md" }} color={useColorModeValue("gray.500", "gray.400")}>
//         Last year
//       </Text>
//     </Stat>
//     <Stat
//       bg={useColorModeValue("white", "gray.800")}
//       p={{ base: 6, md: 8 }}
//       borderRadius="xl"
//       boxShadow="lg"
//       _hover={{ transform: "scale(1.05)", boxShadow: "2xl" }}
//       transition="all 0.3s ease-in-out"
//     >
//       <Text fontSize={{ base: "md", md: "lg" }} fontWeight="bold" color={useColorModeValue("gray.800", "white")}>
//         Client Satisfaction
//       </Text>
//       <Text
//         fontSize={{ base: "3xl", md: "4xl" }}
//         fontWeight="extrabold"
//         color={useColorModeValue("teal.600", "teal.300")}
//       >
//         98%
//       </Text>
//       <HStack fontSize={{ base: "sm", md: "md" }} color={useColorModeValue("gray.500", "gray.400")}>
//         <Icon as={FiStar} color="yellow.500" />
//         <Text>Top rated</Text>
//       </HStack>
//     </Stat>
//     <Stat
//       bg={useColorModeValue("white", "gray.800")}
//       p={{ base: 6, md: 8 }}
//       borderRadius="xl"
//       boxShadow="lg"
//       _hover={{ transform: "scale(1.05)", boxShadow: "2xl" }}
//       transition="all 0.3s ease-in-out"
//     >
//       <Text fontSize={{ base: "md", md: "lg" }} fontWeight="bold" color={useColorModeValue("gray.800", "white")}>
//         Global Presence
//       </Text>
//       <Text
//         fontSize={{ base: "3xl", md: "4xl" }}
//         fontWeight="extrabold"
//         color={useColorModeValue("teal.600", "teal.300")}
//       >
//         10+
//       </Text>
//       <Text fontSize={{ base: "sm", md: "md" }} color={useColorModeValue("gray.500", "gray.400")}>
//         Countries
//       </Text>
//     </Stat>
//   </SimpleGrid>
// );

// const CareersPage = () => {
//   const [selectedJob, setSelectedJob] = useState(null);
//   const toast = useToast();
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const bgColor = useColorModeValue("gray.50", "gray.900");

//   const jobListings = [
//     {
//       title: "Senior Software Engineer",
//       department: "Engineering",
//       location: "Chennai",
//       type: "Full-time",
//     },
//   ];

//   const testimonials = [
//     {
//       name: "Lokesh",
//       role: "Senior Developer",
//       testimonial:
//         "Working here has been an incredible journey of growth and innovation. The challenges we tackle daily keep me motivated and excited about my work.",
//       avatar: "/placeholder.svg?height=100&width=100",
//     },
//     {
//       name: "Kishore",
//       role: "Product Manager",
//       testimonial:
//         "The collaborative environment here is unparalleled. I love coming to work every day and being part of a team that's truly making a difference in our industry.",
//       avatar: "/placeholder.svg?height=100&width=100",
//     },
//     {
//       name: "Chandru",
//       role: "UX Designer",
//       testimonial:
//         "I've never felt more valued and supported in my career than I do here. The emphasis on work-life balance and professional development is refreshing.",
//       avatar: "/placeholder.svg?height=100&width=100",
//     },
//   ];

//   const handleApply = (job) => {
//     setSelectedJob(job);
//     onOpen();
//   };

//   const handleFormSubmit = (formData) => {
//     console.log("Form submitted:", formData);
//     onClose();
//     toast({
//       title: "Application submitted successfully!",
//       status: "success",
//       duration: 5000,
//       isClosable: true,
//     });
//   };

//   return (
//     <Box bg={bgColor} minHeight="100vh">
//       {/* Hero Section */}
//       <Box
//         bgPosition="center"
//         bgRepeat="no-repeat"
//         bgSize="cover"
//         height={{ base: "350px", sm: "450px", md: "550px" }}
//         position="relative"
//       >
//         <Box
//           position="absolute"
//           top="0"
//           left="0"
//           width="100%"
//           height="100%"
//           bg="rgba(0, 0, 0, 0.14)"
//           display="flex"
//           alignItems="center"
//           justifyContent="center"
//           px={{ base: 4, md: 0 }}
//         >
//           <VStack
//             spacing={{ base: 3, md: 6 }}
//             maxWidth="800px"
//             textAlign="center"
//             className="relative bg-white/10 backdrop-blur-md p-4 rounded-lg"
//           >
//             <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
//               <Heading
//                 as="h1"
//                 size={{ base: "xl", sm: "2xl", md: "3xl" }}
//                 color="orange.700"
//                 textAlign="center"
//                 marginTop={16}
//               >
//                 Join Our Team
//               </Heading>
//             </motion.div>
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//             >
//               <Text
//                 fontSize={{ base: "md", sm: "lg", md: "xl" }}
//                 color="orange.700"
//                 textAlign="center"
//                 maxWidth="600px"
//               >
//                 Be part of something extraordinary. Shape the future with us and make a lasting impact in the world of
//                 technology.
//               </Text>
//             </motion.div>
//           </VStack>
//         </Box>
//       </Box>

//       {/* Main Content */}
//       <Container maxW="container.xl" py={{ base: 10, md: 20 }} px={{ base: 4, md: 6 }}>
//         <VStack spacing={{ base: 10, md: 16 }}>
//           <CompanyStats />

//           <Tabs isFitted variant="enclosed" width="100%">
//             <TabList
//               mb="1em"
//               flexWrap="wrap"
//               css={{
//                 scrollbarWidth: "none",
//                 "&::-webkit-scrollbar": { display: "none" },
//                 "-ms-overflow-style": "none",
//               }}
//             >
//               {["Open Positions", "Why Join Us", "Employee Stories"].map((label, index) => (
//                 <Tab
//                   key={index}
//                   py={{ base: 1, md: 3 }}
//                   px={{ base: 3, md: 6 }}
//                   fontSize={{ base: "sm", md: "lg" }}
//                   fontWeight="semibold"
//                   borderRadius="full"
//                   _selected={{ color: "white", bg: "teal.900", boxShadow: "md" }}
//                   _hover={{ bg: "gray.200", color: "black" }}
//                   height="8"
//                   transition="all 0.3s ease"
//                   whiteSpace="nowrap"
//                 >
//                   {label}
//                 </Tab>
//               ))}
//             </TabList>

//             <TabPanels>
//               {/* Open Positions Panel */}
//               <TabPanel>
//                 <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={{ base: 4, md: 8 }}>
//                   {jobListings.map((job, index) => (
//                     <JobListing key={index} {...job} onApply={() => handleApply(job)} />
//                   ))}
//                 </SimpleGrid>
//               </TabPanel>

//               {/* Why Join Us Panel */}
//               <TabPanel>
//                 <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={{ base: 4, md: 8 }}>
//                   <Box>
//                     <Heading as="h3" size={{ base: "md", md: "lg" }} mb={4}>
//                       Our Culture
//                     </Heading>
//                     <VStack align="start" spacing={3}>
//                       {[
//                         { icon: FiHeart, text: "Passionate about innovation", color: "red.500" },
//                         { icon: FiUsers, text: "Collaborative and inclusive environment", color: "blue.500" },
//                         { icon: FiTrendingUp, text: "Continuous learning and growth", color: "green.500" },
//                         { icon: FiCoffee, text: "Work-life balance", color: "orange.500" },
//                       ].map((item, idx) => (
//                         <HStack key={idx}>
//                           <Icon as={item.icon} color={item.color} />
//                           <Text fontSize={{ base: "sm", md: "md" }}>{item.text}</Text>
//                         </HStack>
//                       ))}
//                     </VStack>
//                   </Box>
//                   <Box>
//                     <Heading as="h3" size={{ base: "md", md: "lg" }} mb={4}>
//                       Benefits
//                     </Heading>
//                     <SimpleGrid columns={2} spacing={4}>
//                       {[
//                         { icon: FiDollarSign, text: "Competitive salary", color: "green.500" },
//                         { icon: FiAward, text: "Performance bonuses", color: "purple.500" },
//                         { icon: FiClock, text: "Flexible hours", color: "blue.500" },
//                         { icon: FiBriefcase, text: "Remote work options", color: "red.500" },
//                         { icon: FiHeart, text: "Health insurance", color: "pink.500" },
//                         { icon: FiCalendar, text: "Paid time off", color: "orange.500" },
//                       ].map((item, idx) => (
//                         <VStack key={idx} align="start">
//                           <HStack>
//                             <Icon as={item.icon} color={item.color} />
//                             <Text fontSize={{ base: "sm", md: "md" }}>{item.text}</Text>
//                           </HStack>
//                         </VStack>
//                       ))}
//                     </SimpleGrid>
//                   </Box>
//                 </SimpleGrid>
//               </TabPanel>

//               {/* Employee Stories Panel */}
//               <TabPanel>
//                 <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={{ base: 4, md: 8 }}>
//                   {testimonials.map((testimonial, index) => (
//                     <EmployeeTestimonial key={index} {...testimonial} />
//                   ))}
//                 </SimpleGrid>
//               </TabPanel>
//             </TabPanels>
//           </Tabs>

//           {/* Learning & Development Section */}
//           <Box width="100%">
//             <Heading as="h2" size="xl" mb={6} textAlign="center">
//               Learning & Development
//             </Heading>
//             <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={{ base: 6, md: 10 }}>
//               <Box
//                 borderWidth={1}
//                 borderRadius="lg"
//                 p={{ base: 4, md: 6 }}
//                 bg={useColorModeValue("white", "gray.800")}
//                 boxShadow="md"
//                 _hover={{ boxShadow: "lg" }}
//                 transition="all 0.3s"
//               >
//                 <Icon as={FiBook} boxSize={{ base: 8, md: 10 }} color="teal.900" mb={4} />
//                 <Heading size={{ base: "sm", md: "md" }} mb={2}>
//                   Training Programs
//                 </Heading>
//                 <Text fontSize={{ base: "sm", md: "md" }}>
//                   Access to a wide range of internal and external training programs to enhance your skills.
//                 </Text>
//               </Box>
//               <Box
//                 borderWidth={1}
//                 borderRadius="lg"
//                 p={{ base: 4, md: 6 }}
//                 bg={useColorModeValue("white", "gray.800")}
//                 boxShadow="md"
//                 _hover={{ boxShadow: "lg" }}
//                 transition="all 0.3s"
//               >
//                 <Icon as={FiGlobe} boxSize={{ base: 8, md: 10 }} color="teal.900" mb={4} />
//                 <Heading size={{ base: "sm", md: "md" }} mb={2}>
//                   Conference Attendance
//                 </Heading>
//                 <Text fontSize={{ base: "sm", md: "md" }}>
//                   Opportunities to attend industry-leading conferences and networking events.
//                 </Text>
//               </Box>
//               <Box
//                 borderWidth={1}
//                 borderRadius="lg"
//                 p={{ base: 4, md: 6 }}
//                 bg={useColorModeValue("white", "gray.800")}
//                 boxShadow="md"
//                 _hover={{ boxShadow: "lg" }}
//                 transition="all 0.3s"
//               >
//                 <Icon as={FiShield} boxSize={{ base: 8, md: 10 }} color="teal.900" mb={4} />
//                 <Heading size={{ base: "sm", md: "md" }} mb={2}>
//                   Mentorship
//                 </Heading>
//                 <Text fontSize={{ base: "sm", md: "md" }}>
//                   One-on-one mentorship programs to guide your career growth and development.
//                 </Text>
//               </Box>
//             </SimpleGrid>
//           </Box>
//         </VStack>
//       </Container>

//       {/* Application Form Modal */}
//       {isOpen && (
//         <ApplicationForm
//           isOpen={isOpen}
//           onClose={onClose}
//           selectedJob={selectedJob}
//           onSubmit={handleFormSubmit}
//         />
//       )}
//     </Box>
//   );
// };

// export default CareersPage;

// src/pages/CareersPage.js
// import { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   Box,
//   Button,
//   Container,
//   Flex,
//   Heading,
//   Text,
//   VStack,
//   HStack,
//   useToast,
//   Icon,
//   SimpleGrid,
//   useColorModeValue,
//   Badge,
//   Avatar,
//   Tooltip,
//   Tabs,
//   TabList,
//   TabPanels,
//   Tab,
//   TabPanel,
//   useDisclosure,
//   Stat,
// } from "@chakra-ui/react";
// import {
//   FiBriefcase,
//   FiAward,
//   FiDollarSign,
//   FiClock,
//   FiCalendar,
//   FiStar,
//   FiTrendingUp,
//   FiCoffee,
//   FiHeart,
//   FiUsers,
//   FiBook,
//   FiGlobe,
//   FiShield,
//   FiArrowRight,
// } from "react-icons/fi";

// // ✅ Import only the ApplicationForm component
// import ApplicationForm from "./ApplicationForm";

// const JobListing = ({ title, department, location, type, onApply }) => {
//   const hoverBg = useColorModeValue("teal.900", "teal.700");
//   const borderColor = useColorModeValue("gray.200", "gray.600");

//   return (
//     <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
//       <Box
//         borderWidth={1}
//         borderRadius="lg"
//         p={{ base: 4, md: 6 }}
//         mb={4}
//         bg={useColorModeValue("white", "gray.800")}
//         boxShadow="md"
//         _hover={{ boxShadow: "lg", borderColor: hoverBg }}
//         transition="all 0.3s"
//         borderColor={borderColor}
//       >
//         <Heading size={{ base: "sm", md: "md" }} mb={2}>
//           {title}
//         </Heading>
//         <Text fontSize={{ base: "xs", md: "sm" }} color="gray.600" mb={3}>
//           {department} • {location}
//         </Text>
//         <Flex alignItems="center" justifyContent="space-between" flexWrap="wrap" gap={2}>
//           <HStack spacing={2} mb={{ base: 2, md: 0 }}>
//             <Badge colorScheme="orange">{type}</Badge>
//             <Tooltip label="Apply before the deadline" aria-label="Application deadline">
//               <HStack>
//                 <Icon as={FiCalendar} color="gray.500" />
//                 <Text fontSize={{ base: "2xs", md: "xs" }}>2 weeks left</Text>
//               </HStack>
//             </Tooltip>
//           </HStack>
//           <Button
//             size={{ base: "xs", md: "sm" }}
//             color="white"
//             bg="teal.900"
//             onClick={() => onApply()}
//             rightIcon={<FiArrowRight />}
//             _hover={{ transform: "translateY(-2px)", boxShadow: "md" }}
//             transition="all 0.3s"
//           >
//             View & Apply
//           </Button>
//         </Flex>
//       </Box>
//     </motion.div>
//   );
// };

// const EmployeeTestimonial = ({ name, role, testimonial, avatar }) => {
//   const bg = useColorModeValue("white", "gray.800");
//   const borderColor = useColorModeValue("gray.200", "gray.600");

//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.9 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 0.5 }}
//       whileHover={{ scale: 1.02 }}
//     >
//       <Box
//         borderWidth={1}
//         borderRadius="lg"
//         p={{ base: 4, md: 6 }}
//         bg={bg}
//         boxShadow="md"
//         _hover={{ boxShadow: "lg" }}
//         transition="all 0.3s"
//         height="100%"
//         borderColor={borderColor}
//       >
//         <Flex direction="column" align="center" textAlign="center" height="100%">
//           <Avatar size={{ base: "lg", md: "xl" }} name={name} src={avatar} mb={4} />
//           <Text fontWeight="bold" fontSize={{ base: "md", md: "lg" }}>
//             {name}
//           </Text>
//           <Text fontSize={{ base: "xs", md: "sm" }} color="gray.500" mb={4}>
//             {role}
//           </Text>
//           <Text fontSize={{ base: "xs", md: "sm" }} fontStyle="italic" flex={1}>
//             "{testimonial}"
//           </Text>
//         </Flex>
//       </Box>
//     </motion.div>
//   );
// };

// const CompanyStats = () => {
//   const bg = useColorModeValue("white", "gray.800");
//   const borderColor = useColorModeValue("gray.200", "gray.600");

//   return (
//     <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={{ base: 6, md: 8 }} mb={10}>
//       <Stat
//         bg={bg}
//         p={{ base: 6, md: 8 }}
//         borderRadius="xl"
//         boxShadow="lg"
//         _hover={{ transform: "scale(1.05)", boxShadow: "2xl" }}
//         transition="all 0.3s ease-in-out"
//         borderWidth={1}
//         borderColor={borderColor}
//       >
//         <Text fontSize={{ base: "md", md: "lg" }} fontWeight="bold" color={useColorModeValue("gray.800", "white")}>
//           Employees
//         </Text>
//         <Text
//           fontSize={{ base: "3xl", md: "4xl" }}
//           fontWeight="extrabold"
//           color={useColorModeValue("teal.600", "teal.300")}
//         >
//           50+
//         </Text>
//         <HStack fontSize={{ base: "sm", md: "md" }} color={useColorModeValue("gray.500", "gray.400")}>
//           <Icon as={FiTrendingUp} color="teal.500" />
//           <Text>20% growth</Text>
//         </HStack>
//       </Stat>

//       <Stat
//         bg={bg}
//         p={{ base: 6, md: 8 }}
//         borderRadius="xl"
//         boxShadow="lg"
//         _hover={{ transform: "scale(1.05)", boxShadow: "2xl" }}
//         transition="all 0.3s ease-in-out"
//         borderWidth={1}
//         borderColor={borderColor}
//       >
//         <Text fontSize={{ base: "md", md: "lg" }} fontWeight="bold" color={useColorModeValue("gray.800", "white")}>
//           Projects Completed
//         </Text>
//         <Text
//           fontSize={{ base: "3xl", md: "4xl" }}
//           fontWeight="extrabold"
//           color={useColorModeValue("teal.600", "teal.300")}
//         >
//           100+
//         </Text>
//         <Text fontSize={{ base: "sm", md: "md" }} color={useColorModeValue("gray.500", "gray.400")}>
//           Last year
//         </Text>
//       </Stat>

//       <Stat
//         bg={bg}
//         p={{ base: 6, md: 8 }}
//         borderRadius="xl"
//         boxShadow="lg"
//         _hover={{ transform: "scale(1.05)", boxShadow: "2xl" }}
//         transition="all 0.3s ease-in-out"
//         borderWidth={1}
//         borderColor={borderColor}
//       >
//         <Text fontSize={{ base: "md", md: "lg" }} fontWeight="bold" color={useColorModeValue("gray.800", "white")}>
//           Client Satisfaction
//         </Text>
//         <Text
//           fontSize={{ base: "3xl", md: "4xl" }}
//           fontWeight="extrabold"
//           color={useColorModeValue("teal.600", "teal.300")}
//         >
//           98%
//         </Text>
//         <HStack fontSize={{ base: "sm", md: "md" }} color={useColorModeValue("gray.500", "gray.400")}>
//           <Icon as={FiStar} color="yellow.500" />
//           <Text>Top rated</Text>
//         </HStack>
//       </Stat>

//       <Stat
//         bg={bg}
//         p={{ base: 6, md: 8 }}
//         borderRadius="xl"
//         boxShadow="lg"
//         _hover={{ transform: "scale(1.05)", boxShadow: "2xl" }}
//         transition="all 0.3s ease-in-out"
//         borderWidth={1}
//         borderColor={borderColor}
//       >
//         <Text fontSize={{ base: "md", md: "lg" }} fontWeight="bold" color={useColorModeValue("gray.800", "white")}>
//           Global Presence
//         </Text>
//         <Text
//           fontSize={{ base: "3xl", md: "4xl" }}
//           fontWeight="extrabold"
//           color={useColorModeValue("teal.600", "teal.300")}
//         >
//           10+
//         </Text>
//         <Text fontSize={{ base: "sm", md: "md" }} color={useColorModeValue("gray.500", "gray.400")}>
//           Countries
//         </Text>
//       </Stat>
//     </SimpleGrid>
//   );
// };

// const CareersPage = () => {
//   const [selectedJob, setSelectedJob] = useState(null);
//   const toast = useToast();
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const bgColor = useColorModeValue("gray.50", "gray.900");

//   // const jobListings = [
//   //   {
//   //     title: "Senior Software Engineer",
//   //     department: "Engineering",
//   //     location: "Chennai",
//   //     type: "Full-time",
//   //     salary: "₹15-25 LPA",
//   //   },
//   //   {
//   //     title: "IT/Non-IT Mentor",
//   //     department: "IT/Non-IT",
//   //     location: "Cheyyar",
//   //     type: "Full-time",
//   //   },
//   // ];
//   const jobListings = [
//   {
//     title: "Senior Software Engineer",
//     department: "Engineering",
//     location: "Chennai",
//     type: "Full-time",
//     applyBy: "August 31, 2025",
//     salary: "₹Competitive salary",
//     experience: "5+ years",
//     description: "We are looking for a passionate developer to lead our frontend and backend initiatives, building scalable and maintainable applications using modern technologies.",
//     responsibilities: [
//       "Develop scalable APIs using Node.js",
//       "Build responsive UI with React",
//       "Collaborate with product team",
//       "Mentor junior developers"
//     ],
//     requirements: [
//       "5+ years of full-stack experience",
//       "Strong in React, Node.js, MongoDB",
//       "Familiar with AWS and Docker",
//       "Excellent communication skills"
//     ]
//   },
//   {
//     title: "IT/Non-IT Mentor",
//     department: "Training",
//     location: "Cheyyar",
//     type: "Full-time",
//     applyBy: "August 31, 2025",
//     salary: "₹Competitive salary",
//     experience: "1 to 3 years",
//     description: "Join us as a mentor to guide students and professionals in mastering modern technology stacks, both in IT and non-IT domains.",
//     responsibilities: [
//       "Conduct live coding and theory sessions",
//       "Review student projects and provide feedback",
//       "Support learners in career development",
//       "Stay updated with industry trends"
//     ],
//     requirements: [
//       "upto 3 years of industry experience",
//       "Strong communication and teaching skills",
//       "Expertise in at least one tech stack or domain",
//       "Passion for mentoring and education"
//     ]
//   }
// ];

//   const testimonials = [
//     {
//       name: "Lokesh",
//       role: "Senior Developer",
//       testimonial:
//         "Working here has been an incredible journey of growth and innovation. The challenges we tackle daily keep me motivated and excited about my work.",
//       avatar: "/placeholder.svg?height=100&width=100",
//     },
//     {
//       name: "Kishore",
//       role: "Product Manager",
//       testimonial:
//         "The collaborative environment here is unparalleled. I love coming to work every day and being part of a team that's truly making a difference in our industry.",
//       avatar: "/placeholder.svg?height=100&width=100",
//     },
//     {
//       name: "Chandru",
//       role: "UX Designer",
//       testimonial:
//         "I've never felt more valued and supported in my career than I do here. The emphasis on work-life balance and professional development is refreshing.",
//       avatar: "/placeholder.svg?height=100&width=100",
//     },
//   ];

//   const handleApply = (job) => {
//     setSelectedJob(job);
//     onOpen();
//   };

//   const handleFormSubmit = (formData) => {
//     console.log("Form submitted:", formData);
//     onClose();
//     toast({
//       title: "Application submitted successfully!",
//       status: "success",
//       duration: 5000,
//       isClosable: true,
//     });
//   };

//   return (
//     <Box bg={bgColor} minHeight="100vh">
//       {/* Hero Section */}
//       <Box
//         bgPosition="center"
//         bgRepeat="no-repeat"
//         bgSize="cover"
//         height={{ base: "350px", sm: "450px", md: "550px" }}
//         position="relative"
//       >
//         <Box
//           position="absolute"
//           top="0"
//           left="0"
//           width="100%"
//           height="100%"
//           bg="rgba(0, 0, 0, 0.14)"
//           display="flex"
//           alignItems="center"
//           justifyContent="center"
//           px={{ base: 4, md: 0 }}
//         >
//           <VStack
//             spacing={{ base: 3, md: 6 }}
//             maxWidth="800px"
//             textAlign="center"
//             className="relative bg-white/10 backdrop-blur-md p-4 rounded-lg"
//           >
//             <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
//               <Heading
//                 as="h1"
//                 size={{ base: "xl", sm: "2xl", md: "3xl" }}
//                 color="orange.700"
//                 textAlign="center"
//                 marginTop={16}
//               >
//                 Join Our Team
//               </Heading>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//             >
//               <Text
//                 fontSize={{ base: "md", sm: "lg", md: "xl" }}
//                 color="orange.700"
//                 textAlign="center"
//                 maxWidth="600px"
//               >
//                 Be part of something extraordinary. Shape the future with us and make a lasting impact in the world of
//                 technology.
//               </Text>
//             </motion.div>
//           </VStack>
//         </Box>
//       </Box>

//       {/* Main Content */}
//       <Container maxW="container.xl" py={{ base: 10, md: 20 }} px={{ base: 4, md: 6 }}>
//         <VStack spacing={{ base: 10, md: 16 }} id="open-positions">
//           <CompanyStats />

//           <Tabs isFitted variant="enclosed" width="100%">
//             <TabList
//               mb="1em"
//               flexWrap="wrap"
//               css={{
//                 scrollbarWidth: "none",
//                 "&::-webkit-scrollbar": { display: "none" },
//                 "-ms-overflow-style": "none",
//               }}
//             >
//               {["Open Positions", "Why Join Us", "Employee Stories"].map((label, index) => (
//                 <Tab
//                   key={index}
//                   py={{ base: 1, md: 3 }}
//                   px={{ base: 3, md: 6 }}
//                   fontSize={{ base: "sm", md: "lg" }}
//                   fontWeight="semibold"
//                   borderRadius="full"
//                   _selected={{ color: "white", bg: "teal.900", boxShadow: "md" }}
//                   _hover={{ bg: "gray.200", color: "black" }}
//                   height="8"
//                   transition="all 0.3s ease"
//                   whiteSpace="nowrap"
//                 >
//                   {label}
//                 </Tab>
//               ))}
//             </TabList>

//             <TabPanels>
//               {/* Open Positions Panel */}
//               <TabPanel>
//                 <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={{ base: 4, md: 8 }}>
//                   {jobListings.map((job, index) => (
//                     <JobListing key={index} {...job} onApply={() => handleApply(job)} />
//                   ))}
//                 </SimpleGrid>
//               </TabPanel>

//               {/* Why Join Us Panel */}
//               <TabPanel>
//                 <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={{ base: 4, md: 8 }}>
//                   <Box>
//                     <Heading as="h3" size={{ base: "md", md: "lg" }} mb={4}>
//                       Our Culture
//                     </Heading>
//                     <VStack align="start" spacing={3}>
//                       {[
//                         { icon: FiHeart, text: "Passionate about innovation", color: "red.500" },
//                         { icon: FiUsers, text: "Collaborative and inclusive environment", color: "blue.500" },
//                         { icon: FiTrendingUp, text: "Continuous learning and growth", color: "green.500" },
//                         { icon: FiCoffee, text: "Work-life balance", color: "orange.500" },
//                       ].map((item, idx) => (
//                         <HStack key={idx}>
//                           <Icon as={item.icon} color={item.color} />
//                           <Text fontSize={{ base: "sm", md: "md" }}>{item.text}</Text>
//                         </HStack>
//                       ))}
//                     </VStack>
//                   </Box>

//                   <Box>
//                     <Heading as="h3" size={{ base: "md", md: "lg" }} mb={4}>
//                       Benefits
//                     </Heading>
//                     <SimpleGrid columns={2} spacing={4}>
//                       {[
//                         { icon: FiDollarSign, text: "Competitive salary", color: "green.500" },
//                         { icon: FiAward, text: "Performance bonuses", color: "purple.500" },
//                         { icon: FiClock, text: "Flexible hours", color: "blue.500" },
//                         { icon: FiBriefcase, text: "Remote work options", color: "red.500" },
//                         { icon: FiHeart, text: "Health insurance", color: "pink.500" },
//                         { icon: FiCalendar, text: "Paid time off", color: "orange.500" },
//                       ].map((item, idx) => (
//                         <VStack key={idx} align="start">
//                           <HStack>
//                             <Icon as={item.icon} color={item.color} />
//                             <Text fontSize={{ base: "sm", md: "md" }}>{item.text}</Text>
//                           </HStack>
//                         </VStack>
//                       ))}
//                     </SimpleGrid>
//                   </Box>
//                 </SimpleGrid>
//               </TabPanel>

//               {/* Employee Stories Panel */}
//               <TabPanel>
//                 <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={{ base: 4, md: 8 }}>
//                   {testimonials.map((testimonial, index) => (
//                     <EmployeeTestimonial key={index} {...testimonial} />
//                   ))}
//                 </SimpleGrid>
//               </TabPanel>
//             </TabPanels>
//           </Tabs>

//           {/* Learning & Development Section */}
//           <Box width="100%">
//             <Heading as="h2" size="xl" mb={6} textAlign="center">
//               Learning & Development
//             </Heading>
//             <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={{ base: 6, md: 10 }}>
//               <Box
//                 borderWidth={1}
//                 borderRadius="lg"
//                 p={{ base: 4, md: 6 }}
//                 bg={useColorModeValue("white", "gray.800")}
//                 boxShadow="md"
//                 _hover={{ boxShadow: "lg" }}
//                 transition="all 0.3s"
//                 borderColor={useColorModeValue("gray.200", "gray.600")}
//               >
//                 <Icon as={FiBook} boxSize={{ base: 8, md: 10 }} color="teal.900" mb={4} />
//                 <Heading size={{ base: "sm", md: "md" }} mb={2}>
//                   Training Programs
//                 </Heading>
//                 <Text fontSize={{ base: "sm", md: "md" }}>
//                   Access to a wide range of internal and external training programs to enhance your skills.
//                 </Text>
//               </Box>

//               <Box
//                 borderWidth={1}
//                 borderRadius="lg"
//                 p={{ base: 4, md: 6 }}
//                 bg={useColorModeValue("white", "gray.800")}
//                 boxShadow="md"
//                 _hover={{ boxShadow: "lg" }}
//                 transition="all 0.3s"
//                 borderColor={useColorModeValue("gray.200", "gray.600")}
//               >
//                 <Icon as={FiGlobe} boxSize={{ base: 8, md: 10 }} color="teal.900" mb={4} />
//                 <Heading size={{ base: "sm", md: "md" }} mb={2}>
//                   Conference Attendance
//                 </Heading>
//                 <Text fontSize={{ base: "sm", md: "md" }}>
//                   Opportunities to attend industry-leading conferences and networking events.
//                 </Text>
//               </Box>

//               <Box
//                 borderWidth={1}
//                 borderRadius="lg"
//                 p={{ base: 4, md: 6 }}
//                 bg={useColorModeValue("white", "gray.800")}
//                 boxShadow="md"
//                 _hover={{ boxShadow: "lg" }}
//                 transition="all 0.3s"
//                 borderColor={useColorModeValue("gray.200", "gray.600")}
//               >
//                 <Icon as={FiShield} boxSize={{ base: 8, md: 10 }} color="teal.900" mb={4} />
//                 <Heading size={{ base: "sm", md: "md" }} mb={2}>
//                   Mentorship
//                 </Heading>
//                 <Text fontSize={{ base: "sm", md: "md" }}>
//                   One-on-one mentorship programs to guide your career growth and development.
//                 </Text>
//               </Box>
//             </SimpleGrid>
//           </Box>
//         </VStack>
//       </Container>

//       {/* Application Form Modal */}
//       {isOpen && (
//         <ApplicationForm
//           isOpen={isOpen}
//           onClose={onClose}
//           selectedJob={selectedJob}
//           onSubmit={handleFormSubmit}
//         />
//       )}
//     </Box>
//   );
// };

// export default CareersPage;

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Text,
  VStack,
  HStack,
  useToast,
  Icon,
  SimpleGrid,
  useColorModeValue,
  Badge,
  Avatar,
  Tooltip,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useDisclosure,
  Stat,
} from "@chakra-ui/react";
import {
  FiBriefcase,
  FiAward,
  FiDollarSign,
  FiClock,
  FiCalendar,
  FiStar,
  FiTrendingUp,
  FiCoffee,
  FiHeart,
  FiUsers,
  FiBook,
  FiGlobe,
  FiShield,
  FiArrowRight,
} from "react-icons/fi";

// ✅ Import ApplicationForm
import ApplicationForm from "./ApplicationForm";

const JobListing = ({ title, department, location, type, onApply }) => {
  const hoverBg = useColorModeValue("teal.900", "teal.700");
  const borderColor = useColorModeValue("gray.200", "gray.600");

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Box
        borderWidth={1}
        borderRadius="lg"
        p={{ base: 4, md: 6 }}
        mb={4}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow="md"
        _hover={{ boxShadow: "lg", borderColor: hoverBg }}
        transition="all 0.3s"
        borderColor={borderColor}
      >
        <Heading size={{ base: "sm", md: "md" }} mb={2}>
          {title}
        </Heading>
        <Text fontSize={{ base: "xs", md: "sm" }} color="gray.600" mb={3}>
          {department} • {location}
        </Text>
        <Flex alignItems="center" justifyContent="space-between" flexWrap="wrap" gap={2}>
          <HStack spacing={2} mb={{ base: 2, md: 0 }}>
            <Badge colorScheme="orange">{type}</Badge>
            <Tooltip label="Apply before the deadline" aria-label="Application deadline">
              <HStack>
                <Icon as={FiCalendar} color="gray.500" />
                <Text fontSize={{ base: "2xs", md: "xs" }}>2 weeks left</Text>
              </HStack>
            </Tooltip>
          </HStack>
          <Button
            size={{ base: "xs", md: "sm" }}
            color="white"
            bg="teal.900"
            onClick={() => onApply()}
            rightIcon={<FiArrowRight />}
            _hover={{ transform: "translateY(-2px)", boxShadow: "md" }}
            transition="all 0.3s"
          >
            View & Apply
          </Button>
        </Flex>
      </Box>
    </motion.div>
  );
};

const EmployeeTestimonial = ({ name, role, testimonial, avatar }) => {
  const bg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.600");

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
    >
      <Box
        borderWidth={1}
        borderRadius="lg"
        p={{ base: 4, md: 6 }}
        bg={bg}
        boxShadow="md"
        _hover={{ boxShadow: "lg" }}
        transition="all 0.3s"
        height="100%"
        borderColor={borderColor}
      >
        <Flex direction="column" align="center" textAlign="center" height="100%">
          <Avatar size={{ base: "lg", md: "xl" }} name={name} src={avatar} mb={4} />
          <Text fontWeight="bold" fontSize={{ base: "md", md: "lg" }}>
            {name}
          </Text>
          <Text fontSize={{ base: "xs", md: "sm" }} color="gray.500" mb={4}>
            {role}
          </Text>
          <Text fontSize={{ base: "xs", md: "sm" }} fontStyle="italic" flex={1}>
            "{testimonial}"
          </Text>
        </Flex>
      </Box>
    </motion.div>
  );
};

const CompanyStats = () => {
  const bg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.600");

  return (
    <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={{ base: 6, md: 8 }} mb={10}>
      <Stat
        bg={bg}
        p={{ base: 6, md: 8 }}
        borderRadius="xl"
        boxShadow="lg"
        _hover={{ transform: "scale(1.05)", boxShadow: "2xl" }}
        transition="all 0.3s ease-in-out"
        borderWidth={1}
        borderColor={borderColor}
      >
        <Text fontSize={{ base: "md", md: "lg" }} fontWeight="bold" color={useColorModeValue("gray.800", "white")}>
          Employees
        </Text>
        <Text
          fontSize={{ base: "3xl", md: "4xl" }}
          fontWeight="extrabold"
          color={useColorModeValue("teal.600", "teal.300")}
        >
          50+
        </Text>
        <HStack fontSize={{ base: "sm", md: "md" }} color={useColorModeValue("gray.500", "gray.400")}>
          <Icon as={FiTrendingUp} color="teal.500" />
          <Text>20% growth</Text>
        </HStack>
      </Stat>

      <Stat
        bg={bg}
        p={{ base: 6, md: 8 }}
        borderRadius="xl"
        boxShadow="lg"
        _hover={{ transform: "scale(1.05)", boxShadow: "2xl" }}
        transition="all 0.3s ease-in-out"
        borderWidth={1}
        borderColor={borderColor}
      >
        <Text fontSize={{ base: "md", md: "lg" }} fontWeight="bold" color={useColorModeValue("gray.800", "white")}>
          Projects Completed
        </Text>
        <Text
          fontSize={{ base: "3xl", md: "4xl" }}
          fontWeight="extrabold"
          color={useColorModeValue("teal.600", "teal.300")}
        >
          100+
        </Text>
        <Text fontSize={{ base: "sm", md: "md" }} color={useColorModeValue("gray.500", "gray.400")}>
          Last year
        </Text>
      </Stat>

      <Stat
        bg={bg}
        p={{ base: 6, md: 8 }}
        borderRadius="xl"
        boxShadow="lg"
        _hover={{ transform: "scale(1.05)", boxShadow: "2xl" }}
        transition="all 0.3s ease-in-out"
        borderWidth={1}
        borderColor={borderColor}
      >
        <Text fontSize={{ base: "md", md: "lg" }} fontWeight="bold" color={useColorModeValue("gray.800", "white")}>
          Client Satisfaction
        </Text>
        <Text
          fontSize={{ base: "3xl", md: "4xl" }}
          fontWeight="extrabold"
          color={useColorModeValue("teal.600", "teal.300")}
        >
          98%
        </Text>
        <HStack fontSize={{ base: "sm", md: "md" }} color={useColorModeValue("gray.500", "gray.400")}>
          <Icon as={FiStar} color="yellow.500" />
          <Text>Top rated</Text>
        </HStack>
      </Stat>

      <Stat
        bg={bg}
        p={{ base: 6, md: 8 }}
        borderRadius="xl"
        boxShadow="lg"
        _hover={{ transform: "scale(1.05)", boxShadow: "2xl" }}
        transition="all 0.3s ease-in-out"
        borderWidth={1}
        borderColor={borderColor}
      >
        <Text fontSize={{ base: "md", md: "lg" }} fontWeight="bold" color={useColorModeValue("gray.800", "white")}>
          Global Presence
        </Text>
        <Text
          fontSize={{ base: "3xl", md: "4xl" }}
          fontWeight="extrabold"
          color={useColorModeValue("teal.600", "teal.300")}
        >
          10+
        </Text>
        <Text fontSize={{ base: "sm", md: "md" }} color={useColorModeValue("gray.500", "gray.400")}>
          Countries
        </Text>
      </Stat>
    </SimpleGrid>
  );
};

const CareersPage = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const bgColor = useColorModeValue("gray.50", "gray.900");

  const jobListings = [
    {
      title: "Senior Software Engineer",
      department: "Engineering",
      location: "Chennai",
      type: "Full-time",
      applyBy: "August 31, 2025",
      salary: "₹Competitive salary",
      experience: "5+ years",
      description: "We are looking for a passionate developer to lead our frontend and backend initiatives, building scalable and maintainable applications using modern technologies.",
      responsibilities: [
        "Develop scalable APIs using Node.js",
        "Build responsive UI with React",
        "Collaborate with product team",
        "Mentor junior developers"
      ],
      requirements: [
        "5+ years of full-stack experience",
        "Strong in React, Node.js, MongoDB",
        "Familiar with AWS and Docker",
        "Excellent communication skills"
      ]
    },
    {
      title: "IT/Non-IT Mentor",
      department: "Training",
      location: "Cheyyar",
      type: "Full-time",
      applyBy: "August 31, 2025",
      salary: "₹Competitive salary",
      experience: "1 to 3 years",
      description: "Join us as a mentor to guide students and professionals in mastering modern technology stacks, both in IT and non-IT domains.",
      responsibilities: [
        "Conduct live coding and theory sessions",
        "Review student projects and provide feedback",
        "Support learners in career development",
        "Stay updated with industry trends"
      ],
      requirements: [
        "upto 3 years of industry experience",
        "Strong communication and teaching skills",
        "Expertise in at least one tech stack or domain",
        "Passion for mentoring and education"
      ]
    }
  ];

  const testimonials = [
    {
      name: "Lokesh",
      role: "Senior Developer",
      testimonial:
        "Working here has been an incredible journey of growth and innovation. The challenges we tackle daily keep me motivated and excited about my work.",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Kishore",
      role: "Product Manager",
      testimonial:
        "The collaborative environment here is unparalleled. I love coming to work every day and being part of a team that's truly making a difference in our industry.",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Chandru",
      role: "UX Designer",
      testimonial:
        "I've never felt more valued and supported in my career than I do here. The emphasis on work-life balance and professional development is refreshing.",
      avatar: "/placeholder.svg?height=100&width=100",
    },
  ];

  const handleApply = (job) => {
    setSelectedJob(job);
    onOpen();
  };

  const handleFormSubmit = (formData) => {
    console.log("Form submitted:", formData);
    onClose();
    toast({
      title: "Application submitted successfully!",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Box bg={bgColor} minHeight="100vh">
      {/* Hero Section */}
      <Box
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        height={{ base: "350px", sm: "450px", md: "550px" }}
        position="relative"
      >
        <Box
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          bg="rgba(0, 0, 0, 0.14)"
          display="flex"
          alignItems="center"
          justifyContent="center"
          px={{ base: 4, md: 0 }}
        >
          <VStack
            spacing={{ base: 3, md: 6 }}
            maxWidth="800px"
            textAlign="center"
            className="relative bg-white/10 backdrop-blur-md p-4 rounded-lg"
          >
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <Heading
                as="h1"
                size={{ base: "xl", sm: "2xl", md: "3xl" }}
                color="orange.700"
                textAlign="center"
                marginTop={16}
              >
                Join Our Team
              </Heading>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Text
                fontSize={{ base: "md", sm: "lg", md: "xl" }}
                color="orange.700"
                textAlign="center"
                maxWidth="600px"
              >
                Be part of something extraordinary. Shape the future with us and make a lasting impact in the world of
                technology.
              </Text>
            </motion.div>
          </VStack>
        </Box>
      </Box>

      {/* Main Content */}
      <Container maxW="container.xl" py={{ base: 10, md: 20 }} px={{ base: 4, md: 6 }}>
        <VStack spacing={{ base: 10, md: 16 }} id="open-positions">
          <CompanyStats />

          <Tabs isFitted variant="enclosed" width="100%">
            <TabList
              mb="1em"
              flexWrap="wrap"
              css={{
                scrollbarWidth: "none",
                "&::-webkit-scrollbar": { display: "none" },
                "-ms-overflow-style": "none",
              }}
            >
              {["Open Positions", "Why Join Us", "Employee Stories"].map((label, index) => (
                <Tab
                  key={index}
                  py={{ base: 1, md: 3 }}
                  px={{ base: 3, md: 6 }}
                  fontSize={{ base: "sm", md: "lg" }}
                  fontWeight="semibold"
                  borderRadius="full"
                  _selected={{ color: "white", bg: "teal.900", boxShadow: "md" }}
                  _hover={{ bg: "gray.200", color: "black" }}
                  height="8"
                  transition="all 0.3s ease"
                  whiteSpace="nowrap"
                >
                  {label}
                </Tab>
              ))}
            </TabList>

            <TabPanels>
              {/* Open Positions Panel */}
              <TabPanel>
                <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={{ base: 4, md: 8 }}>
                  {jobListings.map((job, index) => (
                    <JobListing key={index} {...job} onApply={() => handleApply(job)} />
                  ))}
                </SimpleGrid>
              </TabPanel>

              {/* Why Join Us Panel */}
              <TabPanel>
                <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={{ base: 4, md: 8 }}>
                  <Box>
                    <Heading as="h3" size={{ base: "md", md: "lg" }} mb={4}>
                      Our Culture
                    </Heading>
                    <VStack align="start" spacing={3}>
                      {[
                        { icon: FiHeart, text: "Passionate about innovation", color: "red.500" },
                        { icon: FiUsers, text: "Collaborative and inclusive environment", color: "blue.500" },
                        { icon: FiTrendingUp, text: "Continuous learning and growth", color: "green.500" },
                        { icon: FiCoffee, text: "Work-life balance", color: "orange.500" },
                      ].map((item, idx) => (
                        <HStack key={idx}>
                          <Icon as={item.icon} color={item.color} />
                          <Text fontSize={{ base: "sm", md: "md" }}>{item.text}</Text>
                        </HStack>
                      ))}
                    </VStack>
                  </Box>

                  <Box>
                    <Heading as="h3" size={{ base: "md", md: "lg" }} mb={4}>
                      Benefits
                    </Heading>
                    <SimpleGrid columns={2} spacing={4}>
                      {[
                        { icon: FiDollarSign, text: "Competitive salary", color: "green.500" },
                        { icon: FiAward, text: "Performance bonuses", color: "purple.500" },
                        { icon: FiClock, text: "Flexible hours", color: "blue.500" },
                        { icon: FiBriefcase, text: "Remote work options", color: "red.500" },
                        { icon: FiHeart, text: "Health insurance", color: "pink.500" },
                        { icon: FiCalendar, text: "Paid time off", color: "orange.500" },
                      ].map((item, idx) => (
                        <VStack key={idx} align="start">
                          <HStack>
                            <Icon as={item.icon} color={item.color} />
                            <Text fontSize={{ base: "sm", md: "md" }}>{item.text}</Text>
                          </HStack>
                        </VStack>
                      ))}
                    </SimpleGrid>
                  </Box>
                </SimpleGrid>
              </TabPanel>

              {/* Employee Stories Panel */}
              <TabPanel>
                <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={{ base: 4, md: 8 }}>
                  {testimonials.map((testimonial, index) => (
                    <EmployeeTestimonial key={index} {...testimonial} />
                  ))}
                </SimpleGrid>
              </TabPanel>
            </TabPanels>
          </Tabs>

          {/* Learning & Development Section */}
          <Box width="100%">
            <Heading as="h2" size="xl" mb={6} textAlign="center">
              Learning & Development
            </Heading>
            <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={{ base: 6, md: 10 }}>
              <Box
                borderWidth={1}
                borderRadius="lg"
                p={{ base: 4, md: 6 }}
                bg={useColorModeValue("white", "gray.800")}
                boxShadow="md"
                _hover={{ boxShadow: "lg" }}
                transition="all 0.3s"
                borderColor={useColorModeValue("gray.200", "gray.600")}
              >
                <Icon as={FiBook} boxSize={{ base: 8, md: 10 }} color="teal.900" mb={4} />
                <Heading size={{ base: "sm", md: "md" }} mb={2}>
                  Training Programs
                </Heading>
                <Text fontSize={{ base: "sm", md: "md" }}>
                  Access to a wide range of internal and external training programs to enhance your skills.
                </Text>
              </Box>

              <Box
                borderWidth={1}
                borderRadius="lg"
                p={{ base: 4, md: 6 }}
                bg={useColorModeValue("white", "gray.800")}
                boxShadow="md"
                _hover={{ boxShadow: "lg" }}
                transition="all 0.3s"
                borderColor={useColorModeValue("gray.200", "gray.600")}
              >
                <Icon as={FiGlobe} boxSize={{ base: 8, md: 10 }} color="teal.900" mb={4} />
                <Heading size={{ base: "sm", md: "md" }} mb={2}>
                  Conference Attendance
                </Heading>
                <Text fontSize={{ base: "sm", md: "md" }}>
                  Opportunities to attend industry-leading conferences and networking events.
                </Text>
              </Box>

              <Box
                borderWidth={1}
                borderRadius="lg"
                p={{ base: 4, md: 6 }}
                bg={useColorModeValue("white", "gray.800")}
                boxShadow="md"
                _hover={{ boxShadow: "lg" }}
                transition="all 0.3s"
                borderColor={useColorModeValue("gray.200", "gray.600")}
              >
                <Icon as={FiShield} boxSize={{ base: 8, md: 10 }} color="teal.900" mb={4} />
                <Heading size={{ base: "sm", md: "md" }} mb={2}>
                  Mentorship
                </Heading>
                <Text fontSize={{ base: "sm", md: "md" }}>
                  One-on-one mentorship programs to guide your career growth and development.
                </Text>
              </Box>
            </SimpleGrid>
          </Box>
        </VStack>
      </Container>

      {/* ✅ Modal Moved Outside Container */}
      <ApplicationForm
        isOpen={isOpen}
        onClose={onClose}
        selectedJob={selectedJob}
        onSubmit={handleFormSubmit}
        // ✅ Critical: Render in body to avoid scroll clipping
        portalProps={{ containerRef: null }}
      />
    </Box>
  );
};

export default CareersPage;