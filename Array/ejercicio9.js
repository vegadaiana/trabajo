function OrdenarCadena (cadena){
    const SoloLetras = cadena.replace(/[^a-zA-Z]/g, '').toLowerCase();

    const cadenaOrdenada = SoloLetras.split('').sort().join('');

    return cadenaOrdenada;
}
const texto = 'WEBMASTER';

const resultado = OrdenarCadena(texto);

console.log(resultado);