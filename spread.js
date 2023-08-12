const cookie = {
  base: 'cookie',
  madeIn: 'korea',
};

const chocochipCookie = {
  base: 'cookie',
  madeIn: 'korea',
  topping: 'chocochip',
};

const blueberryCookie = {
  base: 'cookie',
  madeIn: 'korea',
  topping: 'blueberry',
};

const strawberryCookie = { ...cookie, topping: 'strawberry' };

const noTopingCookies = ['촉촉한 쿠키', '안촉촉한 쿠키'];
const topingCookies = ['블루베리 쿠키', '딸기 쿠키', '초코칩 쿠키'];
allCookies = [...noTopingCookies, ...topingCookies];
console.log(allCookies);
