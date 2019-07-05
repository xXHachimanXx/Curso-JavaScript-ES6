"use strict";

var vet = [1, 2, 3, 4, 5, 6];
/**
 * Percorrer vetor.
 */

var vet2 = vet.map(function (item) {
  return item * 2;
});
console.log(vet2); //Funciona mas não é recomendado(depende a situação)

var teste = function teste() {
  return 'Teste';
}; //para passar retornar um objeto


var teste2 = function teste2() {
  return {
    nome: 'Cleiton',
    sobrenome: 'Floricultura',
    familia: 'Floricultura'
  };
};

console.log(teste2()); //definir valores padrão para os parâmetros 'a' e 'b'

var soma = function soma() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;
  return a + b;
};

console.log(soma()); // retorna a soma dos valores padrão

console.log(soma(1)); // 'a' = 1 e soma com o valor padrão de 'b'
