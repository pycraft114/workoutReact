var HtmlWebPackPlugin = require('html-webpack-plugin');
var path = require('path');


module.exports = {
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath:'/'
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader", query: {presets:['react','es2015','stage-2']}},
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }
        ]
    },
    devServer:{
        historyApiFallback:true
    },
    plugins:[new HtmlWebPackPlugin({
        template:'./app/index.html'
    })],
    resolve:{
        alias:{
            actions : path.resolve(__dirname, 'app', 'actions'),
            components : path.resolve(__dirname, 'app', 'components'),
            containers : path.resolve(__dirname, 'app', 'containers'),
            reducers : path.resolve(__dirname, 'app', 'reducers'),
            server : path.resolve(__dirname, 'app', 'server'),
            style : path.resolve(__dirname, 'app', 'style')
        },
        extensions:['','.js']
    }
};

/*
css loader불러올때 이전에는 use라는 프로퍼티 사용해서 use: ['style-loader','css-loader']로 불러옴
하지만 에러 발생 , 이후에 use프로퍼티 대신에 loader이라는 프로퍼티 사용, loader : ['style-loader','css-loader']도
에러 발생, 이후에 loader: "style-loader!css-loader" 입력 이후에 정상작동함
 */