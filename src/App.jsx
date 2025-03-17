import { ThemeProvider, createTheme } from "@mui/material/styles";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Lenis from "@studio-freight/lenis";
import HomePage from "./Home/Home";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";





const FuturisticSpinner = () => (
  <div className="futuristic-spinner">
    <div className="spinner-ring"></div>
    <div className="spinner-core"></div>
    <div className="spinner-particle particle1"></div>
    <div className="spinner-particle particle2"></div>
    <div className="spinner-particle particle3"></div>
  </div>
);

const SmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0,
      easing: (t) => t,
      smooth: true,
      direction: "vertical",
      gesture: false,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
};

const theme = createTheme();

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [location]);

  return null;
};

const AppContent = ({ isDarkMode, onThemeToggle }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(timer);
  }, []);






  return (
    <>
    
      {loading && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-teal-50 z-50 transition-opacity duration-500"
          style={{
            opacity: loading ? 1 : 0,
            visibility: loading ? "visible" : "hidden",
          }}
        >
          <FuturisticSpinner />
        </div>
      )}

      <div
        className={`relative transition-opacity duration-700 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
      >
        <Navbar onThemeToggle={onThemeToggle} />
        <Routes>
          <Route path="/" element={<HomePage isDarkMode={isDarkMode} />} />
        </Routes>
        <Footer />
      </div>
     
    </>
  );
};

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleThemeToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ChakraProvider>
      <Router>
        <SmoothScroll />
        <ScrollToTop /> 
        <AppContent isDarkMode={isDarkMode} onThemeToggle={handleThemeToggle} />
      </Router>
    </ChakraProvider>
  );
}
