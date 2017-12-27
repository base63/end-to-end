const path = require('path');
const webpack = require('webpack');


module.exports = {
    target: 'web',
    entry: {
        index: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'out'),
        filename: '[name].js'
    },
    module: {
        rules: [{
            test: /\.ts$/,
            include: [
                path.resolve(__dirname, 'src')
            ],
            loader: 'ts-loader',
            options: {
                configFile: 'tsconfig.json',
                silent: true
            }
        }]
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin()
    ],
    resolve: {
        extensions: ['.ts', '.js']
    }
};
