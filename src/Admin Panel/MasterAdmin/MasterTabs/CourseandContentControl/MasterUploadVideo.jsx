

// import React, { useState, useEffect, useRef } from "react";
// import axios from "axios";
// import {
//   Box,
//   Button,
//   Input,
//   VStack,
//   HStack,
//   Text,
//   IconButton,
//   useToast,
//   Link,
//   Badge,
//   Editable,
//   EditableInput,
//   EditablePreview,
//   Flex,
//   Heading,
//   Table,
//   Thead,
//   Tbody,
//   Tr,
//   Th,
//   Td,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalFooter,
//   ModalBody,
//   ModalCloseButton,
//   useDisclosure,
//   FormControl,
//   FormLabel,
//   Select,
//   InputGroup,
//   InputRightElement,
//   Tooltip,
//   Spinner,
//   Tabs,
//   TabList,
//   TabPanels,
//   Tab,
//   TabPanel,
//   Menu,
//   MenuButton,
//   MenuList,
//   MenuItem,
//   Drawer,
//   DrawerBody,
//   DrawerFooter,
//   DrawerHeader,
//   DrawerOverlay,
//   DrawerContent,
//   DrawerCloseButton,
//   useColorMode,
//   Switch,
//   Tag,
//   TagLabel,
//   TagCloseButton,
//   Progress,
//   Stat,
//   StatLabel,
//   StatNumber,
//   StatHelpText,
//   StatArrow,
//   StatGroup,
//   Divider,
//   Avatar,
//   AvatarBadge,
//   Skeleton,
//   AlertDialog,
//   AlertDialogBody,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogContent,
//   AlertDialogOverlay,
// } from "@chakra-ui/react";
// import {
//   DeleteIcon,
//   CheckIcon,
//   CloseIcon,
//   EditIcon,
//   DownloadIcon,
//   ViewIcon,
//   SearchIcon,
//   AddIcon,
//   RepeatIcon,
//   StarIcon,
//   InfoIcon,
//   SettingsIcon,
//   MoonIcon,
//   SunIcon,
//   HamburgerIcon,
//   ChevronDownIcon,
//   AttachmentIcon,
//   TimeIcon,
//   WarningIcon,
// } from "@chakra-ui/icons";

// const MasterAdminPanel = () => {
//   const [files, setFiles] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [filterStatus, setFilterStatus] = useState("All");
//   const [sortBy, setSortBy] = useState("uploadDate");
//   const [sortOrder, setSortOrder] = useState("desc");
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [uploadProgress, setUploadProgress] = useState(0);
//   const [stats, setStats] = useState({
//     total: 0,
//     approved: 0,
//     rejected: 0,
//     pending: 0,
//   });
//   const [categories, setCategories] = useState([
//     "Documents",
//     "Videos",
//     "Images",
//     "Other",
//   ]);
//   const [newCategory, setNewCategory] = useState("");
//   const [fileDetails, setFileDetails] = useState({
//     name: "",
//     category: "Documents",
//     description: "",
//     tags: [],
//   });
//   const [newTag, setNewTag] = useState("");
  
//   const toast = useToast();
//   const { colorMode, toggleColorMode } = useColorMode();
//   const fileInputRef = useRef();
//   const cancelRef = useRef();
  
//   // Modal and drawer states
//   const { 
//     isOpen: isFileModalOpen, 
//     onOpen: onFileModalOpen, 
//     onClose: onFileModalClose 
//   } = useDisclosure();
  
//   const { 
//     isOpen: isDeleteAlertOpen, 
//     onOpen: onDeleteAlertOpen, 
//     onClose: onDeleteAlertClose 
//   } = useDisclosure();
  
//   const { 
//     isOpen: isDetailsDrawerOpen, 
//     onOpen: onDetailsDrawerOpen, 
//     onClose: onDetailsDrawerClose 
//   } = useDisclosure();

//   // Fetch uploaded files on load
//   useEffect(() => {
//     fetchFiles();
//   }, []);

//   const fetchFiles = async () => {
//     setLoading(true);
//     try {
//       const res = await axios.get("http://localhost:5000/files");
//       setFiles(res.data);
      
//       // Calculate stats
//       const total = res.data.length;
//       const approved = res.data.filter(file => file.status === "Approved").length;
//       const rejected = res.data.filter(file => file.status === "Rejected").length;
//       const pending = res.data.filter(file => file.status === "Pending").length;
      
//       setStats({
//         total,
//         approved,
//         rejected,
//         pending
//       });
//     } catch (err) {
//       console.error("Error fetching files:", err);
//       toast({
//         title: "Error fetching files",
//         description: err.message,
//         status: "error",
//         duration: 3000,
//         isClosable: true,
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Handle File Upload
//   const handleFileUpload = async (event) => {
//     const uploadedFiles = Array.from(event.target.files);
//     if (uploadedFiles.length === 0) return;

//     const formData = new FormData();
//     uploadedFiles.forEach((file) => {
//       formData.append("file", file);
//     });
//     formData.append("uploader", "master"); // Add role for tracking
//     formData.append("category", fileDetails.category);
//     formData.append("description", fileDetails.description);
//     formData.append("tags", JSON.stringify(fileDetails.tags));

//     try {
//       setUploadProgress(0);
//       const response = await axios.post("http://localhost:5000/upload", formData, {
//         onUploadProgress: (progressEvent) => {
//           const percentCompleted = Math.round(
//             (progressEvent.loaded * 100) / progressEvent.total
//           );
//           setUploadProgress(percentCompleted);
//         },
//       });
      
//       toast({
//         title: "Upload Successful",
//         description: response.data.message,
//         status: "success",
//         duration: 3000,
//         isClosable: true,
//       });

//       setFiles((prev) => [...prev, response.data.fileData]);
//       fetchFiles(); // Refresh the file list
//       onFileModalClose();
//       resetFileDetails();
//     } catch (error) {
//       toast({
//         title: "Upload Failed",
//         description: error.message || "Error uploading file",
//         status: "error",
//         duration: 3000,
//         isClosable: true,
//       });
//     } finally {
//       setUploadProgress(0);
//     }
//   };

//   // Handle File Status Update
//   const handleStatusChange = async (fileName, status) => {
//     try {
//       await axios.patch(`http://localhost:5000/files/${fileName}`, { status });
//       setFiles((prev) =>
//         prev.map((file) =>
//           file.name === fileName ? { ...file, status } : file
//         )
//       );
//       toast({
//         title: `File marked as ${status}`,
//         status: status === "Approved" ? "success" : "warning",
//         duration: 3000,
//         isClosable: true,
//       });
//       fetchFiles(); // Refresh stats
//     } catch (error) {
//       toast({
//         title: "Status Update Failed",
//         description: error.message,
//         status: "error",
//         duration: 3000,
//         isClosable: true,
//       });
//     }
//   };

//   // Handle File Deletion
//   const handleFileRemove = async () => {
//     if (!selectedFile) return;
    
//     try {
//       await axios.delete(`http://localhost:5000/files/${selectedFile.name}`);
//       setFiles((prev) => prev.filter((file) => file.name !== selectedFile.name));
//       toast({
//         title: "File Deleted",
//         status: "success",
//         duration: 3000,
//         isClosable: true,
//       });
//       fetchFiles(); // Refresh stats
//       onDeleteAlertClose();
//     } catch (error) {
//       toast({
//         title: "Deletion Failed",
//         description: error.message,
//         status: "error",
//         duration: 3000,
//         isClosable: true,
//       });
//     }
//   };

//   // Handle File Name Edit
//   const handleFileEdit = async (fileName, newName) => {
//     try {
//       await axios.patch(`http://localhost:5000/files/${fileName}`, { newName });
//       setFiles((prev) =>
//         prev.map((file) =>
//           file.name === fileName ? { ...file, name: newName } : file
//         )
//       );
//       toast({
//         title: "File Renamed",
//         status: "success",
//         duration: 3000,
//         isClosable: true,
//       });
//     } catch (error) {
//       toast({
//         title: "Rename Failed",
//         description: error.message,
//         status: "error",
//         duration: 3000,
//         isClosable: true,
//       });
//     }
//   };

//   // Handle File Details Update
//   const handleFileDetailsUpdate = async (file, details) => {
//     try {
//       await axios.patch(`http://localhost:5000/files/${file.name}`, details);
//       setFiles((prev) =>
//         prev.map((f) =>
//           f.name === file.name ? { ...f, ...details } : f
//         )
//       );
//       toast({
//         title: "File Details Updated",
//         status: "success",
//         duration: 3000,
//         isClosable: true,
//       });
//       onDetailsDrawerClose();
//     } catch (error) {
//       toast({
//         title: "Update Failed",
//         description: error.message,
//         status: "error",
//         duration: 3000,
//         isClosable: true,
//       });
//     }
//   };

//   // Handle adding a new category
//   const handleAddCategory = () => {
//     if (newCategory && !categories.includes(newCategory)) {
//       setCategories([...categories, newCategory]);
//       setFileDetails({...fileDetails, category: newCategory});
//       setNewCategory("");
//     }
//   };

//   // Handle adding a new tag
//   const handleAddTag = () => {
//     if (newTag && !fileDetails.tags.includes(newTag)) {
//       setFileDetails({
//         ...fileDetails,
//         tags: [...fileDetails.tags, newTag]
//       });
//       setNewTag("");
//     }
//   };

//   // Handle removing a tag
//   const handleRemoveTag = (tag) => {
//     setFileDetails({
//       ...fileDetails,
//       tags: fileDetails.tags.filter(t => t !== tag)
//     });
//   };

//   // Reset file details form
//   const resetFileDetails = () => {
//     setFileDetails({
//       name: "",
//       category: "Documents",
//       description: "",
//       tags: [],
//     });
//     setNewTag("");
//     if (fileInputRef.current) {
//       fileInputRef.current.value = "";
//     }
//   };

//   // Filter and sort files
//   const filteredFiles = files
//     .filter(file => 
//       (filterStatus === "All" || file.status === filterStatus) &&
//       (file.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//        (file.description && file.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
//        (file.tags && file.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))))
//     )
//     .sort((a, b) => {
//       if (sortBy === "name") {
//         return sortOrder === "asc" 
//           ? a.name.localeCompare(b.name)
//           : b.name.localeCompare(a.name);
//       } else if (sortBy === "status") {
//         return sortOrder === "asc"
//           ? a.status.localeCompare(b.status)
//           : b.status.localeCompare(a.status);
//       } else if (sortBy === "category") {
//         return sortOrder === "asc"
//           ? (a.category || "").localeCompare(b.category || "")
//           : (b.category || "").localeCompare(a.category || "");
//       } else {
//         // Default: sort by uploadDate
//         return sortOrder === "asc"
//           ? new Date(a.uploadDate) - new Date(b.uploadDate)
//           : new Date(b.uploadDate) - new Date(a.uploadDate);
//       }
//     });

//   // Get status color
//   const getStatusColor = (status) => {
//     switch (status) {
//       case "Approved": return "green";
//       case "Rejected": return "red";
//       case "Pending": return "yellow";
//       default: return "gray";
//     }
//   };

//   // Format date
//   const formatDate = (dateString) => {
//     return new Date(dateString).toLocaleString();
//   };

//   return (
//     <Box
//       p={6}
//       maxW="1200px"
//       mx="auto"
//       mt={5}
//       bg={colorMode === "dark" ? "gray.800" : "white"}
//       color={colorMode === "dark" ? "white" : "gray.800"}
//       borderRadius="xl"
//       boxShadow="xl"
//     >
//       {/* Header Section */}
//       <Flex justifyContent="space-between" alignItems="center" mb={6}>
//         <Heading size="lg">Master Admin Panel</Heading>
//         <HStack>
//           <Tooltip label={`Switch to ${colorMode === "dark" ? "Light" : "Dark"} Mode`}>
//             <IconButton
//               icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
//               onClick={toggleColorMode}
//               variant="ghost"
//               aria-label="Toggle color mode"
//             />
//           </Tooltip>
//           <Menu>
//             <MenuButton
//               as={IconButton}
//               icon={<SettingsIcon />}
//               variant="ghost"
//               aria-label="Settings"
//             />
//             <MenuList>
//               <MenuItem icon={<RepeatIcon />} onClick={fetchFiles}>Refresh Files</MenuItem>
//               <MenuItem icon={<InfoIcon />}>About</MenuItem>
//             </MenuList>
//           </Menu>
//         </HStack>
//       </Flex>

//       {/* Stats Section */}
//       <StatGroup mb={6} p={4} bg={colorMode === "dark" ? "gray.700" : "gray.100"} borderRadius="md">
//         <Stat>
//           <StatLabel>Total Files</StatLabel>
//           <StatNumber>{stats.total}</StatNumber>
//         </Stat>
//         <Stat>
//           <StatLabel>Approved</StatLabel>
//           <StatNumber>{stats.approved}</StatNumber>
//           <StatHelpText>
//             <StatArrow type="increase" />
//             {stats.total > 0 ? Math.round((stats.approved / stats.total) * 100) : 0}%
//           </StatHelpText>
//         </Stat>
//         <Stat>
//           <StatLabel>Rejected</StatLabel>
//           <StatNumber>{stats.rejected}</StatNumber>
//           <StatHelpText>
//             <StatArrow type="decrease" />
//             {stats.total > 0 ? Math.round((stats.rejected / stats.total) * 100) : 0}%
//           </StatHelpText>
//         </Stat>
//         <Stat>
//           <StatLabel>Pending</StatLabel>
//           <StatNumber>{stats.pending}</StatNumber>
//         </Stat>
//       </StatGroup>

//       {/* Tabs Section */}
//       <Tabs variant="enclosed" colorScheme="teal" mb={6}>
//         <TabList>
//           <Tab>Files Management</Tab>
//           <Tab>Categories</Tab>
//         </TabList>
//         <TabPanels>
//           <TabPanel p={0} pt={4}>
//             {/* Search and Filter Section */}
//             <Flex mb={4} gap={4} flexWrap="wrap">
//               <InputGroup maxW="300px">
//                 <Input
//                   placeholder="Search files..."
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                 />
//                 <InputRightElement>
//                   <SearchIcon color="gray.500" />
//                 </InputRightElement>
//               </InputGroup>
              
//               <Select
//                 maxW="200px"
//                 value={filterStatus}
//                 onChange={(e) => setFilterStatus(e.target.value)}
//               >
//                 <option value="All">All Status</option>
//                 <option value="Approved">Approved</option>
//                 <option value="Rejected">Rejected</option>
//                 <option value="Pending">Pending</option>
//               </Select>
              
//               <Select
//                 maxW="200px"
//                 value={sortBy}
//                 onChange={(e) => setSortBy(e.target.value)}
//               >
//                 <option value="uploadDate">Sort by Date</option>
//                 <option value="name">Sort by Name</option>
//                 <option value="status">Sort by Status</option>
//                 <option value="category">Sort by Category</option>
//               </Select>
              
//               <IconButton
//                 icon={sortOrder === "asc" ? <ChevronDownIcon /> : <ChevronDownIcon transform="rotate(180deg)" />}
//                 onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
//                 aria-label="Toggle sort order"
//               />
              
//               <Button
//                 leftIcon={<AddIcon />}
//                 colorScheme="teal"
//                 onClick={onFileModalOpen}
//                 ml="auto"
//               >
//                 Upload New File
//               </Button>
//             </Flex>

