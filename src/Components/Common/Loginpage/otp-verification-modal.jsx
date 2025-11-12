// import React, { useState, useEffect, useRef } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { Mail, X, RefreshCcw } from "lucide-react"

// const OTPInput = React.memo(({ values, onChange }) => {
//   const inputRefs = useRef([])

//   useEffect(() => {
//     if (inputRefs.current[0]) {
//       inputRefs.current[0].focus()
//     }
//   }, [])

//   const handleChange = (index, value) => {
//     if (value.length <= 1 && /^\d*$/.test(value)) {
//       const newValues = [...values]
//       newValues[index] = value
//       onChange(newValues)

//       if (value && index < 5) {
//         inputRefs.current[index + 1]?.focus()
//       }
//     }
//   }

//   const handleKeyDown = (index, e) => {
//     if (e.key === "Backspace") {
//       if (!values[index] && index > 0) {
//         const newValues = [...values]
//         newValues[index - 1] = ""
//         onChange(newValues)
//         inputRefs.current[index - 1]?.focus()
//       } else if (values[index]) {
//         const newValues = [...values]
//         newValues[index] = ""
//         onChange(newValues)
//       }
//     } else if (e.key === "ArrowLeft" && index > 0) {
//       inputRefs.current[index - 1]?.focus()
//     } else if (e.key === "ArrowRight" && index < 5) {
//       inputRefs.current[index + 1]?.focus()
//     }
//   }

//   const handlePaste = (e) => {
//     e.preventDefault()
//     const pastedData = e.clipboardData.getData("text/plain").slice(0, 6).replace(/\D/g, "")
//     const newValues = [...values]
//     for (let i = 0; i < pastedData.length; i++) {
//       newValues[i] = pastedData[i]
//     }
//     onChange(newValues)
//     if (pastedData.length === 6) {
//       inputRefs.current[5]?.focus()
//     } else {
//       inputRefs.current[pastedData.length]?.focus()
//     }
//   }

//   return (
//     <div className="flex justify-center space-x-2 sm:space-x-3">
//       {values.map((value, index) => (
//         <motion.input
//           key={index}
//           ref={(el) => (inputRefs.current[index] = el)}
//           type="text"
//           inputMode="numeric"
//           value={value}
//           onChange={(e) => handleChange(index, e.target.value)}
//           onKeyDown={(e) => handleKeyDown(index, e)}
//           onPaste={handlePaste}
//           className="w-10 h-12 sm:w-12 sm:h-14 text-center text-lg sm:text-2xl font-semibold border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
//           maxLength={1}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: index * 0.1 }}
//         />
//       ))}
//     </div>
//   )
// })

// const OtpVerificationModal = ({ isOpen, onClose, onVerify, onResend, email }) => {
//   const [otpValues, setOtpValues] = useState(Array(6).fill(""))
//   const [isLoading, setIsLoading] = useState(false)
//   const [resendTimer, setResendTimer] = useState(30)
//   const [canResend, setCanResend] = useState(false)

//   useEffect(() => {
//     let timer
//     if (resendTimer > 0) {
//       timer = setTimeout(() => setResendTimer((prev) => prev - 1), 1000)
//     } else {
//       setCanResend(true)
//     }
//     return () => clearTimeout(timer)
//   }, [resendTimer])

