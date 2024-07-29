import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import { useMemo } from "react";
import { deleteEmployee, getEmployees } from "../../../redux";
import { Card, CardContent, CardMedia, Grid, IconButton, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import styles from './HomePage.module.scss';
import { useTranslation } from 'react-i18next';
import { CustomPaper } from "../../components            ";

export const HomePage = () => {
  const dispatch: AppDispatch = useDispatch();
  const { data: employees, status, error } = useSelector((state: RootState) => state.employees);
  const { t } = useTranslation();

  const data = useMemo(() => {
    dispatch(getEmployees());
  }, [dispatch]);

  const handleDelete = (id: number) => {
    dispatch(deleteEmployee(id));
    console.log('delete');
  };

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
                <Card sx={{ borderRadius: '16px', position: 'relative' }}>
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
                      {t('homePage.position')}: {selectedPositions.join(', ')}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {t('homePage.phone')}: {employee.phoneNumber}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {t('homePage.inTeam')}: {employee.team ? t('homePage.yes') : t('homePage.no')}
                    </Typography>
                  </CardContent>
                  <IconButton
                    aria-label="delete"
                    sx={{
                      position: 'absolute',
                      top: 8,
                      right: 8,
                      backgroundColor: 'rgba(255, 255, 255, 0.7)',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 1)',
                      },
                    }}
                    onClick={() => handleDelete(employee.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </CustomPaper>
    </div>
  );
};
