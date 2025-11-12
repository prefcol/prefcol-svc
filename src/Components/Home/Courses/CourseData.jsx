import { FaJava, FaPython, FaRegFileAlt, FaCogs, FaUserCog, FaMobileAlt, FaDatabase, FaShieldAlt } from 'react-icons/fa';

export const coursesData = [
  {
    id: 1,
    title: "Software Development in Java",
    description: "Learn to build software applications using Java.",
    available: true,
    icon: FaJava ,
    objectives: [
      "Understand Java fundamentals",
      "Build web applications",
      "Implement object-oriented programming"
    ],
    prerequisites: "Basic programming knowledge",
    duration: "4 weeks",
    relatedCourses: [2, 4, 6],
    videoId: "eIrMbAQSU34" 
  },
  {
    id: 2,
    title: "Software Development in Python",
    description: "Develop applications and scripts using Python programming.",
    available: true,
    icon: <FaPython />,
    objectives: [
      "Learn Python syntax",
      "Create scripts for automation",
      "Work with data structures"
    ],
    prerequisites: "None",
    duration: "6 weeks",
    relatedCourses: [1, 4, 6],
    videoId: "_uQrJ0TkZlc" 
  },
  {
    id: 3,
    title: "Manual Testing",
    description: "Understand the fundamentals of software testing manually.",
    available: true,
    icon: <FaRegFileAlt />,
    objectives: [
      "Learn testing techniques",
      "Identify bugs and issues",
      "Prepare test cases"
    ],
    prerequisites: "None",
    duration: "3 weeks",
    relatedCourses: [4, 5],
    videoId: "T3N1t0dTfFk" 
  },
  {
    id: 4,
    title: "Automation Testing (Java)",
    description: "Automate testing using Java-based frameworks.",
    available: true,
    icon: <FaCogs />,
    objectives: [
      "Understand automation frameworks",
      "Write automation scripts in Java",
      "Integrate with CI/CD tools"
    ],
    prerequisites: "Software Development in Java",
    duration: "5 weeks",
    relatedCourses: [1, 5, 6],
    videoId: "A_VtF0mb3-s"
  },
  {
    id: 5,
    title: "API Automation Testing (Java with Rest Assured)",
    description: "Test and automate APIs with Java and Rest Assured.",
    available: true,
    icon: <FaRegFileAlt />,
    objectives: [
      "Learn API testing concepts",
      "Implement tests using Rest Assured",
      "Understand JSON and XML"
    ],
    prerequisites: "Automation Testing (Java)",
    duration: "4 weeks",
    relatedCourses: [4, 6, 4],
    videoId: "l8jMYmGloUs" 
  },
  {
    id: 6,
    title: "Automation Testing (Python)",
    description: "Automate testing processes using Python.",
    available: true,
    icon: <FaCogs />,
    objectives: [
      "Understand Python testing libraries",
      "Write automated test cases",
      "Integrate with CI/CD tools"
    ],
    prerequisites: "Software Development in Python",
    duration: "5 weeks",
    relatedCourses: [2, 4, 1],
    videoId: "LfdR1w6cPK0" 
  },
  {
    id: 7,
    title: "Product Management",
    description: "Learn product management essentials.",
    available: true,
    icon: <FaUserCog />,
    objectives: [
      "Understand product lifecycle",
      "Learn market research techniques",
      "Develop product roadmaps"
    ],
    prerequisites: "None",
    duration: "6 weeks",
    relatedCourses: [8, 4, 3],
    videoId: "A4W3FIZ6eXk" 
  },
  {
    id: 8,
    title: "Business Analyst",
    description: "Gain skills in business analysis.",
    available: true,
    icon: <FaRegFileAlt />,
    objectives: [
      "Understand business analysis techniques",
      "Learn requirements gathering",
      "Develop business cases"
    ],
    prerequisites: "None",
    duration: "5 weeks",
    relatedCourses: [8, 2, 7],
    videoId: "ysjMtdLOofY" 
  },
  {
    id: 9,
    title: "Mobile App Development",
    description: "Create mobile applications for iOS and Android.",
    available: false,
    icon: <FaMobileAlt />,
    objectives: [
      "Understand mobile development frameworks",
      "Build cross-platform apps",
      "Learn app deployment processes"
    ],
    prerequisites: "Software Development knowledge",
    duration: "8 weeks",
    relatedCourses: [1, 2, 7],
    videoId: "5n0B8jkmB_I" 
  },
  {
    id: 10,
    title: "Data Science and Machine Learning",
    description: "Explore data analysis, machine learning, and AI techniques.",
    available: false,
    icon: <FaDatabase />,
    objectives: [
      "Understand data analysis concepts",
      "Learn machine learning algorithms",
      "Build predictive models"
    ],
    prerequisites: "Basic statistics knowledge",
    duration: "10 weeks",
    relatedCourses: [11, 13, 14],
    videoId: "oP8MD9J9G9I"
  },
  {
    id: 11,
    title: "DevOps and Cloud Computing",
    description: "Learn DevOps practices and cloud computing skills.",
    available: false,
    icon: <FaCogs />,
    objectives: [
      "Understand DevOps lifecycle",
      "Learn CI/CD tools",
      "Explore cloud services"
    ],
    prerequisites: "None",
    duration: "8 weeks",
    relatedCourses: [10, 3, 2],
    videoId: "3On_DwWnpYI" 
  },
  {
    id: 12,
    title: "Cybersecurity",
    description: "Protect networks and data from cyber threats.",
    available: false,
    icon: <FaShieldAlt />,
    objectives: [
      "Understand cybersecurity principles",
      "Learn threat analysis",
      "Implement security measures"
    ],
    prerequisites: "None",
    duration: "7 weeks",
    relatedCourses: [1, 5, 10],
    videoId: "cM1AaD7Pf8M" 
  },
  {
    id: 13,
    title: "UI/UX Development",
    description: "Design and develop user-friendly interfaces.",
    available: false,
    icon: <FaRegFileAlt />,
    objectives: [
      "Understand UI/UX principles",
      "Learn wireframing techniques",
      "Create user-centric designs"
    ],
    prerequisites: "Basic design knowledge",
    duration: "6 weeks",
    relatedCourses: [5, 8, 9],
    videoId: "7PzX2rSaHbo" 
  },
  {
    id: 14,
    title: "Full Stack Development",
    description: "Learn to build end-to-end web applications using modern technologies.",
    available: false,
    icon: <FaCogs />,
    objectives: [
      "Understand front-end and back-end technologies",
      "Build RESTful APIs",
      "Deploy applications"
    ],
    prerequisites: "Software Development knowledge",
    duration: "8 weeks",
    relatedCourses: [7, 8, 6],
    videoId: "sL_YfFMww48" 
  }
];

