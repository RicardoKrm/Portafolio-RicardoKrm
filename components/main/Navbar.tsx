import { Socials } from "@/constants"; // Importa los datos de redes sociales
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    // Contenedor principal de la barra de navegación
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      {/* Contenedor interior para alinear elementos */}
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        {/* Enlace del logo (a la sección Sobre mí) */}
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          {/* Imagen del logo */}
          {/* Asegúrate de que /NavLogo.png existe en tu carpeta public */}
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />
          {/* Nombre/Alias junto al logo (visible en pantallas medianas y grandes) */}
          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            RicardoKrm
          </span>
        </a>

        {/* Enlaces de navegación interna (Sobre mi, Proyectos, Habilidades) */}
        {/* Este bloque renderiza los enlaces cliqueables para navegar entre secciones */}
        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            {/* Enlace a Sobre mi */}
            <a href="#about-me" className="cursor-pointer">
              Sobre mi
            </a>
            {/* Enlace a Proyectos */}
            <a href="#projects" className="cursor-pointer">
              Proyectos
            </a>
            {/* Enlace a Habilidades */}
            <a href="#skills" className="cursor-pointer">
              Habilidades
            </a>
          </div>
        </div>

        {/* Íconos de Redes Sociales */}
        {/* Mapea sobre los datos de Socials (desde constants/index.ts) */}
        <div className="flex flex-row gap-5">
          {Socials.map((social) => (
            // ¡Cada ícono está envuelto en una etiqueta <a> para que sea un enlace!
            <a
              key={social.name} // Clave única para cada elemento en la lista
              href={social.link} // <-- URL definida en constants/index.ts
              target="_blank" // <-- Abre el enlace en una nueva pestaña del navegador
              rel="noopener noreferrer" // <-- Recomendado por seguridad al usar target="_blank"
            >
              {/* Imagen del ícono social */}
              {/* La ruta (social.src) viene de constants/index.ts, ej: /github.svg */}
              <Image
                src={social.src}
                alt={social.name} // Texto alternativo desde constants/index.ts
                width={24}
                height={24}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
