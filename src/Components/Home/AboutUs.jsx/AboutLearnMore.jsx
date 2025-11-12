// import React, { useState } from 'react'
// import {
//   Box,
//   Container,
//   Heading,
//   Text,
//   VStack,
//   HStack,
//   SimpleGrid,
//   Button,
//   Icon,
//   useColorModeValue,
//   Image,
//   Tabs,
//   TabList,
//   TabPanels,
//   Tab,
//   TabPanel,
//   List,
//   ListItem,
//   ListIcon,
//   Stat,
//   StatLabel,
//   StatNumber,
//   StatHelpText,
//   Divider,
//   useDisclosure,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalFooter,
//   ModalBody,
//   ModalCloseButton,
//   useBreakpointValue,
//   FormControl,
//   FormLabel,
//   Input,
//   Textarea,
// } from '@chakra-ui/react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { FaCode, FaLaptopCode, FaUsers, FaCertificate, FaRocket, FaGamepad, FaCheckCircle, FaStar, FaGraduationCap } from 'react-icons/fa'

// const MotionBox = motion(Box)

// const FeatureCard = ({ icon, title, description }) => (
//   <MotionBox
//     whileHover={{ scale: 1.05 }}
//     whileTap={{ scale: 0.95 }}
//     p={5}
//     shadow="md"
//     borderWidth="1px"
//     borderRadius="md"
//     bg={useColorModeValue('white', 'gray.700')}
//   >
//     <VStack spacing={3} align="start">
//       <Icon as={icon} w={10} h={10} color="teal.500" />
//       <Heading size="md">{title}</Heading>
//       <Text>{description}</Text>
//     </VStack>
//   </MotionBox>
// )

// const TestimonialCard = ({ name, role, content }) => (
//   <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" bg={useColorModeValue('white', 'gray.700')}>
//     <Text fontSize="md" fontStyle="italic" mb={4}>
//       "{content}"
//     </Text>
//     <HStack>
//       <Image
//         borderRadius="full"
//         boxSize="50px"
//         src={`https://api.dicebear.com/6.x/initials/svg?seed=${name}`}
//         alt={name}
//       />
//       <Box>
//         <Text fontWeight="bold">{name}</Text>
//         <Text fontSize="sm">{role}</Text>
//       </Box>
//     </HStack>
//   </Box>
// )

// export default function AboutLearnMore() {
//   const bgColor = useColorModeValue('gray.50', 'gray.800')
//   const textColor = useColorModeValue('gray.600', 'gray.200')
//   const [activeTestimonial, setActiveTestimonial] = useState(0)
//   const { isOpen: isModalOpen, onOpen: onModalOpen, onClose: onModalClose } = useDisclosure()
//   const { isOpen: isContactFormOpen, onOpen: onContactFormOpen, onClose: onContactFormClose } = useDisclosure()

//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     subject: '',
//     message: '',
//   })

//   const testimonials = [
//     {
//       name: "Mani",
//       role: "Web Developer",
//       content: "Chamber of Learning transformed my career. I went from a complete beginner to a confident web developer in just a few months!"
//     },
//     {
//       name: "Guna",
//       role: "Data Scientist",
//       content: "The data science course was incredibly comprehensive. The hands-on projects really helped me understand complex concepts."
//     },
//     {
//       name: "Hari",
//       role: "Mobile App Developer",
//       content: "I loved the flexibility of the mobile app development course. I could learn at my own pace while still receiving great support from instructors."
//     }
//   ]

//   const buttonSize = useBreakpointValue({ base: "sm", md: "md", lg: "lg" })
//   const headingSize = useBreakpointValue({ base: "lg", md: "xl" })
//   const textSize = useBreakpointValue({ base: "sm", md: "md" })

//   const handleChange = (e) => {
//     const { name, value } = e.target
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }))
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     // Handle form submission logic here
//     console.log(formData)
//     onContactFormClose()
//   }

