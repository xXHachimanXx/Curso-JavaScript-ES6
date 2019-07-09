//3.1
const arr = [1, 2, 3, 4, 5];
const arr2 = arr.map((item) => item+10);

console.log(arr2);

//3.2
const user = {nome: "Felipe", idade: 23};
const mostrarIdade = (user) => user.idade; //a const armazena uma função
console.log(mostrarIdade(user));

//3.3
const nome = "Felipe";
const idade = 21;
const mostrarUsuario = (nome = "Felipe", idade = 19) => ( {nome, idade} );
console.log(mostrarUsuario(nome, idade));
console.log(mostrarUsuario(nome));

//3.4
const promise = () => new Promise((resolve, reject) => resolve());

