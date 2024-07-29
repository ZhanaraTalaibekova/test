import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, InputLabel, MenuItem, Paper, Select, TextField, Typography } from "@mui/material";
import { CustomPaper } from "../CustomPaper";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Employees } from "../../../data";
import { addEmployeePosition, AppDispatch, createEmployee } from "../../../redux";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

export const NewEmployee = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const { control, handleSubmit, reset } = useForm<Employees>({
    mode: 'onChange',
    defaultValues: {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      positions: {
        dressmaker: false,
        cutter: false,
        technologist: false,
      },
      team: false,
      userImage: '',
    },
  });

  const onSubmit: SubmitHandler<Employees> = async (data) => {
    try {
      await dispatch(createEmployee(data)).unwrap();
      await dispatch(addEmployeePosition(data)).unwrap();
      reset({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        positions: {
          dressmaker: false,
          cutter: false,
          technologist: false,
        },
        team: false,
        userImage: '',
      });
    } catch (error) {
      console.error('Ошибка при создании сотрудника:', error);
    }
  };

  return (
    <CustomPaper>
      <Typography sx={{ paddingBottom: '20px' }} variant="h4">{t('newEmployee.title')}</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <Controller
              name="firstName"
              control={control}
              defaultValue=""
              rules={{ required: t('newEmployee.firstNameRequired') }}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  label={t('newEmployee.firstName')}
                  variant="outlined"
                  fullWidth
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <Controller
              name="lastName"
              control={control}
              defaultValue=""
              rules={{ required: t('newEmployee.lastNameRequired') }}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  label={t('newEmployee.lastName')}
                  variant="outlined"
                  fullWidth
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <Controller
              name="phoneNumber"
              control={control}
              defaultValue=""
              rules={{ required: t('newEmployee.phoneNumberRequired') }}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  label={t('newEmployee.phoneNumber')}
                  variant="outlined"
                  fullWidth
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <FormControl component="fieldset">
              <FormLabel component="legend">{t('newEmployee.positions')}</FormLabel>
              <FormGroup>
                <Controller
                  name="positions.dressmaker"
                  control={control}
                  defaultValue={false}
                  render={({ field }) => (
                    <FormControlLabel control={<Checkbox {...field} color="primary" />} label={t('newEmployee.dressmaker')} />
                  )}
                />
                <Controller
                  name="positions.cutter"
                  control={control}
                  defaultValue={false}
                  render={({ field }) => (
                    <FormControlLabel control={<Checkbox {...field} color="primary" />} label={t('newEmployee.cutter')} />
                  )}
                />
                <Controller
                  name="positions.technologist"
                  control={control}
                  defaultValue={false}
                  render={({ field }) => (
                    <FormControlLabel control={<Checkbox {...field} color="primary" />} label={t('newEmployee.technologist')} />
                  )}
                />
              </FormGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="team-label">{t('newEmployee.team')}</InputLabel>
              <Controller
                name="team"
                control={control}
                render={({ field }) => (
                  <Select {...field} labelId="team-label" label={t('newEmployee.team')}>
                    <MenuItem value="true">Да</MenuItem>
                    <MenuItem value="false">Нет</MenuItem>
                  </Select>
                )}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="userImage"
              control={control}
              defaultValue=""
              render={({ field }) => <TextField {...field} label={t('newEmployee.imageURL')} variant="outlined" fullWidth />}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit" fullWidth>
              {t('newEmployee.submit')}
            </Button>
          </Grid>
        </Grid>
      </form>
    </CustomPaper>
  );
};


{/* <Controller
              name="userImage"
              control={control}
              // defaultValue=""
              render={({ field }) => (
                <Button
                  variant="contained"
                  component="label"
                  startIcon={<CloudUpload />}
                >
                  Загрузить изображение
                  <input
                    type="file"
                    hidden
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        field.onChange(e.target.files[0]);
                      }
                    }}
                  />
                </Button>
              )}
            /> */}