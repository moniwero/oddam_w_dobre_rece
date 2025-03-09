import "../../scss/Home/HomeFooter.scss";

import FacebookIcon from "../../assets/Facebook.svg";
import InstagramIcon from "../../assets/Instagram.svg";

const HomeFooter = () => {
  return (
    <section className="home-footer">
      <h3>Copyright by Coders Lab</h3>
      <div className="home-footer__social-media">
        <a
          href="https://www.facebook.com/CodersLabSzkolaIT"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={FacebookIcon} alt="Facebook" />
        </a>
        <a
          href="https://www.instagram.com/coders.lab?igsh=dWl4N3pjMWloemF4"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={InstagramIcon} alt="Instagram" />
        </a>
      </div>
    </section>
  );
};

export default HomeFooter;
