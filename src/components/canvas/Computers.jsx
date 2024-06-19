// import {useEffect, useState} from 'react'
// import {Canvas} from "@react-three/fiber"
// import { OrbitControls, useGLTF, Preload } from '@react-three/drei'
// import { Suspense } from 'react'
// import CanvasLoader from '../Loader'
// const Computers = ({ isMobile }) => {
//   const setup = useGLTF('./isometric_room_model/isometic.gltf')
//   return (
//     <mesh rotation={[0,Math.PI /0.2 ,0]}>
//       <hemisphereLight intensity={0.8} groundColor="#7b63fb"/>
//       <pointLight intensity={1} />
//       <spotLight position={[-20,50,10]} angle={0.12} penumbra={1}/>
//       <primitive object={setup.scene}   scale={isMobile ? 0.7 : 1}
//         position={isMobile ? [-1,-2,-1] : [-3,-2,-1]}/>
//     </mesh>
//   )
// }
// const ComputersCanvas = () => {
//   const [isMobile, setIsMobile] = useState(false);
//   useEffect(() => {
//     const mediaQuery = window.matchMedia("(max-width: 400px)");
//     setIsMobile(mediaQuery.matches);
//     const handleMediaQueryChange = (event) => {
//       setIsMobile(event.matches);
//     };
//     mediaQuery.addEventListener("change", handleMediaQueryChange, {passive: true});
//     return () => {
//       mediaQuery.removeEventListener("change", handleMediaQueryChange);
//     };
//   }, []);
//   return (
//     <Canvas
//       frameloop='demand'
//       shadows
//       camera={{position: [10,1,10], fov: 25, rotation: [0,0,0]}}
//       gl={{preserveDrawingBuffer: true}}
//     >
//     <Suspense fallback={<CanvasLoader />}>
//         <OrbitControls enableZoom={false} enableRotate={false}
//         maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2}
//   />
//         <Computers isMobile={isMobile} />
//       <Preload all />
//       </Suspense>
//     </Canvas>
//   )
// }
// export default ComputersCanvas