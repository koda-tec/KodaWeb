// src/app/components/sections/ContactSection.tsx
"use client";

import ContactForm from "./ContactForm";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section id="contacto" className="py-24 px-4 bg-koda-gray-light/50 overflow-hidden">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-koda-dark mb-4">
            ¿Listo para tu proyecto?
          </h2>
          <p className="text-gray-600 mb-12 text-lg">
            Cuéntanos tu idea y solicita tu cotización sin compromiso.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
}