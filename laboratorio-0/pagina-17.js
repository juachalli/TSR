/*
JavaScript utiliza tipos dinámicos
  No necesita especificar el tipo de las variables
  Su tipo depende de los valores asignados
*/


// let x /* Can this be done? */
// let no permite declarar dos veces la misma variable en el mismo ámbito,
// No se puede utilizar una variable antes de declararla.
let letX1;
letX1=6;
console.log("letX1",letX1);
letX1 = "Hola Mundo let";
console.log("letX1",letX1);

let letX2; //No podemos definir letX1 de nuevo
letX2 = [];
console.log("letX2",letX2);
letX2[1] = 5;
console.log("letX2",letX2);
console.log("letX2",letX2[0]);
console.log("letX2",letX2[3]);
//console.log("letX3",letX3);
//let letX3;

// var x /* Can this be done? */
// set sí que permite declarar dos veces la misma variable en el mismo ámbito.
// Se puede utilizar una variable antes de declararla, pero su valor será undefined.
var varX1;
varX1=6
console.log("varX1",varX1);
varX1 = "Hola Mundo var";
console.log("varX1",varX1);

var varX1;
console.log("varX1",varX1); //Mantiene el valor definido anteriormente
varX2 = [];
console.log("varX2",varX2);
varX2[1] = 5;
console.log("varX2",varX2);
console.log("varX2",varX2[0]);

console.log("varX3",varX3);
var varX3;

/*
Algunas cuestiones sobre el programa de la página anterior:

=> ¿Habrá algún error en la ejecución de ese programa?
let no permite declarar dos veces la misma variable en el mismo ámbito,
No se puede utilizar una variable antes de declararla.

=> ¿En qué se diferencia de un programa escrito en Java? 

=> ¿Podemos utilizar una variable que no haya sido definida con 
"let" o "var"?
Con let No se puede utilizar una variable antes de declararla.
Con set sí que se puede utilizar una variable antes de declararla, pero su valor será undefined.
*/

