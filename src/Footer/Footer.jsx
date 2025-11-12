import React, { useState, useEffect } from "react" 

import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin, MessageCircle, ExternalLink, Home, Building2, ChevronUp } from "lucide-react" 
import Logo from "../assets/Prefcol.png"
import { Link } from 'react-router-dom';


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
    className="group relative inline-flex items-center rounded-xl bg-teal-900 p-2 sm:p-3 lg:mt-14 shadow-lg transition-all duration-300 hover:shadow-xl hover:from-teal-900 hover:to-teal-700"
  >
    <div className="flex items-center space-x-2 sm:space-x-3">
      <div className="overflow-hidden rounded-full">
        <img
          src={Logo || "/placeholder.svg"}
          alt="Prefcol Logo"
          className="h-10 w-10 sm:h-14 sm:w-14 bg-white transform transition-transform duration-300 group-hover:scale-110"
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
          className="block w-10 h-10 sm:w-12 sm:h-12 overflow-hidden rounded-full bg-teal-900 transition-transform duration-300 group-hover:scale-110"
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

// const ContactInfo = () => {
//   const mapUrl = "https://www.google.com/maps?q=Olympia+Technology+Park+Guindy+Chennai"

//   return (
//     <>
//       <h3 className="text-base  sm:text-lg font-bold text-gray-900 after:mt-2 after:block after:h-1 after:w-20 after:rounded-full after:bg-teal-600 after:mx-auto lg:after:mx-0">
//         Contact Us
//       </h3>
//     <div className="text-center lg:text-left flex flex-row flex-grow">
    
      
//       <ul className="mt-4 sm:mt-6 space-y-0 sm:space-y-0">
//         <li>
//           <a
//             href="mailto:info@prefcol.com"
//             className="group inline-flex items-center gap-2 sm:gap-3 rounded-lg p-1.5 sm:p-2 transition-colors "
//           >
//             <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-teal-600" />
//             <span className="text-sm sm:text-base text-gray-600 transition-colors group-hover:text-teal-600">
//               info@prefcol.com
//             </span>
//           </a>
//         </li>
//         <li>
//           <a
//             href="tel:+919445918818"
//             className="group inline-flex items-center gap-2 sm:gap-3 rounded-lg p-1.5 sm:p-2 transition-colors "
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
//             className="group inline-flex items-start gap-2 sm:gap-3 rounded-lg p-1.5 sm:p-2 transition-colors "
//           >
//             <MapPin className="mt-1 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-teal-600" />
//             <div className="">
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
//               <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
//               View on Maps
//               </span>
//             </div>
//           </a>
          
//         </li>

//       </ul>
      
//     </div></>
//   )
// }


// Scroll to Top Button Component 

