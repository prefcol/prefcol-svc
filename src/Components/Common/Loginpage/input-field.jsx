// // // import React, { useState } from "react"
// // // import { motion } from "framer-motion"
// // // import { Eye, EyeOff, AlertCircle } from "lucide-react"

// // // const fadeIn = {
// // //   hidden: {
// // //     opacity: 0,
// // //   },
// // //   visible: {
// // //     opacity: 1,
// // //     transition: {
// // //       duration: 0.2,
// // //     },
// // //   },
// // // }

// // // const InputField = React.memo(({ icon: Icon, type, error, validate, ...props }) => {
// // //   const [showPassword, setShowPassword] = useState(false)
// // //   const [inputError, setInputError] = useState(error)

// // //   const handleBlur = (e) => {
// // //     if (validate) {
// // //       const validationError = validate(e.target.value)
// // //       setInputError(validationError)
// // //     }
// // //   }

// // //   return (
// // //     <motion.div className="relative" variants={fadeIn} initial="hidden" animate="visible">
// // //       <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
// // //       <input
// // //         {...props}
// // //         type={type === "password" && showPassword ? "text" : type}
// // //         className={`w-full pl-10 pr-10 py-4 text-sm border rounded-full focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all ${
// // //           inputError ? "border-red-500 bg-red-50" : "border-gray-200"
// // //         }`}
// // //         onBlur={handleBlur}
// // //       />
// // //       {type === "password" && (
// // //         <button
// // //           type="button"
// // //           onClick={() => setShowPassword(!showPassword)}
// // //           className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-emerald-500 transition-colors"
// // //         >
// // //           {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
// // //         </button>
// // //       )}
// // //       {inputError && (
// // //         <motion.p
// // //           initial={{ opacity: 0, y: -10 }}
// // //           animate={{ opacity: 1, y: 0 }}
// // //           exit={{ opacity: 0, y: -10 }}
// // //           className="text-red-500 text-xs mt-1 flex items-center"
// // //         >
// // //           <AlertCircle size={12} className="mr-1" />
// // //           {inputError}
// // //         </motion.p>
// // //       )}
// // //     </motion.div>
// // //   )
// // // })

// // // export default InputField




// // // "use client"

// // // import React, { useState, useEffect } from "react"
// // // import { motion } from "framer-motion"
// // // import { Eye, EyeOff, AlertCircle } from "lucide-react"

// // // const fadeIn = {
// // //   hidden: {
// // //     opacity: 0,
// // //   },
// // //   visible: {
// // //     opacity: 1,
// // //     transition: {
// // //       duration: 0.2,
// // //     },
// // //   },
// // // }

// // // const InputField = React.memo(({ icon: Icon, type, error, validate, value, onChange, ...props }) => {
// // //   const [showPassword, setShowPassword] = useState(false)
// // //   const [inputError, setInputError] = useState(error)

// // //   useEffect(() => {
// // //     setInputError(error)
// // //   }, [error])

// // //   const handleBlur = (e) => {
// // //     if (validate) {
// // //       const validationError = validate(e.target.value)
// // //       setInputError(validationError)
// // //     }
// // //   }

// // //   const handleChange = (e) => {
// // //     onChange(e)
// // //     if (validate) {
// // //       const validationError = validate(e.target.value)
// // //       setInputError(validationError)
// // //     }
// // //   }

// // //   return (
// // //     <motion.div className="relative" variants={fadeIn} initial="hidden" animate="visible">
// // //       <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
// // //       <input
// // //         {...props}
// // //         type={type === "password" && showPassword ? "text" : type}
// // //         className={`w-full pl-10 pr-10 py-4 text-sm border rounded-full focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all ${
// // //           inputError ? "border-red-500 bg-red-50" : "border-gray-200"
// // //         }`}
// // //         value={value}
// // //         onChange={handleChange}
// // //         onBlur={handleBlur}
// // //       />
// // //       {type === "password" && (
// // //         <button
// // //           type="button"
// // //           onClick={() => setShowPassword(!showPassword)}
// // //           className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-emerald-500 transition-colors"
// // //         >
// // //           {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
// // //         </button>
// // //       )}
// // //       {inputError && (
// // //         <motion.p
// // //           initial={{ opacity: 0, y: -10 }}
// // //           animate={{ opacity: 1, y: 0 }}
// // //           exit={{ opacity: 0, y: -10 }}
// // //           className="text-red-500 text-xs mt-1 flex items-center"
// // //         >
// // //           <AlertCircle size={12} className="mr-1" />
// // //           {inputError}
// // //         </motion.p>
// // //       )}
// // //     </motion.div>
// // //   )
// // // })

