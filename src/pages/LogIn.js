import React,{Component} from 'react';
import "../styles/LogIn/styles.css";



class LogIn extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className='Lgbody'>
                <div className='Lg-pt1'>
                    <h1>Funimag</h1>
                    <p>¡La nueva red social hechas por estudiantes de la universidad del magdalena para estudiantes de la universidad del magdalena!</p>
                </div>
                <div className='Lg-pt2'>
                    <div className='Lg-card'>
                        <p className='Lg-titulo'>Registrarse</p>
                        <div className='Lginput-container'>
                            <div className='Lginput'>
                                <label for="correo">Correo:</label>
                                <input type="text" id="correo"/>
                            </div>
                            <div className='Lginput'>
                                <label for="contraseña">Contraseña:</label>
                                <input type="password" id="contraseña"/>
                            </div>
                            <button className='Lginiciars'>Iniciar sesion</button>
                            <p className='Lgolvidaste'>olvidaste tu contraseña</p>
                        </div>
                        <hr/>
                        <button className='Lgregister'>Registrarse</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default LogIn;
