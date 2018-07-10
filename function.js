var sayHello;
sayHello = function () {  
    console.log("hello world");   
}

var number1 = 1000;
var number2 = 66;
var result;
var findTotal;
findTotal = function () {  
    result = number1 + number2;
}
sayHello();
findTotal();
console.log(number1 + " + " + number2 + " = " + result);
