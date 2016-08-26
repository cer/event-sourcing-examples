'use strict';

const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const validate = require('webpack-validator');

const CopyWebpackPlugin = require('copy-webpack-plugin');

const pkg = require('./package.json');

const parts = require('./config/webpackConfigParts');

const ENTRIES = Object.keys(pkg.dependencies);
const CSS_ENTIRES = ['bootstrap-horizon'];

const JS_ENTRIES = ENTRIES.filter(p => CSS_ENTIRES.indexOf(p) < 0);

const PATHS = {
  app: path.join(__dirname, 'src'),
  appEntry: path.join(__dirname, 'src', 'index.js'),
  style: [
    path.join(__dirname, 'node_modules', 'bootstrap-horizon'),
    path.join(__dirname, 'node_modules', 'rc-slider/assets'),
    path.join(__dirname, 'src', 'style.css')
  ],
  styleLess: [
    path.join(__dirname, 'node_modules', 'bootstrap-horizon'),
    path.join(__dirname, 'node_modules/rc-slider/assets/index.css'),
    path.join(__dirname, 'src', 'style.less')
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
      //template: 'node_modules/html-webpack-template/index.ejs',

      // Optional
      title: 'ES IOT Lighting',
      description: 'ES IOT Lighting App',
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
          devtool: 'eval-source-map'
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

// module.exports = validate(config);




//import ExtractTextPlugin from "extract-text-webpack-plugin";


export default (DEBUG, PATH, PORT=3000) => ({
  entry: (DEBUG ? [
    `webpack-dev-server/client?http://localhost:${PORT}`,
  ] : []).concat([
    './src/main.less',
    'babel-polyfill',
    './src/client'
  ]),

  output: {
    path: path.resolve(__dirname, PATH, "generated"),
    filename: DEBUG ? "main.js" : "main-[hash].js",
    publicPath: "/generated/"
  },

  cache: DEBUG,
  debug: DEBUG,

  // For options, see http://webpack.github.io/docs/configuration.html#devtool
  //devtool: DEBUG && "eval",
  devtool: DEBUG && "cheap-module-eval-source-map",

  module: {
    loaders: [
      // Load ES6/JSX
      { test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, "src")
          //,
          //path.resolve(__dirname, "node_modules/redux-auth/src/views/bootstrap")
        ],
        loader: "babel-loader",
        query: {
          plugins: ['transform-runtime'],
          presets: ['es2015', 'react', 'stage-0']
        }
      },

      //json
      {
        test: /\.json$/,
        loader: 'json-loader'
      },

      // Load styles
      { test: /\.less$/,
        loader: DEBUG
          ? "style!css!autoprefixer!less"
          : ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader!less-loader")
      },

      // Load images
      { test: /\.jpg/, loader: "url-loader?limit=10000&mimetype=image/jpg" },
      { test: /\.gif/, loader: "url-loader?limit=10000&mimetype=image/gif" },
      { test: /\.png/, loader: "url-loader?limit=10000&mimetype=image/png" },
      { test: /\.svg/, loader: "url-loader?limit=10000&mimetype=image/svg" },

      // Load fonts
      { test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
    ]
  },

  plugins: DEBUG
    ? [
    //new
  ]
    : [
      new webpack.DefinePlugin({'process.env.NODE_ENV': '"production"'}),
      new ExtractTextPlugin("style.css", {allChunks: false}),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compressor: {screw_ie8: true, keep_fnames: true, warnings: false},
        mangle: {screw_ie8: true, keep_fnames: true}
      }),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.AggressiveMergingPlugin()
    ],

  resolveLoader: {
    root: path.join(__dirname, "node_modules")
  },

  resolve: {
    root: path.join(__dirname, "node_modules"),

    modulesDirectories: ['node_modules'],

    alias: {
      environment: DEBUG
        ? path.resolve(__dirname, 'config', 'environments', 'development.js')
        : path.resolve(__dirname, 'config', 'environments', 'production.js')
    },

    // Allow to omit extensions when requiring these files
    extensions: ["", ".js", ".jsx"]
  }
});
