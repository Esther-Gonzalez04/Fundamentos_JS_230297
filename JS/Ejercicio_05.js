//Repaso de ciclos y sentencias de constrol

//Estilización de los mensajes de salida
const bg = "linear-gradient(11deg, rgba(0,199,36,1) 0%, rgba(129,255,26,1) 33%, rgba(140,250,26,1) 80%)";
const style_console = `background: ${bg}; color: white; border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight: bold`
//Personalizacion de las salidas de consola

console.warn("Práctica 07:Arreglos en Java Script")

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