module.exports = {
    entry: "./src/js/app.js",
    output: {
        path: "./src",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.jsx?/, loader: "babel-loader" }
        ]
    }
};
