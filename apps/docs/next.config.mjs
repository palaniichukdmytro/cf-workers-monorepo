import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
void initOpenNextCloudflareForDev();

const config = {
    experimental: {
        serverComponentsExternalPackages: ['firebase-admin@', 'jose', '@emotion/react', 'react-select', '@emotion', 'jwks-rsa'],
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    }
}



export default config