"use client";
import styles from "@/app/page.module.css";
import { notFound, useParams } from "next/navigation";
import files from "@/constants/";
import NotesCard from "@/components/NotesCard/NotesCard";
import { useRouter } from "next/navigation";
import ImageNav from "@/components/ImageNav/ImageNav";
import { Helmet } from "react-helmet";

const Page = () => {
  const router = useRouter();
  const { useDepartment, sem, course } = useParams();
  const department = useDepartment;
  const combination = department + course + sem;

  var notesArray = [];

  if (files[combination]) {
    var notesArray = files[combination];
  } else {
    return notFound();
  }

  return (
    <main className={styles.mainWrapper}>
      <Helmet>
        <title>{`${department} ${course} ${sem} - LearnEaseU`}</title>
      </Helmet>
      <ImageNav text={`${department} ${course} ${sem}`} />

      {/* department  */}
      <div className={styles.sectionWrapper}>
        <h2 className={styles.heading}>Notes and Seassonals</h2>
        <div className={styles.departments}>
          {notesArray.map((item) => (
            <NotesCard
              key={item.id}
              name={item.subjectName}
              link={item.driveLink}
              contentType={item.contentType}
            />
          ))}
        </div>
      </div>
    </main>
  );
};
export default Page;
