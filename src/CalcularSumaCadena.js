function calcularSumacadenaDeNumeross(cadenaDeNumeros) {
  let sumaDeNumeros = 0;
  let contadorPosicion =0;
  let listaDeNumeros = obtenerListaNumeros(cadenaDeNumeros);
  while(contadorPosicion<listaDeNumeros.length){
    let posicionSimboloNoValido = posicionCaracterDistintoDeDigito(listaDeNumeros[contadorPosicion]);
    if( posicionSimboloNoValido == 0) return sumaDeNumeros;
    let subListaValida = obtenerListaValidaNumeros(listaDeNumeros[contadorPosicion], posicionSimboloNoValido);
    if (posicionSimboloNoValido > 0 ) return sumaDeNumeros + sumarLista(subListaValida);

    let numero = parseInt(listaDeNumeros[contadorPosicion]);
    if(Number.isNaN(numero)) return sumaDeNumeros;
    if(numero <= 1000) sumaDeNumeros += numero;       
    contadorPosicion++;   
  }
  return sumaDeNumeros;
}

function obtenerListaNumeros(cadenaDeNumeros){
  let separadores = obtenerSeparadores(cadenaDeNumeros); 
  let expresionSeparadora =  new RegExp(separadores);
  cadenaDeNumeros = obtenercadenaDeNumerosValida(cadenaDeNumeros);
  let listaNumeros = cadenaDeNumeros.split(expresionSeparadora);  
  return listaNumeros;
}

function obtenerSeparadores(cadenaDeNumeros){
  let separador = ",";
  let separadores =`,|-`;
  if(tieneDelimitador(cadenaDeNumeros)){
    separador = cadenaDeNumeros.split("\n")[0];
    separador = separador.replace("//[","");
    separadores = buscarDelimitadores(separador);
  }  
  return separadores;
}

function buscarDelimitadores(cadenaDeNumerosSeparadora){
  let matches= cadenaDeNumerosSeparadora.matchAll("]","")
  let limiteInicial = 0;
  let separadores = `,|-`;
  for (const match of matches) {
    let separador = cadenaDeNumerosSeparadora.slice(limiteInicial,match.index);
    limiteInicial = match.index+2;
    separadores = separadores += `|[${separador}]+`;
  }
  return separadores;
}

function obtenerListaValidaNumeros(cadenaDeNumeros, posicionFinal){
  let subcadenaDeNumerosValida = cadenaDeNumeros.slice(0,posicionFinal);
  let subListaValida = subcadenaDeNumerosValida.split();
  return subListaValida;
}

function sumarLista(listaNumeros){
  listaNumeros = listaNumeros.filter(numero=>numero <= 1000);
  return listaNumeros.reduce((numero1, numero2) =>parseInt(numero1) + parseInt(numero2), 0);
}

function posicionCaracterDistintoDeDigito(cadenaDeNumeros){
  return cadenaDeNumeros.search(/\D/);
}

function tieneDelimitador(cadenaDeNumeros){
  return cadenaDeNumeros.search("\n")>0;
}

function obtenercadenaDeNumerosValida(cadenaDeNumeros){
  if(tieneDelimitador(cadenaDeNumeros)){
    cadenaDeNumeros = cadenaDeNumeros.split("\n")[1];
  }
  return cadenaDeNumeros;
}

export default calcularSumacadenaDeNumeross;