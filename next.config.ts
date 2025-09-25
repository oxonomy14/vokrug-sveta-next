/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },

  // Вимикаємо автоматичну i18n маршрутизацію
  i18n: undefined,
};

module.exports = nextConfig;
