module.exports = {
  components: "src/**/*.{js,jsx,ts,tsx}",
  webpackConfig: {
    module: {
      rules: [
        // Babel loader, will use your project’s babel.config.js
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        },
        // Other loaders that are needed for your components
        {
          test: /\.css$/,
          use: [
            "style-loader",
            "css-loader, awesome-typescript-loader",
            "babel-loader"
          ]
        }
      ]
    }
  }
};
