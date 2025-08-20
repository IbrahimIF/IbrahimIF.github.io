import { Canvas } from '@react-three/fiber';
import { Preload } from '@react-three/drei';
import TechBall from './TechBall';

const techData = [
  {
    name: 'Reactjs',
    imgUrl: '/assets/Tech/reactjs.png',
    position: [-2, 9, -5]
  },
  {
    name: 'JavaScript',
    imgUrl: '/assets/Tech/javascript.png',
    position: [0, 9, -5]
  },
  {
    name: 'Typescript',
    imgUrl: '/assets/Tech/typescript.png',
    position: [2, 9, -5]
  },
  {
    name: 'Python',
    imgUrl: '/assets/Tech/python.png',
    position: [-2, 6.7, -5]
  },
  {
    name: 'Java',
    imgUrl: '/assets/Tech/java.png',
    position: [0, 6.7, -5]
  },
  {
    name: 'C++',
    imgUrl: '/assets/Tech/C++.png',
    position: [2, 6.7, -5]
  },
  {
    name: 'csharp',
    imgUrl: '/assets/Tech/csharp.png',
    position: [-2, 4.4, -5]
  },
  {
    name: 'HTML',
    imgUrl: '/assets/Tech/html.png',
    position: [0, 4.4, -5]
  },
  {
    name: 'CSS',
    imgUrl: '/assets/Tech/css.png',
    position: [2, 4.4, -5]
  },
  {
    name: 'Mongodb',
    imgUrl: '/assets/Tech/mongodb.png',
    position: [-2, 2.1, -5]
  },
  {
    name: 'Firebase',
    imgUrl: '/assets/Tech/firebase.png',
    position: [0, 2.1, -5]
  },
  {
    name: 'MySQL',
    imgUrl: '/assets/Tech/mysql.png',
    position: [2, 2.1, -5]
  },
  {
    name: 'Node.js',
    imgUrl: '/assets/Tech/nodejs.png',
    position: [-2, -0.2, -5]
  },
  {
    name: 'vite.js',
    imgUrl: '/assets/Tech/Vitejs.png',
    position: [0, -0.2, -5]
  },
  {
    name: 'express',
    imgUrl: '/assets/Tech/expres.png',
    position: [2, -0.2, -5]
  },
  {
    name: 'vercel',
    imgUrl: '/assets/Tech/vercel.png',
    position: [-2, -2.5, -5]
  },
  {
    name: 'Figma',
    imgUrl: '/assets/Tech/figma.png',
    position: [0, -2.5, -5]
  },
  {
    name: 'Git',
    imgUrl: '/assets/Tech/git.png',
    position: [2, -2.5, -5]
  },
  {
    name: 'tailwind',
    imgUrl: '/assets/Tech/tailwind.png',
    position: [-2, -4.8, -5]
  },
  {
    name: 'Threejs',
    imgUrl: '/assets/Tech/threejs.png',
    position: [0, -4.8, -5]
  },
  {
    name: 'Socket.io',
    imgUrl: '/assets/Tech/socket-io.png',
    position: [2, -4.8, -5]
  }
]

export default function TechScene() {
  return (
    <div style={{ height: '100%' }}>
      <Canvas camera={{ position: [0, 0, 18], fov: 50 }}>
        <ambientLight intensity={0.5} color="#ffffff" />
        <pointLight 
          position={[0, 0, -10]} 
          intensity={50} 
          color="#ffffff"
        />

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