import Image from "next/image";
import author from "@/public/young-woman.png";
import Link from "next/link";
import Styles from "@/components/AuthorIcon.module.css";

const style = { width: 50, height: 50 };

export default function AuthorIcon() {
  return (
    <>
      <div className={Styles.authoricon}>
        <Link href="/About">
          <Image src={author} alt="author" style={style} />
          By Nina
        </Link>
      </div>
    </>
  );
}
