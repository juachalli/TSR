/*
JavaScript es un lenguaje de programación con tipificación débil
  Esto significa que sus expresiones no comprueban semánticamente 
   si sus operadores están aplicados a variables con un tipo adecuado.
*/

console.log(8*null); // 0
console.log(typeof(8*null)); // number

console.log("5" - 1); // 4
console.log(typeof("5" - 1)); // number

console.log("5" + 1); // "51"
console.log(typeof("5" + 1)); // string

console.log("five" * 2); // NaN
console.log(typeof("five" * 2)); // number

console.log("5"*"2"); // 10
console.log(typeof("5"*"2")); // number

console.log(5+[1,2,3]); // "51,2,3"
console.log(typeof(5+[1,2,3])); // string

/*
Preguntas sobre ese ejemplo:

=> ¿Hay algún resultado inesperado?
//console.log("5" + 1); // "51"
=> ¿Hay alguna expresión (aparentemente) incorrecta?
//console.log(5+[1,2,3]); // "51,2,3"
=> Pruébalas todas y comprueba los resultados.
Hecho
=> ¿Conviene escribir expresiones similares en nuestros programas?
No, es mejor evitar ambigüedades
*/

