"use strict";

//3.1
var arr = [1, 2, 3, 4, 5];
var arr2 = arr.map(function (item) {
  return item + 10;
});
console.log(arr2); //3.2

var user = {
  nome: "Felipe",
  idade: 23
};

var mostrarIdade = function mostrarIdade(user) {
  return user.idade;
}; //a const armazena uma função


console.log(mostrarIdade(user)); //3.3

var nome = "Felipe";
var idade = 21;

var mostrarUsuario = function mostrarUsuario() {
  var nome = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Felipe";
  var idade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 19;
  return {
    nome: nome,
    idade: idade
  };
};

console.log(mostrarUsuario(nome, idade));
console.log(mostrarUsuario(nome)); //3.4

var promise = function promise() {
  return new Promise(function (resolve, reject) {
    return resolve();
  });
};
