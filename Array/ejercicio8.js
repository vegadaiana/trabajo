function invertirNumero(numero) {
    
    var numeroString = numero.toString();
    
    var caracteres = numeroString.split('');
    
    var caracteresInvertidos = caracteres.reverse();
     
    var numeroInvertidoString = caracteresInvertidos.join('');
    
    var numeroInvertido = parseInt(numeroInvertidoString);
    
    return numeroInvertido;
}

var num = 2024;
var resultado = invertirNumero(num);
console.log(resultado);