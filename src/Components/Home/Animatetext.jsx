// import { Heading } from "@chakra-ui/react";
// import { motion } from "framer-motion";
// import { useState, useEffect } from "react";

// const text = "Kick Start Your Career!";

// const TypingText = () => {
//   const [displayedText, setDisplayedText] = useState("");
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     if (index < text.length) {
//       const timeout = setTimeout(() => {
//         setDisplayedText((prev) => prev + text[index]);
//         setIndex(index + 1);
//       }, 100); 

//       return () => clearTimeout(timeout);
//     }
//   }, [index]);

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//     >
//       <Heading
//         as="h1"
//         fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
//         fontWeight="bold"
//         color="white"
//         textShadow="2px 2px 8px rgba(0,0,0,0.7)"
//       >
//         {displayedText}
//         <motion.span
//           animate={{ opacity: [0, 1, 0] }}
//           transition={{ duration: 0.8, repeat: Infinity }}
//         >
//           |
//         </motion.span>
//       </Heading>
//     </motion.div>
//   );
// };

// export default TypingText;



// import { Heading } from "@chakra-ui/react";
// import { motion } from "framer-motion";
// import { useState, useEffect } from "react";

// const text = "Kick Start Your Career!";

// const TypingText = () => {
//   const [displayedText, setDisplayedText] = useState("");
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     if (index < text.length) {
//       const timeout = setTimeout(() => {
//         setDisplayedText((prev) => prev + text[index]);
//         setIndex(index + 1);
//       }, 150); // Slower typing speed (100ms -> 150ms)

//       return () => clearTimeout(timeout);
//     }
//   }, [index]);

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1, ease: "easeOut" }} // Smoother fade-in animation
//     >
//       <Heading
//         as="h1"
//         fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
//         fontWeight="bold"
//         color="white"
//         textShadow="2px 2px 8px rgba(0,0,0,0.7)"
//       >
//         {displayedText}
//         <motion.span
//           animate={{ opacity: [0, 1, 0], scale: [1, 1.2, 1] }} // Adding scaling effect to the cursor
//           transition={{ duration: 0.8, repeat: Infinity }}
//         >
//           |
//         </motion.span>
//       </Heading>
//     </motion.div>
//   );
// };

// export default TypingText;



import { Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const text = "Kick Start Your Career!";

const TypingText = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 80);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1,
        ease: "easeOut", 
      }}
    >
      <Heading
        as="h1"
        fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
        fontWeight="bold"
        color="white"
        textShadow="2px 2px 8px rgba(0,0,0,0.7)"
        lineHeight="1.2"
      >
        {/* Typing text */}
        {displayedText}
      </Heading>
    </motion.div>
  );
};

export default TypingText;
