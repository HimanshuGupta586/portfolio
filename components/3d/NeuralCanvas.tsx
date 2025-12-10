// /NeuralCanvas.tsx
"use client";

import { Canvas } from "@react-three/fiber";
import NeuralMesh from "./NeuralMesh";
import { EffectComposer, Bloom, DepthOfField } from "@react-three/postprocessing";
import { useTheme } from "next-themes";
import { Suspense } from "react";

export default function NeuralCanvas() {
  const { resolvedTheme } = useTheme(); // ✅ FIX theme mismatch

  const isDark = resolvedTheme === "dark";

  return (
    <div
      className="w-full h-full rounded-xl"
      style={{
        background: isDark
          ? "transparent"
          : "radial-gradient(circle at center, #D9E3FF 0%, #F7F7F7 100%)",
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 56 }}
        dpr={[1, 1.5]}
        gl={{ powerPreference: "high-performance" }} // ⚡ PERFORMANCE BOOST
      >
        <ambientLight intensity={isDark ? 1.3 : 2} />

        <Suspense fallback={null}>
          <NeuralMesh isDark={isDark} />
        </Suspense>

        {/* Post effects — much lighter on light mode */}
        <EffectComposer>
          <Bloom intensity={isDark ? 1.4 : 0.25} luminanceThreshold={0.45} />
          <DepthOfField focusDistance={0.015} focalLength={0.015} bokehScale={1.6} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
