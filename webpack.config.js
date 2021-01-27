const path = require('path');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = (env) => {
    console.log("NODE_ENV:", env.NODE_ENV);
    return {

 entry: './src/js/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  module: {
    rules: [
        {
            //Pour le JS
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
              },
            },
          },
          {
            // Pour le SASS :
            test: /\.(sa|sc|c)ss$/, 
            use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                },
              {
                loader: 'css-loader', 
              },
              {
                loader: 'postcss-loader',
              },
              {
                loader: 'sass-loader',
                options: {
                  implementation: require('sass'),
                },
              },
            ],
          },

          {
            test: /\.(png|jpe?g|gif|svg)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  outputPath: 'images',
                },
              },
            ],
          },
          {
            test: /\.(woff|woff2|ttf|otf|eot)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  outputPath: 'fonts',
                },
              },
            ],
          },

    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'bundle.css',
    }),
  ],
  
  watch: true,
    watchOptions: {
      ignored: 'node_modules/**',
    },

  mode: 'development',
}
};