import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-green-dark text-white">
      <div className="container mx-auto p-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          <div>
            <h3 className="text-xl font-bold mb-2">KODA 🌱</h3>
            <p className="text-sm opacity-80">Software con calidad desde la raíz.</p>
          </div>

          <div>
            <h3 className="font-bold uppercase mb-4">Explora</h3>
            <ul className="space-y-2">
              <li><Link href="/servicios" className="hover:underline opacity-80 hover:opacity-100">Servicios</Link></li>
              <li><Link href="/filosofia" className="hover:underline opacity-80 hover:opacity-100">Nuestra Filosofía</Link></li>
              <li><Link href="/contacto" className="hover:underline opacity-80 hover:opacity-100">Contacto</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold uppercase mb-4">Conecta</h3>
            <p className="opacity-80 hover:underline cursor-pointer">kodasoftwar3@gmail.com</p>
            {/* Redes Sociales aquí */}
          </div>
        </div>

        <div className="mt-10 border-t border-white/20 pt-6 text-center text-sm opacity-60">
          <p>&copy; {currentYear} Koda. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}