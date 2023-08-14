import './App.css';

import MyHeader from './MyHeader';
import Counter from './Counter';
import Container from './Container';

function App() {
  const counterProps = {
    test1: 5,
    test2: 3,
    testValue: 100,
  };

  return (
    <div className="App">
      <Container>
        <MyHeader />
        <Counter {...counterProps} />
      </Container>
    </div>
  );
}

export default App;
