import React from 'react';
import Image, { ImageProps } from 'next/image';

const defaultImageStyle: React.CSSProperties = {
  objectFit: 'cover',
  maxWidth: '100%',
  height: 'auto'
};

type Props = {
  src: string;
  alt: string;
  imageStyle?: React.CSSProperties;
} & ImageProps;

export default function AppImage({ src, alt, imageStyle, ...rest }: Props) {
  return (
    <Image
      src={src}
      alt={alt}
      loading='lazy'
      style={
        imageStyle
          ? { ...defaultImageStyle, ...imageStyle }
          : { ...defaultImageStyle }
      }
      {...rest}
    />
  );
}