const ScrollToTopButton = () => {
const [isVisible, setIsVisible] = useState(false); 
useEffect(() => { 
const toggleVisibility = () => { 
if (window.pageYOffset > 300) { 
setIsVisible(true); 
} else { 
setIsVisible(false); 
} 
}; 

 

window.addEventListener('scroll', toggleVisibility); 
return () => window.removeEventListener('scroll', toggleVisibility); 
}, []); 

 

const scrollToTop = () => { 
window.scrollTo({ 
top: 0, 
behavior: 'smooth' 
}); 
}; 

 

return ( 
<button 
onClick={scrollToTop} 
className={`fixed bottom-6 right-6 z-50 bg-teal-600 hover:bg-teal-700 text-white rounded-full p-3 shadow-lg transition-all duration-300 transform hover:scale-110 ${ 
isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none' 
}`} 
aria-label="Scroll to top" 
> 
<ChevronUp className="w-6 h-6" /> 
</button> 
); 
}; 
const ContactInfo = () => {
  const locations = [
    {
      type: "HEADQUARTERS",
      icon: Home,
      name: "PREFCOL EDUTECH SOLUTIONS (OPC) PRIVATE LIMITED",
      address: (
        <>
          Olympia Technology Park, Level 5, Fortius Tower
          <br />
          Plot No.1, SIDCO Industrial Estate, Guindy
          <br />
          Chennai, Tamil Nadu, 600032, India
        </>
      ),
      phone: "+91 944-591-8818",
      email: "info@prefcol.com",
      mapUrl: "https://www.google.com/maps?q=Olympia+Technology+Park+Guindy+Chennai",
    },
       {
      type: "BRANCH",
      icon: Building2,
      name: "PREFCOL EDUTECH SOLUTIONS (OPC) PRIVATE LIMITED",
      address: (
        <>
          No.479, Devanadha Swami Nagar, East Pondy Road
          <br />
          Villupuram, Tamil Nadu, 605602, India
        </>
      ),
      phone: "+91 863-742-0643",
      email: "info-vpm@prefcol.com",
      mapUrl: "https://www.google.com/maps?q=Villupuram+Tamil+Nadu",
    },
     {
      type: "BRANCH",
      icon: Building2,
      name: "PREFCOL EDUTECH SOLUTIONS (OPC) PRIVATE LIMITED",
      address: (
        <>
          No.9, Kanniyamman Kovil Street Main Road, Arcot Road, Koda Nagar, Cheyyar, Thiruvannamalai,
          <br />
            Tamil Nadu, 604407, India
          <br />
          Opposite to Arignar Anna Government Arts College
        </>
      ),
      phone: "+91 880-780-5818",
      email: "info-tvm@prefcol.com",
      mapUrl: "https://maps.app.goo.gl/e3RmQ62eQaPtB8ZC7",
    },

  ];

  return (
    <div className="w-full">
      {/* Section Title */}
      <h3 className="text-base sm:text-lg font-bold text-teal-800 mb-6 text-center">
        Our Geographic Presence
      </h3>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:m-0">
        {locations.map((loc, index) => (
          <div
            key={index}
            className="bg-white p-5 rounded-lg shadow-lg border border-teal-200 hover:shadow-xl transition-all duration-300 text-gray-800"
          >
            {/* Icon & Type */}
            <div className="flex items-center mb-4">
              <loc.icon className="h-10 w-10 text-teal-800 mr-3" />
              <div>
                <span className="text-sm font-bold uppercase tracking-wide text-teal-700">
                  {loc.type}
                </span>
              </div>
            </div>

            {/* Address */}
            <address className="text-sm not-italic leading-relaxed mb-4">
              <strong className="font-semibold">{loc.name}</strong>
              <br />
              {loc.address}
            </address>

            {/* Phone */}
            <a
              href={`tel:${loc.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2 text-teal-800 hover:text-teal-600 text-sm mb-3 transition-colors"
            >
              <Phone className="h-4 w-4" />
              {loc.phone}
            </a>

            {/* Email */}
            <a
              href={`mailto:${loc.email}`}
              className="flex items-center gap-2 text-teal-800 hover:text-teal-600 text-sm mb-4 transition-colors"
            >
              <Mail className="h-4 w-4" />
              {loc.email}
            </a>

            {/* Map Link */}
            <a
              href={loc.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs text-teal-600 hover:text-teal-800 transition-colors"
            >
              <MapPin className="h-3 w-3" />
              <ExternalLink className="h-3 w-3" />
              View on Maps
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};



// const Footer = () => {
//   const currentYear = new Date().getFullYear()

//   return (
//     <footer className="relative border-t border-gray-100 bg-white">
    
//       <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:px-4">
//         <div className="grid grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-2 justify-between">
//           <div className="flex flex-col items-center space-y-6 sm:space-y-8 lg:items-start">
//             <FooterLogo />
//             <p className="max-w-xs text-center text-xs sm:text-sm leading-relaxed text-gray-600 lg:text-left">
//               Empowering individuals to rebuild their future through innovative learning solutions and comprehensive
//               career guidance.
//             </p>
//             <SocialLinks />
//           </div>
//           <div className="grid grid-cols-1 gap-8 sm:grid-cols-1 lg:col-span-1 lg:grid-cols-1 ">
//             {/* <FooterNavigation /> */}
//             <ContactInfo />
//           </div>
//         </div>

//         <div className="mt-8 sm:mt-12 border-t border-gray-100 pt-6 sm:pt-8">
//           <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
//             <p className="text-center text-xs sm:text-sm text-gray-500 lg:text-left">
//               &copy; {currentYear} Prefcol Edutech Solutions Pvt. Ltd. All rights reserved.
//             </p>
          

// <div className="flex flex-wrap items-center space-x-3 sm:space-x-4 text-xs sm:text-sm">
//   <Link
//     to="/Privacy_Policy"
//     className="group relative text-gray-500 transition-colors hover:text-teal-600"
//   >
//     Privacy Policy
//     <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-teal-600 transition-all duration-300 group-hover:w-full"></span>
//   </Link>

//   <span className="text-gray-300">•</span>

//   <Link
//     to="/Cancellation_Refund_Policy"
//     className="group relative text-gray-500 transition-colors hover:text-teal-600"
//   >
//     Cancellation and Refund Policy
//     <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-teal-600 transition-all duration-300 group-hover:w-full"></span>
//   </Link>

//   <span className="text-gray-300">•</span>

//   <Link
//     to="/Shipping_Delivery_Policy"
//     className="group relative text-gray-500 transition-colors hover:text-teal-600"
//   >
//     Shipping and Delivery Policy
//     <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-teal-600 transition-all duration-300 group-hover:w-full"></span>
//   </Link>
// </div>


//           </div>
//         </div>
//       </div>
//     </footer>
//   )
// }

// export default Footer

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
        {/* ✅ Use 3fr / 7fr for balanced layout */}
        <div
          className="grid gap-0 sm:gap-2 lg:grid-cols-[3fr_7fr]"
          style={{ alignItems: "start" }}
        >
          {/* ✅ Left: Balanced width (not too small) */}
          <div className="flex flex-col items-center space-y-6 sm:space-y-8 lg:items-start text-center lg:text-left">
            <FooterLogo />
            <p className="text-xs sm:text-sm leading-relaxed text-gray-600 lg:pr-10">
              Empowering individuals to rebuild their future through innovative learning solutions and comprehensive career guidance.
            </p>
            <SocialLinks />
          </div>

          {/* ✅ Right: Takes larger portion */}
          <div>
            <ContactInfo />
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 sm:mt-12 border-t border-gray-100 pt-6 sm:pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-center text-xs sm:text-sm text-gray-500 lg:text-left">
              &copy; {currentYear} Prefcol Edutech Solutions Pvt. Ltd. All rights reserved.
            </p>

            <div className="flex flex-wrap items-center space-x-3 sm:space-x-4 text-xs sm:text-sm">
              <Link
                to="/Privacy_Policy"
                className="group relative text-gray-500 transition-colors hover:text-teal-600"
              >
                Privacy Policy
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-teal-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <span className="text-gray-300">•</span>
              <Link
                to="/Cancellation_Refund_Policy"
                className="group relative text-gray-500 transition-colors hover:text-teal-600"
              >
                Cancellation and Refund Policy
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-teal-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <span className="text-gray-300">•</span>
              <Link
                to="/Shipping_Delivery_Policy"
                className="group relative text-gray-500 transition-colors hover:text-teal-600"
              >
                Shipping and Delivery Policy
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-teal-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
               <ScrollToTopButton /> 
            </div>
          </div>
        </div>
      </div>
     
    </footer>
  );
};

export default Footer;





















































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
//             className="group inline-flex items-center gap-3 rounded-lg p-2 transition-colors "
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
//             className="group inline-flex items-center gap-3 rounded-lg p-2 transition-colors "
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
//             className="group inline-flex items-start gap-3 rounded-lg p-2 transition-colors "
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
//             className="group inline-flex items-center gap-2 sm:gap-3 rounded-lg p-1.5 sm:p-2 transition-colors "
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
//             className="group inline-flex items-center gap-2 sm:gap-3 rounded-lg p-1.5 sm:p-2 transition-colors "
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
//             className="group inline-flex items-start gap-2 sm:gap-3 rounded-lg p-1.5 sm:p-2 transition-colors "
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