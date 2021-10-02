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
});