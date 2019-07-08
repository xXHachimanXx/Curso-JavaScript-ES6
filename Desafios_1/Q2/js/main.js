const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
   ];

//pegar idades com map()
const idades = usuarios.map((item) => item.idade);


//pegar apenas os usuários que trabalham na Rocketseat e com mais de 18 com filter
const userFilter = usuarios.filter( (item) => (item.idade > 18 && item.empresa === "Rocketseat") );

// procura por um usuário que trabalhe na empresa Google com find()
const googleBoy = usuarios.find((item) => item.empresa === "Google");


var multIdade = usuarios.map(function (item){ item.idade = item.idade*2; return item;});
multIdade = multIdade.filter((item) => item.idade < 50);
console.log(multIdade);