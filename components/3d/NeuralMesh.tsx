// /NeuralMesh.tsx
"use client";

import { useRef, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

export default function NeuralMesh({ isDark }: { isDark: boolean }) {
  const nodes = useRef<THREE.Points>(null!);
  const links = useRef<THREE.LineSegments>(null!);
  const sparks = useRef<THREE.Points>(null!);
  const coreSphere = useRef<THREE.Mesh>(null!);
  const fog = useRef<THREE.Points>(null!);

  const { mouse } = useThree();

  /* ----------------------------------------
     Colors computed once (theme-safe)
  ----------------------------------------- */
  const glow = isDark ? "#00E8FF" : "#0037FF";
  const linkColor = isDark ? "#75D9FF" : "#1A4BFF";
  const sparkColor = isDark ? "#00FFFF" : "#0052FF";
  const coreColor = isDark ? "#00CFFF" : "#0F54FF";

  /* ----------------------------------------
     Node & fog generation
  ----------------------------------------- */
  const { positions, linksPos, fogPos } = useMemo(() => {
    const count = 140;
    const R = 1.75;
    const pts: THREE.Vector3[] = [];
    const edges: number[] = [];
    const fogPoints: number[] = [];

    for (let i = 0; i < count; i++) {
      const p = new THREE.Vector3().setFromSphericalCoords(
        R,
        Math.acos(2 * Math.random() - 1),
        Math.random() * Math.PI * 2
      );
      pts.push(p);
    }

    pts.forEach((a, i) => {
      pts.forEach((b, j) => {
        if (i < j && a.distanceTo(b) < 0.92) {
          edges.push(a.x, a.y, a.z, b.x, b.y, b.z);
        }
      });
    });

    // Fog
    for (let i = 0; i < 800; i++) {
      fogPoints.push(
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 6
      );
    }

    return {
      positions: new Float32Array(pts.flatMap((p) => [p.x, p.y, p.z])),
      linksPos: new Float32Array(edges),
      fogPos: new Float32Array(fogPoints),
    };
  }, []);

  /* ----------------------------------------
     Animation Loop — SUPER optimized
  ----------------------------------------- */
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    // Breathing effect (light)
    const scale = 1 + Math.sin(t * 1.2) * 0.08;
    nodes.current.scale.setScalar(scale);
    sparks.current.scale.setScalar(scale * 1.04);
    links.current.scale.setScalar(scale);

    // Smooth mouse-follow parallax
    const targetX = mouse.x * 0.6;
    const targetY = -mouse.y * 0.6;

    nodes.current.position.x += (targetX - nodes.current.position.x) * 0.06;
    nodes.current.position.y += (targetY - nodes.current.position.y) * 0.06;

    links.current.position.copy(nodes.current.position);
    sparks.current.position.copy(nodes.current.position);

    // Core pulse
    coreSphere.current.scale.setScalar(0.6 + Math.sin(t * 2) * 0.08);
    coreSphere.current.rotation.y = t * 0.4;
  });

  return (
    <>
      {/* Fog */}
      <points ref={fog}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[fogPos, 3]} />
        </bufferGeometry>
        <pointsMaterial size={isDark ? 0.01 : 0.02} color={isDark ? "#7ACFFF" : "#1E40FF"} opacity={isDark ? 0.22 : 1} transparent depthWrite={false} blending={THREE.AdditiveBlending} />
      </points>

      {/* Nodes */}
      <points ref={nodes}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.058} color={glow} />
      </points>

      {/* Links */}
      <lineSegments ref={links}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[linksPos, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color={linkColor} transparent opacity={0.52} />
      </lineSegments>

      {/* Core Sphere */}
      <mesh ref={coreSphere}>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshStandardMaterial
          color={coreColor}
          emissive={coreColor}
          emissiveIntensity={1.4}
          roughness={0.15}
          metalness={0.9}
        />
      </mesh>

      {/* Sparks */}
      <points ref={sparks}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.028} color={sparkColor} />
      </points>
    </>
  );
}
