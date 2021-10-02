function calcularSumaCadenas(cadena) {
  let suma = 0;
  let i =0;
  let numeros = cadena.split(/,|-/);
  while(i<numeros.length){
    let posNoDigito=numeros[i].search(/\D/);
    if( posNoDigito == 0) return suma;
    let subCadenaValida = numeros[i].slice(0,posNoDigito);
    let subLista = subCadenaValida.split()
    if (posNoDigito>-1 ) return subLista.reduce((a, b) =>parseInt(a) + parseInt(b), 0);
    let num = parseInt(numeros[i]);
    if(Number.isNaN(num)) return suma;
    suma += num;       
    i++;   
  }
  return suma;
}

export default calcularSumaCadenas;
