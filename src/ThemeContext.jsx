// // src/ThemeContext.js
// import React, { createContext, useContext, useState } from 'react';

// // Create a Context for the theme
// const ThemeContext = createContext();

// // Create a Provider component
// export const ThemeProvider = ({ children }) => {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const toggleTheme = () => {
//     setIsDarkMode((prev) => !prev);
//   };

//   return (
//     <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// // Create a custom hook to use the theme context
// export const useTheme = () => {
//   return useContext(ThemeContext);
// };
