const path = require('path');
const { VueLoaderPlugin } = require('vue-loader/dist/index')
const MiniCssExtractPlugin = require();


module.exports = {
    //这是声明了Webpack的打包模式是生产的编译模式
    mode: 'production',

    //是声明了Webpack要执行编译时候的入口文件
    extry: {
        'index': path.join(__dirname, 'src/index.js'),
    },

    //声明了Webpack编译的出口文件
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
    },

    //module是webpack打包构建的核心所在,
    //可以根据自已项目打包需要, 选择对应的打包加载器
    module: {
        rules: [
            { test: /\.vue$/, use: ['vue-loader'] },
            { test: /\.(css|less)$/ }
        ]

    },

    //这个是webpack的插件配置, 主要是贯穿webpack的整个打包的少女革命周期
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({ filename: '[name].css'})
    ],

    externals: {
        'vue': 'window.Vue'
    }
}
