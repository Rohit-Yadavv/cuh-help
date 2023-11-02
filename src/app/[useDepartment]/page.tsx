import DepartmentPage from "./DepartmentPage";

export async function generateMetadata({ params }: any) {
  const department = params.useDepartment;

  return {
    title: department.toUpperCase(),
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
