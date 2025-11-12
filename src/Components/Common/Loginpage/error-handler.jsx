// "use client"

// import { useRef } from "react"

// import { useToast, Box, Flex, Text, CloseButton } from "@chakra-ui/react"
// import { AlertCircle, CheckCircle, Info, XCircle } from "lucide-react"
// import { useCallback } from "react"

// // Define error mapping types
// type ErrorMapping = {
//   pattern: RegExp | string
//   message: string
// }

// // Error mappings for common backend errors
// const ERROR_MAPPINGS: ErrorMapping[] = [
//   {
//     pattern: /user not found|email not found|mail id is not exist/i,
//     message: "We couldn't find an account with this email address. Please check and try again.",
//   },
//   {
//     pattern: /incorrect password|password does not match/i,
//     message: "The password you entered is incorrect. Please try again.",
//   },
//   {
//     pattern: /account is locked/i,
//     message: "Your account has been temporarily locked for security reasons. Please try again later.",
//   },
//   {
//     pattern: /OTP.*invalid/i,
//     message: "The verification code you entered is invalid. Please check and try again.",
//   },
//   {
//     pattern: /OTP.*expired/i,
//     message: "Your verification code has expired. Please request a new one.",
//   },
//   {
//     pattern: /already exists/i,
//     message: "An account with this email already exists. Please use a different email or try logging in.",
//   },
//   {
//     pattern: /CAPTCHA/i,
//     message: "Please complete the security verification before continuing.",
//   },
//   {
//     pattern: /token.*expired/i,
//     message: "Your session has expired. Please log in again.",
//   },
//   {
//     pattern: /network error|timeout/i,
//     message: "Connection issue detected. Please check your internet and try again.",
//   },
// ]

// // Success mappings for common backend success messages
// const SUCCESS_MAPPINGS: ErrorMapping[] = [
//   {
//     pattern: /password reset|password update/i,
//     message: "Your password has been updated successfully!",
//   },
//   {
//     pattern: /OTP sent|verification code/i,
//     message: "Verification code sent! Please check your email.",
//   },
//   {
//     pattern: /verified|authentication successful/i,
//     message: "Verification successful!",
//   },
//   {
//     pattern: /logged out/i,
//     message: "You've been logged out successfully. See you soon!",
//   },
// ]

// // Custom toast component
// const CustomToast = ({
//   title,
//   description,
//   status,
//   onClose,
// }: {
//   title: string
//   description?: string
//   status: "info" | "warning" | "success" | "error"
//   onClose: () => void
// }) => {
//   const getIcon = () => {
//     switch (status) {
//       case "error":
//         return <XCircle size={20} />
//       case "success":
//         return <CheckCircle size={20} />
//       case "warning":
//         return <AlertCircle size={20} />
//       case "info":
//         return <Info size={20} />
//       default:
//         return null
//     }
//   }

//   const getBgColor = () => {
//     switch (status) {
//       case "error":
//         return "red.500"
//       case "success":
//         return "green.500"
//       case "warning":
//         return "orange.500"
//       case "info":
//         return "blue.500"
//       default:
//         return "gray.100"
//     }
//   }

//   return (
//     <Box
//       bg="white"
//       borderLeft="4px solid"
//       borderLeftColor={getBgColor()}
//       boxShadow="md"
//       borderRadius="md"
//       p={4}
//       mb={3}
//       maxW="sm"
//     >
//       <Flex align="center" justify="space-between">
//         <Flex align="center">
//           <Box color={getBgColor()} mr={3}>
//             {getIcon()}
//           </Box>
//           <Box>
//             <Text fontWeight="bold" fontSize="sm">
//               {title}
//             </Text>
//             {description && (
//               <Text fontSize="xs" color="gray.600" mt={1}>
//                 {description}
//               </Text>
//             )}
//           </Box>
//         </Flex>
//         <CloseButton size="sm" onClick={onClose} />
//       </Flex>
//     </Box>
//   )
// }

// export const useErrorHandler = () => {
//   const toast = useToast()
//   const toastIdRef = useRef<string | number | undefined>()

//   // Parse error message from various backend response formats
//   const parseErrorMessage = useCallback((error: any): string => {
//     if (typeof error === "string") return error

//     // Handle different error object structures
//     if (error.message) return error.message
//     if (error.error) return typeof error.error === "string" ? error.error : JSON.stringify(error.error)
//     if (error.data?.message) return error.data.message
//     if (error.response?.data?.message) return error.response.data.message

//     // If we can't extract a specific message, return a generic one
//     return "An unexpected error occurred"
//   }, [])

//   // Get user-friendly error message
//   const getFriendlyErrorMessage = useCallback((errorMessage: string): string => {
//     // Check if the error message matches any of our defined patterns
//     for (const mapping of ERROR_MAPPINGS) {
//       if (typeof mapping.pattern === "string") {
//         if (errorMessage.includes(mapping.pattern)) return mapping.message
//       } else if (mapping.pattern.test(errorMessage)) {
//         return mapping.message
//       }
//     }

//     // Default generic error message if no match found
//     return "Something went wrong. Please try again later."
//   }, [])

//   // Get user-friendly success message
//   const getFriendlySuccessMessage = useCallback((successMessage: string): string => {
//     // Check if the success message matches any of our defined patterns
//     for (const mapping of SUCCESS_MAPPINGS) {
//       if (typeof mapping.pattern === "string") {
//         if (successMessage.includes(mapping.pattern)) return mapping.message
//       } else if (mapping.pattern.test(successMessage)) {
//         return mapping.message
//       }
//     }

//     // Default generic success message if no match found
//     return successMessage || "Operation completed successfully!"
//   }, [])

//   // Show error toast
//   const showError = useCallback(
//     (error: any) => {
//       const errorMessage = parseErrorMessage(error)
//       const friendlyMessage = getFriendlyErrorMessage(errorMessage)

//       // Close any existing toast to prevent stacking
//       if (toastIdRef.current) {
//         toast.close(toastIdRef.current)
//       }

//       // Show the toast with our custom component
//       toastIdRef.current = toast({
//         position: "bottom-right",
//         duration: 5000,
//         isClosable: true,
//         render: ({ onClose }) => (
//           <CustomToast
//             title={friendlyMessage}
//             description={process.env.NODE_ENV === "development" ? errorMessage : undefined}
//             status="error"
//             onClose={onClose}
//           />
//         ),
//       })
//     },
//     [toast, parseErrorMessage, getFriendlyErrorMessage],
//   )

