// components/sub/HeroContent.tsx
"use client"; // Indica que este es un componente del lado del cliente

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    // Contenedor principal de HeroContent (Flexbox de fila en md+)
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      {/* Columna Izquierda: Texto y Botones */}
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        {/* Texto del cuadro de "Welcome" */}
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Full Stack Developer {/* Traducido y añadido alias */}
          </h1>
        </motion.div>

        {/* Título principal */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Brindando {/* Traducido: Providing */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              la mejor {/* Traducido: the best */}
            </span>
            experiencia en proyectos{" "}
          </span>
        </motion.div>

        {/* Descripción */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          Soy Ricardo Krm, un Ingeniero de Informatica Full Stack, con
          experiencia en desarrollo Web, Móvil y de Software. Explora mis
          proyectos y habilidades.
        </motion.p>

        {/* === INICIO SECCIÓN DE BOTONES SOCIALES (REEMPLAZA EL BOTÓN ANTERIOR) === */}
        {/* Usamos motion.div para mantener la animación y flexbox para poner los botones en fila */}
        <motion.div
          variants={slideInFromLeft(1)} // Misma variante de animación que el botón anterior
          className="flex flex-row gap-5 mt-5" // Flexbox para poner los botones lado a lado, gap para espacio, mt para margen superior
        >
          {/* Botón para GitHub */}
          {/* Usamos un <a> como botón y le damos estilo. Asegúrate de tener la URL correcta. */}
          <a
            href="https://github.com/RicardoKrm" // URL de tu perfil de GitHub
            target="_blank" // Abre en una nueva pestaña
            rel="noopener noreferrer" // Recomendado para seguridad
            // Clases de estilo de botón (adaptadas del ejemplo anterior)
            className="px-6 py-3 border border-[#7042f861] text-gray-200 rounded-full cursor-pointer hover:bg-[#7042f861]/20 text-lg font-bold whitespace-nowrap" // Estilo visual del botón
            aria-label="Ver mi perfil de GitHub" // Etiqueta de accesibilidad
          >
            GitHub {/* Texto del botón */}
          </a>

          {/* Botón para LinkedIn */}
          {/* Usamos otro <a> con el mismo estilo. Asegúrate de tener la URL correcta. */}
          <a
            href="https://www.linkedin.com/in/ricardo-orellana-17a886208/" // URL de tu perfil de LinkedIn
            target="_blank" // Abre en una nueva pestaña
            rel="noopener noreferrer" // Recomendado para seguridad
            // Mismas clases de estilo del botón de GitHub
            className="px-6 py-3 border border-[#7042f861] text-gray-200 rounded-full cursor-pointer hover:bg-[#7042f861]/20 text-lg font-bold whitespace-nowrap" // Estilo visual del botón
            aria-label="Ver mi perfil de LinkedIn" // Etiqueta de accesibilidad
          >
            LinkedIn {/* Texto del botón */}
          </a>
        </motion.div>
        {/* === FIN SECCIÓN DE BOTONES SOCIALES === */}
      </div>

      {/* Columna Derecha: Imagen */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg" // Ruta de tu imagen
          alt="iconos de trabajo" // Texto alternativo
          height={650} // Altura
          width={650} // Anchura
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
