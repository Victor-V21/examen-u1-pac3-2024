/*
Crea un programa que le pida al usuario un año y determine si es un año bisiesto o no. Un año es bisiesto
si:
i. Es divisible por 4, pero no por 100, a menos que también sea divisible por 400.
*/

let year = parseInt(prompt('Ingrese un año: '))
let bisiesto = false;


if ( year % 4 === 0 && !(year % 100 === 0))
{
    bisiesto = true;

} else if ( year % 100 === 0 && year % 400 === 0)
{
    bisiesto = true
}

if (bisiesto){
    console.log('El año que ingreso es BISIESTO');
}else{
    console.log('El año que ingreso es NO es bisiesto');
}

