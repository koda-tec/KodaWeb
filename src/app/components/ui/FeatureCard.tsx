// src/app/components/ui/FeatureCard.tsx
import Link from 'next/link';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href?: string; // Opcional, para el botón "Ver más"
}

export default function FeatureCard({ icon, title, description, href }: FeatureCardProps) {
  return (
    <div className="bg-white p-8 rounded-lg border border-koda-border shadow-sm text-left h-full flex flex-col">
      <div className="bg-koda-green-emerald text-white rounded-md w-12 h-12 flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-koda-dark mb-2">{title}</h3>
      <p className="text-gray-500 mb-4 flex-grow">{description}</p>
      {href && (
        <Link href={href} className="mt-auto">
          <button className="bg-koda-blue-deep text-white font-semibold py-2 px-6 rounded-lg transition-opacity hover:opacity-90">
            Ver más
          </button>
        </Link>
      )}
    </div>
  );
}