// // // export default InputField





// // // "use client"

// // // import React, { useState, useEffect } from "react"
// // // import { motion } from "framer-motion"
// // // import { Eye, EyeOff, AlertCircle } from "lucide-react"

// // // const fadeIn = {
// // //   hidden: {
// // //     opacity: 0,
// // //   },
// // //   visible: {
// // //     opacity: 1,
// // //     transition: {
// // //       duration: 0.2,
// // //     },
// // //   },
// // // }

// // // const passwordStrengthColor = (strength) => {
// // //   if (strength < 2) return "bg-red-500"
// // //   if (strength < 3) return "bg-yellow-500"
// // //   if (strength < 4) return "bg-blue-500"
// // //   return "bg-green-500"
// // // }

// // // const InputField = React.memo(({ icon: Icon, type, error, validate, value, onChange, ...props }) => {
// // //   const [showPassword, setShowPassword] = useState(false)
// // //   const [inputError, setInputError] = useState(error)
// // //   const [passwordStrength, setPasswordStrength] = useState(0)

// // //   useEffect(() => {
// // //     setInputError(error)
// // //   }, [error])

// // //   const handleBlur = (e) => {
// // //     if (validate) {
// // //       const validationError = validate(e.target.value)
// // //       setInputError(validationError)
// // //     }
// // //   }

// // //   const handleChange = (e) => {
// // //     onChange(e)
// // //     if (validate) {
// // //       const validationError = validate(e.target.value)
// // //       setInputError(validationError)
// // //     }
// // //     if (type === "password") {
// // //       setPasswordStrength(calculatePasswordStrength(e.target.value))
// // //     }
// // //   }

// // //   const calculatePasswordStrength = (password) => {
// // //     let strength = 0
// // //     if (password.length >= 8) strength++
// // //     if (/[A-Z]/.test(password)) strength++
// // //     if (/[a-z]/.test(password)) strength++
// // //     if (/[0-9]/.test(password)) strength++
// // //     if (/[^A-Za-z0-9]/.test(password)) strength++
// // //     return strength
// // //   }

// // //   return (
// // //     <motion.div className="relative" variants={fadeIn} initial="hidden" animate="visible">
// // //       <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
// // //       <input
// // //         {...props}
// // //         type={type === "password" && showPassword ? "text" : type}
// // //         className={`w-full pl-10 pr-10 py-4 text-sm border rounded-full focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all ${
// // //           inputError ? "border-red-500 bg-red-50" : "border-gray-200"
// // //         }`}
// // //         value={value}
// // //         onChange={handleChange}
// // //         onBlur={handleBlur}
// // //       />
// // //       {type === "password" && (
// // //         <>
// // //           <button
// // //             type="button"
// // //             onClick={() => setShowPassword(!showPassword)}
// // //             className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-emerald-500 transition-colors"
// // //           >
// // //             {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
// // //           </button>
// // //           <div className="mt-1 h-1 w-full bg-gray-200 rounded-full overflow-hidden">
// // //             <div
// // //               className={`h-full ${passwordStrengthColor(passwordStrength)} transition-all duration-300`}
// // //               style={{ width: `${(passwordStrength / 5) * 100}%` }}
// // //             ></div>
// // //           </div>
// // //         </>
// // //       )}
// // //       {inputError && (
// // //         <motion.p
// // //           initial={{ opacity: 0, y: -10 }}
// // //           animate={{ opacity: 1, y: 0 }}
// // //           exit={{ opacity: 0, y: -10 }}
// // //           className="text-red-500 text-xs mt-1 flex items-center"
// // //         >
// // //           <AlertCircle size={12} className="mr-1" />
// // //           {inputError}
// // //         </motion.p>
// // //       )}
// // //     </motion.div>
// // //   )
// // // })

// // // export default InputField



// // // "use client"

// // // import React, { useState, useEffect } from "react"
// // // import { motion } from "framer-motion"
// // // import { Eye, EyeOff, AlertCircle } from "lucide-react"

// // // const fadeIn = {
// // //   hidden: {
// // //     opacity: 0,
// // //   },
// // //   visible: {
// // //     opacity: 1,
// // //     transition: {
// // //       duration: 0.2,
// // //     },
// // //   },
// // // }

// // // const passwordStrengthColor = (strength) => {
// // //   if (strength < 2) return "bg-red-500"
// // //   if (strength < 3) return "bg-yellow-500"
// // //   if (strength < 4) return "bg-blue-500"
// // //   return "bg-green-500"
// // // }

