import img2 from "../assets/images/photo6.png";
import img1 from "../assets/images/photo3.png";
import AdmissibleBtn from "./AdmissibleBtn";

const Presentation = () => {
  return (
    <div className="max-w-7xl mx-auto flex gap-4 mt-10">
      {/* Text */}
      <div className="flex-1 flex flex-col gap-3">
        <span className="text-[var(--color-red)]">L'établissement</span>

        <h2 className="text-3xl font-medium">
          Institut National d'Intelligence Numérique Economique et Commerciale
        </h2>

        <p className="text-gray-600">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident
          consectetur voluptates nostrum eligendi quod, molestiae perspiciatis
          facilis fugit facere deleniti praesentium nesciunt consequuntur id
          reiciendis sequi error quaerat laborum minima eligendi quod, molestiae
          perspiciatis facilis fugit facere deleniti praesentium nesciunt
          consequuntur id reiciendis sequi error quaerat laborum minima sit amet
          consectetur adipisicing elit. Provident consectetur voluptates nostrum
          eligendi quod, molestiae perspiciatis facilis fugit facere deleniti
          praesentium nesciunt consequuntur id reiciendis sequi error quaerat
          laborum minima reiciendis sequi error quaerat laborum minima eligendi
          quod, molestiae perspiciatis facilis fugit facere deleniti praesentium
          nesciunt consequuntur id reiciendis sequi error quaerat laborum minima
          sit amet consectetur adipisicing elit. Provident consectetur
          voluptates nostrum eligendi quod,.
        </p>

        <div className="flex place-items-center gap-10">
          <a
            href=""
            className="italic bg-[var(--color-gray)] hover:bg-gray-700/70 text-white p-2 rounded transition"
          >
            En savoir plus
          </a>

          <div>
            <AdmissibleBtn />
          </div>
        </div>
      </div>

      {/* Images */}
      <div className="flex gap-2 flex-1">
        <div>
          <img src={img1} className="shadow h-full" />
        </div>
        <div className="h-full flex flex-col justify-between">
          <img src={img2} className="shadow h-3/4" />
          
          <div className="bg-[var(--color-bleu)] text-white p-6 text-xl text-center font-medium">
            Awards de l'Excellence 2025
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
