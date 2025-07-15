import React, { useState, useEffect, useRef } from "react";
import styles from "./MusicVisualizer.module.css";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { Player } from "@lottiefiles/react-lottie-player";
import { useTranslation } from "react-i18next";

function MusicVisualizer() {
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
    setTimeout(() => {
      setSliderKey(1);
    }, 100);

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
        settings: { slidesToShow: 1, slidesToScroll: 1, dots: true, arrows: true }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1, dots: true, arrows: false }
      }
    ],
    appendDots: dots => (
      <div style={{ marginBottom: "0px", paddingBottom: "10px" }}>
        <ul style={{ margin: "0px" }}>{dots}</ul>
      </div>
    ),
    dotsClass: "slick-dots custom-dots"
  };

  // Slider images array
  const sliderImages = [
    "Home.png",
    "ss_pagina_about.png",
    "ss_pagina_AI_1.png",
    "ss_pagina_AI_2.png",
    "ss_pagina_AI_3.png",
    "ss_pagina_live_music_visualizer_1.png",
    "ss_pagina_Trap_Visualizer_1.png",
    "ss_pagina_Trap_Visualizer_2.png"
  ];

  return (
    <section className={styles.project}>
      <h1 className={styles.animateTop}>Music Visualizer</h1>
      <p className={`${styles.intro} ${styles.animateLeft}`}>
        {t("music.intro")}
      </p>

      {/* Vizualizare audio live */}
      <div className={styles.featuresCarousel}>
        <div className={`${styles.features} ${styles.animateLeft}`}>
          <h2>{t("music.audioTitle")}</h2>
          <ul>
            <li>{t("music.audio1")}</li>
            <li>{t("music.audio2")}</li>
            <li>{t("music.audio3")}</li>
            <li>{t("music.audio4")}</li>
          </ul>
        </div>

        <div className={`${styles.carousel} ${styles.animateRight}`}>
          <Slider key={sliderKey} ref={sliderRef} {...settings}>
            {sliderImages.map((img, i) => (
              <div key={i}>
                <img
                  src={`/images/Proiect_AM/${img}`}
                  alt={`Vizualizare ${i + 1}`}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Generare videoclip AI */}
      <div className={styles.featuresCarousel}>
        <div className={`${styles.features} ${styles.animateLeft}`}>
          <h2>{t("music.aiTitle")}</h2>
          <ul>
            <li>{t("music.ai1")}</li>
            <li>{t("music.ai2")}</li>
            <li>{t("music.ai3")}</li>
            <li>{t("music.ai4")}</li>
          </ul>
        </div>

        <div className={`${styles.lottieWrapper} ${styles.animateRight}`}>
          <Player
            autoplay
            loop
            src="https://lottie.host/83695edb-a74f-4db6-952f-a382706833d3/dBFpEs5aok.json"
            className={styles.lottie}
          />
        </div>
      </div>

      {/* Trap Visualizer */}
      <div className={styles.featuresCarousel}>
        <div className={`${styles.features} ${styles.animateLeft}`}>
          <h2>{t("music.trapTitle")}</h2>
          <ul>
            <li>{t("music.trap1")}</li>
            <li>{t("music.trap2")}</li>
            <li>{t("music.trap3")}</li>
            <li>{t("music.trap4")}</li>
          </ul>
        </div>
      </div>

      {/* Tehnologii */}
      <div className={`${styles.tech} ${styles.animateLeft}`}>
        <h2>{t("music.techTitle")}</h2>
        <ul>
          <li>{t("music.tech1")}</li>
          <li>{t("music.tech2")}</li>
          <li>{t("music.tech3")}</li>
          <li>{t("music.tech4")}</li>
        </ul>
      </div>

      {/* Flux */}
      <h2 className={styles.animateLeft}>{t("music.flowTitle")}</h2>
      <p className={styles.animateLeft}>{t("music.flow")}</p>

      <Link to="/proiecte" className={styles.backButton}>
        &larr; {t("common.backToProjects")}
      </Link>
    </section>
  );
}

export default MusicVisualizer;
