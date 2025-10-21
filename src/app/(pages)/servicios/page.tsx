"use client";

import { motion } from "framer-motion";
import { FaLaptopCode, FaCogs, FaDatabase, FaTools, FaClipboardCheck, FaLightbulb, FaPencilRuler, FaCode, FaVial, FaRocket } from "react-icons/fa";

const servicesData = [
  {
    icon: <FaLaptopCode size={32} />,
    title: "Desarrollo Web",
    description: "Creamos sitios y aplicaciones web modernas, rápidas y adaptadas a las necesidades de tu negocio.",
  },
  {
    icon: <FaCogs size={32} />,
    title: "Sistemas a Medida",
    description: "Diseñamos software personalizado para optimizar tus procesos internos y mejorar tu productividad.",
  },
  {
    icon: <FaDatabase size={32} />,
    title: "Bases de Datos",
    description: "Diseñamos y gestionamos arquitecturas de datos seguras, escalables y eficientes.",
  },
  {
    icon: <FaClipboardCheck size={32} />,
    title: "QA y Testing",
    description: "Realizamos pruebas funcionales, de integración y de rendimiento para garantizar la calidad del producto.",
  },
  {
    icon: <FaTools size={32} />,
    title: "Mantenimiento y Soporte",
    description: "Acompañamos a tu empresa con soporte técnico y mantenimiento continuo para asegurar el funcionamiento óptimo.",
  },
];

const processData = [
  { icon: <FaLightbulb size={28} />, title: "Planificación", text: "Analizamos tus necesidades y definimos un plan estratégico adaptado a tus objetivos." },
  { icon: <FaPencilRuler size={28} />, title: "Diseño", text: "Creamos interfaces atractivas y funcionales con foco en la experiencia de usuario (UX/UI)." },
  { icon: <FaCode size={28} />, title: "Desarrollo", text: "Construimos el software aplicando metodologías ágiles y código limpio." },
  { icon: <FaVial size={28} />, title: "Testing y QA", text: "Probamos exhaustivamente cada parte del sistema antes del lanzamiento." },
  { icon: <FaRocket size={28} />, title: "Entrega y Soporte", text: "Desplegamos el producto y brindamos soporte para garantizar su éxito." },
];

export default function ServicesPage() {
  return (
    <main className="py-24 px-6 bg-white">
      <div className="container mx-auto">
        {/* --- Sección de Servicios --- */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-koda-dark">Nuestros Servicios</h1>
          <p className="mt-4 text-lg text-koda-dark/80 max-w-2xl mx-auto">
            En KODA desarrollamos soluciones tecnológicas completas, adaptadas a las necesidades de tu empresa.
          </p>
        </div>

        {/* Tarjetas de servicios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-28">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="bg-white border border-koda-border shadow-md rounded-2xl p-8 text-center transition-all hover:shadow-xl flex flex-col items-center justify-center"
            >
              <div className="bg-koda-green-emerald text-white w-14 h-14 flex items-center justify-center rounded-full mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-koda-dark mb-2">{service.title}</h3>
              <p className="text-koda-dark/80 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* --- Sección de Proceso de Trabajo --- */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-koda-dark mb-4">Cómo trabajamos</h2>
          <p className="text-koda-dark/80 mb-12 max-w-2xl mx-auto text-lg">
            Cada proyecto en KODA sigue un proceso claro y organizado para garantizar resultados de calidad desde la raíz.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {processData.map((step, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-koda-gray-light p-6 rounded-2xl shadow-sm border border-koda-border flex flex-col items-center text-center hover:shadow-lg"
              >
                <div className="bg-koda-green-emerald text-white rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  {step.icon}
                </div>
                <h3 className="text-lg font-bold text-koda-dark mb-2">{step.title}</h3>
                <p className="text-koda-dark/80 text-sm">{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
