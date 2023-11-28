import { Suspense, useEffect, useState, useRef } from 'react'
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { Controls } from "./Controls";
import Scene from './Scene';
import { Stars } from '@react-three/drei';
import { Book1, Book2, Menu } from './Components/Overlays';
import './index.css'

function Game() {
  const [bullets, setBullets] = useState<any>([])
  const [show, setShow] = useState<Boolean>(false)
  const [diary1, setDiary1] = useState<Boolean>(false)
  const [openSafe, setOpenSafe] = useState<Boolean>(false)
  const [deja, setDeja] = useState<Boolean>(false)
  const [diary2, setDiary2] = useState<Boolean>(false)

const onFire = (bullet:any) => {
    setBullets((bullets:any) => [...bullets, bullet]);
  };


 const finHit = (hitId:any) => {
    setBullets((hits:any) => hits.filter((h:any) => h.id !== hitId));
  };


 
  return(
    <>
    <Canvas frameloop='demand' shadows camera={{ fov: 50, position: [5, 3, 2] }}>
      {/* <ambientLight intensity={0.5}/> */}
      {/* <fog attach="fog" args={["0xDFE9F3", 0.0, 25]}/> */}
    {/* <directionalLight
        position={[0, 5, 0]}
        castShadow
        shadow-mapSize={1024}
      /> */}
    <color attach="background" args={["black"]} />
    <Suspense>
    <Physics updateLoop="independent" >
     <Scene projectiles={bullets} finHit={finHit} setShow={setShow} 
     openSafe={openSafe} diary1={setDiary1}
     diary2={setDiary2}
     />
     <Controls shot={onFire} show={show} deja={deja}/>
    </Physics>
    </Suspense>
    <Stars />
    </Canvas>
    {(show && !deja) && <Menu deja={deja} setShow={setShow} setOpenSafe={setOpenSafe} setDeja={setDeja} />}
    { diary1 && <Book1 setDiary1={setDiary1} />}
    {diary2 && <Book2 setDiary2={setDiary2} />}
    </>
  )
  
}

export default Game
