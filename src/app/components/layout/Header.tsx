"use client"; 

import { useState } from 'react'; 
import Link from 'next/link';

export default function Header() {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
   
    <header className="bg-white shadow-sm sticky top-0 z-50 relative">
      <div className="container mx-auto flex items-center justify-between p-4">
        
        <Link href="/" className="text-2xl font-bold text-koda-blue-deep">
          KODA 🌱
        </Link>

      
        <nav className="hidden space-x-8 md:flex">
          <Link href="/servicios" className="text-koda-dark hover:text-koda-green-emerald transition-colors">
            Servicios
          </Link>
          <Link href="/filosofia" className="text-koda-dark hover:text-koda-green-emerald transition-colors">
            Nuestra Filosofía
          </Link>
        </nav>

        <Link href="/contacto" className="hidden md:block">
          <button className="bg-koda-green-emerald px-5 py-2.5 font-bold text-white rounded-lg transition hover:opacity-90">
            Hablemos
          </button>
        </Link>
      
        <div className="md:hidden">
         
          <button onClick={toggleMenu} aria-label="Abrir menú">
            <svg className="w-6 h-6 text-koda-blue-deep" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
          </button>
        </div>

      </div>

      
      <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-md transition-transform duration-300 ease-in-out ${isMenuOpen ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
        <nav className="flex flex-col items-center space-y-4 p-4">
          <Link href="/servicios" onClick={toggleMenu} className="text-koda-dark hover:text-koda-green-emerald transition-colors">
            Servicios
          </Link>
          <Link href="/filosofia" onClick={toggleMenu} className="text-koda-dark hover:text-koda-green-emerald transition-colors">
            Nuestra Filosofía
          </Link>
          <Link href="/contacto" onClick={toggleMenu}>
            <button className="bg-koda-green-emerald px-5 py-2.5 font-bold text-white rounded-lg w-full">
              Hablemos
            </button>
          </Link>
        </nav>
      </div>
    </header>
  );
}