//   // Show success toast
//   const showSuccess = useCallback(
//     (message: string) => {
//       const friendlyMessage = getFriendlySuccessMessage(message)

//       // Close any existing toast to prevent stacking
//       if (toastIdRef.current) {
//         toast.close(toastIdRef.current)
//       }

//       // Show the toast with our custom component
//       toastIdRef.current = toast({
//         position: "bottom-right",
//         duration: 4000,
//         isClosable: true,
//         render: ({ onClose }) => <CustomToast title={friendlyMessage} status="success" onClose={onClose} />,
//       })
//     },
//     [toast, getFriendlySuccessMessage],
//   )

//   // Show info toast
//   const showInfo = useCallback(
//     (message: string) => {
//       // Close any existing toast to prevent stacking
//       if (toastIdRef.current) {
//         toast.close(toastIdRef.current)
//       }

//       // Show the toast with our custom component
//       toastIdRef.current = toast({
//         position: "bottom-right",
//         duration: 4000,
//         isClosable: true,
//         render: ({ onClose }) => <CustomToast title={message} status="info" onClose={onClose} />,
//       })
//     },
//     [toast],
//   )

//   // Show warning toast
//   const showWarning = useCallback(
//     (message: string) => {
//       // Close any existing toast to prevent stacking
//       if (toastIdRef.current) {
//         toast.close(toastIdRef.current)
//       }

//       // Show the toast with our custom component
//       toastIdRef.current = toast({
//         position: "bottom-right",
//         duration: 5000,
//         isClosable: true,
//         render: ({ onClose }) => <CustomToast title={message} status="warning" onClose={onClose} />,
//       })
//     },
//     [toast],
//   )

//   return {
//     showError,
//     showSuccess,
//     showInfo,
//     showWarning,
//     parseErrorMessage,
//   }
// }

// "use client"

// import { useRef, useCallback } from "react"
// import { useToast, Box, Flex, Text, CloseButton } from "@chakra-ui/react"
// import { AlertCircle, CheckCircle, Info, XCircle } from "lucide-react"

// // Error mappings for common backend errors
// const ERROR_MAPPINGS = [
//   {
//     pattern: /user not found|email not found|mail id is not exist/i,
//     message: "We couldn't find an account with this email address. Please check and try again.",
//   },
//   {
//     pattern: /incorrect password|password does not match/i,
//     message: "The password you entered is incorrect. Please try again.",
//   },
//   {
//     pattern: /account is locked/i,
//     message: "Your account has been temporarily locked for security reasons. Please try again later.",
//   },
//   {
//     pattern: /OTP.*invalid/i,
//     message: "The verification code you entered is invalid. Please check and try again.",
//   },
//   {
//     pattern: /OTP.*expired/i,
//     message: "Your verification code has expired. Please request a new one.",
//   },
//   {
//     pattern: /already exists/i,
//     message: "An account with this email already exists. Please use a different email or try logging in.",
//   },
//   {
//     pattern: /CAPTCHA/i,
//     message: "Please complete the security verification before continuing.",
//   },
//   {
//     pattern: /token.*expired/i,
//     message: "Your session has expired. Please log in again.",
//   },
//   {
//     pattern: /network error|timeout/i,
//     message: "Connection issue detected. Please check your internet and try again.",
//   },
// ]

// // Success mappings for common backend success messages
// const SUCCESS_MAPPINGS = [
//   {
//     pattern: /password reset|password update/i,
//     message: "Your password has been updated successfully!",
//   },
//   {
//     pattern: /OTP sent|verification code/i,
//     message: "Verification code sent! Please check your email.",
//   },
//   {
//     pattern: /verified|authentication successful/i,
//     message: "Verification successful!",
//   },
//   {
//     pattern: /logged out/i,
//     message: "You've been logged out successfully. See you soon!",
//   },
// ]

// // Custom toast component
// const CustomToast = ({ title, description, status, onClose }) => {
//   const getIcon = () => {
//     switch (status) {
//       case "error":
//         return <XCircle size={20} />
//       case "success":
//         return <CheckCircle size={20} />
//       case "warning":
//         return <AlertCircle size={20} />
//       case "info":
//         return <Info size={20} />
//       default:
//         return null
//     }
//   }

//   const getBgColor = () => {
//     switch (status) {
//       case "error":
//         return "red.500"
//       case "success":
//         return "green.500"
//       case "warning":
//         return "orange.500"
//       case "info":
//         return "blue.500"
//       default:
//         return "gray.100"
//     }
//   }

//   return (
//     <Box
//       bg="white"
//       borderLeft="4px solid"
//       borderLeftColor={getBgColor()}
//       boxShadow="md"
//       borderRadius="md"
//       p={4}
//       mb={3}
//       maxW="sm"
//     >
//       <Flex align="center" justify="space-between">
//         <Flex align="center">
//           <Box color={getBgColor()} mr={3}>
//             {getIcon()}
//           </Box>
//           <Box>
//             <Text fontWeight="bold" fontSize="sm">
//               {title}
//             </Text>
//             {description && (
//               <Text fontSize="xs" color="gray.600" mt={1}>
//                 {description}
//               </Text>
//             )}
//           </Box>
//         </Flex>
//         <CloseButton size="sm" onClick={onClose} />
//       </Flex>
//     </Box>
//   )
// }

// export const useErrorHandler = () => {
//   const toast = useToast()
//   const toastIdRef = useRef()

//   // Parse error message from various backend response formats
//   const parseErrorMessage = useCallback((error) => {
//     if (typeof error === "string") return error

//     // Handle different error object structures
//     if (error.message) return error.message
//     if (error.error) return typeof error.error === "string" ? error.error : JSON.stringify(error.error)
//     if (error.data?.message) return error.data.message
//     if (error.response?.data?.message) return error.response.data.message

//     // If we can't extract a specific message, return a generic one
//     return "An unexpected error occurred"
//   }, [])

//   // Get user-friendly error message
//   const getFriendlyErrorMessage = useCallback((errorMessage) => {
//     // Check if the error message matches any of our defined patterns
//     for (const mapping of ERROR_MAPPINGS) {
//       if (typeof mapping.pattern === "string") {
//         if (errorMessage.includes(mapping.pattern)) return mapping.message
//       } else if (mapping.pattern.test(errorMessage)) {
//         return mapping.message
//       }
//     }

