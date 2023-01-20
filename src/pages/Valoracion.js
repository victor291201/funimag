import React,{Component} from 'react';
import "../styles/styles.css";
import Navbar from '../components/Navbar';
import Card from '../components/Card';



class Valoracion extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className='body'>
                <Navbar/>
                <div className='ranking'>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>

        )
    }
}

export default Valoracion;
