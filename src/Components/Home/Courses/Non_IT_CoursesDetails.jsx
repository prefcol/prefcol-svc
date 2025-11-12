// import React, { useState, useEffect } from 'react'
// import { useParams, useNavigate, Link } from 'react-router-dom'
// import { motion } from 'framer-motion'
// import { Helmet } from 'react-helmet-async'
// import { FaBook, FaPalette, FaChartLine,FaChartBar, FaHeartbeat, FaGavel,FaGlobeAmericas,FaUserTie, FaTheaterMasks,FaUtensils , FaPen, FaMicrophone, FaCamera, FaLeaf, FaTwitter, FaEnvelope, FaArrowRight, FaLinkedin, FaFacebook, FaRegFileAlt, FaCogs, FaUserCog, FaArrowLeft, FaStar, FaUsers, FaClock, FaCheckCircle, FaQuestionCircle, FaGift, FaCertificate, FaPlay } from 'react-icons/fa'
// import {
//     Box,
//     Button,
//     Container,
//     Heading,
//     Text,
//     VStack,
//     HStack,
//     Badge,
//     Image,
//     Grid,
//     GridItem,
//     useColorModeValue,
//     useDisclosure,
//     Modal,
//     ModalOverlay,
//     ModalContent,
//     ModalHeader,
//     ModalFooter,
//     ModalBody,
//     ModalCloseButton,
//     Progress,
//     Accordion,
//     AccordionItem,
//     AccordionButton,
//     AccordionPanel,
//     AccordionIcon,
//     List,
//     ListItem,
//     ListIcon,
//     Tooltip,
//     SimpleGrid,
//     Card,
//     CardHeader,
//     CardBody,
//     CardFooter,
//     Avatar,
//     Flex,
//     IconButton,
//     Stat,
//     StatLabel,
//     StatNumber,
//     StatHelpText,
//     FormControl,
//     FormLabel,
//     Input,
//     Textarea,
//     useToast,
//     AspectRatio,
//     Spinner,
//     FormErrorMessage
// } from '@chakra-ui/react'
// import CertificateSection from './Certificate'
// import Enrollment from '../Enrollment/EnrollLoginpage'

// const coursesData = [
//     {
//         id: 1,
//         title: "Creative Writing",
//         description: "Master the art of storytelling",
//         available: true,
//         icon: <FaBook className="text-3xl mb-2" />,
//         objectives: [
//             "Develop compelling characters and plots",
//             "Master various writing styles and techniques",
//             "Learn to edit and refine your work"
//         ],
//         prerequisites: "Basic writing skills",
//         duration: "8 weeks",
//         relatedCourses: [2, 8, 10],
//         videoId: "R3kYWDPVR9E",
//         character: "/placeholder.svg?height=200&width=200"
//     },
//     {
//         id: 2,
//         title: "Graphic Design",
//         description: "Create stunning visual content",
//         available: true,
//         icon: <FaPalette className="text-3xl mb-2" />,
//         objectives: [
//             "Master essential design software",
//             "Understand color theory and typography",
//             "Create professional-quality designs"
//         ],
//         prerequisites: "Basic computer skills",
//         duration: "10 weeks",
//         relatedCourses: [1, 3, 8],
//         videoId: "8T2sS5yj7Uo",
//         character: "/placeholder.svg?height=200&width=200"
//     },
//     {
//         id: 3,
//         title: "Digital Marketing",
//         description: "Learn to promote in the digital age",
//         available: true,
//         icon: <FaChartBar className="text-3xl mb-2" />,
//         objectives: [
//             "Develop effective digital marketing strategies",
//             "Master social media marketing techniques",
//             "Analyze and optimize marketing campaigns"
//         ],
//         prerequisites: "Basic understanding of marketing concepts",
//         duration: "6 weeks",
//         relatedCourses: [2, 7, 9],
//         videoId: "TfDVLsBXYcM",
//         character: "/placeholder.svg?height=200&width=200"
//     },
//     {
//         id: 4,
//         title: "Healthcare Management",
//         description: "Lead in the healthcare industry",
//         available: true,
//         icon: <FaHeartbeat className="text-3xl mb-2" />,
//         objectives: [
//             "Understand healthcare systems and policies",
//             "Develop leadership skills in healthcare settings",
//             "Learn to manage healthcare resources effectively"
//         ],
//         prerequisites: "Basic understanding of healthcare systems",
//         duration: "12 weeks",
//         relatedCourses: [5, 7, 11],
//         videoId: "962eYqe--Yc",
//         character: "/placeholder.svg?height=200&width=200"
//     },
//     {
//         id: 5,
//         title: "Business Law",
//         description: "Understand legal aspects of business",
//         available: true,
//         icon: <FaGavel className="text-3xl mb-2" />,
//         objectives: [
//             "Understand key business law concepts",
//             "Learn to navigate legal issues in business",
//             "Develop skills in contract law and negotiation"
//         ],
//         prerequisites: "Basic understanding of business concepts",
//         duration: "10 weeks",
//         relatedCourses: [4, 7, 9],
//         videoId: "WCRwb9JGBx8",
//         character: "/placeholder.svg?height=200&width=200"
//     },
//     {
//         id: 6,
//         title: "Environmental Science",
//         description: "Study and protect our environment",
//         available: true,
//         icon: <FaGlobeAmericas className="text-3xl mb-2" />,
//         objectives: [
//             "Understand ecosystems and biodiversity",
//             "Learn about climate change and its impacts",
//             "Develop skills in environmental conservation"
//         ],
//         prerequisites: "Basic science knowledge",
//         duration: "8 weeks",
//         relatedCourses: [11, 12, 8],
//         videoId: "V7z7BAZdt2M",
//         character: "/placeholder.svg?height=200&width=200"
//     },
//     {
//         id: 7,
//         title: "Human Resources",
//         description: "Manage and develop talent",
//         available: true,
//         icon: <FaUserTie className="text-3xl mb-2" />,
//         objectives: [
//             "Learn effective recruitment and selection techniques",
//             "Understand employee development and retention strategies",
//             "Master performance management systems"
//         ],
//         prerequisites: "Basic understanding of business concepts",
//         duration: "6 weeks",
//         relatedCourses: [3, 4, 5],
//         videoId: "8T2sS5yj7Uo",
//         character: "/placeholder.svg?height=200&width=200"
//     },
//     {
//         id: 8,
//         title: "Photography",
//         description: "Capture moments through the lens",
//         available: true,
//         icon: <FaCamera className="text-3xl mb-2" />,
//         objectives: [
//             "Master camera settings and techniques",
//             "Learn composition and lighting principles",
//             "Develop skills in photo editing and post-processing"
//         ],
//         prerequisites: "Access to a digital camera (DSLR or mirrorless preferred)",
//         duration: "8 weeks",
//         relatedCourses: [1, 2, 10],
//         videoId: "V7z7BAZdt2M",
//         character: "/placeholder.svg?height=200&width=200"
//     },
//     {
//         id: 9,
//         title: "Public Speaking",
//         description: "Become a confident speaker",
//         available: true,
//         icon: <FaMicrophone className="text-3xl mb-2" />,
//         objectives: [
//             "Overcome stage fright and build confidence",
//             "Learn effective speech structure and delivery",
//             "Master the art of persuasion and engagement"
//         ],
//         prerequisites: "None",
//         duration: "4 weeks",
//         relatedCourses: [1, 3, 10],
//         videoId: "962eYqe--Yc",
//         character: "/placeholder.svg?height=200&width=200"
//     },
//     {
//         id: 10,
//         title: "Theater Arts",
//         description: "Express yourself on stage",
//         available: true,
//         icon: <FaTheaterMasks className="text-3xl mb-2" />,
//         objectives: [
//             "Develop acting techniques and character portrayal",
//             "Learn stage presence and voice projection",
//             "Understand theater production and direction"
//         ],
//         prerequisites: "None",
//         duration: "12 weeks",
//         relatedCourses: [1, 8, 9],
//         videoId: "R3kYWDPVR9E",
//         character: "/placeholder.svg?height=200&width=200"
//     },
//     {
//         id: 11,
//         title: "Sustainable Agriculture",
//         description: "Learn eco-friendly farming",
//         available: true,
//         icon: <FaLeaf className="text-3xl mb-2" />,
//         objectives: [
//             "Understand sustainable farming practices",
//             "Learn about organic crop production",
//             "Develop skills in soil conservation and management"
//         ],
//         prerequisites: "Basic understanding of agriculture",
//         duration: "10 weeks",
//         relatedCourses: [6, 12, 4],
//         videoId: "WCRwb9JGBx8",
//         character: "/placeholder.svg?height=200&width=200"
//     },
//     {
//         id: 12,
//         title: "Culinary Arts",
//         description: "Master the art of cooking",
//         available: true,
//         icon: <FaUtensils className="text-3xl mb-2" />,
//         objectives: [
//             "Learn professional cooking techniques",
//             "Understand flavor profiles and food pairings",
//             "Develop skills in menu planning and food presentation"
//         ],
//         prerequisites: "Basic cooking skills",
//         duration: "16 weeks",
//         relatedCourses: [11, 6, 8],
//         videoId: "TfDVLsBXYcM",
//         character: "/placeholder.svg?height=200&width=200"
//     }
// ];

// export default function NonCourseDetails() {
//     const { courseId } = useParams()
//     const navigate = useNavigate()
//     const [course, setCourse] = useState(null)
//     const [relatedCourses, setRelatedCourses] = useState([])
//     const [progress, setProgress] = useState(0)
//     const { isOpen: isEnrollOpen, onOpen: onEnrollOpen, onClose: onEnrollClose } = useDisclosure()
//     const { isOpen: isVideoOpen, onOpen: onVideoOpen, onClose: onVideoClose } = useDisclosure()
//     const [enrollmentForm, setEnrollmentForm] = useState({
//         name: '',
//         email: '',
//         phone: '',
//         message: '',
//     })
//     const [isEnrolling, setIsEnrolling] = useState(false)
//     const [formErrors, setFormErrors] = useState({})
//     const toast = useToast()

//     const bgColor = useColorModeValue('gray.50', 'gray.800')
//     const cardBgColor = useColorModeValue('white', 'gray.700')

//     useEffect(() => {
//         const selectedCourse = coursesData.find(c => c.id === parseInt(courseId))
//         if (selectedCourse) {
//             setCourse(selectedCourse)
//             setRelatedCourses(coursesData.filter(c => selectedCourse.relatedCourses.includes(c.id)))
//             setProgress(Math.floor(Math.random() * 101))
//         }
//     }, [courseId])

//     if (!course) {
//         return (
//             <Box height="100vh" display="flex" alignItems="center" justifyContent="center">
//                 <Spinner size="xl" />
//             </Box>
//         )
//     }

//     const getIcon = (iconComponent) => {
//         const IconComponent = iconComponent.type
//         return <IconComponent size="2em" />
//     }

//     const MotionBox = motion(Box)

//     const handleEnrollmentSubmit = async (e) => {
//         e.preventDefault()
//         if (!validateForm()) return
//         setIsEnrolling(true)
//         try {
//             // Simulated API call with security token
//             const response = await fetch('/api/enroll', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Authorization': 'Bearer ' + localStorage.getItem('authToken'),
//                 },
//                 body: JSON.stringify(enrollmentForm),
//             })
//             const data = await response.json()
//             if (data.success) {
//                 // Simulated email sending to the company
//                 await fetch('/api/send-email', {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json',
//                     },
//                     body: JSON.stringify({
//                         to: 'enquire@chamberoflearning.com',
//                         cc: 'gunasekar20101999@gmail.com',
//                         subject: `New Enrollment: ${course.title}`,
//                         body: `
//               Name: ${enrollmentForm.name}
//               Email: ${enrollmentForm.email}
//               Phone: ${enrollmentForm.phone}
//               Message: ${enrollmentForm.message}
//               Course: ${course.title}
//             `
//                     }),
//                 })
//                 toast({
//                     title: "Enrollment Successful",
//                     description: "We've received your enrollment. Our team will contact you soon.",
//                     status: "success",
//                     duration: 5000,
//                     isClosable: true,
//                 })
//                 onEnrollClose()
//             } else {
//                 throw new Error(data.message || 'Enrollment failed')
//             }
//         } catch (error) {
//             console.error('Enrollment error:', error)
//             toast({
//                 title: "Enrollment Failed",
//                 description: "There was an error processing your enrollment. Please try again.",
//                 status: "error",
//                 duration: 5000,
//                 isClosable: true,
//             })
//         } finally {
//             setIsEnrolling(false)
//         }
//     }

//     const handleInputChange = (e) => {
//         const { name, value } = e.target
//         setEnrollmentForm(prev => ({ ...prev, [name]: value }))
//     }

//     const validateForm = () => {
//         const errors = {}
//         if (!enrollmentForm.name) errors.name = "Name is required"
//         if (!enrollmentForm.email) errors.email = "Email is required"
//         else if (!/\S+@\S+\.\S+/.test(enrollmentForm.email)) errors.email = "Email is invalid"
//         setFormErrors(errors)
//         return Object.keys(errors).length === 0
//     }

//     const handleShare = (platform) => {
//         const url = window.location.href
//         const text = `Check out this amazing course: ${course.title}`

//         switch (platform) {
//             case 'facebook':
//                 window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank')
//                 break
//             case 'twitter':
//                 window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`, '_blank')
//                 break
//             case 'linkedin':
//                 window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(course.title)}`, '_blank')
//                 break
//             case 'email':
//                 window.location.href = `mailto:?subject=${encodeURIComponent(course.title)}&body=${encodeURIComponent(text + '\n\n' + url)}`
//                 break
//             default:
//                 break
//         }
//     }

//     const getCourseContent = (courseId) => {
//         switch (courseId) {
//             case 1: // Creative Writing
//                 return [
//                     { week: 1, title: "Introduction to Creative Writing", lessons: ["What is Creative Writing?", "Finding Inspiration", "Understanding Genres", "Developing Your Voice"] },
//                     { week: 2, title: "Fiction Writing Basics", lessons: ["Building Compelling Characters", "Creating Believable Settings", "Plot Structures", "Writing Dialogue"] },
//                     { week: 3, title: "Poetry Writing", lessons: ["Exploring Poetic Forms", "Using Imagery", "Rhyme and Meter", "Expressing Emotions"] },
//                     { week: 4, title: "Editing and Revising", lessons: ["Self-Editing Techniques", "Working with Feedback", "Polishing Your Draft", "Preparing for Submission"] },
//                 ];
//             case 2: // Graphic Design
//                 return [
//                     { week: 1, title: "Graphic Design Fundamentals", lessons: ["Introduction to Design Principles", "Color Theory", "Typography Basics", "Visual Hierarchy"] },
//                     { week: 2, title: "Software Tools", lessons: ["Getting Started with Adobe Photoshop", "Using Adobe Illustrator", "Designing in Canva", "Tips for Efficient Workflow"] },
//                     { week: 3, title: "Creative Projects", lessons: ["Logo Design", "Poster Design", "Social Media Graphics", "Designing for Print"] },
//                     { week: 4, title: "Portfolio Development", lessons: ["Showcasing Your Work", "Creating a Digital Portfolio", "Presenting Your Designs", "Building a Personal Brand"] },
//                 ];
//             case 3: // Digital Marketing
//                 return [
//                     { week: 1, title: "Introduction to Digital Marketing", lessons: ["Understanding Digital Marketing", "Key Metrics and KPIs", "Marketing Channels", "Audience Analysis"] },
//                     { week: 2, title: "Social Media Marketing", lessons: ["Creating Engaging Content", "Platform-Specific Strategies", "Social Media Analytics", "Managing Campaigns"] },
//                     { week: 3, title: "Search Engine Optimization (SEO)", lessons: ["On-Page SEO", "Off-Page SEO", "Keyword Research", "Content Optimization"] },
//                     { week: 4, title: "Paid Advertising", lessons: ["Google Ads Basics", "Facebook and Instagram Ads", "Creating Effective Ad Copy", "Budgeting and ROI"] },
//                 ];
//             case 4: // Healthcare Management
//                 return [
//                     { week: 1, title: "Healthcare Industry Overview", lessons: ["Understanding the Healthcare System", "Key Players in Healthcare", "Challenges in Healthcare Management", "Emerging Trends"] },
//                     { week: 2, title: "Leadership in Healthcare", lessons: ["Effective Communication", "Team Building", "Decision-Making Strategies", "Conflict Resolution"] },
//                     { week: 3, title: "Healthcare Policies and Regulations", lessons: ["Compliance Basics", "Patient Rights and Privacy", "Healthcare Laws", "Ethical Considerations"] },
//                     { week: 4, title: "Operational Management", lessons: ["Managing Resources", "Improving Patient Outcomes", "Budgeting and Finance", "Technology in Healthcare"] },
//                 ];
//             case 5: // Business Law
//                 return [
//                     { week: 1, title: "Introduction to Business Law", lessons: ["Legal Foundations", "Types of Business Entities", "Contracts Basics", "Torts in Business"] },
//                     { week: 2, title: "Employment Law", lessons: ["Employee Rights", "Workplace Discrimination", "Employment Contracts", "Labor Laws"] },
//                     { week: 3, title: "Intellectual Property", lessons: ["Understanding Trademarks", "Copyright Basics", "Patent Law", "Protecting Business Assets"] },
//                     { week: 4, title: "Business Disputes and Resolution", lessons: ["Litigation Basics", "Alternative Dispute Resolution", "Arbitration and Mediation", "Case Studies"] },
//                 ];
//             case 6: // Environmental Science
//                 return [
//                     { week: 1, title: "Environmental Basics", lessons: ["Ecosystems and Biodiversity", "Human Impact on the Environment", "Sustainability Principles", "Global Environmental Issues"] },
//                     { week: 2, title: "Climate Change", lessons: ["Causes and Effects", "Mitigation Strategies", "Renewable Energy", "Climate Policies"] },
//                     { week: 3, title: "Conservation Efforts", lessons: ["Wildlife Protection", "Habitat Restoration", "Sustainable Practices", "Community Engagement"] },
//                     { week: 4, title: "Environmental Science Careers", lessons: ["Research Opportunities", "Conservation Work", "Policy Advocacy", "Corporate Sustainability Roles"] },
//                 ];
//             case 7: // Human Resources
//                 return [
//                     { week: 1, title: "Introduction to Human Resources", lessons: ["Role of HR in Organizations", "HR Trends", "Employee Life Cycle", "HR Metrics"] },
//                     { week: 2, title: "Recruitment and Selection", lessons: ["Creating Job Descriptions", "Interviewing Techniques", "Candidate Assessment", "Onboarding Processes"] },
//                     { week: 3, title: "Employee Relations", lessons: ["Building Positive Work Culture", "Handling Workplace Conflicts", "Performance Management", "Employee Retention"] },
//                     { week: 4, title: "HR Technology and Analytics", lessons: ["HRIS Systems", "Data-Driven HR Decisions", "Using Analytics in HR", "Future of Work"] },
//                 ];
//             case 8: // Photography
//                 return [
//                     { week: 1, title: "Photography Basics", lessons: ["Understanding Your Camera", "Exposure and Composition", "Lighting Techniques", "Using Lenses"] },
//                     { week: 2, title: "Creative Techniques", lessons: ["Long Exposure Photography", "Portrait Photography", "Landscape Photography", "Editing Basics"] },
//                     { week: 3, title: "Professional Photography", lessons: ["Working with Clients", "Building a Portfolio", "Pricing Your Services", "Marketing Your Work"] },
//                     { week: 4, title: "Specialty Photography", lessons: ["Macro Photography", "Wildlife Photography", "Event Photography", "Fashion Photography"] },
//                 ];
//             case 9: // Public Speaking
//                 return [
//                     { week: 1, title: "Introduction to Public Speaking", lessons: ["Overcoming Stage Fright", "Understanding Your Audience", "Speech Organization", "Delivery Techniques"] },
//                     { week: 2, title: "Speech Crafting", lessons: ["Writing Compelling Introductions", "Structuring Main Points", "Creating Impactful Conclusions", "Using Visual Aids"] },
//                     { week: 3, title: "Advanced Techniques", lessons: ["Storytelling in Speeches", "Using Humor Effectively", "Handling Q&A", "Improvisation Skills"] },
//                     { week: 4, title: "Final Presentation", lessons: ["Rehearsing Your Speech", "Receiving Feedback", "Polishing Delivery", "Presentation Day"] },
//                 ];
//             case 10: // Theater Arts
//                 return [
//                     { week: 1, title: "The Basics of Acting", lessons: ["Understanding Your Role", "Voice and Speech", "Body Language", "Character Development"] },
//                     { week: 2, title: "Stage Performance", lessons: ["Blocking and Movement", "Working with Co-Actors", "Stage Presence", "Expressing Emotions"] },
//                     { week: 3, title: "Theatrical Techniques", lessons: ["Improvisation", "Comedic Timing", "Dramatic Pacing", "Monologue Delivery"] },
//                     { week: 4, title: "Production and Direction", lessons: ["Understanding Stage Design", "Lighting and Sound", "Costume and Props", "Rehearsals and Final Performance"] },
//                 ];        case 11: // Sustainable Agriculture
//             return [
//                 { week: 1, title: "Introduction to Sustainable Agriculture", lessons: ["What is Sustainable Agriculture?", "Principles of Eco-Friendly Farming", "Understanding Soil Health", "Crop Rotation Basics"] },
//                 { week: 2, title: "Sustainable Practices", lessons: ["Organic Farming Techniques", "Water Conservation Strategies", "Agroforestry", "Integrated Pest Management"] },
//                 { week: 3, title: "Modern Tools and Methods", lessons: ["Smart Farming Technology", "Hydroponics and Aquaponics", "Precision Agriculture", "Renewable Energy in Farming"] },
//                 { week: 4, title: "Future of Agriculture", lessons: ["Climate-Resilient Crops", "Community-Supported Agriculture", "Global Trends and Challenges", "Advocacy for Sustainability"] },
//             ];
//         case 12: // Culinary Arts
//             return [
//                 { week: 1, title: "Fundamentals of Culinary Arts", lessons: ["Introduction to Culinary Techniques", "Knife Skills", "Understanding Ingredients", "Basic Cooking Methods"] },
//                 { week: 2, title: "Cuisine Exploration", lessons: ["Italian and Mediterranean Cuisines", "Asian Flavors", "Classic French Techniques", "American Regional Cooking"] },
//                 { week: 3, title: "Advanced Techniques", lessons: ["Baking and Pastry Basics", "Sous Vide Cooking", "Plating and Presentation", "Food Pairings and Combinations"] },
//                 { week: 4, title: "Building a Culinary Career", lessons: ["Kitchen Management", "Starting a Food Business", "Menu Development", "Trends in Modern Cuisine"] },
//             ];

