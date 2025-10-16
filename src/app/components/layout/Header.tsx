"use client"; 

import { useState } from 'react'; 
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Contenedor principal del Header */}
      <div className="container mx-auto flex items-center justify-between p-4">
        
        {/* 1. Logo (Siempre visible) */}
        <Link href="/" className="z-20"> {/* z-20 para que esté por encima del menú móvil */}
          <span className="text-2xl font-bold text-koda-blue-deep">KODA 🌱</span>
        </Link>

        {/* 2. Navegación de Escritorio (Oculta en móvil) */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/servicios" className="text-koda-dark hover:text-koda-green-emerald transition-colors">
            Servicios
          </Link>
          <Link href="/filosofia" className="text-koda-dark hover:text-koda-green-emerald transition-colors">
            Nuestra Filosofía
          </Link>
        </nav>

        {/* 3. Botón de "Hablemos" de Escritorio (Oculto en móvil) */}
        <div className="hidden md:block">
          <Link href="/contacto">
            <button className="bg-koda-green-emerald px-5 py-2.5 font-bold text-white rounded-lg transition hover:opacity-90">
              Hablemos
            </button>
          </Link>
        </div>

        {/* 4. Botón de Hamburguesa (Solo visible en móvil) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Abrir menú" className="z-20">
            <svg className="w-6 h-6 text-koda-blue-deep" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
          </button>
        </div>
      </div>

      {/* 5. Menú Desplegable Móvil (Se muestra u oculta con estado) */}
      <div 
        className={`md:hidden absolute top-0 left-0 w-full h-screen bg-white transition-transform duration-300 ease-in-out flex flex-col items-center justify-center space-y-8 ${isMenuOpen ? 'transform translate-x-0' : 'transform -translate-x-full'}`}
      >
        <nav className="flex flex-col items-center space-y-6 text-xl">
          <Link href="/servicios" onClick={toggleMenu} className="text-koda-dark hover:text-koda-green-emerald transition-colors">
            Servicios
          </Link>
          <Link href="/filosofia" onClick={toggleMenu} className="text-koda-dark hover:text-koda-green-emerald transition-colors">
            Nuestra Filosofía
          </Link>
        </nav>
        <Link href="/contacto" onClick={toggleMenu}>
          <button className="bg-koda-green-emerald px-8 py-3 font-bold text-white rounded-lg text-lg">
            Hablemos
          </button>
        </Link>
      </div>
    </header>
  );
}