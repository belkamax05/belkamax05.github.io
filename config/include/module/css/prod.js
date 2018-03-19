const shouldUseSourceMap = false;//process.env.GENERATE_SOURCEMAP !== 'false';
const autoprefixer = require('autoprefixer');
const config = require('../../../');
const publicPath = config.servedPath;
// Some apps do not use client-side routing with pushState.
// For these, "homepage" can be set to "." to enable relative asset paths.
const shouldUseRelativeAssetPaths = publicPath === './';
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractTextPluginOptions = shouldUseRelativeAssetPaths
? // Making sure that the publicPath goes back to to build folder.
  { publicPath: Array(cssFilename.split('/').length).join('../') }
: {};
module.exports = {
    test: /\.css$/,
    use: [
		require.resolve('style-loader'),
		{
		  loader: require.resolve('css-loader'),
		  options: {
			importLoaders: 1,
		  },
		},
		{
		  loader: require.resolve('postcss-loader'),
		  options: {
			// Necessary for external CSS imports to work
			// https://github.com/facebookincubator/create-react-app/issues/2677
			ident: 'postcss',
			plugins: () => [
			  require('postcss-flexbugs-fixes'),
			  autoprefixer({
				browsers: [
				  '>1%',
				  'last 4 versions',
				  'Firefox ESR',
				  'not ie < 9', // React doesn't support IE8 anyway
				],
				flexbox: 'no-2009',
			  }),
			],
		  },
		},
	  ],
    // Note: this won't work without `new ExtractTextPlugin()` in `plugins`.
  };