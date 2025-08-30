import Actualites from "../../components/Actualites";
import Bourse from "../../components/Bourse";
import Footer from "../../components/Footer";
import Formations from "../../components/Formations";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Infomations from "../../components/Infomations";
import Presentation from "../../components/Presentation";

const Home = () => {
  return <>
        <Header/>
        <Hero/>
        <Infomations/>
        <Presentation/>
        <Bourse/>
        <Formations/>
        <Actualites/>
        <Footer/>
    </>
};

export default Home;
