function mostrar(resultado){
    document.getElementById('display').value = resultado;
}

function calcular(){
    let numero1 = +document.getElementById('act1').value;
    let numero2 = +document.getElementById('act2').value;
    let numero3 = +document.getElementById('act3').value;
    mostrar((numero1 * 0.15) + (numero2 * 0.1) + (numero3 * 0.1));
}