import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";
import vertexShader from "../shaders/vertexShader.glsl";
import fragmentShader from "../shaders/fragmentShader.glsl";

const Plane = () => {
  const planeRef = useRef<Mesh>(null!);
  const { viewport } = useThree();

  useFrame(({ clock }) => {
    if (planeRef.current) {
      planeRef.current.material.uniforms.uTime.value = clock.getElapsedTime();
    }
  });

  return (
    <mesh ref={planeRef} scale={viewport.width / 2}>
      <planeGeometry args={[1, 1]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{
          uTime: { value: 0.0 },
        }}
      />
    </mesh>
  );
};

export default Plane;
