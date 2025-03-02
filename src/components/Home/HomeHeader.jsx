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
            to="foundations"
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

// import { Link } from "react-router-dom";
// import { Link as ScrollLink } from "react-scroll";
// import "../../scss/Home/HomeHeader.scss";

// const HomeHeader = () => {
//   return (
//     <header className="home-header">
//       {/* Lewa strona z obrazkiem */}
//       <div className="home-header__image"></div>

//       {/* Prawa strona z menu i treścią */}
//       <div className="home-header__content">
//         <div className="menu-container">
//           {/* Górne menu */}
//           <nav className="home-header__top-menu">
//             <Link to="/login" className="home-header__link">
//               Zaloguj
//             </Link>
//             <Link to="/register" className="home-header__link">
//               Załóż konto
//             </Link>
//           </nav>

//           {/* Dolne menu */}
//           <nav className="home-header__bottom-menu">
//             <ScrollLink
//               to="start"
//               smooth={true}
//               className="home-header__scroll-link"
//             >
//               Start
//             </ScrollLink>
//             <ScrollLink
//               to="o-co-chodzi"
//               smooth={true}
//               className="home-header__scroll-link"
//             >
//               O co chodzi?
//             </ScrollLink>
//             <ScrollLink
//               to="o-nas"
//               smooth={true}
//               className="home-header__scroll-link"
//             >
//               O nas
//             </ScrollLink>
//             <ScrollLink
//               to="fundacje"
//               smooth={true}
//               className="home-header__scroll-link"
//             >
//               Fundacja i organizacje
//             </ScrollLink>
//             <ScrollLink
//               to="kontakt"
//               smooth={true}
//               className="home-header__scroll-link"
//             >
//               Kontakt
//             </ScrollLink>
//           </nav>
//         </div>

//         {/* Główna treść */}
//         <div className="home-header__main-text">
//           <h1>Zacznij pomagać!</h1>
//           <h1>Oddaj niechciane rzeczy w zaufane ręce</h1>
//           <div className="main-text-decoration"></div>
//           <div className="home-header__buttons">
//             <Link to="/login" className="home-header__button">
//               ODDAJ<br></br> RZECZY
//             </Link>
//             <Link to="/login" className="home-header__button">
//               ZORGANIZUJ<br></br> ZBIÓRKĘ
//             </Link>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default HomeHeader;
