const gulp = require('gulp');
const nodemon  = require('gulp-nodemon');

gulp.task('default', function () {
	var stream = nodemon({
		script: './bin/www',
		ext: 'html js',
		ignore: [
			'node_modules/',
			'files'
		]
	});
	stream
		.on('restart', function () {
			console.log('restarted!');
		})
		.on('crash', function () {
			console.error('Application has crashed!\n')
			stream.emit('restart', 10)  // restart the server in 10 seconds
		});
});
