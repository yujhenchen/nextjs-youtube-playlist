/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: 'custom',
    loaderFile: './image/loader.ts'
  }
};

export default nextConfig;
