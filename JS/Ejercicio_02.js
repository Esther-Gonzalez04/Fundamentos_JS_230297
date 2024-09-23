//tipos de datos

//1. uderfined - (NULL)

console.warn("--- Tipo de dato UNDEFIEND")
let cliente;
console.log(`El cliente es: ${cliente}`);
console.log(`El tipo de dato de la variable del cliente es:${typeof(cliente)}`);

cliente="Juan Romero"
console.log(`El cliente es: ${cliente}`);
console.log(`El tipo de dato de la variable del cliente es:${typeof(cliente)}`);


cliente=19227
console.log(`El cliente es: ${cliente}`);
console.log(`El tipo de dato de la variable del cliente es:${typeof(cliente)}`);

//console.log(`El cliente ha realizado ${NumCompras} en este mes`);

//undefined es el tipo de dato que por defecto se asigna a variables no inicializada o no declaradas 

// 2. BOOLEAN -Boleanos- TRUE-FALSE (Falso/Verdaero)
console.warn("--- Tipo de Dato : BOOLEAN (Boleano/False");
let esPremium = "No lo sé";
console.log(`¿Es el cliente Premium?: ${esPremium}`)
console.log(`El tipo de dato de la variable esPremium es: ${typeof(esPremium)}`);

console.log("Asignando el valor /true/ a la variable.")
esPremium="true"
console.log(`El tipo de dato de la variable esPremium es: ${typeof(esPremium)}`);

console.log("Asignando el valor true a la variable.")
esPremium=true
console.log(`El tipo de dato de la variable esPremium es: ${typeof(esPremium)}`);

console.log(`¿Es el cliente Premium?: ${esPremium}`);
console.log("cambiando el valor de esPremium a false")
esPremium=0;

if(esPremium)
    console.log("El cliente pago por usar el servicio.")
else
    console.log("El cliente recibe los servicios gratuitos");

// 3. Number (Números)

var cantidad;
const costo_producto = 10.50
let saldo_cuenta = -2500.40
let monto_transaccion;

console.warn("--- tipo de dato -NUMBER (NUMEROS, POSITIVOS, NEGATIVOS, DECIMALES, FLOTANTES)");
console.log(`tu saldo al dia de hoy es de: ${saldo_cuenta},(tipo de =${typeof(saldo_cuenta)})`);
console.log(`El producto que has seleccionado cuesta: ${costo_producto}`)
cantidad=8;
console.log(`Has elegido comprar: ${cantidad} de producto`)
console.log(`el importe total de la compra es: ${(cantidad*costo_producto)}`)
saldo_cuenta= saldo_cuenta- (cantidad*costo_producto);
console.log(`Tu nuevo saldo es de: ${saldo_cuenta}`);

//el cliente realiza un abono de 1500
monto_transaccion=1500;
console.log(`tu abono de: ${monto_transaccion} ha sido recibido, tu nuevo saldo es de: ${(saldo_cuenta+monto_transaccion)}`);

//4. STRING (cadena de caracteres)

const alumno="Esther González Peralta"
let producto;
 console.warn("---tipo de dato-STRING(CADENA DE CARACTERES)");
 console.log(`el nombre del alumno es: ${alumno},que es un tipo de dato ${typeof(alumno)}`);

 //inicializamos el valor de la variable producto
 producto= "MONITOR 20\"FULL HD"
 console.log(`el nombre del PRODUCTO es: ${producto},que es un tipo de dato ${typeof(producto)}`);

 //manipulando los sSTRING
 
 console.log(`Masadelante podremos transformar el contenido de los STRING usando los mtodos
  y funciones específicas, como convertir su valor a mayúsculas: ${alumno} => ${alumno.toUpperCase()}`);

  console.log(`o en su defecto a minúscula: ${producto} => ${producto.toLowerCase()}`);


//5. BIGINT (NÚMERO DE MAYOR AMPLITUD)
console.warn("---Tipo de dato - BIGINT (Numero amplio)");
const numeroGrande=1234567890
const numeroGrande2=12345678901234567890
let numeroGrande3=123456789012345678901234567890
let numeroGrande4=12345678904123456789012345678901234567890

console.log(`El primer experimento de u numero grande es: ${numeroGrande}, que si
es soportado por NUMBER, y su tipo de dato es : ${typeof(numeroGrande)}`)

console.log(`El Segundo experimento de u numero grande es: ${numeroGrande2}, que si
es soportado por NUMBER, y su tipo de dato es : ${typeof(numeroGrande2)}`)

console.log(`El tercer experimento de u numero grande es: ${numeroGrande3}, que no
es soportado por NUMBER, perdiendo precision, y su tipo de dato es : ${typeof(numeroGrande3)}`)

