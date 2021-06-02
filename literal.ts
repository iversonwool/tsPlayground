const str1 = "world";

const string1: string = "hello";

// 这两种写法并不等价

// 三种字面量类型
//number
//string
//boolean
const strg: "heelo" = "heelo";

const sss: 3 = 3;

const bool: true = true;

interface Config {
  size: "small" | "large";
  disabled: true | false;
  margin: 0 | 2 | 4;
}

// Literal Widening



//Type Widening

let s =null // s :any
// 比如对 null 和 undefined 的类型进行拓宽，
// 通过 let、var 定义的变量如果满足未显式声明类型注解且被赋予了 null 或 undefined 值，
// 则推断出这些变量的类型是 any：


let x;


let anyFunc = (param = null) => param

anyFunc(undefined)