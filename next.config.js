/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    async redirects() {
        return [
            {
                source: '/weep',
                destination: 'https://open.spotify.com/playlist/6ccs74wYPfwnaEtARZ0nKI?si=6fdf12db02ea4a27&pt=435a78bb3644e5c9504b8d2509aed3df',
                permanent: false,
            },

        ];
    },
};

module.exports = nextConfig;