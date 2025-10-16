import InfoCard from "../ui/InfoCard";
import Link from 'next/link';

export default function AboutSection() {
    return (
        
        <section id="sobre-nosotros" className="py-24 px-4 bg-white">
            <div className="container mx-auto text-center">
               
                <h2 className="text-4xl md:text-5xl font-bold text-koda-dark mb-16">
                    Quiénes somos
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <InfoCard title="Misión" />
                    <InfoCard title="Visión" />
                    <InfoCard title="Valores" />
                </div>
               
                <Link href="/filosofia"
                   className="inline-block bg-koda-green-emerald text-white font-bold py-3 px-8 rounded-lg text-lg transition-all shadow-md hover:shadow-lg border border-green-700/20">
                    Conoce sobre KODA
                </Link>
            </div>
        </section>
    );
}