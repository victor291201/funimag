import React,{Component} from 'react';
import "../utils/styles/styles.css";
import Navbar from '../../../global/components/navBar/pages/Navbar';
import Card2 from '../../../global/components/card2/pages/Card2';
import { FaBrain, FaFacebookF, FaInstagram } from "react-icons/fa";




class Profile extends Component{
    constructor(props){
        super(props);
        this.state={
            toggle: false
        };
        this.onClick = this.onClick.bind(this);
    }
    onClick=()=>{
        this.setState(prevState => ({
            toggle: !prevState.toggle
        }));
    }
    render(){
        return(
            <div className='Prbody'>
                <Navbar/>
                <div className='Prperson'>
                    <div className='Prperson-profile'>
                        <div className='Prperson-img' onClick={this.onClick}></div>
                        {this.state.toggle?
                            <div className='Pr-MenuImg'>
                                <ul>
                                    <li>Ver foto de perfil</li>
                                    <li>Seleccionar foto de perfil</li>
                                </ul>
                            </div>
                            :
                            <div className='Pr-MenuImg Pr-Menu-Disactive'>
                                <ul>
                                    <li>Ver foto de perfil</li>
                                    <li>Seleccionar foto de perfil</li>
                                </ul>
                            </div>
                        }
                        <h1>Nombres y apellidos</h1>
                        <p>Facultad</p>
                    </div>
                    <p className='Prdescripcion'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean turpis ligula, posuere eget erat ac, viverra suscipit massa. Sed id efficitur risus. Nunc pretium eros sem, vitae vulputate arcu rutrum ut. Morbi vulputate, neque ut molestie porta.</p>
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
                        </div>
                    </div>
                    <div className='Prsocial'>
                        <p><div><FaInstagram/></div>Jane_doe123</p>
                        <p><div><FaFacebookF/></div>Jane doe orozco</p>
                    </div>
                </div>
                <div className='Prstats'>
                    <div className='Prstats-container'>
                        <div className='Prstats-title'>
                            <div className='Prcstats'>
                                <h1>stats</h1>
                                <div className='Prcontainer-stats'>
                                    <div className='Prstat'>
                                        <p className='Prtitle-stat'>
                                            <span class="material-symbols-outlined">
                                                favorite
                                            </span>
                                        </p>
                                        <div className='Prpoints-ofstat'>
                                            <div className='Prpoints'></div>
                                        </div>
                                        <p>4,2</p>
                                    </div>
                                    <div className='Prstat'>
                                        <p className='Prtitle-stat'>
                                            <span class="material-symbols-outlined">
                                                psychology
                                            </span>
                                        </p>
                                        <div className='Prpoints-ofstat'>
                                            <div className='Prpoints'></div>
                                        </div>
                                        <p>4,2</p>
                                    </div>
                                    <div className='Prstat'>
                                        <p className='Prtitle-stat'>
                                            <span class="material-symbols-outlined">
                                                sentiment_very_satisfied
                                            </span>
                                        </p>
                                        <div className='Prpoints-ofstat'>
                                            <div className='Prpoints'></div>
                                        </div>
                                        <p>4,2</p>
                                    </div>
                                    <div className='Prstat'>
                                        <p className='Prtitle-stat'>
                                            <span class="material-symbols-outlined">
                                                <FaBrain/>
                                            </span>
                                        </p>
                                        <div className='Prpoints-ofstat'>
                                            <div className='Prpoints'></div>
                                        </div>
                                        <p>4,2</p>
                                    </div>
                                    <div className='Prstat'>
                                        <p className='Prtitle-stat'>
                                            <span class="material-symbols-outlined">
                                                groups
                                            </span>
                                        </p>
                                        <div className='Prpoints-ofstat'>
                                            <div className='Prpoints'></div>
                                        </div>
                                        <p>4,2</p>
                                    </div>
                                </div>
                            </div>
                            <div className='Prcvelocimeter'>
                                <div className='Prvelocimeterbox'>
                                    <div className='Prvelocimeter'>
                                        <div className='Prvelocimeterboard'>
                                            <div></div>
                                            <div></div>
                                        </div>
                                        <div className='Prvelocimeterpointer'>
                                            <div>
                                                <div></div>
                                                <div></div>
                                            </div>
                                        </div>
                                    </div>
                                    <input type="number" value={4.2}/>
                                </div>
                            </div>
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