//             default:
//                 return [];
//         }
//     };

//     return (
//         <>
//             <Box minHeight="100vh" paddingTop={20} bg={bgColor} color={useColorModeValue('gray.800', 'white')}>
//                 <Helmet>
//                     <title>{course.title} | Chamber of Learning</title>
//                     <meta name="description" content={course.description} />
//                 </Helmet>
//                 <Container maxW="container.xl" py={{ base: 4, md: 8 }}>
//                     <MotionBox
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.5 }}
//                     >
//                         {/* Hero Section */}
//                         <Box
//                             bg={useColorModeValue('gray.500', 'gray.200')}
//                             color={useColorModeValue('white', 'gray.800')}
//                             borderRadius="lg"
//                             p={{ base: 4, md: 8 }}
//                             mb={{ base: 6, md: 8 }}
//                             position="relative"
//                             overflow="hidden"
//                             boxShadow="xl"
//                         >
//                             <Box
//                                 position="absolute"
//                                 top="-20%"
//                                 right="-10%"
//                                 width="300px"
//                                 height="300px"
//                                 borderRadius="full"
//                                 overflow="hidden"
//                             >
//                                 <Image
//                                     src="../assets/img (11).jpeg"
//                                     alt="Background image"
//                                     objectFit="cover"
//                                     width="100%"
//                                     height="100%"
//                                     filter="blur(60px)"
//                                 />
//                             </Box>

//                             <Grid templateColumns={{ base: '1fr', md: '2fr 1fr' }} gap={{ base: 4, md: 8 }} alignItems="center">
//                                 <GridItem>
//                                     <Heading as="h1" fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }} mb={{ base: 2, md: 4 }} textShadow="2px 2px 4px rgba(0,0,0,0.4)">
//                                         {course.title}
//                                     </Heading>
//                                     <Text fontSize={{ base: "md", md: "lg", lg: "xl" }} mb={{ base: 4, md: 6 }} textShadow="1px 1px 2px rgba(0,0,0,0.2)">
//                                         {course.description}
//                                     </Text>
//                                     <HStack spacing={{ base: 2, md: 4 }}>
//                                         {/* <Button colorScheme="whigraypha" size={{ base: "sm", md: "md" }} onClick={onEnrollOpen} leftIcon={<FaUserCog />}>
//                                             {course.available ? 'Enroll Now' : 'Join Waitlist'}
//                                         </Button> */}
//                                         <Enrollment/>
//                                         <Button colorScheme="blackAlpha" size={{ base: "sm", md: "md" }} onClick={onVideoOpen} leftIcon={<FaPlay />}>
//                                             Watch Preview
//                                         </Button>
//                                     </HStack>
//                                 </GridItem>
//                                 <GridItem>

//                                     <Box bg={cardBgColor} p={{ base: 4, md: 6 }} textColor="black" borderRadius="lg" boxShadow="md">
//                                         <VStack spacing={{ base: 2, md: 4 }} align="stretch">
//                                             <HStack justify="space-between">
//                                                 <Text fontWeight="bold">Price:</Text>
//                                                 <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold">$99.99</Text>
//                                             </HStack>
//                                             <HStack>
//                                                 <FaClock />
//                                                 <Text fontSize={{ base: "sm", md: "md" }}>
//                                                     {course.duration}
//                                                 </Text>
//                                             </HStack>
//                                             <HStack>
//                                                 <FaUsers />
//                                                 <Text fontSize={{ base: "sm", md: "md" }}>
//                                                     {Math.floor(Math.random() * 1000)} students enrolled
//                                                 </Text>
//                                             </HStack>
//                                             <HStack>
//                                                 <FaStar color="gold" />
//                                                 <Text fontSize={{ base: "sm", md: "md" }}>4.8 (234 reviews)</Text>
//                                             </HStack>
//                                             <Badge colorScheme={course.available ? 'green' : 'gray'} alignSelf="start">
//                                                 {course.available ? 'Available' : 'Coming Soon'}
//                                             </Badge>
//                                         </VStack>
//                                     </Box>

//                                 </GridItem>
//                             </Grid>
//                         </Box>

//                         <Button leftIcon={<FaArrowLeft />} onClick={() => navigate(-1)} mb={{ base: 4, md: 8 }} variant="outline">
//                             Back to Courses
//                         </Button>

//                         {/* Main Content */}
//                         <Grid templateColumns={{ base: '1fr', lg: '2fr 1fr' }} gap={{ base: 4, md: 6, lg: 8 }}>
//                             <GridItem>
//                                 {/* About Section */}
//                                 <Card mb={{ base: 4, md: 8 }}>
//                                     <CardHeader>
//                                         <Heading size={{ base: "md", md: "lg" }}>About This Course</Heading>
//                                     </CardHeader>
//                                     <CardBody>
//                                         <Text fontSize={{ base: "sm", md: "md" }}>
//                                             This comprehensive course is designed to take you from beginner to proficient in {course.title}.
//                                             Whether you're looking to start a new career or enhance your existing skills, this course provides
//                                             the knowledge and hands-on experience you need to succeed in the field of {course.title.toLowerCase()}.
//                                         </Text>
//                                     </CardBody>
//                                 </Card>

//                                 {/* Course Content */}
//                                 <Card mb={{ base: 4, md: 8 }}>
//                                     <CardHeader>
//                                         <Heading size={{ base: 'md', md: 'lg' }}>Course Content</Heading>
//                                     </CardHeader>
//                                     <CardBody>
//                                         <Accordion allowMultiple>
//                                             {getCourseContent(course.id).map((week, index) => (
//                                                 <AccordionItem key={index}>
//                                                     <h2>
//                                                         <AccordionButton>
//                                                             <Box flex="1" textAlign="left">
//                                                                 Week {week.week}: {week.title}
//                                                             </Box>
//                                                             <AccordionIcon />
//                                                         </AccordionButton>
//                                                     </h2>
//                                                     <AccordionPanel pb={4}>
//                                                         <List spacing={2}>
//                                                             {week.lessons.map((lesson, lessonIndex) => (
//                                                                 <ListItem key={lessonIndex}>
//                                                                     <ListIcon as={FaRegFileAlt} color="green.500" />
//                                                                     Lesson {lessonIndex + 1}: {lesson}
//                                                                 </ListItem>
//                                                             ))}
//                                                         </List>
//                                                     </AccordionPanel>
//                                                 </AccordionItem>
//                                             ))}
//                                         </Accordion>
//                                     </CardBody>
//                                 </Card>

//                                 {/* Certificate Section */}
//                                 <CertificateSection />

//                                 {/* Benefits Section */}
//                                 <Card mb={{ base: 4, md: 8 }}>
//                                     <CardHeader>
//                                         <Heading size={{ base: "md", md: "lg" }}>Course Benefits</Heading>
//                                     </CardHeader>
//                                     <CardBody>
//                                         <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 4, md: 6 }}>
//                                             {[
//                                                 { icon: FaUserCog, title: 'Expert-Led Instruction', description: 'Learn from industry professionals with years of experience.' },
//                                                 { icon: FaCogs, title: 'Hands-On Projects', description: 'Apply your skills to real-world scenarios and build a portfolio.' },
//                                                 { icon: FaUsers, title: 'Community Support', description: 'Join a community of learners and get support from peers and instructors.' },
//                                                 { icon: FaCertificate, title: 'Industry-Recognized Certificate', description: 'Earn a certificate valued by top employers in the field.' },
//                                             ].map((benefit, index) => (
//                                                 <VStack key={index} align="start" p={4} borderWidth={1} borderRadius="md">
//                                                     <benefit.icon size="2em" color={useColorModeValue('gray.500', 'gray.300')} />
//                                                     <Heading size={{ base: "sm", md: "md" }}>{benefit.title}</Heading>
//                                                     <Text fontSize={{ base: "sm", md: "md" }}>{benefit.description}</Text>
//                                                 </VStack>
//                                             ))}
//                                         </SimpleGrid>
//                                     </CardBody>
//                                 </Card>

//                                 {/* Requirements Section */}
//                                 <Card mb={{ base: 4, md: 8 }}>
//                                     <CardHeader>
//                                         <Heading size={{ base: "md", md: "lg" }}>Course Requirements</Heading>
//                                     </CardHeader>
//                                     <CardBody>
//                                         <List spacing={3}>
//                                             <ListItem>
//                                                 <ListIcon as={FaCheckCircle} color="green.500" />
//                                                 {course.prerequisites}
//                                             </ListItem>
//                                             <ListItem>
//                                                 <ListIcon as={FaCheckCircle} color="green.500" />
//                                                 Access to a computer with internet connection
//                                             </ListItem>
//                                             <ListItem>
//                                                 <ListIcon as={FaCheckCircle} color="green.500" />
//                                                 Dedication to complete assignments and projects
//                                             </ListItem>
//                                             <ListItem>
//                                                 <ListIcon as={FaCheckCircle} color="green.500" />
//                                                 Willingness to participate in discussions and peer reviews
//                                             </ListItem>
//                                         </List>
//                                     </CardBody>
//                                 </Card>

//                                 {/* Testimonials Section */}
//                                 <Card mb={{ base: 4, md: 8 }}>
//                                     <CardHeader>
//                                         <Heading size={{ base: "md", md: "lg" }}>Student Testimonials</Heading>
//                                     </CardHeader>
//                                     <CardBody>
//                                         <VStack spacing={{ base: 4, md: 6 }}>
//                                             {[
//                                                 { name: 'Guna', role: 'Software Developer', content: 'This course transformed my career. I\'m now working as a full-stack developer at a top tech company!' },
//                                                 { name: 'Sekar', role: 'Data Analyst', content: 'The hands-on projects really helped me understand complex concepts. Highly recommended!' },
//                                                 { name: 'Guna', role: 'IT Manager', content: 'As someone looking to upskill my team, this course provided exactly what we needed. Great ROI!' },
//                                             ].map((testimonial, index) => (
//                                                 <Box key={index} p={5} shadow="md" borderWidth="1px" borderRadius="md" width="100%">
//                                                     <Flex>
//                                                         <Avatar name={testimonial.name} src={`/placeholder.svg?height=50&width=50&text=${testimonial.name[0]}`} mr={4} />
//                                                         <Box>
//                                                             <Heading size={{ base: "sm", md: "md" }}>{testimonial.name}</Heading>
//                                                             <Text fontSize={{ base: "xs", md: "sm" }} color="gray.500">{testimonial.role}</Text>
//                                                         </Box>
//                                                     </Flex>
//                                                     <Text mt={4} fontStyle="italic" fontSize={{ base: "sm", md: "md" }}>"{testimonial.content}"</Text>
//                                                 </Box>
//                                             ))}
//                                         </VStack>
//                                     </CardBody>
//                                 </Card>

//                                 {/* FAQs Section */}
//                                 <Card mb={{ base: 4, md: 8 }}>
//                                     <CardHeader>
//                                         <Heading size={{ base: "md", md: "lg" }}>Frequently Asked Questions</Heading>
//                                     </CardHeader>
//                                     <CardBody>
//                                         <Accordion allowMultiple>
//                                             {[
//                                                 { question: 'How long do I have access to the course?', answer: 'You have lifetime access to the course content, including any future updates.' },
//                                                 { question: 'Is there a money-back guarantee?', answer: 'Yes, we offer a 30-day money-back guarantee if you\'re not satisfied with the course.' },
//                                                 { question: 'How is the course delivered?', answer: 'The course is delivered online through our learning platform. You can access the content at your own pace.' },
//                                                 { question: 'Will I receive support during the course?', answer: 'Yes, you\'ll have access to instructor support and a community forum throughout the duration of the course.' },
//                                                 { question: 'Are there any live sessions?', answer: 'We offer optional live Q&A sessions with the instructor on a bi-weekly basis.' },
//                                             ].map((faq, index) => (
//                                                 <AccordionItem key={index}>
//                                                     <h2>
//                                                         <AccordionButton>
//                                                             <Box flex="1" textAlign="left">
//                                                                 <HStack>
//                                                                     <FaQuestionCircle color={useColorModeValue('gray.500', 'gray.300')} />
//                                                                     <Text fontWeight="bold" fontSize={{ base: "sm", md: "md" }}>{faq.question}</Text>
//                                                                 </HStack>
//                                                             </Box>
//                                                             <AccordionIcon />
//                                                         </AccordionButton>
//                                                     </h2>
//                                                     <AccordionPanel pb={4}>
//                                                         <Text fontSize={{ base: "sm", md: "md" }}>{faq.answer}</Text>
//                                                     </AccordionPanel>
//                                                 </AccordionItem>
//                                             ))}
//                                         </Accordion>
//                                     </CardBody>
//                                 </Card>
//                             </GridItem>

//                             {/* Sidebar */}
//                             <GridItem>
//                                 <Box position={{ base: "static", lg: "sticky" }} top="20px">
//                                     <VStack spacing={{ base: 4, md: 6, lg: 8 }}>
//                                         {/* Course Progress */}
//                                         <Card w="100%">
//                                             <CardBody>
//                                                 <Heading size={{ base: "sm", md: "md" }} mb={4}>Your Progress</Heading>
//                                                 <Progress value={progress} colorScheme="green" size="lg" mb={2} />
//                                                 <Text textAlign="center" fontSize={{ base: "sm", md: "md" }}>{progress}% Complete</Text>
//                                                 <Button colorScheme="gray" width="100%" mt={4} size={{ base: "sm", md: "md" }} onClick={() => {
//                                                     toast({
//                                                         title: "Continue Learning",
//                                                         description: "Redirecting to your last lesson...",
//                                                         status: "info",
//                                                         duration: 2000,
//                                                         isClosable: true,
//                                                     })
//                                                 }}>
//                                                     Continue Learning
//                                                 </Button>
//                                             </CardBody>
//                                         </Card>

