import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-XX">
        {" "}
        {/* Mantén el valor del espacio que elegiste */}
        <Hero /> {/* ¡Sigue primero! */}
        <Projects /> {/* ¡Ahora segundo! */}
        <Skills /> {/* ¡Ahora tercero! */}
      </div>
    </main>
  );
}
