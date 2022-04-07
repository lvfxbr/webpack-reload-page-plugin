# Webpack Reload Page Plugin

The plugin that you can reload the page anywhere while developing with Webpack.

## Motivation

The main motivation to develop this plugin was when I faced develop a Chrome Extension and I would like to have a environment where I could update the contents of new tab page automatically while using Webpack. Without find a better solution, I assembled a bit of knowledge I found in Internet and the result is the plugin you will find in this repository.

## Dependencies

The dependencies of this plugin are listed in `package.json` in the section `dependencies`. That means that you need only them to make the plugin actually work.

The `devDependencies` are the dependencies needed to make the sample of this repository works (that I believe most of them you use in your project as you like).

## How it works

The plugin use `WebSockets` to make the communication between Webpack and the page you are rendering the output of the application.

Basically the plugin works like a WebSocket Server and in the frontend works like a WebSocket client.

## Warning 

This plugin should be used only `development mode` and there's no purpose to be used in production mode.


## How to use

1. Copy the files `reload-socket.js` and `webpack.reload-page.plugin.js` to your `src/` folder.

2. Import `reload-socket.js` as a entry file in you `webpack.config.js` like the example below:

webpack.config.js:

```js
module.exports = {
    ...
    entry: {
        main: "./src/index.js",
        "reload-socket.js": "./src/reload-socket.js"
    }
    ...
};
```

3. Import `webpack.reload-page.plugin.js` and use it as a normal Webpack plugin:

webpack.config.js:

```js
const WebpackReloadPagePlugin = require("./src/webpack.reload-page.plugin");

module.exports = {
    ...
    plugins: [
        new WebpackReloadPagePlugin(),
    ]
    ...
}
```

4. Open `index.html` in your browser and try to update your files.

## License

[MIT](https://opensource.org/licenses/MIT)

---

Copyright © 2022 Lucas Vendramini
