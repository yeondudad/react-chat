module.exports = {
    context: __dirname + "/app",
    entry: {
        javascript: "./app.js",
        html: "./index.html"
    },
    output: {
        path: 'dist',
        filename: 'bundle.js',
        publicPath: ''
    },
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react'},
            {test: /\.html$/,loader: "file?name=[name].[ext]"}
        ]
    }
}
