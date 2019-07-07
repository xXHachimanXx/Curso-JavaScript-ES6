"use strict";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { if (i % 2) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } else { Object.defineProperties(target, Object.getOwnPropertyDescriptors(arguments[i])); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

//NOTA: como os operadores ainda não vem junto ao Babel,
//      teremos que importar usando o seguinte comando: 
//       yarn add @babel/plugin-proposal-object-rest-spread

/**
 * REST - serve para pegar o resto das propriedades de um objeto.
 */
var user = {
  name: "Felipe",
  idade: 20,
  empresa: "vasp",
  UF: "MG",
  cargo: "CDC"
};

var name = user.name,
    resto = _objectWithoutProperties(user, ["name"]); //utilizando desconstrução  
//console.log(name);
//console.log(resto);


var vet = [1, 2, 3, 4];
var a = vet[0],
    b = vet[1],
    c = vet.slice(2); //console.log(a);
//console.log(b);
//console.log(c);

function soma() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return params.reduce(function (total, next) {
    return total + next;
  });
}

console.log(soma(1, 2, 3, 4)); // SPREAD -> serve para repassar dados de uma estrutura de dados para outra

var user1 = {
  nome: "Felipe",
  idade: 19,
  empresa: "betagens gourmet",
  cargo: "cdc"
};

var user2 = _objectSpread({}, user1, {
  nome: "Cleiton"
}); //console.log(user2);


var arr = [1, 2, 3];
var arr2 = [4, 5, 6];
var arra3 = [].concat(arr, arr2);
console.log(arra3); // Template Literals

var nome = "Felipe";
var idade = 19;
console.log("Meu nome \xE9 ".concat(nome, " e eu tenho ").concat(idade, " anos.")); // Object short syntax

var user4 = {
  nome: nome,
  idade: idade,
  empresa: "betagens gourmet",
  cargo: "cdc/admin"
};
console.log(user4);
