var isPositive = (number) => number > 0 

var isNegative = (number) => number < 0

var isZero = (number) => number == 0

var isEven = (number) => number % 2 == 0

var describeNumber = (number) => ({
    positive: isPositive(number),
    negative: isNegative(number),
    zero: isZero(number),
    even: isEven(number)}
)

console.log(describeNumber(8));
console.log(describeNumber(-3));
console.log(describeNumber(0));
console.log(describeNumber(7));