import React from 'react';
import logo from './logo.svg';
import './App.css';
import useScreen from './custom-hook/useScreen';

function App() {
  const screen = useScreen();
  return (
    <div className="App">
      <h1>
        {screen}
        </h1>
    </div>
  );
}

export default App;
