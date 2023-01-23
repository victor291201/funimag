import React,{Component} from 'react';
import "../styles/Profile/styles.css";
import Navbar from '../components/Navbar';
import Card2 from '../components/Card2';




class Profile extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className='Prbody'>
                <Navbar/>
                <div className='Prperson'>
                    <div className='Prperson-profile'>
                        <div className='Prperson-img'></div>
                        <h1>Nombres y apellidos</h1>
                        <p>Facultad</p>
                    </div>
                    <div className="Prperson-stars">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className='Prperson-gustos'>
                        <p>Gustos</p>
                        <div className='Prgustos'>
                            <p>comer</p>
                            <p>comer</p>
                            <p>comer</p>
                            <p>comer</p>
                            <p>comer</p>
                            <p>comer</p>
                            <p>comer</p>
                        </div>
                    </div>
                    <div className='Prperson-logros'>
                        <p>Logros</p>
                        <div className='Prlogros'>
                            <p>comer</p>
                            <p>comer</p>
                            <p>comer</p>
                            <p>comer</p>
                            <p>comer</p>
                            <p>comer</p>
                            <p>comer</p>
                        </div>
                    </div>
                </div>
                <div className='Prstats'>
                    <div className='Prstats-container'>
                        <div className='Prstats-title'>
                            <h1>stats</h1>
                            <div className='Prcontainer-stats'>
                                <div className='Prstat'>
                                    <p className='Prtitle-stat'> Belleza</p>
                                    <div className='Prpoints-ofstat'>
                                        <div className='Prpoints'></div>
                                    </div>
                                    <p>4,2</p>
                                </div>
                                <div className='Prstat'>
                                    <p className='Prtitle-stat'>Carisma</p>
                                    <div className='Prpoints-ofstat'>
                                        <div className='Prpoints'></div>
                                    </div>
                                    <p>4,2</p>
                                </div>
                                <div className='Prstat'>
                                    <p className='Prtitle-stat'>Humor</p>
                                    <div className='Prpoints-ofstat'>
                                        <div className='Prpoints'></div>
                                    </div>
                                    <p>4,2</p>
                                </div>
                                <div className='Prstat'>
                                    <p className='Prtitle-stat'>Inteligencia</p>
                                    <div className='Prpoints-ofstat'>
                                        <div className='Prpoints'></div>
                                    </div>
                                    <p>4,2</p>
                                </div>
                                <div className='Prstat'>
                                    <p className='Prtitle-stat'>Sociabilidad</p>
                                    <div className='Prpoints-ofstat'>
                                        <div className='Prpoints'></div>
                                    </div>
                                    <p>4,2</p>
                                </div>
                                
                            </div>
                            <p className='Prmedia'>media (4,2)</p>
                        </div>
                        
                    </div>
                        <div className='Prsearch'>
                            <p>valoracion y reseñas</p>
                            
                            <div className='Prinput'>
                                <input type="text" placeholder='Buscar...'/>
                                <span className="material-symbols-outlined">
                                    search
                                </span>
                            </div>
                        </div>
                    <div className='Prranking'>
                        <Card2/>
                        <Card2/>
                        <Card2/>
                        <Card2/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;
