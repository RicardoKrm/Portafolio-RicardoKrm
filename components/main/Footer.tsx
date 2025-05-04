import React from "react";
import {
  // Mantenemos solo los íconos que vamos a usar
  RxGithubLogo,
  RxInstagramLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

// Eliminamos la importación de íconos que no usaremos
// import { FaYoutube } from "react-icons/fa";
// import { RxDiscordLogo, RxTwitterLogo, } from "react-icons/rx";

const Footer = () => {
  return (
    // Contenedor principal del footer
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
      {/* Contenedor central para centrar el contenido */}
      <div className="w-full flex flex-col items-center justify-center m-auto">
        {/* Sección de íconos de Redes Sociales (GitHub, LinkedIn, Instagram) */}
        {/* Usamos flex para centrar y dar espacio, mb-8 para separación inferior */}
        <div className="flex flex-row justify-center gap-10 mb-8 w-full">
          {/* Enlace a Github */}
          {/* Usamos <a> para que sea cliqueable */}
          <a
            href="https://github.com/RicardoKrm"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visitar mi perfil de GitHub"
          >
            {" "}
            {/* ¡REEMPLAZA TU_URL_DE_GITHUB! */}
            {/* Ícono de GitHub */}
            <RxGithubLogo className="text-3xl cursor-pointer" />{" "}
            {/* text-3xl para un tamaño decente */}
          </a>

          {/* Enlace a LinkedIn */}
          <a
            href="https://www.linkedin.com/in/ricardo-orellana-17a886208/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visitar mi perfil de LinkedIn"
          >
            {" "}
            {/* ¡REEMPLAZA TU_URL_DE_LINKEDIN! */}
            {/* Ícono de LinkedIn */}
            <RxLinkedinLogo className="text-3xl cursor-pointer" />
          </a>

          {/* Enlace a Instagram */}
          <a
            href="https://www.instagram.com/ricardo.krm/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visitar mi perfil de Instagram"
          >
            {" "}
            {/* ¡REEMPLAZA TU_URL_DE_INSTAGRAM! */}
            {/* Ícono de Instagram */}
            <RxInstagramLogo className="text-3xl cursor-pointer" />
          </a>
        </div>

        {/* Correo de Contacto */}
        {/* Centramos el texto, mb-8 para separación inferior */}
        <div className="mb-8 text-[15px] text-center">
          {/* Hacemos el correo cliqueable con mailto: */}
          <a
            href="mailto:contacto@ricardokrm.cl"
            className="cursor-pointer hover:underline"
          >
            {" "}
            {/* ¡ASEGÚRATE QUE EL CORREO ES EL CORRECTO! */}
            contacto@ricardokrm.cl
          </a>
        </div>

        {/* Derechos de Autor */}
        {/* Centramos el texto, mb-[20px] según el original */}
        <div className="mb-[20px] text-[15px] text-center">
          &copy; RicardoKrm Dev 2025 Inc. All rights reserved{" "}
          {/* Texto de copyright */}
          {/* Puedes cambiar "RicardoKrm Dev 2025" si lo deseas */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
