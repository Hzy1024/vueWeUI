var path = require("path");
module.exports = {
	dubug : true,
	entry : {
		index : "./main.js" 
	},
	output:{
		path : "./buider",
		filename : "app.js"
	},
	module:{
		loaders:[
			{ test: /\.vue$/, loader: "vue" },
			{ test: /\.css$/, loader: "style!css"},
			{ test: /\.(gif|jpg|png)$/, loader:"url?limit=8192&name=[path][name].[ext]"},
			{ test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,   loader: "url?limit=10000&name=[path][name].[ext]"},
			{ test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader:"file?name=[path][name].[ext]" }
		],
//		devServer:{
//			historyApiFallback : true,
//			hot : true,
//			inline : true,
//			progress : true,
//		}
	},
	resolve:{
		alias:{
			"zepto":"./js/n-zepto.js",
		}
	},
	externals:{
//		"zepto":"'./js/zepto.v1.2.0.min.js'"
	}
}
