function calcularSumaCadenas(cadena) {
  let suma = 0;
  let i =0;
  while(i<cadena.length){
    if(!(cadena[i] == "," && i%2!=0))
    {         
        let num = parseInt(cadena[i]);
        if(Number.isNaN(num)) return suma;
        suma += num;            
    }        
    i++;   
  }
  return suma;
}

export default calcularSumaCadenas;
