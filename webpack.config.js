const path = require("path");
const webpack = require("webpack");
const htmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports={
	entry:{
		main:'./src/js/main.js'
	},
	output:{
		// filename:"js/[name]-[chunkhash].js",//问题：当HotModuleReplacementPlugin存在时不能使用chunkhash
		publicPath: '/',
		filename:"js/[name]-[hash:5]",
		path:path.resolve(__dirname,"dist/")
	},
	module:{
		rules:[
			{
				test:/\.css$/,
				use:ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
			}
		]
	},
	plugins:[
		new ExtractTextPlugin("css/todo.css"),
		new webpack.HotModuleReplacementPlugin(),
		new htmlWebpackPlugin({
			template:"./src/template/index.html",
			filename:'index.html'
		})
	],
	devServer:{
		hot: true,
		publicPath: '/',
		contentBase: path.join(__dirname, "dist"),
		compress: true,
		port: 8000
	}
}
