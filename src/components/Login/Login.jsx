import { Link } from "react-router-dom";
import "../../scss/Login/Login.scss";
import { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const validate = () => {
    let newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email jest wymagany";
    } else if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.email = "Podany email jest nieprawidłowy!";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Hasło jest wymagane.";
    } else if (formData.password.length < 6) {
      newErrors.password = "Podane hasło jest za krótkie!";
    }

    return newErrors;
  };

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

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

      <section className="login">
        <h1>Zaloguj się</h1>
        <div className="login__decoration"></div>
        <form className="login__form" onSubmit={handleSubmit}>
          <div className="form-background">
            <label className="label-email">
              Email
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="error show">{errors.email}</p>}
              {!errors.email && <p className="error"></p>}
            </label>
            <label className="label-password">
              Hasło
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && (
                <p className="error show">{errors.password}</p>
              )}
              {!errors.password && <p className="error"></p>}
            </label>
          </div>
          <div className="login__buttons">
            <Link to="/register">
              <button type="button">Załóż konto</button>
            </Link>
            <button type="submit">Zaloguj się</button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Login;
