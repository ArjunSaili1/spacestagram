const path = require('path');

module.exports = {
  entry: './src/code/index.js',
  mode: "development",
  output: {
   filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      { test: /\.svg$/, 
        loader: 'svg-inline-loader',
      },
    ],
  },
};
