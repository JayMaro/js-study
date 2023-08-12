const arr = [1, 2, 3, 4];
const objectArr = [{ color: 'red' }, { color: 'blue' }, { color: 'green' }];
const chars = ['나', '다', '가'];
const numbers = [0, 3, 4, 1, 2, 10, 8];
const strings = ['안녕하세요', '반갑습니다.'];

// forEach
arr.forEach((item) => console.log(item));

// map
const arr2 = arr.map((item) => item * 2); // === return item * 2

// includes
console.log(arr.includes(2));
console.log(arr.includes(100));

// indexOf
console.log(arr.indexOf(3));
console.log(arr.indexOf(100));

// findIndex
console.log(objectArr.findIndex((item) => item.color === 'red'));
console.log(objectArr.findIndex((item) => item.color === 'green'));

// find
console.log(objectArr.find((item) => item.color === 'green'));

// filter
const arr3 = arr.filter((item) => item % 2 === 0);
console.log(arr3);

// slice
const arr4 = arr.slice(0, 2);
const arr5 = arr.slice(3, 5);
console.log(arr4);

// concat
console.log(arr4.concat(arr5));

// sort 원본 배열 정렬
chars.sort();
console.log(chars);
numbers.sort(); // 사전순 정렬이기 때문에 정렬이 원하는대로 되지 않음
console.log(numbers);
numbers.sort((a, b) => a - b);
const compare = (a, b) => {
  if (a > b) {
    // 크다
    return 1;
  } else if (a < b) {
    // 작다
    return -1;
  } else {
    // 같다
    return 0;
  }
};
numbers.sort(compare); // 위와 동일하게 동작
console.log(numbers);

// join
console.log(strings.join(' '));
