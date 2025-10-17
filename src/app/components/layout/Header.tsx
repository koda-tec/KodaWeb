
"use client"; 

import { useState } from 'react'; 
import Link from 'next/link';
import Image from 'next/image'; 

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        
       
        <Link href="/" className="z-20">
          <Image
            src="/logoKoda.png" 
            alt="Logo de KODA"
            width={1024}  
            height={1024} 
            className="h-10 w-auto"
          />
        </Link>

        {/* Navegación de Escritorio */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/servicios" className="text-koda-dark hover:text-koda-green-emerald transition-colors">
            Servicios
          </Link>
          <Link href="/filosofia" className="text-koda-dark hover:text-koda-green-emerald transition-colors">
            Nuestra Filosofía
          </Link>
        </nav>

        {/* Botón de "Hablemos" de Escritorio */}
        <div className="hidden md:block">
          <Link href="/contacto">
            <button className="font-bold text-white rounded-lg transition-transform hover:-translate-y-1 py-2.5 px-5 
                               bg-gradient-to-r from-btn-start to-btn-end">
              Hablemos
            </button>
          </Link>
        </div>
        
        {/* Botón de Hamburguesa */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Abrir menú" className="z-20">
            <svg className="w-6 h-6 text-koda-blue-deep" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
          </button>
        </div>
      </div>
      
      {/* Menú Desplegable Móvil */}
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
          <button className="font-bold text-white rounded-lg text-lg w-full max-w-xs py-3 px-8
                             bg-gradient-to-r from-btn-start to-btn-end">
            Hablemos
          </button>
        </Link>
      </div>
    </header>
  );
}