// // // const InputField = React.memo(({ icon: Icon, type, error, validate, value, onChange, ...props }) => {
// // //   const [showPassword, setShowPassword] = useState(false)
// // //   const [inputError, setInputError] = useState(error)
// // //   const [passwordStrength, setPasswordStrength] = useState(0)

// // //   useEffect(() => {
// // //     setInputError(error)
// // //   }, [error])

// // //   const handleBlur = (e) => {
// // //     if (validate) {
// // //       const validationError = validate(e.target.value)
// // //       setInputError(validationError)
// // //     }
// // //   }

// // //   const handleChange = (e) => {
// // //     onChange(e)
// // //     if (validate) {
// // //       const validationError = validate(e.target.value)
// // //       setInputError(validationError)
// // //     }
// // //     if (type === "password") {
// // //       setPasswordStrength(calculatePasswordStrength(e.target.value))
// // //     }
// // //   }

// // //   const calculatePasswordStrength = (password) => {
// // //     let strength = 0
// // //     if (password.length >= 8) strength++
// // //     if (/[A-Z]/.test(password)) strength++
// // //     if (/[a-z]/.test(password)) strength++
// // //     if (/[0-9]/.test(password)) strength++
// // //     if (/[^A-Za-z0-9]/.test(password)) strength++
// // //     return strength
// // //   }

// // //   return (
// // //     <motion.div className="relative" variants={fadeIn} initial="hidden" animate="visible">
// // //       <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
// // //       <input
// // //         {...props}
// // //         type={type === "password" && showPassword ? "text" : type}
// // //         className={`w-full pl-10 pr-10 py-4 text-sm border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all ${
// // //           inputError ? "border-red-500 bg-red-50" : "border-gray-200"
// // //         }`}
// // //         value={value}
// // //         onChange={handleChange}
// // //         onBlur={handleBlur}
// // //       />
// // //       {type === "password" && (
// // //         <>
// // //           <button
// // //             type="button"
// // //             onClick={() => setShowPassword(!showPassword)}
// // //             className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-teal-500 transition-colors"
// // //           >
// // //             {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
// // //           </button>
// // //           <div className="mt-1 h-1 w-full bg-gray-200 rounded-full overflow-hidden">
// // //             <div
// // //               className={`h-full ${passwordStrengthColor(passwordStrength)} transition-all duration-300`}
// // //               style={{ width: `${(passwordStrength / 5) * 100}%` }}
// // //             ></div>
// // //           </div>
// // //         </>
// // //       )}
// // //       {inputError && (
// // //         <motion.p
// // //           initial={{ opacity: 0, y: -10 }}
// // //           animate={{ opacity: 1, y: 0 }}
// // //           exit={{ opacity: 0, y: -10 }}
// // //           className="text-red-500 text-xs mt-1 flex items-center"
// // //         >
// // //           <AlertCircle size={12} className="mr-1" />
// // //           {inputError}
// // //         </motion.p>
// // //       )}
// // //     </motion.div>
// // //   )
// // // })

// // // export default InputField


// // // import React, { useState, useEffect } from "react"
// // // import { motion, AnimatePresence } from "framer-motion"
// // // import { Eye, EyeOff, AlertCircle, CheckCircle } from "lucide-react"


// // // const fadeIn = {
// // //   hidden: {
// // //     opacity: 0,
// // //   },
// // //   visible: {
// // //     opacity: 1,
// // //     transition: {
// // //       duration: 0.2,
// // //     },
// // //   },
// // // }

// // // const passwordStrengthColor = (strength) => {
// // //   if (strength < 2) return "bg-red-500"
// // //   if (strength < 3) return "bg-yellow-500"
// // //   if (strength < 4) return "bg-blue-500"
// // //   return "bg-green-500"
// // // }

// // // const InputField = React.memo(({ icon: Icon, type, error, validate, value, onChange, ...props }) => {
// // //   const [showPassword, setShowPassword] = useState(false)
// // //   const [inputError, setInputError] = useState(error)
// // //   const [passwordStrength, setPasswordStrength] = useState(0)
// // //   const [isFocused, setIsFocused] = useState(false)

// // //   useEffect(() => {
// // //     setInputError(error)
// // //   }, [error])

// // //   const handleBlur = (e) => {
// // //     setIsFocused(false)
// // //     if (validate) {
// // //       const validationError = validate(e.target.value)
// // //       setInputError(validationError)
// // //     }
// // //   }

// // //   const handleFocus = () => {
// // //     setIsFocused(true)
// // //   }

