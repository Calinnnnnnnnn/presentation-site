import React from 'react';
import styles from './Home.module.css';
import { Player } from '@lottiefiles/react-lottie-player';
import { useInView } from 'react-intersection-observer';
import WelcomeSwitcher from '../../Components/WelcomeSwitcher/WelcomeSwithcer';
import AboutMe from '../../Components/AboutMe/AboutMe';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <>
      <WelcomeSwitcher />
      <section id="home" ref={ref} className={styles.home}>
        <div className={styles.content}>
          <div className={`${styles.card} ${inView ? styles.cardVisible : ''}`}>
            <h1 className={styles.title}>{t('home.greeting')}</h1>
            <p className={styles.subtitle}>{t('home.description')}</p>
            <div className={styles.buttons}>
              <Link to="/contact" className={styles.ctaButton}>
                {t('home.contact')}
              </Link>
              <a href="#aboutMe" className={styles.secondaryButton}>
                {t('home.about')}
              </a>
            </div>
          </div>

          <div className={`${styles.animationBlock} ${inView ? styles.animationVisible : ''}`}>
            <Player
              autoplay
              loop
              src="https://lottie.host/29e65c07-0e1a-43da-a93b-b5213808250f/qX54y0wZ9P.json"
              style={{ height: '300px', width: '300px' }}
            />
          </div>
        </div>
      </section>
      <AboutMe />
    </>
  );
}

export default Home;
