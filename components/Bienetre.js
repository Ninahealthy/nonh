import Styles from "./Card.module.css";
import Image from "next/image";
import woman from "/public/beautiful_model.webp";
import jardin from "/public/idees-jardin.jpg";
import terrasse from "/public/terrasse.jpg";
import purifier from "/public/air-purifier.jpg";
import SMART from "/public/SMART-goals.jpg";
import avocat from "/public/avocat.jpeg";

const responsive = { width: "100%", height: "auto" };

export default function Bienetre() {
  return (
    <>
      <group className={Styles.group}>
        <item className={Styles.item}>
          <a href="/Bien-etre/comment-faire-pousser-un-avocat">
            <card className={Styles.card}>
              <Image
                src={avocat}
                alt="comment faire pousser un avocat"
                style={responsive}
                priority
                sizes="100vw"
              />
              <p>
                <strong>
                  <em>Comment Faire Pousser Un Avocat</em>
                </strong>
              </p>
            </card>
          </a>
        </item>
        <item className={Styles.item}>
          <a href="/Bien-etre/astuces-naturelles-pour-purifier-air-de-sa-maison">
            <card className={Styles.card}>
              <Image
                src={purifier}
                alt="air purifier"
                style={responsive}
                priority
                sizes="100vw"
              />
              <p>
                <strong>
                  <em>
                    Astuces Simples Et Naturelles Pour Purifier l’air de sa
                    Maison
                  </em>
                </strong>
              </p>
            </card>
          </a>
        </item>
        <item className={Styles.item}>
          <a href="/Bien-etre/astuces-decoration-terrasse-exterieur">
            <card className={Styles.card}>
              <Image
                src={terrasse}
                alt="terrasse extérieur"
                style={responsive}
                priority
                sizes="100vw"
              />
              <p>
                <strong>
                  <em>
                    5 Astuces pour la décoration de votre terrasse extérieur
                  </em>
                </strong>
              </p>
            </card>
          </a>
        </item>
        <item className={Styles.item}>
          <a href="/Bien-etre/idees-pour-amenager-un-petit-jardin">
            <card className={Styles.card}>
              <Image
                src={jardin}
                alt="idées petit jardin"
                style={responsive}
                priority
                sizes="100vw"
              />
              <p>
                <strong>
                  <em>
                    7 astuces pour aménager un petit jardin avec une terrasse
                    mobile
                  </em>
                </strong>
              </p>
            </card>
          </a>
        </item>
        <item className={Styles.item}>
          <a href="/Bien-etre/ameliorer-votre-concentration">
            <card className={Styles.card}>
              <Image
                src={woman}
                alt="attractive woman"
                style={responsive}
                priority
                sizes="100vw"
              />
              <p>
                <strong>
                  <em>
                    6 étapes pour améliorer votre concentration et votre
                    attention avec intention
                  </em>
                </strong>
                <br></br>
                Comment rester concentrée et attentive dans un monde où tout va
                vite ? Suivez ces 6 conseils pratiques pour développer votre
                focus et votre sérénité au quotidien....&nbsp;
                <strong>
                  <em>Lire plus</em>
                </strong>
                <br />
              </p>
            </card>
          </a>
        </item>
        <item className={Styles.item}>
          <a href="/Bien-etre/quels-sont-les-cinq-indicateurs-SMART">
            <card className={Styles.card}>
              <Image
                src={SMART}
                alt="SMART goals"
                style={responsive}
                priority
                sizes="100vw"
              />
              <p>
                <strong>
                  <em>
                    Comment Les SMART Goals Peuvent Transformer Votre Vie En
                    Mieux
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
