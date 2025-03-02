import HomeHeader from "./HomeHeader";
import HomeHero from "./HomeHero";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeSteps from "./HomeSteps";
import HomeAbout from "./HomeAbout";
import HomeWhoWeHelp from "./HomeWhoWeHelp";
import HomeContact from "./HomeContact";
import HomeFooter from "./HomeFooter";
import "../../scss/Home/Home.scss";

const Home = () => {
  return (
    <div>
      <section className="home-top-section">
        <div className="home-top-section__image"></div>
        <div className="home-top-section__content">
          <HomeHeader />
          <HomeHero />
        </div>
      </section>
      <HomeThreeColumns />
      <HomeSteps />
      <HomeAbout />
      <HomeWhoWeHelp />
      <HomeContact />
      <HomeFooter />
    </div>
  );
};

export default Home;
