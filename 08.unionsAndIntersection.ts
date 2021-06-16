function formatPX(x: unknown) {
  if (typeof x === "number") {
    return `${x}px`;
  }
  if (typeof x === "string") {
    return `${parseInt(x, 10)}px`;
  }

  throw Error("need a number or a string");
}

formatPX(true);

interface Bird {
  layEggs(): void;
  fly(): void;
}

interface Fish {
  layEggs: () => void; //另外一种写法
  swim(): void;
}

const getPet: () => Bird | Fish = () => {
  return {
    // ...
  } as Bird | Fish;
};

const getPet1: () => Bird | Fish = () => ({} as Bird | Fish);

const smallPet = getPet();

smallPet.layEggs();

if ("fly" in smallPet) {
  //in operator
  smallPet.fly();
} else {
  smallPet.swim();
}


type Useless = number & string//never

let useless: Useless


type URStr = 'string' | string; // 类型是 string


type BorderColor = 'black' | 'red' | 'green' | 'yellow' | 'blue' | string; // 类型缩减成 string

//BorderColor === string
// 不要慌，TypeScript 官方其实还提供了一个黑魔法，
// 它可以让类型缩减被控制。如下代码所示，我们只需要给父类型添加“& {}”即可。



type BorderColor1 = 'black' | 'red' | 'green' | 'yellow' | 'blue' | string & {}; 
// 字面类型都被保留

let borderColor: BorderColor1 = 'red'

let borderColor1 : BorderColor1 = 'cyan'
