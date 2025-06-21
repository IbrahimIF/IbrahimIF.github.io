import { Decal, Float, useTexture, Edges } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'

function TechBall({ position, imgUrl }) {
  const decal = useTexture(imgUrl)
  const meshRef = useRef()
  const [isActive, setIsActive] = useState(false)
  const spinSpeed = useRef(0)

  useFrame(() => {
    if (meshRef.current) {
      if (isActive) {
        spinSpeed.current *= 0.92
      } else {
        spinSpeed.current *= 0.99
      }
      meshRef.current.rotation.y += spinSpeed.current
    }
  })

  return (
    <Float speed={0} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position}  castShadow 
      onPointerDown={() => {
        setIsActive(true)
        document.body.style.cursor = 'grabbing'
      }}
      onPointerUp={() => {
        setIsActive(false)
        document.body.style.cursor = 'pointer'
      }}
      onPointerOver={() => {
        if (!isActive) document.body.style.cursor = 'pointer'
      }}
      onPointerOut={() => {
        if (!isActive) document.body.style.cursor = 'auto'
        setIsActive(false)
      }}
      onPointerMove={(e) => {
        if (isActive) {
          spinSpeed.current = e.movementX * 0.01
        }
      }}
      >
        <icosahedronGeometry args={[1, 3]} />
        <meshPhysicalMaterial
          color="#5ca5c6"
          opacity={0.90}
          transparent={true}
        />
        <Edges
          scale={1}
          threshold={1}
          color="#135983"
          renderOrder={1}
        />
        <Decal
          position={[0, 0, 1.05]}
          rotation={[0, 0, 0]}
          scale={1.25}
          map={decal}
          color="#cd2ea1"
          polygonOffset
          polygonOffsetFactor={-5}
        />
      </mesh>
    </Float>
  )
}

export default TechBall