
// import React, { useRef, useEffect, useState } from 'react';
// import {
//   Box,
//   Button,
//   Container,
//   Heading,
//   Image,
//   Text,
//   VStack,
//   useToast,
//   SimpleGrid,
//   Flex,
//   useColorModeValue,
//   Badge,
//   Card,
//   CardBody,
//   CardHeader,
//   IconButton,
//   Spinner,
//   useBreakpointValue,
// } from '@chakra-ui/react';
// import { Download, Award, Clock } from 'lucide-react';

// // Example course data
// const coursesData = [
//   {
//     id: 1,
//     title: "Software Development in Java",
//     description: "Learn to build software applications using Java.",
//     available: true,
//     duration: "4 weeks",
//   },
//   {
//     id: 2,
//     title: "Software Development in Python",
//     description: "Develop applications and scripts using Python programming.",
//     available: true,
//     duration: "6 weeks",
//   },
//   {
//     id: 3,
//     title: "Manual Testing",
//     description: "Understand the fundamentals of software testing manually.",
//     available: true,
//     duration: "3 weeks",
//   },
//   {
//     id: 4,
//     title: "Automation Testing (Java)",
//     description: "Automate testing using Java-based frameworks.",
//     available: true,
//     duration: "5 weeks",
//   }
// ];

// const formatDate = (date) => {
//   const options = { year: 'numeric', month: 'short', day: 'numeric' };
//   return new Date(date).toLocaleDateString('en-US', options);
// };

// const generateCertificate = (canvas, ctx, studentName, courseName, completionDate) => {
//   const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
//   gradient.addColorStop(0, '#4299E1');
//   gradient.addColorStop(1, '#9F7AEA');
//   ctx.fillStyle = gradient;
//   ctx.fillRect(0, 0, canvas.width, canvas.height);

//   // Border
//   ctx.strokeStyle = '#FFFFFF';
//   ctx.lineWidth = 20;
//   ctx.strokeRect(20, 20, canvas.width - 40, canvas.height - 40);

//   // Inner content background
//   ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
//   ctx.fillRect(40, 40, canvas.width - 80, canvas.height - 80);

//   // Title
//   ctx.font = 'bold 40px Arial';
//   ctx.fillStyle = '#2D3748';
//   ctx.textAlign = 'center';
//   ctx.fillText('Chamber of Learning', canvas.width / 2, 100);
//   ctx.font = 'bold 50px Arial';
//   ctx.fillText('Certificate of Completion', canvas.width / 2, 170);

//   // Student Name
//   ctx.font = 'bold 30px Arial';
//   ctx.fillText(studentName, canvas.width / 2, 250);

//   // Course Name
//   ctx.font = '24px Arial';
//   ctx.fillText('has successfully completed the course', canvas.width / 2, 300);
//   ctx.font = 'bold 28px Arial';
//   ctx.fillText(courseName, canvas.width / 2, 350);

//   // Completion Date
//   ctx.font = '20px Arial';
//   ctx.fillText(`Completed on ${completionDate}`, canvas.width / 2, 400);

//   // Signature
//   ctx.font = 'italic 18px Arial';
//   ctx.fillText('Authorized Signature', canvas.width / 2, 500);
//   ctx.beginPath();
//   ctx.moveTo(canvas.width / 2 - 100, 480);
//   ctx.lineTo(canvas.width / 2 + 100, 480);
//   ctx.stroke();

//   // Logo
//   ctx.font = 'bold 60px Arial';
//   ctx.fillStyle = '#4299E1';
//   ctx.fillText('CoL', canvas.width / 2, 560);
// };

// export default function CertificateGenerator() {
//   const [selectedCourse, setSelectedCourse] = useState(coursesData[0]);
//   const [certificateImage, setCertificateImage] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const canvasRef = useRef(null);
//   const toast = useToast();
//   const currentDate = new Date();

//   const bgColor = useColorModeValue('gray.50', 'gray.800');
//   const cardBgColor = useColorModeValue('white', 'gray.700');
//   const textColor = useColorModeValue('gray.800', 'gray.100');

//   const studentName = "Learner";
//   const completionDate = formatDate(currentDate);

//   const isMobile = useBreakpointValue({ base: true, md: false });

