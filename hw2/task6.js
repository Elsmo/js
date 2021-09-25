// 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), 
// где arg1, arg2 – значения аргументов, operation – строка с названием операции. 
// В зависимости от переданного значения операции выполнить одну из арифметических операций 
// (использовать функции из пункта 3) и вернуть полученное значение (использовать switch).


function mathOperation(arg1, arg2, operation){
    switch (operation){
        case 'сумма':
            alert(sum(arg1, arg2));
        break;
    case 'разность':
        alert(diff(arg1, arg2));
        break;
    case 'умножение':
        alert(product(arg1, arg2));
        break;
    case 'деление':
        alert(quotient(arg1, arg2));
        break;
    }
};


var a = parseInt(prompt('a: '))
var b = parseInt(prompt('b: '))
var oper = prompt('Введите название операции (сумма, разность, умножение или деление): ')
alert(mathOperation(a, b, oper))

// Если я правильно поняла, то мы можем использовать функции из другого js файла точно также
// как если бы они были описаны в этом файле, если сначала на страницу загружен файл с этими функциями,
// а потом уже файл, который использует их
