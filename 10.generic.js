function reflect(param) {
    return param;
}
var st = reflect('string');
var num11 = reflect(4);
function reflectArray(param) {
    return param;
}
var r1 = reflectArray([1, '2']);
/////react useState
function useState(state, initialValue) {
    return [state, function (s) { return void 0; }];
}
var p111 = undefined;
var ss = p111.length;


let a= 1;