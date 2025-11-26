let subtotal = 0;
let descuentoAplicado = false;
let descuento = 0;
let costoEnvio = null;

function mostrarMenu() {
  return prompt(
    "=== TIENDA WEB ===\n" +
      "1. Agregar Producto (50.000)\n" +
      "2. Aplicar Cupón\n" +
      "3. Calcular Envío\n" +
      "4. Total a Pagar\n" +
      "5. Salir\n" +
      "Elige una opción:",
  );
}

function agregarProducto() {
  subtotal = subtotal + 50000;
  console.log("Producto agregado. Subtotal actual: $" + subtotal);
}

function aplicarCupon() {
  if (descuentoAplicado === true) {
    console.log("Ya aplicaste un cupón. No puedes aplicar otro.");
    return;
  }

  let cupon = prompt("Ingrese el código del cupón:");

  if (cupon === "DTO10") {
    descuento = subtotal * 0.1;
    subtotal = subtotal - descuento;
    descuentoAplicado = true;
    console.log("Cupón del 10% aplicado.");
  } else if (cupon === "DTO20") {
    descuento = subtotal * 0.2;
    subtotal = subtotal - descuento;
    descuentoAplicado = true;
    console.log("Cupón del 20% aplicado.");
  } else {
    console.log("Cupón no válido.");
  }
}

function calcularEnvio() {
  if (subtotal < 100000) {
    costoEnvio = 15000;
    console.log("El envío cuesta $15.000");
  } else {
    costoEnvio = 0;
    console.log("El envío es gratis");
  }
}

function calcularTotal() {
  if (costoEnvio === null) {
    console.log("Primero debes calcular el envío (opción 3).");
    return;
  }

  let total = subtotal + costoEnvio;

  console.log("=== RESUMEN ===");
  console.log("Subtotal sin descuento: $" + (subtotal + descuento));
  console.log("Descuento aplicado: $" + descuento);
  console.log("Costo de envío: $" + costoEnvio);
  console.log("TOTAL A PAGAR: $" + total);
  console.log("================");
}

let opcion;

do {
  opcion = mostrarMenu();

  if (opcion === "1") {
    agregarProducto();
  } else if (opcion === "2") {
    aplicarCupon();
  } else if (opcion === "3") {
    calcularEnvio();
  } else if (opcion === "4") {
    calcularTotal();
  } else if (opcion === "5") {
    console.log("Saliendo del sistema...");
  } else {
    console.log("Opción inválida, intenta de nuevo.");
  }
} while (opcion !== "5");
