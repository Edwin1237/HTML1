document.addEventListener('DOMContentLoaded', function() {
    const boton = document.getElementById('contarBtn');
    boton.addEventListener('click', contarPalabra);
});

function contarPalabra() {
    const frase = document.getElementById('frase').value.toLowerCase();
    const palabra = document.getElementById('palabra').value.toLowerCase();
    const resultado = document.getElementById('resultado');

    if (!frase || !palabra) {
        resultado.textContent = 'Por favor, completa ambos campos.';
        return;
    }

    const palabras = frase.split(/\s+/);
    let contador = 0;
    
    palabras.forEach(pal => {
        if (pal === palabra) {
            contador++;
        }
    });

    if (contador === 0) {
        resultado.textContent = `La palabra "${palabra}" no aparece en la frase.`;
    } else if (contador === 1) {
        resultado.textContent = `La palabra "${palabra}" aparece 1 vez.`;
    } else {
        resultado.textContent = `La palabra "${palabra}" aparece ${contador} veces.`;
    }
