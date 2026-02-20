// import React, { useState, useEffect } from 'react';
// import { Moon, Sun, BarChart, Target, ArrowLeftRight, Laptop, ChevronRight } from 'lucide-react';

// import CareerHero from '../assets/CareerHero.png'
// const EnhancedCareerGuidance = () => {
//   const [darkMode, setDarkMode] = useState(false);

//   useEffect(() => {
//     const isDarkMode = localStorage.getItem('darkMode') === 'true';
//     setDarkMode(isDarkMode);
//   }, []);

//   useEffect(() => {
//     document.documentElement.classList.toggle('dark', darkMode);
//     localStorage.setItem('darkMode', darkMode.toString());
//   }, [darkMode]);

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//   };

//   return (
//     <div
//       className={`min-h-screen  p-8 transition-colors duration-300 `}
//     >
//       <div className="max-w-6xl mx-auto">
//         <h1 className="text-4xl font-bold mb-12 text-center">Career Path Guidance</h1>

//         <div className="flex flex-col md:flex-row gap-8 mb-12">
        
//           <div className="flex-1 grid grid-cols-1  md:grid-cols-2 gap-8">
//             <EnhancedCard
//               icon={<BarChart className="w-8 h-8" />}
//               title="IT Employed"
//               description="Advance your skills to close talent gaps and switch careers."
//             />
//             <EnhancedCard
//               icon={<Target className="w-8 h-8" />}
//               title="Fresh Graduates"
//               description="Get your hands-on in real-time projects and start your IT career."
//             />
//             <EnhancedCard
//               icon={<ArrowLeftRight className="w-8 h-8" />}
//               title="Return from Work Break"
//               description="Re-skill yourself to stay ahead of competitions and in trend."
//             />
//             <EnhancedCard
//               icon={<Laptop className="w-8 h-8" />}
//               title="Non IT to IT"
//               description="Learn, Get Certified with new demanding skills and Switch."
//             />
//           </div>

//           <div className="flex-1 space-y-6  p-8 rounded-lg transition-colors duration-300 relative">
//   {/* Help Hero Image */}
//   <img 
//     className="absolute inset-0 w-full h-full object-cover opacity-30 rounded-lg z-0"
//     src={CareerHero} 
//     alt="" 
//   />

//   {/* Content */}
//   <div className="relative z-10">
//     <h2 className="text-3xl md:text-4xl font-semibold text-center mb-6">
//       How it helps?
//     </h2>
//     <p className="text-sm md:text-base leading-relaxed">
//       Early in your career, it is essential to chase skills rather than salary. At Chamber Of Learning, we provide practical experiences through visualized learning, hands-on projects, fostering a growth mindset, and nurturing problem-solving skills.
//     </p>
//     <p className="text-sm md:text-base leading-relaxed">
//       Later in your career, Chamber Of Learning helps you align your passions with your work. We empower you with vertical and horizontal skills to stay ahead in knowledge and finances. We work with you to grow your brand and network for ongoing success.
//     </p>
//   </div>
// </div>

//         </div>
//       </div>

//       {/* <button
//         onClick={toggleDarkMode}
//         className="fixed bottom-4 right-4 p-3 rounded-full bg-white  text-gray-800 dark:text-gray-200 transition-colors duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500 "
//         aria-label="Toggle dark mode"
//       >
//         {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
//       </button> */}
//     </div>
//   );
// };

// const EnhancedCard = ({ icon, title, description }) => {
//   return (
//     <div className="bg-white  rounded-ss-3xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl group">
//       <div className="p-6">
//         <div className="flex items-center mb-4">
//           <div className="p-3 rounded-full bg-gray-200  text-gray-700  mr-4 transition-colors duration-300">
//             {icon}
//           </div>
//           <h3 className="text-xl font-semibold group-hover:text-teal-600 transition-colors duration-300">{title}</h3>
//         </div>
//         <p className="text-gray-600  mb-4 transition-colors duration-300">{description}</p>
//         <div className="flex items-center text-teal-600 group-hover:translate-x-2 transition-all duration-300">
//           <span className="mr-2 font-medium">Learn More</span>
//           <ChevronRight className="w-5 h-5" />
//         </div>
//       </div>
//       <div className="h-1 w-full bg-teal-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left"></div>
//     </div>
//   );
// };