//                                         {/* Course Stats */}
//                                         <Card w="100%">
//                                             <CardBody>
//                                                 <Heading size={{ base: "sm", md: "md" }} mb={4}>Course Stats</Heading>
//                                                 <SimpleGrid columns={2} spacing={4}>
//                                                     <Stat>
//                                                         <StatLabel>Students</StatLabel>
//                                                         <StatNumber>1,234</StatNumber>
//                                                         <StatHelpText>
//                                                             <FaUsers /> Enrolled
//                                                         </StatHelpText>
//                                                     </Stat>
//                                                     <Stat>
//                                                         <StatLabel>Rating</StatLabel>
//                                                         <StatNumber>4.8</StatNumber>
//                                                         <StatHelpText>
//                                                             <FaStar /> 234 reviews
//                                                         </StatHelpText>
//                                                     </Stat>
//                                                     <Stat>
//                                                         <StatLabel>Last Updated</StatLabel>
//                                                         <StatNumber>Oct 2024</StatNumber>
//                                                         <StatHelpText>
//                                                             <FaClock /> Recent
//                                                         </StatHelpText>
//                                                     </Stat>
//                                                     <Stat>
//                                                         <StatLabel>Certificate</StatLabel>
//                                                         <StatNumber>Yes</StatNumber>
//                                                         <StatHelpText>
//                                                             <FaCertificate /> Included
//                                                         </StatHelpText>
//                                                     </Stat>
//                                                 </SimpleGrid>
//                                             </CardBody>
//                                         </Card>

//                                         {/* Instructor Info */}
//                                         <Card w="100%">
//                                             <CardBody>
//                                                 <Heading size={{ base: "sm", md: "md" }} mb={4}>Instructor</Heading>
//                                                 <HStack spacing={4}>
//                                                     <Avatar
//                                                         size={{ base: "md", md: "xl" }}
//                                                         name="Mani"
//                                                         src="/placeholder.svg?height=100&width=100&text=JD"
//                                                     />
//                                                     <VStack align="start" spacing={1}>
//                                                         <Heading size={{ base: "sm", md: "md" }}>John Doe</Heading>
//                                                         <Text fontSize={{ base: "xs", md: "sm" }} color="gray.500">Senior Software Engineer</Text>
//                                                         <HStack>
//                                                             <FaStar color="gold" />
//                                                             <Text fontSize={{ base: "xs", md: "sm" }}>4.9 Instructor Rating</Text>
//                                                         </HStack>
//                                                         <HStack>
//                                                             <FaUsers color="gray" />
//                                                             <Text fontSize={{ base: "xs", md: "sm" }}>10,000+ Students</Text>
//                                                         </HStack>
//                                                         <HStack>
//                                                             <FaRegFileAlt color="gray" />
//                                                             <Text fontSize={{ base: "xs", md: "sm" }}>15 Courses</Text>
//                                                         </HStack>
//                                                     </VStack>
//                                                 </HStack>
//                                                 <Text fontSize={{ base: "sm", md: "md" }} mt={4}>
//                                                     Mani is a seasoned software engineer with over 10 years of experience in the industry.
//                                                     He's passionate about teaching and has helped thousands of students launch their careers in tech.
//                                                 </Text>
//                                             </CardBody>
//                                         </Card>

//                                         {/* Share Course */}
//                                         <Card w="100%">
//                                             <CardBody>
//                                                 <Heading size={{ base: "sm", md: "md" }} mb={4}>Share This Course</Heading>
//                                                 <HStack spacing={4} justify="center">
//                                                     <IconButton
//                                                         aria-label="Share on Facebook"
//                                                         icon={<FaFacebook />}
//                                                         onClick={() => handleShare('facebook')}
//                                                         colorScheme="gray"
//                                                     />
//                                                     <IconButton
//                                                         aria-label="Share on Twitter"
//                                                         icon={<FaTwitter />}
//                                                         onClick={() => handleShare('twitter')}
//                                                         colorScheme="gray"
//                                                     />
//                                                     <IconButton
//                                                         aria-label="Share on LinkedIn"
//                                                         icon={<FaLinkedin />}
//                                                         onClick={() => handleShare('linkedin')}
//                                                         colorScheme="gray"
//                                                     />
//                                                     <IconButton
//                                                         aria-label="Share via Email"
//                                                         icon={<FaEnvelope />}
//                                                         onClick={() => handleShare('email')}
//                                                         colorScheme="gray"
//                                                     />
//                                                 </HStack>
//                                             </CardBody>
//                                         </Card>

//                                         {/* Gift Course */}
//                                         <Card w="100%">
//                                             <CardBody>
//                                                 <Heading size={{ base: "sm", md: "md" }} mb={4}>Gift This Course</Heading>
//                                                 <Text fontSize={{ base: "sm", md: "md" }} mb={4}>
//                                                     Give the gift of learning! Perfect for friends, family, or colleagues.
//                                                 </Text>
//                                                 <Button leftIcon={<FaGift />} colorScheme="pink" width="100%" size={{ base: "sm", md: "md" }} onClick={() => {
//                                                     toast({
//                                                         title: "Gift Course",
//                                                         description: "Redirecting to gift options...",
//                                                         status: "info",
//                                                         duration: 2000,
//                                                         isClosable: true,
//                                                     })
//                                                 }}>
//                                                     Gift Now
//                                                 </Button>
//                                             </CardBody>
//                                         </Card>
//                                     </VStack>
//                                 </Box>
//                             </GridItem>
//                         </Grid>

//                         {/* Related Courses */}
//                         <Box mt={{ base: 8, md: 12 }}>
//                             <Heading size={{ base: "lg", md: "xl" }} mb={{ base: 4, md: 6 }}>Related Courses</Heading>
//                             <Grid templateColumns={{ base: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={{ base: 4, md: 6 }}>
//                                 {relatedCourses.map(relatedCourse => (
//                                     <GridItem key={relatedCourse.id}>
//                                         <Card
//                                             h="100%"
//                                             cursor="pointer"
//                                             as={Link}
//                                             to={`/Non_it-courses/${relatedCourse.id}`}
//                                             transition="all 0.3s"
//                                             _hover={{ transform: 'translateY(-5px)', boxShadow: 'xl' }}
//                                         >
//                                             <CardHeader>
//                                                 <HStack spacing={4}>
//                                                     <Box bg="gray.100" p={2} borderRadius="full">
//                                                         {getIcon(relatedCourse.icon)}
//                                                     </Box>
//                                                     <Heading size={{ base: "sm", md: "md" }}>{relatedCourse.title}</Heading>
//                                                 </HStack>
//                                             </CardHeader>
//                                             <CardBody>
//                                                 <Text fontSize={{ base: "sm", md: "md" }} noOfLines={3}>{relatedCourse.description}</Text>
//                                             </CardBody>
//                                             <CardFooter>
//                                                 <Button rightIcon={<FaArrowRight />} colorScheme="gray" size={{ base: "sm", md: "md" }}>
//                                                     Learn More
//                                                 </Button>
//                                             </CardFooter>
//                                         </Card>
//                                     </GridItem>
//                                 ))}
//                             </Grid>
//                         </Box>
//                     </MotionBox>
//                 </Container>

//                 {/* Enrollment Modal */}
//                 {/* <Modal isOpen={isEnrollOpen} onClose={onEnrollClose} size={{ base: "sm", md: "md", lg: "xl" }}>
//                     <ModalOverlay />
//                     <ModalContent>
//                         <ModalHeader>Enroll in {course.title}</ModalHeader>
//                         <ModalCloseButton />
//                         <ModalBody>
//                             <form onSubmit={handleEnrollmentSubmit}>
//                                 <VStack spacing={4}>
//                                     <FormControl isRequired isInvalid={!!formErrors.name}>
//                                         <FormLabel>Name</FormLabel>
//                                         <Input
//                                             name="name"
//                                             value={enrollmentForm.name}
//                                             onChange={handleInputChange}
//                                             placeholder="Your full name"
//                                         />
//                                         <FormErrorMessage>{formErrors.name}</FormErrorMessage>
//                                     </FormControl>
//                                     <FormControl isRequired isInvalid={!!formErrors.email}>
//                                         <FormLabel>Email</FormLabel>
//                                         <Input
//                                             name="email"
//                                             type="email"
//                                             value={enrollmentForm.email}
//                                             onChange={handleInputChange}
//                                             placeholder="Your email address"
//                                         />
//                                         <FormErrorMessage>{formErrors.email}</FormErrorMessage>
//                                     </FormControl>
//                                     <FormControl>
//                                         <FormLabel>Phone (optional)</FormLabel>
//                                         <Input
//                                             name="phone"
//                                             value={enrollmentForm.phone}
//                                             onChange={handleInputChange}
//                                             placeholder="Your phone number"
//                                         />
//                                     </FormControl>
//                                     <FormControl>
//                                         <FormLabel>Message (optional)</FormLabel>
//                                         <Textarea
//                                             name="message"
//                                             value={enrollmentForm.message}
//                                             onChange={handleInputChange}
//                                             placeholder="Any additional information or questions"
//                                         />
//                                     </FormControl>
//                                 </VStack>
//                             </form>
//                         </ModalBody>
//                         <ModalFooter>
//                             <Button variant="ghost" mr={3} onClick={onEnrollClose}>
//                                 Cancel
//                             </Button>
//                             <Button
//                                 colorScheme="blue"
//                                 onClick={handleEnrollmentSubmit}
//                                 isLoading={isEnrolling}
//                                 loadingText="Enrolling..."
//                             >
//                                 Enroll Now
//                             </Button>
//                         </ModalFooter>
//                     </ModalContent>
//                 </Modal> */}

//                 {/* Video Preview Modal */}
//                 <Modal isOpen={isVideoOpen} onClose={onVideoClose} size={{ base: "full", md: "4xl" }}>
//                     <ModalOverlay />
//                     <ModalContent>
//                         <ModalHeader>Course Preview: {course.title}</ModalHeader>
//                         <ModalCloseButton />
//                         <ModalBody>
//                             <AspectRatio ratio={16 / 9}>
//                                 <iframe
//                                     title="Course Preview"
//                                     src={`https://www.youtube.com/embed/${course.videoId}`}
//                                     allowFullScreen
//                                 />
//                             </AspectRatio>
//                         </ModalBody>
//                     </ModalContent>
//                 </Modal>
//             </Box>
//         </>
//     )
// }

// import React, { useState, useEffect } from 'react'
// import { useParams, useNavigate, Link } from 'react-router-dom'
// import { motion } from 'framer-motion'
// import { Helmet } from 'react-helmet-async'
// import { FaBook, FaPalette, FaChartLine, FaChartBar, FaHeartbeat, FaGavel, FaGlobeAmericas, FaUserTie, FaTheaterMasks, FaUtensils, FaPen, FaMicrophone, FaCamera, FaLeaf, FaTwitter, FaEnvelope, FaArrowRight, FaLinkedin, FaFacebook, FaRegFileAlt, FaCogs, FaUserCog, FaArrowLeft, FaStar, FaUsers, FaClock, FaCheckCircle, FaQuestionCircle, FaGift, FaCertificate, FaPlay } from 'react-icons/fa'
// import {
//     Box,
//     Button,
//     Container,
//     Heading,
//     Text,
//     VStack,
//     HStack,
//     Badge,
//     Image,
//     Grid,
//     GridItem,
//     useColorModeValue,
//     useDisclosure,
//     Modal,
//     ModalOverlay,
//     ModalContent,
//     ModalHeader,
//     ModalFooter,
//     ModalBody,
//     ModalCloseButton,
//     Progress,
//     Accordion,
//     AccordionItem,
//     AccordionButton,
//     AccordionPanel,
//     AccordionIcon,
//     List,
//     ListItem,
//     ListIcon,
//     Tooltip,
//     SimpleGrid,
//     Card,
//     CardHeader,
//     CardBody,
//     CardFooter,
//     Avatar,
//     Flex,
//     IconButton,
//     Stat,
//     StatLabel,
//     StatNumber,
//     StatHelpText,
//     FormControl,
//     FormLabel,
//     Input,
//     Textarea,
//     useToast,
//     AspectRatio,
//     Spinner,
//     FormErrorMessage
// } from '@chakra-ui/react'
// import CertificateSection from './Certificate'
// import Enrollment from '../Enrollment/EnrollLoginpage'
// import EnhancedEnrollment from '../Enrollment/EnrollLoginpage'

// const coursesData = [
//     {
//         id: 1,
//         title: "Creative Writing",
//         description: "Master the art of storytelling",
//         available: true,
//         icon: <FaBook className="text-3xl mb-2" />,
//         objectives: [
//             "Develop compelling characters and plots",
//             "Master various writing styles and techniques",
//             "Learn to edit and refine your work"
//         ],
//         prerequisites: "Basic writing skills",
//         duration: "8 weeks",
//         relatedCourses: [2, 8, 10],
//         videoId: "R3kYWDPVR9E",
//         character: "/placeholder.svg?height=200&width=200"
//     },
//     {
//         id: 2,
//         title: "Graphic Design",
//         description: "Create stunning visual content",
//         available: true,
//         icon: <FaPalette className="text-3xl mb-2" />,
//         objectives: [
//             "Master essential design software",
//             "Understand color theory and typography",
//             "Create professional-quality designs"
//         ],
//         prerequisites: "Basic computer skills",
//         duration: "10 weeks",
//         relatedCourses: [1, 3, 8],
//         videoId: "8T2sS5yj7Uo",
//         character: "/placeholder.svg?height=200&width=200"
//     },
//     {
//         id: 3,
//         title: "Digital Marketing",
//         description: "Learn to promote in the digital age",
//         available: true,
//         icon: <FaChartBar className="text-3xl mb-2" />,
//         objectives: [
//             "Develop effective digital marketing strategies",
//             "Master social media marketing techniques",
//             "Analyze and optimize marketing campaigns"
//         ],
//         prerequisites: "Basic understanding of marketing concepts",
//         duration: "6 weeks",
//         relatedCourses: [2, 7, 9],
//         videoId: "TfDVLsBXYcM",
//         character: "/placeholder.svg?height=200&width=200"
//     },
//     {
//         id: 4,
//         title: "Healthcare Management",
//         description: "Lead in the healthcare industry",
//         available: true,
//         icon: <FaHeartbeat className="text-3xl mb-2" />,
//         objectives: [
//             "Understand healthcare systems and policies",
//             "Develop leadership skills in healthcare settings",
//             "Learn to manage healthcare resources effectively"
//         ],
//         prerequisites: "Basic understanding of healthcare systems",
//         duration: "12 weeks",
//         relatedCourses: [5, 7, 11],
//         videoId: "962eYqe--Yc",
//         character: "/placeholder.svg?height=200&width=200"
//     },
//     {
//         id: 5,
//         title: "Business Law",
//         description: "Understand legal aspects of business",
//         available: true,
//         icon: <FaGavel className="text-3xl mb-2" />,
//         objectives: [
//             "Understand key business law concepts",
//             "Learn to navigate legal issues in business",
//             "Develop skills in contract law and negotiation"
//         ],
//         prerequisites: "Basic understanding of business concepts",
//         duration: "10 weeks",
//         relatedCourses: [4, 7, 9],
//         videoId: "WCRwb9JGBx8",
//         character: "/placeholder.svg?height=200&width=200"
//     },
//     {
//         id: 6,
//         title: "Environmental Science",
//         description: "Study and protect our environment",
//         available: true,
//         icon: <FaGlobeAmericas className="text-3xl mb-2" />,
//         objectives: [
//             "Understand ecosystems and biodiversity",
//             "Learn about climate change and its impacts",
//             "Develop skills in environmental conservation"
//         ],
//         prerequisites: "Basic science knowledge",
//         duration: "8 weeks",
//         relatedCourses: [11, 12, 8],
//         videoId: "V7z7BAZdt2M",
//         character: "/placeholder.svg?height=200&width=200"
//     },
//     {
//         id: 7,
//         title: "Human Resources",
//         description: "Manage and develop talent",
//         available: true,
//         icon: <FaUserTie className="text-3xl mb-2" />,
//         objectives: [
//             "Learn effective recruitment and selection techniques",
//             "Understand employee development and retention strategies",
//             "Master performance management systems"
//         ],
//         prerequisites: "Basic understanding of business concepts",
//         duration: "6 weeks",
//         relatedCourses: [3, 4, 5],
//         videoId: "8T2sS5yj7Uo",
//         character: "/placeholder.svg?height=200&width=200"
//     },
//     {
//         id: 8,
//         title: "Photography",
//         description: "Capture moments through the lens",
//         available: true,
//         icon: <FaCamera className="text-3xl mb-2" />,
//         objectives: [
//             "Master camera settings and techniques",
//             "Learn composition and lighting principles",
//             "Develop skills in photo editing and post-processing"
//         ],
//         prerequisites: "Access to a digital camera (DSLR or mirrorless preferred)",
//         duration: "8 weeks",
//         relatedCourses: [1, 2, 10],
//         videoId: "V7z7BAZdt2M",
//         character: "/placeholder.svg?height=200&width=200"
//     },
//     {
//         id: 9,
//         title: "Public Speaking",
//         description: "Become a confident speaker",
//         available: true,
//         icon: <FaMicrophone className="text-3xl mb-2" />,
//         objectives: [
//             "Overcome stage fright and build confidence",
//             "Learn effective speech structure and delivery",
//             "Master the art of persuasion and engagement"
//         ],
//         prerequisites: "None",
//         duration: "4 weeks",
//         relatedCourses: [1, 3, 10],
//         videoId: "962eYqe--Yc",
//         character: "/placeholder.svg?height=200&width=200"
//     },
//     {
//         id: 10,
//         title: "Theater Arts",
//         description: "Express yourself on stage",
//         available: true,
//         icon: <FaTheaterMasks className="text-3xl mb-2" />,
//         objectives: [
//             "Develop acting techniques and character portrayal",
//             "Learn stage presence and voice projection",
//             "Understand theater production and direction"
//         ],
//         prerequisites: "None",
//         duration: "12 weeks",
//         relatedCourses: [1, 8, 9],
//         videoId: "R3kYWDPVR9E",
//         character: "/placeholder.svg?height=200&width=200"
//     },
//     {
//         id: 11,
//         title: "Sustainable Agriculture",
//         description: "Learn eco-friendly farming",
//         available: true,
//         icon: <FaLeaf className="text-3xl mb-2" />,
//         objectives: [
//             "Understand sustainable farming practices",
//             "Learn about organic crop production",
//             "Develop skills in soil conservation and management"
//         ],
//         prerequisites: "Basic understanding of agriculture",
//         duration: "10 weeks",
//         relatedCourses: [6, 12, 4],
//         videoId: "WCRwb9JGBx8",
//         character: "/placeholder.svg?height=200&width=200"
//     },
//     {
//         id: 12,
//         title: "Culinary Arts",
//         description: "Master the art of cooking",
//         available: true,
//         icon: <FaUtensils className="text-3xl mb-2" />,
//         objectives: [
//             "Learn professional cooking techniques",
//             "Understand flavor profiles and food pairings",
//             "Develop skills in menu planning and food presentation"
//         ],
//         prerequisites: "Basic cooking skills",
//         duration: "16 weeks",
//         relatedCourses: [11, 6, 8],
//         videoId: "TfDVLsBXYcM",
//         character: "/placeholder.svg?height=200&width=200"
//     }
// ];

