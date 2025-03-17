// import React, { useEffect, useRef, useState } from 'react';

// const NeuralNoise = () => {
//   const canvasRef = useRef(null);
//   const [pointer, setPointer] = useState({ x: 0, y: 0, tX: 0, tY: 0 });
//   const [scrollProgress, setScrollProgress] = useState(0);
//   const glRef = useRef(null);
//   const uniformsRef = useRef({});
//   const animationFrameRef = useRef();

//   // Vertex shader source code
//   const vertShaderSource = `
//     #version 100
//     precision mediump float;

//     varying vec2 vUv;
//     attribute vec2 a_position;

//     void main() {
//       vUv = 0.5 * (a_position + 1.0);
//       gl_Position = vec4(a_position, 0.0, 1.0);
//     }
//   `;

//   // Fragment shader source code
//   const fragShaderSource = `
//     #version 100
//     precision mediump float;

//     varying vec2 vUv;
//     uniform float u_time;
//     uniform float u_ratio;
//     uniform vec2 u_pointer_position;
//     uniform float u_scroll_progress;

//     vec2 rotate(vec2 uv, float th) {
//       return mat2(cos(th), sin(th), -sin(th), cos(th)) * uv;
//     }

//     float neuro_shape(vec2 uv, float t, float p) {
//       vec2 sine_acc = vec2(0.);
//       vec2 res = vec2(0.);
//       float scale = 8.;

//       for (int j = 0; j < 15; j++) {
//         uv = rotate(uv, 1.);
//         sine_acc = rotate(sine_acc, 1.);
//         vec2 layer = uv * scale + float(j) + sine_acc - t;
//         sine_acc += sin(layer);
//         res += (.5 + .5 * cos(layer)) / scale;
//         scale *= (1.2 - .07 * p);
//       }
//       return res.x + res.y;
//     }

//     void main() {
//       vec2 uv = 0.5 * vUv;
//       uv.x *= u_ratio;

//       vec2 pointer = vUv - u_pointer_position;
//       pointer.x *= u_ratio;
//       float p = clamp(length(pointer), 0., 1.);
//       p = .5 * pow(1. - p, 2.);

//       float t = 0.001 * u_time;
//       vec3 color = vec3(0.);

//       float noise = neuro_shape(uv, t, p);

//       noise = 1.2 * pow(noise, 3.);
//       noise += pow(noise, 10.);
//       noise = max(0.0, noise - .5);
//       noise *= (1. - length(vUv - 0.5));

//       color = normalize(vec3(0.2, 0.5 + 0.4 * cos(3. * u_scroll_progress), 0.5 + 0.5 * sin(3. * u_scroll_progress)));

//       color = color * noise;

//       gl_FragColor = vec4(color, noise);
//     }
//   `;

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
//     if (!gl) {
//       console.error('WebGL is not supported by your browser.');
//       return;
//     }

//     glRef.current = gl;

//     // Compile vertex and fragment shaders
//     const vertexShader = createShader(gl, vertShaderSource, gl.VERTEX_SHADER);
//     const fragmentShader = createShader(gl, fragShaderSource, gl.FRAGMENT_SHADER);
//     if (!vertexShader || !fragmentShader) return;

//     const program = createShaderProgram(gl, vertexShader, fragmentShader);
//     if (!program) return;

//     uniformsRef.current = getUniforms(gl, program);

//     const vertices = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
//     const vertexBuffer = gl.createBuffer();
//     gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
//     gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

//     gl.useProgram(program);

//     const positionLocation = gl.getAttribLocation(program, 'a_position');
//     gl.enableVertexAttribArray(positionLocation);
//     gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

//     resizeCanvas();
//     window.addEventListener('resize', resizeCanvas);
//     window.addEventListener('scroll', handleScroll);

//     render();

