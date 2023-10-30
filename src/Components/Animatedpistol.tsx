//*
// Auto-generated by: https://github.com/pmndrs/gltfjsx
// Command: npx gltfjsx@6.2.14 fps_pistol_animations.glb 
// Author: Cransh (https://sketchfab.com/ccransh)
// License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
// Source: https://sketchfab.com/3d-models/fps-pistol-animations-0d7a343dcb6f401197a73c91aee93f6d
// Title: FPS pistol animations
// */

import  { useRef, useEffect, useState } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import usePlayerControls from './inputs'
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from "three";
import { RigidBody } from '@react-three/rapier';

interface handsProps{
  shot:any,
}

export function Hands(props:handsProps) {

  const {shot} = props
  const {camera} = useThree()
  const bullPos = new THREE.Vector3();
  const group = useRef<any>()
  const { forward, backward, left, right, reload } = usePlayerControls();
  const { nodes, materials, animations }:any = useGLTF('/fps_pistol_animations.glb')
  const { actions, names, mixer } = useAnimations(animations, group)
  const [currentAnim, setCurrentAnim] = useState<string>("idle")
  const [reloading, setReloading] = useState<Boolean>(false)
  const [fire, setFire] = useState<Boolean>(false)
  const [firstClick, setFirstClick] = useState<Boolean>(true)
  const [count, setCount] = useState<number>(0)

  const anims:any = {
    "idle" : 0,
    "walk" : 1,
    "fire" : 2,
    "reload" : 3,
    "out" : 4
  }

  useEffect(()=>{
    actions[names[anims[currentAnim]]]?.reset().fadeIn(0.25).play()
    mixer.timeScale = 1
    console.log(currentAnim)
    return()=>{
      actions[names[anims[currentAnim]]]?.fadeOut(0.25)
      
    }
   }, [currentAnim])

   useEffect(()=>{
    function handleClick(){
      if(firstClick){
        setFirstClick(false)
        return
      }
      setFire(true)
      setTimeout(()=>{
      setFire(false)
      }, 16)
    }
  
    window.addEventListener("click", handleClick)

    return ()=>{
      window.removeEventListener('click', handleClick)
    }
    
   })

  useFrame(()=>{
    bullPos.set(camera.position.x+0.05, camera.position.y-0.25, camera.position.z)
    if ((right || left || forward || backward) && !reloading &&!fire){
       setCurrentAnim("walk")
       if(reload){
        setReloading(true)
        setCurrentAnim("reload")
        setTimeout(()=>{
          setReloading(false)
        }, 1200)
        setCount(0)
      }
      if(fire && !reloading && !firstClick){
        setCurrentAnim("fire") 
       }
    }else{
      if(!reloading && !fire){
        setCurrentAnim("idle")
      }
    }
    if(reload && !reloading){
      setReloading(true)
      setCurrentAnim("reload")
      setTimeout(()=>{
        setReloading(false)
      }, 1200)
      setCount(0)
    }
    if(fire && !reloading && !firstClick){
     setCurrentAnim("fire") 
     setCount(count + 1)
     const bullet={
      id : Date.now(),
      direction: camera.rotation,
      position: bullPos
     }
      shot(bullet)
    }
    if(count === 9){
      setReloading(true)
      setCurrentAnim("out")
      setTimeout(()=>{
        setReloading(false)
      }, 1000)
      setCount(0)
  }
  })


  return (
    <group ref={group} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="3ab9f780f2294ec8ba398c31f25c6b54fbx" rotation={[Math.PI / 2, 3.08, 0]} scale={0.035}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="arms" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                <group name="Armature" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <group name="Object_6">
                    <primitive object={nodes._rootJoint} />
                    <group name="Object_8" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                    <group name="Object_90" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                    <group name="Object_92" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                    <group name="Object_94" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                    <skinnedMesh name="Object_9" geometry={nodes.Object_9.geometry} material={materials.arms} skeleton={nodes.Object_9.skeleton} />
                    <skinnedMesh  name="Object_91" geometry={nodes.Object_91.geometry} material={materials.Material} skeleton={nodes.Object_91.skeleton} />
                    <skinnedMesh  name="Object_93" geometry={nodes.Object_93.geometry} material={materials.Material} skeleton={nodes.Object_93.skeleton} />
                    <skinnedMesh  name="Object_95" geometry={nodes.Object_95.geometry} material={materials.Material} skeleton={nodes.Object_95.skeleton} />
                  </group>
                </group>
                <group name="xd_frame" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                <group name="xd_frame001" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                <group name="xd_frame002" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/fps_pistol_animations.glb')
