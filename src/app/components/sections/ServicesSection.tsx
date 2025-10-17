
"use client";

import FeatureCard from '@/app/components/ui/FeatureCard';
import { FaLaptopCode, FaMobileAlt, FaDraftingCompass } from 'react-icons/fa';

import { motion, Variants } from 'framer-motion';

const servicesData = [
  { icon: <FaLaptopCode size={24} />, title: "Desarrollo web", description: "Sitios y aplicaciones web modernas y rápidas.", href: "/servicios" },
  { icon: <FaMobileAlt size={24} />, title: "Aplicaciones móviles", description: "Apps nativas o híbridas para iOS y Android.", href: "/servicios" },
  { icon: <FaDraftingCompass size={24} />, title: "Sistemas a medida", description: "Software diseñado específicamente para tus procesos.", href: "/servicios" },
];


const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};


const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, type: "spring", stiffness: 100 } }
};

export default function ServicesSection() {
  return (
    <section id="que-hacemos" className="py-24 px-4 bg-koda-gray-light/30 overflow-hidden">
      <div className="container mx-auto text-center">
        <motion.h2 
           initial={{ opacity: 0, y: -20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: false }}
           transition={{ duration: 0.6 }}
           className="text-4xl md:text-5xl font-bold text-koda-dark mb-4"
        >
          Qué hacemos
        </motion.h2>
        <motion.p
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: false }}
           transition={{ delay: 0.2, duration: 0.6 }}
          
           className="text-koda-dark/80 mb-16 max-w-2xl mx-auto text-lg"
        >
          Ofrecemos soluciones tecnológicas integrales adaptadas a las necesidades de tu empresa.
        </motion.p>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          {servicesData.map((item) => (
      
            <motion.div key={item.title} variants={itemVariants} className="h-full">
              <FeatureCard {...item} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}