//     return () => {
//       window.removeEventListener('resize', resizeCanvas);
//       window.removeEventListener('scroll', handleScroll);
//       if (animationFrameRef.current) {
//         cancelAnimationFrame(animationFrameRef.current);
//       }
//     };
//   }, []);

//   const createShader = (gl, sourceCode, type) => {
//     const shader = gl.createShader(type);
//     if (!shader) return null;
//     gl.shaderSource(shader, sourceCode);
//     gl.compileShader(shader);
//     if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
//       console.error('An error occurred compiling the shaders: ' + gl.getShaderInfoLog(shader));
//       gl.deleteShader(shader);
//       return null;
//     }
//     return shader;
//   };

//   const createShaderProgram = (gl, vertexShader, fragmentShader) => {
//     const program = gl.createProgram();
//     if (!program) return null;
//     gl.attachShader(program, vertexShader);
//     gl.attachShader(program, fragmentShader);
//     gl.linkProgram(program);
//     if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
//       console.error('Unable to initialize the shader program: ' + gl.getProgramInfoLog(program));
//       return null;
//     }
//     return program;
//   };

//   const getUniforms = (gl, program) => {
//     const uniforms = {};
//     const uniformCount = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
//     for (let i = 0; i < uniformCount; i++) {
//       const uniformInfo = gl.getActiveUniform(program, i);
//       if (uniformInfo) {
//         uniforms[uniformInfo.name] = gl.getUniformLocation(program, uniformInfo.name);
//       }
//     }
//     return uniforms;
//   };

//   const resizeCanvas = () => {
//     if (!canvasRef.current || !glRef.current) return;
//     const devicePixelRatio = Math.min(window.devicePixelRatio, 2);
//     canvasRef.current.width = window.innerWidth * devicePixelRatio;
//     canvasRef.current.height = window.innerHeight * devicePixelRatio;
//     glRef.current.uniform1f(uniformsRef.current.u_ratio, canvasRef.current.width / canvasRef.current.height);
//     glRef.current.viewport(0, 0, canvasRef.current.width, canvasRef.current.height);
//   };

//   const render = () => {
//     if (!glRef.current) return;
//     const currentTime = performance.now();

//     setPointer((prev) => ({
//       x: prev.x + (prev.tX - prev.x) * 0.5,
//       y: prev.y + (prev.tY - prev.y) * 0.5,
//       tX: prev.tX,
//       tY: prev.tY,
//     }));

//     glRef.current.uniform1f(uniformsRef.current.u_time, currentTime);
//     glRef.current.uniform2f(
//       uniformsRef.current.u_pointer_position,
//       pointer.x / window.innerWidth,
//       1 - pointer.y / window.innerHeight
//     );
//     glRef.current.uniform1f(uniformsRef.current.u_scroll_progress, scrollProgress);

//     glRef.current.drawArrays(glRef.current.TRIANGLE_STRIP, 0, 4);
//     animationFrameRef.current = requestAnimationFrame(render);
//   };

//   const handleScroll = () => {
//     setScrollProgress(window.pageYOffset / (2 * window.innerHeight));
//   };

//   const updateMousePosition = (eX, eY) => {
//     setPointer((prev) => ({ ...prev, tX: eX, tY: eY }));
//   };

//   useEffect(() => {
//     window.addEventListener('mousemove', (e) => updateMousePosition(e.clientX, e.clientY));
//     return () => {
//       window.removeEventListener('mousemove', (e) => updateMousePosition(e.clientX, e.clientY));
//     };
//   }, []);

//   return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }} />;
// };

// export default NeuralNoise;




// GlobalBackground.jsx (NeuralNoise)
// import React, { useEffect, useRef, useState } from 'react';
// // import './Globalbackground.css'; // Assuming you have a CSS file for the background styles

// const NeuralNoise = ({ isDarkMode }) => {
//   const canvasRef = useRef(null);
//   const [pointer, setPointer] = useState({ x: 0, y: 0, tX: 0, tY: 0 });
//   const [scrollProgress, setScrollProgress] = useState(0);
//   const glRef = useRef(null);
//   const uniformsRef = useRef({});
//   const animationFrameRef = useRef();

