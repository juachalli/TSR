/*
La coerción de tipos puede utilizarse para simplificar 
condiciones.
*Ejemplos:
*/ 
//  Si es una cadena vacía:
let user;
if (user)
    console.log('user no es una cadena vacía');
else
    console.log('user es una cadena vacía');

//  Si una variable ha sido definida o no:
let person;
if (person)
    console.log('person existe y no es null ni undefined');
else
    console.log('person no existe o es null o undefined');

//  Cuando person sea undefined o null estas instrucciones funcionarán como se espera.
//  Pero... ¿qué pasará si person es 0 o cadena vacía?
// Ejercicio:
//¿Cómo puede comprobarse si person ha sido definida, considerando también el valor 0 y la cadena vacía?
// Utilizando comparación estricta: 
let person2;
if (person2 || person2===0 || person2==='')
    console.log('person existe y no es null ni undefined ni 0 ni cadena vacia');
else
    console.log('person no existe o es null o undefined o es 0 o cadena vacia');
// Sin coerción de tipos:
let person3;
if (person3 !== null && person3 !== undefined)
    console.log('person existe y no es null ni undefined');
else
    console.log('person no existe o es null o undefined');

/*
  Cuestiones:
  ¿Qué pasa si eliminamos la línea 1?
 Que dará error porque person no está definida

  En la segunda solución, ¿podría usarse != en vez de !== ?
    Sí, pero no es recomendable porque != hace coerción de tipos y puede dar resultados inesperados.
*/
console.log('"2"!=2',"2"!=2);
console.log('"2"!==2',"2"!==2);
