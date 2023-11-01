"use client";
import styles from "@/app/page.module.css";
import Card from "@/components/Card/Card";
import ImageNav from "@/components/ImageNav/ImageNav";
import { departments } from "@/constants/department";
import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { useRouter } from "next/navigation";

const page = () => {
  const { department } = useParams();
  const router = useRouter();
  const curDep = departments.find(
    (dept) => dept.shortName.toLowerCase() === department
  );

  if (!curDep) {
    return notFound();
  }

  console.log(curDep);
  return (
    <main className={styles.mainWrapper}>
      {/* image */}

      <ImageNav text={`${curDep.fullName} Notes`} />

      {curDep?.course?.map((item) => (
        <div className={styles.sectionWrapper}>
          <h2 className={styles.heading}>{item.name}</h2>
          <div className={styles.departments}>
            {Array.from({ length: item?.totalSem }, (value, index) => (
              <Card
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

export default page;
