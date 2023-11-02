import Link from "next/link";
import React from "react";
import styles from "./imageNav.module.css";
import Image from "next/image";
import ParticlesBackground from "../Particles/ParticlesBackground";
const ImageNav = (props: any) => {
  const { text } = props;
  return (
    <div className={styles.imageWrapper}>
      <Link href="/" className={styles.logo}>
        <Image
          className="logoImg"
          src="/logo.png"
          alt="logo"
          width="400"
          height="400"
        />
        <h1 className={styles.heroHeading}>{text}</h1>
      </Link>
      <ParticlesBackground />
      {/* <div className={styles.buttonWrapper}>
      <button className={styles.button}>Get Started</button>
    </div> */}
    </div>
  );
};

export default ImageNav;
