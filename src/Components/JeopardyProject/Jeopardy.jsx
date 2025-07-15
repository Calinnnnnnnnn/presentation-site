import React from "react";
import styles from "./Jeopardy.module.css";
import { Link } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
import { useTranslation } from "react-i18next";

function Jeopardy() {
  const { t } = useTranslation();

  return (
    <section className={styles.project}>
      <h1 className={styles.animateTop}>{t("jeopardy.title")}</h1>
      <p className={`${styles.intro} ${styles.animateTop}`}>
        {t("jeopardy.intro")}
      </p>

      <div className={styles.featuresLottie}>
        <div className={styles.features}>
          <h2 className={styles.animateLeft}>{t("jeopardy.featuresTitle")}</h2>
          <ul className={styles.animateLeft}>
            <li>{t("jeopardy.feature1")}</li>
            <li>{t("jeopardy.feature2")}</li>
            <li>{t("jeopardy.feature3")}</li>
            <li>{t("jeopardy.feature4")}</li>
            <li>{t("jeopardy.feature5")}</li>
            <li>{t("jeopardy.feature6")}</li>
          </ul>
        </div>

        <div className={styles.lottieWrapper}>
          <Player
            autoplay
            loop
            src="https://lottie.host/49422462-b68e-49a2-8ea6-1e54b000ab41/bRSrNPoAhu.json"
            className={styles.lottie}
          />
        </div>
      </div>

      <div className={`${styles.tech} ${styles.animateLeft}`}>
        <h2>{t("jeopardy.techTitle")}</h2>
        <ul>
          <li>{t("jeopardy.tech1")}</li>
          <li>{t("jeopardy.tech2")}</li>
          <li>{t("jeopardy.tech3")}</li>
          <li>{t("jeopardy.tech4")}</li>
        </ul>
      </div>

      <div className={styles.section}>
        <h2 className={styles.animateLeft}>{t("jeopardy.structureTitle")}</h2>
        <ul className={styles.animateLeft}>
          <li>{t("jeopardy.structure1")}</li>
          <li>{t("jeopardy.structure2")}</li>
          <li>{t("jeopardy.structure3")}</li>
          <li>{t("jeopardy.structure4")}</li>
          <li>{t("jeopardy.structure5")}</li>
        </ul>
      </div>

      <div className={styles.section}>
        <h2 className={styles.animateLeft}>{t("jeopardy.flowTitle")}</h2>
        <p className={styles.animateLeft}>
          {t("jeopardy.flow")}
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.animateLeft}>{t("jeopardy.optTitle")}</h2>
        <p className={styles.animateLeft}>
          {t("jeopardy.opt")}
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.animateLeft}>{t("jeopardy.teamTitle")}</h2>
        <ul className={styles.animateLeft}>
          <li>{t("jeopardy.team1")}</li>
          <li>{t("jeopardy.team2")}</li>
          <li>{t("jeopardy.team3")}</li>
          <li>{t("jeopardy.team4")}</li>
          <li>{t("jeopardy.team5")}</li>
        </ul>
      </div>

      <Link to="/proiecte" className={styles.backButton}>
        &larr; {t("common.backToProjects")}
      </Link>
    </section>
  );
}

export default Jeopardy;