//   const handleVerify = async () => {
//     setIsLoading(true)
//     try {
//       await onVerify(otpValues.join(""))
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   const handleResend = async () => {
//     if (!canResend) return
//     setIsLoading(true)
//     try {
//       await onResend()
//       setResendTimer(30)
//       setCanResend(false)
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
//         >
//           <motion.div
//             initial={{ scale: 0.9, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             exit={{ scale: 0.9, opacity: 0 }}
//             className="bg-white rounded-lg p-6 sm:p-8 max-w-md w-full relative"
//           >
//             <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
//               <X size={24} />
//             </button>
//             <div className="text-center">
//               <Mail className="mx-auto text-emerald-600 mb-4" size={48} />
//               <h2 className="text-2xl font-bold mb-2">Verify Your Email</h2>
//               <p className="text-gray-600 mb-6">Enter the verification code sent to {email}</p>

//               <OTPInput values={otpValues} onChange={setOtpValues} />

//               <motion.button
//                 onClick={handleVerify}
//                 disabled={isLoading || otpValues.join("").length !== 6}
//                 className="w-full mt-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg shadow-md hover:bg-emerald-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 {isLoading ? (
//                   <>
//                     <RefreshCcw className="animate-spin" size={20} />
//                     Verifying...
//                   </>
//                 ) : (
//                   "Verify Email"
//                 )}
//               </motion.button>

//               <div className="mt-6">
//                 {canResend ? (
//                   <motion.button
//                     onClick={handleResend}
//                     className="text-emerald-600 font-semibold hover:underline flex items-center justify-center mx-auto"
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     <RefreshCcw size={20} className="mr-2" />
//                     Resend OTP
//                   </motion.button>
//                 ) : (
//                   <p className="text-gray-500">Resend OTP in {resendTimer} seconds</p>
//                 )}
//               </div>
//             </div>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   )
// }

// export default OtpVerificationModal

// ""

// import { useState, useEffect } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { RefreshCcw } from "lucide-react"

// const OtpVerificationModal = ({ isOpen, onClose, onVerify, onResend, email, purpose }) => {
//   const [otp, setOtp] = useState(["", "", "", "", "", ""])
//   const [isLoading, setIsLoading] = useState(false)

//   useEffect(() => {
//     if (isOpen) {
//       setOtp(["", "", "", "", "", ""])
//     }
//   }, [isOpen])

//   const handleChange = (element, index) => {
//     if (isNaN(element.value)) return false

//     setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))])

//     if (element.nextSibling) {
//       element.nextSibling.focus()
//     }
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     setIsLoading(true)
//     await onVerify(otp.join(""))
//     setIsLoading(false)
//   }

//   if (!isOpen) return null

//   return (
//     <AnimatePresence>
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
//       >
//         <motion.div
//           initial={{ scale: 0.95, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           exit={{ scale: 0.95, opacity: 0 }}
//           className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md"
//         >
//           <h2 className="text-2xl font-bold mb-4 text-center text-teal-900">
//             {purpose === "resetPassword" ? "Reset Password OTP Verification" : "OTP Verification"}
//           </h2>
//           <p className="text-center text-gray-600 mb-6">
//             {purpose === "resetPassword"
//               ? "Enter the OTP sent to your email to reset your password."
//               : "Enter the OTP sent to your email to verify your account."}
//           </p>
//           <form onSubmit={handleSubmit}>
//             <div className="flex justify-center gap-2 mb-6">
//               {otp.map((data, index) => (
//                 <input
//                   key={index}
//                   type="text"
//                   maxLength="1"
//                   value={data}
//                   onChange={(e) => handleChange(e.target, index)}
//                   onFocus={(e) => e.target.select()}
//                   className="w-12 h-12 border-2 rounded text-center text-xl font-semibold focus:border-teal-500 focus:outline-none"
//                 />
//               ))}
//             </div>
//             <button
//               type="submit"
//               disabled={isLoading || otp.some((digit) => digit === "")}
//               className="w-full py-3 bg-teal-900 text-white font-semibold rounded-lg shadow-lg hover:bg-teal-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
//             >
//               {isLoading ? (
//                 <>
//                   <RefreshCcw className="animate-spin" size={20} />
//                   Verifying...
//                 </>
//               ) : (
//                 "Verify OTP"
//               )}
//             </button>
//           </form>
//           <p className="mt-4 text-center text-gray-600">
//             Didn't receive the OTP?{" "}
//             <button onClick={onResend} className="text-teal-900 font-semibold hover:underline">
//               Resend OTP
//             </button>
//           </p>
//           <button
//             onClick={onClose}
//             className="mt-4 w-full py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition-all"
//           >
//             Cancel
//           </button>
//         </motion.div>
//       </motion.div>
//     </AnimatePresence>
//   )
// }

// export default OtpVerificationModal



// ""

// import { useState, useEffect } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { RefreshCcw } from "lucide-react"

// const OtpVerificationModal = ({ isOpen, onClose, onVerify, onResend, email, purpose }) => {
//   const [otp, setOtp] = useState(["", "", "", "", "", ""])
//   const [isLoading, setIsLoading] = useState(false)
//   const [otpError, setOtpError] = useState("")

//   useEffect(() => {
//     if (isOpen) {
//       setOtp(["", "", "", "", "", ""])
//     }
//   }, [isOpen])

//   const handleChange = (element, index) => {
//     if (isNaN(element.value)) return false

//     setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))])

//     if (element.nextSibling) {
//       element.nextSibling.focus()
//     }
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     setIsLoading(true)
//     setOtpError("")
//     try {
//       await onVerify(otp.join(""))
//     } catch (error) {
//       setOtpError(error.message)
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   if (!isOpen) return null

//   return (
//     <AnimatePresence>
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
//       >
//         <motion.div
//           initial={{ scale: 0.95, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           exit={{ scale: 0.95, opacity: 0 }}
//           className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md"
//         >
//           <h2 className="text-2xl font-bold mb-4 text-center text-teal-900">
//             {purpose === "resetPassword" ? "Reset Password OTP Verification" : "OTP Verification"}
//           </h2>
//           <p className="text-center text-gray-600 mb-6">
//             {purpose === "resetPassword"
//               ? "Enter the OTP sent to your email to reset your password."
//               : "Enter the OTP sent to your email to verify your account."}
//           </p>
//           <form onSubmit={handleSubmit}>
//             {otpError && (
//               <div
//                 className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
//                 role="alert"
//               >
//                 <span className="block sm:inline">{otpError}</span>
//               </div>
//             )}
//             <div className="flex justify-center gap-2 mb-6">
//               {otp.map((data, index) => (
//                 <input
//                   key={index}
//                   type="text"
//                   maxLength="1"
//                   value={data}
//                   onChange={(e) => handleChange(e.target, index)}
//                   onFocus={(e) => e.target.select()}
//                   className="w-12 h-12 border-2 rounded text-center text-xl font-semibold focus:border-teal-500 focus:outline-none"
//                 />
//               ))}
//             </div>
//             <button
//               type="submit"
//               disabled={isLoading || otp.some((digit) => digit === "")}
//               className="w-full py-3 bg-teal-900 text-white font-semibold rounded-lg shadow-lg hover:bg-teal-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
//             >
//               {isLoading ? (
//                 <>
//                   <RefreshCcw className="animate-spin" size={20} />
//                   Verifying...
//                 </>
//               ) : (
//                 "Verify OTP"
//               )}
//             </button>
//           </form>
//           <p className="mt-4 text-center text-gray-600">
//             Didn't receive the OTP?{" "}
//             <button onClick={onResend} className="text-teal-900 font-semibold hover:underline">
//               Resend OTP
//             </button>
//           </p>
//           <button
//             onClick={onClose}
//             className="mt-4 w-full py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition-all"
//           >
//             Cancel
//           </button>
//         </motion.div>
//       </motion.div>
//     </AnimatePresence>
//   )
// }

// export default OtpVerificationModal

// ""

// import { useState, useEffect } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { RefreshCcw } from "lucide-react"

// const OtpVerificationModal = ({ isOpen, onClose, onVerify, onResend, email, purpose }) => {
//   const [otp, setOtp] = useState(["", "", "", "", "", ""])
//   const [isLoading, setIsLoading] = useState(false)
//   const [otpError, setOtpError] = useState("")

//   useEffect(() => {
//     if (isOpen) {
//       setOtp(["", "", "", "", "", ""])
//     }
//   }, [isOpen])

//   const handleChange = (element, index) => {
//     if (isNaN(element.value)) return false

//     const updatedOtp = [...otp]
//     updatedOtp[index] = element.value
//     setOtp(updatedOtp)

//     // Move focus to the next field if current field is filled
//     if (element.nextSibling && element.value !== "") {
//       element.nextSibling.focus()
//     }
//   }

//   const handleBackspace = (e, index) => {
//     if (e.key === "Backspace" && otp[index] === "") {
//       // Focus on previous input if backspace is pressed on an empty field
//       if (index > 0) {
//         document.getElementById(`otp-input-${index - 1}`).focus()
//       }
//     }
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     setIsLoading(true)
//     setOtpError("")
//     try {
//       await onVerify(otp.join(""))
//     } catch (error) {
//       setOtpError(error.message)
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   if (!isOpen) return null

//   return (
//     <AnimatePresence>
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
//       >
//         <motion.div
//           initial={{ scale: 0.95, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           exit={{ scale: 0.95, opacity: 0 }}
//           className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md"
//         >
//           <h2 className="text-2xl font-bold mb-4 text-center text-teal-900">
//             {purpose === "resetPassword" ? "Reset Password OTP Verification" : "OTP Verification"}
//           </h2>
//           <p className="text-center text-gray-600 mb-6">
//             {purpose === "resetPassword"
//               ? "Enter the OTP sent to your email to reset your password."
//               : "Enter the OTP sent to your email to verify your account."}
//           </p>
//           <form onSubmit={handleSubmit}>
//             {otpError && (
//               <div
//                 className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
//                 role="alert"
//               >
//                 <span className="block sm:inline">{otpError}</span>
//               </div>
//             )}
//             <div className="flex justify-center gap-2 mb-6">
//               {otp.map((data, index) => (
//                 <input
//                   key={index}
//                   id={`otp-input-${index}`} // Set id for each input
//                   type="text"
//                   maxLength="1"
//                   value={data}
//                   onChange={(e) => handleChange(e.target, index)}
//                   onFocus={(e) => e.target.select()}
//                   onKeyDown={(e) => handleBackspace(e, index)} // Handle backspace
//                   className="w-12 h-12 border-2 rounded text-center text-xl font-semibold focus:border-teal-500 focus:outline-none"
//                 />
//               ))}
//             </div>
//             <button
//               type="submit"
//               disabled={isLoading || otp.some((digit) => digit === "")}
//               className="w-full py-3 bg-teal-900 text-white font-semibold rounded-lg shadow-lg hover:bg-teal-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
//             >
//               {isLoading ? (
//                 <>
//                   <RefreshCcw className="animate-spin" size={20} />
//                   Verifying...
//                 </>
//               ) : (
//                 "Verify OTP"
//               )}
//             </button>
//           </form>
//           <p className="mt-4 text-center text-gray-600">
//             Didn't receive the OTP?{" "}
//             <button onClick={onResend} className="text-teal-900 font-semibold hover:underline">
//               Resend OTP
//             </button>
//           </p>
//           <button
//             onClick={onClose}
//             className="mt-4 w-full py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition-all"
//           >
//             Cancel
//           </button>
//         </motion.div>
//       </motion.div>
//     </AnimatePresence>
//   )
// }

// export default OtpVerificationModal




// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { RefreshCcw } from "lucide-react";

// const OtpVerificationModal = ({ isOpen, onClose, onVerify, onResend, email, purpose }) => {
//   const [otp, setOtp] = useState(["", "", "", "", "", ""]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [otpError, setOtpError] = useState("");

//   useEffect(() => {
//     if (isOpen) {
//       setOtp(["", "", "", "", "", ""]);
//     }
//   }, [isOpen]);

//   const handleChange = (element, index) => {
//     if (isNaN(element.value)) return false;

//     const updatedOtp = [...otp];
//     updatedOtp[index] = element.value;
//     setOtp(updatedOtp);

//     // Move focus to the next field if current field is filled
//     if (element.nextSibling && element.value !== "") {
//       element.nextSibling.focus();
//     }
//   };

//   const handleBackspace = (e, index) => {
//     if (e.key === "Backspace" && otp[index] === "") {
//       // Focus on previous input if backspace is pressed on an empty field
//       if (index > 0) {
//         document.getElementById(`otp-input-${index - 1}`).focus();
//       }
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setOtpError("");
//     try {
//       await onVerify(otp.join(""));
//     } catch (error) {
//       setOtpError(error.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   if (!isOpen) return null;

//   return (
//     <AnimatePresence>
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
//       >
//         <motion.div
//           initial={{ scale: 0.95, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           exit={{ scale: 0.95, opacity: 0 }}
//           className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md"
//         >
//           <h2 className="text-2xl font-bold mb-4 text-center text-teal-900">
//             {purpose === "resetPassword" ? "Reset Password OTP Verification" : "OTP Verification"}
//           </h2>
//           <p className="text-center text-gray-600 mb-6">
//             {purpose === "resetPassword"
//               ? "Enter the OTP sent to your email to reset your password."
//               : "Enter the OTP sent to your email to verify your account."}
//           </p>
//           <form onSubmit={handleSubmit}>
//             {otpError && (
//               <div
//                 className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
//                 role="alert"
//               >
//                 <span className="block sm:inline">{otpError}</span>
//               </div>
//             )}
//             <div className="flex justify-center gap-2 mb-6">
//               {otp.map((data, index) => (
//                 <input
//                   key={index}
//                   id={`otp-input-${index}`} // Set id for each input
//                   type="text"
//                   maxLength="1"
//                   value={data}
//                   onChange={(e) => handleChange(e.target, index)}
//                   onFocus={(e) => e.target.select()}
//                   onKeyDown={(e) => handleBackspace(e, index)} // Handle backspace
//                   className="w-12 h-12 border-2 rounded text-center text-xl font-semibold focus:border-teal-500 focus:outline-none"
//                 />
//               ))}
//             </div>
//             <button
//               type="submit"
//               disabled={isLoading || otp.some((digit) => digit === "")}
//               className="w-full py-3 bg-teal-900 text-white font-semibold rounded-lg shadow-lg hover:bg-teal-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
//             >
//               {isLoading ? (
//                 <>
//                   <RefreshCcw className="animate-spin" size={20} />
//                   Verifying...
//                 </>
//               ) : (
//                 "Verify OTP"
//               )}
//             </button>
//           </form>
//           <p className="mt-4 text-center text-gray-600">
//             Didn't receive the OTP?{" "}
//             <button onClick={onResend} className="text-teal-900 font-semibold hover:underline">
//               Resend OTP
//             </button>
//           </p>
//           <button
//             onClick={onClose}
//             className="mt-4 w-full py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition-all"
//           >
//             Cancel
//           </button>
//         </motion.div>
//       </motion.div>
//     </AnimatePresence>
//   );
// };

// export default OtpVerificationModal;






// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { RefreshCcw } from "lucide-react";

// const OtpVerificationModal = ({ isOpen, onClose, onVerify, onResend, email, purpose }) => {
//   const [otp, setOtp] = useState(["", "", "", "", "", ""]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [otpError, setOtpError] = useState("");

//   useEffect(() => {
//     if (isOpen) {
//       setOtp(["", "", "", "", "", ""]);
//     }
//   }, [isOpen]);

//   const handleChange = (element, index) => {
//     if (isNaN(element.value)) return false;

//     const updatedOtp = [...otp];
//     updatedOtp[index] = element.value;
//     setOtp(updatedOtp);

//     // Move focus to the next field if current field is filled
//     if (element.nextSibling && element.value !== "") {
//       element.nextSibling.focus();
//     }
//   };

//   const handleBackspace = (e, index) => {
//     if (e.key === "Backspace" && otp[index] === "") {
//       // Focus on previous input if backspace is pressed on an empty field
//       if (index > 0) {
//         document.getElementById(`otp-input-${index - 1}`).focus();
//       }
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setOtpError("");
//     try {
//       await onVerify(otp.join(""));
//     } catch (error) {
//       setOtpError(error.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   if (!isOpen) return null;

//   return (
//     <AnimatePresence>
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
//       >
//         <motion.div
//           initial={{ scale: 0.95, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           exit={{ scale: 0.95, opacity: 0 }}
//           className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md"
//         >
//           <h2 className="text-2xl font-bold mb-4 text-center text-teal-900">
//             {purpose === "resetPassword" ? "Reset Password OTP Verification" : "OTP Verification"}
//           </h2>
//           <p className="text-center text-gray-600 mb-6">
//             {purpose === "resetPassword"
//               ? "Enter the OTP sent to your email to reset your password."
//               : "Enter the OTP sent to your email to verify your account."}
//           </p>
//           <form onSubmit={handleSubmit}>
//             {otpError && (
//               <div
//                 className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
//                 role="alert"
//               >
//                 <span className="block sm:inline">{otpError}</span>
//               </div>
//             )}
//             <div className="flex justify-center gap-2 mb-6">
//               {otp.map((data, index) => (
//                 <input
//                   key={index}
//                   id={`otp-input-${index}`} 
//                   type="text"
//                   maxLength="1"
//                   value={data}
//                   onChange={(e) => handleChange(e.target, index)}
//                   onFocus={(e) => e.target.select()}
//                   onKeyDown={(e) => handleBackspace(e, index)} // Handle backspace
//                   className="w-12 h-12 border-2 rounded text-center text-xl font-semibold focus:border-teal-500 focus:outline-none"
//                 />
//               ))}
//             </div>
//             <button
//               type="submit"
//               disabled={isLoading || otp.some((digit) => digit === "")}
//               className="w-full py-3 bg-teal-900 text-white font-semibold rounded-lg shadow-lg hover:bg-teal-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
//             >
//               {isLoading ? (
//                 <>
//                   <RefreshCcw className="animate-spin" size={20} />
//                   Verifying...
//                 </>
//               ) : (
//                 "Verify OTP"
//               )}
//             </button>
//           </form>
//           <p className="mt-4 text-center text-gray-600">
//             Didn't receive the OTP?{" "}
//             <button onClick={onResend} className="text-teal-900 font-semibold hover:underline">
//               Resend OTP
//             </button>
//           </p>
//           <button
//             onClick={onClose}
//             className="mt-4 w-full py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition-all"
//           >
//             Cancel
//           </button>
//         </motion.div>
//       </motion.div>
//     </AnimatePresence>
//   );
// };

// export default OtpVerificationModal;




// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { RefreshCcw } from "lucide-react";

// const OtpVerificationModal = ({ isOpen, onClose, onVerify, onResend, email, purpose }) => {
//   const [otp, setOtp] = useState(["", "", "", "", "", ""]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [otpError, setOtpError] = useState("");

//   useEffect(() => {
//     if (isOpen) {
//       setOtp(["", "", "", "", "", ""]);
//     }
//   }, [isOpen]);

//   const handleChange = (element, index) => {
//     if (isNaN(element.value)) return;

//     const updatedOtp = [...otp];
//     updatedOtp[index] = element.value;
//     setOtp(updatedOtp);

//     // Move focus to the next field if current field is filled
//     if (element.nextSibling && element.value !== "") {
//       element.nextSibling.focus();
//     }
//   };

//   const handleBackspace = (e, index) => {
//     if (e.key === "Backspace" && otp[index] === "") {
//       if (index > 0) {
//         document.getElementById(`otp-input-${index - 1}`).focus();
//       }
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setOtpError("");
//     try {
//       await onVerify(otp.join("")); // Call parent function to verify OTP
//       onClose(); // ✅ Close modal after successful verification
//     } catch (error) {
//       setOtpError(error.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   if (!isOpen) return null;

//   return (
//     <AnimatePresence>
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
//       >
//         <motion.div
//           initial={{ scale: 0.95, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           exit={{ scale: 0.95, opacity: 0 }}
//           className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md"
//         >
//           <h2 className="text-2xl font-bold mb-4 text-center text-teal-900">
//             {purpose === "resetPassword" ? "Reset Password OTP Verification" : "OTP Verification"}
//           </h2>
//           <p className="text-center text-gray-600 mb-6">
//             {purpose === "resetPassword"
//               ? "Enter the OTP sent to your email to reset your password."
//               : "Enter the OTP sent to your email to verify your account."}
//           </p>
//           <form onSubmit={handleSubmit}>
//             {otpError && (
//               <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
//                 <span className="block sm:inline">{otpError}</span>
//               </div>
//             )}
//             <div className="flex justify-center gap-2 mb-6">
//               {otp.map((data, index) => (
//                 <input
//                   key={index}
//                   id={`otp-input-${index}`} 
//                   type="text"
//                   maxLength="1"
//                   value={data}
//                   onChange={(e) => handleChange(e.target, index)}
//                   onFocus={(e) => e.target.select()}
//                   onKeyDown={(e) => handleBackspace(e, index)}
//                   className="w-12 h-12 border-2 rounded text-center text-xl font-semibold focus:border-teal-500 focus:outline-none"
//                 />
//               ))}
//             </div>
//             <button
//               type="submit"
//               disabled={isLoading || otp.some((digit) => digit === "")}
//               className="w-full py-3 bg-teal-900 text-white font-semibold rounded-lg shadow-lg hover:bg-teal-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
//             >
//               {isLoading ? (
//                 <>
//                   <RefreshCcw className="animate-spin" size={20} />
//                   Verifying...
//                 </>
//               ) : (
//                 "Verify OTP"
//               )}
//             </button>
//           </form>
//           <p className="mt-4 text-center text-gray-600">
//             Didn't receive the OTP?{" "}
//             <button onClick={onResend} className="text-teal-900 font-semibold hover:underline">
//               Resend OTP
//             </button>
//           </p>
//           <button
//             onClick={onClose}
//             className="mt-4 w-full py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition-all"
//           >
//             Cancel
//           </button>
//         </motion.div>
//       </motion.div>
//     </AnimatePresence>
//   );
// };

// export default OtpVerificationModal;






// import { useState, useEffect } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { RefreshCcw, CheckCircle } from "lucide-react"

// const OtpVerificationModal = ({ isOpen, onClose, onVerify, onResend, email, purpose }) => {
//   const [otp, setOtp] = useState(["", "", "", "", "", ""])
//   const [isLoading, setIsLoading] = useState(false)
//   const [otpError, setOtpError] = useState("")
//   const [isVerified, setIsVerified] = useState(false)

//   useEffect(() => {
//     if (isOpen) {
//       setOtp(["", "", "", "", "", ""])
//       setIsVerified(false)
//       setOtpError("")
//     }
//   }, [isOpen])

//   const handleChange = (element, index) => {
//     if (isNaN(element.value)) return

//     const updatedOtp = [...otp]
//     updatedOtp[index] = element.value
//     setOtp(updatedOtp)

//     if (element.nextSibling && element.value !== "") {
//       element.nextSibling.focus()
//     }
//   }

//   const handleBackspace = (e, index) => {
//     if (e.key === "Backspace" && otp[index] === "") {
//       if (index > 0) {
//         document.getElementById(`otp-input-${index - 1}`).focus()
//       }
//     }
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     setIsLoading(true)
//     setOtpError("")
//     try {
//       await onVerify(otp.join(""))
//       setIsVerified(true)
//       setTimeout(() => {
//         onClose()
//         setIsVerified(false)
//       }, 2000)
//     } catch (error) {
//       setOtpError(error.message)
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   if (!isOpen) return null

//   return (
//     <AnimatePresence>
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
//       >
//         <motion.div
//           initial={{ scale: 0.95, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           exit={{ scale: 0.95, opacity: 0 }}
//           className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md"
//         >
//           <h2 className="text-2xl font-bold mb-4 text-center text-teal-900">
//             {purpose === "resetPassword" ? "Reset Password OTP Verification" : "OTP Verification"}
//           </h2>
//           <p className="text-center text-gray-600 mb-6">
//             {purpose === "resetPassword"
//               ? "Enter the OTP sent to your email to reset your password."
//               : "Enter the OTP sent to your email to verify your account."}
//           </p>
//           {isVerified ? (
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="text-center text-green-600"
//             >
//               <CheckCircle className="w-16 h-16 mx-auto mb-4" />
//               <p className="text-xl font-semibold">OTP Verified Successfully!</p>
//             </motion.div>
//           ) : (
//             <form onSubmit={handleSubmit}>
//               {otpError && (
//                 <div
//                   className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
//                   role="alert"
//                 >
//                   <span className="block sm:inline">{otpError}</span>
//                 </div>
//               )}
//               <div className="flex justify-center gap-2 mb-6">
//                 {otp.map((data, index) => (
//                   <input
//                     key={index}
//                     id={`otp-input-${index}`}
//                     type="text"
//                     maxLength="1"
//                     value={data}
//                     onChange={(e) => handleChange(e.target, index)}
//                     onFocus={(e) => e.target.select()}
//                     onKeyDown={(e) => handleBackspace(e, index)}
//                     className="w-12 h-12 border-2 rounded text-center text-xl font-semibold focus:border-teal-500 focus:outline-none"
//                   />
//                 ))}
//               </div>
//               <button
//                 type="submit"
//                 disabled={isLoading || otp.some((digit) => digit === "")}
//                 className="w-full py-3 bg-teal-900 text-white font-semibold rounded-lg shadow-lg hover:bg-teal-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
//               >
//                 {isLoading ? (
//                   <>
//                     <RefreshCcw className="animate-spin" size={20} />
//                     Verifying...
//                   </>
//                 ) : (
//                   "Verify OTP"
//                 )}
//               </button>
//             </form>
//           )}
//           <p className="mt-4 text-center text-gray-600">
//             Didn't receive the OTP?{" "}
//             <button onClick={onResend} className="text-teal-900 font-semibold hover:underline">
//               Resend OTP
//             </button>
//           </p>
//           <button
//             onClick={onClose}
//             className="mt-4 w-full py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition-all"
//           >
//             Cancel
//           </button>
//         </motion.div>
//       </motion.div>
//     </AnimatePresence>
//   )
// }

// export default OtpVerificationModal

// import { useState, useEffect, useRef } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { RefreshCcw, CheckCircle } from 'lucide-react'

// const OtpVerificationModal = ({ isOpen, onClose, onVerify, onResend, email, purpose }) => {
//   const [otp, setOtp] = useState(["", "", "", "", "", ""])
//   const [isLoading, setIsLoading] = useState(false)
//   const [otpError, setOtpError] = useState("")
//   const [isVerified, setIsVerified] = useState(false)
//   const inputRefs = useRef([])

//   useEffect(() => {
//     if (isOpen) {
//       setOtp(["", "", "", "", "", ""])
//       setIsVerified(false)
//       setOtpError("")
//       if (inputRefs.current[0]) {
//         inputRefs.current[0].focus()
//       }
//     }
//   }, [isOpen])

//   useEffect(() => {
//     if (otp.every(digit => digit !== "")) {
//       handleSubmit()
//     }
//   }, [otp])

//   const handleChange = (element, index) => {
//     if (isNaN(element.value)) return

//     const updatedOtp = [...otp]
//     updatedOtp[index] = element.value
//     setOtp(updatedOtp)

//     if (element.nextSibling && element.value !== "") {
//       element.nextSibling.focus()
//     }
//   }

//   const handleBackspace = (e, index) => {
//     if (e.key === "Backspace" && otp[index] === "") {
//       if (index > 0) {
//         inputRefs.current[index - 1].focus()
//       }
//     }
//   }

//   const handleSubmit = async () => {
//     setIsLoading(true)
//     setOtpError("")
//     try {
//       await onVerify(otp.join(""))
//       setIsVerified(true)
//       setTimeout(() => {
//         onClose()
//         setIsVerified(false)
//       }, 2000)
//     } catch (error) {
//       setOtpError(error.message)
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   if (!isOpen) return null

//   return (
//     <AnimatePresence>
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
//       >
//         <motion.div
//           initial={{ scale: 0.95, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           exit={{ scale: 0.95, opacity: 0 }}
//           className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md"
//         >
//           <h2 className="text-2xl font-bold mb-4 text-center text-teal-900">
//             {purpose === "resetPassword" ? "Reset Password OTP Verification" : "OTP Verification"}
//           </h2>
//           <p className="text-center text-gray-600 mb-6">
//             {purpose === "resetPassword"
//               ? "Enter the OTP sent to your email to reset your password."
//               : "Enter the OTP sent to your email to verify your account."}
//           </p>
//           {isVerified ? (
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="text-center text-green-600"
//             >
//               <CheckCircle className="w-16 h-16 mx-auto mb-4" />
//               <p className="text-xl font-semibold">OTP Verified Successfully!</p>
//             </motion.div>
//           ) : (
//             <>
//               {otpError && (
//                 <div
//                   className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
//                   role="alert"
//                 >
//                   <span className="block sm:inline">{otpError}</span>
//                 </div>
//               )}
//               <div className="flex justify-center gap-2 mb-6">
//                 {otp.map((data, index) => (
//                   <input
//                     key={index}
//                     ref={el => inputRefs.current[index] = el}
//                     type="text"
//                     maxLength="1"
//                     value={data}
//                     onChange={(e) => handleChange(e.target, index)}
//                     onFocus={(e) => e.target.select()}
//                     onKeyDown={(e) => handleBackspace(e, index)}
//                     className="w-12 h-12 border-2 rounded text-center text-xl font-semibold focus:border-teal-500 focus:outline-none"
//                   />
//                 ))}
//               </div>
//             </>
//           )}
//           <p className="mt-4 text-center text-gray-600">
//             Didn't receive the OTP?{" "}
//             <button onClick={onResend} className="text-teal-900 font-semibold hover:underline">
//               Resend OTP
//             </button>
//           </p>
//           <button
//             onClick={onClose}
//             className="mt-4 w-full py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition-all"
//           >
//             Cancel
//           </button>
//         </motion.div>
//       </motion.div>
//     </AnimatePresence>
//   )
// }

// export default OtpVerificationModal





// ""

// import { useState, useEffect, useRef } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { CheckCircle } from "lucide-react"

// const OtpVerificationModal = ({ isOpen, onClose, onVerify, onResend, email, purpose }) => {
//   const [otp, setOtp] = useState(["", "", "", "", "", ""])
//   const [isLoading, setIsLoading] = useState(false)
//   const [otpError, setOtpError] = useState("")
//   const [isVerified, setIsVerified] = useState(false)
//   const inputRefs = useRef([])

//   useEffect(() => {
//     if (isOpen) {
//       setOtp(["", "", "", "", "", ""])
//       setIsVerified(false)
//       setOtpError("")
//       if (inputRefs.current[0]) {
//         inputRefs.current[0].focus()
//       }
//     }
//   }, [isOpen])

//   useEffect(() => {
//     if (otp.every((digit) => digit !== "")) {
//       handleSubmit()
//     }
//   }, [otp])

//   const handleChange = (element, index) => {
//     if (isNaN(element.value)) return

//     const updatedOtp = [...otp]
//     updatedOtp[index] = element.value
//     setOtp(updatedOtp)

//     if (element.nextSibling && element.value !== "") {
//       element.nextSibling.focus()
//     }
//   }

//   const handleBackspace = (e, index) => {
//     if (e.key === "Backspace" && otp[index] === "") {
//       if (index > 0) {
//         inputRefs.current[index - 1].focus()
//       }
//     }
//   }

//   const handleSubmit = async () => {
//     setIsLoading(true)
//     setOtpError("")
//     try {
//       await onVerify(otp.join(""))
//       setIsVerified(true)
//       setTimeout(() => {
//         onClose()
//         setIsVerified(false)
//       }, 2000)
//     } catch (error) {
//       setOtpError(error.message)
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   if (!isOpen) return null

//   return (
//     <AnimatePresence>
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
//       >
//         <motion.div
//           initial={{ scale: 0.95, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           exit={{ scale: 0.95, opacity: 0 }}
//           className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md"
//         >
//           <h2 className="text-2xl font-bold mb-4 text-center text-teal-900">
//             {purpose === "resetPassword" ? "Reset Password OTP Verification" : "OTP Verification"}
//           </h2>
//           <p className="text-center text-gray-600 mb-6">
//             {purpose === "resetPassword"
//               ? "Enter the OTP sent to your email to reset your password."
//               : "Enter the OTP sent to your email to verify your account."}
//           </p>
//           {isVerified ? (
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="text-center text-green-600"
//             >
//               <CheckCircle className="w-16 h-16 mx-auto mb-4" />
//               <p className="text-xl font-semibold">OTP Verified Successfully!</p>
//             </motion.div>
//           ) : (
//             <>
//               {otpError && (
//                 <div
//                   className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
//                   role="alert"
//                 >
//                   <span className="block sm:inline">{otpError}</span>
//                 </div>
//               )}
//               <div className="flex justify-center gap-2 mb-6">
//                 {otp.map((data, index) => (
//                   <input
//                     key={index}
//                     ref={(el) => (inputRefs.current[index] = el)}
//                     type="text"
//                     maxLength="1"
//                     value={data}
//                     onChange={(e) => handleChange(e.target, index)}
//                     onFocus={(e) => e.target.select()}
//                     onKeyDown={(e) => handleBackspace(e, index)}
//                     className="w-12 h-12 border-2 rounded text-center text-xl font-semibold focus:border-teal-500 focus:outline-none"
//                   />
//                 ))}
//               </div>
//             </>
//           )}
//           <p className="mt-4 text-center text-gray-600">
//             Didn't receive the OTP?{" "}
//             <button onClick={onResend} className="text-teal-900 font-semibold hover:underline">
//               Resend OTP
//             </button>
//           </p>
//           <button
//             onClick={onClose}
//             className="mt-4 w-full py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition-all"
//           >
//             Cancel
//           </button>
//         </motion.div>
//       </motion.div>
//     </AnimatePresence>
//   )
// }

// export default OtpVerificationModal


// import { useState, useEffect, useRef } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { CheckCircle } from "lucide-react"

// const OtpVerificationModal = ({ isOpen, onClose, onVerify, onResend, email, purpose }) => {
//   const [otp, setOtp] = useState(["", "", "", "", "", ""])
//   const [isLoading, setIsLoading] = useState(false)
//   const [otpError, setOtpError] = useState("")
//   const [isVerified, setIsVerified] = useState(false)
//   const inputRefs = useRef([])

//   useEffect(() => {
//     if (isOpen) {
//       setOtp(["", "", "", "", "", ""])
//       setIsVerified(false)
//       setOtpError("")
//       if (inputRefs.current[0]) {
//         inputRefs.current[0].focus()
//       }
//     }
//   }, [isOpen])

//   useEffect(() => {
//     if (otp.every((digit) => digit !== "")) {
//       handleSubmit()
//     }
//   }, [otp])

//   const handleChange = (element, index) => {
//     if (isNaN(element.value)) return

//     const updatedOtp = [...otp]
//     updatedOtp[index] = element.value
//     setOtp(updatedOtp)

//     if (element.nextSibling && element.value !== "") {
//       element.nextSibling.focus()
//     }
//   }

//   const handleBackspace = (e, index) => {
//     if (e.key === "Backspace" && otp[index] === "") {
//       if (index > 0) {
//         inputRefs.current[index - 1].focus()
//       }
//     }
//   }

//   const handleSubmit = async () => {
//     setIsLoading(true)
//     setOtpError("")
//     try {
//       await onVerify(otp.join(""))
//       setIsVerified(true)
//       setTimeout(() => {
//         onClose()
//         setIsVerified(false)
//       }, 2000)
//     } catch (error) {
//       setOtpError(error.message)
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   if (!isOpen) return null

//   return (
//     <AnimatePresence>
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
//       >
//         <motion.div
//           initial={{ scale: 0.95, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           exit={{ scale: 0.95, opacity: 0 }}
//           className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md"
//         >
//           <h2 className="text-2xl font-semibold mb-4 text-center text-teal-700">
//             {purpose === "resetPassword" ? "Reset Password OTP Verification" : "OTP Verification"}
//           </h2>
//           <p className="text-center text-gray-600 mb-6">
//             {purpose === "resetPassword"
//               ? "Enter the OTP sent to your email to reset your password."
//               : "Enter the OTP sent to your email to verify your account."}
//           </p>
//           {isVerified ? (
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="text-center text-green-600"
//             >
//               <CheckCircle className="w-16 h-16 mx-auto mb-4" />
//               <p className="text-xl font-semibold">OTP Verified Successfully!</p>
//             </motion.div>
//           ) : (
//             <>
//               {otpError && (
//                 <div
//                   className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
//                   role="alert"
//                 >
//                   <span className="block sm:inline">{otpError}</span>
//                 </div>
//               )}
//               <div className="flex justify-center gap-4 mb-6">
//                 {otp.map((data, index) => (
//                   <input
//                     key={index}
//                     ref={(el) => (inputRefs.current[index] = el)}
//                     type="text"
//                     maxLength="1"
//                     value={data}
//                     onChange={(e) => handleChange(e.target, index)}
//                     onFocus={(e) => e.target.select()}
//                     onKeyDown={(e) => handleBackspace(e, index)}
//                     className="w-12 h-12 border-2 rounded-lg text-center text-xl font-semibold focus:border-teal-500 focus:ring-2 focus:ring-teal-400 transition-all"
//                   />
//                 ))}
//               </div>
//             </>
//           )}
//           <p className="mt-4 text-center text-gray-600">
//             Didn't receive the OTP?{" "}
//             <button onClick={onResend} className="text-teal-700 font-semibold hover:underline">
//               Resend OTP
//             </button>
//           </p>
//           <div className="mt-4 flex justify-between gap-4">
//             <button
//               onClick={onClose}
//               className="w-full py-2 bg-gray-100 text-gray-800 font-semibold rounded-lg hover:bg-gray-200 transition-all"
//             >
//               Cancel
//             </button>
//             {!isVerified && (
//               <button
//                 onClick={handleSubmit}
//                 className="w-full py-2 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-all"
//                 disabled={otp.some((digit) => digit === "") || isLoading}
//               >
//                 {isLoading ? "Verifying..." : "Verify OTP"}
//               </button>
//             )}
//           </div>
//         </motion.div>
//       </motion.div>
//     </AnimatePresence>
//   )
// }

// export default OtpVerificationModal











import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { RefreshCcw, X } from "lucide-react"

export default function OtpVerificationModal({ isOpen, onClose, onVerify, onResend, email, purpose }) {
  const [otp, setOtp] = useState(["", "", "", "", "", ""])
  const [timer, setTimer] = useState(60)
  const [isResending, setIsResending] = useState(false)
  const [isVerifying, setIsVerifying] = useState(false)
  const inputRefs = useRef([])

  useEffect(() => {
    if (isOpen) {
      setOtp(["", "", "", "", "", ""])
      setTimer(60)
      setTimeout(() => {
        if (inputRefs.current[0]) {
          inputRefs.current[0].focus()
        }
      }, 100)
    }
  }, [isOpen])

  useEffect(() => {
    let interval
    if (isOpen && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isOpen, timer])

  const handleChange = (index, value) => {
    if (value.length > 1) {
      value = value.charAt(0)
    }

    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1].focus()
    }
  }

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus()
    }
  }

  const handlePaste = (e) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData("text/plain").trim()

    if (/^\d+$/.test(pastedData) && pastedData.length <= 6) {
      const newOtp = [...otp]
      for (let i = 0; i < pastedData.length; i++) {
        if (i < 6) {
          newOtp[i] = pastedData.charAt(i)
        }
      }
      setOtp(newOtp)

      // Focus the next empty input or the last one
      const nextEmptyIndex = newOtp.findIndex((digit) => !digit)
      if (nextEmptyIndex !== -1 && nextEmptyIndex < 6) {
        inputRefs.current[nextEmptyIndex].focus()
      } else {
        inputRefs.current[5].focus()
      }
    }
  }

  const handleVerify = async () => {
    const otpValue = otp.join("")
    if (otpValue.length !== 6) return

    setIsVerifying(true)
    try {
      await onVerify(otpValue)
    } finally {
      setIsVerifying(false)
    }
  }

  const handleResend = async () => {
    if (timer > 0) return

    setIsResending(true)
    try {
      await onResend()
      setTimer(60)
    } finally {
      setIsResending(false)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-md relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 p-1 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>

            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Verification Code</h3>
              <p className="text-gray-600">
                We've sent a 6-digit code to <span className="font-medium">{email}</span>
              </p>
              <p className="text-sm text-gray-500 mt-1">
                {purpose === "login"
                  ? "Please verify to complete login"
                  : purpose === "signup"
                    ? "Please verify to complete registration"
                    : "Please verify to reset your password"}
              </p>
            </div>

            <div className="flex justify-center gap-2 mb-6">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  onPaste={index === 0 ? handlePaste : undefined}
                  className="w-12 h-12 text-center text-xl font-bold border border-gray-300 rounded-lg focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
                />
              ))}
            </div>

            <button
              onClick={handleVerify}
              disabled={otp.join("").length !== 6 || isVerifying}
              className="w-full py-3 bg-teal-900 text-white font-semibold rounded-lg shadow hover:bg-teal-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isVerifying ? (
                <>
                  <RefreshCcw className="animate-spin" size={18} />
                  Verifying...
                </>
              ) : (
                "Verify"
              )}
            </button>

            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">
                Didn't receive the code?{" "}
                <button
                  onClick={handleResend}
                  disabled={timer > 0 || isResending}
                  className={`font-semibold ${
                    timer > 0 || isResending ? "text-gray-400" : "text-teal-900 hover:underline"
                  }`}
                >
                  {isResending ? "Resending..." : timer > 0 ? `Resend in ${timer}s` : "Resend"}
                </button>
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}





