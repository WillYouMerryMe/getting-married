const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      issuer: { and: [/\.(js|ts|md)x?$/] },
      type: 'asset/resource',
      generator: {
        filename: 'static/fonts/[name][ext]',
      },
    });
    return config;
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    domains: ['ssl.pstatic.net'],
  },
};

export default nextConfig;
