import React, { useState } from "react";
import styles from "./Contact.module.css";
import { Player } from "@lottiefiles/react-lottie-player";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_8xwg3zs",
      "template_a0ct6zp",
      {
        name: formData.name,
        email: formData.email,
        message: formData.message
      },
      "PxvGhm4QjnBsDdJOS"
    )
    .then(
      (result) => {
        console.log("Mesaj trimis:", result.text);
        setSubmitted(true);
      },
      (error) => {
        console.error("Eroare:", error.text);
        alert(t("contact.error"));
      }
    );
  };

  return (
    <section className={styles.contact}>
      <div className={styles.leftColumn}>
        <h1>{t("contact.title")}</h1>

        {submitted ? (
          <div className={styles.thankYouWrapper}>
            <p className={styles.thankYou}>
              {t("contact.thankYou")}
            </p>
          </div>
        ) : (
          <>
            <p>{t("contact.intro")}</p>
            <form onSubmit={handleSubmit} className={styles.form}>
              <input
                type="text"
                name="name"
                placeholder={t("contact.name")}
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder={t("contact.email")}
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder={t("contact.message")}
                value={formData.message}
                onChange={handleChange}
                required
              />
              <button type="submit">{t("contact.send")}</button>
            </form>
          </>
        )}
      </div>

      <div className={styles.rightColumn}>
        <Player
          autoplay
          loop
          src="https://lottie.host/ebcd6cc2-84f1-4d3a-8804-bf3d83453c43/y6XZgQi9fx.json"
          style={{ height: '300px', width: '300px' }}
        />
        <p className={styles.invite}>
          {t("contact.invite")}
        </p>
        <div className={styles.socials}>
          <a
            href="https://www.linkedin.com/in/ioan-calin-ilie-19a4552a9/?profileId=ACoAAEpId8YB6EZ8wePhiVLJDxuy1i7GRDBoqWo"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Calinnnnnnnnn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/calin.ilie/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