//     // Default generic error message if no match found
//     return "Something went wrong. Please try again later."
//   }, [])

//   // Get user-friendly success message
//   const getFriendlySuccessMessage = useCallback((successMessage) => {
//     // Check if the success message matches any of our defined patterns
//     for (const mapping of SUCCESS_MAPPINGS) {
//       if (typeof mapping.pattern === "string") {
//         if (successMessage.includes(mapping.pattern)) return mapping.message
//       } else if (mapping.pattern.test(successMessage)) {
//         return mapping.message
//       }
//     }

//     // Default generic success message if no match found
//     return successMessage || "Operation completed successfully!"
//   }, [])

//   // Show error toast
//   const showError = useCallback(
//     (error) => {
//       const errorMessage = parseErrorMessage(error)
//       const friendlyMessage = getFriendlyErrorMessage(errorMessage)

//       // Close any existing toast to prevent stacking
//       if (toastIdRef.current) {
//         toast.close(toastIdRef.current)
//       }

//       // Show the toast with our custom component
//       toastIdRef.current = toast({
//         position: "bottom-right",
//         duration: 5000,
//         isClosable: true,
//         render: ({ onClose }) => (
//           <CustomToast
//             title={friendlyMessage}
//             description={process.env.NODE_ENV === "development" ? errorMessage : undefined}
//             status="error"
//             onClose={onClose}
//           />
//         ),
//       })
//     },
//     [toast, parseErrorMessage, getFriendlyErrorMessage]
//   )

//   // Show success toast
//   const showSuccess = useCallback(
//     (message) => {
//       const friendlyMessage = getFriendlySuccessMessage(message)

//       // Close any existing toast to prevent stacking
//       if (toastIdRef.current) {
//         toast.close(toastIdRef.current)
//       }

//       // Show the toast with our custom component
//       toastIdRef.current = toast({
//         position: "bottom-right",
//         duration: 4000,
//         isClosable: true,
//         render: ({ onClose }) => <CustomToast title={friendlyMessage} status="success" onClose={onClose} />,
//       })
//     },
//     [toast, getFriendlySuccessMessage]
//   )

//   // Show info toast
//   const showInfo = useCallback(
//     (message) => {
//       // Close any existing toast to prevent stacking
//       if (toastIdRef.current) {
//         toast.close(toastIdRef.current)
//       }

//       // Show the toast with our custom component
//       toastIdRef.current = toast({
//         position: "bottom-right",
//         duration: 4000,
//         isClosable: true,
//         render: ({ onClose }) => <CustomToast title={message} status="info" onClose={onClose} />,
//       })
//     },
//     [toast]
//   )

//   // Show warning toast
//   const showWarning = useCallback(
//     (message) => {
//       // Close any existing toast to prevent stacking
//       if (toastIdRef.current) {
//         toast.close(toastIdRef.current)
//       }

//       // Show the toast with our custom component
//       toastIdRef.current = toast({
//         position: "bottom-right",
//         duration: 5000,
//         isClosable: true,
//         render: ({ onClose }) => <CustomToast title={message} status="warning" onClose={onClose} />,
//       })
//     },
//     [toast]
//   )

//   return {
//     showError,
//     showSuccess,
//     showInfo,
//     showWarning,
//     parseErrorMessage,
//   }
// }


// "use client"

// import { useCallback, useRef } from "react"
// import { toast } from "react-toastify"
// import { AlertCircle, CheckCircle, Info, AlertTriangle } from "lucide-react"

// // Error mappings for common backend errors
// const ERROR_MAPPINGS = [
//   {
//     pattern: /user not found|email not found|mail id is not exist/i,
//     message: "We couldn't find an account with this email address. Please check and try again.",
//   },
//   {
//     pattern: /incorrect password|password does not match/i,
//     message: "The password you entered is incorrect. Please try again.",
//   },
//   {
//     pattern: /account is locked/i,
//     message: "Your account has been temporarily locked for security reasons. Please try again later.",
//   },
//   {
//     pattern: /OTP.*invalid/i,
//     message: "The verification code you entered is invalid. Please check and try again.",
//   },
//   {
//     pattern: /OTP.*expired/i,
//     message: "Your verification code has expired. Please request a new one.",
//   },
//   {
//     pattern: /already exists/i,
//     message: "An account with this email already exists. Please use a different email or try logging in.",
//   },
//   {
//     pattern: /CAPTCHA/i,
//     message: "Please complete the security verification before continuing.",
//   },
//   {
//     pattern: /token.*expired/i,
//     message: "Your session has expired. Please log in again.",
//   },
//   {
//     pattern: /network error|timeout/i,
//     message: "Connection issue detected. Please check your internet and try again.",
//   },
//   {
//     pattern: /failed to login/i,
//     message: "Login failed. Please check your credentials and try again.",
//   },
//   {
//     pattern: /failed to register/i,
//     message: "Registration failed. Please try again with different information.",
//   },
//   {
//     pattern: /password.*requirements/i,
//     message: "Your password doesn't meet the security requirements. Please try a stronger password.",
//   },
// ]

// // Success mappings for common backend success messages
// const SUCCESS_MAPPINGS = [
//   {
//     pattern: /password reset|password update/i,
//     message: "Your password has been updated successfully!",
//   },
//   {
//     pattern: /OTP sent|verification code/i,
//     message: "Verification code sent! Please check your email.",
//   },
//   {
//     pattern: /verified|authentication successful/i,
//     message: "Verification successful!",
//   },
//   {
//     pattern: /logged out/i,
//     message: "You've been logged out successfully. See you soon!",
//   },
// ]

// // Custom toast styling options
// const toastBaseConfig = {
//   position: "bottom-right",
//   autoClose: 1000,

//   hideProgressBar: false,
//   closeOnClick: true,
//   pauseOnHover: true,
//   draggable: true,
//   progress: undefined,
// }

