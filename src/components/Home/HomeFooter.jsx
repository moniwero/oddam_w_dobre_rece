import "../../scss/Home/HomeFooter.scss";

import FacebookIcon from "../../assets/Facebook.svg";
import InstagramIcon from "../../assets/Instagram.svg";

const HomeFooter = () => {
  return (
    <section className="home-footer">
      <h3>Copyright by Coders Lab</h3>
      <div className="home-footer__social-media">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src={FacebookIcon} alt="Facebook" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src={InstagramIcon} alt="Instagram" />
        </a>
      </div>
    </section>
  );
};

export default HomeFooter;
