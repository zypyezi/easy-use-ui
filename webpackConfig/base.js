const path = require('path')
var webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const fs = require('fs')
const argvs = process.argv.slice(2)

const { VueLoaderPlugin } = require('vue-loader');

const ENV = process.env.ENV

function resolve (dir) {
    return path.join(__dirname, '..', dir)
}


function genComponentsDir (){
    const dirs = fs.readdirSync(path.resolve(__dirname, '../packages'))
    const excludes = ['index.js','Index.vue']
    return dirs.filter(dirName => excludes.indexOf(dirName) === -1)
}

var entry 
if (ENV == 'production') {
    if(argvs.length == 0 ){
        var componentsEntrys = {}
        var components = genComponentsDir()
        
        components.forEach(element => {
            componentsEntrys[element] = path.join(__dirname, '../packages/', element, '/index.js')
        })
        entry = componentsEntrys
    }else{
        entry = path.join(__dirname, '../packages/', argvs[0], '/index.js')
    }
}else{
    entry = path.join(__dirname, '../src/index.js')
}





const webpackConfig = {
    entry : entry,
    output:{
        filename:'[name]/index.js',
        path: path.resolve(__dirname, '../lib'),
        publicPath:'',
        // chunkFilename: '[id].js',
        // libraryTarget: 'commonjs2'
    },

    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            SRC: path.join(__dirname, '../src')
        }
    },


    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('src')]
            },
            {
            test: /\.(png|jpg|gif|ico|svg|woff)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 8192
                }
            }
        }, {
            test: /\.(eot|ttf)$/,
            use: {
                loader: 'file-loader'
            }

        }, 
                   
       ]
    },
    plugins:[


        new HtmlWebpackPlugin({
            title : '',    //生成html文件的标题
            filename : 'index.html', //生成文件名字
            template : './index.html',
            inject : true,   // true |  body | head |false -- script标签的位置
            favicon : '' , //<link rel="shortcut icon" href="example.ico">
            chunksSortMode: 'none', //如果使用webpack4将该配置项设置为'none'
            minify : {  // 压缩
                removeComments : true,

            },
            hash :  false, // 是否生成hash添加在引入文件地址的末尾
            //  自定义字段

            _title_ : '自定义title'  // <%= htmlWebpackPlugin.options.__title__ %>
        }),

        new webpack.DefinePlugin({
             "process.env.NODE_ENV": JSON.stringify(ENV)
        }),
        new VueLoaderPlugin(),
    ]
}


module.exports = webpackConfig
