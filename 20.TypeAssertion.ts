interface Animal {
  name: string;
}

interface Dog111 {
  name: string;
  run(): void;
}

let tom: Dog111 = {
  name: 'tom',
  run() {
    console.log('run')
  }
}

let animal: Animal = tom;
animal.name
// animal.run()



// TypeScript 并不关心 Cat 和 Animal 之间定义时是什么关系，
// 而只会看它们最终的结构有什么关系——所以它与 Dog111 extends Animal 是等价的：

// TypeScript 中更专业的说法，即：Animal 兼容 Dog。
// 父类兼容了子类
// 大类 兼容了 小类


result = {
  code: 1,
  message: 'success',
  data: [{name: 'lee', userId: '001'}]
}


// API_ENV = 'string'