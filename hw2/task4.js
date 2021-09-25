// 4. Присвоить переменной а значение в промежутке [0..15]. 
// С помощью оператора switch организовать вывод чисел от a до 15. 
// (по желанию можно использовать рекурсию)

var num = parseInt(Math.random() * (15-0) + 0);
var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
alert(num);
switch (num) {
    case 0:
        alert(arr);
        break;
    case 1:
        alert(arr.slice(1));
        break;
    case 2:
        alert(arr.slice(2));
        break;
    case 3:
        alert(arr.slice(3));
        break;
    case 4:
        alert(arr.slice(4));
        break;
    case 5:
        alert(arr.slice(5));
        break;
    case 6:
        alert(arr.slice(6));
        break;
    case 7:
        alert(arr.slice(7));
        break;
    case 8:
        alert(arr.slice(8));
        break;
    case 9:
        alert(arr.slice(9));
        break;
    case 10:
        alert(arr.slice(10));
        break;
    case 11:
        alert(arr.slice(11));
        break;
    case 12:
        alert(arr.slice(12));
        break;
    case 13:
        alert(arr.slice(13));
        break;
    case 14:
        alert(arr.slice(14));
        break;
    case 15:
        alert(arr.slice(15));
        break;
}
