function study(language: { name: string; age: () => number }) {
  console.log(
    `${language.name} language was created ${language.age()} years ago`
  );
}

study({ name: "C", age: () => new Date().getFullYear() - 1990 });

let ts = {
  name: "typescript",
  age: () => 1990,
  id: "1",
};

study(ts); // no warnings

// study({ name: 's', age: () => 1998, id: '2' });//ts(2345)
interface ProgrammLanguage {
  name: string;
  age: () => number;
}

function newStudy(language: ProgrammLanguage) {
  console.log(
    `${language.name} language was created ${language.age()} years ago`
  );
}

//函数类型
interface StudyLanguage {
  (language: ProgrammLanguage): void;
}

let studyInterface: StudyLanguage = (language) => {
  console.log(language.name, language.age());
};

// interface MultiFunc {
//   (name: string): string;
//   (age: number): void;
// }

// let multiFunc: MultiFunc = (name: string, age: number) => name || undefined;


interface SMap {
  [rank: number]: string;
  s: number;

  // 1: number;//ts(2412)
}

interface MMM {
  [propName: string]: string;
}


let a: MMM = {
  s: '111',
  1: '1111'
}


// interface NNN {
//   [propName: string]: string;
//   age: number;

// }

//

type AAAA = {
  pName(name: string): void;
}

class C1 implements AAAA {
  pName(n: string) {
    console.log(n)
  }
}