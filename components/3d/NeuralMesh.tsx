"use client"

import { useRef, useMemo, useEffect } from "react"
import { useFrame, useThree } from "@react-three/fiber"
import * as THREE from "three"
import { useTheme } from "next-themes"

export default function NeuralMesh() {
  const nodes = useRef<THREE.Points>(null!)
  const links = useRef<THREE.LineSegments>(null!)
  const sparks = useRef<THREE.Points>(null!)
  const coreSphere = useRef<THREE.Mesh>(null!)
  const fog = useRef<THREE.Points>(null!)

  const { mouse } = useThree()
  const { theme } = useTheme()

  // 🔥 Now optimized & boosted visibility
  const glow       = theme==="dark" ? "#00E8FF" : "#0037FF"
  const linkColor  = theme==="dark" ? "#75D9FF" : "#1A4BFF"
  const sparkColor = theme==="dark" ? "#00FFFF" : "#0052FF"
  const coreColor  = theme==="dark" ? "#00CFFF" : "#0F54FF"

  //----------------------------------------
  //  NODE POSITIONS ON SPHERE
  //----------------------------------------
  const { positions, linksPos, fogPos } = useMemo(() => {
    const count = 150
    const R = 1.75
    const pts:THREE.Vector3[]=[]
    const edges:number[]=[]
    const fogPoints:number[]=[]

    for(let i=0;i<count;i++){
      const p=new THREE.Vector3().setFromSphericalCoords(
        R, Math.acos(2*Math.random()-1), Math.random()*Math.PI*2
      )
      pts.push(p)
    }

    pts.forEach((a,i)=>{
      pts.forEach((b,j)=>{
        if(i<j && a.distanceTo(b)<0.92){
          edges.push(a.x,a.y,a.z,b.x,b.y,b.z)
        }
      })
    })

    // small fog field
    for(let i=0;i<1000;i++){
      fogPoints.push(
        (Math.random()-0.5)*6,
        (Math.random()-0.5)*6,
        (Math.random()-0.5)*6
      )
    }

    return{
      positions:new Float32Array(pts.flatMap(p=>[p.x,p.y,p.z])),
      linksPos:new Float32Array(edges),
      fogPos:new Float32Array(fogPoints)
    }
  },[])

  //----------------------------------------
  //  SCROLL-BASED ROTATION
  //----------------------------------------
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      const scrollY=window.scrollY*0.0008
      nodes.current.rotation.y+=scrollY
      links.current.rotation.y+=scrollY
      sparks.current.rotation.y+=scrollY
      coreSphere.current.rotation.y+=scrollY
    })
  },[])

  //----------------------------------------
  // ANIMATION LOOP
  //----------------------------------------
  useFrame(({clock})=>{
    const t=clock.getElapsedTime()

    const b=1+Math.sin(t*1.1)*0.09
    nodes.current.scale.setScalar(b)
    links.current.scale.setScalar(b)
    sparks.current.scale.setScalar(b*1.04)

    nodes.current.position.x+=(mouse.x*0.7-nodes.current.position.x)*0.05
    nodes.current.position.y+=(-mouse.y*0.7-nodes.current.position.y)*0.05
    links.current.position.copy(nodes.current.position)
    sparks.current.position.copy(nodes.current.position)

    const geo=sparks.current.geometry as THREE.BufferGeometry
    const arr=geo.attributes.position.array as Float32Array
    const i=Math.floor(Math.random()*(arr.length/3))
    arr[i*3]*=1.04;arr[i*3+1]*=1.04;arr[i*3+2]*=1.04
    geo.attributes.position.needsUpdate=true

    coreSphere.current.scale.setScalar(0.6+Math.sin(t*2)*0.08)
    coreSphere.current.rotation.y=t*0.5
  })

  return(
    <>
      {/* 🌫 S2 — fog particles */}
      <points ref={fog}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[fogPos,3]}/>
        </bufferGeometry>
        <pointsMaterial size={0.01} color={theme==="dark"?"#7ACFFF":"#4C7FFF"} opacity={0.22}/>
      </points>

      {/* ⚡ Main Nodes */}
      <points ref={nodes}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions,3]}/>
        </bufferGeometry>
        <pointsMaterial size={0.058} color={glow}/>
      </points>

      {/* ══ Synapse Web ══ */}
      <lineSegments ref={links}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[linksPos,3]}/>
        </bufferGeometry>
        <lineBasicMaterial color={linkColor} linewidth={2} transparent opacity={0.52}/>
      </lineSegments>

      {/* 🔥 S4 — CORE INTELLIGENCE SPHERE */}
      <mesh ref={coreSphere}>
        <sphereGeometry args={[0.4,32,32]}/>
        <meshStandardMaterial
          color={coreColor}
          emissive={coreColor}
          emissiveIntensity={1.6}
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>

      {/* ⚡ firing neurons */}
      <points ref={sparks}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions,3]}/>
        </bufferGeometry>
        <pointsMaterial size={0.028} color={sparkColor}/>
      </points>
    </>
  )
}
