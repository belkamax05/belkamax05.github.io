const path = require("path");
const fs = require("fs");

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const rootFiles = () => {
    const walkSync = function(dir, filelist=[]) {
        const files = fs.readdirSync(dir);
        files.forEach(function(file) {
            if (!fs.statSync(dir + '/' + file).isDirectory()) {
                filelist.push(file);
            }
        });
        return filelist;
    };
    return walkSync("src");
}

const rootFilesObj = {};
rootFiles().forEach(item => {
    rootFilesObj[item.replace(".js", "")] = [require.resolve("../polyfills"), resolveApp("src/"+item)];
})

module.exports = rootFilesObj;