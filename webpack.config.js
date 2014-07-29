module.exports = {
    entry: "./src/Index",
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
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
        modulesDirectories: ['node_modules', "src"]
    }
};