// // //   const handleChange = (e) => {
// // //     onChange(e)
// // //     if (validate) {
// // //       const validationError = validate(e.target.value)
// // //       setInputError(validationError)
// // //     }
// // //     if (type === "password") {
// // //       setPasswordStrength(calculatePasswordStrength(e.target.value))
// // //     }
// // //   }

// // //   const calculatePasswordStrength = (password) => {
// // //     let strength = 0
// // //     if (password.length >= 8) strength++
// // //     if (/[A-Z]/.test(password)) strength++
// // //     if (/[a-z]/.test(password)) strength++
// // //     if (/[0-9]/.test(password)) strength++
// // //     if (/[^A-Za-z0-9]/.test(password)) strength++
// // //     return strength
// // //   }

// // //   return (
// // //     <motion.div className="relative" variants={fadeIn} initial="hidden" animate="visible">
// // //       <div className="relative w-full">
// // //   {/* Input Field Container */}
// // //   <div
// // //     className={`relative flex items-center border rounded-full transition-all duration-300 ${
// // //       isFocused ? "border-teal-500 ring-2 ring-teal-300" : "border-gray-300"
// // //     } ${inputError ? "border-red-500 bg-red-50" : "bg-white"}`}
// // //   >
// // //     {/* Input Icon (Left) */}
// // //     <Icon
// // //       className={`absolute left-3 text-gray-400 transition-colors ${
// // //         isFocused ? "text-teal-500" : "text-gray-400"
// // //       }`}
// // //       size={20}
// // //     />

// // //     {/* Input Field */}
// // //     <input
// // //       {...props}
// // //       type={type === "password" && showPassword ? "text" : type}
// // //       className="w-full pl-10 pr-12 py-3 text-sm focus:outline-none bg-transparent rounded-full"
// // //       value={value}
// // //       onChange={handleChange}
// // //       onBlur={handleBlur}
// // //       onFocus={handleFocus}
// // //     />

// // //     {/* Show Password Button */}
// // //     {type === "password" && (
// // //       <button
// // //         type="button"
// // //         onClick={() => setShowPassword(!showPassword)}
// // //         className="absolute right-10 text-gray-400 hover:text-teal-500 transition-colors"
// // //       >
// // //         {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
// // //       </button>
// // //     )}
// // //   </div>

// // //   {/* ✅ Check Icon (Outside Input for a Clean Look) */}
// // //   {!inputError && value && (
// // //     <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
// // //       <CheckCircle size={22} className="text-green-600" />
// // //     </div>
// // //   )}

// // //   {/* 🔴 Error Message (If Any) */}
// // //   {/* {inputError && <p className="mt-1 text-sm text-red-500">{inputError}</p>} */}
// // // </div>

// // //       {type === "password" && (
// // //         <div className="mt-1 h-1 w-full bg-gray-200 rounded-full overflow-hidden">
// // //           <motion.div
// // //             className={`h-full ${passwordStrengthColor(passwordStrength)} transition-all duration-300`}
// // //             initial={{ width: 0 }}
// // //             animate={{ width: `${(passwordStrength / 5) * 100}%` }}
// // //           ></motion.div>
// // //         </div>
        
// // //       )}
    
// // //       <AnimatePresence>
// // //         {inputError && (
// // //           <motion.p
// // //             initial={{ opacity: 0, y: -10 }}
// // //             animate={{ opacity: 1, y: 0 }}
// // //             exit={{ opacity: 0, y: -10 }}
// // //             className="text-red-500 text-xs mt-1 flex items-center"
// // //           >
// // //             <AlertCircle size={12} className="mr-1" />
// // //             {inputError}
// // //           </motion.p>
// // //         )}
// // //       </AnimatePresence>
// // //     </motion.div>
// // //   )
// // // })

// // // export default InputField













// // // "use client"

// // // import { useState } from "react"
// // // import { Eye, EyeOff } from "lucide-react"

// // // export default function InputField({ icon: Icon, type, placeholder, value, onChange, error, validate }) {
// // //   const [focused, setFocused] = useState(false)
// // //   const [localError, setLocalError] = useState("")
// // //   const [showPassword, setShowPassword] = useState(false)

// // //   const handleBlur = (e) => {
// // //     setFocused(false)
// // //     if (validate) {
// // //       const validationError = validate(e.target.value)
// // //       setLocalError(validationError || "")
// // //     }
// // //   }

// // //   const actualType = type === "password" && showPassword ? "text" : type

