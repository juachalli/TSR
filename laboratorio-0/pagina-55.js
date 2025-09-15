
/*
El concepto de "función" es similar al utilizado en 
cualquier otro lenguaje de programación.
Si una función no utiliza la instrucción "return", entonces 
su ejecución devuelve el valor undefined.
*/

function add (x,y,z) {
    console.log("x: " + x + ", y: " + y + ", z: " + z);
    return x + y + z;
}

/*
a) Cuando una función se llama con menos argumentos de los declarados, 
   entonces los parámetros no utilizados reciben el valor undefined.
b) Cuando una función se llama con más argumentos de los previstos, 
   entonces los sobrantes son descartados.
*/

console.log("add(1,2,3,): " + add(1,2,3,)); // 6
console.log("add(1,2): " + add(1,2)); // NaN
console.log("add(null): " + add(null)); // NaN
console.log("add(1,2,3,4,5): " + add(1,2,3,4,5)); // 6

/*
 Las funciones que tengan un número desconocido de 
 argumentos pueden utilizar el parámetro "..."
  Para ello, el identificador del último parámetro tendría que ir 
   precedido por puntos suspensivos, es decir, "...id"
  Ese parámetro es un Array que recoge los argumentos restantes.
 */
function addAll(x,y,...others) {
    let sumOthers=0;
    if(others.length>0) {
        for(let o of others) {
            sumOthers += o;
        }
    }
    return x + y + sumOthers;
}
console.log("addAll(1,2,3,4,5): " + addAll(1,2,3,4,5)); // 15

/*
Ejercicio:
  Si asumimos el programa mostrado en la página anterior, ¿cuál 
   será el resultado de la línea siguiente?
*/
console.log("addAll({prop1: 12}, 2, 3)", addAll({prop1: 12}, 2, 3));
console.log("addAll(1, 2,{prop3: 3})", addAll(1, 2,{prop3: 12}));

/*
Los argumentos se pasan...
  Por valor si pertenecen a un tipo primitivo
  Por referencia cuando son objetos
*/

function changeColour(car,newColour) {
    return car.colour = newColour;
}

function changeCar(car) {
    car={brand:"Ferrari", colour:"red"};
    console.log("changeCar",car);
    return car;
}

let myCar = {brand:"Volvo", colour:"Grey"};
console.log("1",myCar);
console.log("2a",changeColour(myCar,"Blue"));
console.log("2b",myCar);
changeColour(myCar,"Blue")
console.log("3",myCar);
changeCar(myCar);
console.log("4",myCar);

/*
JavaScript maneja las funciones como objetos comunes, por ello  pueden ser...
  Utilizadas como valores, y asignadas a variables
  Utilizadas como argumentos en llamadas a otras funciones
  Retornadas como resultado de otras funciones
 */
function square(x) { return x * x };
let a = square;
let b = a(3);
let c = a;
console.log(a);
console.log(b);
console.log(c);


function product(a,b) { return a * b };
function add(a,b) { return a + b };
function substract(a,b) { return a - b };

let aritmeticOperations = [product, add, substract];
console.log("aritmeticOperations",aritmeticOperations[1](2,3));

/*
Las funciones pueden ser definidas anónimamente, es 
decir, sin darles ningún nombre.
  El programa siguiente es equivalente al mostrado en la página anterior
*/

let aritmeticOperations2 = [
    function(a,b) { return a * b },
    function(a,b) { return a + b },
    function(a,b) { return a - b }
];
console.log("aritmeticOperations2",aritmeticOperations2[1](2,3));


// Las funciones anónimas son ampliamente utilizadas 
// como argumentos en la invocación a otras funciones.
function computeTable(n,fn) {
    for (let c=1;c<11;c++) {
        fn(n*c);
    }
}
computeTable(5, function(v) { console.log(v) });
computeTable(7, v => console.log(v) ); // Arrow function



