module.exports = {
  entry: './app/index.js',
  output: {
    path: './build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel'
    }, {
      test: /\.scss$/,
      loader: 'style!css?modules!autoprefixer-loader!sass'
    }, {
      test: /\.(png|jpg|gif)$/,
      loader: 'url-loader?size=8192'
    }]
  }
};