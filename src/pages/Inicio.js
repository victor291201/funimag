import React,{Component} from 'react';
import "../styles/Inicio/styles.css";
import Navbar from '../components/Navbar';
import Card2 from '../components/Card2';
import Card1 from '../components/Card1';
import Filter from '../components/Filter';



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
                                        <input type="range"/>
                                    </div>
                                    <div className='Indislikes'>
                                        <p>Dislikes:</p> 
                                        <input type="range"/>
                                    </div>
                                    <div className='Incoments'>
                                        <p>Comentarios:</p> 
                                        <input type="range"/>
                                    </div>
                                    <div className='Inedad'>
                                        <p>Edad:</p> 
                                        <input type="range"/>
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
