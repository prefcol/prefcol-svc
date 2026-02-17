import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  FaJava,
  FaPython,
  FaTwitter,
  FaEnvelope,
  FaArrowRight,
  FaLinkedin,
  FaFacebook,
  FaRegFileAlt,
  FaCogs,
  FaUserCog,
  FaMobileAlt,
  FaDatabase,
  FaShieldAlt,
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
  // FormControl,
  // FormLabel,
  // Input,
  // Textarea,
  useToast,
  AspectRatio,
  Spinner,
  // FormErrorMessage
} from "@chakra-ui/react";
import CertificateSection from "./Certificate";
import { useAuth } from "../../../Contexts/AuthContext";
import EnrollmentForm from "./EnrollmentForm";

const coursesData = [
  {
    id: "IT-101",
    title: "Software Development in Java",
    description: "Learn to build software applications using Java.",
    available: true,
    icon: <FaJava className="text-3xl mb-2" />,
    objectives: [
      "Understand Java fundamentals",
      "Build web applications",
      "Implement object-oriented programming",
    ],
    prerequisites: "Basic programming knowledge",
    duration: "4 weeks",
    relatedCourses: ["IT-102", "IT-104", "IT-106"],
    videoId: "eIrMbAQSU34",
  },
  {
    id: "IT-102",
    title: "Software Development in Python",
    description: "Develop applications and scripts using Python programming.",
    available: true,
    icon: <FaPython className="text-3xl mb-2" />,
    objectives: [
      "Learn Python syntax",
      "Create scripts for automation",
      "Work with data structures",
    ],
    prerequisites: "None",
    duration: "6 weeks",
    relatedCourses: ["IT-101", "IT-104", "IT-106"],
    videoId: "_uQrJ0TkZlc",
  },
  {
    id: "IT-103",
    title: "Manual Testing",
    description: "Understand the fundamentals of software testing manually.",
    available: true,
    icon: <FaRegFileAlt className="text-3xl mb-2" />,
    objectives: [
      "Learn testing techniques",
      "Identify bugs and issues",
      "Prepare test cases",
    ],
    prerequisites: "None",
    duration: "3 weeks",
    relatedCourses: ["IT-104", "IT-105"],
    videoId: "T3N1t0dTfFk",
  },
  {
    id: "IT-104",
    title: "Automation Testing (Java)",
    description: "Automate testing using Java-based frameworks.",
    available: true,
    icon: <FaCogs className="text-3xl mb-2" />,
    objectives: [
      "Understand automation frameworks",
      "Write automation scripts in Java",
      "Integrate with CI/CD tools",
    ],
    prerequisites: "Software Development in Java",
    duration: "5 weeks",
    relatedCourses: ["IT-101", "IT-105", "IT-106"],
    videoId: "A_VtF0mb3-s",
  },
  {
    id: "IT-105",
    title: "API Automation Testing (Java with Rest Assured)",
    description: "Test and automate APIs with Java and Rest Assured.",
    available: true,
    icon: <FaRegFileAlt className="text-3xl mb-2" />,
    objectives: [
      "Learn API testing concepts",
      "Implement tests using Rest Assured",
      "Understand JSON and XML",
    ],
    prerequisites: "Automation Testing (Java)",
    duration: "4 weeks",
    relatedCourses: ["IT-104", "IT-106", "IT-105"],
    videoId: "l8jMYmGloUs",
  },
  {
    id: "IT-106",
    title: "Automation Testing (Python)",
    description: "Automate testing processes using Python.",
    available: true,
    icon: <FaCogs className="text-3xl mb-2" />,
    objectives: [
      "Understand Python testing libraries",
      "Write automated test cases",
      "Integrate with CI/CD tools",
    ],
    prerequisites: "Software Development in Python",
    duration: "5 weeks",
    relatedCourses: ["IT-102", "IT-104", "IT-101"],
    videoId: "LfdR1w6cPK0",
  },
  {
    id: "IT-107",
    title: "Product Management",
    description: "Learn product management essentials.",
    available: true,
    icon: <FaUserCog className="text-3xl mb-2" />,
    objectives: [
      "Understand product lifecycle",
      "Learn market research techniques",
      "Develop product roadmaps",
    ],
    prerequisites: "None",
    duration: "6 weeks",
    relatedCourses: ["IT-108", "IT-104", "IT-103"],
    videoId: "A4W3FIZ6eXk",
  },
  {
    id: "IT-108",
    title: "Business Analyst",
    description: "Gain skills in business analysis.",
    available: true,
    icon: <FaRegFileAlt className="text-3xl mb-2" />,
    objectives: [
      "Understand business analysis techniques",
      "Learn requirements gathering",
      "Develop business cases",
    ],
    prerequisites: "None",
    duration: "5 weeks",
    relatedCourses: ["IT-108", "IT-102", "IT-107"],
    videoId: "ysjMtdLOofY",
  },
  {
    id: "IT-109",
    title: "Mobile App Development",
    description: "Create mobile applications for iOS and Android.",
    available: true,
    icon: <FaMobileAlt className="text-3xl mb-2" />,
    objectives: [
      "Understand mobile development frameworks",
      "Build cross-platform apps",
      "Learn app deployment processes",
    ],
    prerequisites: "Software Development knowledge",
    duration: "8 weeks",
    relatedCourses: ["IT-101", "IT-102", "IT-107"],
    videoId: "5n0B8jkmB_I",
  },
  {
    id: "IT-110",
    title: "Data Science and Machine Learning",
    description: "Explore data analysis, machine learning, and AI techniques.",
    available: false,
    icon: <FaDatabase className="text-3xl mb-2" />,
    objectives: [
      "Understand data analysis concepts",
      "Learn machine learning algorithms",
      "Build predictive models",
    ],
    prerequisites: "Basic statistics knowledge",
    duration: "10 weeks",
    relatedCourses: ["IT-111", "IT-103", "IT-104"],
    videoId: "oP8MD9J9G9I",
    price: 99.99,
  },
  {
    id: "IT-111",
    title: "DevOps and Cloud Computing",
    description: "Learn DevOps practices and cloud computing skills.",
    available: false,
    icon: <FaCogs className="text-3xl mb-2" />,
    objectives: [
      "Understand DevOps lifecycle",
      "Learn CI/CD tools",
      "Explore cloud services",
    ],
    prerequisites: "None",
    duration: "8 weeks",
    relatedCourses: ["IT-110", "IT-103", "IT-102"],
    videoId: "3On_DwWnpYI",
  },
  {
    id: "IT-112",
    title: "Cybersecurity",
    description: "Protect networks and data from cyber threats.",
    available: false,
    icon: <FaShieldAlt className="text-3xl mb-2" />,
    objectives: [
      "Understand cybersecurity principles",
      "Learn threat analysis",
      "Implement security measures",
    ],
    prerequisites: "None",
    duration: "7 weeks",
    relatedCourses: ["IT-101", "IT-105", "IT-110"],
    videoId: "cM1AaD7Pf8M",
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
    //     /*setIsLoading(true)
    //     // Simulate enrollment process
    //     await new Promise(resolve => setTimeout(resolve, 1000))
    //     setIsEnrolled(true)
    //     fetchPrice()*/
    //     if(login == null){
    //         alert("Please login to enroll")
    //     }else{
    //         alert("Already enrolled")
    //     }

    // }


  return (
    <Box
      bg={useColorModeValue("white", "teal.700")}
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
              {isLoading ? "Loading..." : `${price}`}
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
          colorScheme={course.available ? "orange" : "teal"}
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

export default function IT_CourseDetails() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [relatedCourses, setRelatedCourses] = useState([]);
  const [progress, setProgress] = useState(0);
  const toast = useToast();
  const { user, setShowForm, setRedirect, showEnrollForm, setShowEnrollForm  } = useAuth();
  
  const bgColor = useColorModeValue("white", "teal.100");

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

    const handleEnroll = () => {
      if (user) {
        setShowEnrollForm(true); // Show enrollment form if user is authenticated
      } else {
        setRedirect("/enroll"); // Redirect non-authenticated users
        setShowForm(true); // Show login form for authentication
      }
    };

    const MotionBox = motion(Box)

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
      case "IT-101": // Software Development in Java
      return [
        {
          week: 1,
          title: "Introduction to Java",
          lessons: [
            "Overview of Java: History and evolution, features, benefits.",
            "Understanding the Java Virtual Machine (JVM).",
            "Java Development Kit (JDK) and Java Runtime Environment (JRE).",
            "Installing JDK and setting up the environment.",
            "Writing and running your first Java program.",
            "Introduction to IDEs like IntelliJ IDEA, Eclipse, or NetBeans."
          ],
        },
        {
          week: 2,
          title: "Java Basics",
          lessons: [
            "Primitive data types: int, float, double, char, boolean.",
            "Reference data types: Objects and Arrays.",
            "Variable declaration, initialization, type conversion and casting.",
            "Operators: arithmetic, relational, logical, bitwise.",
            "Assignment, increment/decrement, precedence and associativity.",
            "Control flow: if, else, switch, for, while, do-while.",
            "Break, continue, and return statements."
          ],
        },
        {
          week: 3,
          title: "Object-Oriented Programming (OOP)",
          lessons: [
            "OOP Concepts: Classes, Objects, Encapsulation, Abstraction, Inheritance, Polymorphism.",
            "Creating and using classes and objects.",
            "Constructors and initialization, this keyword.",
            "Method declaration, invocation, overloading, overriding.",
            "Access modifiers: public, private, protected, default.",
            "Encapsulation and access control."
          ],
        },
        {
          week: 4,
          title: "Inheritance and Polymorphism",
          lessons: [
            "Types of inheritance: single, multilevel, hierarchical.",
            "Using super keyword, method overriding, final keyword.",
            "Compile-time polymorphism (method overloading).",
            "Runtime polymorphism (method overriding).",
            "Upcasting and downcasting.",
            "Abstract classes and methods.",
            "Interfaces and multiple inheritance using interfaces."
          ],
        },
        {
          week: 5,
          title: "Exception Handling",
          lessons: [
            "What are exceptions? Checked and unchecked types.",
            "Exception hierarchy.",
            "try, catch, finally blocks.",
            "throw and throws keywords.",
            "Creating custom exceptions.",
            "Best practices for exception handling in real-world applications."
          ],
        },
        {
          week: 6,
          title: "Arrays, Strings, and Collections",
          lessons: [
            "Arrays: declaring, initializing, accessing, multidimensional arrays.",
            "Array manipulation techniques.",
            "Strings: String class and methods, immutability, StringBuilder, StringBuffer.",
            "Collections Framework: List, Set, Map interfaces.",
            "Classes like ArrayList, LinkedList, HashSet, TreeSet, HashMap, TreeMap.",
            "Iterating collections using Iterator and for-each loop."
          ],
        },
        {
          week: 7,
          title: "Inner Classes and Enums",
          lessons: [
            "Types of inner classes: member, static, local, anonymous.",
            "Use cases and examples of inner classes.",
            "Enums: defining, using, methods, constructors."
          ],
        },
        {
          week: 8,
          title: "File Handling and I/O Streams",
          lessons: [
            "Introduction to file handling in Java.",
            "Reading from and writing to files.",
            "File class and its methods.",
            "Byte and character streams.",
            "InputStream, OutputStream, Reader, Writer classes."
          ],
        },
        {
          week: 9,
          title: "Multithreading and Concurrency",
          lessons: [
            "Thread lifecycle and states.",
            "Creating and starting threads using Thread and Runnable.",
            "Synchronization: synchronized keyword, methods, techniques.",
            "Deadlock and thread safety.",
            "java.util.concurrent package: Executor framework, Callable, Future."
          ],
        },
        
        {
          week: 10,
          title: "Java 8 and Beyond Features",
          lessons: [
            "Lambda expressions: syntax, usage, functional interfaces.",
            "Streams API: filter, map, reduce, collect, parallel streams.",
            "Optional class: avoiding null pointer exceptions.",
            "Date and Time API: LocalDate, LocalTime, LocalDateTime, Period, Duration."
          ],
        },
        {
          week: 11,
          title: "Annotations and Reflection",
          lessons: [
            "Built-in annotations: @Override, @Deprecated, @SuppressWarnings.",
            "Creating custom annotations.",
            "Introduction to reflection.",
            "Analyzing and manipulating classes at runtime."
          ],
        },
        {
          week: 12,
          title: "Networking and Serialization",
          lessons: [
            "Networking basics in Java.",
            "Working with Socket and ServerSocket.",
            "URL and HTTP communication.",
            "Serialization and deserialization.",
            "Serializable interface and object serialization."
          ],
        },
        {
          week: 13,
          title: "Advanced Topics",
          lessons: [
            "Java memory management: heap, stack, garbage collection, memory leaks.",
            "JVM tuning and performance optimization.",
            "Design patterns in Java: Singleton, Factory, Observer, etc.",
            "JDBC: connecting to databases, executing queries.",
            "Working with ResultSet and Statement objects."
          ],
        }
      ];      
      case "IT-102": // Software Development in Python
      return [
        {
          week: 1,
          title: "Introduction to Python & Setup",
          lessons: [
            "Install Python from python.org.",
            "Install an IDE or code editor (e.g., VS Code, PyCharm, or Jupyter Notebook).",
            "Run a basic \"Hello World\" program.",
            "Python syntax and indentation.",
            "Variables and data types (integers, floats, strings).",
            "Basic input and output using input() and print().",
            "Simple arithmetic operations."
          ],
        },
        {
          week: 2,
          title: "Control Structures",
          lessons: [
            "if, elif, and else statements.",
            "Logical operators: and, or, not.",
            "Comparison operators: ==, !=, <, >, <=, >=.",
            "Practice: Write simple programs that use conditional statements (e.g., even/odd number check, largest of three numbers).",
          ],
        },
        {
          week: 3,
          title: "Loops",
          lessons: [
            "for loop with range().",
            "Looping over lists, strings, and other sequences.",
            "Basic while loop and using break and continue statements.",
            "Practice: Write programs that use loops (e.g., sum of numbers, factorial, Fibonacci sequence).",
          ],
        },
        {
          week: 4,
          title: "Functions",
          lessons: [
            "def keyword, function parameters, and return values.",
            "Understanding scope (local vs global variables).",
            "Practice: Create functions for basic tasks like calculating the area of a circle, checking prime numbers, etc.",
          ],
        },
        {
          week: 5,
          title: "Data Structures – Lists",
          lessons: [
            "Creating lists, accessing elements, slicing.",
            "List methods (append(), remove(), pop(), sort(), reverse()).",
            "Practice: Create and manipulate lists (e.g., adding/removing items, sorting).",
          ],
        },
        {
          week: 6,
          title: "Data Structures - Tuples and Dictionaries",
          lessons: [
            "Creating and accessing tuples.",
            "Differences between lists and tuples.",
            "Creating and accessing dictionaries (key-value pairs).",
            "Dictionary methods (keys(), values(), items()).",
            "Practice: Write programs that use tuples and dictionaries (e.g., storing student grades or inventory items).",
          ],
        },
        {
          week: 7,
          title: "String Manipulation",
          lessons: [
            "String indexing and slicing.",
            "String methods (upper(), lower(), strip(), replace(), split(), join()).",
            "Practice: Write programs that manipulate strings (e.g., palindrome checker, word counter).",
          ],
        },
        {
          week: 8,
          title: "File Handling",
          lessons: [
            "Open a file, read contents, write to files (open(), read(), write()).",
            "Closing a file and file modes (r, w, a).",
            "Practice: Create a simple program that reads from a text file, processes its data, and writes results to another file.",
          ],
        },
        {
          week: 9,
          title: "Exception Handling",
          lessons: [
            "try, except, else, and finally.",
            "Raising exceptions with raise.",
            "Practice: Write programs that handle common errors (e.g., division by zero, file not found).",
          ],
        },
        {
          week: 10,
          title: "Final Project",
          lessons: [
            "Basic calculator.",
            "To-Do list application.",
            "Number guessing game.",
            "Simple text-based quiz.",
          ],
        },
      ];      
      case "IT-103": // Manual Testing
        return [
          {
            week: 1,
            title: "Introduction to Testing",
            lessons: [
              "Testing Basics",
              "Testing Types",
              "Manual Testing Process",
              "Tools",
            ],
          },
          {
            week: 2,
            title: "Core Concepts",
            lessons: [
              "Test Case Design",
              "Test Execution",
              "Bug Reporting",
              "Test Plans",
            ],
          },
          {
            week: 3,
            title: "Advanced Topics",
            lessons: [
              "Exploratory Testing",
              "Regression Testing",
              "Performance Testing",
              "Usability Testing",
            ],
          },
          {
            week: 4,
            title: "Project Work",
            lessons: [
              "Final Test Plan",
              "Test Execution",
              "Bug Reporting",
              "Test Documentation",
            ],
          },
        ];
      case "IT-104": // Automation Testing (Java)
        return [
          {
            week: 1,
            title: "Introduction to Automation",
            lessons: [
              "Automation Basics",
              "Java Setup",
              "JUnit Framework",
              "Selenium Setup",
            ],
          },
          {
            week: 2,
            title: "Core Concepts",
            lessons: ["WebDriver", "Locators", "Assertions", "TestNG"],
          },
          {
            week: 3,
            title: "Advanced Topics",
            lessons: [
              "Data-Driven Testing",
              "Page Object Model",
              "Cross-browser Testing",
              "CI/CD Integration",
            ],
          },
          {
            week: 4,
            title: "Project Work",
            lessons: [
              "Final Project",
              "Test Script Development",
              "Test Reporting",
              "CI Integration",
            ],
          },
        ];
      case "IT-105": // API Automation Testing (Java with Rest Assured)
        return [
          {
            week: 1,
            title: "Introduction to APIs",
            lessons: [
              "What is an API?",
              "HTTP Basics",
              "Postman Setup",
              "Rest Assured Setup",
            ],
          },
          {
            week: 2,
            title: "Core Concepts",
            lessons: [
              "API Requests",
              "API Assertions",
              "Authentication",
              "Handling Responses",
            ],
          },
          {
            week: 3,
            title: "Advanced Topics",
            lessons: [
              "API Documentation",
              "Mocking APIs",
              "Performance Testing",
              "API Security",
            ],
          },
          {
            week: 4,
            title: "Project Work",
            lessons: [
              "API Automation Project",
              "Test Automation Strategy",
              "Data-Driven API Testing",
              "CI/CD for API Tests",
            ],
          },
        ];
      case "IT-106": // Automation Testing (Python)
        return [
          {
            week: 1,
            title: "Introduction to Python Automation",
            lessons: [
              "What is automation?",
              "Benefits of automation with Python",
              "Installing Python and setting up the environment",
              "Introduction to Jupyter Notebook & VS Code",
            ],
          },
          {
            week: 2,
            title: " Python Basics (Quick Recap)",
            lessons: [
              "Variables, data types, and operators",
              "Conditional statements (if-else)",
              "Loops (for, while)",
              "Functions and modules",
              "File handling (reading/writing files)",
            ],
          },
          {
            week: 3,
            title: " Working with Libraries for Automation",
            lessons: [
              "os and shutil (File & directory operations)",
              "sys and argparse (Command-line arguments)",
              "time and schedule (Task scheduling)",
              "logging (Logging activities)",
            ],
          },
          {
            week: 4,
            title: " Automating File & Folder Operations",
            lessons: [
              "Creating, renaming, deleting files & folders",
              "Organizing files based on extensions",
              "Searching and modifying file contents",
              
            ],
          },
          {
            week: 5,
            title: " Web Scraping & Browser Automation",
            lessons: [
              "Introduction to web scraping",
              "Using requests and BeautifulSoup",
              "Automating web browsers with selenium",
              "Handling forms, buttons, and web elements",
              
            ],
          },
          {
            week: 6,
            title: " Automating Emails & Messaging",
            lessons: [
              "Sending emails using smtplib",
              "Reading emails using imaplib",
              "Automating WhatsApp & Telegram messages",
              
            ],
          },
          {
            week: 7,
            title: " Automating Excel, PDFs, and Documents",
            lessons: [
              "Working with Excel using openpyxl & pandas",
              "Reading and modifying PDFs using PyPDF2",
              "Automating Word documents using python-docx",
              
            ],
          },
          {
            week: 8,
            title: " Automating Data Extraction & APIs",
            lessons: [
              "Fetching data from APIs using requests",
              "Parsing JSON & XML data",
              "Working with authentication & API keys",
              
            ],
          },
          {
            week: 9,
            title: " Automating Desktop Applications",
            lessons: [
              "Using pyautogui for mouse & keyboard automation",
              "Automating GUI interactions",
              "Handling screenshots and alerts",
              
            ],
          },
          {
            week: 10,
            title: "  Task Scheduling & Deployment",
            lessons: [
              "Automating scripts using cron (Linux) or Task Scheduler (Windows)",
              "Creating executable scripts (pyinstaller)",
              "Deploying automation scripts on the cloud",
              
            ],
          },
        ];
      case "IT-107": // Product Management
      return [
        {
          week: 1,
          title: "Introduction to Product Management",
          lessons: [
            "What is Product Management?",
            "Role & Responsibilities of a Product Manager",
            "Product vs. Project Management",
            "Key Skills Required for a PM",
          ],
        },
        {
          week: 2,
          title: "Product Lifecycle & Strategy",
          lessons: [
            "Product Development Lifecycle (Idea → Launch → Growth → Maturity → Decline)",
            "Types of Products (B2B, B2C, SaaS, Hardware, etc.)",
            "Understanding Market & Customer Needs",
            "Competitive Analysis & Market Research",
          ],
        },
        {
          week: 3,
          title: "Product Discovery & Ideation",
          lessons: [
            "Problem-Solving & Design Thinking",
            "User Research & Customer Interviews",
            "Defining Product Vision & Strategy",
            "Brainstorming & Idea Validation Techniques",
          ],
        },
        {
          week: 4,
          title: "Roadmap & Prioritization",
          lessons: [
            "Building a Product Roadmap",
            "Prioritization Frameworks (MoSCoW, RICE, Kano Model)",
            "Aligning Roadmaps with Business Goals",
          ],
        },
        {
          week: 5,
          title: "Agile & Product Development Process",
          lessons: [
            "Agile, Scrum, & Kanban Methodologies",
            "Writing User Stories & Acceptance Criteria",
            "Working with Engineering & Design Teams",
            "MVP (Minimum Viable Product) Approach",
          ],
        },
        {
          week: 6,
          title: "Metrics & Data-Driven Decision Making",
          lessons: [
            "Key Product Metrics (DAU, MAU, Retention, Churn, NPS)",
            "A/B Testing & Experimentation",
            "Analytics Tools (Google Analytics, Mixpanel, Amplitude)",
          ],
        },
        {
          week: 7,
          title: "Go-To-Market & Product Launch",
          lessons: [
            "Product Positioning & Messaging",
            "Creating a GTM Strategy",
            "Sales & Marketing Alignment",
            "Post-Launch Monitoring & Feedback Loop",
          ],
        },
        {
          week: 8,
          title: "Stakeholder & Cross-Functional Collaboration",
          lessons: [
            "Working with Engineering, Design, Sales, and Marketing",
            "Effective Communication & Storytelling for PMs",
            "Managing Up & Stakeholder Buy-In",
          ],
        },
        {
          week: 9,
          title: "Case Studies & Practical Applications",
          lessons: [
            "Analyzing Successful & Failed Products",
            "Hands-on Product Case Studies",
            "Building a Mini Product Roadmap as a Project",
          ],
        },
        {
          week: 10,
          title: "Career & Growth in Product Management",
          lessons: [
            "How to Land a Product Management Role",
            "Resume & Interview Preparation",
            "PM Career Paths & Specializations (Growth PM, Technical PM, etc.)",
          ],
        },
      ];
      
      case "IT-108": // Business Analyst
      return [
        {
          week: 1,
          title: "Introduction to Business Analysis",
          lessons: [
            "Definition and Importance of Business Analysis",
            "Role of a Business Analyst",
            "Business Analysis Process Overview",
          ],
        },
        {
          week: 2,
          title: "Business Analysis Frameworks & Approaches",
          lessons: [
            "Business Analysis Life Cycle",
            "Agile vs. Waterfall Methodologies",
            "Business Process Management",
          ],
        },
        {
          week: 3,
          title: "Stakeholder Analysis & Management",
          lessons: [
            "Identifying Stakeholders",
            "Stakeholder Communication Strategies",
            "Managing Stakeholder Expectations",
          ],
        },
        {
          week: 4,
          title: "Requirement Gathering & Elicitation Techniques",
          lessons: [
            "Interviews & Surveys",
            "Workshops & Brainstorming",
            "Observation & Prototyping",
          ],
        },
        {
          week: 5,
          title: "Requirements Analysis & Documentation",
          lessons: [
            "Types of Requirements (Business, Functional, Non-Functional)",
            "Use Case Diagrams & User Stories",
            "Business Requirement Document (BRD)",
            "Functional Requirement Specification (FRS)",
          ],
        },
        {
          week: 6,
          title: "Business Process Modeling & Improvement",
          lessons: [
            "Process Flow Diagrams",
            "SWOT Analysis",
            "GAP Analysis",
            "As-Is vs. To-Be Process Mapping",
          ],
        },
        {
          week: 7,
          title: "Data Analysis & Decision Making",
          lessons: [
            "Basics of Data Analysis",
            "Data Visualization Techniques",
            "Key Performance Indicators (KPIs)",
          ],
        },
        {
          week: 8,
          title: "Tools & Techniques for Business Analysis",
          lessons: [
            "Microsoft Excel, Power BI, Tableau",
            "UML Diagrams, BPMN Notation",
            "Wireframing Tools (Balsamiq, Axure)",
          ],
        },
        {
          week: 9,
          title: "Software Development & Testing Basics",
          lessons: [
            "Software Development Life Cycle (SDLC)",
            "User Acceptance Testing (UAT)",
            "Quality Assurance & Validation",
          ],
        },
        {
          week: 10,
          title: "Communication & Soft Skills for Business Analysts",
          lessons: [
            "Effective Communication & Presentation Skills",
            "Negotiation & Conflict Resolution",
            "Documentation & Report Writing",
          ],
        },
      ];
      case "IT-109": // Mobile App Development
      return [
        {
          week: 1,
          title: "Introduction to Mobile Development",
          lessons: [
            "Overview of Mobile Development.",
            "Native vs. Hybrid vs. Cross-Platform Development.",
            "Popular Mobile Operating Systems (Android, iOS).",
            "Mobile Development Tools & IDEs (Android Studio, Xcode, VS Code)."
          ],
        },
        {
          week: 2,
          title: "Programming Basics",
          lessons: [
            "Introduction to Programming Languages (Java, Kotlin, Swift, Dart, JavaScript).",
            "Object-Oriented Programming (OOP) Concepts.",
            "Basic Data Structures & Algorithms."
          ],
        },
        {
          week: 3,
          title: "Android Development Basics",
          lessons: [
            "Introduction to Android Studio & Emulator Setup.",
            "Understanding Android Project Structure.",
            "Activities, Fragments, and Intents.",
            "UI Components & Layouts (XML, ConstraintLayout, RecyclerView).",
            "Event Handling & User Interaction.",
            "Working with APIs (Retrofit/Volley)."
          ],
        },
        {
          week: 4,
          title: "iOS Development Basics",
          lessons: [
            "Introduction to Xcode & iOS Project Structure.",
            "Swift Basics.",
            "Storyboards & UI Design.",
            "ViewControllers, Navigation, and TableViews.",
            "Networking & API Calls."
          ],
        },
        {
          week: 5,
          title: "Cross-Platform Development (Optional)",
          lessons: [
            "Introduction to Flutter & Dart.",
            "Introduction to React Native.",
            "Setting up Environment for Cross-Platform Development.",
            "Building UI & Handling User Interaction.",
            "State Management."
          ],
        },
        {
          week: 6,
          title: "Mobile Database & Storage",
          lessons: [
            "Shared Preferences & Local Storage.",
            "SQLite & Room Database (Android).",
            "Core Data (iOS).",
            "Firebase Realtime Database & Firestore.",
            "Offline Data Handling."
          ],
        },
        {
          week: 7,
          title: "Advanced Mobile Development Concepts",
          lessons: [
            "Background Processes & Multithreading.",
            "Push Notifications (FCM & APNs).",
            "Location Services & Google Maps API.",
            "Camera & Media Integration.",
            "Sensors & Hardware Access."
          ],
        },
        {
          week: 8,
          title: "App Deployment & Maintenance",
          lessons: [
            "App Signing & Security Basics.",
            "Publishing Apps on Google Play Store & Apple App Store.",
            "App Performance Optimization.",
            "Debugging & Crash Reporting.",
            "Continuous Integration & Deployment (CI/CD)."
          ],
        },
        {
          week: 9,
          title: "UI/UX & Best Practices",
          lessons: [
            "Mobile Design Principles.",
            "Material Design (Android) & Human Interface Guidelines (iOS).",
            "Accessibility & Responsive Design.",
            "Testing Strategies (Unit Testing, UI Testing)."
          ],
        }
      ];      
      case "IT-110": // Data Science and Machine Learning
      return [
        {
          week: 1,
          title: "Introduction to Data Science & Machine Learning",
          lessons: [
            "What is Data Science?",
            "Applications of Data Science & ML",
            "Difference between AI, ML, and Data Science",
            "Basics of Python/R for Data Science",
          ],
        },
        {
          week: 2,
          title: "Mathematics & Statistics for Data Science",
          lessons: [
            "Linear Algebra (Vectors, Matrices, Eigenvalues)",
            "Probability & Statistics (Mean, Variance, Probability Distributions)",
            "Calculus (Derivatives, Gradient Descent)",
          ],
        },
        {
          week: 3,
          title: "Data Preprocessing & Exploration",
          lessons: [
            "Data Collection & Cleaning",
            "Handling Missing Values",
            "Exploratory Data Analysis (EDA)",
            "Data Visualization (Matplotlib, Seaborn)",
          ],
        },
        {
          week: 4,
          title: "Machine Learning Basics",
          lessons: [
            "Types of Machine Learning (Supervised, Unsupervised, Reinforcement)",
            "Train-Test Split & Cross-Validation",
            "Performance Metrics (Accuracy, Precision, Recall, F1 Score)",
          ],
        },
        {
          week: 5,
          title: "Supervised Learning",
          lessons: [
            "Regression (Linear, Polynomial, Logistic)",
            "Classification (Decision Trees, Random Forest, SVM, Naïve Bayes)",
            "Evaluation Metrics (MSE, RMSE, Confusion Matrix)",
          ],
        },
        {
          week: 6,
          title: "Unsupervised Learning",
          lessons: [
            "Clustering (K-Means, Hierarchical, DBSCAN)",
            "Dimensionality Reduction (PCA, t-SNE)",
          ],
        },
        {
          week: 7,
          title: "Feature Engineering & Model Tuning",
          lessons: [
            "Feature Scaling & Encoding",
            "Feature Selection Techniques",
            "Hyperparameter Tuning (Grid Search, Random Search)",
          ],
        },
        {
          week: 8,
          title: "Deep Learning Basics (Optional for Beginners)",
          lessons: [
            "Introduction to Neural Networks",
            "Basics of TensorFlow/PyTorch",
            "Simple ANN Model",
          ],
        },
        {
          week: 9,
          title: "Model Deployment & Real-World Applications",
          lessons: [
            "Introduction to Model Deployment (Flask, FastAPI)",
            "Basics of Cloud Platforms (AWS, Google Cloud)",
            "Real-World ML Case Studies",
          ],
        },
      ];
      
      case "IT-111": // DevOps and Cloud Computing
      return [
        {
          week: 1,
          title: "Introduction to DevOps",
          lessons: [
            "What is DevOps?",
            "DevOps Lifecycle & Benefits",
            "DevOps vs. Traditional IT",
            "Key DevOps Principles (CI/CD, Automation, Collaboration)",
          ],
        },
        {
          week: 2,
          title: "Linux Fundamentals",
          lessons: [
            "Basic Linux Commands",
            "File System, Users, and Permissions",
            "Networking Basics (SSH, SCP, Firewalls)",
            "Process Management",
          ],
        },
        {
          week: 3,
          title: "Version Control with Git",
          lessons: [
            "Git Basics (Init, Clone, Add, Commit, Push, Pull)",
            "Branching and Merging",
            "GitHub/GitLab/Bitbucket Basics",
            "Git Workflow (Git Flow, Forking, Pull Requests)",
          ],
        },
        {
          week: 4,
          title: "Continuous Integration & Continuous Deployment (CI/CD)",
          lessons: [
            "Introduction to CI/CD Pipelines",
            "Jenkins Basics (Installation, Jobs, Pipelines)",
            "GitHub Actions, GitLab CI/CD",
            "Artifact Management (Nexus, Artifactory)",
          ],
        },
        {
          week: 5,
          title: "Containerization with Docker",
          lessons: [
            "What is Docker & Why Use It?",
            "Docker Installation & Setup",
            "Docker Images & Containers",
            "Docker Compose",
            "Docker Networking & Storage",
          ],
        },
        {
          week: 6,
          title: "Container Orchestration with Kubernetes",
          lessons: [
            "Kubernetes Architecture (Master, Nodes, Pods, Services)",
            "Deploying Applications on Kubernetes",
            "Kubernetes Networking & Storage",
            "Helm Charts Basics",
            "Monitoring Kubernetes (Prometheus, Grafana)",
          ],
        },
        {
          week: 7,
          title: "Infrastructure as Code (IaC)",
          lessons: [
            "Introduction to IaC",
            "Terraform Basics (Providers, Modules, State Management)",
            "Ansible Basics (Playbooks, Roles)",
            "CloudFormation (AWS Specific)",
          ],
        },
        {
          week: 8,
          title: "Cloud Computing Basics",
          lessons: [
            "What is Cloud Computing?",
            "Cloud Service Models (IaaS, PaaS, SaaS)",
            "Cloud Providers Overview (AWS, Azure, GCP)",
          ],
        },
        {
          week: 9,
          title: "AWS Fundamentals (or Azure/GCP)",
          lessons: [
            "AWS Account Setup & IAM",
            "EC2, S3, RDS, VPC Basics",
            "Load Balancers & Auto Scaling",
            "Serverless Computing (Lambda, API Gateway)",
            "Cloud Monitoring (CloudWatch, CloudTrail)",
          ],
        },
        {
          week: 10,
          title: "Logging & Monitoring",
          lessons: [
            "Log Management (ELK Stack: Elasticsearch, Logstash, Kibana)",
            "Monitoring Tools (Prometheus, Grafana, Datadog)",
          ],
        },
        {
          week: 11,
          title: "Security & Compliance in DevOps",
          lessons: [
            "DevSecOps Fundamentals",
            "Security Best Practices in CI/CD",
            "Container & Cloud Security",
          ],
        },
        {
          week: 12,
          title: "Final Project & Best Practices",
          lessons: [
            "Build a CI/CD Pipeline for an Application",
            "Deploy a Full-Stack App on Kubernetes",
            "Automate Infrastructure with Terraform",
          ],
        },
      ];
      
      case "IT-112": // Cybersecurity
      return [
        {
          week: 1,
          title: "Introduction to Cybersecurity",
          lessons: [
            "Importance of cybersecurity",
            "Cyber threats and risks",
            "Cybersecurity principles (Confidentiality, Integrity, Availability - CIA Triad)",
          ],
        },
        {
          week: 2,
          title: "Common Cyber Threats and Attacks",
          lessons: [
            "Malware (Viruses, Ransomware, Trojans, Worms)",
            "Phishing and Social Engineering",
            "Denial of Service (DoS) and Distributed Denial of Service (DDoS)",
            "Man-in-the-Middle (MITM) attacks",
            "SQL Injection, Cross-Site Scripting (XSS)",
            "Insider threats",
          ],
        },
        {
          week: 3,
          title: "Network Security Basics",
          lessons: [
            "Basics of networking (IP, TCP/IP, HTTP/HTTPS, DNS)",
            "Firewalls, VPNs, and Intrusion Detection/Prevention Systems (IDS/IPS)",
            "Secure network protocols",
          ],
        },
        {
          week: 4,
          title: "Security Best Practices",
          lessons: [
            "Strong passwords and authentication (MFA)",
            "Secure browsing habits",
            "Data encryption basics",
            "Software updates and patch management",
          ],
        },
        {
          week: 5,
          title: "Cybersecurity Tools & Technologies",
          lessons: [
            "Antivirus and anti-malware software",
            "SIEM (Security Information and Event Management) tools",
            "Penetration testing and vulnerability scanning",
            "Wireshark (network traffic analysis)",
          ],
        },
        {
          week: 6,
          title: "Ethical Hacking and Penetration Testing Basics",
          lessons: [
            "Ethical hacking concepts and frameworks",
            "Kali Linux and basic penetration testing tools",
            "Introduction to Metasploit",
          ],
        },
        {
          week: 7,
          title: "Cyber Laws and Compliance",
          lessons: [
            "Overview of cybersecurity laws (GDPR, CCPA, HIPAA, etc.)",
            "Compliance frameworks (ISO 27001, NIST, PCI-DSS)",
            "Cyber ethics and responsible hacking",
          ],
        },
        {
          week: 8,
          title: "Incident Response and Disaster Recovery",
          lessons: [
            "Steps in incident response",
            "Backup and disaster recovery strategies",
            "Business continuity planning",
          ],
        },
        {
          week: 9,
          title: "Career Paths in Cybersecurity",
          lessons: [
            "Roles in cybersecurity (SOC analyst, Penetration tester, Security engineer)",
            "Certifications overview (CompTIA Security+, CEH, CISSP)",
          ],
        },
      ];
      
      
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
        color={useColorModeValue("teal.800", "white")}
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
              bg={useColorModeValue("teal.900", "teal.500")}
              color={useColorModeValue("white", "teal.900")}
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
		  	            
                                            {/* Enroll Now */}<EnrollmentForm/> 
                        
                    <Button
                      bg="white"
                      size={{ base: "sm", md: "md" }}
                      onClick={() => {
                        toast({
                          title: "Preview available on request",
                          description: "Please contact our team to see this course preview.",
                          status: "info",
                          duration: 3500,
                          isClosable: true,
                        });
                        navigate("/contact-us");
                      }}
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
              variant="outline"
              colorScheme="orange"
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
                {/* <Card mb={{ base: 4, md: 8 }}>
                                    <CardHeader>
                                        <Heading size={{ base: 'md', md: 'lg' }}>Course Content</Heading>
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
                                                                    <ListIcon as={FaRegFileAlt} color="teal.900" />
                                                                    Lesson {lessonIndex + 1}: {lesson}
                                                                </ListItem>
                                                            ))}
                                                        </List>
                                                    </AccordionPanel>
                                                </AccordionItem>
                                            ))}
                                        </Accordion>
                                    </CardBody>
                                </Card> */}
                <Card mb={{ base: 4, md: 8 }}>
                  <CardHeader>
                    <Heading size={{ base: "md", md: "lg" }}>
                      Course Content
                    </Heading>
                  </CardHeader>
                  <CardBody>
                    <Accordion allowMultiple>
                      {getCourseContent(course.id).map((week, index) => (
                        <AccordionItem key={index} border="none">
                          <h2>
                            <AccordionButton
                              _expanded={{
                                bg: "gray.100",
                                color: "teal.600",
                                transition: "all 0.3s ease-in-out",
                              }}
                            >
                              <Box flex="1" textAlign="left">
                                Week {week.week}: {week.title}
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{
                              duration: 0.3,
                              ease: "easeInOut",
                              delay: 0.1,
                            }} // 300ms smooth transition with slight delay
                            style={{ overflow: "hidden" }}
                          >
                            <AccordionPanel pb={4}>
                              <List spacing={2}>
                                {week.lessons.map((lesson, lessonIndex) => (
                                  <ListItem key={lessonIndex}>
                                    <ListIcon
                                      as={FaRegFileAlt}
                                      color="teal.900"
                                    />
                                    Lesson {lessonIndex + 1}: {lesson}
                                  </ListItem>
                                ))}
                              </List>
                            </AccordionPanel>
                          </motion.div>
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
                            color={useColorModeValue("teal.900", "teal.800")}
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
                        <ListIcon as={FaCheckCircle} color="teal.900" />
                        {course.prerequisites}
                      </ListItem>
                      <ListItem>
                        <ListIcon as={FaCheckCircle} color="teal.900" />
                        Access to a computer with internet connection
                      </ListItem>
                      <ListItem>
                        <ListIcon as={FaCheckCircle} color="teal.900" />
                        Dedication to complete assignments and projects
                      </ListItem>
                      <ListItem>
                        <ListIcon as={FaCheckCircle} color="teal.900" />
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
                          name: "Ava",
                          role: "UX/UI Designer",
                          content:
                            "The design course has completely redefined my approach to user-centered design. I now create more intuitive and impactful interfaces.",
                        },
                        {
                          name: "Liam",
                          role: "Backend Developer",
                          content:
                            "The full-stack development program was exactly what I needed to upgrade my skills. It provided the perfect mix of theory and practical experience.",
                        },
                        {
                          name: "Sophie",
                          role: "Digital Marketer",
                          content:
                            "The digital marketing course gave me the tools to boost client engagement and increase conversions. I’m now managing successful campaigns with ease.",
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
                                color="teal.500"
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
                {/* <Card mb={{ base: 4, md: 8 }}>
                                    <CardHeader>
                                        <Heading size={{ base: "md", md: "lg" }}>Frequently Asked Questions</Heading>
                                    </CardHeader>
                                    <CardBody>
                                        <Accordion allowMultiple>
                                            {[
                                                { question: 'How long do I have access to the course?', answer: 'You have lifetime access to the course content, including any future updates.' },
                                                { question: 'Is there a money-back guarantee?', answer: 'Yes, we offer a 30-day money-back guarantee if you\'re not satisfied with the course.' },
                                                { question: 'How is the course delivered?', answer: 'The course is delivered online through our learning platform. You can access the content at your own pace.' },
                                                { question: 'Will I receive support during the course?', answer: 'Yes, you\'ll have access to instructor support and a community forum throughout the duration of the course.' },
                                                { question: 'Are there any live sessions?', answer: 'We offer optional live Q&A sessions with the instructor on a bi-weekly basis.' },
                                            ].map((faq, index) => (
                                                <AccordionItem key={index}>
                                                    <h2>
                                                        <AccordionButton>
                                                            <Box flex="1" textAlign="left">
                                                                <HStack>
                                                                    <FaQuestionCircle color={useColorModeValue('teal.500', 'teal.300')} />
                                                                    <Text fontWeight="bold" fontSize={{ base: "sm", md: "md" }}>{faq.question}</Text>
                                                                </HStack>
                                                            </Box>
                                                            <AccordionIcon />
                                                        </AccordionButton>
                                                    </h2>
                                                    <AccordionPanel pb={4}>
                                                        <Text fontSize={{ base: "sm", md: "md" }}>{faq.answer}</Text>
                                                    </AccordionPanel>
                                                </AccordionItem>
                                            ))}
                                        </Accordion>
                                    </CardBody>
                                </Card> */}
              </GridItem>

              {/* Sidebar */}
              <GridItem>
                <Box position={{ base: "static", lg: "sticky" }} top="20px">
                  <VStack spacing={{ base: 4, md: 6, lg: 8 }}>
                    {/* Course Progress */}
                    {/* <Card w="100%">
                                            <CardBody>
                                                <Heading size={{ base: "sm", md: "md" }} mb={4}>Your Progress</Heading>
                                                <Progress value={progress} colorScheme="teal" size="lg" mb={2} />
                                                <Text textAlign="center" fontSize={{ base: "sm", md: "md" }}>{progress}% Complete</Text>
                                                <Button colorScheme="teal" width="100%" mt={4} size={{ base: "sm", md: "md" }} onClick={() => {
                                                    toast({
                                                        title: "Continue Learning",
                                                        description: "Redirecting to your last lesson...",
                                                        status: "info",
                                                        duration: 2000,
                                                        isClosable: true,
                                                    })
                                                }}>
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
                              color="teal.500"
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
                              <FaUsers color="teal" />
                              <Text fontSize={{ base: "xs", md: "sm" }}>
                                10,000+ Students
                              </Text>
                            </HStack>
                            <HStack>
                              <FaRegFileAlt color="teal" />
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
                            bg={"teal.900"}
                            _hover={{ color: "black", bg: "white" }}
                            s
                          />
                          <IconButton
                            aria-label="Share on Twitter"
                            icon={<FaTwitter />}
                            onClick={() => handleShare("twitter")}
                            color={"white"}
                            bg={"teal.900"}
                            _hover={{ color: "black", bg: "white" }}
                          />
                          <IconButton
                            aria-label="Share on LinkedIn"
                            icon={<FaLinkedin />}
                            onClick={() => handleShare("linkedin")}
                            color={"white"}
                            bg={"teal.900"}
                            _hover={{ color: "black", bg: "white" }}
                          />
                          <IconButton
                            aria-label="Share via Email"
                            icon={<FaEnvelope />}
                            onClick={() => handleShare("email")}
                            color={"white"}
                            bg={"teal.900"}
                            _hover={{ color: "black", bg: "white" }}
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
              <Heading
                size={{ base: "lg", md: "xl" }}
                color={"black"}
                mb={{ base: 4, md: 6 }}
              >
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
                      to={`/it-courses/${relatedCourse.id}`}
                      transition="all 0.3s"
                      _hover={{
                        transform: "translateY(-5px)",
                        boxShadow: "xl",
                      }}
                    >
                      <CardHeader>
                        <HStack spacing={4}>
                          <Box
                            bg="teal.900"
                            color={"white"}
                            p={2}
                            borderRadius="full"
                          >
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
                          bg="teal.900"
                          color={"white"}
                          size={{ base: "sm", md: "md" }}
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

      </Box>
    </>
  );
}

// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate, Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { Helmet } from "react-helmet-async";
// import {
//   FaJava,
//   FaPython,
//   FaTwitter,
//   FaEnvelope,
//   FaArrowRight,
//   FaLinkedin,
//   FaFacebook,
//   FaRegFileAlt,
//   FaCogs,
//   FaUserCog,
//   FaMobileAlt,
//   FaDatabase,
//   FaShieldAlt,
//   FaArrowLeft,
//   FaStar,
//   FaUsers,
//   FaClock,
//   FaCheckCircle,
//   FaQuestionCircle,
//   FaGift,
//   FaCertificate,
//   FaPlay,
// } from "react-icons/fa";
// import {
//   Box,
//   Button,
//   Container,
//   Heading,
//   Text,
//   VStack,
//   HStack,
//   Badge,
//   Image,
//   Grid,
//   GridItem,
//   useColorModeValue,
//   useDisclosure,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalBody,
//   ModalCloseButton,
//   Progress,
//   Accordion,
//   AccordionItem,
//   AccordionButton,
//   AccordionPanel,
//   AccordionIcon,
//   List,
//   ListItem,
//   ListIcon,
//   Tooltip,
//   SimpleGrid,
//   Card,
//   CardHeader,
//   CardBody,
//   CardFooter,
//   Avatar,
//   Flex,
//   IconButton,
//   Stat,
//   StatLabel,
//   StatNumber,
//   StatHelpText,
//   // FormControl,
//   // FormLabel,
//   // Input,
//   // Textarea,
//   useToast,
//   AspectRatio,
//   Spinner,
//   // FormErrorMessage
// } from "@chakra-ui/react";
// import CertificateSection from "./Certificate";
// import { useAuth } from "../../../Contexts/AuthContext";
// import EnrollmentForm from "./EnrollmentForm";

// const coursesData = [
//   {
//     id: 1,
//     title: "Software Development in Java",
//     description: "Learn to build software applications using Java.",
//     available: true,
//     icon: <FaJava className="text-3xl mb-2" />,
//     objectives: [
//       "Understand Java fundamentals",
//       "Build web applications",
//       "Implement object-oriented programming",
//     ],
//     prerequisites: "Basic programming knowledge",
//     duration: "4 weeks",
//     relatedCourses: [2, 4, 6],
//     videoId: "eIrMbAQSU34",
//   },
//   {
//     id: 2,
//     title: "Software Development in Python",
//     description: "Develop applications and scripts using Python programming.",
//     available: true,
//     icon: <FaPython className="text-3xl mb-2" />,
//     objectives: [
//       "Learn Python syntax",
//       "Create scripts for automation",
//       "Work with data structures",
//     ],
//     prerequisites: "None",
//     duration: "6 weeks",
//     relatedCourses: [1, 4, 6],
//     videoId: "_uQrJ0TkZlc",
//   },
//   {
//     id: 3,
//     title: "Manual Testing",
//     description: "Understand the fundamentals of software testing manually.",
//     available: true,
//     icon: <FaRegFileAlt className="text-3xl mb-2" />,
//     objectives: [
//       "Learn testing techniques",
//       "Identify bugs and issues",
//       "Prepare test cases",
//     ],
//     prerequisites: "None",
//     duration: "3 weeks",
//     relatedCourses: [4, 5],
//     videoId: "T3N1t0dTfFk",
//   },
//   {
//     id: 4,
//     title: "Automation Testing (Java)",
//     description: "Automate testing using Java-based frameworks.",
//     available: true,
//     icon: <FaCogs className="text-3xl mb-2" />,
//     objectives: [
//       "Understand automation frameworks",
//       "Write automation scripts in Java",
//       "Integrate with CI/CD tools",
//     ],
//     prerequisites: "Software Development in Java",
//     duration: "5 weeks",
//     relatedCourses: [1, 5, 6],
//     videoId: "A_VtF0mb3-s",
//   },
//   {
//     id: 5,
//     title: "API Automation Testing (Java with Rest Assured)",
//     description: "Test and automate APIs with Java and Rest Assured.",
//     available: true,
//     icon: <FaRegFileAlt className="text-3xl mb-2" />,
//     objectives: [
//       "Learn API testing concepts",
//       "Implement tests using Rest Assured",
//       "Understand JSON and XML",
//     ],
//     prerequisites: "Automation Testing (Java)",
//     duration: "4 weeks",
//     relatedCourses: [4, 6, 4],
//     videoId: "l8jMYmGloUs",
//   },
//   {
//     id: 6,
//     title: "Automation Testing (Python)",
//     description: "Automate testing processes using Python.",
//     available: true,
//     icon: <FaCogs className="text-3xl mb-2" />,
//     objectives: [
//       "Understand Python testing libraries",
//       "Write automated test cases",
//       "Integrate with CI/CD tools",
//     ],
//     prerequisites: "Software Development in Python",
//     duration: "5 weeks",
//     relatedCourses: [2, 4, 1],
//     videoId: "LfdR1w6cPK0",
//   },
//   {
//     id: 7,
//     title: "Product Management",
//     description: "Learn product management essentials.",
//     available: true,
//     icon: <FaUserCog className="text-3xl mb-2" />,
//     objectives: [
//       "Understand product lifecycle",
//       "Learn market research techniques",
//       "Develop product roadmaps",
//     ],
//     prerequisites: "None",
//     duration: "6 weeks",
//     relatedCourses: [8, 4, 3],
//     videoId: "A4W3FIZ6eXk",
//   },
//   {
//     id: 8,
//     title: "Business Analyst",
//     description: "Gain skills in business analysis.",
//     available: true,
//     icon: <FaRegFileAlt className="text-3xl mb-2" />,
//     objectives: [
//       "Understand business analysis techniques",
//       "Learn requirements gathering",
//       "Develop business cases",
//     ],
//     prerequisites: "None",
//     duration: "5 weeks",
//     relatedCourses: [8, 2, 7],
//     videoId: "ysjMtdLOofY",
//   },
//   {
//     id: 9,
//     title: "Mobile App Development",
//     description: "Create mobile applications for iOS and Android.",
//     available: true,
//     icon: <FaMobileAlt className="text-3xl mb-2" />,
//     objectives: [
//       "Understand mobile development frameworks",
//       "Build cross-platform apps",
//       "Learn app deployment processes",
//     ],
//     prerequisites: "Software Development knowledge",
//     duration: "8 weeks",
//     relatedCourses: [1, 2, 7],
//     videoId: "5n0B8jkmB_I",
//   },
//   {
//     id: 10,
//     title: "Data Science and Machine Learning",
//     description: "Explore data analysis, machine learning, and AI techniques.",
//     available: false,
//     icon: <FaDatabase className="text-3xl mb-2" />,
//     objectives: [
//       "Understand data analysis concepts",
//       "Learn machine learning algorithms",
//       "Build predictive models",
//     ],
//     prerequisites: "Basic statistics knowledge",
//     duration: "10 weeks",
//     relatedCourses: [11, 13, 14],
//     videoId: "oP8MD9J9G9I",
//     price: 99.99,
//   },
//   {
//     id: 11,
//     title: "DevOps and Cloud Computing",
//     description: "Learn DevOps practices and cloud computing skills.",
//     available: false,
//     icon: <FaCogs className="text-3xl mb-2" />,
//     objectives: [
//       "Understand DevOps lifecycle",
//       "Learn CI/CD tools",
//       "Explore cloud services",
//     ],
//     prerequisites: "None",
//     duration: "8 weeks",
//     relatedCourses: [10, 3, 2],
//     videoId: "3On_DwWnpYI",
//   },
//   {
//     id: 12,
//     title: "Cybersecurity",
//     description: "Protect networks and data from cyber threats.",
//     available: false,
//     icon: <FaShieldAlt className="text-3xl mb-2" />,
//     objectives: [
//       "Understand cybersecurity principles",
//       "Learn threat analysis",
//       "Implement security measures",
//     ],
//     prerequisites: "None",
//     duration: "7 weeks",
//     relatedCourses: [1, 5, 10],
//     videoId: "cM1AaD7Pf8M",
//   },
  
// ];

// const PriceDisplay = ({ course }) => {
//   const [isEnrolled, setIsEnrolled] = useState(false);
//   const [price, setPrice] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);

//   const fetchPrice = async () => {
//     setIsLoading(true);
//     try {
//       const response = await fetch(`/api/course-price?id=${course.id}`);
//       const data = await response.json();
//       setPrice(data.price);
//     } catch (error) {
//       console.error("Error fetching price:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//     // const handleEnroll = async () => {
//     //     /*setIsLoading(true)
//     //     // Simulate enrollment process
//     //     await new Promise(resolve => setTimeout(resolve, 1000))
//     //     setIsEnrolled(true)
//     //     fetchPrice()*/
//     //     if(login == null){
//     //         alert("Please login to enroll")
//     //     }else{
//     //         alert("Already enrolled")
//     //     }

//     // }


//   return (
//     <Box
//       bg={useColorModeValue("white", "teal.700")}
//       className="text-black"
//       p={{ base: 4, md: 6 }}
//       borderRadius="lg"
//       boxShadow="md"
//     >
//       <VStack spacing={{ base: 2, md: 4 }} align="stretch">
//         <HStack justify="space-between">
//           <Text fontWeight="bold">Price:</Text>
//           {isEnrolled ? (
//             <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold">
//               {isLoading ? "Loading..." : `${price}`}
//             </Text>
//           ) : (
//             <Text
//               fontSize={{ base: "xl", md: "2xl" }}
//               fontWeight="bold"
//               filter="blur(4px)"
//             >
//               $XX.XX
//             </Text>
//           )}
//         </HStack>
//         <HStack>
//           <FaClock />
//           <Text fontSize={{ base: "sm", md: "md" }}>{course.duration}</Text>
//         </HStack>
//         <HStack>
//           <FaUsers />
//           <Text fontSize={{ base: "sm", md: "md" }}>
//             {Math.floor(Math.random() * 1000)} students enrolled
//           </Text>
//         </HStack>
//         <HStack>
//           <FaStar color="gold" />
//           <Text fontSize={{ base: "sm", md: "md" }}>4.8 (234 reviews)</Text>
//         </HStack>
//         <Badge
//           colorScheme={course.available ? "orange" : "teal"}
//           alignSelf="start"
//         >
//           {course.available ? "Available" : "Coming Soon"}
//         </Badge>
//         {/* {!isEnrolled && (
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
//       </VStack>
//     </Box>
//   );
// };

// export default function IT_CourseDetails() {
//   const { courseId } = useParams();
//   const navigate = useNavigate();
//   const [course, setCourse] = useState(null);
//   const [relatedCourses, setRelatedCourses] = useState([]);
//   const [progress, setProgress] = useState(0);
//   const {
//     isOpen: isVideoOpen,
//     onOpen: onVideoOpen,
//     onClose: onVideoClose,
//   } = useDisclosure();
//   const toast = useToast();
//   const { user, setShowForm, setRedirect, showEnrollForm, setShowEnrollForm  } = useAuth();
  
//   const bgColor = useColorModeValue("white", "teal.100");

//   useEffect(() => {
//     const selectedCourse = coursesData.find((c) => c.id === parseInt(courseId));
//     if (selectedCourse) {
//       setCourse(selectedCourse);
//       setRelatedCourses(
//         coursesData.filter((c) => selectedCourse.relatedCourses.includes(c.id))
//       );
//       setProgress(Math.floor(Math.random() * 101));
//     }
//   }, [courseId]);

// //   useEffect(() => {
// //   const selectedCourse = coursesData.find((c) => c.id === courseId);
// //   if (selectedCourse) {
// //     setCourse(selectedCourse);
// //     setRelatedCourses(
// //       coursesData.filter((c) => selectedCourse.relatedCourses.includes(c.id))
// //     );
// //     setProgress(Math.floor(Math.random() * 101));
// //   }
// // }, [courseId]);


//   if (!course) {
//     return (
//       <Box
//         height="100vh"
//         display="flex"
//         alignItems="center"
//         justifyContent="center"
//       >
//         <Spinner size="xl" />
//       </Box>
//     );
//   }

//   const getIcon = (iconComponent) => {
//     const IconComponent = iconComponent.type;
//     return <IconComponent size="2em" />;
//   };

//     const handleEnroll = () => {
//       if (user) {
//         setShowEnrollForm(true); // Show enrollment form if user is authenticated
//       } else {
//         setRedirect("/enroll"); // Redirect non-authenticated users
//         setShowForm(true); // Show login form for authentication
//       }
//     };

//     const MotionBox = motion(Box)

//   const handleShare = (platform) => {
//     const url = window.location.href;
//     const text = `Check out this amazing course: ${course.title}`;

//     switch (platform) {
//       case "facebook":
//         window.open(
//           `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
//             url
//           )}`,
//           "_blank"
//         );
//         break;
//       case "twitter":
//         window.open(
//           `https://twitter.com/intent/tweet?url=${encodeURIComponent(
//             url
//           )}&text=${encodeURIComponent(text)}`,
//           "_blank"
//         );
//         break;
//       case "linkedin":
//         window.open(
//           `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
//             url
//           )}&title=${encodeURIComponent(course.title)}`,
//           "_blank"
//         );
//         break;
//       case "email":
//         window.location.href = `mailto:?subject=${encodeURIComponent(
//           course.title
//         )}&body=${encodeURIComponent(text + "\n\n" + url)}`;
//         break;
//       default:
//         break;
//     }
//   };

//   const getCourseContent = (courseId) => {
//     switch (courseId) {
//       case 1: // Software Development in Java
//       return [
//         {
//           week: 1,
//           title: "Introduction to Java",
//           lessons: [
//             "Overview of Java: History and evolution, features, benefits.",
//             "Understanding the Java Virtual Machine (JVM).",
//             "Java Development Kit (JDK) and Java Runtime Environment (JRE).",
//             "Installing JDK and setting up the environment.",
//             "Writing and running your first Java program.",
//             "Introduction to IDEs like IntelliJ IDEA, Eclipse, or NetBeans."
//           ],
//         },
//         {
//           week: 2,
//           title: "Java Basics",
//           lessons: [
//             "Primitive data types: int, float, double, char, boolean.",
//             "Reference data types: Objects and Arrays.",
//             "Variable declaration, initialization, type conversion and casting.",
//             "Operators: arithmetic, relational, logical, bitwise.",
//             "Assignment, increment/decrement, precedence and associativity.",
//             "Control flow: if, else, switch, for, while, do-while.",
//             "Break, continue, and return statements."
//           ],
//         },
//         {
//           week: 3,
//           title: "Object-Oriented Programming (OOP)",
//           lessons: [
//             "OOP Concepts: Classes, Objects, Encapsulation, Abstraction, Inheritance, Polymorphism.",
//             "Creating and using classes and objects.",
//             "Constructors and initialization, this keyword.",
//             "Method declaration, invocation, overloading, overriding.",
//             "Access modifiers: public, private, protected, default.",
//             "Encapsulation and access control."
//           ],
//         },
//         {
//           week: 4,
//           title: "Inheritance and Polymorphism",
//           lessons: [
//             "Types of inheritance: single, multilevel, hierarchical.",
//             "Using super keyword, method overriding, final keyword.",
//             "Compile-time polymorphism (method overloading).",
//             "Runtime polymorphism (method overriding).",
//             "Upcasting and downcasting.",
//             "Abstract classes and methods.",
//             "Interfaces and multiple inheritance using interfaces."
//           ],
//         },
//         {
//           week: 5,
//           title: "Exception Handling",
//           lessons: [
//             "What are exceptions? Checked and unchecked types.",
//             "Exception hierarchy.",
//             "try, catch, finally blocks.",
//             "throw and throws keywords.",
//             "Creating custom exceptions.",
//             "Best practices for exception handling in real-world applications."
//           ],
//         },
//         {
//           week: 6,
//           title: "Arrays, Strings, and Collections",
//           lessons: [
//             "Arrays: declaring, initializing, accessing, multidimensional arrays.",
//             "Array manipulation techniques.",
//             "Strings: String class and methods, immutability, StringBuilder, StringBuffer.",
//             "Collections Framework: List, Set, Map interfaces.",
//             "Classes like ArrayList, LinkedList, HashSet, TreeSet, HashMap, TreeMap.",
//             "Iterating collections using Iterator and for-each loop."
//           ],
//         },
//         {
//           week: 7,
//           title: "Inner Classes and Enums",
//           lessons: [
//             "Types of inner classes: member, static, local, anonymous.",
//             "Use cases and examples of inner classes.",
//             "Enums: defining, using, methods, constructors."
//           ],
//         },
//         {
//           week: 8,
//           title: "File Handling and I/O Streams",
//           lessons: [
//             "Introduction to file handling in Java.",
//             "Reading from and writing to files.",
//             "File class and its methods.",
//             "Byte and character streams.",
//             "InputStream, OutputStream, Reader, Writer classes."
//           ],
//         },
//         {
//           week: 9,
//           title: "Multithreading and Concurrency",
//           lessons: [
//             "Thread lifecycle and states.",
//             "Creating and starting threads using Thread and Runnable.",
//             "Synchronization: synchronized keyword, methods, techniques.",
//             "Deadlock and thread safety.",
//             "java.util.concurrent package: Executor framework, Callable, Future."
//           ],
//         },
//         {
//           week: 10,
//           title: "Java 8 and Beyond Features",
//           lessons: [
//             "Lambda expressions: syntax, usage, functional interfaces.",
//             "Streams API: filter, map, reduce, collect, parallel streams.",
//             "Optional class: avoiding null pointer exceptions.",
//             "Date and Time API: LocalDate, LocalTime, LocalDateTime, Period, Duration."
//           ],
//         },
//         {
//           week: 11,
//           title: "Annotations and Reflection",
//           lessons: [
//             "Built-in annotations: @Override, @Deprecated, @SuppressWarnings.",
//             "Creating custom annotations.",
//             "Introduction to reflection.",
//             "Analyzing and manipulating classes at runtime."
//           ],
//         },
//         {
//           week: 12,
//           title: "Networking and Serialization",
//           lessons: [
//             "Networking basics in Java.",
//             "Working with Socket and ServerSocket.",
//             "URL and HTTP communication.",
//             "Serialization and deserialization.",
//             "Serializable interface and object serialization."
//           ],
//         },
//         {
//           week: 13,
//           title: "Advanced Topics",
//           lessons: [
//             "Java memory management: heap, stack, garbage collection, memory leaks.",
//             "JVM tuning and performance optimization.",
//             "Design patterns in Java: Singleton, Factory, Observer, etc.",
//             "JDBC: connecting to databases, executing queries.",
//             "Working with ResultSet and Statement objects."
//           ],
//         }
//       ];      
//       case 2: // Software Development in Python
//       return [
//         {
//           week: 1,
//           title: "Introduction to Python & Setup",
//           lessons: [
//             "Install Python from python.org.",
//             "Install an IDE or code editor (e.g., VS Code, PyCharm, or Jupyter Notebook).",
//             "Run a basic \"Hello World\" program.",
//             "Python syntax and indentation.",
//             "Variables and data types (integers, floats, strings).",
//             "Basic input and output using input() and print().",
//             "Simple arithmetic operations."
//           ],
//         },
//         {
//           week: 2,
//           title: "Control Structures",
//           lessons: [
//             "if, elif, and else statements.",
//             "Logical operators: and, or, not.",
//             "Comparison operators: ==, !=, <, >, <=, >=.",
//             "Practice: Write simple programs that use conditional statements (e.g., even/odd number check, largest of three numbers).",
//           ],
//         },
//         {
//           week: 3,
//           title: "Loops",
//           lessons: [
//             "for loop with range().",
//             "Looping over lists, strings, and other sequences.",
//             "Basic while loop and using break and continue statements.",
//             "Practice: Write programs that use loops (e.g., sum of numbers, factorial, Fibonacci sequence).",
//           ],
//         },
//         {
//           week: 4,
//           title: "Functions",
//           lessons: [
//             "def keyword, function parameters, and return values.",
//             "Understanding scope (local vs global variables).",
//             "Practice: Create functions for basic tasks like calculating the area of a circle, checking prime numbers, etc.",
//           ],
//         },
//         {
//           week: 5,
//           title: "Data Structures – Lists",
//           lessons: [
//             "Creating lists, accessing elements, slicing.",
//             "List methods (append(), remove(), pop(), sort(), reverse()).",
//             "Practice: Create and manipulate lists (e.g., adding/removing items, sorting).",
//           ],
//         },
//         {
//           week: 6,
//           title: "Data Structures - Tuples and Dictionaries",
//           lessons: [
//             "Creating and accessing tuples.",
//             "Differences between lists and tuples.",
//             "Creating and accessing dictionaries (key-value pairs).",
//             "Dictionary methods (keys(), values(), items()).",
//             "Practice: Write programs that use tuples and dictionaries (e.g., storing student grades or inventory items).",
//           ],
//         },
//         {
//           week: 7,
//           title: "String Manipulation",
//           lessons: [
//             "String indexing and slicing.",
//             "String methods (upper(), lower(), strip(), replace(), split(), join()).",
//             "Practice: Write programs that manipulate strings (e.g., palindrome checker, word counter).",
//           ],
//         },
//         {
//           week: 8,
//           title: "File Handling",
//           lessons: [
//             "Open a file, read contents, write to files (open(), read(), write()).",
//             "Closing a file and file modes (r, w, a).",
//             "Practice: Create a simple program that reads from a text file, processes its data, and writes results to another file.",
//           ],
//         },
//         {
//           week: 9,
//           title: "Exception Handling",
//           lessons: [
//             "try, except, else, and finally.",
//             "Raising exceptions with raise.",
//             "Practice: Write programs that handle common errors (e.g., division by zero, file not found).",
//           ],
//         },
//         {
//           week: 10,
//           title: "Final Project",
//           lessons: [
//             "Basic calculator.",
//             "To-Do list application.",
//             "Number guessing game.",
//             "Simple text-based quiz.",
//           ],
//         },
//       ];      
//       case 3: // Manual Testing
//         return [
//           {
//             week: 1,
//             title: "Introduction to Testing",
//             lessons: [
//               "Testing Basics",
//               "Testing Types",
//               "Manual Testing Process",
//               "Tools",
//             ],
//           },
//           {
//             week: 2,
//             title: "Core Concepts",
//             lessons: [
//               "Test Case Design",
//               "Test Execution",
//               "Bug Reporting",
//               "Test Plans",
//             ],
//           },
//           {
//             week: 3,
//             title: "Advanced Topics",
//             lessons: [
//               "Exploratory Testing",
//               "Regression Testing",
//               "Performance Testing",
//               "Usability Testing",
//             ],
//           },
//           {
//             week: 4,
//             title: "Project Work",
//             lessons: [
//               "Final Test Plan",
//               "Test Execution",
//               "Bug Reporting",
//               "Test Documentation",
//             ],
//           },
//         ];
//       case 4: // Automation Testing (Java)
//         return [
//           {
//             week: 1,
//             title: "Introduction to Automation",
//             lessons: [
//               "Automation Basics",
//               "Java Setup",
//               "JUnit Framework",
//               "Selenium Setup",
//             ],
//           },
//           {
//             week: 2,
//             title: "Core Concepts",
//             lessons: ["WebDriver", "Locators", "Assertions", "TestNG"],
//           },
//           {
//             week: 3,
//             title: "Advanced Topics",
//             lessons: [
//               "Data-Driven Testing",
//               "Page Object Model",
//               "Cross-browser Testing",
//               "CI/CD Integration",
//             ],
//           },
//           {
//             week: 4,
//             title: "Project Work",
//             lessons: [
//               "Final Project",
//               "Test Script Development",
//               "Test Reporting",
//               "CI Integration",
//             ],
//           },
//         ];
//       case 5: // API Automation Testing (Java with Rest Assured)
//         return [
//           {
//             week: 1,
//             title: "Introduction to APIs",
//             lessons: [
//               "What is an API?",
//               "HTTP Basics",
//               "Postman Setup",
//               "Rest Assured Setup",
//             ],
//           },
//           {
//             week: 2,
//             title: "Core Concepts",
//             lessons: [
//               "API Requests",
//               "API Assertions",
//               "Authentication",
//               "Handling Responses",
//             ],
//           },
//           {
//             week: 3,
//             title: "Advanced Topics",
//             lessons: [
//               "API Documentation",
//               "Mocking APIs",
//               "Performance Testing",
//               "API Security",
//             ],
//           },
//           {
//             week: 4,
//             title: "Project Work",
//             lessons: [
//               "API Automation Project",
//               "Test Automation Strategy",
//               "Data-Driven API Testing",
//               "CI/CD for API Tests",
//             ],
//           },
//         ];
//       case 6: // Automation Testing (Python)
//         return [
//           {
//             week: 1,
//             title: "Introduction to Python Automation",
//             lessons: [
//               "What is automation?",
//               "Benefits of automation with Python",
//               "Installing Python and setting up the environment",
//               "Introduction to Jupyter Notebook & VS Code",
//             ],
//           },
//           {
//             week: 2,
//             title: " Python Basics (Quick Recap)",
//             lessons: [
//               "Variables, data types, and operators",
//               "Conditional statements (if-else)",
//               "Loops (for, while)",
//               "Functions and modules",
//               "File handling (reading/writing files)",
//             ],
//           },
//           {
//             week: 3,
//             title: " Working with Libraries for Automation",
//             lessons: [
//               "os and shutil (File & directory operations)",
//               "sys and argparse (Command-line arguments)",
//               "time and schedule (Task scheduling)",
//               "logging (Logging activities)",
//             ],
//           },
//           {
//             week: 4,
//             title: " Automating File & Folder Operations",
//             lessons: [
//               "Creating, renaming, deleting files & folders",
//               "Organizing files based on extensions",
//               "Searching and modifying file contents",
              
//             ],
//           },
//           {
//             week: 5,
//             title: " Web Scraping & Browser Automation",
//             lessons: [
//               "Introduction to web scraping",
//               "Using requests and BeautifulSoup",
//               "Automating web browsers with selenium",
//               "Handling forms, buttons, and web elements",
              
//             ],
//           },
//           {
//             week: 6,
//             title: " Automating Emails & Messaging",
//             lessons: [
//               "Sending emails using smtplib",
//               "Reading emails using imaplib",
//               "Automating WhatsApp & Telegram messages",
              
//             ],
//           },
//           {
//             week: 7,
//             title: " Automating Excel, PDFs, and Documents",
//             lessons: [
//               "Working with Excel using openpyxl & pandas",
//               "Reading and modifying PDFs using PyPDF2",
//               "Automating Word documents using python-docx",
              
//             ],
//           },
//           {
//             week: 8,
//             title: " Automating Data Extraction & APIs",
//             lessons: [
//               "Fetching data from APIs using requests",
//               "Parsing JSON & XML data",
//               "Working with authentication & API keys",
              
//             ],
//           },
//           {
//             week: 9,
//             title: " Automating Desktop Applications",
//             lessons: [
//               "Using pyautogui for mouse & keyboard automation",
//               "Automating GUI interactions",
//               "Handling screenshots and alerts",
              
//             ],
//           },
//           {
//             week: 10,
//             title: "  Task Scheduling & Deployment",
//             lessons: [
//               "Automating scripts using cron (Linux) or Task Scheduler (Windows)",
//               "Creating executable scripts (pyinstaller)",
//               "Deploying automation scripts on the cloud",
              
//             ],
//           },
//         ];
//       case 7: // Product Management
//       return [
//         {
//           week: 1,
//           title: "Introduction to Product Management",
//           lessons: [
//             "What is Product Management?",
//             "Role & Responsibilities of a Product Manager",
//             "Product vs. Project Management",
//             "Key Skills Required for a PM",
//           ],
//         },
//         {
//           week: 2,
//           title: "Product Lifecycle & Strategy",
//           lessons: [
//             "Product Development Lifecycle (Idea → Launch → Growth → Maturity → Decline)",
//             "Types of Products (B2B, B2C, SaaS, Hardware, etc.)",
//             "Understanding Market & Customer Needs",
//             "Competitive Analysis & Market Research",
//           ],
//         },
//         {
//           week: 3,
//           title: "Product Discovery & Ideation",
//           lessons: [
//             "Problem-Solving & Design Thinking",
//             "User Research & Customer Interviews",
//             "Defining Product Vision & Strategy",
//             "Brainstorming & Idea Validation Techniques",
//           ],
//         },
//         {
//           week: 4,
//           title: "Roadmap & Prioritization",
//           lessons: [
//             "Building a Product Roadmap",
//             "Prioritization Frameworks (MoSCoW, RICE, Kano Model)",
//             "Aligning Roadmaps with Business Goals",
//           ],
//         },
//         {
//           week: 5,
//           title: "Agile & Product Development Process",
//           lessons: [
//             "Agile, Scrum, & Kanban Methodologies",
//             "Writing User Stories & Acceptance Criteria",
//             "Working with Engineering & Design Teams",
//             "MVP (Minimum Viable Product) Approach",
//           ],
//         },
//         {
//           week: 6,
//           title: "Metrics & Data-Driven Decision Making",
//           lessons: [
//             "Key Product Metrics (DAU, MAU, Retention, Churn, NPS)",
//             "A/B Testing & Experimentation",
//             "Analytics Tools (Google Analytics, Mixpanel, Amplitude)",
//           ],
//         },
//         {
//           week: 7,
//           title: "Go-To-Market & Product Launch",
//           lessons: [
//             "Product Positioning & Messaging",
//             "Creating a GTM Strategy",
//             "Sales & Marketing Alignment",
//             "Post-Launch Monitoring & Feedback Loop",
//           ],
//         },
//         {
//           week: 8,
//           title: "Stakeholder & Cross-Functional Collaboration",
//           lessons: [
//             "Working with Engineering, Design, Sales, and Marketing",
//             "Effective Communication & Storytelling for PMs",
//             "Managing Up & Stakeholder Buy-In",
//           ],
//         },
//         {
//           week: 9,
//           title: "Case Studies & Practical Applications",
//           lessons: [
//             "Analyzing Successful & Failed Products",
//             "Hands-on Product Case Studies",
//             "Building a Mini Product Roadmap as a Project",
//           ],
//         },
//         {
//           week: 10,
//           title: "Career & Growth in Product Management",
//           lessons: [
//             "How to Land a Product Management Role",
//             "Resume & Interview Preparation",
//             "PM Career Paths & Specializations (Growth PM, Technical PM, etc.)",
//           ],
//         },
//       ];
      
//       case 8: // Business Analyst
//       return [
//         {
//           week: 1,
//           title: "Introduction to Business Analysis",
//           lessons: [
//             "Definition and Importance of Business Analysis",
//             "Role of a Business Analyst",
//             "Business Analysis Process Overview",
//           ],
//         },
//         {
//           week: 2,
//           title: "Business Analysis Frameworks & Approaches",
//           lessons: [
//             "Business Analysis Life Cycle",
//             "Agile vs. Waterfall Methodologies",
//             "Business Process Management",
//           ],
//         },
//         {
//           week: 3,
//           title: "Stakeholder Analysis & Management",
//           lessons: [
//             "Identifying Stakeholders",
//             "Stakeholder Communication Strategies",
//             "Managing Stakeholder Expectations",
//           ],
//         },
//         {
//           week: 4,
//           title: "Requirement Gathering & Elicitation Techniques",
//           lessons: [
//             "Interviews & Surveys",
//             "Workshops & Brainstorming",
//             "Observation & Prototyping",
//           ],
//         },
//         {
//           week: 5,
//           title: "Requirements Analysis & Documentation",
//           lessons: [
//             "Types of Requirements (Business, Functional, Non-Functional)",
//             "Use Case Diagrams & User Stories",
//             "Business Requirement Document (BRD)",
//             "Functional Requirement Specification (FRS)",
//           ],
//         },
//         {
//           week: 6,
//           title: "Business Process Modeling & Improvement",
//           lessons: [
//             "Process Flow Diagrams",
//             "SWOT Analysis",
//             "GAP Analysis",
//             "As-Is vs. To-Be Process Mapping",
//           ],
//         },
//         {
//           week: 7,
//           title: "Data Analysis & Decision Making",
//           lessons: [
//             "Basics of Data Analysis",
//             "Data Visualization Techniques",
//             "Key Performance Indicators (KPIs)",
//           ],
//         },
//         {
//           week: 8,
//           title: "Tools & Techniques for Business Analysis",
//           lessons: [
//             "Microsoft Excel, Power BI, Tableau",
//             "UML Diagrams, BPMN Notation",
//             "Wireframing Tools (Balsamiq, Axure)",
//           ],
//         },
//         {
//           week: 9,
//           title: "Software Development & Testing Basics",
//           lessons: [
//             "Software Development Life Cycle (SDLC)",
//             "User Acceptance Testing (UAT)",
//             "Quality Assurance & Validation",
//           ],
//         },
//         {
//           week: 10,
//           title: "Communication & Soft Skills for Business Analysts",
//           lessons: [
//             "Effective Communication & Presentation Skills",
//             "Negotiation & Conflict Resolution",
//             "Documentation & Report Writing",
//           ],
//         },
//       ];
//       case 9: // Mobile App Development
//       return [
//         {
//           week: 1,
//           title: "Introduction to Mobile Development",
//           lessons: [
//             "Overview of Mobile Development.",
//             "Native vs. Hybrid vs. Cross-Platform Development.",
//             "Popular Mobile Operating Systems (Android, iOS).",
//             "Mobile Development Tools & IDEs (Android Studio, Xcode, VS Code)."
//           ],
//         },
//         {
//           week: 2,
//           title: "Programming Basics",
//           lessons: [
//             "Introduction to Programming Languages (Java, Kotlin, Swift, Dart, JavaScript).",
//             "Object-Oriented Programming (OOP) Concepts.",
//             "Basic Data Structures & Algorithms."
//           ],
//         },
//         {
//           week: 3,
//           title: "Android Development Basics",
//           lessons: [
//             "Introduction to Android Studio & Emulator Setup.",
//             "Understanding Android Project Structure.",
//             "Activities, Fragments, and Intents.",
//             "UI Components & Layouts (XML, ConstraintLayout, RecyclerView).",
//             "Event Handling & User Interaction.",
//             "Working with APIs (Retrofit/Volley)."
//           ],
//         },
//         {
//           week: 4,
//           title: "iOS Development Basics",
//           lessons: [
//             "Introduction to Xcode & iOS Project Structure.",
//             "Swift Basics.",
//             "Storyboards & UI Design.",
//             "ViewControllers, Navigation, and TableViews.",
//             "Networking & API Calls."
//           ],
//         },
//         {
//           week: 5,
//           title: "Cross-Platform Development (Optional)",
//           lessons: [
//             "Introduction to Flutter & Dart.",
//             "Introduction to React Native.",
//             "Setting up Environment for Cross-Platform Development.",
//             "Building UI & Handling User Interaction.",
//             "State Management."
//           ],
//         },
//         {
//           week: 6,
//           title: "Mobile Database & Storage",
//           lessons: [
//             "Shared Preferences & Local Storage.",
//             "SQLite & Room Database (Android).",
//             "Core Data (iOS).",
//             "Firebase Realtime Database & Firestore.",
//             "Offline Data Handling."
//           ],
//         },
//         {
//           week: 7,
//           title: "Advanced Mobile Development Concepts",
//           lessons: [
//             "Background Processes & Multithreading.",
//             "Push Notifications (FCM & APNs).",
//             "Location Services & Google Maps API.",
//             "Camera & Media Integration.",
//             "Sensors & Hardware Access."
//           ],
//         },
//         {
//           week: 8,
//           title: "App Deployment & Maintenance",
//           lessons: [
//             "App Signing & Security Basics.",
//             "Publishing Apps on Google Play Store & Apple App Store.",
//             "App Performance Optimization.",
//             "Debugging & Crash Reporting.",
//             "Continuous Integration & Deployment (CI/CD)."
//           ],
//         },
//         {
//           week: 9,
//           title: "UI/UX & Best Practices",
//           lessons: [
//             "Mobile Design Principles.",
//             "Material Design (Android) & Human Interface Guidelines (iOS).",
//             "Accessibility & Responsive Design.",
//             "Testing Strategies (Unit Testing, UI Testing)."
//           ],
//         }
//       ];      
//       case 10: // Data Science and Machine Learning
//       return [
//         {
//           week: 1,
//           title: "Introduction to Data Science & Machine Learning",
//           lessons: [
//             "What is Data Science?",
//             "Applications of Data Science & ML",
//             "Difference between AI, ML, and Data Science",
//             "Basics of Python/R for Data Science",
//           ],
//         },
//         {
//           week: 2,
//           title: "Mathematics & Statistics for Data Science",
//           lessons: [
//             "Linear Algebra (Vectors, Matrices, Eigenvalues)",
//             "Probability & Statistics (Mean, Variance, Probability Distributions)",
//             "Calculus (Derivatives, Gradient Descent)",
//           ],
//         },
//         {
//           week: 3,
//           title: "Data Preprocessing & Exploration",
//           lessons: [
//             "Data Collection & Cleaning",
//             "Handling Missing Values",
//             "Exploratory Data Analysis (EDA)",
//             "Data Visualization (Matplotlib, Seaborn)",
//           ],
//         },
//         {
//           week: 4,
//           title: "Machine Learning Basics",
//           lessons: [
//             "Types of Machine Learning (Supervised, Unsupervised, Reinforcement)",
//             "Train-Test Split & Cross-Validation",
//             "Performance Metrics (Accuracy, Precision, Recall, F1 Score)",
//           ],
//         },
//         {
//           week: 5,
//           title: "Supervised Learning",
//           lessons: [
//             "Regression (Linear, Polynomial, Logistic)",
//             "Classification (Decision Trees, Random Forest, SVM, Naïve Bayes)",
//             "Evaluation Metrics (MSE, RMSE, Confusion Matrix)",
//           ],
//         },
//         {
//           week: 6,
//           title: "Unsupervised Learning",
//           lessons: [
//             "Clustering (K-Means, Hierarchical, DBSCAN)",
//             "Dimensionality Reduction (PCA, t-SNE)",
//           ],
//         },
//         {
//           week: 7,
//           title: "Feature Engineering & Model Tuning",
//           lessons: [
//             "Feature Scaling & Encoding",
//             "Feature Selection Techniques",
//             "Hyperparameter Tuning (Grid Search, Random Search)",
//           ],
//         },
//         {
//           week: 8,
//           title: "Deep Learning Basics (Optional for Beginners)",
//           lessons: [
//             "Introduction to Neural Networks",
//             "Basics of TensorFlow/PyTorch",
//             "Simple ANN Model",
//           ],
//         },
//         {
//           week: 9,
//           title: "Model Deployment & Real-World Applications",
//           lessons: [
//             "Introduction to Model Deployment (Flask, FastAPI)",
//             "Basics of Cloud Platforms (AWS, Google Cloud)",
//             "Real-World ML Case Studies",
//           ],
//         },
//       ];
      
//       case 11: // DevOps and Cloud Computing
//       return [
//         {
//           week: 1,
//           title: "Introduction to DevOps",
//           lessons: [
//             "What is DevOps?",
//             "DevOps Lifecycle & Benefits",
//             "DevOps vs. Traditional IT",
//             "Key DevOps Principles (CI/CD, Automation, Collaboration)",
//           ],
//         },
//         {
//           week: 2,
//           title: "Linux Fundamentals",
//           lessons: [
//             "Basic Linux Commands",
//             "File System, Users, and Permissions",
//             "Networking Basics (SSH, SCP, Firewalls)",
//             "Process Management",
//           ],
//         },
//         {
//           week: 3,
//           title: "Version Control with Git",
//           lessons: [
//             "Git Basics (Init, Clone, Add, Commit, Push, Pull)",
//             "Branching and Merging",
//             "GitHub/GitLab/Bitbucket Basics",
//             "Git Workflow (Git Flow, Forking, Pull Requests)",
//           ],
//         },
//         {
//           week: 4,
//           title: "Continuous Integration & Continuous Deployment (CI/CD)",
//           lessons: [
//             "Introduction to CI/CD Pipelines",
//             "Jenkins Basics (Installation, Jobs, Pipelines)",
//             "GitHub Actions, GitLab CI/CD",
//             "Artifact Management (Nexus, Artifactory)",
//           ],
//         },
//         {
//           week: 5,
//           title: "Containerization with Docker",
//           lessons: [
//             "What is Docker & Why Use It?",
//             "Docker Installation & Setup",
//             "Docker Images & Containers",
//             "Docker Compose",
//             "Docker Networking & Storage",
//           ],
//         },
//         {
//           week: 6,
//           title: "Container Orchestration with Kubernetes",
//           lessons: [
//             "Kubernetes Architecture (Master, Nodes, Pods, Services)",
//             "Deploying Applications on Kubernetes",
//             "Kubernetes Networking & Storage",
//             "Helm Charts Basics",
//             "Monitoring Kubernetes (Prometheus, Grafana)",
//           ],
//         },
//         {
//           week: 7,
//           title: "Infrastructure as Code (IaC)",
//           lessons: [
//             "Introduction to IaC",
//             "Terraform Basics (Providers, Modules, State Management)",
//             "Ansible Basics (Playbooks, Roles)",
//             "CloudFormation (AWS Specific)",
//           ],
//         },
//         {
//           week: 8,
//           title: "Cloud Computing Basics",
//           lessons: [
//             "What is Cloud Computing?",
//             "Cloud Service Models (IaaS, PaaS, SaaS)",
//             "Cloud Providers Overview (AWS, Azure, GCP)",
//           ],
//         },
//         {
//           week: 9,
//           title: "AWS Fundamentals (or Azure/GCP)",
//           lessons: [
//             "AWS Account Setup & IAM",
//             "EC2, S3, RDS, VPC Basics",
//             "Load Balancers & Auto Scaling",
//             "Serverless Computing (Lambda, API Gateway)",
//             "Cloud Monitoring (CloudWatch, CloudTrail)",
//           ],
//         },
//         {
//           week: 10,
//           title: "Logging & Monitoring",
//           lessons: [
//             "Log Management (ELK Stack: Elasticsearch, Logstash, Kibana)",
//             "Monitoring Tools (Prometheus, Grafana, Datadog)",
//           ],
//         },
//         {
//           week: 11,
//           title: "Security & Compliance in DevOps",
//           lessons: [
//             "DevSecOps Fundamentals",
//             "Security Best Practices in CI/CD",
//             "Container & Cloud Security",
//           ],
//         },
//         {
//           week: 12,
//           title: "Final Project & Best Practices",
//           lessons: [
//             "Build a CI/CD Pipeline for an Application",
//             "Deploy a Full-Stack App on Kubernetes",
//             "Automate Infrastructure with Terraform",
//           ],
//         },
//       ];
      
//       case 12: // Cybersecurity
//       return [
//         {
//           week: 1,
//           title: "Introduction to Cybersecurity",
//           lessons: [
//             "Importance of cybersecurity",
//             "Cyber threats and risks",
//             "Cybersecurity principles (Confidentiality, Integrity, Availability - CIA Triad)",
//           ],
//         },
//         {
//           week: 2,
//           title: "Common Cyber Threats and Attacks",
//           lessons: [
//             "Malware (Viruses, Ransomware, Trojans, Worms)",
//             "Phishing and Social Engineering",
//             "Denial of Service (DoS) and Distributed Denial of Service (DDoS)",
//             "Man-in-the-Middle (MITM) attacks",
//             "SQL Injection, Cross-Site Scripting (XSS)",
//             "Insider threats",
//           ],
//         },
//         {
//           week: 3,
//           title: "Network Security Basics",
//           lessons: [
//             "Basics of networking (IP, TCP/IP, HTTP/HTTPS, DNS)",
//             "Firewalls, VPNs, and Intrusion Detection/Prevention Systems (IDS/IPS)",
//             "Secure network protocols",
//           ],
//         },
//         {
//           week: 4,
//           title: "Security Best Practices",
//           lessons: [
//             "Strong passwords and authentication (MFA)",
//             "Secure browsing habits",
//             "Data encryption basics",
//             "Software updates and patch management",
//           ],
//         },
//         {
//           week: 5,
//           title: "Cybersecurity Tools & Technologies",
//           lessons: [
//             "Antivirus and anti-malware software",
//             "SIEM (Security Information and Event Management) tools",
//             "Penetration testing and vulnerability scanning",
//             "Wireshark (network traffic analysis)",
//           ],
//         },
//         {
//           week: 6,
//           title: "Ethical Hacking and Penetration Testing Basics",
//           lessons: [
//             "Ethical hacking concepts and frameworks",
//             "Kali Linux and basic penetration testing tools",
//             "Introduction to Metasploit",
//           ],
//         },
//         {
//           week: 7,
//           title: "Cyber Laws and Compliance",
//           lessons: [
//             "Overview of cybersecurity laws (GDPR, CCPA, HIPAA, etc.)",
//             "Compliance frameworks (ISO 27001, NIST, PCI-DSS)",
//             "Cyber ethics and responsible hacking",
//           ],
//         },
//         {
//           week: 8,
//           title: "Incident Response and Disaster Recovery",
//           lessons: [
//             "Steps in incident response",
//             "Backup and disaster recovery strategies",
//             "Business continuity planning",
//           ],
//         },
//         {
//           week: 9,
//           title: "Career Paths in Cybersecurity",
//           lessons: [
//             "Roles in cybersecurity (SOC analyst, Penetration tester, Security engineer)",
//             "Certifications overview (CompTIA Security+, CEH, CISSP)",
//           ],
//         },
//       ];
      
//       case 13: // UI/UX Development
//         return [
//           {
//             week: 1,
//             title: "Introduction to UI/UX",
//             lessons: [
//               "UI vs UX",
//               "User Research",
//               "Wireframing",
//               "Prototyping",
//             ],
//           },
//           {
//             week: 2,
//             title: "Core Concepts",
//             lessons: [
//               "User Interface Design",
//               "Interaction Design",
//               "Usability Testing",
//               "Color Theory",
//             ],
//           },
//           {
//             week: 3,
//             title: "Advanced Topics",
//             lessons: [
//               "Responsive Design",
//               "Animation in UI",
//               "Design Systems",
//               "UI Frameworks (React, Angular)",
//             ],
//           },
//           {
//             week: 4,
//             title: "Project Work",
//             lessons: [
//               "Design a Full Project",
//               "Final Presentation",
//               "UI/UX Portfolio",
//             ],
//           },
//         ];
//       case 14: // Full Stack Development
//         return [
//           {
//             week: 1,
//             title: "Introduction to Full Stack Development",
//             lessons: [
//               "Frontend Basics",
//               "Backend Basics",
//               "Version Control",
//               "Setting up a Development Environment",
//             ],
//           },
//           {
//             week: 2,
//             title: "Core Concepts",
//             lessons: [
//               "HTML, CSS, JavaScript",
//               "Databases (SQL/NoSQL)",
//               "APIs",
//               "Frontend Frameworks (React, Angular)",
//             ],
//           },
//           {
//             week: 3,
//             title: "Advanced Topics",
//             lessons: [
//               "Authentication",
//               "State Management",
//               "Deploying Full Stack Apps",
//               "Microservices",
//             ],
//           },
//           {
//             week: 4,
//             title: "Project Work",
//             lessons: [
//               "Build a Full Stack Application",
//               "Final Exam",
//               "Deployment and CI/CD",
//             ],
//           },
//         ];
//       default:
//         return [];
//     }
//   };

//   return (
//     <>
//       <Box
//         minHeight="100vh"
//         paddingTop={20}
//         bg={bgColor}
//         color={useColorModeValue("teal.800", "white")}
//       >
//         <Helmet>
//           <title>{course.title} | Chamber of Learning</title>
//           <meta name="description" content={course.description} />
//         </Helmet>
//         <Container maxW="container.xl" py={{ base: 4, md: 8 }}>
//           <MotionBox
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             {/* Hero Section */}
//             <Box
//               bg={useColorModeValue("teal.900", "teal.500")}
//               color={useColorModeValue("white", "teal.900")}
//               borderRadius="lg"
//               p={{ base: 4, md: 8 }}
//               mb={{ base: 6, md: 8 }}
//               position="relative"
//               overflow="hidden"
//               boxShadow="xl"
//             >
//               <Box
//                 position="absolute"
//                 top="-20%"
//                 right="-10%"
//                 width="300px"
//                 height="300px"
//                 borderRadius="full"
//                 overflow="hidden"
//               >
//                 <Image
//                   src="../assets/img (11).jpeg"
//                   alt="Background image"
//                   objectFit="cover"
//                   width="100%"
//                   height="100%"
//                   filter="blur(60px)"
//                 />
//               </Box>

//               <Grid
//                 templateColumns={{ base: "1fr", md: "2fr 1fr" }}
//                 gap={{ base: 4, md: 8 }}
//                 alignItems="center"
//               >
//                 <GridItem>
//                   <Heading
//                     as="h1"
//                     fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
//                     mb={{ base: 2, md: 4 }}
//                     textShadow="2px 2px 4px rgba(0,0,0,0.4)"
//                   >
//                     {course.title}
//                   </Heading>
//                   <Text
//                     fontSize={{ base: "md", md: "lg", lg: "xl" }}
//                     mb={{ base: 4, md: 6 }}
//                     textShadow="1px 1px 2px rgba(0,0,0,0.2)"
//                   >
//                     {course.description}
//                   </Text>
//                   <HStack spacing={{ base: 2, md: 4 }}>
		  	            
//                                             {/* Enroll Now */}<EnrollmentForm/> 
                        
//                     <Button
//                       bg="white   "
//                       size={{ base: "sm", md: "md" }}
//                       onClick={onVideoOpen}
//                       leftIcon={<FaPlay />}
//                     >
//                       Watch Preview
//                     </Button>
//                   </HStack>
//                 </GridItem>
//                 <GridItem>
//                   <PriceDisplay course={course} />
//                 </GridItem>
//               </Grid>
//             </Box>

//             <Button
//               leftIcon={<FaArrowLeft />}
//               onClick={() => navigate(-1)}
//               mb={{ base: 4, md: 8 }}
//               variant="outline"
//               colorScheme="orange"
//             >
//               Back to Courses
//             </Button>

//             {/* Main Content */}
//             <Grid
//               templateColumns={{ base: "1fr", lg: "2fr 1fr" }}
//               gap={{ base: 4, md: 6, lg: 8 }}
//             >
//               <GridItem>
//                 {/* About Section */}
//                 <Card mb={{ base: 4, md: 8 }}>
//                   <CardHeader>
//                     <Heading size={{ base: "md", md: "lg" }}>
//                       About This Course
//                     </Heading>
//                   </CardHeader>
//                   <CardBody>
//                     <Text fontSize={{ base: "sm", md: "md" }}>
//                       This comprehensive course is designed to take you from
//                       beginner to proficient in {course.title}. Whether you're
//                       looking to start a new career or enhance your existing
//                       skills, this course provides the knowledge and hands-on
//                       experience you need to succeed in the field of{" "}
//                       {course.title.toLowerCase()}.
//                     </Text>
//                   </CardBody>
//                 </Card>

//                 {/* Course Content */}
//                 {/* <Card mb={{ base: 4, md: 8 }}>
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
//                                                                     <ListIcon as={FaRegFileAlt} color="teal.900" />
//                                                                     Lesson {lessonIndex + 1}: {lesson}
//                                                                 </ListItem>
//                                                             ))}
//                                                         </List>
//                                                     </AccordionPanel>
//                                                 </AccordionItem>
//                                             ))}
//                                         </Accordion>
//                                     </CardBody>
//                                 </Card> */}
//                 <Card mb={{ base: 4, md: 8 }}>
//                   <CardHeader>
//                     <Heading size={{ base: "md", md: "lg" }}>
//                       Course Content
//                     </Heading>
//                   </CardHeader>
//                   <CardBody>
//                     <Accordion allowMultiple>
//                       {getCourseContent(course.id).map((week, index) => (
//                         <AccordionItem key={index} border="none">
//                           <h2>
//                             <AccordionButton
//                               _expanded={{
//                                 bg: "gray.100",
//                                 color: "teal.600",
//                                 transition: "all 0.3s ease-in-out",
//                               }}
//                             >
//                               <Box flex="1" textAlign="left">
//                                 Week {week.week}: {week.title}
//                               </Box>
//                               <AccordionIcon />
//                             </AccordionButton>
//                           </h2>
//                           <motion.div
//                             initial={{ height: 0, opacity: 0 }}
//                             animate={{ height: "auto", opacity: 1 }}
//                             exit={{ height: 0, opacity: 0 }}
//                             transition={{
//                               duration: 0.3,
//                               ease: "easeInOut",
//                               delay: 0.1,
//                             }} // 300ms smooth transition with slight delay
//                             style={{ overflow: "hidden" }}
//                           >
//                             <AccordionPanel pb={4}>
//                               <List spacing={2}>
//                                 {week.lessons.map((lesson, lessonIndex) => (
//                                   <ListItem key={lessonIndex}>
//                                     <ListIcon
//                                       as={FaRegFileAlt}
//                                       color="teal.900"
//                                     />
//                                     Lesson {lessonIndex + 1}: {lesson}
//                                   </ListItem>
//                                 ))}
//                               </List>
//                             </AccordionPanel>
//                           </motion.div>
//                         </AccordionItem>
//                       ))}
//                     </Accordion>
//                   </CardBody>
//                 </Card>

//                 {/* Certificate Section */}
//                 <CertificateSection />

//                 {/* Benefits Section */}
//                 <Card mb={{ base: 4, md: 8 }}>
//                   <CardHeader>
//                     <Heading size={{ base: "md", md: "lg" }}>
//                       Course Benefits
//                     </Heading>
//                   </CardHeader>
//                   <CardBody>
//                     <SimpleGrid
//                       columns={{ base: 1, md: 2 }}
//                       spacing={{ base: 4, md: 6 }}
//                     >
//                       {[
//                         {
//                           icon: FaUserCog,
//                           title: "Expert-Led Instruction",
//                           description:
//                             "Learn from industry professionals with years of experience.",
//                         },
//                         {
//                           icon: FaCogs,
//                           title: "Hands-On Projects",
//                           description:
//                             "Apply your skills to real-world scenarios and build a portfolio.",
//                         },
//                         {
//                           icon: FaUsers,
//                           title: "Community Support",
//                           description:
//                             "Join a community of learners and get support from peers and instructors.",
//                         },
//                         {
//                           icon: FaCertificate,
//                           title: "Industry-Recognized Certificate",
//                           description:
//                             "Earn a certificate valued by top employers in the field.",
//                         },
//                       ].map((benefit, index) => (
//                         <VStack
//                           key={index}
//                           align="start"
//                           p={4}
//                           borderWidth={1}
//                           borderRadius="md"
//                         >
//                           <benefit.icon
//                             size="2em"
//                             color={useColorModeValue("teal.900", "teal.800")}
//                           />
//                           <Heading size={{ base: "sm", md: "md" }}>
//                             {benefit.title}
//                           </Heading>
//                           <Text fontSize={{ base: "sm", md: "md" }}>
//                             {benefit.description}
//                           </Text>
//                         </VStack>
//                       ))}
//                     </SimpleGrid>
//                   </CardBody>
//                 </Card>

//                 {/* Requirements Section */}
//                 <Card mb={{ base: 4, md: 8 }}>
//                   <CardHeader>
//                     <Heading size={{ base: "md", md: "lg" }}>
//                       Course Requirements
//                     </Heading>
//                   </CardHeader>
//                   <CardBody>
//                     <List spacing={3}>
//                       <ListItem>
//                         <ListIcon as={FaCheckCircle} color="teal.900" />
//                         {course.prerequisites}
//                       </ListItem>
//                       <ListItem>
//                         <ListIcon as={FaCheckCircle} color="teal.900" />
//                         Access to a computer with internet connection
//                       </ListItem>
//                       <ListItem>
//                         <ListIcon as={FaCheckCircle} color="teal.900" />
//                         Dedication to complete assignments and projects
//                       </ListItem>
//                       <ListItem>
//                         <ListIcon as={FaCheckCircle} color="teal.900" />
//                         Willingness to participate in discussions and peer
//                         reviews
//                       </ListItem>
//                     </List>
//                   </CardBody>
//                 </Card>

//                 {/* Testimonials Section */}
//                 <Card mb={{ base: 4, md: 8 }}>
//                   <CardHeader>
//                     <Heading size={{ base: "md", md: "lg" }}>
//                       Student Testimonials
//                     </Heading>
//                   </CardHeader>
//                   <CardBody>
//                     <VStack spacing={{ base: 4, md: 6 }}>
//                       {[
//                         {
//                           name: "Ava",
//                           role: "UX/UI Designer",
//                           content:
//                             "The design course has completely redefined my approach to user-centered design. I now create more intuitive and impactful interfaces.",
//                         },
//                         {
//                           name: "Liam",
//                           role: "Backend Developer",
//                           content:
//                             "The full-stack development program was exactly what I needed to upgrade my skills. It provided the perfect mix of theory and practical experience.",
//                         },
//                         {
//                           name: "Sophie",
//                           role: "Digital Marketer",
//                           content:
//                             "The digital marketing course gave me the tools to boost client engagement and increase conversions. I’m now managing successful campaigns with ease.",
//                         },
//                       ].map((testimonial, index) => (
//                         <Box
//                           key={index}
//                           p={5}
//                           shadow="md"
//                           borderWidth="1px"
//                           borderRadius="md"
//                           width="100%"
//                         >
//                           <Flex>
//                             <Avatar
//                               name={testimonial.name}
//                               src={`/placeholder.svg?height=50&width=50&text=${testimonial.name[0]}`}
//                               mr={4}
//                             />
//                             <Box>
//                               <Heading size={{ base: "sm", md: "md" }}>
//                                 {testimonial.name}
//                               </Heading>
//                               <Text
//                                 fontSize={{ base: "xs", md: "sm" }}
//                                 color="teal.500"
//                               >
//                                 {testimonial.role}
//                               </Text>
//                             </Box>
//                           </Flex>
//                           <Text
//                             mt={4}
//                             fontStyle="italic"
//                             fontSize={{ base: "sm", md: "md" }}
//                           >
//                             "{testimonial.content}"
//                           </Text>
//                         </Box>
//                       ))}
//                     </VStack>
//                   </CardBody>
//                 </Card>

//                 {/* FAQs Section */}
//                 {/* <Card mb={{ base: 4, md: 8 }}>
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
//                                                                     <FaQuestionCircle color={useColorModeValue('teal.500', 'teal.300')} />
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
//                                 </Card> */}
//               </GridItem>

//               {/* Sidebar */}
//               <GridItem>
//                 <Box position={{ base: "static", lg: "sticky" }} top="20px">
//                   <VStack spacing={{ base: 4, md: 6, lg: 8 }}>
//                     {/* Course Progress */}
//                     {/* <Card w="100%">
//                                             <CardBody>
//                                                 <Heading size={{ base: "sm", md: "md" }} mb={4}>Your Progress</Heading>
//                                                 <Progress value={progress} colorScheme="teal" size="lg" mb={2} />
//                                                 <Text textAlign="center" fontSize={{ base: "sm", md: "md" }}>{progress}% Complete</Text>
//                                                 <Button colorScheme="teal" width="100%" mt={4} size={{ base: "sm", md: "md" }} onClick={() => {
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
//                                         </Card> */}

//                     {/* Course Stats */}
//                     <Card w="100%">
//                       <CardBody>
//                         <Heading size={{ base: "sm", md: "md" }} mb={4}>
//                           Course Stats
//                         </Heading>
//                         <SimpleGrid columns={2} spacing={4}>
//                           <Stat>
//                             <StatLabel>Students</StatLabel>
//                             <StatNumber>1,234</StatNumber>
//                             <StatHelpText>
//                               <FaUsers /> Enrolled
//                             </StatHelpText>
//                           </Stat>
//                           <Stat>
//                             <StatLabel>Rating</StatLabel>
//                             <StatNumber>4.8</StatNumber>
//                             <StatHelpText>
//                               <FaStar /> 234 reviews
//                             </StatHelpText>
//                           </Stat>
//                           <Stat>
//                             <StatLabel>Last Updated</StatLabel>
//                             <StatNumber>Oct 2024</StatNumber>
//                             <StatHelpText>
//                               <FaClock /> Recent
//                             </StatHelpText>
//                           </Stat>
//                           <Stat>
//                             <StatLabel>Certificate</StatLabel>
//                             <StatNumber>Yes</StatNumber>
//                             <StatHelpText>
//                               <FaCertificate /> Included
//                             </StatHelpText>
//                           </Stat>
//                         </SimpleGrid>
//                       </CardBody>
//                     </Card>

//                     {/* Instructor Info */}
//                     <Card w="100%">
//                       <CardBody>
//                         <Heading size={{ base: "sm", md: "md" }} mb={4}>
//                           Instructor
//                         </Heading>
//                         <HStack spacing={4}>
//                           <Avatar
//                             size={{ base: "md", md: "xl" }}
//                             name="Mani"
//                             src="/placeholder.svg?height=100&width=100&text=JD"
//                           />
//                           <VStack align="start" spacing={1}>
//                             <Heading size={{ base: "sm", md: "md" }}>
//                               John Doe
//                             </Heading>
//                             <Text
//                               fontSize={{ base: "xs", md: "sm" }}
//                               color="teal.500"
//                             >
//                               Senior Software Engineer
//                             </Text>
//                             <HStack>
//                               <FaStar color="gold" />
//                               <Text fontSize={{ base: "xs", md: "sm" }}>
//                                 4.9 Instructor Rating
//                               </Text>
//                             </HStack>
//                             <HStack>
//                               <FaUsers color="teal" />
//                               <Text fontSize={{ base: "xs", md: "sm" }}>
//                                 10,000+ Students
//                               </Text>
//                             </HStack>
//                             <HStack>
//                               <FaRegFileAlt color="teal" />
//                               <Text fontSize={{ base: "xs", md: "sm" }}>
//                                 15 Courses
//                               </Text>
//                             </HStack>
//                           </VStack>
//                         </HStack>
//                         <Text fontSize={{ base: "sm", md: "md" }} mt={4}>
//                           Mani is a seasoned software engineer with over 10
//                           years of experience in the industry. He's passionate
//                           about teaching and has helped thousands of students
//                           launch their careers in tech.
//                         </Text>
//                       </CardBody>
//                     </Card>

//                     {/* Share Course */}
//                     <Card w="100%">
//                       <CardBody>
//                         <Heading size={{ base: "sm", md: "md" }} mb={4}>
//                           Share This Course
//                         </Heading>
//                         <HStack spacing={4} justify="center">
//                           <IconButton
//                             aria-label="Share on Facebook"
//                             icon={<FaFacebook />}
//                             onClick={() => handleShare("facebook")}
//                             color={"white"}
//                             bg={"teal.900"}
//                             _hover={{ color: "black", bg: "white" }}
//                             s
//                           />
//                           <IconButton
//                             aria-label="Share on Twitter"
//                             icon={<FaTwitter />}
//                             onClick={() => handleShare("twitter")}
//                             color={"white"}
//                             bg={"teal.900"}
//                             _hover={{ color: "black", bg: "white" }}
//                           />
//                           <IconButton
//                             aria-label="Share on LinkedIn"
//                             icon={<FaLinkedin />}
//                             onClick={() => handleShare("linkedin")}
//                             color={"white"}
//                             bg={"teal.900"}
//                             _hover={{ color: "black", bg: "white" }}
//                           />
//                           <IconButton
//                             aria-label="Share via Email"
//                             icon={<FaEnvelope />}
//                             onClick={() => handleShare("email")}
//                             color={"white"}
//                             bg={"teal.900"}
//                             _hover={{ color: "black", bg: "white" }}
//                           />
//                         </HStack>
//                       </CardBody>
//                     </Card>
//                   </VStack>
//                 </Box>
//               </GridItem>
//             </Grid>

//             {/* Related Courses */}
//             <Box mt={{ base: 8, md: 12 }}>
//               <Heading
//                 size={{ base: "lg", md: "xl" }}
//                 color={"black"}
//                 mb={{ base: 4, md: 6 }}
//               >
//                 Related Courses
//               </Heading>
//               <Grid
//                 templateColumns={{
//                   base: "1fr",
//                   sm: "repeat(2, 1fr)",
//                   lg: "repeat(3, 1fr)",
//                 }}
//                 gap={{ base: 4, md: 6 }}
//               >
//                 {relatedCourses.map((relatedCourse) => (
//                   <GridItem key={relatedCourse.id}>
//                     <Card
//                       h="100%"
//                       cursor="pointer"
//                       as={Link}
//                       to={`/it-courses/${relatedCourse.id}`}
//                       transition="all 0.3s"
//                       _hover={{
//                         transform: "translateY(-5px)",
//                         boxShadow: "xl",
//                       }}
//                     >
//                       <CardHeader>
//                         <HStack spacing={4}>
//                           <Box
//                             bg="teal.900"
//                             color={"white"}
//                             p={2}
//                             borderRadius="full"
//                           >
//                             {getIcon(relatedCourse.icon)}
//                           </Box>
//                           <Heading size={{ base: "sm", md: "md" }}>
//                             {relatedCourse.title}
//                           </Heading>
//                         </HStack>
//                       </CardHeader>
//                       <CardBody>
//                         <Text fontSize={{ base: "sm", md: "md" }} noOfLines={3}>
//                           {relatedCourse.description}
//                         </Text>
//                       </CardBody>
//                       <CardFooter>
//                         <Button
//                           rightIcon={<FaArrowRight />}
//                           bg="teal.900"
//                           color={"white"}
//                           size={{ base: "sm", md: "md" }}
//                         >
//                           Learn More
//                         </Button>
//                       </CardFooter>
//                     </Card>
//                   </GridItem>
//                 ))}
//               </Grid>
//             </Box>
//           </MotionBox>
//         </Container>

//         {/* Video Preview Modal */}
//         <Modal
//           isOpen={isVideoOpen}
//           onClose={onVideoClose}
//           size={{ base: "full", md: "4xl" }}
//         >
//           <ModalOverlay />
//           <ModalContent>
//             <ModalHeader>Course Preview: {course.title}</ModalHeader>
//             <ModalCloseButton />
//             <ModalBody>
//               <AspectRatio ratio={16 / 9}>
//                 <iframe
//                   title="Course Preview"
//                   src={`https://www.youtube.com/embed/${course.videoId}`}
//                   allowFullScreen
//                 />
//               </AspectRatio>
//             </ModalBody>
//           </ModalContent>
//         </Modal>
//       </Box>
//     </>
//   );
// }

