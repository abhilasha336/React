import React, { useState } from 'react';
import Youtube from './Youtube';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>This is my first Vite app</h1>
      <Youtube />
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <h2>Count is {count}</h2>
    </>
  );
}

export default App;
