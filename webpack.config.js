const CleanWebpackPlugin = require('clean-webpack-plugin');
const Path = require('path');

module.exports = {
    mode: 'development',
    context: Path.join(__dirname, './src'),
    entry: {
        index: [
            './index.js',
        ]
    },
    output: {
        filename: `[name].js`,
        path: Path.resolve(__dirname, 'lib'),
    },
    module: {
        rules: [
            {
                test: /\.(js|ts)$/, exclude: /node_modules/, loader: "babel-loader"
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin([
            './public/assets/build/*',
        ]),
    ],
};
