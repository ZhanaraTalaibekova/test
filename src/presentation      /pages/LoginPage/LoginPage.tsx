import { Button, Grid, TextField, Typography } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { AppDispatch, loginUser } from '../../../redux';
import { useNavigate } from 'react-router';
import { Routes } from '../../enums/router';
import { Link } from 'react-router-dom';
import { Users } from '../../../data';
import { useTranslation } from 'react-i18next';
import { CustomPaper } from '../../components            ';


export const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { control, handleSubmit, reset } = useForm<Users>();

  const onSubmit = (values: Users) => {
    dispatch(loginUser(values));
    reset();
    navigate(Routes.AddEmployee);
  };

  return (
    <CustomPaper className="h-full flex flex-col justify-center items-center p-5">
      <Typography variant="h4" className="text-center mb-4">
        {t('login.title')}
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{
                required: t('login.requiredField'),
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: t('login.invalidEmail'),
                },
              }}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  label={t('login.emailLabel')}
                  variant="outlined"
                  fullWidth
                  error={!!error}
                  helperText={error ? error.message : null}
                  type="email"
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="password"
              control={control}
              defaultValue=""
              rules={{
                required: t('login.requiredField'),
                minLength: {
                  value: 6,
                  message: t('login.passwordMinLength'),
                },
              }}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  label={t('login.passwordLabel')}
                  variant="outlined"
                  fullWidth
                  error={!!error}
                  helperText={error ? error.message : null}
                  type="password"
                />
              )}
            />
          </Grid>
          <Grid item xs={12} className="flex justify-center gap-5 mt-4">
            <Button variant="contained" color="primary" onClick={() => navigate(Routes.Register)}>
              {t('login.backButton')}
            </Button>
            <Button variant="contained" color="primary" type="submit">
              {t('login.submitButton')}
            </Button>
          </Grid>
        </Grid>
      </form>
    </CustomPaper>
  );
};
