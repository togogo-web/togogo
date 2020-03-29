'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config/index')
const vueLoaderConfig = require('./vue-loader.conf')

function resolve(dir) {
	return path.join(__dirname, '..', dir)
}

module.exports = {
	context: path.resolve(__dirname, '../'),
	entry: Object.assign(utils.get('pluginEntry'), utils.get('entry')),
	output: {
		path: config.build.assetsRoot,
		filename: '[name].js',
		chunkFilename: 'chunk[id].js?[chunkhash]',
		publicPath: process.env.NODE_ENV === 'production'
			? config.build.assetsPublicPath
			: config.dev.assetsPublicPath
	},
	resolve: {
		extensions: ['.js', '.vue', '.json'],
		alias: Object.assign(
			{
				'vue$': 'vue/dist/vue.esm.js',
				'components': resolve('components'),
				'lang': resolve('lang'), // 语言包路径
				'tool': resolve('utils'), // 自定义工具函数库
				'static': path.resolve(__dirname, '../static') // 不参与打包文件路径
			},
			utils.get('alias')
		)
	},
	module: {
		rules: [
			// ...(config.dev.useEslint ? [{
			// 	test: /\.(js|vue)$/,
			// 	loader: 'eslint-loader',
			// 	enforce: 'pre',
			// 	include: [resolve('test')].concat(utils.get('eslintIncludes')),
			// 	options: {
			// 		formatter: require('eslint-friendly-formatter'),
			// 		emitWarning: !config.dev.showEslintErrorsInOverlay
			// 	}
			// }] : []),
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: vueLoaderConfig
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				include: [resolve('static'), resolve('lang'), resolve('test')].concat(utils.get('jsIncludes'))
			},
			{
				test: /\.sass$/,
				loaders: ['style', 'css', 'scss']
			},
			{
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: utils.assetsPath('img/[name].[hash:7].[ext]')
				}
			},
			{
				test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: utils.assetsPath('media/[name].[hash:7].[ext]')
				}
			},
			{
				test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
				}
			}
		]
	}
}
