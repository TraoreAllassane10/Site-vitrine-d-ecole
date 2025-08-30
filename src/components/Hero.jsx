import NavBar from "./NavBar";

const Hero = () => {
  return (
    <div className="hero">
      <div className="bg-black/60 absolute w-full h-[80vh]">
        <NavBar />

        <div data-aos="fade-right" className="relative mt-36 max-w-7xl m-auto">
          <h2 className="text-white text-7xl font-medium">Notre Vision</h2>
          <p className="text-white text-2xl italic w-[490px]">
            Mettre en place un modele de formation repensé, moderne et compétitf
            favorisant le leadership et l'éclosion des talents.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
