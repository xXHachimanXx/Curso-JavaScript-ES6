const user = {
    nome: "Cleiton",
    idade: 85,
    endereco: {
        cidade: "Alagoinha do Sul",
        estado: "Acre",
        bairro: "Ventosa"
    }
}

const {nome, idade, endereco: { cidade, estado } } = user;

console.log(nome +"\n" + idade + "\n" + cidade + "\n");

//passar um objeto como parâmetro e pegar apenas o atributo desejado
function mostrarNome( {nome, idade} ) {
    console.log("Mostrar Nome: " + nome);
}

mostrarNome(user);