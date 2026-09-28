function calcularSubtotal(cantidad) {
  return cantidad * 100;
}

function calcularEnvio(envio) {
  return envio === "express" ? 500 : 0;
}

function calcularDescuento(descuento) {
  return descuento > 20 ? descuento : 0;
}

function tieneStock(cantidad, stock) {
  return stock >= cantidad;
}

function cantidadValida(tipo, cantidad) {
  if (tipo === "online") {
    return cantidad > 10;
  }

  return cantidad > 5;
}

function procesarPedido(tipo, cliente, cantidad, stock, descuento, envio) {
  if (!cantidadValida(tipo, cantidad)) {
    return 0;
  }

  if (!tieneStock(cantidad, stock)) {
    return 0;
  }

  const subtotal = calcularSubtotal(cantidad);
  const envioCosto = calcularEnvio(envio);

  if (cliente === "premium") {
    return subtotal - calcularDescuento(descuento) + envioCosto;
  }

  return subtotal + envioCosto;
}

function calcularTotalOnline(cantidad, descuento, envio) {
  return calcularSubtotal(cantidad) - descuento + calcularEnvio(envio);
}

function calcularTotalCliente(cantidad, descuento, envio) {
  return calcularSubtotal(cantidad) - descuento + calcularEnvio(envio);
}

module.exports = {
  procesarPedido,
  calcularTotalOnline,
  calcularTotalCliente,
};