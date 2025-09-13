
let result;
result = 5;

if (typeof result != 'undefined') {
    console.log('result is defined and the value is: ', result);
} else {
    console.log('result is undefined');
}

// Esta condición es incorrecta, ya que typeof siempre devuelve un string
if (typeof result != undefined) {
    console.log('result is defined and the value is: ', result);
} else {
    console.log('result is undefined');
}

if (result) {
    console.log('result is defined and the value is: ', result);
} else {
    console.log('result is undefined');
}

console.log(typeof result);

/*
Ejercicio: 

=> Buscar otras maneras de comprobar si una variable es undefined o no.
    if (result) {
        console.log('result is defined and the value is: ', result);
    } else {
        console.log('result is undefined');
    }
*/