//   // Vertex shader source code
//   const vertShaderSource = `
//     #version 100
//     precision mediump float;

//     varying vec2 vUv;
//     attribute vec2 a_position;

//     void main() {
//       vUv = 0.5 * (a_position + 1.0);
//       gl_Position = vec4(a_position, 0.0, 1.0);
//     }
//   `;

//   // Fragment shader source code
//   const fragShaderSource = `
//     #version 100
//     precision mediump float;

//     varying vec2 vUv;
//     uniform float u_time;
//     uniform float u_ratio;
//     uniform vec2 u_pointer_position;
//     uniform float u_scroll_progress;

//     vec2 rotate(vec2 uv, float th) {
//       return mat2(cos(th), sin(th), -sin(th), cos(th)) * uv;
//     }

//     float neuro_shape(vec2 uv, float t, float p) {
//       vec2 sine_acc = vec2(0.);
//       vec2 res = vec2(0.);
//       float scale = 8.;

//       for (int j = 0; j < 15; j++) {
//         uv = rotate(uv, 1.);
//         sine_acc = rotate(sine_acc, 1.);
//         vec2 layer = uv * scale + float(j) + sine_acc - t;
//         sine_acc += sin(layer);
//         res += (.5 + .5 * cos(layer)) / scale;
//         scale *= (1.2 - .07 * p);
//       }
//       return res.x + res.y;
//     }

//     void main() {
//       vec2 uv = 0.5 * vUv;
//       uv.x *= u_ratio;

//       vec2 pointer = vUv - u_pointer_position;
//       pointer.x *= u_ratio;
//       float p = clamp(length(pointer), 0., 1.);
//       p = .5 * pow(1. - p, 2.);

//       float t = 0.001 * u_time;
//       vec3 color = vec3(0.);

//       float noise = neuro_shape(uv, t, p);

//       noise = 1.2 * pow(noise, 3.);
//       noise += pow(noise, 10.);
//       noise = max(0.0, noise - .5);
//       noise *= (1. - length(vUv - 0.5));

//       color = normalize(vec3(0.2, 0.5 + 0.4 * cos(3. * u_scroll_progress), 0.5 + 0.5 * sin(3. * u_scroll_progress)));

//       color = color * noise;

//       gl_FragColor = vec4(color, noise);
//     }
//   `;

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
//     if (!gl) {
//       console.error('WebGL is not supported by your browser.');
//       return;
//     }

//     glRef.current = gl;

//     // Compile vertex and fragment shaders
//     const vertexShader = createShader(gl, vertShaderSource, gl.VERTEX_SHADER);
//     const fragmentShader = createShader(gl, fragShaderSource, gl.FRAGMENT_SHADER);
//     if (!vertexShader || !fragmentShader) return;

//     const program = createShaderProgram(gl, vertexShader, fragmentShader);
//     if (!program) return;

//     uniformsRef.current = getUniforms(gl, program);

//     const vertices = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
//     const vertexBuffer = gl.createBuffer();
//     gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
//     gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

//     gl.useProgram(program);

//     const positionLocation = gl.getAttribLocation(program, 'a_position');
//     gl.enableVertexAttribArray(positionLocation);
//     gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

//     resizeCanvas();
//     window.addEventListener('resize', resizeCanvas);
//     window.addEventListener('scroll', handleScroll);

//     render();

//     return () => {
//       window.removeEventListener('resize', resizeCanvas);
//       window.removeEventListener('scroll', handleScroll);
//       if (animationFrameRef.current) {
//         cancelAnimationFrame(animationFrameRef.current);
//       }
//     };
//   }, []);

