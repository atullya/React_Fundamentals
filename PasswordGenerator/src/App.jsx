import { useState } from "react";

import "./App.css";
import { LC, NC, SC, UC } from "./data/PassChar";

function App() {
  let [uppercase, setuppercase] = useState(false);
  let [lowercase, setlowercase] = useState(false);
  let [snumber, setnumber] = useState(false);
  let [symbol, setsymbol] = useState(false);
  let [passwordlenght, setpasswordlenght] = useState(10);
  let [fPass, setPass] = useState("");
  let createPassword = () => {
    let charSet = "";
    let finalPass = "";
    if (uppercase || lowercase || snumber || symbol) {
      if (uppercase) charSet += UC;
      if (lowercase) charSet += LC;
      if (snumber) charSet += NC;
      if (symbol) charSet += SC;
      console.log(charSet);
      for (let i = 0; i < passwordlenght; i++) {
        finalPass += charSet.charAt(Math.floor(Math.random() * charSet.length));
      }
      setPass(finalPass);
    } else {
      alert("Please select at least one checkbox");
    }
  };
  let copyPass = () => {
    navigator.clipboard.writeText(fPass);
  };
  return (
    <>
      <div className="passwordbox">
        <h2>Password Generator</h2>
        <div className="passwordBoxin">
          <input type="text" readOnly value={fPass} />
          <button onClick={() => copyPass()}>Copy</button>
        </div>
        <div className="passlength">
          <label>Password Length</label>
          <input
            type="number"
            max={20}
            value={passwordlenght}
            onChange={(e) => {
              setpasswordlenght(e.target.value);
            }}
          />
        </div>
        <div className="passlength">
          <label>Include Upper Case</label>
          <input
            type="checkbox"
            checked={uppercase}
            onChange={() => setuppercase(!uppercase)}
          />
        </div>
        <div className="passlength">
          <label>Include Lower Case</label>
          <input
            type="checkbox"
            checked={lowercase}
            onChange={() => setlowercase(!lowercase)}
          />
        </div>
        <div className="passlength">
          <label>Include Number </label>
          <input
            type="checkbox"
            checked={snumber}
            onChange={() => setnumber(!snumber)}
          />
        </div>
        <div className="passlength">
          <label>Include Symbol</label>
          <input
            type="checkbox"
            checked={symbol}
            onChange={() => setsymbol(!symbol)}
          />
        </div>
        <button onClick={createPassword}>Generate Password</button>
      </div>
    </>
  );
}

export default App;