// // //   return (
// // //     <div className="space-y-1">
// // //       <div
// // //         className={`flex items-center border ${
// // //           error || localError
// // //             ? "border-red-500 bg-red-50"
// // //             : focused
// // //               ? "border-teal-500 bg-teal-50"
// // //               : "border-gray-300 bg-white"
// // //         } rounded-lg overflow-hidden transition-all duration-200`}
// // //       >
// // //         <div className="pl-3 pr-2">
// // //           <Icon
// // //             size={18}
// // //             className={error || localError ? "text-red-500" : focused ? "text-teal-500" : "text-gray-400"}
// // //           />
// // //         </div>
// // //         <input
// // //           type={actualType}
// // //           placeholder={placeholder}
// // //           value={value}
// // //           onChange={onChange}
// // //           onFocus={() => setFocused(true)}
// // //           onBlur={handleBlur}
// // //           className="flex-1 py-2.5 px-2 outline-none bg-transparent"
// // //         />
// // //         {type === "password" && (
// // //           <button
// // //             type="button"
// // //             onClick={() => setShowPassword(!showPassword)}
// // //             className="pr-3 text-gray-400 hover:text-gray-600 transition-colors"
// // //           >
// // //             {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
// // //           </button>
// // //         )}
// // //       </div>
// // //       {(error || localError) && <p className="text-red-500 text-xs pl-2">{error || localError}</p>}
// // //     </div>
// // //   )
// // // }

// // // "use client"

// // // import { useState } from "react"
// // // import { Eye, EyeOff } from "lucide-react"

// // // export default function InputField({
// // //   icon: Icon,
// // //   type,
// // //   placeholder,
// // //   value,
// // //   onChange,
// // //   error,
// // //   validate,
// // // }) {
// // //   const [focused, setFocused] = useState(false)
// // //   const [localError, setLocalError] = useState("")
// // //   const [showPassword, setShowPassword] = useState(true)

// // //   const handleBlur = (e) => {
// // //     setFocused(false)
// // //     if (validate) {
// // //       const validationError = validate(e.target.value)
// // //       setLocalError(validationError || "")
// // //     }
// // //   }

// // //   const actualType = type === "password" && showPassword ? "text" : type

// // //   return (
// // //     <div className="space-y-1">
// // //       <div
// // //         className={`flex items-center border ${
// // //           error || localError
// // //             ? "border-red-500 bg-red-50"
// // //             : focused
// // //             ? "border-teal-500 bg-teal-50"
// // //             : "border-gray-300 bg-white"
// // //         } rounded-lg overflow-hidden transition-all duration-200`}
// // //       >
// // //         {/* Left Icon */}
// // //         <div className="pl-3 pr-2">
// // //           <Icon
// // //             size={18}
// // //             className={
// // //               error || localError
// // //                 ? "text-red-500"
// // //                 : focused
// // //                 ? "text-teal-500"
// // //                 : "text-gray-400"
// // //             }
// // //           />
// // //         </div>

// // //         {/* Input */}
// // //         <input
// // //           type={actualType}
// // //           placeholder={placeholder}
// // //           value={value}
// // //           onChange={onChange}
// // //           onFocus={() => setFocused(true)}
// // //           onBlur={handleBlur}
// // //           className="flex-1 py-2.5 px-2 outline-none bg-transparent"
// // //         />

// // //         {/* Password Toggle */}
// // //         {type === "password" && (
// // //           <button
// // //             type="button"
// // //             onClick={() => setShowPassword(!showPassword)}
// // //             aria-label={showPassword ? "Hide password" : "Show password"}
// // //             className="pr-3 text-gray-400 hover:text-gray-600 transition-colors"
// // //           >
// // //             {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
// // //           </button>
// // //         )}
// // //       </div>

// // //       {/* Error Message */}
// // //       {(error || localError) && (
// // //         <p className="text-red-500 text-xs pl-2">{error || localError}</p>
// // //       )}
// // //     </div>
// // //   )
// // // }

// // // Input Field Component — ✅ FIXED VERSION

// // // "use client"

// // // import { useState } from "react"
// // // import { Eye, EyeOff } from "lucide-react"

// // // export default function InputField({
// // //   icon: Icon,
// // //   type,
// // //   placeholder,
// // //   value,
// // //   onChange,
// // //   error,
// // //   validate,
// // // }) {
// // //   const [focused, setFocused] = useState(false)
// // //   const [localError, setLocalError] = useState("")
// // //   const [isPasswordVisible, setIsPasswordVisible] = useState(false) // 🔒 Hidden by default

// // //   const handleBlur = (e) => {
// // //     setFocused(false)
// // //     if (validate) {
// // //       const validationError = validate(e.target.value)
// // //       setLocalError(validationError || "")
// // //     }
// // //   }