// import { useState, useEffect, useRef } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { RefreshCcw, X } from "lucide-react"

// export default function OtpVerificationModal({ isOpen, onClose, onVerify, onResend, email, purpose }) {
//   const [otp, setOtp] = useState(["", "", "", "", "", ""])
//   const [activeInput, setActiveInput] = useState(0)
//   const [timeLeft, setTimeLeft] = useState(60)
//   const [isLoading, setIsLoading] = useState(false)
//   const [error, setError] = useState("")
//   const inputRefs = useRef([])

//   useEffect(() => {
//     if (isOpen) {
//       setOtp(["", "", "", "", "", ""])
//       setActiveInput(0)
//       setTimeLeft(60)
//       setError("")
//       setTimeout(() => {
//         if (inputRefs.current[0]) {
//           inputRefs.current[0].focus()
//         }
//       }, 100)
//     }
//   }, [isOpen])

//   useEffect(() => {
//     let timer
//     if (isOpen && timeLeft > 0) {
//       timer = setTimeout(() => {
//         setTimeLeft(timeLeft - 1)
//       }, 1000)
//     }
//     return () => clearTimeout(timer)
//   }, [timeLeft, isOpen])

//   const handleChange = (e, index) => {
//     const { value } = e.target
//     if (value === "" || /^[0-9]$/.test(value)) {
//       const newOtp = [...otp]
//       newOtp[index] = value
//       setOtp(newOtp)
//       setError("")

