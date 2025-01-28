import Image from "next/image";
import author from "/public/young-woman.png";

const style = { width: 100, height: 100 };

export default function Author() {
  return (
    <>
      <author>
        <strong>About Author</strong>

        {/*<p>
        Hi! I’m Nina Bernrad, the face behind NinaHealthy.com ! I share easy,
        approachable plant-based recipes that are not only healthy but taste
        amazing. Follow me on Instagram, TikTok, and Facebook for free vegan
        meal ideas, recipes and healthygirl tips.
  </p>*/}

        <p>
          <Image src={author} alt="Nina Bernard" style={style} sizes="30vw" />
          <br></br>
          Salut! C'est Nina, le visage derrière NinaHealthy.com ! Ici Je partage
          des choses que nous pouvons tous trouver adaptées et bénéfiques dans
          notre propre vie quotidienne. Les choses dont j’écris sont
          généralement légères et agréables à lire. J’aime écrire sur la beauté,
          la vie, le drame, et tout ce qui suscite mon intérêt.
          <br></br>
          Suivez-moi sur pinterest pour des idées de repas végétaliens gratuits,
          des recettes et des astuces pour Healthy-girl.
        </p>
      </author>
    </>
  );
}
