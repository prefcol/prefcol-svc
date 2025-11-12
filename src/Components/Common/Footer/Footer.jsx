// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
// import Logo from "../assets/COL.png"
// const socialLinks = [
//   { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/people/ChamberoflearningOfficial/61564525092021/", color: "#4267B2", hoverColor: "#365899" },
//   { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/chamber_of_learning_official/?next=%2F", color: "#E1306C", hoverColor: "#C13584" },
//   { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/company/105144482/", color: "#2867B2", hoverColor: "#0077B5" },
//   { name: "YouTube", icon: Youtube, href: "https://www.youtube.com/@ChamberOfLearningOfficial", color: "#FF0000", hoverColor: "#CC0000" },
//   { name: "WhatsApp", icon: MessageCircle, href: "https://wa.me/919445918818", color: "#25D366", hoverColor: "#128C7E" },
// ];

// const navigationSections = [
//   {
//     title: "About Us",
//     links: [
//       { name: "Careers", href: "/careers" },
//       { name: "FAQs", href: "/faqs" },
//       { name: "Support", href: "/support" },
//     ],
//   },
//   {
//     title: "Our Services",
//     links: [
//       { name: "Web Development", href: "/services/web-development" },
//       { name: "Web Design", href: "/services/web-design" },
//       { name: "Marketing", href: "/services/marketing" },
//     ],
//   },
// ];

// const FooterLogo = () => (
//   <Link to='/' className="inline-flex items-center rounded-lg bg-gradient-to-r from-teal-500 to-teal-300 p-2 shadow-lg">
//     <div className="flex items-center">
//       <img src={Logo} alt="Your Logo" className="h-14 w-auto rounded-full mr-2" />
//       <div>
//         <h1 className="text-2xl font-extrabold text-white">COL</h1>
//         <p className="text-sm text-gray-100 font-medium">
//           Chamber Of Learning
//         </p>
//       </div>
//     </div>
//   </Link>
// );

// const SocialLinks = ({ className = "" }) => (
//   <ul className={`flex flex-wrap justify-center sm:justify-start gap-4 ${className}`}>
//     {socialLinks.map((link) => (
//       <li key={link.name}>
//         <a
//           href={link.href}
//           rel="noreferrer"
//           target="_blank"
//           className="group relative block w-10 h-10"
//         >
//           <span className="sr-only">{link.name}</span>
//           <div 
//             className="absolute inset-0 rounded-lg transform transition-all duration-300 ease-in-out group-hover:rotate-6 group-hover:scale-110"
//             style={{ backgroundColor: link.color }}
//           ></div>
//           <div 
//             className="absolute inset-0 rounded-lg transform transition-all duration-300 ease-in-out group-hover:scale-95"
//             style={{ 
//               backgroundColor: link.hoverColor,
//               opacity: 0,
//               mixBlendMode: 'multiply'
//             }}
//           ></div>
//           <div className="relative flex items-center justify-center w-full h-full text-white transition-all duration-300 ease-in-out group-hover:scale-110">
//             <link.icon className="w-5 h-5" />
//           </div>
//         </a>
//       </li>
//     ))}
//   </ul>
// );

// const FooterNavigation = () => (
//   <>
//     {navigationSections.map((section) => (
//       <div key={section.title} className="text-center sm:text-left">
//         <p className="text-lg font-medium text-gray-900">{section.title}</p>
//         <ul className="mt-4 space-y-2 text-sm">
//           {section.links.map((link) => (
//             <li key={link.name}>
//               <Link to={link.href} className="text-gray-700 transition hover:text-teal-700">
//                 {link.name}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     ))}
//   </>
// );

// const ContactInfo = () => (
//   <div className="text-center sm:text-left">
//     <p className="text-lg font-medium text-gray-900">Contact Us</p>
//     <ul className="mt-4 space-y-2 text-sm">
//       <li>
//         <a href="mailto:enquire@chamberoflearning.com" className="flex items-center justify-center sm:justify-start gap-1.5 text-gray-700 hover:text-teal-700">
          
//           <Mail className="h-5 w-5 shrink-0" />
//           <span>enquire@chamberoflearning.com</span>
//         </a>
//       </li>
//       <li>
//         <a href="tel:+919445918818" className="flex items-center justify-center sm:justify-start gap-1.5 text-gray-700 hover:text-teal-700">
//           <Phone className="h-5 w-5 shrink-0" />
//           <span>+91 944-591-8818</span>
//         </a>
//       </li>
//       <li className="flex flex-col items-center sm:items-start gap-1.5">
//         <MapPin className="h-5 w-5 shrink-0 text-gray-900" />
//         <address className="text-gray-700 not-italic text-center sm:text-left text-sm">
//           <strong>PREFCOL EDUTECH SOLUTIONS (OPC) PRIVATE LIMITED</strong><br />
//           Olympia Technology Park<br />
//           Level 5, Fortius Tower, Olympia Tech Park,<br />
//           Plot No.1 SIDCO Industrial Estate, Guindy,<br />
//           Chennai, Tamil Nadu, 600032, India
//         </address>
//       </li>
//     </ul>
//   </div>
// );

// const Footer = () => {
//   const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentTime(new Date().toLocaleTimeString());
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="bg-white border-t">
//       <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          
//           <div className="flex flex-col items-center lg:items-start">
//             <FooterLogo />
           
//             <p className="mt-4 max-w-xs text-sm text-gray-600 text-center lg:text-left">
              
//               Platform to Rebuild Your Future
//             </p>
//             <SocialLinks className="mt-6" />
//           </div>
//           <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3">
//             <FooterNavigation />
//             <ContactInfo />
//           </div>
//         </div>
//         <div className="mt-8 border-t border-gray-100 pt-6">
//           <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
//             <p className="text-sm text-gray-500 text-center sm:text-left order-2 sm:order-1">
//               &copy; {currentYear} ChamberofLearning | Current time: {currentTime}
//             </p>
//             <p className="text-sm text-gray-500 text-center sm:text-right order-1 sm:order-2">
//               <span className="block sm:inline">All rights reserved.</span>{" "}
//               <Link to="/terms" className="inline-block text-teal-600 underline hover:text-teal-700">
//                 Terms & Conditions
//               </Link>{" "}
//               &middot;{" "}
//               <Link to="/privacy" className="inline-block text-teal-600 underline hover:text-teal-700">
//                 Privacy Policy
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin, MessageCircle, Clock } from 'lucide-react';
// import Logo from "../assets/COL.png";

// const socialLinks = [
//   { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/people/ChamberoflearningOfficial/61564525092021/", color: "#4267B2", hoverColor: "#365899" },
//   { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/chamber_of_learning_official/?next=%2F", color: "#E1306C", hoverColor: "#C13584" },
//   { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/company/105144482/", color: "#2867B2", hoverColor: "#0077B5" },
//   { name: "YouTube", icon: Youtube, href: "https://www.youtube.com/@ChamberOfLearningOfficial", color: "#FF0000", hoverColor: "#CC0000" },
//   { name: "WhatsApp", icon: MessageCircle, href: "https://wa.me/919445918818", color: "#25D366", hoverColor: "#128C7E" },
// ];

// const navigationSections = [
//   {
//     title: "About Us",
//     links: [
//       { name: "Careers", href: "/careers" },
//       { name: "FAQs", href: "/faqs" },
//       { name: "Support", href: "/support" },
//     ],
//   },
//   {
//     title: "Our Services",
//     links: [
//       { name: "Web Development", href: "/services/web-development" },
//       { name: "Web Design", href: "/services/web-design" },
//       { name: "Marketing", href: "/services/marketing" },
//     ],
//   },
// ];

// const timeZones = [
//   { value: 'Asia/Kolkata', label: 'India (IST)' },
//   { value: 'America/New_York', label: 'New York (EST)' },
//   { value: 'Europe/London', label: 'London (GMT)' },
//   { value: 'Asia/Tokyo', label: 'Tokyo (JST)' },
//   { value: 'Australia/Sydney', label: 'Sydney (AEST)' },
// ];

// const FooterLogo = () => (
//   <Link to='/' className="inline-flex items-center rounded-lg bg-gradient-to-r from-teal-500 to-teal-300 p-2 shadow-lg">
//     <div className="flex items-center">
//       <img src={Logo} alt="Your Logo" className="h-14 w-auto rounded-full mr-2" />
//       <div>
//         <h1 className="text-2xl font-extrabold text-white">COL</h1>
//         <p className="text-sm text-gray-100 font-medium">
//           Chamber Of Learning
//         </p>
//       </div>
//     </div>
//   </Link>
// );

