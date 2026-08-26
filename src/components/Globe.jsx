import React, { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

const locations = [
  { name: "Ibadan", lat: 7.3775, lng: 3.9470 },
  { name: "Lagos", lat: 6.5244, lng: 3.3792 },
  { name: "London", lat: 51.5074, lng: -0.1278 },
  { name: "New York", lat: 40.7128, lng: -74.0060 },
  { name: "Toronto", lat: 43.6532, lng: -79.3832 },
  { name: "Dubai", lat: 25.2048, lng: 55.2708 },
  { name: "Paris", lat: 48.8566, lng: 2.3522 },
  { name: "Johannesburg", lat: -26.2041, lng: 28.0473 },
];

function latLngToVector3(lat, lng, radius = 2.02) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);

  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
}

function GlobePoints() {
  const points = useMemo(() => {
    const positions = [];

    for (let i = 0; i < 1600; i++) {
      const phi = Math.acos(1 - 2 * Math.random());
      const theta = Math.random() * Math.PI * 2;
      const radius = 2.015;

      positions.push(
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.cos(phi),
        radius * Math.sin(phi) * Math.sin(theta)
      );
    }

    return new Float32Array(positions);
  }, []);

  return (
    <Points positions={points} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#FFF8EB"
        size={0.012}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}

function Markers() {
  return (
    <>
      {locations.map((location) => {
        const position = latLngToVector3(location.lat, location.lng);

        return (
          <group key={location.name} position={position}>
            <mesh>
              <sphereGeometry args={[0.045, 16, 16]} />
              <meshBasicMaterial color="#C89A5B" />
            </mesh>

            <mesh scale={1.8}>
              <sphereGeometry args={[0.045, 16, 16]} />
              <meshBasicMaterial
                color="#C89A5B"
                transparent
                opacity={0.16}
              />
            </mesh>
          </group>
        );
      })}
    </>
  );
}

function GlobeScene() {
  return (
    <>
      <ambientLight intensity={1.5} />

      <Sphere args={[2, 64, 64]}>
        <meshStandardMaterial
          color="#131C48"
          roughness={0.85}
          metalness={0.05}
          emissive="#070C24"
          emissiveIntensity={0.4}
        />
      </Sphere>

      <GlobePoints />
      <Markers />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.35}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={(Math.PI * 2) / 3}
      />
    </>
  );
}

export default function Globe() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5.2], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <GlobeScene />
        </Suspense>
      </Canvas>
    </div>
  );
}
