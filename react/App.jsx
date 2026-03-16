import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <h1>Hello from React!</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default App;
