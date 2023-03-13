import { useState } from 'react';
import currencyIcon  from '../../images/currency-icon.png';
import './styles.scss'



function JoinCard() {
const [buttonPress, setButtonPress]=useState({join:false, oneSecond:false, active:false})
const [betAmount, setBetAmount]=useState<any>((0).toFixed(2))
const [cashOut, setCashOut]=useState<any>((0).toFixed(2))
  
 return <div className='join-wrapper'>
    <div className='join-inner-wrapper'><div className='upper-button-wrapper'>
<button className={`${!buttonPress.active?'active':'passive'}`} onMouseDown={()=>setButtonPress({...buttonPress, active:false})}>Manual</button>
<button className= {`${buttonPress.active?"active":"passive"}`} onMouseDown={()=>setButtonPress({...buttonPress, active:true})}>Auto</button></div>
<p>BET AMOUNT</p>
<div className='middle-wrapper'>
<img src={currencyIcon} alt='currency' className='currency'/>
    <div className='sec-button-wrapper'>
<button className={`${buttonPress.oneSecond?'secondary-button-pressed secondary-button':'secondary-button'}`} 
onClick={()=>setBetAmount((betAmount/2).toFixed(2))}
onMouseDown={()=>setButtonPress({...buttonPress,oneSecond:true})} 
// onMouseUp={()=>setButtonPress({...buttonPress, oneSecond:false})}
>1/2</button>
<button className={`${buttonPress.oneSecond?'secondary-button-pressed secondary-button':'secondary-button'}`} onMouseDown={()=>setButtonPress({...buttonPress,oneSecond:true})} 

onClick={()=>setBetAmount((betAmount*2).toFixed(2))}
// onMouseUp={()=>setButtonPress({...buttonPress, oneSecond:false})}
>2x</button></div>
    <input placeholder='0.00' value={betAmount} onChange={(e:any)=>setBetAmount(e.target.value)}/>

</div>
<p>AUTO CASHOUT</p>
<div className='middle-wrapper'>
    <div className='sec-button-wrapper'>
<button className={`${buttonPress.oneSecond?'secondary-button-pressed secondary-button':'secondary-button'}`} onMouseDown={()=>setButtonPress({...buttonPress,oneSecond:true})} 
onClick={()=>setCashOut((cashOut/2).toFixed(2))}
// onMouseUp={()=>setButtonPress({...buttonPress, oneSecond:false})}
>1/2</button>
<button className={`${buttonPress.oneSecond?'secondary-button-pressed secondary-button':'secondary-button'}`} onMouseDown={()=>setButtonPress({...buttonPress,oneSecond:true})} 
onClick={()=>setCashOut((cashOut*2).toFixed(2))}
// onMouseUp={()=>setButtonPress({...buttonPress, oneSecond:false})}
>2x</button></div>
    <input className='input-cashout' placeholder='0.00' value={cashOut} onChange={(e:any)=>setCashOut(e.target.value)}/>

</div>
<button className= {`${buttonPress.join?'pressed join-button':'join-button'}`} onMouseDown={()=>setButtonPress({...buttonPress, join:true})} onMouseUp={()=>setButtonPress({...buttonPress,join:false})}>{buttonPress.join?'STARTING...':'JOIN GAME'}</button>
</div>
 </div>
}

export default JoinCard;

