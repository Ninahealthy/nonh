import Image from "next/image";
import Link from "next/link";
import Styles from "./Topics.module.css";
import pic from "@/public/1.jpg";
import pic2 from "@/public/2.jpg";
import pic3 from "@/public/3.jpg";

export default function Topics() {
  const topics = [
    {
      id: 1,
      title: "Do you wonder why some connections fade?",
      image: pic,
      size: "large",
      slug: "/topics/connections",
    },
    /*{
      id: 2,
      title: "How to trust your gut instinct",
      image: pic2,
      size: "small",
      slug: "/topics/gut-instinct",
    },
    {
      id: 3,
      title: "How to trust your gut ",
      image: pic3,
      size: "small",
      slug: "/topics/gift-guide",
    },*/
  ];

  const fresh = [
    {
      id: 1,
      title: "Do you wonder why some connections fade?",
      image: pic,
      size: "large",
      slug: "/topics/connections",
    },
    /* {
      id: 2,
      title: "How to trust your gut instinct",
      image: pic2,
      size: "small",
      slug: "/topics/gut-instinct",
    },
    {
      id: 3,
      title: "How to trust your gut ",
      image: pic3,
      size: "small",
      slug: "/topics/gift-guide",
    },*/
  ];

  return (
    <>
      {/*Topics I thought you'd enjoy*/}
      <div className={Styles.container}>
        <h1 className={Styles.heading}>Emner jeg trodde du ville like </h1>
        {topics.map((topic) => (
          <Link
            key={topic.id}
            href={topic.slug}
            className={
              topic.size === "large" ? Styles.cardLarge : Styles.cardSmall
            }
          >
            <Image src={topic.image} alt={topic.title} priority />

            <h2 className={Styles.title}>{topic.title}</h2>
          </Link>
        ))}
      </div>
      {/*latest topics*/}
      <div className={Styles.container}>
        <h1 className={Styles.heading}>Siste Temaer </h1>
        {fresh.map((topic) => (
          <Link
            key={topic.id}
            href={topic.slug}
            className={
              topic.size === "large" ? Styles.cardLarge : Styles.cardSmall
            }
          >
            <Image src={topic.image} alt={topic.title} priority />

            <h2 className={Styles.title}>{topic.title}</h2>
          </Link>
        ))}
      </div>
    </>
  );
}
