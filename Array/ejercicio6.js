function NumerosIguales(array) {
    var repetidos = [];
    var contador = {};

    for (var i = 0; i < array.length; i++) {
        var elemento = array[i];
        if (contador[elemento] === undefined) {
            contador[elemento] = 1;
        } else {
            contador[elemento]++;
        }
    }

    for (var key in contador) {
        if (contador.hasOwnProperty(key) && contador[key] > 1) {
            repetidos.push(parseInt(key));
        }
    }


    console.log(repetidos.join(','));
}

var array = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100];
NumerosIguales(array);
