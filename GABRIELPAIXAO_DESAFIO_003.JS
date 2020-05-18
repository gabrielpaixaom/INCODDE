// Desafio 03
let x = 6
let y = -5
soma = 0;

if(x>y) {
    maior = x
    menor = y + 1
        
} else {
    maior = y
    menor = x +1
}
while ( menor < maior ) {
    if ( menor % 2 != 0) {
        soma += menor;
 }
    menor++;
      
}

console.log(soma);

