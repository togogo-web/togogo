'use strict'
const path = require('path')
const config = require('../config/index')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const pkg = require('../package.json')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const commonPlugins = require('../kfront-base.json').webpack.commonPlugins

function resolve (dir) {
	return path.join(__dirname, '..', dir)
}
function getCommonPlugins(subDirectory) {
	var pluginsArr = []
	for(var plugin in commonPlugins){
		if(commonPlugins[plugin].indexOf(subDirectory) > -1){
			pluginsArr.push(subDirectory + "/" + plugin)
		}
	}
	return pluginsArr
}
exports.assetsPath = function (_path) {

	return path.posix.join('',_path)

}

exports.cssLoaders = function (options) {
	options = options || {}

	const cssLoader = {
		loader: 'css-loader',
		options: {
			sourceMap: options.sourceMap
		}
	}

	var postcssLoader = {
		loader: 'postcss-loader',
		options: {
			sourceMap: options.sourceMap
		}
	}

	// generate loader string to be used with extract text plugin
	function generateLoaders (loader, loaderOptions) {
		const loaders = options.usePostCSS ? [cssLoader, postcssLoader] : [cssLoader]
		if (loader) {
			loaders.push({
				loader: loader + '-loader',
				options: Object.assign({}, loaderOptions, {
					sourceMap: options.sourceMap
				})
			})
		}

		// Extract CSS when that option is specified
		// (which is the case during production build)
		if (options.extract) {
			return ExtractTextPlugin.extract({
				use: loaders,
				fallback: 'vue-style-loader',
				publicPath: '../../'
			})
		} else {
			return ['vue-style-loader'].concat(loaders)
		}
	}

	// https://vue-loader.vuejs.org/en/configurations/extract-css.html
	return {
		css: generateLoaders(),
		postcss: generateLoaders(),
		less: generateLoaders('less'),
		sass: generateLoaders('sass', { indentedSyntax: true }),
		scss: generateLoaders('sass'),
		stylus: generateLoaders('stylus'),
		styl: generateLoaders('stylus')
	}
}

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function (options) {
	const output = []
	const loaders = exports.cssLoaders(options)
	for (const extension in loaders) {
		const loader = loaders[extension]
		output.push({
			test: new RegExp('\\.' + extension + '$'),
			use: loader
		})
	}
	return output
}

exports.createNotifierCallback = function () {
	const notifier = require('node-notifier')

	return (severity, errors) => {
		if (severity !== 'error') {
			return
		}
		const error = errors[0]

		const filename = error.file && error.file.split('!').pop()
		notifier.notify({
			title: pkg.name,
			message: severity + ': ' + error.name,
			subtitle: filename || '',
			icon: path.join(__dirname, 'logo.png')
		})
	}
}

exports.get = function (content) {
	switch (content){
		case 'entry':
			var entry = {}
			config.build.assetsSubDirectory.forEach(function (subDirectory) {
				entry[subDirectory] = ['babel-polyfill', subDirectory + '/main.js']
			})
			return entry;
		case 'alias':
			var alias = {}
			config.build.assetsSubDirectory.forEach(function (subDirectory) {
				alias[subDirectory] = resolve(subDirectory)
			})
			return alias;
		case 'eslintIncludes':
			var eslintIncludes = []
			config.build.assetsSubDirectory.forEach(function (subDirectory) {
				eslintIncludes.push(resolve(subDirectory))
			})
			return eslintIncludes;
		case 'jsIncludes':
			var jsIncludes = []
			config.build.assetsSubDirectory.forEach(function (subDirectory) {
				jsIncludes.push(resolve(subDirectory))
			})
			return jsIncludes;
		case 'copyAssets':
			var copyAssets = []
			config.build.assetsSubDirectory.forEach(function (subDirectory) {
				var pattern = {
					from: path.resolve(__dirname, '../'+ subDirectory + '/static'),
					to: subDirectory + '/static',
					ignore: ['.*']
				}
				copyAssets.push(pattern)
			})
			return copyAssets;
		case 'devHtmlPlugins':
			var devPlugins = []
			config.build.assetsSubDirectory.forEach(function (subDirectory) {
				var devPlugin = new HtmlWebpackPlugin({
					filename: (subDirectory === 'main'? 'index': subDirectory) + '.html',
					template: subDirectory + '/index.html',
					inject: true,
					chunks: [subDirectory].concat(getCommonPlugins(subDirectory))
				})
				devPlugins.push(devPlugin)
			})
			return devPlugins;
		case 'proHtmlPlugins':
			var proPlugins = []
			config.build.assetsSubDirectory.forEach(function (subDirectory) {
				var proPlugin = new HtmlWebpackPlugin({
					filename: (subDirectory === 'main'? 'index': subDirectory) + '.html',
					template: subDirectory + '/index.html',
					inject: true,
					chunks: ['manifest', 'vendor', subDirectory].concat(getCommonPlugins(subDirectory)),
					minify: {
						removeComments: true,
						collapseWhitespace: true,
						removeAttributeQuotes: true
						// more options:
						// https://github.com/kangax/html-minifier#options-quick-reference
					},
					// necessary to consistently work with multiple chunks via CommonsChunkPlugin
					chunksSortMode: 'dependency'
				})
				proPlugins.push(proPlugin)
			})
			return proPlugins;
		case 'proCommonPlugins':
			var proCommonPlugins = []
			config.build.assetsSubDirectory.forEach(function (subDirectory) {
				for(var plugin in commonPlugins){
					if(commonPlugins[plugin].indexOf(subDirectory) > -1){
						var proCommonPlugin = new webpack.optimize.CommonsChunkPlugin({
							name: subDirectory + "/" + plugin,
							chunks: [subDirectory + "/" + plugin, subDirectory],
							minChunks: 2
						})
						proCommonPlugins.push(proCommonPlugin)
					}
				}
			})
			return proCommonPlugins;
		case 'pluginEntry':
			var pluginEntry = {}
			for (var plugin in commonPlugins){
				commonPlugins[plugin].forEach(function (project) {
					pluginEntry[project + '/' + plugin] = [plugin]
				})
			}
			return pluginEntry
		default:
			return;
	}
}
