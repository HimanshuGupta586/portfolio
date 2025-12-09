"use client"

import { Canvas } from "@react-three/fiber"
import NeuralMesh from "./NeuralMesh"
import { EffectComposer, Bloom, DepthOfField } from "@react-three/postprocessing"
import { useTheme } from "next-themes"
import { Suspense } from "react"

export default function NeuralCanvas() {
  const { theme } = useTheme()

  return (
    <div 
      className="w-full h-full rounded-xl"
      style={{
        background: theme==="light"
          ? "radial-gradient(circle at center, #D9E3FF 0%, #F7F7F7 100%)"
          : "transparent"
      }}
    >
      <Canvas camera={{ position:[0,0,5], fov:56 }} dpr={[1,1.5]} shadows>
        
        <ambientLight intensity={theme==="dark" ? 1.4 : 2.2} />
        <Suspense fallback={null}>
          <NeuralMesh />
        </Suspense>

        <EffectComposer>
          <Bloom intensity={theme==="dark" ? 1.6 : 0.35} luminanceThreshold={0.45}/>
          <DepthOfField focusDistance={0.015} focalLength={0.015} bokehScale={1.8} />
        </EffectComposer>
      </Canvas>
    </div>
  )
}
