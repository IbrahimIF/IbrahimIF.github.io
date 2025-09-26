import { Canvas } from '@react-three/fiber';
import { Preload } from '@react-three/drei';
import { useEffect, useState } from 'react';
import TechBall from './TechBall';

const techData = [
  {
    name: 'Typescript',
    imgUrl: '/assets/Tech/typescript.png',
    position: [-2, 5.5, -5]
  },
  {
    name: 'Python',
    imgUrl: '/assets/Tech/python.png',
    position: [0, 5.5, -5]
  },
  {
    name: 'Java',
    imgUrl: '/assets/Tech/java.png',
    position: [2, 5.5, -5]
  },
  {
    name: 'JavaScript',
    imgUrl: '/assets/Tech/javascript.png',
    position: [-2, 3.4, -5]
  },
  {
    name: 'HTML',
    imgUrl: '/assets/Tech/html.png',
    position: [0, 3.4, -5]
  },
  {
    name: 'CSS',
    imgUrl: '/assets/Tech/css.png',
    position: [2, 3.4, -5]
  },
  {
    name: 'Reactjs',
    imgUrl: '/assets/Tech/reactjs.png',
    position: [-2, 1.3, -5]
  },
  {
    name: 'Node.js',
    imgUrl: '/assets/Tech/nodejs.png',
    position: [0, 1.3, -5]
  },
  {
    name: 'express',
    imgUrl: '/assets/Tech/expres.png',
    position: [2, 1.3, -5]
  },
  {
    name: 'vite.js',
    imgUrl: '/assets/Tech/Vitejs.png',
    position: [-2, -0.8, -5]
  },
  {
    name: 'tailwind',
    imgUrl: '/assets/Tech/tailwind.png',
    position: [0, -0.8, -5]
  },
  {
    name: 'Threejs',
    imgUrl: '/assets/Tech/threejs.png',
    position: [2, -0.8, -5]
  },
  {
    name: 'Mongodb',
    imgUrl: '/assets/Tech/mongodb.png',
    position: [-2, -2.9, -5]
  },
  {
    name: 'Firebase',
    imgUrl: '/assets/Tech/firebase.png',
    position: [0, -2.9, -5]
  },
  {
    name: 'vercel',
    imgUrl: '/assets/Tech/vercel.png',
    position: [2, -2.9, -5]
  },
  {
    name: 'Git',
    imgUrl: '/assets/Tech/git.png',
    position: [-2, -5, -5]
  },
  {
    name: 'Figma',
    imgUrl: '/assets/Tech/figma.png',
    position: [0, -5, -5]
  },
  {
    name: 'Socket.io',
    imgUrl: '/assets/Tech/socket-io.png',
    position: [2, -5, -5]
  }
]

const WIDE_FOV = 63;
const DEFAULT_FOV = 50;
const MOBILE_FOV = 57;
const SM_MOBILE_FOV = 65;

export default function TechScene() {
  const [cameraFov, setCameraFov] = useState(DEFAULT_FOV);
  const updateFov = () => {
    if (window.innerWidth <= 480) {
      setCameraFov(MOBILE_FOV);
    } if (window.innerWidth <= 380) {
      setCameraFov(SM_MOBILE_FOV);
    } if (window.innerWidth <= 1467 && window.innerWidth > 1200) {
      setCameraFov(WIDE_FOV);
    } else {
      setCameraFov(DEFAULT_FOV);
    }
  };

  useEffect(() => {
    updateFov();
    window.addEventListener('resize', updateFov);
    return () => window.removeEventListener('resize', updateFov);
  }, []);


  return (
    <div style={{ height: '100%', width: '100%' }}>
      <Canvas camera={{ position: [0, 0, 11], fov: cameraFov }}>
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
