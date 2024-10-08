//Repaso de ciclos y sentencias de constrol

//Estilización de los mensajes de salida
const bg = "linear-gradient(11deg, rgba(0,90,36,1) 0%, rgba(0,90,26,1) 33%, rgba(0,90,26,1) 80%)";
const style_console = `background: ${bg}; color: white; border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight: bold`
//Personalizacion de las salidas de consola

console.warn("Práctica 06:Arreglos en Java Script")

console.log("%c1.- Si/Entonces", style_console);

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

if(fechaActual>= inicioPrimavera || fechaActual< inicioVerano)
{
    console.log("Estamos en PRIMAVERA...")

}