//             {/* Files Table */}
//             {loading ? (
//               <VStack spacing={4}>
//                 {[1, 2, 3].map((i) => (
//                   <Skeleton key={i} height="60px" width="100%" />
//                 ))}
//               </VStack>
//             ) : (
//               <>
//                 {filteredFiles.length > 0 ? (
//                   <Box overflowX="auto">
//                     <Table variant="simple">
//                       <Thead>
//                         <Tr>
//                           <Th>File Name</Th>
//                           <Th>Category</Th>
//                           <Th>Status</Th>
//                           <Th>Upload Date</Th>
//                           <Th>Actions</Th>
//                         </Tr>
//                       </Thead>
//                       <Tbody>
//                         {filteredFiles.map((file, index) => (
//                           <Tr key={index}>
//                             <Td>
//                               <Editable
//                                 defaultValue={file.name}
//                                 onSubmit={(newName) => handleFileEdit(file.name, newName)}
//                               >
//                                 <EditablePreview />
//                                 <EditableInput />
//                               </Editable>
//                             </Td>
//                             <Td>{file.category || "Uncategorized"}</Td>
//                             <Td>
//                               <Badge
//                                 colorScheme={getStatusColor(file.status)}
//                                 p={1}
//                                 borderRadius="md"
//                               >
//                                 {file.status}
//                               </Badge>
//                             </Td>
//                             <Td>{formatDate(file.uploadDate || new Date())}</Td>
//                             <Td>
//                               <HStack spacing={2}>
//                                 <Tooltip label="View Details">
//                                   <IconButton
//                                     icon={<ViewIcon />}
//                                     size="sm"
//                                     colorScheme="blue"
//                                     onClick={() => {
//                                       setSelectedFile(file);
//                                       setFileDetails({
//                                         name: file.name,
//                                         category: file.category || "Documents",
//                                         description: file.description || "",
//                                         tags: file.tags || [],
//                                       });
//                                       onDetailsDrawerOpen();
//                                     }}
//                                     aria-label="View file details"
//                                   />
//                                 </Tooltip>
//                                 <Tooltip label="Approve">
//                                   <IconButton
//                                     icon={<CheckIcon />}
//                                     size="sm"
//                                     colorScheme="green"
//                                     isDisabled={file.status === "Approved"}
//                                     onClick={() => handleStatusChange(file.name, "Approved")}
//                                     aria-label="Approve file"
//                                   />
//                                 </Tooltip>
//                                 <Tooltip label="Reject">
//                                   <IconButton
//                                     icon={<CloseIcon />}
//                                     size="sm"
//                                     colorScheme="red"
//                                     isDisabled={file.status === "Rejected"}
//                                     onClick={() => handleStatusChange(file.name, "Rejected")}
//                                     aria-label="Reject file"
//                                   />
//                                 </Tooltip>
//                                 <Tooltip label="Delete">
//                                   <IconButton
//                                     icon={<DeleteIcon />}
//                                     size="sm"
//                                     colorScheme="red"
//                                     onClick={() => {
//                                       setSelectedFile(file);
//                                       onDeleteAlertOpen();
//                                     }}
//                                     aria-label="Delete file"
//                                   />
//                                 </Tooltip>
//                               </HStack>
//                             </Td>
//                           </Tr>
//                         ))}
//                       </Tbody>
//                     </Table>
//                   </Box>
//                 ) : (
//                   <Box textAlign="center" py={10}>
//                     <Text color="gray.500">
//                       {searchQuery || filterStatus !== "All"
//                         ? "No files match your search criteria."
//                         : "No files uploaded yet."}
//                     </Text>
//                     <Button
//                       mt={4}
//                       leftIcon={<AddIcon />}
//                       colorScheme="teal"
//                       onClick={onFileModalOpen}
//                     >
//                       Upload New File
//                     </Button>
//                   </Box>
//                 )}
//               </>
//             )}
//           </TabPanel>
          
//           <TabPanel>
//             <VStack align="stretch" spacing={4}>
//               <Heading size="md" mb={2}>Manage Categories</Heading>
              
//               <HStack>
//                 <Input
//                   placeholder="New category name"
//                   value={newCategory}
//                   onChange={(e) => setNewCategory(e.target.value)}
//                 />
//                 <Button
//                   colorScheme="teal"
//                   onClick={handleAddCategory}
//                   isDisabled={!newCategory}
//                 >
//                   Add Category
//                 </Button>
//               </HStack>
              
//               <Box>
//                 <Text fontWeight="bold" mb={2}>Current Categories:</Text>
//                 <Flex wrap="wrap" gap={2}>
//                   {categories.map((category, index) => (
//                     <Tag
//                       key={index}
//                       size="lg"
//                       borderRadius="full"
//                       variant="solid"
//                       colorScheme="teal"
//                     >
//                       <TagLabel>{category}</TagLabel>
//                     </Tag>
//                   ))}
//                 </Flex>
//               </Box>
//             </VStack>
//           </TabPanel>
//         </TabPanels>
//       </Tabs>

//       {/* Upload File Modal */}
//       <Modal isOpen={isFileModalOpen} onClose={onFileModalClose} size="xl">
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>Upload New File</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody>
//             <VStack spacing={4}>
//               <FormControl>
//                 <FormLabel>Select File</FormLabel>
//                 <Input
//                   type="file"
//                   multiple
//                   accept="video/*,application/pdf,application/msword,image/*"
//                   onChange={(e) => {
//                     if (e.target.files && e.target.files.length > 0) {
//                       setFileDetails({
//                         ...fileDetails,
//                         name: e.target.files[0].name
//                       });
//                     }
//                   }}
//                   ref={fileInputRef}
//                 />
//               </FormControl>
              
//               <FormControl>
//                 <FormLabel>Category</FormLabel>
//                 <Select
//                   value={fileDetails.category}
//                   onChange={(e) => setFileDetails({...fileDetails, category: e.target.value})}
//                 >
//                   {categories.map((category, index) => (
//                     <option key={index} value={category}>
//                       {category}
//                     </option>
//                   ))}
//                 </Select>
//               </FormControl>
              
//               <FormControl>
//                 <FormLabel>Description</FormLabel>
//                 <Input
//                   placeholder="Enter file description"
//                   value={fileDetails.description}
//                   onChange={(e) => setFileDetails({...fileDetails, description: e.target.value})}
//                 />
//               </FormControl>
              
//               <FormControl>
//                 <FormLabel>Tags</FormLabel>
//                 <HStack>
//                   <Input
//                     placeholder="Add a tag"
//                     value={newTag}
//                     onChange={(e) => setNewTag(e.target.value)}
//                   />
//                   <Button onClick={handleAddTag} isDisabled={!newTag}>
//                     Add
//                   </Button>
//                 </HStack>
                
//                 <Flex wrap="wrap" gap={2} mt={2}>
//                   {fileDetails.tags.map((tag, index) => (
//                     <Tag
//                       key={index}
//                       size="md"
//                       borderRadius="full"
//                       variant="solid"
//                       colorScheme="blue"
//                     >
//                       <TagLabel>{tag}</TagLabel>
//                       <TagCloseButton onClick={() => handleRemoveTag(tag)} />
//                     </Tag>
//                   ))}
//                 </Flex>
//               </FormControl>
              
//               {uploadProgress > 0 && (
//                 <Box w="100%">
//                   <Text mb={1}>Uploading: {uploadProgress}%</Text>
//                   <Progress value={uploadProgress} size="sm" colorScheme="teal" />
//                 </Box>
//               )}
//             </VStack>
//           </ModalBody>
//           <ModalFooter>
//             <Button variant="ghost" mr={3} onClick={onFileModalClose}>
//               Cancel
//             </Button>
//             <Button colorScheme="teal" onClick={handleFileUpload}>
//               Upload
//             </Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>

//       {/* Delete Confirmation Alert */}
//       <AlertDialog
//         isOpen={isDeleteAlertOpen}
//         leastDestructiveRef={cancelRef}
//         onClose={onDeleteAlertClose}
//       >
//         <AlertDialogOverlay>
//           <AlertDialogContent>
//             <AlertDialogHeader fontSize="lg" fontWeight="bold">
//               Delete File
//             </AlertDialogHeader>

//             <AlertDialogBody>
//               Are you sure you want to delete "{selectedFile?.name}"? This action cannot be undone.
//             </AlertDialogBody>

//             <AlertDialogFooter>
//               <Button ref={cancelRef} onClick={onDeleteAlertClose}>
//                 Cancel
//               </Button>
//               <Button colorScheme="red" onClick={handleFileRemove} ml={3}>
//                 Delete
//               </Button>
//             </AlertDialogFooter>
//           </AlertDialogContent>
//         </AlertDialogOverlay>
//       </AlertDialog>

//       {/* File Details Drawer */}
//       <Drawer
//         isOpen={isDetailsDrawerOpen}
//         placement="right"
//         onClose={onDetailsDrawerClose}
//         size="md"
//       >
//         <DrawerOverlay />
//         <DrawerContent>
//           <DrawerCloseButton />
//           <DrawerHeader>File Details</DrawerHeader>

//           <DrawerBody>
//             {selectedFile && (
//               <VStack spacing={4} align="stretch">
//                 <FormControl>
//                   <FormLabel>File Name</FormLabel>
//                   <Input
//                     value={fileDetails.name}
//                     onChange={(e) => setFileDetails({...fileDetails, name: e.target.value})}
//                   />
//                 </FormControl>
                
//                 <FormControl>
//                   <FormLabel>Category</FormLabel>
//                   <Select
//                     value={fileDetails.category}
//                     onChange={(e) => setFileDetails({...fileDetails, category: e.target.value})}
//                   >
//                     {categories.map((category, index) => (
//                       <option key={index} value={category}>
//                         {category}
//                       </option>
//                     ))}
//                   </Select>
//                 </FormControl>
                
//                 <FormControl>
//                   <FormLabel>Description</FormLabel>
//                   <Input
//                     placeholder="Enter file description"
//                     value={fileDetails.description}
//                     onChange={(e) => setFileDetails({...fileDetails, description: e.target.value})}
//                   />
//                 </FormControl>
                
//                 <FormControl>
//                   <FormLabel>Tags</FormLabel>
//                   <HStack>
//                     <Input
//                       placeholder="Add a tag"
//                       value={newTag}
//                       onChange={(e) => setNewTag(e.target.value)}
//                     />
//                     <Button onClick={handleAddTag} isDisabled={!newTag}>
//                       Add
//                     </Button>
//                   </HStack>
                  
//                   <Flex wrap="wrap" gap={2} mt={2}>
//                     {fileDetails.tags.map((tag, index) => (
//                       <Tag
//                         key={index}
//                         size="md"
//                         borderRadius="full"
//                         variant="solid"
//                         colorScheme="blue"
//                       >
//                         <TagLabel>{tag}</TagLabel>
//                         <TagCloseButton onClick={() => handleRemoveTag(tag)} />
//                       </Tag>
//                     ))}
//                   </Flex>
//                 </FormControl>
                
//                 <Divider my={2} />
                
//                 <Box>
//                   <Text fontWeight="bold">Status:</Text>
//                   <Badge
//                     colorScheme={getStatusColor(selectedFile.status)}
//                     p={1}
//                     borderRadius="md"
//                     mt={1}
//                   >
//                     {selectedFile.status}
//                   </Badge>
//                 </Box>
                
//                 <Box>
//                   <Text fontWeight="bold">Upload Date:</Text>
//                   <Text>{formatDate(selectedFile.uploadDate || new Date())}</Text>
//                 </Box>
                
//                 <Box>
//                   <Text fontWeight="bold">Uploader:</Text>
//                   <Flex align="center" mt={1}>
//                     <Avatar size="sm" name={selectedFile.uploader || "Unknown"} mr={2}>
//                       {selectedFile.uploader === "master" && (
//                         <AvatarBadge boxSize="1em" bg="green.500" />
//                       )}
//                     </Avatar>
//                     <Text>{selectedFile.uploader || "Unknown"}</Text>
//                   </Flex>
//                 </Box>
//               </VStack>
//             )}
//           </DrawerBody>

//           <DrawerFooter>
//             <Button variant="outline" mr={3} onClick={onDetailsDrawerClose}>
//               Cancel
//             </Button>
//             <Button 
//               colorScheme="blue" 
//               onClick={() => handleFileDetailsUpdate(selectedFile, fileDetails)}
//             >
//               Save Changes
//             </Button>
//           </DrawerFooter>
//         </DrawerContent>
//       </Drawer>
//     </Box>
//   );
// };

// export default MasterAdminPanel;



// import React, { useState, useEffect, useRef, useCallback } from "react";
// import {
//   Box,
//   Button,
//   Input,
//   VStack,
//   HStack,
//   Text,
//   IconButton,
//   useToast,
//   Badge,
//   Flex,
//   Heading,
//   Table,
//   Thead,
//   Tbody,
//   Tr,
//   Th,
//   Td,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalFooter,
//   ModalBody,
//   ModalCloseButton,
//   useDisclosure,
//   FormControl,
//   FormLabel,
//   Select,
//   InputGroup,
//   InputRightElement,
//   Tooltip,
//   Spinner,
//   Tabs,
//   TabList,
//   TabPanels,
//   Tab,
//   TabPanel,
//   Menu,
//   MenuButton,
//   MenuList,
//   MenuItem,
//   Drawer,
//   DrawerBody,
//   DrawerFooter,
//   DrawerHeader,
//   DrawerOverlay,
//   DrawerContent,
//   DrawerCloseButton,
//   useColorMode,
//   Switch,
//   Tag,
//   TagLabel,
//   TagCloseButton,
//   Progress,
//   Stat,
//   StatLabel,
//   StatNumber,
//   StatHelpText,
//   StatArrow,
//   StatGroup,
//   Divider,
//   Avatar,
//   AvatarBadge,
//   Skeleton,
//   AlertDialog,
//   AlertDialogBody,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogContent,
//   AlertDialogOverlay,
//   FormErrorMessage,
//   useColorModeValue,
//   Container,
//   Grid,
//   GridItem,
//   Card,
//   CardBody,
//   CardHeader,
//   CardFooter,
//   Image,
//   Stack,
//   Textarea,
//   Slider,
//   SliderTrack,
//   SliderFilledTrack,
//   SliderThumb,
//   ChakraProvider,
// } from "@chakra-ui/react";
// import {
//   DeleteIcon,
//   CheckIcon,
//   CloseIcon,
//   EditIcon,
//   DownloadIcon,
//   ViewIcon,
//   SearchIcon,
//   AddIcon,
//   RepeatIcon,
//   StarIcon,
//   InfoIcon,
//   SettingsIcon,
//   MoonIcon,
//   SunIcon,
//   HamburgerIcon,
//   ChevronDownIcon,
//   AttachmentIcon,
//   TimeIcon,
//   WarningIcon,
//   UpDownIcon,
//   ExternalLinkIcon,
//   CopyIcon,
//   ChevronUpIcon,
// } from "@chakra-ui/icons";

// // ============= TYPES =============
// // export type Video = {
// //   id: string;
// //   name: string;
// //   title: string;
// //   description: string;
// //   category: string;
// //   tags: string[];
// //   status: "Approved" | "Rejected" | "Pending";
// //   uploadDate: string;
// //   uploader: string;
// //   duration: number;
// //   thumbnailUrl: string;
// //   videoUrl: string;
// //   size: number;
// //   views: number;
// // };

// // ============= MOCK DATA =============
// // Mock data for initial videos
// const mockVideos = [
//   {
//     id: "1",
//     name: "introduction-to-algebra.mp4",
//     title: "Introduction to Algebra",
//     description: "A comprehensive introduction to algebraic concepts for high school students.",
//     category: "Lectures",
//     tags: ["math", "algebra", "introduction"],
//     status: "Approved",
//     uploadDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(), // 7 days ago
//     uploader: "Mrs. Johnson",
//     duration: 1845, // 30:45
//     thumbnailUrl: "https://via.placeholder.com/300x200?text=Algebra",
//     videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
//     size: 256000000, // 256MB
//     views: 128
//   },
//   {
//     id: "2",
//     name: "chemistry-lab-safety.mp4",
//     title: "Chemistry Lab Safety Procedures",
//     description: "Essential safety guidelines for all students working in the chemistry laboratory.",
//     category: "Tutorials",
//     tags: ["chemistry", "safety", "lab"],
//     status: "Approved",
//     uploadDate: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(), // 14 days ago
//     uploader: "Dr. Martinez",
//     duration: 1230, // 20:30
//     thumbnailUrl: "https://via.placeholder.com/300x200?text=Chemistry",
//     videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
//     size: 189000000, // 189MB
//     views: 95
//   },
//   {
//     id: "3",
//     name: "history-world-war-2.mp4",
//     title: "World War II: Causes and Effects",
//     description: "An in-depth analysis of the causes, major events, and lasting impacts of World War II.",
//     category: "Lectures",
//     tags: ["history", "world war", "20th century"],
//     status: "Pending",
//     uploadDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days ago
//     uploader: "Mr. Thompson",
//     duration: 2760, // 46:00
//     thumbnailUrl: "https://via.placeholder.com/300x200?text=History",
//     videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
//     size: 320000000, // 320MB
//     views: 42
//   },
//   {
//     id: "4",
//     name: "coding-python-basics.mp4",
//     title: "Python Programming for Beginners",
//     description: "Learn the fundamentals of Python programming language with practical examples.",
//     category: "Tutorials",
//     tags: ["programming", "python", "coding"],
//     status: "Rejected",
//     uploadDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(), // 5 days ago
//     uploader: "Ms. Garcia",
//     duration: 3600, // 60:00
//     thumbnailUrl: "https://via.placeholder.com/300x200?text=Python",
//     videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
//     size: 420000000, // 420MB
//     views: 67
//   }
// ];

