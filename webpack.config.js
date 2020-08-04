const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: "production",
  entry:  "./src/index.js",
  output: {
    
    path: path.resolve(__dirname, "dist"),
    filename: "out.js",
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader",
        "css-loader",
        "sass-loader"]
      },

      {
        test: /\.html$/i,
        loader: "html-loader"
      },

      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },

      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          //options: {
            //presets: ['@babel/preset-env']
          //}
        }
      }


    ]

    
  },

  plugins: [
    
    new HtmlWebpackPlugin({
      title: "My custom title",
      //template: "./src/index.html",
      filename: "index.html",
    })
    
  ]

  
};