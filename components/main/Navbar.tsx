import { Socials } from "@/constants"; // Mantenemos la importación por si acaso, aunque ya no se mapea aquí
import Image from "next/image"; // Mantenemos la importación por si acaso, aunque ya no se mapea aquí
import React from "react";

const Navbar = () => {
  return (
    // Contenedor principal de la barra de navegación
    // Ajuste de padding horizontal: px-4 en móvil, md:px-10 para medium screens and up
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 md:px-10">
      {/* Contenedor interior para alinear elementos */}
      {/* --- CAMBIADO justify-between A justify-center --- */}
      {/* --- Eliminado mr-auto del placeholder --- */}
      <div className="w-full h-full flex flex-row items-center justify-center m-auto px-[10px]">
        {" "}
        {/* <-- CLASE MODIFICADA justify-center */}
        {/* Placeholder vacío para mantener la posición del layout en el flexbox */}
        {/* Eliminada clase mr-auto */}
        <div className="h-auto w-auto flex flex-row items-center">
          {" "}
          {/* <-- CLASE MODIFICADA (sin mr-auto) */}
          {/* Contenido (Logo y Nombre) eliminado según lo solicitado */}
        </div>
        {/* Enlaces de navegación interna (Sobre mi, Proyectos, Habilidades, Contacto) */}
        {/* Este div (el siguiente elemento en el flexbox) debería mantenerse centrado con justify-center en el padre */}
        {/* Ajuste de anchura: w-auto en móvil, w-[500px] en pantallas medianas y grandes */}
        {/* Este contenedor ya no necesita md:mr-20 si no hay nada a la derecha para espaciar */}
        <div className="w-auto md:w-[500px] h-full flex flex-row items-center justify-between">
          {" "}
          {/* <-- CLASE MODIFICADA (sin md:mr-20) */}
          {/* Ajuste de espaciado interno: justify-around en móvil, justify-between en md+, y gap-x-4 */}
          {/* Todos los enlaces internos tienen whitespace-nowrap */}
          <div className="flex items-center justify-around md:justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200 gap-x-4">
            {/* Enlace a Sobre mi - Añadida la clase whitespace-nowrap */}
            <a href="#about-me" className="cursor-pointer whitespace-nowrap">
              {" "}
              {/* CLASE AÑADIDA AQUÍ */}
              Sobre mi {/* Mantenemos el texto en español */}
            </a>
            {/* Enlace a Proyectos - Añadida la clase whitespace-nowrap */}
            <a href="#projects" className="cursor-pointer whitespace-nowrap">
              {" "}
              {/* CLASE AÑADIDA AQUÍ */}
              Proyectos
            </a>
            {/* Enlace a Habilidades - Añadida la clase whitespace-nowrap */}
            <a href="#skills" className="cursor-pointer whitespace-nowrap">
              {" "}
              {/* CLASE AÑADIDA AQUÍ */}
              Habilidades
            </a>
          </div>
        </div>
        {/* Íconos de Redes Sociales - BLOQUE COMPLETO ELIMINADO */}
        {/*
        <div className="flex flex-row gap-5 ml-auto">
          {Socials.map((social) => (
            <a ... >
              <Image ... />
            </a>
          ))}
        </div>
        */}
      </div>
    </div>
  );
};

export default Navbar;