// const SocialLinks = ({ className = "" }) => (
//   <ul className={`flex flex-wrap justify-center sm:justify-start gap-4 ${className}`}>
//     {socialLinks.map((link) => (
//       <li key={link.name}>
//         <a
//           href={link.href}
//           rel="noreferrer"
//           target="_blank"
//           className="group relative block w-10 h-10"
//         >
//           <span className="sr-only">{link.name}</span>
//           <div 
//             className="absolute inset-0 rounded-lg transform transition-all duration-300 ease-in-out group-hover:rotate-6 group-hover:scale-110"
//             style={{ backgroundColor: link.color }}
//           ></div>
//           <div 
//             className="absolute inset-0 rounded-lg transform transition-all duration-300 ease-in-out group-hover:scale-95"
//             style={{ 
//               backgroundColor: link.hoverColor,
//               opacity: 0,
//               mixBlendMode: 'multiply'
//             }}
//           ></div>
//           <div className="relative flex items-center justify-center w-full h-full text-white transition-all duration-300 ease-in-out group-hover:scale-110">
//             <link.icon className="w-5 h-5" />
//           </div>
//         </a>
//       </li>
//     ))}
//   </ul>
// );

// const FooterNavigation = () => (
//   <>
//     {navigationSections.map((section) => (
//       <div key={section.title} className="text-center sm:text-left">
//         <p className="text-lg font-medium text-gray-900">{section.title}</p>
//         <ul className="mt-4 space-y-2 text-sm">
//           {section.links.map((link) => (
//             <li key={link.name}>
//               <Link to={link.href} className="text-gray-700 transition hover:text-teal-700">
//                 {link.name}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     ))}
//   </>
// );

// const ContactInfo = () => (
//   <div className="text-center sm:text-left">
//     <p className="text-lg font-medium text-gray-900">Contact Us</p>
//     <ul className="mt-4 space-y-2 text-sm">
//       <li>
//         <a href="mailto:enquire@chamberoflearning.com" className="flex items-center justify-center sm:justify-start gap-1.5 text-gray-700 hover:text-teal-700">
//           <Mail className="h-5 w-5 shrink-0" />
//           <span>enquire@chamberoflearning.com</span>
//         </a>
//       </li>
//       <li>
//         <a href="tel:+919445918818" className="flex items-center justify-center sm:justify-start gap-1.5 text-gray-700 hover:text-teal-700">
//           <Phone className="h-5 w-5 shrink-0" />
//           <span>+91 944-591-8818</span>
//         </a>
//       </li>
//       <li className="flex flex-col items-center sm:items-start gap-1.5">
//         <MapPin className="h-5 w-5 shrink-0 text-gray-900" />
//         <address className="text-gray-700 not-italic text-center sm:text-left text-sm">
//           <strong>PREFCOL EDUTECH SOLUTIONS (OPC) PRIVATE LIMITED</strong><br />
//           Olympia Technology Park<br />
//           Level 5, Fortius Tower, Olympia Tech Park,<br />
//           Plot No.1 SIDCO Industrial Estate, Guindy,<br />
//           Chennai, Tamil Nadu, 600032, India
//         </address>
//       </li>
//     </ul>
//   </div>
// );

// const TimeZoneSelector = ({ selectedTimeZone, onTimeZoneChange }) => (
//   <div className="flex items-center justify-center sm:justify-start gap-2">
//     <Clock className="h-5 w-5 text-gray-600" />
//     <select
//       value={selectedTimeZone}
//       onChange={(e) => onTimeZoneChange(e.target.value)}
//       className="bg-white border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 p-2"
//     >
//       {timeZones.map((tz) => (
//         <option key={tz.value} value={tz.value}>
//           {tz.label}
//         </option>
//       ))}
//     </select>
//   </div>
// );

