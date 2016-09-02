/**
 * Created by andrew on 8/18/16.
 */
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const PurifyCSSPlugin = require('purifycss-webpack-plugin');

exports.devServer = function(options) {
  return {
    entry: {
      'webpack-dev-server': 'webpack-dev-server/client?http://localhost:8080',
      hmr: 'webpack/hot/only-dev-server'
    },
    devServer: {
      contentBase: './build',
      hot: true,
      historyApiFallback: true,
      inline: true,
      stats: 'errors-only',
      host: options.host, // Defaults to `localhost`
      port: options.port, // Defaults to 8080
      proxy: {
        '/api*' : {
          target: 'http://localhost:8080'
        }
        // '/user*' : {
        //   target: 'http://localhost:8080'
        // },
        // '/login' : {
        //   target: 'http://localhost:8080'
        // },
        // '/customers*' : {
        //   target: 'http://localhost:8080'
        // },
        // '/accounts*' : {
        //   target: 'http://localhost:8080'
        // },
        // '/transfers*' : {
        //   target: 'http://localhost:8080'
        // }
      }
    },
    watchOptions: {
      // Delay the rebuild after the first change
      aggregateTimeout: 300,
      // Poll using interval (in ms, accepts boolean too)
      poll: 1000
    },
    plugins: [
      // Enable multi-pass compilation for enhanced performance
      // in larger projects. Good default.
      new webpack.HotModuleReplacementPlugin({
        multiStep: true
      })
    ]

  };
};

exports.setupCSS = function(paths) {
  return {
    module: {
      loaders: [
        {
          test: /\.css$/,
          loaders: ['style', 'css'],
          include: paths
        }
      ]
    }
  };
};

exports.setupLess = function(paths) {
  return {
    module: {
      loaders: [
        {
          test: /\.(le)|(c)ss$/,
          loaders: ['style', 'css', 'less'],
          include: paths
        }
      ]
    }
  };
};

exports.useJSON = function() {
  return {
    module: {
      loaders: [
        {
          test: /\.json$/,
          loaders: ['json']
        }
      ]
    }
  };
};

exports.minify = function() {
  return {
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
    ]
  };
};

exports.extractBundle = function(options) {
  const entry = {};
  entry[options.name] = options.entries;

  return {
    // Define an entry point needed for splitting.
    entry: entry,
    plugins: [
      // Extract bundle and manifest files. Manifest is
      // needed for reliable caching.
      new webpack.optimize.CommonsChunkPlugin({
        names: [options.name, 'manifest']
      })
    ]
  };
};

exports.clean = function(path) {
  return {
    plugins: [
      new CleanWebpackPlugin([path], {
        // Without `root` CleanWebpackPlugin won't point to our
        // project and will fail to work.
        root: process.cwd()
      })
    ]
  };
};


exports.extractCSS = function(paths) {
  return {
    module: {
      loaders: [
        // Extract CSS during build
        {
          test: /\.css$/,
          // loaders: ['style', 'css'],
          loader: ExtractTextPlugin.extract('style', 'css'),
          include: paths
        }
      ]
    },
    plugins: [
      // Output extracted CSS to a file
      new ExtractTextPlugin('[name].[chunkhash].css')
    ]
  };
};

exports.extractLESS = function(paths) {
  return {
    module: {
      loaders: [
        // Extract CSS during build
        {
          test: /\.(le)|(c)ss$/,
          // loaders: ['style', 'css', 'less'],
          loader: ExtractTextPlugin.extract(
            "style-loader",
            'css?sourceMap!' +
            'less?sourceMap'
          ),
          include: paths
        }
      ]
    },
    plugins: [
      // Output extracted CSS to a file
      new ExtractTextPlugin('[name].[chunkhash].css')
    ]
  };
};

exports.purifyCSS = function(paths) {
  return {
    plugins: [
      new PurifyCSSPlugin({
        basePath: process.cwd(),
        // `paths` is used to point PurifyCSS to files not
        // visible to Webpack. You can pass glob patterns
        // to it.
        paths: paths,
        purifyOptions: {
          // minify: false,
          // info: true,
          // output: './output.css'
        }
      })
    ]
  }
};

exports.useJQuery = function() {
  return {
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
      })
    ]
  };

};