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

    console.log("%c5.- Agregar un nuevo elemento a un arreglo (PUSH)", style_console);

    let estudiantes =["Angel Refugio", "Idai Vargas", "Daniel Bravo", "Esther González", "Ailton Artiaga"]
    console.log("Los elementos actuales del arreglo son:")
    console.table(estudiantes)
    console.log("Agregamos  a un nuevo estudiante llamdo: Abril Guzmán")
    estudiantes.push("Abril Guzmán")
    console.log("Despúes de agregar los elementos del arreglo son:")
    console.table(estudiantes)
    console.log("¿Qué pasa con los mixtos?")
    console.log("El arregloMixto actualmente tiene los siguientes elementos:")
    console.table(arregloMixto);
    console.log("Agregamos la palabra: \"Hola\", como nuevo elemento")
    arregloMixto.push("Hola");
    console.log("Y también agregamos el número -312881787448415.23597518864 siendo este un BigInt");
    arregloMixto.push(BigInt(-31288178744841522555.23597518864));
    console.log("Despúes de estas dos operaciones, el arreglo queda con los isguientes elementos:");
    console.table(arregloMixto);

    console.log("%c6.- Agregar un nuevo elemento a un arreglo (UNISHIFT) en la posicion inicial", style_console);
    console.table(estudiantes)
    console.log("Ahora agregaremos a Abishai Flores, al comienzo del arreglo.")
    estudiantes.unshift("M");
    console.log("La lista actual es:")
    console.table(estudiantes)


    console.log("%c7.- Eliminar el elemento de un arreglo en la última posición (POP)", style_console);
    console.log("El arreglo tiwnw los siguientes elementos:")
    console.table(estudiantes)
    console.log("Para este caso, eliminaremos Abril Guzmán en la última posición")
    estudiantes.pop();
    console.log("Despúes de eliminar el arreglo quedo de la siguiente manera:")
    console.table(estudiantes);

    console.log("%c8.- Eliminar el elemento de un arreglo en la última posición (SHIFT)", style_console);
    console.log("El arreglo tiene los siguientes elementos:")
    console.table(estudiantes)
    console.log("Para este caso, eliminaremos Abishai Flores en la primera posición")
    estudiantes.shift();
    console.log("Despúes de eliminar el arreglo quedo de la siguiente manera:")
    console.table(estudiantes);


    console.log("%c9.- Modificar un arreglo en un arreglo nuevo con poición definidas (SPLICE)", style_console);
    console.log("El arreglo original tiene los elementos:")
    console.table(estudiantes)
    console.log("Dividir el arreglo en uno nuevo eliminando ciertos elementos en base a su posición")
    //cuando la función splice recibe un solo parámetro eliminará los elementos de esta posición en adelante
    estudiantes.splice(2)
    console.table(estudiantes);
    //cuando la fución splice recibe 2 parametr9*os elimina todos los elemenos que no estén en ese rango 

    estudiantes.push("Zyanta Zacatenco");
    estudiantes.push("ZTania Ibarra");
    estudiantes.push("Juvenal Viveros");
    estudiantes.push("Marcos Rios");
    estudiantes.push("Jonathan Baldemar");
    console.log("Se han agregado 5 nuevos estudiantes, por lo que el arreglo es:")
    console.table(estudiantes);
    console.log("Ahora ya tenemos los elementos suficientes para aplicar el método splice con dos parámetros qeu seran 3,5")
    estudiantes.splice(3,5)
    console.log("Resultado en:");
    console.table(estudiantes);

    //splice sirve tambien para insertar elementos en posiciones específicas, ahora necesitamos insertar a: "Antonio Ocpaco" entre "Angel Refugio" "Idai Vargas"

    console.log("Ahora vamos a insertar a \"Antonio Ocpaco\" entre los elementos de la posicion 0 y 1")
    estudiantes.splice(1,0,"Antonio Ocpaco")
    console.log("Resultado en:");
    console.table(estudiantes);

    // Tambien splice sirve para reeemplazar lementos por otros, en este caso reemplazaremos a "Angel Rufino" por "Brandon Leon"
    console.log("Ahora vamos a reemplazar a \"Angel Rufino\" entre los elementos de la posicion \"Brandon Leon\"")
    estudiantes.splice(0,1,"Brandon Leon")
    console.log("Resultado en:");
    console.table(estudiantes);

    console.log("%c10.- Métodos para la manipulación de Arreglos INMUTABLES", style_console);
    let signosZodiacales=["Aries","Tauro","Géminis", "Cáncer", "Leo", "Virgo", "Libra", "Escorpio", "Sagitario","Capricornio","Acuario", "piscis"]

    //Destructuración de Arreglos
    let[signo1, , signo3, , , ,signo7, , , , ,]=signosZodiacales;
    console.log(`El primer signo Zodiacal es: ${signo1}`)
    console.log(`El segundo signo Zodiacal es: ${signo3}`)
    console.log(`El septimo signo Zodiacal es: ${signo7}`)

    //Congelamos el arreglo volviendolo INMUTABLE;
    Object.freeze(signosZodiacales);

    //Filtrado de Datos
    console.log("%c11.- Filtrado de Elemento dentro de un arreglo utilizando el método FILTER", style_console);
    console.table(estudiantes)

    //antes de filtrar datos llenamos el arreglo con los 10 elementos
    estudiantes.push("Ángel Rufino");
    estudiantes.push("Esther González");
    estudiantes.push("Lorena Galindo");
    estudiantes.push("Jonathan Ramírez");
    estudiantes.push("Ailton Artiaga");
    estudiantes.push("Tania Ibarra");
    console.table(estudiantes);
    

    Object.freeze(estudiantes)
    //Filter es método que rrecorre los elementos de un arreglo hacieno alguna tarea en específico, lo que tenemos que considerar es que este nuevo arreglo resultante es un objeto nuevo que puede ser mutable. 

    console.log("Filtrado los primeros 5 elementos");
    let nuevoEstudiantes=estudiantes.filter((estudiante,index)=>index<5);
    console.table(nuevoEstudiantes);

    console.table(filtaPrimeros5(estudiantes));

    //filtrar a los estudiantes que su nombre tenga más d 15 caracteres

    let nuevoEstudiantesNombre=estudiantes.filter((estudiante)=>estudiante.length>15);
    console.table(nuevoEstudiantesNombre)


    //intentamos modificar el arreglo inmutable
   /* estudiantes.pop();
    console.table(estudiantes);*/

    //intentamos modificar el nuevo arreglo que no ha sido congelado
    nuevoEstudiantes.unshift("Diego Tecorralco")
    console.table(nuevoEstudiantes);
    

function filtaPrimeros5(arragloEstudiantes){
    let listaFiltrada=[]
    for(let i=0; i<5; i++){
        listaFiltrada.push(arragloEstudiantes[i]);
    }

    return listaFiltrada;
}

console.log("%c12.- Filtrado de Elemento dentro de un arreglo utilizando el método MAP", style_console);
console.log("Imprimir los elementos actuales de zignosZodiacales:")
console.log(signosZodiacales);

//que podemos hacer si necesitamos el mismo arreglo pero ahora con todos sus elmentos con letras mayúsculas

console.table(signosZodiacales.map(signoZodical=>signoZodical.toUpperCase()));

//Reducción de elementos de un arreglo, se usa cuando debemos hacer operaciones matemáticas o cuantitativas a un arreglo, como obtener totales, la idea es reducir la listaa un valor más simplificado.

const costosListaComprar =[15,52.50,16.90,32.50,28,105,45.2,94.10]
//Cómo podemos calcular el total de una lista de costos de un caerrito de compras 
console.log("Los precios son:")
console.table(costosListaComprar)
console.log(`El total de la compra es: ${costosListaComprar.reduce((total, precio)=>total+precio,0).toFixed(2)}`)

