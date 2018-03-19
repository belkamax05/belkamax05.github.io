const path = require("path");
const env = process.env;
const root = process.env.INIT_CWD
const isDev = process.env.npm_lifecycle_script.indexOf("--mode")>=0 && env.npm_lifecycle_script.indexOf("development")>=0;
const isProd = !isDev;
const mode = isDev ? "development" : "production";
const resolveApp = relativePath => path.resolve(root, relativePath);
const indexHtml = resolveApp("public/index.html");
const public = resolveApp("public");
const build = resolveApp("build");
//appSrc
//servedPath
module.exports = {
    root,
    build,
    public,
    mode,
    isDev,
    isProd,
    indexHtml,
};