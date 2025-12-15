function calcular() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var operacion = document.getElementById('operacion').value;
    var resultado = document.getElementById('resultado');
    var mensaje = document.getElementById('mensaje');
    
    
    mensaje.textContent = '';
    
    if (isNaN(num1) || isNaN(num2)) {
        alert('Error: Ingresa ambos números');
        resultado.value = '';
        return;
    }
    
    if (operacion === '') {
        alert('Error: Selecciona una operación');
        resultado.value = '';
        return;
    }
    
    var res;
    
    if (operacion === 'suma') {
        res = num1 + num2;
    } else if (operacion === 'resta') {
        res = num1 - num2;
    } else if (operacion === 'multiplicacion') {
        res = num1 * num2;
    } else if (operacion === 'division') {
        if (num2 === 0) {
            alert('Error: No se puede dividir entre cero');
            resultado.value = '';
            return;
        }
        res = num1 / num2;
    }
    
    
    resultado.value = res;
}
