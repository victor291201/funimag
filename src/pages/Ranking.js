import React,{Component} from 'react';
import "../styles/Ranking/styles.css";
import Navbar from '../components/Navbar';
import Card1 from '../components/Card1';



class Ranking extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className='Rabody'>
                <Navbar/>
                <div className='Raranking'>
                    <Card1/>
                    <Card1/>
                    <Card1/>
                    <Card1/>
                </div>
            </div>

        )
    }
}

export default Ranking;