import Link from "next/link";
import styles from "../Card/card.module.css";

const NotesCard = (props: any) => {
  const { name, link, contentType } = props;

  return (
    <div className={styles.cardWrapper}>
      <Link href={link} className={styles.card}>
        <h2 className={styles.heading}>{name}</h2>
        <p className={styles.text}>{contentType}</p>
      </Link>
    </div>
  );
};

export default NotesCard;
