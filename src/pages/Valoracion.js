import React,{Component} from 'react';
import "../styles/Valoracion/styles.css";
import Navbar from '../components/Navbar';
import Card1 from '../components/Card1';
import Filter from '../components/Filter';



class Valoracion extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className='Vabody'>
                <Navbar/>
                <div>
                    <Filter/>
                    <div className='Varanking'>
                        <Card1/>
                        <Card1/>
                        <Card1/>
                        <Card1/>
                    </div>
                    <div></div>
                </div>
            </div>

        )
    }
}

export default Valoracion;
