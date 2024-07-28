import { Paper } from '@mui/material';
import { CSSProperties, FC, ReactNode } from 'react';

interface ICustomPaperProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export const CustomPaper: FC<ICustomPaperProps> = ({ children, className, style }) => {
  return (
    <div className="container">
      <Paper elevation={23} className={className} style={{ ...style, borderRadius: '16px', height: '80vh', margin: '20px', padding: '40px' }}>
        {children}
      </Paper>
    </div>
  );
};
