// 일급 객체기 때문에 함수를 변수로 할당해서 매개변수로 사용할 수 있다.
let moodFunc = (mood, goodFunc, badFunc) => {
  if (mood === 'good') {
    goodFunc();
  } else {
    badFunc();
  }
};

let cry = () => {
  console.log('cry');
};

let laugh = () => {
  console.log('laugh');
};

moodFunc('sad', laugh, cry);
