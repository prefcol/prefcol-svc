// import React, { useState } from 'react';
// import {
//     Box,
//     Heading,
//     FormControl,
//     FormLabel,
//     Input,
//     Select,
//     Button,
//     VStack,
//     useToast,
// } from '@chakra-ui/react';

// const CreateUser = () => {
//     const [userData, setUserData] = useState({
//         name: '',
//         email: '',
//         role: '',
//     });

//     const toast = useToast();

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setUserData((prevData) => ({ ...prevData, [name]: value }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (!userData.name || !userData.email || !userData.role) {
//             toast({
//                 title: 'Error',
//                 description: 'All fields are required.',
//                 status: 'error',
//                 duration: 3000,
//                 isClosable: true,
//             });
//             return;
//         }

//         // Simulate data submission logic
//         console.log('User Data:', userData);

//         toast({
//             title: 'Success',
//             description: 'User created successfully.',
//             status: 'success',
//             duration: 3000,
//             isClosable: true,
//         });

//         // Clear form after submission
//         setUserData({ name: '', email: '', role: '' });
//     };

//     return (
//         <Box
//             p={8}
//             bg="gray.500"
//             color="white"
//             borderRadius="lg"
//             boxShadow="lg"
//             maxW="400px"
//             mx="auto"
//             mt={10}
//         >
//             <Heading size="lg" textAlign="center" mb={6}>
//                 Create User
//             </Heading>

//             <form onSubmit={handleSubmit}>
//                 <VStack spacing={4}>
//                     <FormControl isRequired>
//                         <FormLabel>Name</FormLabel>
//                         <Input
//                             name="name"
//                             value={userData.name}
//                             onChange={handleChange}
//                             placeholder="Enter user name"
//                         />
//                     </FormControl>

//                     <FormControl isRequired>
//                         <FormLabel>Email</FormLabel>
//                         <Input
//                             type="email"
//                             name="email"
//                             value={userData.email}
//                             onChange={handleChange}
//                             placeholder="Enter user email"
//                         />
//                     </FormControl>

//                     <FormControl isRequired>
//                         <FormLabel>Role</FormLabel>
//                         <Select
//                             name="role"
//                             value={userData.role}
//                             onChange={handleChange}
//                             placeholder="Select role"
//                         >
//                             <option value="student">Student</option>
//                             <option value="teacher">Teacher</option>
//                             <option value="admin">Admin</option>
//                         </Select>
//                     </FormControl>

//                     <Button
//                         bg={"red.700"}
//                         color={'white'}
//                         width="full"
//                         type="submit"
//                         _hover={{ transform: 'scale(1.05)' }}
//                     >
//                         Create User
//                     </Button>
//                 </VStack>
//             </form>
//         </Box>
//     );
// };

// export default CreateUser;
// "use client";

// import { useState } from "react";
// import {
//   Box,
//   Heading,
//   FormControl,
//   FormLabel,
//   Input,
//   Select,
//   Button,
//   VStack,
//   HStack,
//   useToast,
//   Table,
//   Thead,
//   Tbody,
//   Tr,
//   Th,
//   Td,
//   IconButton,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalFooter,
//   ModalBody,
//   ModalCloseButton,
//   useDisclosure,
//   Tabs,
//   TabList,
//   TabPanels,
//   Tab,
//   TabPanel,
//   Container,
//   InputGroup,
//   InputRightElement,
//   Text,
//   Badge,
//   Flex,
//   Divider,
//   useColorModeValue,
//   Card,
//   CardHeader,
//   CardBody,
//   Stack,
//   Avatar,
//   InputLeftAddon,
// } from "@chakra-ui/react";
// import {
//   EditIcon,
//   DeleteIcon,
//   ViewIcon,
//   ViewOffIcon,
//   AddIcon,
//   SearchIcon,
// } from "@chakra-ui/icons";

// const TeacherManagement = () => {
//   // Sample initial data
//   const initialTeachers = [
//     {
//         id: 1,
//         name: "Karthiga",
//         email: "karthiga@example.com",
//         subject: "Computer Science",
//         phone: "789-456-1230",
//         username: "karthiga",
//         status: "active",
//       },
//       {
//         id: 2,
//         name: "Radhika",
//         email: "radhika@example.com",
//         subject: "Geography",
//         phone: "456-789-0123",
//         username: "radhika",
//         status: "active",
//       },
//       {
//         id: 2,
//         name: "demo ",
//         email: "demo@example.com",
//         subject: "Geography",
//         phone: "456-789-0123",
//         username: "demo",
//         status: "inactive",
//       }
      
//   ];

//   // State management
//   const [teachers, setTeachers] = useState(initialTeachers);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [formData, setFormData] = useState({
//     id: null,
//     name: "",
//     email: "",
//     subject: "",
//     phone: "",
//     username: "",
//     password: "",
//     confirmPassword: "",
//     status: "active",
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [isEditing, setIsEditing] = useState(false);
//   const [errors, setErrors] = useState({});

//   // Modal controls
//   const {
//     isOpen: isDeleteModalOpen,
//     onOpen: onDeleteModalOpen,
//     onClose: onDeleteModalClose,
//   } = useDisclosure();
//   const {
//     isOpen: isEditModalOpen,
//     onOpen: onEditModalOpen,
//     onClose: onEditModalClose,
//   } = useDisclosure();
//   const [teacherToDelete, setTeacherToDelete] = useState(null);

//   const toast = useToast();

//   // Filter teachers based on search query
//   const filteredTeachers = teachers.filter(
//     (teacher) =>
//       teacher.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       teacher.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       teacher.subject.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   // Handle form input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));

//     // Clear error for this field when user types
//     if (errors[name]) {
//       setErrors((prev) => ({ ...prev, [name]: null }));
//     }
//   };

//   // Validate form
//   const validateForm = () => {
//     const newErrors = {};

//     if (!formData.name.trim()) newErrors.name = "Name is required";
//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required";
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = "Email is invalid";
//     }

//     if (!formData.username.trim()) newErrors.username = "Username is required";

//     if (!isEditing) {
//       if (!formData.password) {
//         newErrors.password = "Password is required";
//       } else if (formData.password.length < 6) {
//         newErrors.password = "Password must be at least 6 characters";
//       }

//       if (formData.password !== formData.confirmPassword) {
//         newErrors.confirmPassword = "Passwords do not match";
//       }
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   // Handle form submission for creating a new teacher
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!validateForm()) return;

//     const newTeacher = {
//       id: Date.now(),
//       name: formData.name,
//       email: formData.email,
//       subject: formData.subject,
//       phone: formData.phone,
//       username: formData.username,
//       status: formData.status,
//     };

//     setTeachers([...teachers, newTeacher]);

//     toast({
//       title: "Success",
//       description: "Teacher created successfully.",
//       status: "success",
//       duration: 3000,
//       isClosable: true,
//     });

//     // Reset form
//     resetForm();
//   };

//   // Reset form to initial state
//   const resetForm = () => {
//     setFormData({
//       id: null,
//       name: "",
//       email: "",
//       subject: "",
//       phone: "",
//       username: "",
//       password: "",
//       confirmPassword: "",
//       status: "active",
//     });
//     setErrors({});
//     setIsEditing(false);
//   };

//   // Open delete confirmation modal
//   const handleDeleteClick = (teacher) => {
//     setTeacherToDelete(teacher);
//     onDeleteModalOpen();
//   };

//   // Delete teacher
//   const confirmDelete = () => {
//     setTeachers(
//       teachers.filter((teacher) => teacher.id !== teacherToDelete.id)
//     );

//     toast({
//       title: "Teacher Deleted",
//       description: `${teacherToDelete.name} has been removed.`,
//       status: "info",
//       duration: 3000,
//       isClosable: true,
//     });

//     onDeleteModalClose();
//   };

//   // Open edit modal and populate form
//   const handleEditClick = (teacher) => {
//     setFormData({
//       ...teacher,
//       password: "",
//       confirmPassword: "",
//     });
//     setIsEditing(true);
//     onEditModalOpen();
//   };

//   // Update teacher
//   const handleUpdate = (e) => {
//     e.preventDefault();

//     if (!validateForm()) return;

//     setTeachers(
//       teachers.map((teacher) =>
//         teacher.id === formData.id ? { ...formData } : teacher
//       )
//     );

//     toast({
//       title: "Teacher Updated",
//       description: `${formData.name}'s information has been updated.`,
//       status: "success",
//       duration: 3000,
//       isClosable: true,
//     });

//     onEditModalClose();
//     resetForm();
//   };

//   // Background colors
//   const bgColor = useColorModeValue("white", "gray.800");
//   const cardBgColor = useColorModeValue("white", "gray.700");
//   const headerBgColor = useColorModeValue("teal.500", "teal.400");

//   return (
//     <Container maxW="container.xl" py={5}>
//       <Card boxShadow="xl" borderRadius="lg" overflow="hidden">
//         <CardHeader bg={headerBgColor} color="white" py={4}>
//           <Heading size="lg" textAlign="center">
//             Teacher Management System
//           </Heading>
//         </CardHeader>

//         <CardBody p={0}>
//           <Tabs isFitted variant="enclosed" colorScheme="teal">
//             <TabList bg="gray.100">
//               <Tab fontWeight="semibold">Add Teacher</Tab>
//               <Tab fontWeight="semibold">View Teachers</Tab>
//             </TabList>

//             <TabPanels>
//               {/* Add Teacher Tab */}
//               <TabPanel>
//                 <Box p={6} bg={bgColor} borderRadius="md">
//                   <form onSubmit={handleSubmit}>
//                     <VStack spacing={5} align="stretch">
//                       <Heading size="md" mb={2}>
//                         Create New Teacher Account
//                       </Heading>
//                       <Divider />

//                       <Stack
//                         direction={{ base: "column", md: "row" }}
//                         spacing={5}
//                       >
//                         <FormControl isRequired isInvalid={errors.name}>
//                           <FormLabel>Full Name</FormLabel>
//                           <Input
//                             name="name"
//                             value={formData.name}
//                             onChange={handleChange}
//                             placeholder="Enter teacher's full name"
//                           />
//                           {errors.name && (
//                             <Text color="red.500" fontSize="sm">
//                               {errors.name}
//                             </Text>
//                           )}
//                         </FormControl>

//                         <FormControl isRequired isInvalid={errors.email}>
//                           <FormLabel>Email</FormLabel>
//                           <Input
//                             type="email"
//                             name="email"
//                             value={formData.email}
//                             onChange={handleChange}
//                             placeholder="Enter email address"
//                           />
//                           {errors.email && (
//                             <Text color="red.500" fontSize="sm">
//                               {errors.email}
//                             </Text>
//                           )}
//                         </FormControl>
//                       </Stack>

//                       <Stack
//                         direction={{ base: "column", md: "row" }}
//                         spacing={5}
//                       >
//                         <FormControl>
//                           <FormLabel>Subject</FormLabel>
//                           <Select
//                             name="subject"
//                             value={formData.subject}
//                             onChange={handleChange}
//                             placeholder="Select subject"
//                           >
//                             <option value="Software Development">
//                               Software Development
//                             </option>
//                             <option value="Web Development">
//                               Web Development
//                             </option>
//                             <option value="Data Science">Data Science</option>
//                             <option value="Cybersecurity">Cybersecurity</option>
//                             <option value="Cloud Computing">
//                               Cloud Computing
//                             </option>
//                             <option value="DevOps">DevOps</option>
//                             <option value="Artificial Intelligence">
//                               Artificial Intelligence
//                             </option>
//                             <option value="Machine Learning">
//                               Machine Learning
//                             </option>
//                             <option value="Blockchain Technology">
//                               Blockchain Technology
//                             </option>
//                             <option value="Computer Networking">
//                               Computer Networking
//                             </option>
//                             <option value="Database Management">
//                               Database Management
//                             </option>
//                           </Select>
//                         </FormControl>

//                         <FormControl>
//                           <FormLabel>Phone Number</FormLabel>
//                           <InputGroup>
//                             <InputLeftAddon children="+91" />
//                             <Input
//                               type="tel"
//                               name="phone"
//                               value={formData.phone}
//                               onChange={handleChange}
//                               placeholder="Phone number"
//                             />
//                           </InputGroup>
//                         </FormControl>
//                       </Stack>

//                       <Divider />
//                       <Heading size="sm" mb={2}>
//                         Login Credentials
//                       </Heading>

//                       <Stack
//                         direction={{ base: "column", md: "row" }}
//                         spacing={5}
//                       >
//                         <FormControl isRequired isInvalid={errors.username}>
//                           <FormLabel>Username</FormLabel>
//                           <Input
//                             name="username"
//                             value={formData.username}
//                             onChange={handleChange}
//                             placeholder="Create username"
//                           />
//                           {errors.username && (
//                             <Text color="red.500" fontSize="sm">
//                               {errors.username}
//                             </Text>
//                           )}
//                         </FormControl>

//                         <FormControl isRequired isInvalid={errors.password}>
//                           <FormLabel>Password</FormLabel>
//                           <InputGroup>
//                             <Input
//                               type={showPassword ? "text" : "password"}
//                               name="password"
//                               value={formData.password}
//                               onChange={handleChange}
//                               placeholder="Create password"
//                             />
//                             <InputRightElement width="4.5rem">
//                               <IconButton
//                                 h="1.75rem"
//                                 size="sm"
//                                 onClick={() => setShowPassword(!showPassword)}
//                                 icon={
//                                   showPassword ? <ViewOffIcon /> : <ViewIcon />
//                                 }
//                                 aria-label={
//                                   showPassword
//                                     ? "Hide password"
//                                     : "Show password"
//                                 }
//                               />
//                             </InputRightElement>
//                           </InputGroup>
//                           {errors.password && (
//                             <Text color="red.500" fontSize="sm">
//                               {errors.password}
//                             </Text>
//                           )}
//                         </FormControl>
//                       </Stack>

//                       <FormControl
//                         isRequired
//                         isInvalid={errors.confirmPassword}
//                       >
//                         <FormLabel>Confirm Password</FormLabel>
//                         <InputGroup>
//                           <Input
//                             type={showConfirmPassword ? "text" : "password"}
//                             name="confirmPassword"
//                             value={formData.confirmPassword}
//                             onChange={handleChange}
//                             placeholder="Confirm password"
//                           />
//                           <InputRightElement width="4.5rem">
//                             <IconButton
//                               h="1.75rem"
//                               size="sm"
//                               onClick={() =>
//                                 setShowConfirmPassword(!showConfirmPassword)
//                               }
//                               icon={
//                                 showConfirmPassword ? (
//                                   <ViewOffIcon />
//                                 ) : (
//                                   <ViewIcon />
//                                 )
//                               }
//                               aria-label={
//                                 showConfirmPassword
//                                   ? "Hide password"
//                                   : "Show password"
//                               }
//                             />
//                           </InputRightElement>
//                         </InputGroup>
//                         {errors.confirmPassword && (
//                           <Text color="red.500" fontSize="sm">
//                             {errors.confirmPassword}
//                           </Text>
//                         )}
//                       </FormControl>

//                       <FormControl>
//                         <FormLabel>Status</FormLabel>
//                         <Select
//                           name="status"
//                           value={formData.status}
//                           onChange={handleChange}
//                         >
//                           <option value="active">Active</option>
//                           <option value="inactive">Inactive</option>
//                           <option value="pending">Pending</option>
//                         </Select>
//                       </FormControl>

//                       <HStack spacing={4} justify="flex-end" pt={4}>
//                         <Button colorScheme="gray" onClick={resetForm}>
//                           Reset
//                         </Button>
//                         <Button
//                           colorScheme="teal"
//                           type="submit"
//                           leftIcon={<AddIcon />}
//                         >
//                           Create Teacher
//                         </Button>
//                       </HStack>
//                     </VStack>
//                   </form>
//                 </Box>
//               </TabPanel>

//               {/* View Teachers Tab */}
//               <TabPanel>
//                 <Box p={6} bg={bgColor} borderRadius="md">
//                   <VStack spacing={5} align="stretch">
//                     <Flex
//                       justify="space-between"
//                       align="center"
//                       wrap="wrap"
//                       gap={3}
//                     >
//                       <Heading size="md">Teacher Directory</Heading>
//                       <InputGroup maxW="300px">
//                         <InputLeftAddon children={<SearchIcon />} />
//                         <Input
//                           placeholder="Search teachers..."
//                           value={searchQuery}
//                           onChange={(e) => setSearchQuery(e.target.value)}
//                         />
//                       </InputGroup>
//                     </Flex>

//                     <Box overflowX="auto">
//                       <Table variant="simple" size={{ base: "sm", md: "md" }}>
//                         <Thead bg="gray.100">
//                           <Tr>
//                             <Th>Name</Th>
//                             <Th>Email</Th>
//                             <Th>Subject</Th>
//                             <Th>Status</Th>
//                             <Th>Actions</Th>
//                           </Tr>
//                         </Thead>
//                         <Tbody>
//                           {filteredTeachers.length > 0 ? (
//                             filteredTeachers.map((teacher) => (
//                               <Tr key={teacher.id}>
//                                 <Td>
//                                   <Flex align="center">
//                                     <Avatar
//                                       size="sm"
//                                       name={teacher.name}
//                                       mr={2}
//                                     />
//                                     {teacher.name}
//                                   </Flex>
//                                 </Td>
//                                 <Td>{teacher.email}</Td>
//                                 <Td>{teacher.subject || "Not assigned"}</Td>
//                                 <Td>
//                                   <Badge
//                                     colorScheme={
//                                       teacher.status === "active"
//                                         ? "green"
//                                         : teacher.status === "inactive"
//                                         ? "red"
//                                         : "yellow"
//                                     }
//                                   >
//                                     {teacher.status}
//                                   </Badge>
//                                 </Td>
//                                 <Td>
//                                   <HStack spacing={2}>
//                                     <IconButton
//                                       icon={<EditIcon />}
//                                       colorScheme="teal"
//                                       size="sm"
//                                       onClick={() => handleEditClick(teacher)}
//                                       aria-label="Edit teacher"
//                                     />
//                                     <IconButton
//                                       icon={<DeleteIcon />}
//                                       colorScheme="red"
//                                       size="sm"
//                                       onClick={() => handleDeleteClick(teacher)}
//                                       aria-label="Delete teacher"
//                                     />
//                                   </HStack>
//                                 </Td>
//                               </Tr>
//                             ))
//                           ) : (
//                             <Tr>
//                               <Td colSpan={5} textAlign="center" py={4}>
//                                 No teachers found
//                               </Td>
//                             </Tr>
//                           )}
//                         </Tbody>
//                       </Table>
//                     </Box>
//                   </VStack>
//                 </Box>
//               </TabPanel>
//             </TabPanels>
//           </Tabs>
//         </CardBody>
//       </Card>

//       {/* Delete Confirmation Modal */}
//       <Modal isOpen={isDeleteModalOpen} onClose={onDeleteModalClose}>
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>Confirm Delete</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody>
//             Are you sure you want to delete {teacherToDelete?.name}? This action
//             cannot be undone.
//           </ModalBody>
//           <ModalFooter>
//             <Button colorScheme="gray" mr={3} onClick={onDeleteModalClose}>
//               Cancel
//             </Button>
//             <Button colorScheme="red" onClick={confirmDelete}>
//               Delete
//             </Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>

//       {/* Edit Teacher Modal */}
//       <Modal isOpen={isEditModalOpen} onClose={onEditModalClose} size="xl">
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>Edit Teacher</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody>
//             <form onSubmit={handleUpdate}>
//               <VStack spacing={4} align="stretch">
//                 <Stack direction={{ base: "column", md: "row" }} spacing={4}>
//                   <FormControl isRequired isInvalid={errors.name}>
//                     <FormLabel>Full Name</FormLabel>
//                     <Input
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                     />
//                     {errors.name && (
//                       <Text color="red.500" fontSize="sm">
//                         {errors.name}
//                       </Text>
//                     )}
//                   </FormControl>

//                   <FormControl isRequired isInvalid={errors.email}>
//                     <FormLabel>Email</FormLabel>
//                     <Input
//                       type="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                     />
//                     {errors.email && (
//                       <Text color="red.500" fontSize="sm">
//                         {errors.email}
//                       </Text>
//                     )}
//                   </FormControl>
//                 </Stack>

//                 <Stack direction={{ base: "column", md: "row" }} spacing={4}>
//                   <FormControl>
//                     <FormLabel>Subject</FormLabel>
//                     <Select
//                       name="subject"
//                       value={formData.subject}
//                       onChange={handleChange}
//                       placeholder="Select subject"
//                     >
//                       <option value="Mathematics">Mathematics</option>
//                       <option value="Science">Science</option>
//                       <option value="English">English</option>
//                       <option value="History">History</option>
//                       <option value="Geography">Geography</option>
//                       <option value="Computer Science">Computer Science</option>
//                       <option value="Physical Education">
//                         Physical Education
//                       </option>
//                       <option value="Art">Art</option>
//                       <option value="Music">Music</option>
//                     </Select>
//                   </FormControl>

//                   <FormControl>
//                     <FormLabel>Phone Number</FormLabel>
//                     <InputGroup>
//                       <InputLeftAddon children="+1" />
//                       <Input
//                         type="tel"
//                         name="phone"
//                         value={formData.phone}
//                         onChange={handleChange}
//                       />
//                     </InputGroup>
//                   </FormControl>
//                 </Stack>

//                 <FormControl isRequired isInvalid={errors.username}>
//                   <FormLabel>Username</FormLabel>
//                   <Input
//                     name="username"
//                     value={formData.username}
//                     onChange={handleChange}
//                   />
//                   {errors.username && (
//                     <Text color="red.500" fontSize="sm">
//                       {errors.username}
//                     </Text>
//                   )}
//                 </FormControl>

//                 <FormControl>
//                   <FormLabel>Status</FormLabel>
//                   <Select
//                     name="status"
//                     value={formData.status}
//                     onChange={handleChange}
//                   >
//                     <option value="active">Active</option>
//                     <option value="inactive">Inactive</option>
//                     <option value="pending">Pending</option>
//                   </Select>
//                 </FormControl>

//                 <Text fontSize="sm" color="gray.500">
//                   Leave password fields empty to keep the current password
//                 </Text>

//                 <Stack direction={{ base: "column", md: "row" }} spacing={4}>
//                   <FormControl isInvalid={errors.password}>
//                     <FormLabel>New Password (Optional)</FormLabel>
//                     <InputGroup>
//                       <Input
//                         type={showPassword ? "text" : "password"}
//                         name="password"
//                         value={formData.password}
//                         onChange={handleChange}
//                         placeholder="Enter new password"
//                       />
//                       <InputRightElement width="4.5rem">
//                         <IconButton
//                           h="1.75rem"
//                           size="sm"
//                           onClick={() => setShowPassword(!showPassword)}
//                           icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
//                           aria-label={
//                             showPassword ? "Hide password" : "Show password"
//                           }
//                         />
//                       </InputRightElement>
//                     </InputGroup>
//                     {errors.password && (
//                       <Text color="red.500" fontSize="sm">
//                         {errors.password}
//                       </Text>
//                     )}
//                   </FormControl>

//                   <FormControl isInvalid={errors.confirmPassword}>
//                     <FormLabel>Confirm New Password</FormLabel>
//                     <InputGroup>
//                       <Input
//                         type={showConfirmPassword ? "text" : "password"}
//                         name="confirmPassword"
//                         value={formData.confirmPassword}
//                         onChange={handleChange}
//                         placeholder="Confirm new password"
//                       />
//                       <InputRightElement width="4.5rem">
//                         <IconButton
//                           h="1.75rem"
//                           size="sm"
//                           onClick={() =>
//                             setShowConfirmPassword(!showConfirmPassword)
//                           }
//                           icon={
//                             showConfirmPassword ? <ViewOffIcon /> : <ViewIcon />
//                           }
//                           aria-label={
//                             showConfirmPassword
//                               ? "Hide password"
//                               : "Show password"
//                           }
//                         />
//                       </InputRightElement>
//                     </InputGroup>
//                     {errors.confirmPassword && (
//                       <Text color="red.500" fontSize="sm">
//                         {errors.confirmPassword}
//                       </Text>
//                     )}
//                   </FormControl>
//                 </Stack>
//               </VStack>

//               <ModalFooter px={0}>
//                 <Button colorScheme="gray" mr={3} onClick={onEditModalClose}>
//                   Cancel
//                 </Button>
//                 <Button colorScheme="teal" type="submit">
//                   Update Teacher
//                 </Button>
//               </ModalFooter>
//             </form>
//           </ModalBody>
//         </ModalContent>
//       </Modal>
//     </Container>
//   );
// };

// export default TeacherManagement;

"use client";

import React, { useState, useEffect } from "react";
import {
  Layout,
  Form,
  Input,
  Select,
  Button,
  Table,
  Modal,
  Tabs,
  Card,
  Avatar,
  Badge,
  Space,
  InputNumber,
  ConfigProvider,
  theme as antdTheme
} from "antd";
import {
  UserAddOutlined,
  EditOutlined,
  DeleteOutlined,
  SearchOutlined,
  EyeOutlined,
  EyeInvisibleOutlined,
  PlusOutlined
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Content } = Layout;
const { TabPane } = Tabs;
const { Option } = Select;

// Custom theme with #FF7A00
const customTheme = {
  token: {
    colorPrimary: "#FF7A00",
    colorBgContainer: "#ffffff",
    colorText: "#333333",
    colorTextSecondary: "#666666",
    colorBorder: "#e0e0e0",
    borderRadius: 8,
  },
  components: {
    Button: {
      colorPrimary: "#FF7A00",
      colorPrimaryHover: "#e06700",
      colorPrimaryActive: "#c05500",
    },
    Table: {
      headerBg: "#fafafa",
      rowHoverBg: "#fff2e8",
    }
  }
};

const TeacherManagement = () => {
  const [teachers, setTeachers] = useState([
    {
      id: 1,
      name: "Karthiga",
      email: "karthiga@example.com",
      subject: "Computer Science",
      phone: "7894561230",
      username: "karthiga",
      status: "active",
    },
    {
      id: 2,
      name: "Radhika",
      email: "radhika@example.com",
      subject: "Geography",
      phone: "4567890123",
      username: "radhika",
      status: "active",
    },
    {
      id: 3,
      name: "Demo",
      email: "demo@example.com",
      subject: "Geography",
      phone: "4567890123",
      username: "demo",
      status: "inactive",
    }
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [form] = Form.useForm();
  const [editForm] = Form.useForm();
  const [isEditing, setIsEditing] = useState(false);
  const [editingRecord, setEditingRecord] = useState(null);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [teacherToDelete, setTeacherToDelete] = useState(null);
  const [activeTab, setActiveTab] = useState("1");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  // Filter teachers
  const filteredTeachers = teachers.filter(
    (teacher) =>
      teacher.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      teacher.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      teacher.subject.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle create
  const handleCreate = (values) => {
    const newTeacher = {
      id: Date.now(),
      ...values,
      phone: values.phone ? String(values.phone) : "",
    };
    setTeachers([...teachers, newTeacher]);
    form.resetFields();
    setActiveTab("2");
  };

  // Handle edit
  const handleEdit = (record) => {
    setEditingRecord(record);
    editForm.setFieldsValue({
      ...record,
      phone: record.phone ? Number(record.phone) : null,
    });
    setIsEditing(true);
  };

  const handleUpdate = (values) => {
  // Only include password if it's provided
  const { password, confirmPassword, ...updateData } = values;

  const updatedTeacher = {
    ...editingRecord,
    ...updateData,
    phone: updateData.phone ? String(updateData.phone) : editingRecord.phone,
  };

  // Only update password if a new one is provided
  if (password && password.trim() !== "") {
    updatedTeacher.password = password;
  }

  const updatedTeachers = teachers.map((teacher) =>
    teacher.id === editingRecord.id ? updatedTeacher : teacher
  );

  setTeachers(updatedTeachers);
  setIsEditing(false);
  editForm.resetFields();
};
  // const handleUpdate = (values) => {
  //   const updatedTeachers = teachers.map((teacher) =>
  //     teacher.id === editingRecord.id
  //       ? { ...teacher, ...values, phone: values.phone ? String(values.phone) : "" }
  //       : teacher
  //   );
  //   setTeachers(updatedTeachers);
  //   setIsEditing(false);
  //   editForm.resetFields();
  // };

  // // Handle delete
  // const showDeleteConfirm = (record) => {
  //   setTeacherToDelete(record);
  //   setDeleteModalVisible(true);
  // };

  const handleDelete = () => {
    setTeachers(teachers.filter((teacher) => teacher.id !== teacherToDelete.id));
    setDeleteModalVisible(false);
  };

  // Columns for table
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <Space>
          <Avatar size="small" style={{ backgroundColor: "#FF7A00" }}>
            {text.charAt(0)}
          </Avatar>
          {text}
        </Space>
      ),
    },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Subject", dataIndex: "subject", key: "subject" },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <Badge
          status={status === "active" ? "success" : status === "inactive" ? "error" : "warning"}
          text={status.charAt(0).toUpperCase() + status.slice(1)}
        />
      ),
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Space size="middle">
          <Button
            type="text"
            icon={<EditOutlined />}
            onClick={() => handleEdit(record)}
            style={{ color: "#FF7A00" }}
          />
          <Button
            type="text"
            icon={<DeleteOutlined />}
            danger
            onClick={() => showDeleteConfirm(record)}
          />
        </Space>
      ),
    },
  ];

  return (
    <ConfigProvider theme={customTheme}>
      <Content style={{ margin: "24px 16px", padding: 24, minHeight: "100vh" }}>
        <Card
          title="Teacher Management System"
          bordered={false}
          headStyle={{ backgroundColor: "#FF7A00", color: "white", fontSize: "18px" }}
        >
          <Tabs
            activeKey={activeTab}
            onChange={setActiveTab}
            tabBarStyle={{ marginBottom: 24 }}
            items={[
              {
                key: "1",
                label: "Add Teacher",
                children: (
                  <Form
                    form={form}
                    layout="vertical"
                    onFinish={handleCreate}
                    initialValues={{ status: "active" }}
                  >
                    <h3 style={{ marginBottom: 16 }}>Create New Teacher Account</h3>
                    
                    <Form.Item
                      name="name"
                      label="Full Name"
                      rules={[{ required: true, message: "Please enter name!" }]}
                    >
                      <Input placeholder="Enter teacher's full name" />
                    </Form.Item>

                    <Form.Item
                      name="email"
                      label="Email"
                      rules={[
                        { required: true, message: "Please enter email!" },
                        { type: "email", message: "Please enter valid email!" }
                      ]}
                    >
                      <Input placeholder="Enter email address" />
                    </Form.Item>

                    <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                      <Form.Item
                        name="subject"
                        label="Subject"
                        style={{ flex: 1, minWidth: 200 }}
                      >
                        <Select placeholder="Select subject">
                          <Option value="Software Development">Software Development</Option>
                          <Option value="Web Development">Web Development</Option>
                          <Option value="Data Science">Data Science</Option>
                          <Option value="Cybersecurity">Cybersecurity</Option>
                          <Option value="Cloud Computing">Cloud Computing</Option>
                          <Option value="DevOps">DevOps</Option>
                          <Option value="Artificial Intelligence">Artificial Intelligence</Option>
                          <Option value="Machine Learning">Machine Learning</Option>
                          <Option value="Blockchain Technology">Blockchain Technology</Option>
                          <Option value="Computer Networking">Computer Networking</Option>
                          <Option value="Database Management">Database Management</Option>
                        </Select>
                      </Form.Item>

                      <Form.Item
                        name="phone"
                        label="Phone Number"
                        style={{ flex: 1, minWidth: 200 }}
                      >
                        <InputNumber
                          style={{ width: "100%" }}
                          addonBefore="+91"
                          placeholder="Phone number"
                        />
                      </Form.Item>
                    </div>

                    <h4 style={{ marginTop: 24, marginBottom: 16 }}>Login Credentials</h4>

                    <Form.Item
                      name="username"
                      label="Username"
                      rules={[{ required: true, message: "Please enter username!" }]}
                    >
                      <Input placeholder="Create username" />
                    </Form.Item>

                    <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                      <Form.Item
                        name="password"
                        label="Password"
                        style={{ flex: 1, minWidth: 200 }}
                        rules={[
                          { required: true, message: "Please enter password!" },
                          { min: 6, message: "Password must be at least 6 characters" }
                        ]}
                      >
                        <Input.Password
                          placeholder="Create password"
                          iconRender={(visible) =>
                            visible ? <EyeOutlined /> : <EyeInvisibleOutlined />
                          }
                        />
                      </Form.Item>

                      <Form.Item
                        name="confirmPassword"
                        label="Confirm Password"
                        style={{ flex: 1, minWidth: 200 }}
                        dependencies={['password']}
                        rules={[
                          { required: true, message: "Please confirm password!" },
                          ({ getFieldValue }) => ({
                            validator(_, value) {
                              if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                              }
                              return Promise.reject(new Error('Passwords do not match!'));
                            },
                          }),
                        ]}
                      >
                        <Input.Password
                          placeholder="Confirm password"
                          iconRender={(visible) =>
                            visible ? <EyeOutlined /> : <EyeInvisibleOutlined />
                          }
                        />
                      </Form.Item>
                    </div>

                    <Form.Item name="status" label="Status">
                      <Select>
                        <Option value="active">Active</Option>
                        <Option value="inactive">Inactive</Option>
                        <Option value="pending">Pending</Option>
                      </Select>
                    </Form.Item>

                    <Form.Item>
                      <Space>
                        <Button type="primary" htmlType="submit" icon={<PlusOutlined />}>
                          Create Teacher
                        </Button>
                        <Button onClick={() => form.resetFields()}>Reset</Button>
                      </Space>
                    </Form.Item>
                  </Form>
                ),
              },
              {
                key: "2",
                label: "View Teachers",
                children: (
                  <>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16, flexWrap: "wrap", gap: 16 }}>
                      <h3 style={{ margin: 0 }}>Teacher Directory</h3>
                      <Input
                        placeholder="Search teachers..."
                        prefix={<SearchOutlined />}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        style={{ width: 300 }}
                      />
                    </div>

                    <Table
                      dataSource={filteredTeachers}
                      columns={columns}
                      rowKey="id"
                      pagination={{ pageSize: 10 }}
                      scroll={{ x: 800 }}
                    />
                  </>
                ),
              },
            ]}
          />
        </Card>

        {/* Edit Modal */}
       <Modal
  title="Edit Teacher"
  open={isEditing}
  onCancel={() => {
    setIsEditing(false);
    editForm.resetFields(); // This already clears fields
    // Optional: explicitly remove password values
    editForm.setFieldsValue({ password: '', confirmPassword: '' });
  }}
  footer={null}
  width={700}
