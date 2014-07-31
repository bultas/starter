module.exports = {
    entry: "mocha!./test/index",
    output: {
        path: './build',
        filename: 'test.js'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.jsx$/, loader: "jsx-loader?harmony" },
            { test: /\.png/, loader: 'url?limit=100000&minetype=image/png' },
            { test: /\.jpg/, loader: 'file' }
        ]
    },
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".js", ".jsx"],
        modulesDirectories: ['node_modules', "."]
    }
};