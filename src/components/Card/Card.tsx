import Link from "next/link";
import styles from "./card.module.css";

const Card = (props: any) => {
  const { heading, subheading, link, sublink } = props;
  const lowerLink = link.toLowerCase();
  if (sublink) {
    var lowerSubLink = sublink.toLowerCase();
  }

  return (
    <div className={styles.cardWrapper}>
      {sublink ? (
        <Link href={`/${lowerSubLink}/${lowerLink}`} className={styles.card}>
          <h2 className={styles.heading}>{heading}</h2>
          <p className={styles.text}>{subheading}</p>
        </Link>
      ) : (
        <Link href={`/${lowerLink}`} className={styles.card}>
          <h2 className={styles.heading}>{heading}</h2>
          <p className={styles.text}>{subheading}</p>
        </Link>
      )}
    </div>
  );
};

export default Card;
