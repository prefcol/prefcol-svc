import React, { useEffect, useState } from "react";
import { Box, Text, Stat, StatLabel, StatNumber, StatHelpText, useBreakpointValue } from "@chakra-ui/react";
import { motion } from "framer-motion"; 

// Utility function to handle number counting animation
const useCountUp = (endValue, duration = 2000) => {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    const totalSteps = duration / 50; // Number of steps (50ms interval)
    const increment = Math.ceil(endValue / totalSteps); // Calculate the increment per step
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep += 1;
      setCurrentValue((prevValue) => {
        const nextValue = Math.min(prevValue + increment, endValue); // Prevent overshooting
        if (nextValue === endValue) clearInterval(interval); // Stop when we reach the target
        return nextValue;
      });
    }, 50); // Update every 50ms

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [endValue, duration]);

  return currentValue;
};

// Combined AnimatedStat Component
const AnimatedStat = ({ title, count, description, duration = 2000 }) => {
  const animatedValue = useCountUp(count, duration);

  const bgColor = useBreakpointValue({ base: "white", md: "gray.50" });
  const textColor = useBreakpointValue({ base: "gray.600", md: "gray.800" });

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      bg={bgColor}
      borderRadius="2xl"
      shadow="md"
      p={6}
      maxW="xs"
      m={4}
      transition="transform 0.3s ease"
      _hover={{ transform: "scale(1.05)" }}
    >
      <Stat>
        <StatLabel fontSize="lg" fontWeight="bold" color={textColor}>
          {title}
        </StatLabel>
        <StatNumber fontSize="4xl" color="teal.600">
          <motion.div
            key={animatedValue}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {animatedValue}
          </motion.div>
        </StatNumber>
        <StatHelpText fontSize="md" color="gray.500">
          {description}
        </StatHelpText>
      </Stat>
    </Box>
  );
};

export default AnimatedStat;
