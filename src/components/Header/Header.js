import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>vanities</h1>
      <div className={styles.authButtons}>
        <span className={styles.authButton}>sign up</span>
        <span className={styles.separator}></span>
        <span className={styles.authButton}>login</span>
      </div>
    </header>
  );
};

export default Header;