//       // Auto-focus next input
//       if (value !== "" && index < 5) {
//         setActiveInput(index + 1)
//         inputRefs.current[index + 1].focus()
//       }
//     }
//   }

//   const handleKeyDown = (e, index) => {
//     if (e.key === "Backspace" && !otp[index] && index > 0) {
//       setActiveInput(index - 1)
//       inputRefs.current[index - 1].focus()
//     } else if (e.key === "ArrowLeft" && index > 0) {
//       setActiveInput(index - 1)
//       inputRefs.current[index - 1].focus()
//     } else if (e.key === "ArrowRight" && index < 5) {
//       setActiveInput(index + 1)
//       inputRefs.current[index + 1].focus()
//     }
//   }

//   const handlePaste = (e) => {
//     e.preventDefault()
//     const pastedData = e.clipboardData.getData("text/plain").trim()
//     if (/^[0-9]{6}$/.test(pastedData)) {
//       const newOtp = pastedData.split("")
//       setOtp(newOtp)
//       setActiveInput(5)
//       inputRefs.current[5].focus()
//     }
//   }

//   const handleVerify = async () => {
//     const otpValue = otp.join("")
//     if (otpValue.length !== 6) {
//       setError("Please enter all 6 digits")
//       return
//     }

//     setIsLoading(true)
//     try {
//       await onVerify(otpValue)
//     } catch (error) {
//       setError(error.message || "Verification failed")
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   const handleResend = async () => {
//     setIsLoading(true)
//     try {
//       await onResend()
//       setTimeLeft(60)
//       setOtp(["", "", "", "", "", ""])
//       setActiveInput(0)
//       inputRefs.current[0].focus()
//     } catch (error) {
//       setError(error.message || "Failed to resend OTP")
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
//           onClick={onClose}
//         >
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95, y: 20 }}
//             animate={{ opacity: 1, scale: 1, y: 0 }}
//             exit={{ opacity: 0, scale: 0.95, y: 20 }}
//             transition={{ type: "spring", damping: 25, stiffness: 300 }}
//             className="bg-white  rounded-xl shadow-2xl w-full max-w-md p-6 relative"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <button
//               onClick={onClose}
//               className="absolute right-4 top-4 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
//               aria-label="Close modal"
//             >
//               <X className="w-5 h-5 text-gray-500 " />
//             </button>

