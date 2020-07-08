const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    devtool: 'inline-source-map',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
              test: /\.css$/i,
              use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(ttf|eot|woff|svg|woff2)$/,
                use: {
                  loader: "file-loader",
                  options: {
                    name: './src/fonts/[name].[ext]'
                  }
                }
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                  'url-loader?limit=10000',
                  'img-loader'
                ]
              }
        ]
    },
    
    plugins: [
        new CopyPlugin({
          patterns: [
            { from: './*html', to: '../../dist' },
          ],
        }),
        new ExtractTextPlugin('style.css'),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            "window.jQuery": "jquery"
          }),
    ]
};
