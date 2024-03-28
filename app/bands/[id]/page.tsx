import React from 'react';
import Image from 'next/image';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const imageStyle: React.CSSProperties = {
  objectFit: 'cover',
  maxWidth: '100%',
  height: 'auto'
};

export default function BandPage() {
  return (
    <Container>
      <Box sx={{ display: 'flex', width: '100%' }}>
        <Image
          width={500}
          height={500}
          src={''}
          alt={''}
          loading='lazy'
          style={imageStyle}
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
