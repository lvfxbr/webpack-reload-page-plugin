const chalk = require("chalk");
const { WebSocketServer } = require("ws");

const wss = new WebSocketServer({
    port: 8080,
});

const address = wss.address();

function log(msg) {
    console.log(chalk.blue(msg));
}

let _ws;

wss.on("listening", () => {
    log(`WebSocket Server listening on: 'ws://localhost:${address.port}'.`);
});

wss.on("connection", function connection(ws) {
    if (!_ws) {
        log(`Client connected in 'ws://localhost:${address.port}'.`);
    }

    _ws = ws;
});

function webpackReload() {
    if (_ws) {
        const data = {
            type: "webpack-reload",
            message: "Webpack is reloading!",
        };

        log(
            `Send reload for clients of socket server: 'ws://localhost:${address.port}'`
        );

        _ws.send(JSON.stringify(data));
    }
}

class WebpackReloadPagePlugin {
    apply(compiler) {
        compiler.hooks.done.tap("WebpackReloadPagePlugin", (compilation) => {
            webpackReload();
        });
    }
}

module.exports = WebpackReloadPagePlugin;
