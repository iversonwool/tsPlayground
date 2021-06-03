class Father {
  public firstName: string
  // private lastName: string = 'Stack'
  protected lastName: string = 'Stack'

  constructor(name: string) {
    this.firstName = name
  }

  // getLastName():string {
  //   return this.lastName
  // }
}

class Son extends Father {
  constructor(name: string) {
    super(name)
  }

  getLastName(): string {
    return this.lastName
  }
}


const f = new Father('Jim')
// f.getLastName();


const son = new Son('Tom')
son.getLastName()



abstract class A {
  abstract x: number;
  abstract y: number;
  abstract add(): number;
}

class B extends A {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    super()
    this.x = x
    this.y = y
  }
  add(): number{
    return this.x + this.y
  }
}