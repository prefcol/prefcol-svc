import React, { useState, useEffect } from "react";
import { Flex, Box, useMediaQuery, IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";
import TeacherAdminSidebar from "./TeacherAdminSidebar";

/**
 * Shared layout for /teacher-admin: one sidebar + main content.
 * Used for both home and employee-portal to avoid duplicating layout.
 */
export default function TeacherAdminLayout() {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  const [sidebarWidth, setSidebarWidth] = useState(280);
  const { toggleColorMode, colorMode } = useColorMode();
  const contentBg = useColorModeValue("gray.50", "gray.900");
  const contentColor = useColorModeValue("gray.700", "gray.200");

  useEffect(() => {
    const handleSidebarResize = (e) => {
      if (e.detail && typeof e.detail.width === "number") setSidebarWidth(e.detail.width);
    };
    window.addEventListener("sidebarResize", handleSidebarResize);
    return () => window.removeEventListener("sidebarResize", handleSidebarResize);
  }, []);

  return (
    <Flex minH="100vh" direction="row">
      {isLargerThan768 && (
        <Box position="fixed" top={0} left={0} height="100vh" zIndex={100} width={`${sidebarWidth}px`}>
          <TeacherAdminSidebar />
        </Box>
      )}
      <Box
        p={{ base: 4, md: 8 }}
        pt={{ base: 16, md: 8 }}
        bg={contentBg}
        color={contentColor}
        width="100%"
        ml={{ base: 0, md: `${sidebarWidth}px` }}
        transition="margin-left 0.3s ease, background 0.2s, color 0.2s"
        minH="100vh"
        position="relative"
      >
        <IconButton
          aria-label={colorMode === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          icon={colorMode === "dark" ? <FaSun /> : <FaMoon />}
          onClick={toggleColorMode}
          position="fixed"
          top={4}
          right={4}
          zIndex={10}
          size="sm"
          colorScheme="teal"
          variant="ghost"
        />
        <Outlet />
      </Box>
    </Flex>
  );
}
