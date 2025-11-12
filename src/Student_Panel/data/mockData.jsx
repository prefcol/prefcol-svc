

// src/Student_Panel/data/mockData.js
import React from "react";
import java from "../../assets/images/Java.jpeg"
import python from "../../assets/images/Python.jpeg"
import python_automation from "../../assets/images/Python_Automation.jpeg"
import java_automation from "../../assets/images/Java_Automation.jpeg"
import manual_testing from "../../assets/images/Manual_Testing.jpeg"
import mobile_development from "../../assets/images/Mobile_Development.jpeg"
import API_Test from "../../assets/images/API_Testing.jpeg"
import devops from "../../assets/images/DevOps.jpeg"
import data_science from "../../assets/images/Data_Science.jpeg"
import cyber from "../../assets/images/Cyber.jpeg"
import business_analysis from "../../assets/images/Business_Analysis.jpeg"
import prod_management from "../../assets/images/Prod_Manage.jpeg"
import creative_writing from "../../assets/images/Creative_Writing.jpeg"
import digital_marketing from "../../assets/images/Digital_Marketing.jpeg"
import business_law from "../../assets/images/Business_Law.jpeg"
import environment from "../../assets/images/Environmental.jpeg"
import hr from "../../assets/images/HR.jpeg"
import photography from "../../assets/images/Photography.jpeg"
import public_speaking from "../../assets/images/Public_Speaking.jpeg"
import theatre_arts from "../../assets/images/Theatre_Arts.jpeg"
import sustainable_agriculture from "../../assets/images/Sustainable_Agri.jpeg"
import culinary_arts from "../../assets/images/Culinary_Arts.jpeg"
import health_care from "../../assets/images/Health_Care.jpeg"
import graphics from "../../assets/images/Graphic_Design.jpeg"

