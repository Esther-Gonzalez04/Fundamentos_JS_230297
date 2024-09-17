//comentarios de una solinea

/* comentarios multi línea

*/

//Ejercicio 01: Declaración de variables 

// a) Var

var miNombre ="Esther";
var misApellidos;
var miEdad =23;

//El obejto de consola nos permite enviar datos a la terminal y poder vizualizar de una variable o el resultado de una funcion o método
console.warn("---Declaracion de variables usando: VAR");
console.log("Intentando leer las variables:", miNombre,misApellidos);

misApellidos="González Peralta"
console.log("Ya que ambas fueron inicializadas vuelvo a intentar leerlas:", miNombre,misApellidos);

//UNA VARIABLE PUEDE CAMBIAR DE VALOR EN EL PROCESO DE EJECUCION DEL PROGRAMA
// B)

console.warn("--declaracion de variables del tipo constante usandi: CONST")
const miUniversidad="UT Xicotepec";
const miMatricula=2399999;

console.log("Hola, ", miNombre, " ",misApellidos, "se que estudias actualmente:",miUniversidad, "asigna la matricula:",
    miMatricula, "y tiene una edad de:", miEdad, "años");
    

    console.log("Analizando los datos puedo deducir que:")
    console.log("miNombre es del tipo:",typeof(miNombre))
    console.log("misApellidos es del tipo",typeof(misApellidos))
    console.log("miUniversidad es del tipo",typeof(miUniversidad))
    console.log("miMatricula es del tipo",typeof(miMatricula))
    console.log("miEdad es del tipo",typeof(miEdad))

let  miFechaNacimiento="2000-11-04";
let miColorFavorito;

console.warn("declaracion de variables locales usando: LET")
console.log("Genial, te voy conociendo mejor, ahora se que tu naciste el:", miFechaNacimiento, "y tu color favorito es: mmmmmmm dejame pensar...")
miColorFavorito="Naranja";
console.log(`creo que es ${miColorFavorito}le atiné?`)


console.log("analizando los datos puedo decir que:");
console.log("miColorFvaorito:",typeof(miColorFavorito))
console.log("miFechaNacimiento es del tipo:",typeof(miFechaNacimiento))