// // //   const actualType = type === "password" && isPasswordVisible ? "text" : type

// // //   return (
// // //     <div className="space-y-1">
// // //       <div
// // //         className={`flex items-center border ${
// // //           error || localError
// // //             ? "border-red-500 bg-red-50"
// // //             : focused
// // //             ? "border-teal-500 bg-teal-50"
// // //             : "border-gray-300 bg-white"
// // //         } rounded-lg overflow-hidden transition-all duration-200`}
// // //       >
// // //         <div className="pl-3 pr-2">
// // //           <Icon
// // //             size={18}
// // //             className={
// // //               error || localError
// // //                 ? "text-red-500"
// // //                 : focused
// // //                 ? "text-teal-500"
// // //                 : "text-gray-400"
// // //             }
// // //           />
// // //         </div>

// // //         <input
// // //           type={actualType}
// // //           placeholder={placeholder}
// // //           value={value}
// // //           onChange={onChange}
// // //           onFocus={() => setFocused(true)}
// // //           onBlur={handleBlur}
// // //           className="flex-1 py-2.5 px-2 outline-none bg-transparent"
// // //         />

// // //         {type === "password" && (
// // //           <button
// // //             type="button"
// // //             onClick={() => setIsPasswordVisible(!isPasswordVisible)}
// // //             aria-label={isPasswordVisible ? "Hide password" : "Show password"}
// // //             className="pr-3 text-gray-400 hover:text-gray-600 transition-colors"
// // //           >
// // //             {/* 👇 ICON = CURRENT STATE */}
// // //             {isPasswordVisible ? <Eye size={18} /> : <EyeOff size={18} />}
// // //           </button>
// // //         )}
// // //       </div>

// // //       {(error || localError) && (
// // //         <p className="text-red-500 text-xs pl-2">{error || localError}</p>
// // //       )}
// // //     </div>
// // //   )
// // // }


// // // import React, { useState, useEffect } from "react"
// // // import { motion, AnimatePresence } from "framer-motion"
// // // import { Eye, EyeOff, AlertCircle, CheckCircle } from "lucide-react"

// // // const fadeIn = {
// // //   hidden: {
// // //     opacity: 0,
// // //   },
// // //   visible: {
// // //     opacity: 1,
// // //     transition: {
// // //       duration: 0.2,
// // //     },
// // //   },
// // // }

// // // const InputField = React.memo(({ icon: Icon, type, error, validate, value, onChange, ...props }) => {
// // //   const [showPassword, setShowPassword] = useState(false)
// // //   const [inputError, setInputError] = useState(error)
// // //   const [isFocused, setIsFocused] = useState(false)

// // //   useEffect(() => {
// // //     setInputError(error)
// // //   }, [error])

// // //   const handleBlur = (e) => {
// // //     setIsFocused(false)
// // //     if (validate) {
// // //       const validationError = validate(e.target.value)
// // //       setInputError(validationError)
// // //     }
// // //   }

// // //   const handleFocus = () => {
// // //     setIsFocused(true)
// // //   }

// // //   const handleChange = (e) => {
// // //     onChange(e)
// // //     if (validate) {
// // //       const validationError = validate(e.target.value)
// // //       setInputError(validationError)
// // //     }
// // //   }

// // //   return (
// // //     <motion.div className="relative" variants={fadeIn} initial="hidden" animate="visible">
// // //       <div className={`relative rounded-lg transition-all duration-300 ${isFocused ? "ring-2 ring-teal-500" : ""}`}>
// // //         <Icon
// // //           className={`absolute left-3 top-1/2 transform -translate-y-1/2 transition-colors ${isFocused ? "text-teal-500" : "text-gray-400"}`}
// // //           size={20}
// // //         />
// // //         <input
// // //           {...props}
// // //           type={type === "password" && showPassword ? "text" : type}
// // //           className={`w-full pl-10 pr-10 py-4 text-sm border rounded-lg focus:outline-none transition-all ${
// // //             inputError ? "border-red-500 bg-red-50" : isFocused ? "border-teal-500" : "border-gray-200"
// // //           }`}
// // //           value={value}
// // //           onChange={handleChange}
// // //           onBlur={handleBlur}
// // //           onFocus={handleFocus}
// // //         />
// // //         {type === "password" && (
// // //           <button
// // //             type="button"
// // //             onClick={() => setShowPassword(!showPassword)}
// // //             className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-teal-500 transition-colors"
// // //           >
// // //             {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
// // //           </button>
// // //         )}
// // //         {!inputError && value && type !== "password" && (
// // //           <CheckCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500" size={20} />
// // //         )}
// // //       </div>
// // //       <AnimatePresence>
// // //         {inputError && (
// // //           <motion.p
// // //             initial={{ opacity: 0, y: -10 }}
// // //             animate={{ opacity: 1, y: 0 }}
// // //             exit={{ opacity: 0, y: -10 }}
// // //             className="text-red-500 text-xs mt-1 flex items-center"
// // //           >
// // //             <AlertCircle size={12} className="mr-1" />
// // //             {inputError}
// // //           </motion.p>
// // //         )}
// // //       </AnimatePresence>
// // //     </motion.div>
// // //   )
// // // })