// const PriceDisplay = ({ course }) => {
//     const [isEnrolled, setIsEnrolled] = useState(false)
//     const [price, setPrice] = useState(null)
//     const [isLoading, setIsLoading] = useState(false)

//     const fetchPrice = async () => {
//         setIsLoading(true)
//         try {
//             const response = await fetch(`/api/course-price?id=${course.id}`)
//             const data = await response.json()
//             setPrice(data.price)
//         } catch (error) {
//             console.error('Error fetching price:', error)
//         } finally {
//             setIsLoading(false)
//         }
//     }

//     const handleEnroll = async () => {
//         setIsLoading(true)
//         // Simulate enrollment process
//         await new Promise(resolve => setTimeout(resolve, 1000))
//         setIsEnrolled(true)
//         fetchPrice()
//     }

//     return (
//         <Box bg={useColorModeValue('white', 'teal.700')} className='text-black' p={{ base: 4, md: 6 }} borderRadius="lg" boxShadow="md">
//             <VStack spacing={{ base: 2, md: 4 }} align="stretch">
//                 <HStack justify="space-between">
//                     <Text fontWeight="bold">Price:</Text>
//                     {isEnrolled ? (
//                         <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold">
//                             {isLoading ? 'Loading...' : `$${price}`}
//                         </Text>
//                     ) : (
//                         <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold" filter="blur(4px)">
//                             $XX.XX
//                         </Text>
//                     )}
//                 </HStack>
//                 <HStack>
//                     <FaClock />
//                     <Text fontSize={{ base: "sm", md: "md" }}>
//                         {course.duration}
//                     </Text>
//                 </HStack>
//                 <HStack>
//                     <FaUsers />
//                     <Text fontSize={{ base: "sm", md: "md" }}>
//                         {Math.floor(Math.random() * 1000)} students enrolled
//                     </Text>
//                 </HStack>
//                 <HStack>
//                     <FaStar color="gold" />
//                     <Text fontSize={{ base: "sm", md: "md" }}>4.8 (234 reviews)</Text>
//                 </HStack>
//                 <Badge colorScheme={course.available ? 'green' : 'gray'} alignSelf="start">
//                     {course.available ? 'Available' : 'Coming Soon'}
//                 </Badge>
//                 {/* {!isEnrolled && (
//                     <Button
//                         onClick={handleEnroll}
//                         isLoading={isLoading}
//                         loadingText="Enrolling..."
//                         colorScheme="blue"
//                         width="100%"
//                     >
//                         Enroll to See Price
//                     </Button>
//                 )} */}
//             </VStack>
//         </Box>
//     )
// }

// export default function NonCourseDetails() {
//     const { courseId } = useParams()
//     const navigate = useNavigate()
//     const [course, setCourse] = useState(null)
//     const [relatedCourses, setRelatedCourses] = useState([])
//     const [progress, setProgress] = useState(0)
//     const { isOpen: isVideoOpen, onOpen: onVideoOpen, onClose: onVideoClose } = useDisclosure()
//     const toast = useToast()

//     const bgColor = useColorModeValue('gray.50', 'gray.800')

//     useEffect(() => {
//         const selectedCourse = coursesData.find(c => c.id === parseInt(courseId))
//         if (selectedCourse) {
//             setCourse(selectedCourse)
//             setRelatedCourses(coursesData.filter(c => selectedCourse.relatedCourses.includes(c.id)))
//             setProgress(Math.floor(Math.random() * 101))
//         }
//     }, [courseId])

//     if (!course) {
//         return (
//             <Box height="100vh" display="flex" alignItems="center" justifyContent="center">
//                 <Spinner size="xl" />
//             </Box>
//         )
//     }

//     const getIcon = (iconComponent) => {
//         const IconComponent = iconComponent.type
//         return <IconComponent size="2em" />
//     }

//     const MotionBox = motion(Box)

//     const handleShare = (platform) => {
//         const url = window.location.href
//         const text = `Check out this amazing course: ${course.title}`

//         switch (platform) {
//             case 'facebook':
//                 window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank')
//                 break
//             case 'twitter':
//                 window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`, '_blank')
//                 break
//             case 'linkedin':
//                 window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(course.title)}`, '_blank')
//                 break
//             case 'email':
//                 window.location.href = `mailto:?subject=${encodeURIComponent(course.title)}&body=${encodeURIComponent(text + '\n\n' + url)}`
//                 break
//             default:
//                 break
//         }
//     }

//     const getCourseContent = (courseId) => {
//         switch (courseId) {
//             case 1: // Creative Writing
//                 return [
//                     { week: 1, title: "Introduction to Creative Writing", lessons: ["What is Creative Writing?", "Finding Inspiration", "Understanding Genres", "Developing Your Voice"] },
//                     { week: 2, title: "Fiction Writing Basics", lessons: ["Building Compelling Characters", "Creating Believable Settings", "Plot Structures", "Writing Dialogue"] },
//                     { week: 3, title: "Poetry Writing", lessons: ["Exploring Poetic Forms", "Using Imagery", "Rhyme and Meter", "Expressing Emotions"] },
//                     { week: 4, title: "Editing and Revising", lessons: ["Self-Editing Techniques", "Working with Feedback", "Polishing Your Draft", "Preparing for Submission"] },
//                 ];
//             case 2: // Graphic Design
//                 return [
//                     { week: 1, title: "Graphic Design Fundamentals", lessons: ["Introduction to Design Principles", "Color Theory", "Typography Basics", "Visual Hierarchy"] },
//                     { week: 2, title: "Software Tools", lessons: ["Getting Started with Adobe Photoshop", "Using Adobe Illustrator", "Designing in Canva", "Tips for Efficient Workflow"] },
//                     { week: 3, title: "Creative Projects", lessons: ["Logo Design", "Poster Design", "Social Media Graphics", "Designing for Print"] },
//                     { week: 4, title: "Portfolio Development", lessons: ["Showcasing Your Work", "Creating a Digital Portfolio", "Presenting Your Designs", "Building a Personal Brand"] },
//                 ];
//             case 3: // Digital Marketing
//                 return [
//                     { week: 1, title: "Introduction to Digital Marketing", lessons: ["Understanding Digital Marketing", "Key Metrics and KPIs", "Marketing Channels", "Audience Analysis"] },
//                     { week: 2, title: "Social Media Marketing", lessons: ["Creating Engaging Content", "Platform-Specific Strategies", "Social Media Analytics", "Managing Campaigns"] },
//                     { week: 3, title: "Search Engine Optimization (SEO)", lessons: ["On-Page SEO", "Off-Page SEO", "Keyword Research", "Content Optimization"] },
//                     { week: 4, title: "Paid Advertising", lessons: ["Google Ads Basics", "Facebook and Instagram Ads", "Creating Effective Ad Copy", "Budgeting and ROI"] },
//                 ];
//             case 4: // Healthcare Management
//                 return [
//                     { week: 1, title: "Healthcare Industry Overview", lessons: ["Understanding the Healthcare System", "Key Players in Healthcare", "Challenges in Healthcare Management", "Emerging Trends"] },
//                     { week: 2, title: "Leadership in Healthcare", lessons: ["Effective Communication", "Team Building", "Decision-Making Strategies", "Conflict Resolution"] },
//                     { week: 3, title: "Healthcare Policies and Regulations", lessons: ["Compliance Basics", "Patient Rights and Privacy", "Healthcare Laws", "Ethical Considerations"] },
//                     { week: 4, title: "Operational Management", lessons: ["Managing Resources", "Improving Patient Outcomes", "Budgeting and Finance", "Technology in Healthcare"] },
//                 ];
//             case 5: // Business Law
//                 return [
//                     { week: 1, title: "Introduction to Business Law", lessons: ["Legal Foundations", "Types of Business Entities", "Contracts Basics", "Torts in Business"] },
//                     { week: 2, title: "Employment Law", lessons: ["Employee Rights", "Workplace Discrimination", "Employment Contracts", "Labor Laws"] },
//                     { week: 3, title: "Intellectual Property", lessons: ["Understanding Trademarks", "Copyright Basics", "Patent Law", "Protecting Business Assets"] },
//                     { week: 4, title: "Business Disputes and Resolution", lessons: ["Litigation Basics", "Alternative Dispute Resolution", "Arbitration and Mediation", "Case Studies"] },
//                 ];
//             case 6: // Environmental Science
//                 return [
//                     { week: 1, title: "Environmental Basics", lessons: ["Ecosystems and Biodiversity", "Human Impact on the Environment", "Sustainability Principles", "Global Environmental Issues"] },
//                     { week: 2, title: "Climate Change", lessons: ["Causes and Effects", "Mitigation Strategies", "Renewable Energy", "Climate Policies"] },
//                     { week: 3, title: "Conservation Efforts", lessons: ["Wildlife Protection", "Habitat Restoration", "Sustainable Practices", "Community Engagement"] },
//                     { week: 4, title: "Environmental Science Careers", lessons: ["Research Opportunities", "Conservation Work", "Policy Advocacy", "Corporate Sustainability Roles"] },
//                 ];
//             case 7: // Human Resources
//                 return [
//                     { week: 1, title: "Introduction to Human Resources", lessons: ["Role of HR in Organizations", "HR Trends", "Employee Life Cycle", "HR Metrics"] },
//                     { week: 2, title: "Recruitment and Selection", lessons: ["Creating Job Descriptions", "Interviewing Techniques", "Candidate Assessment", "Onboarding Processes"] },
//                     { week: 3, title: "Employee Relations", lessons: ["Building Positive Work Culture", "Handling Workplace Conflicts", "Performance Management", "Employee Retention"] },
//                     { week: 4, title: "HR Technology and Analytics", lessons: ["HRIS Systems", "Data-Driven HR Decisions", "Using Analytics in HR", "Future of Work"] },
//                 ];
//             case 8: // Photography
//                 return [
//                     { week: 1, title: "Photography Basics", lessons: ["Understanding Your Camera", "Exposure and Composition", "Lighting Techniques", "Using Lenses"] },
//                     { week: 2, title: "Creative Techniques", lessons: ["Long Exposure Photography", "Portrait Photography", "Landscape Photography", "Editing Basics"] },
//                     { week: 3, title: "Professional Photography", lessons: ["Working with Clients", "Building a Portfolio", "Pricing Your Services", "Marketing Your Work"] },
//                     { week: 4, title: "Specialty Photography", lessons: ["Macro Photography", "Wildlife Photography", "Event Photography", "Fashion Photography"] },
//                 ];
//             case 9: // Public Speaking
//                 return [
//                     { week: 1, title: "Introduction to Public Speaking", lessons: ["Overcoming Stage Fright", "Understanding Your Audience", "Speech Organization", "Delivery Techniques"] },
//                     { week: 2, title: "Speech Crafting", lessons: ["Writing Compelling Introductions", "Structuring Main Points", "Creating Impactful Conclusions", "Using Visual Aids"] },
//                     { week: 3, title: "Advanced Techniques", lessons: ["Storytelling in Speeches", "Using Humor Effectively", "Handling Q&A", "Improvisation Skills"] },
//                     { week: 4, title: "Final Presentation", lessons: ["Rehearsing Your Speech", "Receiving Feedback", "Polishing Delivery", "Presentation Day"] },
//                 ];
//             case 10: // Theater Arts
//                 return [
//                     { week: 1, title: "The Basics of Acting", lessons: ["Understanding Your Role", "Voice and Speech", "Body Language", "Character Development"] },
//                     { week: 2, title: "Stage Performance", lessons: ["Blocking and Movement", "Working with Co-Actors", "Stage Presence", "Expressing Emotions"] },
//                     { week: 3, title: "Theatrical Techniques", lessons: ["Improvisation", "Comedic Timing", "Dramatic Pacing", "Monologue Delivery"] },
//                     { week: 4, title: "Production and Direction", lessons: ["Understanding Stage Design", "Lighting and Sound", "Costume and Props", "Rehearsals and Final Performance"] },
//                 ];        case 11: // Sustainable Agriculture
//             return [
//                 { week: 1, title: "Introduction to Sustainable Agriculture", lessons: ["What is Sustainable Agriculture?", "Principles of Eco-Friendly Farming", "Understanding Soil Health", "Crop Rotation Basics"] },
//                 { week: 2, title: "Sustainable Practices", lessons: ["Organic Farming Techniques", "Water Conservation Strategies", "Agroforestry", "Integrated Pest Management"] },
//                 { week: 3, title: "Modern Tools and Methods", lessons: ["Smart Farming Technology", "Hydroponics and Aquaponics", "Precision Agriculture", "Renewable Energy in Farming"] },
//                 { week: 4, title: "Future of Agriculture", lessons: ["Climate-Resilient Crops", "Community-Supported Agriculture", "Global Trends and Challenges", "Advocacy for Sustainability"] },
//             ];
//         case 12: // Culinary Arts
//             return [
//                 { week: 1, title: "Fundamentals of Culinary Arts", lessons: ["Introduction to Culinary Techniques", "Knife Skills", "Understanding Ingredients", "Basic Cooking Methods"] },
//                 { week: 2, title: "Cuisine Exploration", lessons: ["Italian and Mediterranean Cuisines", "Asian Flavors", "Classic French Techniques", "American Regional Cooking"] },
//                 { week: 3, title: "Advanced Techniques", lessons: ["Baking and Pastry Basics", "Sous Vide Cooking", "Plating and Presentation", "Food Pairings and Combinations"] },
//                 { week: 4, title: "Building a Culinary Career", lessons: ["Kitchen Management", "Starting a Food Business", "Menu Development", "Trends in Modern Cuisine"] },
//             ];

//             default:
//                 return [];
//         }
//     };

//     return (
//         <>
//             <Box minHeight="100vh" paddingTop={20} bg={bgColor} color={useColorModeValue('gray.800', 'white')}>
//                 <Helmet>
//                     <title>{course.title} | Chamber of Learning</title>
//                     <meta name="description" content={course.description} />
//                 </Helmet>
//                 <Container maxW="container.xl" py={{ base: 4, md: 8 }}>
//                     <MotionBox
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.5 }}
//                     >
//                         {/* Hero Section */}
//                         <Box
//                             bg={useColorModeValue('teal.600', 'gray.200')}
//                             color={useColorModeValue('white', 'gray.800')}
//                             borderRadius="lg"
//                             p={{ base: 4, md: 8 }}
//                             mb={{ base: 6, md: 8 }}
//                             position="relative"
//                             overflow="hidden"
//                             boxShadow="xl"
//                         >
//                             <Box
//                                 position="absolute"
//                                 top="-20%"
//                                 right="-10%"
//                                 width="300px"
//                                 height="300px"
//                                 borderRadius="full"
//                                 overflow="hidden"
//                             >
//                                 <Image
//                                     src="../assets/img (11).jpeg"
//                                     alt="Background image"
//                                     objectFit="cover"
//                                     width="100%"
//                                     height="100%"
//                                     filter="blur(60px)"
//                                 />
//                             </Box>

//                             <Grid templateColumns={{ base: '1fr', md: '2fr 1fr' }} gap={{ base: 4, md: 8 }} alignItems="center">
//                                 <GridItem>
//                                     <Heading as="h1" fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }} mb={{ base: 2, md: 4 }} textShadow="2px 2px 4px rgba(0,0,0,0.4)">
//                                         {course.title}
//                                     </Heading>
//                                     <Text fontSize={{ base: "md", md: "lg", lg: "xl" }} mb={{ base: 4, md: 6 }} textShadow="1px 1px 2px rgba(0,0,0,0.2)">
//                                         {course.description}
//                                     </Text>
//                                     <HStack spacing={{ base: 2, md: 4 }}>
//                                         <EnhancedEnrollment/>
//                                         <Button colorScheme="blackAlpha" size={{ base: "sm", md: "md" }} onClick={onVideoOpen} leftIcon={<FaPlay />}>
//                                             Watch Preview
//                                         </Button>
//                                     </HStack>
//                                 </GridItem>
//                                 <GridItem>
//                                     <PriceDisplay course={course} />
//                                 </GridItem>
//                             </Grid>
//                         </Box>

//                         <Button leftIcon={<FaArrowLeft />} onClick={() => navigate(-1)} mb={{ base: 4, md: 8 }} variant="outline">
//                             Back to Courses
//                         </Button>

//                         {/* Main Content */}
//                         <Grid templateColumns={{ base: '1fr', lg: '2fr 1fr' }} gap={{ base: 4, md: 6, lg: 8 }}>
//                             <GridItem>
//                                 {/* About Section */}
//                                 <Card mb={{ base: 4, md: 8 }}>
//                                     <CardHeader>
//                                         <Heading size={{ base: "md", md: "lg" }}>About This Course</Heading>
//                                     </CardHeader>
//                                     <CardBody>
//                                         <Text fontSize={{ base: "sm", md: "md" }}>
//                                             This comprehensive course is designed to take you from beginner to proficient in {course.title}.
//                                             Whether you're looking to start a new career or enhance your existing skills, this course provides
//                                             the knowledge and hands-on experience you need to succeed in the field of {course.title.toLowerCase()}.
//                                         </Text>
//                                     </CardBody>
//                                 </Card>

