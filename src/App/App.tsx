import React from 'react';

import './App.css';
import Button from './components/ui/Button/Button';
/**
 * 
 * @returns rendu jsx
 */
function App() {
  return (
    <div className="App" data-testid="App" >
      <Button text="un bouton" onClick={(text: any) => console.log(text)} >
        <img alt='image1' src='https://cdn-icons-png.flaticon.com/512/4436/4436481.png' width={30} height={30} />
        OK
      </Button>



      <Button text="un autre bouton">
        test
      </Button>
    </div>
  );
}

export default App;
