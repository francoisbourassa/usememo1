import React, { useState, useMemo } from 'react';
import './App.css';

function computeExpensiveValue(num) {
  console.log("Expensive computation...");
  // Simulons une opération coûteuse avec une boucle
  for (let i = 0; i < 1000000000; i++) {}
  return num * 2;
}

function App() {
  const [number, setNumber] = useState(1);
  const [toggle, setToggle] = useState(true);

  const expensiveValue = useMemo(() => {
    return computeExpensiveValue(number);
  }, [number]);

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => setNumber(prevNumber => prevNumber + 1)}>
          Increment Number
        </button>
        <button onClick={() => setToggle(prevToggle => !prevToggle)}>
          Toggle
        </button>
        <div>Number: {number}</div>
        <div>Expensive Value: {expensiveValue}</div>
        <div>{toggle ? "Visible" : "Hidden"}</div>
      </header>
    </div>
  );
}

export default App;
