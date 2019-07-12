//NOTA: como os operadores ainda não vem junto ao Babel,
//      teremos que importar usando o seguinte comando: 
//       yarn add @babel/plugin-proposal-object-rest-spread

/**
 * REST - serve para pegar o resto das propriedades de um objeto.
 */
const user = {
    name: "Felipe",
    idade: 20,
    empresa: "vasp",
    UF: "MG",
    cargo: "CDC"
};

const { name, ...resto } = user; //utilizando desconstrução  
//console.log(name);
//console.log(resto);


const vet = [1, 2, 3, 4];
const [a, b, ...c] = vet;
//console.log(a);
//console.log(b);
//console.log(c);


function soma(...params) {
    return params.reduce((total, next) => total + next);
}
console.log(soma(1, 2, 3, 4));


// SPREAD -> serve para repassar dados de uma estrutura de dados para outra

const user1 = {
    nome: "Felipe",
    idade: 19,
    empresa: "betagens gourmet",
    cargo: "cdc"
};

const user2 = { ...user1, nome: "Cleiton"};
//console.log(user2);

const arr = [1, 2, 3];
const arr2 = [4, 5, 6];
const arra3 = [...arr, ...arr2];
console.log(arra3);

// Template Literals
const nome = "Felipe";
const idade = 19;
console.log(`Meu nome é ${nome} e eu tenho ${idade} anos.`);

// Object short syntax
const user4 = {
    nome,
    idade,
    empresa: "betagens gourmet",
    cargo: "cdc/admin"
};

console.log(user4);
