import React from 'react'
import { FaJava, FaPython, FaTwitter, FaEnvelope, FaArrowRight, FaLinkedin, FaFacebook, FaRegFileAlt, FaCogs, FaUserCog, FaMobileAlt, FaDatabase, FaShieldAlt, FaArrowLeft, FaStar, FaUsers, FaClock, FaCheckCircle, FaQuestionCircle, FaGift, FaCertificate, FaPlay } from 'react-icons/fa'
import {
    Box,
    Text,
    VStack,
    HStack,
    Badge,
    useColorModeValue,
    
  
  } from '@chakra-ui/react'

const CourseDetailsHerobox = () => {
    const bgColor = useColorModeValue('gray.50', 'gray.800')
    const cardBgColor = useColorModeValue('white', 'gray.700')
  return (
    <>
    <Box bg={cardBgColor} p={{ base: 4, md: 6 }} textColor={"black"} borderRadius="lg" boxShadow="md">
        <VStack spacing={{ base: 2, md: 4 }} align="stretch">
          <HStack justify="space-between">
            <Text fontWeight="bold">Price:</Text>
            <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold">$99.99</Text>
          </HStack>
          <HStack>
            <FaClock />
            <Text fontSize={{ base: "sm", md: "md" }}>{course.duration}</Text>
          </HStack>
          <HStack>
            <FaUsers />
            <Text fontSize={{ base: "sm", md: "md" }}>{Math.floor(Math.random() * 1000)} students enrolled</Text>
          </HStack>
          <HStack>
            <FaStar color="gold" />
            <Text fontSize={{ base: "sm", md: "md" }}>4.8 (234 reviews)</Text>
          </HStack>
          <Badge colorScheme={course.available ? 'green' : 'gray'} alignSelf="start">
            {course.available ? 'Available' : 'Coming Soon'}
          </Badge>
        </VStack>
      </Box>
    </>
  )
}

export default CourseDetailsHerobox