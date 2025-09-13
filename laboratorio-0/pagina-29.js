
let result;
console.log(result);
for (let counter=1; counter<10; counter++) {
    result = result + counter;
}
console.log(result);

/*
Cuestiones:

=> ¿Cuál es el resultado en este ejemplo?
NaN

=> ¿Por qué se obtiene un valor inesperado?
porque undefined + number = NaN
Se solucionaría inicializando result a 0
*/

