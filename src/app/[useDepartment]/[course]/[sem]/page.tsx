import SemPage from "./SemPage";

export async function generateMetadata({ params }: any) {
  const department = params.useDepartment.toUpperCase();
  const course = params.course;
  const semsester = params.sem;
  const final = `${department} ${course} ${semsester}`;
  const finalUppercase = final.replace(/\b\w/g, (match) => match.toUpperCase());
  return {
    title: finalUppercase,
    description: `Download Sessionals,Study materials, and PYQs of ${semsester} ${course} ${department}`,
    openGraph: {
      title: `${finalUppercase}-LearnEaseU`,
      description: `Download Sessionals,Study materials, and PYQs of ${semsester} ${course} ${department}`,
    },
  };
}

const page = () => {
  return (
    <div>
      <SemPage />
    </div>
  );
};

export default page;