// // ============= CUSTOM ICONS =============
// const PlayIcon = ({ className }) => (
//   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
//     <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
//   </svg>
// );

// const PauseIcon = ({ className }) => (
//   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
//     <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z" clipRule="evenodd" />
//   </svg>
// );

// const VolumeUpIcon = ({ className }) => (
//   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
//     <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 11-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06z" />
//     <path d="M15.932 7.757a.75.75 0 011.061 0 6 6 0 010 8.486.75.75 0 01-1.06-1.061 4.5 4.5 0 000-6.364.75.75 0 010-1.06z" />
//   </svg>
// );

// const VolumeOffIcon = ({ className }) => (
//   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
//     <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM17.78 9.22a.75.75 0 10-1.06 1.06L18.44 12l-1.72 1.72a.75.75 0 001.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 101.06-1.06L20.56 12l1.72-1.72a.75.75 0 00-1.06-1.06l-1.72 1.72-1.72-1.72z" />
//   </svg>
// );

// const ExpandIcon = ({ className }) => (
//   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
//     <path fillRule="evenodd" d="M15 3.75a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0V5.56l-3.97 3.97a.75.75 0 11-1.06-1.06l3.97-3.97h-2.69a.75.75 0 01-.75-.75zm-12 0A.75.75 0 013.75 3h4.5a.75.75 0 010 1.5H5.56l3.97 3.97a.75.75 0 01-1.06 1.06L4.5 5.56v2.69a.75.75 0 01-1.5 0v-4.5zm11.47 11.78a.75.75 0 111.06-1.06l3.97 3.97v-2.69a.75.75 0 011.5 0v4.5a.75.75 0 01-.75.75h-4.5a.75.75 0 010-1.5h2.69l-3.97-3.97zm-4.94-1.06a.75.75 0 010 1.06L5.56 19.5h2.69a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75v-4.5a.75.75 0 011.5 0v2.69l3.97-3.97a.75.75 0 011.06 0z" clipRule="evenodd" />
//   </svg>
// );

// const SpeakerWaveIcon = ({ className }) => (
//   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
//     <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 11-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06z" />
//     <path d="M15.932 7.757a.75.75 0 011.061 0 6 6 0 010 8.486.75.75 0 01-1.06-1.061 4.5 4.5 0 000-6.364.75.75 0 010-1.06z" />
//   </svg>
// );

// const ArrowPathIcon = ({ className }) => (
//   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
//     <path fillRule="evenodd" d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z" clipRule="evenodd" />
//   </svg>
// );

// // ============= HOOKS =============
// // useVideos hook
// export const useVideos = () => {
//   const [videos, setVideos] = useState(mockVideos);  //............................................................................
//   const [loading, setLoading] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [filterStatus, setFilterStatus] = useState("All");
//   const [sortBy, setSortBy] = useState("uploadDate");
//   const [sortOrder, setSortOrder] = useState("desc");

//   // Calculate stats
//   const stats = useMemo(() => {
//     const total = videos.length;
//     const approved = videos.filter(video => video.status === "Approved").length;
//     const rejected = videos.filter(video => video.status === "Rejected").length;
//     const pending = videos.filter(video => video.status === "Pending").length;
    
//     return {
//       total,
//       approved,
//       rejected,
//       pending
//     };
//   }, [videos]);

//   // Filter and sort videos
//   const filteredVideos = useMemo(() => {
//     return videos
//       .filter(video => 
//         (filterStatus === "All" || video.status === filterStatus) &&
//         (video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//          (video.description && video.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
//          (video.tags && video.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))))
//       )
//       .sort((a, b) => {
//         if (sortBy === "title") {
//           return sortOrder === "asc" 
//             ? a.title.localeCompare(b.title)
//             : b.title.localeCompare(a.title);
//         } else if (sortBy === "status") {
//           return sortOrder === "asc"
//             ? a.status.localeCompare(b.status)
//             : b.status.localeCompare(a.status);
//         } else if (sortBy === "category") {
//           return sortOrder === "asc"
//             ? (a.category || "").localeCompare(b.category || "")
//             : (b.category || "").localeCompare(a.category || "");
//         } else if (sortBy === "duration") {
//           return sortOrder === "asc"
//             ? a.duration - b.duration
//             : b.duration - a.duration;
//         } else if (sortBy === "views") {
//           return sortOrder === "asc"
//             ? a.views - b.views
//             : b.views - a.views;
//         } else {
//           // Default: sort by uploadDate
//           return sortOrder === "asc"
//             ? new Date(a.uploadDate).getTime() - new Date(b.uploadDate).getTime()
//             : new Date(b.uploadDate).getTime() - new Date(a.uploadDate).getTime();
//         }
//       });
//   }, [videos, searchQuery, filterStatus, sortBy, sortOrder]);

//   // Fetch videos (simulated)
//   const fetchVideos = async () => {
//     setLoading(true);
//     try {
//       // In a real application, this would be an API call
//       // const response = await fetch('/api/videos')
//       // const data = await response.json()
//       // setVideos(data)
      
//       // Simulate API delay
//       await new Promise(resolve => setTimeout(resolve, 1000));
//       // Keep using mock data for now
//     } catch (error) {
//       console.error("Error fetching videos:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Add a new video
//   const addVideo = (video) => {
//     setVideos(prev => [...prev, video]);
//   };

//   // Update video details
//   const updateVideo = async (videoId, details) => {
//     // In a real application, this would be an API call
//     // await fetch(`/api/videos/${videoId}`, {
//     //   method: 'PATCH',
//     //   body: JSON.stringify(details)
//     // })
    
//     setVideos(prev => 
//       prev.map(video => 
//         video.id === videoId ? { ...video, ...details } : video
//       )
//     );
    
//     return true;
//   };

//   // Delete a video
//   const deleteVideo = async (videoId) => {
//     // In a real application, this would be an API call
//     // await fetch(`/api/videos/${videoId}`, {
//     //   method: 'DELETE'
//     // })
    
//     setVideos(prev => prev.filter(video => video.id !== videoId));
    
//     return true;
//   };

//   // Update video status
//   const updateVideoStatus = async (videoId, status) => {
//     return updateVideo(videoId, { status });
//   };

//   // Initial fetch
//   useEffect(() => {
//     fetchVideos();
//   }, []);

//   return {
//     videos,
//     loading,
//     stats,
//     filteredVideos,
//     searchQuery,
//     setSearchQuery,
//     filterStatus,
//     setFilterStatus,
//     sortBy,
//     setSortBy,
//     sortOrder,
//     setSortOrder,
//     addVideo,
//     updateVideo,
//     deleteVideo,
//     updateVideoStatus,
//     fetchVideos,
//   };
// };

// // ============= COMPONENTS =============
// // 1. VideoPlayer Component
// export const VideoPlayer = ({ videoUrl }) => {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [currentTime, setCurrentTime] = useState(0);
//   const [duration, setDuration] = useState(0);
//   const [volume, setVolume] = useState(1);
//   const [isMuted, setIsMuted] = useState(false);
//   const [isFullscreen, setIsFullscreen] = useState(false);
//   const [showControls, setShowControls] = useState(true);
//   const [isBuffering, setIsBuffering] = useState(false);
  
//   const videoRef = useRef(null);
//   const playerRef = useRef(null);
//   const controlsTimeoutRef = useRef(null);
  
//   const bgColor = useColorModeValue("black", "black");
//   const controlsBg = "rgba(0, 0, 0, 0.7)";
//   const textColor = "white";

//   useEffect(() => {
//     const video = videoRef.current;
//     if (!video) return;
    
//     const onTimeUpdate = () => {
//       setCurrentTime(video.currentTime);
//     };
    
//     const onLoadedMetadata = () => {
//       setDuration(video.duration);
//     };
    
//     const onEnded = () => {
//       setIsPlaying(false);
//     };
    
//     const onWaiting = () => {
//       setIsBuffering(true);
//     };
    
//     const onPlaying = () => {
//       setIsBuffering(false);
//     };
    
//     video.addEventListener("timeupdate", onTimeUpdate);
//     video.addEventListener("loadedmetadata", onLoadedMetadata);
//     video.addEventListener("ended", onEnded);
//     video.addEventListener("waiting", onWaiting);
//     video.addEventListener("playing", onPlaying);
    
//     return () => {
//       video.removeEventListener("timeupdate", onTimeUpdate);
//       video.removeEventListener("loadedmetadata", onLoadedMetadata);
//       video.removeEventListener("ended", onEnded);
//       video.removeEventListener("waiting", onWaiting);
//       video.removeEventListener("playing", onPlaying);
//     };
//   }, []);

//   useEffect(() => {
//     const video = videoRef.current;
//     if (!video) return;
    
//     if (isPlaying) {
//       video.play().catch(() => {
//         setIsPlaying(false);
//       });
//     } else {
//       video.pause();
//     }
//   }, [isPlaying]);

//   useEffect(() => {
//     const video = videoRef.current;
//     if (!video) return;
    
//     video.volume = isMuted ? 0 : volume;
//   }, [volume, isMuted]);

//   const togglePlay = () => {
//     setIsPlaying(!isPlaying);
//   };

//   const toggleMute = () => {
//     setIsMuted(!isMuted);
//   };

//   const handleVolumeChange = (value) => {
//     setVolume(value);
//     if (value === 0) {
//       setIsMuted(true);
//     } else if (isMuted) {
//       setIsMuted(false);
//     }
//   };

//   const handleSeek = (value) => {
//     if (videoRef.current) {
//       videoRef.current.currentTime = value;
//       setCurrentTime(value);
//     }
//   };

//   const toggleFullscreen = () => {
//     if (!playerRef.current) return;
    
//     if (!document.fullscreenElement) {
//       playerRef.current.requestFullscreen().then(() => {
//         setIsFullscreen(true);
//       }).catch(err => {
//         console.error(`Error attempting to enable fullscreen: ${err.message}`);
//       });
//     } else {
//       document.exitFullscreen();
//       setIsFullscreen(false);
//     }
//   };

//   const formatTime = (seconds) => {
//     const mins = Math.floor(seconds / 60);
//     const secs = Math.floor(seconds % 60);
//     return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
//   };

//   const handleMouseMove = () => {
//     setShowControls(true);
    
//     if (controlsTimeoutRef.current) {
//       clearTimeout(controlsTimeoutRef.current);
//     }
    
//     controlsTimeoutRef.current = setTimeout(() => {
//       if (isPlaying) {
//         setShowControls(false);
//       }
//     }, 3000);
//   };

//   // Ensure this return statement is inside a valid function or component
//   return (
//     <Box
//       ref={playerRef}
//       position="relative"
//       width="100%"
//       bg={bgColor}
//       borderRadius="md"
//       overflow="hidden"
//       onMouseMove={handleMouseMove}
//       onMouseLeave={() => isPlaying && setShowControls(false)}
//     >
//       <video
//         ref={videoRef}
//         src={videoUrl}
//         width="100%"
//         height="auto"
//         onClick={togglePlay}
//         style={{ display: "block" }}
//       />
      
//       {/* Play/Pause overlay button */}
//       {(!isPlaying || showControls) && (
//         <Flex
//           position="absolute"
//           top="50%"
//           left="50%"
//           transform="translate(-50%, -50%)"
//           alignItems="center"
//           justifyContent="center"
//           width="80px"
//           height="80px"
//           borderRadius="full"
//           bg="rgba(0, 0, 0, 0.5)"
//           opacity={0.8}
//           transition="opacity 0.2s"
//           _hover={{ opacity: 1 }}
//           cursor="pointer"
//           onClick={togglePlay}
//         >
//           {isBuffering ? (
//             <ArrowPathIcon className="w-10 h-10 text-white animate-spin" />
//           ) : isPlaying ? (
//             <PauseIcon className="w-10 h-10 text-white" />
//           ) : (
//             <PlayIcon className="w-10 h-10 text-white" />
//           )}
//         </Flex>
//       )}
      
//       {/* Controls bar */}
//       <Box
//         position="absolute"
//         bottom={0}
//         left={0}
//         right={0}
//         bg={controlsBg}
//         p={3}
//         transition="opacity 0.3s"
//         opacity={showControls ? 1 : 0}
//       >
//         <VStack spacing={2}>
//           <Slider
//             aria-label="video progress"
//             value={currentTime}
//             min={0}
//             max={duration || 100}
//             onChange={handleSeek}
//             focusThumbOnChange={false}
//           >
//             <SliderTrack bg="gray.600">
//               <SliderFilledTrack bg="teal.500" />
//             </SliderTrack>
//             <SliderThumb boxSize={3} />
//           </Slider>
          
//           <Flex width="100%" justifyContent="space-between" alignItems="center">
//             <HStack spacing={2}>
//               <IconButton
//                 aria-label={isPlaying ? "Pause" : "Play"}
//                 icon={isPlaying ? <PauseIcon className="w-5 h-5" /> : <PlayIcon className="w-5 h-5" />}
//                 onClick={togglePlay}
//                 variant="ghost"
//                 color={textColor}
//                 size="sm"
//               />
              
//               <HStack width="120px">
//                 <IconButton
//                   aria-label={isMuted ? "Unmute" : "Mute"}
//                   icon={isMuted ? <VolumeOffIcon className="w-5 h-5" /> : <SpeakerWaveIcon className="w-5 h-5" />}
//                   onClick={toggleMute}
//                   variant="ghost"
//                   color={textColor}
//                   size="sm"
//                 />
//                 <Slider
//                   aria-label="volume"
//                   value={isMuted ? 0 : volume}
//                   min={0}
//                   max={1}
//                   step={0.01}
//                   onChange={handleVolumeChange}
//                   width="80px"
//                   focusThumbOnChange={false}
//                 >
//                   <SliderTrack bg="gray.600">
//                     <SliderFilledTrack bg="teal.500" />
//                   </SliderTrack>
//                   <SliderThumb boxSize={2} />
//                 </Slider>
//               </HStack>
              
//               <Text color={textColor} fontSize="sm">
//                 {formatTime(currentTime)} / {formatTime(duration)}
//               </Text>
//             </HStack>
            
//             <IconButton
//               aria-label="Fullscreen"
//               icon={<ExpandIcon className="w-5 h-5" />}
//               onClick={toggleFullscreen}
//               variant="ghost"
//               color={textColor}
//               size="sm"
//             />
//           </Flex>
//         </VStack>
//       </Box>
//     </Box>
//   );
// };

// // 2. VideoCard Component
// export const VideoCard = ({
//   video,
//   onView,
//   onEdit,
//   onApprove,
//   onReject,
//   onDelete,
// }) => {
//   const borderColor = useColorModeValue("gray.200", "gray.700");
//   const bgColor = useColorModeValue("white", "gray.800");
  
//   // Format duration from seconds to MM:SS
//   const formatDuration = (seconds) => {
//     const minutes = Math.floor(seconds / 60);
//     const remainingSeconds = Math.floor(seconds % 60);
//     return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
//   };
  
//   // Format date
//   const formatDate = (dateString) => {
//     return new Date(dateString).toLocaleDateString();
//   };
  
//   // Get status color  => {
//     return new Date(dateString).toLocaleDateString();
//   };
  
//   // Get status color
//   const getStatusColor = (status) => {
//     switch (status) {
//       case "Approved": return "green";
//       case "Rejected": return "red";
//       case "Pending": return "yellow";
//       default: return "gray";
//     }
//   };

//   return (
//     <Card maxW="sm" borderWidth="1px" borderColor={borderColor} bg={bgColor} overflow="hidden">
//       <Box position="relative">
//         <Image
//           src={video.thumbnailUrl || "https://via.placeholder.com/300x200?text=Video"}
//           alt={video.title}
//           objectFit="cover"
//           height="180px"
//           width="100%"
//         />
//         <Badge 
//           position="absolute" 
//           top={2} 
//           right={2} 
//           colorScheme={getStatusColor(video.status)}
//           px={2}
//           py={1}
//           borderRadius="md"
//         >
//           {video.status}
//         </Badge>
//         <Badge 
//           position="absolute" 
//           bottom={2} 
//           right={2} 
//           colorScheme="blackAlpha"
//           px={2}
//           py={1}
//           borderRadius="md"
//           bg="rgba(0, 0, 0, 0.7)"
//         >
//           {formatDuration(video.duration)}
//         </Badge>
//         <Box
//           position="absolute"
//           top="0"
//           left="0"
//           right="0"
//           bottom="0"
//           bg="rgba(0, 0, 0, 0.3)"
//           opacity="0"
//           transition="opacity 0.2s"
//           _hover={{ opacity: 1 }}
//           display="flex"
//           alignItems="center"
//           justifyContent="center"
//         >
//           <IconButton
//             aria-label="Play video"
//             icon={<ViewIcon />}
//             size="lg"
//             colorScheme="teal"
//             onClick={onView}
//             borderRadius="full"
//           />
//         </Box>
//       </Box>
      
