import React,{Component} from 'react';
import "../styles/Inicio/styles.css";
import Navbar from '../components/Navbar';
import Card2 from '../components/Card2';



class Inicio extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className='Inbody'>
                <Navbar/>
                <div className='Inranking'>
                    <Card2/>
                    <Card2/>
                    <Card2/>
                    <Card2/>
                </div>
            </div>

        )
    }
}

export default Inicio;
