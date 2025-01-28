import Styles from "./Card.module.css";
import Image from "next/image";
import flocon from "/public//flocons-d'avoine-cuits-au-four.webp";
import cookie from "/public/cookies.webp";
import juicers from "/public/juicers.jpg";
import coffee from "/public/coffee-machines.jpg";
import Link from "next/link";

const responsive = { width: "100%", height: "auto" };

export default function Cuisine() {
  return (
    <>
      <group className={Styles.group}>
        <item className={Styles.item}>
          <Link href="/Cuisine/les-meilleures-machines-a-cafe-nespresso-en-2023">
            <card className={Styles.card}>
              <Image
                src={coffee}
                alt="machines a café nespresso"
                priority
                sizes="100vw"
                style={responsive}
              />
              <p>
                <strong>
                  <em>
                    Top 5 Des Machines à Café Nespresso Les Plus Pratiques Et
                    Les Plus économiques En 2023
                  </em>
                </strong>
              </p>
            </card>
          </Link>
        </item>
        <item className={Styles.item}>
          <Link href="/Cuisine/meilleurs-extracteurs-de-jus-pour-faire-des-boissons-nutritives">
            <card className={Styles.card}>
              <Image
                src={juicers}
                alt="extracteurs de jus"
                priority
                sizes="100vw"
                style={responsive}
              />
              <p>
                <strong>
                  <em>
                    Les 5 Meilleurs Extracteurs De Jus Pour Faire Des Boissons
                    Nutritives En 2023
                  </em>
                </strong>
              </p>
            </card>
          </Link>
        </item>
        <item className={Styles.item}>
          <Link href="/Cuisine/flocon-avoine-au-four-healthy">
            <card className={Styles.card}>
              <Image
                src={flocon}
                alt="flocons d'avoine cuits au four"
                priority
                sizes="100vw"
                style={responsive}
              />
              <p>
                <strong>
                  <em>flocons d'voine cuits au four à la banane </em>
                </strong>
                <br></br>
                Voici une recette idéale pour un petit déjeuner healthy, facile
                à préparer...&nbsp;
                <strong>
                  <em>Lire plus</em>
                </strong>
                <br />
              </p>
            </card>
          </Link>
        </item>
        <item className={Styles.item}>
          <a href="/Cuisine/cookies-healthy">
            <card className={Styles.card}>
              <Image
                src={cookie}
                alt="cookies"
                style={responsive}
                sizes="100vw"
              />
              <p>
                <strong>
                  <em>Les meilleures recettes de cookies</em>
                </strong>
                <br></br>
                Les cookies sont des petits gâteaux moelleux et délicieux qui
                font le bonheur de tout le monde. Que vous soyez un ex...&nbsp;
                <strong>
                  <em>Lire plus</em>
                </strong>
                <br />
              </p>
            </card>
          </a>
        </item>
      </group>
    </>
  );
}
