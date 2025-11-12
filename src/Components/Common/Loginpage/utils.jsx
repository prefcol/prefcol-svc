// export const API_ENDPOINTS = {
//   REGISTER: "https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1/register",
//   LOGIN: "https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1/login",
//   VERIFY_OTP: "https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1/verify-otp",
//   RESEND_OTP: "https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1/resend",
//   FORGOT_PASSWORD: "https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1/forgetPassword",
// }

// export const validateForm = (formType, formData) => {
//   const errors = {}

//   if (formType === "signup") {
//     if (!formData.firstName.trim()) errors.firstName = "First name is required"
//     if (!formData.lastName.trim()) errors.lastName = "Last name is required"
//     if (formData.password !== formData.confirmPassword) {
//       errors.confirmPassword = "Passwords do not match"
//     }
//   }

//   if (!formData.mailId.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
//     errors.mailId = "Invalid email address"
//   }

//   if (formData.password.length < 6) {
//     errors.password = "Password must be at least 6 characters"
//   }

//   return errors
// }

// export const showStatus = (setStatusAnimation, type, message, duration = 2000) => {
//   setStatusAnimation({ type, message })
//   setTimeout(() => {
//     setStatusAnimation(null)
//   }, duration)
// }

// const BASE_URL = "https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1";

// export const API_ENDPOINTS = {
//   REGISTER: `${BASE_URL}/register`,
//   LOGIN: `${BASE_URL}/login`,
//   VERIFY_OTP: `${BASE_URL}/verify-otp`,
//   RESEND_OTP: `${BASE_URL}/resend`,
//   FORGOT_PASSWORD: `${BASE_URL}/forgetPassword`,
// };


// export const showStatus = (setStatusAnimation, type, message, duration = 2000) => {
//   setStatusAnimation({ type, message });
//   setTimeout(() => {
//     setStatusAnimation(null);
//   }, duration);
// };




// const BASE_URL = "https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1"

// export const API_ENDPOINTS = {
//   REGISTER: `${BASE_URL}/register`,
//   LOGIN: `${BASE_URL}/login`,
//   VERIFY_OTP: `${BASE_URL}/verify-otp`,
//   RESEND_OTP: `${BASE_URL}/resend`,
//   FORGOT_PASSWORD: `${BASE_URL}/forgetPassword`,
//   // VERIFY_EMAIL: `${BASE_URL}/verify-email`,
//   // VERIFY_USERID: `${BASE_URL}/verify-userid`,
//   // LOGOUT: `${BASE_URL}/logout`,
// }

// export const showStatus = (setStatusAnimation, type, message, duration = 2000) => {
//   setStatusAnimation({ type, message })
//   setTimeout(() => {
//     setStatusAnimation(null)
//   }, duration)
// }

// export const validateEmail = (email) => {
//   if (!email) return "Email is required"
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
//   if (!emailRegex.test(email)) return "Invalid email format"
//   return undefined
// }

// export const validatePassword = (password) => {
//   if (!password) return "Password is required"
//   if (password.length < 8) return "Password must be at least 8 characters long"
//   if (!/[A-Z]/.test(password)) return "Password must include at least one uppercase letter"
//   if (!/[a-z]/.test(password)) return "Password must include at least one lowercase letter"
//   if (!/[0-9]/.test(password)) return "Password must include at least one number"
//   if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(password))
//     return "Password must include at least one special character"
//   return undefined
// }

// export const validateName = (name) => {
//   if (!name) return "Name is required"
//   if (name.length < 2) return "Name must be at least 2 characters long"
//   if (!/^[a-zA-Z\s-]+$/.test(name)) return "Name can only contain letters, spaces, and hyphens"
//   return undefined
// }

// const BASE_URL = "https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1"

// export const API_ENDPOINTS = {
//   REGISTER: `${BASE_URL}/register`,
//   LOGIN: `${BASE_URL}/login`,
//   VERIFY_OTP: `${BASE_URL}/verify-otp`,
//   RESEND_OTP: `${BASE_URL}/resend`,
//   FORGOT_PASSWORD: `${BASE_URL}/forgetPassword`,
//   VERIFY_RESET_PASSWORD_OTP: `${BASE_URL}/verify-reset-otp`,
// }

// // Rate limiting implementation
// const rateLimitStore = new Map()

// export const checkRateLimit = (key, limit = 5, timeWindow = 60000) => {
//   const now = Date.now()
//   const windowStart = now - timeWindow

