
const Formations = () => {
  return (
    <div className="bg-amber-50">
        <div className="max-w-7xl mx-auto py-10 flex flex-col gap-4">
            <span className="text-[var(--color-red)]">Nos Formations</span>

            <h2 className="text-xl font-bold">Nos Filières de Formations</h2>

            <div className="grid grid-cols-4 gap-4">
                <div data-aos="fade-right" className="border border-[var(--color-red)] border-l-8 border-l-[var(--color-red)] p-4 font-medium bg-white">
                    Informatique, Développeur d'Applications
                </div>

                 <div data-aos="fade-right"  className="border border-yellow-500 border-l-8 border-l-yellow-500 p-4 font-medium bg-white">
                    Tourisme & Hotéllerie
                </div>

                <div data-aos="fade-left"  className="border border-[var(--color-bleu)] border-l-8 border-l-[var(--color-blue)] p-4 font-medium bg-white">
                    Finance Comptabilité et Gestion d'Entreprise
                </div>

                <div data-aos="fade-left"  className="border border-[var(--color-gray)] border-l-8 border-l-[var(--color-gray)] p-4 font-medium bg-white">
                    Gestion Commerciale
                </div>

                {/* Deuxieme ligne */}
                <div data-aos="fade-right"  className="border border-[var(--color-red)] border-l-8 border-l-[var(--color-red)] p-4 font-medium bg-white">
                    Ressource Humaine et Communication
                </div>

                 <div data-aos="fade-right"  className="border border-yellow-500 border-l-8 border-l-yellow-500 p-4 font-medium bg-white">
                    Electronique
                </div>

                <div data-aos="fade-left"  className="border border-[var(--color-bleu)] border-l-8 border-l-[var(--color-blue)] p-4 font-medium bg-white">
                    Agriculture Tropicale , Production Animale
                </div>

                <div data-aos="fade-left"  className="border border-[var(--color-gray)] border-l-8 border-l-[var(--color-gray)] p-4 font-medium bg-white">
                    Gestion de Projets
                </div>
            </div>

            <a href="" className="text-[var(--color-red)] text-right">Toutes les formations</a>
        </div>
    </div>
  )
}

export default Formations