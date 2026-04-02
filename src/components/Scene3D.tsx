import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const ParticleField = () => {
  const count = 200;
  const meshRef = useRef<THREE.Points>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, []);

  const sizes = useMemo(() => {
    const s = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      s[i] = Math.random() * 3 + 1;
    }
    return s;
  }, []);

  useFrame(({ clock, mouse }) => {
    if (!meshRef.current) return;
    mouseRef.current.x += (mouse.x * 0.5 - mouseRef.current.x) * 0.05;
    mouseRef.current.y += (mouse.y * 0.5 - mouseRef.current.y) * 0.05;
    meshRef.current.rotation.x = mouseRef.current.y * 0.2;
    meshRef.current.rotation.y = mouseRef.current.x * 0.2 + clock.elapsedTime * 0.02;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={count}
          array={sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#00d4ff"
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};

const FloatingGrid = () => {
  const gridRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!gridRef.current) return;
    gridRef.current.rotation.x = Math.PI / 4 + Math.sin(clock.elapsedTime * 0.1) * 0.05;
    gridRef.current.position.y = -3 + Math.sin(clock.elapsedTime * 0.3) * 0.2;
  });

  return (
    <group ref={gridRef}>
      <gridHelper args={[30, 30, "#00d4ff", "#00d4ff"]} position={[0, 0, 0]}>
        <meshBasicMaterial opacity={0.08} transparent color="#00d4ff" />
      </gridHelper>
    </group>
  );
};

const Scene3D = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        style={{ background: "transparent" }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.3} />
        <ParticleField />
        <FloatingGrid />
      </Canvas>
    </div>
  );
};

export default Scene3D;
