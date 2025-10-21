"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 glass">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="z-20">
          <span className="text-2xl font-bold text-koda-blue-deep">KODA 🌱</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/servicios" className="text-koda-dark nav-link">Servicios</Link>
          <Link href="/filosofia" className="text-koda-dark nav-link">Nuestra Filosofía</Link>
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <Link href="/contacto">
            <button className="bg-koda-gradient text-white font-bold py-2.5 px-5 rounded-lg btn-animated">
              Hablemos
            </button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Abrir menú" className="z-20">
            <svg className="w-6 h-6 text-koda-blue-deep" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <div className={`md:hidden px-4 pb-4 transition-transform ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <nav className="flex flex-col items-start space-y-4 text-xl">
          <Link href="/servicios" onClick={toggleMenu} className="text-koda-dark nav-link">Servicios</Link>
          <Link href="/filosofia" onClick={toggleMenu} className="text-koda-dark nav-link">Nuestra Filosofía</Link>
        </nav>
        <Link href="/contacto" onClick={toggleMenu}>
          <button className="mt-4 bg-koda-gradient text-white font-bold rounded-lg text-lg w-full max-w-xs py-3 px-8 btn-animated">
            Hablemos
          </button>
        </Link>
      </div>
    </header>
  );
}
