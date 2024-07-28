import { EmployeeList, NewEmployee } from "../../components            ";

export const AddEmployeePage = () => {
  return (
    <div className="flex gap-5 m-20 container">
      <NewEmployee />
      <EmployeeList />
    </div>
  );
};
