import { dest } from 'gulp';
import webpackStream from 'webpack-stream';
import webpack from 'webpack';
import webpackConfig from '../webpack.config';
import config from '../config';

export default () => webpackStream(webpackConfig, webpack)
  .pipe(dest(config.js.dest));
