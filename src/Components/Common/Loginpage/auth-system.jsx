"use client"
import { useState, useCallback, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { RefreshCcw, Mail, Lock, User, ArrowRight, LogOut, LogIn, X, Eye, EyeOff, AlertCircle } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import "./toast-styles.css"
import { API_ENDPOINTS, validateEmail, validatePassword, validateName, calculatePasswordStrength } from "./utils"
import OtpVerificationModal from "./otp-verification-modal"
import SocialButtons from "./SocialButtons"
import ReCAPTCHA from "react-google-recaptcha"
import { useAuth } from "../../../Contexts/AuthContext"
import { useErrorHandler } from "./error-handler"
import loginImage from "../../../assets/login.jpeg"
// ✅ Robust scroll lock for modals
const lockBodyScroll = (lock = true) => {
  if (typeof window === "undefined") return

  if (lock) {
    const scrollY = window.scrollY
    document.body.classList.add("lock-scroll")
    document.body.style.top = `-${scrollY}px`
  } else {
    const scrollY = parseInt(document.body.style.top || "0") * -1
    document.body.classList.remove("lock-scroll")
    document.body.style.top = ""
    window.scrollTo(0, scrollY)
  }
}


//// ✅ FINAL getBackendErrorMessage - Shows EXACT backend response
const getBackendErrorMessage = (data, status = 500) => {
  // If it's a string (raw text/HTML), show first 200 chars
  if (typeof data === 'string') {
    const cleaned = data
      .replace(/<[^>]*>/g, '') // Remove HTML tags
      .trim()
      .substring(0, 200);
    return cleaned || "Server error";
  }

  // Handle standard JSON errors
  if (data?.message) return data.message;
  if (data?.error) {
    if (typeof data.error === 'string') return data.error;
    if (data.error?.message) return data.error.message;
  }
  if (data?.detail) return data.detail;

  // Handle field errors (Django/DRF style)
  const fieldErrors = Object.values(data)
    .flat()
    .filter(val => typeof val === 'string');
  if (fieldErrors.length > 0) {
    return fieldErrors[0];
  }

  // HTTP status fallbacks
  if (status === 401) return "Invalid credentials";
  if (status === 400) return "Bad request";
  if (status === 404) return "Not found";
  if (status === 500) return "Server error";

  return "Something went wrong. Please try again.";
};

// Password Strength Meter Component
export const PasswordStrengthMeter = ({ strength = 0 }) => {
  const getStrengthLabel = () => {
    if (strength < 30) return { text: "Weak", color: "text-red-600" }
    if (strength < 60) return { text: "Fair", color: "text-orange-600" }
    if (strength < 80) return { text: "Good", color: "text-yellow-600" }
    return { text: "Strong", color: "text-green-600" }
  }
  const { text, color } = getStrengthLabel()
  return (
    <div className="mt-1 space-y-1">
      <div className="flex justify-between items-center text-xs">
        <span>Password Strength:</span>
        <span className={`font-medium ${color}`}>{text}</span>
      </div>
      <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-300 ${
            strength < 30
              ? "bg-red-500"
              : strength < 60
                ? "bg-orange-500"
                : strength < 80
                  ? "bg-yellow-500"
                  : "bg-green-500"
          }`}
          style={{ width: `${Math.min(strength, 100)}%` }}
        />
      </div>
      <div className="text-xs text-gray-500 mt-1">
        {strength < 60 && (
          <ul className="list-disc list-inside space-y-0.5">
            {strength < 30 && <li>Add uppercase & lowercase letters</li>}
            {strength < 40 && <li>Add numbers</li>}
            {strength < 50 && <li>Add special characters (!@#$%^&*)</li>}
            {strength < 60 && <li>Use at least 8 characters</li>}
          </ul>
        )}
      </div>
    </div>
  )
}



// ✅ FIXED Input Field Component — Compact size
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
  glass = false,
}) => {
  const [focused, setFocused] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [strength, setStrength] = useState(0)
  const [localError, setLocalError] = useState("") // 🔥 added for dot validation

  const inputType = type === "password" && showPassword ? "text" : type

  useEffect(() => {
    if (type === "password" && showPasswordStrength) {
      setStrength(calculatePasswordStrength(value))
    }
  }, [value, type, showPasswordStrength])

  const togglePasswordVisibility = (e) => {
    e.preventDefault()
    setShowPassword(!showPassword)
  }

  // 🔥 Handle password change to validate dot (.)
  const handlePasswordChange = (e) => {
    const inputValue = e.target.value

    if (inputValue.includes(".")) {
      setLocalError("Password should not contain '.' (dot)")
    } else {
      setLocalError("")
    }

    onChange(e) // keep your parent form working
  }

  const containerClass = glass
    ? `relative flex items-center rounded-xl overflow-hidden transition-all border ${
        focused ? "border-teal-400/80 ring-2 ring-teal-300/50" : error || localError ? "border-red-400" : "border-white/40"
      } bg-white/25 backdrop-blur-sm`
    : `relative flex items-center border ${
        focused ? "border-teal-500 ring-2 ring-teal-200" : error || localError ? "border-red-500" : "border-gray-300"
      } rounded-lg overflow-hidden transition-all`
  const iconClass = glass ? "flex items-center justify-center w-9 h-9 bg-white/20 text-slate-600" : "flex items-center justify-center w-9 h-9 bg-gray-50 text-gray-500"
  const inputClass = glass ? "flex-1 h-9 px-2.5 outline-none text-slate-800 text-sm w-full placeholder:text-slate-500 bg-transparent" : "flex-1 h-9 px-2.5 outline-none text-gray-700 text-sm w-full"

  return (
    <div className="space-y-1 w-full">
      <div className={containerClass}>
        <div className={iconClass}>
          <Icon size={16} />
        </div>
        <input
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={type === "password" ? handlePasswordChange : onChange} // ✅ changed only this line
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={inputClass}
          autoComplete={autoComplete}
        />
        {type === "password" && (
          <button
            className={glass ? "px-2.5 text-slate-600 hover:text-slate-800 focus:outline-none" : "px-2.5 text-gray-500 hover:text-gray-700 focus:outline-none"}
            onClick={togglePasswordVisibility}
            type="button"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <Eye size={16} /> : <EyeOff size={16} />}
          </button>
        )}
      </div>

      {showPasswordStrength && type === "password" && value && (
        <PasswordStrengthMeter strength={strength} />
      )}

      {(error || localError) && (
        <div className="text-red-500 text-xs flex items-start gap-1 mt-1">
          <AlertCircle size={12} className="mt-0.5 flex-shrink-0" />
          <span>{localError || error}</span>
        </div>
      )}
    </div>
  )
}


// ✅ FIXED Authentication System Component
export default function AuthSystem() {
  const navigate = useNavigate()
  const [formType, setFormType] = useState("login")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mailId: "",
    password: "",
    confirmPassword: "",
  })
  const [errors, setErrors] = useState({})
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [showOtpVerification, setShowOtpVerification] = useState(false)
  const [showForgotPassword, setShowForgotPassword] = useState(false)
  const [otpPurpose, setOtpPurpose] = useState("")
  const [captchaToken, setCaptchaToken] = useState(null)
  const [loginAttempts, setLoginAttempts] = useState(0)
  const [accountLocked, setAccountLocked] = useState(false)
  const [lockTimer, setLockTimer] = useState(0)
  const [sessionTimeout, setSessionTimeout] = useState(null)
  const [showPasswordResetForm, setShowPasswordResetForm] = useState(false)
  const [isFormValid, setIsFormValid] = useState(false)
  const [preventNavigation, setPreventNavigation] = useState(false)
  const { showError, showSuccess, showInfo, showWarning } = useErrorHandler()

  const CustomCloseButton = ({ closeToast }) => (
    <button onClick={closeToast} className="text-white focus:outline-none">
      &times;
    </button>
  )

  const resetFormData = useCallback(() => {
    setFormData({
      firstName: "",
      lastName: "",
      mailId: "",
      password: "",
      confirmPassword: "",
    })
    setErrors({})
    setCaptchaToken(null)
    setIsFormValid(false)
    setFormType("login")
    setShowForgotPassword(false)
  }, [])

  const resetFormDataRef = useRef(resetFormData)
  const { login, logout, showForm, setShowForm, redirect, setRedirect, setIsModalOpen, user, setUser } = useAuth()

  useEffect(() => {
    resetFormDataRef.current = resetFormData
  }, [resetFormData])

  useEffect(() => {
    if (isAuthenticated) {
      const timeout = setTimeout(() => {
        handleLogout("Your session has expired. Please login again.")
      }, 15 * 60 * 1000)
      setSessionTimeout(timeout)
      const resetTimeout = () => {
        clearTimeout(sessionTimeout)
        const newTimeout = setTimeout(() => {
          handleLogout("Your session has expired. Please login again.")
        }, 15 * 60 * 1000)
        setSessionTimeout(newTimeout)
      }
      window.addEventListener("click", resetTimeout)
      window.addEventListener("keypress", resetTimeout)
      return () => {
        clearTimeout(timeout)
        window.removeEventListener("click", resetTimeout)
        window.removeEventListener("keypress", resetTimeout)
      }
    }
  }, [isAuthenticated])

  useEffect(() => {
    let interval
    if (accountLocked && lockTimer > 0) {
      interval = setInterval(() => {
        setLockTimer((prev) => {
          if (prev <= 1) {
            setAccountLocked(false)
            return 0
          }
          return prev - 1
        })
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [accountLocked, lockTimer])

  useEffect(() => {
    const checkFormValidity = () => {
      if (formType === "login") {
        return (
          !!formData.mailId &&
          !validateEmail(formData.mailId) &&
          !!formData.password &&
          !validatePassword(formData.password) &&
          !!captchaToken
        )
      } else if (formType === "signup") {
        return (
          !!formData.firstName &&
          !validateName(formData.firstName) &&
          !!formData.lastName &&
          !validateName(formData.lastName) &&
          !!formData.mailId &&
          !validateEmail(formData.mailId) &&
          !!formData.password &&
          !validatePassword(formData.password, formData.firstName, formData.mailId) &&
          formData.password === formData.confirmPassword &&
          !!captchaToken
        )
      } else if (showForgotPassword) {
        return !!formData.mailId && !validateEmail(formData.mailId) && !!captchaToken
      }
      return false
    }
    setIsFormValid(checkFormValidity())
  }, [formData, formType, showForgotPassword, captchaToken])

  let validFormErrors = {}
  const validateForm = useCallback(() => {
    const newErrors = {}
    if (formType === "signup") {
      newErrors.firstName = validateName(formData.firstName)
      newErrors.lastName = validateName(formData.lastName)
    }
    newErrors.mailId = validateEmail(formData.mailId)
    newErrors.password = validatePassword(formData.password, formData.firstName, formData.mailId)
    if (formType === "signup" || showForgotPassword) {
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match"
      }
    }
    if ((formType === "login" || formType === "signup") && !captchaToken) {
      newErrors.captcha = "Please complete the CAPTCHA verification"
    }
    validFormErrors = newErrors
    setErrors(newErrors)
    return Object.values(newErrors).every((error) => !error)
  }, [formType, formData, captchaToken, showForgotPassword])

  const handleLogout = useCallback(
    (message = "You've been logged out successfully") => {
      showSuccess(message)
      logout()
      setTimeout(() => {
        setIsAuthenticated(false)
        resetFormDataRef.current()
        setShowOtpVerification(false)
        setShowForm(false)
        clearTimeout(sessionTimeout)
        localStorage.removeItem("isAuthenticated")
        sessionStorage.removeItem("authToken")
        setUser(null)
      }, 2000)
    },
    [showSuccess, sessionTimeout, logout],
  )

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      if (formType === "signup") {
        if(validFormErrors.firstName != undefined){
          showError("First "+ validFormErrors.firstName)
        }else if(validFormErrors.lastName != undefined){
          showError("Last "+ validFormErrors.lastName)
        }else if(validFormErrors.mailId != undefined){
          showError(validFormErrors.mailId)
        }else if(validFormErrors.password != undefined){
          showError(validFormErrors.password)
        }else if(validFormErrors.confirmPassword != undefined){
          showError(validFormErrors.confirmPassword)
        }else if(validFormErrors.captcha != undefined){
          showError(validFormErrors.captcha)
        }else{
          showError("Please fix the errors in the form")
        }
      }/*else if(formType === "login"){
        if(validFormErrors.mailId != undefined){
          showError(validFormErrors.mailId)
        }else if(validFormErrors.password != undefined){
          showError("Password is required")
        }else if(validFormErrors.captcha != undefined){
          showError(validFormErrors.captcha)
        }
      }*/else{
        showError("Please fix the errors in the form")
      }
      return
    }
    
    if (accountLocked) {
      showError(`Account is temporarily locked. Try again in ${lockTimer} seconds.`)
      return
    }
    setIsLoading(true)
    try {
      const apiUrl = formType === "login" ? API_ENDPOINTS.LOGIN : API_ENDPOINTS.REGISTER
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          captchaToken,
        }),
      })


      if (!response.ok) {
        // ✅ SAFE ERROR PARSING
        let data = {};
        try {
          data = await response.json();
        } catch (jsonError) {
          // If not JSON, try to get text content
          const text = await response.text();
          data = text || "Server error";
        }

        if (formType === "login") {
          const newAttempts = loginAttempts + 1
          setLoginAttempts(newAttempts)
          if (newAttempts >= 5) {
            setAccountLocked(true)
            setLockTimer(15 * 60)
            showError("Too many failed login attempts. Account locked for 15 minutes.")
            return
          }
        }
        showError(getBackendErrorMessage(data, response.status));
        return
      }
      if (formType === "login") {
        setLoginAttempts(0)
      }
      setOtpPurpose(formType === "login" ? "login" : "signup")
      setShowOtpVerification(true)
      showSuccess(
        formType === "login"
          ? "Login verification code sent to your email"
          : "Registration verification code sent to your email",
      )
    } catch (error) {
      showError("Failed to connect to server. Please check your internet.");
    } finally {
      setIsLoading(false)
      setCaptchaToken(null)
      if (window.grecaptcha) {
        window.grecaptcha.reset()
      }
    }
  }

  const handleForgotPassword = async (e) => {
    e.preventDefault()
    const emailError = validateEmail(formData.mailId)
    if (emailError) {
      setErrors({ ...errors, mailId: emailError })
      showError("Please enter a valid email address")
      return
    }
    if (!captchaToken) {
      setErrors({ ...errors, captcha: "Please complete the CAPTCHA verification" })
      showError("Please complete the CAPTCHA verification")
      return
    }
    setIsLoading(true)
    try {
      const response = await fetch(API_ENDPOINTS.VERIFY_EMAIL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mailId: formData.mailId,
          captchaToken,
        }),
      })

      if (!response.ok) {
        // ✅ SAFE ERROR PARSING
        let data = {};
        try {
          data = await response.json();
        } catch (jsonError) {
          const text = await response.text();
          data = text || "Server error";
        }
        showError(getBackendErrorMessage(data, response.status));
        return
      }
      showSuccess("OTP sent to your email. Please verify to reset your password.")
      setOtpPurpose("resetPassword")
      setShowOtpVerification(true)
    } catch (error) {
      showError("Failed to connect to server. Please check your internet.");
    } finally {
      setIsLoading(false)
      setCaptchaToken(null)
      if (window.grecaptcha) {
        window.grecaptcha.reset()
      }
    }
  }

  // const handleOtpVerification = useCallback(
  //   async (otp) => {
  //     try {
  //       let endpoint = API_ENDPOINTS.VERIFY_OTP
  //       const body = { mailId: formData.mailId, otp: otp }
  //       if (otpPurpose === "resetPassword") {
  //         endpoint = API_ENDPOINTS.VERIFY_OTP
  //       }
  //       const response = await fetch(endpoint, {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify(body),
  //       })

  //       if (!response.ok) {
  //         // ✅ SAFE ERROR PARSING
  //         let data = {};
  //         try {
  //           data = await response.json();
  //         } catch (jsonError) {
  //           const text = await response.text();
  //           data = text || "Server error";
  //         }
  //         showError(getBackendErrorMessage(data, response.status));
  //         return
  //       }
  //       const data = await response.json();
  //       sessionStorage.setItem("user", JSON.stringify(data));
  //       setShowOtpVerification(false)
  //       if (otpPurpose === "resetPassword") {
  //         showSuccess("Your email has been verified. Please set a new password.")
  //         setShowPasswordResetForm(true)
  //       } else {
  //         showSuccess("You've been authenticated successfully!")
  //         sessionStorage.setItem("authToken", data.token)
  //         setIsAuthenticated(true)
  //         login(data)
  //         localStorage.setItem("isAuthenticated", "true")
  //         resetFormDataRef.current()
  //         setShowForm(false)
  //         if (redirect == null) {
  //           navigate("/Student-portal/dashboard")
  //         } else if (redirect == "/enroll") {
  //           setRedirect(null)
  //           setIsModalOpen(true)
  //         } else {
  //           setPreventNavigation(true)
  //         }
  //       }
  //     } catch (error) {
  //       showError("Failed to connect to server. Please check your internet.");
  //     } finally {
  //       setIsLoading(false)
  //     }
  //   },
  //   [formData, otpPurpose, showError, showSuccess, navigate, redirect, setRedirect, setIsModalOpen, login],
  // )

//   const handleOtpVerification = useCallback(
//   async (otp) => {
//     try {
//       let endpoint = API_ENDPOINTS.VERIFY_OTP;
//       const body = { mailId: formData.mailId, otp: otp };
//       if (otpPurpose === "resetPassword") {
//         endpoint = API_ENDPOINTS.VERIFY_OTP;
//       }
//       const response = await fetch(endpoint, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(body),
//       });
//       if (!response.ok) {
//         let data = {};
//         try {
//           data = await response.json();
//         } catch (jsonError) {
//           const text = await response.text();
//           data = text || "Server error";
//         }
//         showError(getBackendErrorMessage(data, response.status));
//         return;
//       }
//       const data = await response.json();
// setUser(data); // ← Set user in AuthContext
//       // ✅ ROLE-BASED REDIRECTION
//       const userRole = data.role?.toLowerCase();

//       if (otpPurpose === "resetPassword") {
//         showSuccess("Your email has been verified. Please set a new password.");
//         setShowPasswordResetForm(true);
//         return;
//       }

//       // ✅ Set session & auth state for ALL valid roles
//       sessionStorage.setItem("user", JSON.stringify(data));
//       sessionStorage.setItem("authToken", data.token);
//       setIsAuthenticated(true);
//       login(data);
//       localStorage.setItem("isAuthenticated", "true");
//       resetFormDataRef.current();
//       setShowForm(false);

//       showSuccess("You've been authenticated successfully!");

//       // ✅ REDIRECT BASED ON ROLE
//       if (userRole === "student") {
//         if (redirect == null) {
//           debugger;
//           navigate("/Student-portal/dashboard");
//         } else if (redirect === "/enroll") {
//           setRedirect(null);
//           setIsModalOpen(true);
//         } else {
//           setPreventNavigation(true);
//         }
//       } else if (userRole === "teacher") {
//         navigate("/teacher-admin/home");
//       } else {
//         // Optional: handle admin or unknown roles
//         showError("Your account role is not authorized to access this portal.");
//         handleLogout("Access denied for your role.");
//       }
//     } catch (error) {
//       showError("Failed to connect to server. Please check your internet.");
//     } finally {
//       setIsLoading(false);
//     }
//   },
//   [formData, otpPurpose, showError, showSuccess, navigate, redirect, setRedirect, setIsModalOpen, login, handleLogout],
// );


// In AuthSystem.jsx
const handleOtpVerification = useCallback(
  async (otp) => {
    try {
      const response = await fetch(API_ENDPOINTS.VERIFY_OTP, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mailId: formData.mailId, otp }),
      });

      if (!response.ok) {
        let data = {};
        try { data = await response.json(); } 
        catch { data = await response.text() || "Server error"; }
        showError(getBackendErrorMessage(data, response.status));
        return;
      }

      const data = await response.json();
      setUser(data); // ← Set user in AuthContext
      // ✅ SAFE ROLE HANDLING - Default to "student" if no role
      const userRole = (data.role || "student").toLowerCase();
      
      if (otpPurpose === "resetPassword") {
        showSuccess("Your email has been verified. Please set a new password.");
        setShowPasswordResetForm(true);
        return;
      }

      // Save user data
      sessionStorage.setItem("user", JSON.stringify(data));
      sessionStorage.setItem("authToken", data.token);
      if (data.token) {
        sessionStorage.setItem("auth_token", data.token);
      }
      setIsAuthenticated(true);
      login(data); // ← This sets user in AuthContext
      localStorage.setItem("isAuthenticated", "true");
      resetFormDataRef.current();
      setShowForm(false);
      showSuccess("You've been authenticated successfully!");

      // Admin panel: OTP-verified admin email → master admin (uses same Sign in)
      const email = (data.mailId || data.email || formData.mailId || "").trim().toLowerCase();
      if (email === "prefcoledutech@gmail.com") {
        navigate("/master-admin/home");
        return;
      }

      // Teacher panel: this email always goes to teacher portal (uses same Sign in)
      if (email === "manikandan.balamurugan016@gmail.com") {
        login({ ...data, role: "teacher" });
        navigate("/teacher-admin/home");
        return;
      }

      // ✅ FIXED REDIRECTION - Default to student portal
      if (userRole === "teacher") {
        navigate("/teacher-admin/home");
      } else {
        // Default to student portal for "student", "admin", or missing role
        if (redirect == null) {
          navigate("/Student-portal/dashboard");
        } else if (redirect === "/enroll") {
          setRedirect(null);
          setIsModalOpen(true);
        }
      }
    } catch (error) {
      showError("Failed to connect to server. Please check your internet.");
    } finally {
      debugger;
      setIsLoading(false);
    }
  },
  [formData, otpPurpose, showError, showSuccess, navigate, redirect, setRedirect, setIsModalOpen, login, handleLogout]
);
  const handleFormTypeChange = useCallback((type) => {
    resetFormDataRef.current()
    setFormType(type)
    setLoginAttempts(0)
  }, [])

  const toggleForgotPassword = useCallback((show) => {
    resetFormDataRef.current()
    setShowForgotPassword(show)
  }, [])

  const handleResendOtp = useCallback(async () => {
    try {
      const response = await fetch(`${API_ENDPOINTS.RESEND_OTP}?mailId=${formData.mailId}`)
      if (!response.ok) {
        // ✅ SAFE ERROR PARSING
        let data = {};
        try {
          data = await response.json();
        } catch (jsonError) {
          const text = await response.text();
          data = text || "Server error";
        }
        showError(getBackendErrorMessage(data, response.status));
        return
      }
      showSuccess("New OTP sent successfully")
    } catch (error) {
      showError("Failed to connect to server. Please check your internet.");
    }
  }, [formData.mailId, showError, showSuccess])

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token)
    if (errors.captcha) {
      setErrors({ ...errors, captcha: undefined })
    }
  }

  const handlePasswordUpdate = useCallback(
    async (passwords) => {
      if (passwords.password.trim() === "") {
        showError("New password cannot be empty")
        return
      }
      const passwordError = validatePassword(passwords.password)
      if (passwordError) {
        showError(passwordError)
        return
      }
      if (passwords.password !== passwords.confirmPassword) {
        showError("Passwords do not match")
        return
      }
      setIsLoading(true)
      try {
        const response = await fetch(API_ENDPOINTS.FORGOT_PASSWORD, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            mailId: formData.mailId,
            newPassword: passwords.password,
            confirmNewPassword: passwords.confirmPassword,
          }),
        })

        if (!response.ok) {
          // ✅ SAFE ERROR PARSING
          let data = {};
          try {
            data = await response.json();
          } catch (jsonError) {
            const text = await response.text();
            data = text || "Server error";
          }
          showError(getBackendErrorMessage(data, response.status));
          return
        }
        const data = await response.json();
        showSuccess("Your password has been reset successfully! Please login with your new password.")
        setShowPasswordResetForm(false)
        resetFormDataRef.current()
        setShowForgotPassword(false)
        setOtpPurpose("")
        setTimeout(() => {
          setFormType("login")
          setShowForm(true)
        }, 100)
      } catch (error) {
        showError("Failed to connect to server. Please check your internet.");
      } finally {
        setIsLoading(false)
      }
    },
    [formData.mailId, showError, showSuccess, setShowForm],
  )

  useEffect(() => {
    if (showForm) {
      lockBodyScroll(true)
    } else {
      lockBodyScroll(false)
    }
  }, [showForm])

  useEffect(() => {
    if (showOtpVerification) {
      lockBodyScroll(true)
    } else {
      if (!showForm && !showPasswordResetForm) {
        lockBodyScroll(false)
      }
    }
  }, [showOtpVerification, showForm, showPasswordResetForm])

  useEffect(() => {
    if (showPasswordResetForm) {
      lockBodyScroll(true)
    } else {
      if (!showForm && !showOtpVerification) {
        lockBodyScroll(false)
      }
    }
  }, [showPasswordResetForm, showForm, showOtpVerification])

  return (
    <div className="flex items-center justify-center">
      <style>
        {`
          .lock-scroll {
            position: fixed;
            width: 100%;
            overflow: hidden;
            top: 0;
            left: 0;
          }
        `}
      </style>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        className="toast-container"
        toastClassName="toast-base"
        bodyClassName="toast-body"
        progressClassName="toast-progress"
      />
      <AnimatePresence>
        {!isAuthenticated ? (
          <motion.button
            onClick={() => {
              resetFormDataRef.current()
              setShowForm(true)
              setRedirect(null)
            }}
            className="px-4 py-2 bg-teal-900 text-white font-semibold rounded-full shadow-lg hover:bg-teal-900 transition-all flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <LogIn size={12} />
            <span className="text-sm">Sign In</span>
          </motion.button>
        ) : (
          <motion.button
            onClick={() => handleLogout()}
            className="px-4 py-2 bg-teal-900 text-white font-semibold rounded-full shadow-lg hover:bg-teal-900 transition-all flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <LogOut size={14} />
            <span className="text-xs">Student Sign Out</span>
          </motion.button>
        )}
        <AnimatePresence>
          {showForm && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-2 pointer-events-none"
              style={{
                backgroundImage: `url(${loginImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              onClick={() => {
                resetFormDataRef.current()
                setShowForm(false)
              }}
            >
              <div className="absolute inset-0 bg-black/25 backdrop-blur-[2px]" />
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="w-full max-w-[95vw] md:max-w-xl lg:max-w-3xl xl:max-w-4xl mx-auto my-4 relative flex flex-col lg:flex-row items-center sm:p-2 md:p-0 sm:h-1/2 xl:h-[80vh] 2xl:h-[60vh] pointer-events-auto rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-white/15 backdrop-blur-xl"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => {
                    resetFormDataRef.current()
                    setShowForm(false)
                  }}
                  className="absolute right-3 top-3 p-2 rounded-full bg-white/20 hover:bg-white/40 border border-white/30 backdrop-blur-md transition-colors z-50 shadow-lg"
                  aria-label="Close form"
                >
                  <X className="w-4 h-4 text-slate-700" />
                </button>

                {/* Image panel: only on xl+ */}
                <div className="hidden xl:block w-1/2 relative h-full min-h-[320px]">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${loginImage})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex flex-col justify-end p-6">
                    <span className="font-serif text-2xl xl:text-3xl font-bold text-[#0d3d38]" style={{ letterSpacing: "0.02em" }}>
                      PREFCOL.
                    </span>
                  </div>
                </div>

                {/* Form area */}
                <div className={`w-full ${!showForgotPassword ? "xl:w-1/2" : "xl:w-full"} p-5 xl:p-6 flex flex-col overflow-hidden`}>
                  <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-white/30 scrollbar-track-transparent pr-1 -mr-1">
                    <motion.div
                      className="w-full max-w-lg mx-auto space-y-3 py-2 px-4 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 shadow-xl"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.1 }}
                      role="dialog"
                      aria-modal="true"
                    >
                      {accountLocked && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="bg-red-500/20 backdrop-blur-sm border border-red-400/50 rounded-xl p-2.5 mb-3 text-xs text-red-800"
                        >
                          <div className="flex items-start gap-2">
                            <AlertCircle className="text-red-500 mt-0.5 flex-shrink-0" size={14} />
                            <div>
                              <h3 className="font-semibold text-red-700 text-xs">Account Locked</h3>
                              <p className="text-red-600 text-xs mt-1">
                                Try again in {Math.floor(lockTimer / 60)}:{(lockTimer % 60).toString().padStart(2, "0")}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {showForgotPassword ? (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <h2 className="text-lg font-bold mb-3 text-center text-slate-800">
                            Reset Password
                          </h2>
                          <form onSubmit={handleForgotPassword} className="space-y-3">
                            <InputField
                              icon={Mail}
                              type="email"
                              placeholder="Email"
                              value={formData.mailId}
                              onChange={(e) => setFormData({ ...formData, mailId: e.target.value })}
                              error={errors.mailId}
                              validate={validateEmail}
                              autoComplete="email"
                              glass
                            />
                            <div className="flex justify-center my-2 px-1">
                              <div className="w-full max-w-xs">
                                <ReCAPTCHA
                                  sitekey="6LfCV5MrAAAAAFMAewmA0gz7YVXslW1Gd92ovv6a"
                                  onChange={handleCaptchaChange}
                                  className="w-full transform scale-90 sm:scale-100 origin-top-left"
                                />
                              </div>
                            </div>
                            {errors.captcha && (
                              <div className="text-red-500 text-xs flex items-start gap-1">
                                <AlertCircle size={12} className="mt-0.5 flex-shrink-0" />
                                <span>{errors.captcha}</span>
                              </div>
                            )}
                            <motion.button
                              type="submit"
                              disabled={isLoading || accountLocked}
                              className="w-full py-2.5 px-3 rounded-xl font-medium text-sm bg-teal-600/90 hover:bg-teal-600 text-white border border-white/30 backdrop-blur-md shadow-lg transition-all"
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              {isLoading ? (
                                <>
                                  <RefreshCcw className="animate-spin inline mr-1" size={14} />
                                  Sending OTP...
                                </>
                              ) : (
                                "Get OTP"
                              )}
                            </motion.button>
                            <SocialButtons onGoogle={() => handleSocialLogin && handleSocialLogin('google')} onGithub={() => handleSocialLogin && handleSocialLogin('github')} />
                          </form>
                          <div className="mt-3 text-center text-xs">
                            <button
                              onClick={() => toggleForgotPassword(false)}
                              className="text-teal-800 font-medium hover:underline"
                            >
                              Back to Login
                            </button>
                          </div>
                        </motion.div>
                      ) : (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <h2 className="text-lg font-bold mb-3 text-center text-slate-800">
                            {formType === "login" ? "Welcome Back!" : "Create Account"}
                          </h2>
                          <form onSubmit={handleSubmit} className="space-y-3">
                            {formType === "signup" && (
                              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                                <InputField
                                  icon={User}
                                  type="text"
                                  placeholder="First Name"
                                  value={formData.firstName}
                                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                  error={errors.firstName}
                                  validate={validateName}
                                  autoComplete="given-name"
                                  glass
                                />
                                <InputField
                                  icon={User}
                                  type="text"
                                  placeholder="Last Name"
                                  value={formData.lastName}
                                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                  error={errors.lastName}
                                  validate={validateName}
                                  autoComplete="family-name"
                                  glass
                                />
                              </div>
                            )}
                            <InputField
                              icon={Mail}
                              type="email"
                              placeholder="Email"
                              value={formData.mailId}
                              onChange={(e) => setFormData({ ...formData, mailId: e.target.value })}
                              error={errors.mailId}
                              validate={validateEmail}
                              autoComplete="email"
                              glass
                            />
                            <InputField
                              icon={Lock}
                              type="password"
                              placeholder="Password"
                              value={formData.password}
                              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                              error={errors.password}
                              validate={(value) => validatePassword(value, formData.firstName, formData.mailId)}
                              autoComplete={formType === "login" ? "current-password" : "new-password"}
                              showPasswordStrength={true}
                              glass
                            />
                            {formType === "signup" && (
                              <InputField
                                icon={Lock}
                                type="password"
                                placeholder="Confirm Password"
                                value={formData.confirmPassword}
                                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                                error={errors.confirmPassword}
                                validate={(value) => (value !== formData.password ? "Passwords do not match" : undefined)}
                                autoComplete="new-password"
                                glass
                              />
                            )}
                            <div className="flex justify-center my-2 px-1">
                              <div className="w-full max-w-xs">
                                <ReCAPTCHA
                                  sitekey="6LfCV5MrAAAAAFMAewmA0gz7YVXslW1Gd92ovv6a"
                                  onChange={handleCaptchaChange}
                                  className="w-full transform scale-90 sm:scale-100 origin-top-left"
                                />
                              </div>
                            </div>
                            {errors.captcha && (
                              <div className="text-red-500 text-xs flex items-start gap-1">
                                <AlertCircle size={12} className="mt-0.5 flex-shrink-0" />
                                <span>{errors.captcha}</span>
                              </div>
                            )}
                            <motion.button
                              type="submit"
                              disabled={isLoading || accountLocked}
                              className="w-full py-2.5 px-3 rounded-xl font-medium text-sm bg-teal-600/90 hover:bg-teal-600 text-white border border-white/30 backdrop-blur-md shadow-lg transition-all"
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              {isLoading ? (
                                <>
                                  <RefreshCcw className="animate-spin inline mr-1" size={14} />
                                  {formType === "login" ? "Logging in..." : "Signing up..."}
                                </>
                              ) : (
                                <>
                                  <ArrowRight size={14} className="inline mr-1" />
                                  {formType === "login" ? "Login" : "Sign Up"}
                                </>
                              )}
                            </motion.button>
                          </form>
                          <div className="mt-3 text-center text-xs text-teal-700 space-y-1">
                            {formType === "login" ? (
                              <>
                                <p>
                                  New user?{" "}
                                  <button
                                    onClick={() => handleFormTypeChange("signup")}
                                    className="text-teal-900 font-medium hover:underline"
                                  >
                                    Sign up
                                  </button>
                                </p>
                                <p>
                                  <button
                                    onClick={() => toggleForgotPassword(true)}
                                    className="text-teal-900 font-medium hover:underline"
                                  >
                                    Forgot Password?
                                  </button>
                                </p>
                              </>
                            ) : (
                              <p>
                                Already have an account?{" "}
                                <button
                                  onClick={() => handleFormTypeChange("login")}
                                  className="text-teal-900 font-medium hover:underline"
                                >
                                  Sign in
                                </button>
                              </p>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </AnimatePresence>
      <OtpVerificationModal
        isOpen={showOtpVerification}
        onClose={() => setShowOtpVerification(false)}
        onVerify={handleOtpVerification}
        onResend={handleResendOtp}
        email={formData.mailId}
        purpose={otpPurpose}
      />
      {showPasswordResetForm && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-2 pointer-events-none"
          onClick={() => setShowPasswordResetForm(false)}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
          <div
            onClick={(e) => e.stopPropagation()}
            className="pointer-events-auto"
          >
            <ResetPasswordForm email={formData.mailId} onSubmit={handlePasswordUpdate} isLoading={isLoading} />
          </div>
        </motion.div>
      )}
    </div>
  )
}

const ResetPasswordForm = ({ email, onSubmit, isLoading }) => {
  const [passwords, setPasswords] = useState({
    password: "",
    confirmPassword: "",
  })
  const [errors, setErrors] = useState({})
  const [isFormValid, setIsFormValid] = useState(false)
  const { showError, showSuccess, showInfo, showWarning, dismissAll } = useErrorHandler()

  useEffect(() => {
    const checkFormValidity = () => {
      return (
        !!passwords.password &&
        !validatePassword(passwords.password) &&
        !!passwords.confirmPassword &&
        passwords.password === passwords.confirmPassword
      )
    }
    setIsFormValid(checkFormValidity())
  }, [passwords])

  const validatePasswords = () => {
    const newErrors = {}
    newErrors.password = validatePassword(passwords.password)
    if (passwords.password !== passwords.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match"
    }
    setErrors(newErrors)
    return Object.values(newErrors).every((error) => !error || error === undefined)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (passwords.password.trim() === "") {
      setErrors({ ...errors, password: "New password cannot be empty" })
      showError("New password cannot be empty")
      return
    }
    if (validatePasswords()) {
      onSubmit(passwords)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg p-4 sm:p-5 max-w-sm mx-auto"
    >
      <h2 className="text-lg font-bold mb-2 text-center text-teal-900">Set New Password</h2>
      <p className="text-gray-600 mb-3 text-center text-sm">Enter a new password for {email}</p>
      <form onSubmit={handleSubmit} className="space-y-3">
        <InputField
          icon={Lock}
          type="password"
          placeholder="New Password"
          value={passwords.password}
          onChange={(e) => setPasswords({ ...passwords, password: e.target.value })}
          error={errors.password}
          validate={validatePassword}
          autoComplete="new-password"
          showPasswordStrength={true}
        />
        <InputField
          icon={Lock}
          type="password"
          placeholder="Confirm New Password"
          value={passwords.confirmPassword}
          onChange={(e) => setPasswords({ ...passwords, confirmPassword: e.target.value })}
          error={errors.confirmPassword}
          validate={(value) => (value !== passwords.password ? "Passwords do not match" : undefined)}
          autoComplete="new-password"
        />
        <motion.button
          type="submit"
          disabled={isLoading}
          className="w-full py-2 px-3 bg-teal-700 text-white font-medium rounded-lg text-sm"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {isLoading ? (
            <>
              <RefreshCcw className="animate-spin inline mr-1" size={14} />
              Updating...
            </>
          ) : (
            "Update Password"
          )}
        </motion.button>
      </form>
    </motion.div>
  )
}