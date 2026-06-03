const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/xp0z-writeups' : '',
  assetPrefix: isProd ? '/xp0z-writeups/' : '',
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? '/xp0z-writeups' : '',
  }
};

export default nextConfig;
