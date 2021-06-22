enum ENUM_A {
  one,
  two
}

enum ENUM_B {
  one,
  two
}

const cpWithOtherEnum = (param: ENUM_A) => {
  if (param === ENUM_B.two as unknown as ENUM_A) return param //ALERT bad
}

///////interface 用in
///////class 用 instanceof
interface Dog {
  wang: string;
}

interface Cat {
  miao: string;
}


const isDog = function (animal: Dog | Cat): animal is Dog {
  return 'wang' in animal
}

const getName = (animal: Dog | Cat) => {
  // if ('wang' in animal) {
  //   return animal.wang
  // }

  // if (isDog(animal)) return animal.wang

  
  // if (animal instanceof Dog) {
  //   return animal.wang;
  // } else if (animal instanceof Cat) {
  //   return animal.miao;
  // }
}