//Repaso de ciclos y sentencias de constrol

//Estilización de los mensajes de salida
const bg = "linear-gradient(11deg, rgba(0,199,36,1) 0%, rgba(129,255,26,1) 33%, rgba(50,250,26,1) 60%)";
const style_console = `background: ${bg}; color: white; border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight: bold`
//Personalizacion de las salidas de consola

console.warn("Práctica 07: Repaso de ciclos y sentencias de control")

console.log("%c1.- Condicionales - Si/Entonces... (IF)", style_console);

//Le indica al programa que hacer o que no en base a una prueba lógica de verdadero p falso
let fechaActual=new Date();
console.log(`Hola, la fecha de hoy es: ${fechaActual.toString()}`);

//y si la necesitamos en formato local?
const fechaLocalMX= fechaActual.toLocaleString('es-MX', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false
});

console.log(`en formato local (México): ${fechaLocalMX}`)

//Si es antes de las doce saluda con buenos días

if(fechaActual.getHours()<12)
    console.log(`Buenos días, hoy es ${fechaLocalMX}`)

//Existe un extensor de la sentencia if(Sí) que es else (En Caso contrario)
if(fechaActual.getMonth()<=6)
    console.log(`Estas en la primera mitad del año`)
else
    console.log(`Estas en la segunda mitad del año.`)


//que pasa si la validación tiene varias operaciones 
const anio= fechaActual.getFullYear()
let inicioPrimavera= new Date(anio, 2, 21);
let inicioVerano= new Date(anio, 5, 21);
let inicioOtonio= new Date(anio, 8, 23);
let inicioInvierno= new Date(anio, 11, 21);

let horarioVerano= false;

if(fechaActual>= inicioPrimavera && fechaActual< inicioVerano)
{
    console.log("Estamos en PRIMAVERA...")
    console.log("Inicia la floracion de muchas plantas...")
    console.log("Los días son más largos y las noches más cortas")
    console.log("Muchos animales despiertan de la inbernación")
  

    estacion="Primavera"
    horarioVerano=true;
}
else if(fechaActual>= inicioVerano && fechaActual< inicioOtonio)
{
    console.log("Estamos en VERANO...")
    console.log("En esta termporada abundan los días Soleados y Calurosos")
    console.log("En esta termporada el indice de turismo vacacional sube ")
    console.log("Mucha gente busca realizar actividades al aire libre")
    
    estacion="Verano"
    horarioVerano=true;
}
else if(fechaActual>= inicioOtonio && fechaActual< inicioInvierno)
{
    console.log("Estamos en OTOÑO...")
    console.log("Los árboles suelen cambiar de follajes")
    console.log("Se registraran temperaturas mas templadas")
    console.log("Los animales comienzan con la recoleccion de alimento y preparan su espacio para la invernación")
    
    estacion="Otoño"
    horarioVerano=true;
}
else
{
    console.log("Estamos en INVIERNO...")
    console.log("En estos días los dias son mas cortos y las noches más cortas")
    console.log("En algunas regiones suele nevar")
    console.log("Dado las bajas temperaturas, se recomienda abrigarse")
    estacion="Invierno"
    horarioVerano=false;
}

console.log("%c2.- Operador Ternario (validación?cuple:no_cuple)", style_console);

//En javaScript existe una operación simplificada que valida si una condición se cumple o no, y que hacer en cada caso

const edadPersona=18;
const mayoriaEdadMX=18;
const mayoriaEdadUS=21;
let evaluarMayoriaEdad=(edad)=>
    edad>18 ? "Eres mayor de edad": "No eres mayor de edad."
console.log("Evaluando la mayoria de edad de una persona ...")
console.log(evaluarMayoriaEdad(edadPersona))

//Sin embargo tenemos que considerar que la mayoria de edad varia en cada país por cuestiones legales, por loq ue debemos considerar un segundo parámetro en la evaluación

evaluarMayoriaEdad=(edad,pais)=>
(edad>=18&& pais=="MX")?`en ${pais} eres mayor de edad.`:`En ${pais} No eres mayor de edad.`

console.log("Evaluando la mayoria de edad un una persona en Estados Unidos")
console.log(evaluarMayoriaEdad(edadPersona, "USA"))

console.log("%c3.- SWITCH - CASE (Elección por valor definido)", style_console);

//Calculando tu generación en base a tu edad
let anioNacimiento;
let asignaGeneracion=(anioNacimiento)=>{

    switch(true){
        case(anioNacimiento<1968):
        return "Baby Boomer";

        case(anioNacimiento>1968 && anioNacimiento<=1980):
        return "Generación X";

        case(anioNacimiento>1980 && anioNacimiento<=1994):
        return "Generación Y/Millennial";

        case(anioNacimiento>1994 && anioNacimiento<=2009):
        return "Generación Z/Centennial";

        case(anioNacimiento>2009):
        return "Genración Alfa";
    }
}

