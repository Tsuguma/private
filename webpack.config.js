import webpack from 'webpack';
import config from './config';

export default {
  mode: config.develop ? 'development' : 'production',
  entry: {
    script: config.js.entry
  },
  output: {
    filename: '[name].js'
  },
  devtool: config.develop ? 'source-map' : false,
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env'
              ]
            }
          }
        ]
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          name: 'vendor',
          chunks: 'initial',
          enforce: true
        }
      }
    }
  },
  plugins: [
    new webpack.ProvidePlugin(config.js.vendor)
  ]
};
