import { useState } from "react";
import "../../scss/Home/HomeContact.scss";

const HomeContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Imię jest wymagane";
    } else if (!formData.name.match(/^\S+$/)) {
      newErrors.name = "Imię powinno być jednym wyrazem";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email jest wymagany";
    } else if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.email = "Niepoprawny adres email";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Wiadomość jest wymagana";
    } else if (formData.message.length < 120) {
      newErrors.message = "Wiadomość musi mieć co najmniej 120 znaków";
    }
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      console.log("Błędy walidacji:", validationErrors);
      return;
    }
    setErrors({});

    console.log("Formularz został wysłany");

    try {
      const response = await fetch(
        "https://fer-api.coderslab.pl/v1/portfolio/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();
      console.log("Status odpowiedzi:", response.status);
      if (response.status === 400) {
        setErrors(data.errors || {});
        console.log("Błąd 400! Odpowiedź serwera:", data);
      } else if (response.status === 200 && data.status === "success") {
        setSuccessMessage(
          "Wiadomość została wysłana! Wkrótce się skontaktujemy."
        );
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.error("Błąd podczas wysyłania formularza:", error);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact__header">
        <h1>Skontaktuj się z nami</h1>
        <div className="contact__decoration"></div>
      </div>
      <form className="contact__form" onSubmit={handleSubmit}>
        {successMessage && <p className="success">{successMessage}</p>}
        <div className="contact__form-group">
          <div className="contact__input-container">
            <label htmlFor="name">Wpisz swoje imię</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>
          <div className="contact__input-container">
            <label htmlFor="email">Wpisz swój email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
        </div>
        <div className="contact__textarea-container">
          <label htmlFor="message">Wpisz swoją wiadomość</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && <p className="error">{errors.message}</p>}
        </div>
        <button type="submit" className="contact__submit">
          Wyślij
        </button>
      </form>
    </section>
  );
};

export default HomeContact;
