"use strict";

//4.1
var empresa = {
  nome: 'Rocketseat',
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC'
  }
};
/*
const {nome, endereco: {cidade, estado} } = empresa;
console.log(nome); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado); // SC
*/
//4.2

function mostraInfo(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  return "".concat(nome, " tem ").concat(idade, " anos.");
}

console.log(mostraInfo({
  nome: 'Diego',
  idade: 23
}));
