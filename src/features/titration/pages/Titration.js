import React,{Component} from 'react';
import "../utils/styles/styles.css";
import Navbar from '../../../global/components/navBar/pages/Navbar';
import Card1 from '../../../global/components/card1/pages/Card1';
import Filter from '../../../global/components/filter/pages/Filter';



class Titration extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className='Vabody'>
                <Navbar/>
                <div className='Vacontainer'>
                    <Filter/>
                    <div className='Varanking'>
                        <Card1/>
                        <Card1/>
                        <Card1/>
                        <Card1/>
                    </div>
                    <div className='Vaads'></div>
                </div>
            </div>

        )
    }
}

export default Titration;