//   return (
//     <Box bg={bgColor} minH="100vh" py={28}>
//       <Container maxW="container.xl">
//         <VStack spacing={16} align="stretch">
//           <MotionBox
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <Heading as="h1" size={headingSize} textAlign="center" mb={4} textColor={'teal.700'}>
//               Welcome to the Chamber of Learning
//             </Heading>
//             <Text fontSize={textSize} textAlign="center" color={textColor}>
//               Unlock your potential in the digital age through the power of coding.
//             </Text>
//           </MotionBox>

//           <MotionBox
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//           >
//             <Heading as="h2" size={headingSize} mb={4}>
//               Our Mission
//             </Heading>
//             <Text fontSize={textSize} color={textColor}>
//               To make coding a universal language that empowers individuals to create, innovate, and thrive in the digital world. We break down barriers to coding education, making it accessible, interactive, and enjoyable for everyone.
//             </Text>
//           </MotionBox>

//           <MotionBox
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.4 }}
//           >
//             <Heading as="h2" size={headingSize} mb={6}>
//               What We Offer
//             </Heading>
//             <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
//               <FeatureCard
//                 icon={FaCode}
//                 title="Comprehensive Courses"
//                 description="From basics to advanced topics, our courses cover a wide range of programming skills."
//               />
//               <FeatureCard
//                 icon={FaLaptopCode}
//                 title="Interactive Learning"
//                 description="Engage with hands-on exercises, projects, and real-world problem-solving."
//               />
//               <FeatureCard
//                 icon={FaUsers}
//                 title="Expert Instructors"
//                 description="Learn from industry professionals with years of experience."
//               />
//               <FeatureCard
//                 icon={FaCertificate}
//                 title="Certification"
//                 description="Earn certificates to showcase your skills to potential employers."
//               />
//               <FeatureCard
//                 icon={FaRocket}
//                 title="Career Support"
//                 description="Get help with resume reviews, interview prep, and job placement."
//               />
//               <FeatureCard
//                 icon={FaGamepad}
//                 title="Gamified Experience"
//                 description="Earn badges, compete on leaderboards, and track your progress."
//               />
//             </SimpleGrid>
//           </MotionBox>

//           <MotionBox
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.6 }}
//           >
//             <Heading as="h2" size={headingSize} mb={6}>
//               Our Courses
//             </Heading>
//             <Tabs isFitted variant="enclosed">
//               <TabList mb="1em">
//                 <Tab>Web Development</Tab>
//                 <Tab>Data Science</Tab>
//                 <Tab>Mobile App Development</Tab>
//               </TabList>
//               <TabPanels>
//                 <TabPanel>
//                   <VStack align="start" spacing={4}>
//                     <Heading size="md">Web Development Path</Heading>
//                     <Text>Master the art of creating modern, responsive websites and web applications.</Text>
//                     <List spacing={3}>
//                       <ListItem>
//                         <ListIcon as={FaCheckCircle} color="green.500" />
//                         HTML, CSS, and JavaScript fundamentals
//                       </ListItem>
//                       <ListItem>
//                         <ListIcon as={FaCheckCircle} color="green.500" />
//                         React and Redux for building interactive UIs
//                       </ListItem>
//                       <ListItem>
//                         <ListIcon as={FaCheckCircle} color="green.500" />
//                         Node.js and Express for server-side development
//                       </ListItem>
//                       <ListItem>
//                         <ListIcon as={FaCheckCircle} color="green.500" />
//                         Database integration with MongoDB
//                       </ListItem>
//                     </List>
//                     <Button colorScheme="teal" size="md" onClick={onModalOpen}>Learn More</Button>
//                   </VStack>
//                 </TabPanel>
//                 <TabPanel>
//                   <VStack align="start" spacing={4}>
//                     <Heading size="md">Data Science Path</Heading>
//                     <Text>Dive into the world of data analysis, machine learning, and artificial intelligence.</Text>
//                     <List spacing={3}>
//                       <ListItem>
//                         <ListIcon as={FaCheckCircle} color="green.500" />
//                         Python for data analysis
//                       </ListItem>
//                       <ListItem>
//                         <ListIcon as={FaCheckCircle} color="green.500" />
//                         Statistical analysis and visualization
//                       </ListItem>
//                       <ListItem>
//                         <ListIcon as={FaCheckCircle} color="green.500" />
//                         Machine learning algorithms
//                       </ListItem>
//                       <ListItem>
//                         <ListIcon as={FaCheckCircle} color="green.500" />
//                         Deep learning and neural networks
//                       </ListItem>
//                     </List>
//                     <Button colorScheme="teal" size="md" onClick={onModalOpen}>Learn More</Button>
//                   </VStack>
//                 </TabPanel>
//                 <TabPanel>
//                   <VStack align="start" spacing={4}>
//                     <Heading size="md">Mobile App Development Path</Heading>
//                     <Text>Create stunning mobile applications for iOS and Android platforms.</Text>
//                     <List spacing={3}>
//                       <ListItem>
//                         <ListIcon as={FaCheckCircle} color="green.500" />
//                         React Native for cross-platform development
//                       </ListItem>
//                       <ListItem>
//                         <ListIcon as={FaCheckCircle} color="green.500" />
//                         Native iOS development with Swift
//                       </ListItem>
//                       <ListItem>
//                         <ListIcon as={FaCheckCircle} color="green.500" />
//                         Native Android development with Kotlin
//                       </ListItem>
//                       <ListItem>
//                         <ListIcon as={FaCheckCircle} color="green.500" />
//                         App deployment and monetization strategies
//                       </ListItem>
//                     </List>
//                     <Button colorScheme="teal" size="md" onClick={onModalOpen}>Learn More</Button>
//                   </VStack>
//                 </TabPanel>
//               </TabPanels>
//             </Tabs>
//           </MotionBox>

