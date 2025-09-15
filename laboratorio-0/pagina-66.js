
/*
Ejercicios:
 Escribir una función doCheckPasswd() con tres parámetros:
     input
     correctPassword
     func
 Esa función:
     Compara las cadenas pasadas en los primeros dos argumentos.
     Si son iguales, entonces se llama a la función pasada como tercer argumento.
*/

function doCheckPasswd(input, correctPassword, func) {
    if(input === correctPassword) {
        func();
    }
}

doCheckPasswd("Erroneus","Correct",function() {console.log("Password OK");});
doCheckPasswd("Correct","Correct",function() {console.log("Sending data");});

