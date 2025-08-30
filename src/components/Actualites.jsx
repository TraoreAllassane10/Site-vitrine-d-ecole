import img1 from "../assets/images/photo1.png";
import img2 from "../assets/images/photo6.png";
import img3 from "../assets/images/photo3.png";

const Actualites = () => {
  return (
    <div className="max-w-7xl mx-auto flex gap-4 mt-10">
      {/* Text */}
      <div className="flex-1 flex flex-col gap-3">
        <span className="text-[var(--color-red)]">Actualités</span>

        <h2 className="text-3xl font-medium">Actualités</h2>

        <div className="grid grid-cols-3 gap-4">
          <div className="border border-yellow-400 shadow">
            {/* card Header */}
            <div>
              <img src={img1} />
            </div>

            {/* card infos */}
            <div className="p-4">
              <h2 className="text-lg font-medium">Titre de l'actualité 1</h2>
              <p className=" leading-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi vel libero hic dolor deleniti, qui repellat sapiente
                distinctio. Quas aliquid commodi blanditiis quae accusantium
                inventore nemo corrupti vitae consequatur ea?
              </p>
              <a href="" className="text-[var(--color-red)]">
                Lire la suite
              </a>
            </div>
          </div>

          <div className="border border-yellow-400 shadow">
            {/* card Header */}
            <div>
              <div>
                <img src={img1} />
              </div>
            </div>

            {/* card infos */}
            <div className="p-4">
              <h2 className="text-lg font-medium">Titre de l'actualité 2</h2>
              <p className=" leading-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi vel libero hic dolor deleniti, qui repellat sapiente
                distinctio. Quas aliquid commodi blanditiis quae accusantium
                inventore nemo corrupti vitae consequatur ea?
              </p>
              <a href="" className="text-[var(--color-red)]">
                Lire la suite
              </a>
            </div>
          </div>

          <div className="border border-yellow-400 shadow">
            {/* card Header */}
            <div>
              <div>
                <img src={img1} />
              </div>
            </div>

            {/* card infos */}
            <div className="p-4">
              <h2 className="text-lg font-medium">Titre de l'actualité 3</h2>
              <p className=" leading-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi vel libero hic dolor deleniti, qui repellat sapiente
                distinctio. Quas aliquid commodi blanditiis quae accusantium
                inventore nemo corrupti vitae consequatur ea?
              </p>
              <a href="" className="text-[var(--color-red)]">
                Lire la suite
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Actualites;
