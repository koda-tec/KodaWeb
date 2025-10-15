import Link from 'next/link';

export const CtaSlide = () => (
  <div className="text-center p-10 flex flex-col justify-center items-center h-[60vh]">
    <h2 className="text-4xl font-bold text-koda-dark">
      ¿Listo para llevar tu software al siguiente nivel?
    </h2>
    <Link href="/contacto" className="mt-6 bg-koda-green-emerald text-white font-bold py-3 px-10 rounded-lg text-xl transition hover:bg-opacity-90">
      Contáctanos
    </Link>
  </div>
);