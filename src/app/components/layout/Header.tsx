"use client"; 

import { useState } from 'react'; 
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="z-20">
          <span className="text-2xl font-bold text-koda-blue-deep">KODA 🌱</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/servicios" className="text-koda-dark hover:text-koda-green-emerald transition-colors">Servicios</Link>
          <Link href="/filosofia" className="text-koda-dark hover:text-koda-green-emerald transition-colors">Nuestra Filosofía</Link>
        </nav>

       
        <div className="hidden md:block">
          <Link href="/contacto">
            <button className="font-bold text-white rounded-lg transition-transform hover:-translate-y-1 py-2.5 px-5 
                               bg-gradient-to-r from-btn-start to-btn-end">
              Hablemos
            </button>
          </Link>
        </div>
        
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Abrir menú" className="z-20">
            <svg className="w-6 h-6 text-koda-blue-deep" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
          </button>
        </div>
      </div>
      
      <div className={`md:hidden ... ${isMenuOpen ? 'transform translate-x-0' : 'transform -translate-x-full'}`}>
        <nav className="flex flex-col items-center space-y-6 text-xl">
          <Link href="/servicios" onClick={toggleMenu} className="...">Servicios</Link>
          <Link href="/filosofia" onClick={toggleMenu} className="...">Nuestra Filosofía</Link>
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