const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',// style-loader要放在css-loader前面，否则报错
                    'css-loader',
                ]
            },
            {
                test: /\.(jpg|png|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024, // 小于1024转为base64
                            name: 'img-[name].[ext]' // 指定输出名字
                        }
                    }
                ]
            }
        
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HTMLPlugin()
    ]
}