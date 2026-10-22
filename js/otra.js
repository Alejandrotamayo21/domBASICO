function calcularPresupuesto() {
  let invitados = parseInt(document.getElementById("invitados").value);
  let costoComida = parseInt(document.getElementById("costoComida").value);
  let costoBebida = parseInt(document.getElementById("costoBebida").value);
  let decoracion = parseInt(document.getElementById("costoDecoracion").value);
  let musica = parseInt(document.getElementById("costoMusica").value);
  let porcentajePropina = parseInt(document.getElementById("porcentajePropina").value);

  if (invitados === 0) {
    alert("El número de invitados no puede ser 0");
  } else {
    let comidaTotal = invitados * costoComida;
    let bebidaTotal = invitados * costoBebida;
    let subtotal = comidaTotal + bebidaTotal + decoracion + musica;
    let propina = subtotal * porcentajePropina / 100;
    let totalGeneral = subtotal + propina;
    let costoPorInvitado = totalGeneral / invitados;

    document.getElementById("tdComida").textContent = comidaTotal.toLocaleString("es-CO");
    document.getElementById("tdBebida").textContent = bebidaTotal.toLocaleString("es-CO");
    document.getElementById("tdDecoracion").textContent = decoracion.toLocaleString("es-CO");
    document.getElementById("tdMusica").textContent = musica.toLocaleString("es-CO");
    document.getElementById("tdSubtotal").textContent = subtotal.toLocaleString("es-CO");
    document.getElementById("tdPropina").textContent = propina.toLocaleString("es-CO");
    document.getElementById("tdTotal").textContent = totalGeneral.toLocaleString("es-CO");
    document.getElementById("tdPorInvitado").textContent = costoPorInvitado.toLocaleString("es-CO");
  }
}