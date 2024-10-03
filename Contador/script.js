let alarma;

function contar() {
    let segundos = +document.querySelector('#seg').value;
    document.querySelector('#salida').textContent = 'ON';
    setTimeout(finalizar, segundos * 1000);
    alarma = document.querySelector('#alarm');
    alarma.play();
}

function finalizar() {
    alert('Tiempo cumplido');
    document.querySelector('#salida').textContent = 'OFF';
    alarma = document.querySelector('#alarm');
    alarma.play();
    setTimeout(resetear, segundos);
}

function resetear() {
    if (alarma) {
        alarma.pause();
        alarma.currentTime = 0;
    }
    location.reload();
}