function dado() {
    let min = +document.querySelector('#min').value;
    let max = +document.querySelector('#max').value;
    
    if (min > max) {
        [min, max] = [max, min]; 
    }
    
    let random = Math.floor(Math.random() * (max - min + 1)) + min;
    document.querySelector('#out').textContent = random;
}