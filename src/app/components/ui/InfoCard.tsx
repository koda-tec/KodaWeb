interface InfoCardProps {
    title: string;
}

export default function InfoCard({title}:InfoCardProps) {
    return(
        <div className="bg-koda-gray-light p-10 rounded-lg shadow-sm text-center min-h-[150px] flex items-center justify-center">
            <h3 className="text-xl font-semibold text-koda-dark">{title}</h3>
        </div>
    )
}