
// import { useState, useRef, useEffect } from "react"
// import { motion } from "framer-motion"
// import {
//   Box,
//   Button,
//   Flex,
//   FormControl,
//   FormLabel,
//   Heading,
//   Input,
//   Select,
//   Text,
//   Textarea,
//   VStack,
//   HStack,
//   useToast,
//   Progress,
//   Icon,
//   SimpleGrid,
//   useColorModeValue,
//   FormErrorMessage,
//   Stepper,
//   Step,
//   StepIndicator,
//   StepStatus,
//   StepIcon,
//   StepNumber,
//   StepTitle,
//   StepDescription,
//   StepSeparator,
//   useSteps,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalBody,
//   ModalFooter,
//   ModalCloseButton,
//   Drawer,
//   DrawerBody,
//   DrawerFooter,
//   DrawerHeader,
//   DrawerOverlay,
//   DrawerContent,
//   DrawerCloseButton,
//   useBreakpointValue,
//   Accordion,
//   AccordionItem,
//   AccordionButton,
//   AccordionPanel,
//   AccordionIcon,
//   List,
//   ListItem,
//   ListIcon,
//   InputGroup,
//   InputLeftElement,
//   Badge,
// } from "@chakra-ui/react"
// import {
//   FiUser,
//   FiPhone,
//   FiMail,
//   FiBriefcase,
//   FiFile,
//   FiCheck,
//   FiArrowRight,
//   FiArrowLeft,
//   FiInfo,
//   FiMapPin,
//   FiCalendar,
//   FiClock,
//   FiDollarSign,
//   FiStar,
// } from "react-icons/fi"
// import { useLayoutEffect } from "react" // ← Make sure to import this

// // InputField Component
// const InputField = ({ icon, label, name, type, value, onChange, error, placeholder, isRequired = false }) => {
//   const focusBorderColor = useColorModeValue("orange.500", "orange.300")
//   const errorBorderColor = useColorModeValue("red.500", "red.300")
//   const bgColor = useColorModeValue("white", "gray.800")
//   const hoverBg = useColorModeValue("gray.50", "gray.700")

//   return (
//     <FormControl isInvalid={!!error} isRequired={isRequired}>
//       <FormLabel
//         htmlFor={name}
//         fontSize={{ base: "sm", md: "md" }}
//         fontWeight="medium"
//         color={useColorModeValue("gray.700", "gray.300")}
//         mb={2}
//       >
//         {label}
//       </FormLabel>
//       <InputGroup>
//         <InputLeftElement pointerEvents="none">
//           <Icon as={icon} color={error ? errorBorderColor : "gray.400"} />
//         </InputLeftElement>
//         <Input
//           type={type}
//           name={name}
//           id={name}
//           value={value}
//           onChange={onChange}
//           placeholder={placeholder}
//           bg={bgColor}
//           _hover={{ bg: hoverBg, borderColor: "gray.300" }}
//           _focus={{
//             borderColor: focusBorderColor,
//             boxShadow: `0 0 0 1px ${focusBorderColor}`,
//             bg: bgColor,
//           }}
//           borderColor={error ? errorBorderColor : "gray.200"}
//           transition="all 0.3s ease"
//           fontSize={{ base: "sm", md: "md" }}
//         />
//       </InputGroup>
//       <FormErrorMessage fontSize="xs" mt={1}>
//         {error}
//       </FormErrorMessage>
//     </FormControl>
//   )
// }

// // FileInput Component
// const FileInput = ({ icon, label, name, onChange, error, isRequired = false, value }) => {
//   const focusBorderColor = useColorModeValue("orange.500", "orange.300")
//   const errorBorderColor = useColorModeValue("red.500", "red.300")
//   const bgColor = useColorModeValue("white", "gray.800")
//   const hoverBg = useColorModeValue("gray.50", "gray.700")
//   const fileInputRef = useRef(null)

//   const handleButtonClick = () => {
//     fileInputRef.current?.click()
//   }

//   return (
//     <FormControl isInvalid={!!error} isRequired={isRequired}>
//       <FormLabel
//         htmlFor={name}
//         fontSize={{ base: "sm", md: "md" }}
//         fontWeight="medium"
//         color={useColorModeValue("gray.700", "gray.300")}
//         mb={2}
//       >
//         {label}
//       </FormLabel>
//       <Box position="relative">
//         <Input
//           type="file"
//           ref={fileInputRef}
//           id={name}
//           name={name}
//           onChange={onChange}
//           accept=".pdf,.doc,.docx"
//           display="none"
//         />
//         <Flex
//           border="1px solid"
//           borderColor={error ? errorBorderColor : "gray.200"}
//           borderRadius="md"
//           bg={bgColor}
//           _hover={{ bg: hoverBg, borderColor: "gray.300" }}
//           transition="all 0.3s ease"
//           overflow="hidden"
//         >
//           <Flex align="center" justify="center" bg={useColorModeValue("gray.100", "gray.700")} p={3}>
//             <Icon as={icon} color={error ? errorBorderColor : "gray.500"} />
//           </Flex>
//           <Box flex="1" p={2} pl={3} overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap">
//             {value ? value.name : "No file selected"}
//           </Box>
//           <Button type="button" onClick={handleButtonClick} size="sm" colorScheme="orange" m={1} px={4}>
//             Browse
//           </Button>
//         </Flex>
//       </Box>
//       <FormErrorMessage fontSize="xs" mt={1}>
//         {error}
//       </FormErrorMessage>
//       <Text fontSize="xs" color="gray.500" mt={1}>
//         Accepted formats: PDF, DOC, DOCX. Max size: 5MB
//       </Text>
//     </FormControl>
//   )
// }

// // JobDetails Component
// const JobDetails = ({ job }) => {
//   const bgColor = useColorModeValue("orange.50", "gray.700")
//   const borderColor = useColorModeValue("orange.200", "gray.600")

//   return (
//     <Box bg={bgColor} p={5} borderRadius="md" borderLeft="4px solid" borderColor={borderColor} boxShadow="sm">
//       <Heading size="md" mb={4} color={useColorModeValue("gray.800", "white")}>
//         {job?.title}
//       </Heading>
//       <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
//         <HStack spacing={2}>
//           <Icon as={FiBriefcase} color="gray.500" />
//           <Text fontWeight="medium">Department:</Text>
//           <Text>{job?.department}</Text>
//         </HStack>
//         <HStack spacing={2}>
//           <Icon as={FiMapPin} color="gray.500" />
//           <Text fontWeight="medium">Location:</Text>
//           <Text>{job?.location}</Text>
//         </HStack>
//         <HStack spacing={2}>
//           <Icon as={FiClock} color="gray.500" />
//           <Text fontWeight="medium">Type:</Text>
//           <Badge colorScheme="orange">{job?.type}</Badge>
//         </HStack>
//       </SimpleGrid>
//       <HStack mt={4} spacing={4}>
//         <HStack>
//           <Icon as={FiCalendar} color="gray.500" />
//           <Text fontSize="sm">Apply by: June 30, 2023</Text>
//         </HStack>
//         <HStack>
//           <Icon as={FiDollarSign} color="gray.500" />
//           <Text fontSize="sm">Competitive salary</Text>
//         </HStack>
//         <HStack>
//           <Icon as={FiStar} color="gray.500" />
//           <Text fontSize="sm">5+ years experience</Text>
//         </HStack>
//       </HStack>
//     </Box>
//   )
// }

// // JobRequirements Component
// const JobRequirements = () => {
//   const borderColor = useColorModeValue("teal.500", "teal.300")

//   return (
//     <Accordion allowToggle>
//       <AccordionItem border="none" boxShadow="sm" borderRadius="md" overflow="hidden" mb={4}>
//         <h2>
//           <AccordionButton
//             py={4}
//             bg={useColorModeValue("gray.50", "gray.700")}
//             _hover={{ bg: useColorModeValue("gray.100", "gray.600") }}
//           >
//             <Box flex="1" textAlign="left" fontWeight="bold">
//               Job Description & Requirements
//             </Box>
//             <AccordionIcon />
//           </AccordionButton>
//         </h2>
//         <AccordionPanel
//           pb={4}
//           pt={4}
//           borderLeft="1px solid"
//           borderRight="1px solid"
//           borderBottom="1px solid"
//           borderColor="gray.200"
//           borderBottomRadius="md"
//         >
//           <Text mb={4}>
//             We are seeking a talented and motivated professional to join our team. In this role, you will be responsible
//             for developing innovative solutions and collaborating with cross-functional teams to deliver exceptional
//             results.
//           </Text>
//           <Text fontWeight="bold" mb={3}>
//             Key Responsibilities:
//           </Text>
//           <List spacing={2} mb={4}>
//             <ListItem>
//               <ListIcon as={FiCheck} color={borderColor} />
//               Design and implement new features and functionality
//             </ListItem>
//             <ListItem>
//               <ListIcon as={FiCheck} color={borderColor} />
//               Collaborate with product managers and designers
//             </ListItem>
//             <ListItem>
//               <ListIcon as={FiCheck} color={borderColor} />
//               Write clean, maintainable, and efficient code
//             </ListItem>
//             <ListItem>
//               <ListIcon as={FiCheck} color={borderColor} />
//               Participate in code reviews and provide constructive feedback
//             </ListItem>
//           </List>
//           <Text fontWeight="bold" mb={3}>
//             Requirements:
//           </Text>
//           <List spacing={2}>
//             <ListItem>
//               <ListIcon as={FiCheck} color={borderColor} />
//               3+ years of experience in relevant field
//             </ListItem>
//             <ListItem>
//               <ListIcon as={FiCheck} color={borderColor} />
//               Strong knowledge of industry best practices
//             </ListItem>
//             <ListItem>
//               <ListIcon as={FiCheck} color={borderColor} />
//               Excellent communication and teamwork skills
//             </ListItem>
//             <ListItem>
//               <ListIcon as={FiCheck} color={borderColor} />
//               Bachelor's degree in a related field (or equivalent experience)
//             </ListItem>
//           </List>
//         </AccordionPanel>
//       </AccordionItem>
//     </Accordion>
//   )
// }

// // FormStepper Component
// const FormStepper = ({ activeStep, steps }) => {
//   const isMobile = useBreakpointValue({ base: true, md: false })
//   const stepperColor = useColorModeValue("orange.500", "orange.300")

//   return (
//     <Box mb={8}>
//       {isMobile ? (
//         <Flex justify="space-between" align="center" mb={4}>
//           {steps.map((step, index) => (
//             <VStack key={index} spacing={1} flex="1" position="relative">
//               <Box
//                 w="10px"
//                 h="10px"
//                 borderRadius="full"
//                 bg={index <= activeStep ? stepperColor : "gray.200"}
//                 zIndex={1}
//               />
//               {index < steps.length - 1 && (
//                 <Box
//                   position="absolute"
//                   h="2px"
//                   bg={index < activeStep ? stepperColor : "gray.200"}
//                   top="5px"
//                   right="-50%"
//                   w="100%"
//                 />
//               )}
//               <Text
//                 fontSize="xs"
//                 fontWeight={index === activeStep ? "bold" : "normal"}
//                 color={index === activeStep ? stepperColor : "gray.500"}
//                 textAlign="center"
//               >
//                 {step.title}
//               </Text>
//             </VStack>
//           ))}
//         </Flex>
//       ) : (
//         <Stepper index={activeStep} size="lg">
//           {steps.map((step, index) => (
//             <Step key={index}>
//               <StepIndicator>
//                 <StepStatus complete={<StepIcon />} incomplete={<StepNumber />} active={<StepNumber />} />
//               </StepIndicator>
//               <Box flexShrink="0">
//                 <StepTitle>{step.title}</StepTitle>
//                 <StepDescription>{step.description}</StepDescription>
//               </Box>
//               <StepSeparator />
//             </Step>
//           ))}
//         </Stepper>
//       )}
//     </Box>
//   )
// }

// // ApplicationForm Component
// const ApplicationForm = ({ isOpen, onClose, selectedJob, onSubmit }) => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     mobileNumber: "",
//     email: "",
//     profession: "",
//     resume: null,
//     coverLetter: "",
//   })

//   const [errors, setErrors] = useState({})
//   const [isLoading, setIsLoading] = useState(false)
//   const [uploadProgress, setUploadProgress] = useState(0)
//   const toast = useToast()
//   const isMobile = useBreakpointValue({ base: true, md: false })
//   const modalBg = useColorModeValue("white", "gray.800")
//   const headerBg = useColorModeValue("teal.900", "teal.900")
//   const textColor = useColorModeValue("gray.800", "white")
//  const modalBodyRef = useRef(null)
// const scrollPositionRef = useRef(0) // ← This will store the scroll position

//   const { activeStep, setActiveStep } = useSteps({
//     index: 0,
//     count: 3,
//   })

//   const steps = [
//     { title: "Personal Info", description: "Your basic details" },
//     { title: "Professional Info", description: "Your work experience" },
//     { title: "Additional Info", description: "Extra details" },
//   ]

//   const professions = [
//     "Software Engineer",
//     "Data Scientist",
//     "Product Manager",
//     "UX Designer",
//     "Marketing Specialist",
//     "Customer Success Manager",
//   ]

// const handleInputChange = (e) => {
//   const { name, value } = e.target

//   // ✅ Save current scroll position before updating state
//   if (modalBodyRef.current) {
//     scrollPositionRef.current = modalBodyRef.current.scrollTop
//   }

//   setFormData((prev) => ({ ...prev, [name]: value }))
//   setErrors((prev) => ({ ...prev, [name]: "" }))
// }

//  const handleFileChange = (e) => {
//   const file = e.target.files[0]

//   // ✅ Save scroll before updating
//   if (modalBodyRef.current) {
//     scrollPositionRef.current = modalBodyRef.current.scrollTop
//   }

//   if (file && file.size <= 5 * 1024 * 1024) {
//     setFormData((prev) => ({ ...prev, resume: file }))
//     setErrors((prev) => ({ ...prev, resume: "" }))
//   } else {
//     setErrors((prev) => ({ ...prev, resume: "File size should be less than 5MB" }))
//   }
// }


//   const validateForm = () => {
//     const newErrors = {}
//     if (!formData.firstName.trim()) newErrors.firstName = "First name is required"
//     if (!formData.lastName.trim()) newErrors.lastName = "Last name is required"
//     if (!/^\d{10}$/.test(formData.mobileNumber)) newErrors.mobileNumber = "Invalid mobile number"
//     if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email address"
//     if (!formData.profession) newErrors.profession = "Please select a profession"
//     if (!formData.resume) newErrors.resume = "Please upload your resume"
//     if (!formData.coverLetter.trim()) newErrors.coverLetter = "Cover letter is required"

//     setErrors(newErrors)
//     return Object.keys(newErrors).length === 0
//   }

//   const mockApiUpload = () => {
//     return new Promise((resolve) => {
//       const total = 100
//       let progress = 0
//       const interval = setInterval(() => {
//         if (progress < total) {
//           progress += 10
//           setUploadProgress(progress)
//         } else {
//           clearInterval(interval)
//           resolve({ message: "Upload successful!" })
//         }
//       }, 200)
//     })
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     if (validateForm()) {
//       setIsLoading(true)
//       setUploadProgress(0)
//       try {
//         await mockApiUpload()
//         toast({
//           title: "Application submitted!",
//           description: "We'll be in touch soon.",
//           status: "success",
//           duration: 5000,
//           isClosable: true,
//           position: "top",
//         })
//         onSubmit(formData)
//         onClose() // Close modal after success
//       } catch (error) {
//         toast({
//           title: "Submission failed",
//           description: error.message || "Something went wrong",
//           status: "error",
//           duration: 5000,
//           isClosable: true,
//           position: "top",
//         })
//       } finally {
//         setIsLoading(false)
//       }
//     } else {
//       toast({
//         title: "Form has errors",
//         description: "Please correct the errors in the form.",
//         status: "error",
//         duration: 5000,
//         isClosable: true,
//         position: "top",
//       })
//     }
//   }

//   const handleNext = () => {
//     if (activeStep === 0) {
//       const newErrors = {}
//       if (!formData.firstName.trim()) newErrors.firstName = "First name is required"
//       if (!formData.lastName.trim()) newErrors.lastName = "Last name is required"
//       if (!/^\d{10}$/.test(formData.mobileNumber)) newErrors.mobileNumber = "Invalid mobile number"
//       if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email address"
//       setErrors(newErrors)
//       if (Object.keys(newErrors).length > 0) return
//     }
//     setActiveStep((prev) => prev + 1)
//   }

//   const handlePrev = () => {
//     setActiveStep((prev) => prev - 1)
//   }

  
//   // Initialize form data when modal opens
//  useEffect(() => {
//   if (isOpen) {
//     setFormData(prev => ({
//       ...prev,
//       profession: selectedJob?.department || "",
//     }))
//   }
// }, [isOpen, selectedJob])

//   // Reset form when modal closes
//   useEffect(() => {
//     if (!isOpen) {
//       setFormData({
//         firstName: "",
//         lastName: "",
//         mobileNumber: "",
//         email: "",
//         profession: "",
//         resume: null,
//         coverLetter: "",
//       })
//       setErrors({})
//       setActiveStep(0)
//       setUploadProgress(0)
//     }
//   }, [isOpen])



//   const FormContent = () => {
//     return (
//       <Box ref={modalBodyRef} overflowY="auto" px={{ base: 2, md: 6 }} py={6}>
//         <VStack spacing={8} align="stretch">
//           <JobDetails job={selectedJob} />
//           <JobRequirements />
//           <Box>
//             <Heading as="h3" size="md" mb={6} color={textColor}>
//               Application Form
//             </Heading>
//             <FormStepper activeStep={activeStep} steps={steps} />
//             <form onSubmit={handleSubmit}>
//               <Box>
//                 {activeStep === 0 && (
//                   <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0 }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     <VStack spacing={6} align="stretch">
//                       <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
//                         <InputField
//                           icon={FiUser}
//                           label="First Name"
//                           name="firstName"
//                           type="text"
//                           value={formData.firstName}
//                           onChange={handleInputChange}
//                           error={errors.firstName}
//                           placeholder="John"
//                           isRequired
//                         />
//                         <InputField
//                           icon={FiUser}
//                           label="Last Name"
//                           name="lastName"
//                           type="text"
//                           value={formData.lastName}
//                           onChange={handleInputChange}
//                           error={errors.lastName}
//                           placeholder="Doe"
//                           isRequired
//                         />
//                       </SimpleGrid>
//                       <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
//                         <InputField
//                           icon={FiPhone}
//                           label="Mobile Number"
//                           name="mobileNumber"
//                           type="tel"
//                           value={formData.mobileNumber}
//                           onChange={handleInputChange}
//                           error={errors.mobileNumber}
//                           placeholder="1234567890"
//                           isRequired
//                         />
//                         <InputField
//                           icon={FiMail}
//                           label="Email"
//                           name="email"
//                           type="email"
//                           value={formData.email}
//                           onChange={handleInputChange}
//                           error={errors.email}
//                           placeholder="john@example.com"
//                           isRequired
//                         />
//                       </SimpleGrid>
//                     </VStack>
//                   </motion.div>
//                 )}

//                 {activeStep === 1 && (
//                   <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0 }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     <VStack spacing={6} align="stretch">
//                       <FormControl isInvalid={!!errors.profession} isRequired>
//                         <FormLabel
//                           htmlFor="profession"
//                           fontSize={{ base: "sm", md: "md" }}
//                           fontWeight="medium"
//                           color={useColorModeValue("gray.700", "gray.300")}
//                         >
//                           Profession
//                         </FormLabel>
//                         <InputGroup>
//                           <InputLeftElement pointerEvents="none">
//                             <Icon as={FiBriefcase} color={errors.profession ? "red.500" : "gray.400"} />
//                           </InputLeftElement>
//                           <Select
//                             id="profession"
//                             name="profession"
//                             value={formData.profession}
//                             onChange={handleInputChange}
//                             placeholder="Select your profession"
//                             pl={10}
//                             bg={useColorModeValue("white", "gray.800")}
//                             _hover={{ bg: useColorModeValue("gray.50", "gray.700") }}
//                             borderColor={errors.profession ? "red.500" : "gray.200"}
//                           >
//                             {professions.map((prof) => (
//                               <option key={prof} value={prof}>
//                                 {prof}
//                               </option>
//                             ))}
//                           </Select>
//                         </InputGroup>
//                         <FormErrorMessage fontSize="xs">{errors.profession}</FormErrorMessage>
//                       </FormControl>
//                       <FileInput
//                         icon={FiFile}
//                         label="Upload Resume"
//                         name="resume"
//                         onChange={handleFileChange}
//                         error={errors.resume}
//                         isRequired
//                         value={formData.resume}
//                       />
//                       <Box
//                         p={4}
//                         bg={useColorModeValue("blue.50", "blue.900")}
//                         borderRadius="md"
//                         borderLeft="4px solid"
//                         borderColor={useColorModeValue("blue.400", "blue.500")}
//                       >
//                         <HStack spacing={3} align="flex-start">
//                           <Icon as={FiInfo} color={useColorModeValue("blue.500", "blue.300")} mt={1} />
//                           <Text fontSize="sm">
//                             Your resume should highlight your relevant experience, skills, and achievements. Make sure
//                             it's up-to-date and tailored to the position you're applying for.
//                           </Text>
//                         </HStack>
//                       </Box>
//                     </VStack>
//                   </motion.div>
//                 )}

//                 {activeStep === 2 && (
//                   <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0 }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     <VStack spacing={6} align="stretch">
//                       <FormControl isInvalid={!!errors.coverLetter} isRequired>
//                         <FormLabel
//                           htmlFor="coverLetter"
//                           fontSize={{ base: "sm", md: "md" }}
//                           fontWeight="medium"
//                           color={useColorModeValue("gray.700", "gray.300")}
//                         >
//                           Cover Letter
//                         </FormLabel>
//                         <Textarea
//                           id="coverLetter"
//                           name="coverLetter"
//                           value={formData.coverLetter}
//                           onChange={handleInputChange}
//                           placeholder="Tell us why you're a great fit for this position..."
//                           rows={8}
//                           bg={useColorModeValue("white", "gray.800")}
//                           _hover={{ bg: useColorModeValue("gray.50", "gray.700") }}
//                           _focus={{
//                             borderColor: "orange.900",
//                             boxShadow: "0 0 0 1px orange.500",
//                             bg: useColorModeValue("white", "gray.800"),
//                           }}
//                           borderColor={errors.coverLetter ? "red.500" : "gray.200"}
//                           fontSize={{ base: "sm", md: "md" }}
//                         />
//                         <FormErrorMessage fontSize="xs">{errors.coverLetter}</FormErrorMessage>
//                       </FormControl>
//                       <Box
//                         p={4}
//                         bg={useColorModeValue("green.50", "green.900")}
//                         borderRadius="md"
//                         borderLeft="4px solid"
//                         borderColor={useColorModeValue("green.400", "green.500")}
//                       >
//                         <VStack align="flex-start" spacing={2}>
//                           <HStack spacing={3}>
//                             <Icon as={FiInfo} color={useColorModeValue("green.500", "green.300")} />
//                             <Text fontWeight="medium" fontSize="sm">
//                               Tips for a great cover letter:
//                             </Text>
//                           </HStack>
//                           <List spacing={1} pl={8} fontSize="sm">
//                             <ListItem>
//                               <ListIcon as={FiCheck} color={useColorModeValue("green.500", "green.300")} />
//                               Explain why you're interested in this position
//                             </ListItem>
//                             <ListItem>
//                               <ListIcon as={FiCheck} color={useColorModeValue("green.500", "green.300")} />
//                               Highlight your most relevant skills and experiences
//                             </ListItem>
//                             <ListItem>
//                               <ListIcon as={FiCheck} color={useColorModeValue("green.500", "green.300")} />
//                               Show how you can add value to the company
//                             </ListItem>
//                           </List>
//                         </VStack>
//                       </Box>
//                     </VStack>
//                   </motion.div>
//                 )}

//                 {isLoading && (
//                   <Box mt={6}>
//                     <Text mb={2} fontSize="sm">
//                       Uploading: {uploadProgress}%
//                     </Text>
//                     <Progress
//                       value={uploadProgress}
//                       size="sm"
//                       colorScheme="teal"
//                       borderRadius="full"
//                       hasStripe
//                       isAnimated
//                     />
//                   </Box>
//                 )}
//               </Box>
//             </form>
//           </Box>
//         </VStack>
//       </Box>
//     )
//   }

//   const FormFooter = () => (
//     <Flex
//       justify="space-between"
//       pt={4}
//       pb={4}
//       px={{ base: 4, md: 6 }}
//       borderTop="1px solid"
//       borderColor={useColorModeValue("gray.200", "gray.700")}
//       bg={useColorModeValue("gray.50", "gray.900")}
//     >
//       <Button
//         onClick={handlePrev}
//         isDisabled={activeStep === 0}
//         leftIcon={<FiArrowLeft />}
//         variant="outline"
//         size={{ base: "sm", md: "md" }}
//         fontWeight="medium"
//         type="button"
//       >
//         Previous
//       </Button>
//       {activeStep < steps.length - 1 ? (
//         <Button
//           onClick={handleNext}
//           rightIcon={<FiArrowRight />}
//           color="white"
//           bg="teal.900"
//           size={{ base: "sm", md: "md" }}
//           fontWeight="medium"
//           type="button"
//         >
//           Next Step
//         </Button>
//       ) : (
//         <Button
//         type="button" 
//           onClick={handleSubmit}
//           color="white"
//           bg="teal.900"
//           isLoading={isLoading}
//           loadingText="Submitting"
//           size={{ base: "sm", md: "md" }}
//           fontWeight="medium"
      
//         >
//           Submit Application
//         </Button>
//       )}
//     </Flex>
//   )

//   if (isMobile) {
//     return (
//       <Drawer isOpen={isOpen} onClose={onClose} placement="right" size="full" autoFocus={false}
//   trapFocus={false}>
//         <DrawerOverlay />
//         <DrawerContent>
//           <DrawerHeader
//             bg={headerBg}
//             color="white"
//             py={4}
//             px={4}
//             position="sticky"
//             top={0}
//             zIndex={10}
//             boxShadow="md"
//           >
//             <Flex justify="space-between" align="center">
//               <VStack align="flex-start" spacing={0}>
//                 <Heading size="md" noOfLines={1}>
//                   Apply for {selectedJob?.title}
//                 </Heading>
//                 <Text fontSize="xs" opacity={0.8}>
//                   Complete the form below to apply
//                 </Text>
//               </VStack>
//               <DrawerCloseButton position="static" color="white" />
//             </Flex>
//           </DrawerHeader>
//           <DrawerBody p={0} overflowY="auto" ref={modalBodyRef}>
//             <FormContent />
//           </DrawerBody>
//           <DrawerFooter p={0} position="sticky" bottom={0} zIndex={10} boxShadow="0 -2px 10px rgba(0,0,0,0.05)">
//             <FormFooter />
//           </DrawerFooter>
//         </DrawerContent>
//       </Drawer>
//     )
//   }

//   return (
//     <Modal isOpen={isOpen} onClose={onClose} size={{ base: "full", md: "4xl" }}  autoFocus={false}
//   trapFocus={false} scrollBehavior="outside" >
//       <ModalOverlay  />
//       <ModalContent
//         maxW={{ base: "100%", md: "900px" }}
//         maxH={{ base: "100vh", md: "90vh" }}
//         my={{ base: 0, md: "auto" }}
//         borderRadius={{ base: 0, md: "md" }}
//       >
//         <ModalHeader
//           bg={headerBg}
//           color="white"
//           py={4}
//           px={6}
//           borderTopRadius={{ base: 0, md: "md" }}
//           position="sticky"
//           top={0}
//           zIndex={10}
//           boxShadow="md"

//         >
//           <Flex justify="space-between" align="center">
//             <VStack align="flex-start" spacing={0}>
//               <Heading size="md" noOfLines={1}>
//                 Apply for {selectedJob?.title}
//               </Heading>
//               <Text fontSize="xs" opacity={0.8}>
//                 Complete the form below to apply
//               </Text>
//             </VStack>
//             <ModalCloseButton position="static" color="white" />
//           </Flex>
//         </ModalHeader>
//         <ModalBody
//           p={0}
//           maxH="calc(90vh - 140px)"
//           overflowY="auto"
//           ref={modalBodyRef}
//           css={{
//             "&::-webkit-scrollbar": {
//               width: "8px",
//             },
//             "&::-webkit-scrollbar-track": {
//               background: useColorModeValue("rgba(0,0,0,0.05)", "rgba(255,255,255,0.05)"),
//             },
//             "&::-webkit-scrollbar-thumb": {
//               background: useColorModeValue("rgba(0,0,0,0.2)", "rgba(255,255,255,0.2)"),
//               borderRadius: "4px",
//             },
//             "&::-webkit-scrollbar-thumb:hover": {
//               background: useColorModeValue("rgba(0,0,0,0.3)", "rgba(255,255,255,0.3)"),
//             },
//             scrollbarWidth: "thin",
//             scrollbarColor: `${useColorModeValue("rgba(0,0,0,0.2)", "rgba(255,255,255,0.2)")}`,
//           }}
//         >
//           <FormContent />
//         </ModalBody>
//         <ModalFooter
//           p={0}
//           position="sticky"
//           bottom={0}
//           zIndex={10}
//           boxShadow="0 -2px 10px rgba(0,0,0,0.05)"
//           borderBottomRadius={{ base: 0, md: "md" }}
//         >
//           <FormFooter />
//         </ModalFooter>
//       </ModalContent>
//     </Modal>
//   )
// }

// export default ApplicationForm

// import { useState, useRef, useEffect, useLayoutEffect } from "react"
// import { motion } from "framer-motion"
// import {
//   Box,
//   Button,
//   Flex,
//   FormControl,
//   FormLabel,
//   Heading,
//   Input,
//   Select,
//   Text,
//   Textarea,
//   VStack,
//   HStack,
//   useToast,
//   Progress,
//   Icon,
//   SimpleGrid,
//   useColorModeValue,
//   FormErrorMessage,
//   Stepper,
//   Step,
//   StepIndicator,
//   StepStatus,
//   StepIcon,
//   StepNumber,
//   StepTitle,
//   StepDescription,
//   StepSeparator,
//   useSteps,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalBody,
//   ModalFooter,
//   ModalCloseButton,
//   Drawer,
//   DrawerBody,
//   DrawerFooter,
//   DrawerHeader,
//   DrawerOverlay,
//   DrawerContent,
//   DrawerCloseButton,
//   useBreakpointValue,
//   Accordion,
//   AccordionItem,
//   AccordionButton,
//   AccordionPanel,
//   AccordionIcon,
//   List,
//   ListItem,
//   ListIcon,
//   InputGroup,
//   InputLeftElement,
//   Badge,
// } from "@chakra-ui/react"
// import {
//   FiUser,
//   FiPhone,
//   FiMail,
//   FiBriefcase,
//   FiFile,
//   FiCheck,
//   FiArrowRight,
//   FiArrowLeft,
//   FiInfo,
//   FiMapPin,
//   FiCalendar,
//   FiClock,
//   FiDollarSign,
//   FiStar,
// } from "react-icons/fi"

// // InputField Component
// const InputField = ({ icon, label, name, type, value, onChange, error, placeholder, isRequired = false }) => {
//   const focusBorderColor = useColorModeValue("orange.500", "orange.300")
//   const errorBorderColor = useColorModeValue("red.500", "red.300")
//   const bgColor = useColorModeValue("white", "gray.800")
//   const hoverBg = useColorModeValue("gray.50", "gray.700")

//   return (
//     <FormControl isInvalid={!!error} isRequired={isRequired}>
//       <FormLabel
//         htmlFor={name}
//         fontSize={{ base: "sm", md: "md" }}
//         fontWeight="medium"
//         color={useColorModeValue("gray.700", "gray.300")}
//         mb={2}
//       >
//         {label}
//       </FormLabel>
//       <InputGroup>
//         <InputLeftElement pointerEvents="none">
//           <Icon as={icon} color={error ? errorBorderColor : "gray.400"} />
//         </InputLeftElement>
//         <Input
//           type={type}
//           name={name}
//           id={name}
//           value={value}
//           onChange={onChange}
//           placeholder={placeholder}
//           bg={bgColor}
//           _hover={{ bg: hoverBg, borderColor: "gray.300" }}
//           _focus={{
//             borderColor: focusBorderColor,
//             boxShadow: `0 0 0 1px ${focusBorderColor}`,
//             bg: bgColor,
//           }}
//           borderColor={error ? errorBorderColor : "gray.200"}
//           transition="all 0.3s ease"
//           fontSize={{ base: "sm", md: "md" }}
//         />
//       </InputGroup>
//       <FormErrorMessage fontSize="xs" mt={1}>
//         {error}
//       </FormErrorMessage>
//     </FormControl>
//   )
// }

// // FileInput Component
// const FileInput = ({ icon, label, name, onChange, error, isRequired = false, value }) => {
//   const focusBorderColor = useColorModeValue("orange.500", "orange.300")
//   const errorBorderColor = useColorModeValue("red.500", "red.300")
//   const bgColor = useColorModeValue("white", "gray.800")
//   const hoverBg = useColorModeValue("gray.50", "gray.700")
//   const fileInputRef = useRef(null)

//   const handleButtonClick = () => {
//     fileInputRef.current?.click()
//   }

//   return (
//     <FormControl isInvalid={!!error} isRequired={isRequired}>
//       <FormLabel
//         htmlFor={name}
//         fontSize={{ base: "sm", md: "md" }}
//         fontWeight="medium"
//         color={useColorModeValue("gray.700", "gray.300")}
//         mb={2}
//       >
//         {label}
//       </FormLabel>
//       <Box position="relative">
//         <Input
//           type="file"
//           ref={fileInputRef}
//           id={name}
//           name={name}
//           onChange={onChange}
//           accept=".pdf,.doc,.docx"
//           display="none"
//         />
//         <Flex
//           border="1px solid"
//           borderColor={error ? errorBorderColor : "gray.200"}
//           borderRadius="md"
//           bg={bgColor}
//           _hover={{ bg: hoverBg, borderColor: "gray.300" }}
//           transition="all 0.3s ease"
//           overflow="hidden"
//         >
//           <Flex align="center" justify="center" bg={useColorModeValue("gray.100", "gray.700")} p={3}>
//             <Icon as={icon} color={error ? errorBorderColor : "gray.500"} />
//           </Flex>
//           <Box flex="1" p={2} pl={3} overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap">
//             {value ? value.name : "No file selected"}
//           </Box>
//           <Button onClick={handleButtonClick} size="sm" colorScheme="orange" m={1} px={4}>
//             Browse
//           </Button>
//         </Flex>
//       </Box>
//       <FormErrorMessage fontSize="xs" mt={1}>
//         {error}
//       </FormErrorMessage>
//       <Text fontSize="xs" color="gray.500" mt={1}>
//         Accepted formats: PDF, DOC, DOCX. Max size: 5MB
//       </Text>
//     </FormControl>
//   )
// }

// // JobDetails Component
// const JobDetails = ({ job }) => {
//   const bgColor = useColorModeValue("orange.50", "gray.700")
//   const borderColor = useColorModeValue("orange.200", "gray.600")

//   return (
//     <Box bg={bgColor} p={5} borderRadius="md" borderLeft="4px solid" borderColor={borderColor} boxShadow="sm">
//       <Heading size="md" mb={4} color={useColorModeValue("gray.800", "white")}>
//         {job?.title}
//       </Heading>
//       <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
//         <HStack spacing={2}>
//           <Icon as={FiBriefcase} color="gray.500" />
//           <Text fontWeight="medium">Department:</Text>
//           <Text>{job?.department}</Text>
//         </HStack>
//         <HStack spacing={2}>
//           <Icon as={FiMapPin} color="gray.500" />
//           <Text fontWeight="medium">Location:</Text>
//           <Text>{job?.location}</Text>
//         </HStack>
//         <HStack spacing={2}>
//           <Icon as={FiClock} color="gray.500" />
//           <Text fontWeight="medium">Type:</Text>
//           <Badge colorScheme="orange">{job?.type}</Badge>
//         </HStack>
//       </SimpleGrid>
//       <HStack mt={4} spacing={4}>
//         <HStack>
//           <Icon as={FiCalendar} color="gray.500" />
//           <Text fontSize="sm">Apply by: June 30, 2023</Text>
//         </HStack>
//         <HStack>
//           <Icon as={FiDollarSign} color="gray.500" />
//           <Text fontSize="sm">Competitive salary</Text>
//         </HStack>
//         <HStack>
//           <Icon as={FiStar} color="gray.500" />
//           <Text fontSize="sm">5+ years experience</Text>
//         </HStack>
//       </HStack>
//     </Box>
//   )
// }

// // JobRequirements Component
// const JobRequirements = () => {
//   const borderColor = useColorModeValue("teal.500", "teal.300")

//   return (
//     <Accordion allowToggle>
//       <AccordionItem border="none" boxShadow="sm" borderRadius="md" overflow="scroll" mb={4}>
//         <h2>
//           <AccordionButton
//             py={4}
//             bg={useColorModeValue("gray.50", "gray.700")}
//             _hover={{ bg: useColorModeValue("gray.100", "gray.600") }}
//           >
//             <Box flex="1" textAlign="left" fontWeight="bold">
//               Job Description & Requirements
//             </Box>
//             <AccordionIcon />
//           </AccordionButton>
//         </h2>
//         <AccordionPanel
//           pb={4}
//           pt={4}
//           borderLeft="1px solid"
//           borderRight="1px solid"
//           borderBottom="1px solid"
//           borderColor="gray.200"
//           borderBottomRadius="md"
//         >
//           <Text mb={4}>
//             We are seeking a talented and motivated professional to join our team. In this role, you will be responsible
//             for developing innovative solutions and collaborating with cross-functional teams to deliver exceptional
//             results.
//           </Text>
//           <Text fontWeight="bold" mb={3}>
//             Key Responsibilities:
//           </Text>
//           <List spacing={2} mb={4}>
//             <ListItem>
//               <ListIcon as={FiCheck} color={borderColor} />
//               Design and implement new features and functionality
//             </ListItem>
//             <ListItem>
//               <ListIcon as={FiCheck} color={borderColor} />
//               Collaborate with product managers and designers
//             </ListItem>
//             <ListItem>
//               <ListIcon as={FiCheck} color={borderColor} />
//               Write clean, maintainable, and efficient code
//             </ListItem>
//             <ListItem>
//               <ListIcon as={FiCheck} color={borderColor} />
//               Participate in code reviews and provide constructive feedback
//             </ListItem>
//           </List>
//           <Text fontWeight="bold" mb={3}>
//             Requirements:
//           </Text>
//           <List spacing={2}>
//             <ListItem>
//               <ListIcon as={FiCheck} color={borderColor} />
//               3+ years of experience in relevant field
//             </ListItem>
//             <ListItem>
//               <ListIcon as={FiCheck} color={borderColor} />
//               Strong knowledge of industry best practices
//             </ListItem>
//             <ListItem>
//               <ListIcon as={FiCheck} color={borderColor} />
//               Excellent communication and teamwork skills
//             </ListItem>
//             <ListItem>
//               <ListIcon as={FiCheck} color={borderColor} />
//               Bachelor's degree in a related field (or equivalent experience)
//             </ListItem>
//           </List>
//         </AccordionPanel>
//       </AccordionItem>
//     </Accordion>
//   )
// }

// // FormStepper Component
// const FormStepper = ({ activeStep, steps }) => {
//   const isMobile = useBreakpointValue({ base: true, md: false })
//   const stepperColor = useColorModeValue("orange.500", "orange.300")

//   return (
//     <Box mb={8}>
//       {isMobile ? (
//         <Flex justify="space-between" align="center" mb={4}>
//           {steps.map((step, index) => (
//             <VStack key={index} spacing={1} flex="1" position="relative">
//               <Box
//                 w="10px"
//                 h="10px"
//                 borderRadius="full"
//                 bg={index <= activeStep ? stepperColor : "gray.200"}
//                 zIndex={1}
//               />
//               {index < steps.length - 1 && (
//                 <Box
//                   position="absolute"
//                   h="2px"
//                   bg={index < activeStep ? stepperColor : "gray.200"}
//                   top="5px"
//                   right="-50%"
//                   w="100%"
//                 />
//               )}
//               <Text
//                 fontSize="xs"
//                 fontWeight={index === activeStep ? "bold" : "normal"}
//                 color={index === activeStep ? stepperColor : "gray.500"}
//                 textAlign="center"
//               >
//                 {step.title}
//               </Text>
//             </VStack>
//           ))}
//         </Flex>
//       ) : (
//         <Stepper index={activeStep} size="lg">
//           {steps.map((step, index) => (
//             <Step key={index}>
//               <StepIndicator>
//                 <StepStatus complete={<StepIcon />} incomplete={<StepNumber />} active={<StepNumber />} />
//               </StepIndicator>
//               <Box flexShrink="0">
//                 <StepTitle>{step.title}</StepTitle>
//                 <StepDescription>{step.description}</StepDescription>
//               </Box>
//               <StepSeparator />
//             </Step>
//           ))}
//         </Stepper>
//       )}
//     </Box>
//   )
// }

// // ApplicationForm Component
// const ApplicationForm = ({ isOpen, onClose, selectedJob, onSubmit }) => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     mobileNumber: "",
//     email: "",
//     profession: "",
//     resume: null,
//     coverLetter: "",
//   })

//   const [errors, setErrors] = useState({})
//   const [isLoading, setIsLoading] = useState(false)
//   const [uploadProgress, setUploadProgress] = useState(0)
//   const toast = useToast()
//   const isMobile = useBreakpointValue({ base: true, md: false })
//   const headerBg = useColorModeValue("teal.900", "teal.900")
//   const textColor = useColorModeValue("gray.800", "white")
//   const modalBodyRef = useRef(null)
//   const scrollPositionRef = useRef(0) // ←←←←←←←←←←←←←←←←←←←←

//   const { activeStep, setActiveStep } = useSteps({
//     index: 0,
//     count: 3,
//   })

//   const steps = [
//     { title: "Personal Info", description: "Your basic details" },
//     { title: "Professional Info", description: "Your work experience" },
//     { title: "Additional Info", description: "Extra details" },
//   ]

//   const professions = [
//     "Software Engineer",
//     "Data Scientist",
//     "Product Manager",
//     "UX Designer",
//     "Marketing Specialist",
//     "Customer Success Manager",
//   ]

//   // ✅ Save scroll before state update
//   const handleInputChange = (e) => {
//     const { name, value } = e.target
//     if (modalBodyRef.current) {
//       scrollPositionRef.current = modalBodyRef.current.scrollTop
//     }
//     setFormData({ ...formData, [name]: value })
//     setErrors((prev) => ({ ...prev, [name]: "" }))
//   }

//   const handleFileChange = (e) => {
//     const file = e.target.files[0]
//     if (modalBodyRef.current) {
//       scrollPositionRef.current = modalBodyRef.current.scrollTop
//     }
//     if (file && file.size <= 5 * 1024 * 1024) {
//       setFormData((prev) => ({ ...prev, resume: file }))
//       setErrors((prev) => ({ ...prev, resume: "" }))
//     } else {
//       setErrors((prev) => ({ ...prev, resume: "File size should be less than 5MB" }))
//     }
//   }

//   const validateForm = () => {
//     const newErrors = {}
//     if (!formData.firstName.trim()) newErrors.firstName = "First name is required"
//     if (!formData.lastName.trim()) newErrors.lastName = "Last name is required"
//     if (!/^\d{10}$/.test(formData.mobileNumber)) newErrors.mobileNumber = "Invalid mobile number"
//     if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email address"
//     if (!formData.profession) newErrors.profession = "Please select a profession"
//     if (!formData.resume) newErrors.resume = "Please upload your resume"
//     if (!formData.coverLetter.trim()) newErrors.coverLetter = "Cover letter is required"
//     setErrors(newErrors)
//     return Object.keys(newErrors).length === 0
//   }

//   const mockApiUpload = () => {
//     return new Promise((resolve) => {
//       const total = 100
//       let progress = 0
//       const interval = setInterval(() => {
//         if (progress < total) {
//           progress += 10
//           setUploadProgress(progress)
//         } else {
//           clearInterval(interval)
//           resolve({ message: "Upload successful!" })
//         }
//       }, 200)
//     })
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     if (validateForm()) {
//       setIsLoading(true)
//       setUploadProgress(0)
//       try {
//         await mockApiUpload()
//         toast({
//           title: "Application submitted!",
//           description: "We'll be in touch soon.",
//           status: "success",
//           duration: 5000,
//           isClosable: true,
//           position: "top",
//         })
//         onSubmit(formData)
//         onClose()
//       } catch (error) {
//         toast({
//           title: "Submission failed",
//           description: error.message || "Something went wrong",
//           status: "error",
//           duration: 5000,
//           isClosable: true,
//           position: "top",
//         })
//       } finally {
//         setIsLoading(false)
//       }
//     } else {
//       toast({
//         title: "Form has errors",
//         description: "Please correct the errors in the form.",
//         status: "error",
//         duration: 5000,
//         isClosable: true,
//         position: "top",
//       })
//     }
//   }

//   const handleNext = () => {
//     if (activeStep === 0) {
//       const newErrors = {}
//       if (!formData.firstName.trim()) newErrors.firstName = "First name is required"
//       if (!formData.lastName.trim()) newErrors.lastName = "Last name is required"
//       if (!/^\d{10}$/.test(formData.mobileNumber)) newErrors.mobileNumber = "Invalid mobile number"
//       if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email address"
//       setErrors(newErrors)
//       if (Object.keys(newErrors).length > 0) return
//     }
//     setActiveStep((prev) => prev + 1)
//   }

//   const handlePrev = () => {
//     setActiveStep((prev) => prev - 1)
//   }

//   // ✅ Initialize form data when modal opens
//   useEffect(() => {
//     if (isOpen) {
//       setFormData((prev) => ({
//         ...prev,
//         profession: selectedJob?.department || "",
//       }))
//     }
//   }, [isOpen, selectedJob])

//   // ✅ Reset form when modal closes
//   useEffect(() => {
//     if (!isOpen) {
//       setFormData({
//         firstName: "",
//         lastName: "",
//         mobileNumber: "",
//         email: "",
//         profession: "",
//         resume: null,
//         coverLetter: "",
//       })
//       setErrors({})
//       setActiveStep(0)
//       setUploadProgress(0)
//     }
//   }, [isOpen])

//   // ✅ Restore scroll after every render
//   useLayoutEffect(() => {
//     if (modalBodyRef.current && scrollPositionRef.current > 0) {
//       modalBodyRef.current.scrollTop = scrollPositionRef.current
//     }
//   }, [formData, errors, activeStep])

//   const FormContent = () => (
//     <Box ref={modalBodyRef} overflowY="auto" px={{ base: 2, md: 6 }} py={6}>
//       <VStack spacing={8} align="stretch">
//         <JobDetails job={selectedJob} />
//         <JobRequirements />
//         <Box>
//           <Heading as="h3" size="md" mb={6} color={textColor}>
//             Application Form
//           </Heading>
//           <FormStepper activeStep={activeStep} steps={steps} />
//           <form onSubmit={handleSubmit}>
//             <Box>
//               {activeStep === 0 && (
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <VStack spacing={6} align="stretch">
//                     <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
//                       <InputField
//                         icon={FiUser}
//                         label="First Name"
//                         name="firstName"
//                         type="text"
//                         value={formData.firstName}
//                         onChange={handleInputChange}
//                         error={errors.firstName}
//                         placeholder="John"
//                         isRequired
//                       />
//                       <InputField
//                         icon={FiUser}
//                         label="Last Name"
//                         name="lastName"
//                         type="text"
//                         value={formData.lastName}
//                         onChange={handleInputChange}
//                         error={errors.lastName}
//                         placeholder="Doe"
//                         isRequired
//                       />
//                     </SimpleGrid>
//                     <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
//                       <InputField
//                         icon={FiPhone}
//                         label="Mobile Number"
//                         name="mobileNumber"
//                         type="tel"
//                         value={formData.mobileNumber}
//                         onChange={handleInputChange}
//                         error={errors.mobileNumber}
//                         placeholder="1234567890"
//                         isRequired
//                       />
//                       <InputField
//                         icon={FiMail}
//                         label="Email"
//                         name="email"
//                         type="email"
//                         value={formData.email}
//                         onChange={handleInputChange}
//                         error={errors.email}
//                         placeholder="john@example.com"
//                         isRequired
//                       />
//                     </SimpleGrid>
//                   </VStack>
//                 </motion.div>
//               )}

//               {activeStep === 1 && (
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <VStack spacing={6} align="stretch">
//                     <FormControl isInvalid={!!errors.profession} isRequired>
//                       <FormLabel
//                         htmlFor="profession"
//                         fontSize={{ base: "sm", md: "md" }}
//                         fontWeight="medium"
//                         color={useColorModeValue("gray.700", "gray.300")}
//                       >
//                         Profession
//                       </FormLabel>
//                       <InputGroup>
//                         <InputLeftElement pointerEvents="none">
//                           <Icon as={FiBriefcase} color={errors.profession ? "red.500" : "gray.400"} />
//                         </InputLeftElement>
//                         <Select
//                           id="profession"
//                           name="profession"
//                           value={formData.profession}
//                           onChange={handleInputChange}
//                           placeholder="Select your profession"
//                           pl={10}
//                           bg={useColorModeValue("white", "gray.800")}
//                           _hover={{ bg: useColorModeValue("gray.50", "gray.700") }}
//                           borderColor={errors.profession ? "red.500" : "gray.200"}
//                         >
//                           {professions.map((prof) => (
//                             <option key={prof} value={prof}>
//                               {prof}
//                             </option>
//                           ))}
//                         </Select>
//                       </InputGroup>
//                       <FormErrorMessage fontSize="xs">{errors.profession}</FormErrorMessage>
//                     </FormControl>
//                     <FileInput
//                       icon={FiFile}
//                       label="Upload Resume"
//                       name="resume"
//                       onChange={handleFileChange}
//                       error={errors.resume}
//                       isRequired
//                       value={formData.resume}
//                     />
//                     <Box
//                       p={4}
//                       bg={useColorModeValue("blue.50", "blue.900")}
//                       borderRadius="md"
//                       borderLeft="4px solid"
//                       borderColor={useColorModeValue("blue.400", "blue.500")}
//                     >
//                       <HStack spacing={3} align="flex-start">
//                         <Icon as={FiInfo} color={useColorModeValue("blue.500", "blue.300")} mt={1} />
//                         <Text fontSize="sm">
//                           Your resume should highlight your relevant experience, skills, and achievements. Make sure
//                           it's up-to-date and tailored to the position you're applying for.
//                         </Text>
//                       </HStack>
//                     </Box>
//                   </VStack>
//                 </motion.div>
//               )}

//               {activeStep === 2 && (
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <VStack spacing={6} align="stretch">
//                     <FormControl isInvalid={!!errors.coverLetter} isRequired>
//                       <FormLabel
//                         htmlFor="coverLetter"
//                         fontSize={{ base: "sm", md: "md" }}
//                         fontWeight="medium"
//                         color={useColorModeValue("gray.700", "gray.300")}
//                       >
//                         Cover Letter
//                       </FormLabel>
//                       <Textarea
//                         id="coverLetter"
//                         name="coverLetter"
//                         value={formData.coverLetter}
//                         onChange={handleInputChange}
//                         placeholder="Tell us why you're a great fit for this position..."
//                         rows={8}
//                         bg={useColorModeValue("white", "gray.800")}
//                         _hover={{ bg: useColorModeValue("gray.50", "gray.700") }}
//                         _focus={{
//                           borderColor: "orange.900",
//                           boxShadow: "0 0 0 1px orange.500",
//                           bg: useColorModeValue("white", "gray.800"),
//                         }}
//                         borderColor={errors.coverLetter ? "red.500" : "gray.200"}
//                         fontSize={{ base: "sm", md: "md" }}
//                       />
//                       <FormErrorMessage fontSize="xs">{errors.coverLetter}</FormErrorMessage>
//                     </FormControl>
//                     <Box
//                       p={4}
//                       bg={useColorModeValue("green.50", "green.900")}
//                       borderRadius="md"
//                       borderLeft="4px solid"
//                       borderColor={useColorModeValue("green.400", "green.500")}
//                     >
//                       <VStack align="flex-start" spacing={2}>
//                         <HStack spacing={3}>
//                           <Icon as={FiInfo} color={useColorModeValue("green.500", "green.300")} />
//                           <Text fontWeight="medium" fontSize="sm">
//                             Tips for a great cover letter:
//                           </Text>
//                         </HStack>
//                         <List spacing={1} pl={8} fontSize="sm">
//                           <ListItem>
//                             <ListIcon as={FiCheck} color={useColorModeValue("green.500", "green.300")} />
//                             Explain why you're interested in this position
//                           </ListItem>
//                           <ListItem>
//                             <ListIcon as={FiCheck} color={useColorModeValue("green.500", "green.300")} />
//                             Highlight your most relevant skills and experiences
//                           </ListItem>
//                           <ListItem>
//                             <ListIcon as={FiCheck} color={useColorModeValue("green.500", "green.300")} />
//                             Show how you can add value to the company
//                           </ListItem>
//                         </List>
//                       </VStack>
//                     </Box>
//                   </VStack>
//                 </motion.div>
//               )}

//               {isLoading && (
//                 <Box mt={6}>
//                   <Text mb={2} fontSize="sm">
//                     Uploading: {uploadProgress}%
//                   </Text>
//                   <Progress
//                     value={uploadProgress}
//                     size="sm"
//                     colorScheme="teal"
//                     borderRadius="full"
//                     hasStripe
//                     isAnimated
//                   />
//                 </Box>
//               )}
//             </Box>
//           </form>
//         </Box>
//       </VStack>
//     </Box>
//   )

//   const FormFooter = () => (
//     <Flex
//       justify="space-between"
//       pt={4}
//       pb={4}
//       px={{ base: 4, md: 6 }}
//       borderTop="1px solid"
//       borderColor={useColorModeValue("gray.200", "gray.700")}
//       bg={useColorModeValue("gray.50", "gray.900")}
//     >
//       <Button
//         onClick={handlePrev}
//         isDisabled={activeStep === 0}
//         leftIcon={<FiArrowLeft />}
//         variant="outline"
//         size={{ base: "sm", md: "md" }}
//         fontWeight="medium"
//         type="button"
//       >
//         Previous
//       </Button>
//       {activeStep < steps.length - 1 ? (
//         <Button
//           onClick={handleNext}
//           rightIcon={<FiArrowRight />}
//           color="white"
//           bg="teal.900"
//           size={{ base: "sm", md: "md" }}
//           fontWeight="medium"
//           type="button"
//         >
//           Next Step
//         </Button>
//       ) : (
//         <Button
//           onClick={handleSubmit}
//           color="white"
//           bg="teal.900"
//           isLoading={isLoading}
//           loadingText="Submitting"
//           size={{ base: "sm", md: "md" }}
//           fontWeight="medium"
//         >
//           Submit Application
//         </Button>
//       )}
//     </Flex>
//   )

//   if (isMobile) {
//     return (
//       <Drawer isOpen={isOpen} onClose={onClose} placement="right" size="full" autoFocus={false} trapFocus={false}>
//         <DrawerOverlay />
//         <DrawerContent>
//           <DrawerHeader
//             bg={headerBg}
//             color="white"
//             py={4}
//             px={4}
//             position="sticky"
//             top={0}
//             zIndex={10}
//             boxShadow="md"
//           >
//             <Flex justify="space-between" align="center">
//               <VStack align="flex-start" spacing={0}>
//                 <Heading size="md" noOfLines={1}>
//                   Apply for {selectedJob?.title}
//                 </Heading>
//                 <Text fontSize="xs" opacity={0.8}>
//                   Complete the form below to apply
//                 </Text>
//               </VStack>
//               <DrawerCloseButton position="static" color="white" />
//             </Flex>
//           </DrawerHeader>
//           <DrawerBody p={0} overflowY="auto">
//             <FormContent />
//           </DrawerBody>
//           <DrawerFooter p={0} position="sticky" bottom={0} zIndex={10} boxShadow="0 -2px 10px rgba(0,0,0,0.05)">
//             <FormFooter />
//           </DrawerFooter>
//         </DrawerContent>
//       </Drawer>
//     )
//   }

//   return (
//     <Modal isOpen={isOpen} onClose={onClose} size={{ base: "full", md: "4xl" }} scrollBehavior="outside" autoFocus={false} trapFocus={false}>
//       <ModalOverlay />
//       <ModalContent
//         maxW={{ base: "100%", md: "900px" }}
//         maxH={{ base: "100vh", md: "90vh" }}
//         my={{ base: 0, md: "auto" }}
//         borderRadius={{ base: 0, md: "md" }}
//       >
//         <ModalHeader
//           bg={headerBg}
//           color="white"
//           py={4}
//           px={6}
//           borderTopRadius={{ base: 0, md: "md" }}
//           position="sticky"
//           top={0}
//           zIndex={10}
//           boxShadow="md"
//         >
//           <Flex justify="space-between" align="center">
//             <VStack align="flex-start" spacing={0}>
//               <Heading size="md" noOfLines={1}>
//                 Apply for {selectedJob?.title}
//               </Heading>
//               <Text fontSize="xs" opacity={0.8}>
//                 Complete the form below to apply
//               </Text>
//             </VStack>
//             <ModalCloseButton position="static" color="white" />
//           </Flex>
//         </ModalHeader>
//         <ModalBody
//           p={0}
//           maxH="calc(90vh - 140px)"
//           overflowY="auto"
//           ref={modalBodyRef} // ←←←←←←←←←←←←←←←←←←←←
//         >
//           <FormContent />
//         </ModalBody>
//         <ModalFooter
//           p={0}
//           position="sticky"
//           bottom={0}
//           zIndex={10}
//           boxShadow="0 -2px 10px rgba(0,0,0,0.05)"
//           borderBottomRadius={{ base: 0, md: "md" }}
//         >
//           <FormFooter />
//         </ModalFooter>
//       </ModalContent>
//     </Modal>
//   )
// }

// export default ApplicationForm

// import { useState, useRef, useEffect, useLayoutEffect, useCallback, useMemo } from "react";
// import { motion } from "framer-motion";
// import {
//   Box,
//   Button,
//   Flex,
//   FormControl,
//   FormLabel,
//   Heading,
//   Input,
//   Select,
//   Text,
//   Textarea,
//   VStack,
//   HStack,
//   useToast,
//   Progress,
//   Icon,
//   SimpleGrid,
//   useColorModeValue,
//   FormErrorMessage,
//   Stepper,
//   Step,
//   StepIndicator,
//   StepStatus,
//   StepIcon,
//   StepNumber,
//   StepTitle,
//   StepDescription,
//   StepSeparator,
//   useSteps,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalBody,
//   ModalFooter,
//   ModalCloseButton,
//   Drawer,
//   DrawerBody,
//   DrawerFooter,
//   DrawerHeader,
//   DrawerOverlay,
//   DrawerContent,
//   DrawerCloseButton,
//   useBreakpointValue,
//   Accordion,
//   AccordionItem,
//   AccordionButton,
//   AccordionPanel,
//   AccordionIcon,
//   List,
//   ListItem,
//   ListIcon,
//   InputGroup,
//   InputLeftElement,
//   Badge,
// } from "@chakra-ui/react";
// import {
//   FiUser,
//   FiPhone,
//   FiMail,
//   FiBriefcase,
//   FiFile,
//   FiCheck,
//   FiArrowRight,
//   FiArrowLeft,
//   FiInfo,
//   FiMapPin,
//   FiCalendar,
//   FiClock,
//   FiDollarSign,
//   FiStar,
// } from "react-icons/fi";

// // ===========================
// // Memoized InputField
// // ===========================
// const InputField = ({ icon, label, name, type, value, onChange, error, placeholder, isRequired = false }) => {
//   const focusBorderColor = useColorModeValue("orange.500", "orange.300");
//   const errorBorderColor = useColorModeValue("red.500", "red.300");
//   const bgColor = useColorModeValue("white", "gray.800");
//   const hoverBg = useColorModeValue("gray.50", "gray.700");

//   return (
//     <FormControl isInvalid={!!error} isRequired={isRequired}>
//       <FormLabel
//         htmlFor={name}
//         fontSize={{ base: "sm", md: "md" }}
//         fontWeight="medium"
//         color={useColorModeValue("gray.700", "gray.300")}
//         mb={2}
//       >
//         {label}
//       </FormLabel>
//       <InputGroup>
//         <InputLeftElement pointerEvents="none">
//           <Icon as={icon} color={error ? errorBorderColor : "gray.400"} />
//         </InputLeftElement>
//         <Input
//           type={type}
//           name={name}
//           id={name}
//           value={value}
//           onChange={onChange}
//           placeholder={placeholder}
//           bg={bgColor}
//           _hover={{ bg: hoverBg, borderColor: "gray.300" }}
//           _focus={{
//             borderColor: focusBorderColor,
//             boxShadow: `0 0 0 1px ${focusBorderColor}`,
//             bg: bgColor,
//           }}
//           borderColor={error ? errorBorderColor : "gray.200"}
//           transition="all 0.3s ease"
//           fontSize={{ base: "sm", md: "md" }}
//         />
//       </InputGroup>
//       <FormErrorMessage fontSize="xs" mt={1}>
//         {error}
//       </FormErrorMessage>
//     </FormControl>
//   );
// };

// // ===========================
// // Memoized FileInput
// // ===========================
// const FileInput = ({ icon, label, name, onChange, error, isRequired = false, value }) => {
//   const focusBorderColor = useColorModeValue("orange.500", "orange.300");
//   const errorBorderColor = useColorModeValue("red.500", "red.300");
//   const bgColor = useColorModeValue("white", "gray.800");
//   const hoverBg = useColorModeValue("gray.50", "gray.700");
//   const fileInputRef = useRef(null);

//   const handleButtonClick = useCallback(() => {
//     fileInputRef.current?.click();
//   }, []);

//   return (
//     <FormControl isInvalid={!!error} isRequired={isRequired}>
//       <FormLabel
//         htmlFor={name}
//         fontSize={{ base: "sm", md: "md" }}
//         fontWeight="medium"
//         color={useColorModeValue("gray.700", "gray.300")}
//         mb={2}
//       >
//         {label}
//       </FormLabel>
//       <Box position="relative">
//         <Input
//           type="file"
//           ref={fileInputRef}
//           id={name}
//           name={name}
//           onChange={onChange}
//           accept=".pdf,.doc,.docx"
//           display="none"
//         />
//         <Flex
//           border="1px solid"
//           borderColor={error ? errorBorderColor : "gray.200"}
//           borderRadius="md"
//           bg={bgColor}
//           _hover={{ bg: hoverBg, borderColor: "gray.300" }}
//           transition="all 0.3s ease"
//           overflow="hidden"
//         >
//           <Flex align="center" justify="center" bg={useColorModeValue("gray.100", "gray.700")} p={3}>
//             <Icon as={icon} color={error ? errorBorderColor : "gray.500"} />
//           </Flex>
//           <Box flex="1" p={2} pl={3} overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap">
//             {value ? value.name : "No file selected"}
//           </Box>
//           <Button onClick={handleButtonClick} size="sm" colorScheme="orange" m={1} px={4}>
//             Browse
//           </Button>
//         </Flex>
//       </Box>
//       <FormErrorMessage fontSize="xs" mt={1}>
//         {error}
//       </FormErrorMessage>
//       <Text fontSize="xs" color="gray.500" mt={1}>
//         Accepted formats: PDF, DOC, DOCX. Max size: 5MB
//       </Text>
//     </FormControl>
//   );
// };

// // ===========================
// // Memoized JobDetails
// // ===========================
// const JobDetails = ({ job }) => {
//   const bgColor = useColorModeValue("orange.50", "gray.700");
//   const borderColor = useColorModeValue("orange.200", "gray.600");

//   return (
//     <Box bg={bgColor} p={5} borderRadius="md" borderLeft="4px solid" borderColor={borderColor} boxShadow="sm">
//       <Heading size="md" mb={4} color={useColorModeValue("gray.800", "white")}>
//         {job?.title}
//       </Heading>
//       <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
//         <HStack spacing={2}>
//           <Icon as={FiBriefcase} color="gray.500" />
//           <Text fontWeight="medium">Department:</Text>
//           <Text>{job?.department}</Text>
//         </HStack>
//         <HStack spacing={2}>
//           <Icon as={FiMapPin} color="gray.500" />
//           <Text fontWeight="medium">Location:</Text>
//           <Text>{job?.location}</Text>
//         </HStack>
//         <HStack spacing={2}>
//           <Icon as={FiClock} color="gray.500" />
//           <Text fontWeight="medium">Type:</Text>
//           <Badge colorScheme="orange">{job?.type}</Badge>
//         </HStack>
//       </SimpleGrid>
//       <HStack mt={4} spacing={4}>
//         <HStack>
//           <Icon as={FiCalendar} color="gray.500" />
//           <Text fontSize="sm">Apply by: June 30, 2023</Text>
//         </HStack>
//         <HStack>
//           <Icon as={FiDollarSign} color="gray.500" />
//           <Text fontSize="sm">Competitive salary</Text>
//         </HStack>
//         <HStack>
//           <Icon as={FiStar} color="gray.500" />
//           <Text fontSize="sm">5+ years experience</Text>
//         </HStack>
//       </HStack>
//     </Box>
//   );
// };

// // ===========================
// // Memoized JobRequirements
// // ===========================
// const JobRequirements = () => {
//   const borderColor = useColorModeValue("teal.500", "teal.300");

//   return (
//     <Accordion allowToggle>
//       <AccordionItem border="none" boxShadow="sm" borderRadius="md" overflow="scroll" mb={4}>
//         <h2>
//           <AccordionButton
//             py={4}
//             bg={useColorModeValue("gray.50", "gray.700")}
//             _hover={{ bg: useColorModeValue("gray.100", "gray.600") }}
//           >
//             <Box flex="1" textAlign="left" fontWeight="bold">
//               Job Description & Requirements
//             </Box>
//             <AccordionIcon />
//           </AccordionButton>
//         </h2>
//         <AccordionPanel
//           pb={4}
//           pt={4}
//           borderLeft="1px solid"
//           borderRight="1px solid"
//           borderBottom="1px solid"
//           borderColor="gray.200"
//           borderBottomRadius="md"
//         >
//           <Text mb={4}>
//             We are seeking a talented and motivated professional to join our team. In this role, you will be responsible
//             for developing innovative solutions and collaborating with cross-functional teams to deliver exceptional
//             results.
//           </Text>
//           <Text fontWeight="bold" mb={3}>
//             Key Responsibilities:
//           </Text>
//           <List spacing={2} mb={4}>
//             <ListItem>
//               <ListIcon as={FiCheck} color={borderColor} />
//               Design and implement new features and functionality
//             </ListItem>
//             <ListItem>
//               <ListIcon as={FiCheck} color={borderColor} />
//               Collaborate with product managers and designers
//             </ListItem>
//             <ListItem>
//               <ListIcon as={FiCheck} color={borderColor} />
//               Write clean, maintainable, and efficient code
//             </ListItem>
//             <ListItem>
//               <ListIcon as={FiCheck} color={borderColor} />
//               Participate in code reviews and provide constructive feedback
//             </ListItem>
//           </List>
//           <Text fontWeight="bold" mb={3}>
//             Requirements:
//           </Text>
//           <List spacing={2}>
//             <ListItem>
//               <ListIcon as={FiCheck} color={borderColor} />
//               3+ years of experience in relevant field
//             </ListItem>
//             <ListItem>
//               <ListIcon as={FiCheck} color={borderColor} />
//               Strong knowledge of industry best practices
//             </ListItem>
//             <ListItem>
//               <ListIcon as={FiCheck} color={borderColor} />
//               Excellent communication and teamwork skills
//             </ListItem>
//             <ListItem>
//               <ListIcon as={FiCheck} color={borderColor} />
//               Bachelor's degree in a related field (or equivalent experience)
//             </ListItem>
//           </List>
//         </AccordionPanel>
//       </AccordionItem>
//     </Accordion>
//   );
// };

// // ===========================
// // Memoized FormStepper
// // ===========================
// const FormStepper = ({ activeStep, steps }) => {
//   const isMobile = useBreakpointValue({ base: true, md: false });
//   const stepperColor = useColorModeValue("orange.500", "orange.300");

//   return (
//     <Box mb={8}>
//       {isMobile ? (
//         <Flex justify="space-between" align="center" mb={4}>
//           {steps.map((step, index) => (
//             <VStack key={index} spacing={1} flex="1" position="relative">
//               <Box
//                 w="10px"
//                 h="10px"
//                 borderRadius="full"
//                 bg={index <= activeStep ? stepperColor : "gray.200"}
//                 zIndex={1}
//               />
//               {index < steps.length - 1 && (
//                 <Box
//                   position="absolute"
//                   h="2px"
//                   bg={index < activeStep ? stepperColor : "gray.200"}
//                   top="5px"
//                   right="-50%"
//                   w="100%"
//                 />
//               )}
//               <Text
//                 fontSize="xs"
//                 fontWeight={index === activeStep ? "bold" : "normal"}
//                 color={index === activeStep ? stepperColor : "gray.500"}
//                 textAlign="center"
//               >
//                 {step.title}
//               </Text>
//             </VStack>
//           ))}
//         </Flex>
//       ) : (
//         <Stepper index={activeStep} size="lg">
//           {steps.map((step, index) => (
//             <Step key={index}>
//               <StepIndicator>
//                 <StepStatus complete={<StepIcon />} incomplete={<StepNumber />} active={<StepNumber />} />
//               </StepIndicator>
//               <Box flexShrink="0">
//                 <StepTitle>{step.title}</StepTitle>
//                 <StepDescription>{step.description}</StepDescription>
//               </Box>
//               <StepSeparator />
//             </Step>
//           ))}
//         </Stepper>
//       )}
//     </Box>
//   );
// };

// // ===========================
// // Main ApplicationForm
// // ===========================
// const ApplicationForm = ({ isOpen, onClose, selectedJob, onSubmit }) => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     mobileNumber: "",
//     email: "",
//     profession: "",
//     resume: null,
//     coverLetter: "",
//   });
//   const [errors, setErrors] = useState({});
//   const [isLoading, setIsLoading] = useState(false);
//   const [uploadProgress, setUploadProgress] = useState(0);
//   const toast = useToast();
//   const isMobile = useBreakpointValue({ base: true, md: false });
//   const headerBg = useColorModeValue("teal.900", "teal.900");
//   const textColor = useColorModeValue("gray.800", "white");
//   const modalBodyRef = useRef(null);
//   const scrollPositionRef = useRef(0);

//   const { activeStep, setActiveStep } = useSteps({
//     index: 0,
//     count: 3,
//   });

//   const steps = useMemo(
//     () => [
//       { title: "Personal Info", description: "Your basic details" },
//       { title: "Professional Info", description: "Your work experience" },
//       { title: "Additional Info", description: "Extra details" },
//     ],
//     []
//   );

//   const professions = useMemo(
//     () => [
//       "Software Engineer",
//       "Data Scientist",
//       "Product Manager",
//       "UX Designer",
//       "Marketing Specialist",
//       "Customer Success Manager",
//     ],
//     []
//   );

//   const handleInputChange = useCallback((e) => {
//     const { name, value } = e.target;
//     if (modalBodyRef.current) {
//       scrollPositionRef.current = modalBodyRef.current.scrollTop;
//     }
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     setErrors((prev) => ({ ...prev, [name]: "" }));
//   }, []);

//   const handleFileChange = useCallback((e) => {
//     const file = e.target.files[0];
//     if (modalBodyRef.current) {
//       scrollPositionRef.current = modalBodyRef.current.scrollTop;
//     }
//     if (file && file.size <= 5 * 1024 * 1024) {
//       setFormData((prev) => ({ ...prev, resume: file }));
//       setErrors((prev) => ({ ...prev, resume: "" }));
//     } else {
//       setErrors((prev) => ({ ...prev, resume: "File size should be less than 5MB" }));
//     }
//   }, []);

//   const validateForm = useCallback(() => {
//     const newErrors = {};
//     if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
//     if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
//     if (!/^\d{10}$/.test(formData.mobileNumber)) newErrors.mobileNumber = "Invalid mobile number";
//     if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email address";
//     if (!formData.profession) newErrors.profession = "Please select a profession";
//     if (!formData.resume) newErrors.resume = "Please upload your resume";
//     if (!formData.coverLetter.trim()) newErrors.coverLetter = "Cover letter is required";
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   }, [formData]);

//   const mockApiUpload = useCallback(() => {
//     return new Promise((resolve) => {
//       const total = 100;
//       let progress = 0;
//       const interval = setInterval(() => {
//         if (progress < total) {
//           progress += 10;
//           setUploadProgress(progress);
//         } else {
//           clearInterval(interval);
//           resolve({ message: "Upload successful!" });
//         }
//       }, 200);
//     });
//   }, []);

//   const handleSubmit = useCallback(
//     async (e) => {
//       e.preventDefault();
//       if (validateForm()) {
//         setIsLoading(true);
//         setUploadProgress(0);
//         try {
//           await mockApiUpload();
//           toast({
//             title: "Application submitted!",
//             description: "We'll be in touch soon.",
//             status: "success",
//             duration: 5000,
//             isClosable: true,
//             position: "top",
//           });
//           onSubmit(formData);
//           onClose();
//         } catch (error) {
//           toast({
//             title: "Submission failed",
//             description: error.message || "Something went wrong",
//             status: "error",
//             duration: 5000,
//             isClosable: true,
//             position: "top",
//           });
//         } finally {
//           setIsLoading(false);
//         }
//       } else {
//         toast({
//           title: "Form has errors",
//           description: "Please correct the errors in the form.",
//           status: "error",
//           duration: 5000,
//           isClosable: true,
//           position: "top",
//         });
//       }
//     },
//     [validateForm, mockApiUpload, formData, onSubmit, onClose, toast]
//   );

//   const handleNext = useCallback(() => {
//     if (activeStep === 0) {
//       const newErrors = {};
//       if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
//       if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
//       if (!/^\d{10}$/.test(formData.mobileNumber)) newErrors.mobileNumber = "Invalid mobile number";
//       if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email address";
//       setErrors(newErrors);
//       if (Object.keys(newErrors).length > 0) return;
//     }
//     setActiveStep((prev) => prev + 1);
//   }, [activeStep, formData]);

//   const handlePrev = useCallback(() => {
//     setActiveStep((prev) => prev - 1);
//   }, []);

//   useEffect(() => {
//     if (isOpen) {
//       setFormData((prev) => ({
//         ...prev,
//         profession: selectedJob?.department || "",
//       }));
//     }
//   }, [isOpen, selectedJob]);

//   useEffect(() => {
//     if (!isOpen) {
//       setFormData({
//         firstName: "",
//         lastName: "",
//         mobileNumber: "",
//         email: "",
//         profession: "",
//         resume: null,
//         coverLetter: "",
//       });
//       setErrors({});
//       setActiveStep(0);
//       setUploadProgress(0);
//     }
//   }, [isOpen, setActiveStep]);

//  useLayoutEffect(() => {
//   const scrollContainer = modalBodyRef.current
//   if (scrollContainer && scrollPositionRef.current > 0) {
//     // Prevent unnecessary flicker
//     if (Math.abs(scrollContainer.scrollTop - scrollPositionRef.current) > 10) {
//       scrollContainer.scrollTop = scrollPositionRef.current
//     }
//   }
// }, [activeStep]) // ← Only run when step changes

//   // Memoize form content to prevent re-creation
//   const FormContent = useMemo(
//     () => (
//       <Box  px={{ base: 2, md: 6 }} py={6}>
//         <VStack spacing={8} align="stretch">
//           <JobDetails job={selectedJob} />
//           <JobRequirements />
//           <Box>
//             <Heading as="h3" size="md" mb={6} color={textColor}>
//               Application Form
//             </Heading>
//             <FormStepper activeStep={activeStep} steps={steps} />
//             <form onSubmit={handleSubmit}>
//               <Box>
//                 {activeStep === 0 && (
//                   <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0 }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     <VStack spacing={6} align="stretch">
//                       <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
//                         <InputField
//                           icon={FiUser}
//                           label="First Name"
//                           name="firstName"
//                           type="text"
//                           value={formData.firstName}
//                           onChange={handleInputChange}
//                           error={errors.firstName}
//                           placeholder="John"
//                           isRequired
//                         />
//                         <InputField
//                           icon={FiUser}
//                           label="Last Name"
//                           name="lastName"
//                           type="text"
//                           value={formData.lastName}
//                           onChange={handleInputChange}
//                           error={errors.lastName}
//                           placeholder="Doe"
//                           isRequired
//                         />
//                       </SimpleGrid>
//                       <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
//                         <InputField
//                           icon={FiPhone}
//                           label="Mobile Number"
//                           name="mobileNumber"
//                           type="tel"
//                           value={formData.mobileNumber}
//                           onChange={handleInputChange}
//                           error={errors.mobileNumber}
//                           placeholder="1234567890"
//                           isRequired
//                         />
//                         <InputField
//                           icon={FiMail}
//                           label="Email"
//                           name="email"
//                           type="email"
//                           value={formData.email}
//                           onChange={handleInputChange}
//                           error={errors.email}
//                           placeholder="john@example.com"
//                           isRequired
//                         />
//                       </SimpleGrid>
//                     </VStack>
//                   </motion.div>
//                 )}

//                 {activeStep === 1 && (
//                   <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0 }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     <VStack spacing={6} align="stretch">
//                       <FormControl isInvalid={!!errors.profession} isRequired>
//                         <FormLabel
//                           htmlFor="profession"
//                           fontSize={{ base: "sm", md: "md" }}
//                           fontWeight="medium"
//                           color={useColorModeValue("gray.700", "gray.300")}
//                         >
//                           Profession
//                         </FormLabel>
//                         <InputGroup>
//                           <InputLeftElement pointerEvents="none">
//                             <Icon as={FiBriefcase} color={errors.profession ? "red.500" : "gray.400"} />
//                           </InputLeftElement>
//                           <Select
//                             id="profession"
//                             name="profession"
//                             value={formData.profession}
//                             onChange={handleInputChange}
//                             placeholder="Select your profession"
//                             pl={10}
//                             bg={useColorModeValue("white", "gray.800")}
//                             _hover={{ bg: useColorModeValue("gray.50", "gray.700") }}
//                             borderColor={errors.profession ? "red.500" : "gray.200"}
//                           >
//                             {professions.map((prof) => (
//                               <option key={prof} value={prof}>
//                                 {prof}
//                               </option>
//                             ))}
//                           </Select>
//                         </InputGroup>
//                         <FormErrorMessage fontSize="xs">{errors.profession}</FormErrorMessage>
//                       </FormControl>
//                       <FileInput
//                         icon={FiFile}
//                         label="Upload Resume"
//                         name="resume"
//                         onChange={handleFileChange}
//                         error={errors.resume}
//                         isRequired
//                         value={formData.resume}
//                       />
//                       <Box
//                         p={4}
//                         bg={useColorModeValue("blue.50", "blue.900")}
//                         borderRadius="md"
//                         borderLeft="4px solid"
//                         borderColor={useColorModeValue("blue.400", "blue.500")}
//                       >
//                         <HStack spacing={3} align="flex-start">
//                           <Icon as={FiInfo} color={useColorModeValue("blue.500", "blue.300")} mt={1} />
//                           <Text fontSize="sm">
//                             Your resume should highlight your relevant experience, skills, and achievements. Make sure
//                             it's up-to-date and tailored to the position you're applying for.
//                           </Text>
//                         </HStack>
//                       </Box>
//                     </VStack>
//                   </motion.div>
//                 )}

//                 {activeStep === 2 && (
//                   <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0 }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     <VStack spacing={6} align="stretch">
//                       <FormControl isInvalid={!!errors.coverLetter} isRequired>
//                         <FormLabel
//                           htmlFor="coverLetter"
//                           fontSize={{ base: "sm", md: "md" }}
//                           fontWeight="medium"
//                           color={useColorModeValue("gray.700", "gray.300")}
//                         >
//                           Cover Letter
//                         </FormLabel>
//                         <Textarea
//                           id="coverLetter"
//                           name="coverLetter"
//                           value={formData.coverLetter}
//                           onChange={handleInputChange}
//                           placeholder="Tell us why you're a great fit for this position..."
//                           rows={8}
//                           bg={useColorModeValue("white", "gray.800")}
//                           _hover={{ bg: useColorModeValue("gray.50", "gray.700") }}
//                           _focus={{
//                             borderColor: "orange.900",
//                             boxShadow: "0 0 0 1px orange.500",
//                             bg: useColorModeValue("white", "gray.800"),
//                           }}
//                           borderColor={errors.coverLetter ? "red.500" : "gray.200"}
//                           fontSize={{ base: "sm", md: "md" }}
//                         />
//                         <FormErrorMessage fontSize="xs">{errors.coverLetter}</FormErrorMessage>
//                       </FormControl>
//                       <Box
//                         p={4}
//                         bg={useColorModeValue("green.50", "green.900")}
//                         borderRadius="md"
//                         borderLeft="4px solid"
//                         borderColor={useColorModeValue("green.400", "green.500")}
//                       >
//                         <VStack align="flex-start" spacing={2}>
//                           <HStack spacing={3}>
//                             <Icon as={FiInfo} color={useColorModeValue("green.500", "green.300")} />
//                             <Text fontWeight="medium" fontSize="sm">
//                               Tips for a great cover letter:
//                             </Text>
//                           </HStack>
//                           <List spacing={1} pl={8} fontSize="sm">
//                             <ListItem>
//                               <ListIcon as={FiCheck} color={useColorModeValue("green.500", "green.300")} />
//                               Explain why you're interested in this position
//                             </ListItem>
//                             <ListItem>
//                               <ListIcon as={FiCheck} color={useColorModeValue("green.500", "green.300")} />
//                               Highlight your most relevant skills and experiences
//                             </ListItem>
//                             <ListItem>
//                               <ListIcon as={FiCheck} color={useColorModeValue("green.500", "green.300")} />
//                               Show how you can add value to the company
//                             </ListItem>
//                           </List>
//                         </VStack>
//                       </Box>
//                     </VStack>
//                   </motion.div>
//                 )}
//                 {isLoading && (
//                   <Box mt={6}>
//                     <Text mb={2} fontSize="sm">
//                       Uploading: {uploadProgress}%
//                     </Text>
//                     <Progress
//                       value={uploadProgress}
//                       size="sm"
//                       colorScheme="teal"
//                       borderRadius="full"
//                       hasStripe
//                       isAnimated
//                     />
//                   </Box>
//                 )}
//               </Box>
//             </form>
//           </Box>
//         </VStack>
//       </Box>
//     ),
//     [
//       selectedJob,
//       textColor,
//       activeStep,
//       steps,
//       formData,
//       errors,
//       handleInputChange,
//       handleFileChange,
//       professions,
//       isLoading,
//       uploadProgress,
//       handleSubmit,
//     ]
//   );

//   const FormFooter = useMemo(
//     () => (
//       <Flex
//         justify="space-between"
//         pt={4}
//         pb={4}
//         px={{ base: 4, md: 6 }}
//         borderTop="1px solid"
//         borderColor={useColorModeValue("gray.200", "gray.700")}
//         bg={useColorModeValue("gray.50", "gray.900")}
//       >
//         <Button
//           onClick={handlePrev}
//           isDisabled={activeStep === 0}
//           leftIcon={<FiArrowLeft />}
//           variant="outline"
//           size={{ base: "sm", md: "md" }}
//           fontWeight="medium"
//           type="button"
//         >
//           Previous
//         </Button>
//         {activeStep < steps.length - 1 ? (
//           <Button
//             onClick={handleNext}
//             rightIcon={<FiArrowRight />}
//             color="white"
//             bg="teal.900"
//             size={{ base: "sm", md: "md" }}
//             fontWeight="medium"
//             type="button"
//           >
//             Next Step
//           </Button>
//         ) : (
//           <Button
//             onClick={handleSubmit}
//             color="white"
//             bg="teal.900"
//             isLoading={isLoading}
//             loadingText="Submitting"
//             size={{ base: "sm", md: "md" }}
//             fontWeight="medium"
//           >
//             Submit Application
//           </Button>
//         )}
//       </Flex>
//     ),
//     [activeStep, steps.length, handlePrev, handleNext, handleSubmit, isLoading]
//   );

//   if (isMobile) {
//     return (
//       <Drawer isOpen={isOpen} onClose={onClose} placement="right" size="full" autoFocus={false} trapFocus={false}>
//         <DrawerOverlay />
//         <DrawerContent>
//           <DrawerHeader
//             bg={headerBg}
//             color="white"
//             py={4}
//             px={4}
//             position="sticky"
//             top={0}
//             zIndex={10}
//             boxShadow="md"
//           >
//             <Flex justify="space-between" align="center">
//               <VStack align="flex-start" spacing={0}>
//                 <Heading size="md" noOfLines={1}>
//                   Apply for {selectedJob?.title}
//                 </Heading>
//                 <Text fontSize="xs" opacity={0.8}>
//                   Complete the form below to apply
//                 </Text>
//               </VStack>
//               <DrawerCloseButton position="static" color="white" />
//             </Flex>
//           </DrawerHeader>
//           <DrawerBody p={0} overflowY="auto" ref={modalBodyRef}>
//             {FormContent}
//           </DrawerBody>
//           <DrawerFooter p={0} position="sticky" bottom={0} zIndex={10} boxShadow="0 -2px 10px rgba(0,0,0,0.05)">
//             {FormFooter}
//           </DrawerFooter>
//         </DrawerContent>
//       </Drawer>
//     );
//   }

//   return (
//     <Modal isOpen={isOpen} onClose={onClose} size={{ base: "full", md: "4xl" }} scrollBehavior="inside" autoFocus={false} trapFocus={false}>
//       <ModalOverlay />
//       <ModalContent
//         maxW={{ base: "100%", md: "900px" }}
//         maxH={{ base: "100vh", md: "90vh" }}
//         my={{ base: 0, md: "auto" }}
//         borderRadius={{ base: 0, md: "md" }}
//       >
//         <ModalHeader
//           bg={headerBg}
//           color="white"
//           py={4}
//           px={6}
//           borderTopRadius={{ base: 0, md: "md" }}
//           position="sticky"
//           top={0}
//           zIndex={10}
//           boxShadow="md"
//         >
//           <Flex justify="space-between" align="center">
//             <VStack align="flex-start" spacing={0}>
//               <Heading size="md" noOfLines={1}>
//                 Apply for {selectedJob?.title}
//               </Heading>
//               <Text fontSize="xs" opacity={0.8}>
//                 Complete the form below to apply
//               </Text>
//             </VStack>
//             <ModalCloseButton position="static" color="white" />
//           </Flex>
//         </ModalHeader>
//         <ModalBody p={0} maxH="calc(90vh - 140px)" overflowY="auto" ref={modalBodyRef}  css={{
//     '&::-webkit-scrollbar': { width: '6px' },
//     '&::-webkit-scrollbar-track': { background: 'transparent' },
//     '&::-webkit-scrollbar-thumb': { 
//       background: useColorModeValue('#a0aec0', '#4a5568'), 
//       borderRadius: '3px' 
//     },
//   }}>
//           {FormContent}
//         </ModalBody>
//         <ModalFooter
//           p={0}
//           position="sticky"
//           bottom={0}
//           zIndex={10}
//           boxShadow="0 -2px 10px rgba(0,0,0,0.05)"
//           borderBottomRadius={{ base: 0, md: "md" }}
//         >
//           {FormFooter}
//         </ModalFooter>
//       </ModalContent>
//     </Modal>
//   );
// };

// export default ApplicationForm;

// src/components/ApplicationForm.js
// import { useState, useRef, useEffect, useLayoutEffect, useCallback } from "react";
// import { motion } from "framer-motion";
// import {
//   Box,
//   Button,
//   Flex,
//   FormControl,
//   FormLabel,
//   Heading,
//   Input,
//   Select,
//   Text,
//   Textarea,
//   VStack,
//   HStack,
//   useToast,
//   Progress,
//   Icon,
//   SimpleGrid,
//   useColorModeValue,
//   FormErrorMessage,
//   Stepper,
//   Step,
//   StepIndicator,
//   StepStatus,
//   StepIcon,
//   StepNumber,
//   StepTitle,
//   StepDescription,
//   StepSeparator,
//   useSteps,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalBody,
//   ModalFooter,
//   ModalCloseButton,
//   Drawer,
//   DrawerBody,
//   DrawerFooter,
//   DrawerHeader,
//   DrawerOverlay,
//   DrawerContent,
//   DrawerCloseButton,
//   useBreakpointValue,
//   Accordion,
//   AccordionItem,
//   AccordionButton,
//   AccordionPanel,
//   AccordionIcon,
//   List,
//   ListItem,
//   ListIcon,
//   InputGroup,
//   InputLeftElement,
//   Badge,
// } from "@chakra-ui/react";
// import {
//   FiUser,
//   FiPhone,
//   FiMail,
//   FiBriefcase,
//   FiFile,
//   FiCheck,
//   FiArrowRight,
//   FiArrowLeft,
//   FiInfo,
//   FiMapPin,
//   FiCalendar,
//   FiClock,
//   FiDollarSign,
//   FiStar,
// } from "react-icons/fi";

// // ===========================
// // Reusable Components
// // ===========================

// const InputField = ({ icon, label, name, type, value, onChange, error, placeholder, isRequired = false }) => {
//   const focusBorderColor = useColorModeValue("orange.500", "orange.300");
//   const errorBorderColor = useColorModeValue("red.500", "red.300");
//   const bgColor = useColorModeValue("white", "gray.800");
//   const hoverBg = useColorModeValue("gray.50", "gray.700");

//   return (
//     <FormControl isInvalid={!!error} isRequired={isRequired}>
//       <FormLabel
//         htmlFor={name}
//         fontSize={{ base: "sm", md: "md" }}
//         fontWeight="medium"
//         color={useColorModeValue("gray.700", "gray.300")}
//         mb={2}
//       >
//         {label}
//       </FormLabel>
//       <InputGroup>
//         <InputLeftElement pointerEvents="none">
//           <Icon as={icon} color={error ? errorBorderColor : "gray.400"} />
//         </InputLeftElement>
//         <Input
//           type={type}
//           name={name}
//           id={name}
//           value={value}
//           onChange={onChange}
//           placeholder={placeholder}
//           bg={bgColor}
//           _hover={{ bg: hoverBg, borderColor: "gray.300" }}
//           _focus={{
//             borderColor: focusBorderColor,
//             boxShadow: `0 0 0 1px ${focusBorderColor}`,
//             bg: bgColor,
//           }}
//           borderColor={error ? errorBorderColor : "gray.200"}
//           transition="all 0.3s ease"
//           fontSize={{ base: "sm", md: "md" }}
//         />
//       </InputGroup>
//       <FormErrorMessage fontSize="xs" mt={1}>
//         {error}
//       </FormErrorMessage>
//     </FormControl>
//   );
// };

// const FileInput = ({ icon, label, name, onChange, error, isRequired = false, value }) => {
//   const fileInputRef = useRef(null);
//   const handleButtonClick = () => fileInputRef.current?.click();

//   const focusBorderColor = useColorModeValue("orange.500", "orange.300");
//   const errorBorderColor = useColorModeValue("red.500", "red.300");
//   const bgColor = useColorModeValue("white", "gray.800");
//   const hoverBg = useColorModeValue("gray.50", "gray.700");

//   return (
//     <FormControl isInvalid={!!error} isRequired={isRequired}>
//       <FormLabel
//         htmlFor={name}
//         fontSize={{ base: "sm", md: "md" }}
//         fontWeight="medium"
//         color={useColorModeValue("gray.700", "gray.300")}
//         mb={2}
//       >
//         {label}
//       </FormLabel>
//       <Box position="relative">
//         <Input
//           type="file"
//           ref={fileInputRef}
//           id={name}
//           name={name}
//           onChange={onChange}
//           accept=".pdf,.doc,.docx"
//           display="none"
//         />
//         <Flex
//           border="1px solid"
//           borderColor={error ? errorBorderColor : "gray.200"}
//           borderRadius="md"
//           bg={bgColor}
//           _hover={{ bg: hoverBg, borderColor: "gray.300" }}
//           transition="all 0.3s ease"
//           overflow="hidden"
//         >
//           <Flex align="center" justify="center" bg={useColorModeValue("gray.100", "gray.700")} p={3}>
//             <Icon as={icon} color={error ? errorBorderColor : "gray.500"} />
//           </Flex>
//           <Box flex="1" p={2} pl={3} overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap">
//             {value ? value.name : "No file selected"}
//           </Box>
//           <Button onClick={handleButtonClick} size="sm" colorScheme="orange" m={1} px={4}>
//             Browse
//           </Button>
//         </Flex>
//       </Box>
//       <FormErrorMessage fontSize="xs" mt={1}>
//         {error}
//       </FormErrorMessage>
//       <Text fontSize="xs" color="gray.500" mt={1}>
//         Accepted formats: PDF, DOC, DOCX. Max size: 5MB
//       </Text>
//     </FormControl>
//   );
// };

// const JobDetails = ({ job }) => {
//   const bgColor = useColorModeValue("orange.50", "gray.700");
//   const borderColor = useColorModeValue("orange.200", "gray.600");

//   return (
//     <Box bg={bgColor} p={5} borderRadius="md" borderLeft="4px solid" borderColor={borderColor} boxShadow="sm">
//       <Heading size="md" mb={4} color={useColorModeValue("gray.800", "white")}>
//         {job?.title}
//       </Heading>
//       <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
//         <HStack spacing={2}>
//           <Icon as={FiBriefcase} color="gray.500" />
//           <Text fontWeight="medium">Department:</Text>
//           <Text>{job?.department}</Text>
//         </HStack>
//         <HStack spacing={2}>
//           <Icon as={FiMapPin} color="gray.500" />
//           <Text fontWeight="medium">Location:</Text>
//           <Text>{job?.location}</Text>
//         </HStack>
//         <HStack spacing={2}>
//           <Icon as={FiClock} color="gray.500" />
//           <Text fontWeight="medium">Type:</Text>
//           <Badge colorScheme="orange">{job?.type}</Badge>
//         </HStack>
//       </SimpleGrid>
//       <HStack mt={4} spacing={4}>
//         <HStack>
//           <Icon as={FiCalendar} color="gray.500" />
//           <Text fontSize="sm">Apply by: June 30, 2023</Text>
//         </HStack>
//         <HStack>
//           <Icon as={FiDollarSign} color="gray.500" />
//           <Text fontSize="sm">Competitive salary</Text>
//         </HStack>
//         <HStack>
//           <Icon as={FiStar} color="gray.500" />
//           <Text fontSize="sm">5+ years experience</Text>
//         </HStack>
//       </HStack>
//     </Box>
//   );
// };

// const JobRequirements = () => {
//   const borderColor = useColorModeValue("teal.500", "teal.300");

//   return (
//     <Accordion allowToggle>
//       <AccordionItem border="none" boxShadow="sm" borderRadius="md" mb={4}>
//         <h2>
//           <AccordionButton
//             py={4}
//             bg={useColorModeValue("gray.50", "gray.700")}
//             _hover={{ bg: useColorModeValue("gray.100", "gray.600") }}
//           >
//             <Box flex="1" textAlign="left" fontWeight="bold">
//               Job Description & Requirements
//             </Box>
//             <AccordionIcon />
//           </AccordionButton>
//         </h2>
//         <AccordionPanel
//           pb={4}
//           pt={4}
//           borderLeft="1px solid"
//           borderRight="1px solid"
//           borderBottom="1px solid"
//           borderColor="gray.200"
//           borderBottomRadius="md"
//         >
//           <Text mb={4}>
//             We are seeking a talented and motivated professional to join our team. In this role, you will be responsible
//             for developing innovative solutions and collaborating with cross-functional teams to deliver exceptional
//             results.
//           </Text>
//           <Text fontWeight="bold" mb={3}>
//             Key Responsibilities:
//           </Text>
//           <List spacing={2} mb={4}>
//             <ListItem>
//               <ListIcon as={FiCheck} color={borderColor} />
//               Design and implement new features and functionality
//             </ListItem>
//             <ListItem>
//               <ListIcon as={FiCheck} color={borderColor} />
//               Collaborate with product managers and designers
//             </ListItem>
//             <ListItem>
//               <ListIcon as={FiCheck} color={borderColor} />
//               Write clean, maintainable, and efficient code
//             </ListItem>
//             <ListItem>
//               <ListIcon as={FiCheck} color={borderColor} />
//               Participate in code reviews and provide constructive feedback
//             </ListItem>
//           </List>
//           <Text fontWeight="bold" mb={3}>
//             Requirements:
//           </Text>
//           <List spacing={2}>
//             <ListItem>
//               <ListIcon as={FiCheck} color={borderColor} />
//               3+ years of experience in relevant field
//             </ListItem>
//             <ListItem>
//               <ListIcon as={FiCheck} color={borderColor} />
//               Strong knowledge of industry best practices
//             </ListItem>
//             <ListItem>
//               <ListIcon as={FiCheck} color={borderColor} />
//               Excellent communication and teamwork skills
//             </ListItem>
//             <ListItem>
//               <ListIcon as={FiCheck} color={borderColor} />
//               Bachelor's degree in a related field (or equivalent experience)
//             </ListItem>
//           </List>
//         </AccordionPanel>
//       </AccordionItem>
//     </Accordion>
//   );
// };

// const FormStepper = ({ activeStep, steps }) => {
//   const isMobile = useBreakpointValue({ base: true, md: false });
//   const stepperColor = useColorModeValue("orange.500", "orange.300");

//   return (
//     <Box mb={8}>
//       {isMobile ? (
//         <Flex justify="space-between" align="center" mb={4}>
//           {steps.map((step, index) => (
//             <VStack key={index} spacing={1} flex="1" position="relative">
//               <Box
//                 w="10px"
//                 h="10px"
//                 borderRadius="full"
//                 bg={index <= activeStep ? stepperColor : "gray.200"}
//                 zIndex={1}
//               />
//               {index < steps.length - 1 && (
//                 <Box
//                   position="absolute"
//                   h="2px"
//                   bg={index < activeStep ? stepperColor : "gray.200"}
//                   top="5px"
//                   right="-50%"
//                   w="100%"
//                 />
//               )}
//               <Text
//                 fontSize="xs"
//                 fontWeight={index === activeStep ? "bold" : "normal"}
//                 color={index === activeStep ? stepperColor : "gray.500"}
//                 textAlign="center"
//               >
//                 {step.title}
//               </Text>
//             </VStack>
//           ))}
//         </Flex>
//       ) : (
//         <Stepper index={activeStep} size="lg">
//           {steps.map((step, index) => (
//             <Step key={index}>
//               <StepIndicator>
//                 <StepStatus complete={<StepIcon />} incomplete={<StepNumber />} active={<StepNumber />} />
//               </StepIndicator>
//               <Box flexShrink="0">
//                 <StepTitle>{step.title}</StepTitle>
//                 <StepDescription>{step.description}</StepDescription>
//               </Box>
//               <StepSeparator />
//             </Step>
//           ))}
//         </Stepper>
//       )}
//     </Box>
//   );
// };

// // ===========================
// // Main ApplicationForm
// // ===========================
// const ApplicationForm = ({ isOpen, onClose, selectedJob, onSubmit }) => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     mobileNumber: "",
//     email: "",
//     profession: "",
//     resume: null,
//     coverLetter: "",
//   });
//   const [errors, setErrors] = useState({});
//   const [isLoading, setIsLoading] = useState(false);
//   const [uploadProgress, setUploadProgress] = useState(0);
//   const toast = useToast();
//   const isMobile = useBreakpointValue({ base: true, md: false });
//   const headerBg = useColorModeValue("teal.900", "teal.900");
//   const textColor = useColorModeValue("gray.800", "white");

//   // ✅ Ref only on the scrollable container (ModalBody or DrawerBody)
//   const scrollContainerRef = useRef(null);

//   // Save scroll position
//   const scrollPositionRef = useRef(0);

//   const { activeStep, setActiveStep } = useSteps({
//     index: 0,
//     count: 3,
//   });

//   const steps = [
//     { title: "Personal Info", description: "Your basic details" },
//     { title: "Professional Info", description: "Your work experience" },
//     { title: "Additional Info", description: "Extra details" },
//   ];

//   const professions = [
//     "Software Engineer",
//     "Data Scientist",
//     "Product Manager",
//     "UX Designer",
//     "Marketing Specialist",
//     "Customer Success Manager",
//   ];

//   // ✅ Save scroll before any state change
//   const handleInputChange = useCallback((e) => {
//     if (scrollContainerRef.current) {
//       scrollPositionRef.current = scrollContainerRef.current.scrollTop;
//     }
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     setErrors((prev) => ({ ...prev, [name]: "" }));
//   }, []);

//   const handleFileChange = useCallback((e) => {
//     if (scrollContainerRef.current) {
//       scrollPositionRef.current = scrollContainerRef.current.scrollTop;
//     }
//     const file = e.target.files[0];
//     if (file && file.size <= 5 * 1024 * 1024) {
//       setFormData((prev) => ({ ...prev, resume: file }));
//       setErrors((prev) => ({ ...prev, resume: "" }));
//     } else {
//       setErrors((prev) => ({ ...prev, resume: "File size should be less than 5MB" }));
//     }
//   }, []);

//   const validateForm = useCallback(() => {
//     const newErrors = {};
//     if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
//     if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
//     if (!/^\d{10}$/.test(formData.mobileNumber)) newErrors.mobileNumber = "Invalid mobile number";
//     if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email address";
//     if (!formData.profession) newErrors.profession = "Please select a profession";
//     if (!formData.resume) newErrors.resume = "Please upload your resume";
//     if (!formData.coverLetter.trim()) newErrors.coverLetter = "Cover letter is required";
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   }, [formData]);

//   const mockApiUpload = useCallback(() => {
//     return new Promise((resolve) => {
//       const total = 100;
//       let progress = 0;
//       const interval = setInterval(() => {
//         if (progress < total) {
//           progress += 10;
//           setUploadProgress(progress);
//         } else {
//           clearInterval(interval);
//           resolve({ message: "Upload successful!" });
//         }
//       }, 200);
//     });
//   }, []);

//   const handleSubmit = useCallback(
//     async (e) => {
//       e.preventDefault();
//       if (validateForm()) {
//         setIsLoading(true);
//         setUploadProgress(0);
//         try {
//           await mockApiUpload();
//           toast({
//             title: "Application submitted!",
//             description: "We'll be in touch soon.",
//             status: "success",
//             duration: 5000,
//             isClosable: true,
//             position: "top",
//           });
//           onSubmit(formData);
//           onClose();
//         } catch (error) {
//           toast({
//             title: "Submission failed",
//             description: error.message || "Something went wrong",
//             status: "error",
//             duration: 5000,
//             isClosable: true,
//             position: "top",
//           });
//         } finally {
//           setIsLoading(false);
//         }
//       } else {
//         toast({
//           title: "Form has errors",
//           description: "Please correct the errors in the form.",
//           status: "error",
//           duration: 5000,
//           isClosable: true,
//           position: "top",
//         });
//       }
//     },
//     [validateForm, mockApiUpload, formData, onSubmit, onClose, toast]
//   );

//   const handleNext = useCallback(() => {
//     if (activeStep === 0) {
//       const newErrors = {};
//       if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
//       if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
//       if (!/^\d{10}$/.test(formData.mobileNumber)) newErrors.mobileNumber = "Invalid mobile number";
//       if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email address";
//       setErrors(newErrors);
//       if (Object.keys(newErrors).length > 0) return;
//     }
//     setActiveStep((prev) => prev + 1);
//   }, [activeStep, formData]);

//   const handlePrev = useCallback(() => {
//     setActiveStep((prev) => prev - 1);
//   }, []);

//   useEffect(() => {
//     if (isOpen) {
//       setFormData((prev) => ({
//         ...prev,
//         profession: selectedJob?.department || "",
//       }));
//     }
//   }, [isOpen, selectedJob]);

//   useEffect(() => {
//     if (!isOpen) {
//       setFormData({
//         firstName: "",
//         lastName: "",
//         mobileNumber: "",
//         email: "",
//         profession: "",
//         resume: null,
//         coverLetter: "",
//       });
//       setErrors({});
//       setActiveStep(0);
//       setUploadProgress(0);
//     }
//   }, [isOpen]);

//   // ✅ Restore scroll after step changes
//   useLayoutEffect(() => {
//     if (scrollContainerRef.current && scrollPositionRef.current > 0) {
//       scrollContainerRef.current.scrollTop = scrollPositionRef.current;
//     }
//   }, [activeStep]);

//   // ✅ Render content directly (no wrapper component)
//   const renderFormContent = () => (
//     <>
//       <JobDetails job={selectedJob} />
//       <JobRequirements />
//       <Box>
//         <Heading as="h3" size="md" mb={6} color={textColor}>
//           Application Form
//         </Heading>
//         <FormStepper activeStep={activeStep} steps={steps} />
//         <form onSubmit={handleSubmit}>
//           <Box>
//             {activeStep === 0 && (
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <VStack spacing={6} align="stretch">
//                   <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
//                     <InputField
//                       icon={FiUser}
//                       label="First Name"
//                       name="firstName"
//                       type="text"
//                       value={formData.firstName}
//                       onChange={handleInputChange}
//                       error={errors.firstName}
//                       placeholder="John"
//                       isRequired
//                     />
//                     <InputField
//                       icon={FiUser}
//                       label="Last Name"
//                       name="lastName"
//                       type="text"
//                       value={formData.lastName}
//                       onChange={handleInputChange}
//                       error={errors.lastName}
//                       placeholder="Doe"
//                       isRequired
//                     />
//                   </SimpleGrid>
//                   <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
//                     <InputField
//                       icon={FiPhone}
//                       label="Mobile Number"
//                       name="mobileNumber"
//                       type="tel"
//                       value={formData.mobileNumber}
//                       onChange={handleInputChange}
//                       error={errors.mobileNumber}
//                       placeholder="1234567890"
//                       isRequired
//                     />
//                     <InputField
//                       icon={FiMail}
//                       label="Email"
//                       name="email"
//                       type="email"
//                       value={formData.email}
//                       onChange={handleInputChange}
//                       error={errors.email}
//                       placeholder="john@example.com"
//                       isRequired
//                     />
//                   </SimpleGrid>
//                 </VStack>
//               </motion.div>
//             )}

//             {activeStep === 1 && (
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <VStack spacing={6} align="stretch">
//                   <FormControl isInvalid={!!errors.profession} isRequired>
//                     <FormLabel
//                       htmlFor="profession"
//                       fontSize={{ base: "sm", md: "md" }}
//                       fontWeight="medium"
//                       color={useColorModeValue("gray.700", "gray.300")}
//                     >
//                       Profession
//                     </FormLabel>
//                     <InputGroup>
//                       <InputLeftElement pointerEvents="none">
//                         <Icon as={FiBriefcase} color={errors.profession ? "red.500" : "gray.400"} />
//                       </InputLeftElement>
//                       <Select
//                         id="profession"
//                         name="profession"
//                         value={formData.profession}
//                         onChange={handleInputChange}
//                         placeholder="Select your profession"
//                         pl={10}
//                         bg={useColorModeValue("white", "gray.800")}
//                         _hover={{ bg: useColorModeValue("gray.50", "gray.700") }}
//                         borderColor={errors.profession ? "red.500" : "gray.200"}
//                       >
//                         {professions.map((prof) => (
//                           <option key={prof} value={prof}>
//                             {prof}
//                           </option>
//                         ))}
//                       </Select>
//                     </InputGroup>
//                     <FormErrorMessage fontSize="xs">{errors.profession}</FormErrorMessage>
//                   </FormControl>
//                   <FileInput
//                     icon={FiFile}
//                     label="Upload Resume"
//                     name="resume"
//                     onChange={handleFileChange}
//                     error={errors.resume}
//                     isRequired
//                     value={formData.resume}
//                   />
//                   <Box
//                     p={4}
//                     bg={useColorModeValue("blue.50", "blue.900")}
//                     borderRadius="md"
//                     borderLeft="4px solid"
//                     borderColor={useColorModeValue("blue.400", "blue.500")}
//                   >
//                     <HStack spacing={3} align="flex-start">
//                       <Icon as={FiInfo} color={useColorModeValue("blue.500", "blue.300")} mt={1} />
//                       <Text fontSize="sm">
//                         Your resume should highlight your relevant experience, skills, and achievements. Make sure
//                         it's up-to-date and tailored to the position you're applying for.
//                       </Text>
//                     </HStack>
//                   </Box>
//                 </VStack>
//               </motion.div>
//             )}

//             {activeStep === 2 && (
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <VStack spacing={6} align="stretch">
//                   <FormControl isInvalid={!!errors.coverLetter} isRequired>
//                     <FormLabel
//                       htmlFor="coverLetter"
//                       fontSize={{ base: "sm", md: "md" }}
//                       fontWeight="medium"
//                       color={useColorModeValue("gray.700", "gray.300")}
//                     >
//                       Cover Letter
//                     </FormLabel>
//                     <Textarea
//                       id="coverLetter"
//                       name="coverLetter"
//                       value={formData.coverLetter}
//                       onChange={handleInputChange}
//                       placeholder="Tell us why you're a great fit for this position..."
//                       rows={8}
//                       bg={useColorModeValue("white", "gray.800")}
//                       _hover={{ bg: useColorModeValue("gray.50", "gray.700") }}
//                       _focus={{
//                         borderColor: "orange.900",
//                         boxShadow: "0 0 0 1px orange.500",
//                         bg: useColorModeValue("white", "gray.800"),
//                       }}
//                       borderColor={errors.coverLetter ? "red.500" : "gray.200"}
//                       fontSize={{ base: "sm", md: "md" }}
//                     />
//                     <FormErrorMessage fontSize="xs">{errors.coverLetter}</FormErrorMessage>
//                   </FormControl>
//                   <Box
//                     p={4}
//                     bg={useColorModeValue("green.50", "green.900")}
//                     borderRadius="md"
//                     borderLeft="4px solid"
//                     borderColor={useColorModeValue("green.400", "green.500")}
//                   >
//                     <VStack align="flex-start" spacing={2}>
//                       <HStack spacing={3}>
//                         <Icon as={FiInfo} color={useColorModeValue("green.500", "green.300")} />
//                         <Text fontWeight="medium" fontSize="sm">
//                           Tips for a great cover letter:
//                         </Text>
//                       </HStack>
//                       <List spacing={1} pl={8} fontSize="sm">
//                         <ListItem>
//                           <ListIcon as={FiCheck} color={useColorModeValue("green.500", "green.300")} />
//                           Explain why you're interested in this position
//                         </ListItem>
//                         <ListItem>
//                           <ListIcon as={FiCheck} color={useColorModeValue("green.500", "green.300")} />
//                           Highlight your most relevant skills and experiences
//                         </ListItem>
//                         <ListItem>
//                           <ListIcon as={FiCheck} color={useColorModeValue("green.500", "green.300")} />
//                           Show how you can add value to the company
//                         </ListItem>
//                       </List>
//                     </VStack>
//                   </Box>
//                 </VStack>
//               </motion.div>
//             )}
//             {isLoading && (
//               <Box mt={6}>
//                 <Text mb={2} fontSize="sm">
//                   Uploading: {uploadProgress}%
//                 </Text>
//                 <Progress
//                   value={uploadProgress}
//                   size="sm"
//                   colorScheme="teal"
//                   borderRadius="full"
//                   hasStripe
//                   isAnimated
//                 />
//               </Box>
//             )}
//           </Box>
//         </form>
//       </Box>
//     </>
//   );

//   const FormFooter = () => (
//     <Flex
//       justify="space-between"
//       pt={4}
//       pb={4}
//       px={{ base: 4, md: 6 }}
//       borderTop="1px solid"
//       borderColor={useColorModeValue("gray.200", "gray.700")}
//       bg={useColorModeValue("gray.50", "gray.900")}
//     >
//       <Button
//         onClick={handlePrev}
//         isDisabled={activeStep === 0}
//         leftIcon={<FiArrowLeft />}
//         variant="outline"
//         size={{ base: "sm", md: "md" }}
//         fontWeight="medium"
//         type="button"
//       >
//         Previous
//       </Button>
//       {activeStep < steps.length - 1 ? (
//         <Button
//           onClick={handleNext}
//           rightIcon={<FiArrowRight />}
//           color="white"
//           bg="teal.900"
//           size={{ base: "sm", md: "md" }}
//           fontWeight="medium"
//           type="button"
//         >
//           Next Step
//         </Button>
//       ) : (
//         <Button
//           onClick={handleSubmit}
//           color="white"
//           bg="teal.900"
//           isLoading={isLoading}
//           loadingText="Submitting"
//           size={{ base: "sm", md: "md" }}
//           fontWeight="medium"
//         >
//           Submit Application
//         </Button>
//       )}
//     </Flex>
//   );

//   if (isMobile) {
//     return (
//       <Drawer
//         isOpen={isOpen}
//         onClose={onClose}
//         placement="right"
//         size="full"
//         trapFocus={false}
//         autoFocus={false}
//       >
//         <DrawerOverlay />
//         <DrawerContent>
//           <DrawerHeader
//             bg={headerBg}
//             color="white"
//             py={4}
//             px={4}
//             position="sticky"
//             top={0}
//             zIndex={10}
//             boxShadow="md"
//           >
//             <Flex justify="space-between" align="center">
//               <VStack align="flex-start" spacing={0}>
//                 <Heading size="md" noOfLines={1}>
//                   Apply for {selectedJob?.title}
//                 </Heading>
//                 <Text fontSize="xs" opacity={0.8}>
//                   Complete the form below to apply
//                 </Text>
//               </VStack>
//               <DrawerCloseButton position="static" color="white" />
//             </Flex>
//           </DrawerHeader>
//           <DrawerBody
//             p={0}
//             overflowY="auto"
//             ref={scrollContainerRef}
//           >
//             {renderFormContent()}
//           </DrawerBody>
//           <DrawerFooter
//             p={0}
//             position="sticky"
//             bottom={0}
//             zIndex={10}
//             boxShadow="0 -2px 10px rgba(0,0,0,0.05)"
//           >
//             <FormFooter />
//           </DrawerFooter>
//         </DrawerContent>
//       </Drawer>
//     );
//   }

//   return (
//     <Modal
//       isOpen={isOpen}
//       onClose={onClose}
//       size={{ base: "full", md: "4xl" }}
//       scrollBehavior="inside"
//       trapFocus={false}
//       autoFocus={false}
//     >
//       <ModalOverlay />
//       <ModalContent
//         maxW={{ base: "100%", md: "900px" }}
//         maxH={{ base: "100vh", md: "90vh" }}
//         my={{ base: 0, md: "auto" }}
//         borderRadius={{ base: 0, md: "md" }}
//       >
//         <ModalHeader
//           bg={headerBg}
//           color="white"
//           py={4}
//           px={6}
//           borderTopRadius={{ base: 0, md: "md" }}
//           position="sticky"
//           top={0}
//           zIndex={10}
//           boxShadow="md"
//         >
//           <Flex justify="space-between" align="center">
//             <VStack align="flex-start" spacing={0}>
//               <Heading size="md" noOfLines={1}>
//                 Apply for {selectedJob?.title}
//               </Heading>
//               <Text fontSize="xs" opacity={0.8}>
//                 Complete the form below to apply
//               </Text>
//             </VStack>
//             <ModalCloseButton position="static" color="white" />
//           </Flex>
//         </ModalHeader>
//         <ModalBody
//           p={0}
//           maxH="calc(90vh - 140px)"
//           overflowY="auto"
//           ref={scrollContainerRef}
//           style={{ overscrollBehavior: "contain" }}
//         >
//           {renderFormContent()}
//         </ModalBody>
//         <ModalFooter
//           p={0}
//           position="sticky"
//           bottom={0}
//           zIndex={10}
//           boxShadow="0 -2px 10px rgba(0,0,0,0.05)"
//           borderBottomRadius={{ base: 0, md: "md" }}
//         >
//           <FormFooter />
//         </ModalFooter>
//       </ModalContent>
//     </Modal>
//   );
// };

// export default ApplicationForm;

// src/components/ApplicationForm.js
// import { useState, useRef, useEffect, useLayoutEffect, useCallback } from "react";
// import { motion } from "framer-motion";
// import {
//   Box,
//   Button,
//   Flex,
//   FormControl,
//   FormLabel,
//   Heading,
//   Input,
//   Select,
//   Text,
//   Textarea,
//   VStack,
//   HStack,
//   useToast,
//   Progress,
//   Icon,
//   SimpleGrid,
//   useColorModeValue,
//   FormErrorMessage,
//   Stepper,
//   Step,
//   StepIndicator,
//   StepStatus,
//   StepIcon,
//   StepNumber,
//   StepTitle,
//   StepDescription,
//   StepSeparator,
//   useSteps,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalBody,
//   ModalFooter,
//   ModalCloseButton,
//   Drawer,
//   DrawerBody,
//   DrawerFooter,
//   DrawerHeader,
//   DrawerOverlay,
//   DrawerContent,
//   DrawerCloseButton,
//   useBreakpointValue,
//   Accordion,
//   AccordionItem,
//   AccordionButton,
//   AccordionPanel,
//   AccordionIcon,
//   List,
//   ListItem,
//   ListIcon,
//   InputGroup,
//   InputLeftElement,
//   Badge,
// } from "@chakra-ui/react";
// import {
//   FiUser,
//   FiPhone,
//   FiMail,
//   FiBriefcase,
//   FiFile,
//   FiCheck,
//   FiArrowRight,
//   FiArrowLeft,
//   FiInfo,
//   FiMapPin,
//   FiCalendar,
//   FiClock,
//   FiDollarSign,
//   FiStar,
// } from "react-icons/fi";

// // ===========================
// // Reusable Components
// // ===========================

// const InputField = ({ icon, label, name, type, value, onChange, error, placeholder, isRequired = false }) => {
//   const focusBorderColor = useColorModeValue("orange.500", "orange.300");
//   const errorBorderColor = useColorModeValue("red.500", "red.300");
//   const bgColor = useColorModeValue("white", "gray.800");
//   const hoverBg = useColorModeValue("gray.50", "gray.700");

//   return (
//     <FormControl isInvalid={!!error} isRequired={isRequired}>
//       <FormLabel
//         htmlFor={name}
//         fontSize={{ base: "sm", md: "md" }}
//         fontWeight="medium"
//         color={useColorModeValue("gray.700", "gray.300")}
//         mb={2}
//       >
//         {label}
//       </FormLabel>
//       <InputGroup>
//         <InputLeftElement pointerEvents="none">
//           <Icon as={icon} color={error ? errorBorderColor : "gray.400"} />
//         </InputLeftElement>
//         <Input
//           type={type}
//           name={name}
//           id={name}
//           value={value}
//           onChange={onChange}
//           placeholder={placeholder}
//           bg={bgColor}
//           _hover={{ bg: hoverBg, borderColor: "gray.300" }}
//           _focus={{
//             borderColor: focusBorderColor,
//             boxShadow: `0 0 0 1px ${focusBorderColor}`,
//             bg: bgColor,
//           }}
//           borderColor={error ? errorBorderColor : "gray.200"}
//           transition="all 0.3s ease"
//           fontSize={{ base: "sm", md: "md" }}
//         />
//       </InputGroup>
//       <FormErrorMessage fontSize="xs" mt={1}>
//         {error}
//       </FormErrorMessage>
//     </FormControl>
//   );
// };

// const FileInput = ({ icon, label, name, onChange, error, isRequired = false, value }) => {
//   const fileInputRef = useRef(null);
//   const handleButtonClick = () => fileInputRef.current?.click();

//   const focusBorderColor = useColorModeValue("orange.500", "orange.300");
//   const errorBorderColor = useColorModeValue("red.500", "red.300");
//   const bgColor = useColorModeValue("white", "gray.800");
//   const hoverBg = useColorModeValue("gray.50", "gray.700");

//   return (
//     <FormControl isInvalid={!!error} isRequired={isRequired}>
//       <FormLabel
//         htmlFor={name}
//         fontSize={{ base: "sm", md: "md" }}
//         fontWeight="medium"
//         color={useColorModeValue("gray.700", "gray.300")}
//         mb={2}
//       >
//         {label}
//       </FormLabel>
//       <Box position="relative">
//         <Input
//           type="file"
//           ref={fileInputRef}
//           id={name}
//           name={name}
//           onChange={onChange}
//           accept=".pdf,.doc,.docx"
//           display="none"
//         />
//         <Flex
//           border="1px solid"
//           borderColor={error ? errorBorderColor : "gray.200"}
//           borderRadius="md"
//           bg={bgColor}
//           _hover={{ bg: hoverBg, borderColor: "gray.300" }}
//           transition="all 0.3s ease"
//           overflow="hidden"
//         >
//           <Flex align="center" justify="center" bg={useColorModeValue("gray.100", "gray.700")} p={3}>
//             <Icon as={icon} color={error ? errorBorderColor : "gray.500"} />
//           </Flex>
//           <Box flex="1" p={2} pl={3} overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap">
//             {value ? value.name : "No file selected"}
//           </Box>
//           <Button onClick={handleButtonClick} size="sm" colorScheme="orange" m={1} px={4}>
//             Browse
//           </Button>
//         </Flex>
//       </Box>
//       <FormErrorMessage fontSize="xs" mt={1}>
//         {error}
//       </FormErrorMessage>
//       <Text fontSize="xs" color="gray.500" mt={1}>
//         Accepted formats: PDF, DOC, DOCX. Max size: 5MB
//       </Text>
//     </FormControl>
//   );
// };

// const JobDetails = ({ job }) => {
//   const bgColor = useColorModeValue("orange.50", "gray.700");
//   const borderColor = useColorModeValue("orange.200", "gray.600");

//   return (
//     <Box bg={bgColor} p={5} borderRadius="md" borderLeft="4px solid" borderColor={borderColor} boxShadow="sm">
//       <Heading size="md" mb={4} color={useColorModeValue("gray.800", "white")}>
//         {job?.title}
//       </Heading>
//       <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
//         <HStack spacing={2}>
//           <Icon as={FiBriefcase} color="gray.500" />
//           <Text fontWeight="medium">Department:</Text>
//           <Text>{job?.department}</Text>
//         </HStack>
//         <HStack spacing={2}>
//           <Icon as={FiMapPin} color="gray.500" />
//           <Text fontWeight="medium">Location:</Text>
//           <Text>{job?.location}</Text>
//         </HStack>
//         <HStack spacing={2}>
//           <Icon as={FiClock} color="gray.500" />
//           <Text fontWeight="medium">Type:</Text>
//           <Badge colorScheme="orange">{job?.type}</Badge>
//         </HStack>
//       </SimpleGrid>
//       <HStack mt={4} spacing={4}>
//         <HStack>
//           <Icon as={FiCalendar} color="gray.500" />
//           <Text fontSize="sm">Apply by: June 30, 2023</Text>
//         </HStack>
//         <HStack>
//           <Icon as={FiDollarSign} color="gray.500" />
//           <Text fontSize="sm">Competitive salary</Text>
//         </HStack>
//         <HStack>
//           <Icon as={FiStar} color="gray.500" />
//           <Text fontSize="sm">5+ years experience</Text>
//         </HStack>
//       </HStack>
//     </Box>
//   );
// };

// const JobRequirements = () => {
//   const borderColor = useColorModeValue("teal.500", "teal.300");

//   return (
//     <Accordion allowToggle>
//       <AccordionItem border="none" boxShadow="sm" borderRadius="md" mb={4}>
//         <h2>
//           <AccordionButton
//             py={4}
//             bg={useColorModeValue("gray.50", "gray.700")}
//             _hover={{ bg: useColorModeValue("gray.100", "gray.600") }}
//           >
//             <Box flex="1" textAlign="left" fontWeight="bold">
//               Job Description & Requirements
//             </Box>
//             <AccordionIcon />
//           </AccordionButton>
//         </h2>
//         <AccordionPanel
//           pb={4}
//           pt={4}
//           borderLeft="1px solid"
//           borderRight="1px solid"
//           borderBottom="1px solid"
//           borderColor="gray.200"
//           borderBottomRadius="md"
//         >
//           <Text mb={4}>
//             We are seeking a talented and motivated professional to join our team. In this role, you will be responsible
//             for developing innovative solutions and collaborating with cross-functional teams to deliver exceptional
//             results.
//           </Text>
//           <Text fontWeight="bold" mb={3}>
//             Key Responsibilities:
//           </Text>
//           <List spacing={2} mb={4}>
//             <ListItem>
//               <ListIcon as={FiCheck} color={borderColor} />
//               Design and implement new features and functionality
//             </ListItem>
//             <ListItem>
//               <ListIcon as={FiCheck} color={borderColor} />
//               Collaborate with product managers and designers
//             </ListItem>
//             <ListItem>
//               <ListIcon as={FiCheck} color={borderColor} />
//               Write clean, maintainable, and efficient code
//             </ListItem>
//             <ListItem>
//               <ListIcon as={FiCheck} color={borderColor} />
//               Participate in code reviews and provide constructive feedback
//             </ListItem>
//           </List>
//           <Text fontWeight="bold" mb={3}>
//             Requirements:
//           </Text>
//           <List spacing={2}>
//             <ListItem>
//               <ListIcon as={FiCheck} color={borderColor} />
//               3+ years of experience in relevant field
//             </ListItem>
//             <ListItem>
//               <ListIcon as={FiCheck} color={borderColor} />
//               Strong knowledge of industry best practices
//             </ListItem>
//             <ListItem>
//               <ListIcon as={FiCheck} color={borderColor} />
//               Excellent communication and teamwork skills
//             </ListItem>
//             <ListItem>
//               <ListIcon as={FiCheck} color={borderColor} />
//               Bachelor's degree in a related field (or equivalent experience)
//             </ListItem>
//           </List>
//         </AccordionPanel>
//       </AccordionItem>
//     </Accordion>
//   );
// };

// const FormStepper = ({ activeStep, steps }) => {
//   const isMobile = useBreakpointValue({ base: true, md: false });
//   const stepperColor = useColorModeValue("orange.500", "orange.300");

//   return (
//     <Box mb={8}>
//       {isMobile ? (
//         <Flex justify="space-between" align="center" mb={4}>
//           {steps.map((step, index) => (
//             <VStack key={index} spacing={1} flex="1" position="relative">
//               <Box
//                 w="10px"
//                 h="10px"
//                 borderRadius="full"
//                 bg={index <= activeStep ? stepperColor : "gray.200"}
//                 zIndex={1}
//               />
//               {index < steps.length - 1 && (
//                 <Box
//                   position="absolute"
//                   h="2px"
//                   bg={index < activeStep ? stepperColor : "gray.200"}
//                   top="5px"
//                   right="-50%"
//                   w="100%"
//                 />
//               )}
//               <Text
//                 fontSize="xs"
//                 fontWeight={index === activeStep ? "bold" : "normal"}
//                 color={index === activeStep ? stepperColor : "gray.500"}
//                 textAlign="center"
//               >
//                 {step.title}
//               </Text>
//             </VStack>
//           ))}
//         </Flex>
//       ) : (
//         <Stepper index={activeStep} size="lg">
//           {steps.map((step, index) => (
//             <Step key={index}>
//               <StepIndicator>
//                 <StepStatus complete={<StepIcon />} incomplete={<StepNumber />} active={<StepNumber />} />
//               </StepIndicator>
//               <Box flexShrink="0">
//                 <StepTitle>{step.title}</StepTitle>
//                 <StepDescription>{step.description}</StepDescription>
//               </Box>
//               <StepSeparator />
//             </Step>
//           ))}
//         </Stepper>
//       )}
//     </Box>
//   );
// };

// // ===========================
// // Main ApplicationForm
// // ===========================
// const ApplicationForm = ({ isOpen, onClose, selectedJob, onSubmit }) => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     mobileNumber: "",
//     email: "",
//     profession: "",
//     resume: null,
//     coverLetter: "",
//   });
//   const [errors, setErrors] = useState({});
//   const [isLoading, setIsLoading] = useState(false);
//   const [uploadProgress, setUploadProgress] = useState(0);
//   const toast = useToast();
//   const isMobile = useBreakpointValue({ base: true, md: false });
//   const headerBg = useColorModeValue("teal.900", "teal.900");
//   const textColor = useColorModeValue("gray.800", "white");

//   // ✅ Ref directly on the scrollable container (ModalBody or DrawerBody)
//   const scrollContainerRef = useRef(null);

//   // Save scroll position
//   const scrollPositionRef = useRef(0);

//   const { activeStep, setActiveStep } = useSteps({
//     index: 0,
//     count: 3,
//   });

//   const steps = [
//     { title: "Personal Info", description: "Your basic details" },
//     { title: "Professional Info", description: "Your work experience" },
//     { title: "Additional Info", description: "Extra details" },
//   ];

//   const professions = [
//     "Software Engineer",
//     "Data Scientist",
//     "Product Manager",
//     "UX Designer",
//     "Marketing Specialist",
//     "Customer Success Manager",
//   ];

//   const handleInputChange = useCallback((e) => {
//     if (scrollContainerRef.current) {
//       scrollPositionRef.current = scrollContainerRef.current.scrollTop;
//     }
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     setErrors((prev) => ({ ...prev, [name]: "" }));
//   }, []);

//   const handleFileChange = useCallback((e) => {
//     if (scrollContainerRef.current) {
//       scrollPositionRef.current = scrollContainerRef.current.scrollTop;
//     }
//     const file = e.target.files[0];
//     if (file && file.size <= 5 * 1024 * 1024) {
//       setFormData((prev) => ({ ...prev, resume: file }));
//       setErrors((prev) => ({ ...prev, resume: "" }));
//     } else {
//       setErrors((prev) => ({ ...prev, resume: "File size should be less than 5MB" }));
//     }
//   }, []);

//   const validateForm = useCallback(() => {
//     const newErrors = {};
//     if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
//     if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
//     if (!/^\d{10}$/.test(formData.mobileNumber)) newErrors.mobileNumber = "Invalid mobile number";
//     if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email address";
//     if (!formData.profession) newErrors.profession = "Please select a profession";
//     if (!formData.resume) newErrors.resume = "Please upload your resume";
//     if (!formData.coverLetter.trim()) newErrors.coverLetter = "Cover letter is required";
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   }, [formData]);

//   const mockApiUpload = useCallback(() => {
//     return new Promise((resolve) => {
//       const total = 100;
//       let progress = 0;
//       const interval = setInterval(() => {
//         if (progress < total) {
//           progress += 10;
//           setUploadProgress(progress);
//         } else {
//           clearInterval(interval);
//           resolve({ message: "Upload successful!" });
//         }
//       }, 200);
//     });
//   }, []);

//   const handleSubmit = useCallback(
//     async (e) => {
//       e.preventDefault();
//       if (validateForm()) {
//         setIsLoading(true);
//         setUploadProgress(0);
//         try {
//           await mockApiUpload();
//           toast({
//             title: "Application submitted!",
//             description: "We'll be in touch soon.",
//             status: "success",
//             duration: 5000,
//             isClosable: true,
//             position: "top",
//           });
//           onSubmit(formData);
//           onClose();
//         } catch (error) {
//           toast({
//             title: "Submission failed",
//             description: error.message || "Something went wrong",
//             status: "error",
//             duration: 5000,
//             isClosable: true,
//             position: "top",
//           });
//         } finally {
//           setIsLoading(false);
//         }
//       } else {
//         toast({
//           title: "Form has errors",
//           description: "Please correct the errors in the form.",
//           status: "error",
//           duration: 5000,
//           isClosable: true,
//           position: "top",
//         });
//       }
//     },
//     [validateForm, mockApiUpload, formData, onSubmit, onClose, toast]
//   );

//   const handleNext = useCallback(() => {
//     if (activeStep === 0) {
//       const newErrors = {};
//       if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
//       if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
//       if (!/^\d{10}$/.test(formData.mobileNumber)) newErrors.mobileNumber = "Invalid mobile number";
//       if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email address";
//       setErrors(newErrors);
//       if (Object.keys(newErrors).length > 0) return;
//     }
//     setActiveStep((prev) => prev + 1);
//   }, [activeStep, formData]);

//   const handlePrev = useCallback(() => {
//     setActiveStep((prev) => prev - 1);
//   }, []);

//   useEffect(() => {
//     if (isOpen) {
//       setFormData((prev) => ({
//         ...prev,
//         profession: selectedJob?.department || "",
//       }));
//     }
//   }, [isOpen, selectedJob]);

//   useEffect(() => {
//     if (!isOpen) {
//       setFormData({
//         firstName: "",
//         lastName: "",
//         mobileNumber: "",
//         email: "",
//         profession: "",
//         resume: null,
//         coverLetter: "",
//       });
//       setErrors({});
//       setActiveStep(0);
//       setUploadProgress(0);
//     }
//   }, [isOpen]);

//   // ✅ Restore scroll only when activeStep changes
//   useLayoutEffect(() => {
//     if (scrollContainerRef.current && scrollPositionRef.current > 0) {
//       scrollContainerRef.current.scrollTop = scrollPositionRef.current;
//     }
//   }, [activeStep]);

//   // ✅ Render content directly (no wrapper function)
//   const renderFormContent = () => (
//     <>
//       <JobDetails job={selectedJob} />
//       <JobRequirements />
//       <Box>
//         <Heading as="h3" size="md" mb={6} color={textColor}>
//           Application Form
//         </Heading>
//         <FormStepper activeStep={activeStep} steps={steps} />
//         <form onSubmit={handleSubmit}>
//           <Box>
//             {activeStep === 0 && (
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <VStack spacing={6} align="stretch">
//                   <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
//                     <InputField
//                       icon={FiUser}
//                       label="First Name"
//                       name="firstName"
//                       type="text"
//                       value={formData.firstName}
//                       onChange={handleInputChange}
//                       error={errors.firstName}
//                       placeholder="John"
//                       isRequired
//                     />
//                     <InputField
//                       icon={FiUser}
//                       label="Last Name"
//                       name="lastName"
//                       type="text"
//                       value={formData.lastName}
//                       onChange={handleInputChange}
//                       error={errors.lastName}
//                       placeholder="Doe"
//                       isRequired
//                     />
//                   </SimpleGrid>
//                   <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
//                     <InputField
//                       icon={FiPhone}
//                       label="Mobile Number"
//                       name="mobileNumber"
//                       type="tel"
//                       value={formData.mobileNumber}
//                       onChange={handleInputChange}
//                       error={errors.mobileNumber}
//                       placeholder="1234567890"
//                       isRequired
//                     />
//                     <InputField
//                       icon={FiMail}
//                       label="Email"
//                       name="email"
//                       type="email"
//                       value={formData.email}
//                       onChange={handleInputChange}
//                       error={errors.email}
//                       placeholder="john@example.com"
//                       isRequired
//                     />
//                   </SimpleGrid>
//                 </VStack>
//               </motion.div>
//             )}

//             {activeStep === 1 && (
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <VStack spacing={6} align="stretch">
//                   <FormControl isInvalid={!!errors.profession} isRequired>
//                     <FormLabel
//                       htmlFor="profession"
//                       fontSize={{ base: "sm", md: "md" }}
//                       fontWeight="medium"
//                       color={useColorModeValue("gray.700", "gray.300")}
//                     >
//                       Profession
//                     </FormLabel>
//                     <InputGroup>
//                       <InputLeftElement pointerEvents="none">
//                         <Icon as={FiBriefcase} color={errors.profession ? "red.500" : "gray.400"} />
//                       </InputLeftElement>
//                       <Select
//                         id="profession"
//                         name="profession"
//                         value={formData.profession}
//                         onChange={handleInputChange}
//                         placeholder="Select your profession"
//                         pl={10}
//                         bg={useColorModeValue("white", "gray.800")}
//                         _hover={{ bg: useColorModeValue("gray.50", "gray.700") }}
//                         borderColor={errors.profession ? "red.500" : "gray.200"}
//                       >
//                         {professions.map((prof) => (
//                           <option key={prof} value={prof}>
//                             {prof}
//                           </option>
//                         ))}
//                       </Select>
//                     </InputGroup>
//                     <FormErrorMessage fontSize="xs">{errors.profession}</FormErrorMessage>
//                   </FormControl>
//                   <FileInput
//                     icon={FiFile}
//                     label="Upload Resume"
//                     name="resume"
//                     onChange={handleFileChange}
//                     error={errors.resume}
//                     isRequired
//                     value={formData.resume}
//                   />
//                   <Box
//                     p={4}
//                     bg={useColorModeValue("blue.50", "blue.900")}
//                     borderRadius="md"
//                     borderLeft="4px solid"
//                     borderColor={useColorModeValue("blue.400", "blue.500")}
//                   >
//                     <HStack spacing={3} align="flex-start">
//                       <Icon as={FiInfo} color={useColorModeValue("blue.500", "blue.300")} mt={1} />
//                       <Text fontSize="sm">
//                         Your resume should highlight your relevant experience, skills, and achievements. Make sure
//                         it's up-to-date and tailored to the position you're applying for.
//                       </Text>
//                     </HStack>
//                   </Box>
//                 </VStack>
//               </motion.div>
//             )}

//             {activeStep === 2 && (
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <VStack spacing={6} align="stretch">
//                   <FormControl isInvalid={!!errors.coverLetter} isRequired>
//                     <FormLabel
//                       htmlFor="coverLetter"
//                       fontSize={{ base: "sm", md: "md" }}
//                       fontWeight="medium"
//                       color={useColorModeValue("gray.700", "gray.300")}
//                     >
//                       Cover Letter
//                     </FormLabel>
//                     <Textarea
//                       id="coverLetter"
//                       name="coverLetter"
//                       value={formData.coverLetter}
//                       onChange={handleInputChange}
//                       placeholder="Tell us why you're a great fit for this position..."
//                       rows={8}
//                       bg={useColorModeValue("white", "gray.800")}
//                       _hover={{ bg: useColorModeValue("gray.50", "gray.700") }}
//                       _focus={{
//                         borderColor: "orange.900",
//                         boxShadow: "0 0 0 1px orange.500",
//                         bg: useColorModeValue("white", "gray.800"),
//                       }}
//                       borderColor={errors.coverLetter ? "red.500" : "gray.200"}
//                       fontSize={{ base: "sm", md: "md" }}
//                     />
//                     <FormErrorMessage fontSize="xs">{errors.coverLetter}</FormErrorMessage>
//                   </FormControl>
//                   <Box
//                     p={4}
//                     bg={useColorModeValue("green.50", "green.900")}
//                     borderRadius="md"
//                     borderLeft="4px solid"
//                     borderColor={useColorModeValue("green.400", "green.500")}
//                   >
//                     <VStack align="flex-start" spacing={2}>
//                       <HStack spacing={3}>
//                         <Icon as={FiInfo} color={useColorModeValue("green.500", "green.300")} />
//                         <Text fontWeight="medium" fontSize="sm">
//                           Tips for a great cover letter:
//                         </Text>
//                       </HStack>
//                       <List spacing={1} pl={8} fontSize="sm">
//                         <ListItem>
//                           <ListIcon as={FiCheck} color={useColorModeValue("green.500", "green.300")} />
//                           Explain why you're interested in this position
//                         </ListItem>
//                         <ListItem>
//                           <ListIcon as={FiCheck} color={useColorModeValue("green.500", "green.300")} />
//                           Highlight your most relevant skills and experiences
//                         </ListItem>
//                         <ListItem>
//                           <ListIcon as={FiCheck} color={useColorModeValue("green.500", "green.300")} />
//                           Show how you can add value to the company
//                         </ListItem>
//                       </List>
//                     </VStack>
//                   </Box>
//                 </VStack>
//               </motion.div>
//             )}
//             {isLoading && (
//               <Box mt={6}>
//                 <Text mb={2} fontSize="sm">
//                   Uploading: {uploadProgress}%
//                 </Text>
//                 <Progress
//                   value={uploadProgress}
//                   size="sm"
//                   colorScheme="teal"
//                   borderRadius="full"
//                   hasStripe
//                   isAnimated
//                 />
//               </Box>
//             )}
//           </Box>
//         </form>
//       </Box>
//     </>
//   );

//   const FormFooter = () => (
//     <Flex
//       justify="space-between"
//       pt={4}
//       pb={4}
//       px={{ base: 4, md: 6 }}
//       borderTop="1px solid"
//       borderColor={useColorModeValue("gray.200", "gray.700")}
//       bg={useColorModeValue("gray.50", "gray.900")}
//     >
//       <Button
//         onClick={handlePrev}
//         isDisabled={activeStep === 0}
//         leftIcon={<FiArrowLeft />}
//         variant="outline"
//         size={{ base: "sm", md: "md" }}
//         fontWeight="medium"
//         type="button"
//       >
//         Previous
//       </Button>
//       {activeStep < steps.length - 1 ? (
//         <Button
//           onClick={handleNext}
//           rightIcon={<FiArrowRight />}
//           color="white"
//           bg="teal.900"
//           size={{ base: "sm", md: "md" }}
//           fontWeight="medium"
//           type="button"
//         >
//           Next Step
//         </Button>
//       ) : (
//         <Button
//           onClick={handleSubmit}
//           color="white"
//           bg="teal.900"
//           isLoading={isLoading}
//           loadingText="Submitting"
//           size={{ base: "sm", md: "md" }}
//           fontWeight="medium"
//         >
//           Submit Application
//         </Button>
//       )}
//     </Flex>
//   );

//   if (isMobile) {
//     return (
//       <Drawer
//         isOpen={isOpen}
//         onClose={onClose}
//         placement="right"
//         size="full"
//         trapFocus={false}
//         autoFocus={false}
//       >
//         <DrawerOverlay />
//         <DrawerContent>
//           <DrawerHeader
//             bg={headerBg}
//             color="white"
//             py={4}
//             px={4}
//             position="sticky"
//             top={0}
//             zIndex={10}
//             boxShadow="md"
//           >
//             <Flex justify="space-between" align="center">
//               <VStack align="flex-start" spacing={0}>
//                 <Heading size="md" noOfLines={1}>
//                   Apply for {selectedJob?.title}
//                 </Heading>
//                 <Text fontSize="xs" opacity={0.8}>
//                   Complete the form below to apply
//                 </Text>
//               </VStack>
//               <DrawerCloseButton position="static" color="white" />
//             </Flex>
//           </DrawerHeader>
//           <DrawerBody
//             p={0}
//             overflowY="auto"
//             ref={scrollContainerRef}
//           >
//             {renderFormContent()}
//           </DrawerBody>
//           <DrawerFooter
//             p={0}
//             position="sticky"
//             bottom={0}
//             zIndex={10}
//             boxShadow="0 -2px 10px rgba(0,0,0,0.05)"
//           >
//             <FormFooter />
//           </DrawerFooter>
//         </DrawerContent>
//       </Drawer>
//     );
//   }

//   return (
//     <Modal
//       isOpen={isOpen}
//       onClose={onClose}
//       size={{ base: "full", md: "4xl" }}
//       scrollBehavior="inside"
//       trapFocus={false}
//       autoFocus={false}
//     >
//       <ModalOverlay />
//       <ModalContent
//         maxW={{ base: "100%", md: "900px" }}
//         maxH={{ base: "100vh", md: "90vh" }}
//         my={{ base: 0, md: "auto" }}
//         borderRadius={{ base: 0, md: "md" }}
//       >
//         <ModalHeader
//           bg={headerBg}
//           color="white"
//           py={4}
//           px={6}
//           borderTopRadius={{ base: 0, md: "md" }}
//           position="sticky"
//           top={0}
//           zIndex={10}
//           boxShadow="md"
//         >
//           <Flex justify="space-between" align="center">
//             <VStack align="flex-start" spacing={0}>
//               <Heading size="md" noOfLines={1}>
//                 Apply for {selectedJob?.title}
//               </Heading>
//               <Text fontSize="xs" opacity={0.8}>
//                 Complete the form below to apply
//               </Text>
//             </VStack>
//             <ModalCloseButton position="static" color="white" />
//           </Flex>
//         </ModalHeader>
//         <ModalBody
//           p={0}
//           maxH="calc(90vh - 140px)"
//           overflowY="auto"
//           ref={scrollContainerRef}

//         >
//           {renderFormContent()}
//         </ModalBody>
//         <ModalFooter
//           p={0}
//           position="sticky"
//           bottom={0}
//           zIndex={10}
//           boxShadow="0 -2px 10px rgba(0,0,0,0.05)"
//           borderBottomRadius={{ base: 0, md: "md" }}
//         >
//           <FormFooter />
//         </ModalFooter>
//       </ModalContent>
//     </Modal>
//   );
// };

// export default ApplicationForm;
// // src/components/ApplicationForm.js
// import { useState, useRef, useEffect, useLayoutEffect } from "react";
// import { motion } from "framer-motion";
// import {
//   Box,
//   Button,
//   Flex,
//   FormControl,
//   FormLabel,
//   Heading,
//   Input,
//   Select,
//   Text,
//   Textarea,
//   VStack,
//   HStack,
//   useToast,
//   Progress,
//   Icon,
//   SimpleGrid,
//   useColorModeValue,
//   FormErrorMessage,
//   Stepper,
//   Step,
//   StepIndicator,
//   StepStatus,
//   StepIcon,
//   StepNumber,
//   StepTitle,
//   StepDescription,
//   StepSeparator,
//   useSteps,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalBody,
//   ModalFooter,
//   ModalCloseButton,
//   Drawer,
//   DrawerBody,
//   DrawerFooter,
//   DrawerHeader,
//   DrawerOverlay,
//   DrawerContent,
//   DrawerCloseButton,
//   useBreakpointValue,
//   Accordion,
//   AccordionItem,
//   AccordionButton,
//   AccordionPanel,
//   AccordionIcon,
//   List,
//   ListItem,
//   ListIcon,
//   InputGroup,
//   InputLeftElement,
//   Badge,
// } from "@chakra-ui/react";
// import {
//   FiUser,
//   FiPhone,
//   FiMail,
//   FiBriefcase,
//   FiFile,
//   FiCheck,
//   FiArrowRight,
//   FiArrowLeft,
//   FiInfo,
//   FiMapPin,
//   FiCalendar,
//   FiClock,
//   FiDollarSign,
//   FiStar,
// } from "react-icons/fi";

// // ===========================
// // Reusable Components
// // ===========================

// const InputField = ({ icon, label, name, type, value, onChange, error, placeholder, isRequired = false }) => {
//   const focusBorderColor = useColorModeValue("orange.500", "orange.300");
//   const errorBorderColor = useColorModeValue("red.500", "red.300");
//   const bgColor = useColorModeValue("white", "gray.800");
//   const hoverBg = useColorModeValue("gray.50", "gray.700");

//   return (
//     <FormControl isInvalid={!!error} isRequired={isRequired}>
//       <FormLabel
//         htmlFor={name}
//         fontSize={{ base: "sm", md: "md" }}
//         fontWeight="medium"
//         color={useColorModeValue("gray.700", "gray.300")}
//         mb={2}
//       >
//         {label}
//       </FormLabel>
//       <InputGroup>
//         <InputLeftElement pointerEvents="none">
//           <Icon as={icon} color={error ? errorBorderColor : "gray.400"} />
//         </InputLeftElement>
//         <Input
//           type={type}
//           name={name}
//           id={name}
//           value={value}
//           onChange={onChange}
//           placeholder={placeholder}
//           bg={bgColor}
//           _hover={{ bg: hoverBg, borderColor: "gray.300" }}
//           _focus={{
//             borderColor: focusBorderColor,
//             boxShadow: `0 0 0 1px ${focusBorderColor}`,
//             bg: bgColor,
//           }}
//           borderColor={error ? errorBorderColor : "gray.200"}
//           transition="all 0.3s ease"
//           fontSize={{ base: "sm", md: "md" }}
//         />
//       </InputGroup>
//       <FormErrorMessage fontSize="xs" mt={1}>
//         {error}
//       </FormErrorMessage>
//     </FormControl>
//   );
// };

// const FileInput = ({ icon, label, name, onChange, error, isRequired = false, value }) => {
//   const fileInputRef = useRef(null);
//   const handleButtonClick = () => fileInputRef.current?.click();

//   const focusBorderColor = useColorModeValue("orange.500", "orange.300");
//   const errorBorderColor = useColorModeValue("red.500", "red.300");
//   const bgColor = useColorModeValue("white", "gray.800");
//   const hoverBg = useColorModeValue("gray.50", "gray.700");

//   return (
//     <FormControl isInvalid={!!error} isRequired={isRequired}>
//       <FormLabel
//         htmlFor={name}
//         fontSize={{ base: "sm", md: "md" }}
//         fontWeight="medium"
//         color={useColorModeValue("gray.700", "gray.300")}
//         mb={2}
//       >
//         {label}
//       </FormLabel>
//       <Box position="relative">
//         <Input
//           type="file"
//           ref={fileInputRef}
//           id={name}
//           name={name}
//           onChange={onChange}
//           accept=".pdf,.doc,.docx"
//           display="none"
//         />
//         <Flex
//           border="1px solid"
//           borderColor={error ? errorBorderColor : "gray.200"}
//           borderRadius="md"
//           bg={bgColor}
//           _hover={{ bg: hoverBg, borderColor: "gray.300" }}
//           transition="all 0.3s ease"
//           overflow="auto"
//         >
//           <Flex align="center" justify="center" bg={useColorModeValue("gray.100", "gray.700")} p={3}>
//             <Icon as={icon} color={error ? errorBorderColor : "gray.500"} />
//           </Flex>
//           <Box flex="1" p={2} pl={3} overflow="auto" textOverflow="ellipsis" whiteSpace="nowrap">
//             {value ? value.name : "No file selected"}
//           </Box>
//           <Button onClick={handleButtonClick} size="sm" colorScheme="orange" m={1} px={4}>
//             Browse
//           </Button>
//         </Flex>
//       </Box>
//       <FormErrorMessage fontSize="xs" mt={1}>
//         {error}
//       </FormErrorMessage>
//       <Text fontSize="xs" color="gray.500" mt={1}>
//         Accepted formats: PDF, DOC, DOCX. Max size: 5MB
//       </Text>
//     </FormControl>
//   );
// };

// const JobDetails = ({ job }) => {
//   const bgColor = useColorModeValue("orange.50", "gray.700");
//   const borderColor = useColorModeValue("orange.200", "gray.600");

//   return (
//     <Box bg={bgColor} p={5} borderRadius="md" borderLeft="4px solid" borderColor={borderColor} boxShadow="sm">
//       <Heading size="md" mb={4} color={useColorModeValue("gray.800", "white")}>
//         {job?.title}
//       </Heading>
//       <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
//         <HStack spacing={2}>
//           <Icon as={FiBriefcase} color="gray.500" />
//           <Text fontWeight="medium">Department:</Text>
//           <Text>{job?.department}</Text>
//         </HStack>
//         <HStack spacing={2}>
//           <Icon as={FiMapPin} color="gray.500" />
//           <Text fontWeight="medium">Location:</Text>
//           <Text>{job?.location}</Text>
//         </HStack>
//         <HStack spacing={2}>
//           <Icon as={FiClock} color="gray.500" />
//           <Text fontWeight="medium">Type:</Text>
//           <Badge colorScheme="orange">{job?.type}</Badge>
//         </HStack>
//       </SimpleGrid>
//       <HStack mt={4} spacing={4}>
//         <HStack>
//           <Icon as={FiCalendar} color="gray.500" />
//           <Text fontSize="sm">Apply by: June 30, 2023</Text>
//         </HStack>
//         <HStack>
//           <Icon as={FiDollarSign} color="gray.500" />
//           <Text fontSize="sm">Competitive salary</Text>
//         </HStack>
//         <HStack>
//           <Icon as={FiStar} color="gray.500" />
//           <Text fontSize="sm">5+ years experience</Text>
//         </HStack>
//       </HStack>
//     </Box>
//   );
// };

// const JobRequirements = () => {
//   const borderColor = useColorModeValue("teal.500", "teal.300");

//   return (
//     <Accordion allowToggle>
//       <AccordionItem border="none" boxShadow="sm" borderRadius="md" mb={4}>
//         <h2>
//           <AccordionButton
//             py={4}
//             bg={useColorModeValue("gray.50", "gray.700")}
//             _hover={{ bg: useColorModeValue("gray.100", "gray.600") }}
//           >
//             <Box flex="1" textAlign="left" fontWeight="bold">
//               Job Description & Requirements
//             </Box>
//             <AccordionIcon />
//           </AccordionButton>
//         </h2>
//         <AccordionPanel
//           pb={4}
//           pt={4}
//           borderLeft="1px solid"
//           borderRight="1px solid"
//           borderBottom="1px solid"
//           borderColor="gray.200"
//           borderBottomRadius="md"
//         >
//           <Text mb={4}>
//             We are seeking a talented and motivated professional to join our team. In this role, you will be responsible
//             for developing innovative solutions and collaborating with cross-functional teams to deliver exceptional
//             results.
//           </Text>
//           <Text fontWeight="bold" mb={3}>
//             Key Responsibilities:
//           </Text>
//           <List spacing={2} mb={4}>
//             <ListItem>
//               <ListIcon as={FiCheck} color={borderColor} />
//               Design and implement new features and functionality
//             </ListItem>
//             <ListItem>
//               <ListIcon as={FiCheck} color={borderColor} />
//               Collaborate with product managers and designers
//             </ListItem>
//             <ListItem>
//               <ListIcon as={FiCheck} color={borderColor} />
//               Write clean, maintainable, and efficient code
//             </ListItem>
//             <ListItem>
//               <ListIcon as={FiCheck} color={borderColor} />
//               Participate in code reviews and provide constructive feedback
//             </ListItem>
//           </List>
//           <Text fontWeight="bold" mb={3}>
//             Requirements:
//           </Text>
//           <List spacing={2}>
//             <ListItem>
//               <ListIcon as={FiCheck} color={borderColor} />
//               3+ years of experience in relevant field
//             </ListItem>
//             <ListItem>
//               <ListIcon as={FiCheck} color={borderColor} />
//               Strong knowledge of industry best practices
//             </ListItem>
//             <ListItem>
//               <ListIcon as={FiCheck} color={borderColor} />
//               Excellent communication and teamwork skills
//             </ListItem>
//             <ListItem>
//               <ListIcon as={FiCheck} color={borderColor} />
//               Bachelor's degree in a related field (or equivalent experience)
//             </ListItem>
//           </List>
//         </AccordionPanel>
//       </AccordionItem>
//     </Accordion>
//   );
// };

// const FormStepper = ({ activeStep, steps }) => {
//   const isMobile = useBreakpointValue({ base: true, md: false });
//   const stepperColor = useColorModeValue("orange.500", "orange.300");

//   return (
//     <Box mb={8}>
//       {isMobile ? (
//         <Flex justify="space-between" align="center" mb={4}>
//           {steps.map((step, index) => (
//             <VStack key={index} spacing={1} flex="1" position="relative">
//               <Box
//                 w="10px"
//                 h="10px"
//                 borderRadius="full"
//                 bg={index <= activeStep ? stepperColor : "gray.200"}
//                 zIndex={1}
//               />
//               {index < steps.length - 1 && (
//                 <Box
//                   position="absolute"
//                   h="2px"
//                   bg={index < activeStep ? stepperColor : "gray.200"}
//                   top="5px"
//                   right="-50%"
//                   w="100%"
//                 />
//               )}
//               <Text
//                 fontSize="xs"
//                 fontWeight={index === activeStep ? "bold" : "normal"}
//                 color={index === activeStep ? stepperColor : "gray.500"}
//                 textAlign="center"
//               >
//                 {step.title}
//               </Text>
//             </VStack>
//           ))}
//         </Flex>
//       ) : (
//         <Stepper index={activeStep} size="lg">
//           {steps.map((step, index) => (
//             <Step key={index}>
//               <StepIndicator>
//                 <StepStatus complete={<StepIcon />} incomplete={<StepNumber />} active={<StepNumber />} />
//               </StepIndicator>
//               <Box flexShrink="0">
//                 <StepTitle>{step.title}</StepTitle>
//                 <StepDescription>{step.description}</StepDescription>
//               </Box>
//               <StepSeparator />
//             </Step>
//           ))}
//         </Stepper>
//       )}
//     </Box>
//   );
// };

// // ===========================
// // Main ApplicationForm
// // ===========================
// const ApplicationForm = ({ isOpen, onClose, selectedJob, onSubmit }) => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     mobileNumber: "",
//     email: "",
//     profession: "",
//     resume: null,
//     coverLetter: "",
//   });
//   const [errors, setErrors] = useState({});
//   const [isLoading, setIsLoading] = useState(false);
//   const [uploadProgress, setUploadProgress] = useState(0);
//   const toast = useToast();
//   const isMobile = useBreakpointValue({ base: true, md: false });
//   const headerBg = useColorModeValue("teal.900", "teal.900");
//   const textColor = useColorModeValue("gray.800", "white");

//   // ✅ Ref only on the scrollable container (ModalBody or DrawerBody)
//   const scrollContainerRef = useRef(null);

//   // Save scroll position
//   const scrollPositionRef = useRef(0);

//   const { activeStep, setActiveStep } = useSteps({
//     index: 0,
//     count: 3,
//   });

//   const steps = [
//     { title: "Personal Info", description: "Your basic details" },
//     { title: "Professional Info", description: "Your work experience" },
//     { title: "Additional Info", description: "Extra details" },
//   ];

//   const professions = [
//     "Software Engineer",
//     "Data Scientist",
//     "Product Manager",
//     "UX Designer",
//     "Marketing Specialist",
//     "Customer Success Manager",
//   ];

//   // ✅ Save scroll before any state change
//   const handleInputChange = (e) => {
//     if (scrollContainerRef.current) {
//       scrollPositionRef.current = scrollContainerRef.current.scrollTop;
//     }
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     setErrors((prev) => ({ ...prev, [name]: "" }));
//   };

//   const handleFileChange = (e) => {
//     if (scrollContainerRef.current) {
//       scrollPositionRef.current = scrollContainerRef.current.scrollTop;
//     }
//     const file = e.target.files[0];
//     if (file && file.size <= 5 * 1024 * 1024) {
//       setFormData((prev) => ({ ...prev, resume: file }));
//       setErrors((prev) => ({ ...prev, resume: "" }));
//     } else {
//       setErrors((prev) => ({ ...prev, resume: "File size should be less than 5MB" }));
//     }
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
//     if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
//     if (!/^\d{10}$/.test(formData.mobileNumber)) newErrors.mobileNumber = "Invalid mobile number";
//     if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email address";
//     if (!formData.profession) newErrors.profession = "Please select a profession";
//     if (!formData.resume) newErrors.resume = "Please upload your resume";
//     if (!formData.coverLetter.trim()) newErrors.coverLetter = "Cover letter is required";
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const mockApiUpload = () => {
//     return new Promise((resolve) => {
//       const total = 100;
//       let progress = 0;
//       const interval = setInterval(() => {
//         if (progress < total) {
//           progress += 10;
//           setUploadProgress(progress);
//         } else {
//           clearInterval(interval);
//           resolve({ message: "Upload successful!" });
//         }
//       }, 200);
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       setIsLoading(true);
//       setUploadProgress(0);
//       try {
//         await mockApiUpload();
//         toast({
//           title: "Application submitted!",
//           description: "We'll be in touch soon.",
//           status: "success",
//           duration: 5000,
//           isClosable: true,
//           position: "top",
//         });
//         onSubmit(formData);
//         onClose();
//       } catch (error) {
//         toast({
//           title: "Submission failed",
//           description: error.message || "Something went wrong",
//           status: "error",
//           duration: 5000,
//           isClosable: true,
//           position: "top",
//         });
//       } finally {
//         setIsLoading(false);
//       }
//     } else {
//       toast({
//         title: "Form has errors",
//         description: "Please correct the errors in the form.",
//         status: "error",
//         duration: 5000,
//         isClosable: true,
//         position: "top",
//       });
//     }
//   };

//   const handleNext = () => {
//     if (activeStep === 0) {
//       const newErrors = {};
//       if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
//       if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
//       if (!/^\d{10}$/.test(formData.mobileNumber)) newErrors.mobileNumber = "Invalid mobile number";
//       if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email address";
//       setErrors(newErrors);
//       if (Object.keys(newErrors).length > 0) return;
//     }
//     setActiveStep((prev) => prev + 1);
//   };

//   const handlePrev = () => {
//     setActiveStep((prev) => prev - 1);
//   };

//   useEffect(() => {
//     if (isOpen) {
//       setFormData((prev) => ({
//         ...prev,
//         profession: selectedJob?.department || "",
//       }));
//     }
//   }, [isOpen, selectedJob]);

//   useEffect(() => {
//     if (!isOpen) {
//       setFormData({
//         firstName: "",
//         lastName: "",
//         mobileNumber: "",
//         email: "",
//         profession: "",
//         resume: null,
//         coverLetter: "",
//       });
//       setErrors({});
//       setActiveStep(0);
//       setUploadProgress(0);
//     }
//   }, [isOpen]);

//   // ✅ Restore scroll only when activeStep changes
//   useLayoutEffect(() => {
//     if (scrollContainerRef.current && scrollPositionRef.current > 0) {
//       scrollContainerRef.current.scrollTop = scrollPositionRef.current;
//     }
//   }, [activeStep]);

//   // ✅ Render content directly (no function component)
//   const renderContent = () => (
//     <>
//       <JobDetails job={selectedJob} />
//       <JobRequirements />
//       <Box>
//         <Heading as="h3" size="md" mb={6} color={textColor}>
//           Application Form
//         </Heading>
//         <FormStepper activeStep={activeStep} steps={steps} />
//         <form onSubmit={handleSubmit}>
//           <Box>
//             {activeStep === 0 && (
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <VStack spacing={6} align="stretch">
//                   <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
//                     <InputField
//                       icon={FiUser}
//                       label="First Name"
//                       name="firstName"
//                       type="text"
//                       value={formData.firstName}
//                       onChange={handleInputChange}
//                       error={errors.firstName}
//                       placeholder="John"
//                       isRequired
//                     />
//                     <InputField
//                       icon={FiUser}
//                       label="Last Name"
//                       name="lastName"
//                       type="text"
//                       value={formData.lastName}
//                       onChange={handleInputChange}
//                       error={errors.lastName}
//                       placeholder="Doe"
//                       isRequired
//                     />
//                   </SimpleGrid>
//                   <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
//                     <InputField
//                       icon={FiPhone}
//                       label="Mobile Number"
//                       name="mobileNumber"
//                       type="tel"
//                       value={formData.mobileNumber}
//                       onChange={handleInputChange}
//                       error={errors.mobileNumber}
//                       placeholder="1234567890"
//                       isRequired
//                     />
//                     <InputField
//                       icon={FiMail}
//                       label="Email"
//                       name="email"
//                       type="email"
//                       value={formData.email}
//                       onChange={handleInputChange}
//                       error={errors.email}
//                       placeholder="john@example.com"
//                       isRequired
//                     />
//                   </SimpleGrid>
//                 </VStack>
//               </motion.div>
//             )}

//             {activeStep === 1 && (
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <VStack spacing={6} align="stretch">
//                   <FormControl isInvalid={!!errors.profession} isRequired>
//                     <FormLabel
//                       htmlFor="profession"
//                       fontSize={{ base: "sm", md: "md" }}
//                       fontWeight="medium"
//                       color={useColorModeValue("gray.700", "gray.300")}
//                     >
//                       Profession
//                     </FormLabel>
//                     <InputGroup>
//                       <InputLeftElement pointerEvents="none">
//                         <Icon as={FiBriefcase} color={errors.profession ? "red.500" : "gray.400"} />
//                       </InputLeftElement>
//                       <Select
//                         id="profession"
//                         name="profession"
//                         value={formData.profession}
//                         onChange={handleInputChange}
//                         placeholder="Select your profession"
//                         pl={10}
//                         bg={useColorModeValue("white", "gray.800")}
//                         _hover={{ bg: useColorModeValue("gray.50", "gray.700") }}
//                         borderColor={errors.profession ? "red.500" : "gray.200"}
//                       >
//                         {professions.map((prof) => (
//                           <option key={prof} value={prof}>
//                             {prof}
//                           </option>
//                         ))}
//                       </Select>
//                     </InputGroup>
//                     <FormErrorMessage fontSize="xs">{errors.profession}</FormErrorMessage>
//                   </FormControl>
//                   <FileInput
//                     icon={FiFile}
//                     label="Upload Resume"
//                     name="resume"
//                     onChange={handleFileChange}
//                     error={errors.resume}
//                     isRequired
//                     value={formData.resume}
//                   />
//                   <Box
//                     p={4}
//                     bg={useColorModeValue("blue.50", "blue.900")}
//                     borderRadius="md"
//                     borderLeft="4px solid"
//                     borderColor={useColorModeValue("blue.400", "blue.500")}
//                   >
//                     <HStack spacing={3} align="flex-start">
//                       <Icon as={FiInfo} color={useColorModeValue("blue.500", "blue.300")} mt={1} />
//                       <Text fontSize="sm">
//                         Your resume should highlight your relevant experience, skills, and achievements. Make sure
//                         it's up-to-date and tailored to the position you're applying for.
//                       </Text>
//                     </HStack>
//                   </Box>
//                 </VStack>
//               </motion.div>
//             )}

//             {activeStep === 2 && (
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <VStack spacing={6} align="stretch">
//                   <FormControl isInvalid={!!errors.coverLetter} isRequired>
//                     <FormLabel
//                       htmlFor="coverLetter"
//                       fontSize={{ base: "sm", md: "md" }}
//                       fontWeight="medium"
//                       color={useColorModeValue("gray.700", "gray.300")}
//                     >
//                       Cover Letter
//                     </FormLabel>
//                     <Textarea
//                       id="coverLetter"
//                       name="coverLetter"
//                       value={formData.coverLetter}
//                       onChange={handleInputChange}
//                       placeholder="Tell us why you're a great fit for this position..."
//                       rows={8}
//                       bg={useColorModeValue("white", "gray.800")}
//                       _hover={{ bg: useColorModeValue("gray.50", "gray.700") }}
//                       _focus={{
//                         borderColor: "orange.900",
//                         boxShadow: "0 0 0 1px orange.500",
//                         bg: useColorModeValue("white", "gray.800"),
//                       }}
//                       borderColor={errors.coverLetter ? "red.500" : "gray.200"}
//                       fontSize={{ base: "sm", md: "md" }}
//                     />
//                     <FormErrorMessage fontSize="xs">{errors.coverLetter}</FormErrorMessage>
//                   </FormControl>
//                   <Box
//                     p={4}
//                     bg={useColorModeValue("green.50", "green.900")}
//                     borderRadius="md"
//                     borderLeft="4px solid"
//                     borderColor={useColorModeValue("green.400", "green.500")}
//                   >
//                     <VStack align="flex-start" spacing={2}>
//                       <HStack spacing={3}>
//                         <Icon as={FiInfo} color={useColorModeValue("green.500", "green.300")} />
//                         <Text fontWeight="medium" fontSize="sm">
//                           Tips for a great cover letter:
//                         </Text>
//                       </HStack>
//                       <List spacing={1} pl={8} fontSize="sm">
//                         <ListItem>
//                           <ListIcon as={FiCheck} color={useColorModeValue("green.500", "green.300")} />
//                           Explain why you're interested in this position
//                         </ListItem>
//                         <ListItem>
//                           <ListIcon as={FiCheck} color={useColorModeValue("green.500", "green.300")} />
//                           Highlight your most relevant skills and experiences
//                         </ListItem>
//                         <ListItem>
//                           <ListIcon as={FiCheck} color={useColorModeValue("green.500", "green.300")} />
//                           Show how you can add value to the company
//                         </ListItem>
//                       </List>
//                     </VStack>
//                   </Box>
//                 </VStack>
//               </motion.div>
//             )}
//             {isLoading && (
//               <Box mt={6}>
//                 <Text mb={2} fontSize="sm">
//                   Uploading: {uploadProgress}%
//                 </Text>
//                 <Progress
//                   value={uploadProgress}
//                   size="sm"
//                   colorScheme="teal"
//                   borderRadius="full"
//                   hasStripe
//                   isAnimated
//                 />
//               </Box>
//             )}
//           </Box>
//         </form>
//       </Box>
//     </>
//   );

//   const FormFooter = () => (
//     <Flex
//       justify="space-between"
//       pt={4}
//       pb={4}
//       px={{ base: 4, md: 6 }}
//       borderTop="1px solid"
//       borderColor={useColorModeValue("gray.200", "gray.700")}
//       bg={useColorModeValue("gray.50", "gray.900")}
//     >
//       <Button
//         onClick={handlePrev}
//         isDisabled={activeStep === 0}
//         leftIcon={<FiArrowLeft />}
//         variant="outline"
//         size={{ base: "sm", md: "md" }}
//         fontWeight="medium"
//         type="button"
//       >
//         Previous
//       </Button>
//       {activeStep < steps.length - 1 ? (
//         <Button
//           onClick={handleNext}
//           rightIcon={<FiArrowRight />}
//           color="white"
//           bg="teal.900"
//           size={{ base: "sm", md: "md" }}
//           fontWeight="medium"
//           type="button"
//         >
//           Next Step
//         </Button>
//       ) : (
//         <Button
//           onClick={handleSubmit}
//           color="white"
//           bg="teal.900"
//           isLoading={isLoading}
//           loadingText="Submitting"
//           size={{ base: "sm", md: "md" }}
//           fontWeight="medium"
//         >
//           Submit Application
//         </Button>
//       )}
//     </Flex>
//   );

//   if (isMobile) {
//     return (
//       <Drawer
//         isOpen={isOpen}
//         onClose={onClose}
//         placement="right"
//         size="full"
//         trapFocus={false}
//         autoFocus={false}
//       >
//         <DrawerOverlay />
//         <DrawerContent>
//           <DrawerHeader
//             bg={headerBg}
//             color="white"
//             py={4}
//             px={4}
//             position="sticky"
//             top={0}
//             zIndex={10}
//             boxShadow="md"
//           >
//             <Flex justify="space-between" align="center">
//               <VStack align="flex-start" spacing={0}>
//                 <Heading size="md" noOfLines={1}>
//                   Apply for {selectedJob?.title}
//                 </Heading>
//                 <Text fontSize="xs" opacity={0.8}>
//                   Complete the form below to apply
//                 </Text>
//               </VStack>
//               <DrawerCloseButton position="static" color="white" />
//             </Flex>
//           </DrawerHeader>
//           <DrawerBody
//             p={0}
//             overflowY="auto"
//             ref={scrollContainerRef}
//           >
//             {renderContent()}
//           </DrawerBody>
//           <DrawerFooter
//             p={0}
//             position="sticky"
//             bottom={0}
//             zIndex={10}
//             boxShadow="0 -2px 10px rgba(0,0,0,0.05)"
//           >
//             <FormFooter />
//           </DrawerFooter>
//         </DrawerContent>
//       </Drawer>
//     );
//   }

//   return (
//     <Modal
//       isOpen={isOpen}
//       onClose={onClose}
//       size={{ base: "full", md: "4xl" }}
//       scrollBehavior="inside"
//       trapFocus={false}
//       autoFocus={false}
//     >
//       <ModalOverlay />
//       <ModalContent
//         maxW={{ base: "100%", md: "900px" }}
//         maxH={{ base: "100vh", md: "90vh" }}
//         my={{ base: 0, md: "auto" }}
//         borderRadius={{ base: 0, md: "md" }}
//       >
//         <ModalHeader
//           bg={headerBg}
//           color="white"
//           py={4}
//           px={6}
//           borderTopRadius={{ base: 0, md: "md" }}
//           position="sticky"
//           top={0}
//           zIndex={10}
//           boxShadow="md"
//         >
//           <Flex justify="space-between" align="center">
//             <VStack align="flex-start" spacing={0}>
//               <Heading size="md" noOfLines={1}>
//                 Apply for {selectedJob?.title}
//               </Heading>
//               <Text fontSize="xs" opacity={0.8}>
//                 Complete the form below to apply
//               </Text>
//             </VStack>
//             <ModalCloseButton position="static" color="white" />
//           </Flex>
//         </ModalHeader>
//         <ModalBody
//           p={10}
//           maxH="calc(90vh - 140px)"
//           overflowY="auto"
//           ref={scrollContainerRef}
//           scrollBehavior={"inside"}
//         >
//           {renderContent()}
//         </ModalBody>
//         <ModalFooter
//           p={0}
//           position="sticky"
//           bottom={0}
//           zIndex={10}
//           boxShadow="0 -2px 10px rgba(0,0,0,0.05)"
//           borderBottomRadius={{ base: 0, md: "md" }}
//         >
//           <FormFooter />
//         </ModalFooter>
//       </ModalContent>
//     </Modal>
//   );
// };

// export default ApplicationForm

// // src/components/ApplicationForm.js
// import { useState, useRef, useEffect, useLayoutEffect } from "react";
// import { motion } from "framer-motion";
// import {
//   Box,
//   Button,
//   Flex,
//   FormControl,
//   FormLabel,
//   Heading,
//   Input,
//   Select,
//   Text,
//   Textarea,
//   VStack,
//   HStack,
//   useToast,
//   Progress,
//   Icon,
//   SimpleGrid,
//   useColorModeValue,
//   FormErrorMessage,
//   Stepper,
//   Step,
//   StepIndicator,
//   StepStatus,
//   StepIcon,
//   StepNumber,
//   StepTitle,
//   StepDescription,
//   StepSeparator,
//   useSteps,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalBody,
//   ModalFooter,
//   ModalCloseButton,
//   Drawer,
//   DrawerBody,
//   DrawerFooter,
//   DrawerHeader,
//   DrawerOverlay,
//   DrawerContent,
//   DrawerCloseButton,
//   useBreakpointValue,
//   Accordion,
//   AccordionItem,
//   AccordionButton,
//   AccordionPanel,
//   AccordionIcon,
//   List,
//   ListItem,
//   ListIcon,
//   InputGroup,
//   InputLeftElement,
//   Badge,
// } from "@chakra-ui/react";
// import {
//   FiUser,
//   FiPhone,
//   FiMail,
//   FiBriefcase,
//   FiFile,
//   FiCheck,
//   FiArrowRight,
//   FiArrowLeft,
//   FiInfo,
//   FiMapPin,
//   FiCalendar,
//   FiClock,
//   FiDollarSign,
//   FiStar,
// } from "react-icons/fi";

// // ===========================
// // Reusable Components
// // ===========================

// const InputField = ({ icon, label, name, type, value, onChange, error, placeholder, isRequired = false }) => {
//   const focusBorderColor = useColorModeValue("orange.500", "orange.300");
//   const errorBorderColor = useColorModeValue("red.500", "red.300");
//   const bgColor = useColorModeValue("white", "gray.800");
//   const hoverBg = useColorModeValue("gray.50", "gray.700");

//   return (
//     <FormControl isInvalid={!!error} isRequired={isRequired}>
//       <FormLabel
//         htmlFor={name}
//         fontSize={{ base: "sm", md: "md" }}
//         fontWeight="medium"
//         color={useColorModeValue("gray.700", "gray.300")}
//         mb={2}
//       >
//         {label}
//       </FormLabel>
//       <InputGroup>
//         <InputLeftElement pointerEvents="none">
//           <Icon as={icon} color={error ? errorBorderColor : "gray.400"} />
//         </InputLeftElement>
//         <Input
//           type={type}
//           name={name}
//           id={name}
//           value={value}
//           onChange={onChange}
//           placeholder={placeholder}
//           bg={bgColor}
//           _hover={{ bg: hoverBg, borderColor: "gray.300" }}
//           _focus={{
//             borderColor: focusBorderColor,
//             boxShadow: `0 0 0 1px ${focusBorderColor}`,
//             bg: bgColor,
//           }}
//           borderColor={error ? errorBorderColor : "gray.200"}
//           transition="all 0.3s ease"
//           fontSize={{ base: "sm", md: "md" }}
//         />
//       </InputGroup>
//       <FormErrorMessage fontSize="xs" mt={1}>
//         {error}
//       </FormErrorMessage>
//     </FormControl>
//   );
// };

// const FileInput = ({ icon, label, name, onChange, error, isRequired = false, value }) => {
//   const fileInputRef = useRef(null);
//   const handleButtonClick = () => fileInputRef.current?.click();

//   const focusBorderColor = useColorModeValue("orange.500", "orange.300");
//   const errorBorderColor = useColorModeValue("red.500", "red.300");
//   const bgColor = useColorModeValue("white", "gray.800");
//   const hoverBg = useColorModeValue("gray.50", "gray.700");

//   return (
//     <FormControl isInvalid={!!error} isRequired={isRequired}>
//       <FormLabel
//         htmlFor={name}
//         fontSize={{ base: "sm", md: "md" }}
//         fontWeight="medium"
//         color={useColorModeValue("gray.700", "gray.300")}
//         mb={2}
//       >
//         {label}
//       </FormLabel>
//       <Box position="relative">
//         <Input
//           type="file"
//           ref={fileInputRef}
//           id={name}
//           name={name}
//           onChange={onChange}
//           accept=".pdf,.doc,.docx"
//           display="none"
//         />
//         <Flex
//           border="1px solid"
//           borderColor={error ? errorBorderColor : "gray.200"}
//           borderRadius="md"
//           bg={bgColor}
//           _hover={{ bg: hoverBg, borderColor: "gray.300" }}
//           transition="all 0.3s ease"
//           overflow="hidden"
//         >
//           <Flex align="center" justify="center" bg={useColorModeValue("gray.100", "gray.700")} p={3}>
//             <Icon as={icon} color={error ? errorBorderColor : "gray.500"} />
//           </Flex>
//           <Box flex="1" p={2} pl={3} overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap">
//             {value ? value.name : "No file selected"}
//           </Box>
//           <Button onClick={handleButtonClick} size="sm" colorScheme="orange" m={1} px={4}>
//             Browse
//           </Button>
//         </Flex>
//       </Box>
//       <FormErrorMessage fontSize="xs" mt={1}>
//         {error}
//       </FormErrorMessage>
//       <Text fontSize="xs" color="gray.500" mt={1}>
//         Accepted formats: PDF, DOC, DOCX. Max size: 5MB
//       </Text>
//     </FormControl>
//   );
// };

// const JobDetails = ({ job }) => {
//   const bgColor = useColorModeValue("orange.50", "gray.700");
//   const borderColor = useColorModeValue("orange.200", "gray.600");

//   return (
//     <Box bg={bgColor} p={5} borderRadius="md" borderLeft="4px solid" borderColor={borderColor} boxShadow="sm">
//       <Heading size="md" mb={4} color={useColorModeValue("gray.800", "white")}>
//         {job?.title}
//       </Heading>
//       <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
//         <HStack spacing={2}>
//           <Icon as={FiBriefcase} color="gray.500" />
//           <Text fontWeight="medium">Department:</Text>
//           <Text>{job?.department}</Text>
//         </HStack>
//         <HStack spacing={2}>
//           <Icon as={FiMapPin} color="gray.500" />
//           <Text fontWeight="medium">Location:</Text>
//           <Text>{job?.location}</Text>
//         </HStack>
//         <HStack spacing={2}>
//           <Icon as={FiClock} color="gray.500" />
//           <Text fontWeight="medium">Type:</Text>
//           <Badge colorScheme="orange">{job?.type}</Badge>
//         </HStack>
//       </SimpleGrid>
//       <HStack mt={4} spacing={4}>
//         <HStack>
//           <Icon as={FiCalendar} color="gray.500" />
//           <Text fontSize="sm">Apply by: June 30, 2023</Text>
//         </HStack>
//         <HStack>
//           <Icon as={FiDollarSign} color="gray.500" />
//           <Text fontSize="sm">Competitive salary</Text>
//         </HStack>
//         <HStack>
//           <Icon as={FiStar} color="gray.500" />
//           <Text fontSize="sm">5+ years experience</Text>
//         </HStack>
//       </HStack>
//     </Box>
//   );
// };

// const JobRequirements = () => {
//   const borderColor = useColorModeValue("teal.500", "teal.300");

//   return (
//     <Accordion allowToggle>
//       <AccordionItem border="none" boxShadow="sm" borderRadius="md" mb={4}>
//         <h2>
//           <AccordionButton
//             py={4}
//             bg={useColorModeValue("gray.50", "gray.700")}
//             _hover={{ bg: useColorModeValue("gray.100", "gray.600") }}
//           >
//             <Box flex="1" textAlign="left" fontWeight="bold">
//               Job Description & Requirements
//             </Box>
//             <AccordionIcon />
//           </AccordionButton>
//         </h2>
//         <AccordionPanel
//           pb={4}
//           pt={4}
//           borderLeft="1px solid"
//           borderRight="1px solid"
//           borderBottom="1px solid"
//           borderColor="gray.200"
//           borderBottomRadius="md"
//         >
//           <Text mb={4}>
//             We are seeking a talented and motivated professional to join our team. In this role, you will be responsible
//             for developing innovative solutions and collaborating with cross-functional teams to deliver exceptional
//             results.
//           </Text>
//           <Text fontWeight="bold" mb={3}>
//             Key Responsibilities:
//           </Text>
//           <List spacing={2} mb={4}>
//             <ListItem>
//               <ListIcon as={FiCheck} color={borderColor} />
//               Design and implement new features and functionality
//             </ListItem>
//             <ListItem>
//               <ListIcon as={FiCheck} color={borderColor} />
//               Collaborate with product managers and designers
//             </ListItem>
//             <ListItem>
//               <ListIcon as={FiCheck} color={borderColor} />
//               Write clean, maintainable, and efficient code
//             </ListItem>
//             <ListItem>
//               <ListIcon as={FiCheck} color={borderColor} />
//               Participate in code reviews and provide constructive feedback
//             </ListItem>
//           </List>
//           <Text fontWeight="bold" mb={3}>
//             Requirements:
//           </Text>
//           <List spacing={2}>
//             <ListItem>
//               <ListIcon as={FiCheck} color={borderColor} />
//               3+ years of experience in relevant field
//             </ListItem>
//             <ListItem>
//               <ListIcon as={FiCheck} color={borderColor} />
//               Strong knowledge of industry best practices
//             </ListItem>
//             <ListItem>
//               <ListIcon as={FiCheck} color={borderColor} />
//               Excellent communication and teamwork skills
//             </ListItem>
//             <ListItem>
//               <ListIcon as={FiCheck} color={borderColor} />
//               Bachelor's degree in a related field (or equivalent experience)
//             </ListItem>
//           </List>
//         </AccordionPanel>
//       </AccordionItem>
//     </Accordion>
//   );
// };

// const FormStepper = ({ activeStep, steps }) => {
//   const isMobile = useBreakpointValue({ base: true, md: false });
//   const stepperColor = useColorModeValue("orange.500", "orange.300");

//   return (
//     <Box mb={8}>
//       {isMobile ? (
//         <Flex justify="space-between" align="center" mb={4}>
//           {steps.map((step, index) => (
//             <VStack key={index} spacing={1} flex="1" position="relative">
//               <Box
//                 w="10px"
//                 h="10px"
//                 borderRadius="full"
//                 bg={index <= activeStep ? stepperColor : "gray.200"}
//                 zIndex={1}
//               />
//               {index < steps.length - 1 && (
//                 <Box
//                   position="absolute"
//                   h="2px"
//                   bg={index < activeStep ? stepperColor : "gray.200"}
//                   top="5px"
//                   right="-50%"
//                   w="100%"
//                 />
//               )}
//               <Text
//                 fontSize="xs"
//                 fontWeight={index === activeStep ? "bold" : "normal"}
//                 color={index === activeStep ? stepperColor : "gray.500"}
//                 textAlign="center"
//               >
//                 {step.title}
//               </Text>
//             </VStack>
//           ))}
//         </Flex>
//       ) : (
//         <Stepper index={activeStep} size="lg">
//           {steps.map((step, index) => (
//             <Step key={index}>
//               <StepIndicator>
//                 <StepStatus complete={<StepIcon />} incomplete={<StepNumber />} active={<StepNumber />} />
//               </StepIndicator>
//               <Box flexShrink="0">
//                 <StepTitle>{step.title}</StepTitle>
//                 <StepDescription>{step.description}</StepDescription>
//               </Box>
//               <StepSeparator />
//             </Step>
//           ))}
//         </Stepper>
//       )}
//     </Box>
//   );
// };

// // ===========================
// // Main ApplicationForm
// // ===========================
// const ApplicationForm = ({ isOpen, onClose, selectedJob, onSubmit }) => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     mobileNumber: "",
//     email: "",
//     profession: "",
//     resume: null,
//     coverLetter: "",
//   });
//   const [errors, setErrors] = useState({});
//   const [isLoading, setIsLoading] = useState(false);
//   const [uploadProgress, setUploadProgress] = useState(0);
//   const toast = useToast();
//   const isMobile = useBreakpointValue({ base: true, md: false });
//   const headerBg = useColorModeValue("teal.900", "teal.900");
//   const textColor = useColorModeValue("gray.800", "white");

//   // ✅ Ref only on scrollable container
//   const scrollContainerRef = useRef(null);

//   // Save scroll position
//   const scrollPositionRef = useRef(0);

//   const { activeStep, setActiveStep } = useSteps({
//     index: 0,
//     count: 3,
//   });

//   const steps = [
//     { title: "Personal Info", description: "Your basic details" },
//     { title: "Professional Info", description: "Your work experience" },
//     { title: "Additional Info", description: "Extra details" },
//   ];

//   const professions = [
//     "Software Engineer",
//     "Data Scientist",
//     "Product Manager",
//     "UX Designer",
//     "Marketing Specialist",
//     "Customer Success Manager",
//   ];

//   // ✅ Save scroll before any state change
//   const handleInputChange = (e) => {
//     if (scrollContainerRef.current) {
//       scrollPositionRef.current = scrollContainerRef.current.scrollTop;
//     }
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     setErrors((prev) => ({ ...prev, [name]: "" }));
//   };

//   const handleFileChange = (e) => {
//     if (scrollContainerRef.current) {
//       scrollPositionRef.current = scrollContainerRef.current.scrollTop;
//     }
//     const file = e.target.files[0];
//     if (file && file.size <= 5 * 1024 * 1024) {
//       setFormData((prev) => ({ ...prev, resume: file }));
//       setErrors((prev) => ({ ...prev, resume: "" }));
//     } else {
//       setErrors((prev) => ({ ...prev, resume: "File size should be less than 5MB" }));
//     }
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
//     if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
//     if (!/^\d{10}$/.test(formData.mobileNumber)) newErrors.mobileNumber = "Invalid mobile number";
//     if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email address";
//     if (!formData.profession) newErrors.profession = "Please select a profession";
//     if (!formData.resume) newErrors.resume = "Please upload your resume";
//     if (!formData.coverLetter.trim()) newErrors.coverLetter = "Cover letter is required";
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const mockApiUpload = () => {
//     return new Promise((resolve) => {
//       const total = 100;
//       let progress = 0;
//       const interval = setInterval(() => {
//         if (progress < total) {
//           progress += 10;
//           setUploadProgress(progress);
//         } else {
//           clearInterval(interval);
//           resolve({ message: "Upload successful!" });
//         }
//       }, 200);
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       setIsLoading(true);
//       setUploadProgress(0);
//       try {
//         await mockApiUpload();
//         toast({
//           title: "Application submitted!",
//           description: "We'll be in touch soon.",
//           status: "success",
//           duration: 5000,
//           isClosable: true,
//           position: "top",
//         });
//         onSubmit(formData);
//         onClose();
//       } catch (error) {
//         toast({
//           title: "Submission failed",
//           description: error.message || "Something went wrong",
//           status: "error",
//           duration: 5000,
//           isClosable: true,
//           position: "top",
//         });
//       } finally {
//         setIsLoading(false);
//       }
//     } else {
//       toast({
//         title: "Form has errors",
//         description: "Please correct the errors in the form.",
//         status: "error",
//         duration: 5000,
//         isClosable: true,
//         position: "top",
//       });
//     }
//   };

//   const handleNext = () => {
//     if (activeStep === 0) {
//       const newErrors = {};
//       if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
//       if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
//       if (!/^\d{10}$/.test(formData.mobileNumber)) newErrors.mobileNumber = "Invalid mobile number";
//       if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email address";
//       setErrors(newErrors);
//       if (Object.keys(newErrors).length > 0) return;
//     }
//     setActiveStep((prev) => prev + 1);
//   };

//   const handlePrev = () => {
//     setActiveStep((prev) => prev - 1);
//   };

//   useEffect(() => {
//     if (isOpen) {
//       setFormData((prev) => ({
//         ...prev,
//         profession: selectedJob?.department || "",
//       }));
//     }
//   }, [isOpen, selectedJob]);

//   useEffect(() => {
//     if (!isOpen) {
//       setFormData({
//         firstName: "",
//         lastName: "",
//         mobileNumber: "",
//         email: "",
//         profession: "",
//         resume: null,
//         coverLetter: "",
//       });
//       setErrors({});
//       setActiveStep(0);
//       setUploadProgress(0);
//     }
//   }, [isOpen]);

//   // ✅ Restore scroll only when step changes
//   useLayoutEffect(() => {
//     if (scrollContainerRef.current && scrollPositionRef.current > 0) {
//       scrollContainerRef.current.scrollTop = scrollPositionRef.current;
//     }
//   }, [activeStep]);

//   const renderContent = () => (
//     <>
//       <JobDetails job={selectedJob} />
//       <JobRequirements />
//       <Box>
//         <Heading as="h3" size="md" mb={6} color={textColor}>
//           Application Form
//         </Heading>
//         <FormStepper activeStep={activeStep} steps={steps} />
//         <form onSubmit={handleSubmit}>
//           <Box>
//             {activeStep === 0 && (
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <VStack spacing={6} align="stretch">
//                   <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
//                     <InputField
//                       icon={FiUser}
//                       label="First Name"
//                       name="firstName"
//                       type="text"
//                       value={formData.firstName}
//                       onChange={handleInputChange}
//                       error={errors.firstName}
//                       placeholder="John"
//                       isRequired
//                     />
//                     <InputField
//                       icon={FiUser}
//                       label="Last Name"
//                       name="lastName"
//                       type="text"
//                       value={formData.lastName}
//                       onChange={handleInputChange}
//                       error={errors.lastName}
//                       placeholder="Doe"
//                       isRequired
//                     />
//                   </SimpleGrid>
//                   <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
//                     <InputField
//                       icon={FiPhone}
//                       label="Mobile Number"
//                       name="mobileNumber"
//                       type="tel"
//                       value={formData.mobileNumber}
//                       onChange={handleInputChange}
//                       error={errors.mobileNumber}
//                       placeholder="1234567890"
//                       isRequired
//                     />
//                     <InputField
//                       icon={FiMail}
//                       label="Email"
//                       name="email"
//                       type="email"
//                       value={formData.email}
//                       onChange={handleInputChange}
//                       error={errors.email}
//                       placeholder="john@example.com"
//                       isRequired
//                     />
//                   </SimpleGrid>
//                 </VStack>
//               </motion.div>
//             )}

//             {activeStep === 1 && (
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <VStack spacing={6} align="stretch">
//                   <FormControl isInvalid={!!errors.profession} isRequired>
//                     <FormLabel
//                       htmlFor="profession"
//                       fontSize={{ base: "sm", md: "md" }}
//                       fontWeight="medium"
//                       color={useColorModeValue("gray.700", "gray.300")}
//                     >
//                       Profession
//                     </FormLabel>
//                     <InputGroup>
//                       <InputLeftElement pointerEvents="none">
//                         <Icon as={FiBriefcase} color={errors.profession ? "red.500" : "gray.400"} />
//                       </InputLeftElement>
//                       <Select
//                         id="profession"
//                         name="profession"
//                         value={formData.profession}
//                         onChange={handleInputChange}
//                         placeholder="Select your profession"
//                         pl={10}
//                         bg={useColorModeValue("white", "gray.800")}
//                         _hover={{ bg: useColorModeValue("gray.50", "gray.700") }}
//                         borderColor={errors.profession ? "red.500" : "gray.200"}
//                       >
//                         {professions.map((prof) => (
//                           <option key={prof} value={prof}>
//                             {prof}
//                           </option>
//                         ))}
//                       </Select>
//                     </InputGroup>
//                     <FormErrorMessage fontSize="xs">{errors.profession}</FormErrorMessage>
//                   </FormControl>
//                   <FileInput
//                     icon={FiFile}
//                     label="Upload Resume"
//                     name="resume"
//                     onChange={handleFileChange}
//                     error={errors.resume}
//                     isRequired
//                     value={formData.resume}
//                   />
//                   <Box
//                     p={4}
//                     bg={useColorModeValue("blue.50", "blue.900")}
//                     borderRadius="md"
//                     borderLeft="4px solid"
//                     borderColor={useColorModeValue("blue.400", "blue.500")}
//                   >
//                     <HStack spacing={3} align="flex-start">
//                       <Icon as={FiInfo} color={useColorModeValue("blue.500", "blue.300")} mt={1} />
//                       <Text fontSize="sm">
//                         Your resume should highlight your relevant experience, skills, and achievements. Make sure
//                         it's up-to-date and tailored to the position you're applying for.
//                       </Text>
//                     </HStack>
//                   </Box>
//                 </VStack>
//               </motion.div>
//             )}

//             {activeStep === 2 && (
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <VStack spacing={6} align="stretch">
//                   <FormControl isInvalid={!!errors.coverLetter} isRequired>
//                     <FormLabel
//                       htmlFor="coverLetter"
//                       fontSize={{ base: "sm", md: "md" }}
//                       fontWeight="medium"
//                       color={useColorModeValue("gray.700", "gray.300")}
//                     >
//                       Cover Letter
//                     </FormLabel>
//                     <Textarea
//                       id="coverLetter"
//                       name="coverLetter"
//                       value={formData.coverLetter}
//                       onChange={handleInputChange}
//                       placeholder="Tell us why you're a great fit for this position..."
//                       rows={8}
//                       bg={useColorModeValue("white", "gray.800")}
//                       _hover={{ bg: useColorModeValue("gray.50", "gray.700") }}
//                       _focus={{
//                         borderColor: "orange.900",
//                         boxShadow: "0 0 0 1px orange.500",
//                         bg: useColorModeValue("white", "gray.800"),
//                       }}
//                       borderColor={errors.coverLetter ? "red.500" : "gray.200"}
//                       fontSize={{ base: "sm", md: "md" }}
//                     />
//                     <FormErrorMessage fontSize="xs">{errors.coverLetter}</FormErrorMessage>
//                   </FormControl>
//                   <Box
//                     p={4}
//                     bg={useColorModeValue("green.50", "green.900")}
//                     borderRadius="md"
//                     borderLeft="4px solid"
//                     borderColor={useColorModeValue("green.400", "green.500")}
//                   >
//                     <VStack align="flex-start" spacing={2}>
//                       <HStack spacing={3}>
//                         <Icon as={FiInfo} color={useColorModeValue("green.500", "green.300")} />
//                         <Text fontWeight="medium" fontSize="sm">
//                           Tips for a great cover letter:
//                         </Text>
//                       </HStack>
//                       <List spacing={1} pl={8} fontSize="sm">
//                         <ListItem>
//                           <ListIcon as={FiCheck} color={useColorModeValue("green.500", "green.300")} />
//                           Explain why you're interested in this position
//                         </ListItem>
//                         <ListItem>
//                           <ListIcon as={FiCheck} color={useColorModeValue("green.500", "green.300")} />
//                           Highlight your most relevant skills and experiences
//                         </ListItem>
//                         <ListItem>
//                           <ListIcon as={FiCheck} color={useColorModeValue("green.500", "green.300")} />
//                           Show how you can add value to the company
//                         </ListItem>
//                       </List>
//                     </VStack>
//                   </Box>
//                 </VStack>
//               </motion.div>
//             )}
//             {isLoading && (
//               <Box mt={6}>
//                 <Text mb={2} fontSize="sm">
//                   Uploading: {uploadProgress}%
//                 </Text>
//                 <Progress
//                   value={uploadProgress}
//                   size="sm"
//                   colorScheme="teal"
//                   borderRadius="full"
//                   hasStripe
//                   isAnimated
//                 />
//               </Box>
//             )}
//           </Box>
//         </form>
//       </Box>
//     </>
//   );

//   const FormFooter = () => (
//     <Flex
//       justify="space-between"
//       pt={4}
//       pb={4}
//       px={{ base: 4, md: 6 }}
//       borderTop="1px solid"
//       borderColor={useColorModeValue("gray.200", "gray.700")}
//       bg={useColorModeValue("gray.50", "gray.900")}
//     >
//       <Button
//         onClick={handlePrev}
//         isDisabled={activeStep === 0}
//         leftIcon={<FiArrowLeft />}
//         variant="outline"
//         size={{ base: "sm", md: "md" }}
//         fontWeight="medium"
//         type="button"
//       >
//         Previous
//       </Button>
//       {activeStep < steps.length - 1 ? (
//         <Button
//           onClick={handleNext}
//           rightIcon={<FiArrowRight />}
//           color="white"
//           bg="teal.900"
//           size={{ base: "sm", md: "md" }}
//           fontWeight="medium"
//           type="button"
//         >
//           Next Step
//         </Button>
//       ) : (
//         <Button
//           onClick={handleSubmit}
//           color="white"
//           bg="teal.900"
//           isLoading={isLoading}
//           loadingText="Submitting"
//           size={{ base: "sm", md: "md" }}
//           fontWeight="medium"
//         >
//           Submit Application
//         </Button>
//       )}
//     </Flex>
//   );

//   if (isMobile) {
//     return (
//       <Drawer
//         isOpen={isOpen}
//         onClose={onClose}
//         placement="right"
//         size="full"
//         trapFocus={false}
//         autoFocus={false}
//       >
//         <DrawerOverlay />
//         <DrawerContent>
//           <DrawerHeader
//             bg={headerBg}
//             color="white"
//             py={4}
//             px={4}
//             position="sticky"
//             top={0}
//             zIndex={10}
//             boxShadow="md"
//           >
//             <Flex justify="space-between" align="center">
//               <VStack align="flex-start" spacing={0}>
//                 <Heading size="md" noOfLines={1}>
//                   Apply for {selectedJob?.title}
//                 </Heading>
//                 <Text fontSize="xs" opacity={0.8}>
//                   Complete the form below to apply
//                 </Text>
//               </VStack>
//               <DrawerCloseButton position="static" color="white" />
//             </Flex>
//           </DrawerHeader>
//           <DrawerBody
//             p={0}
//             overflowY="auto"
//             ref={scrollContainerRef}
//           >
//             {renderContent()}
//           </DrawerBody>
//           <DrawerFooter
//             p={0}
//             position="sticky"
//             bottom={0}
//             zIndex={10}
//             boxShadow="0 -2px 10px rgba(0,0,0,0.05)"
//           >
//             <FormFooter />
//           </DrawerFooter>
//         </DrawerContent>
//       </Drawer>
//     );
//   }

//   return (
//     <Modal
//       isOpen={isOpen}
//       onClose={onClose}
//       size={{ base: "full", md: "4xl" }}
//       scrollBehavior="inside" // ✅ THIS IS FIXED
//       trapFocus={false}
//       autoFocus={false}
//     >
//       <ModalOverlay />
//       <ModalContent
//         maxW={{ base: "100%", md: "900px" }}
//         maxH={{ base: "100vh", md: "90vh" }}
//         my={{ base: 0, md: "auto" }}
//         borderRadius={{ base: 0, md: "md" }}
//       >
//         <ModalHeader
//           bg={headerBg}
//           color="white"
//           py={4}
//           px={6}
//           borderTopRadius={{ base: 0, md: "md" }}
//           position="sticky"
//           top={0}
//           zIndex={10}
//           boxShadow="md"
//         >
//           <Flex justify="space-between" align="center">
//             <VStack align="flex-start" spacing={0}>
//               <Heading size="md" noOfLines={1}>
//                 Apply for {selectedJob?.title}
//               </Heading>
//               <Text fontSize="xs" opacity={0.8}>
//                 Complete the form below to apply
//               </Text>
//             </VStack>
//             <ModalCloseButton position="static" color="white" />
//           </Flex>
//         </ModalHeader>
//         <ModalBody
//           p={6}
//           maxH="calc(90vh - 140px)"
//           overflowY="auto"
//           ref={scrollContainerRef}
//         >
//           {renderContent()}
//         </ModalBody>
//         <ModalFooter
//           p={0}
//           position="sticky"
//           bottom={0}
//           zIndex={10}
//           boxShadow="0 -2px 10px rgba(0,0,0,0.05)"
//           borderBottomRadius={{ base: 0, md: "md" }}
//         >
//           <FormFooter />
//         </ModalFooter>
//       </ModalContent>
//     </Modal>
//   );
// };

// export default ApplicationForm;

// import { useState, useRef, useEffect, useLayoutEffect } from "react";
// import { motion } from "framer-motion";
// import {
//   Box,
//   Button,
//   Flex,
//   FormControl,
//   FormLabel,
//   Heading,
//   Input,
//   Select,
//   Text,
//   Textarea,
//   VStack,
//   HStack,
//   useToast,
//   Progress,
//   Icon,
//   SimpleGrid,
//   useColorModeValue,
//   FormErrorMessage,
//   Stepper,
//   Step,
//   StepIndicator,
//   StepStatus,
//   StepIcon,
//   StepNumber,
//   StepTitle,
//   StepDescription,
//   StepSeparator,
//   useSteps,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalBody,
//   ModalFooter,
//   ModalCloseButton,
//   Drawer,
//   DrawerBody,
//   DrawerFooter,
//   DrawerHeader,
//   DrawerOverlay,
//   DrawerContent,
//   DrawerCloseButton,
//   useBreakpointValue,
//   Accordion,
//   AccordionItem,
//   AccordionButton,
//   AccordionPanel,
//   AccordionIcon,
//   List,
//   ListItem,
//   ListIcon,
//   InputGroup,
//   InputLeftElement,
//   Badge,
// } from "@chakra-ui/react";
// import {
//   FiUser,
//   FiPhone,
//   FiMail,
//   FiBriefcase,
//   FiFile,
//   FiCheck,
//   FiArrowRight,
//   FiArrowLeft,
//   FiInfo,
//   FiMapPin,
//   FiCalendar,
//   FiClock,
//   FiDollarSign,
//   FiStar,
// } from "react-icons/fi";

// // ===========================
// // Reusable Components (Unchanged)
// // ===========================

// const InputField = ({ icon, label, name, type, value, onChange, error, placeholder, isRequired = false }) => {
//   const focusBorderColor = useColorModeValue("orange.500", "orange.300");
//   const errorBorderColor = useColorModeValue("red.500", "red.300");
//   const bgColor = useColorModeValue("white", "gray.800");
//   const hoverBg = useColorModeValue("gray.50", "gray.700");
//   return (
//     <FormControl isInvalid={!!error} isRequired={isRequired}>
//       <FormLabel
//         htmlFor={name}
//         fontSize={{ base: "sm", md: "md" }}
//         fontWeight="medium"
//         color={useColorModeValue("gray.700", "gray.300")}
//         mb={2}
//       >
//         {label}
//       </FormLabel>
//       <InputGroup>
//         <InputLeftElement pointerEvents="none">
//           <Icon as={icon} color={error ? errorBorderColor : "gray.400"} />
//         </InputLeftElement>
//         <Input
//           type={type}
//           name={name}
//           id={name}
//           value={value}
//           onChange={onChange}
//           placeholder={placeholder}
//           bg={bgColor}
//           _hover={{ bg: hoverBg, borderColor: "gray.300" }}
//           _focus={{
//             borderColor: focusBorderColor,
//             boxShadow: `0 0 0 1px ${focusBorderColor}`,
//             bg: bgColor,
//           }}
//           borderColor={error ? errorBorderColor : "gray.200"}
//           transition="all 0.3s ease"
//           fontSize={{ base: "sm", md: "md" }}
//         />
//       </InputGroup>
//       <FormErrorMessage fontSize="xs" mt={1}>
//         {error}
//       </FormErrorMessage>
//     </FormControl>
//   );
// };

// const FileInput = ({ icon, label, name, onChange, error, isRequired = false, value }) => {
//   const fileInputRef = useRef(null);
//   const handleButtonClick = () => fileInputRef.current?.click();
//   const focusBorderColor = useColorModeValue("orange.500", "orange.300");
//   const errorBorderColor = useColorModeValue("red.500", "red.300");
//   const bgColor = useColorModeValue("white", "gray.800");
//   const hoverBg = useColorModeValue("gray.50", "gray.700");
//   return (
//     <FormControl isInvalid={!!error} isRequired={isRequired}>
//       <FormLabel
//         htmlFor={name}
//         fontSize={{ base: "sm", md: "md" }}
//         fontWeight="medium"
//         color={useColorModeValue("gray.700", "gray.300")}
//         mb={2}
//       >
//         {label}
//       </FormLabel>
//       <Box position="relative">
//         <Input
//           type="file"
//           ref={fileInputRef}
//           id={name}
//           name={name}
//           onChange={onChange}
//           accept=".pdf,.doc,.docx"
//           display="none"
//         />
//         <Flex
//           border="1px solid"
//           borderColor={error ? errorBorderColor : "gray.200"}
//           borderRadius="md"
//           bg={bgColor}
//           _hover={{ bg: hoverBg, borderColor: "gray.300" }}
//           transition="all 0.3s ease"
//           overflow="hidden"
//         >
//           <Flex align="center" justify="center" bg={useColorModeValue("gray.100", "gray.700")} p={3}>
//             <Icon as={icon} color={error ? errorBorderColor : "gray.500"} />
//           </Flex>
//           <Box flex="1" p={2} pl={3} overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap">
//             {value ? value.name : "No file selected"}
//           </Box>
//           <Button onClick={handleButtonClick} size="sm" colorScheme="orange" m={1} px={4}>
//             Browse
//           </Button>
//         </Flex>
//       </Box>
//       <FormErrorMessage fontSize="xs" mt={1}>
//         {error}
//       </FormErrorMessage>
//       <Text fontSize="xs" color="gray.500" mt={1}>
//         Accepted formats: PDF, DOC, DOCX. Max size: 5MB
//       </Text>
//     </FormControl>
//   );
// };

// const JobDetails = ({ job }) => {
//   const bgColor = useColorModeValue("orange.50", "gray.700");
//   const borderColor = useColorModeValue("orange.200", "gray.600");
//   return (
//     <Box bg={bgColor} p={5} borderRadius="md" borderLeft="4px solid" borderColor={borderColor} boxShadow="sm">
//       <Heading size="md" mb={4} color={useColorModeValue("gray.800", "white")}>
//         {job?.title}
//       </Heading>
//       <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
//         <HStack spacing={2}>
//           <Icon as={FiBriefcase} color="gray.500" />
//           <Text fontWeight="medium">Department:</Text>
//           <Text>{job?.department}</Text>
//         </HStack>
//         <HStack spacing={2}>
//           <Icon as={FiMapPin} color="gray.500" />
//           <Text fontWeight="medium">Location:</Text>
//           <Text>{job?.location}</Text>
//         </HStack>
//         <HStack spacing={2}>
//           <Icon as={FiClock} color="gray.500" />
//           <Text fontWeight="medium">Type:</Text>
//           <Badge colorScheme="orange">{job?.type}</Badge>
//         </HStack>
//       </SimpleGrid>
//       <HStack mt={4} spacing={4}>
//         <HStack>
//           <Icon as={FiCalendar} color="gray.500" />
//           <Text fontSize="sm">Apply by: June 30, 2023</Text>
//         </HStack>
//         <HStack>
//           <Icon as={FiDollarSign} color="gray.500" />
//           <Text fontSize="sm">Competitive salary</Text>
//         </HStack>
//         <HStack>
//           <Icon as={FiStar} color="gray.500" />
//           <Text fontSize="sm">5+ years experience</Text>
//         </HStack>
//       </HStack>
//     </Box>
//   );
// };

// const JobRequirements = () => {
//   const borderColor = useColorModeValue("teal.500", "teal.300");
//   return (
//     <Accordion allowToggle>
//       <AccordionItem border="none" boxShadow="sm" borderRadius="md" mb={4}>
//         <h2>
//           <AccordionButton
//             py={4}
//             bg={useColorModeValue("gray.50", "gray.700")}
//             _hover={{ bg: useColorModeValue("gray.100", "gray.600") }}
//           >
//             <Box flex="1" textAlign="left" fontWeight="bold">
//               Job Description & Requirements
//             </Box>
//             <AccordionIcon />
//           </AccordionButton>
//         </h2>
//         <AccordionPanel
//           pb={4}
//           pt={4}
//           borderLeft="1px solid"
//           borderRight="1px solid"
//           borderBottom="1px solid"
//           borderColor="gray.200"
//           borderBottomRadius="md"
//         >
//           <Text mb={4}>
//             We are seeking a talented and motivated professional to join our team. In this role, you will be responsible
//             for developing innovative solutions and collaborating with cross-functional teams to deliver exceptional
//             results.
//           </Text>
//           <Text fontWeight="bold" mb={3}>
//             Key Responsibilities:
//           </Text>
//           <List spacing={2} mb={4}>
//             <ListItem>
//               <ListIcon as={FiCheck} color={borderColor} />
//               Design and implement new features and functionality
//             </ListItem>
//             <ListItem>
//               <ListIcon as={FiCheck} color={borderColor} />
//               Collaborate with product managers and designers
//             </ListItem>
//             <ListItem>
//               <ListIcon as={FiCheck} color={borderColor} />
//               Write clean, maintainable, and efficient code
//             </ListItem>
//             <ListItem>
//               <ListIcon as={FiCheck} color={borderColor} />
//               Participate in code reviews and provide constructive feedback
//             </ListItem>
//           </List>
//           <Text fontWeight="bold" mb={3}>
//             Requirements:
//           </Text>
//           <List spacing={2}>
//             <ListItem>
//               <ListIcon as={FiCheck} color={borderColor} />
//               3+ years of experience in relevant field
//             </ListItem>
//             <ListItem>
//               <ListIcon as={FiCheck} color={borderColor} />
//               Strong knowledge of industry best practices
//             </ListItem>
//             <ListItem>
//               <ListIcon as={FiCheck} color={borderColor} />
//               Excellent communication and teamwork skills
//             </ListItem>
//             <ListItem>
//               <ListIcon as={FiCheck} color={borderColor} />
//               Bachelor's degree in a related field (or equivalent experience)
//             </ListItem>
//           </List>
//         </AccordionPanel>
//       </AccordionItem>
//     </Accordion>
//   );
// };

// const FormStepper = ({ activeStep, steps }) => {
//   const isMobile = useBreakpointValue({ base: true, md: false });
//   const stepperColor = useColorModeValue("orange.500", "orange.300");
//   return (
//     <Box mb={8}>
//       {isMobile ? (
//         <Flex justify="space-between" align="center" mb={4}>
//           {steps.map((step, index) => (
//             <VStack key={index} spacing={1} flex="1" position="relative">
//               <Box
//                 w="10px"
//                 h="10px"
//                 borderRadius="full"
//                 bg={index <= activeStep ? stepperColor : "gray.200"}
//                 zIndex={1}
//               />
//               {index < steps.length - 1 && (
//                 <Box
//                   position="absolute"
//                   h="2px"
//                   bg={index < activeStep ? stepperColor : "gray.200"}
//                   top="5px"
//                   right="-50%"
//                   w="100%"
//                 />
//               )}
//               <Text
//                 fontSize="xs"
//                 fontWeight={index === activeStep ? "bold" : "normal"}
//                 color={index === activeStep ? stepperColor : "gray.500"}
//                 textAlign="center"
//               >
//                 {step.title}
//               </Text>
//             </VStack>
//           ))}
//         </Flex>
//       ) : (
//         <Stepper index={activeStep} size="lg">
//           {steps.map((step, index) => (
//             <Step key={index}>
//               <StepIndicator>
//                 <StepStatus complete={<StepIcon />} incomplete={<StepNumber />} active={<StepNumber />} />
//               </StepIndicator>
//               <Box flexShrink="0">
//                 <StepTitle>{step.title}</StepTitle>
//                 <StepDescription>{step.description}</StepDescription>
//               </Box>
//               <StepSeparator />
//             </Step>
//           ))}
//         </Stepper>
//       )}
//     </Box>
//   );
// };

// // ===========================
// // Main ApplicationForm (FIXED)
// // ===========================

// const ApplicationForm = ({ isOpen, onClose, selectedJob, onSubmit }) => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     mobileNumber: "",
//     email: "",
//     profession: "",
//     resume: null,
//     coverLetter: "",
//   });
//   const [errors, setErrors] = useState({});
//   const [isLoading, setIsLoading] = useState(false);
//   const [uploadProgress, setUploadProgress] = useState(0);
//   const toast = useToast();
//   const isMobile = useBreakpointValue({ base: true, md: false });
//   const headerBg = useColorModeValue("teal.900", "teal.900");
//   const textColor = useColorModeValue("gray.800", "white");

//   // ✅ Ref for scrollable body
//   const scrollContainerRef = useRef(null);

//   // Save scroll position
//   const scrollPositionRef = useRef(0);

//   const { activeStep, setActiveStep } = useSteps({
//     index: 0,
//     count: 3,
//   });

//   const steps = [
//     { title: "Personal Info", description: "Your basic details" },
//     { title: "Professional Info", description: "Your work experience" },
//     { title: "Additional Info", description: "Extra details" },
//   ];

//   const professions = [
//     "Software Engineer",
//     "Data Scientist",
//     "Product Manager",
//     "UX Designer",
//     "Marketing Specialist",
//     "Customer Success Manager",
//   ];

//   // ✅ Save scroll before any state change
//   const handleInputChange = (e) => {
//     if (scrollContainerRef.current) {
//       scrollPositionRef.current = scrollContainerRef.current.scrollTop;
//     }
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     setErrors((prev) => ({ ...prev, [name]: "" }));
//   };

//   const handleFileChange = (e) => {
//     if (scrollContainerRef.current) {
//       scrollPositionRef.current = scrollContainerRef.current.scrollTop;
//     }
//     const file = e.target.files[0];
//     if (file && file.size <= 5 * 1024 * 1024) {
//       setFormData((prev) => ({ ...prev, resume: file }));
//       setErrors((prev) => ({ ...prev, resume: "" }));
//     } else {
//       setErrors((prev) => ({ ...prev, resume: "File size should be less than 5MB" }));
//     }
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
//     if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
//     if (!/^\d{10}$/.test(formData.mobileNumber)) newErrors.mobileNumber = "Invalid mobile number";
//     if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email address";
//     if (!formData.profession) newErrors.profession = "Please select a profession";
//     if (!formData.resume) newErrors.resume = "Please upload your resume";
//     if (!formData.coverLetter.trim()) newErrors.coverLetter = "Cover letter is required";
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const mockApiUpload = () => {
//     return new Promise((resolve) => {
//       const total = 100;
//       let progress = 0;
//       const interval = setInterval(() => {
//         if (progress < total) {
//           progress += 10;
//           setUploadProgress(progress);
//         } else {
//           clearInterval(interval);
//           resolve({ message: "Upload successful!" });
//         }
//       }, 200);
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       setIsLoading(true);
//       setUploadProgress(0);
//       try {
//         await mockApiUpload();
//         toast({
//           title: "Application submitted!",
//           description: "We'll be in touch soon.",
//           status: "success",
//           duration: 5000,
//           isClosable: true,
//           position: "top",
//         });
//         onSubmit(formData);
//         onClose();
//       } catch (error) {
//         toast({
//           title: "Submission failed",
//           description: error.message || "Something went wrong",
//           status: "error",
//           duration: 5000,
//           isClosable: true,
//           position: "top",
//         });
//       } finally {
//         setIsLoading(false);
//       }
//     } else {
//       toast({
//         title: "Form has errors",
//         description: "Please correct the errors in the form.",
//         status: "error",
//         duration: 5000,
//         isClosable: true,
//         position: "top",
//       });
//     }
//   };

//   const handleNext = () => {
//     if (activeStep === 0) {
//       const newErrors = {};
//       if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
//       if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
//       if (!/^\d{10}$/.test(formData.mobileNumber)) newErrors.mobileNumber = "Invalid mobile number";
//       if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email address";
//       setErrors(newErrors);
//       if (Object.keys(newErrors).length > 0) return;
//     }
//     setActiveStep((prev) => prev + 1);
//   };

//   const handlePrev = () => {
//     setActiveStep((prev) => prev - 1);
//   };

//   useEffect(() => {
//     if (isOpen) {
//       setFormData((prev) => ({
//         ...prev,
//         profession: selectedJob?.department || "",
//       }));
//     }
//   }, [isOpen, selectedJob]);

//   useEffect(() => {
//     if (!isOpen) {
//       setFormData({
//         firstName: "",
//         lastName: "",
//         mobileNumber: "",
//         email: "",
//         profession: "",
//         resume: null,
//         coverLetter: "",
//       });
//       setErrors({});
//       setActiveStep(0);
//       setUploadProgress(0);
//     }
//   }, [isOpen]);

//   // ✅ Restore scroll only when step changes
//   useLayoutEffect(() => {
//     if (scrollContainerRef.current && scrollPositionRef.current > 0) {
//       scrollContainerRef.current.scrollTop = scrollPositionRef.current;
//     }
//   }, [activeStep]);

//   const renderContent = () => (
//     <>
//       <JobDetails job={selectedJob} />
//       <JobRequirements />
//       <Box>
//         <Heading as="h3" size="md" mb={6} color={textColor}>
//           Application Form
//         </Heading>
//         <FormStepper activeStep={activeStep} steps={steps} />
//         <form onSubmit={handleSubmit}>
//           <Box>
//             {activeStep === 0 && (
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <VStack spacing={6} align="stretch">
//                   <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
//                     <InputField
//                       icon={FiUser}
//                       label="First Name"
//                       name="firstName"
//                       type="text"
//                       value={formData.firstName}
//                       onChange={handleInputChange}
//                       error={errors.firstName}
//                       placeholder="John"
//                       isRequired
//                     />
//                     <InputField
//                       icon={FiUser}
//                       label="Last Name"
//                       name="lastName"
//                       type="text"
//                       value={formData.lastName}
//                       onChange={handleInputChange}
//                       error={errors.lastName}
//                       placeholder="Doe"
//                       isRequired
//                     />
//                   </SimpleGrid>
//                   <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
//                     <InputField
//                       icon={FiPhone}
//                       label="Mobile Number"
//                       name="mobileNumber"
//                       type="tel"
//                       value={formData.mobileNumber}
//                       onChange={handleInputChange}
//                       error={errors.mobileNumber}
//                       placeholder="1234567890"
//                       isRequired
//                     />
//                     <InputField
//                       icon={FiMail}
//                       label="Email"
//                       name="email"
//                       type="email"
//                       value={formData.email}
//                       onChange={handleInputChange}
//                       error={errors.email}
//                       placeholder="john@example.com"
//                       isRequired
//                     />
//                   </SimpleGrid>
//                 </VStack>
//               </motion.div>
//             )}
//             {activeStep === 1 && (
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <VStack spacing={6} align="stretch">
//                   <FormControl isInvalid={!!errors.profession} isRequired>
//                     <FormLabel
//                       htmlFor="profession"
//                       fontSize={{ base: "sm", md: "md" }}
//                       fontWeight="medium"
//                       color={useColorModeValue("gray.700", "gray.300")}
//                     >
//                       Profession
//                     </FormLabel>
//                     <InputGroup>
//                       <InputLeftElement pointerEvents="none">
//                         <Icon as={FiBriefcase} color={errors.profession ? "red.500" : "gray.400"} />
//                       </InputLeftElement>
//                       <Select
//                         id="profession"
//                         name="profession"
//                         value={formData.profession}
//                         onChange={handleInputChange}
//                         placeholder="Select your profession"
//                         pl={10}
//                         bg={useColorModeValue("white", "gray.800")}
//                         _hover={{ bg: useColorModeValue("gray.50", "gray.700") }}
//                         borderColor={errors.profession ? "red.500" : "gray.200"}
//                       >
//                         {professions.map((prof) => (
//                           <option key={prof} value={prof}>
//                             {prof}
//                           </option>
//                         ))}
//                       </Select>
//                     </InputGroup>
//                     <FormErrorMessage fontSize="xs">{errors.profession}</FormErrorMessage>
//                   </FormControl>
//                   <FileInput
//                     icon={FiFile}
//                     label="Upload Resume"
//                     name="resume"
//                     onChange={handleFileChange}
//                     error={errors.resume}
//                     isRequired
//                     value={formData.resume}
//                   />
//                   <Box
//                     p={4}
//                     bg={useColorModeValue("blue.50", "blue.900")}
//                     borderRadius="md"
//                     borderLeft="4px solid"
//                     borderColor={useColorModeValue("blue.400", "blue.500")}
//                   >
//                     <HStack spacing={3} align="flex-start">
//                       <Icon as={FiInfo} color={useColorModeValue("blue.500", "blue.300")} mt={1} />
//                       <Text fontSize="sm">
//                         Your resume should highlight your relevant experience, skills, and achievements. Make sure
//                         it's up-to-date and tailored to the position you're applying for.
//                       </Text>
//                     </HStack>
//                   </Box>
//                 </VStack>
//               </motion.div>
//             )}
//             {activeStep === 2 && (
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <VStack spacing={6} align="stretch">
//                   <FormControl isInvalid={!!errors.coverLetter} isRequired>
//                     <FormLabel
//                       htmlFor="coverLetter"
//                       fontSize={{ base: "sm", md: "md" }}
//                       fontWeight="medium"
//                       color={useColorModeValue("gray.700", "gray.300")}
//                     >
//                       Cover Letter
//                     </FormLabel>
//                     <Textarea
//                       id="coverLetter"
//                       name="coverLetter"
//                       value={formData.coverLetter}
//                       onChange={handleInputChange}
//                       placeholder="Tell us why you're a great fit for this position..."
//                       rows={8}
//                       bg={useColorModeValue("white", "gray.800")}
//                       _hover={{ bg: useColorModeValue("gray.50", "gray.700") }}
//                       _focus={{
//                         borderColor: "orange.900",
//                         boxShadow: "0 0 0 1px orange.500",
//                         bg: useColorModeValue("white", "gray.800"),
//                       }}
//                       borderColor={errors.coverLetter ? "red.500" : "gray.200"}
//                       fontSize={{ base: "sm", md: "md" }}
//                     />
//                     <FormErrorMessage fontSize="xs">{errors.coverLetter}</FormErrorMessage>
//                   </FormControl>
//                   <Box
//                     p={4}
//                     bg={useColorModeValue("green.50", "green.900")}
//                     borderRadius="md"
//                     borderLeft="4px solid"
//                     borderColor={useColorModeValue("green.400", "green.500")}
//                   >
//                     <VStack align="flex-start" spacing={2}>
//                       <HStack spacing={3}>
//                         <Icon as={FiInfo} color={useColorModeValue("green.500", "green.300")} />
//                         <Text fontWeight="medium" fontSize="sm">
//                           Tips for a great cover letter:
//                         </Text>
//                       </HStack>
//                       <List spacing={1} pl={8} fontSize="sm">
//                         <ListItem>
//                           <ListIcon as={FiCheck} color={useColorModeValue("green.500", "green.300")} />
//                           Explain why you're interested in this position
//                         </ListItem>
//                         <ListItem>
//                           <ListIcon as={FiCheck} color={useColorModeValue("green.500", "green.300")} />
//                           Highlight your most relevant skills and experiences
//                         </ListItem>
//                         <ListItem>
//                           <ListIcon as={FiCheck} color={useColorModeValue("green.500", "green.300")} />
//                           Show how you can add value to the company
//                         </ListItem>
//                       </List>
//                     </VStack>
//                   </Box>
//                 </VStack>
//               </motion.div>
//             )}
//             {isLoading && (
//               <Box mt={6}>
//                 <Text mb={2} fontSize="sm">
//                   Uploading: {uploadProgress}%
//                 </Text>
//                 <Progress
//                   value={uploadProgress}
//                   size="sm"
//                   colorScheme="teal"
//                   borderRadius="full"
//                   hasStripe
//                   isAnimated
//                 />
//               </Box>
//             )}
//           </Box>
//         </form>
//       </Box>
//     </>
//   );

//   const FormFooter = () => (
//     <Flex
//       justify="space-between"
//       pt={4}
//       pb={4}
//       px={{ base: 4, md: 6 }}
//       borderTop="1px solid"
//       borderColor={useColorModeValue("gray.200", "gray.700")}
//       bg={useColorModeValue("gray.50", "gray.900")}
//     >
//       <Button
//         onClick={handlePrev}
//         isDisabled={activeStep === 0}
//         leftIcon={<FiArrowLeft />}
//         variant="outline"
//         size={{ base: "sm", md: "md" }}
//         fontWeight="medium"
//         type="button"
//       >
//         Previous
//       </Button>
//       {activeStep < steps.length - 1 ? (
//         <Button
//           onClick={handleNext}
//           rightIcon={<FiArrowRight />}
//           color="white"
//           bg="teal.900"
//           size={{ base: "sm", md: "md" }}
//           fontWeight="medium"
//           type="button"
//         >
//           Next Step
//         </Button>
//       ) : (
//         <Button
//           onClick={handleSubmit}
//           color="white"
//           bg="teal.900"
//           isLoading={isLoading}
//           loadingText="Submitting"
//           size={{ base: "sm", md: "md" }}
//           fontWeight="medium"
//         >
//           Submit Application
//         </Button>
//       )}
//     </Flex>
//   );

//   // ✅ Mobile: Drawer
//   if (isMobile) {
//     return (
//       <Drawer
//         isOpen={isOpen}
//         onClose={onClose}
//         placement="right"
//         size="full"
//         trapFocus={false}
//         autoFocus={false}
//       >
//         <DrawerOverlay />
//         <DrawerContent>
//           <DrawerHeader
//             bg={headerBg}
//             color="white"
//             py={4}
//             px={4}
//             position="sticky"
//             top={0}
//             zIndex={10}
//             boxShadow="md"
//           >
//             <Flex justify="space-between" align="center">
//               <VStack align="flex-start" spacing={0}>
//                 <Heading size="md" noOfLines={1}>
//                   Apply for {selectedJob?.title}
//                 </Heading>
//                 <Text fontSize="xs" opacity={0.8}>
//                   Complete the form below to apply
//                 </Text>
//               </VStack>
//               <DrawerCloseButton position="static" color="white" />
//             </Flex>
//           </DrawerHeader>
//           {/* ✅ Fixed: DrawerBody with overflowY */}
//           <DrawerBody
//             p={4}
//             overflowY="auto"
//             ref={scrollContainerRef}
//           >
//             {renderContent()}
//           </DrawerBody>
//           <DrawerFooter
//             p={0}
//             position="sticky"
//             bottom={0}
//             zIndex={10}
//             boxShadow="0 -2px 10px rgba(0,0,0,0.05)"
//           >
//             <FormFooter />
//           </DrawerFooter>
//         </DrawerContent>
//       </Drawer>
//     );
//   }

//   // ✅ Desktop: Modal
//   return (
//     <Modal
//       isOpen={isOpen}
//       onClose={onClose}
//       size={{ base: "full", md: "4xl" }}
//       scrollBehavior="inside"
//       trapFocus={false}
//       autoFocus={false}
//     >
//       <ModalOverlay />
//       <ModalContent
//         maxW={{ base: "100%", md: "900px" }}
//         maxH={{ base: "100vh", md: "90vh" }}
//         my={{ base: 0, md: "auto" }}
//         borderRadius={{ base: 0, md: "md" }}
//       >
//         <ModalHeader
//           bg={headerBg}
//           color="white"
//           py={4}
//           px={6}
//           borderTopRadius={{ base: 0, md: "md" }}
//           position="sticky"
//           top={0}
//           zIndex={10}
//           boxShadow="md"
//         >
//           <Flex justify="space-between" align="center">
//             <VStack align="flex-start" spacing={0}>
//               <Heading size="md" noOfLines={1}>
//                 Apply for {selectedJob?.title}
//               </Heading>
//               <Text fontSize="xs" opacity={0.8}>
//                 Complete the form below to apply
//               </Text>
//             </VStack>
//             <ModalCloseButton position="static" color="white" />
//           </Flex>
//         </ModalHeader>

//         {/* ✅ Fixed: ModalBody with overflowY */}
//         <ModalBody
//           p={6}
//           overflowY="auto"
//           maxH="calc(90vh - 140px)"
//           ref={scrollContainerRef}
//         >
//           {renderContent()}
//         </ModalBody>

//         <ModalFooter
//           p={0}
//           position="sticky"
//           bottom={0}
//           zIndex={10}
//           boxShadow="0 -2px 10px rgba(0,0,0,0.05)"
//           borderBottomRadius={{ base: 0, md: "md" }}
//         >
//           <FormFooter />
//         </ModalFooter>
//       </ModalContent>
//     </Modal>
//   );
// };

// export default ApplicationForm;

// import { useState, useRef, useEffect, useLayoutEffect } from "react";
// import { motion } from "framer-motion";
// import {
//   Box,
//   Button,
//   Flex,
//   FormControl,
//   FormLabel,
//   Heading,
//   Input,
//   Select,
//   Text,
//   Textarea,
//   VStack,
//   HStack,
//   useToast,
//   Progress,
//   Icon,
//   SimpleGrid,
//   useColorModeValue,
//   FormErrorMessage,
//   Stepper,
//   Step,
//   StepIndicator,
//   StepStatus,
//   StepIcon,
//   StepNumber,
//   StepTitle,
//   StepDescription,
//   StepSeparator,
//   useSteps,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalBody,
//   ModalFooter,
//   ModalCloseButton,
//   Drawer,
//   DrawerBody,
//   DrawerFooter,
//   DrawerHeader,
//   DrawerOverlay,
//   DrawerContent,
//   DrawerCloseButton,
//   useBreakpointValue,
//   Accordion,
//   AccordionItem,
//   AccordionButton,
//   AccordionPanel,
//   AccordionIcon,
//   List,
//   ListItem,
//   ListIcon,
//   InputGroup,
//   InputLeftElement,
//   Badge,
// } from "@chakra-ui/react";
// import {
//   FiUser,
//   FiPhone,
//   FiMail,
//   FiBriefcase,
//   FiFile,
//   FiCheck,
//   FiArrowRight,
//   FiArrowLeft,
//   FiInfo,
//   FiMapPin,
//   FiCalendar,
//   FiClock,
//   FiDollarSign,
//   FiStar,
// } from "react-icons/fi";

// // ===========================
// // Reusable Components
// // ===========================

// const InputField = ({ icon, label, name, type, value, onChange, error, placeholder, isRequired = false }) => {
//   const focusBorderColor = useColorModeValue("orange.500", "orange.300");
//   const errorBorderColor = useColorModeValue("red.500", "red.300");
//   const bgColor = useColorModeValue("white", "gray.800");
//   const hoverBg = useColorModeValue("gray.50", "gray.700");
//   return (
//     <FormControl isInvalid={!!error} isRequired={isRequired}>
//       <FormLabel
//         htmlFor={name}
//         fontSize={{ base: "sm", md: "md" }}
//         fontWeight="medium"
//         color={useColorModeValue("gray.700", "gray.300")}
//         mb={2}
//       >
//         {label}
//       </FormLabel>
//       <InputGroup>
//         <InputLeftElement pointerEvents="none">
//           <Icon as={icon} color={error ? errorBorderColor : "gray.400"} />
//         </InputLeftElement>
//         <Input
//           type={type}
//           name={name}
//           id={name}
//           value={value}
//           onChange={onChange}
//           placeholder={placeholder}
//           bg={bgColor}
//           _hover={{ bg: hoverBg, borderColor: "gray.300" }}
//           _focus={{
//             borderColor: focusBorderColor,
//             boxShadow: `0 0 0 1px ${focusBorderColor}`,
//             bg: bgColor,
//           }}
//           borderColor={error ? errorBorderColor : "gray.200"}
//           transition="all 0.3s ease"
//           fontSize={{ base: "sm", md: "md" }}
//         />
//       </InputGroup>
//       <FormErrorMessage fontSize="xs" mt={1}>
//         {error}
//       </FormErrorMessage>
//     </FormControl>
//   );
// };

// const FileInput = ({ icon, label, name, onChange, error, isRequired = false, value }) => {
//   const fileInputRef = useRef(null);
//   const handleButtonClick = () => fileInputRef.current?.click();
//   const focusBorderColor = useColorModeValue("orange.500", "orange.300");
//   const errorBorderColor = useColorModeValue("red.500", "red.300");
//   const bgColor = useColorModeValue("white", "gray.800");
//   const hoverBg = useColorModeValue("gray.50", "gray.700");
//   return (
//     <FormControl isInvalid={!!error} isRequired={isRequired}>
//       <FormLabel
//         htmlFor={name}
//         fontSize={{ base: "sm", md: "md" }}
//         fontWeight="medium"
//         color={useColorModeValue("gray.700", "gray.300")}
//         mb={2}
//       >
//         {label}
//       </FormLabel>
//       <Box position="relative">
//         <Input
//           type="file"
//           ref={fileInputRef}
//           id={name}
//           name={name}
//           onChange={onChange}
//           accept=".pdf,.doc,.docx"
//           display="none"
//         />
//         <Flex
//           border="1px solid"
//           borderColor={error ? errorBorderColor : "gray.200"}
//           borderRadius="md"
//           bg={bgColor}
//           _hover={{ bg: hoverBg, borderColor: "gray.300" }}
//           transition="all 0.3s ease"
//           overflow="hidden"
//         >
//           <Flex align="center" justify="center" bg={useColorModeValue("gray.100", "gray.700")} p={3}>
//             <Icon as={icon} color={error ? errorBorderColor : "gray.500"} />
//           </Flex>
//           <Box flex="1" p={2} pl={3} overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap">
//             {value ? value.name : "No file selected"}
//           </Box>
//           <Button onClick={handleButtonClick} size="sm" colorScheme="orange" m={1} px={4}>
//             Browse
//           </Button>
//         </Flex>
//       </Box>
//       <FormErrorMessage fontSize="xs" mt={1}>
//         {error}
//       </FormErrorMessage>
//       <Text fontSize="xs" color="gray.500" mt={1}>
//         Accepted formats: PDF, DOC, DOCX. Max size: 5MB
//       </Text>
//     </FormControl>
//   );
// };

// const JobDetails = ({ job }) => {
//   const bgColor = useColorModeValue("orange.50", "gray.700");
//   const borderColor = useColorModeValue("orange.200", "gray.600");
//   return (
//     <Box bg={bgColor} p={5} borderRadius="md" borderLeft="4px solid" borderColor={borderColor} boxShadow="sm">
//       <Heading size="md" mb={4} color={useColorModeValue("gray.800", "white")}>
//         {job?.title}
//       </Heading>
//       <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
//         <HStack spacing={2}>
//           <Icon as={FiBriefcase} color="gray.500" />
//           <Text fontWeight="medium">Department:</Text>
//           <Text>{job?.department}</Text>
//         </HStack>
//         <HStack spacing={2}>
//           <Icon as={FiMapPin} color="gray.500" />
//           <Text fontWeight="medium">Location:</Text>
//           <Text>{job?.location}</Text>
//         </HStack>
//         <HStack spacing={2}>
//           <Icon as={FiClock} color="gray.500" />
//           <Text fontWeight="medium">Type:</Text>
//           <Badge colorScheme="orange">{job?.type}</Badge>
//         </HStack>
//       </SimpleGrid>
//       <HStack mt={4} spacing={4}>
//         <HStack>
//           <Icon as={FiCalendar} color="gray.500" />
//           <Text fontSize="sm">Apply by: June 30, 2023</Text>
//         </HStack>
//         <HStack>
//           <Icon as={FiDollarSign} color="gray.500" />
//           <Text fontSize="sm">Competitive salary</Text>
//         </HStack>
//         <HStack>
//           <Icon as={FiStar} color="gray.500" />
//           <Text fontSize="sm">5+ years experience</Text>
//         </HStack>
//       </HStack>
//     </Box>
//   );
// };

// const JobRequirements = () => {
//   const borderColor = useColorModeValue("teal.500", "teal.300");
//   return (
//     <Accordion allowToggle>
//       <AccordionItem border="none" boxShadow="sm" borderRadius="md" mb={4}>
//         <h2>
//           <AccordionButton
//             py={4}
//             bg={useColorModeValue("gray.50", "gray.700")}
//             _hover={{ bg: useColorModeValue("gray.100", "gray.600") }}
//           >
//             <Box flex="1" textAlign="left" fontWeight="bold">
//               Job Description & Requirements
//             </Box>
//             <AccordionIcon />
//           </AccordionButton>
//         </h2>
//         <AccordionPanel
//           pb={4}
//           pt={4}
//           borderLeft="1px solid"
//           borderRight="1px solid"
//           borderBottom="1px solid"
//           borderColor="gray.200"
//           borderBottomRadius="md"
//         >
//           <Text mb={4}>
//             We are seeking a talented and motivated professional to join our team. In this role, you will be responsible
//             for developing innovative solutions and collaborating with cross-functional teams to deliver exceptional
//             results.
//           </Text>
//           <Text fontWeight="bold" mb={3}>
//             Key Responsibilities:
//           </Text>
//           <List spacing={2} mb={4}>
//             <ListItem>
//               <ListIcon as={FiCheck} color={borderColor} />
//               Design and implement new features and functionality
//             </ListItem>
//             <ListItem>
//               <ListIcon as={FiCheck} color={borderColor} />
//               Collaborate with product managers and designers
//             </ListItem>
//             <ListItem>
//               <ListIcon as={FiCheck} color={borderColor} />
//               Write clean, maintainable, and efficient code
//             </ListItem>
//             <ListItem>
//               <ListIcon as={FiCheck} color={borderColor} />
//               Participate in code reviews and provide constructive feedback
//             </ListItem>
//           </List>
//           <Text fontWeight="bold" mb={3}>
//             Requirements:
//           </Text>
//           <List spacing={2}>
//             <ListItem>
//               <ListIcon as={FiCheck} color={borderColor} />
//               3+ years of experience in relevant field
//             </ListItem>
//             <ListItem>
//               <ListIcon as={FiCheck} color={borderColor} />
//               Strong knowledge of industry best practices
//             </ListItem>
//             <ListItem>
//               <ListIcon as={FiCheck} color={borderColor} />
//               Excellent communication and teamwork skills
//             </ListItem>
//             <ListItem>
//               <ListIcon as={FiCheck} color={borderColor} />
//               Bachelor's degree in a related field (or equivalent experience)
//             </ListItem>
//           </List>
//         </AccordionPanel>
//       </AccordionItem>
//     </Accordion>
//   );
// };

// const FormStepper = ({ activeStep, steps }) => {
//   const isMobile = useBreakpointValue({ base: true, md: false });
//   const stepperColor = useColorModeValue("orange.500", "orange.300");
//   return (
//     <Box mb={8}>
//       {isMobile ? (
//         <Flex justify="space-between" align="center" mb={4}>
//           {steps.map((step, index) => (
//             <VStack key={index} spacing={1} flex="1" position="relative">
//               <Box
//                 w="10px"
//                 h="10px"
//                 borderRadius="full"
//                 bg={index <= activeStep ? stepperColor : "gray.200"}
//                 zIndex={1}
//               />
//               {index < steps.length - 1 && (
//                 <Box
//                   position="absolute"
//                   h="2px"
//                   bg={index < activeStep ? stepperColor : "gray.200"}
//                   top="5px"
//                   right="-50%"
//                   w="100%"
//                 />
//               )}
//               <Text
//                 fontSize="xs"
//                 fontWeight={index === activeStep ? "bold" : "normal"}
//                 color={index === activeStep ? stepperColor : "gray.500"}
//                 textAlign="center"
//               >
//                 {step.title}
//               </Text>
//             </VStack>
//           ))}
//         </Flex>
//       ) : (
//         <Stepper index={activeStep} size="lg">
//           {steps.map((step, index) => (
//             <Step key={index}>
//               <StepIndicator>
//                 <StepStatus complete={<StepIcon />} incomplete={<StepNumber />} active={<StepNumber />} />
//               </StepIndicator>
//               <Box flexShrink="0">
//                 <StepTitle>{step.title}</StepTitle>
//                 <StepDescription>{step.description}</StepDescription>
//               </Box>
//               <StepSeparator />
//             </Step>
//           ))}
//         </Stepper>
//       )}
//     </Box>
//   );
// };

// // ===========================
// // Main ApplicationForm (FIXED)
// // ===========================
// const ApplicationForm = ({ isOpen, onClose, selectedJob, onSubmit }) => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     mobileNumber: "",
//     email: "",
//     profession: "",
//     resume: null,
//     coverLetter: "",
//   });
//   const [errors, setErrors] = useState({});
//   const [isLoading, setIsLoading] = useState(false);
//   const [uploadProgress, setUploadProgress] = useState(0);
//   const toast = useToast();
//   const isMobile = useBreakpointValue({ base: true, md: false });
//   const headerBg = useColorModeValue("teal.900", "teal.900");
//   const textColor = useColorModeValue("gray.800", "white");

//   // ✅ Ref for modal body scrolling
//   const scrollContainerRef = useRef(null);

//   // Save scroll position
//   const scrollPositionRef = useRef(0);

//   const { activeStep, setActiveStep } = useSteps({
//     index: 0,
//     count: 3,
//   });

//   const steps = [
//     { title: "Personal Info", description: "Your basic details" },
//     { title: "Professional Info", description: "Your work experience" },
//     { title: "Additional Info", description: "Extra details" },
//   ];

//   const professions = [
//     "Software Engineer",
//     "Data Scientist",
//     "Product Manager",
//     "UX Designer",
//     "Marketing Specialist",
//     "Customer Success Manager",
//   ];

//   // ✅ Save scroll before any state change
//   const handleInputChange = (e) => {
//     if (scrollContainerRef.current) {
//       scrollPositionRef.current = scrollContainerRef.current.scrollTop;
//     }
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     setErrors((prev) => ({ ...prev, [name]: "" }));
//   };

//   const handleFileChange = (e) => {
//     if (scrollContainerRef.current) {
//       scrollPositionRef.current = scrollContainerRef.current.scrollTop;
//     }
//     const file = e.target.files[0];
//     if (file && file.size <= 5 * 1024 * 1024) {
//       setFormData((prev) => ({ ...prev, resume: file }));
//       setErrors((prev) => ({ ...prev, resume: "" }));
//     } else {
//       setErrors((prev) => ({ ...prev, resume: "File size should be less than 5MB" }));
//     }
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
//     if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
//     if (!/^\d{10}$/.test(formData.mobileNumber)) newErrors.mobileNumber = "Invalid mobile number";
//     if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email address";
//     if (!formData.profession) newErrors.profession = "Please select a profession";
//     if (!formData.resume) newErrors.resume = "Please upload your resume";
//     if (!formData.coverLetter.trim()) newErrors.coverLetter = "Cover letter is required";
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const mockApiUpload = () => {
//     return new Promise((resolve) => {
//       const total = 100;
//       let progress = 0;
//       const interval = setInterval(() => {
//         if (progress < total) {
//           progress += 10;
//           setUploadProgress(progress);
//         } else {
//           clearInterval(interval);
//           resolve({ message: "Upload successful!" });
//         }
//       }, 200);
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       setIsLoading(true);
//       setUploadProgress(0);
//       try {
//         await mockApiUpload();
//         toast({
//           title: "Application submitted!",
//           description: "We'll be in touch soon.",
//           status: "success",
//           duration: 5000,
//           isClosable: true,
//           position: "top",
//         });
//         onSubmit(formData);
//         onClose();
//       } catch (error) {
//         toast({
//           title: "Submission failed",
//           description: error.message || "Something went wrong",
//           status: "error",
//           duration: 5000,
//           isClosable: true,
//           position: "top",
//         });
//       } finally {
//         setIsLoading(false);
//       }
//     } else {
//       toast({
//         title: "Form has errors",
//         description: "Please correct the errors in the form.",
//         status: "error",
//         duration: 5000,
//         isClosable: true,
//         position: "top",
//       });
//     }
//   };

//   const handleNext = () => {
//     if (activeStep === 0) {
//       const newErrors = {};
//       if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
//       if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
//       if (!/^\d{10}$/.test(formData.mobileNumber)) newErrors.mobileNumber = "Invalid mobile number";
//       if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email address";
//       setErrors(newErrors);
//       if (Object.keys(newErrors).length > 0) return;
//     }
//     setActiveStep((prev) => prev + 1);
//   };

//   const handlePrev = () => {
//     setActiveStep((prev) => prev - 1);
//   };

//   useEffect(() => {
//     if (isOpen) {
//       setFormData((prev) => ({
//         ...prev,
//         profession: selectedJob?.department || "",
//       }));
//     }
//   }, [isOpen, selectedJob]);

//   useEffect(() => {
//     if (!isOpen) {
//       setFormData({
//         firstName: "",
//         lastName: "",
//         mobileNumber: "",
//         email: "",
//         profession: "",
//         resume: null,
//         coverLetter: "",
//       });
//       setErrors({});
//       setActiveStep(0);
//       setUploadProgress(0);
//     }
//   }, [isOpen]);

//   // ✅ Restore scroll only when step changes
//   useLayoutEffect(() => {
//     if (scrollContainerRef.current && scrollPositionRef.current > 0) {
//       scrollContainerRef.current.scrollTop = scrollPositionRef.current;
//     }
//   }, [activeStep]);

//   // ✅ Prevent body scroll when modal is open
//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = "hidden"; // 🔒 Lock background scroll
//     } else {
//       document.body.style.overflow = "auto"; // ✅ Unlock when closed
//     }
//     return () => {
//       document.body.style.overflow = "auto"; // Cleanup
//     };
//   }, [isOpen]);

//   const renderContent = () => (
//     <>
//       <JobDetails job={selectedJob} />
//       <JobRequirements />
//       <Box>
//         <Heading as="h3" size="md" mb={6} color={textColor}>
//           Application Form
//         </Heading>
//         <FormStepper activeStep={activeStep} steps={steps} />
//         <form onSubmit={handleSubmit}>
//           <Box>
//             {activeStep === 0 && (
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <VStack spacing={6} align="stretch">
//                   <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
//                     <InputField
//                       icon={FiUser}
//                       label="First Name"
//                       name="firstName"
//                       type="text"
//                       value={formData.firstName}
//                       onChange={handleInputChange}
//                       error={errors.firstName}
//                       placeholder="John"
//                       isRequired
//                     />
//                     <InputField
//                       icon={FiUser}
//                       label="Last Name"
//                       name="lastName"
//                       type="text"
//                       value={formData.lastName}
//                       onChange={handleInputChange}
//                       error={errors.lastName}
//                       placeholder="Doe"
//                       isRequired
//                     />
//                   </SimpleGrid>
//                   <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
//                     <InputField
//                       icon={FiPhone}
//                       label="Mobile Number"
//                       name="mobileNumber"
//                       type="tel"
//                       value={formData.mobileNumber}
//                       onChange={handleInputChange}
//                       error={errors.mobileNumber}
//                       placeholder="1234567890"
//                       isRequired
//                     />
//                     <InputField
//                       icon={FiMail}
//                       label="Email"
//                       name="email"
//                       type="email"
//                       value={formData.email}
//                       onChange={handleInputChange}
//                       error={errors.email}
//                       placeholder="john@example.com"
//                       isRequired
//                     />
//                   </SimpleGrid>
//                 </VStack>
//               </motion.div>
//             )}
//             {activeStep === 1 && (
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <VStack spacing={6} align="stretch">
//                   <FormControl isInvalid={!!errors.profession} isRequired>
//                     <FormLabel
//                       htmlFor="profession"
//                       fontSize={{ base: "sm", md: "md" }}
//                       fontWeight="medium"
//                       color={useColorModeValue("gray.700", "gray.300")}
//                     >
//                       Profession
//                     </FormLabel>
//                     <InputGroup>
//                       <InputLeftElement pointerEvents="none">
//                         <Icon as={FiBriefcase} color={errors.profession ? "red.500" : "gray.400"} />
//                       </InputLeftElement>
//                       <Select
//                         id="profession"
//                         name="profession"
//                         value={formData.profession}
//                         onChange={handleInputChange}
//                         placeholder="Select your profession"
//                         pl={10}
//                         bg={useColorModeValue("white", "gray.800")}
//                         _hover={{ bg: useColorModeValue("gray.50", "gray.700") }}
//                         borderColor={errors.profession ? "red.500" : "gray.200"}
//                       >
//                         {professions.map((prof) => (
//                           <option key={prof} value={prof}>
//                             {prof}
//                           </option>
//                         ))}
//                       </Select>
//                     </InputGroup>
//                     <FormErrorMessage fontSize="xs">{errors.profession}</FormErrorMessage>
//                   </FormControl>
//                   <FileInput
//                     icon={FiFile}
//                     label="Upload Resume"
//                     name="resume"
//                     onChange={handleFileChange}
//                     error={errors.resume}
//                     isRequired
//                     value={formData.resume}
//                   />
//                   <Box
//                     p={4}
//                     bg={useColorModeValue("blue.50", "blue.900")}
//                     borderRadius="md"
//                     borderLeft="4px solid"
//                     borderColor={useColorModeValue("blue.400", "blue.500")}
//                   >
//                     <HStack spacing={3} align="flex-start">
//                       <Icon as={FiInfo} color={useColorModeValue("blue.500", "blue.300")} mt={1} />
//                       <Text fontSize="sm">
//                         Your resume should highlight your relevant experience, skills, and achievements. Make sure
//                         it's up-to-date and tailored to the position you're applying for.
//                       </Text>
//                     </HStack>
//                   </Box>
//                 </VStack>
//               </motion.div>
//             )}
//             {activeStep === 2 && (
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <VStack spacing={6} align="stretch">
//                   <FormControl isInvalid={!!errors.coverLetter} isRequired>
//                     <FormLabel
//                       htmlFor="coverLetter"
//                       fontSize={{ base: "sm", md: "md" }}
//                       fontWeight="medium"
//                       color={useColorModeValue("gray.700", "gray.300")}
//                     >
//                       Cover Letter
//                     </FormLabel>
//                     <Textarea
//                       id="coverLetter"
//                       name="coverLetter"
//                       value={formData.coverLetter}
//                       onChange={handleInputChange}
//                       placeholder="Tell us why you're a great fit for this position..."
//                       rows={8}
//                       bg={useColorModeValue("white", "gray.800")}
//                       _hover={{ bg: useColorModeValue("gray.50", "gray.700") }}
//                       _focus={{
//                         borderColor: "orange.900",
//                         boxShadow: "0 0 0 1px orange.500",
//                         bg: useColorModeValue("white", "gray.800"),
//                       }}
//                       borderColor={errors.coverLetter ? "red.500" : "gray.200"}
//                       fontSize={{ base: "sm", md: "md" }}
//                     />
//                     <FormErrorMessage fontSize="xs">{errors.coverLetter}</FormErrorMessage>
//                   </FormControl>
//                   <Box
//                     p={4}
//                     bg={useColorModeValue("green.50", "green.900")}
//                     borderRadius="md"
//                     borderLeft="4px solid"
//                     borderColor={useColorModeValue("green.400", "green.500")}
//                   >
//                     <VStack align="flex-start" spacing={2}>
//                       <HStack spacing={3}>
//                         <Icon as={FiInfo} color={useColorModeValue("green.500", "green.300")} />
//                         <Text fontWeight="medium" fontSize="sm">
//                           Tips for a great cover letter:
//                         </Text>
//                       </HStack>
//                       <List spacing={1} pl={8} fontSize="sm">
//                         <ListItem>
//                           <ListIcon as={FiCheck} color={useColorModeValue("green.500", "green.300")} />
//                           Explain why you're interested in this position
//                         </ListItem>
//                         <ListItem>
//                           <ListIcon as={FiCheck} color={useColorModeValue("green.500", "green.300")} />
//                           Highlight your most relevant skills and experiences
//                         </ListItem>
//                         <ListItem>
//                           <ListIcon as={FiCheck} color={useColorModeValue("green.500", "green.300")} />
//                           Show how you can add value to the company
//                         </ListItem>
//                       </List>
//                     </VStack>
//                   </Box>
//                 </VStack>
//               </motion.div>
//             )}
//             {isLoading && (
//               <Box mt={6}>
//                 <Text mb={2} fontSize="sm">
//                   Uploading: {uploadProgress}%
//                 </Text>
//                 <Progress
//                   value={uploadProgress}
//                   size="sm"
//                   colorScheme="teal"
//                   borderRadius="full"
//                   hasStripe
//                   isAnimated
//                 />
//               </Box>
//             )}
//           </Box>
//         </form>
//       </Box>
//     </>
//   );

//   const FormFooter = () => (
//     <Flex
//       justify="space-between"
//       pt={4}
//       pb={4}
//       px={{ base: 4, md: 6 }}
//       borderTop="1px solid"
//       borderColor={useColorModeValue("gray.200", "gray.700")}
//       bg={useColorModeValue("gray.50", "gray.900")}
//     >
//       <Button
//         onClick={handlePrev}
//         isDisabled={activeStep === 0}
//         leftIcon={<FiArrowLeft />}
//         variant="outline"
//         size={{ base: "sm", md: "md" }}
//         fontWeight="medium"
//         type="button"
//       >
//         Previous
//       </Button>
//       {activeStep < steps.length - 1 ? (
//         <Button
//           onClick={handleNext}
//           rightIcon={<FiArrowRight />}
//           color="white"
//           bg="teal.900"
//           size={{ base: "sm", md: "md" }}
//           fontWeight="medium"
//           type="button"
//         >
//           Next Step
//         </Button>
//       ) : (
//         <Button
//           onClick={handleSubmit}
//           color="white"
//           bg="teal.900"
//           isLoading={isLoading}
//           loadingText="Submitting"
//           size={{ base: "sm", md: "md" }}
//           fontWeight="medium"
//         >
//           Submit Application
//         </Button>
//       )}
//     </Flex>
//   );

//   // ✅ Mobile: Drawer
//   if (isMobile) {
//     return (
//       <Drawer
//         isOpen={isOpen}
//         onClose={onClose}
//         placement="right"
//         size="full"
//         trapFocus={false}
//         autoFocus={false}
//       >
//         <DrawerOverlay />
//         <DrawerContent>
//           <DrawerHeader
//             bg={headerBg}
//             color="white"
//             py={4}
//             px={4}
//             position="sticky"
//             top={0}
//             zIndex={10}
//             boxShadow="md"
//           >
//             <Flex justify="space-between" align="center">
//               <VStack align="flex-start" spacing={0}>
//                 <Heading size="md" noOfLines={1}>
//                   Apply for {selectedJob?.title}
//                 </Heading>
//                 <Text fontSize="xs" opacity={0.8}>
//                   Complete the form below to apply
//                 </Text>
//               </VStack>
//               <DrawerCloseButton position="static" color="white" />
//             </Flex>
//           </DrawerHeader>
//           {/* ✅ DrawerBody with overflowY */}
//           <DrawerBody
//             p={4}
//             overflowY="auto"
//             ref={scrollContainerRef}
//           >
//             {renderContent()}
//           </DrawerBody>
//           <DrawerFooter
//             p={0}
//             position="sticky"
//             bottom={0}
//             zIndex={10}
//             boxShadow="0 -2px 10px rgba(0,0,0,0.05)"
//           >
//             <FormFooter />
//           </DrawerFooter>
//         </DrawerContent>
//       </Drawer>
//     );
//   }

//   // ✅ Desktop: Modal
//   return (
//     <Modal
//       isOpen={isOpen}
//       onClose={onClose}
//       size={{ base: "full", md: "4xl" }}
//       scrollBehavior="inside"
//       trapFocus={false}
//       autoFocus={false}
//     >
//       <ModalOverlay />
//       <ModalContent
//         maxW={{ base: "100%", md: "900px" }}
//         maxH={{ base: "100vh", md: "90vh" }}
//         my={{ base: 0, md: "auto" }}
//         borderRadius={{ base: 0, md: "md" }}
//       >
//         <ModalHeader
//           bg={headerBg}
//           color="white"
//           py={4}
//           px={6}
//           borderTopRadius={{ base: 0, md: "md" }}
//           position="sticky"
//           top={0}
//           zIndex={10}
//           boxShadow="md"
//         >
//           <Flex justify="space-between" align="center">
//             <VStack align="flex-start" spacing={0}>
//               <Heading size="md" noOfLines={1}>
//                 Apply for {selectedJob?.title}
//               </Heading>
//               <Text fontSize="xs" opacity={0.8}>
//                 Complete the form below to apply
//               </Text>
//             </VStack>
//             <ModalCloseButton position="static" color="white" />
//           </Flex>
//         </ModalHeader>

//         {/* ✅ ModalBody with overflowY */}
//         <ModalBody
//           p={6}
//           maxH="calc(90vh - 140px)"
//           overflowY="auto"
//           ref={scrollContainerRef}
//         >
//           {renderContent()}
//         </ModalBody>

//         <ModalFooter
//           p={0}
//           position="sticky"
//           bottom={0}
//           zIndex={10}
//           boxShadow="0 -2px 10px rgba(0,0,0,0.05)"
//           borderBottomRadius={{ base: 0, md: "md" }}
//         >
//           <FormFooter />
//         </ModalFooter>
//       </ModalContent>
//     </Modal>
//   );
// };

// export default ApplicationForm;

// import { useState, useRef, useEffect, useLayoutEffect } from "react";
// import { motion } from "framer-motion";
// import {
//   Box,
//   Button,
//   Flex,
//   FormControl,
//   FormLabel,
//   Heading,
//   Input,
//   Select,
//   Text,
//   Textarea,
//   VStack,
//   HStack,
//   useToast,
//   Progress,
//   Icon,
//   SimpleGrid,
//   useColorModeValue,
//   FormErrorMessage,
//   Stepper,
//   Step,
//   StepIndicator,
//   StepStatus,
//   StepIcon,
//   StepNumber,
//   StepTitle,
//   StepDescription,
//   StepSeparator,
//   useSteps,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalBody,
//   ModalFooter,
//   ModalCloseButton,
//   Drawer,
//   DrawerBody,
//   DrawerFooter,
//   DrawerHeader,
//   DrawerOverlay,
//   DrawerContent,
//   DrawerCloseButton,
//   useBreakpointValue,
//   Accordion,
//   AccordionItem,
//   AccordionButton,
//   AccordionPanel,
//   AccordionIcon,
//   List,
//   ListItem,
//   ListIcon,
//   InputGroup,
//   InputLeftElement,
//   Badge,
// } from "@chakra-ui/react";
// import {
//   FiUser,
//   FiPhone,
//   FiMail,
//   FiBriefcase,
//   FiFile,
//   FiCheck,
//   FiArrowRight,
//   FiArrowLeft,
//   FiInfo,
//   FiMapPin,
//   FiCalendar,
//   FiClock,
//   FiDollarSign,
//   FiStar,
// } from "react-icons/fi";

// // ===========================
// // Reusable Components
// // ===========================

// const InputField = ({ icon, label, name, type, value, onChange, error, placeholder, isRequired = false }) => {
//   const focusBorderColor = useColorModeValue("orange.500", "orange.300");
//   const errorBorderColor = useColorModeValue("red.500", "red.300");
//   const bgColor = useColorModeValue("white", "gray.800");
//   const hoverBg = useColorModeValue("gray.50", "gray.700");
//   return (
//     <FormControl isInvalid={!!error} isRequired={isRequired}>
//       <FormLabel
//         htmlFor={name}
//         fontSize={{ base: "sm", md: "md" }}
//         fontWeight="medium"
//         color={useColorModeValue("gray.700", "gray.300")}
//         mb={2}
//       >
//         {label}
//       </FormLabel>
//       <InputGroup>
//         <InputLeftElement pointerEvents="none">
//           <Icon as={icon} color={error ? errorBorderColor : "gray.400"} />
//         </InputLeftElement>
//         <Input
//           type={type}
//           name={name}
//           id={name}
//           value={value}
//           onChange={onChange}
//           placeholder={placeholder}
//           bg={bgColor}
//           _hover={{ bg: hoverBg, borderColor: "gray.300" }}
//           _focus={{
//             borderColor: focusBorderColor,
//             boxShadow: `0 0 0 1px ${focusBorderColor}`,
//             bg: bgColor,
//           }}
//           borderColor={error ? errorBorderColor : "gray.200"}
//           transition="all 0.3s ease"
//           fontSize={{ base: "sm", md: "md" }}
//         />
//       </InputGroup>
//       <FormErrorMessage fontSize="xs" mt={1}>
//         {error}
//       </FormErrorMessage>
//     </FormControl>
//   );
// };

// const FileInput = ({ icon, label, name, onChange, error, isRequired = false, value }) => {
//   const fileInputRef = useRef(null);
//   const handleButtonClick = () => fileInputRef.current?.click();
//   const focusBorderColor = useColorModeValue("orange.500", "orange.300");
//   const errorBorderColor = useColorModeValue("red.500", "red.300");
//   const bgColor = useColorModeValue("white", "gray.800");
//   const hoverBg = useColorModeValue("gray.50", "gray.700");
//   return (
//     <FormControl isInvalid={!!error} isRequired={isRequired}>
//       <FormLabel
//         htmlFor={name}
//         fontSize={{ base: "sm", md: "md" }}
//         fontWeight="medium"
//         color={useColorModeValue("gray.700", "gray.300")}
//         mb={2}
//       >
//         {label}
//       </FormLabel>
//       <Box position="relative">
//         <Input
//           type="file"
//           ref={fileInputRef}
//           id={name}
//           name={name}
//           onChange={onChange}
//           accept=".pdf,.doc,.docx"
//           display="none"
//         />
//         <Flex
//           border="1px solid"
//           borderColor={error ? errorBorderColor : "gray.200"}
//           borderRadius="md"
//           bg={bgColor}
//           _hover={{ bg: hoverBg, borderColor: "gray.300" }}
//           transition="all 0.3s ease"
//           overflow="hidden"
//         >
//           <Flex align="center" justify="center" bg={useColorModeValue("gray.100", "gray.700")} p={3}>
//             <Icon as={icon} color={error ? errorBorderColor : "gray.500"} />
//           </Flex>
//           <Box flex="1" p={2} pl={3} overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap">
//             {value ? value.name : "No file selected"}
//           </Box>
//           <Button onClick={handleButtonClick} size="sm" colorScheme="orange" m={1} px={4}>
//             Browse
//           </Button>
//         </Flex>
//       </Box>
//       <FormErrorMessage fontSize="xs" mt={1}>
//         {error}
//       </FormErrorMessage>
//       <Text fontSize="xs" color="gray.500" mt={1}>
//         Accepted formats: PDF, DOC, DOCX. Max size: 5MB
//       </Text>
//     </FormControl>
//   );
// };

// const JobDetails = ({ job }) => {
//   const bgColor = useColorModeValue("orange.50", "gray.700");
//   const borderColor = useColorModeValue("orange.200", "gray.600");
//   return (
//     <Box bg={bgColor} p={5} borderRadius="md" borderLeft="4px solid" borderColor={borderColor} boxShadow="sm">
//       <Heading size="md" mb={4} color={useColorModeValue("gray.800", "white")}>
//         {job?.title}
//       </Heading>
//       <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
//         <HStack spacing={2}>
//           <Icon as={FiBriefcase} color="gray.500" />
//           <Text fontWeight="medium">Department:</Text>
//           <Text>{job?.department}</Text>
//         </HStack>
//         <HStack spacing={2}>
//           <Icon as={FiMapPin} color="gray.500" />
//           <Text fontWeight="medium">Location:</Text>
//           <Text>{job?.location}</Text>
//         </HStack>
//         <HStack spacing={2}>
//           <Icon as={FiClock} color="gray.500" />
//           <Text fontWeight="medium">Type:</Text>
//           <Badge colorScheme="orange">{job?.type}</Badge>
//         </HStack>
//       </SimpleGrid>
//       <HStack mt={4} spacing={4}>
//         <HStack>
//           <Icon as={FiCalendar} color="gray.500" />
//           <Text fontSize="sm">Apply by: June 30, 2023</Text>
//         </HStack>
//         <HStack>
//           <Icon as={FiDollarSign} color="gray.500" />
//           <Text fontSize="sm">Competitive salary</Text>
//         </HStack>
//         <HStack>
//           <Icon as={FiStar} color="gray.500" />
//           <Text fontSize="sm">5+ years experience</Text>
//         </HStack>
//       </HStack>
//     </Box>
//   );
// };

// const JobRequirements = () => {
//   const borderColor = useColorModeValue("teal.500", "teal.300");
//   return (
//     <Accordion allowToggle>
//       <AccordionItem border="none" boxShadow="sm" borderRadius="md" mb={4}>
//         <h2>
//           <AccordionButton
//             py={4}
//             bg={useColorModeValue("gray.50", "gray.700")}
//             _hover={{ bg: useColorModeValue("gray.100", "gray.600") }}
//           >
//             <Box flex="1" textAlign="left" fontWeight="bold">
//               Job Description & Requirements
//             </Box>
//             <AccordionIcon />
//           </AccordionButton>
//         </h2>
//         <AccordionPanel
//           pb={4}
//           pt={4}
//           borderLeft="1px solid"
//           borderRight="1px solid"
//           borderBottom="1px solid"
//           borderColor="gray.200"
//           borderBottomRadius="md"
//         >
//           <Text mb={4}>
//             We are seeking a talented and motivated professional to join our team. In this role, you will be responsible
//             for developing innovative solutions and collaborating with cross-functional teams to deliver exceptional
//             results.
//           </Text>
//           <Text fontWeight="bold" mb={3}>
//             Key Responsibilities:
//           </Text>
//           <List spacing={2} mb={4}>
//             <ListItem>
//               <ListIcon as={FiCheck} color={borderColor} />
//               Design and implement new features and functionality
//             </ListItem>
//             <ListItem>
//               <ListIcon as={FiCheck} color={borderColor} />
//               Collaborate with product managers and designers
//             </ListItem>
//             <ListItem>
//               <ListIcon as={FiCheck} color={borderColor} />
//               Write clean, maintainable, and efficient code
//             </ListItem>
//             <ListItem>
//               <ListIcon as={FiCheck} color={borderColor} />
//               Participate in code reviews and provide constructive feedback
//             </ListItem>
//           </List>
//           <Text fontWeight="bold" mb={3}>
//             Requirements:
//           </Text>
//           <List spacing={2}>
//             <ListItem>
//               <ListIcon as={FiCheck} color={borderColor} />
//               3+ years of experience in relevant field
//             </ListItem>
//             <ListItem>
//               <ListIcon as={FiCheck} color={borderColor} />
//               Strong knowledge of industry best practices
//             </ListItem>
//             <ListItem>
//               <ListIcon as={FiCheck} color={borderColor} />
//               Excellent communication and teamwork skills
//             </ListItem>
//             <ListItem>
//               <ListIcon as={FiCheck} color={borderColor} />
//               Bachelor's degree in a related field (or equivalent experience)
//             </ListItem>
//           </List>
//         </AccordionPanel>
//       </AccordionItem>
//     </Accordion>
//   );
// };

// const FormStepper = ({ activeStep, steps }) => {
//   const isMobile = useBreakpointValue({ base: true, md: false });
//   const stepperColor = useColorModeValue("orange.500", "orange.300");
//   return (
//     <Box mb={8}>
//       {isMobile ? (
//         <Flex justify="space-between" align="center" mb={4}>
//           {steps.map((step, index) => (
//             <VStack key={index} spacing={1} flex="1" position="relative">
//               <Box
//                 w="10px"
//                 h="10px"
//                 borderRadius="full"
//                 bg={index <= activeStep ? stepperColor : "gray.200"}
//                 zIndex={1}
//               />
//               {index < steps.length - 1 && (
//                 <Box
//                   position="absolute"
//                   h="2px"
//                   bg={index < activeStep ? stepperColor : "gray.200"}
//                   top="5px"
//                   right="-50%"
//                   w="100%"
//                 />
//               )}
//               <Text
//                 fontSize="xs"
//                 fontWeight={index === activeStep ? "bold" : "normal"}
//                 color={index === activeStep ? stepperColor : "gray.500"}
//                 textAlign="center"
//               >
//                 {step.title}
//               </Text>
//             </VStack>
//           ))}
//         </Flex>
//       ) : (
//         <Stepper index={activeStep} size="lg">
//           {steps.map((step, index) => (
//             <Step key={index}>
//               <StepIndicator>
//                 <StepStatus complete={<StepIcon />} incomplete={<StepNumber />} active={<StepNumber />} />
//               </StepIndicator>
//               <Box flexShrink="0">
//                 <StepTitle>{step.title}</StepTitle>
//                 <StepDescription>{step.description}</StepDescription>
//               </Box>
//               <StepSeparator />
//             </Step>
//           ))}
//         </Stepper>
//       )}
//     </Box>
//   );
// };

// // ===========================
// // Main ApplicationForm (FIXED)
// // ===========================
// const ApplicationForm = ({ isOpen, onClose, selectedJob, onSubmit }) => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     mobileNumber: "",
//     email: "",
//     profession: "",
//     resume: null,
//     coverLetter: "",
//   });
//   const [errors, setErrors] = useState({});
//   const [isLoading, setIsLoading] = useState(false);
//   const [uploadProgress, setUploadProgress] = useState(0);
//   const toast = useToast();
//   const isMobile = useBreakpointValue({ base: true, md: false });
//   const headerBg = useColorModeValue("teal.900", "teal.900");
//   const textColor = useColorModeValue("gray.800", "white");

//   // ✅ Ref for modal body scrolling
//   const scrollContainerRef = useRef(null);

//   // Save scroll position
//   const scrollPositionRef = useRef(0);

//   const { activeStep, setActiveStep } = useSteps({
//     index: 0,
//     count: 3,
//   });

//   const steps = [
//     { title: "Personal Info", description: "Your basic details" },
//     { title: "Professional Info", description: "Your work experience" },
//     { title: "Additional Info", description: "Extra details" },
//   ];

//   const professions = [
//     "Software Engineer",
//     "Data Scientist",
//     "Product Manager",
//     "UX Designer",
//     "Marketing Specialist",
//     "Customer Success Manager",
//   ];

//   // ✅ Save scroll before any state change
//   const handleInputChange = (e) => {
//     if (scrollContainerRef.current) {
//       scrollPositionRef.current = scrollContainerRef.current.scrollTop;
//     }
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     setErrors((prev) => ({ ...prev, [name]: "" }));
//   };

//   const handleFileChange = (e) => {
//     if (scrollContainerRef.current) {
//       scrollPositionRef.current = scrollContainerRef.current.scrollTop;
//     }
//     const file = e.target.files[0];
//     if (file && file.size <= 5 * 1024 * 1024) {
//       setFormData((prev) => ({ ...prev, resume: file }));
//       setErrors((prev) => ({ ...prev, resume: "" }));
//     } else {
//       setErrors((prev) => ({ ...prev, resume: "File size should be less than 5MB" }));
//     }
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
//     if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
//     if (!/^\d{10}$/.test(formData.mobileNumber)) newErrors.mobileNumber = "Invalid mobile number";
//     if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email address";
//     if (!formData.profession) newErrors.profession = "Please select a profession";
//     if (!formData.resume) newErrors.resume = "Please upload your resume";
//     if (!formData.coverLetter.trim()) newErrors.coverLetter = "Cover letter is required";
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const mockApiUpload = () => {
//     return new Promise((resolve) => {
//       const total = 100;
//       let progress = 0;
//       const interval = setInterval(() => {
//         if (progress < total) {
//           progress += 10;
//           setUploadProgress(progress);
//         } else {
//           clearInterval(interval);
//           resolve({ message: "Upload successful!" });
//         }
//       }, 200);
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       setIsLoading(true);
//       setUploadProgress(0);
//       try {
//         await mockApiUpload();
//         toast({
//           title: "Application submitted!",
//           description: "We'll be in touch soon.",
//           status: "success",
//           duration: 5000,
//           isClosable: true,
//           position: "top",
//         });
//         onSubmit(formData);
//         onClose();
//       } catch (error) {
//         toast({
//           title: "Submission failed",
//           description: error.message || "Something went wrong",
//           status: "error",
//           duration: 5000,
//           isClosable: true,
//           position: "top",
//         });
//       } finally {
//         setIsLoading(false);
//       }
//     } else {
//       toast({
//         title: "Form has errors",
//         description: "Please correct the errors in the form.",
//         status: "error",
//         duration: 5000,
//         isClosable: true,
//         position: "top",
//       });
//     }
//   };

//   const handleNext = () => {
//     if (activeStep === 0) {
//       const newErrors = {};
//       if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
//       if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
//       if (!/^\d{10}$/.test(formData.mobileNumber)) newErrors.mobileNumber = "Invalid mobile number";
//       if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email address";
//       setErrors(newErrors);
//       if (Object.keys(newErrors).length > 0) return;
//     }
//     setActiveStep((prev) => prev + 1);
//   };

//   const handlePrev = () => {
//     setActiveStep((prev) => prev - 1);
//   };

//   useEffect(() => {
//     if (isOpen) {
//       setFormData((prev) => ({
//         ...prev,
//         profession: selectedJob?.department || "",
//       }));
//     }
//   }, [isOpen, selectedJob]);

//   useEffect(() => {
//     if (!isOpen) {
//       setFormData({
//         firstName: "",
//         lastName: "",
//         mobileNumber: "",
//         email: "",
//         profession: "",
//         resume: null,
//         coverLetter: "",
//       });
//       setErrors({});
//       setActiveStep(0);
//       setUploadProgress(0);
//     }
//   }, [isOpen]);

//   // ✅ Restore scroll only when step changes
//   useLayoutEffect(() => {
//     if (scrollContainerRef.current && scrollPositionRef.current > 0) {
//       scrollContainerRef.current.scrollTop = scrollPositionRef.current;
//     }
//   }, [activeStep]);

//   // ✅ 🔒 LOCK BODY SCROLL WHEN MODAL IS OPEN
//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }
//     return () => {
//       document.body.style.overflow = "auto"; // Cleanup
//     };
//   }, [isOpen]);

//   const renderContent = () => (
//     <>
//       <JobDetails job={selectedJob} />
//       <JobRequirements />
//       <Box>
//         <Heading as="h3" size="md" mb={6} color={textColor}>
//           Application Form
//         </Heading>
//         <FormStepper activeStep={activeStep} steps={steps} />
//         <form onSubmit={handleSubmit}>
//           <Box>
//             {activeStep === 0 && (
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <VStack spacing={6} align="stretch">
//                   <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
//                     <InputField
//                       icon={FiUser}
//                       label="First Name"
//                       name="firstName"
//                       type="text"
//                       value={formData.firstName}
//                       onChange={handleInputChange}
//                       error={errors.firstName}
//                       placeholder="John"
//                       isRequired
//                     />
//                     <InputField
//                       icon={FiUser}
//                       label="Last Name"
//                       name="lastName"
//                       type="text"
//                       value={formData.lastName}
//                       onChange={handleInputChange}
//                       error={errors.lastName}
//                       placeholder="Doe"
//                       isRequired
//                     />
//                   </SimpleGrid>
//                   <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
//                     <InputField
//                       icon={FiPhone}
//                       label="Mobile Number"
//                       name="mobileNumber"
//                       type="tel"
//                       value={formData.mobileNumber}
//                       onChange={handleInputChange}
//                       error={errors.mobileNumber}
//                       placeholder="1234567890"
//                       isRequired
//                     />
//                     <InputField
//                       icon={FiMail}
//                       label="Email"
//                       name="email"
//                       type="email"
//                       value={formData.email}
//                       onChange={handleInputChange}
//                       error={errors.email}
//                       placeholder="john@example.com"
//                       isRequired
//                     />
//                   </SimpleGrid>
//                 </VStack>
//               </motion.div>
//             )}
//             {activeStep === 1 && (
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <VStack spacing={6} align="stretch">
//                   <FormControl isInvalid={!!errors.profession} isRequired>
//                     <FormLabel
//                       htmlFor="profession"
//                       fontSize={{ base: "sm", md: "md" }}
//                       fontWeight="medium"
//                       color={useColorModeValue("gray.700", "gray.300")}
//                     >
//                       Profession
//                     </FormLabel>
//                     <InputGroup>
//                       <InputLeftElement pointerEvents="none">
//                         <Icon as={FiBriefcase} color={errors.profession ? "red.500" : "gray.400"} />
//                       </InputLeftElement>
//                       <Select
//                         id="profession"
//                         name="profession"
//                         value={formData.profession}
//                         onChange={handleInputChange}
//                         placeholder="Select your profession"
//                         pl={10}
//                         bg={useColorModeValue("white", "gray.800")}
//                         _hover={{ bg: useColorModeValue("gray.50", "gray.700") }}
//                         borderColor={errors.profession ? "red.500" : "gray.200"}
//                       >
//                         {professions.map((prof) => (
//                           <option key={prof} value={prof}>
//                             {prof}
//                           </option>
//                         ))}
//                       </Select>
//                     </InputGroup>
//                     <FormErrorMessage fontSize="xs">{errors.profession}</FormErrorMessage>
//                   </FormControl>
//                   <FileInput
//                     icon={FiFile}
//                     label="Upload Resume"
//                     name="resume"
//                     onChange={handleFileChange}
//                     error={errors.resume}
//                     isRequired
//                     value={formData.resume}
//                   />
//                   <Box
//                     p={4}
//                     bg={useColorModeValue("blue.50", "blue.900")}
//                     borderRadius="md"
//                     borderLeft="4px solid"
//                     borderColor={useColorModeValue("blue.400", "blue.500")}
//                   >
//                     <HStack spacing={3} align="flex-start">
//                       <Icon as={FiInfo} color={useColorModeValue("blue.500", "blue.300")} mt={1} />
//                       <Text fontSize="sm">
//                         Your resume should highlight your relevant experience, skills, and achievements. Make sure
//                         it's up-to-date and tailored to the position you're applying for.
//                       </Text>
//                     </HStack>
//                   </Box>
//                 </VStack>
//               </motion.div>
//             )}
//             {activeStep === 2 && (
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <VStack spacing={6} align="stretch">
//                   <FormControl isInvalid={!!errors.coverLetter} isRequired>
//                     <FormLabel
//                       htmlFor="coverLetter"
//                       fontSize={{ base: "sm", md: "md" }}
//                       fontWeight="medium"
//                       color={useColorModeValue("gray.700", "gray.300")}
//                     >
//                       Cover Letter
//                     </FormLabel>
//                     <Textarea
//                       id="coverLetter"
//                       name="coverLetter"
//                       value={formData.coverLetter}
//                       onChange={handleInputChange}
//                       placeholder="Tell us why you're a great fit for this position..."
//                       rows={8}
//                       bg={useColorModeValue("white", "gray.800")}
//                       _hover={{ bg: useColorModeValue("gray.50", "gray.700") }}
//                       _focus={{
//                         borderColor: "orange.900",
//                         boxShadow: "0 0 0 1px orange.500",
//                         bg: useColorModeValue("white", "gray.800"),
//                       }}
//                       borderColor={errors.coverLetter ? "red.500" : "gray.200"}
//                       fontSize={{ base: "sm", md: "md" }}
//                     />
//                     <FormErrorMessage fontSize="xs">{errors.coverLetter}</FormErrorMessage>
//                   </FormControl>
//                   <Box
//                     p={4}
//                     bg={useColorModeValue("green.50", "green.900")}
//                     borderRadius="md"
//                     borderLeft="4px solid"
//                     borderColor={useColorModeValue("green.400", "green.500")}
//                   >
//                     <VStack align="flex-start" spacing={2}>
//                       <HStack spacing={3}>
//                         <Icon as={FiInfo} color={useColorModeValue("green.500", "green.300")} />
//                         <Text fontWeight="medium" fontSize="sm">
//                           Tips for a great cover letter:
//                         </Text>
//                       </HStack>
//                       <List spacing={1} pl={8} fontSize="sm">
//                         <ListItem>
//                           <ListIcon as={FiCheck} color={useColorModeValue("green.500", "green.300")} />
//                           Explain why you're interested in this position
//                         </ListItem>
//                         <ListItem>
//                           <ListIcon as={FiCheck} color={useColorModeValue("green.500", "green.300")} />
//                           Highlight your most relevant skills and experiences
//                         </ListItem>
//                         <ListItem>
//                           <ListIcon as={FiCheck} color={useColorModeValue("green.500", "green.300")} />
//                           Show how you can add value to the company
//                         </ListItem>
//                       </List>
//                     </VStack>
//                   </Box>
//                 </VStack>
//               </motion.div>
//             )}
//             {isLoading && (
//               <Box mt={6}>
//                 <Text mb={2} fontSize="sm">
//                   Uploading: {uploadProgress}%
//                 </Text>
//                 <Progress
//                   value={uploadProgress}
//                   size="sm"
//                   colorScheme="teal"
//                   borderRadius="full"
//                   hasStripe
//                   isAnimated
//                 />
//               </Box>
//             )}
//           </Box>
//         </form>
//       </Box>
//     </>
//   );

//   const FormFooter = () => (
//     <Flex
//       justify="space-between"
//       pt={4}
//       pb={4}
//       px={{ base: 4, md: 6 }}
//       borderTop="1px solid"
//       borderColor={useColorModeValue("gray.200", "gray.700")}
//       bg={useColorModeValue("gray.50", "gray.900")}
//     >
//       <Button
//         onClick={handlePrev}
//         isDisabled={activeStep === 0}
//         leftIcon={<FiArrowLeft />}
//         variant="outline"
//         size={{ base: "sm", md: "md" }}
//         fontWeight="medium"
//         type="button"
//       >
//         Previous
//       </Button>
//       {activeStep < steps.length - 1 ? (
//         <Button
//           onClick={handleNext}
//           rightIcon={<FiArrowRight />}
//           color="white"
//           bg="teal.900"
//           size={{ base: "sm", md: "md" }}
//           fontWeight="medium"
//           type="button"
//         >
//           Next Step
//         </Button>
//       ) : (
//         <Button
//           onClick={handleSubmit}
//           color="white"
//           bg="teal.900"
//           isLoading={isLoading}
//           loadingText="Submitting"
//           size={{ base: "sm", md: "md" }}
//           fontWeight="medium"
//         >
//           Submit Application
//         </Button>
//       )}
//     </Flex>
//   );

//   // ✅ Mobile: Drawer
//   if (isMobile) {
//     return (
//       <Drawer
//         isOpen={isOpen}
//         onClose={onClose}
//         placement="right"
//         size="full"
//         trapFocus={false}
//         autoFocus={false}
//       >
//         <DrawerOverlay />
//         <DrawerContent>
//           <DrawerHeader
//             bg={headerBg}
//             color="white"
//             py={4}
//             px={4}
//             position="sticky"
//             top={0}
//             zIndex={10}
//             boxShadow="md"
//           >
//             <Flex justify="space-between" align="center">
//               <VStack align="flex-start" spacing={0}>
//                 <Heading size="md" noOfLines={1}>
//                   Apply for {selectedJob?.title}
//                 </Heading>
//                 <Text fontSize="xs" opacity={0.8}>
//                   Complete the form below to apply
//                 </Text>
//               </VStack>
//               <DrawerCloseButton position="static" color="white" />
//             </Flex>
//           </DrawerHeader>
//           <DrawerBody
//             p={4}
//             overflowY="auto"
//             ref={scrollContainerRef}
//           >
//             {renderContent()}
//           </DrawerBody>
//           <DrawerFooter
//             p={0}
//             position="sticky"
//             bottom={0}
//             zIndex={10}
//             boxShadow="0 -2px 10px rgba(0,0,0,0.05)"
//           >
//             <FormFooter />
//           </DrawerFooter>
//         </DrawerContent>
//       </Drawer>
//     );
//   }

//   // ✅ Desktop: Modal
//   return (
//     <Modal
//       isOpen={isOpen}
//       onClose={onClose}
//       size={{ base: "full", md: "4xl" }}
//       scrollBehavior="inside"
//       trapFocus={false}
//       autoFocus={false}
//     >
//       <ModalOverlay />
//       <ModalContent
//         maxW={{ base: "100%", md: "900px" }}
//         maxH={{ base: "100vh", md: "90vh" }}
//         my={{ base: 0, md: "auto" }}
//         borderRadius={{ base: 0, md: "md" }}
//       >
//         <ModalHeader
//           bg={headerBg}
//           color="white"
//           py={4}
//           px={6}
//           borderTopRadius={{ base: 0, md: "md" }}
//           position="sticky"
//           top={0}
//           zIndex={10}
//           boxShadow="md"
//         >
//           <Flex justify="space-between" align="center">
//             <VStack align="flex-start" spacing={0}>
//               <Heading size="md" noOfLines={1}>
//                 Apply for {selectedJob?.title}
//               </Heading>
//               <Text fontSize="xs" opacity={0.8}>
//                 Complete the form below to apply
//               </Text>
//             </VStack>
//             <ModalCloseButton position="static" color="white" />
//           </Flex>
//         </ModalHeader>

//         {/* ✅ ModalBody with overflowY */}
//         <ModalBody
//           p={6}
//           maxH="calc(90vh - 140px)"
//           overflowY="auto"
//           ref={scrollContainerRef}
//         >
//           {renderContent()}
//         </ModalBody>

//         <ModalFooter
//           p={0}
//           position="sticky"
//           bottom={0}
//           zIndex={10}
//           boxShadow="0 -2px 10px rgba(0,0,0,0.05)"
//           borderBottomRadius={{ base: 0, md: "md" }}
//         >
//           <FormFooter />
//         </ModalFooter>
//       </ModalContent>
//     </Modal>
//   );
// };

// export default ApplicationForm;

// import { useState, useRef, useEffect, useLayoutEffect } from "react";
// import { motion } from "framer-motion";
// import {
//   Box,
//   Button,
//   Flex,
//   FormControl,
//   FormLabel,
//   Heading,
//   Input,
//   Select,
//   Text,
//   Textarea,
//   VStack,
//   HStack,
//   useToast,
//   Progress,
//   Icon,
//   SimpleGrid,
//   useColorModeValue,
//   FormErrorMessage,
//   Stepper,
//   Step,
//   StepIndicator,
//   StepStatus,
//   StepIcon,
//   StepNumber,
//   StepTitle,
//   StepDescription,
//   StepSeparator,
//   useSteps,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalBody,
//   ModalFooter,
//   ModalCloseButton,
//   Drawer,
//   DrawerBody,
//   DrawerFooter,
//   DrawerHeader,
//   DrawerOverlay,
//   DrawerContent,
//   DrawerCloseButton,
//   useBreakpointValue,
//   Accordion,
//   AccordionItem,
//   AccordionButton,
//   AccordionPanel,
//   AccordionIcon,
//   List,
//   ListItem,
//   ListIcon,
//   InputGroup,
//   InputLeftElement,
//   Badge,
// } from "@chakra-ui/react";
// import {
//   FiUser,
//   FiPhone,
//   FiMail,
//   FiBriefcase,
//   FiFile,
//   FiCheck,
//   FiArrowRight,
//   FiArrowLeft,
//   FiInfo,
//   FiMapPin,
//   FiCalendar,
//   FiClock,
//   FiDollarSign,
//   FiStar,
// } from "react-icons/fi";

// // ===========================
// // Reusable Components
// // ===========================

// const InputField = ({ icon, label, name, type, value, onChange, error, placeholder, isRequired = false }) => {
//   const focusBorderColor = useColorModeValue("orange.500", "orange.300");
//   const errorBorderColor = useColorModeValue("red.500", "red.300");
//   const bgColor = useColorModeValue("white", "gray.800");
//   const hoverBg = useColorModeValue("gray.50", "gray.700");
//   return (
//     <FormControl isInvalid={!!error} isRequired={isRequired}>
//       <FormLabel
//         htmlFor={name}
//         fontSize={{ base: "sm", md: "md" }}
//         fontWeight="medium"
//         color={useColorModeValue("gray.700", "gray.300")}
//         mb={2}
//       >
//         {label}
//       </FormLabel>
//       <InputGroup>
//         <InputLeftElement pointerEvents="none">
//           <Icon as={icon} color={error ? errorBorderColor : "gray.400"} />
//         </InputLeftElement>
//         <Input
//           type={type}
//           name={name}
//           id={name}
//           value={value}
//           onChange={onChange}
//           placeholder={placeholder}
//           bg={bgColor}
//           _hover={{ bg: hoverBg, borderColor: "gray.300" }}
//           _focus={{
//             borderColor: focusBorderColor,
//             boxShadow: `0 0 0 1px ${focusBorderColor}`,
//             bg: bgColor,
//           }}
//           borderColor={error ? errorBorderColor : "gray.200"}
//           transition="all 0.3s ease"
//           fontSize={{ base: "sm", md: "md" }}
//         />
//       </InputGroup>
//       <FormErrorMessage fontSize="xs" mt={1}>
//         {error}
//       </FormErrorMessage>
//     </FormControl>
//   );
// };

// const FileInput = ({ icon, label, name, onChange, error, isRequired = false, value }) => {
//   const fileInputRef = useRef(null);
//   const handleButtonClick = () => fileInputRef.current?.click();
//   const focusBorderColor = useColorModeValue("orange.500", "orange.300");
//   const errorBorderColor = useColorModeValue("red.500", "red.300");
//   const bgColor = useColorModeValue("white", "gray.800");
//   const hoverBg = useColorModeValue("gray.50", "gray.700");
//   return (
//     <FormControl isInvalid={!!error} isRequired={isRequired}>
//       <FormLabel
//         htmlFor={name}
//         fontSize={{ base: "sm", md: "md" }}
//         fontWeight="medium"
//         color={useColorModeValue("gray.700", "gray.300")}
//         mb={2}
//       >
//         {label}
//       </FormLabel>
//       <Box position="relative">
//         <Input
//           type="file"
//           ref={fileInputRef}
//           id={name}
//           name={name}
//           onChange={onChange}
//           accept=".pdf,.doc,.docx"
//           display="none"
//         />
//         <Flex
//           border="1px solid"
//           borderColor={error ? errorBorderColor : "gray.200"}
//           borderRadius="md"
//           bg={bgColor}
//           _hover={{ bg: hoverBg, borderColor: "gray.300" }}
//           transition="all 0.3s ease"
//           overflow="hidden"
//         >
//           <Flex align="center" justify="center" bg={useColorModeValue("gray.100", "gray.700")} p={3}>
//             <Icon as={icon} color={error ? errorBorderColor : "gray.500"} />
//           </Flex>
//           <Box flex="1" p={2} pl={3} overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap">
//             {value ? value.name : "No file selected"}
//           </Box>
//           <Button onClick={handleButtonClick} size="sm" colorScheme="orange" m={1} px={4}>
//             Browse
//           </Button>
//         </Flex>
//       </Box>
//       <FormErrorMessage fontSize="xs" mt={1}>
//         {error}
//       </FormErrorMessage>
//       <Text fontSize="xs" color="gray.500" mt={1}>
//         Accepted formats: PDF, DOC, DOCX. Max size: 5MB
//       </Text>
//     </FormControl>
//   );
// };

// const JobDetails = ({ job }) => {
//   const bgColor = useColorModeValue("orange.50", "gray.700");
//   const borderColor = useColorModeValue("orange.200", "gray.600");
//   return (
//     <Box bg={bgColor} p={5} borderRadius="md" borderLeft="4px solid" borderColor={borderColor} boxShadow="sm">
//       <Heading size="md" mb={4} color={useColorModeValue("gray.800", "white")}>
//         {job?.title}
//       </Heading>
//       <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
//         <HStack spacing={2}>
//           <Icon as={FiBriefcase} color="gray.500" />
//           <Text fontWeight="medium">Department:</Text>
//           <Text>{job?.department}</Text>
//         </HStack>
//         <HStack spacing={2}>
//           <Icon as={FiMapPin} color="gray.500" />
//           <Text fontWeight="medium">Location:</Text>
//           <Text>{job?.location}</Text>
//         </HStack>
//         <HStack spacing={2}>
//           <Icon as={FiClock} color="gray.500" />
//           <Text fontWeight="medium">Type:</Text>
//           <Badge colorScheme="orange">{job?.type}</Badge>
//         </HStack>
//       </SimpleGrid>
//       <HStack mt={4} spacing={4}>
//         <HStack>
//           <Icon as={FiCalendar} color="gray.500" />
//           <Text fontSize="sm">Apply by: June 30, 2023</Text>
//         </HStack>
//         <HStack>
//           <Icon as={FiDollarSign} color="gray.500" />
//           <Text fontSize="sm">Competitive salary</Text>
//         </HStack>
//         <HStack>
//           <Icon as={FiStar} color="gray.500" />
//           <Text fontSize="sm">5+ years experience</Text>
//         </HStack>
//       </HStack>
//     </Box>
//   );
// };

// const JobRequirements = () => {
//   const borderColor = useColorModeValue("teal.500", "teal.300");
//   return (
//     <Accordion allowToggle>
//       <AccordionItem border="none" boxShadow="sm" borderRadius="md" mb={4}>
//         <h2>
//           <AccordionButton
//             py={4}
//             bg={useColorModeValue("gray.50", "gray.700")}
//             _hover={{ bg: useColorModeValue("gray.100", "gray.600") }}
//           >
//             <Box flex="1" textAlign="left" fontWeight="bold">
//               Job Description & Requirements
//             </Box>
//             <AccordionIcon />
//           </AccordionButton>
//         </h2>
//         <AccordionPanel
//           pb={4}
//           pt={4}
//           borderLeft="1px solid"
//           borderRight="1px solid"
//           borderBottom="1px solid"
//           borderColor="gray.200"
//           borderBottomRadius="md"
//         >
//           <Text mb={4}>
//             We are seeking a talented and motivated professional to join our team. In this role, you will be responsible
//             for developing innovative solutions and collaborating with cross-functional teams to deliver exceptional
//             results.
//           </Text>
//           <Text fontWeight="bold" mb={3}>
//             Key Responsibilities:
//           </Text>
//           <List spacing={2} mb={4}>
//             <ListItem>
//               <ListIcon as={FiCheck} color={borderColor} />
//               Design and implement new features and functionality
//             </ListItem>
//             <ListItem>
//               <ListIcon as={FiCheck} color={borderColor} />
//               Collaborate with product managers and designers
//             </ListItem>
//             <ListItem>
//               <ListIcon as={FiCheck} color={borderColor} />
//               Write clean, maintainable, and efficient code
//             </ListItem>
//             <ListItem>
//               <ListIcon as={FiCheck} color={borderColor} />
//               Participate in code reviews and provide constructive feedback
//             </ListItem>
//           </List>
//           <Text fontWeight="bold" mb={3}>
//             Requirements:
//           </Text>
//           <List spacing={2}>
//             <ListItem>
//               <ListIcon as={FiCheck} color={borderColor} />
//               3+ years of experience in relevant field
//             </ListItem>
//             <ListItem>
//               <ListIcon as={FiCheck} color={borderColor} />
//               Strong knowledge of industry best practices
//             </ListItem>
//             <ListItem>
//               <ListIcon as={FiCheck} color={borderColor} />
//               Excellent communication and teamwork skills
//             </ListItem>
//             <ListItem>
//               <ListIcon as={FiCheck} color={borderColor} />
//               Bachelor's degree in a related field (or equivalent experience)
//             </ListItem>
//           </List>
//         </AccordionPanel>
//       </AccordionItem>
//     </Accordion>
//   );
// };

// const FormStepper = ({ activeStep, steps }) => {
//   const isMobile = useBreakpointValue({ base: true, md: false });
//   const stepperColor = useColorModeValue("orange.500", "orange.300");
//   return (
//     <Box mb={8}>
//       {isMobile ? (
//         <Flex justify="space-between" align="center" mb={4}>
//           {steps.map((step, index) => (
//             <VStack key={index} spacing={1} flex="1" position="relative">
//               <Box
//                 w="10px"
//                 h="10px"
//                 borderRadius="full"
//                 bg={index <= activeStep ? stepperColor : "gray.200"}
//                 zIndex={1}
//               />
//               {index < steps.length - 1 && (
//                 <Box
//                   position="absolute"
//                   h="2px"
//                   bg={index < activeStep ? stepperColor : "gray.200"}
//                   top="5px"
//                   right="-50%"
//                   w="100%"
//                 />
//               )}
//               <Text
//                 fontSize="xs"
//                 fontWeight={index === activeStep ? "bold" : "normal"}
//                 color={index === activeStep ? stepperColor : "gray.500"}
//                 textAlign="center"
//               >
//                 {step.title}
//               </Text>
//             </VStack>
//           ))}
//         </Flex>
//       ) : (
//         <Stepper index={activeStep} size="lg">
//           {steps.map((step, index) => (
//             <Step key={index}>
//               <StepIndicator>
//                 <StepStatus complete={<StepIcon />} incomplete={<StepNumber />} active={<StepNumber />} />
//               </StepIndicator>
//               <Box flexShrink="0">
//                 <StepTitle>{step.title}</StepTitle>
//                 <StepDescription>{step.description}</StepDescription>
//               </Box>
//               <StepSeparator />
//             </Step>
//           ))}
//         </Stepper>
//       )}
//     </Box>
//   );
// };

// // ===========================
// // Main ApplicationForm
// // ===========================
// const ApplicationForm = ({ isOpen, onClose, selectedJob, onSubmit }) => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     mobileNumber: "",
//     email: "",
//     profession: "",
//     resume: null,
//     coverLetter: "",
//     yearsOfExperience: "", // ← New field
//   });
//   const [errors, setErrors] = useState({});
//   const [isLoading, setIsLoading] = useState(false);
//   const [uploadProgress, setUploadProgress] = useState(0);
//   const [customProfession, setCustomProfession] = useState(""); // For "Others"
//   const toast = useToast();
//   const isMobile = useBreakpointValue({ base: true, md: false });
//   const headerBg = useColorModeValue("teal.900", "teal.900");
//   const textColor = useColorModeValue("gray.800", "white");

//   const scrollContainerRef = useRef(null);
//   const scrollPositionRef = useRef(0);

//   const { activeStep, setActiveStep } = useSteps({
//     index: 0,
//     count: 3,
//   });

//   const steps = [
//     { title: "Personal Info", description: "Your basic details" },
//     { title: "Professional Info", description: "Your work experience" },
//     { title: "Additional Info", description: "Extra details" },
//   ];

//   // ✅ Updated professions list
//   const professions = [
//     "Software Engineer",
//     "Data Scientist",
//     "Product Manager",
//     "UX Designer",
//     "Marketing Specialist",
//     "Customer Success Manager",
//     "IT Mentor",
//     "Non-IT Mentor",
//     "Others (please specify)",
//   ];

//   const handleInputChange = (e) => {
//     if (scrollContainerRef.current) {
//       scrollPositionRef.current = scrollContainerRef.current.scrollTop;
//     }
//     const { name, value } = e.target;

//     if (name === "profession") {
//       setFormData((prev) => ({ ...prev, profession: value }));
//       setErrors((prev) => ({ ...prev, profession: "" }));

//       if (value !== "Others (please specify)") {
//         setCustomProfession("");
//       }
//     } else {
//       setFormData((prev) => ({ ...prev, [name]: value }));
//       setErrors((prev) => ({ ...prev, [name]: "" }));
//     }
//   };

//   const handleCustomProfessionChange = (e) => {
//     const value = e.target.value;
//     setCustomProfession(value);
//     setFormData((prev) => ({ ...prev, profession: value }));
//     setErrors((prev) => ({ ...prev, profession: "" }));
//   };

//   const handleFileChange = (e) => {
//     if (scrollContainerRef.current) {
//       scrollPositionRef.current = scrollContainerRef.current.scrollTop;
//     }
//     const file = e.target.files[0];
//     if (file && file.size <= 5 * 1024 * 1024) {
//       setFormData((prev) => ({ ...prev, resume: file }));
//       setErrors((prev) => ({ ...prev, resume: "" }));
//     } else {
//       setErrors((prev) => ({ ...prev, resume: "File size should be less than 5MB" }));
//     }
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
//     if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
//     if (!/^\d{10}$/.test(formData.mobileNumber)) newErrors.mobileNumber = "Invalid mobile number";
//     if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email address";
//     if (!formData.profession) newErrors.profession = "Please select or enter a profession";
//     if (!formData.resume) newErrors.resume = "Please upload your resume";
//     if (!formData.coverLetter.trim()) newErrors.coverLetter = "Cover letter is required";
//     if (!formData.yearsOfExperience && formData.yearsOfExperience !== 0)
//       newErrors.yearsOfExperience = "Years of experience is required";
//     else if (formData.yearsOfExperience < 0 || formData.yearsOfExperience > 50)
//       newErrors.yearsOfExperience = "Please enter a valid number between 0 and 50";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const mockApiUpload = () => {
//     return new Promise((resolve) => {
//       const total = 100;
//       let progress = 0;
//       const interval = setInterval(() => {
//         if (progress < total) {
//           progress += 10;
//           setUploadProgress(progress);
//         } else {
//           clearInterval(interval);
//           resolve({ message: "Upload successful!" });
//         }
//       }, 200);
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       setIsLoading(true);
//       setUploadProgress(0);
//       try {
//         await mockApiUpload();
//         toast({
//           title: "Application submitted!",
//           description: "We'll be in touch soon.",
//           status: "success",
//           duration: 5000,
//           isClosable: true,
//           position: "top",
//         });
//         onSubmit(formData);
//         onClose();
//       } catch (error) {
//         toast({
//           title: "Submission failed",
//           description: error.message || "Something went wrong",
//           status: "error",
//           duration: 5000,
//           isClosable: true,
//           position: "top",
//         });
//       } finally {
//         setIsLoading(false);
//       }
//     } else {
//       toast({
//         title: "Form has errors",
//         description: "Please correct the errors in the form.",
//         status: "error",
//         duration: 5000,
//         isClosable: true,
//         position: "top",
//       });
//     }
//   };

//   const handleNext = () => {
//     if (activeStep === 0) {
//       const newErrors = {};
//       if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
//       if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
//       if (!/^\d{10}$/.test(formData.mobileNumber)) newErrors.mobileNumber = "Invalid mobile number";
//       if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email address";
//       setErrors(newErrors);
//       if (Object.keys(newErrors).length > 0) return;
//     }
//     setActiveStep((prev) => prev + 1);
//   };

//   const handlePrev = () => {
//     setActiveStep((prev) => prev - 1);
//   };

//   useEffect(() => {
//     if (isOpen) {
//       setFormData((prev) => ({
//         ...prev,
//         profession: selectedJob?.department || "",
//       }));
//     }
//   }, [isOpen, selectedJob]);

//   useEffect(() => {
//     if (!isOpen) {
//       setFormData({
//         firstName: "",
//         lastName: "",
//         mobileNumber: "",
//         email: "",
//         profession: "",
//         resume: null,
//         coverLetter: "",
//         yearsOfExperience: "",
//       });
//       setErrors({});
//       setActiveStep(0);
//       setUploadProgress(0);
//       setCustomProfession("");
//     }
//   }, [isOpen]);

//   useLayoutEffect(() => {
//     if (scrollContainerRef.current && scrollPositionRef.current > 0) {
//       scrollContainerRef.current.scrollTop = scrollPositionRef.current;
//     }
//   }, [activeStep]);

//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }
//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, [isOpen]);

//   const renderContent = () => (
//     <>
//       <JobDetails job={selectedJob} />
//       <JobRequirements />
//       <Box>
//         <Heading as="h3" size="md" mb={6} color={textColor}>
//           Application Form
//         </Heading>
//         <FormStepper activeStep={activeStep} steps={steps} />
//         <form onSubmit={handleSubmit}>
//           <Box>
//             {activeStep === 0 && (
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <VStack spacing={6} align="stretch">
//                   <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
//                     <InputField
//                       icon={FiUser}
//                       label="First Name"
//                       name="firstName"
//                       type="text"
//                       value={formData.firstName}
//                       onChange={handleInputChange}
//                       error={errors.firstName}
//                       placeholder="John"
//                       isRequired
//                     />
//                     <InputField
//                       icon={FiUser}
//                       label="Last Name"
//                       name="lastName"
//                       type="text"
//                       value={formData.lastName}
//                       onChange={handleInputChange}
//                       error={errors.lastName}
//                       placeholder="Doe"
//                       isRequired
//                     />
//                   </SimpleGrid>
//                   <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
//                     <InputField
//                       icon={FiPhone}
//                       label="Mobile Number"
//                       name="mobileNumber"
//                       type="tel"
//                       value={formData.mobileNumber}
//                       onChange={handleInputChange}
//                       error={errors.mobileNumber}
//                       placeholder="1234567890"
//                       isRequired
//                     />
//                     <InputField
//                       icon={FiMail}
//                       label="Email"
//                       name="email"
//                       type="email"
//                       value={formData.email}
//                       onChange={handleInputChange}
//                       error={errors.email}
//                       placeholder="john@example.com"
//                       isRequired
//                     />
//                   </SimpleGrid>
//                 </VStack>
//               </motion.div>
//             )}

//             {activeStep === 1 && (
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <VStack spacing={6} align="stretch">
//                   <FormControl isInvalid={!!errors.profession} isRequired>
//                     <FormLabel
//                       htmlFor="profession"
//                       fontSize={{ base: "sm", md: "md" }}
//                       fontWeight="medium"
//                       color={useColorModeValue("gray.700", "gray.300")}
//                     >
//                       Profession
//                     </FormLabel>
//                     <InputGroup>
//                       <InputLeftElement pointerEvents="none">
//                         <Icon as={FiBriefcase} color={errors.profession ? "red.500" : "gray.400"} />
//                       </InputLeftElement>
//                       <Select
//                         id="profession"
//                         name="profession"
//                         value={formData.profession}
//                         onChange={handleInputChange}
//                         placeholder="Select your profession"
//                         pl={10}
//                         bg={useColorModeValue("white", "gray.800")}
//                         _hover={{ bg: useColorModeValue("gray.50", "gray.700") }}
//                         borderColor={errors.profession ? "red.500" : "gray.200"}
//                       >
//                         {professions.map((prof) => (
//                           <option key={prof} value={prof}>
//                             {prof}
//                           </option>
//                         ))}
//                       </Select>
//                     </InputGroup>
//                     <FormErrorMessage fontSize="xs">{errors.profession}</FormErrorMessage>
//                   </FormControl>

//                   {formData.profession === "Others (please specify)" && (
//                     <FormControl isRequired isInvalid={!!errors.profession}>
//                       <FormLabel
//                         htmlFor="customProfession"
//                         fontSize="sm"
//                         fontWeight="medium"
//                         color={useColorModeValue("gray.700", "gray.300")}
//                       >
//                         Please specify your profession
//                       </FormLabel>
//                       <Input
//                         id="customProfession"
//                         name="customProfession"
//                         value={customProfession}
//                         onChange={handleCustomProfessionChange}
//                         placeholder="Enter your profession"
//                         bg={useColorModeValue("white", "gray.800")}
//                         _hover={{ bg: useColorModeValue("gray.50", "gray.700") }}
//                         _focus={{
//                           borderColor: "orange.500",
//                           boxShadow: "0 0 0 1px orange.500",
//                         }}
//                         borderColor={errors.profession ? "red.500" : "gray.200"}
//                         fontSize="sm"
//                       />
//                       <FormErrorMessage fontSize="xs">{errors.profession}</FormErrorMessage>
//                     </FormControl>
//                   )}

//                   <FormControl isRequired isInvalid={!!errors.yearsOfExperience}>
//                     <FormLabel
//                       htmlFor="yearsOfExperience"
//                       fontSize={{ base: "sm", md: "md" }}
//                       fontWeight="medium"
//                       color={useColorModeValue("gray.700", "gray.300")}
//                     >
//                       Years of Experience
//                     </FormLabel>
//                     <InputGroup>
//                       <InputLeftElement pointerEvents="none">
//                         <Icon as={FiCalendar} color="gray.400" />
//                       </InputLeftElement>
//                       <Input
//                         id="yearsOfExperience"
//                         name="yearsOfExperience"
//                         type="number"
//                         min="0"
//                         max="50"
//                         value={formData.yearsOfExperience || ""}
//                         onChange={(e) => {
//                           if (scrollContainerRef.current) {
//                             scrollPositionRef.current = scrollContainerRef.current.scrollTop;
//                           }
//                           setFormData((prev) => ({
//                             ...prev,
//                             yearsOfExperience: e.target.value ? Number(e.target.value) : "",
//                           }));
//                           setErrors((prev) => ({ ...prev, yearsOfExperience: "" }));
//                         }}
//                         placeholder="e.g. 5"
//                         bg={useColorModeValue("white", "gray.800")}
//                         _hover={{ bg: useColorModeValue("gray.50", "gray.700") }}
//                         _focus={{
//                           borderColor: "orange.500",
//                           boxShadow: "0 0 0 1px orange.500",
//                         }}
//                         borderColor={errors.yearsOfExperience ? "red.500" : "gray.200"}
//                       />
//                     </InputGroup>
//                     <FormErrorMessage fontSize="xs">{errors.yearsOfExperience}</FormErrorMessage>
//                   </FormControl>

//                   <FileInput
//                     icon={FiFile}
//                     label="Upload Resume"
//                     name="resume"
//                     onChange={handleFileChange}
//                     error={errors.resume}
//                     isRequired
//                     value={formData.resume}
//                   />

//                   <Box
//                     p={4}
//                     bg={useColorModeValue("blue.50", "blue.900")}
//                     borderRadius="md"
//                     borderLeft="4px solid"
//                     borderColor={useColorModeValue("blue.400", "blue.500")}
//                   >
//                     <HStack spacing={3} align="flex-start">
//                       <Icon as={FiInfo} color={useColorModeValue("blue.500", "blue.300")} mt={1} />
//                       <Text fontSize="sm">
//                         Your resume should highlight your relevant experience, skills, and achievements. Make sure
//                         it's up-to-date and tailored to the position you're applying for.
//                       </Text>
//                     </HStack>
//                   </Box>
//                 </VStack>
//               </motion.div>
//             )}

//             {activeStep === 2 && (
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <VStack spacing={6} align="stretch">
//                   <FormControl isInvalid={!!errors.coverLetter} isRequired>
//                     <FormLabel
//                       htmlFor="coverLetter"
//                       fontSize={{ base: "sm", md: "md" }}
//                       fontWeight="medium"
//                       color={useColorModeValue("gray.700", "gray.300")}
//                     >
//                       Cover Letter
//                     </FormLabel>
//                     <Textarea
//                       id="coverLetter"
//                       name="coverLetter"
//                       value={formData.coverLetter}
//                       onChange={handleInputChange}
//                       placeholder="Tell us why you're a great fit for this position..."
//                       rows={8}
//                       bg={useColorModeValue("white", "gray.800")}
//                       _hover={{ bg: useColorModeValue("gray.50", "gray.700") }}
//                       _focus={{
//                         borderColor: "orange.900",
//                         boxShadow: "0 0 0 1px orange.500",
//                         bg: useColorModeValue("white", "gray.800"),
//                       }}
//                       borderColor={errors.coverLetter ? "red.500" : "gray.200"}
//                       fontSize={{ base: "sm", md: "md" }}
//                     />
//                     <FormErrorMessage fontSize="xs">{errors.coverLetter}</FormErrorMessage>
//                   </FormControl>

//                   <Box
//                     p={4}
//                     bg={useColorModeValue("green.50", "green.900")}
//                     borderRadius="md"
//                     borderLeft="4px solid"
//                     borderColor={useColorModeValue("green.400", "green.500")}
//                   >
//                     <VStack align="flex-start" spacing={2}>
//                       <HStack spacing={3}>
//                         <Icon as={FiInfo} color={useColorModeValue("green.500", "green.300")} />
//                         <Text fontWeight="medium" fontSize="sm">
//                           Tips for a great cover letter:
//                         </Text>
//                       </HStack>
//                       <List spacing={1} pl={8} fontSize="sm">
//                         <ListItem>
//                           <ListIcon as={FiCheck} color={useColorModeValue("green.500", "green.300")} />
//                           Explain why you're interested in this position
//                         </ListItem>
//                         <ListItem>
//                           <ListIcon as={FiCheck} color={useColorModeValue("green.500", "green.300")} />
//                           Highlight your most relevant skills and experiences
//                         </ListItem>
//                         <ListItem>
//                           <ListIcon as={FiCheck} color={useColorModeValue("green.500", "green.300")} />
//                           Show how you can add value to the company
//                         </ListItem>
//                       </List>
//                     </VStack>
//                   </Box>
//                 </VStack>
//               </motion.div>
//             )}

//             {isLoading && (
//               <Box mt={6}>
//                 <Text mb={2} fontSize="sm">
//                   Uploading: {uploadProgress}%
//                 </Text>
//                 <Progress
//                   value={uploadProgress}
//                   size="sm"
//                   colorScheme="teal"
//                   borderRadius="full"
//                   hasStripe
//                   isAnimated
//                 />
//               </Box>
//             )}
//           </Box>
//         </form>
//       </Box>
//     </>
//   );

//   const FormFooter = () => (
//     <Flex
//       justify="space-between"
//       pt={4}
//       pb={4}
//       px={{ base: 4, md: 6 }}
//       borderTop="1px solid"
//       borderColor={useColorModeValue("gray.200", "gray.700")}
//       bg={useColorModeValue("gray.50", "gray.900")}
//     >
//       <Button
//         onClick={handlePrev}
//         isDisabled={activeStep === 0}
//         leftIcon={<FiArrowLeft />}
//         variant="outline"
//         size={{ base: "sm", md: "md" }}
//         fontWeight="medium"
//         type="button"
//       >
//         Previous
//       </Button>
//       {activeStep < steps.length - 1 ? (
//         <Button
//           onClick={handleNext}
//           rightIcon={<FiArrowRight />}
//           color="white"
//           bg="teal.900"
//           size={{ base: "sm", md: "md" }}
//           fontWeight="medium"
//           type="button"
//         >
//           Next Step
//         </Button>
//       ) : (
//         <Button
//           onClick={handleSubmit}
//           color="white"
//           bg="teal.900"
//           isLoading={isLoading}
//           loadingText="Submitting"
//           size={{ base: "sm", md: "md" }}
//           fontWeight="medium"
//         >
//           Submit Application
//         </Button>
//       )}
//     </Flex>
//   );

//   if (isMobile) {
//     return (
//       <Drawer
//         isOpen={isOpen}
//         onClose={onClose}
//         placement="right"
//         size="full"
//         trapFocus={false}
//         autoFocus={false}
//       >
//         <DrawerOverlay />
//         <DrawerContent>
//           <DrawerHeader
//             bg={headerBg}
//             color="white"
//             py={4}
//             px={4}
//             position="sticky"
//             top={0}
//             zIndex={10}
//             boxShadow="md"
//           >
//             <Flex justify="space-between" align="center">
//               <VStack align="flex-start" spacing={0}>
//                 <Heading size="md" noOfLines={1}>
//                   Apply for {selectedJob?.title}
//                 </Heading>
//                 <Text fontSize="xs" opacity={0.8}>
//                   Complete the form below to apply
//                 </Text>
//               </VStack>
//               <DrawerCloseButton position="static" color="white" />
//             </Flex>
//           </DrawerHeader>
//           <DrawerBody
//             p={4}
//             overflowY="auto"
//             ref={scrollContainerRef}
//           >
//             {renderContent()}
//           </DrawerBody>
//           <DrawerFooter
//             p={0}
//             position="sticky"
//             bottom={0}
//             zIndex={10}
//             boxShadow="0 -2px 10px rgba(0,0,0,0.05)"
//           >
//             <FormFooter />
//           </DrawerFooter>
//         </DrawerContent>
//       </Drawer>
//     );
//   }

//   return (
//     <Modal
//       isOpen={isOpen}
//       onClose={onClose}
//       size={{ base: "full", md: "4xl" }}
//       scrollBehavior="inside"
//       trapFocus={false}
//       autoFocus={false}
//     >
//       <ModalOverlay />
//       <ModalContent
//         maxW={{ base: "100%", md: "900px" }}
//         maxH={{ base: "100vh", md: "90vh" }}
//         my={{ base: 0, md: "auto" }}
//         borderRadius={{ base: 0, md: "md" }}
//       >
//         <ModalHeader
//           bg={headerBg}
//           color="white"
//           py={4}
//           px={6}
//           borderTopRadius={{ base: 0, md: "md" }}
//           position="sticky"
//           top={0}
//           zIndex={10}
//           boxShadow="md"
//         >
//           <Flex justify="space-between" align="center">
//             <VStack align="flex-start" spacing={0}>
//               <Heading size="md" noOfLines={1}>
//                 Apply for {selectedJob?.title}
//               </Heading>
//               <Text fontSize="xs" opacity={0.8}>
//                 Complete the form below to apply
//               </Text>
//             </VStack>
//             <ModalCloseButton position="static" color="white" />
//           </Flex>
//         </ModalHeader>

//         <ModalBody
//           p={6}
//           maxH="calc(90vh - 140px)"
//           overflowY="auto"
//           ref={scrollContainerRef}
//         >
//           {renderContent()}
//         </ModalBody>

//         <ModalFooter
//           p={0}
//           position="sticky"
//           bottom={0}
//           zIndex={10}
//           boxShadow="0 -2px 10px rgba(0,0,0,0.05)"
//           borderBottomRadius={{ base: 0, md: "md" }}
//         >
//           <FormFooter />
//         </ModalFooter>
//       </ModalContent>
//     </Modal>
//   );
// };

// export default ApplicationForm;

// import { useState, useRef, useEffect, useLayoutEffect } from "react";
// import { motion } from "framer-motion";
// import {
//   Box,
//   Button,
//   Flex,
//   FormControl,
//   FormLabel,
//   Heading,
//   Input,
//   Select,
//   Text,
//   Textarea,
//   VStack,
//   HStack,
//   useToast,
//   Progress,
//   Icon,
//   SimpleGrid,
//   useColorModeValue,
//   FormErrorMessage,
//   Stepper,
//   Step,
//   StepIndicator,
//   StepStatus,
//   StepIcon,
//   StepNumber,
//   StepTitle,
//   StepDescription,
//   StepSeparator,
//   useSteps,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalBody,
//   ModalFooter,
//   ModalCloseButton,
//   Drawer,
//   DrawerBody,
//   DrawerFooter,
//   DrawerHeader,
//   DrawerOverlay,
//   DrawerContent,
//   DrawerCloseButton,
//   useBreakpointValue,
//   Accordion,
//   AccordionItem,
//   AccordionButton,
//   AccordionPanel,
//   AccordionIcon,
//   List,
//   ListItem,
//   ListIcon,
//   InputGroup,
//   InputLeftElement,
//   Badge,
// } from "@chakra-ui/react";
// import {
//   FiUser,
//   FiPhone,
//   FiMail,
//   FiBriefcase,
//   FiFile,
//   FiCheck,
//   FiArrowRight,
//   FiArrowLeft,
//   FiInfo,
//   FiMapPin,
//   FiCalendar,
//   FiClock,
//   FiDollarSign,
//   FiStar,
// } from "react-icons/fi";

// // ===========================
// // Reusable Components
// // ===========================

// const InputField = ({ icon, label, name, type, value, onChange, error, placeholder, isRequired = false }) => {
//   const focusBorderColor = useColorModeValue("orange.500", "orange.300");
//   const errorBorderColor = useColorModeValue("red.500", "red.300");
//   const bgColor = useColorModeValue("white", "gray.800");
//   const hoverBg = useColorModeValue("gray.50", "gray.700");
//   return (
//     <FormControl isInvalid={!!error} isRequired={isRequired}>
//       <FormLabel
//         htmlFor={name}
//         fontSize={{ base: "sm", md: "md" }}
//         fontWeight="medium"
//         color={useColorModeValue("gray.700", "gray.300")}
//         mb={2}
//       >
//         {label}
//       </FormLabel>
//       <InputGroup>
//         <InputLeftElement pointerEvents="none">
//           <Icon as={icon} color={error ? errorBorderColor : "gray.400"} />
//         </InputLeftElement>
//         <Input
//           type={type}
//           name={name}
//           id={name}
//           value={value}
//           onChange={onChange}
//           placeholder={placeholder}
//           bg={bgColor}
//           _hover={{ bg: hoverBg, borderColor: "gray.300" }}
//           _focus={{
//             borderColor: focusBorderColor,
//             boxShadow: `0 0 0 1px ${focusBorderColor}`,
//             bg: bgColor,
//           }}
//           borderColor={error ? errorBorderColor : "gray.200"}
//           transition="all 0.3s ease"
//           fontSize={{ base: "sm", md: "md" }}
//         />
//       </InputGroup>
//       <FormErrorMessage fontSize="xs" mt={1}>
//         {error}
//       </FormErrorMessage>
//     </FormControl>
//   );
// };

// const FileInput = ({ icon, label, name, onChange, error, isRequired = false, value }) => {
//   const fileInputRef = useRef(null);
//   const handleButtonClick = () => fileInputRef.current?.click();
//   const focusBorderColor = useColorModeValue("orange.500", "orange.300");
//   const errorBorderColor = useColorModeValue("red.500", "red.300");
//   const bgColor = useColorModeValue("white", "gray.800");
//   const hoverBg = useColorModeValue("gray.50", "gray.700");
//   return (
//     <FormControl isInvalid={!!error} isRequired={isRequired}>
//       <FormLabel
//         htmlFor={name}
//         fontSize={{ base: "sm", md: "md" }}
//         fontWeight="medium"
//         color={useColorModeValue("gray.700", "gray.300")}
//         mb={2}
//       >
//         {label}
//       </FormLabel>
//       <Box position="relative">
//         <Input
//           type="file"
//           ref={fileInputRef}
//           id={name}
//           name={name}
//           onChange={onChange}
//           accept=".pdf,.doc,.docx"
//           display="none"
//         />
//         <Flex
//           border="1px solid"
//           borderColor={error ? errorBorderColor : "gray.200"}
//           borderRadius="md"
//           bg={bgColor}
//           _hover={{ bg: hoverBg, borderColor: "gray.300" }}
//           transition="all 0.3s ease"
//           overflow="hidden"
//         >
//           <Flex align="center" justify="center" bg={useColorModeValue("gray.100", "gray.700")} p={3}>
//             <Icon as={icon} color={error ? errorBorderColor : "gray.500"} />
//           </Flex>
//           <Box flex="1" p={2} pl={3} overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap">
//             {value ? value.name : "No file selected"}
//           </Box>
//           <Button onClick={handleButtonClick} size="sm" colorScheme="orange" m={1} px={4}>
//             Browse
//           </Button>
//         </Flex>
//       </Box>
//       <FormErrorMessage fontSize="xs" mt={1}>
//         {error}
//       </FormErrorMessage>
//       <Text fontSize="xs" color="gray.500" mt={1}>
//         Accepted formats: PDF, DOC, DOCX. Max size: 5MB
//       </Text>
//     </FormControl>
//   );
// };

// const JobDetails = ({ job }) => {
//   const bgColor = useColorModeValue("orange.50", "gray.700");
//   const borderColor = useColorModeValue("orange.200", "gray.600");
//   return (
//     <Box bg={bgColor} p={5} borderRadius="md" borderLeft="4px solid" borderColor={borderColor} boxShadow="sm">
//       <Heading size="md" mb={4} color={useColorModeValue("gray.800", "white")}>
//         {job?.title}
//       </Heading>
//       <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
//         <HStack spacing={2}>
//           <Icon as={FiBriefcase} color="gray.500" />
//           <Text fontWeight="medium">Department:</Text>
//           <Text>{job?.department}</Text>
//         </HStack>
//         <HStack spacing={2}>
//           <Icon as={FiMapPin} color="gray.500" />
//           <Text fontWeight="medium">Location:</Text>
//           <Text>{job?.location}</Text>
//         </HStack>
//         <HStack spacing={2}>
//           <Icon as={FiClock} color="gray.500" />
//           <Text fontWeight="medium">Type:</Text>
//           <Badge colorScheme="orange">{job?.type}</Badge>
//         </HStack>
//       </SimpleGrid>
//       <HStack mt={4} spacing={4}>
//         <HStack>
//           <Icon as={FiCalendar} color="gray.500" />
//           <Text fontSize="sm">Apply by: June 30, 2023</Text>
//         </HStack>
//         <HStack>
//           <Icon as={FiDollarSign} color="gray.500" />
//           <Text fontSize="sm">Competitive salary</Text>
//         </HStack>
//         <HStack>
//           <Icon as={FiStar} color="gray.500" />
//           <Text fontSize="sm">5+ years experience</Text>
//         </HStack>
//       </HStack>
//     </Box>
//   );
// };

// const JobRequirements = () => {
//   const borderColor = useColorModeValue("teal.500", "teal.300");
//   return (
//     <Accordion allowToggle>
//       <AccordionItem border="none" boxShadow="sm" borderRadius="md" mb={4}>
//         <h2>
//           <AccordionButton
//             py={4}
//             bg={useColorModeValue("gray.50", "gray.700")}
//             _hover={{ bg: useColorModeValue("gray.100", "gray.600") }}
//           >
//             <Box flex="1" textAlign="left" fontWeight="bold">
//               Job Description & Requirements
//             </Box>
//             <AccordionIcon />
//           </AccordionButton>
//         </h2>
//         <AccordionPanel
//           pb={4}
//           pt={4}
//           borderLeft="1px solid"
//           borderRight="1px solid"
//           borderBottom="1px solid"
//           borderColor="gray.200"
//           borderBottomRadius="md"
//         >
//           <Text mb={4}>
//             We are seeking a talented and motivated professional to join our team. In this role, you will be responsible
//             for developing innovative solutions and collaborating with cross-functional teams to deliver exceptional
//             results.
//           </Text>
//           <Text fontWeight="bold" mb={3}>
//             Key Responsibilities:
//           </Text>
//           <List spacing={2} mb={4}>
//             <ListItem>
//               <ListIcon as={FiCheck} color={borderColor} />
//               Design and implement new features and functionality
//             </ListItem>
//             <ListItem>
//               <ListIcon as={FiCheck} color={borderColor} />
//               Collaborate with product managers and designers
//             </ListItem>
//             <ListItem>
//               <ListIcon as={FiCheck} color={borderColor} />
//               Write clean, maintainable, and efficient code
//             </ListItem>
//             <ListItem>
//               <ListIcon as={FiCheck} color={borderColor} />
//               Participate in code reviews and provide constructive feedback
//             </ListItem>
//           </List>
//           <Text fontWeight="bold" mb={3}>
//             Requirements:
//           </Text>
//           <List spacing={2}>
//             <ListItem>
//               <ListIcon as={FiCheck} color={borderColor} />
//               3+ years of experience in relevant field
//             </ListItem>
//             <ListItem>
//               <ListIcon as={FiCheck} color={borderColor} />
//               Strong knowledge of industry best practices
//             </ListItem>
//             <ListItem>
//               <ListIcon as={FiCheck} color={borderColor} />
//               Excellent communication and teamwork skills
//             </ListItem>
//             <ListItem>
//               <ListIcon as={FiCheck} color={borderColor} />
//               Bachelor's degree in a related field (or equivalent experience)
//             </ListItem>
//           </List>
//         </AccordionPanel>
//       </AccordionItem>
//     </Accordion>
//   );
// };

// const FormStepper = ({ activeStep, steps }) => {
//   const isMobile = useBreakpointValue({ base: true, md: false });
//   const stepperColor = useColorModeValue("orange.500", "orange.300");
//   return (
//     <Box mb={8}>
//       {isMobile ? (
//         <Flex justify="space-between" align="center" mb={4}>
//           {steps.map((step, index) => (
//             <VStack key={index} spacing={1} flex="1" position="relative">
//               <Box
//                 w="10px"
//                 h="10px"
//                 borderRadius="full"
//                 bg={index <= activeStep ? stepperColor : "gray.200"}
//                 zIndex={1}
//               />
//               {index < steps.length - 1 && (
//                 <Box
//                   position="absolute"
//                   h="2px"
//                   bg={index < activeStep ? stepperColor : "gray.200"}
//                   top="5px"
//                   right="-50%"
//                   w="100%"
//                 />
//               )}
//               <Text
//                 fontSize="xs"
//                 fontWeight={index === activeStep ? "bold" : "normal"}
//                 color={index === activeStep ? stepperColor : "gray.500"}
//                 textAlign="center"
//               >
//                 {step.title}
//               </Text>
//             </VStack>
//           ))}
//         </Flex>
//       ) : (
//         <Stepper index={activeStep} size="lg">
//           {steps.map((step, index) => (
//             <Step key={index}>
//               <StepIndicator>
//                 <StepStatus complete={<StepIcon />} incomplete={<StepNumber />} active={<StepNumber />} />
//               </StepIndicator>
//               <Box flexShrink="0">
//                 <StepTitle>{step.title}</StepTitle>
//                 <StepDescription>{step.description}</StepDescription>
//               </Box>
//               <StepSeparator />
//             </Step>
//           ))}
//         </Stepper>
//       )}
//     </Box>
//   );
// };

// // ===========================
// // Main ApplicationForm
// // ===========================
// const ApplicationForm = ({ isOpen, onClose, selectedJob, onSubmit }) => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     mobileNumber: "",
//     email: "",
//     profession: "",
//     resume: null,
//     coverLetter: "",
//     yearsOfExperience: "",
//   });
//   const [errors, setErrors] = useState({});
//   const [isLoading, setIsLoading] = useState(false);
//   const [uploadProgress, setUploadProgress] = useState(0);
//   const [customProfession, setCustomProfession] = useState("");
//   const toast = useToast();
//   const isMobile = useBreakpointValue({ base: true, md: false });
//   const headerBg = useColorModeValue("teal.900", "teal.900");
//   const textColor = useColorModeValue("gray.800", "white");

//   const scrollContainerRef = useRef(null);
//   const scrollPositionRef = useRef(0);

//   const { activeStep, setActiveStep } = useSteps({
//     index: 0,
//     count: 3,
//   });

//   const steps = [
//     { title: "Personal Info", description: "Your basic details" },
//     { title: "Professional Info", description: "Your work experience" },
//     { title: "Additional Info", description: "Extra details" },
//   ];

//   const professions = [
//     "Software Engineer",
//     "Data Scientist",
//     "Product Manager",
//     "UX Designer",
//     "Marketing Specialist",
//     "Customer Success Manager",
//     "IT Mentor",
//     "Non-IT Mentor",
//     "Others (please specify)",
//   ];

//   const handleInputChange = (e) => {
//     if (scrollContainerRef.current) {
//       scrollPositionRef.current = scrollContainerRef.current.scrollTop;
//     }
//     const { name, value } = e.target;

//     if (name === "profession") {
//       setFormData((prev) => ({ ...prev, profession: value }));
//       setErrors((prev) => ({ ...prev, profession: "" }));
//       if (value !== "Others (please specify)") {
//         setCustomProfession("");
//       }
//     } else {
//       setFormData((prev) => ({ ...prev, [name]: value }));
//       setErrors((prev) => ({ ...prev, [name]: "" }));
//     }
//   };

//   const handleCustomProfessionChange = (e) => {
//     const value = e.target.value;
//     setCustomProfession(value);
//     setFormData((prev) => ({ ...prev, profession: value }));
//     setErrors((prev) => ({ ...prev, profession: "" }));
//   };

//   const handleFileChange = (e) => {
//     if (scrollContainerRef.current) {
//       scrollPositionRef.current = scrollContainerRef.current.scrollTop;
//     }
//     const file = e.target.files[0];
//     if (file && file.size <= 5 * 1024 * 1024) {
//       setFormData((prev) => ({ ...prev, resume: file }));
//       setErrors((prev) => ({ ...prev, resume: "" }));
//     } else {
//       setErrors((prev) => ({ ...prev, resume: "File size should be less than 5MB" }));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Client-side validation (except coverLetter)
//     const newErrors = {};
//     if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
//     if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
//     if (!/^\d{10}$/.test(formData.mobileNumber)) newErrors.mobileNumber = "Invalid mobile number";
//     if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email address";
//     if (!formData.profession) newErrors.profession = "Please select or enter a profession";
//     if (!formData.resume) newErrors.resume = "Please upload your resume";
//     if (!formData.yearsOfExperience && formData.yearsOfExperience !== 0)
//       newErrors.yearsOfExperience = "Years of experience is required";
//     else if (formData.yearsOfExperience < 0 || formData.yearsOfExperience > 50)
//       newErrors.yearsOfExperience = "Please enter a valid number between 0 and 50";

//     setErrors(newErrors);
//     if (Object.keys(newErrors).length > 0) {
//       toast({
//         title: "Form has errors",
//         description: "Please correct the errors in the form.",
//         status: "error",
//         duration: 5000,
//         isClosable: true,
//         position: "top",
//       });
//       return;
//     }

//     setIsLoading(true);

//     const formDataToSend = new FormData();

//     // Append resume
//     if (formData.resume) {
//       formDataToSend.append("resume", formData.resume);
//     } else {
//       toast({
//         title: "Missing Resume",
//         description: "Please upload a resume file.",
//         status: "error",
//         duration: 5000,
//         isClosable: true,
//       });
//       setIsLoading(false);
//       return;
//     }

//     // Prepare content object (match backend field names)
//     const content = {
//       firstName: formData.firstName,
//       lastName: formData.lastName,
//       mobileNumber: formData.mobileNumber,
//       mailId: formData.email,
//       profession: formData.profession,
//       experience: formData.yearsOfExperience,
//       message: formData.coverLetter || "", // Optional
//       jobTitle: selectedJob?.title || "Not Specified",
//       // Add other fields if needed in future
//     };

//     const jsonContent = new Blob([JSON.stringify(content)], {
//       type: "application/json",
//     });
//     formDataToSend.append("content", jsonContent);

//     try {
//       const response = await fetch(
//         "https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1/enrollNow",
//         {
//           method: "POST",
//           body: formDataToSend,
//         }
//       );

//       const result = await response.json();

//       if (response.ok) {
//         toast({
//           title: "Application submitted!",
//           description: "We'll be in touch soon.",
//           status: "success",
//           duration: 5000,
//           isClosable: true,
//           position: "top",
//         });
//         // Optional: notify parent
//         onSubmit?.({
//           ...formData,
//           jobTitle: selectedJob?.title,
//         });
//         onClose();
//       } else {
//         throw new Error(result.message || "Submission failed");
//       }
//     } catch (error) {
//       console.error("Submission error:", error);
//       toast({
//         title: "Submission failed",
//         description: error.message || "Something went wrong",
//         status: "error",
//         duration: 5000,
//         isClosable: true,
//         position: "top",
//       });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleNext = () => {
//     if (activeStep === 0) {
//       const newErrors = {};
//       if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
//       if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
//       if (!/^\d{10}$/.test(formData.mobileNumber)) newErrors.mobileNumber = "Invalid mobile number";
//       if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email address";
//       setErrors(newErrors);
//       if (Object.keys(newErrors).length > 0) return;
//     }
//     setActiveStep((prev) => prev + 1);
//   };

//   const handlePrev = () => {
//     setActiveStep((prev) => prev - 1);
//   };

//   useEffect(() => {
//     if (isOpen) {
//       setFormData((prev) => ({
//         ...prev,
//         profession: selectedJob?.department || "",
//       }));
//     }
//   }, [isOpen, selectedJob]);

//   useEffect(() => {
//     if (!isOpen) {
//       setFormData({
//         firstName: "",
//         lastName: "",
//         mobileNumber: "",
//         email: "",
//         profession: "",
//         resume: null,
//         coverLetter: "",
//         yearsOfExperience: "",
//       });
//       setErrors({});
//       setActiveStep(0);
//       setUploadProgress(0);
//       setCustomProfession("");
//     }
//   }, [isOpen]);

//   useLayoutEffect(() => {
//     if (scrollContainerRef.current && scrollPositionRef.current > 0) {
//       scrollContainerRef.current.scrollTop = scrollPositionRef.current;
//     }
//   }, [activeStep]);

//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }
//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, [isOpen]);

//   const renderContent = () => (
//     <>
//       <JobDetails job={selectedJob} />
//       <JobRequirements />
//       <Box>
//         <Heading as="h3" size="md" mb={6} color={textColor}>
//           Application Form
//         </Heading>
//         <FormStepper activeStep={activeStep} steps={steps} />
//         <form onSubmit={handleSubmit}>
//           <Box>
//             {activeStep === 0 && (
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <VStack spacing={6} align="stretch">
//                   <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
//                     <InputField
//                       icon={FiUser}
//                       label="First Name"
//                       name="firstName"
//                       type="text"
//                       value={formData.firstName}
//                       onChange={handleInputChange}
//                       error={errors.firstName}
//                       placeholder="John"
//                       isRequired
//                     />
//                     <InputField
//                       icon={FiUser}
//                       label="Last Name"
//                       name="lastName"
//                       type="text"
//                       value={formData.lastName}
//                       onChange={handleInputChange}
//                       error={errors.lastName}
//                       placeholder="Doe"
//                       isRequired
//                     />
//                   </SimpleGrid>
//                   <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
//                     <InputField
//                       icon={FiPhone}
//                       label="Mobile Number"
//                       name="mobileNumber"
//                       type="tel"
//                       value={formData.mobileNumber}
//                       onChange={handleInputChange}
//                       error={errors.mobileNumber}
//                       placeholder="1234567890"
//                       isRequired
//                     />
//                     <InputField
//                       icon={FiMail}
//                       label="Email"
//                       name="email"
//                       type="email"
//                       value={formData.email}
//                       onChange={handleInputChange}
//                       error={errors.email}
//                       placeholder="john@example.com"
//                       isRequired
//                     />
//                   </SimpleGrid>
//                 </VStack>
//               </motion.div>
//             )}

//             {activeStep === 1 && (
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <VStack spacing={6} align="stretch">
//                   <FormControl isInvalid={!!errors.profession} isRequired>
//                     <FormLabel
//                       htmlFor="profession"
//                       fontSize={{ base: "sm", md: "md" }}
//                       fontWeight="medium"
//                       color={useColorModeValue("gray.700", "gray.300")}
//                     >
//                       Profession
//                     </FormLabel>
//                     <InputGroup>
//                       <InputLeftElement pointerEvents="none">
//                         <Icon as={FiBriefcase} color={errors.profession ? "red.500" : "gray.400"} />
//                       </InputLeftElement>
//                       <Select
//                         id="profession"
//                         name="profession"
//                         value={formData.profession}
//                         onChange={handleInputChange}
//                         placeholder="Select your profession"
//                         pl={10}
//                         bg={useColorModeValue("white", "gray.800")}
//                         _hover={{ bg: useColorModeValue("gray.50", "gray.700") }}
//                         borderColor={errors.profession ? "red.500" : "gray.200"}
//                       >
//                         {professions.map((prof) => (
//                           <option key={prof} value={prof}>
//                             {prof}
//                           </option>
//                         ))}
//                       </Select>
//                     </InputGroup>
//                     <FormErrorMessage fontSize="xs">{errors.profession}</FormErrorMessage>
//                   </FormControl>

//                   {formData.profession === "Others (please specify)" && (
//                     <FormControl isRequired isInvalid={!!errors.profession}>
//                       <FormLabel
//                         htmlFor="customProfession"
//                         fontSize="sm"
//                         fontWeight="medium"
//                         color={useColorModeValue("gray.700", "gray.300")}
//                       >
//                         Please specify your profession
//                       </FormLabel>
//                       <Input
//                         id="customProfession"
//                         name="customProfession"
//                         value={customProfession}
//                         onChange={handleCustomProfessionChange}
//                         placeholder="Enter your profession"
//                         bg={useColorModeValue("white", "gray.800")}
//                         _hover={{ bg: useColorModeValue("gray.50", "gray.700") }}
//                         _focus={{
//                           borderColor: "orange.500",
//                           boxShadow: "0 0 0 1px orange.500",
//                         }}
//                         borderColor={errors.profession ? "red.500" : "gray.200"}
//                         fontSize="sm"
//                       />
//                       <FormErrorMessage fontSize="xs">{errors.profession}</FormErrorMessage>
//                     </FormControl>
//                   )}

//                   <FormControl isRequired isInvalid={!!errors.yearsOfExperience}>
//                     <FormLabel
//                       htmlFor="yearsOfExperience"
//                       fontSize={{ base: "sm", md: "md" }}
//                       fontWeight="medium"
//                       color={useColorModeValue("gray.700", "gray.300")}
//                     >
//                       Years of Experience
//                     </FormLabel>
//                     <InputGroup>
//                       <InputLeftElement pointerEvents="none">
//                         <Icon as={FiCalendar} color="gray.400" />
//                       </InputLeftElement>
//                       <Input
//                         id="yearsOfExperience"
//                         name="yearsOfExperience"
//                         type="number"
//                         min="0"
//                         max="50"
//                         value={formData.yearsOfExperience || ""}
//                         onChange={(e) => {
//                           if (scrollContainerRef.current) {
//                             scrollPositionRef.current = scrollContainerRef.current.scrollTop;
//                           }
//                           setFormData((prev) => ({
//                             ...prev,
//                             yearsOfExperience: e.target.value ? Number(e.target.value) : "",
//                           }));
//                           setErrors((prev) => ({ ...prev, yearsOfExperience: "" }));
//                         }}
//                         placeholder="e.g. 5"
//                         bg={useColorModeValue("white", "gray.800")}
//                         _hover={{ bg: useColorModeValue("gray.50", "gray.700") }}
//                         _focus={{
//                           borderColor: "orange.500",
//                           boxShadow: "0 0 0 1px orange.500",
//                         }}
//                         borderColor={errors.yearsOfExperience ? "red.500" : "gray.200"}
//                       />
//                     </InputGroup>
//                     <FormErrorMessage fontSize="xs">{errors.yearsOfExperience}</FormErrorMessage>
//                   </FormControl>

//                   <FileInput
//                     icon={FiFile}
//                     label="Upload Resume"
//                     name="resume"
//                     onChange={handleFileChange}
//                     error={errors.resume}
//                     isRequired
//                     value={formData.resume}
//                   />

//                   <Box
//                     p={4}
//                     bg={useColorModeValue("blue.50", "blue.900")}
//                     borderRadius="md"
//                     borderLeft="4px solid"
//                     borderColor={useColorModeValue("blue.400", "blue.500")}
//                   >
//                     <HStack spacing={3} align="flex-start">
//                       <Icon as={FiInfo} color={useColorModeValue("blue.500", "blue.300")} mt={1} />
//                       <Text fontSize="sm">
//                         Your resume should highlight your relevant experience, skills, and achievements. Make sure
//                         it's up-to-date and tailored to the position you're applying for.
//                       </Text>
//                     </HStack>
//                   </Box>
//                 </VStack>
//               </motion.div>
//             )}

//             {activeStep === 2 && (
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <VStack spacing={6} align="stretch">
//                   <FormControl isInvalid={!!errors.coverLetter}>
//                     <FormLabel
//                       htmlFor="coverLetter"
//                       fontSize={{ base: "sm", md: "md" }}
//                       fontWeight="medium"
//                       color={useColorModeValue("gray.700", "gray.300")}
//                     >
//                       Cover Letter (Optional)
//                     </FormLabel>
//                     <Textarea
//                       id="coverLetter"
//                       name="coverLetter"
//                       value={formData.coverLetter}
//                       onChange={handleInputChange}
//                       placeholder="Tell us why you're a great fit for this position..."
//                       rows={8}
//                       bg={useColorModeValue("white", "gray.800")}
//                       _hover={{ bg: useColorModeValue("gray.50", "gray.700") }}
//                       _focus={{
//                         borderColor: "orange.900",
//                         boxShadow: "0 0 0 1px orange.500",
//                         bg: useColorModeValue("white", "gray.800"),
//                       }}
//                       borderColor={errors.coverLetter ? "red.500" : "gray.200"}
//                       fontSize={{ base: "sm", md: "md" }}
//                     />
//                     <FormErrorMessage fontSize="xs">{errors.coverLetter}</FormErrorMessage>
//                   </FormControl>

//                   <Box
//                     p={4}
//                     bg={useColorModeValue("green.50", "green.900")}
//                     borderRadius="md"
//                     borderLeft="4px solid"
//                     borderColor={useColorModeValue("green.400", "green.500")}
//                   >
//                     <VStack align="flex-start" spacing={2}>
//                       <HStack spacing={3}>
//                         <Icon as={FiInfo} color={useColorModeValue("green.500", "green.300")} />
//                         <Text fontWeight="medium" fontSize="sm">
//                           Tips for a great cover letter:
//                         </Text>
//                       </HStack>
//                       <List spacing={1} pl={8} fontSize="sm">
//                         <ListItem>
//                           <ListIcon as={FiCheck} color={useColorModeValue("green.500", "green.300")} />
//                           Explain why you're interested in this position
//                         </ListItem>
//                         <ListItem>
//                           <ListIcon as={FiCheck} color={useColorModeValue("green.500", "green.300")} />
//                           Highlight your most relevant skills and experiences
//                         </ListItem>
//                         <ListItem>
//                           <ListIcon as={FiCheck} color={useColorModeValue("green.500", "green.300")} />
//                           Show how you can add value to the company
//                         </ListItem>
//                       </List>
//                     </VStack>
//                   </Box>
//                 </VStack>
//               </motion.div>
//             )}
//           </Box>
//         </form>
//       </Box>
//     </>
//   );

//   const FormFooter = () => (
//     <Flex
//       justify="space-between"
//       pt={4}
//       pb={4}
//       px={{ base: 4, md: 6 }}
//       borderTop="1px solid"
//       borderColor={useColorModeValue("gray.200", "gray.700")}
//       bg={useColorModeValue("gray.50", "gray.900")}
//     >
//       <Button
//         onClick={handlePrev}
//         isDisabled={activeStep === 0}
//         leftIcon={<FiArrowLeft />}
//         variant="outline"
//         size={{ base: "sm", md: "md" }}
//         fontWeight="medium"
//         type="button"
//       >
//         Previous
//       </Button>
//       {activeStep < steps.length - 1 ? (
//         <Button
//           onClick={handleNext}
//           rightIcon={<FiArrowRight />}
//           color="white"
//           bg="teal.900"
//           size={{ base: "sm", md: "md" }}
//           fontWeight="medium"
//           type="button"
//         >
//           Next Step
//         </Button>
//       ) : (
//         <Button
//           onClick={handleSubmit}
//           color="white"
//           bg="teal.900"
//           isLoading={isLoading}
//           loadingText="Submitting"
//           size={{ base: "sm", md: "md" }}
//           fontWeight="medium"
//         >
//           Submit Application
//         </Button>
//       )}
//     </Flex>
//   );

//   if (isMobile) {
//     return (
//       <Drawer
//         isOpen={isOpen}
//         onClose={onClose}
//         placement="right"
//         size="full"
//         trapFocus={false}
//         autoFocus={false}
//       >
//         <DrawerOverlay />
//         <DrawerContent>
//           <DrawerHeader
//             bg={headerBg}
//             color="white"
//             py={4}
//             px={4}
//             position="sticky"
//             top={0}
//             zIndex={10}
//             boxShadow="md"
//           >
//             <Flex justify="space-between" align="center">
//               <VStack align="flex-start" spacing={0}>
//                 <Heading size="md" noOfLines={1}>
//                   Apply for {selectedJob?.title}
//                 </Heading>
//                 <Text fontSize="xs" opacity={0.8}>
//                   Complete the form below to apply
//                 </Text>
//               </VStack>
//               <DrawerCloseButton position="static" color="white" />
//             </Flex>
//           </DrawerHeader>
//           <DrawerBody
//             p={4}
//             overflowY="auto"
//             ref={scrollContainerRef}
//           >
//             {renderContent()}
//           </DrawerBody>
//           <DrawerFooter
//             p={0}
//             position="sticky"
//             bottom={0}
//             zIndex={10}
//             boxShadow="0 -2px 10px rgba(0,0,0,0.05)"
//           >
//             <FormFooter />
//           </DrawerFooter>
//         </DrawerContent>
//       </Drawer>
//     );
//   }

//   return (
//     <Modal
//       isOpen={isOpen}
//       onClose={onClose}
//       size={{ base: "full", md: "4xl" }}
//       scrollBehavior="inside"
//       trapFocus={false}
//       autoFocus={false}
//     >
//       <ModalOverlay />
//       <ModalContent
//         maxW={{ base: "100%", md: "900px" }}
//         maxH={{ base: "100vh", md: "90vh" }}
//         my={{ base: 0, md: "auto" }}
//         borderRadius={{ base: 0, md: "md" }}
//       >
//         <ModalHeader
//           bg={headerBg}
//           color="white"
//           py={4}
//           px={6}
//           borderTopRadius={{ base: 0, md: "md" }}
//           position="sticky"
//           top={0}
//           zIndex={10}
//           boxShadow="md"
//         >
//           <Flex justify="space-between" align="center">
//             <VStack align="flex-start" spacing={0}>
//               <Heading size="md" noOfLines={1}>
//                 Apply for {selectedJob?.title}
//               </Heading>
//               <Text fontSize="xs" opacity={0.8}>
//                 Complete the form below to apply
//               </Text>
//             </VStack>
//             <ModalCloseButton position="static" color="white" />
//           </Flex>
//         </ModalHeader>

//         <ModalBody
//           p={6}
//           maxH="calc(90vh - 140px)"
//           overflowY="auto"
//           ref={scrollContainerRef}
//         >
//           {renderContent()}
//         </ModalBody>

//         <ModalFooter
//           p={0}
//           position="sticky"
//           bottom={0}
//           zIndex={10}
//           boxShadow="0 -2px 10px rgba(0,0,0,0.05)"
//           borderBottomRadius={{ base: 0, md: "md" }}
//         >
//           <FormFooter />
//         </ModalFooter>
//       </ModalContent>
//     </Modal>
//   );
// };

// export default ApplicationForm;

// import { useState, useRef, useEffect, useLayoutEffect } from "react";
// import { motion } from "framer-motion";
// import {
//   Box,
//   Button,
//   Flex,
//   FormControl,
//   FormLabel,
//   Heading,
//   Input,
//   Select,
//   Text,
//   Textarea,
//   VStack,
//   HStack,
//   useToast,
//   Progress,
//   Icon,
//   SimpleGrid,
//   useColorModeValue,
//   FormErrorMessage,
//   Stepper,
//   Step,
//   StepIndicator,
//   StepStatus,
//   StepIcon,
//   StepNumber,
//   StepTitle,
//   StepDescription,
//   StepSeparator,
//   useSteps,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalBody,
//   ModalFooter,
//   ModalCloseButton,
//   Drawer,
//   DrawerBody,
//   DrawerFooter,
//   DrawerHeader,
//   DrawerOverlay,
//   DrawerContent,
//   DrawerCloseButton,
//   useBreakpointValue,
//   Accordion,
//   AccordionItem,
//   AccordionButton,
//   AccordionPanel,
//   AccordionIcon,
//   List,
//   ListItem,
//   ListIcon,
//   InputGroup,
//   InputLeftElement,
//   Badge,
// } from "@chakra-ui/react";
// import {
//   FiUser,
//   FiPhone,
//   FiMail,
//   FiBriefcase,
//   FiFile,
//   FiCheck,
//   FiArrowRight,
//   FiArrowLeft,
//   FiInfo,
//   FiMapPin,
//   FiCalendar,
//   FiClock,
//   FiDollarSign,
//   FiStar,
// } from "react-icons/fi";

// // ===========================
// // Reusable Components
// // ===========================

// const InputField = ({ icon, label, name, type, value, onChange, error, placeholder, isRequired = false }) => {
//   const focusBorderColor = useColorModeValue("orange.500", "orange.300");
//   const errorBorderColor = useColorModeValue("red.500", "red.300");
//   const bgColor = useColorModeValue("white", "gray.800");
//   const hoverBg = useColorModeValue("gray.50", "gray.700");
//   return (
//     <FormControl isInvalid={!!error} isRequired={isRequired}>
//       <FormLabel
//         htmlFor={name}
//         fontSize={{ base: "sm", md: "md" }}
//         fontWeight="medium"
//         color={useColorModeValue("gray.700", "gray.300")}
//         mb={2}
//       >
//         {label}
//       </FormLabel>
//       <InputGroup>
//         <InputLeftElement pointerEvents="none">
//           <Icon as={icon} color={error ? errorBorderColor : "gray.400"} />
//         </InputLeftElement>
//         <Input
//           type={type}
//           name={name}
//           id={name}
//           value={value}
//           onChange={onChange}
//           placeholder={placeholder}
//           bg={bgColor}
//           _hover={{ bg: hoverBg, borderColor: "gray.300" }}
//           _focus={{
//             borderColor: focusBorderColor,
//             boxShadow: `0 0 0 1px ${focusBorderColor}`,
//             bg: bgColor,
//           }}
//           borderColor={error ? errorBorderColor : "gray.200"}
//           transition="all 0.3s ease"
//           fontSize={{ base: "sm", md: "md" }}
//         />
//       </InputGroup>
//       <FormErrorMessage fontSize="xs" mt={1}>
//         {error}
//       </FormErrorMessage>
//     </FormControl>
//   );
// };

// const FileInput = ({ icon, label, name, onChange, error, isRequired = false, value }) => {
//   const fileInputRef = useRef(null);
//   const handleButtonClick = () => fileInputRef.current?.click();
//   const focusBorderColor = useColorModeValue("orange.500", "orange.300");
//   const errorBorderColor = useColorModeValue("red.500", "red.300");
//   const bgColor = useColorModeValue("white", "gray.800");
//   const hoverBg = useColorModeValue("gray.50", "gray.700");
//   return (
//     <FormControl isInvalid={!!error} isRequired={isRequired}>
//       <FormLabel
//         htmlFor={name}
//         fontSize={{ base: "sm", md: "md" }}
//         fontWeight="medium"
//         color={useColorModeValue("gray.700", "gray.300")}
//         mb={2}
//       >
//         {label}
//       </FormLabel>
//       <Box position="relative">
//         <Input
//           type="file"
//           ref={fileInputRef}
//           id={name}
//           name={name}
//           onChange={onChange}
//           accept=".pdf,.doc,.docx"
//           display="none"
//         />
//         <Flex
//           border="1px solid"
//           borderColor={error ? errorBorderColor : "gray.200"}
//           borderRadius="md"
//           bg={bgColor}
//           _hover={{ bg: hoverBg, borderColor: "gray.300" }}
//           transition="all 0.3s ease"
//           overflow="hidden"
//         >
//           <Flex align="center" justify="center" bg={useColorModeValue("gray.100", "gray.700")} p={3}>
//             <Icon as={icon} color={error ? errorBorderColor : "gray.500"} />
//           </Flex>
//           <Box flex="1" p={2} pl={3} overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap">
//             {value ? value.name : "No file selected"}
//           </Box>
//           <Button onClick={handleButtonClick} size="sm" colorScheme="orange" m={1} px={4}>
//             Browse
//           </Button>
//         </Flex>
//       </Box>
//       <FormErrorMessage fontSize="xs" mt={1}>
//         {error}
//       </FormErrorMessage>
//       <Text fontSize="xs" color="gray.500" mt={1}>
//         Accepted formats: PDF, DOC, DOCX. Max size: 5MB
//       </Text>
//     </FormControl>
//   );
// };

// const JobDetails = ({ job }) => {
//   const bgColor = useColorModeValue("orange.50", "gray.700");
//   const borderColor = useColorModeValue("orange.200", "gray.600");
//   const textColor = useColorModeValue("gray.800", "white");

//   return (
//     <Box
//       bg={bgColor}
//       p={5}
//       borderRadius="md"
//       borderLeft="4px solid"
//       borderColor={borderColor}
//       boxShadow="sm"
//     >
//       {/* Job Title */}
//       <Heading size="md" mb={4} color={textColor}>
//         {job?.title}
//       </Heading>

//       {/* Job Metadata (3-column on desktop, 1-column on mobile) */}
//       <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
//         <HStack spacing={2} alignItems="center">
//           <Icon as={FiBriefcase} color="gray.500" boxSize={4} />
//           <Text fontWeight="medium" fontSize="sm" color={textColor} marginTop={4}>
//             Department:
//           </Text>
//           <Text fontSize="sm" color={textColor} marginTop={4}>
//             {job?.department}
//           </Text>
//         </HStack>

//         <HStack spacing={2} alignItems="center">
//           <Icon as={FiMapPin} color="gray.500" boxSize={4} />
//           <Text fontWeight="medium" fontSize="sm" color={textColor} marginTop={4}>
//             Location:
//           </Text>
//           <Text fontSize="sm" color={textColor} marginTop={4}>
//             {job?.location}
//           </Text>
//         </HStack>

//         <HStack spacing={2} alignItems="center">
//           <Icon as={FiClock} color="gray.500" boxSize={4} />
//           <Text fontWeight="medium" fontSize="sm" color={textColor} marginTop={4}>
//             Type:
//           </Text>
//           <Badge colorScheme="orange" fontSize="sm" px={2} >
//             {job?.type}
//           </Badge>
//         </HStack>
//       </SimpleGrid>

//       {/* Additional Info Row */}
//       <HStack mt={4} spacing={6} wrap="wrap">
//         <HStack spacing={2} alignItems="center">
//           <Icon as={FiCalendar} color="gray.500" boxSize={4} />
//           <Text fontSize="sm" color={textColor} marginTop={4}>
//             Apply by:{" "}
//             <Text as="span" fontWeight="medium" marginTop={4}>
//               {job?.applyBy || "June 30, 2023"}
//             </Text>
//           </Text>
//         </HStack>

//         <HStack spacing={2} alignItems="center">
//           <Icon as={FiDollarSign} color="gray.500" boxSize={4} />
//           <Text fontSize="sm" color={textColor} marginTop={4}>
//             Salary:{" "}
//             <Text as="span" fontWeight="medium" marginTop={4}>
//               {job?.salary || "Competitive"}
//             </Text>
//           </Text>
//         </HStack>

//         <HStack spacing={2} alignItems="center">
//           <Icon as={FiStar} color="gray.500" boxSize={4} />
//           <Text fontSize="sm" color={textColor} marginTop={4}>
//             Experience:{" "}
//             <Text as="span" fontWeight="medium" marginTop={4}>
//               {job?.experience || "5+ years"}
//             </Text>
//           </Text>
//         </HStack>
//       </HStack>
//     </Box>
//   );
// };

// const JobRequirements = ({ job }) => {
//   const borderColor = useColorModeValue("teal.500", "teal.300");

//   const description = job?.description || "No description available.";
//   const responsibilities = job?.responsibilities || [];
//   const requirements = job?.requirements || [];

//   return (
//     <Accordion allowToggle>
//       <AccordionItem border="none" boxShadow="sm" borderRadius="md" mb={4}>
//         <h2>
//           <AccordionButton
//             py={4}
//             bg={useColorModeValue("gray.50", "gray.700")}
//             _hover={{ bg: useColorModeValue("gray.100", "gray.600") }}
//           >
//             <Box flex="1" textAlign="left" fontWeight="bold">
//               Job Description & Requirements
//             </Box>
//             <AccordionIcon />
//           </AccordionButton>
//         </h2>
//         <AccordionPanel
//           pb={4}
//           pt={4}
//           borderLeft="1px solid"
//           borderRight="1px solid"
//           borderBottom="1px solid"
//           borderColor="gray.200"
//           borderBottomRadius="md"
//         >
//           <Text mb={4}>{description}</Text>

//           {responsibilities.length > 0 && (
//             <>
//               <Text fontWeight="bold" mb={3}>
//                 Key Responsibilities:
//               </Text>
//               <List spacing={2} mb={4}>
//                 {responsibilities.map((item, index) => (
//                   <ListItem key={index}>
//                     <ListIcon as={FiCheck} color={borderColor} />
//                     {item}
//                   </ListItem>
//                 ))}
//               </List>
//             </>
//           )}

//           {requirements.length > 0 && (
//             <>
//               <Text fontWeight="bold" mb={3}>
//                 Requirements:
//               </Text>
//               <List spacing={2}>
//                 {requirements.map((item, index) => (
//                   <ListItem key={index}>
//                     <ListIcon as={FiCheck} color={borderColor} />
//                     {item}
//                   </ListItem>
//                 ))}
//               </List>
//             </>
//           )}
//         </AccordionPanel>
//       </AccordionItem>
//     </Accordion>
//   );
// };

// const FormStepper = ({ activeStep, steps }) => {
//   const isMobile = useBreakpointValue({ base: true, md: false });
//   const stepperColor = useColorModeValue("orange.500", "orange.300");
//   return (
//     <Box mb={8}>
//       {isMobile ? (
//         <Flex justify="space-between" align="center" mb={4}>
//           {steps.map((step, index) => (
//             <VStack key={index} spacing={1} flex="1" position="relative">
//               <Box
//                 w="10px"
//                 h="10px"
//                 borderRadius="full"
//                 bg={index <= activeStep ? stepperColor : "gray.200"}
//                 zIndex={1}
//               />
//               {index < steps.length - 1 && (
//                 <Box
//                   position="absolute"
//                   h="2px"
//                   bg={index < activeStep ? stepperColor : "gray.200"}
//                   top="5px"
//                   right="-50%"
//                   w="100%"
//                 />
//               )}
//               <Text
//                 fontSize="xs"
//                 fontWeight={index === activeStep ? "bold" : "normal"}
//                 color={index === activeStep ? stepperColor : "gray.500"}
//                 textAlign="center"
//               >
//                 {step.title}
//               </Text>
//             </VStack>
//           ))}
//         </Flex>
//       ) : (
//         <Stepper index={activeStep} size="lg">
//           {steps.map((step, index) => (
//             <Step key={index}>
//               <StepIndicator>
//                 <StepStatus complete={<StepIcon />} incomplete={<StepNumber />} active={<StepNumber />} />
//               </StepIndicator>
//               <Box flexShrink="0">
//                 <StepTitle>{step.title}</StepTitle>
//                 <StepDescription>{step.description}</StepDescription>
//               </Box>
//               <StepSeparator />
//             </Step>
//           ))}
//         </Stepper>
//       )}
//     </Box>
//   );
// };

// // ===========================
// // Main ApplicationForm
// // ===========================
// const ApplicationForm = ({ isOpen, onClose, selectedJob, onSubmit }) => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     mobileNumber: "",
//     email: "",
//     profession: "",
//     resume: null,
//     coverLetter: "",
//     yearsOfExperience: "",
//   });
//   const [errors, setErrors] = useState({});
//   const [isLoading, setIsLoading] = useState(false);
//   const [customProfession, setCustomProfession] = useState("");
//   const toast = useToast();
//   const isMobile = useBreakpointValue({ base: true, md: false });
//   const headerBg = useColorModeValue("teal.900", "teal.900");
//   const textColor = useColorModeValue("gray.800", "white");

//   const scrollContainerRef = useRef(null);
//   const scrollPositionRef = useRef(0);

//   const { activeStep, setActiveStep } = useSteps({
//     index: 0,
//     count: 3,
//   });

//   const steps = [
//     { title: "Personal Info", description: "Your basic details" },
//     { title: "Professional Info", description: "Your work experience" },
//     { title: "Additional Info", description: "Extra details" },
//   ];

//   const professions = [
//     "Software Engineer",
//     "Data Scientist",
//     "Product Manager",
//     "UX Designer",
//     "Marketing Specialist",
//     "Customer Success Manager",
//     "IT Mentor",
//     "Non-IT Mentor",
//     "Others (please specify)",
//   ];

//   const handleInputChange = (e) => {
//     if (scrollContainerRef.current) {
//       scrollPositionRef.current = scrollContainerRef.current.scrollTop;
//     }
//     const { name, value } = e.target;

//     if (name === "profession") {
//       setFormData((prev) => ({ ...prev, profession: value }));
//       setErrors((prev) => ({ ...prev, profession: "" }));
//       if (value !== "Others (please specify)") {
//         setCustomProfession("");
//       }
//     } else {
//       setFormData((prev) => ({ ...prev, [name]: value }));
//       setErrors((prev) => ({ ...prev, [name]: "" }));
//     }
//   };

//   const handleCustomProfessionChange = (e) => {
//     const value = e.target.value;
//     setCustomProfession(value);
//     setFormData((prev) => ({ ...prev, profession: value }));
//     setErrors((prev) => ({ ...prev, profession: "" }));
//   };

//   const handleFileChange = (e) => {
//     if (scrollContainerRef.current) {
//       scrollPositionRef.current = scrollContainerRef.current.scrollTop;
//     }
//     const file = e.target.files[0];
//     if (file && file.size <= 5 * 1024 * 1024) {
//       setFormData((prev) => ({ ...prev, resume: file }));
//       setErrors((prev) => ({ ...prev, resume: "" }));
//     } else {
//       setErrors((prev) => ({ ...prev, resume: "File size should be less than 5MB" }));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Validate required fields (coverLetter is optional)
//     const newErrors = {};
//     if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
//     if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
//     if (!/^\d{10}$/.test(formData.mobileNumber)) newErrors.mobileNumber = "Invalid mobile number";
//     if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email address";
//     if (!formData.profession) newErrors.profession = "Please select or enter a profession";
//     if (!formData.resume) newErrors.resume = "Please upload your resume";
//     if (!formData.yearsOfExperience && formData.yearsOfExperience !== 0)
//       newErrors.yearsOfExperience = "Years of experience is required";
//     else if (formData.yearsOfExperience < 0 || formData.yearsOfExperience > 50)
//       newErrors.yearsOfExperience = "Please enter a valid number between 0 and 50";

//     setErrors(newErrors);
//     if (Object.keys(newErrors).length > 0) {
//       toast({
//         title: "Form has errors",
//         description: "Please correct the errors in the form.",
//         status: "error",
//         duration: 5000,
//         isClosable: true,
//         position: "top",
//       });
//       return;
//     }

//     setIsLoading(true);

//     const formDataToSend = new FormData();

//     // Append resume
//     if (formData.resume) {
//       formDataToSend.append("resume", formData.resume);
//     } else {
//       toast({
//         title: "Missing Resume",
//         description: "Please upload a resume file.",
//         status: "error",
//         duration: 5000,
//         isClosable: true,
//       });
//       setIsLoading(false);
//       return;
//     }

//     // Prepare content object
//     const content = {
//       firstName: formData.firstName,
//       lastName: formData.lastName,
//       mobileNumber: formData.mobileNumber,
//       mailId: formData.email,
//       profession: formData.profession,
//       experience: formData.yearsOfExperience,
//       message: formData.coverLetter || "", // Optional
//       jobTitle: selectedJob?.title || "Not Specified",
//     };

//     const jsonContent = new Blob([JSON.stringify(content)], {
//       type: "application/json",
//     });
//     formDataToSend.append("content", jsonContent);

//     try {
//       const response = await fetch(
//         "https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1/enrollNow",
//         {
//           method: "POST",
//           body: formDataToSend,
//         }
//       );

//       const result = await response.json();

//       if (response.ok) {
//         toast({
//           title: "Application submitted!",
//           description: "We'll be in touch soon.",
//           status: "success",
//           duration: 5000,
//           isClosable: true,
//           position: "top",
//         });
//         onSubmit?.({
//           ...formData,
//           jobTitle: selectedJob?.title,
//         });
//         onClose();
//       } else {
//         throw new Error(result.message || "Submission failed");
//       }
//     } catch (error) {
//       console.error("Submission error:", error);
//       toast({
//         title: "Submission failed",
//         description: error.message || "Something went wrong",
//         status: "error",
//         duration: 5000,
//         isClosable: true,
//         position: "top",
//       });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleNext = () => {
//     if (activeStep === 0) {
//       const newErrors = {};
//       if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
//       if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
//       if (!/^\d{10}$/.test(formData.mobileNumber)) newErrors.mobileNumber = "Invalid mobile number";
//       if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email address";
//       setErrors(newErrors);
//       if (Object.keys(newErrors).length > 0) return;
//     }
//     setActiveStep((prev) => prev + 1);
//   };

//   const handlePrev = () => {
//     setActiveStep((prev) => prev - 1);
//   };

//   useEffect(() => {
//     if (isOpen) {
//       setFormData((prev) => ({
//         ...prev,
//         profession: selectedJob?.department || "",
//       }));
//     }
//   }, [isOpen, selectedJob]);

//   useEffect(() => {
//     if (!isOpen) {
//       setFormData({
//         firstName: "",
//         lastName: "",
//         mobileNumber: "",
//         email: "",
//         profession: "",
//         resume: null,
//         coverLetter: "",
//         yearsOfExperience: "",
//       });
//       setErrors({});
//       setActiveStep(0);
//       setCustomProfession("");
//     }
//   }, [isOpen]);

//   useLayoutEffect(() => {
//     if (scrollContainerRef.current && scrollPositionRef.current > 0) {
//       scrollContainerRef.current.scrollTop = scrollPositionRef.current;
//     }
//   }, [activeStep]);

//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }
//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, [isOpen]);

//   const renderContent = () => (
//     <>
//       <JobDetails job={selectedJob} />
//       <JobRequirements job={selectedJob} />
//       <Box>
//         <Heading as="h3" size="md" mb={6} color={textColor}>
//           Application Form
//         </Heading>
//         <FormStepper activeStep={activeStep} steps={steps} />
//         <form onSubmit={handleSubmit}>
//           <Box>
//             {activeStep === 0 && (
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <VStack spacing={6} align="stretch">
//                   <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
//                     <InputField
//                       icon={FiUser}
//                       label="First Name"
//                       name="firstName"
//                       type="text"
//                       value={formData.firstName}
//                       onChange={handleInputChange}
//                       error={errors.firstName}
//                       placeholder="John"
//                       isRequired
//                     />
//                     <InputField
//                       icon={FiUser}
//                       label="Last Name"
//                       name="lastName"
//                       type="text"
//                       value={formData.lastName}
//                       onChange={handleInputChange}
//                       error={errors.lastName}
//                       placeholder="Doe"
//                       isRequired
//                     />
//                   </SimpleGrid>
//                   <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
//                     <InputField
//                       icon={FiPhone}
//                       label="Mobile Number"
//                       name="mobileNumber"
//                       type="tel"
//                       value={formData.mobileNumber}
//                       onChange={handleInputChange}
//                       error={errors.mobileNumber}
//                       placeholder="1234567890"
//                       isRequired
//                     />
//                     <InputField
//                       icon={FiMail}
//                       label="Email"
//                       name="email"
//                       type="email"
//                       value={formData.email}
//                       onChange={handleInputChange}
//                       error={errors.email}
//                       placeholder="john@example.com"
//                       isRequired
//                     />
//                   </SimpleGrid>
//                 </VStack>
//               </motion.div>
//             )}

//             {activeStep === 1 && (
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <VStack spacing={6} align="stretch">
//                   <FormControl isInvalid={!!errors.profession} isRequired>
//                     <FormLabel
//                       htmlFor="profession"
//                       fontSize={{ base: "sm", md: "md" }}
//                       fontWeight="medium"
//                       color={useColorModeValue("gray.700", "gray.300")}
//                     >
//                       Profession
//                     </FormLabel>
//                     <InputGroup>
//                       <InputLeftElement pointerEvents="none">
//                         <Icon as={FiBriefcase} color={errors.profession ? "red.500" : "gray.400"} />
//                       </InputLeftElement>
//                       <Select
//                         id="profession"
//                         name="profession"
//                         value={formData.profession}
//                         onChange={handleInputChange}
//                         placeholder="Select your profession"
//                         pl={10}
//                         bg={useColorModeValue("white", "gray.800")}
//                         _hover={{ bg: useColorModeValue("gray.50", "gray.700") }}
//                         borderColor={errors.profession ? "red.500" : "gray.200"}
//                       >
//                         {professions.map((prof) => (
//                           <option key={prof} value={prof}>
//                             {prof}
//                           </option>
//                         ))}
//                       </Select>
//                     </InputGroup>
//                     <FormErrorMessage fontSize="xs">{errors.profession}</FormErrorMessage>
//                   </FormControl>

//                   {formData.profession === "Others (please specify)" && (
//                     <FormControl isRequired isInvalid={!!errors.profession}>
//                       <FormLabel
//                         htmlFor="customProfession"
//                         fontSize="sm"
//                         fontWeight="medium"
//                         color={useColorModeValue("gray.700", "gray.300")}
//                       >
//                         Please specify your profession
//                       </FormLabel>
//                       <Input
//                         id="customProfession"
//                         name="customProfession"
//                         value={customProfession}
//                         onChange={handleCustomProfessionChange}
//                         placeholder="Enter your profession"
//                         bg={useColorModeValue("white", "gray.800")}
//                         _hover={{ bg: useColorModeValue("gray.50", "gray.700") }}
//                         _focus={{
//                           borderColor: "orange.500",
//                           boxShadow: "0 0 0 1px orange.500",
//                         }}
//                         borderColor={errors.profession ? "red.500" : "gray.200"}
//                         fontSize="sm"
//                       />
//                       <FormErrorMessage fontSize="xs">{errors.profession}</FormErrorMessage>
//                     </FormControl>
//                   )}

//                   <FormControl isRequired isInvalid={!!errors.yearsOfExperience}>
//                     <FormLabel
//                       htmlFor="yearsOfExperience"
//                       fontSize={{ base: "sm", md: "md" }}
//                       fontWeight="medium"
//                       color={useColorModeValue("gray.700", "gray.300")}
//                     >
//                       Years of Experience
//                     </FormLabel>
//                     <InputGroup>
//                       <InputLeftElement pointerEvents="none">
//                         <Icon as={FiCalendar} color="gray.400" />
//                       </InputLeftElement>
//                       <Input
//                         id="yearsOfExperience"
//                         name="yearsOfExperience"
//                         type="number"
//                         min="0"
//                         max="50"
//                         value={formData.yearsOfExperience || ""}
//                         onChange={(e) => {
//                           if (scrollContainerRef.current) {
//                             scrollPositionRef.current = scrollContainerRef.current.scrollTop;
//                           }
//                           setFormData((prev) => ({
//                             ...prev,
//                             yearsOfExperience: e.target.value ? Number(e.target.value) : "",
//                           }));
//                           setErrors((prev) => ({ ...prev, yearsOfExperience: "" }));
//                         }}
//                         placeholder="e.g. 5"
//                         bg={useColorModeValue("white", "gray.800")}
//                         _hover={{ bg: useColorModeValue("gray.50", "gray.700") }}
//                         _focus={{
//                           borderColor: "orange.500",
//                           boxShadow: "0 0 0 1px orange.500",
//                         }}
//                         borderColor={errors.yearsOfExperience ? "red.500" : "gray.200"}
//                       />
//                     </InputGroup>
//                     <FormErrorMessage fontSize="xs">{errors.yearsOfExperience}</FormErrorMessage>
//                   </FormControl>

//                   <FileInput
//                     icon={FiFile}
//                     label="Upload Resume"
//                     name="resume"
//                     onChange={handleFileChange}
//                     error={errors.resume}
//                     isRequired
//                     value={formData.resume}
//                   />

//                   <Box
//                     p={4}
//                     bg={useColorModeValue("blue.50", "blue.900")}
//                     borderRadius="md"
//                     borderLeft="4px solid"
//                     borderColor={useColorModeValue("blue.400", "blue.500")}
//                   >
//                     <HStack spacing={3} align="flex-start">
//                       <Icon as={FiInfo} color={useColorModeValue("blue.500", "blue.300")} mt={1} />
//                       <Text fontSize="sm">
//                         Your resume should highlight your relevant experience, skills, and achievements. Make sure
//                         it's up-to-date and tailored to the position you're applying for.
//                       </Text>
//                     </HStack>
//                   </Box>
//                 </VStack>
//               </motion.div>
//             )}

//             {activeStep === 2 && (
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <VStack spacing={6} align="stretch">
//                   <FormControl isInvalid={!!errors.coverLetter}>
//                     <FormLabel
//                       htmlFor="coverLetter"
//                       fontSize={{ base: "sm", md: "md" }}
//                       fontWeight="medium"
//                       color={useColorModeValue("gray.700", "gray.300")}
//                     >
//                       Cover Letter (Optional)
//                     </FormLabel>
//                     <Textarea
//                       id="coverLetter"
//                       name="coverLetter"
//                       value={formData.coverLetter}
//                       onChange={handleInputChange}
//                       placeholder="Tell us why you're a great fit for this position..."
//                       rows={8}
//                       bg={useColorModeValue("white", "gray.800")}
//                       _hover={{ bg: useColorModeValue("gray.50", "gray.700") }}
//                       _focus={{
//                         borderColor: "orange.900",
//                         boxShadow: "0 0 0 1px orange.500",
//                         bg: useColorModeValue("white", "gray.800"),
//                       }}
//                       borderColor={errors.coverLetter ? "red.500" : "gray.200"}
//                       fontSize={{ base: "sm", md: "md" }}
//                     />
//                     <FormErrorMessage fontSize="xs">{errors.coverLetter}</FormErrorMessage>
//                   </FormControl>

//                   <Box
//                     p={4}
//                     bg={useColorModeValue("green.50", "green.900")}
//                     borderRadius="md"
//                     borderLeft="4px solid"
//                     borderColor={useColorModeValue("green.400", "green.500")}
//                   >
//                     <VStack align="flex-start" spacing={2}>
//                       <HStack spacing={3}>
//                         <Icon as={FiInfo} color={useColorModeValue("green.500", "green.300")} />
//                         <Text fontWeight="medium" fontSize="sm">
//                           Tips for a great cover letter:
//                         </Text>
//                       </HStack>
//                       <List spacing={1} pl={8} fontSize="sm">
//                         <ListItem>
//                           <ListIcon as={FiCheck} color={useColorModeValue("green.500", "green.300")} />
//                           Explain why you're interested in this position
//                         </ListItem>
//                         <ListItem>
//                           <ListIcon as={FiCheck} color={useColorModeValue("green.500", "green.300")} />
//                           Highlight your most relevant skills and experiences
//                         </ListItem>
//                         <ListItem>
//                           <ListIcon as={FiCheck} color={useColorModeValue("green.500", "green.300")} />
//                           Show how you can add value to the company
//                         </ListItem>
//                       </List>
//                     </VStack>
//                   </Box>
//                 </VStack>
//               </motion.div>
//             )}
//           </Box>
//         </form>
//       </Box>
//     </>
//   );

//   const FormFooter = () => (
//     <Flex
//       justify="space-between"
//       pt={4}
//       pb={4}
//       px={{ base: 4, md: 6 }}
//       borderTop="1px solid"
//       borderColor={useColorModeValue("gray.200", "gray.700")}
//       bg={useColorModeValue("gray.50", "gray.900")}
//     >
//       <Button
//         onClick={handlePrev}
//         isDisabled={activeStep === 0}
//         leftIcon={<FiArrowLeft />}
//         variant="outline"
//         size={{ base: "sm", md: "md" }}
//         fontWeight="medium"
//         type="button"
//       >
//         Previous
//       </Button>
//       {activeStep < steps.length - 1 ? (
//         <Button
//           onClick={handleNext}
//           rightIcon={<FiArrowRight />}
//           color="white"
//           bg="teal.900"
//           size={{ base: "sm", md: "md" }}
//           fontWeight="medium"
//           type="button"
//         >
//           Next Step
//         </Button>
//       ) : (
//         <Button
//           onClick={handleSubmit}
//           color="white"
//           bg="teal.900"
//           isLoading={isLoading}
//           loadingText="Submitting"
//           size={{ base: "sm", md: "md" }}
//           fontWeight="medium"
//         >
//           Submit Application
//         </Button>
//       )}
//     </Flex>
//   );

//   if (isMobile) {
//     return (
//       <Drawer
//         isOpen={isOpen}
//         onClose={onClose}
//         placement="right"
//         size="full"
//         trapFocus={false}
//         autoFocus={false}
//       >
//         <DrawerOverlay />
//         <DrawerContent>
//           <DrawerHeader
//             bg={headerBg}
//             color="white"
//             py={4}
//             px={4}
//             position="sticky"
//             top={0}
//             zIndex={10}
//             boxShadow="md"
//           >
//             <Flex justify="space-between" align="center">
//               <VStack align="flex-start" spacing={0}>
//                 <Heading size="md" noOfLines={1}>
//                   Apply for {selectedJob?.title}
//                 </Heading>
//                 <Text fontSize="xs" opacity={0.8}>
//                   Complete the form below to apply
//                 </Text>
//               </VStack>
//               <DrawerCloseButton position="static" color="white" />
//             </Flex>
//           </DrawerHeader>
//           <DrawerBody
//             p={4}
//             overflowY="auto"
//             ref={scrollContainerRef}
//           >
//             {renderContent()}
//           </DrawerBody>
//           <DrawerFooter
//             p={0}
//             position="sticky"
//             bottom={0}
//             zIndex={10}
//             boxShadow="0 -2px 10px rgba(0,0,0,0.05)"
//           >
//             <FormFooter />
//           </DrawerFooter>
//         </DrawerContent>
//       </Drawer>
//     );
//   }

//   return (
//     <Modal
//       isOpen={isOpen}
//       onClose={onClose}
//       size={{ base: "full", md: "4xl" }}
//       scrollBehavior="inside"
//       trapFocus={false}
//       autoFocus={false}
//     >
//       <ModalOverlay />
//       <ModalContent
//         maxW={{ base: "100%", md: "900px" }}
//         maxH={{ base: "100vh", md: "90vh" }}
//         my={{ base: 0, md: "auto" }}
//         borderRadius={{ base: 0, md: "md" }}
//       >
//         <ModalHeader
//           bg={headerBg}
//           color="white"
//           py={4}
//           px={6}
//           borderTopRadius={{ base: 0, md: "md" }}
//           position="sticky"
//           top={0}
//           zIndex={10}
//           boxShadow="md"
//         >
//           <Flex justify="space-between" align="center">
//             <VStack align="flex-start" spacing={0}>
//               <Heading size="md" noOfLines={1}>
//                 Apply for {selectedJob?.title}
//               </Heading>
//               <Text fontSize="xs" opacity={0.8}>
//                 Complete the form below to apply
//               </Text>
//             </VStack>
//             <ModalCloseButton position="static" color="white" />
//           </Flex>
//         </ModalHeader>

//         <ModalBody
//           p={6}
//           maxH="calc(90vh - 140px)"
//           overflowY="auto"
//           ref={scrollContainerRef}
//         >
//           {renderContent()}
//         </ModalBody>

//         <ModalFooter
//           p={0}
//           position="sticky"
//           bottom={0}
//           zIndex={10}
//           boxShadow="0 -2px 10px rgba(0,0,0,0.05)"
//           borderBottomRadius={{ base: 0, md: "md" }}
//         >
//           <FormFooter />
//         </ModalFooter>
//       </ModalContent>
//     </Modal>
//   );
// };

// export default ApplicationForm;
import { useState, useRef, useEffect, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Text,
  Textarea,
  VStack,
  HStack,
  useToast,
  Icon,
  SimpleGrid,
  useColorModeValue,
  FormErrorMessage,
  Stepper,
  Step,
  StepIndicator,
  StepStatus,
  StepIcon,
  StepNumber,
  StepTitle,
  StepDescription,
  StepSeparator,
  useSteps,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useBreakpointValue,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  List,
  ListItem,
  ListIcon,
  InputGroup,
  InputLeftElement,
  Badge,
} from "@chakra-ui/react";
import {
  FiUser,
  FiPhone,
  FiMail,
  FiBriefcase,
  FiFile,
  FiCheck,
  FiArrowRight,
  FiArrowLeft,
  FiInfo,
  FiMapPin,
  FiCalendar,
  FiClock,
  FiDollarSign,
  FiStar,
} from "react-icons/fi";

// ===========================
// Hook: Lock Body Scroll
// ===========================
const useScrollLock = (isOpen) => {
  useEffect(() => {
    if (!isOpen) return;

    const originalStyle = {
      overflow: document.body.style.overflow,
      paddingRight: document.body.style.paddingRight,
      position: document.body.style.position,
      top: document.body.style.top,
      width: document.body.style.width,
    };

    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const scrollPos = window.scrollY;

    // Lock body scroll
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollbarWidth}px`;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollPos}px`;
    document.body.style.width = "100%";

    return () => {
      // Restore
      document.body.style.overflow = originalStyle.overflow;
      document.body.style.paddingRight = originalStyle.paddingRight;
      document.body.style.position = originalStyle.position;
      document.body.style.top = originalStyle.top;
      document.body.style.width = originalStyle.width;
      window.scrollTo(0, -parseInt(document.body.style.top || "0") || scrollPos);
    };
  }, [isOpen]);
};

// ===========================
// Reusable Components
// ===========================
const InputField = ({ icon, label, name, type, value, onChange, error, placeholder, isRequired = false }) => {
  const focusBorderColor = useColorModeValue("orange.500", "orange.300");
  const errorBorderColor = useColorModeValue("red.500", "red.300");
  const bgColor = useColorModeValue("white", "gray.800");
  const hoverBg = useColorModeValue("gray.50", "gray.700");
  return (
    <FormControl isInvalid={!!error} isRequired={isRequired}>
      <FormLabel
        htmlFor={name}
        fontSize="sm"
        fontWeight="medium"
        color={useColorModeValue("gray.700", "gray.300")}
        mb={2}
      >
        {label}
      </FormLabel>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <Icon as={icon} color={error ? errorBorderColor : "gray.400"} boxSize={4} />
        </InputLeftElement>
        <Input
          type={type}
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          bg={bgColor}
          _hover={{ bg: hoverBg, borderColor: "gray.300" }}
          _focus={{
            borderColor: focusBorderColor,
            boxShadow: `0 0 0 1px ${focusBorderColor}`,
            bg: bgColor,
          }}
          borderColor={error ? errorBorderColor : "gray.200"}
          transition="all 0.3s ease"
          fontSize="sm"
        />
      </InputGroup>
      <FormErrorMessage fontSize="xs" mt={1}>
        {error}
      </FormErrorMessage>
    </FormControl>
  );
};

const FileInput = ({ icon, label, name, onChange, error, isRequired = false, value }) => {
  const fileInputRef = useRef(null);
  const handleButtonClick = () => fileInputRef.current?.click();
  const focusBorderColor = useColorModeValue("orange.500", "orange.300");
  const errorBorderColor = useColorModeValue("red.500", "red.300");
  const bgColor = useColorModeValue("white", "gray.800");
  const hoverBg = useColorModeValue("gray.50", "gray.700");
  return (
    <FormControl isInvalid={!!error} isRequired={isRequired}>
      <FormLabel
        htmlFor={name}
        fontSize="sm"
        fontWeight="medium"
        color={useColorModeValue("gray.700", "gray.300")}
        mb={2}
      >
        {label}
      </FormLabel>
      <Box position="relative">
        <Input
          type="file"
          ref={fileInputRef}
          id={name}
          name={name}
          onChange={onChange}
          accept=".pdf,.doc,.docx"
          display="none"
        />
        <Flex
          border="1px solid"
          borderColor={error ? errorBorderColor : "gray.200"}
          borderRadius="md"
          bg={bgColor}
          _hover={{ bg: hoverBg, borderColor: "gray.300" }}
          transition="all 0.3s ease"
          overflow="hidden"
        >
          <Flex align="center" justify="center" bg={useColorModeValue("gray.100", "gray.700")} p={3}>
            <Icon as={icon} color={error ? errorBorderColor : "gray.500"} boxSize={4} />
          </Flex>
          <Box flex="1" p={2} pl={3} overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap">
            {value ? value.name : "No file selected"}
          </Box>
          <Button onClick={handleButtonClick} size="sm" colorScheme="orange" m={1} px={4}>
            Browse
          </Button>
        </Flex>
      </Box>
      <FormErrorMessage fontSize="xs" mt={1}>
        {error}
      </FormErrorMessage>
      <Text fontSize="xs" color="gray.500" mt={1}>
        Accepted formats: PDF, DOC, DOCX. Max size: 5MB
      </Text>
    </FormControl>
  );
};

const JobDetails = ({ job }) => {
  const bgColor = useColorModeValue("orange.50", "gray.700");
  const borderColor = useColorModeValue("orange.200", "gray.600");
  const textColor = useColorModeValue("gray.800", "white");

  return (
    <Box
      bg={bgColor}
      p={6}
      borderRadius="md"
      borderLeft="4px solid"
      borderColor={borderColor}
      boxShadow="sm"
      mb={6}
    >
      <Heading size="lg" mb={4} color={textColor}>
        {job?.title}
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} mb={6}>
        <HStack spacing={3} alignItems="center">
          <Icon as={FiBriefcase} color="gray.500" boxSize={5} />
          <Text fontWeight="semibold" fontSize="md" color={textColor} marginTop={4}>
            {job?.department}
          </Text>
        </HStack>

        <HStack spacing={3} alignItems="center">
          <Icon as={FiMapPin} color="gray.500" boxSize={5} />
          <Text fontWeight="semibold" fontSize="md" color={textColor} marginTop={4}>
            {job?.location}
          </Text>
        </HStack>

        <HStack spacing={3} alignItems="center">
          <Icon as={FiClock} color="gray.500" boxSize={5} />
          <Badge colorScheme="orange" fontSize="md" px={3} py={1} >
            {job?.type}
          </Badge>
        </HStack>
      </SimpleGrid>

      <HStack spacing={8} wrap="wrap" alignItems="center">
        <HStack spacing={3} alignItems="center">
          <Icon as={FiCalendar} color="gray.500" boxSize={5} />
          <Text fontSize="md" color={textColor} marginTop={4}>
            Apply by:{" "}
            <Text as="span" fontWeight="bold" marginTop={4}>
              {job?.applyBy || "June 30, 2023"}
            </Text>
          </Text>
        </HStack>

        <HStack spacing={3} alignItems="center">
          <Icon as={FiDollarSign} color="gray.500" boxSize={5} />
          <Text fontSize="md" color={textColor} marginTop={4}>
            Salary:{" "}
            <Text as="span" fontWeight="bold" marginTop={4}>
              {job?.salary || "Competitive"}
            </Text>
          </Text>
        </HStack>

        <HStack spacing={3} alignItems="center">
          <Icon as={FiStar} color="gray.500" boxSize={5} />
          <Text fontSize="md" color={textColor} marginTop={4}>
            Experience:{" "}
            <Text as="span" fontWeight="bold" marginTop={4}>
              {job?.experience || "5+ years"}
            </Text>
          </Text>
        </HStack>
      </HStack>
    </Box>
  );
};

const JobRequirements = ({ job }) => {
  const borderColor = useColorModeValue("teal.500", "teal.300");

  const description = job?.description || "No description available.";
  const responsibilities = job?.responsibilities || [];
  const requirements = job?.requirements || [];

  return (
    <Accordion allowToggle mb={6}>
      <AccordionItem border="none" boxShadow="sm" borderRadius="md">
        <h2>
          <AccordionButton
            py={4}
            bg={useColorModeValue("gray.50", "gray.700")}
            _hover={{ bg: useColorModeValue("gray.100", "gray.600") }}
          >
            <Box flex="1" textAlign="left" fontWeight="bold" fontSize="md">
              Job Description & Requirements
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel
          pb={4}
          pt={4}
          borderLeft="1px solid"
          borderRight="1px solid"
          borderBottom="1px solid"
          borderColor="gray.200"
          borderBottomRadius="md"
        >
          <Text mb={4} fontSize="sm">
            {description}
          </Text>

          {responsibilities.length > 0 && (
            <>
              <Text fontWeight="bold" mb={3} fontSize="sm">
                Key Responsibilities:
              </Text>
              <List spacing={2} mb={4}>
                {responsibilities.map((item, index) => (
                  <ListItem key={index}>
                    <ListIcon as={FiCheck} color={borderColor} boxSize={3} />
                    <Text fontSize="sm">{item}</Text>
                  </ListItem>
                ))}
              </List>
            </>
          )}

          {requirements.length > 0 && (
            <>
              <Text fontWeight="bold" mb={3} fontSize="sm">
                Requirements:
              </Text>
              <List spacing={2}>
                {requirements.map((item, index) => (
                  <ListItem key={index}>
                    <ListIcon as={FiCheck} color={borderColor} boxSize={3} />
                    <Text fontSize="sm">{item}</Text>
                  </ListItem>
                ))}
              </List>
            </>
          )}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

const FormStepper = ({ activeStep, steps }) => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const stepperColor = useColorModeValue("orange.500", "orange.300");
  return (
    <Box mb={8}>
      {isMobile ? (
        <Flex justify="space-between" align="center" mb={4}>
          {steps.map((step, index) => (
            <VStack key={index} spacing={1} flex="1" position="relative">
              <Box
                w="10px"
                h="10px"
                borderRadius="full"
                bg={index <= activeStep ? stepperColor : "gray.200"}
                zIndex={1}
              />
              {index < steps.length - 1 && (
                <Box
                  position="absolute"
                  h="2px"
                  bg={index < activeStep ? stepperColor : "gray.200"}
                  top="5px"
                  right="-50%"
                  w="100%"
                />
              )}
              <Text
                fontSize="xs"
                fontWeight={index === activeStep ? "bold" : "normal"}
                color={index === activeStep ? stepperColor : "gray.500"}
                textAlign="center"
              >
                {step.title}
              </Text>
            </VStack>
          ))}
        </Flex>
      ) : (
        <Stepper index={activeStep} size="lg">
          {steps.map((step, index) => (
            <Step key={index}>
              <StepIndicator>
                <StepStatus complete={<StepIcon />} incomplete={<StepNumber />} active={<StepNumber />} />
              </StepIndicator>
              <Box flexShrink="0">
                <StepTitle>{step.title}</StepTitle>
                <StepDescription>{step.description}</StepDescription>
              </Box>
              <StepSeparator />
            </Step>
          ))}
        </Stepper>
      )}
    </Box>
  );
};

// ===========================
// Main ApplicationForm
// ===========================
const ApplicationForm = ({ isOpen, onClose, selectedJob, onSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    email: "",
    profession: "",
    resume: null,
    coverLetter: "",
    yearsOfExperience: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [customProfession, setCustomProfession] = useState("");
  const toast = useToast();
  const isMobile = useBreakpointValue({ base: true, md: false });
  const headerBg = useColorModeValue("teal.900", "teal.900");
  const textColor = useColorModeValue("gray.800", "white");

  const scrollContainerRef = useRef(null);
  const scrollPositionRef = useRef(0);

  const { activeStep, setActiveStep } = useSteps({
    index: 0,
    count: 3,
  });

  const steps = [
    { title: "Personal Info", description: "Your basic details" },
    { title: "Professional Info", description: "Your work experience" },
    { title: "Additional Info", description: "Extra details" },
  ];

  const professions = [
    "Software Engineer",
    "Data Scientist",
    "Product Manager",
    "UX Designer",
    "Marketing Specialist",
    "Customer Success Manager",
    "IT Mentor",
    "Non-IT Mentor",
    "Others (please specify)",
  ];

  const handleInputChange = (e) => {
    if (scrollContainerRef.current) {
      scrollPositionRef.current = scrollContainerRef.current.scrollTop;
    }
    const { name, value } = e.target;

    if (name === "profession") {
      setFormData((prev) => ({ ...prev, profession: value }));
      setErrors((prev) => ({ ...prev, profession: "" }));
      if (value !== "Others (please specify)") {
        setCustomProfession("");
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleCustomProfessionChange = (e) => {
    const value = e.target.value;
    setCustomProfession(value);
    setFormData((prev) => ({ ...prev, profession: value }));
    setErrors((prev) => ({ ...prev, profession: "" }));
  };

  const handleFileChange = (e) => {
    if (scrollContainerRef.current) {
      scrollPositionRef.current = scrollContainerRef.current.scrollTop;
    }
    const file = e.target.files[0];
    if (file && file.size <= 5 * 1024 * 1024) {
      setFormData((prev) => ({ ...prev, resume: file }));
      setErrors((prev) => ({ ...prev, resume: "" }));
    } else {
      setErrors((prev) => ({ ...prev, resume: "File size should be less than 5MB" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!/^\d{10}$/.test(formData.mobileNumber)) newErrors.mobileNumber = "Invalid mobile number";
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email address";
    if (!formData.profession) newErrors.profession = "Please select or enter a profession";
    if (!formData.resume) newErrors.resume = "Please upload your resume";
    if (!formData.yearsOfExperience && formData.yearsOfExperience !== 0)
      newErrors.yearsOfExperience = "Years of experience is required";
    else if (formData.yearsOfExperience < 0 || formData.yearsOfExperience > 50)
      newErrors.yearsOfExperience = "Please enter a valid number between 0 and 50";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      toast({
        title: "Form has errors",
        description: "Please correct the errors in the form.",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      return;
    }

    setIsLoading(true);

    const formDataToSend = new FormData();

    // Append resume
    if (formData.resume) {
      formDataToSend.append("resume", formData.resume);
    } else {
      toast({
        title: "Missing Resume",
        description: "Please upload a resume file.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      setIsLoading(false);
      return;
    }

    // Prepare content JSON (matches your curl)
    const content = {
      mailId: formData.email,
      firstName: formData.firstName,
      lastName: formData.lastName,
      mobileNumber: formData.mobileNumber,
      profession: formData.profession,
      yearsOfExperience: formData.yearsOfExperience,
      message: formData.coverLetter || "", // Optional
      jobTitle: selectedJob?.title || "Not Specified",
    };

    const jsonContent = new Blob([JSON.stringify(content)], { type: "application/json" });
    formDataToSend.append("content", jsonContent);

    try {
      const response = await fetch(
        "https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1/careerService",
        {
          method: "POST",
          body: formDataToSend,
        }
      );

      const result = await response.json();

      if (response.ok) {
        toast({
          title: "Application submitted!",
          description: "We'll be in touch soon.",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
        onSubmit?.({
          ...formData,
          jobTitle: selectedJob?.title,
        });
        onClose();
      } else {
        throw new Error(result.message || "Submission failed");
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast({
        title: "Submission failed",
        description: error.message || "Something went wrong",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleNext = () => {
    if (activeStep === 0) {
      const newErrors = {};
      if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
      if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
      if (!/^\d{10}$/.test(formData.mobileNumber)) newErrors.mobileNumber = "Invalid mobile number";
      if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email address";
      setErrors(newErrors);
      if (Object.keys(newErrors).length > 0) return;
    }
    setActiveStep((prev) => prev + 1);
  };

  const handlePrev = () => {
    setActiveStep((prev) => prev - 1);
  };

  useEffect(() => {
    if (isOpen) {
      setFormData((prev) => ({
        ...prev,
        profession: selectedJob?.department || "",
      }));
    }
  }, [isOpen, selectedJob]);

  useEffect(() => {
    if (!isOpen) {
      setFormData({
        firstName: "",
        lastName: "",
        mobileNumber: "",
        email: "",
        profession: "",
        resume: null,
        coverLetter: "",
        yearsOfExperience: "",
      });
      setErrors({});
      setActiveStep(0);
      setCustomProfession("");
    }
  }, [isOpen]);

  useLayoutEffect(() => {
    if (scrollContainerRef.current && scrollPositionRef.current > 0) {
      scrollContainerRef.current.scrollTop = scrollPositionRef.current;
    }
  }, [activeStep]);

  useScrollLock(isOpen);

  const renderContent = () => (
    <>
      <JobDetails job={selectedJob} />
      <JobRequirements job={selectedJob} />

      <Box>
        <Heading as="h3" size="md" mb={6} color={textColor}>
          Application Form
        </Heading>
        <FormStepper activeStep={activeStep} steps={steps} />

        <form onSubmit={handleSubmit}>
          <Box>
            {activeStep === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <VStack spacing={6} align="stretch">
                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                    <InputField
                      icon={FiUser}
                      label="First Name"
                      name="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      error={errors.firstName}
                      placeholder="John"
                      isRequired
                    />
                    <InputField
                      icon={FiUser}
                      label="Last Name"
                      name="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      error={errors.lastName}
                      placeholder="Doe"
                      isRequired
                    />
                  </SimpleGrid>
                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                    <InputField
                      icon={FiPhone}
                      label="Mobile Number"
                      name="mobileNumber"
                      type="tel"
                      value={formData.mobileNumber}
                      onChange={handleInputChange}
                      error={errors.mobileNumber}
                      placeholder="1234567890"
                      isRequired
                    />
                    <InputField
                      icon={FiMail}
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      error={errors.email}
                      placeholder="john@example.com"
                      isRequired
                    />
                  </SimpleGrid>
                </VStack>
              </motion.div>
            )}

            {activeStep === 1 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <VStack spacing={6} align="stretch">
                  <FormControl isInvalid={!!errors.profession} isRequired>
                    <FormLabel
                      htmlFor="profession"
                      fontSize="sm"
                      fontWeight="medium"
                      color={useColorModeValue("gray.700", "gray.300")}
                    >
                      Profession
                    </FormLabel>
                    <InputGroup>
                      <InputLeftElement pointerEvents="none">
                        <Icon as={FiBriefcase} color={errors.profession ? "red.500" : "gray.400"} boxSize={4} />
                      </InputLeftElement>
                      <Select
                        id="profession"
                        name="profession"
                        value={formData.profession}
                        onChange={handleInputChange}
                        placeholder="Select your profession"
                        pl={10}
                        bg={useColorModeValue("white", "gray.800")}
                        _hover={{ bg: useColorModeValue("gray.50", "gray.700") }}
                        borderColor={errors.profession ? "red.500" : "gray.200"}
                      >
                        {professions.map((prof) => (
                          <option key={prof} value={prof}>
                            {prof}
                          </option>
                        ))}
                      </Select>
                    </InputGroup>
                    <FormErrorMessage fontSize="xs">{errors.profession}</FormErrorMessage>
                  </FormControl>

                  {formData.profession === "Others (please specify)" && (
                    <FormControl isRequired isInvalid={!!errors.profession}>
                      <FormLabel
                        htmlFor="customProfession"
                        fontSize="sm"
                        fontWeight="medium"
                        color={useColorModeValue("gray.700", "gray.300")}
                      >
                        Please specify your profession
                      </FormLabel>
                      <Input
                        id="customProfession"
                        name="customProfession"
                        value={customProfession}
                        onChange={handleCustomProfessionChange}
                        placeholder="Enter your profession"
                        bg={useColorModeValue("white", "gray.800")}
                        _hover={{ bg: useColorModeValue("gray.50", "gray.700") }}
                        _focus={{
                          borderColor: "orange.500",
                          boxShadow: "0 0 0 1px orange.500",
                        }}
                        borderColor={errors.profession ? "red.500" : "gray.200"}
                        fontSize="sm"
                      />
                      <FormErrorMessage fontSize="xs">{errors.profession}</FormErrorMessage>
                    </FormControl>
                  )}

                  <FormControl isRequired isInvalid={!!errors.yearsOfExperience}>
                    <FormLabel
                      htmlFor="yearsOfExperience"
                      fontSize="sm"
                      fontWeight="medium"
                      color={useColorModeValue("gray.700", "gray.300")}
                    >
                      Years of Experience
                    </FormLabel>
                    <InputGroup>
                      <InputLeftElement pointerEvents="none">
                        <Icon as={FiCalendar} color="gray.400" boxSize={4} />
                      </InputLeftElement>
                      <Input
                        id="yearsOfExperience"
                        name="yearsOfExperience"
                        type="number"
                        min="0"
                        max="50"
                        value={formData.yearsOfExperience || ""}
                        onChange={(e) => {
                          if (scrollContainerRef.current) {
                            scrollPositionRef.current = scrollContainerRef.current.scrollTop;
                          }
                          setFormData((prev) => ({
                            ...prev,
                            yearsOfExperience: e.target.value ? Number(e.target.value) : "",
                          }));
                          setErrors((prev) => ({ ...prev, yearsOfExperience: "" }));
                        }}
                        placeholder="e.g. 5"
                        bg={useColorModeValue("white", "gray.800")}
                        _hover={{ bg: useColorModeValue("gray.50", "gray.700") }}
                        _focus={{
                          borderColor: "orange.500",
                          boxShadow: "0 0 0 1px orange.500",
                        }}
                        borderColor={errors.yearsOfExperience ? "red.500" : "gray.200"}
                      />
                    </InputGroup>
                    <FormErrorMessage fontSize="xs">{errors.yearsOfExperience}</FormErrorMessage>
                  </FormControl>

                  <FileInput
                    icon={FiFile}
                    label="Upload Resume"
                    name="resume"
                    onChange={handleFileChange}
                    error={errors.resume}
                    isRequired
                    value={formData.resume}
                  />

                  <Box
                    p={4}
                    bg={useColorModeValue("blue.50", "blue.900")}
                    borderRadius="md"
                    borderLeft="4px solid"
                    borderColor={useColorModeValue("blue.400", "blue.500")}
                  >
                    <HStack spacing={3} align="flex-start">
                      <Icon as={FiInfo} color={useColorModeValue("blue.500", "blue.300")} boxSize={4} mt={1} />
                      <Text fontSize="sm">
                        Your resume should highlight your relevant experience, skills, and achievements. Make sure
                        it's up-to-date and tailored to the position you're applying for.
                      </Text>
                    </HStack>
                  </Box>
                </VStack>
              </motion.div>
            )}

            {activeStep === 2 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <VStack spacing={6} align="stretch">
                  <FormControl isInvalid={!!errors.coverLetter}>
                    <FormLabel
                      htmlFor="coverLetter"
                      fontSize="sm"
                      fontWeight="medium"
                      color={useColorModeValue("gray.700", "gray.300")}
                    >
                      Cover Letter (Optional)
                    </FormLabel>
                    <Textarea
                      id="coverLetter"
                      name="coverLetter"
                      value={formData.coverLetter}
                      onChange={handleInputChange}
                      placeholder="Tell us why you're a great fit for this position..."
                      rows={8}
                      bg={useColorModeValue("white", "gray.800")}
                      _hover={{ bg: useColorModeValue("gray.50", "gray.700") }}
                      _focus={{
                        borderColor: "orange.900",
                        boxShadow: "0 0 0 1px orange.500",
                        bg: useColorModeValue("white", "gray.800"),
                      }}
                      borderColor={errors.coverLetter ? "red.500" : "gray.200"}
                      fontSize="sm"
                    />
                    <FormErrorMessage fontSize="xs">{errors.coverLetter}</FormErrorMessage>
                  </FormControl>

                  <Box
                    p={4}
                    bg={useColorModeValue("green.50", "green.900")}
                    borderRadius="md"
                    borderLeft="4px solid"
                    borderColor={useColorModeValue("green.400", "green.500")}
                  >
                    <VStack align="flex-start" spacing={2}>
                      <HStack spacing={3}>
                        <Icon as={FiInfo} color={useColorModeValue("green.500", "green.300")} boxSize={4} />
                        <Text fontWeight="medium" fontSize="sm">
                          Tips for a great cover letter:
                        </Text>
                      </HStack>
                      <List spacing={1} pl={8} fontSize="sm">
                        <ListItem>
                          <ListIcon as={FiCheck} color={useColorModeValue("green.500", "green.300")} boxSize={3} />
                          Explain why you're interested in this position
                        </ListItem>
                        <ListItem>
                          <ListIcon as={FiCheck} color={useColorModeValue("green.500", "green.300")} boxSize={3} />
                          Highlight your most relevant skills and experiences
                        </ListItem>
                        <ListItem>
                          <ListIcon as={FiCheck} color={useColorModeValue("green.500", "green.300")} boxSize={3} />
                          Show how you can add value to the company
                        </ListItem>
                      </List>
                    </VStack>
                  </Box>
                </VStack>
              </motion.div>
            )}
          </Box>
        </form>
      </Box>
    </>
  );

  const FormFooter = () => (
    <Flex
      justify="space-between"
      pt={4}
      pb={4}
      px={{ base: 4, md: 6 }}
      borderTop="1px solid"
      borderColor={useColorModeValue("gray.200", "gray.700")}
      bg={useColorModeValue("gray.50", "gray.900")}
    >
      <Button
        onClick={handlePrev}
        isDisabled={activeStep === 0}
        leftIcon={<FiArrowLeft />}
        variant="outline"
        size={{ base: "sm", md: "md" }}
        fontWeight="medium"
        type="button"
      >
        Previous
      </Button>
      {activeStep < steps.length - 1 ? (
        <Button
          onClick={handleNext}
          rightIcon={<FiArrowRight />}
          color="white"
          bg="teal.900"
          size={{ base: "sm", md: "md" }}
          fontWeight="medium"
          type="button"
        >
          Next Step
        </Button>
      ) : (
        <Button
          onClick={handleSubmit}
          color="white"
          bg="teal.900"
          isLoading={isLoading}
          loadingText="Submitting"
          size={{ base: "sm", md: "md" }}
          fontWeight="medium"
        >
          Submit Application
        </Button>
      )}
    </Flex>
  );

  // Mobile: Drawer
  if (isMobile) {
    return (
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement="right"
        size="full"
        trapFocus={false}
        autoFocus={false}
        portalProps={{ containerRef: null }}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader
            bg={headerBg}
            color="white"
            py={4}
            px={4}
            position="sticky"
            top={0}
            zIndex={10}
            boxShadow="md"
          >
            <Flex justify="space-between" align="center">
              <VStack align="flex-start" spacing={0}>
                <Heading size="md" noOfLines={1}>
                  Apply for {selectedJob?.title}
                </Heading>
                <Text fontSize="xs" opacity={0.8}>
                  Complete the form below to apply
                </Text>
              </VStack>
              <DrawerCloseButton position="static" color="white" />
            </Flex>
          </DrawerHeader>

          <DrawerBody
            p={0}
            overflow="hidden"
            display="flex"
            flexDirection="column"
            height="100vh"
          >
            <Box
              ref={scrollContainerRef}
              flex="1"
              overflowY="auto"
              p={6}
              sx={{ WebkitOverflowScrolling: "touch" }}
            >
              {renderContent()}
            </Box>

            <DrawerFooter
              p={0}
              position="sticky"
              bottom={0}
              zIndex={10}
              boxShadow="0 -2px 10px rgba(0,0,0,0.05)"
            >
              <FormFooter />
            </DrawerFooter>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    );
  }

  // Desktop: Modal
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size={{ base: "full", md: "4xl" }}
      scrollBehavior="inside"
      trapFocus={false}
      autoFocus={false}
      portalProps={{ containerRef: null }}
    >
      <ModalOverlay />
      <ModalContent
        maxW={{ base: "100%", md: "900px" }}
        height={{ base: "100vh", md: "90vh" }}
        maxHeight="100vh"
        my={{ base: 0, md: "auto" }}
        borderRadius={{ base: 0, md: "md" }}
      >
        <ModalHeader
          bg={headerBg}
          color="white"
          py={4}
          px={6}
          borderTopRadius={{ base: 0, md: "md" }}
          position="sticky"
          top={0}
          zIndex={10}
          boxShadow="md"
        >
          <Flex justify="space-between" align="center">
            <VStack align="flex-start" spacing={0}>
              <Heading size="md" noOfLines={1}>
                Apply for {selectedJob?.title}
              </Heading>
              <Text fontSize="xs" opacity={0.8}>
                Complete the form below to apply
              </Text>
            </VStack>
            <ModalCloseButton position="static" color="white" />
          </Flex>
        </ModalHeader>

        <ModalBody
          p={0}
          overflow="hidden"
          display="flex"
          flexDirection="column"
          height="100%"
        >
          <Box
            ref={scrollContainerRef}
            flex="1"
            overflowY="auto"
            p={6}
            sx={{ WebkitOverflowScrolling: "touch" }}
          >
            {renderContent()}
          </Box>

          <ModalFooter
            p={0}
            position="sticky"
            bottom={0}
            zIndex={10}
            boxShadow="0 -2px 10px rgba(0,0,0,0.05)"
            bg={useColorModeValue("gray.50", "gray.900")}
          >
            <FormFooter />
          </ModalFooter>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ApplicationForm;