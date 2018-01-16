const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const resolve = dir => path.join(__dirname, dir)

const extractSass = new ExtractTextPlugin('../css/app.css')

module.exports =  [{
	entry: {
		app: ['babel-polyfill', './src/public/js/app.js'],
	},
	output: {
		path: resolve('build/public/js'),
		filename: '[name].js',
	},
	resolve: {
		extensions: ['.js', '.css', '.sass', '.scss'],
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			}, {
				test: /\.json$/,
				loader: 'data-loader'
			}, {
				test: /\.css$/,
				exclude: /node_modules/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',

					// Could also be write as follow:
					// use: 'css-loader?modules&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'
					use: [
						{
							loader: 'css-loader',
							query: {
								modules: true,
								localIdentName: '[name]__[local]___[hash:base64:5]'
							}
						},
						'postcss-loader'
					]
				}),
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',

					// Could also be write as follow:
					// use: 'css-loader?modules&importLoader=2&sourceMap&localIdentName=[name]__[local]___[hash:base64:5]!sass-loader'
					use: [
						{
							loader: 'css-loader',
							query: {
								modules: true,
								sourceMap: true,
								importLoaders: 2,
								localIdentName: '[name]__[local]___[hash:base64:5]'
							}
						},
						'sass-loader'
					]
				}),
			},
		]
	},
	plugins: [
		extractSass,
	],
	bail: false,
}]

