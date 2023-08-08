// 값이 존재할 땐 해당 값으로 할당
// 값이 존재하지 않으면 설정한 값으로 할당
let a = 10;
let b = a ?? 20;
let c = null;
let d = c ?? 20;

console.log(b);
console.log(d);
