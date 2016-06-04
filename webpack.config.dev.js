const path = require('path')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')

module.exports = {
	devtool: '#cheap-module-eval-source-map',
	entry: [
		'eventsource-polyfill', // necessary for hot reloading with IE
		'webpack-hot-middleware/client',
		'./src/main',
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/static/',
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
	],
	module: {
		loaders: [{
			test: /\.js?/,
			loader: 'babel-loader',
			query: {
				presets: ['es2015', 'react', 'react-hmre'],
				plugins: ['transform-proto-to-assign', 'typecheck', 'syntax-flow', 'transform-flow-strip-types', 'transform-object-rest-spread'],
			},
			include: path.join(__dirname, 'src'),
		},
		{ test: /\.json$/, loader: 'json' },
		{ test: /\.scss$/, loaders: ['style', 'css', 'postcss', 'sass?sourceMap'] },
		{ test: /\.css$/, loaders: ['style', 'css', 'postcss'] },
	],
	},
	postcss: [autoprefixer({ browsers: ['last 2 versions'] })],
}
