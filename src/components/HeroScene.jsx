import React, { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

function ReadyNotifier({ onReady }) {
  React.useEffect(() => {
    if (onReady) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          onReady();
        });
      });
    }
  }, [onReady]);
  return null;
}

/* ─── Orbit ring of dots ───────────────────────────────────── */
function OrbitRing({ count, radius, speed, color, tiltZ = 0 }) {
  const mesh = useRef();

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const angle  = (i / count) * Math.PI * 2;
      const jitter = (Math.random() - 0.5) * 0.3;
      pos[i * 3]     = Math.cos(angle) * (radius + jitter);
      pos[i * 3 + 1] = (Math.random() - 0.5) * 0.4;
      pos[i * 3 + 2] = Math.sin(angle) * (radius + jitter);
    }
    return pos;
  }, [count, radius]);

  useFrame((state) => {
    mesh.current.rotation.y  = state.clock.elapsedTime * speed;
    mesh.current.rotation.z  = tiltZ;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" array={positions} count={count} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.07} color={color} transparent opacity={0.9} sizeAttenuation />
    </points>
  );
}

/* ─── Central glowing icosahedron (NO external lib materials) ── */
function CoreSphere() {
  const outerRef = useRef();
  const innerRef = useRef();
  const glowRef  = useRef();

  useFrame((_, delta) => {
    outerRef.current.rotation.x += delta * 0.20;
    outerRef.current.rotation.y += delta * 0.28;
    innerRef.current.rotation.x -= delta * 0.13;
    innerRef.current.rotation.y -= delta * 0.18;
    glowRef.current.rotation.y  += delta * 0.06;
  });

  return (
    <group>
      {/* Outer wireframe cage */}
      <mesh ref={outerRef}>
        <icosahedronGeometry args={[2.2, 1]} />
        <meshBasicMaterial color="#3b82f6" wireframe transparent opacity={0.35} />
      </mesh>

      {/* Inner shaded shell */}
      <mesh ref={innerRef}>
        <icosahedronGeometry args={[1.7, 1]} />
        <meshPhongMaterial
          color="#1e40af"
          emissive="#3b82f6"
          emissiveIntensity={0.5}
          shininess={80}
          transparent
          opacity={0.55}
        />
      </mesh>

      {/* Soft purple core */}
      <mesh ref={glowRef}>
        <sphereGeometry args={[1.05, 32, 32]} />
        <meshPhongMaterial
          color="#8b5cf6"
          emissive="#8b5cf6"
          emissiveIntensity={0.9}
          transparent
          opacity={0.25}
        />
      </mesh>

      {/* Back-face glow halo */}
      <mesh>
        <sphereGeometry args={[2.9, 16, 16]} />
        <meshBasicMaterial color="#3b82f6" transparent opacity={0.035} side={THREE.BackSide} />
      </mesh>
    </group>
  );
}

/* ─── Scene with mouse tracking ─────────────────────────────── */
function Scene() {
  const group = useRef();

  useFrame((state) => {
    group.current.rotation.x += (state.mouse.y * 0.28 - group.current.rotation.x) * 0.04;
    group.current.rotation.y += (state.mouse.x * 0.28 - group.current.rotation.y) * 0.04;
  });

  return (
    <group ref={group}>
      <ambientLight intensity={0.5} />
      <pointLight position={[ 6,  6,  6]} intensity={2.5} color="#3b82f6" />
      <pointLight position={[-6, -6, -6]} intensity={1.2} color="#8b5cf6" />
      <pointLight position={[ 0,  0,  8]} intensity={0.8} color="#ffffff" />

      <Float speed={1.6} floatIntensity={0.45} rotationIntensity={0.06}>
        <CoreSphere />
      </Float>

      <OrbitRing count={100} radius={3.5} speed={ 0.30} color="#3b82f6" tiltZ={ 0.0} />
      <OrbitRing count={60}  radius={2.9} speed={-0.20} color="#8b5cf6" tiltZ={ 0.5} />
      <OrbitRing count={45}  radius={4.1} speed={ 0.13} color="#60a5fa" tiltZ={-0.4} />
    </group>
  );
}

/* ─── Main export ─────────────────────────────────────────────  */
const HeroScene = ({ onReady }) => {
  return (
    <div style={{ position: 'relative', width: '440px', height: '440px' }}>
      
      <Canvas
        camera={{ position: [0, 0, 8], fov: 65 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent', width: '100%', height: '100%', zIndex: 0 }}
        dpr={[1, 2]}
      >
        <Scene />
        <ReadyNotifier onReady={onReady} />
      </Canvas>

      {/* AK initials - HTML Overlay, always visible instantly */}
      <div
        style={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          fontFamily: "'Poppins', sans-serif", fontSize: '2.2rem', fontWeight: '800',
          background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', backgroundClip: 'text',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', letterSpacing: '4px',
          pointerEvents: 'none', userSelect: 'none', filter: 'drop-shadow(0 0 14px rgba(59,130,246,0.7))',
          zIndex: 2, marginRight: '-4px'
        }}
      >
        AK
      </div>
    </div>
  );
};

export default HeroScene;
