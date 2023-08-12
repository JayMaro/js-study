// 배열 순회
let arr = ['A', 'B', 'C'];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

let person = {
  name: 'maro',
  age: 29,
};

const personKeys = Object.keys(person);
const personValues = Object.values(person);

for (let i = 0; i < personKeys.length; i++) {
  let currentKey = personKeys[i];
  console.log(`${currentKey}: ${person[currentKey]}`);
  console.log(personValues[i]);
}
