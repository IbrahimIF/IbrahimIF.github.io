import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import TechBall from './TechBall'

const techData = [
  {
    name: 'React',
    imgUrl: '/src/assets/Profile placeholder.png',
    position: [0, 0, 0]
  },
  {
    name: 'JavaScript',
    imgUrl: '/src/assets/Profile placeholder.png',
    position: [2, 0, -2]
  },
  {
    name: 'Node.js',
    imgUrl: '/src/assets/Profile placeholder.png',
    position: [-2, 0, -2]
  },
  {
    name: 'Three.js',
    imgUrl: '/src/assets/Profile placeholder.png',
    position: [0, 2, -2]
  },
  {
    name: 'HTML/CSS',
    imgUrl: '/src/assets/Profile placeholder.png',
    position: [0, -2, -2]
  }
]

export default function TechScene() {
  return (
    <div style={{ height: '50vh' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        
        {techData.map((tech, index) => (
          <TechBall
            key={tech.name}
            position={tech.position}
            imgUrl={tech.imgUrl}
          />
        ))}
        
        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  )
}