"use client";

import { useState } from "react";
import styles from "./Headern.module.css";
import Image from "next/image";

const Header = () => {
  // state to toggle the menu
  const [isOpen, setIsOpen] = useState(false);

  // function to handle the menu click
  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        {/* replace with your logo image or text */}
        <Image
          src="/apple-touch-icon.png"
          alt=""
          className={styles.vercelLogo}
          width={50}
          height={50}
          priority
        />
      </div>
      <div className={styles.menu}>
        {/* hamburger icon for mobile devices */}
        <div className={styles.hamburger} onClick={handleMenuClick}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
        {/* navigation links for larger screens */}
        <nav className={`${styles.nav} ${isOpen ? styles.open : ""}`}>
          <ul className={styles.navList}>
            {/* replace with your links */}
            <li className={styles.navItem}>
              <a href="/" className={styles.navLink}>
                Home
              </a>
            </li>
            <li className={styles.navItem}>
              <a href="/about" className={styles.navLink}>
                About
              </a>
            </li>
            <li className={styles.navItem}>
              <a href="/contact" className={styles.navLink}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
