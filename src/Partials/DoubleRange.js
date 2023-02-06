import "../styles/DoubleRange/styles.css"
import { useState } from "react";

function DoubleRange(props) {
    const [Min, setMin] = useState(0);
    const [Max, setMax] = useState(100);
    function onChangeMin(e){
        if( Max - e.target.value > 10){
            setMin(e.target.value)
        }
    }
    function onChangeMax(e){
        if( e.target.value - Min > 10){
            setMax(e.target.value)
        }
    }
    return (
        <div className='DRcontainer'>
            <input type="number" className="DRmin" min="0" max="100" value={Min} disabled/>
            <div className="DRrange">
                <div className="DRvalue" style={{left:Min+"%", right: 100-Max+"%"}}></div>
                <input className="DRrange-min" type="range" min="0" max="100" onChange={(e)=>{onChangeMin(e)}} value={Min} />
                <input className="DRrange-max" type="range" min="0" max="100" onChange={(e)=>{onChangeMax(e)}} value={Max}/>
            </div>
            <input type="number" className="DRmin" min="0" max="100" value={Max} disabled/>
        </div>
    );
  }
  
  export default DoubleRange;
