import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
i18n: {
    locales: ['ru', 'uk'],      
    defaultLocale: 'ru',         
    localeDetection: false,     
  },
};

export default nextConfig;


