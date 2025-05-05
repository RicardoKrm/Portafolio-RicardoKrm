// components/main/StarBackground.tsx
"use client"; // Importante: Indica que este componente usa funcionalidades del lado del cliente

import React, { useRef, useState, Suspense } from "react";
// --- IMPORTS: ADAPTA ESTOS A LOS QUE USAS EN TU ARCHIVO ORIGINAL ---
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { PointMaterial, Points } from "@react-three/drei";

// --- INTERFAZ DE PROPIEDADES: Mantenemos ---
interface StarsCanvasProps {
  className?: string; // 'className' es opcional (?) y de tipo string
}

// --- COMPONENTE INTERNO DE LAS ESTRELLAS: Mantenemos el contenido adaptado ---
const Stars = (props: any) => {
  const ref: any = useRef();

  // --- LÓGICA DE GEOMETRÍA Y ANIMACIÓN: Mantenemos tu lógica adaptada aquí ---
  const sphere = new Float32Array(5000 * 3);
  for (let i = 0; i < 5000; i++) {
    const r = 1.5;
    const theta = 2 * Math.PI * Math.random();
    const phi = Math.acos(2 * Math.random() - 1);
    sphere[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    sphere[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    sphere[i * 3 + 2] = r * Math.cos(phi);
  }
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });
  // --- FIN LÓGICA ---

  return (
    // --- RENDERIZADO DE LAS ESTRELLAS: Mantenemos tu renderizado adaptado aquí ---
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#fff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
    // --- FIN RENDERIZADO ---
  );
};

// --- COMPONENTE PRINCIPAL StarsCanvas: ¡ELIMINADO EL ATRIBUTO style! ---
// El div raíz NO debe tener un atributo style="..." que sobrescriba pointer-events
const StarsCanvas = ({ className }: StarsCanvasProps) => {
  // Sigue aceptando 'className'
  return (
    // El elemento raíz que cubre la pantalla - Mantiene posicionamiento.
    // === ¡ASEGÚRATE QUE NO HAYA NINGÚN ATRIBUTO 'style="..."' AQUÍ! ===
    // Solo debe tener el atributo className para las clases de Tailwind.
    <div className="w-full h-auto fixed inset-0 z-[20]">
      {" "}
      {/* <-- ¡VERIFICA Y ELIMINA style="..." si existe! */}
      <Suspense fallback={null}>
        {/* className es aplicado al <Canvas>, pasando pointer-events-none al elemento <canvas> nativo */}
        <Canvas className={className} camera={{ position: [0, 0, 1] }}>
          {" "}
          {/* <-- className APLICADO AQUÍ */}
          {/* Renderiza las estrellas */}
          <Stars />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default StarsCanvas;
