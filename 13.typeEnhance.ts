
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


console.log(a)

import {Person}from './12.typeCompatibility'

declare module './12.typeCompatibility' {
  interface Person {
    greet(): void;
  }
}

Person.prototype.greet = () => { console.log('greet') }