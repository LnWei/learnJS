//5.5.5 函数属性和方法
// function sum(num1,num2) {
//     return num1 + num2;
// }
//
// function callSum(num1, num2) {
//     return sum.call(this,num1,num2);
// }


//5.6 String
var stringValue = "hellow";
var result = stringValue.concat(" ,world","!")

function Alert() {
    alert(result);
}

function User() {
    this.name = "zsss";
    this.age = 22;
}