//             <div className="text-center mb-6">
//               <h3 className="text-xl font-bold text-gray-900 ">Verification Code</h3>
//               <p className="text-gray-600  mt-2">
//                 We have sent a verification code to <span className="font-medium">{email}</span>
//               </p>
//               <p className="text-sm text-gray-500  mt-1">
//                 {purpose === "login"
//                   ? "Please enter the code to complete login"
//                   : purpose === "signup"
//                     ? "Please enter the code to complete registration"
//                     : "Please enter the code to reset your password"}
//               </p>
//             </div>

//             <div className="flex justify-center gap-2 sm:gap-3 mb-6">
//               {otp.map((digit, index) => (
//                 <input
//                   key={index}
//                   ref={(el) => (inputRefs.current[index] = el)}
//                   type="text"
//                   inputMode="numeric"
//                   maxLength={1}
//                   value={digit}
//                   onChange={(e) => handleChange(e, index)}
//                   onKeyDown={(e) => handleKeyDown(e, index)}
//                   onPaste={handlePaste}
//                   onFocus={() => setActiveInput(index)}
//                   className={`w-10 h-12 sm:w-12 sm:h-14 text-center text-xl font-bold rounded-lg border-2 ${
//                     activeInput === index ? "border-primary bg-primary/5" : "border-gray-300 dark:border-gray-700"
//                   } focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all dark:bg-gray-800 dark:text-white`}
//                 />
//               ))}
//             </div>