//   useEffect(() => {
//     setLoading(true);
//     if (canvasRef.current) {
//       const canvas = canvasRef.current;
//       const ctx = canvas.getContext('2d');
//       generateCertificate(canvas, ctx, studentName, selectedCourse.title, completionDate);
//       setCertificateImage(canvas.toDataURL('image/png'));
//     }
//     setLoading(false);
//   }, [selectedCourse]);

//   const handleDownload = () => {
//     if (!certificateImage) {
//       toast({
//         title: "Error",
//         description: "Certificate image is not available.",
//         status: "error",
//         duration: 3000,
//         isClosable: true,
//       });
//       return;
//     }
//     const link = document.createElement('a');
//     link.href = certificateImage;
//     link.download = `chamber-of-learning-${selectedCourse.title.replace(/\s+/g, '-').toLowerCase()}-certificate.png`;
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//     toast({
//       title: "Certificate Downloaded",
//       description: "Your Chamber of Learning certificate has been successfully downloaded.",
//       status: "success",
//       duration: 3000,
//       isClosable: true,
//     });
//   };

//   return (
//     <Container maxW="container.xl" py={12}>
//       <VStack spacing={8} align="stretch">
//         <Box textAlign="center">
//           <Heading as="h1" size="2xl" mb={2} color={textColor}>
//             Chamber of Learning
//           </Heading>
//           <Heading as="h2" size="lg" fontWeight="normal" color={textColor}>
//             Demo Certificate
//           </Heading>
//         </Box>
//         <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
//           <Card bg={cardBgColor} boxShadow="lg" borderRadius="lg">
//             <CardHeader>
//               <Heading size="md" color={textColor}>Select a Course</Heading>
//             </CardHeader>
//             <CardBody>
//               <SimpleGrid columns={1} spacing={4}>
//                 {coursesData.map(course => (
//                   <Button
//                     key={course.id}
//                     onClick={() => setSelectedCourse(course)}
//                     colorScheme="blue"
//                     variant={selectedCourse.id === course.id ? "solid" : "outline"}
//                     size="lg"
//                     justifyContent="flex-start"
//                     height="auto"
//                     py={4}
//                     _hover={{ backgroundColor: '#4299E1', color: 'white' }}
//                     boxShadow="md"
//                   >
//                     <VStack align="start" spacing={1}>
//                       <Text fontSize="lg" fontWeight="bold">{course.title}</Text>
//                       <Flex wrap="wrap" gap={2}>
//                         <Badge colorScheme="blue" variant="subtle">
//                           <Flex align="center">
//                             <Clock size={14} />
//                             <Text ml={1}>{course.duration}</Text>
//                           </Flex>
//                         </Badge>
//                       </Flex>
//                     </VStack>
//                   </Button>
//                 ))}
//               </SimpleGrid>
//             </CardBody>
//           </Card>
//           <Card bg={cardBgColor} boxShadow="lg" borderRadius="lg">
//             <CardHeader>
//               <Flex justify="space-between" align="center">
//                 <Heading size="md" color={textColor}>Your Certificate</Heading>
//                 <IconButton
//                   icon={<Download />}
//                   aria-label="Download Certificate"
//                   onClick={handleDownload}
//                   colorScheme="teal"
//                   isRound
//                   isDisabled={loading}
//                 />
//               </Flex>
//             </CardHeader>
//             <CardBody>
//               <Box borderWidth={2} borderColor="gray.300" borderRadius="md" overflow="hidden" boxShadow="lg">
//                 <canvas ref={canvasRef} width={800} height={600} style={{ display: 'none' }} />
//                 {loading ? (
//                   <Flex justify="center" align="center" height="300px">
//                     <Spinner size="xl" />
//                   </Flex>
//                 ) : (
//                   <Image
//                     src={certificateImage || "/placeholder.svg?height=600&width=800&text=Loading+Certificate..."}
//                     alt="Course Certificate"
//                     width="100%"
//                     height="auto"
//                   />
//                 )}
//               </Box>
//             </CardBody>
//           </Card>
//         </SimpleGrid>
//         <Flex justify="center">
//           <Button
//             leftIcon={<Award />}
//             colorScheme="purple"
//             size="lg"
//             onClick={handleDownload}
//             isDisabled={!certificateImage || loading}
//             _hover={{ backgroundColor: '#9F7AEA', color: 'white' }}
//             boxShadow="md"
//           >
//             Download Your Certificate
//           </Button>
//         </Flex>
//       </VStack>
//     </Container>
//   );
// }




