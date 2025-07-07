// components/QuantumCanvas.jsx
'use client';
import { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

export default function QuantumCanvas() {
  const canvasRef = useRef(null);
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    // Provera da li smo u browser okruženju
    setIsBrowser(typeof window !== 'undefined');
    
    if (!canvasRef.current || !isBrowser) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      canvas: canvasRef.current,
      antialias: true,
      alpha: true
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    // Optimizacija: Instancirana geometrija i materijal
    const geometry = new THREE.SphereGeometry(0.1, 16, 16);
    const material = new THREE.MeshBasicMaterial();
    
    const particles = new THREE.InstancedMesh(geometry, material, 1000);
    const dummy = new THREE.Object3D();
    
    const colors = [];
    for (let i = 0; i < 1000; i++) {
      const color = new THREE.Color(`hsl(${Math.random() * 360}, 100%, 50%)`);
      colors.push(color.r, color.g, color.b);
      
      dummy.position.set(
        Math.random() * 10 - 5,
        Math.random() * 10 - 5,
        Math.random() * 10 - 5
      );
      dummy.updateMatrix();
      particles.setMatrixAt(i, dummy.matrix);
      particles.setColorAt(i, color);
    }
    
    scene.add(particles);
    camera.position.z = 5;

    // Animation loop
    let animationId;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      particles.rotation.x += 0.01;
      particles.rotation.y += 0.01;
      particles.instanceMatrix.needsUpdate = true;
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    };
  }, [isBrowser]);

  // Fallback za server rendering
  if (!isBrowser) return <div className="fixed top-0 left-0 w-full h-full -z-10 bg-black" />;

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" />;
}
// Dodaj u useEffect
   const handleResize = () => {
     camera.aspect = window.innerWidth / window.innerHeight;
     camera.updateProjectionMatrix();
     renderer.setSize(window.innerWidth, window.innerHeight);
   };
   
   window.addEventListener('resize', handleResize);
   
   // U cleanup
   window.removeEventListener('resize', handleResize);