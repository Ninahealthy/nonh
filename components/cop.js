// components/TopicsGrid.js
import styles from "./cop.module.css";
import Image from "next/image";

import makeup from "/public/makeup.jpg";
import young from "/public/young-woman.png";
import curly from "/public/curly-hair.jpg";
import shampo from "/public/shampoo.jpg";
import stylo from "/public/stylos-blanchiment.jpg";

const TopicsGrid = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Topics I thought you'd enjoy</h1>

      <div className={styles.grid}>
        <div className={styles.largeCard}>
          <div className={styles.imageWrapper}>
            <Image
              src={curly}
              alt="Stylized portrait with blue tones"
              className={styles.image}
            />
          </div>
          <h2 className={styles.cardTitle}>
            Trust me with your next hairstyle
          </h2>
        </div>

        <div className={styles.smallCardsContainer}>
          <div className={styles.smallCard}>
            <div className={styles.imageWrapper}>
              <Image
                src={makeup}
                alt="Stack of books"
                className={styles.image}
              />
            </div>
            <h2 className={styles.cardTitle}>Graphic novels to try out</h2>
          </div>

          <div className={styles.smallCard}>
            <div className={styles.imageWrapper}>
              <Image
                src={shampo}
                alt="Cat ears in focus"
                className={styles.image}
              />
            </div>
            <h2 className={styles.cardTitle}>
              Listening skills for improved communication
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicsGrid;
