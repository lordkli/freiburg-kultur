import "./App.css";
import Cards from "./components/Cards.js";
import Footer from "./components/Footer.js";
import HeroSection from "./components/HeroSection.js";

function Home() {
  return (
    <>
      <HeroSection/>
      <Cards />
      <Footer />
    </>
  );
}
export default Home;
