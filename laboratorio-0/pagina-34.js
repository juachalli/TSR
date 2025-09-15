/*
 A veces, podemos controlar la coerción de tipos usando 
algunos operadores que convierten un tipo en otro.
 => Ejemplos: Boolean(), String(), Number, parseInt(), parseFloat()..
*/

console.log('Number(true)',typeof(Number(true)), Number(true)); // 1
console.log('Number(false)',typeof(Number(false)), Number(false)); // 0
console.log('Number("10"")',typeof(Number("10")), Number("10")); // 10
console.log('Number("   10")',typeof(Number("   10")), Number("   10")); // 10
console.log('Number(10 20 )',typeof(Number("10 20")), Number("10 20")); // NaN
console.log('Number("John")',typeof(Number("John")), Number("John")); // NaN
console.log('String(10)',typeof(String(10)), String(10)); // "10"
console.log('String(10.6)',typeof(String(10.6)), String(10.6)); // "10.6"
console.log('String(true)',typeof(String(true)), String(true)); // "true"
console.log('parseInt("10")',typeof(parseInt("10")), parseInt("10")); // 10
console.log('parseInt("10.33")',typeof(parseInt("10.33")), parseInt("10.33")); // 10
console.log('parseInt("10 years old")',typeof(parseInt("10 years old")), parseInt("10 years old")); // 10
console.log('parseInt("He is 10 years old")',typeof(parseInt("He is 10 years old")), parseInt("He is 10 years old")); // NaN
console.log('parseFloat("10")',typeof(parseFloat("10")), parseFloat("10")); // 10
console.log('parseFloat("10.33")',typeof(parseFloat("10.33")), parseFloat("10.33")); // 10.33
console.log('parseFloat("10 years old")',typeof(parseFloat("10 years old")), parseFloat("10 years old")); // 10
console.log('parseFloat("He is 10 years old")',typeof(parseFloat("He is 10 years old")), parseFloat("He is 10 years old")); // NaN


// Ejercicio: 
console.log('\nEjercicio:');
// => Determinar el resultado de estas operaciones:
 console.log('Boolean("false")',Boolean("false"));
 console.log('Boolean(NaN)',Boolean(NaN));
 console.log('Boolean(undefined)',Boolean(undefined));
 console.log('Boolean("undefined")',Boolean("undefined"))

 