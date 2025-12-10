var numProducto = 0;

function actualizarContador() {
    var tabla = document.getElementById("tblFactura").getElementsByTagName('tbody')[0];
    numProducto = tabla.rows.length;
    document.getElementById("contadorFilas").innerText = numProducto;
}

function addFila() {
    var tabla = document.getElementById("tblFactura").getElementsByTagName('tbody')[0];
    var nuevaFila = tabla.insertRow(-1);

    var celda1 = nuevaFila.insertCell(0);
    var celda2 = nuevaFila.insertCell(1);
    var celda3 = nuevaFila.insertCell(2);
    var celda4 = nuevaFila.insertCell(3);
    var celda5 = nuevaFila.insertCell(4);
    var celda6 = nuevaFila.insertCell(5);
    
    actualizarContador();
}

function eliminarFila(boton) {
    var fila = boton.parentNode.parentNode;
    fila.parentNode.removeChild(fila);
    actualizarContador();
}
