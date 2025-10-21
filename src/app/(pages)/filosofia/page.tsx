"use client";

import { motion } from "framer-motion";
import { FaHeart, FaLeaf, FaCode, FaUsers } from "react-icons/fa";
import Link from "next/link";

export default function FilosofiaPage() {
  return (
    <main className="bg-white text-koda-dark overflow-hidden">
      {/* --- HERO INTERNO --- */}
      <section className="relative flex items-center justify-center min-h-[60vh] bg-koda-gradient text-white text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Nuestra Filosofía</h1>
          <p className="text-lg md:text-xl opacity-90">
            Creamos software con propósito, impulsando la calidad, la innovación y el crecimiento desde la raíz.
          </p>
        </motion.div>

        {/* Fondo decorativo orgánico */}
        <img
          src="/haikei-bg.svg"
          alt="Fondo orgánico"
          className="absolute inset-0 w-full h-full object-cover opacity-20 -z-10"
        />
      </section>

      {/* --- HISTORIA Y PROPÓSITO --- */}
      <section className="py-24 px-6 max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6 text-gradient"
        >
          Calidad desde la raíz
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg text-koda-dark/80 leading-relaxed max-w-3xl mx-auto"
        >
          En KODA creemos que la calidad no es una etapa final, sino el punto de partida de cada proyecto. 
          Nos guía la convicción de que cada línea de código debe tener propósito, claridad y valor. 
          Nuestra filosofía se basa en escuchar, entender y crear soluciones tecnológicas que realmente transformen los procesos y los resultados de nuestros clientes.
        </motion.p>
      </section>

      {/* --- MISIÓN, VISIÓN Y VALORES --- */}
      <section className="py-20 bg-koda-gray-light">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6 text-center">
          {/* Misión */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 150 }}
            className="bg-white rounded-2xl p-8 shadow-md border border-koda-border"
          >
            <FaLeaf className="text-koda-green-emerald text-4xl mb-4 mx-auto" />
            <h3 className="text-2xl font-bold mb-2">Misión</h3>
            <p className="text-koda-dark/80 text-sm leading-relaxed">
              Desarrollar software funcional, escalable y humano, que acompañe a cada cliente en su crecimiento y digitalización.
            </p>
          </motion.div>

          {/* Visión */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 150 }}
            className="bg-white rounded-2xl p-8 shadow-md border border-koda-border"
          >
            <FaCode className="text-koda-blue-deep text-4xl mb-4 mx-auto" />
            <h3 className="text-2xl font-bold mb-2">Visión</h3>
            <p className="text-koda-dark/80 text-sm leading-relaxed">
              Ser una empresa referente en desarrollo de software a medida, reconocida por su calidad técnica, innovación y compromiso con las personas.
            </p>
          </motion.div>

          {/* Valores */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 150 }}
            className="bg-white rounded-2xl p-8 shadow-md border border-koda-border"
          >
            <FaUsers className="text-koda-green-emerald text-4xl mb-4 mx-auto" />
            <h3 className="text-2xl font-bold mb-2">Valores</h3>
            <p className="text-koda-dark/80 text-sm leading-relaxed">
              Confianza, colaboración, mejora continua y compromiso con la calidad son la base que guía cada decisión en KODA.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- CTA FINAL --- */}
      <section className="py-24 text-center bg-koda-gradient text-white">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Trabajemos juntos
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg mb-8 opacity-90"
        >
          Transformemos tus ideas en software de calidad.  
          Empecemos a crear algo grande juntos.
        </motion.p>
        <Link href="/contacto">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-white text-koda-dark font-bold py-3 px-8 rounded-lg btn-animated"
          >
            Contáctanos
          </motion.button>
        </Link>
      </section>
    </main>
  );
}
