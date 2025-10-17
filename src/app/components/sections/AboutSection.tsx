import FeatureCard from "../ui/FeatureCard";
import Link from 'next/link';
import { FaFlag, FaEye, FaGem } from 'react-icons/fa'; 

const aboutData = [
  { icon: <FaFlag size={24} />, title: "Misión", description: "Pareleposco de empres ssacas.ragnados." },
  { icon: <FaEye size={24} />, title: "Visión", description: "Prablosndo de voráco ccompersaóle prordendoss." },
  { icon: <FaGem size={24} />, title: "Valores", description: "Paroliaans cubremen desenuer emesivindos." },
];

export default function AboutSection() {
  return (
    <section id="quienes-somos" className="py-24 px-4 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-koda-dark mb-16">
          Quiénes somos
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {aboutData.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>
        <Link href="/filosofia">
          <button className="bg-koda-blue-deep text-white font-bold py-3 px-8 rounded-lg text-lg transition-opacity hover:opacity-90">
            Conoce sobre Koda
          </button>
        </Link>
      </div>
    </section>
  );
}