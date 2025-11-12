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
//   Menu, MenuButton, MenuList, MenuItem,
// } from '@chakra-ui/react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { FaCode, FaLaptopCode,
//    FaUsers, FaCertificate,
//    FaRocket, FaGamepad,
//    FaCheckCircle, FaStar,
//     FaGraduationCap } from 'react-icons/fa'
//     import { ChevronDownIcon } from "@chakra-ui/icons";

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
//       <Icon as={icon} w={10} h={10} color="orange.500" />
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

// export default function AboutUs() {
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
//             <Heading as="h1" size={headingSize} textAlign="center" mb={4} textColor={'orange.700'}>
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
//                     <Button colorScheme="orange" size="md" onClick={onModalOpen}>Learn More</Button>
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
//                     <Button colorScheme="orange" size="md" onClick={onModalOpen}>Learn More</Button>
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
//                     <Button colorScheme="orange" size="md" onClick={onModalOpen}>Learn More</Button>
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
//             <Menu>
//       <MenuButton
//         as={Button}
//         rightIcon={<ChevronDownIcon />}
//         backgroundColor="orange.900"
//         color="white"
//         borderRadius="2xl"
//         size="lg"
//         px={8}
//         _hover={{
//           backgroundColor: "orange.600",
//           transform: "translateY(-2px)",
//         }}
//         _expanded={{
//           backgroundColor: "orange.900", // ✅ Keeps background color orange.900 when menu is open
//         }}
//         transition="all 0.3s"
//       >
//         Explore Courses
//       </MenuButton>
//       <MenuList>
//         <MenuItem as="a" href="/it-courses"  _hover={{
//           backgroundColor: "orange.100",}}>
//           IT Courses
//         </MenuItem>
//         <MenuItem as="a" href="/Non_it-courses" _hover={{
//           backgroundColor: "orange.100",}}>
//           Non-IT Courses
//         </MenuItem>
//         </MenuList>
//     </Menu>
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
//               <Button colorScheme="orange" onClick={onModalClose}>
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
//     </Box>
//   )
// }

import { useState } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  SimpleGrid,
  Button,
  Icon,
  useColorModeValue,
  Image,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  List,
  ListItem,
  ListIcon,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Divider,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useBreakpointValue,
  Badge,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Tooltip,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCode,
  FaLaptopCode,
  FaUsers,
  FaCertificate,
  FaRocket,
  FaGamepad,
  FaCheckCircle,
  FaStar,
  FaGraduationCap,
  FaArrowRight,
  FaDownload,
  FaCalendarAlt,
  FaInfoCircle,
} from "react-icons/fa";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { teal } from "@mui/material/colors";
import { Link as RouterLink } from "react-router-dom";


const MotionBox = motion(Box);

const FeatureCard = ({ icon, title, description }) => (
  <MotionBox
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.95 }}
    p={{ base: 4, md: 5 }}
    shadow="lg"
    borderRadius="xl"
    bg={useColorModeValue("white", "gray.700")}
    height="100%"
    transition="all 0.3s"
    _hover={{
      borderColor: "teal.600",
      boxShadow: "0 0 15px rgba(49, 151, 149, 0.3)",
    }}
  >
    <VStack spacing={4} align="start">
      <Flex
        alignItems="center"
        justifyContent="center"
        w={12}
        h={12}
        rounded="full"
        bg="white"
        boxShadow="md"
      >
        <Icon as={icon} w={6} h={6} color="orange.500" />
      </Flex>
      <Heading size="md" color="teal.00">
        {title}
      </Heading>
      <Text color={useColorModeValue("gray.600", "gray.300")}>
        {description}
      </Text>
    </VStack>
  </MotionBox>
);

const TestimonialCard = ({ name, role, content }) => (
  <Box
    p={{ base: 4, md: 6 }}
    shadow="lg"
    borderWidth="1px"
    borderRadius="xl"
    bg={useColorModeValue("white", "gray.700")}
    position="relative"
    _before={{
      content: '""',
      zIndex: 0,
    }}
  >
    <Text
      fontSize="md"
      fontStyle="italic"
      mb={4}
      position="relative"
      zIndex={1}
    >
      "{content}"
    </Text>
    <HStack spacing={3}>
      <Image
        borderRadius="full"
        boxSize="50px"
        src={`https://api.dicebear.com/6.x/initials/svg?seed=${name}`}
        alt={name}
      />
      <Box>
        <Text fontWeight="bold">{name}</Text>
        <Text fontSize="sm" color="teal.900">
          {role}
        </Text>
      </Box>
    </HStack>
  </Box>
);

