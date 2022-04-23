/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import model from './cone.gltf'
import { useFrame } from '@react-three/fiber'

export default function Cone({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF(model)
  useFrame(() => {
    group.current.rotation.y += 0.01;
    group.current.rotation.z += 0.02;
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.锥体.geometry} material={nodes.锥体.material} position={[0, 0, 0]}>
        <meshStandardMaterial color={'red'} />
      </mesh>
    </group>
  )
}

useGLTF.preload(model)