//                                 {/* Course Content */}
//                                 <Card mb={{ base: 4, md: 8 }}>
//                                     <CardHeader>
//                                         <Heading size={{ base: 'md', md: 'lg' }}>Course Content</Heading>
//                                     </CardHeader>
//                                     <CardBody>
//                                         <Accordion allowMultiple>
//                                             {getCourseContent(course.id).map((week, index) => (
//                                                 <AccordionItem key={index}>
//                                                     <h2>
//                                                         <AccordionButton>
//                                                             <Box flex="1" textAlign="left">
//                                                                 Week {week.week}: {week.title}
//                                                             </Box>
//                                                             <AccordionIcon />
//                                                         </AccordionButton>
//                                                     </h2>
//                                                     <AccordionPanel pb={4}>
//                                                         <List spacing={2}>
//                                                             {week.lessons.map((lesson, lessonIndex) => (
//                                                                 <ListItem key={lessonIndex}>
//                                                                     <ListIcon as={FaRegFileAlt} color="green.500" />
//                                                                     Lesson {lessonIndex + 1}: {lesson}
//                                                                 </ListItem>
//                                                             ))}
//                                                         </List>
//                                                     </AccordionPanel>
//                                                 </AccordionItem>
//                                             ))}
//                                         </Accordion>
//                                     </CardBody>
//                                 </Card>

//                                 {/* Certificate Section */}
//                                 <CertificateSection />

//                                 {/* Benefits Section */}
//                                 <Card mb={{ base: 4, md: 8 }}>
//                                     <CardHeader>
//                                         <Heading size={{ base: "md", md: "lg" }}>Course Benefits</Heading>
//                                     </CardHeader>
//                                     <CardBody>
//                                         <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 4, md: 6 }}>
//                                             {[
//                                                 { icon: FaUserCog, title: 'Expert-Led Instruction', description: 'Learn from industry professionals with years of experience.' },
//                                                 { icon: FaCogs, title: 'Hands-On Projects', description: 'Apply your skills to real-world scenarios and build a portfolio.' },
//                                                 { icon: FaUsers, title: 'Community Support', description: 'Join a community of learners and get support from peers and instructors.' },
//                                                 { icon: FaCertificate, title: 'Industry-Recognized Certificate', description: 'Earn a certificate valued by top employers in the field.' },
//                                             ].map((benefit, index) => (
//                                                 <VStack key={index} align="start" p={4} borderWidth={1} borderRadius="md">
//                                                     <benefit.icon size="2em" color={useColorModeValue('gray.500', 'gray.300')} />
//                                                     <Heading size={{ base: "sm", md: "md" }}>{benefit.title}</Heading>
//                                                     <Text fontSize={{ base: "sm", md: "md" }}>{benefit.description}</Text>
//                                                 </VStack>
//                                             ))}
//                                         </SimpleGrid>
//                                     </CardBody>
//                                 </Card>

//                                 {/* Requirements Section */}
//                                 <Card mb={{ base: 4, md: 8 }}>
//                                     <CardHeader>
//                                         <Heading size={{ base: "md", md: "lg" }}>Course Requirements</Heading>
//                                     </CardHeader>
//                                     <CardBody>
//                                         <List spacing={3}>
//                                             <ListItem>
//                                                 <ListIcon as={FaCheckCircle} color="green.500" />
//                                                 {course.prerequisites}
//                                             </ListItem>
//                                             <ListItem>
//                                                 <ListIcon as={FaCheckCircle} color="green.500" />
//                                                 Access to a computer with internet connection
//                                             </ListItem>
//                                             <ListItem>
//                                                 <ListIcon as={FaCheckCircle} color="green.500" />
//                                                 Dedication to complete assignments and projects
//                                             </ListItem>
//                                             <ListItem>
//                                                 <ListIcon as={FaCheckCircle} color="green.500" />
//                                                 Willingness to participate in discussions and peer reviews
//                                             </ListItem>
//                                         </List>
//                                     </CardBody>
//                                 </Card>

//                                 {/* Testimonials Section */}
//                                 <Card mb={{ base: 4, md: 8 }}>
//                                     <CardHeader>
//                                         <Heading size={{ base: "md", md: "lg" }}>Student Testimonials</Heading>
//                                     </CardHeader>
//                                     <CardBody>
//                                         <VStack spacing={{ base: 4, md: 6 }}>
//                                             {[
//                                                 { name: 'Guna', role: 'Software Developer', content: 'This course transformed my career. I\'m now working as a full-stack developer at a top tech company!' },
//                                                 { name: 'Sekar', role: 'Data Analyst', content: 'The hands-on projects really helped me understand complex concepts. Highly recommended!' },
//                                                 { name: 'Guna', role: 'IT Manager', content: 'As someone looking to upskill my team, this course provided exactly what we needed. Great ROI!' },
//                                             ].map((testimonial, index) => (
//                                                 <Box key={index} p={5} shadow="md" borderWidth="1px" borderRadius="md" width="100%">
//                                                     <Flex>
//                                                         <Avatar name={testimonial.name} src={`/placeholder.svg?height=50&width=50&text=${testimonial.name[0]}`} mr={4} />
//                                                         <Box>
//                                                             <Heading size={{ base: "sm", md: "md" }}>{testimonial.name}</Heading>
//                                                             <Text fontSize={{ base: "xs", md: "sm" }} color="gray.500">{testimonial.role}</Text>
//                                                         </Box>
//                                                     </Flex>
//                                                     <Text mt={4} fontStyle="italic" fontSize={{ base: "sm", md: "md" }}>"{testimonial.content}"</Text>
//                                                 </Box>
//                                             ))}
//                                         </VStack>
//                                     </CardBody>
//                                 </Card>

//                                 {/* FAQs Section */}
//                                 <Card mb={{ base: 4, md: 8 }}>
//                                     <CardHeader>
//                                         <Heading size={{ base: "md", md: "lg" }}>Frequently Asked Questions</Heading>
//                                     </CardHeader>
//                                     <CardBody>
//                                         <Accordion allowMultiple>
//                                             {[
//                                                 { question: 'How long do I have access to the course?', answer: 'You have lifetime access to the course content, including any future updates.' },
//                                                 { question: 'Is there a money-back guarantee?', answer: 'Yes, we offer a 30-day money-back guarantee if you\'re not satisfied with the course.' },
//                                                 { question: 'How is the course delivered?', answer: 'The course is delivered online through our learning platform. You can access the content at your own pace.' },
//                                                 { question: 'Will I receive support during the course?', answer: 'Yes, you\'ll have access to instructor support and a community forum throughout the duration of the course.' },
//                                                 { question: 'Are there any live sessions?', answer: 'We offer optional live Q&A sessions with the instructor on a bi-weekly basis.' },
//                                             ].map((faq, index) => (
//                                                 <AccordionItem key={index}>
//                                                     <h2>
//                                                         <AccordionButton>
//                                                             <Box flex="1" textAlign="left">
//                                                                 <HStack>
//                                                                     <FaQuestionCircle color={useColorModeValue('gray.500', 'gray.300')} />
//                                                                     <Text fontWeight="bold" fontSize={{ base: "sm", md: "md" }}>{faq.question}</Text>
//                                                                 </HStack>
//                                                             </Box>
//                                                             <AccordionIcon />
//                                                         </AccordionButton>
//                                                     </h2>
//                                                     <AccordionPanel pb={4}>
//                                                         <Text fontSize={{ base: "sm", md: "md" }}>{faq.answer}</Text>
//                                                     </AccordionPanel>
//                                                 </AccordionItem>
//                                             ))}
//                                         </Accordion>
//                                     </CardBody>
//                                 </Card>
//                             </GridItem>

//                             {/* Sidebar */}
//                             <GridItem>
//                                 <Box position={{ base: "static", lg: "sticky" }} top="20px">
//                                     <VStack spacing={{ base: 4, md: 6, lg: 8 }}>
//                                         {/* Course Progress */}
//                                         <Card w="100%">
//                                             <CardBody>
//                                                 <Heading size={{ base: "sm", md: "md" }} mb={4}>Your Progress</Heading>
//                                                 <Progress value={progress} colorScheme="green" size="lg" mb={2} />
//                                                 <Text textAlign="center" fontSize={{ base: "sm", md: "md" }}>{progress}% Complete</Text>
//                                                 <Button colorScheme="gray" width="100%" mt={4} size={{ base: "sm", md: "md" }} onClick={() => {
//                                                     toast({
//                                                         title: "Continue Learning",
//                                                         description: "Redirecting to your last lesson...",
//                                                         status: "info",
//                                                         duration: 2000,
//                                                         isClosable: true,
//                                                     })
//                                                 }}>
//                                                     Continue Learning
//                                                 </Button>
//                                             </CardBody>
//                                         </Card>

//                                         {/* Course Stats */}
//                                         <Card w="100%">
//                                             <CardBody>
//                                                 <Heading size={{ base: "sm", md: "md" }} mb={4}>Course Stats</Heading>
//                                                 <SimpleGrid columns={2} spacing={4}>
//                                                     <Stat>
//                                                         <StatLabel>Students</StatLabel>
//                                                         <StatNumber>1,234</StatNumber>
//                                                         <StatHelpText>
//                                                             <FaUsers /> Enrolled
//                                                         </StatHelpText>
//                                                     </Stat>
//                                                     <Stat>
//                                                         <StatLabel>Rating</StatLabel>
//                                                         <StatNumber>4.8</StatNumber>
//                                                         <StatHelpText>
//                                                             <FaStar /> 234 reviews
//                                                         </StatHelpText>
//                                                     </Stat>
//                                                     <Stat>
//                                                         <StatLabel>Last Updated</StatLabel>
//                                                         <StatNumber>Oct 2024</StatNumber>
//                                                         <StatHelpText>
//                                                             <FaClock /> Recent
//                                                         </StatHelpText>
//                                                     </Stat>
//                                                     <Stat>
//                                                         <StatLabel>Certificate</StatLabel>
//                                                         <StatNumber>Yes</StatNumber>
//                                                         <StatHelpText>
//                                                             <FaCertificate /> Included
//                                                         </StatHelpText>
//                                                     </Stat>
//                                                 </SimpleGrid>
//                                             </CardBody>
//                                         </Card>

//                                         {/* Instructor Info */}
//                                         <Card w="100%">
//                                             <CardBody>
//                                                 <Heading size={{ base: "sm", md: "md" }} mb={4}>Instructor</Heading>
//                                                 <HStack spacing={4}>
//                                                     <Avatar
//                                                         size={{ base: "md", md: "xl" }}
//                                                         name="Mani"
//                                                         src="/placeholder.svg?height=100&width=100&text=JD"
//                                                     />
//                                                     <VStack align="start" spacing={1}>
//                                                         <Heading size={{ base: "sm", md: "md" }}>John Doe</Heading>
//                                                         <Text fontSize={{ base: "xs", md: "sm" }} color="gray.500">Senior Software Engineer</Text>
//                                                         <HStack>
//                                                             <FaStar color="gold" />
//                                                             <Text fontSize={{ base: "xs", md: "sm" }}>4.9 Instructor Rating</Text>
//                                                         </HStack>
//                                                         <HStack>
//                                                             <FaUsers color="gray" />
//                                                             <Text fontSize={{ base: "xs", md: "sm" }}>10,000+ Students</Text>
//                                                         </HStack>
//                                                         <HStack>
//                                                             <FaRegFileAlt color="gray" />
//                                                             <Text fontSize={{ base: "xs", md: "sm" }}>15 Courses</Text>
//                                                         </HStack>
//                                                     </VStack>
//                                                 </HStack>
//                                                 <Text fontSize={{ base: "sm", md: "md" }} mt={4}>
//                                                     Mani is a seasoned software engineer with over 10 years of experience in the industry.
//                                                     He's passionate about teaching and has helped thousands of students launch their careers in tech.
//                                                 </Text>
//                                             </CardBody>
//                                         </Card>

//                                         {/* Share Course */}
//                                         <Card w="100%">
//                                             <CardBody>
//                                                 <Heading size={{ base: "sm", md: "md" }} mb={4}>Share This Course</Heading>
//                                                 <HStack spacing={4} justify="center">
//                                                     <IconButton
//                                                         aria-label="Share on Facebook"
//                                                         icon={<FaFacebook />}
//                                                         onClick={() => handleShare('facebook')}
//                                                         colorScheme="gray"
//                                                     />
//                                                     <IconButton
//                                                         aria-label="Share on Twitter"
//                                                         icon={<FaTwitter />}
//                                                         onClick={() => handleShare('twitter')}
//                                                         colorScheme="gray"
//                                                     />
//                                                     <IconButton
//                                                         aria-label="Share on LinkedIn"
//                                                         icon={<FaLinkedin />}
//                                                         onClick={() => handleShare('linkedin')}
//                                                         colorScheme="gray"
//                                                     />
//                                                     <IconButton
//                                                         aria-label="Share via Email"
//                                                         icon={<FaEnvelope />}
//                                                         onClick={() => handleShare('email')}
//                                                         colorScheme="gray"
//                                                     />
//                                                 </HStack>
//                                             </CardBody>
//                                         </Card>

//                                     </VStack>
//                                 </Box>
//                             </GridItem>
//                         </Grid>

//                         {/* Related Courses */}
//                         <Box mt={{ base: 8, md: 12 }}>
//                             <Heading size={{ base: "lg", md: "xl" }} mb={{ base: 4, md: 6 }}>Related Courses</Heading>
//                             <Grid templateColumns={{ base: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={{ base: 4, md: 6 }}>
//                                 {relatedCourses.map(relatedCourse => (
//                                     <GridItem key={relatedCourse.id}>
//                                         <Card
//                                             h="100%"
//                                             cursor="pointer"
//                                             as={Link}
//                                             to={`/Non_it-courses/${relatedCourse.id}`}
//                                             transition="all 0.3s"
//                                             _hover={{ transform: 'translateY(-5px)', boxShadow: 'xl' }}
//                                         >
//                                             <CardHeader>
//                                                 <HStack spacing={4}>
//                                                     <Box bg="gray.100" p={2} borderRadius="full">
//                                                         {getIcon(relatedCourse.icon)}
//                                                     </Box>
//                                                     <Heading size={{ base: "sm", md: "md" }}>{relatedCourse.title}</Heading>
//                                                 </HStack>
//                                             </CardHeader>
//                                             <CardBody>
//                                                 <Text fontSize={{ base: "sm", md: "md" }} noOfLines={3}>{relatedCourse.description}</Text>
//                                             </CardBody>
//                                             <CardFooter>
//                                                 <Button rightIcon={<FaArrowRight />} colorScheme='teal' size={{ base: "sm", md: "md" }}>
//                                                     Learn More
//                                                 </Button>
//                                             </CardFooter>
//                                         </Card>
//                                     </GridItem>
//                                 ))}
//                             </Grid>
//                         </Box>
//                     </MotionBox>
//                 </Container>

//                 {/* Video Preview Modal */}
//                 <Modal isOpen={isVideoOpen} onClose={onVideoClose} size={{ base: "full", md: "4xl" }}>
//                     <ModalOverlay />
//                     <ModalContent>
//                         <ModalHeader>Course Preview: {course.title}</ModalHeader>
//                         <ModalCloseButton />
//                         <ModalBody>
//                             <AspectRatio ratio={16 / 9}>
//                                 <iframe
//                                     title="Course Preview"
//                                     src={`https://www.youtube.com/embed/${course.videoId}`}
//                                     allowFullScreen
//                                 />
//                             </AspectRatio>
//                         </ModalBody>
//                     </ModalContent>
//                 </Modal>
//             </Box>
//         </>
//     )
// }

import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  FaBook,
  FaPalette,
  FaChartLine,
  FaChartBar,
  FaHeartbeat,
  FaGavel,
  FaGlobeAmericas,
  FaUserTie,
  FaTheaterMasks,
  FaUtensils,
  FaPen,
  FaMicrophone,
  FaCamera,
  FaLeaf,
  FaTwitter,
  FaEnvelope,
  FaArrowRight,
  FaLinkedin,
  FaFacebook,
  FaRegFileAlt,
  FaCogs,
  FaUserCog,
  FaArrowLeft,
  FaStar,
  FaUsers,
  FaClock,
  FaCheckCircle,
  FaQuestionCircle,
  FaGift,
  FaCertificate,
  FaPlay,
} from "react-icons/fa";
import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Badge,
  Image,
  Grid,
  GridItem,
  useColorModeValue,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Progress,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  List,
  ListItem,
  ListIcon,
  Tooltip,
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Flex,
  IconButton,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  useToast,
  AspectRatio,
  Spinner,
  FormErrorMessage,
} from "@chakra-ui/react";
import CertificateSection from "./Certificate";
import { useAuth } from "../../../Contexts/AuthContext";
import EnrollmentForm from "./EnrollmentForm";

// import Enrollment from '../Enrollment/EnrollLoginpage'
// import EnhancedEnrollment from "../Enrollment/EnrollLoginpage";

