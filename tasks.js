// функция, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
    return typeof n === 'number' && (n | 0) === n;
}

// функция, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
    const res = [];
    for (let i = 2; i <= 20; i += 2) {
        res.push(i);
    }
    return res;
} 

// функция, считающая сумму чисел до заданного используя цикл
function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

// функция, считающая сумму чисел до заданного используя рекурсию
function recSumTo(n) {
    if (n <= 0) return 0;
    return n + recSumTo(n-1);
}

// функция, считающая факториал заданного числа
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n-1);
}

// функция, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) {
    if (!isInteger(n) || n <= 0) return false;
    while (n % 2 === 0) {
        n /= 2;
    }
    return n === 1;
}

// функция, которая находит N-е число Фибоначчи
function fibonacci(n) {
    if (n <= 1) return n;
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        let next = a + b;
        a = b;
        b = next;
    }
    return b;
}

/** функция, которая принимает начальное значение и функцию операции и возвращает функцию, 
выполняющую эту операцию. Если функция операции (operatorFn) не задана - по умолчанию всегда
возвращается начальное значение (initialValue) **/
function getOperationFn(initialValue, operatorFn) {
    if (typeof operatorFn !== 'function') {
        return function() {
            return initialValue;
        };
    }
    let storedValue = initialValue;
    return function(newValue) {
        storedValue = operatorFn(storedValue, newValue);
        return storedValue;
    };
}

/** функция создания генератора арифметической последовательности. При ее вызове, она возвращает 
 новую функцию генератор - generator(). Каждый вызов функции генератора возвращает следующий
 элемент последовательности. Если начальное значение не передано, то оно равно 0. Если шаг не указан, 
 то по дефолту он равен 1. Генераторов можно создать сколько угодно - они все независимые. **/

 function sequence(start = 0, step = 1) {
    let current = start;
    return function() {
        const result = current;
        current += step;
        return result;
    };
}

/** функция, которая принимает два значения и возвращает true только в том случае, если они имеют 
 одинаковое значение или являются объектами с одинаковыми свойствами, значения которых также равны 
 при сравнении с рекурсивным вызовом deepEqual. Учитывать специфичные объекты 
 (такие как Date, RegExp и т.п.) не обязательно **/

function deepEqual(firstObject, secondObject) {
     if (firstObject === secondObject) {
        return true;
    }
    
    if (typeof firstObject !== 'object' || firstObject === null ||
        typeof secondObject !== 'object' || secondObject === null) {
        return false;
    }
    
    const keys1 = Object.keys(firstObject);
    const keys2 = Object.keys(secondObject);
    
    if (keys1.length !== keys2.length) {
        return false;
    }
    
    for (let key of keys1) {
        if (!keys2.includes(key) || !deepEqual(firstObject[key], secondObject[key])) {
            return false;
        }
    }

    return true;
}

module.exports = {
    isInteger,
    even,
    sumTo,
    recSumTo,
    factorial,
    isBinary,
    fibonacci,
    getOperationFn,
    sequence,
    deepEqual,
};