// import React, { useState, useCallback, useRef, useMemo, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { 
//   Person as PersonIcon, 
//   Email as EmailIcon, 
//   Lock as LockIcon, 
//   Visibility as VisibilityIcon, 
//   VisibilityOff as VisibilityOffIcon,
//   Close as CloseIcon,
//   Error as ErrorIcon
// } from '@mui/icons-material';
// import { 
//   Button, 
//   TextField, 
//   InputAdornment, 
//   IconButton, 
//   Typography, 
//   Box, 
//   Card,
//   Link,
//   ThemeProvider, 
//   createTheme, 
//   CssBaseline,
//   useMediaQuery,
//   Checkbox,
//   FormControlLabel,
//   CircularProgress,
//   Grid,
//   Snackbar,
//   Alert,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions
// } from '@mui/material';

// // Theme definition
// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#00796B',
//       light: '#48A999',
//       dark: '#004C40',
//     },
//     secondary: {
//       main: '#FF6E40',
//       light: '#FFA06D',
//       dark: '#C53D13',
//     },
//     background: {
//       default: '#E0F2F1',
//       paper: '#FFFFFF',
//     },
//   },
//   typography: {
//     fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
//     h4: {
//       fontWeight: 700,
//       fontSize: '1.75rem',
//       '@media (max-width:600px)': {
//         fontSize: '1.5rem',
//       },
//     },
//     h5: {
//       fontWeight: 600,
//       fontSize: '1.5rem',
//       '@media (max-width:600px)': {
//         fontSize: '1.25rem',
//       },
//     },
//     h6: {
//       fontWeight: 600,
//       fontSize: '1.25rem',
//       '@media (max-width:600px)': {
//         fontSize: '1.1rem',
//       },
//     },
//     body1: {
//       fontSize: '1rem',
//       '@media (max-width:600px)': {
//         fontSize: '0.875rem',
//       },
//     },
//     body2: {
//       fontSize: '0.875rem',
//       '@media (max-width:600px)': {
//         fontSize: '0.75rem',
//       },
//     },
//     button: {
//       textTransform: 'none',
//       fontWeight: 600,
//     },
//   },
//   shape: {
//     borderRadius: 12,
//   },
//   components: {
//     MuiTextField: {
//       styleOverrides: {
//         root: {
//           '& .MuiOutlinedInput-root': {
//             borderRadius: 12,
//             backgroundColor: '#F5F5F5',
//             '&:hover fieldset': {
//               borderColor: '#00796B',
//             },
//             '&.Mui-focused fieldset': {
//               borderColor: '#00796B',
//             },
//           },
//         },
//       },
//     },
//     MuiButton: {
//       styleOverrides: {
//         root: {
//           borderRadius: 25,
//           padding: '10px 20px',
//           boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//           transition: 'all 0.3s ease',
//           '&:hover': {
//             transform: 'translateY(-2px)',
//             boxShadow: '0 6px 8px rgba(0, 0, 0, 0.15)',
//           },
//         },
//       },
//     },
//     MuiCard: {
//       styleOverrides: {
//         root: {
//           boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
//           overflow: 'visible',
//         },
//       },
//     },
//   },
// });

// // InputField component with enhanced animation
// const InputField = React.memo(({ icon: Icon, error, isExtraSmall, isMobile, fullWidth, ...props }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 20 }}
//     animate={{ opacity: 1, y: 0 }}
//     exit={{ opacity: 0, y: -20 }}
//     transition={{ duration: 0.5, ease: "easeInOut" }}
//   >
//     <TextField
//       fullWidth={fullWidth}
//       variant="outlined"
//       margin="normal"
//       size={isExtraSmall ? 'small' : isMobile ? 'small' : 'medium'}
//       InputProps={{
//         startAdornment: (
//           <InputAdornment position="start">
//             <Icon sx={{ color: error ? 'error.main' : 'text.secondary' }} />
//           </InputAdornment>
//         ),
//       }}
//       error={!!error}
//       helperText={error}
//       sx={{
//         '& .MuiOutlinedInput-root': {
//           backgroundColor: '#F5F5F5',
//           ...(isExtraSmall || isMobile) && {
//             padding: '6px 12px',
//           },
//         },
//       }}
//       {...props}
//     />
//   </motion.div>
// ));

// // OtpInput component
// const OtpInput = React.memo(({ otp, setOtp }) => {
//   const inputRefs = useRef([]);

//   const handleChange = useCallback((element, index) => {
//     if (isNaN(element.value)) return false;
//     const newOtp = [...otp];
//     newOtp[index] = element.value;
//     setOtp(newOtp);
//     if (element.value !== '' && index < 5) {
//       inputRefs.current[index + 1].focus();
//     }
//   }, [otp, setOtp]);

//   const handleKeyDown = useCallback((e, index) => {
//     if (e.key === 'Backspace' && index > 0 && otp[index] === '') {
//       inputRefs.current[index - 1].focus();
//     }
//   }, [otp]);

//   const handlePaste = useCallback((e) => {
//     e.preventDefault();
//     const pastedData = e.clipboardData.getData('text').slice(0, 6).split('');
//     const newOtp = [...otp];
//     pastedData.forEach((value, index) => {
//       if (index < 6 && !isNaN(value)) {
//         newOtp[index] = value;
//       }
//     });
//     setOtp(newOtp);
//     if (pastedData.length === 6) {
//       inputRefs.current[5].focus();
//     } else {
//       inputRefs.current[pastedData.length].focus();
//     }
//   }, [otp, setOtp]);

//   return (
//     <Box display="flex" justifyContent="center" my={2}>
//       {otp.map((digit, index) => (
//         <motion.div
//           key={index}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3, delay: index * 0.1 }}
//         >
//           <TextField
//             inputRef={(el) => (inputRefs.current[index] = el)}
//             variant="outlined"
//             margin="dense"
//             value={digit}
//             onChange={(e) => handleChange(e.target, index)}
//             onKeyDown={(e) => handleKeyDown(e, index)}
//             onPaste={handlePaste}
//             inputProps={{
//               maxLength: 1,
//               style: { textAlign: 'center', fontSize: '1.5rem' },
//             }}
//             sx={{ width: '3rem', mx: 0.5 }}
//           />
//         </motion.div>
//       ))}
//     </Box>
//   );
// });

// // ErrorDialog component
// const ErrorDialog = ({ open, onClose, title, message }) => {
//   return (
//     <AnimatePresence>
//       {open && (
//         <Dialog
//           open={open}
//           onClose={onClose}
//           PaperComponent={motion.div}
//           PaperProps={{
//             initial: { opacity: 0, y: -50 },
//             animate: { opacity: 1, y: 0 },
//             exit: { opacity: 0, y: -50 },
//             transition: { duration: 0.3 }
//           }}
//         >
//           <DialogTitle sx={{ m: 0, p: 2, bgcolor: 'error.main', color: 'error.contrastText' }}>
//             <IconButton
//               aria-label="close"
//               onClick={onClose}
//               sx={{
//                 position: 'absolute',
//                 right: 8,
//                 top: 8,
//                 color: 'inherit'
//               }}
//             >
//               <CloseIcon />
//             </IconButton>
//             <Typography variant="h6" component="div" sx={{ display: 'flex', alignItems: 'center' }}>
//               <ErrorIcon sx={{ mr: 1 }} />
//               {title || 'Error'}
//             </Typography>
//           </DialogTitle>
//           <DialogContent sx={{ mt: 2 }}>
//             <Typography variant="body1">{message}</Typography>
//           </DialogContent>
//           <DialogActions>
//             <Button onClick={onClose} color="primary" variant="contained">
//               Close
//             </Button>
//           </DialogActions>
//         </Dialog>
//       )}
//     </AnimatePresence>
//   );
// };

// // Main LoginPage component
// const LoginPage = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [isSignUp, setIsSignUp] = useState(false);
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//   });
//   const [formErrors, setFormErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [rememberMe, setRememberMe] = useState(false);
//   const [isOtpVerification, setIsOtpVerification] = useState(false);
//   const [otp, setOtp] = useState(new Array(6).fill(""));
//   const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
//   const [paymentStatus, setPaymentStatus] = useState(null);
//   const [errorDialog, setErrorDialog] = useState({ open: false, title: '', message: '' });

//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
//   const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
//   const isExtraSmall = useMediaQuery('(max-width:360px)');

//   const openStudentPortal = useCallback(() => {
//     if (paymentStatus === 'success') {
//       window.open('/student-portal', '_blank', 'noopener,noreferrer');
//     }
//   }, [paymentStatus]);

//   const signUp = async (userData) => {
//     const response = await fetch('/api/register', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         firstname: userData.firstName,
//         lastname: userData.lastName,
//         mail: userData.email,
//         password: userData.password,
//         confirmpassword: userData.confirmPassword
//       }),
//     });

//     if (!response.ok) {
//       const errorData = await response.json();
//       throw new Error(errorData.message || 'Signup failed');
//     }

//     return response.json();
//   };

//   const signIn = async (userData) => {
//     const response = await fetch('/api/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         mail: userData.email,
//         password: userData.password,
//       }),
//     });

//     if (!response.ok) {
//       const errorData = await response.json();
//       throw new Error(errorData.message || 'Login failed');
//     }

//     return response.json();
//   };

//   const handleModalToggle = useCallback(() => {
//     setIsModalOpen((prev) => !prev);
//     setFormData({ firstName: '', lastName: '', email: '', password: '', confirmPassword: '' });
//     setFormErrors({});
//     setIsOtpVerification(false);
//     setOtp(new Array(6).fill(""));
//     setPaymentStatus(null);
//   }, []);

//   const handleInputChange = useCallback((e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     if (formErrors[name]) {
//       setFormErrors((prev) => ({ ...prev, [name]: undefined }));
//     }
//   }, [formErrors]);

//   const validateForm = useCallback(() => {
//     const errors = {};
//     if (isSignUp) {
//       if (!formData.firstName) errors.firstName = 'First name is required';
//       if (!formData.lastName) errors.lastName = 'Last name is required';
//     }
//     if (!formData.email) {
//       errors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       errors.email = 'Email is invalid';
//     }
//     if (!formData.password) {
//       errors.password = 'Password is required';
//     } else if (formData.password.length < 8) {
//       errors.password = 'Password must be at least 8 characters';
//     }
//     if (isSignUp) {
//       if (!formData.confirmPassword) {
//         errors.confirmPassword = 'Please confirm your password';
//       } else if (formData.password !== formData.confirmPassword) {
//         errors.confirmPassword = 'Passwords do not match';
//       }
//     }
//     setFormErrors(errors);
//     return Object.keys(errors).length === 0;
//   }, [formData, isSignUp]);

//   const generateOtp = useCallback(async () => {
//     try {
//       const response = await fetch('/api/otp-generate', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           mail: formData.email,
//         }),
//       });

//       if (!response.ok) {
//         throw new Error('OTP generation failed');
//       }

//       setSnackbar({ open: true, message: 'OTP sent to your email!', severity: 'success' });
//       setIsOtpVerification(true);
//     } catch (error) {
//       setSnackbar({ open: true, message: 'Failed to generate OTP. Please try again.', severity: 'error' });
//     }
//   }, [formData.email]);

//   const handlePayment = useCallback(() => {
//     const options = {
//       key: "YOUR_RAZORPAY_KEY",
//       amount: 50000,
//       currency: "INR",
//       name: "Student Portal Access",
//       description: "Payment for Student Portal Access",
//       handler: function (response) {
//         setPaymentStatus('success');
//         setTimeout(() => {
//           openStudentPortal();
//         }, 2000);
//       },
//       modal: {
//         ondismiss: function () {
//           setPaymentStatus('failed');
//         },
//       },
//       prefill: {
//         email: formData.email,
//       },
//       theme: {
//         color: "#00796B",
//       },
//     };

//     setPaymentStatus('pending');
//     const rzp = new window.Razorpay(options);
//     rzp.open();
//   }, [formData.email, openStudentPortal]);

//   const onSubmit = useCallback(async (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       setIsSubmitting(true);
//       try {
//         if (isSignUp) {
//           await signUp(formData);
//           await generateOtp();
//         } else {
//           const data = await signIn(formData);
//           if (data.requiresOtp) {
//             await generateOtp();
//           } else {
//             handlePayment();
//           }
//         }
//       } catch (error) {
//         if (error.message.includes('Login failed') || error.message.includes('Signup failed')) {
//           setErrorDialog({ 
//             open: true, 
//             title: isSignUp ? 'Signup Error' : 'Login Error', 
//             message: error.message || 'An error occurred. Please try again.' 
//           });
//         } else {
//           setSnackbar({ open: true, message: error.message || 'An error occurred. Please try again.', severity: 'error' });
//         }
//       } finally {
//         setIsSubmitting(false);
//       }
//     }
//   }, [formData, isSignUp, validateForm, generateOtp, signUp, signIn, handlePayment]);

//   const handleOtpSubmit = useCallback(async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     try {
//       const response = await fetch('/api/otp-validate', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           mail: formData.email,
//           otp: otp.join(''),
//         }),
//       });

//       if (!response.ok) {
//         throw new Error('OTP verification failed');
//       }

//       handlePayment();
//     } catch (error) {
//       setSnackbar({ open: true, message: 'OTP verification failed. Please try again.', severity: 'error' });
//     } finally {
//       setIsSubmitting(false);
//     }
//   }, [formData.email, otp, handlePayment]);

//   const togglePasswordVisibility = useCallback(() => {
//     setShowPassword((prev) => !prev);
//   }, []);

//   const toggleConfirmPasswordVisibility = useCallback(() => {
//     setShowConfirmPassword((prev) => !prev);
//   }, []);

//   const handleCloseSnackbar = useCallback(() => {
//     setSnackbar((prev) => ({ ...prev, open: false }));
//   }, []);

//   const handleCloseErrorDialog = useCallback(() => {
//     setErrorDialog((prev) => ({ ...prev, open: false }));
//   }, []);

//   const containerVariants = useMemo(() => ({
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: { 
//       opacity: 1, 
//       scale: 1,
//       transition: { 
//         duration: 0.5, 
//         ease: "easeOut",
//         staggerChildren: 0.1,
//         delayChildren: 0.3
//       }
//     },
//     exit: { 
//       opacity: 0, 
//       scale: 0.8, 
//       transition: { 
//         duration: 0.5, 
//         ease: "easeIn" 
//       } 
//     }
//   }), []);

//   const itemVariants = useMemo(() => ({
//     hidden: { opacity: 0, y: 20 },
//     visible: { 
//       opacity: 1, 
//       y: 0,
//       transition: { duration: 0.5, ease: "easeOut" }
//     }
//   }), []);

//   const modalVariants = useMemo(() => ({
//     hidden: { opacity: 0, y: 50, scale: 0.95 },
//     visible: { 
//       opacity: 1, 
//       y: 0, 
//       scale: 1,
//       transition: { 
//         duration: 0.5, 
//         ease: "easeOut",
//         type: "spring",
//         stiffness: 300,
//         damping: 30
//       }
//     },
//     exit: { 
//       opacity: 0, 
//       y: 50, 
//       scale: 0.95,
//       transition: { 
//         duration: 0.5, 
//         ease: "easeIn" 
//       } 
//     }
//   }), []);

//   const overlayVariants = useMemo(() => ({
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { duration: 0.3 } },
//     exit: { opacity: 0, transition: { duration: 0.3 } }
//   }), []);

//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = 'https://checkout.razorpay.com/v1/checkout.js';
//     script.async = true;
//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <Box
//         display="flex"
//         flexDirection="column"
//         justifyContent="center"
//         alignItems="center"
//         width="100%"
      
//       >
//         <motion.div
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           <Button
//             variant="contained"
//             onClick={handleModalToggle}
//             startIcon={<PersonIcon />}
//             sx={{ 
//               backgroundColor: 'primary.main',
//               '&:hover': {
//                 backgroundColor: 'primary.dark',
//               }
//             }}
//           >
//             Sign In
//           </Button>
//         </motion.div>
//         <AnimatePresence>
//           {isModalOpen && (
//             <motion.div
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               variants={overlayVariants}
//               style={{
//                 position: 'fixed',
//                 top: 0,
//                 left: 0,
//                 right: 0,
//                 bottom: 0,
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 background: 'rgba(0, 0, 0, 0.5)',
//                 zIndex: 1000,
//               }}
//               onClick={handleModalToggle}
//             >
//               <motion.div
//                 variants={modalVariants}
//                 style={{
//                   width: isMobile ? '100%' : isTablet ? '90%' : '800px',
//                   maxWidth: '100%',
//                   height: isMobile ? '100%' : 'auto',
//                   maxHeight: isMobile ? '100%' : '90vh',
//                   display: 'flex',
//                   flexDirection: isMobile ? 'column' : 'row',
//                   overflow: 'auto',
//                   borderRadius: isMobile ? 0 : '20px',
//                 }}
//                 onClick={(e) => e.stopPropagation()}
//               >
//                 <Card
//                   sx={{
//                     width: '100%',
//                     height: '100%',
//                     display: 'flex',
//                     flexDirection: isMobile ? 'column' : 'row',
//                     overflow: 'hidden',
//                   }}
//                 >
//                   <IconButton
//                     sx={{
//                       position: 'absolute',
//                       top: isMobile ? 16 : 8,
//                       right: isMobile ? 16 : 8,
//                       color: isMobile ? 'primary.main' : 'white',
//                       backgroundColor: isMobile ? 'rgba(255, 255, 255, 0.9)' : 'transparent',
//                       '&:hover': {
//                         backgroundColor: isMobile ? 'white' : 'rgba(255, 255, 255, 0.1)',
//                       },
//                       zIndex: 1,
//                     }}
//                     onClick={handleModalToggle}
//                   >
//                     <CloseIcon />
//                   </IconButton>
//                   <Box
//                     sx={{
//                       width: isMobile ? '100%' : '40%',
//                       minHeight: isMobile ? '150px' : 'auto',
//                       background: 'linear-gradient(135deg, #00796B 0%, #48A999 100%)',
//                       display: 'flex',
//                       flexDirection: 'column',
//                       alignItems: 'center',
//                       justifyContent: 'center',
//                       color: 'white',
//                       p: isMobile ? 2 : 4,
//                       position: 'relative',
//                       overflow: 'hidden',
//                     }}
//                   >
//                     <motion.div variants={itemVariants}>
//                       <Typography variant={isMobile ? "h6" : "h5"} fontWeight="bold" mb={1}>
//                         {isSignUp ? 'Join Us!' : 'Welcome Back!'}
//                       </Typography>
//                     </motion.div>
//                     <motion.div variants={itemVariants}>
//                       <Typography variant="body2" textAlign="center" mb={2}>
//                         {isSignUp
//                           ? 'Already have an account?'
//                           : "Don't have an account yet?"}
//                       </Typography>
//                     </motion.div>
//                     <motion.div
//                       variants={itemVariants}
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                     >
//                       <Button
//                         variant="outlined"
//                         onClick={() => setIsSignUp(!isSignUp)}
//                         sx={{
//                           color: 'white',
//                           borderColor: 'white',
//                           '&:hover': {
//                             borderColor: 'white',
//                             backgroundColor: 'rgba(255,255,255,0.1)',
//                           },
//                         }}
//                       >
//                         {isSignUp ? 'Sign In' : 'Sign Up'}
//                       </Button>
//                     </motion.div>
//                   </Box>
//                   <Box
//                     sx={{
//                       width: isMobile ? '100%' : '60%',
//                       height: isMobile ? 'auto' : 'auto',
//                       p: isExtraSmall ? 2 : isMobile ? 3 : 4,
//                       display: 'flex',
//                       flexDirection: 'column',
//                       alignItems: 'center',
//                       bgcolor: 'background.paper',
//                       position: 'relative',
//                       overflow: 'auto',
//                     }}
//                   >
//                     <AnimatePresence mode="wait">
//                       <motion.div
//                         key={isSignUp ? 'signup' : 'signin'}
//                         variants={containerVariants}
//                         initial="hidden"
//                         animate="visible"
//                         exit="exit"
//                         style={{
//                           width: '100%',
//                           display: 'flex',
//                           flexDirection: 'column',
//                           alignItems: 'center',
//                         }}
//                       >
//                         <motion.div variants={itemVariants}>
//                           <Typography variant={isMobile ? "h6" : "h5"} color="primary" fontWeight="bold" mb={isMobile ? 2 : 4}>
//                             {isOtpVerification ? 'Verify OTP' : (isSignUp ? 'Create Account' : 'Login')}
//                           </Typography>
//                         </motion.div>
//                         {isOtpVerification ? (
//                           <Box component="form" onSubmit={handleOtpSubmit} width="100%" maxWidth="400px">
//                             <motion.div variants={itemVariants}>
//                               <Typography variant="body1" align="center" gutterBottom>
//                                 Enter the 6-digit OTP sent to your email
//                               </Typography>
//                             </motion.div>
//                             <motion.div variants={itemVariants}>
//                               <OtpInput otp={otp} setOtp={setOtp} />
//                             </motion.div>
//                             <motion.div
//                               variants={itemVariants}
//                               whileHover={{ scale: 1.02 }}
//                               whileTap={{ scale: 0.98 }}
//                             >
//                               <Button
//                                 type="submit"
//                                 fullWidth
//                                 variant="contained"
//                                 disabled={isSubmitting || otp.some(digit => digit === '')}
//                                 sx={{
//                                   mt: 3,
//                                   mb: 2,
//                                   backgroundColor: 'primary.main',
//                                   '&:hover': {
//                                     backgroundColor: 'primary.dark',
//                                   },
//                                 }}
//                               >
//                                 {isSubmitting ? <CircularProgress size={24} /> : 'Verify OTP'}
//                               </Button>
//                             </motion.div>
//                           </Box>
//                         ) : (
//                           <Box component="form" onSubmit={onSubmit} width="100%" maxWidth={isMobile ? "100%" : "400px"}>
//                             {isSignUp && (
//                               <Grid container spacing={isExtraSmall ? 1 : isMobile ? 1.5 : 2}>
//                                 <Grid item xs={12} sm={isMobile ? 12 : 6}>
//                                   <InputField
//                                     name="firstName"
//                                     label="First Name"
//                                     icon={PersonIcon}
//                                     value={formData.firstName}
//                                     onChange={handleInputChange}
//                                     error={formErrors.firstName}
//                                     isExtraSmall={isExtraSmall}
//                                     isMobile={isMobile}
//                                     fullWidth
//                                   />
//                                 </Grid>
//                                 <Grid item xs={12} sm={isMobile ? 12 : 6}>
//                                   <InputField
//                                     name="lastName"
//                                     label="Last Name"
//                                     icon={PersonIcon}
//                                     value={formData.lastName}
//                                     onChange={handleInputChange}
//                                     error={formErrors.lastName}
//                                     isExtraSmall={isExtraSmall}
//                                     isMobile={isMobile}
//                                     fullWidth
//                                   />
//                                 </Grid>
//                               </Grid>
//                             )}
//                             <InputField
//                               name="email"
//                               label="Email"
//                               icon={EmailIcon}
//                               value={formData.email}
//                               onChange={handleInputChange}
//                               error={formErrors.email}
//                               isExtraSmall={isExtraSmall}
//                               isMobile={isMobile}
//                               fullWidth
//                             />
//                             <InputField
//                               name="password"
//                               label={isSignUp ? "New Password" : "Password"}
//                               type={showPassword ? "text" : "password"}
//                               icon={LockIcon}
//                               value={formData.password}
//                               onChange={handleInputChange}
//                               error={formErrors.password}
//                               isExtraSmall={isExtraSmall}
//                               isMobile={isMobile}
//                               InputProps={{
//                                 endAdornment: (
//                                   <InputAdornment position="end">
//                                     <IconButton 
//                                       onClick={togglePasswordVisibility}
//                                       edge="end"
//                                       aria-label={showPassword ? "Hide password" : "Show password"}
//                                     >
//                                       {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
//                                     </IconButton>
//                                   </InputAdornment>
//                                 ),
//                               }}
//                               fullWidth
//                             />
//                             {isSignUp && (
//                               <InputField
//                                 name="confirmPassword"
//                                 label="Confirm Password"
//                                 type={showConfirmPassword ? "text" : "password"}
//                                 icon={LockIcon}
//                                 value={formData.confirmPassword}
//                                 onChange={handleInputChange}
//                                 error={formErrors.confirmPassword}
//                                 isExtraSmall={isExtraSmall}
//                                 isMobile={isMobile}
//                                 InputProps={{
//                                   endAdornment: (
//                                     <InputAdornment position="end">
//                                       <IconButton 
//                                         onClick={toggleConfirmPasswordVisibility}
//                                         edge="end"
//                                         aria-label={showConfirmPassword ? "Hide password" : "Show password"}
//                                       >
//                                         {showConfirmPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
//                                       </IconButton>
//                                     </InputAdornment>
//                                   ),
//                                 }}
//                                 fullWidth
//                               />
//                             )}
//                             <motion.div variants={itemVariants}>
//                               <Box 
//                                 sx={{ 
//                                   display: 'flex', 
//                                   flexDirection: isMobile ? 'column' : 'row',
//                                   justifyContent: 'space-between', 
//                                   alignItems: isMobile ? 'flex-start' : 'center', 
//                                   mb: 2,
//                                   gap: isMobile ? 1 : 0
//                                 }}
//                               >
//                                 <FormControlLabel
//                                   control={
//                                     <Checkbox
//                                       checked={rememberMe}
//                                       onChange={(e) => setRememberMe(e.target.checked)}
//                                       color="primary"
//                                     />
//                                   }
//                                   label={<Typography variant={isMobile ? "body2" : "body1"}>Remember me</Typography>}
//                                 />
//                                 {!isSignUp && (
//                                   <Link
//                                     href="#"
//                                     color="primary"
//                                     underline="hover"
//                                     onClick={(e) => {
//                                       e.preventDefault();
//                                       setSnackbar({ open: true, message: 'Password reset email sent!', severity: 'success' });
//                                     }}
//                                     sx={{ fontSize: isMobile ? '0.875rem' : '1rem' }}
//                                   >
//                                     Forgot Password?
//                                   </Link>
//                                 )}
//                               </Box>
//                             </motion.div>
//                             <motion.div
//                               variants={itemVariants}
//                               whileHover={{ scale: 1.02 }}
//                               whileTap={{ scale: 0.98 }}
//                             >
//                               <Button
//                                 type="submit"
//                                 fullWidth
//                                 variant="contained"
//                                 disabled={isSubmitting}
//                                 sx={{
//                                   mt: isExtraSmall ? 1 : isMobile ? 2 : 3,
//                                   mb: isExtraSmall ? 1 : isMobile ? 1 : 2,
//                                   py: isExtraSmall ? 1 : isMobile ? 1.5: 2,
//                                   backgroundColor: 'primary.main',
//                                   '&:hover': {
//                                     backgroundColor: 'primary.dark',
//                                   },
//                                   transition: 'all 0.3s ease-in-out',
//                                   fontSize: isMobile ? '0.875rem' : '1rem',
//                                 }}
//                               >
//                                 {isSubmitting ? <CircularProgress size={20} /> : (isSignUp ? 'Sign Up' : 'Login')}
//                               </Button>
//                             </motion.div>
//                           </Box>
//                         )}
//                       </motion.div>
//                     </AnimatePresence>
//                   </Box>
//                 </Card>
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//         <Snackbar 
//           open={snackbar.open} 
//           autoHideDuration={6000} 
//           onClose={handleCloseSnackbar} 
//           anchorOrigin={{vertical: 'top', horizontal: 'center'}}
//         >
//           <Alert 
//             onClose={handleCloseSnackbar} 
//             severity={snackbar.severity} 
//             sx={{ 
//               width: '100%', 
//               alignItems: 'center',
//               '& .MuiAlert-icon': {
//                 fontSize: '1.5rem'
//               }
//             }}
//             elevation={6}
//             variant="filled"
//           >
//             <Typography variant="body1">{snackbar.message}</Typography>
//           </Alert>
//         </Snackbar>
//         <ErrorDialog
//           open={errorDialog.open}
//           onClose={handleCloseErrorDialog}
//           title={errorDialog.title}
//           message={errorDialog.message}
//         />
//       </Box>
//     </ThemeProvider>
//   );
// };

// export default LoginPage;


// import React, { useState, useCallback, useRef, useMemo } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useNavigate, Link as RouterLink } from 'react-router-dom';
// import { 
//   Person as PersonIcon, 
//   Email as EmailIcon, 
//   Lock as LockIcon, 
//   Visibility as VisibilityIcon, 
//   VisibilityOff as VisibilityOffIcon,
//   School as SchoolIcon,
//   Google as GoogleIcon,
//   GitHub as GitHubIcon
// } from '@mui/icons-material';
// import { 
//   Button, 
//   TextField, 
//   InputAdornment, 
//   IconButton, 
//   Typography, 
//   Box, 
//   Card,
//   ThemeProvider, 
//   createTheme, 
//   CssBaseline,
//   useMediaQuery,
//   Checkbox,
//   FormControlLabel,
//   CircularProgress,
//   Grid,
//   Snackbar,
//   Alert,
//   LinearProgress,
//   Divider,
//   Link,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogContentText,
//   DialogActions
// } from '@mui/material';

// // Theme definition
// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#00796B',
//       light: '#48A999',
//       dark: '#004C40',
//     },
//     secondary: {
//       main: '#FF6E40',
//       light: '#FFA06D',
//       dark: '#C53D13',
//     },
//     background: {
//       default: '#E0F2F1',
//       paper: '#FFFFFF',
//     },
//   },
//   typography: {
//     fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
//     h4: {
//       fontWeight: 700,
//     },
//     button: {
//       textTransform: 'none',
//       fontWeight: 600,
//     },
//   },
//   shape: {
//     borderRadius: 12,
//   },
//   components: {
//     MuiTextField: {
//       styleOverrides: {
//         root: {
//           '& .MuiOutlinedInput-root': {
//             borderRadius: 12,
//             backgroundColor: '#F5F5F5',
//             '&:hover fieldset': {
//               borderColor: '#00796B',
//             },
//             '&.Mui-focused fieldset': {
//               borderColor: '#00796B',
//             },
//           },
//         },
//       },
//     },
//     MuiButton: {
//       styleOverrides: {
//         root: {
//           borderRadius: 25,
//           padding: '10px 20px',
//           boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//           transition: 'all 0.3s ease',
//           '&:hover': {
//             transform: 'translateY(-2px)',
//             boxShadow: '0 6px 8px rgba(0, 0, 0, 0.15)',
//           },
//         },
//       },
//     },
//     MuiCard: {
//       styleOverrides: {
//         root: {
//           boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
//           overflow: 'visible',
//         },
//       },
//     },
//   },
// });

// // Password strength meter component
// const PasswordStrengthMeter = ({ password }) => {
//   const calculateStrength = (pwd) => {
//     let strength = 0;
//     if (pwd.length > 7) strength++;
//     if (pwd.match(/[a-z]/) && pwd.match(/[A-Z]/)) strength++;
//     if (pwd.match(/\d/)) strength++;
//     if (pwd.match(/[^a-zA-Z\d]/)) strength++;
//     return strength;
//   };

//   const strength = calculateStrength(password);
//   const color = ['#f00', '#f90', '#ff0', '#9f0', '#0f0'][strength];

//   return (
//     <Box sx={{ width: '100%', mt: 1 }}>
//       <LinearProgress
//         variant="determinate"
//         value={(strength / 4) * 100}
//         sx={{
//           height: 10,
//           borderRadius: 5,
//           '& .MuiLinearProgress-bar': {
//             backgroundColor: color,
//           },
//         }}
//       />
//       <Typography variant="caption" sx={{ color: 'text.secondary' }}>
//         {['Weak', 'Fair', 'Good', 'Strong', 'Very Strong'][strength]}
//       </Typography>
//     </Box>
//   );
// };

// // InputField component with enhanced animation
// const InputField = React.memo(({ icon: Icon, error, isExtraSmall, isMobile, ...props }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 20 }}
//     animate={{ opacity: 1, y: 0 }}
//     exit={{ opacity: 0, y: -20 }}
//     transition={{ duration: 0.5, ease: "easeInOut" }}
//   >
//     <TextField
//       fullWidth
//       variant="outlined"
//       margin={isExtraSmall ? "dense" : "normal"}
//       InputProps={{
//         startAdornment: (
//           <InputAdornment position="start">
//             <Icon sx={{ color: error ? 'error.main' : 'text.secondary', fontSize: isMobile ? '1.2rem' : '1.5rem' }} />
//           </InputAdornment>
//         ),
//       }}
//       error={!!error}
//       helperText={error}
//       sx={{
//         '& .MuiOutlinedInput-root': {
//           backgroundColor: '#F5F5F5',
//           transition: 'all 0.3s ease-in-out',
//           fontSize: isMobile ? '0.9rem' : '1rem',
//         },
//         '& .MuiInputLabel-root': {
//           fontSize: isMobile ? '0.9rem' : '1rem',
//         },
//         '& .MuiFormHelperText-root': {
//           fontSize: isMobile ? '0.7rem' : '0.75rem',
//         },
//         mb: isExtraSmall ? 1 : isMobile ? 1.5 : 2,
//       }}
//       {...props}
//     />
//   </motion.div>
// ));

// // OtpInput component
// const OtpInput = React.memo(({ otp, setOtp }) => {
//   const inputRefs = useRef([]);

//   const handleChange = useCallback((element, index) => {
//     if (isNaN(element.value)) return false;
//     const newOtp = [...otp];
//     newOtp[index] = element.value;
//     setOtp(newOtp);
//     if (element.value !== '' && index < 5) {
//       inputRefs.current[index + 1].focus();
//     }
//   }, [otp, setOtp]);

//   const handleKeyDown = useCallback((e, index) => {
//     if (e.key === 'Backspace' && index > 0 && otp[index] === '') {
//       inputRefs.current[index - 1].focus();
//     }
//   }, [otp]);

//   const handlePaste = useCallback((e) => {
//     e.preventDefault();
//     const pastedData = e.clipboardData.getData('text').slice(0, 6).split('');
//     const newOtp = [...otp];
//     pastedData.forEach((value, index) => {
//       if (index < 6 && !isNaN(value)) {
//         newOtp[index] = value;
//       }
//     });
//     setOtp(newOtp);
//     if (pastedData.length === 6) {
//       inputRefs.current[5].focus();
//     } else {
//       inputRefs.current[pastedData.length].focus();
//     }
//   }, [otp, setOtp]);

//   return (
//     <Box display="flex" justifyContent="center" my={2}>
//       {otp.map((digit, index) => (
//         <motion.div
//           key={index}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3, delay: index * 0.1 }}
//         >
//           <TextField
//             inputRef={(el) => (inputRefs.current[index] = el)}
//             variant="outlined"
//             margin="dense"
//             value={digit}
//             onChange={(e) => handleChange(e.target, index)}
//             onKeyDown={(e) => handleKeyDown(e, index)}
//             onPaste={handlePaste}
//             inputProps={{
//               maxLength: 1,
//               style: { textAlign: 'center', fontSize: '1.5rem' },
//             }}
//             sx={{ width: '3rem', mx: 0.5 }}
//           />
//         </motion.div>
//       ))}
//     </Box>
//   );
// });

// // Main LoginPage component
// const LoginPage = () => {
//   const navigate = useNavigate();
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [isSignUp, setIsSignUp] = useState(false);
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//   });
//   const [formErrors, setFormErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [rememberMe, setRememberMe] = useState(false);
//   const [isOtpVerification, setIsOtpVerification] = useState(false);
//   const [otp, setOtp] = useState(new Array(6).fill(""));
//   const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
//   const [errorDialog, setErrorDialog] = useState({ open: false, title: '', message: '' });

//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
//   const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
//   const isExtraSmall = useMediaQuery(theme.breakpoints.down('xs'));

//   const signUp = async (userData) => {
//     const response = await fetch('/api/register', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         firstname: userData.firstName,
//         lastname: userData.lastName,
//         mail: userData.email,
//         password: userData.password,
//         confirmpassword: userData.confirmPassword
//       }),
//     });

//     if (!response.ok) {
//       const errorData = await response.json();
//       throw new Error(errorData.message || 'Signup failed');
//     }

//     return response.json();
//   };

//   const signIn = async (userData) => {
//     const response = await fetch('/api/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         mail: userData.email,
//         password: userData.password,
//       }),
//     });

//     if (!response.ok) {
//       const errorData = await response.json();
//       throw new Error(errorData.message || 'Login failed');
//     }

//     return response.json();
//   };

//   const handleModalToggle = useCallback(() => {
//     setIsModalOpen((prev) => !prev);
//     setFormData({ firstName: '', lastName: '', email: '', password: '', confirmPassword: '' });
//     setFormErrors({});
//     setIsOtpVerification(false);
//     setOtp(new Array(6).fill(""));
//     setErrorDialog({ open: false, title: '', message: '' });
//   }, []);

//   const handleInputChange = useCallback((e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     if (formErrors[name]) {
//       setFormErrors((prev) => ({ ...prev, [name]: undefined }));
//     }
//   }, [formErrors]);

//   const validateForm = useCallback(() => {
//     const errors = {};
//     if (isSignUp) {
//       if (!formData.firstName) errors.firstName = 'First name is required';
//       if (!formData.lastName) errors.lastName = 'Last name is required';
//     }
//     if (!formData.email) {
//       errors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       errors.email = 'Email is invalid';
//     }
//     if (!formData.password) {
//       errors.password = 'Password is required';
//     } else if (formData.password.length < 8) {
//       errors.password = 'Password must be at least 8 characters';
//     }
//     if (isSignUp) {
//       if (!formData.confirmPassword) {
//         errors.confirmPassword = 'Please confirm your password';
//       } else if (formData.password !== formData.confirmPassword) {
//         errors.confirmPassword = 'Passwords do not match';
//       }
//     }
//     setFormErrors(errors);
//     return Object.keys(errors).length === 0;
//   }, [formData, isSignUp]);

//   const generateOtp = useCallback(async () => {
//     try {
//       const response = await fetch('/api/otp-generate', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           mail: formData.email,
//         }),
//       });

//       if (!response.ok) {
//         throw new Error('OTP generation failed');
//       }

//       setSnackbar({ open: true, message: 'OTP sent to your email!', severity: 'success' });
//       setIsOtpVerification(true);
//     } catch (error) {
//       setSnackbar({ open: true, message: 'Failed to generate OTP. Please try again.', severity: 'error' });
//     }
//   }, [formData.email]);

//   const onSubmit = useCallback(async (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       setIsSubmitting(true);
//       try {
//         if (isSignUp) {
//           await signUp(formData);
//           await generateOtp();
//         } else {
//           const data = await signIn(formData);
//           if (data.requiresOtp) {
//             await generateOtp();
//           } else {
//             setSnackbar({ open: true, message: 'Logged in successfully!', severity: 'success' });
//             setTimeout(() => {
//               navigate('/student-portal');
//             }, 1500);
//           }
//         }
//       } catch (error) {
//         if (error.message.includes('Login failed') || error.message.includes('Signup failed')) {
//           setErrorDialog({ 
//             open: true, 
//             title: isSignUp ? 'Signup Error' : 'Login Error', 
//             message: error.message || 'An error occurred. Please try again.' 
//           });
//         } else {
//           setSnackbar({ open: true, message: error.message || 'An error occurred. Please try again.', severity: 'error' });
//         }
//       } finally {
//         setIsSubmitting(false);
//       }
//     }
//   }, [formData, isSignUp, validateForm, generateOtp, signUp, signIn, navigate]);

//   const handleOtpSubmit = useCallback(async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     try {
//       const response = await fetch('/api/otp-validate', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           mail: formData.email,
//           otp: otp.join(''),
//         }),
//       });

//       if (!response.ok) {
//         throw new Error('OTP verification failed');
//       }

//       setSnackbar({ open: true, message: isSignUp ? 'Account created successfully!' : 'Logged in successfully!', severity: 'success' });
//       handleModalToggle();
//       navigate('/student-portal');
//     } catch (error) {
//       setSnackbar({ open: true, message: 'OTP verification failed. Please try again.', severity: 'error' });
//     } finally {
//       setIsSubmitting(false);
//     }
//   }, [formData.email, handleModalToggle, isSignUp, otp, navigate]);

//   const togglePasswordVisibility = useCallback(() => {
//     setShowPassword((prev) => !prev);
//   }, []);

//   const toggleConfirmPasswordVisibility = useCallback(() => {
//     setShowConfirmPassword((prev) => !prev);
//   }, []);

//   const handleCloseSnackbar = useCallback(() => {
//     setSnackbar((prev) => ({ ...prev, open: false }));
//   }, []);

//   const handleCloseErrorDialog = useCallback(() => {
//     setErrorDialog((prev) => ({ ...prev, open: false }));
//   }, []);

//   const handleSocialLogin = useCallback(async (provider) => {
//     try {
//       const response = await fetch(`/api/auth/${provider}`);
//       if (response.ok) {
//         const data = await response.json();
//         if (data.url) {
//           window.location.href = data.url;
//         }
//       } else {
//         throw new Error(`${provider} login failed`);
//       }
//     } catch (error) {
//       setSnackbar({ open: true, message: error.message, severity: 'error' });
//     }
//   }, []);

//   const containerVariants = useMemo(() => ({
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: { 
//       opacity: 1, 
//       scale: 1,
//       transition: { 
//         duration: 0.5, 
//         ease: "easeOut",
//         staggerChildren: 0.1,
//         delayChildren: 0.3
//       }
//     },
//     exit: { 
//       opacity: 0, 
//       scale: 0.8, 
//       transition: { 
//         duration: 0.5, 
//         ease: "easeIn" 
//       } 
//     }
//   }), []);

//   const itemVariants = useMemo(() => ({
//     hidden: { opacity: 0, y: 20 },
//     visible: { 
//       opacity: 1, 
//       y: 0,
//       transition: { duration: 0.5, ease: "easeOut" }
//     }
//   }), []);

//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <Box
//         display="flex"
//         flexDirection="column"
//         justifyContent="center"
//         alignItems="center"
//         minHeight="100vh"
//         width="100%"
//         p={2}
//       >
//         <motion.div
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           <Button
//             variant="contained"
//             onClick={handleModalToggle}
//             startIcon={<PersonIcon />}
//             sx={{ 
//               backgroundColor: 'primary.main',
//               '&:hover': {
//                 backgroundColor: 'primary.dark',
//               }
//             }}
//           >
//             Sign In
//           </Button>
//         </motion.div>
//         <AnimatePresence>
//           {isModalOpen && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.3 }}
//               style={{
//                 position: 'fixed',
//                 top: 0,
//                 left: 0,
//                 right: 0,
//                 bottom: 0,
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 background: 'rgba(0, 0, 0, 0.5)',
//                 zIndex: 1000,
//                 padding: isMobile ? 0 : '16px',
//                 transition: 'all 0.3s ease-in-out',
//               }}
//               onClick={handleModalToggle}
//             >
//               <motion.div
//                 onClick={(e) => e.stopPropagation()}
//                 variants={containerVariants}
//                 initial="hidden"
//                 animate="visible"
//                 exit="exit"
//               >
//                 <Card
//                   sx={{
//                     width: isMobile ? '100%' : isTablet ? '90%' : '800px',
//                     maxWidth: '100%',
//                     height: isMobile ? 'auto' : 'auto',
//                     minHeight: isMobile ? '100%' : 'auto',
//                     maxHeight: isMobile ? '100%' : '90vh',
//                     display: 'flex',
//                     flexDirection: isMobile ? 'column' : 'row',
//                     overflow: 'auto',
//                     borderRadius: isMobile ? 0 : '20px',
//                     transition: 'all 0.3s ease-in-out',
//                   }}
//                 >
//                   <Box
//                     sx={{
//                       width: isMobile ? '100%' : '40%',
//                       minHeight: isMobile ? '150px' : 'auto',
//                       background: 'linear-gradient(135deg, #00796B 0%, #48A999 100%)',
//                       display: 'flex',
//                       flexDirection: 'column',
//                       alignItems: 'center',
//                       justifyContent: 'center',
//                       color: 'white',
//                       p: isMobile ? 2 : 4,
//                       position: 'relative',
//                       overflow: 'hidden',
//                     }}
//                   >
//                     <motion.div variants={itemVariants}>
//                       <Typography variant="h5" fontWeight="bold" mb={1}>
//                         {isSignUp ? 'Join Us!' : 'Welcome Back!'}
//                       </Typography>
//                     </motion.div>
//                     <motion.div variants={itemVariants}>
//                       <Typography variant="body2" textAlign="center" mb={2}>
//                         {isSignUp
//                           ? 'Already have an account?'
//                           : "Don't have an account yet?"}
//                       </Typography>
//                     </motion.div>
//                     <motion.div
//                       variants={itemVariants}
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                     >
//                       <Button
//                         variant="outlined"
//                         onClick={() => setIsSignUp(!isSignUp)}
//                         sx={{
//                           color: 'white',
//                           borderColor: 'white',
//                           '&:hover': {
//                             borderColor: 'white',
//                             backgroundColor: 'rgba(255,255,255,0.1)',
//                           },
//                         }}
//                       >
//                         {isSignUp ? 'Sign In' : 'Sign Up'}
//                       </Button>
//                     </motion.div>
//                   </Box>
//                   <Box
//                     sx={{
//                       width: isMobile ? '100%' : '60%',
//                       height: isMobile ? 'auto' : 'auto',
//                       p: isExtraSmall ? 2 : isMobile ? 3 : 4,
//                       display: 'flex',
//                       flexDirection: 'column',
//                       alignItems: 'center',
//                       bgcolor: 'background.paper',
//                       position: 'relative',
//                       overflow: 'auto',
//                       transition: 'all 0.3s ease-in-out',
//                     }}
//                   >
//                     <AnimatePresence mode="wait">
//                       <motion.div
//                         key={isSignUp ? 'signup' : 'signin'}
//                         variants={containerVariants}
//                         initial="hidden"
//                         animate="visible"
//                         exit="exit"
//                         style={{
//                           width: '100%',
//                           display: 'flex',
//                           flexDirection: 'column',
//                           alignItems: 'center',
//                         }}
//                       >
//                         <motion.div variants={itemVariants}>
//                           <Typography variant={isMobile ? "h6" : "h5"} color="primary" fontWeight="bold" mb={isMobile ? 2 : 4}>
//                             {isOtpVerification ? 'Verify OTP' : (isSignUp ? 'Create Account' : 'Login')}
//                           </Typography>
//                         </motion.div>
//                         {isOtpVerification ? (
//                           <Box component="form" onSubmit={handleOtpSubmit} width="100%" maxWidth="400px">
//                             <motion.div variants={itemVariants}>
//                               <Typography variant="body1" align="center" gutterBottom>
//                                 Enter the 6-digit OTP sent to your email
//                               </Typography>
//                             </motion.div>
//                             <motion.div variants={itemVariants}>
//                               <OtpInput otp={otp} setOtp={setOtp} />
//                             </motion.div>
//                             <motion.div
//                               variants={itemVariants}
//                               whileHover={{ scale: 1.02 }}
//                               whileTap={{ scale: 0.98 }}
//                             >
//                               <Button
//                                 type="submit"
//                                 fullWidth
//                                 variant="contained"
//                                 disabled={isSubmitting || otp.some(digit => digit === '')}
//                                 sx={{
//                                   mt: 3,
//                                   mb: 2,
//                                   backgroundColor: 'primary.main',
//                                   '&:hover': {
//                                     backgroundColor: 'primary.dark',
//                                   },
//                                 }}
//                               >
//                                 {isSubmitting ? <CircularProgress size={24} /> : 'Verify OTP'}
//                               </Button>
//                             </motion.div>
//                           </Box>
//                         ) : (
//                           <Box component="form" onSubmit={onSubmit} width="100%" maxWidth={isMobile ? "100%" : "400px"}>
//                             {isSignUp && (
//                               <Grid container spacing={isExtraSmall ? 1 : isMobile ? 1.5 : 2}>
//                                 <Grid item xs={12} sm={isMobile ? 12 : 6}>
//                                   <InputField
//                                     name="firstName"
//                                     label="First Name"
//                                     icon={PersonIcon}
//                                     value={formData.firstName}
//                                     onChange={handleInputChange}
//                                     error={formErrors.firstName}
//                                     isExtraSmall={isExtraSmall}
//                                     isMobile={isMobile}
//                                     fullWidth
//                                   />
//                                 </Grid>
//                                 <Grid item xs={12} sm={isMobile ? 12 : 6}>
//                                   <InputField
//                                     name="lastName"
//                                     label="Last Name"
//                                     icon={PersonIcon}
//                                     value={formData.lastName}
//                                     onChange={handleInputChange}
//                                     error={formErrors.lastName}
//                                     isExtraSmall={isExtraSmall}
//                                     isMobile={isMobile}
//                                     fullWidth
//                                   />
//                                 </Grid>
//                               </Grid>
//                             )}
//                             <InputField
//                               name="email"
//                               label="Email"
//                               icon={EmailIcon}
//                               value={formData.email}
//                               onChange={handleInputChange}
//                               error={formErrors.email}
//                               isExtraSmall={isExtraSmall}
//                               isMobile={isMobile}
//                               fullWidth
//                             />
//                             <InputField
//                               name="password"
//                               label={isSignUp ? "New Password" : "Password"}
//                               type={showPassword ? "text" : "password"}
//                               icon={LockIcon}
//                               value={formData.password}
//                               onChange={handleInputChange}
//                               error={formErrors.password}
//                               isExtraSmall={isExtraSmall}
//                               isMobile={isMobile}
//                               InputProps={{
//                                 endAdornment: (
//                                   <InputAdornment position="end">
//                                     <IconButton 
//                                       onClick={togglePasswordVisibility}
//                                       edge="end"
//                                       aria-label={showPassword ? "Hide password" : "Show password"}
//                                     >
//                                       {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
//                                     </IconButton>
//                                   </InputAdornment>
//                                 ),
//                               }}
//                               fullWidth
//                             />
//                             {isSignUp && (
//                               <>
//                                 <PasswordStrengthMeter password={formData.password} />
//                                 <InputField
//                                   name="confirmPassword"
//                                   label="Confirm Password"
//                                   type={showConfirmPassword ? "text" : "password"}
//                                   icon={LockIcon}
//                                   value={formData.confirmPassword}
//                                   onChange={handleInputChange}
//                                   error={formErrors.confirmPassword}
//                                   isExtraSmall={isExtraSmall}
//                                   isMobile={isMobile}
//                                   InputProps={{
//                                     endAdornment: (
//                                       <InputAdornment position="end">
//                                         <IconButton 
//                                           onClick={toggleConfirmPasswordVisibility}
//                                           edge="end"
//                                           aria-label={showConfirmPassword ? "Hide password" : "Show password"}
//                                         >
//                                           {showConfirmPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
//                                         </IconButton>
//                                       </InputAdornment>
//                                     ),
//                                   }}
//                                   fullWidth
//                                 />
//                               </>
//                             )}
//                             <motion.div variants={itemVariants}>
//                               <Box 
//                                 sx={{ 
//                                   display: 'flex', 
//                                   flexDirection: isMobile ? 'column' : 'row',
//                                   justifyContent: 'space-between', 
//                                   alignItems: isMobile ? 'flex-start' : 'center', 
//                                   mb: 2,
//                                   gap: isMobile ? 1 : 0
//                                 }}
//                               >
//                                 <FormControlLabel
//                                   control={
//                                     <Checkbox
//                                       checked={rememberMe}
//                                       onChange={(e) => setRememberMe(e.target.checked)}
//                                       color="primary"
//                                     />
//                                   }
//                                   label={<Typography variant={isMobile ? "body2" : "body1"}>Remember me</Typography>}
//                                 />
//                                 {!isSignUp && (
//                                   <Link
//                                     component="button"
//                                     variant="body2"
//                                     onClick={(e) => {
//                                       e.preventDefault();
//                                       setSnackbar({ open: true, message: 'Password reset email sent!', severity: 'success' });
//                                     }}
//                                     sx={{ fontSize: isMobile ? '0.875rem' : '1rem' }}
//                                   >
//                                     Forgot Password?
//                                   </Link>
//                                 )}
//                               </Box>
//                             </motion.div>
//                             <motion.div
//                               variants={itemVariants}
//                               whileHover={{ scale: 1.02 }}
//                               whileTap={{ scale: 0.98 }}
//                             >
//                               <Button
//                                 type="submit"
//                                 fullWidth
//                                 variant="contained"
//                                 disabled={isSubmitting}
//                                 sx={{
//                                   mt: isExtraSmall ? 1 : isMobile ? 2 : 3,
//                                   mb: isExtraSmall ? 1 : isMobile ? 1 : 2,
//                                   py: isExtraSmall ? 1 : isMobile ? 1.5 : 2,
//                                   backgroundColor: 'primary.main',
//                                   '&:hover': {
//                                     backgroundColor: 'primary.dark',
//                                   },
//                                   transition: 'all 0.3s ease-in-out',
//                                   fontSize: isMobile ? '0.875rem' : '1rem',
//                                 }}
//                               >
//                                 {isSubmitting ? <CircularProgress size={20} /> : (isSignUp ? 'Sign Up' : 'Login')}
//                               </Button>
//                             </motion.div>
//                             <Divider sx={{ my: 2 }}>
//                               <Typography variant="body2" color="text.secondary">
//                                 Or continue with
//                               </Typography>
//                             </Divider>
//                             <Grid container spacing={2}>
//                               <Grid item xs={6}>
//                                 <Button
//                                   fullWidth
//                                   variant="outlined"
//                                   startIcon={<GoogleIcon />}
//                                   onClick={() => handleSocialLogin('google')}
//                                   sx={{ borderColor: '#DB4437', color: '#DB4437' }}
//                                 >
//                                   Google
//                                 </Button>
//                               </Grid>
//                               <Grid item xs={6}>
//                                 <Button
//                                   fullWidth
//                                   variant="outlined"
//                                   startIcon={<GitHubIcon />}
//                                   onClick={() => handleSocialLogin('github')}
//                                   sx={{ borderColor: '#333', color: '#333' }}
//                                 >
//                                   GitHub
//                                 </Button>
//                               </Grid>
//                             </Grid>
//                           </Box>
//                         )}
//                       </motion.div>
//                     </AnimatePresence>
//                   </Box>
//                 </Card>
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//         <Box mt={2}>
//           <Button
//             component={RouterLink}
//             to="/student-portal"
//             variant="outlined"
//             color="primary"
//             startIcon={<SchoolIcon />}
//           >
//             Open Student Portal
//           </Button>
//         </Box>
//         <Snackbar open={snackbar.open} autoHideDuration={6000} onClose={handleCloseSnackbar}>
//           <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: '100%' }}>
//             {snackbar.message}
//           </Alert>
//         </Snackbar>
//         <Dialog open={errorDialog.open} onClose={handleCloseErrorDialog}>
//           <DialogTitle>{errorDialog.title}</DialogTitle>
//           <DialogContent>
//             <DialogContentText>{errorDialog.message}</DialogContentText>
//           </DialogContent>
//           <DialogActions>
//             <Button onClick={handleCloseErrorDialog}>Close</Button>
//           </DialogActions>
//         </Dialog>
//       </Box>
//     </ThemeProvider>
//   );
// };

// export default LoginPage;



// import React, { useState, useCallback, useRef, useMemo } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useNavigate, Link as RouterLink } from 'react-router-dom';
// import { 
//   Person as PersonIcon, 
//   Email as EmailIcon, 
//   Lock as LockIcon, 
//   Visibility as VisibilityIcon, 
//   VisibilityOff as VisibilityOffIcon,
//   School as SchoolIcon,
//   Google as GoogleIcon,
//   GitHub as GitHubIcon
// } from '@mui/icons-material';
// import { 
//   Button, 
//   TextField, 
//   InputAdornment, 
//   IconButton, 
//   Typography, 
//   Box, 
//   Card,
//   ThemeProvider, 
//   createTheme, 
//   CssBaseline,
//   useMediaQuery,
//   Checkbox,
//   FormControlLabel,
//   CircularProgress,
//   Grid,
//   Snackbar,
//   Alert,
//   LinearProgress,
//   Divider,
//   Link,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogContentText,
//   DialogActions
// } from '@mui/material';

// // Theme definition
// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#00796B',
//       light: '#48A999',
//       dark: '#004C40',
//     },
//     secondary: {
//       main: '#FF6E40',
//       light: '#FFA06D',
//       dark: '#C53D13',
//     },
//     background: {
//       default: '#E0F2F1',
//       paper: '#FFFFFF',
//     },
//   },
//   typography: {
//     fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
//     h4: {
//       fontWeight: 700,
//     },
//     button: {
//       textTransform: 'none',
//       fontWeight: 600,
//     },
//   },
//   shape: {
//     borderRadius: 12,
//   },
//   components: {
//     MuiTextField: {
//       styleOverrides: {
//         root: {
//           '& .MuiOutlinedInput-root': {
//             borderRadius: 12,
//             backgroundColor: '#F5F5F5',
//             '&:hover fieldset': {
//               borderColor: '#00796B',
//             },
//             '&.Mui-focused fieldset': {
//               borderColor: '#00796B',
//             },
//           },
//         },
//       },
//     },
//     MuiButton: {
//       styleOverrides: {
//         root: {
//           borderRadius: 25,
//           padding: '10px 20px',
//           boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//           transition: 'all 0.3s ease',
//           '&:hover': {
//             transform: 'translateY(-2px)',
//             boxShadow: '0 6px 8px rgba(0, 0, 0, 0.15)',
//           },
//         },
//       },
//     },
//     MuiCard: {
//       styleOverrides: {
//         root: {
//           boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
//           overflow: 'visible',
//         },
//       },
//     },
//   },
// });

// // Password strength meter component
// const PasswordStrengthMeter = ({ password }) => {
//   const calculateStrength = (pwd) => {
//     let strength = 0;
//     if (pwd.length > 7) strength++;
//     if (pwd.match(/[a-z]/) && pwd.match(/[A-Z]/)) strength++;
//     if (pwd.match(/\d/)) strength++;
//     if (pwd.match(/[^a-zA-Z\d]/)) strength++;
//     return strength;
//   };

//   const strength = calculateStrength(password);
//   const color = ['#f00', '#f90', '#ff0', '#9f0', '#0f0'][strength];

//   return (
//     <Box sx={{ width: '100%', mt: 1 }}>
//       <LinearProgress
//         variant="determinate"
//         value={(strength / 4) * 100}
//         sx={{
//           height: 10,
//           borderRadius: 5,
//           '& .MuiLinearProgress-bar': {
//             backgroundColor: color,
//           },
//         }}
//       />
//       <Typography variant="caption" sx={{ color: 'text.secondary' }}>
//         {['Weak', 'Fair', 'Good', 'Strong', 'Very Strong'][strength]}
//       </Typography>
//     </Box>
//   );
// };

// // InputField component with enhanced animation
// const InputField = React.memo(({ icon: Icon, error, isExtraSmall, isMobile, ...props }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 20 }}
//     animate={{ opacity: 1, y: 0 }}
//     exit={{ opacity: 0, y: -20 }}
//     transition={{ duration: 0.5, ease: "easeInOut" }}
//   >
//     <TextField
//       fullWidth
//       variant="outlined"
//       margin={isExtraSmall ? "dense" : "normal"}
//       InputProps={{
//         startAdornment: (
//           <InputAdornment position="start">
//             <Icon sx={{ color: error ? 'error.main' : 'text.secondary', fontSize: isMobile ? '1.2rem' : '1.5rem' }} />
//           </InputAdornment>
//         ),
//       }}
//       error={!!error}
//       helperText={error}
//       sx={{
//         '& .MuiOutlinedInput-root': {
//           backgroundColor: '#F5F5F5',
//           transition: 'all 0.3s ease-in-out',
//           fontSize: isMobile ? '0.9rem' : '1rem',
//         },
//         '& .MuiInputLabel-root': {
//           fontSize: isMobile ? '0.9rem' : '1rem',
//         },
//         '& .MuiFormHelperText-root': {
//           fontSize: isMobile ? '0.7rem' : '0.75rem',
//         },
//         mb: isExtraSmall ? 1 : isMobile ? 1.5 : 2,
//       }}
//       {...props}
//     />
//   </motion.div>
// ));

// // OtpInput component
// const OtpInput = React.memo(({ otp, setOtp }) => {
//   const inputRefs = useRef([]);

//   const handleChange = useCallback((element, index) => {
//     if (isNaN(element.value)) return false;
//     const newOtp = [...otp];
//     newOtp[index] = element.value;
//     setOtp(newOtp);
//     if (element.value !== '' && index < 5) {
//       inputRefs.current[index + 1].focus();
//     }
//   }, [otp, setOtp]);

//   const handleKeyDown = useCallback((e, index) => {
//     if (e.key === 'Backspace' && index > 0 && otp[index] === '') {
//       inputRefs.current[index - 1].focus();
//     }
//   }, [otp]);

//   const handlePaste = useCallback((e) => {
//     e.preventDefault();
//     const pastedData = e.clipboardData.getData('text').slice(0, 6).split('');
//     const newOtp = [...otp];
//     pastedData.forEach((value, index) => {
//       if (index < 6 && !isNaN(value)) {
//         newOtp[index] = value;
//       }
//     });
//     setOtp(newOtp);
//     if (pastedData.length === 6) {
//       inputRefs.current[5].focus();
//     } else {
//       inputRefs.current[pastedData.length].focus();
//     }
//   }, [otp, setOtp]);

//   return (
//     <Box display="flex" justifyContent="center" my={2}>
//       {otp.map((digit, index) => (
//         <motion.div
//           key={index}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3, delay: index * 0.1 }}
//         >
//           <TextField
//             inputRef={(el) => (inputRefs.current[index] = el)}
//             variant="outlined"
//             margin="dense"
//             value={digit}
//             onChange={(e) => handleChange(e.target, index)}
//             onKeyDown={(e) => handleKeyDown(e, index)}
//             onPaste={handlePaste}
//             inputProps={{
//               maxLength: 1,
//               style: { textAlign: 'center', fontSize: '1.5rem' },
//             }}
//             sx={{ width: '3rem', mx: 0.5 }}
//           />
//         </motion.div>
//       ))}
//     </Box>
//   );
// });

// // Main LoginPage component
// const LoginPage = () => {
//   const navigate = useNavigate();
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [isSignUp, setIsSignUp] = useState(false);
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//   });
//   const [formErrors, setFormErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [rememberMe, setRememberMe] = useState(false);
//   const [isOtpVerification, setIsOtpVerification] = useState(false);
//   const [otp, setOtp] = useState(new Array(6).fill(""));
//   const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
//   const [errorDialog, setErrorDialog] = useState({ open: false, title: '', message: '' });

//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
//   const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
//   const isExtraSmall = useMediaQuery(theme.breakpoints.down('xs'));

//   const signUp = async (userData) => {
//     const response = await fetch('/api/register', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         firstname: userData.firstName,
//         lastname: userData.lastName,
//         mail: userData.email,
//         password: userData.password,
//         confirmpassword: userData.confirmPassword
//       }),
//     });

//     if (!response.ok) {
//       const errorData = await response.json();
//       throw new Error(errorData.message || 'Signup failed');
//     }

//     return response.json();
//   };

//   const signIn = async (userData) => {
//     const response = await fetch('/api/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         mail: userData.email,
//         password: userData.password,
//       }),
//     });

//     if (!response.ok) {
//       const errorData = await response.json();
//       throw new Error(errorData.message || 'Login failed');
//     }

//     return response.json();
//   };

//   const handleModalToggle = useCallback(() => {
//     setIsModalOpen((prev) => !prev);
//     setFormData({ firstName: '', lastName: '', email: '', password: '', confirmPassword: '' });
//     setFormErrors({});
//     setIsOtpVerification(false);
//     setOtp(new Array(6).fill(""));
//     setErrorDialog({ open: false, title: '', message: '' });
//   }, []);

//   const handleInputChange = useCallback((e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     if (formErrors[name]) {
//       setFormErrors((prev) => ({ ...prev, [name]: undefined }));
//     }
//   }, [formErrors]);

//   const validateForm = useCallback(() => {
//     const errors = {};
//     if (isSignUp) {
//       if (!formData.firstName) errors.firstName = 'First name is required';
//       if (!formData.lastName) errors.lastName = 'Last name is required';
//     }
//     if (!formData.email) {
//       errors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       errors.email = 'Email is invalid';
//     }
//     if (!formData.password) {
//       errors.password = 'Password is required';
//     } else if (formData.password.length < 8) {
//       errors.password = 'Password must be at least 8 characters';
//     }
//     if (isSignUp) {
//       if (!formData.confirmPassword) {
//         errors.confirmPassword = 'Please confirm your password';
//       } else if (formData.password !== formData.confirmPassword) {
//         errors.confirmPassword = 'Passwords do not match';
//       }
//     }
//     setFormErrors(errors);
//     return Object.keys(errors).length === 0;
//   }, [formData, isSignUp]);

//   const generateOtp = useCallback(async () => {
//     try {
//       const response = await fetch('/api/otp-generate', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           mail: formData.email,
//         }),
//       });

//       if (!response.ok) {
//         throw new Error('OTP generation failed');
//       }

//       setSnackbar({ open: true, message: 'OTP sent to your email!', severity: 'success' });
//       setIsOtpVerification(true);
//     } catch (error) {
//       setSnackbar({ open: true, message: 'Failed to generate OTP. Please try again.', severity: 'error' });
//     }
//   }, [formData.email]);

//   const onSubmit = useCallback(async (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       setIsSubmitting(true);
//       try {
//         if (isSignUp) {
//           await signUp(formData);
//           await generateOtp();
//         } else {
//           const data = await signIn(formData);
//           if (data.requiresOtp) {
//             await generateOtp();
//           } else {
//             setSnackbar({ open: true, message: 'Logged in successfully!', severity: 'success' });
//             setTimeout(() => {
//               navigate('/student-portal');
//             }, 1500);
//           }
//         }
//       } catch (error) {
//         if (error.message.includes('Login failed') || error.message.includes('Signup failed')) {
//           setErrorDialog({ 
//             open: true, 
//             title: isSignUp ? 'Signup Error' : 'Login Error', 
//             message: error.message || 'An error occurred. Please try again.' 
//           });
//         } else {
//           setSnackbar({ open: true, message: error.message || 'An error occurred. Please try again.', severity: 'error' });
//         }
//       } finally {
//         setIsSubmitting(false);
//       }
//     }
//   }, [formData, isSignUp, validateForm, generateOtp, signUp, signIn, navigate]);

//   const handleOtpSubmit = useCallback(async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     try {
//       const response = await fetch('/api/otp-validate', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           mail: formData.email,
//           otp: otp.join(''),
//         }),
//       });

//       if (!response.ok) {
//         throw new Error('OTP verification failed');
//       }

//       setSnackbar({ open: true, message: isSignUp ? 'Account created successfully!' : 'Logged in successfully!', severity: 'success' });
//       handleModalToggle();
//       navigate('/student-portal');
//     } catch (error) {
//       setSnackbar({ open: true, message: 'OTP verification failed. Please try again.', severity: 'error' });
//     } finally {
//       setIsSubmitting(false);
//     }
//   }, [formData.email, handleModalToggle, isSignUp, otp, navigate]);

//   const togglePasswordVisibility = useCallback(() => {
//     setShowPassword((prev) => !prev);
//   }, []);

//   const toggleConfirmPasswordVisibility = useCallback(() => {
//     setShowConfirmPassword((prev) => !prev);
//   }, []);

//   const handleCloseSnackbar = useCallback(() => {
//     setSnackbar((prev) => ({ ...prev, open: false }));
//   }, []);

//   const handleCloseErrorDialog = useCallback(() => {
//     setErrorDialog((prev) => ({ ...prev, open: false }));
//   }, []);

//   const handleSocialLogin = useCallback(async (provider) => {
//     try {
//       const response = await fetch(`/api/auth/${provider}`);
//       if (response.ok) {
//         const data = await response.json();
//         if (data.url) {
//           window.location.href = data.url;
//         }
//       } else {
//         throw new Error(`${provider} login failed`);
//       }
//     } catch (error) {
//       setSnackbar({ open: true, message: error.message, severity: 'error' });
//     }
//   }, []);

//   const containerVariants = useMemo(() => ({
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: { 
//       opacity: 1, 
//       scale: 1,
//       transition: { 
//         duration: 0.5, 
//         ease: "easeOut",
//         staggerChildren: 0.1,
//         delayChildren: 0.3
//       }
//     },
//     exit: { 
//       opacity: 0, 
//       scale: 0.8, 
//       transition: { 
//         duration: 0.5, 
//         ease: "easeIn" 
//       } 
//     }
//   }), []);

//   const itemVariants = useMemo(() => ({
//     hidden: { opacity: 0, y: 20 },
//     visible: { 
//       opacity: 1, 
//       y: 0,
//       transition: { duration: 0.5, ease: "easeOut" }
//     }
//   }), []);

//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <Box
//         display="flex"
//         flexDirection="column"
//         justifyContent="center"
//         alignItems="center"
//         minHeight="100vh"
//         width="100%"
//         p={2}
//       >
//         <motion.div
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           <Button
//             variant="contained"
//             onClick={handleModalToggle}
//             startIcon={<PersonIcon />}
//             sx={{ 
//               backgroundColor: 'primary.main',
//               '&:hover': {
//                 backgroundColor: 'primary.dark',
//               }
//             }}
//           >
//             Sign In
//           </Button>
//         </motion.div>
//         <AnimatePresence>
//           {isModalOpen && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.3 }}
//               style={{
//                 position: 'fixed',
//                 top: 0,
//                 left: 0,
//                 right: 0,
//                 bottom: 0,
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 background: 'rgba(0, 0, 0, 0.5)',
//                 zIndex: 1000,
//                 padding: isMobile ? 0 : '16px',
//                 transition: 'all 0.3s ease-in-out',
//               }}
//               onClick={handleModalToggle}
//             >
//               <motion.div
//                 onClick={(e) => e.stopPropagation()}
//                 variants={containerVariants}
//                 initial="hidden"
//                 animate="visible"
//                 exit="exit"
//               >
//                 <Card
//                   sx={{
//                     width: isMobile ? '100%' : isTablet ? '90%' : '800px',
//                     maxWidth: '100%',
//                     height: isMobile ? 'auto' : 'auto',
//                     minHeight: isMobile ? '100%' : 'auto',
//                     maxHeight: isMobile ? '100%' : '90vh',
//                     display: 'flex',
//                     flexDirection: isMobile ? 'column' : 'row',
//                     overflow: 'auto',
//                     borderRadius: isMobile ? 0 : '20px',
//                     transition: 'all 0.3s ease-in-out',
//                   }}
//                 >
//                   <Box
//                     sx={{
//                       width: isMobile ? '100%' : '40%',
//                       minHeight: isMobile ? '150px' : 'auto',
//                       background: 'linear-gradient(135deg, #00796B 0%, #48A999 100%)',
//                       display: 'flex',
//                       flexDirection: 'column',
//                       alignItems: 'center',
//                       justifyContent: 'center',
//                       color: 'white',
//                       p: isMobile ? 2 : 4,
//                       position: 'relative',
//                       overflow: 'hidden',
//                     }}
//                   >
//                     <motion.div variants={itemVariants}>
//                       <Typography variant="h5" fontWeight="bold" mb={1}>
//                         {isSignUp ? 'Join Us!' : 'Welcome Back!'}
//                       </Typography>
//                     </motion.div>
//                     <motion.div variants={itemVariants}>
//                       <Typography variant="body2" textAlign="center" mb={2}>
//                         {isSignUp
//                           ? 'Already have an account?'
//                           : "Don't have an account yet?"}
//                       </Typography>
//                     </motion.div>
//                     <motion.div
//                       variants={itemVariants}
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                     >
//                       <Button
//                         variant="outlined"
//                         onClick={() => setIsSignUp(!isSignUp)}
//                         sx={{
//                           color: 'white',
//                           borderColor: 'white',
//                           '&:hover': {
//                             borderColor: 'white',
//                             backgroundColor: 'rgba(255,255,255,0.1)',
//                           },
//                         }}
//                       >
//                         {isSignUp ? 'Sign In' : 'Sign Up'}
//                       </Button>
//                     </motion.div>
//                   </Box>
//                   <Box
//                     sx={{
//                       width: isMobile ? '100%' : '60%',
//                       height: isMobile ? 'auto' : 'auto',
//                       p: isExtraSmall ? 2 : isMobile ? 3 : 4,
//                       display: 'flex',
//                       flexDirection: 'column',
//                       alignItems: 'center',
//                       bgcolor: 'background.paper',
//                       position: 'relative',
//                       overflow: 'auto',
//                       transition: 'all 0.3s ease-in-out',
//                     }}
//                   >
//                     <AnimatePresence mode="wait">
//                       <motion.div
//                         key={isSignUp ? 'signup' : 'signin'}
//                         variants={containerVariants}
//                         initial="hidden"
//                         animate="visible"
//                         exit="exit"
//                         style={{
//                           width: '100%',
//                           display: 'flex',
//                           flexDirection: 'column',
//                           alignItems: 'center',
//                         }}
//                       >
//                         <motion.div variants={itemVariants}>
//                           <Typography variant={isMobile ? "h6" : "h5"} color="primary" fontWeight="bold" mb={isMobile ? 2 : 4}>
//                             {isOtpVerification ? 'Verify OTP' : (isSignUp ? 'Create Account' : 'Login')}
//                           </Typography>
//                         </motion.div>
//                         {isOtpVerification ? (
//                           <Box component="form" onSubmit={handleOtpSubmit} width="100%" maxWidth="400px">
//                             <motion.div variants={itemVariants}>
//                               <Typography variant="body1" align="center" gutterBottom>
//                                 Enter the 6-digit OTP sent to your email
//                               </Typography>
//                             </motion.div>
//                             <motion.div variants={itemVariants}>
//                               <OtpInput otp={otp} setOtp={setOtp} />
//                             </motion.div>
//                             <motion.div
//                               variants={itemVariants}
//                               whileHover={{ scale: 1.02 }}
//                               whileTap={{ scale: 0.98 }}
//                             >
//                               <Button
//                                 type="submit"
//                                 fullWidth
//                                 variant="contained"
//                                 disabled={isSubmitting || otp.some(digit => digit === '')}
//                                 sx={{
//                                   mt: 3,
//                                   mb: 2,
//                                   backgroundColor: 'primary.main',
//                                   '&:hover': {
//                                     backgroundColor: 'primary.dark',
//                                   },
//                                 }}
//                               >
//                                 {isSubmitting ? <CircularProgress size={24} /> : 'Verify OTP'}
//                               </Button>
//                             </motion.div>
//                           </Box>
//                         ) : (
//                           <Box component="form" onSubmit={onSubmit} width="100%" maxWidth={isMobile ? "100%" : "400px"}>
//                             {isSignUp && (
//                               <Grid container spacing={isExtraSmall ? 1 : isMobile ? 1.5 : 2}>
//                                 <Grid item xs={12} sm={isMobile ? 12 : 6}>
//                                   <InputField
//                                     name="firstName"
//                                     label="First Name"
//                                     icon={PersonIcon}
//                                     value={formData.firstName}
//                                     onChange={handleInputChange}
//                                     error={formErrors.firstName}
//                                     isExtraSmall={isExtraSmall}
//                                     isMobile={isMobile}
//                                     fullWidth
//                                   />
//                                 </Grid>
//                                 <Grid item xs={12} sm={isMobile ? 12 : 6}>
//                                   <InputField
//                                     name="lastName"
//                                     label="Last Name"
//                                     icon={PersonIcon}
//                                     value={formData.lastName}
//                                     onChange={handleInputChange}
//                                     error={formErrors.lastName}
//                                     isExtraSmall={isExtraSmall}
//                                     isMobile={isMobile}
//                                     fullWidth
//                                   />
//                                 </Grid>
//                               </Grid>
//                             )}
//                             <InputField
//                               name="email"
//                               label="Email"
//                               icon={EmailIcon}
//                               value={formData.email}
//                               onChange={handleInputChange}
//                               error={formErrors.email}
//                               isExtraSmall={isExtraSmall}
//                               isMobile={isMobile}
//                               fullWidth
//                             />
//                             <InputField
//                               name="password"
//                               label={isSignUp ? "New Password" : "Password"}
//                               type={showPassword ? "text" : "password"}
//                               icon={LockIcon}
//                               value={formData.password}
//                               onChange={handleInputChange}
//                               error={formErrors.password}
//                               isExtraSmall={isExtraSmall}
//                               isMobile={isMobile}
//                               InputProps={{
//                                 endAdornment: (
//                                   <InputAdornment position="end">
//                                     <IconButton 
//                                       onClick={togglePasswordVisibility}
//                                       edge="end"
//                                       aria-label={showPassword ? "Hide password" : "Show password"}
//                                     >
//                                       {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
//                                     </IconButton>
//                                   </InputAdornment>
//                                 ),
//                               }}
//                               fullWidth
//                             />
//                             {isSignUp && (
//                               <>
//                                 <PasswordStrengthMeter password={formData.password} />
//                                 <InputField
//                                   name="confirmPassword"
//                                   label="Confirm Password"
//                                   type={showConfirmPassword ? "text" : "password"}
//                                   icon={LockIcon}
//                                   value={formData.confirmPassword}
//                                   onChange={handleInputChange}
//                                   error={formErrors.confirmPassword}
//                                   isExtraSmall={isExtraSmall}
//                                   isMobile={isMobile}
//                                   InputProps={{
//                                     endAdornment: (
//                                       <InputAdornment position="end">
//                                         <IconButton 
//                                           onClick={toggleConfirmPasswordVisibility}
//                                           edge="end"
//                                           aria-label={showConfirmPassword ? "Hide password" : "Show password"}
//                                         >
//                                           {showConfirmPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
//                                         </IconButton>
//                                       </InputAdornment>
//                                     ),
//                                   }}
//                                   fullWidth
//                                 />
//                               </>
//                             )}
//                             <motion.div variants={itemVariants}>
//                               <Box 
//                                 sx={{ 
//                                   display: 'flex', 
//                                   flexDirection: isMobile ? 'column' : 'row',
//                                   justifyContent: 'space-between', 
//                                   alignItems: isMobile ? 'flex-start' : 'center', 
//                                   mb: 2,
//                                   gap: isMobile ? 1 : 0
//                                 }}
//                               >
//                                 <FormControlLabel
//                                   control={
//                                     <Checkbox
//                                       checked={rememberMe}
//                                       onChange={(e) => setRememberMe(e.target.checked)}
//                                       color="primary"
//                                     />
//                                   }
//                                   label={<Typography variant={isMobile ? "body2" : "body1"}>Remember me</Typography>}
//                                 />
//                                 {!isSignUp && (
//                                   <Link
//                                     component="button"
//                                     variant="body2"
//                                     onClick={(e) => {
//                                       e.preventDefault();
//                                       setSnackbar({ open: true, message: 'Password reset email sent!', severity: 'success' });
//                                     }}
//                                     sx={{ fontSize: isMobile ? '0.875rem' : '1rem' }}
//                                   >
//                                     Forgot Password?
//                                   </Link>
//                                 )}
//                               </Box>
//                             </motion.div>
//                             <motion.div
//                               variants={itemVariants}
//                               whileHover={{ scale: 1.02 }}
//                               whileTap={{ scale: 0.98 }}
//                             >
//                               <Button
//                                 type="submit"
//                                 fullWidth
//                                 variant="contained"
//                                 disabled={isSubmitting}
//                                 sx={{
//                                   mt: isExtraSmall ? 1 : isMobile ? 2 : 3,
//                                   mb: isExtraSmall ? 1 : isMobile ? 1 : 2,
//                                   py: isExtraSmall ? 1 : isMobile ? 1.5 : 2,
//                                   backgroundColor: 'primary.main',
//                                   '&:hover': {
//                                     backgroundColor: 'primary.dark',
//                                   },
//                                   transition: 'all 0.3s ease-in-out',
//                                   fontSize: isMobile ? '0.875rem' : '1rem',
//                                 }}
//                               >
//                                 {isSubmitting ? <CircularProgress size={20} /> : (isSignUp ? 'Sign Up' : 'Login')}
//                               </Button>
//                             </motion.div>
//                             <Divider sx={{ my: 2 }}>
//                               <Typography variant="body2" color="text.secondary">
//                                 Or continue with
//                               </Typography>
//                             </Divider>
//                             <Grid container spacing={2}>
//                               <Grid item xs={6}>
//                                 <Button
//                                   fullWidth
//                                   variant="outlined"
//                                   startIcon={<GoogleIcon />}
//                                   onClick={() => handleSocialLogin('google')}
//                                   sx={{ borderColor: '#DB4437', color: '#DB4437' }}
//                                 >
//                                   Google
//                                 </Button>
//                               </Grid>
//                               <Grid item xs={6}>
//                                 <Button
//                                   fullWidth
//                                   variant="outlined"
//                                   startIcon={<GitHubIcon />}
//                                   onClick={() => handleSocialLogin('github')}
//                                   sx={{ borderColor: '#333', color: '#333' }}
//                                 >
//                                   GitHub
//                                 </Button>
//                               </Grid>
//                             </Grid>
//                           </Box>
//                         )}
//                       </motion.div>
//                     </AnimatePresence>
//                   </Box>
//                 </Card>
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//         <Box mt={2}>
//           <Button
//             component={RouterLink}
//             to="/student-portal"
//             variant="outlined"
//             color="primary"
//             startIcon={<SchoolIcon />}
//           >
//             Open Student Portal
//           </Button>
//         </Box>
//         <Snackbar open={snackbar.open} autoHideDuration={6000} onClose={handleCloseSnackbar}>
//           <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: '100%' }}>
//             {snackbar.message}
//           </Alert>
//         </Snackbar>
//         <Dialog open={errorDialog.open} onClose={handleCloseErrorDialog}>
//           <DialogTitle>{errorDialog.title}</DialogTitle>
//           <DialogContent>
//             <DialogContentText>{errorDialog.message}</DialogContentText>
//           </DialogContent>
//           <DialogActions>
//             <Button onClick={handleCloseErrorDialog}>Close</Button>
//           </DialogActions>
//         </Dialog>
//       </Box>
//     </ThemeProvider>
//   );
// };

// export default LoginPage;











// import React, { useState, useCallback, useRef, useMemo, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { 
//   Person as PersonIcon, 
//   Email as EmailIcon, 
//   Lock as LockIcon, 
//   Visibility as VisibilityIcon, 
//   VisibilityOff as VisibilityOffIcon,
//   Close as CloseIcon,
//   Error as ErrorIcon
// } from '@mui/icons-material';
// import { 
//   Button, 
//   TextField, 
//   InputAdornment, 
//   IconButton, 
//   Typography, 
//   Box, 
//   Card,
//   Link,
//   ThemeProvider, 
//   createTheme, 
//   CssBaseline,
//   useMediaQuery,
//   Checkbox,
//   FormControlLabel,
//   CircularProgress,
//   Grid,
//   Snackbar,
//   Alert,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions
// } from '@mui/material';

// // Theme definition
// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#00796B',
//       light: '#48A999',
//       dark: '#004C40',
//     },
//     secondary: {
//       main: '#FF6E40',
//       light: '#FFA06D',
//       dark: '#C53D13',
//     },
//     background: {
//       default: '#E0F2F1',
//       paper: '#FFFFFF',
//     },
//   },
//   typography: {
//     fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
//     h4: {
//       fontWeight: 700,
//       fontSize: '1.75rem',
//       '@media (max-width:600px)': {
//         fontSize: '1.5rem',
//       },
//     },
//     h5: {
//       fontWeight: 600,
//       fontSize: '1.5rem',
//       '@media (max-width:600px)': {
//         fontSize: '1.25rem',
//       },
//     },
//     h6: {
//       fontWeight: 600,
//       fontSize: '1.25rem',
//       '@media (max-width:600px)': {
//         fontSize: '1.1rem',
//       },
//     },
//     body1: {
//       fontSize: '1rem',
//       '@media (max-width:600px)': {
//         fontSize: '0.875rem',
//       },
//     },
//     body2: {
//       fontSize: '0.875rem',
//       '@media (max-width:600px)': {
//         fontSize: '0.75rem',
//       },
//     },
//     button: {
//       textTransform: 'none',
//       fontWeight: 600,
//     },
//   },
//   shape: {
//     borderRadius: 12,
//   },
//   components: {
//     MuiTextField: {
//       styleOverrides: {
//         root: {
//           '& .MuiOutlinedInput-root': {
//             borderRadius: 12,
//             backgroundColor: '#F5F5F5',
//             '&:hover fieldset': {
//               borderColor: '#00796B',
//             },
//             '&.Mui-focused fieldset': {
//               borderColor: '#00796B',
//             },
//           },
//         },
//       },
//     },
//     MuiButton: {
//       styleOverrides: {
//         root: {
//           borderRadius: 25,
//           padding: '10px 20px',
//           boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//           transition: 'all 0.3s ease',
//           '&:hover': {
//             transform: 'translateY(-2px)',
//             boxShadow: '0 6px 8px rgba(0, 0, 0, 0.15)',
//           },
//         },
//       },
//     },
//     MuiCard: {
//       styleOverrides: {
//         root: {
//           boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
//           overflow: 'visible',
//         },
//       },
//     },
//   },
// });

// // InputField component with enhanced animation
// const InputField = React.memo(({ icon: Icon, error, isExtraSmall, isMobile, fullWidth, ...props }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 20 }}
//     animate={{ opacity: 1, y: 0 }}
//     exit={{ opacity: 0, y: -20 }}
//     transition={{ duration: 0.5, ease: "easeInOut" }}
//   >
//     <TextField
//       fullWidth={fullWidth}
//       variant="outlined"
//       margin="normal"
//       size={isExtraSmall ? 'small' : isMobile ? 'small' : 'medium'}
//       InputProps={{
//         startAdornment: (
//           <InputAdornment position="start">
//             <Icon sx={{ color: error ? 'error.main' : 'text.secondary' }} />
//           </InputAdornment>
//         ),
//       }}
//       error={!!error}
//       helperText={error}
//       sx={{
//         '& .MuiOutlinedInput-root': {
//           backgroundColor: '#F5F5F5',
//           ...(isExtraSmall || isMobile) && {
//             padding: '6px 12px',
//           },
//         },
//       }}
//       {...props}
//     />
//   </motion.div>
// ));

// // OtpInput component
// const OtpInput = React.memo(({ otp, setOtp }) => {
//   const inputRefs = useRef([]);

//   const handleChange = useCallback((element, index) => {
//     if (isNaN(element.value)) return false;
//     const newOtp = [...otp];
//     newOtp[index] = element.value;
//     setOtp(newOtp);
//     if (element.value !== '' && index < 5) {
//       inputRefs.current[index + 1].focus();
//     }
//   }, [otp, setOtp]);

//   const handleKeyDown = useCallback((e, index) => {
//     if (e.key === 'Backspace' && index > 0 && otp[index] === '') {
//       inputRefs.current[index - 1].focus();
//     }
//   }, [otp]);

//   const handlePaste = useCallback((e) => {
//     e.preventDefault();
//     const pastedData = e.clipboardData.getData('text').slice(0, 6).split('');
//     const newOtp = [...otp];
//     pastedData.forEach((value, index) => {
//       if (index < 6 && !isNaN(value)) {
//         newOtp[index] = value;
//       }
//     });
//     setOtp(newOtp);
//     if (pastedData.length === 6) {
//       inputRefs.current[5].focus();
//     } else {
//       inputRefs.current[pastedData.length].focus();
//     }
//   }, [otp, setOtp]);

//   return (
//     <Box display="flex" justifyContent="center" my={2}>
//       {otp.map((digit, index) => (
//         <motion.div
//           key={index}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3, delay: index * 0.1 }}
//         >
//           <TextField
//             inputRef={(el) => (inputRefs.current[index] = el)}
//             variant="outlined"
//             margin="dense"
//             value={digit}
//             onChange={(e) => handleChange(e.target, index)}
//             onKeyDown={(e) => handleKeyDown(e, index)}
//             onPaste={handlePaste}
//             inputProps={{
//               maxLength: 1,
//               style: { textAlign: 'center', fontSize: '1.5rem' },
//             }}
//             sx={{ width: '3rem', mx: 0.5 }}
//           />
//         </motion.div>
//       ))}
//     </Box>
//   );
// });

// // ErrorDialog component
// const ErrorDialog = ({ open, onClose, title, message }) => {
//   return (
//     <AnimatePresence>
//       {open && (
//         <Dialog
//           open={open}
//           onClose={onClose}
//           PaperComponent={motion.div}
//           PaperProps={{
//             initial: { opacity: 0, y: -50 },
//             animate: { opacity: 1, y: 0 },
//             exit: { opacity: 0, y: -50 },
//             transition: { duration: 0.3 }
//           }}
//         >
//           <DialogTitle sx={{ m: 0, p: 2, bgcolor: 'error.main', color: 'error.contrastText' }}>
//             <IconButton
//               aria-label="close"
//               onClick={onClose}
//               sx={{
//                 position: 'absolute',
//                 right: 8,
//                 top: 8,
//                 color: 'inherit'
//               }}
//             >
//               <CloseIcon />
//             </IconButton>
//             <Typography variant="h6" component="div" sx={{ display: 'flex', alignItems: 'center' }}>
//               <ErrorIcon sx={{ mr: 1 }} />
//               {title || 'Error'}
//             </Typography>
//           </DialogTitle>
//           <DialogContent sx={{ mt: 2 }}>
//             <Typography variant="body1">{message}</Typography>
//           </DialogContent>
//           <DialogActions>
//             <Button onClick={onClose} color="primary" variant="contained">
//               Close
//             </Button>
//           </DialogActions>
//         </Dialog>
//       )}
//     </AnimatePresence>
//   );
// };

// // Main LoginPage component
// const LoginPage = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [isSignUp, setIsSignUp] = useState(false);
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//   });
//   const [formErrors, setFormErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [rememberMe, setRememberMe] = useState(false);
//   const [isOtpVerification, setIsOtpVerification] = useState(false);
//   const [otp, setOtp] = useState(new Array(6).fill(""));
//   const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
//   const [paymentStatus, setPaymentStatus] = useState(null);
//   const [errorDialog, setErrorDialog] = useState({ open: false, title: '', message: '' });

//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
//   const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
//   const isExtraSmall = useMediaQuery('(max-width:360px)');

//   const openStudentPortal = useCallback(() => {
//     if (paymentStatus === 'success') {
//       window.open('/student-portal', '_blank', 'noopener,noreferrer');
//     }
//   }, [paymentStatus]);

//   const signUp = async (userData) => {
//     const response = await fetch('/api/register', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         firstname: userData.firstName,
//         lastname: userData.lastName,
//         mail: userData.email,
//         password: userData.password,
//         confirmpassword: userData.confirmPassword
//       }),
//     });

//     if (!response.ok) {
//       const errorData = await response.json();
//       throw new Error(errorData.message || 'Signup failed');
//     }

//     return response.json();
//   };

//   const signIn = async (userData) => {
//     const response = await fetch('/api/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         mail: userData.email,
//         password: userData.password,
//       }),
//     });

//     if (!response.ok) {
//       const errorData = await response.json();
//       throw new Error(errorData.message || 'Login failed');
//     }

//     const data = await response.json();
    
//     // Navigate to student portal after successful sign-in
//     if (data.success) {
//       navigateToStudentPortal();
//     }

//     return data;
//   };

//   const navigateToStudentPortal = () => {
//     window.location.href = '/student-portal';
//   };

//   const handleModalToggle = useCallback(() => {
//     setIsModalOpen((prev) => !prev);
//     setFormData({ firstName: '', lastName: '', email: '', password: '', confirmPassword: '' });
//     setFormErrors({});
//     setIsOtpVerification(false);
//     setOtp(new Array(6).fill(""));
//     setPaymentStatus(null);
//   }, []);

//   const handleInputChange = useCallback((e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     if (formErrors[name]) {
//       setFormErrors((prev) => ({ ...prev, [name]: undefined }));
//     }
//   }, [formErrors]);

//   const validateForm = useCallback(() => {
//     const errors = {};
//     if (isSignUp) {
//       if (!formData.firstName) errors.firstName = 'First name is required';
//       if (!formData.lastName) errors.lastName = 'Last name is required';
//     }
//     if (!formData.email) {
//       errors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       errors.email = 'Email is invalid';
//     }
//     if (!formData.password) {
//       errors.password = 'Password is required';
//     } else if (formData.password.length < 8) {
//       errors.password = 'Password must be at least 8 characters';
//     }
//     if (isSignUp) {
//       if (!formData.confirmPassword) {
//         errors.confirmPassword = 'Please confirm your password';
//       } else if (formData.password !== formData.confirmPassword) {
//         errors.confirmPassword = 'Passwords do not match';
//       }
//     }
//     setFormErrors(errors);
//     return Object.keys(errors).length === 0;
//   }, [formData, isSignUp]);

//   const generateOtp = useCallback(async () => {
//     try {
//       const response = await fetch('/api/otp-generate', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           mail: formData.email,
//         }),
//       });

//       if (!response.ok) {
//         throw new Error('OTP generation failed');
//       }

//       setSnackbar({ open: true, message: 'OTP sent to your email!', severity: 'success' });
//       setIsOtpVerification(true);
//     } catch (error) {
//       setSnackbar({ open: true, message: 'Failed to generate OTP. Please try again.', severity: 'error' });
//     }
//   }, [formData.email]);

//   const handlePayment = useCallback(() => {
//     const options = {
//       key: "YOUR_RAZORPAY_KEY",
//       amount: 50000,
//       currency: "INR",
//       name: "Student Portal Access",
//       description: "Payment for Student Portal Access",
//       handler: function (response) {
//         setPaymentStatus('success');
//         setTimeout(() => {
//           openStudentPortal();
//         }, 2000);
//       },
//       modal: {
//         ondismiss: function () {
//           setPaymentStatus('failed');
//         },
//       },
//       prefill: {
//         email: formData.email,
//       },
//       theme: {
//         color: "#00796B",
//       },
//     };

//     setPaymentStatus('pending');
//     const rzp = new window.Razorpay(options);
//     rzp.open();
//   }, [formData.email, openStudentPortal]);

//   const onSubmit = useCallback(async (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       setIsSubmitting(true);
//       try {
//         if (isSignUp) {
//           await signUp(formData);
//           await generateOtp();
//         } else {
//           await signIn(formData);
//         }
//       } catch (error) {
//         if (error.message.includes('Login failed') || error.message.includes('Signup failed')) {
//           setErrorDialog({ 
//             open: true, 
//             title: isSignUp ? 'Signup Error' : 'Login Error', 
//             message: error.message || 'An error occurred. Please try again.' 
//           });
//         } else {
//           setSnackbar({ open: true, message: error.message || 'An error occurred. Please try again.', severity: 'error' });
//         }
//       } finally {
//         setIsSubmitting(false);
//       }
//     }
//   }, [formData, isSignUp, validateForm, generateOtp, signUp, signIn]);

//   const handleOtpSubmit = useCallback(async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     try {
//       const response = await fetch('/api/otp-validate', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           mail: formData.email,
//           otp: otp.join(''),
//         }),
//       });

//       if (!response.ok) {
//         throw new Error('OTP verification failed');
//       }

//       handlePayment();
//     } catch (error) {
//       setSnackbar({ open: true, message: 'OTP verification failed. Please try again.', severity: 'error' });
//     } finally {
//       setIsSubmitting(false);
//     }
//   }, [formData.email, otp, handlePayment]);

//   const togglePasswordVisibility = useCallback(() => {
//     setShowPassword((prev) => !prev);
//   }, []);

//   const toggleConfirmPasswordVisibility = useCallback(() => {
//     setShowConfirmPassword((prev) => !prev);
//   }, []);

//   const handleCloseSnackbar = useCallback(() => {
//     setSnackbar((prev) => ({ ...prev, open: false }));
//   }, []);

//   const handleCloseErrorDialog = useCallback(() => {
//     setErrorDialog((prev) => ({ ...prev, open: false }));
//   }, []);

//   const containerVariants = useMemo(() => ({
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: { 
//       opacity: 1, 
//       scale: 1,
//       transition: { 
//         duration: 0.5, 
//         ease: "easeOut",
//         staggerChildren: 0.1,
//         delayChildren: 0.3
//       }
//     },
//     exit: { 
//       opacity: 0, 
//       scale: 0.8, 
//       transition: { 
//         duration: 0.5, 
//         ease: "easeIn" 
//       } 
//     }
//   }), []);

//   const itemVariants = useMemo(() => ({
//     hidden: { opacity: 0, y: 20 },
//     visible: { 
//       opacity: 1, 
//       y: 0,
//       transition: { duration: 0.5, ease: "easeOut" }
//     }
//   }), []);

//   const modalVariants = useMemo(() => ({
//     hidden: { opacity: 0, y: 50, scale: 0.95 },
//     visible: { 
//       opacity: 1, 
//       y: 0, 
//       scale: 1,
//       transition: { 
//         duration: 0.5, 
//         ease: "easeOut",
//         type: "spring",
//         stiffness: 300,
//         damping: 30
//       }
//     },
//     exit: { 
//       opacity: 0, 
//       y: 50, 
//       scale: 0.95,
//       transition: { 
//         duration: 0.5, 
//         ease: "easeIn" 
//       } 
//     }
//   }), []);

//   const overlayVariants = useMemo(() => ({
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { duration: 0.3 } },
//     exit: { opacity: 0, transition: { duration: 0.3 } }
//   }), []);

//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = 'https://checkout.razorpay.com/v1/checkout.js';
//     script.async = true;
//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <Box
//         display="flex"
//         flexDirection="column"
//         justifyContent="center"
//         alignItems="center"
//         width="100%"
      
//       >
//         <motion.div
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           <Button
//             variant="contained"
//             onClick={handleModalToggle}
//             startIcon={<PersonIcon />}
//             sx={{ 
//               backgroundColor: 'primary.main',
//               '&:hover': {
//                 backgroundColor: 'primary.dark',
//               }
//             }}
//           >
//             Sign In
//           </Button>
//         </motion.div>
//         <AnimatePresence>
//           {isModalOpen && (
//             <motion.div
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               variants={overlayVariants}
//               style={{
//                 position: 'fixed',
//                 top: 0,
//                 left: 0,
//                 right: 0,
//                 bottom: 0,
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 background: 'rgba(0, 0, 0, 0.5)',
//                 zIndex: 1000,
//               }}
//               onClick={handleModalToggle}
//             >
//               <motion.div
//                 variants={modalVariants}
//                 style={{
//                   width: isMobile ? '100%' : isTablet ? '90%' : '800px',
//                   maxWidth: '100%',
//                   height: isMobile ? '100%' : 'auto',
//                   maxHeight: isMobile ? '100%' : '90vh',
//                   display: 'flex',
//                   flexDirection: isMobile ? 'column' : 'row',
//                   overflow: 'auto',
//                   borderRadius: isMobile ? 0 : '20px',
//                 }}
//                 onClick={(e) => e.stopPropagation()}
//               >
//                 <Card
//                   sx={{
//                     width: '100%',
//                     height: '100%',
//                     display: 'flex',
//                     flexDirection: isMobile ? 'column' : 'row',
//                     overflow: 'hidden',
//                   }}
//                 >
//                   <IconButton
//                     sx={{
//                       position: 'absolute',
//                       top: isMobile ? 16 : 8,
//                       right: isMobile ? 16 : 8,
//                       color: isMobile ? 'primary.main' : 'white',
//                       backgroundColor: isMobile ? 'rgba(255, 255, 255, 0.9)' : 'transparent',
//                       '&:hover': {
//                         backgroundColor: isMobile ? 'white' : 'rgba(255, 255, 255, 0.1)',
//                       },
//                       zIndex: 1,
//                     }}
//                     onClick={handleModalToggle}
//                   >
//                     <CloseIcon />
//                   </IconButton>
//                   <Box
//                     sx={{
//                       width: isMobile ? '100%' : '40%',
//                       minHeight: isMobile ? '150px' : 'auto',
//                       background: 'linear-gradient(135deg, #00796B 0%, #48A999 100%)',
//                       display: 'flex',
//                       flexDirection: 'column',
//                       alignItems: 'center',
//                       justifyContent: 'center',
//                       color: 'white',
//                       p: isMobile ? 2 : 4,
//                       position: 'relative',
//                       overflow: 'hidden',
//                     }}
//                   >
//                     <motion.div variants={itemVariants}>
//                       <Typography variant={isMobile ? "h6" : "h5"} fontWeight="bold" mb={1}>
//                         {isSignUp ? 'Join Us!' : 'Welcome Back!'}
//                       </Typography>
//                     </motion.div>
//                     <motion.div variants={itemVariants}>
//                       <Typography variant="body2" textAlign="center" mb={2}>
//                         {isSignUp
//                           ? 'Already have an account?'
//                           : "Don't have an account yet?"}
//                       </Typography>
//                     </motion.div>
//                     <motion.div
//                       variants={itemVariants}
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                     >
//                       <Button
//                         variant="outlined"
//                         onClick={() => setIsSignUp(!isSignUp)}
//                         sx={{
//                           color: 'white',
//                           borderColor: 'white',
//                           '&:hover': {
//                             borderColor: 'white',
//                             backgroundColor: 'rgba(255,255,255,0.1)',
//                           },
//                         }}
//                       >
//                         {isSignUp ? 'Sign In' : 'Sign Up'}
//                       </Button>
//                     </motion.div>
//                   </Box>
//                   <Box
//                     sx={{
//                       width: isMobile ? '100%' : '60%',
//                       height: isMobile ? 'auto' : 'auto',
//                       p: isExtraSmall ? 2 : isMobile ? 3 : 4,
//                       display: 'flex',
//                       flexDirection: 'column',
//                       alignItems: 'center',
//                       bgcolor: 'background.paper',
//                       position: 'relative',
//                       overflow: 'auto',
//                     }}
//                   >
//                     <AnimatePresence mode="wait">
//                       <motion.div
//                         key={isSignUp ? 'signup' : 'signin'}
//                         variants={containerVariants}
//                         initial="hidden"
//                         animate="visible"
//                         exit="exit"
//                         style={{
//                           width: '100%',
//                           display: 'flex',
//                           flexDirection: 'column',
//                           alignItems: 'center',
//                         }}
//                       >
//                         <motion.div variants={itemVariants}>
//                           <Typography variant={isMobile ? "h6" : "h5"} color="primary" fontWeight="bold" mb={isMobile ? 2 : 4}>
//                             {isOtpVerification ? 'Verify OTP' : (isSignUp ? 'Create Account' : 'Login')}
//                           </Typography>
//                         </motion.div>
//                         {isOtpVerification ? (
//                           <Box component="form" onSubmit={handleOtpSubmit} width="100%" maxWidth="400px">
//                             <motion.div variants={itemVariants}>
//                               <Typography variant="body1" align="center" gutterBottom>
//                                 Enter the 6-digit OTP sent to your email
//                               </Typography>
//                             </motion.div>
//                             <motion.div variants={itemVariants}>
//                               <OtpInput otp={otp} setOtp={setOtp} />
//                             </motion.div>
//                             <motion.div
//                               variants={itemVariants}
//                               whileHover={{ scale: 1.02 }}
//                               whileTap={{ scale: 0.98 }}
//                             >
//                               <Button
//                                 type="submit"
//                                 fullWidth
//                                 variant="contained"
//                                 disabled={isSubmitting || otp.some(digit => digit === '')}
//                                 sx={{
//                                   mt: 3,
//                                   mb: 2,
//                                   backgroundColor: 'primary.main',
//                                   '&:hover': {
//                                     backgroundColor: 'primary.dark',
//                                   },
//                                 }}
//                               >
//                                 {isSubmitting ? <CircularProgress size={24} /> : 'Verify OTP'}
//                               </Button>
//                             </motion.div>
//                           </Box>
//                         ) : (
//                           <Box component="form" onSubmit={onSubmit} width="100%" maxWidth={isMobile ? "100%" : "400px"}>
//                             {isSignUp && (
//                               <Grid container spacing={isExtraSmall ? 1 : isMobile ? 1.5 : 2}>
//                                 <Grid item xs={12} sm={isMobile ? 12 : 6}>
//                                   <InputField
//                                     name="firstName"
//                                     label="First Name"
//                                     icon={PersonIcon}
//                                     value={formData.firstName}
//                                     onChange={handleInputChange}
//                                     error={formErrors.firstName}
//                                     isExtraSmall={isExtraSmall}
//                                     isMobile={isMobile}
//                                     fullWidth
//                                   />
//                                 </Grid>
//                                 <Grid item xs={12} sm={isMobile ? 12 : 6}>
//                                   <InputField
//                                     name="lastName"
//                                     label="Last Name"
//                                     icon={PersonIcon}
//                                     value={formData.lastName}
//                                     onChange={handleInputChange}
//                                     error={formErrors.lastName}
//                                     isExtraSmall={isExtraSmall}
//                                     isMobile={isMobile}
//                                     fullWidth
//                                   />
//                                 </Grid>
//                               </Grid>
//                             )}
//                             <InputField
//                               name="email"
//                               label="Email"
//                               icon={EmailIcon}
//                               value={formData.email}
//                               onChange={handleInputChange}
//                               error={formErrors.email}
//                               isExtraSmall={isExtraSmall}
//                               isMobile={isMobile}
//                               fullWidth
//                             />
//                             <InputField
//                               name="password"
//                               label={isSignUp ? "New Password" : "Password"}
//                               type={showPassword ? "text" : "password"}
//                               icon={LockIcon}
//                               value={formData.password}
//                               onChange={handleInputChange}
//                               error={formErrors.password}
//                               isExtraSmall={isExtraSmall}
//                               isMobile={isMobile}
//                               InputProps={{
//                                 endAdornment: (
//                                   <InputAdornment position="end">
//                                     <IconButton 
//                                       onClick={togglePasswordVisibility}
//                                       edge="end"
//                                       aria-label={showPassword ? "Hide password" : "Show password"}
//                                     >
//                                       {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
//                                     </IconButton>
//                                   </InputAdornment>
//                                 ),
//                               }}
//                               fullWidth
//                             />
//                             {isSignUp && (
//                               <InputField
//                                 name="confirmPassword"
//                                 label="Confirm Password"
//                                 type={showConfirmPassword ? "text" : "password"}
//                                 icon={LockIcon}
//                                 value={formData.confirmPassword}
//                                 onChange={handleInputChange}
//                                 error={formErrors.confirmPassword}
//                                 isExtraSmall={isExtraSmall}
//                                 isMobile={isMobile}
//                                 InputProps={{
//                                   endAdornment: (
//                                     <InputAdornment position="end">
//                                       <IconButton 
//                                         onClick={toggleConfirmPasswordVisibility}
//                                         edge="end"
//                                         aria-label={showConfirmPassword ? "Hide password" : "Show password"}
//                                       >
//                                         {showConfirmPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
//                                       </IconButton>
//                                     </InputAdornment>
//                                   ),
//                                 }}
//                                 fullWidth
//                               />
//                             )}
//                             <motion.div variants={itemVariants}>
//                               <Box 
//                                 sx={{ 
//                                   display: 'flex', 
//                                   flexDirection: isMobile ? 'column' : 'row',
//                                   justifyContent: 'space-between', 
//                                   alignItems: isMobile ? 'flex-start' : 'center', 
//                                   mb: 2,
//                                   gap: isMobile ? 1 : 0
//                                 }}
//                               >
//                                 <FormControlLabel
//                                   control={
//                                     <Checkbox
//                                       checked={rememberMe}
//                                       onChange={(e) => setRememberMe(e.target.checked)}
//                                       color="primary"
//                                     />
//                                   }
//                                   label={<Typography variant={isMobile ? "body2" : "body1"}>Remember me</Typography>}
//                                 />
//                                 {!isSignUp && (
//                                   <Link
//                                     href="#"
//                                     color="primary"
//                                     underline="hover"
//                                     onClick={(e) => {
//                                       e.preventDefault();
//                                       setSnackbar({ open: true, message: 'Password reset email sent!', severity: 'success' });
//                                     }}
//                                     sx={{ fontSize: isMobile ? '0.875rem' : '1rem' }}
//                                   >
//                                     Forgot Password?
//                                   </Link>
//                                 )}
//                               </Box>
//                             </motion.div>
//                             <motion.div
//                               variants={itemVariants}
//                               whileHover={{ scale: 1.02 }}
//                               whileTap={{ scale: 0.98 }}
//                             >
//                               <Button
//                                 type="submit"
//                                 fullWidth
//                                 variant="contained"
//                                 disabled={isSubmitting}
//                                 sx={{
//                                   mt: isExtraSmall ? 1 : isMobile ? 2 : 3,
//                                   mb: isExtraSmall ? 1 : isMobile ? 1 : 2,
//                                   py: isExtraSmall ? 1 : isMobile ? 1.5: 2,
//                                   backgroundColor: 'primary.main',
//                                   '&:hover': {
//                                     backgroundColor: 'primary.dark',
//                                   },
//                                   transition: 'all 0.3s ease-in-out',
//                                   fontSize: isMobile ? '0.875rem' : '1rem',
//                                 }}
//                               >
//                                 {isSubmitting ? <CircularProgress size={20} /> : (isSignUp ? 'Sign Up' : 'Login')}
//                               </Button>
//                             </motion.div>
//                           </Box>
//                         )}
//                       </motion.div>
//                     </AnimatePresence>
//                   </Box>
//                 </Card>
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//         <Snackbar 
//           open={snackbar.open} 
//           autoHideDuration={6000} 
//           onClose={handleCloseSnackbar} 
//           anchorOrigin={{vertical: 'top', horizontal: 'center'}}
//         >
//           <Alert 
//             onClose={handleCloseSnackbar} 
//             severity={snackbar.severity} 
//             sx={{ 
//               width: '100%', 
//               alignItems: 'center',
//               '& .MuiAlert-icon': {
//                 fontSize: '1.5rem'
//               }
//             }}
//             elevation={6}
//             variant="filled"
//           >
//             <Typography variant="body1">{snackbar.message}</Typography>
//           </Alert>
//         </Snackbar>
//         <ErrorDialog
//           open={errorDialog.open}
//           onClose={handleCloseErrorDialog}
//           title={errorDialog.title}
//           message={errorDialog.message}
//         />
//       </Box>
//     </ThemeProvider>
//   );
// };

// export default LoginPage;















// import React, { useState, useCallback, useRef, useMemo, useEffect } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import {
//   Person as PersonIcon,
//   Email as EmailIcon,
//   Lock as LockIcon,
//   Visibility as VisibilityIcon,
//   VisibilityOff as VisibilityOffIcon,
//   Close as CloseIcon,
//   Error as ErrorIcon,
// } from "@mui/icons-material"
// import {
//   Button,
//   TextField,
//   InputAdornment,
//   IconButton,
//   Typography,
//   Box,
//   Card,
//   Link,
//   ThemeProvider,
//   createTheme,
//   CssBaseline,
//   useMediaQuery,
//   Checkbox,
//   FormControlLabel,
//   CircularProgress,
//   Grid,
//   Snackbar,
//   Alert,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
// } from "@mui/material"

// // Theme definition
// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#004c40",
//       light: "#48A999",
//       dark: "#004C40",
//     },
//     secondary: {
//       main: "#FF6E40",
//       light: "#FFA06D",
//       dark: "#C53D13",
//     },
//     background: {
//       default: "#E0F2F1",
//       paper: "#FFFFFF",
//     },
//   },
//   typography: {
//     fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
//     h4: {
//       fontWeight: 700,
//       fontSize: "1.75rem",
//       "@media (max-width:600px)": {
//         fontSize: "1.5rem",
//       },
//     },
//     h5: {
//       fontWeight: 600,
//       fontSize: "1.5rem",
//       "@media (max-width:600px)": {
//         fontSize: "1.25rem",
//       },
//     },
//     h6: {
//       fontWeight: 600,
//       fontSize: "1.25rem",
//       "@media (max-width:600px)": {
//         fontSize: "1.1rem",
//       },
//     },
//     body1: {
//       fontSize: "1rem",
//       "@media (max-width:600px)": {
//         fontSize: "0.875rem",
//       },
//     },
//     body2: {
//       fontSize: "0.875rem",
//       "@media (max-width:600px)": {
//         fontSize: "0.75rem",
//       },
//     },
//     button: {
//       textTransform: "none",
//       fontWeight: 600,
//     },
//   },
//   shape: {
//     borderRadius: 12,
//   },
//   components: {
//     MuiTextField: {
//       styleOverrides: {
//         root: {
//           "& .MuiOutlinedInput-root": {
//             borderRadius: 12,
//             backgroundColor: "#F5F5F5",
//             "&:hover fieldset": {
//               borderColor: "#00796B",
//             },
//             "&.Mui-focused fieldset": {
//               borderColor: "#00796B",
//             },
//           },
//         },
//       },
//     },
//     MuiButton: {
//       styleOverrides: {
//         root: {
//           borderRadius: 25,
//           padding: "10px 20px",
//           boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//           transition: "all 0.3s ease",
//           "&:hover": {
//             transform: "translateY(-2px)",
//             boxShadow: "0 6px 8px rgba(0, 0, 0, 0.15)",
//           },
//         },
//       },
//     },
//     MuiCard: {
//       styleOverrides: {
//         root: {
//           boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
//           overflow: "visible",
//         },
//       },
//     },
//   },
// })

// // InputField component with enhanced animation
// const InputField = React.memo(({ icon: Icon, error, isExtraSmall, isMobile, fullWidth, ...props }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 20 }}
//     animate={{ opacity: 1, y: 0 }}
//     exit={{ opacity: 0, y: -20 }}
//     transition={{ duration: 0.5, ease: "easeInOut" }}
//   >
//     <TextField
//       fullWidth={fullWidth}
//       variant="outlined"
//       margin="normal"
//       size={isExtraSmall ? "small" : isMobile ? "small" : "medium"}
//       InputProps={{
//         startAdornment: (
//           <InputAdornment position="start">
//             <Icon sx={{ color: error ? "error.main" : "text.secondary" }} />
//           </InputAdornment>
//         ),
//       }}
//       error={!!error}
//       helperText={error}
//       sx={{
//         "& .MuiOutlinedInput-root": {
//           backgroundColor: "#F5F5F5",
//           ...((isExtraSmall || isMobile) && {
//             padding: "6px 12px",
//           }),
//         },
//       }}
//       {...props}
//     />
//   </motion.div>
// ))

// // OtpInput component
// const OtpInput = React.memo(({ otp, setOtp }) => {
//   const inputRefs = useRef([])

//   const handleChange = useCallback(
//     (element, index) => {
//       if (isNaN(element.value)) return false
//       const newOtp = [...otp]
//       newOtp[index] = element.value
//       setOtp(newOtp)
//       if (element.value !== "" && index < 5) {
//         inputRefs.current[index + 1].focus()
//       }
//     },
//     [otp, setOtp],
//   )

//   const handleKeyDown = useCallback(
//     (e, index) => {
//       if (e.key === "Backspace" && index > 0 && otp[index] === "") {
//         inputRefs.current[index - 1].focus()
//       }
//     },
//     [otp],
//   )

//   const handlePaste = useCallback(
//     (e) => {
//       e.preventDefault()
//       const pastedData = e.clipboardData.getData("text").slice(0, 6).split("")
//       const newOtp = [...otp]
//       pastedData.forEach((value, index) => {
//         if (index < 6 && !isNaN(value)) {
//           newOtp[index] = value
//         }
//       })
//       setOtp(newOtp)
//       if (pastedData.length === 6) {
//         inputRefs.current[5].focus()
//       } else {
//         inputRefs.current[pastedData.length].focus()
//       }
//     },
//     [otp, setOtp],
//   )

//   return (
//     <Box display="flex" justifyContent="center" my={2}>
//       {otp.map((digit, index) => (
//         <motion.div
//           key={index}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3, delay: index * 0.1 }}
//         >
//           <TextField
//             inputRef={(el) => (inputRefs.current[index] = el)}
//             variant="outlined"
//             margin="dense"
//             value={digit}
//             onChange={(e) => handleChange(e.target, index)}
//             onKeyDown={(e) => handleKeyDown(e, index)}
//             onPaste={handlePaste}
//             inputProps={{
//               maxLength: 1,
//               style: { textAlign: "center", fontSize: "1.5rem" },
//             }}
//             sx={{ width: "3rem", mx: 0.5 }}
//           />
//         </motion.div>
//       ))}
//     </Box>
//   )
// })

// // ErrorDialog component
// const ErrorDialog = ({ open, onClose, title, message }) => {
//   return (
//     <AnimatePresence>
//       {open && (
//         <Dialog
//           open={open}
//           onClose={onClose}
//           PaperComponent={motion.div}
//           PaperProps={{
//             initial: { opacity: 0, y: -50 },
//             animate: { opacity: 1, y: 0 },
//             exit: { opacity: 0, y: -50 },
//             transition: { duration: 0.3 },
//           }}
//         >
//           <DialogTitle sx={{ m: 0, p: 2, bgcolor: "error.main", color: "error.contrastText" }}>
//             <IconButton
//               aria-label="close"
//               onClick={onClose}
//               sx={{
//                 position: "absolute",
//                 right: 8,
//                 top: 8,
//                 color: "inherit",
//               }}
//             >
//               <CloseIcon />
//             </IconButton>
//             <Typography variant="h6" component="div" sx={{ display: "flex", alignItems: "center" }}>
//               <ErrorIcon sx={{ mr: 1 }} />
//               {title || "Error"}
//             </Typography>
//           </DialogTitle>
//           <DialogContent sx={{ mt: 2 }}>
//             <Typography variant="body1">{message}</Typography>
//           </DialogContent>
//           <DialogActions>
//             <Button onClick={onClose} color="primary" variant="contained">
//               Close
//             </Button>
//           </DialogActions>
//         </Dialog>
//       )}
//     </AnimatePresence>
//   )
// }

// // Main LoginPage component
// const LoginPage = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false)
//   const [showPassword, setShowPassword] = useState(false)
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false)
//   const [isSignUp, setIsSignUp] = useState(false)
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   })
//   const [formErrors, setFormErrors] = useState({})
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [rememberMe, setRememberMe] = useState(false)
//   const [isOtpVerification, setIsOtpVerification] = useState(false)
//   const [otp, setOtp] = useState(new Array(6).fill(""))
//   const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" })
//   const [paymentStatus, setPaymentStatus] = useState(null)
//   const [errorDialog, setErrorDialog] = useState({ open: false, title: "", message: "" })

//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
//   const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"))
//   const isExtraSmall = useMediaQuery("(max-width:360px)")

//   const openStudentPortal = useCallback(() => {
//     if (paymentStatus === "success") {
//       window.open("/student-portal", "_blank", "noopener,noreferrer")
//     }
//   }, [paymentStatus])

//   const signUp = async (userData) => {
//     const response = await fetch("/api/register", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         firstname: userData.firstName,
//         lastname: userData.lastName,
//         mail: userData.email,
//         password: userData.password,
//         confirmpassword: userData.confirmPassword,
//       }),
//     })

//     if (!response.ok) {
//       const errorData = await response.json()
//       throw new Error(errorData.message || "Signup failed")
//     }

//     return response.json()
//   }

//   const signIn = async (userData) => {
//     const response = await fetch("/api/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         mail: userData.email,
//         password: userData.password,
//       }),
//     })

//     if (!response.ok) {
//       const errorData = await response.json()
//       throw new Error(errorData.message || "Login failed")
//     }

//     const data = await response.json()

//     // Navigate to student portal after successful sign-in
//     if (data.success) {
//       navigateToStudentPortal()
//     }

//     return data
//   }

//   const navigateToStudentPortal = () => {
//     window.location.href = "/student-portal"
//   }

//   const handleModalToggle = useCallback(() => {
//     setIsModalOpen((prev) => !prev)
//     setFormData({ firstName: "", lastName: "", email: "", password: "", confirmPassword: "" })
//     setFormErrors({})
//     setIsOtpVerification(false)
//     setOtp(new Array(6).fill(""))
//     setPaymentStatus(null)
//   }, [])

//   const handleInputChange = useCallback(
//     (e) => {
//       const { name, value } = e.target
//       setFormData((prev) => ({ ...prev, [name]: value }))
//       if (formErrors[name]) {
//         setFormErrors((prev) => ({ ...prev, [name]: undefined }))
//       }
//     },
//     [formErrors],
//   )

//   const validateForm = useCallback(() => {
//     const errors = {}
//     if (isSignUp) {
//       if (!formData.firstName) errors.firstName = "First name is required"
//       if (!formData.lastName) errors.lastName = "Last name is required"
//     }
//     if (!formData.email) {
//       errors.email = "Email is required"
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       errors.email = "Email is invalid"
//     }
//     if (!formData.password) {
//       errors.password = "Password is required"
//     } else if (formData.password.length < 8) {
//       errors.password = "Password must be at least 8 characters"
//     }
//     if (isSignUp) {
//       if (!formData.confirmPassword) {
//         errors.confirmPassword = "Please confirm your password"
//       } else if (formData.password !== formData.confirmPassword) {
//         errors.confirmPassword = "Passwords do not match"
//       }
//     }
//     setFormErrors(errors)
//     return Object.keys(errors).length === 0
//   }, [formData, isSignUp])

//   const generateOtp = useCallback(async () => {
//     try {
//       const response = await fetch("/api/otp-generate", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           mail: formData.email,
//         }),
//       })

//       if (!response.ok) {
//         throw new Error("OTP generation failed")
//       }

//       setSnackbar({ open: true, message: "OTP sent to your email!", severity: "success" })
//       setIsOtpVerification(true)
//     } catch (error) {
//       setSnackbar({ open: true, message: "Failed to generate OTP. Please try again.", severity: "error" })
//     }
//   }, [formData.email])

//   const handlePayment = useCallback(() => {
//     const options = {
//       key: "YOUR_RAZORPAY_KEY",
//       amount: 50000,
//       currency: "INR",
//       name: "Student Portal Access",
//       description: "Payment for Student Portal Access",
//       handler: (response) => {
//         setPaymentStatus("success")
//         setTimeout(() => {
//           openStudentPortal()
//         }, 2000)
//       },
//       modal: {
//         ondismiss: () => {
//           setPaymentStatus("failed")
//         },
//       },
//       prefill: {
//         email: formData.email,
//       },
//       theme: {
//         color: "#00796B",
//       },
//     }

//     setPaymentStatus("pending")
//     const rzp = new window.Razorpay(options)
//     rzp.open()
//   }, [formData.email, openStudentPortal])

//   const onSubmit = useCallback(
//     async (e) => {
//       e.preventDefault()
//       if (validateForm()) {
//         setIsSubmitting(true)
//         try {
//           if (isSignUp) {
//             await signUp(formData)
//             await generateOtp()
//           } else {
//             await signIn(formData)
//           }
//         } catch (error) {
//           if (error.message.includes("Login failed") || error.message.includes("Signup failed")) {
//             setErrorDialog({
//               open: true,
//               title: isSignUp ? "Signup Error" : "Login Error",
//               message: error.message || "An error occurred. Please try again.",
//             })
//           } else {
//             setSnackbar({
//               open: true,
//               message: error.message || "An error occurred. Please try again.",
//               severity: "error",
//             })
//           }
//         } finally {
//           setIsSubmitting(false)
//         }
//       }
//     },
//     [formData, isSignUp, validateForm, generateOtp, signUp, signIn],
//   )

//   const handleOtpSubmit = useCallback(
//     async (e) => {
//       e.preventDefault()
//       setIsSubmitting(true)
//       try {
//         const response = await fetch("/api/otp-validate", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             mail: formData.email,
//             otp: otp.join(""),
//           }),
//         })

//         if (!response.ok) {
//           throw new Error("OTP verification failed")
//         }

//         handlePayment()
//       } catch (error) {
//         setSnackbar({ open: true, message: "OTP verification failed. Please try again.", severity: "error" })
//       } finally {
//         setIsSubmitting(false)
//       }
//     },
//     [formData.email, otp, handlePayment],
//   )

//   const togglePasswordVisibility = useCallback(() => {
//     setShowPassword((prev) => !prev)
//   }, [])

//   const toggleConfirmPasswordVisibility = useCallback(() => {
//     setShowConfirmPassword((prev) => !prev)
//   }, [])

//   const handleCloseSnackbar = useCallback(() => {
//     setSnackbar((prev) => ({ ...prev, open: false }))
//   }, [])

//   const handleCloseErrorDialog = useCallback(() => {
//     setErrorDialog((prev) => ({ ...prev, open: false }))
//   }, [])

//   const containerVariants = useMemo(
//     () => ({
//       hidden: { opacity: 0, scale: 0.8 },
//       visible: {
//         opacity: 1,
//         scale: 1,
//         transition: {
//           duration: 0.5,
//           ease: "easeOut",
//           staggerChildren: 0.1,
//           delayChildren: 0.3,
//         },
//       },
//       exit: {
//         opacity: 0,
//         scale: 0.8,
//         transition: {
//           duration: 0.5,
//           ease: "easeIn",
//         },
//       },
//     }),
//     [],
//   )

//   const itemVariants = useMemo(
//     () => ({
//       hidden: { opacity: 0, y: 20 },
//       visible: {
//         opacity: 1,
//         y: 0,
//         transition: { duration: 0.5, ease: "easeOut" },
//       },
//     }),
//     [],
//   )

//   const modalVariants = useMemo(
//     () => ({
//       hidden: { opacity: 0, y: 50, scale: 0.95 },
//       visible: {
//         opacity: 1,
//         y: 0,
//         scale: 1,
//         transition: {
//           duration: 0.5,
//           ease: "easeOut",
//           type: "spring",
//           stiffness: 300,
//           damping: 30,
//         },
//       },
//       exit: {
//         opacity: 0,
//         y: 50,
//         scale: 0.95,
//         transition: {
//           duration: 0.5,
//           ease: "easeIn",
//         },
//       },
//     }),
//     [],
//   )

//   const overlayVariants = useMemo(
//     () => ({
//       hidden: { opacity: 0 },
//       visible: { opacity: 1, transition: { duration: 0.3 } },
//       exit: { opacity: 0, transition: { duration: 0.3 } },
//     }),
//     [],
//   )

//   useEffect(() => {
//     const script = document.createElement("script")
//     script.src = "https://checkout.razorpay.com/v1/checkout.js"
//     script.async = true
//     document.body.appendChild(script)

//     return () => {
//       document.body.removeChild(script)
//     }
//   }, [])

//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" width="100%">
//         <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//           <Button
//             variant="contained"
//             onClick={handleModalToggle}
//             startIcon={<PersonIcon />}
//             sx={{
//               backgroundColor: "primary.main",
//               "&:hover": {
//                 backgroundColor: "primary.dark",
//               },
//             }}
//           >
//             Sign In
//           </Button>
//         </motion.div>
//         <AnimatePresence>
//           {isModalOpen && (
//             <motion.div
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               variants={overlayVariants}
//               style={{
//                 position: "fixed",
//                 top: 0,
//                 left: 0,
//                 right: 0,
//                 bottom: 0,
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 background: "rgba(0, 0, 0, 0.5)",
//                 zIndex: 1000,
//               }}
//               onClick={handleModalToggle}
//             >
//               <motion.div
//                 variants={modalVariants}
//                 style={{
//                   width: isMobile ? "100%" : isTablet ? "90%" : "800px",
//                   maxWidth: "100%",
//                   height: isMobile ? "100%" : "auto",
//                   maxHeight: isMobile ? "100%" : "90vh",
//                   display: "flex",
//                   flexDirection: isMobile ? "column" : "row",
//                   overflow: "auto",
//                   borderRadius: isMobile ? 0 : "20px",
//                 }}
//                 onClick={(e) => e.stopPropagation()}
//               >
//                 <Card
//                   sx={{
//                     width: "100%",
//                     height: "100%",
//                     display: "flex",
//                     flexDirection: isMobile ? "column" : "row",
//                     overflow: "hidden",
//                   }}
//                 >
//                   {/* ..................................................................issue 1............................................................ */}
//                   <IconButton 
//                     sx={{
//                       position: "absolute",
//                       top: isMobile ? 16 : 8,
//                       right: isMobile ? 16 : 8,
//                       color: isMobile ? "primary.main" : "black",
//                       // backgroundColor: isMobile ? "black" : "grey",
//                       "&:hover": {
//                         backgroundColor: isMobile ? "white" : "rgba(0,0,0,0.1)",
//                       },
//                       zIndex: 1,
//                     }}
//                     onClick={handleModalToggle}
//                   >
//                     <CloseIcon />
//                   </IconButton>
//                   <Box
//                     sx={{
//                       width: isMobile ? "100%" : "40%",
//                       minHeight: isMobile ? "150px" : "auto",
//                       background: "linear-gradient(135deg, #00796B 0%, #48A999 100%)",
//                       display: "flex",
//                       flexDirection: "column",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       color: "white",
//                       p: isMobile ? 2 : 4,
//                       position: "relative",
//                       overflow: "hidden",
//                     }}
//                   >
//                     <motion.div variants={itemVariants}>
//                       <Typography variant={isMobile ? "h6" : "h5"} fontWeight="bold" mb={1}>
//                         {isSignUp ? "Join Us!" : "Welcome Back!"}
//                       </Typography>
//                     </motion.div>
//                     <motion.div variants={itemVariants}>
//                       <Typography variant="body2" textAlign="center" mb={2}>
//                         {isSignUp ? "Already have an account?" : "Don't have an account yet?"}
//                       </Typography>
//                     </motion.div>
//                     <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                       <Button
//                         variant="outlined"
//                         onClick={() => setIsSignUp(!isSignUp)}
//                         sx={{
//                           color: "white",
//                           borderColor: "white",
//                           "&:hover": {
//                             borderColor: "white",
//                             backgroundColor: "rgba(255,255,255,0.1)",
//                           },
//                         }}
//                       >
//                         {isSignUp ? "Sign In" : "Sign Up"}
//                       </Button>
//                     </motion.div>
//                   </Box>
//                   <Box
//                     sx={{
//                       width: isMobile ? "100%" : "60%",
//                       height: isMobile ? "auto" : "auto",
//                       p: isExtraSmall ? 2 : isMobile ? 3 : 4,
//                       display: "flex",
//                       flexDirection: "column",
//                       alignItems: "center",
//                       bgcolor: "background.paper",
//                       position: "relative",
//                       overflow: "auto",
//                     }}
//                   >
//                     <AnimatePresence mode="wait">
//                       <motion.div
//                         key={isSignUp ? "signup" : "signin"}
//                         variants={containerVariants}
//                         initial="hidden"
//                         animate="visible"
//                         exit="exit"
//                         style={{
//                           width: "100%",
//                           display: "flex",
//                           flexDirection: "column",
//                           alignItems: "center",
//                         }}
//                       >
//                         <motion.div variants={itemVariants}>
//                           <Typography
//                             variant={isMobile ? "h6" : "h5"}
//                             color="primary"
//                             fontWeight="bold"
//                             mb={isMobile ? 2 : 4}
//                           >
//                             {isOtpVerification ? "Verify OTP" : isSignUp ? "Create Account" : "Login"}
//                           </Typography>
//                         </motion.div>
//                         {isOtpVerification ? (
//                           <Box component="form" onSubmit={handleOtpSubmit} width="100%" maxWidth="400px">
//                             <motion.div variants={itemVariants}>
//                               <Typography variant="body1" align="center" gutterBottom>
//                                 Enter the 6-digit OTP sent to your email
//                               </Typography>
//                             </motion.div>
//                             <motion.div variants={itemVariants}>
//                               <OtpInput otp={otp} setOtp={setOtp} />
//                             </motion.div>
//                             <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
//                               <Button
//                                 type="submit"
//                                 fullWidth
//                                 variant="contained"
//                                 disabled={isSubmitting || otp.some((digit) => digit === "")}
//                                 sx={{
//                                   mt: 3,
//                                   mb: 2,
//                                   backgroundColor: "primary.main",
//                                   "&:hover": {
//                                     backgroundColor: "primary.dark",
//                                   },
//                                 }}
//                               >
//                                 {isSubmitting ? <CircularProgress size={24} /> : "Verify OTP"}
//                               </Button>
//                             </motion.div>
//                           </Box>
//                         ) : (
//                           <Box component="form" onSubmit={onSubmit} width="100%" maxWidth={isMobile ? "100%" : "400px"}>
//                             {isSignUp && (
//                               <Grid container spacing={isExtraSmall ? 1 : isMobile ? 1.5 : 2}>
//                                 <Grid item xs={12} sm={isMobile ? 12 : 6}>
//                                   <InputField
//                                     name="firstName"
//                                     label="First Name"
//                                     icon={PersonIcon}
//                                     value={formData.firstName}
//                                     onChange={handleInputChange}
//                                     error={formErrors.firstName}
//                                     isExtraSmall={isExtraSmall}
//                                     isMobile={isMobile}
//                                     fullWidth
//                                   />
//                                 </Grid>
//                                 <Grid item xs={12} sm={isMobile ? 12 : 6}>
//                                   <InputField
//                                     name="lastName"
//                                     label="Last Name"
//                                     icon={PersonIcon}
//                                     value={formData.lastName}
//                                     onChange={handleInputChange}
//                                     error={formErrors.lastName}
//                                     isExtraSmall={isExtraSmall}
//                                     isMobile={isMobile}
//                                     fullWidth
//                                   />
//                                 </Grid>
//                               </Grid>
//                             )}
//                             <InputField
//                               name="email"
//                               label="Email"
//                               icon={EmailIcon}
//                               value={formData.email}
//                               onChange={handleInputChange}
//                               error={formErrors.email}
//                               isExtraSmall={isExtraSmall}
//                               isMobile={isMobile}
//                               fullWidth
//                             />
//                             <InputField
//                               name="password"
//                               label={isSignUp ? "New Password" : "Password"}
//                               type={showPassword ? "text" : "password"}
//                               icon={LockIcon}
//                               value={formData.password}
//                               onChange={handleInputChange}
//                               error={formErrors.password}
//                               isExtraSmall={isExtraSmall}
//                               isMobile={isMobile}
//                               InputProps={{
//                                 endAdornment: (
//                                   <InputAdornment position="end">
//                                     <IconButton
//                                       onClick={togglePasswordVisibility}
//                                       edge="end"
//                                       aria-label={showPassword ? "Hide password" : "Show password"}
//                                     >
//                                       {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
//                                     </IconButton>
//                                   </InputAdornment>
//                                 ),
//                               }}
//                               fullWidth
//                             />
//                             {isSignUp && (
//                               <InputField
//                                 name="confirmPassword"
//                                 label="Confirm Password"
//                                 type={showConfirmPassword ? "text" : "password"}
//                                 icon={LockIcon}
//                                 value={formData.confirmPassword}
//                                 onChange={handleInputChange}
//                                 error={formErrors.confirmPassword}
//                                 isExtraSmall={isExtraSmall}
//                                 isMobile={isMobile}
//                                 InputProps={{
//                                   endAdornment: (
//                                     <InputAdornment position="end">
//                                       <IconButton
//                                         onClick={toggleConfirmPasswordVisibility}
//                                         edge="end"
//                                         aria-label={showConfirmPassword ? "Hide password" : "Show password"}
//                                       >
//                                         {showConfirmPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
//                                       </IconButton>
//                                     </InputAdornment>
//                                   ),
//                                 }}
//                                 fullWidth
//                               />
//                             )}
//                             <motion.div variants={itemVariants}>
//                               <Box
//                                 sx={{
//                                   display: "flex",
//                                   flexDirection: isMobile ? "column" : "row",
//                                   justifyContent: "space-between",
//                                   alignItems: isMobile ? "flex-start" : "center",
//                                   mb: 2,
//                                   gap: isMobile ? 1 : 0,
//                                 }}
//                               >
//                                 <FormControlLabel
//                                   control={
//                                     <Checkbox
//                                       checked={rememberMe}
//                                       onChange={(e) => setRememberMe(e.target.checked)}
//                                       color="primary"
//                                     />
//                                   }
//                                   label={<Typography variant={isMobile ? "body2" : "body1"}>Remember me</Typography>}
//                                 />
//                                 {!isSignUp && (
//                                   <Link
//                                     href="#"
//                                     color="primary"
//                                     underline="hover"
//                                     onClick={(e) => {
//                                       e.preventDefault()
//                                       setSnackbar({
//                                         open: true,
//                                         message: "Password reset email sent!",
//                                         severity: "success",
//                                       })
//                                     }}
//                                     sx={{ fontSize: isMobile ? "0.875rem" : "1rem" }}
//                                   >
//                                     Forgot Password?
//                                   </Link>
//                                 )}
//                               </Box>
//                             </motion.div>
//                             <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
//                               <Button
//                                 type="submit"
//                                 fullWidth
//                                 variant="contained"
//                                 disabled={isSubmitting}
//                                 sx={{
//                                   mt: isExtraSmall ? 1 : isMobile ? 2 : 3,
//                                   mb: isExtraSmall ? 1 : isMobile ? 1 : 2,
//                                   py: isExtraSmall ? 1 : isMobile ? 1.5 : 2,
//                                   backgroundColor: "primary.main",
//                                   "&:hover": {
//                                     backgroundColor: "primary.dark",
//                                   },
//                                   transition: "all 0.3s ease-in-out",
//                                   fontSize: isMobile ? "0.875rem" : "1rem",
//                                 }}
//                               >
//                                 {isSubmitting ? <CircularProgress size={20} /> : isSignUp ? "Sign Up" : "Login"}
//                               </Button>
//                             </motion.div>
//                           </Box>
//                         )}
//                       </motion.div>
//                     </AnimatePresence>
//                   </Box>
//                 </Card>
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//         <Snackbar
//           open={snackbar.open}
//           autoHideDuration={6000}
//           onClose={handleCloseSnackbar}
//           anchorOrigin={{ vertical: "top", horizontal: "center" }}
//         >
//           <Alert
//             onClose={handleCloseSnackbar}
//             severity={snackbar.severity}
//             sx={{
//               width: "100%",
//               alignItems: "center",
//               "& .MuiAlert-icon": {
//                 fontSize: "1.5rem",
//               },
//             }}
//             elevation={6}
//             variant="filled"
//           >
//             <Typography variant="body1">{snackbar.message}</Typography>
//           </Alert>
//         </Snackbar>
//         <ErrorDialog
//           open={errorDialog.open}
//           onClose={handleCloseErrorDialog}
//           title={errorDialog.title}
//           message={errorDialog.message}
//         />
//       </Box>
//     </ThemeProvider>
//   )
// }

// export default LoginPage



// import React, { useState, useCallback, useRef, useMemo, useEffect } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import {
//   Person as PersonIcon,
//   Email as EmailIcon,
//   Lock as LockIcon,
//   Visibility as VisibilityIcon,
//   VisibilityOff as VisibilityOffIcon,
//   Close as CloseIcon,
//   Error as ErrorIcon,
// } from "@mui/icons-material"
// import {
//   Button,
//   TextField,
//   InputAdornment,
//   IconButton,
//   Typography,
//   Box,
//   Card,
//   Link,
//   ThemeProvider,
//   createTheme,
//   CssBaseline,
//   useMediaQuery,
//   Checkbox,
//   FormControlLabel,
//   CircularProgress,
//   Grid,
//   Snackbar,
//   Alert,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
// } from "@mui/material"

// // Theme definition
// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#004c40",
//       light: "#48A999",
//       dark: "#004C40",
//     },
//     secondary: {
//       main: "#FF6E40",
//       light: "#FFA06D",
//       dark: "#C53D13",
//     },
//     background: {
//       default: "#E0F2F1",
//       paper: "#FFFFFF",
//     },
//   },
//   typography: {
//     fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
//     h4: {
//       fontWeight: 700,
//       fontSize: "1.75rem",
//       "@media (max-width:600px)": {
//         fontSize: "1.5rem",
//       },
//     },
//     h5: {
//       fontWeight: 600,
//       fontSize: "1.5rem",
//       "@media (max-width:600px)": {
//         fontSize: "1.25rem",
//       },
//     },
//     h6: {
//       fontWeight: 600,
//       fontSize: "1.25rem",
//       "@media (max-width:600px)": {
//         fontSize: "1.1rem",
//       },
//     },
//     body1: {
//       fontSize: "1rem",
//       "@media (max-width:600px)": {
//         fontSize: "0.875rem",
//       },
//     },
//     body2: {
//       fontSize: "0.875rem",
//       "@media (max-width:600px)": {
//         fontSize: "0.75rem",
//       },
//     },
//     button: {
//       textTransform: "none",
//       fontWeight: 600,
//     },
//   },
//   shape: {
//     borderRadius: 12,
//   },
//   components: {
//     MuiTextField: {
//       styleOverrides: {
//         root: {
//           "& .MuiOutlinedInput-root": {
//             borderRadius: 12,
//             backgroundColor: "#F5F5F5",
//             "&:hover fieldset": {
//               borderColor: "#00796B",
//             },
//             "&.Mui-focused fieldset": {
//               borderColor: "#00796B",
//             },
//           },
//         },
//       },
//     },
//     MuiButton: {
//       styleOverrides: {
//         root: {
//           borderRadius: 25,
//           padding: "10px 20px",
//           boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//           transition: "all 0.3s ease",
//           "&:hover": {
//             transform: "translateY(-2px)",
//             boxShadow: "0 6px 8px rgba(0, 0, 0, 0.15)",
//           },
//         },
//       },
//     },
//     MuiCard: {
//       styleOverrides: {
//         root: {
//           boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
//           overflow: "visible",
//         },
//       },
//     },
//   },
// })

// // InputField component with enhanced animation
// const InputField = React.memo(({ icon: Icon, error, isExtraSmall, isMobile, fullWidth, ...props }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 20 }}
//     animate={{ opacity: 1, y: 0 }}
//     exit={{ opacity: 0, y: -20 }}
//     transition={{ duration: 0.5, ease: "easeInOut" }}
//   >
//     <TextField
//       fullWidth={fullWidth}
//       variant="outlined"
//       margin="normal"
//       size={isExtraSmall ? "small" : isMobile ? "small" : "medium"}
//       InputProps={{
//         startAdornment: (
//           <InputAdornment position="start">
//             <Icon sx={{ color: error ? "error.main" : "text.secondary" }} />
//           </InputAdornment>
//         ),
//       }}
//       error={!!error}
//       helperText={error}
//       sx={{
//         "& .MuiOutlinedInput-root": {
//           backgroundColor: "#F5F5F5",
//           ...((isExtraSmall || isMobile) && {
//             padding: "6px 12px",
//           }),
//         },
//       }}
//       {...props}
//     />
//   </motion.div>
// ))

// // OtpInput component
// const OtpInput = React.memo(({ otp, setOtp }) => {
//   const inputRefs = useRef([])

//   const handleChange = useCallback(
//     (element, index) => {
//       if (isNaN(element.value)) return false
//       const newOtp = [...otp]
//       newOtp[index] = element.value
//       setOtp(newOtp)
//       if (element.value !== "" && index < 5) {
//         inputRefs.current[index + 1].focus()
//       }
//     },
//     [otp, setOtp],
//   )

//   const handleKeyDown = useCallback(
//     (e, index) => {
//       if (e.key === "Backspace" && index > 0 && otp[index] === "") {
//         inputRefs.current[index - 1].focus()
//       }
//     },
//     [otp],
//   )

//   const handlePaste = useCallback(
//     (e) => {
//       e.preventDefault()
//       const pastedData = e.clipboardData.getData("text").slice(0, 6).split("")
//       const newOtp = [...otp]
//       pastedData.forEach((value, index) => {
//         if (index < 6 && !isNaN(value)) {
//           newOtp[index] = value
//         }
//       })
//       setOtp(newOtp)
//       if (pastedData.length === 6) {
//         inputRefs.current[5].focus()
//       } else {
//         inputRefs.current[pastedData.length].focus()
//       }
//     },
//     [otp, setOtp],
//   )

//   return (
//     <Box display="flex" justifyContent="center" my={2}>
//       {otp.map((digit, index) => (
//         <motion.div
//           key={index}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3, delay: index * 0.1 }}
//         >
//           <TextField
//             inputRef={(el) => (inputRefs.current[index] = el)}
//             variant="outlined"
//             margin="dense"
//             value={digit}
//             onChange={(e) => handleChange(e.target, index)}
//             onKeyDown={(e) => handleKeyDown(e, index)}
//             onPaste={handlePaste}
//             inputProps={{
//               maxLength: 1,
//               style: { textAlign: "center", fontSize: "1.5rem" },
//             }}
//             sx={{ width: "3rem", mx: 0.5 }}
//           />
//         </motion.div>
//       ))}
//     </Box>
//   )
// })

// // ErrorDialog component
// const ErrorDialog = ({ open, onClose, title, message }) => {
//   return (
//     <AnimatePresence>
//       {open && (
//         <Dialog
//           open={open}
//           onClose={onClose}
//           PaperComponent={motion.div}
//           PaperProps={{
//             initial: { opacity: 0, y: -50 },
//             animate: { opacity: 1, y: 0 },
//             exit: { opacity: 0, y: -50 },
//             transition: { duration: 0.3 },
//           }}
//         >
//           <DialogTitle sx={{ m: 0, p: 2, bgcolor: "error.main", color: "error.contrastText" }}>
//             <IconButton
//               aria-label="close"
//               onClick={onClose}
//               sx={{
//                 position: "absolute",
//                 right: 8,
//                 top: 8,
//                 color: "inherit",
//               }}
//             >
//               <CloseIcon />
//             </IconButton>
//             <Typography variant="h6" component="div" sx={{ display: "flex", alignItems: "center" }}>
//               <ErrorIcon sx={{ mr: 1 }} />
//               {title || "Error"}
//             </Typography>
//           </DialogTitle>
//           <DialogContent sx={{ mt: 2 }}>
//             <Typography variant="body1">{message}</Typography>
//           </DialogContent>
//           <DialogActions>
//             <Button onClick={onClose} color="primary" variant="contained">
//               Close
//             </Button>
//           </DialogActions>
//         </Dialog>
//       )}
//     </AnimatePresence>
//   )
// }

// // Main LoginPage component
// const LoginPage = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false)
//   const [showPassword, setShowPassword] = useState(false)
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false)
//   const [isSignUp, setIsSignUp] = useState(false)
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   })
//   const [formErrors, setFormErrors] = useState({})
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [rememberMe, setRememberMe] = useState(false)
//   const [isOtpVerification, setIsOtpVerification] = useState(false)
//   const [otp, setOtp] = useState(new Array(6).fill(""))
//   const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" })
//   const [paymentStatus, setPaymentStatus] = useState(null)
//   const [errorDialog, setErrorDialog] = useState({ open: false, title: "", message: "" })

//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
//   const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"))
//   const isExtraSmall = useMediaQuery("(max-width:360px)")

//   const openStudentPortal = useCallback(() => {
//     if (paymentStatus === "success") {
//       window.open("/student-portal", "_blank", "noopener,noreferrer")
//     }
//   }, [paymentStatus])

//   const signUp = async (userData) => {
//     const response = await fetch("/api/register", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         firstname: userData.firstName,
//         lastname: userData.lastName,
//         mail: userData.email,
//         password: userData.password,
//         confirmpassword: userData.confirmPassword,
//       }),
//     })

//     if (!response.ok) {
//       const errorData = await response.json()
//       throw new Error(errorData.message || "Signup failed")
//     }

//     return response.json()
//   }

//   const signIn = async (userData) => {
//     const response = await fetch("/api/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         mail: userData.email,
//         password: userData.password,
//       }),
//     })

//     if (!response.ok) {
//       const errorData = await response.json()
//       throw new Error(errorData.message || "Login failed")
//     }

//     const data = await response.json()

//     // Navigate to student portal after successful sign-in
//     if (data.success) {
//       navigateToStudentPortal()
//     }

//     return data
//   }

//   const navigateToStudentPortal = () => {
//     window.location.href = "/student-portal"
//   }

//   const handleModalToggle = useCallback(() => {
//     setIsModalOpen((prev) => !prev)
//     setFormData({ firstName: "", lastName: "", email: "", password: "", confirmPassword: "" })
//     setFormErrors({})
//     setIsOtpVerification(false)
//     setOtp(new Array(6).fill(""))
//     setPaymentStatus(null)
//   }, [])

//   const handleInputChange = useCallback(
//     (e) => {
//       const { name, value } = e.target
//       setFormData((prev) => ({ ...prev, [name]: value }))
//       if (formErrors[name]) {
//         setFormErrors((prev) => ({ ...prev, [name]: undefined }))
//       }
//     },
//     [formErrors],
//   )

//   const validateForm = useCallback(() => {
//     const errors = {}
//     if (isSignUp) {
//       if (!formData.firstName) errors.firstName = "First name is required"
//       if (!formData.lastName) errors.lastName = "Last name is required"
//     }
//     if (!formData.email) {
//       errors.email = "Email is required"
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       errors.email = "Email is invalid"
//     }
//     if (!formData.password) {
//       errors.password = "Password is required"
//     } else if (formData.password.length < 8) {
//       errors.password = "Password must be at least 8 characters"
//     }
//     if (isSignUp) {
//       if (!formData.confirmPassword) {
//         errors.confirmPassword = "Please confirm your password"
//       } else if (formData.password !== formData.confirmPassword) {
//         errors.confirmPassword = "Passwords do not match"
//       }
//     }
//     setFormErrors(errors)
//     return Object.keys(errors).length === 0
//   }, [formData, isSignUp])

//   const generateOtp = useCallback(async () => {
//     try {
//       const response = await fetch("/api/otp-generate", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           mail: formData.email,
//         }),
//       })

//       if (!response.ok) {
//         throw new Error("OTP generation failed")
//       }

//       setSnackbar({ open: true, message: "OTP sent to your email!", severity: "success" })
//       setIsOtpVerification(true)
//     } catch (error) {
//       setSnackbar({ open: true, message: "Failed to generate OTP. Please try again.", severity: "error" })
//     }
//   }, [formData.email])

//   const handlePayment = useCallback(() => {
//     const options = {
//       key: "YOUR_RAZORPAY_KEY",
//       amount: 50000,
//       currency: "INR",
//       name: "Student Portal Access",
//       description: "Payment for Student Portal Access",
//       handler: (response) => {
//         setPaymentStatus("success")
//         setTimeout(() => {
//           openStudentPortal()
//         }, 2000)
//       },
//       modal: {
//         ondismiss: () => {
//           setPaymentStatus("failed")
//         },
//       },
//       prefill: {
//         email: formData.email,
//       },
//       theme: {
//         color: "#00796B",
//       },
//     }

//     setPaymentStatus("pending")
//     const rzp = new window.Razorpay(options)
//     rzp.open()
//   }, [formData.email, openStudentPortal])

//   const onSubmit = useCallback(
//     async (e) => {
//       e.preventDefault()
//       if (validateForm()) {
//         setIsSubmitting(true)
//         try {
//           if (isSignUp) {
//             await signUp(formData)
//             await generateOtp()
//           } else {
//             await signIn(formData)
//           }
//         } catch (error) {
//           if (error.message.includes("Login failed") || error.message.includes("Signup failed")) {
//             setErrorDialog({
//               open: true,
//               title: isSignUp ? "Signup Error" : "Login Error",
//               message: error.message || "An error occurred. Please try again.",
//             })
//           } else {
//             setSnackbar({
//               open: true,
//               message: error.message || "An error occurred. Please try again.",
//               severity: "error",
//             })
//           }
//         } finally {
//           setIsSubmitting(false)
//         }
//       }
//     },
//     [formData, isSignUp, validateForm, generateOtp, signUp, signIn],
//   )

//   const handleOtpSubmit = useCallback(
//     async (e) => {
//       e.preventDefault()
//       setIsSubmitting(true)
//       try {
//         const response = await fetch("/api/otp-validate", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             mail: formData.email,
//             otp: otp.join(""),
//           }),
//         })

//         if (!response.ok) {
//           throw new Error("OTP verification failed")
//         }

//         handlePayment()
//       } catch (error) {
//         setSnackbar({ open: true, message: "OTP verification failed. Please try again.", severity: "error" })
//       } finally {
//         setIsSubmitting(false)
//       }
//     },
//     [formData.email, otp, handlePayment],
//   )

//   const togglePasswordVisibility = useCallback(() => {
//     setShowPassword((prev) => !prev)
//   }, [])

//   const toggleConfirmPasswordVisibility = useCallback(() => {
//     setShowConfirmPassword((prev) => !prev)
//   }, [])

//   const handleCloseSnackbar = useCallback(() => {
//     setSnackbar((prev) => ({ ...prev, open: false }))
//   }, [])

//   const handleCloseErrorDialog = useCallback(() => {
//     setErrorDialog((prev) => ({ ...prev, open: false }))
//   }, [])

//   const containerVariants = useMemo(
//     () => ({
//       hidden: { opacity: 0, scale: 0.8 },
//       visible: {
//         opacity: 1,
//         scale: 1,
//         transition: {
//           duration: 0.5,
//           ease: "easeOut",
//           staggerChildren: 0.1,
//           delayChildren: 0.3,
//         },
//       },
//       exit: {
//         opacity: 0,
//         scale: 0.8,
//         transition: {
//           duration: 0.5,
//           ease: "easeIn",
//         },
//       },
//     }),
//     [],
//   )

//   const itemVariants = useMemo(
//     () => ({
//       hidden: { opacity: 0, y: 20 },
//       visible: {
//         opacity: 1,
//         y: 0,
//         transition: { duration: 0.5, ease: "easeOut" },
//       },
//     }),
//     [],
//   )

//   const modalVariants = useMemo(
//     () => ({
//       hidden: { opacity: 0, y: 50, scale: 0.95 },
//       visible: {
//         opacity: 1,
//         y: 0,
//         scale: 1,
//         transition: {
//           duration: 0.5,
//           ease: "easeOut",
//           type: "spring",
//           stiffness: 300,
//           damping: 30,
//         },
//       },
//       exit: {
//         opacity: 0,
//         y: 50,
//         scale: 0.95,
//         transition: {
//           duration: 0.5,
//           ease: "easeIn",
//         },
//       },
//     }),
//     [],
//   )

//   const overlayVariants = useMemo(
//     () => ({
//       hidden: { opacity: 0 },
//       visible: { opacity: 1, transition: { duration: 0.3 } },
//       exit: { opacity: 0, transition: { duration: 0.3 } },
//     }),
//     [],
//   )

//   useEffect(() => {
//     const script = document.createElement("script")
//     script.src = "https://checkout.razorpay.com/v1/checkout.js"
//     script.async = true
//     document.body.appendChild(script)

//     return () => {
//       document.body.removeChild(script)
//     }
//   }, [])

//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" width="100%">
//         <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//           <Button
//             variant="contained"
//             onClick={handleModalToggle}
//             startIcon={<PersonIcon />}
//             sx={{
//               backgroundColor: "primary.main",
//               "&:hover": {
//                 backgroundColor: "primary.dark",
//               },
//             }}
//           >
//             Sign In
//           </Button>
//         </motion.div>
//         <AnimatePresence>
//           {isModalOpen && (
//             <motion.div
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               variants={overlayVariants}
//               style={{
//                 position: "fixed",
//                 top: 0,
//                 left: 0,
//                 right: 0,
//                 bottom: 0,
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 background: "rgba(0, 0, 0, 0.5)",
//                 zIndex: 1000,
//               }}
//               onClick={handleModalToggle}
//             >
//               <motion.div
//                 variants={modalVariants}
//                 style={{
//                   width: isMobile ? "100%" : isTablet ? "90%" : "800px",
//                   maxWidth: "100%",
//                   height: isMobile ? "100%" : "auto",
//                   maxHeight: isMobile ? "100%" : "90vh",
//                   display: "flex",
//                   flexDirection: isMobile ? "column" : "row",
//                   overflow: "auto",
//                   borderRadius: isMobile ? 0 : "20px",
//                 }}
//                 onClick={(e) => e.stopPropagation()}
//               >
//                 <Card
//                   sx={{
//                     width: "100%",
//                     height: "100%",
//                     display: "flex",
//                     flexDirection: isMobile ? "column" : "row",
//                     overflow: "hidden",
//                   }}
//                 >
//                   <IconButton
//                     sx={{
//                       position: "absolute",
//                       top: isMobile ? 16 : 8,
//                       right: isMobile ? 16 : 8,
//                       color: isMobile ? "primary.main" : "black",
//                       "&:hover": {
//                         backgroundColor: isMobile ? "white" : "rgba(0,0,0,0.1)",
//                       },
//                       zIndex: 1,
//                     }}
//                     onClick={handleModalToggle}
//                   >
//                     <CloseIcon />
//                   </IconButton>

//                   {/* ....................................issue 2.......................................... */}
//                   <Box
//                     sx={{
//                       width: isMobile ? "100%" : "40%",
//                       minHeight: isMobile ? "150px" : "auto",
//                       background: "linear-gradient(135deg,rgb(1, 61, 54) 0%,rgb(9, 61, 53) 100%)",
//                       display: "flex",
//                       flexDirection: "column",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       color: "white",
//                       p: isMobile ? 2 : 4,
//                       position: "relative",
//                       overflow: "hidden",
//                     }}
//                   >
//                     <motion.div variants={itemVariants}>
//                       <Typography variant={isMobile ? "h6" : "h5"} fontWeight="bold" mb={1}>
//                         {isSignUp ? "Join Us!" : "Welcome Back!"}
//                       </Typography>
//                     </motion.div>
//                     <motion.div variants={itemVariants}>
//                       <Typography variant="body2" textAlign="center" mb={2}>
//                         {isSignUp ? "Already have an account?" : "Don't have an account yet?"}
//                       </Typography>
//                     </motion.div>
//                     <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                       <Button
//                         variant="outlined"
//                         onClick={() => setIsSignUp(!isSignUp)}
//                         sx={{
//                           color: "white",
//                           borderColor: "white",
//                           "&:hover": {
//                             borderColor: "white",
//                             backgroundColor: "rgba(255,255,255,0.1)",
//                           },
//                         }}
//                       >
//                         {isSignUp ? "Sign In" : "Sign Up"}
//                       </Button>
//                     </motion.div>
//                   </Box>
//                   <Box
//                     sx={{
//                       width: isMobile ? "100%" : "60%",
//                       height: isMobile ? "auto" : "auto",
//                       p: isExtraSmall ? 2 : isMobile ? 3 : 4,
//                       display: "flex",
//                       flexDirection: "column",
//                       alignItems: "center",
//                       bgcolor: "background.paper",
//                       position: "relative",
//                       overflow: "auto",
//                     }}
//                   >
//                     <AnimatePresence mode="wait">
//                       <motion.div
//                         key={isSignUp ? "signup" : "signin"}
//                         variants={containerVariants}
//                         initial="hidden"
//                         animate="visible"
//                         exit="exit"
//                         style={{
//                           width: "100%",
//                           display: "flex",
//                           flexDirection: "column",
//                           alignItems: "center",
//                         }}
//                       >
//                         <motion.div variants={itemVariants}>
//                           <Typography
//                             variant={isMobile ? "h6" : "h5"}
//                             color="primary"
//                             fontWeight="bold"
//                             mb={isMobile ? 2 : 4}
//                           >
//                             {isOtpVerification ? "Verify OTP" : isSignUp ? "Create Account" : "Login"}
//                           </Typography>
//                         </motion.div>
//                         {isOtpVerification ? (
//                           <Box component="form" onSubmit={handleOtpSubmit} width="100%" maxWidth="400px">
//                             <motion.div variants={itemVariants}>
//                               <Typography variant="body1" align="center" gutterBottom>
//                                 Enter the 6-digit OTP sent to your email to complete your account creation
//                               </Typography>
//                             </motion.div>
//                             <motion.div variants={itemVariants}>
//                               <OtpInput otp={otp} setOtp={setOtp} />
//                             </motion.div>
//                             <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
//                               <Button
//                                 type="submit"
//                                 fullWidth
//                                 variant="contained"
//                                 disabled={isSubmitting || otp.some((digit) => digit === "")}
//                                 sx={{
//                                   mt: 3,
//                                   mb: 2,
//                                   backgroundColor: "primary.main",
//                                   "&:hover": {
//                                     backgroundColor: "primary.dark",
//                                   },
//                                 }}
//                               >
//                                 {isSubmitting ? <CircularProgress size={24} /> : "Verify OTP & Create Account"}
//                               </Button>
//                             </motion.div>
//                           </Box>
//                         ) : (
//                           <Box component="form" onSubmit={onSubmit} width="100%" maxWidth={isMobile ? "100%" : "400px"}>
//                             {isSignUp && (
//                               <Grid container spacing={isExtraSmall ? 1 : isMobile ? 1.5 : 2}>
//                                 <Grid item xs={12} sm={isMobile ? 12 : 6}>
//                                   <InputField
//                                     name="firstName"
//                                     label="First Name"
//                                     icon={PersonIcon}
//                                     value={formData.firstName}
//                                     onChange={handleInputChange}
//                                     error={formErrors.firstName}
//                                     isExtraSmall={isExtraSmall}
//                                     isMobile={isMobile}
//                                     fullWidth
//                                   />
//                                 </Grid>
//                                 <Grid item xs={12} sm={isMobile ? 12 : 6}>
//                                   <InputField
//                                     name="lastName"
//                                     label="Last Name"
//                                     icon={PersonIcon}
//                                     value={formData.lastName}
//                                     onChange={handleInputChange}
//                                     error={formErrors.lastName}
//                                     isExtraSmall={isExtraSmall}
//                                     isMobile={isMobile}
//                                     fullWidth
//                                   />
//                                 </Grid>
//                               </Grid>
//                             )}
//                             <InputField
//                               name="email"
//                               label="Email"
//                               icon={EmailIcon}
//                               value={formData.email}
//                               onChange={handleInputChange}
//                               error={formErrors.email}
//                               isExtraSmall={isExtraSmall}
//                               isMobile={isMobile}
//                               fullWidth
//                             />
//                             <InputField
//                               name="password"
//                               label={isSignUp ? "New Password" : "Password"}
//                               type={showPassword ? "text" : "password"}
//                               icon={LockIcon}
//                               value={formData.password}
//                               onChange={handleInputChange}
//                               error={formErrors.password}
//                               isExtraSmall={isExtraSmall}
//                               isMobile={isMobile}
//                               InputProps={{
//                                 endAdornment: (
//                                   <InputAdornment position="end">
//                                     <IconButton
//                                       onClick={togglePasswordVisibility}
//                                       edge="end"
//                                       aria-label={showPassword ? "Hide password" : "Show password"}
//                                     >
//                                       {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
//                                     </IconButton>
//                                   </InputAdornment>
//                                 ),
//                               }}
//                               fullWidth
//                             />
//                             {isSignUp && (
//                               <InputField
//                                 name="confirmPassword"
//                                 label="Confirm Password"
//                                 type={showConfirmPassword ? "text" : "password"}
//                                 icon={LockIcon}
//                                 value={formData.confirmPassword}
//                                 onChange={handleInputChange}
//                                 error={formErrors.confirmPassword}
//                                 isExtraSmall={isExtraSmall}
//                                 isMobile={isMobile}
//                                 InputProps={{
//                                   endAdornment: (
//                                     <InputAdornment position="end">
//                                       <IconButton
//                                         onClick={toggleConfirmPasswordVisibility}
//                                         edge="end"
//                                         aria-label={showConfirmPassword ? "Hide password" : "Show password"}
//                                       >
//                                         {showConfirmPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
//                                       </IconButton>
//                                     </InputAdornment>
//                                   ),
//                                 }}
//                                 fullWidth
//                               />
//                             )}
//                             <motion.div variants={itemVariants}>
//                               <Box
//                                 sx={{
//                                   display: "flex",
//                                   flexDirection: isMobile ? "column" : "row",
//                                   justifyContent: "space-between",
//                                   alignItems: isMobile ? "flex-start" : "center",
//                                   mb: 2,
//                                   gap: isMobile ? 1 : 0,
//                                 }}
//                               >
//                                 <FormControlLabel
//                                   control={
//                                     <Checkbox
//                                       checked={rememberMe}
//                                       onChange={(e) => setRememberMe(e.target.checked)}
//                                       color="primary"
//                                     />
//                                   }
//                                   label={<Typography variant={isMobile ? "body2" : "body1"}>Remember me</Typography>}
//                                 />
//                                 {!isSignUp && (
//                                   <Link
//                                     href="#"
//                                     color="primary"
//                                     underline="hover"
//                                     onClick={(e) => {
//                                       e.preventDefault()
//                                       setSnackbar({
//                                         open: true,
//                                         message: "Password reset email sent!",
//                                         severity: "success",
//                                       })
//                                     }}
//                                     sx={{ fontSize: isMobile ? "0.875rem" : "1rem" }}
//                                   >
//                                     Forgot Password?
//                                   </Link>
//                                 )}
//                               </Box>
//                             </motion.div>
//                             <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
//                               <Button
//                                 type="submit"
//                                 fullWidth
//                                 variant="contained"
//                                 disabled={isSubmitting}
//                                 sx={{
//                                   mt: isExtraSmall ? 1 : isMobile ? 2 : 3,
//                                   mb: isExtraSmall ? 1 : isMobile ? 1 : 2,
//                                   py: isExtraSmall ? 1 : isMobile ? 1.5 : 2,
//                                   backgroundColor: "primary.main",
//                                   "&:hover": {
//                                     backgroundColor: "primary.dark",
//                                   },
//                                   transition: "all 0.3s ease-in-out",
//                                   fontSize: isMobile ? "0.875rem" : "1rem",
//                                 }}
//                               >
//                                 {isSubmitting ? <CircularProgress size={20} /> : isSignUp ? "Sign Up" : "Login"}
//                               </Button>
//                             </motion.div>
//                           </Box>
//                         )}
//                       </motion.div>
//                     </AnimatePresence>
//                   </Box>
//                 </Card>
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//         <Snackbar
//           open={snackbar.open}
//           autoHideDuration={6000}
//           onClose={handleCloseSnackbar}
//           anchorOrigin={{ vertical: "top", horizontal: "center" }}
//         >
//           <Alert
//             onClose={handleCloseSnackbar}
//             severity={snackbar.severity}
//             sx={{
//               width: "100%",
//               alignItems: "center",
//               "& .MuiAlert-icon": {
//                 fontSize: "1.5rem",
//               },
//             }}
//             elevation={6}
//             variant="filled"
//           >
//             <Typography variant="body1">{snackbar.message}</Typography>
//           </Alert>
//         </Snackbar>
//         <ErrorDialog
//           open={errorDialog.open}
//           onClose={handleCloseErrorDialog}
//           title={errorDialog.title}
//           message={errorDialog.message}
//         />
//       </Box>
//     </ThemeProvider>
//   )
// }

// export default LoginPage




// import React, { useState, useCallback, useRef, useMemo } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import {
//   Person as PersonIcon,
//   Email as EmailIcon,
//   Lock as LockIcon,
//   Visibility as VisibilityIcon,
//   VisibilityOff as VisibilityOffIcon,
//   Close as CloseIcon,
//   Error as ErrorIcon,
//   School as SchoolIcon,
// } from "@mui/icons-material"
// import {
//   Button,
//   TextField,
//   InputAdornment,
//   IconButton,
//   Typography,
//   Box,
//   Card,
//   Link,
//   ThemeProvider,
//   createTheme,
//   CssBaseline,
//   useMediaQuery,
//   Checkbox,
//   FormControlLabel,
//   CircularProgress,
//   Grid,
//   Snackbar,
//   Alert,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   Paper,
// } from "@mui/material"

// // Theme definition
// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#004c40",
//       light: "#48A999",
//       dark: "#004C40",
//     },
//     secondary: {
//       main: "#FF6E40",
//       light: "#FFA06D",
//       dark: "#C53D13",
//     },
//     background: {
//       default: "#E0F2F1",
//       paper: "#FFFFFF",
//     },
//   },
//   typography: {
//     fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
//     h4: {
//       fontWeight: 700,
//       fontSize: "1.75rem",
//       "@media (max-width:600px)": {
//         fontSize: "1.5rem",
//       },
//     },
//     h5: {
//       fontWeight: 600,
//       fontSize: "1.5rem",
//       "@media (max-width:600px)": {
//         fontSize: "1.25rem",
//       },
//     },
//     h6: {
//       fontWeight: 600,
//       fontSize: "1.25rem",
//       "@media (max-width:600px)": {
//         fontSize: "1.1rem",
//       },
//     },
//     body1: {
//       fontSize: "1rem",
//       "@media (max-width:600px)": {
//         fontSize: "0.875rem",
//       },
//     },
//     body2: {
//       fontSize: "0.875rem",
//       "@media (max-width:600px)": {
//         fontSize: "0.75rem",
//       },
//     },
//     button: {
//       textTransform: "none",
//       fontWeight: 600,
//     },
//   },
//   shape: {
//     borderRadius: 12,
//   },
//   components: {
//     MuiTextField: {
//       styleOverrides: {
//         root: {
//           "& .MuiOutlinedInput-root": {
//             borderRadius: 12,
//             backgroundColor: "#F5F5F5",
//             "&:hover fieldset": {
//               borderColor: "#00796B",
//             },
//             "&.Mui-focused fieldset": {
//               borderColor: "#00796B",
//             },
//           },
//         },
//       },
//     },
//     MuiButton: {
//       styleOverrides: {
//         root: {
//           borderRadius: 25,
//           padding: "10px 20px",
//           boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//           transition: "all 0.3s ease",
//           "&:hover": {
//             transform: "translateY(-2px)",
//             boxShadow: "0 6px 8px rgba(0, 0, 0, 0.15)",
//           },
//         },
//       },
//     },
//     MuiCard: {
//       styleOverrides: {
//         root: {
//           boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
//           overflow: "visible",
//         },
//       },
//     },
//   },
// })

// // InputField component with enhanced animation
// const InputField = React.memo(({ icon: Icon, error, isExtraSmall, isMobile, fullWidth, ...props }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 20 }}
//     animate={{ opacity: 1, y: 0 }}
//     exit={{ opacity: 0, y: -20 }}
//     transition={{ duration: 0.5, ease: "easeInOut" }}
//   >
//     <TextField
//       fullWidth={fullWidth}
//       variant="outlined"
//       margin="normal"
//       size={isExtraSmall ? "small" : isMobile ? "small" : "medium"}
//       InputProps={{
//         startAdornment: (
//           <InputAdornment position="start">
//             <Icon sx={{ color: error ? "error.main" : "text.secondary" }} />
//           </InputAdornment>
//         ),
//       }}
//       error={!!error}
//       helperText={error}
//       sx={{
//         "& .MuiOutlinedInput-root": {
//           backgroundColor: "#F5F5F5",
//           ...((isExtraSmall || isMobile) && {
//             padding: "6px 12px",
//           }),
//         },
//       }}
//       {...props}
//     />
//   </motion.div>
// ))

// // OtpInput component
// const OtpInput = React.memo(({ otp, setOtp }) => {
//   const inputRefs = useRef([])

//   const handleChange = useCallback(
//     (element, index) => {
//       if (isNaN(element.value)) return false
//       const newOtp = [...otp]
//       newOtp[index] = element.value
//       setOtp(newOtp)
//       if (element.value !== "" && index < 5) {
//         inputRefs.current[index + 1].focus()
//       }
//     },
//     [otp, setOtp],
//   )

//   const handleKeyDown = useCallback(
//     (e, index) => {
//       if (e.key === "Backspace" && index > 0 && otp[index] === "") {
//         inputRefs.current[index - 1].focus()
//       }
//     },
//     [otp],
//   )

//   const handlePaste = useCallback(
//     (e) => {
//       e.preventDefault()
//       const pastedData = e.clipboardData.getData("text").slice(0, 6).split("")
//       const newOtp = [...otp]
//       pastedData.forEach((value, index) => {
//         if (index < 6 && !isNaN(value)) {
//           newOtp[index] = value
//         }
//       })
//       setOtp(newOtp)
//       if (pastedData.length === 6) {
//         inputRefs.current[5].focus()
//       } else {
//         inputRefs.current[pastedData.length].focus()
//       }
//     },
//     [otp, setOtp],
//   )

//   return (
//     <Box display="flex" justifyContent="center" my={2}>
//       {otp.map((digit, index) => (
//         <motion.div
//           key={index}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3, delay: index * 0.1 }}
//         >
//           <TextField
//             inputRef={(el) => (inputRefs.current[index] = el)}
//             variant="outlined"
//             margin="dense"
//             value={digit}
//             onChange={(e) => handleChange(e.target, index)}
//             onKeyDown={(e) => handleKeyDown(e, index)}
//             onPaste={handlePaste}
//             inputProps={{
//               maxLength: 1,
//               style: { textAlign: "center", fontSize: "1.5rem" },
//             }}
//             sx={{ width: "3rem", mx: 0.5 }}
//           />
//         </motion.div>
//       ))}
//     </Box>
//   )
// })

// // ErrorDialog component
// const ErrorDialog = ({ open, onClose, title, message }) => {
//   return (
//     <AnimatePresence>
//       {open && (
//         <Dialog
//           open={open}
//           onClose={onClose}
//           PaperComponent={motion.div}
//           PaperProps={{
//             initial: { opacity: 0, y: -50 },
//             animate: { opacity: 1, y: 0 },
//             exit: { opacity: 0, y: -50 },
//             transition: { duration: 0.3 },
//           }}
//         >
//           <DialogTitle sx={{ m: 0, p: 2, bgcolor: "error.main", color: "error.contrastText" }}>
//             <IconButton
//               aria-label="close"
//               onClick={onClose}
//               sx={{
//                 position: "absolute",
//                 right: 8,
//                 top: 8,
//                 color: "inherit",
//               }}
//             >
//               <CloseIcon />
//             </IconButton>
//             <Typography variant="h6" component="div" sx={{ display: "flex", alignItems: "center" }}>
//               <ErrorIcon sx={{ mr: 1 }} />
//               {title || "Error"}
//             </Typography>
//           </DialogTitle>
//           <DialogContent sx={{ mt: 2 }}>
//             <Typography variant="body1">{message}</Typography>
//           </DialogContent>
//           <DialogActions>
//             <Button onClick={onClose} color="primary" variant="contained">
//               Close
//             </Button>
//           </DialogActions>
//         </Dialog>
//       )}
//     </AnimatePresence>
//   )
// }

// // Main LoginPage component
// const LoginPage = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false)
//   const [showPassword, setShowPassword] = useState(false)
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false)
//   const [isSignUp, setIsSignUp] = useState(false)
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   })
//   const [formErrors, setFormErrors] = useState({})
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [rememberMe, setRememberMe] = useState(false)
//   const [isOtpVerification, setIsOtpVerification] = useState(false)
//   const [otp, setOtp] = useState(new Array(6).fill(""))
//   const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" })
//   const [errorDialog, setErrorDialog] = useState({ open: false, title: "", message: "" })

//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
//   const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"))
//   const isExtraSmall = useMediaQuery("(max-width:360px)")

//   const signUp = async (userData) => {
//     const response = await fetch("/api/register", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         firstname: userData.firstName,
//         lastname: userData.lastName,
//         mail: userData.email,
//         password: userData.password,
//         confirmpassword: userData.confirmPassword,
//       }),
//     })

//     if (!response.ok) {
//       const errorData = await response.json()
//       throw new Error(errorData.message || "Signup failed")
//     }

//     return response.json()
//   }

//   const signIn = async (userData) => {
//     const response = await fetch("/api/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         mail: userData.email,
//         password: userData.password,
//       }),
//     })

//     if (!response.ok) {
//       const errorData = await response.json()
//       throw new Error(errorData.message || "Login failed")
//     }

//     const data = await response.json()

//     // Navigate to student portal after successful sign-in
//     if (data.success) {
//       navigateToStudentPortal()
//     }

//     return data
//   }

//   const navigateToStudentPortal = () => {
//     window.location.href = "/student-portal"
//   }

//   const handleModalToggle = useCallback(() => {
//     setIsModalOpen((prev) => !prev)
//     setFormData({ firstName: "", lastName: "", email: "", password: "", confirmPassword: "" })
//     setFormErrors({})
//     setIsOtpVerification(false)
//     setOtp(new Array(6).fill(""))
//   }, [])

//   const handleInputChange = useCallback(
//     (e) => {
//       const { name, value } = e.target
//       setFormData((prev) => ({ ...prev, [name]: value }))
//       if (formErrors[name]) {
//         setFormErrors((prev) => ({ ...prev, [name]: undefined }))
//       }
//     },
//     [formErrors],
//   )

//   const validateForm = useCallback(() => {
//     const errors = {}
//     if (isSignUp) {
//       if (!formData.firstName) errors.firstName = "First name is required"
//       if (!formData.lastName) errors.lastName = "Last name is required"
//     }
//     if (!formData.email) {
//       errors.email = "Email is required"
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       errors.email = "Email is invalid"
//     }
//     if (!formData.password) {
//       errors.password = "Password is required"
//     } else if (formData.password.length < 8) {
//       errors.password = "Password must be at least 8 characters"
//     }
//     if (isSignUp) {
//       if (!formData.confirmPassword) {
//         errors.confirmPassword = "Please confirm your password"
//       } else if (formData.password !== formData.confirmPassword) {
//         errors.confirmPassword = "Passwords do not match"
//       }
//     }
//     setFormErrors(errors)
//     return Object.keys(errors).length === 0
//   }, [formData, isSignUp])

//   const generateOtp = useCallback(async () => {
//     try {
//       const response = await fetch("/api/otp-generate", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           mail: formData.email,
//         }),
//       })

//       if (!response.ok) {
//         throw new Error("OTP generation failed")
//       }

//       setSnackbar({ open: true, message: "OTP sent to your email!", severity: "success" })
//       setIsOtpVerification(true)
//     } catch (error) {
//       setSnackbar({ open: true, message: "Failed to generate OTP. Please try again.", severity: "error" })
//     }
//   }, [formData.email])

//   const onSubmit = useCallback(
//     async (e) => {
//       e.preventDefault()

//       if (validateForm()) {
//         setIsSubmitting(true)
//         try {
//           if (isSignUp) {
//             await signUp(formData)
//             await generateOtp()
//           } else {
//             await signIn(formData)
//           }
//         } catch (error) {
//           if (error.message.includes("Login failed") || error.message.includes("Signup failed")) {
//             setErrorDialog({
//               open: true,
//               title: isSignUp ? "Signup Error" : "Login Error",
//               message: error.message || "An error occurred. Please try again.",
//             })
//           } else {
//             setSnackbar({
//               open: true,
//               message: error.message || "An error occurred. Please try again.",
//               severity: "error",
//             })
//           }
//         } finally {
//           setIsSubmitting(false)
//         }
//       }
//     },
//     [formData, isSignUp, validateForm, generateOtp, signUp, signIn],
//   )

//   const handleOtpSubmit = useCallback(
//     async (e) => {
//       e.preventDefault()
//       setIsSubmitting(true)
//       try {
//         const response = await fetch("/api/otp-validate", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             mail: formData.email,
//             otp: otp.join(""),
//           }),
//         })

//         if (!response.ok) {
//           throw new Error("OTP verification failed")
//         }

//         // OTP verification successful, navigate to student portal
//         navigateToStudentPortal()
//       } catch (error) {
//         setSnackbar({ open: true, message: "OTP verification failed. Please try again.", severity: "error" })
//       } finally {
//         setIsSubmitting(false)
//       }
//     },
//     [formData.email, otp, navigateToStudentPortal],
//   )

//   const togglePasswordVisibility = useCallback(() => {
//     setShowPassword((prev) => !prev)
//   }, [])

//   const toggleConfirmPasswordVisibility = useCallback(() => {
//     setShowConfirmPassword((prev) => !prev)
//   }, [])

//   const handleCloseSnackbar = useCallback(() => {
//     setSnackbar((prev) => ({ ...prev, open: false }))
//   }, [])

//   const handleCloseErrorDialog = useCallback(() => {
//     setErrorDialog((prev) => ({ ...prev, open: false }))
//   }, [])

//   const containerVariants = useMemo(
//     () => ({
//       hidden: { opacity: 0, scale: 0.8 },
//       visible: {
//         opacity: 1,
//         scale: 1,
//         transition: {
//           duration: 0.5,
//           ease: "easeOut",
//           staggerChildren: 0.1,
//           delayChildren: 0.3,
//         },
//       },
//       exit: {
//         opacity: 0,
//         scale: 0.8,
//         transition: {
//           duration: 0.5,
//           ease: "easeIn",
//         },
//       },
//     }),
//     [],
//   )

//   const itemVariants = useMemo(
//     () => ({
//       hidden: { opacity: 0, y: 20 },
//       visible: {
//         opacity: 1,
//         y: 0,
//         transition: { duration: 0.5, ease: "easeOut" },
//       },
//     }),
//     [],
//   )

//   const modalVariants = useMemo(
//     () => ({
//       hidden: { opacity: 0, y: 50, scale: 0.95 },
//       visible: {
//         opacity: 1,
//         y: 0,
//         scale: 1,
//         transition: {
//           duration: 0.5,
//           ease: "easeOut",
//           type: "spring",
//           stiffness: 300,
//           damping: 30,
//         },
//       },
//       exit: {
//         opacity: 0,
//         y: 50,
//         scale: 0.95,
//         transition: {
//           duration: 0.5,
//           ease: "easeIn",
//         },
//       },
//     }),
//     [],
//   )

//   const overlayVariants = useMemo(
//     () => ({
//       hidden: { opacity: 0 },
//       visible: { opacity: 1, transition: { duration: 0.3 } },
//       exit: { opacity: 0, transition: { duration: 0.3 } },
//     }),
//     [],
//   )

//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
    
      
         
        
//             <Button
//               variant="contained"
//               onClick={handleModalToggle}
//               startIcon={<PersonIcon />}
//               sx={{
//                 backgroundColor: "primary.main",
//                 "&:hover": {
//                   backgroundColor: "primary.dark",
//                 },
//               }}
//             >
//               Sign In 
//             </Button>
    
    

//         <AnimatePresence>
//           {isModalOpen && (
//             <motion.div
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               variants={overlayVariants}
//               style={{
//                 position: "fixed",
//                 top: 0,
//                 left: 0,
//                 right: 0,
//                 bottom: 0,
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 background: "rgba(0, 0, 0, 0.5)",
//                 zIndex: 1000,
//               }}
//               onClick={handleModalToggle}
//             >
//               <motion.div
//                 variants={modalVariants}
//                 style={{
//                   width: isMobile ? "100%" : isTablet ? "90%" : "800px",
//                   maxWidth: "100%",
//                   height: isMobile ? "100%" : "auto",
//                   maxHeight: isMobile ? "100%" : "90vh",
//                   display: "flex",
//                   flexDirection: isMobile ? "column" : "row",
//                   overflow: "auto",
//                   borderRadius: isMobile ? 0 : "20px",
//                 }}
//                 onClick={(e) => e.stopPropagation()}
//               >
//                 <Card
//                   sx={{
//                     width: "100%",
//                     height: "100%",
//                     display: "flex",
//                     flexDirection: isMobile ? "column" : "row",
//                     overflow: "hidden",
//                   }}
//                 >
//                   <IconButton
//                     sx={{
//                       position: "absolute",
//                       top: isMobile ? 16 : 8,
//                       right: isMobile ? 16 : 8,
//                       color: isMobile ? "primary.main" : "black",
//                       "&:hover": {
//                         backgroundColor: isMobile ? "white" : "rgba(0,0,0,0.1)",
//                       },
//                       zIndex: 1,
//                     }}
//                     onClick={handleModalToggle}
//                   >
//                     <CloseIcon />
//                   </IconButton>
//                   <Box
//                     sx={{
//                       width: isMobile ? "100%" : "40%",
//                       minHeight: isMobile ? "150px" : "auto",
//                       background: "linear-gradient(135deg, #004c40 0%, #00796b 100%)",
//                       display: "flex",
//                       flexDirection: "column",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       color: "white",
//                       p: isMobile ? 2 : 4,
//                       position: "relative",
//                       overflow: "hidden",
//                     }}
//                   >
//                     <motion.div variants={itemVariants}>
//                       <Typography variant={isMobile ? "h6" : "h5"} fontWeight="bold" mb={1}>
//                         {isSignUp ? "Join Us!" : "Welcome Back!"}
//                       </Typography>
//                     </motion.div>
//                     <motion.div variants={itemVariants}>
//                       <Typography variant="body2" textAlign="center" mb={2}>
//                         {isSignUp ? "Already have an account?" : "Don't have an account yet?"}
//                       </Typography>
//                     </motion.div>
//                     <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                       <Button
//                         variant="outlined"
//                         onClick={() => setIsSignUp(!isSignUp)}
//                         sx={{
//                           color: "white",
//                           borderColor: "white",
//                           "&:hover": {
//                             borderColor: "white",
//                             backgroundColor: "rgba(255,255,255,0.1)",
//                           },
//                         }}
//                       >
//                         {isSignUp ? "Sign In" : "Sign Up"}
//                       </Button>
//                     </motion.div>
//                   </Box>
//                   <Box
//                     sx={{
//                       width: isMobile ? "100%" : "60%",
//                       height: isMobile ? "auto" : "auto",
//                       p: isExtraSmall ? 2 : isMobile ? 3 : 4,
//                       display: "flex",
//                       flexDirection: "column",
//                       alignItems: "center",
//                       bgcolor: "background.paper",
//                       position: "relative",
//                       overflow: "auto",
//                     }}
//                   >
//                     <AnimatePresence mode="wait">
//                       <motion.div
//                         key={isSignUp ? "signup" : "signin"}
//                         variants={containerVariants}
//                         initial="hidden"
//                         animate="visible"
//                         exit="exit"
//                         style={{
//                           width: "100%",
//                           display: "flex",
//                           flexDirection: "column",
//                           alignItems: "center",
//                         }}
//                       >
//                         <motion.div variants={itemVariants}>
//                           <Typography
//                             variant={isMobile ? "h6" : "h5"}
//                             color="primary"
//                             fontWeight="bold"
//                             mb={isMobile ? 2 : 4}
//                           >
//                             {isOtpVerification ? "Verify OTP" : isSignUp ? "Create Account" : "Login"}
//                           </Typography>
//                         </motion.div>
//                         {isOtpVerification ? (
//                           <Box component="form" onSubmit={handleOtpSubmit} width="100%" maxWidth="400px">
//                             <motion.div variants={itemVariants}>
//                               <Typography variant="body1" align="center" gutterBottom>
//                                 Enter the 6-digit OTP sent to your email
//                               </Typography>
//                             </motion.div>
//                             <motion.div variants={itemVariants}>
//                               <OtpInput otp={otp} setOtp={setOtp} />
//                             </motion.div>
//                             <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
//                               <Button
//                                 type="submit"
//                                 fullWidth
//                                 variant="contained"
//                                 disabled={isSubmitting || otp.some((digit) => digit === "")}
//                                 sx={{
//                                   mt: 3,
//                                   mb: 2,
//                                   backgroundColor: "primary.main",
//                                   "&:hover": {
//                                     backgroundColor: "primary.dark",
//                                   },
//                                 }}
//                               >
//                                 {isSubmitting ? <CircularProgress size={24} /> : "Verify OTP"}
//                               </Button>
//                             </motion.div>
//                           </Box>
//                         ) : (
//                           <Box component="form" onSubmit={onSubmit} width="100%" maxWidth={isMobile ? "100%" : "400px"}>
//                             {isSignUp && (
//                               <Grid container spacing={isExtraSmall ? 1 : isMobile ? 1.5 : 2}>
//                                 <Grid item xs={12} sm={isMobile ? 12 : 6}>
//                                   <InputField
//                                     name="firstName"
//                                     label="First Name"
//                                     icon={PersonIcon}
//                                     value={formData.firstName}
//                                     onChange={handleInputChange}
//                                     error={formErrors.firstName}
//                                     isExtraSmall={isExtraSmall}
//                                     isMobile={isMobile}
//                                     fullWidth
//                                   />
//                                 </Grid>
//                                 <Grid item xs={12} sm={isMobile ? 12 : 6}>
//                                   <InputField
//                                     name="lastName"
//                                     label="Last Name"
//                                     icon={PersonIcon}
//                                     value={formData.lastName}
//                                     onChange={handleInputChange}
//                                     error={formErrors.lastName}
//                                     isExtraSmall={isExtraSmall}
//                                     isMobile={isMobile}
//                                     fullWidth
//                                   />
//                                 </Grid>
//                               </Grid>
//                             )}
//                             <InputField
//                               name="email"
//                               label="Email"
//                               icon={EmailIcon}
//                               value={formData.email}
//                               onChange={handleInputChange}
//                               error={formErrors.email}
//                               isExtraSmall={isExtraSmall}
//                               isMobile={isMobile}
//                               fullWidth
//                             />
//                             <InputField
//                               name="password"
//                               label={isSignUp ? "New Password" : "Password"}
//                               type={showPassword ? "text" : "password"}
//                               icon={LockIcon}
//                               value={formData.password}
//                               onChange={handleInputChange}
//                               error={formErrors.password}
//                               isExtraSmall={isExtraSmall}
//                               isMobile={isMobile}
//                               InputProps={{
//                                 endAdornment: (
//                                   <InputAdornment position="end">
//                                     <IconButton
//                                       onClick={togglePasswordVisibility}
//                                       edge="end"
//                                       aria-label={showPassword ? "Hide password" : "Show password"}
//                                     >
//                                       {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
//                                     </IconButton>
//                                   </InputAdornment>
//                                 ),
//                               }}
//                               fullWidth
//                             />
//                             {isSignUp && (
//                               <InputField
//                                 name="confirmPassword"
//                                 label="Confirm Password"
//                                 type={showConfirmPassword ? "text" : "password"}
//                                 icon={LockIcon}
//                                 value={formData.confirmPassword}
//                                 onChange={handleInputChange}
//                                 error={formErrors.confirmPassword}
//                                 isExtraSmall={isExtraSmall}
//                                 isMobile={isMobile}
//                                 InputProps={{
//                                   endAdornment: (
//                                     <InputAdornment position="end">
//                                       <IconButton
//                                         onClick={toggleConfirmPasswordVisibility}
//                                         edge="end"
//                                         aria-label={showConfirmPassword ? "Hide password" : "Show password"}
//                                       >
//                                         {showConfirmPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
//                                       </IconButton>
//                                     </InputAdornment>
//                                   ),
//                                 }}
//                                 fullWidth
//                               />
//                             )}
//                             <motion.div variants={itemVariants}>
//                               <Box
//                                 sx={{
//                                   display: "flex",
//                                   flexDirection: isMobile ? "column" : "row",
//                                   justifyContent: "space-between",
//                                   alignItems: isMobile ? "flex-start" : "center",
//                                   mb: 2,
//                                   gap: isMobile ? 1 : 0,
//                                 }}
//                               >
//                                 <FormControlLabel
//                                   control={
//                                     <Checkbox
//                                       checked={rememberMe}
//                                       onChange={(e) => setRememberMe(e.target.checked)}
//                                       color="primary"
//                                     />
//                                   }
//                                   label={<Typography variant={isMobile ? "body2" : "body1"}>Remember me</Typography>}
//                                 />
//                                 {!isSignUp && (
//                                   <Link
//                                     href="#"
//                                     color="primary"
//                                     underline="hover"
//                                     onClick={(e) => {
//                                       e.preventDefault()
//                                       setSnackbar({
//                                         open: true,
//                                         message: "Password reset email sent!",
//                                         severity: "success",
//                                       })
//                                     }}
//                                     sx={{ fontSize: isMobile ? "0.875rem" : "1rem" }}
//                                   >
//                                     Forgot Password?
//                                   </Link>
//                                 )}
//                               </Box>
//                             </motion.div>
//                             <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
//                               <Button
//                                 type="submit"
//                                 fullWidth
//                                 variant="contained"
//                                 disabled={isSubmitting}
//                                 sx={{
//                                   mt: isExtraSmall ? 1 : isMobile ? 2 : 3,
//                                   mb: isExtraSmall ? 1 : isMobile ? 1 : 2,
//                                   py: isExtraSmall ? 1 : isMobile ? 1.5 : 2,
//                                   backgroundColor: "primary.main",
//                                   "&:hover": {
//                                     backgroundColor: "primary.dark",
//                                   },
//                                   transition: "all 0.3s ease-in-out",
//                                   fontSize: isMobile ? "0.875rem" : "1rem",
//                                 }}
//                               >
//                                 {isSubmitting ? <CircularProgress size={20} /> : isSignUp ? "Sign Up" : "Login"}
//                               </Button>
//                             </motion.div>
//                           </Box>
//                         )}
//                       </motion.div>
//                     </AnimatePresence>
//                   </Box>
//                 </Card>
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//         <Snackbar
//           open={snackbar.open}
//           autoHideDuration={6000}
//           onClose={handleCloseSnackbar}
//           anchorOrigin={{ vertical: "top", horizontal: "center" }}
//         >
//           <Alert
//             onClose={handleCloseSnackbar}
//             severity={snackbar.severity}
//             sx={{
//               width: "100%",
//               alignItems: "center",
//               "& .MuiAlert-icon": {
//                 fontSize: "1.5rem",
//               },
//             }}
//             elevation={6}
//             variant="filled"
//           >
//             <Typography variant="body1">{snackbar.message}</Typography>
//           </Alert>
//         </Snackbar>
//         <ErrorDialog
//           open={errorDialog.open}
//           onClose={handleCloseErrorDialog}
//           title={errorDialog.title}
//           message={errorDialog.message}
//         />

//     </ThemeProvider>
//   )
// }

// export default LoginPage




// import React, { useState, useCallback, useRef, useMemo } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import {
//   Person as PersonIcon,
//   Email as EmailIcon,
//   Lock as LockIcon,
//   Visibility as VisibilityIcon,
//   VisibilityOff as VisibilityOffIcon,
//   Close as CloseIcon,
//   Error as ErrorIcon,
// } from "@mui/icons-material"
// import {
//   Button,
//   TextField,
//   InputAdornment,
//   IconButton,
//   Typography,
//   Box,
//   Card,
//   Link,
//   ThemeProvider,
//   createTheme,
//   CssBaseline,
//   useMediaQuery,
//   Checkbox,
//   FormControlLabel,
//   CircularProgress,
//   Grid,
//   Snackbar,
//   Alert,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
// } from "@mui/material"

// // Theme definition
// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#004c40",
//       light: "#48A999",
//       dark: "#004C40",
//     },
//     secondary: {
//       main: "#FF6E40",
//       light: "#FFA06D",
//       dark: "#C53D13",
//     },
//     background: {
//       default: "#E0F2F1",
//       paper: "#FFFFFF",
//     },
//   },
//   typography: {
//     fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
//     h4: {
//       fontWeight: 700,
//       fontSize: "1.75rem",
//       "@media (max-width:600px)": {
//         fontSize: "1.5rem",
//       },
//     },
//     h5: {
//       fontWeight: 600,
//       fontSize: "1.5rem",
//       "@media (max-width:600px)": {
//         fontSize: "1.25rem",
//       },
//     },
//     h6: {
//       fontWeight: 600,
//       fontSize: "1.25rem",
//       "@media (max-width:600px)": {
//         fontSize: "1.1rem",
//       },
//     },
//     body1: {
//       fontSize: "1rem",
//       "@media (max-width:600px)": {
//         fontSize: "0.875rem",
//       },
//     },
//     body2: {
//       fontSize: "0.875rem",
//       "@media (max-width:600px)": {
//         fontSize: "0.75rem",
//       },
//     },
//     button: {
//       textTransform: "none",
//       fontWeight: 600,
//     },
//   },
//   shape: {
//     borderRadius: 12,
//   },
//   components: {
//     MuiTextField: {
//       styleOverrides: {
//         root: {
//           "& .MuiOutlinedInput-root": {
//             borderRadius: 12,
//             backgroundColor: "#F5F5F5",
//             "&:hover fieldset": {
//               borderColor: "#00796B",
//             },
//             "&.Mui-focused fieldset": {
//               borderColor: "#00796B",
//             },
//           },
//         },
//       },
//     },
//     MuiButton: {
//       styleOverrides: {
//         root: {
//           borderRadius: 25,
//           padding: "10px 20px",
//           boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//           transition: "all 0.3s ease",
//           "&:hover": {
//             transform: "translateY(-2px)",
//             boxShadow: "0 6px 8px rgba(0, 0, 0, 0.15)",
//           },
//         },
//       },
//     },
//     MuiCard: {
//       styleOverrides: {
//         root: {
//           boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
//           overflow: "visible",
//         },
//       },
//     },
//   },
// })

// // InputField component with enhanced animation
// const InputField = React.memo(({ icon: Icon, error, isExtraSmall, isMobile, fullWidth, ...props }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 20 }}
//     animate={{ opacity: 1, y: 0 }}
//     exit={{ opacity: 0, y: -20 }}
//     transition={{ duration: 0.5, ease: "easeInOut" }}
//   >
//     <TextField
//       fullWidth={fullWidth}
//       variant="outlined"
//       margin="normal"
//       size={isExtraSmall ? "small" : isMobile ? "small" : "medium"}
//       InputProps={{
//         startAdornment: (
//           <InputAdornment position="start">
//             <Icon sx={{ color: error ? "error.main" : "text.secondary" }} />
//           </InputAdornment>
//         ),
//       }}
//       error={!!error}
//       helperText={error}
//       sx={{
//         "& .MuiOutlinedInput-root": {
//           backgroundColor: "#F5F5F5",
//           ...((isExtraSmall || isMobile) && {
//             padding: "6px 12px",
//           }),
//         },
//       }}
//       {...props}
//     />
//   </motion.div>
// ))

// // OtpInput component
// const OtpInput = React.memo(({ otp, setOtp }) => {
//   const inputRefs = useRef([])

//   const handleChange = useCallback(
//     (element, index) => {
//       if (isNaN(element.value)) return false
//       const newOtp = [...otp]
//       newOtp[index] = element.value
//       setOtp(newOtp)
//       if (element.value !== "" && index < 5) {
//         inputRefs.current[index + 1].focus()
//       }
//     },
//     [otp, setOtp],
//   )

//   const handleKeyDown = useCallback(
//     (e, index) => {
//       if (e.key === "Backspace" && index > 0 && otp[index] === "") {
//         inputRefs.current[index - 1].focus()
//       }
//     },
//     [otp],
//   )

//   const handlePaste = useCallback(
//     (e) => {
//       e.preventDefault()
//       const pastedData = e.clipboardData.getData("text").slice(0, 6).split("")
//       const newOtp = [...otp]
//       pastedData.forEach((value, index) => {
//         if (index < 6 && !isNaN(value)) {
//           newOtp[index] = value
//         }
//       })
//       setOtp(newOtp)
//       if (pastedData.length === 6) {
//         inputRefs.current[5].focus()
//       } else {
//         inputRefs.current[pastedData.length].focus()
//       }
//     },
//     [otp, setOtp],
//   )

//   return (
//     <Box display="flex" justifyContent="center" my={2}>
//       {otp.map((digit, index) => (
//         <motion.div
//           key={index}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3, delay: index * 0.1 }}
//         >
//           <TextField
//             inputRef={(el) => (inputRefs.current[index] = el)}
//             variant="outlined"
//             margin="dense"
//             value={digit}
//             onChange={(e) => handleChange(e.target, index)}
//             onKeyDown={(e) => handleKeyDown(e, index)}
//             onPaste={handlePaste}
//             inputProps={{
//               maxLength: 1,
//               style: { textAlign: "center", fontSize: "1.5rem" },
//             }}
//             sx={{ width: "3rem", mx: 0.5 }}
//           />
//         </motion.div>
//       ))}
//     </Box>
//   )
// })

// // ErrorDialog component
// const ErrorDialog = ({ open, onClose, title, message }) => {
//   return (
//     <AnimatePresence>
//       {open && (
//         <Dialog
//           open={open}
//           onClose={onClose}
//           PaperComponent={motion.div}
//           PaperProps={{
//             initial: { opacity: 0, y: -50 },
//             animate: { opacity: 1, y: 0 },
//             exit: { opacity: 0, y: -50 },
//             transition: { duration: 0.3 },
//           }}
//         >
//           <DialogTitle sx={{ m: 0, p: 2, bgcolor: "error.main", color: "error.contrastText" }}>
//             <IconButton
//               aria-label="close"
//               onClick={onClose}
//               sx={{
//                 position: "absolute",
//                 right: 8,
//                 top: 8,
//                 color: "inherit",
//               }}
//             >
//               <CloseIcon />
//             </IconButton>
//             <Typography variant="h6" component="div" sx={{ display: "flex", alignItems: "center" }}>
//               <ErrorIcon sx={{ mr: 1 }} />
//               {title || "Error"}
//             </Typography>
//           </DialogTitle>
//           <DialogContent sx={{ mt: 2 }}>
//             <Typography variant="body1">{message}</Typography>
//           </DialogContent>
//           <DialogActions>
//             <Button onClick={onClose} color="primary" variant="contained">
//               Close
//             </Button>
//           </DialogActions>
//         </Dialog>
//       )}
//     </AnimatePresence>
//   )
// }

// // Main LoginPage component
// const LoginPage = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false)
//   const [showPassword, setShowPassword] = useState(false)
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false)
//   const [isSignUp, setIsSignUp] = useState(false)
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   })
//   const [formErrors, setFormErrors] = useState({})
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [rememberMe, setRememberMe] = useState(false)
//   const [isOtpVerification, setIsOtpVerification] = useState(false)
//   const [otp, setOtp] = useState(new Array(6).fill(""))
//   const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" })
//   const [errorDialog, setErrorDialog] = useState({ open: false, title: "", message: "" })

//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
//   const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"))
//   const isExtraSmall = useMediaQuery("(max-width:360px)")

//   const signUp = async (userData) => {
//     const response = await fetch("/api/register", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         firstname: userData.firstName,
//         lastname: userData.lastName,
//         mail: userData.email,
//         password: userData.password,
//         confirmpassword: userData.confirmPassword,
//       }),
//     })

//     if (!response.ok) {
//       const errorData = await response.json()
//       throw new Error(errorData.message || "Signup failed")
//     }

//     return response.json()
//   }

//   const signIn = async (userData) => {
//     const response = await fetch("/api/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         mail: userData.email,
//         password: userData.password,
//       }),
//     })

//     if (!response.ok) {
//       const errorData = await response.json()
//       throw new Error(errorData.message || "Login failed")
//     }

//     const data = await response.json()

//     // Navigate to student portal after successful sign-in
//     if (data.success) {
//       navigateToStudentPortal()
//     }

//     return data
//   }

//   const navigateToStudentPortal = () => {
//     window.location.href = "/student-portal"
//   }

//   const handleModalToggle = useCallback(() => {
//     setIsModalOpen((prev) => !prev)
//     setFormData({ firstName: "", lastName: "", email: "", password: "", confirmPassword: "" })
//     setFormErrors({})
//     setIsOtpVerification(false)
//     setOtp(new Array(6).fill(""))
//   }, [])

//   const handleInputChange = useCallback(
//     (e) => {
//       const { name, value } = e.target
//       setFormData((prev) => ({ ...prev, [name]: value }))
//       if (formErrors[name]) {
//         setFormErrors((prev) => ({ ...prev, [name]: undefined }))
//       }
//     },
//     [formErrors],
//   )

//   const validateForm = useCallback(() => {
//     const errors = {}
//     if (isSignUp) {
//       if (!formData.firstName) errors.firstName = "First name is required"
//       if (!formData.lastName) errors.lastName = "Last name is required"
//     }
//     if (!formData.email) {
//       errors.email = "Email is required"
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       errors.email = "Email is invalid"
//     }
//     if (!formData.password) {
//       errors.password = "Password is required"
//     } else if (formData.password.length < 8) {
//       errors.password = "Password must be at least 8 characters"
//     }
//     if (isSignUp) {
//       if (!formData.confirmPassword) {
//         errors.confirmPassword = "Please confirm your password"
//       } else if (formData.password !== formData.confirmPassword) {
//         errors.confirmPassword = "Passwords do not match"
//       }
//     }
//     setFormErrors(errors)
//     return Object.keys(errors).length === 0
//   }, [formData, isSignUp])

//   const generateOtp = useCallback(async () => {
//     try {
//       const response = await fetch("/api/otp-generate", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           mail: formData.email,
//         }),
//       })

//       if (!response.ok) {
//         throw new Error("OTP generation failed")
//       }

//       setSnackbar({ open: true, message: "OTP sent to your email!", severity: "success" })
//       setIsOtpVerification(true)
//     } catch (error) {
//       setSnackbar({ open: true, message: "Failed to generate OTP. Please try again.", severity: "error" })
//     }
//   }, [formData.email])

//   const onSubmit = useCallback(
//     async (e) => {
//       e.preventDefault()

//       if (validateForm()) {
//         setIsSubmitting(true)
//         try {
//           if (isSignUp) {
//             await signUp(formData)
//             await generateOtp()
//           } else {
//             const response = await signIn(formData)
//             if (response.success) {
//               setSnackbar({ open: true, message: "Login successful!", severity: "success" })
//               // You might want to store the token or user data here
//               // For example: localStorage.setItem('token', response.token);
//             } else {
//               throw new Error(response.message || "Login failed")
//             }
//           }
//         } catch (error) {
//           setErrorDialog({
//             open: true,
//             title: isSignUp ? "Signup Error" : "Login Error",
//             message: error.message || "An error occurred. Please try again.",
//           })
//         } finally {
//           setIsSubmitting(false)
//         }
//       }
//     },
//     [formData, isSignUp, validateForm, generateOtp, signUp, signIn],
//   )

//   const handleOtpSubmit = useCallback(
//     async (e) => {
//       e.preventDefault()
//       setIsSubmitting(true)
//       try {
//         const response = await fetch("/api/otp-validate", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             mail: formData.email,
//             otp: otp.join(""),
//           }),
//         })

//         if (!response.ok) {
//           throw new Error("OTP verification failed")
//         }

//         // OTP verification successful, navigate to student portal
//         navigateToStudentPortal()
//       } catch (error) {
//         setSnackbar({ open: true, message: "OTP verification failed. Please try again.", severity: "error" })
//       } finally {
//         setIsSubmitting(false)
//       }
//     },
//     [formData.email, otp, navigateToStudentPortal],
//   )

//   const togglePasswordVisibility = useCallback(() => {
//     setShowPassword((prev) => !prev)
//   }, [])

//   const toggleConfirmPasswordVisibility = useCallback(() => {
//     setShowConfirmPassword((prev) => !prev)
//   }, [])

//   const handleCloseSnackbar = useCallback(() => {
//     setSnackbar((prev) => ({ ...prev, open: false }))
//   }, [])

//   const handleCloseErrorDialog = useCallback(() => {
//     setErrorDialog((prev) => ({ ...prev, open: false }))
//   }, [])

//   const containerVariants = useMemo(
//     () => ({
//       hidden: { opacity: 0, scale: 0.8 },
//       visible: {
//         opacity: 1,
//         scale: 1,
//         transition: {
//           duration: 0.5,
//           ease: "easeOut",
//           staggerChildren: 0.1,
//           delayChildren: 0.3,
//         },
//       },
//       exit: {
//         opacity: 0,
//         scale: 0.8,
//         transition: {
//           duration: 0.5,
//           ease: "easeIn",
//         },
//       },
//     }),
//     [],
//   )

//   const itemVariants = useMemo(
//     () => ({
//       hidden: { opacity: 0, y: 20 },
//       visible: {
//         opacity: 1,
//         y: 0,
//         transition: { duration: 0.5, ease: "easeOut" },
//       },
//     }),
//     [],
//   )

//   const modalVariants = useMemo(
//     () => ({
//       hidden: { opacity: 0, y: 50, scale: 0.95 },
//       visible: {
//         opacity: 1,
//         y: 0,
//         scale: 1,
//         transition: {
//           duration: 0.5,
//           ease: "easeOut",
//           type: "spring",
//           stiffness: 300,
//           damping: 30,
//         },
//       },
//       exit: {
//         opacity: 0,
//         y: 50,
//         scale: 0.95,
//         transition: {
//           duration: 0.5,
//           ease: "easeIn",
//         },
//       },
//     }),
//     [],
//   )

//   const overlayVariants = useMemo(
//     () => ({
//       hidden: { opacity: 0 },
//       visible: { opacity: 1, transition: { duration: 0.3 } },
//       exit: { opacity: 0, transition: { duration: 0.3 } },
//     }),
//     [],
//   )

//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />

//       <Button
//         variant="contained"
//         onClick={handleModalToggle}
//         startIcon={<PersonIcon />}
//         sx={{
//           backgroundColor: "primary.main",
//           "&:hover": {
//             backgroundColor: "primary.dark",
//           },
//         }}
//       >
//         Sign In
//       </Button>

//       <AnimatePresence>
//         {isModalOpen && (
//           <motion.div
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             variants={overlayVariants}
//             style={{
//               position: "fixed",
//               top: 0,
//               left: 0,
//               right: 0,
//               bottom: 0,
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               background: "rgba(0, 0, 0, 0.5)",
//               zIndex: 1000,
//             }}
//             onClick={handleModalToggle}
//           >
//             <motion.div
//               variants={modalVariants}
//               style={{
//                 width: isMobile ? "100%" : isTablet ? "90%" : "800px",
//                 maxWidth: "100%",
//                 height: isMobile ? "100%" : "auto",
//                 maxHeight: isMobile ? "100%" : "90vh",
//                 display: "flex",
//                 flexDirection: isMobile ? "column" : "row",
//                 overflow: "auto",
//                 borderRadius: isMobile ? 0 : "20px",
//               }}
//               onClick={(e) => e.stopPropagation()}
//             >
//               <Card
//                 sx={{
//                   width: "100%",
//                   height: "100%",
//                   display: "flex",
//                   flexDirection: isMobile ? "column" : "row",
//                   overflow: "hidden",
//                 }}
//               >
//                 <IconButton
//                   sx={{
//                     position: "absolute",
//                     top: isMobile ? 16 : 8,
//                     right: isMobile ? 16 : 8,
//                     color: isMobile ? "primary.main" : "black",
//                     "&:hover": {
//                       backgroundColor: isMobile ? "white" : "rgba(0,0,0,0.1)",
//                     },
//                     zIndex: 1,
//                   }}
//                   onClick={handleModalToggle}
//                 >
//                   <CloseIcon />
//                 </IconButton>
//                 <Box
//                   sx={{
//                     width: isMobile ? "100%" : "40%",
//                     minHeight: isMobile ? "150px" : "auto",
//                     background: "linear-gradient(135deg, #004c40 0%, #00796b 100%)",
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     color: "white",
//                     p: isMobile ? 2 : 4,
//                     position: "relative",
//                     overflow: "hidden",
//                   }}
//                 >
//                   <motion.div variants={itemVariants}>
//                     <Typography variant={isMobile ? "h6" : "h5"} fontWeight="bold" mb={1}>
//                       {isSignUp ? "Join Us!" : "Welcome Back!"}
//                     </Typography>
//                   </motion.div>
//                   <motion.div variants={itemVariants}>
//                     <Typography variant="body2" textAlign="center" mb={2}>
//                       {isSignUp ? "Already have an account?" : "Don't have an account yet?"}
//                     </Typography>
//                   </motion.div>
//                   <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                     <Button
//                       variant="outlined"
//                       onClick={() => setIsSignUp(!isSignUp)}
//                       sx={{
//                         color: "white",
//                         borderColor: "white",
//                         "&:hover": {
//                           borderColor: "white",
//                           backgroundColor: "rgba(255,255,255,0.1)",
//                         },
//                       }}
//                     >
//                       {isSignUp ? "Sign In" : "Sign Up"}
//                     </Button>
//                   </motion.div>
//                 </Box>
//                 <Box
//                   sx={{
//                     width: isMobile ? "100%" : "60%",
//                     height: isMobile ? "auto" : "auto",
//                     p: isExtraSmall ? 2 : isMobile ? 3 : 4,
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "center",
//                     bgcolor: "background.paper",
//                     position: "relative",
//                     overflow: "auto",
//                   }}
//                 >
//                   <AnimatePresence mode="wait">
//                     <motion.div
//                       key={isSignUp ? "signup" : "signin"}
//                       variants={containerVariants}
//                       initial="hidden"
//                       animate="visible"
//                       exit="exit"
//                       style={{
//                         width: "100%",
//                         display: "flex",
//                         flexDirection: "column",
//                         alignItems: "center",
//                       }}
//                     >
//                       <motion.div variants={itemVariants}>
//                         <Typography
//                           variant={isMobile ? "h6" : "h5"}
//                           color="primary"
//                           fontWeight="bold"
//                           mb={isMobile ? 2 : 4}
//                         >
//                           {isOtpVerification ? "Verify OTP" : isSignUp ? "Create Account" : "Login"}
//                         </Typography>
//                       </motion.div>
//                       {isOtpVerification ? (
//                         <Box component="form" onSubmit={handleOtpSubmit} width="100%" maxWidth="400px">
//                           <motion.div variants={itemVariants}>
//                             <Typography variant="body1" align="center" gutterBottom>
//                               Enter the 6-digit OTP sent to your email
//                             </Typography>
//                           </motion.div>
//                           <motion.div variants={itemVariants}>
//                             <OtpInput otp={otp} setOtp={setOtp} />
//                           </motion.div>
//                           <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
//                             <Button
//                               type="submit"
//                               fullWidth
//                               variant="contained"
//                               disabled={isSubmitting || otp.some((digit) => digit === "")}
//                               sx={{
//                                 mt: 3,
//                                 mb: 2,
//                                 backgroundColor: "primary.main",
//                                 "&:hover": {
//                                   backgroundColor: "primary.dark",
//                                 },
//                               }}
//                             >
//                               {isSubmitting ? <CircularProgress size={24} /> : "Verify OTP"}
//                             </Button>
//                           </motion.div>
//                         </Box>
//                       ) : (
//                         <Box component="form" onSubmit={onSubmit} width="100%" maxWidth={isMobile ? "100%" : "400px"}>
//                           {isSignUp && (
//                             <Grid container spacing={isExtraSmall ? 1 : isMobile ? 1.5 : 2}>
//                               <Grid item xs={12} sm={isMobile ? 12 : 6}>
//                                 <InputField
//                                   name="firstName"
//                                   label="First Name"
//                                   icon={PersonIcon}
//                                   value={formData.firstName}
//                                   onChange={handleInputChange}
//                                   error={formErrors.firstName}
//                                   isExtraSmall={isExtraSmall}
//                                   isMobile={isMobile}
//                                   fullWidth
//                                 />
//                               </Grid>
//                               <Grid item xs={12} sm={isMobile ? 12 : 6}>
//                                 <InputField
//                                   name="lastName"
//                                   label="Last Name"
//                                   icon={PersonIcon}
//                                   value={formData.lastName}
//                                   onChange={handleInputChange}
//                                   error={formErrors.lastName}
//                                   isExtraSmall={isExtraSmall}
//                                   isMobile={isMobile}
//                                   fullWidth
//                                 />
//                               </Grid>
//                             </Grid>
//                           )}
//                           <InputField
//                             name="email"
//                             label="Email"
//                             icon={EmailIcon}
//                             value={formData.email}
//                             onChange={handleInputChange}
//                             error={formErrors.email}
//                             isExtraSmall={isExtraSmall}
//                             isMobile={isMobile}
//                             fullWidth
//                           />
//                           <InputField
//                             name="password"
//                             label={isSignUp ? "New Password" : "Password"}
//                             type={showPassword ? "text" : "password"}
//                             icon={LockIcon}
//                             value={formData.password}
//                             onChange={handleInputChange}
//                             error={formErrors.password}
//                             isExtraSmall={isExtraSmall}
//                             isMobile={isMobile}
//                             InputProps={{
//                               endAdornment: (
//                                 <InputAdornment position="end">
//                                   <IconButton
//                                     onClick={togglePasswordVisibility}
//                                     edge="end"
//                                     aria-label={showPassword ? "Hide password" : "Show password"}
//                                   >
//                                     {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
//                                   </IconButton>
//                                 </InputAdornment>
//                               ),
//                             }}
//                             fullWidth
//                           />
//                           {isSignUp && (
//                             <InputField
//                               name="confirmPassword"
//                               label="Confirm Password"
//                               type={showConfirmPassword ? "text" : "password"}
//                               icon={LockIcon}
//                               value={formData.confirmPassword}
//                               onChange={handleInputChange}
//                               error={formErrors.confirmPassword}
//                               isExtraSmall={isExtraSmall}
//                               isMobile={isMobile}
//                               InputProps={{
//                                 endAdornment: (
//                                   <InputAdornment position="end">
//                                     <IconButton
//                                       onClick={toggleConfirmPasswordVisibility}
//                                       edge="end"
//                                       aria-label={showConfirmPassword ? "Hide password" : "Show password"}
//                                     >
//                                       {showConfirmPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
//                                     </IconButton>
//                                   </InputAdornment>
//                                 ),
//                               }}
//                               fullWidth
//                             />
//                           )}
//                           <motion.div variants={itemVariants}>
//                             <Box
//                               sx={{
//                                 display: "flex",
//                                 flexDirection: isMobile ? "column" : "row",
//                                 justifyContent: "space-between",
//                                 alignItems: isMobile ? "flex-start" : "center",
//                                 mb: 2,
//                                 gap: isMobile ? 1 : 0,
//                               }}
//                             >
//                               <FormControlLabel
//                                 control={
//                                   <Checkbox
//                                     checked={rememberMe}
//                                     onChange={(e) => setRememberMe(e.target.checked)}
//                                     color="primary"
//                                   />
//                                 }
//                                 label={<Typography variant={isMobile ? "body2" : "body1"}>Remember me</Typography>}
//                               />
//                               {!isSignUp && (
//                                 <Link
//                                   href="#"
//                                   color="primary"
//                                   underline="hover"
//                                   onClick={(e) => {
//                                     e.preventDefault()
//                                     setSnackbar({
//                                       open: true,
//                                       message: "Password reset email sent!",
//                                       severity: "success",
//                                     })
//                                   }}
//                                   sx={{ fontSize: isMobile ? "0.875rem" : "1rem" }}
//                                 >
//                                   Forgot Password?
//                                 </Link>
//                               )}
//                             </Box>
//                           </motion.div>
//                           <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
//                             <Button
//                               type="submit"
//                               fullWidth
//                               variant="contained"
//                               disabled={isSubmitting}
//                               sx={{
//                                 mt: isExtraSmall ? 1 : isMobile ? 2 : 3,
//                                 mb: isExtraSmall ? 1 : isMobile ? 1 : 2,
//                                 py: isExtraSmall ? 1 : isMobile ? 1.5 : 2,
//                                 backgroundColor: "primary.main",
//                                 "&:hover": {
//                                   backgroundColor: "primary.dark",
//                                 },
//                                 transition: "all 0.3s ease-in-out",
//                                 fontSize: isMobile ? "0.875rem" : "1rem",
//                               }}
//                             >
//                               {isSubmitting ? <CircularProgress size={20} /> : isSignUp ? "Sign Up" : "Login"}
//                             </Button>
//                           </motion.div>
//                         </Box>
//                       )}
//                     </motion.div>
//                   </AnimatePresence>
//                 </Box>
//               </Card>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//       <Snackbar
//         open={snackbar.open}
//         autoHideDuration={6000}
//         onClose={handleCloseSnackbar}
//         anchorOrigin={{ vertical: "top", horizontal: "center" }}
//       >
//         <Alert
//           onClose={handleCloseSnackbar}
//           severity={snackbar.severity}
//           sx={{
//             width: "100%",
//             alignItems: "center",
//             "& .MuiAlert-icon": {
//               fontSize: "1.5rem",
//             },
//           }}
//           elevation={6}
//           variant="filled"
//         >
//           <Typography variant="body1">{snackbar.message}</Typography>
//         </Alert>
//       </Snackbar>
//       <ErrorDialog
//         open={errorDialog.open}
//         onClose={handleCloseErrorDialog}
//         title={errorDialog.title}
//         message={errorDialog.message}
//       />
//     </ThemeProvider>
//   )
// }

// export default LoginPage

// import React, { useState, useCallback, useRef, useMemo } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import {
//   Person as PersonIcon,
//   Email as EmailIcon,
//   Lock as LockIcon,
//   Visibility as VisibilityIcon,
//   VisibilityOff as VisibilityOffIcon,
//   Close as CloseIcon,
//   Error as ErrorIcon,
// } from "@mui/icons-material"
// import {
//   Button,
//   TextField,
//   InputAdornment,
//   IconButton,
//   Typography,
//   Box,
//   Card,
//   Link,
//   ThemeProvider,
//   createTheme,
//   CssBaseline,
//   useMediaQuery,
//   Checkbox,
//   FormControlLabel,
//   CircularProgress,
//   Grid,
//   Snackbar,
//   Alert,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
// } from "@mui/material"
// import axios from "axios"

// // Theme definition
// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#004c40",
//       light: "#48A999",
//       dark: "#004C40",
//     },
//     secondary: {
//       main: "#FF6E40",
//       light: "#FFA06D",
//       dark: "#C53D13",
//     },
//     background: {
//       default: "#E0F2F1",
//       paper: "#FFFFFF",
//     },
//   },
//   typography: {
//     fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
//     h4: {
//       fontWeight: 700,
//       fontSize: "1.75rem",
//       "@media (max-width:600px)": {
//         fontSize: "1.5rem",
//       },
//     },
//     h5: {
//       fontWeight: 600,
//       fontSize: "1.5rem",
//       "@media (max-width:600px)": {
//         fontSize: "1.25rem",
//       },
//     },
//     h6: {
//       fontWeight: 600,
//       fontSize: "1.25rem",
//       "@media (max-width:600px)": {
//         fontSize: "1.1rem",
//       },
//     },
//     body1: {
//       fontSize: "1rem",
//       "@media (max-width:600px)": {
//         fontSize: "0.875rem",
//       },
//     },
//     body2: {
//       fontSize: "0.875rem",
//       "@media (max-width:600px)": {
//         fontSize: "0.75rem",
//       },
//     },
//     button: {
//       textTransform: "none",
//       fontWeight: 600,
//     },
//   },
//   shape: {
//     borderRadius: 12,
//   },
//   components: {
//     MuiTextField: {
//       styleOverrides: {
//         root: {
//           "& .MuiOutlinedInput-root": {
//             borderRadius: 12,
//             backgroundColor: "#F5F5F5",
//             "&:hover fieldset": {
//               borderColor: "#00796B",
//             },
//             "&.Mui-focused fieldset": {
//               borderColor: "#00796B",
//             },
//           },
//         },
//       },
//     },
//     MuiButton: {
//       styleOverrides: {
//         root: {
//           borderRadius: 25,
//           padding: "10px 20px",
//           boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//           transition: "all 0.3s ease",
//           "&:hover": {
//             transform: "translateY(-2px)",
//             boxShadow: "0 6px 8px rgba(0, 0, 0, 0.15)",
//           },
//         },
//       },
//     },
//     MuiCard: {
//       styleOverrides: {
//         root: {
//           boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
//           overflow: "visible",
//         },
//       },
//     },
//   },
// })

// // InputField component with enhanced animation
// const InputField = React.memo(({ icon: Icon, error, isExtraSmall, isMobile, fullWidth, ...props }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 20 }}
//     animate={{ opacity: 1, y: 0 }}
//     exit={{ opacity: 0, y: -20 }}
//     transition={{ duration: 0.5, ease: "easeInOut" }}
//   >
//     <TextField
//       fullWidth={fullWidth}
//       variant="outlined"
//       margin="normal"
//       size={isExtraSmall ? "small" : isMobile ? "small" : "medium"}
//       InputProps={{
//         startAdornment: (
//           <InputAdornment position="start">
//             <Icon sx={{ color: error ? "error.main" : "text.secondary" }} />
//           </InputAdornment>
//         ),
//       }}
//       error={!!error}
//       helperText={error}
//       sx={{
//         "& .MuiOutlinedInput-root": {
//           backgroundColor: "#F5F5F5",
//           ...((isExtraSmall || isMobile) && {
//             padding: "6px 12px",
//           }),
//         },
//       }}
//       {...props}
//     />
//   </motion.div>
// ))

// // OtpInput component
// const OtpInput = React.memo(({ otp, setOtp }) => {
//   const inputRefs = useRef([])

//   const handleChange = useCallback(
//     (element, index) => {
//       if (isNaN(element.value)) return false
//       const newOtp = [...otp]
//       newOtp[index] = element.value
//       setOtp(newOtp)
//       if (element.value !== "" && index < 5) {
//         inputRefs.current[index + 1].focus()
//       }
//     },
//     [otp, setOtp],
//   )

//   const handleKeyDown = useCallback(
//     (e, index) => {
//       if (e.key === "Backspace" && index > 0 && otp[index] === "") {
//         inputRefs.current[index - 1].focus()
//       }
//     },
//     [otp],
//   )

//   const handlePaste = useCallback(
//     (e) => {
//       e.preventDefault()
//       const pastedData = e.clipboardData.getData("text").slice(0, 6).split("")
//       const newOtp = [...otp]
//       pastedData.forEach((value, index) => {
//         if (index < 6 && !isNaN(value)) {
//           newOtp[index] = value
//         }
//       })
//       setOtp(newOtp)
//       if (pastedData.length === 6) {
//         inputRefs.current[5].focus()
//       } else {
//         inputRefs.current[pastedData.length].focus()
//       }
//     },
//     [otp, setOtp],
//   )

//   return (
//     <Box display="flex" justifyContent="center" my={2}>
//       {otp.map((digit, index) => (
//         <motion.div
//           key={index}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3, delay: index * 0.1 }}
//         >
//           <TextField
//             inputRef={(el) => (inputRefs.current[index] = el)}
//             variant="outlined"
//             margin="dense"
//             value={digit}
//             onChange={(e) => handleChange(e.target, index)}
//             onKeyDown={(e) => handleKeyDown(e, index)}
//             onPaste={handlePaste}
//             inputProps={{
//               maxLength: 1,
//               style: { textAlign: "center", fontSize: "1.5rem" },
//             }}
//             sx={{ width: "3rem", mx: 0.5 }}
//           />
//         </motion.div>
//       ))}
//     </Box>
//   )
// })

// // ErrorDialog component
// const ErrorDialog = ({ open, onClose, title, message }) => {
//   return (
//     <AnimatePresence>
//       {open && (
//         <Dialog
//           open={open}
//           onClose={onClose}
//           PaperComponent={motion.div}
//           PaperProps={{
//             initial: { opacity: 0, y: -50 },
//             animate: { opacity: 1, y: 0 },
//             exit: { opacity: 0, y: -50 },
//             transition: { duration: 0.3 },
//           }}
//         >
//           <DialogTitle sx={{ m: 0, p: 2, bgcolor: "error.main", color: "error.contrastText" }}>
//             <IconButton
//               aria-label="close"
//               onClick={onClose}
//               sx={{
//                 position: "absolute",
//                 right: 8,
//                 top: 8,
//                 color: "inherit",
//               }}
//             >
//               <CloseIcon />
//             </IconButton>
//             <Typography variant="h6" component="div" sx={{ display: "flex", alignItems: "center" }}>
//               <ErrorIcon sx={{ mr: 1 }} />
//               {title || "Error"}
//             </Typography>
//           </DialogTitle>
//           <DialogContent sx={{ mt: 2 }}>
//             <Typography variant="body1">{message}</Typography>
//           </DialogContent>
//           <DialogActions>
//             <Button onClick={onClose} color="primary" variant="contained">
//               Close
//             </Button>
//           </DialogActions>
//         </Dialog>
//       )}
//     </AnimatePresence>
//   )
// }

// // Main LoginPage component
// const LoginPage = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false)
//   const [showPassword, setShowPassword] = useState(false)
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false)
//   const [isSignUp, setIsSignUp] = useState(false)
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   })
//   const [formErrors, setFormErrors] = useState({})
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [rememberMe, setRememberMe] = useState(false)
//   const [isOtpVerification, setIsOtpVerification] = useState(false)
//   const [otp, setOtp] = useState(new Array(6).fill(""))
//   const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" })
//   const [errorDialog, setErrorDialog] = useState({ open: false, title: "", message: "" })

//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
//   const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"))
//   const isExtraSmall = useMediaQuery("(max-width:360px)")

//   const signUp = async (userData) => {
//     const response = await fetch("/api/register", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         firstname: userData.firstName,
//         lastname: userData.lastName,
//         mail: userData.email,
//         password: userData.password,
//         confirmpassword: userData.confirmPassword,
//       }),
//     })

//     if (!response.ok) {
//       const errorData = await response.json()
//       throw new Error(errorData.message || "Signup failed")
//     }

//     return response.json()
//   }

//   const signIn = async (userData) => {
//     try {
//       const response = await axios.post("https://api.chamberoflearning.com/Test", {
//         mail: userData.email,
//         password: userData.password,
//       })

//       if (response.data && response.data.success) {
//         navigateToStudentPortal()
//       }

//       return response.data
//     } catch (error) {
//       if (error.response) {
//         // The request was made and the server responded with a status code
//         // that falls out of the range of 2xx
//         throw new Error(error.response.data?.message || "Login failed")
//       } else if (error.request) {
//         // The request was made but no response was received
//         throw new Error("No response received from server. Please try again.")
//       } else {
//         // Something happened in setting up the request that triggered an Error
//         throw new Error("An error occurred while logging in. Please try again.")
//       }
//     }
//   }

//   const navigateToStudentPortal = () => {
//     window.location.href = "/student-portal"
//   }

//   const handleModalToggle = useCallback(() => {
//     setIsModalOpen((prev) => !prev)
//     setFormData({ firstName: "", lastName: "", email: "", password: "", confirmPassword: "" })
//     setFormErrors({})
//     setIsOtpVerification(false)
//     setOtp(new Array(6).fill(""))
//   }, [])

//   const handleInputChange = useCallback(
//     (e) => {
//       const { name, value } = e.target
//       setFormData((prev) => ({ ...prev, [name]: value }))
//       if (formErrors[name]) {
//         setFormErrors((prev) => ({ ...prev, [name]: undefined }))
//       }
//     },
//     [formErrors],
//   )

//   const validateForm = useCallback(() => {
//     const errors = {}
//     if (isSignUp) {
//       if (!formData.firstName) errors.firstName = "First name is required"
//       if (!formData.lastName) errors.lastName = "Last name is required"
//     }
//     if (!formData.email) {
//       errors.email = "Email is required"
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       errors.email = "Email is invalid"
//     }
//     if (!formData.password) {
//       errors.password = "Password is required"
//     } else if (formData.password.length < 8) {
//       errors.password = "Password must be at least 8 characters"
//     }
//     if (isSignUp) {
//       if (!formData.confirmPassword) {
//         errors.confirmPassword = "Please confirm your password"
//       } else if (formData.password !== formData.confirmPassword) {
//         errors.confirmPassword = "Passwords do not match"
//       }
//     }
//     setFormErrors(errors)
//     return Object.keys(errors).length === 0
//   }, [formData, isSignUp])

//   const generateOtp = useCallback(async () => {
//     try {
//       const response = await fetch("/api/otp-generate", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           mail: formData.email,
//         }),
//       })

//       if (!response.ok) {
//         throw new Error("OTP generation failed")
//       }

//       setSnackbar({ open: true, message: "OTP sent to your email!", severity: "success" })
//       setIsOtpVerification(true)
//     } catch (error) {
//       setSnackbar({ open: true, message: "Failed to generate OTP. Please try again.", severity: "error" })
//     }
//   }, [formData.email])

//   const onSubmit = useCallback(
//     async (e) => {
//       e.preventDefault()

//       if (validateForm()) {
//         setIsSubmitting(true)
//         try {
//           if (isSignUp) {
//             await signUp(formData)
//             await generateOtp()
//           } else {
//             const response = await signIn(formData)
//             if (response && response.success) {
//               setSnackbar({ open: true, message: "Login successful!", severity: "success" })
//               // You might want to store the token or user data here
//               // For example: localStorage.setItem('token', response.token);
//             } else {
//               throw new Error(response?.message || "Login failed")
//             }
//           }
//         } catch (error) {
//           setErrorDialog({
//             open: true,
//             title: isSignUp ? "Signup Error" : "Login Error",
//             message: error.message || "An error occurred. Please try again.",
//           })
//         } finally {
//           setIsSubmitting(false)
//         }
//       }
//     },
//     [formData, isSignUp, validateForm, generateOtp, signIn], // Removed signUp from dependencies
//   )

//   const handleOtpSubmit = useCallback(
//     async (e) => {
//       e.preventDefault()
//       setIsSubmitting(true)
//       try {
//         const response = await fetch("/api/otp-validate", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             mail: formData.email,
//             otp: otp.join(""),
//           }),
//         })

//         if (!response.ok) {
//           throw new Error("OTP verification failed")
//         }

//         // OTP verification successful, navigate to student portal
//         navigateToStudentPortal()
//       } catch (error) {
//         setSnackbar({ open: true, message: "OTP verification failed. Please try again.", severity: "error" })
//       } finally {
//         setIsSubmitting(false)
//       }
//     },
//     [formData.email, otp, navigateToStudentPortal],
//   )

//   const togglePasswordVisibility = useCallback(() => {
//     setShowPassword((prev) => !prev)
//   }, [])

//   const toggleConfirmPasswordVisibility = useCallback(() => {
//     setShowConfirmPassword((prev) => !prev)
//   }, [])

//   const handleCloseSnackbar = useCallback(() => {
//     setSnackbar((prev) => ({ ...prev, open: false }))
//   }, [])

//   const handleCloseErrorDialog = useCallback(() => {
//     setErrorDialog((prev) => ({ ...prev, open: false }))
//   }, [])

//   const containerVariants = useMemo(
//     () => ({
//       hidden: { opacity: 0, scale: 0.8 },
//       visible: {
//         opacity: 1,
//         scale: 1,
//         transition: {
//           duration: 0.5,
//           ease: "easeOut",
//           staggerChildren: 0.1,
//           delayChildren: 0.3,
//         },
//       },
//       exit: {
//         opacity: 0,
//         scale: 0.8,
//         transition: {
//           duration: 0.5,
//           ease: "easeIn",
//         },
//       },
//     }),
//     [],
//   )

//   const itemVariants = useMemo(
//     () => ({
//       hidden: { opacity: 0, y: 20 },
//       visible: {
//         opacity: 1,
//         y: 0,
//         transition: { duration: 0.5, ease: "easeOut" },
//       },
//     }),
//     [],
//   )

//   const modalVariants = useMemo(
//     () => ({
//       hidden: { opacity: 0, y: 50, scale: 0.95 },
//       visible: {
//         opacity: 1,
//         y: 0,
//         scale: 1,
//         transition: {
//           duration: 0.5,
//           ease: "easeOut",
//           type: "spring",
//           stiffness: 300,
//           damping: 30,
//         },
//       },
//       exit: {
//         opacity: 0,
//         y: 50,
//         scale: 0.95,
//         transition: {
//           duration: 0.5,
//           ease: "easeIn",
//         },
//       },
//     }),
//     [],
//   )

//   const overlayVariants = useMemo(
//     () => ({
//       hidden: { opacity: 0 },
//       visible: { opacity: 1, transition: { duration: 0.3 } },
//       exit: { opacity: 0, transition: { duration: 0.3 } },
//     }),
//     [],
//   )

//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />

//       <Button
//         variant="contained"
//         onClick={handleModalToggle}
//         startIcon={<PersonIcon />}
//         sx={{
//           backgroundColor: "primary.main",
//           "&:hover": {
//             backgroundColor: "primary.dark",
//           },
//         }}
//       >
//         Sign In
//       </Button>

//       <AnimatePresence>
//         {isModalOpen && (
//           <motion.div
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             variants={overlayVariants}
//             style={{
//               position: "fixed",
//               top: 0,
//               left: 0,
//               right: 0,
//               bottom: 0,
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               background: "rgba(0, 0, 0, 0.5)",
//               zIndex: 1000,
//             }}
//             onClick={handleModalToggle}
//           >
//             <motion.div
//               variants={modalVariants}
//               style={{
//                 width: isMobile ? "100%" : isTablet ? "90%" : "800px",
//                 maxWidth: "100%",
//                 height: isMobile ? "100%" : "auto",
//                 maxHeight: isMobile ? "100%" : "90vh",
//                 display: "flex",
//                 flexDirection: isMobile ? "column" : "row",
//                 overflow: "auto",
//                 borderRadius: isMobile ? 0 : "20px",
//               }}
//               onClick={(e) => e.stopPropagation()}
//             >
//               <Card
//                 sx={{
//                   width: "100%",
//                   height: "100%",
//                   display: "flex",
//                   flexDirection: isMobile ? "column" : "row",
//                   overflow: "hidden",
//                 }}
//               >
//                 <IconButton
//                   sx={{
//                     position: "absolute",
//                     top: isMobile ? 16 : 8,
//                     right: isMobile ? 16 : 8,
//                     color: isMobile ? "primary.main" : "black",
//                     "&:hover": {
//                       backgroundColor: isMobile ? "white" : "rgba(0,0,0,0.1)",
//                     },
//                     zIndex: 1,
//                   }}
//                   onClick={handleModalToggle}
//                 >
//                   <CloseIcon />
//                 </IconButton>
//                 <Box
//                   sx={{
//                     width: isMobile ? "100%" : "40%",
//                     minHeight: isMobile ? "150px" : "auto",
//                     background: "linear-gradient(135deg, #004c40 0%, #00796b 100%)",
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     color: "white",
//                     p: isMobile ? 2 : 4,
//                     position: "relative",
//                     overflow: "hidden",
//                   }}
//                 >
//                   <motion.div variants={itemVariants}>
//                     <Typography variant={isMobile ? "h6" : "h5"} fontWeight="bold" mb={1}>
//                       {isSignUp ? "Join Us!" : "Welcome Back!"}
//                     </Typography>
//                   </motion.div>
//                   <motion.div variants={itemVariants}>
//                     <Typography variant="body2" textAlign="center" mb={2}>
//                       {isSignUp ? "Already have an account?" : "Don't have an account yet?"}
//                     </Typography>
//                   </motion.div>
//                   <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                     <Button
//                       variant="outlined"
//                       onClick={() => setIsSignUp(!isSignUp)}
//                       sx={{
//                         color: "white",
//                         borderColor: "white",
//                         "&:hover": {
//                           borderColor: "white",
//                           backgroundColor: "rgba(255,255,255,0.1)",
//                         },
//                       }}
//                     >
//                       {isSignUp ? "Sign In" : "Sign Up"}
//                     </Button>
//                   </motion.div>
//                 </Box>
//                 <Box
//                   sx={{
//                     width: isMobile ? "100%" : "60%",
//                     height: isMobile ? "auto" : "auto",
//                     p: isExtraSmall ? 2 : isMobile ? 3 : 4,
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "center",
//                     bgcolor: "background.paper",
//                     position: "relative",
//                     overflow: "auto",
//                   }}
//                 >
//                   <AnimatePresence mode="wait">
//                     <motion.div
//                       key={isSignUp ? "signup" : "signin"}
//                       variants={containerVariants}
//                       initial="hidden"
//                       animate="visible"
//                       exit="exit"
//                       style={{
//                         width: "100%",
//                         display: "flex",
//                         flexDirection: "column",
//                         alignItems: "center",
//                       }}
//                     >
//                       <motion.div variants={itemVariants}>
//                         <Typography
//                           variant={isMobile ? "h6" : "h5"}
//                           color="primary"
//                           fontWeight="bold"
//                           mb={isMobile ? 2 : 4}
//                         >
//                           {isOtpVerification ? "Verify OTP" : isSignUp ? "Create Account" : "Login"}
//                         </Typography>
//                       </motion.div>
//                       {isOtpVerification ? (
//                         <Box component="form" onSubmit={handleOtpSubmit} width="100%" maxWidth="400px">
//                           <motion.div variants={itemVariants}>
//                             <Typography variant="body1" align="center" gutterBottom>
//                               Enter the 6-digit OTP sent to your email
//                             </Typography>
//                           </motion.div>
//                           <motion.div variants={itemVariants}>
//                             <OtpInput otp={otp} setOtp={setOtp} />
//                           </motion.div>
//                           <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
//                             <Button
//                               type="submit"
//                               fullWidth
//                               variant="contained"
//                               disabled={isSubmitting || otp.some((digit) => digit === "")}
//                               sx={{
//                                 mt: 3,
//                                 mb: 2,
//                                 backgroundColor: "primary.main",
//                                 "&:hover": {
//                                   backgroundColor: "primary.dark",
//                                 },
//                               }}
//                             >
//                               {isSubmitting ? <CircularProgress size={24} /> : "Verify OTP"}
//                             </Button>
//                           </motion.div>
//                         </Box>
//                       ) : (
//                         <Box component="form" onSubmit={onSubmit} width="100%" maxWidth={isMobile ? "100%" : "400px"}>
//                           {isSignUp && (
//                             <Grid container spacing={isExtraSmall ? 1 : isMobile ? 1.5 : 2}>
//                               <Grid item xs={12} sm={isMobile ? 12 : 6}>
//                                 <InputField
//                                   name="firstName"
//                                   label="First Name"
//                                   icon={PersonIcon}
//                                   value={formData.firstName}
//                                   onChange={handleInputChange}
//                                   error={formErrors.firstName}
//                                   isExtraSmall={isExtraSmall}
//                                   isMobile={isMobile}
//                                   fullWidth
//                                 />
//                               </Grid>
//                               <Grid item xs={12} sm={isMobile ? 12 : 6}>
//                                 <InputField
//                                   name="lastName"
//                                   label="Last Name"
//                                   icon={PersonIcon}
//                                   value={formData.lastName}
//                                   onChange={handleInputChange}
//                                   error={formErrors.lastName}
//                                   isExtraSmall={isExtraSmall}
//                                   isMobile={isMobile}
//                                   fullWidth
//                                 />
//                               </Grid>
//                             </Grid>
//                           )}
//                           <InputField
//                             name="email"
//                             label="Email"
//                             icon={EmailIcon}
//                             value={formData.email}
//                             onChange={handleInputChange}
//                             error={formErrors.email}
//                             isExtraSmall={isExtraSmall}
//                             isMobile={isMobile}
//                             fullWidth
//                           />
//                           <InputField
//                             name="password"
//                             label={isSignUp ? "New Password" : "Password"}
//                             type={showPassword ? "text" : "password"}
//                             icon={LockIcon}
//                             value={formData.password}
//                             onChange={handleInputChange}
//                             error={formErrors.password}
//                             isExtraSmall={isExtraSmall}
//                             isMobile={isMobile}
//                             InputProps={{
//                               endAdornment: (
//                                 <InputAdornment position="end">
//                                   <IconButton
//                                     onClick={togglePasswordVisibility}
//                                     edge="end"
//                                     aria-label={showPassword ? "Hide password" : "Show password"}
//                                   >
//                                     {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
//                                   </IconButton>
//                                 </InputAdornment>
//                               ),
//                             }}
//                             fullWidth
//                           />
//                           {isSignUp && (
//                             <InputField
//                               name="confirmPassword"
//                               label="Confirm Password"
//                               type={showConfirmPassword ? "text" : "password"}
//                               icon={LockIcon}
//                               value={formData.confirmPassword}
//                               onChange={handleInputChange}
//                               error={formErrors.confirmPassword}
//                               isExtraSmall={isExtraSmall}
//                               isMobile={isMobile}
//                               InputProps={{
//                                 endAdornment: (
//                                   <InputAdornment position="end">
//                                     <IconButton
//                                       onClick={toggleConfirmPasswordVisibility}
//                                       edge="end"
//                                       aria-label={showConfirmPassword ? "Hide password" : "Show password"}
//                                     >
//                                       {showConfirmPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
//                                     </IconButton>
//                                   </InputAdornment>
//                                 ),
//                               }}
//                               fullWidth
//                             />
//                           )}
//                           <motion.div variants={itemVariants}>
//                             <Box
//                               sx={{
//                                 display: "flex",
//                                 flexDirection: isMobile ? "column" : "row",
//                                 justifyContent: "space-between",
//                                 alignItems: isMobile ? "flex-start" : "center",
//                                 mb: 2,
//                                 gap: isMobile ? 1 : 0,
//                               }}
//                             >
//                               <FormControlLabel
//                                 control={
//                                   <Checkbox
//                                     checked={rememberMe}
//                                     onChange={(e) => setRememberMe(e.target.checked)}
//                                     color="primary"
//                                   />
//                                 }
//                                 label={<Typography variant={isMobile ? "body2" : "body1"}>Remember me</Typography>}
//                               />
//                               {!isSignUp && (
//                                 <Link
//                                   href="#"
//                                   color="primary"
//                                   underline="hover"
//                                   onClick={(e) => {
//                                     e.preventDefault()
//                                     setSnackbar({
//                                       open: true,
//                                       message: "Password reset email sent!",
//                                       severity: "success",
//                                     })
//                                   }}
//                                   sx={{ fontSize: isMobile ? "0.875rem" : "1rem" }}
//                                 >
//                                   Forgot Password?
//                                 </Link>
//                               )}
//                             </Box>
//                           </motion.div>
//                           <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
//                             <Button
//                               type="submit"
//                               fullWidth
//                               variant="contained"
//                               disabled={isSubmitting}
//                               sx={{
//                                 mt: isExtraSmall ? 1 : isMobile ? 2 : 3,
//                                 mb: isExtraSmall ? 1 : isMobile ? 1 : 2,
//                                 py: isExtraSmall ? 1 : isMobile ? 1.5 : 2,
//                                 backgroundColor: "primary.main",
//                                 "&:hover": {
//                                   backgroundColor: "primary.dark",
//                                 },
//                                 transition: "all 0.3s ease-in-out",
//                                 fontSize: isMobile ? "0.875rem" : "1rem",
//                               }}
//                             >
//                               {isSubmitting ? <CircularProgress size={20} /> : isSignUp ? "Sign Up" : "Login"}
//                             </Button>
//                           </motion.div>
//                         </Box>
//                       )}
//                     </motion.div>
//                   </AnimatePresence>
//                 </Box>
//               </Card>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//       <Snackbar
//         open={snackbar.open}
//         autoHideDuration={6000}
//         onClose={handleCloseSnackbar}
//         anchorOrigin={{ vertical: "top", horizontal: "center" }}
//       >
//         <Alert
//           onClose={handleCloseSnackbar}
//           severity={snackbar.severity}
//           sx={{
//             width: "100%",
//             alignItems: "center",
//             "& .MuiAlert-icon": {
//               fontSize: "1.5rem",
//             },
//           }}
//           elevation={6}
//           variant="filled"
//         >
//           <Typography variant="body1">{snackbar.message}</Typography>
//         </Alert>
//       </Snackbar>
//       <ErrorDialog
//         open={errorDialog.open}
//         onClose={handleCloseErrorDialog}
//         title={errorDialog.title}
//         message={errorDialog.message}
//       />
//     </ThemeProvider>
//   )
// }

// export default LoginPage



// import React, { useState, useCallback, useRef, useMemo } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import {
//   Person as PersonIcon,
//   Email as EmailIcon,
//   Lock as LockIcon,
//   Visibility as VisibilityIcon,
//   VisibilityOff as VisibilityOffIcon,
//   Close as CloseIcon,
//   Error as ErrorIcon,
// } from "@mui/icons-material"
// import {
//   Button,
//   TextField,
//   InputAdornment,
//   IconButton,
//   Typography,
//   Box,
//   Card,
//   Link,
//   ThemeProvider,
//   createTheme,
//   CssBaseline,
//   useMediaQuery,
//   Checkbox,
//   FormControlLabel,
//   CircularProgress,
//   Grid,
//   Snackbar,
//   Alert,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
// } from "@mui/material"
// import axios from "axios"

// // Theme definition
// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#004c40",
//       light: "#48A999",
//       dark: "#004C40",
//     },
//     secondary: {
//       main: "#FF6E40",
//       light: "#FFA06D",
//       dark: "#C53D13",
//     },
//     background: {
//       default: "#E0F2F1",
//       paper: "#FFFFFF",
//     },
//   },
//   typography: {
//     fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
//     h4: {
//       fontWeight: 700,
//       fontSize: "1.75rem",
//       "@media (max-width:600px)": {
//         fontSize: "1.5rem",
//       },
//     },
//     h5: {
//       fontWeight: 600,
//       fontSize: "1.5rem",
//       "@media (max-width:600px)": {
//         fontSize: "1.25rem",
//       },
//     },
//     h6: {
//       fontWeight: 600,
//       fontSize: "1.25rem",
//       "@media (max-width:600px)": {
//         fontSize: "1.1rem",
//       },
//     },
//     body1: {
//       fontSize: "1rem",
//       "@media (max-width:600px)": {
//         fontSize: "0.875rem",
//       },
//     },
//     body2: {
//       fontSize: "0.875rem",
//       "@media (max-width:600px)": {
//         fontSize: "0.75rem",
//       },
//     },
//     button: {
//       textTransform: "none",
//       fontWeight: 600,
//     },
//   },
//   shape: {
//     borderRadius: 12,
//   },
//   components: {
//     MuiTextField: {
//       styleOverrides: {
//         root: {
//           "& .MuiOutlinedInput-root": {
//             borderRadius: 12,
//             backgroundColor: "#F5F5F5",
//             "&:hover fieldset": {
//               borderColor: "#00796B",
//             },
//             "&.Mui-focused fieldset": {
//               borderColor: "#00796B",
//             },
//           },
//         },
//       },
//     },
//     MuiButton: {
//       styleOverrides: {
//         root: {
//           borderRadius: 25,
//           padding: "10px 20px",
//           boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//           transition: "all 0.3s ease",
//           "&:hover": {
//             transform: "translateY(-2px)",
//             boxShadow: "0 6px 8px rgba(0, 0, 0, 0.15)",
//           },
//         },
//       },
//     },
//     MuiCard: {
//       styleOverrides: {
//         root: {
//           boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
//           overflow: "visible",
//         },
//       },
//     },
//   },
// })

// // InputField component with enhanced animation
// const InputField = React.memo(({ icon: Icon, error, isExtraSmall, isMobile, fullWidth, ...props }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 20 }}
//     animate={{ opacity: 1, y: 0 }}
//     exit={{ opacity: 0, y: -20 }}
//     transition={{ duration: 0.5, ease: "easeInOut" }}
//   >
//     <TextField
//       fullWidth={fullWidth}
//       variant="outlined"
//       margin="normal"
//       size={isExtraSmall ? "small" : isMobile ? "small" : "medium"}
//       InputProps={{
//         startAdornment: (
//           <InputAdornment position="start">
//             <Icon sx={{ color: error ? "error.main" : "text.secondary" }} />
//           </InputAdornment>
//         ),
//       }}
//       error={!!error}
//       helperText={error}
//       sx={{
//         "& .MuiOutlinedInput-root": {
//           backgroundColor: "#F5F5F5",
//           ...((isExtraSmall || isMobile) && {
//             padding: "6px 12px",
//           }),
//         },
//       }}
//       {...props}
//     />
//   </motion.div>
// ))

// // OtpInput component
// const OtpInput = React.memo(({ otp, setOtp }) => {
//   const inputRefs = useRef([])

//   const handleChange = useCallback(
//     (element, index) => {
//       if (isNaN(element.value)) return false
//       const newOtp = [...otp]
//       newOtp[index] = element.value
//       setOtp(newOtp)
//       if (element.value !== "" && index < 5) {
//         inputRefs.current[index + 1].focus()
//       }
//     },
//     [otp, setOtp],
//   )

//   const handleKeyDown = useCallback(
//     (e, index) => {
//       if (e.key === "Backspace" && index > 0 && otp[index] === "") {
//         inputRefs.current[index - 1].focus()
//       }
//     },
//     [otp],
//   )

//   const handlePaste = useCallback(
//     (e) => {
//       e.preventDefault()
//       const pastedData = e.clipboardData.getData("text").slice(0, 6).split("")
//       const newOtp = [...otp]
//       pastedData.forEach((value, index) => {
//         if (index < 6 && !isNaN(value)) {
//           newOtp[index] = value
//         }
//       })
//       setOtp(newOtp)
//       if (pastedData.length === 6) {
//         inputRefs.current[5].focus()
//       } else {
//         inputRefs.current[pastedData.length].focus()
//       }
//     },
//     [otp, setOtp],
//   )

//   return (
//     <Box display="flex" justifyContent="center" my={2}>
//       {otp.map((digit, index) => (
//         <motion.div
//           key={index}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3, delay: index * 0.1 }}
//         >
//           <TextField
//             inputRef={(el) => (inputRefs.current[index] = el)}
//             variant="outlined"
//             margin="dense"
//             value={digit}
//             onChange={(e) => handleChange(e.target, index)}
//             onKeyDown={(e) => handleKeyDown(e, index)}
//             onPaste={handlePaste}
//             inputProps={{
//               maxLength: 1,
//               style: { textAlign: "center", fontSize: "1.5rem" },
//             }}
//             sx={{ width: "3rem", mx: 0.5 }}
//           />
//         </motion.div>
//       ))}
//     </Box>
//   )
// })

// // ErrorDialog component
// const ErrorDialog = ({ open, onClose, title, message }) => {
//   return (
//     <AnimatePresence>
//       {open && (
//         <Dialog
//           open={open}
//           onClose={onClose}
//           PaperComponent={motion.div}
//           PaperProps={{
//             initial: { opacity: 0, y: -50 },
//             animate: { opacity: 1, y: 0 },
//             exit: { opacity: 0, y: -50 },
//             transition: { duration: 0.3 },
//           }}
//         >
//           <DialogTitle sx={{ m: 0, p: 2, bgcolor: "error.main", color: "error.contrastText" }}>
//             <IconButton
//               aria-label="close"
//               onClick={onClose}
//               sx={{
//                 position: "absolute",
//                 right: 8,
//                 top: 8,
//                 color: "inherit",
//               }}
//             >
//               <CloseIcon />
//             </IconButton>
//             <Typography variant="h6" component="div" sx={{ display: "flex", alignItems: "center" }}>
//               <ErrorIcon sx={{ mr: 1 }} />
//               {title || "Error"}
//             </Typography>
//           </DialogTitle>
//           <DialogContent sx={{ mt: 2 }}>
//             <Typography variant="body1">{message}</Typography>
//           </DialogContent>
//           <DialogActions>
//             <Button onClick={onClose} color="primary" variant="contained">
//               Close
//             </Button>
//           </DialogActions>
//         </Dialog>
//       )}
//     </AnimatePresence>
//   )
// }

// // Main LoginPage component
// const LoginPage = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false)
//   const [showPassword, setShowPassword] = useState(false)
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false)
//   const [isSignUp, setIsSignUp] = useState(false)
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   })
//   const [formErrors, setFormErrors] = useState({})
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [rememberMe, setRememberMe] = useState(false)
//   const [isOtpVerification, setIsOtpVerification] = useState(false)
//   const [otp, setOtp] = useState(new Array(6).fill(""))
//   const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" })
//   const [errorDialog, setErrorDialog] = useState({ open: false, title: "", message: "" })

//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
//   const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"))
//   const isExtraSmall = useMediaQuery("(max-width:360px)")

//   const signUp = async (userData) => {
//     const response = await fetch("https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1/register", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         firstname: userData.firstName,
//         lastname: userData.lastName,
//         mail: userData.email,
//         password: userData.password,
//         confirmpassword: userData.confirmPassword,
//       }),
//     })

//     if (!response.ok) {
//       const errorData = await response.json()
//       throw new Error(errorData.message || "Signup failed")
//     }

//     return response.json()
//   }

//   const signIn = async (userData) => {
//     try {
//       const response = await axios.post("https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1/login", {
//         mail: userData.email,
//         password: userData.password,
//       })

//       if (response.data && response.data.success) {
//         navigateToStudentPortal()
//       }

//       return response.data
//     } catch (error) {
//       if (error.response) {
//         // The request was made and the server responded with a status code
//         // that falls out of the range of 2xx
//         throw new Error(error.response.data?.message || "Login failed")
//       } else if (error.request) {
//         // The request was made but no response was received
//         throw new Error("No response received from server. Please try again.")
//       } else {
//         // Something happened in setting up the request that triggered an Error
//         throw new Error("An error occurred while logging in. Please try again.")
//       }
//     }
//   }

//   const navigateToStudentPortal = () => {
//     window.location.href = "/student-portal"
//   }

//   const handleModalToggle = useCallback(() => {
//     setIsModalOpen((prev) => !prev)
//     setFormData({ firstName: "", lastName: "", email: "", password: "", confirmPassword: "" })
//     setFormErrors({})
//     setIsOtpVerification(false)
//     setOtp(new Array(6).fill(""))
//   }, [])

//   const handleInputChange = useCallback(
//     (e) => {
//       const { name, value } = e.target
//       setFormData((prev) => ({ ...prev, [name]: value }))
//       if (formErrors[name]) {
//         setFormErrors((prev) => ({ ...prev, [name]: undefined }))
//       }
//     },
//     [formErrors],
//   )

//   const validateForm = useCallback(() => {
//     const errors = {}
//     if (isSignUp) {
//       if (!formData.firstName) errors.firstName = "First name is required"
//       if (!formData.lastName) errors.lastName = "Last name is required"
//     }
//     if (!formData.email) {
//       errors.email = "Email is required"
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       errors.email = "Email is invalid"
//     }
//     if (!formData.password) {
//       errors.password = "Password is required"
//     } else if (formData.password.length < 8) {
//       errors.password = "Password must be at least 8 characters"
//     }
//     if (isSignUp) {
//       if (!formData.confirmPassword) {
//         errors.confirmPassword = "Please confirm your password"
//       } else if (formData.password !== formData.confirmPassword) {
//         errors.confirmPassword = "Passwords do not match"
//       }
//     }
//     setFormErrors(errors)
//     return Object.keys(errors).length === 0
//   }, [formData, isSignUp])

//   const generateOtp = useCallback(async () => {
//     try {
//       const response = await fetch("/api/otp-generate", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           mail: formData.email,
//         }),
//       })

//       if (!response.ok) {
//         throw new Error("OTP generation failed")
//       }

//       setSnackbar({ open: true, message: "OTP sent to your email!", severity: "success" })
//       setIsOtpVerification(true)
//     } catch (error) {
//       setSnackbar({ open: true, message: "Failed to generate OTP. Please try again.", severity: "error" })
//     }
//   }, [formData.email])

//   const onSubmit = useCallback(
//     async (e) => {
//       e.preventDefault()

//       if (validateForm()) {
//         setIsSubmitting(true)
//         try {
//           if (isSignUp) {
//             await signUp(formData)
//             await generateOtp()
//           } else {
//             const response = await signIn(formData)
//             if (response && response.success) {
//               setSnackbar({ open: true, message: "Login successful!", severity: "success" })
//               // You might want to store the token or user data here
//               // For example: localStorage.setItem('token', response.token);
//             } else {
//               throw new Error(response?.message || "Login failed")
//             }
//           }
//         } catch (error) {
//           setErrorDialog({
//             open: true,
//             title: isSignUp ? "Signup Error" : "Login Error",
//             message: error.message || "An error occurred. Please try again.",
//           })
//         } finally {
//           setIsSubmitting(false)
//         }
//       }
//     },
//     [formData, isSignUp, validateForm, generateOtp, signIn, signUp], // Added signUp to dependencies
//   )

//   const handleOtpSubmit = useCallback(
//     async (e) => {
//       e.preventDefault()
//       setIsSubmitting(true)
//       try {
//         const response = await fetch("https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1/verify-otp", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             mail: formData.email,
//             otp: otp.join(""),
//           }),
//         })

//         if (!response.ok) {
//           throw new Error("OTP verification failed")
//         }

//         // OTP verification successful, navigate to student portal
//         navigateToStudentPortal()
//       } catch (error) {
//         setSnackbar({ open: true, message: "OTP verification failed. Please try again.", severity: "error" })
//       } finally {
//         setIsSubmitting(false)
//       }
//     },
//     [formData.email, otp, navigateToStudentPortal],
//   )

//   const togglePasswordVisibility = useCallback(() => {
//     setShowPassword((prev) => !prev)
//   }, [])

//   const toggleConfirmPasswordVisibility = useCallback(() => {
//     setShowConfirmPassword((prev) => !prev)
//   }, [])

//   const handleCloseSnackbar = useCallback(() => {
//     setSnackbar((prev) => ({ ...prev, open: false }))
//   }, [])

//   const handleCloseErrorDialog = useCallback(() => {
//     setErrorDialog((prev) => ({ ...prev, open: false }))
//   }, [])

//   const containerVariants = useMemo(
//     () => ({
//       hidden: { opacity: 0, scale: 0.8 },
//       visible: {
//         opacity: 1,
//         scale: 1,
//         transition: {
//           duration: 0.5,
//           ease: "easeOut",
//           staggerChildren: 0.1,
//           delayChildren: 0.3,
//         },
//       },
//       exit: {
//         opacity: 0,
//         scale: 0.8,
//         transition: {
//           duration: 0.5,
//           ease: "easeIn",
//         },
//       },
//     }),
//     [],
//   )

//   const itemVariants = useMemo(
//     () => ({
//       hidden: { opacity: 0, y: 20 },
//       visible: {
//         opacity: 1,
//         y: 0,
//         transition: { duration: 0.5, ease: "easeOut" },
//       },
//     }),
//     [],
//   )

//   const modalVariants = useMemo(
//     () => ({
//       hidden: { opacity: 0, y: 50, scale: 0.95 },
//       visible: {
//         opacity: 1,
//         y: 0,
//         scale: 1,
//         transition: {
//           duration: 0.5,
//           ease: "easeOut",
//           type: "spring",
//           stiffness: 300,
//           damping: 30,
//         },
//       },
//       exit: {
//         opacity: 0,
//         y: 50,
//         scale: 0.95,
//         transition: {
//           duration: 0.5,
//           ease: "easeIn",
//         },
//       },
//     }),
//     [],
//   )

//   const overlayVariants = useMemo(
//     () => ({
//       hidden: { opacity: 0 },
//       visible: { opacity: 1, transition: { duration: 0.3 } },
//       exit: { opacity: 0, transition: { duration: 0.3 } },
//     }),
//     [],
//   )

//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />

//       <Button
//         variant="contained"
//         onClick={handleModalToggle}
//         startIcon={<PersonIcon />}
//         sx={{
//           backgroundColor: "primary.main",
//           "&:hover": {
//             backgroundColor: "primary.dark",
//           },
//         }}
//       >
//         Sign In
//       </Button>

//       <AnimatePresence>
//         {isModalOpen && (
//           <motion.div
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             variants={overlayVariants}
//             style={{
//               position: "fixed",
//               top: 0,
//               left: 0,
//               right: 0,
//               bottom: 0,
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               background: "rgba(0, 0, 0, 0.5)",
//               zIndex: 1000,
//             }}
//             onClick={handleModalToggle}
//           >
//             <motion.div
//               variants={modalVariants}
//               style={{
//                 width: isMobile ? "100%" : isTablet ? "90%" : "800px",
//                 maxWidth: "100%",
//                 height: isMobile ? "100%" : "auto",
//                 maxHeight: isMobile ? "100%" : "90vh",
//                 display: "flex",
//                 flexDirection: isMobile ? "column" : "row",
//                 overflow: "auto",
//                 borderRadius: isMobile ? 0 : "20px",
//               }}
//               onClick={(e) => e.stopPropagation()}
//             >
//               <Card
//                 sx={{
//                   width: "100%",
//                   height: "100%",
//                   display: "flex",
//                   flexDirection: isMobile ? "column" : "row",
//                   overflow: "hidden",
//                 }}
//               >
//                 <IconButton
//                   sx={{
//                     position: "absolute",
//                     top: isMobile ? 16 : 8,
//                     right: isMobile ? 16 : 8,
//                     color: isMobile ? "primary.main" : "black",
//                     "&:hover": {
//                       backgroundColor: isMobile ? "white" : "rgba(0,0,0,0.1)",
//                     },
//                     zIndex: 1,
//                   }}
//                   onClick={handleModalToggle}
//                 >
//                   <CloseIcon />
//                 </IconButton>
//                 <Box
//                   sx={{
//                     width: isMobile ? "100%" : "40%",
//                     minHeight: isMobile ? "150px" : "auto",
//                     background: "linear-gradient(135deg, #004c40 0%, #00796b 100%)",
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     color: "white",
//                     p: isMobile ? 2 : 4,
//                     position: "relative",
//                     overflow: "hidden",
//                   }}
//                 >
//                   <motion.div variants={itemVariants}>
//                     <Typography variant={isMobile ? "h6" : "h5"} fontWeight="bold" mb={1}>
//                       {isSignUp ? "Join Us!" : "Welcome Back!"}
//                     </Typography>
//                   </motion.div>
//                   <motion.div variants={itemVariants}>
//                     <Typography variant="body2" textAlign="center" mb={2}>
//                       {isSignUp ? "Already have an account?" : "Don't have an account yet?"}
//                     </Typography>
//                   </motion.div>
//                   <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                     <Button
//                       variant="outlined"
//                       onClick={() => setIsSignUp(!isSignUp)}
//                       sx={{
//                         color: "white",
//                         borderColor: "white",
//                         "&:hover": {
//                           borderColor: "white",
//                           backgroundColor: "rgba(255,255,255,0.1)",
//                         },
//                       }}
//                     >
//                       {isSignUp ? "Sign In" : "Sign Up"}
//                     </Button>
//                   </motion.div>
//                 </Box>
//                 <Box
//                   sx={{
//                     width: isMobile ? "100%" : "60%",
//                     height: isMobile ? "auto" : "auto",
//                     p: isExtraSmall ? 2 : isMobile ? 3 : 4,
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "center",
//                     bgcolor: "background.paper",
//                     position: "relative",
//                     overflow: "auto",
//                   }}
//                 >
//                   <AnimatePresence mode="wait">
//                     <motion.div
//                       key={isSignUp ? "signup" : "signin"}
//                       variants={containerVariants}
//                       initial="hidden"
//                       animate="visible"
//                       exit="exit"
//                       style={{
//                         width: "100%",
//                         display: "flex",
//                         flexDirection: "column",
//                         alignItems: "center",
//                       }}
//                     >
//                       <motion.div variants={itemVariants}>
//                         <Typography
//                           variant={isMobile ? "h6" : "h5"}
//                           color="primary"
//                           fontWeight="bold"
//                           mb={isMobile ? 2 : 4}
//                         >
//                           {isOtpVerification ? "Verify OTP" : isSignUp ? "Create Account" : "Login"}
//                         </Typography>
//                       </motion.div>
//                       {isOtpVerification ? (
//                         <Box component="form" onSubmit={handleOtpSubmit} width="100%" maxWidth="400px">
//                           <motion.div variants={itemVariants}>
//                             <Typography variant="body1" align="center" gutterBottom>
//                               Enter the 6-digit OTP sent to your email
//                             </Typography>
//                           </motion.div>
//                           <motion.div variants={itemVariants}>
//                             <OtpInput otp={otp} setOtp={setOtp} />
//                           </motion.div>
//                           <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
//                             <Button
//                               type="submit"
//                               fullWidth
//                               variant="contained"
//                               disabled={isSubmitting || otp.some((digit) => digit === "")}
//                               sx={{
//                                 mt: 3,
//                                 mb: 2,
//                                 backgroundColor: "primary.main",
//                                 "&:hover": {
//                                   backgroundColor: "primary.dark",
//                                 },
//                               }}
//                             >
//                               {isSubmitting ? <CircularProgress size={24} /> : "Verify OTP"}
//                             </Button>
//                           </motion.div>
//                         </Box>
//                       ) : (
//                         <Box component="form" onSubmit={onSubmit} width="100%" maxWidth={isMobile ? "100%" : "400px"}>
//                           {isSignUp && (
//                             <Grid container spacing={isExtraSmall ? 1 : isMobile ? 1.5 : 2}>
//                               <Grid item xs={12} sm={isMobile ? 12 : 6}>
//                                 <InputField
//                                   name="firstName"
//                                   label="First Name"
//                                   icon={PersonIcon}
//                                   value={formData.firstName}
//                                   onChange={handleInputChange}
//                                   error={formErrors.firstName}
//                                   isExtraSmall={isExtraSmall}
//                                   isMobile={isMobile}
//                                   fullWidth
//                                 />
//                               </Grid>
//                               <Grid item xs={12} sm={isMobile ? 12 : 6}>
//                                 <InputField
//                                   name="lastName"
//                                   label="Last Name"
//                                   icon={PersonIcon}
//                                   value={formData.lastName}
//                                   onChange={handleInputChange}
//                                   error={formErrors.lastName}
//                                   isExtraSmall={isExtraSmall}
//                                   isMobile={isMobile}
//                                   fullWidth
//                                 />
//                               </Grid>
//                             </Grid>
//                           )}
//                           <InputField
//                             name="email"
//                             label="Email"
//                             icon={EmailIcon}
//                             value={formData.email}
//                             onChange={handleInputChange}
//                             error={formErrors.email}
//                             isExtraSmall={isExtraSmall}
//                             isMobile={isMobile}
//                             fullWidth
//                           />
//                           <InputField
//                             name="password"
//                             label={isSignUp ? "New Password" : "Password"}
//                             type={showPassword ? "text" : "password"}
//                             icon={LockIcon}
//                             value={formData.password}
//                             onChange={handleInputChange}
//                             error={formErrors.password}
//                             isExtraSmall={isExtraSmall}
//                             isMobile={isMobile}
//                             InputProps={{
//                               endAdornment: (
//                                 <InputAdornment position="end">
//                                   <IconButton
//                                     onClick={togglePasswordVisibility}
//                                     edge="end"
//                                     aria-label={showPassword ? "Hide password" : "Show password"}
//                                   >
//                                     {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
//                                   </IconButton>
//                                 </InputAdornment>
//                               ),
//                             }}
//                             fullWidth
//                           />
//                           {isSignUp && (
//                             <InputField
//                               name="confirmPassword"
//                               label="Confirm Password"
//                               type={showConfirmPassword ? "text" : "password"}
//                               icon={LockIcon}
//                               value={formData.confirmPassword}
//                               onChange={handleInputChange}
//                               error={formErrors.confirmPassword}
//                               isExtraSmall={isExtraSmall}
//                               isMobile={isMobile}
//                               InputProps={{
//                                 endAdornment: (
//                                   <InputAdornment position="end">
//                                     <IconButton
//                                       onClick={toggleConfirmPasswordVisibility}
//                                       edge="end"
//                                       aria-label={showConfirmPassword ? "Hide password" : "Show password"}
//                                     >
//                                       {showConfirmPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
//                                     </IconButton>
//                                   </InputAdornment>
//                                 ),
//                               }}
//                               fullWidth
//                             />
//                           )}
//                           <motion.div variants={itemVariants}>
//                             <Box
//                               sx={{
//                                 display: "flex",
//                                 flexDirection: isMobile ? "column" : "row",
//                                 justifyContent: "space-between",
//                                 alignItems: isMobile ? "flex-start" : "center",
//                                 mb: 2,
//                                 gap: isMobile ? 1 : 0,
//                               }}
//                             >
//                               <FormControlLabel
//                                 control={
//                                   <Checkbox
//                                     checked={rememberMe}
//                                     onChange={(e) => setRememberMe(e.target.checked)}
//                                     color="primary"
//                                   />
//                                 }
//                                 label={<Typography variant={isMobile ? "body2" : "body1"}>Remember me</Typography>}
//                               />
//                               {!isSignUp && (
//                                 <Link
//                                   href="#"
//                                   color="primary"
//                                   underline="hover"
//                                   onClick={(e) => {
//                                     e.preventDefault()
//                                     setSnackbar({
//                                       open: true,
//                                       message: "Password reset email sent!",
//                                       severity: "success",
//                                     })
//                                   }}
//                                   sx={{ fontSize: isMobile ? "0.875rem" : "1rem" }}
//                                 >
//                                   Forgot Password?
//                                 </Link>
//                               )}
//                             </Box>
//                           </motion.div>
//                           <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
//                             <Button
//                               type="submit"
//                               fullWidth
//                               variant="contained"
//                               disabled={isSubmitting}
//                               sx={{
//                                 mt: isExtraSmall ? 1 : isMobile ? 2 : 3,
//                                 mb: isExtraSmall ? 1 : isMobile ? 1 : 2,
//                                 py: isExtraSmall ? 1 : isMobile ? 1.5 : 2,
//                                 backgroundColor: "primary.main",
//                                 "&:hover": {
//                                   backgroundColor: "primary.dark",
//                                 },
//                                 transition: "all 0.3s ease-in-out",
//                                 fontSize: isMobile ? "0.875rem" : "1rem",
//                               }}
//                             >
//                               {isSubmitting ? <CircularProgress size={20} /> : isSignUp ? "Sign Up" : "Login"}
//                             </Button>
//                           </motion.div>
//                         </Box>
//                       )}
//                     </motion.div>
//                   </AnimatePresence>
//                 </Box>
//               </Card>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//       <Snackbar
//         open={snackbar.open}
//         autoHideDuration={6000}
//         onClose={handleCloseSnackbar}
//         anchorOrigin={{ vertical: "top", horizontal: "center" }}
//       >
//         <Alert
//           onClose={handleCloseSnackbar}
//           severity={snackbar.severity}
//           sx={{
//             width: "100%",
//             alignItems: "center",
//             "& .MuiAlert-icon": {
//               fontSize: "1.5rem",
//             },
//           }}
//           elevation={6}
//           variant="filled"
//         >
//           <Typography variant="body1">{snackbar.message}</Typography>
//         </Alert>
//       </Snackbar>
//       <ErrorDialog
//         open={errorDialog.open}
//         onClose={handleCloseErrorDialog}
//         title={errorDialog.title}
//         message={errorDialog.message}
//       />
//     </ThemeProvider>
//   )
// }

// export default LoginPage

// import React, { useState, useCallback, useRef, useMemo } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import {
//   Person as PersonIcon,
//   Email as EmailIcon,
//   Lock as LockIcon,
//   Visibility as VisibilityIcon,
//   VisibilityOff as VisibilityOffIcon,
//   Close as CloseIcon,
//   Error as ErrorIcon,
// } from "@mui/icons-material"
// import {
//   Button,
//   TextField,
//   InputAdornment,
//   IconButton,
//   Typography,
//   Box,
//   Card,
//   Link,
//   ThemeProvider,
//   createTheme,
//   CssBaseline,
//   useMediaQuery,
//   Checkbox,
//   FormControlLabel,
//   CircularProgress,
//   Grid,
//   Snackbar,
//   Alert,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
// } from "@mui/material"
// import axios from "axios"

// // Theme definition
// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#004c40",
//       light: "#48A999",
//       dark: "#004C40",
//     },
//     secondary: {
//       main: "#FF6E40",
//       light: "#FFA06D",
//       dark: "#C53D13",
//     },
//     background: {
//       default: "#E0F2F1",
//       paper: "#FFFFFF",
//     },
//   },
//   typography: {
//     fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
//     h4: {
//       fontWeight: 700,
//       fontSize: "1.75rem",
//       "@media (max-width:600px)": {
//         fontSize: "1.5rem",
//       },
//     },
//     h5: {
//       fontWeight: 600,
//       fontSize: "1.5rem",
//       "@media (max-width:600px)": {
//         fontSize: "1.25rem",
//       },
//     },
//     h6: {
//       fontWeight: 600,
//       fontSize: "1.25rem",
//       "@media (max-width:600px)": {
//         fontSize: "1.1rem",
//       },
//     },
//     body1: {
//       fontSize: "1rem",
//       "@media (max-width:600px)": {
//         fontSize: "0.875rem",
//       },
//     },
//     body2: {
//       fontSize: "0.875rem",
//       "@media (max-width:600px)": {
//         fontSize: "0.75rem",
//       },
//     },
//     button: {
//       textTransform: "none",
//       fontWeight: 600,
//     },
//   },
//   shape: {
//     borderRadius: 12,
//   },
//   components: {
//     MuiTextField: {
//       styleOverrides: {
//         root: {
//           "& .MuiOutlinedInput-root": {
//             borderRadius: 12,
//             backgroundColor: "#F5F5F5",
//             "&:hover fieldset": {
//               borderColor: "#00796B",
//             },
//             "&.Mui-focused fieldset": {
//               borderColor: "#00796B",
//             },
//           },
//         },
//       },
//     },
//     MuiButton: {
//       styleOverrides: {
//         root: {
//           borderRadius: 25,
//           padding: "10px 20px",
//           boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//           transition: "all 0.3s ease",
//           "&:hover": {
//             transform: "translateY(-2px)",
//             boxShadow: "0 6px 8px rgba(0, 0, 0, 0.15)",
//           },
//         },
//       },
//     },
//     MuiCard: {
//       styleOverrides: {
//         root: {
//           boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
//           overflow: "visible",
//         },
//       },
//     },
//   },
// })

// // InputField component with enhanced animation
// const InputField = React.memo(({ icon: Icon, error, isExtraSmall, isMobile, fullWidth, ...props }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 20 }}
//     animate={{ opacity: 1, y: 0 }}
//     exit={{ opacity: 0, y: -20 }}
//     transition={{ duration: 0.5, ease: "easeInOut" }}
//   >
//     <TextField
//       fullWidth={fullWidth}
//       variant="outlined"
//       margin="normal"
//       size={isExtraSmall ? "small" : isMobile ? "small" : "medium"}
//       InputProps={{
//         startAdornment: (
//           <InputAdornment position="start">
//             <Icon sx={{ color: error ? "error.main" : "text.secondary" }} />
//           </InputAdornment>
//         ),
//       }}
//       error={!!error}
//       helperText={error}
//       sx={{
//         "& .MuiOutlinedInput-root": {
//           backgroundColor: "#F5F5F5",
//           ...((isExtraSmall || isMobile) && {
//             padding: "6px 12px",
//           }),
//         },
//       }}
//       {...props}
//     />
//   </motion.div>
// ))

// // OtpInput component
// const OtpInput = React.memo(({ otp, setOtp }) => {
//   const inputRefs = useRef([])

//   const handleChange = useCallback(
//     (element, index) => {
//       if (isNaN(element.value)) return false
//       const newOtp = [...otp]
//       newOtp[index] = element.value
//       setOtp(newOtp)
//       if (element.value !== "" && index < 5) {
//         inputRefs.current[index + 1].focus()
//       }
//     },
//     [otp, setOtp],
//   )

//   const handleKeyDown = useCallback(
//     (e, index) => {
//       if (e.key === "Backspace" && index > 0 && otp[index] === "") {
//         inputRefs.current[index - 1].focus()
//       }
//     },
//     [otp],
//   )

//   const handlePaste = useCallback(
//     (e) => {
//       e.preventDefault()
//       const pastedData = e.clipboardData.getData("text").slice(0, 6).split("")
//       const newOtp = [...otp]
//       pastedData.forEach((value, index) => {
//         if (index < 6 && !isNaN(value)) {
//           newOtp[index] = value
//         }
//       })
//       setOtp(newOtp)
//       if (pastedData.length === 6) {
//         inputRefs.current[5].focus()
//       } else {
//         inputRefs.current[pastedData.length].focus()
//       }
//     },
//     [otp, setOtp],
//   )

//   return (
//     <Box display="flex" justifyContent="center" my={2}>
//       {otp.map((digit, index) => (
//         <motion.div
//           key={index}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3, delay: index * 0.1 }}
//         >
//           <TextField
//             inputRef={(el) => (inputRefs.current[index] = el)}
//             variant="outlined"
//             margin="dense"
//             value={digit}
//             onChange={(e) => handleChange(e.target, index)}
//             onKeyDown={(e) => handleKeyDown(e, index)}
//             onPaste={handlePaste}
//             inputProps={{
//               maxLength: 1,
//               style: { textAlign: "center", fontSize: "1.5rem" },
//             }}
//             sx={{ width: "3rem", mx: 0.5 }}
//           />
//         </motion.div>
//       ))}
//     </Box>
//   )
// })

// // ErrorDialog component
// const ErrorDialog = ({ open, onClose, title, message }) => {
//   return (
//     <AnimatePresence>
//       {open && (
//         <Dialog
//           open={open}
//           onClose={onClose}
//           PaperComponent={motion.div}
//           PaperProps={{
//             initial: { opacity: 0, y: -50 },
//             animate: { opacity: 1, y: 0 },
//             exit: { opacity: 0, y: -50 },
//             transition: { duration: 0.3 },
//           }}
//         >
//           <DialogTitle sx={{ m: 0, p: 2, bgcolor: "error.main", color: "error.contrastText" }}>
//             <IconButton
//               aria-label="close"
//               onClick={onClose}
//               sx={{
//                 position: "absolute",
//                 right: 8,
//                 top: 8,
//                 color: "inherit",
//               }}
//             >
//               <CloseIcon />
//             </IconButton>
//             <Typography variant="h6" component="div" sx={{ display: "flex", alignItems: "center" }}>
//               <ErrorIcon sx={{ mr: 1 }} />
//               {title || "Error"}
//             </Typography>
//           </DialogTitle>
//           <DialogContent sx={{ mt: 2 }}>
//             <Typography variant="body1">{message}</Typography>
//           </DialogContent>
//           <DialogActions>
//             <Button onClick={onClose} color="primary" variant="contained">
//               Close
//             </Button>
//           </DialogActions>
//         </Dialog>
//       )}
//     </AnimatePresence>
//   )
// }

// // Main LoginPage component
// const LoginPage = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false)
//   const [showPassword, setShowPassword] = useState(false)
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false)
//   const [isSignUp, setIsSignUp] = useState(false)
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   })
//   const [formErrors, setFormErrors] = useState({})
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [rememberMe, setRememberMe] = useState(false)
//   const [isOtpVerification, setIsOtpVerification] = useState(false)
//   const [otp, setOtp] = useState(new Array(6).fill(""))
//   const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" })
//   const [errorDialog, setErrorDialog] = useState({ open: false, title: "", message: "" })

//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
//   const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"))
//   const isExtraSmall = useMediaQuery("(max-width:360px)")

//   const signUp = async (userData) => {
//     const response = await fetch("https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1/register", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         firstname: userData.firstName,
//         lastname: userData.lastName,
//         mail: userData.email,
//         password: userData.password,
//         confirmpassword: userData.confirmPassword,
//       }),
//     })

//     if (!response.ok) {
//       const errorData = await response.json()
//       throw new Error(errorData.message || "Signup failed")
//     }

//     const data = await response.json()
//     if (data.success) {
//       setIsOtpVerification(true)
//       setSnackbar({ open: true, message: "Registration successful! Please verify your OTP.", severity: "success" })
//     }

//     return data
//   }

//   const signIn = async (userData) => {
//     try {
//       const response = await axios.post("https://api.chamberoflearning.com/Test", {
//         mail: userData.email,
//         password: userData.password,
//       })

//       if (response.data && response.data.success) {
//         navigateToStudentPortal()
//       }

//       return response.data
//     } catch (error) {
//       if (error.response) {
//         // The request was made and the server responded with a status code
//         // that falls out of the range of 2xx
//         throw new Error(error.response.data?.message || "Login failed")
//       } else if (error.request) {
//         // The request was made but no response was received
//         throw new Error("No response received from server. Please try again.")
//       } else {
//         // Something happened in setting up the request that triggered an Error
//         throw new Error("An error occurred while logging in. Please try again.")
//       }
//     }
//   }

//   const navigateToStudentPortal = () => {
//     window.location.href = "/student-portal"
//   }

//   const handleModalToggle = useCallback(() => {
//     setIsModalOpen((prev) => !prev)
//     setFormData({ firstName: "", lastName: "", email: "", password: "", confirmPassword: "" })
//     setFormErrors({})
//     setIsOtpVerification(false)
//     setOtp(new Array(6).fill(""))
//   }, [])

//   const handleInputChange = useCallback(
//     (e) => {
//       const { name, value } = e.target
//       setFormData((prev) => ({ ...prev, [name]: value }))
//       if (formErrors[name]) {
//         setFormErrors((prev) => ({ ...prev, [name]: undefined }))
//       }
//     },
//     [formErrors],
//   )

//   const validateForm = useCallback(() => {
//     const errors = {}
//     if (isSignUp) {
//       if (!formData.firstName) errors.firstName = "First name is required"
//       if (!formData.lastName) errors.lastName = "Last name is required"
//     }
//     if (!formData.email) {
//       errors.email = "Email is required"
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       errors.email = "Email is invalid"
//     }
//     if (!formData.password) {
//       errors.password = "Password is required"
//     } else if (formData.password.length < 8) {
//       errors.password = "Password must be at least 8 characters"
//     }
//     if (isSignUp) {
//       if (!formData.confirmPassword) {
//         errors.confirmPassword = "Please confirm your password"
//       } else if (formData.password !== formData.confirmPassword) {
//         errors.confirmPassword = "Passwords do not match"
//       }
//     }
//     setFormErrors(errors)
//     return Object.keys(errors).length === 0
//   }, [formData, isSignUp])

//   const onSubmit = useCallback(
//     async (e) => {
//       e.preventDefault()

//       if (validateForm()) {
//         setIsSubmitting(true)
//         try {
//           if (isSignUp) {
//             await signUp(formData)
//             // OTP verification is now handled in the signUp function
//           } else {
//             const response = await signIn(formData)
//             if (response && response.success) {
//               setSnackbar({ open: true, message: "Login successful!", severity: "success" })
//               // You might want to store the token or user data here
//               // For example: localStorage.setItem('token', response.token);
//             } else {
//               throw new Error(response?.message || "Login failed")
//             }
//           }
//         } catch (error) {
//           setErrorDialog({
//             open: true,
//             title: isSignUp ? "Signup Error" : "Login Error",
//             message: error.message || "An error occurred. Please try again.",
//           })
//         } finally {
//           setIsSubmitting(false)
//         }
//       }
//     },
//     [formData, isSignUp, validateForm, signUp, signIn], // Added signIn to dependencies
//   )

//   const handleOtpSubmit = useCallback(
//     async (e) => {
//       e.preventDefault()
//       setIsSubmitting(true)
//       try {
//         const response = await fetch("/api/otp-validate", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             mail: formData.email,
//             otp: otp.join(""),
//           }),
//         })

//         if (!response.ok) {
//           throw new Error("OTP verification failed")
//         }

//         // OTP verification successful, navigate to student portal
//         navigateToStudentPortal()
//       } catch (error) {
//         setSnackbar({ open: true, message: "OTP verification failed. Please try again.", severity: "error" })
//       } finally {
//         setIsSubmitting(false)
//       }
//     },
//     [formData.email, otp, navigateToStudentPortal],
//   )

//   const togglePasswordVisibility = useCallback(() => {
//     setShowPassword((prev) => !prev)
//   }, [])

//   const toggleConfirmPasswordVisibility = useCallback(() => {
//     setShowConfirmPassword((prev) => !prev)
//   }, [])

//   const handleCloseSnackbar = useCallback(() => {
//     setSnackbar((prev) => ({ ...prev, open: false }))
//   }, [])

//   const handleCloseErrorDialog = useCallback(() => {
//     setErrorDialog((prev) => ({ ...prev, open: false }))
//   }, [])

//   const containerVariants = useMemo(
//     () => ({
//       hidden: { opacity: 0, scale: 0.8 },
//       visible: {
//         opacity: 1,
//         scale: 1,
//         transition: {
//           duration: 0.5,
//           ease: "easeOut",
//           staggerChildren: 0.1,
//           delayChildren: 0.3,
//         },
//       },
//       exit: {
//         opacity: 0,
//         scale: 0.8,
//         transition: {
//           duration: 0.5,
//           ease: "easeIn",
//         },
//       },
//     }),
//     [],
//   )

//   const itemVariants = useMemo(
//     () => ({
//       hidden: { opacity: 0, y: 20 },
//       visible: {
//         opacity: 1,
//         y: 0,
//         transition: { duration: 0.5, ease: "easeOut" },
//       },
//     }),
//     [],
//   )

//   const modalVariants = useMemo(
//     () => ({
//       hidden: { opacity: 0, y: 50, scale: 0.95 },
//       visible: {
//         opacity: 1,
//         y: 0,
//         scale: 1,
//         transition: {
//           duration: 0.5,
//           ease: "easeOut",
//           type: "spring",
//           stiffness: 300,
//           damping: 30,
//         },
//       },
//       exit: {
//         opacity: 0,
//         y: 50,
//         scale: 0.95,
//         transition: {
//           duration: 0.5,
//           ease: "easeIn",
//         },
//       },
//     }),
//     [],
//   )

//   const overlayVariants = useMemo(
//     () => ({
//       hidden: { opacity: 0 },
//       visible: { opacity: 1, transition: { duration: 0.3 } },
//       exit: { opacity: 0, transition: { duration: 0.3 } },
//     }),
//     [],
//   )

//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />

//       <Button
//         variant="contained"
//         onClick={handleModalToggle}
//         startIcon={<PersonIcon />}
//         sx={{
//           backgroundColor: "primary.main",
//           "&:hover": {
//             backgroundColor: "primary.dark",
//           },
//         }}
//       >
//         Sign In
//       </Button>

//       <AnimatePresence>
//         {isModalOpen && (
//           <motion.div
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             variants={overlayVariants}
//             style={{
//               position: "fixed",
//               top: 0,
//               left: 0,
//               right: 0,
//               bottom: 0,
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               background: "rgba(0, 0, 0, 0.5)",
//               zIndex: 1000,
//             }}
//             onClick={handleModalToggle}
//           >
//             <motion.div
//               variants={modalVariants}
//               style={{
//                 width: isMobile ? "100%" : isTablet ? "90%" : "800px",
//                 maxWidth: "100%",
//                 height: isMobile ? "100%" : "auto",
//                 maxHeight: isMobile ? "100%" : "90vh",
//                 display: "flex",
//                 flexDirection: isMobile ? "column" : "row",
//                 overflow: "auto",
//                 borderRadius: isMobile ? 0 : "20px",
//               }}
//               onClick={(e) => e.stopPropagation()}
//             >
//               <Card
//                 sx={{
//                   width: "100%",
//                   height: "100%",
//                   display: "flex",
//                   flexDirection: isMobile ? "column" : "row",
//                   overflow: "hidden",
//                 }}
//               >
//                 <IconButton
//                   sx={{
//                     position: "absolute",
//                     top: isMobile ? 16 : 8,
//                     right: isMobile ? 16 : 8,
//                     color: isMobile ? "primary.main" : "black",
//                     "&:hover": {
//                       backgroundColor: isMobile ? "white" : "rgba(0,0,0,0.1)",
//                     },
//                     zIndex: 1,
//                   }}
//                   onClick={handleModalToggle}
//                 >
//                   <CloseIcon />
//                 </IconButton>
//                 <Box
//                   sx={{
//                     width: isMobile ? "100%" : "40%",
//                     minHeight: isMobile ? "150px" : "auto",
//                     background: "linear-gradient(135deg, #004c40 0%, #00796b 100%)",
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     color: "white",
//                     p: isMobile ? 2 : 4,
//                     position: "relative",
//                     overflow: "hidden",
//                   }}
//                 >
//                   <motion.div variants={itemVariants}>
//                     <Typography variant={isMobile ? "h6" : "h5"} fontWeight="bold" mb={1}>
//                       {isSignUp ? "Join Us!" : "Welcome Back!"}
//                     </Typography>
//                   </motion.div>
//                   <motion.div variants={itemVariants}>
//                     <Typography variant="body2" textAlign="center" mb={2}>
//                       {isSignUp ? "Already have an account?" : "Don't have an account yet?"}
//                     </Typography>
//                   </motion.div>
//                   <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                     <Button
//                       variant="outlined"
//                       onClick={() => setIsSignUp(!isSignUp)}
//                       sx={{
//                         color: "white",
//                         borderColor: "white",
//                         "&:hover": {
//                           borderColor: "white",
//                           backgroundColor: "rgba(255,255,255,0.1)",
//                         },
//                       }}
//                     >
//                       {isSignUp ? "Sign In" : "Sign Up"}
//                     </Button>
//                   </motion.div>
//                 </Box>
//                 <Box
//                   sx={{
//                     width: isMobile ? "100%" : "60%",
//                     height: isMobile ? "auto" : "auto",
//                     p: isExtraSmall ? 2 : isMobile ? 3 : 4,
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "center",
//                     bgcolor: "background.paper",
//                     position: "relative",
//                     overflow: "auto",
//                   }}
//                 >
//                   <AnimatePresence mode="wait">
//                     <motion.div
//                       key={isSignUp ? "signup" : "signin"}
//                       variants={containerVariants}
//                       initial="hidden"
//                       animate="visible"
//                       exit="exit"
//                       style={{
//                         width: "100%",
//                         display: "flex",
//                         flexDirection: "column",
//                         alignItems: "center",
//                       }}
//                     >
//                       <motion.div variants={itemVariants}>
//                         <Typography
//                           variant={isMobile ? "h6" : "h5"}
//                           color="primary"
//                           fontWeight="bold"
//                           mb={isMobile ? 2 : 4}
//                         >
//                           {isOtpVerification ? "Verify OTP" : isSignUp ? "Create Account" : "Login"}
//                         </Typography>
//                       </motion.div>
//                       {isOtpVerification ? (
//                         <Box component="form" onSubmit={handleOtpSubmit} width="100%" maxWidth="400px">
//                           <motion.div variants={itemVariants}>
//                             <Typography variant="body1" align="center" gutterBottom>
//                               Enter the 6-digit OTP sent to your email
//                             </Typography>
//                           </motion.div>
//                           <motion.div variants={itemVariants}>
//                             <OtpInput otp={otp} setOtp={setOtp} />
//                           </motion.div>
//                           <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
//                             <Button
//                               type="submit"
//                               fullWidth
//                               variant="contained"
//                               disabled={isSubmitting || otp.some((digit) => digit === "")}
//                               sx={{
//                                 mt: 3,
//                                 mb: 2,
//                                 backgroundColor: "primary.main",
//                                 "&:hover": {
//                                   backgroundColor: "primary.dark",
//                                 },
//                               }}
//                             >
//                               {isSubmitting ? <CircularProgress size={24} /> : "Verify OTP"}
//                             </Button>
//                           </motion.div>
//                         </Box>
//                       ) : (
//                         <Box component="form" onSubmit={onSubmit} width="100%" maxWidth={isMobile ? "100%" : "400px"}>
//                           {isSignUp && (
//                             <Grid container spacing={isExtraSmall ? 1 : isMobile ? 1.5 : 2}>
//                               <Grid item xs={12} sm={isMobile ? 12 : 6}>
//                                 <InputField
//                                   name="firstName"
//                                   label="First Name"
//                                   icon={PersonIcon}
//                                   value={formData.firstName}
//                                   onChange={handleInputChange}
//                                   error={formErrors.firstName}
//                                   isExtraSmall={isExtraSmall}
//                                   isMobile={isMobile}
//                                   fullWidth
//                                 />
//                               </Grid>
//                               <Grid item xs={12} sm={isMobile ? 12 : 6}>
//                                 <InputField
//                                   name="lastName"
//                                   label="Last Name"
//                                   icon={PersonIcon}
//                                   value={formData.lastName}
//                                   onChange={handleInputChange}
//                                   error={formErrors.lastName}
//                                   isExtraSmall={isExtraSmall}
//                                   isMobile={isMobile}
//                                   fullWidth
//                                 />
//                               </Grid>
//                             </Grid>
//                           )}
//                           <InputField
//                             name="email"
//                             label="Email"
//                             icon={EmailIcon}
//                             value={formData.email}
//                             onChange={handleInputChange}
//                             error={formErrors.email}
//                             isExtraSmall={isExtraSmall}
//                             isMobile={isMobile}
//                             fullWidth
//                           />
//                           <InputField
//                             name="password"
//                             label={isSignUp ? "New Password" : "Password"}
//                             type={showPassword ? "text" : "password"}
//                             icon={LockIcon}
//                             value={formData.password}
//                             onChange={handleInputChange}
//                             error={formErrors.password}
//                             isExtraSmall={isExtraSmall}
//                             isMobile={isMobile}
//                             InputProps={{
//                               endAdornment: (
//                                 <InputAdornment position="end">
//                                   <IconButton
//                                     onClick={togglePasswordVisibility}
//                                     edge="end"
//                                     aria-label={showPassword ? "Hide password" : "Show password"}
//                                   >
//                                     {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
//                                   </IconButton>
//                                 </InputAdornment>
//                               ),
//                             }}
//                             fullWidth
//                           />
//                           {isSignUp && (
//                             <InputField
//                               name="confirmPassword"
//                               label="Confirm Password"
//                               type={showConfirmPassword ? "text" : "password"}
//                               icon={LockIcon}
//                               value={formData.confirmPassword}
//                               onChange={handleInputChange}
//                               error={formErrors.confirmPassword}
//                               isExtraSmall={isExtraSmall}
//                               isMobile={isMobile}
//                               InputProps={{
//                                 endAdornment: (
//                                   <InputAdornment position="end">
//                                     <IconButton
//                                       onClick={toggleConfirmPasswordVisibility}
//                                       edge="end"
//                                       aria-label={showConfirmPassword ? "Hide password" : "Show password"}
//                                     >
//                                       {showConfirmPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
//                                     </IconButton>
//                                   </InputAdornment>
//                                 ),
//                               }}
//                               fullWidth
//                             />
//                           )}
//                           <motion.div variants={itemVariants}>
//                             <Box
//                               sx={{
//                                 display: "flex",
//                                 flexDirection: isMobile ? "column" : "row",
//                                 justifyContent: "space-between",
//                                 alignItems: isMobile ? "flex-start" : "center",
//                                 mb: 2,
//                                 gap: isMobile ? 1 : 0,
//                               }}
//                             >
//                               <FormControlLabel
//                                 control={
//                                   <Checkbox
//                                     checked={rememberMe}
//                                     onChange={(e) => setRememberMe(e.target.checked)}
//                                     color="primary"
//                                   />
//                                 }
//                                 label={<Typography variant={isMobile ? "body2" : "body1"}>Remember me</Typography>}
//                               />
//                               {!isSignUp && (
//                                 <Link
//                                   href="#"
//                                   color="primary"
//                                   underline="hover"
//                                   onClick={(e) => {
//                                     e.preventDefault()
//                                     setSnackbar({
//                                       open: true,
//                                       message: "Password reset email sent!",
//                                       severity: "success",
//                                     })
//                                   }}
//                                   sx={{ fontSize: isMobile ? "0.875rem" : "1rem" }}
//                                 >
//                                   Forgot Password?
//                                 </Link>
//                               )}
//                             </Box>
//                           </motion.div>
//                           <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
//                             <Button
//                               type="submit"
//                               fullWidth
//                               variant="contained"
//                               disabled={isSubmitting}
//                               sx={{
//                                 mt: isExtraSmall ? 1 : isMobile ? 2 : 3,
//                                 mb: isExtraSmall ? 1 : isMobile ? 1 : 2,
//                                 py: isExtraSmall ? 1 : isMobile ? 1.5 : 2,
//                                 backgroundColor: "primary.main",
//                                 "&:hover": {
//                                   backgroundColor: "primary.dark",
//                                 },
//                                 transition: "all 0.3s ease-in-out",
//                                 fontSize: isMobile ? "0.875rem" : "1rem",
//                               }}
//                             >
//                               {isSubmitting ? <CircularProgress size={20} /> : isSignUp ? "Sign Up" : "Login"}
//                             </Button>
//                           </motion.div>
//                         </Box>
//                       )}
//                     </motion.div>
//                   </AnimatePresence>
//                 </Box>
//               </Card>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//       <Snackbar
//         open={snackbar.open}
//         autoHideDuration={6000}
//         onClose={handleCloseSnackbar}
//         anchorOrigin={{ vertical: "top", horizontal: "center" }}
//       >
//         <Alert
//           onClose={handleCloseSnackbar}
//           severity={snackbar.severity}
//           sx={{
//             width: "100%",
//             alignItems: "center",
//             "& .MuiAlert-icon": {
//               fontSize: "1.5rem",
//             },
//           }}
//           elevation={6}
//           variant="filled"
//         >
//           <Typography variant="body1">{snackbar.message}</Typography>
//         </Alert>
//       </Snackbar>
//       <ErrorDialog
//         open={errorDialog.open}
//         onClose={handleCloseErrorDialog}
//         title={errorDialog.title}
//         message={errorDialog.message}
//       />
//     </ThemeProvider>
//   )
// }

// export default LoginPage




// import React, { useState, useCallback, useRef, useMemo } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import {
//   Person as PersonIcon,
//   Email as EmailIcon,
//   Lock as LockIcon,
//   Visibility as VisibilityIcon,
//   VisibilityOff as VisibilityOffIcon,
//   Close as CloseIcon,
//   Error as ErrorIcon,
// } from "@mui/icons-material"
// import {
//   Button,
//   TextField,
//   InputAdornment,
//   IconButton,
//   Typography,
//   Box,
//   Card,
//   Link,
//   ThemeProvider,
//   createTheme,
//   CssBaseline,
//   useMediaQuery,
//   Checkbox,
//   FormControlLabel,
//   CircularProgress,
//   Grid,
//   Snackbar,
//   Alert,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
// } from "@mui/material"
// import axios from "axios"

// const API_REGISTER_URL = "https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1/register"
// const API_LOGIN_URL = "https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1/login"
// const API_OTP_VALIDATE_URL = "https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1/verify-otp" 

// // Theme definition
// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#004c40",
//       light: "#48A999",
//       dark: "#004C40",
//     },
//     secondary: {
//       main: "#FF6E40",
//       light: "#FFA06D",
//       dark: "#C53D13",
//     },
//     background: {
//       default: "#E0F2F1",
//       paper: "#FFFFFF",
//     },
//   },
//   typography: {
//     fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
//     h4: {
//       fontWeight: 700,
//       fontSize: "1.75rem",
//       "@media (max-width:600px)": {
//         fontSize: "1.5rem",
//       },
//     },
//     h5: {
//       fontWeight: 600,
//       fontSize: "1.5rem",
//       "@media (max-width:600px)": {
//         fontSize: "1.25rem",
//       },
//     },
//     h6: {
//       fontWeight: 600,
//       fontSize: "1.25rem",
//       "@media (max-width:600px)": {
//         fontSize: "1.1rem",
//       },
//     },
//     body1: {
//       fontSize: "1rem",
//       "@media (max-width:600px)": {
//         fontSize: "0.875rem",
//       },
//     },
//     body2: {
//       fontSize: "0.875rem",
//       "@media (max-width:600px)": {
//         fontSize: "0.75rem",
//       },
//     },
//     button: {
//       textTransform: "none",
//       fontWeight: 600,
//     },
//   },
//   shape: {
//     borderRadius: 12,
//   },
//   components: {
//     MuiTextField: {
//       styleOverrides: {
//         root: {
//           "& .MuiOutlinedInput-root": {
//             borderRadius: 12,
//             backgroundColor: "#F5F5F5",
//             "&:hover fieldset": {
//               borderColor: "#00796B",
//             },
//             "&.Mui-focused fieldset": {
//               borderColor: "#00796B",
//             },
//           },
//         },
//       },
//     },
//     MuiButton: {
//       styleOverrides: {
//         root: {
//           borderRadius: 25,
//           padding: "10px 20px",
//           boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//           transition: "all 0.3s ease",
//           "&:hover": {
//             transform: "translateY(-2px)",
//             boxShadow: "0 6px 8px rgba(0, 0, 0, 0.15)",
//           },
//         },
//       },
//     },
//     MuiCard: {
//       styleOverrides: {
//         root: {
//           boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
//           overflow: "visible",
//         },
//       },
//     },
//   },
// })

// // InputField component with enhanced animation
// const InputField = React.memo(({ icon: Icon, error, isExtraSmall, isMobile, fullWidth, ...props }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 20 }}
//     animate={{ opacity: 1, y: 0 }}
//     exit={{ opacity: 0, y: -20 }}
//     transition={{ duration: 0.5, ease: "easeInOut" }}
//   >
//     <TextField
//       fullWidth={fullWidth}
//       variant="outlined"
//       margin="normal"
//       size={isExtraSmall ? "small" : isMobile ? "small" : "medium"}
//       InputProps={{
//         startAdornment: (
//           <InputAdornment position="start">
//             <Icon sx={{ color: error ? "error.main" : "text.secondary" }} />
//           </InputAdornment>
//         ),
//       }}
//       error={!!error}
//       helperText={error}
//       sx={{
//         "& .MuiOutlinedInput-root": {
//           backgroundColor: "#F5F5F5",
//           ...((isExtraSmall || isMobile) && {
//             padding: "6px 12px",
//           }),
//         },
//       }}
//       {...props}
//     />
//   </motion.div>
// ))

// // OtpInput component
// const OtpInput = React.memo(({ otp, setOtp }) => {
//   const inputRefs = useRef([])

//   const handleChange = useCallback(
//     (element, index) => {
//       if (isNaN(element.value)) return false
//       const newOtp = [...otp]
//       newOtp[index] = element.value
//       setOtp(newOtp)
//       if (element.value !== "" && index < 5) {
//         inputRefs.current[index + 1].focus()
//       }
//     },
//     [otp, setOtp],
//   )

//   const handleKeyDown = useCallback(
//     (e, index) => {
//       if (e.key === "Backspace" && index > 0 && otp[index] === "") {
//         inputRefs.current[index - 1].focus()
//       }
//     },
//     [otp],
//   )

//   const handlePaste = useCallback(
//     (e) => {
//       e.preventDefault()
//       const pastedData = e.clipboardData.getData("text").slice(0, 6).split("")
//       const newOtp = [...otp]
//       pastedData.forEach((value, index) => {
//         if (index < 6 && !isNaN(value)) {
//           newOtp[index] = value
//         }
//       })
//       setOtp(newOtp)
//       if (pastedData.length === 6) {
//         inputRefs.current[5].focus()
//       } else {
//         inputRefs.current[pastedData.length].focus()
//       }
//     },
//     [otp, setOtp],
//   )

//   return (
//     <Box display="flex" justifyContent="center" my={2}>
//       {otp.map((digit, index) => (
//         <motion.div
//           key={index}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3, delay: index * 0.1 }}
//         >
//           <TextField
//             inputRef={(el) => (inputRefs.current[index] = el)}
//             variant="outlined"
//             margin="dense"
//             value={digit}
//             onChange={(e) => handleChange(e.target, index)}
//             onKeyDown={(e) => handleKeyDown(e, index)}
//             onPaste={handlePaste}
//             inputProps={{
//               maxLength: 1,
//               style: { textAlign: "center", fontSize: "1.5rem" },
//             }}
//             sx={{ width: "3rem", mx: 0.5 }}
//           />
//         </motion.div>
//       ))}
//     </Box>
//   )
// })

// // ErrorDialog component
// const ErrorDialog = ({ open, onClose, title, message }) => {
//   return (
//     <AnimatePresence>
//       {open && (
//         <Dialog
//           open={open}
//           onClose={onClose}
//           PaperComponent={motion.div}
//           PaperProps={{
//             initial: { opacity: 0, y: -50 },
//             animate: { opacity: 1, y: 0 },
//             exit: { opacity: 0, y: -50 },
//             transition: { duration: 0.3 },
//           }}
//         >
//           <DialogTitle sx={{ m: 0, p: 2, bgcolor: "error.main", color: "error.contrastText" }}>
//             <IconButton
//               aria-label="close"
//               onClick={onClose}
//               sx={{
//                 position: "absolute",
//                 right: 8,
//                 top: 8,
//                 color: "inherit",
//               }}
//             >
//               <CloseIcon />
//             </IconButton>
//             <Typography variant="h6" component="div" sx={{ display: "flex", alignItems: "center" }}>
//               <ErrorIcon sx={{ mr: 1 }} />
//               {title || "Error"}
//             </Typography>
//           </DialogTitle>
//           <DialogContent sx={{ mt: 2 }}>
//             <Typography variant="body1">{message}</Typography>
//           </DialogContent>
//           <DialogActions>
//             <Button onClick={onClose} color="primary" variant="contained">
//               Close
//             </Button>
//           </DialogActions>
//         </Dialog>
//       )}
//     </AnimatePresence>
//   )
// }

// // Main LoginPage component
// const LoginPage = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false)
//   const [showPassword, setShowPassword] = useState(false)
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false)
//   const [isSignUp, setIsSignUp] = useState(false)
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   })
//   const [formErrors, setFormErrors] = useState({})
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [rememberMe, setRememberMe] = useState(false)
//   const [isOtpVerification, setIsOtpVerification] = useState(false)
//   const [otp, setOtp] = useState(new Array(6).fill(""))
//   const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" })
//   const [errorDialog, setErrorDialog] = useState({ open: false, title: "", message: "" })

//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
//   const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"))
//   const isExtraSmall = useMediaQuery("(max-width:360px)")

//   const signUp = async (userData) => {
//     const response = await fetch(API_REGISTER_URL, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         firstname: userData.firstName,
//         lastname: userData.lastName,
//         mail: userData.email,
//         password: userData.password,
//         confirmpassword: userData.confirmPassword,
//       }),
//     })

//     if (!response.ok) {
//       const errorData = await response.json()
//       throw new Error(errorData.message || "Signup failed")
//     }

//     const data = await response.json()
//     if (data.success) {
//       setIsOtpVerification(true)
//       setSnackbar({ open: true, message: "Registration successful! Please verify your OTP.", severity: "success" })
//     }

//     return data
//   }

//   const signIn = async (userData) => {
//     try {
//       const response = await axios.post(API_LOGIN_URL, {
//         mail: userData.email,
//         password: userData.password,
//       })

//       if (response.data && response.data.success) {
//         navigateToStudentPortal()
//       }

//       return response.data
//     } catch (error) {
//       if (error.response) {
//         // The request was made and the server responded with a status code
//         // that falls out of the range of 2xx
//         throw new Error(error.response.data?.message || "Login failed")
//       } else if (error.request) {
//         // The request was made but no response was received
//         throw new Error("No response received from server. Please try again.")
//       } else {
//         // Something happened in setting up the request that triggered an Error
//         throw new Error("An error occurred while logging in. Please try again.")
//       }
//     }
//   }

//   const navigateToStudentPortal = () => {
//     window.location.href = "/student-portal"
//   }

//   const handleModalToggle = useCallback(() => {
//     setIsModalOpen((prev) => !prev)
//     setFormData({ firstName: "", lastName: "", email: "", password: "", confirmPassword: "" })
//     setFormErrors({})
//     setIsOtpVerification(false)
//     setOtp(new Array(6).fill(""))
//   }, [])

//   const handleInputChange = useCallback(
//     (e) => {
//       const { name, value } = e.target
//       setFormData((prev) => ({ ...prev, [name]: value }))
//       if (formErrors[name]) {
//         setFormErrors((prev) => ({ ...prev, [name]: undefined }))
//       }
//     },
//     [formErrors],
//   )

//   const validateForm = useCallback(() => {
//     const errors = {}
//     if (isSignUp) {
//       if (!formData.firstName) errors.firstName = "First name is required"
//       if (!formData.lastName) errors.lastName = "Last name is required"
//     }
//     if (!formData.email) {
//       errors.email = "Email is required"
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       errors.email = "Email is invalid"
//     }
//     if (!formData.password) {
//       errors.password = "Password is required"
//     } else if (formData.password.length < 8) {
//       errors.password = "Password must be at least 8 characters"
//     }
//     if (isSignUp) {
//       if (!formData.confirmPassword) {
//         errors.confirmPassword = "Please confirm your password"
//       } else if (formData.password !== formData.confirmPassword) {
//         errors.confirmPassword = "Passwords do not match"
//       }
//     }
//     setFormErrors(errors)
//     return Object.keys(errors).length === 0
//   }, [formData, isSignUp])

//   const onSubmit = useCallback(
//     async (e) => {
//       e.preventDefault()

//       if (validateForm()) {
//         setIsSubmitting(true)
//         try {
//           if (isSignUp) {
//             await signUp(formData)
//             // OTP verification is now handled in the signUp function
//           } else {
//             const response = await signIn(formData)
//             if (response && response.success) {
//               setSnackbar({ open: true, message: "Login successful!", severity: "success" })
//               // You might want to store the token or user data here
//               // For example: localStorage.setItem('token', response.token);
//             } else {
//               throw new Error(response?.message || "Login failed")
//             }
//           }
//         } catch (error) {
//           setErrorDialog({
//             open: true,
//             title: isSignUp ? "Signup Error" : "Login Error",
//             message: error.message || "An error occurred. Please try again.",
//           })
//         } finally {
//           setIsSubmitting(false)
//         }
//       }
//     },
//     [formData, isSignUp, validateForm, signIn, signUp], // Added signUp to dependencies
//   )

//   const handleOtpSubmit = useCallback(
//     async (e) => {
//       e.preventDefault()
//       setIsSubmitting(true)
//       try {
//         const response = await fetch(API_OTP_VALIDATE_URL, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             mail: formData.email,
//             otp: otp.join(""),
//           }),
//         })

//         if (!response.ok) {
//           throw new Error("OTP verification failed")
//         }

//         // OTP verification successful, navigate to student portal
//         navigateToStudentPortal()
//       } catch (error) {
//         setSnackbar({ open: true, message: "OTP verification failed. Please try again.", severity: "error" })
//       } finally {
//         setIsSubmitting(false)
//       }
//     },
//     [formData.email, otp, navigateToStudentPortal],
//   )

//   const togglePasswordVisibility = useCallback(() => {
//     setShowPassword((prev) => !prev)
//   }, [])

//   const toggleConfirmPasswordVisibility = useCallback(() => {
//     setShowConfirmPassword((prev) => !prev)
//   }, [])

//   const handleCloseSnackbar = useCallback(() => {
//     setSnackbar((prev) => ({ ...prev, open: false }))
//   }, [])

//   const handleCloseErrorDialog = useCallback(() => {
//     setErrorDialog((prev) => ({ ...prev, open: false }))
//   }, [])

//   const containerVariants = useMemo(
//     () => ({
//       hidden: { opacity: 0, scale: 0.8 },
//       visible: {
//         opacity: 1,
//         scale: 1,
//         transition: {
//           duration: 0.5,
//           ease: "easeOut",
//           staggerChildren: 0.1,
//           delayChildren: 0.3,
//         },
//       },
//       exit: {
//         opacity: 0,
//         scale: 0.8,
//         transition: {
//           duration: 0.5,
//           ease: "easeIn",
//         },
//       },
//     }),
//     [],
//   )

//   const itemVariants = useMemo(
//     () => ({
//       hidden: { opacity: 0, y: 20 },
//       visible: {
//         opacity: 1,
//         y: 0,
//         transition: { duration: 0.5, ease: "easeOut" },
//       },
//     }),
//     [],
//   )

//   const modalVariants = useMemo(
//     () => ({
//       hidden: { opacity: 0, y: 50, scale: 0.95 },
//       visible: {
//         opacity: 1,
//         y: 0,
//         scale: 1,
//         transition: {
//           duration: 0.5,
//           ease: "easeOut",
//           type: "spring",
//           stiffness: 300,
//           damping: 30,
//         },
//       },
//       exit: {
//         opacity: 0,
//         y: 50,
//         scale: 0.95,
//         transition: {
//           duration: 0.5,
//           ease: "easeIn",
//         },
//       },
//     }),
//     [],
//   )

//   const overlayVariants = useMemo(
//     () => ({
//       hidden: { opacity: 0 },
//       visible: { opacity: 1, transition: { duration: 0.3 } },
//       exit: { opacity: 0, transition: { duration: 0.3 } },
//     }),
//     [],
//   )

//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />

//       <Button
//         variant="contained"
//         onClick={handleModalToggle}
//         startIcon={<PersonIcon />}
//         sx={{
//           backgroundColor: "primary.main",
//           "&:hover": {
//             backgroundColor: "primary.dark",
//           },
//         }}
//       >
//         Sign In
//       </Button>

//       <AnimatePresence>
//         {isModalOpen && (
//           <motion.div
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             variants={overlayVariants}
//             style={{
//               position: "fixed",
//               top: 0,
//               left: 0,
//               right: 0,
//               bottom: 0,
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               background: "rgba(0, 0, 0, 0.5)",
//               zIndex: 1000,
//             }}
//             onClick={handleModalToggle}
//           >
//             <motion.div
//               variants={modalVariants}
//               style={{
//                 width: isMobile ? "100%" : isTablet ? "90%" : "800px",
//                 maxWidth: "100%",
//                 height: isMobile ? "100%" : "auto",
//                 maxHeight: isMobile ? "100%" : "90vh",
//                 display: "flex",
//                 flexDirection: isMobile ? "column" : "row",
//                 overflow: "auto",
//                 borderRadius: isMobile ? 0 : "20px",
//               }}
//               onClick={(e) => e.stopPropagation()}
//             >
//               <Card
//                 sx={{
//                   width: "100%",
//                   height: "100%",
//                   display: "flex",
//                   flexDirection: isMobile ? "column" : "row",
//                   overflow: "hidden",
//                 }}
//               >
//                 <IconButton
//                   sx={{
//                     position: "absolute",
//                     top: isMobile ? 16 : 8,
//                     right: isMobile ? 16 : 8,
//                     color: isMobile ? "primary.main" : "black",
//                     "&:hover": {
//                       backgroundColor: isMobile ? "white" : "rgba(0,0,0,0.1)",
//                     },
//                     zIndex: 1,
//                   }}
//                   onClick={handleModalToggle}
//                 >
//                   <CloseIcon />
//                 </IconButton>
//                 <Box
//                   sx={{
//                     width: isMobile ? "100%" : "40%",
//                     minHeight: isMobile ? "150px" : "auto",
//                     background: "linear-gradient(135deg, #004c40 0%, #00796b 100%)",
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     color: "white",
//                     p: isMobile ? 2 : 4,
//                     position: "relative",
//                     overflow: "hidden",
//                   }}
//                 >
//                   <motion.div variants={itemVariants}>
//                     <Typography variant={isMobile ? "h6" : "h5"} fontWeight="bold" mb={1}>
//                       {isSignUp ? "Join Us!" : "Welcome Back!"}
//                     </Typography>
//                   </motion.div>
//                   <motion.div variants={itemVariants}>
//                     <Typography variant="body2" textAlign="center" mb={2}>
//                       {isSignUp ? "Already have an account?" : "Don't have an account yet?"}
//                     </Typography>
//                   </motion.div>
//                   <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                     <Button
//                       variant="outlined"
//                       onClick={() => setIsSignUp(!isSignUp)}
//                       sx={{
//                         color: "white",
//                         borderColor: "white",
//                         "&:hover": {
//                           borderColor: "white",
//                           backgroundColor: "rgba(255,255,255,0.1)",
//                         },
//                       }}
//                     >
//                       {isSignUp ? "Sign In" : "Sign Up"}
//                     </Button>
//                   </motion.div>
//                 </Box>
//                 <Box
//                   sx={{
//                     width: isMobile ? "100%" : "60%",
//                     height: isMobile ? "auto" : "auto",
//                     p: isExtraSmall ? 2 : isMobile ? 3 : 4,
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "center",
//                     bgcolor: "background.paper",
//                     position: "relative",
//                     overflow: "auto",
//                   }}
//                 >
//                   <AnimatePresence mode="wait">
//                     <motion.div
//                       key={isSignUp ? "signup" : "signin"}
//                       variants={containerVariants}
//                       initial="hidden"
//                       animate="visible"
//                       exit="exit"
//                       style={{
//                         width: "100%",
//                         display: "flex",
//                         flexDirection: "column",
//                         alignItems: "center",
//                       }}
//                     >
//                       <motion.div variants={itemVariants}>
//                         <Typography
//                           variant={isMobile ? "h6" : "h5"}
//                           color="primary"
//                           fontWeight="bold"
//                           mb={isMobile ? 2 : 4}
//                         >
//                           {isOtpVerification ? "Verify OTP" : isSignUp ? "Create Account" : "Login"}
//                         </Typography>
//                       </motion.div>
//                       {isOtpVerification ? (
//                         <Box component="form" onSubmit={handleOtpSubmit} width="100%" maxWidth="400px">
//                           <motion.div variants={itemVariants}>
//                             <Typography variant="body1" align="center" gutterBottom>
//                               Enter the 6-digit OTP sent to your email
//                             </Typography>
//                           </motion.div>
//                           <motion.div variants={itemVariants}>
//                             <OtpInput otp={otp} setOtp={setOtp} />
//                           </motion.div>
//                           <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
//                             <Button
//                               type="submit"
//                               fullWidth
//                               variant="contained"
//                               disabled={isSubmitting || otp.some((digit) => digit === "")}
//                               sx={{
//                                 mt: 3,
//                                 mb: 2,
//                                 backgroundColor: "primary.main",
//                                 "&:hover": {
//                                   backgroundColor: "primary.dark",
//                                 },
//                               }}
//                             >
//                               {isSubmitting ? <CircularProgress size={24} /> : "Verify OTP"}
//                             </Button>
//                           </motion.div>
//                         </Box>
//                       ) : (
//                         <Box component="form" onSubmit={onSubmit} width="100%" maxWidth={isMobile ? "100%" : "400px"}>
//                           {isSignUp && (
//                             <Grid container spacing={isExtraSmall ? 1 : isMobile ? 1.5 : 2}>
//                               <Grid item xs={12} sm={isMobile ? 12 : 6}>
//                                 <InputField
//                                   name="firstName"
//                                   label="First Name"
//                                   icon={PersonIcon}
//                                   value={formData.firstName}
//                                   onChange={handleInputChange}
//                                   error={formErrors.firstName}
//                                   isExtraSmall={isExtraSmall}
//                                   isMobile={isMobile}
//                                   fullWidth
//                                 />
//                               </Grid>
//                               <Grid item xs={12} sm={isMobile ? 12 : 6}>
//                                 <InputField
//                                   name="lastName"
//                                   label="Last Name"
//                                   icon={PersonIcon}
//                                   value={formData.lastName}
//                                   onChange={handleInputChange}
//                                   error={formErrors.lastName}
//                                   isExtraSmall={isExtraSmall}
//                                   isMobile={isMobile}
//                                   fullWidth
//                                 />
//                               </Grid>
//                             </Grid>
//                           )}
//                           <InputField
//                             name="email"
//                             label="Email"
//                             icon={EmailIcon}
//                             value={formData.email}
//                             onChange={handleInputChange}
//                             error={formErrors.email}
//                             isExtraSmall={isExtraSmall}
//                             isMobile={isMobile}
//                             fullWidth
//                           />
//                           <InputField
//                             name="password"
//                             label={isSignUp ? "New Password" : "Password"}
//                             type={showPassword ? "text" : "password"}
//                             icon={LockIcon}
//                             value={formData.password}
//                             onChange={handleInputChange}
//                             error={formErrors.password}
//                             isExtraSmall={isExtraSmall}
//                             isMobile={isMobile}
//                             InputProps={{
//                               endAdornment: (
//                                 <InputAdornment position="end">
//                                   <IconButton
//                                     onClick={togglePasswordVisibility}
//                                     edge="end"
//                                     aria-label={showPassword ? "Hide password" : "Show password"}
//                                   >
//                                     {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
//                                   </IconButton>
//                                 </InputAdornment>
//                               ),
//                             }}
//                             fullWidth
//                           />
//                           {isSignUp && (
//                             <InputField
//                               name="confirmPassword"
//                               label="Confirm Password"
//                               type={showConfirmPassword ? "text" : "password"}
//                               icon={LockIcon}
//                               value={formData.confirmPassword}
//                               onChange={handleInputChange}
//                               error={formErrors.confirmPassword}
//                               isExtraSmall={isExtraSmall}
//                               isMobile={isMobile}
//                               InputProps={{
//                                 endAdornment: (
//                                   <InputAdornment position="end">
//                                     <IconButton
//                                       onClick={toggleConfirmPasswordVisibility}
//                                       edge="end"
//                                       aria-label={showConfirmPassword ? "Hide password" : "Show password"}
//                                     >
//                                       {showConfirmPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
//                                     </IconButton>
//                                   </InputAdornment>
//                                 ),
//                               }}
//                               fullWidth
//                             />
//                           )}
//                           <motion.div variants={itemVariants}>
//                             <Box
//                               sx={{
//                                 display: "flex",
//                                 flexDirection: isMobile ? "column" : "row",
//                                 justifyContent: "space-between",
//                                 alignItems: isMobile ? "flex-start" : "center",
//                                 mb: 2,
//                                 gap: isMobile ? 1 : 0,
//                               }}
//                             >
//                               <FormControlLabel
//                                 control={
//                                   <Checkbox
//                                     checked={rememberMe}
//                                     onChange={(e) => setRememberMe(e.target.checked)}
//                                     color="primary"
//                                   />
//                                 }
//                                 label={<Typography variant={isMobile ? "body2" : "body1"}>Remember me</Typography>}
//                               />
//                               {!isSignUp && (
//                                 <Link
//                                   href="#"
//                                   color="primary"
//                                   underline="hover"
//                                   onClick={(e) => {
//                                     e.preventDefault()
//                                     setSnackbar({
//                                       open: true,
//                                       message: "Password reset email sent!",
//                                       severity: "success",
//                                     })
//                                   }}
//                                   sx={{ fontSize: isMobile ? "0.875rem" : "1rem" }}
//                                 >
//                                   Forgot Password?
//                                 </Link>
//                               )}
//                             </Box>
//                           </motion.div>
//                           <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
//                             <Button
//                               type="submit"
//                               fullWidth
//                               variant="contained"
//                               disabled={isSubmitting}
//                               sx={{
//                                 mt: isExtraSmall ? 1 : isMobile ? 2 : 3,
//                                 mb: isExtraSmall ? 1 : isMobile ? 1 : 2,
//                                 py: isExtraSmall ? 1 : isMobile ? 1.5 : 2,
//                                 backgroundColor: "primary.main",
//                                 "&:hover": {
//                                   backgroundColor: "primary.dark",
//                                 },
//                                 transition: "all 0.3s ease-in-out",
//                                 fontSize: isMobile ? "0.875rem" : "1rem",
//                               }}
//                             >
//                               {isSubmitting ? <CircularProgress size={20} /> : isSignUp ? "Sign Up" : "Login"}
//                             </Button>
//                           </motion.div>
//                         </Box>
//                       )}
//                     </motion.div>
//                   </AnimatePresence>
//                 </Box>
//               </Card>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//       <Snackbar
//         open={snackbar.open}
//         autoHideDuration={6000}
//         onClose={handleCloseSnackbar}
//         anchorOrigin={{ vertical: "top", horizontal: "center" }}
//       >
//         <Alert
//           onClose={handleCloseSnackbar}
//           severity={snackbar.severity}
//           sx={{
//             width: "100%",
//             alignItems: "center",
//             "& .MuiAlert-icon": {
//               fontSize: "1.5rem",
//             },
//           }}
//           elevation={6}
//           variant="filled"
//         >
//           <Typography variant="body1">{snackbar.message}</Typography>
//         </Alert>
//       </Snackbar>
//       <ErrorDialog
//         open={errorDialog.open}
//         onClose={handleCloseErrorDialog}
//         title={errorDialog.title}
//         message={errorDialog.message}
//       />
//     </ThemeProvider>
//   )
// }

// export default LoginPage


"use client"

// NOTE: Ensure CORS is enabled on the server-side for the following API endpoints:
// - https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1/register
// - https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1/login
// - https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1/verify-otp

// Add the following headers to the server responses:
// Access-Control-Allow-Origin: *
// Access-Control-Allow-Methods: GET, POST, OPTIONS
// Access-Control-Allow-Headers: Content-Type, Authorization







// import React, { useState, useCallback, useRef, useMemo } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import {
//   Person as PersonIcon,
//   Email as EmailIcon,
//   Lock as LockIcon,
//   Visibility as VisibilityIcon,
//   VisibilityOff as VisibilityOffIcon,
//   Close as CloseIcon,
//   Error as ErrorIcon,
// } from "@mui/icons-material"
// import {
//   Button,
//   TextField,
//   InputAdornment,
//   IconButton,
//   Typography,
//   Box,
//   Card,
//   Link,
//   ThemeProvider,
//   createTheme,
//   CssBaseline,
//   useMediaQuery,
//   Checkbox,
//   FormControlLabel,
//   CircularProgress,
//   Grid,
//   Snackbar,
//   Alert,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
// } from "@mui/material"
// import axios from "axios"

// const API_REGISTER_URL = "https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1/register"
// const API_LOGIN_URL = "https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1/login"
// const API_OTP_VALIDATE_URL = "https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1/verify-otp"


// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#004c40",
//       light: "#48A999",
//       dark: "#004C40",
//     },
//     secondary: {
//       main: "#FF6E40",
//       light: "#FFA06D",
//       dark: "#C53D13",
//     },
//     background: {
//       default: "#E0F2F1",
//       paper: "#FFFFFF",
//     },
//   },
//   typography: {
//     fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
//     h4: {
//       fontWeight: 700,
//       fontSize: "1.75rem",
//       "@media (max-width:600px)": {
//         fontSize: "1.5rem",
//       },
//     },
//     h5: {
//       fontWeight: 600,
//       fontSize: "1.5rem",
//       "@media (max-width:600px)": {
//         fontSize: "1.25rem",
//       },
//     },
//     h6: {
//       fontWeight: 600,
//       fontSize: "1.25rem",
//       "@media (max-width:600px)": {
//         fontSize: "1.1rem",
//       },
//     },
//     body1: {
//       fontSize: "1rem",
//       "@media (max-width:600px)": {
//         fontSize: "0.875rem",
//       },
//     },
//     body2: {
//       fontSize: "0.875rem",
//       "@media (max-width:600px)": {
//         fontSize: "0.75rem",
//       },
//     },
//     button: {
//       textTransform: "none",
//       fontWeight: 600,
//     },
//   },
//   shape: {
//     borderRadius: 12,
//   },
//   components: {
//     MuiTextField: {
//       styleOverrides: {
//         root: {
//           "& .MuiOutlinedInput-root": {
//             borderRadius: 12,
//             backgroundColor: "#F5F5F5",
//             "&:hover fieldset": {
//               borderColor: "#00796B",
//             },
//             "&.Mui-focused fieldset": {
//               borderColor: "#00796B",
//             },
//           },
//         },
//       },
//     },
//     MuiButton: {
//       styleOverrides: {
//         root: {
//           borderRadius: 25,
//           padding: "10px 20px",
//           boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//           transition: "all 0.3s ease",
//           "&:hover": {
//             transform: "translateY(-2px)",
//             boxShadow: "0 6px 8px rgba(0, 0, 0, 0.15)",
//           },
//         },
//       },
//     },
//     MuiCard: {
//       styleOverrides: {
//         root: {
//           boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
//           overflow: "visible",
//         },
//       },
//     },
//   },
// })

// // InputField component with enhanced animation
// const InputField = React.memo(({ icon: Icon, error, isExtraSmall, isMobile, fullWidth, ...props }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 20 }}
//     animate={{ opacity: 1, y: 0 }}
//     exit={{ opacity: 0, y: -20 }}
//     transition={{ duration: 0.5, ease: "easeInOut" }}
//   >
//     <TextField
//       fullWidth={fullWidth}
//       variant="outlined"
//       margin="normal"
//       size={isExtraSmall ? "small" : isMobile ? "small" : "medium"}
//       InputProps={{
//         startAdornment: (
//           <InputAdornment position="start">
//             <Icon sx={{ color: error ? "error.main" : "text.secondary" }} />
//           </InputAdornment>
//         ),
//       }}
//       error={!!error}
//       helperText={error}
//       sx={{
//         "& .MuiOutlinedInput-root": {
//           backgroundColor: "#F5F5F5",
//           ...((isExtraSmall || isMobile) && {
//             padding: "6px 12px",
//           }),
//         },
//       }}
//       {...props}
//     />
//   </motion.div>
// ))

// // OtpInput component
// const OtpInput = React.memo(({ otp, setOtp }) => {
//   const inputRefs = useRef([])

//   const handleChange = useCallback(
//     (element, index) => {
//       if (isNaN(element.value)) return false
//       const newOtp = [...otp]
//       newOtp[index] = element.value
//       setOtp(newOtp)
//       if (element.value !== "" && index < 5) {
//         inputRefs.current[index + 1].focus()
//       }
//     },
//     [otp, setOtp],
//   )

//   const handleKeyDown = useCallback(
//     (e, index) => {
//       if (e.key === "Backspace" && index > 0 && otp[index] === "") {
//         inputRefs.current[index - 1].focus()
//       }
//     },
//     [otp],
//   )

//   const handlePaste = useCallback(
//     (e) => {
//       e.preventDefault()
//       const pastedData = e.clipboardData.getData("text").slice(0, 6).split("")
//       const newOtp = [...otp]
//       pastedData.forEach((value, index) => {
//         if (index < 6 && !isNaN(value)) {
//           newOtp[index] = value
//         }
//       })
//       setOtp(newOtp)
//       if (pastedData.length === 6) {
//         inputRefs.current[5].focus()
//       } else {
//         inputRefs.current[pastedData.length].focus()
//       }
//     },
//     [otp, setOtp],
//   )

//   return (
//     <Box display="flex" justifyContent="center" my={2}>
//       {otp.map((digit, index) => (
//         <motion.div
//           key={index}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3, delay: index * 0.1 }}
//         >
//           <TextField
//             inputRef={(el) => (inputRefs.current[index] = el)}
//             variant="outlined"
//             margin="dense"
//             value={digit}
//             onChange={(e) => handleChange(e.target, index)}
//             onKeyDown={(e) => handleKeyDown(e, index)}
//             onPaste={handlePaste}
//             inputProps={{
//               maxLength: 1,
//               style: { textAlign: "center", fontSize: "1.5rem" },
//             }}
//             sx={{ width: "3rem", mx: 0.5 }}
//           />
//         </motion.div>
//       ))}
//     </Box>
//   )
// })

// // ErrorDialog component
// const ErrorDialog = ({ open, onClose, title, message }) => {
//   return (
//     <AnimatePresence>
//       {open && (
//         <Dialog
//           open={open}
//           onClose={onClose}
//           PaperComponent={motion.div}
//           PaperProps={{
//             initial: { opacity: 0, y: -50 },
//             animate: { opacity: 1, y: 0 },
//             exit: { opacity: 0, y: -50 },
//             transition: { duration: 0.3 },
//           }}
//         >
//           <DialogTitle sx={{ m: 0, p: 2, bgcolor: "error.main", color: "error.contrastText" }}>
//             <IconButton
//               aria-label="close"
//               onClick={onClose}
//               sx={{
//                 position: "absolute",
//                 right: 8,
//                 top: 8,
//                 color: "inherit",
//               }}
//             >
//               <CloseIcon />
//             </IconButton>
//             <Typography variant="h6" component="div" sx={{ display: "flex", alignItems: "center" }}>
//               <ErrorIcon sx={{ mr: 1 }} />
//               {title || "Error"}
//             </Typography>
//           </DialogTitle>
//           <DialogContent sx={{ mt: 2 }}>
//             <Typography variant="body1">{message}</Typography>
//           </DialogContent>
//           <DialogActions>
//             <Button onClick={onClose} color="primary" variant="contained">
//               Close
//             </Button>
//           </DialogActions>
//         </Dialog>
//       )}
//     </AnimatePresence>
//   )
// }

// // Main LoginPage component
// const LoginPage = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false)
//   const [showPassword, setShowPassword] = useState(false)
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false)
//   const [isSignUp, setIsSignUp] = useState(false)
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   })
//   const [formErrors, setFormErrors] = useState({})
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [rememberMe, setRememberMe] = useState(false)
//   const [isOtpVerification, setIsOtpVerification] = useState(false)
//   const [otp, setOtp] = useState(new Array(6).fill(""))
//   const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" })
//   const [errorDialog, setErrorDialog] = useState({ open: false, title: "", message: "" })

//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
//   const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"))
//   const isExtraSmall = useMediaQuery("(max-width:360px)")

//   const signUp = useCallback(async (userData) => {
//     const response = await fetch(API_REGISTER_URL, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Origin: window.location.origin, 
//       },
//       body: JSON.stringify({
//         firstname: userData.firstName,
//         lastname: userData.lastName,
//         mail: userData.email,
//         password: userData.password,
//         confirmpassword: userData.confirmPassword,
//       }),
//     })

//     if (!response.ok) {
//       const errorData = await response.json()
//       throw new Error(errorData.message || "Signup failed")
//     }

//     const data = await response.json()
//     if (data.success) {
//       setIsOtpVerification(true)
//       setSnackbar({ open: true, message: "Registration successful! Please verify your OTP.", severity: "success" })
//     }

//     return data
//   }, [])

//   const signIn = useCallback(async (userData) => {
//     try {
//       const response = await axios.post(
//         API_LOGIN_URL,
//         {
//           mail: userData.email,
//           password: userData.password,
//         },
//         {
//           headers: {
//             Origin: window.location.origin, 
//           },
//         },
//       )

//       if (response.data && response.data.success) {
//         navigateToStudentPortal()
//       }

//       return response.data
//     } catch (error) {
//       if (error.response) {
//         // The request was made and the server responded with a status code
//         throw new Error(error.response.data?.message || "Login failed")
//       } else if (error.request) {
//         // The request was made but no response was received
//         throw new Error("No response received from server. Please try again.")
//       } else {
//         // Something happened in setting up the request that triggered an Error
//         throw new Error("An error occurred while logging in. Please try again.")
//       }
//     }
//   }, [])

//   const navigateToStudentPortal = useCallback(() => {
//     window.location.href = "/student-portal"
//   }, [])

//   const handleModalToggle = useCallback(() => {
//     setIsModalOpen((prev) => !prev)
//     setFormData({ firstName: "", lastName: "", email: "", password: "", confirmPassword: "" })
//     setFormErrors({})
//     setIsOtpVerification(false)
//     setOtp(new Array(6).fill(""))
//   }, [])

//   const handleInputChange = useCallback(
//     (e) => {
//       const { name, value } = e.target
//       setFormData((prev) => ({ ...prev, [name]: value }))
//       if (formErrors[name]) {
//         setFormErrors((prev) => ({ ...prev, [name]: undefined }))
//       }
//     },
//     [formErrors],
//   )

//   const validateForm = useCallback(() => {
//     const errors = {}
//     if (isSignUp) {
//       if (!formData.firstName) errors.firstName = "First name is required"
//       if (!formData.lastName) errors.lastName = "Last name is required"
//     }
//     if (!formData.email) {
//       errors.email = "Email is required"
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       errors.email = "Email is invalid"
//     }
//     if (!formData.password) {
//       errors.password = "Password is required"
//     } else if (formData.password.length < 8) {
//       errors.password = "Password must be at least 8 characters"
//     }
//     if (isSignUp) {
//       if (!formData.confirmPassword) {
//         errors.confirmPassword = "Please confirm your password"
//       } else if (formData.password !== formData.confirmPassword) {
//         errors.confirmPassword = "Passwords do not match"
//       }
//     }
//     setFormErrors(errors)
//     return Object.keys(errors).length === 0
//   }, [formData, isSignUp])

//   const onSubmit = useCallback(
//     async (e) => {
//       e.preventDefault()

//       if (validateForm()) {
//         setIsSubmitting(true)
//         try {
//           if (isSignUp) {
//             await signUp(formData)
//             // OTP verification is now handled in the signUp function
//           } else {
//             const response = await signIn(formData)
//             if (response && response.success) {
//               setSnackbar({ open: true, message: "Login successful!", severity: "success" })
//               // You might want to store the token or user data here
//               // For example: localStorage.setItem('token', response.token);
//             } else {
//               throw new Error(response?.message || "Login failed")
//             }
//           }
//         } catch (error) {
//           setErrorDialog({
//             open: true,
//             title: isSignUp ? "Signup Error" : "Login Error",
//             message: error.message || "An error occurred. Please try again.",
//           })
//         } finally {
//           setIsSubmitting(false)
//         }
//       }
//     },
//     [formData, isSignUp, validateForm, signUp, signIn],
//   )

//   const handleOtpSubmit = useCallback(
//     async (e) => {
//       e.preventDefault()
//       setIsSubmitting(true)
//       try {
//         const response = await fetch(API_OTP_VALIDATE_URL, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Origin: window.location.origin, 
//           },
//           body: JSON.stringify({
//             mail: formData.email,
//             otp: otp.join(""),
//           }),
//         })

//         if (!response.ok) {
//           throw new Error("OTP verification failed")
//         }

//         // OTP verification successful, navigate to student portal
//         navigateToStudentPortal()
//       } catch (error) {
//         setSnackbar({ open: true, message: "OTP verification failed. Please try again.", severity: "error" })
//       } finally {
//         setIsSubmitting(false)
//       }
//     },
//     [formData.email, otp, navigateToStudentPortal],
//   )

//   const togglePasswordVisibility = useCallback(() => {
//     setShowPassword((prev) => !prev)
//   }, [])

//   const toggleConfirmPasswordVisibility = useCallback(() => {
//     setShowConfirmPassword((prev) => !prev)
//   }, [])

//   const handleCloseSnackbar = useCallback(() => {
//     setSnackbar((prev) => ({ ...prev, open: false }))
//   }, [])

//   const handleCloseErrorDialog = useCallback(() => {
//     setErrorDialog((prev) => ({ ...prev, open: false }))
//   }, [])

//   const containerVariants = useMemo(
//     () => ({
//       hidden: { opacity: 0, scale: 0.8 },
//       visible: {
//         opacity: 1,
//         scale: 1,
//         transition: {
//           duration: 0.5,
//           ease: "easeOut",
//           staggerChildren: 0.1,
//           delayChildren: 0.3,
//         },
//       },
//       exit: {
//         opacity: 0,
//         scale: 0.8,
//         transition: {
//           duration: 0.5,
//           ease: "easeIn",
//         },
//       },
//     }),
//     [],
//   )

//   const itemVariants = useMemo(
//     () => ({
//       hidden: { opacity: 0, y: 20 },
//       visible: {
//         opacity: 1,
//         y: 0,
//         transition: { duration: 0.5, ease: "easeOut" },
//       },
//     }),
//     [],
//   )

//   const modalVariants = useMemo(
//     () => ({
//       hidden: { opacity: 0, y: 50, scale: 0.95 },
//       visible: {
//         opacity: 1,
//         y: 0,
//         scale: 1,
//         transition: {
//           duration: 0.5,
//           ease: "easeOut",
//           type: "spring",
//           stiffness: 300,
//           damping: 30,
//         },
//       },
//       exit: {
//         opacity: 0,
//         y: 50,
//         scale: 0.95,
//         transition: {
//           duration: 0.5,
//           ease: "easeIn",
//         },
//       },
//     }),
//     [],
//   )

//   const overlayVariants = useMemo(
//     () => ({
//       hidden: { opacity: 0 },
//       visible: { opacity: 1, transition: { duration: 0.3 } },
//       exit: { opacity: 0, transition: { duration: 0.3 } },
//     }),
//     [],
//   )

//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />

//       <Button
//         variant="contained"
//         onClick={handleModalToggle}
//         startIcon={<PersonIcon />}
//         sx={{
//           backgroundColor: "primary.main",
//           "&:hover": {
//             backgroundColor: "primary.dark",
//           },
//         }}
//       >
//         Sign In
//       </Button>

//       <AnimatePresence>
//         {isModalOpen && (
//           <motion.div
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             variants={overlayVariants}
//             style={{
//               position: "fixed",
//               top: 0,
//               left: 0,
//               right: 0,
//               bottom: 0,
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               background: "rgba(0, 0, 0, 0.5)",
//               zIndex: 1000,
//             }}
//             onClick={handleModalToggle}
//           >
//             <motion.div
//               variants={modalVariants}
//               style={{
//                 width: isMobile ? "100%" : isTablet ? "90%" : "800px",
//                 maxWidth: "100%",
//                 height: isMobile ? "100%" : "auto",
//                 maxHeight: isMobile ? "100%" : "90vh",
//                 display: "flex",
//                 flexDirection: isMobile ? "column" : "row",
//                 overflow: "auto",
//                 borderRadius: isMobile ? 0 : "20px",
//               }}
//               onClick={(e) => e.stopPropagation()}
//             >
//               <Card
//                 sx={{
//                   width: "100%",
//                   height: "100%",
//                   display: "flex",
//                   flexDirection: isMobile ? "column" : "row",
//                   overflow: "hidden",
//                 }}
//               >
//                 <IconButton
//                   sx={{
//                     position: "absolute",
//                     top: isMobile ? 16 : 8,
//                     right: isMobile ? 16 : 8,
//                     color: isMobile ? "primary.main" : "black",
//                     "&:hover": {
//                       backgroundColor: isMobile ? "white" : "rgba(0,0,0,0.1)",
//                     },
//                     zIndex: 1,
//                   }}
//                   onClick={handleModalToggle}
//                 >
//                   <CloseIcon />
//                 </IconButton>
//                 <Box
//                   sx={{
//                     width: isMobile ? "100%" : "40%",
//                     minHeight: isMobile ? "150px" : "auto",
//                     background: "linear-gradient(135deg, #004c40 0%, #00796b 100%)",
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     color: "white",
//                     p: isMobile ? 2 : 4,
//                     position: "relative",
//                     overflow: "hidden",
//                   }}
//                 >
//                   <motion.div variants={itemVariants}>
//                     <Typography variant={isMobile ? "h6" : "h5"} fontWeight="bold" mb={1}>
//                       {isSignUp ? "Join Us!" : "Welcome Back!"}
//                     </Typography>
//                   </motion.div>
//                   <motion.div variants={itemVariants}>
//                     <Typography variant="body2" textAlign="center" mb={2}>
//                       {isSignUp ? "Already have an account?" : "Don't have an account yet?"}
//                     </Typography>
//                   </motion.div>
//                   <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                     <Button
//                       variant="outlined"
//                       onClick={() => setIsSignUp(!isSignUp)}
//                       sx={{
//                         color: "white",
//                         borderColor: "white",
//                         "&:hover": {
//                           borderColor: "white",
//                           backgroundColor: "rgba(255,255,255,0.1)",
//                         },
//                       }}
//                     >
//                       {isSignUp ? "Sign In" : "Sign Up"}
//                     </Button>
//                   </motion.div>
//                 </Box>
//                 <Box
//                   sx={{
//                     width: isMobile ? "100%" : "60%",
//                     height: isMobile ? "auto" : "auto",
//                     p: isExtraSmall ? 2 : isMobile ? 3 : 4,
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "center",
//                     bgcolor: "background.paper",
//                     position: "relative",
//                     overflow: "auto",
//                   }}
//                 >
//                   <AnimatePresence mode="wait">
//                     <motion.div
//                       key={isSignUp ? "signup" : "signin"}
//                       variants={containerVariants}
//                       initial="hidden"
//                       animate="visible"
//                       exit="exit"
//                       style={{
//                         width: "100%",
//                         display: "flex",
//                         flexDirection: "column",
//                         alignItems: "center",
//                       }}
//                     >
//                       <motion.div variants={itemVariants}>
//                         <Typography
//                           variant={isMobile ? "h6" : "h5"}
//                           color="primary"
//                           fontWeight="bold"
//                           mb={isMobile ? 2 : 4}
//                         >
//                           {isOtpVerification ? "Verify OTP" : isSignUp ? "Create Account" : "Login"}
//                         </Typography>
//                       </motion.div>
//                       {isOtpVerification ? (
//                         <Box component="form" onSubmit={handleOtpSubmit} width="100%" maxWidth="400px">
//                           <motion.div variants={itemVariants}>
//                             <Typography variant="body1" align="center" gutterBottom>
//                               Enter the 6-digit OTP sent to your email
//                             </Typography>
//                           </motion.div>
//                           <motion.div variants={itemVariants}>
//                             <OtpInput otp={otp} setOtp={setOtp} />
//                           </motion.div>
//                           <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
//                             <Button
//                               type="submit"
//                               fullWidth
//                               variant="contained"
//                               disabled={isSubmitting || otp.some((digit) => digit === "")}
//                               sx={{
//                                 mt: 3,
//                                 mb: 2,
//                                 backgroundColor: "primary.main",
//                                 "&:hover": {
//                                   backgroundColor: "primary.dark",
//                                 },
//                               }}
//                             >
//                               {isSubmitting ? <CircularProgress size={24} /> : "Verify OTP"}
//                             </Button>
//                           </motion.div>
//                         </Box>
//                       ) : (
//                         <Box component="form" onSubmit={onSubmit} width="100%" maxWidth={isMobile ? "100%" : "400px"}>
//                           {isSignUp && (
//                             <Grid container spacing={isExtraSmall ? 1 : isMobile ? 1.5 : 2}>
//                               <Grid item xs={12} sm={isMobile ? 12 : 6}>
//                                 <InputField
//                                   name="firstName"
//                                   label="First Name"
//                                   icon={PersonIcon}
//                                   value={formData.firstName}
//                                   onChange={handleInputChange}
//                                   error={formErrors.firstName}
//                                   isExtraSmall={isExtraSmall}
//                                   isMobile={isMobile}
//                                   fullWidth
//                                 />
//                               </Grid>
//                               <Grid item xs={12} sm={isMobile ? 12 : 6}>
//                                 <InputField
//                                   name="lastName"
//                                   label="Last Name"
//                                   icon={PersonIcon}
//                                   value={formData.lastName}
//                                   onChange={handleInputChange}
//                                   error={formErrors.lastName}
//                                   isExtraSmall={isExtraSmall}
//                                   isMobile={isMobile}
//                                   fullWidth
//                                 />
//                               </Grid>
//                             </Grid>
//                           )}
//                           <InputField
//                             name="email"
//                             label="Email"
//                             icon={EmailIcon}
//                             value={formData.email}
//                             onChange={handleInputChange}
//                             error={formErrors.email}
//                             isExtraSmall={isExtraSmall}
//                             isMobile={isMobile}
//                             fullWidth
//                           />
//                           <InputField
//                             name="password"
//                             label={isSignUp ? "New Password" : "Password"}
//                             type={showPassword ? "text" : "password"}
//                             icon={LockIcon}
//                             value={formData.password}
//                             onChange={handleInputChange}
//                             error={formErrors.password}
//                             isExtraSmall={isExtraSmall}
//                             isMobile={isMobile}
//                             InputProps={{
//                               endAdornment: (
//                                 <InputAdornment position="end">
//                                   <IconButton
//                                     onClick={togglePasswordVisibility}
//                                     edge="end"
//                                     aria-label={showPassword ? "Hide password" : "Show password"}
//                                   >
//                                     {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
//                                   </IconButton>
//                                 </InputAdornment>
//                               ),
//                             }}
//                             fullWidth
//                           />
//                           {isSignUp && (
//                             <InputField
//                               name="confirmPassword"
//                               label="Confirm Password"
//                               type={showConfirmPassword ? "text" : "password"}
//                               icon={LockIcon}
//                               value={formData.confirmPassword}
//                               onChange={handleInputChange}
//                               error={formErrors.confirmPassword}
//                               isExtraSmall={isExtraSmall}
//                               isMobile={isMobile}
//                               InputProps={{
//                                 endAdornment: (
//                                   <InputAdornment position="end">
//                                     <IconButton
//                                       onClick={toggleConfirmPasswordVisibility}
//                                       edge="end"
//                                       aria-label={showConfirmPassword ? "Hide password" : "Show password"}
//                                     >
//                                       {showConfirmPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
//                                     </IconButton>
//                                   </InputAdornment>
//                                 ),
//                               }}
//                               fullWidth
//                             />
//                           )}
//                           <motion.div variants={itemVariants}>
//                             <Box
//                               sx={{
//                                 display: "flex",
//                                 flexDirection: isMobile ? "column" : "row",
//                                 justifyContent: "space-between",
//                                 alignItems: isMobile ? "flex-start" : "center",
//                                 mb: 2,
//                                 gap: isMobile ? 1 : 0,
//                               }}
//                             >
//                               <FormControlLabel
//                                 control={
//                                   <Checkbox
//                                     checked={rememberMe}
//                                     onChange={(e) => setRememberMe(e.target.checked)}
//                                     color="primary"
//                                   />
//                                 }
//                                 label={<Typography variant={isMobile ? "body2" : "body1"}>Remember me</Typography>}
//                               />
//                               {!isSignUp && (
//                                 <Link
//                                   href="#"
//                                   color="primary"
//                                   underline="hover"
//                                   onClick={(e) => {
//                                     e.preventDefault()
//                                     setSnackbar({
//                                       open: true,
//                                       message: "Password reset email sent!",
//                                       severity: "success",
//                                     })
//                                   }}
//                                   sx={{ fontSize: isMobile ? "0.875rem" : "1rem" }}
//                                 >
//                                   Forgot Password?
//                                 </Link>
//                               )}
//                             </Box>
//                           </motion.div>
//                           <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
//                             <Button
//                               type="submit"
//                               fullWidth
//                               variant="contained"
//                               disabled={isSubmitting}
//                               sx={{
//                                 mt: isExtraSmall ? 1 : isMobile ? 2 : 3,
//                                 mb: isExtraSmall ? 1 : isMobile ? 1 : 2,
//                                 py: isExtraSmall ? 1 : isMobile ? 1.5 : 2,
//                                 backgroundColor: "primary.main",
//                                 "&:hover": {
//                                   backgroundColor: "primary.dark",
//                                 },
//                                 transition: "all 0.3s ease-in-out",
//                                 fontSize: isMobile ? "0.875rem" : "1rem",
//                               }}
//                             >
//                               {isSubmitting ? <CircularProgress size={20} /> : isSignUp ? "Sign Up" : "Login"}
//                             </Button>
//                           </motion.div>
//                         </Box>
//                       )}
//                     </motion.div>
//                   </AnimatePresence>
//                 </Box>
//               </Card>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//       <Snackbar
//         open={snackbar.open}
//         autoHideDuration={6000}
//         onClose={handleCloseSnackbar}
//         anchorOrigin={{ vertical: "top", horizontal: "center" }}
//       >
//         <Alert
//           onClose={handleCloseSnackbar}
//           severity={snackbar.severity}
//           sx={{
//             width: "100%",
//             alignItems: "center",
//             "& .MuiAlert-icon": {
//               fontSize: "1.5rem",
//             },
//           }}
//           elevation={6}
//           variant="filled"
//         >
//           <Typography variant="body1">{snackbar.message}</Typography>
//         </Alert>
//       </Snackbar>
//       <ErrorDialog
//         open={errorDialog.open}
//         onClose={handleCloseErrorDialog}
//         title={errorDialog.title}
//         message={errorDialog.message}
//       />
//     </ThemeProvider>
//   )
// }

// export default LoginPage


// import React, { useState } from 'react';
// import axios from 'axios';

// const API_REGISTER_URL = "https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1/register";
// const API_LOGIN_URL = "https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1/login";

// export default function AuthForms() {
//   const [formType, setFormType] = useState('login');
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     mailId: 'gunakrish00@gmail.com',
//     password: 'Guna@1320',
//     confirmPassword: 'Guna@1320'
//   });

//   // Handle form input changes
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const url = formType === 'login' ? API_LOGIN_URL : API_REGISTER_URL;
//       const payload = formType === 'login' 
//         ? { mailId: formData.mailId, password: formData.password }
//         : formData;

//       const response = await axios.post(url, payload);
//       console.log('Response:', response.data);
//       alert(`${formType === 'login' ? 'Login' : 'Registration'} successful!`);
//     } catch (error) {
//       console.error('Error:', error.response ? error.response.data : error);
//       alert(`Failed to ${formType === 'login' ? 'login' : 'register'}.`);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-6">{formType === 'login' ? 'Login' : 'Sign Up'}</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           {formType === 'signup' && (
//             <>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">First Name</label>
//                 <input 
//                   type="text" 
//                   name="firstName" 
//                   value={formData.firstName} 
//                   onChange={handleChange} 
//                   className="mt-1 block w-full p-2 border border-gray-300 rounded-md" 
//                   required 
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Last Name</label>
//                 <input 
//                   type="text" 
//                   name="lastName" 
//                   value={formData.lastName} 
//                   onChange={handleChange} 
//                   className="mt-1 block w-full p-2 border border-gray-300 rounded-md" 
//                   required 
//                 />
//               </div>
//             </>
//           )}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Email</label>
//             <input 
//               type="email" 
//               name="mailId" 
//               value={formData.mailId} 
//               onChange={handleChange} 
//               className="mt-1 block w-full p-2 border border-gray-300 rounded-md" 
//               required 
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Password</label>
//             <input 
//               type="password" 
//               name="password" 
//               value={formData.password} 
//               onChange={handleChange} 
//               className="mt-1 block w-full p-2 border border-gray-300 rounded-md" 
//               required 
//             />
//           </div>
//           {formType === 'signup' && (
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
//               <input 
//                 type="password" 
//                 name="confirmPassword" 
//                 value={formData.confirmPassword} 
//                 onChange={handleChange} 
//                 className="mt-1 block w-full p-2 border border-gray-300 rounded-md" 
//                 required 
//               />
//             </div>
//           )}
//           <button type="submit" className="w-full py-2 px-4 bg-teal-500 text-white font-semibold rounded-md hover:bg-teal-600 transition">
//             {formType === 'login' ? 'Login' : 'Sign Up'}
//           </button>
//         </form>
//         <p className="mt-4 text-sm">
//           {formType === 'login' ? "Don't have an account?" : "Already have an account?"}
//           <button 
//             type="button" 
//             onClick={() => setFormType(formType === 'login' ? 'signup' : 'login')} 
//             className="text-teal-500 hover:underline ml-1"
//           >
//             {formType === 'login' ? 'Sign Up' : 'Login'}
//           </button>
//         </p>
//       </div>
//     </div>
//   );
// }



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const API_REGISTER_URL = "https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1/register";
// const API_LOGIN_URL = "https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1/login";
// const API_VERIFY_OTP_URL = "https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1/verify-otp";
// const API_RESEND_OTP_URL = "https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1/resend-otp";

// export default function AuthForms() {
//   const [formType, setFormType] = useState('login');
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     mailId: '',
//     password: '',
//     confirmPassword: '',
//     otp: ''
//   });
//   const [resendTimer, setResendTimer] = useState(30);
//   const [canResend, setCanResend] = useState(false);

//   useEffect(() => {
//     if (resendTimer > 0) {
//       const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
//       return () => clearTimeout(timer);
//     } else {
//       setCanResend(true);
//     }
//   }, [resendTimer]);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const url = formType === 'login' ? API_LOGIN_URL : API_REGISTER_URL;
//       const payload = formType === 'login' 
//         ? { mailId: formData.mailId, password: formData.password }
//         : formData;

//       const response = await axios.post(url, payload);
//       console.log('Response:', response.data);
//       alert(`${formType === 'login' ? 'Login' : 'Registration'} successful!`);
//     } catch (error) {
//       console.error('Error:', error.response ? error.response.data : error);
//       alert(`Failed to ${formType === 'login' ? 'login' : 'register'}.`);
//     }
//   };

//   const handleVerifyOTP = async () => {
//     try {
//       const response = await axios.post(API_VERIFY_OTP_URL, { mailId: formData.mailId, otp: formData.otp });
//       console.log('OTP Verification Response:', response.data);
//       alert('OTP Verified Successfully!');
//     } catch (error) {
//       console.error('OTP Verification Error:', error.response ? error.response.data : error);
//       alert('Failed to verify OTP.');
//     }
//   };

//   const handleResendOTP = async () => {
//     try {
//       await axios.get(`${API_RESEND_OTP_URL}?mailId=${formData.mailId}`);
//       alert('OTP Resent Successfully!');
//       setResendTimer(30);
//       setCanResend(false);
//     } catch (error) {
//       console.error('Resend OTP Error:', error.response ? error.response.data : error);
//       alert('Failed to resend OTP.');
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-6">{formType === 'login' ? 'Login' : 'Sign Up'}</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           {formType === 'signup' && (
//             <>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">First Name</label>
//                 <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Last Name</label>
//                 <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
//               </div>
//             </>
//           )}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Email</label>
//             <input type="email" name="mailId" value={formData.mailId} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Password</label>
//             <input type="password" name="password" value={formData.password} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
//           </div>
//           {formType === 'signup' && (
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
//               <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
//             </div>
//           )}
//           <button type="submit" className="w-full py-2 px-4 bg-teal-500 text-white font-semibold rounded-md hover:bg-teal-600 transition">{formType === 'login' ? 'Login' : 'Sign Up'}</button>
//         </form>
//         {formType === 'signup' && (
//           <div className="mt-4">
//             <label className="block text-sm font-medium text-gray-700">Enter OTP</label>
//             <input type="text" name="otp" value={formData.otp} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
//             <button onClick={handleVerifyOTP} className="mt-2 w-full py-2 px-4 bg-teal-500 text-white font-semibold rounded-md hover:bg-teal-600 transition">Verify OTP</button>
//             <button onClick={handleResendOTP} disabled={!canResend} className={`mt-2 w-full py-2 px-4 ${canResend ? 'bg-gray-500 hover:bg-gray-600' : 'bg-gray-300 cursor-not-allowed'} text-white font-semibold rounded-md transition`}>
//               {canResend ? 'Resend OTP' : `Resend OTP in ${resendTimer}s`}
//             </button>
//           </div>
//         )}
//         <p className="mt-4 text-sm">{formType === 'login' ? "Don't have an account?" : "Already have an account?"}<button type="button" onClick={() => setFormType(formType === 'login' ? 'signup' : 'login')} className="text-teal-500 hover:underline ml-1">{formType === 'login' ? 'Sign Up' : 'Login'}</button></p>
//       </div>
//     </div>
//   );
// }


// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import axios from 'axios';
// import { FiRefreshCcw } from 'react-icons/fi'; 

// const API_REGISTER_URL = "https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1/register";
// const API_LOGIN_URL = "https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1/login";
// const API_VERIFY_OTP_URL = "https://y7ltnmncrd.execute-api-ap-south-1.amazonaws.com/Test/api/v1/verify-otp";
// const API_RESEND_OTP_URL = "https://y7ltnmncrd.execute-api-ap-south-1.amazonaws.com/Test/api/v1/resend-otp";

// export default function AuthForms() {
//   const [formType, setFormType] = useState('login');
//   const [showForm, setShowForm] = useState(false);
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     mailId: '',
//     password: '',
//     confirmPassword: '',
//     otp: ''
//   });
//   const [resendTimer, setResendTimer] = useState(30);
//   const [canResend, setCanResend] = useState(false);
//   const [isOtpVerified, setIsOtpVerified] = useState(false); // OTP Verification
//   const [isLoading, setIsLoading] = useState(false); // Loading state 

//   useEffect(() => {
//     if (resendTimer > 0) {
//       const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
//       return () => clearTimeout(timer);
//     } else {
//       setCanResend(true);
//     }
//   }, [resendTimer]);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     try {
//       const url = formType === 'login' ? API_LOGIN_URL : API_REGISTER_URL;
//       const payload = formType === 'login' 
//         ? { mailId: formData.mailId, password: formData.password }
//         : formData;

//       const response = await axios.post(url, payload);
//       console.log('Response:', response.data);
//       alert(`${formType === 'login' ? 'Login' : 'Registration'} successful!`);

//       if (formType === 'login') {
//         window.location.href = '/dashboard';
//       } else {
//     //   after successful registration, show OTP verification form
//         setIsOtpVerified(false);
//       }
//     } catch (error) {
//       console.error('Error:', error.response ? error.response.data : error);
//       alert(`Failed to ${formType === 'login' ? 'login' : 'register'}.`);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleOtpSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     try {
//       const response = await axios.post(API_VERIFY_OTP_URL, { otp: formData.otp });
//       console.log('OTP Verification Response:', response.data);
//       setIsOtpVerified(true);
//       alert('OTP verification successful! Your account is now active.');
//       window.location.href = '/dashboard'; 
//     } catch (error) {
//       console.error('Error:', error.response ? error.response.data : error);
//       alert('OTP verification failed.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleResendOtp = async () => {
//     if (!canResend) return;
//     setResendTimer(30);
//     setCanResend(false);

//     try {
//       const response = await axios.post(API_RESEND_OTP_URL, { mailId: formData.mailId });
//       console.log('Resend OTP Response:', response.data);
//       alert('OTP has been resent!');
//     } catch (error) {
//       console.error('Error:', error.response ? error.response.data : error);
//       alert('Failed to resend OTP.');
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center bg-gray-100">
//       {!showForm ? (
//         <button onClick={() => setShowForm(true)} className="py-2 px-4 bg-teal-500 text-white font-semibold rounded-md hover:bg-teal-600 transition-all ease-in-out duration-300">Sign In</button>
//       ) : (
//         <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
//           <motion.div initial={{ y: 100 }} animate={{ y: 0 }} transition={{ type: 'spring', stiffness: 100 }} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
//             <h2 className="text-2xl font-bold mb-6">{formType === 'login' ? 'Login' : 'Sign Up'}</h2>
//             <form onSubmit={handleSubmit} className="space-y-4">
//               {formType === 'signup' && (
//                 <>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">First Name</label>
//                     <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 transition-all" required />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">Last Name</label>
//                     <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 transition-all" required />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
//                     <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 transition-all" required />
//                   </div>
//                 </>
//               )}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Email</label>
//                 <input type="email" name="mailId" value={formData.mailId} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 transition-all" required />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Password</label>
//                 <input type="password" name="password" value={formData.password} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 transition-all" required />
//               </div>
//               <button type="submit" className="w-full py-2 px-4 bg-teal-500 text-white font-semibold rounded-md hover:bg-teal-600 transition-all ease-in-out duration-300">
//                 {isLoading ? 'Loading...' : formType === 'login' ? 'Login' : 'Sign Up'}
//               </button>
//             </form>

//             {/* OTP Verification Form */}
//             {formType === 'signup' && !isOtpVerified && (
//               <motion.div className="mt-6 bg-white p-4 rounded-lg shadow-md w-full">
//                 <h3 className="text-lg font-semibold">OTP Verification</h3>
//                 <form onSubmit={handleOtpSubmit} className="space-y-4">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">Enter OTP</label>
//                     <input
//                       type="text"
//                       name="otp"
//                       value={formData.otp}
//                       onChange={handleChange}
//                       className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 transition-all"
//                       required
//                     />
//                   </div>
//                   <button type="submit" className="w-full py-2 px-4 bg-teal-500 text-white font-semibold rounded-md hover:bg-teal-600 transition-all ease-in-out duration-300">
//                     {isLoading ? 'Verifying...' : 'Verify OTP'}
//                   </button>
//                 </form>
//                 {canResend && (
//                   <button onClick={handleResendOtp} className="mt-2 text-teal-500 hover:underline flex items-center">
//                     <FiRefreshCcw className="mr-2" /> Resend OTP
//                   </button>
//                 )}
//                 <p className="mt-2 text-sm text-gray-500">{resendTimer} seconds remaining</p>
//               </motion.div>
//             )}

//             <button onClick={() => setFormType(formType === 'login' ? 'signup' : 'login')} className="mt-4 text-teal-500 hover:underline">
//               {formType === 'login' ? 'Create an account' : 'Already have an account? Log in'}
//             </button>
//           </motion.div>
//         </motion.div>
//       )}
//     </div>
//   );
// }





// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import axios from 'axios';
// import { FiRefreshCcw, FiX } from 'react-icons/fi'; // Import close icon

// const API_REGISTER_URL = "https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1/register";
// const API_LOGIN_URL = "https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1/login";
// const API_VERIFY_OTP_URL = "https://y7ltnmncrd.execute-api-ap-south-1.amazonaws.com/Test/api/v1/verify-otp";
// const API_RESEND_OTP_URL = "https://y7ltnmncrd.execute-api-ap-south-1.amazonaws.com/Test/api/v1/resend-otp";

// export default function AuthForms() {
//   const [formType, setFormType] = useState('login');
//   const [showForm, setShowForm] = useState(false);
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     mailId: '',
//     password: '',
//     confirmPassword: '',
//     otp: ''
//   });
//   const [resendTimer, setResendTimer] = useState(30);
//   const [canResend, setCanResend] = useState(false);
//   const [isOtpVerified, setIsOtpVerified] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     if (resendTimer > 0) {
//       const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
//       return () => clearTimeout(timer);
//     } else {
//       setCanResend(true);
//     }
//   }, [resendTimer]);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     try {
//       const url = formType === 'login' ? API_LOGIN_URL : API_REGISTER_URL;
//       const payload = formType === 'login' 
//         ? { mailId: formData.mailId, password: formData.password }
//         : formData;

//       const response = await axios.post(url, payload);
//       console.log('Response:', response.data);
//       alert(`${formType === 'login' ? 'Login' : 'Registration'} successful!`);

//       if (formType === 'login') {
//         window.location.href = '/dashboard';
//       } else {
//         setIsOtpVerified(false);
//       }
//     } catch (error) {
//       console.error('Error:', error.response ? error.response.data : error);
//       alert(`Failed to ${formType === 'login' ? 'login' : 'register'}.`);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleOtpSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     try {
//       const response = await axios.post(API_VERIFY_OTP_URL, { otp: formData.otp });
//       console.log('OTP Verification Response:', response.data);
//       setIsOtpVerified(true);
//       alert('OTP verification successful! Your account is now active.');
//       window.location.href = '/dashboard'; 
//     } catch (error) {
//       console.error('Error:', error.response ? error.response.data : error);
//       alert('OTP verification failed.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleResendOtp = async () => {
//     if (!canResend) return;
//     setResendTimer(30);
//     setCanResend(false);

//     try {
//       const response = await axios.post(API_RESEND_OTP_URL, { mailId: formData.mailId });
//       console.log('Resend OTP Response:', response.data);
//       alert('OTP has been resent!');
//     } catch (error) {
//       console.error('Error:', error.response ? error.response.data : error);
//       alert('Failed to resend OTP.');
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center bg-gray-100">
//       {/* Trigger Button */}
//       <button
//         onClick={() => setShowForm(true)}
//         className="py-2 px-4 bg-teal-500 text-white font-semibold rounded-md hover:bg-teal-600 transition-all ease-in-out duration-300"
//       >
//         Sign In
//       </button>

//       {/* Popup Form */}
//       {showForm && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.8 }}
//             transition={{ duration: 0.3 }}
//             className="bg-white p-8 rounded-lg shadow-md w-full max-w-md relative"
//           >
//             {/* Close Button */}
//             <button
//               onClick={() => setShowForm(false)}
//               className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
//             >
//               <FiX size={24} />
//             </button>

//             <h2 className="text-2xl font-bold mb-6">{formType === 'login' ? 'Login' : 'Sign Up'}</h2>
//             <form onSubmit={handleSubmit} className="space-y-4">
//               {formType === 'signup' && (
//                 <>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">First Name</label>
//                     <input
//                       type="text"
//                       name="firstName"
//                       value={formData.firstName}
//                       onChange={handleChange}
//                       className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 transition-all"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">Last Name</label>
//                     <input
//                       type="text"
//                       name="lastName"
//                       value={formData.lastName}
//                       onChange={handleChange}
//                       className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 transition-all"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
//                     <input
//                       type="password"
//                       name="confirmPassword"
//                       value={formData.confirmPassword}
//                       onChange={handleChange}
//                       className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 transition-all"
//                       required
//                     />
//                   </div>
//                 </>
//               )}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Email</label>
//                 <input
//                   type="email"
//                   name="mailId"
//                   value={formData.mailId}
//                   onChange={handleChange}
//                   className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 transition-all"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Password</label>
//                 <input
//                   type="password"
//                   name="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 transition-all"
//                   required
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="w-full py-2 px-4 bg-teal-500 text-white font-semibold rounded-md hover:bg-teal-600 transition-all ease-in-out duration-300"
//               >
//                 {isLoading ? 'Loading...' : formType === 'login' ? 'Login' : 'Sign Up'}
//               </button>
//             </form>

//             {/* OTP Verification Form */}
//             {formType === 'signup' && !isOtpVerified && (
//               <motion.div className="mt-6 bg-white p-4 rounded-lg shadow-md w-full">
//                 <h3 className="text-lg font-semibold">OTP Verification</h3>
//                 <form onSubmit={handleOtpSubmit} className="space-y-4">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">Enter OTP</label>
//                     <input
//                       type="text"
//                       name="otp"
//                       value={formData.otp}
//                       onChange={handleChange}
//                       className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 transition-all"
//                       required
//                     />
//                   </div>
//                   <button
//                     type="submit"
//                     className="w-full py-2 px-4 bg-teal-500 text-white font-semibold rounded-md hover:bg-teal-600 transition-all ease-in-out duration-300"
//                   >
//                     {isLoading ? 'Verifying...' : 'Verify OTP'}
//                   </button>
//                 </form>
//                 {canResend && (
//                   <button
//                     onClick={handleResendOtp}
//                     className="mt-2 text-teal-500 hover:underline flex items-center"
//                   >
//                     <FiRefreshCcw className="mr-2" /> Resend OTP
//                   </button>
//                 )}
//                 <p className="mt-2 text-sm text-gray-500">{resendTimer} seconds remaining</p>
//               </motion.div>
//             )}

//             {/* Toggle between Login and Sign Up */}
//             <button
//               onClick={() => setFormType(formType === 'login' ? 'signup' : 'login')}
//               className="mt-4 text-teal-500 hover:underline"
//             >
//               {formType === 'login' ? 'Create an account' : 'Already have an account? Log in'}
//             </button>
//           </motion.div>
//         </div>
//       )}
//     </div>
//   );
// }













// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import axios from 'axios';
// import { FiRefreshCcw, FiX, FiMail, FiLock, FiUser, FiCheck } from 'react-icons/fi';

// const API_REGISTER_URL = "https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1/register";
// const API_LOGIN_URL = "https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1/login";
// const API_VERIFY_OTP_URL = "https://y7ltnmncrd.execute-api-ap-south-1.amazonaws.com/Test/api/v1/verify-otp";
// const API_RESEND_OTP_URL = "https://y7ltnmncrd.execute-api-ap-south-1.amazonaws.com/Test/api/v1/resend-otp";
  

// const InputField = ({ icon: Icon, ...props }) => (
//   <div className="relative">
//     <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//     <input
//       {...props}
//       className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
//     />
//   </div>
// );

// export default function AuthForms() {
//   const [formType, setFormType] = useState('login');
//   const [showForm, setShowForm] = useState(false);
//   const [formStep, setFormStep] = useState('initial'); 
//   const [formData, setFormData] = useState({
 

    
//         firstName: "",
//         lastName: "",
//         mailId: "",
//         password: "",
//         confirmPassword: ""

//   });
//   const [resendTimer, setResendTimer] = useState(30);
//   const [canResend, setCanResend] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [otpValues, setOtpValues] = useState(['', '', '', '', '', '']);

//   useEffect(() => {
//     if (resendTimer > 0) {
//       const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
//       return () => clearTimeout(timer);
//     } else {
//       setCanResend(true);
//     }
//   }, [resendTimer]);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleOtpChange = (index, value) => {
//     if (value.length <= 1 && /^\d*$/.test(value)) {
//       const newOtpValues = [...otpValues];
//       newOtpValues[index] = value;
//       setOtpValues(newOtpValues);
      
//       // Auto-focus next input
//       if (value && index < 5) {
//         const nextInput = document.querySelector(`input[name=otp-${index + 1}]`);
//         if (nextInput) nextInput.focus();
//       }
      
//       // Update the main OTP in formData
//       setFormData({
//         ...formData,
//         otp: newOtpValues.join('')
//       });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     try {
//       const response = await axios.post(API_URLS[formType], formType === 'login' 
//         ? { mailId: formData.mailId, password: formData.password }
//         : formData
//       );
      
//       if (formType === 'login') {
//         window.location.href = '/dashboard';
//       } else {
//         setFormStep('otp');
//       }
//     } catch (error) {
//       alert(`Failed to ${formType}. ${error.response?.data?.message || 'Please try again.'}`);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleOtpSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     try {
//       await axios.post(API_URLS.verifyOtp, {
//         mailId: formData.mailId,
//         otp: formData.otp
//       });
//       alert('Account verified successfully!');
//       window.location.href = '/dashboard';
//     } catch (error) {
//       alert('OTP verification failed. Please try again.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleResendOtp = async () => {
//     if (!canResend) return;
//     setResendTimer(30);
//     setCanResend(false);
//     try {
//       await axios.get(`${API_URLS.resendOtp}?mailId=${formData.mailId}`);
//       alert('New OTP has been sent to your email.');
//     } catch (error) {
//       alert('Failed to resend OTP. Please try again.');
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
//       <button
//         onClick={() => setShowForm(true)}
//         className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg shadow-lg hover:bg-teal-700 transition-all duration-300 transform hover:scale-105"
//       >
//         Get Started
//       </button>

//       <AnimatePresence>
//         {showForm && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
//           >
//             <motion.div
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.9, opacity: 0 }}
//               className="bg-white rounded-xl shadow-2xl w-full max-w-md p-8 relative"
//             >
//               <button
//                 onClick={() => setShowForm(false)}
//                 className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
//               >
//                 <FiX size={24} />
//               </button>

//               {formStep === 'initial' ? (
//                 <>
//                   <h2 className="text-3xl font-bold mb-6 text-gray-800">
//                     {formType === 'login' ? 'Welcome Back!' : 'Create Account'}
//                   </h2>
                  
//                   <form onSubmit={handleSubmit} className="space-y-4">
//                     {formType === 'signup' && (
//                       <div className="grid grid-cols-2 gap-4">
//                         <div>
//                           <InputField
//                             icon={FiUser}
//                             type="text"
//                             name="firstName"
//                             placeholder="First Name"
//                             value={formData.firstName}
//                             onChange={handleChange}
//                             required
//                           />
//                         </div>
//                         <div>
//                           <InputField
//                             icon={FiUser}
//                             type="text"
//                             name="lastName"
//                             placeholder="Last Name"
//                             value={formData.lastName}
//                             onChange={handleChange}
//                             required
//                           />
//                         </div>
//                       </div>
//                     )}
                    
//                     <InputField
//                       icon={FiMail}
//                       type="email"
//                       name="mailId"
//                       placeholder="Email Address"
//                       value={formData.mailId}
//                       onChange={handleChange}
//                       required
//                     />
                    
//                     <InputField
//                       icon={FiLock}
//                       type="password"
//                       name="password"
//                       placeholder="Password"
//                       value={formData.password}
//                       onChange={handleChange}
//                       required
//                     />
                    
//                     {formType === 'signup' && (
//                       <InputField
//                         icon={FiLock}
//                         type="password"
//                         name="confirmPassword"
//                         placeholder="Confirm Password"
//                         value={formData.confirmPassword}
//                         onChange={handleChange}
//                         required
//                       />
//                     )}

//                     <button
//                       type="submit"
//                       disabled={isLoading}
//                       className="w-full py-3 bg-teal-600 text-white font-semibold rounded-lg shadow-md hover:bg-teal-700 transition-all duration-300 disabled:opacity-50"
//                     >
//                       {isLoading ? 'Please wait...' : formType === 'login' ? 'Sign In' : 'Create Account'}
//                     </button>
//                   </form>

//                   <p className="mt-6 text-center text-gray-600">
//                     {formType === 'login' ? "Don't have an account? " : "Already have an account? "}
//                     <button
//                       onClick={() => setFormType(formType === 'login' ? 'signup' : 'login')}
//                       className="text-teal-600 font-semibold hover:underline"
//                     >
//                       {formType === 'login' ? 'Sign Up' : 'Sign In'}
//                     </button>
//                   </p>
//                 </>
//               ) : (
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   className="text-center"
//                 >
//                   <FiMail className="mx-auto text-teal-600 mb-4" size={48} />
//                   <h2 className="text-2xl font-bold mb-2">Verify Your Email</h2>
//                   <p className="text-gray-600 mb-6">
//                     We've sent a verification code to {formData.mailId}
//                   </p>

//                   <form onSubmit={handleOtpSubmit} className="space-y-6">
//                     <div className="flex justify-center space-x-3">
//                       {otpValues.map((value, index) => (
//                         <input
//                           key={index}
//                           type="text"
//                           name={`otp-${index}`}
//                           value={value}
//                           onChange={(e) => handleOtpChange(index, e.target.value)}
//                           className="w-12 h-12 text-center text-xl font-semibold border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
//                           maxLength={1}
//                         />
//                       ))}
//                     </div>

//                     <button
//                       type="submit"
//                       disabled={isLoading || otpValues.join('').length !== 6}
//                       className="w-full py-3 bg-teal-600 text-white font-semibold rounded-lg shadow-md hover:bg-teal-700 transition-all duration-300 disabled:opacity-50"
//                     >
//                       {isLoading ? 'Verifying...' : 'Verify Email'}
//                     </button>
//                   </form>

//                   <div className="mt-6 text-center">
//                     <p className="text-gray-600 mb-2">
//                       Didn't receive the code? {canResend ? (
//                         <button
//                           onClick={handleResendOtp}
//                           className="text-teal-600 font-semibold hover:underline flex items-center justify-center mx-auto"
//                         >
//                           <FiRefreshCcw className="mr-2" /> Resend Code
//                         </button>
//                       ) : (
//                         <span>Resend in {resendTimer}s</span>
//                       )}
//                     </p>
//                   </div>
//                 </motion.div>
//               )}
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }



// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import axios from 'axios';
// import { FiRefreshCcw, FiX, FiMail, FiLock, FiUser, FiCheck } from 'react-icons/fi';

// const API_REGISTER_URL = "https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1/register";
// const API_LOGIN_URL = "https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1/login";
// const API_VERIFY_OTP_URL = "https://y7ltnmncrd.execute-api-ap-south-1.amazonaws.com/Test/api/v1/verify-otp";
// const API_RESEND_OTP_URL = "https://y7ltnmncrd.execute-api-ap-south-1.amazonaws.com/Test/api/v1/resend-otp";

// const InputField = ({ icon: Icon, ...props }) => (
//   <div className="relative">
//     <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//     <input
//       {...props}
//       className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
//     />
//   </div>
// );

// export default function AuthForms() {
//   const [formType, setFormType] = useState('login');
//   const [showForm, setShowForm] = useState(false);
//   const [formStep, setFormStep] = useState('initial'); 
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     mailId: "",
//     password: "",
//     confirmPassword: ""
//   });
//   const [resendTimer, setResendTimer] = useState(30);
//   const [canResend, setCanResend] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [otpValues, setOtpValues] = useState(['', '', '', '', '', '']);

//   useEffect(() => {
//     if (resendTimer > 0) {
//       const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
//       return () => clearTimeout(timer);
//     } else {
//       setCanResend(true);
//     }
//   }, [resendTimer]);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleOtpChange = (index, value) => {
//     if (value.length <= 1 && /^\d*$/.test(value)) {
//       const newOtpValues = [...otpValues];
//       newOtpValues[index] = value;
//       setOtpValues(newOtpValues);
      
//       // Auto-focus next input
//       if (value && index < 5) {
//         const nextInput = document.querySelector(`input[name=otp-${index + 1}]`);
//         if (nextInput) nextInput.focus();
//       }
      
//       // Update the main OTP in formData
//       setFormData({
//         ...formData,
//         otp: newOtpValues.join('')
//       });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     try {
//       const apiUrl = formType === 'login' ? API_LOGIN_URL : API_REGISTER_URL;
//       const requestData = formType === 'login'
//         ? { mailId: formData.mailId, password: formData.password }
//         : { firstName: formData.firstName, lastName: formData.lastName, mailId: formData.mailId, password: formData.password, confirmPassword: formData.confirmPassword };

//       const response = await axios.post(apiUrl, requestData);

//       if (formType === 'login') {
//         window.location.href = '/dashboard';
//       } else {
//         setFormStep('otp');
//       }
//     } catch (error) {
//       alert(`Failed to ${formType}. ${error.response?.data?.message || 'Please try again.'}`);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleOtpSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     try {
//       await axios.post(API_VERIFY_OTP_URL, {
//         mailId: formData.mailId,
//         otp: formData.otp
//       });
//       alert('Account verified successfully!');
//       window.location.href = '/dashboard';
//     } catch (error) {
//       alert('OTP verification failed. Please try again.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleResendOtp = async () => {
//     if (!canResend) return;
//     setResendTimer(30);
//     setCanResend(false);
//     try {
//       await axios.get(`${API_RESEND_OTP_URL}?mailId=${formData.mailId}`);
//       alert('New OTP has been sent to your email.');
//     } catch (error) {
//       alert('Failed to resend OTP. Please try again.');
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center ">
//       <button
//         onClick={() => setShowForm(true)}
//         className="px-6 py-3 bg-teal-900 text-white font-semibold rounded-full shadow-lg hover:bg-teal-800 transition-all duration-300 transform hover:scale-105"
//       >
//         Get Started
//       </button>

//       <AnimatePresence>
//         {showForm && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
//           >
//             <motion.div
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.9, opacity: 0 }}
//               className="bg-white rounded-xl shadow-2xl w-full max-w-md p-8 relative"
//             >
//               <button
//                 onClick={() => setShowForm(false)}
//                 className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
//               >
//                 <FiX size={24} />
//               </button>

//               {formStep === 'initial' ? (
//                 <>
//                   <h2 className="text-3xl font-bold mb-6 text-gray-800">
//                     {formType === 'login' ? 'Welcome Back!' : 'Create Account'}
//                   </h2>
                  
//                   <form onSubmit={handleSubmit} className="space-y-4">
//                     {formType === 'signup' && (
//                       <div className="grid grid-cols-2 gap-4">
//                         <div>
//                           <InputField
//                             icon={FiUser}
//                             type="text"
//                             name="firstName"
//                             placeholder="First Name"
//                             value={formData.firstName}
//                             onChange={handleChange}
//                             required
//                           />
//                         </div>
//                         <div>
//                           <InputField
//                             icon={FiUser}
//                             type="text"
//                             name="lastName"
//                             placeholder="Last Name"
//                             value={formData.lastName}
//                             onChange={handleChange}
//                             required
//                           />
//                         </div>
//                       </div>
//                     )}
                    
//                     <InputField
//                       icon={FiMail}
//                       type="email"
//                       name="mailId"
//                       placeholder="Email Address"
//                       value={formData.mailId}
//                       onChange={handleChange}
//                       required
//                     />
                    
//                     <InputField
//                       icon={FiLock}
//                       type="password"
//                       name="password"
//                       placeholder="Password"
//                       value={formData.password}
//                       onChange={handleChange}
//                       required
//                     />
                    
//                     {formType === 'signup' && (
//                       <InputField
//                         icon={FiLock}
//                         type="password"
//                         name="confirmPassword"
//                         placeholder="Confirm Password"
//                         value={formData.confirmPassword}
//                         onChange={handleChange}
//                         required
//                       />
//                     )}

//                     <button
//                       type="submit"
//                       disabled={isLoading}
//                       className="w-full py-3 bg-teal-900 rounded-full text-white font-semibold rounded-lg shadow-md hover:bg-teal-800 transition-all duration-300 disabled:opacity-50"
//                     >
//                       {isLoading ? 'Please wait...' : formType === 'login' ? 'Sign In' : 'Create Account'}
//                     </button>
//                   </form>

//                   <p className="mt-6 text-center text-gray-600">
//                     {formType === 'login' ? "Don't have an account? " : "Already have an account? "}
//                     <button
//                       onClick={() => setFormType(formType === 'login' ? 'signup' : 'login')}
//                       className="text-teal-600 font-semibold hover:underline"
//                     >
//                       {formType === 'login' ? 'Sign Up' : 'Sign In'}
//                     </button>
//                   </p>
//                 </>
//               ) : (
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   className="text-center"
//                 >
//                   <FiMail className="mx-auto text-teal-600 mb-4" size={48} />
//                   <h2 className="text-2xl font-bold mb-2">Verify Your Email</h2>
//                   <p className="text-gray-600 mb-6">
//                     We've sent a verification code to {formData.mailId}
//                   </p>

//                   <form onSubmit={handleOtpSubmit} className="space-y-6">
//                     <div className="flex justify-center space-x-3">
//                       {otpValues.map((value, index) => (
//                         <input
//                           key={index}
//                           type="text"
//                           name={`otp-${index}`}
//                           value={value}
//                           onChange={(e) => handleOtpChange(index, e.target.value)}
//                           className="w-12 h-12 text-center text-xl font-semibold border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
//                           maxLength={1}
//                         />
//                       ))}
//                     </div>

//                     <button
//                       type="submit"
//                       disabled={isLoading || otpValues.join('').length !== 6}
//                       className="w-full py-3 bg-teal-600 text-white font-semibold rounded-lg shadow-md hover:bg-teal-700 transition-all duration-300 disabled:opacity-50"
//                     >
//                       {isLoading ? 'Verifying...' : 'Verify Email'}
//                     </button>
//                   </form>

//                   <div className="mt-6 text-center">
//                     <p className="text-gray-600 mb-2">
//                       Didn't receive the code? {canResend ? (
//                         <button
//                           onClick={handleResendOtp}
//                           className="text-teal-600 font-semibold hover:underline flex items-center justify-center mx-auto"
//                         >
//                           <FiRefreshCcw className="mr-1" />
//                           Resend OTP
//                         </button>
//                       ) : (
//                         <span>{`Resend OTP in ${resendTimer}s`}</span>
//                       )}
//                     </p>
//                   </div>
//                 </motion.div>
//               )}
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }



// ...........................................exacttttt codeeeee.......................................//

// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import axios from 'axios';
// import { FiRefreshCcw, FiX, FiMail, FiLock, FiUser, FiCheck } from 'react-icons/fi';

// const API_REGISTER_URL = "https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1/register";
// const API_LOGIN_URL = "https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1/login";
// const API_VERIFY_OTP_URL = "https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1/verify-otp";
// const API_RESEND_OTP_URL = "https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1/resend-otp";

// const InputField = ({ icon: Icon, ...props }) => (
//   <div className="relative">
//     <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//     <input
//       {...props}
//       className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
//     />
//   </div>
// );

// export default function AuthForms() {
//   const [formType, setFormType] = useState('login');
//   const [showForm, setShowForm] = useState(false);
//   const [formStep, setFormStep] = useState('initial'); 
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     mailId: "",
//     password: "",
//     confirmPassword: ""
//   });
//   const [resendTimer, setResendTimer] = useState(30);
//   const [canResend, setCanResend] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [otpValues, setOtpValues] = useState(['', '', '', '', '', '']);
//   const [isOtpVerification, setIsOtpVerification] = useState(false); // New state to manage OTP step

//   useEffect(() => {
//     if (resendTimer > 0) {
//       const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
//       return () => clearTimeout(timer);
//     } else {
//       setCanResend(true);
//     }
//   }, [resendTimer]);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleOtpChange = (index, value) => {
//     if (value.length <= 1 && /^\d*$/.test(value)) {
//       const newOtpValues = [...otpValues];
//       newOtpValues[index] = value;
//       setOtpValues(newOtpValues);
      
//       // Auto-focus next input
//       if (value && index < 5) {
//         const nextInput = document.querySelector(`input[name=otp-${index + 1}]`);
//         if (nextInput) nextInput.focus();
//       }
      
//       // Update the main OTP in formData
//       setFormData({
//         ...formData,
//         otp: newOtpValues.join(''),
//       });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     try {
//       const apiUrl = formType === 'login' ? API_LOGIN_URL : API_REGISTER_URL;
//       const requestData = formType === 'login'
//         ? { mailId: formData.mailId, password: formData.password }
//         : { firstName: formData.firstName, lastName: formData.lastName, mailId: formData.mailId, password: formData.password, confirmPassword: formData.confirmPassword };

//       const response = await axios.post(apiUrl, requestData);

//       if (formType === 'login') {
//         setIsOtpVerification(true);  // Trigger OTP verification after login
//       } else {
//         setFormStep('otp');
//       }
//     } catch (error) {
//       alert(`Failed to ${formType}. ${error.response?.data?.message || 'Please try again.'}`);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleOtpSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     try {
//       await axios.post(API_VERIFY_OTP_URL, {
//         mailId: formData.mailId,
//         otp: formData.otp
//       });
//       alert('Account verified successfully!');
//       window.location.href = '/dashboard';
//     } catch (error) {
//       alert('OTP verification failed. Please try again.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleResendOtp = async () => {
//     if (!canResend) return;
//     setResendTimer(30);
//     setCanResend(false);
//     try {
//       await axios.get(`${API_RESEND_OTP_URL}?mailId=${formData.mailId}`);
//       alert('New OTP has been sent to your email.');
//     } catch (error) {
//       alert('Failed to resend OTP. Please try again.');
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       <button
//         onClick={() => setShowForm(true)}
//         className="px-6 py-3 bg-teal-900 text-white font-semibold rounded-full shadow-lg hover:bg-teal-800 transition-all duration-300 transform hover:scale-105"
//       >
//         Get Started
//       </button>

//       <AnimatePresence>
//         {showForm && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
//           >
//             <motion.div
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.9, opacity: 0 }}
//               className="bg-white rounded-xl shadow-2xl w-full max-w-md p-8 relative"
//             >
//               <button
//                 onClick={() => setShowForm(false)}
//                 className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
//               >
//                 <FiX size={24} />
//               </button>

//               {isOtpVerification ? (
//                 // OTP Verification Step
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   className="text-center"
//                 >
//                   <FiMail className="mx-auto text-teal-600 mb-4" size={48} />
//                   <h2 className="text-2xl font-bold mb-2">Verify Your Email</h2>
//                   <p className="text-gray-600 mb-6">
//                     We've sent a verification code to {formData.mailId}
//                   </p>

//                   <form onSubmit={handleOtpSubmit} className="space-y-6">
//                     <div className="flex justify-center space-x-3">
//                       {otpValues.map((value, index) => (
//                         <input
//                           key={index}
//                           type="text"
//                           name={`otp-${index}`}
//                           value={value}
//                           onChange={(e) => handleOtpChange(index, e.target.value)}
//                           className="w-12 h-12 text-center text-xl font-semibold border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
//                           maxLength={1}
//                         />
//                       ))}
//                     </div>

//                     <button
//                       type="submit"
//                       disabled={isLoading || otpValues.join('').length !== 6}
//                       className="w-full py-3 bg-teal-600 text-white font-semibold rounded-lg shadow-md hover:bg-teal-700 transition-all duration-300 disabled:opacity-50"
//                     >
//                       {isLoading ? 'Verifying...' : 'Verify Email'}
//                     </button>
//                   </form>

//                   <div className="mt-6 text-center">
//                     <p className="text-gray-600 mb-2">
//                       Didn't receive the code? {canResend ? (
//                         <button
//                           onClick={handleResendOtp}
//                           className="text-teal-600 font-semibold hover:underline flex items-center justify-center mx-auto"
//                         >
//                           <FiRefreshCcw className="mr-1" />
//                           Resend OTP
//                         </button>
//                       ) : (
//                         <span>{`Resend OTP in ${resendTimer}s`}</span>
//                       )}
//                     </p>
//                   </div>
//                 </motion.div>
//               ) : (
//                 // Initial Form
//                 <>
//                   <h2 className="text-3xl font-bold mb-6 text-gray-800">
//                     {formType === 'login' ? 'Welcome Back!' : 'Create Account'}
//                   </h2>

//                   <form onSubmit={handleSubmit} className="space-y-4">
//                     {formType === 'signup' && (
//                       <div className="grid grid-cols-2 gap-4">
//                         <div>
//                           <InputField
//                             icon={FiUser}
//                             type="text"
//                             name="firstName"
//                             placeholder="First Name"
//                             value={formData.firstName}
//                             onChange={handleChange}
//                             required
//                           />
//                         </div>
//                         <div>
//                           <InputField
//                             icon={FiUser}
//                             type="text"
//                             name="lastName"
//                             placeholder="Last Name"
//                             value={formData.lastName}
//                             onChange={handleChange}
//                             required
//                           />
//                         </div>
//                       </div>
//                     )}

//                     <InputField
//                       icon={FiMail}
//                       type="email"
//                       name="mailId"
//                       placeholder="Email Address"
//                       value={formData.mailId}
//                       onChange={handleChange}
//                       required
//                     />

//                     <InputField
//                       icon={FiLock}
//                       type="password"
//                       name="password"
//                       placeholder="Password"
//                       value={formData.password}
//                       onChange={handleChange}
//                       required
//                     />

//                     {formType === 'signup' && (
//                       <InputField
//                         icon={FiLock}
//                         type="password"
//                         name="confirmPassword"
//                         placeholder="Confirm Password"
//                         value={formData.confirmPassword}
//                         onChange={handleChange}
//                         required
//                       />
//                     )}

//                     <button
//                       type="submit"
//                       disabled={isLoading}
//                       className="w-full py-3 bg-teal-600 text-white font-semibold rounded-lg shadow-md hover:bg-teal-700 transition-all duration-300 disabled:opacity-50"
//                     >
//                       {isLoading ? 'Submitting...' : formType === 'login' ? 'Sign In' : 'Sign Up'}
//                     </button>
//                   </form>

//                   <div className="mt-6 text-center">
//                     <p className="text-gray-600 mb-2">
//                       {formType === 'login' ? 'New user?' : 'Already have an account?'}{" "}
//                       <button
//                         onClick={() => setFormType(formType === 'login' ? 'signup' : 'login')}
//                         className="text-teal-600 font-semibold hover:underline"
//                       >
//                         {formType === 'login' ? 'Sign up' : 'Sign in'}
//                       </button>
//                     </p>
//                   </div>
//                 </>
//               )}
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

// '''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

// "use client"

// import { useState, useEffect } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import axios from "axios"
// import { FiRefreshCcw, FiX, FiMail, FiLock, FiUser, FiCheck, FiEye, FiEyeOff, FiArrowRight } from "react-icons/fi"

// const API_REGISTER_URL = "https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1/register"
// const API_LOGIN_URL = "https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1/login"
// const API_VERIFY_OTP_URL = "https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1/verify-otp"
// const API_RESEND_OTP_URL = "https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1/resend-otp"

// const InputField = ({ icon: Icon, type, ...props }) => {
//   const [showPassword, setShowPassword] = useState(false)

//   return (
//     <motion.div
//       className="relative"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.3 }}
//     >
//       <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//       <input
//         {...props}
//         type={type === "password" && showPassword ? "text" : type}
//         className="w-full pl-10 pr-10 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
//       />
//       {type === "password" && (
//         <button
//           type="button"
//           onClick={() => setShowPassword(!showPassword)}
//           className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-teal-500 transition-colors"
//         >
//           {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
//         </button>
//       )}
//     </motion.div>
//   )
// }

// export default function AuthForms() {
//   const [formType, setFormType] = useState("login")
//   const [showForm, setShowForm] = useState(false)
//   const [formStep, setFormStep] = useState("initial")
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     mailId: "",
//     password: "",
//     confirmPassword: "",
//   })
//   const [resendTimer, setResendTimer] = useState(30)
//   const [canResend, setCanResend] = useState(false)
//   const [isLoading, setIsLoading] = useState(false)
//   const [otpValues, setOtpValues] = useState(["", "", "", "", "", ""])
//   const [isOtpVerification, setIsOtpVerification] = useState(false)
//   const [isAuthenticated, setIsAuthenticated] = useState(false)
//   const [showSuccessAnimation, setShowSuccessAnimation] = useState(false)

//   useEffect(() => {
//     if (resendTimer > 0) {
//       const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000)
//       return () => clearTimeout(timer)
//     } else {
//       setCanResend(true)
//     }
//   }, [resendTimer])

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     })
//   }

//   const handleOtpChange = (index, value) => {
//     if (value.length <= 1 && /^\d*$/.test(value)) {
//       const newOtpValues = [...otpValues]
//       newOtpValues[index] = value
//       setOtpValues(newOtpValues)

//       if (value && index < 5) {
//         const nextInput = document.querySelector(`input[name=otp-${index + 1}]`)
//         if (nextInput) nextInput.focus()
//       }

//       setFormData({
//         ...formData,
//         otp: newOtpValues.join(""),
//       })
//     }
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     setIsLoading(true)
//     try {
//       const apiUrl = formType === "login" ? API_LOGIN_URL : API_REGISTER_URL
//       const requestData =
//         formType === "login"
//           ? { mailId: formData.mailId, password: formData.password }
//           : {
//               firstName: formData.firstName,
//               lastName: formData.lastName,
//               mailId: formData.mailId,
//               password: formData.password,
//               confirmPassword: formData.confirmPassword,
//             }

//       const response = await axios.post(apiUrl, requestData)

//       if (formType === "login") {
//         setIsOtpVerification(true)
//       } else {
//         setFormStep("otp")
//       }
//     } catch (error) {
//       alert(`Failed to ${formType}. ${error.response?.data?.message || "Please try again."}`)
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   const handleOtpSubmit = async (e) => {
//     e.preventDefault()
//     setIsLoading(true)
//     try {
//       await axios.post(API_VERIFY_OTP_URL, {
//         mailId: formData.mailId,
//         otp: formData.otp,
//       })
//       setIsAuthenticated(true)
//       setShowSuccessAnimation(true)
//       setTimeout(() => {
//         setShowSuccessAnimation(false)
//         setShowForm(false)
//       }, 2000)
//     } catch (error) {
//       alert("OTP verification failed. Please try again.")
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   const handleResendOtp = async () => {
//     if (!canResend) return
//     setResendTimer(30)
//     setCanResend(false)
//     try {
//       await axios.get(`${API_RESEND_OTP_URL}?mailId=${formData.mailId}`)
//       alert("New OTP has been sent to your email.")
//     } catch (error) {
//       alert("Failed to resend OTP. Please try again.")
//     }
//   }

//   const handleSignOut = () => {
//     setIsAuthenticated(false)
//     setFormData({
//       firstName: "",
//       lastName: "",
//       mailId: "",
//       password: "",
//       confirmPassword: "",
//     })
//     setShowSuccessAnimation(true)
//     setTimeout(() => {
//       setShowSuccessAnimation(false)
//     }, 2000)
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-400 to-teal-500">
//       {!isAuthenticated ? (
//         <motion.button
//           onClick={() => setShowForm(true)}
//           className="px-8 py-4 bg-white text-teal-600 font-bold rounded-full shadow-lg hover:bg-teal-50 transition-all duration-300 transform hover:scale-105"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           Get Started
//         </motion.button>
//       ) : (
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0, scale: 0.9 }}
//           className="bg-white p-8 rounded-2xl shadow-2xl text-center"
//         >
//           <h2 className="text-3xl font-bold mb-4 text-teal-600">
//             Welcome, {formData.firstName} {formData.lastName}!
//           </h2>
//           <p className="text-gray-600 mb-6">You're successfully logged in.</p>
//           <motion.button
//             onClick={handleSignOut}
//             className="px-6 py-3 bg-red-500 text-white font-semibold rounded-full shadow-lg hover:bg-red-600 transition-all duration-300"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Sign Out
//           </motion.button>
//         </motion.div>
//       )}

//       <AnimatePresence>
//         {showSuccessAnimation && (
//           <motion.div
//             initial={{ scale: 0, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             exit={{ scale: 0, opacity: 0 }}
//             className="fixed inset-0 flex items-center justify-center z-50"
//           >
//             <motion.div
//               className="bg-white rounded-full p-4 shadow-lg"
//               animate={{ rotate: 360 }}
//               transition={{ duration: 0.5 }}
//             >
//               <FiCheck className="text-green-500" size={48} />
//             </motion.div>
//           </motion.div>
//         )}

//         {showForm && !isAuthenticated && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
//           >
//             <motion.div
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.9, opacity: 0 }}
//               className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 relative"
//             >
//               <motion.button
//                 onClick={() => setShowForm(false)}
//                 className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//               >
//                 <FiX size={24} />
//               </motion.button>

//               {isOtpVerification ? (
//                 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
//                   <FiMail className="mx-auto text-teal-600 mb-4" size={48} />
//                   <h2 className="text-2xl font-bold mb-2">Verify Your Email</h2>
//                   <p className="text-gray-600 mb-6">We've sent a verification code to {formData.mailId}</p>

//                   <form onSubmit={handleOtpSubmit} className="space-y-6">
//                     <div className="flex justify-center space-x-3">
//                       {otpValues.map((value, index) => (
//                         <motion.input
//                           key={index}
//                           type="text"
//                           name={`otp-${index}`}
//                           value={value}
//                           onChange={(e) => handleOtpChange(index, e.target.value)}
//                           className="w-12 h-12 text-center text-xl font-semibold border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
//                           maxLength={1}
//                           initial={{ opacity: 0, y: 20 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           transition={{ delay: index * 0.1 }}
//                         />
//                       ))}
//                     </div>

//                     <motion.button
//                       type="submit"
//                       disabled={isLoading || otpValues.join("").length !== 6}
//                       className="w-full py-3 bg-teal-600 text-white font-semibold rounded-lg shadow-md hover:bg-teal-700 transition-all duration-300 disabled:opacity-50"
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                     >
//                       {isLoading ? "Verifying..." : "Verify Email"}
//                     </motion.button>
//                   </form>

//                   <div className="mt-6 text-center">
//                     <p className="text-gray-600 mb-2">
//                       Didn't receive the code?{" "}
//                       {canResend ? (
//                         <motion.button
//                           onClick={handleResendOtp}
//                           className="text-teal-600 font-semibold hover:underline flex items-center justify-center mx-auto"
//                           whileHover={{ scale: 1.05 }}
//                           whileTap={{ scale: 0.95 }}
//                         >
//                           <FiRefreshCcw className="mr-1" />
//                           Resend OTP
//                         </motion.button>
//                       ) : (
//                         <span>{`Resend OTP in ${resendTimer}s`}</span>
//                       )}
//                     </p>
//                   </div>
//                 </motion.div>
//               ) : (
//                 <>
//                   <motion.h2
//                     className="text-3xl font-bold mb-6 text-teal-600"
//                     initial={{ opacity: 0, y: -20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                   >
//                     {formType === "login" ? "Welcome Back!" : "Create Account"}
//                   </motion.h2>

//                   <form onSubmit={handleSubmit} className="space-y-4">
//                     {formType === "signup" && (
//                       <div className="grid grid-cols-2 gap-4">
//                         <InputField
//                           icon={FiUser}
//                           type="text"
//                           name="firstName"
//                           placeholder="First Name"
//                           value={formData.firstName}
//                           onChange={handleChange}
//                           required
//                         />
//                         <InputField
//                           icon={FiUser}
//                           type="text"
//                           name="lastName"
//                           placeholder="Last Name"
//                           value={formData.lastName}
//                           onChange={handleChange}
//                           required
//                         />
//                       </div>
//                     )}

//                     <InputField
//                       icon={FiMail}
//                       type="email"
//                       name="mailId"
//                       placeholder="Email Address"
//                       value={formData.mailId}
//                       onChange={handleChange}
//                       required
//                     />

//                     <InputField
//                       icon={FiLock}
//                       type="password"
//                       name="password"
//                       placeholder="Password"
//                       value={formData.password}
//                       onChange={handleChange}
//                       required
//                     />

//                     {formType === "signup" && (
//                       <InputField
//                         icon={FiLock}
//                         type="password"
//                         name="confirmPassword"
//                         placeholder="Confirm Password"
//                         value={formData.confirmPassword}
//                         onChange={handleChange}
//                         required
//                       />
//                     )}

//                     <motion.button
//                       type="submit"
//                       disabled={isLoading}
//                       className="w-full py-3 bg-teal-600 text-white font-semibold rounded-lg shadow-md hover:bg-teal-700 transition-all duration-300 disabled:opacity-50"
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                     >
//                       {isLoading ? (
//                         <motion.div
//                           className="flex items-center justify-center"
//                           animate={{ rotate: 360 }}
//                           transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
//                         >
//                           <FiRefreshCcw className="mr-2" />
//                           Processing...
//                         </motion.div>
//                       ) : (
//                         <>
//                           {formType === "login" ? "Sign In" : "Sign Up"}
//                           <FiArrowRight className="ml-2 inline" />
//                         </>
//                       )}
//                     </motion.button>
//                   </form>

//                   <motion.div
//                     className="mt-6 text-center"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ delay: 0.3 }}
//                   >
//                     <p className="text-gray-600 mb-2">
//                       {formType === "login" ? "New user?" : "Already have an account?"}{" "}
//                       <motion.button
//                         onClick={() => setFormType(formType === "login" ? "signup" : "login")}
//                         className="text-teal-600 font-semibold hover:underline"
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                       >
//                         {formType === "login" ? "Sign up" : "Sign in"}
//                       </motion.button>
//                     </p>
//                   </motion.div>
//                 </>
//               )}
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   )
// }




// import React, { useState, useEffect } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { Check, X, RefreshCcw, Mail, Lock, User, Eye, EyeOff, ArrowRight, LogOut, KeyRound } from "lucide-react"
// import axios from "axios"

// // API Endpoints
// const API_ENDPOINTS = {
//   REGISTER: "https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1/register",
//   LOGIN: "https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1/login",
//   VERIFY_OTP: "https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1/verify-otp",
//   RESEND_OTP: "https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1/resend-otp",
// }


// const fadeIn = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0 },
// }

// const scaleIn = {
//   hidden: { scale: 0.9, opacity: 0 },
//   visible: { scale: 1, opacity: 1 },
// }

// // Input Field Component
// const InputField = ({ icon: Icon, type, error, ...props }) => {
//   const [showPassword, setShowPassword] = useState(false)

//   return (
//     <motion.div className="relative" variants={fadeIn}>
//       <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//       <input
//         {...props}
//         type={type === "password" && showPassword ? "text" : type}
//         className={`w-full pl-10 pr-10 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all ${
//           error ? "border-red-500 bg-red-50" : "border-gray-200"
//         }`}
//       />
//       {type === "password" && (
//         <button
//           type="button"
//           onClick={() => setShowPassword(!showPassword)}
//           className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-teal-500 transition-colors"
//         >
//           {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//         </button>
//       )}
//       {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
//     </motion.div>
//   )
// }

// // Status Animation Component
// const StatusAnimation = ({ type, message }) => (
//   <motion.div
//     initial={{ opacity: 0 }}
//     animate={{ opacity: 1 }}
//     exit={{ opacity: 0 }}
//     className="fixed inset-0 flex flex-col items-center justify-center z-50 bg-black bg-opacity-50"
//   >
//     <motion.div
//       initial={{ scale: 0 }}
//       animate={{ scale: 1 }}
//       exit={{ scale: 0 }}
//       className={`bg-white rounded-full p-6 shadow-lg mb-4 ${type === "success" ? "text-green-500" : "text-red-500"}`}
//     >
//       {type === "success" ? <Check size={48} strokeWidth={3} /> : <X size={48} strokeWidth={3} />}
//     </motion.div>
//     <motion.p
//       initial={{ opacity: 0, y: 10 }}
//       animate={{ opacity: 1, y: 0 }}
//       className="text-white text-xl font-semibold text-center px-4"
//     >
//       {message}
//     </motion.p>
//   </motion.div>
// )

// // OTP Input Component
// const OTPInput = ({ values, onChange }) => {
//   const inputRefs = Array(6)
//     .fill(0)
//     .map(() => React.createRef())

//   const handleChange = (index, value) => {
//     if (value.length <= 1 && /^\d*$/.test(value)) {
//       const newValues = [...values]
//       newValues[index] = value
//       onChange(newValues)

//       if (value && index < 5) {
//         inputRefs[index + 1].current.focus()
//       }
//     }
//   }

//   const handleKeyDown = (index, e) => {
//     if (e.key === "Backspace" && !values[index] && index > 0) {
//       inputRefs[index - 1].current.focus()
//     }
//   }

//   return (
//     <div className="flex justify-center space-x-3">
//       {values.map((value, index) => (
//         <motion.input
//           key={index}
//           ref={inputRefs[index]}
//           type="text"
//           value={value}
//           onChange={(e) => handleChange(index, e.target.value)}
//           onKeyDown={(e) => handleKeyDown(index, e)}
//           className="w-12 h-12 text-center text-xl font-semibold border rounded-lg focus:ring-2 focus:ring-teal-500"
//           maxLength={1}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: index * 0.1 }}
//         />
//       ))}
//     </div>
//   )
// }

// // Main Authentication Component
// export default function AuthSystem() {
//   const [formType, setFormType] = useState("login")
//   const [showForm, setShowForm] = useState(false)
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     mailId: "",
//     password: "",
//     confirmPassword: "",
//   })
//   const [errors, setErrors] = useState({})
//   const [isAuthenticated, setIsAuthenticated] = useState(false)
//   const [statusAnimation, setStatusAnimation] = useState(null)
//   const [isLoading, setIsLoading] = useState(false)
//   const [otpValues, setOtpValues] = useState(Array(6).fill(""))
//   const [resendTimer, setResendTimer] = useState(30)
//   const [canResend, setCanResend] = useState(false)
//   const [showOtpVerification, setShowOtpVerification] = useState(false)

//   useEffect(() => {
//     if (resendTimer > 0) {
//       const timer = setTimeout(() => setResendTimer((prev) => prev - 1), 1000)
//       return () => clearTimeout(timer)
//     } else {
//       setCanResend(true)
//     }
//   }, [resendTimer])

//   const validateForm = () => {
//     const newErrors = {}

//     if (formType === "signup") {
//       if (!formData.firstName.trim()) newErrors.firstName = "First name is required"
//       if (!formData.lastName.trim()) newErrors.lastName = "Last name is required"
//       if (formData.password !== formData.confirmPassword) {
//         newErrors.confirmPassword = "Passwords do not match"
//       }
//     }

//     if (!formData.mailId.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
//       newErrors.mailId = "Invalid email address"
//     }

//     if (formData.password.length < 6) {
//       newErrors.password = "Password must be at least 6 characters"
//     }

//     setErrors(newErrors)
//     return Object.keys(newErrors).length === 0
//   }

//   const showStatus = (type, message, duration = 2000) => {
//     setStatusAnimation({ type, message })
//     setTimeout(() => {
//       setStatusAnimation(null)
//     }, duration)
//   }

//   const handleLogout = () => {
//     showStatus("success", "Successfully logged out")
//     setTimeout(() => {
//       setIsAuthenticated(false)
//       setFormData({
//         firstName: "",
//         lastName: "",
//         mailId: "",
//         password: "",
//         confirmPassword: "",
//       })
//       setShowForm(false)
//       setFormType("login")
//       setShowOtpVerification(false)
//       setOtpValues(Array(6).fill(""))
//     }, 2000)
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     if (!validateForm()) return

//     setIsLoading(true)
//     try {
//       const apiUrl = formType === "login" ? API_ENDPOINTS.LOGIN : API_ENDPOINTS.REGISTER
//       const response = await axios.post(apiUrl, formData)

//       showStatus("success", `${formType === "login" ? "Login" : "Registration"} successful!`)
//       if (formType === "signup") {
//         setShowOtpVerification(true)
//       } else {
//         setTimeout(() => {
//           setIsAuthenticated(true)
//           setShowForm(false)
//         }, 2000)
//       }
//     } catch (error) {
//       showStatus("error", error.response?.data?.message || `${formType === "login" ? "Login" : "Registration"} failed`)
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   const handleOtpVerification = async (e) => {
//     e.preventDefault()
//     setIsLoading(true)
//     try {
//       await axios.post(API_ENDPOINTS.VERIFY_OTP, {
//         mailId: formData.mailId,
//         otp: otpValues.join(""),
//       })
//       showStatus("success", "Email verified successfully!")
//       setTimeout(() => {
//         setIsAuthenticated(true)
//         setShowForm(false)
//         setShowOtpVerification(false)
//       }, 2000)
//     } catch (error) {
//       showStatus("error", "OTP verification failed")
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   const handleResendOtp = async () => {
//     if (!canResend) return
//     try {
//       await axios.get(`${API_ENDPOINTS.RESEND_OTP}?mailId=${formData.mailId}`)
//       showStatus("success", "New OTP sent successfully")
//       setResendTimer(30)
//       setCanResend(false)
//     } catch (error) {
//       showStatus("error", "Failed to resend OTP")
//     }
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center ">
//       <AnimatePresence>
//         {statusAnimation && <StatusAnimation type={statusAnimation.type} message={statusAnimation.message} />}

//         {!isAuthenticated ? (
//           <motion.button
//             onClick={() => setShowForm(true)}
//             className="px-7 py-2 bg-teal-900 text-white font-bold rounded-full shadow-lg hover:bg-teal-800 transition-all flex items-center gap-2"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             {/* <KeyRound size={20} /> */}
//             Sign In
//           </motion.button>
//         ) : (
//           <motion.div
//             variants={scaleIn}
//             initial="hidden"
//             animate="visible"
//             exit="hidden"
            
//           >

//             <motion.button
//               onClick={handleLogout}
//               className="px-6 py-2 bg-teal-900 text-white font-semibold rounded-full shadow-lg hover:bg-teal-800 transition-all flex items-center justify-center gap-2"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <LogOut size={20} />
//               Sign Out
//             </motion.button>
//           </motion.div>
//         )}

//         {showForm && !isAuthenticated && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40"
//           >
//             <motion.div
//               variants={scaleIn}
//               initial="hidden"
//               animate="visible"
//               exit="hidden"
//               className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 relative"
//             >
//               <motion.button
//                 onClick={() => setShowForm(false)}
//                 className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//               >
//                 <X size={24} />
//               </motion.button>

//               {showOtpVerification ? (
//                 <motion.div variants={fadeIn} initial="hidden" animate="visible" className="text-center">
//                   <Mail className="mx-auto text-teal-600 mb-4" size={48} />
//                   <h2 className="text-2xl font-bold mb-2">Verify Your Email</h2>
//                   <p className="text-gray-600 mb-6">Enter the verification code sent to {formData.mailId}</p>

//                   <form onSubmit={handleOtpVerification} className="space-y-6">
//                     <OTPInput values={otpValues} onChange={setOtpValues} />

//                     <motion.button
//                       type="submit"
//                       disabled={isLoading || otpValues.join("").length !== 6}
//                       className="w-full py-3 bg-teal-600 text-white font-semibold rounded-lg shadow-md hover:bg-teal-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                     >
//                       {isLoading ? (
//                         <>
//                           <RefreshCcw className="animate-spin" size={20} />
//                           Verifying...
//                         </>
//                       ) : (
//                         "Verify Email"
//                       )}
//                     </motion.button>
//                   </form>

//                   <div className="mt-6">
//                     {canResend ? (
//                       <motion.button
//                         onClick={handleResendOtp}
//                         className="text-teal-600 font-semibold hover:underline flex items-center justify-center mx-auto"
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                       >
//                         <RefreshCcw size={20} className="mr-2" />
//                         Resend OTP
//                       </motion.button>
//                     ) : (
//                       <p className="text-gray-500">Resend OTP in {resendTimer} seconds</p>
//                     )}
//                   </div>
//                 </motion.div>
//               ) : (
//                 <motion.div variants={fadeIn} initial="hidden" animate="visible">
//                   <h2 className="text-2xl font-bold mb-6 text-center">
//                     {formType === "login" ? "Welcome Back!" : "Create an Account"}
//                   </h2>
//                   <form onSubmit={handleSubmit} className="space-y-4">
//                     {formType === "signup" && (
//                       <>
//                         <InputField
//                           icon={User}
//                           type="text"
//                           placeholder="First Name"
//                           value={formData.firstName}
//                           onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
//                           error={errors.firstName}
//                         />
//                         <InputField
//                           icon={User}
//                           type="text"
//                           placeholder="Last Name"
//                           value={formData.lastName}
//                           onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
//                           error={errors.lastName}
//                         />
//                       </>
//                     )}
//                     <InputField
//                       icon={Mail}
//                       type="email"
//                       placeholder="Email"
//                       value={formData.mailId}
//                       onChange={(e) => setFormData({ ...formData, mailId: e.target.value })}
//                       error={errors.mailId}
//                     />
//                     <InputField
//                       icon={Lock}
//                       type="password"
//                       placeholder="Password"
//                       value={formData.password}
//                       onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//                       error={errors.password}
//                     />
//                     {formType === "signup" && (
//                       <InputField
//                         icon={Lock}
//                         type="password"
//                         placeholder="Confirm Password"
//                         value={formData.confirmPassword}
//                         onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
//                         error={errors.confirmPassword}
//                       />
//                     )}
//                     <motion.button
//                       type="submit"
//                       disabled={isLoading}
//                       className="w-full py-3 bg-teal-600 text-white font-semibold rounded-lg shadow-md hover:bg-teal-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                     >
//                       {isLoading ? (
//                         <>
//                           <RefreshCcw className="animate-spin" size={20} />
//                           {formType === "login" ? "Logging in..." : "Signing up..."}
//                         </>
//                       ) : (
//                         <>
//                           <ArrowRight size={20} />
//                           {formType === "login" ? "Login" : "Sign Up"}
//                         </>
//                       )}
//                     </motion.button>
//                   </form>
//                   <p className="mt-4 text-center text-gray-600">
//                     {formType === "login" ? "Don't have an account?" : "Already have an account?"}
//                     <button
//                       onClick={() => setFormType(formType === "login" ? "signup" : "login")}
//                       className="ml-1 text-teal-600 font-semibold hover:underline"
//                     >
//                       {formType === "login" ? "Sign up" : "Login"}
//                     </button>
//                   </p>
//                 </motion.div>
//               )}
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   )
// }



// import React, { useState, useEffect } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import {
//   Check,
//   X,
//   RefreshCcw,
//   Mail,
//   Lock,
//   User,
//   Eye,
//   EyeOff,
//   ArrowRight,
//   LogOut,
//   KeyRound,
//   AlertCircle,
// } from "lucide-react"

// // API Endpoints
// const API_ENDPOINTS = {
//   REGISTER: "https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1/register",
//   LOGIN: "https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1/login",
//   VERIFY_OTP: "https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1/verify-otp",
//   RESEND_OTP: "https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1/resend",
//   FORGOT_PASSWORD: "https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1/forgetPassword",
  
// }

// // Animation Variants
// const fadeIn = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0 },
// }

// const scaleIn = {
//   hidden: { scale: 0.9, opacity: 0 },
//   visible: { scale: 1, opacity: 1 },
// }

// // Input Field Component
// const InputField = ({ icon: Icon, type, error, ...props }) => {
//   const [showPassword, setShowPassword] = useState(false)

//   return (
//     <motion.div className="relative" variants={fadeIn}>
//       <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//       <input
//         {...props}
//         type={type === "password" && showPassword ? "text" : type}
//         className={`w-full pl-10 pr-10 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all ${
//           error ? "border-red-500 bg-red-50" : "border-gray-200"
//         }`}
//       />
//       {type === "password" && (
//         <button
//           type="button"
//           onClick={() => setShowPassword(!showPassword)}
//           className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-teal-500 transition-colors"
//         >
//           {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//         </button>
//       )}
//       {error && (
//         <motion.div
//           initial={{ opacity: 0, y: -10 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -10 }}
//           className="absolute left-0 -bottom-6 w-full"
//         >
//           <p className="text-red-500 text-sm flex items-center">
//             <AlertCircle size={16} className="mr-1" />
//             {error}
//           </p>
//         </motion.div>
//       )}
//     </motion.div>
//   )
// }

// // Status Animation Component
// const StatusAnimation = ({ type, message }) => (
//   <motion.div
//     initial={{ opacity: 0 }}
//     animate={{ opacity: 1 }}
//     exit={{ opacity: 0 }}
//     className="fixed inset-0 flex flex-col items-center justify-center z-50 bg-black bg-opacity-50"
//   >
//     <motion.div
//       initial={{ scale: 0 }}
//       animate={{ scale: 1 }}
//       exit={{ scale: 0 }}
//       className={`bg-white rounded-full p-6 shadow-lg mb-4 ${type === "success" ? "text-green-500" : "text-red-500"}`}
//     >
//       {type === "success" ? <Check size={48} strokeWidth={3} /> : <X size={48} strokeWidth={3} />}
//     </motion.div>
//     <motion.div
//       initial={{ opacity: 0, y: 10 }}
//       animate={{ opacity: 1, y: 0 }}
//       className="bg-white rounded-lg p-4 shadow-lg"
//     >
//       <p className="text-lg font-semibold text-center">{type === "success" ? "Success" : "Error"}</p>
//       <p className="text-gray-600 text-center">{message}</p>
//     </motion.div>
//   </motion.div>
// )

// // OTP Input Component
// const OTPInput = ({ values, onChange }) => {
//   const inputRefs = Array(6)
//     .fill(0)
//     .map(() => React.createRef())

//   const handleChange = (index, value) => {
//     if (value.length <= 1 && /^\d*$/.test(value)) {
//       const newValues = [...values]
//       newValues[index] = value
//       onChange(newValues)

//       if (value && index < 5) {
//         inputRefs[index + 1].current.focus()
//       }
//     }
//   }

//   const handleKeyDown = (index, e) => {
//     if (e.key === "Backspace" && !values[index] && index > 0) {
//       inputRefs[index - 1].current.focus()
//     }
//   }

//   return (
//     <div className="flex justify-center space-x-3">
//       {values.map((value, index) => (
//         <motion.input
//           key={index}
//           ref={inputRefs[index]}
//           type="text"
//           value={value}
//           onChange={(e) => handleChange(index, e.target.value)}
//           onKeyDown={(e) => handleKeyDown(index, e)}
//           className="w-12 h-12 text-center text-xl font-semibold border rounded-lg focus:ring-2 focus:ring-teal-500"
//           maxLength={1}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: index * 0.1 }}
//         />
//       ))}
//     </div>
//   )
// }

// // Main Authentication Component
// export default function AuthSystem() {
//   const [formType, setFormType] = useState("login")
//   const [showForm, setShowForm] = useState(false)
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     mailId: "",
//     password: "",
//     confirmPassword: "",
//   })
//   const [errors, setErrors] = useState({})
//   const [isAuthenticated, setIsAuthenticated] = useState(false)
//   const [statusAnimation, setStatusAnimation] = useState(null)
//   const [isLoading, setIsLoading] = useState(false)
//   const [otpValues, setOtpValues] = useState(Array(6).fill(""))
//   const [resendTimer, setResendTimer] = useState(30)
//   const [canResend, setCanResend] = useState(false)
//   const [showOtpVerification, setShowOtpVerification] = useState(false)
//   const [showForgotPassword, setShowForgotPassword] = useState(false)
//   const [resetToken, setResetToken] = useState("")

//   useEffect(() => {
//     if (resendTimer > 0) {
//       const timer = setTimeout(() => setResendTimer((prev) => prev - 1), 1000)
//       return () => clearTimeout(timer)
//     } else {
//       setCanResend(true)
//     }
//   }, [resendTimer])

//   const validateForm = () => {
//     const newErrors = {}

//     if (formType === "signup") {
//       if (!formData.firstName.trim()) newErrors.firstName = "First name is required"
//       if (!formData.lastName.trim()) newErrors.lastName = "Last name is required"
//       if (formData.password !== formData.confirmPassword) {
//         newErrors.confirmPassword = "Passwords do not match"
//       }
//     }

//     if (!formData.mailId.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
//       newErrors.mailId = "Invalid email address"
//     }

//     if (formData.password.length < 6) {
//       newErrors.password = "Password must be at least 6 characters"
//     }

//     setErrors(newErrors)
//     return Object.keys(newErrors).length === 0
//   }

//   const showStatus = (type, message, duration = 2000) => {
//     setStatusAnimation({ type, message })
//     setTimeout(() => {
//       setStatusAnimation(null)
//     }, duration)
//   }

//   const handleLogout = () => {
//     showStatus("success", "Successfully logged out")
//     setTimeout(() => {
//       setIsAuthenticated(false)
//       setFormData({
//         firstName: "",
//         lastName: "",
//         mailId: "",
//         password: "",
//         confirmPassword: "",
//       })
//       setShowForm(false)
//       setFormType("login")
//       setShowOtpVerification(false)
//       setOtpValues(Array(6).fill(""))
//     }, 2000)
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     if (!validateForm()) return

//     setIsLoading(true)
//     try {
//       const apiUrl = formType === "login" ? API_ENDPOINTS.LOGIN : API_ENDPOINTS.REGISTER
//       const response = await fetch(apiUrl, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       })

//       if (!response.ok) {
//         throw new Error("Network response was not ok")
//       }

//       const data = await response.json()

//       showStatus("success", `${formType === "login" ? "Login" : "Registration"} successful!`)
//       if (formType === "signup") {
//         setShowOtpVerification(true)
//       } else {
//         setTimeout(() => {
//           setIsAuthenticated(true)
//           setShowForm(false)
//         }, 2000)
//       }
//     } catch (error) {
//       showStatus("error", error.message || `${formType === "login" ? "Login" : "Registration"} failed`)
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   const handleOtpVerification = async (e) => {
//     e.preventDefault()
//     setIsLoading(true)
//     try {
//       const response = await fetch(API_ENDPOINTS.VERIFY_OTP, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           mailId: formData.mailId,
//           otp: otpValues.join(""),
//         }),
//       })

//       if (!response.ok) {
//         throw new Error("Network response was not ok")
//       }

//       showStatus("success", "Email verified successfully!")
//       setTimeout(() => {
//         setIsAuthenticated(true)
//         setShowForm(false)
//         setShowOtpVerification(false)
//       }, 2000)
//     } catch (error) {
//       showStatus("error", "OTP verification failed")
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   const handleResendOtp = async () => {
//     if (!canResend) return
//     try {
//       const response = await fetch(`${API_ENDPOINTS.RESEND_OTP}?mailId=${formData.mailId}`)
//       if (!response.ok) {
//         throw new Error("Network response was not ok")
//       }
//       showStatus("success", "New OTP sent successfully")
//       setResendTimer(30)
//       setCanResend(false)
//     } catch (error) {
//       showStatus("error", "Failed to resend OTP")
//     }
//   }

//   const handleForgotPassword = async (e) => {
//     e.preventDefault()
//     setIsLoading(true)
//     try {
//       const response = await fetch(API_ENDPOINTS.FORGOT_PASSWORD, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ mailId: formData.mailId }),
//       })

//       if (!response.ok) {
//         throw new Error("Network response was not ok")
//       }

//       const data = await response.json()
//       setResetToken(data.resetToken)
//       showStatus("success", "Password reset instructions sent to your email")
//       setShowForgotPassword(false)
//       setFormType("resetPassword")
//     } catch (error) {
//       showStatus("error", "Failed to process forgot password request")
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   const handleResetPassword = async (e) => {
//     e.preventDefault()
//     if (formData.password !== formData.confirmPassword) {
//       setErrors({ ...errors, confirmPassword: "Passwords do not match" })
//       return
//     }
//     setIsLoading(true)
//     try {
//       const response = await fetch(API_ENDPOINTS.RESET_PASSWORD, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           resetToken,
//           newPassword: formData.password,
//         }),
//       })

//       if (!response.ok) {
//         throw new Error("Network response was not ok")
//       }

//       showStatus("success", "Password reset successfully")
//       setFormType("login")
//     } catch (error) {
//       showStatus("error", "Failed to reset password")
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       <AnimatePresence>
//         {statusAnimation && <StatusAnimation type={statusAnimation.type} message={statusAnimation.message} />}

//         {!isAuthenticated ? (
//           <motion.button
//             onClick={() => setShowForm(true)}
//             className="px-7 py-2 bg-teal-900 text-white font-bold rounded-full shadow-lg hover:bg-teal-800 transition-all flex items-center gap-2"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <KeyRound size={20} />
//             Sign In
//           </motion.button>
//         ) : (
//           <motion.div variants={scaleIn} initial="hidden" animate="visible" exit="hidden">
//             <motion.button
//               onClick={handleLogout}
//               className="px-6 py-2 bg-teal-900 text-white font-semibold rounded-full shadow-lg hover:bg-teal-800 transition-all flex items-center justify-center gap-2"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <LogOut size={20} />
//               Sign Out
//             </motion.button>
//           </motion.div>
//         )}

//         {showForm && !isAuthenticated && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40"
//           >
//             <motion.div
//               variants={scaleIn}
//               initial="hidden"
//               animate="visible"
//               exit="hidden"
//               className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 relative"
//             >
//               <motion.button
//                 onClick={() => setShowForm(false)}
//                 className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//               >
//                 <X size={24} />
//               </motion.button>

//               {showOtpVerification ? (
//                 <motion.div variants={fadeIn} initial="hidden" animate="visible" className="text-center">
//                   <Mail className="mx-auto text-teal-600 mb-4" size={48} />
//                   <h2 className="text-2xl font-bold mb-2">Verify Your Email</h2>
//                   <p className="text-gray-600 mb-6">Enter the verification code sent to {formData.mailId}</p>

//                   <form onSubmit={handleOtpVerification} className="space-y-6">
//                     <OTPInput values={otpValues} onChange={setOtpValues} />

//                     <motion.button
//                       type="submit"
//                       disabled={isLoading || otpValues.join("").length !== 6}
//                       className="w-full py-3 bg-teal-600 text-white font-semibold rounded-lg shadow-md hover:bg-teal-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                     >
//                       {isLoading ? (
//                         <>
//                           <RefreshCcw className="animate-spin" size={20} />
//                           Verifying...
//                         </>
//                       ) : (
//                         "Verify Email"
//                       )}
//                     </motion.button>
//                   </form>

//                   <div className="mt-6">
//                     {canResend ? (
//                       <motion.button
//                         onClick={handleResendOtp}
//                         className="text-teal-600 font-semibold hover:underline flex items-center justify-center mx-auto"
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                       >
//                         <RefreshCcw size={20} className="mr-2" />
//                         Resend OTP
//                       </motion.button>
//                     ) : (
//                       <p className="text-gray-500">Resend OTP in {resendTimer} seconds</p>
//                     )}
//                   </div>
//                 </motion.div>
//               ) : showForgotPassword ? (
//                 <motion.div variants={fadeIn} initial="hidden" animate="visible">
//                   <h2 className="text-2xl font-bold mb-6 text-center">Forgot Password</h2>
//                   <form onSubmit={handleForgotPassword} className="space-y-4">
//                     <InputField
//                       icon={Mail}
//                       type="email"
//                       placeholder="Email"
//                       value={formData.mailId}
//                       onChange={(e) => setFormData({ ...formData, mailId: e.target.value })}
//                       error={errors.mailId}
//                     />
//                     <motion.button
//                       type="submit"
//                       disabled={isLoading}
//                       className="w-full py-3 bg-teal-600 text-white font-semibold rounded-lg shadow-md hover:bg-teal-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                     >
//                       {isLoading ? (
//                         <>
//                           <RefreshCcw className="animate-spin" size={20} />
//                           Sending...
//                         </>
//                       ) : (
//                         "Send Reset Instructions"
//                       )}
//                     </motion.button>
//                   </form>
//                   <p className="mt-4 text-center text-gray-600">
//                     Remember your password?{" "}
//                     <button
//                       onClick={() => setShowForgotPassword(false)}
//                       className="text-teal-600 font-semibold hover:underline"
//                     >
//                       Back to Login
//                     </button>
//                   </p>
//                 </motion.div>
//               ) : formType === "resetPassword" ? (
//                 <motion.div variants={fadeIn} initial="hidden" animate="visible">
//                   <h2 className="text-2xl font-bold mb-6 text-center">Reset Password</h2>
//                   <form onSubmit={handleResetPassword} className="space-y-4">
//                     <InputField
//                       icon={Lock}
//                       type="password"
//                       placeholder="New Password"
//                       value={formData.password}
//                       onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//                       error={errors.password}
//                     />
//                     <InputField
//                       icon={Lock}
//                       type="password"
//                       placeholder="Confirm New Password"
//                       value={formData.confirmPassword}
//                       onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
//                       error={errors.confirmPassword}
//                     />
//                     <motion.button
//                       type="submit"
//                       disabled={isLoading}
//                       className="w-full py-3 bg-teal-600 text-white font-semibold rounded-lg shadow-md hover:bg-teal-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                     >
//                       {isLoading ? (
//                         <>
//                           <RefreshCcw className="animate-spin" size={20} />
//                           Resetting...
//                         </>
//                       ) : (
//                         "Reset Password"
//                       )}
//                     </motion.button>
//                   </form>
//                 </motion.div>
//               ) : (
//                 <motion.div variants={fadeIn} initial="hidden" animate="visible">
//                   <h2 className="text-2xl font-bold mb-6 text-center">
//                     {formType === "login" ? "Welcome Back!" : "Create an Account"}
//                   </h2>
//                   <form onSubmit={handleSubmit} className="space-y-4">
//                     {formType === "signup" && (
//                       <>
//                         <InputField
//                           icon={User}
//                           type="text"
//                           placeholder="First Name"
//                           value={formData.firstName}
//                           onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
//                           error={errors.firstName}
//                         />
//                         <InputField
//                           icon={User}
//                           type="text"
//                           placeholder="Last Name"
//                           value={formData.lastName}
//                           onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
//                           error={errors.lastName}
//                         />
//                       </>
//                     )}
//                     <InputField
//                       icon={Mail}
//                       type="email"
//                       placeholder="Email"
//                       value={formData.mailId}
//                       onChange={(e) => setFormData({ ...formData, mailId: e.target.value })}
//                       error={errors.mailId}
//                     />
//                     <InputField
//                       icon={Lock}
//                       type="password"
//                       placeholder="Password"
//                       value={formData.password}
//                       onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//                       error={errors.password}
//                     />
//                     {formType === "signup" && (
//                       <InputField
//                         icon={Lock}
//                         type="password"
//                         placeholder="Confirm Password"
//                         value={formData.confirmPassword}
//                         onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
//                         error={errors.confirmPassword}
//                       />
//                     )}
//                     <motion.button
//                       type="submit"
//                       disabled={isLoading}
//                       className="w-full py-3 bg-teal-600 text-white font-semibold rounded-lg shadow-md hover:bg-teal-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                     >
//                       {isLoading ? (
//                         <>
//                           <RefreshCcw className="animate-spin" size={20} />
//                           {formType === "login" ? "Logging in..." : "Signing up..."}
//                         </>
//                       ) : (
//                         <>
//                           <ArrowRight size={20} />
//                           {formType === "login" ? "Login" : "Sign Up"}
//                         </>
//                       )}
//                     </motion.button>
//                   </form>
//                   <div className="mt-4 text-center text-gray-600">
//                     {formType === "login" ? (
//                       <>
//                         <p>
//                           Don't have an account?{" "}
//                           <button
//                             onClick={() => setFormType("signup")}
//                             className="text-teal-600 font-semibold hover:underline"
//                           >
//                             Sign up
//                           </button>
//                         </p>
//                         <p className="mt-2">
//                           <button
//                             onClick={() => setShowForgotPassword(true)}
//                             className="text-teal-600 font-semibold hover:underline"
//                           >
//                             Forgot password?
//                           </button>
//                         </p>
//                       </>
//                     ) : (
//                       <p>
//                         Already have an account?{" "}
//                         <button
//                           onClick={() => setFormType("login")}
//                           className="text-teal-600 font-semibold hover:underline"
//                         >
//                           Login
//                         </button>
//                       </p>
//                     )}
//                   </div>
//                 </motion.div>
//               )}
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   )
// }



// "use client"

// import React, { useState, useEffect } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import {
//   Check,
//   X,
//   RefreshCcw,
//   Mail,
//   Lock,
//   User,
//   Eye,
//   EyeOff,
//   ArrowRight,
//   LogOut,
//   KeyRound,
//   AlertCircle,
// } from "lucide-react"

// // API Endpoints
// const API_ENDPOINTS = {
//   REGISTER: "https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1/register",
//   LOGIN: "https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1/login",
//   VERIFY_OTP: "https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1/verify-otp",
//   RESEND_OTP: "https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1/resend",
//   FORGOT_PASSWORD: "https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1/forgetPassword",
//   RESET_PASSWORD: "https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1/resetPassword", // Added missing endpoint
// }

// // Animation Variants
// const fadeIn = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0 },
// }

// const scaleIn = {
//   hidden: { scale: 0.9, opacity: 0 },
//   visible: { scale: 1, opacity: 1 },
// }

// // Input Field Component
// const InputField = ({ icon: Icon, type, error, ...props }) => {
//   const [showPassword, setShowPassword] = useState(false)

//   return (
//     <motion.div className="relative" variants={fadeIn}>
//       <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//       <input
//         {...props}
//         type={type === "password" && showPassword ? "text" : type}
//         className={`w-full pl-10 pr-10 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all ${
//           error ? "border-red-500 bg-red-50" : "border-gray-200"
//         }`}
//       />
//       {type === "password" && (
//         <button
//           type="button"
//           onClick={() => setShowPassword(!showPassword)}
//           className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-teal-500 transition-colors"
//         >
//           {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//         </button>
//       )}
//       {error && (
//         <motion.div
//           initial={{ opacity: 0, y: -10 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -10 }}
//           className="absolute left-0 -bottom-6 w-full"
//         >
//           <p className="text-red-500 text-sm flex items-center">
//             <AlertCircle size={16} className="mr-1" />
//             {error}
//           </p>
//         </motion.div>
//       )}
//     </motion.div>
//   )
// }

// // Status Animation Component
// const StatusAnimation = ({ type, message }) => (
//   <motion.div
//     initial={{ opacity: 0 }}
//     animate={{ opacity: 1 }}
//     exit={{ opacity: 0 }}
//     className="fixed inset-0 flex flex-col items-center justify-center z-50 bg-black bg-opacity-50"
//   >
//     <motion.div
//       initial={{ scale: 0 }}
//       animate={{ scale: 1 }}
//       exit={{ scale: 0 }}
//       className={`bg-white rounded-full p-6 shadow-lg mb-4 ${type === "success" ? "text-green-500" : "text-red-500"}`}
//     >
//       {type === "success" ? <Check size={48} strokeWidth={3} /> : <X size={48} strokeWidth={3} />}
//     </motion.div>
//     <motion.div
//       initial={{ opacity: 0, y: 10 }}
//       animate={{ opacity: 1, y: 0 }}
//       className="bg-white rounded-lg p-4 shadow-lg"
//     >
//       <p className="text-lg font-semibold text-center">{type === "success" ? "Success" : "Error"}</p>
//       <p className="text-gray-600 text-center">{message}</p>
//     </motion.div>
//   </motion.div>
// )

// // OTP Input Component
// const OTPInput = ({ values, onChange }) => {
//   const inputRefs = Array(6)
//     .fill(0)
//     .map(() => React.createRef())

//   const handleChange = (index, value) => {
//     if (value.length <= 1 && /^\d*$/.test(value)) {
//       const newValues = [...values]
//       newValues[index] = value
//       onChange(newValues)

//       if (value && index < 5) {
//         inputRefs[index + 1].current.focus()
//       }
//     }
//   }

//   const handleKeyDown = (index, e) => {
//     if (e.key === "Backspace" && !values[index] && index > 0) {
//       inputRefs[index - 1].current.focus()
//     }
//   }

//   return (
//     <div className="flex justify-center space-x-3">
//       {values.map((value, index) => (
//         <motion.input
//           key={index}
//           ref={inputRefs[index]}
//           type="text"
//           value={value}
//           onChange={(e) => handleChange(index, e.target.value)}
//           onKeyDown={(e) => handleKeyDown(index, e)}
//           className="w-12 h-12 text-center text-xl font-semibold border rounded-lg focus:ring-2 focus:ring-teal-500"
//           maxLength={1}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: index * 0.1 }}
//         />
//       ))}
//     </div>
//   )
// }

// // Main Authentication Component
// export default function AuthSystem() {
//   const [formType, setFormType] = useState("login")
//   const [showForm, setShowForm] = useState(false)
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     mailId: "",
//     password: "",
//     confirmPassword: "",
//   })
//   const [errors, setErrors] = useState({})
//   const [isAuthenticated, setIsAuthenticated] = useState(false)
//   const [statusAnimation, setStatusAnimation] = useState(null)
//   const [isLoading, setIsLoading] = useState(false)
//   const [otpValues, setOtpValues] = useState(Array(6).fill(""))
//   const [resendTimer, setResendTimer] = useState(30)
//   const [canResend, setCanResend] = useState(false)
//   const [showOtpVerification, setShowOtpVerification] = useState(false)
//   const [showForgotPassword, setShowForgotPassword] = useState(false)
//   const [resetToken, setResetToken] = useState("")

//   useEffect(() => {
//     if (resendTimer > 0) {
//       const timer = setTimeout(() => setResendTimer((prev) => prev - 1), 1000)
//       return () => clearTimeout(timer)
//     } else {
//       setCanResend(true)
//     }
//   }, [resendTimer])

//   const validateForm = () => {
//     const newErrors = {}

//     if (formType === "signup") {
//       if (!formData.firstName.trim()) newErrors.firstName = "First name is required"
//       if (!formData.lastName.trim()) newErrors.lastName = "Last name is required"
//       if (formData.password !== formData.confirmPassword) {
//         newErrors.confirmPassword = "Passwords do not match"
//       }
//     }

//     if (!formData.mailId.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
//       newErrors.mailId = "Invalid email address"
//     }

//     if (formData.password.length < 6) {
//       newErrors.password = "Password must be at least 6 characters"
//     }

//     setErrors(newErrors)
//     return Object.keys(newErrors).length === 0
//   }

//   const showStatus = (type, message, duration = 2000) => {
//     setStatusAnimation({ type, message })
//     setTimeout(() => {
//       setStatusAnimation(null)
//     }, duration)
//   }

//   const handleLogout = () => {
//     showStatus("success", "Successfully logged out")
//     setTimeout(() => {
//       setIsAuthenticated(false)
//       setFormData({
//         firstName: "",
//         lastName: "",
//         mailId: "",
//         password: "",
//         confirmPassword: "",
//       })
//       setShowForm(false)
//       setFormType("login")
//       setShowOtpVerification(false)
//       setOtpValues(Array(6).fill(""))
//     }, 2000)
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     if (!validateForm()) return

//     setIsLoading(true)
//     try {
//       const apiUrl = formType === "login" ? API_ENDPOINTS.LOGIN : API_ENDPOINTS.REGISTER
//       const response = await fetch(apiUrl, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       })

//       if (!response.ok) {
//         const errorData = await response.json()
//         throw new Error(errorData.message || "An error occurred")
//       }

//       const data = await response.json()

//       showStatus("success", `${formType === "login" ? "Login" : "Registration"} successful!`)
//       if (formType === "signup") {
//         setShowOtpVerification(true)
//       } else {
//         setTimeout(() => {
//           setIsAuthenticated(true)
//           setShowForm(false)
//         }, 2000)
//       }
//     } catch (error) {
//       showStatus("error", error.message || `${formType === "login" ? "Login" : "Registration"} failed`)
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   const handleOtpVerification = async (e) => {
//     e.preventDefault()
//     setIsLoading(true)
//     try {
//       const response = await fetch(API_ENDPOINTS.VERIFY_OTP, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           mailId: formData.mailId,
//           otp: otpValues.join(""),
//         }),
//       })

//       if (!response.ok) {
//         const errorData = await response.json()
//         throw new Error(errorData.message || "OTP verification failed")
//       }

//       showStatus("success", "Email verified successfully!")
//       setTimeout(() => {
//         setIsAuthenticated(true)
//         setShowForm(false)
//         setShowOtpVerification(false)
//       }, 2000)
//     } catch (error) {
//       showStatus("error", error.message)
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   const handleResendOtp = async () => {
//     if (!canResend) return
//     try {
//       const response = await fetch(`${API_ENDPOINTS.RESEND_OTP}?mailId=${formData.mailId}`)
//       if (!response.ok) {
//         const errorData = await response.json()
//         throw new Error(errorData.message || "Failed to resend OTP")
//       }
//       showStatus("success", "New OTP sent successfully")
//       setResendTimer(30)
//       setCanResend(false)
//     } catch (error) {
//       showStatus("error", error.message)
//     }
//   }

//   const handleForgotPassword = async (e) => {
//     e.preventDefault()
//     setIsLoading(true)
//     try {
//       const response = await fetch(API_ENDPOINTS.FORGOT_PASSWORD, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ mailId: formData.mailId }),
//       })

//       if (!response.ok) {
//         const errorData = await response.json()
//         throw new Error(errorData.message || "Failed to process forgot password request")
//       }

//       const data = await response.json()
//       setResetToken(data.resetToken)
//       showStatus("success", "Password reset instructions sent to your email")
//       setShowForgotPassword(false)
//       setFormType("resetPassword")
//     } catch (error) {
//       showStatus("error", error.message)
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   const handleResetPassword = async (e) => {
//     e.preventDefault()
//     if (formData.password !== formData.confirmPassword) {
//       setErrors({ ...errors, confirmPassword: "Passwords do not match" })
//       return
//     }
//     setIsLoading(true)
//     try {
//       const response = await fetch(API_ENDPOINTS.RESET_PASSWORD, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           resetToken,
//           newPassword: formData.password,
//         }),
//       })

//       if (!response.ok) {
//         const errorData = await response.json()
//         throw new Error(errorData.message || "Failed to reset password")
//       }

//       showStatus("success", "Password reset successfully")
//       setFormType("login")
//     } catch (error) {
//       showStatus("error", error.message)
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <AnimatePresence>
//         {statusAnimation && <StatusAnimation type={statusAnimation.type} message={statusAnimation.message} />}

//         {!isAuthenticated ? (
//           <motion.button
//             onClick={() => setShowForm(true)}
//             className="px-7 py-2 bg-teal-600 text-white font-bold rounded-full shadow-lg hover:bg-teal-700 transition-all flex items-center gap-2"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <KeyRound size={20} />
//             Sign In
//           </motion.button>
//         ) : (
//           <motion.div variants={scaleIn} initial="hidden" animate="visible" exit="hidden">
//             <motion.button
//               onClick={handleLogout}
//               className="px-6 py-2 bg-teal-600 text-white font-semibold rounded-full shadow-lg hover:bg-teal-700 transition-all flex items-center justify-center gap-2"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <LogOut size={20} />
//               Sign Out
//             </motion.button>
//           </motion.div>
//         )}

//         {showForm && !isAuthenticated && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40"
//           >
//             <motion.div
//               variants={scaleIn}
//               initial="hidden"
//               animate="visible"
//               exit="hidden"
//               className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 relative"
//             >
//               <motion.button
//                 onClick={() => setShowForm(false)}
//                 className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//               >
//                 <X size={24} />
//               </motion.button>

//               {showOtpVerification ? (
//                 <motion.div variants={fadeIn} initial="hidden" animate="visible" className="text-center">
//                   <Mail className="mx-auto text-teal-600 mb-4" size={48} />
//                   <h2 className="text-2xl font-bold mb-2">Verify Your Email</h2>
//                   <p className="text-gray-600 mb-6">Enter the verification code sent to {formData.mailId}</p>

//                   <form onSubmit={handleOtpVerification} className="space-y-6">
//                     <OTPInput values={otpValues} onChange={setOtpValues} />

//                     <motion.button
//                       type="submit"
//                       disabled={isLoading || otpValues.join("").length !== 6}
//                       className="w-full py-3 bg-teal-600 text-white font-semibold rounded-lg shadow-md hover:bg-teal-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                     >
//                       {isLoading ? (
//                         <>
//                           <RefreshCcw className="animate-spin" size={20} />
//                           Verifying...
//                         </>
//                       ) : (
//                         "Verify Email"
//                       )}
//                     </motion.button>
//                   </form>

//                   <div className="mt-6">
//                     {canResend ? (
//                       <motion.button
//                         onClick={handleResendOtp}
//                         className="text-teal-600 font-semibold hover:underline flex items-center justify-center mx-auto"
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                       >
//                         <RefreshCcw size={20} className="mr-2" />
//                         Resend OTP
//                       </motion.button>
//                     ) : (
//                       <p className="text-gray-500">Resend OTP in {resendTimer} seconds</p>
//                     )}
//                   </div>
//                 </motion.div>
//               ) : showForgotPassword ? (
//                 <motion.div variants={fadeIn} initial="hidden" animate="visible">
//                   <h2 className="text-2xl font-bold mb-6 text-center">Forgot Password</h2>
//                   <form onSubmit={handleForgotPassword} className="space-y-4">
//                     <InputField
//                       icon={Mail}
//                       type="email"
//                       placeholder="Email"
//                       value={formData.mailId}
//                       onChange={(e) => setFormData({ ...formData, mailId: e.target.value })}
//                       error={errors.mailId}
//                     />
//                     <motion.button
//                       type="submit"
//                       disabled={isLoading}
//                       className="w-full py-3 bg-teal-600 text-white font-semibold rounded-lg shadow-md hover:bg-teal-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                     >
//                       {isLoading ? (
//                         <>
//                           <RefreshCcw className="animate-spin" size={20} />
//                           Sending...
//                         </>
//                       ) : (
//                         "Send Reset Instructions"
//                       )}
//                     </motion.button>
//                   </form>
//                   <p className="mt-4 text-center text-gray-600">
//                     Remember your password?{" "}
//                     <button
//                       onClick={() => setShowForgotPassword(false)}
//                       className="text-teal-600 font-semibold hover:underline"
//                     >
//                       Back to Login
//                     </button>
//                   </p>
//                 </motion.div>
//               ) : formType === "resetPassword" ? (
//                 <motion.div variants={fadeIn} initial="hidden" animate="visible">
//                   <h2 className="text-2xl font-bold mb-6 text-center">Reset Password</h2>
//                   <form onSubmit={handleResetPassword} className="space-y-4">
//                     <InputField
//                       icon={Lock}
//                       type="password"
//                       placeholder="New Password"
//                       value={formData.password}
//                       onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//                       error={errors.password}
//                     />
//                     <InputField
//                       icon={Lock}
//                       type="password"
//                       placeholder="Confirm New Password"
//                       value={formData.confirmPassword}
//                       onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
//                       error={errors.confirmPassword}
//                     />
//                     <motion.button
//                       type="submit"
//                       disabled={isLoading}
//                       className="w-full py-3 bg-teal-600 text-white font-semibold rounded-lg shadow-md hover:bg-teal-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                     >
//                       {isLoading ? (
//                         <>
//                           <RefreshCcw className="animate-spin" size={20} />
//                           Resetting...
//                         </>
//                       ) : (
//                         "Reset Password"
//                       )}
//                     </motion.button>
//                   </form>
//                 </motion.div>
//               ) : (
//                 <motion.div variants={fadeIn} initial="hidden" animate="visible">
//                   <h2 className="text-2xl font-bold mb-6 text-center">
//                     {formType === "login" ? "Welcome Back!" : "Create an Account"}
//                   </h2>
//                   <form onSubmit={handleSubmit} className="space-y-4">
//                     {formType === "signup" && (
//                       <>
//                         <InputField
//                           icon={User}
//                           type="text"
//                           placeholder="First Name"
//                           value={formData.firstName}
//                           onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
//                           error={errors.firstName}
//                         />
//                         <InputField
//                           icon={User}
//                           type="text"
//                           placeholder="Last Name"
//                           value={formData.lastName}
//                           onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
//                           error={errors.lastName}
//                         />
//                       </>
//                     )}
//                     <InputField
//                       icon={Mail}
//                       type="email"
//                       placeholder="Email"
//                       value={formData.mailId}
//                       onChange={(e) => setFormData({ ...formData, mailId: e.target.value })}
//                       error={errors.mailId}
//                     />
//                     <InputField
//                       icon={Lock}
//                       type="password"
//                       placeholder="Password"
//                       value={formData.password}
//                       onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//                       error={errors.password}
//                     />
//                     {formType === "signup" && (
//                       <InputField
//                         icon={Lock}
//                         type="password"
//                         placeholder="Confirm Password"
//                         value={formData.confirmPassword}
//                         onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
//                         error={errors.confirmPassword}
//                       />
//                     )}
//                     <motion.button
//                       type="submit"
//                       disabled={isLoading}
//                       className="w-full py-3 bg-teal-600 text-white font-semibold rounded-lg shadow-md hover:bg-teal-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                     >
//                       {isLoading ? (
//                         <>
//                           <RefreshCcw className="animate-spin" size={20} />
//                           {formType === "login" ? "Logging in..." : "Signing up..."}
//                         </>
//                       ) : (
//                         <>
//                           <ArrowRight size={20} />
//                           {formType === "login" ? "Login" : "Sign Up"}
//                         </>
//                       )}
//                     </motion.button>
//                   </form>
//                   <div className="mt-4 text-center text-gray-600">
//                     {formType === "login" ? (
//                       <>
//                         <p>
//                           Don't have an account?{" "}
//                           <button
//                             onClick={() => setFormType("signup")}
//                             className="text-teal-600 font-semibold hover:underline"
//                           >
//                             Sign up
//                           </button>
//                         </p>
//                         <p className="mt-2">
//                           <button
//                             onClick={() => setShowForgotPassword(true)}
//                             className="text-teal-600 font-semibold hover:underline"
//                           >
//                             Forgot password?
//                           </button>
//                         </p>
//                       </>
//                     ) : (
//                       <p>
//                         Already have an account?{" "}
//                         <button
//                           onClick={() => setFormType("login")}
//                           className="text-teal-600 font-semibold hover:underline"
//                         >
//                           Login
//                         </button>
//                       </p>
//                     )}
//                   </div>
//                 </motion.div>
//               )}
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   )
// }


// "use client"

// import React, { useState, useEffect, useCallback } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import {
//   Check,
//   X,
//   RefreshCcw,
//   Mail,
//   Lock,
//   User,
//   Eye,
//   EyeOff,
//   ArrowRight,
//   LogOut,
//   KeyRound,
//   AlertCircle,
// } from "lucide-react"

// // API Endpoints
// const API_ENDPOINTS = {
//   REGISTER: "https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1/register",
//   LOGIN: "https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1/login",
//   VERIFY_OTP: "https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1/verify-otp",
//   RESEND_OTP: "https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1/resend",
//   FORGOT_PASSWORD: "https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1/forgetPassword",
//   RESET_PASSWORD: "https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1/resetPassword",
// }

// // Animation Variants
// const fadeIn = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0 },
// }

// const scaleIn = {
//   hidden: { scale: 0.9, opacity: 0 },
//   visible: { scale: 1, opacity: 1 },
// }

// // Input Field Component
// const InputField = React.memo(({ icon: Icon, type, error, ...props }) => {
//   const [showPassword, setShowPassword] = useState(false)

//   return (
//     <motion.div className="relative" variants={fadeIn}>
//       <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//       <input
//         {...props}
//         type={type === "password" && showPassword ? "text" : type}
//         className={`w-full pl-10 pr-10 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
//           error ? "border-red-500 bg-red-50" : "border-gray-200"
//         }`}
//       />
//       {type === "password" && (
//         <button
//           type="button"
//           onClick={() => setShowPassword(!showPassword)}
//           className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-500 transition-colors"
//         >
//           {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//         </button>
//       )}
//       {error && (
//         <motion.p
//           initial={{ opacity: 0, y: -10 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -10 }}
//           className="text-red-500 text-sm mt-1 flex items-center"
//         >
//           <AlertCircle size={16} className="mr-1" />
//           {error}
//         </motion.p>
//       )}
//     </motion.div>
//   )
// })

// // Status Animation Component
// const StatusAnimation = React.memo(({ type, message }) => (
//   <motion.div
//     initial={{ opacity: 0 }}
//     animate={{ opacity: 1 }}
//     exit={{ opacity: 0 }}
//     className="fixed inset-0 flex flex-col items-center justify-center z-50 bg-black bg-opacity-50"
//   >
//     <motion.div
//       initial={{ scale: 0 }}
//       animate={{ scale: 1 }}
//       exit={{ scale: 0 }}
//       className={`bg-white rounded-full p-6 shadow-lg mb-4 ${type === "success" ? "text-green-500" : "text-red-500"}`}
//     >
//       {type === "success" ? <Check size={48} strokeWidth={3} /> : <X size={48} strokeWidth={3} />}
//     </motion.div>
//     <motion.div
//       initial={{ opacity: 0, y: 10 }}
//       animate={{ opacity: 1, y: 0 }}
//       className="bg-white rounded-lg p-4 shadow-lg"
//     >
//       <p className="text-lg font-semibold text-center">{type === "success" ? "Success" : "Error"}</p>
//       <p className="text-gray-600 text-center">{message}</p>
//     </motion.div>
//   </motion.div>
// ))

// // OTP Input Component
// const OTPInput = React.memo(({ values, onChange }) => {
//   const inputRefs = Array(6)
//     .fill(0)
//     .map(() => React.createRef())

//   const handleChange = useCallback(
//     (index, value) => {
//       if (value.length <= 1 && /^\d*$/.test(value)) {
//         const newValues = [...values]
//         newValues[index] = value
//         onChange(newValues)

//         if (value && index < 5) {
//           inputRefs[index + 1].current.focus()
//         }
//       }
//     },
//     [values, onChange, inputRefs],
//   )

//   const handleKeyDown = useCallback(
//     (index, e) => {
//       if (e.key === "Backspace" && !values[index] && index > 0) {
//         inputRefs[index - 1].current.focus()
//       }
//     },
//     [values, inputRefs],
//   )

//   return (
//     <div className="flex justify-center space-x-3">
//       {values.map((value, index) => (
//         <motion.input
//           key={index}
//           ref={inputRefs[index]}
//           type="text"
//           value={value}
//           onChange={(e) => handleChange(index, e.target.value)}
//           onKeyDown={(e) => handleKeyDown(index, e)}
//           className="w-12 h-12 text-center text-xl font-semibold border rounded-lg focus:ring-2 focus:ring-blue-500"
//           maxLength={1}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: index * 0.1 }}
//         />
//       ))}
//     </div>
//   )
// })

// // Main Authentication Component
// export default function AuthSystem() {
//   const [formType, setFormType] = useState("login")
//   const [showForm, setShowForm] = useState(false)
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     mailId: "",
//     password: "",
//     confirmPassword: "",
//   })
//   const [errors, setErrors] = useState({})
//   const [isAuthenticated, setIsAuthenticated] = useState(false)
//   const [statusAnimation, setStatusAnimation] = useState(null)
//   const [isLoading, setIsLoading] = useState(false)
//   const [otpValues, setOtpValues] = useState(Array(6).fill(""))
//   const [resendTimer, setResendTimer] = useState(30)
//   const [canResend, setCanResend] = useState(false)
//   const [showOtpVerification, setShowOtpVerification] = useState(false)
//   const [showForgotPassword, setShowForgotPassword] = useState(false)
//   const [resetToken, setResetToken] = useState("")

//   useEffect(() => {
//     let timer
//     if (resendTimer > 0) {
//       timer = setTimeout(() => setResendTimer((prev) => prev - 1), 1000)
//     } else {
//       setCanResend(true)
//     }
//     return () => clearTimeout(timer)
//   }, [resendTimer])

//   const validateForm = useCallback(() => {
//     const newErrors = {}

//     if (formType === "signup") {
//       if (!formData.firstName.trim()) newErrors.firstName = "First name is required"
//       if (!formData.lastName.trim()) newErrors.lastName = "Last name is required"
//       if (formData.password !== formData.confirmPassword) {
//         newErrors.confirmPassword = "Passwords do not match"
//       }
//     }

//     if (!formData.mailId.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
//       newErrors.mailId = "Invalid email address"
//     }

//     if (formData.password.length < 6) {
//       newErrors.password = "Password must be at least 6 characters"
//     }

//     setErrors(newErrors)
//     return Object.keys(newErrors).length === 0
//   }, [formType, formData])

//   const showStatus = useCallback((type, message, duration = 2000) => {
//     setStatusAnimation({ type, message })
//     setTimeout(() => {
//       setStatusAnimation(null)
//     }, duration)
//   }, [])

//   const handleLogout = useCallback(() => {
//     showStatus("success", "Successfully logged out")
//     setTimeout(() => {
//       setIsAuthenticated(false)
//       setFormData({
//         firstName: "",
//         lastName: "",
//         mailId: "",
//         password: "",
//         confirmPassword: "",
//       })
//       setShowForm(false)
//       setFormType("login")
//       setShowOtpVerification(false)
//       setOtpValues(Array(6).fill(""))
//     }, 2000)
//   }, [showStatus])

//   const handleSubmit = useCallback(
//     async (e) => {
//       e.preventDefault()
//       if (!validateForm()) return

//       setIsLoading(true)
//       try {
//         const apiUrl = formType === "login" ? API_ENDPOINTS.LOGIN : API_ENDPOINTS.REGISTER
//         const response = await fetch(apiUrl, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(formData),
//         })

//         if (!response.ok) {
//           const errorData = await response.json()
//           throw new Error(errorData.message || "An error occurred")
//         }

//         const data = await response.json()

//         if (formType === "signup") {
//           showStatus("success", "Registration successful! Please verify your email.")
//           setShowOtpVerification(true)
//         } else {
//           showStatus("success", "Login successful! Please verify your email.")
//           setShowOtpVerification(true)
//         }
//       } catch (error) {
//         showStatus("error", error.message || `${formType === "login" ? "Login" : "Registration"} failed`)
//       } finally {
//         setIsLoading(false)
//       }
//     },
//     [formType, formData, validateForm, showStatus],
//   )

//   const handleOtpVerification = useCallback(
//     async (e) => {
//       e.preventDefault()
//       setIsLoading(true)
//       try {
//         const response = await fetch(API_ENDPOINTS.VERIFY_OTP, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             mailId: formData.mailId,
//             otp: otpValues.join(""),
//           }),
//         })

//         if (!response.ok) {
//           const errorData = await response.json()
//           throw new Error(errorData.message || "OTP verification failed")
//         }

//         showStatus("success", "Email verified successfully!")
//         setTimeout(() => {
//           setIsAuthenticated(true)
//           setShowForm(false)
//           setShowOtpVerification(false)
//         }, 2000)
//       } catch (error) {
//         showStatus("error", error.message)
//       } finally {
//         setIsLoading(false)
//       }
//     },
//     [formData.mailId, otpValues, showStatus],
//   )

//   const handleResendOtp = useCallback(async () => {
//     if (!canResend) return
//     try {
//       const response = await fetch(`${API_ENDPOINTS.RESEND_OTP}?mailId=${formData.mailId}`)
//       if (!response.ok) {
//         const errorData = await response.json()
//         throw new Error(errorData.message || "Failed to resend OTP")
//       }
//       showStatus("success", "New OTP sent successfully")
//       setResendTimer(30)
//       setCanResend(false)
//     } catch (error) {
//       showStatus("error", error.message)
//     }
//   }, [canResend, formData.mailId, showStatus])

//   const handleForgotPassword = useCallback(
//     async (e) => {
//       e.preventDefault()
//       setIsLoading(true)
//       try {
//         const response = await fetch(API_ENDPOINTS.FORGOT_PASSWORD, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ mailId: formData.mailId }),
//         })

//         if (!response.ok) {
//           const errorData = await response.json()
//           throw new Error(errorData.message || "Failed to process forgot password request")
//         }

//         const data = await response.json()
//         setResetToken(data.resetToken)
//         showStatus("success", "Password reset instructions sent to your email")
//         setShowForgotPassword(false)
//         setFormType("resetPassword")
//       } catch (error) {
//         showStatus("error", error.message)
//       } finally {
//         setIsLoading(false)
//       }
//     },
//     [formData.mailId, showStatus],
//   )

//   const handleResetPassword = useCallback(
//     async (e) => {
//       e.preventDefault()
//       if (formData.password !== formData.confirmPassword) {
//         setErrors({ ...errors, confirmPassword: "Passwords do not match" })
//         return
//       }
//       setIsLoading(true)
//       try {
//         const response = await fetch(API_ENDPOINTS.RESET_PASSWORD, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             resetToken,
//             newPassword: formData.password,
//           }),
//         })

//         if (!response.ok) {
//           const errorData = await response.json()
//           throw new Error(errorData.message || "Failed to reset password")
//         }

//         showStatus("success", "Password reset successfully")
//         setFormType("login")
//       } catch (error) {
//         showStatus("error", error.message)
//       } finally {
//         setIsLoading(false)
//       }
//     },
//     [formData.password, formData.confirmPassword, resetToken, showStatus],
//   )

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
//       <AnimatePresence>
//         {statusAnimation && <StatusAnimation type={statusAnimation.type} message={statusAnimation.message} />}

//         {!isAuthenticated ? (
//           <motion.button
//             onClick={() => setShowForm(true)}
//             className="px-7 py-2 bg-white text-blue-600 font-bold rounded-full shadow-lg hover:bg-blue-50 transition-all flex items-center gap-2"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <KeyRound size={20} />
//             Sign In
//           </motion.button>
//         ) : (
//           <motion.div variants={scaleIn} initial="hidden" animate="visible" exit="hidden">
//             <motion.button
//               onClick={handleLogout}
//               className="px-6 py-2 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:bg-blue-50 transition-all flex items-center justify-center gap-2"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <LogOut size={20} />
//               Sign Out
//             </motion.button>
//           </motion.div>
//         )}

//         {showForm && !isAuthenticated && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40"
//           >
//             <motion.div
//               variants={scaleIn}
//               initial="hidden"
//               animate="visible"
//               exit="hidden"
//               className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 relative"
//             >
//               <motion.button
//                 onClick={() => setShowForm(false)}
//                 className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//               >
//                 <X size={24} />
//               </motion.button>

//               {showOtpVerification ? (
//                 <motion.div variants={fadeIn} initial="hidden" animate="visible" className="text-center">
//                   <Mail className="mx-auto text-blue-600 mb-4" size={48} />
//                   <h2 className="text-2xl font-bold mb-2">Verify Your Email</h2>
//                   <p className="text-gray-600 mb-6">Enter the verification code sent to {formData.mailId}</p>

//                   <form onSubmit={handleOtpVerification} className="space-y-6">
//                     <OTPInput values={otpValues} onChange={setOtpValues} />

//                     <motion.button
//                       type="submit"
//                       disabled={isLoading || otpValues.join("").length !== 6}
//                       className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                     >
//                       {isLoading ? (
//                         <>
//                           <RefreshCcw className="animate-spin" size={20} />
//                           Verifying...
//                         </>
//                       ) : (
//                         "Verify Email"
//                       )}
//                     </motion.button>
//                   </form>

//                   <div className="mt-6">
//                     {canResend ? (
//                       <motion.button
//                         onClick={handleResendOtp}
//                         className="text-blue-600 font-semibold hover:underline flex items-center justify-center mx-auto"
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                       >
//                         <RefreshCcw size={20} className="mr-2" />
//                         Resend OTP
//                       </motion.button>
//                     ) : (
//                       <p className="text-gray-500">Resend OTP in {resendTimer} seconds</p>
//                     )}
//                   </div>
//                 </motion.div>
//               ) : showForgotPassword ? (
//                 <motion.div variants={fadeIn} initial="hidden" animate="visible">
//                   <h2 className="text-2xl font-bold mb-6 text-center">Forgot Password</h2>
//                   <form onSubmit={handleForgotPassword} className="space-y-4">
//                     <InputField
//                       icon={Mail}
//                       type="email"
//                       placeholder="Email"
//                       value={formData.mailId}
//                       onChange={(e) => setFormData({ ...formData, mailId: e.target.value })}
//                       error={errors.mailId}
//                     />
//                     <motion.button
//                       type="submit"
//                       disabled={isLoading}
//                       className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                     >
//                       {isLoading ? (
//                         <>
//                           <RefreshCcw className="animate-spin" size={20} />
//                           Sending...
//                         </>
//                       ) : (
//                         "Send Reset Instructions"
//                       )}
//                     </motion.button>
//                   </form>
//                   <p className="mt-4 text-center text-gray-600">
//                     Remember your password?{" "}
//                     <button
//                       onClick={() => setShowForgotPassword(false)}
//                       className="text-blue-600 font-semibold hover:underline"
//                     >
//                       Back to Login
//                     </button>
//                   </p>
//                 </motion.div>
//               ) : formType === "resetPassword" ? (
//                 <motion.div variants={fadeIn} initial="hidden" animate="visible">
//                   <h2 className="text-2xl font-bold mb-6 text-center">Reset Password</h2>
//                   <form onSubmit={handleResetPassword} className="space-y-4">
//                     <InputField
//                       icon={Lock}
//                       type="password"
//                       placeholder="New Password"
//                       value={formData.password}
//                       onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//                       error={errors.password}
//                     />
//                     <InputField
//                       icon={Lock}
//                       type="password"
//                       placeholder="Confirm New Password"
//                       value={formData.confirmPassword}
//                       onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
//                       error={errors.confirmPassword}
//                     />
//                     <motion.button
//                       type="submit"
//                       disabled={isLoading}
//                       className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                     >
//                       {isLoading ? (
//                         <>
//                           <RefreshCcw className="animate-spin" size={20} />
//                           Resetting...
//                         </>
//                       ) : (
//                         "Reset Password"
//                       )}
//                     </motion.button>
//                   </form>
//                 </motion.div>
//               ) : (
//                 <motion.div variants={fadeIn} initial="hidden" animate="visible">
//                   <h2 className="text-2xl font-bold mb-6 text-center">
//                     {formType === "login" ? "Welcome Back!" : "Create an Account"}
//                   </h2>
//                   <form onSubmit={handleSubmit} className="space-y-4">
//                     {formType === "signup" && (
//                       <>
//                         <InputField
//                           icon={User}
//                           type="text"
//                           placeholder="First Name"
//                           value={formData.firstName}
//                           onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
//                           error={errors.firstName}
//                         />
//                         <InputField
//                           icon={User}
//                           type="text"
//                           placeholder="Last Name"
//                           value={formData.lastName}
//                           onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
//                           error={errors.lastName}
//                         />
//                       </>
//                     )}
//                     <InputField
//                       icon={Mail}
//                       type="email"
//                       placeholder="Email"
//                       value={formData.mailId}
//                       onChange={(e) => setFormData({ ...formData, mailId: e.target.value })}
//                       error={errors.mailId}
//                     />
//                     <InputField
//                       icon={Lock}
//                       type="password"
//                       placeholder="Password"
//                       value={formData.password}
//                       onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//                       error={errors.password}
//                     />
//                     {formType === "signup" && (
//                       <InputField
//                         icon={Lock}
//                         type="password"
//                         placeholder="Confirm Password"
//                         value={formData.confirmPassword}
//                         onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
//                         error={errors.confirmPassword}
//                       />
//                     )}
//                     <motion.button
//                       type="submit"
//                       disabled={isLoading}
//                       className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                     >
//                       {isLoading ? (
//                         <>
//                           <RefreshCcw className="animate-spin" size={20} />
//                           {formType === "login" ? "Logging in..." : "Signing up..."}
//                         </>
//                       ) : (
//                         <>
//                           <ArrowRight size={20} />
//                           {formType === "login" ? "Login" : "Sign Up"}
//                         </>
//                       )}
//                     </motion.button>
//                   </form>
//                   <div className="mt-4 text-center text-gray-600">
//                     {formType === "login" ? (
//                       <>
//                         <p>
//                           Don't have an account?{" "}
//                           <button
//                             onClick={() => setFormType("signup")}
//                             className="text-blue-600 font-semibold hover:underline"
//                           >
//                             Sign up
//                           </button>
//                         </p>
//                         <p className="mt-2">
//                           <button
//                             onClick={() => setShowForgotPassword(true)}
//                             className="text-blue-600 font-semibold hover:underline"
//                           >
//                             Forgot password?
//                           </button>
//                         </p>
//                       </>
//                     ) : (
//                       <p>
//                         Already have an account?{" "}
//                         <button
//                           onClick={() => setFormType("login")}
//                           className="text-blue-600 font-semibold hover:underline"
//                         >
//                           Login
//                         </button>
//                       </p>
//                     )}
//                   </div>
//                 </motion.div>
//               )}
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   )
// }




// import React, { useState, useEffect, useCallback } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { Check, X, RefreshCcw, Mail, Lock, User, Eye, EyeOff, ArrowRight, LogOut, AlertCircle } from "lucide-react"

// // API Endpoints
// const API_ENDPOINTS = {
//   REGISTER: "https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1/register",
//   LOGIN: "https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1/login",
//   VERIFY_OTP: "https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1/verify-otp",
//   RESEND_OTP: "https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1/resend",
//   FORGOT_PASSWORD: "https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1/forgetPassword",
// }

// // Animation Variants
// const fadeIn = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0 },
// }

// const scaleIn = {
//   hidden: { scale: 0.9, opacity: 0 },
//   visible: { scale: 1, opacity: 1 },
// }

// // Social Icons
// const socialIcons = {
//   google: (
//     <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
//       <path
//         d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
//         fill="#4285F4"
//       />
//       <path
//         d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
//         fill="#34A853"
//       />
//       <path
//         d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
//         fill="#FBBC05"
//       />
//       <path
//         d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
//         fill="#EA4335"
//       />
//     </svg>
//   ),
//   twitter: (
//     <svg className="w-5 h-5" fill="#1DA1F2" viewBox="0 0 24 24">
//       <path d="M22 5.9c-.7.3-1.5.5-2.4.6.9-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1-.8-.8-1.8-1.3-3-1.3-2.3 0-4.1 1.9-4.1 4.1 0 .3 0 .6.1.9-3.4-.2-6.4-1.8-8.4-4.3-.4.6-.6 1.3-.6 2.1 0 1.4.7 2.7 1.8 3.4-.7 0-1.3-.2-1.9-.5v.1c0 2 1.4 3.7 3.3 4.1-.3.1-.7.1-1.1.1-.3 0-.5 0-.8-.1.5 1.6 2 2.8 3.8 2.8-1.4 1.1-3.2 1.8-5.1 1.8-.3 0-.7 0-1-.1 1.8 1.2 4 1.8 6.3 1.8 7.5 0 11.6-6.2 11.6-11.6v-.5c.8-.6 1.5-1.3 2-2.1z" />
//     </svg>
//   ),
//   facebook: (
//     <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
//       <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
//     </svg>
//   ),
// }

// // Input Field Component
// const InputField = React.memo(({ icon: Icon, type, error, ...props }) => {
//   const [showPassword, setShowPassword] = useState(false)

//   return (
//     <motion.div className="relative" variants={fadeIn}>
//       <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//       <input
//         {...props}
//         type={type === "password" && showPassword ? "text" : type}
//         className={`w-full pl-10 pr-10 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all ${
//           error ? "border-red-500 bg-red-50" : "border-gray-200"
//         }`}
//       />
//       {type === "password" && (
//         <button
//           type="button"
//           onClick={() => setShowPassword(!showPassword)}
//           className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-emerald-500 transition-colors"
//         >
//           {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//         </button>
//       )}
//       {error && (
//         <motion.p
//           initial={{ opacity: 0, y: -10 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -10 }}
//           className="text-red-500 text-xs mt-1 flex items-center"
//         >
//           <AlertCircle size={12} className="mr-1" />
//           {error}
//         </motion.p>
//       )}
//     </motion.div>
//   )
// })

// // Status Animation Component
// const StatusAnimation = React.memo(({ type, message }) => (
//   <motion.div
//     initial={{ opacity: 0 }}
//     animate={{ opacity: 1 }}
//     exit={{ opacity: 0 }}
//     className="fixed inset-0 flex flex-col items-center justify-center z-50 bg-black bg-opacity-50"
//   >
//     <motion.div
//       initial={{ scale: 0 }}
//       animate={{ scale: 1 }}
//       exit={{ scale: 0 }}
//       className={`bg-white rounded-full p-6 shadow-lg mb-4 ${type === "success" ? "text-emerald-500" : "text-red-500"}`}
//     >
//       {type === "success" ? <Check size={48} strokeWidth={3} /> : <X size={48} strokeWidth={3} />}
//     </motion.div>
//     <motion.div
//       initial={{ opacity: 0, y: 10 }}
//       animate={{ opacity: 1, y: 0 }}
//       className="bg-white rounded-lg p-4 shadow-lg"
//     >
//       <p className="text-lg font-semibold text-center">{type === "success" ? "Success" : "Error"}</p>
//       <p className="text-gray-600 text-center">{message}</p>
//     </motion.div>
//   </motion.div>
// ))

// // OTP Input Component
// const OTPInput = React.memo(({ values, onChange }) => {
//   const inputRefs = Array(6)
//     .fill(0)
//     .map(() => React.createRef())

//   const handleChange = useCallback(
//     (index, value) => {
//       if (value.length <= 1 && /^\d*$/.test(value)) {
//         const newValues = [...values]
//         newValues[index] = value
//         onChange(newValues)

//         if (value && index < 5) {
//           inputRefs[index + 1].current.focus()
//         }
//       }
//     },
//     [values, onChange, inputRefs],
//   )

//   const handleKeyDown = useCallback(
//     (index, e) => {
//       if (e.key === "Backspace" && !values[index] && index > 0) {
//         const newValues = [...values]
//         newValues[index - 1] = ""
//         onChange(newValues)
//         inputRefs[index - 1].current.focus()
//       }
//     },
//     [values, onChange, inputRefs],
//   )

//   const handlePaste = useCallback(
//     (e) => {
//       e.preventDefault()
//       const pastedData = e.clipboardData.getData("text/plain").slice(0, 6).replace(/\D/g, "")
//       const newValues = [...values]
//       for (let i = 0; i < pastedData.length; i++) {
//         newValues[i] = pastedData[i]
//       }
//       onChange(newValues)
//       if (pastedData.length === 6) {
//         inputRefs[5].current.focus()
//       } else {
//         inputRefs[pastedData.length].current.focus()
//       }
//     },
//     [values, onChange, inputRefs],
//   )

//   return (
//     <div className="flex justify-center space-x-3">
//       {values.map((value, index) => (
//         <motion.input
//           key={index}
//           ref={inputRefs[index]}
//           type="text"
//           value={value}
//           onChange={(e) => handleChange(index, e.target.value)}
//           onKeyDown={(e) => handleKeyDown(index, e)}
//           onPaste={handlePaste}
//           className="w-10 h-10 text-center text-lg font-semibold border rounded-lg focus:ring-2 focus:ring-emerald-500"
//           maxLength={1}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: index * 0.1 }}
//         />
//       ))}
//     </div>
//   )
// })

// // Main Authentication Component
// export default function AuthSystem() {
//   const [formType, setFormType] = useState("login")
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     mailId: "",
//     password: "",
//     confirmPassword: "",
//   })
//   const [errors, setErrors] = useState({})
//   const [isAuthenticated, setIsAuthenticated] = useState(false)
//   const [statusAnimation, setStatusAnimation] = useState(null)
//   const [isLoading, setIsLoading] = useState(false)
//   const [otpValues, setOtpValues] = useState(Array(6).fill(""))
//   const [resendTimer, setResendTimer] = useState(30)
//   const [canResend, setCanResend] = useState(false)
//   const [showOtpVerification, setShowOtpVerification] = useState(false)
//   const [showForgotPassword, setShowForgotPassword] = useState(false)
//   const [resetToken, setResetToken] = useState("")
//   const [currentSlide, setCurrentSlide] = useState(0)

//   const slides = [
//     {
//       image:
//         "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Day%20001%20-%20Login%20Form-jueEw4Ui2dwgDQow51XwTH5CzbEcDb.jpeg",
//       alt: "Profile 1",
//     },
//     {
//       image:
//         "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Day%20001%20-%20Login%20Form-jueEw4Ui2dwgDQow51XwTH5CzbEcDb.jpeg",
//       alt: "Profile 2",
//     },
//     {
//       image:
//         "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Day%20001%20-%20Login%20Form-jueEw4Ui2dwgDQow51XwTH5CzbEcDb.jpeg",
//       alt: "Profile 3",
//     },
//   ]

//   useEffect(() => {
//     let timer
//     if (resendTimer > 0) {
//       timer = setTimeout(() => setResendTimer((prev) => prev - 1), 1000)
//     } else {
//       setCanResend(true)
//     }
//     return () => clearTimeout(timer)
//   }, [resendTimer])

//   const validateForm = useCallback(() => {
//     const newErrors = {}

//     if (formType === "signup") {
//       if (!formData.firstName.trim()) newErrors.firstName = "First name is required"
//       if (!formData.lastName.trim()) newErrors.lastName = "Last name is required"
//       if (formData.password !== formData.confirmPassword) {
//         newErrors.confirmPassword = "Passwords do not match"
//       }
//     }

//     if (!formData.mailId.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
//       newErrors.mailId = "Invalid email address"
//     }

//     if (formData.password.length < 6) {
//       newErrors.password = "Password must be at least 6 characters"
//     }

//     setErrors(newErrors)
//     return Object.keys(newErrors).length === 0
//   }, [formType, formData])

//   const showStatus = useCallback((type, message, duration = 2000) => {
//     setStatusAnimation({ type, message })
//     setTimeout(() => {
//       setStatusAnimation(null)
//     }, duration)
//   }, [])

//   const handleLogout = useCallback(() => {
//     showStatus("success", "Successfully logged out")
//     setTimeout(() => {
//       setIsAuthenticated(false)
//       setFormData({
//         firstName: "",
//         lastName: "",
//         mailId: "",
//         password: "",
//         confirmPassword: "",
//       })
//       setShowOtpVerification(false)
//       setOtpValues(Array(6).fill(""))
//     }, 2000)
//   }, [showStatus])
//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     if (!validateForm()) return
  
//     setIsLoading(true)
  
//     try {
//       const apiUrl = formType === "login" ? API_ENDPOINTS.LOGIN : API_ENDPOINTS.REGISTER
//       const response = await fetch(apiUrl, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       })
  
//       const data = await response.json()
  
//       if (!response.ok) {
//         throw new Error(data.message || `${formType === "login" ? "Login" : "Registration"} failed`)
//       }
  
//       showStatus("success", "OTP sent successfully! Please verify.")
  
//       // Show OTP verification modal
//       setShowOtpVerification(true)
//     } catch (error) {
//       showStatus("error", error.message)
//     } finally {
//       setIsLoading(false)
//     }
//   }
  
// //   const handleSubmit = async (e) => {
// //     e.preventDefault()
// //     if (!validateForm()) return

// //     setIsLoading(true)
// //     try {
// //       const apiUrl = formType === "login" ? API_ENDPOINTS.LOGIN : API_ENDPOINTS.REGISTER
// //       const response = await fetch(apiUrl, {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify(formData),
// //       })

// //       const data = await response.json()

// //       if (!response.ok) {
// //         throw new Error(data.message || `${formType === "login" ? "Login" : "Registration"} failed`)
// //       }

// //       showStatus("success", `${formType === "login" ? "Login" : "Registration"} successful!`)
// //       if (formType === "signup") {
// //         setShowOtpVerification(true)
// //       } else {
// //         setTimeout(() => {
// //           setIsAuthenticated(true)
// //         }, 2000)
// //       }
// //     } catch (error) {
// //       showStatus("error", error.message)
// //     } finally {
// //       setIsLoading(false)
// //     }
// //   }
//   const handleOtpVerification = useCallback(
//     async (e) => {
//       e.preventDefault()
//       setIsLoading(true)
  
//       try {
//         const response = await fetch(API_ENDPOINTS.VERIFY_OTP, {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             mailId: formData.mailId,
//             otp: otpValues.join(""),
//           }),
//         })
  
//         const data = await response.json()
  
//         if (!response.ok) {
//           throw new Error(data.message || "OTP verification failed")
//         }
  
//         showStatus("success", "OTP verified successfully!")
  
//         setTimeout(() => {
//           setIsAuthenticated(true)
//           setShowOtpVerification(false)
//         }, 2000)
//       } catch (error) {
//         showStatus("error", error.message)
//       } finally {
//         setIsLoading(false)
//       }
//     },
//     [formData.mailId, otpValues, showStatus]
//   )
//   const handleResendOtp = useCallback(async () => {
//   if (!canResend) return
//   try {
//     const response = await fetch(`${API_ENDPOINTS.RESEND_OTP}?mailId=${formData.mailId}`)
//     if (!response.ok) {
//       const errorData = await response.json()
//       throw new Error(errorData.message || "Failed to resend OTP")
//     }
//     showStatus("success", "New OTP sent successfully")
//     setResendTimer(30)
//     setCanResend(false)
//   } catch (error) {
//     showStatus("error", error.message)
//   }
// }, [canResend, formData.mailId, showStatus])

// //   const handleOtpVerification = useCallback(
// //     async (e) => {
// //       e.preventDefault()
// //       setIsLoading(true)
// //       try {
// //         const response = await fetch(API_ENDPOINTS.VERIFY_OTP, {
// //           method: "POST",
// //           headers: {
// //             "Content-Type": "application/json",
// //           },
// //           body: JSON.stringify({
// //             mailId: formData.mailId,
// //             otp: otpValues.join(""),
// //           }),
// //         })

// //         const data = await response.json()

// //         if (!response.ok) {
// //           throw new Error(data.message || "OTP verification failed")
// //         }

// //         showStatus("success", "Email verified successfully!")
// //         setTimeout(() => {
// //           setIsAuthenticated(true)
// //           setShowOtpVerification(false)
// //         }, 2000)
// //       } catch (error) {
// //         showStatus("error", error.message)
// //       } finally {
// //         setIsLoading(false)
// //       }
// //     },
// //     [formData.mailId, otpValues, showStatus],
// //   )

// //   const handleResendOtp = useCallback(async () => {
// //     if (!canResend) return
// //     try {
// //       const response = await fetch(`${API_ENDPOINTS.RESEND_OTP}?mailId=${formData.mailId}`)
// //       if (!response.ok) {
// //         const errorData = await response.json()
// //         throw new Error(errorData.message || "Failed to resend OTP")
// //       }
// //       showStatus("success", "New OTP sent successfully")
// //       setResendTimer(30)
// //       setCanResend(false)
// //     } catch (error) {
// //       showStatus("error", error.message)
// //     }
// //   }, [canResend, formData.mailId, showStatus])

//   const handleForgotPassword = useCallback(
//     async (e) => {
//       e.preventDefault()
//       setIsLoading(true)
//       try {
//         const response = await fetch(API_ENDPOINTS.FORGOT_PASSWORD, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ mailId: formData.mailId }),
//         })

//         const data = await response.json()

//         if (!response.ok) {
//           throw new Error(data.message || "Failed to process forgot password request")
//         }

//         setResetToken(data.resetToken)
//         showStatus("success", "Password reset instructions sent to your email")
//         setShowForgotPassword(false)
//         setFormType("login")
//       } catch (error) {
//         showStatus("error", error.message)
//       } finally {
//         setIsLoading(false)
//       }
//     },
//     [formData.mailId, showStatus],
//   )

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 to-emerald-100">
//       <AnimatePresence>
//         {statusAnimation && <StatusAnimation type={statusAnimation.type} message={statusAnimation.message} />}

//         {!isAuthenticated ? (
//           <motion.div
//             variants={scaleIn}
//             initial="hidden"
//             animate="visible"
//             exit="hidden"
//             className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl flex overflow-hidden"
//           >
//             {/* Left Section */}
//             <div className="w-1/2 bg-gradient-to-br from-emerald-400 to-emerald-600 p-8 relative hidden md:block">
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.2 }}
//                 className="text-white"
//               >
//                 <h1 className="text-2xl font-semibold mb-4">Welcome to Our Platform!</h1>
//                 <p className="text-sm opacity-90 mb-8">Join our community and start your journey today.</p>
//               </motion.div>

//               {/* Profile Images */}
//               <div className="relative h-48">
//                 <AnimatePresence mode="wait">
//                   {slides.map(
//                     (slide, index) =>
//                       currentSlide === index && (
//                         <motion.div
//                           key={index}
//                           initial={{ opacity: 0, x: 20 }}
//                           animate={{ opacity: 1, x: 0 }}
//                           exit={{ opacity: 0, x: -20 }}
//                           transition={{ duration: 0.3 }}
//                           className="absolute"
//                           style={{
//                             left: `${(index % 3) * 30}%`,
//                             top: `${Math.floor(index / 3) * 30}%`,
//                           }}
//                         >
//                           <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm p-1">
//                             <div className="w-full h-full rounded-full bg-emerald-200" />
//                           </div>
//                         </motion.div>
//                       ),
//                   )}
//                 </AnimatePresence>
//               </div>

//               {/* Dots */}
//               <div className="absolute bottom-8 left-8 flex gap-2">
//                 {slides.map((_, index) => (
//                   <button
//                     key={index}
//                     onClick={() => setCurrentSlide(index)}
//                     className={`w-2 h-2 rounded-full transition-all ${
//                       currentSlide === index ? "bg-white w-4" : "bg-white/50"
//                     }`}
//                   />
//                 ))}
//               </div>
//             </div>

//             {/* Right Section */}
//             <div className="w-full md:w-1/2 p-8">
//               <div className="max-w-sm mx-auto">
//                 {showOtpVerification && (
//                   <motion.div variants={fadeIn} initial="hidden" animate="visible" className="text-center">
//                     <Mail className="mx-auto text-emerald-600 mb-4" size={48} />
//                     <h2 className="text-2xl font-bold mb-2">Verify Your Email</h2>
//                     <p className="text-gray-600 mb-6">Enter the verification code sent to {formData.mailId}</p>

//                     <form onSubmit={handleOtpVerification} className="space-y-6">
//                       <OTPInput values={otpValues} onChange={setOtpValues} />

//                       <motion.button
//                         type="submit"
//                         disabled={isLoading || otpValues.join("").length !== 6}
//                         className="w-full py-3 bg-emerald-600 text-white font-semibold rounded-lg shadow-md hover:bg-emerald-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                       >
//                         {isLoading ? (
//                           <>
//                             <RefreshCcw className="animate-spin" size={20} />
//                             Verifying...
//                           </>
//                         ) : (
//                           "Verify Email"
//                         )}
//                       </motion.button>
//                     </form>

//                     <div className="mt-6">
//                       {canResend ? (
//                         <motion.button
//                           onClick={handleResendOtp}
//                           className="text-emerald-600 font-semibold hover:underline flex items-center justify-center mx-auto"
//                           whileHover={{ scale: 1.05 }}
//                           whileTap={{ scale: 0.95 }}
//                         >
//                           <RefreshCcw size={20} className="mr-2" />
//                           Resend OTP
//                         </motion.button>
//                       ) : (
//                         <p className="text-gray-500">Resend OTP in {resendTimer} seconds</p>
//                       )}
//                     </div>
//                   </motion.div>
//                 )}
//                 {showForgotPassword ? (
//                   <motion.div variants={fadeIn} initial="hidden" animate="visible">
//                     <h2 className="text-2xl font-bold mb-6 text-center">Forgot Password</h2>
//                     <form onSubmit={handleForgotPassword} className="space-y-4">
//                       <InputField
//                         icon={Mail}
//                         type="email"
//                         placeholder="Email"
//                         value={formData.mailId}
//                         onChange={(e) => setFormData({ ...formData, mailId: e.target.value })}
//                         error={errors.mailId}
//                       />
//                       <motion.button
//                         type="submit"
//                         disabled={isLoading}
//                         className="w-full py-3 bg-emerald-600 text-white font-semibold rounded-lg shadow-md hover:bg-emerald-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                       >
//                         {isLoading ? (
//                           <>
//                             <RefreshCcw className="animate-spin" size={20} />
//                             Sending...
//                           </>
//                         ) : (
//                           "Send Reset Instructions"
//                         )}
//                       </motion.button>
//                     </form>
//                     <p className="mt-4 text-center text-gray-600">
//                       Remember your password?{" "}
//                       <button
//                         onClick={() => setShowForgotPassword(false)}
//                         className="text-emerald-600 font-semibold hover:underline"
//                       >
//                         Back to Login
//                       </button>
//                     </p>
//                   </motion.div>
//                 ) : (
//                   <motion.div variants={fadeIn} initial="hidden" animate="visible">
//                     <h2 className="text-2xl font-bold mb-6 text-center">
//                       {formType === "login" ? "Welcome Back!" : "Create an Account"}
//                     </h2>
//                     <form onSubmit={handleSubmit} className="space-y-4">
//                       {formType === "signup" && (
//                         <>
//                           <InputField
//                             icon={User}
//                             type="text"
//                             placeholder="First Name"
//                             value={formData.firstName}
//                             onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
//                             error={errors.firstName}
//                           />
//                           <InputField
//                             icon={User}
//                             type="text"
//                             placeholder="Last Name"
//                             value={formData.lastName}
//                             onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
//                             error={errors.lastName}
//                           />
//                         </>
//                       )}
//                       <InputField
//                         icon={Mail}
//                         type="email"
//                         placeholder="Email"
//                         value={formData.mailId}
//                         onChange={(e) => setFormData({ ...formData, mailId: e.target.value })}
//                         error={errors.mailId}
//                       />
//                       <InputField
//                         icon={Lock}
//                         type="password"
//                         placeholder="Password"
//                         value={formData.password}
//                         onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//                         error={errors.password}
//                       />
//                       {formType === "signup" && (
//                         <InputField
//                           icon={Lock}
//                           type="password"
//                           placeholder="Confirm Password"
//                           value={formData.confirmPassword}
//                           onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
//                           error={errors.confirmPassword}
//                         />
//                       )}
//                       <motion.button
//                         type="submit"
//                         disabled={isLoading}
//                         className="w-full py-3 bg-emerald-600 text-white font-semibold rounded-lg shadow-md hover:bg-emerald-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                       >
//                         {isLoading ? (
//                           <>
//                             <RefreshCcw className="animate-spin" size={20} />
//                             {formType === "login" ? "Logging in..." : "Signing up..."}
//                           </>
//                         ) : (
//                           <>
//                             <ArrowRight size={20} />
//                             {formType === "login" ? "Login" : "Sign Up"}
//                           </>
//                         )}
//                       </motion.button>
//                     </form>
//                     <div className="mt-4 text-center text-gray-600">
//                       {formType === "login" ? (
//                         <>
//                           <p>
//                             Don't have an account?{" "}
//                             <button
//                               onClick={() => setFormType("signup")}
//                               className="text-emerald-600 font-semibold hover:underline"
//                             >
//                               Sign up
//                             </button>
//                           </p>
//                           <p className="mt-2">
//                             <button
//                               onClick={() => setShowForgotPassword(true)}
//                               className="text-emerald-600 font-semibold hover:underline"
//                             >
//                               Forgot Password
//                             </button>
//                           </p>
//                         </>
//                       ) : (
//                         <p>
//                           Already have an account?{" "}
//                           <button
//                             onClick={() => setFormType("login")}
//                             className="text-emerald-600 font-semibold hover:underline"
//                           >
//                             Login
//                           </button>
//                         </p>
//                       )}
//                     </div>

//                     <div className="relative my-6">
//                       <div className="absolute inset-0 flex items-center">
//                         <div className="w-full border-t border-gray-200" />
//                       </div>
//                       <div className="relative flex justify-center text-xs uppercase">
//                         <span className="bg-white px-2 text-gray-500">
//                           Or sign {formType === "login" ? "in" : "up"} with
//                         </span>
//                       </div>
//                     </div>

//                     <div className="grid grid-cols-3 gap-3">
//                       {Object.entries(socialIcons).map(([name, icon]) => (
//                         <motion.button
//                           key={name}
//                           whileHover={{ scale: 1.05 }}
//                           whileTap={{ scale: 0.95 }}
//                           className="flex items-center justify-center py-2 px-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
//                         >
//                           {icon}
//                         </motion.button>
//                       ))}
//                     </div>
//                   </motion.div>
//                 )}
//               </div>
//             </div>
//           </motion.div>
//         ) : (
//           <motion.div
//             variants={scaleIn}
//             initial="hidden"
//             animate="visible"
//             exit="hidden"
//             className="bg-white rounded-2xl shadow-2xl p-8 text-center"
//           >
//             <h2 className="text-2xl font-bold mb-4">Welcome, {formData.firstName || "User"}!</h2>
//             <p className="text-gray-600 mb-6">You have successfully logged in.</p>
//             <motion.button
//               onClick={handleLogout}
//               className="px-6 py-2 bg-emerald-600 text-white font-semibold rounded-lg shadow-md hover:bg-emerald-700 transition-all flex items-center justify-center gap-2"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <LogOut size={20} />
//               Sign Out
//             </motion.button>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   )
// }







// import React, { useState, useEffect, useRef } from 'react';
// import { Check, Mail, Lock, User, RefreshCw, Eye, EyeOff, X } from 'lucide-react';
// import axios from 'axios';

// // API Configuration
// const API_CONFIG = {
//   BASE_URL: 'https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1',
//   ENDPOINTS: {
//     REGISTER: '/register',
//     LOGIN: '/login',
//     VERIFY_OTP: '/verify-otp',
//     RESEND_OTP: '/resend-otp'
//   },
//   TIMEOUT: 10000, // 10 seconds
//   HEADERS: {
//     'Content-Type': 'application/json',
//     'Accept': 'application/json'
//   }
// };

// // Create axios instance with default config
// const apiClient = axios.create({
//   baseURL: API_CONFIG.BASE_URL,
//   timeout: API_CONFIG.TIMEOUT,
//   headers: API_CONFIG.HEADERS
// });

// // API service functions
// const authService = {
//   login: (credentials) => apiClient.post(API_CONFIG.ENDPOINTS.LOGIN, credentials),
//   register: (userData) => apiClient.post(API_CONFIG.ENDPOINTS.REGISTER, userData),
//   verifyOtp: (otpData) => apiClient.post(API_CONFIG.ENDPOINTS.VERIFY_OTP, otpData),
//   resendOtp: (email) => apiClient.get(API_CONFIG.ENDPOINTS.RESEND_OTP, { mailId: email })
// };

// // Error handler utility
// const handleApiError = (error) => {
//   if (error.response) {
  
//     return error.response.data.message || 'Server error occurred';
//   } else if (error.request) {

//     return 'No response from server';
//   } else {

//     return 'Failed to make request';
//   }
// };

// const AuthForms = () => {
//   const [formType, setFormType] = useState('login');
//   const [showForm, setShowForm] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     mailId: '',
//     password: '',
//     confirmPassword: '',
//     otp: ''
//   });
//   const [resendTimer, setResendTimer] = useState(30);
//   const [canResend, setCanResend] = useState(false);
//   const [isOtpVerified, setIsOtpVerified] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState('');
//   const modalRef = useRef(null);

//   useEffect(() => {
//     if (resendTimer > 0) {
//       const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
//       return () => clearTimeout(timer);
//     } else {
//       setCanResend(true);
//     }
//   }, [resendTimer]);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (modalRef.current && !modalRef.current.contains(event.target)) {
//         setShowForm(false);
//       }
//     };

//     if (showForm) {
//       document.addEventListener('mousedown', handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [showForm]);

//   const handleChange = (e) => {
//     setError(''); // Clear any existing errors
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const validateForm = () => {
//     if (formType === 'signup') {
//       if (formData.password !== formData.confirmPassword) {
//         setError('Passwords do not match');
//         return false;
//       }
//       if (formData.password.length < 6) {
//         setError('Password must be at least 6 characters');
//         return false;
//       }
//     }
//     return true;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;
    
//     setIsLoading(true);
//     setError('');

//     try {
//       if (formType === 'login') {
//         const { data } = await authService.login({
//           mailId: formData.mailId,
//           password: formData.password
//         });
//         // Handle successful login
//         window.location.href = '/dashboard';
//       } else {
//         const { data } = await authService.register(formData);
//         setIsOtpVerified(false);
//       }
//     } catch (error) {
//       setError(handleApiError(error));
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleOtpSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError('');

//     try {
//       const { data } = await authService.verifyOtp({ otp: formData.otp });
//       setIsOtpVerified(true);
//       window.location.href = '/dashboard';
//     } catch (error) {
//       setError(handleApiError(error));
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleResendOtp = async () => {
//     if (!canResend) return;
    
//     setResendTimer(30);
//     setCanResend(false);
//     setError('');

//     try {
//       await authService.resendOtp(formData.mailId);
//     } catch (error) {
//       setError(handleApiError(error));
//       setCanResend(true);
//     }
//   };

//   return (
//     <div className="min-h-screen w-full">
//       {/* Fixed Button in Navbar */}
//       <nav className="fixed top-0 right-0 p-4 z-10">
//         <button 
//           onClick={() => setShowForm(true)}
//           className="px-6 py-2 bg-teal-600 text-white rounded-lg font-semibold shadow-lg hover:bg-teal-700 transition-all duration-300"
//         >
//           Sign In
//         </button>
//       </nav>

//       {/* Modal Overlay */}
//       {showForm && (
//         <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
//           <div 
//             ref={modalRef}
//             className="w-full max-w-md bg-white rounded-2xl shadow-2xl transform transition-all duration-500 relative"
//           >
//             {/* Close Button */}
//             <button 
//               onClick={() => setShowForm(false)}
//               className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
//             >
//               <X className="h-6 w-6" />
//             </button>

//             <div className="p-8">
//               <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
//                 {formType === 'login' ? 'Welcome Back' : 'Create Account'}
//               </h2>

//               {/* Error Display */}
//               {error && (
//                 <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 rounded-lg">
//                   {error}
//                 </div>
//               )}
              
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 {formType === 'signup' && (
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <div className="relative">
//                       <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
//                       <input 
//                         type="text"
//                         name="firstName"
//                         placeholder="First Name"
//                         className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
//                         value={formData.firstName}
//                         onChange={handleChange}
//                       />
//                     </div>
//                     <div className="relative">
//                       <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
//                       <input 
//                         type="text"
//                         name="lastName"
//                         placeholder="Last Name"
//                         className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
//                         value={formData.lastName}
//                         onChange={handleChange}
//                       />
//                     </div>
//                   </div>
//                 )}

//                 <div className="relative">
//                   <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
//                   <input 
//                     type="email"
//                     name="mailId"
//                     placeholder="Email Address"
//                     className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
//                     value={formData.mailId}
//                     onChange={handleChange}
//                   />
//                 </div>

//                 <div className="relative">
//                   <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
//                   <input 
//                     type={showPassword ? "text" : "password"}
//                     name="password"
//                     placeholder="Password"
//                     className="w-full pl-10 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
//                     value={formData.password}
//                     onChange={handleChange}
//                   />
//                   <button
//                     type="button"
//                     onClick={() => setShowPassword(!showPassword)}
//                     className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
//                   >
//                     {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
//                   </button>
//                 </div>

//                 {formType === 'signup' && (
//                   <div className="relative">
//                     <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
//                     <input 
//                       type={showPassword ? "text" : "password"}
//                       name="confirmPassword"
//                       placeholder="Confirm Password"
//                       className="w-full pl-10 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
//                       value={formData.confirmPassword}
//                       onChange={handleChange}
//                     />
//                   </div>
//                 )}

//                 <button 
//                   type="submit"
//                   className="w-full py-3 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 focus:ring-4 focus:ring-teal-200 transition-all duration-300 flex items-center justify-center"
//                   disabled={isLoading}
//                 >
//                   {isLoading ? (
//                     <RefreshCw className="h-5 w-5 animate-spin" />
//                   ) : (
//                     formType === 'login' ? 'Sign In' : 'Create Account'
//                   )}
//                 </button>
//               </form>

//               {/* OTP Verification Form */}
//               {formType === 'signup' && !isOtpVerified && (
//                 <div className="mt-6 space-y-4">
//                   <form onSubmit={handleOtpSubmit} className="space-y-4">
//                     <div className="relative">
//                       <input 
//                         type="text"
//                         name="otp"
//                         placeholder="Enter OTP"
//                         className="w-full pl-4 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
//                         value={formData.otp}
//                         onChange={handleChange}
//                       />
//                       {canResend && (
//                         <button 
//                           type="button"
//                           onClick={handleResendOtp}
//                           className="absolute right-3 top-1/2 -translate-y-1/2 text-teal-500 hover:text-teal-600"
//                         >
//                           <RefreshCw className="h-5 w-5" />
//                         </button>
//                       )}
//                     </div>
//                     <button 
//                       type="submit"
//                       className="w-full py-3 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 focus:ring-4 focus:ring-teal-200 transition-all duration-300 flex items-center justify-center"
//                       disabled={isLoading}
//                     >
//                       {isLoading ? (
//                         <RefreshCw className="h-5 w-5 animate-spin" />
//                       ) : (
//                         'Verify OTP'
//                       )}
//                     </button>
//                   </form>
//                   {!canResend && (
//                     <p className="text-sm text-gray-500 text-center">
//                       Resend OTP in {resendTimer}s
//                     </p>
//                   )}
//                 </div>
//               )}

//               <div className="mt-6 text-center">
//                 <button 
//                   onClick={() => {
//                     setFormType(formType === 'login' ? 'signup' : 'login');
//                     setError('');
//                   }}
//                   className="text-teal-600 hover:text-teal-700 font-medium"
//                 >
//                   {formType === 'login' ? "Don't have an account? Sign up" : 'Already have an account? Sign in'}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AuthForms;


// import { useState, useCallback, useRef, useEffect } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import {
//   RefreshCcw,
//   Mail,
//   Lock,
//   User,
//   ArrowRight,
//   LogOut,
//   LogIn,
//   X,
//   CheckCircle,
//   Shield,
//   Eye,
//   EyeOff,
//   AlertTriangle,
//   Check,
//   KeyRound,
//   Fingerprint,
//   ShieldCheck,
// } from "lucide-react"
// import ReCAPTCHA from "react-google-recaptcha"

// // Base URL for API endpoints
// const BASE_URL = "https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1"

// // API endpoints
// const API_ENDPOINTS = {
//   REGISTER: `${BASE_URL}/register`,
//   LOGIN: `${BASE_URL}/login`,
//   VERIFY_OTP: `${BASE_URL}/verify-otp`,
//   RESEND_OTP: `${BASE_URL}/resend-otp`,
//   FORGOT_PASSWORD: `${BASE_URL}/forgetPassword`,
//   VERIFY_RECAPTCHA: `${BASE_URL}/verify-recaptcha`,
// }

// // Fix for process.env - Use environment variables safely
// const RECAPTCHA_SITE_KEY = "6LeIfukqAAAAAOUyHtrYp3XExlP1MKRV-yCiaXuV" // Default test key

// // Utility functions
// const showStatus = (setStatusAnimation, type, message, duration = 2000) => {
//   setStatusAnimation({ type, message })
//   setTimeout(() => {
//     setStatusAnimation(null)
//   }, duration)
// }

// const validateEmail = (email) => {
//   if (!email) return "Email is required"
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
//   if (!emailRegex.test(email)) return "Invalid email format"
//   return undefined
// }

// const validatePassword = (password) => {
//   if (!password) return "Password is required"
//   if (password.length < 8) return "Password must be at least 8 characters long"
//   if (!/[A-Z]/.test(password)) return "Password must include at least one uppercase letter"
//   if (!/[a-z]/.test(password)) return "Password must include at least one lowercase letter"
//   if (!/[0-9]/.test(password)) return "Password must include at least one number"
//   if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(password))
//     return "Password must include at least one special character"
//   return undefined
// }

// const validateName = (name) => {
//   if (!name) return "Name is required"
//   if (name.length < 2) return "Name must be at least 2 characters long"
//   if (!/^[a-zA-Z\s-]+$/.test(name)) return "Name can only contain letters, spaces, and hyphens"
//   return undefined
// }

// // Enhanced rate limiter with secure storage and encryption
// const rateLimiter = (key, limit, timeWindow) => {
//   const now = Date.now()
//   const windowStart = now - timeWindow

//   // Use a more secure key format with a prefix and hash
//   const securePrefix = "auth_rate_limit_"
//   const keyString = `${securePrefix}${key}_${Math.floor(now / timeWindow)}`

//   try {
//     // Use sessionStorage instead of localStorage for better security
//     const storedData = sessionStorage.getItem(keyString)
//     const data = storedData ? JSON.parse(storedData) : { count: 0, timestamp: now }

//     if (data.timestamp < windowStart) {
//       data.count = 1
//       data.timestamp = now
//     } else {
//       data.count += 1
//     }

//     // Set expiration for the rate limit data
//     sessionStorage.setItem(keyString, JSON.stringify(data))

//     // Set a timeout to clean up the rate limit data
//     setTimeout(() => {
//       sessionStorage.removeItem(keyString)
//     }, timeWindow)

//     // Return both the result and the count for better feedback
//     return {
//       allowed: data.count <= limit,
//       remainingAttempts: Math.max(0, limit - data.count),
//       timeRemaining: Math.ceil((windowStart + timeWindow - now) / 1000), // seconds remaining
//     }
//   } catch (error) {
//     console.error("Rate limiter error:", error)
//     return { allowed: false, remainingAttempts: 0, timeRemaining: timeWindow / 1000 }
//   }
// }

// // Verify reCAPTCHA token with backend
// const verifyRecaptcha = async (token) => {
//   try {
//     const response = await fetch(API_ENDPOINTS.VERIFY_RECAPTCHA, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "X-Requested-With": "XMLHttpRequest", // Helps prevent CSRF
//       },
//       body: JSON.stringify({ token }),
//       // Remove credentials: "include" to avoid CORS issues
//     })

//     const data = await response.json()

//     if (!response.ok) {
//       throw new Error(data.message || "Failed to verify reCAPTCHA")
//     }

//     return data.success
//   } catch (error) {
//     console.error("reCAPTCHA verification error:", error)
//     return false
//   }
// }

// // Generate CSRF token with improved entropy
// const generateCSRFToken = () => {
//   // Generate a more secure token with higher entropy
//   const array = new Uint8Array(32)
//   window.crypto.getRandomValues(array)
//   const token = Array.from(array, (byte) => byte.toString(16).padStart(2, "0")).join("")

//   // Store in sessionStorage for better security
//   sessionStorage.setItem("csrfToken", token)
//   return token
// }

// // Get CSRF token
// const getCSRFToken = () => {
//   let token = sessionStorage.getItem("csrfToken")
//   if (!token) {
//     token = generateCSRFToken()
//   }
//   return token
// }

// // Input Field Component with enhanced security features
// const InputField = ({
//   icon: Icon,
//   type,
//   placeholder,
//   value,
//   onChange,
//   error,
//   validate,
//   autoComplete = "off",
//   required = true,
//   showPasswordStrength = false,
// }) => {
//   const [focused, setFocused] = useState(false)
//   const [localError, setLocalError] = useState(error)
//   const [showPassword, setShowPassword] = useState(false)
//   const [passwordStrength, setPasswordStrength] = useState(0)
//   const actualType = type === "password" && showPassword ? "text" : type
//   const inputRef = useRef(null)

//   useEffect(() => {
//     setLocalError(error)
//   }, [error])

//   useEffect(() => {
//     if (type === "password" && showPasswordStrength) {
//       // Calculate password strength
//       let strength = 0
//       if (value.length >= 8) strength += 1
//       if (/[A-Z]/.test(value)) strength += 1
//       if (/[a-z]/.test(value)) strength += 1
//       if (/[0-9]/.test(value)) strength += 1
//       if (/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(value)) strength += 1

//       setPasswordStrength(strength)
//     }
//   }, [value, type, showPasswordStrength])

//   const handleBlur = () => {
//     setFocused(false)
//     if (validate && value) {
//       const validationError = validate(value)
//       setLocalError(validationError)
//     }
//   }

//   const getStrengthColor = () => {
//     if (passwordStrength <= 1) return "bg-red-500"
//     if (passwordStrength <= 3) return "bg-yellow-500"
//     return "bg-green-500"
//   }

//   const getStrengthText = () => {
//     if (passwordStrength <= 1) return "Weak"
//     if (passwordStrength <= 3) return "Medium"
//     return "Strong"
//   }

//   // Security enhancement: Clear clipboard after paste for sensitive fields
//   const handlePaste = (e) => {
//     if (type === "password") {
//       // Allow paste but clear clipboard after a delay
//       setTimeout(() => {
//         try {
//           navigator.clipboard.writeText("")
//         } catch (err) {
//           console.error("Could not clear clipboard:", err)
//         }
//       }, 1000)
//     }
//   }

//   return (
//     <div className="space-y-1">
//       <div
//         className={`flex items-center border-2 rounded-lg overflow-hidden transition-all ${
//           focused ? "border-teal-500 shadow-md" : localError ? "border-red-400" : "border-gray-300"
//         }`}
//       >
//         <div className="flex items-center justify-center w-12 h-12 bg-gray-50 text-gray-500">
//           <Icon size={20} />
//         </div>
//         <input
//           ref={inputRef}
//           type={actualType}
//           placeholder={placeholder}
//           value={value}
//           onChange={onChange}
//           onFocus={() => setFocused(true)}
//           onBlur={handleBlur}
//           onPaste={handlePaste}
//           className="flex-1 h-12 px-4 bg-transparent outline-none"
//           autoComplete={autoComplete}
//           required={required}
//           aria-invalid={!!localError}
//           aria-describedby={localError ? `${placeholder}-error` : undefined}
//         />
//         {type === "password" && value && (
//           <button
//             type="button"
//             onClick={() => setShowPassword(!showPassword)}
//             className="px-3 text-gray-500 hover:text-gray-700"
//             aria-label={showPassword ? "Hide password" : "Show password"}
//           >
//             {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//           </button>
//         )}
//       </div>

//       {localError && (
//         <p id={`${placeholder}-error`} className="text-red-500 text-sm flex items-center gap-1" role="alert">
//           <AlertTriangle size={14} />
//           {localError}
//         </p>
//       )}

//       {type === "password" && showPasswordStrength && value && !localError && (
//         <div className="space-y-1">
//           <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
//             <div
//               className={`h-full transition-all ${getStrengthColor()}`}
//               style={{ width: `${(passwordStrength / 5) * 100}%` }}
//             />
//           </div>
//           <p
//             className={`text-xs flex items-center gap-1 ${
//               passwordStrength <= 1 ? "text-red-500" : passwordStrength <= 3 ? "text-yellow-500" : "text-green-500"
//             }`}
//           >
//             Password strength: {getStrengthText()}
//           </p>
//         </div>
//       )}
//     </div>
//   )
// }

// // Status Animation Component with improved accessibility
// const StatusAnimation = ({ type, message }) => {
//   const variants = {
//     initial: { opacity: 0, y: -20 },
//     animate: { opacity: 1, y: 0 },
//     exit: { opacity: 0, y: -20 },
//   }

//   const getIcon = () => {
//     switch (type) {
//       case "success":
//         return <CheckCircle className="w-6 h-6" />
//       case "error":
//         return <AlertTriangle className="w-6 h-6" />
//       default:
//         return <RefreshCcw className="w-6 h-6 animate-spin" />
//     }
//   }

//   const getColors = () => {
//     switch (type) {
//       case "success":
//         return "bg-green-100 text-green-800 border-green-200"
//       case "error":
//         return "bg-red-100 text-red-800 border-red-200"
//       default:
//         return "bg-blue-100 text-blue-800 border-blue-200"
//     }
//   }

//   return (
//     <motion.div
//       variants={variants}
//       initial="initial"
//       animate="animate"
//       exit="exit"
//       className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg border ${getColors()} flex items-center gap-3 max-w-md`}
//       role="alert"
//       aria-live="assertive"
//     >
//       {getIcon()}
//       <p>{message}</p>
//     </motion.div>
//   )
// }

// // Image Slider Component with improved performance
// const ImageSlider = () => {
//   const images = [
//     "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//     "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//     "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//   ]

//   const [currentIndex, setCurrentIndex] = useState(0)
//   const [isLoaded, setIsLoaded] = useState(false)

//   useEffect(() => {
//     // Preload images for smoother transitions
//     const preloadImages = () => {
//       images.forEach((src) => {
//         const img = new Image()
//         img.src = src
//         img.onload = () => setIsLoaded(true)
//       })
//     }
//     preloadImages()

//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
//     }, 5000)

//     return () => clearInterval(interval)
//   }, [images.length])

//   return (
//     <div className="w-full h-full">
//       {isLoaded ? (
//         <AnimatePresence mode="wait">
//           <motion.img
//             key={currentIndex}
//             src={images[currentIndex]}
//             alt={`Slide ${currentIndex + 1}`}
//             className="w-full h-full object-cover"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.5 }}
//           />
//         </AnimatePresence>
//       ) : (
//         <div className="w-full h-full bg-gray-200 animate-pulse"></div>
//       )}

//       <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-30">
//         {images.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentIndex(index)}
//             className={`w-2 h-2 rounded-full ${index === currentIndex ? "bg-white" : "bg-white/50"}`}
//             aria-label={`Go to slide ${index + 1}`}
//             aria-current={index === currentIndex ? "true" : "false"}
//           />
//         ))}
//       </div>
//     </div>
//   )
// }

// // OTP Verification Modal Component with enhanced security
// const OtpVerificationModal = ({ isOpen, onClose, onVerify, onResend, email, purpose }) => {
//   const [otp, setOtp] = useState(["", "", "", "", "", ""])
//   const [isLoading, setIsLoading] = useState(false)
//   const [otpError, setOtpError] = useState("")
//   const [isVerified, setIsVerified] = useState(false)
//   const [recaptchaToken, setRecaptchaToken] = useState("")
//   const [resendDisabled, setResendDisabled] = useState(false)
//   const [resendCountdown, setResendCountdown] = useState(0)
//   const [otpExpiry, setOtpExpiry] = useState(300) // 5 minutes in seconds
//   const inputRefs = useRef([])
//   const recaptchaRef = useRef(null)

//   useEffect(() => {
//     if (isOpen) {
//       setOtp(["", "", "", "", "", ""])
//       setIsVerified(false)
//       setOtpError("")
//       setRecaptchaToken("")
//       setOtpExpiry(300) // Reset OTP expiry
//       if (inputRefs.current[0]) {
//         inputRefs.current[0].focus()
//       }
//       if (recaptchaRef.current) {
//         recaptchaRef.current.reset()
//       }
//     }
//   }, [isOpen])

//   useEffect(() => {
//     if (otp.every((digit) => digit !== "") && recaptchaToken) {
//       handleSubmit()
//     }
//   }, [otp, recaptchaToken])

//   useEffect(() => {
//     let interval
//     if (resendCountdown > 0) {
//       interval = setInterval(() => {
//         setResendCountdown((prev) => prev - 1)
//       }, 1000)
//     } else {
//       setResendDisabled(false)
//     }

//     return () => clearInterval(interval)
//   }, [resendCountdown])

//   // OTP expiry countdown
//   useEffect(() => {
//     let interval
//     if (isOpen && otpExpiry > 0) {
//       interval = setInterval(() => {
//         setOtpExpiry((prev) => {
//           if (prev <= 1) {
//             setOtpError("OTP has expired. Please request a new one.")
//             return 0
//           }
//           return prev - 1
//         })
//       }, 1000)
//     }

//     return () => clearInterval(interval)
//   }, [isOpen, otpExpiry])

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

//   const handleRecaptchaChange = (token) => {
//     setRecaptchaToken(token)
//     if (otp.every((digit) => digit !== "")) {
//       handleSubmit()
//     }
//   }

//   const handleSubmit = async () => {
//     if (!recaptchaToken) {
//       setOtpError("Please verify that you are not a robot")
//       return
//     }

//     if (otpExpiry <= 0) {
//       setOtpError("OTP has expired. Please request a new one.")
//       return
//     }

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
//       setOtpError(error.message || "Failed to verify OTP")
//       if (recaptchaRef.current) {
//         recaptchaRef.current.reset()
//         setRecaptchaToken("")
//       }
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   const handleResend = () => {
//     if (resendDisabled) return

//     if (!recaptchaToken) {
//       setOtpError("Please verify that you are not a robot before resending OTP")
//       return
//     }

//     onResend()
//     setResendDisabled(true)
//     setResendCountdown(60) // 60 seconds cooldown
//     setOtpExpiry(300) // Reset OTP expiry to 5 minutes
//     setOtpError("") // Clear any existing errors

//     if (recaptchaRef.current) {
//       recaptchaRef.current.reset()
//       setRecaptchaToken("")
//     }
//   }

//   // Format time remaining
//   const formatTimeRemaining = (seconds) => {
//     const mins = Math.floor(seconds / 60)
//     const secs = seconds % 60
//     return `${mins}:${secs.toString().padStart(2, "0")}`
//   }

//   if (!isOpen) return null

//   return (
//     <AnimatePresence>
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
//         onClick={(e) => e.target === e.currentTarget && onClose()}
//       >
//         <motion.div
//           initial={{ scale: 0.95, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           exit={{ scale: 0.95, opacity: 0 }}
//           className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md"
//           onClick={(e) => e.stopPropagation()}
//         >
//           <h2 className="text-2xl font-bold mb-4 text-center text-teal-900">
//             {purpose === "resetPassword" ? "Reset Password OTP Verification" : "OTP Verification"}
//           </h2>
//           <p className="text-center text-gray-600 mb-6">
//             {purpose === "resetPassword"
//               ? "Enter the OTP sent to your email to reset your password."
//               : "Enter the OTP sent to your email to verify your account."}
//           </p>

//           <div className="flex items-center justify-center mb-4">
//             <div className="bg-teal-50 text-teal-700 px-3 py-1 rounded-full text-sm flex items-center gap-1">
//               <Mail size={14} />
//               <span className="font-medium">{email}</span>
//             </div>
//           </div>

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
//                 <motion.div
//                   initial={{ opacity: 0, y: -10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg relative mb-4 flex items-center gap-2"
//                   role="alert"
//                 >
//                   <AlertTriangle size={18} />
//                   <span className="block sm:inline">{otpError}</span>
//                 </motion.div>
//               )}

//               <div className="text-center mb-2">
//                 <p className="text-sm text-gray-500">Enter 6-digit OTP</p>
//                 {otpExpiry > 0 && (
//                   <p className="text-xs text-teal-700 mt-1">
//                     OTP expires in <span className="font-semibold">{formatTimeRemaining(otpExpiry)}</span>
//                   </p>
//                 )}
//               </div>

//               <div className="flex justify-center gap-2 mb-6">
//                 {otp.map((data, index) => (
//                   <motion.input
//                     key={index}
//                     ref={(el) => (inputRefs.current[index] = el)}
//                     type="text"
//                     inputMode="numeric"
//                     maxLength="1"
//                     value={data}
//                     onChange={(e) => handleChange(e.target, index)}
//                     onFocus={(e) => e.target.select()}
//                     onKeyDown={(e) => handleBackspace(e, index)}
//                     className="w-12 h-12 border-2 rounded-lg text-center text-xl font-semibold focus:border-teal-500 focus:outline-none"
//                     whileFocus={{ scale: 1.05, borderColor: "#14b8a6" }}
//                     aria-label={`OTP digit ${index + 1}`}
//                   />
//                 ))}
//               </div>

//               <div className="flex justify-center my-4">
//                 <div className="recaptcha-container">
//                   <ReCAPTCHA
//                     ref={recaptchaRef}
//                     sitekey={RECAPTCHA_SITE_KEY}
//                     onChange={handleRecaptchaChange}
//                     theme="light"
//                     size="normal"
//                   />
//                 </div>
//               </div>

//               <div className="flex items-center justify-center mb-4">
//                 <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm flex items-center gap-1">
//                   <Shield size={14} />
//                   <span className="font-medium">Secured with reCAPTCHA</span>
//                 </div>
//               </div>
//             </>
//           )}

//           <p className="mt-4 text-center text-gray-600">
//             Didn't receive the OTP?{" "}
//             <button
//               onClick={handleResend}
//               className={`text-teal-900 font-semibold hover:underline ${resendDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
//               disabled={resendDisabled}
//               aria-disabled={resendDisabled}
//             >
//               {resendDisabled ? `Resend OTP (${resendCountdown}s)` : "Resend OTP"}
//             </button>
//           </p>

//           <div className="mt-6 flex gap-3">
//             <button
//               onClick={onClose}
//               className="flex-1 py-2.5 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition-all"
//             >
//               Cancel
//             </button>

//             {!isVerified && (
//               <button
//                 onClick={handleSubmit}
//                 disabled={!otp.every((digit) => digit !== "") || !recaptchaToken || isLoading || otpExpiry <= 0}
//                 className="flex-1 py-2.5 bg-teal-900 text-white font-semibold rounded-lg hover:bg-teal-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
//                 aria-disabled={!otp.every((digit) => digit !== "") || !recaptchaToken || isLoading || otpExpiry <= 0}
//               >
//                 {isLoading ? (
//                   <>
//                     <RefreshCcw className="animate-spin" size={18} />
//                     Verifying...
//                   </>
//                 ) : (
//                   "Verify OTP"
//                 )}
//               </button>
//             )}
//           </div>
//         </motion.div>
//       </motion.div>
//     </AnimatePresence>
//   )
// }

// // Security Features Component
// const SecurityFeatures = () => {
//   return (
//     <div className="bg-gradient-to-br from-teal-900/30 to-blue-900/30 backdrop-blur-sm p-4 rounded-xl mt-4 border border-white/10">
//       <h3 className="text-sm font-semibold text-white mb-2 flex items-center gap-1">
//         <ShieldCheck size={16} />
//         Enhanced Security Features
//       </h3>
//       <div className="grid grid-cols-2 gap-2">
//         <div className="flex items-center gap-1 text-xs text-white/90">
//           <KeyRound size={12} className="text-white/80" />
//           <span>CSRF Protection</span>
//         </div>
//         <div className="flex items-center gap-1 text-xs text-white/90">
//           <Fingerprint size={12} className="text-white/80" />
//           <span>reCAPTCHA Verification</span>
//         </div>
//         <div className="flex items-center gap-1 text-xs text-white/90">
//           <Shield size={12} className="text-white/80" />
//           <span>Rate Limiting</span>
//         </div>
//         <div className="flex items-center gap-1 text-xs text-white/90">
//           <Lock size={12} className="text-white/80" />
//           <span>OTP Authentication</span>
//         </div>
//       </div>
//     </div>
//   )
// }

// // Main Authentication System Component
// export default function EnhancedAuthSystem() {
//   const [showForm, setShowForm] = useState(false)
//   const [formType, setFormType] = useState("login")
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     mailId: "",
//     password: "",
//     confirmPassword: "",
//   })
//   const [errors, setErrors] = useState({})
//   const [isAuthenticated, setIsAuthenticated] = useState(false)
//   const [statusAnimation, setStatusAnimation] = useState(null)
//   const [isLoading, setIsLoading] = useState(false)
//   const [showOtpVerification, setShowOtpVerification] = useState(false)
//   const [showForgotPassword, setShowForgotPassword] = useState(false)
//   const [otpPurpose, setOtpPurpose] = useState("")
//   const [recaptchaToken, setRecaptchaToken] = useState("")
//   const [csrfToken, setCsrfToken] = useState("")
//   const [passwordScore, setPasswordScore] = useState(0)
//   const [showPasswordRequirements, setShowPasswordRequirements] = useState(false)
//   const [loginAttempts, setLoginAttempts] = useState(0)
//   const [deviceFingerprint, setDeviceFingerprint] = useState("")
//   const recaptchaRef = useRef(null)
//   const navigate = useRef(() => {
//     console.log("Navigation would happen here in a real app")
//   }).current

//   // Generate device fingerprint for additional security
//   useEffect(() => {
//     const generateFingerprint = async () => {
//       try {
//         // Simple fingerprinting based on available browser data
//         const fingerprint = {
//           userAgent: navigator.userAgent,
//           language: navigator.language,
//           screenResolution: `${window.screen.width}x${window.screen.height}`,
//           timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
//           colorDepth: window.screen.colorDepth,
//         }

//         // Create a hash of the fingerprint
//         const fingerprintString = JSON.stringify(fingerprint)
//         const encoder = new TextEncoder()
//         const data = encoder.encode(fingerprintString)
//         const hashBuffer = await crypto.subtle.digest("SHA-256", data)
//         const hashArray = Array.from(new Uint8Array(hashBuffer))
//         const hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("")

//         setDeviceFingerprint(hashHex)
//       } catch (error) {
//         console.error("Error generating device fingerprint:", error)
//       }
//     }

//     generateFingerprint()
//   }, [])

//   // Check if user is already authenticated
//   useEffect(() => {
//     const storedAuth = localStorage.getItem("isAuthenticated")
//     if (storedAuth === "true") {
//       setIsAuthenticated(true)
//     }

//     // Generate CSRF token on component mount
//     setCsrfToken(generateCSRFToken())
//   }, [])

//   const resetFormData = useCallback(() => {
//     setFormData({
//       firstName: "",
//       lastName: "",
//       mailId: "",
//       password: "",
//       confirmPassword: "",
//     })
//     setErrors({})
//     setRecaptchaToken("")
//     setShowPasswordRequirements(false)
//     if (recaptchaRef.current) {
//       recaptchaRef.current.reset()
//     }
//   }, [])

//   const resetFormDataRef = useRef(resetFormData)

//   useEffect(() => {
//     resetFormDataRef.current = resetFormData
//   }, [resetFormData])

//   const validateForm = useCallback(() => {
//     const newErrors = {}

//     if (formType === "signup") {
//       newErrors.firstName = validateName(formData.firstName)
//       newErrors.lastName = validateName(formData.lastName)
//     }

//     newErrors.mailId = validateEmail(formData.mailId)
//     newErrors.password = validatePassword(formData.password)

//     if (formType === "signup") {
//       if (formData.password !== formData.confirmPassword) {
//         newErrors.confirmPassword = "Passwords do not match"
//       }
//     }

//     if (!recaptchaToken) {
//       newErrors.recaptcha = "Please verify that you are not a robot"
//     }

//     setErrors(newErrors)
//     return Object.values(newErrors).every((error) => !error)
//   }, [formType, formData, recaptchaToken])

//   const showStatusCallback = useCallback((type, message, duration = 2000) => {
//     showStatus(setStatusAnimation, type, message, duration)
//   }, [])

//   const handleLogout = useCallback(() => {
//     showStatusCallback("success", "Successfully logged out")
//     setTimeout(() => {
//       setIsAuthenticated(false)
//       localStorage.removeItem("isAuthenticated")
//       sessionStorage.removeItem("authToken")
//       resetFormDataRef.current()
//       setShowOtpVerification(false)
//       setShowForm(false)
//     }, 2000)
//   }, [showStatusCallback])

//   const handleRecaptchaChange = (token) => {
//     setRecaptchaToken(token)
//     if (!token) {
//       setErrors((prev) => ({ ...prev, recaptcha: "Please verify that you are not a robot" }))
//     } else {
//       setErrors((prev) => {
//         const newErrors = { ...prev }
//         delete newErrors.recaptcha
//         return newErrors
//       })
//     }
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     if (!validateForm()) return

//     // Check rate limiting
//     const rateLimitKey = `${formType}_${formData.mailId}`
//     const rateLimitResult = rateLimiter(rateLimitKey, 5, 60000) // 5 attempts per minute

//     if (!rateLimitResult.allowed) {
//       showStatusCallback(
//         "error",
//         `Too many attempts. Please try again in ${Math.ceil(rateLimitResult.timeRemaining)} seconds.`,
//       )
//       return
//     }

//     setIsLoading(true)

//     try {
//       const apiUrl = formType === "login" ? API_ENDPOINTS.LOGIN : API_ENDPOINTS.REGISTER
//       const response = await fetch(apiUrl, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "X-CSRF-Token": csrfToken,
//           "X-Device-Fingerprint": deviceFingerprint,
//         },
//         body: JSON.stringify({
//           ...formData,
//           recaptchaToken,
//         }),
//         // Remove credentials: "include" to avoid CORS issues
//       })

//       const data = await response.json()

//       if (!response.ok) {
//         if (formType === "login") {
//           setLoginAttempts((prev) => prev + 1)
//         }
//         throw new Error(data.message || `${formType === "login" ? "Login" : "Registration"} failed`)
//       }

//       setOtpPurpose(formType === "login" ? "login" : "signup")
//       setShowOtpVerification(true)
//     } catch (error) {
//       showStatusCallback("error", error.message)
//       if (recaptchaRef.current) {
//         recaptchaRef.current.reset()
//         setRecaptchaToken("")
//       }
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   const handleOtpVerification = useCallback(
//     async (otp) => {
//       try {
//         let endpoint = API_ENDPOINTS.VERIFY_OTP
//         let body = {
//           mailId: formData.mailId,
//           otp: otp,
//           recaptchaToken,
//           csrfToken,
//           deviceFingerprint,
//         }

//         if (otpPurpose === "resetPassword") {
//           endpoint = API_ENDPOINTS.VERIFY_RESET_PASSWORD_OTP
//           body = {
//             ...body,
//             password: formData.password,
//             confirmPassword: formData.confirmPassword,
//           }
//         }

//         const response = await fetch(endpoint, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             "X-CSRF-Token": csrfToken,
//             "X-Device-Fingerprint": deviceFingerprint,
//           },
//           body: JSON.stringify(body),
//           // Remove credentials: "include" to avoid CORS issues
//         })

//         const data = await response.json()

//         if (!response.ok) {
//           throw new Error(data.message || "OTP verification failed")
//         }

//         setShowOtpVerification(false)

//         if (otpPurpose === "resetPassword") {
//           showStatusCallback("success", "Password reset successful! Please login with your new password.")
//           resetFormDataRef.current()
//           setShowForgotPassword(false)
//           setOtpPurpose("")
//           setTimeout(() => {
//             setFormType("login")
//             setShowForm(true)
//           }, 100)
//         } else {
//           showStatusCallback("success", "Authentication successful!")
//           sessionStorage.setItem("authToken", data.token)
//           setIsAuthenticated(true)
//           localStorage.setItem("isAuthenticated", "true")
//           resetFormDataRef.current()
//           setShowOtpVerification(false)
//           setShowForm(false)

//           // Redirect to student portal after OTP verification
//           navigate("/student-portal")
//         }
//       } catch (error) {
//         showStatusCallback("error", error.message)
//         if (recaptchaRef.current) {
//           recaptchaRef.current.reset()
//           setRecaptchaToken("")
//         }
//       } finally {
//         setIsLoading(false)
//       }
//     },
//     [formData, otpPurpose, showStatusCallback, navigate, recaptchaToken, csrfToken, deviceFingerprint],
//   )

//   const handleForgotPassword = async (e) => {
//     e.preventDefault()
//     if (!validateForm()) return

//     // Check rate limiting
//     const rateLimitKey = `forgot_password_${formData.mailId}`
//     const rateLimitResult = rateLimiter(rateLimitKey, 3, 300000) // 3 attempts per 5 minutes

//     if (!rateLimitResult.allowed) {
//       showStatusCallback(
//         "error",
//         `Too many attempts. Please try again in ${Math.ceil(rateLimitResult.timeRemaining / 60)} minutes. Remaining attempts: ${rateLimitResult.remainingAttempts}`,
//       )
//       return
//     }

//     setIsLoading(true)

//     try {
//       const response = await fetch(API_ENDPOINTS.FORGOT_PASSWORD, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "X-CSRF-Token": csrfToken,
//           "X-Device-Fingerprint": deviceFingerprint,
//         },
//         body: JSON.stringify({
//           mailId: formData.mailId,
//           newPassword: formData.password,
//           confirmNewPassword: formData.confirmPassword,
//           recaptchaToken,
//         }),
//         // Remove credentials: "include" to avoid CORS issues
//       })

//       const data = await response.json()

//       if (!response.ok) {
//         throw new Error(data.message || "Failed to process forgot password request")
//       }

//       showStatusCallback("success", "Password reset email sent. Please check your inbox.")
//       setOtpPurpose("resetPassword")
//       setShowOtpVerification(true)
//     } catch (error) {
//       showStatusCallback("error", error.message)
//       if (recaptchaRef.current) {
//         recaptchaRef.current.reset()
//         setRecaptchaToken("")
//       }
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   const handleFormTypeChange = useCallback((type) => {
//     resetFormDataRef.current()
//     setFormType(type)
//   }, [])

//   const toggleForgotPassword = useCallback((show) => {
//     resetFormDataRef.current()
//     setShowForgotPassword(show)
//   }, [])

//   const handleResendOtp = async () => {
//     if (!recaptchaToken) {
//       showStatusCallback("error", "Please verify that you are not a robot")
//       return
//     }

//     // Check rate limiting for OTP resend
//     const rateLimitKey = `resend_otp_${formData.mailId}`
//     const rateLimitResult = rateLimiter(rateLimitKey, 3, 300000) // 3 attempts per 5 minutes

//     if (!rateLimitResult.allowed) {
//       showStatusCallback(
//         "error",
//         `Too many resend attempts. Please try again in ${Math.ceil(rateLimitResult.timeRemaining / 60)} minutes. Remaining attempts: ${rateLimitResult.remainingAttempts}`,
//       )
//       return
//     }

//     setIsLoading(true)
//     try {
//       const response = await fetch(API_ENDPOINTS.RESEND_OTP, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "X-CSRF-Token": csrfToken,
//           "X-Device-Fingerprint": deviceFingerprint,
//         },
//         body: JSON.stringify({
//           mailId: formData.mailId,
//           recaptchaToken,
//           purpose: otpPurpose,
//         }),
//         // Remove credentials: "include" to avoid CORS issues
//       })

//       const data = await response.json()

//       if (!response.ok) {
//         throw new Error(data.message || "Failed to resend OTP")
//       }

//       showStatusCallback("success", "OTP resent successfully!")
//     } catch (error) {
//       showStatusCallback("error", error.message)
//       if (recaptchaRef.current) {
//         recaptchaRef.current.reset()
//         setRecaptchaToken("")
//       }
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   // Password requirements component
//   const PasswordRequirements = () => {
//     const requirements = [
//       { text: "At least 8 characters", met: formData.password.length >= 8 },
//       { text: "At least one uppercase letter", met: /[A-Z]/.test(formData.password) },
//       { text: "At least one lowercase letter", met: /[a-z]/.test(formData.password) },
//       { text: "At least one number", met: /[0-9]/.test(formData.password) },
//       { text: "At least one special character", met: /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(formData.password) },
//     ]

//     return (
//       <motion.div
//         initial={{ opacity: 0, height: 0 }}
//         animate={{ opacity: 1, height: "auto" }}
//         exit={{ opacity: 0, height: 0 }}
//         className="bg-gray-50 p-3 rounded-lg mt-1 mb-3"
//       >
//         <p className="text-sm font-medium text-gray-700 mb-2">Password must contain:</p>
//         <ul className="space-y-1">
//           {requirements.map((req, index) => (
//             <li key={index} className="flex items-center gap-2 text-sm">
//               <span
//                 className={`flex-shrink-0 w-5 h-5 flex items-center justify-center rounded-full ${
//                   req.met ? "bg-green-100 text-green-600" : "bg-gray-200 text-gray-400"
//                 }`}
//               >
//                 {req.met ? <Check size={12} /> : ""}
//               </span>
//               <span className={req.met ? "text-green-600" : "text-gray-500"}>{req.text}</span>
//             </li>
//           ))}
//         </ul>
//       </motion.div>
//     )
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-teal-50 to-blue-50">
//       <AnimatePresence>
//         {statusAnimation && <StatusAnimation type={statusAnimation.type} message={statusAnimation.message} />}

//         {!isAuthenticated ? (
//           <motion.button
//             onClick={() => {
//               resetFormDataRef.current()
//               setShowForm(true)
//             }}
//             className="px-6 py-3 bg-teal-900 text-white font-semibold rounded-full shadow-lg hover:bg-teal-800 transition-all flex items-center justify-center gap-2"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <LogIn size={18} />
//             Sign In
//           </motion.button>
//         ) : (
//           <motion.button
//             onClick={handleLogout}
//             className="px-6 py-3 bg-teal-900 text-white font-semibold rounded-full shadow-lg hover:bg-teal-800 transition-all flex items-center justify-center gap-2"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <LogOut size={18} />
//             Sign Out
//           </motion.button>
//         )}

//         <AnimatePresence>
//           {showForm && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-2 z-50 overflow-y-auto"
//               onClick={() => {
//                 resetFormDataRef.current()
//                 setShowForm(false)
//               }}
//             >
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.95 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.95 }}
//                 className="bg-white/90 backdrop-blur-md rounded-xl shadow-2xl w-full max-w-lg lg:max-w-5xl mx-auto my-2 relative flex flex-col lg:flex-row"
//                 onClick={(e) => e.stopPropagation()}
//               >
//                 <button
//                   onClick={() => setShowForm(false)}
//                   className="absolute right-2 top-2 p-2 rounded-full bg-white/80 hover:bg-gray-100 transition-colors z-50 shadow-md"
//                   aria-label="Close form"
//                 >
//                   <X className="w-5 h-5 text-gray-600" />
//                 </button>

//                 <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-teal-400 to-teal-900 rounded-l-xl relative overflow-hidden">
//                   <div className="absolute inset-0 z-10">
//                     <ImageSlider />
//                   </div>
//                   <div className="absolute inset-0 bg-black/40 z-20 flex flex-col justify-between p-8">
//                     <motion.div
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       transition={{ delay: 0.2 }}
//                       className="text-white text-center mt-8"
//                     >
//                       <h1 className="text-3xl font-bold mb-4">Welcome to Our Platform!</h1>
//                       <p className="text-lg opacity-90 mb-6">Join our community and start your journey today.</p>
//                       <div className="flex items-center justify-center mb-4">
//                         <div className="bg-white/20 text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2">
//                           <Shield size={16} />
//                           <span className="font-medium">Secure Authentication</span>
//                         </div>
//                       </div>
//                     </motion.div>
//                     <SecurityFeatures />
//                   </div>
//                 </div>

//                 <div className="w-full lg:w-1/2 p-4 sm:p-6 overflow-y-auto max-h-[90vh] lg:max-h-[80vh]">
//                   <motion.div className="w-full max-w-md mx-auto space-y-4">
//                     {showForgotPassword ? (
//                       <div>
//                         <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center text-teal-900">
//                           Reset Password
//                         </h2>
//                         <form onSubmit={handleForgotPassword} className="space-y-4">
//                           <InputField
//                             icon={Mail}
//                             type="email"
//                             placeholder="Email"
//                             value={formData.mailId}
//                             onChange={(e) => setFormData({ ...formData, mailId: e.target.value })}
//                             error={errors.mailId}
//                             validate={validateEmail}
//                             autoComplete="email"
//                           />
//                           <InputField
//                             icon={Lock}
//                             type="password"
//                             placeholder="New Password"
//                             value={formData.password}
//                             onChange={(e) => {
//                               setFormData({ ...formData, password: e.target.value })
//                               setShowPasswordRequirements(true)
//                             }}
//                             error={errors.password}
//                             validate={validatePassword}
//                             autoComplete="new-password"
//                             showPasswordStrength={true}
//                           />

//                           <AnimatePresence>
//                             {showPasswordRequirements && formData.password && <PasswordRequirements />}
//                           </AnimatePresence>

//                           <InputField
//                             icon={Lock}
//                             type="password"
//                             placeholder="Confirm New Password"
//                             value={formData.confirmPassword}
//                             onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
//                             error={errors.confirmPassword}
//                             validate={(value) => (value !== formData.password ? "Passwords do not match" : undefined)}
//                             autoComplete="new-password"
//                           />

//                           <div className="flex justify-center my-4">
//                             <ReCAPTCHA
//                               ref={recaptchaRef}
//                               sitekey={RECAPTCHA_SITE_KEY}
//                               onChange={handleRecaptchaChange}
//                               theme="light"
//                             />
//                           </div>
//                           {errors.recaptcha && (
//                             <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
//                               <AlertTriangle size={14} />
//                               {errors.recaptcha}
//                             </p>
//                           )}

//                           <button
//                             type="submit"
//                             disabled={isLoading}
//                             className="w-full py-3 px-4 bg-teal-900 text-white font-semibold rounded-lg shadow-lg hover:bg-teal-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm"
//                           >
//                             {isLoading ? (
//                               <>
//                                 <RefreshCcw className="animate-spin" size={20} />
//                                 Resetting Password...
//                               </>
//                             ) : (
//                               "Reset Password"
//                             )}
//                           </button>
//                         </form>
//                         <div className="mt-4 text-center text-sm text-teal-700">
//                           <button
//                             onClick={() => toggleForgotPassword(false)}
//                             className="text-teal-900 font-semibold hover:underline"
//                           >
//                             Back to Login
//                           </button>
//                         </div>
//                       </div>
//                     ) : (
//                       <div>
//                         <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-teal-900">
//                           {formType === "login" ? "Welcome Back!" : "Create an Account"}
//                         </h2>

//                         <form onSubmit={handleSubmit} className="space-y-4">
//                           {formType === "signup" && (
//                             <>
//                               <InputField
//                                 icon={User}
//                                 type="text"
//                                 placeholder="First Name"
//                                 value={formData.firstName}
//                                 onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
//                                 error={errors.firstName}
//                                 validate={validateName}
//                                 autoComplete="given-name"
//                               />
//                               <InputField
//                                 icon={User}
//                                 type="text"
//                                 placeholder="Last Name"
//                                 value={formData.lastName}
//                                 onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
//                                 error={errors.lastName}
//                                 validate={validateName}
//                                 autoComplete="family-name"
//                               />
//                             </>
//                           )}
//                           <InputField
//                             icon={Mail}
//                             type="email"
//                             placeholder="Email"
//                             value={formData.mailId}
//                             onChange={(e) => setFormData({ ...formData, mailId: e.target.value })}
//                             error={errors.mailId}
//                             validate={validateEmail}
//                             autoComplete="email"
//                           />
//                           <InputField
//                             icon={Lock}
//                             type="password"
//                             placeholder="Password"
//                             value={formData.password}
//                             onChange={(e) => {
//                               setFormData({ ...formData, password: e.target.value })
//                               if (formType === "signup") {
//                                 setShowPasswordRequirements(true)
//                               }
//                             }}
//                             error={errors.password}
//                             validate={validatePassword}
//                             autoComplete={formType === "login" ? "current-password" : "new-password"}
//                             showPasswordStrength={formType === "signup"}
//                           />

//                           <AnimatePresence>
//                             {formType === "signup" && showPasswordRequirements && formData.password && (
//                               <PasswordRequirements />
//                             )}
//                           </AnimatePresence>

//                           {formType === "signup" && (
//                             <InputField
//                               icon={Lock}
//                               type="password"
//                               placeholder="Confirm Password"
//                               value={formData.confirmPassword}
//                               onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
//                               error={errors.confirmPassword}
//                               validate={(value) => (value !== formData.password ? "Passwords do not match" : undefined)}
//                               autoComplete="new-password"
//                             />
//                           )}

//                           <div className="flex justify-center my-4">
//                             <ReCAPTCHA
//                               ref={recaptchaRef}
//                               sitekey={RECAPTCHA_SITE_KEY}
//                               onChange={handleRecaptchaChange}
//                               theme="light"
//                             />
//                           </div>
//                           {errors.recaptcha && (
//                             <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
//                               <AlertTriangle size={14} />
//                               {errors.recaptcha}
//                             </p>
//                           )}

//                           <button
//                             type="submit"
//                             disabled={isLoading}
//                             className="w-full py-3 px-4 bg-teal-900 text-white font-semibold rounded-lg shadow-lg hover:bg-teal-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm"
//                           >
//                             {isLoading ? (
//                               <>
//                                 <RefreshCcw className="animate-spin" size={20} />
//                                 {formType === "login" ? "Logging in..." : "Signing up..."}
//                               </>
//                             ) : (
//                               <>
//                                 <ArrowRight size={20} />
//                                 {formType === "login" ? "Login" : "Sign Up"}
//                               </>
//                             )}
//                           </button>
//                         </form>

//                         <div className="mt-6 text-center text-sm text-teal-700 space-y-2">
//                           {formType === "login" ? (
//                             <>
//                               <p>
//                                 Don't have an account?{" "}
//                                 <button
//                                   onClick={() => handleFormTypeChange("signup")}
//                                   className="text-teal-900 font-semibold hover:underline"
//                                 >
//                                   Sign up
//                                 </button>
//                               </p>
//                               <p>
//                                 <button
//                                   onClick={() => toggleForgotPassword(true)}
//                                   className="text-teal-900 font-semibold hover:underline"
//                                 >
//                                   Forgot Password?
//                                 </button>
//                               </p>
//                             </>
//                           ) : (
//                             <p>
//                               Already have an account?{" "}
//                               <button
//                                 onClick={() => handleFormTypeChange("login")}
//                                 className="text-teal-900 font-semibold hover:underline"
//                               >
//                                 Sign in
//                               </button>
//                             </p>
//                           )}
//                         </div>

//                         {/* Show on mobile only */}
//                         <div className="mt-6 lg:hidden">
//                           <SecurityFeatures />
//                         </div>
//                       </div>
//                     )}
//                   </motion.div>
//                 </div>
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </AnimatePresence>

//       <OtpVerificationModal
//         isOpen={showOtpVerification}
//         onClose={() => setShowOtpVerification(false)}
//         onVerify={handleOtpVerification}
//         onResend={handleResendOtp}
//         email={formData.mailId}
//         purpose={otpPurpose}
//       />
//     </div>
//   )
// }


// import { useState, useCallback, useRef, useEffect } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import {
//   RefreshCcw,
//   Mail,
//   Lock,
//   User,
//   ArrowRight,
//   LogOut,
//   LogIn,
//   X,
//   CheckCircle,
//   Shield,
//   Eye,
//   EyeOff,
//   AlertTriangle,
//   Check,
//   KeyRound,
//   Fingerprint,
//   ShieldCheck,
// } from "lucide-react"
// import ReCAPTCHA from "react-google-recaptcha"

// // Base URL for API endpoints
// const BASE_URL = "https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1"

// // API endpoints
// const API_ENDPOINTS = {
// //   REGISTER: `${BASE_URL}/register`,
//   REGISTER:"https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1/register",
//   LOGIN: `${BASE_URL}/login`,
//   VERIFY_OTP: `${BASE_URL}/verify-otp`,
//   RESEND_OTP: `${BASE_URL}/resend-otp`,
//   FORGOT_PASSWORD: `${BASE_URL}/forgetPassword`,
//   VERIFY_RECAPTCHA: `${BASE_URL}/verify-recaptcha`,
// }

// // Fix for process.env - Use environment variables safely
// const RECAPTCHA_SITE_KEY = "6LeIfukqAAAAAOUyHtrYp3XExlP1MKRV-yCiaXuV" // Default test key

// // Utility functions
// const showStatus = (setStatusAnimation, type, message, duration = 2000) => {
//   setStatusAnimation({ type, message })
//   setTimeout(() => {
//     setStatusAnimation(null)
//   }, duration)
// }

// const validateEmail = (email) => {
//   if (!email) return "Email is required"
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
//   if (!emailRegex.test(email)) return "Invalid email format"
//   return undefined
// }

// const validatePassword = (password) => {
//   if (!password) return "Password is required"
//   if (password.length < 8) return "Password must be at least 8 characters long"
//   if (!/[A-Z]/.test(password)) return "Password must include at least one uppercase letter"
//   if (!/[a-z]/.test(password)) return "Password must include at least one lowercase letter"
//   if (!/[0-9]/.test(password)) return "Password must include at least one number"
//   if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(password))
//     return "Password must include at least one special character"
//   return undefined
// }

// const validateName = (name) => {
//   if (!name) return "Name is required"
//   if (name.length < 2) return "Name must be at least 2 characters long"
//   if (!/^[a-zA-Z\s-]+$/.test(name)) return "Name can only contain letters, spaces, and hyphens"
//   return undefined
// }

// // Enhanced rate limiter with secure storage
// const rateLimiter = (key, limit, timeWindow) => {
//   const now = Date.now()
//   const windowStart = now - timeWindow

//   // Use a more secure key format with a prefix
//   const securePrefix = "auth_rate_limit_"
//   const keyString = `${securePrefix}${key}_${Math.floor(now / timeWindow)}`

//   try {
//     // Use sessionStorage instead of localStorage for better security
//     const storedData = sessionStorage.getItem(keyString)
//     const data = storedData ? JSON.parse(storedData) : { count: 0, timestamp: now }

//     if (data.timestamp < windowStart) {
//       data.count = 1
//       data.timestamp = now
//     } else {
//       data.count += 1
//     }

//     // Set expiration for the rate limit data
//     sessionStorage.setItem(keyString, JSON.stringify(data))

//     // Set a timeout to clean up the rate limit data
//     setTimeout(() => {
//       sessionStorage.removeItem(keyString)
//     }, timeWindow)

//     // Return both the result and the count for better feedback
//     return {
//       allowed: data.count <= limit,
//       remainingAttempts: Math.max(0, limit - data.count),
//       timeRemaining: Math.ceil((windowStart + timeWindow - now) / 1000), // seconds remaining
//     }
//   } catch (error) {
//     console.error("Rate limiter error:", error)
//     return { allowed: false, remainingAttempts: 0, timeRemaining: timeWindow / 1000 }
//   }
// }

// // API call wrapper function
// const callApi = async (endpoint, method, data) => {
//   try {
//     const response = await fetch(endpoint, {
//       method: method,
//       headers: {
//         "Content-Type": "application/json",
//         "X-Requested-With": "XMLHttpRequest", // Helps prevent CSRF
//       },
//       body: JSON.stringify(data),
//       // Don't include credentials to avoid CORS issues
//     })

//     // Handle non-JSON responses
//     const contentType = response.headers.get("content-type")
//     if (contentType && contentType.includes("application/json")) {
//       const responseData = await response.json()

//       if (!response.ok) {
//         throw new Error(responseData.message || `Request failed with status ${response.status}`)
//       }

//       return responseData
//     } else {
//       const textResponse = await response.text()

//       if (!response.ok) {
//         throw new Error(`Request failed with status ${response.status}`)
//       }

//       return { success: true, text: textResponse }
//     }
//   } catch (error) {
//     console.error(`API call to ${endpoint} failed:`, error)
//     throw error
//   }
// }

// // Input Field Component with enhanced security features
// const InputField = ({
//   icon: Icon,
//   type,
//   placeholder,
//   value,
//   onChange,
//   error,
//   validate,
//   autoComplete = "off",
//   required = true,
//   showPasswordStrength = false,
// }) => {
//   const [focused, setFocused] = useState(false)
//   const [localError, setLocalError] = useState(error)
//   const [showPassword, setShowPassword] = useState(false)
//   const [passwordStrength, setPasswordStrength] = useState(0)
//   const actualType = type === "password" && showPassword ? "text" : type
//   const inputRef = useRef(null)

//   useEffect(() => {
//     setLocalError(error)
//   }, [error])

//   useEffect(() => {
//     if (type === "password" && showPasswordStrength) {
//       // Calculate password strength
//       let strength = 0
//       if (value.length >= 8) strength += 1
//       if (/[A-Z]/.test(value)) strength += 1
//       if (/[a-z]/.test(value)) strength += 1
//       if (/[0-9]/.test(value)) strength += 1
//       if (/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(value)) strength += 1

//       setPasswordStrength(strength)
//     }
//   }, [value, type, showPasswordStrength])

//   const handleBlur = () => {
//     setFocused(false)
//     if (validate && value) {
//       const validationError = validate(value)
//       setLocalError(validationError)
//     }
//   }

//   const getStrengthColor = () => {
//     if (passwordStrength <= 1) return "bg-red-500"
//     if (passwordStrength <= 3) return "bg-yellow-500"
//     return "bg-green-500"
//   }

//   const getStrengthText = () => {
//     if (passwordStrength <= 1) return "Weak"
//     if (passwordStrength <= 3) return "Medium"
//     return "Strong"
//   }

//   // Security enhancement: Clear clipboard after paste for sensitive fields
//   const handlePaste = (e) => {
//     if (type === "password") {
//       // Allow paste but clear clipboard after a delay
//       setTimeout(() => {
//         try {
//           navigator.clipboard.writeText("")
//         } catch (err) {
//           console.error("Could not clear clipboard:", err)
//         }
//       }, 1000)
//     }
//   }

//   return (
//     <div className="space-y-1">
//       <div
//         className={`flex items-center border-2 rounded-lg overflow-hidden transition-all ${
//           focused ? "border-teal-500 shadow-md" : localError ? "border-red-400" : "border-gray-300"
//         }`}
//       >
//         <div className="flex items-center justify-center w-12 h-12 bg-gray-50 text-gray-500">
//           <Icon size={20} />
//         </div>
//         <input
//           ref={inputRef}
//           type={actualType}
//           placeholder={placeholder}
//           value={value}
//           onChange={onChange}
//           onFocus={() => setFocused(true)}
//           onBlur={handleBlur}
//           onPaste={handlePaste}
//           className="flex-1 h-12 px-4 bg-transparent outline-none"
//           autoComplete={autoComplete}
//           required={required}
//           aria-invalid={!!localError}
//           aria-describedby={localError ? `${placeholder}-error` : undefined}
//         />
//         {type === "password" && value && (
//           <button
//             type="button"
//             onClick={() => setShowPassword(!showPassword)}
//             className="px-3 text-gray-500 hover:text-gray-700"
//             aria-label={showPassword ? "Hide password" : "Show password"}
//           >
//             {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//           </button>
//         )}
//       </div>

//       {localError && (
//         <p id={`${placeholder}-error`} className="text-red-500 text-sm flex items-center gap-1" role="alert">
//           <AlertTriangle size={14} />
//           {localError}
//         </p>
//       )}

//       {type === "password" && showPasswordStrength && value && !localError && (
//         <div className="space-y-1">
//           <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
//             <div
//               className={`h-full transition-all ${getStrengthColor()}`}
//               style={{ width: `${(passwordStrength / 5) * 100}%` }}
//             />
//           </div>
//           <p
//             className={`text-xs flex items-center gap-1 ${
//               passwordStrength <= 1 ? "text-red-500" : passwordStrength <= 3 ? "text-yellow-500" : "text-green-500"
//             }`}
//           >
//             Password strength: {getStrengthText()}
//           </p>
//         </div>
//       )}
//     </div>
//   )
// }

// // Status Animation Component with improved accessibility
// const StatusAnimation = ({ type, message }) => {
//   const variants = {
//     initial: { opacity: 0, y: -20 },
//     animate: { opacity: 1, y: 0 },
//     exit: { opacity: 0, y: -20 },
//   }

//   const getIcon = () => {
//     switch (type) {
//       case "success":
//         return <CheckCircle className="w-6 h-6" />
//       case "error":
//         return <AlertTriangle className="w-6 h-6" />
//       default:
//         return <RefreshCcw className="w-6 h-6 animate-spin" />
//     }
//   }

//   const getColors = () => {
//     switch (type) {
//       case "success":
//         return "bg-green-100 text-green-800 border-green-200"
//       case "error":
//         return "bg-red-100 text-red-800 border-red-200"
//       default:
//         return "bg-blue-100 text-blue-800 border-blue-200"
//     }
//   }

//   return (
//     <motion.div
//       variants={variants}
//       initial="initial"
//       animate="animate"
//       exit="exit"
//       className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg border ${getColors()} flex items-center gap-3 max-w-md`}
//       role="alert"
//       aria-live="assertive"
//     >
//       {getIcon()}
//       <p>{message}</p>
//     </motion.div>
//   )
// }

// // Image Slider Component with improved performance
// const ImageSlider = () => {
//   const images = [
//     "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//     "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//     "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//   ]

//   const [currentIndex, setCurrentIndex] = useState(0)
//   const [isLoaded, setIsLoaded] = useState(false)

//   useEffect(() => {
//     // Preload images for smoother transitions
//     const preloadImages = () => {
//       images.forEach((src) => {
//         const img = new Image()
//         img.src = src
//         img.onload = () => setIsLoaded(true)
//       })
//     }
//     preloadImages()

//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
//     }, 5000)

//     return () => clearInterval(interval)
//   }, [images.length])

//   return (
//     <div className="w-full h-full">
//       {isLoaded ? (
//         <AnimatePresence mode="wait">
//           <motion.img
//             key={currentIndex}
//             src={images[currentIndex]}
//             alt={`Slide ${currentIndex + 1}`}
//             className="w-full h-full object-cover"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.5 }}
//           />
//         </AnimatePresence>
//       ) : (
//         <div className="w-full h-full bg-gray-200 animate-pulse"></div>
//       )}

//       <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-30">
//         {images.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentIndex(index)}
//             className={`w-2 h-2 rounded-full ${index === currentIndex ? "bg-white" : "bg-white/50"}`}
//             aria-label={`Go to slide ${index + 1}`}
//             aria-current={index === currentIndex ? "true" : "false"}
//           />
//         ))}
//       </div>
//     </div>
//   )
// }

// // OTP Verification Modal Component with enhanced security
// const OtpVerificationModal = ({ isOpen, onClose, onVerify, onResend, email, purpose }) => {
//   const [otp, setOtp] = useState(["", "", "", "", "", ""])
//   const [isLoading, setIsLoading] = useState(false)
//   const [otpError, setOtpError] = useState("")
//   const [isVerified, setIsVerified] = useState(false)
//   const [recaptchaToken, setRecaptchaToken] = useState("")
//   const [resendDisabled, setResendDisabled] = useState(false)
//   const [resendCountdown, setResendCountdown] = useState(0)
//   const [otpExpiry, setOtpExpiry] = useState(300) // 5 minutes in seconds
//   const inputRefs = useRef([])
//   const recaptchaRef = useRef(null)

//   useEffect(() => {
//     if (isOpen) {
//       setOtp(["", "", "", "", "", ""])
//       setIsVerified(false)
//       setOtpError("")
//       setRecaptchaToken("")
//       setOtpExpiry(300) // Reset OTP expiry
//       if (inputRefs.current[0]) {
//         inputRefs.current[0].focus()
//       }
//       if (recaptchaRef.current) {
//         recaptchaRef.current.reset()
//       }
//     }
//   }, [isOpen])

//   useEffect(() => {
//     if (otp.every((digit) => digit !== "") && recaptchaToken) {
//       handleSubmit()
//     }
//   }, [otp, recaptchaToken])

//   useEffect(() => {
//     let interval
//     if (resendCountdown > 0) {
//       interval = setInterval(() => {
//         setResendCountdown((prev) => prev - 1)
//       }, 1000)
//     } else {
//       setResendDisabled(false)
//     }

//     return () => clearInterval(interval)
//   }, [resendCountdown])

//   // OTP expiry countdown
//   useEffect(() => {
//     let interval
//     if (isOpen && otpExpiry > 0) {
//       interval = setInterval(() => {
//         setOtpExpiry((prev) => {
//           if (prev <= 1) {
//             setOtpError("OTP has expired. Please request a new one.")
//             return 0
//           }
//           return prev - 1
//         })
//       }, 1000)
//     }

//     return () => clearInterval(interval)
//   }, [isOpen, otpExpiry])

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

//   const handleRecaptchaChange = (token) => {
//     setRecaptchaToken(token)
//     if (otp.every((digit) => digit !== "")) {
//       handleSubmit()
//     }
//   }

//   const handleSubmit = async () => {
//     if (!recaptchaToken) {
//       setOtpError("Please verify that you are not a robot")
//       return
//     }

//     if (otpExpiry <= 0) {
//       setOtpError("OTP has expired. Please request a new one.")
//       return
//     }

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
//       setOtpError(error.message || "Failed to verify OTP")
//       if (recaptchaRef.current) {
//         recaptchaRef.current.reset()
//         setRecaptchaToken("")
//       }
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   const handleResend = () => {
//     if (resendDisabled) return

//     if (!recaptchaToken) {
//       setOtpError("Please verify that you are not a robot before resending OTP")
//       return
//     }

//     onResend()
//     setResendDisabled(true)
//     setResendCountdown(60) // 60 seconds cooldown
//     setOtpExpiry(300) // Reset OTP expiry to 5 minutes
//     setOtpError("") // Clear any existing errors

//     if (recaptchaRef.current) {
//       recaptchaRef.current.reset()
//       setRecaptchaToken("")
//     }
//   }

//   // Format time remaining
//   const formatTimeRemaining = (seconds) => {
//     const mins = Math.floor(seconds / 60)
//     const secs = seconds % 60
//     return `${mins}:${secs.toString().padStart(2, "0")}`
//   }

//   if (!isOpen) return null

//   return (
//     <AnimatePresence>
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
//         onClick={(e) => e.target === e.currentTarget && onClose()}
//       >
//         <motion.div
//           initial={{ scale: 0.95, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           exit={{ scale: 0.95, opacity: 0 }}
//           className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md"
//           onClick={(e) => e.stopPropagation()}
//         >
//           <h2 className="text-2xl font-bold mb-4 text-center text-teal-900">
//             {purpose === "resetPassword" ? "Reset Password OTP Verification" : "OTP Verification"}
//           </h2>
//           <p className="text-center text-gray-600 mb-6">
//             {purpose === "resetPassword"
//               ? "Enter the OTP sent to your email to reset your password."
//               : "Enter the OTP sent to your email to verify your account."}
//           </p>

//           <div className="flex items-center justify-center mb-4">
//             <div className="bg-teal-50 text-teal-700 px-3 py-1 rounded-full text-sm flex items-center gap-1">
//               <Mail size={14} />
//               <span className="font-medium">{email}</span>
//             </div>
//           </div>

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
//                 <motion.div
//                   initial={{ opacity: 0, y: -10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg relative mb-4 flex items-center gap-2"
//                   role="alert"
//                 >
//                   <AlertTriangle size={18} />
//                   <span className="block sm:inline">{otpError}</span>
//                 </motion.div>
//               )}

//               <div className="text-center mb-2">
//                 <p className="text-sm text-gray-500">Enter 6-digit OTP</p>
//                 {otpExpiry > 0 && (
//                   <p className="text-xs text-teal-700 mt-1">
//                     OTP expires in <span className="font-semibold">{formatTimeRemaining(otpExpiry)}</span>
//                   </p>
//                 )}
//               </div>

//               <div className="flex justify-center gap-2 mb-6">
//                 {otp.map((data, index) => (
//                   <motion.input
//                     key={index}
//                     ref={(el) => (inputRefs.current[index] = el)}
//                     type="text"
//                     inputMode="numeric"
//                     maxLength="1"
//                     value={data}
//                     onChange={(e) => handleChange(e.target, index)}
//                     onFocus={(e) => e.target.select()}
//                     onKeyDown={(e) => handleBackspace(e, index)}
//                     className="w-12 h-12 border-2 rounded-lg text-center text-xl font-semibold focus:border-teal-500 focus:outline-none"
//                     whileFocus={{ scale: 1.05, borderColor: "#14b8a6" }}
//                     aria-label={`OTP digit ${index + 1}`}
//                   />
//                 ))}
//               </div>

//               <div className="flex justify-center my-4">
//                 <div className="recaptcha-container">
//                   <ReCAPTCHA
//                     ref={recaptchaRef}
//                     sitekey={RECAPTCHA_SITE_KEY}
//                     onChange={handleRecaptchaChange}
//                     theme="light"
//                     size="normal"
//                   />
//                 </div>
//               </div>

//               <div className="flex items-center justify-center mb-4">
//                 <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm flex items-center gap-1">
//                   <Shield size={14} />
//                   <span className="font-medium">Secured with reCAPTCHA</span>
//                 </div>
//               </div>
//             </>
//           )}

//           <p className="mt-4 text-center text-gray-600">
//             Didn't receive the OTP?{" "}
//             <button
//               onClick={handleResend}
//               className={`text-teal-900 font-semibold hover:underline ${resendDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
//               disabled={resendDisabled}
//               aria-disabled={resendDisabled}
//             >
//               {resendDisabled ? `Resend OTP (${resendCountdown}s)` : "Resend OTP"}
//             </button>
//           </p>

//           <div className="mt-6 flex gap-3">
//             <button
//               onClick={onClose}
//               className="flex-1 py-2.5 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition-all"
//             >
//               Cancel
//             </button>

//             {!isVerified && (
//               <button
//                 onClick={handleSubmit}
//                 disabled={!otp.every((digit) => digit !== "") || !recaptchaToken || isLoading || otpExpiry <= 0}
//                 className="flex-1 py-2.5 bg-teal-900 text-white font-semibold rounded-lg hover:bg-teal-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
//                 aria-disabled={!otp.every((digit) => digit !== "") || !recaptchaToken || isLoading || otpExpiry <= 0}
//               >
//                 {isLoading ? (
//                   <>
//                     <RefreshCcw className="animate-spin" size={18} />
//                     Verifying...
//                   </>
//                 ) : (
//                   "Verify OTP"
//                 )}
//               </button>
//             )}
//           </div>
//         </motion.div>
//       </motion.div>
//     </AnimatePresence>
//   )
// }

// // Security Features Component
// const SecurityFeatures = () => {
//   return (
//     <div className="bg-gradient-to-br from-teal-900/30 to-blue-900/30 backdrop-blur-sm p-4 rounded-xl mt-4 border border-white/10">
//       <h3 className="text-sm font-semibold text-white mb-2 flex items-center gap-1">
//         <ShieldCheck size={16} />
//         Enhanced Security Features
//       </h3>
//       <div className="grid grid-cols-2 gap-2">
//         <div className="flex items-center gap-1 text-xs text-white/90">
//           <KeyRound size={12} className="text-white/80" />
//           <span>Secure Authentication</span>
//         </div>
//         <div className="flex items-center gap-1 text-xs text-white/90">
//           <Fingerprint size={12} className="text-white/80" />
//           <span>reCAPTCHA Verification</span>
//         </div>
//         <div className="flex items-center gap-1 text-xs text-white/90">
//           <Shield size={12} className="text-white/80" />
//           <span>Rate Limiting</span>
//         </div>
//         <div className="flex items-center gap-1 text-xs text-white/90">
//           <Lock size={12} className="text-white/80" />
//           <span>OTP Authentication</span>
//         </div>
//       </div>
//     </div>
//   )
// }

// // Generate device fingerprint for additional security
// const generateFingerprint = async () => {
//   try {
//     // Simple fingerprinting based on available browser data
//     const fingerprint = {
//       userAgent: navigator.userAgent,
//       language: navigator.language,
//       screenResolution: `${window.screen.width}x${window.screen.height}`,
//       timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
//       colorDepth: window.screen.colorDepth,
//     }

//     // Create a hash of the fingerprint
//     const fingerprintString = JSON.stringify(fingerprint)
//     const encoder = new TextEncoder()
//     const data = encoder.encode(fingerprintString)
//     const hashBuffer = await crypto.subtle.digest("SHA-256", data)
//     const hashArray = Array.from(new Uint8Array(hashBuffer))
//     const hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("")

//     return hashHex
//   } catch (error) {
//     console.error("Error generating device fingerprint:", error)
//     return ""
//   }
// }

// // Main Authentication System Component
// export default function EnhancedAuthSystem() {
//   const [showForm, setShowForm] = useState(false)
//   const [formType, setFormType] = useState("login")
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     mailId: "",
//     password: "",
//     confirmPassword: "",
//   })
//   const [errors, setErrors] = useState({})
//   const [isAuthenticated, setIsAuthenticated] = useState(false)
//   const [statusAnimation, setStatusAnimation] = useState(null)

 
//   const [isLoading, setIsLoading] = useState(false)
//   const [showOtpVerification, setShowOtpVerification] = useState(false)
//   const [showForgotPassword, setShowForgotPassword] = useState(false)
//   const [otpPurpose, setOtpPurpose] = useState("")
//   const [recaptchaToken, setRecaptchaToken] = useState("")
//   const [passwordScore, setPasswordScore] = useState(0)
//   const [showPasswordRequirements, setShowPasswordRequirements] = useState(false)
//   const [loginAttempts, setLoginAttempts] = useState(0)
//   const [deviceFingerprint, setDeviceFingerprint] = useState("")
//   const recaptchaRef = useRef(null)
//   const navigate = useRef(() => {
//     console.log("Navigation would happen here in a real app")
//   }).current

//   // Generate device fingerprint on component mount
//   useEffect(() => {
//     const getFingerprint = async () => {
//       const fingerprint = await generateFingerprint()
//       setDeviceFingerprint(fingerprint)
//     }
//     getFingerprint()
//   }, [])

//   // Check if user is already authenticated
//   useEffect(() => {
//     const storedAuth = localStorage.getItem("isAuthenticated")
//     if (storedAuth === "true") {
//       setIsAuthenticated(true)
//     }
//   }, [])

//   const resetFormData = useCallback(() => {
//     setFormData({
//       firstName: "",
//       lastName: "",
//       mailId: "",
//       password: "",
//       confirmPassword: "",
//     })
//     setErrors({})
//     setRecaptchaToken("")
//     setShowPasswordRequirements(false)
//     if (recaptchaRef.current) {
//       recaptchaRef.current.reset()
//     }
//   }, [])

//   const resetFormDataRef = useRef(resetFormData)

//   useEffect(() => {
//     resetFormDataRef.current = resetFormData
//   }, [resetFormData])

//   const validateForm = useCallback(() => {
//     const newErrors = {}

//     if (formType === "signup") {
//       newErrors.firstName = validateName(formData.firstName)
//       newErrors.lastName = validateName(formData.lastName)
//     }

//     newErrors.mailId = validateEmail(formData.mailId)
//     newErrors.password = validatePassword(formData.password)

//     if (formType === "signup") {
//       if (formData.password !== formData.confirmPassword) {
//         newErrors.confirmPassword = "Passwords do not match"
//       }
//     }

//     if (!recaptchaToken) {
//       newErrors.recaptcha = "Please verify that you are not a robot"
//     }

//     setErrors(newErrors)
//     return Object.values(newErrors).every((error) => !error)
//   }, [formType, formData, recaptchaToken])

//   const showStatusCallback = useCallback((type, message, duration = 2000) => {
//     showStatus(setStatusAnimation, type, message, duration)
//   }, [])

//   const handleLogout = useCallback(() => {
//     showStatusCallback("success", "Successfully logged out")
//     setTimeout(() => {
//       setIsAuthenticated(false)
//       localStorage.removeItem("isAuthenticated")
//       sessionStorage.removeItem("authToken")
//       resetFormDataRef.current()
//       setShowOtpVerification(false)
//       setShowForm(false)
//     }, 2000)
//   }, [showStatusCallback])

//   const handleRecaptchaChange = (token) => {
//     setRecaptchaToken(token)
//     if (!token) {
//       setErrors((prev) => ({ ...prev, recaptcha: "Please verify that you are not a robot" }))
//     } else {
//       setErrors((prev) => {
//         const newErrors = { ...prev }
//         delete newErrors.recaptcha
//         return newErrors
//       })
//     }
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     if (!validateForm()) return

//     // Check rate limiting
//     const rateLimitKey = `${formType}_${formData.mailId}`
//     const rateLimitResult = rateLimiter(rateLimitKey, 5, 60000) // 5 attempts per minute

//     if (!rateLimitResult.allowed) {
//       showStatusCallback(
//         "error",
//         `Too many attempts. Please try again in ${Math.ceil(rateLimitResult.timeRemaining)} seconds.`,
//       )
//       return
//     }

//     setIsLoading(true)

//     try {
//       const apiUrl = formType === "login" ? API_ENDPOINTS.LOGIN : API_ENDPOINTS.REGISTER
//       const requestData = {
//         ...formData,
//         recaptchaToken,
//         deviceFingerprint,
//       }

//       const data = await callApi(apiUrl, "POST", requestData)

//       if (formType === "login") {
//         setLoginAttempts(0) // Reset login attempts on success
//       }

//       setOtpPurpose(formType === "login" ? "login" : "signup")
//       setShowOtpVerification(true)
//     } catch (error) {
//       if (formType === "login") {
//         setLoginAttempts((prev) => prev + 1)
//       }
//       showStatusCallback("error", error.message || `${formType === "login" ? "Login" : "Registration"} failed`)
//       if (recaptchaRef.current) {
//         recaptchaRef.current.reset()
//         setRecaptchaToken("")
//       }
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   const handleOtpVerification = useCallback(
//     async (otp) => {
//       try {
//         let endpoint = API_ENDPOINTS.VERIFY_OTP
//         let requestData = {
//           mailId: formData.mailId,
//           otp: otp,
//           recaptchaToken,
//           deviceFingerprint,
//         }

//         if (otpPurpose === "resetPassword") {
//           endpoint = API_ENDPOINTS.VERIFY_RESET_PASSWORD_OTP
//           requestData = {
//             ...requestData,
//             password: formData.password,
//             confirmPassword: formData.confirmPassword,
//           }
//         }

//         const data = await callApi(endpoint, "POST", requestData)

//         setShowOtpVerification(false)

//         if (otpPurpose === "resetPassword") {
//           showStatusCallback("success", "Password reset successful! Please login with your new password.")
//           resetFormDataRef.current()
//           setShowForgotPassword(false)
//           setOtpPurpose("")
//           setTimeout(() => {
//             setFormType("login")
//             setShowForm(true)
//           }, 100)
//         } else {
//           showStatusCallback("success", "Authentication successful!")
//           sessionStorage.setItem("authToken", data.token || "dummy-token")
//           setIsAuthenticated(true)
//           localStorage.setItem("isAuthenticated", "true")
//           resetFormDataRef.current()
//           setShowOtpVerification(false)
//           setShowForm(false)

//           // Redirect to student portal after OTP verification
//           navigate("/student-portal")
//         }
//       } catch (error) {
//         showStatusCallback("error", error.message || "OTP verification failed")
//         if (recaptchaRef.current) {
//           recaptchaRef.current.reset()
//           setRecaptchaToken("")
//         }
//       } finally {
//         setIsLoading(false)
//       }
//     },
//     [formData, otpPurpose, showStatusCallback, navigate, recaptchaToken, deviceFingerprint],
//   )

//   const handleForgotPassword = async (e) => {
//     e.preventDefault()
//     if (!validateForm()) return

//     // Check rate limiting
//     const rateLimitKey = `forgot_password_${formData.mailId}`
//     const rateLimitResult = rateLimiter(rateLimitKey, 3, 300000) // 3 attempts per 5 minutes

//     if (!rateLimitResult.allowed) {
//       showStatusCallback(
//         "error",
//         `Too many attempts. Please try again in ${Math.ceil(rateLimitResult.timeRemaining / 60)} minutes. Remaining attempts: ${rateLimitResult.remainingAttempts}`,
//       )
//       return
//     }

//     setIsLoading(true)

//     try {
//       const requestData = {
//         mailId: formData.mailId,
//         newPassword: formData.password,
//         confirmNewPassword: formData.confirmPassword,
//         recaptchaToken,
//         deviceFingerprint,
//       }

//       const data = await callApi(API_ENDPOINTS.FORGOT_PASSWORD, "POST", requestData)

//       showStatusCallback("success", "Password reset email sent. Please check your inbox.")
//       setOtpPurpose("resetPassword")
//       setShowOtpVerification(true)
//     } catch (error) {
//       showStatusCallback("error", error.message || "Failed to process forgot password request")
//       if (recaptchaRef.current) {
//         recaptchaRef.current.reset()
//         setRecaptchaToken("")
//       }
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   const handleFormTypeChange = useCallback((type) => {
//     resetFormDataRef.current()
//     setFormType(type)
//   }, [])

//   const toggleForgotPassword = useCallback((show) => {
//     resetFormDataRef.current()
//     setShowForgotPassword(show)
//   }, [])

//   const handleResendOtp = async () => {
//     if (!recaptchaToken) {
//       showStatusCallback("error", "Please verify that you are not a robot")
//       return
//     }

//     // Check rate limiting for OTP resend
//     const rateLimitKey = `resend_otp_${formData.mailId}`
//     const rateLimitResult = rateLimiter(rateLimitKey, 3, 300000) // 3 attempts per 5 minutes

//     if (!rateLimitResult.allowed) {
//       showStatusCallback(
//         "error",
//         `Too many resend attempts. Please try again in ${Math.ceil(rateLimitResult.timeRemaining / 60)} minutes. Remaining attempts: ${rateLimitResult.remainingAttempts}`,
//       )
//       return
//     }

//     setIsLoading(true)
//     try {
//       const requestData = {
//         mailId: formData.mailId,
//         recaptchaToken,
//         purpose: otpPurpose,
//         deviceFingerprint,
//       }

//       const data = await callApi(API_ENDPOINTS.RESEND_OTP, "POST", requestData)

//       showStatusCallback("success", "OTP resent successfully!")
//     } catch (error) {
//       showStatusCallback("error", error.message || "Failed to resend OTP")
//       if (recaptchaRef.current) {
//         recaptchaRef.current.reset()
//         setRecaptchaToken("")
//       }
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   // Password requirements component
//   const PasswordRequirements = () => {
//     const requirements = [
//       { text: "At least 8 characters", met: formData.password.length >= 8 },
//       { text: "At least one uppercase letter", met: /[A-Z]/.test(formData.password) },
//       { text: "At least one lowercase letter", met: /[a-z]/.test(formData.password) },
//       { text: "At least one number", met: /[0-9]/.test(formData.password) },
//       { text: "At least one special character", met: /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(formData.password) },
//     ]

//     return (
//       <motion.div
//         initial={{ opacity: 0, height: 0 }}
//         animate={{ opacity: 1, height: "auto" }}
//         exit={{ opacity: 0, height: 0 }}
//         className="bg-gray-50 p-3 rounded-lg mt-1 mb-3"
//       >
//         <p className="text-sm font-medium text-gray-700 mb-2">Password must contain:</p>
//         <ul className="space-y-1">
//           {requirements.map((req, index) => (
//             <li key={index} className="flex items-center gap-2 text-sm">
//               <span
//                 className={`flex-shrink-0 w-5 h-5 flex items-center justify-center rounded-full ${
//                   req.met ? "bg-green-100 text-green-600" : "bg-gray-200 text-gray-400"
//                 }`}
//               >
//                 {req.met ? <Check size={12} /> : ""}
//               </span>
//               <span className={req.met ? "text-green-600" : "text-gray-500"}>{req.text}</span>
//             </li>
//           ))}
//         </ul>
//       </motion.div>
//     )
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-teal-50 to-blue-50">
//       <AnimatePresence>
//         {statusAnimation && <StatusAnimation type={statusAnimation.type} message={statusAnimation.message} />}

//         {!isAuthenticated ? (
//           <motion.button
//             onClick={() => {
//               resetFormDataRef.current()
//               setShowForm(true)
//             }}
//             className="px-6 py-3 bg-teal-900 text-white font-semibold rounded-full shadow-lg hover:bg-teal-800 transition-all flex items-center justify-center gap-2"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <LogIn size={18} />
//             Sign In
//           </motion.button>
//         ) : (
//           <motion.button
//             onClick={handleLogout}
//             className="px-6 py-3 bg-teal-900 text-white font-semibold rounded-full shadow-lg hover:bg-teal-800 transition-all flex items-center justify-center gap-2"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <LogOut size={18} />
//             Sign Out
//           </motion.button>
//         )}

//         <AnimatePresence>
//           {showForm && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-2 z-50 overflow-y-auto"
//               onClick={() => {
//                 resetFormDataRef.current()
//                 setShowForm(false)
//               }}
//             >
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.95 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.95 }}
//                 className="bg-white/90 backdrop-blur-md rounded-xl shadow-2xl w-full max-w-lg lg:max-w-5xl mx-auto my-2 relative flex flex-col lg:flex-row"
//                 onClick={(e) => e.stopPropagation()}
//               >
//                 <button
//                   onClick={() => setShowForm(false)}
//                   className="absolute right-2 top-2 p-2 rounded-full bg-white/80 hover:bg-gray-100 transition-colors z-50 shadow-md"
//                   aria-label="Close form"
//                 >
//                   <X className="w-5 h-5 text-gray-600" />
//                 </button>

//                 <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-teal-400 to-teal-900 rounded-l-xl relative overflow-hidden">
//                   <div className="absolute inset-0 z-10">
//                     <ImageSlider />
//                   </div>
//                   <div className="absolute inset-0 bg-black/40 z-20 flex flex-col justify-between p-8">
//                     <motion.div
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       transition={{ delay: 0.2 }}
//                       className="text-white text-center mt-8"
//                     >
//                       <h1 className="text-3xl font-bold mb-4">Welcome to Our Platform!</h1>
//                       <p className="text-lg opacity-90 mb-6">Join our community and start your journey today.</p>
//                       <div className="flex items-center justify-center mb-4">
//                         <div className="bg-white/20 text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2">
//                           <Shield size={16} />
//                           <span className="font-medium">Secure Authentication</span>
//                         </div>
//                       </div>
//                     </motion.div>
//                     <SecurityFeatures />
//                   </div>
//                 </div>

//                 <div className="w-full lg:w-1/2 p-4 sm:p-6 overflow-y-auto max-h-[90vh] lg:max-h-[80vh]">
//                   <motion.div className="w-full max-w-md mx-auto space-y-4">
//                     {showForgotPassword ? (
//                       <div>
//                         <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center text-teal-900">
//                           Reset Password
//                         </h2>
//                         <form onSubmit={handleForgotPassword} className="space-y-4">
//                           <InputField
//                             icon={Mail}
//                             type="email"
//                             placeholder="Email"
//                             value={formData.mailId}
//                             onChange={(e) => setFormData({ ...formData, mailId: e.target.value })}
//                             error={errors.mailId}
//                             validate={validateEmail}
//                             autoComplete="email"
//                           />
//                           <InputField
//                             icon={Lock}
//                             type="password"
//                             placeholder="New Password"
//                             value={formData.password}
//                             onChange={(e) => {
//                               setFormData({ ...formData, password: e.target.value })
//                               setShowPasswordRequirements(true)
//                             }}
//                             error={errors.password}
//                             validate={validatePassword}
//                             autoComplete="new-password"
//                             showPasswordStrength={true}
//                           />

//                           <AnimatePresence>
//                             {showPasswordRequirements && formData.password && <PasswordRequirements />}
//                           </AnimatePresence>

//                           <InputField
//                             icon={Lock}
//                             type="password"
//                             placeholder="Confirm New Password"
//                             value={formData.confirmPassword}
//                             onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
//                             error={errors.confirmPassword}
//                             validate={(value) => (value !== formData.password ? "Passwords do not match" : undefined)}
//                             autoComplete="new-password"
//                           />

//                           <div className="flex justify-center my-4">
//                             <ReCAPTCHA
//                               ref={recaptchaRef}
//                               sitekey={RECAPTCHA_SITE_KEY}
//                               onChange={handleRecaptchaChange}
//                               theme="light"
//                             />
//                           </div>
//                           {errors.recaptcha && (
//                             <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
//                               <AlertTriangle size={14} />
//                               {errors.recaptcha}
//                             </p>
//                           )}

//                           <button
//                             type="submit"
//                             disabled={isLoading}
//                             className="w-full py-3 px-4 bg-teal-900 text-white font-semibold rounded-lg shadow-lg hover:bg-teal-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm"
//                           >
//                             {isLoading ? (
//                               <>
//                                 <RefreshCcw className="animate-spin" size={20} />
//                                 Resetting Password...
//                               </>
//                             ) : (
//                               "Reset Password"
//                             )}
//                           </button>
//                         </form>
//                         <div className="mt-4 text-center text-sm text-teal-700">
//                           <button
//                             onClick={() => toggleForgotPassword(false)}
//                             className="text-teal-900 font-semibold hover:underline"
//                           >
//                             Back to Login
//                           </button>
//                         </div>
//                       </div>
//                     ) : (
//                       <div>
//                         <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-teal-900">
//                           {formType === "login" ? "Welcome Back!" : "Create an Account"}
//                         </h2>

//                         <form onSubmit={handleSubmit} className="space-y-4">
//                           {formType === "signup" && (
//                             <>
//                               <InputField
//                                 icon={User}
//                                 type="text"
//                                 placeholder="First Name"
//                                 value={formData.firstName}
//                                 onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
//                                 error={errors.firstName}
//                                 validate={validateName}
//                                 autoComplete="given-name"
//                               />
//                               <InputField
//                                 icon={User}
//                                 type="text"
//                                 placeholder="Last Name"
//                                 value={formData.lastName}
//                                 onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
//                                 error={errors.lastName}
//                                 validate={validateName}
//                                 autoComplete="family-name"
//                               />
//                             </>
//                           )}
//                           <InputField
//                             icon={Mail}
//                             type="email"
//                             placeholder="Email"
//                             value={formData.mailId}
//                             onChange={(e) => setFormData({ ...formData, mailId: e.target.value })}
//                             error={errors.mailId}
//                             validate={validateEmail}
//                             autoComplete="email"
//                           />
//                           <InputField
//                             icon={Lock}
//                             type="password"
//                             placeholder="Password"
//                             value={formData.password}
//                             onChange={(e) => {
//                               setFormData({ ...formData, password: e.target.value })
//                               if (formType === "signup") {
//                                 setShowPasswordRequirements(true)
//                               }
//                             }}
//                             error={errors.password}
//                             validate={validatePassword}
//                             autoComplete={formType === "login" ? "current-password" : "new-password"}
//                             showPasswordStrength={formType === "signup"}
//                           />

//                           <AnimatePresence>
//                             {formType === "signup" && showPasswordRequirements && formData.password && (
//                               <PasswordRequirements />
//                             )}
//                           </AnimatePresence>

//                           {formType === "signup" && (
//                             <InputField
//                               icon={Lock}
//                               type="password"
//                               placeholder="Confirm Password"
//                               value={formData.confirmPassword}
//                               onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
//                               error={errors.confirmPassword}
//                               validate={(value) => (value !== formData.password ? "Passwords do not match" : undefined)}
//                               autoComplete="new-password"
//                             />
//                           )}

//                           <div className="flex justify-center my-4">
//                             <ReCAPTCHA
//                               ref={recaptchaRef}
//                               sitekey={RECAPTCHA_SITE_KEY}
//                               onChange={handleRecaptchaChange}
//                               theme="light"
//                             />
//                           </div>
//                           {errors.recaptcha && (
//                             <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
//                               <AlertTriangle size={14} />
//                               {errors.recaptcha}
//                             </p>
//                           )}

//                           <button
//                             type="submit"
//                             disabled={isLoading}
//                             className="w-full py-3 px-4 bg-teal-900 text-white font-semibold rounded-lg shadow-lg hover:bg-teal-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm"
//                           >
//                             {isLoading ? (
//                               <>
//                                 <RefreshCcw className="animate-spin" size={20} />
//                                 {formType === "login" ? "Logging in..." : "Signing up..."}
//                               </>
//                             ) : (
//                               <>
//                                 <ArrowRight size={20} />
//                                 {formType === "login" ? "Login" : "Sign Up"}
//                               </>
//                             )}
//                           </button>
//                         </form>

//                         <div className="mt-6 text-center text-sm text-teal-700 space-y-2">
//                           {formType === "login" ? (
//                             <>
//                               <p>
//                                 Don't have an account?{" "}
//                                 <button
//                                   onClick={() => handleFormTypeChange("signup")}
//                                   className="text-teal-900 font-semibold hover:underline"
//                                 >
//                                   Sign up
//                                 </button>
//                               </p>
//                               <p>
//                                 <button
//                                   onClick={() => toggleForgotPassword(true)}
//                                   className="text-teal-900 font-semibold hover:underline"
//                                 >
//                                   Forgot Password?
//                                 </button>
//                               </p>
//                             </>
//                           ) : (
//                             <p>
//                               Already have an account?{" "}
//                               <button
//                                 onClick={() => handleFormTypeChange("login")}
//                                 className="text-teal-900 font-semibold hover:underline"
//                               >
//                                 Sign in
//                               </button>
//                             </p>
//                           )}
//                         </div>

//                         {/* Show on mobile only */}
//                         <div className="mt-6 lg:hidden">
//                           <SecurityFeatures />
//                         </div>
//                       </div>
//                     )}
//                   </motion.div>
//                 </div>
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </AnimatePresence>

//       <OtpVerificationModal
//         isOpen={showOtpVerification}
//         onClose={() => setShowOtpVerification(false)}
//         onVerify={handleOtpVerification}
//         onResend={handleResendOtp}
//         email={formData.mailId}
//         purpose={otpPurpose}
//       />
//     </div>
//   )
// }


// import { useState, useCallback, useRef, useEffect } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import {
//   RefreshCcw,
//   Mail,
//   Lock,
//   User,
//   ArrowRight,
//   LogOut,
//   LogIn,
//   X,
//   CheckCircle,
//   Shield,
//   Eye,
//   EyeOff,
//   AlertTriangle,
//   Check,
//   KeyRound,
//   ShieldCheck,
// } from "lucide-react"
// import ReCAPTCHA from "react-google-recaptcha"

// // Base URL for API endpoints
// const BASE_URL = "https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1"

// // API endpoints
// const API_ENDPOINTS = {
//   REGISTER: "https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1/register",
//   LOGIN: `${BASE_URL}/login`,
//   VERIFY_OTP: `${BASE_URL}/verify-otp`,
//   RESEND_OTP: `${BASE_URL}/resend-otp`,
//   FORGOT_PASSWORD: `${BASE_URL}/forgetPassword`,
//   VERIFY_RECAPTCHA: `${BASE_URL}/verify-recaptcha`,
// }

// // Fix for process.env - Use environment variables safely
// const RECAPTCHA_SITE_KEY = "6LeIfukqAAAAAOUyHtrYp3XExlP1MKRV-yCiaXuV" // Default test key

// // Utility functions
// const showStatus = (setStatusAnimation, type, message, duration = 2000) => {
//   setStatusAnimation({ type, message })
//   setTimeout(() => {
//     setStatusAnimation(null)
//   }, duration)
// }

// const validateEmail = (email) => {
//   if (!email) return "Email is required"
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
//   if (!emailRegex.test(email)) return "Invalid email format"
//   return undefined
// }

// const validatePassword = (password) => {
//   if (!password) return "Password is required"
//   if (password.length < 8) return "Password must be at least 8 characters long"
//   if (!/[A-Z]/.test(password)) return "Password must include at least one uppercase letter"
//   if (!/[a-z]/.test(password)) return "Password must include at least one lowercase letter"
//   if (!/[0-9]/.test(password)) return "Password must include at least one number"
//   if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(password))
//     return "Password must include at least one special character"
//   return undefined
// }

// const validateName = (name) => {
//   if (!name) return "Name is required"
//   if (name.length < 2) return "Name must be at least 2 characters long"
//   if (!/^[a-zA-Z\s-]+$/.test(name)) return "Name can only contain letters, spaces, and hyphens"
//   return undefined
// }

// // Enhanced rate limiter with secure storage
// const rateLimiter = (key, limit, timeWindow) => {
//   const now = Date.now()
//   const windowStart = now - timeWindow

//   // Use a more secure key format with a prefix
//   const securePrefix = "auth_rate_limit_"
//   const keyString = `${securePrefix}${key}_${Math.floor(now / timeWindow)}`

//   try {
//     // Use sessionStorage instead of localStorage for better security
//     const storedData = sessionStorage.getItem(keyString)
//     const data = storedData ? JSON.parse(storedData) : { count: 0, timestamp: now }

//     if (data.timestamp < windowStart) {
//       data.count = 1
//       data.timestamp = now
//     } else {
//       data.count += 1
//     }

//     // Set expiration for the rate limit data
//     sessionStorage.setItem(keyString, JSON.stringify(data))

//     // Set a timeout to clean up the rate limit data
//     setTimeout(() => {
//       sessionStorage.removeItem(keyString)
//     }, timeWindow)

//     // Return both the result and the count for better feedback
//     return {
//       allowed: data.count <= limit,
//       remainingAttempts: Math.max(0, limit - data.count),
//       timeRemaining: Math.ceil((windowStart + timeWindow - now) / 1000), // seconds remaining
//     }
//   } catch (error) {
//     console.error("Rate limiter error:", error)
//     return { allowed: false, remainingAttempts: 0, timeRemaining: timeWindow / 1000 }
//   }
// }

// // API call wrapper function with CORS handling
// const callApi = async (endpoint, method, data) => {
//   try {
//     const response = await fetch(endpoint, {
//       method: method,
//       headers: {
//         "Content-Type": "application/json",
//         "X-Requested-With": "XMLHttpRequest", // Helps prevent CSRF
//         Accept: "application/json",
//         "Access-Control-Allow-Origin": "*", // Allow any origin to access the resource
//       },
//       mode: "cors", // Enable CORS
//       body: JSON.stringify(data),
//     })

//     // Handle non-JSON responses
//     const contentType = response.headers.get("content-type")
//     if (contentType && contentType.includes("application/json")) {
//       const responseData = await response.json()

//       if (!response.ok) {
//         throw new Error(responseData.message || `Request failed with status ${response.status}`)
//       }

//       return responseData
//     } else {
//       const textResponse = await response.text()

//       if (!response.ok) {
//         throw new Error(`Request failed with status ${response.status}`)
//       }

//       return { success: true, text: textResponse }
//     }
//   } catch (error) {
//     console.error(`API call to ${endpoint} failed:`, error)
//     // Provide more detailed error information for debugging
//     if (error.name === "TypeError" && error.message.includes("Failed to fetch")) {
//       throw new Error("Network error: Please check your internet connection or the API endpoint might be unavailable")
//     }
//     throw error
//   }
// }

// // Input Field Component with enhanced security features
// const InputField = ({
//   icon: Icon,
//   type,
//   placeholder,
//   value,
//   onChange,
//   error,
//   validate,
//   autoComplete = "off",
//   required = true,
//   showPasswordStrength = false,
// }) => {
//   const [focused, setFocused] = useState(false)
//   const [localError, setLocalError] = useState(error)
//   const [showPassword, setShowPassword] = useState(false)
//   const [passwordStrength, setPasswordStrength] = useState(0)
//   const actualType = type === "password" && showPassword ? "text" : type
//   const inputRef = useRef(null)

//   useEffect(() => {
//     setLocalError(error)
//   }, [error])

//   useEffect(() => {
//     if (type === "password" && showPasswordStrength) {
//       // Calculate password strength
//       let strength = 0
//       if (value.length >= 8) strength += 1
//       if (/[A-Z]/.test(value)) strength += 1
//       if (/[a-z]/.test(value)) strength += 1
//       if (/[0-9]/.test(value)) strength += 1
//       if (/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(value)) strength += 1

//       setPasswordStrength(strength)
//     }
//   }, [value, type, showPasswordStrength])

//   const handleBlur = () => {
//     setFocused(false)
//     if (validate && value) {
//       const validationError = validate(value)
//       setLocalError(validationError)
//     }
//   }

//   const getStrengthColor = () => {
//     if (passwordStrength <= 1) return "bg-red-500"
//     if (passwordStrength <= 3) return "bg-yellow-500"
//     return "bg-green-500"
//   }

//   const getStrengthText = () => {
//     if (passwordStrength <= 1) return "Weak"
//     if (passwordStrength <= 3) return "Medium"
//     return "Strong"
//   }

//   return (
//     <div className="space-y-1">
//       <div
//         className={`flex items-center border-2 rounded-lg overflow-hidden transition-all ${
//           focused ? "border-teal-500 shadow-md" : localError ? "border-red-400" : "border-gray-300"
//         }`}
//       >
//         <div className="flex items-center justify-center w-12 h-12 bg-gray-50 text-gray-500">
//           <Icon size={20} />
//         </div>
//         <input
//           ref={inputRef}
//           type={actualType}
//           placeholder={placeholder}
//           value={value}
//           onChange={onChange}
//           onFocus={() => setFocused(true)}
//           onBlur={handleBlur}
//           className="flex-1 h-12 px-4 bg-transparent outline-none"
//           autoComplete={autoComplete}
//           required={required}
//           aria-invalid={!!localError}
//           aria-describedby={localError ? `${placeholder}-error` : undefined}
//         />
//         {type === "password" && value && (
//           <button
//             type="button"
//             onClick={() => setShowPassword(!showPassword)}
//             className="px-3 text-gray-500 hover:text-gray-700"
//             aria-label={showPassword ? "Hide password" : "Show password"}
//           >
//             {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//           </button>
//         )}
//       </div>

//       {localError && (
//         <p id={`${placeholder}-error`} className="text-red-500 text-sm flex items-center gap-1" role="alert">
//           <AlertTriangle size={14} />
//           {localError}
//         </p>
//       )}

//       {type === "password" && showPasswordStrength && value && !localError && (
//         <div className="space-y-1">
//           <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
//             <div
//               className={`h-full transition-all ${getStrengthColor()}`}
//               style={{ width: `${(passwordStrength / 5) * 100}%` }}
//             />
//           </div>
//           <p
//             className={`text-xs flex items-center gap-1 ${
//               passwordStrength <= 1 ? "text-red-500" : passwordStrength <= 3 ? "text-yellow-500" : "text-green-500"
//             }`}
//           >
//             Password strength: {getStrengthText()}
//           </p>
//         </div>
//       )}
//     </div>
//   )
// }

// // Status Animation Component with improved accessibility
// const StatusAnimation = ({ type, message }) => {
//   const variants = {
//     initial: { opacity: 0, y: -20 },
//     animate: { opacity: 1, y: 0 },
//     exit: { opacity: 0, y: -20 },
//   }

//   const getIcon = () => {
//     switch (type) {
//       case "success":
//         return <CheckCircle className="w-6 h-6" />
//       case "error":
//         return <AlertTriangle className="w-6 h-6" />
//       default:
//         return <RefreshCcw className="w-6 h-6 animate-spin" />
//     }
//   }

//   const getColors = () => {
//     switch (type) {
//       case "success":
//         return "bg-green-100 text-green-800 border-green-200"
//       case "error":
//         return "bg-red-100 text-red-800 border-red-200"
//       default:
//         return "bg-blue-100 text-blue-800 border-blue-200"
//     }
//   }

//   return (
//     <motion.div
//       variants={variants}
//       initial="initial"
//       animate="animate"
//       exit="exit"
//       className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg border ${getColors()} flex items-center gap-3 max-w-md`}
//       role="alert"
//       aria-live="assertive"
//     >
//       {getIcon()}
//       <p>{message}</p>
//     </motion.div>
//   )
// }

// // Image Slider Component with improved performance
// const ImageSlider = () => {
//   const images = [
//     "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//     "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//     "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//   ]

//   const [currentIndex, setCurrentIndex] = useState(0)
//   const [isLoaded, setIsLoaded] = useState(false)

//   useEffect(() => {
//     // Preload images for smoother transitions
//     const preloadImages = () => {
//       images.forEach((src) => {
//         const img = new Image()
//         img.src = src
//         img.crossOrigin = "anonymous" // Add CORS support for images
//         img.onload = () => setIsLoaded(true)
//       })
//     }
//     preloadImages()

//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
//     }, 5000)

//     return () => clearInterval(interval)
//   }, [images.length])

//   return (
//     <div className="w-full h-full">
//       {isLoaded ? (
//         <AnimatePresence mode="wait">
//           <motion.img
//             key={currentIndex}
//             src={images[currentIndex]}
//             alt={`Slide ${currentIndex + 1}`}
//             className="w-full h-full object-cover"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.5 }}
//           />
//         </AnimatePresence>
//       ) : (
//         <div className="w-full h-full bg-gray-200 animate-pulse"></div>
//       )}

//       <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-30">
//         {images.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentIndex(index)}
//             className={`w-2 h-2 rounded-full ${index === currentIndex ? "bg-white" : "bg-white/50"}`}
//             aria-label={`Go to slide ${index + 1}`}
//             aria-current={index === currentIndex ? "true" : "false"}
//           />
//         ))}
//       </div>
//     </div>
//   )
// }

// // OTP Verification Modal Component with enhanced security
// const OtpVerificationModal = ({ isOpen, onClose, onVerify, onResend, email, purpose }) => {
//   const [otp, setOtp] = useState(["", "", "", "", "", ""])
//   const [isLoading, setIsLoading] = useState(false)
//   const [otpError, setOtpError] = useState("")
//   const [isVerified, setIsVerified] = useState(false)
//   const [recaptchaToken, setRecaptchaToken] = useState("")
//   const [resendDisabled, setResendDisabled] = useState(false)
//   const [resendCountdown, setResendCountdown] = useState(0)
//   const [otpExpiry, setOtpExpiry] = useState(300) // 5 minutes in seconds
//   const inputRefs = useRef([])
//   const recaptchaRef = useRef(null)

//   useEffect(() => {
//     if (isOpen) {
//       setOtp(["", "", "", "", "", ""])
//       setIsVerified(false)
//       setOtpError("")
//       setRecaptchaToken("")
//       setOtpExpiry(300) // Reset OTP expiry
//       if (inputRefs.current[0]) {
//         inputRefs.current[0].focus()
//       }
//       if (recaptchaRef.current) {
//         recaptchaRef.current.reset()
//       }
//     }
//   }, [isOpen])

//   useEffect(() => {
//     if (otp.every((digit) => digit !== "") && recaptchaToken) {
//       handleSubmit()
//     }
//   }, [otp, recaptchaToken])

//   useEffect(() => {
//     let interval
//     if (resendCountdown > 0) {
//       interval = setInterval(() => {
//         setResendCountdown((prev) => prev - 1)
//       }, 1000)
//     } else {
//       setResendDisabled(false)
//     }

//     return () => clearInterval(interval)
//   }, [resendCountdown])

//   // OTP expiry countdown
//   useEffect(() => {
//     let interval
//     if (isOpen && otpExpiry > 0) {
//       interval = setInterval(() => {
//         setOtpExpiry((prev) => {
//           if (prev <= 1) {
//             setOtpError("OTP has expired. Please request a new one.")
//             return 0
//           }
//           return prev - 1
//         })
//       }, 1000)
//     }

//     return () => clearInterval(interval)
//   }, [isOpen, otpExpiry])

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

//   const handleRecaptchaChange = (token) => {
//     setRecaptchaToken(token)
//     if (otp.every((digit) => digit !== "")) {
//       handleSubmit()
//     }
//   }

//   const handleSubmit = async () => {
//     if (!recaptchaToken) {
//       setOtpError("Please verify that you are not a robot")
//       return
//     }

//     if (otpExpiry <= 0) {
//       setOtpError("OTP has expired. Please request a new one.")
//       return
//     }

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
//       setOtpError(error.message || "Failed to verify OTP")
//       if (recaptchaRef.current) {
//         recaptchaRef.current.reset()
//         setRecaptchaToken("")
//       }
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   const handleResend = () => {
//     if (resendDisabled) return

//     if (!recaptchaToken) {
//       setOtpError("Please verify that you are not a robot before resending OTP")
//       return
//     }

//     onResend()
//     setResendDisabled(true)
//     setResendCountdown(60) // 60 seconds cooldown
//     setOtpExpiry(300) // Reset OTP expiry to 5 minutes
//     setOtpError("") // Clear any existing errors

//     if (recaptchaRef.current) {
//       recaptchaRef.current.reset()
//       setRecaptchaToken("")
//     }
//   }

//   // Format time remaining
//   const formatTimeRemaining = (seconds) => {
//     const mins = Math.floor(seconds / 60)
//     const secs = seconds % 60
//     return `${mins}:${secs.toString().padStart(2, "0")}`
//   }

//   if (!isOpen) return null

//   return (
//     <AnimatePresence>
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
//         onClick={(e) => e.target === e.currentTarget && onClose()}
//       >
//         <motion.div
//           initial={{ scale: 0.95, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           exit={{ scale: 0.95, opacity: 0 }}
//           className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md"
//           onClick={(e) => e.stopPropagation()}
//         >
//           <h2 className="text-2xl font-bold mb-4 text-center text-teal-900">
//             {purpose === "resetPassword" ? "Reset Password OTP Verification" : "OTP Verification"}
//           </h2>
//           <p className="text-center text-gray-600 mb-6">
//             {purpose === "resetPassword"
//               ? "Enter the OTP sent to your email to reset your password."
//               : "Enter the OTP sent to your email to verify your account."}
//           </p>

//           <div className="flex items-center justify-center mb-4">
//             <div className="bg-teal-50 text-teal-700 px-3 py-1 rounded-full text-sm flex items-center gap-1">
//               <Mail size={14} />
//               <span className="font-medium">{email}</span>
//             </div>
//           </div>

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
//                 <motion.div
//                   initial={{ opacity: 0, y: -10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg relative mb-4 flex items-center gap-2"
//                   role="alert"
//                 >
//                   <AlertTriangle size={18} />
//                   <span className="block sm:inline">{otpError}</span>
//                 </motion.div>
//               )}

//               <div className="text-center mb-2">
//                 <p className="text-sm text-gray-500">Enter 6-digit OTP</p>
//                 {otpExpiry > 0 && (
//                   <p className="text-xs text-teal-700 mt-1">
//                     OTP expires in <span className="font-semibold">{formatTimeRemaining(otpExpiry)}</span>
//                   </p>
//                 )}
//               </div>

//               <div className="flex justify-center gap-2 mb-6">
//                 {otp.map((data, index) => (
//                   <motion.input
//                     key={index}
//                     ref={(el) => (inputRefs.current[index] = el)}
//                     type="text"
//                     inputMode="numeric"
//                     maxLength="1"
//                     value={data}
//                     onChange={(e) => handleChange(e.target, index)}
//                     onFocus={(e) => e.target.select()}
//                     onKeyDown={(e) => handleBackspace(e, index)}
//                     className="w-12 h-12 border-2 rounded-lg text-center text-xl font-semibold focus:border-teal-500 focus:outline-none"
//                     whileFocus={{ scale: 1.05, borderColor: "#14b8a6" }}
//                     aria-label={`OTP digit ${index + 1}`}
//                   />
//                 ))}
//               </div>

//               <div className="flex justify-center my-4">
//                 <div className="recaptcha-container">
//                   <ReCAPTCHA
//                     ref={recaptchaRef}
//                     sitekey={RECAPTCHA_SITE_KEY}
//                     onChange={handleRecaptchaChange}
//                     theme="light"
//                     size="normal"
//                   />
//                 </div>
//               </div>

//               <div className="flex items-center justify-center mb-4">
//                 <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm flex items-center gap-1">
//                   <Shield size={14} />
//                   <span className="font-medium">Secured with reCAPTCHA</span>
//                 </div>
//               </div>
//             </>
//           )}

//           <p className="mt-4 text-center text-gray-600">
//             Didn't receive the OTP?{" "}
//             <button
//               onClick={handleResend}
//               className={`text-teal-900 font-semibold hover:underline ${resendDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
//               disabled={resendDisabled}
//               aria-disabled={resendDisabled}
//             >
//               {resendDisabled ? `Resend OTP (${resendCountdown}s)` : "Resend OTP"}
//             </button>
//           </p>

//           <div className="mt-6 flex gap-3">
//             <button
//               onClick={onClose}
//               className="flex-1 py-2.5 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition-all"
//             >
//               Cancel
//             </button>

//             {!isVerified && (
//               <button
//                 onClick={handleSubmit}
//                 disabled={!otp.every((digit) => digit !== "") || !recaptchaToken || isLoading || otpExpiry <= 0}
//                 className="flex-1 py-2.5 bg-teal-900 text-white font-semibold rounded-lg hover:bg-teal-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
//                 aria-disabled={!otp.every((digit) => digit !== "") || !recaptchaToken || isLoading || otpExpiry <= 0}
//               >
//                 {isLoading ? (
//                   <>
//                     <RefreshCcw className="animate-spin" size={18} />
//                     Verifying...
//                   </>
//                 ) : (
//                   "Verify OTP"
//                 )}
//               </button>
//             )}
//           </div>
//         </motion.div>
//       </motion.div>
//     </AnimatePresence>
//   )
// }

// // Security Features Component
// const SecurityFeatures = () => {
//   return (
//     <div className="bg-gradient-to-br from-teal-900/30 to-blue-900/30 backdrop-blur-sm p-4 rounded-xl mt-4 border border-white/10">
//       <h3 className="text-sm font-semibold text-white mb-2 flex items-center gap-1">
//         <ShieldCheck size={16} />
//         Enhanced Security Features
//       </h3>
//       <div className="grid grid-cols-2 gap-2">
//         <div className="flex items-center gap-1 text-xs text-white/90">
//           <KeyRound size={12} className="text-white/80" />
//           <span>Secure Authentication</span>
//         </div>
//         <div className="flex items-center gap-1 text-xs text-white/90">
//           <Shield size={12} className="text-white/80" />
//           <span>reCAPTCHA Verification</span>
//         </div>
//         <div className="flex items-center gap-1 text-xs text-white/90">
//           <Shield size={12} className="text-white/80" />
//           <span>Rate Limiting</span>
//         </div>
//         <div className="flex items-center gap-1 text-xs text-white/90">
//           <Lock size={12} className="text-white/80" />
//           <span>OTP Authentication</span>
//         </div>
//       </div>
//     </div>
//   )
// }

// // Generate device fingerprint for additional security
// const generateFingerprint = async () => {
//   try {
//     // Simple fingerprinting based on available browser data
//     const fingerprint = {
//       userAgent: navigator.userAgent,
//       language: navigator.language,
//       screenResolution: `${window.screen.width}x${window.screen.height}`,
//       timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
//       colorDepth: window.screen.colorDepth,
//     }

//     // Create a hash of the fingerprint
//     const fingerprintString = JSON.stringify(fingerprint)
//     const encoder = new TextEncoder()
//     const data = encoder.encode(fingerprintString)
//     const hashBuffer = await crypto.subtle.digest("SHA-256", data)
//     const hashArray = Array.from(new Uint8Array(hashBuffer))
//     const hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("")

//     return hashHex
//   } catch (error) {
//     console.error("Error generating device fingerprint:", error)
//     return ""
//   }
// }

// // Main Authentication System Component
// export default function EnhancedAuthSystem() {
//   const [showForm, setShowForm] = useState(false)
//   const [formType, setFormType] = useState("login")
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     mailId: "",
//     password: "",
//     confirmPassword: "",
//   })
//   const [errors, setErrors] = useState({})
//   const [isAuthenticated, setIsAuthenticated] = useState(false)
//   const [statusAnimation, setStatusAnimation] = useState(null)
//   const [isLoading, setIsLoading] = useState(false)
//   const [showOtpVerification, setShowOtpVerification] = useState(false)
//   const [showForgotPassword, setShowForgotPassword] = useState(false)
//   const [otpPurpose, setOtpPurpose] = useState("")
//   const [recaptchaToken, setRecaptchaToken] = useState("")
//   const [showPasswordRequirements, setShowPasswordRequirements] = useState(false)
//   const [loginAttempts, setLoginAttempts] = useState(0)
//   const recaptchaRef = useRef(null)
//   const navigate = useRef(() => {
//     console.log("Navigation would happen here in a real app")
//   }).current

//   // Generate device fingerprint on component mount
//   useEffect(() => {
//     const getFingerprint = async () => {
//       const fingerprint = await generateFingerprint()
//       //setDeviceFingerprint(fingerprint) // Removed as it's not used anymore.
//     }
//     getFingerprint()
//   }, [])

//   // Check if user is already authenticated
//   useEffect(() => {
//     const storedAuth = localStorage.getItem("isAuthenticated")
//     if (storedAuth === "true") {
//       setIsAuthenticated(true)
//     }
//   }, [])

//   const resetFormData = useCallback(() => {
//     setFormData({
//       firstName: "",
//       lastName: "",
//       mailId: "",
//       password: "",
//       confirmPassword: "",
//     })
//     setErrors({})
//     setRecaptchaToken("")
//     setShowPasswordRequirements(false)
//     if (recaptchaRef.current) {
//       recaptchaRef.current.reset()
//     }
//   }, [])

//   const resetFormDataRef = useRef(resetFormData)

//   useEffect(() => {
//     resetFormDataRef.current = resetFormData
//   }, [resetFormData])

//   const validateForm = useCallback(() => {
//     const newErrors = {}

//     if (formType === "signup") {
//       newErrors.firstName = validateName(formData.firstName)
//       newErrors.lastName = validateName(formData.lastName)
//     }

//     newErrors.mailId = validateEmail(formData.mailId)
//     newErrors.password = validatePassword(formData.password)

//     if (formType === "signup") {
//       if (formData.password !== formData.confirmPassword) {
//         newErrors.confirmPassword = "Passwords do not match"
//       }
//     }

//     if (!recaptchaToken) {
//       newErrors.recaptcha = "Please verify that you are not a robot"
//     }

//     setErrors(newErrors)
//     return Object.values(newErrors).every((error) => !error)
//   }, [formType, formData, recaptchaToken])

//   const showStatusCallback = useCallback((type, message, duration = 2000) => {
//     showStatus(setStatusAnimation, type, message, duration)
//   }, [])

//   const handleLogout = useCallback(() => {
//     showStatusCallback("success", "Successfully logged out")
//     setTimeout(() => {
//       setIsAuthenticated(false)
//       localStorage.removeItem("isAuthenticated")
//       sessionStorage.removeItem("authToken")
//       resetFormDataRef.current()
//       setShowOtpVerification(false)
//       setShowForm(false)
//     }, 2000)
//   }, [showStatusCallback])

//   const handleRecaptchaChange = (token) => {
//     setRecaptchaToken(token)
//     if (!token) {
//       setErrors((prev) => ({ ...prev, recaptcha: "Please verify that you are not a robot" }))
//     } else {
//       setErrors((prev) => {
//         const newErrors = { ...prev }
//         delete newErrors.recaptcha
//         return newErrors
//       })
//     }
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     if (!validateForm()) return

//     // Check rate limiting
//     const rateLimitKey = `${formType}_${formData.mailId}`
//     const rateLimitResult = rateLimiter(rateLimitKey, 5, 60000) // 5 attempts per minute

//     if (!rateLimitResult.allowed) {
//       showStatusCallback(
//         "error",
//         `Too many attempts. Please try again in ${Math.ceil(rateLimitResult.timeRemaining)} seconds.`,
//       )
//       return
//     }

//     setIsLoading(true)

//     try {
//       const apiUrl = formType === "login" ? API_ENDPOINTS.LOGIN : API_ENDPOINTS.REGISTER
//       const requestData = {
//         ...formData,
//         recaptchaToken,
//       }

//       const data = await callApi(apiUrl, "POST", requestData)

//       if (formType === "login") {
//         setLoginAttempts(0) // Reset login attempts on success
//       }

//       setOtpPurpose(formType === "login" ? "login" : "signup")
//       setShowOtpVerification(true)
//     } catch (error) {
//       if (formType === "login") {
//         setLoginAttempts((prev) => prev + 1)
//       }
//       showStatusCallback("error", error.message || `${formType === "login" ? "Login" : "Registration"} failed`)
//       if (recaptchaRef.current) {
//         recaptchaRef.current.reset()
//         setRecaptchaToken("")
//       }
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   const handleOtpVerification = useCallback(
//     async (otp) => {
//       try {
//         let endpoint = API_ENDPOINTS.VERIFY_OTP
//         let requestData = {
//           mailId: formData.mailId,
//           otp: otp,
//           recaptchaToken,
//         }

//         if (otpPurpose === "resetPassword") {
//           endpoint = API_ENDPOINTS.VERIFY_RESET_PASSWORD_OTP
//           requestData = {
//             ...requestData,
//             password: formData.password,
//             confirmPassword: formData.confirmPassword,
//           }
//         }

//         const data = await callApi(endpoint, "POST", requestData)

//         setShowOtpVerification(false)

//         if (otpPurpose === "resetPassword") {
//           showStatusCallback("success", "Password reset successful! Please login with your new password.")
//           resetFormDataRef.current()
//           setShowForgotPassword(false)
//           setOtpPurpose("")
//           setTimeout(() => {
//             setFormType("login")
//             setShowForm(true)
//           }, 100)
//         } else {
//           showStatusCallback("success", "Authentication successful!")
//           sessionStorage.setItem("authToken", data.token || "dummy-token")
//           setIsAuthenticated(true)
//           localStorage.setItem("isAuthenticated", "true")
//           resetFormDataRef.current()
//           setShowOtpVerification(false)
//           setShowForm(false)

//           // Redirect to student portal after OTP verification
//           navigate("/student-portal")
//         }
//       } catch (error) {
//         showStatusCallback("error", error.message || "OTP verification failed")
//         if (recaptchaRef.current) {
//           recaptchaRef.current.reset()
//           setRecaptchaToken("")
//         }
//       } finally {
//         setIsLoading(false)
//       }
//     },
//     [formData, otpPurpose, showStatusCallback, navigate, recaptchaToken],
//   )

//   const handleForgotPassword = async (e) => {
//     e.preventDefault()
//     if (!validateForm()) return

//     // Check rate limiting
//     const rateLimitKey = `forgot_password_${formData.mailId}`
//     const rateLimitResult = rateLimiter(rateLimitKey, 3, 300000) // 3 attempts per 5 minutes

//     if (!rateLimitResult.allowed) {
//       showStatusCallback(
//         "error",
//         `Too many attempts. Please try again in ${Math.ceil(rateLimitResult.timeRemaining / 60)} minutes. Remaining attempts: ${rateLimitResult.remainingAttempts}`,
//       )
//       return
//     }

//     setIsLoading(true)

//     try {
//       const requestData = {
//         mailId: formData.mailId,
//         newPassword: formData.password,
//         confirmNewPassword: formData.confirmPassword,
//         recaptchaToken,
//       }

//       const data = await callApi(API_ENDPOINTS.FORGOT_PASSWORD, "POST", requestData)

//       showStatusCallback("success", "Password reset email sent. Please check your inbox.")
//       setOtpPurpose("resetPassword")
//       setShowOtpVerification(true)
//     } catch (error) {
//       showStatusCallback("error", error.message || "Failed to process forgot password request")
//       if (recaptchaRef.current) {
//         recaptchaRef.current.reset()
//         setRecaptchaToken("")
//       }
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   const handleFormTypeChange = useCallback((type) => {
//     resetFormDataRef.current()
//     setFormType(type)
//   }, [])

//   const toggleForgotPassword = useCallback((show) => {
//     resetFormDataRef.current()
//     setShowForgotPassword(show)
//   }, [])

//   const handleResendOtp = async () => {
//     if (!recaptchaToken) {
//       showStatusCallback("error", "Please verify that you are not a robot")
//       return
//     }

//     // Check rate limiting for OTP resend
//     const rateLimitKey = `resend_otp_${formData.mailId}`
//     const rateLimitResult = rateLimiter(rateLimitKey, 3, 300000) // 3 attempts per 5 minutes

//     if (!rateLimitResult.allowed) {
//       showStatusCallback(
//         "error",
//         `Too many resend attempts. Please try again in ${Math.ceil(rateLimitResult.timeRemaining / 60)} minutes. Remaining attempts: ${rateLimitResult.remainingAttempts}`,
//       )
//       return
//     }

//     setIsLoading(true)
//     try {
//       const requestData = {
//         mailId: formData.mailId,
//         recaptchaToken,
//         purpose: otpPurpose,
//       }

//       const data = await callApi(API_ENDPOINTS.RESEND_OTP, "POST", requestData)

//       showStatusCallback("success", "OTP resent successfully!")
//     } catch (error) {
//       showStatusCallback("error", error.message || "Failed to resend OTP")
//       if (recaptchaRef.current) {
//         recaptchaRef.current.reset()
//         setRecaptchaToken("")
//       }
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   // Password requirements component
//   const PasswordRequirements = () => {
//     const requirements = [
//       { text: "At least 8 characters", met: formData.password.length >= 8 },
//       { text: "At least one uppercase letter", met: /[A-Z]/.test(formData.password) },
//       { text: "At least one lowercase letter", met: /[a-z]/.test(formData.password) },
//       { text: "At least one number", met: /[0-9]/.test(formData.password) },
//       { text: "At least one special character", met: /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(formData.password) },
//     ]

//     return (
//       <motion.div
//         initial={{ opacity: 0, height: 0 }}
//         animate={{ opacity: 1, height: "auto" }}
//         exit={{ opacity: 0, height: 0 }}
//         className="bg-gray-50 p-3 rounded-lg mt-1 mb-3"
//       >
//         <p className="text-sm font-medium text-gray-700 mb-2">Password must contain:</p>
//         <ul className="space-y-1">
//           {requirements.map((req, index) => (
//             <li key={index} className="flex items-center gap-2 text-sm">
//               <span
//                 className={`flex-shrink-0 w-5 h-5 flex items-center justify-center rounded-full ${
//                   req.met ? "bg-green-100 text-green-600" : "bg-gray-200 text-gray-400"
//                 }`}
//               >
//                 {req.met ? <Check size={12} /> : ""}
//               </span>
//               <span className={req.met ? "text-green-600" : "text-gray-500"}>{req.text}</span>
//             </li>
//           ))}
//         </ul>
//       </motion.div>
//     )
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-teal-50 to-blue-50">
//       <AnimatePresence>
//         {statusAnimation && <StatusAnimation type={statusAnimation.type} message={statusAnimation.message} />}

//         {!isAuthenticated ? (
//           <motion.button
//             onClick={() => {
//               resetFormDataRef.current()
//               setShowForm(true)
//             }}
//             className="px-6 py-3 bg-teal-900 text-white font-semibold rounded-full shadow-lg hover:bg-teal-800 transition-all flex items-center justify-center gap-2"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <LogIn size={18} />
//             Sign In
//           </motion.button>
//         ) : (
//           <motion.button
//             onClick={handleLogout}
//             className="px-6 py-3 bg-teal-900 text-white font-semibold rounded-full shadow-lg hover:bg-teal-800 transition-all flex items-center justify-center gap-2"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <LogOut size={18} />
//             Sign Out
//           </motion.button>
//         )}

//         <AnimatePresence>
//           {showForm && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-2 z-50 overflow-y-auto"
//               onClick={() => {
//                 resetFormDataRef.current()
//                 setShowForm(false)
//               }}
//             >
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.95 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.95 }}
//                 className="bg-white/90 backdrop-blur-md rounded-xl shadow-2xl w-full max-w-lg lg:max-w-5xl mx-auto my-2 relative flex flex-col lg:flex-row"
//                 onClick={(e) => e.stopPropagation()}
//               >
//                 <button
//                   onClick={() => setShowForm(false)}
//                   className="absolute right-2 top-2 p-2 rounded-full bg-white/80 hover:bg-gray-100 transition-colors z-50 shadow-md"
//                   aria-label="Close form"
//                 >
//                   <X className="w-5 h-5 text-gray-600" />
//                 </button>

//                 <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-teal-400 to-teal-900 rounded-l-xl relative overflow-hidden">
//                   <div className="absolute inset-0 z-10">
//                     <ImageSlider />
//                   </div>
//                   <div className="absolute inset-0 bg-black/40 z-20 flex flex-col justify-between p-8">
//                     <motion.div
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       transition={{ delay: 0.2 }}
//                       className="text-white text-center mt-8"
//                     >
//                       <h1 className="text-3xl font-bold mb-4">Welcome to Our Platform!</h1>
//                       <p className="text-lg opacity-90 mb-6">Join our community and start your journey today.</p>
//                       <div className="flex items-center justify-center mb-4">
//                         <div className="bg-white/20 text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2">
//                           <Shield size={16} />
//                           <span className="font-medium">Secure Authentication</span>
//                         </div>
//                       </div>
//                     </motion.div>
//                     <SecurityFeatures />
//                   </div>
//                 </div>

//                 <div className="w-full lg:w-1/2 p-4 sm:p-6 overflow-y-auto max-h-[90vh] lg:max-h-[80vh]">
//                   <motion.div className="w-full max-w-md mx-auto space-y-4">
//                     {showForgotPassword ? (
//                       <div>
//                         <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center text-teal-900">
//                           Reset Password
//                         </h2>
//                         <form onSubmit={handleForgotPassword} className="space-y-4">
//                           <InputField
//                             icon={Mail}
//                             type="email"
//                             placeholder="Email"
//                             value={formData.mailId}
//                             onChange={(e) => setFormData({ ...formData, mailId: e.target.value })}
//                             error={errors.mailId}
//                             validate={validateEmail}
//                             autoComplete="email"
//                           />
//                           <InputField
//                             icon={Lock}
//                             type="password"
//                             placeholder="New Password"
//                             value={formData.password}
//                             onChange={(e) => {
//                               setFormData({ ...formData, password: e.target.value })
//                               setShowPasswordRequirements(true)
//                             }}
//                             error={errors.password}
//                             validate={validatePassword}
//                             autoComplete="new-password"
//                             showPasswordStrength={true}
//                           />

//                           <AnimatePresence>
//                             {showPasswordRequirements && formData.password && <PasswordRequirements />}
//                           </AnimatePresence>

//                           <InputField
//                             icon={Lock}
//                             type="password"
//                             placeholder="Confirm New Password"
//                             value={formData.confirmPassword}
//                             onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
//                             error={errors.confirmPassword}
//                             validate={(value) => (value !== formData.password ? "Passwords do not match" : undefined)}
//                             autoComplete="new-password"
//                           />

//                           <div className="flex justify-center my-4">
//                             <ReCAPTCHA
//                               ref={recaptchaRef}
//                               sitekey={RECAPTCHA_SITE_KEY}
//                               onChange={handleRecaptchaChange}
//                               theme="light"
//                             />
//                           </div>
//                           {errors.recaptcha && (
//                             <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
//                               <AlertTriangle size={14} />
//                               {errors.recaptcha}
//                             </p>
//                           )}

//                           <button
//                             type="submit"
//                             disabled={isLoading}
//                             className="w-full py-3 px-4 bg-teal-900 text-white font-semibold rounded-lg shadow-lg hover:bg-teal-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm"
//                           >
//                             {isLoading ? (
//                               <>
//                                 <RefreshCcw className="animate-spin" size={20} />
//                                 Resetting Password...
//                               </>
//                             ) : (
//                               "Reset Password"
//                             )}
//                           </button>
//                         </form>
//                         <div className="mt-4 text-center text-sm text-teal-700">
//                           <button
//                             onClick={() => toggleForgotPassword(false)}
//                             className="text-teal-900 font-semibold hover:underline"
//                           >
//                             Back to Login
//                           </button>
//                         </div>
//                       </div>
//                     ) : (
//                       <div>
//                         <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-teal-900">
//                           {formType === "login" ? "Welcome Back!" : "Create an Account"}
//                         </h2>

//                         <form onSubmit={handleSubmit} className="space-y-4">
//                           {formType === "signup" && (
//                             <>
//                               <InputField
//                                 icon={User}
//                                 type="text"
//                                 placeholder="First Name"
//                                 value={formData.firstName}
//                                 onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
//                                 error={errors.firstName}
//                                 validate={validateName}
//                                 autoComplete="given-name"
//                               />
//                               <InputField
//                                 icon={User}
//                                 type="text"
//                                 placeholder="Last Name"
//                                 value={formData.lastName}
//                                 onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
//                                 error={errors.lastName}
//                                 validate={validateName}
//                                 autoComplete="family-name"
//                               />
//                             </>
//                           )}
//                           <InputField
//                             icon={Mail}
//                             type="email"
//                             placeholder="Email"
//                             value={formData.mailId}
//                             onChange={(e) => setFormData({ ...formData, mailId: e.target.value })}
//                             error={errors.mailId}
//                             validate={validateEmail}
//                             autoComplete="email"
//                           />
//                           <InputField
//                             icon={Lock}
//                             type="password"
//                             placeholder="Password"
//                             value={formData.password}
//                             onChange={(e) => {
//                               setFormData({ ...formData, password: e.target.value })
//                               if (formType === "signup") {
//                                 setShowPasswordRequirements(true)
//                               }
//                             }}
//                             error={errors.password}
//                             validate={validatePassword}
//                             autoComplete={formType === "login" ? "current-password" : "new-password"}
//                             showPasswordStrength={formType === "signup"}
//                           />

//                           <AnimatePresence>
//                             {formType === "signup" && showPasswordRequirements && formData.password && (
//                               <PasswordRequirements />
//                             )}
//                           </AnimatePresence>

//                           {formType === "signup" && (
//                             <InputField
//                               icon={Lock}
//                               type="password"
//                               placeholder="Confirm Password"
//                               value={formData.confirmPassword}
//                               onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
//                               error={errors.confirmPassword}
//                               validate={(value) => (value !== formData.password ? "Passwords do not match" : undefined)}
//                               autoComplete="new-password"
//                             />
//                           )}

//                           <div className="flex justify-center my-4">
//                             <ReCAPTCHA
//                               ref={recaptchaRef}
//                               sitekey={RECAPTCHA_SITE_KEY}
//                               onChange={handleRecaptchaChange}
//                               theme="light"
//                             />
//                           </div>
//                           {errors.recaptcha && (
//                             <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
//                               <AlertTriangle size={14} />
//                               {errors.recaptcha}
//                             </p>
//                           )}

//                           <button
//                             type="submit"
//                             disabled={isLoading}
//                             className="w-full py-3 px-4 bg-teal-900 text-white font-semibold rounded-lg shadow-lg hover:bg-teal-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm"
//                           >
//                             {isLoading ? (
//                               <>
//                                 <RefreshCcw className="animate-spin" size={20} />
//                                 {formType === "login" ? "Logging in..." : "Signing up..."}
//                               </>
//                             ) : (
//                               <>
//                                 <ArrowRight size={20} />
//                                 {formType === "login" ? "Login" : "Sign Up"}
//                               </>
//                             )}
//                           </button>
//                         </form>

//                         <div className="mt-6 text-center text-sm text-teal-700 space-y-2">
//                           {formType === "login" ? (
//                             <>
//                               <p>
//                                 Don't have an account?{" "}
//                                 <button
//                                   onClick={() => handleFormTypeChange("signup")}
//                                   className="text-teal-900 font-semibold hover:underline"
//                                 >
//                                   Sign up
//                                 </button>
//                               </p>
//                               <p>
//                                 <button
//                                   onClick={() => toggleForgotPassword(true)}
//                                   className="text-teal-900 font-semibold hover:underline"
//                                 >
//                                   Forgot Password?
//                                 </button>
//                               </p>
//                             </>
//                           ) : (
//                             <p>
//                               Already have an account?{" "}
//                               <button
//                                 onClick={() => handleFormTypeChange("login")}
//                                 className="text-teal-900 font-semibold hover:underline"
//                               >
//                                 Sign in
//                               </button>
//                             </p>
//                           )}
//                         </div>

//                         {/* Show on mobile only */}
//                         <div className="mt-6 lg:hidden">
//                           <SecurityFeatures />
//                         </div>
//                       </div>
//                     )}
//                   </motion.div>
//                 </div>
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </AnimatePresence>

//       <OtpVerificationModal
//         isOpen={showOtpVerification}
//         onClose={() => setShowOtpVerification(false)}
//         onVerify={handleOtpVerification}
//         onResend={handleResendOtp}
//         email={formData.mailId}
//         purpose={otpPurpose}
//       />
//     </div>
//   )
// }



// "use client"

// import { useState, useCallback, useRef, useEffect } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import {
//   RefreshCcw,
//   Mail,
//   Lock,
//   User,
//   ArrowRight,
//   LogOut,
//   LogIn,
//   X,
//   CheckCircle,
//   Shield,
//   Eye,
//   EyeOff,
//   AlertTriangle,
//   Check,
//   KeyRound,
//   ShieldCheck,
// } from "lucide-react"

// // Base URL for API endpoints
// const BASE_URL = "https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1"

// // API endpoints
// const API_ENDPOINTS = {
//   REGISTER: "https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1/register",
//   LOGIN: `${BASE_URL}/login`,
//   VERIFY_OTP: `${BASE_URL}/verify-otp`,
//   RESEND_OTP: `${BASE_URL}/resend-otp`,
//   FORGOT_PASSWORD: `${BASE_URL}/forgetPassword`,
// }

// // Utility functions
// const showStatus = (setStatusAnimation, type, message, duration = 2000) => {
//   setStatusAnimation({ type, message })
//   setTimeout(() => {
//     setStatusAnimation(null)
//   }, duration)
// }

// const validateEmail = (email) => {
//   if (!email) return "Email is required"
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
//   if (!emailRegex.test(email)) return "Invalid email format"
//   return undefined
// }

// const validatePassword = (password) => {
//   if (!password) return "Password is required"
//   if (password.length < 8) return "Password must be at least 8 characters long"
//   if (!/[A-Z]/.test(password)) return "Password must include at least one uppercase letter"
//   if (!/[a-z]/.test(password)) return "Password must include at least one lowercase letter"
//   if (!/[0-9]/.test(password)) return "Password must include at least one number"
//   if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(password))
//     return "Password must include at least one special character"
//   return undefined
// }

// const validateName = (name) => {
//   if (!name) return "Name is required"
//   if (name.length < 2) return "Name must be at least 2 characters long"
//   if (!/^[a-zA-Z\s-]+$/.test(name)) return "Name can only contain letters, spaces, and hyphens"
//   return undefined
// }

// // API call wrapper function with CORS handling
// const callApi = async (endpoint, method, data) => {
//   try {
//     const response = await fetch(endpoint, {
//       method: method,
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//         "Access-Control-Allow-Origin": "*", // Allow any origin to access the resource
//       },
//       mode: "cors", // Enable CORS
//       body: JSON.stringify(data),
//     })

//     // Handle non-JSON responses
//     const contentType = response.headers.get("content-type")
//     if (contentType && contentType.includes("application/json")) {
//       const responseData = await response.json()

//       if (!response.ok) {
//         throw new Error(responseData.message || `Request failed with status ${response.status}`)
//       }

//       return responseData
//     } else {
//       const textResponse = await response.text()

//       if (!response.ok) {
//         throw new Error(`Request failed with status ${response.status}`)
//       }

//       return { success: true, text: textResponse }
//     }
//   } catch (error) {
//     console.error(`API call to ${endpoint} failed:`, error)
//     // Provide more detailed error information for debugging
//     if (error.name === "TypeError" && error.message.includes("Failed to fetch")) {
//       throw new Error("Network error: Please check your internet connection or the API endpoint might be unavailable")
//     }
//     throw error
//   }
// }

// // Input Field Component
// const InputField = ({
//   icon: Icon,
//   type,
//   placeholder,
//   value,
//   onChange,
//   error,
//   validate,
//   autoComplete = "off",
//   required = true,
//   showPasswordStrength = false,
// }) => {
//   const [focused, setFocused] = useState(false)
//   const [localError, setLocalError] = useState(error)
//   const [showPassword, setShowPassword] = useState(false)
//   const [passwordStrength, setPasswordStrength] = useState(0)
//   const actualType = type === "password" && showPassword ? "text" : type
//   const inputRef = useRef(null)

//   useEffect(() => {
//     setLocalError(error)
//   }, [error])

//   useEffect(() => {
//     if (type === "password" && showPasswordStrength) {
//       // Calculate password strength
//       let strength = 0
//       if (value.length >= 8) strength += 1
//       if (/[A-Z]/.test(value)) strength += 1
//       if (/[a-z]/.test(value)) strength += 1
//       if (/[0-9]/.test(value)) strength += 1
//       if (/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(value)) strength += 1

//       setPasswordStrength(strength)
//     }
//   }, [value, type, showPasswordStrength])

//   const handleBlur = () => {
//     setFocused(false)
//     if (validate && value) {
//       const validationError = validate(value)
//       setLocalError(validationError)
//     }
//   }

//   const getStrengthColor = () => {
//     if (passwordStrength <= 1) return "bg-red-500"
//     if (passwordStrength <= 3) return "bg-yellow-500"
//     return "bg-green-500"
//   }

//   const getStrengthText = () => {
//     if (passwordStrength <= 1) return "Weak"
//     if (passwordStrength <= 3) return "Medium"
//     return "Strong"
//   }

//   return (
//     <div className="space-y-1">
//       <div
//         className={`flex items-center border-2 rounded-lg overflow-hidden transition-all ${
//           focused ? "border-teal-500 shadow-md" : localError ? "border-red-400" : "border-gray-300"
//         }`}
//       >
//         <div className="flex items-center justify-center w-12 h-12 bg-gray-50 text-gray-500">
//           <Icon size={20} />
//         </div>
//         <input
//           ref={inputRef}
//           type={actualType}
//           placeholder={placeholder}
//           value={value}
//           onChange={onChange}
//           onFocus={() => setFocused(true)}
//           onBlur={handleBlur}
//           className="flex-1 h-12 px-4 bg-transparent outline-none"
//           autoComplete={autoComplete}
//           required={required}
//           aria-invalid={!!localError}
//           aria-describedby={localError ? `${placeholder}-error` : undefined}
//         />
//         {type === "password" && value && (
//           <button
//             type="button"
//             onClick={() => setShowPassword(!showPassword)}
//             className="px-3 text-gray-500 hover:text-gray-700"
//             aria-label={showPassword ? "Hide password" : "Show password"}
//           >
//             {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//           </button>
//         )}
//       </div>

//       {localError && (
//         <p id={`${placeholder}-error`} className="text-red-500 text-sm flex items-center gap-1" role="alert">
//           <AlertTriangle size={14} />
//           {localError}
//         </p>
//       )}

//       {type === "password" && showPasswordStrength && value && !localError && (
//         <div className="space-y-1">
//           <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
//             <div
//               className={`h-full transition-all ${getStrengthColor()}`}
//               style={{ width: `${(passwordStrength / 5) * 100}%` }}
//             />
//           </div>
//           <p
//             className={`text-xs flex items-center gap-1 ${
//               passwordStrength <= 1 ? "text-red-500" : passwordStrength <= 3 ? "text-yellow-500" : "text-green-500"
//             }`}
//           >
//             Password strength: {getStrengthText()}
//           </p>
//         </div>
//       )}
//     </div>
//   )
// }

// // Status Animation Component with improved accessibility
// const StatusAnimation = ({ type, message }) => {
//   const variants = {
//     initial: { opacity: 0, y: -20 },
//     animate: { opacity: 1, y: 0 },
//     exit: { opacity: 0, y: -20 },
//   }

//   const getIcon = () => {
//     switch (type) {
//       case "success":
//         return <CheckCircle className="w-6 h-6" />
//       case "error":
//         return <AlertTriangle className="w-6 h-6" />
//       default:
//         return <RefreshCcw className="w-6 h-6 animate-spin" />
//     }
//   }

//   const getColors = () => {
//     switch (type) {
//       case "success":
//         return "bg-green-100 text-green-800 border-green-200"
//       case "error":
//         return "bg-red-100 text-red-800 border-red-200"
//       default:
//         return "bg-blue-100 text-blue-800 border-blue-200"
//     }
//   }

//   return (
//     <motion.div
//       variants={variants}
//       initial="initial"
//       animate="animate"
//       exit="exit"
//       className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg border ${getColors()} flex items-center gap-3 max-w-md`}
//       role="alert"
//       aria-live="assertive"
//     >
//       {getIcon()}
//       <p>{message}</p>
//     </motion.div>
//   )
// }

// // Image Slider Component with improved performance
// const ImageSlider = () => {
//   const images = [
//     "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//     "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//     "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//   ]

//   const [currentIndex, setCurrentIndex] = useState(0)
//   const [isLoaded, setIsLoaded] = useState(false)

//   useEffect(() => {
//     // Preload images for smoother transitions
//     const preloadImages = () => {
//       images.forEach((src) => {
//         const img = new Image()
//         img.src = src
//         img.crossOrigin = "anonymous" // Add CORS support for images
//         img.onload = () => setIsLoaded(true)
//       })
//     }
//     preloadImages()

//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
//     }, 5000)

//     return () => clearInterval(interval)
//   }, [images.length])

//   return (
//     <div className="w-full h-full">
//       {isLoaded ? (
//         <AnimatePresence mode="wait">
//           <motion.img
//             key={currentIndex}
//             src={images[currentIndex]}
//             alt={`Slide ${currentIndex + 1}`}
//             className="w-full h-full object-cover"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.5 }}
//           />
//         </AnimatePresence>
//       ) : (
//         <div className="w-full h-full bg-gray-200 animate-pulse"></div>
//       )}

//       <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-30">
//         {images.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentIndex(index)}
//             className={`w-2 h-2 rounded-full ${index === currentIndex ? "bg-white" : "bg-white/50"}`}
//             aria-label={`Go to slide ${index + 1}`}
//             aria-current={index === currentIndex ? "true" : "false"}
//           />
//         ))}
//       </div>
//     </div>
//   )
// }

// // OTP Verification Modal Component
// const OtpVerificationModal = ({ isOpen, onClose, onVerify, onResend, email, purpose }) => {
//   const [otp, setOtp] = useState(["", "", "", "", "", ""])
//   const [isLoading, setIsLoading] = useState(false)
//   const [otpError, setOtpError] = useState("")
//   const [isVerified, setIsVerified] = useState(false)
//   const [resendDisabled, setResendDisabled] = useState(false)
//   const [resendCountdown, setResendCountdown] = useState(0)
//   const [otpExpiry, setOtpExpiry] = useState(300) // 5 minutes in seconds
//   const inputRefs = useRef([])

//   useEffect(() => {
//     if (isOpen) {
//       setOtp(["", "", "", "", "", ""])
//       setIsVerified(false)
//       setOtpError("")
//       setOtpExpiry(300) // Reset OTP expiry
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

//   useEffect(() => {
//     let interval
//     if (resendCountdown > 0) {
//       interval = setInterval(() => {
//         setResendCountdown((prev) => prev - 1)
//       }, 1000)
//     } else {
//       setResendDisabled(false)
//     }

//     return () => clearInterval(interval)
//   }, [resendCountdown])

//   // OTP expiry countdown
//   useEffect(() => {
//     let interval
//     if (isOpen && otpExpiry > 0) {
//       interval = setInterval(() => {
//         setOtpExpiry((prev) => {
//           if (prev <= 1) {
//             setOtpError("OTP has expired. Please request a new one.")
//             return 0
//           }
//           return prev - 1
//         })
//       }, 1000)
//     }

//     return () => clearInterval(interval)
//   }, [isOpen, otpExpiry])

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
//     if (otpExpiry <= 0) {
//       setOtpError("OTP has expired. Please request a new one.")
//       return
//     }

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
//       setOtpError(error.message || "Failed to verify OTP")
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   const handleResend = () => {
//     if (resendDisabled) return

//     onResend()
//     setResendDisabled(true)
//     setResendCountdown(60) // 60 seconds cooldown
//     setOtpExpiry(300) // Reset OTP expiry to 5 minutes
//     setOtpError("") // Clear any existing errors
//   }

//   // Format time remaining
//   const formatTimeRemaining = (seconds) => {
//     const mins = Math.floor(seconds / 60)
//     const secs = seconds % 60
//     return `${mins}:${secs.toString().padStart(2, "0")}`
//   }

//   if (!isOpen) return null

//   return (
//     <AnimatePresence>
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
//         onClick={(e) => e.target === e.currentTarget && onClose()}
//       >
//         <motion.div
//           initial={{ scale: 0.95, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           exit={{ scale: 0.95, opacity: 0 }}
//           className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md"
//           onClick={(e) => e.stopPropagation()}
//         >
//           <h2 className="text-2xl font-bold mb-4 text-center text-teal-900">
//             {purpose === "resetPassword" ? "Reset Password OTP Verification" : "OTP Verification"}
//           </h2>
//           <p className="text-center text-gray-600 mb-6">
//             {purpose === "resetPassword"
//               ? "Enter the OTP sent to your email to reset your password."
//               : "Enter the OTP sent to your email to verify your account."}
//           </p>

//           <div className="flex items-center justify-center mb-4">
//             <div className="bg-teal-50 text-teal-700 px-3 py-1 rounded-full text-sm flex items-center gap-1">
//               <Mail size={14} />
//               <span className="font-medium">{email}</span>
//             </div>
//           </div>

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
//                 <motion.div
//                   initial={{ opacity: 0, y: -10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg relative mb-4 flex items-center gap-2"
//                   role="alert"
//                 >
//                   <AlertTriangle size={18} />
//                   <span className="block sm:inline">{otpError}</span>
//                 </motion.div>
//               )}

//               <div className="text-center mb-2">
//                 <p className="text-sm text-gray-500">Enter 6-digit OTP</p>
//                 {otpExpiry > 0 && (
//                   <p className="text-xs text-teal-700 mt-1">
//                     OTP expires in <span className="font-semibold">{formatTimeRemaining(otpExpiry)}</span>
//                   </p>
//                 )}
//               </div>

//               <div className="flex justify-center gap-2 mb-6">
//                 {otp.map((data, index) => (
//                   <motion.input
//                     key={index}
//                     ref={(el) => (inputRefs.current[index] = el)}
//                     type="text"
//                     inputMode="numeric"
//                     maxLength="1"
//                     value={data}
//                     onChange={(e) => handleChange(e.target, index)}
//                     onFocus={(e) => e.target.select()}
//                     onKeyDown={(e) => handleBackspace(e, index)}
//                     className="w-12 h-12 border-2 rounded-lg text-center text-xl font-semibold focus:border-teal-500 focus:outline-none"
//                     whileFocus={{ scale: 1.05, borderColor: "#14b8a6" }}
//                     aria-label={`OTP digit ${index + 1}`}
//                   />
//                 ))}
//               </div>
//             </>
//           )}

//           <p className="mt-4 text-center text-gray-600">
//             Didn't receive the OTP?{" "}
//             <button
//               onClick={handleResend}
//               className={`text-teal-900 font-semibold hover:underline ${resendDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
//               disabled={resendDisabled}
//               aria-disabled={resendDisabled}
//             >
//               {resendDisabled ? `Resend OTP (${resendCountdown}s)` : "Resend OTP"}
//             </button>
//           </p>

//           <div className="mt-6 flex gap-3">
//             <button
//               onClick={onClose}
//               className="flex-1 py-2.5 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition-all"
//             >
//               Cancel
//             </button>

//             {!isVerified && (
//               <button
//                 onClick={handleSubmit}
//                 disabled={!otp.every((digit) => digit !== "") || isLoading || otpExpiry <= 0}
//                 className="flex-1 py-2.5 bg-teal-900 text-white font-semibold rounded-lg hover:bg-teal-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
//                 aria-disabled={!otp.every((digit) => digit !== "") || isLoading || otpExpiry <= 0}
//               >
//                 {isLoading ? (
//                   <>
//                     <RefreshCcw className="animate-spin" size={18} />
//                     Verifying...
//                   </>
//                 ) : (
//                   "Verify OTP"
//                 )}
//               </button>
//             )}
//           </div>
//         </motion.div>
//       </motion.div>
//     </AnimatePresence>
//   )
// }

// // Security Features Component
// const SecurityFeatures = () => {
//   return (
//     <div className="bg-gradient-to-br from-teal-900/30 to-blue-900/30 backdrop-blur-sm p-4 rounded-xl mt-4 border border-white/10">
//       <h3 className="text-sm font-semibold text-white mb-2 flex items-center gap-1">
//         <ShieldCheck size={16} />
//         Authentication Features
//       </h3>
//       <div className="grid grid-cols-2 gap-2">
//         <div className="flex items-center gap-1 text-xs text-white/90">
//           <KeyRound size={12} className="text-white/80" />
//           <span>Secure Authentication</span>
//         </div>
//         <div className="flex items-center gap-1 text-xs text-white/90">
//           <Shield size={12} className="text-white/80" />
//           <span>Password Protection</span>
//         </div>
//         <div className="flex items-center gap-1 text-xs text-white/90">
//           <Shield size={12} className="text-white/80" />
//           <span>Email Verification</span>
//         </div>
//         <div className="flex items-center gap-1 text-xs text-white/90">
//           <Lock size={12} className="text-white/80" />
//           <span>OTP Authentication</span>
//         </div>
//       </div>
//     </div>
//   )
// }

// // Main Authentication System Component
// export default function EnhancedAuthSystem() {
//   const [showForm, setShowForm] = useState(false)
//   const [formType, setFormType] = useState("login")
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     mailId: "",
//     password: "",
//     confirmPassword: "",
//   })
//   const [errors, setErrors] = useState({})
//   const [isAuthenticated, setIsAuthenticated] = useState(false)
//   const [statusAnimation, setStatusAnimation] = useState(null)
//   const [isLoading, setIsLoading] = useState(false)
//   const [showOtpVerification, setShowOtpVerification] = useState(false)
//   const [showForgotPassword, setShowForgotPassword] = useState(false)
//   const [otpPurpose, setOtpPurpose] = useState("")
//   const [showPasswordRequirements, setShowPasswordRequirements] = useState(false)
//   const [loginAttempts, setLoginAttempts] = useState(0)
//   const navigate = useRef(() => {
//     console.log("Navigation would happen here in a real app")
//   }).current

//   // Check if user is already authenticated
//   useEffect(() => {
//     const storedAuth = localStorage.getItem("isAuthenticated")
//     if (storedAuth === "true") {
//       setIsAuthenticated(true)
//     }
//   }, [])

//   const resetFormData = useCallback(() => {
//     setFormData({
//       firstName: "",
//       lastName: "",
//       mailId: "",
//       password: "",
//       confirmPassword: "",
//     })
//     setErrors({})
//     setShowPasswordRequirements(false)
//   }, [])

//   const resetFormDataRef = useRef(resetFormData)

//   useEffect(() => {
//     resetFormDataRef.current = resetFormData
//   }, [resetFormData])

//   const validateForm = useCallback(() => {
//     const newErrors = {}

//     if (formType === "signup") {
//       newErrors.firstName = validateName(formData.firstName)
//       newErrors.lastName = validateName(formData.lastName)
//     }

//     newErrors.mailId = validateEmail(formData.mailId)
//     newErrors.password = validatePassword(formData.password)

//     if (formType === "signup") {
//       if (formData.password !== formData.confirmPassword) {
//         newErrors.confirmPassword = "Passwords do not match"
//       }
//     }

//     setErrors(newErrors)
//     return Object.values(newErrors).every((error) => !error)
//   }, [formType, formData])

//   const showStatusCallback = useCallback((type, message, duration = 2000) => {
//     showStatus(setStatusAnimation, type, message, duration)
//   }, [])

//   const handleLogout = useCallback(() => {
//     showStatusCallback("success", "Successfully logged out")
//     setTimeout(() => {
//       setIsAuthenticated(false)
//       localStorage.removeItem("isAuthenticated")
//       sessionStorage.removeItem("authToken")
//       resetFormDataRef.current()
//       setShowOtpVerification(false)
//       setShowForm(false)
//     }, 2000)
//   }, [showStatusCallback])

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     if (!validateForm()) return

//     setIsLoading(true)

//     try {
//       const apiUrl = formType === "login" ? API_ENDPOINTS.LOGIN : API_ENDPOINTS.REGISTER
//       const requestData = {
//         ...formData,
//       }

//       const data = await callApi(apiUrl, "POST", requestData)

//       debugger
//       if (formType === "login") {
//         setLoginAttempts(0) // Reset login attempts on success
//       }

//       setOtpPurpose(formType === "login" ? "login" : "signup")
//       setShowOtpVerification(true)
//     } catch (error) {
//         debugger
//       if (formType === "login") {
//         setLoginAttempts((prev) => prev + 1)
//       }
//       showStatusCallback("error", error.message || `${formType === "login" ? "Login" : "Registration"} failed`)
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   const handleOtpVerification = useCallback(
//     async (otp) => {
//       try {
//         let endpoint = API_ENDPOINTS.VERIFY_OTP
//         let requestData = {
//           mailId: formData.mailId,
//           otp: otp,
//         }

//         if (otpPurpose === "resetPassword") {
//           endpoint = API_ENDPOINTS.VERIFY_RESET_PASSWORD_OTP
//           requestData = {
//             ...requestData,
//             password: formData.password,
//             confirmPassword: formData.confirmPassword,
//           }
//         }

//         const data = await callApi(endpoint, "POST", requestData)

//         setShowOtpVerification(false)

//         debugger
//         if (otpPurpose === "resetPassword") {
//           showStatusCallback("success", "Password reset successful! Please login with your new password.")
//           resetFormDataRef.current()
//           setShowForgotPassword(false)
//           setOtpPurpose("")
//           setTimeout(() => {
//             setFormType("login")
//             setShowForm(true)
//           }, 100)
//         } else {
//           showStatusCallback("success", "Authentication successful!")
//           sessionStorage.setItem("authToken", data.token || "dummy-token")
//           setIsAuthenticated(true)
//           localStorage.setItem("isAuthenticated", "true")
//           resetFormDataRef.current()
//           setShowOtpVerification(false)
//           setShowForm(false)

//           // Redirect to student portal after OTP verification
//           navigate("/student-portal")
//         }
//       } catch (error) {
//         showStatusCallback("error", error.message || "OTP verification failed")
//       } finally {
        
//         setIsLoading(false,  error.message || "OTP verification failed")
//       }
   
//     },
//     [formData, otpPurpose, showStatusCallback, navigate],
//   )

//   const handleForgotPassword = async (e) => {
//     e.preventDefault()
//     if (!validateForm()) return

//     setIsLoading(true)

//     try {
//       const requestData = {
//         mailId: formData.mailId,
//         newPassword: formData.password,
//         confirmNewPassword: formData.confirmPassword,
//       }

//       const data = await callApi(API_ENDPOINTS.FORGOT_PASSWORD, "POST", requestData)

//       showStatusCallback("success", "Password reset email sent. Please check your inbox.")
//       setOtpPurpose("resetPassword")
//       setShowOtpVerification(true)
//     } catch (error) {
//       showStatusCallback("error", error.message || "Failed to process forgot password request")
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   const handleFormTypeChange = useCallback((type) => {
//     resetFormDataRef.current()
//     setFormType(type)
//   }, [])

//   const toggleForgotPassword = useCallback((show) => {
//     resetFormDataRef.current()
//     setShowForgotPassword(show)
//   }, [])

//   const handleResendOtp = async () => {
//     setIsLoading(true)
//     try {
//       const requestData = {
//         mailId: formData.mailId,
//         purpose: otpPurpose,
//       }

//       const data = await callApi(API_ENDPOINTS.RESEND_OTP, "POST", requestData)

//       showStatusCallback("success", "OTP resent successfully!")
//     } catch (error) {
//       showStatusCallback("error", error.message || "Failed to resend OTP")
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   // Password requirements component
//   const PasswordRequirements = () => {
//     const requirements = [
//       { text: "At least 8 characters", met: formData.password.length >= 8 },
//       { text: "At least one uppercase letter", met: /[A-Z]/.test(formData.password) },
//       { text: "At least one lowercase letter", met: /[a-z]/.test(formData.password) },
//       { text: "At least one number", met: /[0-9]/.test(formData.password) },
//       { text: "At least one special character", met: /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(formData.password) },
//     ]

//     return (
//       <motion.div
//         initial={{ opacity: 0, height: 0 }}
//         animate={{ opacity: 1, height: "auto" }}
//         exit={{ opacity: 0, height: 0 }}
//         className="bg-gray-50 p-3 rounded-lg mt-1 mb-3"
//       >
//         <p className="text-sm font-medium text-gray-700 mb-2">Password must contain:</p>
//         <ul className="space-y-1">
//           {requirements.map((req, index) => (
//             <li key={index} className="flex items-center gap-2 text-sm">
//               <span
//                 className={`flex-shrink-0 w-5 h-5 flex items-center justify-center rounded-full ${
//                   req.met ? "bg-green-100 text-green-600" : "bg-gray-200 text-gray-400"
//                 }`}
//               >
//                 {req.met ? <Check size={12} /> : ""}
//               </span>
//               <span className={req.met ? "text-green-600" : "text-gray-500"}>{req.text}</span>
//             </li>
//           ))}
//         </ul>
//       </motion.div>
//     )
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-teal-50 to-blue-50">
//       <AnimatePresence>
//         {statusAnimation && <StatusAnimation type={statusAnimation.type} message={statusAnimation.message} />}

//         {!isAuthenticated ? (
//           <motion.button
//             onClick={() => {
//               resetFormDataRef.current()
//               setShowForm(true)
//             }}
//             className="px-6 py-3 bg-teal-900 text-white font-semibold rounded-full shadow-lg hover:bg-teal-800 transition-all flex items-center justify-center gap-2"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <LogIn size={18} />
//             Sign In
//           </motion.button>
//         ) : (
//           <motion.button
//             onClick={handleLogout}
//             className="px-6 py-3 bg-teal-900 text-white font-semibold rounded-full shadow-lg hover:bg-teal-800 transition-all flex items-center justify-center gap-2"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <LogOut size={18} />
//             Sign Out
//           </motion.button>
//         )}

//         <AnimatePresence>
//           {showForm && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-2 z-50 overflow-y-auto"
//               onClick={() => {
//                 resetFormDataRef.current()
//                 setShowForm(false)
//               }}
//             >
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.95 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.95 }}
//                 className="bg-white/90 backdrop-blur-md rounded-xl shadow-2xl w-full max-w-lg lg:max-w-5xl mx-auto my-2 relative flex flex-col lg:flex-row"
//                 onClick={(e) => e.stopPropagation()}
//               >
//                 <button
//                   onClick={() => setShowForm(false)}
//                   className="absolute right-2 top-2 p-2 rounded-full bg-white/80 hover:bg-gray-100 transition-colors z-50 shadow-md"
//                   aria-label="Close form"
//                 >
//                   <X className="w-5 h-5 text-gray-600" />
//                 </button>

//                 <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-teal-400 to-teal-900 rounded-l-xl relative overflow-hidden">
//                   <div className="absolute inset-0 z-10">
//                     <ImageSlider />
//                   </div>
//                   <div className="absolute inset-0 bg-black/40 z-20 flex flex-col justify-between p-8">
//                     <motion.div
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       transition={{ delay: 0.2 }}
//                       className="text-white text-center mt-8"
//                     >
//                       <h1 className="text-3xl font-bold mb-4">Welcome to Our Platform!</h1>
//                       <p className="text-lg opacity-90 mb-6">Join our community and start your journey today.</p>
//                       <div className="flex items-center justify-center mb-4">
//                         <div className="bg-white/20 text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2">
//                           <Shield size={16} />
//                           <span className="font-medium">Secure Authentication</span>
//                         </div>
//                       </div>
//                     </motion.div>
//                     <SecurityFeatures />
//                   </div>
//                 </div>

//                 <div className="w-full lg:w-1/2 p-4 sm:p-6 overflow-y-auto max-h-[90vh] lg:max-h-[80vh]">
//                   <motion.div className="w-full max-w-md mx-auto space-y-4">
//                     {showForgotPassword ? (
//                       <div>
//                         <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center text-teal-900">
//                           Reset Password
//                         </h2>
//                         <form onSubmit={handleForgotPassword} className="space-y-4">
//                           <InputField
//                             icon={Mail}
//                             type="email"
//                             placeholder="Email"
//                             value={formData.mailId}
//                             onChange={(e) => setFormData({ ...formData, mailId: e.target.value })}
//                             error={errors.mailId}
//                             validate={validateEmail}
//                             autoComplete="email"
//                           />
//                           <InputField
//                             icon={Lock}
//                             type="password"
//                             placeholder="New Password"
//                             value={formData.password}
//                             onChange={(e) => {
//                               setFormData({ ...formData, password: e.target.value })
//                               setShowPasswordRequirements(true)
//                             }}
//                             error={errors.password}
//                             validate={validatePassword}
//                             autoComplete="new-password"
//                             showPasswordStrength={true}
//                           />

//                           <AnimatePresence>
//                             {showPasswordRequirements && formData.password && <PasswordRequirements />}
//                           </AnimatePresence>

//                           <InputField
//                             icon={Lock}
//                             type="password"
//                             placeholder="Confirm New Password"
//                             value={formData.confirmPassword}
//                             onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
//                             error={errors.confirmPassword}
//                             validate={(value) => (value !== formData.password ? "Passwords do not match" : undefined)}
//                             autoComplete="new-password"
//                           />

//                           <button
//                             type="submit"
//                             disabled={isLoading}
//                             className="w-full py-3 px-4 bg-teal-900 text-white font-semibold rounded-lg shadow-lg hover:bg-teal-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm"
//                           >
//                             {isLoading ? (
//                               <>
//                                 <RefreshCcw className="animate-spin" size={20} />
//                                 Resetting Password...
//                               </>
//                             ) : (
//                               "Reset Password"
//                             )}
//                           </button>
//                         </form>
//                         <div className="mt-4 text-center text-sm text-teal-700">
//                           <button
//                             onClick={() => toggleForgotPassword(false)}
//                             className="text-teal-900 font-semibold hover:underline"
//                           >
//                             Back to Login
//                           </button>
//                         </div>
//                       </div>
//                     ) : (
//                       <div>
//                         <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-teal-900">
//                           {formType === "login" ? "Welcome Back!" : "Create an Account"}
//                         </h2>

//                         <form onSubmit={handleSubmit} className="space-y-4">
//                           {formType === "signup" && (
//                             <>
//                               <InputField
//                                 icon={User}
//                                 type="text"
//                                 placeholder="First Name"
//                                 value={formData.firstName}
//                                 onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
//                                 error={errors.firstName}
//                                 validate={validateName}
//                                 autoComplete="given-name"
//                               />
//                               <InputField
//                                 icon={User}
//                                 type="text"
//                                 placeholder="Last Name"
//                                 value={formData.lastName}
//                                 onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
//                                 error={errors.lastName}
//                                 validate={validateName}
//                                 autoComplete="family-name"
//                               />
//                             </>
//                           )}
//                           <InputField
//                             icon={Mail}
//                             type="email"
//                             placeholder="Email"
//                             value={formData.mailId}
//                             onChange={(e) => setFormData({ ...formData, mailId: e.target.value })}
//                             error={errors.mailId}
//                             validate={validateEmail}
//                             autoComplete="email"
//                           />
//                           <InputField
//                             icon={Lock}
//                             type="password"
//                             placeholder="Password"
//                             value={formData.password}
//                             onChange={(e) => {
//                               setFormData({ ...formData, password: e.target.value })
//                               if (formType === "signup") {
//                                 setShowPasswordRequirements(true)
//                               }
//                             }}
//                             error={errors.password}
//                             validate={validatePassword}
//                             autoComplete={formType === "login" ? "current-password" : "new-password"}
//                             showPasswordStrength={formType === "signup"}
//                           />

//                           <AnimatePresence>
//                             {formType === "signup" && showPasswordRequirements && formData.password && (
//                               <PasswordRequirements />
//                             )}
//                           </AnimatePresence>

//                           {formType === "signup" && (
//                             <InputField
//                               icon={Lock}
//                               type="password"
//                               placeholder="Confirm Password"
//                               value={formData.confirmPassword}
//                               onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
//                               error={errors.confirmPassword}
//                               validate={(value) => (value !== formData.password ? "Passwords do not match" : undefined)}
//                               autoComplete="new-password"
//                             />
//                           )}

//                           <button
//                             type="submit"
//                             disabled={isLoading}
//                             className="w-full py-3 px-4 bg-teal-900 text-white font-semibold rounded-lg shadow-lg hover:bg-teal-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm"
//                           >
//                             {isLoading ? (
//                               <>
//                                 <RefreshCcw className="animate-spin" size={20} />
//                                 {formType === "login" ? "Logging in..." : "Signing up..."}
//                               </>
//                             ) : (
//                               <>
//                                 <ArrowRight size={20} />
//                                 {formType === "login" ? "Login" : "Sign Up"}
//                               </>
//                             )}
//                           </button>
//                         </form>

//                         <div className="mt-6 text-center text-sm text-teal-700 space-y-2">
//                           {formType === "login" ? (
//                             <>
//                               <p>
//                                 Don't have an account?{" "}
//                                 <button
//                                   onClick={() => handleFormTypeChange("signup")}
//                                   className="text-teal-900 font-semibold hover:underline"
//                                 >
//                                   Sign up
//                                 </button>
//                               </p>
//                               <p>
//                                 <button
//                                   onClick={() => toggleForgotPassword(true)}
//                                   className="text-teal-900 font-semibold hover:underline"
//                                 >
//                                   Forgot Password?
//                                 </button>
//                               </p>
//                             </>
//                           ) : (
//                             <p>
//                               Already have an account?{" "}
//                               <button
//                                 onClick={() => handleFormTypeChange("login")}
//                                 className="text-teal-900 font-semibold hover:underline"
//                               >
//                                 Sign in
//                               </button>
//                             </p>
//                           )}
//                         </div>

//                         {/* Show on mobile only */}
//                         <div className="mt-6 lg:hidden">
//                           <SecurityFeatures />
//                         </div>
//                       </div>
//                     )}
//                   </motion.div>
//                 </div>
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </AnimatePresence>

//       <OtpVerificationModal
//         isOpen={showOtpVerification}
//         onClose={() => setShowOtpVerification(false)}
//         onVerify={handleOtpVerification}
//         onResend={handleResendOtp}
//         email={formData.mailId}
//         purpose={otpPurpose}
//       />
//     </div>
//   )
// }

"use client"
import { useState, useCallback, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  RefreshCcw,
  Mail,
  Lock,
  User,
  ArrowRight,
  LogOut,
  LogIn,
  X,
  CheckCircle,
  Shield,
  Eye,
  EyeOff,
  AlertTriangle,
  Check,
  KeyRound,
  ShieldCheck,
} from "lucide-react"

// Base URL for API endpoints
const BASE_URL = "https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1"

// API endpoints - FIXED: Added missing VERIFY_RESET_PASSWORD_OTP endpoint
const API_ENDPOINTS = {
  REGISTER: "https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1/register",
  LOGIN: `${BASE_URL}/login`,
  VERIFY_OTP: `${BASE_URL}/verify-otp`,
  RESEND_OTP: `${BASE_URL}/resend-otp`,
  FORGOT_PASSWORD: `${BASE_URL}/forgetPassword`,
  VERIFY_RESET_PASSWORD_OTP: `${BASE_URL}/verify-reset-password-otp`, // Added missing endpoint
}

// Utility functions
const showStatus = (setStatusAnimation, type, message, duration = 2000) => {
  setStatusAnimation({ type, message })
  setTimeout(() => {
    setStatusAnimation(null)
  }, duration)
}

const validateEmail = (email) => {
  if (!email) return "Email is required"
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) return "Invalid email format"
  return undefined
}

const validatePassword = (password) => {
  if (!password) return "Password is required"
  if (password.length < 8) return "Password must be at least 8 characters long"
  if (!/[A-Z]/.test(password)) return "Password must include at least one uppercase letter"
  if (!/[a-z]/.test(password)) return "Password must include at least one lowercase letter"
  if (!/[0-9]/.test(password)) return "Password must include at least one number"
  if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(password))
    return "Password must include at least one special character"
  return undefined
}

const validateName = (name) => {
  if (!name) return "Name is required"
  if (name.length < 2) return "Name must be at least 2 characters long"
  if (!/^[a-zA-Z\s-]+$/.test(name)) return "Name can only contain letters, spaces, and hyphens"
  return undefined
}

// API call wrapper function with CORS handling
const callApi = async (endpoint, method, data) => {
  try {
    const response = await fetch(endpoint, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        // Removed "Access-Control-Allow-Origin" - this should be set by the server, not client
      },
      mode: "cors", // Enable CORS
      body: JSON.stringify(data),
    })
    // Handle non-JSON responses
    const contentType = response.headers.get("content-type")
    if (contentType && contentType.includes("application/json")) {
      const responseData = await response.json()
      if (!response.ok) {
        throw new Error(responseData.message || `Request failed with status ${response.status}`)
      }
      return responseData
    } else {
      const textResponse = await response.text()
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`)
      }
      return { success: true, text: textResponse }
    }
  } catch (error) {
    console.error(`API call to ${endpoint} failed:`, error)
    // Provide more detailed error information for debugging
    if (error.name === "TypeError" && error.message.includes("Failed to fetch")) {
      throw new Error("Network error: Please check your internet connection or the API endpoint might be unavailable")
    }
    throw error
  }
}

// Input Field Component
const InputField = ({
  icon: Icon,
  type,
  placeholder,
  value,
  onChange,
  error,
  validate,
  autoComplete = "off",
  required = true,
  showPasswordStrength = false,
}) => {
  const [focused, setFocused] = useState(false)
  const [localError, setLocalError] = useState(error)
  const [showPassword, setShowPassword] = useState(false)
  const [passwordStrength, setPasswordStrength] = useState(0)
  const actualType = type === "password" && showPassword ? "text" : type
  const inputRef = useRef(null)

  useEffect(() => {
    setLocalError(error)
  }, [error])

  useEffect(() => {
    if (type === "password" && showPasswordStrength) {
      // Calculate password strength
      let strength = 0
      if (value.length >= 8) strength += 1
      if (/[A-Z]/.test(value)) strength += 1
      if (/[a-z]/.test(value)) strength += 1
      if (/[0-9]/.test(value)) strength += 1
      if (/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(value)) strength += 1
      setPasswordStrength(strength)
    }
  }, [value, type, showPasswordStrength])

  const handleBlur = () => {
    setFocused(false)
    if (validate && value) {
      const validationError = validate(value)
      setLocalError(validationError)
    }
  }

  const getStrengthColor = () => {
    if (passwordStrength <= 1) return "bg-red-500"
    if (passwordStrength <= 3) return "bg-yellow-500"
    return "bg-green-500"
  }

  const getStrengthText = () => {
    if (passwordStrength <= 1) return "Weak"
    if (passwordStrength <= 3) return "Medium"
    return "Strong"
  }

  return (
    <div className="space-y-1">
      <div
        className={`flex items-center border-2 rounded-lg overflow-hidden transition-all ${
          focused ? "border-teal-500 shadow-md" : localError ? "border-red-400" : "border-gray-300"
        }`}
      >
        <div className="flex items-center justify-center w-12 h-12 bg-gray-50 text-gray-500">
          <Icon size={20} />
        </div>
        <input
          ref={inputRef}
          type={actualType}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={handleBlur}
          className="flex-1 h-12 px-4 bg-transparent outline-none"
          autoComplete={autoComplete}
          required={required}
          aria-invalid={!!localError}
          aria-describedby={localError ? `${placeholder}-error` : undefined}
        />
        {type === "password" && value && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="px-3 text-gray-500 hover:text-gray-700"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}
      </div>
      {localError && (
        <p id={`${placeholder}-error`} className="text-red-500 text-sm flex items-center gap-1" role="alert">
          <AlertTriangle size={14} />
          {localError}
        </p>
      )}
      {type === "password" && showPasswordStrength && value && !localError && (
        <div className="space-y-1">
          <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all ${getStrengthColor()}`}
              style={{ width: `${(passwordStrength / 5) * 100}%` }}
            />
          </div>
          <p
            className={`text-xs flex items-center gap-1 ${
              passwordStrength <= 1 ? "text-red-500" : passwordStrength <= 3 ? "text-yellow-500" : "text-green-500"
            }`}
          >
            Password strength: {getStrengthText()}
          </p>
        </div>
      )}
    </div>
  )
}

// Status Animation Component with improved accessibility
const StatusAnimation = ({ type, message }) => {
  const variants = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  }

  const getIcon = () => {
    switch (type) {
      case "success":
        return <CheckCircle className="w-6 h-6" />
      case "error":
        return <AlertTriangle className="w-6 h-6" />
      default:
        return <RefreshCcw className="w-6 h-6 animate-spin" />
    }
  }

  const getColors = () => {
    switch (type) {
      case "success":
        return "bg-green-100 text-green-800 border-green-200"
      case "error":
        return "bg-red-100 text-red-800 border-red-200"
      default:
        return "bg-blue-100 text-blue-800 border-blue-200"
    }
  }

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg border ${getColors()} flex items-center gap-3 max-w-md`}
      role="alert"
      aria-live="assertive"
    >
      {getIcon()}
      <p>{message}</p>
    </motion.div>
  )
}

// Image Slider Component with improved performance
const ImageSlider = () => {
  const images = [
    "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  ]
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Preload images for smoother transitions
    const preloadImages = () => {
      images.forEach((src) => {
        const img = new Image()
        img.src = src
        img.crossOrigin = "anonymous" // Add CORS support for images
        img.onload = () => setIsLoaded(true)
      })
    }
    preloadImages()
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="w-full h-full">
      {isLoaded ? (
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
      ) : (
        <div className="w-full h-full bg-gray-200 animate-pulse"></div>
      )}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-30">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full ${index === currentIndex ? "bg-white" : "bg-white/50"}`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentIndex ? "true" : "false"}
          />
        ))}
      </div>
    </div>
  )
}

// OTP Verification Modal Component
const OtpVerificationModal = ({ isOpen, onClose, onVerify, onResend, email, purpose }) => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""])
  const [isLoading, setIsLoading] = useState(false)
  const [otpError, setOtpError] = useState("")
  const [isVerified, setIsVerified] = useState(false)
  const [resendDisabled, setResendDisabled] = useState(false)
  const [resendCountdown, setResendCountdown] = useState(0)
  const [otpExpiry, setOtpExpiry] = useState(300) // 5 minutes in seconds
  const inputRefs = useRef([])

  useEffect(() => {
    if (isOpen) {
      setOtp(["", "", "", "", "", ""])
      setIsVerified(false)
      setOtpError("")
      setOtpExpiry(300) // Reset OTP expiry
      if (inputRefs.current[0]) {
        inputRefs.current[0].focus()
      }
    }
  }, [isOpen])

  useEffect(() => {
    if (otp.every((digit) => digit !== "")) {
      handleSubmit()
    }
  }, [otp])

  useEffect(() => {
    let interval
    if (resendCountdown > 0) {
      interval = setInterval(() => {
        setResendCountdown((prev) => prev - 1)
      }, 1000)
    } else {
      setResendDisabled(false)
    }
    return () => clearInterval(interval)
  }, [resendCountdown])

  // OTP expiry countdown
  useEffect(() => {
    let interval
    if (isOpen && otpExpiry > 0) {
      interval = setInterval(() => {
        setOtpExpiry((prev) => {
          if (prev <= 1) {
            setOtpError("OTP has expired. Please request a new one.")
            return 0
          }
          return prev - 1
        })
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isOpen, otpExpiry])

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return
    const updatedOtp = [...otp]
    updatedOtp[index] = element.value
    setOtp(updatedOtp)
    if (element.nextSibling && element.value !== "") {
      element.nextSibling.focus()
    }
  }

  const handleBackspace = (e, index) => {
    if (e.key === "Backspace" && otp[index] === "") {
      if (index > 0) {
        inputRefs.current[index - 1].focus()
      }
    }
  }

  const handleSubmit = async () => {
    if (otpExpiry <= 0) {
      setOtpError("OTP has expired. Please request a new one.")
      return
    }
    setIsLoading(true)
    setOtpError("")
    try {
      await onVerify(otp.join(""))
      setIsVerified(true)
      setTimeout(() => {
        onClose()
        setIsVerified(false)
      }, 2000)
    } catch (error) {
      setOtpError(error.message || "Failed to verify OTP")
    } finally {
      setIsLoading(false)
    }
  }

  const handleResend = () => {
    if (resendDisabled) return
    onResend()
    setResendDisabled(true)
    setResendCountdown(60) // 60 seconds cooldown
    setOtpExpiry(300) // Reset OTP expiry to 5 minutes
    setOtpError("") // Clear any existing errors
  }

  // Format time remaining
  const formatTimeRemaining = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
        onClick={(e) => e.target === e.currentTarget && onClose()}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md"
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className="text-2xl font-bold mb-4 text-center text-teal-900">
            {purpose === "resetPassword" ? "Reset Password OTP Verification" : "OTP Verification"}
          </h2>
          <p className="text-center text-gray-600 mb-6">
            {purpose === "resetPassword"
              ? "Enter the OTP sent to your email to reset your password."
              : "Enter the OTP sent to your email to verify your account."}
          </p>
          <div className="flex items-center justify-center mb-4">
            <div className="bg-teal-50 text-teal-700 px-3 py-1 rounded-full text-sm flex items-center gap-1">
              <Mail size={14} />
              <span className="font-medium">{email}</span>
            </div>
          </div>
          {isVerified ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-green-600"
            >
              <CheckCircle className="w-16 h-16 mx-auto mb-4" />
              <p className="text-xl font-semibold">OTP Verified Successfully!</p>
            </motion.div>
          ) : (
            <>
              {otpError && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg relative mb-4 flex items-center gap-2"
                  role="alert"
                >
                  <AlertTriangle size={18} />
                  <span className="block sm:inline">{otpError}</span>
                </motion.div>
              )}
              <div className="text-center mb-2">
                <p className="text-sm text-gray-500">Enter 6-digit OTP</p>
                {otpExpiry > 0 && (
                  <p className="text-xs text-teal-700 mt-1">
                    OTP expires in <span className="font-semibold">{formatTimeRemaining(otpExpiry)}</span>
                  </p>
                )}
              </div>
              <div className="flex justify-center gap-2 mb-6">
                {otp.map((data, index) => (
                  <motion.input
                    key={index}
                    ref={(el) => (inputRefs.current[index] = el)}
                    type="text"
                    inputMode="numeric"
                    maxLength="1"
                    value={data}
                    onChange={(e) => handleChange(e.target, index)}
                    onFocus={(e) => e.target.select()}
                    onKeyDown={(e) => handleBackspace(e, index)}
                    className="w-12 h-12 border-2 rounded-lg text-center text-xl font-semibold focus:border-teal-500 focus:outline-none"
                    whileFocus={{ scale: 1.05, borderColor: "#14b8a6" }}
                    aria-label={`OTP digit ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}
          <p className="mt-4 text-center text-gray-600">
            Didn't receive the OTP?{" "}
            <button
              onClick={handleResend}
              className={`text-teal-900 font-semibold hover:underline ${resendDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
              disabled={resendDisabled}
              aria-disabled={resendDisabled}
            >
              {resendDisabled ? `Resend OTP (${resendCountdown}s)` : "Resend OTP"}
            </button>
          </p>
          <div className="mt-6 flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 py-2.5 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition-all"
            >
              Cancel
            </button>
            {!isVerified && (
              <button
                onClick={handleSubmit}
                disabled={!otp.every((digit) => digit !== "") || isLoading || otpExpiry <= 0}
                className="flex-1 py-2.5 bg-teal-900 text-white font-semibold rounded-lg hover:bg-teal-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                aria-disabled={!otp.every((digit) => digit !== "") || isLoading || otpExpiry <= 0}
              >
                {isLoading ? (
                  <>
                    <RefreshCcw className="animate-spin" size={18} />
                    Verifying...
                  </>
                ) : (
                  "Verify OTP"
                )}
              </button>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

// Security Features Component
const SecurityFeatures = () => {
  return (
    <div className="bg-gradient-to-br from-teal-900/30 to-blue-900/30 backdrop-blur-sm p-4 rounded-xl mt-4 border border-white/10">
      <h3 className="text-sm font-semibold text-white mb-2 flex items-center gap-1">
        <ShieldCheck size={16} />
        Authentication Features
      </h3>
      <div className="grid grid-cols-2 gap-2">
        <div className="flex items-center gap-1 text-xs text-white/90">
          <KeyRound size={12} className="text-white/80" />
          <span>Secure Authentication</span>
        </div>
        <div className="flex items-center gap-1 text-xs text-white/90">
          <Shield size={12} className="text-white/80" />
          <span>Password Protection</span>
        </div>
        <div className="flex items-center gap-1 text-xs text-white/90">
          <Shield size={12} className="text-white/80" />
          <span>Email Verification</span>
        </div>
        <div className="flex items-center gap-1 text-xs text-white/90">
          <Lock size={12} className="text-white/80" />
          <span>OTP Authentication</span>
        </div>
      </div>
    </div>
  )
}

// Main Authentication System Component
export default function EnhancedAuthSystem() {
  const [showForm, setShowForm] = useState(false)
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
  const [statusAnimation, setStatusAnimation] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [showOtpVerification, setShowOtpVerification] = useState(false)
  const [showForgotPassword, setShowForgotPassword] = useState(false)
  const [otpPurpose, setOtpPurpose] = useState("")
  const [showPasswordRequirements, setShowPasswordRequirements] = useState(false)
  const [loginAttempts, setLoginAttempts] = useState(0)
  const navigate = useRef(() => {
    console.log("Navigation would happen here in a real app")
  }).current

  // Check if user is already authenticated
  useEffect(() => {
    const storedAuth = localStorage.getItem("isAuthenticated")
    if (storedAuth === "true") {
      setIsAuthenticated(true)
    }
  }, [])

  const resetFormData = useCallback(() => {
    setFormData({
      firstName: "",
      lastName: "",
      mailId: "",
      password: "",
      confirmPassword: "",
    })
    setErrors({})
    setShowPasswordRequirements(false)
  }, [])

  const resetFormDataRef = useRef(resetFormData)
  useEffect(() => {
    resetFormDataRef.current = resetFormData
  }, [resetFormData])

  const validateForm = useCallback(() => {
    const newErrors = {}
    if (formType === "signup") {
      newErrors.firstName = validateName(formData.firstName)
      newErrors.lastName = validateName(formData.lastName)
    }
    newErrors.mailId = validateEmail(formData.mailId)
    
    // Different validation for login vs signup
    if (formType === "signup") {
      newErrors.password = validatePassword(formData.password)
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match"
      }
    } else {
      // For login, just check if password is provided
      newErrors.password = !formData.password ? "Password is required" : undefined
    }
    
    setErrors(newErrors)
    return Object.values(newErrors).every((error) => !error)
  }, [formType, formData])

  const showStatusCallback = useCallback((type, message, duration = 2000) => {
    showStatus(setStatusAnimation, type, message, duration)
  }, [])

  const handleLogout = useCallback(() => {
    showStatusCallback("success", "Successfully logged out")
    setTimeout(() => {
      setIsAuthenticated(false)
      localStorage.removeItem("isAuthenticated")
      sessionStorage.removeItem("authToken")
      resetFormDataRef.current()
      setShowOtpVerification(false)
      setShowForm(false)
    }, 2000)
  }, [showStatusCallback])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) return
    setIsLoading(true)
    try {
      const apiUrl = formType === "login" ? API_ENDPOINTS.LOGIN : API_ENDPOINTS.REGISTER
      const requestData = {
        ...formData,
      }
      const data = await callApi(apiUrl, "POST", requestData)
      
      if (formType === "login") {
        setLoginAttempts(0) // Reset login attempts on success
      }
      setOtpPurpose(formType === "login" ? "login" : "signup")
      setShowOtpVerification(true)
    } catch (error) {
      if (formType === "login") {
        setLoginAttempts((prev) => prev + 1)
      }
      showStatusCallback("error", error.message || `${formType === "login" ? "Login" : "Registration"} failed`)
    } finally {
      setIsLoading(false)
    }
  }

  const handleOtpVerification = useCallback(
    async (otp) => {
      try {
        let endpoint = API_ENDPOINTS.VERIFY_OTP
        let requestData = {
          mailId: formData.mailId,
          otp: otp,
        }
        
        if (otpPurpose === "resetPassword") {
          endpoint = API_ENDPOINTS.VERIFY_RESET_PASSWORD_OTP
          requestData = {
            ...requestData,
            password: formData.password,
            confirmPassword: formData.confirmPassword,
          }
        }
        
        const data = await callApi(endpoint, "POST", requestData)
        setShowOtpVerification(false)
        
        if (otpPurpose === "resetPassword") {
          showStatusCallback("success", "Password reset successful! Please login with your new password.")
          resetFormDataRef.current()
          setShowForgotPassword(false)
          setOtpPurpose("")
          setTimeout(() => {
            setFormType("login")
            setShowForm(true)
          }, 100)
        } else {
          showStatusCallback("success", "Authentication successful!")
          sessionStorage.setItem("authToken", data.token || "dummy-token")
          setIsAuthenticated(true)
          localStorage.setItem("isAuthenticated", "true")
          resetFormDataRef.current()
          setShowOtpVerification(false)
          setShowForm(false)
          // Redirect to student portal after OTP verification
          navigate("/student-portal")
        }
      } catch (error) {
        showStatusCallback("error", error.message || "OTP verification failed")
      } finally {
        setIsLoading(false) // FIXED: Removed extra parameter
      }
    },
    [formData, otpPurpose, showStatusCallback, navigate],
  )

  const handleForgotPassword = async (e) => {
    e.preventDefault()
    if (!validateForm()) return
    setIsLoading(true)
    try {
      // FIXED: Only send email for forgot password, not password fields
      const requestData = {
        mailId: formData.mailId,
      }
      const data = await callApi(API_ENDPOINTS.FORGOT_PASSWORD, "POST", requestData)
      showStatusCallback("success", "Password reset email sent. Please check your inbox.")
      setOtpPurpose("resetPassword")
      setShowOtpVerification(true)
    } catch (error) {
      showStatusCallback("error", error.message || "Failed to process forgot password request")
    } finally {
      setIsLoading(false)
    }
  }

  const handleFormTypeChange = useCallback((type) => {
    resetFormDataRef.current()
    setFormType(type)
  }, [])

  const toggleForgotPassword = useCallback((show) => {
    resetFormDataRef.current()
    setShowForgotPassword(show)
  }, [])

  const handleResendOtp = async () => {
    setIsLoading(true)
    try {
      const requestData = {
        mailId: formData.mailId,
        purpose: otpPurpose,
      }
      const data = await callApi(API_ENDPOINTS.RESEND_OTP, "POST", requestData)
      showStatusCallback("success", "OTP resent successfully!")
    } catch (error) {
      showStatusCallback("error", error.message || "Failed to resend OTP")
    } finally {
      setIsLoading(false)
    }
  }

  // Password requirements component
  const PasswordRequirements = () => {
    const requirements = [
      { text: "At least 8 characters", met: formData.password.length >= 8 },
      { text: "At least one uppercase letter", met: /[A-Z]/.test(formData.password) },
      { text: "At least one lowercase letter", met: /[a-z]/.test(formData.password) },
      { text: "At least one number", met: /[0-9]/.test(formData.password) },
      { text: "At least one special character", met: /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(formData.password) },
    ]
    return (
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        exit={{ opacity: 0, height: 0 }}
        className="bg-gray-50 p-3 rounded-lg mt-1 mb-3"
      >
        <p className="text-sm font-medium text-gray-700 mb-2">Password must contain:</p>
        <ul className="space-y-1">
          {requirements.map((req, index) => (
            <li key={index} className="flex items-center gap-2 text-sm">
              <span
                className={`flex-shrink-0 w-5 h-5 flex items-center justify-center rounded-full ${
                  req.met ? "bg-green-100 text-green-600" : "bg-gray-200 text-gray-400"
                }`}
              >
                {req.met ? <Check size={12} /> : ""}
              </span>
              <span className={req.met ? "text-green-600" : "text-gray-500"}>{req.text}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-teal-50 to-blue-50">
      <AnimatePresence>
        {statusAnimation && <StatusAnimation type={statusAnimation.type} message={statusAnimation.message} />}
        {!isAuthenticated ? (
          <motion.button
            onClick={() => {
              resetFormDataRef.current()
              setShowForm(true)
            }}
            className="px-6 py-3 bg-teal-900 text-white font-semibold rounded-full shadow-lg hover:bg-teal-800 transition-all flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <LogIn size={18} />
            Sign In
          </motion.button>
        ) : (
          <motion.button
            onClick={handleLogout}
            className="px-6 py-3 bg-teal-900 text-white font-semibold rounded-full shadow-lg hover:bg-teal-800 transition-all flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <LogOut size={18} />
            Sign Out
          </motion.button>
        )}
        <AnimatePresence>
          {showForm && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-2 z-50 overflow-y-auto"
              onClick={() => {
                resetFormDataRef.current()
                setShowForm(false)
              }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white/90 backdrop-blur-md rounded-xl shadow-2xl w-full max-w-lg lg:max-w-5xl mx-auto my-2 relative flex flex-col lg:flex-row"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setShowForm(false)}
                  className="absolute right-2 top-2 p-2 rounded-full bg-white/80 hover:bg-gray-100 transition-colors z-50 shadow-md"
                  aria-label="Close form"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>
                <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-teal-400 to-teal-900 rounded-l-xl relative overflow-hidden">
                  <div className="absolute inset-0 z-10">
                    <ImageSlider />
                  </div>
                  <div className="absolute inset-0 bg-black/40 z-20 flex flex-col justify-between p-8">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="text-white text-center mt-8"
                    >
                      <h1 className="text-3xl font-bold mb-4">Welcome to Our Platform!</h1>
                      <p className="text-lg opacity-90 mb-6">Join our community and start your journey today.</p>
                      <div className="flex items-center justify-center mb-4">
                        <div className="bg-white/20 text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2">
                          <Shield size={16} />
                          <span className="font-medium">Secure Authentication</span>
                        </div>
                      </div>
                    </motion.div>
                    <SecurityFeatures />
                  </div>
                </div>
                <div className="w-full lg:w-1/2 p-4 sm:p-6 overflow-y-auto max-h-[90vh] lg:max-h-[80vh]">
                  <motion.div className="w-full max-w-md mx-auto space-y-4">
                    {showForgotPassword ? (
                      <div>
                        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center text-teal-900">
                          Reset Password
                        </h2>
                        <form onSubmit={handleForgotPassword} className="space-y-4">
                          <InputField
                            icon={Mail}
                            type="email"
                            placeholder="Email"
                            value={formData.mailId}
                            onChange={(e) => setFormData({ ...formData, mailId: e.target.value })}
                            error={errors.mailId}
                            validate={validateEmail}
                            autoComplete="email"
                          />
                          <InputField
                            icon={Lock}
                            type="password"
                            placeholder="New Password"
                            value={formData.password}
                            onChange={(e) => {
                              setFormData({ ...formData, password: e.target.value })
                              setShowPasswordRequirements(true)
                            }}
                            error={errors.password}
                            validate={validatePassword}
                            autoComplete="new-password"
                            showPasswordStrength={true}
                          />
                          <AnimatePresence>
                            {showPasswordRequirements && formData.password && <PasswordRequirements />}
                          </AnimatePresence>
                          <InputField
                            icon={Lock}
                            type="password"
                            placeholder="Confirm New Password"
                            value={formData.confirmPassword}
                            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                            error={errors.confirmPassword}
                            validate={(value) => (value !== formData.password ? "Passwords do not match" : undefined)}
                            autoComplete="new-password"
                          />
                          <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full py-3 px-4 bg-teal-900 text-white font-semibold rounded-lg shadow-lg hover:bg-teal-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm"
                          >
                            {isLoading ? (
                              <>
                                <RefreshCcw className="animate-spin" size={20} />
                                Resetting Password...
                              </>
                            ) : (
                              "Reset Password"
                            )}
                          </button>
                        </form>
                        <div className="mt-4 text-center text-sm text-teal-700">
                          <button
                            onClick={() => toggleForgotPassword(false)}
                            className="text-teal-900 font-semibold hover:underline"
                          >
                            Back to Login
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-teal-900">
                          {formType === "login" ? "Welcome Back!" : "Create an Account"}
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                          {formType === "signup" && (
                            <>
                              <InputField
                                icon={User}
                                type="text"
                                placeholder="First Name"
                                value={formData.firstName}
                                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                error={errors.firstName}
                                validate={validateName}
                                autoComplete="given-name"
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
                              />
                            </>
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
                          />
                          <InputField
                            icon={Lock}
                            type="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={(e) => {
                              setFormData({ ...formData, password: e.target.value })
                              if (formType === "signup") {
                                setShowPasswordRequirements(true)
                              }
                            }}
                            error={errors.password}
                            validate={validatePassword}
                            autoComplete={formType === "login" ? "current-password" : "new-password"}
                            showPasswordStrength={formType === "signup"}
                          />
                          <AnimatePresence>
                            {formType === "signup" && showPasswordRequirements && formData.password && (
                              <PasswordRequirements />
                            )}
                          </AnimatePresence>
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
                            />
                          )}
                          <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full py-3 px-4 bg-teal-900 text-white font-semibold rounded-lg shadow-lg hover:bg-teal-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm"
                          >
                            {isLoading ? (
                              <>
                                <RefreshCcw className="animate-spin" size={20} />
                                {formType === "login" ? "Logging in..." : "Signing up..."}
                              </>
                            ) : (
                              <>
                                <ArrowRight size={20} />
                                {formType === "login" ? "Login" : "Sign Up"}
                              </>
                            )}
                          </button>
                        </form>
                        <div className="mt-6 text-center text-sm text-teal-700 space-y-2">
                          {formType === "login" ? (
                            <>
                              <p>
                                Don't have an account?{" "}
                                <button
                                  onClick={() => handleFormTypeChange("signup")}
                                  className="text-teal-900 font-semibold hover:underline"
                                >
                                  Sign up
                                </button>
                              </p>
                              <p>
                                <button
                                  onClick={() => toggleForgotPassword(true)}
                                  className="text-teal-900 font-semibold hover:underline"
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
                                className="text-teal-900 font-semibold hover:underline"
                              >
                                Sign in
                              </button>
                            </p>
                          )}
                        </div>
                        {/* Show on mobile only */}
                        <div className="mt-6 lg:hidden">
                          <SecurityFeatures />
                        </div>
                      </div>
                    )}
                  </motion.div>
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
    </div>
  )
}
