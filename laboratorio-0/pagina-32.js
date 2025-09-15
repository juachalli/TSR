/*
Las reglas de la coerción de tipos se aplican también a expresiones lógicas.
  Comprueba algunos ejemplos (con sentencias if):
  ¿Es la cadena literal "5" mayor que 3?
  ¿Es una variable con valor "6" igual a 6?
  ¿Es la cadena literal "user" igual a false?
  ¿Es la cadena vacía ("") igual a false?
  Verifica qué valor booleano corresponde a undefined y NaN.
  Debido a esto, ¿qué pasa cuando comparamos el valor de una variable 
con undefined?
  Esto explica por qué undefined está considerado un tipo en vez de un 
valor literal
*/

if ("5" > 3) {
    console.log('("5" > 3) la cadena literal "5" es mayor que 3');
} else {
    console.log('("5" > 3) la cadena literal "5" NO es mayor que 3');
}

if ("6" == 6) {
    console.log('("6" == 6) La variable con valor "6" igual a 6');
} else {
    console.log('("6" == 6) La variable con valor "6" NO es igual a 6');
}

if ("6" === 6) {
    console.log('("6" === 6) La variable con valor "6" igual a 6');
} else {
    console.log('("6" === 6) La variable con valor "6" NO es igual a 6');
}

if ("user" == false) {
    console.log('("user" == false) La cadena literal "user" es igual a false');
} else {
    console.log('("user" == false) La cadena literal "user" NO es igual a false');
}

if ("user" === false) {
    console.log('("user" === false) La cadena literal "user" es igual a false');
} else {
    console.log('("user" === false) La cadena literal "user" NO es igual a false');
}


if ("" == false) {
    console.log('("" == false) La cadena vacía ("") igual a false');
} else {
    console.log('("" == false) La cadena vacía ("") NO es igual a false');
}


if ("" === false) {
    console.log('("" === false) La cadena vacía ("") igual a false');
} else {
    console.log('("" === false) La cadena vacía ("") NO es igual a false');
}

console.log('El valor booleano correspondiente a Boolean(undefined) es:', Boolean(undefined)); //false

console.log('El valor booleano correspondiente a Boolean(NaN) es:', Boolean(NaN)); //false

// Debido a esto, ¿qué pasa cuando comparamos el valor de una variable con undefined

console.log('El valor booleano correspondiente a Boolean("a") es:', Boolean("a")); //true
console.log('El valor number correspondiente a Number("a") es:', Number("a")); //NaN
console.log('El valor booleano correspondiente a Boolean(Number("a")) es:', Boolean(Number("a"))); //false

console.log('1 == undefined', 1 == undefined); //false
console.log('"a" == undefined', "a" == undefined); //false
console.log('false == undefined', false == undefined); //false
