import React,{Component} from 'react';
import "../utils/styles/styles.css";
import Navbar from '../../../global/components/navBar/pages/Navbar';
import Card1 from '../../../global/components/card1/pages/Card1';
import Filter from '../../../global/components/filter/pages/Filter';



class Ranking extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className='Rabody'>
                <Navbar/>
                <div className='Racontainer'>
                    <Filter/>
                    <div className='Raranking'>
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

export default Ranking;
