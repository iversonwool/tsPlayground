let num: number = 1;
let num1 = 2; //类型推断
// num = 'string'

let num3: Number = Number(2);
console.log(typeof num3);

// num = num3 //fail

num3 = num;

const numArray: number[] = [1, 2, 3, 4, 5]; // array of numbers
const tuple1: [string, number] = ["1", 2]; // tuple 类型需要显示声明

const hook: [any, Function] = [1, function () {}]; // hook?

// const a = null ?? 'string'
let anyValue;
anyValue = 2;
anyValue = 5;

//数组的接口定义
interface ArrayInterface {
  [index: number]: any;
}

let arrayV1: ArrayInterface = [1, 1, 3]

function xxxxxxx() {
  let a: IArguments = arguments;
}


//overload
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string | void {
  if (typeof x === "number") {
    return Number(x.toString().split("").reverse().join(""));
  } else if (typeof x === "string") {
    return x.split("").reverse().join("");
  }
}

reverse("123");
