import { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./App.css";
import Slider from "./slider";

function App() {
  const [currentValue, setCurrentValue] = useState(0);
  const [modeUnder, setModeUnder] = useState(true);
  const [payout, setPayout]=useState(0)
  const [profit, setProfit]=useState(0)
  const [rollNumber,setRollNumber]=useState(50)
  const [betAmount, setBetAmount]=useState(50)
  const sliderRef:any=useRef(0)

  const rundomNumberGen=()=>{
    setCurrentValue (()=> Math.floor(Math.random() * 100))
    if (rollNumber>currentValue&&modeUnder||rollNumber<currentValue&&!modeUnder){
      setProfit(rollNumber*+betAmount/100)
    }
    if (rollNumber<currentValue&&modeUnder||rollNumber>currentValue&&!modeUnder){
      setProfit(0)
      alert(`You lose. Generated Number is ${currentValue}`)//alert
    }
  }

//   useEffect(()=>{ 
  
// },[modeUnder, rollNumber, betAmount, currentValue])

  return (
    <div className="App">
      <Slider currentValue = {currentValue} modeUnder={modeUnder} setCurrentValue={setCurrentValue} slider={sliderRef}/>
      <button className="button-wrapper" onClick={rundomNumberGen}>Place bet</button>
      <div>
        <div className="card">
        <div><p>Bet amount</p>  <input type='number' value={betAmount} onChange={(e:any)=>setBetAmount(e.target.value)}/></div>
        <div><p>Profit</p>  <input type='number' value={profit} readOnly/></div>
      </div>
      <div>
        <div className="card">
        <div><p>Payout</p>  <input type='number' value={1+rollNumber/100} readOnly/></div>
        <div><p>Roll {modeUnder?'under':'over'}</p> <div><input type='number' value={rollNumber} onChange={(e:any)=>setRollNumber(e.target.value)}/><button onClick={()=>setModeUnder(()=>!modeUnder)}>mode</button></div></div>
      <div><p>Win chance</p>  <input type='string' value={modeUnder?rollNumber+'%':100-rollNumber+'%'} readOnly/></div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
