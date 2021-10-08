var str1 = "world";
var string1 = "hello";
// 这两种写法并不等价
// 三种字面量类型
//number
//string
//boolean
var strg = "heelo";
var sss = 3;
var bool = true;
// Literal Widening
//Type Widening
var s = null; // s :any
// 比如对 null 和 undefined 的类型进行拓宽，
// 通过 let、var 定义的变量如果满足未显式声明类型注解且被赋予了 null 或 undefined 值，
// 则推断出这些变量的类型是 any：
var x;
var anyFunc = function (param) {
    if (param === void 0) { param = null; }
    return param;
};
anyFunc(undefined);
