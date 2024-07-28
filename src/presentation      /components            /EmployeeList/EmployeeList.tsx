import { Avatar, Box, InputAdornment, List, ListItem, TextField, Typography } from "@mui/material";
import { CustomPaper } from "../CustomPaper";
import { Search, FilterList } from "@mui/icons-material";
import styles from "./EmployeeList.module.scss";
import { AppDispatch, getEmployeesPositions, RootState } from "../../../redux";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo } from "react";

export const EmployeeList: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { data: employeesPositions, status, error } = useSelector((state: RootState) => state.employeesPositions);

  useEffect(() => {
    dispatch(getEmployeesPositions());
  }, [dispatch]);

  useEffect(() => {
    if (status === "succeeded") {
      console.log("Employees loaded successfully:", employeesPositions);
    } else if (status === "failed") {
      console.error("Failed to load employees:", error);
    }
  }, [status, employeesPositions, error]);


  const technologists = useMemo(() => {
    if (employeesPositions.length > 0) {
      return employeesPositions.flatMap(position => position.technologists || []);
    }
    return [];
  }, [employeesPositions]);

  const dressmakers = useMemo(() => {
    if (employeesPositions.length > 0) {
      return employeesPositions.flatMap(position => position.dressmakers || []);
    }
    return [];
  }, [employeesPositions]);

  const cutters = useMemo(() => {
    if (employeesPositions.length > 0) {
      return employeesPositions.flatMap(position => position.cutters || []);
    }
    return [];
  }, [employeesPositions]);

  console.log(technologists, 'technologists');

  const renderEmployeeSection = (employees: any[], title: string) => {
    return (
      <div className={styles.section}>
        <Typography variant="h6">{title}</Typography>
        <List className={styles.list}>
          {employees.slice(0, 2).map((employee, index) => (
            <ListItem key={index} className={styles.listItem}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Avatar className={styles.avatar} src={employee.userImage || ""} />
                <Typography>{employee.firstName}</Typography>
              </div>
              <Typography>
                {Object.keys(employee.positions)
                  .filter((key) => employee.positions[key])
                  .join(", ")}
              </Typography>
            </ListItem>
          ))}
        </List>
      </div>
    );
  };

  return (
    <CustomPaper>
      <Typography variant="h4">Все сотрудники</Typography>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mt: 2 }}>
        <TextField
          type="search"
          label="Поиск"
          variant="outlined"
          fullWidth
          placeholder="Поиск сотрудника"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <FilterList sx={{ cursor: "pointer" }} />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <div>
        {renderEmployeeSection(technologists, "Технологи")}
        {renderEmployeeSection(dressmakers, "Портные")}
        {renderEmployeeSection(cutters, "Закройщики")}
      </div>
    </CustomPaper>
  );
};