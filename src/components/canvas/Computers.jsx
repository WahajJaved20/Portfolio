import {useEffect, useState} from 'react'
import {Canvas} from "@react-three/fiber"
import { OrbitControls, useGLTF, Preload } from '@react-three/drei'
const Computers = () => {
  const setup = useGLTF('./isometric_room_model/isometic.gltf')
  return (
    <mesh rotation={[0,Math.PI /0.2 ,0]}>
      <hemisphereLight intensity={0.8} groundColor="#7b63fb"/>
      <pointLight intensity={1} />
      <spotLight position={[-20,50,10]} angle={0.12} penumbra={1}/>
      <primitive object={setup.scene} position={[-3,-2,-1]} />
    </mesh>
  )
}
const ComputersCanvas = () => {
  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{position: [10,1,10], fov: 25, rotation: [0,0,0]}}
      gl={{preserveDrawingBuffer: true}}
    >

        <OrbitControls enableZoom={false}
        maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2}
  />
        <Computers />
      <Preload all />
    </Canvas>
  )
}
export default ComputersCanvas