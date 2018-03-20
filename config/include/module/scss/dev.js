const css = require("../css");

module.exports = {
    test: /\.scss$/,
    loader: [
		...css.use,
        require.resolve('sass-loader'),
        require.resolve('../loaders/classname-loader'),
        //   {
    //     loader: 'sass-resources-loader',
    //     options: {
    //       resources: [ './src/styles/global/**/*.scss' ],
    //     },
    //   }
	  ],
  };
