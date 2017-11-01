// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.
const path = require('path')
module.exports = {
  plugins: [
    // your custom plugins
  ],
  resolve: {
    extensions: ['.css', '.js', '.jsx'],
    modules: [
      __dirname,
      path.resolve(__dirname, '..', 'src', 'components'),
      'node_modules',
      'bower_components'
    ],
    alias: {
      API: path.resolve(__dirname, '../src/api/'),
      actions: path.resolve(__dirname, '../src/actions'),
      reducers: path.resolve(__dirname, '../src/reducers'),
      store: path.resolve(__dirname, '../src/store')
    }
  },
  module: {
    rules: [
      // add your custom rules.
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader' // inject style tag in the head part of the document
        }, {
          loader: 'css-loader',
          options: {
            modules: true, // enable css modules
            sourceMap: true,
            localIdentName: '[name]__[local]___[hash:base64:5]' // generate meaningful unique class names
          }
        },
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: true,
            plugins: () => [
              require('postcss-flexbugs-fixes'),
              require('autoprefixer')({
                browsers: [
                  '>1%',
                  'last 4 versions',
                  'Firefox ESR',
                  'not ie < 9', // React doesn't support IE8 anyway
                ],
                flexbox: 'no-2009',
              })]
          }
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true
          }
        }
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?name=[hash]-[name].[ext]&limit=1024'
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader',
        query: {
          name: 'fonts/[name].[ext]',
          publicPath: `dist/`,
        }
      }
    ],
  },
};