// // Custom toast styling by type
// const toastStyles = {
//   error: {
//     ...toastBaseConfig,
//     className: "toast-error-container",
//     bodyClassName: "toast-error-body",
//     progressClassName: "toast-error-progress",
//     icon: () => <AlertCircle className="text-white" size={24} />,
//   },
//   success: {
//     ...toastBaseConfig,
//     className: "toast-success-container",
//     bodyClassName: "toast-success-body",
//     progressClassName: "toast-success-progress",
//     icon: () => <CheckCircle className="text-white" size={24} />,
//   },
//   info: {
//     ...toastBaseConfig,
//     className: "toast-info-container",
//     bodyClassName: "toast-info-body",
//     progressClassName: "toast-info-progress",
//     icon: () => <Info className="text-white" size={24} />,
//   },
//   warning: {
//     ...toastBaseConfig,
//     className: "toast-warning-container",
//     bodyClassName: "toast-warning-body",
//     progressClassName: "toast-warning-progress",
//     icon: () => <AlertTriangle className="text-white" size={24} />,
//   },
// }

// export const useErrorHandler = () => {
//   const toastIdRef = useRef(null)

//   // Parse error message from various backend response formats
//   const parseErrorMessage = useCallback((error) => {
//     if (typeof error === "string") return error

//     // Handle different error object structures
//     if (error.message) return error.message
//     if (error.error) return typeof error.error === "string" ? error.error : JSON.stringify(error.error)
//     if (error.data?.message) return error.data.message
//     if (error.response?.data?.message) return error.response.data.message

//     // If we can't extract a specific message, return a generic one
//     return "An unexpected error occurred"
//   }, [])

//   // Get user-friendly error message
//   const getFriendlyErrorMessage = useCallback((errorMessage) => {
//     // Check if the error message matches any of our defined patterns
//     for (const mapping of ERROR_MAPPINGS) {
//       if (typeof mapping.pattern === "string") {
//         if (errorMessage.includes(mapping.pattern)) return mapping.message
//       } else if (mapping.pattern.test(errorMessage)) {
//         return mapping.message
//       }
//     }

//     // Default generic error message if no match found
//     return "Something went wrong. Please try again later."
//   }, [])

//   // Get user-friendly success message
//   const getFriendlySuccessMessage = useCallback((successMessage) => {
//     // Check if the success message matches any of our defined patterns
//     for (const mapping of SUCCESS_MAPPINGS) {
//       if (typeof mapping.pattern === "string") {
//         if (successMessage.includes(mapping.pattern)) return mapping.message
//       } else if (mapping.pattern.test(successMessage)) {
//         return mapping.message
//       }
//     }

//     // Default generic success message if no match found
//     return successMessage || "Operation completed successfully!"
//   }, [])

//   // Show error toast
//   const showError = useCallback(
//     (error) => {
//       const errorMessage = parseErrorMessage(error)
//       const friendlyMessage = getFriendlyErrorMessage(errorMessage)

//       // Close any existing toast to prevent stacking
//       if (toastIdRef.current) {
//         toast.dismiss(toastIdRef.current)
//       }

//       // Show the toast with enhanced styling
//       toastIdRef.current = toast.error(friendlyMessage, toastStyles.error)
//     },
//     [parseErrorMessage, getFriendlyErrorMessage],
//   )

//   // Show success toast
//   const showSuccess = useCallback(
//     (message) => {
//       const friendlyMessage = getFriendlySuccessMessage(message)

//       // Close any existing toast to prevent stacking
//       if (toastIdRef.current) {
//         toast.dismiss(toastIdRef.current)
//       }

//       // Show the toast with enhanced styling
//       toastIdRef.current = toast.success(friendlyMessage, toastStyles.success)
//     },
//     [getFriendlySuccessMessage],
//   )

//   // Show info toast
//   const showInfo = useCallback((message) => {
//     // Close any existing toast to prevent stacking
//     if (toastIdRef.current) {
//       toast.dismiss(toastIdRef.current)
//     }

//     // Show the toast with enhanced styling
//     toastIdRef.current = toast.info(message, toastStyles.info)
//   }, [])

//   // Show warning toast
//   const showWarning = useCallback((message) => {
//     // Close any existing toast to prevent stacking
//     if (toastIdRef.current) {
//       toast.dismiss(toastIdRef.current)
//     }

//     // Show the toast with enhanced styling
//     toastIdRef.current = toast.warning(message, toastStyles.warning)
//   }, [])

//   return {
//     showError,
//     showSuccess,
//     showInfo,
//     showWarning,
//   }
// }



// "use client"

// import { useCallback, useRef } from "react"
// import { toast } from "react-toastify"
// import { AlertCircle, CheckCircle, Info, AlertTriangle } from "lucide-react"

// // Define error mapping types
// const ERROR_MAPPINGS = [
//   {
//     pattern: /user not found|email not found|mail id is not exist/i,
//     message: "We couldn't find an account with this email address. Please check and try again.",
//   },
//   {
//     pattern: /incorrect password|password does not match/i,
//     message: "The password you entered is incorrect. Please try again.",
//   },
//   {
//     pattern: /account is locked/i,
//     message: "Your account has been temporarily locked for security reasons. Please try again later.",
//   },
//   {
//     pattern: /OTP.*invalid/i,
//     message: "The verification code you entered is invalid. Please check and try again.",
//   },
//   {
//     pattern: /OTP.*expired/i,
//     message: "Your verification code has expired. Please request a new one.",
//   },
//   {
//     pattern: /already exists/i,
//     message: "An account with this email already exists. Please use a different email or try logging in.",
//   },
//   {
//     pattern: /CAPTCHA/i,
//     message: "Please complete the security verification before continuing.",
//   },
//   {
//     pattern: /token.*expired/i,
//     message: "Your session has expired. Please log in again.",
//   },
//   {
//     pattern: /network error|timeout/i,
//     message: "Connection issue detected. Please check your internet and try again.",
//   },
//   {
//     pattern: /failed to login/i,
//     message: "Login failed. Please check your credentials and try again.",
//   },
//   {
//     pattern: /failed to register/i,
//     message: "Registration failed. Please try again with different information.",
//   },
//   {
//     pattern: /password.*requirements/i,
//     message: "Your password doesn't meet the security requirements. Please try a stronger password.",
//   },
// ]

// // Success mappings for common backend success messages
// const SUCCESS_MAPPINGS = [
//   {
//     pattern: /password reset|password update/i,
//     message: "Your password has been updated successfully!",
//   },
//   {
//     pattern: /OTP sent|verification code/i,
//     message: "Verification code sent! Please check your email.",
//   },
//   {
//     pattern: /verified|authentication successful/i,
//     message: "Verification successful!",
//   },
//   {
//     pattern: /logged out/i,
//     message: "You've been logged out successfully. See you soon!",
//   },
// ]

