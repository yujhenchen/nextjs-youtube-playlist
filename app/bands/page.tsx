import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import AppImage from '@/components/AppImage';

const itemData = [
  {
    img: '600x400',
    title: 'Breakfast',
    author: '@bkristastucchio'
  },
  {
    img: '600x400',
    title: 'Burger',
    author: '@rollelflex_graphy726'
  },
  {
    img: '600x400',
    title: 'Camera',
    author: '@helloimnik'
  }
];

export default function BandsPage() {
  return (
    <ImageList
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        width: '100%',
        height: '100%'
      }}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <AppImage
            width={500}
            height={500}
            src={`${item.img}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading='lazy'
          />
          <ImageListItemBar
            title={item.title}
            subtitle={<span>by: {item.author}</span>}
            position='below'
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
