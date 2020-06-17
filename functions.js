function getSum(num1, num2) {
    return num1 + num2;
}
// console.log(getSum(4, 5))
// accept any (strings + numbers), but still returns a number
var mySum = function (num1, num2) {
    if (typeof num1 == 'string') {
        num1 = parseInt(num1);
    }
    if (typeof num2 == 'string') {
        num2 = parseInt(num2);
    }
    return num1 + num2;
};
console.log(mySum(3, '5'));