// export default EnhancedCareerGuidance;



// import React, { useState, useEffect } from 'react';
// import { Moon, Sun, BarChart, Target, ArrowLeftRight, Laptop, ChevronRight } from 'lucide-react';
// import CareerHero from '../assets/CareerHero.png';

// const EnhancedCareerGuidance = () => {
//   const [darkMode, setDarkMode] = useState(false);

//   useEffect(() => {
//     const isDarkMode = localStorage.getItem('darkMode') === 'true';
//     setDarkMode(isDarkMode);
//   }, []);

//   useEffect(() => {
//     document.documentElement.classList.toggle('dark', darkMode);
//     localStorage.setItem('darkMode', darkMode.toString());
//   }, [darkMode]);

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//   };

//   return (
//     <div className={`min-h-screen p-4 sm:p-6 md:p-8 transition-colors duration-300`}>
//       <div className="max-w-6xl mx-auto">
//         <h1 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center">Career Path Guidance</h1>

//         <div className="flex flex-col lg:flex-row gap-8 mb-12">
//           <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
//             <EnhancedCard
//               icon={<BarChart className="w-6 h-6 sm:w-8 sm:h-8" />}
//               title="IT Employed"
//               description="Advance your skills to close talent gaps and switch careers."
//             />
//             <EnhancedCard
//               icon={<Target className="w-6 h-6 sm:w-8 sm:h-8" />}
//               title="Fresh Graduates"
//               description="Get your hands-on in real-time projects and start your IT career."
//             />
//             <EnhancedCard
//               icon={<ArrowLeftRight className="w-6 h-6 sm:w-8 sm:h-8" />}
//               title="Return from Work Break"
//               description="Re-skill yourself to stay ahead of competitions and in trend."
//             />
//             <EnhancedCard
//               icon={<Laptop className="w-6 h-6 sm:w-8 sm:h-8" />}
//               title="Non IT to IT"
//               description="Learn, Get Certified with new demanding skills and Switch."
//             />
//           </div>

//           <div className="flex-1 space-y-4 sm:space-y-6 p-4 sm:p-6 md:p-8 rounded-lg transition-colors duration-300 relative">
//             <img 
//               className="absolute inset-0 w-full h-full object-cover opacity-30 rounded-lg z-0"
//               src={CareerHero} 
//               alt="Career Hero Background" 
//             />

//             <div className="relative z-10">
//               <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-4 sm:mb-6">
//                 How it helps?
//               </h2>
//               <p className="text-sm sm:text-base leading-relaxed mb-4">
//                 Early in your career, it is essential to chase skills rather than salary. At Chamber Of Learning, we provide practical experiences through visualized learning, hands-on projects, fostering a growth mindset, and nurturing problem-solving skills.
//               </p>
//               <p className="text-sm sm:text-base leading-relaxed">
//                 Later in your career, Chamber Of Learning helps you align your passions with your work. We empower you with vertical and horizontal skills to stay ahead in knowledge and finances. We work with you to grow your brand and network for ongoing success.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Uncomment if you want to use the dark mode toggle
//       <button
//         onClick={toggleDarkMode}
//         className="fixed bottom-4 right-4 p-3 rounded-full bg-white text-gray-800 dark:text-gray-200 transition-colors duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500"
//         aria-label="Toggle dark mode"
//       >
//         {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
//       </button>
//       */}
//     </div>
//   );
// };

// const EnhancedCard = ({ icon, title, description }) => {
//   return (
//     <div className="bg-white rounded-ss-3xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl group">
//       <div className="p-4 sm:p-6">
//         <div className="flex items-center mb-3 sm:mb-4">
//           <div className="p-2 sm:p-3 rounded-full bg-gray-200 text-gray-700 mr-3 sm:mr-4 transition-colors duration-300">
//             {icon}
//           </div>
//           <h3 className="text-lg sm:text-xl font-semibold group-hover:text-teal-600 transition-colors duration-300">{title}</h3>
//         </div>
//         <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 transition-colors duration-300">{description}</p>
//         <div className="flex items-center text-teal-600 group-hover:translate-x-2 transition-all duration-300">
//           <span className="text-sm sm:text-base mr-2 font-medium">Learn More</span>
//           <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
//         </div>
//       </div>
//       <div className="h-1 w-full bg-teal-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left"></div>
//     </div>
//   );
// };

