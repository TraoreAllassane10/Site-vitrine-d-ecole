import img from "../assets/images/photo6.png";

const Bourse = () => {
  return (
    <div className="mt-10 bourse relative">
      <div className="bg-slate-800/80 absolute w-full">
        <div className="relative h-[30vh] text-white flex flex-col justify-center items-center gap-4 p-8">
          <h2 className="text-3xl font-bold">Bourse d'étude gratuite à INEC</h2>

          <div className="text-center">
            <p>
              Candidature pour la rentrée 2025-2026. Nous ne faisons que donner
              aux étudiants une education et des expériences qui les preparent
              au succès dans une carrière. Nous les aidons à reussir dans leur
              carrière pour decouvrir un domaine qui les passionnent et oser les
              dirigés.
            </p>
          </div>

          <a className="btn-primary cursor-pointer">Postuler maintenant</a>
        </div>
      </div>
    </div>
  );
};

export default Bourse;
