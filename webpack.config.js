module.exports ={
    entry : ['webpack/hot/dev-server', 
             './src/index.js'],
    output: {
        path: "dist/assets",
        filename: "bundle.js",
        publicPath: "/assets"
    },
    devServer: {
        inline: true,
        contentBase: "./dist",
        port: 3000,
        hot: true
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules)/,
            loader: ['babel'],
            query: {
                presets: ['latest', 'stage-0']
            }
        }, {
            test: /\.json$/,
            exclude: /(node_modules)/,
            loader: 'json-loader'
        }
        ]
    }
}