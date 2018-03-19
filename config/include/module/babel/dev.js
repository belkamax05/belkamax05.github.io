const config = require("../../../");

module.exports = {
	test: /\.(js|jsx)$/,
	include: config.appSrc,
	loader: require.resolve('babel-loader'),
	query:
	{
		plugins: ['transform-decorators-legacy'],
	  	presets:['react']
	}
	// query: {
	// 	
	// }
}