/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.14 ceiling_light_with_chain.glb 
Author: rhcreations (https://sketchfab.com/rhcreations)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/ceiling-light-with-chain-7467af164bd64d0db09565b70b216e12
Title: Ceiling Light with Chain
*/

import { useRef } from 'react'
import { Box, useGLTF } from '@react-three/drei'
import {  useFrame } from "@react-three/fiber";

export function CeilingLight() {
  const { nodes, materials }:any = useGLTF('/ceiling_light_with_chain.glb')
  const ref = useRef<any>()
  const light1 = useRef<any>()
  const light2 = useRef<any>()
  const light3 = useRef<any>()
 

  useFrame(()=>{
    const time = Date.now() * 0.0005;
    if(ref.current && light3.current){
      ref.current.rotation.z = 0 + Math.sin(time * 1.7) * 0.075
      //Main light
      ref.current.add(light1.current)
      ref.current.add(light1.current.target)
      light1.current.intensity = 45
      light1.current.angle = 0.75
      light1.current.penumbra = 0.25
      //Ambient light
      ref.current.add(light2.current)
      ref.current.add(light2.current.target)
      light2.current.angle = 1.55
      light2.current.intensity = 30
      light2.current.penumbra = 0.3
      light2.current.decay = 2.2
      //Back flash
      light3.current.position.x = 1 + Math.sin(time * 1.7) * 0.25
    }
  })



  return (
    <>
    <spotLight ref={light1} name='main'/>
    <spotLight ref={light2} name="ambient"/>
    <spotLight angle={1.2} intensity={10} penumbra={0.8} position={[1,2,0]} target={light3.current}  name="backflash"/>
    
    <Box position={[1,9,0]} ref={light3}>
      <meshStandardMaterial color="red"/>
    </Box>

    <group dispose={null} position={[1,7,-0.05]}  scale={0.135} ref={ref}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group scale={[3.471, 3.471, 3.205]}>
          <group position={[0, 0, -2.098]} rotation={[-Math.PI, 0, 0]} scale={[0.17, 0.17, 0.184]}>
            <mesh geometry={nodes.Light_Bulb_0.geometry} material={materials['Metal_Material.001']} />
            <mesh geometry={nodes.Light_Bulb_1.geometry} material={materials.Emmision_Material} />
            <mesh geometry={nodes.Light_Bulb_2.geometry} material={materials.Light_Bulb_Glass_Material} />
          </group>
          <mesh geometry={nodes.Ceiling_Light_0.geometry} material={materials.Plastic_Material} />
          <mesh geometry={nodes.Ceiling_Light_1.geometry} material={materials.Metal_Material} />
        </group>
      </group>
    </group>
    </>
  )
}

useGLTF.preload('/ceiling_light_with_chain.glb')
