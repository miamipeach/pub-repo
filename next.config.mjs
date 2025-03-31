import {createVanillaExtractPlugin} from "@vanilla-extract/next-plugin";


const withVanillaExtract = createVanillaExtractPlugin({
    identifiers: ({ hash }) => `prefix_${hash}`
});

/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['@company/design-system']
};

export default withVanillaExtract(nextConfig);
