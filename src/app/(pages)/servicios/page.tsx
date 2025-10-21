// src/app/servicios/page.tsx
"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import FeatureCard from "@/app/components/ui/FeatureCard";
import { FaLaptopCode, FaCogs, FaDatabase, FaTools, FaClipboardCheck } from 'react-icons/fa';

const servicesData = [
  { icon: <FaLaptopCode size={28} />, title: "Aplicaciones Web", description: "Desarrollamos aplicaciones web a medida, robustas y escalables." },
  { icon: <FaCogs size={28} />, title: "Sistemas a Medida", description: "Creamos software diseñado específicamente para optimizar tus procesos." },
  { icon: <FaDatabase size={28} />, title: "Bases de Datos", description: "Diseñamos y gestionamos arquitecturas de bases de datos eficientes y seguras." },
  { icon: <FaTools size={28} />, title: "Mantenimiento y Soporte", description: "Ofrecemos planes de mantenimiento para asegurar que tus aplicaciones funcionen óptimamente." },
  { icon: <FaClipboardCheck size={28} />, title: "QA (Aseguramiento de Calidad)", description: "Implementamos un riguroso proceso de testing para entregar un producto libre de errores." },
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
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full pb-12"
        >
          {servicesData.map((service, index) => (
            <SwiperSlide key={index} className="h-auto p-2">
              <div className="h-full">
                <FeatureCard {...service} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}