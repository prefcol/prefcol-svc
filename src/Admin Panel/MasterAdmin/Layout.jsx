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

// AdminLayout.jsx
import { Box, useBreakpointValue, IconButton, useDisclosure } from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";
import MasterAdminSidebar from "../MasterAdmin/MasterAdminSidebar";
import { useState } from "react";


const AdminLayout = ({ children }) => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false); // 👈 lifted state

  // Sidebar widths
  const SIDEBAR_EXPANDED_WIDTH = "260px";
  const SIDEBAR_COLLAPSED_WIDTH = "64px";

  // Determine effective sidebar width for layout
  const effectiveSidebarWidth = isMobile 
    ? "0px" 
    : sidebarCollapsed 
      ? SIDEBAR_COLLAPSED_WIDTH 
      : SIDEBAR_EXPANDED_WIDTH;

  return (
    <Box display="flex" minHeight="100vh" position="relative">
      {/* Desktop Sidebar */}
      {!isMobile && (
        <Box as="aside" width={effectiveSidebarWidth} flexShrink={0}>
          <MasterAdminSidebar
            isMobile={false}
            collapsed={sidebarCollapsed}        // 👈 pass current state
            onCollapse={setSidebarCollapsed}    // 👈 pass setter
          />
        </Box>
      )}

      {/* Mobile Drawer */}
      {isMobile && (
        <MasterAdminSidebar
          isMobile={true}
          isOpen={isOpen}
          onClose={onClose}
          // No need to pass collapsed/onCollapse for mobile drawer
        />
      )}

      {/* Main Content */}
      <Box
        as="main"
        flex="1"
        ml={{ base: 0, md: 0 }} // 👈 dynamic margin
        p={{ base: 4, md: 6 }}
        pt={{ base: 16, md: 6 }}
      >
        {/* Mobile Hamburger */}
        {isMobile && (
          <IconButton
            icon={<FaBars />}
            aria-label="Open menu"
            position="fixed"
            top={4}
            left={4}
            zIndex={20}
            onClick={onOpen}
            colorScheme="teal"
            size="md"
            borderRadius="full"
            boxShadow="md"
          />
        )}

        {children}
      </Box>
    </Box>
  );
};

export default AdminLayout;