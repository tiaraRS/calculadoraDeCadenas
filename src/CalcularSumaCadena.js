function calcularSumaCadenas(cadena) {
  let num1 = parseInt(cadena[0]);
  let num2 = parseInt(cadena[2]);
  if(Number.isNaN(num1)) return 0;
  if(cadena[1]==","){   
    if(Number.isNaN(num2)) return num1;
    return num1+num2;
  } 
  return num1;
}

export default calcularSumaCadenas;
