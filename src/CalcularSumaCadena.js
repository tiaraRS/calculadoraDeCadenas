function obtenerListaValidaNumeros(cadena, posFin){
  let subCadenaValida = cadena.slice(0,posFin);
  let subListaValida = subCadenaValida.split();
  return subListaValida;
}

function sumarLista(listaNumeros){
  listaNumeros = listaNumeros.filter(num=>num <= 1000)
  return listaNumeros.reduce((a, b) =>parseInt(a) + parseInt(b), 0);
}

function posicionCaracterDistintoDeDigito(cadena){
  return cadena.search(/\D/);
}

function tieneDelimitador(cadena){
  return cadena.search("\n")>0;
}

function obtenerCadenaValida(cadena){
  if(tieneDelimitador(cadena)){
    cadena = cadena.split("\n")[1];
  }
  return cadena;
}

function obtenerSeparadores(cadena){
  let separador = ",";
  let separadores = `,|-`;
  if(tieneDelimitador(cadena)){
    separador = cadena.split("\n")[0];
    separador = separador.replace("//[","");
    separador = separador.replace("]",""); 
    separadores = separadores += `|${separador}`;
  }  
  return separadores;
}

function obtenerListaNumeros(cadena){
  let separadores = obtenerSeparadores(cadena); 
  let expr =  new RegExp(separadores);
  cadena = cadena = obtenerCadenaValida(cadena);
  let listaNumeros = cadena.split(expr);  
  return listaNumeros;
}

function calcularSumaCadenas(cadena) {
  let suma = 0;
  let i =0;
  let numeros = obtenerListaNumeros(cadena);
  while(i<numeros.length){
    let posNoDigito = posicionCaracterDistintoDeDigito(numeros[i]);
    if( posNoDigito == 0) return suma;
    let subListaValida = obtenerListaValidaNumeros(numeros[i], posNoDigito);
    if (posNoDigito > 0 ) return sumarLista(subListaValida);

    let num = parseInt(numeros[i]);
    if(Number.isNaN(num)) return suma;
    if(num <= 1000) suma += num;       
    i++;   
  }
  return suma;
}

export default calcularSumaCadenas;
