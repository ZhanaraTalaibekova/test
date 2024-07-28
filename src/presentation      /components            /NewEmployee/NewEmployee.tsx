import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, InputLabel, MenuItem, Paper, Select, TextField, Typography } from "@mui/material";
import { CustomPaper } from "../CustomPaper";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Employees } from "../../../data";
import { AppDispatch, createEmployee } from "../../../redux";
import { useDispatch } from "react-redux";


export const NewEmployee = () => {
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

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Employees> = async (data) => {
    try {
      await dispatch(createEmployee(data)).unwrap();
      reset();
      // navigate('/');
    } catch (error) {
      console.error('Ошибка при создании сотрудника:', error);
    }
  };

  return (
    <CustomPaper>
      <Typography variant="h4">Новый сотрудник</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <Controller
              name="firstName"
              control={control}
              defaultValue=""
              rules={{ required: 'Имя обязательно' }}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  label="Имя"
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
              rules={{ required: 'Фамилия обязательна' }}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  label="Фамилия"
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
              rules={{ required: 'Номер обязателен' }}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  label="Номер телефона"
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
              <FormLabel component="legend">Должность</FormLabel>
              <FormGroup>
                <Controller
                  name="positions.dressmaker"
                  control={control}
                  defaultValue={false}
                  render={({ field }) => (
                    <FormControlLabel control={<Checkbox {...field} color="primary" />} label="Швея" />
                  )}
                />
                <Controller
                  name="positions.cutter"
                  control={control}
                  defaultValue={false}
                  render={({ field }) => (
                    <FormControlLabel control={<Checkbox {...field} color="primary" />} label="Раскройщик" />
                  )}
                />
                <Controller
                  name="positions.technologist"
                  control={control}
                  defaultValue={false}
                  render={({ field }) => (
                    <FormControlLabel control={<Checkbox {...field} color="primary" />} label="Технолог" />
                  )}
                />
              </FormGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="team-label">Объединить в бригаду</InputLabel>
              <Controller
                name="team"
                control={control}
                // defaultValue="нет"
                render={({ field }) => (
                  <Select {...field} labelId="team-label" label="Объединить в бригаду">
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
              render={({ field }) => <TextField {...field} label="URL изображения" variant="outlined" fullWidth />}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit" fullWidth>
              Отправить
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