import FeatureCard from '@/app/components/ui/FeatureCard';
import { FaLaptopCode, FaMobileAlt, FaDraftingCompass } from 'react-icons/fa';

const servicesData = [
  { icon: <FaLaptopCode size={24} />, title: "Desarrollo web", description: "Pareáxca delec ude Dwtenrías sondlerios remocotriades.", href: "/servicios/desarrollo-web" },
  { icon: <FaMobileAlt size={24} />, title: "Aplicaciones móviles", description: "Parentileon s omosñaa en particínisaa.", href: "/servicios/apps-moviles" },
  { icon: <FaDraftingCompass size={24} />, title: "Sistemas a medida", description: "Payeroa.sraactaa contartos nne.tionees.", href: "/servicios/sistemas-a-medida" },
];

export default function ServicesSection() {
  return (
    <section id="que-hacemos" className="py-24 px-4 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-koda-dark mb-16">
          Qué hacemos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}