import React, { useRef, useEffect, useState, useCallback } from 'react';
import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  Text,
  VStack,
  useToast,
  SimpleGrid,
  Flex,
  useColorModeValue,
  Badge,
  Card,
  CardBody,
  CardHeader,
  IconButton,
  Spinner,
  useBreakpointValue,
  Stack,
} from '@chakra-ui/react';
import { Download, Award, Clock } from 'lucide-react';

// Example course data
const coursesData = [
  {
    id: 1,
    title: "Software Development in Java",
    description: "Learn to build software applications using Java.",
    available: true,
    duration: "4 weeks",
  },
  {
    id: 2,
    title: "Software Development in Python",
    description: "Develop applications and scripts using Python programming.",
    available: true,
    duration: "6 weeks",
  },
  {
    id: 3,
    title: "Manual Testing",
    description: "Understand the fundamentals of software testing manually.",
    available: true,
    duration: "3 weeks",
  },
  {
    id: 4,
    title: "Automation Testing (Java)",
    description: "Automate testing using Java-based frameworks.",
    available: true,
    duration: "5 weeks",
  }
];

const formatDate = (date) => {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(date).toLocaleDateString('en-US', options);
};

const generateCertificate = (canvas, ctx, studentName, courseName, completionDate) => {
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
  gradient.addColorStop(0, '#4299E1');
  gradient.addColorStop(1, '#9F7AEA');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Border
  ctx.strokeStyle = '#FFFFFF';
  ctx.lineWidth = 20;
  ctx.strokeRect(20, 20, canvas.width - 40, canvas.height - 40);

  // Inner content background
  ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
  ctx.fillRect(40, 40, canvas.width - 80, canvas.height - 80);

  // Title
  ctx.font = 'bold 40px Arial';
  ctx.fillStyle = '#2D3748';
  ctx.textAlign = 'center';
  ctx.fillText('Prefcol Edutech Solutions', canvas.width / 2, 100);
  ctx.font = 'bold 50px Arial';
  ctx.fillText('Certificate of Completion', canvas.width / 2, 170);

  // Student Name
  ctx.font = 'bold 30px Arial';
  ctx.fillText(studentName, canvas.width / 2, 250);

  // Course Name
  ctx.font = '24px Arial';
  ctx.fillText('has successfully completed the course', canvas.width / 2, 300);
  ctx.font = 'bold 28px Arial';
  ctx.fillText(courseName, canvas.width / 2, 350);

  // Completion Date
  ctx.font = '20px Arial';
  ctx.fillText(`Completed on ${completionDate}`, canvas.width / 2, 400);

  // Signature
  ctx.font = 'italic 18px Arial';
  ctx.fillText('Authorized Signature', canvas.width / 2, 480);
  ctx.beginPath();
  ctx.moveTo(canvas.width / 2 - 100, 440);
  ctx.lineTo(canvas.width / 2 + 100, 440);
  ctx.stroke();

  // Logo
  ctx.font = 'bold 60px Arial';
  ctx.fillStyle = '#4299E1';
  ctx.fillText('Prefcol', canvas.width / 2, 540);
};

