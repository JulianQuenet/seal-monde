import { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { Sphere, PointerLockControls } from "@react-three/drei/core";
import { useThree, useFrame } from "@react-three/fiber";
import usePlayerControls from "./Components/inputs";
import { RigidBody, BallCollider } from "@react-three/rapier";
import { Hands } from "./Components/Animatedpistol";


interface controlProps {
  shot:any,
}


export const Controls = (props: controlProps)=>{
const {shot} = props

const [rotate, setRotate] = useState<boolean | undefined>(false)
const playerRef = useRef<any>();
const handsRef = useRef<any>();
const { camera } = useThree();
const { forward, backward, left, right } = usePlayerControls();
const direction = new THREE.Vector3();
const frontVector = new THREE.Vector3();
const sideVector = new THREE.Vector3();
const SPEED = 15.125

useFrame(()=>{
  // Player movement base on camera direction/rotation
  frontVector.set(0, 0, Number(backward) - Number(forward));
  sideVector.set(Number(left) - Number(right), 0, 0);
  direction
    .subVectors(frontVector, sideVector)
    .normalize()
    .multiplyScalar(SPEED)
    .applyEuler(camera.rotation);

    if (playerRef.current) {
        const time = Date.now() * 0.0005;
        const position = playerRef.current.translation();
        // Setting camera position and creating walking/breathing affect
        camera.position.x = position.x;
        camera.position.z = position.z ;
        if (right || left || forward || backward) {
            camera.position.y = position.y + 3.5
            playerRef.current.lockRotations(false)
           
        } else {
          camera.position.y = position.y + Math.sin(time * 7.5) * 0.0095 + 3.5
          playerRef.current.lockRotations(true,true)
        }
        
        playerRef.current.setLinvel(
          { x: direction.x, y: -9.18, z: direction.z },
          true
        );
        }
       setHands()
})

function setHands(){
  const time = Date.now() * 0.00035;
  handsRef.current.rotation.copy(camera.rotation)
  handsRef.current.position.copy(camera.position)
  handsRef.current.translateY(-0.525 + Math.sin(time * 5.5) * 0.0095 )
  handsRef.current.translateZ(-0.0875)
  handsRef.current.translateX(-0.165)
}



return (
    <> 
    <PointerLockControls camera={camera}/>
    <RigidBody
        gravityScale={0}
        colliders={false}
        position={[15, 27, 15]}
        ref={playerRef}
        userData={{
          type:"player",
          health:"100"
        }
        }
      >
        <BallCollider  args={[4]} >
        </BallCollider>
      </RigidBody>
    
       <mesh name="hands" ref={handsRef} >
        <Hands shot={shot} />
    </mesh>
    

    </>
   
)

}