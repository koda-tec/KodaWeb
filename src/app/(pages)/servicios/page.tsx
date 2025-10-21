"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import FeatureCard from "@/app/components/ui/FeatureCard";
import { FaLaptopCode, FaCogs, FaDatabase, FaTools, FaClipboardCheck, FaLightbulb, FaPencilRuler, FaCode, FaVial, FaRocket } from "react-icons/fa";

const servicesData = [
  { icon: <FaLaptopCode size={28} />, title: "Aplicaciones Web", description: "Desarrollamos aplicaciones web a medida, robustas y escalables." },
  { icon: <FaCogs size={28} />, title: "Sistemas a Medida", description: "Creamos software diseñado específicamente para optimizar tus procesos." },
  { icon: <FaDatabase size={28} />, title: "Bases de Datos", description: "Diseñamos y gestionamos arquitecturas de datos eficientes y seguras." },
  { icon: <FaTools size={28} />, title: "Mantenimiento y Soporte", description: "Aseguramos el rendimiento constante de tus aplicaciones." },
  { icon: <FaClipboardCheck size={28} />, title: "QA (Aseguramiento de Calidad)", description: "Testing riguroso para garantizar productos libres de errores." },
];

const processData = [
  { icon: <FaLightbulb size={28} />, title: "Planificación", text: "Comenzamos con una reunión de descubrimiento para comprender tus necesidades, objetivos y el alcance del proyecto." },
  { icon: <FaPencilRuler size={28} />, title: "Diseño", text: "Creamos la arquitectura, la experiencia de usuario (UX/UI) y definimos la base técnica del producto." },
  { icon: <FaCode size={28} />, title: "Desarrollo", text: "Construimos el software aplicando metodologías ágiles y buenas prácticas de programación." },
  { icon: <FaVial size={28} />, title: "Testing y QA", text: "Probamos cada módulo para asegurar la estabilidad, el rendimiento y la calidad del sistema." },
  { icon: <FaRocket size={28} />, title: "Entrega y Soporte", text: "Desplegamos la solución y ofrecemos acompañamiento técnico para garantizar su éxito." },
];

export default function ServicesPage() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="container mx-auto">
        {/* --- Sección de Servicios --- */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-koda-dark">Nuestros Servicios</h1>
          <p className="mt-4 text-lg text-koda-dark/80 max-w-2xl mx-auto">
            Soluciones tecnológicas diseñadas para impulsar tu negocio al siguiente nivel.
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full pb-12"
        >
          {servicesData.map((service, index) => (
            <SwiperSlide key={index} className="h-auto p-2">
              <div className="h-full">
                <FeatureCard {...service} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* --- Sección de Proceso de Trabajo --- */}
        <div className="mt-32 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-koda-dark mb-4">Cómo trabajamos</h2>
          <p className="text-koda-dark/80 mb-12 max-w-2xl mx-auto text-lg">
            Cada proyecto de KODA sigue un proceso claro que garantiza calidad desde la raíz.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {processData.map((step, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-koda-gray-light p-6 rounded-2xl shadow-md border border-koda-border flex flex-col items-center text-center hover:shadow-lg"
              >
                <div className="bg-koda-green-emerald text-white rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-koda-dark mb-2">{step.title}</h3>
                <p className="text-koda-dark/80 text-sm">{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