//       <CardBody>
//         <Stack spacing={2}>
//           <Heading size="md" noOfLines={2}>{video.title}</Heading>
//           <Text color="gray.500" fontSize="sm">
//             Uploaded on {formatDate(video.uploadDate)}
//           </Text>
//           <HStack>
//             <Badge colorScheme="blue">{video.category}</Badge>
//             {video.tags.slice(0, 2).map((tag, index) => (
//               <Badge key={index} colorScheme="purple">{tag}</Badge>
//             ))}
//             {video.tags.length > 2 && (
//               <Badge colorScheme="gray">+{video.tags.length - 2}</Badge>
//             )}
//           </HStack>
//           <Text noOfLines={2} fontSize="sm">
//             {video.description || "No description provided"}
//           </Text>
//         </Stack>
//       </CardBody>
      
//       <Divider />
      
//       <CardFooter>
//         <HStack spacing={2} width="100%" justifyContent="space-between">
//           <Tooltip label="View">
//             <IconButton
//               icon={<ViewIcon />}
//               size="sm"
//               colorScheme="blue"
//               onClick={onView}
//               aria-label="View video"
//             />
//           </Tooltip>
//           <Tooltip label="Edit">
//             <IconButton
//               icon={<EditIcon />}
//               size="sm"
//               colorScheme="gray"
//               onClick={onEdit}
//               aria-label="Edit video"
//             />
//           </Tooltip>
//           <Tooltip label="Approve">
//             <IconButton
//               icon={<CheckIcon />}
//               size="sm"
//               colorScheme="green"
//               isDisabled={video.status === "Approved"}
//               onClick={onApprove}
//               aria-label="Approve video"
//             />
//           </Tooltip>
//           <Tooltip label="Reject">
//             <IconButton
//               icon={<CloseIcon />}
//               size="sm"
//               colorScheme="red"
//               isDisabled={video.status === "Rejected"}
//               onClick={onReject}
//               aria-label="Reject video"
//             />
//           </Tooltip>
//           <Tooltip label="Delete">
//             <IconButton
//               icon={<DeleteIcon />}
//               size="sm"
//               colorScheme="red"
//               variant="outline"
//               onClick={onDelete}
//               aria-label="Delete video"
//             />
//           </Tooltip>
//         </HStack>
//       </CardFooter>
//     </Card>
//   );


// // 3. VideoUploader Component
// export const VideoUploader = ({ 
//   categories, 
//   onUploadComplete, 
//   onUploadError 
// }) => {
//   const [uploadProgress, setUploadProgress] = useState(0);
//   const [isUploading, setIsUploading] = useState(false);
//   const [videoFile, setVideoFile] = useState(null);
//   const [thumbnailFile, setThumbnailFile] = useState(null);
//   const [thumbnailPreview, setThumbnailPreview] = useState(null);
//   const [videoDetails, setVideoDetails] = useState({
//     title: "",
//     description: "",
//     category: categories[0] || "Other",
//     tags: [],
//   });
//   const [newTag, setNewTag] = useState("");
//   const [errors, setErrors] = useState({});

//   const dropzoneColor = useColorModeValue("gray.100", "gray.700");
//   const dropzoneActiveColor = useColorModeValue("teal.50", "teal.900");
//   const dropzoneBorderColor = useColorModeValue("gray.300", "gray.600");
//   const dropzoneActiveBorderColor = useColorModeValue("teal.300", "teal.600");

//   const onDrop = useCallback((acceptedFiles) => {
//     if (acceptedFiles.length > 0) {
//       const file = acceptedFiles[0];
//       if (file.type.startsWith("video/")) {
//         setVideoFile(file);
//         setVideoDetails(prev => ({
//           ...prev,
//           title: file.name.split(".")[0].replace(/-|_/g, " ")
//         }));
        
//         // Generate thumbnail from video
//         const video = document.createElement("video");
//         video.preload = "metadata";
//         video.src = URL.createObjectURL(file);
//         video.onloadedmetadata = () => {
//           video.currentTime = 1; // Seek to 1 second
//         };
//         video.onseeked = () => {
//           const canvas = document.createElement("canvas");
//           canvas.width = video.videoWidth;
//           canvas.height = video.videoHeight;
//           const ctx = canvas.getContext("2d");
//           ctx?.drawImage(video, 0, 0, canvas.width, canvas.height);
//           const thumbnailDataUrl = canvas.toDataURL("image/jpeg");
//           setThumbnailPreview(thumbnailDataUrl);
          
//           // Convert data URL to File
//           fetch(thumbnailDataUrl)
//             .then(res => res.blob())
//             .then(blob => {
//               const thumbnailFile = new File([blob], `${file.name.split(".")[0]}-thumbnail.jpg`, { type: "image/jpeg" });
//               setThumbnailFile(thumbnailFile);
//             });
//         };
//       } else {
//         onUploadError("Please upload a video file");
//       }
//     }
//   }, [onUploadError]);

//   const { getRootProps, getInputProps, isDragActive } = {
//     getRootProps: () => ({
//       onClick: () => document.getElementById('file-upload').click(),
//       onDragOver: (e) => {
//         e.preventDefault();
//         e.stopPropagation();
//       },
//       onDrop: (e) => {
//         e.preventDefault();
//         e.stopPropagation();
//         const files = e.dataTransfer.files;
//         if (files.length) onDrop([...files]);
//       }
//     }),
//     getInputProps: () => ({
//       id: 'file-upload',
//       type: 'file',
//       accept: 'video/*',
//       style: { display: 'none' },
//       onChange: (e) => {
//         if (e.target.files?.length) onDrop([...e.target.files]);
//       }
//     }),
//     isDragActive: false
//   };

//   const handleThumbnailChange = (e) => {
//     if (e.target.files && e.target.files[0]) {
//       const file = e.target.files[0];
//       if (file.type.startsWith("image/")) {
//         setThumbnailFile(file);
//         setThumbnailPreview(URL.createObjectURL(file));
//       } else {
//         onUploadError("Please upload an image file for the thumbnail");
//       }
//     }
//   };

//   const handleAddTag = () => {
//     if (newTag && !videoDetails.tags.includes(newTag)) {
//       setVideoDetails({
//         ...videoDetails,
//         tags: [...videoDetails.tags, newTag]
//       });
//       setNewTag("");
//     }
//   };

//   const handleRemoveTag = (tag) => {
//     setVideoDetails({
//       ...videoDetails,
//       tags: videoDetails.tags.filter(t => t !== tag)
//     });
//   };

//   const validateForm = () => {
//     const newErrors = {};
    
//     if (!videoFile) {
//       newErrors.video = "Please upload a video file";
//     }
    
//     if (!videoDetails.title.trim()) {
//       newErrors.title = "Title is required";
//     }
    
