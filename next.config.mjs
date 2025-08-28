/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "asesor.progressionstudios.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
