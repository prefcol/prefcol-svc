// "use client"
// import { Button, Box, Text, VStack, HStack } from "@chakra-ui/react"
// import { useErrorHandler } from "./error-handler"
// import { ToastContainer } from "react-toastify"
// import "react-toastify/dist/ReactToastify.css"
// import "./toast-styles.css"

// export default function ToastExample() {
//   const { showError, showSuccess, showInfo, showWarning } = useErrorHandler()

//   // Example function to demonstrate error handling
//   const handleApiError = () => {
//     // This simulates different backend error responses
//     const errorTypes = [
//       { message: "Failed to login user due to: {} User not found with email: user@example.com" },
//       { message: "Failed to login user due to: {} Incorrect password" },
//       { message: "OTP verification failed: Invalid OTP" },
//       { message: "Account is locked due to too many failed attempts" },
//       { error: "Token has expired" },
//       { data: { message: "Email already exists in our system" } },
//       new Error("Network error: Unable to reach server"),
//     ]

//     // Pick a random error to demonstrate
//     const randomError = errorTypes[Math.floor(Math.random() * errorTypes.length)]
//     showError(randomError)
//   }

//   return (
//     <Box p={6} maxW="md" mx="auto" borderWidth="1px" borderRadius="lg" bg="white" shadow="md">
//       <ToastContainer
//         position="bottom-right"
//         autoClose={4000}
//         hideProgressBar={false}
//         newestOnTop
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//       />

//       <VStack spacing={6} align="stretch">
//         <Text fontSize="xl" fontWeight="bold" textAlign="center">
//           Toast Message Examples
//         </Text>

//         <Text fontSize="sm" color="gray.600">
//           Click the buttons below to see different toast message styles with enhanced error handling.
//         </Text>

//         <HStack spacing={4} justify="center">
//           <Button colorScheme="red" onClick={handleApiError} size="sm">
//             Show Error Toast
//           </Button>

//           <Button
//             colorScheme="green"
//             onClick={() => showSuccess("Your profile has been updated successfully!")}
//             size="sm"
//           >
//             Show Success Toast
//           </Button>
//         </HStack>

//         <HStack spacing={4} justify="center">
//           <Button colorScheme="blue" onClick={() => showInfo("Your session will expire in 5 minutes.")} size="sm">
//             Show Info Toast
//           </Button>

//           <Button
//             colorScheme="orange"
//             onClick={() => showWarning("Please complete your profile to access all features.")}
//             size="sm"
//           >
//             Show Warning Toast
//           </Button>
//         </HStack>
//       </VStack>
//     </Box>
//   )
// }

"use client"

import { useState } from "react"
import { Button, Box, Flex, Text, VStack, Heading, Divider } from "@chakra-ui/react"
import { useErrorHandler } from "./error-handler"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import "./toast-styles.css"
import { AlertCircle, CheckCircle, Info, AlertTriangle, RefreshCw } from "lucide-react"

