const fs = require("fs");
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require("webpack-assets-manifest");
const config = require("../../index");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = [
	new CleanWebpackPlugin(['dist/*','build/*','docs/*'], { root:     config.root }),
    new ManifestPlugin(),
    new HtmlWebpackPlugin({
        inject: true,
        template: config.indexHtml,
        minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeRedundantAttributes: true,
            useShortDoctype: true,
            removeEmptyAttributes: true,
            removeStyleLinkTypeAttributes: true,
            keepClosingSlash: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true,
        },
    }),
    // new webpack.ProvidePlugin({
	// 	//'testProvide': 'path'
	// })
];