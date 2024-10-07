//Repaso de ciclos y sentencias de constrol

//Estilización de los mensajes de salida 

const bg="linear-gradient(11deg, rgba(199, 0, 36, 1) 0%, rgba(255, 191, 126, 1) 33%, rgba(253, 129, 226, 1)86%)";
const style_console=`background: ${bg}; color: white; border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight: bold;`

//Personalizacion de las salidas de consola

console.warn("Práctica 06:Arreglos en Java Script")

console.log("%c1.- Si/Entonces", style_console);

//Le indica al programa que hacer o que no en base a una prueba lógica de verdadero p falso
let fechaActual=new Date();
console.log(`Hola, la fecha de hoy es: ${fechaActual.toString()}`);

//y si la necesitamos en formato local?
const fechaLocalMX=fechaActual.toLocaleString(`es-MX`,
{
        weekday:'long',
        year:'null',
        month:'long',
        day:'numeric',
        hour:'numeric',
        minute:'numeric',
        second:'numeric',
        hour12: false
        
        
    }
);

console.log(`en formato local (México): ${fechaLocalMX}`);

//si es antes de las 12 y saluda con un buenos dias 

if(fechaActual.getHours()<12)
    console.log(`Buenos dias, hoy es:${fechaLocalMX}`);

//Existe un extensor de la sentencia if (Si) que es else (en caso contrario)
if(fechaActual.getMonth()<=6)
    console.log(`Estas en la primera mitad del año`);
else
console.log(`Estas en la segunda mitad del año`);

//que pas si la validacion tiene varias operaciones 
