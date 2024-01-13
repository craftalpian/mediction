const webpack = require("webpack");
const DFXWebPackConfig = require("./dfx.webpack.config");
DFXWebPackConfig.initCanisterIds();

const EnvPlugin = new webpack.EnvironmentPlugin({
  DFX_NETWORK: "local"
});

const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/login',
        permanent: false, // set to true if you want the redirect to be permanent
      },
    ];
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(EnvPlugin);
    return config;
  },
  output: "export"
};

module.exports = nextConfig;
