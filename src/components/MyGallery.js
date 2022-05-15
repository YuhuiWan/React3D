import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Scene from '../assets/models/gallery_showroom/Scene';
import { Environment, FirstPersonControls, OrbitControls } from '@react-three/drei'

const MyGallery = () => {
    return (
        <div style={{ width: "100vw", height: "90vh" }}>
          <Canvas>
            <ambientLight intensity={0.3} color={'#fff'} />
            <Suspense fallback={null}>
                <Scene position={[0, -120, 0]} />
            </Suspense>
            <Environment preset={'sunset'} />
            <FirstPersonControls autoForward={true} lookSpeed={0.05} movementSpeed={10} />
            {/* <OrbitControls autoRotate={true} enableZoom={true} enablePan={true} /> */}
          </Canvas>
        </div>
      );
};

export default MyGallery;