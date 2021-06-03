interface Entity {
  //声明
  add: (a: number, b: number) => number;
  sub(a: number, b: number): number;
  //两种写法
}

const entity: Entity = {
  add(a, b) {
    return a + b;
  },
  sub: (a, b) => a - b,
};

function gen(a: string): number {

  return Number(a);
}

function sum(...numbers: (number | string)[]): number {
  //由于reduce方法传入了initialValue 且为number类型
  //所以prev能类型推断为number类型
  //但ts没法断言运行时也就是运行结果为number
  return numbers.reduce<number>((prev, current) => prev + Number(current), 0);
}

interface Person {
  name: string;
  say(this: Person): void;
}

const p: Person = {
  name: 'hello',
  say() {
    console.log(this.name)
  }
}

p.say()

const say = p.say
// say()//ts(2684)

/**
 * 注意：显式注解函数中的 this 类型，
 * 它表面上占据了第一个形参的位置，
 * 但并不意味着函数真的多了一个参数，
 * 因为 TypeScript 转译为 JavaScript 后，
 * “伪形参” this 会被抹掉，
 * 这算是 TypeScript 为数不多的特有语法。
 */



// ------
function isString(s): s is string {//类型谓词
  // 实际上是告诉引擎，当守卫返回 true 的时候，将被守卫的类型缩小到 is 指定的更明确的类型
  return typeof s === 'string'
}



function isNumber(n: number): boolean {
  return typeof n === 'number'
}

function op(x: unknown) {
  if (isString(x)) {}
  if (isNumber(x)) {}
}