//   // Get or initialize attempts array
//   const attempts = rateLimitStore.get(key) || []

//   // Filter out attempts outside the current time window
//   const recentAttempts = attempts.filter((timestamp) => timestamp > windowStart)

//   // Check if rate limit is exceeded
//   if (recentAttempts.length >= limit) {
//     return {
//       limited: true,
//       remainingTime: Math.ceil((recentAttempts[0] - windowStart) / 1000),
//     }
//   }

//   // Add current attempt
//   recentAttempts.push(now)
//   rateLimitStore.set(key, recentAttempts)

//   return {
//     limited: false,
//     remainingAttempts: limit - recentAttempts.length,
//   }
// }

// export const showStatus = (setStatusAnimation, type, message, duration = 2000) => {
//   setStatusAnimation({ type, message })
//   setTimeout(() => {
//     setStatusAnimation(null)
//   }, duration)
// }

// // Security utility functions
// export const generateSecureToken = (length = 32) => {
//   const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
//   let result = ""
//   const charactersLength = characters.length

//   // Use crypto API if available for better randomness
//   if (typeof window !== "undefined" && window.crypto && window.crypto.getRandomValues) {
//     const values = new Uint32Array(length)
//     window.crypto.getRandomValues(values)
//     for (let i = 0; i < length; i++) {
//       result += characters.charAt(values[i] % charactersLength)
//     }
//     return result
//   }

//   // Fallback to Math.random
//   for (let i = 0; i < length; i++) {
//     result += characters.charAt(Math.floor(Math.random() * charactersLength))
//   }
//   return result
// }

// // Function to sanitize user input to prevent XSS
// export const sanitizeInput = (input) => {
//   if (typeof input !== "string") return input
//   return input
//     .replace(/&/g, "&amp;")
//     .replace(/</g, "&lt;")
//     .replace(/>/g, "&gt;")
//     .replace(/"/g, "&quot;")
//     .replace(/'/g, "&#039;")
// }




// const BASE_URL = "https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1"

// export const API_ENDPOINTS = {
//   REGISTER: `${BASE_URL}/register`,
//   LOGIN: `${BASE_URL}/login`,
//   VERIFY_OTP: `${BASE_URL}/verify-otp`,
//   RESEND_OTP: `${BASE_URL}/resend-otp`,
//   FORGOT_PASSWORD: `${BASE_URL}/forgetPassword`,
//   VERIFY_RESET_PASSWORD_OTP: `${BASE_URL}/verify-reset-otp`,
// }

// // Enhanced email validation with more comprehensive checks
// export const validateEmail = (email) => {
//   if (!email) return "Email is required"

//   // Check for length
//   if (email.length < 5) return "Email is too short, must be at least 5 characters long"
//   if (email.length > 320) return "Email is too long, must be less than 320 characters"

//   // Improved email format regex
//   const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
//   if (!emailRegex.test(email)) return "Invalid email format"

//   // Check for forbidden characters
//   const forbiddenCharsRegex = /[(),:;<>[\]"]+/
//   if (forbiddenCharsRegex.test(email)) return "Email contains invalid characters"

//   // Check if email has valid domain structure
//   const domainParts = email.split("@")[1]?.split(".")
//   if (!domainParts || domainParts.length < 2) return "Email domain is invalid"

//   // Check for disposable email addresses
//   const disposableDomains = [
//     "mailinator.com",
//     "guerrillamail.com",
//     "10minutemail.com",
//     "tempmail.com",
//     "throwawaymail.com",
//   ]
//   if (disposableDomains.includes(email.split("@")[1])) return "Disposable email addresses are not allowed"

//   return undefined
// }

// export const validatePassword = (password) => {
//    if (!password) return "Password is required"
//    if (password.length < 8) return "Password must be at least 8 characters long"
//    if (!/[A-Z]/.test(password)) return "Password must include at least one uppercase letter"
//    if (!/[a-z]/.test(password)) return "Password must include at least one lowercase letter"
//    if (!/[0-9]/.test(password)) return "Password must include at least one number"
//    if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(password))
//      return "Password must include at least one special character"
//    return undefined
 
//   // Trim any leading or trailing whitespace
//   const trimmedPassword = password.trim()

//   // Length check
//   if (trimmedPassword.length < 6) return "Password must be at least 6 characters long"

