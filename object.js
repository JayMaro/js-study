let literalObj = {};
let testObject = new Object();

let test = {
  key: 'value', // 프로퍼티
  key1: 123,
  key2: true,
  key3: undefined,
  key4: [1, 2],
  key5: () => {},
  key6: function () {},
}; // 객체 리터럴 방식

// 점 표기법
test.key1;
test.key2;

// 괄호 표기법. 변수를 통해 호출할 수 있음
test['key1'];
function getPropertyValue(key) {
  return test[key];
}

console.log(getPropertyValue('key4')); // [1, 2]