//             {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}

//             <button
//               onClick={handleVerify}
//               disabled={isLoading || otp.join("").length !== 6}
//               className="w-full py-3 text-primary-foreground font-semibold rounded-lg shadow-md bg-teal-900 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
//             >
//               {isLoading ? (
//                 <>
//                   <RefreshCcw className="animate-spin" size={18} />
//                   Verifying...
//                 </>
//               ) : (
//                 "Verify"
//               )}
//             </button>

//             <div className="mt-4 text-center">
//               <p className="text-sm text-gray-600 ">
//                 Didn't receive the code?{" "}
//                 {timeLeft > 0 ? (
//                   <span className="text-primary font-medium">Resend in {timeLeft}s</span>
//                 ) : (
//                   <button
//                     onClick={handleResend}
//                     disabled={isLoading}
//                     className="text-primary font-medium hover:underline focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
//                   >
//                     Resend Code
//                   </button>
//                 )}
//               </p>
//             </div>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   )
// }



// import { useState, useEffect } from "react"
// import { motion } from "framer-motion"
// import { RefreshCcw } from "lucide-react"

// const OtpVerificationModal = ({ isOpen, onClose, onVerify, onResend, email, purpose }) => {
//   const [otp, setOtp] = useState("")
//   const [error, setError] = useState("")
//   const [isLoading, setIsLoading] = useState(false)
//   const [resendDisabled, setResendDisabled] = useState(true)
//   const [resendTimer, setResendTimer] = useState(60)