export const allCourses = [
  // =============== IT COURSES (IDs: IT-201 to IT-212) ===============
  // =============== IT COURSES (Aligned with API) ===============
{
  id: "IT-101",
  title: "Java Development Bootcamp",
  category: "IT",
  subcategory: "Java",
  price: 4979,
  discountPrice: 3737,
  thumbnail: java,
  instructor: "Rahul",
  totalLessons: 45,
  totalDuration: 108000,
  certificate: true,
  bestseller: true,
  featured: true,
  level: "Intermediate",
  videos: [
    { id: "vid-IT-101-1", title: "Intro to Java", duration: 1200, url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" },
    { id: "vid-IT-101-2", title: "OOP Concepts", duration: 1800, url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" },
    { id: "vid-IT-101-3", title: "Exception Handling", duration: 1500, url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" }
  ], 
  syllabus: [
    {
      module: "Introduction to Java",
      topics: [
        "Overview of Java: History and evolution, features, benefits.",
            "Understanding the Java Virtual Machine (JVM).",
            "Java Development Kit (JDK) and Java Runtime Environment (JRE).",
            "Installing JDK and setting up the environment.",
            "Writing and running your first Java program.",
            "Introduction to IDEs like IntelliJ IDEA, Eclipse, or NetBeans."
      ],
      
    },
    {
      module: "Java Basics",
      topics: [
        "Primitive data types: int, float, double, char, boolean.",
            "Reference data types: Objects and Arrays.",
            "Variable declaration, initialization, type conversion and casting.",
            "Operators: arithmetic, relational, logical, bitwise.",
            "Assignment, increment/decrement, precedence and associativity.",
            "Control flow: if, else, switch, for, while, do-while.",
            "Break, continue, and return statements."
      ]
    },
    {
      module: "Object-Oriented Programming (OOP)",
      topics: [
        "OOP Concepts: Classes, Objects, Encapsulation, Abstraction, Inheritance, Polymorphism.",
            "Creating and using classes and objects.",
            "Constructors and initialization, this keyword.",
            "Method declaration, invocation, overloading, overriding.",
            "Access modifiers: public, private, protected, default.",
            "Encapsulation and access control."
      ]
    },
    {
      module: "Inheritance and Polymorphism",
      topics: [
        "Types of inheritance: single, multilevel, hierarchical.",
            "Using super keyword, method overriding, final keyword.",
            "Compile-time polymorphism (method overloading).",
            "Runtime polymorphism (method overriding).",
            "Upcasting and downcasting.",
            "Abstract classes and methods.",
            "Interfaces and multiple inheritance using interfaces."
      ]
    },
    {
      module: "Exception Handling",
      topics: [
        "What are exceptions? Checked and unchecked types.",
            "Exception hierarchy.",
            "try, catch, finally blocks.",
            "throw and throws keywords.",
            "Creating custom exceptions.",
            "Best practices for exception handling in real-world applications."
      ]
    },
    {
      module: "Arrays, Strings, and Collections",
      topics: [
        "Arrays: declaring, initializing, accessing, multidimensional arrays.",
            "Array manipulation techniques.",
            "Strings: String class and methods, immutability, StringBuilder, StringBuffer.",
            "Collections Framework: List, Set, Map interfaces.",
            "Classes like ArrayList, LinkedList, HashSet, TreeSet, HashMap, TreeMap.",
            "Iterating collections using Iterator and for-each loop."
      ]
    },
    {
      module: "Inner Classes and Enums",
      topics: [
       "Types of inner classes: member, static, local, anonymous.",
            "Use cases and examples of inner classes.",
            "Enums: defining, using, methods, constructors."
      ]
    },
    {
      module: "File Handling and I/O Streams",
      topics: [
       "Introduction to file handling in Java.",
            "Reading from and writing to files.",
            "File class and its methods.",
            "Byte and character streams.",
            "InputStream, OutputStream, Reader, Writer classes."
      ]
    },
     {
      module: "Multithreading and Concurrency",
      topics: [
       "Thread lifecycle and states.",
            "Creating and starting threads using Thread and Runnable.",
            "Synchronization: synchronized keyword, methods, techniques.",
            "Deadlock and thread safety.",
            "java.util.concurrent package: Executor framework, Callable, Future."
      ]
    },
    {
      module: "Java 8 and Beyond Features",
      topics: [
       "Lambda expressions: syntax, usage, functional interfaces.",
            "Streams API: filter, map, reduce, collect, parallel streams.",
            "Optional class: avoiding null pointer exceptions.",
            "Date and Time API: LocalDate, LocalTime, LocalDateTime, Period, Duration."
      ]
    },
    {
      module: "Annotations and Reflection",
      topics: [
       "Built-in annotations: @Override, @Deprecated, @SuppressWarnings.",
            "Creating custom annotations.",
            "Introduction to reflection.",
            "Analyzing and manipulating classes at runtime."
      ]
    },
    {
      module: "Networking and Serialization",
      topics: [
       "Networking basics in Java.",
            "Working with Socket and ServerSocket.",
            "URL and HTTP communication.",
            "Serialization and deserialization.",
            "Serializable interface and object serialization."
      ]
    },
    {
      module: "Advanced Topics",
      topics: [
       "Java memory management: heap, stack, garbage collection, memory leaks.",
            "JVM tuning and performance optimization.",
            "Design patterns in Java: Singleton, Factory, Observer, etc.",
            "JDBC: connecting to databases, executing queries.",
            "Working with ResultSet and Statement objects."
      ]
    },
  ],
  
},
{
  id: "IT-102",
  title: "Python Programming Essentials",
  category: "IT",
  subcategory: "Python",
  price: 4149,
  discountPrice: 3317,
  thumbnail: python,
  instructor: "Ankita Shree",
  totalLessons: 35,
  totalDuration: 72000,
  certificate: true,
  bestseller: true,
  featured: true,
  level: "Beginner",
  videos: [
    { id: "vid-IT-102-1", title: "Python Basics", duration: 1200, url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" },
    { id: "vid-IT-102-2", title: "Functions & Modules", duration: 1500, url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" },
    { id: "vid-IT-102-3", title: "File Handling", duration: 1000, url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" }
  ], syllabus: [{
          
          module: "Introduction to Python & Setup",
          topics: [
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
          module: "Control Structures",
          topics: [
            "if, elif, and else statements.",
            "Logical operators: and, or, not.",
            "Comparison operators: ==, !=, <, >, <=, >=.",
            "Practice: Write simple programs that use conditional statements (e.g., even/odd number check, largest of three numbers).",
          ],
        },
        {
          module: "Loops",
          topics: [
            "for loop with range().",
            "Looping over lists, strings, and other sequences.",
            "Basic while loop and using break and continue statements.",
            "Practice: Write programs that use loops (e.g., sum of numbers, factorial, Fibonacci sequence).",
          ],
        },
        {
          module: "Functions",
          topics: [
            "def keyword, function parameters, and return values.",
            "Understanding scope (local vs global variables).",
            "Practice: Create functions for basic tasks like calculating the area of a circle, checking prime numbers, etc.",
          ],
        },
        {
          module: "Data Structures – Lists",
          topics: [
            "Creating lists, accessing elements, slicing.",
            "List methods (append(), remove(), pop(), sort(), reverse()).",
            "Practice: Create and manipulate lists (e.g., adding/removing items, sorting).",
          ],
        },
        {
          module: "Data Structures - Tuples and Dictionaries",
          topics: [
            "Creating and accessing tuples.",
            "Differences between lists and tuples.",
            "Creating and accessing dictionaries (key-value pairs).",
            "Dictionary methods (keys(), values(), items()).",
            "Practice: Write programs that use tuples and dictionaries (e.g., storing student grades or inventory items).",
          ],
        },
        {
          module: "String Manipulation",
          topics: [
            "String indexing and slicing.",
            "String methods (upper(), lower(), strip(), replace(), split(), join()).",
            "Practice: Write programs that manipulate strings (e.g., palindrome checker, word counter).",
          ],
        },
        {
          module: "File Handling",
          topics: [
            "Open a file, read contents, write to files (open(), read(), write()).",
            "Closing a file and file modes (r, w, a).",
            "Practice: Create a simple program that reads from a text file, processes its data, and writes results to another file.",
          ],
        },
        {
          module: "Exception Handling",
          topics: [
            "try, except, else, and finally.",
            "Raising exceptions with raise.",
            "Practice: Write programs that handle common errors (e.g., division by zero, file not found).",
          ],
        },
        {
          module: "Final Project",
          topics: [
            "Basic calculator.",
            "To-Do list application.",
            "Number guessing game.",
            "Simple text-based quiz.",
          ],
        },],
},
{
  id: "IT-103",
  title: "Manual Testing Fundamentals",
  category: "IT",
  subcategory: "Manual Testing",
  price: 3317,
  discountPrice: 2487,
  thumbnail: manual_testing,
  instructor: "Vikraman",
  totalLessons: 28,
  totalDuration: 64800,
  certificate: true,
  bestseller: false,
  featured: false,
  level: "Beginner",
  videos: [
    { id: "vid-IT-103-1", title: "What is Manual Testing?", duration: 1200, url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" },
    { id: "vid-IT-103-2", title: "Test Case Design", duration: 1400, url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" },
    { id: "vid-IT-103-3", title: "Bug Reporting", duration: 1100, url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" }
  ],
 syllabus: [
  {
    module: "Software Development Life Cycle (SDLC)",
    topics: [
      "Phases of SDLC",
      "Role of testing in SDLC"
    ]
  },
  {
    module: "Software Testing Life Cycle (STLC)",
    topics: [
      "Phase 1: Requirement Analysis – Study testable requirements, interact with stakeholders, create RTM and Automation Feasibility Report",
      "Phase 2: Test Planning – Prepare Test Plan, Effort Estimation, tool selection, resource planning",
      "Phase 3: Test Case Development – Create test cases, test data, review scripts",
      "Phase 4: Environment Setup – Prepare hardware/software, set up test data, perform smoke test",
      "Phase 5: Test Execution – Execute tests, log defects, retest fixes, track to closure",
      "Phase 6: Test Cycle Closure – Prepare closure report, metrics, analyze results"
    ]
  },
  {
    module: "Test Documentation",
    topics: [
      "Business Requirement Document (BRD)",
      "Technical Requirement Document (TRD)",
      "Requirements Traceability Matrix (RTM) – Forward & Backward Traceability",
      "Test Plan Document – Scope, approach, resources, schedule, test coverage",
      "Test Strategy – Testing approach, scope, coverage",
      "Feasibility Study – Technical, operational, economic feasibility",
      "Bug/Defect Report",
      "Test Summary Report & Metrics"
    ]
  },
  {
    module: "Types of Testing",
    topics: [
      "Functional Testing – Validates features against requirements",
      "Non-Functional Testing – Performance, usability, reliability, compatibility",
      "Maintenance Testing – Regression testing"
    ]
  },
  {
    module: "Manual Testing Fundamentals",
    topics: [
      "Definition: Testing without automation tools",
      "Necessity of manual testing before automation",
      "How to perform a test: Understand docs → Draft test cases → Review → Execute → Report bugs → Retest"
    ]
  },
  {
    module: "Testing Levels",
    topics: [
      "Unit Testing – Done by developers on individual components",
      "Integration Testing – Tests interaction between modules",
      "System Testing – End-to-end validation of integrated system",
      "User Acceptance Testing (UAT) – Final validation by client/user"
    ]
  },
  {
    module: "Testing Techniques",
    topics: [
      "Black Box Testing – Based on requirements, no code knowledge",
      "White Box Testing – Requires internal code knowledge",
      "Grey Box Testing – Partial knowledge of internal structure"
    ]
  },
  {
    module: "Key Testing Types in Practice",
    topics: [
      "Smoke Testing – Verify critical functionalities after build",
      "Sanity Testing – Check specific bug fixes or new features",
      "Regression Testing – Ensure existing functionality unaffected by changes",
      "Ad-hoc Testing – Informal, unplanned testing"
    ]
  },
  {
    module: "Test Design Fundamentals",
    topics: [
      "Test Scenario – 'What to test' (e.g., Login functionality)",
      "Test Case – 'How to test' with steps, expected/actual results",
      "Negative Test Cases – Validate system behavior with invalid inputs",
      "Sample Test Cases: OTP, ATM, E-commerce (Add to Cart, Checkout flow)"
    ]
  },
  {
    module: "Verification vs Validation",
    topics: [
      "Verification – Checking documents, design, code (static)",
      "Validation – Testing actual product against expected behavior (dynamic)"
    ]
  },
  {
    module: "Entry and Exit Criteria",
    topics: [
      "Entry Criteria – Test environment ready, scope defined, resources available, test data ready",
      "Exit Criteria – Critical test cases passed, high-priority defects fixed, 95% test coverage, stakeholder sign-off"
    ]
  },
  {
    module: "When to Stop Testing",
    topics: [
      "100% requirement coverage achieved",
      "Defect rate below acceptable threshold",
      "No critical/severity-1 bugs open",
      "95% test case pass rate",
      "Project deadline or budget exhausted",
      "Go/No-Go decision made"
    ]
  },
  {
    module: "Agile and Manual Testing",
    topics: [
      "Agile vs Waterfall – Iterative vs sequential",
      "Role of tester in Agile – Collaborate with devs, test in every sprint, attend daily scrum",
      "Sprint-level and End-to-End Regression in Agile"
    ]
  },
  {
    module: "Defect Management",
    topics: [
      "Defect Life Cycle",
      "Severity vs Priority",
      "Deferred Defects – Fixed in future releases"
    ]
  },
  {
    module: "Tools and Processes",
    topics: [
      "JIRA – Creating issues (Bug, Story, Task), assigning, linking to sprints/epics",
      "Story Point Estimation – Planning Poker, T-Shirt Sizing, Affinity Mapping"
    ]
  }
],
},
{
  id: "IT-104",
  title: "Java Automation Testing Bootcamp", // ✅ Now matches API: "Java Automation"
  category: "IT",
  subcategory: "Java",
  price: 5807,
  discountPrice: 4563,
  thumbnail: java_automation, // ✅ Correct image
  instructor: "Saran Kumar",
  totalLessons: 36,
  totalDuration: 86400,
  certificate: true,
  bestseller: true,
  featured: true,
  level: "Intermediate",
  videos: [
    { id: "vid-IT-104-1", title: "Selenium WebDriver Setup", duration: 1500, url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" },
    { id: "vid-IT-104-2", title: "TestNG Framework", duration: 1700, url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" },
    { id: "vid-IT-104-3", title: "Maven Integration", duration: 1400, url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" }
  ], syllabus: [
  {
    module: "Introduction to Selenium",
    topics: [
      "Selenium is an open-source automation testing tool for web applications",
      "History: Created by Jason Huggins in 2004",
      "Selenium vs QTP: Open source vs Commercial, language support, OS/browser compatibility",
      "Supported browsers: Chrome, Firefox, IE, Safari, Opera",
      "Supported OS: Windows, macOS, Linux, Solaris",
      "Supported languages: Java, Python, C#, JavaScript, Ruby, PHP, Perl, R",
      "Selenium components: IDE, RC, WebDriver, Grid",
      "Selenium IDE: Record-and-playback (Firefox only)",
      "Selenium RC: Requires server, indirect browser control",
      "Selenium WebDriver: Direct browser interaction",
      "Selenium Grid: Parallel execution using Hub-Node architecture"
    ]
  },
  {
    module: "Setting Up Selenium WebDriver",
    topics: [
      "Download Selenium Standard JAR",
      "Add JAR to project build path",
      "Create driver folder in project",
      "Download and place browser-specific driver (e.g., chromedriver.exe)",
      "Set system property: System.setProperty(\"webdriver.chrome.driver\", \"path\")",
      "Initialize WebDriver: WebDriver driver = new ChromeDriver();"
    ]
  },
  {
    module: "WebDriver Methods",
    topics: [
      "driver.get(\"URL\") – Launch a webpage",
      "driver.getTitle() – Get current page title",
      "driver.getCurrentUrl() – Get current URL",
      "driver.getPageSource() – Get HTML source",
      "driver.manage().window().maximize() – Maximize browser",
      "driver.manage().window().setSize() – Set custom window size",
      "driver.manage().window().setPosition() – Set window position",
      "driver.navigate().to() – Navigate to URL",
      "driver.navigate().back() / .forward() / .refresh()",
      "driver.close() – Close current window",
      "driver.quit() – Terminate entire browser session",
      "driver.getWindowHandle() – Get current window ID (String)",
      "driver.getWindowHandles() – Get all window IDs (Set<String>)",
      "driver.switchTo() – Switch between windows, frames, or alerts"
    ]
  },
  {
    module: "Locators and Element Identification",
    topics: [
      "HTML basics: tagName, attributeName, attributeValue, text",
      "Locators via By class: id, name, className, tagName, linkText, partialLinkText",
      "XPath: Relative, Absolute, Dynamic",
      "CSS Selector",
      "Basic XPath syntax: //tagName[@attribute='value']",
      "Text-based XPath: //tagName[text()='...']",
      "Contains XPath: //tagName[contains(text(),'...')], //tagName[contains(@attribute,'value')]",
      "Indexing in XPath: (//tagName[@attribute='value'])[index]",
      "Absolute XPath: starts with /html (e.g., /html/body/div/...)",
      "CSS Selector by ID: tag#id or #id",
      "CSS Selector by class: tag.className",
      "CSS Selector by attribute: [attribute='value']",
      "CSS Selector prefix/suffix/substring: [attr^='...'], [attr$='...'], [attr*='...']"
    ]
  },
  {
    module: "Dynamic and Advanced XPath",
    topics: [
      "Dynamic XPath using relationships",
      "Axes: parent, child, ancestor, descendant",
      "Axes: following, following-sibling, preceding, preceding-sibling",
      "Syntax: //tagName[@attribute='value']//following-sibling::tagName",
      "Customized XPath for dynamic elements (e.g., product pricing on e-commerce sites)"
    ]
  },
  {
    module: "WebElement Methods",
    topics: [
      "findElement() – Returns single WebElement; throws exception if not found",
      "findElements() – Returns List<WebElement>; returns empty list if not found",
      "sendKeys() – Enter text",
      "click() – Perform click",
      "getText() – Retrieve visible text",
      "getAttribute() – Get value of any attribute",
      "isDisplayed(), isEnabled(), isSelected() – Check element state",
      "clear() – Clear input field"
    ]
  },
  {
    module: "Handling Dropdowns",
    topics: [
      "Use Select class: Select s = new Select(WebElement)",
      "selectByValue(), selectByIndex(), selectByVisibleText()",
      "isMultiple() – Check if dropdown supports multiple selections",
      "getOptions(), getFirstSelectedOption(), getAllSelectedOptions()",
      "deselect methods and deselectAll()",
      "Thread.sleep() for page/dropdown load wait"
    ]
  },
  {
    module: "Working with Alerts",
    topics: [
      "Types: Simple, Confirm, Prompt",
      "Switch to alert: driver.switchTo().alert()",
      "accept(), dismiss(), sendKeys(), getText()",
      "Window-based popups require external tools like AutoIT"
    ]
  },
  {
    module: "Handling Frames",
    topics: [
      "Frames have separate DOM (tagName: iframe)",
      "Switch to frame by: index, id/name, or WebElement",
      "driver.switchTo().frame(...)",
      "Switch back: driver.switchTo().defaultContent()",
      "Switch to parent: driver.switchTo().parentFrame()",
      "Count frames: driver.findElements(By.tagName(\"iframe\"))"
    ]
  },
  {
    module: "Window Handling",
    topics: [
      "Each browser window has a unique ID (window handle)",
      "driver.getWindowHandle() → current window (String)",
      "driver.getWindowHandles() → all windows (Set<String>)",
      "Iterate through handles to switch between windows"
    ]
  },
  {
    module: "Waits in Selenium",
    topics: [
      "Thread.sleep() – Static wait",
      "Implicit Wait – Global timeout for all elements",
      "Explicit Wait – WebDriverWait with ExpectedConditions",
      "Fluent Wait – Custom polling and ignored exceptions",
      "Difference: Implicit (global) vs Explicit (conditional, element-specific)"
    ]
  },
  {
    module: "JavaScript Executor",
    topics: [
      "JavaScriptExecutor js = (JavaScriptExecutor) driver;",
      "Scroll to element: js.executeScript(\"arguments[0].scrollIntoView();\", element)",
      "Scroll to top: js.executeScript(\"window.scroll(0,0)\")",
      "Scroll vertically/horizontally: window.scrollBy(x, y)",
      "Click via JS: js.executeScript(\"arguments[0].click();\", element)"
    ]
  },
  {
    module: "Actions Class – Advanced Interactions",
    topics: [
      "Actions obj = new Actions(driver);",
      "Mouse actions: click(), contextClick(), doubleClick(), moveToElement(), dragAndDrop()",
      "Must use .build().perform() to execute",
      "Keyboard actions via Robot class: keyPress(), keyRelease() using KeyEvent.VK_*"
    ]
  },
  {
    module: "Taking Screenshots",
    topics: [
      "TakesScreenshot interface",
      "Type casting: TakesScreenshot ts = (TakesScreenshot) driver;",
      "ts.getScreenshotAs(OutputType.FILE)",
      "Save using FileUtils.copyFile() (Apache Commons IO JAR required)"
    ]
  }
],
},
{
  id: "IT-105",
  title: "API Testing with Postman and REST Assured",
  category: "IT",
  subcategory: "API",
  price: 4979,
  discountPrice: 3737,
  thumbnail: API_Test,
  instructor: "Manoj Kumar",
  totalLessons: 26,
  totalDuration: 57600,
  certificate: true,
  bestseller: false,
  featured: true,
  level: "Intermediate",
  videos: [
    { id: "vid-IT-105-1", title: "Intro to APIs", duration: 1100, url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" },
    { id: "vid-IT-105-2", title: "Postman Collections", duration: 1300, url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" },
    { id: "vid-IT-105-3", title: "REST Assured in Java", duration: 1200, url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" }
  ], syllabus: [
  {
    module: "Introduction to APIs",
    topics: [
      "What is an API?",
      "Types of APIs (REST, SOAP, GraphQL)",
      "Core API Concepts: Endpoints and HTTP Methods (GET, POST, PUT, DELETE)",
      "Data Formats: JSON and XML",
      "The Growing API Economy (API market projected to reach $1.28 Trillion by 2032)",
      "Real-world Examples: Google Maps, Twitter, Stripe, OpenWeatherMap"
    ]
  },
  {
    module: "API Security",
    topics: [
      "Authentication vs. Authorization",
      "Authentication: Verifying user identity",
      "Authorization: Controlling resource access",
      "Common Methods: API Keys, OAuth 2.0, JWT (JSON Web Tokens)",
      "OAuth 2.0 used by Google, Facebook"
    ]
  },
  {
    module: "Practical API Example",
    topics: [
      "Using OpenWeatherMap API",
      "Required Parameters: API key, city name",
      "Example Request: `api.openweathermap.org/data/2.5/weather?q=London&appid={API key}`",
      "Code Example in Python using `requests` library",
      "Handling responses and error handling"
    ]
  },
  {
    module: "Importance and Fundamentals of API Testing",
    topics: [
      "Why API Testing is Important",
      "Ensures correctness, efficiency, and security",
      "Validates interactions meet requirements",
      "Understanding HTTP Response Codes: 200, 404, 500",
      "Tools for Manual Testing: Postman, SoapUI"
    ]
  },
  {
    module: "Why Automate API Testing",
    topics: [
      "Reduces manual effort",
      "Increases efficiency, reliability, and scalability",
      "Reduces human error",
      "Supports regression testing",
      "Essential in microservices and CI/CD environments"
    ]
  },
  {
    module: "API Automation Tools",
    topics: [
      "Postman",
      "ReadyAPI",
      "Tricentis Tosca",
      "Selenium",
      "RestAssured",
      "JMeter",
      "Karate"
    ]
  },
  {
    module: "Building an API Automation Framework",
    topics: [
      "Modular design",
      "Data-driven testing",
      "Behavior-Driven Development (BDD)",
      "CI/CD integration",
      "Version control for test scripts"
    ]
  },
  {
    module: "Advanced API Testing Techniques",
    topics: [
      "Mocking APIs",
      "Security Testing (e.g., SQL injection, XSS)",
      "Load and Performance Testing"
    ]
  },
  {
    module: "Best Practices in API Testing",
    topics: [
      "Define clear test objectives",
      "Design reusable and maintainable test cases",
      "Include edge cases",
      "Comprehensive error handling and reporting",
      "Manage API changes and script maintenance"
    ]
  },
  {
    module: "Real-World Applications",
    topics: [
      "E-commerce: Automate order processing",
      "Finance: Automate transactions",
      "Healthcare: Automate data exchange",
      "Social Media: Automate content posting"
    ]
  },
  {
    module: "Challenges and Future Trends",
    topics: [
      "Security: Data protection",
      "API Changes: Script maintenance",
      "Complex Workflows: Dependency management",
      "AI-powered Testing",
      "Low-code Platforms",
      "Automated API Security"
    ]
  },
  {
    module: "Learning Resources",
    topics: [
      "Official API documentation and blogs",
      "Online Courses (Coursera, Udemy, LinkedIn Learning)",
      "Communities and Forums (Stack Overflow, GitHub)"
    ]
  }
],
},
{
  id: "IT-106",
  title: "Python Automation with Selenium and PyTest", // ✅ Now matches API: "Python Automation"
  category: "IT",
  subcategory: "Automation",
  price: 5393,
  discountPrice: 4149,
  thumbnail: python_automation, // ✅ Correct image
  instructor: "Riya sri",
  totalLessons: 32,
  totalDuration: 79200,
  certificate: true,
  bestseller: true,
  featured: true,
  level: "Intermediate",
  videos: [
    { id: "vid-IT-106-1", title: "Selenium Setup", duration: 1300, url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" },
    { id: "vid-IT-106-2", title: "Writing Your First Test", duration: 1600, url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" },
    { id: "vid-IT-106-3", title: "PyTest Framework", duration: 1400, url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" }
  ], syllabus: [{
            
            module: "Introduction to Python Automation",
            topics: [
              "What is automation?",
              "Benefits of automation with Python",
              "Installing Python and setting up the environment",
              "Introduction to Jupyter Notebook & VS Code",
            ],
          },
          {

            module: "Python Basics (Quick Recap)",
            topics: [
              "Variables, data types, and operators",
              "Conditional statements (if-else)",
              "Loops (for, while)",
              "Functions and modules",
              "File handling (reading/writing files)",
            ],
          },
          {
            
            module: " Working with Libraries for Automation",
            topics: [
              "os and shutil (File & directory operations)",
              "sys and argparse (Command-line arguments)",
              "time and schedule (Task scheduling)",
              "logging (Logging activities)",
            ],
          },
          {
          
            module: " Automating File & Folder Operations",
            topics: [
              "Creating, renaming, deleting files & folders",
              "Organizing files based on extensions",
              "Searching and modifying file contents",
              
            ],
          },
          {

            module: " Web Scraping & Browser Automation",
            topics: [
              "Introduction to web scraping",
              "Using requests and BeautifulSoup",
              "Automating web browsers with selenium",
              "Handling forms, buttons, and web elements",
              
            ],
          },
          {

            module: " Automating Emails & Messaging",
            topics: [
              "Sending emails using smtplib",
              "Reading emails using imaplib",
              "Automating WhatsApp & Telegram messages",
              
            ],
          },
          {

            module: " Automating Excel, PDFs, and Documents",
            topics: [
              "Working with Excel using openpyxl & pandas",
              "Reading and modifying PDFs using PyPDF2",
              "Automating Word documents using python-docx",
              
            ],
          },
          {

            module: " Automating Data Extraction & APIs",
            topics: [
              "Fetching data from APIs using requests",
              "Parsing JSON & XML data",
              "Working with authentication & API keys",
              
            ],
          },
          {

            module: " Automating Desktop Applications",
            topics: [
              "Using pyautogui for mouse & keyboard automation",
              "Automating GUI interactions",
              "Handling screenshots and alerts",
              
            ],
          },
          {
            
            module: "  Task Scheduling & Deployment",
            topics: [
              "Automating scripts using cron (Linux) or Task Scheduler (Windows)",
              "Creating executable scripts (pyinstaller)",
              "Deploying automation scripts on the cloud",
              
            ],
          },],
},
{
  id: "IT-107",
  title: "Product Management for Tech Teams", // ✅ Now matches API: "Product Management"
  category: "IT",
  subcategory: "Roadmap",
  price: 5807,
  discountPrice: 4563,
  thumbnail: prod_management,
  instructor: "Saran Kumar",
  totalLessons: 36,
  totalDuration: 86400,
  certificate: true,
  bestseller: true,
  featured: true,
  level: "Intermediate",
  videos: [
    { id: "vid-IT-107-1", title: "Product Lifecycle", duration: 1400, url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" },
    { id: "vid-IT-107-2", title: "User Research Methods", duration: 1600, url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" },
    { id: "vid-IT-107-3", title: "Agile Roadmapping", duration: 1500, url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" }
  ], syllabus: [
  {
    module: "Introduction to Product Management",
    topics: [
      "What is Product Management?",
      "Role & Responsibilities of a Product Manager",
      "Product vs. Project Management",
      "Key Skills Required for a PM"
    ]
  },
  {
    module: "Product Lifecycle & Strategy",
    topics: [
      "Product Development Lifecycle (Idea → Launch → Growth → Maturity → Decline)",
      "Types of Products (B2B, B2C, SaaS, Hardware, etc.)",
      "Understanding Market & Customer Needs",
      "Competitive Analysis & Market Research"
    ]
  },
  {
    module: "Product Discovery & Ideation",
    topics: [
      "Problem-Solving & Design Thinking",
      "User Research & Customer Interviews",
      "Defining Product Vision & Strategy",
      "Brainstorming & Idea Validation Techniques"
    ]
  },
  {
    module: "Roadmap & Prioritization",
    topics: [
      "Building a Product Roadmap",
      "Prioritization Frameworks (MoSCoW, RICE, Kano Model)",
      "Aligning Roadmaps with Business Goals"
    ]
  },
  {
    module: "Agile & Product Development Process",
    topics: [
      "Agile, Scrum, & Kanban Methodologies",
      "Writing User Stories & Acceptance Criteria",
      "Working with Engineering & Design Teams",
      "MVP (Minimum Viable Product) Approach"
    ]
  },
  {
    module: "Metrics & Data-Driven Decision Making",
    topics: [
      "Key Product Metrics (DAU, MAU, Retention, Churn, NPS)",
      "A/B Testing & Experimentation",
      "Analytics Tools (Google Analytics, Mixpanel, Amplitude)"
    ]
  },
  {
    module: "Go-To-Market & Product Launch",
    topics: [
      "Product Positioning & Messaging",
      "Creating a GTM Strategy",
      "Sales & Marketing Alignment",
      "Post-Launch Monitoring & Feedback Loop"
    ]
  },
  {
    module: "Stakeholder & Cross-Functional Collaboration",
    topics: [
      "Working with Engineering, Design, Sales, and Marketing",
      "Effective Communication & Storytelling for PMs",
      "Managing Up & Stakeholder Buy-In"
    ]
  },
  {
    module: "Case Studies & Practical Applications",
    topics: [
      "Analyzing Successful & Failed Products",
      "Hands-on Product Case Studies",
      "Building a Mini Product Roadmap as a Project"
    ]
  },
  {
    module: "Career & Growth in Product Management",
    topics: [
      "How to Land a Product Management Role",
      "Resume & Interview Preparation",
      "PM Career Paths & Specializations (Growth PM, Technical PM, etc.)"
    ]
  }
],
},
{
  id: "IT-108",
  title: "Business Analysis for IT Projects", // ✅ Now matches API: "Business Analysis"
  category: "IT",
  subcategory: "BA",
  price: 4563,
  discountPrice: 3737,
  thumbnail: business_analysis,
  instructor: "Preeti Rajan",
  totalLessons: 25,
  totalDuration: 64800,
  certificate: true,
  bestseller: false,
  featured: false,
  level: "Intermediate",
  videos: [
    { id: "vid-IT-108-1", title: "Role of a BA", duration: 1200, url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" },
    { id: "vid-IT-108-2", title: "Gathering Requirements", duration: 1300, url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" },
    { id: "vid-IT-108-3", title: "Stakeholder Communication", duration: 1100, url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" }
  ], syllabus: [
  {
    module: "Understanding Core Concepts",
    topics: [
      "Business analysis involves understanding needs and stakeholders",
      "The BABOK Guide provides essential knowledge",
      "Effective elicitation and collaboration are critical for success",
      "Distinguish between underlying needs and proposed solutions",
      "Identify and manage stakeholders and their impact",
      "Gather requirements through collaboration"
    ]
  },
  {
    module: "Exploring Methodologies and Frameworks",
    topics: [
      "Waterfall: Structured and sequential processes",
      "Agile: Iterative and flexible approach",
      "Lean: Focuses on waste reduction"
    ]
  },
  {
    module: "Mastering Key Processes",
    topics: [
      "Planning: Define tasks and responsibilities",
      "Elicitation: Gather stakeholder requirements",
      "Analysis: Understand needs and solutions",
      "Traceability ensures clear documentation and communication",
      "Monitoring ensures alignment with objectives"
    ]
  },
  {
    module: "Developing Essential Skills",
    topics: [
      "Communication",
      "Analytical",
      "Technical",
      "Interpersonal"
    ]
  },
  {
    module: "Leveraging Elicitation Techniques",
    topics: [
      "Interviews: Structured conversations for gathering insights",
      "Surveys: Collect data from large groups efficiently",
      "Workshops: Collaborative sessions for brainstorming",
      "Document analysis provides valuable context"
    ]
  },
  {
    module: "Applying Modeling and Analysis",
    topics: [
      "SWOT Analysis: Identifies strengths and weaknesses",
      "Process Flow: Visualizes workflows",
      "Use Cases: Models system interactions",
      "Data Modeling: Structures information"
    ]
  },
  {
    module: "Integrating Business Analysis",
    topics: [
      "Initiation: Define objectives",
      "Planning: Determine scope and timeline",
      "Execution: Gather requirements",
      "Closure: Validate and document"
    ]
  },
  {
    module: "Embracing Future Trends",
    topics: [
      "AI and automation are transforming BA tasks",
      "Data-driven decisions are becoming essential",
      "UX/UI design is integrating with BA",
      "Agile and DevOps are increasingly important"
    ]
  }
],
},
{
  id: "IT-109",
  title: "Mobile App Development with React Native", // ✅ Now matches API: "Mobile Development"
  category: "IT",
  subcategory: "Mobile",
  price: 5807,
  discountPrice: 4563,
  thumbnail: mobile_development,
  instructor: "Kavya Pandian",
  totalLessons: 40,
  totalDuration: 90000,
  certificate: true,
  bestseller: true,
  featured: true,
  level: "Intermediate",
  videos: [
    { id: "vid-IT-109-1", title: "React Native Setup", duration: 1400, url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" },
    { id: "vid-IT-109-2", title: "Building Your First App", duration: 1700, url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" },
    { id: "vid-IT-109-3", title: "Navigation & State", duration: 1500, url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" }
  ], syllabus: [
  {
    module: "Introduction to Mobile Development",
    topics: [
      "Mobile devices drive 60% of global internet traffic",
      "3.5 billion smartphone users worldwide",
      "Mobile app revenue projected to reach $613 billion by 2025"
    ]
  },
  {
    module: "Key Mobile Platforms: iOS vs. Android",
    topics: [
      "Android: 71% global market share, device fragmentation, multiple screen sizes and OS versions",
      "iOS: 57% US market share, unified development environment, consistent user experience"
    ]
  },
  {
    module: "Native Mobile Development",
    topics: [
      "Platform-specific languages: Swift (iOS), Kotlin/Java (Android)",
      "Full access to device features and hardware",
      "Optimal performance and responsiveness",
      "Example: Spotify uses native development for high-quality audio streaming"
    ]
  },
  {
    module: "Cross-Platform Development",
    topics: [
      "Code reuse across platforms",
      "Frameworks: React Native, Flutter, Xamarin",
      "Faster development and deployment",
      "Example: Facebook uses React Native",
      "Potential performance limitations due to abstraction layers"
    ]
  },
  {
    module: "Hybrid Mobile Development",
    topics: [
      "Built with web technologies: HTML, CSS, JavaScript",
      "Wrapped in native containers using Ionic or Cordova",
      "Fastest development cycle",
      "Best for content-driven apps with minimal native features",
      "Example: Sworkit fitness app built with Ionic",
      "Lower performance compared to native apps"
    ]
  },
  {
    module: "Progressive Web Apps (PWAs)",
    topics: [
      "Installable like native apps",
      "Work offline",
      "Support push notifications",
      "Native-like experience using web technologies",
      "Lower development cost and SEO benefits",
      "Example: Starbucks PWA enables offline browsing and ordering"
    ]
  },
  {
    module: "Key Trends in Mobile Development",
    topics: [
      "5G Connectivity: Enhanced speed and capabilities",
      "AI/ML Integration: Personalized user experiences",
      "AR/VR Applications: Immersive mobile experiences",
      "Mobile Gaming: Explosive market growth"
    ]
  },
  {
    module: "Mobile Security Best Practices",
    topics: [
      "Data Encryption: Encrypt sensitive user data",
      "Secure Authentication: Use multi-factor authentication",
      "Regular Security Audits",
      "App Transport Security (ATS) for iOS",
      "Network Security Configuration for Android",
      "Importance of regular updates to maintain user trust"
    ]
  },
  {
    module: "Future of Mobile Development",
    topics: [
      "Low-Code/No-Code Platforms: Democratizing app creation",
      "Edge Computing: Faster response by processing data closer to device",
      "Foldable Devices: Optimizing UI/UX for new form factors"
    ]
  },
  {
    module: "Choosing the Right Development Approach",
    topics: [
      "Native: For performance-critical applications",
      "Cross-platform: For faster development and broader reach",
      "Hybrid: For simple, content-focused apps",
      "PWAs: For web-centric features with native-like behavior"
    ]
  }
],
},
{
  id: "IT-110",
  title: "Data Science & Machine Learning with Python", // ✅ Now matches API: "Data Science & ML"
  category: "IT",
  subcategory: "ML",
  price: 6225,
  discountPrice: 4977,
  thumbnail: data_science,
  instructor: "Abhishek Kumar",
  totalLessons: 50,
  totalDuration: 144000,
  certificate: true,
  bestseller: true,
  featured: true,
  level: "Advanced",
  videos: [
    { id: "vid-IT-110-1", title: "Intro to Data Science", duration: 1800, url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" },
    { id: "vid-IT-110-2", title: "Pandas & NumPy", duration: 2000, url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" },
    { id: "vid-IT-110-3", title: "Scikit-learn Basics", duration: 1900, url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" }
  ], syllabus: [
  {
    module: "The Data Science Process",
    topics: [
      "Collect",
      "Clean",
      "Analyze",
      "Visualize",
      "Data quality and preprocessing are key",
      "Iterative nature of the process",
      "Example: Predicting customer churn for a telecom company"
    ]
  },
  {
    module: "Machine Learning Fundamentals",
    topics: [
      "Supervised Learning: Classification, Regression",
      "Unsupervised Learning: Clustering, Dimensionality Reduction",
      "Reinforcement Learning: Trial and Error",
      "Key algorithms that learn from data"
    ]
  },
  {
    module: "Essential Tools and Technologies",
    topics: [
      "Programming Languages: Python, R",
      "Data Manipulation Libraries: Pandas, NumPy",
      "ML Frameworks: Scikit-learn",
      "Cloud Platforms: AWS, Azure"
    ]
  },
  {
    module: "Data Visualization Techniques",
    topics: [
      "Effective data storytelling",
      "Common visualization types: Histograms, Scatter Plots, Bar Charts",
      "Example: Visualizing sales data to identify trends",
      "Specialized visualization tools"
    ]
  },
  {
    module: "Applications in Business",
    topics: [
      "Customer Segmentation",
      "Targeted Marketing",
      "Fraud Detection in Financial Transactions",
      "Recommendation Systems in E-commerce",
      "Example: Netflix recommendation algorithms"
    ]
  },
  {
    module: "Applications in Healthcare",
    topics: [
      "Disease Diagnosis",
      "Drug Discovery",
      "Personalized Medicine",
      "Predicting hospital readmission rates",
      "Analyzing patient data for better outcomes"
    ]
  },
  {
    module: "Ethical Considerations",
    topics: [
      "Address bias in data and algorithms",
      "Fairness",
      "Accountability",
      "Transparency",
      "Data privacy and security",
      "Following ethical guidelines"
    ]
  },
  {
    module: "Future Trends",
    topics: [
      "Explainable AI (XAI)",
      "AutoML",
      "Edge AI",
      "Quantum Machine Learning",
      "Importance of continuous learning"
    ]
  }
],
},
{
  id: "IT-111",
  title: "DevOps & Cloud Engineering", // ✅ Now matches API: "DevOps & Cloud"
  category: "IT",
  subcategory: "CI/CD",
  price: 7041,
  discountPrice: 5393,
  thumbnail: devops,
  instructor: "Sneha Iyer",
  totalLessons: 55,
  totalDuration: 162000,
  certificate: true,
  bestseller: true,
  featured: true,
  level: "Advanced",
  videos: [
    { id: "vid-IT-111-1", title: "CI/CD Pipelines", duration: 2000, url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" },
    { id: "vid-IT-111-2", title: "Docker Deep Dive", duration: 2200, url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" },
    { id: "vid-IT-111-3", title: "AWS Deployment", duration: 2100, url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" }
  ], syllabus: [{
         
          module: "Introduction to DevOps",
          topics: [
            "What is DevOps?",
            "DevOps Lifecycle & Benefits",
            "DevOps vs. Traditional IT",
            "Key DevOps Principles (CI/CD, Automation, Collaboration)",
          ],
        },
        {
          
          module: "Linux Fundamentals",
          topics: [
            "Basic Linux Commands",
            "File System, Users, and Permissions",
            "Networking Basics (SSH, SCP, Firewalls)",
            "Process Management",
          ],
        },
        {
          
          module: "Version Control with Git",
          topics: [
            "Git Basics (Init, Clone, Add, Commit, Push, Pull)",
            "Branching and Merging",
            "GitHub/GitLab/Bitbucket Basics",
            "Git Workflow (Git Flow, Forking, Pull Requests)",
          ],
        },
        {

          module: "Continuous Integration & Continuous Deployment (CI/CD)",
          topics: [
            "Introduction to CI/CD Pipelines",
            "Jenkins Basics (Installation, Jobs, Pipelines)",
            "GitHub Actions, GitLab CI/CD",
            "Artifact Management (Nexus, Artifactory)",
          ],
        },
        {

          module: "Containerization with Docker",
          topics: [
            "What is Docker & Why Use It?",
            "Docker Installation & Setup",
            "Docker Images & Containers",
            "Docker Compose",
            "Docker Networking & Storage",
          ],
        },
        {

          module: "Container Orchestration with Kubernetes",
          topics: [
            "Kubernetes Architecture (Master, Nodes, Pods, Services)",
            "Deploying Applications on Kubernetes",
            "Kubernetes Networking & Storage",
            "Helm Charts Basics",
            "Monitoring Kubernetes (Prometheus, Grafana)",
          ],
        },
        {

          module: "Infrastructure as Code (IaC)",
          topics: [
            "Introduction to IaC",
            "Terraform Basics (Providers, Modules, State Management)",
            "Ansible Basics (Playbooks, Roles)",
            "CloudFormation (AWS Specific)",
          ],
        },
        {
          
          module: "Cloud Computing Basics",
          topics: [
            "What is Cloud Computing?",
            "Cloud Service Models (IaaS, PaaS, SaaS)",
            "Cloud Providers Overview (AWS, Azure, GCP)",
          ],
        },
        {
         
          module: "AWS Fundamentals (or Azure/GCP)",
          topics: [
            "AWS Account Setup & IAM",
            "EC2, S3, RDS, VPC Basics",
            "Load Balancers & Auto Scaling",
            "Serverless Computing (Lambda, API Gateway)",
            "Cloud Monitoring (CloudWatch, CloudTrail)",
          ],
        },
        {
          
          module: "Logging & Monitoring",
          topics: [
            "Log Management (ELK Stack: Elasticsearch, Logstash, Kibana)",
            "Monitoring Tools (Prometheus, Grafana, Datadog)",
          ],
        },
        {

          module: "Security & Compliance in DevOps",
          topics: [
            "DevSecOps Fundamentals",
            "Security Best Practices in CI/CD",
            "Container & Cloud Security",
          ],
        },
        {

          module: "Final Project & Best Practices",
          topics: [
            "Build a CI/CD Pipeline for an Application",
            "Deploy a Full-Stack App on Kubernetes",
            "Automate Infrastructure with Terraform",
          ],
        },],
},
{
  id: "IT-112",
  title: "Cybersecurity Essentials", // ✅ Now matches API: "Cybersecurity"
  category: "IT",
  subcategory: "Cybersecurity",
  price: 5393,
  discountPrice: 4149,
  thumbnail: cyber,
  instructor: "Nethran",
  totalLessons: 30,
  totalDuration: 72000,
  certificate: true,
  bestseller: false,
  featured: false,
  level: "Intermediate",
  videos: [
    { id: "vid-IT-112-1", title: "Threat Landscape", duration: 1300, url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" },
    { id: "vid-IT-112-2", title: "Network Security", duration: 1500, url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" },
    { id: "vid-IT-112-3", title: "Ethical Hacking Intro", duration: 1400, url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" }
  ], syllabus: [
  {
    module: "Defining Cybersecurity",
    topics: [
      "Cybersecurity protects systems, networks, and data from digital attacks",
      "Confidentiality: Protecting sensitive information from unauthorized access",
      "Integrity: Ensuring accuracy and completeness of data",
      "Availability: Maintaining access to systems and data when needed",
      "Understanding the CIA Triad",
      "Common cyber threats: malware, phishing, ransomware, DDoS attacks"
    ]
  },
  {
    module: "The Growing Threat Landscape",
    topics: [
      "Cybercrime costs projected to reach $10.5 trillion annually by 2025",
      "Average of 39 seconds between cyberattacks",
      "68% increase in ransomware attacks in 2023"
    ]
  },
  {
    module: "Impact on Individuals",
    topics: [
      "Identity theft affected 49 million Americans in 2022",
      "Average cost of a data breach: $4.45 million in 2023",
      "Privacy violations and loss of trust in digital services"
    ]
  },
  {
    module: "Impact on Businesses",
    topics: [
      "Operational disruption due to downtime and recovery costs",
      "Reputational damage and loss of customer trust",
      "Legal and regulatory liabilities (GDPR, CCPA fines)",
      "Intellectual property theft and loss of competitive advantage"
    ]
  },
  {
    module: "Building a Strong Security Posture",
    topics: [
      "Conduct regular risk assessments",
      "Implement security policies",
      "Provide ongoing employee training",
      "Use a layered security approach",
      "Continuous monitoring and incident response"
    ]
  },
  {
    module: "Essential Security Measures",
    topics: [
      "Multi-Factor Authentication (MFA) – reduces account takeover risk by 99%",
      "Strong passwords managed via password managers",
      "Regular software updates to patch vulnerabilities",
      "Firewalls and intrusion detection systems"
    ]
  },
  {
    module: "Employee Training and Awareness",
    topics: [
      "Human error involved in 82% of breaches",
      "Phishing simulations to recognize and report phishing emails",
      "Security awareness programs on risks and best practices",
      "Foster a culture of security as a shared responsibility"
    ]
  },
  {
    module: "Incident Response Planning",
    topics: [
      "Develop a comprehensive incident response plan",
      "Define roles and responsibilities",
      "Establish communication protocols and recovery procedures",
      "Test the plan through simulations and tabletop exercises",
      "Report incidents to CISA within 72 hours (as per federal directive)"
    ]
  },
  {
    module: "Conclusion: Staying Ahead of the Curve",
    topics: [
      "Cybersecurity is an ongoing process, not a one-time fix",
      "Stay informed about latest threats and vulnerabilities",
      "Adapt security measures to address evolving risks",
      "Partner with cybersecurity experts to strengthen defenses"
    ]
  }
],
},
  // Add remaining IT courses as needed (IT-204 to IT-212)

 // =============== NON-IT COURSES (IDs: NIT-301 to NIT-312) ===============
// =============== NON-IT COURSES (Aligned with API) ===============
{
  id: "NIT-101",
  title: "Creative Writing Workshop",
  category: "Non-IT",
  subcategory: "Creative Writing",
  price: 5999.99,
  discountPrice: 4999.99,
  thumbnail: creative_writing,
  instructor: "Amanda Roberts",
  totalLessons: 20,
  totalDuration: 36000,
  certificate: true,
  bestseller: false,
  featured: true,
  level: "Intermediate",
  videos: [
    { id: "vid-NIT-101-1", title: "Finding Your Creative Voice", duration: 1200, url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" },
    { id: "vid-NIT-101-2", title: "Building Compelling Characters", duration: 1400, url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" },
    { id: "vid-NIT-101-3", title: "Plot Structure & Pacing", duration: 1100, url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" }
  ], syllabus: [{
          module: "Introduction to Creative Writing",
          topics: [
            "What is creative writing?",
            "Freewriting and brainstorming exercises",
            "The importance of observation and imagination",
          ],
        },
        {
          module: "Character Development",
          topics: [
            "Creating believable characters",
            "Character motivation and depth",
            "Writing exercises on developing character backstory",
          ],
        },
        {
          module: "Setting and Atmosphere",
          topics: [
            "The role of setting in storytelling",
            "Using sensory details to build atmosphere",
            "Writing exercise: Descriptive scene building",
          ],
        },
        {
          module: "Plot and Structure",
          topics: [
            "Basic story structure (beginning, middle, end)",
            "Conflict and resolution",
            "Writing exercise: Outlining a short story",
          ],
        },
        {
          module: "Writing Dialogue",
          topics: [
            "The purpose of dialogue in fiction",
            "Writing natural and engaging conversations",
            "Writing exercise: Crafting a dialogue-driven scene",
          ],
        },
        {
          module: "Poetry Basics",
          topics: [
            "Introduction to poetic forms and free verse",
            "Playing with rhythm, rhyme, and imagery",
            "Writing exercise: Creating a short poem",
          ],
        },
        {
          module: "Creative Nonfiction",
          topics: [
            "What is creative nonfiction?",
            "Personal essays and memoir writing",
            "Writing exercise: Telling a true story creatively",
          ],
        },
        {
          module: "Revision and Editing",
          topics: [
            "The importance of rewriting",
            "Peer review and feedback",
            "Editing exercise: Revising a previous piece",
          ],
        },
        {
          module: "Finding Your Voice",
          topics: [
            "What makes a writer’s voice unique?",
            "Experimenting with style and perspective",
            "Writing exercise: Imitation and adaptation",
          ],
        },
        {
          module: "Publishing and Next Steps",
          topics: [
            "Basics of submitting work for publication",
            "Writing as a daily practice",
            "Final project: Polished short story, poem, or essay",
          ],
        },
],
},
{
  id: "NIT-102",
  title: "Graphic Design Masterclass", // ✅ Now matches API: "Graphic Design"
  category: "Non-IT",
  subcategory: "Graphic Design",
  price: 6499.99,
  discountPrice: 5499.99,
  thumbnail: graphics, // ✅ Correct image
  instructor: "Michael Chen",
  totalLessons: 32,
  totalDuration: 57600,
  certificate: true,
  bestseller: true,
  featured: true,
  level: "All Levels",
  videos: [
    { id: "vid-NIT-102-1", title: "Design Principles & Color Theory", duration: 1600, url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" },
    { id: "vid-NIT-102-2", title: "Typography Essentials", duration: 1800, url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" },
    { id: "vid-NIT-102-3", title: "Adobe Photoshop Workflow", duration: 1700, url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" }
  ], syllabus: [{
          module: "Graphic Design Fundamentals",
          topics: [
            "Introduction to Design Principles",
            "Color Theory",
            "Typography Basics",
            "Visual Hierarchy",
          ],
        },
        {
          module: "Software Tools",
          topics: [
            "Getting Started with Adobe Photoshop",
            "Using Adobe Illustrator",
            "Designing in Canva",
            "Tips for Efficient Workflow",
          ],
        },
        {
          module: "Creative Projects",
          topics: [
            "Logo Design",
            "Poster Design",
            "Social Media Graphics",
            "Designing for Print",
          ],
        },
        {
          module: "Portfolio Development",
          topics: [
            "Showcasing Your Work",
            "Creating a Digital Portfolio",
            "Presenting Your Designs",
            "Building a Personal Brand",
          ],
        },
],
},
{
  id: "NIT-103",
  title: "Digital Marketing Mastery", // ✅ Now matches API: "Digital Marketing"
  category: "Non-IT",
  subcategory: "SEO",
  price: 5999.99,
  discountPrice: 4999.99,
  thumbnail: digital_marketing, // ✅ Correct image
  instructor: "Sarah Johnson",
  totalLessons: 24,
  totalDuration: 43200,
  certificate: true,
  bestseller: true,
  featured: true,
  level: "Intermediate",
  videos: [
    { id: "vid-NIT-103-1", title: "SEO Fundamentals", duration: 1300, url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" },
    { id: "vid-NIT-103-2", title: "Content Marketing Strategy", duration: 1500, url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" },
    { id: "vid-NIT-103-3", title: "Social Media Campaigns", duration: 1200, url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" }
  ], syllabus: [{
          module: "Introduction to Digital Marketing",
          topics: [
            "What is Digital Marketing?",
            "Traditional vs. Digital Marketing",
            "Importance & Scope",
            "Key Channels in Digital Marketing",
            "Overview of Career Opportunities",
          ],
        },
        {
          module: "Website Planning & Basics of SEO",
          topics: [
            "Importance of a Website in Digital Marketing",
            "Basics of WordPress & Website Creation",
            "Introduction to Search Engine Optimization (SEO)",
            "On-Page vs. Off-Page SEO",
            "Keyword Research Basics",
          ],
        },
        {
          module: "Search Engine Optimization (SEO) – Deep Dive",
          topics: [
            "SEO Ranking Factors",
            "Meta Tags, URL Structure, Internal Linking",
            "Link Building Strategies",
            "SEO Tools (Google Search Console, Ubersuggest, etc.)",
            "SEO Best Practices",
          ],
        },
        {
          module: "Content Marketing & Blogging",
          topics: [
            "Importance of Content Marketing",
            "Blogging Basics (WordPress, Blogger)",
            "Creating SEO-Friendly Content",
            "Content Promotion Strategies",
            "Tools for Content Writing & Editing",
          ],
        },
        {
          module: "Social Media Marketing (SMM) – Basics",
          topics: [
            "Introduction to Social Media Platforms (Facebook, Instagram, LinkedIn, Twitter)",
            "Creating an Effective Social Media Strategy",
            "Social Media Post Planning & Scheduling",
            "Basics of Engagement & Community Building",
          ],
        },
        {
          module: "Facebook & Instagram Marketing",
          topics: [
            "Understanding Facebook & Instagram Algorithms",
            "Creating Business Pages & Profiles",
            "Running Ads on Facebook & Instagram",
            "Audience Targeting & Budgeting",
            "Insights & Analytics",
          ],
        },
        {
          module: "Google Ads & Pay-Per-Click (PPC) Advertising",
          topics: [
            "Introduction to Google Ads",
            "Search Ads vs. Display Ads",
            "Keyword Research for PPC",
            "Bidding Strategies & Quality Score",
            "Google Ads Analytics",
          ],
        },
        {
          module: "Email Marketing & Lead Generation",
          topics: [
            "Basics of Email Marketing",
            "Tools (Mailchimp, ConvertKit, etc.)",
            "Creating Engaging Email Campaigns",
            "Lead Magnet & Landing Pages",
            "Email Automation",
          ],
        },
        {
          module: "Analytics & Performance Measurement",
          topics: [
            "Introduction to Google Analytics",
            "Understanding Key Metrics (Traffic, Bounce Rate, CTR, etc.)",
            "Social Media & Ad Campaign Analytics",
            "A/B Testing & Conversion Optimization",
          ],
        },
        {
          module: "Digital Marketing Strategy & Freelancing Opportunities",
          topics: [
            "Building a Digital Marketing Strategy",
            "Case Studies & Real-World Applications",
            "Freelancing Platforms (Upwork, Fiverr, Freelancer)",
            "How to Get Clients & Build a Portfolio",
            "Career Guidance & Next Steps",
          ],
        },
],
},
{
  id: "NIT-104",
  title: "Health Care Management Essentials", // ✅ Matches API: "Healthcare Management"
  category: "Non-IT",
  subcategory: "Healthcare Systems",
  price: 6999.99,
  discountPrice: 5999.99,
  thumbnail: health_care,
  instructor: "Dr. Anjali Mehta",
  totalLessons: 28,
  totalDuration: 50400,
  certificate: true,
  bestseller: true,
  featured: true,
  level: "Intermediate",
  videos: [
    { id: "vid-NIT-104-1", title: "Introduction to Healthcare Systems", duration: 1500, url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" },
    { id: "vid-NIT-104-2", title: "Hospital Administration", duration: 1700, url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" },
    { id: "vid-NIT-104-3", title: "Health Policy & Ethics", duration: 1400, url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" }
  ], syllabus: [{
          module: "Introduction to Health Care Management",
          topics: [
            "Overview of Health Care Systems (Public vs. Private)",
            "Key Functions of Health Care Management",
            "Roles and Responsibilities of Health Care Managers",
          ],
        },
        {
          module: "Health Care Policies and Regulations",
          topics: [
            "Health Care Laws & Regulations (HIPAA, ACA, etc.)",
            "Ethics in Health Care Management",
            "Patient Rights and Confidentiality",
          ],
        },
        {
          module: "Organizational Structure in Health Care",
          topics: [
            "Types of Health Care Organizations (Hospitals, Clinics, HMOs)",
            "Hierarchy and Leadership in Health Care Facilities",
            "The Role of Government and Private Entities",
          ],
        },
        {
          module: "Financial Management in Health Care",
          topics: [
            "Health Care Revenue Cycle",
            "Budgeting and Cost Control",
            "Insurance and Reimbursement Systems",
          ],
        },
        {
          module: "Health Care Quality and Patient Safety",
          topics: [
            "Quality Assurance in Health Care",
            "Measuring Health Care Performance (KPIs, Accreditation)",
            "Patient-Centered Care & Safety Protocols",
          ],
        },
        {
          module: "Human Resource Management in Health Care",
          topics: [
            "Workforce Planning and Recruitment",
            "Staff Training and Development",
            "Managing Health Care Teams and Conflict Resolution",
          ],
        },
        {
          module: "Health Information Systems and Technology",
          topics: [
            "Electronic Health Records (EHRs)",
            "Telemedicine and Digital Health Trends",
            "Data Security and Privacy in Health Care",
          ],
        },
        {
          module: "Strategic Planning and Health Care Marketing",
          topics: [
            "Strategic Management in Health Care",
            "Marketing Strategies for Health Services",
            "Community Outreach and Patient Engagement",
          ],
        },
        {
          module: "Public Health and Epidemiology Basics",
          topics: [
            "Role of Public Health in Health Care Management",
            "Disease Prevention and Health Promotion",
            "Health Care Crisis and Disaster Management",
          ],
        },
        {
          module: "Case Studies and Practical Applications",
          topics: [
            "Case Studies on Successful Health Care Management",
            "Problem-Solving in Real-World Scenarios",
            "Course Review and Q&A",
          ],
        },
],
},
{
  id: "NIT-105",
  title: "Business Law Basics", // ✅ Matches API
  category: "Non-IT",
  subcategory: "Business Law",
  price: 5499.99,
  discountPrice: 4499.99,
  thumbnail: business_law,
  instructor: "James Carter",
  totalLessons: 22,
  totalDuration: 39600,
  certificate: true,
  bestseller: false,
  featured: false,
  level: "Beginner",
  videos: [
    { id: "vid-NIT-105-1", title: "Introduction to Business Law", duration: 1200, url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" },
    { id: "vid-NIT-105-2", title: "Understanding Contracts", duration: 1400, url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" },
    { id: "vid-NIT-105-3", title: "Legal Ethics in Business", duration: 1100, url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" }
  ], syllabus: [{
          module: "Introduction to Business Law",
          topics: [
            "Definition, nature, and importance of business law",
            "Sources of business law (Constitution, statutes, case law, contracts, etc.)",
            "Relationship between law and business",
          ],
        },
        {
          module: "Law of Contracts",
          topics: [
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
          module: "Sale of Goods Act",
          topics: [
            "Formation of a contract of sale",
            "Conditions and warranties",
            "Transfer of ownership and risk",
            "Rights of unpaid sellers",
          ],
        },
        {
          module: "Negotiable Instruments Act",
          topics: [
            "Meaning and types (cheques, promissory notes, bills of exchange)",
            "Characteristics and endorsement",
            "Dishonor and discharge of negotiable instruments",
          ],
        },
        {
          module: "Company Law",
          topics: [
            "Types of companies (Private, Public, One-Person Company)",
            "Incorporation process",
            "Memorandum and Articles of Association",
            "Directors and their duties",
            "Shareholders and meetings",
          ],
        },
        {
          module: "Consumer Protection Act",
          topics: [
            "Consumer rights and responsibilities",
            "Redressal mechanisms",
            "Unfair trade practices",
          ],
        },
        {
          module: "Intellectual Property Rights (IPR)",
          topics: [
            "Basics of patents, trademarks, copyrights, and trade secrets",
            "Importance of IPR in business",
          ],
        },
        {
          module: "Partnership and LLP (Limited Liability Partnership) Law",
          topics: [
            "Partnership Act: Formation, rights, and liabilities of partners",
            "LLP Act: Features and differences from a partnership",
          ],
        },
        {
          module: "Employment and Labor Laws",
          topics: [
            "Employer-employee relationship",
            "Minimum wages, provident fund, gratuity",
            "Industrial disputes and trade unions",
          ],
        },
        {
          module: "Competition Law and Corporate Governance",
          topics: [
            "Anti-competitive practices",
            "Role of competition commission",
            "Corporate governance principles",
          ],
        },
],
},
{
  id: "NIT-106",
  title: "Environmental Science and Sustainability", // ✅ Matches API
  category: "Non-IT",
  subcategory: "Ecology",
  price: 4999.99,
  discountPrice: 3999.99,
  thumbnail: environment,
  instructor: "Dr. Fiona Blake",
  totalLessons: 24,
  totalDuration: 43200,
  certificate: true,
  bestseller: true,
  featured: true,
  level: "Beginner",
  videos: [
    { id: "vid-NIT-106-1", title: "Ecosystems & Biodiversity", duration: 1300, url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" },
    { id: "vid-NIT-106-2", title: "Climate Change Science", duration: 1500, url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" },
    { id: "vid-NIT-106-3", title: "Sustainable Solutions", duration: 1200, url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" }
  ], syllabus: [{
          module: "Introduction to Environmental Science",
          topics: [
            "Definition, scope, and importance",
            "Relationship between environment and humans",
            "Components of the environment (biotic and abiotic)",
          ],
        },
        {
          module: "Natural Resources",
          topics: [
            "Types: Renewable and Non-renewable resources",
            "Forest, water, mineral, land, and energy resources",
            "Conservation and sustainable use of resources",
          ],
        },
        {
          module: "Ecosystem and Biodiversity",
          topics: [
            "Structure and function of ecosystems",
            "Types of ecosystems (terrestrial and aquatic)",
            "Food chains, food webs, and ecological pyramids",
            "Biodiversity: Importance, threats, and conservation",
          ],
        },
        {
          module: "Environmental Pollution",
          topics: [
            "Types of pollution: Air, water, soil, and noise pollution",
            "Causes, effects, and control measures",
            "Global environmental issues (climate change, acid rain, ozone depletion)",
          ],
        },
        {
          module: "Environmental Management and Sustainable Development",
          topics: [
            "Environmental laws and policies",
            "Role of individuals and communities in environmental conservation",
            "Sustainable development goals (SDGs)",
          ],
        },
        {
          module: "Climate Change and Global Warming",
          topics: [
            "Greenhouse effect and global warming",
            "Causes and impacts of climate change",
            "Mitigation and adaptation strategies",
          ],
        },
        {
          module: "Waste Management",
          topics: [
            "Types of waste (solid, liquid, e-waste)",
            "Waste disposal methods (landfills, incineration, recycling)",
            "Principles of reduce, reuse, recycle (3Rs)",
          ],
        },
        {
          module: "Environmental Ethics and Awareness",
          topics: [
            "Role of education in environmental conservation",
            "Environmental movements and activism",
            "Individual and collective responsibilities",
          ],
        },
],
},
{
  id: "NIT-107",
  title: "Human Resources Management", // ✅ Matches API: "Human Resources"
  category: "Non-IT",
  subcategory: "Recruitment",
  price: 5999.99,
  discountPrice: 4999.99,
  thumbnail: hr,
  instructor: "Thomas Anderson",
  totalLessons: 28,
  totalDuration: 50400,
  certificate: true,
  bestseller: false,
  featured: false,
  level: "Intermediate",
  videos: [
    { id: "vid-NIT-107-1", title: "HR Strategy Overview", duration: 1400, url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" },
    { id: "vid-NIT-107-2", title: "Effective Recruitment", duration: 1600, url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" },
    { id: "vid-NIT-107-3", title: "Employee Onboarding", duration: 1300, url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" }
  ], syllabus: [{
          module: "Introduction to Human Resources",
          topics: [
            "Definition, scope, and importance of HR",
            "Evolution of HR management",
            "HR functions and roles",
          ],
        },
        {
          module: "HR Planning and Strategy",
          topics: [
            "Workforce planning",
            "HR policies and procedures",
            "Aligning HR with organizational goals",
          ],
        },
        {
          module: "Recruitment and Selection",
          topics: [
            "Job analysis and job descriptions",
            "Sourcing candidates",
            "Selection methods (interviews, tests, assessments)",
            "Onboarding and orientation",
          ],
        },
        {
          module: "Employee Training and Development",
          topics: [
            "Training needs assessment",
            "Employee learning and development programs",
            "Career planning and succession planning",
          ],
        },
        {
          module: "Performance Management",
          topics: [
            "Performance appraisal methods",
            "Key performance indicators (KPIs)",
            "Feedback and employee motivation",
          ],
        },
        {
          module: "Compensation and Benefits",
          topics: [
            "Salary structures and wage policies",
            "Incentives and bonus plans",
            "Employee benefits (healthcare, retirement plans, etc.)",
          ],
        },
        {
          module: "Employee Relations and Workplace Ethics",
          topics: [
            "Employee engagement",
            "Conflict resolution",
            "Workplace ethics and corporate culture",
          ],
        },
        {
          module: "Labor Laws and Compliance",
          topics: [
            "Key employment laws and regulations",
            "Workplace safety and health (OSHA, etc.)",
            "Employee rights and responsibilities",
          ],
        },
        {
          module: "HR Technology and Trends",
          topics: [
            "HR software and automation",
            "Remote work and hybrid workplace policies",
            "Diversity, Equity, and Inclusion (DEI) initiatives",
          ],
        },
        {
          module: "Exit Management and Retention",
          topics: [
            "Employee retention strategies",
            "Resignation, termination, and exit interviews",
            "Offboarding and knowledge transfer",
          ],
        },
],
},
{
  id: "NIT-108",
  title: "Basic Photography Syllabus", // ✅ Matches API: "Photography"
  category: "Non-IT",
  subcategory: "Camera Basics",
  price: 5499.99,
  discountPrice: 4499.99,
  thumbnail: photography,
  instructor: "Jessica Martinez",
  totalLessons: 24,
  totalDuration: 43200,
  certificate: true,
  bestseller: true,
  featured: true,
  level: "Beginner",
  videos: [
    { id: "vid-NIT-108-1", title: "Understanding Your Camera", duration: 1300, url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" },
    { id: "vid-NIT-108-2", title: "Composition Rules", duration: 1500, url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" },
    { id: "vid-NIT-108-3", title: "Photo Editing Basics", duration: 1200, url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" }
  ], syllabus: [ {
          module: "Introduction to Photography",
          topics: [
            "History and evolution of photography",
            "Types of photography (portrait, landscape, macro, street, etc.)",
            "Understanding different camera types (DSLR, mirrorless, smartphone, etc.)",
          ],
        },
        {
          module: "Camera Basics & Settings",
          topics: [
            "Understanding camera parts and functions",
            "Aperture, Shutter Speed, and ISO (Exposure Triangle)",
            "White balance and color temperature",
            "Autofocus vs. Manual focus",
          ],
        },
        {
          module: "Composition & Framing",
          topics: [
            "Rule of thirds",
            "Leading lines and symmetry",
            "Depth of field",
            "Framing and perspective",
            "Using negative space",
          ],
        },
        {
          module: "Lighting Techniques",
          topics: [
            "Natural vs. Artificial lighting",
            "Golden hour and blue hour photography",
            "Using reflectors and diffusers",
            "Understanding flash photography",
            "Light metering modes",
          ],
        },
        {
          module: "Lenses & Equipment",
          topics: [
            "Types of lenses (wide-angle, telephoto, macro, prime, etc.)",
            "Filters and their uses (ND, polarizer, UV)",
            "Tripods, gimbals, and stabilizers",
          ],
        },
        {
          module: "Post-Processing Basics",
          topics: [
            "Introduction to editing software (Adobe Lightroom, Photoshop, Snapseed)",
            "Cropping and straightening",
            "Adjusting brightness, contrast, and saturation",
            "Basic retouching techniques",
          ],
        },
        {
          module: "Practical Sessions & Projects",
          topics: [
            "Outdoor and indoor shooting practice",
            "Thematic photography assignments",
            "Photo critique and improvement suggestions",
          ],
        },
        {
          module: "Photography as a Career",
          topics: [
            "Understanding copyright and image rights",
            "Building a photography portfolio",
            "Social media and online platforms for photographers",
            "Basics of freelancing and business in photography",
          ],
        },
],
},
{
  id: "NIT-109",
  title: "Mastering Public Speaking", // ✅ Matches API
  category: "Non-IT",
  subcategory: "Presentation",
  price: 5499.99,
  discountPrice: 4499.99,
  thumbnail: public_speaking,
  instructor: "Dr. Rachel Green",
  totalLessons: 16,
  totalDuration: 28800,
  certificate: true,
  bestseller: true,
  featured: true,
  level: "Intermediate",
  videos: [
    { id: "vid-NIT-109-1", title: "Overcoming Stage Fright", duration: 1000, url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" },
    { id: "vid-NIT-109-2", title: "Crafting Your Speech", duration: 1200, url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" },
    { id: "vid-NIT-109-3", title: "Delivery & Body Language", duration: 900, url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" }
  ], syllabus: [{
          module: "Introduction to Public Speaking",
          topics: [
            "Importance of public speaking",
            "Overcoming stage fear and nervousness",
            "Basics of effective communication",
          ],
        },
        {
          module: "Speech Structure and Organization",
          topics: [
            "Crafting a strong introduction, body, and conclusion",
            "Choosing a speech topic and purpose",
            "Writing an engaging speech",
          ],
        },
        {
          module: "Voice and Tone Control",
          topics: [
            "Volume, pitch, and pace",
            "Techniques for clear and impactful speech delivery",
            "Avoiding monotony and improving articulation",
          ],
        },
        {
          module: "Body Language and Non-Verbal Communication",
          topics: [
            "Eye contact, gestures, and posture",
            "Using facial expressions effectively",
            "Avoiding nervous habits",
          ],
        },
        {
          module: "Audience Engagement Techniques",
          topics: [
            "Understanding your audience",
            "Using humor, stories, and rhetorical questions",
            "Handling audience reactions",
          ],
        },
        {
          module: "Overcoming Public Speaking Anxiety",
          topics: [
            "Managing nervousness through breathing techniques",
            "Positive visualization and confidence-building exercises",
            "Practicing mindfulness and relaxation",
          ],
        },
        {
          module: "Impromptu Speaking and Quick Thinking",
          topics: [
            "Handling unexpected speech topics",
            "Structuring an impromptu response quickly",
            "Practicing extemporaneous speaking",
          ],
        },
        {
          module: "Persuasive and Informative Speaking",
          topics: [
            "Key differences between persuasive and informative speeches",
            "Using logic, emotions, and credibility (ethos, pathos, logos)",
            "Organizing speech content effectively",
          ],
        },
        {
          module: "Speech Practice and Feedback",
          topics: [
            "Delivering short speeches",
            "Constructive peer and instructor feedback",
            "Improving based on critiques",
          ],
        },
        {
          module: "Final Speech and Course Wrap-Up",
          topics: [
            "Delivering a final prepared speech",
            "Self-reflection on progress",
            "Key takeaways and future improvement tips",
          ],
        },
],
},
{
  id: "NIT-110",
  title: "Theatre Arts Foundations", // ✅ Matches API: "Theater Arts"
  category: "Non-IT",
  subcategory: "Acting",
  price: 5999.99,
  discountPrice: 4999.99,
  thumbnail: theatre_arts,
  instructor: "Liam Thompson",
  totalLessons: 20,
  totalDuration: 36000,
  certificate: true,
  bestseller: false,
  featured: true,
  level: "All Levels",
  videos: [
    { id: "vid-NIT-110-1", title: "Introduction to Acting", duration: 1200, url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" },
    { id: "vid-NIT-110-2", title: "Stage Presence", duration: 1400, url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" },
    { id: "vid-NIT-110-3", title: "Dramatic Storytelling", duration: 1100, url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" }
  ], syllabus: [{
          module: "Introduction to Theatre Arts",
          topics: [
            "Overview of theatre history and its importance",
            "Different forms of theatre (drama, musical, experimental, etc.)",
            "Basic theatre terminology",
          ],
        },
        {
          module: "Voice and Speech Training",
          topics: [
            "Warm-up exercises for voice",
            "Diction, projection, and articulation",
            "Understanding tone, pitch, and rhythm",
          ],
        },
        {
          module: "Body Language and Movement",
          topics: [
            "Physical warm-ups and exercises",
            "Body control and expressive movement",
            "Using gestures and posture effectively on stage",
          ],
        },
        {
          module: "Improvisation and Creativity",
          topics: [
            "Introduction to improvisation",
            "Spontaneity and thinking on your feet",
            "Group improv games and exercises",
          ],
        },
        {
          module: "Character Development",
          topics: [
            "Understanding character motivation and background",
            "Developing emotional depth",
            "Exercises to explore different roles",
          ],
        },
        {
          module: "Script Analysis and Dialogue Delivery",
          topics: [
            "Reading and understanding scripts",
            "Memorization techniques",
            "Practicing monologues and dialogues",
          ],
        },
        {
          module: "Blocking and Stage Directions",
          topics: [
            "Understanding stage positioning and movement",
            "Basic blocking techniques",
            "Importance of spatial awareness on stage",
          ],
        },
        {
          module: "Scene Work and Rehearsals",
          topics: [
            "Rehearsing small scenes in groups",
            "Applying learned techniques (voice, movement, blocking)",
            "Feedback and refinement",
          ],
        },
        {
          module: "Technical Aspects of Theatre",
          topics: [
            "Introduction to lighting, sound, and set design",
            "Basics of costumes and props",
            "Role of backstage crew",
          ],
        },
        {
          module: "Performance and Feedback",
          topics: [
            "Final presentation (monologues, duologues, or short scenes)",
            "Constructive critique from instructor and peers",
          ],
        },
],
},
{
  id: "NIT-111",
  title: "Sustainable Agriculture and Farming", // ✅ Matches API
  category: "Non-IT",
  subcategory: "Organic Farming",
  price: 4999.99,
  discountPrice: 3999.99,
  thumbnail: sustainable_agriculture,
  instructor: "Dr. Harish Patel",
  totalLessons: 26,
  totalDuration: 46800,
  certificate: true,
  bestseller: true,
  featured: false,
  level: "Intermediate",
  videos: [
    { id: "vid-NIT-111-1", title: "Principles of Sustainable Farming", duration: 1400, url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" },
    { id: "vid-NIT-111-2", title: "Soil Health & Management", duration: 1600, url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" },
    { id: "vid-NIT-111-3", title: "Agroecology Practices", duration: 1300, url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" }
  ], syllabus: [{
          module: "Introduction to Sustainable Agriculture",
          topics: [
            "Definition and Importance",
            "Principles of Sustainability (Environmental, Economic, Social)",
            "Comparison with Conventional Agriculture",
          ],
        },
        {
          module: "Soil Health and Management",
          topics: [
            "Importance of Soil in Sustainable Farming",
            "Soil Conservation Techniques (Crop Rotation, Cover Cropping, Mulching)",
            "Organic vs. Chemical Fertilizers",
          ],
        },
        {
          module: "Water Conservation Techniques",
          topics: [
            "Efficient Irrigation Methods (Drip Irrigation, Rainwater Harvesting)",
            "Soil Moisture Management",
            "Reducing Water Wastage in Agriculture",
          ],
        },
        {
          module: "Organic Farming Practices",
          topics: [
            "Organic Inputs (Compost, Green Manure, Natural Pesticides)",
            "Certification and Standards for Organic Farming",
            "Benefits and Challenges of Organic Farming",
          ],
        },
        {
          module: "Agroecology and Biodiversity",
          topics: [
            "Role of Biodiversity in Sustainable Farming",
            "Polyculture vs. Monoculture",
            "Integrated Pest Management (IPM)",
          ],
        },
        {
          module: "Climate Change and Agriculture",
          topics: [
            "Impact of Climate Change on Farming",
            "Adaptive Strategies (Drought-Resistant Crops, Agroforestry)",
            "Carbon Sequestration in Agriculture",
          ],
        },
        {
          module: "Sustainable Livestock Management",
          topics: [
            "Ethical Animal Farming Practices",
            "Reducing Environmental Impact of Livestock",
            "Alternative Feed Sources and Waste Management",
          ],
        },
        {
          module: "Permaculture and Regenerative Agriculture",
          topics: [
            "Principles of Permaculture Design",
            "Regenerative Soil Practices",
            "Case Studies of Successful Regenerative Farms",
          ],
        },
        {
          module: "Economic and Policy Aspects of Sustainable Agriculture",
          topics: [
            "Fair Trade and Local Food Systems",
            "Government Policies and Incentives",
            "Challenges in Sustainable Food Supply Chains",
          ],
        },
        {
          module: "Future of Sustainable Agriculture",
          topics: [
            "Innovations in Sustainable Farming (Vertical Farming, Hydroponics)",
            "Role of Technology (AI, Drones, Smart Irrigation)",
            "Career Opportunities and Further Learning Resources",
          ],
        },
],
},
{
  id: "NIT-112",
  title: "Culinary Arts Fundamentals", // ✅ Matches API
  category: "Non-IT",
  subcategory: "Knife Skills",
  price: 5999.99,
  discountPrice: 4999.99,
  thumbnail: culinary_arts,
  instructor: "Chef Elena Garcia",
  totalLessons: 30,
  totalDuration: 54000,
  certificate: true,
  bestseller: true,
  featured: true,
  level: "Beginner",
  videos: [
    { id: "vid-NIT-112-1", title: "Essential Knife Techniques", duration: 1500, url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" },
    { id: "vid-NIT-112-2", title: "Mastering Sauces", duration: 1800, url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" },
    { id: "vid-NIT-112-3", title: "Flavor Pairing & Balance", duration: 1600, url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" }
  ], syllabus: [{
          module: "Introduction to Culinary Arts & Kitchen Safety",
          topics: [
            "Overview of Culinary Arts",
            "Kitchen safety protocols",
            "Proper use of knives and cutting techniques",
            "Understanding kitchen equipment",
          ],
        },
        {
          module: "Knife Skills & Basic Cuts",
          topics: [
            "Types of knives and their uses",
            "Basic cutting techniques (dice, julienne, chiffonade, brunoise, etc.)",
            "Practicing vegetable and fruit cuts",
          ],
        },
        {
          module: "Stocks, Sauces & Soups",
          topics: [
            "Understanding stocks (vegetable, chicken, beef)",
            "Classic mother sauces (béchamel, velouté, espagnole, tomato, hollandaise)",
            "Basic soups (cream soups, broths, and consommés)",
          ],
        },
        {
          module: "Cooking Methods - Dry Heat Techniques",
          topics: [
            "Roasting, grilling, baking, and sautéing",
            "Preparing roasted vegetables and grilled meats",
            "Making pan sauces",
          ],
        },
        {
          module: "Cooking Methods - Moist Heat Techniques",
          topics: [
            "Boiling, steaming, poaching, and braising",
            "Cooking pasta, rice, and grains",
            "Poached eggs and braised meats",
          ],
        },
        {
          module: "Eggs, Dairy & Breakfast Dishes",
          topics: [
            "Different ways to cook eggs (scrambled, poached, omelets, fried)",
            "Making pancakes, waffles, and French toast",
            "Dairy basics: cheese, butter, and cream",
          ],
        },
        {
          module: "Proteins - Poultry, Meat & Seafood",
          topics: [
            "Handling and seasoning meats",
            "Cooking chicken, beef, and fish using different techniques",
            "Introduction to marination and brining",
          ],
        },
        {
          module: "Baking Basics - Breads & Pastries",
          topics: [
            "Understanding baking ingredients (flour, yeast, sugar, butter)",
            "Making basic bread, cookies, and cakes",
            "Introduction to pastry doughs",
          ],
        },
        {
          module: "Vegetables, Salads & Dressings",
          topics: [
            "Cooking and seasoning vegetables",
            "Making salads with homemade dressings (vinaigrettes, creamy dressings)",
            "Introduction to plating techniques",
          ],
        },
        {
          module: "Plating, Presentation & Final Dish Preparation",
          topics: [
            "Principles of food plating and garnishing",
            "Assembling a multi-course meal",
            "Final presentation and tasting session",
          ],
        },
],
},];


export const initialUserState = {

  
  // ✅ KEEP these — they're user-specific actions not from API
  wishlist: ["IT-103", "NIT-102"],
  enquiries: [
    { courseId: "IT-105", enquiredAt: "2025-10-23T10:30:00Z" }
  ],
  assignments: [
    { id: "assign-IT-101-1", courseId: "IT-101", videoId: "vid-IT-101-1", status: "submitted" },
    { id: "assign-IT-102-1", courseId: "IT-102", videoId: "vid-IT-102-1", status: "pending" },
  ],
};