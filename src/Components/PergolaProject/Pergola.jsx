import React, { useState, useEffect, useRef } from "react";
import styles from "./Pergola.module.css";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";

function Pergola() {
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

    window.addEventListener("resize", handleResize);
    setTimeout(() => setSliderKey(1), 100);

    return () => {
      window.removeEventListener("resize", handleResize);
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
        settings: { slidesToShow: 1, slidesToScroll: 1 }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1, arrows: false }
      }
    ],
    appendDots: dots => (
      <div style={{ paddingBottom: "10px" }}>
        <ul style={{ margin: "0px" }}>{dots}</ul>
      </div>
    ),
    dotsClass: "slick-dots custom-dots"
  };

  return (
    <section className={styles.project}>
      <h1 className={styles.animateTop}>{t("pergola.title")}</h1>
      <p className={`${styles.intro} ${styles.animateTop}`}>
        {t("pergola.intro")}
      </p>

      <div className={styles.featuresCarousel}>
        <div className={`${styles.features} ${styles.animateLeft}`}>
          <h2>{t("pergola.featuresTitle")}</h2>
          <ul>
            <li>{t("pergola.feature1")}</li>
            <li>{t("pergola.feature2")}</li>
            <li>{t("pergola.feature3")}</li>
            <li>{t("pergola.feature4")}</li>
            <li>{t("pergola.feature5")}</li>
          </ul>
        </div>

        <div className={`${styles.carousel} ${styles.animateRight}`}>
          <Slider key={sliderKey} ref={sliderRef} {...settings}>
            <div>
              <img src={`${process.env.PUBLIC_URL}/images/Proiect_PM/Pergola4.png`} alt="Pergola 1" />
            </div>
            <div>
              <img src={`${process.env.PUBLIC_URL}/images/Proiect_PM/Pergola2.jpeg`} alt="Pergola 2" />
            </div>
            <div>
              <img src={`${process.env.PUBLIC_URL}/images/Proiect_PM/Pergola3.jpeg`} alt="Pergola 3" />
            </div>
            <div>
              <img src={`${process.env.PUBLIC_URL}/images/Proiect_PM/Pergola5.jpg`} alt="Pergola 4" />
            </div>
          </Slider>
        </div>
      </div>

      <div className={`${styles.tech} ${styles.animateLeft}`}>
        <h2>{t("pergola.techTitle")}</h2>
        <ul>
          <li><strong>{t("pergola.tech1")}</strong></li>
          <li><strong>{t("pergola.tech2")}</strong></li>
          <li><strong>{t("pergola.tech3")}</strong></li>
          <li><strong>{t("pergola.tech4")}</strong></li>
          <li><strong>{t("pergola.tech5")}</strong></li>
          <li><strong>{t("pergola.tech6")}</strong></li>
          <li><strong>{t("pergola.tech7")}</strong></li>
        </ul>
      </div>

      <h2 className={styles.animateLeft}>{t("pergola.flowTitle")}</h2>
      <p className={styles.animateLeft}>{t("pergola.flow")}</p>

      <Link to="/proiecte" className={styles.backButton}>
        &larr; {t("common.backToProjects")}
      </Link>

      <Link
        to="https://ocw.cs.pub.ro/courses/pm/prj2025/avaduva/ioan_calin.ilie"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.ocwButton}
      >
        {t("pergola.ocwButton")}
      </Link>
    </section>
  );
}

export default Pergola;
