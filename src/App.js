import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState } from 'react'

function App() {
//const [step, setStep] = React.useState(0);
const [step, setStep] = useState(0)

const onClickMinus = () => {
  setStep(step - 1);
  console.log(step);
}
let onClickPlus = () => {
  setStep(step + 1);
  console.log(step);
}
  return (
    <div className="App">
      <div>
        <h2>Counter</h2>
        <h1>{step}</h1>
        <button onClick={onClickMinus} className="minus">- Minus</button>
        <button onClick={onClickPlus} className="plus">+ Plus</button>
      </div>
    </div>
  );
}

export default App;
