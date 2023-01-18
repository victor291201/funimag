import React,{Component} from 'react';
import "../styles/styles.css";



class Navbar extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
                <div className='nav'>
                    <div className='nav-pt1'>
                        <div className='logo'></div>
                        <div className='input'>
                            <input type="text" placeholder='Buscar...'/>
                            <span className="material-symbols-outlined">
                                search
                            </span>
                        </div>
                    </div>
                    <div className='nav-pt2'>
                        <span class="material-symbols-outlined">
                            home
                        </span>
                        <span class="material-symbols-outlined">
                            bar_chart
                        </span>
                        <span class="material-symbols-outlined">
                            star
                        </span>
                    </div>
                    <div className='nav-pt3'>
                        <div className='user'></div>
                        <p>Jane Doe</p>
                    </div>
                    <div className='menu'>
                        <ul>
                            <li>Ver Perfil</li>
                            <li>Cambiar Contraseña</li>
                            <li>Cerrar Sesion</li>
                        </ul>
                    </div>
                </div>

        )
    }
}

export default Navbar;
