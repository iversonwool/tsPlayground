let num: number = 1
let num1 = 2 //类型推断
// num = 'string'


let num3: Number = Number(2)
console.log(typeof num3)


// num = num3 //fail

num3 = num






const numArray: number[] = [1, 2, 3, 4, 5] // array of numbers
const tuple1: [string, number] = ['1', 2] // tuple 类型需要显示声明

const hook: [any, Function] = [1, function() {}] // hook?

// const a = null ?? 'string'