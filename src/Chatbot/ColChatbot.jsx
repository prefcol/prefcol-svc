import React, { useState, useEffect, useRef } from 'react';
import {
  Button,
  Input,
  Box,
  HStack,
  IconButton,
  Text,
  Tooltip,
  Alert,
  AlertIcon,
  Avatar,
  CloseButton,
  useDisclosure,
  Spinner,
  Divider,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Tag,
  InputGroup,
  InputRightElement,
  useToast,
  Collapse,
  VStack,
  Flex,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Switch,
  FormControl,
  FormLabel,
  Textarea,
  Badge,
  Progress,
  useColorMode,
  Kbd,
} from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMessageSquare, FiSend, FiMic, FiMicOff, FiVolume2, FiVolumeX, FiChevronDown, FiSettings, FiTrash2, FiClock, FiHelpCircle, FiDownload, FiUpload, FiMoon, FiSun } from 'react-icons/fi';
import { keyframes } from '@emotion/react';
const COLChatbot = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [autoSpeak, setAutoSpeak] = useState(false);
  const [feedbackText, setFeedbackText] = useState('');
  const [satisfaction, setSatisfaction] = useState(50);
  const scrollAreaRef = useRef(null);
  const recognition = useRef(null);
  const synthesis = useRef(null);
  const toast = useToast();
  const { isOpen: isDrawerOpen, onOpen: onDrawerOpen, onClose: onDrawerClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();


  const pulseAnimation = keyframes`
    0% { box-shadow: 0 0 0 0 rgba(66, 153, 225, 0.4); }
    70% { box-shadow: 0 0 0 10px rgba(66, 153, 225, 0); }
    100% { box-shadow: 0 0 0 0 rgba(66, 153, 225, 0); }
  `;
  
  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if ('webkitSpeechRecognition' in window) {
      recognition.current = new webkitSpeechRecognition();
      recognition.current.continuous = true;
      recognition.current.interimResults = true;

      recognition.current.onresult = (event) => {
        const script = Array.from(event.results)
          .map(result => result[0].transcript)
          .join('');
        setInputText(script);
      };

      recognition.current.onerror = (event) => {
        setError(`Speech recognition error: ${event.error}`);
        setIsListening(false);
      };
    } else {
      setError('Speech recognition is not supported in this browser.');
    }

    if ('speechSynthesis' in window) {
      synthesis.current = window.speechSynthesis;
    } else {
      setError('Speech synthesis is not supported in this browser.');
    }

    return () => {
      if (recognition.current) {
        recognition.current.stop();
      }
      if (synthesis.current) {
        synthesis.current.cancel();
      }
    };
  }, []);

  const toggleChatbot = () => {
    onToggle();
    if (!isOpen && messages.length === 0) {
      const welcomeMessage = "Hello! Welcome to Chamber of Learning. How can I assist you today?";
      addMessage(welcomeMessage, true);
      if (autoSpeak) speakResponse(welcomeMessage);
    }
  };

  const addMessage = (text, isBot) => {
    setMessages(prev => [...prev, { text, isBot, timestamp: new Date() }]);
  };

  const handleSend = () => {
    if (inputText.trim()) {
      addMessage(inputText, false);
      setIsLoading(true);
      const response = getResponse(inputText);
      setTimeout(() => {
        addMessage(response, true);
        if (autoSpeak) speakResponse(response);
        setIsLoading(false);
      }, 1000);
      setInputText('');
    }
  };

  const getResponse = (input) => {
    const lowercaseInput = input.toLowerCase();
    if (lowercaseInput.includes('hello') || lowercaseInput.includes('hi')) {
      return "Hello! How can I help you with Chamber of Learning today?";
    } else if (lowercaseInput.includes('courses') || lowercaseInput.includes('programs')) {
      return "Chamber of Learning offers a wide range of courses including Business Management, Data Science, and Digital Marketing. Which area are you interested in?";
    } else if (lowercaseInput.includes('admission') || lowercaseInput.includes('apply')) {
      return "To apply for admission, please visit our website's Admission page. You'll need to fill out an application form and submit required documents. Do you need more specific information?";
    } else if (lowercaseInput.includes('fees') || lowercaseInput.includes('tuition')) {
      return "Tuition fees vary depending on the program. For detailed fee structures, please check our Fees page on the website or contact our admissions office. Would you like the contact information?";
    } else if (lowercaseInput.includes('contact') || lowercaseInput.includes('reach')) {
      return "You can reach us at enquire@chamberoflearning.com or call us at +91 944-591-8818. Our office hours are Monday to Friday, 9 AM to 5 PM.";
    } else if (lowercaseInput.includes('thank you') || lowercaseInput.includes('thanks')) {
      return "You're welcome! Is there anything else I can help you with regarding Chamber of Learning?";
    } else {
      return "I'm not sure I understand. Could you please rephrase your question about Chamber of Learning, or ask about our courses, admissions, fees, or contact information?";
    }
  };

  const toggleListening = () => {
    if (isListening) {
      recognition.current?.stop();
    } else {
      recognition.current?.start();
    }
    setIsListening(!isListening);
  };

  const speakResponse = (text) => {
    if (synthesis.current) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      synthesis.current.speak(utterance);
    }
  };

  const stopSpeaking = () => {
    if (synthesis.current) {
      synthesis.current.cancel();
      setIsSpeaking(false);
    }
  };

  const quickReply = (reply) => {
    setInputText(reply);
    handleSend();
  };

  const clearChat = () => {
    setMessages([]);
    toast({
      title: "Chat cleared.",
      status: "info",
      duration: 2000,
      isClosable: true,
    });
  };

  const toggleHistory = () => {
    setShowHistory(!showHistory);
  };

  const handleFeedbackSubmit = () => {
    toast({
      title: "Feedback Submitted",
      description: "Thank you for your feedback!",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    setFeedbackText('');
    setSatisfaction(50);
  };

  const exportChat = () => {
    const chatContent = messages.map(m => `${m.isBot ? 'Bot' : 'You'}: ${m.text}`).join('\n');
    const blob = new Blob([chatContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'chat_history.txt';
    a.click();
  };

  return (
    <>
 
<Tooltip label="Open COL Assistant" aria-label="Open COL Assistant"fontSize={"small"} maxWidth={"150px"} >
  <IconButton
    icon={<FiMessageSquare />}
    onClick={toggleChatbot}
    position="fixed"
    bottom="8"
    right="10"
    size="lg"
    colorScheme="teal"
    aria-label="Open COL chatbot"
    borderRadius="full"
    boxShadow="lg"
    _hover={{ transform: "scale(1.1)" }}
    transition="all 0.3s"
    animation={`${pulseAnimation} 2s infinite`}
  />
</Tooltip>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            style={{ position: 'fixed', bottom: '24px', right: '24px', maxWidth: '90%', width: '400px', zIndex: 50 }}
          >
            <Box borderWidth={1} borderRadius="lg" overflow="hidden" boxShadow="xl" bg={colorMode === 'light' ? 'white' : 'gray.800'}>
              <Box bgGradient="linear(to-r, teal.500, teal.700)" p={4} color="white" display="flex" justifyContent="space-between" alignItems="center">
                <HStack spacing={3}>
                  <Avatar name="COL Bot" src="/col-avatar.png" size="sm" />
                  <Text fontWeight="bold" fontSize="lg">COL Assistant</Text>
                </HStack>
                <HStack>
                  <IconButton
                    icon={<FiSettings />}
                    onClick={onDrawerOpen}
                    variant="ghost"
                    color="white"
                    aria-label="Settings"
                    size="sm"
                  />
                  <CloseButton onClick={toggleChatbot} />
                </HStack>
              </Box>
              <Box p={4} maxH="400px" overflowY="auto" ref={scrollAreaRef} bg={colorMode === 'light' ? 'gray.50' : 'gray.700'}>
                {messages.map((message, index) => (
                  <motion.div key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <Box my={2} textAlign={message.isBot ? 'left' : 'right'}>
                      <Box
                        display="inline-block"
                        p={3}
                        borderRadius="lg"
                        bg={message.isBot ? (colorMode === 'light' ? 'teal.100' : 'teal.700') : (colorMode === 'light' ? 'teal.500' : 'teal.300')}
                        color={message.isBot ? (colorMode === 'light' ? 'teal.800' : 'white') : 'white'}
                        boxShadow="md"
                        maxWidth="80%"
                      >
                        {message.text}
                        <Text fontSize="xs" color={message.isBot ? (colorMode === 'light' ? 'teal.600' : 'teal.200') : (colorMode === 'light' ? 'teal.100' : 'teal.100')} mt={1}>
                          {message.timestamp.toLocaleTimeString()}
                        </Text>
                      </Box>
                    </Box>
                  </motion.div>
                ))}
                {isLoading && (
                  <Box display="flex" alignItems="center" justifyContent="center">
                    <Spinner size="sm" color="teal.500" />
                    <Text ml={2}>Thinking...</Text>
                  </Box>
                )}
              </Box>
              <Divider />
              <Box p={4}>
                <InputGroup>
                  <Input
                    placeholder="Type your message..."
                    type=''
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    bg={colorMode === 'light' ? 'white' : 'gray.700'}
                  />
                  <InputRightElement width="4.5rem">
                    <HStack>
                      <IconButton
                        icon={isListening ? <FiMicOff /> : <FiMic />}
                        onClick={toggleListening}
                        size="sm"
                        aria-label="Toggle speech recognition"
                      />
                      <IconButton
                        icon={<FiSend />}
                        onClick={handleSend}
                        size="sm"
                        colorScheme="teal"
                        aria-label="Send message"
                      />
                    </HStack>
                  </InputRightElement>
                </InputGroup>
              </Box>
              <Collapse in={showHistory}>
                <Box p={4} bg={colorMode === 'light' ? 'gray.100' : 'gray.600'}>
                  <Text fontWeight="bold" mb={2}>Quick Replies:</Text>
                  <Flex wrap="wrap" gap={2}>
                    <Tag onClick={() => quickReply("Tell me about your courses")} cursor="pointer">Courses</Tag>
                    <Tag onClick={() => quickReply("How do I apply?")} cursor="pointer">Admissions</Tag>
                    <Tag onClick={() => quickReply("What are the fees?")} cursor="pointer">Fees</Tag>
                    <Tag onClick={() => quickReply("How can I contact you?")} cursor="pointer">Contact</Tag>
                  </Flex>
                </Box>
              </Collapse>
            </Box>
          </motion.div>
        )}
      </AnimatePresence>

      <Drawer isOpen={isDrawerOpen} placement="right" onClose={onDrawerClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Settings</DrawerHeader>
          <DrawerBody>
            <VStack spacing={4} align="stretch">
              <FormControl display="flex" alignItems="center">
                {/* <FormLabel htmlFor="dark-mode" mb="0">
                  Dark Mode
                </FormLabel> */}
                {/* <Switch id="dark-mode" isChecked={colorMode === 'dark'} onChange={toggleColorMode} /> */}
              </FormControl>
              <FormControl display="flex" alignItems="center">
                <FormLabel htmlFor="auto-speak" mb="0">
                  Auto Text-to-Speech
                </FormLabel>
                <Switch id="auto-speak"   isChecked={autoSpeak} onChange={() => setAutoSpeak(!autoSpeak)} />
              </FormControl>
              <Button leftIcon={<FiTrash2 />} onClick={clearChat}>Clear Chat History</Button>
              <Button leftIcon={<FiClock />} onClick={toggleHistory}>
                {showHistory ? "Hide Quick Replies" : "Show Quick Replies"}
              </Button>
              <Button leftIcon={isSpeaking ? <FiVolumeX /> : <FiVolume2 />} onClick={isSpeaking ? stopSpeaking : () => {}}>
                {isSpeaking ? "Stop Speaking" : "Text-to-Speech"}
              </Button>
              <Button leftIcon={<FiDownload />} onClick={exportChat}>
                Export Chat History
              </Button>
              <Button leftIcon={<FiHelpCircle />} onClick={() => window.open("https://chamberoflearning.com/help", "_blank")}>
                Help Center
              </Button>
              <Divider />
              <Text fontWeight="bold">Feedback</Text>
              <FormControl>
                <FormLabel>How satisfied are you with the assistance?</FormLabel>
                <Flex align="center">
                  <Text mr={2}>Not Satisfied</Text>
                  <Progress value={satisfaction} min={0} max={100} width="100%" />
                  <Text ml={2}>Very Satisfied</Text>
                </Flex>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={satisfaction}
                  onChange={(e) => setSatisfaction(e.target.value)}
                  style={{ width: '100%' }}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Additional Comments</FormLabel>
                <Textarea
                  value={feedbackText}
                  onChange={(e) => setFeedbackText(e.target.value)}
                  placeholder="Your feedback helps us improve!"
                />
              </FormControl>
              <Button colorScheme="teal" onClick={handleFeedbackSubmit}>Submit Feedback</Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      {error && (
        <Alert status="error" position="fixed" bottom="10" left="50%" transform="translateX(-50%)" width="auto">
          <AlertIcon />
          {error}
        </Alert>
      )}
    </>
  );
};

export default COLChatbot;
