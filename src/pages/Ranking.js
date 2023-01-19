import React,{Component} from 'react';
import "../styles/styles.css";
import Navbar from '../components/Navbar';



class Ranking extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className='body'>
                <Navbar/>
                <div className='ranking'>
                    <div className='card'>
                        <div className='card-pt1'></div>
                        <div className='card-pt2'>
                            <div className='card-stats'></div>
                            <div className='card-reviews'></div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Ranking;
