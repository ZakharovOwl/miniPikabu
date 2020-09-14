const HTMLWebpackPlugin = require('html-webpack-plugin')


const plugins = () => {
    const base = [
      new HTMLWebpackPlugin({
        filename: 'index.html',
        template: './src/index.html'
    })
    ]
    return base
  }

module.exports = {
    mode: 'development',
    entry: ['@babel/polyfill','./src/index.js'],
    output: {
        path: __dirname +'/dist',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: __dirname + '/dist'
    },
    plugins: plugins(),
    resolve: {
        extensions: ['.js', '.json', '.png'],
      },
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ['@babel/preset-env']
            }
          }
      }
     ]
  }  
}