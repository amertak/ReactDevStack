var path = require('path')
var webpack = require('webpack')
var autoprefixer = require('autoprefixer');

var nodeModulesDir = path.resolve(__dirname, 'node_modules')

var plugins = [
	new webpack.optimize.OccurenceOrderPlugin(),
	new webpack.optimize.UglifyJsPlugin(),
	new webpack.optimize.DedupePlugin(),
	new webpack.NoErrorsPlugin(),
	new webpack.DefinePlugin({
		'process.env': {
			NODE_ENV: JSON.stringify('production'),
		},
	}),
]

var devTool = ''
var babelPlugins = ['transform-proto-to-assign', 'transform-object-rest-spread']

var config = {
	cache: true,
	entry: {
		app: './src/main.js',
	},
	devtool: devTool,
	plugins,
	output: { path: __dirname + '/dist', filename: 'bundle.js' },
	module: {
		noParse: [],
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				include: /src/,
				exclude: [nodeModulesDir],
				query: {
					presets: ['es2015', 'react'],
					plugins: babelPlugins,
				},
			},
			{ test: /\.json$/, loader: 'json' },
			{ test: /\.scss$/, loaders: ['style', 'css', 'postcss', 'sass?sourceMap'] },
			{ test: /\.css$/, loaders: ['style', 'css', 'postcss'] },
		],
	},
	postcss: [autoprefixer({ browsers: ['last 2 versions'] })],
}

module.exports = config
