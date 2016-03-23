/**
 * Created by xialei on 2016/3/23 0023.
 */
module.exports = {
	entry: './entry.jsx',
	output: {
		publicPath: 'http://localhost:8000/assets',
		filename: 'bundle.js',
		path: './assets'
	},
	module: {
		loaders: [
			{test: /\.js$/, loader: 'babel'},
			{
				test: /.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'react']
				}
			},
			{test: /\.css$/, loader: 'style!css'},
			{test: /\.scss$/, loader: 'style!css!sass'}
		]
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	}
};