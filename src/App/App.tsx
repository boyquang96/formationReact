import React, { useEffect, useState } from 'react';

import './App.css';
import Button from './components/ui/Button/Button';
/**
 * 
 * @returns rendu jsx
 */
function App() {

  const [counter, setCounter] = useState(0);
  useEffect(() => {
    // return () => {
    //   effect
    // };
    console.log(counter)
  }, [counter])

  return (
    <div className="App" data-testid="App" >
      <div>Counter value: {counter}</div>
      <Button text="un bouton" onClick={() => { setCounter(counter + 1); }} bgColor="pink" style={{ backgroundColor: "red" }} >
        +
      </Button>
      <Button onClick={() => { setCounter(counter - 1); }} text={"un autre bouton"} style={{ color: "red" }} >
        -
      </Button>
    </div>
  );
}

export default App;
