const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: './src/main.js',
    output: {
        path: './public/bin',
        filename: "main.[hash].bundle.js",
        chunkFilename: "[chunkhash].bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel', // 'babel-loader' is also a valid name to reference
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
            }
        ]
    },
    plugins: [
        function() {
            this.plugin("done", function(stats) {
                require("fs").writeFileSync(
                    "./public/bin/assetsByChunkName.json",
                    JSON.stringify(stats.toJson().assetsByChunkName));
            });
        },
        new ExtractTextPlugin('[name].[contenthash].css'),
    ],  externals: {
        // require("jquery") is external and available
        //  on the global var jQuery
        "jquery": "jQuery"
    }
}
