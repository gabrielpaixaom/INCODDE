// DESAFIO 02 

let alturas = [147,169,200,182,150,230,187,154,177,161];

let maioraltura = 0;
let menoraltura = 1000;
i = 0;
for (i = 0; i < alturas.length; i++) {
    if (maioraltura < alturas[i]){
        maioraltura = alturas[i];
            } 
    if ( menoraltura > alturas[i]) {
        menoraltura = alturas[i];
            }
            
} 
console.log("Maior altura é: ", maioraltura);
console.log("Menor altura é: ", menoraltura);