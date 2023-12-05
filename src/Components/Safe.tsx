/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.14 safe.glb 
*/

import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import usePlayerControls from './inputs'


interface safeProps{
  setShow : any
  openSafe : Boolean
}

export function Safe(props : safeProps) {
  const {setShow, openSafe} = props
  const {interact} = usePlayerControls()
  const { nodes, materials }:any = useGLTF('/safe.glb')
  const [canInteract, setCanInteract] = useState<Boolean>(false)
  const ref = useRef<any>()
  const door = useRef<any>()
  const {camera} = useThree()

  useFrame(()=>{
    if(ref.current && canInteract){
      const position = ref.current.position
      const distance = position.distanceTo(camera.position)
      if(distance < 3.3 && interact){
       setShow(true)
       setCanInteract(false)
      }
    }

    if(openSafe){
      door.current.rotation.z +=0.03
     } 
  })

  function onHover(){
      if(ref.current  ){
      setCanInteract(true)
      } 
      }
    
 


  return (
    <group dispose={null} scale={0.01} position={[5.5,2.3,-7.86]} ref={ref} onPointerOver={onHover}> 
      <mesh geometry={nodes.Object_2.geometry} material={materials['Safe.001']} rotation={[-Math.PI / 2, 0, 0]} scale={1.658} />
      <group position={[0, 0, -5.96]} rotation={[-Math.PI / 2, 0, 0]} scale={1.658}>
        <mesh geometry={nodes.Door.geometry} material={materials['Safe.002']} position={[26.339, -33.497, 23.974]} ref={door}/>
      </group>
    </group>
  )
}

useGLTF.preload('/safe.glb')



