import { useState } from "react";
import "./App.css";
import Slider from "./slider";

function App() {
  const [currentValue, setCurrentValue] = useState(0);
  const [modeUnder, setModeUnder] = useState(true);

  const rundomNumberGen=()=>{
    setCurrentValue ( Math.floor(Math.random() * 100))
  }

  return (
    <div className="App">
      <Slider currentValue = {currentValue} modeUnder={modeUnder} setCurrentValue={setCurrentValue}/>
      <button className="button-wrapper" onClick={rundomNumberGen}>Place bet</button>

      <div>
        <div className="card">
        <div><p>Bet amount</p>  <input/></div>
        <div><p>Profit</p>  <input/></div>

      </div>
      <div>
        <div className="card">
        <div><p>Payout</p>  <input/></div>
        <div><p>Roll under</p> <div><input/><button onClick={()=>setModeUnder(()=>!modeUnder)}>mode</button></div></div>
        <div><p>Win chance</p>  <input/></div>
        </div>
        </div>

      </div>
    </div>
  );
}

export default App;
