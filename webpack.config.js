const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    loaders: [
        { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader" },
        {
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }]
        }, //css only files
        { test: /\.(png|svg|jpg|gif)$/, use: ['file-loader'] }, //for images
        { test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/, use: ['url-loader'] }, //for fonts
        { test: /\.json$/, loader: 'json-loader' }
    ]
  },
  resolve: {
    extensions: ['*', '.webpack.js', '.web.js', '.js', '.jsx']
  },
  devtool: "source-map",
  devServer: {
    contentBase: './public',
    disableHostCheck: true,
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      Popper: ['popper.js', 'default'],
      // In case you imported plugins individually, you must also require them here:
      Util: "exports-loader?Util!bootstrap/js/dist/util",
      Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown",
    }),
    new Dotenv()
  ],
  node: {
    fs: "empty"
  }
  
};