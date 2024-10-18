/*
Crear un programa en JavaScript que solicite al usuario un número y determine si ese número es múltiplo
de 3, múltiplo de 5 o de ambos.
*/

let num = parseInt(prompt('Ingrese un numero: '))

if (num % 5 === 0){
    console.log(`El numero ${num} es multiplo de 5`);
}else{
    console.log(`El numero ${num} NO es multiplo de 5`);
}

if (num % 3 === 0){
    console.log(`El numero ${num} es multiplo de 3`);
}else{
    console.log(`El numero ${num} NO es multiplo de 3`);
}