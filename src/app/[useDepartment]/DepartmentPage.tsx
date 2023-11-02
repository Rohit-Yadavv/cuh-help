"use client";
import styles from "@/app/page.module.css";
import Card from "@/components/Card/Card";
import ImageNav from "@/components/ImageNav/ImageNav";
import { departments } from "@/constants/department";
import { notFound, useParams } from "next/navigation";
import ParticlesBackground from "@/components/Particles/ParticlesBackground";

const DepartmentPage = () => {
  const { useDepartment } = useParams();
  const curDep = departments.find(
    (dept) => dept.shortName.toLowerCase() === useDepartment
  );
  if (!curDep) {
    return notFound();
  }

  return (
    <main className={styles.mainWrapper}>
      <ImageNav text={`${curDep.fullName} Notes`} />
      {curDep?.course?.map((item) => (
        <div key={item.name} className={styles.sectionWrapper}>
          <h2 className={styles.heading}>{item.name}</h2>
          <div className={styles.departments}>
            {Array.from({ length: item?.totalSem }, (value, index) => (
              <Card
                key={`sem-${index + 1}`}
                sublink={curDep.shortName}
                heading={`sem-${index + 1}`}
                link={`${item.name}/sem${index + 1}`}
              />
            ))}
          </div>
        </div>
      ))}
    </main>
  );
};
export default DepartmentPage;