// export default EnhancedCareerGuidance;



// import React, { useState, useEffect } from 'react';
// import { Moon, Sun, BarChart, Target, ArrowLeftRight, Laptop, ChevronRight } from 'lucide-react';
// import CareerHero from '../assets/CareerHero.png';

// const EnhancedCareerGuidance = () => {
//   const [darkMode, setDarkMode] = useState(false);

//   useEffect(() => {
//     const isDarkMode = localStorage.getItem('darkMode') === 'true';
//     setDarkMode(isDarkMode);
//   }, []);

//   useEffect(() => {
//     document.documentElement.classList.toggle('dark', darkMode);
//     localStorage.setItem('darkMode', darkMode.toString());
//   }, [darkMode]);

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//   };

//   return (
//     <div className={`min-h-screen p-4 sm:p-6 md:p-8 transition-colors duration-300`}>
//       <div className="max-w-6xl mx-auto">
//         <h1 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center">Career Path Guidance</h1>

//         <div className="flex flex-col lg:flex-row gap-8 mb-12">
//           <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
//             <EnhancedCard
//               icon={<BarChart className="w-6 h-6 sm:w-8 sm:h-8" />}
//               title="IT Employed"
//               description="Advance your skills to close talent gaps and switch careers."
//             />
//             <EnhancedCard
//               icon={<Target className="w-6 h-6 sm:w-8 sm:h-8" />}
//               title="Fresh Graduates"
//               description="Get your hands-on in real-time projects and start your IT career."
//             />
//             <EnhancedCard
//               icon={<ArrowLeftRight className="w-6 h-6 sm:w-8 sm:h-8" />}
//               title="Return from Work Break"
//               description="Re-skill yourself to stay ahead of competitions and in trend."
//             />
//             <EnhancedCard
//               icon={<Laptop className="w-6 h-6 sm:w-8 sm:h-8" />}
//               title="Non IT to IT"
//               description="Learn, Get Certified with new demanding skills and Switch."
//             />
//           </div>

//           <div className="flex-1 relative overflow-hidden rounded-lg shadow-lg">
//             <img 
//               className="absolute inset-0 w-full h-full object-cover object-center"
//               src={CareerHero} 
//               alt="Career Hero Background" 
//             />
//             <div className="relative z-10 p-6 sm:p-8 md:p-10 bg-white bg-opacity-90 dark:bg-gray-800 dark:bg-opacity-90">
//               <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-4 sm:mb-6">
//                 How it helps?
//               </h2>
//               <div className="space-y-4 text-sm sm:text-base">
//                 <p className="leading-relaxed">
//                   Early in your career, it is essential to chase skills rather than salary. At Chamber Of Learning, we provide practical experiences through visualized learning, hands-on projects, fostering a growth mindset, and nurturing problem-solving skills.
//                 </p>
//                 <p className="leading-relaxed">
//                   Later in your career, Chamber Of Learning helps you align your passions with your work. We empower you with vertical and horizontal skills to stay ahead in knowledge and finances. We work with you to grow your brand and network for ongoing success.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Uncomment if you want to use the dark mode toggle
//       <button
//         onClick={toggleDarkMode}
//         className="fixed bottom-4 right-4 p-3 rounded-full bg-white text-gray-800 dark:text-gray-200 transition-colors duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500"
//         aria-label="Toggle dark mode"
//       >
//         {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
//       </button>
//       */}
//     </div>
//   );
// };

