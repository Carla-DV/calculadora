 let numero1 = prompt("Ingrese numero 1");
 let numero2 = prompt("Ingrese otro numero");
 let operacion = prompt("Ingrese la operacion matematica");
 let resultado;
 if (operacion == "+"){
    resultado = numero1 + numero2;
 }else if (operacion == "-"){
    resultado = numero1 - numero2;
 }else if (operacion == "*"){
   resultado = numero1 * numero2;
}else if (operacion == "/"){
   resultado = numero1 / numero2;
}

//  //+
//  let suma= numero1+numero2;
// //-
// let resta= numero1-numero2
// //*
// let multiplicacion= numero1*numero2
// // /
// let divsion= numero1/numero2

console.log ("El resultado es:" + resultado);
alert ("error")

