/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "picsum.photos",
                port: "",
                pathname: "/id/**/**/**",
            },
            {
                protocol: "https",
                hostname: "picsum.photos",
                port: "",
                pathname: "/200/100",
            },
        ],
    },
};

module.exports = nextConfig;
