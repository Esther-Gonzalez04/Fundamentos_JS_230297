//Repaso de Arreglos

//Estilización de los mensajes de salida 

const bg="linear-gradient(11deg, rgba(199, 0, 36, 1) 0%, rgba(255, 191, 126, 1) 33%, rgba(253, 129, 226, 1)86%)";
const style_console=`background: ${bg}; color: white; border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight: bold;`

//Personalizacion de las salidas de cosnola

console.warn("Práctica 06:Arreglos en Java Script")

//DECLARACION DE UN ARREGLO

//Para aclarar un arreglo (array) de datos en JavaScript basta con agregar [], t dentro los datos que contendra el arreglo.

const mesesAnio=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre","Noviembre", "Diciembre"]

console.log("%c1.- Dreclaracón de un Arreglo (Array)", style_console);
console.log(mesesAnio);
console.table(mesesAnio);

//Acceder a los valores de un arreglo de datos para acceder al valor solo basta enviar la posición del dato que queremos dentro de los límites estabvlecidos. Siendo el límite inferiror 0 y el superior tamaño -1

console.log("%c2.-  Leer o recuperar los datos de un arreglo", style_console);

console.log(`El primer mes del año es: ${mesesAnio[0]}`)
console.log(`El último mes del año es: ${mesesAnio[mesesAnio.length-1]} `)

//No se puede acceder a los elementos con posiciones negativas o posiciones superirores al tamaño definido.

console.log(`El primer mes del año en la posición -1 es: ${mesesAnio[-1]}`)

console.log(`El treceabo mes del año de la posición es: ${mesesAnio[12]}`)

console.log(`¿Qué tipo de dato es un arreglo?: ${typeof(mesesAnio)}`)

//Al ser JavaScript un lenguaje debilmente tipado podremos crear arreglos mixtos de tipos de Datos

console.log("Declarar un arreglo mixto")
const saludar= function(nombre){return `Hola, ${nombre}!`}


//A l ser JavaScript un lenguaje debilmente tipados podremos crear arreglos mixtos de topos de datos 
let arregloMixto=["String", 9, 45.26,-200,-.16853,Symbol("Esther"), 'z', false, BigInt(1111112222222333334444444555566666777), true, {latitud:"20°18'0\" N" , longitud: "97°58'00\" W" , altitud:796}, null]

//Mostramos el contenido del objeto

console.log(arregloMixto)
console.table(arregloMixto)
console.log(typeof(arregloMixto));

console.log("Veririficamos los tipos de datos de los elementos del arreglo:")

console.log(`El dato en la posicion[0]=${arregloMixto[0]} y es del tipo: ${(typeof(arregloMixto[0]))}`);
console.log(`El dato en la posicion[0]=${arregloMixto[1]} y es del tipo: ${(typeof(arregloMixto[1]))}`);
console.log(`El dato en la posicion[0]=${arregloMixto[2]} y es del tipo: ${(typeof(arregloMixto[2]))}`);
console.log(`El dato en la posicion[0]=${arregloMixto[3]} y es del tipo: ${(typeof(arregloMixto[3]))}`);
console.log(`El dato en la posicion[0]=${arregloMixto[4]} y es del tipo: ${(typeof(arregloMixto[4]))}`);
console.log(`El dato en la posición[5]= ${arregloMixto[5].toString} y es del tipo: ${(typeof(arregloMixto[5]))}`)
console.log(`El dato en la posición[6]= ${arregloMixto[6]} y es del tipo: ${(typeof(arregloMixto[6]))}`)
console.log(`El dato en la posición[7]= ${arregloMixto[7]} y es del tipo: ${(typeof(arregloMixto[7]))}`)
console.log(`El dato en la posición[8]= ${arregloMixto[8]} y es del tipo: ${(typeof(arregloMixto[8]))}`)
console.log(`El dato en la posición[9]= ${arregloMixto[9]} y es del tipo: ${(typeof(arregloMixto[9]))}`)
console.log(`El dato en la posición[10]= ${arregloMixto[10]} y es del tipo: ${(typeof(arregloMixto[10]))}`)
console.log(`El dato en la posición[11]= ${arregloMixto[11]} y es del tipo: ${(typeof(arregloMixto[11]))}`)
console.log(`El dato en la posición[12]= ${arregloMixto[12]} y es del tipo: ${(typeof(arregloMixto[12]))}`)

console.log("%c3.-  Areglos multidimencionales (matrices)", style_console);

console.log("Declaracion de una amatriz regular")
//Una matriz es una estructura de datos multidimensional (tabla) de n columnas o m filas


let matriz=[[1,2,3,4], ['a','b','c','d']]
//esta es una matriz regular de 4x4

console.log(matriz)
console.table(matriz)
console.log("Declarando una matriz irregular");

const matrizIrregular=[["Juan", "Pedro", "María", "Inés"],[true, false, null], [9.2]];
console.log(matrizIrregular)
console.table(matrizIrregular)


//Accediendo a los valores de una matriz
console.log("Leyendo las propiedades de una matriz regular")
console.log(`Elemento en la posicion [0][0]: ${matriz[0][0]}]`)
console.log(`Elemento en la posicion [1][1]: ${matriz[1][1]}]`)
console.log(`Elemento en la posicion [1][2]: ${matriz[1][2]}]`)

//Accediendo a los valores de una matriz irregular

console.log("Leyendo las propiedades de una matriz irregular");
console.log(`Elemento en la posicion [0][0]: ${matrizIrregular[0][0]}]`)
console.log(`Elemento en la posicion [1][2], ¿Es María mayor de edad?: ${matrizIrregular[1][2]}]`)
console.log(`Elemento en la posicion [2][0], promedio de juan: ${matrizIrregular[2][0]}]`);

//Funciones y Métodos
//Los metodos d eun objeto simepre son invocados usando un . y al termino se delimitan los parametros entre (), eb caso de que no lleve (), no es un metodo sino una propieda 


console.log("%c4.-  Funciones o métodos de los arrglos (Array Methos or Array Functions)", style_console);
console.log("¿Cómo saber cual es el tamaño de un arreglo?");
console.log(`mesesAnio es un arreglo de tamaño: ${mesesAnio.length}`)
console.log(`arregloMixto es un arreglo de tamaño ${arregloMixto.length}`)
console.log("¿Qué pasa con los multidimensionales?")
console.log(`matriz es un arreglo de tamaño: ${matriz.length}`)
console.log("mmm, eso me da el tamaño de numero de las filas de la matriz, pero cómo saber el número de columna?")
console.log(`matriz regular tiene un numero de ${matriz[0].length}`)
console.log("¿Y para las iregulares?")
//para saber la dimension de una matriz irregular podemos hacer el uso de un ciclo 

let numeroFilas= matrizIrregular.length
for(let i=0; i<numeroFilas; i++)
    console.log(`La longitud de la fila  ${[i]} es = ${[matrizIrregular[i].length]}`)