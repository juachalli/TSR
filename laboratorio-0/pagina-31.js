/*
Coerción de tipos
Característica de los lenguajes de programación que permite, 
implícita o explícitamente, convertir un elemento de un tipo de 
datos en otro, sin tener en cuenta la comprobación de tipos.
*/

console.log(8*null); // 0 => Convierte null a 0
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
Cuestiones:

=> ¿Se puede deducir qué reglas dirigen las coerciones de tipos 
aplicadas en este ejemplo?
console.log(8*null); // 0 => Convierte null a number 0
console.log("5" - 1); // 4 => Convierte string "5" a number 5
console.log("5" + 1); // "51" => Convierte number 1 a string "1"
console.log("five" * 2); // NaN => Devuelve NaN porque el string "five" no se puede convertir a number
console.log("5"*"2"); // 10 => Convierte string "5" y "2" a number 5 y 2
console.log(5+[1,2,3]); // "51,2,3" => Convierte number 5 a string "5" y el array [1,2,3] a string "1,2,3"

=> ¿Ofrecen todas un resultado "correcto"? 
Sí, todas ofrecen un resultado correcto según las reglas de coerción de tipos de JavaScript.

=> ¿Son útiles?
Sí, pero hay que tener cuidado al usarlas para evitar resultados inesperados.

*/

