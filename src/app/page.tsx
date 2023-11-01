import Card from "@/components/Card/Card";
import styles from "./page.module.css";
import { departments } from "@/constants/department";
import Image from "next/image";
import Link from "next/link";
import ImageNav from "@/components/ImageNav/ImageNav";

export default function Home() {
  return (
    <main className={styles.mainWrapper}>
      <ImageNav text="From Arts to Sciences, Notes for All Departments, Only at LearnEaseU" />

      {/* department  */}
      <div className={styles.sectionWrapper}>
        <h2 className={styles.heading}>Departments</h2>
        <div className={styles.departments}>
          {departments.map((item) => (
            <Card
              key={item.shortName}
              heading={item.shortName}
              subheading={item.fullName}
              link={item.shortName}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
