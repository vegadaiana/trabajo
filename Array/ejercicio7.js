let color = ["rojo", "verde", "blanco", "negro"];

let cadena = "";

for (let i = 0; i < color.length; i++) {
    cadena += color[i];

    if (i < color.length - 1) {
        cadena += ", ";
    }
}

console.log(cadena);