console.log(`Dado que nací en el año 2000 soy de la generación ${asignaGeneracion(2000)}`)

console.log("%c4.- Manejo de Excepciones (TRY/CATCH)", style_console);

//En algunos ocaciones existiran errores que no son culpa del programa, sino del usuario, la red, el SO o incluso de un siddleware.,pero que sin duda debemos controlar para evitar las falla de ejecución

//sino lo puede realizar, lo ignora y sigue con el codigo
console.log("Intentamos dividir: 0/10, el resultado es:")

try{
    let result= 0/10; //dividir 0 entre un entero
    console.log(result)
}
catch(error)
{
    console.log("Ocurrio un error: "+error.message);
}


console.log("Intentamos dividir: 10/0, el resultado es:")

try{
    let result= 10/0; //dividir un entero entre 0
    console.log(result)
}
catch(error)
{
    console.log("Ocurrio un error: "+error.message);
}

console.log("Intentamos dividir: \"a\"/0, el resultado es:")
try{
    let result= "a"/0; //dividir una letra entre 0
    console.log(result)
}
catch(error)
{
    console.log("Ocurrio un error: "+error.message);
}

console.log("Intentamos dividir: a/0, el resultado es:")
try{
    let result= a/0; //dividir una variable no definida entre 0
    console.log(result)
}
catch(error)
{
    console.log("Ocurrio un error: "+error.message);
}

console.log("Intentamos dividir: el valor de la variable x entre el valor de la variable y, el resultado es:")
try{
    let x=8, y=2, result=x/y; //dividir dos variables definidas 
    console.log(result)
}
catch(error)
{
    console.log("Ocurrio un error: "+error.message);
}


console.log("%c5.- Control de ciclos (BREAK / CONTINUA)", style_console);

//En algunas oacasiones será importante detener un ciclo de manera abrupta para controlar casos especiales de un ciclo 

console.log("Vamos a contar del 1 al 10..")
for(let num=1; num<=10; num++)
        console.log(num);

console.log("Ahora necesitamos que si llega al 7 para de contar ...suponinedo que solo por hoy es de mala suerte...")
for(let num=1; num<=10; num++)
        if(num==7)
            break;
        else
        console.log(num);

console.log("Ahora necesitamos que si llega al 7, te saltes ese número y continues")

        for(let num=1; num<=10; num++)
        {
            if(num==7){
                continue;
            }
               
            console.log(num);
        }
        
console.log("%c6.- Ciclo iterativo -(FOR)", style_console);
//Recorre de manera iterativa (i), de incremental o decremental

console.log("Los días de la semana son en orden ascendente son:")
let dias=["Domingo","Lunes", "Martes", "Miercoles", "Jueves","Viernes", "Sábado"]

for(let i=0; i<dias.length; i++){
    console.log(dias[i])
}
        

console.log("Ahora vamos a imprimir los meses del año en orden descendente...")
let meses=["Enero","Febrero", "Marzo", "Abril", "Mayo","Junio", "Agosto","Septiembre","Octubre", "Noviembre", "Diciembre"]
for(let i=11; i>=0; i--)
        {
            console.log(dias[i])
        }

console.log("%c7.- Ciclo condicional - (WHILE)", style_console);
//Estos ciclos (BUCLE) dependen de una condición para continuar ejecutándose

let finDeSemana=false;
let mensaje="";
let j=0;
//while(j<dias.length){
while(j<dias.length){
    switch(j){ //Usamos 'j' para que coincida con el índice
        case 0: 
            finDeSemana=true;
            mensaje="Domingo de tarea jajajaja"
            break;
        case 1:
            finDeSemana=false;
            mensaje="Lunes, noooo el peor día";
            break;
        case 2:
            finDeSemana=false;
            mensaje="Martes, pues ya que, a seguir chambeando";
            break;
        case 3:
            finDeSemana=false;
            mensaje="miercoles de hueva";
            break;
        case 4:
            finDeSemana=false;
            mensaje="jueves de racismo";
            break;
        case 5:
            finDeSemana=false;
            mensaje="al fin virnecito y el cuerpo lo sabe";
            break;
        case 6:
            finDeSemana=true;
            mensaje="Sábado de limpiar la casa";
            break;
    }

    //Imprimir todos los días
    //console.log(`Día ${j} ${dias[j]}`)
    //console.log(`Mensaje del día: ${mensaje}`);
    //j++;

    //Imprimir los días laborales
    if(!finDeSemana){
        console.log(`Día ${j} ${dias[j]}`)
        console.log(`Mensaje del día: ${mensaje}`);
    }
    j++;

    //Imprimir fin de semana
    //if(finDeSemana){
    //    console.log(`Día ${j} ${dias[j]}`)
    //    console.log(`Mensaje del día: ${mensaje}`);
    //}
    //j++; 
}

