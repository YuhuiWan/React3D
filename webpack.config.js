const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    output: {
        publicPath:"./",
        filename: "bundle.js", //打包后的js文件名
        path: path.resolve(__dirname, "./dist")
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.gltf']
    },
    devServer: {
        static: './dist',
        open: true,
        port: 8000,
        client: { overlay: false },
    },
    watchOptions: {
        poll: true,
        ignored: /node_modules/
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Gallery-3D',
            filename: 'index.html',
            template: 'index.html',
        })
    ],
    module: {
        rules: [
            { test: /\.css/, use: ['style-loader', 'css-loader'] },
            { 
                test: /\.(woff|woff2|eot|ttf|otf|png|svg|jpg|jpeg|gif|glb|gltf)$/, 
                use: [
                    { 
                        loader: 'file-loader', 
                        options: { outputPath: 'assets/', esModule: false }
                    }
                ] 
            },
            { test: /\.js$/, exclude: /node_modules/, use: { loader: 'babel-loader' } },
        ],
    },
};
