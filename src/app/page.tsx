export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background p-24">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-secondary">
          KODA
        </h1>
        <p className="mt-4 text-2xl text-primary">
          Software con calidad desde la raíz 🌱
        </p>
        <button className="mt-8 rounded-lg bg-primary px-6 py-3 font-bold text-on-primary transition hover:bg-secondary">
          Prueba de Botón
        </button>
      </div>
    </main>
  )
}