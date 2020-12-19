const srcPath = './src';
const publicPath = './public_html';

export default {
  develop: false,
  directory: {
    src: './src',
    public: './public_html'
  },
  css: {
    src: `${srcPath}/assets/css/**/*.scss`,
    dest: `${publicPath}/assets/css`,
    browsers: ['last 4 versions', 'ie 9', 'ie 10', 'android 4'],
    vendor: [
      './node_modules/reset-css/reset.css',
      './node_modules/slick-carousel/slick/slick.css'
    ],
    lint: true,
    lintConfig: '.sass-lint.yml'
  },
  js: {
    src: `${srcPath}/assets/js/**/*.js`,
    dest: `${publicPath}/assets/js`,
    entry: `${srcPath}/assets/js/script.js`,
    vendor: {
      $: 'jquery',
      jquery: 'jquery',
      jQuery: 'jquery'
    },
    lint: true,
    lintConfig: '.eslintrc'
  },
  del: {
    list: ['**/*.map']
  }
};
