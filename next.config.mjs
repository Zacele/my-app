/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'plantsarepurple.de',
                port: '',
            },
        ],
    },
};

export default nextConfig;