// // Custom toast styling options with auto-close timers
// const toastBaseConfig = {
//   position: "bottom-right",
//   closeOnClick: true,
//   pauseOnHover: true,
//   draggable: true,
//   progress: undefined,
//   hideProgressBar: false,
// }



// // Custom toast styling by type with different auto-close timers
// const toastStyles = {
//   error: {
//     ...toastBaseConfig,
//     autoClose: 2000, // 5 seconds for errors
//     className: "toast-error-container",
//     bodyClassName: "toast-error-body",
//     progressClassName: "toast-error-progress",
//     icon: () => <AlertCircle className="text-white" size={24} />,
//   },
//   success: {
//     ...toastBaseConfig,
//     autoClose: 2000, // 3 seconds for success messages
//     className: "toast-success-container",
//     bodyClassName: "toast-success-body",
//     progressClassName: "toast-success-progress",
//     icon: () => <CheckCircle className="text-white" size={24} />,
//   },
//   info: {
//     ...toastBaseConfig,
//     autoClose: 2000, // 4 seconds for info messages
//     className: "toast-info-container",
//     bodyClassName: "toast-info-body",
//     progressClassName: "toast-info-progress",
//     icon: () => <Info className="text-white" size={24} />,
//   },
//   warning: {
//     ...toastBaseConfig,
//     autoClose: 2000, // 4.5 seconds for warnings
//     className: "toast-warning-container",
//     bodyClassName: "toast-warning-body",
//     progressClassName: "toast-warning-progress",
//     icon: () => <AlertTriangle className="text-white" size={24} />,
//   },
// }

// export const useErrorHandler = () => {
//   const toastIdRef = useRef(null)

//   // Parse error message from various backend response formats
//   const parseErrorMessage = useCallback((error) => {
//     if (typeof error === "string") return error

//     // Handle different error object structures
//     if (error.message) return error.message
//     if (error.error) return typeof error.error === "string" ? error.error : JSON.stringify(error.error)
//     if (error.data?.message) return error.data.message
//     if (error.response?.data?.message) return error.response.data.message

//     // If we can't extract a specific message, return a generic one
//     return "An unexpected error occurred"
//   }, [])

//   // Get user-friendly error message
//   const getFriendlyErrorMessage = useCallback((errorMessage) => {
//     // Check if the error message matches any of our defined patterns
//     for (const mapping of ERROR_MAPPINGS) {
//       if (typeof mapping.pattern === "string") {
//         if (errorMessage.includes(mapping.pattern)) return mapping.message
//       } else if (mapping.pattern.test(errorMessage)) {
//         return mapping.message
//       }
//     }

//     // Default generic error message if no match found
//     return "Something went wrong. Please try again later."
//   }, [])

//   // Get user-friendly success message
//   const getFriendlySuccessMessage = useCallback((successMessage) => {
//     // Check if the success message matches any of our defined patterns
//     for (const mapping of SUCCESS_MAPPINGS) {
//       if (typeof mapping.pattern === "string") {
//         if (successMessage.includes(mapping.pattern)) return mapping.message
//       } else if (mapping.pattern.test(successMessage)) {
//         return mapping.message
//       }
//     }

//     // Default generic success message if no match found
//     return successMessage || "Operation completed successfully!"
//   }, [])

//   // Show error toast
//   const showError = useCallback(
//     (error) => {
//       const errorMessage = parseErrorMessage(error)
//       const friendlyMessage = getFriendlyErrorMessage(errorMessage)

//       // Close any existing toast to prevent stacking
//       if (toastIdRef.current) {
//         toast.dismiss(toastIdRef.current)
//       }

//       // Show the toast with enhanced styling
//       toastIdRef.current = toast.error(friendlyMessage, toastStyles.error)
//     },
//     [parseErrorMessage, getFriendlyErrorMessage],
//   )

//   // Show success toast
//   const showSuccess = useCallback(
//     (message) => {
//       const friendlyMessage = getFriendlySuccessMessage(message)

//       // Close any existing toast to prevent stacking
//       if (toastIdRef.current) {
//         toast.dismiss(toastIdRef.current)
//       }

//       // Show the toast with enhanced styling
//       toastIdRef.current = toast.success(friendlyMessage, toastStyles.success)
//     },
//     [getFriendlySuccessMessage],
//   )

//   // Show info toast
//   const showInfo = useCallback((message) => {
//     // Close any existing toast to prevent stacking
//     if (toastIdRef.current) {
//       toast.dismiss(toastIdRef.current)
//     }

//     // Show the toast with enhanced styling
//     toastIdRef.current = toast.info(message, toastStyles.info)
//   }, [])

//   // Show warning toast
//   const showWarning = useCallback((message) => {
//     // Close any existing toast to prevent stacking
//     if (toastIdRef.current) {
//       toast.dismiss(toastIdRef.current)
//     }

//     // Show the toast with enhanced styling
//     toastIdRef.current = toast.warning(message, toastStyles.warning)
//   }, [])

//   return {
//     showError,
//     showSuccess,
//     showInfo,
//     showWarning,
//   }
// }


// "use client"

// import { useCallback, useRef, createElement } from "react"
// import { toast } from "react-toastify"
// import { AlertCircle, CheckCircle, Info, AlertTriangle } from "lucide-react"

// // Define error mapping types
// const ERROR_MAPPINGS = [
//   {
//     pattern: /user not found|email not found|mail id is not exist/i,
//     message: "We couldn't find an account with this email address. Please check and try again.",
//   },
//   {
//     pattern: /incorrect password|password does not match/i,
//     message: "The password you entered is incorrect. Please try again.",
//   },
//   {
//     pattern: /account is locked/i,
//     message: "Your account has been temporarily locked for security reasons. Please try again later.",
//   },
//   {
//     pattern: /OTP.*invalid/i,
//     message: "The verification code you entered is invalid. Please check and try again.",
//   },
//   {
//     pattern: /OTP.*expired/i,
//     message: "Your verification code has expired. Please request a new one.",
//   },
//   {
//     pattern: /already exists/i,
//     message: "An account with this email already exists. Please use a different email or try logging in.",
//   },
//   {
//     pattern: /CAPTCHA/i,
//     message: "Please complete the security verification before continuing.",
//   },
//   {
//     pattern: /token.*expired/i,
//     message: "Your session has expired. Please log in again.",
//   },
//   {
//     pattern: /network error|timeout/i,
//     message: "Connection issue detected. Please check your internet and try again.",
//   },
//   {
//     pattern: /failed to login/i,
//     message: "Login failed. Please check your credentials and try again.",
//   },
//   {
//     pattern: /failed to register/i,
//     message: "Registration failed. Please try again with different information.",
//   },
//   {
//     pattern: /password.*requirements/i,
//     message: "Your password doesn't meet the security requirements. Please try a stronger password.",
//   },
// ]

