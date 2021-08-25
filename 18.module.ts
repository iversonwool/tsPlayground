export {};//// 如果有这句 是 module AAAA对外不可见
///////////////// 如果没这句 是 script AAAA 是 global的 对外可见


export const AAAA = 1;


export type ProjectName = string;

export namespace MyNamespace {

  export type name = string;
  export type id = string;
}

declare global {
  type GlobalName = string;
}