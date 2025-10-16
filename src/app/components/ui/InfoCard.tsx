interface InfoCardProps {
    title: string;
}

export default function InfoCard({ title }: InfoCardProps) {
    return (
        <div 
            
            className="bg-white p-10 rounded-xl shadow-lg border border-koda-border 
                       text-center min-h-[150px] flex items-center justify-center
                       transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
        >
            <h3 className="text-xl font-semibold text-koda-dark">{title}</h3>
        </div>
    );
}