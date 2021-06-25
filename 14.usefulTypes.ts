interface Person1 {
  name: string;
  age: number;
  weight?: number;
}



type PartialPerson = Partial<Person1>

type RequiredPerson = Required<Person1>