export const getCourseContent = (courseId) => {
  switch (courseId) {
    case 1: // Software Development in Java
      return [
        { week: 1, title: "Introduction to Java", lessons: ["Setup & IDE", "Basic Syntax", "First Java Program", "Variables and Data Types"] },
        { week: 2, title: "Core Concepts", lessons: ["Control Flow", "Methods and Functions", "Arrays", "Collections"] },
        { week: 3, title: "Advanced Topics", lessons: ["Object-Oriented Programming", "Exception Handling", "File Handling", "Concurrency"] },
        { week: 4, title: "Project Work", lessons: ["Capstone Project", "Final Exam", "Debugging", "Code Review"] },
      ];
    case 2: // Software Development in Python
      return [
        { week: 1, title: "Introduction to Python", lessons: ["Installing Python", "Variables & Data Types", "Control Flow", "Basic Syntax"] },
        { week: 2, title: "Core Concepts", lessons: ["Functions", "Loops", "Data Structures", "Modules & Packages"] },
        { week: 3, title: "Advanced Topics", lessons: ["OOP in Python", "File I/O", "Web Scraping", "Async Programming"] },
        { week: 4, title: "Project Work", lessons: ["Final Project", "Unit Testing", "Code Refactoring", "Deployment"] },
      ];
    case 3: // Manual Testing
      return [
        { week: 1, title: "Introduction to Testing", lessons: ["Testing Basics", "Testing Types", "Manual Testing Process", "Tools"] },
        { week: 2, title: "Core Concepts", lessons: ["Test Case Design", "Test Execution", "Bug Reporting", "Test Plans"] },
        { week: 3, title: "Advanced Topics", lessons: ["Exploratory Testing", "Regression Testing", "Performance Testing", "Usability Testing"] },
        { week: 4, title: "Project Work", lessons: ["Final Test Plan", "Test Execution", "Bug Reporting", "Test Documentation"] },
      ];
    case 4: // Automation Testing (Java)
      return [
        { week: 1, title: "Introduction to Automation", lessons: ["Automation Basics", "Java Setup", "JUnit Framework", "Selenium Setup"] },
        { week: 2, title: "Core Concepts", lessons: ["WebDriver", "Locators", "Assertions", "TestNG"] },
        { week: 3, title: "Advanced Topics", lessons: ["Data-Driven Testing", "Page Object Model", "Cross-browser Testing", "CI/CD Integration"] },
        { week: 4, title: "Project Work", lessons: ["Final Project", "Test Script Development", "Test Reporting", "CI Integration"] },
      ];
    case 5: // API Automation Testing (Java with Rest Assured)
      return [
        { week: 1, title: "Introduction to APIs", lessons: ["What is an API?", "HTTP Basics", "Postman Setup", "Rest Assured Setup"] },
        { week: 2, title: "Core Concepts", lessons: ["API Requests", "API Assertions", "Authentication", "Handling Responses"] },
        { week: 3, title: "Advanced Topics", lessons: ["API Documentation", "Mocking APIs", "Performance Testing", "API Security"] },
        { week: 4, title: "Project Work", lessons: ["API Automation Project", "Test Automation Strategy", "Data-Driven API Testing", "CI/CD for API Tests"] },
      ];
    case 6: // Automation Testing (Python)
      return [
        { week: 1, title: "Introduction to Python Automation", lessons: ["Python Basics for Automation", "Selenium with Python", "Test Automation Framework", "PyTest Introduction"] },
        { week: 2, title: "Core Concepts", lessons: ["Locators", "Assertions", "Headless Testing", "Test Data Management"] },
        { week: 3, title: "Advanced Topics", lessons: ["Parallel Testing", "CI/CD with Python", "Behavior-Driven Development", "Integration with Jenkins"] },
        { week: 4, title: "Project Work", lessons: ["Final Project", "Test Reporting", "Debugging Tests", "Test Automation Strategy"] },
      ];
    case 7: // Product Management
      return [
        { week: 1, title: "Introduction to Product Management", lessons: ["Product Lifecycle", "Product Roadmap", "Stakeholder Management", "Agile Methodology"] },
        { week: 2, title: "Core Concepts", lessons: ["Market Research", "Product Design", "Customer Personas", "Competitive Analysis"] },
        { week: 3, title: "Advanced Topics", lessons: ["Product Metrics", "Product Launch Strategy", "Growth Hacking", "Product Iteration"] },
        { week: 4, title: "Project Work", lessons: ["Final Product Strategy", "Pitching to Investors", "Final Exam"] },
      ];
    case 8: // Business Analyst
      return [
        { week: 1, title: "Introduction to Business Analysis", lessons: ["Role of a Business Analyst", "Requirements Gathering", "Stakeholder Analysis", "SWOT Analysis"] },
        { week: 2, title: "Core Concepts", lessons: ["Business Process Modeling", "Functional and Non-Functional Requirements", "User Stories", "Prototyping"] },
        { week: 3, title: "Advanced Topics", lessons: ["Business Cases", "Gap Analysis", "Data Flow Diagrams", "Business Intelligence"] },
        { week: 4, title: "Project Work", lessons: ["Creating a Business Case", "Requirements Document", "Final Presentation"] },
      ];
    case 9: // Mobile App Development
      return [
        { week: 1, title: "Introduction to Mobile Development", lessons: ["Mobile Platforms", "Setting up Development Environment", "Hello World Application", "Mobile UI Basics"] },
        { week: 2, title: "Core Concepts", lessons: ["Layouts and Views", "Activity Lifecycle", "Intent and Bundles", "User Input Handling"] },
        { week: 3, title: "Advanced Topics", lessons: ["Database Integration", "API Integration", "Push Notifications", "Advanced UI Design"] },
        { week: 4, title: "Project Work", lessons: ["Capstone Project", "App Deployment", "User Testing", "App Store Submission"] },
      ];
    case 10: // Data Science and Machine Learning
      return [
        { week: 1, title: "Introduction to Data Science", lessons: ["Data Science Overview", "Python for Data Science", "NumPy and Pandas", "Data Cleaning"] },
        { week: 2, title: "Core Concepts", lessons: ["Data Visualization", "Exploratory Data Analysis", "Statistical Analysis", "Data Preprocessing"] },
        { week: 3, title: "Machine Learning Basics", lessons: ["Supervised Learning", "Unsupervised Learning", "Regression Analysis", "Classification Algorithms"] },
        { week: 4, title: "Advanced Machine Learning", lessons: ["Neural Networks", "Deep Learning", "Model Optimization", "AI Ethics"] },
        { week: 5, title: "Project Work", lessons: ["Final Project", "Model Evaluation", "Model Deployment", "Data Science Pipeline"] },
      ];
    case 11: // DevOps and Cloud Computing
      return [
        { week: 1, title: "Introduction to DevOps", lessons: ["DevOps Principles", "CI/CD", "Version Control Systems", "Build Automation"] },
        { week: 2, title: "Core Concepts", lessons: ["Containers and Docker", "Kubernetes", "Microservices", "Cloud Platforms (AWS, Azure)"] },
        { week: 3, title: "Advanced Topics", lessons: ["Infrastructure as Code", "Continuous Monitoring", "Scaling Cloud Applications", "Serverless Architectures"] },
        { week: 4, title: "Project Work", lessons: ["Final Project", "Cloud Deployment", "CI/CD Pipeline", "Code Review"] },
      ];
    case 12: // Cybersecurity
      return [
        { week: 1, title: "Introduction to Cybersecurity", lessons: ["Cybersecurity Basics", "Threat Landscape", "Network Security", "Cryptography"] },
        { week: 2, title: "Core Concepts", lessons: ["Firewalls", "Intrusion Detection Systems", "Incident Response", "Security Protocols"] },
        { week: 3, title: "Advanced Topics", lessons: ["Penetration Testing", "Security Audits", "Ethical Hacking", "Malware Analysis"] },
        { week: 4, title: "Project Work", lessons: ["Final Project", "Risk Management", "Security Tools Implementation"] },
      ];
    case 13: // UI/UX Development
      return [
        { week: 1, title: "Introduction to UI/UX", lessons: ["UI vs UX", "User Research", "Wireframing", "Prototyping"] },
        { week: 2, title: "Core Concepts", lessons: ["User Interface Design", "Interaction Design", "Usability Testing", "Color Theory"] },
        { week: 3, title: "Advanced Topics", lessons: ["Responsive Design", "Animation in UI", "Design Systems", "UI Frameworks (React, Angular)"] },
        { week: 4, title: "Project Work", lessons: ["Design a Full Project", "Final Presentation", "UI/UX Portfolio"] },
      ];
    case 14: // Full Stack Development
      return [
        { week: 1, title: "Introduction to Full Stack Development", lessons: ["Frontend Basics", "Backend Basics", "Version Control", "Setting up a Development Environment"] },
        { week: 2, title: "Core Concepts", lessons: ["HTML, CSS, JavaScript", "Databases (SQL/NoSQL)", "APIs", "Frontend Frameworks (React, Angular)"] },
        { week: 3, title: "Advanced Topics", lessons: ["Authentication", "State Management", "Deploying Full Stack Apps", "Microservices"] },
        { week: 4, title: "Project Work", lessons: ["Build a Full Stack Application", "Final Exam", "Deployment and CI/CD"] },
      ];
    default:
      return [];
  }
};





