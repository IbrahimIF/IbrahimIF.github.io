import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
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
    position: [0, 2, -5]
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
    position: [0, -2.4, -5]
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