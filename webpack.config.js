module.exports = {
    entry: "./Unidade2/main.js", //qualarquivo de entrada(ou principal)
    output: {
        path: __dirname, //diretório raiz deste arquivo,
        filename: "bundle.js", //nome do arquivo destino
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