>
          <Form
            form={editForm}
            layout="vertical"
            onFinish={handleUpdate}
          >
            <Form.Item
              name="name"
              label="Full Name"
              rules={[{ required: true, message: "Please enter name!" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="email"
              label="Email"
              rules={[
                { required: true, message: "Please enter email!" },
                { type: "email", message: "Please enter valid email!" }
              ]}
            >
              <Input />
            </Form.Item>

            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <Form.Item name="subject" label="Subject" style={{ flex: 1, minWidth: 200 }}>
                <Select placeholder="Select subject">
                  <Option value="Mathematics">Mathematics</Option>
                  <Option value="Science">Science</Option>
                  <Option value="English">English</Option>
                  <Option value="History">History</Option>
                  <Option value="Geography">Geography</Option>
                  <Option value="Computer Science">Computer Science</Option>
                  <Option value="Physical Education">Physical Education</Option>
                  <Option value="Art">Art</Option>
                  <Option value="Music">Music</Option>
                </Select>
              </Form.Item>

              <Form.Item name="phone" label="Phone Number" style={{ flex: 1, minWidth: 200 }}>
                <InputNumber
                  style={{ width: "100%" }}
                  addonBefore="+91"
                />
              </Form.Item>
            </div>

            <Form.Item
              name="username"
              label="Username"
              rules={[{ required: true, message: "Please enter username!" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item name="status" label="Status">
              <Select>
                <Option value="active">Active</Option>
                <Option value="inactive">Inactive</Option>
                <Option value="pending">Pending</Option>
              </Select>
            </Form.Item>

            <p style={{ color: "#666", fontSize: "12px", marginBottom: 16 }}>
              Leave password fields empty to keep current password
            </p>

            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <Form.Item
                name="password"
                label="New Password (Optional)"
                style={{ flex: 1, minWidth: 200 }}
                rules={[{ min: 6, message: "Password must be at least 6 characters" }]}
              >
                <Input.Password
                  iconRender={(visible) =>
                    visible ? <EyeOutlined /> : <EyeInvisibleOutlined />
                  }
                />
              </Form.Item>

              <Form.Item
                name="confirmPassword"
                label="Confirm New Password"
                style={{ flex: 1, minWidth: 200 }}
                dependencies={['password']}
                rules={[
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error('Passwords do not match!'));
                    },
                  }),
                ]}
              >
                <Input.Password
                  iconRender={(visible) =>
                    visible ? <EyeOutlined /> : <EyeInvisibleOutlined />
                  }
                />
              </Form.Item>
            </div>

            <Form.Item>
              <Space>
                <Button onClick={() => setIsEditing(false)}>Cancel</Button>
                <Button type="primary" htmlType="submit">
                  Update Teacher
                </Button>
              </Space>
            </Form.Item>
          </Form>
        </Modal>

        {/* Delete Confirmation Modal */}
        <Modal
          title="Confirm Delete"
          open={deleteModalVisible}
          onOk={handleDelete}
          onCancel={() => setDeleteModalVisible(false)}
          okText="Delete"
          okButtonProps={{ danger: true }}
        >
          <p>Are you sure you want to delete <b>{teacherToDelete?.name}</b>? This action cannot be undone.</p>
        </Modal>
      </Content>
    </ConfigProvider>
  );
};

export default TeacherManagement;
