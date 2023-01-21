import React,{Component} from 'react';
import "../styles/Valoracion/styles.css";
import Navbar from '../components/Navbar';
import Card1 from '../components/Card1';



class Valoracion extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className='Vabody'>
                <Navbar/>
                <div className='Varanking'>
                    <Card1/>
                    <Card1/>
                    <Card1/>
                    <Card1/>
                </div>
            </div>

        )
    }
}

export default Valoracion;
