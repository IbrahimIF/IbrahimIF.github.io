import { useThree } from '@react-three/fiber'
import { useEffect } from 'react'

export function CameraAdjust() {
  const { camera } = useThree()

  useEffect(() => {
    camera.position.set(0, -1.85, 13.5)
    camera.lookAt(0, -1.85, 0)
  }, [camera])

  return null
}
