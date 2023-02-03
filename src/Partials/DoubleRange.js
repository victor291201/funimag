import "../styles/DoubleRange/styles.css"

function DoubleRange(props) {
    return (
        <div className='DRcontainer'>
            <input type="number" className="DRmin" min="0" max="100" value="10" disabled/>
            <div className="DRrange">
                <div className="DRvalue"></div>
                <input className="DRrange-min" type="range" min="0" max="100" />
                <input className="DRrange-max" type="range" min="0" max="100" />
            </div>
            <input type="number" className="DRmin" min="0" max="100" value="100" disabled/>
        </div>
    );
  }
  
  export default DoubleRange;
