const shouldUseSourceMap = false;//process.env.GENERATE_SOURCEMAP !== 'false';
const autoprefixer = require('autoprefixer');
const config = require('../../../');
const publicPath = config.servedPath;
// Some apps do not use client-side routing with pushState.
// For these, "homepage" can be set to "." to enable relative asset paths.
const shouldUseRelativeAssetPaths = publicPath === './';
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    test: /\.css$/,
    use: [
		require.resolve('style-loader'),
		require("../loaders/css-loader-config"),
        require("../loaders/postcss-loader-config"),
	  ],
    // Note: this won't work without `new ExtractTextPlugin()` in `plugins`.
  };