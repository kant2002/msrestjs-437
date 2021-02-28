const path = require('path');

module.exports = (env) => {
    return [{
        entry: {
            'index': './index',
        },
        resolve: {
            extensions: ['.ts']
        },
        output: {
            path: path.join(__dirname, './dist'),
            filename: '[name].js',
        },
        module: {
            rules: [
                {
                    test: /\.js|.ts?$/, loader: 'ts-loader'
                }
            ],
        },
    }];
};