//   const createShader = (gl, sourceCode, type) => {
//     const shader = gl.createShader(type);
//     if (!shader) return null;
//     gl.shaderSource(shader, sourceCode);
//     gl.compileShader(shader);
//     if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
//       console.error('An error occurred compiling the shaders: ' + gl.getShaderInfoLog(shader));
//       gl.deleteShader(shader);
//       return null;
//     }
//     return shader;
//   };

//   const createShaderProgram = (gl, vertexShader, fragmentShader) => {
//     const program = gl.createProgram();
//     if (!program) return null;
//     gl.attachShader(program, vertexShader);
//     gl.attachShader(program, fragmentShader);
//     gl.linkProgram(program);
//     if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
//       console.error('Unable to initialize the shader program: ' + gl.getProgramInfoLog(program));
//       return null;
//     }
//     return program;
//   };

//   const getUniforms = (gl, program) => {
//     const uniforms = {};
//     const uniformCount = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
//     for (let i = 0; i < uniformCount; i++) {
//       const uniformInfo = gl.getActiveUniform(program, i);
//       if (uniformInfo) {
//         uniforms[uniformInfo.name] = gl.getUniformLocation(program, uniformInfo.name);
//       }
//     }
//     return uniforms;
//   };

//   const resizeCanvas = () => {
//     if (!canvasRef.current || !glRef.current) return;
//     const devicePixelRatio = Math.min(window.devicePixelRatio, 2);
//     canvasRef.current.width = window.innerWidth * devicePixelRatio;
//     canvasRef.current.height = window.innerHeight * devicePixelRatio;
//     glRef.current.uniform1f(uniformsRef.current.u_ratio, canvasRef.current.width / canvasRef.current.height);
//     glRef.current.viewport(0, 0, canvasRef.current.width, canvasRef.current.height);
//   };

//   const render = () => {
//     if (!glRef.current) return;
//     const currentTime = performance.now();

//     setPointer((prev) => ({
//       x: prev.x + (prev.tX - prev.x) * 0.5,
//       y: prev.y + (prev.tY - prev.y) * 0.5,
//       tX: prev.tX,
//       tY: prev.tY,
//     }));

//     glRef.current.uniform1f(uniformsRef.current.u_time, currentTime);
//     glRef.current.uniform2f(
//       uniformsRef.current.u_pointer_position,
//       pointer.x / window.innerWidth,
//       1 - pointer.y / window.innerHeight
//     );
//     glRef.current.uniform1f(uniformsRef.current.u_scroll_progress, scrollProgress);

//     glRef.current.drawArrays(glRef.current.TRIANGLE_STRIP, 0, 4);
//     animationFrameRef.current = requestAnimationFrame(render);
//   };

//   const handleScroll = () => {
//     setScrollProgress(window.pageYOffset / (2 * window.innerHeight));
//   };

//   const updateMousePosition = (eX, eY) => {
//     setPointer((prev) => ({ ...prev, tX: eX, tY: eY }));
//   };

//   useEffect(() => {
//     window.addEventListener('mousemove', (e) => updateMousePosition(e.clientX, e.clientY));
//     return () => {
//       window.removeEventListener('mousemove', (e) => updateMousePosition(e.clientX, e.clientY));
//     };
//   }, []);

//   return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }} />;
// };

// export default NeuralNoise;



// import React, { useEffect, useRef } from "react";
// import * as THREE from "three";
// import gsap from "gsap";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";

// const SciFiBackground = () => {
//   const particlesRef = useRef([]);
//   const starfieldRef = useRef([]);

//   // Create a starfield
//   const createStars = () => {
//     const starGeometry = new THREE.SphereGeometry(0.05, 8, 8);
//     const starMaterial = new THREE.MeshBasicMaterial({ color: "#ffffff" });
//     for (let i = 0; i < 100; i++) {
//       const star = new THREE.Mesh(starGeometry, starMaterial);
//       star.position.set(
//         (Math.random() - 0.5) * 50,
//         (Math.random() - 0.5) * 50,
//         (Math.random() - 0.5) * 50
//       );
//       starfieldRef.current.push(star);
//     }
//   };

