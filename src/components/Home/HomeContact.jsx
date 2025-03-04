import "../../scss/Home/HomeContact.scss";

const HomeContact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact__header">
        <h1>Skontaktuj się z nami</h1>
        <div className="contact__decoration"></div>
      </div>
      <form className="contact__form">
        <div className="contact__form-group">
          <div className="contact__input-container">
            <label htmlFor="name">Wpisz swoje imię</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="contact__input-container">
            <label htmlFor="email">Wpisz swój email</label>
            <input type="email" id="email" name="email" />
          </div>
        </div>
        <div className="contact__textarea-container">
          <label htmlFor="message">Wpisz swoją wiadomość</label>
          <textarea id="message" name="message"></textarea>
        </div>
        <button type="submit" className="contact__submit">
          Wyślij
        </button>
      </form>
    </section>
  );
};

export default HomeContact;
