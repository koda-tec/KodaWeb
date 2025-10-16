export default function HeroSection(){
  return(
    <section 
      id='inicio'
      className="relative text-white min-h-screen flex items-center 
                 bg-gradient-to-r from-koda-blue-marino to-koda-blue-deep">
        
        <div className='px-4 flex flex-col items-center'> 

          <h1 className='text-5xl md:text-7xl font-bold leading-tight mb-4'>
            Software con <br /> calidad desde la raíz
          </h1>
         
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Desarrollamos software de calidad que impulsa tu negocio
          </p>
          
          <a href="#servicios"
             className='inline-block text-white font-bold py-4 px-10 rounded-lg text-lg transition-all 
                     bg-gradient-to-r from-koda-green-light to-koda-green-emerald
                     hover:shadow-lg hover:shadow-koda-green-emerald/50'>
            Conoce nuestros servicios
          </a>

        </div>
    </section>
  )
}