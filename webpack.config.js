function getEntrySources(sources) {
    if (process.env.NODE_ENV !== 'production') {
        sources.push('webpack-dev-server/client?http://localhost:8080');
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
        filename: 'public/[name].js'
    }
};