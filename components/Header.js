"use client";

import { useState } from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <a className={styles.navlogo} href="/">
            <em>NH💚</em>
          </a>
          <ul
            className={
              isOpen === false
                ? styles.navmenu
                : styles.navmenu + " " + styles.active
            }
          >
            <li className={styles.navitem}>
              <a
                className={
                  isOpen === false
                    ? styles.navlink
                    : styles.navlink + " " + styles.active
                }
                onClick={openMenu}
                href="/"
              >
                <em>Home</em>
              </a>
            </li>
            <li className={styles.navitem}>
              <Link
                className={
                  isOpen === false
                    ? styles.navlink
                    : styles.navlink + " " + styles.active
                }
                onClick={openMenu}
                href="/Thrive"
              >
                <em>Thrive Well</em>
              </Link>
            </li>
            <li className={styles.navitem}>
              <Link
                className={
                  isOpen === false
                    ? styles.navlink
                    : styles.navlink + " " + styles.active
                }
                onClick={openMenu}
                href="/Fitness"
              >
                <em>Fitness</em>
              </Link>
            </li>
            <li className={styles.navitem}>
              <Link
                className={
                  isOpen === false
                    ? styles.navlink
                    : styles.navlink + " " + styles.active
                }
                onClick={openMenu}
                href="/Bien-etre"
              >
                <em>Bien-être</em>
              </Link>
            </li>
            <li className={styles.navitem}>
              <Link
                className={
                  isOpen === false
                    ? styles.navlink
                    : styles.navlink + " " + styles.active
                }
                onClick={openMenu}
                href="/Beauty"
              >
                <em>Beauty</em>
              </Link>
            </li>
          </ul>
          <button
            className={
              isOpen === false
                ? styles.hamburger
                : styles.hamburger + " " + styles.active
            }
            onClick={openMenu}
          >
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </button>
        </nav>
      </header>
    </>
  );
}
