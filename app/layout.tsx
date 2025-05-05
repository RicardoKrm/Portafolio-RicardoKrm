// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Asumo que esta ruta es correcta
import "./globals.css";
// Importamos StarsCanvas
import StarsCanvas from "@/components/main/StarBackground"; // Importado correctamente
// Mantenemos las otras importaciones
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer"; // Mantenemos la importación por si acaso, aunque no se renderiza aquí

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Space Portfolio",
  description: "Este es mi portafolio", // O mantén la descripción que prefieras
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      {" "}
      {/* Cambiado lang a español si quieres */}
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        {/* === ¡AÑADIDA LA CLASE pointer-events-none AQUÍ! === */}
        {/* Esto hará que el canvas de las estrellas no bloquee los clics */}
        {/* Requiere que StarBackground.tsx acepte la prop className */}
        <StarsCanvas className="pointer-events-none" />{" "}
        {/* <-- CLASE AÑADIDA */}
        <Navbar />
        {/* {children} renderiza el contenido de app/page.tsx, que ahora incluye el Footer */}
        {children}{" "}
        {/* <-- Aquí es donde se renderiza el contenido de tu página */}
        {/* La renderización duplicada del Footer fue eliminada */}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
