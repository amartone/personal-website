// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
var stylus = require('gulp-stylus');
var pugify = require('gulp-pug');
var minify = require('gulp-clean-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var order = require("gulp-order");
// Might be deprecated in favor of:
// https://github.com/gulpjs/gulp/blob/master/docs/recipes/delete-files-folder.md
var clean = require('gulp-clean');
var serve = require('gulp-serve');
var sequence = require('run-sequence');

// Clean Task
gulp.task('clean', function() {
		return gulp.src('dist/', {read: false})
				.pipe(clean());
});

// Tell jshint about global variables, such as 'app'
gulp.task('lint', function() {
		return gulp.src(['app/app.js', 'app/config.js', 'app/controllers/*.js', 'app/factories/*.js'])
				.pipe(jshint({ predef: [ 'app' ] }))
				.pipe(jshint.reporter('default'));
});

// Bootstrap CSS
// gulp.task('bootstrap-styles', function() {
//     return gulp.src(['app/styles/bootstrap/index.styl'])
//         .pipe(stylus())
//         .pipe(concat('bootstrap.min.css'))
//         .pipe(minify())
//         .pipe(gulp.dest('dist/styles/'));
// })

//Added for future migration to Bootstrap v4
// Bootstrap CSS
gulp.task('bootstrap-styles', function() {
		return gulp.src(['node_modules/bootstrap/dist/css/bootstrap.min.css'])
				.pipe(minify())
				.pipe(gulp.dest('dist/styles/'));
});

// Compile To CSS
gulp.task('stylus', function () {
		return gulp.src(['app/styles/*.styl', 'app/styles/*.css'])
				.pipe(stylus())
				.pipe(concat('all.min.css'))
				.pipe(minify())
				.pipe(gulp.dest('dist/styles/'));
});

// Bootstrap JS
// gulp.task('bootstrap-scripts', function() {
//     return gulp.src(['app/scripts/bootstrap/*.js'])
//         .pipe(order([
//             "transition.js",
//             "alert.js",
//             "button.js",
//             "carousel.js",
//             "collapse.js",
//             "carousel.js",
//             "dropdown.js",
//             "modal.js",
//             "tooltip.js",
//             "popover.js",
//             "scrollspy.js",
//             "tab.js",
//             "affix.js"
//         ]))
//         .pipe(concat('bootstrap.min.js'))
//         .pipe(uglify())
//         .pipe(gulp.dest('dist/scripts/'));
// });


//Added for future migration to Bootstrap v4
gulp.task('bootstrap-scripts', function() {
		return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js'])
				.pipe(uglify())
				.pipe(gulp.dest('dist/scripts/'));
});


// Concatenate & Minify JS
gulp.task('scripts', function() {
		return gulp.src('app/scripts/*.js')
				.pipe(concat('all.min.js'))
				.pipe(uglify())
				.pipe(gulp.dest('dist/scripts/'));
});

// Compile To HTML
gulp.task('pug', function build() {
		return gulp.src('app/views/**/*.pug')
				.pipe(pugify())
				.pipe(gulp.dest('dist/views/'));
});

// Copy Index and de-Pug
gulp.task('pug-index', function() {
		return gulp.src('app/index.pug')
				.pipe(pugify())
				.pipe(gulp.dest('dist/'));
});

// Copy Index and de-Pug
gulp.task('pug-directives', function() {
		return gulp.src('app/directives/**/*.pug')
				.pipe(pugify())
				.pipe(gulp.dest('dist/directives/'));
});

// Copy favicon.png
gulp.task('copy-favicon', function() {
		return gulp.src(['app/favicon.png'])
				.pipe(gulp.dest('dist/'));
});

// Copy app.js and config.js
gulp.task('copy-main', function() {
		return gulp.src(['app/*.js'])
				.pipe(gulp.dest('dist/'));
});

// Copy all controllers
gulp.task('copy-controllers', function() {
		return gulp.src('app/controllers/*.js')
				.pipe(concat('all.js'))
				.pipe(gulp.dest('dist/controllers/'));
});

// Copy all directives
gulp.task('copy-directives', function() {
		return gulp.src('app/directives/**/*.js')
				.pipe(concat('all.js'))
				.pipe(gulp.dest('dist/directives/'));
});

// Copy all fonts
gulp.task('copy-fonts', function() {
		return gulp.src('app/fonts/**')
				.pipe(gulp.dest('dist/fonts/'));
});

// Copy all images
gulp.task('copy-images', function() {
		return gulp.src('app/images/**')
				.pipe(gulp.dest('dist/images/'));
});

// Watch Files For Changes
gulp.task('watch', function() {
		gulp.watch(['app/scripts/*.js'], ['lint', 'scripts']);
		gulp.watch(['app/styles/*.styl', 'app/styles/*.css'], ['stylus']);
		gulp.watch(['app/views/*/*.pug'], ['pug']);
		gulp.watch(['app/index.pug'], ['pug-index']);
		gulp.watch(['app/*.js'], ['copy-main']);
		gulp.watch(['app/factories/*.js'], ['copy-factories']);
		gulp.watch(['app/controllers/*.js'], ['copy-controllers']);
		gulp.watch(['app/directives/*/*'], ['pug-directives', 'copy-directives']);
		gulp.watch(['app/fonts/**'], ['copy-fonts']);
});

// Start development localhost server
gulp.task('serve', serve('dist'));


// Default Task
gulp.task('default', sequence(['clean'], ['lint', 'scripts', 'bootstrap-styles', 'bootstrap-scripts', 'stylus', 'pug', 'pug-index', 'pug-directives', 'copy-favicon', 'copy-main', 'copy-controllers', 'copy-directives', 'copy-fonts', 'copy-images'], ['watch'], ['serve']));
