const config = require('../../');
const path = require('path');
module.exports = {
	path: config.build,
	pathinfo: true,
    filename: 'static/js/[name].[chunkhash:8].js',
    chunkFilename: 'static/js/[name].[chunkhash:8].chunk.js',
    publicPath: "/build/",
    devtoolModuleFilenameTemplate: info => path.relative(config.root, info.absoluteResourcePath).replace(/\\/g, '/'),
};