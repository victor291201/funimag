import React,{Component} from 'react';
import "../styles/Register/styles.css";



class Register extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className='Rebody'>
                <div className='Recard'>
                    <h1>Registrarse</h1>
                    <div className='Reinput'>
                        <label for="">Correo institucional:</label>
                        <input type="text" id=""/>
                    </div>
                    <div className='Reinput'>
                        <label for="">Contraseña:</label>
                        <input type="text" id=""/>
                    </div>
                    <button>Registrarse</button>
                </div>
            </div>
        )
    }
}

export default Register;
