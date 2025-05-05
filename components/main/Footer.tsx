// components/main/Footer.tsx - Versión Simplificada
import React from "react";
// Ya no necesitamos importar Socials ni los íconos Rx
// import { Socials } from "@/constants";
// import { RxGithubLogo, RxInstagramLogo, RxLinkedinLogo } from "react-icons/rx";

const Footer = () => {
  return (
    // Contenedor principal del footer - Mantenemos el id="contact"
    // para que el enlace de la Navbar siga llevando al final de la página
    <div
      id="contact"
      className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] "
    >
      {/* Contenedor central - Ahora solo contendrá los derechos reservados */}
      <div className="w-full flex flex-col items-center justify-center m-auto">
        {/* SECCIÓN DE BOTONES SOCIALES ELIMINADA */}
        {/* SECCIÓN DE CORREO ELECTRÓNICO ELIMINADA */}

        {/* Derechos de Autor - Este div se mantiene */}
        <div className="mb-[20px] text-[15px] text-center">
          &copy; RicardoKrm Dev 2025 Inc. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
