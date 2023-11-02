import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import ImageNav from "@/components/ImageNav/ImageNav";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us ",
};

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <ImageNav text="About LearnEaseU" />
      <section className={styles.pageSection}>
        <h2 className={styles.sectionHeader}>Welcome to LearnEaseU!</h2>
        <p className={styles.sectionText}>
          LearnEaseU is your central hub for academic excellence, simplifying
          the learning experience for students at Central University. We are
          committed to providing a one-stop destination for notes, sessional
          materials, and previous year questions (PYQs) for all departments
          within the university.
        </p>
      </section>

      <section className={styles.pageSection}>
        <h2 className={styles.sectionHeader}>Our Mission</h2>
        <p className={styles.sectionText}>
          At LearnEaseU, our mission is to bridge the gap between students and
          valuable learning resources. We understand that education can
          sometimes be challenging, and our goal is to make it easier by
          offering comprehensive, department-specific materials that enhance
          your academic journey.
        </p>
      </section>

      <section className={styles.pageSection}>
        <h2 className={styles.sectionHeader}>Why Choose LearnEaseU?</h2>
        <ul className={styles.sectionList}>
          <li className={styles.listItem}>
            <strong>All Departments Covered:</strong> We offer a wide range of
            notes, sessional materials, and PYQs for every department at Central
            University, ensuring that no student is left behind.
          </li>
          <li className={styles.listItem}>
            <strong>Quality Assurance:</strong> Our team is dedicated to
            maintaining high standards of quality and accuracy in the materials
            we provide, making your learning experience more effective.
          </li>
          <li className={styles.listItem}>
            <strong>Easy Access:</strong> Our user-friendly interface and search
            features make it simple to find and access the resources you need,
            saving you time and effort.
          </li>
          <li className={styles.listItem}>
            <strong>Community-Driven:</strong> We believe in the power of
            collaboration and knowledge sharing. LearnEaseU is a community where
            students can contribute, share, and support each other.
          </li>
        </ul>
      </section>

      <section className={styles.pageSection}>
        <h2 className={styles.sectionHeader}>Meet the Founder</h2>
        <p className={styles.sectionText}>
          I am committed to providing you with the best resources and support.
          If you have any questions, suggestions, or requests, please don&apos;t
          hesitate to contact me.
        </p>

        <p className={styles.sectionText}>
          Created and Maintained by Rohit a cse student at CUH
        </p>
        <p className={styles.sectionText}>
          My Email:&nbsp;
          <Link
            className={styles.sectionText}
            href="mailto:rk4740779@gmail.com"
          >
            rk4740779@gmail.com
          </Link>
        </p>
        <p className={styles.sectionText}>
          {" "}
          My LinkedIn: &nbsp;
          <Link
            href="https://www.linkedin.com/in/rohit-yadav-240448255/"
            className={styles.sectionText}
          >
            https://www.linkedin.com/in/rohit-yadav-240448255/
          </Link>
        </p>
        <p className={styles.sectionText}>
          My GitHub:&nbsp;
          <Link
            href="https://github.com/Rohit-Yadavv"
            className={styles.sectionText}
          >
            https://github.com/Rohit-Yadavv
          </Link>
        </p>
      </section>

      {/* ... (continue with the rest of the JSX) */}

      <footer className={styles.pageSection}>
        Thank you for choosing LearnEaseU. I am excited to support your
        educational success and make your academic journey more manageable.
        Explore our website, find your department, and embark on your path to
        academic excellence today.
      </footer>
    </div>
  );
};

export default AboutPage;

// export async function generateMetadata({ params }: { params: any }) {
//   return {
//     title: "About Us",
//   };
// }
