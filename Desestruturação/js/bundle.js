"use strict";

var user = {
  nome: "Cleiton",
  idade: 85,
  endereco: {
    cidade: "Alagoinha do Sul",
    estado: "Acre",
    bairro: "Ventosa"
  }
};
var nome = user.nome,
    idade = user.idade,
    _user$endereco = user.endereco,
    cidade = _user$endereco.cidade,
    estado = _user$endereco.estado;
console.log(nome + "\n" + idade + "\n" + cidade + "\n"); //passar um objeto como parâmetro e pegar apenas o atributo desejado

function mostrarNome(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  console.log("Mostrar Nome: " + nome);
}

mostrarNome(user);
