var base;
base = +prompt('Введите число');
var exponent;
exponent = +prompt('Введите степень');

function pow(a, b) {
    var result = 1;
    for (var i = 0; i < Math.abs(b); i++){
        if (b < 0){
                result /= a;
        } else {
            result *= a;
        }
    }
 return result;
}
var calculateResult = pow(base, exponent);
console.log ('Мой результат = ', calculateResult); 
console.log ('Результат Math.pow = ', Math.pow(base, exponent));