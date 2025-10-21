"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
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
          ? "bg-white/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 py-3 md:py-4">
        {/* Logo */}
        <Link href="/" onClick={closeMenu} className="font-bold text-2xl text-koda-blue-deep">
          KODA 🌱
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-koda-dark">
          <Link href="/servicios" className="nav-link">Servicios</Link>
          <Link href="/filosofia" className="nav-link">Nuestra Filosofía</Link>
          <Link href="/contacto" className="nav-link">Contacto</Link>
        </nav>

      
        <div className="hidden md:block">
          <Link href="/contacto">
            <button className="bg-koda-gradient text-white px-5 py-2.5 rounded-lg font-semibold btn-animated">
              Hablemos
            </button>
          </Link>
        </div>

        {/* Hamburger menu  */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-lg border border-gray-300 focus:outline-none"
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

      {/* Mobile menu  */}
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
              <Link href="/servicios" onClick={closeMenu}>Servicios</Link>
              <Link href="/filosofia" onClick={closeMenu}>Nuestra Filosofía</Link>
              <Link href="/contacto" onClick={closeMenu}>Contacto</Link>

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