export default function ToastExample() {
  const { showError, showSuccess, showInfo, showWarning } = useErrorHandler()
  const [loading, setLoading] = useState(false)

  // Example function to demonstrate error handling
  const handleApiError = () => {
    setLoading(true)

    // Simulate API call delay
    setTimeout(() => {
      // This simulates different backend error responses
      const errorTypes = [
        { message: "Failed to login user due to: {} User not found with email: user@example.com" },
        { message: "Failed to login user due to: {} Incorrect password" },
        { message: "OTP verification failed: Invalid OTP" },
        { message: "Account is locked due to too many failed attempts" },
        { error: "Token has expired" },
        { data: { message: "Email already exists in our system" } },
        new Error("Network error: Unable to reach server"),
      ]

      // Pick a random error to demonstrate
      const randomError = errorTypes[Math.floor(Math.random() * errorTypes.length)]
      showError(randomError)
      setLoading(false)
    }, 1000)
  }

  return (
    <Box
      p={8}
      maxW="md"
      mx="auto"
      borderWidth="1px"
      borderRadius="xl"
      bg="white"
      shadow="xl"
      position="relative"
      overflow="hidden"
    >
      {/* Decorative background element */}
      <Box
        position="absolute"
        top="-20px"
        right="-20px"
        width="150px"
        height="150px"
        borderRadius="full"
        bg="teal.50"
        zIndex="0"
      />

      {/* <ToastContainer
        position="bottom-right"
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      /> */}
<ToastContainer
  position="bottom-right"
  newestOnTop
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
/>
      <VStack spacing={6} align="stretch" position="relative" zIndex="1">
        <Heading as="h2" size="lg" textAlign="center" color="teal.700">
          Toast Notification System
        </Heading>

        <Text fontSize="sm" color="gray.600" textAlign="center">
          Click the buttons below to see different toast message styles with enhanced error handling and auto-close
          timers.
        </Text>

        <Divider />

        <VStack spacing={5}>
          <Flex
            w="full"
            bg="red.50"
            p={4}
            borderRadius="lg"
            alignItems="center"
            justifyContent="space-between"
            transition="all 0.3s"
            _hover={{ transform: "translateY(-2px)", shadow: "md" }}
          >
            <Flex alignItems="center">
              <AlertCircle className="text-red-500" size={20} />
              <Text ml={3} fontWeight="medium" color="red.700">
                Error Toast
              </Text>
            </Flex>
            <Button
              colorScheme="red"
              onClick={handleApiError}
              size="sm"
              isLoading={loading}
              loadingText="Loading..."
              spinner={<RefreshCw className="animate-spin" size={16} />}
            >
              Show
            </Button>
          </Flex>

          <Flex
            w="full"
            bg="green.50"
            p={4}
            borderRadius="lg"
            alignItems="center"
            justifyContent="space-between"
            transition="all 0.3s"
            _hover={{ transform: "translateY(-2px)", shadow: "md" }}
          >
            <Flex alignItems="center">
              <CheckCircle className="text-green-500" size={20} />
              <Text ml={3} fontWeight="medium" color="green.700">
                Success Toast
              </Text>
            </Flex>
            <Button
              colorScheme="green"
              onClick={() => showSuccess("Your profile has been updated successfully!")}
              size="sm"
            >
              Show
            </Button>
          </Flex>

          <Flex
            w="full"
            bg="blue.50"
            p={4}
            borderRadius="lg"
            alignItems="center"
            justifyContent="space-between"
            transition="all 0.3s"
            _hover={{ transform: "translateY(-2px)", shadow: "md" }}
          >
            <Flex alignItems="center">
              <Info className="text-blue-500" size={20} />
              <Text ml={3} fontWeight="medium" color="blue.700">
                Info Toast
              </Text>
            </Flex>
            <Button colorScheme="blue" onClick={() => showInfo("Your session will expire in 5 minutes.")} size="sm">
              Show
            </Button>
          </Flex>

          <Flex
            w="full"
            bg="orange.50"
            p={4}
            borderRadius="lg"
            alignItems="center"
            justifyContent="space-between"
            transition="all 0.3s"
            _hover={{ transform: "translateY(-2px)", shadow: "md" }}
          >
            <Flex alignItems="center">
              <AlertTriangle className="text-orange-500" size={20} />
              <Text ml={3} fontWeight="medium" color="orange.700">
                Warning Toast
              </Text>
            </Flex>
            <Button
              colorScheme="orange"
              onClick={() => showWarning("Please complete your profile to access all features.")}
              size="sm"
            >
              Show
            </Button>
          </Flex>
        </VStack>

        <Text fontSize="xs" color="white" textAlign="center" mt={4}>
          Each toast type has a different auto-close timer: Error (5s), Success (3s), Info (4s), Warning (4.5s)
        </Text>
      </VStack>
    </Box>
  )
}

