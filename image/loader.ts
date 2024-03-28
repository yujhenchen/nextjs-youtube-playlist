'use client';

import { ImageLoaderProps } from 'next/image';

const API_URL = 'https://placehold.co';

export default function myImageLoader({
  src,
  width,
  quality
}: ImageLoaderProps) {
  return `${API_URL}/${src}?w=${width}&q=${quality || 75}`;
}
