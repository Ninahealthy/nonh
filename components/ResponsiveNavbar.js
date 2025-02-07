"use client";

import React, { useState, useCallback, useRef, useEffect } from "react";
import Link from "next/link";
import styles from "./respnav.module.css";

export default function ResponsiveNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const menuButtonRef = useRef(null);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target) &&
        !menuButtonRef.current.contains(event.target)
      ) {
        closeMenu();
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") closeMenu();
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [closeMenu]);

  useEffect(() => {
    if (isOpen) {
      menuButtonRef.current?.setAttribute("aria-expanded", "true");
      const firstLink = navRef.current?.querySelector("a");
      firstLink?.focus();
    } else {
      menuButtonRef.current?.setAttribute("aria-expanded", "false");
    }
  }, [isOpen]);

  return (
    <nav className={styles.navbar} ref={navRef}>
      <div className={styles.logo}>
        <Link href="/" aria-label="Return to homepage">
          <span aria-hidden="true">Nina💚</span>
        </Link>
      </div>

      <button
        ref={menuButtonRef}
        className={`${styles.menuIcon} ${isOpen ? styles.open : ""}`}
        onClick={toggleMenu}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-controls="main-navigation"
        aria-expanded={isOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul
        id="main-navigation"
        className={`${styles.navLinks} ${isOpen ? styles.open : ""}`}
        role="navigation"
      >
        <li>
          <Link
            href="/Lifestyle"
            onClick={closeMenu}
            className={styles.navLink}
          >
            LifeStyle
          </Link>
        </li>
        <li>
          <Link href="/Travel" onClick={closeMenu} className={styles.navLink}>
            Travel
          </Link>
        </li>
        <li>
          <Link
            href="/Home-Decor"
            onClick={closeMenu}
            className={styles.navLink}
          >
            Home Decor
          </Link>
        </li>
      </ul>
    </nav>
  );
}

/*"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./respnav.module.css";

export default function ResponsiveNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const closeMenu = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    // Add event listener to the whole document
    document.addEventListener("click", closeMenu);

    // Cleanup function to remove the event listener
    return () => {
      document.removeEventListener("click", closeMenu);
    };
  }, [isOpen]); // Add isOpen to the dependency array

  const handleNavClick = (e) => {
    e.stopPropagation(); // Prevent the click from bubbling up to the document
  };

  return (
    <nav className={styles.navbar} onClick={handleNavClick}>
      <div className={styles.logo}>
        <Link href="/">
          <em>Nina💚</em>
        </Link>
      </div>
      <div
        className={`${styles.menuIcon} ${isOpen ? styles.open : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`${styles.navLinks} ${isOpen ? styles.open : ""}`}>
        <li>
          <Link href="/">
            <em>Hjem</em>
          </Link>
        </li>
        <li>
          <Link href="/Livsstil">
            <em>Livsstil</em>
          </Link>
        </li>
        <li>
          <Link href="/Reise">
            <em>Reise</em>
          </Link>
        </li>
      </ul>
    </nav>
  );
}*/
