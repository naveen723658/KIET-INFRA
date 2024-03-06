/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.kamalinternationall.in",
      },
    ],
  },
};

export default nextConfig;
