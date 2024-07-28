import { EmployeeList, NewEmployee } from "../../components            ";

export const AddEmployeePage = () => {
  return (
    <div className="flex gap-3 container">
      <NewEmployee />
      <EmployeeList />
    </div>
  );
};
