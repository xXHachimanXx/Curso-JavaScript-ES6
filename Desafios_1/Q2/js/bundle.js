"use strict";

var usuarios = [{
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
}, {
  nome: 'Gabriel',
  idade: 15,
  empresa: 'Rocketseat'
}, {
  nome: 'Lucas',
  idade: 30,
  empresa: 'Facebook'
}]; //pegar idades com map()

var idades = usuarios.map(function (item) {
  return item.idade;
}); //pegar apenas os usuários que trabalham na Rocketseat e com mais de 18 com filter

var userFilter = usuarios.filter(function (item) {
  return item.idade > 18 && item.empresa === "Rocketseat";
}); // procura por um usuário que trabalhe na empresa Google com find()

var googleBoy = usuarios.find(function (item) {
  return item.empresa === "Google";
});
var multIdade = usuarios.map(function (item) {
  item.idade = item.idade * 2;
  return item;
});
multIdade = multIdade.filter(function (item) {
  return item.idade < 50;
});
console.log(multIdade);
