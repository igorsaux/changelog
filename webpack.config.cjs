const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')

const resolve = (p) => path.resolve(__dirname, p)

module.exports = (env, argv) => {
  const isDev = argv.mode === 'development'
  const outputFolder = resolve('dist')

  const getPlugins = () => {
    const plugins = [
      new HtmlWebpackPlugin({
        template: resolve('public/index.html')
      }),
      new CleanWebpackPlugin(),
      new CopyPlugin({
        patterns: [
          resolve('public/favicon.ico'),
          resolve('public/robots.txt')
        ]
      }),
      new webpack.ProvidePlugin({ process: 'process/browser' })
    ]

    if (!isDev) {
      plugins.push(new MiniCssExtractPlugin())
    }

    return plugins
  }

  return {
    entry: {
      main: resolve('src/index.tsx')
    },
    context: resolve('src'),
    mode: isDev ? 'development' : 'production',
    output: {
      filename: '[name].[contenthash].js',
      path: resolve('dist')
    },
    plugins: getPlugins(),
    devtool: isDev ? 'source-map' : false,
    devServer: {
      static: {
        directory: outputFolder
      },
      port: 8080,
      compress: false
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.jsx'],
      fallback: {
        assert: require.resolve('assert/')
      }
    },
    optimization: {
      splitChunks: {
        chunks: 'all'
      },
      usedExports: true,
      minimize: !isDev
    },
    module: {
      rules: [
        {
          test: /\.tsx$/,
          exclude: /node_modules/,
          use: [
            'ts-loader'
          ]
        },
        {
          test: /\.ts$/,
          exclude: /node_modules/,
          use: [
            'ts-loader'
          ]
        },
        {
          test: /\.s?css$/,
          use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader',
            'postcss-loader'
          ]
        }
      ]
    }
  }
}