const coursesData = [
  {
    id: "NIT-101",
    title: "Creative Writing",
    description: "Master the art of storytelling",
    available: true,
    icon: <FaBook className="text-3xl mb-2" />,
    objectives: [
      "Develop compelling characters and plots",
      "Master various writing styles and techniques",
      "Learn to edit and refine your work",
    ],
    prerequisites: "Basic writing skills",
    duration: "8 weeks",
    relatedCourses: ["NIT-102", "NIT-108", "NIT-110"],
    videoId: "R3kYWDPVR9E",
    character: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "NIT-102",
    title: "Graphic Design",
    description: "Create stunning visual content",
    available: true,
    icon: <FaPalette className="text-3xl mb-2" />,
    objectives: [
      "Master essential design software",
      "Understand color theory and typography",
      "Create professional-quality designs",
    ],
    prerequisites: "Basic computer skills",
    duration: "10 weeks",
    relatedCourses: ["NIT-101", "NIT-103", "NIT-108"],
    videoId: "8T2sS5yj7Uo",
    character: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "NIT-103",
    title: "Digital Marketing",
    description: "Learn to promote in the digital age",
    available: true,
    icon: <FaChartBar className="text-3xl mb-2" />,
    objectives: [
      "Develop effective digital marketing strategies",
      "Master social media marketing techniques",
      "Analyze and optimize marketing campaigns",
    ],
    prerequisites: "Basic understanding of marketing concepts",
    duration: "6 weeks",
    relatedCourses: ["NIT-102", "NIT-107", "NIT-109"],
    videoId: "TfDVLsBXYcM",
    character: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "NIT-104",
    title: "Healthcare Management",
    description: "Lead in the healthcare industry",
    available: true,
    icon: <FaHeartbeat className="text-3xl mb-2" />,
    objectives: [
      "Understand healthcare systems and policies",
      "Develop leadership skills in healthcare settings",
      "Learn to manage healthcare resources effectively",
    ],
    prerequisites: "Basic understanding of healthcare systems",
    duration: "12 weeks",
    relatedCourses: ["NIT-105", "NIT-107", "NIT-111"],
    videoId: "962eYqe--Yc",
    character: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "NIT-105",
    title: "Business Law",
    description: "Understand legal aspects of business",
    available: true,
    icon: <FaGavel className="text-3xl mb-2" />,
    objectives: [
      "Understand key business law concepts",
      "Learn to navigate legal issues in business",
      "Develop skills in contract law and negotiation",
    ],
    prerequisites: "Basic understanding of business concepts",
    duration: "10 weeks",
    relatedCourses: ["NIT-104", "NIT-107", "NIT-109"],
    videoId: "WCRwb9JGBx8",
    character: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "NIT-106",
    title: "Environmental Science",
    description: "Study and protect our environment",
    available: true,
    icon: <FaGlobeAmericas className="text-3xl mb-2" />,
    objectives: [
      "Understand ecosystems and biodiversity",
      "Learn about climate change and its impacts",
      "Develop skills in environmental conservation",
    ],
    prerequisites: "Basic science knowledge",
    duration: "8 weeks",
    relatedCourses: ["NIT-111", "NIT-112", "NIT-108"],
    videoId: "V7z7BAZdt2M",
    character: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "NIT-107",
    title: "Human Resources",
    description: "Manage and develop talent",
    available: true,
    icon: <FaUserTie className="text-3xl mb-2" />,
    objectives: [
      "Learn effective recruitment and selection techniques",
      "Understand employee development and retention strategies",
      "Master performance management systems",
    ],
    prerequisites: "Basic understanding of business concepts",
    duration: "6 weeks",
    relatedCourses: ["NIT-103", "NIT-104", "NIT-105"],
    videoId: "8T2sS5yj7Uo",
    character: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "NIT-108",
    title: "Photography",
    description: "Capture moments through the lens",
    available: true,
    icon: <FaCamera className="text-3xl mb-2" />,
    objectives: [
      "Master camera settings and techniques",
      "Learn composition and lighting principles",
      "Develop skills in photo editing and post-processing",
    ],
    prerequisites: "Access to a digital camera (DSLR or mirrorless preferred)",
    duration: "8 weeks",
    relatedCourses: ["NIT-101", "NIT-102", "NIT-110"],
    videoId: "V7z7BAZdt2M",
    character: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "NIT-109",
    title: "Public Speaking",
    description: "Become a confident speaker",
    available: true,
    icon: <FaMicrophone className="text-3xl mb-2" />,
    objectives: [
      "Overcome stage fright and build confidence",
      "Learn effective speech structure and delivery",
      "Master the art of persuasion and engagement",
    ],
    prerequisites: "None",
    duration: "4 weeks",
    relatedCourses: ["NIT-101", "NIT-103", "NIT-110"],
    videoId: "962eYqe--Yc",
    character: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "NIT-110",
    title: "Theater Arts",
    description: "Express yourself on stage",
    available: true,
    icon: <FaTheaterMasks className="text-3xl mb-2" />,
    objectives: [
      "Develop acting techniques and character portrayal",
      "Learn stage presence and voice projection",
      "Understand theater production and direction",
    ],
    prerequisites: "None",
    duration: "12 weeks",
    relatedCourses: ["NIT-101", "NIT-108", "NIT-109"],
    videoId: "R3kYWDPVR9E",
    character: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "NIT-111",
    title: "Sustainable Agriculture",
    description: "Learn eco-friendly farming",
    available: true,
    icon: <FaLeaf className="text-3xl mb-2" />,
    objectives: [
      "Understand sustainable farming practices",
      "Learn about organic crop production",
      "Develop skills in soil conservation and management",
    ],
    prerequisites: "Basic understanding of agriculture",
    duration: "10 weeks",
    relatedCourses: ["NIT-106", "NIT-112", "NIT-104"],
    videoId: "WCRwb9JGBx8",
    character: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "NIT-112",
    title: "Culinary Arts",
    description: "Master the art of cooking",
    available: true,
    icon: <FaUtensils className="text-3xl mb-2" />,
    objectives: [
      "Learn professional cooking techniques",
      "Understand flavor profiles and food pairings",
      "Develop skills in menu planning and food presentation",
    ],
    prerequisites: "Basic cooking skills",
    duration: "16 weeks",
    relatedCourses: ["NIT-111", "NIT-106", "NIT-108"],
    videoId: "TfDVLsBXYcM",
    character: "/placeholder.svg?height=200&width=200",
  },
];

