var HtmlWebPackPlugin = require('html-webpack-plugin');


var path = require('path');
module.exports = {
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader", query: {presets:['react','es2015']}},
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }
        ]
    },
    plugins:[new HtmlWebPackPlugin({
        template:'./app/index.html'
    })]
};

/*
css loader불러올때 이전에는 use라는 프로퍼티 사용해서 use: ['style-loader','css-loader']로 불러옴
하지만 에러 발생 , 이후에 use프로퍼티 대신에 loader이라는 프로퍼티 사용, loader : ['style-loader','css-loader']도
에러 발생, 이후에 loader: "style-loader!css-loader" 입력 이후에 정상작동함
 */