// src/app/components/layout/Footer.tsx
import Link from 'next/link';
import { FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
   
    <footer className="bg-koda-green-emerald text-white pt-16 pb-8 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        {/*Navegación */}
        <div>
          <h3 className="font-bold mb-4 uppercase">Navegación</h3>
          <ul className="space-y-2">
            <li><Link href="#inicio" className="hover:underline">Inicio</Link></li>
            <li><Link href="#sobre-nosotros" className="hover:underline">Sobre Nosotros</Link></li>
            <li><Link href="#servicios" className="hover:underline">Servicios</Link></li>
            <li><Link href="#proyectos" className="hover:underline">Proyectos</Link></li>
            <li><Link href="#contacto" className="hover:underline">Contacto</Link></li>
          </ul>
        </div>
        {/*Contacto */}
        <div>
          <h3 className="font-bold mb-4 uppercase">Contacto</h3>
          <ul className="space-y-2">
            <li>Email: kodasoftwar3@gmail.com</li>
            <li>Teléfono: 3865413172</li>
          </ul>
        </div>
        {/* Redes Sociales */}
        <div className="flex flex-col items-center md:items-start">
         
          <div className="flex space-x-4 mt-4">
            <a href="#" aria-label="GitHub" className="text-2xl hover:text-gray-300 transition-colors"><FaGithub /></a>
            <a href="#" aria-label="Facebook" className="text-2xl hover:text-gray-300 transition-colors"><FaFacebook /></a>
            <a href="#" aria-label="Instagram" className="text-2xl hover:text-gray-300 transition-colors"><FaInstagram /></a>
          </div>
        </div>
      </div>
      <div className="text-center text-sm text-gray-300 border-t border-white/20 pt-8 mt-12">
        <p>&copy; {new Date().getFullYear()} KODA. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}