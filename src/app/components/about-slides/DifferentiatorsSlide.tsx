import { FaCog, FaSitemap, FaCheckCircle } from 'react-icons/fa';

const DiffItem = ({ icon, title, text }: { icon: React.ReactNode, title: string, text: string }) => (
  <div className="bg-koda-gray-light p-6 rounded-lg">
    <div className="text-4xl text-koda-green-emerald mx-auto mb-3 w-fit">{icon}</div>
    <h4 className="text-xl font-bold text-koda-dark">{title}</h4>
    <p className="mt-2 text-koda-dark">{text}</p>
  </div>
);

export const DifferentiatorsSlide = () => (
  <div className="p-10 text-center h-[60vh] flex flex-col justify-center">
    <h2 className="text-3xl font-bold text-koda-dark mb-2">Qué nos diferencia</h2>
    <p className="mb-8 text-koda-dark">No solo desarrollamos software, creamos soluciones pensadas para crecer con tu negocio.</p>
    <div className="grid md:grid-cols-3 gap-6">
      <DiffItem icon={<FaCog />} title="Personalización total" text="Software diseñado a tu medida." />
      <DiffItem icon={<FaSitemap />} title="Metodología ágil" text="Procesos claros y trazables." />
      <DiffItem icon={<FaCheckCircle />} title="Calidad continua" text="Testing y validación en cada entrega." />
    </div>
  </div>
);