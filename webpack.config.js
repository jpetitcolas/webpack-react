var ExtractTextPlugin = require('extract-text-webpack-plugin');

function getEntrySources(sources) {
    if (process.env.NODE_ENV !== 'production') {
        sources.push('webpack-dev-server/client?http://localhost:8080');
        sources.push('webpack/hot/only-dev-server');
    }

    return sources;
}

module.exports = {
    entry: {
        helloWorld: getEntrySources([
            './js/helloworld.js'
        ])
    },
    output: {
        publicPath: 'http://localhost:8080/',
        filename: 'public/[name].js'
    },
    module: {
        loaders: [
            { 
                test: /\.js$/, loaders: ['react-hot', 'jsx', 'babel'], exclude: /node_modules/ 
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css!sass')
            }
        ]
       },
    plugins: [
        new ExtractTextPlugin('public/style.css', {
            allChunks: true
        })
    ]
};