// const Footer = () => {
//   const [currentTime, setCurrentTime] = useState(new Date());
//   const [selectedTimeZone, setSelectedTimeZone] = useState('Asia/Kolkata');

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentTime(new Date());
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   const formattedTime = new Intl.DateTimeFormat('en-US', {
//     timeZone: selectedTimeZone,
//     hour: 'numeric',
//     minute: 'numeric',
//     second: 'numeric',
//     hour12: true,
//   }).format(currentTime);

//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="bg-white border-t">
//       <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
//           <div className="flex flex-col items-center lg:items-start">
//             <FooterLogo />
//             <p className="mt-4 max-w-xs text-sm text-gray-600 text-center lg:text-left">
//               Platform to Rebuild Your Future
//             </p>
//             <SocialLinks className="mt-6" />
//           </div>
//           <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3">
//             <FooterNavigation />
//             <ContactInfo />
//           </div>
//         </div>
//         <div className="mt-8 border-t border-gray-100 pt-6">
//           <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
//             <div className="flex flex-col sm:flex-row items-center gap-4 order-2 sm:order-1">
//               <TimeZoneSelector
//                 selectedTimeZone={selectedTimeZone}
//                 onTimeZoneChange={setSelectedTimeZone}
//               />
//               <p className="text-sm text-gray-500 text-center sm:text-left">
//                 &copy; {currentYear} ChamberofLearning | Current time: {formattedTime}
//               </p>
//             </div>
//             <p className="text-sm text-gray-500 text-center sm:text-right order-1 sm:order-2">
//               <span className="block sm:inline">All rights reserved.</span>{" "}
//               <Link to="/terms" className="inline-block text-teal-600 underline hover:text-teal-700">
//                 Terms & Conditions
//               </Link>{" "}
//               &middot;{" "}
//               <Link to="/privacy" className="inline-block text-teal-600 underline hover:text-teal-700">
//                 Privacy Policy
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;




// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin, MessageCircle, Clock } from 'lucide-react';
// import Logo from "../assets/COL.png";

// const socialLinks = [
//   { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/people/ChamberoflearningOfficial/61564525092021/", color: "#4267B2", hoverColor: "#365899" },
//   { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/chamber_of_learning_official/?next=%2F", color: "#E1306C", hoverColor: "#C13584" },
//   { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/company/105144482/", color: "#2867B2", hoverColor: "#0077B5" },
//   { name: "YouTube", icon: Youtube, href: "https://www.youtube.com/@ChamberOfLearningOfficial", color: "#FF0000", hoverColor: "#CC0000" },
//   { name: "WhatsApp", icon: MessageCircle, href: "https://wa.me/919445918818", color: "#25D366", hoverColor: "#128C7E" },
// ];

// const navigationSections = [
//   {
//     title: "About Us",
//     links: [
//       { name: "Careers", href: "/careers" },
//       { name: "FAQs", href: "/faqs" },
//       { name: "Support", href: "/support" },
//     ],
//   },
//   {
//     title: "Our Services",
//     links: [
//       { name: "Web Development", href: "/services/web-development" },
//       { name: "Web Design", href: "/services/web-design" },
//       { name: "Marketing", href: "/services/marketing" },
//     ],
//   },
// ];

// const FooterLogo = () => (
//   <Link to='/' className="inline-flex items-center rounded-lg bg-gradient-to-r from-teal-500 to-teal-300 p-2 shadow-lg">
//     <div className="flex items-center">
//       <img src={Logo} alt="Your Logo" className="h-14 w-auto rounded-full mr-2" />
//       <div>
//         <h1 className="text-2xl font-extrabold text-white">COL</h1>
//         <p className="text-sm text-gray-100 font-medium">
//           Chamber Of Learning
//         </p>
//       </div>
//     </div>
//   </Link>
// );

// const SocialLinks = ({ className = "" }) => (
//   <ul className={`flex flex-wrap justify-center sm:justify-start gap-4 ${className}`}>
//     {socialLinks.map((link) => (
//       <li key={link.name}>
//         <a
//           href={link.href}
//           rel="noreferrer"
//           target="_blank"
//           className="group relative block w-10 h-10"
//         >
//           <span className="sr-only">{link.name}</span>
//           <div 
//             className="absolute inset-0 rounded-lg transform transition-all duration-300 ease-in-out group-hover:rotate-6 group-hover:scale-110"
//             style={{ backgroundColor: link.color }}
//           ></div>
//           <div 
//             className="absolute inset-0 rounded-lg transform transition-all duration-300 ease-in-out group-hover:scale-95"
//             style={{ 
//               backgroundColor: link.hoverColor,
//               opacity: 0,
//               mixBlendMode: 'multiply'
//             }}
//           ></div>
//           <div className="relative flex items-center justify-center w-full h-full text-white transition-all duration-300 ease-in-out group-hover:scale-110">
//             <link.icon className="w-5 h-5" />
//           </div>
//         </a>
//       </li>
//     ))}
//   </ul>
// );

// const FooterNavigation = () => (
//   <>
//     {navigationSections.map((section) => (
//       <div key={section.title} className="text-center sm:text-left">
//         <p className="text-lg font-medium text-gray-900">{section.title}</p>
//         <ul className="mt-4 space-y-2 text-sm">
//           {section.links.map((link) => (
//             <li key={link.name}>
//               <Link to={link.href} className="text-gray-700 transition hover:text-teal-700">
//                 {link.name}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     ))}
//   </>
// );

// const ContactInfo = () => (
//   <div className="text-center sm:text-left">
//     <p className="text-lg font-medium text-gray-900">Contact Us</p>
//     <ul className="mt-4 space-y-2 text-sm">
//       <li>
//         <a href="mailto:enquire@chamberoflearning.com" className="flex items-center justify-center sm:justify-start gap-1.5 text-gray-700 hover:text-teal-700">
//           <Mail className="h-5 w-5 shrink-0" />
//           <span>enquire@chamberoflearning.com</span>
//         </a>
//       </li>
//       <li>
//         <a href="tel:+919445918818" className="flex items-center justify-center sm:justify-start gap-1.5 text-gray-700 hover:text-teal-700">
//           <Phone className="h-5 w-5 shrink-0" />
//           <span>+91 944-591-8818</span>
//         </a>
//       </li>
//       <li className="flex flex-col items-center sm:items-start gap-1.5">
//         <MapPin className="h-5 w-5 shrink-0 text-gray-900" />
//         <address className="text-gray-700 not-italic text-center sm:text-left text-sm">
//           <strong>PREFCOL EDUTECH SOLUTIONS (OPC) PRIVATE LIMITED</strong><br />
//           Olympia Technology Park<br />
//           Level 5, Fortius Tower, Olympia Tech Park,<br />
//           Plot No.1 SIDCO Industrial Estate, Guindy,<br />
//           Chennai, Tamil Nadu, 600032, India
//         </address>
//       </li>
//     </ul>
//   </div>
// );

// const TimeDisplay = ({ country, time, isLocal }) => (
//   <div className={`flex items-center gap-2 ${isLocal ? 'font-bold' : ''}`}>
//     <Clock className="h-5 w-5 text-gray-600" />
//     <span>{country}:</span>
//     <span>{time}</span>
//     {isLocal && <span className="text-xs text-teal-600">(Your local time)</span>}
//   </div>
// );

// const Footer = () => {
//   const [currentTime, setCurrentTime] = useState(new Date());
//   const [userCountry, setUserCountry] = useState(null);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentTime(new Date());
//     }, 1000);

//     // Attempt to get user's country
//     fetch('https://ipapi.co/json/')
//       .then(response => response.json())
//       .then(data => {
//         setUserCountry(data.country_name);
//       })
//       .catch(error => {
//         console.error('Error fetching user country:', error);
//       });

//     return () => clearInterval(timer);
//   }, []);

//   const formatTime = (timeZone) => {
//     return new Intl.DateTimeFormat('en-US', {
//       timeZone,
//       hour: 'numeric',
//       minute: 'numeric',
//       second: 'numeric',
//       hour12: true,
//     }).format(currentTime);
//   };

//   const germanyTime = formatTime('Europe/Berlin');
//   const indiaTime = formatTime('Asia/Kolkata');

//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="bg-white border-t">
//       <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
//           <div className="flex flex-col items-center lg:items-start">
//             <FooterLogo />
//             <p className="mt-4 max-w-xs text-sm text-gray-600 text-center lg:text-left">
//               Platform to Rebuild Your Future
//             </p>
//             <SocialLinks className="mt-6" />
//           </div>
//           <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3">
//             <FooterNavigation />
//             <ContactInfo />
//           </div>
//         </div>
//         <div className="mt-8 border-t border-gray-100 pt-6">
//           <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
//             <div className="flex flex-col sm:flex-row items-center gap-4 order-2 sm:order-1">
//               <TimeDisplay
//                 country="Germany"
//                 time={germanyTime}
//                 isLocal={userCountry === 'Germany'}
//               />
//               <TimeDisplay
//                 country="India"
//                 time={indiaTime}
//                 isLocal={userCountry === 'India'}
//               />
//               <p className="text-sm text-gray-500 text-center sm:text-left">
//                 &copy; {currentYear} ChamberofLearning
//               </p>
//             </div>
//             <p className="text-sm text-gray-500 text-center sm:text-right order-1 sm:order-2">
//               <span className="block sm:inline">All rights reserved.</span>{" "}
//               <Link to="/terms" className="inline-block text-teal-600 underline hover:text-teal-700">
//                 Terms & Conditions
//               </Link>{" "}
//               &middot;{" "}
//               <Link to="/privacy" className="inline-block text-teal-600 underline hover:text-teal-700">
//                 Privacy Policy
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin, MessageCircle, Clock } from 'lucide-react';
// import Logo from "../assets/COL.png";

// const socialLinks = [
//   { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/people/ChamberoflearningOfficial/61564525092021/", color: "#008080", hoverColor: "#365899" },
//   { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/chamber_of_learning_official/?next=%2F", color: "#008080", hoverColor: "#C13584" },
//   { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/company/105144482/", color: "#008080", hoverColor: "#008080" },
//   { name: "YouTube", icon: Youtube, href: "https://www.youtube.com/@ChamberOfLearningOfficial", color: "#008080", hoverColor: "#CC0000" },
//   { name: "WhatsApp", icon: MessageCircle, href: "https://wa.me/919445918818", color: "#008080", hoverColor: "#128C7E" },
// ];

// const navigationSections = [
//   {
//     title: "About Us",
//     links: [
//       { name: "Careers", href: "/careers" },
//       { name: "FAQs", href: "/faqs" },
//       { name: "Support", href: "/support" },
//     ],
//   },
//   {
//     title: "Our Services",
//     links: [
//       { name: "Web Development", href: "/services/web-development" },
//       { name: "Web Design", href: "/services/web-design" },
//       { name: "Marketing", href: "/services/marketing" },
//     ],
//   },
// ];

// const FooterLogo = () => (
//   <Link to='/' className="inline-flex items-center rounded-lg bg-gradient-to-r from-teal-500 to-teal-300 p-2 shadow-lg">
//     <div className="flex items-center">
//       <img src={Logo} alt="Your Logo" className="h-14 w-auto rounded-full mr-2" />
//       <div>
//         {/* <h1 className="text-2xl font-extrabold text-white">COL</h1> */}
//         <p className="text-sm text-gray-100 font-medium">
//           Chamber Of Learning
//         </p>
//       </div>
//     </div>
//   </Link>
// );


// const SocialLinks = ({ className = "" }) => (
//   <ul
//     className={`flex flex-wrap justify-center sm:justify-start gap-4 ${className}`}
//   >
//     {socialLinks.map((link) => (
//       <li key={link.name} className="relative group">
//         <a
//           href={link.href}
//           rel="noreferrer"
//           target="_blank"
//           className="block w-12 h-12 overflow-hidden rounded-full bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 transition-transform duration-300 group-hover:scale-110"
//         >
//           <div
//             className="absolute inset-0 z-10 flex items-center justify-center rounded-full bg-opacity-10 bg-gray-800 transition-transform duration-300 group-hover:scale-110"
//           >
//             <link.icon
//               className="w-6 h-6 text-white transform transition-transform duration-300 group-hover:scale-125"
//             />
//           </div>
//         </a>
//         <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 scale-0 rounded-md bg-black px-2 py-1 text-xs text-white opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
//           {link.name}
//         </span>
//       </li>
//     ))}
//   </ul>
// );

// // const SocialLinks = ({ className = "" }) => (
// //   <ul className={`flex flex-wrap justify-center sm:justify-start gap-4 ${className}`}>
// //     {socialLinks.map((link) => (
// //       <li key={link.name}>
// //         <a
// //           href={link.href}
// //           rel="noreferrer"
// //           target="_blank"
// //           className="group relative block w-10 h-10"
// //         >
// //           <span className="sr-only">{link.name}</span>
// //           <div 
// //             className="absolute inset-0 rounded-lg transform transition-all duration-300 ease-in-out group-hover:rotate-6 group-hover:scale-110"
// //             style={{ backgroundColor: link.color }}
// //           ></div>
// //           <div 
// //             className="absolute inset-0 rounded-lg transform transition-all duration-300 ease-in-out group-hover:scale-95"
// //             style={{ 
// //               backgroundColor: link.hoverColor,
// //               opacity: 0,
// //               mixBlendMode: 'multiply'
// //             }}
// //           ></div>
// //           <div className="relative flex items-center justify-center w-full h-full text-white transition-all duration-300 ease-in-out group-hover:scale-110">
// //             <link.icon className="w-5 h-5" />
// //           </div>
// //         </a>
// //       </li>
// //     ))}
// //   </ul>
// // );

// const FooterNavigation = () => (
//   <>
//     {navigationSections.map((section) => (
//       <div key={section.title} className="text-center sm:text-left">
//         <p className="text-lg font-medium text-gray-900">{section.title}</p>
//         <ul className="mt-4 space-y-2 text-sm">
//           {section.links.map((link) => (
//             <li key={link.name}>
//               <Link to={link.href} className="text-gray-700 transition hover:text-teal-700">
//                 {link.name}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     ))}
//   </>
// );

// const ContactInfo = () => (
//   <div className="text-center sm:text-left">
//     <p className="text-lg font-medium text-gray-900">Contact Us</p>
//     <ul className="mt-4 space-y-2 text-sm">
//       <li>
//         <a href="mailto:enquire@chamberoflearning.com" className="flex items-center justify-center sm:justify-start gap-1.5 text-gray-700 hover:text-teal-700">
//           <Mail className="h-5 w-5 shrink-0" />
//           <span>enquire@chamberoflearning.com</span>
//         </a>
//       </li>
//       <li>
//         <a href="tel:+919445918818" className="flex items-center justify-center sm:justify-start gap-1.5 text-gray-700 hover:text-teal-700">
//           <Phone className="h-5 w-5 shrink-0" />
//           <span>+91 944-591-8818</span>
//         </a>
//       </li>
//       <li className="flex flex-col items-center sm:items-start gap-1.5">
//         <MapPin className="h-5 w-5 shrink-0 text-gray-900" />
//         <address className="text-gray-700 not-italic text-center sm:text-left text-sm">
//           <strong>PREFCOL EDUTECH SOLUTIONS (OPC) PRIVATE LIMITED</strong><br />
//           Olympia Technology Park<br />
//           Level 5, Fortius Tower, Olympia Tech Park,<br />
//           Plot No.1 SIDCO Industrial Estate, Guindy,<br />
//           Chennai, Tamil Nadu, 600032, India
//         </address>
//       </li>
//     </ul>
//   </div>
// );

// const TimeDisplay = ({ country, time }) => (
//   <div className="flex items-center gap-2">
//     <Clock className="h-5 w-5 text-gray-600" />
//     <span>{country} Time:</span>
//     <span>{time}</span>
//   </div>
// );

// const Footer = () => {
//   const [currentTime, setCurrentTime] = useState(new Date());
//   const [userCountry, setUserCountry] = useState(null);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentTime(new Date());
//     }, 1000);

//     // Attempt to get user's country
//     fetch('https://ipapi.co/json/')
//       .then(response => response.json())
//       .then(data => {
//         setUserCountry(data.country_name);
//       })
//       .catch(error => {
//         console.error('Error fetching user country:', error);
//         setUserCountry('India'); // Default to India if there's an error
//       });

//     return () => clearInterval(timer);
//   }, []);

//   const formatTime = (timeZone) => {
//     return new Intl.DateTimeFormat('en-US', {
//       timeZone,
//       hour: 'numeric',
//       minute: 'numeric',
//       second: 'numeric',
//       hour12: true,
//     }).format(currentTime);
//   };

//   const getTimeDisplay = () => {
//     if (userCountry === 'Germany') {
//       return <TimeDisplay  country="Germany" time={formatTime('Europe/Berlin')} />;
//     } else {
//       return <TimeDisplay country="India" time={formatTime('Asia/Kolkata')} />;
//     }
//   };

//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="bg-white border-t">
//       <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
//           <div className="flex flex-col items-center lg:items-start">
//             <FooterLogo />
//             <p className="mt-4 max-w-xs text-sm text-gray-600 text-center lg:text-left">
//               Platform to Rebuild Your Future
//             </p>
//             <SocialLinks className="mt-6" />
//           </div>
//           <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3">
//             <FooterNavigation />
//             <ContactInfo />
//           </div>
//         </div>
//         <div className="mt-8 border-t border-gray-100 pt-6">
//           <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
//             <div className="flex flex-col sm:flex-row items-center gap-4 order-2 sm:order-1">
           
//               <p className="text-sm text-gray-500 text-center sm:text-left">
//                 &copy; {currentYear} ChamberofLearning
//               </p>
//               {getTimeDisplay()}
//             </div>
//             <p className="text-sm text-gray-500 text-center sm:text-right order-1 sm:order-2">
//               <span className="block sm:inline">All rights reserved.</span>{" "}
//               <Link to="/terms" className="inline-block text-teal-600 underline hover:text-teal-700">
//                 Terms & Conditions
//               </Link>{" "}
//               &middot;{" "}
//               <Link to="/privacy" className="inline-block text-teal-600 underline hover:text-teal-700">
//                 Privacy Policy
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;




// import React from "react";
// import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
// import Logo from "../assets/COL.png";

// const socialLinks = [
//   { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/people/ChamberoflearningOfficial/61564525092021/", color: "#008080", hoverColor: "#365899" },
//   { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/chamber_of_learning_official/?next=%2F", color: "#008080", hoverColor: "#C13584" },
//   { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/company/105144482/", color: "#008080", hoverColor: "#008080" },
//   { name: "YouTube", icon: Youtube, href: "https://www.youtube.com/@ChamberOfLearningOfficial", color: "#008080", hoverColor: "#CC0000" },
//   { name: "WhatsApp", icon: MessageCircle, href: "https://wa.me/919445918818", color: "#008080", hoverColor: "#128C7E" },
// ];

// const navigationSections = [
//   {
//     title: "About Us",
//     links: [
//       { name: "Careers", },
//       { name: "FAQs", },
//       { name: "Support", },
//     ],
//   },
//   {
//     title: "Our Services",
//     links: [
//       { name: "Web Development",  },
//       { name: "Web Design",  },
//       { name: "Marketing",  },
//     ],
//   },
// ];
// // footer logo component
// const FooterLogo = () => (
//   <a href='/' className="inline-flex items-center rounded-lg bg-gradient-to-r from-teal-900 to-teal-700 p-2 shadow-lg">
//     <div className="flex items-center">
//       <img src={Logo} alt="Chamber Of Learning Logo" width={56} height={56} className="rounded-full mr-2" />
//       <div>
//         <p className="text-sm text-gray-100 font-medium">
//           Chamber Of Learning
//         </p>
//       </div>
//     </div>
//   </a>
// );
// // social links component
// const SocialLinks = ({ className = "" }) => (
//   <ul className={`flex flex-wrap justify-center sm:justify-start gap-4 ${className}`}>
//     {socialLinks.map((link) => (
//       <li key={link.name} className="relative group">
//         <a
//           href={link.href}
//           rel="noreferrer"
//           target="_blank"
//           className="block w-12 h-12 overflow-hidden rounded-full bg-gradient-to-r from-teal-500 via-teal-900 to-teal-900 transition-transform duration-300 group-hover:scale-110"
//         >
//           <div className="absolute inset-0 z-10 flex items-center justify-center rounded-full bg-opacity-10 bg-gray-800 transition-transform duration-300 group-hover:scale-110">
//             <link.icon className="w-6 h-6 text-white transform transition-transform duration-300 group-hover:scale-125" />
//           </div>
//         </a>
//         <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 scale-0 rounded-md bg-black px-2 py-1 text-xs text-white opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
//           {link.name}
//         </span>
//       </li>
//     ))}
//   </ul>
// );
// // footer navigation component
// const FooterNavigation = () => (
//   <>
//     {navigationSections.map((section) => (
//       <div key={section.title} className="text-center sm:text-left">
//         <p className="text-lg font-medium text-gray-900">{section.title}</p>
//         <ul className="mt-4 space-y-2 text-sm">
//           {section.links.map((link) => (
//             <li key={link.name}>
//               <a href={link.href} className="text-gray-700 transition hover:text-teal-700">
//                 {link.name}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>
//     ))}
//   </>
// );
// // contact info component
// // const ContactInfo = () => (
// //   <div className="text-center sm:text-left">
// //     <p className="text-lg font-medium text-gray-900">Contact Us</p>
// //     <ul className="mt-4 space-y-2 text-sm">
// //       <li>
// //         <a href="mailto:enquire@chamberoflearning.com" className="flex items-center justify-center sm:justify-start gap-1.5 text-gray-700 hover:text-teal-700">
// //           <Mail className="h-5 w-5 shrink-0" />
// //           <span>enquire@chamberoflearning.com</span>
// //         </a>
// //       </li>
// //       <li>
// //         <a href="tel:+919445918818" className="flex items-center justify-center sm:justify-start gap-1.5 text-gray-700 hover:text-teal-700">
// //           <Phone className="h-5 w-5 shrink-0" />
// //           <span>+91 944-591-8818</span>
// //         </a>
// //       </li>
// //       <li className="flex flex-col items-center sm:items-start gap-1.5">
// //         <MapPin className="h-5 w-5 shrink-0 text-gray-900" />
// //         <address className="text-gray-700 not-italic text-center sm:text-left text-sm">
// //           <strong>PREFCOL EDUTECH SOLUTIONS (OPC) PRIVATE LIMITED</strong><br />
// //           Olympia Technology Park<br />
// //           Level 5, Fortius Tower, Olympia Tech Park,<br />
// //           Plot No.1 SIDCO Industrial Estate, Guindy,<br />
// //           Chennai, Tamil Nadu, 600032, India
// //         </address>
// //       </li>
// //     </ul>
// //   </div>
// // );
// const ContactInfo = () => (
//   <div className="text-center sm:text-left">
//     <p className="text-lg font-medium text-gray-900">Contact Us</p>
//     <ul className="mt-4 space-y-4 text-sm">
//       {/* Email */}
//       <li className="flex items-center gap-2 justify-center sm:justify-start">
//         <Mail className="h-5 w-5 text-gray-900" />
//         <a
//           href="mailto:enquire@chamberoflearning.com"
//           className="text-gray-700 hover:text-teal-700"
//         >
//           enquire@chamberoflearning.com
//         </a>
//       </li>

//       {/* Phone */}
//       <li className="flex items-center gap-2 justify-center sm:justify-start">
//         <Phone className="h-5 w-5 text-gray-900" />
//         <a href="tel:+919445918818" className="text-gray-700 hover:text-teal-700">
//           +91 944-591-8818
//         </a>
//       </li>

//       {/* Address */}
//       <li className="flex items-start gap-2 justify-center sm:justify-start">
//         <MapPin className="h-5 w-5 text-gray-900 mt-1" />
//         <address className="text-gray-700 not-italic text-sm leading-relaxed">
//           <strong>PREFCOL EDUTECH SOLUTIONS (OPC) PRIVATE LIMITED</strong>
//           <br />
//           Olympia Technology Park, Level 5, Fortius Tower
//           <br />
//           Plot No.1, SIDCO Industrial Estate, Guindy
//           <br />
//           Chennai, Tamil Nadu, 600032, India
//         </address>
//       </li>
//     </ul>
//   </div>
// );
// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="bg-white border-t">
//       <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
//           <div className="flex flex-col items-center lg:items-start">
//             <FooterLogo />
//             <p className="mt-4 max-w-xs text-sm text-gray-600 text-center lg:text-left">
//               Platform to Rebuild Your Future
//             </p>
//             <SocialLinks className="mt-6" />
//           </div>
//           <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3">
//             <FooterNavigation />
//             <ContactInfo />
//           </div>
//         </div>
//         <div className="mt-8 border-t border-gray-100 pt-6">
//           <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
//             <p className="text-sm text-gray-500 text-center sm:text-left">
//               &copy; {currentYear} ChamberofLearning. All rights reserved.
//             </p>
//             <p className="text-sm text-gray-500 text-center sm:text-right">
//               {/* need to add href to terms and conditions ....................................................................................... */}
//               <a  className="inline-block text-teal-600 underline hover:text-teal-700">
//                 Terms & Conditions
//               </a>{" "}
//               &middot;{" "}
//               <a  className="inline-block text-teal-600 underline hover:text-teal-700">
//                 Privacy Policy
//               </a>
//             </p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// import React from "react";
// import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin, MessageCircle, ExternalLink } from 'lucide-react';
// import Logo from "../assets/COL.png";

// const socialLinks = [
//   { 
//     name: "Facebook", 
//     icon: Facebook, 
//     href: "https://www.facebook.com/people/ChamberoflearningOfficial/61564525092021/",
//     bgColor: "bg-[#1877F2] hover:bg-[#0C63D4]"
//   },
//   { 
//     name: "Instagram", 
//     icon: Instagram, 
//     href: "https://www.instagram.com/chamber_of_learning_official/?next=%2F",
//     bgColor: "bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737]"
//   },
//   { 
//     name: "LinkedIn", 
//     icon: Linkedin, 
//     href: "https://www.linkedin.com/company/105144482/",
//     bgColor: "bg-[#0A66C2] hover:bg-[#004182]"
//   },
//   { 
//     name: "YouTube", 
//     icon: Youtube, 
//     href: "https://www.youtube.com/@ChamberOfLearningOfficial",
//     bgColor: "bg-[#FF0000] hover:bg-[#CC0000]"
//   },
//   { 
//     name: "WhatsApp", 
//     icon: MessageCircle, 
//     href: "https://wa.me/919445918818",
//     bgColor: "bg-[#25D366] hover:bg-[#128C7E]"
//   },
// ];

// const navigationSections = [
//   {
//     title: "About Us",
//     links: [
//       { name: "Careers", },
//       { name: "FAQs", },
//       { name: "Support",  },
//     ],
//   },
//   {
//     title: "Our Services",
//     links: [
//       { name: "Web Development",  },
//       { name: "Web Design",  },
//       { name: "Marketing", },
//     ],
//   },
// ];

// const FooterLogo = () => (
//   <a 
//     href="/" 
//     className="group relative inline-flex items-center rounded-xl bg-gradient-to-r from-teal-600 to-teal-800 p-3 shadow-lg transition-all duration-300 hover:shadow-xl hover:from-teal-700 hover:to-teal-900"
//   >
//     <div className="flex items-center space-x-3">
//       <div className="overflow-hidden rounded-full">
//         <img 
//           src={Logo} 
//           alt="Chamber Of Learning Logo" 
//           className="h-14 w-14 transform transition-transform duration-300 group-hover:scale-110" 
//         />
//       </div>
//       <div className="border-l border-teal-400 pl-3">
//         <p className="text-base font-bold text-white">
//           Chamber Of Learning
//         </p>
//         <p className="text-xs text-teal-200">
//           Empowering Future
//         </p>
//       </div>
//     </div>
//   </a>
// );

// // const SocialLinks = ({ className = "" }) => (
// //   <ul className={`flex flex-wrap justify-center gap-4 ${className}`}>
// //     {socialLinks.map((link) => (
// //       <li key={link.name} className="group relative">
// //         <a
// //           href={link.href}
// //           rel="noreferrer"
// //           target="_blank"
// //           className={`flex h-12 w-12 items-center justify-center rounded-lg ${link.bgColor} shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
// //         >
// //           <link.icon className="h-6 w-6 text-white transition-transform duration-300 group-hover:scale-110" />
// //         </a>
// //         <span className="absolute -bottom-8 left-1/2 z-10 -translate-x-1/2 scale-0 rounded-md bg-gray-900 px-3 py-1.5 text-xs text-white opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
// //           {link.name}
// //         </span>
// //       </li>
// //     ))}
// //   </ul>
// // );
// const SocialLinks = ({ className = "" }) => (
//   <ul className={`flex flex-wrap justify-center sm:justify-start gap-4 ${className}`}>
//     {socialLinks.map((link) => (
//       <li key={link.name} className="relative group">
//         <a
//           href={link.href}
//           rel="noreferrer"
//           target="_blank"
//           className="block w-12 h-12 overflow-hidden rounded-full bg-gradient-to-r from-teal-500 via-teal-900 to-teal-900 transition-transform duration-300 group-hover:scale-110"
//         >
//           <div className="absolute inset-0 z-10 flex items-center justify-center rounded-full bg-opacity-10 bg-gray-800 transition-transform duration-300 group-hover:scale-110">
//             <link.icon className="w-6 h-6 text-white transform transition-transform duration-300 group-hover:scale-125" />
//           </div>
//         </a>
//         <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 scale-0 rounded-md bg-black px-2 py-1 text-xs text-white opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
//           {link.name}
//         </span>
//       </li>
//     ))}
//   </ul>
// );

// const FooterNavigation = () => (
//   <>
//     {navigationSections.map((section) => (
//       <div key={section.title} className="text-center lg:text-left">
//         <h3 className="text-lg font-bold text-gray-900 after:mt-2 after:block after:h-1 after:w-12 after:rounded-full after:bg-teal-600 lg:after:mx-0">
//           {section.title}
//         </h3>
//         <ul className="mt-6 space-y-4">
//           {section.links.map((link) => (
//             <li key={link.name}>
//               <a 
//                 href={link.href} 
//                 // className="group inline-flex items-center text-gray-600 transition-colors hover:text-teal-700"
//                  className="group inline-flex items-center text-gray-600"
//               >
//                 <span className="relative">
//                   {link.name}
//                   <span className="absolute bottom-0 left-0 h-0.5 w-0 "></span>
//                 </span>
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>
//     ))}
//   </>
// );

// const ContactInfo = () => {
//   const mapUrl = "https://www.google.com/maps?q=Olympia+Technology+Park+Guindy+Chennai";
  
//   return (
//     <div className="text-center lg:text-left">
//       <h3 className="text-lg font-bold text-gray-900 after:mt-2 after:block after:h-1 after:w-12 after:rounded-full after:bg-teal-600 lg:after:mx-0">
//         Contact Us
//       </h3>
//       <ul className="mt-6 space-y-6">
//         <li>
//           <a 
//             href="mailto:enquire@chamberoflearning.com" 
//             className="group inline-flex items-center gap-3 rounded-lg p-2 transition-colors "
//           >
//             <Mail className="h-5 w-5 text-teal-600" />
//             <span className="text-gray-600 transition-colors ">
//               enquire@chamberoflearning.com
//             </span>
//           </a>
//         </li>
//         <li>
//           <a 
//             href="tel:+919445918818" 
//             className="group inline-flex items-center gap-3 rounded-lg p-2 transition-colors "
//           >
//             <Phone className="h-5 w-5 text-teal-600" />
//             <span className="text-gray-600 transition-colors ">
//               +91 944-591-8818
//             </span>
//           </a>
//         </li>
//         <li>
//           <a 
//             href={mapUrl}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="group inline-flex items-start gap-3 rounded-lg p-2 transition-colors "
//           >
//             <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-teal-600" />
//             <div className="flex flex-col items-start">
//               <address className="not-italic leading-relaxed text-gray-600 ">
//                 <strong className="font-semibold">PREFCOL EDUTECH SOLUTIONS (OPC) PRIVATE LIMITED</strong>
//                 <br />
//                 Olympia Technology Park, Level 5, Fortius Tower
//                 <br />
//                 Plot No.1, SIDCO Industrial Estate, Guindy
//                 <br />
//                 Chennai, Tamil Nadu, 600032, India
//               </address>
//               <span className="mt-2 inline-flex items-center gap-1 text-sm text-teal-600">
//                 <ExternalLink className="h-4 w-4" />
//                 View on Maps
//               </span>
//             </div>
//           </a>
//         </li>
//       </ul>
//     </div>
//   );
// };

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="relative border-t border-gray-100 bg-white">
//       <div className="absolute inset-x-0 -top-8">
//         <div className="mx-auto h-8 w-64 rounded-t-full bg-gradient-to-r from-teal-600 to-teal-800"></div>
//       </div>
      
//       <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
//           <div className="flex flex-col items-center space-y-8 lg:items-start">
//             <FooterLogo />
//             <p className="max-w-xs text-center text-sm leading-relaxed text-gray-600 lg:text-left">
//               Empowering individuals to rebuild their future through innovative learning solutions and comprehensive career guidance.
//             </p>
//             <SocialLinks />
//           </div>
//           <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3">
//             <FooterNavigation />
//             <ContactInfo />
//           </div>
//         </div>

//         <div className="mt-12 border-t border-gray-100 pt-8">
//           <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
//             <p className="text-center text-sm text-gray-500 lg:text-left">
//               &copy; {currentYear} Chamber of Learning. All rights reserved.
//             </p>
//             <div className="flex items-center space-x-4 text-sm">
//               <a href="#terms" className="group relative text-gray-500 transition-colors hover:text-teal-600">
//                 Terms & Conditions
//                 <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-teal-600 transition-all duration-300 group-hover:w-full"></span>
//               </a>
//               <span className="text-gray-300">•</span>
//               <a href="#privacy" className="group relative text-gray-500 transition-colors hover:text-teal-600">
//                 Privacy Policy
//                 <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-teal-600 transition-all duration-300 group-hover:w-full"></span>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;






import React from "react"
import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin, MessageCircle, ExternalLink } from "lucide-react"
import Logo from "../assets/Prefcol.png"

