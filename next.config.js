/** @type {import('next').NextConfig} */
const config = require("./config.js");
const nextConfig = {
  env: {
    DB_URI: config.DB_URI,
    API: config.API,
  },
};

module.exports = nextConfig;
