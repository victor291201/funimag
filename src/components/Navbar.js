import React,{Component} from 'react';
import { FaHome } from 'react-icons/fa';
import "../styles/Navbar/styles.css";



class Navbar extends Component{
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
                <div className='Nanav'>
                    <div className='Nanav-pt1'>
                        <div className='Nalogo'></div>
                        <div className='Nainput'>
                            <input type="text" placeholder='Buscar...'/>
                            <span className="material-symbols-outlined">
                                search
                            </span>
                        </div>
                    </div>
                    <div className='Nanav-pt2'>
                        <span class="material-symbols-outlined">
                            <FaHome/>
                        </span>
                        <span class="material-symbols-outlined">
                            bar_chart
                        </span>
                        <span class="material-symbols-outlined">
                            star
                        </span>
                    </div>
                    <div className='Nanav-pt3' onClick={this.onClick}>
                        <div className='Nauser'></div>
                        <p>Jane Doe</p>
                    </div>
                    {
                        this.state.toggle?
                            <div className='Namenu'>
                                <ul>
                                    <li>Ver Perfil</li>
                                    <li>Cambiar Contraseña</li>
                                    <li>Cerrar Sesion</li>
                                </ul>
                            </div>
                        :
                        <div className='Namenu Namenu-disactive'>
                        <ul>
                            <li>Ver Perfil</li>
                            <li>Cambiar Contraseña</li>
                            <li>Cerrar Sesion</li>
                        </ul>
                    </div>
                    }
                </div>

        )
    }
}

export default Navbar;
