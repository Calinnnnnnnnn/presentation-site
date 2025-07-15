import React from 'react';
import styles from './AboutMe.module.css';
import { Player } from '@lottiefiles/react-lottie-player';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation, Trans } from "react-i18next";

function AboutMe() {
  const { t } = useTranslation();

  return (
    <section id="aboutMe" className={styles.aboutMe}>
      {/* Primul rând */}
      <motion.div
        className={styles.row}
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ type: "spring", stiffness: 60, damping: 20 }}
      >
        <div className={styles.imageBlock}>
          <img
            src="/images/Peep/peep-sitting-12.png"
            alt="Person illustration"
            className={styles.peep}
          />
        </div>
        <div className={styles.card}>
          <h2>{t("about.title")}</h2>
          <p>
            <Trans
              i18nKey="about.intro1"
              components={{ b: <b className={styles.highlight} /> }}
            />
          </p>
          <p>
            {t("about.intro2")}
          </p>
          <p>
            {t("about.intro3")}
          </p>
        </div>
      </motion.div>

      {/* Al doilea rând */}
      <motion.div
        className={styles.row}
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ type: "spring", stiffness: 60, damping: 20 }}
      >
        <div className={styles.card}>
          <h2>{t("about.experienceTitle")}</h2>
          <div className={styles.section}>
            <h3>{t("about.experiencePosition")}</h3>
            <h4>{t("about.experiencePeriod")}</h4>
            <p>{t("about.experienceDescription")}</p>
          </div>
          <hr className={styles.separator} />
          <div className={styles.section}>
            <h3>{t("about.projectsTitle")}</h3>
            <p>
              <Trans
                i18nKey="about.projectsDescription"
                components={{ b: <b className={styles.highlight} /> }}
              />
            </p>
          </div>
        </div>

        <motion.div
          className={styles.animationBlock}
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ type: "spring", stiffness: 60, damping: 20 }}
        >
          <Player
            autoplay
            loop
            src="https://lottie.host/33af652f-6608-4a6c-8637-e3c18db8ca9f/kxbXrzddV7.json"
            className={styles.lottie}
          />
          <Link to="/proiecte" className={styles.projectsButton}>
            {t("about.viewProjects")}
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default AboutMe;
