import Image from "next/image";
import styles from "./nav.module.css";
import Link from "next/link";
const Nav = () => {
  return (
    <nav className={styles.navWrapper}>
      <div className={styles.wrapper}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/logo-transparent.png"
            alt="logo"
            width="128"
            height="128"
          />
        </Link>
        <div className={styles.navLinks}>
          <Link className={styles.link} href="/about">
            About
          </Link>
          <Link className={styles.link} href="/contact">
            ContactUs
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
