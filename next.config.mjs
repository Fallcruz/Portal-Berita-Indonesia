/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'akcdn.detik.net.id',
                port: '',
                pathname: '/**'
            },
            {
                protocol: 'https',
                hostname: 'blue.kumparan.com',
                port: '',
                pathname: '/**'
            },
            {
                protocol: 'https',
                hostname: 'awsimages.detik.net.id',
                port: '',
                pathname: '/**'
            }
        ]
    }
};

export default nextConfig;
