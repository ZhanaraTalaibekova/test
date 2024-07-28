import { Link } from 'react-router-dom';
import { Routes } from '../../enums/router';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <div className='container'>
      <header className={styles.header}>
        <Link to={Routes.Home}>Главная</Link>
        <Link to={Routes.AddEmployee}>Добавить сотрудника</Link>
      </header>
    </div>
  );
};
