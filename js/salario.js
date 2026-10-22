

function calcularSalario() {
  let horas = parseInt(document.getElementById("horas").value);
  let valorHora = parseInt(document.getElementById("valorHora").value);

  if (isNaN(horas) || isNaN(valorHora) || horas < 0 || valorHora < 0) {
    document.getElementById("salario").value = "Error";
  } else {
    let salario = 0;

    if (horas > 8) {
      let horasExtra = horas - 8;
      salario = (8 * valorHora) + (horasExtra * valorHora * 1.25);
    } else {
      salario = horas * valorHora;
    }

    document.getElementById("salario").value = salario.toLocaleString("es-CO");
  }
}