//           <MotionBox
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.8 }}
//           >
//             <Heading as="h2" size={headingSize} mb={6}>
//               Student Success Stories
//             </Heading>
//             <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
//               <AnimatePresence>
//                 {testimonials.map((testimonial, index) => (
//                   <MotionBox
//                     key={index}
//                     initial={{ opacity: 0, x: -50 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     exit={{ opacity: 0, x: 50 }}
//                     transition={{ duration: 0.5 }}
//                   >
//                     <TestimonialCard {...testimonial} />
//                   </MotionBox>
//                 ))}
//               </AnimatePresence>
//             </SimpleGrid>
//           </MotionBox>

//           <MotionBox
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 1 }}
//           >
//             <Heading as="h2" size={headingSize} mb={6}>
//               Why Choose Chamber of Learning?
//             </Heading>
//             <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
//               <Stat>
//                 <StatLabel>Active Students</StatLabel>
//                 <StatNumber>10,000+</StatNumber>
//                 <StatHelpText>
//                   <FaUsers /> Growing community
//                 </StatHelpText>
//               </Stat>
//               <Stat>
//                 <StatLabel>Course Completion Rate</StatLabel>
//                 <StatNumber>92%</StatNumber>
//                 <StatHelpText>
//                   <FaGraduationCap /> High success rate
//                 </StatHelpText>
//               </Stat>
//               <Stat>
//                 <StatLabel>Student Satisfaction</StatLabel>
//                 <StatNumber>4.8/5</StatNumber>
//                 <StatHelpText>
//                   <FaStar /> Based on 5000+ reviews
//                 </StatHelpText>
//               </Stat>
//             </SimpleGrid>
//           </MotionBox>

//           <Divider />

