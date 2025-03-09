import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "../../scss/Home/HomeHeader.scss";

const HomeHeader = () => {
  return (
    <header className="home-header">
      <div className="menu-container">
        <nav className="home-header__top-menu">
          <Link to="/login" className="home-header__link">
            Zaloguj
          </Link>
          <Link to="/register" className="home-header__link">
            Załóż konto
          </Link>
        </nav>
        <nav className="home-header__bottom-menu">
          <ScrollLink
            to="start"
            smooth={true}
            className="home-header__scroll-link"
          >
            Start
          </ScrollLink>
          <ScrollLink
            to="about"
            smooth={true}
            className="home-header__scroll-link"
          >
            O co chodzi?
          </ScrollLink>
          <ScrollLink
            to="us"
            smooth={true}
            className="home-header__scroll-link"
          >
            O nas
          </ScrollLink>
          <ScrollLink
            to="who_we_help"
            smooth={true}
            className="home-header__scroll-link"
          >
            Fundacja i organizacje
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            className="home-header__scroll-link"
          >
            Kontakt
          </ScrollLink>
        </nav>
      </div>
    </header>
  );
};

export default HomeHeader;