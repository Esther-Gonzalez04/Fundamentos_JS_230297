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
console.warn("--- Tipo de Dato : BOOLEAN (Boleano/False")
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
    console-log("El cliente pago por usar el servicio.")
else
    console-log("El cliente recibe los servicios gratuitos");


// 3. Number (Números)

var cantidad;
const costo_producto = 10.50
let saldo_cuenta = -2500.40
let monto_transaccion;

console.warn("--- tipo de dato -NUMBER (NUMEROS, POSITIVOS, NEGATIVOS, DECIMALES, FLOTANTES");
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

