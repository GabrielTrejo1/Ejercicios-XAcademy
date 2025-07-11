// datos primitivos

// number
let num1 = 4;
let num2 = 5;
console.log(typeof num2)

// string

let str = "Esto es un string";
console.log(typeof str)

// bigint

let bigInt = 212312312312312312n;
console.log(typeof bigInt)

// boolean

let flag = true;
console.log(typeof flag)

// undefined

let xyz
console.log(typeof xyz)

let b = 10;
console.log(b--);
console.log(b); 

function parImpar(num){
    if (num % 2 == 0){
        console.log(` El número ${num} es par `)
    } else {
        console.log(`El número ${num} es impar`)
    }
}

parImpar(9)

let num22 = "10s"
let result = (isNaN(num22)) ? 'No es un número' : 'Es un número'

console.log(result)