//   useEffect(() => {
//     let interval
//     if (resendDisabled && resendTimer > 0) {
//       interval = setInterval(() => {
//         setResendTimer((prev) => prev - 1)
//       }, 1000)
//     } else {
//       setResendDisabled(false)
//       clearInterval(interval)
//     }
//     return () => clearInterval(interval)
//   }, [resendDisabled, resendTimer])

//   const handleVerify = async () => {
//     setIsLoading(true)
//     setError("")
//     try {
//       await onVerify(otp)
//     } catch (err) {
//       setError(err.message || "Failed to verify OTP")
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   const handleResend = async () => {
//     setIsLoading(true)
//     setResendDisabled(true)
//     setResendTimer(60)
//     try {
//       await onResend()
//     } catch (err) {
//       setError(err.message || "Failed to resend OTP")
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   if (!isOpen) return null

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//       <motion.div
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         exit={{ opacity: 0, scale: 0.9 }}
//         className="bg-white rounded-xl shadow-lg w-full max-w-md mx-auto"
//       >
//         <div className="p-6">
//           <div className="flex justify-between items-center mb-4">
//             <h2 className="text-2xl font-bold text-gray-800">OTP Verification</h2>
//             <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
//               <svg
//                 className="w-6 h-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
//               </svg>
//             </button>
//           </div>
//           <p className="text-gray-600 mb-4">
//             {`Please enter the OTP sent to your email address (${email}) to verify your ${purpose === "resetPassword" ? "password reset" : "account"}.`}
//           </p>
//           {error && (
//             <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
//               <strong className="font-bold">Error!</strong>
//               <span className="block sm:inline">{error}</span>
//             </div>
//           )}
//           <div className="mb-4">
//             <label htmlFor="otp" className="block text-gray-700 text-sm font-bold mb-2">
//               OTP
//             </label>
//             <input
//               type="text"
//               id="otp"
//               placeholder="Enter OTP"
//               value={otp}
//               onChange={(e) => setOtp(e.target.value)}
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             />
//           </div>
//           <div className="flex justify-between items-center">
//             <button
//               onClick={handleVerify}
//               disabled={isLoading}
//               className={`bg-teal-900 hover:bg-teal-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
//                 isLoading ? "opacity-50 cursor-not-allowed" : ""
//               }`}
//             >
//               {isLoading ? (
//                 <div className="flex items-center justify-center">
//                   <RefreshCcw className="mr-2 animate-spin" size={16} />
//                   Verifying...
//                 </div>
//               ) : (
//                 "Verify OTP"
//               )}
//             </button>
//             <button
//               onClick={handleResend}
//               disabled={resendDisabled || isLoading}
//               className={`text-teal-700 hover:text-teal-900 font-semibold ${
//                 resendDisabled || isLoading ? "opacity-50 cursor-not-allowed" : ""
//               }`}
//             >
//               {resendDisabled ? `Resend OTP in ${resendTimer}s` : "Resend OTP"}
//             </button>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   )
// }

// export default OtpVerificationModal








// import { useState, useEffect, useRef } from "react"
// import { motion } from "framer-motion"
// import {
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalFooter,
//   ModalBody,
//   ModalCloseButton,
//   Button,
//   Text,
//   Box,
//   Flex,
//   VStack,
//   HStack,
//   PinInput,
//   PinInputField,
//   Alert,
//   AlertIcon,
//   AlertDescription,
//   useColorModeValue,
//   Icon,
//   Heading,
// } from "@chakra-ui/react"
// import { FiCheckCircle, FiRefreshCw, FiShield, FiMail, FiClock } from "react-icons/fi"

// const OtpVerificationModal = ({ isOpen, onClose, onVerify, onResend, email, purpose }) => {
//   const [otp, setOtp] = useState("")
//   const [isLoading, setIsLoading] = useState(false)
//   const [otpError, setOtpError] = useState("")
//   const [isVerified, setIsVerified] = useState(false)
//   const [resendDisabled, setResendDisabled] = useState(false)
//   const [resendTimer, setResendTimer] = useState(0)
//   const pinRef = useRef(null)

//   useEffect(() => {
//     if (isOpen) {
//       setOtp("")
//       setIsVerified(false)
//       setOtpError("")
//       if (pinRef.current) {
//         setTimeout(() => {
//           pinRef.current.focus()
//         }, 100)
//       }
//     }
//   }, [isOpen])

//   // Handle resend cooldown
//   useEffect(() => {
//     let interval
//     if (resendDisabled && resendTimer > 0) {
//       interval = setInterval(() => {
//         setResendTimer((prev) => {
//           if (prev <= 1) {
//             clearInterval(interval)
//             setResendDisabled(false)
//             return 0
//           }
//           return prev - 1
//         })
//       }, 1000)
//     }
//     return () => clearInterval(interval)
//   }, [resendDisabled, resendTimer])

//   const handleComplete = async (value) => {
//     setOtp(value)
//     handleSubmit(value)
//   }

//   const handleSubmit = async (otpValue) => {
//     setIsLoading(true)
//     setOtpError("")
//     try {
//       await onVerify(otpValue || otp)
//       setIsVerified(true)
//       setTimeout(() => {
//         onClose()
//         setIsVerified(false)
//       }, 2000)
//     } catch (error) {
//       setOtpError(error.message || "Invalid OTP. Please try again.")
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   const handleResendOtp = () => {
//     onResend()
//     setResendDisabled(true)
//     setResendTimer(60) // 60 seconds cooldown
//   }

//   const bgColor = useColorModeValue("white", "gray.800")
//   const borderColor = useColorModeValue("gray.200", "gray.700")

 

//   return (
//     <Modal 
//       isOpen={isOpen} 
//       onClose={onClose}
//       isCentered
//       motionPreset="slideInBottom"
//       size="md"
//     >
//       <ModalOverlay 
//         bg="blackAlpha.600"
//         backdropFilter="blur(8px)"
//       />
//       <ModalContent
//         bg={bgColor}
//         borderWidth="1px"
//         borderColor={borderColor}
//         borderRadius="xl"
//         mx={4}
//       >
//         <ModalCloseButton size="lg" />
        
//         <ModalBody py={8} px={6}>
//           {isVerified ? (
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.3 }}
//             >
//               <VStack spacing={4} align="center">
//                 <Box 
//                   bg="green.100" 
//                   p={4} 
//                   rounded="full" 
//                   w="80px" 
//                   h="80px" 
//                   display="flex" 
//                   alignItems="center" 
//                   justifyContent="center"
//                 >
//                   <Icon as={FiCheckCircle} w={12} h={12} color="green.500" />
//                 </Box>
//                 <Heading size="lg" color="green.500">Verified!</Heading>
//                 <Text textAlign="center">Your OTP has been verified successfully.</Text>
//               </VStack>
//             </motion.div>
//           ) : (
//             <VStack spacing={6} align="stretch">
//               <VStack spacing={2} align="center">
//                 <Box 
//                   bg="brand.50" 
//                   p={3} 
//                   rounded="full" 
//                   display="inline-flex"
//                 >
//                   <Icon as={FiShield} w={8} h={8} color="brand.500" />
//                 </Box>
                
