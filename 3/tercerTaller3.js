/*3.Dada la cadena “Javascript es genial” recorra la cadena usando ciclo for y muestre por cuantas palabras está
compuesta la cadena. Como sugerencia se puede basar en el modelo del ejercicio 2 literal d.*/
let tercerCadena = "Javascript es genial";
let contador = 0;
for (let index = 0; index < tercerCadena.length; index++) {
    if (tercerCadena[index] == " ") {
        contador++
    }
}
console.log("La cadena esta compuesta por" + contador + "palabras");