// const CourseTab = ({ title, description, items, onLearnMore }) => (
//   <VStack align="start" spacing={5} w="100%">
//     <Flex
//       direction={{ base: "column", md: "row" }}
//       justify="space-between"
//       align={{ base: "start", md: "center" }}
//       w="100%"
//       mb={2}
//     >
//       <Heading size="md" color="orange.700">
//         {title}
//       </Heading>
//       <Badge colorScheme="orange" fontSize="sm" mt={{ base: 2, md: 0 }}>
//         Popular Course
//       </Badge>
//     </Flex>
//     <Text>{description}</Text>
//     <List spacing={3} w="100%">
//       {items.map((item, index) => (
//         <ListItem key={index} display="flex" alignItems="flex-start">
//           <ListIcon as={FaCheckCircle} color="green.500" mt={1} />
//           <Text>{item}</Text>
//         </ListItem>
//       ))}
//     </List>
//     <Flex gap={3} mt={2} w="100%" flexWrap="wrap" justifyContent={{ base: "center", sm: "flex-start" }}>
//       <Button
//         colorScheme="orange"
//         size="md"
//         onClick={onLearnMore}
//         rightIcon={<FaArrowRight />}
//         _hover={{
//           transform: "translateY(-2px)",
//           boxShadow: "lg",
//         }}
//         transition="all 0.3s"
//       >
//         Learn More
//       </Button>
//       {/* <Button variant="outline" colorScheme="orange" size="md" leftIcon={<FaDownload />}>
//         Download Syllabus
//       </Button> */}
//       <Button variant="ghost" colorScheme="orange" size="md" leftIcon={<FaCalendarAlt />}>
//         Schedule Demo
//       </Button>
//     </Flex>
//   </VStack>
// )
const CourseTab = ({ title, description, items, onLearnMore }) => (
  <VStack align="start" spacing={5} w="100%">
    {/* Title and Badge */}
    <Flex
      direction={{ base: "column", md: "row" }}
      align={{ base: "start", md: "center" }}
      w="100%"
      mb={2}
    >
      <Heading
        size="md"
        color="teal.900"
        fontSize={{ base: "lg", md: "xl" }}
        textAlign={{ base: "center", md: "left" }}
      >
        {title}
      </Heading>
      <Badge colorScheme="orange" fontSize="sm" mt={{ base: 2, md: 0 }}>
        Popular Course
      </Badge>
    </Flex>

    {/* Description */}
    <Text
      fontSize={{ base: "sm", md: "md" }}
      textAlign={{ base: "center", md: "left" }}
    >
      {description}
    </Text>

    {/* List of items */}
    <List spacing={3} w="100%" pl={{ base: 0, md: 4 }}>
      {items.map((item, index) => (
        <ListItem key={index} display="flex" alignItems="flex-start">
          <ListIcon as={FaCheckCircle} color="green.500" mt={1} />
          <Text fontSize={{ base: "sm", md: "md" }}>{item}</Text>
        </ListItem>
      ))}
    </List>

    {/* Buttons */}
    <Flex
      gap={3}
      mt={4}
      w="100%"
      flexWrap="wrap"
      justifyContent={{ base: "center", sm: "flex-start" }}
      direction={{ base: "column", sm: "row" }}
    >
      <Button
        textColor={"white"}
        bgColor={teal[900]}
        variant="solid"
        size={{ base: "sm", md: "md" }}
        onClick={onLearnMore}
        rightIcon={<FaArrowRight />}
        _hover={{
          transform: "translateY(-2px)",
          boxShadow: "lg",
        }}
        transition="all 0.3s"
      >
        Learn More
      </Button>

      {/* Uncomment and add the Download Syllabus button */}
      {/* <Button variant="outline" colorScheme="orange" size="md" leftIcon={<FaDownload />}>
        Download Syllabus
      </Button> */}

      <Button
        variant="ghost"
        colorScheme="orange"
        size={{ base: "sm", md: "md" }} // Adjust button size for mobile and desktop
        leftIcon={<FaCalendarAlt />}
      >
        Schedule Demo
      </Button>
    </Flex>
  </VStack>
);

