"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Cambia el fondo al hacer scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-md"
          : "bg-white/70 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 py-3 md:py-4">

        {/* 🔹 Logo */}
        <Link href="/" onClick={closeMenu} className="flex items-center h-12 md:h-14 pl-6 md:pl-8">
  <div className="relative w-40 md:w-48 h-full flex items-center overflow-visible">
    <Image
      src="/logoKoda.png"
      alt="Logo de KODA"
      fill
      className="object-contain object-left scale-[1.8] md:scale-[2] -translate-y-1 md:-translate-y-1 transition-transform duration-300 hover:scale-[2.1]"
      priority
    />
  </div>
</Link>


        {/* 🔹 Navegación escritorio */}
        <nav className="hidden md:flex items-center space-x-8 text-koda-dark font-medium">
          <Link href="/servicios" className="hover:text-koda-green-emerald transition-colors">
            Servicios
          </Link>
          <Link href="/filosofia" className="hover:text-koda-green-emerald transition-colors">
            Nuestra Filosofía
          </Link>
          <Link href="/contacto" className="hover:text-koda-green-emerald transition-colors">
            Contacto
          </Link>
        </nav>

        {/* 🔹 Botón CTA */}
        <div className="hidden md:block">
          <Link href="/contacto">
            <button className="bg-koda-gradient text-white px-5 py-2.5 rounded-lg font-semibold btn-animated">
              Hablemos
            </button>
          </Link>
        </div>

        {/* 🔹 Menú móvil */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-lg border border-gray-300 focus:outline-none bg-white/60 backdrop-blur-sm"
          aria-label="Abrir menú"
        >
          <svg
            className="w-6 h-6 text-koda-dark"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* 🔹 Menú desplegable móvil */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white shadow-lg border-t border-gray-100"
          >
            <div className="flex flex-col px-6 py-3 space-y-3 text-koda-dark text-lg">
              <Link href="/servicios" onClick={closeMenu}>
                Servicios
              </Link>
              <Link href="/filosofia" onClick={closeMenu}>
                Nuestra Filosofía
              </Link>
              <Link href="/contacto" onClick={closeMenu}>
                Contacto
              </Link>

              <Link href="/contacto" onClick={closeMenu}>
                <button className="w-full bg-koda-gradient text-white py-2 rounded-lg mt-2 font-semibold">
                  Hablemos
                </button>
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
