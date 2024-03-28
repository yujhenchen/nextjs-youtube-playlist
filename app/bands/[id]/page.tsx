import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AppImage from '@/components/AppImage';

export default function BandPage() {
  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          width: '100%'
        }}
      >
        <AppImage
          width={500}
          height={500}
          src={'600x400'}
          alt={'600x400'}
          loading='lazy'
        />
        <Box>
          <Typography variant='h1' component='h2'>
            Band name
          </Typography>

          <Typography variant='body1' component='p'>
            Band info
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