export default function CertificateGenerator() {
  const [selectedCourse, setSelectedCourse] = useState(coursesData[0]);
  const [certificateImage, setCertificateImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const canvasRef = useRef(null);
  const toast = useToast();
  const currentDate = new Date();

  const bgColor = useColorModeValue('gray.50', 'gray.800');
  const cardBgColor = useColorModeValue('white', 'gray.700');
  const textColor = useColorModeValue('gray.800', 'gray.100');

  const studentName = "Learner";
  const completionDate = formatDate(currentDate);

  const isMobile = useBreakpointValue({ base: true, md: false });
  const isTablet = useBreakpointValue({ base: false, md: true, lg: false });
  const fontSize = useBreakpointValue({ base: "sm", md: "md", lg: "lg" });
  const headingSize = useBreakpointValue({ base: "xl", md: "2xl" });
  const subHeadingSize = useBreakpointValue({ base: "md", md: "lg" });

  useEffect(() => {
    setLoading(true);
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      generateCertificate(canvas, ctx, studentName, selectedCourse.title, completionDate);
      setCertificateImage(canvas.toDataURL('image/png'));
    }
    setLoading(false);
  }, [selectedCourse]);

  const handleDownload = useCallback(() => {
    if (!certificateImage) {
      toast({
        title: "Error",
        description: "Certificate image is not available.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    const link = document.createElement('a');
    link.href = certificateImage;
    link.download = `Prefcol-Edutech-Solutions-${selectedCourse.title.replace(/\s+/g, '-').toLowerCase()}-certificate.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast({
      title: "Certificate Downloaded",
      description: "Your Prefcol Edutech Solutions certificate has been successfully downloaded.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  }, [certificateImage, selectedCourse.title, toast]);

  return (
    <Box bg={bgColor} minHeight="100vh">
      <Container maxW="container.xl" py={{ base: 4, md: 8, lg: 12 }}>
        <VStack spacing={{ base: 4, md: 6, lg: 8 }} align="stretch">
          <Box textAlign="center">
            <Heading as="h1" size={headingSize} mb={{ base: 1, md: 2 }} color={textColor}>
              Prefcol Edutech Solutions
            </Heading>
            <Heading as="h2" size={subHeadingSize} fontWeight="normal" color={textColor}>
              Demo Certificate
            </Heading>
          </Box>
          <Stack direction={{ base: "column", lg: "row" }} spacing={{ base: 4, md: 6, lg: 8 }}>
            <Card bg={cardBgColor} boxShadow="lg" borderRadius="lg" flex={1}>
              <CardHeader>
                <Heading size={subHeadingSize} color={textColor}>Select a Course</Heading>
              </CardHeader>
              <CardBody>
                <VStack spacing={3}>
                  {coursesData.map(course => (
                    <Button
                      key={course.id}
                      onClick={() => setSelectedCourse(course)}
                      colorScheme="gray"
                      variant={selectedCourse.id === course.id ? "solid" : "outline"}
                      size={isMobile ? "sm" : "md"}
                      justifyContent="flex-start"
                      height="auto"
                      py={2}
                      px={3}
                      width="100%"
                      _hover={{ backgroundColor: '#48A999', color: 'white' }}
                      boxShadow="md"
                    >
                      <VStack align="start" spacing={1}>
                        <Text fontSize={fontSize} fontWeight="bold">{course.title}</Text>
                        <Flex wrap="wrap" gap={2}>
                          <Badge colorScheme="" variant="subtle">
                            <Flex align="center">
                              <Clock size={12} />
                              <Text ml={1} fontSize={isMobile ? "xs" : "sm"}>{course.duration}</Text>
                            </Flex>
                          </Badge>
                        </Flex>
                      </VStack>
                    </Button>
                  ))}
                </VStack>
              </CardBody>
            </Card>
            <Card bg={cardBgColor} boxShadow="lg" borderRadius="lg" flex={1}>
              <CardHeader>
                <Flex justify="space-between" align="center">
                  <Heading size={subHeadingSize} color={textColor}>Your Certificate</Heading>
                  <IconButton
                    icon={<Download />}
                    aria-label="Download Certificate"
                    onClick={handleDownload}
                    colorScheme="teal"
                    isRound
                    size={isMobile ? "sm" : "md"}
                    isDisabled={loading}
                  />
                </Flex>
              </CardHeader>
              <CardBody>
                <Box borderWidth={2} borderColor="gray.300" borderRadius="md" overflow="hidden" boxShadow="lg">
                  <canvas ref={canvasRef} width={800} height={600} style={{ display: 'none' }} />
                  {loading ? (
                    <Flex justify="center" align="center" height={{ base: "200px", md: "300px" }}>
                      <Spinner size={isMobile ? "lg" : "xl"} />
                    </Flex>
                  ) : (
                    <Image
                      src={certificateImage || "/placeholder.svg?height=600&width=800&text=Loading+Certificate..."}
                      alt="Course Certificate"
                      width="100%"
                      height="auto"
                    />
                  )}
                </Box>
              </CardBody>
            </Card>
          </Stack>
          <Flex justify="center">
            {/* <Button
              leftIcon={<Award />}
              colorScheme="purple"
              size={isMobile ? "md" : "lg"}
              onClick={handleDownload}
              isDisabled={!certificateImage || loading}
              _hover={{ backgroundColor: '#9F7AEA', color: 'white' }}
              boxShadow="md"
            >
              Download Your Certificate
            </Button> */}
          </Flex>
        </VStack>
      </Container>
    </Box>
  );
}

