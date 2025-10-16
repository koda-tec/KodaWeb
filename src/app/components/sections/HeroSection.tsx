export default function HeroSection(){
  return(
    <section 
      id='inicio'
      className="relative text-white min-h-screen flex items-center justify-center text-center 
                 bg-gradient-to-b from-koda-blue-deep to-koda-blue-marino">
        
        <div className='px-4 flex flex-col items-center'> 

          <h1 className='text-5xl md:text-7xl font-bold leading-tight mb-4'>
            Software con <br /> calidad desde la raíz
          </h1>
         
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Desarrollamos software de calidad que impulsa tu negocio
          </p>
          
          <a href="#servicios"
             className='bg-koda-green-emerald hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors'>
            Conoce nuestros servicios
          </a>

        </div>
    </section>
  )
}