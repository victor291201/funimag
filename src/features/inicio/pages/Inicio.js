import React,{Component} from 'react';
import "../utils/styles/styles.css";
import Navbar from "../../../global/components/navBar/pages/Navbar"
import Card2 from '../../../global/components/card2/pages/Card2';
import Card1 from '../../../global/components/card1/pages/Card1';
import Filter from '../../../global/components/filter/pages/Filter';
import DoubleRange from '../../../global/components/doubleRange/pages/DoubleRange';



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
                                <h4>Tipo de busqueda</h4>
                                <div className='Ininputscontainer'>
                                    <label><input type="checkbox"  value="valoraciones"/>Valoraciones</label>
                                    <label><input type="checkbox"  value="personas"/>Personas</label>
                                </div>
                            </div>
                            <div className='Infilter-container-Valorations'>
                                <h4>Filtros de valoraciones</h4>
                                <div className='Ininputscontainer'>
                                    <div className='Instars-container'>
                                        <p>Estrellas:</p>
                                        <div className='Instars'>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>
                                    </div>
                                    <div className='Indate'>
                                        <p>Fecha:</p> 
                                        <input type="date" className='Incalendar'/>
                                        <input type="date" className='Incalendar'/>
                                    </div>
                                    <div className='Inlikes'>
                                        <p>Likes:</p> 
                                        <DoubleRange/>
                                    </div>
                                    <div className='Indislikes'>
                                        <p>Dislikes:</p> 
                                        <DoubleRange/>
                                    </div>
                                    <div className='Incoments'>
                                        <p>Comentarios:</p> 
                                        <DoubleRange/>
                                    </div>
                                    <div className='Inedad'>
                                        <p>Edad:</p> 
                                        <DoubleRange/>
                                    </div>
                                </div>
                            </div>
                            <Filter type/>
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
                        
                    </div>
                </div>
            </div>

        )
    }
}

export default Inicio;
