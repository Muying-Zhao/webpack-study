const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin }=require('vue-loader')

module.exports ={
    // entry打包的入口
    entry: {
        main: './src/main.js'
    },
    //output输出文件,__dirname是找当前文件根目录
    output:{
        path: __dirname + '/dist', // 输出的路径path
        clean:true //清理打包的dist中不必要的文件
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.css$/i, //匹配所有以 .css 结尾的文件
                use: ['style-loader','css-loader']
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.vue$/i,
                use: ['vue-loader']
            },
            // 如果需要处理SCSS或SASS，可以添加如下规则  
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }, 
        ],
    },
    // 引入webpack插件
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            title: 'webpack study'
        }),
        new VueLoaderPlugin()
    ],
    // 开发环境
    mode: 'development'
} 