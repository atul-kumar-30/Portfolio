import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Shape({ position, rotation, speed, type, color }) {
  const ref = useRef()
  
  useFrame((state, delta) => {
    ref.current.rotation.x += speed * delta
    ref.current.rotation.y += speed * delta * 1.5
    ref.current.position.y += Math.sin(state.clock.elapsedTime * speed) * 0.01
  })

  return (
    <mesh ref={ref} position={position} rotation={rotation}>
      {type === 'box' && <boxGeometry args={[1, 1, 1]} />}
      {type === 'icosahedron' && <icosahedronGeometry args={[1, 0]} />}
      {type === 'torus' && <torusGeometry args={[0.8, 0.2, 16, 32]} />}
      {type === 'octahedron' && <octahedronGeometry args={[1, 0]} />}
      <meshStandardMaterial 
        color={color} 
        wireframe 
        transparent 
        opacity={0.15} 
      />
    </mesh>
  )
}

const FloatingShapes = () => {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: -1, pointerEvents: 'none', opacity: 0.8 }}>
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        
        <Shape type="icosahedron" position={[-8, 4, -5]} rotation={[0, 0, 0]} speed={0.2} color="#8b5cf6" />
        <Shape type="box" position={[7, -3, -2]} rotation={[1, 1, 0]} speed={0.15} color="#3b82f6" />
        <Shape type="torus" position={[-6, -5, -8]} rotation={[0.5, 0.5, 0]} speed={0.3} color="#8b5cf6" />
        <Shape type="octahedron" position={[8, 5, -10]} rotation={[0, 0, 0]} speed={0.25} color="#3b82f6" />
        <Shape type="icosahedron" position={[0, -8, -6]} rotation={[0, 0, 0]} speed={0.1} color="#8b5cf6" />
      </Canvas>
    </div>
  )
}

export default FloatingShapes;