// const EnhancedCard = ({ icon, title, description }) => {
//   return (
//     <div className="bg-white dark:bg-gray-800 rounded-ss-3xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl group">
//       <div className="p-4 sm:p-6">
//         <div className="flex items-center mb-3 sm:mb-4">
//           <div className="p-2 sm:p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 mr-3 sm:mr-4 transition-colors duration-300">
//             {icon}
//           </div>
//           <h3 className="text-lg sm:text-xl font-semibold group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300">{title}</h3>
//         </div>
//         <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 transition-colors duration-300">{description}</p>
//         <div className="flex items-center text-teal-600 dark:text-teal-400 group-hover:translate-x-2 transition-all duration-300">
//           <span className="text-sm sm:text-base mr-2 font-medium">Learn More</span>
//           <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
//         </div>
//       </div>
//       <div className="h-1 w-full bg-teal-600 dark:bg-teal-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left"></div>
//     </div>
//   );
// };

// export default EnhancedCareerGuidance;



// import React from 'react';
// import { BarChart, Target, ArrowLeftRight, Laptop, ChevronRight } from 'lucide-react';
// import CareerHero from '../assets/CareerHero.png';

// const EnhancedCareerGuidance = () => {
//   return (
//     <div className="min-h-screen p-4 sm:p-6 md:p-8">
//       <div className="max-w-6xl mx-auto">
//         <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center">Career Path Guidance</h1>

//         <div className="flex flex-col lg:flex-row gap-8 mb-12">
//           <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
//             <EnhancedCard
//               icon={<BarChart className="w-6 h-6 sm:w-8 sm:h-8" />}
//               title="IT Employed"
//               description="Advance your skills to close talent gaps and switch careers."
//             />
//             <EnhancedCard
//               icon={<Target className="w-6 h-6 sm:w-8 sm:h-8" />}
//               title="Fresh Graduates"
//               description="Get your hands-on in real-time projects and start your IT career."
//             />
//             <EnhancedCard
//               icon={<ArrowLeftRight className="w-6 h-6 sm:w-8 sm:h-8" />}
//               title="Return from Work Break"
//               description="Re-skill yourself to stay ahead of competitions and in trend."
//             />
//             <EnhancedCard
//               icon={<Laptop className="w-6 h-6 sm:w-8 sm:h-8" />}
//               title="Non IT to IT"
//               description="Learn, Get Certified with new demanding skills and Switch."
//             />
//           </div>

//           <div className="flex-1 relative overflow-hidden rounded-lg shadow-lg">
//             <img 
//               className="absolute inset-0 w-full h-full object-cover object-center"
//               src={CareerHero} 
//               alt="Career Hero Background" 
//             />
//             <div className="relative z-10 p-6 sm:p-8 md:p-10 bg-white bg-opacity-90">
//               <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-4 sm:mb-6">
//                 How it helps?
//               </h2>
//               <div className="space-y-4 text-sm sm:text-base">
//                 <p className="leading-relaxed">
//                   Early in your career, it is essential to chase skills rather than salary. At Chamber Of Learning, we provide practical experiences through visualized learning, hands-on projects, fostering a growth mindset, and nurturing problem-solving skills.
//                 </p>
//                 <p className="leading-relaxed">
//                   Later in your career, Chamber Of Learning helps you align your passions with your work. We empower you with vertical and horizontal skills to stay ahead in knowledge and finances. We work with you to grow your brand and network for ongoing success.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const EnhancedCard = ({ icon, title, description }) => {
//   return (
//     <div className="bg-white rounded-ss-3xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl group">
//       <div className="p-4 sm:p-6">
//         <div className="flex items-center mb-3 sm:mb-4">
//           <div className="p-2 sm:p-3 rounded-full bg-gray-200 text-gray-700 mr-3 sm:mr-4 transition-colors duration-300">
//             {icon}
//           </div>
//           <h3 className="text-lg sm:text-xl font-semibold group-hover:text-teal-600 transition-colors duration-300">{title}</h3>
//         </div>
//         <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 transition-colors duration-300">{description}</p>
//         <div className="flex items-center text-teal-600 group-hover:translate-x-2 transition-all duration-300">
//           <span className="text-sm sm:text-base mr-2 font-medium">Learn More</span>
//           <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
//         </div>
//       </div>
//       <div className="h-1 w-full bg-teal-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left"></div>
//     </div>
//   );
// };

// export default EnhancedCareerGuidance;


