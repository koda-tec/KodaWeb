"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="relative py-28 px-6 overflow-hidden text-center text-white bg-gradient-to-r from-[#074186] to-[#179152]">
      {/* Fondo animado */}
      <div className="absolute inset-0 opacity-20 bg-[url('/haikei-bg.svg')] bg-cover bg-center -z-10"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          ¿Listo para llevar tu idea al siguiente nivel?
        </h2>
        <p className="text-lg md:text-xl text-white/90 mb-10">
          Hablemos de tu proyecto y creemos juntos una solución digital de calidad,
          funcional y escalable desde la raíz.
        </p>

        <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 150 }}>
          <Link href="/contacto">
            <button className="bg-white text-koda-dark font-bold py-4 px-10 rounded-lg text-lg btn-animated shadow-lg hover:shadow-xl">
              Hablemos de tu proyecto
            </button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Efecto de partículas suaves */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage:
            "radial-gradient(circle at 10% 20%, rgba(255,255,255,0.15) 0%, transparent 50%), radial-gradient(circle at 90% 80%, rgba(255,255,255,0.15) 0%, transparent 50%)",
        }}
      />
    </section>
  );
}
