import { Canvas } from '@react-three/fiber';
import { Preload } from '@react-three/drei';
import { useEffect, useState } from 'react';
import TechBall from './TechBall';
import { CameraAdjust } from './CameraAdjust';

const techData = [
  // Row 1: High-Level & Systems Languages
  {
    name: 'Go',
    imgUrl: '/assets/Tech/Go.png',
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

  // Row 2: Logic & Markup (The "New" Standards)
  {
    name: 'HTML',
    imgUrl: '/assets/Tech/html.png',
    position: [-2, 3.4, -5]
  },
  {
    name: 'JavaScript',
    imgUrl: '/assets/Tech/javascript.png',
    position: [0, 3.4, -5]
  },
  {
    name: 'TypeScript',
    imgUrl: '/assets/Tech/typescript.png',
    position: [2, 3.4, -5]
  },

  // Row 3: Modern Frontend Frameworks
  {
    name: 'Reactjs',
    imgUrl: '/assets/Tech/reactjs.png',
    position: [-2, 1.3, -5]
  },
  {
    name: 'Next.js',
    imgUrl: '/assets/Tech/nextjs.png',
    position: [0, 1.3, -5]
  },
  {
    name: 'vite.js',
    imgUrl: '/assets/Tech/Vitejs.png',
    position: [2, 1.3, -5]
  },

  // Row 4: Backend & Querying
  {
    name: 'Node.js',
    imgUrl: '/assets/Tech/nodejs.png',
    position: [-2, -0.8, -5]
  },
  {
    name: 'express',
    imgUrl: '/assets/Tech/express.png',
    position: [0, -0.8, -5]
  },
  {
    name: 'SQL',
    imgUrl: '/assets/Tech/sql.png',
    position: [2, -0.8, -5]
  },

  // Row 5: Relational Databases
  {
    name: 'mysql',
    imgUrl: '/assets/Tech/mysql.png',
    position: [-2, -2.9, -5]
  },
  {
    name: 'PostgreSQL',
    imgUrl: '/assets/Tech/postgre.png',
    position: [0, -2.9, -5]
  },
  {
    name: 'SQLite',
    imgUrl: '/assets/Tech/sqlite.png',
    position: [2, -2.9, -5]
  },

  // Row 6: NoSQL & Real-time
  {
    name: 'Mongodb',
    imgUrl: '/assets/Tech/mongodb.png',
    position: [-2, -5, -5]
  },
  {
    name: 'Firebase',
    imgUrl: '/assets/Tech/firebase.png',
    position: [0, -5, -5]
  },
  {
    name: 'Socket.io',
    imgUrl: '/assets/Tech/socket-io.png',
    position: [2, -5, -5]
  },

  // Row 7: Styling & Visuals
  {
    name: 'CSS',
    imgUrl: '/assets/Tech/css.png',
    position: [-2, -7.1, -5]
  },
  {
    name: 'tailwind',
    imgUrl: '/assets/Tech/tailwind.png',
    position: [0, -7.1, -5]
  },
  {
    name: 'Threejs',
    imgUrl: '/assets/Tech/threejs.png',
    position: [2, -7.1, -5]
  },

  // Row 8: Infrastructure & Version Control
  {
    name: 'AWS',
    imgUrl: '/assets/Tech/AWS.png',
    position: [-2, -9.2, -5]
  },
  {
    name: 'Salesforce',
    imgUrl: '/assets/Tech/salesforce.png',
    position: [0, -9.2, -5]
  },
  {
    name: 'Git',
    imgUrl: '/assets/Tech/git.png',
    position: [2, -9.2, -5]
  }
]

const WIDE_FOV = 63;
const DEFAULT_FOV = 50;
const MOBILE_FOV = 57;
const SM_MOBILE_FOV = 65;

export default function TechScene() {
  const [cameraFov, setCameraFov] = useState(DEFAULT_FOV);
  const updateFov = () => {
    if (window.innerWidth <= 390) {
      setCameraFov(SM_MOBILE_FOV);
    } else if (window.innerWidth <= 480) {
      setCameraFov(MOBILE_FOV);
    } else if (window.innerWidth <= 1467 && window.innerWidth > 1200) {
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
      <Canvas camera={{ position: [0, 0, 15], fov: cameraFov }}>
        <CameraAdjust />
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