// import React from 'react';
// // import { FaJava, FaPython, FaRegFileAlt, FaCogs, FaUserCog, FaMobileAlt, FaDatabase, FaShieldAlt } from 'react-icons/fa';

// export const coursesData = [
//   {
//     id: 1,
//     title: "Software Development in Java",
//     description: "Learn to build software applications using Java.",
//     available: true,
//     // icon: "<FaJava />",
//     objectives: [
//       "Understand Java fundamentals",
//       "Build web applications",
//       "Implement object-oriented programming"
//     ],
//     prerequisites: "Basic programming knowledge",
//     duration: "4 weeks",
//     relatedCourses: [2, 4, 6],
//     videoId: "eIrMbAQSU34" 
//   },
//   {
//     id: 2,
//     title: "Software Development in Python",
//     description: "Develop applications and scripts using Python programming.",
//     available: true,
//     // icon: "<FaPython />",
//     objectives: [
//       "Learn Python syntax",
//       "Create scripts for automation",
//       "Work with data structures"
//     ],
//     prerequisites: "None",
//     duration: "6 weeks",
//     relatedCourses: [1, 4, 6],
//     videoId: "_uQrJ0TkZlc" 
//   },
//   {
//     id: 3,
//     title: "Manual Testing",
//     description: "Understand the fundamentals of software testing manually.",
//     available: true,
//     // icon: "<FaRegFileAlt />",
//     objectives: [
//       "Learn testing techniques",
//       "Identify bugs and issues",
//       "Prepare test cases"
//     ],
//     prerequisites: "None",
//     duration: "3 weeks",
//     relatedCourses: [4, 5],
//     videoId: "T3N1t0dTfFk" 
//   },
//   {
//     id: 4,
//     title: "Automation Testing (Java)",
//     description: "Automate testing using Java-based frameworks.",
//     available: true,
//     // icon: "<FaCogs />",
//     objectives: [
//       "Understand automation frameworks",
//       "Write automation scripts in Java",
//       "Integrate with CI/CD tools"
//     ],
//     prerequisites: "Software Development in Java",
//     duration: "5 weeks",
//     relatedCourses: [1, 5, 6],
//     videoId: "A_VtF0mb3-s"
//   },
//   // {
//   //   id: 5,
//   //   title: "API Automation Testing (Java with Rest Assured)",
//   //   description: "Test and automate APIs with Java and Rest Assured.",
//   //   available: true,
//   //   icon: <FaRegFileAlt />,
//   //   objectives: [
//   //     "Learn API testing concepts",
//   //     "Implement tests using Rest Assured",
//   //     "Understand JSON and XML"
//   //   ],
//   //   prerequisites: "Automation Testing (Java)",
//   //   duration: "4 weeks",
//   //   relatedCourses: [4, 6, 4],
//   //   videoId: "l8jMYmGloUs" 
//   // },
//   // {
//   //   id: 6,
//   //   title: "Automation Testing (Python)",
//   //   description: "Automate testing processes using Python.",
//   //   available: true,
//   //   icon: <FaCogs />,
//   //   objectives: [
//   //     "Understand Python testing libraries",
//   //     "Write automated test cases",
//   //     "Integrate with CI/CD tools"
//   //   ],
//   //   prerequisites: "Software Development in Python",
//   //   duration: "5 weeks",
//   //   relatedCourses: [2, 4, 1],
//   //   videoId: "LfdR1w6cPK0" 
//   // },
//   // {
//   //   id: 7,
//   //   title: "Product Management",
//   //   description: "Learn product management essentials.",
//   //   available: true,
//   //   icon: <FaUserCog />,
//   //   objectives: [
//   //     "Understand product lifecycle",
//   //     "Learn market research techniques",
//   //     "Develop product roadmaps"
//   //   ],
//   //   prerequisites: "None",
//   //   duration: "6 weeks",
//   //   relatedCourses: [8, 4, 3],
//   //   videoId: "A4W3FIZ6eXk" 
//   // },
//   // {
//   //   id: 8,
//   //   title: "Business Analyst",
//   //   description: "Gain skills in business analysis.",
//   //   available: true,
//   //   icon: <FaRegFileAlt />,
//   //   objectives: [
//   //     "Understand business analysis techniques",
//   //     "Learn requirements gathering",
//   //     "Develop business cases"
//   //   ],
//   //   prerequisites: "None",
//   //   duration: "5 weeks",
//   //   relatedCourses: [8, 2, 7],
//   //   videoId: "ysjMtdLOofY" 
//   // },
//   // {
//   //   id: 9,
//   //   title: "Mobile App Development",
//   //   description: "Create mobile applications for iOS and Android.",
//   //   available: false,
//   //   icon: <FaMobileAlt />,
//   //   objectives: [
//   //     "Understand mobile development frameworks",
//   //     "Build cross-platform apps",
//   //     "Learn app deployment processes"
//   //   ],
//   //   prerequisites: "Software Development knowledge",
//   //   duration: "8 weeks",
//   //   relatedCourses: [1, 2, 7],
//   //   videoId: "5n0B8jkmB_I" 
//   // },
//   // {
//   //   id: 10,
//   //   title: "Data Science and Machine Learning",
//   //   description: "Explore data analysis, machine learning, and AI techniques.",
//   //   available: false,
//   //   icon: <FaDatabase />,
//   //   objectives: [
//   //     "Understand data analysis concepts",
//   //     "Learn machine learning algorithms",
//   //     "Build predictive models"
//   //   ],
//   //   prerequisites: "Basic statistics knowledge",
//   //   duration: "10 weeks",
//   //   relatedCourses: [11, 13, 14],
//   //   videoId: "oP8MD9J9G9I"
//   // },
//   // {
//   //   id: 11,
//   //   title: "DevOps and Cloud Computing",
//   //   description: "Learn DevOps practices and cloud computing skills.",
//   //   available: false,
//   //   icon: <FaCogs />,
//   //   objectives: [
//   //     "Understand DevOps lifecycle",
//   //     "Learn CI/CD tools",
//   //     "Explore cloud services"
//   //   ],
//   //   prerequisites: "None",
//   //   duration: "8 weeks",
//   //   relatedCourses: [10, 3, 2],
//   //   videoId: "3On_DwWnpYI" 
//   // },
//   // {
//   //   id: 12,
//   //   title: "Cybersecurity",
//   //   description: "Protect networks and data from cyber threats.",
//   //   available: false,
//   //   icon: <FaShieldAlt />,
//   //   objectives: [
//   //     "Understand cybersecurity principles",
//   //     "Learn threat analysis",
//   //     "Implement security measures"
//   //   ],
//   //   prerequisites: "None",
//   //   duration: "7 weeks",
//   //   relatedCourses: [1, 5, 10],
//   //   videoId: "cM1AaD7Pf8M" 
//   // },
//   // {
//   //   id: 13,
//   //   title: "UI/UX Development",
//   //   description: "Design and develop user-friendly interfaces.",
//   //   available: false,
//   //   icon: <FaRegFileAlt />,
//   //   objectives: [
//   //     "Understand UI/UX principles",
//   //     "Learn wireframing techniques",
//   //     "Create user-centric designs"
//   //   ],
//   //   prerequisites: "Basic design knowledge",
//   //   duration: "6 weeks",
//   //   relatedCourses: [5, 8, 9],
//   //   videoId: "7PzX2rSaHbo" 
//   // },
//   // {
//   //   id: 14,
//   //   title: "Full Stack Development",
//   //   description: "Learn to build end-to-end web applications using modern technologies.",
//   //   available: false,
//   //   icon: <FaCogs />,
//   //   objectives: [
//   //     "Understand front-end and back-end technologies",
//   //     "Build RESTful APIs",
//   //     "Deploy applications"
//   //   ],
//   //   prerequisites: "Software Development knowledge",
//   //   duration: "8 weeks",
//   //   relatedCourses: [7, 8, 6],
//   //   videoId: "sL_YfFMww48" 
//   // }
// ];