//     if (!videoDetails.category) {
//       newErrors.category = "Please select a category";
//     }
    
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     if (!validateForm()) {
//       return;
//     }
    
//     setIsUploading(true);
//     setUploadProgress(0);
    
//     try {
//       // Simulate upload with progress
//       const totalSteps = 10;
//       for (let i = 1; i <= totalSteps; i++) {
//         await new Promise(resolve => setTimeout(resolve, 300));
//         setUploadProgress(i * (100 / totalSteps));
//       }
      
//       // In a real application, you would upload the files to your server or cloud storage
//       // const formData = new FormData();
//       // formData.append("video", videoFile);
//       // formData.append("thumbnail", thumbnailFile);
//       // formData.append("details", JSON.stringify(videoDetails));
//       // const response = await fetch("/api/videos", { method: "POST", body: formData });
      
//       // Create a mock video object
//       const mockVideo = {
//         id: Math.random().toString(36).substr(2, 9),
//         name: videoFile?.name || "",
//         title: videoDetails.title,
//         description: videoDetails.description,
//         category: videoDetails.category,
//         tags: videoDetails.tags,
//         status: "Pending",
//         uploadDate: new Date().toISOString(),
//         uploader: "Teacher",
//         duration: 120, // Mock duration in seconds
//         thumbnailUrl: thumbnailPreview || "https://via.placeholder.com/300x200?text=Video",
//         videoUrl: videoFile ? URL.createObjectURL(videoFile) : "",
//         size: videoFile?.size || 0,
//         views: 0
//       };
      
//       onUploadComplete(mockVideo);
      
//     } catch (error) {
//       onUploadError(error instanceof Error ? error.message : "Upload failed");
//     } finally {
//       setIsUploading(false);
//       setUploadProgress(0);
//     }
//   };

//   return (
//     <VStack spacing={4} as="form" onSubmit={handleSubmit}>
//       <FormControl isInvalid={!!errors.video}>
//         <FormLabel>Upload Video</FormLabel>
//         <Box
//           {...getRootProps()}
//           p={6}
//           borderWidth={2}
//           borderRadius="md"
//           borderStyle="dashed"
//           borderColor={isDragActive ? dropzoneActiveBorderColor : dropzoneBorderColor}
//           bg={isDragActive ? dropzoneActiveColor : dropzoneColor}
//           cursor="pointer"
//           transition="all 0.2s"
//           _hover={{
//             borderColor: "teal.300",
//           }}
//         >
//           <input {...getInputProps()} />
//           <VStack spacing={2}>
//             <AttachmentIcon w={8} h={8} color="teal.500" />
//             {videoFile ? (
//               <Text>{videoFile.name}</Text>
//             ) : (
//               <>
//                 <Text textAlign="center">
//                   {isDragActive
//                     ? "Drop the video here"
//                     : "Drag and drop your video here, or click to select"}
//                 </Text>
//                 <Text fontSize="sm" color="gray.500">
//                   Supports MP4, WebM, MOV (Max 500MB)
//                 </Text>
//               </>
//             )}
//           </VStack>
//         </Box>
//         {errors.video && <FormErrorMessage>{errors.video}</FormErrorMessage>}
//       </FormControl>

//       {videoFile && (
//         <>
//           <FormControl isInvalid={!!errors.title}>
//             <FormLabel>Video Title</FormLabel>
//             <Input
//               value={videoDetails.title}
//               onChange={(e) => setVideoDetails({...videoDetails, title: e.target.value})}
//               placeholder="Enter video title"
//             />
//             {errors.title && <FormErrorMessage>{errors.title}</FormErrorMessage>}
//           </FormControl>
          
//           <FormControl>
//             <FormLabel>Description</FormLabel>
//             <Textarea
//               value={videoDetails.description}
//               onChange={(e) => setVideoDetails({...videoDetails, description: e.target.value})}
//               placeholder="Enter video description"
//               rows={3}
//             />
//           </FormControl>
          
//           <FormControl isInvalid={!!errors.category}>
//             <FormLabel>Category</FormLabel>
//             <Select
//               value={videoDetails.category}
//               onChange={(e) => setVideoDetails({...videoDetails, category: e.target.value})}
//             >
//               {categories.map((category, index) => (
//                 <option key={index} value={category}>
//                   {category}
//                 </option>
//               ))}
//             </Select>
//             {errors.category && <FormErrorMessage>{errors.category}</FormErrorMessage>}
//           </FormControl>
          
//           <FormControl>
//             <FormLabel>Custom Thumbnail (Optional)</FormLabel>
//             <HStack>
//               {thumbnailPreview && (
//                 <Box width="100px" height="60px" overflow="hidden" borderRadius="md">
//                   <img 
//                     src={thumbnailPreview || "https://via.placeholder.com/100x60"} 
//                     alt="Thumbnail preview" 
//                     style={{ width: '100%', height: '100%', objectFit: 'cover' }}
//                   />
//                 </Box>
//               )}
//               <Button as="label" htmlFor="thumbnail-upload" cursor="pointer" leftIcon={<AddIcon />}>
//                 {thumbnailPreview ? "Change Thumbnail" : "Add Thumbnail"}
//               </Button>
//               <Input
//                 id="thumbnail-upload"
//                 type="file"
//                 accept="image/*"
//                 onChange={handleThumbnailChange}
//                 display="none"
//               />
//             </HStack>
//             <Text fontSize="xs" color="gray.500" mt={1}>
//               If not provided, a thumbnail will be generated from the video
//             </Text>
//           </FormControl>
          
//           <FormControl>
//             <FormLabel>Tags</FormLabel>
//             <HStack>
//               <Input
//                 placeholder="Add a tag"
//                 value={newTag}
//                 onChange={(e) => setNewTag(e.target.value)}
//                 onKeyPress={(e) => {
//                   if (e.key === 'Enter') {
//                     e.preventDefault();
//                     handleAddTag();
//                   }
//                 }}
//               />
//               <Button onClick={handleAddTag} isDisabled={!newTag}>
//                 Add
//               </Button>
//             </HStack>
            
//             <Flex wrap="wrap" gap={2} mt={2}>
//               {videoDetails.tags.map((tag, index) => (
//                 <Tag
//                   key={index}
//                   size="md"
//                   borderRadius="full"
//                   variant="solid"
//                   colorScheme="blue"
//                 >
//                   <TagLabel>{tag}</TagLabel>
//                   <TagCloseButton onClick={() => handleRemoveTag(tag)} />
//                 </Tag>
//               ))}
//             </Flex>
//           </FormControl>
          
//           {isUploading && (
//             <Box w="100%">
//               <Text mb={1}>Uploading: {Math.round(uploadProgress)}%</Text>
//               <Progress value={uploadProgress} size="sm" colorScheme="teal" />
//             </Box>
//           )}
          
//           <Button
//             type="submit"
//             colorScheme="teal"
//             isLoading={isUploading}
//             loadingText="Uploading"
//             w="full"
//             mt={2}
//           >
//             Upload Video
//           </Button>
//         </>
//       )}
//     </VStack>
//   );
// };

// // 4. VideoFilterBar Component
// export const VideoFilterBar = ({
//   searchQuery,
//   setSearchQuery,
//   filterStatus,
//   setFilterStatus,
//   sortBy,
//   setSortBy,
//   sortOrder,
//   setSortOrder,
//   onUploadClick,
// }) => {
//   const inputBg = useColorModeValue("white", "gray.800");
//   const borderColor = useColorModeValue("gray.200", "gray.700");

//   return (
//     <Flex mb={4} gap={4} flexWrap="wrap" alignItems="center">
//       <InputGroup maxW="300px">
//         <Input
//           placeholder="Search videos..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           bg={inputBg}
//           borderColor={borderColor}
//         />
//         <InputRightElement>
//           <SearchIcon color="gray.500" />
//         </InputRightElement>
//       </InputGroup>
      
//       <Select
//         maxW="200px"
//         value={filterStatus}
//         onChange={(e) => setFilterStatus(e.target.value)}
//         bg={inputBg}
//         borderColor={borderColor}
//       >
//         <option value="All">All Status</option>
//         <option value="Approved">Approved</option>
//         <option value="Rejected">Rejected</option>
//         <option value="Pending">Pending</option>
//       </Select>
      
//       <Select
//         maxW="200px"
//         value={sortBy}
//         onChange={(e) => setSortBy(e.target.value)}
//         bg={inputBg}
//         borderColor={borderColor}
//       >
//         <option value="uploadDate">Sort by Date</option>
//         <option value="title">Sort by Title</option>
//         <option value="status">Sort by Status</option>
//         <option value="category">Sort by Category</option>
//         <option value="duration">Sort by Duration</option>
//         <option value="views">Sort by Views</option>
//       </Select>
      
//       <IconButton
//         icon={sortOrder === "asc" ? <ChevronUpIcon /> : <ChevronDownIcon />}
//         onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
//         aria-label="Toggle sort order"
//         variant="outline"
//         borderColor={borderColor}
//       />
      
//       <Button
//         leftIcon={<AddIcon />}
//         colorScheme="teal"
//         onClick={onUploadClick}
//         ml="auto"
//       >
//         Upload New Video
//       </Button>
//     </Flex>
//   );
// };

// // 5. StatsDisplay Component
// export const StatsDisplay = ({ stats }) => {
//   const bgColor = useColorModeValue("gray.100", "gray.700");

//   return (
//     <StatGroup mb={6} p={4} bg={bgColor} borderRadius="md">
//       <Stat>
//         <StatLabel>Total Videos</StatLabel>
//         <StatNumber>{stats.total}</StatNumber>
//       </Stat>
//       <Stat>
//         <StatLabel>Approved</StatLabel>
//         <StatNumber>{stats.approved}</StatNumber>
//         <StatHelpText>
//           <StatArrow type="increase" />
//           {stats.total > 0 ? Math.round((stats.approved / stats.total) * 100) : 0}%
//         </StatHelpText>
//       </Stat>
//       <Stat>
//         <StatLabel>Rejected</StatLabel>
//         <StatNumber>{stats.rejected}</StatNumber>
//         <StatHelpText>
//           <StatArrow type="decrease" />
//           {stats.total > 0 ? Math.round((stats.rejected / stats.total) * 100) : 0}%
//         </StatHelpText>
//       </Stat>
//       <Stat>
//         <StatLabel>Pending</StatLabel>
//         <StatNumber>{stats.pending}</StatNumber>
//       </Stat>
//     </StatGroup>
//   );
// };

// // 6. VideoDetailsDrawer Component
// export const VideoDetailsDrawer = ({
//   isOpen,
//   onClose,
//   video,
//   categories,
//   onSave,
// }) => {
//   const [videoDetails, setVideoDetails] = useState({
//     title: "",
//     description: "",
//     category: "",
//     tags: [],
//   });
//   const [newTag, setNewTag] = useState("");
//   const [errors, setErrors] = useState({});

//   useEffect(() => {
//     if (video) {
//       setVideoDetails({
//         title: video.title,
//         description: video.description,
//         category: video.category,
//         tags: [...video.tags],
//       });
//     }
//   }, [video]);

//   const handleAddTag = () => {
//     if (newTag && videoDetails.tags && !videoDetails.tags.includes(newTag)) {
//       setVideoDetails({
//         ...videoDetails,
//         tags: [...videoDetails.tags, newTag]
//       });
//       setNewTag("");
//     }
//   };

//   const handleRemoveTag = (tag) => {
//     if (videoDetails.tags) {
//       setVideoDetails({
//         ...videoDetails,
//         tags: videoDetails.tags.filter(t => t !== tag)
//       });
//     }
//   };

//   const validateForm = () => {
//     const newErrors = {};
    
//     if (!videoDetails.title?.trim()) {
//       newErrors.title = "Title is required";
//     }
    
//     if (!videoDetails.category) {
//       newErrors.category = "Please select a category";
//     }
    
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSave = () => {
//     if (!video || !validateForm()) return;
    
//     onSave(video.id, videoDetails);
//   };

//   // Format date
//   const formatDate = (dateString) => {
//     return new Date(dateString).toLocaleString();
//   };

//   // Format file size
//   const formatFileSize = (bytes) => {
//     if (bytes === 0) return '0 Bytes';
//     const k = 1024;
//     const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
//     const i = Math.floor(Math.log(bytes) / Math.log(k));
//     return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
//   };

//   // Format duration from seconds to MM:SS
//   const formatDuration = (seconds) => {
//     const minutes = Math.floor(seconds / 60);
//     const remainingSeconds = Math.floor(seconds % 60);
//     return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
//   };

//   return (
//     <Drawer
//       isOpen={isOpen}
//       placement="right"
//       onClose={onClose}
//       size="md"
//     >
//       <DrawerOverlay />
//       <DrawerContent>
//         <DrawerCloseButton />
//         <DrawerHeader>Video Details</DrawerHeader>

//         <DrawerBody>
//           {video && (
//             <VStack spacing={4} align="stretch">
//               <Box>
//                 <img 
//                   src={video.thumbnailUrl || "https://via.placeholder.com/300x200?text=Video"} 
//                   alt={video.title}
//                   style={{ 
//                     width: '100%', 
//                     height: '180px', 
//                     objectFit: 'cover',
//                     borderRadius: '8px'
//                   }}
//                 />
//               </Box>
              
//               <FormControl isInvalid={!!errors.title}>
//                 <FormLabel>Video Title</FormLabel>
//                 <Input
//                   value={videoDetails.title}
//                   onChange={(e) => setVideoDetails({...videoDetails, title: e.target.value})}
//                 />
//                 {errors.title && <FormErrorMessage>{errors.title}</FormErrorMessage>}
//               </FormControl>
              
//               <FormControl isInvalid={!!errors.category}>
//                 <FormLabel>Category</FormLabel>
//                 <Select
//                   value={videoDetails.category}
//                   onChange={(e) => setVideoDetails({...videoDetails, category: e.target.value})}
//                 >
//                   {categories.map((category, index) => (
//                     <option key={index} value={category}>
//                       {category}
//                     </option>
//                   ))}
//                 </Select>
//                 {errors.category && <FormErrorMessage>{errors.category}</FormErrorMessage>}
//               </FormControl>
              
//               <FormControl>
//                 <FormLabel>Description</FormLabel>
//                 <Textarea
//                   placeholder="Enter video description"
//                   value={videoDetails.description}
//                   onChange={(e) => setVideoDetails({...videoDetails, description: e.target.value})}
//                   rows={4}
//                 />
//               </FormControl>
              
//               <FormControl>
//                 <FormLabel>Tags</FormLabel>
//                 <HStack>
//                   <Input
//                     placeholder="Add a tag"
//                     value={newTag}
//                     onChange={(e) => setNewTag(e.target.value)}
//                     onKeyPress={(e) => {
//                       if (e.key === 'Enter') {
//                         e.preventDefault();
//                         handleAddTag();
//                       }
//                     }}
//                   />
//                   <Button onClick={handleAddTag} isDisabled={!newTag}>
//                     Add
//                   </Button>
//                 </HStack>
                
//                 <Flex wrap="wrap" gap={2} mt={2}>
//                   {videoDetails.tags?.map((tag, index) => (
//                     <Tag
//                       key={index}
//                       size="md"
//                       borderRadius="full"
//                       variant="solid"
//                       colorScheme="blue"
//                     >
//                       <TagLabel>{tag}</TagLabel>
//                       <TagCloseButton onClick={() => handleRemoveTag(tag)} />
//                     </Tag>
//                   ))}
//                 </Flex>
//               </FormControl>
              
//               <Divider my={2} />
              
//               <Box>
//                 <Text fontWeight="bold">Status:</Text>
//                 <Badge
//                   colorScheme={
//                     video.status === "Approved" ? "green" : 
//                     video.status === "Rejected" ? "red" : "yellow"
//                   }
//                   p={1}
//                   borderRadius="md"
//                   mt={1}
//                 >
//                   {video.status}
//                 </Badge>
//               </Box>
              
//               <HStack spacing={6}>
//                 <Box>
//                   <Text fontWeight="bold">Duration:</Text>
//                   <Text>{formatDuration(video.duration)}</Text>
//                 </Box>
                
//                 <Box>
//                   <Text fontWeight="bold">Size:</Text>
//                   <Text>{formatFileSize(video.size)}</Text>
//                 </Box>
                
//                 <Box>
//                   <Text fontWeight="bold">Views:</Text>
//                   <Text>{video.views}</Text>
//                 </Box>
//               </HStack>
              
//               <Box>
//                 <Text fontWeight="bold">Upload Date:</Text>
//                 <Text>{formatDate(video.uploadDate)}</Text>
//               </Box>
              
//               <Box>
//                 <Text fontWeight="bold">Uploader:</Text>
//                 <Flex align="center" mt={1}>
//                   <Avatar size="sm" name={video.uploader} mr={2}>
//                     <AvatarBadge boxSize="1em" bg="green.500" />
//                   </Avatar>
//                   <Text>{video.uploader}</Text>
//                 </Flex>
//               </Box>
//             </VStack>
//           )}
//         </DrawerBody>

//         <DrawerFooter>
//           <Button variant="outline" mr={3} onClick={onClose}>
//             Cancel
//           </Button>
//           <Button 
//             colorScheme="blue" 
//             onClick={handleSave}
//           >
//             Save Changes
//           </Button>
//         </DrawerFooter>
//       </DrawerContent>
//     </Drawer>
//   );
// };

// // 7. DeleteAlertDialog Component
// export const DeleteAlertDialog = ({
//   isOpen,
//   onClose,
//   onDelete,
//   videoName,
//   cancelRef,
// }) => {
//   return (
//     <AlertDialog
//       isOpen={isOpen}
//       leastDestructiveRef={cancelRef}
//       onClose={onClose}
//     >
//       <AlertDialogOverlay>
//         <AlertDialogContent>
//           <AlertDialogHeader fontSize="lg" fontWeight="bold">
//             Delete Video
//           </AlertDialogHeader>

//           <AlertDialogBody>
//             Are you sure you want to delete "{videoName}"? This action cannot be undone.
//           </AlertDialogBody>

//           <AlertDialogFooter>
//             <Button ref={cancelRef} onClick={onClose}>
//               Cancel
//             </Button>
//             <Button colorScheme="red" onClick={onDelete} ml={3}>
//               Delete
//             </Button>
//           </AlertDialogFooter>
//         </AlertDialogContent>
//       </AlertDialogOverlay>
//     </AlertDialog>
//   );
// };

// // 8. Main VideoManagement Component
// export const VideoManagement = () => {
//   const {
//     videos,
//     loading,
//     stats,
//     filteredVideos,
//     searchQuery,
//     setSearchQuery,
//     filterStatus,
//     setFilterStatus,
//     sortBy,
//     setSortBy,
//     sortOrder,
//     setSortOrder,
//     addVideo,
//     updateVideo,
//     deleteVideo,
//     updateVideoStatus,
//     fetchVideos,
//   } = useVideos();

//   const [selectedVideo, setSelectedVideo] = useState(null);
//   const [categories, setCategories] = useState([
//     "Lectures",
//     "Tutorials",
//     "Workshops",
//     "Presentations",
//     "Other",
//   ]);
  
//   const toast = useToast();
//   const { colorMode, toggleColorMode } = useColorMode();
//   const cancelRef = useRef(null);
  
//   // Modal and drawer states
//   const { 
//     isOpen: isUploadModalOpen, 
//     onOpen: onUploadModalOpen, 
//     onClose: onUploadModalClose 
//   } = useDisclosure();
  
//   const { 
//     isOpen: isDeleteAlertOpen, 
//     onOpen: onDeleteAlertOpen, 
//     onClose: onDeleteAlertClose 
//   } = useDisclosure();
  
//   const { 
//     isOpen: isDetailsDrawerOpen, 
//     onOpen: onDetailsDrawerOpen, 
//     onClose: onDetailsDrawerClose 
//   } = useDisclosure();

//   const { 
//     isOpen: isPreviewModalOpen, 
//     onOpen: onPreviewModalOpen, 
//     onClose: onPreviewModalClose 
//   } = useDisclosure();

//   const bgColor = useColorModeValue("white", "gray.800");
//   const borderColor = useColorModeValue("gray.200", "gray.700");

//   const handleVideoSelect = (video) => {
//     setSelectedVideo(video);
//   };

//   const handleStatusChange = async (videoId, status) => {
//     try {
//       await updateVideoStatus(videoId, status);
//       toast({
//         title: `Video marked as ${status}`,
//         status: status === "Approved" ? "success" : status === "Rejected" ? "error" : "info",
//         duration: 3000,
//         isClosable: true,
//       });
//     } catch (error) {
//       toast({
//         title: "Status Update Failed",
//         description: error instanceof Error ? error.message : "Unknown error occurred",
//         status: "error",
//         duration: 3000,
//         isClosable: true,
//       });
//     }
//   };

//   const handleVideoDelete = async () => {
//     if (!selectedVideo) return;
    
//     try {
//       await deleteVideo(selectedVideo.id);
//       toast({
//         title: "Video Deleted",
//         status: "success",
//         duration: 3000,
//         isClosable: true,
//       });
//       onDeleteAlertClose();
//     } catch (error) {
//       toast({
//         title: "Deletion Failed",
//         description: error instanceof Error ? error.message : "Unknown error occurred",
//         status: "error",
//         duration: 3000,
//         isClosable: true,
//       });
//     }
//   };

//   const handleVideoDetailsUpdate = async (videoId, details) => {
//     try {
//       await updateVideo(videoId, details);
//       toast({
//         title: "Video Details Updated",
//         status: "success",
//         duration: 3000,
//         isClosable: true,
//       });
//       onDetailsDrawerClose();
//     } catch (error) {
//       toast({
//         title: "Update Failed",
//         description: error instanceof Error ? error.message : "Unknown error occurred",
//         status: "error",
//         duration: 3000,
//         isClosable: true,
//       });
//     }
//   };

//   // Format duration from seconds to MM:SS
//   const formatDuration = (seconds) => {
//     const minutes = Math.floor(seconds / 60);
//     const remainingSeconds = Math.floor(seconds % 60);
//     return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
//   };

//   // Format file size
//   const formatFileSize = (bytes) => {
//     if (bytes === 0) return '0 Bytes';
//     const k = 1024;
//     const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
//     const i = Math.floor(Math.log(bytes) / Math.log(k));
//     return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
//   };

//   return (
//     <Container maxW="container.xl" py={6}>
//       <Box
//         p={6}
//         borderRadius="xl"
//         boxShadow="lg"
//         bg={bgColor}
//         borderWidth="1px"
//         borderColor={borderColor}
//       >
//         {/* Header Section */}
//         <Flex justifyContent="space-between" alignItems="center" mb={6}>
//           <Heading size="lg">Teacher Video Management</Heading>
//           <HStack>
//             <Tooltip label={`Switch to ${colorMode === "dark" ? "Light" : "Dark"} Mode`}>
//               <IconButton
//                 icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
//                 onClick={toggleColorMode}
//                 variant="ghost"
//                 aria-label="Toggle color mode"
//               />
//             </Tooltip>
//             <Menu>
//               <MenuButton
//                 as={IconButton}
//                 icon={<SettingsIcon />}
//                 variant="ghost"
//                 aria-label="Settings"
//               />
//               <MenuList>
//                 <MenuItem icon={<RepeatIcon />} onClick={fetchVideos}>Refresh Videos</MenuItem>
//                 <MenuItem icon={<InfoIcon />}>About</MenuItem>
//               </MenuList>
//             </Menu>
//           </HStack>
//         </Flex>

//         {/* Stats Section */}
//         <StatsDisplay stats={stats} />

//         {/* Tabs Section */}
//         <Tabs variant="enclosed" colorScheme="teal" mb={6}>
//           <TabList>
//             <Tab>Videos Management</Tab>
//             <Tab>Categories</Tab>
//           </TabList>
//           <TabPanels>
//             <TabPanel p={0} pt={4}>
//               {/* Search and Filter Section */}
//               <VideoFilterBar 
//                 searchQuery={searchQuery}
//                 setSearchQuery={setSearchQuery}
//                 filterStatus={filterStatus}
//                 setFilterStatus={setFilterStatus}
//                 sortBy={sortBy}
//                 setSortBy={setSortBy}
//                 sortOrder={sortOrder}
//                 setSortOrder={setSortOrder}
//                 onUploadClick={onUploadModalOpen}
//               />

//               {/* Videos Display */}
//               {loading ? (
//                 <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap={6} mt={6}>
//                   {[1, 2, 3, 4].map((i) => (
//                     <Skeleton key={i} height="300px" borderRadius="lg" />
//                   ))}
//                 </Grid>
//               ) : (
//                 <>
//                   {filteredVideos.length > 0 ? (
//                     <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap={6} mt={6}>
//                       {filteredVideos.map((video) => (
//                         <VideoCard 
//                           key={video.id}
//                           video={video}
//                           onView={() => {
//                             setSelectedVideo(video);
//                             onPreviewModalOpen();
//                           }}
//                           onEdit={() => {
//                             setSelectedVideo(video);
//                             onDetailsDrawerOpen();
//                           }}
//                           onApprove={() => handleStatusChange(video.id, "Approved")}
//                           onReject={() => handleStatusChange(video.id, "Rejected")}
//                           onDelete={() => {
//                             setSelectedVideo(video);
//                             onDeleteAlertOpen();
//                           }}
//                         />
//                       ))}
//                     </Grid>
//                   ) : (
//                     <Box textAlign="center" py={10}>
//                       <Text color="gray.500">
//                         {searchQuery || filterStatus !== "All"
//                           ? "No videos match your search criteria."
//                           : "No videos uploaded yet."}
//                       </Text>
//                       <Button
//                         mt={4}
//                         leftIcon={<AddIcon />}
//                         colorScheme="teal"
//                         onClick={onUploadModalOpen}
//                       >
//                         Upload New Video
//                       </Button>
//                     </Box>
//                   )}
//                 </>
//               )}
//             </TabPanel>
            
//             <TabPanel>
//               <VStack align="stretch" spacing={4}>
//                 <Heading size="md" mb={2}>Manage Categories</Heading>
                
//                 <HStack>
//                   <Input
//                     placeholder="New category name"
//                     id="new-category"
//                     name="new-category"
//                   />
//                   <Button
//                     colorScheme="teal"
//                     onClick={() => {
//                       const input = document.getElementById('new-category');
//                       if (input instanceof HTMLInputElement) {
//                         const newCategory = input.value.trim();
//                         if (newCategory && !categories.includes(newCategory)) {
//                           setCategories([...categories, newCategory]);
//                           input.value = '';
//                         }
//                       }
//                     }}
//                   >
//                     Add Category
//                   </Button>
//                 </HStack>
                
//                 <Box>
//                   <Text fontWeight="bold" mb={2}>Current Categories:</Text>
//                   <Flex wrap="wrap" gap={2}>
//                     {categories.map((category, index) => (
//                       <Tag
//                         key={index}
//                         size="lg"
//                         borderRadius="full"
//                         variant="solid"
//                         colorScheme="teal"
//                       >
//                         <TagLabel>{category}</TagLabel>
//                         <TagCloseButton 
//                           onClick={() => {
//                             setCategories(categories.filter(c => c !== category));
//                           }}
//                         />
//                       </Tag>
//                     ))}
//                   </Flex>
//                 </Box>
//               </VStack>
//             </TabPanel>
//           </TabPanels>
//         </Tabs>

//         {/* Upload Video Modal */}
//         <Modal isOpen={isUploadModalOpen} onClose={onUploadModalClose} size="xl">
//           <ModalOverlay />
//           <ModalContent>
//             <ModalHeader>Upload New Video</ModalHeader>
//             <ModalCloseButton />
//             <ModalBody>
//               <VideoUploader 
//                 categories={categories}
//                 onUploadComplete={(video) => {
//                   addVideo(video);
//                   onUploadModalClose();
//                   toast({
//                     title: "Upload Successful",
//                     description: "Your video has been uploaded successfully.",
//                     status: "success",
//                     duration: 3000,
//                     isClosable: true,
//                   });
//                 }}
//                 onUploadError={(error) => {
//                   toast({
//                     title: "Upload Failed",
//                     description: error,
//                     status: "error",
//                     duration: 3000,
//                     isClosable: true,
//                   });
//                 }}
//               />
//             </ModalBody>
//           </ModalContent>
//         </Modal>

//         {/* Delete Confirmation Alert */}
//         <DeleteAlertDialog 
//           isOpen={isDeleteAlertOpen}
//           onClose={onDeleteAlertClose}
//           onDelete={handleVideoDelete}
//           videoName={selectedVideo?.title || ""}
//           cancelRef={cancelRef}
//         />

//         {/* Video Details Drawer */}
//         <VideoDetailsDrawer 
//           isOpen={isDetailsDrawerOpen}
//           onClose={onDetailsDrawerClose}
//           video={selectedVideo}
//           categories={categories}
//           onSave={handleVideoDetailsUpdate}
//         />

//         {/* Video Preview Modal */}
//         <Modal isOpen={isPreviewModalOpen} onClose={onPreviewModalClose} size="4xl" isCentered>
//           <ModalOverlay />
//           <ModalContent>
//             <ModalHeader>{selectedVideo?.title}</ModalHeader>
//             <ModalCloseButton />
//             <ModalBody>
//               {selectedVideo && (
//                 <VStack spacing={4} align="stretch">
//                   <VideoPlayer videoUrl={selectedVideo.videoUrl} />
                  
//                   <Box>
//                     <Heading size="md" mb={2}>{selectedVideo.title}</Heading>
//                     <Flex gap={2} mb={2}>
//                       <Badge colorScheme={
//                         selectedVideo.status === "Approved" ? "green" : 
//                         selectedVideo.status === "Rejected" ? "red" : "yellow"
//                       }>
//                         {selectedVideo.status}
//                       </Badge>
//                       <Badge colorScheme="blue">{selectedVideo.category}</Badge>
//                       <Badge colorScheme="purple">{formatDuration(selectedVideo.duration)}</Badge>
//                       <Badge colorScheme="gray">{formatFileSize(selectedVideo.size)}</Badge>
//                     </Flex>
//                     <Text>{selectedVideo.description}</Text>
                    
//                     <Flex mt={3} wrap="wrap" gap={2}>
//                       {selectedVideo.tags.map((tag, index) => (
//                         <Tag key={index} size="sm" colorScheme="teal">
//                           {tag}
//                         </Tag>
//                       ))}
//                     </Flex>
//                   </Box>
//                 </VStack>
//               )}
//             </ModalBody>
//             <ModalFooter>
//               <Button colorScheme="blue" mr={3} onClick={onPreviewModalClose}>
//                 Close
//               </Button>
//               <Button 
//                 colorScheme="teal" 
//                 leftIcon={<EditIcon />}
//                 onClick={() => {
//                   onPreviewModalClose();
//                   onDetailsDrawerOpen();
//                 }}
//               >
//                 Edit Details
//               </Button>
//             </ModalFooter>
//           </ModalContent>
//         </Modal>
//       </Box>
//     </Container>
//   );
// };

// // 9. App Component
// export default function App() {
//   return (
//     <ChakraProvider>
//       <VideoManagement />
//     </ChakraProvider>
//   );
// }



import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import {
  Box,
  Button,
  Input,
  VStack,
  HStack,
  Text,
  IconButton,
  useToast,
  Badge,
  Flex,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Select,
  InputGroup,
  InputRightElement,
  Tooltip,
  Spinner,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useColorMode,
  Switch,
  Tag,
  TagLabel,
  TagCloseButton,
  Progress,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  Divider,
  Avatar,
  AvatarBadge,
  Skeleton,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  FormErrorMessage,
  useColorModeValue,
  Container,
  Grid,
  GridItem,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Image,
  Stack,
  Textarea,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  ChakraProvider,
} from "@chakra-ui/react";
import {
  DeleteIcon,
  CheckIcon,
  CloseIcon,
  EditIcon,
  DownloadIcon,
  ViewIcon,
  SearchIcon,
  AddIcon,
  RepeatIcon,
  StarIcon,
  InfoIcon,
  SettingsIcon,
  MoonIcon,
  SunIcon,
  HamburgerIcon,
  ChevronDownIcon,
  AttachmentIcon,
  TimeIcon,
  WarningIcon,
  UpDownIcon,
  ExternalLinkIcon,
  CopyIcon,
  ChevronUpIcon,
} from "@chakra-ui/icons";

// ============= MOCK DATA =============
const mockVideos = [
  {
    id: "1",
    name: "introduction-to-algebra.mp4",
    title: "Introduction to Algebra",
    description: "A comprehensive introduction to algebraic concepts for high school students.",
    category: "Lectures",
    tags: ["math", "algebra", "introduction"],
    status: "Approved",
    uploadDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    uploader: "Mrs. Johnson",
    duration: 1845,
    thumbnailUrl: "https://via.placeholder.com/300x200?text=Algebra",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    size: 256000000,
    views: 128
  },
  {
    id: "2",
    name: "chemistry-lab-safety.mp4",
    title: "Chemistry Lab Safety Procedures",
    description: "Essential safety guidelines for all students working in the chemistry laboratory.",
    category: "Tutorials",
    tags: ["chemistry", "safety", "lab"],
    status: "Approved",
    uploadDate: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
    uploader: "Dr. Martinez",
    duration: 1230,
    thumbnailUrl: "https://via.placeholder.com/300x200?text=Chemistry",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    size: 189000000,
    views: 95
  },
  {
    id: "3",
    name: "history-world-war-2.mp4",
    title: "World War II: Causes and Effects",
    description: "An in-depth analysis of the causes, major events, and lasting impacts of World War II.",
    category: "Lectures",
    tags: ["history", "world war", "20th century"],
    status: "Pending",
    uploadDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    uploader: "Mr. Thompson",
    duration: 2760,
    thumbnailUrl: "https://via.placeholder.com/300x200?text=History",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    size: 320000000,
    views: 42
  },
  {
    id: "4",
    name: "coding-python-basics.mp4",
    title: "Python Programming for Beginners",
    description: "Learn the fundamentals of Python programming language with practical examples.",
    category: "Tutorials",
    tags: ["programming", "python", "coding"],
    status: "Rejected",
    uploadDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    uploader: "Ms. Garcia",
    duration: 3600,
    thumbnailUrl: "https://via.placeholder.com/300x200?text=Python",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    size: 420000000,
    views: 67
  }
];

// ============= CUSTOM ICONS =============
const PlayIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
  </svg>
);
const PauseIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z" clipRule="evenodd" />
  </svg>
);
const VolumeUpIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 11-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06z" />
    <path d="M15.932 7.757a.75.75 0 011.061 0 6 6 0 010 8.486.75.75 0 01-1.06-1.061 4.5 4.5 0 000-6.364.75.75 0 010-1.06z" />
  </svg>
);
const VolumeOffIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM17.78 9.22a.75.75 0 10-1.06 1.06L18.44 12l-1.72 1.72a.75.75 0 001.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 101.06-1.06L20.56 12l1.72-1.72a.75.75 0 00-1.06-1.06l-1.72 1.72-1.72-1.72z" />
  </svg>
);
const ExpandIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M15 3.75a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0V5.56l-3.97 3.97a.75.75 0 11-1.06-1.06l3.97-3.97h-2.69a.75.75 0 01-.75-.75zm-12 0A.75.75 0 013.75 3h4.5a.75.75 0 010 1.5H5.56l3.97 3.97a.75.75 0 01-1.06 1.06L4.5 5.56v2.69a.75.75 0 01-1.5 0v-4.5zm11.47 11.78a.75.75 0 111.06-1.06l3.97 3.97v-2.69a.75.75 0 011.5 0v4.5a.75.75 0 01-.75.75h-4.5a.75.75 0 010-1.5h2.69l-3.97-3.97zm-4.94-1.06a.75.75 0 010 1.06L5.56 19.5h2.69a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75v-4.5a.75.75 0 011.5 0v2.69l3.97-3.97a.75.75 0 011.06 0z" clipRule="evenodd" />
  </svg>
);
const SpeakerWaveIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 11-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06z" />
    <path d="M15.932 7.757a.75.75 0 011.061 0 6 6 0 010 8.486.75.75 0 01-1.06-1.061 4.5 4.5 0 000-6.364.75.75 0 010-1.06z" />
  </svg>
);
const ArrowPathIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-3.97 3.97a.75.75 0 10-1.06 1.06l3.97-3.97h-2.69a.75.75 0 01-.75-.75zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z" clipRule="evenodd" />
  </svg>
);

