/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.14 room.glb 
Author: Qifan Zhang (https://sketchfab.com/qifanzhang)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/an-old-cheap-room-in-chinatown-9c2ec26be3cb4d9b91d51755e7210fdd
Title: An Old Cheap Room in Chinatown
*/

import { useEffect, useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody, useRevoluteJoint } from '@react-three/rapier'

interface roomProps{
  door : Boolean;
}



export function Room(props:roomProps) {
  const { nodes, materials, scene }:any = useGLTF('/room.glb')
  const {door} = props



  function DoorBack(){
    const frameRef = useRef<any>()
    const doorRef = useRef<any>()
    const hinge = useRevoluteJoint(frameRef, doorRef, [
      // Position of the joint in bodyA's local space
      [0, 0, 0],
      // Position of the joint in bodyB's local space
      [0, 0, 0],
      // Axis of the joint, expressed in the local-space of
      // the rigid-bodies it is attached to. Cannot be [0,0,0].
      [0, 1, 0]
    ])

    return(
      <group  scale={[1, 1.1, 1.07]}>
      <RigidBody colliders="trimesh" ref={doorRef}>
      <group rotation={[-Math.PI / 2, 0, 0]} position={[0.002, 0.004, 0]} scale={0.985}>
      <mesh geometry={nodes.Plane001_Door_0.geometry} material={materials['Door.006']} position={[0.008, 0, -0.832]} />
          <mesh geometry={nodes.Plane001_Glossy_0.geometry} material={materials['Glossy.004']} position={[0.008, 0, -0.832]} />
          <mesh geometry={nodes.Circle002_Glossy_0.geometry} material={materials['Glossy.004']} position={[0.818, 0.043, -0.029]} />
          <mesh geometry={nodes.Plane003_Door_0.geometry} material={materials['Door.006']} position={[0.86, 0.017, -0.05]} />
      </group>
      </RigidBody>
      <RigidBody type="fixed" colliders="trimesh" ref={frameRef}>
      <mesh rotation={[-Math.PI / 2, 0, 0]} geometry={nodes.Plane002_Door_0002.geometry} material={materials['Door.002']} position={[-0.02, 0.005, 0]} />
      </RigidBody>
    </group>
    )
  }

  function DoorFront(){
    const frameRef = useRef<any>()
    const doorRef = useRef<any>()
    const hinge = useRevoluteJoint(frameRef, doorRef, [
      // Position of the joint in bodyA's local space
      [0, 0, 0],
      // Position of the joint in bodyB's local space
      [0, 0, 0],
      // Axis of the joint, expressed in the local-space of
      // the rigid-bodies it is attached to. Cannot be [0,0,0].
      [0, 1, 0]
    ])

    return(
      <group scale={[1.11, 1.1, 1.14]}>
        <RigidBody colliders="trimesh" ref={doorRef}>
      <group rotation={[-Math.PI / 2, 0, 0]} position={[0.002, 0.004, 0]} scale={0.985}>
        <mesh geometry={nodes.Plane001_Door_0001.geometry} material={materials['Door.001']} position={[0.008, 0, -0.832]} />
        <mesh geometry={nodes.Plane001_Glossy_0001.geometry} material={materials['Glossy.001']} position={[0.008, 0, -0.832]} />
        <mesh geometry={nodes.Circle002_Glossy_0001.geometry} material={materials['Glossy.001']} position={[0.818, 0.043, -0.029]} />
        <mesh geometry={nodes.Plane003_Door_0001.geometry} material={materials['Door.001']} position={[0.86, 0.017, -0.05]} />
      </group>
      </RigidBody>
     <RigidBody type='fixed' colliders="trimesh" ref={frameRef}>
      <mesh rotation={[-Math.PI / 2, 0, 0]} geometry={nodes.Plane002_Door_0001.geometry} material={materials['Door.001']} position={[-0.02, 0.005, 0]} />
      </RigidBody>
    </group>
    )
  }

  function DoorBathroom(){

    return(
      <group scale={[1.11, 1.1, 1.14]}>
        {door && <RigidBody type="fixed" colliders="trimesh" >
      <group rotation={[-Math.PI / 2, 0, 0]} position={[0.002, 0.004, 0]} scale={0.985}>
        <mesh geometry={nodes.Plane001_Door_0001.geometry} material={materials['Door.001']} position={[0.008, 0, -0.832]} />
        <mesh geometry={nodes.Plane001_Glossy_0001.geometry} material={materials['Glossy.001']} position={[0.008, 0, -0.832]} />
        <mesh geometry={nodes.Circle002_Glossy_0001.geometry} material={materials['Glossy.001']} position={[0.818, 0.043, -0.029]} />
        <mesh geometry={nodes.Plane003_Door_0001.geometry} material={materials['Door.001']} position={[0.86, 0.017, -0.05]} />
      </group>
      </RigidBody>}
     <RigidBody type='fixed' colliders="trimesh" >
     <mesh rotation={[-Math.PI / 2, 0, 0]} geometry={nodes.Plane002_Door_0.geometry} material={materials['Door.006']} position={[-0.02, 0.005, 0]} />
      </RigidBody>
    </group>
    )
  }

  return (
    <group  dispose={null} scale={2.5} position={[0,0,0]}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={86.957}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.001}>
          <RigidBody type='fixed' colliders="trimesh">
          <group position={[-78.792, -0.63, -8.04]} rotation={[0, 1.571, 0]} scale={1.505}>
            <mesh geometry={nodes.bathtub_M_Bathroom_0.geometry} material={materials.M_Bathroom} position={[-5.342, 0.418, 52.357]} rotation={[0, -1.571, 0]} scale={6.645} />
            {/* <mesh geometry={nodes.curtain_M_Bathroom_0.geometry} material={materials.M_Bathroom} position={[-5.431, 1.217, 52.366]} rotation={[0, -1.571, 0]} scale={0.166} /> */}
            <mesh geometry={nodes.pCube40_M_Bathroom_0.geometry} material={materials.M_Bathroom} />
            <mesh geometry={nodes.pCube48_M_Bathroom_0.geometry} material={materials.M_Bathroom} position={[-16.494, 7.508, 28.773]} scale={[0.574, 0.079, 1.7]} />
            <mesh geometry={nodes.pCylinder10_M_Bathroom_0.geometry} material={materials.M_Bathroom} position={[-16.504, 7.563, 28.779]} scale={[0.219, 0.015, 0.219]} />
            <mesh geometry={nodes.pCylinder13_M_Bathroom_0.geometry} material={materials.M_Bathroom} position={[-2.606, 0, 29.304]} />
            <mesh geometry={nodes.pCylinder14_M_Bathroom_0.geometry} material={materials.M_Bathroom} position={[-2.606, 0, 28.233]} rotation={[0, 0, -Math.PI]} scale={-1} />
            <mesh geometry={nodes.pCylinder3_M_Bathroom_0.geometry} material={materials.M_Bathroom} position={[-24.132, 19.847, 18.442]} rotation={[Math.PI / 2, 0, Math.PI]} scale={[0.227, 18.357, 0.227]} />
            <mesh geometry={nodes.pCylinder5_M_Bathroom_0.geometry} material={materials.M_Bathroom} />
            <mesh geometry={nodes.pCylinder67_M_Bathroom_0.geometry} material={materials.M_Bathroom} position={[-22.258, 19.847, 36.605]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.227, 9.361, 0.227]} />
            <mesh geometry={nodes.pCylinder9_M_Bathroom_0.geometry} material={materials.M_Bathroom} position={[-17.171, 9.189, 28.784]} scale={0.026} />
            <mesh geometry={nodes.pSphere5_M_Bathroom_0.geometry} material={materials.M_Bathroom} position={[-18.336, 8.493, 28.771]} scale={[1.402, 0.978, 1.402]} />
          </group>
          </RigidBody>
          <RigidBody colliders="trimesh" type="fixed">
          <group scale={10}>
            <group position={[3.83, -0.002, 2.548]} scale={0.145}>
              <mesh geometry={nodes.pCube52_M_Bedroom_0.geometry} material={materials.M_Bedroom} />
              <mesh geometry={nodes.pCube53_M_Bedroom_0.geometry} material={materials.M_Bedroom} />
              <mesh geometry={nodes.pCylinder17_M_Bedroom_0.geometry} material={materials.M_Bedroom} position={[-26.374, 0.012, -17.551]} scale={6.887} />
              <mesh geometry={nodes.pCylinder68_M_Bedroom_0.geometry} material={materials.M_Bedroom} position={[-26.374, 0.012, -2.293]} scale={6.887} />
              <mesh geometry={nodes.comforter_M_Bedroom_0.geometry} material={materials.M_Bedroom} scale={0.1} />
              <mesh geometry={nodes.pillow_M_Bedroom_0.geometry} material={materials.M_Bedroom} position={[0, 0, -0.35]} scale={0.1} />
            </group>
            <mesh geometry={nodes.backpack_M_Bedroom_0.geometry} material={materials.M_Bedroom} position={[0.927, -0.401, 2.515]} rotation={[2.803, 1.437, -2.368]} scale={0.013} />
            <mesh geometry={nodes.chair_M_Bedroom_0.geometry} material={materials.M_Bedroom} />
            <mesh geometry={nodes.clock_M_Bedroom_0.geometry} material={materials.M_Bedroom} position={[-0.623, 1.925, 3.683]} scale={0.211} />
            <mesh geometry={nodes.Desk_M_Bedroom_0.geometry} material={materials.M_Bedroom} position={[0.577, 0, -0.244]} />
            <mesh geometry={nodes.Drawer_M_Bedroom_0.geometry} material={materials.M_Bedroom} />
            <mesh geometry={nodes.nightstand_M_Bedroom_0.geometry} material={materials.M_Bedroom} position={[0.623, 0.065, 0.805]} scale={0.788} />
            <mesh geometry={nodes.pCube30_M_Bedroom_0.geometry} material={materials.M_Bedroom} />
            <mesh geometry={nodes.pCube31_M_Bedroom_0.geometry} material={materials.M_Bedroom} />
            <mesh geometry={nodes.pCube32_M_Bedroom_0.geometry} material={materials.M_Bedroom} />
            <mesh geometry={nodes.pCube33_M_Bedroom_0.geometry} material={materials.M_Bedroom} />
            <mesh geometry={nodes.pCube34_M_Bedroom_0.geometry} material={materials.M_Bedroom} />
            <mesh geometry={nodes.shirt1_M_Bedroom_0.geometry} material={materials.M_Bedroom} scale={0.025} />
            <mesh geometry={nodes.shirt2_M_Bedroom_0.geometry} material={materials.M_Bedroom} scale={0.025} />
            <mesh geometry={nodes.trashcan_M_Bedroom_0.geometry} material={materials.M_Bedroom} position={[0.098, 0.131, 2.588]} scale={[1.065, 1.325, 1.065]} />
          </group>
          </RigidBody>
          <RigidBody colliders="cuboid">
          <group scale={10}>
            <mesh geometry={nodes.cabinets_M_Kitchen_0.geometry} material={materials.M_Kitchen} />
            <mesh geometry={nodes.pCube104_M_Kitchen_0.geometry} material={materials.M_Kitchen} position={[2.223, 0.563, -2.783]} rotation={[0, 0, Math.PI / 2]} scale={[1.79, 0.244, 0.18]} />
            <mesh geometry={nodes.pCube105_M_Kitchen_0.geometry} material={materials.M_Kitchen} position={[2.407, 0.563, -2.783]} rotation={[0, 0, Math.PI / 2]} scale={[1.79, 0.244, 0.18]} />
            <mesh geometry={nodes.pCube76_M_Kitchen_0.geometry} material={materials.M_Kitchen} position={[-1.802, 0.868, -2.783]} scale={[1.79, 0.244, 0.18]} />
            <mesh geometry={nodes.pCube79_M_Kitchen_0.geometry} material={materials.M_Kitchen} position={[-1.004, 0.709, -2.783]} scale={[1.79, 0.244, 0.18]} />
            <mesh geometry={nodes.pCube80_M_Kitchen_0.geometry} material={materials.M_Kitchen} position={[-0.086, 0.913, -2.783]} scale={[1.79, 0.244, 0.18]} />
            <mesh geometry={nodes.pCube81_M_Kitchen_0.geometry} material={materials.M_Kitchen} position={[-0.086, 0.716, -2.783]} scale={[1.79, 0.244, 0.18]} />
            <mesh geometry={nodes.pCube82_M_Kitchen_0.geometry} material={materials.M_Kitchen} position={[0.958, 0.716, -2.783]} scale={[1.79, 0.244, 0.18]} />
            <mesh geometry={nodes.pCube83_M_Kitchen_0.geometry} material={materials.M_Kitchen} position={[0.958, 0.913, -2.783]} scale={[1.79, 0.244, 0.18]} />
            <mesh geometry={nodes.pCube84_M_Kitchen_0.geometry} material={materials.M_Kitchen} />
            <mesh geometry={nodes.pCube85_M_Kitchen_0.geometry} material={materials.M_Kitchen} position={[-2.618, 2.795, -3.139]} rotation={[0, 0, -Math.PI / 2]} scale={[1.182, 0.191, 0.101]} />
            <mesh geometry={nodes.pCube86_M_Kitchen_0.geometry} material={materials.M_Kitchen} position={[-1.571, 2.118, -3.139]} rotation={[0, 0, -Math.PI / 2]} scale={[1.182, 0.191, 0.101]} />
            <mesh geometry={nodes.pCube91_M_Kitchen_0.geometry} material={materials.M_Kitchen} position={[-1.437, 2.118, -3.139]} rotation={[0, 0, -Math.PI / 2]} scale={[1.182, 0.191, 0.101]} />
            <mesh geometry={nodes.pCube93_M_Kitchen_0.geometry} material={materials.M_Kitchen} position={[-0.237, 2.118, -3.139]} rotation={[0, 0, -Math.PI / 2]} scale={[1.182, 0.191, 0.101]} />
            <mesh geometry={nodes.pCube94_M_Kitchen_0.geometry} material={materials.M_Kitchen} position={[-0.371, 2.118, -3.139]} rotation={[0, 0, -Math.PI / 2]} scale={[1.182, 0.191, 0.101]} />
            <mesh geometry={nodes.pCube96_M_Kitchen_0.geometry} material={materials.M_Kitchen} position={[0.356, 2.687, -3.139]} rotation={[0, 0, -Math.PI / 2]} scale={[1.182, 0.191, 0.101]} />
            <mesh geometry={nodes.microwave_M_Kitchen_0.geometry} material={materials.M_Kitchen} position={[0.053, -0.003, 0]} />
            <mesh geometry={nodes.plank_M_Kitchen_0.geometry} material={materials.M_Kitchen} />
            <mesh geometry={nodes.Refrigirator_M_Kitchen_0.geometry} material={materials.M_Kitchen} />
            <mesh geometry={nodes.sink_M_Kitchen_0.geometry} material={materials.M_Kitchen} />
            <mesh geometry={nodes.stove_M_Kitchen_0.geometry} material={materials.M_Kitchen} />
            <mesh geometry={nodes.ventilator_M_Kitchen_0.geometry} material={materials.M_Kitchen} />
          </group>
          </RigidBody>
          <group scale={10}>
            <mesh geometry={nodes.pCube106_M_KitchenStuff_0.geometry} material={materials.M_KitchenStuff} />
            <mesh geometry={nodes.pCube107_M_KitchenStuff_0.geometry} material={materials.M_KitchenStuff} position={[0.564, 1.754, -3.672]} scale={[0.169, 1.707, 0.143]} />
            <mesh geometry={nodes.pCube111_M_KitchenStuff_0.geometry} material={materials.M_KitchenStuff} />
            <mesh geometry={nodes.pCube113_M_KitchenStuff_0.geometry} material={materials.M_KitchenStuff} position={[0.731, 1.128, -3.058]} rotation={[0, -0.526, 0]} scale={[0.309, 0.381, 0.309]} />
            <mesh geometry={nodes.pCube118_M_KitchenStuff_0.geometry} material={materials.M_KitchenStuff} position={[0.09, 1.127, -3.585]} scale={[0.769, 1.691, 0.792]} />
            <mesh geometry={nodes.pCube119_M_KitchenStuff_0.geometry} material={materials.M_KitchenStuff} position={[-0.042, 1.127, -3.539]} scale={[0.769, 1.691, 0.792]} />
            <mesh geometry={nodes.pCube120_M_KitchenStuff_0.geometry} material={materials.M_KitchenStuff} position={[0.296, 1.104, -3.552]} scale={[0.54, 1.24, 0.556]} />
            <mesh geometry={nodes.pCube121_M_KitchenStuff_0.geometry} material={materials.M_KitchenStuff} />
            <mesh geometry={nodes.pCube122_M_KitchenStuff_0.geometry} material={materials.M_KitchenStuff} />
            <mesh geometry={nodes.pCube123_M_KitchenStuff_0.geometry} material={materials.M_KitchenStuff} />
            <mesh geometry={nodes.pCube124_M_KitchenStuff_0.geometry} material={materials.M_KitchenStuff} />
            <mesh geometry={nodes.pCube129_M_KitchenStuff_0.geometry} material={materials.M_KitchenStuff} position={[0.781, 1.754, -3.672]} scale={[0.169, 1.707, 0.143]} />
            <mesh geometry={nodes.pCube130_M_KitchenStuff_0.geometry} material={materials.M_KitchenStuff} position={[0.997, 1.754, -3.672]} scale={[0.169, 1.707, 0.143]} />
            <mesh geometry={nodes.pCube131_M_KitchenStuff_0.geometry} material={materials.M_KitchenStuff} position={[1.214, 1.754, -3.672]} scale={[0.169, 1.707, 0.143]} />
            <mesh geometry={nodes.pCylinder57_M_KitchenStuff_0.geometry} material={materials.M_KitchenStuff} position={[0.201, 1.174, -3.61]} scale={[0.409, 1.101, 0.409]} />
            <mesh geometry={nodes.pCylinder58_M_KitchenStuff_0.geometry} material={materials.M_KitchenStuff} position={[0.077, 1.109, -3.431]} scale={[0.452, 0.621, 0.452]} />
            <mesh geometry={nodes.pCylinder59_M_KitchenStuff_0.geometry} material={materials.M_KitchenStuff} position={[0.196, 1.109, -3.446]} scale={[0.452, 0.621, 0.452]} />
            <mesh geometry={nodes.pCylinder62_M_KitchenStuff_0.geometry} material={materials.M_KitchenStuff} position={[-0.01, 1.174, -3.642]} scale={[0.409, 1.101, 0.409]} />
            <mesh geometry={nodes.polySurface7_M_KitchenStuff_0.geometry} material={materials.M_KitchenStuff} position={[0.714, -0.4, 0.647]} rotation={[0, 0.226, 0]} scale={0.025} />
            <mesh geometry={nodes.pSphere10_M_KitchenStuff_0.geometry} material={materials.M_KitchenStuff} position={[-0.83, 0.988, -3.18]} rotation={[0, 0, -0.505]} scale={[1.252, 1.241, 1.252]} />
            <mesh geometry={nodes.pSphere11_M_KitchenStuff_0.geometry} material={materials.M_KitchenStuff} position={[-1.092, 0.99, -3.37]} rotation={[1.254, -0.223, -0.073]} scale={[1.261, 0.34, 1.261]} />
            <mesh geometry={nodes.pSphere12_M_KitchenStuff_0.geometry} material={materials.M_KitchenStuff} position={[-1.196, 0.99, -3.316]} rotation={[0.949, -0.079, -0.467]} scale={[1.261, 0.34, 1.261]} />
            <mesh geometry={nodes.pSphere2_M_KitchenStuff_0.geometry} material={materials.M_KitchenStuff} position={[-1.162, 0.915, -3.054]} rotation={[0, 0, 0.075]} scale={[1.798, 0.485, 1.798]} />
            <mesh geometry={nodes.pSphere3_M_KitchenStuff_0.geometry} material={materials.M_KitchenStuff} position={[-1.194, 0.929, -3.054]} rotation={[0, 0, 0.075]} scale={[1.798, 0.485, 1.798]} />
            <mesh geometry={nodes.pSphere4_M_KitchenStuff_0.geometry} material={materials.M_KitchenStuff} position={[-1.07, 0.986, -3.054]} rotation={[0, 0, -0.235]} scale={[1.798, 0.485, 1.798]} />
            <mesh geometry={nodes.pSphere5_M_KitchenStuff_0.geometry} material={materials.M_KitchenStuff} position={[-1.136, 1.034, -3.054]} rotation={[0, 0, -0.235]} scale={[1.798, 0.485, 1.798]} />
            <mesh geometry={nodes.pSphere6_M_KitchenStuff_0.geometry} material={materials.M_KitchenStuff} position={[-1.092, 1.049, -3.054]} rotation={[0, 0, -0.235]} scale={[1.798, 0.485, 1.798]} />
            <mesh geometry={nodes.pSphere7_M_KitchenStuff_0.geometry} material={materials.M_KitchenStuff} position={[-0.738, 0.933, -2.985]} rotation={[0, 0, 0.336]} scale={[1.066, 0.44, 1.066]} />
            <mesh geometry={nodes.pSphere8_M_KitchenStuff_0.geometry} material={materials.M_KitchenStuff} position={[-0.828, 0.979, -2.93]} rotation={[-0.335, -0.023, 0.255]} scale={[1.066, 0.835, 1.066]} />
            <mesh geometry={nodes.pSphere9_M_KitchenStuff_0.geometry} material={materials.M_KitchenStuff} position={[-1.011, 0.914, -3.296]} scale={[0.582, 0.577, 0.582]} />
            <mesh geometry={nodes.polySurface37_M_KitchenStuff_0.geometry} material={materials.M_KitchenStuff} />
            <mesh geometry={nodes.polySurface38_M_KitchenStuff_0.geometry} material={materials.M_KitchenStuff} />
            <mesh geometry={nodes.polySurface39_M_KitchenStuff_0.geometry} material={materials.M_KitchenStuff} />
            <mesh geometry={nodes.polySurface40_M_KitchenStuff_0.geometry} material={materials.M_KitchenStuff} />
            <mesh geometry={nodes.polySurface42_M_KitchenStuff_0.geometry} material={materials.M_KitchenStuff} />
            <mesh geometry={nodes.polySurface43_M_KitchenStuff_0.geometry} material={materials.M_KitchenStuff} />
          </group>
          <group scale={10}>
            <mesh geometry={nodes.AC_M_LivingRoom_0.geometry} material={materials.M_LivingRoom} />
            <mesh geometry={nodes.books_M_LivingRoom_0.geometry} material={materials.M_LivingRoom} position={[2.717, 0.055, 3.96]} rotation={[Math.PI, -1.565, Math.PI]} />
            <mesh geometry={nodes.books1_M_LivingRoom_0.geometry} material={materials.M_LivingRoom} />
            <mesh geometry={nodes.FOX_M_LivingRoom_0.geometry} material={materials.M_LivingRoom} scale={0.1} />
            <mesh geometry={nodes.notes_M_LivingRoom_0.geometry} material={materials.M_LivingRoom} />
            <mesh geometry={nodes.pasted__polySurface26_M_LivingRoom_0.geometry} material={materials.M_LivingRoom} position={[1.113, -0.809, 0.412]} />
            <mesh geometry={nodes.phone_M_LivingRoom_0.geometry} material={materials.M_LivingRoom} position={[3.995, 0.135, 1.642]} scale={0.014} />
            <mesh geometry={nodes.Socket10_M_LivingRoom_0.geometry} material={materials.M_LivingRoom} position={[0.83, 0.841, -2.548]} rotation={[0, 1.571, 0]} scale={0.013} />
            <mesh geometry={nodes.Socket8_M_LivingRoom_0.geometry} material={materials.M_LivingRoom} position={[-4.107, 1.276, 3.57]} rotation={[-Math.PI, 0, -Math.PI]} scale={0.013} />
            <mesh geometry={nodes.Socket9_M_LivingRoom_0.geometry} material={materials.M_LivingRoom} position={[6.224, 0.841, -0.04]} scale={0.013} />
            <mesh geometry={nodes.Switch3_M_LivingRoom_0.geometry} material={materials.M_LivingRoom} position={[-4.257, 1.276, 3.57]} rotation={[-Math.PI, 0, -Math.PI]} scale={0.013} />
            <mesh geometry={nodes.Switch4_M_LivingRoom_0.geometry} material={materials.M_LivingRoom} position={[-2.632, 0.953, 0.367]} rotation={[0, -1.571, 0]} scale={0.013} />
            <mesh geometry={nodes.tissue_box_M_LivingRoom_0.geometry} material={materials.M_LivingRoom} position={[4.084, -0.013, 0.901]} rotation={[0, 0.119, 0]} scale={0.018} />
          </group>
          <RigidBody colliders="trimesh" type='fixed'>
          <group  scale={10}>
            <group position={[-3.982, -0.022, 0]} rotation={[-Math.PI, 0.016, -Math.PI]} scale={0.021}>
              <mesh receiveShadow geometry={nodes.theDoormat_M_MainParts_0.geometry} material={materials.M_MainParts} position={[-8.757, 0, 0.143]} />
            </group>
            <group position={[0, 0, 0.239]}>
              <mesh receiveShadow geometry={nodes.polySurface13_M_MainParts_0.geometry} material={materials.M_MainParts} />
              <mesh receiveShadow geometry={nodes.polySurface15_M_MainParts_0.geometry} material={materials.M_MainParts} />
              <mesh receiveShadow geometry={nodes.polySurface17_M_MainParts_0.geometry} material={materials.M_MainParts} />
              <mesh receiveShadow geometry={nodes.polySurface18_M_MainParts_0.geometry} material={materials.M_MainParts} />
              <mesh receiveShadow geometry={nodes.polySurface19_M_MainParts_0.geometry} material={materials.M_MainParts} />
              <mesh receiveShadow geometry={nodes.polySurface20_M_MainParts_0.geometry} material={materials.M_MainParts} />
              <mesh receiveShadow geometry={nodes.polySurface21_M_MainParts_0.geometry} material={materials.M_MainParts} />
              <mesh receiveShadow geometry={nodes.polySurface22_M_MainParts_0.geometry} material={materials.M_MainParts} />
            </group>
            <group position={[1.048, 0, 1.026]} rotation={[0, 1.571, 0]}>
              <mesh receiveShadow geometry={nodes.polySurface23_M_MainParts_0.geometry} material={materials.M_MainParts} position={[0, 0, 0.005]} />
              <mesh receiveShadow geometry={nodes.polySurface25_M_MainParts_0.geometry} material={materials.M_MainParts} />
              <mesh receiveShadow geometry={nodes.polySurface27_M_MainParts_0.geometry} material={materials.M_MainParts} />
              <mesh receiveShadow geometry={nodes.polySurface28_M_MainParts_0.geometry} material={materials.M_MainParts} />
              <mesh receiveShadow geometry={nodes.polySurface29_M_MainParts_0.geometry} material={materials.M_MainParts} />
              <mesh receiveShadow geometry={nodes.polySurface30_M_MainParts_0.geometry} material={materials.M_MainParts} position={[0.205, 0, 0.252]} rotation={[0, -0.065, 0]} />
              <mesh receiveShadow geometry={nodes.polySurface31_M_MainParts_0.geometry} material={materials.M_MainParts} position={[0.196, 0, 0.23]} rotation={[0, -0.065, 0]} />
              <mesh receiveShadow geometry={nodes.polySurface32_M_MainParts_0.geometry} material={materials.M_MainParts} position={[0.172, 1.415, 3.674]} rotation={[0, -0.31, 0]} />
            </group>
            <mesh receiveShadow geometry={nodes.Base_M_MainParts_0.geometry} material={materials.M_MainParts} />
            <mesh receiveShadow geometry={nodes.bathroom_wall_M_MainParts_0.geometry} material={materials.M_MainParts} />
            <mesh receiveShadow geometry={nodes.polySurface35_M_MainParts_0.geometry} material={materials.M_MainParts} />
            <mesh receiveShadow geometry={nodes.polySurface33_M_MainParts_0.geometry} material={materials.M_MainParts} />
            <mesh receiveShadow geometry={nodes.wallCloset_M_MainParts_0.geometry} material={materials.M_MainParts} />
            <mesh receiveShadow geometry={nodes.window_edge_M_MainParts_0.geometry} material={materials.M_MainParts} />
          </group>
          </RigidBody>
          <group scale={10}>
            <mesh geometry={nodes.pCube126_M_KitchenStuff_0.geometry} material={materials.M_KitchenStuff} />
            <mesh geometry={nodes.pCylinder53_M_KitchenStuff_0.geometry} material={materials.M_KitchenStuff} position={[-3.113, 2.321, -3.014]} scale={[0.611, 1.756, 0.611]} />
            <mesh geometry={nodes.pCylinder55_M_KitchenStuff_0.geometry} material={materials.M_KitchenStuff} position={[-2.033, 1.213, -3.562]} scale={[0.611, 1.756, 0.611]} />
            <mesh geometry={nodes.pCylinder56_M_KitchenStuff_0.geometry} material={materials.M_KitchenStuff} position={[-1.893, 1.213, -3.496]} scale={[0.611, 1.756, 0.611]} />
            <mesh geometry={nodes.pCylinder60_M_KitchenStuff_0.geometry} material={materials.M_KitchenStuff} position={[0.183, 1.073, -3.301]} scale={0.283} />
            <mesh geometry={nodes.pCylinder61_M_KitchenStuff_0.geometry} material={materials.M_KitchenStuff} position={[0.253, 1.073, -3.278]} scale={0.283} />
            <mesh geometry={nodes.pCylinder63_M_KitchenStuff_0.geometry} material={materials.M_KitchenStuff} />
            <mesh geometry={nodes.polySurface41_M_KitchenStuff_0.geometry} material={materials.M_KitchenStuff} />
            <mesh geometry={nodes.polySurface16_M_MainParts_0.geometry} material={materials.M_MainParts} />
            <mesh geometry={nodes.polySurface24_M_MainParts_0.geometry} material={materials.M_MainParts} position={[0.004, 0, 0]} />
            <mesh geometry={nodes.polySurface24_M_MainParts_0001.geometry} material={materials.M_MainParts} position={[4.754, 1.384, 1.015]} rotation={[0, -0.31, 0]} />
            <mesh geometry={nodes.polySurface34_M_MainParts_0.geometry} material={materials.M_MainParts} />
            <mesh geometry={nodes.polySurface36_M_MainParts_0.geometry} material={materials.M_MainParts} />
          </group>
        </group>
      </group>
     
     <mesh position={[-2.999, 1.1655, -2.025]} rotation={[0, Math.PI, 0]}>
      <DoorBack />
      </mesh>
      
      <mesh position={[-4, 1.227, -0.435]} rotation={[0, -Math.PI / 2, 0]}>
        <DoorFront />
      </mesh>

       <mesh position={[-2.382, 1.234, 1.481]}>
       <DoorBathroom />
      </mesh>

    </group>
  )
}

useGLTF.preload('/room.glb')
