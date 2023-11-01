import Image from "next/image";
import styles from "./footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footerWrapper}>
      <svg
        _ngcontent-yro-c18=""
        aria-hidden="true"
        width="100%"
        height="8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <pattern
          _ngcontent-yro-c18=""
          id="a"
          width="91"
          height="8"
          patternUnits="userSpaceOnUse"
        >
          <g _ngcontent-yro-c18="" clipPath="url(#clip0_2426_11367)">
            <path
              _ngcontent-yro-c18=""
              d="M114 4c-5.067 4.667-10.133 4.667-15.2 0S88.667-.667 83.6 4 73.467 8.667 68.4 4 58.267-.667 53.2 4 43.067 8.667 38 4 27.867-.667 22.8 4 12.667 8.667 7.6 4-2.533-.667-7.6 4s-10.133 4.667-15.2 0S-32.933-.667-38 4s-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0"
              stroke="#E1E3E1"
              strokeLinecap="square"
            ></path>
          </g>
        </pattern>
        <rect
          _ngcontent-yro-c18=""
          width="100%"
          height="100%"
          fill="url(#a)"
        ></rect>
      </svg>
      <div className={styles.footer}>
        <Link href="/" className={styles.logo}>
          <Image src="/logo.png" alt="logo" width="200" height="200" />
        </Link>
        <div className={styles.link}>
          <Link href="/about">About Us</Link>
          <Link href="https://forms.gle/Y4ESEZ7S1cWp6Tp98">Contribute</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
