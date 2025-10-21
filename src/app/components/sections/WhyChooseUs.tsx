"use client";

import { motion } from "framer-motion";
import { FaHandshake, FaLaptopCode, FaClock, FaTools } from "react-icons/fa";

const reasons = [
  {
    icon: <FaHandshake className="text-koda-green-emerald text-4xl mb-4" />,
    title: "Comunicación transparente",
    text: "Acompañamos cada etapa del proyecto con claridad y colaboración constante con nuestros clientes.",
  },
  {
    icon: <FaLaptopCode className="text-koda-blue-deep text-4xl mb-4" />,
    title: "Soluciones personalizadas",
    text: "Diseñamos software a medida, adaptado exactamente a las necesidades de tu negocio.",
  },
  {
    icon: <FaClock className="text-koda-green-emerald text-4xl mb-4" />,
    title: "Entrega en tiempo y forma",
    text: "Planificamos y ejecutamos cada proyecto con plazos realistas y compromiso de cumplimiento.",
  },
  {
    icon: <FaTools className="text-koda-blue-deep text-4xl mb-4" />,
    title: "Mantenimiento continuo",
    text: "Ofrecemos soporte post-lanzamiento para asegurar el rendimiento y evolución de tus sistemas.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 px-6 bg-white text-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
          ¿Por qué elegirnos?
        </h2>
        <p className="text-lg text-koda-dark/80 max-w-2xl mx-auto">
          En KODA creemos que la confianza se construye con resultados,
          transparencia y un compromiso real con cada proyecto.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="bg-koda-gray-light/50 rounded-2xl p-8 shadow-sm border border-koda-border hover:shadow-lg transition-all"
          >
            <div className="flex flex-col items-center text-center">
              {reason.icon}
              <h3 className="text-xl font-bold text-koda-dark mb-2">
                {reason.title}
              </h3>
              <p className="text-koda-dark/80 text-sm leading-relaxed">
                {reason.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
