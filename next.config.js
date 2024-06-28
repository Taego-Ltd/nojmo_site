/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { serverActions: true },
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/nojmo",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
