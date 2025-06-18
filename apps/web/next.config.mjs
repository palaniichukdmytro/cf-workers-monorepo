/** @type {import('next').NextConfig} */

import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
void initOpenNextCloudflareForDev();

const config = {
    output: 'standalone',
    experimental: {
        serverComponentsExternalPackages: ['firebase-admin', 'jose', '@emotion/react', 'react-select', '@emotion', 'jwks-rsa'],
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    }
}



export default config