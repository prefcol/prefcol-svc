
import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGlobe,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import Logo from "../assets/Prefcol.png";






const languages = [
  { code: "en", name: "English" },
  { code: "ta", name: "Tamil" },
  { code: "hi", name: "Hindi" },
  { code: "de", name: "German" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState("en");
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();
  const navbarRef = useRef();
  const dropdownRef = useRef();

  // Close the dropdown if clicked outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null); // Close dropdown if clicked outside
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setMenuOpen(false);
      setOpenDropdown(null);
    };
    handleRouteChange();
  }, []);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
    setOpenDropdown(null);
  };

  const handleLanguageChange = (langCode) => {
    setLanguage(langCode);
    console.log(`Language changed to ${langCode}`);
  };

  const toggleDropdown = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const navItems = [
    { to: "/", label: "Home" },
   
  ];

  return (
    <header
      ref={navbarRef}
      className="fixed w-full top-0 z-50 bg-white shadow-2xl rounded-b-2xl border-b-2 border-gray-200 "
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={Logo || "/placeholder.svg"}
              alt="Logo"
              className="h-10 w-auto rounded-full sm:h-12 md:h-14 transition-transform duration-300 transform hover:scale-105"
            />
            <p className=" font-bold text-xs sm:text-xs m-0 md:text-sm text-teal-900">Prefcol Edutech Solutions (OPC) Private Limited</p>
          </Link>

          {/* Desktop Navbar */}
          <div className="hidden lg:flex items-center space-x-4">
            {navItems.map((item) =>
              item.items ? (
                <div key={item.label} className="relative group">
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className={`flex items-center text-sm font-semibold px-6 py-2 rounded-full transition-all duration-300 ${
                      openDropdown === item.label
                        ? "bg-teal-900 text-white shadow-lg transform scale-105"
                        : "text-black hover:bg-teal-100 hover:text-black"
                    }`}
                    aria-haspopup="true"
                    aria-expanded={
                      openDropdown === item.label ? "true" : "false"
                    }
                  >
                    {item.label}
                    {openDropdown === item.label ? (
                      <FaChevronUp className="ml-1" />
                    ) : (
                      <FaChevronDown className="ml-1" />
                    )}
                  </button>
                  <AnimatePresence>
                    {openDropdown === item.label && (
                      <motion.div
                        ref={dropdownRef}
                        initial={{ opacity: 0, scaleY: 0.8 }}
                        animate={{ opacity: 1, scaleY: 1 }}
                        exit={{ opacity: 0, scaleY: 0.8 }}
                        transition={{
                          opacity: { duration: 0.3 },
                          scaleY: {
                            type: "spring",
                            stiffness: 300,
                            damping: 25,
                          },
                        }}
                        className="absolute left-0 mt-2 w-48 max-w-xs rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                      >
                        <div className="py-1">
                          {item.items.map((subItem) => (
                            <Link
                              key={subItem.to}
                              to={subItem.to}
                              className={`block px-6 py-2 text-sm text-gray-700 hover:bg-teal-100 hover:text-teal-900 transition-colors duration-300 ${
                                location.pathname === subItem.to
                                  ? "bg-teal-900 text-white"
                                  : ""
                              }`}
                              onClick={() => setOpenDropdown(null)}
                              aria-label={subItem.label}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`text-sm font-semibold px-6 py-2 rounded-full transition-all duration-300 ${
                    location.pathname === item.to
                      ? "bg-teal-900 text-white shadow-lg transform scale-105"
                      : "text-black hover:bg-teal-100 hover:text-black"
                  }`}
                  aria-label={item.label}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          {/* /* Language Selector and Sign In/Up Form */}
          <div className="flex items-center space-x-2 md:space-x-4">
            {/* <div className="hidden lg:block">
              <select
                value={language}
                onChange={(e) => handleLanguageChange(e.target.value)}
                className="bg-white text-gray-700 rounded-full px-3 py-1 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-sm transition-colors duration-200 hover:bg-orange-50"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.name}
                  </option>
                ))}
              </select>
            </div> */}
            {/* <SignInUpForm /> */}
          
            <button
              onClick={handleMenuToggle}
              className="lg:hidden p-2 rounded-full text-black hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{
              type: "spring",
              damping: 20,
              stiffness: 300,
              opacity: { duration: 0.3 },
            }}
            className="fixed inset-0 z-40 bg-black bg-opacity-40"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black bg-opacity-40 z-30"
              onClick={handleMenuToggle}
            />
            {/* Menu Container */}
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{
                type: "spring",
                damping: 20,
                stiffness: 300,
                opacity: { duration: 0.3 },
              }}
              className="fixed inset-y-0 right-0 w-full sm:w-64 bg-white shadow-lg overflow-y-auto z-40"
            >
              <div className="flex justify-end p-4">
                <button
                  onClick={handleMenuToggle}
                  className="p-2 rounded-full text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  <FaTimes size={24} />
                </button>
              </div>
              <div className="flex-grow px-4 py-2 space-y-4">
                {navItems.map((item) => (
                  <div key={item.label}>
                    {item.items ? (
                      <div>
                        <button
                          onClick={() => toggleDropdown(item.label)}
                          className="flex items-center justify-between w-full text-left py-2 text-gray-700 hover:text-teal-600 transition-colors duration-300 text-sm font-medium"
                        >
                          {item.label}
                          {openDropdown === item.label ? (
                            <FaChevronUp />
                          ) : (
                            <FaChevronDown />
                          )}
                        </button>
                        <AnimatePresence>
                          {openDropdown === item.label && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="ml-4 mt-2 space-y-2"
                            >
                              {item.items.map((subItem) => (
                                <Link
                                  key={subItem.to}
                                  to={subItem.to}
                                  className="block py-2 text-gray-600 hover:text-teal-600 transition-colors duration-300 text-sm"
                                  onClick={() => {
                                    setOpenDropdown(null);
                                    setMenuOpen(false);
                                  }}
                                >
                                  {subItem.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={item.to}
                        className={`block py-2 text-sm font-medium transition-colors duration-300 ${
                          location.pathname === item.to
                            ? "text-black"
                            : "text-gray-700 hover:text-teal-600"
                        }`}
                        onClick={() => setMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
