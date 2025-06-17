'use client'

import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef, useMemo } from 'react'

function Particles() {
  const particlesRef = useRef<THREE.Points>(null)

  const particleCount = 500
  const positions = useMemo(() => {
    const arr = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 50
      arr[i * 3 + 1] = (Math.random() - 0.5) * 50
      arr[i * 3 + 2] = (Math.random() - 0.5) * 50
    }
    return arr
  }, [])

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    return geo
  }, [positions])

  const material = useMemo(() => {
    return new THREE.PointsMaterial({
      color: '#FFFFFF',
      size: 0.05,
      transparent: true,
    })
  }, [])

  useFrame(() => {
    if (!particlesRef.current) return
    particlesRef.current.rotation.y += 0.0015
    particlesRef.current.rotation.x += 0.001
  })

  return <points ref={particlesRef} geometry={geometry} material={material} />
}

export default function NetworkField() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-50">
      <Canvas camera={{ position: [0, 0, 35], fov: 75 }}>
        <color attach="background" args={['#121212']} />
        <ambientLight intensity={0.5} />
        <Particles />
      </Canvas>
    </div>
  )
}