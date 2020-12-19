import browserSync from 'browser-sync';

export default (done) => {
  browserSync.reload();
  done();
};
