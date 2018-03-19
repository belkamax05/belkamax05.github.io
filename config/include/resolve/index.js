//const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
//var alias = require('./webpack.aliases.js');
const path = require("path");

module.exports = {
  modules: ["node_modules", "src"],
  extensions: [".web.js", ".js", ".json", ".web.jsx", ".jsx", ".ts"]
  //alias: alias,
  // plugins: [
  //   new ModuleScopePlugin(paths.appSrc, [paths.appPackageJson]),
  // ],
};