// // // export default InputField

// // const InputField = ({
// //   icon: Icon,
// //   type,
// //   placeholder,
// //   value,
// //   onChange,
// //   error, // ← Now used directly — no delay
// //   validate,
// //   autoComplete = "on",
// //   showPasswordStrength = false,
// // }) => {
// //   const [focused, setFocused] = useState(false)
// //   const [showPassword, setShowPassword] = useState(false) // 🔒 Starts hidden
// //   const [strength, setStrength] = useState(0)
// //   const inputType = type === "password" && showPassword ? "text" : type

// //   useEffect(() => {
// //     if (type === "password" && showPasswordStrength) {
// //       setStrength(calculatePasswordStrength(value))
// //     }
// //   }, [value, type, showPasswordStrength])

// //   const togglePasswordVisibility = (e) => {
// //     e.preventDefault()
// //     setShowPassword(!showPassword)
// //   }

// //   return (
// //     <div className="space-y-1 w-full">
// //       <div
// //         className={`relative flex items-center border ${
// //           focused ? "border-teal-500 ring-2 ring-teal-200" : error ? "border-red-500" : "border-gray-300"
// //         } rounded-lg overflow-hidden transition-all`}
// //       >
// //         <div className="flex items-center justify-center w-10 sm:w-12 h-10 sm:h-12 bg-gray-50 text-gray-500">
// //           <Icon size={18} />
// //         </div>
// //         <input
// //           type={inputType}
// //           placeholder={placeholder}
// //           value={value}
// //           onChange={onChange}
// //           onFocus={() => setFocused(true)}
// //           onBlur={() => setFocused(false)}
// //           className="flex-1 h-10 sm:h-12 px-3 outline-none text-gray-700 w-full"
// //           autoComplete={autoComplete}
// //         />
// //         {type === "password" && (
// //           <button
// //             className="px-3 text-gray-500 hover:text-gray-700 focus:outline-none"
// //             onClick={togglePasswordVisibility}
// //             type="button"
// //             aria-label={showPassword ? "Hide password" : "Show password"}
// //           >
// //             {/* ✅ FIXED: Eye = visible, EyeOff = hidden */}
// //             {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
// //           </button>
// //         )}
// //       </div>

// //       {showPasswordStrength && type === "password" && value && (
// //         <PasswordStrengthMeter strength={strength} />
// //       )}

// //       {/* ✅ FIXED: Show error immediately from prop — no local state delay */}
// //       {error && (
// //         <div className="text-red-500 text-sm flex items-start gap-1 mt-1">
// //           <AlertCircle size={14} className="mt-0.5 flex-shrink-0" />
// //           <span>{error}</span>
// //         </div>
// //       )}
// //     </div>
// //   )
// // }
// import { useState, useEffect } from "react";
// import { Eye, EyeOff, AlertCircle } from "lucide-react";
// import PasswordStrengthMeter from "./PasswordStrengthMeter"; // assuming you already have this

// const InputField = ({
//   icon: Icon,
//   type,
//   placeholder,
//   value,
//   onChange,
//   error,
//   validate,
//   autoComplete = "on",
//   showPasswordStrength = false,
// }) => {
//   const [focused, setFocused] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const [strength, setStrength] = useState(0);
//   const [localError, setLocalError] = useState(""); // 👈 local error for dot check

//   const inputType = type === "password" && showPassword ? "text" : type;

//   useEffect(() => {
//     if (type === "password" && showPasswordStrength) {
//       setStrength(calculatePasswordStrength(value));
//     }
//   }, [value, type, showPasswordStrength]);

//   const togglePasswordVisibility = (e) => {
//     e.preventDefault();
//     setShowPassword(!showPassword);
//   };

//   const handlePasswordChange = (e) => {
//     const inputValue = e.target.value;

