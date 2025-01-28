import Styles from "./Card.module.css";
import Image from "next/image";

import tracker from "/public/tracker-de-fitness.jpg";
import running from "/public/running-shoes-women.jpg";
import stationary from "/public/stationary-bikes.jpg";
import vr from "/public/fitness-vr.jpg";
import portablefitness from "/public/portable-fitness-gear.jpg";

const responsive = { width: "100%", height: "auto" };

export default function Fitness() {
  return (
    <>
      <group className={Styles.group}>
        <item className={Styles.item}>
          <a href="/Fitness/velos-stationnaire-les-plus-performants-en-2023">
            <card className={Styles.card}>
              <Image
                src={stationary}
                alt="vélos stationnaire"
                style={responsive}
                priority
                sizes="100vw"
              />
              <p>
                <strong>
                  <em>Les Vélos Stationnaire Les Plus Performants En 2023</em>
                </strong>
              </p>
            </card>
          </a>
        </item>
        <item className={Styles.item}>
          <a href="/Fitness/meilleurs-trackers-de-fitness-pour-les-femmes">
            <card className={Styles.card}>
              <Image
                src={tracker}
                alt="terrasse extérieur"
                style={responsive}
                priority
                sizes="100vw"
              />
              <p>
                <strong>
                  <em>
                    Les Meilleurs Trackers De Fitness Pour Les Femmes en 2023
                  </em>
                </strong>
              </p>
            </card>
          </a>
        </item>
        <item className={Styles.item}>
          <a href="/Fitness/meilleures-chaussures-de-course-pour-le-confort-et-le-soutien">
            <card className={Styles.card}>
              <Image
                src={running}
                alt="chaussures de course"
                style={responsive}
                priority
                sizes="100vw"
              />
              <p>
                <strong>
                  <em>
                    5 Chaussures De Course Qui Allient Confort Et Stabilité En
                    2023
                  </em>
                </strong>
              </p>
            </card>
          </a>
        </item>
        <item className={Styles.item}>
          <a href="/Fitness/jeux-de-fitness-en-VR-qui-vont-vous-faire-transpirer-et-sourire">
            <card className={Styles.card}>
              <Image
                src={vr}
                alt="man doing fitness with VR"
                style={responsive}
                priority
                sizes="100vw"
              />
              <p>
                <strong>
                  <em>
                    6 Jeux De Fitness En VR Qui Vont Vous Faire Transpirer Et
                    Sourire
                  </em>
                </strong>
              </p>
            </card>
          </a>
        </item>
        <item className={Styles.item}>
          <a href="/Fitness/meilleurs-equipements-de-fitness-de-voyage-pour-2023">
            <card className={Styles.card}>
              <Image
                src={portablefitness}
                alt="portable fitness gear"
                style={responsive}
                priority
                sizes="100vw"
              />
              <p>
                <strong>
                  <em>
                    Fitness Et Voyage: Les Accessoires Indispensables Pour
                    Garder La Forme 🤸‍♀️
                  </em>
                </strong>
              </p>
            </card>
          </a>
        </item>
      </group>
    </>
  );
}
