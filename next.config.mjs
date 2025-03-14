/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'images.unsplash.com',
      'github.githubassets.com',
      'images.rawpixel.com',
      'ui.aceternity.com',
      'w7.pngwing.com',
      'pbs.twimg.com',
    ],
  },
  async headers() {
    return [
      {
        source: '/favicon.ico',
        headers: [
          {
            key: 'Content-Type',
            value: 'image/x-icon',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
