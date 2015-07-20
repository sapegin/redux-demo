'use strict';

var path = require('path');
var webpack = require('webpack');
var nodePath = path.join(__dirname, 'node_modules');

var isDevelopment = process.env.NODE_ENV !== 'production';

var plugins = [
	new webpack.ProvidePlugin({
		React: 'react'
	}),
	new webpack.DefinePlugin({
		DEBUG: isDevelopment
	})
];
var entry = [
	'./app/index.js'
];
var loaders = [
	'babel?cacheDirectory'
];


if (isDevelopment) {
	entry.unshift(
		'webpack-dev-server/client?http://localhost:3030',
		'webpack/hot/only-dev-server'
	);
	plugins.push(
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	);
	loaders.unshift('react-hot');
}
else {
	plugins.push(
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			},
			output: {
				comments: false
			}
		}),
		new webpack.optimize.DedupePlugin()
	);
}

module.exports = {
	debug: isDevelopment,
	cache: isDevelopment,
	devtool: isDevelopment ? 'cheap-module-source-map' : false,
	watch: isDevelopment,
	entry: entry,
	stats: {
		colors: true,
		reasons: isDevelopment
	},
	resolveLoader: {
		root: [nodePath]
	},
	plugins: plugins,
	output: {
		path: path.join(__dirname, 'build'),
		filename: 'bundle.js',
		publicPath: '/build/'
	},
	module: {
		noParse: [
			/\.min\.js/
		],
		preLoaders: [
			{
				test: /\.js$/,
				exclude: [nodePath],
				loader: 'eslint-loader'
			}
		],
		loaders: [
			{
				test: /\.js$/,
				exclude: [nodePath],
				loaders: loaders
			}
		]
	}
};
