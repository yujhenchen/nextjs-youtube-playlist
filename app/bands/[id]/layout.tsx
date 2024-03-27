import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Link from 'next/link';

const breadcrumbs = [
  <Link
    // underline='hover'
    key='1'
    color='inherit'
    href='/'
    // onClick={handleClick}
  >
    A
  </Link>,
  <Link
    // underline='hover'
    key='2'
    color='inherit'
    href='/material-ui/getting-started/installation/'
    // onClick={handleClick}
  >
    B
  </Link>,
  <Link
    // underline='hover'
    key='3'
    color='inherit'
    href='/material-ui/getting-started/'
    // onClick={handleClick}
  >
    C
  </Link>
];

export default function BandPageLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize='small' />}
        aria-label='breadcrumb'
      >
        {breadcrumbs}
      </Breadcrumbs>
      {children}
    </div>
  );
}