//   // Character type checks
//   if (!/[A-Z]/.test(trimmedPassword)) {
//     return "Password must include at least one uppercase letter"
//   }
//   if (!/[a-z]/.test(trimmedPassword)) {
//     return "Password must include at least one lowercase letter"
//   }
//   if (!/[0-9]/.test(trimmedPassword)) {
//     return "Password must include at least one number"
//   }
//   if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(trimmedPassword)) {
//     return "Password must include at least one special character"
//   }

//   // Check if password contains username or email
//   if (username && trimmedPassword.toLowerCase().includes(username.toLowerCase())) {
//     return "Password should not contain your username"
//   }

//   if (email) {
//     const emailUsername = email.split("@")[0]
//     if (emailUsername && trimmedPassword.toLowerCase().includes(emailUsername.toLowerCase())) {
//       return "Password should not contain your email username"
//     }
//   }

//   // Check for common passwords
//   const commonPasswords = ["password", "123456", "qwerty", "admin", "welcome"]
//   if (commonPasswords.includes(trimmedPassword.toLowerCase())) {
//     return "Password is too common and easily guessable"
//   }

//   return undefined
// }

// // Enhanced name validation
// export const validateName = (name) => {
//   if (!name) return "Name is required"

//   // Trim spaces to check for leading/trailing spaces
//   const trimmedName = name.trim()

//   // Check if name contains forbidden characters (only letters, spaces, and hyphens allowed)
//   const forbiddenCharsRegex = /[^a-zA-Z\s-]/
//   if (forbiddenCharsRegex.test(trimmedName))
//     return "Name contains invalid characters. Only letters, spaces, and hyphens are allowed."

//   // Check if name is too short or too long
//   if (trimmedName.length < 2) return "Name must be at least 2 characters long"
//   if (trimmedName.length > 100) return "Name must be less than 100 characters long"

//   return undefined
// }

// // Calculate password strength score (0-4)
// // export const calculatePasswordStrength = (password) => {
// //   if (!password) return 0

// //   let score = 0

// //   // Length check
// //   if (password.length >= 8) score += 1
// //   if (password.length >= 12) score += 1

// //   // Character type checks
// //   if (/[A-Z]/.test(password)) score += 1
// //   if (/[a-z]/.test(password)) score += 1
// //   if (/[0-9]/.test(password)) score += 1
// //   if (/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password)) score += 1

// //   // Normalize score to 0-4 range
// //   return Math.min(4, Math.floor(score / 1.5))
// // }
// export const calculatePasswordStrength = (password) => {
//   if (!password) return 0

//   let score = 0

//   // Length check
//   if (password.length >= 8) score += 20
//   if (password.length >= 12) score += 20

//   // Character type checks
//   if (/[A-Z]/.test(password)) score += 15
//   if (/[a-z]/.test(password)) score += 15
//   if (/[0-9]/.test(password)) score += 15
//   if (/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password)) score += 15

//   // Ensure the score doesn't exceed 100
//   return Math.min(score, 100)
// }

// // Rate limiting implementation
// const rateLimitStore = new Map()

// export const checkRateLimit = (key, limit = 5, timeWindow = 60000) => {
//   const now = Date.now()
//   const windowStart = now - timeWindow

//   // Get or initialize attempts array
//   const attempts = rateLimitStore.get(key) || []

//   // Filter out attempts outside the current time window
//   const recentAttempts = attempts.filter((timestamp) => timestamp > windowStart)

//   // Check if rate limit is exceeded
//   if (recentAttempts.length >= limit) {
//     return {
//       limited: true,
//       remainingTime: Math.ceil((recentAttempts[0] - windowStart) / 1000),
//     }
//   }

//   // Add current attempt
//   recentAttempts.push(now)
//   rateLimitStore.set(key, recentAttempts)

//   return {
//     limited: false,
//     remainingAttempts: limit - recentAttempts.length,
//   }
// }

// export const showStatus = (setStatusAnimation, type, message, duration = 2000) => {
//   setStatusAnimation({ type, message })
//   setTimeout(() => {
//     setStatusAnimation(null)
//   }, duration)
// }

// // Security utility functions
// export const generateSecureToken = (length = 32) => {
//   const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
//   let result = ""
//   const charactersLength = characters.length

