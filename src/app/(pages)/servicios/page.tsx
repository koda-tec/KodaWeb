
"use client"; 


import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";


import FeatureCard from "@/app/components/ui/FeatureCard";
import { FaLaptopCode, FaCogs, FaDatabase, FaTools, FaClipboardCheck } from 'react-icons/fa';


const servicesData = [
  {
    icon: <FaLaptopCode size={28} />,
    title: "Aplicaciones Web",
    description: "Desarrollamos aplicaciones web a medida, robustas y escalables, utilizando las tecnologías más modernas para una experiencia de usuario excepcional.",
  },
  {
    icon: <FaCogs size={28} />,
    title: "Sistemas a Medida",
    description: "Creamos software diseñado específicamente para optimizar tus procesos de negocio, aumentando la eficiencia y reduciendo costos operativos.",
  },
  {
    icon: <FaDatabase size={28} />,
    title: "Bases de Datos",
    description: "Diseñamos y gestionamos arquitecturas de bases de datos eficientes y seguras, garantizando la integridad y disponibilidad de tu información.",
  },
  {
    icon: <FaTools size={28} />,
    title: "Mantenimiento y Soporte",
    description: "Ofrecemos planes de mantenimiento continuo y soporte técnico para asegurar que tus aplicaciones funcionen siempre de manera óptima.",
  },
  {
    icon: <FaClipboardCheck size={28} />,
    title: "QA (Aseguramiento de Calidad)",
    description: "Implementamos un riguroso proceso de testing y validación en cada etapa del desarrollo para entregar un producto final libre de errores.",
  },
];

export default function ServicesPage() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="container mx-auto">
       
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-koda-dark">Nuestros Servicios</h1>
          <p className="mt-4 text-lg text-koda-dark/80 max-w-2xl mx-auto">
            Soluciones tecnológicas diseñadas para impulsar tu negocio al siguiente nivel.
          </p>
        </div>

       
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            {servicesData.map((service, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-4">
                
                <div className="h-full">
                  <FeatureCard
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
}