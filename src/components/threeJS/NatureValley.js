/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/models/NatureValley.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={[1.5, 1.0, 2.5]}>
        <mesh geometry={nodes.mesh_39_1.geometry} material={materials['Material.040']} />
        <mesh geometry={nodes.mesh_39_2.geometry} material={materials['Material.039']} />
        <mesh geometry={nodes.mesh_39_0.geometry} material={materials['Material.038']} />
        <mesh geometry={nodes.mesh_39_4.geometry} material={materials['Material.036']} />
        <mesh geometry={nodes.mesh_39_5.geometry} material={materials['Material.037']} />
        <mesh geometry={nodes.mesh_39_3.geometry} material={materials['Material.041']} />
      </group>
    </group>
  )
}

useGLTF.preload('/NatureValley.gltf')
