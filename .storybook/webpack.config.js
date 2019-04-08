const path = require('path');
const webpack = require('webpack');

module.exports = ({ config, mode }) => {
  config.module.rules.push(
    {
      test: /\.(gif|jpe?g|png|svg)$/,
      use: {
        loader: 'url-loader',
        options: { name: '[name].[ext]' },
      },
    },
    {
      test: /\.(js|jsx|mjs)$/,
      use: {
        loader: 'babel-loader',
      },
    },
    {
      test: /\.ttf$/,
      loader: 'url-loader', // or directly file-loader
      include: path.resolve(
        __dirname,
        '..',
        'node_modules/react-native-vector-icons',
      ),
    },
  );

  config.resolve.extensions = ['.web.js', '.js', '.json', '.web.jsx', '.jsx'];

  config.resolve.alias = {
    'react-native': 'react-native-web',
  };

  return config;
};
