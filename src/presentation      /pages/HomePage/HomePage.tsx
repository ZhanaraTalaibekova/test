import { useDispatch, useSelector } from "react-redux";
import { CustomPaper } from "../../components            ";
import { AppDispatch, RootState } from "../../../redux/store";
import { useEffect } from "react";
import { getEmployees } from "../../../redux";
import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import styles from './HomePage.module.scss';

export const HomePage = () => {
  const dispatch: AppDispatch = useDispatch();
  const { data: employees, status, error } = useSelector((state: RootState) => state.employees);

  useEffect(() => {
    dispatch(getEmployees());
  }, [dispatch]);

  return (
    <div className='container'>
      <CustomPaper>
        <Grid container spacing={4}>
          {employees.map((employee) => {
            const selectedPositions = Object.keys(employee.positions).filter(
              (key) => employee.positions[key]
            );
            return (
              <Grid item key={employee.id} xs={12} sm={6} md={4} lg={3}>
                <Card sx={{ borderRadius: '16px' }}>
                  <CardMedia
                    component="img"
                    className={styles.cardMedia}
                    image={typeof employee.userImage === 'string' ? employee.userImage : ''}
                    alt={`${employee.firstName} ${employee.lastName}`}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {employee.firstName} {employee.lastName}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Position: {selectedPositions.join(', ')}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Phone: {employee.phoneNumber}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      In Team: {employee.team ? 'Yes' : 'No'}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            )
          })}
        </Grid>
      </CustomPaper>
    </div>
  );
};
