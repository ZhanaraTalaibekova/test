import { Box, InputAdornment, TextField, Typography } from '@mui/material';
import { CustomPaper } from '../CustomPaper';
import { FilterList, Search } from '@mui/icons-material';

export const EmployeeList: React.FC = () => {
  return (
    <CustomPaper>
      <Typography variant="h4">Все сотрудники</Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 2 }}>
        <TextField
          type="search"
          label="Поиск"
          variant="outlined"
          fullWidth
          placeholder="Поиск сотрудника"
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
    </CustomPaper>
  )
}

