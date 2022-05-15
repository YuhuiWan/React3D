import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Scene from '../assets/models/gallery_showroom/Scene';
import { Environment, FirstPersonControls, OrbitControls } from '@react-three/drei'

const MyGallery = () => {
    return (
        <div style={{ width: "100vw", height: "90vh" }}>
          <Canvas>
            <ambientLight intensity={0.3} color={'#fff'} />
            <Suspense fallback={<h2>{'加载中'}</h2>}>
                <Scene position={[0, -120, 0]} />
            </Suspense>
            <Environment preset={'sunset'} background={true} />
            {/* <FirstPersonControls autoForward={true} lookSpeed={0.05} movementSpeed={10} /> */}
            <OrbitControls autoRotate={false} enableZoom={true} enablePan={true} />
          </Canvas>
        </div>
      );
};

export default MyGallery;