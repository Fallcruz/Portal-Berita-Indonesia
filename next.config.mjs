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
            },
            {
                protocol: 'https',
                hostname: 'static.republika.co.id',
                port: '',
                pathname: '/**'
            },
            {
                protocol: 'https',
                hostname: 'img.antaranews.com',
                port: '',
                pathname: '/**'
            }
        ]
    }
};

export default nextConfig;
