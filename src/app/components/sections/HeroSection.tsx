import Image from 'next/image';

export default function HeroSection() {
  return (
    <section
      id='inicio'
      className="relative text-white min-h-screen flex items-center 
                 bg-gradient-to-r from-koda-blue-marino to-koda-blue-deep"
    >
      <div className='container mx-auto px-8 grid md:grid-cols-2 gap-8 items-center'>
        
        <div className='text-left'>
          <h1 className='text-5xl lg:text-7xl font-bold leading-tight mb-4'>
            Software con calidad desde la raíz
          </h1>
          <p className="text-lg lg:text-xl mb-8 max-w-xl opacity-90">
            Desarrollamos software de alta calidad que impulsa el éxito de tu negocio.
          </p>
          <a href="#servicios"
             className='inline-block font-bold text-white text-lg rounded-lg transition-transform hover:-translate-y-1 py-3 px-8 
                        bg-gradient-to-r from-btn-start to-btn-end'>
            Conoce nuestros servicios
          </a>
        </div>

        {/* Columna de Ilustración */}
        <div className="hidden md:flex justify-center">
          <Image
            src="/hero-illustration.svg" // Asegúrate de tener esta imagen en tu carpeta /public
            alt="Ilustración de desarrollo de software"
            width={500}
            height={400}
            className="w-full max-w-lg"
          />
        </div>
      </div>
    </section>
  )
}