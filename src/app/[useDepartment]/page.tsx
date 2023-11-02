import DepartmentPage from "./DepartmentPage";

export async function generateMetadata({ params }: any) {
  const department = params.useDepartment;

  return {
    title: department.toUpperCase(),
    openGraph: {
      title: { department },
      description: `Download Sessionals,Study materials, and PYQs of ${department}}`,
    },
  };
}

const page = () => {
  return (
    <div>
      <DepartmentPage />
    </div>
  );
};

export default page;
