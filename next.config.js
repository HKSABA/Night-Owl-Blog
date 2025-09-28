const webpack = require("webpack");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "unsplash.com",
        port: "",
        pathname: "/photos/**",
      },
    ],
  },

  env: {
    // MONGODB
    MONGODB_USERNAME: "hksaba",
    MONGODB_PASSWORD: "LRPAubx6fmwj1XVk",
    DB_NAME: "BlogData",
  },
};

module.exports = nextConfig;
