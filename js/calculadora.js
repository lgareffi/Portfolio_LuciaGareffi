 function suma(a, b) {
    return a + b;
}

function resta(a, b) {
    return a - b;
}

function multiplicacion(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}

function porcentaje(a) {
    return a / 100;
}

function raiz(a) {
    return Math.sqrt(a);
}

const botones = document.querySelectorAll('button');
const inputSpan = document.querySelector('.input');
const resultado = document.querySelector('.resultado');

let inputActual = '';
let operador = null;
let a = null;
let b = null;

botones.forEach(boton => {
    boton.addEventListener('click', () => {
        const valor = boton.textContent;

        if (!isNaN(valor)) {
            // Si es un número
            inputActual += valor;
            inputSpan.textContent = inputActual;
        } else if (valor === '.') {
            // Permitir solo un punto decimal en el número actual
            if (!inputActual.includes('.')) {
                if (inputActual === '') {
                    inputActual = '0.';
                } else {
                    inputActual += '.';
                }
                inputSpan.textContent = inputActual;
            }
        } else if (valor === 'AC') {
            inputActual = '';
            operador = null;
            a = null;
            b = null;
            inputSpan.textContent = '';
            resultado.textContent = '';
        } else if (valor === 'CE') {
            inputActual = '';
            inputSpan.textContent = '';
        } else if (valor === '=') {
            if (operador && a !== null && inputActual !== '') {
                b = parseFloat(inputActual);
                let res;
                switch (operador) {
                    case '+':
                        res = suma(a, b);
                        break;
                    case '-':
                        res = resta(a, b);
                        break;
                    case '*':
                        res = multiplicacion(a, b);
                        break;
                    case '/':
                        res = division(a, b);
                        break;
                    case '%':
                        res = porcentaje(a);
                        break;
                    case '√':
                        res = raiz(a);
                        break;
                    default:
                        res = '';
                }
                resultado.textContent = res;
                inputSpan.textContent = ''; // Oculta el input al mostrar el resultado
                inputActual = res.toString();
                operador = null;
                a = null;
                b = null;
            }
        } else if (valor === '%') {
            if (inputActual !== '') {
                a = parseFloat(inputActual);
                operador = valor;
                let res = porcentaje(a);
                resultado.textContent = res;
                inputSpan.textContent = ''; // Limpiar input, no mostrar resultado aquí
                inputActual = res.toString();
                operador = null;
                a = null;
            }
        } else if (valor === '√') {
            if (inputActual !== '') {
                a = parseFloat(inputActual);
                operador = valor;
                let res = raiz(a);
                resultado.textContent = res;
                inputSpan.textContent = ''; // Limpiar input, no mostrar resultado aquí
                inputActual = res.toString();
                operador = null;
                a = null;
            }
        } else {
            // Operadores + - * /
            if (inputActual !== '') {
                a = parseFloat(inputActual);
                operador = valor;
                inputActual = '';
                inputSpan.textContent = operador + ' ';
            } else if (resultado.textContent !== '') {
                // Si hay un resultado previo, usarlo como nuevo 'a' y limpiar resultado
                a = parseFloat(resultado.textContent);
                operador = valor;
                inputActual = '';
                resultado.textContent = '';
                inputSpan.textContent = a + ' ' + operador + ' ';
            }
        }
    });
});