//     // 🔥 Validation: Don't allow dot (.)
//     if (inputValue.includes(".")) {
//       setLocalError("Password should not contain '.' (dot)");
//     } else {
//       setLocalError("");
//     }

//     onChange(e); // pass value to parent
//   };

//   return (
//     <div className="space-y-1 w-full">
//       <div
//         className={`relative flex items-center border ${
//           focused
//             ? "border-teal-500 ring-2 ring-teal-200"
//             : error || localError
//             ? "border-red-500"
//             : "border-gray-300"
//         } rounded-lg overflow-hidden transition-all`}
//       >
//         <div className="flex items-center justify-center w-10 sm:w-12 h-10 sm:h-12 bg-gray-50 text-gray-500">
//           <Icon size={18} />
//         </div>

//         <input
//           type={inputType}
//           placeholder={placeholder}
//           value={value}
//           onChange={type === "password" ? handlePasswordChange : onChange}
//           onFocus={() => setFocused(true)}
//           onBlur={() => setFocused(false)}
//           className="flex-1 h-10 sm:h-12 px-3 outline-none text-gray-700 w-full"
//           autoComplete={autoComplete}
//         />

//         {type === "password" && (
//           <button
//             className="px-3 text-gray-500 hover:text-gray-700 focus:outline-none"
//             onClick={togglePasswordVisibility}
//             type="button"
//             aria-label={showPassword ? "Hide password" : "Show password"}
//           >
//             {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
//           </button>
//         )}
//       </div>

//       {showPasswordStrength && type === "password" && value && (
//         <PasswordStrengthMeter strength={strength} />
//       )}

//       {(error || localError) && (
//         <div className="text-red-500 text-sm flex items-start gap-1 mt-1">
//           <AlertCircle size={14} className="mt-0.5 flex-shrink-0" />
//           <span>{localError || error}</span>
//         </div>
//       )}
//     </div>
//   );
// };

// export default InputField;

import { useState, useEffect } from "react";
import { Eye, EyeOff, AlertCircle } from "lucide-react";
import PasswordStrengthMeter from "./PasswordStrengthMeter"; // your existing component

const InputField = ({
  icon: Icon,
  type,
  placeholder,
  value,
  onChange,
  error,
  validate,
  autoComplete = "on",
  showPasswordStrength = false,
}) => {
  const [focused, setFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [strength, setStrength] = useState(0);
  const [localError, setLocalError] = useState(""); // ✅ local live validation

  const inputType = type === "password" && showPassword ? "text" : type;

  useEffect(() => {
    if (type === "password" && showPasswordStrength) {
      setStrength(calculatePasswordStrength(value));
    }
  }, [value, type, showPasswordStrength]);

  const togglePasswordVisibility = (e) => {
    e.preventDefault();
    setShowPassword((prev) => !prev);
  };

  // ✅ Password Change Handler with Live Validation
  const handlePasswordChange = (e) => {
    const inputValue = e.target.value;

    // Validate dot presence
    if (inputValue.includes(".")) {
      setLocalError("Password should not contain '.' (dot)");
    } else {
      setLocalError("");
    }

    // Update parent form data
    onChange({
      target: {
        name: e.target.name,
        value: inputValue,
      },
    });
  };

  return (
    <div className="space-y-1 w-full">
      <div
        className={`relative flex items-center border ${
          focused
            ? "border-teal-500 ring-2 ring-teal-200"
            : error || localError
            ? "border-red-500"
            : "border-gray-300"
        } rounded-lg overflow-hidden transition-all`}
      >
        <div className="flex items-center justify-center w-10 sm:w-12 h-10 sm:h-12 bg-gray-50 text-gray-500">
          <Icon size={18} />
        </div>

        <input
          type={inputType}
          name={placeholder.toLowerCase().replace(/\s/g, "")}
          placeholder={placeholder}
          value={value}
          onChange={type === "password" ? handlePasswordChange : onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="flex-1 h-10 sm:h-12 px-3 outline-none text-gray-700 w-full"
          autoComplete={autoComplete}
        />

        {type === "password" && (
          <button
            className="px-3 text-gray-500 hover:text-gray-700 focus:outline-none"
            onClick={togglePasswordVisibility}
            type="button"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
          </button>
        )}
      </div>

      {showPasswordStrength && type === "password" && value && (
        <PasswordStrengthMeter strength={strength} />
      )}

      {(error || localError) && (
        <div className="text-red-500 text-sm flex items-start gap-1 mt-1">
          <AlertCircle size={14} className="mt-0.5 flex-shrink-0" />
          <span>{localError || error}</span>
        </div>
      )}
    </div>
  );
};

export default InputField;
