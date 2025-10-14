import Link from 'next/link';

export default function Header() {
  return (
    // Usamos el fondo gris claro y una sombra
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        
        {/* Logo con el color azul principal */}
        <Link href="/" className="text-2xl font-bold text-blue">
          KODA 🌱
        </Link>

        {/* Navegación con texto azul y hover verde */}
        <nav className="hidden space-x-8 md:flex">
          <Link href="/servicios" className="text-dark hover:text-green transition-colors">
            Servicios
          </Link>
          <Link href="/filosofia" className="text-dark hover:text-green transition-colors">
            Nuestra Filosofía
          </Link>
        </nav>

        {/* Botón CTA con el verde brillante */}
        <Link href="/contacto">
          <button className="hidden md:block bg-koda-green-emerald px-5 py-2.5 font-bold text-white rounded-lg transition hover:opacity-90">
            Hablemos
          </button>
        </Link>

        {/* Menú hamburguesa para móvil */}
        <div className="md:hidden">
          <svg className="w-6 h-6 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
        </div>

      </div>
    </header>
  );
}