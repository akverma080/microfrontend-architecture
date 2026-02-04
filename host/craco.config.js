const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  webpack: {
    configure: (config) => {
      config.plugins.push(
        new ModuleFederationPlugin({
          name: "host",
          remotes: {
            dashboard: "dashboard@http://localhost:3001/remoteEntry.js"
          },
          shared: {
            react: { singleton: true, requiredVersion: false },
            "react-dom": { singleton: true, requiredVersion: false }
          }
        })
      );

      return config;
    }
  }
};
