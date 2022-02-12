const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const fs = require("fs");

const isDevMode = /*process.env.DEV_STAGE !== "production"*/ false;
function getAppSrc() {
    return path.resolve(process.cwd(), 'src');
}

module.exports = {
    watchOptions: {
        stdin: true,
    },
    mode: isDevMode ? 'development' : 'production',
    entry: './src/ts/index.ts',
    module: {
        rules: [
            { test: /\.(ts)$/, use: 'ts-loader' },
            {test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"]}
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.json', 'js']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            chunks: ['main']
        })
    ],
    devtool: 'source-map',
    devServer: {
        hot: true,
        open: ['/login.html'],
        compress: true,
        host: 'localhost',
        port: 3003,
        https: {
            key: fs.readFileSync('./cert.key'),
            cert: fs.readFileSync('./cert.crt'),
            ca: fs.readFileSync('./ca.crt'),
        },
        allowedHosts: 'all',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': '*',
            'Access-Control-Allow-Headers': '*',
        },
        static: {
            directory: path.join(process.cwd(), 'dist'),
            publicPath: '',
            watch: {
                ignored: getAppSrc(),
            },
        },
        client: {
            logging: 'info',
            overlay: {
                errors: true,
                warnings: false,
            },
        },
        devMiddleware: {
            publicPath: '',
            writeToDisk: true,
        },
    },
}