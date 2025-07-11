// EJERCICIO 1

const array = ["hola","chau","hello","world"]

function concatenarStrings(array){
    let text = ""
    for (let i = 0; i<array.length;i++){
        text=text+array[i]
    }
    console.log(text)
}
concatenarStrings(array)

// EJERCICIO 2


const array1= [4, 3, true, 'manzana']

const array2= ['pera', 3, false, true, 3, true]

const result = array1.filter((element)=>array2.includes(element))

console.log(result)

// EJERCICIO 3

let carrito = {
    total: 10,
    productos: [
        {
            nombre: 'leche',
            precio: 2,
            unidades: 5
        }
    ]
}

function agregarProducto(carrito,nombre, precio, unidades) {
    carrito.productos.push(
        {nombre: nombre,
         precio:precio, 
         unidades: unidades}
         )

        carrito.total += precio * unidades
}

agregarProducto(carrito,'agua',5,10)
console.log(carrito)
console.log(carrito.productos[0].precio)