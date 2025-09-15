
/*
Un objeto es un conjunto no ordenado de pares clave / valor (donde "clave" es equivalente a una "propiedad").
  El valor de esas claves o propiedades puede ser cualquier literal de tipos primitivos, función u otro objeto.
*/
console.log("\nObject person");
let person = {
    name: "Alice",
    age: 30,
    isEmployed: true,
    greet: function() {
        console.log("Hello, my name is " + this.name);
    },
    address: {
        street: "123 Main St",
        city: "Wonderland"
    }
};

console.log(person);


/*
Los objetos también pueden ser creados de manera dinámica
¡Cuidado!! Como la declaración/modificación dinámica es posible, 
si escribimos incorrectamente el nombre de cualquier propiedad 
y le asignamos un valor... No habrá errores... 
¡pero ese nombre incorrecto creará otra propiedad en el objeto!!
*/
console.log("\nObject person2");
let person2 = {};
person2.name = "Alice";
person2.age = 30;
person2.isEmployed = true;
console.log(person2);

person2.badname = "Bob"; // Error tipográfico en el nombre de la propiedad
console.log(person2);

/*
Ejercicio: explicar qué pasa cuando accedemos a una propiedad no definida.
  Probar estos ejemplos para responder 
 */
console.log("\nObject person3");
let person3 = {};
person3.name = "Peter";
person3.age = 25;
console.log(person3.district); // undefined


console.log("\nObject person4");
function printDistrict(who) {
    console.log("District: " + who.district);
}

let person4 = {
    name: "Mary",
    age: 28,
    address: {
        city: "Valencia",
        street: "Tres Cruces",
        number: 12
    },
};
printDistrict(person4); // undefined


