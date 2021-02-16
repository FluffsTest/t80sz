const path = require('path');
module.exports = {
	output: {
		filename: "src/t80sz.core.js",
		path: path.resolve(__dirname, "public"),
	},
	resolve: {
    	alias: {
      		svelte: path.resolve('node_modules', 'svelte')
    	},
    	extensions: ['.mjs', '.js', '.svelte'],
    	mainFields: ['svelte', 'browser', 'module', 'main']
  	},
  	module: {
    	rules: [
      		{
        		test: /\.(html|svelte)$/,
        		exclude: /node_modules/,
        		use: 'svelte-loader'
      		},
      		{
        		test: /node_modules\/svelte\/.*\.mjs$/,
        		resolve: {
          			fullySpecified: false
        		}
      		},
			{
        		test: /\.(css|pcss)$/i,
        		exclude: /node_modules/,
        		use: ["css-loader", "postcss-loader"]
      		}
    	]
  	}
}