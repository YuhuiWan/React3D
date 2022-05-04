import React, { useRef, useState, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import Cone from '../assets/models/Cone';
import { OrbitControls } from '@react-three/drei'

const Box = (props) => {
    // This reference will give us direct access to the mesh
    const mesh = useRef()
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((state, delta) => (mesh.current.rotation.x += 0.01))
    // Return view, these are regular three.js elements expressed in JSX
    return (
      <mesh
        {...props}
        ref={mesh}
        scale={active ? 1.2 : 1}
        onClick={(event) => setActive(!active)}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
      </mesh>
    )
};

const MyCanvas = () => {
    return <Canvas>
      <ambientLight />
      <pointLight position={[-10, 10, 10]} />
      <Box position={[-3, 0, 0]} />
      <Box position={[3, 0, 0]} />
      <Suspense fallback={null}>
          <Cone position={[0, 1, 0]} />
      </Suspense>
      <OrbitControls />
    </Canvas>
};

export { MyCanvas };