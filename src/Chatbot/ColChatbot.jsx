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
  InputLeftElement,
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
import { FiMessageSquare, FiSend, FiMic, FiMicOff, FiVolume2, FiVolumeX, FiChevronDown, FiSettings, FiTrash2, FiClock, FiHelpCircle, FiDownload, FiUpload, FiMoon, FiSun, FiMoreVertical, FiRefreshCw } from 'react-icons/fi';
import { keyframes } from '@emotion/react';
import { useNavigate } from 'react-router-dom';
import sanjanaAnimate from '../assets/animate.mp4';

const IT_COURSES_LIST = [
  { id: 'IT-101', title: 'Software Development in Java' },
  { id: 'IT-102', title: 'Software Development in Python' },
  { id: 'IT-103', title: 'Manual Testing' },
  { id: 'IT-104', title: 'Automation Testing (Java)' },
  { id: 'IT-105', title: 'API Automation Testing (Java with Rest Assured)' },
  { id: 'IT-106', title: 'Automation Testing (Python)' },
  { id: 'IT-107', title: 'Product Management' },
  { id: 'IT-108', title: 'Business Analyst' },
  { id: 'IT-109', title: 'Mobile App Development' },
  { id: 'IT-110', title: 'Data Science and Machine Learning' },
  { id: 'IT-111', title: 'DevOps and Cloud Computing' },
  { id: 'IT-112', title: 'Cybersecurity' },
  { id: 'IT-113', title: 'UI/UX Development' },
];

const NON_IT_COURSES_LIST = [
  { id: 'NIT-101', title: 'Creative Writing' },
  { id: 'NIT-102', title: 'Graphic Design' },
  { id: 'NIT-103', title: 'Digital Marketing' },
  { id: 'NIT-104', title: 'Healthcare Management' },
  { id: 'NIT-105', title: 'Business Law' },
  { id: 'NIT-106', title: 'Environmental Science' },
  { id: 'NIT-107', title: 'Human Resources' },
  { id: 'NIT-108', title: 'Photography' },
  { id: 'NIT-109', title: 'Public Speaking' },
  { id: 'NIT-110', title: 'Theater Arts' },
  { id: 'NIT-111', title: 'Sustainable Agriculture' },
  { id: 'NIT-112', title: 'Culinary Arts' },
  { id: 'NIT-113', title: 'Human Resources' },
  { id: 'NIT-114', title: 'Finance & Accounting' },
  { id: 'NIT-115', title: 'Content Writing & Copywriting' },
  { id: 'NIT-116', title: 'Entrepreneurship & Startup' },
];

const micRingPulse = keyframes`
  0% { transform: scale(0.6); opacity: 0.5; border-width: 2px; }
  100% { transform: scale(1.8); opacity: 0; border-width: 1px; }
`;

const DEFINED_QUESTIONS = [
  { label: 'Find the right course', question: 'Help me pick the right IT course for my career.' },
  { label: 'Fees & EMI', question: 'Tell me about fees and EMI options for Prefcol courses.' },
  { label: 'How to enroll', question: 'How do I enroll for a Prefcol course?' },
  { label: 'Courses', question: 'Tell me about your courses and programs.' },
  { label: 'Admissions', question: 'How do I apply for admission?' },
  { label: 'Fees', question: 'What are the fees and payment options?' },
  { label: 'Contact', question: 'How can I contact Prefcol?' },
  { label: 'Rewrite for impact', question: 'Rewrite message for maximum impact' },
  { label: 'Brainstorm ideas', question: 'Brainstorm creative ideas' },
];

