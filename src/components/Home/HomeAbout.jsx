import "../../scss/Home/HomeAbout.scss";
import signature from "../../assets/Signature.svg";

const HomeAbout = () => {
  return (
    <section id="us" className="home-about">
      <div className="home-about__text">
        <div className="home-about__context">
          <h1>O nas</h1>
          <div className="home-about__decoration"></div>
          <p>
            Nori grape silver beet broccoli kombu beet greens fava bean potato
            quandong celery. <br /> Bunya nuts black-eyed pea prairie turnip
            leek lentil turnip greens parsnip.
          </p>
        </div>

        <div className="home-about__signature">
          <img src={signature} alt="signature" />
        </div>
      </div>

      <div className="home-about__image"></div>
    </section>
  );
};

export default HomeAbout;
