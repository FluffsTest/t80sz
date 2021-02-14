const cssExtract = require('mini-css-extract-plugin');
const cssMinimize = require('css-minimizer-webpack-plugin');
const htmlWebpack = require('html-webpack-plugin');
const path = require('path');
const defcfg = require('./webpack.config');
const { merge } = require('webpack-merge');
module.exports = merge(defcfg, {
	mode: "production",
	entry: "./src/index.js",
	output: {
		filename: "src/t80sz.core.js",
		path: path.resolve(__dirname, "public"),
		publicPath: ''
	},
	plugins: [
		new htmlWebpack({
			title: "THE 80's ZONE",
			filename: "home/index.html",
			meta: {viewport: 'width=device-width, initial-scale=1'},
			hash: true
		}),
		new cssExtract({
			filename: "src/[name].css"
		})
	],
	module: {
		rules: [
			{
        		test: /\.(css|pcss)$/i,
        		exclude: /node_modules/,
        		use: [cssExtract.loader, "css-loader", "postcss-loader"]
      		},
			{
        		test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
				parser: {
					dataUrlCondition: {
						maxSize: 8 * 1024 
					}
				},
      		},
		]
	},
	optimization: {
		minimize: true,
		minimizer: [
			new cssMinimize(),
		]
	}
});
