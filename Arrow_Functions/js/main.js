const vet = [1, 2, 3, 4, 5, 6];

/**
 * Percorrer vetor.
 */
const vet2 = vet.map( item => item * 2 );

console.log(vet2);

//Funciona mas não é recomendado(depende a situação)
const teste = () => {
    return 'Teste';
}

//para passar retornar um objeto
const teste2 = () => (
    {
        nome: 'Cleiton',
        sobrenome: 'Floricultura',
        familia: 'Floricultura'
    }
)

console.log(teste2());

//definir valores padrão para os parâmetros 'a' e 'b'
const soma = (a = 3, b = 4) => a + b;

console.log(soma()); // retorna a soma dos valores padrão
console.log(soma(1)); // 'a' = 1 e soma com o valor padrão de 'b'