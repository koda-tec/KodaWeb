"use client";

import Link from "next/link";
import { FaGithub, FaFacebook, FaInstagram, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setEmail("");
  };

  return (
    <footer className="bg-gradient-to-r from-[#179152] to-[#074186] text-white pt-16 pb-8 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
        
        {/* --- Columna 1: Navegación --- */}
        <div>
          <h3 className="font-bold mb-4 uppercase tracking-wider">Navegación</h3>
          <ul className="space-y-2 text-gray-100">
            <li><Link href="/" className="hover:underline">Inicio</Link></li>
            <li><Link href="/filosofia" className="hover:underline">Nuestra Filosofía</Link></li>
            <li><Link href="/servicios" className="hover:underline">Servicios</Link></li>
            <li><Link href="/contacto" className="hover:underline">Contacto</Link></li>
          </ul>
        </div>

        {/* --- Columna 2: Enlaces rápidos --- */}
        <div>
          <h3 className="font-bold mb-4 uppercase tracking-wider">Enlaces rápidos</h3>
          <ul className="space-y-2 text-gray-100">
            <li><Link href="/faq" className="hover:underline">FAQ</Link></li>
            <li><Link href="/politica-privacidad" className="hover:underline">Política de Privacidad</Link></li>
            <li><Link href="/terminos" className="hover:underline">Términos y Condiciones</Link></li>
          </ul>
        </div>

        {/* --- Columna 3: Newsletter --- */}
        <div>
          <h3 className="font-bold mb-4 uppercase tracking-wider">Suscribite al newsletter</h3>
          <p className="text-gray-100 mb-4 text-sm">
            Recibí novedades, recursos y consejos de desarrollo directamente en tu correo.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center sm:items-stretch gap-3">
            <input
              type="email"
              placeholder="Tu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 rounded-md text-koda-dark focus:outline-none focus:ring-2 focus:ring-green-300"
            />
            <button
              type="submit"
              className="bg-koda-green-emerald hover:bg-green-600 transition-colors font-semibold px-5 py-2 rounded-md text-white"
            >
              Suscribirme
            </button>
          </form>

          {submitted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="text-green-200 mt-3 flex items-center gap-2 justify-center sm:justify-start"
            >
              ✅ <span>¡Suscripción enviada con éxito!</span>
            </motion.div>
          )}
        </div>

        {/* --- Columna 4: Marca y redes --- */}
        <div className="flex flex-col items-center md:items-start">
         <div className="relative w-64 h-36 mb-4 md:w-72 md:h-40">
    <Image
      src="/logoKoda.png"
      alt="Logo de KODA"
      fill
      className="object-contain"
      priority
    />
  </div>
          <p className="text-gray-200 text-sm mb-4">Software con calidad desde la raíz.</p>
          <div className="flex space-x-4 mt-2">
            <a href="#" aria-label="GitHub" className="text-2xl text-gray-200 hover:text-white"><FaGithub /></a>
            <a href="#" aria-label="Facebook" className="text-2xl text-gray-200 hover:text-white"><FaFacebook /></a>
            <a href="#" aria-label="Instagram" className="text-2xl text-gray-200 hover:text-white"><FaInstagram /></a>
            <a href="mailto:kodasoftwar3@gmail.com" aria-label="Email" className="text-2xl text-gray-200 hover:text-white"><FaEnvelope /></a>
          </div>
        </div>
      </div>

    
      <div className="text-center text-sm text-gray-100 border-t border-white/20 pt-8 mt-12">
        <motion.p
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          Hecho por <span className="font-semibold">KODA</span>
        </motion.p>
      </div>
    </footer>
  );
}