const socialLinks = [
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://www.facebook.com/share/1DQCBRzxdo/?mibextid=wwXIfr",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/chamber_of_learning?igsh=ZnFvaXdpdWs5ZHJ2",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/chamber-of-learning-713815323?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  },
  {
    name: "YouTube",
    icon: Youtube,
    href: "https://www.youtube.com/@ChamberOfLearningOfficial",  },
  {
    name: "WhatsApp",
    icon: MessageCircle,
    href: "https://wa.me/919445918818",
  },
]

// const navigationSections = [
//   {
//     title: "About Us",
//     links: [{ name: "Careers" }, { name: "FAQs" }, { name: "Support" }],
//   },
//   {
//     title: "Our Services",
//     links: [{ name: "Web Development" }, { name: "Web Design" }, { name: "Marketing" }],
//   },
// ]

const FooterLogo = () => (
  <a
    href="/"
    className="group relative inline-flex items-center rounded-xl bg-gradient-to-r from-teal-600 to-teal-800 p-2 sm:p-3 shadow-lg transition-all duration-300 hover:shadow-xl hover:from-teal-700 hover:to-teal-900"
  >
    <div className="flex items-center space-x-2 sm:space-x-3">
      <div className="overflow-hidden rounded-full">
        <img
          src={Logo || "/placeholder.svg"}
          alt="Prefcol Logo"
          className="h-10 w-10 sm:h-14 sm:w-14 transform transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="border-l border-teal-400 pl-2 sm:pl-3">
        <p className="text-sm sm:text-base font-bold text-white">Prefcol Edutech Solutions</p>
        <p className="text-xs text-teal-200">Empowering Future</p>
      </div>
    </div>
  </a>
)

