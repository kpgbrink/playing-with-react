module.exports = {
    entry: './src/app.js',
    output: {
        path: './public/bin',
        filename: "app.[hash].bundle.js",
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
  }
]
}