// ============= HOOKS =============
export const useVideos = () => {
  const [videos, setVideos] = useState(mockVideos);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [sortBy, setSortBy] = useState("uploadDate");
  const [sortOrder, setSortOrder] = useState("desc");

  const stats = useMemo(() => {
    const total = videos.length;
    const approved = videos.filter(video => video.status === "Approved").length;
    const rejected = videos.filter(video => video.status === "Rejected").length;
    const pending = videos.filter(video => video.status === "Pending").length;
    return { total, approved, rejected, pending };
  }, [videos]);

  const filteredVideos = useMemo(() => {
    return videos
      .filter(video => 
        (filterStatus === "All" || video.status === filterStatus) &&
        (video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
         (video.description && video.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
         (video.tags && video.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))))
      )
      .sort((a, b) => {
        if (sortBy === "title") {
          return sortOrder === "asc" 
            ? a.title.localeCompare(b.title)
            : b.title.localeCompare(a.title);
        } else if (sortBy === "status") {
          return sortOrder === "asc"
            ? a.status.localeCompare(b.status)
            : b.status.localeCompare(a.status);
        } else if (sortBy === "category") {
          return sortOrder === "asc"
            ? (a.category || "").localeCompare(b.category || "")
            : (b.category || "").localeCompare(a.category || "");
        } else if (sortBy === "duration") {
          return sortOrder === "asc"
            ? a.duration - b.duration
            : b.duration - a.duration;
        } else if (sortBy === "views") {
          return sortOrder === "asc"
            ? a.views - b.views
            : b.views - a.views;
        } else {
          return sortOrder === "asc"
            ? new Date(a.uploadDate).getTime() - new Date(b.uploadDate).getTime()
            : new Date(b.uploadDate).getTime() - new Date(a.uploadDate).getTime();
        }
      });
  }, [videos, searchQuery, filterStatus, sortBy, sortOrder]);

  const fetchVideos = async () => {
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (error) {
      console.error("Error fetching videos:", error);
    } finally {
      setLoading(false);
    }
  };

  const addVideo = (video) => {
    setVideos(prev => [...prev, video]);
  };

  const updateVideo = async (videoId, details) => {
    setVideos(prev => 
      prev.map(video => 
        video.id === videoId ? { ...video, ...details } : video
      )
    );
    return true;
  };

  const deleteVideo = async (videoId) => {
    setVideos(prev => prev.filter(video => video.id !== videoId));
    return true;
  };

  const updateVideoStatus = async (videoId, status) => {
    return updateVideo(videoId, { status });
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  return {
    videos,
    loading,
    stats,
    filteredVideos,
    searchQuery,
    setSearchQuery,
    filterStatus,
    setFilterStatus,
    sortBy,
    setSortBy,
    sortOrder,
    setSortOrder,
    addVideo,
    updateVideo,
    deleteVideo,
    updateVideoStatus,
    fetchVideos,
  };
};

