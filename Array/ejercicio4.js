function NumeroMasAlto(array) {

    let mayor = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] > mayor) {
            mayor = array[i];
        }
    }
    console.log("El número más alto en el array es:", mayor);
}

const Array2 = [5, 10, 15, 20, 25];
NumeroMasAlto(Array2);