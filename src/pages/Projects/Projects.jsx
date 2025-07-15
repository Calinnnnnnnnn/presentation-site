import React from "react";
import styles from "./Projects.module.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Projects() {
  const { t } = useTranslation();

  return (
    <section className={styles.projects}>
      <h1 className={styles.slideDown}>{t("projects.title")}</h1>
      <p className={styles.slideDown}>{t("projects.description")}</p>

      <div className={styles.grid}>
        {/* Card 1 */}
        <div className={`${styles.flipCard} ${styles.slideUp}`}>
          <div className={styles.flipInner}>
            <div className={styles.flipFront}>
              <h2>{t("projects.realEstate.title")}</h2>
              <p>{t("projects.realEstate.subtitle")}</p>
            </div>
            <div className={styles.flipBack}>
              <p>{t("projects.realEstate.text")}</p>
              <Link to="/proiecte/real-estate" className={styles.moreButton}>
                {t("projects.moreButton")}
              </Link>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className={`${styles.flipCard} ${styles.slideUp}`}>
          <div className={styles.flipInner}>
            <div className={styles.flipFront}>
              <h2>{t("projects.musicVisualizer.title")}</h2>
              <p>{t("projects.musicVisualizer.subtitle")}</p>
            </div>
            <div className={styles.flipBack}>
              <p>{t("projects.musicVisualizer.text")}</p>
              <Link to="/proiecte/music-visualizer" className={styles.moreButton}>
                {t("projects.moreButton")}
              </Link>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className={`${styles.flipCard} ${styles.slideUp}`}>
          <div className={styles.flipInner}>
            <div className={styles.flipFront}>
              <h2>{t("projects.pergola.title")}</h2>
              <p>{t("projects.pergola.subtitle")}</p>
            </div>
            <div className={styles.flipBack}>
              <p>{t("projects.pergola.text")}</p>
              <Link to="/proiecte/pergola" className={styles.moreButton}>
                {t("projects.moreButton")}
              </Link>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className={`${styles.flipCard} ${styles.slideUp}`}>
          <div className={styles.flipInner}>
            <div className={styles.flipFront}>
              <h2>{t("projects.jeopardy.title")}</h2>
              <p>{t("projects.jeopardy.subtitle")}</p>
            </div>
            <div className={styles.flipBack}>
              <p>{t("projects.jeopardy.text")}</p>
              <Link to="/proiecte/jeopardy" className={styles.moreButton}>
                {t("projects.moreButton")}
              </Link>
            </div>
          </div>
        </div>

        {/* Card 5 */}
        <div className={`${styles.flipCard} ${styles.slideUp}`}>
          <div className={styles.flipInner}>
            <div className={styles.flipFront}>
              <h2>{t("projects.eventOrganiser.title")}</h2>
              <p>{t("projects.eventOrganiser.subtitle")}</p>
            </div>
            <div className={styles.flipBack}>
              <p>{t("projects.eventOrganiser.text")}</p>
              <Link to="/proiecte/event-organiser" className={styles.moreButton}>
                {t("projects.moreButton")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