// ============= COMPONENTS =============
export const VideoPlayer = ({ videoUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [isBuffering, setIsBuffering] = useState(false);
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const controlsTimeoutRef = useRef(null);
  const bgColor = useColorModeValue("black", "black");
  const controlsBg = "rgba(0, 0, 0, 0.7)";
  const textColor = "white";

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const onTimeUpdate = () => setCurrentTime(video.currentTime);
    const onLoadedMetadata = () => setDuration(video.duration);
    const onEnded = () => setIsPlaying(false);
    const onWaiting = () => setIsBuffering(true);
    const onPlaying = () => setIsBuffering(false);

    video.addEventListener("timeupdate", onTimeUpdate);
    video.addEventListener("loadedmetadata", onLoadedMetadata);
    video.addEventListener("ended", onEnded);
    video.addEventListener("waiting", onWaiting);
    video.addEventListener("playing", onPlaying);

    return () => {
      video.removeEventListener("timeupdate", onTimeUpdate);
      video.removeEventListener("loadedmetadata", onLoadedMetadata);
      video.removeEventListener("ended", onEnded);
      video.removeEventListener("waiting", onWaiting);
      video.removeEventListener("playing", onPlaying);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (isPlaying) {
      video.play().catch(() => setIsPlaying(false));
    } else {
      video.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.volume = isMuted ? 0 : volume;
  }, [volume, isMuted]);

  const togglePlay = () => setIsPlaying(!isPlaying);
  const toggleMute = () => setIsMuted(!isMuted);
  const handleVolumeChange = (value) => {
    setVolume(value);
    if (value === 0) setIsMuted(true);
    else if (isMuted) setIsMuted(false);
  };
  const handleSeek = (value) => {
    if (videoRef.current) {
      videoRef.current.currentTime = value;
      setCurrentTime(value);
    }
  };
  const toggleFullscreen = () => {
    if (!playerRef.current) return;
    if (!document.fullscreenElement) {
      playerRef.current.requestFullscreen().then(() => setIsFullscreen(true));
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };
  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) setShowControls(false);
    }, 3000);
  };

  return (
    <Box
      ref={playerRef}
      position="relative"
      width="100%"
      bg={bgColor}
      borderRadius="md"
      overflow="hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => isPlaying && setShowControls(false)}
    >
      <video
        ref={videoRef}
        src={videoUrl}
        width="100%"
        height="auto"
        onClick={togglePlay}
        style={{ display: "block" }}
      />
      {(!isPlaying || showControls) && (
        <Flex
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          alignItems="center"
          justifyContent="center"
          width="80px"
          height="80px"
          borderRadius="full"
          bg="rgba(0, 0, 0, 0.5)"
          opacity={0.8}
          transition="opacity 0.2s"
          _hover={{ opacity: 1 }}
          cursor="pointer"
          onClick={togglePlay}
        >
          {isBuffering ? (
            <ArrowPathIcon className="w-10 h-10 text-white animate-spin" />
          ) : isPlaying ? (
            <PauseIcon className="w-10 h-10 text-white" />
          ) : (
            <PlayIcon className="w-10 h-10 text-white" />
          )}
        </Flex>
      )}
      <Box
        position="absolute"
        bottom={0}
        left={0}
        right={0}
        bg={controlsBg}
        p={3}
        transition="opacity 0.3s"
        opacity={showControls ? 1 : 0}
      >
        <VStack spacing={2}>
          <Slider
            aria-label="video progress"
            value={currentTime}
            min={0}
            max={duration || 100}
            onChange={handleSeek}
            focusThumbOnChange={false}
          >
            <SliderTrack bg="gray.600">
              <SliderFilledTrack bg="teal.500" />
            </SliderTrack>
            <SliderThumb boxSize={3} />
          </Slider>
          <Flex width="100%" justifyContent="space-between" alignItems="center">
            <HStack spacing={2}>
              <IconButton
                aria-label={isPlaying ? "Pause" : "Play"}
                icon={isPlaying ? <PauseIcon className="w-5 h-5" /> : <PlayIcon className="w-5 h-5" />}
                onClick={togglePlay}
                variant="ghost"
                color={textColor}
                size="sm"
              />
              <HStack width="120px">
                <IconButton
                  aria-label={isMuted ? "Unmute" : "Mute"}
                  icon={isMuted ? <VolumeOffIcon className="w-5 h-5" /> : <SpeakerWaveIcon className="w-5 h-5" />}
                  onClick={toggleMute}
                  variant="ghost"
                  color={textColor}
                  size="sm"
                />
                <Slider
                  aria-label="volume"
                  value={isMuted ? 0 : volume}
                  min={0}
                  max={1}
                  step={0.01}
                  onChange={handleVolumeChange}
                  width="80px"
                  focusThumbOnChange={false}
                >
                  <SliderTrack bg="gray.600">
                    <SliderFilledTrack bg="teal.500" />
                  </SliderTrack>
                  <SliderThumb boxSize={2} />
                </Slider>
              </HStack>
              <Text color={textColor} fontSize="sm">
                {formatTime(currentTime)} / {formatTime(duration)}
              </Text>
            </HStack>
            <IconButton
              aria-label="Fullscreen"
              icon={<ExpandIcon className="w-5 h-5" />}
              onClick={toggleFullscreen}
              variant="ghost"
              color={textColor}
              size="sm"
            />
          </Flex>
        </VStack>
      </Box>
    </Box>
  );
};

export const VideoCard = ({
  video,
  onView,
  onEdit,
  onApprove,
  onReject,
  onDelete,
}) => {
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const bgColor = useColorModeValue("white", "gray.800");

  const formatDuration = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString();
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Approved": return "green";
      case "Rejected": return "red";
      case "Pending": return "yellow";
      default: return "gray";
    }
  };

  return (
    <Card maxW="sm" borderWidth="1px" borderColor={borderColor} bg={bgColor} overflow="hidden">
      <Box position="relative">
        <Image
          src={video.thumbnailUrl || "https://via.placeholder.com/300x200?text=Video"}
          alt={video.title}
          objectFit="cover"
          height="180px"
          width="100%"
        />
        <Badge 
          position="absolute" 
          top={2} 
          right={2} 
          colorScheme={getStatusColor(video.status)}
          px={2}
          py={1}
          borderRadius="md"
        >
          {video.status}
        </Badge>
        <Badge 
          position="absolute" 
          bottom={2} 
          right={2} 
          colorScheme="blackAlpha"
          px={2}
          py={1}
          borderRadius="md"
          bg="rgba(0, 0, 0, 0.7)"
        >
          {formatDuration(video.duration)}
        </Badge>
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bg="rgba(0, 0, 0, 0.3)"
          opacity="0"
          transition="opacity 0.2s"
          _hover={{ opacity: 1 }}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <IconButton
            aria-label="Play video"
            icon={<ViewIcon />}
            size="lg"
            colorScheme="teal"
            onClick={onView}
            borderRadius="full"
          />
        </Box>
      </Box>
      <CardBody>
        <Stack spacing={2}>
          <Heading size="md" noOfLines={2}>{video.title}</Heading>
          <Text color="gray.500" fontSize="sm">
            Uploaded on {formatDate(video.uploadDate)}
          </Text>
          <HStack>
            <Badge colorScheme="blue">{video.category}</Badge>
            {video.tags.slice(0, 2).map((tag, index) => (
              <Badge key={index} colorScheme="purple">{tag}</Badge>
            ))}
            {video.tags.length > 2 && (
              <Badge colorScheme="gray">+{video.tags.length - 2}</Badge>
            )}
          </HStack>
          <Text noOfLines={2} fontSize="sm">
            {video.description || "No description provided"}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <HStack spacing={2} width="100%" justifyContent="space-between">
          <Tooltip label="View">
            <IconButton
              icon={<ViewIcon />}
              size="sm"
              colorScheme="blue"
              onClick={onView}
              aria-label="View video"
            />
          </Tooltip>
          <Tooltip label="Edit">
            <IconButton
              icon={<EditIcon />}
              size="sm"
              colorScheme="gray"
              onClick={onEdit}
              aria-label="Edit video"
            />
          </Tooltip>
          <Tooltip label="Approve">
            <IconButton
              icon={<CheckIcon />}
              size="sm"
              colorScheme="green"
              isDisabled={video.status === "Approved"}
              onClick={onApprove}
              aria-label="Approve video"
            />
          </Tooltip>
          <Tooltip label="Reject">
            <IconButton
              icon={<CloseIcon />}
              size="sm"
              colorScheme="red"
              isDisabled={video.status === "Rejected"}
              onClick={onReject}
              aria-label="Reject video"
            />
          </Tooltip>
          <Tooltip label="Delete">
            <IconButton
              icon={<DeleteIcon />}
              size="sm"
              colorScheme="red"
              variant="outline"
              onClick={onDelete}
              aria-label="Delete video"
            />
          </Tooltip>
        </HStack>
      </CardFooter>
    </Card>
  );
};

export const VideoUploader = ({ 
  categories, 
  onUploadComplete, 
  onUploadError 
}) => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [videoFile, setVideoFile] = useState(null);
  const [thumbnailFile, setThumbnailFile] = useState(null);
  const [thumbnailPreview, setThumbnailPreview] = useState(null);
  const [videoDetails, setVideoDetails] = useState({
    title: "",
    description: "",
    category: categories[0] || "Other",
    tags: [],
  });
  const [newTag, setNewTag] = useState("");
  const [errors, setErrors] = useState({});
  const dropzoneColor = useColorModeValue("gray.100", "gray.700");
  const dropzoneActiveColor = useColorModeValue("teal.50", "teal.900");
  const dropzoneBorderColor = useColorModeValue("gray.300", "gray.600");
  const dropzoneActiveBorderColor = useColorModeValue("teal.300", "teal.600");

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      if (file.type.startsWith("video/")) {
        setVideoFile(file);
        setVideoDetails(prev => ({
          ...prev,
          title: file.name.split(".")[0].replace(/-|_/g, " ")
        }));
        const video = document.createElement("video");
        video.preload = "metadata";
        video.src = URL.createObjectURL(file);
        video.onloadedmetadata = () => {
          video.currentTime = 1;
        };
        video.onseeked = () => {
          const canvas = document.createElement("canvas");
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
          const ctx = canvas.getContext("2d");
          ctx?.drawImage(video, 0, 0, canvas.width, canvas.height);
          const thumbnailDataUrl = canvas.toDataURL("image/jpeg");
          setThumbnailPreview(thumbnailDataUrl);
          fetch(thumbnailDataUrl)
            .then(res => res.blob())
            .then(blob => {
              const thumbnailFile = new File([blob], `${file.name.split(".")[0]}-thumbnail.jpg`, { type: "image/jpeg" });
              setThumbnailFile(thumbnailFile);
            });
        };
      } else {
        onUploadError("Please upload a video file");
      }
    }
  }, [onUploadError]);

  const { getRootProps, getInputProps, isDragActive } = {
    getRootProps: () => ({
      onClick: () => document.getElementById('file-upload').click(),
      onDragOver: (e) => {
        e.preventDefault();
        e.stopPropagation();
      },
      onDrop: (e) => {
        e.preventDefault();
        e.stopPropagation();
        const files = e.dataTransfer.files;
        if (files.length) onDrop([...files]);
      }
    }),
    getInputProps: () => ({
      id: 'file-upload',
      type: 'file',
      accept: 'video/*',
      style: { display: 'none' },
      onChange: (e) => {
        if (e.target.files?.length) onDrop([...e.target.files]);
      }
    }),
    isDragActive: false
  };

  const handleThumbnailChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.type.startsWith("image/")) {
        setThumbnailFile(file);
        setThumbnailPreview(URL.createObjectURL(file));
      } else {
        onUploadError("Please upload an image file for the thumbnail");
      }
    }
  };

  const handleAddTag = () => {
    if (newTag && !videoDetails.tags.includes(newTag)) {
      setVideoDetails({
        ...videoDetails,
        tags: [...videoDetails.tags, newTag]
      });
      setNewTag("");
    }
  };

  const handleRemoveTag = (tag) => {
    setVideoDetails({
      ...videoDetails,
      tags: videoDetails.tags.filter(t => t !== tag)
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!videoFile) newErrors.video = "Please upload a video file";
    if (!videoDetails.title.trim()) newErrors.title = "Title is required";
    if (!videoDetails.category) newErrors.category = "Please select a category";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsUploading(true);
    setUploadProgress(0);
    try {
      const totalSteps = 10;
      for (let i = 1; i <= totalSteps; i++) {
        await new Promise(resolve => setTimeout(resolve, 300));
        setUploadProgress(i * (100 / totalSteps));
      }
      const mockVideo = {
        id: Math.random().toString(36).substr(2, 9),
        name: videoFile?.name || "",
        title: videoDetails.title,
        description: videoDetails.description,
        category: videoDetails.category,
        tags: videoDetails.tags,
        status: "Pending",
        uploadDate: new Date().toISOString(),
        uploader: "Teacher",
        duration: 120,
        thumbnailUrl: thumbnailPreview || "https://via.placeholder.com/300x200?text=Video",
        videoUrl: videoFile ? URL.createObjectURL(videoFile) : "",
        size: videoFile?.size || 0,
        views: 0
      };
      onUploadComplete(mockVideo);
    } catch (error) {
      onUploadError(error instanceof Error ? error.message : "Upload failed");
    } finally {
      setIsUploading(false);
      setUploadProgress(0);
    }
  };

  return (
    <VStack spacing={4} as="form" onSubmit={handleSubmit}>
      <FormControl isInvalid={!!errors.video}>
        <FormLabel>Upload Video</FormLabel>
        <Box
          {...getRootProps()}
          p={6}
          borderWidth={2}
          borderRadius="md"
          borderStyle="dashed"
          borderColor={isDragActive ? dropzoneActiveBorderColor : dropzoneBorderColor}
          bg={isDragActive ? dropzoneActiveColor : dropzoneColor}
          cursor="pointer"
          transition="all 0.2s"
          _hover={{ borderColor: "teal.300" }}
        >
          <input {...getInputProps()} />
          <VStack spacing={2}>
            <AttachmentIcon w={8} h={8} color="teal.500" />
            {videoFile ? (
              <Text>{videoFile.name}</Text>
            ) : (
              <>
                <Text textAlign="center">
                  {isDragActive
                    ? "Drop the video here"
                    : "Drag and drop your video here, or click to select"}
                </Text>
                <Text fontSize="sm" color="gray.500">
                  Supports MP4, WebM, MOV (Max 500MB)
                </Text>
              </>
            )}
          </VStack>
        </Box>
        {errors.video && <FormErrorMessage>{errors.video}</FormErrorMessage>}
      </FormControl>
      {videoFile && (
        <>
          <FormControl isInvalid={!!errors.title}>
            <FormLabel>Video Title</FormLabel>
            <Input
              value={videoDetails.title}
              onChange={(e) => setVideoDetails({...videoDetails, title: e.target.value})}
              placeholder="Enter video title"
            />
            {errors.title && <FormErrorMessage>{errors.title}</FormErrorMessage>}
          </FormControl>
          <FormControl>
            <FormLabel>Description</FormLabel>
            <Textarea
              value={videoDetails.description}
              onChange={(e) => setVideoDetails({...videoDetails, description: e.target.value})}
              placeholder="Enter video description"
              rows={3}
            />
          </FormControl>
          <FormControl isInvalid={!!errors.category}>
            <FormLabel>Category</FormLabel>
            <Select
              value={videoDetails.category}
              onChange={(e) => setVideoDetails({...videoDetails, category: e.target.value})}
            >
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </Select>
            {errors.category && <FormErrorMessage>{errors.category}</FormErrorMessage>}
          </FormControl>
          <FormControl>
            <FormLabel>Custom Thumbnail (Optional)</FormLabel>
            <HStack>
              {thumbnailPreview && (
                <Box width="100px" height="60px" overflow="hidden" borderRadius="md">
                  <img 
                    src={thumbnailPreview || "https://via.placeholder.com/100x60"} 
                    alt="Thumbnail preview" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </Box>
              )}
              <Button as="label" htmlFor="thumbnail-upload" cursor="pointer" leftIcon={<AddIcon />}>
                {thumbnailPreview ? "Change Thumbnail" : "Add Thumbnail"}
              </Button>
              <Input
                id="thumbnail-upload"
                type="file"
                accept="image/*"
                onChange={handleThumbnailChange}
                display="none"
              />
            </HStack>
            <Text fontSize="xs" color="gray.500" mt={1}>
              If not provided, a thumbnail will be generated from the video
            </Text>
          </FormControl>
          <FormControl>
            <FormLabel>Tags</FormLabel>
            <HStack>
              <Input
                placeholder="Add a tag"
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    handleAddTag();
                  }
                }}
              />
              <Button onClick={handleAddTag} isDisabled={!newTag}>
                Add
              </Button>
            </HStack>
            <Flex wrap="wrap" gap={2} mt={2}>
              {videoDetails.tags.map((tag, index) => (
                <Tag
                  key={index}
                  size="md"
                  borderRadius="full"
                  variant="solid"
                  colorScheme="blue"
                >
                  <TagLabel>{tag}</TagLabel>
                  <TagCloseButton onClick={() => handleRemoveTag(tag)} />
                </Tag>
              ))}
            </Flex>
          </FormControl>
          {isUploading && (
            <Box w="100%">
              <Text mb={1}>Uploading: {Math.round(uploadProgress)}%</Text>
              <Progress value={uploadProgress} size="sm" colorScheme="teal" />
            </Box>
          )}
          <Button
            type="submit"
            colorScheme="teal"
            isLoading={isUploading}
            loadingText="Uploading"
            w="full"
            mt={2}
          >
            Upload Video
          </Button>
        </>
      )}
    </VStack>
  );
};

export const VideoFilterBar = ({
  searchQuery,
  setSearchQuery,
  filterStatus,
  setFilterStatus,
  sortBy,
  setSortBy,
  sortOrder,
  setSortOrder,
  onUploadClick,
}) => {
  const inputBg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  return (
    <Flex mb={4} gap={4} flexWrap="wrap" alignItems="center">
      <InputGroup maxW="300px">
        <Input
          placeholder="Search videos..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          bg={inputBg}
          borderColor={borderColor}
        />
        <InputRightElement>
          <SearchIcon color="gray.500" />
        </InputRightElement>
      </InputGroup>
      <Select
        maxW="200px"
        value={filterStatus}
        onChange={(e) => setFilterStatus(e.target.value)}
        bg={inputBg}
        borderColor={borderColor}
      >
        <option value="All">All Status</option>
        <option value="Approved">Approved</option>
        <option value="Rejected">Rejected</option>
        <option value="Pending">Pending</option>
      </Select>
      <Select
        maxW="200px"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        bg={inputBg}
        borderColor={borderColor}
      >
        <option value="uploadDate">Sort by Date</option>
        <option value="title">Sort by Title</option>
        <option value="status">Sort by Status</option>
        <option value="category">Sort by Category</option>
        <option value="duration">Sort by Duration</option>
        <option value="views">Sort by Views</option>
      </Select>
      <IconButton
        icon={sortOrder === "asc" ? <ChevronUpIcon /> : <ChevronDownIcon />}
        onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
        aria-label="Toggle sort order"
        variant="outline"
        borderColor={borderColor}
      />
      <Button
        leftIcon={<AddIcon />}
        colorScheme="teal"
        onClick={onUploadClick}
        ml="auto"
      >
        Upload New Video
      </Button>
    </Flex>
  );
};

