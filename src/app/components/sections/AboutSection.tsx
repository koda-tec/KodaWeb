"use client";

import FeatureCard from "../ui/FeatureCard";
import Link from 'next/link';
import { FaFlag, FaEye, FaGem } from 'react-icons/fa';
import { motion } from 'framer-motion';

const aboutData = [
  { icon: <FaFlag size={24} />, title: "Misión", description: "Nuestra misión es proveer soluciones de software..." },
  { icon: <FaEye size={24} />, title: "Visión", description: "Ser referentes en calidad de software en la región..." },
  { icon: <FaGem size={24} />, title: "Valores", description: "Calidad, Transparencia, Innovación y Compromiso." },
];

// Configuración de animación para el contenedor 

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};


const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function AboutSection() {
  return (
    <section id="quienes-somos" className="py-24 px-4 bg-white overflow-hidden">
      <div className="container mx-auto text-center">
        
        {/* Título animado */}
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }} 

          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-koda-dark mb-16"
        >
          Quiénes somos
        </motion.h2>
        
        {/* Grid de tarjetas animado */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}

        >
          {aboutData.map((item) => (
            <motion.div key={item.title} variants={itemVariants}>
              <FeatureCard {...item} />
            </motion.div>
          ))}
        </motion.div>
        

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false}}
          transition={{ delay: 0.6, duration: 0.4 }}
        >
          <Link href="/filosofia">
            <button className="bg-koda-blue-deep text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform hover:-translate-y-1 shadow-md hover:shadow-lg">
              Conoce sobre Koda
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}