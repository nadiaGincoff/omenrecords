/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
      serverComponentsExternalPackages:['mongoose','@typegoose/typegoose']
  },
  env: {
    ACCESS_KEY: process.env.ACCESS_KEY_FOR_MAILING,
  },
}

module.exports = nextConfig