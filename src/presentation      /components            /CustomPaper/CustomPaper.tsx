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
      <Paper elevation={23} className={className} style={{ ...style, borderRadius: '16px', minHeight: '80vh', maxHeight: 'auto', overflow: 'auto', padding: '40px' }}>
        {children}
      </Paper>
    </div>
  );
};
