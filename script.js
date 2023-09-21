function calculate(operation) {
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    let result = '';

    switch (operation) {
        case 'fibonacci':
            result = calculateFibonacci(num1);
            break;
        case 'volumeKotak':
            result = calculateVolumeKotak(num1, num2);
            break;
        case 'volumeBola':
            result = calculateVolumeBola(num1);
            break;
        default:
            result = 'Operasi tidak valid';
    }

    document.getElementById('output').innerHTML = result;
}

function calculateFibonacci(n) {
    let a = 0, b = 1, next;
    let result = 'Deret Fibonacci: ';

    for (let i = 0; i < n; i++) {
        result += a + ', ';
        next = a + b;
        a = b;
        b = next;
    }

    return result;
}

function calculateVolumeKotak(panjang, lebar) {
    const volume = panjang * lebar * lebar;
    return `Volume Kotak: ${volume}`;
}

function calculateVolumeBola(jariJari) {
    const volume = (4 / 3) * Math.PI * Math.pow(jariJari, 3);
    return `Volume Bola: ${volume.toFixed(2)}`;
}
