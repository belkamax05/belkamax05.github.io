const fs = require("fs");
const path = require('path');
const config = require("../../index");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require("webpack-assets-manifest");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = [
	new CleanWebpackPlugin(['dist/*','build/*','docs/*'], { root:     config.root }),
    new ManifestPlugin(),
    new HtmlWebpackPlugin({
        inject: true,
        template: config.indexHtml,
    })
];