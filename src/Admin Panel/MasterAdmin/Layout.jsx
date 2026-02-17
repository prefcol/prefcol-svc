// // import { Box, useBreakpointValue } from "@chakra-ui/react"
// // import MasterAdminSidebar from "./MasterAdminSidebar"


// // const AdminLayout = ({ children }) => {
// //   const sidebarWidth = useBreakpointValue({ base: 0, md: "300px" })

// //   return (
// //     <Box display="flex" minHeight="100vh">
// //       <MasterAdminSidebar />
// //       <Box
// //         as="main"
// //         flex="1"
// //         ml={{ base: 0, md: sidebarWidth }}
// //         p={{ base: 4, md: 6 }}
// //         pt={{ base: 16, md: 6 }}
// //         transition="margin-left 0.3s"
// //       >
// //         {children}
// //       </Box>
// //     </Box>
// //   )
// // }

// // export default AdminLayout

// // import { Box, useBreakpointValue } from "@chakra-ui/react"
// // import MasterAdminSidebar from "./MasterAdminSidebar"

// // const AdminLayout = ({ children }) => {
// //   const sidebarWidth = useBreakpointValue({ base: "0px", md: "300px" })

// //   return (
// //     <Box display="flex" minHeight="100vh">
// //       <Box
// //         as="aside"
// //         width={sidebarWidth}
// //         transition="width 0.3s"
// //         overflow="hidden"
// //       >
// //         <MasterAdminSidebar />
// //       </Box>

// //       <Box
// //         as="main"
// //         flex="1"
// //         ml={{ base: 0, md: sidebarWidth }}
// //         p={{ base: 4, md: 6 }}
// //         pt={{ base: 16, md: 6 }}
// //         transition="margin-left 0.3s"
// //       >
// //         {children}
// //       </Box>
// //     </Box>
// //   )
// // }

// // export default AdminLayout

// // src/layouts/AdminLayout.js
// import { Box, useBreakpointValue, IconButton, useDisclosure } from "@chakra-ui/react";
// import { FaBars } from "react-icons/fa";
// import MasterAdminSidebar from "../MasterAdmin/MasterAdminSidebar"; // ✅ Adjust path as needed

// const AdminLayout = ({ children }) => {
//   const isMobile = useBreakpointValue({ base: true, md: false });
//   const { isOpen, onOpen, onClose } = useDisclosure();

//   const sidebarWidth = "300px"; // Fixed width for desktop

//   return (
//     <Box display="flex" minHeight="100vh" position="relative">
//       {/* Desktop Sidebar: only render on md+ */}
//       {!isMobile && (
//         <Box as="aside" width={sidebarWidth} flexShrink={0}>
//           <MasterAdminSidebar isMobile={false} />
//         </Box>
//       )}

//       {/* Mobile Drawer: only render on mobile */}
//       {isMobile && (
//         <MasterAdminSidebar
//           isMobile={true}
//           isOpen={isOpen}
//           onClose={onClose}
//         />
//       )}

//       {/* Main Content Area */}
//       <Box
//         as="main"
//         flex="1"
//         // ml={{ base: 0, md: sidebarWidth }}
//         p={{ base: 4, md: 6 }}
//         pt={{ base: 16, md: 6 }} // Extra top padding on mobile for button
//       >
//         {/* Mobile Hamburger Button */}
//         {isMobile && (
//           <IconButton
//             icon={<FaBars />}
//             aria-label="Open menu"
//             position="fixed"
//             top={4}
//             left={4}
//             zIndex={20}
//             onClick={onOpen}
//             colorScheme="teal"
//             size="md"
//             borderRadius="full"
//             boxShadow="md"
//           />
//         )}

//         {children}
//       </Box>
//     </Box>
//   );
// };

// export default AdminLayout;

// AdminLayout.jsx – PREFCOL dark enchanted forest theme
import "./adminTheme.css";
import { Box, useBreakpointValue, IconButton, useDisclosure } from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";
import MasterAdminSidebar from "../MasterAdmin/MasterAdminSidebar";
import { useState } from "react";
import { adminTheme } from "./adminTheme";

const AdminLayout = ({ children }) => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const SIDEBAR_EXPANDED_WIDTH = "260px";
  const SIDEBAR_COLLAPSED_WIDTH = "64px";

  const effectiveSidebarWidth = isMobile 
    ? "0px" 
    : sidebarCollapsed 
      ? SIDEBAR_COLLAPSED_WIDTH 
      : SIDEBAR_EXPANDED_WIDTH;

  return (
    <Box className="prefcol-admin-root" display="flex" minHeight="100vh" position="relative" color={adminTheme.textPrimary}>
      {/* Full-screen login image background */}
      <div className="prefcol-admin-bg" aria-hidden="true" />
      {/* Dark overlay so content stays readable */}
      <div className="prefcol-admin-bg-overlay" aria-hidden="true" />
      {/* Animated tree glow – makes the tree feel live */}
      <div className="prefcol-admin-tree-glow" aria-hidden="true" />
      <div className="prefcol-admin-tree-shine" aria-hidden="true" />

      {!isMobile && (
        <Box as="aside" width={effectiveSidebarWidth} flexShrink={0} position="relative" zIndex={10}>
          <MasterAdminSidebar
            isMobile={false}
            collapsed={sidebarCollapsed}
            onCollapse={setSidebarCollapsed}
          />
        </Box>
      )}

      {isMobile && (
        <MasterAdminSidebar
          isMobile={true}
          isOpen={isOpen}
          onClose={onClose}
        />
      )}

      <Box
        as="main"
        flex="1"
        ml={{ base: 0, md: 0 }}
        p={{ base: 4, md: 6 }}
        pt={{ base: 16, md: 6 }}
        minH="100vh"
        position="relative"
        zIndex={10}
      >
        {isMobile && (
          <IconButton
            icon={<FaBars />}
            aria-label="Open menu"
            position="fixed"
            top={4}
            left={4}
            zIndex={20}
            onClick={onOpen}
            bg={adminTheme.bgCard}
            color={adminTheme.accent}
            borderColor={adminTheme.border}
            size="md"
            borderRadius="full"
            boxShadow={`0 0 12px ${adminTheme.accentGlow}`}
            _hover={{ bg: adminTheme.greenDark, color: adminTheme.accent }}
          />
        )}

        {children}
      </Box>
    </Box>
  );
};

export default AdminLayout;