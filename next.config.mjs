import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';

const withVanillaExtract = createVanillaExtractPlugin({
  identifiers: ({ hash }) => `kds_${hash}`,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  presets: ['next/babel'],
  plugins: ['@emotion'],
};

export default withVanillaExtract(nextConfig);
