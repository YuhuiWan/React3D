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
        extensions: ['.tsx', '.ts', '.js', '.gltf', '.glb', 'bin']
    },
    mode: 'development',
    devtool: 'source-map',
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
        }),
        new CopyWebpackPlugin({ 
            patterns: [
                {
                    from: `./src/assets/models/gallery_showroom/textures`,
                    to: `./assets/gallery_showroom/textures`
                },
                {
                    from: `./src/assets/models/gallery_showroom/*.bin`,
                    to: `./assets/gallery_showroom/[name][ext]`
                }
            ]
        })
    ],
    module: {
        rules: [
            { test: /\.css/, use: ['style-loader', 'css-loader'] },
            { 
                test: /\.(woff|woff2|eot|ttf|otf|png|svg|jpg|jpeg|gif)$/, 
                use: [
                    { 
                        loader: 'file-loader', 
                        options: { outputPath: 'assets/', esModule: false }
                    }
                ] 
            },
            {
                test: /\.(gltf|glb)$/, 
                include: [
                    path.resolve(__dirname, "src/assets/models/gallery_showroom")
                ],
                exclude: /node_modules/,
                use: [
                    { 
                        loader: 'file-loader', 
                        options: { outputPath: 'assets/gallery_showroom', esModule: false }
                    }
                ] 
            },
            {
                test: /\.(gltf|glb)$/, 
                include: [
                    path.resolve(__dirname, "src/assets/models/cone")
                ],
                exclude: /node_modules/,
                use: [
                    { 
                        loader: 'file-loader', 
                        options: { outputPath: 'assets/cone', esModule: false }
                    }
                ] 
            },
            { test: /\.js$/, exclude: /node_modules/, use: { loader: 'babel-loader' } }
        ],
    },
};
