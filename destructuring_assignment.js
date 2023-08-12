// 배열의 비구조화 할당
let arr = ['one', 'two', 'three'];

let one = arr[0];
let two = arr[1];
let three = arr[2];

console.log(one, two, three);

let [one2, two2, three2] = arr;
let [num1, num2, num3, num4 = 'four'] = ['one', 'two', 'three'];
console.log(one2, two2, three2);

let a = 10;
let b = 20;
[a, b] = [b, a];
console.log(a, b);

// 객체의 비구조화 할당

let objectArr = { one3: 'one', two3: 'two', three3: 'three' };
let { one3, two3, three3, three3: myNum, test = 'test' } = objectArr;
console.log(one3, two3, three3, myNum, test);
