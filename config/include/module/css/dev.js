

module.exports = {
    test: /\.css$/,
    use: [
      require.resolve('style-loader'),
      require("../loaders/css-loader-config"),
      require("../loaders/postcss-loader-config")
    ],
};