declare let result: {
  code: number;
  message: string;
  data: {
    name: string;
    userId: string;
  }[];
};


// 注意
// declare 与export 不要同级使用，不然的话，声明文件就需要导入了
// 在声明文件中 type 与 interface 也可以不用加declare ，效果相同


// declare namespace global {
//   const API_ENV: string;
// }