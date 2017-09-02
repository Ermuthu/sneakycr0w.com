const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "./public/css/bundle.css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
    entry: {
        css: "./public/css/style.scss"
    },
    output: {
        filename: "./public/js/bundle.js"
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: extractSass.extract({
                use: [{
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }],
                // use style-loader in development
                fallback: "style-loader"
            })
        }]
    },
    plugins: [
        extractSass
    ]
};
