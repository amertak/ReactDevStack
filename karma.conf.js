module.exports = function(config) {
	config.set({
		browsers: ['PhantomJS'],
		files: [
			{ pattern: 'test-context.js', watched: false },
		],
		frameworks: ['jasmine'],
		preprocessors: {
			'test-context.js': ['webpack'],
		},
		webpack: {
			module: {
				loaders: [
					{ test: /\.js?$/, exclude: /node_modules/, loader: 'babel-loader', query: { presets: ['es2015', 'react'] } },
					{ test: /\.json$/, loader: 'json' },
				],
			},
			watch: true,
		},
		webpackServer: {
			noInfo: true,
		},
		// browsers: ['Chrome'],
		reporters: ['progress', 'html'],

		htmlReporter: {
			outputDir: 'karma_html', // where to put the reports
			templatePath: null, // set if you moved jasmine_template.html
			focusOnFailures: true, // reports show failures on start
			namedFiles: false, // name files instead of creating sub-directories
			pageTitle: null, // page title for reports; browser info by default
			urlFriendlyName: false, // simply replaces spaces with _ for files/dirs
			reportName: 'report', // report summary filename; browser info by default
		},
	})
}
