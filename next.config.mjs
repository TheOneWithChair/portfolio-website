/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "github.githubassets.com" },
      { protocol: "https", hostname: "images.rawpixel.com" },
      { protocol: "https", hostname: "ui.aceternity.com" },
      { protocol: "https", hostname: "w7.pngwing.com" },
      { protocol: "https", hostname: "pbs.twimg.com" },
      { protocol: "https", hostname: "cdn.brandfetch.io" },
      { protocol: "https", hostname: "cdn.jsdelivr.net" },
      { protocol: "https", hostname: "upload.wikimedia.org" }
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
