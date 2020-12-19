import { series } from 'gulp';
import server from './tasks/server';
import lint from './tasks/lint';
import build from './tasks/build';
import del from './tasks/del';
import watch from './tasks/watch';
import config from './config';

export default series(
  lint,
  build,
  config.develop ? (done) => done() : del,
  server,
  watch
);
