'use strict';

const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const validate = require('webpack-validator');

const CopyWebpackPlugin = require('copy-webpack-plugin');

const pkg = require('./package.json');

const parts = require('./config/webpackConfigParts');

const ExtractTextPlugin = require("extract-text-webpack-plugin");


const ENTRIES = Object.keys(pkg.dependencies);
const CSS_ENTIRES = [
  //'bootstrap-horizon'
];

const JS_ENTRIES = ENTRIES.filter(p => CSS_ENTIRES.indexOf(p) < 0);

const PATHS = {
  app: path.join(__dirname, 'src'),
  appEntry: path.join(__dirname, 'src', 'client.js'),
  style: [
    // path.join(__dirname, 'node_modules', 'bootstrap-horizon'),
    // path.join(__dirname, 'node_modules', 'rc-slider/assets'),
    path.join(__dirname, 'node_modules/react-select/dist/react-select.css'),
    path.join(__dirname, 'src', 'main.css')
  ],
  styleLess: [
    // path.join(__dirname, 'node_modules', 'bootstrap-horizon'),
    // path.join(__dirname, 'node_modules/rc-slider/assets/index.css'),
    path.join(__dirname, 'node_modules/react-select/dist/react-select.css'),
    path.join(__dirname, 'src', 'main.less')
  ],
  build: path.join(__dirname, 'build')
};

const common = {
  entry: {
    app: PATHS.appEntry,
    // ,
    style: PATHS.styleLess
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'react-hot!babel'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      'bootstrap': path.join(__dirname, 'node_modules/bootstrap/dist/js/bootstrap.js')
    }
  },
  node: {
    net: 'empty',
    tls: 'empty',
    dns: 'empty'
  },
  output: {
    path: PATHS.build,
    publicPath: '/',
    filename: '[name].js',
    // Modify the name of the generated sourcemap file.
    // You can use [file], [id], and [hash] replacements here.
    // The default option is enough for most use cases.
    sourceMapFilename: '[file].map', // Default

    // This is the sourcemap filename template. It's default format
    // depends on the devtool option used. You don't need to modify this
    // often.
    devtoolModuleFilenameTemplate: 'webpack:///[resource-path]?[loaders]'
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'public/**', to: PATHS.build, flatten: true }
    ], {
      ignore: [
        '*.ejs'
      ]
    }),
    new HtmlWebpackPlugin({
      // Required
      inject: false,
      template: './public/index.ejs',

      // Optional
      title: 'Money Transfer App',
      description: 'ES Money Transfer App',
      appMountId: 'root',
      // baseHref: 'http://example.com/awesome',
      // devServer: 3001,
      googleAnalytics: {
        trackingId: 'UA-XXXX-XX',
        pageViewOnLoad: true
      },
      mobile: true
      // window: {
      //   env: {
      //     apiHost: 'http://myapi.com/api/v1'
      //   }
      // }
    })
  ]
};

console.log('process.env.npm_lifecycle_event', process.env.npm_lifecycle_event);


const config = (() => {
  switch(process.env.npm_lifecycle_event) {
    case 'build':
    case 'watch':
      return merge(
        common,
        {
          devtool: 'source-map',
          output: {
            path: PATHS.build,
            filename: '[name].[chunkhash].js',
            // This is used for require.ensure. The setup
            // will work without but this is useful to set.
            chunkFilename: '[chunkhash].js'
          }
        },
        parts.clean(path.join(PATHS.build, '*')),
        // parts.setupCSS(PATHS.style),
        parts.useJSON(),
        parts.useJQuery(),
        parts.extractBundle({
          name: 'vendor',
          entries: JS_ENTRIES
        }),
        // parts.minify(),
        // parts.extractCSS(PATHS.style),
        parts.extractLESS(PATHS.styleLess),
        parts.purifyCSS([PATHS.app])
      );
    default:
      return merge(
        common,
        {
          devtool: 'source-map'
        },
        parts.useJSON(),
        parts.useJQuery(),
        parts.extractBundle({
          name: 'vendor',
          entries: JS_ENTRIES
        }),
        // parts.setupCSS(PATHS.style),
        parts.setupLess(PATHS.styleLess),
        parts.devServer({
          // Customize host/port here if needed
          host: process.env.HOST,
          port: process.env.PORT
        })

      );
  }

})();

module.exports = validate(config);