// // Success mappings for common backend success messages
// const SUCCESS_MAPPINGS = [
//   {
//     pattern: /password reset|password update/i,
//     message: "Your password has been updated successfully!",
//   },
//   {
//     pattern: /OTP sent|verification code/i,
//     message: "Verification code sent! Please check your email.",
//   },
//   {
//     pattern: /verified|authentication successful/i,
//     message: "Verification successful!",
//   },
//   {
//     pattern: /logged out/i,
//     message: "You've been logged out successfully. See you soon!",
//   },
// ]

// // Icon components using React.createElement to avoid JSX parsing issues
// const ErrorIcon = () => createElement(AlertCircle, { className: "text-white", size: 24 })
// const SuccessIcon = () => createElement(CheckCircle, { className: "text-white", size: 24 })
// const InfoIcon = () => createElement(Info, { className: "text-white", size: 24 })
// const WarningIcon = () => createElement(AlertTriangle, { className: "text-white", size: 24 })

// // Custom toast styling options with auto-close timers
// const toastBaseConfig = {
//   position: "bottom-right",
//   closeOnClick: true,
//   pauseOnHover: true,
//   draggable: true,
//   progress: undefined,
//   hideProgressBar: false,
//   closeButton: true,
// }

// // Custom toast styling by type with different auto-close timers
// const toastStyles = {
//   error: {
//     ...toastBaseConfig,
//     autoClose: 2000,
//     className: "toast-error-container",
//     bodyClassName: "toast-error-body",
//     progressClassName: "toast-error-progress",
//     icon: ErrorIcon,
//   },
//   success: {
//     ...toastBaseConfig,
//     autoClose: 2000,
//     className: "toast-success-container",
//     bodyClassName: "toast-success-body",
//     progressClassName: "toast-success-progress",
//     icon: SuccessIcon,
//   },
//   info: {
//     ...toastBaseConfig,
//     autoClose: 2000,
//     className: "toast-info-container",
//     bodyClassName: "toast-info-body",
//     progressClassName: "toast-info-progress",
//     icon: InfoIcon,
//   },
//   warning: {
//     ...toastBaseConfig,
//     autoClose: 2000,
//     className: "toast-warning-container",
//     bodyClassName: "toast-warning-body",
//     progressClassName: "toast-warning-progress",
//     icon: WarningIcon,
//   },
// }

// export const useErrorHandler = () => {
//   const toastIdRef = useRef(null)

//   // Parse error message from various backend response formats
//   const parseErrorMessage = useCallback((error) => {
//     if (typeof error === "string") return error

//     // Handle different error object structures
//     if (error.message) return error.message
//     if (error.error) return typeof error.error === "string" ? error.error : JSON.stringify(error.error)
//     if (error.data?.message) return error.data.message
//     if (error.response?.data?.message) return error.response.data.message

//     // If we can't extract a specific message, return a generic one
//     return "An unexpected error occurred"
//   }, [])

//   // Get user-friendly error message
//   const getFriendlyErrorMessage = useCallback((errorMessage) => {
//     // Check if the error message matches any of our defined patterns
//     for (const mapping of ERROR_MAPPINGS) {
//       if (typeof mapping.pattern === "string") {
//         if (errorMessage.includes(mapping.pattern)) return mapping.message
//       } else if (mapping.pattern.test(errorMessage)) {
//         return mapping.message
//       }
//     }

//     // Default generic error message if no match found
//     return "Something went wrong. Please try again later."
//   }, [])

//   // Get user-friendly success message
//   const getFriendlySuccessMessage = useCallback((successMessage) => {
//     // Check if the success message matches any of our defined patterns
//     for (const mapping of SUCCESS_MAPPINGS) {
//       if (typeof mapping.pattern === "string") {
//         if (successMessage.includes(mapping.pattern)) return mapping.message
//       } else if (mapping.pattern.test(successMessage)) {
//         return mapping.message
//       }
//     }

//     // Default generic success message if no match found
//     return successMessage || "Operation completed successfully!"
//   }, [])

//   // Show error toast
//   const showError = useCallback(
//     (error) => {
//       const errorMessage = parseErrorMessage(error)
//       const friendlyMessage = getFriendlyErrorMessage(errorMessage)

//       // Close any existing toast to prevent stacking
//       if (toastIdRef.current) {
//         toast.dismiss(toastIdRef.current)
//       }

//       // Show the toast with enhanced styling
//       toastIdRef.current = toast.error(friendlyMessage, toastStyles.error)
//     },
//     [parseErrorMessage, getFriendlyErrorMessage],
//   )

//   // Show success toast
//   const showSuccess = useCallback(
//     (message) => {
//       const friendlyMessage = getFriendlySuccessMessage(message)

//       // Close any existing toast to prevent stacking
//       if (toastIdRef.current) {
//         toast.dismiss(toastIdRef.current)
//       }

//       // Show the toast with enhanced styling
//       toastIdRef.current = toast.success(friendlyMessage, toastStyles.success)
//     },
//     [getFriendlySuccessMessage],
//   )

//   // Show info toast
//   const showInfo = useCallback((message) => {
//     // Close any existing toast to prevent stacking
//     if (toastIdRef.current) {
//       toast.dismiss(toastIdRef.current)
//     }

//     // Show the toast with enhanced styling
//     toastIdRef.current = toast.info(message, toastStyles.info)
//   }, [])

//   // Show warning toast
//   const showWarning = useCallback((message) => {
//     // Close any existing toast to prevent stacking
//     if (toastIdRef.current) {
//       toast.dismiss(toastIdRef.current)
//     }

//     // Show the toast with enhanced styling
//     toastIdRef.current = toast.warning(message, toastStyles.warning)
//   }, [])

//   return {
//     showError,
//     showSuccess,
//     showInfo,
//     showWarning,
//   }
// }
// "use client"

// import { useCallback } from "react"
// import { toast } from "react-toastify"
// import { AlertCircle, CheckCircle, Info, AlertTriangle } from "lucide-react"

