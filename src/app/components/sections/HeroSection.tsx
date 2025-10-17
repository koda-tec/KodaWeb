export default function HeroSection(){
  return(
    <section 
      id='inicio'
      

      className="relative text-white min-h-screen flex items-center 
                 bg-gradient-to-r from-hero-start to-hero-end">
        
    

      <div className='container mx-auto px-8 md:px-12 text-left'> 

        <h1 className='text-5xl md:text-7xl font-bold leading-tight mb-4 max-w-2xl'>
          Software con calidad desde la raíz
        </h1>
       
        <p className="text-lg md:text-xl mb-8 max-w-2xl opacity-90">
          Desarrollamos software de calidad que impulsa tu negocio
        </p>
        
       
        <a href="#servicios"
           className='inline-block text-white font-bold py-4 px-10 rounded-lg text-lg transition-transform hover:-translate-y-1 
                      bg-gradient-to-b from-btn-start to-btn-end'>
          Conoce nuestros servicios
        </a>

      </div>
    </section>
  )
}