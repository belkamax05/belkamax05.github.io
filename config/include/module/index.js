module.exports = {
    strictExportPresence: true,
    rules: [
       // require("./linter"),
        {
            oneOf: [
               // require("./img"),
                //require("./js"),
                require("./css"),
				require("./scss"),
				require("./babel")
               // require("./files")
            ],
        },
    ],
};