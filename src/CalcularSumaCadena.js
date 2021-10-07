function obtenerListaValidaNumeros(cadenaDeNumerosDeNumeros, posFin){
  let subcadenaDeNumerosValida = cadenaDeNumerosDeNumeros.slice(0,posFin);
  let subListaValida = subcadenaDeNumerosValida.split();
  return subListaValida;
}

function sumarLista(listaNumeros){
  listaNumeros = listaNumeros.filter(num=>num <= 1000)
  return listaNumeros.reduce((a, b) =>parseInt(a) + parseInt(b), 0);
}

function posicionCaracterDistintoDeDigito(cadenaDeNumerosDeNumeros){
  return cadenaDeNumerosDeNumeros.search(/\D/);
}

function tieneDelimitador(cadenaDeNumerosDeNumeros){
  return cadenaDeNumerosDeNumeros.search("\n")>0;
}

function obtenercadenaDeNumerosValida(cadenaDeNumerosDeNumeros){
  if(tieneDelimitador(cadenaDeNumerosDeNumeros)){
    cadenaDeNumerosDeNumeros = cadenaDeNumerosDeNumeros.split("\n")[1];
  }
  return cadenaDeNumerosDeNumeros;
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

function obtenerSeparadores(cadenaDeNumerosDeNumeros){
  let separador = ",";
  let separadores =`,|-`;
  if(tieneDelimitador(cadenaDeNumerosDeNumeros)){
    separador = cadenaDeNumerosDeNumeros.split("\n")[0];
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

function calcularSumacadenaDeNumeross(cadenaDeNumeros) {
  let suma = 0;
  let i =0;
  let numeros = obtenerListaNumeros(cadenaDeNumeros);
  while(i<numeros.length){
    let posNoDigito = posicionCaracterDistintoDeDigito(numeros[i]);
    if( posNoDigito == 0) return suma;
    let subListaValida = obtenerListaValidaNumeros(numeros[i], posNoDigito);
    if (posNoDigito > 0 ) return suma + sumarLista(subListaValida);

    let num = parseInt(numeros[i]);
    if(Number.isNaN(num)) return suma;
    if(num <= 1000) suma += num;       
    i++;   
  }
  return suma;
}

export default calcularSumacadenaDeNumeross;