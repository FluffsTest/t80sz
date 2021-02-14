const path = require('path');
const defcfg = require('./webpack.config');
const { merge } = require('webpack-merge');
module.exports = merge(defcfg, {
	mode: 'development',
	output: {
		filename: "t80sz.core.js",
		path: path.resolve(__dirname, "dev")
	},
	plugins: [
		new htmlWebpack({
			title: "THE 80's ZONE",
			filename: "index.html",
			meta: {viewport: 'width=device-width, initial-scale=1'},
			hash: true
		})
	],
	module: {
		rules: [
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource'
			}
		]
	}
}
