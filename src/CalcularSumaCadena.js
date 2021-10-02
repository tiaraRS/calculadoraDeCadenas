function obtenerListaValidaNumeros(cadena, posFin){
  let subCadenaValida = cadena.slice(0,posFin);
  let subListaValida = subCadenaValida.split();
  return subListaValida;
}

function sumarLista(listaNumeros){
  return listaNumeros.reduce((a, b) =>parseInt(a) + parseInt(b), 0);
}

function posicionCaracterDistintoDeDigito(cadena){
  return cadena.search(/\D/);
}

function calcularSumaCadenas(cadena) {
  let suma = 0;
  let i =0;
  let numeros = cadena.split(/,|-/);
  while(i<numeros.length){
    let posNoDigito = posicionCaracterDistintoDeDigito(numeros[i]);
    if( posNoDigito == 0) return suma;
    let subListaValida = obtenerListaValidaNumeros(numeros[i], posNoDigito);
    if (posNoDigito > 0 ) return sumarLista(subListaValida);

    let num = parseInt(numeros[i]);
    if(Number.isNaN(num)) return suma;
    suma += num;       
    i++;   
  }
  return suma;
}

export default calcularSumaCadenas;
