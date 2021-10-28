module.exports = {
	entry: './src/infrastructure/server.ts', //ビルドするファイル
	output: {
		path: __dirname + '/dist', //ビルドしたファイルを吐き出す場所
		filename: 'main.js' //ビルドした後のファイル名
	},
	module: {
		rules: [
			{
				// 拡張子 .ts の場合
				test: /\.ts$/,
				// TypeScript をコンパイルする
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
  },
	resolve: {
		extensions: ['.ts', '.js']
	},
	target: 'node'
};