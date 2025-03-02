import { Link } from "react-router-dom";
import "../../scss/Home/HomeHero.scss";

const HomeHero = () => {
  return (
    <div className="home-hero">
      <h1>Zacznij pomagać!</h1>
      <h1>Oddaj niechciane rzeczy w zaufane ręce</h1>
      <div className="main-text-decoration"></div>
      <div className="home-hero__buttons">
        <Link to="/login" className="home-hero__button">
          ODDAJ<br></br> RZECZY
        </Link>
        <Link to="/login" className="home-hero__button">
          ZORGANIZUJ<br></br> ZBIÓRKĘ
        </Link>
      </div>
    </div>
  );
};

export default HomeHero;
