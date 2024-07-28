import { Link, useNavigate } from 'react-router-dom';
import { Routes } from '../../enums/router';
import styles from './Header.module.scss';
import { Button, Select, MenuItem, Grid, SelectChangeEvent, Divider } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { CustomBreadcrumbs } from '../CustomBreadcrumbs';
import { useAuth } from '../../hooks';

export const Header = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const { isAuthenticated, logOut } = useAuth();

  const changeLanguage = (event: SelectChangeEvent<string>) => {
    i18n.changeLanguage(event.target.value as string);
  };

  const handleRegister = () => {
    navigate(Routes.Register);
  };

  return (
    <div className="container">
      <header className={styles.header}>
        <Grid container xs={12} alignItems="center">
          <Grid sm={6} className={styles['nav-links']}>
            <Link to={Routes.Home}>{t('navigation.home')}</Link>
            <Link to={Routes.AddEmployee}>{t('navigation.addEmployee')}</Link>
          </Grid>
          <Grid xs={12} sm={6} className="flex justify-end items-center gap-4">
            <Select
              value={i18n.language}
              onChange={changeLanguage}
              className={styles['language-select']}
              variant="outlined"
              size="small"
              sx={{ minWidth: 50 }}
            >
              <MenuItem value="en">EN</MenuItem>
              <MenuItem value="ru">RU</MenuItem>
            </Select>
            {isAuthenticated ? (
              <Button
                className={styles['logout-button']}
                variant="contained"
                sx={{ minWidth: 120 }}
                color="secondary"
                onClick={logOut}
              >
                {t('navigation.logout')}
              </Button>
            ) : (
              <Button
                className={styles['register-button']}
                variant="contained"
                sx={{ minWidth: 120 }}
                color="primary"
                onClick={handleRegister}
              >
                {t('navigation.register')}
              </Button>
            )}
          </Grid>
        </Grid>
      </header>
      <Divider />
      <div>
        <CustomBreadcrumbs />
      </div>
    </div>
  );
};
