module.exports = {
    entry: "./Unidade2/src/main.js", //qual arquivo de entrada(ou principal)
    output: {
        path: __dirname + "/public", //diretório onde o bundle será gerado,
        filename: "bundle.js", //nome do arquivo destino
    },
    devServer: {
        contentBase: __dirname + "/Unidade2/public", //diretório onde o server será gerado
    },
    module: {
        rules: [
            {
                test: /\.js$/, //regex para procurar arquivos .js
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
};