
/*
Ejercicio: Extender el programa mostrado en la página 62, 
escribiendo otra función doWithNFirstNumbers() con 3 parámetros:
     n:  El último número natural a utilizar
     op: Función a ser aplicada en cada número natural procesado
     op2: Función a ser aplicada en el resultado de op(i) para acumular todos 
        los resultados
         op2 ha de ser alguna de las funciones del Array arithmeticOperations
  doWithNFirstNumbers() aplica op() a todos los números naturales 
del intervalo 1..n, y acumula sus resultados utilizando op2.
  Ejemplos de invocaciones
 */

 let aritmeticOperations2 = [
    function(a,b) { return a * b },
    function(a,b) { return a + b },
    function(a,b) { return a - b }
];

function doWithNFirstNumbers(n, op, op2) {
    
}
/*
function doWithNFirstNumbers(n, op, op2) {
    let result = op(1);
    for(let i=2; i<=n; i++) {
        result = op2(result, op(i));
    }
    console.log(result);
}
*/

 // Sum the squares of the first four numbers. Result: 30
 doWithNFirstNumbers(4, x => x*x, arithmeticOperations[1]);

 // Compute how many odd numbers are in the 1..3 range. Result: 2
 doWithNFirstNumbers(3, x => x%2?1:0, arithmeticOperations[1]);