//   useEffect(() => {
//     createStars();
//   }, []);

//   // Setting up particles
//   const Particles = () => {
//     useFrame(({ mouse }) => {
//       particlesRef.current.forEach((particle, i) => {
//         // Apply pulsing and reactive movement with mouse
//         const scale = 0.5 + Math.sin(particle.position.y + mouse.y * 5) * 0.1;
//         particle.scale.set(scale, scale, scale);

//         // Create a dynamic color effect
//         const color = new THREE.Color();
//         color.setHSL((i + (Date.now() * 0.001)) % 1, 0.8, 0.5); // Dynamic color changes
//         particle.material.color.set(color);

//         gsap.to(particle.position, {
//           x: particle.position.x + Math.sin(particle.position.z * 0.5) * 0.05,
//           y: particle.position.y + Math.cos(particle.position.x * 0.5) * 0.05,
//           duration: 0.5,
//           ease: "power2.out",
//           repeat: -1,
//           yoyo: true,
//         });
//       });
//     });

//     const particleGeometry = new THREE.SphereGeometry(0.1, 8, 8);
//     const particleMaterial = new THREE.MeshBasicMaterial({ color: "#0ff4c6" });

//     return (
//       <>
//         {Array.from({ length: 200 }).map((_, i) => (
//           <mesh
//             key={i}
//             ref={(el) => (particlesRef.current[i] = el)}
//             geometry={particleGeometry}
//             material={particleMaterial}
//             position={[
//               (Math.random() - 0.5) * 10,
//               (Math.random() - 0.5) * 10,
//               (Math.random() - 0.5) * 10,
//             ]}
//           />
//         ))}
//       </>
//     );
//   };

//   return (
//     <Canvas
//       camera={{ position: [0, 0, 15] }}
//       style={{ width: "100vw", height: "100vh", backgroundColor: "#02081a" }}
//     >
//       <ambientLight intensity={0.1} />
//       <pointLight color="#00f5d4" intensity={1} position={[5, 5, 5]} />
//       <Particles />
//       {starfieldRef.current.map((star, index) => (
//         <primitive key={index} object={star} />
//       ))}
//       <OrbitControls enableZoom={false} />
//     </Canvas>
//   );
// };

// export default SciFiBackground;



// import React, { useEffect, useRef } from "react";
// import * as THREE from "three";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import gsap from "gsap";

// const SciFiBackground = () => {
//   const particlesRef = useRef([]);
//   const starfieldRef = useRef([]);

//   // Create a starfield
//   const createStars = () => {
//     const starGeometry = new THREE.SphereGeometry(0.05, 8, 8);
//     const starMaterial = new THREE.MeshBasicMaterial({ color: "#00ff00" });
//     for (let i = 0; i < 200; i++) {
//       const star = new THREE.Mesh(starGeometry, starMaterial);
//       star.position.set(
//         (Math.random() - 0.5) * 100,
//         (Math.random() - 0.5) * 100,
//         (Math.random() - 0.5) * 100
//       );
//       starfieldRef.current.push(star);
//     }
//   };

//   useEffect(() => {
//     createStars();
//   }, []);

//   // Setting up particles
//   const Particles = () => {
//     useFrame(() => {
//       particlesRef.current.forEach((particle) => {
//         // Apply pulsing and movement effects
//         const scale = 0.5 + Math.sin(Date.now() * 0.002 + particle.position.y) * 0.1;
//         particle.scale.set(scale, scale, scale);

//         // Random movement
//         particle.position.x += (Math.random() - 0.5) * 0.05;
//         particle.position.y += (Math.random() - 0.5) * 0.05;
//         particle.position.z += (Math.random() - 0.5) * 0.05;
//       });
//     });

