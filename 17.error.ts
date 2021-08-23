// const p = new Promise<void>((resolve) => {
//   resolve();
// });

export {};



// const s: unique symbol = Symbol()


interface CSSProperties {
  display: 'block' | 'flex' | 'grid';
}

const style = {
  display: 'flex'
}

const cssStyle: CSSProperties = style//ts:2322

// to fix

//method 1
const style1: CSSProperties = {
  display: 'flex'
}

const c: CSSProperties = style1


//method 2

const style3 = {
  display: 'flex' as 'flex'
}

const c1: CSSProperties = style3