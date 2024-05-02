function NumeroMasBajo(array) {

    let menor = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] < menor) {
            menor = array[i];
        }
    }
    console.log("El número más bajo en el array es:", menor);
}

const Array2 = [5, 10, 15, 20, 25];
NumeroMasBajo(Array2);
