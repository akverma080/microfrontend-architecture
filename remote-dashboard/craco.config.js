const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  webpack: {
    configure: (config) => {
      config.plugins.push(
        new ModuleFederationPlugin({
          name: "dashboard",
          filename: "remoteEntry.js",
          exposes: {
            "./Dashboard": "./src/Dashboard"
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
