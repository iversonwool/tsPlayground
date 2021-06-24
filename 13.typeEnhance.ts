
function a1() {
  console.log('a')
}

declare function abc(): void;

declare module 'lodash' {
  export function first<T extends unknown>(array: T[]): T;
}


let niu = '2'


declare namespace $ {

  const version: number;

  function ajax(settings?: any): void;
}


$.version
$.ajax({body: {}})