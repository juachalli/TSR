
/*
JSON (JavaScript Object Notation) es un formato de texto 
utilizado para "serializar" objetos cuando deban transmitirse por la red
*/
let person = {
    name: "Mary",
    age: 28,
    address: {
        city: "Valencia",
        street: "Tres Cruces",
        number: 12
    },
    isEmployed: true,
    greet: function() {
        console.log("Hello, my name is " + this.name);
    },    
};

console.log("\nconsole.log(person);");
console.log(person); // Convertir objeto a JSON

console.log("\ncconsole.log(JSON.stringify(person));"); 
console.log(JSON.stringify(person)); // Convertir objeto a JSON

/*
Podemos utilizar un bucle for(variable in objeto) 
para procesar cada propiedad en un objeto dado
*/
console.log("\nperson properties:");
for (let i in person) {
    console.log("Property " + i + ": " + person[i]);
}

/*
Ejercicio:
Extender el ejemplo anterior, mostrando las propiedades y 
valores de la propiedad "address"
*/
console.log("\nperson properties with object:");
for (let i in person) {
    if (typeof person[i] === 'object') {
        for (let j in person[i]) {
            console.log("Property " + i + "." + j + ": " + person[i][j]);
        }
    } else {
        console.log("Property " + i + ": " + person[i]);
    }
}