const SocialLinks = ({ className = "" }) => (
  <ul className={`flex flex-wrap justify-center gap-3 sm:gap-4 ${className}`}>
    {socialLinks.map((link) => (
      <li key={link.name} className="relative group">
        <a
          href={link.href}
          rel="noreferrer"
          target="_blank"
          className="block w-10 h-10 sm:w-12 sm:h-12 overflow-hidden rounded-full bg-gradient-to-r from-teal-500 via-teal-900 to-teal-900 transition-transform duration-300 group-hover:scale-110"
        >
          <div className="absolute inset-0 z-10 flex items-center justify-center rounded-full bg-opacity-10 bg-gray-800 transition-transform duration-300 group-hover:scale-110">
            <link.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white transform transition-transform duration-300 group-hover:scale-125" />
          </div>
        </a>
        <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 scale-0 rounded-md bg-black px-2 py-1 text-xs text-white opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
          {link.name}
        </span>
      </li>
    ))}
  </ul>
)

// const FooterNavigation = () => (
//   <>
//     {navigationSections.map((section) => (
//       <div key={section.title} className="text-center lg:text-left">
//         <h3 className="text-base sm:text-lg font-bold text-gray-900 after:mt-2 after:block after:h-1 after:w-12 after:rounded-full after:bg-teal-600 after:mx-auto lg:after:mx-0">
//           {section.title}
//         </h3>
//         <ul className="mt-4 sm:mt-6 space-y-3 sm:space-y-4">
//           {section.links.map((link) => (
//             <li key={link.name}>
//               <a href="#" className="group inline-flex items-center text-sm sm:text-base text-gray-600">
//                 <span className="relative">
//                   {link.name}
//                   <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-teal-600 transition-all duration-300 group-hover:w-full"></span>
//                 </span>
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>
//     ))}
//   </>
// )