console.log(`El Cuarto experimento de u numero grande es: ${numeroGrande4}, que no
es soportado por NUMBER, perdiendo precision, y su tipo de dato es : ${typeof(numeroGrande4)}`)

numeroGrande3=BigInt("123456789012345678901234567890");
console.log(`El quinto experimento de un numero grande es: ${numeroGrande3}, que ya
fue convertido a BEGINT, Y su tipo de dato es : ${typeof(numeroGrande3)}`)

numeroGrande4=BigInt("112345678904123456789012345678901234567890");
console.log(`El sexto experimento de un numero grande es: ${numeroGrande4}, que ya
fue convertido a BEGINT, Y su tipo de dato es : ${typeof(numeroGrande4)}`)

//¿Se puede realizar operaciones matemáticas entre un NUMBER y un BIGINT

//const numero = 129;
//console.log (`Intentando realizar la suma: numero + numeroGrande3, el resultado es: ${BigInt(numero)+numeroGrande}`);

// 6.SYMBOL (Simbolo)

console.warn("--- Tipo de Dato SYMBOL (Símbolo o Único)")
//Números son números en JavaScript
//Symbol referencia única en memoria
const numero1=5;
const numero2=5.0;
const numero3="5";
const numero4="5.0";
const numero5=Symbol(5);
const numero6=Symbol(5);
const numero7=Symbol(5.0);
const numero8=Symbol("5");
const numero9=Symbol("5.0");

//Pruebas comparativas
console.log("¿Es 5 = 5.0?");
if(numero1==numero2)
    console.log("Se comparó numero1 con numero2, determinando que tienen el mismo valor.");
else
    console.log("Se comparó numero1 con numero2, determinando que NO tienen el mismo valor.")

//
console.log("¿Es 5 = \"5\"?");
if(numero1==numero3)
    console.log("Se comparó numero1 con numero3, determinando que tienen el mismo valor.");
else
    console.log("Se comparó numero1 con numero3, determinando que NO tienen el mismo valor.")

//
console.log("¿Es 5 === \"5\"?");
if(numero1===numero3) //Estrictamente igual "===" (Equidad) = Mismo valor, mismo tipo de dato.
    console.log("Se comparó numero1 con numero3, determinando que tienen el mismo valor.");
else
    console.log("Se comparó numero1 con numero3, determinando que tienen el mismo valor, pero NO el mismo tipo de DATO.")
   
//
console.log("¿Es 5 == \"5.0\"?");
if(numero1==numero4) //Estrictamente igual "===" (Equidad) = Mismo valor, mismo tipo de dato.
    console.log("Se comparó numero1 con numero4, determinando que tienen el mismo valor.");
else
    console.log("Se comparó numero1 con numero4, determinando que tienen el mismo valor, pero NO el mismo tipo de DATO.")

//
console.log("¿Es 5 === \"5.0\"?");
if(numero1===numero4) //Estrictamente igual "===" (Equidad) = Mismo valor, mismo tipo de dato.
    console.log("Se comparó numero1 con numero4, determinando que tienen el mismo valor.");
else
    console.log("Se comparó numero1 con numero4, determinando que tienen el mismo valor, pero NO el mismo tipo de DATO.")
    
//
console.log(`¿Es 5 === Symbol(5)? Antes de compararlos analizamos que tipo de dato son: siendo numero1 del tipo ${typeof(numero1)} y numero5 del tipo ${typeof(numero5)}`);
if(numero1==numero5)
    console.log("Se comparó numero1 con numero5, determinando que tienen el mismo valor y el mismo tipo de dato.");
else
    console.log("Se comparó numero1 con numero5, determinando que tienen el mismo valor, pero NO el mismo tipo de DATO.")

//
console.log(`¿Es 5 === Symbol(5.0)? Antes de compararlos analizamos que tipo de dato son: siendo numero1 del tipo ${typeof(numero1)} y numero7 del tipo ${typeof(numero7)}`);
if(numero1==numero7)
    console.log("Se comparó numero1 con numero7, determinando que tienen el mismo valor y el mismo tipo de dato.");
else
    console.log("Se comparó numero1 con numero7, determinando que tienen el mismo valor, pero NO el mismo tipo de DATO.")

//
console.log(`¿Es 5 === Symbol("5")? Antes de compararlos analizamos que tipo de dato son: siendo numero1 del tipo ${typeof(numero1)} y numero8 del tipo ${typeof(numero8)}`);
if(numero1==numero8) 
    console.log("Se comparó numero1 con numero8, determinando que tienen el mismo valor y el mismo tipo de dato.");
else
    console.log("Se comparó numero1 con numero8, determinando que tienen el mismo valor, pero NO el mismo tipo de DATO.")

