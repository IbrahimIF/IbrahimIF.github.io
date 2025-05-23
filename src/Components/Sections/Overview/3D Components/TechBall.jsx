
import { Decal, Float, useTexture } from '@react-three/drei'
import { useFrame} from '@react-three/fiber'
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
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
        />
      </mesh>
    </Float>
  )
}

export default TechBall