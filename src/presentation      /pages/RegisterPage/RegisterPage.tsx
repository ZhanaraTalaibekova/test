import { Button, Grid, TextField, Typography, Paper } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { AppDispatch, registerUser } from '../../../redux';
import { useNavigate } from 'react-router';
import { Routes } from '../../enums/router';
import { Link } from 'react-router-dom';
import { Users } from '../../../data';
import { useTranslation } from 'react-i18next';
import { unwrapResult } from '@reduxjs/toolkit';
import styles from './RegisterPage.module.scss';

export const Register = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { control, handleSubmit, reset } = useForm<Users>();

  const onSubmit = async (values: Users) => {
    try {
      const resultAction = await dispatch(registerUser(values));
      unwrapResult(resultAction);
      reset();
      navigate(Routes.Home);
    } catch (err) {
      console.error('error', err);
    }
  };

  return (
    <div className={styles.registerWrapper}>
      <Paper sx={{ borderRadius: '16px' }} className={styles.paper}>
        <Typography variant="h4" sx={{ paddingBottom: '20px' }} className={styles.title}>
          {t('register.title')}
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Controller
                name="userName"
                control={control}
                defaultValue=""
                rules={{ required: t('register.requiredField') }}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    label={t('register.userNameLabel')}
                    variant="outlined"
                    fullWidth
                    error={!!error}
                    helperText={error ? error.message : null}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                rules={{ required: t('register.requiredField') }}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    label={t('register.emailLabel')}
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
                rules={{ required: t('register.requiredField') }}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    label={t('register.passwordLabel')}
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
              <Button variant="contained" color="primary" type="submit">
                {t('register.submitButton')}
              </Button>
              <Button variant="contained" color="primary">
                <Link to={Routes.Login} className={styles.link}>
                  {t('register.loginButton')}
                </Link>
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </div>
  );
};
