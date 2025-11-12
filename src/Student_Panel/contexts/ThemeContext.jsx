// "use client"

// import { createContext, useContext, useState, useEffect } from "react"

// const ThemeContext = createContext()

// export const useTheme = () => useContext(ThemeContext)

// export const ThemeProvider = ({ children, initialTheme = "light", onToggle }) => {
//   const [theme, setTheme] = useState(initialTheme)

//   useEffect(() => {
//     // Load theme from localStorage if available
//     const savedTheme = localStorage.getItem("theme")
//     if (savedTheme) {
//       setTheme(savedTheme)
//     }
//   }, [])

//   const toggleTheme = () => {
//     const newTheme = theme === "light" ? "dark" : "light"
//     setTheme(newTheme)
//     localStorage.setItem("theme", newTheme)

//     // Call the parent toggle function if provided
//     if (onToggle) {
//       onToggle()
//     }
//   }

//   return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
// }

"use client"

import { createContext, useContext, useState } from "react"

const ThemeContext = createContext()

export const useTheme = () => {
  return useContext(ThemeContext)
}

export const ThemeProvider = ({ children, value }) => {
  const [theme, setTheme] = useState(value?.theme || "light")

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
  }

  const contextValue = value || { theme, toggleTheme }

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>
}

