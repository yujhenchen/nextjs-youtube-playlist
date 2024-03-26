import React from 'react';
import Image from 'next/image';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

const itemData = [
  {
    img: 'photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    author: '@bkristastucchio'
  },
  {
    img: 'photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    author: '@rollelflex_graphy726'
  },
  {
    img: 'photo-1522770179533-24471fcdba45',
    title: 'Camera',
    author: '@helloimnik'
  }
];

const imageStyle: React.CSSProperties = {
  objectFit: 'cover',
  maxWidth: '100%',
  height: 'auto'
};

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
          <Image
            width={500}
            height={500}
            src={`${item.img}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading='lazy'
            style={imageStyle}
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
