import Image from "next/image";
import Styles from "./Card.module.css";

import Link from "next/link";

const responsive = { width: "100%", height: "auto" };

export default function HomeComponent() {
  return (
    <>
      <group className={Styles.group}>
        <item className={Styles.item}>
          <Link href="/Beauty">
            <card className={Styles.card}>
              {/* <Image
                src={stylo}
                alt="stylos de blanchiment des dents"
                style={responsive}
                sizes="100vw"
                priority
              />*/}
              <p>
                <strong>
                  <em>Beauty</em>
                </strong>

                <br />
              </p>
            </card>
          </Link>
        </item>
        <item className={Styles.item}>
          <Link href="Cuisine">
            <card className={Styles.card}>
              {/* <Image
                src={shampo}
                alt="curly-hair"
                style={responsive}
                sizes="100vw"
                priority
              />*/}
              <p>
                <strong>
                  <em>Cuisine</em>
                </strong>

                <br />
              </p>
            </card>
          </Link>
        </item>
        <item className={Styles.item}>
          <Link href="/Bien-etre">
            <card className={Styles.card}>
              {/*  <Image
                src={curly}
                alt="curly-hair"
                style={responsive}
                priority
                sizes="100vw"
              />*/}
              <p>
                <strong>
                  <em>Bien-être</em>
                </strong>

                <br />
              </p>
            </card>
          </Link>
        </item>
        <item className={Styles.item}>
          <Link href="/Fitness">
            <card className={Styles.card}>
              {/* <Image
                src={makeup}
                alt="beautiful model"
                style={responsive}
                priority
                sizes="100vw"
              />*/}
              <p>
                <strong>
                  <em>Fitness</em>
                </strong>
              </p>
            </card>
          </Link>
        </item>
        <item className={Styles.item}>
          <Link href="/Outdoor">
            <card className={Styles.card}>
              {/* <Image
                src={makeup}
                alt="beautiful model"
                style={responsive}
                priority
                sizes="100vw"
              />*/}
              <p>
                <strong>
                  <em>Outdoor</em>
                </strong>
              </p>
            </card>
          </Link>
        </item>
      </group>
      <group className={Styles.group}></group>
    </>
  );
}
