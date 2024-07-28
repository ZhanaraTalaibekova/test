import { Button, Grid, TextField, Typography } from '@mui/material';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { CustomPaper } from '../../components            ';
import { useDispatch } from 'react-redux';
import { AppDispatch, loginUser } from '../../../redux';
import { useNavigate } from 'react-router';
import { Routes } from '../../enums/router';
import { Link } from 'react-router-dom';
import { Users } from '../../../data';

export const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const { control, handleSubmit, reset } = useForm<Users>();

  const onSubmit = (values: Users) => {
    dispatch(loginUser(values));
    reset();
    navigate(Routes.AddEmployee);
  };

  return (
    <CustomPaper className=" h-full flex flex-col justify-center">
      <Typography variant="h4" className="text-center p-3">
        Логин
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{ required: 'Это обязательное поле' }}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  label="Email"
                  variant="outlined"
                  fullWidth
                  error={!!error}
                  helperText={error ? error.message : null}
                  type="email"
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <Controller
              name="password"
              control={control}
              defaultValue=""
              rules={{ required: 'Это обязательное поле' }}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  label="Пароль"
                  variant="outlined"
                  fullWidth
                  error={!!error}
                  helperText={error ? error.message : null}
                  type="password"
                />
              )}
            />
          </Grid>
          <Grid item xs={12} className="flex justify-center gap-5">
            <Button variant="contained" color="primary">
              <Link to={Routes.Register}>Назад</Link>
            </Button>
            <Button variant="contained" color="primary" type="submit">
              Войти
            </Button>
          </Grid>
        </Grid>
      </form>
    </CustomPaper>
  );
};
