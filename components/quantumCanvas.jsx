// components/QuantumCanvas.jsx
   'use client';
   import { useRef, useEffect } from 'react';
   import * as THREE from 'three';
   
   export default function QuantumCanvas() {
     const canvasRef = useRef();
     
     useEffect(() => {
       const scene = new THREE.Scene();
       const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
       const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
       
       // Kvantne čestice
       const particles = new THREE.Group();
       for (let i = 0; i < 1000; i++) {
         const geometry = new THREE.SphereGeometry(0.1, 32, 32);
         const material = new THREE.MeshBasicMaterial({ color: new THREE.Color(`hsl(${Math.random() * 360}, 100%, 50%`) });
         const particle = new THREE.Mesh(geometry, material);
         particle.position.set(Math.random() * 10 - 5, Math.random() * 10 - 5, Math.random() * 10 - 5);
         particles.add(particle);
       }
       scene.add(particles);
       
       function animate() {
         requestAnimationFrame(animate);
         particles.rotation.x += 0.01;
         particles.rotation.y += 0.01;
         renderer.render(scene, camera);
       }
       animate();
     }, []);
     
     return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" />;
   }