import ImageNav from "@/components/ImageNav/ImageNav";
import styles from "./notfound.module.css";
import Link from "next/link";
const page = () => {
  return (
    <div className={styles.wrapper}>
      <ImageNav text="404 Not Found" />
      <div className={styles.contentWrapper}>
        <h1 className={styles.heading}>OOPs Page Not Found</h1>
        <div className={styles.buttonsWrapper}>
          <button className={styles.buttonWrapper}>
            <Link
              href="https://forms.gle/bL6iX7Qcr9GFAdJo6"
              className={styles.button}
            >
              Contribute
            </Link>
          </button>
          <button className={styles.buttonWrapper}>
            <Link href="/" className={styles.button}>
              Home
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
  ``;
};

export default page;