console.log("%c8.- Ciclo condicionales, que se ejecuta al menos una vez-(DO WHILE)", style_console);

//Simulamos una lista de episodios de una temporada 
let episodios=[
    "Episodio 1: Lucifer, Stay. Good Devil.",
    "Episodio 2: The Would-Be Prince of Darkness.",
    "Episodio 3: Manly Whatnots.",
    "Episodio 4: Sweet Kicks",
    "Episodio 5: Favorite Son"
]

let indice =0;
let continuarViendo=true; //Esta variable simula la decisión del usuario de continuar viendo

do{
    console.log(`Reproduciendo ${episodios[indice]}`);

    //simulamos la reproducción del episodio
    indice++;

    //simulamos una pregunta al usuario si desea seguir viendo
    if(indice<episodios.length){
        continuarViendo=confirm("¿Deseas continuar con el siguiente episodio?");

    }else{
        continuarViendo=false;//cuando se acaba la lista de episodios
    }
}while(continuarViendo&&indice<episodios.length);

console.log("Fin de la reproduccion");

//ciclo para recorrer objetos iterables como mapas, arreglos, cadenas y conjunto de datos 

console.log("%c9.- Ciclo para recorrer elementos finitos.-(FOR...OF)", style_console);

let seriesTrending=[
    {nombre:"The witcher", temporadas: 3, totalViewers: "1.5M", totalReprods: "3.0M"},
    {nombre:"Strenger Things", temporadas: 4, totalViewers: "6.5M", totalReprods: "10M"},
    {nombre:"The Boys", temporadas: 3, totalViewers: "3.2M"},
    {nombre:"Loki", temporadas: 2, totalReprods: "250K"},
    {nombre:"Succession", temporadas: 4},

];

//Usando for...for para recorrer la lista
for(let serie of seriesTrending){
    console.log(`serie:${serie.nombre}, Temporadas: ${serie.temporadas}`);
}

try{
    console.log(`La ultima serie leida fué:${serie.nombre}`);

}
catch(error){
    console.log("Mensaje de error:"+error.message)
}

console.log("%c10.- Ciclo para recorrer las propiedades de elementos finitos-(FOR...INT)", style_console);

//Usando for... in para recorrer cada serie

for(let i in seriesTrending){
    console.log(`serie ${parseInt(i) + 1}:`);
    for(let propiedad in seriesTrending[i]){
        console.log(`${propiedad}:${seriesTrending[i][propiedad]}`);
    }
    console.log(`--------------------`);
}

console.log("%c11.- Ciclos ininterrumpidos para cad uno de los elementos del arreglo (FOR EACH)", style_console);

//Lista de series TV trending con temporadas, viewers y reproducciones
let seriesTrending2=[
    {nombre:"The witcher", temporadas: 3, Viewers:8000000, reproducciones:25000000},
    {nombre:"Strenger Things", temporadas: 4, Viewers:120000000, reproducciones:40000000},
    {nombre:"The Boys", temporadas: 3, Viewers:7000000, reproduccion:200000000},
    {nombre:"Loki", temporadas: 2, Viewers:9000000, reproducciones:30000000},
    {nombre:"Succession", temporadas: 4,Viewers:6000000, reproducciones:18000000},
    {nombre:"The Walking Dead", temporadas: 16,Viewers:16000000, reproducciones:36000000}
];

//usando foreach para recorrer cada serie y calcular la calificación
seriesTrending2.forEach((serie,index)=>{
    let calificacion=(serie.reproducciones/serie.Viewers).toFixed(2);//Caclula la calificacion y la rendondea a dos decimales
    console.log(`Serie${index+1}:`);
    console.log(`Nombre: ${serie.nombre}`);
    console.log(`Temporadas: ${serie.nombre}`);
    console.log(`Viewers: ${serie.Viewers}`);
    console.log(`Reproducciones: ${serie.reproduccion}`);
    console.log(`Calificacion: ${calificacion}`);//muestra la calificación
    console.log(`-------------------`);
    });

console.log("%c12.- Filtrado, transformación y búsqueda de elementos-(.filter(),.map(),.includes())", style_console);

//Usando Filter para filtrar, y map para transformar la información 
//Lista de serie que queremos verificar 

seriesDeseadas=["The walking Dead","The Boys", "Loki"];

//Usando map e inlcudes para filtrar y obtner los nombres de series con 3 temporadas
 let seriesConTresTemporadas=seriesTrending2

 .filter(serie=>serie.temporadas<=3) // Filtramos las series que tienen 3 temporadas
 .map(serie=> serie.nombre) //Obtenemos solo los nombres de esas series
 .filter(nombre=>seriesDeseadas.includes(nombre));//filtramos las que están en la lista de series deseadas

 //mostrar los resultados
 console.log("Series con 3 temporadas que están en la lista deseada:");
 console.log(seriesConTresTemporadas);
