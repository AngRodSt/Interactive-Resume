"use client";
import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { Points as ThreePoints } from "three";

interface ParticleFieldProps {
  count?: number;
}

export default function ParticleField({ count = 1000 }: ParticleFieldProps) {
  const ref = useRef<ThreePoints>(null);

  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      // Random positions in a sphere
      const x = (Math.random() - 0.5) * 20;
      const y = (Math.random() - 0.5) * 20;
      const z = (Math.random() - 0.5) * 20;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      // Colors gradient from blue to purple
      const colorLerp = Math.random();
      colors[i * 3] = 0.4 + colorLerp * 0.4; // R
      colors[i * 3 + 1] = 0.2 + colorLerp * 0.4; // G
      colors[i * 3 + 2] = 0.8 + colorLerp * 0.2; // B
    }

    return [positions, colors];
  }, [count]);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime / 10) * 0.1;
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime / 15) * 0.1;
    }
  });

  return (
    <Points ref={ref} positions={positions} colors={colors}>
      <PointMaterial
        transparent
        opacity={0.6}
        size={0.05}
        sizeAttenuation={true}
        vertexColors={true}
        blending={2}
      />
    </Points>
  );
}
