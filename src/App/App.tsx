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
      <Button text="un bouton" onClick={(text: any) => console.log(text)} />
      <Button text="un autre bouton"  />
    </div>
  );
}

export default App;
