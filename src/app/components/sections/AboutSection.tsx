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
                   className="inline-block font-bold text-white text-lg rounded-lg transition-transform hover:-translate-y-1 py-3 px-8 
                              bg-gradient-to-r from-btn-start to-btn-end">
                    Conoce sobre KODA
                </Link>
            </div>
        </section>
    );
}