const ContactInfo = () => {
  const mapUrl = "https://www.google.com/maps?q=Olympia+Technology+Park+Guindy+Chennai"

  return (
    <div className="text-center lg:text-left">
      <h3 className="text-base  sm:text-lg font-bold text-gray-900 after:mt-2 after:block after:h-1 after:w-20 after:rounded-full after:bg-teal-600 after:mx-auto lg:after:mx-0">
        Contact Us
      </h3>
      <ul className="mt-4 sm:mt-6 space-y-0 sm:space-y-0">
        <li>
          <a
            href="mailto:info@prefcol.com"
            className="group inline-flex items-center gap-2 sm:gap-3 rounded-lg p-1.5 sm:p-2 transition-colors hover:bg-gray-100"
          >
            <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-teal-600" />
            <span className="text-sm sm:text-base text-gray-600 transition-colors group-hover:text-teal-600">
              info@prefcol.com
            </span>
          </a>
        </li>
        <li>
          <a
            href="tel:+919445918818"
            className="group inline-flex items-center gap-2 sm:gap-3 rounded-lg p-1.5 sm:p-2 transition-colors hover:bg-gray-100"
          >
            <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-teal-600" />
            <span className="text-sm sm:text-base text-gray-600 transition-colors group-hover:text-teal-600">+91 944-591-8818</span>
          </a>
        </li>
        <li>
          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-start gap-2 sm:gap-3 rounded-lg p-1.5 sm:p-2 transition-colors hover:bg-gray-100"
          >
            <MapPin className="mt-1 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-teal-600" />
            <div className="flex flex-col items-start">
              <address className="text-sm sm:text-base not-italic leading-relaxed text-gray-600 group-hover:text-teal-600">
                <strong className="font-semibold">PREFCOL EDUTECH SOLUTIONS (OPC) PRIVATE LIMITED</strong>
                <br />
                Olympia Technology Park, Level 5, Fortius Tower
                <br />
                Plot No.1, SIDCO Industrial Estate, Guindy
                <br />
                Chennai, Tamil Nadu, 600032, India
              </address>
              <span className="mt-1 sm:mt-2 inline-flex items-center gap-1 text-xs sm:text-sm text-teal-600">
                <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
                View on Maps
              </span>
            </div>
          </a>
        </li>
      </ul>
    </div>
  )
}

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-gray-100 bg-white">
      {/* <div className="absolute inset-x-0 -top-8">
        <div className="mx-auto h-6 sm:h-8 w-48 sm:w-64 rounded-t-full bg-gradient-to-r from-teal-200 to-teal-400"></div>
      </div> */}

      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-2 justify-around">
          <div className="flex flex-col items-center space-y-6 sm:space-y-8 lg:items-start">
            <FooterLogo />
            <p className="max-w-xs text-center text-xs sm:text-sm leading-relaxed text-gray-600 lg:text-left">
              Empowering individuals to rebuild their future through innovative learning solutions and comprehensive
              career guidance.
            </p>
            <SocialLinks />
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-1 lg:col-span-1 lg:grid-cols-1">
            {/* <FooterNavigation /> */}
            <ContactInfo />
          </div>
        </div>

        <div className="mt-8 sm:mt-12 border-t border-gray-100 pt-6 sm:pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-center text-xs sm:text-sm text-gray-500 lg:text-left">
              &copy; {currentYear} Prefcol Edutech Solutions Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex items-center space-x-3 sm:space-x-4 text-xs sm:text-sm">
              <a href="#terms" className="group relative text-gray-500 transition-colors hover:text-teal-600">
                Terms & Conditions
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-teal-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <span className="text-gray-300">•</span>
              <a href="#privacy" className="group relative text-gray-500 transition-colors hover:text-teal-600">
                Privacy Policy
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-teal-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer





















































