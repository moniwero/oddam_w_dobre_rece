import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeSteps from "./HomeSteps";
import HomeAbout from "./HomeAbout";
import HomeWhoWeHelp from "./HomeWhoWeHelp";
import HomeContact from "./HomeContact";
import HomeFooter from "./HomeFooter";

const Home = () => {
  return (
    <div>
      <HomeHeader />
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
