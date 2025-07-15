import React from 'react';
import styles from './LanguageSwitcher.module.css';

function LanguageSwitcher({ language, onToggle }) {
  return (
    <div
      className={`${styles.switch} ${language === 'en' ? styles.active : ''}`}
      onClick={onToggle}
    >
      <div className={styles.thumb}></div>
    </div>
  );
}

export default LanguageSwitcher;
