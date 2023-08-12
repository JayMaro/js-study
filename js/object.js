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

// 항목 추가
test.key7 = '추가한 항목';
test['key8'] = '항목 추가 2';
console.log(getPropertyValue('key7'));
console.log(getPropertyValue('key8'));

// 항목 수정
console.log(getPropertyValue('key1'));
test.key1 = 456;
console.log(getPropertyValue('key1'));

// 항목 삭제 -> but 메모리에 남아 있기 때문에 직접 값을 null로 변경하는걸 추천
delete test.key1;
console.log(test);

test.key1 = null;
console.log(test);

// 객체 내부 메서드에서 멤버 사용
const person = {
  name: 'maro', // 멤버
  age: 29, // 멤버
  say: function () {
    // 메서드
    console.log(`hello my name is ${this.name}`);
  },
};
console.log(person.say());
// 객체 내부에 해당 property 키가 있는지 확인
console.log('name' in person);
console.log('age' in person);
console.log('gender' in person);
