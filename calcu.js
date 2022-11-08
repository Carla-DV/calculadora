 let numero1 = prompt("Ingrese un numero");
 let numero2 = prompt("Ingrese otro numero");
 let operacion = prompt("Ingrese una operacion matematica: +, -, *, /");
 let resultado;
 
 if (operacion == "+"){
    resultado = numero1 + numero2;
    alert("El resultado es: "+ resultado)
 }else if (operacion == "-"){
    resultado = numero1 - numero2;
    alert("El resultado es: "+ resultado)
 }else if (operacion == "*"){
   resultado = numero1 * numero2;
   alert("El resultado es: "+ resultado)
}else if (operacion == "/"){
   resultado = numero1 / numero2;
   alert("El resultado es: "+ resultado)
}else if(operador == "/"){
   total = numero1/(0)
   alert("ERROR: No se puede dividir por 0")
}else {
   alert("ERROR")
}

