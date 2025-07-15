import React, { useState, useEffect, useRef } from "react";
import styles from "./RealEstate.module.css";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { Player } from "@lottiefiles/react-lottie-player";
import { useTranslation } from "react-i18next";

function RealEstate() {
  const { t } = useTranslation();
  const [sliderKey, setSliderKey] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setSliderKey(prev => prev + 1);
      setTimeout(() => {
        if (sliderRef.current) {
          sliderRef.current.slickGoTo(0);
        }
      }, 100);
    };

    window.addEventListener('resize', handleResize);
    setTimeout(() => {
      setSliderKey(1);
    }, 100);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false
        }
      }
    ],
    appendDots: dots => (
      <div style={{ marginBottom: '0px', paddingBottom: '10px' }}>
        <ul style={{ margin: '0px' }}>{dots}</ul>
      </div>
    ),
    dotsClass: 'slick-dots custom-dots'
  };

  return (
    <section className={styles.project}>
      <h1 className={styles.animateTop}>{t("realEstate.title")}</h1>
      <p className={`${styles.intro} ${styles.animateLeft}`}>
        {t("realEstate.description")}
      </p>

      <div className={styles.featuresCarousel}>
        <div className={`${styles.features} ${styles.animateLeft}`}>
          <h2>{t("realEstate.featuresTitle")}</h2>
          <ul>
            <li>{t("realEstate.features.0")}</li>
            <li>{t("realEstate.features.1")}</li>
            <li>{t("realEstate.features.2")}</li>
            <li>{t("realEstate.features.3")}</li>
            <li>{t("realEstate.features.4")}</li>
          </ul>
        </div>

        <div className={`${styles.carousel} ${styles.animateRight}`}>
          <div style={{ marginBottom: '0' }}>
            <Slider key={sliderKey} ref={sliderRef} {...settings}>
              {[
                "Home.png",
                "Home2.png",
                "Intampinare.png",
                "Prezentare_imobil.png",
                "Lista.png",
                "LogIN.png",
                "SignUP.png",
                "Profil.png",
                "Admin.png",
                "Statistici.png"
              ].map((img, i) => (
                <div key={i}>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/Proiect_BD/${img}`}
                    alt={t("realEstate.sliderAlt", { index: i + 1 })}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      <div className={`${styles.tech} ${styles.animateLeft}`}>
        <h2>{t("realEstate.techTitle")}</h2>
        <ul>
          <li><strong>Frontend:</strong> React, CSS Modules</li>
          <li><strong>Backend:</strong> Node.js (Express)</li>
          <li><strong>{t("realEstate.database")}:</strong> MySQL</li>
          <li><strong>{t("realEstate.auth")}:</strong> bcrypt, JSON Web Token</li>
        </ul>
      </div>

      <div className={`${styles.dbLottie}`}>
        <div className={`${styles.db} ${styles.animateLeft}`}>
          <h2>{t("realEstate.dbTitle")}</h2>
          <p>{t("realEstate.dbDescription")}</p>
          <ul>
            <li><strong>{t("realEstate.dbTables.0.title")}:</strong> {t("realEstate.dbTables.0.desc")}</li>
            <li><strong>{t("realEstate.dbTables.1.title")}:</strong> {t("realEstate.dbTables.1.desc")}</li>
            <li><strong>{t("realEstate.dbTables.2.title")}:</strong> {t("realEstate.dbTables.2.desc")}</li>
            <li><strong>{t("realEstate.dbTables.3.title")}:</strong> {t("realEstate.dbTables.3.desc")}</li>
            <li><strong>{t("realEstate.dbTables.4.title")}:</strong> {t("realEstate.dbTables.4.desc")}</li>
            <li><strong>{t("realEstate.dbTables.5.title")}:</strong> {t("realEstate.dbTables.5.desc")}</li>
            <li><strong>{t("realEstate.dbTables.6.title")}:</strong> {t("realEstate.dbTables.6.desc")}</li>
          </ul>
        </div>

        <div className={`${styles.lottieWrapper} ${styles.animateRight}`}>
          <Player
            autoplay
            loop
            src="https://lottie.host/c33bf15a-82d0-4e80-baea-87df4bbff1ef/6DX72IVWFL.json"
            className={styles.lottie}
          />
        </div>
      </div>

      <h2>{t("realEstate.flowTitle")}</h2>
      <p>{t("realEstate.flowText")}</p>

      <Link to="/proiecte" className={styles.backButton}>
        &larr; {t("realEstate.backButton")}
      </Link>
    </section>
  );
}

export default RealEstate;
