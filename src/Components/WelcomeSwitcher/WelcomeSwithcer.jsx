import React, { useEffect, useState } from 'react';
import styles from './WelcomeSwitcher.module.css';
import { Player } from '@lottiefiles/react-lottie-player';
import ParticlesFallback from '../ParticlesBackground/ParticlesBackground';
import { useTranslation } from 'react-i18next';

const messages = [
  'Bun venit!',
  'Welcome!',
  'Willkommen!',
  'Bienvenue!',
  '欢迎',
  'Καλώς ήρθατε',
  'ようこそ',
];

const sliderImages = [
  '/images/Proiect_BD/Intampinare.png',
  '/images/Proiect_AM/ss_pagina_live_music_visualizer_1.png',
  '/images/PowerBI/SS_Raport.png',
  '/images/Proiect_BD/Lista.png',
];

function WelcomeSwitcher() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [hasAppeared, setHasAppeared] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    const initialTimer = setTimeout(() => {
      setHasAppeared(true);
    }, 1500);

    return () => clearTimeout(initialTimer);
  }, []);

  useEffect(() => {
    if (!hasAppeared) return;

    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex(prev => (prev + 1) % messages.length);
        setFade(true);
      }, 500);
    }, 2500);

    return () => clearInterval(interval);
  }, [hasAppeared]);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % sliderImages.length);
    }, 4000);

    return () => clearInterval(slideTimer);
  }, []);

  const scrollToHome = () => {
    const section = document.getElementById("home");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home_1">
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.left}>
            <h2 className={`${styles.message} ${
              !hasAppeared
                ? styles.slideFadeInStart
                : fade
                ? styles.fadeIn
                : styles.fadeOut
            }`}>
              {messages[index]}
            </h2>
        
            <div className={styles.sliderAuto}>
              {sliderImages.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Slide ${i + 1}`}
                  className={`${styles.sliderImage} ${i === currentSlide ? styles.active : ''}`}
                />
              ))}
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.card}>
              <h3>{t('welcome.innovation')}</h3>
              <p>{t('welcome.description')}</p>

              <Player
                autoplay
                loop
                src="https://lottie.host/3680e0aa-4cc4-4a5f-b46b-179d9158b5bd/8rXU3e1xw7.json"
                className={styles.lottie}
              />

              <button onClick={scrollToHome} className={styles.scrollButton}>
                {t('welcome.explore')}
                <span className={styles.arrow}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div style={{ position: "relative", height: "150px" }}>
        <ParticlesFallback />
      </div>
    </section>
  );
}

export default WelcomeSwitcher;