export default function AboutUs() {
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const textColor = useColorModeValue("gray.600", "gray.200");
  const cardBg = useColorModeValue("white", "gray.700");
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [tabIndex, setTabIndex] = useState(0);
  const {
    isOpen: isModalOpen,
    onOpen: onModalOpen,
    onClose: onModalClose,
  } = useDisclosure();
  const {
    isOpen: isContactFormOpen,
    onOpen: onContactFormOpen,
    onClose: onContactFormClose,
  } = useDisclosure();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const testimonials = [
    {
      name: "Ava",
      role: "Full Stack Developer",
      content:
        "The full stack development course gave me a solid understanding of both front-end and back-end technologies. I feel prepared to work on any web application!"
    },
    {
      name: "James",
      role: "Machine Learning Engineer",
      content:
        "I can't thank the machine learning course enough. It covered everything from basic algorithms to real-world applications, and the projects helped me hone my skills."
    },
    {
      name: "Sophia",
      role: "UX/UI Designer",
      content:
        "The UX/UI design program was amazing! The practical assignments helped me create a portfolio that landed me a job in just two months after completion."
    },
    {
      name: "Ethan",
      role: "Cybersecurity Expert",
      content:
        "The cybersecurity course gave me in-depth knowledge of network security, ethical hacking, and risk management. It completely changed my career trajectory."
    }
  ];
  

  const buttonSize = useBreakpointValue({ base: "sm", md: "md", lg: "lg" });
  const headingSize = useBreakpointValue({ base: "lg", md: "xl" });
  const textSize = useBreakpointValue({ base: "sm", md: "md" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
    onContactFormClose();
  };

  const courseData = [
    {
      title: "Web Development Path",
      description:
        "Master the art of creating modern, responsive websites and web applications.",
      items: [
        "HTML, CSS, and JavaScript fundamentals",
        "React and Redux for building interactive UIs",
        "Node.js and Express for server-side development",
        "Database integration with MongoDB",
      ],
    },
    {
      title: "Data Science Path",
      description:
        "Dive into the world of data analysis, machine learning, and artificial intelligence.",
      items: [
        "Python for data analysis",
        "Statistical analysis and visualization",
        "Machine learning algorithms",
        "Deep learning and neural networks",
      ],
    },
    {
      title: "Mobile App Development Path",
      description:
        "Create stunning mobile applications for iOS and Android platforms.",
      items: [
        "React Native for cross-platform development",
        "Native iOS development with Swift",
        "Native Android development with Kotlin",
        "App deployment and monetization strategies",
      ],
    },
  ];

  
  const TestimonialsSection = ({ testimonials, headingSize = "2xl" }) => {
    return (
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <Heading
          as="h2"
          size={headingSize}
          mb={8}
          color="black"
          textAlign="center"
          position="relative"
          _after={{
            content: '""',
            display: "block",
            width: "60px",
            height: "4px",
            bg: "orange.500",
            mt: 2,
            mx: "auto",
          }}
        >
          Student Success Stories
        </Heading>
  
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3, lg: 3, xl: 4 }}
          spacing={{ base: 6, sm: 8, md: 10, lg: 12 }}
          px={{ base: 4, md: 8 }}
          justifyItems="center"
        >
          <AnimatePresence>
            {testimonials.map((testimonial, index) => (
              <MotionBox
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5 }}
              >
                <TestimonialCard {...testimonial} />
              </MotionBox>
            ))}
          </AnimatePresence>
        </SimpleGrid>
      </MotionBox>
    );
  };
  
  return (
    <Box bg={bgColor} minH="100vh" py={{ base: 16, md: 28 }}>
      <Container maxW="container.xl" px={{ base: 4, md: 6 }}>
        <VStack spacing={{ base: 12, md: 16 }} align="stretch">
          {/* Hero Section */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            textAlign="center"
            py={{ base: 8, md: 12 }}
            px={{ base: 4, md: 8 }}
            borderRadius="xl"
            bg="linear-gradient(to right, rgb(24, 65, 52),  rgb(24, 65, 52))"
          >
            <Heading
              as="h1"
              size={headingSize}
              mb={4}
              textColor={"white"}
              bgGradient="linear(to-r, white, white)"
              bgClip="text"
              fontWeight="extrabold"
            >
              Welcome to the Prefcol Edutech Solutions Private Limited
            </Heading>
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              textAlign="center"
              color="white"
              maxW="container.md"
              mx="auto"
            >
              Unlock your potential in the digital age through the power of
              coding.
            </Text>
          </MotionBox>

          {/* Mission Section */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            p={{ base: 6, md: 8 }}
            borderRadius="xl"
            bg={cardBg}
            shadow="md"
          >
            <Heading
              as="h2"
              size={headingSize}
              mb={4}
              color="black"
              position="relative"
              _after={{
                content: '""',
                display: "block",
                width: "60px",
                height: "4px",
                bg: "orange.500",
                mt: 2,
              }}
            >
              Our Mission
            </Heading>
            <Text fontSize={textSize} color={textColor} lineHeight="tall">
              To make coding a universal language that empowers individuals to
              create, innovate, and thrive in the digital world. We break down
              barriers to coding education, making it accessible, interactive,
              and enjoyable for everyone.
            </Text>
          </MotionBox>

          {/* What We Offer Section */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Heading
              as="h2"
              size={headingSize}
              mb={8}
              color="black"
              textAlign="center"
              position="relative"
              _after={{
                content: '""',
                display: "block",
                width: "60px",
                height: "4px",
                bg: "orange.500",
                mt: 2,
                mx: "auto",
              }}
            >
              What We Offer
            </Heading>
            <SimpleGrid
              columns={{ base: 1, sm: 2, lg: 3 }}
              spacing={{ base: 5, md: 10 }}
              px={{ base: 0, md: 4 }}
            >
              <FeatureCard
                icon={FaCode}
                title="Comprehensive Courses"
                description="From basics to advanced topics, our courses cover a wide range of programming skills."
              />
              <FeatureCard
                icon={FaLaptopCode}
                title="Interactive Learning"
                description="Engage with hands-on exercises, projects, and real-world problem-solving."
              />
              <FeatureCard
                icon={FaUsers}
                title="Expert Instructors"
                description="Learn from industry professionals with years of experience."
              />
              <FeatureCard
                icon={FaCertificate}
                title="Certification"
                description="Earn certificates to showcase your skills to potential employers."
              />
              <FeatureCard
                icon={FaRocket}
                title="Career Support"
                description="Get help with resume reviews, interview prep, and job placement."
              />
              <FeatureCard
                icon={FaGamepad}
                title="Gamified Experience"
                description="Earn badges, compete on leaderboards, and track your progress."
              />
            </SimpleGrid>
          </MotionBox>

          {/* Courses Section */}
<MotionBox
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.6 }}
  p={{ base: 4, md: 8 }}
  borderRadius="xl"
  bg={cardBg}
  shadow="md"
>
  <Heading
    as="h2"
    size={{ base: "lg", md: "xl" }}
    mb={{ base: 4, md: 6 }}
    color="black"
    position="relative"
    _after={{
      content: '""',
      display: "block",
      width: "60px",
      height: "4px",
      bg: "orange.500",
      mt: 2,
    }}
  >
    Our Courses
  </Heading>

  <Tabs
    isFitted
    variant="soft-rounded"
    colorScheme="orange"
    onChange={(index) => setTabIndex(index)}
    index={tabIndex}
  >
    <TabList
      mb={{ base: "1em", md: "1.5em" }} 
      overflowX="auto"
      overflowY="hidden"
      gap={4}
      p={1}
      css={{
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": { display: "none" },
      }}
    >
      <Tab
        _selected={{
          color: "white",
          bg: "teal.900",
          fontWeight: "bold",
          transform: "scale(1.05)",
        }}
        _hover={{ bg: "gray.200",textColor:"black" }}
        borderRadius="full"
        mx={1}
        transition="all 0.3s"
        fontSize={{ base: "xs", md: "md" }} 
        minWidth={{ base: "auto", md: "120px" }}
      >
        Web
      </Tab>
      <Tab
        _selected={{
          color: "white",
          bg: "teal.900",
          fontWeight: "bold",
          transform: "scale(1.05)",
        }}
        _   _hover={{ bg: "gray.200",textColor:"black" }}
        borderRadius="full"
        mx={1}
        transition="all 0.3s"
        fontSize={{ base: "xs", md: "md" }} 
        minWidth={{ base: "auto", md: "120px" }}
      >
        Data Science
      </Tab>
      <Tab
        _selected={{
          color: "white",
          bg: "teal.900",
          fontWeight: "bold",
          transform: "scale(1.05)",
        }}
        _hover={{ bg: "gray.200",textColor:"black" }}
        borderRadius="full"
        mx={1}
        transition="all 0.3s"
        fontSize={{ base: "xs", md: "md" }} 
        minWidth={{ base: "auto", md: "120px" }}
      >
        Mobile App
      </Tab>
    </TabList>

    <TabPanels
      bg={useColorModeValue("gray.50", "gray.700")}
      borderRadius="xl"
      p={{ base: 4, md: 6 }}
    >
      {courseData.map((course, index) => (
        <TabPanel key={index}>
          <CourseTab
            title={course.title}
            description={course.description}
            items={course.items}
            onLearnMore={onModalOpen}
          />
        </TabPanel>
      ))}
    </TabPanels>
  </Tabs>

  <Flex justify="center" mt={{ base: 4, md: 6 }} gap={3}>
    <Tooltip label="Previous course">
      <IconButton
        aria-label="Previous course"
        icon={<Icon as={FaArrowRight} transform="rotate(180deg)" />}
        colorScheme="black"
        variant="outline"
        isDisabled={tabIndex === 0}
        onClick={() => setTabIndex(tabIndex - 1)}
        isRound
        size={{ base: "sm", md: "md" }}
      />
    </Tooltip>
    <Tooltip label="Next course">
      <IconButton
        aria-label="Next course"
        icon={<Icon as={FaArrowRight} />}
        colorScheme="black"
        variant="outline"
        isDisabled={tabIndex === 2}
        onClick={() => setTabIndex(tabIndex + 1)}
        isRound
        size={{ base: "sm", md: "md" }}
      />
    </Tooltip>
  </Flex>
</MotionBox>

          {/* Testimonials Section */}
         
 <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      <Heading
        as="h2"
        size={headingSize}
        mb={8}
        color="black"
        textAlign="center"
        position="relative"
        _after={{
          content: '""',
          display: "block",
          width: "60px",
          height: "4px",
          bg: "orange.500",
          mt: 2,
          mx: "auto",
        }}
      >
        Student Success Stories
      </Heading>

      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3, lg: 3, xl: 4 }} 
        spacing={{ base: 6, sm: 8, md: 10, lg: 12 }}         
        px={{ base: 4, sm: 6, md: 10, lg: 22 }}                
        justifyItems="center"
      >
        <AnimatePresence>
          {testimonials.map((testimonial, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
            >
              <TestimonialCard {...testimonial} />
            </MotionBox>
          ))}
        </AnimatePresence>
      </SimpleGrid>
    </MotionBox>
          {/* Stats Section */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            p={{ base: 6, md: 8 }}
            borderRadius="xl"
            bg={cardBg}
            shadow="md"
          >
            <Heading
              as="h2"
              size={headingSize}
              mb={8}
              color="black"
              textAlign="center"
              position="relative"
              _after={{
                content: '""',
                font: "Times New Roman",
                textDecoration: "none",
                fontStyle: "italic",
                display: "block",
                width: "60px",
                height: "4px",
                bg: "orange.500",
                mt: 2,
                mx: "auto",
              }}
            >
              Why Choose Prefcol Edutech Solutions?
            </Heading>
            <SimpleGrid
              columns={{ base: 1, md: 3 }}
              spacing={{ base: 8, md: 10 }}
              px={{ base: 0, md: 4 }}
            >
              <Stat
                p={5}
                borderRadius="2xl"
                bg="orange.50"
                textAlign="center"
                _hover={{
                  transform: "translateY(-5px)",
                  boxShadow: "lg",
                }}
                transition="all 0.3s"
              >
                <StatLabel fontSize="lg" fontWeight="medium" color="black.700">
                  Active Students
                </StatLabel>
                <StatNumber fontSize="4xl" fontWeight="bold" color="orange.600">
                  10,000+
                </StatNumber>
                <StatHelpText
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  gap={2}
                >
                  <FaUsers color="orange" /> Growing community
                </StatHelpText>
              </Stat>
              <Stat
                p={5}
                borderRadius="2xl"
                bg="orange.50"
                textAlign="center"
                _hover={{
                  transform: "translateY(-5px)",
                  boxShadow: "lg",
                }}
                transition="all 0.3s"
              >
                <StatLabel fontSize="lg" fontWeight="medium" color="black.700">
                  Course Completion Rate
                </StatLabel>
                <StatNumber fontSize="4xl" fontWeight="bold" color="orange.600">
                  92%
                </StatNumber>
                <StatHelpText
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  gap={2}
                >
                  <FaGraduationCap color="orange" /> High success rate
                </StatHelpText>
              </Stat>
              <Stat
                p={5}
                borderRadius="2xl"
                bg="orange.50"
                textAlign="center"
                _hover={{
                  transform: "translateY(-5px)",
                  boxShadow: "lg",
                }}
                transition="all 0.3s"
              >
                <StatLabel fontSize="lg" fontWeight="medium" color="black.700">
                  Student Satisfaction
                </StatLabel>
                <StatNumber fontSize="4xl" fontWeight="bold" color="orange.600">
                  4.8/5
                </StatNumber>
                <StatHelpText
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  gap={2}
                >
                  <FaStar color="orange" /> Based on 5000+ reviews
                </StatHelpText>
              </Stat>
            </SimpleGrid>
          </MotionBox>

          <Divider />

          {/* CTA Section */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            textAlign="center"
            p={{ base: 6, md: 10 }}
            borderRadius="xl"
            bg="linear-gradient(to right, rgba(255, 255, 255, 0.93), rgba(88, 129, 93, 0.22))"
          >
            <Heading
              as="h2"
              size={headingSize}
              mb={6}
              color="black"
              bgGradient="linear(to-r, black, black)"
              bgClip="text"
              fontWeight="extrabold"
            >
              Start Your Coding Journey Today
            </Heading>
            <Text
              fontSize={textSize}
              color={textColor}
              mb={8}
              maxW="container.md"
              mx="auto"
            >
              Whether you're looking to launch a career in tech, build your own
              projects, or simply gain a valuable skill, we are here to help you
              achieve your goals. Join our community of learners and start your
              journey to becoming a coding expert.
            </Text>
            <Flex
              spacing={4}
              justify="center"
              align="center"
              direction={{ base: "column", sm: "row" }}
              gap={4}
            >
              <Menu>
                <MenuButton
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                  backgroundColor="orange.700"
                  color="white"
                  borderRadius="2xl"
                  size="lg"
                  px={8}
                  _hover={{
                    backgroundColor: "orange.600",
                    transform: "translateY(-2px)",
                    boxShadow: "lg",
                  }}
                  _expanded={{
                    backgroundColor: "orange.700",
                  }}
                  transition="all 0.3s"
                >
                  Explore Courses
                </MenuButton>
                <MenuList>
                  <MenuItem
                    as={RouterLink}
      to="/it-courses"
                    _hover={{ backgroundColor: "orange.100" }}
                    icon={<FaCode />}
                  >
                    IT Courses
                  </MenuItem>
                  <MenuItem
                    as={RouterLink}
      to="/Non_it-courses"
                    _hover={{ backgroundColor: "orange.100" }}
                    icon={<FaGraduationCap />}
                  >
                    Non-IT Courses
                  </MenuItem>
                </MenuList>
              </Menu>
              <Button
                leftIcon={<FaInfoCircle />}
                colorScheme="orange"
                variant="outline"
                size="lg"
                _hover={{
                  transform: "translateY(-2px)",
                  boxShadow: "md",
                }}
                transition="all 0.3s"
              >
                Request Information
              </Button>
            </Flex>
          </MotionBox>
        </VStack>
      </Container>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={onModalClose} size="xl">
        <ModalOverlay backdropFilter="blur(2px)" />
        <ModalContent borderRadius="xl">
          <ModalHeader
            bg="orange.500"
            color="white"
            borderTopRadius="xl"
            py={4}
          >
            Get Started with Prefcol Edutech Solutions
          </ModalHeader>
          <ModalCloseButton color="white" />
          <ModalBody py={6}>
            <VStack spacing={5} align="stretch">
              <Text>
                Thank you for your interest in Chamber of Learning! We're
                excited to help you start your coding journey.
              </Text>
              <Text>
                To get started, please choose one of the following options:
              </Text>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                <Button
                  colorScheme="orange"
                  size="lg"
                  leftIcon={<FaCode />}
                  onClick={onModalClose}
                  _hover={{
                    transform: "translateY(-2px)",
                    boxShadow: "md",
                  }}
                  transition="all 0.3s"
                >
                  Browse Our Course Catalog
                </Button>
                <Button
                  colorScheme="blue"
                  size="lg"
                  leftIcon={<FaUsers />}
                  onClick={onModalClose}
                  _hover={{
                    transform: "translateY(-2px)",
                    boxShadow: "md",
                  }}
                  transition="all 0.3s"
                >
                  Create a Free Account
                </Button>
                <Button
                  colorScheme="green"
                  size="lg"
                  leftIcon={<FaCalendarAlt />}
                  onClick={onModalClose}
                  _hover={{
                    transform: "translateY(-2px)",
                    boxShadow: "md",
                  }}
                  transition="all 0.3s"
                  gridColumn={{ md: "span 2" }}
                >
                  Schedule a Free Consultation
                </Button>
              </SimpleGrid>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button
              variant="ghost"
              onClick={onModalClose}
              _hover={{
                bg: "orange.50",
              }}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
