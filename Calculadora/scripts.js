function mostrarResultado(resultado){
    document.getElementById('display').value = resultado;
}

function suma(){
    let numero1 = +document.getElementById('num1').value;
    let numero2 = +document.getElementById('num2').value;
    mostrarResultado(numero1 + numero2);
}

function resta(){
    let numero1 = +document.getElementById('num1').value;
    let numero2 = +document.getElementById('num2').value;
    mostrarResultado(numero1 - numero2);
}

function multiplicacion(){
    let numero1 = +document.getElementById('num1').value;
    let numero2 = +document.getElementById('num2').value;
    mostrarResultado(numero1 * numero2);
}

function division(){
    let numero1 = +document.getElementById('num1').value;
    let numero2 = +document.getElementById('num2').value;
    if (numero2 !== 0) {
        mostrarResultado(numero1 / numero2);
    } else {
        mostrarResultado('Error: División por cero');
    }
}

function exponente(){
    let numero1 = +document.getElementById('num1').value;
    let numero2 = +document.getElementById('num2').value;
    mostrarResultado(Math.pow(numero1, numero2));
}

function radical(){
    let numero1 = +document.getElementById('num1').value;
    let numero2 = +document.getElementById('num2').value;
    
    if (numero1 <= 0) {
        mostrarResultado('Error: El índice debe ser positivo');
    } else if (numero2 < 0 && numero1 % 2 === 0) {
        mostrarResultado('Error: Número imaginario');
    } else {
        let resultado = Math.pow(Math.abs(numero2), 1/numero1);
        if (numero2 < 0) {
            resultado = -resultado;
        }
        mostrarResultado(resultado);
    }
}

function borrar(){
    document.getElementById('display').value = ' ';
    document.getElementById('num1').value = ' ';
    document.getElementById('num2').value = ' ';
}