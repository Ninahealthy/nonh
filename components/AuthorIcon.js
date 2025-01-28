import Image from "next/image";
import author from "@/public/young-woman.png";

const style = { width: 50, height: 50 };

export default function AuthorIcon() {
  return (
    <>
      <authoricon>
        <Image src={author} alt="author" style={style} />

        <h5>
          <text>By</text> Nina Bernard <br></br> Dernière mise à jour le, 15
          Avril 2023
        </h5>
      </authoricon>
    </>
  );
}