//
console.log(`¿Es 5 === Symbol("5.0")? Antes de compararlos analizamos que tipo de dato son: siendo numero1 del tipo ${typeof(numero1)} y numero9 del tipo ${typeof(numero9)}`);
if(numero1==numero9) //Estrictamente igual "===" (Equidad) = Mismo valor, mismo tipo de dato.
    console.log("Se comparó numero1 con numero9, determinando que tienen el mismo valor y el mismo tipo de dato.");
else
    console.log("Se comparó numero1 con numero9, determinando que tienen el mismo valor, pero NO el mismo tipo de DATO.")

//
console.log(`¿Es Symbol(5) === Symbol(5)? Antes de compararlos analizamos que tipo de dato son: siendo numero5 del tipo ${typeof(numero5)} y numero6 del tipo ${typeof(numero6)}`);
if(numero5===numero6) //Estrictamente igual "===" (Equidad) = Mismo valor, mismo tipo de dato.
    console.log("Se comparó numero5 con numero6, determinando que tienen el mismo valor y el mismo tipo de dato.");
else
    console.log("Se comparó numero5 con numero5, determinando que tienen el mismo valor, y el mismo tipo de dato, es la condición de Symbol lo que lo hace único en la memoria.")


// 7. NULL

console.warn ("---Tipo de dato -NULL (Núlo o vacío)");

// El tipo de dato null se asigna cuando el sistema o el usuario saben de la variable pero prefieren dejarlo vaciío, bajo su consentiemiento a diferencia de undefiend que es un valor conocido asignado por DEAFAULT por JS.

let nombreUsuario=null;
let passUsuario=null;
let generoUsuario=null;
let estatusRelacionSentimental=null;
let fecha_ultimoPost;

// Supongamos que estamos programando que una red social, topo Facebook, en la que parte de la informacion se publicara en el perfil del usuario.

// Si el usuario no ha iniciado sesion en el dispositivo móvil o en la palicación web puede explorar contenido de acceso público, y no existira información para mostarr.

// En la HU (Historia d Uusuario), que el usuario desea logearse ddbera ingresar su numero telefonico o correo electónico y una constraseña que deberemos guardar en las variables previamente decalaradas.

// Supongamos  que el usuario: Marco A. con corro electrónico marco.ram@gmail.com desea ingresar con su contraseña: pass1234

nombreUsuario= "marco.ram@gmail.com";
passUsuario="pass123";
 

// En este momento de ejecución del sistema no sabemos su genero, ni sus estatus de relación sentimental.
 console.log(`el usuario: ${nombreUsuario} esta intentando logearse con una contraseña de: ${passUsuario}`);

 //lo que prosigue es que el sistema cotejara los datos ingresados con la base de datos y en caso de que los datos sean correctos comenzara la sesión en la plataforma actualizando estos valores.

 //Dado que Marco es del género Masculino y denota que u estatus de ralación no ha sido capturado o lo mantiene privado esto generara la actualización de los valores de las variables

 generoUsuario="M"
 estatusRelacionSentimental=null

 console.log(`El usuario: ${nombreUsuario}, se ha logeado exitosamente, al tener acceso a su informacion de perfil podemos deducir que es del género ${generoUsuario} y que esu estatus de relación es: ${estatusRelacionSentimental} y su ultima publicación la realizó el: ${fecha_ultimoPost}`);

//Comparando NULL Y UNDEFINED
//Si bien UNDEFINED y NULL tienen el mismo valor, no tienen el mismo tipo de dato.

console.log("Comparación de la equidad entre UNDEFINED y NULL");
console.log(
    (fecha_ultimoPost==estatusRelacionSentimental) ? 
    "Ambas variables tienen el mismo valor" : 
    "Las variables no tienen el mismo valor");

console.log("Comparación entre la identidad entre UNDEFINED y NULL");
console.log(
    (fecha_ultimoPost===estatusRelacionSentimental) ?
    "Ambas variables tienen el mismo valor y el mismo tipo de dato" :
    "Las variables tienen el mismo valor, pero no el mismo tipo de dato"
);


//8. FUNCTION (Funciones)
console.warn("--- Tipo de Dato FUNCTION (Función)")

//Declaramos una función que nos permita recibir un parámetro, en este caso, el nombre de la persona a saludar, y le enviamos un saludo. Esta función la asignamos a una constante.
const saludar=function(nombre){return`Hola, ${nombre}!`}

//Invocamos a la función declarada
console.log(saludar('Esther González'));

//Y que tipo de dato tiene esta constante.
console.log(`El tipo de dato de la constante saludar es: ${typeof(saludar)}`);