// // Error mappings
// const ERROR_MAPPINGS = [
//   { pattern: /user not found|email not found|mail id is not exist/i, message: "We couldn't find an account with this email address. Please check and try again." },
//   { pattern: /incorrect password|password does not match/i, message: "The password you entered is incorrect. Please try again." },
//   { pattern: /account is locked/i, message: "Your account has been temporarily locked for security reasons. Please try again later." },
//   { pattern: /OTP.*invalid/i, message: "The verification code you entered is invalid. Please check and try again." },
//   { pattern: /OTP.*expired/i, message: "Your verification code has expired. Please request a new one." },
//   { pattern: /already exists/i, message: "An account with this email already exists. Please use a different email or try logging in." },
//   { pattern: /CAPTCHA/i, message: "Please complete the security verification before continuing." },
//   { pattern: /token.*expired/i, message: "Your session has expired. Please log in again." },
//   { pattern: /network error|timeout/i, message: "Connection issue detected. Please check your internet and try again." },
//   { pattern: /failed to login/i, message: "Login failed. Please check your credentials and try again." },
//   { pattern: /failed to register/i, message: "Registration failed. Please try again with different information." },
//   { pattern: /password.*requirements/i, message: "Your password doesn't meet the security requirements. Please try a stronger password." },
// ]

// // Success mappings
// const SUCCESS_MAPPINGS = [
//   { pattern: /password reset|password update/i, message: "Your password has been updated successfully!" },
//   { pattern: /OTP sent|verification code/i, message: "Verification code sent! Please check your email." },
//   { pattern: /verified|authentication successful/i, message: "Verification successful!" },
//   { pattern: /logged out/i, message: "You've been logged out successfully. See you soon!" },
// ]

// // Icon components
// const ErrorIcon = () => <AlertCircle className="text-white" size={24} />
// const SuccessIcon = () => <CheckCircle className="text-white" size={24} />
// const InfoIcon = () => <Info className="text-white" size={24} />
// const WarningIcon = () => <AlertTriangle className="text-white" size={24} />

// // Base config
// const toastBaseConfig = {
//   position: "bottom-right",
//   autoClose: 2000,
//   closeOnClick: true,
//   pauseOnHover: true,
//   draggable: true,
//   closeButton: true, // ✅ Ensure close button is enabled
// }

// // Toast styles
// const toastStyles = {
//   error: {
//     ...toastBaseConfig,
//     icon: ErrorIcon,
//     className: "toast-error-container",
//     bodyClassName: "toast-error-body",
//     progressClassName: "toast-error-progress",
//   },
//   success: {
//     ...toastBaseConfig,
//     icon: SuccessIcon,
//     className: "toast-success-container",
//     bodyClassName: "toast-success-body",
//     progressClassName: "toast-success-progress",
//   },
//   info: {
//     ...toastBaseConfig,
//     icon: InfoIcon,
//     className: "toast-info-container",
//     bodyClassName: "toast-info-body",
//     progressClassName: "toast-info-progress",
//   },
//   warning: {
//     ...toastBaseConfig,
//     icon: WarningIcon,
//     className: "toast-warning-container",
//     bodyClassName: "toast-warning-body",
//     progressClassName: "toast-warning-progress",
//   },
// }

// export const useErrorHandler = () => {

//   // Parse backend error message
//   const parseErrorMessage = useCallback((error) => {
//     if (typeof error === "string") return error
//     if (error?.message) return error.message
//     if (error?.error) return typeof error.error === "string" ? error.error : JSON.stringify(error.error)
//     if (error?.data?.message) return error.data.message
//     if (error?.response?.data?.message) return error.response.data.message
//     return "An unexpected error occurred"
//   }, [])

//   // Map backend errors to user-friendly messages
//   const getFriendlyErrorMessage = useCallback((errorMessage) => {
//     for (const mapping of ERROR_MAPPINGS) {
//       if (mapping.pattern.test(errorMessage)) return mapping.message
//     }
//     return "Something went wrong. Please try again later."
//   }, [])

//   // Map backend success messages
//   const getFriendlySuccessMessage = useCallback((successMessage) => {
//     for (const mapping of SUCCESS_MAPPINGS) {
//       if (mapping.pattern.test(successMessage)) return mapping.message
//     }
//     return successMessage || "Operation completed successfully!"
//   }, [])

//   // Show error toast
//   const showError = useCallback((error) => {
//     const errorMessage = parseErrorMessage(error)
//     const friendlyMessage = getFriendlyErrorMessage(errorMessage)
//     toast.error(friendlyMessage, toastStyles.error)
//   }, [parseErrorMessage, getFriendlyErrorMessage])

//   // Show success toast
//   const showSuccess = useCallback((message) => {
//     const friendlyMessage = getFriendlySuccessMessage(message)
//     toast.success(friendlyMessage, toastStyles.success)
//   }, [getFriendlySuccessMessage])

//   // Show info toast
//   const showInfo = useCallback((message) => {
//     toast.info(message, toastStyles.info)
//   }, [])

//   // Show warning toast
//   const showWarning = useCallback((message) => {
//     toast.warning(message, toastStyles.warning)
//   }, [])

//   return {
//     showError,
//     showSuccess,
//     showInfo,
//     showWarning,
//   }
// }


import { useCallback, useRef } from "react"
import { toast } from "react-toastify"

