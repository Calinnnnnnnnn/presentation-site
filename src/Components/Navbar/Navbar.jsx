import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { i18n } = useTranslation();

  // Limba curentă
  const currentLang = i18n.language || "ro";

  useEffect(() => {
    const savedLang = localStorage.getItem("selectedLanguage");
    if (savedLang && savedLang !== i18n.language) {
      i18n.changeLanguage(savedLang);
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [i18n]);

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("selectedLanguage", lang);
    setMenuOpen(false); // închide meniul pe mobil
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      {/* Limbile (stânga) */}
      <div className={styles.languageToggle}>
        <button
          onClick={() => handleLanguageChange("ro")}
          className={currentLang === "ro" ? styles.active : ""}
        >
          <span className="fi fi-ro"></span>
          <span>RO</span>
        </button>
        <button
          onClick={() => handleLanguageChange("en")}
          className={currentLang === "en" ? styles.active : ""}
        >
          <span className="fi fi-gb"></span>
          <span>EN</span>
        </button>
      </div>

      {/* Logo (centru) */}
      <div className={styles.logo}>
        <img
          src="/images/Logo/Ilie Ioan-Calin_Logo.png"
          alt="Logo Călin Ilie"
        />
      </div>

      {/* Dreapta */}
      <div className={styles.right}>
        {/* Burger */}
        <div
          className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Linkurile */}
        <ul
          className={`${styles.navLinks} ${menuOpen ? styles.navLinksOpen : ""}`}
        >
          {/* Pe mobil, limbile apar aici */}
          <li className={styles.mobileLanguages}>
            <button
              onClick={() => handleLanguageChange("ro")}
              className={currentLang === "ro" ? styles.active : ""}
            >
              <span className="fi fi-ro"></span> RO
            </button>
            <button
              onClick={() => handleLanguageChange("en")}
              className={currentLang === "en" ? styles.active : ""}
            >
              <span className="fi fi-gb"></span> EN
            </button>
          </li>
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              <i className="fas fa-home"></i>{" "}
              {currentLang === "ro" ? "Acasă" : "Home"}
            </Link>
          </li>
          <li>
            <Link to="/proiecte" onClick={() => setMenuOpen(false)}>
              <i className="fas fa-briefcase"></i>{" "}
              {currentLang === "ro" ? "Proiecte" : "Projects"}
            </Link>
          </li>
          <li className={styles.contactButton}>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              <i className="fas fa-envelope"></i>{" "}
              {currentLang === "ro" ? "Contact" : "Contact"}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
