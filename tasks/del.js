import del from 'del';
import config from '../config';

export default (done) => {
  del(config.del.list);
  done();
};
