import { Canvas } from '@react-three/fiber'
import { Preload } from '@react-three/drei'
import TechBall from './TechBall'

const techData = [
  {
    name: 'React',
    imgUrl: '/assets/Tech/React-logo.png',
    position: [0, 0, -5]
  },
  {
    name: 'JavaScript',
    imgUrl: '/assets/Tech/JavaScript-logo.png',
    position: [2, 0, -5]
  },
  {
    name: 'Node.js',
    imgUrl: '/assets/Tech/node-js-logo.png',
    position: [-2, 0, -5]
  },
  {
    name: 'Mongodb',
    imgUrl: '/assets/Tech/mongodb-logo.png',
    position: [0, 3, -5]
  },
  {
    name: 'Python',
    imgUrl: '/assets/Tech/Python-logo.png',
    position: [2, 3, -5]
  },
  {
    name: 'Java',
    imgUrl: '/assets/Tech/Java-logo.png',
    position: [-2, 3, -5]
  },
  {
    name: 'HTML/CSS',
    imgUrl: '/assets/Tech/html and css-logo.png',
    position: [0, -3, -5]
  }
]

export default function TechScene() {
  return (
    <div style={{ height: '50vh' }}>
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.15} />
        <pointLight position={[-5, -5, -5 ]} intensity={20} />
        
        {techData.map((tech) => (
          <TechBall
            key={tech.name}
            position={tech.position}
            imgUrl={tech.imgUrl}
          />
        ))}
        <Preload all />
      </Canvas>
    </div>
  )
}