// 
// import React from "react"
// import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin, MessageCircle, ExternalLink } from "lucide-react"
// import Logo from "../assets/COL.png"

// const socialLinks = [
//   {
//     name: "Facebook",
//     icon: Facebook,
//     href: "https://www.facebook.com/people/ChamberoflearningOfficial/61564525092021/",
//   },
//   {
//     name: "Instagram",
//     icon: Instagram,
//     href: "https://www.instagram.com/chamber_of_learning_official/?next=%2F",
//   },
//   {
//     name: "LinkedIn",
//     icon: Linkedin,
//     href: "https://www.linkedin.com/company/105144482/",
//   },
//   {
//     name: "YouTube",
//     icon: Youtube,
//     href: "https://www.youtube.com/@ChamberOfLearningOfficial",
//   },
//   {
//     name: "WhatsApp",
//     icon: MessageCircle,
//     href: "https://wa.me/919445918818",
//   },
// ]

// const navigationSections = [
//   {
//     title: "About Us",
//     links: [{ name: "Careers" }, { name: "FAQs" }, { name: "Support" }],
//   },
//   {
//     title: "Our Services",
//     links: [{ name: "Web Development" }, { name: "Web Design" }, { name: "Marketing" }],
//   },
// ]

// const FooterLogo = () => (
//   <a
//     href="/"
//     className="group relative inline-flex items-center rounded-xl bg-gradient-to-r from-teal-600 to-teal-800 p-3 shadow-lg transition-all duration-300 hover:shadow-xl hover:from-teal-700 hover:to-teal-900"
//   >
//     <div className="flex items-center space-x-3">
//       <div className="overflow-hidden rounded-full">
//         <img
//           src={Logo || "/placeholder.svg"}
//           alt="Chamber Of Learning Logo"
//           className="h-14 w-14 transform transition-transform duration-300 group-hover:scale-110"
//         />
//       </div>
//       <div className="border-l border-teal-400 pl-3">
//         <p className="text-base font-bold text-white">Chamber Of Learning</p>
//         <p className="text-xs text-teal-200">Empowering Future</p>
//       </div>
//     </div>
//   </a>
// )

// const SocialLinks = ({ className = "" }) => (
//   <ul className={`flex flex-wrap justify-center sm:justify-start gap-4 ${className}`}>
//     {socialLinks.map((link) => (
//       <li key={link.name} className="relative group">
//         <a
//           href={link.href}
//           rel="noreferrer"
//           target="_blank"
//           className="block w-12 h-12 overflow-hidden rounded-full bg-gradient-to-r from-teal-500 via-teal-900 to-teal-900 transition-transform duration-300 group-hover:scale-110"
//         >
//           <div className="absolute inset-0 z-10 flex items-center justify-center rounded-full bg-opacity-10 bg-gray-800 transition-transform duration-300 group-hover:scale-110">
//             <link.icon className="w-6 h-6 text-white transform transition-transform duration-300 group-hover:scale-125" />
//           </div>
//         </a>
//         <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 scale-0 rounded-md bg-black px-2 py-1 text-xs text-white opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
//           {link.name}
//         </span>
//       </li>
//     ))}
//   </ul>
// )

// const FooterNavigation = () => (
//   <>
//     {navigationSections.map((section) => (
//       <div key={section.title} className="text-center lg:text-left">
//         <h3 className="text-lg font-bold text-gray-900 after:mt-2 after:block after:h-1 after:w-12 after:rounded-full after:bg-teal-600 lg:after:mx-0">
//           {section.title}
//         </h3>
//         <ul className="mt-6 space-y-4">
//           {section.links.map((link) => (
//             <li key={link.name}>
//               <a href="#" className="group inline-flex items-center text-gray-600">
//                 <span className="relative">
//                   {link.name}
//                   <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-teal-600 transition-all duration-300 group-hover:w-full"></span>
//                 </span>
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>
//     ))}
//   </>
// )

// const ContactInfo = () => {
//   const mapUrl = "https://www.google.com/maps?q=Olympia+Technology+Park+Guindy+Chennai"

//   return (
//     <div className="text-center lg:text-left">
//       <h3 className="text-lg font-bold text-gray-900 after:mt-2 after:block after:h-1 after:w-12 after:rounded-full after:bg-teal-600 lg:after:mx-0">
//         Contact Us
//       </h3>
//       <ul className="mt-6 space-y-6">
//         <li>
//           <a
//             href="mailto:enquire@chamberoflearning.com"
//             className="group inline-flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-gray-100"
//           >
//             <Mail className="h-5 w-5 text-teal-600" />
//             <span className="text-gray-600 transition-colors group-hover:text-teal-600">
//               enquire@chamberoflearning.com
//             </span>
//           </a>
//         </li>
//         <li>
//           <a
//             href="tel:+919445918818"
//             className="group inline-flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-gray-100"
//           >
//             <Phone className="h-5 w-5 text-teal-600" />
//             <span className="text-gray-600 transition-colors group-hover:text-teal-600">+91 944-591-8818</span>
//           </a>
//         </li>
//         <li>
//           <a
//             href={mapUrl}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="group inline-flex items-start gap-3 rounded-lg p-2 transition-colors hover:bg-gray-100"
//           >
//             <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-teal-600" />
//             <div className="flex flex-col items-start">
//               <address className="not-italic leading-relaxed text-gray-600 group-hover:text-teal-600">
//                 <strong className="font-semibold">PREFCOL EDUTECH SOLUTIONS (OPC) PRIVATE LIMITED</strong>
//                 <br />
//                 Olympia Technology Park, Level 5, Fortius Tower
//                 <br />
//                 Plot No.1, SIDCO Industrial Estate, Guindy
//                 <br />
//                 Chennai, Tamil Nadu, 600032, India
//               </address>
//               <span className="mt-2 inline-flex items-center gap-1 text-sm text-teal-600">
//                 <ExternalLink className="h-4 w-4" />
//                 View on Maps
//               </span>
//             </div>
//           </a>
//         </li>
//       </ul>
//     </div>
//   )
// }

// const Footer = () => {
//   const currentYear = new Date().getFullYear()

//   return (
//     <footer className="relative border-t border-gray-100 bg-white">
//       <div className="absolute inset-x-0 -top-8">
//         <div className="mx-auto h-8 w-64 rounded-t-full bg-gradient-to-r from-teal-600 to-teal-800"></div>
//       </div>

//       <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
//           <div className="flex flex-col items-center space-y-8 lg:items-start">
//             <FooterLogo />
//             <p className="max-w-xs text-center text-sm leading-relaxed text-gray-600 lg:text-left">
//               Empowering individuals to rebuild their future through innovative learning solutions and comprehensive
//               career guidance.
//             </p>
//             <SocialLinks />
//           </div>
//           <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3">
//             <FooterNavigation />
//             <ContactInfo />
//           </div>
//         </div>

