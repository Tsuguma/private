import { parallel } from 'gulp';
import buildCss from './build-css';
import buildCssVendor from './build-css-vendor';
import buildJs from './build-js';

export default parallel(
  buildCss,
  buildCssVendor,
  buildJs
);
