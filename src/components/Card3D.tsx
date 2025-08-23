"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Html,
  OrbitControls,
  RoundedBox,
  Sphere,
  MeshDistortMaterial,
  Float,
  Environment,
  Sparkles,
} from "@react-three/drei";
import { useRef, useState } from "react";
import { Color, Group } from "three";
import ParticleField from "./ParticleField";
import HomeSection from "./sections/HomeSection";
import AboutSection from "./sections/AboutSection";
import ProjectsSection from "./sections/ProjectsSection";
import ExperienceSection from "./sections/ExperienceSection";
import ContactSection from "./sections/ContactSection";

type NavigationSection =
  | "home"
  | "about"
  | "projects"
  | "experience"
  | "contact";

function FloatingOrbs() {
  return (
    <>
      <Float speed={1.4} rotationIntensity={1} floatIntensity={0.5}>
        <Sphere args={[0.25]} position={[-8, 4, -3]}>
          <MeshDistortMaterial
            color="#2563eb"
            transparent
            opacity={0.6}
            distort={0.2}
            speed={1.5}
          />
        </Sphere>
      </Float>

      <Float speed={1.2} rotationIntensity={1.5} floatIntensity={0.8}>
        <Sphere args={[0.15]} position={[8, -3, -2]}>
          <MeshDistortMaterial
            color="#f59e0b"
            transparent
            opacity={0.5}
            distort={0.3}
            speed={1.2}
          />
        </Sphere>
      </Float>

      <Float speed={1.8} rotationIntensity={0.8} floatIntensity={0.6}>
        <Sphere args={[0.2]} position={[-7, -4, 2]}>
          <MeshDistortMaterial
            color="#1e40af"
            transparent
            opacity={0.4}
            distort={0.15}
            speed={2}
          />
        </Sphere>
      </Float>

      <Float speed={1.6} rotationIntensity={1.2} floatIntensity={0.7}>
        <Sphere args={[0.18]} position={[6, 5, 1]}>
          <MeshDistortMaterial
            color="#d97706"
            transparent
            opacity={0.5}
            distort={0.2}
            speed={1.8}
          />
        </Sphere>
      </Float>

      <Float speed={1.3} rotationIntensity={0.9} floatIntensity={0.4}>
        <Sphere args={[0.12]} position={[-5, 2, -4]}>
          <MeshDistortMaterial
            color="#1d4ed8"
            transparent
            opacity={0.4}
            distort={0.25}
            speed={1.6}
          />
        </Sphere>
      </Float>
    </>
  );
}

// Content based on selected section
function CardContent({ section }: { section: NavigationSection }) {
  const getContent = () => {
    switch (section) {
      case "home":
        return <HomeSection />;

      case "about":
        return <AboutSection />;

      case "projects":
        return <ProjectsSection />;

      case "experience":
        return <ExperienceSection />;

      case "contact":
        return <ContactSection />;

      default:
        return null;
    }
  };

  return <>{getContent()}</>;
}

function RotatingCard({
  section,
  onSectionChange,
}: {
  section: NavigationSection;
  onSectionChange: (section: NavigationSection) => void;
}) {
  const cardRef = useRef<Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (cardRef.current) {
      // Only subtle floating motion, no auto-rotation
      cardRef.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.3) * 0.02;
      cardRef.current.position.y =
        Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
    }
  });

  return (
    <group ref={cardRef}>
      {/* Main card with glass effect */}
      <RoundedBox
        args={[8.5, 5.2, 0.3]}
        radius={0.15}
        smoothness={6}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
      >
        <meshPhysicalMaterial
          color={new Color("#1e3a8a")}
          metalness={0.8}
          roughness={0.1}
          transmission={0.15}
          transparent
          opacity={0.95}
          clearcoat={1}
          clearcoatRoughness={0.05}
          envMapIntensity={2.5}
        />
      </RoundedBox>

      {/* Glowing edge effect */}
      <RoundedBox args={[8.55, 5.25, 0.28]} radius={0.15} smoothness={6}>
        <meshBasicMaterial
          color={hovered ? "#3b82f6" : "#1d4ed8"}
          transparent
          opacity={0.4}
        />
      </RoundedBox>

      {/* Top Navigation Bar */}
      <Html position={[0, 2.2, 0.16]} distanceFactor={3.2} transform>
        <div className="flex gap-3 bg-slate-900/90 backdrop-blur-md rounded-2xl p-3 border border-blue-400/30 shadow-2xl">
          {[
            {
              key: "home" as NavigationSection,
              label: "Home",
              icon: (
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
              ),
            },
            {
              key: "about" as NavigationSection,
              label: "About",
              icon: (
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  />
                </svg>
              ),
            },
            {
              key: "projects" as NavigationSection,
              label: "Projects",
              icon: (
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              ),
            },
            {
              key: "experience" as NavigationSection,
              label: "Experience",
              icon: (
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                  />
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                </svg>
              ),
            },
            {
              key: "contact" as NavigationSection,
              label: "Contact",
              icon: (
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              ),
            },
          ].map(({ key, label, icon }) => (
            <button
              key={key}
              onClick={() => onSectionChange(key)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                section === key
                  ? "bg-gradient-to-r from-blue-600 to-amber-600 text-white shadow-lg scale-105 border border-blue-400/50"
                  : "text-blue-200 hover:text-white hover:bg-blue-800/50 border border-transparent"
              }`}
              title={label}
            >
              <span>{icon}</span>
              <span className="text-sm font-semibold">{label}</span>
            </button>
          ))}
        </div>
      </Html>

      {/* Full-width content */}
      <Html position={[0, -0.4, 0.16]} distanceFactor={3.2} transform>
        <CardContent section={section} />
      </Html>
    </group>
  );
}

export default function Card3D() {
  const [currentSection, setCurrentSection] =
    useState<NavigationSection>("home");

  return (
    <div className="w-full h-screen bg-gradient-to-br from-slate-900 via-cyan-600 to-slate-900">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 40 }}
        gl={{ antialias: true, alpha: true }}
        className="w-full h-full"
      >
        {/* Enhanced lighting setup */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} castShadow />
        <pointLight position={[-5, -5, 5]} intensity={0.5} color="#8b5cf6" />
        <pointLight position={[5, -5, -5]} intensity={0.5} color="#06b6d4" />

        {/* Environment for reflections */}
        <Environment preset="city" />

        {/* Background particle field */}
        <ParticleField count={400} />

        {/* Floating orbs around the card */}
        <FloatingOrbs />

        {/* Sparkles effect */}
        <Sparkles
          count={80}
          scale={[12, 12, 12]}
          size={2.5}
          speed={0.3}
          opacity={0.7}
          color="#3b82f6"
        />

        {/* Main rotating card with integrated navigation */}
        <RotatingCard
          section={currentSection}
          onSectionChange={setCurrentSection}
        />

        {/* Interactive controls */}
        <OrbitControls
          enablePan={false}
          enableZoom={true}
          autoRotate={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
          maxAzimuthAngle={Math.PI / 3}
          minAzimuthAngle={-Math.PI / 3}
          minDistance={8}
          maxDistance={15}
        />
      </Canvas>

      {/* Instructions overlay - now more minimal */}
      <div className="absolute bottom-6 left-6 z-10">
        <div className="bg-blue-900/20 backdrop-blur-md rounded-xl p-4 border border-blue-400/30 text-white">
          <p className="text-sm flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
              />
            </svg>
            Drag to rotate • Scroll to zoom • Click navigation to explore
          </p>
        </div>
      </div>
    </div>
  );
}
