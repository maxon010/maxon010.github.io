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
module.exports = pow;