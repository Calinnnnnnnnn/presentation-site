import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p>&copy; {year} Ilie Ioan-Călin. All rights reserved.</p>
        <div className={styles.socialLinks}>
          <a href="https://www.instagram.com/calin.ilie/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i> Instagram
          </a>
          <a href="https://www.linkedin.com/in/ioan-calin-ilie-19a4552a9/?profileId=ACoAAEpId8YB6EZ8wePhiVLJDxuy1i7GRDBoqWo" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
          <a href="https://github.com/Calinnnnnnnnn" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i> GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
