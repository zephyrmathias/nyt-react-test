var path = require('path');
const Dotenv = require('dotenv-webpack');
var HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: [
    '@babel/polyfill',
    './src/index.js'
  ],
  output: {
    path: path.resolve( __dirname, 'dist' ),
    filename: 'main.js',
  },
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.s[ac]ss$/i,
        use:[
          'style-loader', 
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(jpg|png|svg)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: "[name].[ext]",
            outputPath: "img/",
          }
        }]
      },
    ]
  },
  plugins : [
    new Dotenv(),
    new HtmlWebpackPlugin ({
        template : 'public/index.html'
    })
  ]
};