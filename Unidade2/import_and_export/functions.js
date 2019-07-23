/*
export function soma(a, b){
    return a + b;
}

export function sub(a, b){
    return a - b;
}
*/

export class Functions
{
    static soma(a, b){
        return a+b;
    }
    static sub(a, b){
        return a-b;
    }
    static mult(a, b){
        return a*b;
    }
    static div(a, b){
        return a/b;
    }
}

export class Contato
{       
    constructor()
    {
        this.nome = "";
        this.numero = null;
    }

    setData(nome, numero)
    {
        this.nome = nome;
        this.numero = numero;
    }

    toString()
    {
        return (`Nome: ${this.nome} \nNúmero: ${this.numero}`);
    }
        
}