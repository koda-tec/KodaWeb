export default function HeroSection() {
  return (
    <section
      id='inicio'
      
      className="relative text-white min-h-screen flex items-center 
                 bg-gradient-to-br from-koda-blue-marino to-koda-blue-deep"
    >
      <div className='container mx-auto px-8 md:px-12 text-left'>
        
        <h1 className='text-5xl md:text-7xl font-bold leading-tight mb-4 max-w-3xl'>
          Software con calidad desde la raíz
        </h1>
        
        <p className="text-lg md:text-xl mb-8 max-w-xl opacity-90">
          Desarrollamos software de calidad que impulsa tu negocio
        </p>
        
      
        <a 
          href="#servicios"
          className='
            inline-block font-bold text-white text-lg rounded-lg transition-transform duration-200 
            transform hover:-translate-y-1           
            py-4 px-10 
            bg-gradient-to-b from-koda-green-light to-koda-green-emerald 
            border-b-4 border-koda-green-darker 
            shadow-inner shadow-white/20
          '
        >
          Conoce nuestros servicios
        </a>

      </div>
    </section>
  )
}