const PriceDisplay = ({ course }) => {
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [price, setPrice] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPrice = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/course-price?id=${course.id}`);
      const data = await response.json();
      setPrice(data.price);
    } catch (error) {
      console.error("Error fetching price:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // const handleEnroll = async () => {
  //   setIsLoading(true);
  //   // Simulate enrollment process
  //   await new Promise((resolve) => setTimeout(resolve, 1000));
  //   setIsEnrolled(true);
  //   fetchPrice();
  // };

  return (
    <Box
      bg={useColorModeValue("white", "teal.800")}
      className="text-black"
      p={{ base: 4, md: 6 }}
      borderRadius="lg"
      boxShadow="md"
    >
      <VStack spacing={{ base: 2, md: 4 }} align="stretch">
        <HStack justify="space-between">
          <Text fontWeight="bold">Price:</Text>
          {isEnrolled ? (
            <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold">
              {isLoading ? "Loading..." : `$${price}`}
            </Text>
          ) : (
            <Text
              fontSize={{ base: "xl", md: "2xl" }}
              fontWeight="bold"
              filter="blur(4px)"
            >
              $XX.XX
            </Text>
          )}
        </HStack>
        <HStack>
          <FaClock />
          <Text fontSize={{ base: "sm", md: "md" }}>{course.duration}</Text>
        </HStack>
        <HStack>
          <FaUsers />
          <Text fontSize={{ base: "sm", md: "md" }}>
            {Math.floor(Math.random() * 1000)} students enrolled
          </Text>
        </HStack>
        <HStack>
          <FaStar color="gold" />
          <Text fontSize={{ base: "sm", md: "md" }}>4.8 (234 reviews)</Text>
        </HStack>
        <Badge
          colorScheme={course.available ? "orange" : "gray"}
          alignSelf="start"
        >
          {course.available ? "Available" : "Coming Soon"}
        </Badge>
        {/* {!isEnrolled && (
                    <Button
                        onClick={handleEnroll}
                        isLoading={isLoading}
                        loadingText="Enrolling..."
                        colorScheme="blue"
                        width="100%"
                    >
                        Enroll to See Price
                    </Button>
                )} */}
      </VStack>
    </Box>
  );
};

export default function Non_IT_CourseDetails() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [relatedCourses, setRelatedCourses] = useState([]);
  const [progress, setProgress] = useState(0);
  const {
    isOpen: isVideoOpen,
    onOpen: onVideoOpen,
    onClose: onVideoClose,
  } = useDisclosure();
  const toast = useToast();
  const { user, setShowForm, setRedirect } = useAuth();

  const bgColor = useColorModeValue("gray.50", "gray.800");

  // const handleEnroll = () => {
  //   if(user == "Authenticated"){
  //       alert("Already enrolled")
  //   }else{
  //       setRedirect("/Non_it-courses/"+courseId)
  //       setShowForm(true)
  //   }
  // }

  // useEffect(() => {
  //   const selectedCourse = coursesData.find((c) => c.id === parseInt(courseId));
  //   if (selectedCourse) {
  //     setCourse(selectedCourse);
  //     setRelatedCourses(
  //       coursesData.filter((c) => selectedCourse.relatedCourses.includes(c.id))
  //     );
  //     setProgress(Math.floor(Math.random() * 101));
  //   }
  // }, [courseId]);

  useEffect(() => {
  const selectedCourse = coursesData.find((c) => c.id === courseId);
  if (selectedCourse) {
    setCourse(selectedCourse);
    setRelatedCourses(
      coursesData.filter((c) => selectedCourse.relatedCourses.includes(c.id))
    );
    setProgress(Math.floor(Math.random() * 101));
  }
}, [courseId]);


  if (!course) {
    return (
      <Box
        height="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Spinner size="xl" />
      </Box>
    );
  }

  const getIcon = (iconComponent) => {
    const IconComponent = iconComponent.type;
    return <IconComponent size="2em" />;
  };

  const MotionBox = motion(Box);

  const handleShare = (platform) => {
    const url = window.location.href;
    const text = `Check out this amazing course: ${course.title}`;

    switch (platform) {
      case "facebook":
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            url
          )}`,
          "_blank"
        );
        break;
      case "twitter":
        window.open(
          `https://twitter.com/intent/tweet?url=${encodeURIComponent(
            url
          )}&text=${encodeURIComponent(text)}`,
          "_blank"
        );
        break;
      case "linkedin":
        window.open(
          `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
            url
          )}&title=${encodeURIComponent(course.title)}`,
          "_blank"
        );
        break;
      case "email":
        window.location.href = `mailto:?subject=${encodeURIComponent(
          course.title
        )}&body=${encodeURIComponent(text + "\n\n" + url)}`;
        break;
      default:
        break;
    }
  };

  const getCourseContent = (courseId) => {
    switch (courseId) {
      case "NIT-101": // Creative Writing
      return [
        {
          week: 1,
          title: "Introduction to Creative Writing",
          lessons: [
            "What is creative writing?",
            "Freewriting and brainstorming exercises",
            "The importance of observation and imagination",
          ],
        },
        {
          week: 2,
          title: "Character Development",
          lessons: [
            "Creating believable characters",
            "Character motivation and depth",
            "Writing exercises on developing character backstory",
          ],
        },
        {
          week: 3,
          title: "Setting and Atmosphere",
          lessons: [
            "The role of setting in storytelling",
            "Using sensory details to build atmosphere",
            "Writing exercise: Descriptive scene building",
          ],
        },
        {
          week: 4,
          title: "Plot and Structure",
          lessons: [
            "Basic story structure (beginning, middle, end)",
            "Conflict and resolution",
            "Writing exercise: Outlining a short story",
          ],
        },
        {
          week: 5,
          title: "Writing Dialogue",
          lessons: [
            "The purpose of dialogue in fiction",
            "Writing natural and engaging conversations",
            "Writing exercise: Crafting a dialogue-driven scene",
          ],
        },
        {
          week: 6,
          title: "Poetry Basics",
          lessons: [
            "Introduction to poetic forms and free verse",
            "Playing with rhythm, rhyme, and imagery",
            "Writing exercise: Creating a short poem",
          ],
        },
        {
          week: 7,
          title: "Creative Nonfiction",
          lessons: [
            "What is creative nonfiction?",
            "Personal essays and memoir writing",
            "Writing exercise: Telling a true story creatively",
          ],
        },
        {
          week: 8,
          title: "Revision and Editing",
          lessons: [
            "The importance of rewriting",
            "Peer review and feedback",
            "Editing exercise: Revising a previous piece",
          ],
        },
        {
          week: 9,
          title: "Finding Your Voice",
          lessons: [
            "What makes a writer’s voice unique?",
            "Experimenting with style and perspective",
            "Writing exercise: Imitation and adaptation",
          ],
        },
        {
          week: 10,
          title: "Publishing and Next Steps",
          lessons: [
            "Basics of submitting work for publication",
            "Writing as a daily practice",
            "Final project: Polished short story, poem, or essay",
          ],
        },
      ]

      case "NIT-102": // Graphic Design
        return [
          {
            week: 1,
            title: "Graphic Design Fundamentals",
            lessons: [
              "Introduction to Design Principles",
              "Color Theory",
              "Typography Basics",
              "Visual Hierarchy",
            ],
          },
          {
            week: 2,
            title: "Software Tools",
            lessons: [
              "Getting Started with Adobe Photoshop",
              "Using Adobe Illustrator",
              "Designing in Canva",
              "Tips for Efficient Workflow",
            ],
          },
          {
            week: 3,
            title: "Creative Projects",
            lessons: [
              "Logo Design",
              "Poster Design",
              "Social Media Graphics",
              "Designing for Print",
            ],
          },
          {
            week: 4,
            title: "Portfolio Development",
            lessons: [
              "Showcasing Your Work",
              "Creating a Digital Portfolio",
              "Presenting Your Designs",
              "Building a Personal Brand",
            ],
          },
        ];
      case "NIT-103": // Digital Marketing
      return [
        {
          week: 1,
          title: "Introduction to Digital Marketing",
          lessons: [
            "What is Digital Marketing?",
            "Traditional vs. Digital Marketing",
            "Importance & Scope",
            "Key Channels in Digital Marketing",
            "Overview of Career Opportunities",
          ],
        },
        {
          week: 2,
          title: "Website Planning & Basics of SEO",
          lessons: [
            "Importance of a Website in Digital Marketing",
            "Basics of WordPress & Website Creation",
            "Introduction to Search Engine Optimization (SEO)",
            "On-Page vs. Off-Page SEO",
            "Keyword Research Basics",
          ],
        },
        {
          week: 3,
          title: "Search Engine Optimization (SEO) – Deep Dive",
          lessons: [
            "SEO Ranking Factors",
            "Meta Tags, URL Structure, Internal Linking",
            "Link Building Strategies",
            "SEO Tools (Google Search Console, Ubersuggest, etc.)",
            "SEO Best Practices",
          ],
        },
        {
          week: 4,
          title: "Content Marketing & Blogging",
          lessons: [
            "Importance of Content Marketing",
            "Blogging Basics (WordPress, Blogger)",
            "Creating SEO-Friendly Content",
            "Content Promotion Strategies",
            "Tools for Content Writing & Editing",
          ],
        },
        {
          week: 5,
          title: "Social Media Marketing (SMM) – Basics",
          lessons: [
            "Introduction to Social Media Platforms (Facebook, Instagram, LinkedIn, Twitter)",
            "Creating an Effective Social Media Strategy",
            "Social Media Post Planning & Scheduling",
            "Basics of Engagement & Community Building",
          ],
        },
        {
          week: 6,
          title: "Facebook & Instagram Marketing",
          lessons: [
            "Understanding Facebook & Instagram Algorithms",
            "Creating Business Pages & Profiles",
            "Running Ads on Facebook & Instagram",
            "Audience Targeting & Budgeting",
            "Insights & Analytics",
          ],
        },
        {
          week: 7,
          title: "Google Ads & Pay-Per-Click (PPC) Advertising",
          lessons: [
            "Introduction to Google Ads",
            "Search Ads vs. Display Ads",
            "Keyword Research for PPC",
            "Bidding Strategies & Quality Score",
            "Google Ads Analytics",
          ],
        },
        {
          week: 8,
          title: "Email Marketing & Lead Generation",
          lessons: [
            "Basics of Email Marketing",
            "Tools (Mailchimp, ConvertKit, etc.)",
            "Creating Engaging Email Campaigns",
            "Lead Magnet & Landing Pages",
            "Email Automation",
          ],
        },
        {
          week: 9,
          title: "Analytics & Performance Measurement",
          lessons: [
            "Introduction to Google Analytics",
            "Understanding Key Metrics (Traffic, Bounce Rate, CTR, etc.)",
            "Social Media & Ad Campaign Analytics",
            "A/B Testing & Conversion Optimization",
          ],
        },
        {
          week: 10,
          title: "Digital Marketing Strategy & Freelancing Opportunities",
          lessons: [
            "Building a Digital Marketing Strategy",
            "Case Studies & Real-World Applications",
            "Freelancing Platforms (Upwork, Fiverr, Freelancer)",
            "How to Get Clients & Build a Portfolio",
            "Career Guidance & Next Steps",
          ],
        },
      ]

      case "NIT-104": // Healthcare Management
      return [
        {
          week: 1,
          title: "Introduction to Health Care Management",
          lessons: [
            "Overview of Health Care Systems (Public vs. Private)",
            "Key Functions of Health Care Management",
            "Roles and Responsibilities of Health Care Managers",
          ],
        },
        {
          week: 2,
          title: "Health Care Policies and Regulations",
          lessons: [
            "Health Care Laws & Regulations (HIPAA, ACA, etc.)",
            "Ethics in Health Care Management",
            "Patient Rights and Confidentiality",
          ],
        },
        {
          week: 3,
          title: "Organizational Structure in Health Care",
          lessons: [
            "Types of Health Care Organizations (Hospitals, Clinics, HMOs)",
            "Hierarchy and Leadership in Health Care Facilities",
            "The Role of Government and Private Entities",
          ],
        },
        {
          week: 4,
          title: "Financial Management in Health Care",
          lessons: [
            "Health Care Revenue Cycle",
            "Budgeting and Cost Control",
            "Insurance and Reimbursement Systems",
          ],
        },
        {
          week: 5,
          title: "Health Care Quality and Patient Safety",
          lessons: [
            "Quality Assurance in Health Care",
            "Measuring Health Care Performance (KPIs, Accreditation)",
            "Patient-Centered Care & Safety Protocols",
          ],
        },
        {
          week: 6,
          title: "Human Resource Management in Health Care",
          lessons: [
            "Workforce Planning and Recruitment",
            "Staff Training and Development",
            "Managing Health Care Teams and Conflict Resolution",
          ],
        },
        {
          week: 7,
          title: "Health Information Systems and Technology",
          lessons: [
            "Electronic Health Records (EHRs)",
            "Telemedicine and Digital Health Trends",
            "Data Security and Privacy in Health Care",
          ],
        },
        {
          week: 8,
          title: "Strategic Planning and Health Care Marketing",
          lessons: [
            "Strategic Management in Health Care",
            "Marketing Strategies for Health Services",
            "Community Outreach and Patient Engagement",
          ],
        },
        {
          week: 9,
          title: "Public Health and Epidemiology Basics",
          lessons: [
            "Role of Public Health in Health Care Management",
            "Disease Prevention and Health Promotion",
            "Health Care Crisis and Disaster Management",
          ],
        },
        {
          week: 10,
          title: "Case Studies and Practical Applications",
          lessons: [
            "Case Studies on Successful Health Care Management",
            "Problem-Solving in Real-World Scenarios",
            "Course Review and Q&A",
          ],
        },
      ]

      case "NIT-105": // Business Law
      return [
        {
          week: 1,
          title: "Introduction to Business Law",
          lessons: [
            "Definition, nature, and importance of business law",
            "Sources of business law (Constitution, statutes, case law, contracts, etc.)",
            "Relationship between law and business",
          ],
        },
        {
          week: 2,
          title: "Law of Contracts",
          lessons: [
            "Essentials of a valid contract",
            "Offer and acceptance",
            "Consideration",
            "Capacity to contract",
            "Free consent (coercion, undue influence, misrepresentation, fraud)",
            "Performance and discharge of contract",
            "Breach of contract and remedies",
          ],
        },
        {
          week: 3,
          title: "Sale of Goods Act",
          lessons: [
            "Formation of a contract of sale",
            "Conditions and warranties",
            "Transfer of ownership and risk",
            "Rights of unpaid sellers",
          ],
        },
        {
          week: 4,
          title: "Negotiable Instruments Act",
          lessons: [
            "Meaning and types (cheques, promissory notes, bills of exchange)",
            "Characteristics and endorsement",
            "Dishonor and discharge of negotiable instruments",
          ],
        },
        {
          week: 5,
          title: "Company Law",
          lessons: [
            "Types of companies (Private, Public, One-Person Company)",
            "Incorporation process",
            "Memorandum and Articles of Association",
            "Directors and their duties",
            "Shareholders and meetings",
          ],
        },
        {
          week: 6,
          title: "Consumer Protection Act",
          lessons: [
            "Consumer rights and responsibilities",
            "Redressal mechanisms",
            "Unfair trade practices",
          ],
        },
        {
          week: 7,
          title: "Intellectual Property Rights (IPR)",
          lessons: [
            "Basics of patents, trademarks, copyrights, and trade secrets",
            "Importance of IPR in business",
          ],
        },
        {
          week: 8,
          title: "Partnership and LLP (Limited Liability Partnership) Law",
          lessons: [
            "Partnership Act: Formation, rights, and liabilities of partners",
            "LLP Act: Features and differences from a partnership",
          ],
        },
        {
          week: 9,
          title: "Employment and Labor Laws",
          lessons: [
            "Employer-employee relationship",
            "Minimum wages, provident fund, gratuity",
            "Industrial disputes and trade unions",
          ],
        },
        {
          week: 10,
          title: "Competition Law and Corporate Governance",
          lessons: [
            "Anti-competitive practices",
            "Role of competition commission",
            "Corporate governance principles",
          ],
        },
      ]

      case "NIT-106": // Environmental Science
      return [
        {
          week: 1,
          title: "Introduction to Environmental Science",
          lessons: [
            "Definition, scope, and importance",
            "Relationship between environment and humans",
            "Components of the environment (biotic and abiotic)",
          ],
        },
        {
          week: 2,
          title: "Natural Resources",
          lessons: [
            "Types: Renewable and Non-renewable resources",
            "Forest, water, mineral, land, and energy resources",
            "Conservation and sustainable use of resources",
          ],
        },
        {
          week: 3,
          title: "Ecosystem and Biodiversity",
          lessons: [
            "Structure and function of ecosystems",
            "Types of ecosystems (terrestrial and aquatic)",
            "Food chains, food webs, and ecological pyramids",
            "Biodiversity: Importance, threats, and conservation",
          ],
        },
        {
          week: 4,
          title: "Environmental Pollution",
          lessons: [
            "Types of pollution: Air, water, soil, and noise pollution",
            "Causes, effects, and control measures",
            "Global environmental issues (climate change, acid rain, ozone depletion)",
          ],
        },
        {
          week: 5,
          title: "Environmental Management and Sustainable Development",
          lessons: [
            "Environmental laws and policies",
            "Role of individuals and communities in environmental conservation",
            "Sustainable development goals (SDGs)",
          ],
        },
        {
          week: 6,
          title: "Climate Change and Global Warming",
          lessons: [
            "Greenhouse effect and global warming",
            "Causes and impacts of climate change",
            "Mitigation and adaptation strategies",
          ],
        },
        {
          week: 7,
          title: "Waste Management",
          lessons: [
            "Types of waste (solid, liquid, e-waste)",
            "Waste disposal methods (landfills, incineration, recycling)",
            "Principles of reduce, reuse, recycle (3Rs)",
          ],
        },
        {
          week: 8,
          title: "Environmental Ethics and Awareness",
          lessons: [
            "Role of education in environmental conservation",
            "Environmental movements and activism",
            "Individual and collective responsibilities",
          ],
        },
      ]

      case "NIT-107": // Human Resources
      return [
        {
          week: 1,
          title: "Introduction to Human Resources",
          lessons: [
            "Definition, scope, and importance of HR",
            "Evolution of HR management",
            "HR functions and roles",
          ],
        },
        {
          week: 2,
          title: "HR Planning and Strategy",
          lessons: [
            "Workforce planning",
            "HR policies and procedures",
            "Aligning HR with organizational goals",
          ],
        },
        {
          week: 3,
          title: "Recruitment and Selection",
          lessons: [
            "Job analysis and job descriptions",
            "Sourcing candidates",
            "Selection methods (interviews, tests, assessments)",
            "Onboarding and orientation",
          ],
        },
        {
          week: 4,
          title: "Employee Training and Development",
          lessons: [
            "Training needs assessment",
            "Employee learning and development programs",
            "Career planning and succession planning",
          ],
        },
        {
          week: 5,
          title: "Performance Management",
          lessons: [
            "Performance appraisal methods",
            "Key performance indicators (KPIs)",
            "Feedback and employee motivation",
          ],
        },
        {
          week: 6,
          title: "Compensation and Benefits",
          lessons: [
            "Salary structures and wage policies",
            "Incentives and bonus plans",
            "Employee benefits (healthcare, retirement plans, etc.)",
          ],
        },
        {
          week: 7,
          title: "Employee Relations and Workplace Ethics",
          lessons: [
            "Employee engagement",
            "Conflict resolution",
            "Workplace ethics and corporate culture",
          ],
        },
        {
          week: 8,
          title: "Labor Laws and Compliance",
          lessons: [
            "Key employment laws and regulations",
            "Workplace safety and health (OSHA, etc.)",
            "Employee rights and responsibilities",
          ],
        },
        {
          week: 9,
          title: "HR Technology and Trends",
          lessons: [
            "HR software and automation",
            "Remote work and hybrid workplace policies",
            "Diversity, Equity, and Inclusion (DEI) initiatives",
          ],
        },
        {
          week: 10,
          title: "Exit Management and Retention",
          lessons: [
            "Employee retention strategies",
            "Resignation, termination, and exit interviews",
            "Offboarding and knowledge transfer",
          ],
        },
      ]

      case "NIT-108": // Photography
      return [
        {
          week: 1,
          title: "Introduction to Photography",
          lessons: [
            "History and evolution of photography",
            "Types of photography (portrait, landscape, macro, street, etc.)",
            "Understanding different camera types (DSLR, mirrorless, smartphone, etc.)",
          ],
        },
        {
          week: 2,
          title: "Camera Basics & Settings",
          lessons: [
            "Understanding camera parts and functions",
            "Aperture, Shutter Speed, and ISO (Exposure Triangle)",
            "White balance and color temperature",
            "Autofocus vs. Manual focus",
          ],
        },
        {
          week: 3,
          title: "Composition & Framing",
          lessons: [
            "Rule of thirds",
            "Leading lines and symmetry",
            "Depth of field",
            "Framing and perspective",
            "Using negative space",
          ],
        },
        {
          week: 4,
          title: "Lighting Techniques",
          lessons: [
            "Natural vs. Artificial lighting",
            "Golden hour and blue hour photography",
            "Using reflectors and diffusers",
            "Understanding flash photography",
            "Light metering modes",
          ],
        },
        {
          week: 5,
          title: "Lenses & Equipment",
          lessons: [
            "Types of lenses (wide-angle, telephoto, macro, prime, etc.)",
            "Filters and their uses (ND, polarizer, UV)",
            "Tripods, gimbals, and stabilizers",
          ],
        },
        {
          week: 6,
          title: "Post-Processing Basics",
          lessons: [
            "Introduction to editing software (Adobe Lightroom, Photoshop, Snapseed)",
            "Cropping and straightening",
            "Adjusting brightness, contrast, and saturation",
            "Basic retouching techniques",
          ],
        },
        {
          week: 7,
          title: "Practical Sessions & Projects",
          lessons: [
            "Outdoor and indoor shooting practice",
            "Thematic photography assignments",
            "Photo critique and improvement suggestions",
          ],
        },
        {
          week: 8,
          title: "Photography as a Career",
          lessons: [
            "Understanding copyright and image rights",
            "Building a photography portfolio",
            "Social media and online platforms for photographers",
            "Basics of freelancing and business in photography",
          ],
        },
      ]

      case "NIT-109": // Public Speaking
      return [
        {
          week: 1,
          title: "Introduction to Public Speaking",
          lessons: [
            "Importance of public speaking",
            "Overcoming stage fear and nervousness",
            "Basics of effective communication",
          ],
        },
        {
          week: 2,
          title: "Speech Structure and Organization",
          lessons: [
            "Crafting a strong introduction, body, and conclusion",
            "Choosing a speech topic and purpose",
            "Writing an engaging speech",
          ],
        },
        {
          week: 3,
          title: "Voice and Tone Control",
          lessons: [
            "Volume, pitch, and pace",
            "Techniques for clear and impactful speech delivery",
            "Avoiding monotony and improving articulation",
          ],
        },
        {
          week: 4,
          title: "Body Language and Non-Verbal Communication",
          lessons: [
            "Eye contact, gestures, and posture",
            "Using facial expressions effectively",
            "Avoiding nervous habits",
          ],
        },
        {
          week: 5,
          title: "Audience Engagement Techniques",
          lessons: [
            "Understanding your audience",
            "Using humor, stories, and rhetorical questions",
            "Handling audience reactions",
          ],
        },
        {
          week: 6,
          title: "Overcoming Public Speaking Anxiety",
          lessons: [
            "Managing nervousness through breathing techniques",
            "Positive visualization and confidence-building exercises",
            "Practicing mindfulness and relaxation",
          ],
        },
        {
          week: 7,
          title: "Impromptu Speaking and Quick Thinking",
          lessons: [
            "Handling unexpected speech topics",
            "Structuring an impromptu response quickly",
            "Practicing extemporaneous speaking",
          ],
        },
        {
          week: 8,
          title: "Persuasive and Informative Speaking",
          lessons: [
            "Key differences between persuasive and informative speeches",
            "Using logic, emotions, and credibility (ethos, pathos, logos)",
            "Organizing speech content effectively",
          ],
        },
        {
          week: 9,
          title: "Speech Practice and Feedback",
          lessons: [
            "Delivering short speeches",
            "Constructive peer and instructor feedback",
            "Improving based on critiques",
          ],
        },
        {
          week: 10,
          title: "Final Speech and Course Wrap-Up",
          lessons: [
            "Delivering a final prepared speech",
            "Self-reflection on progress",
            "Key takeaways and future improvement tips",
          ],
        },
      ]

      case "NIT-110": // Theater Arts
      return [
        {
          week: 1,
          title: "Introduction to Theatre Arts",
          lessons: [
            "Overview of theatre history and its importance",
            "Different forms of theatre (drama, musical, experimental, etc.)",
            "Basic theatre terminology",
          ],
        },
        {
          week: 2,
          title: "Voice and Speech Training",
          lessons: [
            "Warm-up exercises for voice",
            "Diction, projection, and articulation",
            "Understanding tone, pitch, and rhythm",
          ],
        },
        {
          week: 3,
          title: "Body Language and Movement",
          lessons: [
            "Physical warm-ups and exercises",
            "Body control and expressive movement",
            "Using gestures and posture effectively on stage",
          ],
        },
        {
          week: 4,
          title: "Improvisation and Creativity",
          lessons: [
            "Introduction to improvisation",
            "Spontaneity and thinking on your feet",
            "Group improv games and exercises",
          ],
        },
        {
          week: 5,
          title: "Character Development",
          lessons: [
            "Understanding character motivation and background",
            "Developing emotional depth",
            "Exercises to explore different roles",
          ],
        },
        {
          week: 6,
          title: "Script Analysis and Dialogue Delivery",
          lessons: [
            "Reading and understanding scripts",
            "Memorization techniques",
            "Practicing monologues and dialogues",
          ],
        },
        {
          week: 7,
          title: "Blocking and Stage Directions",
          lessons: [
            "Understanding stage positioning and movement",
            "Basic blocking techniques",
            "Importance of spatial awareness on stage",
          ],
        },
        {
          week: 8,
          title: "Scene Work and Rehearsals",
          lessons: [
            "Rehearsing small scenes in groups",
            "Applying learned techniques (voice, movement, blocking)",
            "Feedback and refinement",
          ],
        },
        {
          week: 9,
          title: "Technical Aspects of Theatre",
          lessons: [
            "Introduction to lighting, sound, and set design",
            "Basics of costumes and props",
            "Role of backstage crew",
          ],
        },
        {
          week: 10,
          title: "Performance and Feedback",
          lessons: [
            "Final presentation (monologues, duologues, or short scenes)",
            "Constructive critique from instructor and peers",
            
          ],
        },
      ]

      case "NIT-111": // Sustainable Agriculture
      return [
        {
          week: 1,
          title: "Introduction to Sustainable Agriculture",
          lessons: [
            "Definition and Importance",
            "Principles of Sustainability (Environmental, Economic, Social)",
            "Comparison with Conventional Agriculture",
          ],
        },
        {
          week: 2,
          title: "Soil Health and Management",
          lessons: [
            "Importance of Soil in Sustainable Farming",
            "Soil Conservation Techniques (Crop Rotation, Cover Cropping, Mulching)",
            "Organic vs. Chemical Fertilizers",
          ],
        },
        {
          week: 3,
          title: "Water Conservation Techniques",
          lessons: [
            "Efficient Irrigation Methods (Drip Irrigation, Rainwater Harvesting)",
            "Soil Moisture Management",
            "Reducing Water Wastage in Agriculture",
          ],
        },
        {
          week: 4,
          title: "Organic Farming Practices",
          lessons: [
            "Organic Inputs (Compost, Green Manure, Natural Pesticides)",
            "Certification and Standards for Organic Farming",
            "Benefits and Challenges of Organic Farming",
          ],
        },
        {
          week: 5,
          title: "Agroecology and Biodiversity",
          lessons: [
            "Role of Biodiversity in Sustainable Farming",
            "Polyculture vs. Monoculture",
            "Integrated Pest Management (IPM)",
          ],
        },
        {
          week: 6,
          title: "Climate Change and Agriculture",
          lessons: [
            "Impact of Climate Change on Farming",
            "Adaptive Strategies (Drought-Resistant Crops, Agroforestry)",
            "Carbon Sequestration in Agriculture",
          ],
        },
        {
          week: 7,
          title: "Sustainable Livestock Management",
          lessons: [
            "Ethical Animal Farming Practices",
            "Reducing Environmental Impact of Livestock",
            "Alternative Feed Sources and Waste Management",
          ],
        },
        {
          week: 8,
          title: "Permaculture and Regenerative Agriculture",
          lessons: [
            "Principles of Permaculture Design",
            "Regenerative Soil Practices",
            "Case Studies of Successful Regenerative Farms",
          ],
        },
        {
          week: 9,
          title: "Economic and Policy Aspects of Sustainable Agriculture",
          lessons: [
            "Fair Trade and Local Food Systems",
            "Government Policies and Incentives",
            "Challenges in Sustainable Food Supply Chains",
          ],
        },
        {
          week: 10,
          title: "Future of Sustainable Agriculture",
          lessons: [
            "Innovations in Sustainable Farming (Vertical Farming, Hydroponics)",
            "Role of Technology (AI, Drones, Smart Irrigation)",
            "Career Opportunities and Further Learning Resources",
          ],
        },
      ]

      case "NIT-112": // Culinary Arts
      return [
        {
          week: 1,
          title: "Introduction to Culinary Arts & Kitchen Safety",
          lessons: [
            "Overview of Culinary Arts",
            "Kitchen safety protocols",
            "Proper use of knives and cutting techniques",
            "Understanding kitchen equipment",
          ],
        },
        {
          week: 2,
          title: "Knife Skills & Basic Cuts",
          lessons: [
            "Types of knives and their uses",
            "Basic cutting techniques (dice, julienne, chiffonade, brunoise, etc.)",
            "Practicing vegetable and fruit cuts",
          ],
        },
        {
          week: 3,
          title: "Stocks, Sauces & Soups",
          lessons: [
            "Understanding stocks (vegetable, chicken, beef)",
            "Classic mother sauces (béchamel, velouté, espagnole, tomato, hollandaise)",
            "Basic soups (cream soups, broths, and consommés)",
          ],
        },
        {
          week: 4,
          title: "Cooking Methods - Dry Heat Techniques",
          lessons: [
            "Roasting, grilling, baking, and sautéing",
            "Preparing roasted vegetables and grilled meats",
            "Making pan sauces",
          ],
        },
        {
          week: 5,
          title: "Cooking Methods - Moist Heat Techniques",
          lessons: [
            "Boiling, steaming, poaching, and braising",
            "Cooking pasta, rice, and grains",
            "Poached eggs and braised meats",
          ],
        },
        {
          week: 6,
          title: "Eggs, Dairy & Breakfast Dishes",
          lessons: [
            "Different ways to cook eggs (scrambled, poached, omelets, fried)",
            "Making pancakes, waffles, and French toast",
            "Dairy basics: cheese, butter, and cream",
          ],
        },
        {
          week: 7,
          title: "Proteins - Poultry, Meat & Seafood",
          lessons: [
            "Handling and seasoning meats",
            "Cooking chicken, beef, and fish using different techniques",
            "Introduction to marination and brining",
          ],
        },
        {
          week: 8,
          title: "Baking Basics - Breads & Pastries",
          lessons: [
            "Understanding baking ingredients (flour, yeast, sugar, butter)",
            "Making basic bread, cookies, and cakes",
            "Introduction to pastry doughs",
          ],
        },
        {
          week: 9,
          title: "Vegetables, Salads & Dressings",
          lessons: [
            "Cooking and seasoning vegetables",
            "Making salads with homemade dressings (vinaigrettes, creamy dressings)",
            "Introduction to plating techniques",
          ],
        },
        {
          week: 10,
          title: "Plating, Presentation & Final Dish Preparation",
          lessons: [
            "Principles of food plating and garnishing",
            "Assembling a multi-course meal",
            "Final presentation and tasting session",
          ],
        },
      ]
      

      default:
        return [];
    }
  };

  return (
    <>
      <Box
        minHeight="100vh"
        paddingTop={20}
        bg={bgColor}
        color={useColorModeValue("gray.800", "white")}
      >
        <Helmet>
          <title>{course.title} | Prefcol Edutech Solutions</title>
          <meta name="description" content={course.description} />
        </Helmet>
        <Container maxW="container.xl" py={{ base: 4, md: 8 }}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Hero Section */}
            <Box
              bg={useColorModeValue("teal.800", "gray.200")}
              color={useColorModeValue("white", "gray.800")}
              borderRadius="lg"
              p={{ base: 4, md: 8 }}
              mb={{ base: 6, md: 8 }}
              position="relative"
              overflow="hidden"
              boxShadow="xl"
            >
              <Box
                position="absolute"
                top="-20%"
                right="-10%"
                width="300px"
                height="300px"
                borderRadius="full"
                overflow="hidden"
              >
                <Image
                  src="../assets/img (11).jpeg"
                  alt="Background image"
                  objectFit="cover"
                  width="100%"
                  height="100%"
                  filter="blur(60px)"
                />
              </Box>

              <Grid
                templateColumns={{ base: "1fr", md: "2fr 1fr" }}
                gap={{ base: 4, md: 8 }}
                alignItems="center"
              >
                <GridItem>
                  <Heading
                    as="h1"
                    fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                    mb={{ base: 2, md: 4 }}
                    textShadow="2px 2px 4px rgba(0,0,0,0.4)"
                  >
                    {course.title}
                  </Heading>
                  <Text
                    fontSize={{ base: "md", md: "lg", lg: "xl" }}
                    mb={{ base: 4, md: 6 }}
                    textShadow="1px 1px 2px rgba(0,0,0,0.2)"
                  >
                    {course.description}
                  </Text>
                  <HStack spacing={{ base: 2, md: 4 }}>
                    {/* <EnhancedEnrollment /> */}
                  
                    <EnrollmentForm />
                    <Button
                      color={"black"}
                      bg={"white"}
                      size={{ base: "sm", md: "md" }}
                      onClick={onVideoOpen}
                      leftIcon={<FaPlay />}
                    >
                      Watch Preview
                    </Button>
                  </HStack>
                </GridItem>
                <GridItem>
                  <PriceDisplay course={course} />
                </GridItem>
              </Grid>
            </Box>

            <Button
              leftIcon={<FaArrowLeft />}
              onClick={() => navigate(-1)}
              mb={{ base: 4, md: 8 }}
             colorScheme="orange"
              variant="outline"
            >
              Back to Courses
            </Button>

            {/* Main Content */}
            <Grid
              templateColumns={{ base: "1fr", lg: "2fr 1fr" }}
              gap={{ base: 4, md: 6, lg: 8 }}
            >
              <GridItem>
                {/* About Section */}
                <Card mb={{ base: 4, md: 8 }}>
                  <CardHeader>
                    <Heading size={{ base: "md", md: "lg" }}>
                      About This Course
                    </Heading>
                  </CardHeader>
                  <CardBody>
                    <Text fontSize={{ base: "sm", md: "md" }}>
                      This comprehensive course is designed to take you from
                      beginner to proficient in {course.title}. Whether you're
                      looking to start a new career or enhance your existing
                      skills, this course provides the knowledge and hands-on
                      experience you need to succeed in the field of{" "}
                      {course.title.toLowerCase()}.
                    </Text>
                  </CardBody>
                </Card>

                {/* Course Content */}
                <Card mb={{ base: 4, md: 8 }}>
                  <CardHeader>
                    <Heading size={{ base: "md", md: "lg" }}>
                      Course Content
                    </Heading>
                  </CardHeader>
                  <CardBody>
                    <Accordion allowMultiple>
                      {getCourseContent(course.id).map((week, index) => (
                        <AccordionItem key={index}>
                          <h2>
                            <AccordionButton>
                              <Box flex="1" textAlign="left">
                                Week {week.week}: {week.title}
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>
                            <List spacing={2}>
                              {week.lessons.map((lesson, lessonIndex) => (
                                <ListItem key={lessonIndex}>
                                  <ListIcon
                                    as={FaRegFileAlt}
                                    color="green.500"
                                  />
                                  Lesson {lessonIndex + 1}: {lesson}
                                </ListItem>
                              ))}
                            </List>
                          </AccordionPanel>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardBody>
                </Card>

                {/* Certificate Section */}
                <CertificateSection />

                {/* Benefits Section */}
                <Card mb={{ base: 4, md: 8 }}>
                  <CardHeader>
                    <Heading size={{ base: "md", md: "lg" }}>
                      Course Benefits
                    </Heading>
                  </CardHeader>
                  <CardBody>
                    <SimpleGrid
                      columns={{ base: 1, md: 2 }}
                      spacing={{ base: 4, md: 6 }}
                    >
                      {[
                        {
                          icon: FaUserCog,
                          title: "Expert-Led Instruction",
                          description:
                            "Learn from industry professionals with years of experience.",
                        },
                        {
                          icon: FaCogs,
                          title: "Hands-On Projects",
                          description:
                            "Apply your skills to real-world scenarios and build a portfolio.",
                        },
                        {
                          icon: FaUsers,
                          title: "Community Support",
                          description:
                            "Join a community of learners and get support from peers and instructors.",
                        },
                        {
                          icon: FaCertificate,
                          title: "Industry-Recognized Certificate",
                          description:
                            "Earn a certificate valued by top employers in the field.",
                        },
                      ].map((benefit, index) => (
                        <VStack
                          key={index}
                          align="start"
                          p={4}
                          borderWidth={1}
                          borderRadius="md"
                        >
                          <benefit.icon
                            size="2em"
                            color={useColorModeValue("gray.500", "gray.300")}
                          />
                          <Heading size={{ base: "sm", md: "md" }}>
                            {benefit.title}
                          </Heading>
                          <Text fontSize={{ base: "sm", md: "md" }}>
                            {benefit.description}
                          </Text>
                        </VStack>
                      ))}
                    </SimpleGrid>
                  </CardBody>
                </Card>

                {/* Requirements Section */}
                <Card mb={{ base: 4, md: 8 }}>
                  <CardHeader>
                    <Heading size={{ base: "md", md: "lg" }}>
                      Course Requirements
                    </Heading>
                  </CardHeader>
                  <CardBody>
                    <List spacing={3}>
                      <ListItem>
                        <ListIcon as={FaCheckCircle} color="green.500" />
                        {course.prerequisites}
                      </ListItem>
                      <ListItem>
                        <ListIcon as={FaCheckCircle} color="green.500" />
                        Access to a computer with internet connection
                      </ListItem>
                      <ListItem>
                        <ListIcon as={FaCheckCircle} color="green.500" />
                        Dedication to complete assignments and projects
                      </ListItem>
                      <ListItem>
                        <ListIcon as={FaCheckCircle} color="green.500" />
                        Willingness to participate in discussions and peer
                        reviews
                      </ListItem>
                    </List>
                  </CardBody>
                </Card>

                {/* Testimonials Section */}
                <Card mb={{ base: 4, md: 8 }}>
                  <CardHeader>
                    <Heading size={{ base: "md", md: "lg" }}>
                      Student Testimonials
                    </Heading>
                  </CardHeader>
                  <CardBody>
                    <VStack spacing={{ base: 4, md: 6 }}>
                      {[
                        {
                          name: "Guna",
                          role: "Software Developer",
                          content:
                            "This course transformed my career. I'm now working as a full-stack developer at a top tech company!",
                        },
                        {
                          name: "Vimal",
                          role: "Data Analyst",
                          content:
                            "The hands-on projects really helped me understand complex concepts. Highly recommended!",
                        },
                        {
                          name: "Mani",
                          role: "IT Manager",
                          content:
                            "As someone looking to upskill my team, this course provided exactly what we needed. Great ROI!",
                        },
                      ].map((testimonial, index) => (
                        <Box
                          key={index}
                          p={5}
                          shadow="md"
                          borderWidth="1px"
                          borderRadius="md"
                          width="100%"
                        >
                          <Flex>
                            <Avatar
                              name={testimonial.name}
                              src={`/placeholder.svg?height=50&width=50&text=${testimonial.name[0]}`}
                              mr={4}
                            />
                            <Box>
                              <Heading size={{ base: "sm", md: "md" }}>
                                {testimonial.name}
                              </Heading>
                              <Text
                                fontSize={{ base: "xs", md: "sm" }}
                                color="gray.500"
                              >
                                {testimonial.role}
                              </Text>
                            </Box>
                          </Flex>
                          <Text
                            mt={4}
                            fontStyle="italic"
                            fontSize={{ base: "sm", md: "md" }}
                          >
                            "{testimonial.content}"
                          </Text>
                        </Box>
                      ))}
                    </VStack>
                  </CardBody>
                </Card>

                {/* FAQs Section */}
                <Card mb={{ base: 4, md: 8 }}>
                  <CardHeader>
                    <Heading size={{ base: "md", md: "lg" }}>
                      Frequently Asked Questions
                    </Heading>
                  </CardHeader>
                  <CardBody>
                    <Accordion allowMultiple>
                      {[
                        {
                          question: "How long do I have access to the course?",
                          answer:
                            "You have lifetime access to the course content, including any future updates.",
                        },
                        {
                          question: "Is there a money-back guarantee?",
                          answer:
                            "Yes, we offer a 30-day money-back guarantee if you're not satisfied with the course.",
                        },
                        {
                          question: "How is the course delivered?",
                          answer:
                            "The course is delivered online through our learning platform. You can access the content at your own pace.",
                        },
                        {
                          question: "Will I receive support during the course?",
                          answer:
                            "Yes, you'll have access to instructor support and a community forum throughout the duration of the course.",
                        },
                        {
                          question: "Are there any live sessions?",
                          answer:
                            "We offer optional live Q&A sessions with the instructor on a bi-weekly basis.",
                        },
                      ].map((faq, index) => (
                        <AccordionItem key={index}>
                          <h2>
                            <AccordionButton>
                              <Box flex="1" textAlign="left">
                                <HStack>
                                  <FaQuestionCircle
                                    color={useColorModeValue(
                                      "gray.500",
                                      "gray.300"
                                    )}
                                  />
                                  <Text
                                    fontWeight="bold"
                                    fontSize={{ base: "sm", md: "md" }}
                                  >
                                    {faq.question}
                                  </Text>
                                </HStack>
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>
                            <Text fontSize={{ base: "sm", md: "md" }}>
                              {faq.answer}
                            </Text>
                          </AccordionPanel>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardBody>
                </Card>
              </GridItem>

              {/* Sidebar */}
              <GridItem>
                <Box position={{ base: "static", lg: "sticky" }} top="20px">
                  <VStack spacing={{ base: 4, md: 6, lg: 8 }}>
                    {/* Course Progress */}
                    {/* <Card w="100%">
                      <CardBody>
                        <Heading size={{ base: "sm", md: "md" }} mb={4}>
                          Your Progress
                        </Heading>
                        <Progress
                          value={progress}
                          colorScheme="green"
                          size="lg"
                          mb={2}
                        />
                        <Text
                          textAlign="center"
                          fontSize={{ base: "sm", md: "md" }}
                        >
                          {progress}% Complete
                        </Text>
                        <Button
                          backgroundColor={"teal.700"}
                          color={"white"}
                          width="100%"
                          mt={4}
                          size={{ base: "sm", md: "md" }}
                          onClick={() => {
                            toast({
                              title: "Continue Learning",
                              description: "Redirecting to your last lesson...",
                              status: "info",
                              duration: 2000,
                              isClosable: true,
                            });
                          }}
                        >
                          Continue Learning
                        </Button>
                      </CardBody>
                    </Card> */}

                    {/* Course Stats */}
                    <Card w="100%">
                      <CardBody>
                        <Heading size={{ base: "sm", md: "md" }} mb={4}>
                          Course Stats
                        </Heading>
                        <SimpleGrid columns={2} spacing={4}>
                          <Stat>
                            <StatLabel>Students</StatLabel>
                            <StatNumber>1,234</StatNumber>
                            <StatHelpText>
                              <FaUsers /> Enrolled
                            </StatHelpText>
                          </Stat>
                          <Stat>
                            <StatLabel>Rating</StatLabel>
                            <StatNumber>4.8</StatNumber>
                            <StatHelpText>
                              <FaStar /> 234 reviews
                            </StatHelpText>
                          </Stat>
                          <Stat>
                            <StatLabel>Last Updated</StatLabel>
                            <StatNumber>Oct 2024</StatNumber>
                            <StatHelpText>
                              <FaClock /> Recent
                            </StatHelpText>
                          </Stat>
                          <Stat>
                            <StatLabel>Certificate</StatLabel>
                            <StatNumber>Yes</StatNumber>
                            <StatHelpText>
                              <FaCertificate /> Included
                            </StatHelpText>
                          </Stat>
                        </SimpleGrid>
                      </CardBody>
                    </Card>

                    {/* Instructor Info */}
                    <Card w="100%">
                      <CardBody>
                        <Heading size={{ base: "sm", md: "md" }} mb={4}>
                          Instructor
                        </Heading>
                        <HStack spacing={4}>
                          <Avatar
                            size={{ base: "md", md: "xl" }}
                            name="Mani"
                            src="/placeholder.svg?height=100&width=100&text=JD"
                          />
                          <VStack align="start" spacing={1}>
                            <Heading size={{ base: "sm", md: "md" }}>
                              John Doe
                            </Heading>
                            <Text
                              fontSize={{ base: "xs", md: "sm" }}
                              color="gray.500"
                            >
                              Senior Software Engineer
                            </Text>
                            <HStack>
                              <FaStar color="gold" />
                              <Text fontSize={{ base: "xs", md: "sm" }}>
                                4.9 Instructor Rating
                              </Text>
                            </HStack>
                            <HStack>
                              <FaUsers color="gray" />
                              <Text fontSize={{ base: "xs", md: "sm" }}>
                                10,000+ Students
                              </Text>
                            </HStack>
                            <HStack>
                              <FaRegFileAlt color="gray" />
                              <Text fontSize={{ base: "xs", md: "sm" }}>
                                15 Courses
                              </Text>
                            </HStack>
                          </VStack>
                        </HStack>
                        <Text fontSize={{ base: "sm", md: "md" }} mt={4}>
                          Mani is a seasoned software engineer with over 10
                          years of experience in the industry. He's passionate
                          about teaching and has helped thousands of students
                          launch their careers in tech.
                        </Text>
                      </CardBody>
                    </Card>

                    {/* Share Course */}
                    <Card w="100%">
                      <CardBody>
                        <Heading size={{ base: "sm", md: "md" }} mb={4}>
                          Share This Course
                        </Heading>
                        <HStack spacing={4} justify="center">
                          <IconButton
                            aria-label="Share on Facebook"
                            icon={<FaFacebook />}
                            onClick={() => handleShare("facebook")}
                           color={"white"}
                           bg={"teal.800"}
                           _hover={{ color: "black" , bg:"white"}}
                          />
                          <IconButton
                            aria-label="Share on Twitter"
                            icon={<FaTwitter />}
                            onClick={() => handleShare("twitter")}
                            color={"white"}
                           bg={"teal.800"}
                           _hover={{ color: "black" , bg:"white"}}
                          />
                          <IconButton
                            aria-label="Share on LinkedIn"
                            icon={<FaLinkedin />}
                            onClick={() => handleShare("linkedin")}
                            color={"white"}
                           bg={"teal.800"}
                           _hover={{ color: "black" , bg:"white"}}
                          />
                          <IconButton
                            aria-label="Share via Email"
                            icon={<FaEnvelope />}
                            onClick={() => handleShare("email")}
                            color={"white"}
                            bg={"teal.800"}
                            _hover={{ color: "black" , bg:"white"}}
                          />
                        </HStack>
                      </CardBody>
                    </Card>
                  </VStack>
                </Box>
              </GridItem>
            </Grid>

            {/* Related Courses */}
            <Box mt={{ base: 8, md: 12 }}>
              <Heading size={{ base: "lg", md: "xl" }} mb={{ base: 4, md: 6 }}>
                Related Courses
              </Heading>
              <Grid
                templateColumns={{
                  base: "1fr",
                  sm: "repeat(2, 1fr)",
                  lg: "repeat(3, 1fr)",
                }}
                gap={{ base: 4, md: 6 }}
              >
                {relatedCourses.map((relatedCourse) => (
                  <GridItem key={relatedCourse.id}>
                    <Card
                      h="100%"
                      cursor="pointer"
                      as={Link}
                      to={`/Non_it-courses/${relatedCourse.id}`}
                      transition="all 0.3s"
                      _hover={{
                        transform: "translateY(-5px)",
                        boxShadow: "xl",
                      }}
                    >
                      <CardHeader>
                        <HStack spacing={4}>
                          <Box bg="teal.900" color={"white"} p={2} borderRadius="full">
                            {getIcon(relatedCourse.icon)}
                          </Box>
                          <Heading size={{ base: "sm", md: "md" }}>
                            {relatedCourse.title}
                          </Heading>
                        </HStack>
                      </CardHeader>
                      <CardBody>
                        <Text fontSize={{ base: "sm", md: "md" }} noOfLines={3}>
                          {relatedCourse.description}
                        </Text>
                      </CardBody>
                      <CardFooter>
                        <Button
                          rightIcon={<FaArrowRight />}
                          backgroundColor="teal.800"
                          color="white"
                          size={{ base: "sm", md: "md" }}
                          _hover={{
                            backgroundColor: "teal.700",
                            opacity: 0.9,
                          }}
                        >
                          Learn More
                        </Button>
                      </CardFooter>
                    </Card>
                  </GridItem>
                ))}
              </Grid>
            </Box>
          </MotionBox>
        </Container>

        {/* Video Preview Modal */}
        <Modal
          isOpen={isVideoOpen}
          onClose={onVideoClose}
          size={{ base: "full", md: "4xl" }}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Course Preview: {course.title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <AspectRatio ratio={16 / 9}>
                <iframe
                  title="Course Preview"
                  src={`https://www.youtube.com/embed/${course.videoId}`}
                  allowFullScreen
                />
              </AspectRatio>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
    </>
  );
}