// import React from 'react';
// import { BarChart, Target, ArrowLeftRight, Laptop, ChevronRight } from 'lucide-react';
// import CareerHero from '../assets/CareerHero.png';

// const EnhancedCareerGuidance = () => {
//   return (
//     <div className="max-h-screen p-0 sm:p-1 md:p-2 m-0" >
//       <div className="max-w-6xl mx-auto">
//         <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-8 text-center">Career Path Guidance</h1>

//         <div className="flex flex-col lg:flex-row gap-8 mb-12">
//           <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
//             <EnhancedCard
//               icon={<BarChart className="w-6 h-6 sm:w-8 sm:h-8" />}
//               title="IT Employed"
//               description="Advance your skills to close talent gaps and switch careers."
//             />
//             <EnhancedCard
//               icon={<Target className="w-6 h-6 sm:w-8 sm:h-8" />}
//               title="Fresh Graduates"
//               description="Get your hands-on in real-time projects and start your IT career."
//             />
//             <EnhancedCard
//               icon={<ArrowLeftRight className="w-6 h-6 sm:w-8 sm:h-8" />}
//               title="Return from Work Break"
//               description="Re-skill yourself to stay ahead of competitions and in trend."
//             />
//             <EnhancedCard
//               icon={<Laptop className="w-6 h-6 sm:w-8 sm:h-8" />}
//               title="Non IT to IT"
//               description="Learn, Get Certified with new demanding skills and Switch."
//             />
//           </div>

//           <div className="flex-1 relative overflow-hidden rounded-lg shadow-lg">
//             <img 
//               className="absolute inset-0 w-full h-full object-cover object-center"
//               src={CareerHero} 
//               alt="Career Hero Background" 
//             />
//             <div className="relative z-10 p-6 sm:p-8 md:p-10 bg-white bg-opacity-90">
//               <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-4 sm:mb-6">
//                 How it helps?
//               </h2>
//               <div className="space-y-4 text-sm sm:text-base">
//                 <p className="leading-relaxed">
//                   Early in your career, it is essential to chase skills rather than salary. At Chamber Of Learning, we provide practical experiences through visualized learning, hands-on projects, fostering a growth mindset, and nurturing problem-solving skills.
//                 </p>
//                 <p className="leading-relaxed">
//                   Later in your career, Chamber Of Learning helps you align your passions with your work. We empower you with vertical and horizontal skills to stay ahead in knowledge and finances. We work with you to grow your brand and network for ongoing success.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const EnhancedCard = ({ icon, title, description }) => {
//   return (
//     <div className="bg-white rounded-ss-3xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl group">
//       <div className="p-4 sm:p-6">
//         <div className="flex items-center mb-3 sm:mb-4">
//           <div className="p-2 sm:p-3 rounded-full bg-gray-200 text-gray-700 mr-3 sm:mr-4 transition-colors duration-300">
//             {icon}
//           </div>
//           <h3 className="text-lg sm:text-xl font-semibold group-hover:text-teal-600 transition-colors duration-300">{title}</h3>
//         </div>
//         <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 transition-colors duration-300">{description}</p>
//         <div className="flex items-center text-teal-600 group-hover:translate-x-2 transition-all duration-300">
//           <span className="text-sm sm:text-base mr-2 font-medium">Learn More</span>
//           <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
//         </div>
//       </div>
//       <div className="h-1 w-full bg-teal-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left"></div>
//     </div>
//   );
// };

// export default EnhancedCareerGuidance;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BarChart, Target, ArrowLeftRight, Laptop, ChevronRight } from 'lucide-react';
import CareerHero from '../assets/CareerHero.png';

