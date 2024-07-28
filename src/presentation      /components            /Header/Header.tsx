import { Link, useNavigate } from 'react-router-dom';
import { Routes } from '../../enums/router';
import styles from './Header.module.scss';
import { Button } from '@mui/material';

export const Header = () => {
  const navigate = useNavigate();

  const registerPage = () => {
    navigate(Routes.Register);
  };

  return (
    <div className="container">
      <header className={`${styles.header} flex justify-between`}>
        <div className="flex gap-5 items-center">
          <Link to={Routes.Home}>Главная</Link>
          <Link to={Routes.AddEmployee}>Добавить сотрудника</Link>
        </div>
        <Button variant="contained" color="primary" onClick={registerPage}>
          Зарегистрироваться/Логин
        </Button>
      </header>
    </div>
  );
};
