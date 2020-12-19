import ssi from 'gulp-connect-ssi';
import browserSync from 'browser-sync';
import config from '../config';

export default (done) => {
  browserSync({
    notify: false,
    ghostMode: false,
    server: {
      baseDir: config.directory.public,
      middleware: [
        ssi({
          baseDir: config.directory.public,
          ext: '.html'
        })
      ]
    }
  });
  done();
};