const EnhancedCareerGuidance = () => {
  return (
    <div className="max-h-screen p-0 sm:p-1 md:p-2 m-0" >
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-8 text-center">Career Path Guidance</h1>

        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            <Link to="/it-courses" className="block h-full">
              <EnhancedCard
                icon={<BarChart className="w-6 h-6 sm:w-8 sm:h-8" />}
                title="IT Employed"
                description="Advance your skills to close talent gaps and switch careers."
              />
            </Link>
            <EnhancedCard
              icon={<Target className="w-6 h-6 sm:w-8 sm:h-8" />}
              title="Fresh Graduates"
              description="Get your hands-on in real-time projects and start your IT career."
              menuOptions={[
                { label: 'IT', to: '/it-courses' },
                { label: 'NON IT', to: '/Non_it-courses' },
              ]}
            />
            <EnhancedCard
              icon={<ArrowLeftRight className="w-6 h-6 sm:w-8 sm:h-8" />}
              title="Return from Work Break"
              description="Re-skill yourself to stay ahead of competitions and in trend."
              menuOptions={[
                { label: 'IT', to: '/it-courses' },
                { label: 'NON IT', to: '/Non_it-courses' },
              ]}
            />
            <Link to="/Non_it-courses" className="block h-full">
              <EnhancedCard
                icon={<Laptop className="w-6 h-6 sm:w-8 sm:h-8" />}
                title="Non IT to IT"
                description="Learn, Get Certified with new demanding skills and Switch."
              />
            </Link>
          </div>

          <div className="flex-1 relative overflow-hidden rounded-lg shadow-lg">
            <img 
              className="absolute inset-0 w-full h-full object-cover object-center"
              src={CareerHero} 
              alt="Career Hero Background" 
            />
            <div className="relative z-10 p-6 sm:p-8 md:p-10 bg-white bg-opacity-90">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-4 sm:mb-6">
                How it helps?
              </h2>
              <div className="space-y-4 text-sm sm:text-base">
                <p className="leading-relaxed">
                  Early in your career, it is essential to chase skills rather than salary. At Prefcol Edutech Solutions, we provide practical experiences through visualized learning, hands-on projects, fostering a growth mindset, and nurturing problem-solving skills.
                </p>
                <p className="leading-relaxed">
                  Later in your career, Prefcol Edutech Solutions helps you align your passions with your work. We empower you with vertical and horizontal skills to stay ahead in knowledge and finances. We work with you to grow your brand and network for ongoing success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const EnhancedCard = ({ icon, title, description, menuOptions }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const iconWrapper = menuOptions ? (
    <div className="relative z-[5]">
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setMenuOpen((prev) => !prev);
        }}
        className="p-2 sm:p-3 rounded-full bg-orange-500 text-white mr-3 sm:mr-4 transition-colors duration-300 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 cursor-pointer"
        aria-expanded={menuOpen}
        aria-haspopup="true"
      >
        {icon}
      </button>
      {menuOpen && (
        <>
          <div
            className="fixed inset-0 z-[100]"
            aria-hidden="true"
            onClick={() => setMenuOpen(false)}
          />
          <div className="absolute left-0 top-full mt-1 z-[101] min-w-[120px] py-1 bg-white rounded-lg shadow-lg border border-gray-200">
            {menuOptions.map((opt) => (
              <Link
                key={opt.to}
                to={opt.to}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700"
                onClick={() => setMenuOpen(false)}
              >
                {opt.label}
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  ) : (
    <div className="p-2 sm:p-3 rounded-full bg-gray-200 text-gray-700 mr-3 sm:mr-4 transition-colors duration-300">
      {icon}
    </div>
  );

  return (
    <div
      className="bg-white rounded-ss-3xl shadow-lg overflow-visible transition-all duration-300 hover:shadow-xl group h-full cursor-pointer"
      onClick={menuOptions ? () => setMenuOpen((prev) => !prev) : undefined}
      role={menuOptions ? 'button' : undefined}
    >
      <div className="p-4 sm:p-6">
        <div className="flex items-center mb-3 sm:mb-4">
          {iconWrapper}
          <h3 className="text-lg sm:text-xl font-semibold group-hover:text-teal-600 transition-colors duration-300">{title}</h3>
        </div>
        <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 transition-colors duration-300">{description}</p>
        <div className="flex items-center text-orange-600 group-hover:translate-x-2 transition-all duration-300">
          <span className="text-sm sm:text-base mr-2 font-medium">Learn More</span>
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </div>
      </div>
      <div className="h-1 w-full bg-teal-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left"></div>
    </div>
  );
};

export default EnhancedCareerGuidance;

