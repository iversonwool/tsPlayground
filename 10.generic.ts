function reflect(param: unknown) {
  return param;
}

const st = reflect("string");

const num11 = reflect(4);

function reflectArray<P>(param: P[]) {
  return param;
}

const r1 = reflectArray([1, "2"]);

/////react useState
function useState<S>(state: S, initialValue?: S) {
  return [state, (s: S) => void 0] as unknown as [S, (s: S) => void];
}

///////runtime error
const p111 = undefined as unknown as string;

const ss = p111.length;

function GenericComp<P>(props: { prop1: string }) {
  return null;
}

GenericComp<{ name: string }>({ prop1: "1111" });

type BooleanOrString = boolean | string;
type StringOrNumberArray<E> = E extends string | number ? E[] : E;
////boolean | string[]
type WhatIsThis = StringOrNumberArray<BooleanOrString>;

//////string | boolean
type BooleanOrStringGot = BooleanOrString extends string | number
  ? BooleanOrString[]
  : BooleanOrString;

function reflectSpecifiedType<P extends number | string | boolean>(param: P) {
  return param;
}

reflectSpecifiedType(true);

reflectSpecifiedType("true");
reflectSpecifiedType(1);

// reflectSpecifiedType(null)////ts(2345)

interface ReduxModel<S extends {} = { id: number; name: string }> {
  state: S;
}

interface ReduxModelMixed<S extends object = { id: number; name: string }> {
  state: S;
}

// 因为 {} 和 object 是有区别的，{} 表示所有原始类型和非原始类型的集合，object 表示所有非原始类型的集合
const model: ReduxModel<number> = {
  state: 1,
};

const modelMixed: ReduxModelMixed<{}> = {
  state: {},
};
