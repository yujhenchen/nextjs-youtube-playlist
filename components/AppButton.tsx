import Button from '@mui/material/Button';
import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  color: 'primary' | 'secondary';
  colorToken: 'main' | 'light' | 'dark' | 'contrastText';
};

export default function AppButton({ children, color, colorToken }: Props) {
  return (
    <Button
      variant='contained'
      sx={{ bgcolor: `${color}.${colorToken}`, m: 1 }}
    >
      {children}
    </Button>
  );
}
