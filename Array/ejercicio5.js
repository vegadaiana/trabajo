function Elementos(array, indice) {
 
    if (indice >= 0 && indice < array.length) {

        console.log(array[indice]);
    } else {
        console.log("El índice está fuera del rango válido.");
    }
}

var array = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100];
var indice = 50;

Elementos(array, indice);
