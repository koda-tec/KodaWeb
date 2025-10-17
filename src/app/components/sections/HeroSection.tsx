"use client"; 

import Image from 'next/image';
import { motion } from 'framer-motion'; 


const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function HeroSection() {
  return (
    <section
      id='inicio'
      className="relative text-white min-h-screen flex items-center 
                 bg-gradient-to-r from-koda-blue-marino to-koda-blue-deep overflow-hidden"
    >
      <div className='container mx-auto px-8 grid md:grid-cols-2 gap-8 items-center'>
       
        <motion.div 
          className='text-left z-10'
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.2 }} 

        >
          <motion.h1 variants={fadeInUp} className='text-5xl lg:text-7xl font-bold leading-tight mb-4'>
            Software con calidad desde la raíz
          </motion.h1>
          
          <motion.p variants={fadeInUp} className="text-lg lg:text-xl mb-8 max-w-xl opacity-90">
            Desarrollamos software de alta calidad que impulsa el éxito de tu negocio.
          </motion.p>
          
          <motion.div variants={fadeInUp}>
            <a href="#servicios"
               className='inline-block font-bold text-white text-lg rounded-lg transition-transform hover:-translate-y-1 py-3 px-8 
                          bg-gradient-to-r from-btn-start to-btn-end shadow-lg shadow-btn-start/20'>
              Conoce nuestros servicios
            </a>
          </motion.div>
        </motion.div>

        {/* Columna de Ilustración con animación de entrada */}
        <motion.div 
          className="hidden md:flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {/* Recuerda poner tu imagen real aquí */}
          <Image
            src="/heroS.png" 
            alt="Ilustración de desarrollo de software"
            width={1536}
            height={1024}
            className="w-full max-w-lg drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  )
}