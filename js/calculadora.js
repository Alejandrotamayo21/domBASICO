function sumar(){
  let numero_1 =parseInt (document.getElementById("numero_1").value);
  let numero_2 =parseInt (document.getElementById("numero_2").value);  
  let suma = numero_1 + numero_2;
  document.getElementById ("resultado").value = suma;
}
function restar(){
  let numero_1 =parseInt (document.getElementById("numero_1").value);
  let numero_2 =parseInt (document.getElementById("numero_2").value);  
  let resta = numero_1 - numero_2;
  document.getElementById ("resultado").value = resta;
}
function multiplicar(){
  let numero_1 =parseInt (document.getElementById("numero_1").value);
  let numero_2 =parseInt (document.getElementById("numero_2").value);  
  let multiplicacion = numero_1 * numero_2;
  document.getElementById ("resultado").value = multiplicacion;
}
function division() {
  let numero_1 = parseInt(document.getElementById("numero_1").value);
  let numero_2 = parseInt(document.getElementById("numero_2").value);

  if (numero_1 === 0 || numero_2 === 0) {
    console.log("Número inválido o división por cero");
    document.getElementById("resultado").value = "Error";
  } else {
    let dividir = numero_1 / numero_2;
    document.getElementById("resultado").value = dividir;
  }
}