function primeraLetraMayuscula(cadena) {

    var palabras = cadena.split(' ');
    
    for (var i = 0; i < palabras.length; i++) {
  
        palabras[i] = palabras[i].charAt(0).toUpperCase() + palabras[i].slice(1).toLowerCase();
    }
    
    return palabras.join(' ');
}

var texto = "prince of persia";
var resultado = primeraLetraMayuscula(texto);
console.log(resultado); 

