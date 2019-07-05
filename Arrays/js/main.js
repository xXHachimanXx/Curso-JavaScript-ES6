const vet = [1, 2, 3, 4, 5, 6];

/**
 * Percorrer vetor.
 */
const vet2 = vet.map(function(item, index){
    return item;
});

console.log(vet2);

/**
 * Percorrer vetor somando todos os valores.
 */
const sum = vet.reduce(function(total, next){
    return total + next;
});

console.log(sum);

/**
 * Retornar vetor filtrado com apenas os itens ímpares.
 */
const filter = vet.filter(function(item){
    return item % 2 !== 0;
});

console.log(filter);
