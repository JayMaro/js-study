let a = '';

if (a) {
  console.log('TRUE');
} else {
  console.log('FALSE');
}

// TRUE
// 문자열, [], 0이 아닌 숫자 등
// FALSE
// null, undefined, 0, -0, NaN, ""

const getName = (person) => {
  if (!person) {
    return '객체가 아닙니다.';
  }
  return person.name;
};

let person = { name: 'maro' };
const name = getName(person);
console.log(name);
