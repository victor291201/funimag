import React,{Component} from 'react';
import "../styles/Inicio/styles.css";
import Navbar from '../components/Navbar';
import Card2 from '../components/Card2';
import Card1 from '../components/Card1';



class Inicio extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className='Inbody'>
                <Navbar/>
                <div className='Incontainer'>
                    <div className='Infilters'>
                        <div className='Infilters-container'>
                            <div className='Infilter-container-Tshearch'>
                                <label><input type="checkbox"  value="valoraciones"/>Valoraciones</label>
                                <label><input type="checkbox"  value="personas"/>Personas</label>
                            </div>
                            <div className='Infilter-container-Valorations'>
                                <div className='Instars'>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                                <input type="date" className='Indate'/>
                                <div className='Inlikes'>
                                    <input type="range"/>
                                </div>
                                <div className='Indislikes'>
                                    <input type="range"/>
                                </div>
                                <div className='Incoments'>
                                    <input type="range"/>
                                </div>
                                <div className='Inedad'>
                                    <input type="text"/>
                                </div>
                            </div>
                            <div className='Infilter-container-Peoples'></div>
                        </div>
                    </div>
                    <div className='Inranking'>
                        <Card2/>
                        <Card1 tipo/>
                        <Card2/>
                        <Card2/>
                        <Card1 tipo/>
                        <Card2/>
                    </div>
                    <div className='Inads'>
                        edede
                    </div>
                </div>
            </div>

        )
    }
}

export default Inicio;
