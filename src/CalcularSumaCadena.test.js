import calcularSumaCadenas from "./CalcularSumaCadena.js";

describe("calcularSumaCadenas", () => {
  it("deberia sumar dos numeros separados por , de una cadena", () => {
    expect(calcularSumaCadenas("3,2")).toEqual(5);
  });
  it("deberia sumar 2 numeros separados por ,", () => {
    expect(calcularSumaCadenas("1,5")).toEqual(6);
  });
  it("deberia sumar 2 numeros separados por ,", () => {
    expect(calcularSumaCadenas("1*5")).toEqual(1);
  });
  it("deberia sumar 2 numeros separados por ,", () => {
    expect(calcularSumaCadenas("1,,5")).toEqual(1);
  });
  it("deberia sumar 2 numeros separados por ,", () => {
    expect(calcularSumaCadenas(",,5")).toEqual(0);
  });
  it("deberia sumar 2 numeros separados por ,", () => {
    expect(calcularSumaCadenas("+/5")).toEqual(0);
  });
  it("deberia sumar todos los numeros separados por ,", () => {
    expect(calcularSumaCadenas("1,2,4,8")).toEqual(15);
  });
  it("deberia sumar todos los numeros separados por ,", () => {
    expect(calcularSumaCadenas("1,2,4,,8")).toEqual(7);
  });
  it("deberia sumar todos los numeros separados por ,", () => {
    expect(calcularSumaCadenas("*1,2,4,,8")).toEqual(0);
  });
  it("deberia sumar todos los numeros separados por ,", () => {
    expect(calcularSumaCadenas("1*2,4,,8")).toEqual(1);
  });
  it("deberia sumar todos los numeros separados por -", () => {
    expect(calcularSumaCadenas("1-2-4-8")).toEqual(15);
  });
  it("deberia sumar todos los numeros separados por -", () => {
    expect(calcularSumaCadenas("1-,2-4-8")).toEqual(1);
  });
  it("deberia sumar todos los numeros separados por - y ,", () => {
    expect(calcularSumaCadenas("1-2,4,8")).toEqual(15);
  });
  it("deberia sumar todos los numeros separados por - y ,", () => {
    expect(calcularSumaCadenas("-1,2-4-,8")).toEqual(0);
  });
  it("deberia sumar todos los numeros separados por caracter dado ;", () => {
    expect(calcularSumaCadenas("//[;]\n1;2;4;8")).toEqual(15);
    expect(calcularSumaCadenas("//[;]\n1;2;4;,8")).toEqual(7);
    expect(calcularSumaCadenas("//[;]\n*1;2*4;,8")).toEqual(0);
  });
  it("deberia sumar todos los numeros <= 1000", () => {
    expect(calcularSumaCadenas("//[;]\n1;1001;2;4-8")).toEqual(15);
    expect(calcularSumaCadenas("//[;]\n1;2;40000;4;,8")).toEqual(7);
  });
  it("deberia sumar todos los numeros <= 1000", () => {
    expect(calcularSumaCadenas("//[;]\n10000/1;2;40000;4;,8")).toEqual(0);
  });
  it("deberia sumar todos los numeros delimitados por el separador dado", () => {
    expect(calcularSumaCadenas("//[;;;]\n1;;;1001;;;2;;;4;;;8")).toEqual(15);
    expect(calcularSumaCadenas("//[;-]\n1;-2;-40000,8")).toEqual(11);    
  });
  it("deberia sumar todos los numeros delimitados por el separador dado", () => {    
    expect(calcularSumaCadenas("//[***]\n10000***1***20**40000;4;,8")).toEqual(21);
  });
  it("deberia sumar todos los numeros separados por limitadores elegidos", () => {
    expect(calcularSumaCadenas("//[;;;][*]\n1;;;1001*2;;;4-8")).toEqual(15);
  });
  it("deberia sumar todos los numeros separados por limitadores elegidos", () => {
    expect(calcularSumaCadenas("//[;][*][/]\n10;2*40000*4;8")).toEqual(24);
  });
  it("deberia sumar todos los numeros separados por limitadores elegidos", () => {    
    expect(calcularSumaCadenas("//[+][*][)]\n1+2*40000,4)8")).toEqual(15);
    expect(calcularSumaCadenas("//[-][;]\n10000-1;2-40000--4;,8")).toEqual(3);
  });
  it("deberia sumar todos los numeros separados por limitadores elegidos", () => {
    expect(calcularSumaCadenas("//[;;;][*]\n1;;;1001*2;;;4-8")).toEqual(15);
    expect(calcularSumaCadenas("//[***][==]\n1==1001==2***4+8")).toEqual(7);
  });
});
