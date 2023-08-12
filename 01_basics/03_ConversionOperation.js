//************************************************** Conversion ********************************************

let score = 33
console.log(typeof(score))
let valueInNumber = Number(score)
console.log(typeof(valueInNumber))
console.log(valueInNumber)

// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0
//null => 0
// undefined = NaN

let isboolean = "Kajal"
let ConvertBoolean = Boolean(isboolean)
console.log(ConvertBoolean)

// 1 => true; 0 => false
// "" => false
// "kajal" => true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

//***************************************** Operation ***********************************************************

let str1 = "hello"
let str2 = " Kajal"

let str3 = str1 + str2
console.log(str3);
console.log(1 + 2 + '2');
console.log('2' + 1 + 2);
console.log(+true);
console.log(+false);
let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion