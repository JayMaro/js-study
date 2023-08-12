function hello() {
  return 'hello';
}

async function helloAsync() {
  return 'hello Async'; // resolve
}

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function helloAsync2() {
  return delay(3000).then(() => {
    return 'hello Async';
  });
}

// => await은 async function 내에서만 사용할 수 있다.
// await이 붙은 함수가 실행된 이후 실행된다.(동기적으로 동작한다.)
async function awaitAsync() {
  await delay(3000);
  await helloAsync();
  return 'awaitAsync';
}

// console.log(hello());
// console.log(helloAsync());
// helloAsync().then((res) => console.log(res));
// helloAsync2().then((res) => console.log(res));
awaitAsync().then((res) => console.log(res));
