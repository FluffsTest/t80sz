const cssExtract = require('mini-css-extract-plugin');
const cssMinimize = require('css-minimizer-webpack-plugin');
const htmlWebpack = require('html-webpack-plugin');
const compress = require('compression-webpack-plugin');
const path = require('path');
const defcfg = require('./webpack.config');
const { merge } = require('webpack-merge');
module.exports = merge(defcfg, {
	mode: "production",
	entry: "./src/index.ts",
	output: {
		filename: "src/t80sz.core.js",
		path: path.resolve(__dirname, "public"),
		publicPath: './'
	},
	plugins: [
		new htmlWebpack({
			title: "THE 80's ZONE",
			filename: "home/index.html",
			meta: {
				'viewport': 'width=device-width, initial-scale=1',
				'description': 'EST. 2017-10-31',
				'theme-color': '#150411'
			},
			hash: true
		}),
		new cssExtract({
			filename: "src/[name].css"
		}),
		new compress({exclude: /node_modules/, compressionOptions: {level: 7}})
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
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'src/fonts',
							publicPath: '../src/fonts'
						}
					}
				]
      		},
			{
				test: /\.(webp|png|jpg)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'src/assets',
							publicPath: '../src/assets'
						}
					}
				]
			}
		]
	},
	optimization: {
		minimize: true,
		minimizer: [
			new cssMinimize(),
		]
	}
});
