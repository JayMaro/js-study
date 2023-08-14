import React, { useState } from 'react';
import OddEvenRes from './OddEvenRes';

const Counter = (props) => {
  console.log(props);

  // 상태가 바뀌면 컴포넌트가 다시 랜더링 된다.
  let [count, setCount] = useState(0);

  const onIncrease = () => {
    setCount(count + 1);
  };

  const onDecrease = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h2>{count}</h2>
      <h2>{props.test1}</h2>
      <h2>{props.test3}</h2>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
      <OddEvenRes count={count} />
    </div>
  );
};
// 기본값 설정
Counter.defaultProps = {
  test3: 3,
};

export default Counter;