//           <MotionBox
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 1.2 }}
//           >
//             <Heading as="h2" size={headingSize} mb={6}>
//               Start Your Coding Journey Today
//             </Heading>
//             <Text fontSize={textSize} color={textColor} mb={6}>
//               Whether you're looking to launch a career in tech, build your own projects, or simply gain a valuable skill, we are here to help you achieve your goals. Join our community of learners and start your journey to becoming a coding expert.
//             </Text>
//             <HStack spacing={4} justify="center">
//               <Button
//                 as="a"
//                 href="/online-course"
//                 backgroundColor="teal.600"
//                 color="white"
//                 borderRadius="lg"
//                 size={buttonSize}
//                 px={8}
//                 _hover={{
//                   backgroundColor: "teal.700",
//                   transform: "translateY(-2px)",
//                 }}
//                 transition="all 0.3s"
//               >
//                 Explore Courses
//               </Button>
//               {/* <Button
//                 onClick={onContactFormOpen}
//                 backgroundColor="blue.600"
//                 color="white"
//                 borderRadius="lg"
//                 size={buttonSize}
//                 px={8}
//                 _hover={{
//                   backgroundColor: "blue.700",
//                   transform: "translateY(-2px)",
//                 }}
//                 transition="all 0.3s"
//               >
//                 Get in Touch
//               </Button> */}
//             </HStack>
//           </MotionBox>
//         </VStack>
//       </Container>

//       <Modal isOpen={isModalOpen} onClose={onModalClose} size="xl">
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>Get Started with Chamber of Learning</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody>
//             <VStack spacing={4} align="stretch">
//               <Text>
//                 Thank you for your interest in Chamber of Learning! We're excited to help you start your coding journey.
//               </Text>
//               <Text>
//                 To get started, please choose one of the following options:
//               </Text>
//               <Button colorScheme="teal" onClick={onModalClose}>
//                 Browse Our Course Catalog
//               </Button>
//               <Button colorScheme="blue" onClick={onModalClose}>
//                 Create a Free Account
//               </Button>
//               <Button colorScheme="green" onClick={onModalClose}>
//                 Schedule a Free Consultation
//               </Button>
//             </VStack>
//           </ModalBody>
//           <ModalFooter>
//             <Button variant="ghost" onClick={onModalClose}>Close</Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>

//       {/* <Modal isOpen={isContactFormOpen} onClose={onContactFormClose} size="xl">
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>Contact Us</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody>
//             <VStack spacing={4} pb={10} align="stretch">
//               <Text fontSize="md">We would love to hear from you! Please fill out the form below.</Text>
//               <form onSubmit={handleSubmit}>
//                 <FormControl id="firstName" isRequired>
//                   <FormLabel>First Name</FormLabel>
//                   <Input
//                     type="text"
//                     name="firstName"
//                     value={formData.firstName}
//                     onChange={handleChange}
//                     placeholder="Enter your first name"
//                   />
//                 </FormControl>
//                 <FormControl id="lastName" isRequired>
//                   <FormLabel>Last Name</FormLabel>
//                   <Input
//                     type="text"
//                     name="lastName"
//                     value={formData.lastName}
//                     onChange={handleChange}
//                     placeholder="Enter your last name"
//                   />
//                 </FormControl>
//                 <FormControl id="email" isRequired>
//                   <FormLabel>Email Address</FormLabel>
//                   <Input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     placeholder="Enter your email"
//                   />
//                 </FormControl>
//                 <FormControl id="phone">
//                   <FormLabel>Phone Number</FormLabel>
//                   <Input
//                     type="tel"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     placeholder="Enter your phone number (optional)"
//                   />
//                 </FormControl>
//                 <FormControl id="subject" isRequired>
//                   <FormLabel>Subject</FormLabel>
//                   <Input
//                     type="text"
//                     name="subject"
//                     value={formData.subject}
//                     onChange={handleChange}
//                     placeholder="Enter the subject of your message"
//                   />
//                 </FormControl>
//                 <FormControl id="message" isRequired>
//                   <FormLabel>Message</FormLabel>
//                   <Textarea
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     placeholder="Enter your message"
//                     rows={4}
//                   />
//                 </FormControl>
//                 <Button type="submit" colorScheme="teal" size="lg" width="full" mt={6}>
//                   Send Message
//                 </Button>
//               </form>
//             </VStack>
//           </ModalBody>
//           <ModalFooter>
//             <Button variant="ghost" onClick={onContactFormClose}>
//               Close
//             </Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal> */}
//     </Box>
//   )
// }