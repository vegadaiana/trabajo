function palabraMasLarga(frase) {
    var palabras = frase.split(' ');
    var longitudMasLarga = 0;
    var palabraMasLarga = '';
    
    for (var i = 0; i < palabras.length; i++) {
        if (palabras[i].length > longitudMasLarga) {

            longitudMasLarga = palabras[i].length;
            palabraMasLarga = palabras[i];
        }
    }

    return palabraMasLarga;
}

var x = "Tutorial de desarrollo web";
var resultado = palabraMasLarga(x);
console.log(resultado);
