import Image from "next/image";
import author from "@/public/young-woman.png";
import Link from "next/link";

const style = { width: 50, height: 50 };

export default function AuthorIcon() {
  return (
    <>
      <authoricon>
        <Link href="/About">
          <Image src={author} alt="author" style={style} />

          <h5>
            By Nina Bernard <br></br> Last Update, 1/28/2025
          </h5>
        </Link>
      </authoricon>
    </>
  );
}
