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

console.warn("---Tipo de dato SYMBOL(Símbolo o único)")
const numero1= 5;
const numero2= 5.0;
const numero3="5";
const numero4="5.0"
const numero5= Symbol(5)
const numero6=Symbol(5)
const numero7= Symbol(5.0)
const numero8=Symbol("5")
const numero9=Symbol("5.0")

//Pruebas conparativas

console.log("¿Es 5=5.0?");
if(numero1==numero2) //estrictamente igual "===" (Equidad)= mismo valor, mismo tipo d dato
console.log("Se comparó numero1 con número2, determinando que tienenen el mismo valor")
else
console.log("Se comparó numero1 con numero2, determinando que NO tienene el mismo valor")


console.log("¿Es 5=\"5\"?");
if(numero1==numero3) //estrictamente igual "===" (Equidad)= mismo valor, mismo tipo d dato
console.log("Se comparó numero1 con número3, determinando que tienenen el mismo valor")
else
console.log("Se comparó numero1 con numero3, determinando que NO tienene el mismo valor")


console.log("¿Es 5===\"5\"?");
if(numero1===numero3) //estrictamente igual "===" (Equidad)= mismo valor, mismo tipo d dato

console.log("Se comparó numero1 con número3, determinando que tienenen el mismo valor")

else
console.log("Se comparó numero1 con numero3, determinando que tienene el mismo valor, pero NO es el mismo tipo de Dato.")


console.log("¿Es 5==\"5.0\"?");
if(numero1==numero4) //estrictamente igual "===" (Equidad)= mismo valor, mismo tipo d dato
console.log("Se comparó numero1 con número4, determinando que tienenen el mismo valor")
else
console.log("Se comparó numero1 con numero4, determinando que tienene el mismo valor, pero NO es el mismo tipo de Dato.")


console.log("¿Es 5===\"5.0\"?");
if(numero1===numero4) //estrictamente igual "===" (Equidad)= mismo valor, mismo tipo d dato

console.log("Se comparó numero1 con número4, determinando que tienenen el mismo valor")

else
console.log("Se comparó numero1 con numero4, determinando que tienene el mismo valor, pero NO es el mismo tipo de Dato.")


console.log(`¿Es 5===symbol(5)?, antes de compararlos analizamos que tipo de dato son: siendo numero1 ${typeof(numero1)} y numero5  del tipo ${typeof(numero5)}`);
if(numero1==numero5) //estrictamente igual "===" (Equidad)= mismo valor, mismo tipo d dato

console.log("Se comparó numero1 con número5, determinando que tienenen el mismo valor y el mismo tipo de dato")

else
console.log("Se comparó numero1 con numero5, determinando que tienene el mismo valor, pero NO es el mismo tipo de Dato.")