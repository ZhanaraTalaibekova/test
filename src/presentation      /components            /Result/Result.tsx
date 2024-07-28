import { CheckCircleOutline } from '@mui/icons-material';
import { CardContent, Typography } from '@mui/material';
import { FC } from 'react';
import { CustomPaper } from '../CustomPaper';

interface IResultProps {
  title: string;
  subTitle: string;
}

export const Result: FC<IResultProps> = ({ title, subTitle }) => {
  return (
    <div className="container">
      <CustomPaper style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', paddingTop: '14%' }}>
        <CheckCircleOutline style={{ fontSize: '48px', color: 'green' }} />
        <CardContent>
          <Typography variant="h5" component="h2">
            {title}
          </Typography>
          <Typography color="textSecondary">
            {subTitle}
          </Typography>
        </CardContent>
      </CustomPaper>
    </div>
  );
};