//   // Use crypto API if available for better randomness
//   if (typeof window !== "undefined" && window.crypto && window.crypto.getRandomValues) {
//     const values = new Uint32Array(length)
//     window.crypto.getRandomValues(values)
//     for (let i = 0; i < length; i++) {
//       result += characters.charAt(values[i] % charactersLength)
//     }
//     return result
//   }

//   // Fallback to Math.random
//   for (let i = 0; i < length; i++) {
//     result += characters.charAt(Math.floor(Math.random() * charactersLength))
//   }
//   return result
// }

// // Function to sanitize user input to prevent XSS
// export const sanitizeInput = (input) => {
//   if (typeof input !== "string") return input
//   return input
//     .replace(/&/g, "&amp;")
//     .replace(/</g, "&lt;")
//     .replace(/>/g, "&gt;")
//     .replace(/"/g, "&quot;")
//     .replace(/'/g, "&#039;")
// }

const BASE_URL = "https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1";

export const API_ENDPOINTS = {
  REGISTER: `${BASE_URL}/register`,
  LOGIN: `${BASE_URL}/login`,
  VERIFY_EMAIL: `${BASE_URL}/verifyEmail`,
  VERIFY_OTP: `${BASE_URL}/verify-otp`,
  RESEND_OTP: `${BASE_URL}/resend-otp`,
  FORGOT_PASSWORD: `${BASE_URL}/forgetPassword`,
 
};


export const validateEmail = (email) => {
  if (!email) return "Email is required";


  if (email.length < 5 || email.length > 320) 
    return "Email length must be between 5 and 320 characters";


  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) return "Invalid email format";


  const disposableDomains = [
    "mailinator.com",
    "guerrillamail.com",
    "10minutemail.com",
    "tempmail.com",
    "throwawaymail.com",
  ];
  if (disposableDomains.includes(email.split("@")[1])) 
    return "Disposable email addresses are not allowed";

  return undefined;
};


export const validatePassword = (password) => {
  if (!password) return "Password is required";
  if (password.length < 8) return "Password must be at least 8 characters long";

  const rules = [
    /[A-Z]/, 
    /[a-z]/, 
    /[0-9]/, 
    /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/ 
  ];

  for (const rule of rules) {
    if (!rule.test(password)) 
      return "Password must include uppercase, lowercase, number, and special character";
  }

  return undefined;
};


export const validateName = (name) => {
  if (!name) return "Name is required";

  const trimmedName = name.trim();
  if (trimmedName.length < 2 || trimmedName.length > 100) 
    return "Name must be between 2 and 100 characters long";

  if (/[^a-zA-Z\s-]/.test(trimmedName)) 
    return "Name contains invalid characters. Only letters, spaces, and hyphens are allowed.";

  return undefined;
};


export const calculatePasswordStrength = (password) => {
  if (!password) return 0;

  let score = 0;
  if (password.length >= 8) score += 20;
  if (password.length >= 12) score += 20;
  if (/[A-Z]/.test(password)) score += 15;
  if (/[a-z]/.test(password)) score += 15;
  if (/[0-9]/.test(password)) score += 15;
  if (/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(password)) score += 15;

  return Math.min(score, 100);
};


const rateLimitStore = new Map();
export const checkRateLimit = (key, limit = 5, timeWindow = 60000) => {
  const now = Date.now();
  const windowStart = now - timeWindow;

  const recentAttempts = (rateLimitStore.get(key) || []).filter((timestamp) => timestamp > windowStart);

  if (recentAttempts.length >= limit) {
    return {
      limited: true,
      remainingTime: Math.ceil((recentAttempts[0] - windowStart) / 1000),
    };
  }

  recentAttempts.push(now);
  rateLimitStore.set(key, recentAttempts);

  return {
    limited: false,
    remainingAttempts: limit - recentAttempts.length,
  };
};


export const showStatus = (setStatusAnimation, type, message, duration = 2000) => {
  setStatusAnimation({ type, message });
  setTimeout(() => setStatusAnimation(null), duration);
};


export const generateSecureToken = (length = 32) => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const values = new Uint32Array(length);

  if (typeof window !== "undefined" && window.crypto && window.crypto.getRandomValues) {
    window.crypto.getRandomValues(values);
    return Array.from(values).map(value => characters[value % characters.length]).join('');
  }

  return Array.from({ length }, () => characters.charAt(Math.floor(Math.random() * characters.length))).join('');
};


export const sanitizeInput = (input) => {
  if (typeof input !== "string") return input;
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
};
