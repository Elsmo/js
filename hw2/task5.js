// 5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. 
// Обязательно использовать оператор return.

function sum(a, b) {
    return a + b;
  };

function diff(a, b){
    return a - b;
};

function product(a, b){
    return a * b;
};

function quotient(a, b){
    return a / b;
};


var x = parseInt(prompt('x: '))
var y = parseInt(prompt('y: '))
var oper = prompt('Введите математический оператор +, -, * или /: ')

switch (oper) {
    case '+':
        alert(sum(x, y));
        break;
    case '-':
        alert(diff(x, y));
        break;
    case '*':
        alert(product(x, y));
        break;
    case '/':
        alert(quotient(x, y));
        break;
}
