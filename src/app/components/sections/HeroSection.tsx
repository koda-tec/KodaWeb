
export default function HeroSection(){
  return(
    <section 
      id='inicio'
      className="relative bg-koda-blue text-white min-h-screen flex items-center justify-center text-center">
        <div className='px-4'>
          <h1 className='text-5xl md:text-7xl font-bold leading-tight mb-4'>
            Software con <br /> calidad desde la raíz
          </h1>
          <p>Desarrollamos software de calidad que impulsa tu negocio</p>
          <a href="#servicios"
          className='bg-koda-green hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors'>
            Conoce nuestros servicios
          </a>
        </div>
    </section>
  )
}