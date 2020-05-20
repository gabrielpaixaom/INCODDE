// Desafio 04
let a = 1;
let b = 0;
let n = 7; // Numero de interacoes da sequencia de fibonacci
let aux;

 for (let i =0; i <n; i++) {
    console.log(a);
    aux = a;
    a += b;
    b = aux;
}

