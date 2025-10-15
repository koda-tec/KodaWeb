import { FaBullseye, FaEye, FaStar, FaLightbulb, FaUsers, FaHandshake, FaSeedling } from 'react-icons/fa';

const ValueItem = ({ icon, text }: { icon: React.ReactNode, text: string }) => (
  <div className="flex flex-col items-center text-center">
    <div className="text-4xl text-koda-blue-deep mb-2">{icon}</div>
    <span className="text-koda-dark">{text}</span>
  </div>
);

export const MissionVisionSlide = () => (
  <div className="p-10 text-center h-[60vh] flex flex-col justify-center">
    <div className="grid md:grid-cols-2 gap-8 mb-8">
      <div>
        <h3 className="text-2xl font-bold text-koda-dark flex items-center justify-center gap-2"><FaBullseye /> Misión</h3>
        <p className="mt-2 text-koda-dark">Desarrollar software a medida que potencie los objetivos de cada empresa, garantizando calidad y organización en cada etapa.</p>
      </div>
      <div>
        <h3 className="text-2xl font-bold text-koda-dark flex items-center justify-center gap-2"><FaEye /> Visión</h3>
        <p className="mt-2 text-koda-dark">Ser un referente en desarrollo de software y aseguramiento de calidad en Latinoamérica.</p>
      </div>
    </div>
    <h3 className="text-2xl font-bold text-koda-dark mb-4">Valores</h3>
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
      <ValueItem icon={<FaSeedling />} text="Calidad desde la raíz" />
      <ValueItem icon={<FaHandshake />} text="Transparencia" />
      <ValueItem icon={<FaLightbulb />} text="Aprendizaje constante" />
      <ValueItem icon={<FaStar />} text="Innovación" />
      <ValueItem icon={<FaUsers />} text="Trabajo en equipo" />
    </div>
  </div>
);