const config = require("./");
var fs = require('fs');
const { root, isDev, isProd, mode } = config;

const requireModule = (name, requireMode) => {
    const devPath = root+"\\config\\include\\"+name+"\\dev.js";
    const prodPath = root+"\\config\\include\\"+name+"\\prod.js";
    const indexPath = root+"\\config\\include\\"+name+"\\index.js";
    
    if(requireMode==="ARR") {
        const devObj = isDev && fs.existsSync(devPath) ? require(devPath) : [];
        const prodObj = isProd && fs.existsSync(prodPath) ? require(prodPath) : [];
        const indexObj = fs.existsSync(indexPath) ? require(indexPath) : [];
        return [...indexObj, ...devObj, ...prodObj];
    }
    if(requireMode==="OBJ") {
        const devObj = isDev && fs.existsSync(devPath) ? require(devPath) : {};
        const prodObj = isProd && fs.existsSync(prodPath) ? require(prodPath) : {};
        const indexObj = fs.existsSync(indexPath) ? require(indexPath) : {};
        return { ...indexObj, ...devObj, ...prodObj};
    }
    return isDev && fs.existsSync(devPath) ? require(devPath) : isProd && fs.existsSync(prodPath) ? require(prodPath) : require(indexPath);
}
const requireSingle = (name) => {
    return requireModule(name, null);
}
const requireArr = (name) => {
    return requireModule(name, "ARR");
}
const requireObj = (name) => {
    return requireModule(name, "OBJ");
}
process.env.NODE_ENV = mode;

module.exports = {
    devtool: requireSingle("devtool"),
	entry: requireObj("entry"),
	output: requireObj("output"),
	module: requireObj("module"),
	plugins: requireArr("plugins"),
	resolve: requireObj("resolve"),
}