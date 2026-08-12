import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/* ─── Perspective Grid ─────────────────────────────────────── */
function Grid() {
  const groupRef = useRef();
  const COLS = 30;
  const ROWS = 30;
  const SPACING = 2.5;
  const W = COLS * SPACING;
  const D = ROWS * SPACING;

  // Build horizontal lines (Z-direction)
  const hLines = useMemo(() => {
    const lines = [];
    for (let i = 0; i <= COLS; i++) {
      const x = -W / 2 + i * SPACING;
      const points = [new THREE.Vector3(x, 0, -D / 2), new THREE.Vector3(x, 0, D / 2)];
      lines.push(new THREE.BufferGeometry().setFromPoints(points));
    }
    return lines;
  }, []);

  // Build vertical lines (X-direction)
  const vLines = useMemo(() => {
    const lines = [];
    for (let j = 0; j <= ROWS; j++) {
      const z = -D / 2 + j * SPACING;
      const points = [new THREE.Vector3(-W / 2, 0, z), new THREE.Vector3(W / 2, 0, z)];
      lines.push(new THREE.BufferGeometry().setFromPoints(points));
    }
    return lines;
  }, []);

  // Slow infinite scroll: move grid forward along Z
  useFrame((_, delta) => {
    groupRef.current.position.z = (groupRef.current.position.z + delta * 1.8) % SPACING;
  });

  return (
    <group ref={groupRef}>
      {hLines.map((geo, i) => (
        <line key={`h${i}`} geometry={geo}>
          <lineBasicMaterial color="#3b82f6" transparent opacity={i === COLS / 2 ? 0.6 : 0.12} />
        </line>
      ))}
      {vLines.map((geo, j) => (
        <line key={`v${j}`} geometry={geo}>
          <lineBasicMaterial color="#8b5cf6" transparent opacity={j === ROWS / 2 ? 0.6 : 0.12} />
        </line>
      ))}
    </group>
  );
}

/* ─── Horizon glow plane ───────────────────────────────────── */
function HorizonGlow() {
  return (
    <mesh position={[0, 0, -15]} rotation={[0, 0, 0]}>
      <planeGeometry args={[120, 2]} />
      <meshBasicMaterial color="#3b82f6" transparent opacity={0.18} />
    </mesh>
  );
}

/* ─── Floating wireframe geometry ──────────────────────────── */
function FloatingShape({ position, geometry, speed, color, opacity = 0.07 }) {
  const mesh = useRef();
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    mesh.current.rotation.x = t * speed * 0.4;
    mesh.current.rotation.y = t * speed;
  });
  return (
    <mesh ref={mesh} position={position}>
      {geometry}
      <meshBasicMaterial color={color} wireframe transparent opacity={opacity} />
    </mesh>
  );
}

/* ─── Scene ────────────────────────────────────────────────── */
function Scene() {
  return (
    <>
      {/* Grid tilted like a ground plane stretching to horizon */}
      <group position={[0, -3.5, 2]} rotation={[-Math.PI / 6, 0, 0]}>
        <Grid />
        <HorizonGlow />
      </group>

      {/* Distant floating wireframe shapes */}
      <FloatingShape
        position={[-10, 3, -18]}
        geometry={<octahedronGeometry args={[2.5]} />}
        speed={0.08} color="#3b82f6"
      />
      <FloatingShape
        position={[12, 1, -22]}
        geometry={<icosahedronGeometry args={[2, 0]} />}
        speed={0.06} color="#8b5cf6"
      />
      <FloatingShape
        position={[2, 5, -14]}
        geometry={<tetrahedronGeometry args={[1.8]} />}
        speed={0.11} color="#3b82f6"
      />
    </>
  );
}

/* ─── Main export ──────────────────────────────────────────── */
const ThreeBackground = () => (
  <div
    style={{
      position: 'fixed',
      inset: 0,
      zIndex: -1,
      background:
        'linear-gradient(180deg, #050011 0%, #080018 40%, #0b0020 70%, #050011 100%)',
    }}
  >
    <Canvas
      camera={{ position: [0, 2, 8], fov: 70 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'low-power' }}
      dpr={[1, 1.5]}
      style={{ width: '100%', height: '100%' }}
    >
      <Scene />
    </Canvas>
  </div>
);

export default ThreeBackground;