// Define error mapping types
const ERROR_MAPPINGS = [
  {
    pattern: /user not found|email not found|mail id is not exist/i,
    message: "We couldn't find an account with this email address. Please check and try again.",
  },
  {
    pattern: /incorrect password|password does not match/i,
    message: "The password you entered is incorrect. Please try again.",
  },
  {
    pattern: /account is locked/i,
    message: "Your account has been temporarily locked for security reasons. Please try again later.",
  },
  {
    pattern: /OTP.*invalid/i,
    message: "The verification code you entered is invalid. Please check and try again.",
  },
  {
    pattern: /OTP.*expired/i,
    message: "Your verification code has expired. Please request a new one.",
  },
  {
    pattern: /already exists/i,
    message: "An account with this email already exists. Please use a different email or try logging in.",
  },
  {
    pattern: /token.*expired/i,
    message: "Your session has expired. Please log in again.",
  },
  {
    pattern: /network error|timeout/i,
    message: "Connection issue detected. Please check your internet and try again.",
  },
  {
    pattern: /failed to login/i,
    message: "Login failed. Please check your credentials and try again.",
  },
  {
    pattern: /Failed to register user due to: {} The password does not meet the specified requirements./i,
    message: "The password does not meet the specified requirements.",
  },
  {
    pattern: /failed to register/i,
    message: "Registration failed. Please try again with different information.",
  },
  {
    pattern: /password.*requirements/i,
    message: "Your password doesn't meet the security requirements. Please try a stronger password.",
  },
  {
    pattern: /Please fix the errors in the form/i,
    message: "Please fill out all required fields correctly before submitting.",
  },
  {
        pattern: /Please complete the CAPTCHA verification/i,
    message: "Please complete the CAPTCHA verification",
  },
  {
    pattern: /First Name is required/i,
    message: "Please enter a valid first name",
  },
  {
    pattern: /Last Name is required/i,
    message: "Please enter a valid last name",
  },
  {
    pattern: /Password must include uppercase, lowercase, number, and special character/i,
    message: "Password must include uppercase, lowercase, number, and special character",
  },
  {
    pattern: /Email is required/i,
    message: "Please enter a valid email address",
  },
  {
    pattern: /Password is required/i,
    message: "Please enter a valid password",
  },
  {
    pattern: /New password is required/i,
    message: "Please enter a valid new password",
  },
  {
    pattern: /Confirm password is required/i,
    message: "Please enter a valid confirm password",
  },
  {
    pattern: /Old password is required/i,
    message: "Please enter old password",
  },
  {
    pattern: /Passwords do not match/i,
    message: "Passwords do not match",
  },
  {
    pattern: /CAPTCHA/i,
    message: "Please complete the security verification before continuing.",
  },
  {
    pattern: /Failed to login user due to: {} Exceed maximum no.of limits, Please try again after 30 minutes./i,
    message: "Exceed maximum no.of limits, Please try again after 30 minutes.",
  },
   {
    pattern: /Failed to login user due to: {} Too many attempts with in the time span./i,
    message: "Too many attempts within the time span, please try again later.",
  },
]

// Success mappings for common backend success messages
const SUCCESS_MAPPINGS = [
  {
    pattern: /password reset|password update/i,
    message: "Your password has been updated successfully!",
  },
  {
    pattern: /OTP sent|verification code/i,
    message: "Verification code sent! Please check your email.",
  },
  {
    pattern: /verified|authentication successful/i,
    message: "Verification successful!",
  },
  {
    pattern: /logged out/i,
    message: "You've been logged out successfully. See you soon!",
  },
]

// Custom toast styling options with auto-close timers
const toastBaseConfig = {
  position: "bottom-right",
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  hideProgressBar: false,
  closeButton: true,
}

// Custom toast styling by type with different auto-close timers
const toastStyles = {
  error: {
    ...toastBaseConfig,
    autoClose: 4000,
    className: "toast-error",
  },
  success: {
    ...toastBaseConfig,
    autoClose: 3000,
    className: "toast-success",
  },
  info: {
    ...toastBaseConfig,
    autoClose: 3000,
    className: "toast-info",
  },
  warning: {
    ...toastBaseConfig,
    autoClose: 4000,
    className: "toast-warning",
  },
}

export const useErrorHandler = () => {
  const toastIdRef = useRef(null)

  // Parse error message from various backend response formats
  const parseErrorMessage = useCallback((error) => {
    if (typeof error === "string") return error

    // Handle different error object structures
    if (error.message) return error.message
    if (error.error) return typeof error.error === "string" ? error.error : JSON.stringify(error.error)
    if (error.data && error.data.message) return error.data.message
    if (error.response && error.response.data && error.response.data.message) return error.response.data.message

    // If we can't extract a specific message, return a generic one
    return "An unexpected error occurred"
  }, [])

  // Get user-friendly error message
  const getFriendlyErrorMessage = useCallback((errorMessage) => {
    // Check if the error message matches any of our defined patterns
    for (const mapping of ERROR_MAPPINGS) {
      if (mapping.pattern.test(errorMessage)) {
        return mapping.message
      }
    }

    // Default generic error message if no match found
    return "Something went wrong. Please try again later."
  }, [])

  // Get user-friendly success message
  const getFriendlySuccessMessage = useCallback((successMessage) => {
    // Check if the success message matches any of our defined patterns
    for (const mapping of SUCCESS_MAPPINGS) {
      if (mapping.pattern.test(successMessage)) {
        return mapping.message
      }
    }

    // Default generic success message if no match found
    return successMessage || "Operation completed successfully!"
  }, [])

  // Show error toast
  const showError = useCallback(
    (error) => {
      const errorMessage = parseErrorMessage(error)
      const friendlyMessage = getFriendlyErrorMessage(errorMessage)

      // Close any existing toast to prevent stacking
      if (toastIdRef.current) {
        toast.dismiss(toastIdRef.current)
      }

      // Show the toast with enhanced styling
      toastIdRef.current = toast.error(friendlyMessage, toastStyles.error)
    },
    [parseErrorMessage, getFriendlyErrorMessage],
  )

  // Show success toast
  const showSuccess = useCallback(
    (message) => {
      const friendlyMessage = getFriendlySuccessMessage(message)

      // Close any existing toast to prevent stacking
      if (toastIdRef.current) {
        toast.dismiss(toastIdRef.current)
      }

      // Show the toast with enhanced styling
      toastIdRef.current = toast.success(friendlyMessage, toastStyles.success)
    },
    [getFriendlySuccessMessage],
  )

  // Show info toast
  const showInfo = useCallback((message) => {
    // Close any existing toast to prevent stacking
    if (toastIdRef.current) {
      toast.dismiss(toastIdRef.current)
    }

    // Show the toast with enhanced styling
    toastIdRef.current = toast.info(message, toastStyles.info)
  }, [])

  // Show warning toast
  const showWarning = useCallback((message) => {
    // Close any existing toast to prevent stacking
    if (toastIdRef.current) {
      toast.dismiss(toastIdRef.current)
    }

    // Show the toast with enhanced styling
    toastIdRef.current = toast.warning(message, toastStyles.warning)
  }, [])

  // Dismiss all toasts
  const dismissAll = useCallback(() => {
    toast.dismiss()
    toastIdRef.current = null
  }, [])

  return {
    showError,
    showSuccess,
    showInfo,
    showWarning,
    dismissAll,
  }
}