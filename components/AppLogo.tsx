import React from 'react';

import AdbIcon from '@mui/icons-material/Adb';
import Typography from '@mui/material/Typography';
import { SxProps, Theme } from '@mui/material/styles';

type Props = {
  href: string;
  logo: string;
  iconStyles?: SxProps<Theme>;
  logoStyles?: SxProps<Theme>;
};

const defaultIconStyles = { display: { xs: 'none', md: 'flex' }, mr: 1 };

const defaultLogoStyles = {
  mr: 2,
  display: { xs: 'none', md: 'flex' },
  fontFamily: 'monospace',
  fontWeight: 700,
  letterSpacing: '.3rem',
  color: 'inherit',
  textDecoration: 'none'
};

export default function AppLogo({ href, logo, iconStyles, logoStyles }: Props) {
  return (
    <>
      <AdbIcon
        sx={
          iconStyles
            ? { ...defaultIconStyles, ...iconStyles }
            : { ...defaultIconStyles }
        }
      />
      <Typography
        variant='h6'
        noWrap
        component='a'
        href={href}
        sx={
          logoStyles
            ? { ...defaultLogoStyles, ...logoStyles }
            : { ...defaultLogoStyles }
        }
      >
        {logo}
      </Typography>
    </>
  );
}
