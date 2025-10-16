import InfoCard from '@/app/components/ui/InfoCard';

export default function ServicesSection() {
    return (
        
        <section id="servicios" className="py-24 px-4 bg-white">
            <div className="container mx-auto text-center">
                
                <h2 className="text-4xl md:text-5xl font-bold text-koda-dark mb-16">
                    Qué hacemos
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <InfoCard title="Aplicaciones Web" />
                    <InfoCard title="Sistemas a medida" />
                    <InfoCard title="Consultoría Tecnológica" />
                </div>
            </div>
        </section>
    );
}