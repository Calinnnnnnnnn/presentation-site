import React, { useState, useEffect, useRef } from "react";
import styles from "./EventOrganiser.module.css";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";

function EventOrganiser() {
  const { t } = useTranslation();
  const [sliderKey, setSliderKey] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setSliderKey((prev) => prev + 1);
      setTimeout(() => {
        if (sliderRef.current) sliderRef.current.slickGoTo(0);
      }, 100);
    };
    window.addEventListener("resize", handleResize);
    setTimeout(() => setSliderKey(1), 100);
    return () => window.removeEventListener("resize", handleResize);
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
      { breakpoint: 768, settings: { slidesToShow: 1, arrows: true } },
      { breakpoint: 480, settings: { slidesToShow: 1, arrows: false } }
    ],
    appendDots: dots => (
      <div style={{ marginBottom: "0px", paddingBottom: "10px" }}>
        <ul style={{ margin: "0px" }}>{dots}</ul>
      </div>
    ),
    dotsClass: "slick-dots custom-dots"
  };

  return (
    <section className={styles.project}>
      <h1 className={styles.animateTop}>{t("event.title")}</h1>
      <p className={`${styles.intro} ${styles.animateTop}`}>
        {t("event.intro")}
      </p>

      <div className={styles.featuresCarousel}>
        <div className={`${styles.features} ${styles.animateLeft}`}>
          <h2>{t("event.featuresTitle")}</h2>
          <ul>
            <li>{t("event.feature1")}</li>
            <li>{t("event.feature2")}</li>
            <li>{t("event.feature3")}</li>
            <li>{t("event.feature4")}</li>
            <li>{t("event.feature5")}</li>
            <li>{t("event.feature6")}</li>
          </ul>
        </div>

        <div className={`${styles.carousel} ${styles.animateRight}`}>
          <Slider key={sliderKey} ref={sliderRef} {...settings}>
            {[
              "AWJ1.png",
              "AWJ2.png",
              "AWJ3.png",
              "AWJ6.png",
              "AWJ5.png",
              "AWJ4.png",
            ].map((img, i) => (
              <div key={i}>
                <img src={`${process.env.PUBLIC_URL}/images/Proiect_AWJ/${img}`} alt={`Capture ${i + 1}`} />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <div className={`${styles.tech} ${styles.animateLeft}`}>
        <h2>{t("event.techTitle")}</h2>
        <ul>
          <li>{t("event.tech1")}</li>
          <li>{t("event.tech2")}</li>
          <li>{t("event.tech3")}</li>
        </ul>
      </div>

      <div className={styles.section}>
        <h2 className={styles.animateLeft}>{t("event.structureTitle")}</h2>
        <ul className={styles.animateLeft}>
          <li>{t("event.structure1")}</li>
          <li>{t("event.structure2")}</li>
          <li>{t("event.structure3")}</li>
          <li>{t("event.structure4")}</li>
        </ul>
      </div>

      <div className={styles.section}>
        <h2 className={styles.animateLeft}>{t("event.flowTitle")}</h2>
        <p className={styles.animateLeft}>
          {t("event.flow")}
        </p>
      </div>

      <Link to="/proiecte" className={styles.backButton}>
        &larr; {t("common.backToProjects")}
      </Link>
    </section>
  );
}

export default EventOrganiser;
