import React from "react";
import HeroContent from "../sub/HeroContent"; // <-- Importas este sub-componente

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full" id="about-me">
      {/* Tu video de fondo - ¡Aquí está! */}
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-340px]  h-full w-full left-0 z-[1] object-cover "
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      {/* Renderizas HeroContent aquí */}
      <HeroContent />{" "}
      {/* <-- Aquí es donde probablemente está el título, descripción y el botón */}
    </div>
  );
};

export default Hero;
