//2.Dada la cadena “Somos SENA”:

let segundaCadena = "Somos SENA";

//c) Recorra la cadena usando ciclo for y muestre si la cadena contiene la letra “E”
let contador = 0
for (let index = 0; index < segundaCadena.length; index++) {
    if (segundaCadena[index] == "E") {
        contador ++
    }
}
/*d) Recorra la cadena usando ciclo for y muestre cuántas veces está la letra “o” . Como sugerencia use una
variable contadora para contar el número de veces que se encuentra la letra “o”.*/
if (contador > 0) {
    console.log("La E esta", contador, "veces");
} else {
    console.log("la cadena no contiene ninguna E");
}

let contador2 = 0
for (let index = 0; index < segundaCadena.length; index++) {
    if (segundaCadena[index] == "o") {
        contador2 ++
    }
}
console.log("La letra o se encuentra", contador2, "veces");