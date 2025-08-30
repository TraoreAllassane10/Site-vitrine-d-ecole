import facebookIcon from "../assets/icones/icons8-facebook-50.png";
import instagramIcon from "../assets/icones/icons8-instagram-50.png";
import linkedinIcon from "../assets/icones/icons8-linkedin-50_claire.png";
import twitterIcon from "../assets/icones/icons8-twitter-50.png";

const Header = () => {
  return (
    <div className="flex justify-between place-items-center p-4">
      <div className="flex gap-4 place-items-center">
        {/* Icones sociaux */}
        <div className="flex gap-1">
          <img src={facebookIcon} width={30} height={30} />
          <img src={instagramIcon} width={30} height={30} />
          <img src={linkedinIcon} width={30} height={30} />
          <img src={twitterIcon} width={30} height={30} />
        </div>

        {/* Contacts */}
        <div className="flex gap-4">
          <span>info@inec.com</span>
          <span>00225 00 00 00 00 00</span>
        </div>
      </div>

      <div className="flex gap-2">
        <a href="">Portail</a>
        <a href="">Calendrier</a>
        <a href="">Annulaire</a>
        <a href="">Recherche</a>
      </div>
    </div>
  );
};

export default Header;
