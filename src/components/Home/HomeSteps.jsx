import { Link } from "react-router-dom";
import "../../scss/Home/HomeSteps.scss";
import Icon1 from "../../assets/Icon-1.svg";
import Icon2 from "../../assets/Icon-2.svg";
import Icon3 from "../../assets/Icon-3.svg";
import Icon4 from "../../assets/Icon-4.svg";

const HomeSteps = () => {
  return (
    <section id="about" className="home-steps">
      <h1>Wystarczą 4 proste kroki</h1>
      <div className="home-steps__decoration"></div>
      <div className="home-steps__columns">
        <div className="home-steps__step">
          <div className="ikon">
            <img src={Icon1} alt="Wybierz rzeczy" />
          </div>
          <h5>Wybierz rzeczy</h5>
          <p>ubrania, zabawki, sprzęt i inne</p>
        </div>
        <div className="home-steps__step">
          <div className="ikon">
            <img src={Icon2} alt="Spakuj je" />
          </div>
          <h5>Spakuj je</h5>
          <p>
            skorzystaj z <br /> worków na śmieci
          </p>
        </div>
        <div className="home-steps__step">
          <div className="ikon">
            <img src={Icon3} alt="Zdecyduj" />
          </div>
          <h5>Zdecyduj komu chcesz pomóc</h5>
          <p>wybierz zaufane miejsce</p>
        </div>
        <div className="home-steps__step">
          <div className="ikon">
            <img src={Icon4} alt="Zamów kuriera" />
          </div>
          <h5>Zamów kuriera</h5>
          <p>kurier przyjedzie w dogodnym terminie</p>
        </div>
      </div>
      <Link to="/login" className="home-steps__button">
        ODDAJ<br></br> RZECZY
      </Link>
    </section>
  );
};

export default HomeSteps;
