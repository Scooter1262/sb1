const {resolve} = require('path') // функция резосв вшита в нод, ее экспортируем и меняем относительный руть в path
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports={
    mode:'production',
    entry:'./js/main.js',//создать файл
    output: {
        path: resolve(__dirname,'build'),  // если хотим сменить директорию то делает через path(дирнайм - билд - путь от текущей дирректории в билд)
        filename:'main.[contenthash].js' // положить в файл
    },
     modules:{
         rules: [
             {
                 test:/\.(png.jpe?g|gif)$/i,
                 loader:'file-loader',
                 options:{
                     name: '[path][name].[ext]'
                 }
                },

                {
                    test:/\.css$/i,
                    use: ['style-loader', 'css-loader']
                },

         ]
     },
     plugins:[
         new HtmlWebpackPlugin({})
     ]


}