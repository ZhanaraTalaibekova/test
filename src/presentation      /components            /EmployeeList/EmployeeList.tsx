import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import { Avatar, Box, Divider, IconButton, InputAdornment, ListItem, Switch, TextField, Typography } from '@mui/material';
import { Search, FilterList, Edit } from '@mui/icons-material';
import { CustomPaper } from '../CustomPaper';
import { AppDispatch, getEmployees, RootState } from '../../../redux';
import { Employees } from '../../../data';
import styles from './EmployeeList.module.scss';

export const EmployeeList: React.FC = () => {
  const { t } = useTranslation();
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const { data: employeesPositions, status, error } = useSelector((state: RootState) => state.employeesPositions);
  const { data: employees } = useSelector((state: RootState) => state.employees);

  const [technologists, setTechnologists] = useState<Employees[]>([]);
  const [dressmakers, setDressmakers] = useState<Employees[]>([]);
  const [cutters, setCutters] = useState<Employees[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useMemo(() => {
    setTechnologists([]);
    setDressmakers([]);
    setCutters([]);

    employees.forEach((employee: Employees) => {
      if (employee.positions?.technologist) {
        setTechnologists((prev) => [...prev, employee]);
      }
      if (employee.positions?.dressmaker) {
        setDressmakers((prev) => [...prev, employee]);
      }
      if (employee.positions?.cutter) {
        setCutters((prev) => [...prev, employee]);
      }
    });
  }, [employees]);

  useEffect(() => {
    dispatch(getEmployees());
    if (status === 'succeeded') {
      console.log('Employees loaded successfully:', employeesPositions);
    } else if (status === 'failed') {
      console.error('Failed to load employees:', error);
    }
  }, [status, employeesPositions, error]);

  const handleNavigation = (position: string) => {
    let route = '';
    switch (position) {
      case 'technologist':
        route = '/technologists';
        break;
      case 'dressmaker':
        route = '/dressmakers';
        break;
      case 'cutter':
        route = '/cutters';
        break;
      default:
        route = '/';
    }
    navigate(route);
  };

  const renderEmployeeSection = (employees: any[], title: string, positionKey: string) => {
    return (
      <div className={styles.section}>
        <div className={styles.employeesAvatar}>
          {employees.slice(0, 2).map((employee, index) => (
            <ListItem key={index} className={styles.listItem}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Avatar className={styles.avatar} src={employee.userImage || ''} />
              </div>
            </ListItem>
          ))}
        </div>
        <div className={styles.employees}>
          {employees.slice(0, 2).map((employee, index) => (
            <ListItem key={index} className={styles.listItem}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Typography>{employee.firstName}</Typography>
              </div>
            </ListItem>
          ))}
        </div>
        <Divider orientation="vertical" flexItem />
        <div className={styles.positions}>
          <Typography variant="h6">{title}</Typography>
        </div>
        <Divider orientation="vertical" flexItem />
        <div className={styles.icons}>
          <Switch />
          <IconButton>
            <Edit />
          </IconButton>
        </div>
      </div>
    );
  };

  const filteredTechnologists = technologists.filter((employee) =>
    employee.firstName.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredDressmakers = dressmakers.filter((employee) =>
    employee.firstName.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredCutters = cutters.filter((employee) =>
    employee.firstName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <CustomPaper>
      <Typography variant="h4">{t('allEmployees')}</Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 2, paddingBottom: '16px' }}>
        <TextField
          type="search"
          label={t('search')}
          variant="outlined"
          fullWidth
          placeholder={t('searchEmployee')}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <FilterList sx={{ cursor: 'pointer' }} />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <div className={styles.wrapper}>
        {renderEmployeeSection(filteredTechnologists, t('technologists'), 'technologist')}
        {renderEmployeeSection(filteredDressmakers, t('dressmakers'), 'dressmaker')}
        {renderEmployeeSection(filteredCutters, t('cutters'), 'cutter')}
      </div>
    </CustomPaper>
  );
};
