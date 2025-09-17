// src/components/CarScene.jsx
import { Canvas } from "@react-three/fiber";
import { Environment, ContactShadows, PresentationControls, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

/** Load your GLB model */
function CarModel(props) {
  // Path to your file in /public
  const { scene } = useGLTF("/models/gt3.glb");
  return <primitive object={scene} {...props} />;
}

export default function CarScene() {
  return (
    <div className="pointer-events-auto">
      <Canvas
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        camera={{ position: [2.2, 1.2, 3.2], fov: 35 }}
      >
        <Suspense fallback={null}>
          {/* Drag / rotate with mouse or touch */}
          <PresentationControls
            global
            cursor
            snap
            rotation={[0, Math.PI / 8, 0]}
            polar={[-0.3, 0.5]}   // up/down limits
            azimuth={[-0.6, 0.6]} // left/right limits
            config={{ mass: 2, tension: 300 }}
          >
            {/* Slight scale so it fits nicely */}
            <group scale={1.1} position={[0, -0.25, 0]}>
              <CarModel />
            </group>
          </PresentationControls>

          {/* Soft light / reflections */}
          <Environment preset="city" />
          <hemisphereLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1.5} />
          <directionalLight position={[-5, 5, -5]} intensity={0.8} />

          {/* Ground contact shadow */}
          <ContactShadows
            position={[0, -0.5, 0]}
            opacity={0.35}
            scale={10}
            blur={2.4}
            far={2}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

/** Drei will cache the model; tell it the loader can handle this path */
useGLTF.preload("/models/gt3.glb");