export const StatsDisplay = ({ stats }) => {
  const bgColor = useColorModeValue("gray.100", "gray.700");
  return (
    <StatGroup mb={6} p={4} bg={bgColor} borderRadius="md">
      <Stat>
        <StatLabel>Total Videos</StatLabel>
        <StatNumber>{stats.total}</StatNumber>
      </Stat>
      <Stat>
        <StatLabel>Approved</StatLabel>
        <StatNumber>{stats.approved}</StatNumber>
        <StatHelpText>
          <StatArrow type="increase" />
          {stats.total > 0 ? Math.round((stats.approved / stats.total) * 100) : 0}%
        </StatHelpText>
      </Stat>
      <Stat>
        <StatLabel>Rejected</StatLabel>
        <StatNumber>{stats.rejected}</StatNumber>
        <StatHelpText>
          <StatArrow type="decrease" />
          {stats.total > 0 ? Math.round((stats.rejected / stats.total) * 100) : 0}%
        </StatHelpText>
      </Stat>
      <Stat>
        <StatLabel>Pending</StatLabel>
        <StatNumber>{stats.pending}</StatNumber>
      </Stat>
    </StatGroup>
  );
};

export const VideoDetailsDrawer = ({
  isOpen,
  onClose,
  video,
  categories,
  onSave,
}) => {
  const [videoDetails, setVideoDetails] = useState({
    title: "",
    description: "",
    category: "",
    tags: [],
  });
  const [newTag, setNewTag] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (video) {
      setVideoDetails({
        title: video.title,
        description: video.description,
        category: video.category,
        tags: [...video.tags],
      });
    }
  }, [video]);

  const handleAddTag = () => {
    if (newTag && videoDetails.tags && !videoDetails.tags.includes(newTag)) {
      setVideoDetails({
        ...videoDetails,
        tags: [...videoDetails.tags, newTag]
      });
      setNewTag("");
    }
  };

  const handleRemoveTag = (tag) => {
    if (videoDetails.tags) {
      setVideoDetails({
        ...videoDetails,
        tags: videoDetails.tags.filter(t => t !== tag)
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!videoDetails.title?.trim()) newErrors.title = "Title is required";
    if (!videoDetails.category) newErrors.category = "Please select a category";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (!video || !validateForm()) return;
    onSave(video.id, videoDetails);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString();
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const formatDuration = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      size="md"
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Video Details</DrawerHeader>
        <DrawerBody>
          {video && (
            <VStack spacing={4} align="stretch">
              <Box>
                <img 
                  src={video.thumbnailUrl || "https://via.placeholder.com/300x200?text=Video"} 
                  alt={video.title}
                  style={{ 
                    width: '100%', 
                    height: '180px', 
                    objectFit: 'cover',
                    borderRadius: '8px'
                  }}
                />
              </Box>
              <FormControl isInvalid={!!errors.title}>
                <FormLabel>Video Title</FormLabel>
                <Input
                  value={videoDetails.title}
                  onChange={(e) => setVideoDetails({...videoDetails, title: e.target.value})}
                />
                {errors.title && <FormErrorMessage>{errors.title}</FormErrorMessage>}
              </FormControl>
              <FormControl isInvalid={!!errors.category}>
                <FormLabel>Category</FormLabel>
                <Select
                  value={videoDetails.category}
                  onChange={(e) => setVideoDetails({...videoDetails, category: e.target.value})}
                >
                  {categories.map((category, index) => (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  ))}
                </Select>
                {errors.category && <FormErrorMessage>{errors.category}</FormErrorMessage>}
              </FormControl>
              <FormControl>
                <FormLabel>Description</FormLabel>
                <Textarea
                  placeholder="Enter video description"
                  value={videoDetails.description}
                  onChange={(e) => setVideoDetails({...videoDetails, description: e.target.value})}
                  rows={4}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Tags</FormLabel>
                <HStack>
                  <Input
                    placeholder="Add a tag"
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        handleAddTag();
                      }
                    }}
                  />
                  <Button onClick={handleAddTag} isDisabled={!newTag}>
                    Add
                  </Button>
                </HStack>
                <Flex wrap="wrap" gap={2} mt={2}>
                  {videoDetails.tags?.map((tag, index) => (
                    <Tag
                      key={index}
                      size="md"
                      borderRadius="full"
                      variant="solid"
                      colorScheme="blue"
                    >
                      <TagLabel>{tag}</TagLabel>
                      <TagCloseButton onClick={() => handleRemoveTag(tag)} />
                    </Tag>
                  ))}
                </Flex>
              </FormControl>
              <Divider my={2} />
              <Box>
                <Text fontWeight="bold">Status:</Text>
                <Badge
                  colorScheme={
                    video.status === "Approved" ? "green" : 
                    video.status === "Rejected" ? "red" : "yellow"
                  }
                  p={1}
                  borderRadius="md"
                  mt={1}
                >
                  {video.status}
                </Badge>
              </Box>
              <HStack spacing={6}>
                <Box>
                  <Text fontWeight="bold">Duration:</Text>
                  <Text>{formatDuration(video.duration)}</Text>
                </Box>
                <Box>
                  <Text fontWeight="bold">Size:</Text>
                  <Text>{formatFileSize(video.size)}</Text>
                </Box>
                <Box>
                  <Text fontWeight="bold">Views:</Text>
                  <Text>{video.views}</Text>
                </Box>
              </HStack>
              <Box>
                <Text fontWeight="bold">Upload Date:</Text>
                <Text>{formatDate(video.uploadDate)}</Text>
              </Box>
              <Box>
                <Text fontWeight="bold">Uploader:</Text>
                <Flex align="center" mt={1}>
                  <Avatar size="sm" name={video.uploader} mr={2}>
                    <AvatarBadge boxSize="1em" bg="green.500" />
                  </Avatar>
                  <Text>{video.uploader}</Text>
                </Flex>
              </Box>
            </VStack>
          )}
        </DrawerBody>
        <DrawerFooter>
          <Button variant="outline" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button 
            colorScheme="blue" 
            onClick={handleSave}
          >
            Save Changes
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export const DeleteAlertDialog = ({
  isOpen,
  onClose,
  onDelete,
  videoName,
  cancelRef,
}) => {
  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Delete Video
          </AlertDialogHeader>
          <AlertDialogBody>
            Are you sure you want to delete "{videoName}"? This action cannot be undone.
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="red" onClick={onDelete} ml={3}>
              Delete
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

export const VideoManagement = () => {
  const {
    videos,
    loading,
    stats,
    filteredVideos,
    searchQuery,
    setSearchQuery,
    filterStatus,
    setFilterStatus,
    sortBy,
    setSortBy,
    sortOrder,
    setSortOrder,
    addVideo,
    updateVideo,
    deleteVideo,
    updateVideoStatus,
    fetchVideos,
  } = useVideos();
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [categories, setCategories] = useState([
    "Lectures",
    "Tutorials",
    "Workshops",
    "Presentations",
    "Other",
  ]);
  const toast = useToast();
  const { colorMode, toggleColorMode } = useColorMode();
  const cancelRef = useRef(null);

  const { 
    isOpen: isUploadModalOpen, 
    onOpen: onUploadModalOpen, 
    onClose: onUploadModalClose 
  } = useDisclosure();
  const { 
    isOpen: isDeleteAlertOpen, 
    onOpen: onDeleteAlertOpen, 
    onClose: onDeleteAlertClose 
  } = useDisclosure();
  const { 
    isOpen: isDetailsDrawerOpen, 
    onOpen: onDetailsDrawerOpen, 
    onClose: onDetailsDrawerClose 
  } = useDisclosure();
  const { 
    isOpen: isPreviewModalOpen, 
    onOpen: onPreviewModalOpen, 
    onClose: onPreviewModalClose 
  } = useDisclosure();

  const bgColor = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");

  const handleStatusChange = async (videoId, status) => {
    try {
      await updateVideoStatus(videoId, status);
      toast({
        title: `Video marked as ${status}`,
        status: status === "Approved" ? "success" : status === "Rejected" ? "error" : "info",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "Status Update Failed",
        description: error instanceof Error ? error.message : "Unknown error occurred",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleVideoDelete = async () => {
    if (!selectedVideo) return;
    try {
      await deleteVideo(selectedVideo.id);
      toast({
        title: "Video Deleted",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      onDeleteAlertClose();
    } catch (error) {
      toast({
        title: "Deletion Failed",
        description: error instanceof Error ? error.message : "Unknown error occurred",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleVideoDetailsUpdate = async (videoId, details) => {
    try {
      await updateVideo(videoId, details);
      toast({
        title: "Video Details Updated",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      onDetailsDrawerClose();
    } catch (error) {
      toast({
        title: "Update Failed",
        description: error instanceof Error ? error.message : "Unknown error occurred",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const formatDuration = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <Container maxW="container.xl" py={6}>
      <Box
        p={6}
        borderRadius="xl"
        boxShadow="lg"
        bg={bgColor}
        borderWidth="1px"
        borderColor={borderColor}
      >
        <Flex justifyContent="space-between" alignItems="center" mb={6}>
          <Heading size="lg">Teacher Video Management</Heading>
          <HStack>
            <Tooltip label={`Switch to ${colorMode === "dark" ? "Light" : "Dark"} Mode`}>
              <IconButton
                icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
                onClick={toggleColorMode}
                variant="ghost"
                aria-label="Toggle color mode"
              />
            </Tooltip>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<SettingsIcon />}
                variant="ghost"
                aria-label="Settings"
              />
              <MenuList>
                <MenuItem icon={<RepeatIcon />} onClick={fetchVideos}>Refresh Videos</MenuItem>
                <MenuItem icon={<InfoIcon />}>About</MenuItem>
              </MenuList>
            </Menu>
          </HStack>
        </Flex>
        <StatsDisplay stats={stats} />
        <Tabs variant="enclosed" colorScheme="teal" mb={6}>
          <TabList>
            <Tab>Videos Management</Tab>
            <Tab>Categories</Tab>
          </TabList>
          <TabPanels>
            <TabPanel p={0} pt={4}>
              <VideoFilterBar 
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                filterStatus={filterStatus}
                setFilterStatus={setFilterStatus}
                sortBy={sortBy}
                setSortBy={setSortBy}
                sortOrder={sortOrder}
                setSortOrder={setSortOrder}
                onUploadClick={onUploadModalOpen}
              />
              {loading ? (
                <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap={6} mt={6}>
                  {[1, 2, 3, 4].map((i) => (
                    <Skeleton key={i} height="300px" borderRadius="lg" />
                  ))}
                </Grid>
              ) : (
                <>
                  {filteredVideos.length > 0 ? (
                    <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap={6} mt={6}>
                      {filteredVideos.map((video) => (
                        <VideoCard 
                          key={video.id}
                          video={video}
                          onView={() => {
                            setSelectedVideo(video);
                            onPreviewModalOpen();
                          }}
                          onEdit={() => {
                            setSelectedVideo(video);
                            onDetailsDrawerOpen();
                          }}
                          onApprove={() => handleStatusChange(video.id, "Approved")}
                          onReject={() => handleStatusChange(video.id, "Rejected")}
                          onDelete={() => {
                            setSelectedVideo(video);
                            onDeleteAlertOpen();
                          }}
                        />
                      ))}
                    </Grid>
                  ) : (
                    <Box textAlign="center" py={10}>
                      <Text color="gray.500">
                        {searchQuery || filterStatus !== "All"
                          ? "No videos match your search criteria."
                          : "No videos uploaded yet."}
                      </Text>
                      <Button
                        mt={4}
                        leftIcon={<AddIcon />}
                        colorScheme="teal"
                        onClick={onUploadModalOpen}
                      >
                        Upload New Video
                      </Button>
                    </Box>
                  )}
                </>
              )}
            </TabPanel>
            <TabPanel>
              <VStack align="stretch" spacing={4}>
                <Heading size="md" mb={2}>Manage Categories</Heading>
                <HStack>
                  <Input
                    placeholder="New category name"
                    id="new-category"
                    name="new-category"
                  />
                  <Button
                    colorScheme="teal"
                    onClick={() => {
                      const input = document.getElementById('new-category');
                      if (input instanceof HTMLInputElement) {
                        const newCategory = input.value.trim();
                        if (newCategory && !categories.includes(newCategory)) {
                          setCategories([...categories, newCategory]);
                          input.value = '';
                        }
                      }
                    }}
                  >
                    Add Category
                  </Button>
                </HStack>
                <Box>
                  <Text fontWeight="bold" mb={2}>Current Categories:</Text>
                  <Flex wrap="wrap" gap={2}>
                    {categories.map((category, index) => (
                      <Tag
                        key={index}
                        size="lg"
                        borderRadius="full"
                        variant="solid"
                        colorScheme="teal"
                      >
                        <TagLabel>{category}</TagLabel>
                        <TagCloseButton 
                          onClick={() => {
                            setCategories(categories.filter(c => c !== category));
                          }}
                        />
                      </Tag>
                    ))}
                  </Flex>
                </Box>
              </VStack>
            </TabPanel>
          </TabPanels>
        </Tabs>
        <Modal isOpen={isUploadModalOpen} onClose={onUploadModalClose} size="xl">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Upload New Video</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <VideoUploader 
                categories={categories}
                onUploadComplete={(video) => {
                  addVideo(video);
                  onUploadModalClose();
                  toast({
                    title: "Upload Successful",
                    description: "Your video has been uploaded successfully.",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                  });
                }}
                onUploadError={(error) => {
                  toast({
                    title: "Upload Failed",
                    description: error,
                    status: "error",
                    duration: 3000,
                    isClosable: true,
                  });
                }}
              />
            </ModalBody>
          </ModalContent>
        </Modal>
        <DeleteAlertDialog 
          isOpen={isDeleteAlertOpen}
          onClose={onDeleteAlertClose}
          onDelete={handleVideoDelete}
          videoName={selectedVideo?.title || ""}
          cancelRef={cancelRef}
        />
        <VideoDetailsDrawer 
          isOpen={isDetailsDrawerOpen}
          onClose={onDetailsDrawerClose}
          video={selectedVideo}
          categories={categories}
          onSave={handleVideoDetailsUpdate}
        />
        <Modal isOpen={isPreviewModalOpen} onClose={onPreviewModalClose} size="4xl" isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{selectedVideo?.title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {selectedVideo && (
                <VStack spacing={4} align="stretch">
                  <VideoPlayer videoUrl={selectedVideo.videoUrl} />
                  <Box>
                    <Heading size="md" mb={2}>{selectedVideo.title}</Heading>
                    <Flex gap={2} mb={2}>
                      <Badge colorScheme={
                        selectedVideo.status === "Approved" ? "green" : 
                        selectedVideo.status === "Rejected" ? "red" : "yellow"
                      }>
                        {selectedVideo.status}
                      </Badge>
                      <Badge colorScheme="blue">{selectedVideo.category}</Badge>
                      <Badge colorScheme="purple">{formatDuration(selectedVideo.duration)}</Badge>
                      <Badge colorScheme="gray">{formatFileSize(selectedVideo.size)}</Badge>
                    </Flex>
                    <Text>{selectedVideo.description}</Text>
                    <Flex mt={3} wrap="wrap" gap={2}>
                      {selectedVideo.tags.map((tag, index) => (
                        <Tag key={index} size="sm" colorScheme="teal">
                          {tag}
                        </Tag>
                      ))}
                    </Flex>
                  </Box>
                </VStack>
              )}
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onPreviewModalClose}>
                Close
              </Button>
              <Button 
                colorScheme="teal" 
                leftIcon={<EditIcon />}
                onClick={() => {
                  onPreviewModalClose();
                  onDetailsDrawerOpen();
                }}
              >
                Edit Details
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </Container>
  );
};

export default function App() {
  return (
    <ChakraProvider>
      <VideoManagement />
    </ChakraProvider>
  );
}