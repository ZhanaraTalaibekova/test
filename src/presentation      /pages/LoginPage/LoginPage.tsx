import { Button, Grid, TextField, Typography, Paper } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { AppDispatch, loginUser } from '../../../redux';
import { useNavigate } from 'react-router';
import { Routes } from '../../enums/router';
import { Users } from '../../../data';
import { useTranslation } from 'react-i18next';
import styles from './LoginPage.module.scss';
import { unwrapResult } from '@reduxjs/toolkit';

export const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { control, handleSubmit, reset } = useForm<Users>();

  const onSubmit = async (values: Users) => {
    try {
      const resultAction = await dispatch(loginUser(values));
      unwrapResult(resultAction);
      reset();
      navigate(Routes.AddEmployee);
    } catch (err) {
      console.error('error', err);
    }
  };

  return (
    <div className={styles.loginWrapper}>
      <Paper sx={{ borderRadius: '16px' }} className={styles.paper}>
        <Typography sx={{ paddingBottom: '20px' }} variant="h4" className={styles.title}>
          {t('login.title')}
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
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
            <Grid item xs={12} className={styles.buttons}>
              <Button variant="contained" color="primary" onClick={() => navigate(Routes.Register)}>
                {t('login.backButton')}
              </Button>
              <Button variant="contained" color="primary" type="submit">
                {t('login.submitButton')}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </div>
  );
};
