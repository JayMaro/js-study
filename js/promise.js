function isPositive(number, resolve, reject) {
  setTimeout(() => {
    if (typeof number === 'number') {
      // 성공: resolve
      resolve(number >= 0 ? '양수' : '음수');
    } else {
      // 실패: reject
      reject('주어진 값이 숫자형 값이 아닙니다.');
    }
  }, 2000);
}

isPositive(
  [],
  (res) => {
    console.log('성공적으로 수행됨: ', res);
  },
  (err) => {
    console.log('실패: ', err);
  }
);

// Promise 사용
function isPositiveP(number) {
  const executor = (resolve, reject) => {
    setTimeout(() => {
      if (typeof number === 'number') {
        // 성공: resolve
        console.log(number);
        resolve(number >= 0 ? '양수' : '음수');
      } else {
        // 실패: reject
        reject('주어진 값이 숫자형 값이 아닙니다.');
      }
    }, 2000);
  };

  const asyncTask = new Promise(executor);
  return asyncTask;
}

const res = isPositiveP(101);
res.then((res) => console.log(res));
isPositiveP('test')
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

//---------------sync_async의 콜백 지옥 개선--------------
function taskA(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = a + b;
      resolve(res);
    }, 3000);
  });
}

function taskB(a) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = a * 2;
      resolve(res);
    }, 1000);
  });
}

function taskC(a) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = a * -1;
      resolve(res);
    }, 2000);
  });
}

taskA(5, 1)
  .then((res) => {
    console.log('A RESULT:', res);
    return taskB(res); // Promise return
  })
  .then((res) => {
    // then chianing
    console.log('B RESULT:', res);
    return taskC(res);
  })
  .then((res) => {
    console.log('C RESULT:', res);
  });
