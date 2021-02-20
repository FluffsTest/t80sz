const cssExtract = require('mini-css-extract-plugin');
const htmlWebpack = require('html-webpack-plugin');
const copyFile =  require('copy-webpack-plugin');
const path = require('path');
const defcfg = require('./webpack.config');
const { merge } = require('webpack-merge');
module.exports = merge(defcfg, {
	mode: 'development',
	entry: "./src/debug/debug.ts",
	output: {
		filename: "t80sz.debug.js",
		path: path.resolve(__dirname, "dev"),
		publicPath: '',
	},
	plugins: [
		new htmlWebpack({
			title: "THE 80's ZONE",
			filename: "index.html",
			meta: {viewport: 'width=device-width, initial-scale=1'},
			hash: true
		}),
		new cssExtract({
			filename: "src/[name].css"
		}),
		new copyFile({
			patterns: [
				{from: 'src/debug/modules.json', to: 'modules.json'}
			]
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
				test: /\.(json)$/i,
				use: 'file-loader'
			}
		]
	}
})
