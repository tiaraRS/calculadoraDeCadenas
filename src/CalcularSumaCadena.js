function calcularSumacadenaDeNumeross(cadenaDeNumeros) {
  let suma = 0;
  let contadorPosicion =0;
  let listaDeNumeros = obtenerListaNumeros(cadenaDeNumeros);
  while(contadorPosicion<listaDeNumeros.length){
    let posNoDigito = posicionCaracterDistintoDeDigito(listaDeNumeros[contadorPosicion]);
    if( posNoDigito == 0) return suma;
    let subListaValida = obtenerListaValidaNumeros(listaDeNumeros[contadorPosicion], posNoDigito);
    if (posNoDigito > 0 ) return suma + sumarLista(subListaValida);

    let num = parseInt(listaDeNumeros[contadorPosicion]);
    if(Number.isNaN(num)) return suma;
    if(num <= 1000) suma += num;       
    contadorPosicion++;   
  }
  return suma;
}

function obtenerListaValidaNumeros(cadenaDeNumeros, posicionFinal){
  let subcadenaDeNumerosValida = cadenaDeNumeros.slice(0,posicionFinal);
  let subListaValida = subcadenaDeNumerosValida.split();
  return subListaValida;
}

function sumarLista(listaNumeros){
  listaNumeros = listaNumeros.filter(num=>num <= 1000)
  return listaNumeros.reduce((a, b) =>parseInt(a) + parseInt(b), 0);
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

function buscarDelimitadores(cadenaDeNumerosSeparadora){
  let matches= cadenaDeNumerosSeparadora.matchAll("]","")
  let limiteInicial = 0;
  let separadores = `,|-`;
  for (const match of matches) {
    let sep = cadenaDeNumerosSeparadora.slice(limiteInicial,match.index);
    limiteInicial = match.index+2;
    separadores = separadores += `|[${sep}]+`;
  }
  return separadores;
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

function obtenerListaNumeros(cadenaDeNumeros){
  let separadores = obtenerSeparadores(cadenaDeNumeros); 
  let expr =  new RegExp(separadores);
  cadenaDeNumeros = cadenaDeNumeros = obtenercadenaDeNumerosValida(cadenaDeNumeros);
  let listaNumeros = cadenaDeNumeros.split(expr);  
  return listaNumeros;
}


export default calcularSumacadenaDeNumeross;