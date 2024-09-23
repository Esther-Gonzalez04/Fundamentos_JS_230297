// Repaso de Objetos 

const bg= "linear-gradient(11deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 33%, rgba (0,212,255,1) 86%)";

const style_console=`background: ${bg}; color: white; border-radius: 6px; padding: 4px, font-size: 1.0rem; font-weight: bold`;

//Personalización de las salidas a consola 

console.warn("Practica 05: Repaso de Objetos en JavaScript");

//Variables independientes

console.log("%c1.- Variables independientes", style_console);

//Declaramos valores independientes realacionadas a un PRODUCTO

let Producto_Nombre="Computadora Gammer Laptop 17\"";
let Producto_Marca="ASUS"
let Producto_Modelo="TUF 17"
let Producto_Precio= 15749.50;
let Producto_Disponibilidad=true;
let Producto_SKU= Symbol("TUF707W-HX221W")
let Producto_Stock=15;
let Producto_Imagen=null;
let Producto_Barcode;
let Producto_Categorias=["Electronicos", "Computación", "Gamming", "Promoción Buen Fin", "Mejor valorados"];

//Accedemos a los valores de las caracteristicas del producto de manera independiente

console.log(`Los datos de PRODUCTO son: \n
    Nombre: ${Producto_Nombre}, Tipo de Dato <${typeof(Producto_Nombre)}>
    Marca: ${Producto_Marca}, Tipo de Dato <${typeof(Producto_Marca)}>
    Modelo: ${Producto_Modelo}, Tipo de Dato <${typeof(Producto_Modelo)}>
    Nombre: ${Producto_Precio}, Tipo de Dato <${typeof(Producto_Precio)}>
    Disponibilidad: ${Producto_Nombre}, Tipo de Dato <${typeof(Producto_Disponibilidad)}>
    Stock: ${Producto_Stock}, Tipo de Dato <${typeof(Producto_Stock)}>
    Barcode: ${Producto_Barcode}, Tipo de Dato <${typeof(Producto_Barcode)}>
    Imagen: ${Producto_Imagen}, Tipo de Dato <${typeof(Producto_Imagen)}>
    Categorias: ${Producto_Categorias}, Tipo de Dato <${typeof(Producto_Categorias)}>
    `);

    console.log("En el caso del SKUN al ser un Symbol, no se puede concatenar a la cadena de impresión anteriror")
    console.log(Producto_SKU);
    console.log(typeof(Producto_SKU));

    //Ahora la declaramos como un objeto
    console.log("%c2.-Objetos", style_console)


    let Producto =
    {
        Nombre: "Tenis Deportivos",
        Marca: "Nike",
        Modelo: "Jordan '24",
        Precio: 3361.25,
        Disponibilidad: false,
        Stock: 0,
        SKU: "DZ5485-612",
        Imagen: "../assets/products/sneakers/JORDAN.png",
        Barcode:null,
        Categorias: ["Deporte", "Juvenil"]

    }

    //Ahora leemos el objeto
    console.table(Producto);

//Para acceder a las propiedades del objeto utilizamos un "." y el nombre de la propiedad a leer.

console.log("Accediendo a propiedades específicas del PRODUCTO")
console.log(`Nombre completo del PRODUCTO: ${Producto.Nombre}${Producto.Marca} ${Producto.Modelo}`)
console.log(`Precio: ${Producto.Precio}`)
if(Producto.Disponibilidad==0)
    console.log(`Estatus: Agotado`)
else
console.log(`Estatus: ${Producto_Stock} unidades disponibles`)




//Destructuración de objetos

console.log("%c2.-Destructuracion de objetos", style_console)


    let Producto2 =
    {
        clave: 316,
        Nombre: "Lentes de sol",
        Marca: "Oakley",
        Modelo: "WNTM Kato",
        Precio: 6829.00,
        Disponibilidad: true,
        Stock: 5,
        SKU: "009481D-0356",
        Imagen: "../assets/products/sneakers/KatoRed.png",
        Barcode:888392491626,
        Categorias: ["Deporte", "Lentes", "Hombre", "Accesorios"]

    }


    let Comprador =
    {
        clave: 3216,
        Nombre: "Marco",
        Apellidos: "Ramirez Hernandez",
        Tipo: "Frecuente",
        correo: "mar.ram@gmail.com",
        PaisOrigen: "México",
        SaldoActual: 14000.00


    }


    let Pedido =
    {
        Producto_Clave: 316,
        Comprador_Clave: 3216,
        Cantidad:2,
        Estatus:"Carrito de compra"

    }

    // En base a los 3 objetos necesitamos calcular el costo de la compra y si le alcanza con su saldo a favor

    let{Producto_Precio: Precio} = Producto2;
    let{Pedido_Cantidad: Cantidad} = Pedido;
    let{Cliente_SaldoActual:SaldoActual} = Comprador;
    let Costo_Compra=Producto_Precio* Pedido_Cantidad;


    console.log(`El cliente ha agregado a su carrito de compras${Pedido_Cantidad} unidades, con un costo total de: ${(Pedido_Cantidad*Producto_Precio)}`);

    if(Costo_Compra<Cliente_SaldoActual)
        console.log("El cliente tiene saldo suficiente")
