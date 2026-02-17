// import React, { useEffect,useState } from "react";
// import {
//   Box,
//   Container,
//   VStack,
//   Heading,
//   Text,
//   Button,
//   useDisclosure,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalFooter,
//   ModalBody,
//   ModalCloseButton,
//   useBreakpointValue,
//   useColorMode,
//   useColorModeValue,
//   SimpleGrid,
//   Flex,
//   Image,
//   Grid,
//   GridItem,
// } from "@chakra-ui/react";
// import { FaLaptopCode, FaGraduationCap, FaClock, FaArrowRight, FaBook, FaUsers, FaQuoteLeft, FaSun, FaMoon, FaChevronUp, FaCommentDots, FaTimes } from "react-icons/fa";
// import { Parallax } from "react-parallax";
// import Lenis from "@studio-freight/lenis";
// import EnhancedCareerGuidance from "../Courses/Courses";
// import Hero from "../assets/HeroBoy.png";
// import Mentor from "../assets/Mentor.png";
// import FindHero from "../assets/FindHero.png";
// import bgImage from "../assets/HomeBg.jpeg";
// import AnimatedStat from "../Stat/AnimatedStat";
// import { LazyLoadImage } from "react-lazy-load-image-component";

// const stats = [
//   {
//     title: "Courses Offered",
//     count: 120,
//     description: "Courses available for enrollment",
//     duration: 2000,
//     color: "teal.600",
//   },
//   {
//     title: "Students Enrolled",
//     count: 8500,
//     description: "Students currently enrolled in all courses",
//     duration: 2500,
//     color: "purple.600",
//   },
//   {
//     title: "Completed Courses",
//     count: 7000,
//     description: "Courses successfully completed by students",
//     duration: 3000,
//     color: "blue.600",
//   },
//   {
//     title: "Active Instructors",
//     count: 50,
//     description: "Instructors teaching on the platform",
//     duration: 1500,
//     color: "orange.600",
//   },
// ];

// const CourseCard = ({ name, icon, description, href }) => {
//   const [isHovered, setIsHovered] = useState(false);
//   const bgColor = useColorModeValue("white", "gray.800");
//   const textColor = useColorModeValue("gray.800", "white");
//   const hoverBgColor = useColorModeValue("rgba(255, 255, 255, 0.9)", "rgba(26, 32, 44, 0.9)");
//   const accentColor = useColorModeValue("teal.500", "teal.300");

//   return (
//     <MotionBox
//       position="relative"
//       height="300px"
//       rounded="lg"
//       overflow="hidden"
//       onHoverStart={() => setIsHovered(true)}
//       onHoverEnd={() => setIsHovered(false)}
//       whileHover={{ scale: 1.05 }}
//       transition={{ duration: 0.3 }}
//     >
//       <Box
//         bg={bgColor}
//         p={6}
//         height="100%"
//         borderWidth="1px"
//         borderColor={useColorModeValue("gray.200", "gray.700")}
//         position="relative"
//         zIndex={1}
//       >
//         <VStack spacing={4} align="start" height="100%">
//           <Icon
//             as={icon}
//             w={12}
//             h={12}
//             color={accentColor}
//           />
//           <Heading as="h3" fontSize="xl" fontWeight="bold" color={textColor}>
//             {name}
//           </Heading>
//           <Text color={useColorModeValue("gray.600", "gray.300")} fontSize="sm">
//             {description}
//           </Text>
//         </VStack>
//       </Box>
//       <Box
//         position="absolute"
//         top={0}
//         left={0}
//         right={0}
//         bottom={0}
//         bg={`linear-gradient(135deg, ${accentColor} 0%, transparent 50%)`}
//         opacity={0.1}
//         zIndex={0}
//       />
//       <AnimatePresence>
//         {isHovered && (
//           <MotionBox
//             position="absolute"
//             top={0}
//             left={0}
//             right={0}
//             bottom={0}
//             bg={hoverBgColor}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.2 }}
//             display="flex"
//             alignItems="center"
//             justifyContent="center"
//             backdropFilter="blur(4px)"
//             zIndex={2}
//           >
//             <MotionBox
//               as="a"
//               href={href}
//               px={5}
//               py={3}
//               borderWidth="2px"
//               borderColor={accentColor}
//               rounded="lg"
//               fontWeight="semibold"
//               color={accentColor}
//               bg={useColorModeValue("white", "gray.800")}
//               display="inline-flex"
//               alignItems="center"
//               initial={{ y: 20, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               exit={{ y: 20, opacity: 0 }}
//               transition={{ delay: 0.1 }}
//               _hover={{
//                 bg: accentColor,
//                 color: "white",
//               }}
//             >
//               Explore Courses
//               <Icon as={FaArrowRight} w={4} h={4} ml={2} />
//             </MotionBox>
//           </MotionBox>
//         )}
//       </AnimatePresence>
//     </MotionBox>
//   );
// };

// export default function HomePage() {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const cardWidth = useBreakpointValue({ base: "full", md: "calc(25% - 1rem)" });

//   const headingSize = useBreakpointValue({ base: "2xl", md: "3xl", lg: "4xl" });
//   const textSize = useBreakpointValue({ base: "md", md: "lg", lg: "xl" });
//   const buttonSize = useBreakpointValue({ base: "sm", md: "md", lg: "lg" });
//   const containerPadding = useBreakpointValue({ base: 4, md: 8, lg: 12 });

//   const bgColor = useColorModeValue("gray.50", "gray.900");
//   const textColor = useColorModeValue("black", "white");
//   const buttonColor = useColorModeValue("teal.500", "teal.300");
//   const bgGradient = useColorModeValue(
//     "linear(to-br, rgba(0,0,0,0.5), rgba(255,255,255,0.2))",
//     "linear(to-br, rgba(255,255,255,0.2), rgba(0,0,0,0.8))"
//   );

//   return (
//     <Box bg={bgColor} color={textColor} minHeight="100vh">

//       <Parallax
//         bgImage={bgImage}
//         bgImageStyle={{ objectFit: "cover", width: "100%", height: "100%" }}
//         strength={500}

//       >
//         <Box
//           minHeight={{ base: "100vh", md: "80vh" }}
//           position="relative"
//           overflow="hidden"

//         >
//           <Box
//             position="absolute"
//             top="0"
//             left="0"
//             right="0"
//             bottom="0"
//             bgGradient={bgGradient}
//             zIndex="1"

//           />
//           <Container maxW="container.xl" p={containerPadding} position="relative" zIndex="2">
//             <Flex
//               direction={{ base: "column", lg: "row" }}
//               align="center"
//               justify="space-between"
//               minHeight="inherit"
//               pt={{ base: 20, md: 20 }}
//             >
//               <VStack
//                 spacing={6}
//                 textAlign={{ base: "center", lg: "left" }}
//                 align={{ base: "center", lg: "flex-start" }}
//                 maxW={{ base: "100%", lg: "50%" }}
//                 mb={{ base: 12, lg: 0 }}
//               >
//                 <Heading
//                   as="h1"
//                   size={headingSize}
//                   fontWeight="bold"
//                   color="white"
//                   textShadow="2px 2px 8px rgba(0,0,0,0.7)"
//                 >
//                   Kick Start Your Career!
//                 </Heading>
//                 <Text
//                   fontSize={textSize}
//                   maxW="600px"
//                   color="white"
//                   textShadow="1px 1px 4px rgba(0,0,0,0.6)"
//                 >
//                   Join our engaging e-learning platform.
//                 </Text>
//                 <Button
//                   as="a"
//                   href="/it-courses"
//                   backgroundColor="teal.600"
//                   color="white"
//                   borderRadius="full"
//                   size={buttonSize}
//                   px={8}
//                   _hover={{
//                     backgroundColor: "teal.700",
//                     transform: "translateY(-2px)",
//                   }}
//                   transition="all 0.3s"
//                 >
//                   Get Started
//                 </Button>
//               </VStack>

//               <Flex
//                 position="relative"
//                 width={{ base: "100%", lg: "50%" }}
//                 height={{ base: "300px", md: "400px", lg: "100%" }}
//                 justify="center"
//                 align="bottom"
//               >
//                 <Image
//                   src={Mentor}
//                   alt="Mentor"
//                   position="absolute"
//                   top={{ base: "0", lg: "10%" }}
//                   left={{ base: "0", lg: "0" }}
//                   width={{ base: "50%", sm: "40%", md: "30%", lg: "45%" }}
//                   height="auto"
//                   objectFit="contain"
//                   borderRadius="lg"
//                   boxShadow="lg"
//                   zIndex="2"
//                   transition="transform 0.3s ease-in-out"
//                   _hover={{ transform: "scale(1.05)" }}
//                 />
//                 <Image
//                   src={Hero}
//                   alt="Hero"
//                   position="absolute"
//                   // bottom={{ base: "50%", lg: "10%" }}
//                   right={{ base: "0", lg: "0" }}
//                   width={{ base: "50%", sm: "40%", md: "30%", lg: "45%" }}
//                   top={{ base: "0", lg: "10%" }}
//                   height="auto"
//                   objectFit="contain"
//                   borderRadius="lg"
//                   boxShadow="lg"
//                   zIndex="2"
//                   transition="transform 0.3s ease-in-out"
//                   _hover={{ transform: "scale(1.05)" }}
//                 />
//               </Flex>
//             </Flex>
//           </Container>
//         </Box>
//       </Parallax>

//       <section className="relative">
//         <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
//           <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
//             <div className="mx-auto z-20 max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
//               <h2 className="text-3xl font-bold sm:text-4xl">
//                 Find Your Career Path
//               </h2>
//               <p className="mt-4 text-gray-600">
//                 Explore our diverse range of courses and kickstart your career
//                 journey. Whether you want to dive into programming, finance, or
//                 data analysis, we have something for everyone!
//               </p>
//               <Button
//                 as="a"
//                 href="/contact-us"
//                 backgroundColor="teal.600"
//                 textColor="white"
//                 _hover={{
//                   backgroundColor: "teal.700",
//                   transform: "translateY(-2px)",
//                 }}
//                 className="mt-8 inline-block opacity-100 rounded px-12 py-3 text-sm font-medium transition hover:bg-teal-700"
//               >
//                 Get Started Today
//               </Button>
//             </div>

//             <div className="absolute opacity-30">
//               <img src={FindHero} alt="FindHero" />
//             </div>

//             {/* <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
//   {[
//     { name: "Software Development in Java", href: "/it-courses/1", icon: "fa-brands fa-java", description: "Available" },
//     { name: "Software Development in Python", href: "/it-courses/2", icon: "fa-brands fa-python", description: "Available" },
//     { name: "Manual Testing", href: "/it-courses/3", icon: "fa-solid fa-clipboard-check", description: "Available" },
//     { name: "Automation Testing (Java)", href: "/it-courses/4", icon: "fa-solid fa-robot", description: "Available" },
//     { name: "API Automation Testing (Java with Rest Assured)", href: "/it-courses/5", icon: "fa-solid fa-code-branch", description: "Available" },
//     { name: "Automation Testing (Python)", href: "/it-courses/6", icon: "fa-solid fa-robot", description: "Available" }
//   ].map(({ name, icon, description, href }) => (
//     <a
//       key={name}
//       href={href}
//       className="flex flex-col items-center rounded-lg bg-white p-4 shadow-md transition-transform duration-300 transform hover:scale-105"
//     >
//       <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-teal-500 text-white">
//         <i className={icon}></i>
//       </span>
//       <h3 className="mt-4 text-lg font-semibold text-center">{name}</h3>
//       <p className="mt-1 text-sm text-gray-600 text-center">{description}</p>
//     </a>
//   ))}
//   <div className="text-center mt-8">
//     <Button
//       as="a"
//       href="/it-courses"
//       backgroundColor="teal.600"
//       textColor="white"
//       _hover={{
//         backgroundColor: "teal.700",
//         transform: "translateY(-2px)",
//       }}
//       className="mt-0 inline-block opacity-100 rounded px-12 py-3 text-sm font-medium transition hover:bg-teal-700"
//     >
//       Explore More Courses
//     </Button>
//   </div>
// </div> */}

// <Box position="relative">
//               <LazyLoadImage
//                 src={FindHero}
//                 alt="FindHero"
//                 effect="blur"
//                 style={{
//                   opacity: 0.1,
//                   position: "absolute",
//                   top: "50%",
//                   left: "50%",
//                   transform: "translate(-50%, -50%)",
//                   zIndex: 0,
//                 }}
//               />
//               <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} position="relative" zIndex={1}>
//                 <CourseCard
//                   name="IT Courses"
//                   href="/it-courses"
//                   icon={FaLaptopCode}
//                   description="Explore our technology-focused courses"
//                 />
//                 <CourseCard
//                   name="Non-IT Courses"
//                   href="/non-it-courses"
//                   icon={FaGraduationCap}
//                   description="Discover our non-technical course offerings"
//                 />
//               </SimpleGrid>
//             </Box>

//           </div>
//         </div>
//       </section>

//       <EnhancedCareerGuidance />

//       <Box bg="gray.50" p={8} mb={0}>
//         <Container maxW="container.xl">
//           <Box textAlign="center" mb={12}>
//             <Text fontSize="4xl" fontWeight="bold" color="gray.600">
//               Course Statistics
//             </Text>
//           </Box>

//           <Flex
//             justify="center"
//             wrap="wrap"
//             spacing={6}
//             align="stretch"
//           >
//             {stats.map((stat, index) => (
//               <Box
//                 key={index}
//                 bg="white"
//                 p={4}
//                 borderRadius="lg"
//                 boxShadow="lg"
//                 width={cardWidth}
//                 maxW="400px"
//                 textAlign="center"
//                 _hover={{
//                   transform: "scale(1.02)",
//                   boxShadow: "xl",
//                 }}
//               >
//                 <AnimatedStat
//                   title={stat.title}
//                   count={stat.count}
//                   description={stat.description}
//                   duration={stat.duration}
//                   color={stat.color}
//                 />
//               </Box>
//             ))}
//           </Flex>
//         </Container>
//       </Box>

//       <Modal isOpen={isOpen} onClose={onClose}>
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>Welcome to E-Learning</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody>
//             <Text>
//               Thank you for choosing us to enhance your skills! We are excited
//               to help you on your journey.
//             </Text>
//           </ModalBody>
//           <ModalFooter>
//             <Button colorScheme="blue" onClick={onClose}>
//                Close
//              </Button>
//            </ModalFooter>
//          </ModalContent>
//        </Modal>

//      </Box>
//    );
//  }

// import React, { useEffect } from "react";
// import {
//   Box,
//   Container,
//   VStack,
//   Heading,
//   Text,
//   Button,
//   useDisclosure,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalFooter,
//   ModalBody,
//   ModalCloseButton,
//   useBreakpointValue,
//   useColorMode,
//   useColorModeValue,
//   SimpleGrid,
//   Flex,
//   Image,
//   Grid,
//   GridItem,
// } from "@chakra-ui/react";
// import { Parallax } from "react-parallax";
// import Lenis from "@studio-freight/lenis";
// import EnhancedCareerGuidance from "../Courses/Courses";
// import CarouselLogo from "../LogoCourosal/LogoCorousel";
// import Hero from "../assets/HeroBoy.png";
// import Mentor from "../assets/Mentor.png";
// import FindHero from "../assets/FindHero.png";
// import bgImage from "../assets/HomeBg.jpeg";
// import AnimatedStat from "../Stat/AnimatedStat";
// import { Link } from 'react-router-dom';
// import { motion } from "framer-motion";

// const stats = [
//   {
//     title: "Courses Offered",
//     count: 120,
//     description: "Courses available for enrollment",
//     duration: 2000,
//     color: "teal.600",
//   },
//   {
//     title: "Students Enrolled",
//     count: 8500,
//     description: "Students currently enrolled in all courses",
//     duration: 2500,
//     color: "purple.600",
//   },
//   {
//     title: "Completed Courses",
//     count: 7000,
//     description: "Courses successfully completed by students",
//     duration: 3000,
//     color: "blue.600",
//   },
//   {
//     title: "Active Instructors",
//     count: 50,
//     description: "Instructors teaching on the platform",
//     duration: 1500,
//     color: "orange.600",
//   },
// ];

// export default function HomePage() {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const cardWidth = useBreakpointValue({ base: "full", md: "calc(25% - 1rem)" });

//   const headingSize = useBreakpointValue({ base: "2xl", md: "3xl", lg: "4xl" });
//   const textSize = useBreakpointValue({ base: "md", md: "lg", lg: "xl" });
//   const buttonSize = useBreakpointValue({ base: "sm", md: "md", lg: "lg" });
//   const containerPadding = useBreakpointValue({ base: 4, md: 8, lg: 12 });

//   const bgColor = useColorModeValue("gray.50", "gray.900");
//   const textColor = useColorModeValue("black", "white");
//   const buttonColor = useColorModeValue("teal.500", "teal.300");
//   const bgGradient = useColorModeValue(
//     "linear(to-br, rgba(0,0,0,0.5), rgba(255,255,255,0.2))",
//     "linear(to-br, rgba(255,255,255,0.2), rgba(0,0,0,0.8))"
//   );

//   const MotionBox = motion.div;

//   return (
//     <Box bg={bgColor} color={textColor} minHeight="100vh">

//       <Parallax
//         bgImage={bgImage}
//         bgImageStyle={{ objectFit: "cover", width: "100%", height: "100%" }}
//         strength={500}

//       >
//         <Box
//           minHeight={{ base: "100vh", md: "80vh" }}
//           position="relative"
//           overflow="hidden"

//         >
//           <Box
//             position="absolute"
//             top="0"
//             left="0"
//             right="0"
//             bottom="0"
//             bgGradient={bgGradient}
//             zIndex="1"

//           />
//           <Container maxW="container.xl" p={containerPadding} position="relative" zIndex="2">
//             <Flex
//               direction={{ base: "column", lg: "row" }}
//               align="center"
//               justify="space-between"
//               minHeight="inherit"
//               pt={{ base: 20, md: 20 }}
//             >
//               <VStack
//                 spacing={6}
//                 textAlign={{ base: "center", lg: "left" }}
//                 align={{ base: "center", lg: "flex-start" }}
//                 maxW={{ base: "100%", lg: "50%" }}
//                 mb={{ base: 12, lg: 0 }}
//               >
//                 <Heading
//                   as="h1"
//                   size={headingSize}
//                   fontWeight="bold"
//                   color="white"
//                   textShadow="2px 2px 8px rgba(0,0,0,0.7)"
//                 >
//                   Kick Start Your Career!
//                 </Heading>
//                 <Text
//                   fontSize={textSize}
//                   maxW="600px"
//                   color="white"
//                   textShadow="1px 1px 4px rgba(0,0,0,0.6)"
//                 >
//                   Join our engaging e-learning platform.
//                 </Text>
//                 <Button
//                   as="a"
//                   href="/it-courses"
//                   backgroundColor="teal.600"
//                   color="white"
//                   borderRadius="full"
//                   size={buttonSize}
//                   px={8}
//                   _hover={{
//                     backgroundColor: "teal.700",
//                     transform: "translateY(-2px)",
//                   }}
//                   transition="all 0.3s"
//                 >
//                   Get Started
//                 </Button>
//               </VStack>

//               <Flex
//                 position="relative"
//                 width={{ base: "100%", lg: "50%" }}
//                 height={{ base: "300px", md: "400px", lg: "100%" }}
//                 justify="center"
//                 align="bottom"
//               >
//                 <Image
//                   src={Mentor}
//                   alt="Mentor"
//                   position="absolute"
//                   top={{ base: "0", lg: "10%" }}
//                   left={{ base: "0", lg: "0" }}
//                   width={{ base: "50%", sm: "40%", md: "30%", lg: "45%" }}
//                   height="auto"
//                   objectFit="contain"
//                   borderRadius="lg"
//                   boxShadow="lg"
//                   zIndex="2"
//                   transition="transform 0.3s ease-in-out"
//                   _hover={{ transform: "scale(1.05)" }}
//                 />
//                 <Image
//                   src={Hero}
//                   alt="Hero"
//                   position="absolute"
//                   // bottom={{ base: "50%", lg: "10%" }}
//                   right={{ base: "0", lg: "0" }}
//                   width={{ base: "50%", sm: "40%", md: "30%", lg: "45%" }}
//                   top={{ base: "0", lg: "10%" }}
//                   height="auto"
//                   objectFit="contain"
//                   borderRadius="lg"
//                   boxShadow="lg"
//                   zIndex="2"
//                   transition="transform 0.3s ease-in-out"
//                   _hover={{ transform: "scale(1.05)" }}
//                 />
//               </Flex>
//             </Flex>
//           </Container>
//         </Box>
//       </Parallax>

//       <section className="relative">
//         <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
//           <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
//             <div className="mx-auto z-20 max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
//               <h2 className="text-3xl font-bold sm:text-4xl">
//                 Find Your Career Path
//               </h2>
//               <p className="mt-4 text-gray-600">
//                 Explore our diverse range of courses and kickstart your career
//                 journey. Whether you want to dive into programming, finance, or
//                 data analysis, we have something for everyone!
//               </p>
//               <Button
//                 as="a"
//                 href="/contact-us"
//                 backgroundColor="teal.600"
//                 textColor="white"
//                 _hover={{
//                   backgroundColor: "teal.700",
//                   transform: "translateY(-2px)",
//                 }}
//                 className="mt-8 inline-block opacity-100 rounded px-12 py-3 text-sm font-medium transition hover:bg-teal-700"
//               >
//                 Get Started Today
//               </Button>
//             </div>

//             <div className="absolute opacity-30">
//               <img src={FindHero} alt="FindHero" />
//             </div>

//             <div className="grid grid-cols-2  gap-4 sm:grid-cols-3">
//   {[
//     { name: "Software Development in Java", href: "/it-courses/1", icon: "fa-brands fa-java", description: "Available" },
//     { name: "Software Development in Python", href: "/it-courses/2", icon: "fa-brands fa-python", description: "Available" },
//     { name: "Manual Testing", href: "/it-courses/3", icon: "fa-solid fa-clipboard-check", description: "Available" },
//     { name: "Automation Testing (Java)", href: "/it-courses/4", icon: "fa-solid fa-robot", description: "Available" },
//     { name: "API Automation Testing (Java with Rest Assured)", href: "/it-courses/5", icon: "fa-solid fa-code-branch", description: "Available" },
//     { name: "Automation Testing (Python)", href: "/it-courses/6", icon: "fa-solid fa-robot", description: "Available" }
//   ].map(({ name, icon, description, href }) => (
//     <a
//       key={name}
//       href={href}
//       className="flex flex-col items-center rounded-lg bg-white p-4 shadow-md transition-transform duration-300 transform hover:scale-105"
//     >
//       <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-teal-500 text-white">
//         <i className={icon}></i>
//       </span>
//       <h3 className="mt-4 text-lg font-semibold text-center">{name}</h3>
//       <p className="mt-1 text-sm text-gray-600 text-center">{description}</p>
//     </a>
//   ))}
//   <div className="text-center mt-8">
//     <Button
//       as="a"
//       href="/it-courses"
//       backgroundColor="teal.600"
//       textColor="white"
//       _hover={{
//         backgroundColor: "teal.700",
//         transform: "translateY(-2px)",
//       }}
//       className="mt-0 inline-block opacity-100 rounded px-12 py-3 text-sm font-medium transition hover:bg-teal-700"
//     >
//       Explore More Courses
//     </Button>
//   </div>
// </div>

//           </div>
//         </div>
//       </section>

//       <EnhancedCareerGuidance />

//       <MotionBox
//         bg="gray.50"
//         p={8}
//         mb={0}
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <Container maxW="container.xl">
//           <MotionBox
//             textAlign="center"
//             mb={12}
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             <Text fontSize="4xl" fontWeight="bold" color="gray.600">
//               Course Statistics
//             </Text>
//           </MotionBox>

//           <Flex
//             justify="center"
//             wrap="wrap"
//             spacing={6}
//             align="stretch"
//           >
//             {stats.map((stat, index) => (
//               <MotionBox
//                 key={index}
//                 bg="white"
//                 p={4}
//                 borderRadius="lg"
//                 boxShadow="lg"
//                 width={cardWidth}
//                 maxW="400px"
//                 textAlign="center"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 whileHover={{ scale: 1.05, boxShadow: "xl" }}
//               >
//                 <AnimatedStat
//                   title={stat.title}
//                   count={stat.count}
//                   description={stat.description}
//                   duration={stat.duration}
//                   color={stat.color}
//                 />
//               </MotionBox>
//             ))}
//           </Flex>
//         </Container>
//       </MotionBox>

//       <Modal isOpen={isOpen} onClose={onClose}>
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>Welcome to E-Learning</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody>
//             <Text>
//               Thank you for choosing us to enhance your skills! We are excited
//               to help you on your journey.
//             </Text>
//           </ModalBody>
//           <ModalFooter>
//             <Button colorScheme="blue" onClick={onClose}>
//               Close
//             </Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>

//       <CarouselLogo />
//     </Box>
//   );
// }

// import React, { useEffect } from "react";
// import {
//   Box,
//   Container,
//   VStack,
//   Heading,
//   Text,
//   Button,
//   useDisclosure,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalFooter,
//   ModalBody,
//   ModalCloseButton,
//   useBreakpointValue,
//   useColorMode,
//   useColorModeValue,
//   SimpleGrid,
//   Flex,
//   Image,
//   Grid,
//   GridItem,
// } from "@chakra-ui/react";
// import { Parallax } from "react-parallax";
// import Lenis from "@studio-freight/lenis";
// import EnhancedCareerGuidance from "../Courses/Courses";
// import Hero from "../assets/HeroBoy.png";
// import Mentor from "../assets/Mentor.png";
// import FindHero from "../assets/FindHero.png";
// import bgImage from "../assets/HomeBg.jpeg";
// import AnimatedStat from "../Stat/AnimatedStat";

// const stats = [
//   {
//     title: "Courses Offered",
//     count: 120,
//     description: "Courses available for enrollment",
//     duration: 2000,
//     color: "teal.600",
//   },
//   {
//     title: "Students Enrolled",
//     count: 8500,
//     description: "Students currently enrolled in all courses",
//     duration: 2500,
//     color: "purple.600",
//   },
//   {
//     title: "Completed Courses",
//     count: 7000,
//     description: "Courses successfully completed by students",
//     duration: 3000,
//     color: "blue.600",
//   },
//   {
//     title: "Active Instructors",
//     count: 50,
//     description: "Instructors teaching on the platform",
//     duration: 1500,
//     color: "orange.600",
//   },
// ];

// export default function HomePage() {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const cardWidth = useBreakpointValue({ base: "full", sm: "calc(50% - 1rem)", md: "calc(25% - 1rem)" });

//   const headingSize = useBreakpointValue({ base: "2xl", sm: "3xl", md: "3xl", lg: "4xl" });
//   const textSize = useBreakpointValue({ base: "md", sm: "lg", md: "lg", lg: "xl" });
//   const buttonSize = useBreakpointValue({ base: "sm", sm: "md", md: "md", lg: "lg" });
//   const containerPadding = useBreakpointValue({ base: 4, sm: 6, md: 8, lg: 12 });

//   const bgColor = useColorModeValue("gray.50", "gray.900");
//   const textColor = useColorModeValue("black", "white");
//   const buttonColor = useColorModeValue("teal.500", "teal.300");
//   const bgGradient = useColorModeValue(
//     "linear(to-br, rgba(0,0,0,0.5), rgba(255,255,255,0.2))",
//     "linear(to-br, rgba(255,255,255,0.2), rgba(0,0,0,0.8))"
//   );

//   return (
//     <Box bg={bgColor} color={textColor} minHeight="100vh">
//       <Parallax
//         bgImage={bgImage}
//         bgImageStyle={{ objectFit: "cover", width: "100%", height: "100%" }}
//         strength={500}
//       >
//         <Box
//           minHeight={{ base: "100vh", sm: "90vh", md: "80vh" }}
//           position="relative"
//           overflow="hidden"
//         >
//           <Box
//             position="absolute"
//             top="0"
//             left="0"
//             right="0"
//             bottom="0"
//             bgGradient={bgGradient}
//             zIndex="1"
//           />
//           <Container maxW="container.xl" p={containerPadding} position="relative" zIndex="2">
//             <Flex
//               direction={{ base: "column", sm: "column", md: "row" }}
//               align="center"
//               justify="space-between"
//               minHeight="inherit"
//               pt={{ base: 20, sm: 16, md: 20 }}
//             >
//               <VStack
//                 spacing={6}
//                 textAlign={{ base: "center", md: "left" }}
//                 align={{ base: "center", md: "flex-start" }}
//                 maxW={{ base: "100%", md: "50%" }}
//                 mb={{ base: 12, md: 0 }}
//               >
//                 <Heading
//                   as="h1"
//                   size={headingSize}
//                   fontWeight="bold"
//                   color="white"
//                   textShadow="2px 2px 8px rgba(0,0,0,0.7)"
//                 >
//                   Kick Start Your Career!
//                 </Heading>
//                 <Text
//                   fontSize={textSize}
//                   maxW="600px"
//                   color="white"
//                   textShadow="1px 1px 4px rgba(0,0,0,0.6)"
//                 >
//                   Join our engaging e-learning platform.
//                 </Text>
//                 <Button
//                   as="a"
//                   href="/it-courses"
//                   backgroundColor="teal.600"
//                   color="white"
//                   borderRadius="full"
//                   size={buttonSize}
//                   px={8}
//                   _hover={{
//                     backgroundColor: "teal.700",
//                     transform: "translateY(-2px)",
//                   }}
//                   transition="all 0.3s"
//                 >
//                   Get Started
//                 </Button>
//               </VStack>

//               <Flex
//                 position="relative"
//                 width={{ base: "100%", md: "50%" }}
//                 height={{ base: "300px", sm: "350px", md: "400px", lg: "100%" }}
//                 justify="center"
//                 align="bottom"
//               >
//                 <Image
//                   src={Mentor}
//                   alt="Mentor"
//                   position="absolute"
//                   top={{ base: "0", md: "10%" }}
//                   left={{ base: "0", md: "0" }}
//                   width={{ base: "50%", sm: "40%", md: "45%" }}
//                   height="auto"
//                   objectFit="contain"
//                   borderRadius="lg"
//                   boxShadow="lg"
//                   zIndex="2"
//                   transition="transform 0.3s ease-in-out"
//                   _hover={{ transform: "scale(1.05)" }}
//                 />
//                 <Image
//                   src={Hero}
//                   alt="Hero"
//                   position="absolute"
//                   right={{ base: "0", md: "0" }}
//                   width={{ base: "50%", sm: "40%", md: "45%" }}
//                   top={{ base: "0", md: "10%" }}
//                   height="auto"
//                   objectFit="contain"
//                   borderRadius="lg"
//                   boxShadow="lg"
//                   zIndex="2"
//                   transition="transform 0.3s ease-in-out"
//                   _hover={{ transform: "scale(1.05)" }}
//                 />
//               </Flex>
//             </Flex>
//           </Container>
//         </Box>
//       </Parallax>

//       <section className="relative">
//         <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
//           <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
//             <div className="mx-auto z-20 max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
//               <h2 className="text-3xl font-bold sm:text-4xl">
//                 Find Your Career Path
//               </h2>
//               <p className="mt-4 text-gray-600">
//                 Explore our diverse range of courses and kickstart your career
//                 journey. Whether you want to dive into programming, finance, or
//                 data analysis, we have something for everyone!
//               </p>
//               <Button
//                 as="a"
//                 href="/contact-us"
//                 backgroundColor="teal.600"
//                 textColor="white"
//                 _hover={{
//                   backgroundColor: "teal.700",
//                   transform: "translateY(-2px)",
//                 }}
//                 className="mt-8 inline-block opacity-100 rounded px-12 py-3 text-sm font-medium transition hover:bg-teal-700"
//               >
//                 Get Started Today
//               </Button>
//             </div>

//             <div className="absolute opacity-30">
//               <img src={FindHero} alt="FindHero" />
//             </div>

//             <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
//               {[
//                 { name: "Software Development in Java", href: "/it-courses/1", icon: "fa-brands fa-java", description: "Available" },
//                 { name: "Software Development in Python", href: "/it-courses/2", icon: "fa-brands fa-python", description: "Available" },
//                 { name: "Manual Testing", href: "/it-courses/3", icon: "fa-solid fa-clipboard-check", description: "Available" },
//                 { name: "Automation Testing (Java)", href: "/it-courses/4", icon: "fa-solid fa-robot", description: "Available" },
//                 { name: "API Automation Testing (Java with Rest Assured)", href: "/it-courses/5", icon: "fa-solid fa-code-branch", description: "Available" },
//                 { name: "Automation Testing (Python)", href: "/it-courses/6", icon: "fa-solid fa-robot", description: "Available" }
//               ].map(({ name, icon, description, href }) => (
//                 <a
//                   key={name}
//                   href={href}
//                   className="flex flex-col items-center rounded-lg bg-white p-4 shadow-md transition-transform duration-300 transform hover:scale-105"
//                 >
//                   <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-teal-500 text-white">
//                     <i className={icon}></i>
//                   </span>
//                   <h3 className="mt-4 text-lg font-semibold text-center">{name}</h3>
//                   <p className="mt-1 text-sm text-gray-600 text-center">{description}</p>
//                 </a>
//               ))}
//               <div className="text-center mt-8 col-span-2 sm:col-span-3">
//                 <Button
//                   as="a"
//                   href="/it-courses"
//                   backgroundColor="teal.600"
//                   textColor="white"
//                   _hover={{
//                     backgroundColor: "teal.700",
//                     transform: "translateY(-2px)",
//                   }}
//                   className="mt-0 inline-block opacity-100 rounded px-12 py-3 text-sm font-medium transition hover:bg-teal-700"
//                 >
//                   Explore More Courses
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <EnhancedCareerGuidance />

//       <Box bg="gray.50" p={8} mb={0}>
//         <Container maxW="container.xl">
//           <Box textAlign="center" mb={12}>
//             <Text fontSize="4xl" fontWeight="bold" color="gray.600">
//               Course Statistics
//             </Text>
//           </Box>

//           <Flex
//             justify="center"
//             wrap="wrap"
//             spacing={6}
//             align="stretch"
//           >
//             {stats.map((stat, index) => (
//               <Box
//                 key={index}
//                 bg="white"
//                 p={4}
//                 borderRadius="lg"
//                 boxShadow="lg"
//                 width={cardWidth}
//                 maxW="400px"
//                 textAlign="center"
//                 m={2}
//                 _hover={{
//                   transform: "scale(1.02)",
//                   boxShadow: "xl",
//                 }}
//               >
//                 <AnimatedStat
//                   title={stat.title}
//                   count={stat.count}
//                   description={stat.description}
//                   duration={stat.duration}
//                   color={stat.color}
//                 />
//               </Box>
//             ))}
//           </Flex>
//         </Container>
//       </Box>

//       <Modal isOpen={isOpen} onClose={onClose}>
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>Welcome to E-Learning</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody>
//             <Text>
//               Thank you for choosing us to enhance your skills! We are excited
//               to help you on your journey.
//             </Text>
//           </ModalBody>
//           <ModalFooter>
//             <Button colorScheme="blue" onClick={onClose}>
//               Close
//             </Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>
//     </Box>
//   );
// }

// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Container,
//   VStack,
//   Heading,
//   Text,
//   Button,
//   useDisclosure,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalFooter,
//   ModalBody,
//   ModalCloseButton,
//   Flex,
//   Image,
//   SimpleGrid,
//   Icon,
//   useColorModeValue,
//   Avatar,
//   HStack,
//   Input,
// } from "@chakra-ui/react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Parallax } from "react-parallax";
// import { FaLaptopCode, FaGraduationCap, FaClock, FaArrowRight, FaStar, FaUsers, FaBook, FaQuoteLeft } from "react-icons/fa";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";

// // Import your images here
// import Hero from "../assets/HeroBoy.png";
// import Mentor from "../assets/Mentor.png";
// import FindHero from "../assets/FindHero.png";
// import bgImage from "../assets/HomeBg.jpeg";

// const MotionBox = motion(Box);
// const MotionFlex = motion(Flex);

// const stats = [
//   {
//     title: "Courses Offered",
//     count: 120,
//     description: "Courses available for enrollment",
//     duration: 2000,
//     color: "teal.600",
//     icon: FaBook,
//   },
//   {
//     title: "Students Enrolled",
//     count: 8500,
//     description: "Students currently enrolled in all courses",
//     duration: 2500,
//     color: "teal.600",
//     icon: FaUsers,
//   },
//   {
//     title: "Completed Courses",
//     count: 7000,
//     description: "Courses successfully completed by students",
//     duration: 3000,
//     color: "teal.600",
//     icon: FaGraduationCap,
//   },
//   {
//     title: "Active Instructors",
//     count: 50,
//     description: "Instructors teaching on the platform",
//     duration: 1500,
//     color: "teal.600",
//     icon: FaLaptopCode,
//   },
// ];

// const testimonials = [
//   {
//     name: "John Doe",
//     role: "Web Developer",
//     content: "This platform has been instrumental in advancing my career. The courses are well-structured and the instructors are top-notch.",
//     avatar: "/placeholder.svg?height=100&width=100&text=JD",
//   },
//   {
//     name: "Jane Smith",
//     role: "Data Scientist",
//     content: "I've taken several courses here and each one has significantly improved my skills. The practical projects are especially valuable.",
//     avatar: "/placeholder.svg?height=100&width=100&text=JS",
//   },
//   {
//     name: "Mike Johnson",
//     role: "UX Designer",
//     content: "The UX design course I took here was fantastic. It provided me with the skills I needed to land my dream job.",
//     avatar: "/placeholder.svg?height=100&width=100&text=MJ",
//   },
// ];

// const TimerAnimation = () => {
//   const [rotation, setRotation] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setRotation((prevRotation) => (prevRotation + 6) % 360);
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <MotionBox
//       animate={{ rotate: rotation }}
//       transition={{ type: "tween", duration: 0.5 }}
//     >
//       <Icon as={FaClock} w={6} h={6} color="teal.500" />
//     </MotionBox>
//   );
// };

// const AnimatedStat = ({ title, count, description, duration, color }) => {
//   return (
//     <VStack spacing={2} align="center">
//       <Text fontSize="xl" fontWeight="bold" color={color}>
//         {title}
//       </Text>
//       <MotionBox
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <Text fontSize="4xl" fontWeight="bold" color={color}>
//           {count}
//         </Text>
//       </MotionBox>
//       <Text fontSize="sm" color="gray.500" textAlign="center">
//         {description}
//       </Text>
//     </VStack>
//   );
// };

// export default function HomePage() {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const bgColor = useColorModeValue("gray.50", "gray.900");
//   const textColor = useColorModeValue("gray.800", "gray.100");
//   const cardBg = useColorModeValue("white", "gray.700");

//   return (
//     <Box minH="100vh" bg={bgColor} color={textColor}>
//       <Parallax
//         bgImage={bgImage}
//         bgImageStyle={{ objectFit: "cover", width: "100%", height: "100%" }}
//         strength={500}
//       >
//         <Box position="relative" minH={{ base: "100vh", md: "80vh" }} overflow="hidden">
//           <Box
//             position="absolute"
//             inset={0}
//             bg="linear-gradient(to bottom right, rgba(0,0,0,0.7), rgba(0,0,0,0.3))"
//           />
//           <Container maxW="container.xl" position="relative" zIndex={10}>
//             <Flex
//               direction={{ base: "column", lg: "row" }}
//               align="center"
//               justify="space-between"
//               minH="inherit"
//               py={{ base: 20, md: 32 }}
//               px={{ base: 4, md: 8 }}
//             >
//               <MotionFlex
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8 }}
//                 direction="column"
//                 align={{ base: "center", lg: "flex-start" }}
//                 textAlign={{ base: "center", lg: "left" }}
//                 mb={{ base: 12, lg: 0 }}
//                 maxW={{ base: "100%", lg: "50%" }}
//               >
//                 <Heading
//                   as="h1"
//                   fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
//                   fontWeight="bold"
//                   color="white"
//                   mb={6}
//                   textShadow="2px 2px 4px rgba(0,0,0,0.4)"
//                 >
//                   Kick Start Your Career!
//                 </Heading>
//                 <Text
//                   fontSize={{ base: "lg", md: "xl" }}
//                   color="white"
//                   mb={8}
//                   maxW="2xl"
//                   textShadow="1px 1px 2px rgba(0,0,0,0.4)"
//                 >
//                   Join our engaging e-learning platform and unlock your potential. Start your journey to success today!
//                 </Text>
//                 <MotionBox
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   <Button
//                     as="a"
//                     href="/it-courses"
//                     size={{ base: "md", md: "lg" }}
//                     colorScheme="teal"
//                     fontWeight="semibold"
//                     px={8}
//                     rounded="full"
//                     _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
//                     transition="all 0.3s"
//                     rightIcon={<FaArrowRight />}
//                   >
//                     Get Started
//                   </Button>
//                 </MotionBox>
//               </MotionFlex>

//               <MotionFlex
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.8, delay: 0.2 }}
//                 position="relative"
//                 w={{ base: "100%", lg: "50%" }}
//                 h={{ base: "300px", md: "400px", lg: "100%" }}
//                 justify="center"
//                 align="center"
//               >
//                 <Image
//                   src={Mentor}
//                   alt="Mentor"
//                   position="absolute"
//                   top={{ base: "0", lg: "10%" }}
//                   left={{ base: "0", lg: "0" }}
//                   w={{ base: "50%", sm: "40%", md: "30%", lg: "45%" }}
//                   h="auto"
//                   objectFit="contain"
//                   rounded="lg"
//                   shadow="xl"
//                   zIndex={2}
//                   transition="transform 0.3s"
//                   _hover={{ transform: "scale(1.05)" }}
//                 />
//                 <Image
//                   src={Hero}
//                   alt="Hero"
//                   position="absolute"
//                   top={{ base: "0", lg: "10%" }}
//                   right={{ base: "0", lg: "0" }}
//                   w={{ base: "50%", sm: "40%", md: "30%", lg: "45%" }}
//                   h="auto"
//                   objectFit="contain"
//                   rounded="lg"
//                   shadow="xl"
//                   zIndex={2}
//                   transition="transform 0.3s"
//                   _hover={{ transform: "scale(1.05)" }}
//                 />
//               </MotionFlex>
//             </Flex>
//           </Container>
//         </Box>
//       </Parallax>

//       <Box as="section" py={{ base: 16, md: 24 }}>
//         <Container maxW="container.xl">
//           <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 12, lg: 16 }} alignItems="center">
//             <MotionBox
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//             >
//               <Heading as="h2" fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }} fontWeight="bold" color="teal.600" mb={6}>
//                 Find Your Career Path
//               </Heading>
//               <Text fontSize={{ base: "lg", md: "xl" }} color="gray.600" mb={8}>
//                 Explore our diverse range of courses and kickstart your career
//                 journey. Whether you want to dive into programming, finance, or
//                 data analysis, we have something for everyone!
//               </Text>
//               <MotionBox
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <Button
//                   as="a"
//                   href="/contact-us"
//                   size={{ base: "md", md: "lg" }}
//                   colorScheme="teal"
//                   fontWeight="semibold"
//                   px={8}
//                   rounded="full"
//                   _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
//                   transition="all 0.3s"
//                   rightIcon={<FaArrowRight />}
//                 >
//                   Get Started Today
//                 </Button>
//               </MotionBox>
//             </MotionBox>

//             <Box position="relative">
//               <Image
//                 src={FindHero}
//                 alt="FindHero"
//                 opacity={0.1}
//                 position="absolute"
//                 top="50%"
//                 left="50%"
//                 transform="translate(-50%, -50%)"
//                 zIndex={0}
//               />
//               <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} position="relative" zIndex={1}>
//                 {[
//                   { name: "IT Courses", href: "/it-courses", icon: FaLaptopCode, description: "Explore our technology-focused courses" },
//                   { name: "Non-IT Courses", href: "/Non_it-courses", icon: FaGraduationCap, description: "Discover our non-technical course offerings" },
//                 ].map(({ name, icon, description, href }) => (
//                   <MotionBox
//                     key={name}
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     <Box
//                       as="a"
//                       href={href}
//                       bg={cardBg}
//                       p={8}
//                       rounded="lg"
//                       shadow="lg"
//                       textAlign="center"
//                       transition="all 0.3s"
//                       _hover={{ shadow: "xl", bg: useColorModeValue("gray.50", "gray.700") }}
//                       height="300px"
//                       display="flex"
//                       flexDirection="column"
//                       justifyContent="center"
//                       alignItems="center"
//                     >
//                       <Icon
//                         as={icon}
//                         w={16}
//                         h={16}
//                         color="teal.500"
//                         mb={4}
//                       />
//                       <Heading as="h3" fontSize="2xl" fontWeight="semibold" mb={4}>
//                         {name}
//                       </Heading>
//                       <Text color={useColorModeValue("gray.600", "gray.300")}>{description}</Text>
//                     </Box>
//                   </MotionBox>
//                 ))}
//               </SimpleGrid>
//             </Box>
//           </SimpleGrid>
//         </Container>
//       </Box>

//       <Box bg={useColorModeValue("gray.100", "gray.800")} py={{ base: 16, md: 24 }}>
//         <Container maxW="container.xl">
//           <Heading as="h2" fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }} fontWeight="bold" textAlign="center" color="teal.600" mb={12}>
//             Course Statistics
//           </Heading>
//           <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
//             <AnimatePresence>
//               {stats.map((stat, index) => (
//                 <MotionBox
//                   key={index}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -20 }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                 >
//                   <Box
//                     bg={cardBg}
//                     p={8}
//                     rounded="lg"
//                     shadow="lg"
//                     textAlign="center"
//                     transition="all 0.3s"
//                     _hover={{ shadow: "xl", bg: useColorModeValue("gray.50", "gray.700") }}
//                     height="300px"
//                     display="flex"
//                     flexDirection="column"
//                     justifyContent="center"
//                     alignItems="center"
//                   >
//                     <Flex justifyContent="center" alignItems="center" mb={4}>
//                       <AnimatedStat
//                         title={stat.title}
//                         count={stat.count}
//                         description={stat.description}
//                         duration={stat.duration}
//                         color={stat.color}
//                       />
//                       <Icon as={stat.icon} w={8} h={8} color={stat.color} ml={2} />
//                     </Flex>
//                   </Box>
//                 </MotionBox>
//               ))}
//             </AnimatePresence>
//           </SimpleGrid>
//         </Container>
//       </Box>

//       {/* <Box py={16}>
//         <Container maxW="container.xl">
//           <Heading as="h2" fontSize={{ base: "3xl", md: "4xl" }} textAlign="center" mb={12}>
//             Featured Courses
//           </Heading>
//           <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
//             {featuredCourses.map((course, index) => (
//               <Box
//                 key={index}
//                 bg={cardBg}
//                 borderRadius="lg"
//                 overflow="hidden"
//                 boxShadow="lg"
//                 transition="all 0.3s"
//                 _hover={{ transform: "translateY(-5px)", boxShadow: "xl" }}
//               >
//                 <Image src={course.image} alt={course.title} w="100%" h="200px" objectFit="cover" />
//                 <VStack p={6} align="start" spacing={4}>
//                   <Heading as="h3" fontSize="xl" fontWeight="bold">
//                     {course.title}
//                   </Heading>
//                   <HStack spacing={4}>
//                     <HStack>
//                       <Icon as={FaStar} color="yellow.400" />
//                       <Text fontSize="sm" fontWeight="bold">
//                         {course.rating}
//                       </Text>
//                     </HStack>
//                     <HStack>
//                       <Icon as={FaUsers} color="teal.500" />
//                       <Text fontSize="sm">{course.students} students</Text>
//                     </HStack>
//                     <HStack>
//                       <Icon as={FaClock} color="purple.500" />
//                       <Text fontSize="sm">{course.duration}</Text>
//                     </HStack>
//                   </HStack>
//                   <Text fontSize="2xl" fontWeight="bold" color="teal.500">
//                     {course.price}
//                   </Text>
//                   <Button colorScheme="teal" size="md" width="100%">
//                     Enroll Now
//                   </Button>
//                 </VStack>
//               </Box>
//             ))}
//           </SimpleGrid>
//         </Container>
//       </Box> */}

//       <Box bg="gray.50" py={16}>
//         <Container maxW="container.xl">
//           <Heading as="h2" fontSize={{ base: "3xl", md: "4xl" }} textAlign="center" mb={12}>
//             What Our Students Say
//           </Heading>
//           <Swiper
//             modules={[Pagination, Autoplay]}
//             spaceBetween={30}
//             slidesPerView={1}
//             pagination={{ clickable: true }}
//             autoplay={{ delay: 5000 }}
//           >
//             {testimonials.map((testimonial, index) => (
//               <SwiperSlide key={index}>
//                 <Box
//                   bg="white"
//                   p={8}
//                   borderRadius="lg"
//                   boxShadow="xl"
//                   maxW="3xl"
//                   mx="auto"
//                   textAlign="center"
//                 >
//                   <Icon as={FaQuoteLeft} w={8} h={8} color="teal.500" mb={4} />
//                   <Text fontSize="xl" mb={6}>
//                     {testimonial.content}
//                   </Text>
//                   <Flex align="center" justify="center">
//                     <Avatar src={testimonial.avatar} size="lg" mr={4} />
//                     <Box>
//                       <Text fontWeight="bold">{testimonial.name}</Text>
//                       <Text fontSize="sm" color="gray.500">
//                         {testimonial.role}
//                       </Text>
//                     </Box>
//                   </Flex>
//                 </Box>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </Container>
//       </Box>

//       <Box bg={useColorModeValue("teal.500", "teal.600")} py={16} color={useColorModeValue("white", "gray.100")}>
//         <Container maxW="container.xl">
//           <VStack spacing={8} align="center" textAlign="center">
//             <Heading as="h2" fontSize={{ base: "3xl", md: "4xl" }}>
//               Stay Updated with Our Newsletter
//             </Heading>
//             <Text fontSize={{ base: "lg", md: "xl" }} maxW="2xl">
//               Subscribe to our newsletter and get the latest updates on new courses, special offers, and learning tips delivered straight to your inbox.
//             </Text>
//             <Box as="form" w="100%" maxW="md">
//               <VStack spacing={4}>
//                 <Input
//                   placeholder="Enter your email"
//                   size="lg"
//                   bg="white"
//                   color="gray.800"
//                   _placeholder={{ color: "gray.500" }}
//                   _hover={{ borderColor: "teal.300" }}
//                   _focus={{ borderColor: "teal.300", boxShadow: "0 0 0 1px teal.300" }}
//                 />
//                 <Button
//                   type="submit"
//                   colorScheme="whiteAlpha"
//                   size="lg"
//                   width="100%"
//                   _hover={{ bg: "whiteAlpha.300" }}
//                 >
//                   Subscribe
//                 </Button>
//               </VStack>
//             </Box>
//           </VStack>
//         </Container>
//       </Box>

//       <Modal isOpen={isOpen} onClose={onClose}>
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>Welcome to E-Learning</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody>
//             <Text>
//               Thank you for choosing us to enhance your skills! We are excited
//               to help you on your journey.
//             </Text>
//           </ModalBody>
//           <ModalFooter>
//             <Button colorScheme="teal" onClick={onClose}>
//               Close
//             </Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>
//     </Box>
//   );
// }

// import React, { useState, useEffect, useRef, useCallback } from "react";
// import {
//   Box,
//   Container,
//   VStack,
//   Heading,
//   Text,
//   Button,
//   useDisclosure,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalFooter,
//   ModalBody,
//   ModalCloseButton,
//   Flex,
//   Image,
//   SimpleGrid,
//   Icon,
//   useColorModeValue,
//   Avatar,
//   Input,
//   useBreakpointValue,
//   Tooltip,
//   useColorMode,
//   FormControl,
//   FormLabel,
//   FormErrorMessage,
//   useToast,
// } from "@chakra-ui/react";
// import { motion, useAnimation, useInView } from "framer-motion";
// import { FaLaptopCode, FaGraduationCap, FaClock, FaArrowRight, FaBook, FaUsers, FaQuoteLeft, FaSun, FaMoon, FaChevronUp } from "react-icons/fa";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Autoplay, EffectFade } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/effect-fade";

// // Import your images here
// import Hero from "../assets/HeroBoy.png";
// import Mentor from "../assets/Mentor.png";
// import FindHero from "../assets/FindHero.png";
// import bgImage from "../assets/HomeBg.jpeg";

// const MotionBox = motion(Box);
// const MotionFlex = motion(Flex);

// const stats = [
//   {
//     title: "Courses Offered",
//     count: 120,
//     description: "Courses available for enrollment",
//     duration: 2000,
//     color: "teal.600",
//     icon: FaBook,
//   },
//   {
//     title: "Students Enrolled",
//     count: 8500,
//     description: "Students currently enrolled in all courses",
//     duration: 2500,
//     color: "purple.600",
//     icon: FaUsers,
//   },
//   {
//     title: "Completed Courses",
//     count: 7000,
//     description: "Courses successfully completed by students",
//     duration: 3000,
//     color: "blue.600",
//     icon: FaGraduationCap,
//   },
//   {
//     title: "Active Instructors",
//     count: 50,
//     description: "Instructors teaching on the platform",
//     duration: 1500,
//     color: "orange.600",
//     icon: FaLaptopCode,
//   },
// ];

// const testimonials = [
//   {
//     name: "John Doe",
//     role: "Web Developer",
//     content: "This platform has been instrumental in advancing my career. The courses are well-structured and the instructors are top-notch.",
//     avatar: "/placeholder.svg?height=100&width=100&text=JD",
//   },
//   {
//     name: "Jane Smith",
//     role: "Data Scientist",
//     content: "I've taken several courses here and each one has significantly improved my skills. The practical projects are especially valuable.",
//     avatar: "/placeholder.svg?height=100&width=100&text=JS",
//   },
//   {
//     name: "Mike Johnson",
//     role: "UX Designer",
//     content: "The UX design course I took here was fantastic. It provided me with the skills I needed to land my dream job.",
//     avatar: "/placeholder.svg?height=100&width=100&text=MJ",
//   },
// ];

// const AnimatedStat = ({ title, count, description, duration, color, icon }) => {
//   const controls = useAnimation();
//   const ref = useRef(null);
//   const inView = useInView(ref);
//   const [currentCount, setCurrentCount] = useState(0);

//   useEffect(() => {
//     if (inView) {
//       controls.start({ opacity: 1, y: 0 });
//       let start = 0;
//       const end = parseInt(count.toString().replace(/,/g, ""));
//       if (start === end) return;

//       let timer = setInterval(() => {
//         start += 1;
//         setCurrentCount(start);
//         if (start === end) clearInterval(timer);
//       }, duration / end);

//       return () => {
//         clearInterval(timer);
//       };
//     }
//   }, [controls, inView, count, duration]);

//   return (
//     <MotionBox
//       ref={ref}
//       initial={{ opacity: 0, y: 20 }}
//       animate={controls}
//       transition={{ duration: 0.5 }}
//     >
//       <VStack
//         spacing={4}
//         align="center"
//         p={6}
//         bg={useColorModeValue("white", "gray.800")}
//         rounded="lg"
//         shadow="md"
//         borderWidth="1px"
//         borderColor={useColorModeValue("gray.200", "gray.700")}
//         _hover={{ shadow: "lg", transform: "translateY(-5px)" }}
//         transition="all 0.3s"
//         height="100%"
//       >
//         <Icon as={icon} w={10} h={10} color={color} />
//         <Text fontSize="lg" fontWeight="bold" color={color} textAlign="center">
//           {title}
//         </Text>
//         <Text fontSize="3xl" fontWeight="bold" color={color}>
//           {currentCount.toLocaleString()}
//         </Text>
//         <Text fontSize="sm" color="gray.500" textAlign="center">
//           {description}
//         </Text>
//       </VStack>
//     </MotionBox>
//   );
// };

// const ScrollAnimation = ({ children }) => {
//   const controls = useAnimation();
//   const ref = useRef(null);
//   const inView = useInView(ref);

//   useEffect(() => {
//     if (inView) {
//       controls.start({ opacity: 1, y: 0 });
//     }
//   }, [controls, inView]);

//   return (
//     <MotionBox
//       ref={ref}
//       initial={{ opacity: 0, y: 50 }}
//       animate={controls}
//       transition={{ duration: 0.5 }}
//     >
//       {children}
//     </MotionBox>
//   );
// };

// const CourseCard = ({ name, icon, description, href }) => {
//   return (
//     <ScrollAnimation>
//       <MotionBox
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//       >
//         <Box
//           as="a"
//           href={href}
//           bg={useColorModeValue("white", "gray.800")}
//           p={6}
//           rounded="lg"
//           shadow="lg"
//           textAlign="center"
//           transition="all 0.3s"
//           _hover={{ shadow: "xl", bg: useColorModeValue("gray.50", "gray.700") }}
//           height="100%"
//           display="flex"
//           flexDirection="column"
//           justifyContent="space-between"
//           borderWidth="1px"
//           borderColor={useColorModeValue("gray.200", "gray.700")}
//         >
//           <VStack spacing={4}>
//             <Icon
//               as={icon}
//               w={12}
//               h={12}
//               color="teal.500"
//             />
//             <Heading as="h3" fontSize="xl" fontWeight="semibold">
//               {name}
//             </Heading>
//             <Text color={useColorModeValue("gray.600", "gray.300")} fontSize="sm">
//               {description}
//             </Text>
//           </VStack>
//           <Button
//             mt={4}
//             colorScheme="teal"
//             size="sm"
//             rightIcon={<FaArrowRight />}
//           >
//             Explore Courses
//           </Button>
//         </Box>
//       </MotionBox>
//     </ScrollAnimation>
//   );
// };

// export default function HomePage() {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const bgColor = useColorModeValue("gray.50", "gray.900");
//   const textColor = useColorModeValue("gray.800", "gray.100");
//   const isMobile = useBreakpointValue({ base: true, md: false });
//   const { colorMode, toggleColorMode } = useColorMode();
//   const [showScrollTop, setShowScrollTop] = useState(false);
//   const [email, setEmail] = useState("");
//   const [isEmailValid, setIsEmailValid] = useState(true);
//   const toast = useToast();

//   const handleScroll = useCallback(() => {
//     setShowScrollTop(window.pageYOffset > 300);
//   }, []);

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [handleScroll]);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//     setIsEmailValid(true);
//   };

//   const handleSubscribe = (e) => {
//     e.preventDefault();
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       setIsEmailValid(false);
//       return;
//     }
//     // Here you would typically send the email to your backend
//     console.log("Subscribing email:", email);
//     toast({
//       title: "Subscribed!",
//       description: "You've successfully subscribed to our newsletter.",
//       status: "success",
//       duration: 5000,
//       isClosable: true,
//     });
//     setEmail("");
//   };

//   return (
//     <Box minH="100vh" bg={bgColor} color={textColor}>
//       <Box
//         bgImage={`url(${bgImage})`}
//         bgSize="cover"
//         bgPosition="center"
//         position="relative"
//         minH={{ base: "100vh", md: "80vh" }}
//       >
//         <Box
//           position="absolute"
//           inset={0}
//           bg="linear-gradient(to bottom right, rgba(0,0,0,0.7), rgba(0,0,0,0.3))"
//         />
//         <Container maxW="container.xl" position="relative" zIndex={10}>
//           <Flex justifyContent="flex-end" pt={4}>
//             <Tooltip label={colorMode === "light" ? "Dark mode" : "Light mode"}>
//               <Button onClick={toggleColorMode} variant="ghost" color="white">
//                 <Icon as={colorMode === "light" ? FaMoon : FaSun} />
//               </Button>
//             </Tooltip>
//           </Flex>
//           <Flex
//             direction={{ base: "column", lg: "row" }}
//             align="center"
//             justify="space-between"
//             minH="inherit"
//             py={{ base: 20, md: 32 }}
//             px={{ base: 4, md: 8 }}
//           >
//             <MotionFlex
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               direction="column"
//               align={{ base: "center", lg: "flex-start" }}
//               textAlign={{ base: "center", lg: "left" }}
//               mb={{ base: 12, lg: 0 }}
//               maxW={{ base: "100%", lg: "50%" }}
//             >
//               <Heading
//                 as="h1"
//                 fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
//                 fontWeight="bold"
//                 color="white"
//                 mb={6}
//                 textShadow="2px 2px 4px rgba(0,0,0,0.4)"
//               >
//                 Kick Start Your Career!
//               </Heading>
//               <Text
//                 fontSize={{ base: "lg", md: "xl" }}
//                 color="white"
//                 mb={8}
//                 maxW="2xl"
//                 textShadow="1px 1px 2px rgba(0,0,0,0.4)"
//               >
//                 Join our engaging e-learning platform and unlock your potential. Start your journey to success today!
//               </Text>
//               <MotionBox
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <Button
//                   as="a"
//                   href="/it-courses"
//                   size={{ base: "md", md: "lg" }}
//                   colorScheme="teal"
//                   fontWeight="semibold"
//                   px={8}
//                   rounded="full"
//                   _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
//                   transition="all 0.3s"
//                   rightIcon={<FaArrowRight />}
//                 >
//                   Get Started
//                 </Button>
//               </MotionBox>
//             </MotionFlex>

//             {!isMobile && (
//               <MotionFlex
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.8, delay: 0.2 }}
//                 position="relative"
//                 w={{ base: "100%", lg: "50%" }}
//                 h={{ base: "300px", md: "400px", lg: "100%" }}
//                 justify="center"
//                 align="center"
//               >
//                 <Image
//                   src={Mentor}
//                   alt="Mentor"
//                   position="absolute"
//                   top="10%"
//                   left="0"
//                   w="45%"
//                   h="auto"
//                   objectFit="contain"
//                   rounded="lg"
//                   shadow="xl"
//                   zIndex={2}
//                   transition="transform 0.3s"
//                   _hover={{ transform: "scale(1.05)" }}
//                 />
//                 <Image
//                   src={Hero}
//                   alt="Hero"
//                   position="absolute"
//                   top="10%"
//                   right="0"
//                   w="45%"
//                   h="auto"
//                   objectFit="contain"
//                   rounded="lg"
//                   shadow="xl"
//                   zIndex={2}
//                   transition="transform 0.3s"
//                   _hover={{ transform: "scale(1.05)" }}
//                 />
//               </MotionFlex>
//             )}
//           </Flex>
//         </Container>
//       </Box>

//       <Box as="section" py={{ base: 16, md: 24 }}>
//         <Container maxW="container.xl">
//           <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 12, lg: 16 }} alignItems="start">
//             <ScrollAnimation>
//               <VStack align="start" spacing={6}>
//                 <Heading as="h2" fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }} fontWeight="bold" color="teal.600">
//                   Find Your Career Path
//                 </Heading>
//                 <Text fontSize={{ base: "lg", md: "xl" }} color="gray.600">
//                   Explore our diverse range of courses and kickstart your career
//                   journey. Whether you want to dive into programming, finance, or
//                   data analysis, we have something for everyone!
//                 </Text>
//                 <MotionBox
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   <Button
//                     as="a"
//                     href="/contact-us"
//                     size={{ base: "md", md: "lg" }}
//                     colorScheme="teal"
//                     fontWeight="semibold"
//                     px={8}
//                     rounded="full"
//                     _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
//                     transition="all 0.3s"
//                     rightIcon={<FaArrowRight />}
//                   >
//                     Get Started Today
//                   </Button>
//                 </MotionBox>
//               </VStack>
//             </ScrollAnimation>

//             <Box position="relative">
//               <Image
//                 src={FindHero}
//                 alt="FindHero"
//                 opacity={0.1}
//                 position="absolute"
//                 top="50%"
//                 left="50%"
//                 transform="translate(-50%, -50%)"
//                 zIndex={0}
//               />
//               <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} position="relative" zIndex={1}>
//                 <CourseCard
//                   name="IT Courses"
//                   href="/it-courses"
//                   icon={FaLaptopCode}
//                   description="Explore our technology-focused courses"
//                 />
//                 <CourseCard
//                   name="Non-IT Courses"
//                   href="/non-it-courses"
//                   icon={FaGraduationCap}
//                   description="Discover our non-technical course offerings"
//                 />
//               </SimpleGrid>
//             </Box>
//           </SimpleGrid>
//         </Container>
//       </Box>

//       <Box bg={useColorModeValue("gray.100", "gray.800")} py={{ base: 16, md: 24 }}>
//         <Container maxW="container.xl">
//           <VStack spacing={12}>
//             <Heading as="h2" fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }} fontWeight="bold" textAlign="center" color="teal.600">
//               Course Statistics
//             </Heading>
//             <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8} w="full">
//               {stats.map((stat, index) => (
//                 <AnimatedStat
//                   key={index}
//                   title={stat.title}
//                   count={stat.count}
//                   description={stat.description}
//                   duration={stat.duration}
//                   color={stat.color}
//                   icon={stat.icon}
//                 />
//               ))}
//             </SimpleGrid>
//           </VStack>
//         </Container>
//       </Box>

//       <Box bg={useColorModeValue("gray.50", "gray.900")} py={16}>
//         <Container maxW="container.xl">
//           <VStack spacing={12}>
//             <Heading as="h2" fontSize={{ base: "3xl", md: "4xl" }} textAlign="center">
//               What Our Students Say
//             </Heading>
//             <Box w="full" maxW="4xl" mx="auto">
//               <Swiper
//                 modules={[Pagination, Autoplay, EffectFade]}
//                 spaceBetween={30}
//                 slidesPerView={1}
//                 pagination={{ clickable: true }}
//                 autoplay={{ delay: 5000 }}
//                 effect="fade"
//               >
//                 {testimonials.map((testimonial, index) => (
//                   <SwiperSlide key={index}>
//                     <ScrollAnimation>
//                       <Box
//                         bg={useColorModeValue("white", "gray.800")}
//                         p={8}
//                         borderRadius="lg"
//                         boxShadow="xl"
//                         maxW="3xl"
//                         mx="auto"
//                         textAlign="center"
//                       >
//                         <Icon as={FaQuoteLeft} w={8} h={8} color="teal.500" mb={4} />
//                         <Text fontSize="xl" mb={6}>
//                           {testimonial.content}
//                         </Text>
//                         <Flex align="center" justify="center">
//                           <Avatar src={testimonial.avatar} size="lg" mr={4} />
//                           <Box>
//                             <Text fontWeight="bold">{testimonial.name}</Text>
//                             <Text fontSize="sm" color="gray.500">
//                               {testimonial.role}
//                             </Text>
//                           </Box>
//                         </Flex>
//                       </Box>
//                     </ScrollAnimation>
//                   </SwiperSlide>
//                 ))}
//               </Swiper>
//             </Box>
//           </VStack>
//         </Container>
//       </Box>

//       <Box bg={useColorModeValue("teal.500", "teal.600")} py={16} color={useColorModeValue("white", "gray.100")}>
//         <Container maxW="container.xl">
//           <VStack spacing={8} align="center" textAlign="center">
//             <ScrollAnimation>
//               <Heading as="h2" fontSize={{ base: "3xl", md: "4xl" }}>
//                 Stay Updated with Our Newsletter
//               </Heading>
//               <Text fontSize={{ base: "lg", md: "xl" }} maxW="2xl" mt={4}>
//                 Subscribe to our newsletter and get the latest updates on new courses, special offers, and learning tips delivered straight to your inbox.
//               </Text>
//               <Box as="form" w="100%" maxW="md" mt={8} onSubmit={handleSubscribe}>
//                 <VStack spacing={4}>
//                   <FormControl isInvalid={!isEmailValid}>
//                     <FormLabel htmlFor="email" srOnly>Email address</FormLabel>
//                     <Input
//                       id="email"
//                       type="email"
//                       placeholder="Enter your email"
//                       value={email}
//                       onChange={handleEmailChange}
//                       size="lg"
//                       bg="white"
//                       color="gray.800"
//                       _placeholder={{ color: "gray.500" }}
//                       _hover={{ borderColor: "teal.300" }}
//                       _focus={{ borderColor: "teal.300", boxShadow: "0 0 0 1px teal.300" }}
//                     />
//                     <FormErrorMessage>Please enter a valid email address</FormErrorMessage>
//                   </FormControl>
//                   <Button
//                     type="submit"
//                     colorScheme="whiteAlpha"
//                     size="lg"
//                     width="100%"
//                     _hover={{ bg: "whiteAlpha.300" }}
//                   >
//                     Subscribe
//                   </Button>
//                 </VStack>
//               </Box>
//             </ScrollAnimation>
//           </VStack>
//         </Container>
//       </Box>

//       <Modal isOpen={isOpen} onClose={onClose}>
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>Welcome to E-Learning</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody>
//             <Text>
//               Thank you for choosing us to enhance your skills! We are excited
//               to help you on your journey.
//             </Text>
//           </ModalBody>
//           <ModalFooter>
//             <Button colorScheme="teal" onClick={onClose}>
//               Close
//             </Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>

//       {showScrollTop && (
//         <Button
//           position="fixed"
//           bottom="20px"
//           right="20px"
//           zIndex={999}
//           colorScheme="teal"
//           size="lg"
//           rounded="full"
//           onClick={scrollToTop}
//           aria-label="Scroll to top"
//         >
//           <Icon as={FaChevronUp} />
//         </Button>
//       )}
//     </Box>
//   );
// }

// import React, { useState, useEffect, useRef, useCallback } from "react";
// import {
//   Box,
//   Container,
//   VStack,
//   Heading,
//   Text,
//   Button,
//   useDisclosure,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalFooter,
//   ModalBody,
//   ModalCloseButton,
//   Flex,
//   Image,
//   SimpleGrid,
//   Icon,
//   useColorModeValue,
//   Avatar,
//   Input,
//   useBreakpointValue,
//   Tooltip,
//   useColorMode,
//   FormControl,
//   FormLabel,
//   FormErrorMessage,
//   useToast,
//   Skeleton,
// } from "@chakra-ui/react";
// import { motion, useAnimation, useInView, AnimatePresence } from "framer-motion";
// import { FaLaptopCode, FaGraduationCap, FaClock, FaArrowRight, FaBook, FaUsers, FaQuoteLeft, FaSun, FaMoon, FaChevronUp, FaCommentDots, FaTimes } from "react-icons/fa";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Autoplay, EffectFade } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/effect-fade";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import "react-lazy-load-image-component/src/effects/blur.css";

// // Import your images here
// import Hero from "../assets/HeroBoy.png";
// import Mentor from "../assets/Mentor.png";
// import FindHero from "../assets/FindHero.png";
// import bgImage from "../assets/HomeBg.jpeg";

// const MotionBox = motion(Box);
// const MotionFlex = motion(Flex);
// const MotionButton = motion(Button);

// const stats = [
//   {
//     title: "Courses Offered",
//     count: 120,
//     description: "Courses available for enrollment",
//     duration: 2000,
//     color: "teal.600",
//     icon: FaBook,
//   },
//   {
//     title: "Students Enrolled",
//     count: 8500,
//     description: "Students currently enrolled in all courses",
//     duration: 2500,
//     color: "purple.600",
//     icon: FaUsers,
//   },
//   {
//     title: "Completed Courses",
//     count: 7000,
//     description: "Courses successfully completed by students",
//     duration: 3000,
//     color: "blue.600",
//     icon: FaGraduationCap,
//   },
//   {
//     title: "Active Instructors",
//     count: 50,
//     description: "Instructors teaching on the platform",
//     duration: 1500,
//     color: "orange.600",
//     icon: FaLaptopCode,
//   },
// ];

// const testimonials = [
//   {
//     name: "John Doe",
//     role: "Web Developer",
//     content: "This platform has been instrumental in advancing my career. The courses are well-structured and the instructors are top-notch.",
//     avatar: "/placeholder.svg?height=100&width=100&text=JD",
//   },
//   {
//     name: "Jane Smith",
//     role: "Data Scientist",
//     content: "I've taken several courses here and each one has significantly improved my skills. The practical projects are especially valuable.",
//     avatar: "/placeholder.svg?height=100&width=100&text=JS",
//   },
//   {
//     name: "Mike Johnson",
//     role: "UX Designer",
//     content: "The UX design course I took here was fantastic. It provided me with the skills I needed to land my dream job.",
//     avatar: "/placeholder.svg?height=100&width=100&text=MJ",
//   },
// ];

// const AnimatedStat = ({ title, count, description, duration, color, icon }) => {
//   const controls = useAnimation();
//   const ref = useRef(null);
//   const inView = useInView(ref);
//   const [currentCount, setCurrentCount] = useState(0);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     if (inView) {
//       controls.start({ opacity: 1, y: 0, scale: 1 });
//       let start = 0;
//       const end = parseInt(count.toString().replace(/,/g, ""));
//       if (start === end) return;

//       let timer = setInterval(() => {
//         start += 1;
//         setCurrentCount(start);
//         if (start === end) {
//           clearInterval(timer);
//           setIsLoading(false);
//         }
//       }, duration / end);

//       return () => {
//         clearInterval(timer);
//       };
//     }
//   }, [controls, inView, count, duration]);

//   return (
//     <MotionBox
//       ref={ref}
//       initial={{ opacity: 0, y: 20, scale: 0.9 }}
//       animate={controls}
//       transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
//     >
//       <VStack
//         spacing={4}
//         align="center"
//         p={6}
//         bg={useColorModeValue("white", "gray.800")}
//         rounded="lg"
//         shadow="md"
//         borderWidth="1px"
//         borderColor={useColorModeValue("gray.200", "gray.700")}
//         _hover={{ shadow: "lg", transform: "translateY(-5px)" }}
//         transition="all 0.3s"
//         height="100%"
//       >
//         <Icon as={icon} w={10} h={10} color={color} />
//         <Text fontSize="lg" fontWeight="bold" color={color} textAlign="center">
//           {title}
//         </Text>
//         <Skeleton isLoaded={!isLoading} width="100%" height="36px">
//           <Text fontSize="3xl" fontWeight="bold" color={color}>
//             {currentCount.toLocaleString()}
//           </Text>
//         </Skeleton>
//         <Text fontSize="sm" color="gray.500" textAlign="center">
//           {description}
//         </Text>
//       </VStack>
//     </MotionBox>
//   );
// };

// const ScrollAnimation = ({ children }) => {
//   const controls = useAnimation();
//   const ref = useRef(null);
//   const inView = useInView(ref);

//   useEffect(() => {
//     if (inView) {
//       controls.start({ opacity: 1, y: 0 });
//     }
//   }, [controls, inView]);

//   return (
//     <MotionBox
//       ref={ref}
//       initial={{ opacity: 0, y: 50 }}
//       animate={controls}
//       transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
//     >
//       {children}
//     </MotionBox>
//   );
// };

// const CourseCard = ({ name, icon, description, href }) => {
//   return (
//     <ScrollAnimation>
//       <MotionBox
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//       >
//         <Box
//           as="a"
//           href={href}
//           bg={useColorModeValue("white", "gray.800")}
//           p={6}
//           rounded="lg"
//           shadow="lg"
//           textAlign="center"
//           transition="all 0.3s"
//           _hover={{ shadow: "xl", bg: useColorModeValue("gray.50", "gray.700") }}
//           height="100%"
//           display="flex"
//           flexDirection="column"
//           justifyContent="space-between"
//           borderWidth="1px"
//           borderColor={useColorModeValue("gray.200", "gray.700")}
//         >
//           <VStack spacing={4}>
//             <Icon
//               as={icon}
//               w={12}
//               h={12}
//               color="teal.500"
//             />
//             <Heading as="h3" fontSize="xl" fontWeight="semibold">
//               {name}
//             </Heading>
//             <Text color={useColorModeValue("gray.600", "gray.300")} fontSize="sm">
//               {description}
//             </Text>
//           </VStack>
//           <MotionButton
//             mt={4}
//             colorScheme="teal"
//             size="sm"
//             rightIcon={<FaArrowRight />}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Explore Courses
//           </MotionButton>
//         </Box>
//       </MotionBox>
//     </ScrollAnimation>
//   );
// };

// const ChatButton = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <Box position="fixed" bottom="20px" right="20px" zIndex={1000}>
//       <AnimatePresence>
//         {isOpen && (
//           <MotionBox
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 20 }}
//             transition={{ duration: 0.3 }}
//             position="absolute"
//             bottom="70px"
//             right="0"
//             width="300px"
//             height="400px"
//             bg="white"
//             shadow="xl"
//             rounded="lg"
//             overflow="hidden"
//           >
//             <Box p={4} bg="teal.500" color="white">
//               <Heading size="md">Chat with us</Heading>
//             </Box>
//             <Box p={4} height="calc(100% - 60px)" overflowY="auto">
//               {/* Add your chat interface here */}
//               <Text>Chat messages will appear here...</Text>
//             </Box>
//           </MotionBox>
//         )}
//       </AnimatePresence>
//       <MotionButton
//         onClick={() => setIsOpen(!isOpen)}
//         colorScheme="teal"
//         size="lg"
//         rounded="full"
//         shadow="lg"
//         aria-label="Open chat"
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}
//       >
//         <Icon as={isOpen ? FaTimes : FaCommentDots} />
//       </MotionButton>
//     </Box>
//   );
// };

// export default function HomePage() {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const bgColor = useColorModeValue("gray.50", "gray.900");
//   const textColor = useColorModeValue("gray.800", "gray.100");
//   const isMobile = useBreakpointValue({ base: true, md: false });
//   const { colorMode, toggleColorMode } = useColorMode();
//   const [showScrollTop, setShowScrollTop] = useState(false);
//   const [email, setEmail] = useState("");
//   const [isEmailValid, setIsEmailValid] = useState(true);
//   const toast = useToast();

//   const handleScroll = useCallback(() => {
//     setShowScrollTop(window.pageYOffset > 300);
//   }, []);

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [handleScroll]);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//     setIsEmailValid(true);
//   };

//   const handleSubscribe = (e) => {
//     e.preventDefault();
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       setIsEmailValid(false);
//       return;
//     }
//     // Here you would typically send the email to your backend
//     console.log("Subscribing email:", email);
//     toast({
//       title: "Subscribed!",
//       description: "You've successfully subscribed to our newsletter.",
//       status: "success",
//       duration: 5000,
//       isClosable: true,
//     });
//     setEmail("");
//   };

//   return (
//     <Box minH="100vh" bg={bgColor} color={textColor}>
//       <Box
//         bgImage={`url(${bgImage})`}
//         bgSize="cover"
//         bgPosition="center"
//         position="relative"
//         minH={{ base: "100vh", md: "80vh" }}
//       >
//         <Box
//           position="absolute"
//           inset={0}
//           bg="linear-gradient(to bottom right, rgba(0,0,0,0.7), rgba(0,0,0,0.3))"
//         />
//         <Container maxW="container.xl" position="relative" zIndex={10}>
//           <Flex justifyContent="flex-end" pt={4}>
//             <Tooltip label={colorMode === "light" ? "Dark mode" : "Light mode"}>
//               <MotionButton
//                 onClick={toggleColorMode}
//                 variant="ghost"
//                 color="white"
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//               >
//                 <Icon as={colorMode === "light" ? FaMoon : FaSun} />
//               </MotionButton>
//             </Tooltip>
//           </Flex>
//           <Flex
//             direction={{ base: "column", lg: "row" }}
//             align="center"
//             justify="space-between"
//             minH="inherit"
//             py={{ base: 20, md: 32 }}
//             px={{ base: 4, md: 8 }}
//           >
//             <MotionFlex
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
//               direction="column"
//               align={{ base: "center", lg: "flex-start" }}
//               textAlign={{ base: "center", lg: "left" }}
//               mb={{ base: 12, lg: 0 }}
//               maxW={{ base: "100%", lg: "50%" }}
//             >
//               <Heading
//                 as="h1"
//                 fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
//                 fontWeight="bold"
//                 color="white"
//                 mb={6}
//                 textShadow="2px 2px 4px rgba(0,0,0,0.4)"
//               >
//                 Kick Start Your Career!
//               </Heading>
//               <Text
//                 fontSize={{ base: "lg", md: "xl" }}
//                 color="white"
//                 mb={8}
//                 maxW="2xl"
//                 textShadow="1px 1px 2px rgba(0,0,0,0.4)"
//               >
//                 Join our engaging e-learning platform and unlock your potential. Start your journey to success today!
//               </Text>
//               <MotionBox
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <Button
//                   as="a"
//                   href="/it-courses"
//                   size={{ base: "md", md: "lg" }}
//                   colorScheme="teal"
//                   fontWeight="semibold"
//                   px={8}
//                   rounded="full"
//                   _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
//                   transition="all 0.3s"
//                   rightIcon={<FaArrowRight />}
//                 >
//                   Get Started
//                 </Button>
//               </MotionBox>
//             </MotionFlex>

//             {!isMobile && (
//               <MotionFlex
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
//                 position="relative"
//                 w={{ base: "100%", lg: "50%" }}
//                 h={{ base: "300px", md: "400px", lg: "100%" }}
//                 justify="center"
//                 align="center"
//               >
//                 <LazyLoadImage
//                   src={Mentor}
//                   alt="Mentor"
//                   effect="blur"
//                   style={{
//                     position: "absolute",
//                     top: "10%",
//                     left: "0",
//                     width: "45%",
//                     height: "auto",
//                     objectFit: "contain",
//                     borderRadius: "0.5rem",
//                     boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
//                     zIndex: 2,
//                     transition: "transform 0.3s",
//                   }}
//                   wrapperProps={{
//                     style: {
//                       width: "45%",
//                       height: "auto",
//                     },
//                   }}
//                 />
//                 <LazyLoadImage
//                   src={Hero}
//                   alt="Hero"
//                   effect="blur"
//                   style={{
//                     position: "absolute",
//                     top: "10%",
//                     right: "0",
//                     width: "45%",
//                     height: "auto",
//                     objectFit: "contain",
//                     borderRadius: "0.5rem",
//                     boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
//                     zIndex: 2,
//                     transition: "transform 0.3s",
//                   }}
//                   wrapperProps={{
//                     style: {
//                       width: "45%",
//                       height: "auto",
//                     },
//                   }}
//                 />
//               </MotionFlex>
//             )}
//           </Flex>
//         </Container>
//       </Box>

//       <Box as="section" py={{ base: 16, md: 24 }}>
//         <Container maxW="container.xl">
//           <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 12, lg: 16 }} alignItems="start">
//             <ScrollAnimation>
//               <VStack align="start" spacing={6}>
//                 <Heading as="h2" fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }} fontWeight="bold" color="teal.600">
//                   Find Your Career Path
//                 </Heading>
//                 <Text fontSize={{ base: "lg", md: "xl" }} color="gray.600">
//                   Explore our diverse range of courses and kickstart your career
//                   journey. Whether you want to dive into programming, finance, or
//                   data analysis, we have something for everyone!
//                 </Text>
//                 <MotionBox
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   <Button
//                     as="a"
//                     href="/contact-us"
//                     size={{ base: "md", md: "lg" }}
//                     colorScheme="teal"
//                     fontWeight="semibold"
//                     px={8}
//                     rounded="full"
//                     _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
//                     transition="all 0.3s"
//                     rightIcon={<FaArrowRight />}
//                   >
//                     Get Started Today
//                   </Button>
//                 </MotionBox>
//               </VStack>
//             </ScrollAnimation>

//             <Box position="relative">
//               <LazyLoadImage
//                 src={FindHero}
//                 alt="FindHero"
//                 effect="blur"
//                 style={{
//                   opacity: 0.1,
//                   position: "absolute",
//                   top: "50%",
//                   left: "50%",
//                   transform: "translate(-50%, -50%)",
//                   zIndex: 0,
//                 }}
//               />
//               <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} position="relative" zIndex={1}>
//                 <CourseCard
//                   name="IT Courses"
//                   href="/it-courses"
//                   icon={FaLaptopCode}
//                   description="Explore our technology-focused courses"
//                 />
//                 <CourseCard
//                   name="Non-IT Courses"
//                   href="/non-it-courses"
//                   icon={FaGraduationCap}
//                   description="Discover our non-technical course offerings"
//                 />
//               </SimpleGrid>
//             </Box>
//           </SimpleGrid>
//         </Container>
//       </Box>

//       <Box bg={useColorModeValue("gray.100", "gray.800")} py={{ base: 16, md: 24 }}>
//         <Container maxW="container.xl">
//           <VStack spacing={12}>
//             <Heading as="h2" fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }} fontWeight="bold" textAlign="center" color="teal.600">
//               Course Statistics
//             </Heading>
//             <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8} w="full">
//               {stats.map((stat, index) => (
//                 <AnimatedStat
//                   key={index}
//                   title={stat.title}
//                   count={stat.count}
//                   description={stat.description}
//                   duration={stat.duration}
//                   color={stat.color}
//                   icon={stat.icon}
//                 />
//               ))}
//             </SimpleGrid>
//           </VStack>
//         </Container>
//       </Box>

//       <Box bg={useColorModeValue("gray.50", "gray.900")} py={16}>
//         <Container maxW="container.xl">
//           <VStack spacing={12}>
//             <Heading as="h2" fontSize={{ base: "3xl", md: "4xl" }} textAlign="center">
//               What Our Students Say
//             </Heading>
//             <Box w="full" maxW="4xl" mx="auto">
//               <Swiper
//                 modules={[Pagination, Autoplay, EffectFade]}
//                 spaceBetween={30}
//                 slidesPerView={1}
//                 pagination={{ clickable: true }}
//                 autoplay={{ delay: 5000 }}
//                 effect="fade"
//               >
//                 {testimonials.map((testimonial, index) => (
//                   <SwiperSlide key={index}>
//                     <ScrollAnimation>
//                       <Box
//                         bg={useColorModeValue("white", "gray.800")}
//                         p={8}
//                         borderRadius="lg"
//                         boxShadow="xl"
//                         maxW="3xl"
//                         mx="auto"
//                         textAlign="center"
//                       >
//                         <Icon as={FaQuoteLeft} w={8} h={8} color="teal.500" mb={4} />
//                         <Text fontSize="xl" mb={6}>
//                           {testimonial.content}
//                         </Text>
//                         <Flex align="center" justify="center">
//                           <Avatar src={testimonial.avatar} size="lg" mr={4} />
//                           <Box>
//                             <Text fontWeight="bold">{testimonial.name}</Text>
//                             <Text fontSize="sm" color="gray.500">
//                               {testimonial.role}
//                             </Text>
//                           </Box>
//                         </Flex>
//                       </Box>
//                     </ScrollAnimation>
//                   </SwiperSlide>
//                 ))}
//               </Swiper>
//             </Box>
//           </VStack>
//         </Container>
//       </Box>

//       <Box bg={useColorModeValue("teal.500", "teal.600")} py={16} color={useColorModeValue("white", "gray.100")}>
//         <Container maxW="container.xl">
//           <VStack spacing={8} align="center" textAlign="center">
//             <ScrollAnimation>
//               <Heading as="h2" fontSize={{ base: "3xl", md: "4xl" }}>
//                 Stay Updated with Our Newsletter
//               </Heading>
//               <Text fontSize={{ base: "lg", md: "xl" }} maxW="2xl" mt={4}>
//                 Subscribe to our newsletter and get the latest updates on new courses, special offers, and learning tips delivered straight to your inbox.
//               </Text>
//               <Box as="form" w="100%" maxW="md" mt={8} onSubmit={handleSubscribe}>
//                 <VStack spacing={4}>
//                   <FormControl isInvalid={!isEmailValid}>
//                     <FormLabel htmlFor="email" srOnly>Email address</FormLabel>
//                     <Input
//                       id="email"
//                       type="email"
//                       placeholder="Enter your email"
//                       value={email}
//                       onChange={handleEmailChange}
//                       size="lg"
//                       bg="white"
//                       color="gray.800"
//                       _placeholder={{ color: "gray.500" }}
//                       _hover={{ borderColor: "teal.300" }}
//                       _focus={{ borderColor: "teal.300", boxShadow: "0 0 0 1px teal.300" }}
//                     />
//                     <FormErrorMessage>Please enter a valid email address</FormErrorMessage>
//                   </FormControl>
//                   <MotionButton
//                     type="submit"
//                     colorScheme="whiteAlpha"
//                     size="lg"
//                     width="100%"
//                     _hover={{ bg: "whiteAlpha.300" }}
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     Subscribe
//                   </MotionButton>
//                 </VStack>
//               </Box>
//             </ScrollAnimation>
//           </VStack>
//         </Container>
//       </Box>

//       <Modal isOpen={isOpen} onClose={onClose}>
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>Welcome to E-Learning</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody>
//             <Text>
//               Thank you for choosing us to enhance your skills! We are excited
//               to help you on your journey.
//             </Text>
//           </ModalBody>
//           <ModalFooter>
//             <Button colorScheme="teal" onClick={onClose}>
//               Close
//             </Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>

//       <AnimatePresence>
//         {showScrollTop && (
//           <MotionBox
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 20 }}
//             transition={{ duration: 0.3 }}
//             position="fixed"
//             bottom="20px"
//             right="20px"
//             zIndex={999}
//           >
//             <MotionButton
//               colorScheme="teal"
//               size="lg"
//               rounded="full"
//               onClick={scrollToTop}
//               aria-label="Scroll to top"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//             >
//               <Icon as={FaChevronUp} />
//             </MotionButton>
//           </MotionBox>
//         )}
//       </AnimatePresence>

//       <ChatButton />
//     </Box>
//   );
// }

// import React, { useState, useEffect, useRef, useCallback } from "react";
// import {
//   Box,
//   Container,
//   VStack,
//   Heading,
//   Text,
//   Button,
//   useDisclosure,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalFooter,
//   ModalBody,
//   ModalCloseButton,
//   Flex,
//   SimpleGrid,
//   Icon,
//   useColorModeValue,
//   Avatar,
//   Input,
//   useBreakpointValue,
//   Tooltip,
//   useColorMode,
//   FormControl,
//   FormLabel,
//   FormErrorMessage,
//   useToast,
//   Skeleton,
// } from "@chakra-ui/react";
// import { motion, useAnimation, useInView, AnimatePresence } from "framer-motion";
// import { FaLaptopCode, FaGraduationCap, FaClock, FaArrowRight, FaBook, FaUsers, FaQuoteLeft, FaSun, FaMoon, FaChevronUp, FaCommentDots, FaTimes } from "react-icons/fa";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Autoplay, EffectFade } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/effect-fade";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import "react-lazy-load-image-component/src/effects/blur.css";

// // Import your images here
// import Hero from "../assets/HeroBoy.png";
// import Mentor from "../assets/Mentor.png";
// import FindHero from "../assets/FindHero.png";
// import bgImage from "../assets/HomeBg.jpeg";

// const MotionBox = motion(Box);
// const MotionFlex = motion(Flex);
// const MotionButton = motion(Button);

// const stats = [
//   {
//     title: "Courses Offered",
//     count: 120,
//     description: "Courses available for enrollment",
//     duration: 2000,
//     color: "teal.600",
//     icon: FaBook,
//   },
//   {
//     title: "Students Enrolled",
//     count: 8500,
//     description: "Students currently enrolled in all courses",
//     duration: 2500,
//     color: "purple.600",
//     icon: FaUsers,
//   },
//   {
//     title: "Completed Courses",
//     count: 7000,
//     description: "Courses successfully completed by students",
//     duration: 3000,
//     color: "blue.600",
//     icon: FaGraduationCap,
//   },
//   {
//     title: "Active Instructors",
//     count: 50,
//     description: "Instructors teaching on the platform",
//     duration: 1500,
//     color: "orange.600",
//     icon: FaLaptopCode,
//   },
// ];

// const testimonials = [
//   {
//     name: "John Doe",
//     role: "Web Developer",
//     content: "This platform has been instrumental in advancing my career. The courses are well-structured and the instructors are top-notch.",
//     avatar: "/placeholder.svg?height=100&width=100&text=JD",
//   },
//   {
//     name: "Jane Smith",
//     role: "Data Scientist",
//     content: "I've taken several courses here and each one has significantly improved my skills. The practical projects are especially valuable.",
//     avatar: "/placeholder.svg?height=100&width=100&text=JS",
//   },
//   {
//     name: "Mike Johnson",
//     role: "UX Designer",
//     content: "The UX design course I took here was fantastic. It provided me with the skills I needed to land my dream job.",
//     avatar: "/placeholder.svg?height=100&width=100&text=MJ",
//   },
// ];

// const AnimatedStat = ({ title, count, description, duration, color, icon }) => {
//   const controls = useAnimation();
//   const ref = useRef(null);
//   const inView = useInView(ref);
//   const [currentCount, setCurrentCount] = useState(0);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     if (inView) {
//       controls.start({ opacity: 1, y: 0, scale: 1 });
//       let start = 0;
//       const end = parseInt(count.toString().replace(/,/g, ""));
//       if (start === end) return;

//       let timer = setInterval(() => {
//         start += 1;
//         setCurrentCount(start);
//         if (start === end) {
//           clearInterval(timer);
//           setIsLoading(false);
//         }
//       }, duration / end);

//       return () => {
//         clearInterval(timer);
//       };
//     }
//   }, [controls, inView, count, duration]);

//   return (
//     <MotionBox
//       ref={ref}
//       initial={{ opacity: 0, y: 20, scale: 0.9 }}
//       animate={controls}
//       transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
//     >
//       <VStack
//         spacing={4}
//         align="center"
//         p={6}
//         bg={useColorModeValue("white", "gray.800")}
//         rounded="lg"
//         shadow="md"
//         borderWidth="1px"
//         borderColor={useColorModeValue("gray.200", "gray.700")}
//         _hover={{ shadow: "lg", transform: "translateY(-5px)" }}
//         transition="all 0.3s"
//         height="100%"
//       >
//         <Icon as={icon} w={10} h={10} color={color} />
//         <Text fontSize="lg" fontWeight="bold" color={color} textAlign="center">
//           {title}
//         </Text>
//         <Skeleton isLoaded={!isLoading} width="100%" height="36px">
//           <Text fontSize="3xl" fontWeight="bold" color={color}>
//             {currentCount.toLocaleString()}
//           </Text>
//         </Skeleton>
//         <Text fontSize="sm" color="gray.500" textAlign="center">
//           {description}
//         </Text>
//       </VStack>
//     </MotionBox>
//   );
// };

// const ScrollAnimation = ({ children }) => {
//   const controls = useAnimation();
//   const ref = useRef(null);
//   const inView = useInView(ref);

//   useEffect(() => {
//     if (inView) {
//       controls.start({ opacity: 1, y: 0 });
//     }
//   }, [controls, inView]);

//   return (
//     <MotionBox
//       ref={ref}
//       initial={{ opacity: 0, y: 50 }}
//       animate={controls}
//       transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
//     >
//       {children}
//     </MotionBox>
//   );
// };

// const CourseCard = ({ name, icon, description, href }) => {
//   return (
//     <ScrollAnimation>
//       <MotionBox
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//       >
//         <Box
//           as="a"
//           href={href}
//           bg={useColorModeValue("white", "gray.800")}
//           p={6}
//           rounded="lg"
//           shadow="lg"
//           textAlign="center"
//           transition="all 0.3s"
//           _hover={{ shadow: "xl", bg: useColorModeValue("gray.50", "gray.700") }}
//           height="100%"
//           display="flex"
//           flexDirection="column"
//           justifyContent="space-between"
//           borderWidth="1px"
//           borderColor={useColorModeValue("gray.200", "gray.700")}
//         >
//           <VStack spacing={4}>
//             <Icon
//               as={icon}
//               w={12}
//               h={12}
//               color="teal.500"
//             />
//             <Heading as="h3" fontSize="xl" fontWeight="semibold">
//               {name}
//             </Heading>
//             <Text color={useColorModeValue("gray.600", "gray.300")} fontSize="sm">
//               {description}
//             </Text>
//           </VStack>
//           <MotionButton
//             mt={4}
//             colorScheme="teal"
//             size="md"
//             width="100%"
//             rightIcon={<FaArrowRight />}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             bg="transparent"
//             border="2px solid"
//             borderColor="teal.500"
//             color="teal.500"
//             _hover={{
//               bg: "teal.500",
//               color: "white",
//             }}
//           >
//             Explore Courses
//           </MotionButton>
//         </Box>
//       </MotionBox>
//     </ScrollAnimation>
//   );
// };

// const ChatButton = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <Box position="fixed" bottom="20px" right="20px" zIndex={1000}>
//       <AnimatePresence>
//         {isOpen && (
//           <MotionBox
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 20 }}
//             transition={{ duration: 0.3 }}
//             position="absolute"
//             bottom="70px"
//             right="0"
//             width="300px"
//             height="400px"
//             bg="white"
//             shadow="xl"
//             rounded="lg"
//             overflow="hidden"
//           >
//             <Box p={4} bg="teal.500" color="white">
//               <Heading size="md">Chat with us</Heading>
//             </Box>
//             <Box p={4} height="calc(100% - 60px)" overflowY="auto">
//               {/* Add your chat interface here */}
//               <Text>Chat messages will appear here...</Text>
//             </Box>
//           </MotionBox>
//         )}
//       </AnimatePresence>
//       <MotionButton
//         onClick={() => setIsOpen(!isOpen)}
//         colorScheme="teal"
//         size="lg"
//         rounded="full"
//         shadow="lg"
//         aria-label="Open chat"
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}
//       >
//         <Icon as={isOpen ? FaTimes : FaCommentDots} />
//       </MotionButton>
//     </Box>
//   );
// };

// export default function HomePage() {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const bgColor = useColorModeValue("gray.50", "gray.900");
//   const textColor = useColorModeValue("gray.800", "gray.100");
//   const isMobile = useBreakpointValue({ base: true, md: false });
//   const { colorMode, toggleColorMode } = useColorMode();
//   const [showScrollTop, setShowScrollTop] = useState(false);
//   const [email, setEmail] = useState("");
//   const [isEmailValid, setIsEmailValid] = useState(true);
//   const toast = useToast();

//   const handleScroll = useCallback(() => {
//     setShowScrollTop(window.pageYOffset > 300);
//   }, []);

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [handleScroll]);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//     setIsEmailValid(true);
//   };

//   const handleSubscribe = (e) => {
//     e.preventDefault();
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       setIsEmailValid(false);
//       return;
//     }
//     // Here you would typically send the email to your backend
//     console.log("Subscribing email:", email);
//     toast({
//       title: "Subscribed!",
//       description: "You've successfully subscribed to our newsletter.",
//       status: "success",
//       duration: 5000,
//       isClosable: true,
//     });
//     setEmail("");
//   };

//   return (
//     <Box minH="100vh" bg={bgColor} color={textColor}>
//       <Box
//         bgImage={`url(${bgImage})`}
//         bgSize="cover"
//         bgPosition="center"
//         position="relative"
//         minH={{ base: "100vh", md: "80vh" }}
//       >
//         <Box
//           position="absolute"
//           inset={0}
//           bg="linear-gradient(to bottom right, rgba(0,0,0,0.7), rgba(0,0,0,0.3))"
//         />
//         <Container maxW="container.xl" position="relative" zIndex={10}>
//           <Flex justifyContent="flex-end" pt={4}>
//             <Tooltip label={colorMode === "light" ? "Dark mode" : "Light mode"}>
//               <MotionButton
//                 onClick={toggleColorMode}
//                 variant="ghost"
//                 color="white"
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//               >
//                 <Icon as={colorMode === "light" ? FaMoon : FaSun} />
//               </MotionButton>
//             </Tooltip>
//           </Flex>
//           <Flex
//             direction={{ base: "column", lg: "row" }}
//             align="center"
//             justify="space-between"
//             minH="inherit"
//             py={{ base: 20, md: 32 }}
//             px={{ base: 4, md: 8 }}
//           >
//             <MotionFlex
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
//               direction="column"
//               align={{ base: "center", lg: "flex-start" }}
//               textAlign={{ base: "center", lg: "left" }}
//               mb={{ base: 12, lg: 0 }}
//               maxW={{ base: "100%", lg: "50%" }}
//             >
//               <Heading
//                 as="h1"
//                 fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
//                 fontWeight="bold"
//                 color="white"
//                 mb={6}
//                 textShadow="2px 2px 4px rgba(0,0,0,0.4)"
//               >
//                 Kick Start Your Career!
//               </Heading>
//               <Text
//                 fontSize={{ base: "lg", md: "xl" }}
//                 color="white"
//                 mb={8}
//                 maxW="2xl"
//                 textShadow="1px 1px 2px rgba(0,0,0,0.4)"
//               >
//                 Join our engaging e-learning platform and unlock your potential. Start your journey to success today!
//               </Text>
//               <MotionBox
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <Button
//                   as="a"
//                   href="/it-courses"
//                   size={{ base: "md", md: "lg" }}
//                   colorScheme="teal"
//                   fontWeight="semibold"
//                   px={8}
//                   rounded="full"
//                   _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
//                   transition="all 0.3s"
//                   rightIcon={<FaArrowRight />}
//                 >
//                   Get Started
//                 </Button>
//               </MotionBox>
//             </MotionFlex>

//             {!isMobile && (
//               <MotionFlex
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
//                 position="relative"
//                 w={{ base: "100%", lg: "50%" }}
//                 h={{ base: "300px", md: "400px", lg: "100%" }}
//                 justify="center"
//                 align="center"
//               >
//                 <LazyLoadImage
//                   src={Mentor}
//                   alt="Mentor"
//                   effect="blur"
//                   style={{
//                     position: "absolute",
//                     top: "10%",
//                     left: "0",
//                     width: "45%",
//                     height: "auto",
//                     objectFit: "contain",
//                     borderRadius: "0.5rem",
//                     boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
//                     zIndex: 2,
//                     transition: "transform 0.3s",
//                   }}
//                   wrapperProps={{
//                     style: {
//                       width: "45%",
//                       height: "auto",
//                     },
//                   }}
//                 />
//                 <LazyLoadImage
//                   src={Hero}
//                   alt="Hero"
//                   effect="blur"
//                   style={{
//                     position: "absolute",
//                     top: "10%",
//                     right: "0",
//                     width: "45%",
//                     height: "auto",
//                     objectFit: "contain",
//                     borderRadius: "0.5rem",
//                     boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
//                     zIndex: 2,
//                     transition: "transform 0.3s",
//                   }}
//                   wrapperProps={{
//                     style: {
//                       width: "45%",
//                       height: "auto",
//                     },
//                   }}
//                 />
//               </MotionFlex>
//             )}
//           </Flex>
//         </Container>
//       </Box>

//       <Box as="section" py={{ base: 16, md: 24 }}>
//         <Container maxW="container.xl">
//           <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 12, lg: 16 }} alignItems="start">
//             <ScrollAnimation>
//               <VStack align="start" spacing={6}>
//                 <Heading as="h2" fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }} fontWeight="bold" color="teal.600">
//                   Find Your Career Path
//                 </Heading>
//                 <Text fontSize={{ base: "lg", md: "xl" }} color="gray.600">
//                   Explore our diverse range of courses and kickstart your career
//                   journey. Whether you want to dive into programming, finance, or
//                   data analysis, we have something for everyone!
//                 </Text>
//                 <MotionBox
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   <Button
//                     as="a"
//                     href="/contact-us"
//                     size={{ base: "md", md: "lg" }}
//                     colorScheme="teal"
//                     fontWeight="semibold"
//                     px={8}
//                     rounded="full"
//                     _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
//                     transition="all 0.3s"
//                     rightIcon={<FaArrowRight />}
//                   >
//                     Get Started Today
//                   </Button>
//                 </MotionBox>
//               </VStack>
//             </ScrollAnimation>

//             <Box position="relative">
//               <LazyLoadImage
//                 src={FindHero}
//                 alt="FindHero"
//                 effect="blur"
//                 style={{
//                   opacity: 0.1,
//                   position: "absolute",
//                   top: "50%",
//                   left: "50%",
//                   transform: "translate(-50%, -50%)",
//                   zIndex: 0,
//                 }}
//               />
//               <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} position="relative" zIndex={1}>
//                 <CourseCard
//                   name="IT Courses"
//                   href="/it-courses"
//                   icon={FaLaptopCode}
//                   description="Explore our technology-focused courses"
//                 />
//                 <CourseCard
//                   name="Non-IT Courses"
//                   href="/non-it-courses"
//                   icon={FaGraduationCap}
//                   description="Discover our non-technical course offerings"
//                 />
//               </SimpleGrid>
//             </Box>
//           </SimpleGrid>
//         </Container>
//       </Box>

//       <Box bg={useColorModeValue("gray.100", "gray.800")} py={{ base: 16, md: 24 }}>
//         <Container maxW="container.xl">
//           <VStack spacing={12}>
//             <Heading as="h2" fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }} fontWeight="bold" textAlign="center" color="teal.600">
//               Course Statistics
//             </Heading>
//             <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8} w="full">
//               {stats.map((stat, index) => (
//                 <AnimatedStat
//                   key={index}
//                   title={stat.title}
//                   count={stat.count}
//                   description={stat.description}
//                   duration={stat.duration}
//                   color={stat.color}
//                   icon={stat.icon}
//                 />
//               ))}
//             </SimpleGrid>
//           </VStack>
//         </Container>
//       </Box>

//       <Box bg={useColorModeValue("gray.50", "gray.900")} py={16}>
//         <Container maxW="container.xl">
//           <VStack spacing={12}>
//             <Heading as="h2" fontSize={{ base: "3xl", md: "4xl" }} textAlign="center">
//               What Our Students Say
//             </Heading>
//             <Box w="full" maxW="4xl" mx="auto">
//               <Swiper
//                 modules={[Pagination, Autoplay, EffectFade]}
//                 spaceBetween={30}
//                 slidesPerView={1}
//                 pagination={{ clickable: true }}
//                 autoplay={{ delay: 5000 }}
//                 effect="fade"
//               >
//                 {testimonials.map((testimonial, index) => (
//                   <SwiperSlide key={index}>
//                     <ScrollAnimation>
//                       <Box
//                         bg={useColorModeValue("white", "gray.800")}
//                         p={8}
//                         borderRadius="lg"
//                         boxShadow="xl"
//                         maxW="3xl"
//                         mx="auto"
//                         textAlign="center"
//                       >
//                         <Icon as={FaQuoteLeft} w={8} h={8} color="teal.500" mb={4} />
//                         <Text fontSize="xl" mb={6}>
//                           {testimonial.content}
//                         </Text>
//                         <Flex align="center" justify="center">
//                           <Avatar src={testimonial.avatar} size="lg" mr={4} />
//                           <Box>
//                             <Text fontWeight="bold">{testimonial.name}</Text>
//                             <Text fontSize="sm" color="gray.500">
//                               {testimonial.role}
//                             </Text>
//                           </Box>
//                         </Flex>
//                       </Box>
//                     </ScrollAnimation>
//                   </SwiperSlide>
//                 ))}
//               </Swiper>
//             </Box>
//           </VStack>
//         </Container>
//       </Box>

//       <Box bg={useColorModeValue("teal.500", "teal.600")} py={16} color={useColorModeValue("white", "gray.100")}>
//         <Container maxW="container.xl">
//           <VStack spacing={8} align="center" textAlign="center">
//             <ScrollAnimation>
//               <Heading as="h2" fontSize={{ base: "3xl", md: "4xl" }}>
//                 Stay Updated with Our Newsletter
//               </Heading>
//               <Text fontSize={{ base: "lg", md: "xl" }} maxW="2xl" mt={4}>
//                 Subscribe to our newsletter and get the latest updates on new courses, special offers, and learning tips delivered straight to your inbox.
//               </Text>
//               <Box as="form" w="100%" maxW="md" mt={8} onSubmit={handleSubscribe}>
//                 <VStack spacing={4}>
//                   <FormControl isInvalid={!isEmailValid}>
//                     <FormLabel htmlFor="email" srOnly>Email address</FormLabel>
//                     <Input
//                       id="email"
//                       type="email"
//                       placeholder="Enter your email"
//                       value={email}
//                       onChange={handleEmailChange}
//                       size="lg"
//                       bg="white"
//                       color="gray.800"
//                       _placeholder={{ color: "gray.500" }}
//                       _hover={{ borderColor: "teal.300" }}
//                       _focus={{ borderColor: "teal.300", boxShadow: "0 0 0 1px teal.300" }}
//                     />
//                     <FormErrorMessage>Please enter a valid email address</FormErrorMessage>
//                   </FormControl>
//                   <MotionButton
//                     type="submit"
//                     colorScheme="whiteAlpha"
//                     size="lg"
//                     width="100%"
//                     _hover={{ bg: "whiteAlpha.300" }}
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     Subscribe
//                   </MotionButton>
//                 </VStack>
//               </Box>
//             </ScrollAnimation>
//           </VStack>
//         </Container>
//       </Box>

//       <Modal isOpen={isOpen} onClose={onClose}>
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>Welcome to E-Learning</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody>
//             <Text>
//               Thank you for choosing us to enhance your skills! We are excited
//               to help you on your journey.
//             </Text>
//           </ModalBody>
//           <ModalFooter>
//             <Button colorScheme="teal" onClick={onClose}>
//               Close
//             </Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>

//       <AnimatePresence>
//         {showScrollTop && (
//           <MotionBox
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 20 }}
//             transition={{ duration: 0.3 }}
//             position="fixed"
//             bottom="20px"
//             right="20px"
//             zIndex={999}
//           >
//             <MotionButton
//               colorScheme="teal"
//               size="lg"
//               rounded="full"
//               onClick={scrollToTop}
//               aria-label="Scroll to top"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//             >
//               <Icon as={FaChevronUp} />
//             </MotionButton>
//           </MotionBox>
//         )}
//       </AnimatePresence>

//       <ChatButton />
//     </Box>
//   );
// }

// import React, { useState, useEffect, useRef, useCallback } from "react";
// import {
//   Box,
//   Container,
//   VStack,
//   Heading,
//   Text,
//   Button,
//   useDisclosure,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalFooter,
//   ModalBody,
//   ModalCloseButton,
//   Flex,
//   SimpleGrid,
//   Icon,
//   useColorModeValue,
//   Avatar,
//   Input,
//   useBreakpointValue,
//   Tooltip,
//   useColorMode,
//   FormControl,
//   FormLabel,
//   FormErrorMessage,
//   useToast,
//   Skeleton,
// } from "@chakra-ui/react";
// import { motion, useAnimation, useInView, AnimatePresence } from "framer-motion";
// import { FaLaptopCode, FaGraduationCap, FaClock, FaArrowRight, FaBook, FaUsers, FaQuoteLeft, FaSun, FaMoon, FaChevronUp, FaCommentDots, FaTimes } from "react-icons/fa";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Autoplay, EffectFade } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/effect-fade";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import "react-lazy-load-image-component/src/effects/blur.css";

// // Import your images here
// import Hero from "../assets/HeroBoy.png";
// import Mentor from "../assets/Mentor.png";
// import FindHero from "../assets/FindHero.png";
// import bgImage from "../assets/HomeBg.jpeg";

// const MotionBox = motion(Box);
// const MotionFlex = motion(Flex);
// const MotionButton = motion(Button);

// const stats = [
//   {
//     title: "Courses Offered",
//     count: 120,
//     description: "Courses available for enrollment",
//     duration: 2000,
//     color: "teal.600",
//     icon: FaBook,
//   },
//   {
//     title: "Students Enrolled",
//     count: 8500,
//     description: "Students currently enrolled in all courses",
//     duration: 2500,
//     color: "purple.600",
//     icon: FaUsers,
//   },
//   {
//     title: "Completed Courses",
//     count: 7000,
//     description: "Courses successfully completed by students",
//     duration: 3000,
//     color: "blue.600",
//     icon: FaGraduationCap,
//   },
//   {
//     title: "Active Instructors",
//     count: 50,
//     description: "Instructors teaching on the platform",
//     duration: 1500,
//     color: "orange.600",
//     icon: FaLaptopCode,
//   },
// ];

// const testimonials = [
//   {
//     name: "John Doe",
//     role: "Web Developer",
//     content: "This platform has been instrumental in advancing my career. The courses are well-structured and the instructors are top-notch.",
//     avatar: "/placeholder.svg?height=100&width=100&text=JD",
//   },
//   {
//     name: "Jane Smith",
//     role: "Data Scientist",
//     content: "I've taken several courses here and each one has significantly improved my skills. The practical projects are especially valuable.",
//     avatar: "/placeholder.svg?height=100&width=100&text=JS",
//   },
//   {
//     name: "Mike Johnson",
//     role: "UX Designer",
//     content: "The UX design course I took here was fantastic. It provided me with the skills I needed to land my dream job.",
//     avatar: "/placeholder.svg?height=100&width=100&text=MJ",
//   },
// ];

// const AnimatedStat = ({ title, count, description, duration, color, icon }) => {
//   const controls = useAnimation();
//   const ref = useRef(null);
//   const inView = useInView(ref);
//   const [currentCount, setCurrentCount] = useState(0);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     if (inView) {
//       controls.start({ opacity: 1, y: 0, scale: 1 });
//       let start = 0;
//       const end = parseInt(count.toString().replace(/,/g, ""));
//       if (start === end) return;

//       let timer = setInterval(() => {
//         start += 1;
//         setCurrentCount(start);
//         if (start === end) {
//           clearInterval(timer);
//           setIsLoading(false);
//         }
//       }, duration / end);

//       return () => {
//         clearInterval(timer);
//       };
//     }
//   }, [controls, inView, count, duration]);

//   return (
//     <MotionBox
//       ref={ref}
//       initial={{ opacity: 0, y: 20, scale: 0.9 }}
//       animate={controls}
//       transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
//     >
//       <VStack
//         spacing={4}
//         align="center"
//         p={6}
//         bg={useColorModeValue("white", "gray.800")}
//         rounded="lg"
//         shadow="md"
//         borderWidth="1px"
//         borderColor={useColorModeValue("gray.200", "gray.700")}
//         _hover={{ shadow: "lg", transform: "translateY(-5px)" }}
//         transition="all 0.3s"
//         height="100%"
//       >
//         <Icon as={icon} w={10} h={10} color={color} />
//         <Text fontSize="lg" fontWeight="bold" color={color} textAlign="center">
//           {title}
//         </Text>
//         <Skeleton isLoaded={!isLoading} width="100%" height="36px">
//           <Text fontSize="3xl" fontWeight="bold" color={color}>
//             {currentCount.toLocaleString()}
//           </Text>
//         </Skeleton>
//         <Text fontSize="sm" color="gray.500" textAlign="center">
//           {description}
//         </Text>
//       </VStack>
//     </MotionBox>
//   );
// };

// const ScrollAnimation = ({ children }) => {
//   const controls = useAnimation();
//   const ref = useRef(null);
//   const inView = useInView(ref);

//   useEffect(() => {
//     if (inView) {
//       controls.start({ opacity: 1, y: 0 });
//     }
//   }, [controls, inView]);

//   return (
//     <MotionBox
//       ref={ref}
//       initial={{ opacity: 0, y: 50 }}
//       animate={controls}
//       transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
//     >
//       {children}
//     </MotionBox>
//   );
// };

// const CourseCard = ({ name, icon, description, href }) => {
//   return (
//     <ScrollAnimation>
//       <MotionBox
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//       >
//         <Box
//           bg={useColorModeValue("white", "gray.800")}
//           p={6}
//           rounded="lg"
//           shadow="lg"
//           borderWidth="1px"
//           borderColor={useColorModeValue("gray.200", "gray.700")}
//           position="relative"
//           overflow="hidden"
//           height="100%"
//           display="flex"
//           flexDirection="column"
//           justifyContent="space-between"
//         >
//           <Box
//             position="absolute"
//             top="-20px"
//             left="-20px"
//             bg="teal.500"
//             w="80px"
//             h="80px"
//             transform="rotate(-45deg)"
//           />
//           <Icon
//             as={icon}
//             w={12}
//             h={12}
//             color="white"
//             position="absolute"
//             top="5px"
//             left="5px"
//             transform="rotate(45deg)"
//           />
//           <VStack spacing={4} align="start" zIndex={1}>
//             <Heading as="h3" fontSize="xl" fontWeight="bold">
//               {name}
//             </Heading>
//             <Text color={useColorModeValue("gray.600", "gray.300")} fontSize="sm">
//               {description}
//             </Text>
//           </VStack>
//           <MotionBox
//             as="a"
//             href={href}
//             mt={6}
//             display="inline-flex"
//             alignItems="center"
//             justifyContent="center"
//             px={5}
//             py={3}
//             border="solid 1px"
//             fontWeight="semibold"
//             rounded="lg"
//             shadow="md"
//             transition="all 0.2s"
//             color={useColorModeValue("teal.600", "teal.200")}
//             borderColor={useColorModeValue("teal.600", "teal.200")}
//             _hover={{
//               bg: useColorModeValue("teal.50", "teal.900"),
//             }}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Explore Courses
//             <Icon as={FaArrowRight} w={4} h={4} ml={2} />
//           </MotionBox>
//         </Box>
//       </MotionBox>
//     </ScrollAnimation>
//   );
// };

// const ChatButton = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <Box position="fixed" bottom="20px" right="20px" zIndex={1000}>
//       <AnimatePresence>
//         {isOpen && (
//           <MotionBox
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 20 }}
//             transition={{ duration: 0.3 }}
//             position="absolute"
//             bottom="70px"
//             right="0"
//             width="300px"
//             height="400px"
//             bg="white"
//             shadow="xl"
//             rounded="lg"
//             overflow="hidden"
//           >
//             <Box p={4} bg="teal.500" color="white">
//               <Heading size="md">Chat with us</Heading>
//             </Box>
//             <Box p={4} height="calc(100% - 60px)" overflowY="auto">
//               {/* Add your chat interface here */}
//               <Text>Chat messages will appear here...</Text>
//             </Box>
//           </MotionBox>
//         )}
//       </AnimatePresence>
//       <MotionButton
//         onClick={() => setIsOpen(!isOpen)}
//         colorScheme="teal"
//         size="lg"
//         rounded="full"
//         shadow="lg"
//         aria-label="Open chat"
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}
//       >
//         <Icon as={isOpen ? FaTimes : FaCommentDots} />
//       </MotionButton>
//     </Box>
//   );
// };

// export default function HomePage() {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const bgColor = useColorModeValue("gray.50", "gray.900");
//   const textColor = useColorModeValue("gray.800", "gray.100");
//   const isMobile = useBreakpointValue({ base: true, md: false });
//   const { colorMode, toggleColorMode } = useColorMode();
//   const [showScrollTop, setShowScrollTop] = useState(false);
//   const [email, setEmail] = useState("");
//   const [isEmailValid, setIsEmailValid] = useState(true);
//   const toast = useToast();

//   const handleScroll = useCallback(() => {
//     setShowScrollTop(window.pageYOffset > 300);
//   }, []);

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [handleScroll]);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//     setIsEmailValid(true);
//   };

//   const handleSubscribe = (e) => {
//     e.preventDefault();
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       setIsEmailValid(false);
//       return;
//     }
//     // Here you would typically send the email to your backend
//     console.log("Subscribing email:", email);
//     toast({
//       title: "Subscribed!",
//       description: "You've successfully subscribed to our newsletter.",
//       status: "success",
//       duration: 5000,
//       isClosable: true,
//     });
//     setEmail("");
//   };

//   return (
//     <Box minH="100vh" bg={bgColor} color={textColor}>
//       <Box
//         bgImage={`url(${bgImage})`}
//         bgSize="cover"
//         bgPosition="center"
//         position="relative"
//         minH={{ base: "100vh", md: "80vh" }}
//       >
//         <Box
//           position="absolute"
//           inset={0}
//           bg="linear-gradient(to bottom right, rgba(0,0,0,0.7), rgba(0,0,0,0.3))"
//         />
//         <Container maxW="container.xl" position="relative" zIndex={10}>
//           <Flex justifyContent="flex-end" pt={4}>
//             <Tooltip label={colorMode === "light" ? "Dark mode" : "Light mode"}>
//               <MotionButton
//                 onClick={toggleColorMode}
//                 variant="ghost"
//                 color="white"
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//               >
//                 <Icon as={colorMode === "light" ? FaMoon : FaSun} />
//               </MotionButton>
//             </Tooltip>
//           </Flex>
//           <Flex
//             direction={{ base: "column", lg: "row" }}
//             align="center"
//             justify="space-between"
//             minH="inherit"
//             py={{ base: 20, md: 32 }}
//             px={{ base: 4, md: 8 }}
//           >
//             <MotionFlex
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
//               direction="column"
//               align={{ base: "center", lg: "flex-start" }}
//               textAlign={{ base: "center", lg: "left" }}
//               mb={{ base: 12, lg: 0 }}
//               maxW={{ base: "100%", lg: "50%" }}
//             >
//               <Heading
//                 as="h1"
//                 fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
//                 fontWeight="bold"
//                 color="white"
//                 mb={6}
//                 textShadow="2px 2px 4px rgba(0,0,0,0.4)"
//               >
//                 Kick Start Your Career!
//               </Heading>
//               <Text
//                 fontSize={{ base: "lg", md: "xl" }}
//                 color="white"
//                 mb={8}
//                 maxW="2xl"
//                 textShadow="1px 1px 2px rgba(0,0,0,0.4)"
//               >
//                 Join our engaging e-learning platform and unlock your potential. Start your journey to success today!
//               </Text>
//               <MotionBox
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <Button
//                   as="a"
//                   href="/it-courses"
//                   size={{ base: "md", md: "lg" }}
//                   colorScheme="teal"
//                   fontWeight="semibold"
//                   px={8}
//                   rounded="full"
//                   _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
//                   transition="all 0.3s"
//                   rightIcon={<FaArrowRight />}
//                 >
//                   Get Started
//                 </Button>
//               </MotionBox>
//             </MotionFlex>

//             {!isMobile && (
//               <MotionFlex
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
//                 position="relative"
//                 w={{ base: "100%", lg: "50%" }}
//                 h={{ base: "300px", md: "400px", lg: "100%" }}
//                 justify="center"
//                 align="center"
//               >
//                 <LazyLoadImage
//                   src={Mentor}
//                   alt="Mentor"
//                   effect="blur"
//                   style={{
//                     position: "absolute",
//                     top: "10%",
//                     left: "0",
//                     width: "45%",
//                     height: "auto",
//                     objectFit: "contain",
//                     borderRadius: "0.5rem",
//                     boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
//                     zIndex: 2,
//                     transition: "transform 0.3s",
//                   }}
//                   wrapperProps={{
//                     style: {
//                       width: "45%",
//                       height: "auto",
//                     },
//                   }}
//                 />
//                 <LazyLoadImage
//                   src={Hero}
//                   alt="Hero"
//                   effect="blur"
//                   style={{
//                     position: "absolute",
//                     top: "10%",
//                     right: "0",
//                     width: "45%",
//                     height: "auto",
//                     objectFit: "contain",
//                     borderRadius: "0.5rem",
//                     boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
//                     zIndex: 2,
//                     transition: "transform 0.3s",
//                   }}
//                   wrapperProps={{
//                     style: {
//                       width: "45%",
//                       height: "auto",
//                     },
//                   }}
//                 />
//               </MotionFlex>
//             )}
//           </Flex>
//         </Container>
//       </Box>

//       <Box as="section" py={{ base: 16, md: 24 }}>
//         <Container maxW="container.xl">
//           <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 12, lg: 16 }} alignItems="start">
//             <ScrollAnimation>
//               <VStack align="start" spacing={6}>
//                 <Heading as="h2" fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }} fontWeight="bold" color="teal.600">
//                   Find Your Career Path
//                 </Heading>
//                 <Text fontSize={{ base: "lg", md: "xl" }} color="gray.600">
//                   Explore our diverse range of courses and kickstart your career
//                   journey. Whether you want to dive into programming, finance, or
//                   data analysis, we have something for everyone!
//                 </Text>
//                 <MotionBox
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   <Button
//                     as="a"
//                     href="/contact-us"
//                     size={{ base: "md", md: "lg" }}
//                     colorScheme="teal"
//                     fontWeight="semibold"
//                     px={8}
//                     rounded="full"
//                     _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
//                     transition="all 0.3s"
//                     rightIcon={<FaArrowRight />}
//                   >
//                     Get Started Today
//                   </Button>
//                 </MotionBox>
//               </VStack>
//             </ScrollAnimation>

//             <Box position="relative">
//               <LazyLoadImage
//                 src={FindHero}
//                 alt="FindHero"
//                 effect="blur"
//                 style={{
//                   opacity: 0.1,
//                   position: "absolute",
//                   top: "50%",
//                   left: "50%",
//                   transform: "translate(-50%, -50%)",
//                   zIndex: 0,
//                 }}
//               />
//               <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} position="relative" zIndex={1}>
//                 <CourseCard
//                   name="IT Courses"
//                   href="/it-courses"
//                   icon={FaLaptopCode}
//                   description="Explore our technology-focused courses"
//                 />
//                 <CourseCard
//                   name="Non-IT Courses"
//                   href="/non-it-courses"
//                   icon={FaGraduationCap}
//                   description="Discover our non-technical course offerings"
//                 />
//               </SimpleGrid>
//             </Box>
//           </SimpleGrid>
//         </Container>
//       </Box>

//       <Box bg={useColorModeValue("gray.100", "gray.800")} py={{ base: 16, md: 24 }}>
//         <Container maxW="container.xl">
//           <VStack spacing={12}>
//             <Heading as="h2" fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }} fontWeight="bold" textAlign="center" color="teal.600">
//               Course Statistics
//             </Heading>
//             <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8} w="full">
//               {stats.map((stat, index) => (
//                 <AnimatedStat
//                   key={index}
//                   title={stat.title}
//                   count={stat.count}
//                   description={stat.description}
//                   duration={stat.duration}
//                   color={stat.color}
//                   icon={stat.icon}
//                 />
//               ))}
//             </SimpleGrid>
//           </VStack>
//         </Container>
//       </Box>

//       <Box bg={useColorModeValue("gray.50", "gray.900")} py={16}>
//         <Container maxW="container.xl">
//           <VStack spacing={12}>
//             <Heading as="h2" fontSize={{ base: "3xl", md: "4xl" }} textAlign="center">
//               What Our Students Say
//             </Heading>
//             <Box w="full" maxW="4xl" mx="auto">
//               <Swiper
//                 modules={[Pagination, Autoplay, EffectFade]}
//                 spaceBetween={30}
//                 slidesPerView={1}
//                 pagination={{ clickable: true }}
//                 autoplay={{ delay: 5000 }}
//                 effect="fade"
//               >
//                 {testimonials.map((testimonial, index) => (
//                   <SwiperSlide key={index}>
//                     <ScrollAnimation>
//                       <Box
//                         bg={useColorModeValue("white", "gray.800")}
//                         p={8}
//                         borderRadius="lg"
//                         boxShadow="xl"
//                         maxW="3xl"
//                         mx="auto"
//                         textAlign="center"
//                       >
//                         <Icon as={FaQuoteLeft} w={8} h={8} color="teal.500" mb={4} />
//                         <Text fontSize="xl" mb={6}>
//                           {testimonial.content}
//                         </Text>
//                         <Flex align="center" justify="center">
//                           <Avatar src={testimonial.avatar} size="lg" mr={4} />
//                           <Box>
//                             <Text fontWeight="bold">{testimonial.name}</Text>
//                             <Text fontSize="sm" color="gray.500">
//                               {testimonial.role}
//                             </Text>
//                           </Box>
//                         </Flex>
//                       </Box>
//                     </ScrollAnimation>
//                   </SwiperSlide>
//                 ))}
//               </Swiper>
//             </Box>
//           </VStack>
//         </Container>
//       </Box>

//       <Box bg={useColorModeValue("teal.500", "teal.600")} py={16} color={useColorModeValue("white", "gray.100")}>
//         <Container maxW="container.xl">
//           <VStack spacing={8} align="center" textAlign="center">
//             <ScrollAnimation>
//               <Heading as="h2" fontSize={{ base: "3xl", md: "4xl" }}>
//                 Stay Updated with Our Newsletter
//               </Heading>
//               <Text fontSize={{ base: "lg", md: "xl" }} maxW="2xl" mt={4}>
//                 Subscribe to our newsletter and get the latest updates on new courses, special offers, and learning tips delivered straight to your inbox.
//               </Text>
//               <Box as="form" w="100%" maxW="md" mt={8} onSubmit={handleSubscribe}>
//                 <VStack spacing={4}>
//                   <FormControl isInvalid={!isEmailValid}>
//                     <FormLabel htmlFor="email" srOnly>Email address</FormLabel>
//                     <Input
//                       id="email"
//                       type="email"
//                       placeholder="Enter your email"
//                       value={email}
//                       onChange={handleEmailChange}
//                       size="lg"
//                       bg="white"
//                       color="gray.800"
//                       _placeholder={{ color: "gray.500" }}
//                       _hover={{ borderColor: "teal.300" }}
//                       _focus={{ borderColor: "teal.300", boxShadow: "0 0 0 1px teal.300" }}
//                     />
//                     <FormErrorMessage>Please enter a valid email address</FormErrorMessage>
//                   </FormControl>
//                   <MotionButton
//                     type="submit"
//                     colorScheme="whiteAlpha"
//                     size="lg"
//                     width="100%"
//                     _hover={{ bg: "whiteAlpha.300" }}
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     Subscribe
//                   </MotionButton>
//                 </VStack>
//               </Box>
//             </ScrollAnimation>
//           </VStack>
//         </Container>
//       </Box>

//       <Modal isOpen={isOpen} onClose={onClose}>
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>Welcome to E-Learning</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody>
//             <Text>
//               Thank you for choosing us to enhance your skills! We are excited
//               to help you on your journey.
//             </Text>
//           </ModalBody>
//           <ModalFooter>
//             <Button colorScheme="teal" onClick={onClose}>
//               Close
//             </Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>

//       <AnimatePresence>
//         {showScrollTop && (
//           <MotionBox
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 20 }}
//             transition={{ duration: 0.3 }}
//             position="fixed"
//             bottom="20px"
//             right="20px"
//             zIndex={999}
//           >
//             <MotionButton
//               colorScheme="teal"
//               size="lg"
//               rounded="full"
//               onClick={scrollToTop}
//               aria-label="Scroll to top"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//             >
//               <Icon as={FaChevronUp} />
//             </MotionButton>
//           </MotionBox>
//         )}
//       </AnimatePresence>

//       <ChatButton />
//     </Box>
//   );
// }

// import React, { useState, useEffect, useRef, useCallback } from "react";
// import {
//   Box,
//   Container,
//   VStack,
//   Heading,
//   Text,
//   Button,
//   useDisclosure,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalFooter,
//   ModalBody,
//   ModalCloseButton,
//   Flex,
//   SimpleGrid,
//   Icon,
//   useColorModeValue,
//   Avatar,
//   Input,
//   useBreakpointValue,
//   Tooltip,
//   useColorMode,
//   FormControl,
//   FormLabel,
//   FormErrorMessage,
//   useToast,
//   Skeleton,
// } from "@chakra-ui/react";
// import { motion, useAnimation, useInView, AnimatePresence } from "framer-motion";
// import { FaLaptopCode, FaGraduationCap, FaClock, FaArrowRight, FaBook, FaUsers, FaQuoteLeft, FaSun, FaMoon, FaChevronUp, FaCommentDots, FaTimes } from "react-icons/fa";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Autoplay, EffectFade } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/effect-fade";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import "react-lazy-load-image-component/src/effects/blur.css";

// // Import your images here
// import Hero from "../assets/HeroBoy.png";
// import Mentor from "../assets/Mentor.png";
// import FindHero from "../assets/FindHero.png";
// import bgImage from "../assets/HomeBg.jpeg";

// const MotionBox = motion(Box);
// const MotionFlex = motion(Flex);
// const MotionButton = motion(Button);

// const stats = [
//   {
//     title: "Courses Offered",
//     count: 120,
//     description: "Courses available for enrollment",
//     duration: 2000,
//     color: "teal.600",
//     icon: FaBook,
//   },
//   {
//     title: "Students Enrolled",
//     count: 8500,
//     description: "Students currently enrolled in all courses",
//     duration: 2500,
//     color: "purple.600",
//     icon: FaUsers,
//   },
//   {
//     title: "Completed Courses",
//     count: 7000,
//     description: "Courses successfully completed by students",
//     duration: 3000,
//     color: "blue.600",
//     icon: FaGraduationCap,
//   },
//   {
//     title: "Active Instructors",
//     count: 50,
//     description: "Instructors teaching on the platform",
//     duration: 1500,
//     color: "orange.600",
//     icon: FaLaptopCode,
//   },
// ];

// const testimonials = [
//   {
//     name: "John Doe",
//     role: "Web Developer",
//     content: "This platform has been instrumental in advancing my career. The courses are well-structured and the instructors are top-notch.",
//     avatar: "/placeholder.svg?height=100&width=100&text=JD",
//   },
//   {
//     name: "Jane Smith",
//     role: "Data Scientist",
//     content: "I've taken several courses here and each one has significantly improved my skills. The practical projects are especially valuable.",
//     avatar: "/placeholder.svg?height=100&width=100&text=JS",
//   },
//   {
//     name: "Mike Johnson",
//     role: "UX Designer",
//     content: "The UX design course I took here was fantastic. It provided me with the skills I needed to land my dream job.",
//     avatar: "/placeholder.svg?height=100&width=100&text=MJ",
//   },
// ];

// const AnimatedStat = ({ title, count, description, duration, color, icon }) => {
//   const controls = useAnimation();
//   const ref = useRef(null);
//   const inView = useInView(ref);
//   const [currentCount, setCurrentCount] = useState(0);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     if (inView) {
//       controls.start({ opacity: 1, y: 0, scale: 1 });
//       let start = 0;
//       const end = parseInt(count.toString().replace(/,/g, ""));
//       if (start === end) return;

//       let timer = setInterval(() => {
//         start += 1;
//         setCurrentCount(start);
//         if (start === end) {
//           clearInterval(timer);
//           setIsLoading(false);
//         }
//       }, duration / end);

//       return () => {
//         clearInterval(timer);
//       };
//     }
//   }, [controls, inView, count, duration]);

//   return (
//     <MotionBox
//       ref={ref}
//       initial={{ opacity: 0, y: 20, scale: 0.9 }}
//       animate={controls}
//       transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
//     >
//       <VStack
//         spacing={4}
//         align="center"
//         p={6}
//         bg={useColorModeValue("white", "gray.800")}
//         rounded="lg"
//         shadow="md"
//         borderWidth="1px"
//         borderColor={useColorModeValue("gray.200", "gray.700")}
//         _hover={{ shadow: "lg", transform: "translateY(-5px)" }}
//         transition="all 0.3s"
//         height="100%"
//       >
//         <Icon as={icon} w={10} h={10} color={color} />
//         <Text fontSize="lg" fontWeight="bold" color={color} textAlign="center">
//           {title}
//         </Text>
//         <Skeleton isLoaded={!isLoading} width="100%" height="36px">
//           <Text fontSize="3xl" fontWeight="bold" color={color}>
//             {currentCount.toLocaleString()}
//           </Text>
//         </Skeleton>
//         <Text fontSize="sm" color="gray.500" textAlign="center">
//           {description}
//         </Text>
//       </VStack>
//     </MotionBox>
//   );
// };

// const ScrollAnimation = ({ children }) => {
//   const controls = useAnimation();
//   const ref = useRef(null);
//   const inView = useInView(ref);

//   useEffect(() => {
//     if (inView) {
//       controls.start({ opacity: 1, y: 0 });
//     }
//   }, [controls, inView]);

//   return (
//     <MotionBox
//       ref={ref}
//       initial={{ opacity: 0, y: 50 }}
//       animate={controls}
//       transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
//     >
//       {children}
//     </MotionBox>
//   );
// };

// const CourseCard = ({ name, icon, description, href }) => {
//   const [isHovered, setIsHovered] = useState(false);
//   const bgColor = useColorModeValue("white", "gray.800");
//   const textColor = useColorModeValue("gray.800", "white");
//   const hoverBgColor = useColorModeValue("rgba(255, 255, 255, 0.9)", "rgba(26, 32, 44, 0.9)");

//   return (
//     <MotionBox
//       position="relative"
//       height="300px"
//       rounded="lg"
//       overflow="hidden"
//       onHoverStart={() => setIsHovered(true)}
//       onHoverEnd={() => setIsHovered(false)}
//     >
//       <Box
//         bg={bgColor}
//         p={6}
//         height="100%"
//         borderWidth="1px"
//         borderColor={useColorModeValue("gray.200", "gray.700")}
//       >
//         <VStack spacing={4} align="start" height="100%">
//           <Icon
//             as={icon}
//             w={12}
//             h={12}
//             color="teal.500"
//           />
//           <Heading as="h3" fontSize="xl" fontWeight="bold" color={textColor}>
//             {name}
//           </Heading>
//           <Text color={useColorModeValue("gray.600", "gray.300")} fontSize="sm">
//             {description}
//           </Text>
//         </VStack>
//       </Box>
//       <AnimatePresence>
//         {isHovered && (
//           <MotionBox
//             position="absolute"
//             top={0}
//             left={0}
//             right={0}
//             bottom={0}
//             bg={hoverBgColor}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.2 }}
//             display="flex"
//             alignItems="center"
//             justifyContent="center"
//             backdropFilter="blur(4px)"
//           >
//             <MotionBox
//               as="a"
//               href={href}
//               px={5}
//               py={3}
//               borderWidth="2px"
//               borderColor="teal.500"
//               rounded="lg"
//               fontWeight="semibold"
//               color="teal.500"
//               display="inline-flex"
//               alignItems="center"
//               initial={{ y: 20, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               exit={{ y: 20, opacity: 0 }}
//               transition={{ delay: 0.1 }}
//               _hover={{
//                 bg: "teal.500",
//                 color: "white",
//               }}
//             >
//               Explore Courses
//               <Icon as={FaArrowRight} w={4} h={4} ml={2} />
//             </MotionBox>
//           </MotionBox>
//         )}
//       </AnimatePresence>
//     </MotionBox>
//   );
// };

// const ChatButton = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <Box position="fixed" bottom="20px" right="20px" zIndex={1000}>
//       <AnimatePresence>
//         {isOpen && (
//           <MotionBox
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 20 }}
//             transition={{ duration: 0.3 }}
//             position="absolute"
//             bottom="70px"
//             right="0"
//             width="300px"
//             height="400px"
//             bg="white"
//             shadow="xl"
//             rounded="lg"
//             overflow="hidden"
//           >
//             <Box p={4} bg="teal.500" color="white">
//               <Heading size="md">Chat with us</Heading>
//             </Box>
//             <Box p={4} height="calc(100% - 60px)" overflowY="auto">
//               {/* Add your chat interface here */}
//               <Text>Chat messages will appear here...</Text>
//             </Box>
//           </MotionBox>
//         )}
//       </AnimatePresence>
//       <MotionButton
//         onClick={() => setIsOpen(!isOpen)}
//         colorScheme="teal"
//         size="lg"
//         rounded="full"
//         shadow="lg"
//         aria-label="Open chat"
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}
//       >
//         <Icon as={isOpen ? FaTimes : FaCommentDots} />
//       </MotionButton>
//     </Box>
//   );
// };

// export default function HomePage() {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const bgColor = useColorModeValue("gray.50", "gray.900");
//   const textColor = useColorModeValue("gray.800", "gray.100");
//   const isMobile = useBreakpointValue({ base: true, md: false });
//   const { colorMode, toggleColorMode } = useColorMode();
//   const [showScrollTop, setShowScrollTop] = useState(false);
//   const [email, setEmail] = useState("");
//   const [isEmailValid, setIsEmailValid] = useState(true);
//   const toast = useToast();

//   const handleScroll = useCallback(() => {
//     setShowScrollTop(window.pageYOffset > 300);
//   }, []);

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [handleScroll]);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//     setIsEmailValid(true);
//   };

//   const handleSubscribe = (e) => {
//     e.preventDefault();
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       setIsEmailValid(false);
//       return;
//     }
//     // Here you would typically send the email to your backend
//     console.log("Subscribing email:", email);
//     toast({
//       title: "Subscribed!",
//       description: "You've successfully subscribed to our newsletter.",
//       status: "success",
//       duration: 5000,
//       isClosable: true,
//     });
//     setEmail("");
//   };

//   return (
//     <Box minH="100vh" bg={bgColor} color={textColor}>
//       <Box
//         bgImage={`url(${bgImage})`}
//         bgSize="cover"
//         bgPosition="center"
//         position="relative"
//         minH={{ base: "100vh", md: "80vh" }}
//       >
//         <Box
//           position="absolute"
//           inset={0}
//           bg="linear-gradient(to bottom right, rgba(0,0,0,0.7), rgba(0,0,0,0.3))"
//         />
//         <Container maxW="container.xl" position="relative" zIndex={10}>
//           <Flex justifyContent="flex-end" pt={4}>
//             <Tooltip label={colorMode === "light" ? "Dark mode" : "Light mode"}>
//               <MotionButton
//                 onClick={toggleColorMode}
//                 variant="ghost"
//                 color="white"
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//               >
//                 <Icon as={colorMode === "light" ? FaMoon : FaSun} />
//               </MotionButton>
//             </Tooltip>
//           </Flex>
//           <Flex
//             direction={{ base: "column", lg: "row" }}
//             align="center"
//             justify="space-between"
//             minH="inherit"
//             py={{ base: 20, md: 32 }}
//             px={{ base: 4, md: 8 }}
//           >
//             <MotionFlex
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
//               direction="column"
//               align={{ base: "center", lg: "flex-start" }}
//               textAlign={{ base: "center", lg: "left" }}
//               mb={{ base: 12, lg: 0 }}
//               maxW={{ base: "100%", lg: "50%" }}
//             >
//               <Heading
//                 as="h1"
//                 fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
//                 fontWeight="bold"
//                 color="white"
//                 mb={6}
//                 textShadow="2px 2px 4px rgba(0,0,0,0.4)"
//               >
//                 Kick Start Your Career!
//               </Heading>
//               <Text
//                 fontSize={{ base: "lg", md: "xl" }}
//                 color="white"
//                 mb={8}
//                 maxW="2xl"
//                 textShadow="1px 1px 2px rgba(0,0,0,0.4)"
//               >
//                 Join our engaging e-learning platform and unlock your potential. Start your journey to success today!
//               </Text>
//               <MotionBox
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <Button
//                   as="a"
//                   href="/it-courses"
//                   size={{ base: "md", md: "lg" }}
//                   colorScheme="teal"
//                   fontWeight="semibold"
//                   px={8}
//                   rounded="full"
//                   _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
//                   transition="all 0.3s"
//                   rightIcon={<FaArrowRight />}
//                 >
//                   Get Started
//                 </Button>
//               </MotionBox>
//             </MotionFlex>

//             {!isMobile && (
//               <MotionFlex
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
//                 position="relative"
//                 w={{ base: "100%", lg: "50%" }}
//                 h={{ base: "300px", md: "400px", lg: "100%" }}
//                 justify="center"
//                 align="center"
//               >
//                 <LazyLoadImage
//                   src={Mentor}
//                   alt="Mentor"
//                   effect="blur"
//                   style={{
//                     position: "absolute",
//                     top: "10%",
//                     left: "0",
//                     width: "45%",
//                     height: "auto",
//                     objectFit: "contain",
//                     borderRadius: "0.5rem",
//                     boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
//                     zIndex: 2,
//                     transition: "transform 0.3s",
//                   }}
//                   wrapperProps={{
//                     style: {
//                       width: "45%",
//                       height: "auto",
//                     },
//                   }}
//                 />
//                 <LazyLoadImage
//                   src={Hero}
//                   alt="Hero"
//                   effect="blur"
//                   style={{
//                     position: "absolute",
//                     top: "10%",
//                     right: "0",
//                     width: "45%",
//                     height: "auto",
//                     objectFit: "contain",
//                     borderRadius: "0.5rem",
//                     boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
//                     zIndex: 2,
//                     transition: "transform 0.3s",
//                   }}
//                   wrapperProps={{
//                     style: {
//                       width: "45%",
//                       height: "auto",
//                     },
//                   }}
//                 />
//               </MotionFlex>
//             )}
//           </Flex>
//         </Container>
//       </Box>

//       <Box as="section" py={{ base: 16, md: 24 }}>
//         <Container maxW="container.xl">
//           <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 12, lg: 16 }} alignItems="start">
//             <ScrollAnimation>
//               <VStack align="start" spacing={6}>
//                 <Heading as="h2" fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }} fontWeight="bold" color="teal.600">
//                   Find Your Career Path
//                 </Heading>
//                 <Text fontSize={{ base: "lg", md: "xl" }} color="gray.600">
//                   Explore our diverse range of courses and kickstart your career
//                   journey. Whether you want to dive into programming, finance, or
//                   data analysis, we have something for everyone!
//                 </Text>
//                 <MotionBox
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   <Button
//                     as="a"
//                     href="/contact-us"
//                     size={{ base: "md", md: "lg" }}
//                     colorScheme="teal"
//                     fontWeight="semibold"
//                     px={8}
//                     rounded="full"
//                     _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
//                     transition="all 0.3s"
//                     rightIcon={<FaArrowRight />}
//                   >
//                     Get Started Today
//                   </Button>
//                 </MotionBox>
//               </VStack>
//             </ScrollAnimation>

//             <Box position="relative">
//               <LazyLoadImage
//                 src={FindHero}
//                 alt="FindHero"
//                 effect="blur"
//                 style={{
//                   opacity: 0.1,
//                   position: "absolute",
//                   top: "50%",
//                   left: "50%",
//                   transform: "translate(-50%, -50%)",
//                   zIndex: 0,
//                 }}
//               />
//               <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} position="relative" zIndex={1}>
//                 <CourseCard
//                   name="IT Courses"
//                   href="/it-courses"
//                   icon={FaLaptopCode}
//                   description="Explore our technology-focused courses"
//                 />
//                 <CourseCard
//                   name="Non-IT Courses"
//                   href="/non-it-courses"
//                   icon={FaGraduationCap}
//                   description="Discover our non-technical course offerings"
//                 />
//               </SimpleGrid>
//             </Box>
//           </SimpleGrid>
//         </Container>
//       </Box>

//       <Box bg={useColorModeValue("gray.100", "gray.800")} py={{ base: 16, md: 24 }}>
//         <Container maxW="container.xl">
//           <VStack spacing={12}>
//             <Heading as="h2" fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }} fontWeight="bold" textAlign="center" color="teal.600">
//               Course Statistics
//             </Heading>
//             <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8} w="full">
//               {stats.map((stat, index) => (
//                 <AnimatedStat
//                   key={index}
//                   title={stat.title}
//                   count={stat.count}
//                   description={stat.description}
//                   duration={stat.duration}
//                   color={stat.color}
//                   icon={stat.icon}
//                 />
//               ))}
//             </SimpleGrid>
//           </VStack>
//         </Container>
//       </Box>

//       <Box bg={useColorModeValue("gray.50", "gray.900")} py={16}>
//         <Container maxW="container.xl">
//           <VStack spacing={12}>
//             <Heading as="h2" fontSize={{ base: "3xl", md: "4xl" }} textAlign="center">
//               What Our Students Say
//             </Heading>
//             <Box w="full" maxW="4xl" mx="auto">
//               <Swiper
//                 modules={[Pagination, Autoplay, EffectFade]}
//                 spaceBetween={30}
//                 slidesPerView={1}
//                 pagination={{ clickable: true }}
//                 autoplay={{ delay: 5000 }}
//                 effect="fade"
//               >
//                 {testimonials.map((testimonial, index) => (
//                   <SwiperSlide key={index}>
//                     <ScrollAnimation>
//                       <Box
//                         bg={useColorModeValue("white", "gray.800")}
//                         p={8}
//                         borderRadius="lg"
//                         boxShadow="xl"
//                         maxW="3xl"
//                         mx="auto"
//                         textAlign="center"
//                       >
//                         <Icon as={FaQuoteLeft} w={8} h={8} color="teal.500" mb={4} />
//                         <Text fontSize="xl" mb={6}>
//                           {testimonial.content}
//                         </Text>
//                         <Flex align="center" justify="center">
//                           <Avatar src={testimonial.avatar} size="lg" mr={4} />
//                           <Box>
//                             <Text fontWeight="bold">{testimonial.name}</Text>
//                             <Text fontSize="sm" color="gray.500">
//                               {testimonial.role}
//                             </Text>
//                           </Box>
//                         </Flex>
//                       </Box>
//                     </ScrollAnimation>
//                   </SwiperSlide>
//                 ))}
//               </Swiper>
//             </Box>
//           </VStack>
//         </Container>
//       </Box>

//       <Box bg={useColorModeValue("teal.500", "teal.600")} py={16} color={useColorModeValue("white", "gray.100")}>
//         <Container maxW="container.xl">
//           <VStack spacing={8} align="center" textAlign="center">
//             <ScrollAnimation>
//               <Heading as="h2" fontSize={{ base: "3xl", md: "4xl" }}>
//                 Stay Updated with Our Newsletter
//               </Heading>
//               <Text fontSize={{ base: "lg", md: "xl" }} maxW="2xl" mt={4}>
//                 Subscribe to our newsletter and get the latest updates on new courses, special offers, and learning tips delivered straight to your inbox.
//               </Text>
//               <Box as="form" w="100%" maxW="md" mt={8} onSubmit={handleSubscribe}>
//                 <VStack spacing={4}>
//                   <FormControl isInvalid={!isEmailValid}>
//                     <FormLabel htmlFor="email" srOnly>Email address</FormLabel>
//                     <Input
//                       id="email"
//                       type="email"
//                       placeholder="Enter your email"
//                       value={email}
//                       onChange={handleEmailChange}
//                       size="lg"
//                       bg="white"
//                       color="gray.800"
//                       _placeholder={{ color: "gray.500" }}
//                       _hover={{ borderColor: "teal.300" }}
//                       _focus={{ borderColor: "teal.300", boxShadow: "0 0 0 1px teal.300" }}
//                     />
//                     <FormErrorMessage>Please enter a valid email address</FormErrorMessage>
//                   </FormControl>
//                   <MotionButton
//                     type="submit"
//                     colorScheme="whiteAlpha"
//                     size="lg"
//                     width="100%"
//                     _hover={{ bg: "whiteAlpha.300" }}
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     Subscribe
//                   </MotionButton>
//                 </VStack>
//               </Box>
//             </ScrollAnimation>
//           </VStack>
//         </Container>
//       </Box>

//       <Modal isOpen={isOpen} onClose={onClose}>
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>Welcome to E-Learning</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody>
//             <Text>
//               Thank you for choosing us to enhance your skills! We are excited
//               to help you on your journey.
//             </Text>
//           </ModalBody>
//           <ModalFooter>
//             <Button colorScheme="teal" onClick={onClose}>
//               Close
//             </Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>

//       <AnimatePresence>
//         {showScrollTop && (
//           <MotionBox
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 20 }}
//             transition={{ duration: 0.3 }}
//             position="fixed"
//             bottom="20px"
//             right="20px"
//             zIndex={999}
//           >
//             <MotionButton
//               colorScheme="teal"
//               size="lg"
//               rounded="full"
//               onClick={scrollToTop}
//               aria-label="Scroll to top"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//             >
//               <Icon as={FaChevronUp} />
//             </MotionButton>
//           </MotionBox>
//         )}
//       </AnimatePresence>

//       <ChatButton />
//     </Box>
//   );
// }

// import React, { useState, useEffect, useRef, useCallback } from "react";
// import {
//   Box,
//   Container,
//   VStack,
//   Heading,
//   Text,
//   Button,
//   useDisclosure,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalFooter,
//   ModalBody,
//   ModalCloseButton,
//   Flex,
//   SimpleGrid,
//   Icon,
//   useColorModeValue,
//   Avatar,
//   Input,
//   useBreakpointValue,
//   Tooltip,
//   useColorMode,
//   FormControl,
//   FormLabel,
//   FormErrorMessage,
//   useToast,
//   Skeleton,
// } from "@chakra-ui/react";
// import { motion, useAnimation, useInView, AnimatePresence } from "framer-motion";
// import { FaLaptopCode, FaGraduationCap, FaClock, FaArrowRight, FaBook, FaUsers, FaQuoteLeft, FaSun, FaMoon, FaChevronUp, FaCommentDots, FaTimes } from "react-icons/fa";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Autoplay, EffectFade } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/effect-fade";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import "react-lazy-load-image-component/src/effects/blur.css";

// // Import your images here
// import Hero from "../assets/HeroBoy.png";
// import Mentor from "../assets/Mentor.png";
// import FindHero from "../assets/FindHero.png";
// import bgImage from "../assets/HomeBg.jpeg";

// const MotionBox = motion(Box);
// const MotionFlex = motion(Flex);
// const MotionButton = motion(Button);

// const stats = [
//   {
//     title: "Courses Offered",
//     count: 120,
//     description: "Courses available for enrollment",
//     duration: 2000,
//     color: "teal.600",
//     icon: FaBook,
//   },
//   {
//     title: "Students Enrolled",
//     count: 8500,
//     description: "Students currently enrolled in all courses",
//     duration: 2500,
//     color: "purple.600",
//     icon: FaUsers,
//   },
//   {
//     title: "Completed Courses",
//     count: 7000,
//     description: "Courses successfully completed by students",
//     duration: 3000,
//     color: "blue.600",
//     icon: FaGraduationCap,
//   },
//   {
//     title: "Active Instructors",
//     count: 50,
//     description: "Instructors teaching on the platform",
//     duration: 1500,
//     color: "orange.600",
//     icon: FaLaptopCode,
//   },
// ];

// const testimonials = [
//   {
//     name: "John Doe",
//     role: "Web Developer",
//     content: "This platform has been instrumental in advancing my career. The courses are well-structured and the instructors are top-notch.",
//     avatar: "/placeholder.svg?height=100&width=100&text=JD",
//   },
//   {
//     name: "Jane Smith",
//     role: "Data Scientist",
//     content: "I've taken several courses here and each one has significantly improved my skills. The practical projects are especially valuable.",
//     avatar: "/placeholder.svg?height=100&width=100&text=JS",
//   },
//   {
//     name: "Mike Johnson",
//     role: "UX Designer",
//     content: "The UX design course I took here was fantastic. It provided me with the skills I needed to land my dream job.",
//     avatar: "/placeholder.svg?height=100&width=100&text=MJ",
//   },
// ];

// const AnimatedStat = ({ title, count, description, duration, color, icon }) => {
//   const controls = useAnimation();
//   const ref = useRef(null);
//   const inView = useInView(ref);
//   const [currentCount, setCurrentCount] = useState(0);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     if (inView) {
//       controls.start({ opacity: 1, y: 0, scale: 1 });
//       let start = 0;
//       const end = parseInt(count.toString().replace(/,/g, ""));
//       if (start === end) return;

//       let timer = setInterval(() => {
//         start += 1;
//         setCurrentCount(start);
//         if (start === end) {
//           clearInterval(timer);
//           setIsLoading(false);
//         }
//       }, duration / end);

//       return () => {
//         clearInterval(timer);
//       };
//     }
//   }, [controls, inView, count, duration]);

//   return (
//     <MotionBox
//       ref={ref}
//       initial={{ opacity: 0, y: 20, scale: 0.9 }}
//       animate={controls}
//       transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
//     >
//       <VStack
//         spacing={4}
//         align="center"
//         p={6}
//         bg={useColorModeValue("white", "gray.800")}
//         rounded="lg"
//         shadow="md"
//         borderWidth="1px"
//         borderColor={useColorModeValue("gray.200", "gray.700")}
//         _hover={{ shadow: "lg", transform: "translateY(-5px)" }}
//         transition="all 0.3s"
//         height="100%"
//       >
//         <Icon as={icon} w={10} h={10} color={color} />
//         <Text fontSize="lg" fontWeight="bold" color={color} textAlign="center">
//           {title}
//         </Text>
//         <Skeleton isLoaded={!isLoading} width="100%" height="36px">
//           <Text fontSize="3xl" fontWeight="bold" color={color}>
//             {currentCount.toLocaleString()}
//           </Text>
//         </Skeleton>
//         <Text fontSize="sm" color="gray.500" textAlign="center">
//           {description}
//         </Text>
//       </VStack>
//     </MotionBox>
//   );
// };

// const ScrollAnimation = ({ children }) => {
//   const controls = useAnimation();
//   const ref = useRef(null);
//   const inView = useInView(ref);

//   useEffect(() => {
//     if (inView) {
//       controls.start({ opacity: 1, y: 0 });
//     }
//   }, [controls, inView]);

//   return (
//     <MotionBox
//       ref={ref}
//       initial={{ opacity: 0, y: 50 }}
//       animate={controls}
//       transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
//     >
//       {children}
//     </MotionBox>
//   );
// };

// const CourseCard = ({ name, icon, description, href }) => {
//   const [isHovered, setIsHovered] = useState(false);
//   const bgColor = useColorModeValue("white", "gray.800");
//   const textColor = useColorModeValue("gray.800", "white");
//   const hoverBgColor = useColorModeValue("rgba(255, 255, 255, 0.9)", "rgba(26, 32, 44, 0.9)");
//   const accentColor = useColorModeValue("teal.500", "teal.300");

//   return (
//     <MotionBox
//       position="relative"
//       height="300px"
//       rounded="lg"
//       overflow="hidden"
//       onHoverStart={() => setIsHovered(true)}
//       onHoverEnd={() => setIsHovered(false)}
//       whileHover={{ scale: 1.05 }}
//       transition={{ duration: 0.3 }}
//     >
//       <Box
//         bg={bgColor}
//         p={6}
//         height="100%"
//         borderWidth="1px"
//         borderColor={useColorModeValue("gray.200", "gray.700")}
//         position="relative"
//         zIndex={1}
//       >
//         <VStack spacing={4} align="start" height="100%">
//           <Icon
//             as={icon}
//             w={12}
//             h={12}
//             color={accentColor}
//           />
//           <Heading as="h3" fontSize="xl" fontWeight="bold" color={textColor}>
//             {name}
//           </Heading>
//           <Text color={useColorModeValue("gray.600", "gray.300")} fontSize="sm">
//             {description}
//           </Text>
//         </VStack>
//       </Box>
//       <Box
//         position="absolute"
//         top={0}
//         left={0}
//         right={0}
//         bottom={0}
//         bg={`linear-gradient(135deg, ${accentColor} 0%, transparent 50%)`}
//         opacity={0.1}
//         zIndex={0}
//       />
//       <AnimatePresence>
//         {isHovered && (
//           <MotionBox
//             position="absolute"
//             top={0}
//             left={0}
//             right={0}
//             bottom={0}
//             bg={hoverBgColor}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.2 }}
//             display="flex"
//             alignItems="center"
//             justifyContent="center"
//             backdropFilter="blur(4px)"
//             zIndex={2}
//           >
//             <MotionBox
//               as="a"
//               href={href}
//               px={5}
//               py={3}
//               borderWidth="2px"
//               borderColor={accentColor}
//               rounded="lg"
//               fontWeight="semibold"
//               color={accentColor}
//               bg={useColorModeValue("white", "gray.800")}
//               display="inline-flex"
//               alignItems="center"
//               initial={{ y: 20, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               exit={{ y: 20, opacity: 0 }}
//               transition={{ delay: 0.1 }}
//               _hover={{
//                 bg: accentColor,
//                 color: "white",
//               }}
//             >
//               Explore Courses
//               <Icon as={FaArrowRight} w={4} h={4} ml={2} />
//             </MotionBox>
//           </MotionBox>
//         )}
//       </AnimatePresence>
//     </MotionBox>
//   );
// };

// const ChatButton = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <Box position="fixed" bottom="20px" right="20px" zIndex={1000}>
//       <AnimatePresence>
//         {isOpen && (
//           <MotionBox
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 20 }}
//             transition={{ duration: 0.3 }}
//             position="absolute"
//             bottom="70px"
//             right="0"
//             width="300px"
//             height="400px"
//             bg="white"
//             shadow="xl"
//             rounded="lg"
//             overflow="hidden"
//           >
//             <Box p={4} bg="teal.500" color="white">
//               <Heading size="md">Chat with us</Heading>
//             </Box>
//             <Box p={4} height="calc(100% - 60px)" overflowY="auto">
//               {/* Add your chat interface here */}
//               <Text>Chat messages will appear here...</Text>
//             </Box>
//           </MotionBox>
//         )}
//       </AnimatePresence>
//       <MotionButton
//         onClick={() => setIsOpen(!isOpen)}
//         colorScheme="teal"
//         size="lg"
//         rounded="full"
//         shadow="lg"
//         aria-label="Open chat"
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}
//       >
//         <Icon as={isOpen ? FaTimes : FaCommentDots} />
//       </MotionButton>
//     </Box>
//   );
// };

// export default function HomePage() {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const bgColor = useColorModeValue("gray.50", "gray.900");
//   const textColor = useColorModeValue("gray.800", "gray.100");
//   const isMobile = useBreakpointValue({ base: true, md: false });
//   const { colorMode, toggleColorMode } = useColorMode();
//   const [showScrollTop, setShowScrollTop] = useState(false);
//   const [email, setEmail] = useState("");
//   const [isEmailValid, setIsEmailValid] = useState(true);
//   const toast = useToast();

//   const handleScroll = useCallback(() => {
//     setShowScrollTop(window.pageYOffset > 300);
//   }, []);

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [handleScroll]);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//     setIsEmailValid(true);
//   };

//   const handleSubscribe = (e) => {
//     e.preventDefault();
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       setIsEmailValid(false);
//       return;
//     }
//     // Here you would typically send the email to your backend
//     console.log("Subscribing email:", email);
//     toast({
//       title: "Subscribed!",
//       description: "You've successfully subscribed to our newsletter.",
//       status: "success",
//       duration: 5000,
//       isClosable: true,
//     });
//     setEmail("");
//   };

//   return (
//     <Box minH="100vh" bg={bgColor} color={textColor}>
//       <Box
//         bgImage={`url(${bgImage})`}
//         bgSize="cover"
//         bgPosition="center"
//         position="relative"
//         minH={{ base: "100vh", md: "80vh" }}
//       >
//         <Box
//           position="absolute"
//           inset={0}
//           bg="linear-gradient(to bottom right, rgba(0,0,0,0.7), rgba(0,0,0,0.3))"
//         />
//         <Container maxW="container.xl" position="relative" zIndex={10}>
//           <Flex justifyContent="flex-end" pt={4}>
//             <Tooltip label={colorMode === "light" ? "Dark mode" : "Light mode"}>
//               <MotionButton
//                 onClick={toggleColorMode}
//                 variant="ghost"
//                 color="white"
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//               >
//                 <Icon as={colorMode === "light" ? FaMoon : FaSun} />
//               </MotionButton>
//             </Tooltip>
//           </Flex>
//           <Flex
//             direction={{ base: "column", lg: "row" }}
//             align="center"
//             justify="space-between"
//             minH="inherit"
//             py={{ base: 20, md: 32 }}
//             px={{ base: 4, md: 8 }}
//           >
//             <MotionFlex
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
//               direction="column"
//               align={{ base: "center", lg: "flex-start" }}
//               textAlign={{ base: "center", lg: "left" }}
//               mb={{ base: 12, lg: 0 }}
//               maxW={{ base: "100%", lg: "50%" }}
//             >
//               <Heading
//                 as="h1"
//                 fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
//                 fontWeight="bold"
//                 color="white"
//                 mb={6}
//                 textShadow="2px 2px 4px rgba(0,0,0,0.4)"
//               >
//                 Kick Start Your Career!
//               </Heading>
//               <Text
//                 fontSize={{ base: "lg", md: "xl" }}
//                 color="white"
//                 mb={8}
//                 maxW="2xl"
//                 textShadow="1px 1px 2px rgba(0,0,0,0.4)"
//               >
//                 Join our engaging e-learning platform and unlock your potential. Start your journey to success today!
//               </Text>
//               <MotionBox
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <Button
//                   as="a"
//                   href="/it-courses"
//                   size={{ base: "md", md: "lg" }}
//                   colorScheme="teal"
//                   fontWeight="semibold"
//                   px={8}
//                   rounded="full"
//                   _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
//                   transition="all 0.3s"
//                   rightIcon={<FaArrowRight />}
//                 >
//                   Get Started
//                 </Button>
//               </MotionBox>
//             </MotionFlex>

//             {!isMobile && (
//               <MotionFlex
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
//                 position="relative"
//                 w={{ base: "100%", lg: "50%" }}
//                 h={{ base: "300px", md: "400px", lg: "100%" }}
//                 justify="center"
//                 align="center"
//               >
//                 <LazyLoadImage
//                   src={Mentor}
//                   alt="Mentor"
//                   effect="blur"
//                   style={{
//                     position: "absolute",
//                     top: "10%",
//                     left: "0",
//                     width: "45%",
//                     height: "auto",
//                     objectFit: "contain",
//                     borderRadius: "0.5rem",
//                     boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
//                     zIndex: 2,
//                     transition: "transform 0.3s",
//                   }}
//                   wrapperProps={{
//                     style: {
//                       width: "45%",
//                       height: "auto",
//                     },
//                   }}
//                 />
//                 <LazyLoadImage
//                   src={Hero}
//                   alt="Hero"
//                   effect="blur"
//                   style={{
//                     position: "absolute",
//                     top: "10%",
//                     right: "0",
//                     width: "45%",
//                     height: "auto",
//                     objectFit: "contain",
//                     borderRadius: "0.5rem",
//                     boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
//                     zIndex: 2,
//                     transition: "transform 0.3s",
//                   }}
//                   wrapperProps={{
//                     style: {
//                       width: "45%",
//                       height: "auto",
//                     },
//                   }}
//                 />
//               </MotionFlex>
//             )}
//           </Flex>
//         </Container>
//       </Box>

//       <Box as="section" py={{ base: 16, md: 24 }}>
//         <Container maxW="container.xl">
//           <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 12, lg: 16 }} alignItems="center">
//             <ScrollAnimation>
//               <VStack align="start" spacing={6}>
//                 <Heading as="h2" fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }} fontWeight="bold" color="teal.600">
//                   Find Your Career Path
//                 </Heading>
//                 <Text fontSize={{ base: "lg", md: "xl" }} color={useColorModeValue("gray.600", "gray.300")}>
//                   Explore our diverse range of courses and kickstart your career
//                   journey. Whether you want to dive into programming, finance, or
//                   data analysis, we have something for everyone!
//                 </Text>
//                 <MotionBox
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   <Button
//                     as="a"
//                     href="/contact-us"
//                     size={{ base: "md", md: "lg" }}
//                     colorScheme="teal"
//                     fontWeight="semibold"
//                     px={8}
//                     rounded="full"
//                     _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
//                     transition="all 0.3s"
//                     rightIcon={<FaArrowRight />}
//                   >
//                     Get Started Today
//                   </Button>
//                 </MotionBox>
//               </VStack>
//             </ScrollAnimation>

//             <Box position="relative">
//               <LazyLoadImage
//                 src={FindHero}
//                 alt="FindHero"
//                 effect="blur"
//                 style={{
//                   opacity: 0.1,
//                   position: "absolute",
//                   top: "50%",
//                   left: "50%",
//                   transform: "translate(-50%, -50%)",
//                   zIndex: 0,
//                 }}
//               />
//               <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} position="relative" zIndex={1}>
//                 <CourseCard
//                   name="IT Courses"
//                   href="/it-courses"
//                   icon={FaLaptopCode}
//                   description="Explore our technology-focused courses"
//                 />
//                 <CourseCard
//                   name="Non-IT Courses"
//                   href="/non-it-courses"
//                   icon={FaGraduationCap}
//                   description="Discover our non-technical course offerings"
//                 />
//               </SimpleGrid>
//             </Box>
//           </SimpleGrid>
//         </Container>
//       </Box>

//       <Box bg={useColorModeValue("gray.100", "gray.800")} py={{ base: 16, md: 24 }}>
//         <Container maxW="container.xl">
//           <VStack spacing={12}>
//             <Heading as="h2" fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }} fontWeight="bold" textAlign="center" color="teal.600">
//               Course Statistics
//             </Heading>
//             <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8} w="full">
//               {stats.map((stat, index) => (
//                 <AnimatedStat
//                   key={index}
//                   title={stat.title}
//                   count={stat.count}
//                   description={stat.description}
//                   duration={stat.duration}
//                   color={stat.color}
//                   icon={stat.icon}
//                 />
//               ))}
//             </SimpleGrid>
//           </VStack>
//         </Container>
//       </Box>

//       <Box bg={useColorModeValue("gray.50", "gray.900")} py={16}>
//         <Container maxW="container.xl">
//           <VStack spacing={12}>
//             <Heading as="h2" fontSize={{ base: "3xl", md: "4xl" }} textAlign="center">
//               What Our Students Say
//             </Heading>
//             <Box w="full" maxW="4xl" mx="auto">
//               <Swiper
//                 modules={[Pagination, Autoplay, EffectFade]}
//                 spaceBetween={30}
//                 slidesPerView={1}
//                 pagination={{ clickable: true }}
//                 autoplay={{ delay: 5000 }}
//                 effect="fade"
//               >
//                 {testimonials.map((testimonial, index) => (
//                   <SwiperSlide key={index}>
//                     <ScrollAnimation>
//                       <Box
//                         bg={useColorModeValue("white", "gray.800")}
//                         p={8}
//                         borderRadius="lg"
//                         boxShadow="xl"
//                         maxW="3xl"
//                         mx="auto"
//                         textAlign="center"
//                       >
//                         <Icon as={FaQuoteLeft} w={8} h={8} color="teal.500" mb={4} />
//                         <Text fontSize="xl" mb={6}>
//                           {testimonial.content}
//                         </Text>
//                         <Flex align="center" justify="center">
//                           <Avatar src={testimonial.avatar} size="lg" mr={4} />
//                           <Box>
//                             <Text fontWeight="bold">{testimonial.name}</Text>
//                             <Text fontSize="sm" color="gray.500">
//                               {testimonial.role}
//                             </Text>
//                           </Box>
//                         </Flex>
//                       </Box>
//                     </ScrollAnimation>
//                   </SwiperSlide>
//                 ))}
//               </Swiper>
//             </Box>
//           </VStack>
//         </Container>
//       </Box>

//       <Box bg={useColorModeValue("teal.500", "teal.600")} py={16} color={useColorModeValue("white", "gray.100")}>
//         <Container maxW="container.xl">
//           <VStack spacing={8} align="center" textAlign="center">
//             <ScrollAnimation>
//               <Heading as="h2" fontSize={{ base: "3xl", md: "4xl" }}>
//                 Stay Updated with Our Newsletter
//               </Heading>
//               <Text fontSize={{ base: "lg", md: "xl" }} maxW="2xl" mt={4}>
//                 Subscribe to our newsletter and get the latest updates on new courses, special offers, and learning tips delivered straight to your inbox.
//               </Text>
//               <Box as="form" w="100%" maxW="md" mt={8} onSubmit={handleSubscribe}>
//                 <VStack spacing={4}>
//                   <FormControl isInvalid={!isEmailValid}>
//                     <FormLabel htmlFor="email" srOnly>Email address</FormLabel>
//                     <Input
//                       id="email"
//                       type="email"
//                       placeholder="Enter your email"
//                       value={email}
//                       onChange={handleEmailChange}
//                       size="lg"
//                       bg="white"
//                       color="gray.800"
//                       _placeholder={{ color: "gray.500" }}
//                       _hover={{ borderColor: "teal.300" }}
//                       _focus={{ borderColor: "teal.300", boxShadow: "0 0 0 1px teal.300" }}
//                     />
//                     <FormErrorMessage>Please enter a valid email address</FormErrorMessage>
//                   </FormControl>
//                   <MotionButton
//                     type="submit"
//                     colorScheme="whiteAlpha"
//                     size="lg"
//                     width="100%"
//                     _hover={{ bg: "whiteAlpha.300" }}
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     Subscribe
//                   </MotionButton>
//                 </VStack>
//               </Box>
//             </ScrollAnimation>
//           </VStack>
//         </Container>
//       </Box>

//       <Modal isOpen={isOpen} onClose={onClose}>
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>Welcome to E-Learning</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody>
//             <Text>
//               Thank you for choosing us to enhance your skills! We are excited
//               to help you on your journey.
//             </Text>
//           </ModalBody>
//           <ModalFooter>
//             <Button colorScheme="teal" onClick={onClose}>
//               Close
//             </Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>

//       <AnimatePresence>
//         {showScrollTop && (
//           <MotionBox
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 20 }}
//             transition={{ duration: 0.3 }}
//             position="fixed"
//             bottom="20px"
//             right="20px"
//             zIndex={999}
//           >
//             <MotionButton
//               colorScheme="teal"
//               size="lg"
//               rounded="full"
//               onClick={scrollToTop}
//               aria-label="Scroll to top"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//             >
//               <Icon as={FaChevronUp} />
//             </MotionButton>
//           </MotionBox>
//         )}
//       </AnimatePresence>

//       <ChatButton />
//     </Box>
//   );
// }

// import React, { useRef, useState } from 'react';
// import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
// import { motion, useScroll, useTransform } from 'framer-motion';
// import { Playfair_Display, Inter } from 'next/font/google';
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Button,
//   TextField,
//   Card,
//   CardContent,
//   Tabs,
//   Tab,
//   Avatar,
//   Badge,
//   LinearProgress,
//   Box,
//   Container,
//   Grid,
// } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import { Search,  Code, Brush, Psychology, AutoAwesome, Computer } from '@mui/icons-material';

// const playfair = Playfair_Display({ subsets: ['latin'] });
// const inter = Inter({ subsets: ['latin'] });

// const StyledCard = styled(Card)(({ theme }) => ({
//   overflow: 'hidden',
//   cursor: 'pointer',
//   transition: 'all 0.3s',
//   '&:hover': {
//     boxShadow: theme.shadows[10],
//     transform: 'translateY(-5px)',
//   },
// }));

// const IconWrapper = styled('div')(({ theme, color }) => ({
//   width: 64,
//   height: 64,
//   borderRadius: '50%',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   marginBottom: theme.spacing(2),
//   backgroundColor: color,
//   transition: 'transform 0.3s',
//   '&:hover': {
//     transform: 'scale(1.1)',
//   },
// }));

// const courses = [
//   { title: "Surreal Art Techniques", icon: Brush, color: "#FFC0CB", category: "art" },
//   { title: "Dream-Inspired Coding", icon: Code, color: "#E6E6FA", category: "tech" },
//   { title: "Metaphysical Literature",  color: "#ADD8E6", category: "philosophy" },
//   { title: "AI and Consciousness", icon: Psychology, color: "#90EE90", category: "tech" },
//   { title: "Quantum Creativity", icon: AutoAwesome, color: "#FFFFE0", category: "art" },
//   { title: "Digital Philosophy", icon: Computer, color: "#E6E6FA", category: "philosophy" }
// ];

// function CourseCard({ course, index }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5, delay: index * 0.2 }}
//     >
//       <StyledCard>
//         <CardContent>
//           <IconWrapper color={course.color}>
//             <course.icon fontSize="large" />
//           </IconWrapper>
//           <Typography variant="h6" component="h3" gutterBottom>
//             {course.title}
//           </Typography>
//           <Typography variant="body2" color="text.secondary" paragraph>
//             Explore the boundaries of reality through innovative learning experiences.
//           </Typography>
//           <Box display="flex" justifyContent="space-between" alignItems="center">
//             <Badge color="secondary" badgeContent={course.category} />
//             <Button variant="outlined" size="small">
//               Enroll Now
//             </Button>
//           </Box>
//         </CardContent>
//       </StyledCard>
//     </motion.div>
//   );
// }

// export default function Home() {
//   const targetRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: targetRef,
//     offset: ["start end", "end start"]
//   });

//   const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);
//   const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.95, 0.9]);

//   const [searchQuery, setSearchQuery] = useState('');
//   const [tabValue, setTabValue] = useState(0);

//   const handleTabChange = (event, newValue) => {
//     setTabValue(newValue);
//   };

//   return (
//     <ParallaxProvider>
//       <Box sx={{ minHeight: '100vh', bgcolor: '#e8f5f2' }}>
//         {/* Navigation */}
//         <AppBar position="fixed" color="transparent" elevation={0}>
//           <Toolbar sx={{ justifyContent: 'space-between' }}>
//             <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
//               LearnSurreal
//             </Typography>
//             <Box sx={{ display: 'flex', gap: 2 }}>
//               <Button color="inherit">Courses</Button>
//               <Button color="inherit">Resources</Button>
//               <Button color="inherit">Community</Button>
//               <Button color="inherit">About</Button>
//             </Box>
//             <Avatar alt="User" src="https://github.com/shadcn.png" />
//           </Toolbar>
//         </AppBar>

//         {/* Hero Section */}
//         <Box ref={targetRef} sx={{ height: '100vh', position: 'relative', overflow: 'hidden' }}>
//           {/* Floating Elements */}
//           <Parallax translateY={[-50, 50]} style={{ position: 'absolute', top: '25%', right: '25%', zIndex: 20 }}>
//             <motion.div
//               initial={{ opacity: 0, scale: 0 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 1, delay: 0.5 }}
//               style={{ width: 80, height: 80, borderRadius: '50%', backgroundColor: '#86B6A6' }}
//             />
//           </Parallax>
//           <Parallax translateY={[-30, 30]} style={{ position: 'absolute', bottom: '25%', left: '25%', zIndex: 20 }}>
//             <motion.div
//               initial={{ opacity: 0, scale: 0 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 1, delay: 0.7 }}
//               style={{ width: 64, height: 64, borderRadius: '50%', border: '4px solid #1a5f7a' }}
//             />
//           </Parallax>

//           {/* Main Title and Search */}
//           <Parallax translateY={[-20, 20]} style={{ position: 'absolute', top: '25%', left: 64, zIndex: 30 }}>
//             <motion.div
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1 }}
//               style={{ opacity, scale }}
//             >
//               <Typography variant="h1" component="h1" sx={{
//                 fontFamily: playfair.style.fontFamily,
//                 fontSize: { xs: '4rem', md: '6rem' },
//                 fontWeight: 'bold',
//                 color: '#333',
//                 lineHeight: 1.2,
//                 mb: 4
//               }}>
//                 Learn<br />
//                 Beyond<br />
//                 Reality
//               </Typography>
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 1, duration: 1 }}
//               >
//                 <Typography variant="h5" sx={{ mb: 2, color: '#555' }}>
//                   Explore surreal learning experiences
//                 </Typography>
//                 <Box sx={{ display: 'flex', gap: 2 }}>
//                   <TextField
//                     variant="outlined"
//                     size="small"
//                     placeholder="Search courses..."
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                     sx={{ width: 240 }}
//                   />
//                   <Button variant="contained" startIcon={<Search />}>
//                     Search
//                   </Button>
//                 </Box>
//               </motion.div>
//             </motion.div>
//           </Parallax>

//           {/* Surreal Landscape */}
//           <Parallax translateY={[10, -10]} style={{ position: 'absolute', inset: 0, zIndex: 10 }}>
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 1.5 }}
//               style={{ height: '100%' }}
//             >

//             </motion.div>
//           </Parallax>
//         </Box>

//         {/* Featured Courses Section */}
//         <Box sx={{ bgcolor: '#86B6A6', py: 12, position: 'relative', overflow: 'hidden' }}>
//           <Box sx={{ position: 'absolute', inset: 0, bgcolor: '#e8f5f2', borderBottomLeftRadius: 200, borderBottomRightRadius: 200 }} />

//           <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 10 }}>
//             <Parallax translateY={[-20, 20]}>
//               <Typography variant="h2" component="h2" align="center" sx={{
//                 fontFamily: playfair.style.fontFamily,
//                 mb: 6,
//                 color: '#333'
//               }}>
//                 Featured Courses
//               </Typography>
//               <Tabs value={tabValue} onChange={handleTabChange} centered sx={{ mb: 4 }}>
//                 <Tab label="All" />
//                 <Tab label="Art" />
//                 <Tab label="Tech" />
//                 <Tab label="Philosophy" />
//               </Tabs>
//               <Grid container spacing={4}>
//                 {courses
//                   .filter(course =>
//                     tabValue === 0 ||
//                     (tabValue === 1 && course.category === 'art') ||
//                     (tabValue === 2 && course.category === 'tech') ||
//                     (tabValue === 3 && course.category === 'philosophy')
//                   )
//                   .map((course, index) => (
//                     <Grid item xs={12} sm={6} md={4} key={course.title}>
//                       <CourseCard course={course} index={index} />
//                     </Grid>
//                   ))
//                 }
//               </Grid>
//             </Parallax>
//           </Container>
//         </Box>

//         {/* Learning Path Section */}
//         <Box sx={{ bgcolor: '#e8f5f2', py: 12 }}>
//           <Container maxWidth="lg">
//             <Parallax translateY={[-20, 20]}>
//               <Typography variant="h2" component="h2" align="center" sx={{
//                 fontFamily: playfair.style.fontFamily,
//                 mb: 6,
//                 color: '#333'
//               }}>
//                 Your Surreal Learning Path
//               </Typography>
//               <Box sx={{ position: 'relative' }}>
//                 <Box sx={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: 2, bgcolor: '#86B6A6', transform: 'translateX(-50%)' }} />
//                 {['Explore', 'Create', 'Reflect', 'Transform'].map((step, index) => (
//                   <motion.div
//                     key={step}
//                     initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.5, delay: index * 0.2 }}
//                     viewport={{ once: true }}
//                   >
//                     <Box sx={{
//                       display: 'flex',
//                       justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end',
//                       mb: 8,
//                       position: 'relative'
//                     }}>
//                       <Card sx={{ width: '50%', [index % 2 === 0 ? 'mr' : 'ml']: 4 }}>
//                         <CardContent>
//                           <Typography variant="h5" component="h3" gutterBottom sx={{ fontFamily: playfair.style.fontFamily }}>
//                             {step}
//                           </Typography>
//                           <Typography variant="body1" paragraph>
//                             Embark on a journey through the realms of imagination and knowledge, where reality bends to the will of creativity.
//                           </Typography>
//                           <LinearProgress variant="determinate" value={(index + 1) * 25} sx={{ height: 8, borderRadius: 4 }} />
//                         </CardContent>
//                       </Card>
//                       <Box
//                         sx={{
//                           width: 32,
//                           height: 32,
//                           borderRadius: '50%',
//                           bgcolor: '#86B6A6',
//                           border: '4px solid #e8f5f2',
//                           position: 'absolute',
//                           top: '50%',
//                           left: '50%',
//                           transform: 'translate(-50%, -50%)',
//                           zIndex: 10
//                         }}
//                       />
//                     </Box>
//                   </motion.div>
//                 ))}
//               </Box>
//             </Parallax>
//           </Container>
//         </Box>

//         {/* Call to Action */}
//         <Box sx={{ bgcolor: '#1a5f7a', py: 12, color: 'white' }}>
//           <Container maxWidth="lg">
//             <Parallax translateY={[-20, 20]}>
//               <Typography variant="h2" component="h2" align="center" sx={{
//                 fontFamily: playfair.style.fontFamily,
//                 mb: 4
//               }}>
//                 Begin Your Surreal Learning Journey
//               </Typography>
//               <Typography variant="h6" align="center" paragraph sx={{ maxWidth: 720, mx: 'auto', mb: 6 }}>
//                 Unlock the doors to a world where education transcends reality. Join us in exploring the boundaries of knowledge and creativity.
//               </Typography>
//               <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
//                 <Button variant="contained" color="secondary" size="large">
//                   Start Free Trial
//                 </Button>
//                 <Button variant="outlined" color="inherit" size="large">
//                   View Curriculum
//                 </Button>
//               </Box>
//             </Parallax>
//           </Container>
//         </Box>
//       </Box>
//     </ParallaxProvider>
//   );
// }

// import React, { useEffect, useState } from "react";
// import {
//   Box,
//   Container,
//   VStack,
//   Heading,
//   Text,
//   Button,
//   useDisclosure,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalFooter,
//   ModalBody,
//   ModalCloseButton,
//   useBreakpointValue,
//   useColorMode,
//   useColorModeValue,
//   SimpleGrid,
//   Flex,
//   Image,
//   Icon,
// } from "@chakra-ui/react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FaLaptopCode, FaGraduationCap, FaArrowRight } from "react-icons/fa";
// import { Parallax } from "react-parallax";
// import EnhancedCareerGuidance from "../Courses/Courses";
// import Hero from "../assets/HeroBoy.png";
// import Mentor from "../assets/Mentor.png";
// import FindHero from "../assets/FindHero.png";
// import bgImage from "../assets/HomeBg.jpeg";
// import AnimatedStat from "../Stat/AnimatedStat";

// const MotionBox = motion(Box);

// const stats = [
//   {
//     title: "Courses Offered",
//     count: 120,
//     description: "Courses available for enrollment",
//     duration: 2000,
//     color: "teal.600",
//   },
//   {
//     title: "Students Enrolled",
//     count: 8500,
//     description: "Students currently enrolled in all courses",
//     duration: 2500,
//     color: "purple.600",
//   },
//   {
//     title: "Completed Courses",
//     count: 7000,
//     description: "Courses successfully completed by students",
//     duration: 3000,
//     color: "blue.600",
//   },
//   {
//     title: "Active Instructors",
//     count: 50,
//     description: "Instructors teaching on the platform",
//     duration: 1500,
//     color: "orange.600",
//   },
// ];

// const CourseCard = ({ name, icon, description, href }) => {
//   const [isHovered, setIsHovered] = useState(false);
//   const bgColor = useColorModeValue("white", "gray.800");
//   const textColor = useColorModeValue("gray.800", "white");
//   const hoverBgColor = useColorModeValue("rgba(255, 255, 255, 0.9)", "rgba(26, 32, 44, 0.9)");
//   const accentColor = useColorModeValue("teal.500", "teal.300");

//   return (
//     <MotionBox
//       position="relative"
//       height="300px"
//       rounded="lg"
//       overflow="hidden"
//       onHoverStart={() => setIsHovered(true)}
//       onHoverEnd={() => setIsHovered(false)}
//       whileHover={{ scale: 1.05 }}
//       transition={{ duration: 0.3 }}
//     >
//       <Box
//         bg={bgColor}
//         p={6}
//         height="100%"
//         borderWidth="1px"
//         borderColor={useColorModeValue("gray.200", "gray.700")}
//         position="relative"
//         zIndex={1}
//       >
//         <VStack spacing={4} align="start" height="100%">
//           <Icon
//             as={icon}
//             w={12}
//             h={12}
//             color={accentColor}
//           />
//           <Heading as="h3" fontSize="xl" fontWeight="bold" color={textColor}>
//             {name}
//           </Heading>
//           <Text color={useColorModeValue("gray.600", "gray.300")} fontSize="sm">
//             {description}
//           </Text>
//         </VStack>
//       </Box>
//       <Box
//         position="absolute"
//         top={0}
//         left={0}
//         right={0}
//         bottom={0}
//         bg={`linear-gradient(135deg, ${accentColor} 0%, transparent 50%)`}
//         opacity={0.1}
//         zIndex={0}
//       />

//       <AnimatePresence>
//         {isHovered && (
//           <MotionBox
//             position="absolute"
//             top={0}
//             left={0}
//             right={0}
//             bottom={0}
//             bg={hoverBgColor}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.2 }}
//             display="flex"
//             alignItems="center"
//             justifyContent="center"
//             backdropFilter="blur(4px)"
//             zIndex={2}
//           >
//             <MotionBox
//               as="a"
//               href={href}
//               px={5}
//               py={3}
//               borderWidth="2px"
//               borderColor={accentColor}
//               rounded="lg"
//               fontWeight="semibold"
//               color={accentColor}
//               bg={useColorModeValue("white", "gray.800")}
//               display="inline-flex"
//               alignItems="center"
//               initial={{ y: 20, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               exit={{ y: 20, opacity: 0 }}
//               transition={{ delay: 0.1 }}
//               _hover={{
//                 bg: accentColor,
//                 color: "white",
//               }}
//             >
//               Explore Courses
//               <Icon as={FaArrowRight} w={4} h={4} ml={2} />
//             </MotionBox>
//           </MotionBox>
//         )}
//       </AnimatePresence>

//     </MotionBox>
//   );
// };

// export default function HomePage() {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const cardWidth = useBreakpointValue({ base: "full", md: "calc(25% - 1rem)" });

//   const headingSize = useBreakpointValue({ base: "2xl", md: "3xl", lg: "4xl" });
//   const textSize = useBreakpointValue({ base: "md", md: "lg", lg: "xl" });
//   const buttonSize = useBreakpointValue({ base: "sm", md: "md", lg: "lg" });
//   const containerPadding = useBreakpointValue({ base: 4, md: 8, lg: 12 });

//   const bgColor = useColorModeValue("gray.50", "gray.900");
//   const textColor = useColorModeValue("black", "white");
//   const bgGradient = useColorModeValue(
//     "linear(to-br, rgba(0,0,0,0.5), rgba(255,255,255,0.2))",
//     "linear(to-br, rgba(255,255,255,0.2), rgba(0,0,0,0.8))"
//   );

//   return (
//     <Box bg={bgColor} color={textColor} minHeight="100vh">
//       <Parallax
//         bgImage={bgImage}
//         bgImageStyle={{ objectFit: "cover", width: "100%", height: "100%" }}
//         strength={500}
//       >
//         <Box
//           minHeight={{ base: "100vh", md: "80vh" }}
//           position="relative"
//           overflow="hidden"
//         >
//           <Box
//             position="absolute"
//             top="0"
//             left="0"
//             right="0"
//             bottom="0"
//             bgGradient={bgGradient}
//             zIndex="1"
//           />
//           <Container maxW="container.xl" p={containerPadding} position="relative" zIndex="2">
//             <Flex
//               direction={{ base: "column", lg: "row" }}
//               align="center"
//               justify="space-between"
//               minHeight="inherit"
//               pt={{ base: 20, md: 20 }}
//             >
//               <VStack
//                 spacing={6}
//                 textAlign={{ base: "center", lg: "left" }}
//                 align={{ base: "center", lg: "flex-start" }}
//                 maxW={{ base: "100%", lg: "50%" }}
//                 mb={{ base: 12, lg: 0 }}
//               >
//                 <Heading
//                   as="h1"
//                   size={headingSize}
//                   fontWeight="bold"
//                   color="white"
//                   textShadow="2px 2px 8px rgba(0,0,0,0.7)"
//                 >
//                   Kick Start Your Career!
//                 </Heading>
//                 <Text
//                   fontSize={textSize}
//                   maxW="600px"
//                   color="white"
//                   textShadow="1px 1px 4px rgba(0,0,0,0.6)"
//                 >
//                   Join our engaging e-learning platform.
//                 </Text>
//                 <Button
//                   as="a"
//                   href="/it-courses"
//                   backgroundColor="teal.600"
//                   color="white"
//                   borderRadius="full"
//                   size={buttonSize}
//                   px={8}
//                   _hover={{
//                     backgroundColor: "teal.700",
//                     transform: "translateY(-2px)",
//                   }}
//                   transition="all 0.3s"
//                 >
//                   Get Started
//                 </Button>
//               </VStack>

//               <Flex
//                 position="relative"
//                 width={{ base: "100%", lg: "50%" }}
//                 height={{ base: "300px", md: "400px", lg: "100%" }}
//                 justify="center"
//                 align="bottom"
//               >
//                 <Image
//                   src={Mentor}
//                   alt="Mentor"
//                   position="absolute"
//                   top={{ base: "0", lg: "10%" }}
//                   left={{ base: "0", lg: "0" }}
//                   width={{ base: "50%", sm: "40%", md: "30%", lg: "45%" }}
//                   height="auto"
//                   objectFit="contain"
//                   borderRadius="lg"
//                   boxShadow="lg"
//                   zIndex="2"
//                   transition="transform 0.3s ease-in-out"
//                   _hover={{ transform: "scale(1.05)" }}
//                 />
//                 <Image
//                   src={Hero}
//                   alt="Hero"
//                   position="absolute"
//                   right={{ base: "0", lg: "0" }}
//                   width={{ base: "50%", sm: "40%", md: "30%", lg: "45%" }}
//                   top={{ base: "0", lg: "10%" }}
//                   height="auto"
//                   objectFit="contain"
//                   borderRadius="lg"
//                   boxShadow="lg"
//                   zIndex="2"
//                   transition="transform 0.3s ease-in-out"
//                   _hover={{ transform: "scale(1.05)" }}
//                 />
//               </Flex>
//             </Flex>
//           </Container>
//         </Box>
//       </Parallax>

//       <Box as="section" py={{ base: 16, md: 24 }}>
//         <Container maxW="container.xl">
//           <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 12, lg: 16 }} alignItems="start">
//             <VStack align="start" spacing={6}>
//               <Heading as="h2" fontSize={{ base: "3xl", md: "4xl" }} fontWeight="bold" color="teal.600">
//                 Find Your Career Path
//               </Heading>
//               <Text fontSize={{ base: "lg", md: "xl" }} color="gray.600">
//                 Explore our diverse range of courses and kickstart your career
//                 journey. Whether you want to dive into programming, finance, or
//                 data analysis, we have something for everyone!
//               </Text>
//               <div className="absolute opacity-30">
//              <img src={FindHero} alt="FindHero" />
//            </div>
//               <Button
//                 as="a"
//                 href="/contact-us"
//                 size={{ base: "md", md: "lg" }}
//                 colorScheme="teal"
//                 fontWeight="semibold"
//                 px={8}
//                 rounded="full"
//                 _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
//                 transition="all 0.3s"
//                 rightIcon={<FaArrowRight />}
//               >
//                 Get Started Today
//               </Button>
//             </VStack>

//             <Box position="relative">

//               <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} position="relative" zIndex={1}>
//                 <CourseCard
//                   name="IT Courses"
//                   href="/it-courses"
//                   icon={FaLaptopCode}
//                   description="Explore our technology-focused courses"
//                 />
//                 <CourseCard
//                   name="Non-IT Courses"
//                   href="/Non_it-courses"
//                   icon={FaGraduationCap}
//                   description="Discover our non-technical course offerings"
//                 />
//               </SimpleGrid>
//             </Box>
//           </SimpleGrid>
//         </Container>
//       </Box>

//       <EnhancedCareerGuidance />

//       <Box bg="gray.50" py={16}>
//         <Container maxW="container.xl">
//           <Heading as="h2" fontSize={{ base: "3xl", md: "4xl" }} textAlign="center" mb={12}>
//             Course Statistics
//           </Heading>
//           {/* <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
//             {stats.map((stat, index) => (
//               <Box
//                 key={index}
//                 bg="white"
//                 p={6}
//                 borderRadius="lg"
//                 boxShadow="lg"
//                 _hover={{
//                   transform: "translateY(-5px)",
//                   boxShadow: "xl",
//                 }}
//                 transition="all 0.3s"
//               >
//                 <AnimatedStat
//                   title={stat.title}
//                   count={stat.count}
//                   description={stat.description}
//                   duration={stat.duration}
//                   color={stat.color}
//                 />
//               </Box>
//             ))}
//           </SimpleGrid> */}
//  <Flex justify="center" wrap="wrap" spacing={6} align="stretch">
//             {stats.map((stat, index) => (
//               <Box
//                 key={index}
//                 bg="white"
//                 p={4}
//                 borderRadius="lg"
//                 boxShadow="lg"
//                 width={cardWidth}
//                 maxW="400px"
//                 textAlign="center"
//                 _hover={{
//                   transform: "scale(1.02)",
//                   boxShadow: "xl",
//                 }}
//               >
//                 <AnimatedStat
//                   title={stat.title}
//                   count={stat.count}
//                   description={stat.description}
//                   duration={stat.duration}
//                   color={stat.color}
//                 />
//               </Box>
//             ))}
//           </Flex>

//         </Container>
//       </Box>

//       <Modal isOpen={isOpen} onClose={onClose}>
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>Welcome to Chanmber Of Learning</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody>
//             <Text>
//               Thank you for choosing us to enhance your skills! We are excited
//               to help you on your journey.
//             </Text>
//           </ModalBody>
//           <ModalFooter>
//             <Button colorScheme="teal" onClick={onClose}>
//               Close
//             </Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>
//     </Box>
//   );
// }

// "use client"

// import { useState } from "react"
// import { BarChart, Target, ArrowLeftRight, Laptop, ChevronRight } from "lucide-react"
// import {
//   Box,
//   Container,
//   VStack,
//   Heading,
//   Text,
//   Button,
//   useDisclosure,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalFooter,
//   ModalBody,
//   ModalCloseButton,
//   useBreakpointValue,
//   useColorModeValue,
//   SimpleGrid,
//   Flex,
//   Image,
//   Icon,
// } from "@chakra-ui/react"
// import { motion, AnimatePresence } from "framer-motion"
// import { FaLaptopCode, FaGraduationCap, FaArrowRight } from "react-icons/fa"
// import { Parallax } from "react-parallax"
// import AnimatedStat from "../Stat/AnimatedStat"

// // Import your images here
// import CareerHero from "../assets/CareerHero.png"
// import Hero from "../assets/HeroBoy.png"
// import Mentor from "../assets/Mentor.png"
// import FindHero from "../assets/FindHero.png"
// import bgImage from "../assets/HomeBg.jpeg"

// const MotionBox = motion(Box)

// const stats = [
//   {
//     title: "Courses Offered",
//     count: 120,
//     description: "Courses available for enrollment",
//     duration: 2000,
//     color: "teal.600",
//   },
//   {
//     title: "Students Enrolled",
//     count: 8500,
//     description: "Students currently enrolled in all courses",
//     duration: 2500,
//     color: "purple.600",
//   },
//   {
//     title: "Completed Courses",
//     count: 7000,
//     description: "Courses successfully completed by students",
//     duration: 3000,
//     color: "blue.600",
//   },
//   {
//     title: "Active Instructors",
//     count: 50,
//     description: "Instructors teaching on the platform",
//     duration: 1500,
//     color: "orange.600",
//   },
// ]

// const CourseCard = ({ name, icon, description, href }) => {
//   const [isHovered, setIsHovered] = useState(false)
//   const defaultBgColor = useColorModeValue("white", "gray.800")
//   const defaultTextColor = useColorModeValue("gray.800", "white")
//   const defaultHoverBgColor = useColorModeValue("rgba(255, 255, 255, 0.9)", "rgba(26, 32, 44, 0.9)")
//   const defaultAccentColor = useColorModeValue("teal.500", "teal.300")

//   const [bgColor, setBgColor] = useState(defaultBgColor)
//   const [textColor, setTextColor] = useState(defaultTextColor)
//   const [hoverBgColor, setHoverBgColor] = useState(defaultHoverBgColor)
//   const [accentColor, setAccentColor] = useState(defaultAccentColor)

//   return (
//     <MotionBox
//       position="relative"
//       height="300px"
//       rounded="lg"
//       overflow="hidden"
//       onHoverStart={() => setIsHovered(true)}
//       onHoverEnd={() => setIsHovered(false)}
//       whileHover={{ scale: 1.05 }}
//       transition={{ duration: 0.3 }}
//     >
//       <Box
//         bg={bgColor}
//         p={6}
//         height="100%"
//         borderWidth="1px"
//         borderColor={useColorModeValue("gray.200", "gray.700")}
//         position="relative"
//         zIndex={1}
//       >
//         <VStack spacing={4} align="start" height="100%">
//           <Icon as={icon} w={12} h={12} color={accentColor} />
//           <Heading as="h3" fontSize="xl" fontWeight="bold" color={textColor}>
//             {name}
//           </Heading>
//           <Text color={useColorModeValue("gray.600", "gray.300")} fontSize="sm">
//             {description}
//           </Text>
//         </VStack>
//       </Box>
//       <Box
//         position="absolute"
//         top={0}
//         left={0}
//         right={0}
//         bottom={0}
//         bg={`linear-gradient(135deg, ${accentColor} 0%, transparent 50%)`}
//         opacity={0.1}
//         zIndex={0}
//       />
//       <AnimatePresence>
//         {isHovered && (
//           <MotionBox
//             position="absolute"
//             top={0}
//             left={0}
//             right={0}
//             bottom={0}
//             bg={hoverBgColor}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.2 }}
//             display="flex"
//             alignItems="center"
//             justifyContent="center"
//             backdropFilter="blur(4px)"
//             zIndex={2}
//           >
//             <MotionBox
//               as="a"
//               href={href}
//               px={5}
//               py={3}
//               borderWidth="2px"
//               borderColor={accentColor}
//               rounded="lg"
//               fontWeight="semibold"
//               color={accentColor}
//               bg={useColorModeValue("white", "gray.800")}
//               display="inline-flex"
//               alignItems="center"
//               initial={{ y: 20, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               exit={{ y: 20, opacity: 0 }}
//               transition={{ delay: 0.1 }}
//               _hover={{
//                 bg: accentColor,
//                 color: "white",
//               }}
//             >
//               Explore Courses
//               <Icon as={FaArrowRight} w={4} h={4} ml={2} />
//             </MotionBox>
//           </MotionBox>
//         )}
//       </AnimatePresence>
//     </MotionBox>
//   )
// }

// const div = ({ icon, title, description }) => {
//   return (
//     <div className="bg-white rounded-ss-3xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl group">
//       <div className="p-4 sm:p-6">
//         <div className="flex items-center mb-3 sm:mb-4">
//           <div className="p-2 sm:p-3 rounded-full bg-gray-200 text-gray-700 mr-3 sm:mr-4 transition-colors duration-300">
//             {icon}
//           </div>
//           <h3 className="text-lg sm:text-xl font-semibold group-hover:text-teal-600 transition-colors duration-300">
//             {title}
//           </h3>
//         </div>
//         <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 transition-colors duration-300">{description}</p>
//         <div className="flex items-center text-teal-600 group-hover:translate-x-2 transition-all duration-300">
//           <span className="text-sm sm:text-base mr-2 font-medium">Learn More</span>
//           <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
//         </div>
//       </div>
//       <div className="h-1 w-full bg-teal-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left"></div>
//     </div>
//   )
// }

// const EnhancedCareerGuidance = () => {
//   return (
//     <div className="min-h-screen p-4 sm:p-6 md:p-8">
//       <div className="max-w-6xl mx-auto">
//         <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center">Career Path Guidance</h1>

//         <div className="flex flex-col lg:flex-row gap-8 mb-12">
//           <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
//             <div
//               icon={<BarChart className="w-6 h-6 sm:w-8 sm:h-8" />}
//               title="IT Employed"
//               description="Advance your skills to close talent gaps and switch careers."
//             />
//             <div
//               icon={<Target className="w-6 h-6 sm:w-8 sm:h-8" />}
//               title="Fresh Graduates"
//               description="Get your hands-on in real-time projects and start your IT career."
//             />
//             <div
//               icon={<ArrowLeftRight className="w-6 h-6 sm:w-8 sm:h-8" />}
//               title="Return from Work Break"
//               description="Re-skill yourself to stay ahead of competitions and in trend."
//             />
//             <div
//               icon={<Laptop className="w-6 h-6 sm:w-8 sm:h-8" />}
//               title="Non IT to IT"
//               description="Learn, Get Certified with new demanding skills and Switch."
//             />
//           </div>

//           <div className="flex-1 relative overflow-hidden rounded-lg shadow-lg">
//             <img
//               className="absolute inset-0 w-full h-full object-cover object-center"
//               src={CareerHero || "/placeholder.svg"}
//               alt="Career Hero Background"
//             />
//             <div className="relative z-10 p-6 sm:p-8 md:p-10 bg-white bg-opacity-90">
//               <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-4 sm:mb-6">How it helps?</h2>
//               <div className="space-y-4 text-sm sm:text-base">
//                 <p className="leading-relaxed">
//                   Early in your career, it is essential to chase skills rather than salary. At Chamber Of Learning, we
//                   provide practical experiences through visualized learning, hands-on projects, fostering a growth
//                   mindset, and nurturing problem-solving skills.
//                 </p>
//                 <p className="leading-relaxed">
//                   Later in your career, Chamber Of Learning helps you align your passions with your work. We empower you
//                   with vertical and horizontal skills to stay ahead in knowledge and finances. We work with you to grow
//                   your brand and network for ongoing success.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default function HomePage() {
//   const { isOpen, onOpen, onClose } = useDisclosure()
//   const cardWidth = useBreakpointValue({ base: "full", md: "calc(25% - 1rem)" })

//   const headingSize = useBreakpointValue({ base: "2xl", md: "3xl", lg: "4xl" })
//   const textSize = useBreakpointValue({ base: "md", md: "lg", lg: "xl" })
//   const buttonSize = useBreakpointValue({ base: "sm", md: "md", lg: "lg" })
//   const containerPadding = useBreakpointValue({ base: 4, md: 8, lg: 12 })

//   const defaultBgColor = useColorModeValue("gray.50", "gray.900")
//   const defaultTextColor = useColorModeValue("black", "white")
//   const defaultBgGradient = useColorModeValue(
//     "linear(to-br, rgba(0,0,0,0.5), rgba(255,255,255,0.2))",
//     "linear(to-br, rgba(255,255,255,0.2), rgba(0,0,0,0.8))",
//   )

//   const [bgColor, setBgColor] = useState(defaultBgColor)
//   const [textColor, setTextColor] = useState(defaultTextColor)
//   const [bgGradient, setBgGradient] = useState(defaultBgGradient)

//   return (
//     <Box bg={bgColor} color={textColor} minHeight="100vh">
//       <Parallax bgImage={bgImage} bgImageStyle={{ objectFit: "cover", width: "100%", height: "100%" }} strength={500}>
//         <Box minHeight={{ base: "100vh", md: "80vh" }} position="relative" overflow="hidden">
//           <Box position="absolute" top="0" left="0" right="0" bottom="0" bgGradient={bgGradient} zIndex="1" />
//           <Container maxW="container.xl" p={containerPadding} position="relative" zIndex="2">
//             <Flex
//               direction={{ base: "column", lg: "row" }}
//               align="center"
//               justify="space-between"
//               minHeight="inherit"
//               pt={{ base: 20, md: 20 }}
//             >
//               <VStack
//                 spacing={6}
//                 textAlign={{ base: "center", lg: "left" }}
//                 align={{ base: "center", lg: "flex-start" }}
//                 maxW={{ base: "100%", lg: "50%" }}
//                 mb={{ base: 12, lg: 0 }}
//               >
//                 <Heading
//                   as="h1"
//                   size={headingSize}
//                   fontWeight="bold"
//                   color="white"
//                   textShadow="2px 2px 8px rgba(0,0,0,0.7)"
//                 >
//                   Kick Start Your Career!
//                 </Heading>
//                 <Text fontSize={textSize} maxW="600px" color="white" textShadow="1px 1px 4px rgba(0,0,0,0.6)">
//                   Join our engaging e-learning platform.
//                 </Text>
//                 <Button
//                   as="a"
//                   href="/it-courses"
//                   backgroundColor="teal.600"
//                   color="white"
//                   borderRadius="full"
//                   size={buttonSize}
//                   px={8}
//                   _hover={{
//                     backgroundColor: "teal.700",
//                     transform: "translateY(-2px)",
//                   }}
//                   transition="all 0.3s"
//                 >
//                   Get Started
//                 </Button>
//               </VStack>

//               <Flex
//                 position="relative"
//                 width={{ base: "100%", lg: "50%" }}
//                 height={{ base: "300px", md: "400px", lg: "100%" }}
//                 justify="center"
//                 align="bottom"
//               >
//                 <Image
//                   src={Mentor || "/placeholder.svg"}
//                   alt="Mentor"
//                   position="absolute"
//                   top={{ base: "0", lg: "10%" }}
//                   left={{ base: "0", lg: "0" }}
//                   width={{ base: "50%", sm: "40%", md: "30%", lg: "45%" }}
//                   height="auto"
//                   objectFit="contain"
//                   borderRadius="lg"
//                   boxShadow="lg"
//                   zIndex="2"
//                   transition="transform 0.3s ease-in-out"
//                   _hover={{ transform: "scale(1.05)" }}
//                 />
//                 <Image
//                   src={Hero || "/placeholder.svg"}
//                   alt="Hero"
//                   position="absolute"
//                   right={{ base: "0", lg: "0" }}
//                   width={{ base: "50%", sm: "40%", md: "30%", lg: "45%" }}
//                   top={{ base: "0", lg: "10%" }}
//                   height="auto"
//                   objectFit="contain"
//                   borderRadius="lg"
//                   boxShadow="lg"
//                   zIndex="2"
//                   transition="transform 0.3s ease-in-out"
//                   _hover={{ transform: "scale(1.05)" }}
//                 />
//               </Flex>
//             </Flex>
//           </Container>
//         </Box>
//       </Parallax>

//       <Box as="section" py={{ base: 16, md: 24 }}>
//         <Container maxW="container.xl">
//           <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 12, lg: 16 }} alignItems="start">
//             <VStack align="start" spacing={6}>
//               <Heading as="h2" fontSize={{ base: "3xl", md: "4xl" }} fontWeight="bold" color="teal.600">
//                 Find Your Career Path
//               </Heading>
//               <Text fontSize={{ base: "lg", md: "xl" }} color="gray.600">
//                 Explore our diverse range of courses and kickstart your career journey. Whether you want to dive into
//                 programming, finance, or data analysis, we have something for everyone!
//               </Text>
//               <div className="absolute opacity-30">
//                 <img src={FindHero || "/placeholder.svg"} alt="FindHero" />
//               </div>
//               <Button
//                 as="a"
//                 href="/contact-us"
//                 size={{ base: "md", md: "lg" }}
//                 colorScheme="teal"
//                 fontWeight="semibold"
//                 px={8}
//                 rounded="full"
//                 _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
//                 transition="all 0.3s"
//                 rightIcon={<FaArrowRight />}
//               >
//                 Get Started Today
//               </Button>
//             </VStack>

//             <Box position="relative">
//               <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} position="relative" zIndex={1}>
//                 <CourseCard
//                   name="IT Courses"
//                   href="/it-courses"
//                   icon={FaLaptopCode}
//                   description="Explore our technology-focused courses"
//                 />
//                 <CourseCard
//                   name="Non-IT Courses"
//                   href="/Non_it-courses"
//                   icon={FaGraduationCap}
//                   description="Discover our non-technical course offerings"
//                 />
//               </SimpleGrid>
//             </Box>
//           </SimpleGrid>
//         </Container>
//       </Box>

//       <Box bg="gray.50" py={16}>
//         <Container maxW="container.xl">
//           <Heading as="h2" fontSize={{ base: "3xl", md: "4xl" }} textAlign="center" mb={12}>
//             Course Statistics
//           </Heading>
//           <Flex justify="center" wrap="wrap" spacing={6} align="stretch">
//             {stats.map((stat, index) => (
//               <Box
//                 key={index}
//                 bg="white"
//                 p={4}
//                 borderRadius="lg"
//                 boxShadow="lg"
//                 width={cardWidth}
//                 maxW="400px"
//                 textAlign="center"
//                 _hover={{
//                   transform: "scale(1.02)",
//                   boxShadow: "xl",
//                 }}
//               >
//                 <AnimatedStat
//                   title={stat.title}
//                   count={stat.count}
//                   description={stat.description}
//                   duration={stat.duration}
//                   color={stat.color}
//                 />
//               </Box>
//             ))}
//           </Flex>
//         </Container>
//       </Box>

//       <Modal isOpen={isOpen} onClose={onClose}>
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>Welcome to Chamber Of Learning</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody>
//             <Text>Thank you for choosing us to enhance your skills! We are excited to help you on your journey.</Text>
//           </ModalBody>
//           <ModalFooter>
//             <Button colorScheme="teal" onClick={onClose}>
//               Close
//             </Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>
//     </Box>
//   )
// }

// "use client"
// import { BarChart, Target, ArrowLeftRight, Laptop, ChevronRight } from "lucide-react"
// import {
//   Box,
//   Container,
//   VStack,
//   Heading,
//   Text,
//   Button,
//   useDisclosure,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalFooter,
//   ModalBody,
//   ModalCloseButton,
//   useBreakpointValue,
//   useColorModeValue,
//   SimpleGrid,
//   Flex,
//   Image,
//   Icon,
//   Grid,
// } from "@chakra-ui/react"
// import { motion } from "framer-motion"
// import { FaLaptopCode, FaGraduationCap, FaArrowRight } from "react-icons/fa"
// import { Parallax } from "react-parallax"
// import AnimatedStat from "../Stat/AnimatedStat"

// // Import your images here
// import CareerHero from "../assets/CareerHero.png"
// import Hero from "../assets/HeroBoy.png"
// import Mentor from "../assets/Mentor.png"
// import FindHero from "../assets/FindHero.png"
// import bgImage from "../assets/HomeBg.jpeg"

// const MotionBox = motion(Box)

// const stats = [
//   {
//     title: "Courses Offered",
//     count: 120,
//     description: "Courses available for enrollment",
//     duration: 2000,
//     color: "teal.600",
//   },
//   {
//     title: "Students Enrolled",
//     count: 8500,
//     description: "Students currently enrolled in all courses",
//     duration: 2500,
//     color: "purple.600",
//   },
//   {
//     title: "Completed Courses",
//     count: 7000,
//     description: "Courses successfully completed by students",
//     duration: 3000,
//     color: "blue.600",
//   },
//   {
//     title: "Active Instructors",
//     count: 50,
//     description: "Instructors teaching on the platform",
//     duration: 1500,
//     color: "orange.600",
//   },
// ]

// const CourseCard = ({ name, icon, description, href, bgColor, textColor, hoverBgColor, accentColor }) => {
//   return (
//     <MotionBox
//       position="relative"
//       height="100%"
//       rounded="lg"
//       overflow="hidden"
//       whileHover={{ scale: 1.05 }}
//       transition={{ duration: 0.3 }}
//     >
//       <Box
//         bg={bgColor}
//         p={6}
//         height="100%"
//         borderWidth="1px"
//         borderColor={useColorModeValue("gray.200", "gray.700")}
//         position="relative"
//         zIndex={1}
//       >
//         <VStack spacing={4} align="start" height="100%">
//           <Icon as={icon} w={12} h={12} color={accentColor} />
//           <Heading as="h3" fontSize="xl" fontWeight="bold" color={textColor}>
//             {name}
//           </Heading>
//           <Text color={useColorModeValue("gray.600", "gray.300")} fontSize="sm">
//             {description}
//           </Text>
//           <Button as="a" href={href} mt="auto" colorScheme="teal" rightIcon={<FaArrowRight />}>
//             Explore Courses
//           </Button>
//         </VStack>
//       </Box>
//       <Box
//         position="absolute"
//         top={0}
//         left={0}
//         right={0}
//         bottom={0}
//         bg={`linear-gradient(135deg, ${accentColor} 0%, transparent 50%)`}
//         opacity={0.1}
//         zIndex={0}
//       />
//     </MotionBox>
//   )
// }

// const div = ({ icon, title, description }) => {
//   return (
//     <Box
//       bg="white"
//       rounded="lg"
//       shadow="lg"
//       overflow="hidden"
//       transition="all 0.3s"
//       _hover={{ shadow: "xl", transform: "translateY(-5px)" }}
//     >
//       <Box p={6}>
//         <Flex alignItems="center" mb={4}>
//           <Box bg="gray.100" p={3} rounded="full" color="gray.700" mr={4}>
//             {icon}
//           </Box>
//           <Heading as="h3" fontSize="xl" fontWeight="semibold">
//             {title}
//           </Heading>
//         </Flex>
//         <Text color="gray.600" fontSize="sm">
//           {description}
//         </Text>
//         <Flex alignItems="center" mt={4} color="teal.500" fontWeight="medium">
//           <Text mr={2}>Learn More</Text>
//           <ChevronRight size={20} />
//         </Flex>
//       </Box>
//       <Box
//         h={1}
//         bg="teal.500"
//         transform="scaleX(0)"
//         transformOrigin="left"
//         transition="transform 0.3s"
//         _groupHover={{ transform: "scaleX(1)" }}
//       />
//     </Box>
//   )
// }

// const EnhancedCareerGuidance = () => {
//   return (
//     <Box py={16} bg={useColorModeValue("gray.50", "gray.900")}>
//       <Container maxW="container.xl">
//         <Heading as="h2" fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }} fontWeight="bold" textAlign="center" mb={12}>
//           Career Path Guidance
//         </Heading>
//         <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
//           <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
//             <div
//               icon={<BarChart size={24} />}
//               title="IT Employed"
//               description="Advance your skills to close talent gaps and switch careers."
//             />
//             <div
//               icon={<Target size={24} />}
//               title="Fresh Graduates"
//               description="Get hands-on experience in real-time projects and start your IT career."
//             />
//             <div
//               icon={<ArrowLeftRight size={24} />}
//               title="Return from Work Break"
//               description="Re-skill yourself to stay ahead of competition and in trend."
//             />
//             <div
//               icon={<Laptop size={24} />}
//               title="Non IT to IT"
//               description="Learn, Get Certified with new demanding skills and Switch."
//             />
//           </SimpleGrid>
//           <Box position="relative" rounded="lg" overflow="hidden" shadow="xl">
//             <Image
//               src={CareerHero || "/placeholder.svg"}
//               alt="Career Hero Background"
//               objectFit="cover"
//               w="full"
//               h="full"
//             />
//             <Box position="absolute" top={0} left={0} right={0} bottom={0} bg="rgba(255, 255, 255, 0.9)" p={8}>
//               <Heading as="h3" fontSize={{ base: "2xl", md: "3xl" }} fontWeight="semibold" mb={4} textAlign="center">
//                 How it helps?
//               </Heading>
//               <VStack spacing={4} align="start">
//                 <Text fontSize="sm">
//                   Early in your career, it's essential to chase skills rather than salary. At Chamber Of Learning, we
//                   provide practical experiences through visualized learning, hands-on projects, fostering a growth
//                   mindset, and nurturing problem-solving skills.
//                 </Text>
//                 <Text fontSize="sm">
//                   Later in your career, Chamber Of Learning helps you align your passions with your work. We empower you
//                   with vertical and horizontal skills to stay ahead in knowledge and finances. We work with you to grow
//                   your brand and network for ongoing success.
//                 </Text>
//               </VStack>
//             </Box>
//           </Box>
//         </Grid>
//       </Container>
//     </Box>
//   )
// }

// export default function HomePage() {
//   const { isOpen, onOpen, onClose } = useDisclosure()
//   const cardWidth = useBreakpointValue({ base: "full", md: "calc(50% - 1rem)", lg: "calc(25% - 1rem)" })

//   const headingSize = useBreakpointValue({ base: "2xl", md: "3xl", lg: "4xl" })
//   const textSize = useBreakpointValue({ base: "md", md: "lg", lg: "xl" })
//   const buttonSize = useBreakpointValue({ base: "md", md: "lg" })

//   const bgColor = useColorModeValue("white", "gray.900")
//   const textColor = useColorModeValue("gray.800", "white")
//   const courseCardBgColor = useColorModeValue("white", "gray.800")
//   const courseCardTextColor = useColorModeValue("gray.800", "white")
//   const courseCardHoverBgColor = useColorModeValue("rgba(255, 255, 255, 0.9)", "rgba(26, 32, 44, 0.9)")
//   const courseCardAccentColor = useColorModeValue("teal.500", "teal.300")

//   return (
//     <Box bg={bgColor} color={textColor}>
//       <Parallax bgImage={bgImage} strength={500} style={{ height: "100vh" }}>
//         <Box height="100%" display="flex" alignItems="center" justifyContent="center" bg="rgba(0, 0, 0, 0.5)">
//           <Container maxW="container.xl">
//             <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8} alignItems="center">
//               <VStack spacing={6} align={{ base: "center", lg: "flex-start" }}>
//                 <Heading
//                   as="h1"
//                   size={headingSize}
//                   fontWeight="bold"
//                   color="white"
//                   textShadow="2px 2px 8px rgba(0,0,0,0.7)"
//                 >
//                   Kick Start Your Career!
//                 </Heading>
//                 <Text
//                   fontSize={textSize}
//                   color="white"
//                   textShadow="1px 1px 4px rgba(0,0,0,0.6)"
//                   textAlign={{ base: "center", lg: "left" }}
//                 >
//                   Join our engaging e-learning platform and unlock your potential.
//                 </Text>
//                 <Button
//                   as="a"
//                   href="/it-courses"
//                   size={buttonSize}
//                   colorScheme="teal"
//                   fontWeight="semibold"
//                   px={8}
//                   rounded="full"
//                   _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
//                 >
//                   Get Started
//                 </Button>
//               </VStack>
//               <Flex justify="center" align="center" position="relative">
//                 <Image
//                   src={Mentor || "/placeholder.svg"}
//                   alt="Mentor"
//                   w={{ base: "40%", lg: "45%" }}
//                   position="absolute"
//                   left="0"
//                   zIndex={2}
//                 />
//                 <Image
//                   src={Hero || "/placeholder.svg"}
//                   alt="Hero"
//                   w={{ base: "40%", lg: "45%" }}
//                   position="absolute"
//                   right="0"
//                   zIndex={2}
//                 />
//               </Flex>
//             </Grid>
//           </Container>
//         </Box>
//       </Parallax>

//       <Box as="section" py={16}>
//         <Container maxW="container.xl">
//           <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12} alignItems="center">
//             <VStack align="start" spacing={6}>
//               <Heading as="h2" fontSize={{ base: "3xl", md: "4xl" }} fontWeight="bold" color="teal.600">
//                 Find Your Career Path
//               </Heading>
//               <Text fontSize={{ base: "lg", md: "xl" }} color="gray.600">
//                 Explore our diverse range of courses and kickstart your career journey. Whether you want to dive into
//                 programming, finance, or data analysis, we have something for everyone!
//               </Text>
//               <Button
//                 as="a"
//                 href="/contact-us"
//                 size={buttonSize}
//                 colorScheme="teal"
//                 fontWeight="semibold"
//                 px={8}
//                 rounded="full"
//                 rightIcon={<FaArrowRight />}
//               >
//                 Get Started Today
//               </Button>
//             </VStack>
//             <Box position="relative">
//               <Image
//                 src={FindHero || "/placeholder.svg"}
//                 alt="FindHero"
//                 opacity={0.3}
//                 position="absolute"
//                 top="50%"
//                 left="50%"
//                 transform="translate(-50%, -50%)"
//               />
//               <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} position="relative" zIndex={1}>
//                 <CourseCard
//                   name="IT Courses"
//                   href="/it-courses"
//                   icon={FaLaptopCode}
//                   description="Explore our technology-focused courses"
//                   bgColor={courseCardBgColor}
//                   textColor={courseCardTextColor}
//                   hoverBgColor={courseCardHoverBgColor}
//                   accentColor={courseCardAccentColor}
//                 />
//                 <CourseCard
//                   name="Non-IT Courses"
//                   href="/Non_it-courses"
//                   icon={FaGraduationCap}
//                   description="Discover our non-technical course offerings"
//                   bgColor={courseCardBgColor}
//                   textColor={courseCardTextColor}
//                   hoverBgColor={courseCardHoverBgColor}
//                   accentColor={courseCardAccentColor}
//                 />
//               </SimpleGrid>
//             </Box>
//           </SimpleGrid>
//         </Container>
//       </Box>

//       <EnhancedCareerGuidance />

//       <Box bg={useColorModeValue("gray.50", "gray.800")} py={16}>
//         <Container maxW="container.xl">
//           <Heading as="h2" fontSize={{ base: "3xl", md: "4xl" }} textAlign="center" mb={12}>
//             Course Statistics
//           </Heading>
//           <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
//             {stats.map((stat, index) => (
//               <Box
//                 key={index}
//                 bg={useColorModeValue("white", "gray.700")}
//                 p={6}
//                 borderRadius="lg"
//                 boxShadow="lg"
//                 transition="all 0.3s"
//                 _hover={{
//                   transform: "translateY(-5px)",
//                   boxShadow: "xl",
//                 }}
//               >
//                 <AnimatedStat
//                   title={stat.title}
//                   count={stat.count}
//                   description={stat.description}
//                   duration={stat.duration}
//                   color={stat.color}
//                 />
//               </Box>
//             ))}
//           </SimpleGrid>
//         </Container>
//       </Box>

//       <Modal isOpen={isOpen} onClose={onClose}>
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>Welcome to Chamber Of Learning</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody>
//             <Text>Thank you for choosing us to enhance your skills! We are excited to help you on your journey.</Text>
//           </ModalBody>
//           <ModalFooter>
//             <Button colorScheme="teal" onClick={onClose}>
//               Close
//             </Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>
//     </Box>
//   )
// }

// "use client"
// import { BarChart, Target, ArrowLeftRight, Laptop, ChevronRight } from "lucide-react"
// import {
//   Box,
//   Container,
//   VStack,
//   Heading,
//   Text,
//   Button,
//   useDisclosure,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalFooter,
//   ModalBody,
//   ModalCloseButton,
//   useBreakpointValue,
//   useColorModeValue,
//   SimpleGrid,
//   Flex,
//   Image,
//   Icon,
//   Grid,
// } from "@chakra-ui/react"
// import { motion } from "framer-motion"
// import { FaLaptopCode, FaGraduationCap, FaArrowRight } from "react-icons/fa"
// import { Parallax } from "react-parallax"
// import AnimatedStat from "../Stat/AnimatedStat"

// // Import your images here
// import CareerHero from "../assets/CareerHero.png"
// import Hero from "../assets/HeroBoy.png"
// import Mentor from "../assets/Mentor.png"
// import FindHero from "../assets/FindHero.png"
// import bgImage from "../assets/HomeBg.jpeg"

// const MotionBox = motion(Box)

// const stats = [
//   {
//     title: "Courses Offered",
//     count: 120,
//     description: "Courses available for enrollment",
//     duration: 2000,
//     color: "teal.600",
//   },
//   {
//     title: "Students Enrolled",
//     count: 8500,
//     description: "Students currently enrolled in all courses",
//     duration: 2500,
//     color: "purple.600",
//   },
//   {
//     title: "Completed Courses",
//     count: 7000,
//     description: "Courses successfully completed by students",
//     duration: 3000,
//     color: "blue.600",
//   },
//   {
//     title: "Active Instructors",
//     count: 50,
//     description: "Instructors teaching on the platform",
//     duration: 1500,
//     color: "orange.600",
//   },
// ]

// const CourseCard = ({ name, icon, description, href, bgColor, textColor, hoverBgColor, accentColor }) => {
//   return (
//     <MotionBox
//       as="a"
//       href={href}
//       position="relative"
//       height="100%"
//       rounded="lg"
//       overflow="hidden"
//       whileHover={{ scale: 1.05 }}
//       transition={{ duration: 0.3 }}
//       role="group"
//     >
//       <Box
//         bg={bgColor}
//         p={6}
//         height="100%"
//         borderWidth="1px"
//         borderColor={useColorModeValue("gray.200", "gray.700")}
//         position="relative"
//         zIndex={1}
//         transition="all 0.3s"
//         _groupHover={{ bg: hoverBgColor }}
//       >
//         <VStack spacing={4} align="start" height="100%">
//           <Icon as={icon} w={12} h={12} color={accentColor} />
//           <Heading as="h3" fontSize="xl" fontWeight="bold" color={textColor}>
//             {name}
//           </Heading>
//           <Text color={useColorModeValue("gray.600", "gray.300")} fontSize="sm">
//             {description}
//           </Text>
//           <Button
//             mt="auto"
//             colorScheme="teal"
//             rightIcon={<FaArrowRight />}
//             _groupHover={{ bg: accentColor, color: "white" }}
//           >
//             Explore Courses
//           </Button>
//         </VStack>
//       </Box>
//       <Box
//         position="absolute"
//         top={0}
//         left={0}
//         right={0}
//         bottom={0}
//         bg={`linear-gradient(135deg, ${accentColor} 0%, transparent 50%)`}
//         opacity={0.1}
//         zIndex={0}
//         transition="opacity 0.3s"
//         _groupHover={{ opacity: 0.2 }}
//       />
//     </MotionBox>
//   )
// }

// const div = ({ icon, title, description }) => {
//   return (
//     <Box
//       bg={useColorModeValue("white", "gray.800")}
//       rounded="lg"
//       shadow="lg"
//       overflow="hidden"
//       transition="all 0.3s"
//       _hover={{ shadow: "xl", transform: "translateY(-5px)" }}
//       role="group"
//     >
//       <Box p={6}>
//         <Flex alignItems="center" mb={4}>
//           <Box
//             bg={useColorModeValue("gray.100", "gray.700")}
//             p={3}
//             rounded="full"
//             color={useColorModeValue("gray.700", "gray.200")}
//             mr={4}
//           >
//             {icon}
//           </Box>
//           <Heading as="h3" fontSize="xl" fontWeight="semibold">
//             {title}
//           </Heading>
//         </Flex>
//         <Text color={useColorModeValue("gray.600", "gray.300")} fontSize="sm">
//           {description}
//         </Text>
//         <Flex alignItems="center" mt={4} color="teal.500" fontWeight="medium">
//           <Text mr={2}>Learn More</Text>
//           <ChevronRight size={20} />
//         </Flex>
//       </Box>
//       <Box
//         h={1}
//         bg="teal.500"
//         transform="scaleX(0)"
//         transformOrigin="left"
//         transition="transform 0.3s"
//         _groupHover={{ transform: "scaleX(1)" }}
//       />
//     </Box>
//   )
// }

// const EnhancedCareerGuidance = () => {
//   return (
//     <Box py={16} bg={useColorModeValue("gray.50", "gray.900")}>
//       <Container maxW="container.xl">
//         <Heading as="h2" fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }} fontWeight="bold" textAlign="center" mb={12}>
//           Career Path Guidance
//         </Heading>
//         <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
//           <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
//             <div
//               icon={<BarChart size={24} />}
//               title="IT Employed"
//               description="Advance your skills to close talent gaps and switch careers."
//             />
//             <div
//               icon={<Target size={24} />}
//               title="Fresh Graduates"
//               description="Get hands-on experience in real-time projects and start your IT career."
//             />
//             <div
//               icon={<ArrowLeftRight size={24} />}
//               title="Return from Work Break"
//               description="Re-skill yourself to stay ahead of competition and in trend."
//             />
//             <div
//               icon={<Laptop size={24} />}
//               title="Non IT to IT"
//               description="Learn, Get Certified with new demanding skills and Switch."
//             />
//           </SimpleGrid>
//           <Box position="relative" rounded="lg" overflow="hidden" shadow="xl">
//             <Image
//               src={CareerHero || "/placeholder.svg"}
//               alt="Career Hero Background"
//               objectFit="cover"
//               w="full"
//               h="full"
//             />
//             <Box position="absolute" top={0} left={0} right={0} bottom={0} bg="rgba(255, 255, 255, 0.9)" p={8}>
//               <Heading as="h3" fontSize={{ base: "2xl", md: "3xl" }} fontWeight="semibold" mb={4} textAlign="center">
//                 How it helps?
//               </Heading>
//               <VStack spacing={4} align="start">
//                 <Text fontSize="sm">
//                   Early in your career, it's essential to chase skills rather than salary. At Chamber Of Learning, we
//                   provide practical experiences through visualized learning, hands-on projects, fostering a growth
//                   mindset, and nurturing problem-solving skills.
//                 </Text>
//                 <Text fontSize="sm">
//                   Later in your career, Chamber Of Learning helps you align your passions with your work. We empower you
//                   with vertical and horizontal skills to stay ahead in knowledge and finances. We work with you to grow
//                   your brand and network for ongoing success.
//                 </Text>
//               </VStack>
//             </Box>
//           </Box>
//         </Grid>
//       </Container>
//     </Box>
//   )
// }

// export default function HomePage() {
//   const { isOpen, onOpen, onClose } = useDisclosure()
//   const cardWidth = useBreakpointValue({ base: "full", md: "calc(50% - 1rem)", lg: "calc(25% - 1rem)" })

//   const headingSize = useBreakpointValue({ base: "2xl", md: "3xl", lg: "4xl" })
//   const textSize = useBreakpointValue({ base: "md", md: "lg", lg: "xl" })
//   const buttonSize = useBreakpointValue({ base: "md", md: "lg" })

//   const bgColor = useColorModeValue("white", "gray.900")
//   const textColor = useColorModeValue("gray.800", "white")
//   const courseCardBgColor = useColorModeValue("white", "gray.800")
//   const courseCardTextColor = useColorModeValue("gray.800", "white")
//   const courseCardHoverBgColor = useColorModeValue("rgba(255, 255, 255, 0.9)", "rgba(26, 32, 44, 0.9)")
//   const courseCardAccentColor = useColorModeValue("teal.500", "teal.300")

//   return (
//     <Box bg={bgColor} color={textColor}>
//       <Parallax bgImage={bgImage} strength={500} style={{ height: "100vh" }}>
//         <Box height="100%" display="flex" alignItems="center" justifyContent="center" bg="rgba(0, 0, 0, 0.5)">
//           <Container maxW="container.xl">
//             <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={96} alignItems="center">
//               <VStack spacing={6} align={{ base: "center", lg: "flex-start" }}>
//                 <Heading
//                   as="h1"
//                   size={headingSize}
//                   fontWeight="bold"
//                   color="white"
//                   textShadow="2px 2px 8px rgba(0,0,0,0.7)"
//                 >
//                   Kick Start Your Career!
//                 </Heading>
//                 <Text
//                   fontSize={textSize}
//                   color="white"
//                   textShadow="1px 1px 4px rgba(0,0,0,0.6)"
//                   textAlign={{ base: "center", lg: "left" }}
//                 >
//                   Join our engaging e-learning platform and unlock your potential.
//                 </Text>
//                 <Button
//                   as="a"
//                   href="/it-courses"
//                   size={buttonSize}
//                   colorScheme="teal"
//                   fontWeight="semibold"
//                   px={8}
//                   rounded="full"
//                   _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
//                 >
//                   Get Started
//                 </Button>
//               </VStack>
//               <Flex justify="center" align="center" position="relative">
//                 <Image
//                   src={Mentor || "/placeholder.svg"}
//                   alt="Mentor"
//                   w={{ base: "40%", lg: "45%" }}
//                   position="absolute"
//                   left="0"
//                   zIndex={2}
//                 />
//                 <Image
//                   src={Hero || "/placeholder.svg"}
//                   alt="Hero"
//                   w={{ base: "40%", lg: "45%" }}
//                   position="absolute"
//                   right="0"
//                   zIndex={2}
//                 />
//               </Flex>
//             </Grid>
//           </Container>
//         </Box>
//       </Parallax>

//       <Box as="section" py={16}>
//         <Container maxW="container.xl">
//           <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12} alignItems="center">
//             <VStack align="start" spacing={6}>
//               <Heading as="h2" fontSize={{ base: "3xl", md: "4xl" }} fontWeight="bold" color="teal.600">
//                 Find Your Career Path
//               </Heading>
//               <Text fontSize={{ base: "lg", md: "xl" }} color="gray.600">
//                 Explore our diverse range of courses and kickstart your career journey. Whether you want to dive into
//                 programming, finance, or data analysis, we have something for everyone!
//               </Text>
//               <Button
//                 as="a"
//                 href="/contact-us"
//                 size={buttonSize}
//                 colorScheme="teal"
//                 fontWeight="semibold"
//                 px={8}
//                 rounded="full"
//                 rightIcon={<FaArrowRight />}
//               >
//                 Get Started Today
//               </Button>
//             </VStack>
//             <Box position="relative">
//               <Image
//                 src={FindHero || "/placeholder.svg"}
//                 alt="FindHero"
//                 opacity={0.3}
//                 position="absolute"
//                 top="50%"
//                 left="50%"
//                 transform="translate(-50%, -50%)"
//               />
//               <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} position="relative" zIndex={1}>
//                 <CourseCard
//                   name="IT Courses"
//                   href="/it-courses"
//                   icon={FaLaptopCode}
//                   description="Explore our technology-focused courses"
//                   bgColor={courseCardBgColor}
//                   textColor={courseCardTextColor}
//                   hoverBgColor={courseCardHoverBgColor}
//                   accentColor={courseCardAccentColor}
//                 />
//                 <CourseCard
//                   name="Non-IT Courses"
//                   href="/Non_it-courses"
//                   icon={FaGraduationCap}
//                   description="Discover our non-technical course offerings"
//                   bgColor={courseCardBgColor}
//                   textColor={courseCardTextColor}
//                   hoverBgColor={courseCardHoverBgColor}
//                   accentColor={courseCardAccentColor}
//                 />
//               </SimpleGrid>
//             </Box>
//           </SimpleGrid>
//         </Container>
//       </Box>

//       <EnhancedCareerGuidance />

//       <Box bg={useColorModeValue("gray.50", "gray.800")} py={16}>
//         <Container maxW="container.xl">
//           <Heading as="h2" fontSize={{ base: "3xl", md: "4xl" }} textAlign="center" mb={12}>
//             Course Statistics
//           </Heading>
//           <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
//             {stats.map((stat, index) => (
//               <Box
//                 key={index}
//                 bg={useColorModeValue("white", "gray.700")}
//                 p={6}
//                 borderRadius="lg"
//                 boxShadow="lg"
//                 transition="all 0.3s"
//                 _hover={{
//                   transform: "translateY(-5px)",
//                   boxShadow: "xl",
//                 }}
//                 role="group"
//               >
//                 <AnimatedStat
//                   title={stat.title}
//                   count={stat.count}
//                   description={stat.description}
//                   duration={stat.duration}
//                   color={stat.color}
//                 />
//               </Box>
//             ))}
//           </SimpleGrid>
//         </Container>
//       </Box>

//       <Modal isOpen={isOpen} onClose={onClose}>
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>Welcome to Chamber Of Learning</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody>
//             <Text>Thank you for choosing us to enhance your skills! We are excited to help you on your journey.</Text>
//           </ModalBody>
//           <ModalFooter>
//             <Button colorScheme="teal" onClick={onClose}>
//               Close
//             </Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>
//     </Box>
//   )
// }

// import React from 'react';
// import {
//   Box,
//   Button,
//   Container,
//   Flex,
//   Grid,
//   Heading,
//   Image,
//   SimpleGrid,
//   Stack,
//   Text,
//   VStack,
//   useColorModeValue,
//   Badge,
//   Icon,
//   Divider,
// } from '@chakra-ui/react';
// import { motion, useScroll, useTransform } from 'framer-motion';
// import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
// import {
//   ArrowForwardIcon,
//   CheckCircleIcon
// } from '@chakra-ui/icons';
// import {
//   FaGraduationCap,
//   FaLaptopCode,
//   FaUsers,
//   FaCertificate,
//   FaBookReader,
//   FaChalkboardTeacher
// } from 'react-icons/fa';
// import imagebg from '../assets/HeroBoy.png'

// // Motion components
// const MotionBox = motion(Box);
// const MotionFlex = motion(Flex);
// const MotionStack = motion(Stack);

// // Animation variants
// const fadeInUpVariant = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: "easeOut" }
//   }
// };

// const staggerContainer = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.2
//     }
//   }
// };

// const TestimonialCard = ({ name, role, content, image }) => (
//   <MotionBox
//     initial="hidden"
//     whileInView="visible"
//     variants={fadeInUpVariant}
//     viewport={{ once: true }}
//     bg={useColorModeValue('white', 'gray.700')}
//     p={6}
//     borderRadius="lg"
//     boxShadow="lg"
//     position="relative"
//   >
//     <VStack spacing={4} align="start">
//       <Flex align="center" w="full">
//         <Image
//           src={image}
//           alt={name}
//           boxSize="50px"
//           borderRadius="full"
//           mr={4}
//         />
//         <Box>
//           <Text fontWeight="bold">{name}</Text>
//           <Text fontSize="sm" color="gray.500">{role}</Text>
//         </Box>
//       </Flex>
//       <Text color="gray.600">"{content}"</Text>
//     </VStack>
//   </MotionBox>
// );

// const CourseCategory = ({ icon, title, description, courses }) => (
//   <MotionBox
//     initial="hidden"
//     whileInView="visible"
//     variants={fadeInUpVariant}
//     viewport={{ once: true }}
//     bg={useColorModeValue('white', 'gray.700')}
//     p={6}
//     borderRadius="xl"
//     boxShadow="md"
//     _hover={{ transform: 'translateY(-5px)', boxShadow: 'xl' }}
//     transition="all 0.3s"
//   >
//     <VStack spacing={4} align="start">
//       <Icon as={icon} w={8} h={8} color="teal.500" />
//       <Heading size="md">{title}</Heading>
//       <Text color="gray.600">{description}</Text>
//       <Divider />
//       <VStack align="start" spacing={2} w="full">
//         {courses.map((course, index) => (
//           <Flex key={index} align="center">
//             <CheckCircleIcon color="green.500" mr={2} />
//             <Text fontSize="sm">{course}</Text>
//           </Flex>
//         ))}
//       </VStack>
//     </VStack>
//   </MotionBox>
// );

// const HomePage = () => {
//   const bgColor = useColorModeValue('gray.50', 'gray.900');
//   const { scrollYProgress } = useScroll();
//   const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

//   return (
//     <ParallaxProvider>
//       <Box bg={bgColor} minH="100vh" overflowX="hidden">
//         {/* Hero Section */}
//         <Box
//           bg="teal.600"
//           color="white"
//           position="relative"
//           overflow="hidden"
//           py={{ base: 20, md: 32 }}
//         >
//           <Container maxW="container.xl">
//             <MotionStack
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               direction={{ base: 'column', lg: 'row' }}
//               spacing={{ base: 8, lg: 16 }}
//               align="center"
//             >
//               <VStack
//                 spacing={6}
//                 align={{ base: 'center', lg: 'start' }}
//                 maxW={{ base: '100%', lg: '60%' }}
//               >
//                 <Badge
//                   colorScheme="teal"
//                   bg="white"
//                   color="teal.600"
//                   px={3}
//                   py={1}
//                   rounded="full"
//                 >
//                   Transform Your Future
//                 </Badge>
//                 <Heading
//                   as="h1"
//                   size={{ base: '2xl', md: '3xl' }}
//                   lineHeight="shorter"
//                 >
//                   Empower Your Learning Journey With Expert-Led Courses
//                 </Heading>
//                 <Text fontSize={{ base: 'lg', md: 'xl' }} opacity={0.9}>
//                   Join our community of over 8,500 students and access premium educational
//                   content designed to help you succeed in today's digital world.
//                 </Text>
//                 <Stack direction={{ base: 'column', sm: 'row' }} spacing={4}>
//                   <Button
//                     size="lg"
//                     bg="white"
//                     color="teal.600"
//                     _hover={{ bg: 'gray.100' }}
//                   >
//                     Browse Courses
//                   </Button>
//                   <Button
//                     size="lg"
//                     variant="outline"
//                     _hover={{ bg: 'whiteAlpha.200' }}
//                   >
//                     View Programs
//                   </Button>
//                 </Stack>
//               </VStack>
//               <Parallax speed={5}>
//                 <Image
//                   src={imagebg}
//                   alt="Education illustration"
//                   maxW="500px"
//                   w="100%"
//                   h="auto"
//                 />
//               </Parallax>
//             </MotionStack>
//           </Container>
//         </Box>

//         {/* Featured Categories */}
//         <Container maxW="container.xl" py={16}>
//           <VStack spacing={12}>
//             <Heading textAlign="center">Our Course Categories</Heading>
//             <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} w="full">
//               <CourseCategory
//                 icon={FaLaptopCode}
//                 title="Programming & Development"
//                 description="Master modern programming languages and frameworks"
//                 courses={[
//                   "Web Development Bootcamp",
//                   "Python Programming",
//                   "JavaScript Mastery",
//                   "Mobile App Development"
//                 ]}
//               />
//               <CourseCategory
//                 icon={FaChalkboardTeacher}
//                 title="Business & Management"
//                 description="Develop essential business skills"
//                 courses={[
//                   "Project Management",
//                   "Digital Marketing",
//                   "Business Analytics",
//                   "Leadership Skills"
//                 ]}
//               />
//               <CourseCategory
//                 icon={FaBookReader}
//                 title="Data Science"
//                 description="Learn data analysis and machine learning"
//                 courses={[
//                   "Data Analysis with Python",
//                   "Machine Learning Basics",
//                   "SQL Mastery",
//                   "Big Data Analytics"
//                 ]}
//               />
//             </SimpleGrid>
//           </VStack>
//         </Container>

//         {/* Key Features */}
//         <Box bg={useColorModeValue('white', 'gray.800')} py={16}>
//           <Container maxW="container.xl">
//             <MotionStack
//               initial="hidden"
//               whileInView="visible"
//               variants={staggerContainer}
//               viewport={{ once: true }}
//               spacing={12}
//             >
//               <Heading textAlign="center">Why Choose Our Platform</Heading>
//               <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
//                 {[
//                   {
//                     icon: FaGraduationCap,
//                     title: "Expert Instructors",
//                     description: "Learn from industry professionals with years of experience"
//                   },
//                   {
//                     icon: FaCertificate,
//                     title: "Certified Courses",
//                     description: "Earn recognized certificates upon completion"
//                   },
//                   {
//                     icon: FaUsers,
//                     title: "Community Support",
//                     description: "Join a community of passionate learners"
//                   },
//                   {
//                     icon: FaLaptopCode,
//                     title: "Hands-on Projects",
//                     description: "Build real-world projects for your portfolio"
//                   }
//                 ].map((feature, index) => (
//                   <MotionBox
//                     key={index}
//                     variants={fadeInUpVariant}
//                     p={6}
//                     borderRadius="lg"
//                     bg={useColorModeValue('gray.50', 'gray.700')}
//                   >
//                     <VStack spacing={4}>
//                       <Icon as={feature.icon} w={8} h={8} color="teal.500" />
//                       <Heading size="md">{feature.title}</Heading>
//                       <Text textAlign="center" color="gray.600">
//                         {feature.description}
//                       </Text>
//                     </VStack>
//                   </MotionBox>
//                 ))}
//               </SimpleGrid>
//             </MotionStack>
//           </Container>
//         </Box>

//         {/* Testimonials */}
//         <Container maxW="container.xl" py={16}>
//           <VStack spacing={12}>
//             <Heading textAlign="center">Student Success Stories</Heading>
//             <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
//               <TestimonialCard
//                 name="Sarah Johnson"
//                 role="Web Developer"
//                 content="The web development bootcamp completely transformed my career. I went from zero coding knowledge to landing a full-stack developer position in just 6 months."
//                 image="/testimonial1.jpg"
//               />
//               <TestimonialCard
//                 name="Michael Chen"
//                 role="Data Analyst"
//                 content="The data science course provided me with practical skills that I use daily in my job. The instructors were exceptional and the course material was up-to-date."
//                 image="/testimonial2.jpg"
//               />
//               <TestimonialCard
//                 name="Emily Rodriguez"
//                 role="Digital Marketer"
//                 content="Taking the digital marketing course helped me understand the latest trends and strategies. I've been able to grow my company's online presence significantly."
//                 image="/testimonial3.jpg"
//               />
//             </SimpleGrid>
//           </VStack>
//         </Container>

//         {/* CTA Section */}
//         <Box py={16} bg={useColorModeValue('teal.50', 'teal.900')}>
//           <Container maxW="container.xl">
//             <MotionBox
//               initial="hidden"
//               whileInView="visible"
//               variants={fadeInUpVariant}
//               viewport={{ once: true }}
//             >
//               <Stack
//                 direction={{ base: 'column', md: 'row' }}
//                 spacing={8}
//                 align="center"
//                 justify="space-between"
//                 bg={useColorModeValue('white', 'gray.800')}
//                 p={8}
//                 borderRadius="xl"
//                 boxShadow="xl"
//               >
//                 <VStack align={{ base: 'center', md: 'start' }} spacing={4}>
//                   <Heading size="lg">Start Your Learning Journey Today</Heading>
//                   <Text fontSize="lg" color={useColorModeValue('gray.600', 'gray.300')}>
//                     Get access to all courses with our premium membership
//                   </Text>
//                 </VStack>
//                 <Button
//                   size="lg"
//                   colorScheme="teal"
//                   rightIcon={<ArrowForwardIcon />}
//                 >
//                   Enroll Now
//                 </Button>
//               </Stack>
//             </MotionBox>
//           </Container>
//         </Box>
//       </Box>
//     </ParallaxProvider>
//   );
// };

// export default HomePage;

// import React from "react"
// import {
//   Box,
//   Container,
//   VStack,
//   Heading,
//   Text,
//   Button,
//   useDisclosure,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalFooter,
//   ModalBody,
//   ModalCloseButton,
//   useBreakpointValue,
//   useColorModeValue,
//   SimpleGrid,
//   Flex,
//   Image,
//   Icon,
//   Stack,
// } from "@chakra-ui/react"
// import { motion } from "framer-motion"
// import { FaLaptopCode, FaGraduationCap, FaArrowRight } from "react-icons/fa"
// import { Parallax } from "react-parallax"
// import EnhancedCareerGuidance from "../Courses/Courses"
// import Hero from "../assets/HeroBoy.png"
// import Mentor from "../assets/Mentor.png"
// import FindHero from "../assets/FindHero.png"
// import AnimatedStat from "../Stat/AnimatedStat"
// import bgVideo from "../assets/HeroVideo1.mp4"

// const MotionBox = motion(Box)

// const stats = [
//   {
//     title: "Courses Offered",
//     count: 120,
//     description: "Courses available for enrollment",
//     duration: 2000,
//     color: "teal.600",
//   },
//   {
//     title: "Students Enrolled",
//     count: 8500,
//     description: "Students currently enrolled in all courses",
//     duration: 2500,
//     color: "purple.600",
//   },
//   {
//     title: "Completed Courses",
//     count: 7000,
//     description: "Courses successfully completed by students",
//     duration: 3000,
//     color: "blue.600",
//   },
//   {
//     title: "Active Instructors",
//     count: 50,
//     description: "Instructors teaching on the platform",
//     duration: 1500,
//     color: "orange.600",
//   },
// ]
// 3
// const CourseCard = ({ name, icon, description, href ,Image}) => {
//   const bgColor = useColorModeValue("white", "gray.800")
//   const textColor = useColorModeValue("gray.800", "white")
//   const accentColor = useColorModeValue("teal.500", "teal.300")

//   return (
//     <MotionBox
//       as="a"
//       href={href}
//       bg={bgColor}
//       p={6}
//       borderRadius="xl"
//       boxShadow="xl"
//       transition="all 0.3s"
//       _hover={{
//         transform: "translateY(-5px)",
//         boxShadow: "2xl",
//       }}
//       whileHover={{ scale: 1.03 }}
//     >
//       <VStack spacing={4} align="start">
//         <Flex align="center" justify="center" w={16} h={16} bg={accentColor} borderRadius="full">
//           <Icon as={icon} w={8} h={8} color="white" />
//         </Flex>
//         <Heading as="h3" fontSize="2xl" fontWeight="bold" color={textColor}>
//           {name}
//         </Heading>
//         <Text color={useColorModeValue("gray.600", "gray.300")}>{description}</Text>
//         <Button rightIcon={<FaArrowRight />} colorScheme="teal" variant="link" size="sm">
//           Explore Courses
//         </Button>
//       </VStack>
//     </MotionBox>
//   )
// }

// export default function HomePage() {
//   const { isOpen, onOpen, onClose } = useDisclosure()
//   const containerPadding = useBreakpointValue({ base: 4, md: 8, lg: 12 })

//   const bgColor = useColorModeValue("gray.50", "gray.900")
//   const textColor = useColorModeValue("black", "white")
//   const bgGradient = useColorModeValue(
//     "linear(to-br, rgba(0,0,0,0.5), rgba(255,255,255,0.2))",
//     "linear(to-br, rgba(255,255,255,0.2), rgba(0,0,0,0.8))",
//   )

//   return (
//     <Box bg={bgColor} color={textColor} minHeight="100vh">
//       <Parallax strength={500}>
//         <Box minHeight={{ base: "100vh", md: "80vh" }} position="relative" overflow="hidden">
//           {/* Background Video */}
//           <Box
//             as="video"
//             position="absolute"
//             top="0"
//             left="0"
//             right="0"
//             bottom="0"
//             width="100%"
//             height="100%"
//             objectFit="cover"
//             src={bgVideo}
//             autoPlay
//             loop
//             muted
//             playsInline
//           />

//           <Box position="absolute" top="0" left="0" right="0" bottom="0" bgGradient={bgGradient} zIndex="1" />

//           <Container maxW="container.xl" p={containerPadding} position="relative" zIndex="2">
//             <Stack
//               direction={{ base: "column", lg: "row" }}
//               align="center"
//               justify="space-between"
//               minHeight="inherit"
//               pt={{ base: 20, md: 20 }}
//               spacing={{ base: 12, lg: 0 }}
//             >
//               <VStack
//                 spacing={6}
//                 textAlign={{ base: "center", lg: "left" }}
//                 align={{ base: "center", lg: "flex-start" }}
//                 maxW={{ base: "100%", lg: "50%" }}
//               >
//                 <Heading
//                   as="h1"
//                   fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
//                   fontWeight="bold"
//                   color="white"
//                   textShadow="2px 2px 8px rgba(0,0,0,0.7)"
//                 >
//                   Kick Start Your Career!
//                 </Heading>
//                 <Text
//                   fontSize={{ base: "md", md: "lg", lg: "xl" }}
//                   maxW="600px"
//                   color="white"
//                   textShadow="1px 1px 4px rgba(0,0,0,0.6)"
//                 >
//                   Join our engaging e-learning platform.
//                 </Text>
//                 <Button
//                   as="a"
//                   href="/it-courses"
//                   backgroundColor="teal.600"
//                   color="white"
//                   borderRadius="full"
//                   size={{ base: "md", lg: "lg" }}
//                   px={8}
//                   _hover={{
//                     backgroundColor: "teal.700",
//                     transform: "translateY(-2px)",
//                   }}
//                   transition="all 0.3s"
//                 >
//                   Get Started
//                 </Button>
//               </VStack>

//               <Flex
//                 position="relative"
//                 width={{ base: "100%", lg: "50%" }}
//                 height={{ base: "300px", md: "400px", lg: "100%" }}
//                 justify="center"
//                 align="bottom"
//               >
//                 <Image
//                   src={Mentor || "/placeholder.svg"}
//                   alt="Mentor"
//                   position="absolute"
//                   top={{ base: "0", lg: "10%" }}
//                   left={{ base: "0", lg: "0" }}
//                   width={{ base: "50%", sm: "40%", md: "30%", lg: "45%" }}
//                   height="auto"
//                   objectFit="contain"
//                   borderRadius="lg"

//                   zIndex="2"
//                   transition="transform 0.3s ease-in-out"
//                   _hover={{ transform: "scale(1.05)" }}
//                 />
//                 <Image
//                   src={Hero || "/placeholder.svg"}
//                   alt="Hero"
//                   position="absolute"
//                   right={{ base: "0", lg: "0" }}
//                   width={{ base: "50%", sm: "40%", md: "30%", lg: "45%" }}
//                   top={{ base: "0", lg: "10%" }}
//                   height="auto"
//                   objectFit="contain"
//                   borderRadius="lg"

//                   zIndex="2"
//                   transition="transform 0.3s ease-in-out"
//                   _hover={{ transform: "scale(1.05)" }}
//                 />
//               </Flex>
//             </Stack>
//           </Container>
//         </Box>
//       </Parallax>

//       <Box as="section" py={{ base: 16, md: 24 }}>
//         <Container maxW="container.xl">
//           <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 12, lg: 16 }} alignItems="start">
//             <VStack align="start" spacing={6}>
//               <Heading as="h2" fontSize={{ base: "3xl", md: "4xl" }} fontWeight="bold" color="teal.900">
//                 Find Your Career Path
//               </Heading>
//               <Text fontSize={{ base: "lg", md: "xl" }} color="gray.600">
//                 Explore our diverse range of courses and kickstart your career journey. Whether you want to dive into
//                 programming, finance, or data analysis, we have something for everyone!
//               </Text>
//               <Box position="relative" width="100%" height={{ base: "10px", md: "10px" }}>
//                 {/* <Image
//                   src={FindHero || "/placeholder.svg"}
//                   alt="FindHero"
//                   layout="fill"
//                   objectFit="contain"
//                   opacity={0.3}
//                 /> */}
//               </Box>
//               <Button
//                 as="a"
//                 href="/contact-us"
//                 size={{ base: "md", md: "lg" }}
//                 // colorScheme="green"
//                 backgroundColor={"teal.900"}
//                 textColor={"white"}
//                 fontWeight="semibold"
//                 px={6}
//                 rounded="full"
//                 _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
//                 transition="all 0.3s"
//                 rightIcon={<FaArrowRight />}
//               >
//                 Get Started Today
//               </Button>
//             </VStack>

//             <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
//               <CourseCard
//                 name="IT Courses"
//                 href="/it-courses"
//                 icon={FaLaptopCode}
//                 description="Explore our technology-focused courses including programming, web development, and more."
//               />
//               <CourseCard
//                 name="Non-IT Courses"
//                 href="/Non_it-courses"
//                 icon={FaGraduationCap}
//                 description="Discover our non-technical course offerings in business, design, and other fields."
//               />

//             </SimpleGrid>
//           </SimpleGrid>
//         </Container>
//       </Box>

//       <EnhancedCareerGuidance />
// {/*
//       <Box bg="gray.50" py={16}>
//         <Container maxW="container.xl">
//           <Heading as="h2" fontSize={{ base: "3xl", md: "4xl" }} textAlign="center" mb={12}>
//             Course Statistics
//           </Heading>
//           <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
//             {stats.map((stat, index) => (
//               <Box
//                 key={index}
//                 bg="white"
//                 p={6}
//                 borderRadius="lg"
//                 boxShadow="lg"
//                 _hover={{
//                   transform: "translateY(-5px)",
//                   boxShadow: "xl",
//                 }}
//                 transition="all 0.3s"
//               >
//                 <AnimatedStat
//                   title={stat.title}
//                   count={stat.count}
//                   description={stat.description}
//                   duration={stat.duration}
//                   color={stat.color}
//                 />
//               </Box>
//             ))}
//           </SimpleGrid>
//         </Container>
//       </Box> */}
//       <Box bg="gray.50" py={16}>
//   <Container maxW="container.xl">
//     <Heading as="h2" fontSize={{ base: "3xl", md: "4xl" }} textAlign="center" mb={12}>
//       Course Statistics
//     </Heading>
//     <SimpleGrid
//       columns={{ base: 1, md: 2, lg: 4 }}
//       spacing={8}
//       justifyItems="center"  // Center items horizontally in the grid
//     >
//       {stats.map((stat, index) => (
//         <Box
//           key={index}
//           bg="white"
//           p={6}
//           borderRadius="lg"
//           boxShadow="lg"
//           _hover={{
//             transform: "translateY(-5px)",
//             boxShadow: "xl",
//           }}
//           transition="all 0.3s"
//           display="flex"
//           flexDirection="column"
//           justifyContent="center"
//           alignItems="center"
//           maxW={{ base: "100%", sm: "350px", md: "300px", lg: "250px" }} // Ensures boxes don't exceed a certain width
//           w="100%" // Takes up the full width available
//           minH="200px"  // Ensures a minimum height for consistency
//         >
//           <AnimatedStat
//             title={stat.title}
//             count={stat.count}
//             description={stat.description}
//             duration={stat.duration}
//             color={stat.color}
//           />
//         </Box>
//       ))}
//     </SimpleGrid>
//   </Container>
// </Box>

//       <Modal isOpen={isOpen} onClose={onClose}>
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>Welcome to Chamber Of Learning</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody>
//             <Text>Thank you for choosing us to enhance your skills! We are excited to help you on your journey.</Text>
//           </ModalBody>
//           <ModalFooter>
//             <Button colorScheme="teal" onClick={onClose}>
//               Close
//             </Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>
//     </Box>
//   )
// }

// import React from "react"
// import {
//   Box,
//   Container,
//   VStack,
//   Heading,
//   Text,
//   Button,
//   useDisclosure,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalFooter,
//   ModalBody,
//   ModalCloseButton,
//   useBreakpointValue,
//   useColorModeValue,
//   SimpleGrid,
//   Flex,
//   Image,
//   Icon,
//   Stack,
// } from "@chakra-ui/react"
// import { motion } from "framer-motion"
// import { FaLaptopCode, FaGraduationCap, FaArrowRight } from "react-icons/fa"
// import { Parallax } from "react-parallax"
// import EnhancedCareerGuidance from "../Courses/Courses"
// import Hero from "../assets/HeroBoy.png"
// import Mentor from "../assets/Mentor.png"
// import FindHero from "../assets/FindHero.png"
// import AnimatedStat from "../Stat/AnimatedStat"
// import bgVideo from "../assets/HeroVideo1.mp4"

// const MotionBox = motion(Box)

// const stats = [
//   {
//     title: "Courses Offered",
//     count: 120,
//     description: "Courses available for enrollment",
//     duration: 2000,
//     color: "teal.600",
//   },
//   {
//     title: "Students Enrolled",
//     count: 8500,
//     description: "Students currently enrolled in all courses",
//     duration: 2500,
//     color: "purple.600",
//   },
//   {
//     title: "Completed Courses",
//     count: 7000,
//     description: "Courses successfully completed by students",
//     duration: 3000,
//     color: "blue.600",
//   },
//   {
//     title: "Active Instructors",
//     count: 50,
//     description: "Instructors teaching on the platform",
//     duration: 1500,
//     color: "orange.600",
//   },
// ]

// const CourseCard = ({ name, icon, description, href }) => {
//   const bgColor = useColorModeValue("white", "gray.800")
//   const textColor = useColorModeValue("gray.800", "white")
//   const accentColor = useColorModeValue("teal.500", "teal.300")

//   return (
//     <MotionBox
//       as="a"
//       href={href}
//       bg={bgColor}
//       p={6}
//       borderRadius="xl"
//       boxShadow="xl"
//       transition="all 0.3s"
//       _hover={{
//         transform: "translateY(-5px)",
//         boxShadow: "2xl",
//       }}
//       whileHover={{ scale: 1.03 }}
//     >
//       <VStack spacing={4} align="start">
//         <Flex align="center" justify="center" w={16} h={16} bg={accentColor} borderRadius="full">
//           <Icon as={icon} w={8} h={8} color="white" />
//         </Flex>
//         <Heading as="h3" fontSize="2xl" fontWeight="bold" color={textColor}>
//           {name}
//         </Heading>
//         <Text color={useColorModeValue("gray.600", "gray.300")}>{description}</Text>
//         <Button rightIcon={<FaArrowRight />} colorScheme="teal" variant="link" size="sm">
//           Explore Courses
//         </Button>
//       </VStack>
//     </MotionBox>
//   )
// }

// export default function HomePage() {
//   const { isOpen, onOpen, onClose } = useDisclosure()
//   const containerPadding = useBreakpointValue({ base: 4, md: 8, lg: 12 })

//   const bgColor = useColorModeValue("gray.50", "gray.900")
//   const textColor = useColorModeValue("black", "white")
//   const bgGradient = useColorModeValue(
//     "linear(to-br, rgba(0,0,0,0.5), rgba(255,255,255,0.2))",
//     "linear(to-br, rgba(255,255,255,0.2), rgba(0,0,0,0.8))",
//   )

//   return (
//     <Box bg={bgColor} color={textColor} minHeight="100vh">
//       <Parallax strength={500}>
//         <Box minHeight={{ base: "100vh", md: "80vh" }} position="relative" overflow="hidden">
//           {/* Background Video */}
//           <Box
//             as="video"
//             position="absolute"
//             top="0"
//             left="0"
//             right="0"
//             bottom="0"
//             width="100%"
//             height="100%"
//             objectFit="cover"
//             src={bgVideo}
//             autoPlay
//             loop
//             muted
//             playsInline
//           />

//           <Box position="absolute" top="0" left="0" right="0" bottom="0" bgGradient={bgGradient} zIndex="1" />

//           <Container maxW="container.xl" p={containerPadding} position="relative" zIndex="2">
//             <Stack
//               direction={{ base: "column", lg: "row" }}
//               align="center"
//               justify="space-between"
//               minHeight="inherit"
//               pt={{ base: 20, md: 20 }}
//               spacing={{ base: 12, lg: 0 }}
//             >
//               <VStack
//                 spacing={6}
//                 textAlign={{ base: "center", lg: "left" }}
//                 align={{ base: "center", lg: "flex-start" }}
//                 maxW={{ base: "100%", lg: "50%" }}
//               >
//                 <Heading
//                   as="h1"
//                   fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
//                   fontWeight="bold"
//                   color="white"
//                   textShadow="2px 2px 8px rgba(0,0,0,0.7)"
//                 >
//                   Kick Start Your Career!
//                 </Heading>
//                 <Text
//                   fontSize={{ base: "md", md: "lg", lg: "xl" }}
//                   maxW="600px"
//                   color="white"
//                   textShadow="1px 1px 4px rgba(0,0,0,0.6)"
//                 >
//                   Join our engaging e-learning platform.
//                 </Text>
//                 <Button
//                   as="a"
//                   href="/it-courses"
//                   backgroundColor="teal.600"
//                   color="white"
//                   borderRadius="full"
//                   size={{ base: "md", lg: "lg" }}
//                   px={8}
//                   _hover={{
//                     backgroundColor: "teal.700",
//                     transform: "translateY(-2px)",
//                   }}
//                   transition="all 0.3s"
//                 >
//                   Get Started
//                 </Button>
//               </VStack>

//               <Flex
//                 position="relative"
//                 width={{ base: "100%", lg: "50%" }}
//                 height={{ base: "300px", md: "400px", lg: "100%" }}
//                 justify="center"
//                 align="bottom"
//               >
//                 <Image
//                   src={Mentor || "/placeholder.svg"}
//                   alt="Mentor"
//                   position="absolute"
//                   top={{ base: "0", lg: "10%" }}
//                   left={{ base: "0", lg: "0" }}
//                   width={{ base: "50%", sm: "40%", md: "30%", lg: "45%" }}
//                   height="auto"
//                   objectFit="contain"
//                   borderRadius="lg"
//                   zIndex="2"
//                   transition="transform 0.3s ease-in-out"
//                   _hover={{ transform: "scale(1.05)" }}
//                 />
//                 <Image
//                   src={Hero || "/placeholder.svg"}
//                   alt="Hero"
//                   position="absolute"
//                   right={{ base: "0", lg: "0" }}
//                   width={{ base: "50%", sm: "40%", md: "30%", lg: "45%" }}
//                   top={{ base: "0", lg: "10%" }}
//                   height="auto"
//                   objectFit="contain"
//                   borderRadius="lg"
//                   zIndex="2"
//                   transition="transform 0.3s ease-in-out"
//                   _hover={{ transform: "scale(1.05)" }}
//                 />
//               </Flex>
//             </Stack>
//           </Container>
//         </Box>
//       </Parallax>

//       <Box as="section" py={{ base: 16, md: 24 }}>
//         <Container maxW="container.xl">
//           <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 12, lg: 16 }} alignItems="start">
//             <VStack align="start" spacing={6}>
//               <Heading as="h2" fontSize={{ base: "3xl", md: "4xl" }} fontWeight="bold" color="teal.900">
//                 Find Your Career Path
//               </Heading>
//               <Text fontSize={{ base: "lg", md: "xl" }} color="gray.600">
//                 Explore our diverse range of courses and kickstart your career journey. Whether you want to dive into
//                 programming, finance, or data analysis, we have something for everyone!
//               </Text>
//               <Box position="relative" width="100%" height={{ base: "200px", md: "300px" }}>
//                 <Image
//                   src={FindHero || "/placeholder.svg"}
//                   alt="FindHero"
//                   layout="fill"
//                   objectFit="contain"
//                   opacity={0.3}
//                 />
//               </Box>
//               <Button
//                 as="a"
//                 href="/contact-us"
//                 size={{ base: "md", md: "lg" }}
//                 backgroundColor={"teal.900"}
//                 textColor={"white"}
//                 fontWeight="semibold"
//                 px={8}
//                 rounded="full"
//                 _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
//                 transition="all 0.3s"
//                 rightIcon={<FaArrowRight />}
//               >
//                 Get Started Today
//               </Button>
//             </VStack>

//             <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
//               <CourseCard
//                 name="IT Courses"
//                 href="/it-courses"
//                 icon={FaLaptopCode}
//                 description="Explore our technology-focused courses including programming, web development, and more."
//               />
//               <CourseCard
//                 name="Non-IT Courses"
//                 href="/Non_it-courses"
//                 icon={FaGraduationCap}
//                 description="Discover our non-technical course offerings in business, design, and other fields."
//               />
//             </SimpleGrid>
//           </SimpleGrid>
//         </Container>
//       </Box>

//       <EnhancedCareerGuidance />

//       <Box bg="gray.50" py={16}>
//   <Container maxW="container.xl">
//     <Heading as="h2" fontSize={{ base: "3xl", md: "4xl" }} textAlign="center" mb={12}>
//       Course Statistics
//     </Heading>
//     <SimpleGrid
//       columns={{ base: 1, md: 2, lg: 4 }}
//       spacing={8}
//       justifyItems="center"  // Centers items horizontally in the grid
//       gap={{ base: 4, md: 8 }} // Ensure space between elements
//     >
//       {stats.map((stat, index) => (
//         <Box
//           key={index}
//           bg="white"
//           p={6}
//           borderRadius="lg"
//           boxShadow="lg"
//           _hover={{
//             transform: "translateY(-5px)",
//             boxShadow: "xl",
//           }}
//           transition="all 0.3s"
//           display="flex"
//           flexDirection="column"
//           justifyContent="center"
//           alignItems="center"
//           maxW={{ base: "100%", sm: "350px", md: "300px", lg: "250px" }} // Limit width at larger breakpoints
//           w="100%"  // Takes up full width available
//           minH="200px"  // Ensure a minimum height for consistency
//         >
//           <AnimatedStat
//             title={stat.title}
//             count={stat.count}
//             description={stat.description}
//             duration={stat.duration}
//             color={stat.color}
//           />
//         </Box>
//       ))}
//     </SimpleGrid>
//   </Container>
// </Box>

//       <Modal isOpen={isOpen} onClose={onClose}>
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>Welcome to Chamber Of Learning</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody>
//             <Text>Thank you for choosing us to enhance your skills! We are excited to help you on your journey.</Text>
//           </ModalBody>
//           <ModalFooter>
//             <Button colorScheme="teal" onClick={onClose}>
//               Close
//             </Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>
//     </Box>
//   )
// }

// "use client"

// import React, { useState, useEffect } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { FaLaptopCode, FaGraduationCap, FaArrowRight, FaTimes } from "react-icons/fa"
// import { Parallax } from "react-parallax"
// import EnhancedCareerGuidance from "../Courses/Courses"
// import AnimatedStat from "../Stat/AnimatedStat"
// // import AnimatedStat from "./AnimatedStat"

// const stats = [
//   {
//     title: "Courses Offered",
//     count: 120,
//     description: "Courses available for enrollment",
//     duration: 2000,
//     color: "text-teal-600",
//   },
//   {
//     title: "Students Enrolled",
//     count: 8500,
//     description: "Students currently enrolled in all courses",
//     duration: 2500,
//     color: "text-purple-600",
//   },
//   {
//     title: "Completed Courses",
//     count: 7000,
//     description: "Courses successfully completed by students",
//     duration: 3000,
//     color: "text-blue-600",
//   },
//   {
//     title: "Active Instructors",
//     count: 50,
//     description: "Instructors teaching on the platform",
//     duration: 1500,
//     color: "text-orange-600",
//   },
// ]

// const CourseCard = ({ name, icon: Icon, description, href }) => {
//   return (
//     <motion.a
//       href={href}
//       className="bg-white p-8 rounded-3xl shadow-xl transition-all duration-300 ease-in-out"
//       whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
//     >
//       <div className="flex flex-col items-start space-y-4">
//         <div className="flex items-center justify-center w-20 h-20 bg-teal-500 rounded-full">
//           <Icon className="text-white w-10 h-10" />
//         </div>
//         <h3 className="text-3xl font-semibold text-gray-800">{name}</h3>
//         <p className="text-gray-500">{description}</p>
//         <button className="text-teal-600 hover:text-teal-700 text-lg flex items-center mt-2">
//           Explore Courses <FaArrowRight className="ml-2" />
//         </button>
//       </div>
//     </motion.a>
//   )
// }

// export default function HomePage() {
//   const [isModalOpen, setIsModalOpen] = useState(false)
//   const [isVideoLoaded, setIsVideoLoaded] = useState(false)

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsModalOpen(true)
//     }, 5000)

//     return () => clearTimeout(timer)
//   }, [])

//   const toggleModal = () => setIsModalOpen(!isModalOpen)

//   return (
//     <div className="bg-gray-50 text-black min-h-screen">
//       <Parallax strength={500}>
//         <div className="min-h-screen relative overflow-hidden">
//           {!isVideoLoaded && (
//             <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
//               <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-teal-500"></div>
//             </div>
//           )}
//           <video
//             className={`absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover transition-opacity duration-1000 ${
//               isVideoLoaded ? "opacity-100" : "opacity-0"
//             }`}
//             src="/assets/HeroVideo1.mp4"
//             autoPlay
//             loop
//             muted
//             playsInline
//             onLoadedData={() => setIsVideoLoaded(true)}
//           />
//           <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-br from-black to-transparent z-10" />
//           <div className="relative container mx-auto px-4 py-20 z-20">
//             <div className="lg:flex items-center justify-between space-y-12 lg:space-y-0">
//               <motion.div
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8 }}
//                 className="space-y-6 text-center lg:text-left lg:w-1/2"
//               >
//                 <h1 className="text-white text-5xl font-extrabold tracking-tight text-shadow-2xl">
//                   Kick Start Your Career!
//                 </h1>
//                 <p className="text-white text-lg lg:text-xl max-w-lg text-shadow-md">
//                   Join our engaging e-learning platform and accelerate your career with cutting-edge courses.
//                 </p>
//                 <motion.a
//                   href="/it-courses"
//                   className="inline-block bg-teal-600 text-white rounded-full py-4 px-10 text-xl hover:bg-teal-700 transition-all duration-300 ease-in-out"
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   Get Started
//                 </motion.a>
//               </motion.div>

//               <div className="relative w-full lg:w-1/2 h-80 lg:h-full flex justify-center items-end">
//                 <motion.img
//                   src="/assets/Mentor.png"
//                   alt="Mentor"
//                   className="absolute top-0 left-0 w-1/2 lg:w-2/5"
//                   initial={{ opacity: 0, x: -50 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.8, delay: 0.2 }}
//                   whileHover={{ scale: 1.05 }}
//                 />
//                 <motion.img
//                   src="/assets/HeroBoy.png"
//                   alt="Hero"
//                   className="absolute top-0 right-0 w-1/2 lg:w-2/5"
//                   initial={{ opacity: 0, x: 50 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.8, delay: 0.4 }}
//                   whileHover={{ scale: 1.05 }}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </Parallax>

//       <section className="py-16 md:py-24">
//         <div className="container mx-auto px-4">
//           <div className="lg:grid lg:grid-cols-2 lg:gap-16">
//             <motion.div
//               className="space-y-6"
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//             >
//               <h2 className="text-teal-900 text-4xl font-bold leading-tight">Find Your Career Path</h2>
//               <p className="text-gray-600 text-xl">
//                 Explore our diverse range of courses and kickstart your career journey. Whether you want to dive into
//                 programming, finance, or data analysis, we have something for everyone!
//               </p>
//               <div className="relative w-full h-72 md:h-96">
//                 <img
//                   src="/assets/FindHero.png"
//                   alt="Find Your Career"
//                   className="absolute top-0 left-0 w-full h-full object-contain opacity-40"
//                 />
//               </div>
//               <motion.a
//                 href="/contact-us"
//                 className="inline-block bg-teal-900 text-white font-semibold py-3 px-10 rounded-full text-lg transition-all duration-300"
//                 whileHover={{
//                   y: -2,
//                   boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
//                 }}
//               >
//                 Get Started Today <FaArrowRight className="inline-block ml-2" />
//               </motion.a>
//             </motion.div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 lg:mt-0">
//               <CourseCard
//                 name="IT Courses"
//                 href="/it-courses"
//                 icon={FaLaptopCode}
//                 description="Explore our technology-focused courses including programming, web development, and more."
//               />
//               <CourseCard
//                 name="Non-IT Courses"
//                 href="/non-it-courses"
//                 icon={FaGraduationCap}
//                 description="Discover our non-technical course offerings in business, design, and other fields."
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       <EnhancedCareerGuidance />

//       <section className="bg-gray-50 py-16">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Course Statistics</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {stats.map((stat, index) => (
//               <motion.div
//                 key={index}
//                 className="bg-white p-8 rounded-lg shadow-lg"
//                 whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//               >
//                 <AnimatedStat
//                   title={stat.title}
//                   count={stat.count}
//                   description={stat.description}
//                   duration={stat.duration}
//                   color={stat.color}
//                 />
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <AnimatePresence>
//         {isModalOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-60"
//           >
//             <motion.div
//               initial={{ scale: 0.9, y: 50 }}
//               animate={{ scale: 1, y: 0 }}
//               exit={{ scale: 0.9, y: 50 }}
//               className="bg-white p-8 rounded-xl shadow-xl max-w-lg mx-4"
//             >
//               <h3 className="text-3xl font-bold mb-4">Welcome to Chamber Of Learning</h3>
//               <p className="text-lg text-gray-600 mb-6">
//                 Thank you for choosing us to enhance your skills! We are excited to help you on your journey.
//               </p>
//               <div className="mt-6 flex justify-end">
//                 <motion.button
//                   className="bg-teal-600 text-white py-3 px-8 rounded-full hover:bg-teal-700 transition-all duration-300"
//                   onClick={toggleModal}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   Close
//                 </motion.button>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <motion.button
//         onClick={toggleModal}
//         className="fixed bottom-5 right-5 bg-teal-600 text-white rounded-full p-5 hover:bg-teal-700 transition-all duration-300 ease-in-out"
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}
//       >
//         <FaTimes className="w-6 h-6" />
//       </motion.button>
//     </div>
//   )
// }

// import React, { useState, useEffect } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import {
//   FaLaptopCode,
//   FaGraduationCap,
//   FaArrowRight,
//   FaTimes,
//   FaUserGraduate,
//   FaCertificate,
//   FaChalkboardTeacher,
// } from "react-icons/fa"
// import { Parallax } from "react-parallax"
// import EnhancedCareerGuidance from "../Courses/Courses"
// import AnimatedStat from "../Stat/AnimatedStat"

// // import TestimonialCarousel from "./TestimonialCarousel"

// const stats = [
//   {
//     title: "Courses Offered",
//     count: 200,
//     description: "Diverse range of courses",
//     duration: 2000,
//     color: "text-teal-600",
//     icon: FaLaptopCode,
//   },
//   {
//     title: "Students Enrolled",
//     count: 15000,
//     description: "Global learner community",
//     duration: 2500,
//     color: "text-purple-600",
//     icon: FaUserGraduate,
//   },
//   {
//     title: "Certifications Awarded",
//     count: 10000,
//     description: "Industry-recognized credentials",
//     duration: 3000,
//     color: "text-blue-600",
//     icon: FaCertificate,
//   },
//   {
//     title: "Expert Instructors",
//     count: 100,
//     description: "Leading industry professionals",
//     duration: 1500,
//     color: "text-orange-600",
//     icon: FaChalkboardTeacher,
//   },
// ]

// const CourseCard = ({ name, icon: Icon, description, href }) => {
//   return (
//     <motion.a
//       href={href}
//       className="bg-white p-8 rounded-3xl shadow-xl transition-all duration-300 ease-in-out flex flex-col h-full"
//       whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
//     >
//       <div className="flex items-center mb-4">
//         <div className="flex items-center justify-center w-16 h-16 bg-teal-500 rounded-full mr-4">
//           <Icon className="text-white w-8 h-8" />
//         </div>
//         <h3 className="text-2xl font-bold text-gray-800">{name}</h3>
//       </div>
//       <p className="text-gray-600 flex-grow">{description}</p>
//       <button className="text-teal-600 hover:text-teal-700 text-lg flex items-center mt-4 font-semibold">
//         Explore Courses <FaArrowRight className="ml-2" />
//       </button>
//     </motion.a>
//   )
// }

// export default function HomePage() {
//   const [isModalOpen, setIsModalOpen] = useState(false)
//   const [isVideoLoaded, setIsVideoLoaded] = useState(false)

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsModalOpen(true)
//     }, 5000)

//     return () => clearTimeout(timer)
//   }, [])

//   const toggleModal = () => setIsModalOpen(!isModalOpen)

//   return (
//     <div className="bg-gray-50 text-gray-900 min-h-screen">
//       <Parallax strength={500}>
//         <div className="min-h-screen relative overflow-hidden">
//           {!isVideoLoaded && (
//             <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
//               <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-teal-500"></div>
//             </div>
//           )}
//           <video
//             className={`absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover transition-opacity duration-1000 ${
//               isVideoLoaded ? "opacity-100" : "opacity-0"
//             }`}
//             src="/assets/HeroVideo1.mp4"
//             autoPlay
//             loop
//             muted
//             playsInline
//             onLoadedData={() => setIsVideoLoaded(true)}
//           />
//           <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-br from-black via-black/70 to-transparent z-10" />
//           <div className="relative container mx-auto px-4 py-20 z-20">
//             <div className="lg:flex items-center justify-between space-y-12 lg:space-y-0">
//               <motion.div
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8 }}
//                 className="space-y-6 text-center lg:text-left lg:w-1/2"
//               >
//                 <h1 className="text-white text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
//                   Empower Your Future with Expert-Led Learning
//                 </h1>
//                 <p className="text-gray-300 text-xl md:text-2xl max-w-2xl">
//                   Unlock your potential with our cutting-edge courses designed by industry leaders. Start your journey
//                   to success today!
//                 </p>
//                 <motion.a
//                   href="/courses"
//                   className="inline-block bg-teal-600 text-white rounded-full py-4 px-8 text-lg font-semibold hover:bg-teal-700 transition-all duration-300 ease-in-out"
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   Explore Courses
//                 </motion.a>
//               </motion.div>

//               <div className="relative w-full lg:w-1/2 h-80 lg:h-full flex justify-center items-end">
//                 <motion.img
//                   src="/assets/Mentor.png"
//                   alt="Expert Mentor"
//                   className="absolute top-0 left-0 w-1/2 lg:w-2/5"
//                   initial={{ opacity: 0, x: -50 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.8, delay: 0.2 }}
//                   whileHover={{ scale: 1.05 }}
//                 />
//                 <motion.img
//                   src="/assets/HeroBoy.png"
//                   alt="Successful Student"
//                   className="absolute top-0 right-0 w-1/2 lg:w-2/5"
//                   initial={{ opacity: 0, x: 50 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.8, delay: 0.4 }}
//                   whileHover={{ scale: 1.05 }}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </Parallax>

//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-4">
//           <motion.div
//             className="text-center mb-16"
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Discover Your Path to Success</h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Whether you're looking to start a new career or advance in your current field, our diverse range of
//               courses has you covered.
//             </p>
//           </motion.div>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <CourseCard
//               name="Technology & IT"
//               href="/courses/technology"
//               icon={FaLaptopCode}
//               description="Master the latest technologies with our comprehensive IT courses. From web development to cybersecurity, we've got you covered."
//             />
//             <CourseCard
//               name="Business & Management"
//               href="/courses/business"
//               icon={FaGraduationCap}
//               description="Develop essential business skills and learn from industry experts. Our courses cover everything from leadership to financial management."
//             />
//           </div>
//         </div>
//       </section>

//       <EnhancedCareerGuidance />

//       <section className="bg-gray-100 py-20">
//         <div className="container mx-auto px-4">
//           <motion.div
//             className="text-center mb-16"
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Impact in Numbers</h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Join thousands of learners who have transformed their careers through our platform.
//             </p>
//           </motion.div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {stats.map((stat, index) => (
//               <motion.div
//                 key={index}
//                 className="bg-white p-8 rounded-lg shadow-lg"
//                 whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//               >
//                 <AnimatedStat
//                   title={stat.title}
//                   count={stat.count}
//                   description={stat.description}
//                   duration={stat.duration}
//                   color={stat.color}
//                   icon={stat.icon}
//                 />
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="py-20 bg-teal-900 text-white">
//         <div className="container mx-auto px-4">
//           <motion.div
//             className="text-center mb-16"
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Students Say</h2>
//             <p className="text-xl text-teal-100 max-w-3xl mx-auto">
//               Hear from our community of learners about their transformative experiences.
//             </p>
//           </motion.div>
//           {/* <TestimonialCarousel /> */}
//         </div>
//       </section>

//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-4 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Ready to Transform Your Career?</h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
//               Join thousands of students who have already taken the first step towards their dream career. Start your
//               learning journey today!
//             </p>
//             <motion.a
//               href="/signup"
//               className="inline-block bg-teal-600 text-white rounded-full py-4 px-8 text-lg font-semibold hover:bg-teal-700 transition-all duration-300"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Get Started Now
//             </motion.a>
//           </motion.div>
//         </div>
//       </section>

//       <AnimatePresence>
//         {isModalOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-60"
//           >
//             <motion.div
//               initial={{ scale: 0.9, y: 50 }}
//               animate={{ scale: 1, y: 0 }}
//               exit={{ scale: 0.9, y: 50 }}
//               className="bg-white p-8 rounded-xl shadow-xl max-w-lg mx-4"
//             >
//               <h3 className="text-3xl font-bold mb-4">Welcome to Our Learning Platform</h3>
//               <p className="text-lg text-gray-600 mb-6">
//                 We're excited to help you achieve your career goals! Explore our courses and start your learning journey
//                 today.
//               </p>
//               <div className="mt-6 flex justify-end">
//                 <motion.button
//                   className="bg-teal-600 text-white py-3 px-8 rounded-full hover:bg-teal-700 transition-all duration-300"
//                   onClick={toggleModal}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   Start Exploring
//                 </motion.button>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <motion.button
//         onClick={toggleModal}
//         className="fixed bottom-5 right-5 bg-teal-600 text-white rounded-full p-4 hover:bg-teal-700 transition-all duration-300 ease-in-out shadow-lg"
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}
//       >
//         <FaTimes className="w-6 h-6" />
//       </motion.button>
//     </div>
//   )
// }

// import React from "react";
// import {
//   Box,
//   Container,
//   VStack,
//   Heading,
//   Text,
//   Button,
//   useDisclosure,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalFooter,
//   ModalBody,
//   ModalCloseButton,
//   useBreakpointValue,
//   useColorModeValue,
//   SimpleGrid,
//   Flex,
//   Image,
//   Icon,
//   Stack,
// } from "@chakra-ui/react";
// import { motion } from "framer-motion";
// import { FaLaptopCode, FaGraduationCap, FaArrowRight } from "react-icons/fa";
// import { Parallax } from "react-parallax";
// // import EnhancedCareerGuidance from "../Courses/Courses";
// import Hero from "../assets/HeroBoy.png";
// import Mentor from "../assets/Mentor.png";
// import FindHero from "../assets/FindHero.png";
// import bgImage from "../assets/HeroVideo1.mp4";
// import AnimatedStat from "../Stat/AnimatedStat";
// import {LazyLoadImage } from "react-lazy-load-image-component";
// // import Hero from "../assets/HeroBoy.png"
// // import Mentor from "../assets/Mentor.png"
// // import FindHero from "../assets/FindHero.png"
// // import AnimatedStat from "../Stat/AnimatedStat"
// // import bgVideo from "../assets/HeroVideo1.mp4"
// const MotionBox = motion(Box);

// const stats = [
//   {
//     title: "Courses Offered",
//     count: 120,
//     description: "Courses available for enrollment",
//     duration: 2000,
//     color: "teal.600",
//   },
//   {
//     title: "Students Enrolled",
//     count: 8500,
//     description: "Students currently enrolled in all courses",
//     duration: 2500,
//     color: "purple.600",
//   },
//   {
//     title: "Completed Courses",
//     count: 7000,
//     description: "Courses successfully completed by students",
//     duration: 3000,
//     color: "blue.600",
//   },
//   {
//     title: "Active Instructors",
//     count: 50,
//     description: "Instructors teaching on the platform",
//     duration: 1500,
//     color: "orange.600",
//   },
// ];

// const CourseCard = ({ name, icon, description, href }) => {
//   const bgColor = useColorModeValue("white", "gray.800");
//   const textColor = useColorModeValue("gray.800", "white");
//   const accentColor = useColorModeValue("teal.900", "teal.900");

//   return (
//     <MotionBox
//       as="a"
//       href={href}
//       bg={bgColor}
//       p={6}
//       borderRadius="xl"
//       boxShadow="xl"
//       transition="all 0.3s"
//       _hover={{
//         transform: "translateY(-5px)",
//         boxShadow: "2xl",
//       }}
//       whileHover={{ scale: 1.03 }}
//     >
//       <VStack spacing={4} align="start">
//         <Flex
//           align="center"
//           justify="center"
//           w={16}
//           h={16}
//           bg={accentColor}
//           borderRadius="full"
//         >
//           <Icon as={icon} w={8} h={8} color="white" />
//         </Flex>
//         <Heading as="h3" fontSize="2xl" fontWeight="bold" color={textColor}>
//           {name}
//         </Heading>
//         <Text color={useColorModeValue("gray.600", "gray.300")}>
//           {description}
//         </Text>
//         <Button
//           rightIcon={<FaArrowRight />}
//           colorScheme="orange"
//           variant="link"
//           size="sm"
//         >
//           Explore Courses
//         </Button>
//       </VStack>
//     </MotionBox>
//   );
// };

// export default function HomePage() {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const headingSize = useBreakpointValue({ base: "2xl", md: "3xl", lg: "4xl" });
//   const textSize = useBreakpointValue({ base: "md", md: "lg", lg: "xl" });
//   const buttonSize = useBreakpointValue({ base: "sm", md: "md", lg: "lg" });
//   const containerPadding = useBreakpointValue({ base: 4, md: 8, lg: 12 });

//   const bgColor = useColorModeValue("gray.50", "gray.900");
//   const textColor = useColorModeValue("black", "white");
//   const bgGradient = useColorModeValue(
//     "linear(to-br, rgba(0,0,0,0.5), rgba(255,255,255,0.2))",
//     "linear(to-br, rgba(255,255,255,0.2), rgba(0,0,0,0.8))"
//   );

//   return (
//     <Box bg={bgColor} color={textColor} minHeight="100vh">
//       <Parallax bgImage={bgImage} bgImageStyle={{ objectFit: "cover", width: "100%", height: "100%" }} strength={500}>
//         <Box minHeight={{ base: "100vh", md: "80vh" }} position="relative" overflow="hidden">
//         <Box
//             as="video"
//             position="absolute"
//             top="0"
//             left="0"
//             right="0"
//             bottom="0"
//             width="100%"
//             height="100%"
//             objectFit="cover"
//             src={bgImage}
//             autoPlay
//             loop
//             muted
//             playsInline
//           />

//             <Container maxW="container.xl" p={containerPadding} position="relative" zIndex="2">

//             <Stack
//               direction={{ base: "column", lg: "row" }}
//               align="center"
//               justify="space-between"
//               minHeight="inherit"
//               pt={{ base: 20, md: 20 }}
//               spacing={{ base: 12, lg: 0 }}
//             >
//               <VStack
//                 spacing={6}
//                 textAlign={{ base: "center", lg: "left" }}
//                 align={{ base: "center", lg: "flex-start" }}
//                 maxW={{ base: "100%", lg: "50%" }}
//               >
//                 <Heading
//                   as="h1"
//                   fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
//                   fontWeight="bold"
//                   color="white"
//                   textShadow="2px 2px 8px rgba(0,0,0,0.7)"
//                 >
//                   Kick Start Your Career!
//                 </Heading>
//                 <Text
//                   fontSize={{ base: "md", md: "lg", lg: "xl" }}
//                   maxW="600px"
//                   color="white"
//                   textShadow="1px 1px 4px rgba(0,0,0,0.6)"
//                 >
//                   Join our engaging e-learning platform.
//                 </Text>
//                 <Button
//                   as="a"
//                   href="/it-courses"
//                   backgroundColor="teal.900"
//                   color="white"
//                   borderRadius="full"
//                   size={{ base: "md", lg: "lg" }}
//                   px={8}
//                   _hover={{
//                     backgroundColor: "teal.800",
//                     transform: "translateY(-2px)",
//                   }}
//                   transition="all 0.3s"
//                 >
//                   Get Started
//                 </Button>
//               </VStack>

//               <Flex
//                 position="relative"
//                 width={{ base: "100%", lg: "50%" }}
//                 height={{ base: "300px", md: "400px", lg: "100%" }}
//                 justify="center"
//                 align="bottom"
//               >
//                 <Image
//                   src={Mentor}
//                   alt="Mentor"
//                   position="absolute"
//                   top={{ base: "0", lg: "10%" }}
//                   left={{ base: "0", lg: "0" }}
//                   width={{ base: "50%", sm: "40%", md: "30%", lg: "45%" }}
//                   height="auto"
//                   objectFit="contain"
//                   borderRadius="lg"

//                   zIndex="2"
//                   transition="transform 0.3s ease-in-out"
//                   _hover={{ transform: "scale(1.05)" }}
//                 />
//                 <Image
//                   src={Hero}
//                   alt="Hero"
//                   position="absolute"
//                   right={{ base: "0", lg: "0" }}
//                   width={{ base: "50%", sm: "40%", md: "30%", lg: "45%" }}
//                   top={{ base: "0", lg: "10%" }}
//                   height="auto"
//                   objectFit="contain"
//                   borderRadius="lg"

//                   zIndex="2"
//                   transition="transform 0.3s ease-in-out"
//                   _hover={{ transform: "scale(1.05)" }}
//                 />
//               </Flex>
//             </Stack>
//           </Container>
//         </Box>
//       </Parallax>

//       <Box as="section" py={{ base: 8, md: 10 }} m-0>
//         <Container maxW="container.xl" m-0 >
//           <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 12, lg: 16 }} alignItems="start">
//             <VStack align="start" spacing={6}>
//             <Image src={FindHero}
//             position="absolute"
//             alt="FindHero"
//             layout="fill"
//             objectFit="contain"
//              opacity={0.1}
//              w={["200px","250px", "300px", "350px"]}  // Small, Medium, Large screens
//              h={[ "180px", "200px","240px","300px"]}
//              />

//               <Heading as="h2" fontSize={{ base: "3xl", md: "4xl" }} fontWeight="bold" color="black">
//                 Find Your Career Path
//               </Heading>
//               <Text fontSize={{ base: "lg", md: "xl" }} color="gray.600">
//                 Explore our diverse range of courses and kickstart your career
//                 journey. Whether you want to dive into programming, finance, or
//                 data analysis, we have something for everyone!
//               </Text>
//               <Button
//                 as="a"
//                 href="/contact-us"
//                 size={{ base: "md", md: "lg" }}
//                 colorScheme="teal"
//                 fontWeight="semibold"
//                 px={8}
//                bgColor={"teal.900"}
//                 rounded="full"
//                 _hover={{ transform: "translateY(-2px)", boxShadow: "lg", backgroundColor: "teal.800" }}
//                 transition="all 0.3s"
//                 rightIcon={<FaArrowRight />}
//               >
//                 Get Started Today
//               </Button>
//               {/* <Box width="100%" height={{ base: "200px", md: "300px" }}>
//               </Box>  */}

//             </VStack>

//             <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
//               <CourseCard
//                 name="IT Courses"
//                 href="/it-courses"
//                 icon={FaLaptopCode}
//                 description="Explore our technology-focused courses including programming, web development, and more."
//               />
//               <CourseCard
//                 name="Non-IT Courses"
//                 href="/Non_it-courses"
//                 icon={FaGraduationCap}
//                 description="Discover our non-technical course offerings in business, design, and other fields."
//               />
//             </SimpleGrid>
//           </SimpleGrid>
//         </Container>
//       </Box>
// {/*
//       <EnhancedCareerGuidance /> */}

//       <Box bg="gray.50"  className="pt-0 pb-5">
//         <Container maxW="container.xl">
//           <Heading as="h2" fontSize={{ base: "3xl", md: "4xl" }} textAlign="center"  mb={5}>
//             Course Statistics
//           </Heading>
//           <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
//             {stats.map((stat, index) => (
//               <Box
//                 key={index}
//                 bg="white"
//                 p={4}
//                 borderRadius="lg"
//                 boxShadow="lg"
//                 _hover={{
//                   transform: "translateY(-5px)",
//                   boxShadow: "xl",
//                 }}
//                 transition="all 0.3s"
//               >
//                 <AnimatedStat
//                   title={stat.title}
//                   count={stat.count}
//                   description={stat.description}
//                   duration={stat.duration}
//                   color={stat.color}
//                 />
//               </Box>
//             ))}
//           </SimpleGrid>
//         </Container>
//       </Box>

//       <Modal isOpen={isOpen} onClose={onClose}>
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>Welcome to Chamber Of Learning</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody>
//             <Text>
//               Thank you for choosing us to enhance your skills! We are excited
//               to help you on your journey.
//             </Text>
//           </ModalBody>
//           <ModalFooter>
//             <Button colorScheme="teal" onClick={onClose}>
//               Close
//             </Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>
//     </Box>
//   );
// }

// import React from "react";
// import {
//   Box,
//   Container,
//   VStack,
//   Heading,
//   Text,
//   Button,
//   useDisclosure,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalFooter,
//   ModalBody,
//   ModalCloseButton,
//   useBreakpointValue,
//   useColorModeValue,
//   SimpleGrid,
//   Flex,
//   Image,
//   Icon,
//   Stack,
// } from "@chakra-ui/react";
// import { motion } from "framer-motion";
// import { FaLaptopCode, FaGraduationCap, FaArrowRight } from "react-icons/fa";
// import { Parallax } from "react-parallax";
// import EnhancedCareerGuidance from "../Courses/Courses";
// import Hero from "../assets/HeroBoy.png";
// import Mentor from "../assets/Mentor.png";
// import FindHero from "../assets/FindHero.png";
// import bgImage from "../assets/HeroVideo1.mp4";
// import AnimatedStat from "../Stat/AnimatedStat";
// import { BarChart, Target, ArrowLeftRight, Laptop, ChevronRight } from 'lucide-react';
// import CareerHero from '../assets/CareerHero.png';
// import { LazyLoadImage } from "react-lazy-load-image-component";

// const MotionBox = motion(Box);

// const stats = [
//   {
//     title: "Courses Offered",
//     count: 120,
//     description: "Courses available for enrollment",
//     duration: 2000,
//     color: "teal.600",
//   },
//   {
//     title: "Students Enrolled",
//     count: 8500,
//     description: "Students currently enrolled in all courses",
//     duration: 2500,
//     color: "purple.600",
//   },
//   {
//     title: "Completed Courses",
//     count: 7000,
//     description: "Courses successfully completed by students",
//     duration: 3000,
//     color: "blue.600",
//   },
//   {
//     title: "Active Instructors",
//     count: 50,
//     description: "Instructors teaching on the platform",
//     duration: 1500,
//     color: "orange.600",
//   },
// ];

// const CourseCard = ({ name, icon, description, href }) => {
//   const bgColor = useColorModeValue("white", "gray.800");
//   const textColor = useColorModeValue("gray.800", "white");
//   const accentColor = useColorModeValue("teal.900", "teal.900");

//   return (
//     <MotionBox
//       as="a"
//       href={href}
//       bg={bgColor}
//       p={6}
//       borderRadius="xl"
//       boxShadow="xl"
//       transition="all 0.3s"
//       _hover={{
//         transform: "translateY(-5px)",
//         boxShadow: "2xl",
//       }}
//       whileHover={{ scale: 1.03 }}
//     >
//       <VStack spacing={4} align="start">
//         <Flex
//           align="center"
//           justify="center"
//           w={16}
//           h={16}
//           bg={accentColor}
//           borderRadius="full"
//         >
//           <Icon as={icon} w={8} h={8} color="white" />
//         </Flex>
//         <Heading as="h3" fontSize="2xl" fontWeight="bold" color={textColor}>
//           {name}
//         </Heading>
//         <Text color={useColorModeValue("gray.600", "gray.300")}>
//           {description}
//         </Text>
//         <Button
//           rightIcon={<FaArrowRight />}
//           colorScheme="orange"
//           variant="link"
//           size="sm"
//         >
//           Explore Courses
//         </Button>
//       </VStack>
//     </MotionBox>
//   );
// };

// export default function Homepage() {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const headingSize = useBreakpointValue({ base: "2xl", md: "3xl", lg: "4xl" });
//   const textSize = useBreakpointValue({ base: "md", md: "lg", lg: "xl" });
//   const buttonSize = useBreakpointValue({ base: "sm", md: "md", lg: "lg" });
//   const containerPadding = useBreakpointValue({ base: 4, md: 8, lg: 12 });

//   const bgColor = useColorModeValue("gray.50", "gray.900");
//   const textColor = useColorModeValue("black", "white");
//   const bgGradient = useColorModeValue(
//     "linear(to-br, rgba(0,0,0,0.5), rgba(255,255,255,0.2))",
//     "linear(to-br, rgba(255,255,255,0.2), rgba(0,0,0,0.8))"
//   );

//   return (
//     <Box bg={bgColor} color={textColor} minHeight="100vh">
//       <Parallax
//         bgImage={bgImage}
//         bgImageStyle={{ objectFit: "cover", width: "100%", height: "100%" }}
//         strength={500}
//       >
//         <Box
//           minHeight={{ base: "50vh", md: "50vh", lg: "70vh" }}
//           position="relative"
//           overflow="hidden"
//         >
//           <Box
//             as="video"
//             position="absolute"
//             top="0"
//             left="0"
//             right="0"
//             bottom="0"
//             width="100%"
//             height="100%"
//             objectFit="cover"
//             src={bgImage}
//             autoPlay
//             loop
//             muted
//             playsInline
//           />

//           <Container
//             maxW="container.xl"
//             p={containerPadding}
//             position="relative"
//             zIndex="2"
//           >
//             <Stack
//               direction={{ base: "column", lg: "row" }}
//               align="center"
//               justify="space-between"
//               minHeight="inherit"
//               pt={{ base: 20, md: 20 }}
//               spacing={{ base: 12, lg: 0 }}
//             >
//               <VStack
//                 spacing={6}
//                 textAlign={{ base: "center", lg: "left" }}
//                 align={{ base: "center", lg: "flex-start" }}
//                 maxW={{ base: "100%", lg: "50%" }}
//               >
//                 <Heading
//                   as="h1"
//                   fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
//                   fontWeight="bold"
//                   color="white"
//                   textShadow="2px 2px 8px rgba(0,0,0,0.7)"
//                 >
//                   Kick Start Your Career!
//                 </Heading>
//                 <Text
//                   fontSize={{ base: "md", md: "lg", lg: "xl" }}
//                   maxW="600px"
//                   color="white"
//                   textShadow="1px 1px 4px rgba(0,0,0,0.6)"
//                 >
//                   Join our engaging e-learning platform.
//                 </Text>
//                 <Button
//                   as="a"
//                   href="/it-courses"
//                   backgroundColor="orange.600"
//                   color="white"
//                   borderRadius="full"
//                   size={{ base: "md", lg: "lg" }}
//                   px={8}
//                   _hover={{
//                     backgroundColor: "teal.800",
//                     transform: "translateY(-2px)",
//                   }}
//                   transition="all 0.3s"
//                 >
//                   Get Started
//                 </Button>
//               </VStack>

//               <Flex
//                 position="relative"
//                 top={{ base: 0, lg: -150 }}
//                 width={{ base: "100%", lg: "50%" }}
//                 height={{ base: "300px", md: "400px", lg: "100%" }}
//                 justify="center"
//                 align="bottom"
//               >
//                 <Image
//                   src={Mentor}
//                   alt="Mentor"
//                   position="absolute"
//                   top={{ base: "0", lg: "10%" }}
//                   left={{ base: "0", lg: "0" }}
//                   width={{ base: "50%", sm: "40%", md: "30%", lg: "45%" }}
//                   height="auto"
//                   objectFit="contain"
//                   borderRadius="lg"
//                   zIndex="2"
//                   transition="transform 0.3s ease-in-out"
//                   _hover={{ transform: "scale(1.05)" }}
//                 />
//                 <Image
//                   src={Hero}
//                   alt="Hero"
//                   position="absolute"
//                   right={{ base: "0", lg: "0" }}
//                   width={{ base: "50%", sm: "40%", md: "30%", lg: "45%" }}
//                   top={{ base: "0", lg: "10%" }}
//                   height="auto"
//                   objectFit="contain"
//                   borderRadius="lg"
//                   zIndex="2"
//                   transition="transform 0.3s ease-in-out"
//                   _hover={{ transform: "scale(1.05)" }}
//                 />
//               </Flex>
//             </Stack>
//           </Container>
//         </Box>
//       </Parallax>

//       <Box as="section" py={{ base: 8, md: 10 }} m-0>
//         <Container maxW="container.xl" m-0>
//           <SimpleGrid
//             columns={{ base: 1, lg: 2 }}
//             spacing={{ base: 12, lg: 16 }}
//             alignItems="start"
//           >
//             <VStack align="start" spacing={6}>
//               <Image
//                 src={FindHero}
//                 position="absolute"
//                 alt="FindHero"
//                 layout="fill"
//                 objectFit="contain"
//                 opacity={0.1}
//                 w={["200px", "250px", "300px", "350px"]} // Small, Medium, Large screens
//                 h={["180px", "200px", "240px", "300px"]}
//               />

//               <Heading
//                 as="h2"
//                 fontSize={{ base: "3xl", md: "4xl" }}
//                 fontWeight="bold"
//                 color="black"
//               >
//                 Find Your Career Path
//               </Heading>
//               <Text fontSize={{ base: "lg", md: "xl" }} color="gray.600">
//                 Explore our diverse range of courses and kickstart your career
//                 journey. Whether you want to dive into programming, finance, or
//                 data analysis, we have something for everyone!
//               </Text>
//               <Button
//                 as="a"
//                 href="/contact-us"
//                 size={{ base: "md", md: "lg" }}
//                 colorScheme="teal"
//                 fontWeight="semibold"
//                 px={8}
//                 bgColor={"teal.900"}
//                 rounded="full"
//                 _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
//                 transition="all 0.3s"
//                 rightIcon={<FaArrowRight />}
//               >
//                 Get Started Today
//               </Button>
//               {/* <Box width="100%" height={{ base: "200px", md: "300px" }}>
//               </Box>  */}
//             </VStack>

//             <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
//               <CourseCard
//                 name="IT Courses"
//                 href="/it-courses"
//                 icon={FaLaptopCode}
//                 description="Explore our technology-focused courses including programming, web development, and more."
//               />

//               <CourseCard
//                 name="Non-IT Courses"
//                 href="/Non_it-courses"
//                 icon={FaGraduationCap}
//                 description="Discover our non-technical course offerings in business, design, and other fields."
//               />
//               <Box
//                 bg="orange.500"
//                 zIndex={1}
//                 display="flex"
//                 alignItems="center"
//                 justifyContent="left"
//                 height="100%"
//                 width="100%"
//                 borderTopLeftRadius="80"
//                 borderBottomRightRadius="80"
//               ></Box>

//               <CourseCard
//                 name="Non-IT Courses"
//                 href="/Non_it-courses"
//                 icon={FaGraduationCap}
//                 description="Discover our non-technical course offerings in business, design, and other fields."
//               />
//             </SimpleGrid>
//           </SimpleGrid>
//         </Container>
//       </Box>

//       {/* <EnhancedCareerGuidance /> */}

//       <div className="max-h-screen p-0 sm:p-1 md:p-2 m-0" >
//       <div className="max-w-6xl mx-auto">
//         <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-8 text-center">Career Path Guidance</h1>

//         <div className="flex flex-col lg:flex-row gap-8 mb-12">
//           <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
//             <div
//               icon={<BarChart className="w-6 h-6 sm:w-8 sm:h-8" />}
//               title="IT Employed"
//               description="Advance your skills to close talent gaps and switch careers."
//             />
//             <div
//               icon={<Target className="w-6 h-6 sm:w-8 sm:h-8" />}
//               title="Fresh Graduates"
//               description="Get your hands-on in real-time projects and start your IT career."
//             />
//             <div
//               icon={<ArrowLeftRight className="w-6 h-6 sm:w-8 sm:h-8" />}
//               title="Return from Work Break"
//               description="Re-skill yourself to stay ahead of competitions and in trend."
//             />
//             <div
//               icon={<Laptop className="w-6 h-6 sm:w-8 sm:h-8" />}
//               title="Non IT to IT"
//               description="Learn, Get Certified with new demanding skills and Switch."
//             />
//           </div>

//           <div className="flex-1 relative overflow-hidden rounded-lg shadow-lg">
//             <img 
//               className="absolute inset-0 w-full h-full object-cover object-center"
//               src={CareerHero} 
//               alt="Career Hero Background" 
//             />
//             <div className="relative z-10 p-6 sm:p-8 md:p-10 bg-white bg-opacity-90">
//               <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-4 sm:mb-6">
//                 How it helps?
//               </h2>
//               <div className="space-y-4 text-sm sm:text-base">
//                 <p className="leading-relaxed">
//                   Early in your career, it is essential to chase skills rather than salary. At Chamber Of Learning, we provide practical experiences through visualized learning, hands-on projects, fostering a growth mindset, and nurturing problem-solving skills.
//                 </p>
//                 <p className="leading-relaxed">
//                   Later in your career, Chamber Of Learning helps you align your passions with your work. We empower you with vertical and horizontal skills to stay ahead in knowledge and finances. We work with you to grow your brand and network for ongoing success.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div className="bg-white rounded-ss-3xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl group">
//       <div className="p-4 sm:p-6">
//         <div className="flex items-center mb-3 sm:mb-4">
//           <div className="p-2 sm:p-3 rounded-full bg-gray-200 text-gray-700 mr-3 sm:mr-4 transition-colors duration-300">
//             {icon}
//           </div>
//           <h3 className="text-lg sm:text-xl font-semibold group-hover:text-teal-600 transition-colors duration-300">{title}</h3>
//         </div>
//         <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 transition-colors duration-300">{description}</p>
//         <div className="flex items-center text-orange-600 group-hover:translate-x-2 transition-all duration-300">
//           <span className="text-sm sm:text-base mr-2 font-medium">Learn More</span>
//           <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
//         </div>
//       </div>
//       <div className="h-1 w-full bg-teal-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left"></div>
//     </div>

//       <Box bg="gray.50" className="pt-0 pb-5">
//         <Container maxW="container.xl">
//           <Heading
//             as="h2"
//             fontSize={{ base: "3xl", md: "4xl" }}
//             textAlign="center"
//             mb={5}
//           >
//             Course Statistics
//           </Heading>
//           <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
//             {stats.map((stat, index) => (
//               <Box
//                 key={index}
//                 bg="white"
//                 p={4}
//                 borderRadius="lg"
//                 boxShadow="lg"
//                 _hover={{
//                   transform: "translateY(-5px)",
//                   boxShadow: "xl",
//                 }}
//                 transition="all 0.3s"
//               >
//                 <AnimatedStat
//                   title={stat.title}
//                   count={stat.count}
//                   description={stat.description}
//                   duration={stat.duration}
//                   color={stat.color}
//                 />
//               </Box>
//             ))}
//           </SimpleGrid>
//         </Container>
//       </Box>

//       <Modal isOpen={isOpen} onClose={onClose}>
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>Welcome to Chamber Of Learning</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody>
//             <Text>
//               Thank you for choosing us to enhance your skills! We are excited
//               to help you on your journey.
//             </Text>
//           </ModalBody>
//           <ModalFooter>
//             <Button colorScheme="teal" onClick={onClose}>
//               Close
//             </Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>
//     </Box>
//   );
// }




// import React from "react";
// import {
//   Box,
//   Container,
//   VStack,
//   Heading,
//   Text,
//   Button,
//   useDisclosure,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalFooter,
//   ModalBody,
//   ModalCloseButton,
//   useBreakpointValue,
//   useColorModeValue,
//   SimpleGrid,
//   Flex,
//   Image,
//   Icon,
//   Stack,
// } from "@chakra-ui/react";
// import { motion } from "framer-motion";
// import { FaLaptopCode, FaGraduationCap, FaArrowRight } from "react-icons/fa";
// import { Parallax } from "react-parallax";

// import Hero from "../assets/HeroBoy.png";
// import Mentor from "../assets/Mentor.png";
// import FindHero from "../assets/FindHero.png";
// import bgImage from "../assets/HeroVideo1.mp4";
// import AnimatedStat from "../Stat/AnimatedStat";
// import { BarChart, Target, ArrowLeftRight, Laptop, ChevronRight } from 'lucide-react';
// import CareerHero from '../assets/CareerHero.png';
// import { LazyLoadImage } from "react-lazy-load-image-component";

// const MotionBox = motion(Box);

// const stats = [
//   {
//     title: "Courses Offered",
//     count: 120,
//     description: "Courses available for enrollment",
//     duration: 2000,
//     color: "teal.600",
//   },
//   {
//     title: "Students Enrolled",
//     count: 8500,
//     description: "Students currently enrolled in all courses",
//     duration: 2500,
//     color: "purple.600",
//   },
//   {
//     title: "Completed Courses",
//     count: 7000,
//     description: "Courses successfully completed by students",
//     duration: 3000,
//     color: "blue.600",
//   },
//   {
//     title: "Active Instructors",
//     count: 50,
//     description: "Instructors teaching on the platform",
//     duration: 1500,
//     color: "orange.600",
//   },
// ];

// const CourseCard = ({ name, icon, description, href }) => {
//   const bgColor = useColorModeValue("white", "gray.800");
//   const textColor = useColorModeValue("gray.800", "white");
//   const accentColor = useColorModeValue("teal.900", "teal.900");

//   return (
//     <MotionBox
//       as="a"
//       href={href}
//       bg={bgColor}
//       p={6}
//       borderRadius="xl"
//       boxShadow="xl"
//       transition="all 0.3s"
//       _hover={{
//         transform: "translateY(-5px)",
//         boxShadow: "2xl",
//       }}
//       whileHover={{ scale: 1.03 }}
//     >
//       <VStack spacing={4} align="start">
//         <Flex
//           align="center"
//           justify="center"
//           w={16}
//           h={16}
//           bg={accentColor}
//           borderRadius="full"
//         >
//           <Icon as={icon} w={8} h={8} color="white" />
//         </Flex>
//         <Heading as="h3" fontSize="2xl" fontWeight="bold" color={textColor}>
//           {name}
//         </Heading>
//         <Text color={useColorModeValue("gray.600", "gray.300")}>
//           {description}
//         </Text>
//         <Button
//           rightIcon={<FaArrowRight />}
//           colorScheme="orange"
//           variant="link"
//           size="sm"
//         >
//           Explore Courses
//         </Button>
//       </VStack>
//     </MotionBox>
//   );
// };

// const CareerPathCard = ({ icon, title, description }) => {
//   return (
//     <div className="bg-white rounded-ss-3xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl group">
//       <div className="p-4 sm:p-6">
//         <div className="flex items-center mb-3 sm:mb-4">
//           <div className="p-2 sm:p-3 rounded-full bg-gray-200 text-gray-700 mr-3 sm:mr-4 transition-colors duration-300">
//             {icon}
//           </div>
//           <h3 className="text-lg sm:text-xl font-semibold group-hover:text-teal-600 transition-colors duration-300">{title}</h3>
//         </div>
//         <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 transition-colors duration-300">{description}</p>
//         <div className="flex items-center text-orange-600 group-hover:translate-x-2 transition-all duration-300">
//           <span className="text-sm sm:text-base mr-2 font-medium">Learn More</span>
//           <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
//         </div>
//       </div>
//       <div className="h-1 w-full bg-teal-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left"></div>
//     </div>
//   );
// };

// export default function Homepage() {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const headingSize = useBreakpointValue({ base: "2xl", md: "3xl", lg: "4xl" });
//   const textSize = useBreakpointValue({ base: "md", md: "lg", lg: "xl" });
//   const buttonSize = useBreakpointValue({ base: "sm", md: "md", lg: "lg" });
//   const containerPadding = useBreakpointValue({ base: 4, md: 8, lg: 12 });

//   const bgColor = useColorModeValue("gray.50", "gray.900");
//   const textColor = useColorModeValue("black", "white");
//   const bgGradient = useColorModeValue(
//     "linear(to-br, rgba(0,0,0,0.5), rgba(255,255,255,0.2))",
//     "linear(to-br, rgba(255,255,255,0.2), rgba(0,0,0,0.8))"
//   );

//   return (
//     <Box bg={bgColor} color={textColor} minHeight="100vh">
//       <Parallax
//         bgImage={bgImage}
//         bgImageStyle={{ objectFit: "cover", width: "100%", height: "100%" }}
//         strength={500}
//       >
//         <Box
//           minHeight={{ base: "50vh", md: "50vh", lg: "70vh" }}
//           position="relative"
//           overflow="hidden"
//         >
//           <Box
//             as="video"
//             position="absolute"
//             top="0"
//             left="0"
//             right="0"
//             bottom="0"
//             width="100%"
//             height="100%"
//             objectFit="cover"
//             src={bgImage}
//             autoPlay
//             loop
//             muted
//             playsInline
//           />

//           <Container
//             maxW="container.xl"
//             p={containerPadding}
//             position="relative"
//             zIndex="2"
//           >
//             <Stack
//               direction={{ base: "column", lg: "row" }}
//               align="center"
//               justify="space-between"
//               minHeight="inherit"
//               pt={{ base: 20, md: 20 }}
//               spacing={{ base: 12, lg: 0 }}
//             >
//               <VStack
//                 spacing={6}
//                 textAlign={{ base: "center", lg: "left" }}
//                 align={{ base: "center", lg: "flex-start" }}
//                 maxW={{ base: "100%", lg: "50%" }}
//               >
//                 <Heading
//                   as="h1"
//                   fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
//                   fontWeight="bold"
//                   color="white"
//                   textShadow="2px 2px 8px rgba(0,0,0,0.7)"
//                 >
//                   Kick Start Your Career!
//                 </Heading>
//                 <Text
//                   fontSize={{ base: "md", md: "lg", lg: "xl" }}
//                   maxW="600px"
//                   color="white"
//                   textShadow="1px 1px 4px rgba(0,0,0,0.6)"
//                 >
//                   Join our engaging e-learning platform.
//                 </Text>
//                 <Button
//                   as="a"
//                   href="/it-courses"
//                   backgroundColor="orange.600"
//                   color="white"
//                   borderRadius="full"
//                   size={{ base: "md", lg: "lg" }}
//                   px={8}
//                   _hover={{
//                     backgroundColor: "teal.800",
//                     transform: "translateY(-2px)",
//                   }}
//                   transition="all 0.3s"
//                 >
//                   Get Started
//                 </Button>
//               </VStack>

//               <Flex
//                 position="relative"
//                 top={{ base: 0, lg: -150 }}
//                 width={{ base: "100%", lg: "50%" }}
//                 height={{ base: "300px", md: "400px", lg: "100%" }}
//                 justify="center"
//                 align="bottom"
//               >
//                 <Image
//                   src={Mentor}
//                   alt="Mentor"
//                   position="absolute"
//                   top={{ base: "0", lg: "10%" }}
//                   left={{ base: "0", lg: "0" }}
//                   width={{ base: "50%", sm: "40%", md: "30%", lg: "45%" }}
//                   height="auto"
//                   objectFit="contain"
//                   borderRadius="lg"
//                   zIndex="2"
//                   transition="transform 0.3s ease-in-out"
//                   _hover={{ transform: "scale(1.05)" }}
//                 />
//                 <Image
//                   src={Hero}
//                   alt="Hero"
//                   position="absolute"
//                   right={{ base: "0", lg: "0" }}
//                   width={{ base: "50%", sm: "40%", md: "30%", lg: "45%" }}
//                   top={{ base: "0", lg: "10%" }}
//                   height="auto"
//                   objectFit="contain"
//                   borderRadius="lg"
//                   zIndex="2"
//                   transition="transform 0.3s ease-in-out"
//                   _hover={{ transform: "scale(1.05)" }}
//                 />
//               </Flex>
//             </Stack>
//           </Container>
//         </Box>
//       </Parallax>

//       <Box as="section" py={{ base: 8, md: 10 }} m-0>
//         <Container maxW="container.xl" m-0>
//           <SimpleGrid
//             columns={{ base: 1, lg: 2 }}
//             spacing={{ base: 12, lg: 16 }}
//             alignItems="start"
//           >
//             <VStack align="start" spacing={6}>
//               <Image
//                 src={FindHero}
//                 position="absolute"
//                 alt="FindHero"
//                 layout="fill"
//                 objectFit="contain"
//                 opacity={0.1}
//                 w={["200px", "250px", "300px", "350px"]} // Small, Medium, Large screens
//                 h={["180px", "200px", "240px", "300px"]}
//               />

//               <Heading
//                 as="h2"
//                 fontSize={{ base: "3xl", md: "4xl" }}
//                 fontWeight="bold"
//                 color="black"
//               >
//                 Find Your Career Path
//               </Heading>
//               <Text fontSize={{ base: "lg", md: "xl" }} color="gray.600">
//                 Explore our diverse range of courses and kickstart your career
//                 journey. Whether you want to dive into programming, finance, or
//                 data analysis, we have something for everyone!
//               </Text>
//               <Button
//                 as="a"
//                 href="/contact-us"
//                 size={{ base: "md", md: "lg" }}
//                 colorScheme="teal"
//                 fontWeight="semibold"
//                 px={8}
//                 bgColor={"teal.900"}
//                 rounded="full"
//                 _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
//                 transition="all 0.3s"
//                 rightIcon={<FaArrowRight />}
//               >
//                 Get Started Today
//               </Button>
//             </VStack>

//             <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
//               <CourseCard
//                 name="IT Courses"
//                 href="/it-courses"
//                 icon={FaLaptopCode}
//                 description="Explore our technology-focused courses including programming, web development, and more."
//               />

//               <CourseCard
//                 name="Non-IT Courses"
//                 href="/Non_it-courses"
//                 icon={FaGraduationCap}
//                 description="Discover our non-technical course offerings in business, design, and other fields."
//               />
//               <Box
//                 bg="orange.500"
//                 zIndex={1}
//                 display="flex"
//                 alignItems="center"
//                 justifyContent="left"
//                 height="100%"
//                 width="100%"
//                 borderTopLeftRadius="80"
//                 borderBottomRightRadius="80"
//               ></Box>

//               <CourseCard
//                 name="Non-IT Courses"
//                 href="/Non_it-courses"
//                 icon={FaGraduationCap}
//                 description="Discover our non-technical course offerings in business, design, and other fields."
//               />
//             </SimpleGrid>
//           </SimpleGrid>
//         </Container>
//       </Box>

//       <div className="max-h-screen p-0 sm:p-1 md:p-2 m-0" >
//         <div className="max-w-6xl mx-auto">
//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-8 text-center">Career Path Guidance</h1>

//           <div className="flex flex-col lg:flex-row gap-8 mb-12">
//             <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
//               <CareerPathCard
//                 icon={<BarChart className="w-6 h-6 sm:w-8 sm:h-8" />}
//                 title="IT Employed"
//                 description="Advance your skills to close talent gaps and switch careers."
//               />
//               <CareerPathCard
//                 icon={<Target className="w-6 h-6 sm:w-8 sm:h-8" />}
//                 title="Fresh Graduates"
//                 description="Get your hands-on in real-time projects and start your IT career."
//               />
//               <CareerPathCard
//                 icon={<ArrowLeftRight className="w-6 h-6 sm:w-8 sm:h-8" />}
//                 title="Return from Work Break"
//                 description="Re-skill yourself to stay ahead of competitions and in trend."
//               />
//               <CareerPathCard
//                 icon={<Laptop className="w-6 h-6 sm:w-8 sm:h-8" />}
//                 title="Non IT to IT"
//                 description="Learn, Get Certified with new demanding skills and Switch."
//               />
//             </div>

//             <div className="flex-1 relative overflow-hidden rounded-lg shadow-lg">
//               <img 
//                 className="absolute inset-0 w-full h-full object-cover object-center"
//                 src={CareerHero} 
//                 alt="Career Hero Background" 
//               />
//               <div className="relative z-10 p-6 sm:p-8 md:p-10 bg-white bg-opacity-90">
//                 <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-4 sm:mb-6">
//                   How it helps?
//                 </h2>
//                 <div className="space-y-4 text-sm sm:text-base">
//                   <p className="leading-relaxed">
//                     Early in your career, it is essential to chase skills rather than salary. At Chamber Of Learning, we provide practical experiences through visualized learning, hands-on projects, fostering a growth mindset, and nurturing problem-solving skills.
//                   </p>
//                   <p className="leading-relaxed">
//                     Later in your career, Chamber Of Learning helps you align your passions with your work. We empower you with vertical and horizontal skills to stay ahead in knowledge and finances. We work with you to grow your brand and network for ongoing success.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <Box bg="gray.50" className="pt-0 pb-5">
//         <Container maxW="container.xl">
//           <Heading
//             as="h2"
//             fontSize={{ base: "3xl", md: "4xl" }}
//             textAlign="center"
//             mb={5}
//           >
//             Course Statistics
//           </Heading>
//           <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
//             {stats.map((stat, index) => (
//               <Box
//                 key={index}
//                 bg="white"
//                 p={4}
//                 borderRadius="lg"
//                 boxShadow="lg"
//                 _hover={{
//                   transform: "translateY(-5px)",
//                   boxShadow: "xl",
//                 }}
//                 transition="all 0.3s"
//               >
//                 <AnimatedStat
//                   title={stat.title}
//                   count={stat.count}
//                   description={stat.description}
//                   duration={stat.duration}
//                   color={stat.color}
//                 />
//               </Box>
//             ))}
//           </SimpleGrid>
//         </Container>
//       </Box>

//       <Modal isOpen={isOpen} onClose={onClose}>
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>Welcome to Chamber Of Learning</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody>
//             <Text>
//               Thank you for choosing us to enhance your skills! We are excited
//               to help you on your journey.
//             </Text>
//           </ModalBody>
//           <ModalFooter>
//             <Button colorScheme="teal" onClick={onClose}>
//               Close
//             </Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>
//     </Box>
//   );
// }




// import React from "react";
// import {
//   Box,
//   Container,
//   VStack,
//   Heading,
//   Text,
//   Button,
//   useDisclosure,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalFooter,
//   ModalBody,
//   ModalCloseButton,
//   useBreakpointValue,
//   useColorModeValue,
//   SimpleGrid,
//   Flex,
//   Image,
//   Icon,
//   Stack,
// } from "@chakra-ui/react";
// import { motion } from "framer-motion";
// import { FaLaptopCode, FaGraduationCap, FaArrowRight } from "react-icons/fa";
// import { Parallax } from "react-parallax";
// import EnhancedCareerGuidance from "../Courses/Courses";
// import Hero from "../assets/HeroBoy.png";
// import Mentor from "../assets/Mentor.png";
// import FindHero from "../assets/FindHero.png";
// import bgImage from "../assets/HeroVideo1.mp4";
// import AnimatedStat from "../Stat/AnimatedStat";
// import { BarChart, Target, ArrowLeftRight, Laptop, ChevronRight } from 'lucide-react';
// import CareerHero from '../assets/CareerHero.png';
// import { LazyLoadImage } from "react-lazy-load-image-component";

// const MotionBox = motion(Box);

// const stats = [
//   {
//     title: "Courses Offered",
//     count: 120,
//     description: "Courses available for enrollment",
//     duration: 2000,
//     color: "teal.600",
//   },
//   {
//     title: "Students Enrolled",
//     count: 8500,
//     description: "Students currently enrolled in all courses",
//     duration: 2500,
//     color: "purple.600",
//   },
//   {
//     title: "Completed Courses",
//     count: 7000,
//     description: "Courses successfully completed by students",
//     duration: 3000,
//     color: "blue.600",
//   },
//   {
//     title: "Active Instructors",
//     count: 50,
//     description: "Instructors teaching on the platform",
//     duration: 1500,
//     color: "orange.600",
//   },
// ];

// const CourseCard = ({ name, icon, description, href }) => {
//   const bgColor = useColorModeValue("white", "gray.800");
//   const textColor = useColorModeValue("gray.800", "white");
//   const accentColor = useColorModeValue("teal.900", "teal.900");

//   return (
//     <MotionBox
//       as="a"
//       href={href}
//       bg={bgColor}
//       p={6}
//       borderRadius="xl"
//       boxShadow="xl"
//       transition="all 0.3s"
//       _hover={{
//         transform: "translateY(-5px)",
//         boxShadow: "2xl",
//       }}
//       whileHover={{ scale: 1.03 }}
//     >
//       <VStack spacing={4} align="start">
//         <Flex
//           align="center"
//           justify="center"
//           w={16}
//           h={16}
//           bg={accentColor}
//           borderRadius="full"
//         >
//           <Icon as={icon} w={8} h={8} color="white" />
//         </Flex>
//         <Heading as="h3" fontSize="2xl" fontWeight="bold" color={textColor}>
//           {name}
//         </Heading>
//         <Text color={useColorModeValue("gray.600", "gray.300")}>
//           {description}
//         </Text>
//         <Button
//           rightIcon={<FaArrowRight />}
//           colorScheme="orange"
//           variant="link"
//           size="sm"
//         >
//           Explore Courses
//         </Button>
//       </VStack>
//     </MotionBox>
//   );
// };

// const CareerPathCard = ({ icon, title, description }) => {
//   return (
//     <Box
//       bg="white"
//       borderRadius="lg"
//       boxShadow="lg"
//       overflow="hidden"
//       transition="all 0.3s"
//       _hover={{
//         transform: "translateY(-5px)",
//         boxShadow: "xl",
//       }}
//     >
//       <Box p={6}>
//         <Flex align="center" mb={4}>
//           <Box
//             p={3}
//             borderRadius="full"
//             bg="gray.200"
//             color="gray.700"
//             mr={4}
//           >
//             {icon}
//           </Box>
//           <Heading as="h3" fontSize="xl" fontWeight="semibold">
//             {title}
//           </Heading>
//         </Flex>
//         <Text fontSize="md" color="gray.600" mb={4}>
//           {description}
//         </Text>
//         <Flex align="center" color="orange.600">
//           <Text fontSize="sm" fontWeight="medium" mr={2}>
//             Learn More
//           </Text>
//           <ChevronRight className="w-4 h-4" />
//         </Flex>
//       </Box>
//       <Box h={1} bg="teal.600" />
//     </Box>
//   );
// };

// export default function Homepage() {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const headingSize = useBreakpointValue({ base: "2xl", md: "3xl", lg: "4xl" });
//   const textSize = useBreakpointValue({ base: "md", md: "lg", lg: "xl" });
//   const buttonSize = useBreakpointValue({ base: "sm", md: "md", lg: "lg" });
//   const containerPadding = useBreakpointValue({ base: 4, md: 8, lg: 12 });

//   const bgColor = useColorModeValue("gray.50", "gray.900");
//   const textColor = useColorModeValue("black", "white");

//   return (
//     <Box bg={bgColor} color={textColor} minHeight="100vh">
//       {/* Hero Section */}
//       <Parallax
//         bgImage={bgImage}
//         bgImageStyle={{ objectFit: "cover", width: "100%", height: "100%" }}
//         strength={500}
//       >
//         <Box
//           minHeight={{ base: "50vh", md: "60vh", lg: "70vh" }}
//           position="relative"
//           overflow="hidden"
//         >
//           <Box
//             as="video"
//             position="absolute"
//             top="0"
//             left="0"
//             right="0"
//             bottom="0"
//             width="100%"
//             height="100%"
//             objectFit="cover"
//             src={bgImage}
//             autoPlay
//             loop
//             muted
//             playsInline
//           />

//           <Container
//             maxW="container.xl"
//             p={containerPadding}
//             position="relative"
//             zIndex="2"
//           >
//             <Stack
//               direction={{ base: "column", lg: "row" }}
//               align="center"
//               justify="space-between"
//               minHeight="inherit"
//               pt={{ base: 20, md: 20 }}
//               spacing={{ base: 12, lg: 0 }}
//             >
//               <VStack
//                 spacing={6}
//                 textAlign={{ base: "center", lg: "left" }}
//                 align={{ base: "center", lg: "flex-start" }}
//                 maxW={{ base: "100%", lg: "50%" }}
//               >
//                 <Heading
//                   as="h1"
//                   fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
//                   fontWeight="bold"
//                   color="white"
//                   textShadow="2px 2px 8px rgba(0,0,0,0.7)"
//                 >
//                   Kick Start Your Career!
//                 </Heading>
//                 <Text
//                   fontSize={{ base: "md", md: "lg", lg: "xl" }}
//                   maxW="600px"
//                   color="white"
//                   textShadow="1px 1px 4px rgba(0,0,0,0.6)"
//                 >
//                   Join our engaging e-learning platform.
//                 </Text>
//                 <Button
//                   as="a"
//                   href="/it-courses"
//                   backgroundColor="orange.600"
//                   color="white"
//                   borderRadius="full"
//                   size={{ base: "md", lg: "lg" }}
//                   px={8}
//                   _hover={{
//                     backgroundColor: "teal.800",
//                     transform: "translateY(-2px)",
//                   }}
//                   transition="all 0.3s"
//                 >
//                   Get Started
//                 </Button>
//               </VStack>

//               <Flex
//                 position="relative"
//                 top={{ base: 0, lg: -150 }}
//                 width={{ base: "100%", lg: "50%" }}
//                 height={{ base: "300px", md: "400px", lg: "100%" }}
//                 justify="center"
//                 align="bottom"
//               >
//                 <Image
//                   src={Mentor}
//                   alt="Mentor"
//                   position="absolute"
//                   top={{ base: "0", lg: "10%" }}
//                   left={{ base: "0", lg: "0" }}
//                   width={{ base: "50%", sm: "40%", md: "30%", lg: "45%" }}
//                   height="auto"
//                   objectFit="contain"
//                   borderRadius="lg"
//                   zIndex="2"
//                   transition="transform 0.3s ease-in-out"
//                   _hover={{ transform: "scale(1.05)" }}
//                 />
//                 <Image
//                   src={Hero}
//                   alt="Hero"
//                   position="absolute"
//                   right={{ base: "0", lg: "0" }}
//                   width={{ base: "50%", sm: "40%", md: "30%", lg: "45%" }}
//                   top={{ base: "0", lg: "10%" }}
//                   height="auto"
//                   objectFit="contain"
//                   borderRadius="lg"
//                   zIndex="2"
//                   transition="transform 0.3s ease-in-out"
//                   _hover={{ transform: "scale(1.05)" }}
//                 />
//               </Flex>
//             </Stack>
//           </Container>
//         </Box>
//       </Parallax>

//       {/* Career Path Section */}
//       <Box as="section" py={{ base: 8, md: 10 }}>
//         <Container maxW="container.xl">
//           <SimpleGrid
//             columns={{ base: 1, lg: 2 }}
//             spacing={{ base: 12, lg: 16 }}
//             alignItems="start"
//           >
//             <VStack align="start" spacing={6}>
//               <Heading
//                 as="h2"
//                 fontSize={{ base: "3xl", md: "4xl" }}
//                 fontWeight="bold"
//                 color="black"
//               >
//                 Find Your Career Path
//               </Heading>
//               <Text fontSize={{ base: "lg", md: "xl" }} color="gray.600">
//                 Explore our diverse range of courses and kickstart your career
//                 journey. Whether you want to dive into programming, finance, or
//                 data analysis, we have something for everyone!
//               </Text>
//               <Button
//                 as="a"
//                 href="/contact-us"
//                 size={{ base: "md", md: "lg" }}
//                 colorScheme="teal"
//                 fontWeight="semibold"
//                 px={8}
//                 bgColor={"teal.900"}
//                 rounded="full"
//                 _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
//                 transition="all 0.3s"
//                 rightIcon={<FaArrowRight />}
//               >
//                 Get Started Today
//               </Button>
//             </VStack>

//             <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
//               <CourseCard
//                 name="IT Courses"
//                 href="/it-courses"
//                 icon={FaLaptopCode}
//                 description="Explore our technology-focused courses including programming, web development, and more."
//               />
//               <CourseCard
//                 name="Non-IT Courses"
//                 href="/Non_it-courses"
//                 icon={FaGraduationCap}
//                 description="Discover our non-technical course offerings in business, design, and other fields."
//               />
//             </SimpleGrid>
//           </SimpleGrid>
//         </Container>
//       </Box>

//       {/* Career Guidance Section */}
//       <Box as="section" py={{ base: 8, md: 10 }} bg="gray.50">
//         <Container maxW="container.xl">
//           <Heading
//             as="h2"
//             fontSize={{ base: "3xl", md: "4xl" }}
//             textAlign="center"
//             mb={8}
//           >
//             Career Path Guidance
//           </Heading>
//           <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
//             <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={6}>
//               <CareerPathCard
//                 icon={<BarChart className="w-6 h-6" />}
//                 title="IT Employed"
//                 description="Advance your skills to close talent gaps and switch careers."
//               />
//               <CareerPathCard
//                 icon={<Target className="w-6 h-6" />}
//                 title="Fresh Graduates"
//                 description="Get your hands-on in real-time projects and start your IT career."
//               />
//               <CareerPathCard
//                 icon={<ArrowLeftRight className="w-6 h-6" />}
//                 title="Return from Work Break"
//                 description="Re-skill yourself to stay ahead of competitions and in trend."
//               />
//               <CareerPathCard
//                 icon={<Laptop className="w-6 h-6" />}
//                 title="Non IT to IT"
//                 description="Learn, Get Certified with new demanding skills and Switch."
//               />
//             </SimpleGrid>
//             <Box position="relative" overflow="hidden" borderRadius="lg">
//               <Image
//                 src={CareerHero}
//                 alt="Career Hero"
//                 objectFit="cover"
//                 width="100%"
//                 height="100%"
//               />
//               <Box
//                 position="absolute"
//                 top="0"
//                 left="0"
//                 right="0"
//                 bottom="0"
//                 bg="rgba(255, 255, 255, 0.9)"
//                 p={6}
//               >
//                 <Heading as="h3" fontSize="2xl" fontWeight="bold" mb={4}>
//                   How it helps?
//                 </Heading>
//                 <Text fontSize="md" color="gray.600">
//                   Early in your career, it is essential to chase skills rather than salary. At Chamber Of Learning, we provide practical experiences through visualized learning, hands-on projects, fostering a growth mindset, and nurturing problem-solving skills.
//                 </Text>
//               </Box>
//             </Box>
//           </SimpleGrid>
//         </Container>
//       </Box>

//       {/* Course Statistics Section */}
//       <Box as="section" py={{ base: 8, md: 10 }}>
//         <Container maxW="container.xl">
//           <Heading
//             as="h2"
//             fontSize={{ base: "3xl", md: "4xl" }}
//             textAlign="center"
//             mb={8}
//           >
//             Course Statistics
//           </Heading>
//           <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
//             {stats.map((stat, index) => (
//               <Box
//                 key={index}
//                 bg="white"
//                 p={6}
//                 borderRadius="lg"
//                 boxShadow="lg"
//                 _hover={{
//                   transform: "translateY(-5px)",
//                   boxShadow: "xl",
//                 }}
//                 transition="all 0.3s"
//               >
//                 <AnimatedStat
//                   title={stat.title}
//                   count={stat.count}
//                   description={stat.description}
//                   duration={stat.duration}
//                   color={stat.color}
//                 />
//               </Box>
//             ))}
//           </SimpleGrid>
//         </Container>
//       </Box>

//       {/* Modal */}
//       <Modal isOpen={isOpen} onClose={onClose}>
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>Welcome to Chamber Of Learning</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody>
//             <Text>
//               Thank you for choosing us to enhance your skills! We are excited
//               to help you on your journey.
//             </Text>
//           </ModalBody>
//           <ModalFooter>
//             <Button colorScheme="teal" onClick={onClose}>
//               Close
//             </Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>
//     </Box>
//   );
// }



// import React from "react";
// import {
//   Box,
//   Container,
//   VStack,
//   Heading,
//   Text,
//   Button,
//   useDisclosure,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalFooter,
//   ModalBody,
//   ModalCloseButton,
//   useBreakpointValue,
//   useColorModeValue,
//   SimpleGrid,
//   Flex,
//   Image,
//   Icon,
//   Stack,
// } from "@chakra-ui/react";
// import { motion } from "framer-motion";
// import { FaLaptopCode, FaGraduationCap, FaArrowRight } from "react-icons/fa";
// import { Parallax } from "react-parallax";
// import Hero from "../../assets/HeroBoy.png";
// import Mentor from "../../assets/Mentor.png";
// import FindHero from "../../assets/FindHero.png";
// import bgImage from "../../assets/HeroVideo1.mp4";
// // import AnimatedStat from "../../Stat/AnimatedStat";
// import { BarChart, Target, ArrowLeftRight, Laptop, ChevronRight } from 'lucide-react';
// import CareerHero from '../../assets/CareerHero.png';
// // import { LazyLoadImage } from "react-lazy-load-image-component";
// import TypingText from "./Animatetext";
// import AnimatedStat from "./Stat/AnimatedStat";

// const MotionBox = motion(Box);

// const stats = [
//   {
//     title: "Courses Offered",
//     count: 120,
//     description: "Courses available for enrollment",
//     duration: 2000,
//     color: "teal.600",
//   },
//   {
//     title: "Students Enrolled",
//     count: 8500,
//     description: "Students currently enrolled in all courses",
//     duration: 2500,
//     color: "purple.600",
//   },
//   {
//     title: "Completed Courses",
//     count: 7000,
//     description: "Courses successfully completed by students",
//     duration: 3000,
//     color: "blue.600",
//   },
//   {
//     title: "Active Instructors",
//     count: 50,
//     description: "Instructors teaching on the platform",
//     duration: 1500,
//     color: "orange.600",
//   },
// ];

// const CourseCard = ({ name, icon, description, href }) => {
//   const bgColor = useColorModeValue("white", "gray.800");
//   const textColor = useColorModeValue("gray.800", "white");
//   const accentColor = useColorModeValue("teal.900", "teal.900");

//   return (
//     <MotionBox
//       as="a"
//       href={href}
//       bg={bgColor}
//       p={6}
//       borderRadius="xl"
//       boxShadow="xl"
//       transition="all 0.3s"
//       _hover={{
//         transform: "translateY(-5px)",
//         boxShadow: "2xl",
//       }}
//       whileHover={{ scale: 1.03 }}
//     >
//       <VStack spacing={4} align="start">
//         <Flex
//           align="center"
//           justify="center"
//           w={16}
//           h={16}
//           bg={accentColor}
//           borderRadius="full"
//         >
//           <Icon as={icon} w={8} h={8} color="white" />
//         </Flex>
//         <Heading as="h3" fontSize="2xl" fontWeight="bold" color={textColor}>
//           {name}
//         </Heading>
//         <Text color={useColorModeValue("gray.600", "gray.300")}>
//           {description}
//         </Text>
//         <Button
//           rightIcon={<FaArrowRight />}
//           colorScheme="orange"
//           variant="link"
//           size="sm"
//         >
//           Explore Courses
//         </Button>
//       </VStack>
//     </MotionBox>
//   );
// };


// // const CareerPathCard = ({ icon, title, description }) => {
// //   return (
// //     <div className="bg-white rounded-3xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl group">
// //       <div className="p-4 sm:p-6">
// //         <div className="flex items-center mb-3 sm:mb-4">
// //           <div className="p-2 sm:p-3 rounded-full bg-gray-200 text-gray-700 mr-3 sm:mr-4 transition-colors duration-300">
// //             {icon}
// //           </div>
// //           <h3 className="text-lg sm:text-xl font-semibold group-hover:text-teal-600 transition-colors duration-300">{title}</h3>
// //         </div>
// //         <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 transition-colors duration-300">{description}</p>
// //         {/* <div className="flex items-center text-orange-600 group-hover:translate-x-2 transition-all duration-300">
// //           <span className="text-sm sm:text-base mr-2 font-medium"></span>
// //           <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
// //         </div> */}
// //       </div>
// //       {/* <div className="h-1 w-full bg-teal-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left"></div> */}
// //     </div>
// //   );
// // };

// const CareerPathCard = ({ icon, title, description }) => {
//     return (
//       <motion.div
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         whileHover={{
//           scale: 1.05,
//           rotateX: 6,
//           rotateY: 6,
//           boxShadow: "0px 20px 50px rgba(19, 76, 49, 0.4)",
//         }}
//         transition={{ duration: 0.5, ease: "easeInOut" }}
//         className="relative group bg-gradient-to-br from-black/10 to-black/5 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden border border-white/20 p-6 sm:p-8 transition-all duration-300"
//       >
//         {/* Glossy Glow Effect */}
//         <motion.div
//           initial={{ opacity: 0, scale: 1 }}
//           whileHover={{ opacity: 1, scale: 1.2 }}
//           transition={{ duration: 0.5, ease: "easeOut" }}
//           className="absolute inset-0 rounded-3xl border-[2px] border-teal-800 blur-lg opacity-30"
//         ></motion.div>
  
//         {/* Animated Floating Icon */}
//         <motion.div
//           animate={{ y: [0, -8, 0] }}
//           transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
//           className="p-4 sm:p-5 rounded-full bg-white/20 text-orange-700 shadow-lg mb-4 transition-all duration-300"
//         >
//           {icon}
//         </motion.div>
  
//         {/* Title Animation */}
//         <motion.h3
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-xl sm:text-2xl font-bold text-black group-hover:text-teal-900 transition-all duration-300"
//         >
//           {title}
//         </motion.h3>
  
//         {/* Description Animation */}
//         <motion.p
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="text-sm sm:text-base text-black/70 mt-2"
//         >
//           {description}
//         </motion.p>
  
//         {/* Neon Underline Effect */}
//         <motion.div
//           initial={{ scaleX: 0 }}
//           whileHover={{ scaleX: 1 }}
//           transition={{ duration: 0.5 }}
//           className="h-1 w-full bg-teal-400 rounded-full mt-4"
//         />
//       </motion.div>
//     );
//   };
// export default function Homepage() {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const headingSize = useBreakpointValue({ base: "2xl", md: "3xl", lg: "4xl" });
//   const textSize = useBreakpointValue({ base: "md", md: "lg", lg: "xl" });
//   const buttonSize = useBreakpointValue({ base: "sm", md: "md", lg: "lg" });
//   const containerPadding = useBreakpointValue({ base: 4, md: 8, lg: 12 });

//   const bgColor = useColorModeValue("gray.50", "gray.900");
//   const textColor = useColorModeValue("black", "white");
//   const bgGradient = useColorModeValue(
//     "linear(to-br, rgba(0,0,0,0.5), rgba(255,255,255,0.2))",
//     "linear(to-br, rgba(255,255,255,0.2), rgba(0,0,0,0.8))"
//   );

//   return (
//     <Box bg={bgColor} color={textColor} minHeight="100vh">
//       <Parallax
//         bgImage={bgImage}
//         bgImageStyle={{ objectFit: "cover", width: "100%", height: "100%" }}
//         strength={500}
//       >
//         <Box
//           minHeight={{ base: "50vh", md: "50vh", lg: "70vh" }}
//           position="relative"
//           overflow="hidden"
//         >
//           <Box
//             as="video"
//             position="absolute"
//             top="0"
//             left="0"
//             right="0"
//             bottom="0"
//             width="100%"
//             height="100%"
//             objectFit="cover"
//             src={bgImage}
//             autoPlay
//             loop
//             muted
//             playsInline
//           />

//           <Container
//             maxW="container.xl"
//             p={containerPadding}
//             position="relative"
//             zIndex="2"
//           >
//             <Stack
//               direction={{ base: "column", lg: "row" }}
//               align="center"
//               justify="space-between"
//               minHeight="inherit"
//               pt={{ base: 20, md: 20 }}
//               spacing={{ base: 12, lg: 0 }}
//             >
//               <VStack
//                 spacing={6}
//                 textAlign={{ base: "center", lg: "left" }}
//                 align={{ base: "center", lg: "flex-start" }}
//                 maxW={{ base: "100%", lg: "50%" }}
//               >
//                 <TypingText />
//                 {/* <Heading
//                   as="h1"
//                   fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
//                   fontWeight="bold"
//                   color="white"
//                   textShadow="2px 2px 8px rgba(0,0,0,0.7)"
//                 >
//                   Kick Start Your Career!
//                 </Heading> */}
//                 <Text
//                   fontSize={{ base: "md", md: "lg", lg: "xl" }}
//                   maxW="600px"
//                   color="white"
//                   textShadow="1px 1px 4px rgba(0,0,0,0.6)"
//                 >
//                   Join our engaging e-learning platform.
//                 </Text>
//                 <Button
//                   as="a"
//                   href="/it-courses"
//                   backgroundColor="orange.600"
//                   color="white"
//                   borderRadius="full"
//                   size={{ base: "md", lg: "lg" }}
//                   px={8}
//                   _hover={{
//                     backgroundColor: "teal.800",
//                     transform: "translateY(-2px)",
//                   }}
//                   transition="all 0.3s"
//                 >
//                   Get Started
//                 </Button>
//               </VStack>

//               <Flex
//                 position="relative"
//                 top={{ base: 0, lg: -150 }}
//                 width={{ base: "100%", lg: "50%" }}
//                 height={{ base: "300px", md: "400px", lg: "100%" }}
//                 justify="center"
//                 align="bottom"
//               >
//                 <Image
//                   src={Mentor}
//                   alt="Mentor"
//                   position="absolute"
//                   top={{ base: "0", lg: "100%" }}
//                   left={{ base: "0", lg: "10%" }}
//                   width={{ base: "50%", sm: "40%", md: "30%", lg: "45%" }}
//                   height="auto"
//                   objectFit="contain"
//                   borderRadius="lg"
//                   zIndex="2"
//                   transition="transform 0.3s ease-in-out"
//                   _hover={{ transform: "scale(1.05)" }}
//                 />
//                 <Image
//                   src={Hero}
//                   alt="Hero"
//                   position="absolute"
//                   right={{ base: "0", lg: "0" }}
//                   width={{ base: "50%", sm: "40%", md: "30%", lg: "45%" }}
//                   top={{ base: "0", lg: "100%" }}
//                   height="auto"
//                   objectFit="contain"
//                   borderRadius="lg"

//                   zIndex="2"
//                   transition="transform 0.3s ease-in-out"
//                   _hover={{ transform: "scale(1.05)" }}
//                 />
//               </Flex>
//             </Stack>
//           </Container>
//         </Box>
//       </Parallax>

//       <Box as="section" py={{ base: 8, md: 10 }} m-0>
//         <Container maxW="container.xl" m-0>
//           <SimpleGrid
//             columns={{ base: 1, lg: 2 }}
//             spacing={{ base: 12, lg: 16 }}
//             alignItems="start"
//           >
//             <VStack align="start" spacing={6}>
//               <Image
//                 src={FindHero}
//                 position="absolute"
//                 alt="FindHero"
//                 layout="fill"
//                 objectFit="contain"
//                 opacity={0.1}
//                 w={["200px", "250px", "300px", "350px"]} 
//                 h={["180px", "200px", "240px", "300px"]}
//               />

//               <Heading
//                 as="h2"
//                 fontSize={{ base: "3xl", md: "4xl" }}
//                 fontWeight="bold"
//                 color="black"
//               >
//                 Find Your Career Path
//               </Heading>
//               <Text fontSize={{ base: "lg", md: "xl" }} color="gray.600">
//                 Explore our diverse range of courses and kickstart your career
//                 journey. Whether you want to dive into programming, finance, or
//                 data analysis, we have something for everyone!
//               </Text>
//               <Button
//                 as="a"
//                 href="/contact-us"
//                 size={{ base: "md", md: "lg" }}
//                 colorScheme="teal"
//                 fontWeight="semibold"
//                 px={8}
//                 bgColor={"teal.900"}
//                 rounded="full"
//                 _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
//                 transition="all 0.3s"
//                 rightIcon={<FaArrowRight />}
//               >
//                 Get Started Today
//               </Button>
//             </VStack>

//             <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
//               <CourseCard
//                 name="IT Courses"
//                 href="/it-courses"
//                 icon={FaLaptopCode}
//                 description="Explore our technology-focused courses including programming, web development, and more."
//               />

//               <CourseCard
//                 name="Non-IT Courses"
//                 href="/Non_it-courses"
//                 icon={FaGraduationCap}
//                 description="Discover our non-technical course offerings in business, design, and other fields."
//               />
           
//             </SimpleGrid>
//           </SimpleGrid>
//         </Container>
//       </Box>

//       <div className="max-h-screen p-0 sm:p-1 md:p-2 m-0" >
//         <div className="max-w-6xl mx-auto">
//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-8 text-center">Career Path Guidance</h1>

//           <div className="flex flex-col lg:flex-row gap-8 mb-12">
//             <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
//               <CareerPathCard
//                 icon={<BarChart className="w-6 h-6 sm:w-8 sm:h-8" />}
//                 title="IT Employed"
//                 description="Advance your skills to close talent gaps and switch careers."
//               />
//               <CareerPathCard
//                 icon={<Target className="w-6 h-6 sm:w-8 sm:h-8" />}
//                 title="Fresh Graduates"
//                 description="Get your hands-on in real-time projects and start your IT career."
//               />
//               <CareerPathCard
//                 icon={<ArrowLeftRight className="w-6 h-6 sm:w-8 sm:h-8" />}
//                 title="Return from Work Break"
//                 description="Re-skill yourself to stay ahead of competitions and in trend."
//               />
//               <CareerPathCard
//                 icon={<Laptop className="w-6 h-6 sm:w-8 sm:h-8" />}
//                 title="Non IT to IT"
//                 description="Learn, Get Certified with new demanding skills and Switch."
//               />
//             </div>

//             <div className="flex-1 relative overflow-hidden rounded-lg shadow-lg">
//               <img 
//                 className="absolute inset-0 w-full h-full object-cover object-center"
//                 src={CareerHero} 
//                 alt="Career Hero Background" 
//               />
//               <div className="relative z-10 p-6 sm:p-8 md:p-10 bg-white bg-opacity-90">
//                 <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-4 sm:mb-6">
//                   How it helps?
//                 </h2>
//                 <div className="space-y-4 text-sm sm:text-base">
//                   <p className="leading-relaxed">
//                     Early in your career, it is essential to chase skills rather than salary. At Chamber Of Learning, we provide practical experiences through visualized learning, hands-on projects, fostering a growth mindset, and nurturing problem-solving skills.
//                   </p>
//                   <p className="leading-relaxed">
//                     Later in your career, Chamber Of Learning helps you align your passions with your work. We empower you with vertical and horizontal skills to stay ahead in knowledge and finances. We work with you to grow your brand and network for ongoing success.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <Box bg="gray.50" className="pt-0 pb-5">
//         <Container maxW="container.xl">
//           <Heading
//             as="h2"
//             fontSize={{ base: "3xl", md: "4xl" }}
//             textAlign="center"
//             mb={5}
//           >
//             Course Statistics
//           </Heading>
//           <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
//             {stats.map((stat, index) => (
//               <Box
//                 key={index}
//                 bg="white"
//                 p={4}
//                 borderRadius="lg"
//                 boxShadow="lg"
//                 _hover={{
//                   transform: "translateY(-5px)",
//                   boxShadow: "xl",
//                 }}
//                 transition="all 0.3s"
//               >
//                 <AnimatedStat
//                   title={stat.title}
//                   count={stat.count}
//                   description={stat.description}
//                   duration={stat.duration}
//                   color={stat.color}
//                 />
//               </Box>
//             ))}
//           </SimpleGrid>
//         </Container>
//       </Box>

//       <Modal isOpen={isOpen} onClose={onClose}>
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>Welcome to Chamber Of Learning</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody>
//             <Text>
//               Thank you for choosing us to enhance your skills! We are excited
//               to help you on your journey.
//             </Text>
//           </ModalBody>
//           <ModalFooter>
//             <Button colorScheme="teal" onClick={onClose}>
//               Close
//             </Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>
//     </Box>
//   );
// }



import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useBreakpointValue,
  useColorModeValue,
  SimpleGrid,
  Flex,
  Image,
  Icon,
  Stack,
  AspectRatio,
} from "@chakra-ui/react"
import { motion } from "framer-motion"
import { FaLaptopCode, FaGraduationCap, FaArrowRight } from "react-icons/fa"
import { Parallax } from "react-parallax"
import Hero from "../../assets/HeroBoy.png"
import Mentor from "../../assets/Mentor.png"
import bgImage from "../../assets/HeroVideo1.mp4"
import FounderHero from "../../assets/kumar.png"
import PrefcolPreloaderLogo from "../../assets/Prefcol-nav.png"
import { BarChart, Target, ArrowLeftRight, Laptop, Sparkles, Rocket, Play, Star, Users, Award } from "lucide-react"
import CareerHero from "../../assets/CareerHero.png"
import TypingText from "./Animatetext"
import AnimatedStat from "./Stat/AnimatedStat"
import TealGassyBox from "./TealGassyBox"
import { useScroll, useTransform } from 'framer-motion';
import { useNavigate } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import React, { useEffect, useState } from "react";
import MotionFadeIn from "../Common/MotionFadeIn";
const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 2, y: 0, transition: { duration: 4 } },
  };

// Replace these lines in your file
// Use motion.create when present (new API); otherwise fall back to motion for compatibility.
const createMotion = motion && motion.create ? motion.create.bind(motion) : motion;
const MotionBox = createMotion(Box);
const MotionHeading = createMotion(Heading);
const MotionText = createMotion(Text);
const MotionVStack = createMotion(VStack);

const stats = [
  {
    title: "Courses Offered",
    count: 120,
    description: "Courses available for enrollment",
    duration: 2000,
    color: "teal.600",
  },
  {
    title: "Students Enrolled",
    count: 8500,
    description: "Students currently enrolled in all courses",
    duration: 2500,
    color: "purple.600",
  },
  {
    title: "Completed Courses",
    count: 7000,
    description: "Courses successfully completed by students",
    duration: 3000,
    color: "blue.600",
  },
  {
    title: "Active Instructors",
    count: 50,
    description: "Instructors teaching on the platform",
    duration: 1500,
    color: "orange.600",
  },
]



const CourseCard = ({ name, icon: IconComponent, description, href }) => {
  // Colors
  const bgColor = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.800", "white");
  const hoverTextColor = useColorModeValue("orange.500", "orange.300");
  const accentColor = "teal.900";
  const boxShadow = useColorModeValue(
    "md",           // Light mode: standard shadow
    "dark-lg"       // Dark mode: stronger shadow for visibility
  );
   


  return (
    <MotionBox
      as="a"
      href={href}
      bg={bgColor}
      p={{ base: 5, md: 6 }}
      borderRadius="3xl"
      boxShadow={boxShadow}
      borderWidth="1px"
      borderColor={useColorModeValue("gray.200", "gray.700")}
      transition="all 0.3s ease"
      _hover={{
        transform: "translateY(-6px)",
        boxShadow: "0px 15px 25px rgba(0, 0, 0, 0.15)",
        ".course-heading": {
          color: hoverTextColor,
        },
      }}
      whileHover={{ scale: 1.02 }}
      height="100%"
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      overflow="hidden" // Prevents content overflow
      position="relative"
    >
      <VStack
        spacing={{ base: 3, md: 4 }}
        align="start"
        width="100%"
        height="100%"
      >
        {/* Icon Circle */}
        <Flex
          align="center"
          justify="center"
          w={{ base: 12, md: 16 }}
          h={{ base: 12, md: 16 }}
          bg={accentColor}
          borderRadius="full"
          flexShrink={0}
          boxShadow="lg"
        >
          <Icon
            as={IconComponent}
            w={{ base: 6, md: 8 }}
            h={{ base: 6, md: 8 }}
            color="white"
          />
        </Flex>

        {/* Title */}
        <Heading
          as="h3"
          fontSize={{ base: "lg", md: "xl" }}
          fontWeight="bold"
          color={textColor}
          className="course-heading"
          lineHeight="shorter"
          noOfLines={2}
        >
          {name}
        </Heading>

        {/* Description */}
        <Text
          color={useColorModeValue("gray.600", "gray.300")}
          fontSize={{ base: "sm", md: "md" }}
          noOfLines={3} // Prevents description from overflowing
          lineHeight="tall"
        >
          {description}
        </Text>

        {/* CTA Button */}
        <Button
          rightIcon={<FaArrowRight />}
          colorScheme="orange"
          variant="link"
          size="sm"
          mt="auto"
          fontWeight="medium"
          _hover={{ textDecoration: "underline" }}
        >
          Explore Courses
        </Button>
      </VStack>
    </MotionBox>
  );
};


// const CourseCard = ({ name, icon, description, href }) => {
//     const bgColor = useColorModeValue("gray.50", "gray.800");
//     const textColor = useColorModeValue("gray.800", "white");
//     const hoverTextColor = useColorModeValue("teal.800", "teal.800"); // Change to desired hover color
//     const accentColor = useColorModeValue("teal.900", "teal.900");
  
//     return (
//       <MotionBox
//         as="a"
//         href={href}
//         bg={bgColor}
//         p={{ base: 4, md: 6 }}
//         borderRadius="3xl"
//         boxShadow="md"
//         transition="all 0.3s"
//         _hover={{
//           transform: "translateY(-5px)",
//           boxShadow: "0px 10px 20px rgba(232, 241, 230, 0.4)",
//           // Target the Heading text color change on hover
//           ".course-heading": {
//             color: hoverTextColor,
//           },
//         }}
//         whileHover={{ scale: 1.03 }}
//         height="100%"
        
//       >
//         <VStack spacing={4} align="start" height="100%">
//           <Flex
//             align="center"
//             justify="center"
//             w={{ base: 12, md: 16 }}
//             h={{ base: 12, md: 16 }}
//             bg={accentColor}
//             borderRadius="full"
//           >
//             <Icon as={icon} w={{ base: 6, md: 8 }} h={{ base: 6, md: 8 }} color="white" />
//           </Flex>
//           <Heading
//             as="h3"
//             fontSize={{ base: "xl", md: "2xl" }}
//             fontWeight="bold"
//             color={textColor}
//             className="course-heading"  
//           >
//             {name}
//           </Heading>
//           <Text color={useColorModeValue("gray.600", "gray.300")} fontSize={{ base: "sm", md: "md" }}>
//             {description}
//           </Text>
//           <Button rightIcon={<FaArrowRight />} colorScheme="orange" variant="link" size="sm" mt="auto">
//             Explore Courses
//           </Button>
//         </VStack>
//       </MotionBox>
//     );
//   };
  

// const CareerPathCard = ({ icon, title, description }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.9 }}
//       animate={{ opacity: 1, scale: 1 }}
//       whileHover={{
//         scale: 1.05,
//         rotateX: 6,
//         rotateY: 6,
//         boxShadow: "0px 20px 30px rgba(255, 255, 255, 0.4)",
//       }}
//       transition={{ duration: 0.5, ease: "easeInOut" }}
//       className="relative group bg-gradient-to-br from-black\1 to-black/1 backdrop-blur-lg rounded-3xl shadow-md overflow-hidden border border-white/20 p-4 sm:p-6 md:p-8 transition-all duration-300 h-full"
//     >
//       {/* Glossy Glow Effect */}
//       <motion.div
//         initial={{ opacity: 0, scale: 1 }}
//         whileHover={{ opacity: 1, scale: 1.2 }}
//         transition={{ duration: 0.5, ease: "easeOut" }}
//         className="absolute inset-0 rounded-3xl border-[2px] border-teal-800 blur-lg opacity-30"
//       ></motion.div>

//       {/* Animated Floating Icon */}
//       <motion.div
//         animate={{ y: [0, -8, 0] }}
//         transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, ease: "easeInOut" }}
//         className="p-3 sm:p-4 md:p-5 rounded-full bg-white/20 text-orange-700 shadow-lg mb-3 sm:mb-4 transition-all duration-300 inline-flex"
//       >
//         {icon}
//       </motion.div>

//       {/* Title Animation */}
//       <motion.h3
//         initial={{ opacity: 0, y: 10 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="text-lg sm:text-xl md:text-2xl font-bold text-black group-hover:text-teal-900 transition-all duration-300"
//       >
//         {title}
//       </motion.h3>

//       {/* Description Animation */}
//       <motion.p
//         initial={{ opacity: 0, y: 10 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, delay: 0.2 }}
//         className="text-xs sm:text-sm md:text-base text-black/70 mt-2"
//       >
//         {description}
//       </motion.p>

//       {/* Neon Underline Effect */}
//       <motion.div
//         initial={{ scaleX: 0 }}
//         whileHover={{ scaleX: 1 }}
//         transition={{ duration: 0.5 }}
//         className="h-1 w-full bg-teal-400 rounded-full mt-3 sm:mt-4"
//       />
//     </motion.div>
//   )
// }

const CareerPathCard = ({ icon, title, description, to }) => {
  // Color mode values
  const bgColor = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.800", "white");
  const hoverTextColor = useColorModeValue("teal.700", "teal.300");
  const accentColor = "orange.500";
  const boxShadow = useColorModeValue("md", "dark-lg");

  const cardContent = (
    <MotionBox
      bg={bgColor}
      p={{ base: 5, md: 6 }}
      borderRadius="3xl"
      boxShadow={boxShadow}
      borderWidth="1px"
      borderColor={useColorModeValue("gray.200", "gray.700")}
      transition="all 0.3s ease"
      _hover={{
        transform: "translateY(-6px)",
        boxShadow: "0px 15px 25px rgba(0, 0, 0, 0.15)",
        ".career-title": {
          color: hoverTextColor,
        },
      }}
      whileHover={{ scale: 1.02 }}
      height="100%"
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      overflow="hidden"
    >
      <VStack
        spacing={{ base: 4, md: 5 }}
        align="start"
        width="full"
        height="full"
      >
        {/* Icon Circle */}
        <Flex
          align="center"
          justify="center"
          w={{ base: 12, md: 16 }}
          h={{ base: 12, md: 16 }}
          bg={accentColor}
          borderRadius="full"
          flexShrink={0}
          boxShadow="lg"
        >
          <Box as="span" w={{ base: 6, md: 8 }} h={{ base: 6, md: 8 }} color="white">
            {icon}
          </Box>
        </Flex>

        {/* Title */}
        <Heading
          as="h3"
          fontSize={{ base: "lg", md: "xl" }}
          fontWeight="bold"
          color={textColor}
          className="career-title"
          noOfLines={2}
          lineHeight="shorter"
        >
          {title}
        </Heading>

        {/* Description */}
        <Text
          color={useColorModeValue("gray.600", "gray.300")}
          fontSize={{ base: "sm", md: "md" }}
          noOfLines={3}
          lineHeight="tall"
        >
          {description}
        </Text>
      </VStack>
    </MotionBox>
  );

  if (to) {
    return (
      <RouterLink to={to} style={{ display: "block", height: "100%" }}>
        {cardContent}
      </RouterLink>
    );
  }
  return cardContent;
};


export default function Homepage() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const headingSize = useBreakpointValue({ base: "2xl", md: "3xl", lg: "4xl" })
  const textSize = useBreakpointValue({ base: "md", md: "lg", lg: "xl" })
  const buttonSize = useBreakpointValue({ base: "sm", md: "md", lg: "lg" })
  const containerPadding = useBreakpointValue({ base: 4, md: 8, lg: 12 })

  const bgColor = useColorModeValue("gray.50", "gray.900")
  const textColor = useColorModeValue("black", "white")
  const bgGradient = useColorModeValue(
    "linear(to-br, rgba(0,0,0,0.5), rgba(255,255,255,0.2))",
    "linear(to-br, rgba(255,255,255,0.2), rgba(0,0,0,0.8))",
  )
    const navigate = useNavigate();
  const handleClick = () => {
    navigate("/it-courses"); // replace with your actual route
  };
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -50]);
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 1800);
    return () => clearTimeout(timer);
  }, []);
  return (
    <Box bg={bgColor} color={textColor} minHeight="100vh" overflowX="hidden">
      {/* Intro overlay before landing hero */}
      {showIntro && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#f3fbf7]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="flex flex-col items-center px-6 text-center"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 190, damping: 18 }}
          >
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-2xl md:text-3xl font-semibold tracking-wide text-emerald-900"
              style={{ fontFamily: '"London", serif' }}
            >
              Prefcol Edutech Solutions (OPC) Pvt Ltd
            </motion.p>
          </motion.div>
        </motion.div>
      )}

      <MotionFadeIn>
      <section className="page-section relative min-h-[70vh] md:min-h-[80vh] pt-20 pb-10 flex items-center bg-[#f3fbf7]">
        {/* Soft decorative blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            style={{ y: y1 }}
            className="absolute -top-10 -left-10 w-72 h-72 bg-emerald-200/40 rounded-full blur-3xl"
          />
          <motion.div
            style={{ y: y2 }}
            className="absolute -bottom-16 right-0 w-80 h-80 bg-teal-300/30 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 page-container max-w-7xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left: copy */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-left"
            >
              <p className="text-sm md:text-base font-semibold tracking-wide text-emerald-700 mb-3">
                Kick Start Your Career
              </p>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                <span className="text-slate-900">Kick Start</span>
                <br />
                <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                  Your Career!
                </span>
              </h1>

              <p className="text-base md:text-lg text-slate-700 mb-4 max-w-xl">
                Discover your potential with expert-led courses.
              </p>
              <p className="text-base md:text-lg text-slate-700 mb-1 max-w-xl">
                Practice what you learn in real time.
              </p>
              <p className="text-base md:text-lg text-slate-700 mb-6 max-w-xl">
                Earn recognition that opens doors.
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-8">
                <motion.button
                  whileHover={{ scale: 1.06, y: -2 }}
                  whileTap={{ scale: 0.97, y: 0 }}
                  transition={{ type: "spring", stiffness: 220, damping: 18 }}
                  onClick={handleClick}
                  className="group px-8 py-3 rounded-full bg-emerald-600 text-white font-semibold shadow-lg shadow-emerald-500/30 flex items-center gap-2"
                >
                  <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  <span>Start a Course</span>
                </motion.button>

                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <div className="flex -space-x-2">
                    <span className="w-8 h-8 rounded-full bg-emerald-200 border border-white" />
                    <span className="w-8 h-8 rounded-full bg-teal-200 border border-white" />
                    <span className="w-8 h-8 rounded-full bg-emerald-300 border border-white" />
                  </div>
                  <span>Trusted by 1,000+ learners</span>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap items-center gap-6 text-slate-700 text-sm md:text-base"
              >
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-400" fill="currentColor" />
                  <span>4.8/5 average rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-emerald-600" />
                  <span>Live mentor support</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-teal-600" />
                  <span>Industry‑recognized certificates</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right: hero image card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="relative mx-auto max-w-md">
                <div className="absolute -top-4 -left-4 w-24 h-24 rounded-3xl bg-emerald-200/60 blur-xl" />
                <div className="absolute -bottom-6 -right-6 w-28 h-28 rounded-full bg-teal-300/50 blur-xl" />

                <div className="relative rounded-[32px] bg-white shadow-2xl border border-emerald-50 overflow-hidden">
                  <div className="p-4 flex items-center justify-between">
                    <span className="text-sm font-semibold text-emerald-700">
                      Learn from anywhere
                    </span>
                    <span className="text-xs text-slate-400">Live & self-paced</span>
                  </div>

                  <div className="px-4 pb-4">
                    <AspectRatio ratio={3 / 4} className="rounded-2xl overflow-hidden bg-emerald-50">
                      <Image
                        src={FounderHero}
                        alt="Learner holding a laptop"
                        objectFit="contain"
                      />
                    </AspectRatio>

                    <div className="mt-4 flex items-center justify-between">
                      <div>
                        <p className="text-xs uppercase tracking-wide text-emerald-500 font-semibold">
                          Active learners
                        </p>
                        <p className="text-lg font-bold text-slate-900">1,235+</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-slate-500">Avg. completion</p>
                        <p className="text-lg font-semibold text-emerald-600">89%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      </MotionFadeIn>

      <Box as="section" py={{ base: 10, md: 16 }} px={{ base: 4, md: 0 }} position={"relative"} overflow="hidden">
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 8, md: 12, lg: 16 }} alignItems="center">
            <VStack align={{ base: "center", lg: "start" }} spacing={{ base: 4, md: 6 }}>
              <Box position="relative" width="100%" textAlign={{ base: "center", lg: "left" }}>
               
                <Heading
                  as="h2"
                  fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
                  fontWeight="bold"
                  color="black"
                  position="relative"
                  zIndex="1"
                >
                  Find Your Career Path
                </Heading>
              </Box>
              <Text
                fontSize={{ base: "md", md: "lg", lg: "xl" }}
                color="gray.600"
                textAlign={{ base: "center", lg: "left" }}
              >
                Explore our diverse range of courses and kickstart your career journey. Whether you want to dive into
                programming, finance, or data analysis, we have something for everyone!
              </Text>
              <Button
                as={RouterLink}
  to="/contact-us"
                size={{ base: "md", md: "lg" }}
                colorScheme="teal"
                fontWeight="semibold"
                px={{ base: 6, md: 8 }}
                py={{ base: 5, md: 6 }}
                bgColor={"teal.900"}
                rounded="full"
                _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
                transition="all 0.3s"
                rightIcon={<FaArrowRight />}
              >
                Get Started Today
              </Button>
            </VStack>

            <SimpleGrid  columns={{ base: 1, md: 2 }} spacing={{ base: 4, md: 8 }} w="100%">
                <RouterLink to="/it-courses">
              <CourseCard
                name="IT Courses"
                icon={FaLaptopCode}
                description="Explore our technology-focused courses including programming, web development, and more."
              /></RouterLink>
<RouterLink to="/Non_it-courses">
              <CourseCard
                name="Non-IT Courses"
                icon={FaGraduationCap}
                description="Discover our non-technical course offerings in business, design, and other fields."
              />
              </RouterLink>
            </SimpleGrid>
          </SimpleGrid>
        </Container>
      </Box>

      <Box className="py-10 px-4 sm:px-6 md:px-8 lg:px-10">
        <Container maxW="container.xl" p={0}>
          <Heading
            as="h1"
            fontSize={{ base: "2xl", sm: "3xl", md: "4xl", lg: "5xl" }}
            fontWeight="bold"
            mb={{ base: 6, sm: 8, md: 10 }}
            textAlign="center"
          >
            Career Path Guidance
          </Heading>

          <Flex direction={{ base: "column", lg: "row" }} gap={{ base: 6, sm: 8, md: 10 }} mb={{ base: 8, md: 12 }}>
            <Box flex="1">
              <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={{ base: 4, sm: 6, md: 8 }} h="100%">
                <CareerPathCard
                  to="/it-courses"
                  icon={<BarChart className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />}
                  title="IT Employed"
                  description="Advance your skills to close talent gaps and switch careers."
                />
                <CareerPathCard
                  icon={<Target className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />}
                  title="Fresh Graduates"
                  description="Get your hands-on in real-time projects and start your IT career."
                />
                <CareerPathCard
                  icon={<ArrowLeftRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />}
                  title="Return from Work Break"
                  description="Re-skill yourself to stay ahead of competitions and in trend."
                />
                <CareerPathCard
                  to="/Non_it-courses"
                  icon={<Laptop className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />}
                  title="Non IT to IT"
                  description="Learn, Get Certified with new demanding skills and Switch."
                />
              </SimpleGrid>
            </Box>

            <Box
              flex="1"
              position="relative"
              borderRadius="lg"
              overflow="hidden"
              boxShadow="lg"
              minH={{ base: "300px", md: "400px" }}
            >
              <AspectRatio ratio={16 / 9} minH="100%">
                <Box position="relative" w="100%" h="100%">
                  <Image
                    src={CareerHero || "/placeholder.svg"}
                    alt="Career Hero Background"
                    objectFit="cover"
                    objectPosition="center"
                    position="absolute"
                    top="0"
                    left="0"
                    w="100%"
                    h="100%"
                  />
                 <MotionBox
      position="relative"
      zIndex="10"
      p={{ base: 4, sm: 6, md: 8, lg: 10 }}
      bg="whiteAlpha.900"
      backdropFilter="blur(px)"
      h="100%"
      w="100%"
      borderRadius="lg"
      boxShadow="lg"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
      }}
    >
      <motion.div variants={fadeInUp}>
        <Heading
          as="h2"
          fontSize={{ base: "lg", sm: "xl", md: "2xl", lg: "3xl" }}
          fontWeight="bold"
          textAlign="center"
          mb={{ base: 4, sm: 5, md: 6 }}
        >
          How it helps?
        </Heading>
      </motion.div>
      <VStack
        spacing={{ base: 8, md: 24 }}
        padding={{ base: 4, sm: 6, md: 8, lg: 10 }}
        fontSize={{ base: "sm", sm: "md", md: "lg" }}
        textAlign="center"
      >
        <MotionText lineHeight="tall" variants={fadeInUp}>
          Early in your career, it is essential to chase skills rather than salary. At Chamber Of
          Learning, we provide practical experiences through visualized learning, hands-on projects,
          fostering a growth mindset, and nurturing problem-solving skills.
        </MotionText>
        <MotionText lineHeight="tall" variants={fadeInUp}>
          Later in your career, Chamber Of Learning helps you align your passions with your work. We
          empower you with vertical and horizontal skills to stay ahead in knowledge and finances. We work
          with you to grow your brand and network for ongoing success.
        </MotionText>
      </VStack>
    </MotionBox>
                </Box>
              </AspectRatio>
            </Box>
          </Flex>
        </Container>
      </Box>

      <Box bg="gray.100" py={{ base: 8, md: 12, lg: 16 }} px={{ base: 4, md: 0 }}>
        <Container maxW="container.xl">
          <Heading as="h2" fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }} textAlign="center" mb={{ base: 6, md: 10 }}>
            Course Statistics
          </Heading>
          <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing={{ base: 4, md: 6, lg: 8 }} px={{ base: 2, md: 0 }}>
            {stats.map((stat, index) => (
              <Box
                key={index}
                // bg="white"
                p={{ base: 2, md: 2 }}
                borderRadius=""
                // boxShadow="lg"
                _hover={{
                  transform: "translateY(-5px)",
                //   boxShadow: "xl",
                }}
                transition="all 0.3s"
                height="100%"
              >
                <AnimatedStat
                  title={stat.title}
                  count={stat.count}
                  description={stat.description}
                  duration={stat.duration}
                  color={stat.color}
                />
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent mx={{ base: 4, md: 0 }}>
          <ModalHeader>Welcome to Chamber Of Learning</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Thank you for choosing us to enhance your skills! We are excited to help you on your journey.</Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="teal" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  )
}

