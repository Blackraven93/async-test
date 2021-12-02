const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

const BASE_JS = './src/client/js/'

module.exports = {
    mode:"development",
    entry: {
        main:BASE_JS + `main.js` ,
    },
    output: {
        filename: 'js/[name].[chunkhash].js',
        path: path.resolve(__dirname, 'assets'),
        clean: true,
    },
    module: {
        rules: [
            {
                test:/\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [['@babel/preset-env', {targets: 'defaults'}]]
                    },
                },
                include: [path.resolve(__dirname, './src/client')],
                exclude: ['/node_modules'],
            },  
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap:true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap:true
                        }
                    }
                ],
                exclude: ['/node_modules'],
            },
            {
                test: /\.pug$/,
                use:['pug-loader'],
            }
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({filename: 'css/styles.css',}),
        new Dotenv(),
        new CleanWebpackPlugin,
        new HtmlWebpackPlugin({
            template: './src/views/home.pug',
            minify: false
        }),
    ],
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.json', '.jsx', '.css'],
    },
    devServer: {
        // contentBase:'./dist', // 서버 시작 시 static 파일 경로 지정
        port:process.env.FRONTPORT,
        hot:true,
        proxy: {
            '/' : 'http://localhost:8900/',
            changeOrigin:true
        }
    },
    optimization: {
        runtimeChunk: 'single'
    }
}