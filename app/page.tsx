import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
// Importar el componente Footer
import Footer from "@/components/main/Footer"; // <-- ¡AÑADIDA ESTA IMPORTACIÓN!

// La importación de Image no se usa aquí, puedes eliminarla si quieres:
// import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full">
      {/* Usamos flexbox para apilar secciones verticalmente */}
      {/* ¡IMPORTANTE! Reemplazar gap-XX con un valor real de Tailwind (ej. gap-40, gap-60, gap-80, etc.) */}
      <div className="flex flex-col gap-40">
        {" "}
        {/* <-- REEMPLAZADO gap-XX por gap-40 */}{" "}
        {/* Este " " es solo un espacio en el código, no afecta el layout */}
        <Hero /> {/* Renderiza el componente Hero */}
        <Projects /> {/* Renderiza el componente Projects */}
        <Skills /> {/* Renderiza el componente Skills */}
        {/* ¡AÑADIDO el componente Footer al final! */}
        <Footer /> {/* <-- ¡AÑADIDO ESTE COMPONENTE! */}
      </div>
    </main>
  );
}
