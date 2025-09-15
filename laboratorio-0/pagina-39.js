/*
Array es un objeto JavaScript similar a una lista...
  ...con una propiedad length => que devuelve cuántos elementos hay en el Array
  ...y algunos métodos => indexOf(), pop(), push(), shift(), map(), slice()...
*/

let users = ["Chloe", "Alice", "Eve", "Bob", "David"];
for (let u=0; u<users.length; u++) {
    console.log(users[u]);
}

// el acceso a elementos no definidos del Array son tareas que deben gestionarse con cuidado
console.log(users[5]); // undefined

// No podemos copiar un Array asignando su "valor" a otra variable
// En ese caso,  estamos copiando una referencia al objeto Array,
// por ello, ahora tendremos dos referencias al mismo Array
console.log("\n");
let newUsers = users;
console.log(users[3]); // Bob
console.log(newUsers[3]); // Bob

console.log("\n");
newUsers[3] = "John"; // modificamos el Array a través de la nueva referencia
console.log(users[3]); // John
console.log(newUsers[3]); // John

console.log("\n");
for (let u=0; u<users.length; u++) {
    console.log(users[u]);
}

// En vez de eso, tendríamos que utilizar el método slice()
// Si no se utilizan argumentos, slice() devuelve una copia del vector
// Hay dos parámetros opcionales en slice():
// 1. El índice del primer elemento a copiar. Si ese argumento es undefined, la copia empieza en el índice 0
// 2. Un valor una unidad mayor que el índice del último elemento a copiar. Por omisión, se asume la longitud del vector
console.log("\n");
let newUsersSlice = users.slice();
newUsersSlice[3] = "Bob"; // modificamos el Array a través de la nueva referencia
console.log(users[3]); // John
console.log(newUsersSlice[3]); // Bob

/*
Para insertar elementos en un Array, debemos utilizar sus posiciones...
 Pero eso sobrescribe el contenido previo de esas componentes.
 Hay otras operaciones que añaden nuevos elementos al principio o al final del vector, 
  desplazando o manteniendo su contenido previo, respectivamente.
 De manera similar, hay otras operaciones para eliminar elementos:
 => AÑADIR
    Al principio => unshift(elem1,...)
    Al final     => push(elem1,...)
 => ELIMINAR
    Del principio => shift()
    Del final     => pop()
*/