// export const getCourseContent = (courseId) => {
//   switch (courseId) {
//     case 1: // Software Development in Java
//       return [
//         { week: 1, title: "Introduction to Java", lessons: ["Setup & IDE", "Basic Syntax", "First Java Program", "Variables and Data Types"] },
//         { week: 2, title: "Core Concepts", lessons: ["Control Flow", "Methods and Functions", "Arrays", "Collections"] },
//         { week: 3, title: "Advanced Topics", lessons: ["Object-Oriented Programming", "Exception Handling", "File Handling", "Concurrency"] },
//         { week: 4, title: "Project Work", lessons: ["Capstone Project", "Final Exam", "Debugging", "Code Review"] },
//       ];
//     case 2: // Software Development in Python
//       return [
//         { week: 1, title: "Introduction to Python", lessons: ["Installing Python", "Variables & Data Types", "Control Flow", "Basic Syntax"] },
//         { week: 2, title: "Core Concepts", lessons: ["Functions", "Loops", "Data Structures", "Modules & Packages"] },
//         { week: 3, title: "Advanced Topics", lessons: ["OOP in Python", "File I/O", "Web Scraping", "Async Programming"] },
//         { week: 4, title: "Project Work", lessons: ["Final Project", "Unit Testing", "Code Refactoring", "Deployment"] },
//       ];
//     case 3: // Manual Testing
//       return [
//         { week: 1, title: "Introduction to Testing", lessons: ["Testing Basics", "Testing Types", "Manual Testing Process", "Tools"] },
//         { week: 2, title: "Core Concepts", lessons: ["Test Case Design", "Test Execution", "Bug Reporting", "Test Plans"] },
//         { week: 3, title: "Advanced Topics", lessons: ["Exploratory Testing", "Regression Testing", "Performance Testing", "Usability Testing"] },
//         { week: 4, title: "Project Work", lessons: ["Final Test Plan", "Test Execution", "Bug Reporting", "Test Documentation"] },
//       ];
//     case 4: // Automation Testing (Java)
//       return [
//         { week: 1, title: "Introduction to Automation", lessons: ["Automation Basics", "Java Setup", "JUnit Framework", "Selenium Setup"] },
//         { week: 2, title: "Core Concepts", lessons: ["WebDriver", "Locators", "Assertions", "TestNG"] },
//         { week: 3, title: "Advanced Topics", lessons: ["Data-Driven Testing", "Page Object Model", "Cross-browser Testing", "CI/CD Integration"] },
//         { week: 4, title: "Project Work", lessons: ["Final Project", "Test Script Development", "Test Reporting", "CI Integration"] },
//       ];
//     case 5: // API Automation Testing (Java with Rest Assured)
//       return [
//         { week: 1, title: "Introduction to APIs", lessons: ["What is an API?", "HTTP Basics", "Postman Setup", "Rest Assured Setup"] },
//         { week: 2, title: "Core Concepts", lessons: ["API Requests", "API Assertions", "Authentication", "Handling Responses"] },
//         { week: 3, title: "Advanced Topics", lessons: ["API Documentation", "Mocking APIs", "Performance Testing", "API Security"] },
//         { week: 4, title: "Project Work", lessons: ["API Automation Project", "Test Automation Strategy", "Data-Driven API Testing", "CI/CD for API Tests"] },
//       ];
//     case 6: // Automation Testing (Python)
//       return [
//         { week: 1, title: "Introduction to Python Automation", lessons: ["Python Basics for Automation", "Selenium with Python", "Test Automation Framework", "PyTest Introduction"] },
//         { week: 2, title: "Core Concepts", lessons: ["Locators", "Assertions", "Headless Testing", "Test Data Management"] },
//         { week: 3, title: "Advanced Topics", lessons: ["Parallel Testing", "CI/CD with Python", "Behavior-Driven Development", "Integration with Jenkins"] },
//         { week: 4, title: "Project Work", lessons: ["Final Project", "Test Reporting", "Debugging Tests", "Test Automation Strategy"] },
//       ];
//     case 7: // Product Management
//       return [
//         { week: 1, title: "Introduction to Product Management", lessons: ["Product Lifecycle", "Product Roadmap", "Stakeholder Management", "Agile Methodology"] },
//         { week: 2, title: "Core Concepts", lessons: ["Market Research", "Product Design", "Customer Personas", "Competitive Analysis"] },
//         { week: 3, title: "Advanced Topics", lessons: ["Product Metrics", "Product Launch Strategy", "Growth Hacking", "Product Iteration"] },
//         { week: 4, title: "Project Work", lessons: ["Final Product Strategy", "Pitching to Investors", "Final Exam"] },
//       ];
//     case 8: // Business Analyst
//       return [
//         { week: 1, title: "Introduction to Business Analysis", lessons: ["Role of a Business Analyst", "Requirements Gathering", "Stakeholder Analysis", "SWOT Analysis"] },
//         { week: 2, title: "Core Concepts", lessons: ["Business Process Modeling", "Functional and Non-Functional Requirements", "User Stories", "Prototyping"] },
//         { week: 3, title: "Advanced Topics", lessons: ["Business Cases", "Gap Analysis", "Data Flow Diagrams", "Business Intelligence"] },
//         { week: 4, title: "Project Work", lessons: ["Creating a Business Case", "Requirements Document", "Final Presentation"] },
//       ];
//     case 9: // Mobile App Development
//       return [
//         { week: 1, title: "Introduction to Mobile Development", lessons: ["Mobile Platforms", "Setting up Development Environment", "Hello World Application", "Mobile UI Basics"] },
//         { week: 2, title: "Core Concepts", lessons: ["Layouts and Views", "Activity Lifecycle", "Intent and Bundles", "User Input Handling"] },
//         { week: 3, title: "Advanced Topics", lessons: ["Database Integration", "API Integration", "Push Notifications", "Advanced UI Design"] },
//         { week: 4, title: "Project Work", lessons: ["Capstone Project", "App Deployment", "User Testing", "App Store Submission"] },
//       ];
//     case 10: // Data Science and Machine Learning
//       return [
//         { week: 1, title: "Introduction to Data Science", lessons: ["Data Science Overview", "Python for Data Science", "NumPy and Pandas", "Data Cleaning"] },
//         { week: 2, title: "Core Concepts", lessons: ["Data Visualization", "Exploratory Data Analysis", "Statistical Analysis", "Data Preprocessing"] },
//         { week: 3, title: "Machine Learning Basics", lessons: ["Supervised Learning", "Unsupervised Learning", "Regression Analysis", "Classification Algorithms"] },
//         { week: 4, title: "Advanced Machine Learning", lessons: ["Neural Networks", "Deep Learning", "Model Optimization", "AI Ethics"] },
//         { week: 5, title: "Project Work", lessons: ["Final Project", "Model Evaluation", "Model Deployment", "Data Science Pipeline"] },
//       ];
//     case 11: // DevOps and Cloud Computing
//       return [
//         { week: 1, title: "Introduction to DevOps", lessons: ["DevOps Principles", "CI/CD", "Version Control Systems", "Build Automation"] },
//         { week: 2, title: "Core Concepts", lessons: ["Containers and Docker", "Kubernetes", "Microservices", "Cloud Platforms (AWS, Azure)"] },
//         { week: 3, title: "Advanced Topics", lessons: ["Infrastructure as Code", "Continuous Monitoring", "Scaling Cloud Applications", "Serverless Architectures"] },
//         { week: 4, title: "Project Work", lessons: ["Final Project", "Cloud Deployment", "CI/CD Pipeline", "Code Review"] },
//       ];
//     case 12: // Cybersecurity
//       return [
//         { week: 1, title: "Introduction to Cybersecurity", lessons: ["Cybersecurity Basics", "Threat Landscape", "Network Security", "Cryptography"] },
//         { week: 2, title: "Core Concepts", lessons: ["Firewalls", "Intrusion Detection Systems", "Incident Response", "Security Protocols"] },
//         { week: 3, title: "Advanced Topics", lessons: ["Penetration Testing", "Security Audits", "Ethical Hacking", "Malware Analysis"] },
//         { week: 4, title: "Project Work", lessons: ["Final Project", "Risk Management", "Security Tools Implementation"] },
//       ];
//     case 13: // UI/UX Development
//       return [
//         { week: 1, title: "Introduction to UI/UX", lessons: ["UI vs UX", "User Research", "Wireframing", "Prototyping"] },
//         { week: 2, title: "Core Concepts", lessons: ["User Interface Design", "Interaction Design", "Usability Testing", "Color Theory"] },
//         { week: 3, title: "Advanced Topics", lessons: ["Responsive Design", "Animation in UI", "Design Systems", "UI Frameworks (React, Angular)"] },
//         { week: 4, title: "Project Work", lessons: ["Design a Full Project", "Final Presentation", "UI/UX Portfolio"] },
//       ];
//     case 14: // Full Stack Development
//       return [
//         { week: 1, title: "Introduction to Full Stack Development", lessons: ["Frontend Basics", "Backend Basics", "Version Control", "Setting up a Development Environment"] },
//         { week: 2, title: "Core Concepts", lessons: ["HTML, CSS, JavaScript", "Databases (SQL/NoSQL)", "APIs", "Frontend Frameworks (React, Angular)"] },
//         { week: 3, title: "Advanced Topics", lessons: ["Authentication", "State Management", "Deploying Full Stack Apps", "Microservices"] },
//         { week: 4, title: "Project Work", lessons: ["Build a Full Stack Application", "Final Exam", "Deployment and CI/CD"] },
//       ];
//     default:
//       return [];
//   }
// };

