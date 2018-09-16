const gulp = require('gulp');
const webpack = require('webpack');
const util = require('util');
const serve = require('webpack-serve');
const webpackConfig = require('./webpack.config');

gulp.task('serve', () => serve({}, {
  config: webpackConfig,
}));

gulp.task('build', () => util.promisify(webpack)(webpackConfig));

gulp.task('default', ['serve']);
