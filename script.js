let subtotal = 0;
let descuentoAplicado = false;
let descuento = 0;
let costoEnvio = null;

let opcion;

do {
    opcion = prompt(
        "=== TIENDA WEB ===\n" +
        "1. Agregar Producto (50.000)\n" +
        "2. Aplicar Cupón\n" +
        "3. Calcular Envío\n" +
        "4. Total a Pagar\n" +
        "5. Salir\n" +
        "Elige una opción:"
    );

    
    
    
    if (opcion === "1") {
        subtotal = subtotal + 50000;
        console.log("Producto agregado. Subtotal actual: $" + subtotal);
    }

    else if (opcion === "2") {

        if (descuentoAplicado === true) {
            console.log("Ya aplicaste un cupón. No puedes aplicar otro.");
        } else {
            let cupon = prompt("Ingrese el código del cupón:");

            if (cupon === "DTO10") {
                descuento = subtotal * 0.10;
                subtotal = subtotal - descuento;
                descuentoAplicado = true;
                console.log("Cupón del 10% aplicado.");
            } 
            else if (cupon === "DTO20") {
                descuento = subtotal * 0.20;
                subtotal = subtotal - descuento;
                descuentoAplicado = true;
                console.log("Cupón del 20% aplicado.");
            } 
            else {
                console.log("Cupón no válido.");
            }
        }
    }

    else if (opcion === "3") {

        if (subtotal < 100000) {
            costoEnvio = 15000;
            console.log("El envío cuesta $15.000");
        } else {
            costoEnvio = 0;
            console.log("El envío es gratis.");
        }
    }

    
    else if (opcion === "4") {

        if (costoEnvio === null) {
            console.log("Debes calcular el envío primero (opción 3).");
        } else {

            let total = subtotal + costoEnvio;

            console.log("=== RESUMEN ===");
            console.log("Subtotal sin descuento: $" + (subtotal + descuento));
            console.log("Descuento aplicado: $" + descuento);
            console.log("Costo de envío: $" + costoEnvio);
            console.log("TOTAL A PAGAR: $" + total);
            console.log("================");
        }
    }

    else if (opcion === "5") {
        console.log("Saliendo del sistema...");
    }

    else {
        console.log("Opción no válida. Intenta de nuevo.");
    }

} while (opcion !== "5");
