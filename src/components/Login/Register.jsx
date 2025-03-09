import { useState } from "react";
import { Link } from "react-router-dom";
import "../../scss/Login/Register.scss";

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    password2: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    password2: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email jest wymagany";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Podany email jest nieprawidłowy!";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Hasło jest wymagane.";
    } else if (formData.password.length < 6) {
      newErrors.password = "Podane hasło jest za krótkie!";
    }

    if (!formData.password2.trim()) {
      newErrors.password2 = "Hasło jest wymagane.";
    } else if (formData.password2.length < 6) {
      newErrors.password2 = "Podane hasło jest za krótkie!";
    } else if (formData.password2 !== formData.password) {
      newErrors.password2 = "Hasła muszą być takie same";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log("Formularz poprawnie wypełniony!");
    }
  };

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
            <Link to="/" className="home-header__link">Start</Link>
            <Link to="/" className="home-header__link">O co chodzi?</Link>
            <Link to="/" className="home-header__link">O nas</Link>
            <Link to="/" className="home-header__link">Fundacja i organizacje</Link>
            <Link to="/" className="home-header__link">Kontakt</Link>
          </nav>
        </div>
      </header>

      <section className="register">
        <h1>Załóż konto</h1>
        <div className="register__decoration"></div>
        <form className="register__form" onSubmit={handleSubmit}>
          <div className="form-background">
            <label className="label-email">
              Email
              <input type="email" name="email" value={formData.email} onChange={handleChange} />
              <p className={`error ${errors.email ? "show" : ""}`}>{errors.email}</p>
            </label>
            <label className="label-password">
              Hasło
              <input type="password" name="password" value={formData.password} onChange={handleChange} />
              <p className={`error ${errors.password ? "show" : ""}`}>{errors.password}</p>
            </label>
            <label className="label-password__repeat">
              Powtórz hasło
              <input type="password" name="password2" value={formData.password2} onChange={handleChange} />
              <p className={`error ${errors.password2 ? "show" : ""}`}>{errors.password2}</p>
            </label>
          </div>
          <div className="register__buttons">
            <Link to="/login">
              <button type="button">Zaloguj się</button>
            </Link>
            <button type="submit">Załóż konto</button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Register;
