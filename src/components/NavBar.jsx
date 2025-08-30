import logo from "../assets/images/logo.jpg";
import AdmissibleBtn from "./AdmissibleBtn";

const NavBar = () => {
  return (
    <div className="bg-yellow-500/70">
      <div className="max-w-7xl mx-auto flex justify-between place-items-center py-1">
        {/* Logo */}
        <div>
          <img src={logo} width={50} height={50} />
        </div>

        <nav className="flex gap-5 text-white">
          <a href="">Acceuil</a>
          <a href="">Qui sommes-nous ?</a>
          <a href="">Formations</a>
          <a href="">Actualités</a>
          <a href="">Blog</a>
          <a href="">Contact</a>
        </nav>

        <AdmissibleBtn />
      </div>
    </div>
  );
};

export default NavBar;
