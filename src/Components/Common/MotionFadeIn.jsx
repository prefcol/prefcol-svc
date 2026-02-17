import React from "react";
import { motion } from "motion/react";

/**
 * Simple reusable fade/slide-in wrapper using Motion for React.
 * Usage:
 *   <MotionFadeIn>
 *     <YourContent />
 *   </MotionFadeIn>
 */
export default function MotionFadeIn({ children, delay = 0, y = 24 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

