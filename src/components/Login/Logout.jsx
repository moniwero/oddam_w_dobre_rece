import { Link } from "react-router-dom";
import "../../scss/Login/Logout.scss";

const Logout = () => {
  return (
    <>
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
            <Link to="/" className="home-header__link">
              Start
            </Link>
            <Link to="/" className="home-header__link">
              O co chodzi?
            </Link>
            <Link to="/" className="home-header__link">
              O nas
            </Link>
            <Link to="/" className="home-header__link">
              Fundacja i organizacje
            </Link>
            <Link to="/" className="home-header__link">
              Kontakt
            </Link>
          </nav>
        </div>
      </header>

      <section className="logout">
        <h1>Wylogowanie nastąpiło pomyślnie!</h1>
        <div className="logout__decoration"></div>
        <div className="start-button">
          <Link to="/">
            <button type="button">Strona główna</button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Logout;
