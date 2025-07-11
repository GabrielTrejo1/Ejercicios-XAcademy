/*
for (let i = 1;i!=7;i++){
    let result = ""
    for (let j = 1;j!=i+1;j++){
        result += j
    }
    console.log(result)
}

for (let i = 1;i!=7;i++){
    let result = ""
    for (let j = 1;j!=i+1;j++){
        result += i
    }
    console.log(result)
}
*/


// EJERCICIO 1
function edad(){
    const edad = parseInt(document.getElementById("edad").value)
    if (edad > 18){
        document.getElementById("resultEj1").innerHTML = "Es mayor de 18 años, puede conducir."
    } else if (edad ===18){
        document.getElementById("resultEj1").innerHTML = "Tiene 18 años, puede conducir."
    } else{
        document.getElementById("resultEj1").innerHTML = "Es menor de 18 años, no puede conducir."
    }
}

// EJERCICIO 2
function nota(){
    const nota = parseInt(document.getElementById("nota").value)
    if (nota < 0){
        alert("No se permiten notas menores a 0")
    } else if (nota < 3){
        document.getElementById("resultEj2").innerHTML = "Muy deficiente"
    } else if (nota < 5){
        document.getElementById("resultEj2").innerHTML = "Insuficiente"
    } else if (nota < 6){
        document.getElementById("resultEj2").innerHTML = "Suficiente"
    } else if (nota < 7){
        document.getElementById("resultEj2").innerHTML = "Bien"
    } else if (nota < 9){
        document.getElementById("resultEj2").innerHTML = "Notable"
    } else if (nota <= 10){
        document.getElementById("resultEj2").innerHTML = "Sobresaliente"
    } else {
        alert("No se permiten notas mayores que 10")
    }
}



function validarPiramides(altura){
    if (altura > 9 || altura < 1){
        alert("Solo se permiten números entre 1 y 9.")
        return false
    } 
    return true
}

//EJERCICIO 3
function piramide1(){
    const altura = parseInt(document.getElementById("alturaEj3").value)
    if (validarPiramides(altura)){
        let resultado = ""
        for (let i = 1;i<=altura;i++){
            let result = ""
            for (let j = 1;j<=i;j++){
                result += i
            }
            resultado += result+"<br>"
        }
        document.getElementById("resultEj3").innerHTML = resultado;
    }
}

//EJERCICIO 4
function piramide2(){
    const altura = parseInt(document.getElementById("alturaEj4").value)
    if (validarPiramides(altura)){
        let resultado = ""
        for (let i = 1;i<=altura;i++){
            let result = ""
            for (let j = 1;j<=i;j++){
                result += j
            }
            resultado += result+"<br>"
        }
        document.getElementById("resultEj4").innerHTML = resultado;
    }
}