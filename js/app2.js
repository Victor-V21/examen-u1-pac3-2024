/*
Escribe un programa que reciba una calificación numérica entre 0 y 100 y luego imprima su equivalente
en letras, de acuerdo con la siguiente tabla:
i. 90-100: A
ii. 80-89: B
iii. 70-79: C
iv. 60-69: D
v. 0-59: F
*/

let nota = parseInt(prompt('Ingrese una nota del 0 al 100'))

if ( nota >= 90 && nota <= 100){
    console.log(`El equivalente a la nota ${nota} es: A`);

} else if ( nota >= 80 && nota <= 89){
    console.log(`El equivalente a la nota ${nota} es: B`);

} else if ( nota >= 70 && nota <= 79){
    console.log(`El equivalente a la nota ${nota} es: C`);

} else if ( nota >= 60 && nota <= 69){
    console.log(`El equivalente a la nota ${nota} es: D`);

} else if ( nota >= 0 && nota <= 59){
    console.log(`El equivalente a la nota ${nota} es: F`);
} else {
    console.log('Ha ingresado una nota erronea');
}

