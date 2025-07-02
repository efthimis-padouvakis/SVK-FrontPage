import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.05} groundColor="black" />
      <spotLight
        position={[-520, 350, 120]}
        angle={0.32}
        penumbra={2}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.03 : 0.05}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[1.11, 3.21, 0.6]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Media query for mobile
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Prevent touch scrolling on canvas
    const canvas = document.querySelector("canvas");
    if (canvas) {
      const preventTouchMove = (e) => e.preventDefault();
      canvas.addEventListener("touchmove", preventTouchMove, {
        passive: false,
      });
      return () => {
        mediaQuery.removeEventListener("change", handleMediaQueryChange);
        canvas.removeEventListener("touchmove", preventTouchMove);
      };
    }
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      style={{ touchAction: "none" }} // Extra safety
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enablePan={false} // disable panning for cleaner touch control
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          autoRotate={true} // <--- Auto rotate enabled
          autoRotateSpeed={1.5} // <--- Rotation speed, adjust if needed
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
