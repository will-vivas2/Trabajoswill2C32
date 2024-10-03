function promediar() {
    //let o const
    const nota1 = +document.querySelector('#nota1').value;
    const nota2 = +document.querySelector('#nota2').value;
    const nota3 = +document.querySelector('#nota3').value;
    const mostrar = document.querySelector('#salida');
    const promedio = (nota1 * 0.35) + (nota2 * 0.35) + (nota3 * 0.3);

if (nota1 >=1 && nota1 <= 10 && nota2 >=1 && nota2 <= 10 && nota3 >=1 && nota3 <=10){
    if (promedio >= 6 - 0.0001){
        mostrar.textContent = promedio.toFixed(2) + ', ¡APROBADO!';
    } 
    else {
        mostrar.textContent = promedio.toFixed(2) + ', REPROBADO :(';
    }
} 

else {
    mostrar.textContent = 'Ingrese notas con valores entre 1 y 10';
}

}