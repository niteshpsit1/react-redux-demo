var path = require('path');

module.exports = {
    entry: path.resolve('client/main.js'),
    output: {
        path: './public',
        filename: 'bundle.js'
    },
    module:{
         loaders: [{
             test: /\.js$/,
             exclude: /node_modules/,
             loader: 'babel',
        }]
    }
}