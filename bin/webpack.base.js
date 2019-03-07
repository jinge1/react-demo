/**
 * webpack base config
 */

const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('webpack-copy-plugin')

const {
  projectPath,
  commPath,
  configPath
} = require('./getProjectInfo')

module.exports = {
  mode: 'development',
  entry: {
    polyfills: ['isomorphic-fetch', 'react', 'react-dom', 'react-router', 'react-router-dom'],
    hot: 'react-hot-loader/patch',
    main: `${projectPath}/index.js`
  },
  resolve: {
    extensions: ['.js', '.css', '.scss'],
    alias: {
      comm: commPath,
      config: configPath
    }
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      use: ['babel-loader']
    }, {
      test: /\.(css|postcss)$/,
      use: ['style-loader', 'css-loader', 'postcss-loader']
    }, {
      test: /\.(scss|sass)$/,
      use: ['style-loader', 'css-loader', 'sass-loader']
    }, {
      test: /\.(less)$/,
      use: ['style-loader', 'css-loader', 'less-loader']
    }, {
      // 图片文件处理
      test: /\.(png|jpg|jpeg|gif|svg|svgz)(\?.+)?$/,
      use: [{
        loader: 'url-loader',
        options: {
          // 8kb以内采用base64处理
          limit: 8000,
          name: 'assets/[name].[hash:8].[ext]'
        }
      }]
    }, {
      // 字体文件处理
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 8000,
          name: 'fonts/[name].[hash:8].[ext]'
        }
      }]
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${projectPath}/index.html`
    }),

    // 拷贝static目录文件 dirs?
    new CopyWebpackPlugin({
      dirs: [{
        from: `${projectPath}/static`,
        to: 'static',
        toType: 'dir'
      }]
    })

  ]
}
