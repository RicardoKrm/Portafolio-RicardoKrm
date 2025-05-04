import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Proyectos
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/en-desarrollo.png"
          title="Reloj control con huella biometrica"
          description="reloj control"
        />
        <ProjectCard
          src="/en-desarrollo.png"
          title="Logistica e inventario"
          description="Logistica e inventario."
        />
        <ProjectCard
          src="/en-desarrollo.png"
          title="sistema de control y mantenimiento "
          description="sistema de control y mantenimiento"
        />
      </div>
    </div>
  );
};

export default Projects;
