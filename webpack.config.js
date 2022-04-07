const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackReloadPagePlugin = require("./src/webpack.reload-page.plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development",
    watch: true,
    watchOptions: {
        ignored: /node_modules/,
    },
    entry: {
        "reload-socket": "./src/reload-socket.js",
        app: "./src/index.js",
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
        ],
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
        new WebpackReloadPagePlugin(),
        new MiniCssExtractPlugin({
            filename: "app.css",
        }),
    ],
};