const COLChatbot = () => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onToggle, onClose } = useDisclosure();
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [showTextBox, setShowTextBox] = useState(false);
  const [sampleVoices, setSampleVoices] = useState([]);
  const [autoSpeak, setAutoSpeak] = useState(false);
  const [feedbackText, setFeedbackText] = useState('');
  const [satisfaction, setSatisfaction] = useState(50);
  const scrollAreaRef = useRef(null);
  const recognition = useRef(null);
  const synthesis = useRef(null);
  const hasAutoOpenedRef = useRef(false);
  const welcomeSpokenRef = useRef(false);
  const femaleVoiceRef = useRef(null);
  const lastTranscriptRef = useRef('');
  const handleSendRef = useRef(null);
  const setShowTextBoxRef = useRef(null);
  const toast = useToast();

  const { isOpen: isDrawerOpen, onOpen: onDrawerOpen, onClose: onDrawerClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();


  const pulseAnimation = keyframes`
    0% { box-shadow: 0 0 0 0 rgba(66, 153, 225, 0.4); }
    70% { box-shadow: 0 0 0 10px rgba(66, 153, 225, 0); }
    100% { box-shadow: 0 0 0 0 rgba(66, 153, 225, 0); }
  `;
  
  useEffect(() => {
    setShowTextBoxRef.current = setShowTextBox;
  }, [setShowTextBox]);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (!hasAutoOpenedRef.current) {
      hasAutoOpenedRef.current = true;
      onOpen();
    }
  }, [onOpen]);

  useEffect(() => {
    if (isOpen && messages.length === 0 && !welcomeSpokenRef.current) {
      welcomeSpokenRef.current = true;
      const welcomeText = getWelcomeMessage();
      setMessages([{ text: welcomeText, isBot: true, timestamp: new Date() }]);
      const speakWelcome = () => {
        speakResponse(welcomeText);
      };
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        const voices = window.speechSynthesis.getVoices();
        if (voices.length) {
          setTimeout(speakWelcome, 150);
        } else {
          window.speechSynthesis.onvoiceschanged = () => setTimeout(speakWelcome, 100);
        }
      }
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    if ('webkitSpeechRecognition' in window) {
      recognition.current = new webkitSpeechRecognition();
      recognition.current.continuous = true;
      recognition.current.interimResults = true;

      recognition.current.onresult = (event) => {
        const script = Array.from(event.results)
          .map(result => result[0].transcript)
          .join('');
        lastTranscriptRef.current = script;
        setInputText(script);
        if (script.trim()) setShowTextBoxRef.current?.(true);
      };

      recognition.current.onerror = (event) => {
        setError(`Speech recognition error: ${event.error}`);
        setIsListening(false);
      };

      recognition.current.onend = () => {
        setIsListening(false);
        const toSend = lastTranscriptRef.current?.trim();
        if (toSend) {
          lastTranscriptRef.current = '';
          handleSendRef.current?.(toSend);
        }
      };
    } else {
      setError('Speech recognition is not supported in this browser.');
    }

    if ('speechSynthesis' in window) {
      synthesis.current = window.speechSynthesis;
      const pickFemaleVoice = () => {
        femaleVoiceRef.current = null;
        getFemaleVoice();
      };
      pickFemaleVoice();
      synthesis.current.onvoiceschanged = pickFemaleVoice;
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
  };

  const getGreeting = () => {
    const h = new Date().getHours();
    if (h >= 21 || h < 5) return 'Wonderful night';
    if (h < 12) return 'Good morning';
    if (h < 17) return 'Good afternoon';
    return 'Good evening';
  };

  const getWelcomeMessage = () =>
    `${getGreeting()}! I'm Sanjana, your learning and career assistant. How can I help you today?`;

  const addMessage = (text, isBot, courses = null, courseBasePath = null) => {
    setMessages(prev => [...prev, {
      text,
      isBot,
      timestamp: new Date(),
      ...(courses && courses.length ? { courses, courseBasePath: courseBasePath || '/it-courses' } : {}),
    }]);
  };

  const handleSend = (overrideMessage) => {
    const toSend = (overrideMessage ?? (inputText || '')).trim();
    if (!toSend) return;
    addMessage(toSend, false);
    setInputText('');
    setIsLoading(true);
    const response = getResponse(toSend);
    setTimeout(() => {
      if (response === '__IT_COURSES_LIST__') {
        addMessage('Here are our IT courses. Click one to view details:', true, IT_COURSES_LIST, '/it-courses');
        if (autoSpeak) speakResponse('Here are our IT courses. Click any course to view details.');
      } else if (response === '__NON_IT_COURSES_LIST__') {
        addMessage('Here are our Non-IT courses. Click one to view details:', true, NON_IT_COURSES_LIST, '/Non_it-courses');
        if (autoSpeak) speakResponse('Here are our Non-IT courses. Click any course to view details.');
      } else {
        addMessage(response, true);
        if (autoSpeak) speakResponse(response);
      }
      setIsLoading(false);
    }, 1000);
  };
  handleSendRef.current = handleSend;

  const getResponse = (input) => {
    const lower = input.toLowerCase();
    if (lower.includes('hello') || lower.includes('hi') || lower.includes('hey')) {
      return "Hello! I’m Sanjana. How can I help you with Prefcol today?";
    }
    if (lower.includes('resume') || lower.includes('cv') || lower.includes('interview')) {
      return "For Resume & Interview Preparation, please log in to the Prefcol Student Portal using the Login page, then open the Resume section in your dashboard.";
    }
    if (lower.includes('it') && (lower.includes('course') || lower.includes('list') || lower.includes('show') || lower.includes('see') || lower.trim() === 'it')) {
      return "__IT_COURSES_LIST__";
    }
    if (lower.includes('non-it') || lower.includes('nonit') || (lower.includes('non') && lower.includes('it'))) {
      return "__NON_IT_COURSES_LIST__";
    }
    if (lower.includes('course') || lower.includes('program') || lower.includes('pick')) {
      return "Prefcol offers a wide range of IT and Non‑IT courses. Say 'IT' or 'IT courses' for IT list, 'Non-IT' for Non-IT courses.";
    }
    if (lower.includes('admission') || lower.includes('apply') || lower.includes('enroll')) {
      return "To apply for a course, please use the enquiry / admission forms on the Prefcol website. You’ll need basic details and your preferred course. Do you need more specific information?";
    }
    if (lower.includes('fee') || lower.includes('tuition') || lower.includes('emi') || lower.includes('payment')) {
      return "Fees vary depending on the program. For detailed fee structures, please check the course pages or contact the Prefcol office. Would you like the contact information?";
    }
    if (lower.includes('contact') || lower.includes('reach') || lower.includes('call')) {
      return "You can reach us at info@prefcol.com or call us at +91 94459 18818. Our office hours are Monday to Friday, 9 AM to 5 PM.";
    }
    if (lower.includes('rewrite') || lower.includes('maximum impact')) {
      return "Share the message you want to rewrite, and I'll suggest a version with stronger impact and clarity.";
    }
    if (lower.includes('brainstorm') || lower.includes('creative idea')) {
      return "Tell me the topic or goal (e.g. project, presentation), and I'll suggest creative ideas.";
    }
    if (lower.includes('thank') || lower.includes('thanks')) {
      return "You're welcome! Anything else about Prefcol courses, admissions, or fees?";
    }
    return "You can ask about our courses, admissions, fees, contact info, or say what you need help with.";
  };

  const toggleListening = () => {
    if (isListening) {
      try {
        recognition.current?.stop();
      } catch (_) {}
      setIsListening(false);
    } else {
      try {
        recognition.current?.start();
        setIsListening(true);
      } catch (e) {
        setError('Could not start microphone.');
        setIsListening(false);
      }
    }
  };

  const getFemaleVoice = () => {
    if (femaleVoiceRef.current) return femaleVoiceRef.current;
    if (!synthesis.current) return null;
    const voices = synthesis.current.getVoices();
    const isFemale = (v) => /female|woman|siri|samantha|karen|victoria|moira|tessa|zira|veena|priya|heera|rishi|aisha|meera/i.test(v.name) || v.name.toLowerCase().includes('female');
    const females = voices.filter(isFemale);
    const siriLikePriority = ['siri', 'samantha', 'karen', 'victoria', 'moira', 'tessa', 'zira', 'google uk', 'english female', 'female'];
    const female = siriLikePriority.reduce((found, key) => found || females.find(v => v.name.toLowerCase().includes(key)), null)
      || females.find(v => /en-us|en_us/i.test(v.lang))
      || females.find(v => /en-in|en-gb/i.test(v.lang))
      || females[0] || null;
    if (female) femaleVoiceRef.current = female;
    return female || null;
  };

  const speakResponse = (text) => {
    if (synthesis.current) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      const female = getFemaleVoice();
      if (female) utterance.voice = female;
      utterance.rate = 0.97;
      utterance.pitch = 1.0;
      utterance.volume = 1.0;
      synthesis.current.speak(utterance);
    }
  };

  const stopSpeaking = () => {
    if (synthesis.current) {
      synthesis.current.cancel();
      setIsSpeaking(false);
    }
  };

  const SAMPLE_PHRASE = "Hello, I'm your PREFCOL assistant. How can I help you today?";
  const playVoiceSample = (voice) => {
    if (!synthesis.current) return;
    synthesis.current.cancel();
    const u = new SpeechSynthesisUtterance(SAMPLE_PHRASE);
    u.voice = voice;
    u.rate = 0.97;
    u.pitch = 1.0;
    u.volume = 1.0;
    synthesis.current.speak(u);
  };

  useEffect(() => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;
    const update = () => {
      const voices = window.speechSynthesis.getVoices();
      const preferred = voices.filter(v => /samantha|karen|victoria|moira|tessa|zira/i.test(v.name));
      setSampleVoices(preferred.length ? preferred : voices.filter(v => /female|woman/i.test(v.name) || v.name.toLowerCase().includes('female')));
    };
    update();
    window.speechSynthesis.onvoiceschanged = update;
    return () => { window.speechSynthesis.onvoiceschanged = null; };
  }, []);

  const quickReply = (reply) => {
    handleSend(reply);
  };

  const clearChat = () => {
    setMessages([]);
    welcomeSpokenRef.current = false;
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
      <Tooltip
        label="Chat with PREFCOL AI"
        aria-label="Open PREFCOL AI chatbot"
        fontSize="small"
        maxWidth="150px"
      >
        <IconButton
          icon={<FiMessageSquare />}
          onClick={toggleChatbot}
          position="fixed"
          bottom="8"
          left="10"
          right="auto"
          size="lg"
          colorScheme="teal"
          aria-label="Open PREFCOL AI chatbot"
          borderRadius="full"
          boxShadow="lg"
          _hover={{ transform: 'scale(1.1)' }}
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
            style={{
              position: 'fixed',
              bottom: 16,
              left: 12,
              right: 12,
              zIndex: 50,
            }}
          >
            <Box
              borderWidth="1px"
              borderColor={colorMode === 'light' ? 'whiteAlpha.500' : 'whiteAlpha.300'}
              borderRadius="2xl"
              overflow="hidden"
              boxShadow="0 18px 45px rgba(15, 23, 42, 0.45)"
              bg={colorMode === 'light' ? 'rgba(255, 255, 255, 0.78)' : 'rgba(15, 23, 42, 0.78)'}
              backdropFilter="blur(18px)"
              maxW="420px"
              mx="auto"
            >
              <Flex
                px={4}
                py={3}
                align="center"
                justify="space-between"
                borderBottomWidth="1px"
                borderColor={colorMode === 'light' ? 'whiteAlpha.600' : 'whiteAlpha.300'}
                bg={colorMode === 'light' ? 'rgba(255, 255, 255, 0.65)' : 'rgba(15, 23, 42, 0.9)'}
                backdropFilter="blur(18px)"
              >
                <HStack spacing={3}>
                  <Box
                    w="32px"
                    h="32px"
                    borderRadius="full"
                    bgGradient="linear(to-br, green.400, emerald.500)"
                    boxShadow="0 0 12px rgba(72, 187, 120, 0.5)"
                    flexShrink={0}
                  />
                  <Text fontWeight="bold" fontSize="md" color="gray.800">
                    PREFCOL AI
                  </Text>
                </HStack>
                <HStack spacing={1}>
                  <IconButton
                    icon={<FiSettings />}
                    onClick={onDrawerOpen}
                    variant="ghost"
                    size="sm"
                    colorScheme="gray"
                    aria-label="Settings"
                  />
                  <Tooltip label="Close chat" placement="bottom">
                    <CloseButton onClick={toggleChatbot} color="gray.600" size="sm" aria-label="Close chat" />
                  </Tooltip>
                </HStack>
              </Flex>
              <Box
                p={4}
                maxH={['60vh', '420px']}
                overflowY="auto"
                ref={scrollAreaRef}
                bg="transparent"
              >
                {messages.length === 0 && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                      visible: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
                      hidden: {},
                    }}
                  >
                    <VStack align="stretch" spacing={4} mb={4}>
                      <motion.div
                        variants={{ hidden: { opacity: 0, scale: 0.92 }, visible: { opacity: 1, scale: 1 } }}
                        transition={{ duration: 0.35 }}
                        style={{ display: 'flex', justifyContent: 'center' }}
                      >
                        <Box
                          as={motion.div}
                          animate={{
                            boxShadow: [
                              '0 0 35px 10px rgba(56, 178, 172, 0.45)',
                              '0 0 55px 16px rgba(56, 178, 172, 0.25)',
                              '0 0 35px 10px rgba(56, 178, 172, 0.45)',
                            ],
                          }}
                          transition={{ duration: 2.5, repeat: Infinity, repeatType: 'reverse' }}
                          w="96px"
                          h="96px"
                          borderRadius="full"
                          overflow="hidden"
                          borderWidth="2px"
                          borderColor="whiteAlpha.700"
                          bg="transparent"
                        >
                          <Box
                            as="video"
                            src={sanjanaAnimate}
                            autoPlay
                            loop
                            muted
                            playsInline
                            w="full"
                            h="full"
                            objectFit="cover"
                          />
                        </Box>
                      </motion.div>
                      <motion.div
                        variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }}
                        transition={{ duration: 0.3 }}
                      >
                        <Text fontSize="lg" fontWeight="bold" color="gray.800" textAlign="center">
                          {getGreeting()}, can I help you with anything?
                        </Text>
                      </motion.div>
                      <motion.div
                        variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }}
                        transition={{ duration: 0.3 }}
                      >
                        <Text fontSize="sm" color="gray.500" textAlign="center">
                          Choose a prompt below or write your own to start chatting with Sanjana.
                        </Text>
                      </motion.div>
                      <motion.div
                        variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }}
                        transition={{ duration: 0.3 }}
                      >
                        <Text fontSize="sm" fontWeight="600" color="gray.700" mb={2}>
                          Defined questions
                        </Text>
                        <Flex wrap="wrap" gap={2} justify="center">
                          {DEFINED_QUESTIONS.map((item, i) => (
                            <Button
                              key={i}
                              size="sm"
                              variant="outline"
                              borderRadius="lg"
                              borderColor="green.200"
                              color="gray.700"
                              bg="white"
                              _hover={{ bg: 'green.50', borderColor: 'green.300' }}
                              onClick={() => quickReply(item.question)}
                              whiteSpace="normal"
                              textAlign="left"
                              h="auto"
                              py={2}
                              px={3}
                            >
                              {item.label}
                            </Button>
                          ))}
                        </Flex>
                      </motion.div>
                      <motion.div
                        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                        transition={{ duration: 0.25 }}
                      >
                        <HStack justify="center" spacing={1} cursor="pointer" onClick={() => setShowHistory((h) => !h)}>
                          <FiRefreshCw size={14} color="gray" />
                          <Text fontSize="xs" color="gray.500">
                            Show more prompts
                          </Text>
                        </HStack>
                      </motion.div>
                    </VStack>
                  </motion.div>
                )}
                {messages.map((message, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: message.isBot ? -16 : 16, y: 6 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ type: 'spring', stiffness: 320, damping: 28 }}
                  >
                    <Flex my={2} justify={message.isBot ? 'flex-start' : 'flex-end'} align="flex-start" gap={2}>
                      {message.isBot && (
                        <Box
                          w="28px"
                          h="28px"
                          borderRadius="full"
                          bgGradient="linear(to-br, green.400, emerald.500)"
                          boxShadow="0 0 10px rgba(72, 187, 120, 0.4)"
                          flexShrink={0}
                          mt={1}
                        />
                      )}
                      <Box
                        display="inline-block"
                        maxW="80%"
                        p={3}
                        borderRadius="xl"
                        bg={message.isBot ? 'white' : 'green.100'}
                        color={message.isBot ? 'gray.800' : 'gray.800'}
                        boxShadow={message.isBot ? 'sm' : 'none'}
                        borderWidth={message.isBot ? '1px' : 0}
                        borderColor="gray.100"
                      >
                        <Text fontSize="sm">{message.text}</Text>
                        {message.courses && message.courses.length > 0 && (
                          <VStack align="stretch" spacing={2} mt={3}>
                            {message.courses.map((c) => (
                              <Button
                                key={c.id}
                                size="sm"
                                variant="outline"
                                textAlign="left"
                                justifyContent="flex-start"
                                fontWeight="normal"
                                borderColor="green.200"
                                _hover={{ bg: 'green.50', borderColor: 'green.400' }}
                                onClick={() => navigate(`${message.courseBasePath || '/it-courses'}/${c.id}`)}
                              >
                                {c.title}
                              </Button>
                            ))}
                          </VStack>
                        )}
                        <Text fontSize="xs" color="gray.500" mt={1}>
                          {message.timestamp.toLocaleTimeString()}
                        </Text>
                      </Box>
                    </Flex>
                  </motion.div>
                ))}
                {isLoading && (
                  <Flex align="center" justify="flex-start" gap={2} my={2}>
                    <Box
                      w="28px"
                      h="28px"
                      borderRadius="full"
                      bgGradient="linear(to-br, green.400, emerald.500)"
                      boxShadow="0 0 10px rgba(72, 187, 120, 0.4)"
                    />
                    <Spinner size="sm" color="green.500" />
                    <Text fontSize="sm" color="gray.500">Thinking...</Text>
                  </Flex>
                )}
              </Box>
              <Box
                p={3}
                borderTopWidth="1px"
                borderColor={colorMode === 'light' ? 'whiteAlpha.600' : 'whiteAlpha.300'}
                bg={colorMode === 'light' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(15, 23, 42, 0.9)'}
                backdropFilter="blur(18px)"
              >
                <Flex justify="center" align="center" w="100%">
                  {!showTextBox ? (
                    <HStack spacing={3} justify="center">
                      <Tooltip label={isListening ? 'Stop listening' : 'Voice - ask your question'}>
                        <IconButton
                          icon={isListening ? <FiMicOff /> : <FiMic />}
                          size="lg"
                          borderRadius="full"
                          colorScheme="gray"
                          variant="outline"
                          aria-label={isListening ? 'Stop listening' : 'Voice input'}
                          onClick={toggleListening}
                          color={isListening ? 'red.500' : undefined}
                          borderColor={isListening ? 'red.300' : undefined}
                        />
                      </Tooltip>
                      <Tooltip label="Type your question">
                        <IconButton
                          icon={<FiMessageSquare />}
                          size="lg"
                          borderRadius="full"
                          colorScheme="green"
                          aria-label="Open text box"
                          onClick={() => setShowTextBox(true)}
                        />
                      </Tooltip>
                    </HStack>
                  ) : (
                    <InputGroup
                      size="md"
                      borderRadius="xl"
                      bg={colorMode === 'light' ? 'whiteAlpha.800' : 'whiteAlpha.200'}
                      borderWidth="1px"
                      borderColor={colorMode === 'light' ? 'whiteAlpha.700' : 'whiteAlpha.400'}
                      maxW="100%"
                      w="100%"
                    >
                      <InputLeftElement width="10" pl={1}>
                        <Tooltip label="Close text box">
                          <IconButton
                            icon={<FiMessageSquare />}
                            size="sm"
                            variant="ghost"
                            colorScheme="green"
                            aria-label="Close text box"
                            onClick={() => setShowTextBox(false)}
                          />
                        </Tooltip>
                      </InputLeftElement>
                      <Input
                        pl={10}
                        placeholder="Type your question..."
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                        border="none"
                        bg="transparent"
                        _focus={{ boxShadow: 'none' }}
                        _placeholder={{ color: 'gray.500' }}
                      />
                      <InputRightElement width="80px" pr={1}>
                        <HStack spacing={0}>
                          <Tooltip label={isListening ? 'Stop listening' : 'Voice input'}>
                            <IconButton
                              icon={isListening ? <FiMicOff /> : <FiMic />}
                              variant="ghost"
                              size="sm"
                              aria-label={isListening ? 'Stop listening' : 'Voice input'}
                              colorScheme="gray"
                              onClick={toggleListening}
                              color={isListening ? 'red.500' : undefined}
                            />
                          </Tooltip>
                          <IconButton
                            icon={<FiSend />}
                            onClick={() => handleSend()}
                            size="sm"
                            colorScheme="green"
                            aria-label="Send"
                          />
                        </HStack>
                      </InputRightElement>
                    </InputGroup>
                  )}
                </Flex>
              </Box>
              <Collapse in={showHistory}>
                <Box p={3} bg="gray.50" borderTopWidth="1px" borderColor="gray.100">
                  <Text fontSize="sm" fontWeight="600" color="gray.700" mb={2}>Defined questions (preview)</Text>
                  <VStack align="stretch" spacing={1}>
                    {DEFINED_QUESTIONS.map((item, i) => (
                      <Box
                        key={i}
                        p={2}
                        borderRadius="md"
                        bg="white"
                        borderWidth="1px"
                        borderColor="gray.200"
                        cursor="pointer"
                        _hover={{ bg: 'green.50', borderColor: 'green.200' }}
                        onClick={() => quickReply(item.question)}
                      >
                        <Text fontSize="sm" fontWeight="500" color="gray.800">{item.label}</Text>
                        <Text fontSize="xs" color="gray.500" mt={0.5}>{item.question}</Text>
                      </Box>
                    ))}
                  </VStack>
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
              <Text fontWeight="bold">Sample voices (Siri-style)</Text>
              <Text fontSize="sm" color="gray.600">Play a sample with each voice. Available voices depend on your device.</Text>
              <VStack align="stretch" spacing={2}>
                {sampleVoices.map((voice) => (
                  <Button
                    key={voice.name + (voice.lang || '')}
                    size="sm"
                    variant="outline"
                    leftIcon={<FiVolume2 />}
                    onClick={() => playVoiceSample(voice)}
                  >
                    {voice.name} {voice.lang ? `(${voice.lang})` : ''}
                  </Button>
                ))}
                {sampleVoices.length === 0 && (
                  <Text fontSize="sm" color="gray.500">Load the chat and open Settings again to see voices.</Text>
                )}
              </VStack>
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
