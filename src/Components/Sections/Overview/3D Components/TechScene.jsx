import { Canvas } from '@react-three/fiber'
import { Preload } from '@react-three/drei'
import { Bloom, DepthOfField, EffectComposer, Noise, Vignette } from '@react-three/postprocessing'
import TechBall from './TechBall'

const techData = [
  {
    name: 'Threejs',
    imgUrl: '/assets/Tech/threejs.png',
    position: [-2, 5, -5]
  },
  {
    name: 'JavaScript',
    imgUrl: '/assets/Tech/javascript.png',
    position: [0, 5, -5]
  },
  {
    name: 'Typescript',
    imgUrl: '/assets/Tech/typescript.png',
    position: [2, 5, -5]
  },
  {
    name: 'Java',
    imgUrl: '/assets/Tech/java.png',
    position: [-2, 2, -5]
  },
  {
    name: 'React',
    imgUrl: '/assets/Tech/reactjs.png',
    position: [0, 0, -5]
  },
  {
    name: 'Node.js',
    imgUrl: '/assets/Tech/nodejs.png',
    position: [-2, 0, -5]
  },
  {
    name: 'Mongodb',
    imgUrl: '/assets/Tech/mongodb.png',
    position: [0, 3, -5]
  },
  {
    name: 'Python',
    imgUrl: '/assets/Tech/python.png',
    position: [2, 3, -5]
  },
  {
    name: 'HTML',
    imgUrl: '/assets/Tech/html.png',
    position: [0, -3, -5]
  },
  {
    name: 'CSS',
    imgUrl: '/assets/Tech/css.png',
    position: [2, -3, -5]
  },
  {
    name: 'Git',
    imgUrl: '/assets/Tech/git.png',
    position: [-2, -3, -5]
  },
  {
    name: 'Figma',
    imgUrl: '/assets/Tech/figma.png',
    position: [-2, -6, -5]
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