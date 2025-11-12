
import React from 'react';
import TypingText from "./Animatetext"
import { Button, Text } from "@chakra-ui/react";
const TealGassyBox = ({
  children,
  videoSrc,
  imageSrc,
  className = "",
  width = "100%",
  minHeight = "50vh",
  position = "relative",
  top = "60px",
  left = "0",
  right = "0",
  bottom = "0",
  marginBottom = "30px",
}) => {
  return (
    <div 
      className={`relative overflow-hidden group cursor-pointer ${className}`}
      style={{ width, minHeight, position, top, left, right, bottom, marginBottom }}
    >
      {/* Background Video/Image */}
      {videoSrc && (
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
        />
      )}
      
      {imageSrc && !videoSrc && (
        <img
          className="absolute inset-0 w-full h-full object-cover z-0"
          src={imageSrc}
          alt="Background"
        />
      )}

      {/* Very Dark Teal Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-dark-teal-950 to-slate-950 z-[5] animate-dark-liquid-flow" />
      
      <div className="absolute inset-0 bg-gradient-to-tr from-dark-teal-950/90 via-transparent to-slate-950/80 z-[6] animate-dark-counter-flow" />

      {/* Bright White Pattern Overlay */}
      <div 
        className="absolute inset-0 z-[7] animate-bright-pattern-drift"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.8) 1px, transparent 2px),
            radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.6) 0.5px, transparent 1px),
            radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.9) 1.5px, transparent 1.5px)
          `,
          backgroundSize: '80px 80px, 50px 50px, 100px 100px'
        }} 
      />

      {/* Main Dark Glass Container */}
      <div 
        className="absolute inset-4 z-20 backdrop-blur-xl border-2 border-white/40 shadow-2xl
                   transform transition-all duration-500 ease-out
                   group-hover:scale-[1.02] group-hover:rotate-1 animate-dark-container-breathe"
        style={{
          borderRadius: '24px',
          background: `
            linear-gradient(145deg, 
              rgba(4, 47, 46, 0.85) 0%, 
              rgba(15, 23, 42, 0.75) 30%,
              rgba(6, 78, 59, 0.80) 60%,
              rgba(4, 47, 46, 0.85) 100%
            )
          `,
          boxShadow: `
            0 25px 50px -12px rgba(0, 0, 0, 0.9),
            0 0 0 1px rgba(255, 255, 255, 0.3),
            inset 0 2px 4px rgba(255, 255, 255, 0.2),
            inset 0 -2px 4px rgba(0, 0, 0, 0.5)
          `
        }}
      >
        {/* Bright White Particle System */}
        <div className="absolute top-8 left-8 w-4 h-4 bg-white rounded-full shadow-lg shadow-white/50 animate-bright-particle-float-1" />
        <div className="absolute top-16 right-12 w-3 h-3 bg-white/90 rounded-full shadow-md shadow-white/40 animate-bright-particle-float-2" />
        <div className="absolute bottom-12 left-12 w-5 h-5 bg-white/95 rounded-full shadow-xl shadow-white/60 animate-bright-particle-float-3" />
        <div className="absolute bottom-20 right-8 w-3.5 h-3.5 bg-white/85 rounded-full shadow-lg shadow-white/45 animate-bright-particle-float-4" />
        <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-white rounded-full shadow-md shadow-white/50 animate-bright-particle-float-5" />
        <div className="absolute top-2/3 right-1/3 w-4.5 h-4.5 bg-white/80 rounded-full shadow-lg shadow-white/40 animate-bright-particle-float-6" />

        {/* Bright White Geometric Elements */}
        <div 
          className="absolute top-6 right-6 w-14 h-14 border-4 border-white/80 rotate-45 shadow-lg shadow-white/30 animate-bright-geometric-spin" 
          style={{ borderRadius: '20%' }}
        />
        
        <div 
          className="absolute bottom-8 left-8 w-10 h-10 border-2 border-white/70 shadow-md shadow-white/40 animate-bright-triangle-pulse"
          style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
        />

        {/* Bright White Flowing Lines */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/80 to-transparent shadow-sm shadow-white/30 animate-bright-line-flow-1" />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-white/60 to-transparent shadow-sm shadow-white/20 animate-bright-line-flow-2" />

        {/* Content Container */}
        <div className="relative z-30 p-8 h-full flex flex-col justify-center items-center text-center">
          {children || (
            <div className="space-y-4">
              <h3 
                className="text-2xl font-bold text-white drop-shadow-lg animate-bright-title-glow"
                style={{ textShadow: '0 0 20px rgba(255, 255, 255, 0.8)' }}
              >
                <TypingText/>
              </h3>
             <Text
                  fontSize={{ base: "sm", sm: "md", md: "lg", lg: "xl" }}
                  maxW="600px"
                  color="white"
                  textShadow="1px 1px 4px rgba(0,0,0,0.6)"
                >
                  Join our engaging e-learning platform.
                </Text>
                <Button
                  as="a"
                  href="/it-courses"
                  backgroundColor="white"
                  color="orange.600"
                  borderRadius="full"
                  border={"3px solid"}
                  borderColor={"orange.600"}
                  size={{ base: "sm", sm: "md", lg: "lg" }}
                  px={{ base: 6, md: 8 }}
                  py={{ base: 5, md: 6 }}
                  fontSize={{ base: "sm", md: "md" }}
                  _hover={{
                    backgroundColor: "orange.50",
                    transform: "translateY(-2px)",
                  }}
                  transition="all 0.3s"
                >
                  Get Started
                </Button>
              </div>
          )}
        </div>

        {/* Bright White Energy Rings */}
        <div className="absolute inset-12 border-2 border-white/30 rounded-full shadow-sm shadow-white/20 animate-bright-energy-ring-1" />
        <div className="absolute inset-16 border border-white/25 rounded-full shadow-sm shadow-white/15 animate-bright-energy-ring-2" />
        <div className="absolute inset-20 border border-white/20 rounded-full shadow-sm shadow-white/10 animate-bright-energy-ring-3" />

        {/* Bright White Liquid Ripples */}
        <div className="absolute inset-0 rounded-3xl border-2 border-white/20 shadow-sm shadow-white/10 animate-bright-liquid-ripple-1" />
        <div className="absolute inset-2 rounded-3xl border border-white/15 shadow-sm shadow-white/8 animate-bright-liquid-ripple-2" />
      </div>

      {/* Bright White Outer Glow Effects */}
      <div className="absolute -inset-3 bg-white/10 rounded-3xl blur-xl opacity-70 animate-bright-outer-energy" />
      
      <div className="absolute -inset-6 bg-white/5 rounded-3xl blur-2xl opacity-50 animate-bright-distant-glow" />

      {/* Bright White Ambient Light Rays */}
      <div 
        className="absolute top-0 left-1/2 w-2 h-full bg-gradient-to-b from-white/40 via-transparent to-white/20 transform -translate-x-1/2 rotate-12 shadow-sm shadow-white/20 animate-bright-light-ray-1"
      />
      <div 
        className="absolute top-0 right-1/4 w-1 h-full bg-gradient-to-b from-white/30 via-transparent to-white/15 transform rotate-45 shadow-sm shadow-white/15 animate-bright-light-ray-2"
      />
    </div>
  );
};

export default TealGassyBox;