//                 <Heading size="md" textAlign="center">
//                   {purpose === "resetPassword" ? "Reset Password Verification" : "Account Verification"}
//                 </Heading>
                
//                 <Text textAlign="center" color="gray.600" fontSize="sm">
//                   {purpose === "resetPassword"
//                     ? "Enter the OTP sent to your email to reset your password."
//                     : "Enter the OTP sent to your email to verify your account."}
//                 </Text>
                
//                 {email && (
//                   <Flex align="center" mt={1}>
//                     <Icon as={FiMail} mr={1} color="gray.500" />
//                     <Text fontSize="sm" fontWeight="medium">{email}</Text>
//                   </Flex>
//                 )}
//               </VStack>
              
//               {otpError && (
//                 <Alert status="error" rounded="md">
//                   <AlertIcon />
//                   <AlertDescription fontSize="sm">{otpError}</AlertDescription>
//                 </Alert>
//               )}
              
//               <Box>
//                 <HStack justify="center" spacing={2}>
//                   <PinInput 
//                     size="lg" 
//                     otp 
//                     value={otp} 
//                     onChange={setOtp} 
//                     onComplete={handleComplete}
//                     focusBorderColor="brand.500"
//                     autoFocus
//                   >
//                     <PinInputField ref={pinRef} />
//                     <PinInputField ref={pinRef}/>
//                     <PinInputField ref={pinRef} />
//                     <PinInputField ref={pinRef}/>
//                     <PinInputField ref={pinRef} />
//                     <PinInputField ref={pinRef}/>
//                   </PinInput>
//                 </HStack>
//               </Box>
              
//               <Flex justify="center" align="center" direction="column" mt={2}>
//                 <Text fontSize="sm" color="gray.600" mb={2}>
//                   Didn't receive the OTP?
//                 </Text>
//                 {resendDisabled ? (
//                   <Flex align="center">
//                     <Icon as={FiClock} mr={1} color="gray.500" />
//                     <Text fontSize="sm" color="gray.500">
//                       Resend in {resendTimer}s
//                     </Text>
//                   </Flex>
//                 ) : (
//                   <Button
//                     variant="link"
//                     colorScheme="brand"
//                     size="sm"
//                     onClick={handleResendOtp}
//                     isLoading={isLoading}
//                     loadingText="Sending..."
//                     leftIcon={<FiRefreshCw />}
//                   >
//                     Resend OTP
//                   </Button>
//                 )}
//               </Flex>
//             </VStack>
//           )}
//         </ModalBody>
        
//         <ModalFooter>
//           <Button onClick={onClose} variant="ghost">
//             {isVerified ? "Close" : "Cancel"}
//           </Button>
//           {!isVerified && (
//             <Button
//               colorScheme="brand"
//               ml={3}
//               onClick={() => handleSubmit()}
//               isLoading={isLoading}
//               loadingText="Verifying..."
//               isDisabled={otp.length !== 6}
//             >
//               Verify
//             </Button>
//           )}
//         </ModalFooter>
//       </ModalContent>
//     </Modal>
//   )
// }

// export default OtpVerificationModal




// import { useState, useEffect, useRef } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { CheckCircle, AlertCircle } from "lucide-react"

// const OtpVerificationModal = ({ isOpen, onClose, onVerify, onResend, email, purpose, correctOtp }) => {
//   const [otp, setOtp] = useState(["", "", "", "", "", ""])
//   const [isLoading, setIsLoading] = useState(false)
//   const [otpError, setOtpError] = useState("")
//   const [isVerified, setIsVerified] = useState(false)
//   const inputRefs = useRef([])

//   useEffect(() => {
//     if (isOpen) {
//       setOtp(["", "", "", "", "", ""])
//       setIsVerified(false)
//       setOtpError("")
//       if (inputRefs.current[0]) {
//         inputRefs.current[0].focus()
//       }
//     }
//   }, [isOpen])

//   const handleChange = (element, index) => {
//     if (!/^\d?$/.test(element.value)) return // Allow only numbers

//     const updatedOtp = [...otp]
//     updatedOtp[index] = element.value
//     setOtp(updatedOtp)

//     if (element.nextSibling && element.value !== "") {
//       element.nextSibling.focus()
//     }
//   }

//   const handleBackspace = (e, index) => {
//     if (e.key === "Backspace" && otp[index] === "") {
//       if (index > 0) {
//         inputRefs.current[index - 1].focus()
//       }
//     }
//   }

//   const handleSubmit = async () => {
//     if (otp.includes("")) {
//       setOtpError("Please enter all 6 digits.")
//       return
//     }

//     const enteredOtp = otp.join("")
//     if (enteredOtp.length !== 6) {
//       setOtpError("OTP must be exactly 6 digits.")
//       return
//     }

//     if (enteredOtp !== correctOtp) {
//       setOtpError("Invalid OTP. Please try again.")
//       return
//     }

//     setIsLoading(true)
//     setOtpError("")

//     try {
//       await onVerify(enteredOtp)
//       setIsVerified(true)
//       setTimeout(() => {
//         onClose()
//         setIsVerified(false)
//       }, 2000)
//     } catch (error) {
//       setOtpError("Something went wrong. Please try again.")
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   if (!isOpen) return null

//   return (
//     <AnimatePresence>
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
//       >
//         <motion.div
//           initial={{ scale: 0.95, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           exit={{ scale: 0.95, opacity: 0 }}
//           className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-md"
//         >
//           <h2 className="text-2xl font-bold text-center text-teal-900">
//             {purpose === "resetPassword" ? "Reset Password OTP" : "OTP Verification"}
//           </h2>
//           <p className="text-center text-gray-600 mt-2">
//             {purpose === "resetPassword"
//               ? "Enter the OTP sent to your email to reset your password."
//               : "Enter the OTP sent to your email to verify your account."}
//           </p>

//           {isVerified ? (
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="text-center text-green-600 mt-6"
//             >
//               <CheckCircle className="w-16 h-16 mx-auto mb-2" />
//               <p className="text-xl font-semibold">OTP Verified Successfully!</p>
//             </motion.div>
//           ) : (
//             <>
//               {otpError && (
//                 <motion.div
//                   initial={{ opacity: 0, y: -10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   className="flex items-center gap-2 bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded-md mt-4"
//                 >
//                   <AlertCircle className="w-5 h-5" />
//                   <span>{otpError}</span>
//                 </motion.div>
//               )}

//               <div className="flex justify-center gap-3 mt-6">
//                 {otp.map((data, index) => (
//                   <motion.input
//                     key={index}
//                     ref={(el) => (inputRefs.current[index] = el)}
//                     type="text"
//                     maxLength="1"
//                     value={data}
//                     onChange={(e) => handleChange(e.target, index)}
//                     onFocus={(e) => e.target.select()}
//                     onKeyDown={(e) => handleBackspace(e, index)}
//                     className="w-12 h-12 border-2 rounded-lg text-center text-xl font-semibold transition-all 
//                       focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-300"
//                     whileFocus={{ scale: 1.1 }}
//                   />
//                 ))}
//               </div>

//               <motion.button
//                 whileTap={{ scale: 0.95 }}
//                 whileHover={{ scale: 1.05 }}
//                 onClick={handleSubmit}
//                 disabled={isLoading}
//                 className="mt-6 w-full py-2 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-all disabled:bg-gray-400"
//               >
//                 {isLoading ? "Verifying..." : "Verify OTP"}
//               </motion.button>

//               <p className="mt-4 text-center text-gray-600">
//                 Didn't receive the OTP?{" "}
//                 <button
//                   onClick={() => {
//                     setOtpError("")
//                     onResend()
//                   }}
//                   className="text-teal-900 font-semibold hover:underline"
//                 >
//                   Resend OTP
//                 </button>
//               </p>

//               <motion.button
//                 whileTap={{ scale: 0.95 }}
//                 whileHover={{ scale: 1.05 }}
//                 onClick={onClose}
//                 className="mt-4 w-full py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition-all"
//               >
//                 Cancel
//               </motion.button>
//             </>
//           )}
//         </motion.div>
//       </motion.div>
//     </AnimatePresence>
//   )
// }

// export default OtpVerificationModal
