import InfoCard from "../ui/InfoCard";

export default function AboutSection(){
    return (
        <section id="sobre-nosotros" className="py-20 px-4 bg-white">
            <div  className="container mx-auto text-center">
                <h2 className="text-4xl font-bold text-koda-dark mb-12">
                    Quienes somos
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <InfoCard title="Misión"/>
                    <InfoCard title="Visión"/>
                    <InfoCard title="Valores"/>
                </div>
                <a href="/filosofia"
                   className="bg-koda-green-emerald hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors">
                    Conoce sobre KODA
                   </a>
            </div>
        </section>
    )
}