//     const particleGeometry = new THREE.SphereGeometry(0.2, 8, 8);
//     const particleMaterial = new THREE.MeshBasicMaterial({ color: "#00ff00", emissive: "#00ff00", emissiveIntensity: 0.5 });

//     return (
//       <>
//         {Array.from({ length: 200 }).map((_, i) => (
//           <mesh
//             key={i}
//             ref={(el) => (particlesRef.current[i] = el)}
//             geometry={particleGeometry}
//             material={particleMaterial}
//             position={[
//               (Math.random() - 0.5) * 20,
//               (Math.random() - 0.5) * 20,
//               (Math.random() - 0.5) * 20,
//             ]}
//           />
//         ))}
//       </>
//     );
//   };

//   return (
//     <Canvas
//       camera={{ position: [0, 0, 50] }}
//       style={{ width: "100vw", height: "100vh", backgroundColor: "#000000" }}
//     >
//       <ambientLight intensity={0.3} />
//       <pointLight color="#00ff00" intensity={1} position={[10, 10, 10]} />
//       <Particles />
//       {starfieldRef.current.map((star, index) => (
//         <primitive key={index} object={star} />
//       ))}
//       <OrbitControls enableZoom={false} />
//     </Canvas>
//   );
// };

// export default SciFiBackground;


import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";

const HexagonShape = ({ position }) => {
  const meshRef = useRef();

  useFrame(() => {
    meshRef.current.rotation.y += 0.002;
    meshRef.current.rotation.x += 0.001;
  });

  const hexagonShape = new THREE.Shape();
  const radius = 0.5;
  for (let i = 0; i < 6; i++) {
    const angle = (i / 6) * Math.PI * 2;
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);
    if (i === 0) hexagonShape.moveTo(x, y);
    else hexagonShape.lineTo(x, y);
  }
  hexagonShape.closePath();

  const geometry = new THREE.ShapeGeometry(hexagonShape);

  return (
    <mesh ref={meshRef} geometry={geometry} position={position} scale={2}>
      <meshPhongMaterial 
        color="#1d3557"        // Base Color
        emissive="#2a9d8f"     // Greenish Glow
        emissiveIntensity={0.8} 
        shininess={30} 
      />
    </mesh>
  );
};

const AnimatedSpheres = ({ position }) => {
  const meshRef = useRef();

  useFrame(() => {
    meshRef.current.position.y += Math.sin(Date.now() * 0.001) * 0.02;
  });

  const geometry = new THREE.SphereGeometry(0.5, 32, 32);

  return (
    <mesh ref={meshRef} geometry={geometry} position={position}>
      <meshStandardMaterial color="#457b9d" emissive="#2a9d8f" emissiveIntensity={0.6} />
    </mesh>
  );
};

const HexagonBackground = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 7] }}
      style={{ width: '100vw', height: '100vh', backgroundColor: "#081c15" }} // Dark Green Background
      gl={{ antialias: true }}
    >
      {/* Ambient and Point Lighting */}
      <ambientLight intensity={0.4} color="#ffffff" />
      <pointLight position={[10, 10, 10]} intensity={1.2} color="#1d3557" />
      <pointLight position={[-10, -10, 5]} intensity={0.8} color="#457b9d" />
      
      {/* Fog Effect */}
      <fog attach="fog" args={["#081c15", 5, 15]} />

      <Suspense fallback={null}>
        {/* Hexagon Shapes with random positions */}
        {/* {Array.from({ length: 40 }, (_, i) => (
          <HexagonShape key={i} position={[Math.random() * 10 - 5, Math.random() * 6 - 3, Math.random() * -5]} />
        ))} */}
        
        {/* Animated Spheres with random positions */}
        {Array.from({ length: 20 }, (_, i) => (
          <AnimatedSpheres key={i} position={[Math.random() * 10 - 5, Math.random() * 6 - 3, Math.random() * -5]} />
        ))}
      </Suspense>
      
      {/* Orbit Controls */}
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default HexagonBackground;