//         <div className="mt-12 border-t border-gray-100 pt-8">
//           <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
//             <p className="text-center text-sm text-gray-500 lg:text-left">
//               &copy; {currentYear} Chamber of Learning. All rights reserved.
//             </p>
//             <div className="flex items-center space-x-4 text-sm">
//               <a href="#terms" className="group relative text-gray-500 transition-colors hover:text-teal-600">
//                 Terms & Conditions
//                 <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-teal-600 transition-all duration-300 group-hover:w-full"></span>
//               </a>
//               <span className="text-gray-300">•</span>
//               <a href="#privacy" className="group relative text-gray-500 transition-colors hover:text-teal-600">
//                 Privacy Policy
//                 <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-teal-600 transition-all duration-300 group-hover:w-full"></span>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   )
// }

// export default Footer

// import React from "react"
// import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin, MessageCircle, ExternalLink } from "lucide-react"
// import Logo from "../assets/COL.png"

// const socialLinks = [
//   {
//     name: "Facebook",
//     icon: Facebook,
//     href: "https://www.facebook.com/people/ChamberoflearningOfficial/61564525092021/",
//   },
//   {
//     name: "Instagram",
//     icon: Instagram,
//     href: "https://www.instagram.com/chamber_of_learning_official/?next=%2F",
//   },
//   {
//     name: "LinkedIn",
//     icon: Linkedin,
//     href: "https://www.linkedin.com/company/105144482/",
//   },
//   {
//     name: "YouTube",
//     icon: Youtube,
//     href: "https://www.youtube.com/@ChamberOfLearningOfficial",
//   },
//   {
//     name: "WhatsApp",
//     icon: MessageCircle,
//     href: "https://wa.me/919445918818",
//   },
// ]

// const navigationSections = [
//   {
//     title: "About Us",
//     links: [{ name: "Careers" }, { name: "FAQs" }, { name: "Support" }],
//   },
//   {
//     title: "Our Services",
//     links: [{ name: "Web Development" }, { name: "Web Design" }, { name: "Marketing" }],
//   },
// ]

// const FooterLogo = () => (
//   <a
//     href="/"
//     className="group relative inline-flex items-center rounded-xl bg-gradient-to-r from-teal-600 to-teal-800 p-2 sm:p-3 shadow-lg transition-all duration-300 hover:shadow-xl hover:from-teal-700 hover:to-teal-900"
//   >
//     <div className="flex items-center space-x-2 sm:space-x-3">
//       <div className="overflow-hidden rounded-full">
//         <img
//           src={Logo || "/placeholder.svg"}
//           alt="Chamber Of Learning Logo"
//           className="h-10 w-10 sm:h-14 sm:w-14 transform transition-transform duration-300 group-hover:scale-110"
//         />
//       </div>
//       <div className="border-l border-teal-400 pl-2 sm:pl-3">
//         <p className="text-sm sm:text-base font-bold text-white">Chamber Of Learning</p>
//         <p className="text-xs text-teal-200">Empowering Future</p>
//       </div>
//     </div>
//   </a>
// )

// const SocialLinks = ({ className = "" }) => (
//   <ul className={`flex flex-wrap justify-center gap-3 sm:gap-4 ${className}`}>
//     {socialLinks.map((link) => (
//       <li key={link.name} className="relative group">
//         <a
//           href={link.href}
//           rel="noreferrer"
//           target="_blank"
//           className="block w-10 h-10 sm:w-12 sm:h-12 overflow-hidden rounded-full bg-gradient-to-r from-teal-500 via-teal-900 to-teal-900 transition-transform duration-300 group-hover:scale-110"
//         >
//           <div className="absolute inset-0 z-10 flex items-center justify-center rounded-full bg-opacity-10 bg-gray-800 transition-transform duration-300 group-hover:scale-110">
//             <link.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white transform transition-transform duration-300 group-hover:scale-125" />
//           </div>
//         </a>
//         <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 scale-0 rounded-md bg-black px-2 py-1 text-xs text-white opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
//           {link.name}
//         </span>
//       </li>
//     ))}
//   </ul>
// )

// const FooterNavigation = () => (
//   <>
//     {navigationSections.map((section) => (
//       <div key={section.title} className="text-center lg:text-left">
//         <h3 className="text-base sm:text-lg font-bold text-gray-900 after:mt-2 after:block after:h-1 after:w-12 after:rounded-full after:bg-teal-600 after:mx-auto lg:after:mx-0">
//           {section.title}
//         </h3>
//         <ul className="mt-4 sm:mt-6 space-y-3 sm:space-y-4">
//           {section.links.map((link) => (
//             <li key={link.name}>
//               <a href="#" className="group inline-flex items-center text-sm sm:text-base text-gray-600">
//                 <span className="relative">
//                   {link.name}
//                   <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-teal-600 transition-all duration-300 group-hover:w-full"></span>
//                 </span>
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>
//     ))}
//   </>
// )

// const ContactInfo = () => {
//   const mapUrl = "https://www.google.com/maps?q=Olympia+Technology+Park+Guindy+Chennai"

//   return (
//     <div className="text-center lg:text-left">
//       <h3 className="text-base sm:text-lg font-bold text-gray-900 after:mt-2 after:block after:h-1 after:w-12 after:rounded-full after:bg-teal-600 after:mx-auto lg:after:mx-0">
//         Contact Us
//       </h3>
//       <ul className="mt-4 sm:mt-6 space-y-4 sm:space-y-6">
//         <li>
//           <a
//             href="mailto:enquire@chamberoflearning.com"
//             className="group inline-flex items-center gap-2 sm:gap-3 rounded-lg p-1.5 sm:p-2 transition-colors hover:bg-gray-100"
//           >
//             <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-teal-600" />
//             <span className="text-sm sm:text-base text-gray-600 transition-colors group-hover:text-teal-600">
//               enquire@chamberoflearning.com
//             </span>
//           </a>
//         </li>
//         <li>
//           <a
//             href="tel:+919445918818"
//             className="group inline-flex items-center gap-2 sm:gap-3 rounded-lg p-1.5 sm:p-2 transition-colors hover:bg-gray-100"
//           >
//             <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-teal-600" />
//             <span className="text-sm sm:text-base text-gray-600 transition-colors group-hover:text-teal-600">+91 944-591-8818</span>
//           </a>
//         </li>
//         <li>
//           <a
//             href={mapUrl}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="group inline-flex items-start gap-2 sm:gap-3 rounded-lg p-1.5 sm:p-2 transition-colors hover:bg-gray-100"
//           >
//             <MapPin className="mt-1 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-teal-600" />
//             <div className="flex flex-col items-start">
//               <address className="text-sm sm:text-base not-italic leading-relaxed text-gray-600 group-hover:text-teal-600">
//                 <strong className="font-semibold">PREFCOL EDUTECH SOLUTIONS (OPC) PRIVATE LIMITED</strong>
//                 <br />
//                 Olympia Technology Park, Level 5, Fortius Tower
//                 <br />
//                 Plot No.1, SIDCO Industrial Estate, Guindy
//                 <br />
//                 Chennai, Tamil Nadu, 600032, India
//               </address>
//               <span className="mt-1 sm:mt-2 inline-flex items-center gap-1 text-xs sm:text-sm text-teal-600">
//                 <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
//                 View on Maps
//               </span>
//             </div>
//           </a>
//         </li>
//       </ul>
//     </div>
//   )
// }

// const Footer = () => {
//   const currentYear = new Date().getFullYear()

//   return (
//     <footer className="relative border-t border-gray-100 bg-white">
//       {/* <div className="absolute inset-x-0 -top-8">
//         <div className="mx-auto h-6 sm:h-8 w-48 sm:w-64 rounded-t-full bg-gradient-to-r from-teal-200 to-teal-400"></div>
//       </div> */}

//       <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-3">
//           <div className="flex flex-col items-center space-y-6 sm:space-y-8 lg:items-start">
//             <FooterLogo />
//             <p className="max-w-xs text-center text-xs sm:text-sm leading-relaxed text-gray-600 lg:text-left">
//               Empowering individuals to rebuild their future through innovative learning solutions and comprehensive
//               career guidance.
//             </p>
//             <SocialLinks />
//           </div>
//           <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3">
//             <FooterNavigation />
//             <ContactInfo />
//           </div>
//         </div>

//         <div className="mt-8 sm:mt-12 border-t border-gray-100 pt-6 sm:pt-8">
//           <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
//             <p className="text-center text-xs sm:text-sm text-gray-500 lg:text-left">
//               &copy; {currentYear} Chamber of Learning. All rights reserved.
//             </p>
//             <div className="flex items-center space-x-3 sm:space-x-4 text-xs sm:text-sm">
//               <a href="#terms" className="group relative text-gray-500 transition-colors hover:text-teal-600">
//                 Terms & Conditions
//                 <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-teal-600 transition-all duration-300 group-hover:w-full"></span>
//               </a>
//               <span className="text-gray-300">•</span>
//               <a href="#privacy" className="group relative text-gray-500 transition-colors hover:text-teal-600">
//                 Privacy Policy
//                 <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-teal-600 transition-all duration-300 group-hover:w-full"></span>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   )
// }

// export default Footer