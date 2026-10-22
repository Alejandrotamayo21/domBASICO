

function calcularVenta() {
  let producto = document.getElementById("producto").value;
  let cantidad = parseInt(document.getElementById("cantidad").value);
  let precio = parseInt(document.getElementById("precio").value);

  if (producto === "" || isNaN(cantidad) || isNaN(precio)) {
    document.getElementById("total").value = "Error";
  } else {
    let subtotal = cantidad * precio;
    let iva = subtotal * 0.19;
    let descuento = 0;

  
    if (cantidad > 10) {
      descuento = subtotal * 0.05;
    }

    let total = subtotal + iva - descuento;

    document.getElementById("subtotal").value = subtotal.toLocaleString("es-CO");
    document.getElementById("iva").value = iva.toLocaleString("es-CO");
    document.getElementById("descuento").value = descuento.toLocaleString("es-CO");
    document.getElementById("total").value = total.toLocaleString("es-CO");
  }
}