/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.14 door_new.glb 
*/

import { useRef } from 'react'
import { useGLTF} from '@react-three/drei'
import { RigidBody, useRevoluteJoint } from "@react-three/rapier";

export function Door1() {
  const { nodes, materials }:any = useGLTF('/door_new.glb')
  const doorRef = useRef<any>();
  const frameRef = useRef<any>();

  const hinge = useRevoluteJoint(frameRef, doorRef, [
    // Position of the joint in bodyA's local space
    [0, 0, 0],
    // Position of the joint in bodyB's local space
    [0, 0, 0],
    // Axis of the joint, expressed in the local-space of
    // the rigid-bodies it is attached to. Cannot be [0,0,0].
    [0, 1, 0]
  ])



  return (
    <group dispose={null} position={[3.5,2.85,0]}>
      <group scale={1.75}>
        <RigidBody userData={{
          joint: hinge
        }} colliders="trimesh" ref={doorRef}>
      <group position={[0.01, 0.004, 0.01]} rotation={[-Math.PI / 2, 0, 0]} scale={0.982}>
          <mesh geometry={nodes.Plane001_Door_0.geometry} material={materials['Door.006']} position={[0.008, 0, -0.832]} />
          <mesh geometry={nodes.Plane001_Glossy_0.geometry} material={materials['Glossy.004']} position={[0.008, 0, -0.832]} />
          <mesh geometry={nodes.Circle002_Glossy_0.geometry} material={materials['Glossy.004']} position={[0.818, 0.043, -0.029]} />
          <mesh geometry={nodes.Plane003_Door_0.geometry} material={materials['Door.006']} position={[0.86, 0.017, -0.05]} />
        </group>
        </RigidBody>
        <RigidBody ref={frameRef} colliders="trimesh" type='fixed'>
        <mesh rotation={[-Math.PI / 2, 0, 0]} geometry={nodes.Plane002_Door_0.geometry} material={materials['Door.006']} position={[-0.02, 0.005, 0]} />
        </RigidBody>
      </group>
    </group>
  )
}

useGLTF.preload('/door_new.glb')
